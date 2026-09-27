/* eslint-disable */

class CacheManager {
    constructor(cacheName, cacheTTL, cacheLimit) {
        this.cacheName = cacheName || 'default-cache';
        this.cacheTTL = cacheTTL || 5 * 60 * 1000; // Default TTL: 5 min
        this.cacheLimit = cacheLimit || 50; // Default max cache size
        this.ongoingRequests = new Map(); // Track pending requests
    }

    async handleRequest(request) {
        const requestClone = request.clone();
        const requestKey = await this.generateHashKey(requestClone);

        // Check for ongoing requests
        if (this.ongoingRequests.has(requestKey)) {
            return this.ongoingRequests.get(requestKey)( request )
        }

        // Try to get cached response first
        const cachedResponse = await this.getFromCache(requestKey);
        if (cachedResponse) {
            return cachedResponse;
        }

        // If no cache, create a new fetch promise
        const fetchPromise = new Promise(async (resolve, reject) => {
            try {
                const {
                    url,
                    method,
                    headers,
                } = request;

                let body = null;

                if (method === 'POST' || method === 'PUT') {
                    try {
                        const requestBody = await request.json();
                        body = JSON.stringify(requestBody);
                    } catch (e) {
                        console.warn('Failed to parse request body:', e);
                    }
                }

                const response = await fetch( url, {
                    method: method,
                    headers: headers,
                    body: body,
                    credentials: 'include',
                });
                const responseClone = response.clone();
                await this.cacheResponse(requestKey, responseClone);
                this.ongoingRequests.delete(requestKey);
                return resolve( response.clone() );
            } catch( error ) {
                this.ongoingRequests.delete(requestKey);
                return reject( error );
            }
        } );

        this.ongoingRequests.set(requestKey, async ( newRequest ) => {
            try {
                await fetchPromise;
                return this.getFromCache(requestKey);
            } catch ( e ) {
                return this.handleRequest( newRequest );
            }
        } );
        return fetchPromise;
    }

    async getFromCache(requestKey) {
        const cache = await caches.open(this.cacheName);
        const cachedResponse = await cache.match(requestKey);

        if (cachedResponse) {
            const cachedData = await cachedResponse.json();
            const cachedTime = cachedData.timestamp;

            // Invalidate cache if it's older than the TTL
            if (Date.now() - cachedTime > this.cacheTTL) {
                await cache.delete(requestKey);
                return null;
            }

            return new Response(cachedData.body, {
                status: cachedResponse.status,
                statusText: cachedResponse.statusText,
                headers: cachedResponse.headers,
            });
        }

        return null;
    }

    async cacheResponse(requestKey, response) {
        const cache = await caches.open(this.cacheName);
        const clonedResponse = response.clone();

        const body = await clonedResponse.text();
        const cacheData = {
            timestamp: Date.now(),
            body: body,
        };

        await cache.put(requestKey, new Response(JSON.stringify(cacheData), { headers: clonedResponse.headers }));
        await this.enforceCacheLimit();
    }

    async enforceCacheLimit() {
        const cache = await caches.open(this.cacheName);
        const keys = await cache.keys();

        if (keys.length > this.cacheLimit) {

            const cleanupTarget = Math.floor(keys.length * 0.75); //* remove 75% of cache entries 
            const entries = await Promise.all(
                keys.map(async (key) => {
                    const cachedResponse = await cache.match(key);
                    const cachedData = await cachedResponse.json();
                    return { key, timestamp: cachedData.timestamp };
                })
            );

            entries.sort((a, b) => a.timestamp - b.timestamp);
            const entriesToDelete = entries.slice(0, cleanupTarget);
            await Promise.all(entriesToDelete.map((entry) => cache.delete(entry.key)));

        }
    }

    async generateHashKey(request) {
        const { method, url } = request;
        let body = '';

        if (method === 'POST' || method === 'PUT') {
            try {
                const requestBody = await request.json();
                body = JSON.stringify(requestBody);
            } catch (e) {
                console.warn('Failed to parse request body:', e);
            }
        }

        const data = method + url + body;
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
        return Array.from(new Uint8Array(hashBuffer))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    }
}


const cacheManager = new CacheManager('search-attribute-cache', 5 * 60 * 1000, 50);

self.addEventListener('install', (event) => {
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); 
});

self.addEventListener('fetch', (event) => {
    const { url } = event.request;

    if (!url.endsWith('search_attribute')) return;

    // rewrite the signal of the request to be able to cancel it
    event.request.signal = undefined;

    event.respondWith(cacheManager.handleRequest(event.request));
});