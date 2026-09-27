(() => {
var fe = Object.defineProperty;
var me = (o, e, t) => e in o ? fe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => me(o, typeof e != "symbol" ? e + "" : e, t);
const ge = () => {
  try {
    return window.__uxcSilent === !0;
  } catch {
    return !1;
  }
};
class pe {
  constructor() {
    i(this, "aborted", !1);
    i(this, "blockedCount", 0);
    i(this, "onBlocked", null);
  }
  setOnBlocked(e) {
    this.onBlocked = e;
  }
  recordStatus(e) {
    this.aborted || (e === 0 ? (this.blockedCount++, this.blockedCount >= 5 && this.fireBlocked(`${this.blockedCount} consecutive uploads blocked`)) : this.blockedCount = 0);
  }
  isAborted() {
    return this.aborted;
  }
  reset() {
    this.aborted = !1, this.blockedCount = 0, this.onBlocked = null;
  }
  fireBlocked(e) {
    if (this.aborted || !this.onBlocked) return;
    ge() || console.warn(`[UXCam] Upload delivery blocked (${e}). Aborting session.`), this.aborted = !0;
    const t = this.onBlocked;
    this.onBlocked = null, t();
  }
}
const Z = () => {
  try {
    const o = window;
    return o.__uxcSilent !== !0 && o.__uxcDebugOn === !0;
  } catch {
    return !1;
  }
}, G = (...o) => {
  Z() && console.log("[UXCam]", ...o);
}, F = (...o) => {
  Z() && console.warn("[UXCam]", ...o);
}, Se = 64 * 1024, ee = Se * 0.8, ye = 5, we = 2e3, Ie = 6e4, be = 3e3, Te = "0000", ke = [500, 1500], te = "uxcam:0.1:session:pending-uploads:", ve = 50;
function _e(o) {
  const e = o.get("file");
  return e instanceof Blob ? e.size : 0;
}
function se(o, e) {
  if (typeof fetch != "function") return !1;
  try {
    return fetch(o, {
      method: "POST",
      body: e,
      keepalive: !0,
      mode: "cors"
    }).catch(() => {
    }), !0;
  } catch {
    return !1;
  }
}
function Ce(o, e) {
  if (typeof fetch != "function") return !1;
  try {
    return fetch(o, { method: "POST", body: e, mode: "cors" }).catch(() => {
    }), !0;
  } catch {
    return !1;
  }
}
function ie(o, e) {
  var t;
  try {
    return ((t = navigator.sendBeacon) == null ? void 0 : t.call(navigator, o, e)) ?? !1;
  } catch {
    return !1;
  }
}
function ne(o, e) {
  const t = _e(e) < ee;
  return t && se(o, e) || !t && Ce(o, e) ? !0 : ie(o, e);
}
function Ae() {
  return typeof fetch == "function" ? "fetch" : typeof XMLHttpRequest == "function" ? "xhr" : "fetch";
}
function L(o, e, t) {
  const s = new FormData(), n = `batch-${e}.bin`;
  for (const [r, c] of Object.entries(o.fields))
    r !== "file" && (r === "key" ? s.append(r, c.endsWith("/") ? `${c}${n}` : `${c}/${n}`) : s.append(r, c));
  return s.append("file", new Blob([t], { type: "application/octet-stream" }), n), s;
}
function oe(o, e, t) {
  return fetch(o, { method: "POST", body: e, keepalive: t }).then((s) => ({ ok: s.ok, status: s.status })).catch(() => ({ ok: !1, status: 0 }));
}
function re(o, e) {
  return new Promise((t) => {
    const s = new XMLHttpRequest();
    s.open("POST", o, !0), s.onreadystatechange = () => {
      s.readyState === 4 && t({ ok: s.status >= 200 && s.status < 300, status: s.status });
    }, s.onerror = () => t({ ok: !1, status: 0 }), s.send(e);
  });
}
function ae(o) {
  return o === 408 || o === 429 || o >= 500;
}
function De(o) {
  return Math.min(we * Math.pow(2, o), Ie);
}
function _(o) {
  return `${te}${o}`;
}
function Oe(o) {
  const e = new Uint8Array(o);
  let t = "";
  const s = 32768;
  for (let n = 0; n < e.length; n += s)
    t += String.fromCharCode.apply(null, Array.from(e.subarray(n, n + s)));
  return btoa(t);
}
function H(o) {
  const e = atob(o), t = new Uint8Array(e.length);
  for (let s = 0; s < e.length; s++) t[s] = e.charCodeAt(s);
  return t.buffer;
}
function R(o) {
  try {
    const e = sessionStorage.getItem(_(o));
    if (!e) return [];
    const t = JSON.parse(e);
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}
function ce(o, e) {
  try {
    if (e.length === 0) {
      sessionStorage.removeItem(_(o));
      return;
    }
    sessionStorage.setItem(_(o), JSON.stringify(e));
  } catch {
    try {
      const t = e.slice(Math.floor(e.length / 2));
      sessionStorage.setItem(_(o), JSON.stringify(t));
    } catch {
    }
  }
}
function Le(o, e, t) {
  const n = R(o).filter((c) => c.batchKey !== e);
  n.push({ batchKey: e, packedB64: Oe(t) });
  const r = n.slice(-ve);
  ce(o, r);
}
function Pe(o, e) {
  const s = R(o).filter((n) => n.batchKey !== e);
  ce(o, s);
}
function xe(o) {
  try {
    sessionStorage.removeItem(_(o));
  } catch {
  }
}
function Ee(o) {
  const e = _(o);
  try {
    const t = [];
    for (let s = 0; s < sessionStorage.length; s++) {
      const n = sessionStorage.key(s);
      n && n.startsWith(te) && n !== e && t.push(n);
    }
    G(`transport: clearing ${t.length} stale sessionStorage bucket(s) for session ${o}`);
    for (const s of t) sessionStorage.removeItem(s);
  } catch {
  }
}
class V {
  constructor(e, t, s, n) {
    i(this, "queue", []);
    i(this, "pollTimer", null);
    i(this, "transport");
    i(this, "getConfig");
    i(this, "onSettled");
    i(this, "guard");
    this.transport = e, this.getConfig = t, this.onSettled = s, this.guard = n;
  }
  enqueue(e, t) {
    const s = De(t);
    this.queue.push({
      item: e,
      retryCount: t,
      retryAt: Date.now() + s
    }), G(`transport: retry enqueued for batch ${e.batchKey}, attempt ${t + 1}, delay ${s}ms`), this.startPolling();
  }
  startPolling() {
    this.pollTimer || this.poll();
  }
  poll() {
    this.pollTimer = setTimeout(async () => {
      await this.flush(), this.queue.length > 0 ? this.poll() : this.pollTimer = null;
    }, be);
  }
  async flush() {
    const e = this.getConfig();
    if (!e) return;
    const t = Date.now(), s = this.queue.filter((n) => n.retryAt <= t);
    this.queue = this.queue.filter((n) => n.retryAt > t);
    for (const n of s) {
      const r = L(e, n.item.batchKey, n.item.packed), c = await this.send(e.url, r);
      if (this.guard.recordStatus(c.status), c.ok) {
        this.onSettled(n.item.batchKey);
        continue;
      }
      ae(c.status) && n.retryCount < ye ? this.enqueue(n.item, n.retryCount + 1) : (this.onSettled(n.item.batchKey), F(`transport: batch ${n.item.batchKey} dropped after ${n.retryCount + 1} attempts (status: ${c.status})`));
    }
  }
  send(e, t) {
    return this.transport === "fetch" ? oe(e, t, !1) : re(e, t);
  }
  /** Best-effort drain on page unload. fetch+keepalive with sendBeacon fallback. */
  drain() {
    const e = this.getConfig();
    if (!e) {
      this.queue = [];
      return;
    }
    for (const t of this.queue)
      try {
        const s = L(e, t.item.batchKey, t.item.packed);
        ne(e.url, s);
      } catch {
      }
    this.queue = [];
  }
  destroy() {
    this.pollTimer && (clearTimeout(this.pollTimer), this.pollTimer = null), this.queue = [];
  }
}
class Me {
  constructor() {
    i(this, "config", null);
    i(this, "sessionId", null);
    // Tracks keys already being processed (live or retry) so duplicate uploads
    // for the same batchKey are rejected. sessionStorage is the source of truth
    // for what needs delivering; this set just prevents in-memory double-work.
    i(this, "inFlightKeys", /* @__PURE__ */ new Set());
    i(this, "retryQueue");
    i(this, "transport");
    i(this, "isUnloading", !1);
    i(this, "duplicateTimers", /* @__PURE__ */ new Set());
    i(this, "guard", new pe());
    this.transport = Ae(), this.retryQueue = new V(
      this.transport,
      () => this.config,
      (e) => this.handleSettled(e),
      this.guard
    );
  }
  setConfig(e, t) {
    this.sessionId = t, this.config = { url: e.url, fields: e.body }, Ee(t), this.resumeFromStorage();
  }
  setOnBlocked(e) {
    this.guard.setOnBlocked(e);
  }
  upload(e, t, s) {
    this.guard.isAborted() || this.sessionId && s !== this.sessionId || (Le(s, e, t), !this.inFlightKeys.has(e) && (this.inFlightKeys.add(e), !(!this.config || this.isUnloading) && (this.sendItem({ batchKey: e, packed: t }), e === Te && this.scheduleDuplicateSends(e, t, s))));
  }
  // Schedule fire-and-forget redundant copies of batch-0000. These bypass
  // inFlightKeys/persistence/retryQueue — the canonical sendItem above owns
  // state. Duplicates only exist to win a race against a flaky first send.
  scheduleDuplicateSends(e, t, s) {
    for (const n of ke) {
      const r = setTimeout(() => {
        this.duplicateTimers.delete(r), this.sendDuplicate(e, t, s);
      }, n);
      this.duplicateTimers.add(r);
    }
  }
  sendDuplicate(e, t, s) {
    this.guard.isAborted() || this.sessionId === s && (!this.config || this.isUnloading || this.sendOnce({ batchKey: e, packed: t }).catch(() => {
    }));
  }
  /** Signal that page is unloading — upload() will queue instead of async fetch. */
  setUnloading() {
    this.isUnloading = !0;
  }
  /**
   * Fire-and-forget end marker — called BEFORE any other unload work.
   * The marker payload is tiny by construction, so we skip the size check
   * and go straight to fetch+keepalive. Falls back to sendBeacon if fetch
   * is unavailable or throws synchronously.
   */
  sendEndMarker(e, t) {
    if (!this.config) return !1;
    try {
      const s = L(this.config, e, t);
      return se(this.config.url, s) || ie(this.config.url, s);
    } catch {
      return !1;
    }
  }
  /**
   * Best-effort delivery on page unload. sendBeacon is fire-and-forget; we
   * don't remove anything from sessionStorage here — a successful beacon
   * can't be confirmed, so we keep the batch persisted. The next page load
   * will resume it; if S3 already received it, the duplicate is overwritten
   * by key (S3 is idempotent for presigned POST with the same key).
   */
  unload() {
    if (this.isUnloading = !0, !this.config || !this.sessionId) {
      this.retryQueue.drain();
      return;
    }
    const e = R(this.sessionId);
    for (const t of e)
      try {
        const s = H(t.packedB64), n = L(this.config, t.batchKey, s);
        ne(this.config.url, n);
      } catch {
      }
    this.retryQueue.drain();
  }
  /**
   * Hard reset: drop in-memory state AND clear persisted storage.
   * Used when session is invalidated — old-session frames must NOT be sent.
   */
  reset() {
    for (const e of this.duplicateTimers) clearTimeout(e);
    this.duplicateTimers.clear(), this.sessionId && xe(this.sessionId), this.sessionId = null, this.config = null, this.inFlightKeys.clear(), this.guard.reset(), this.retryQueue.destroy(), this.retryQueue = new V(
      this.transport,
      () => this.config,
      (e) => this.handleSettled(e),
      this.guard
    );
  }
  destroy() {
    this.reset();
  }
  /**
   * Read sessionStorage and start uploading anything that isn't already
   * in flight. Called on setConfig (post-reload, or first config arrival)
   * and is safe to call repeatedly — inFlightKeys prevents double-sends.
   */
  resumeFromStorage() {
    if (!this.config || !this.sessionId) return;
    const e = R(this.sessionId);
    if (e.length) {
      G(`transport: resuming ${e.length} batch(es) from sessionStorage`);
      for (const t of e)
        if (!this.inFlightKeys.has(t.batchKey))
          try {
            const s = H(t.packedB64);
            this.inFlightKeys.add(t.batchKey), this.sendItem({ batchKey: t.batchKey, packed: s });
          } catch (s) {
            F(`transport: failed to resume batch ${t.batchKey}:`, s), this.inFlightKeys.delete(t.batchKey);
          }
    }
  }
  async sendOnce(e) {
    if (!this.config) return { ok: !1, status: 0 };
    const t = L(this.config, e.batchKey, e.packed), s = await this.send(this.config.url, t);
    return this.guard.recordStatus(s.status), s;
  }
  async sendItem(e) {
    const t = await this.sendOnce(e);
    if (this.guard.isAborted()) {
      this.handleSettled(e.batchKey);
      return;
    }
    if (t.ok) {
      this.handleSettled(e.batchKey);
      return;
    }
    ae(t.status) ? this.retryQueue.enqueue(e, 0) : (this.handleSettled(e.batchKey), F(`transport: batch ${e.batchKey} failed with non-retriable status ${t.status}`));
  }
  handleSettled(e) {
    this.inFlightKeys.delete(e), this.sessionId && Pe(this.sessionId, e);
  }
  send(e, t) {
    if (this.transport === "fetch") {
      const n = (t.get("file") instanceof Blob ? t.get("file").size : 0) < ee;
      return oe(e, t, n);
    }
    return re(e, t);
  }
}
const Ue = "wss://websdk.uxcam.com", Re = [
  // benefitsgo: a cross-origin child that registers on the parent's bridge and posts nothing.
  // The whole domain, not just the child host, because the trace is only readable when you can see
  // both ends — `diag/recording: top` next to `diag/xo-disabled-no-flag: xo-child` is the finding;
  // either line alone is not. Today this resolves to `web.ci` and `enroll.ci` only; NOTE it is a
  // SUFFIX rule, so any host they stand up under it later enrols itself with no code change.
  // Remove once the cross-origin bridge case is closed.
], W = [
  "wsURL",
  "appVersion",
  "debug",
  "silent",
  "min",
  "occlusion",
  "recordIframes",
  "recordCrossOriginIframes",
  "debugIframes",
  "enableSessionTelemetry",
  "captureMode",
  "recordStylesheets",
  "recordShadowDom",
  "recordIframeNavigation"
], $e = (o, e) => {
  if (o !== "occlusion")
    return e;
  const t = e;
  return {
    customUrlFn: typeof (t == null ? void 0 : t.url) == "function",
    queryParams: Array.isArray(t == null ? void 0 : t.queryParams) ? t.queryParams.length : 0
  };
}, Y = "UXCAM_DIAG_PING", j = "UXCAM_DIAG_PONG", B = "UXCAM_DIAG_HELLO", le = (o, e) => e.some((t) => o === t || o.endsWith(`.${t}`)), k = () => {
  try {
    if (window.self === window.top)
      return "top";
  } catch {
    return "xo-child";
  }
  try {
    return window.parent.document, "same-child";
  } catch {
    return "xo-child";
  }
}, Be = () => {
  try {
    return !!window.parent.uxc;
  } catch {
    return !1;
  }
}, qe = [
  // The case this was built for: a cross-origin child that registers on the parent's bridge and
  // posts nothing, on a domain whose hosts are IP-gated so nothing can be tested against them.
  "benefitsgo.tech",
  "uxcam.com",
  "netlify.app"
], Fe = () => {
  try {
    return k() === "xo-child" && le(window.location.hostname, qe);
  } catch {
    return !1;
  }
};
(() => {
  var c, d;
  const o = window;
  if (o.__uxcDiag)
    return o.__uxcDiag;
  const e = (() => {
    try {
      return le(window.location.hostname, Re) || window.location.search.indexOf("uxcdiag=1") !== -1 ? !0 : localStorage.getItem("uxcam.debug.iframe") === "1";
    } catch {
      return !1;
    }
  })();
  o.__uxcDiagOn = e;
  const t = () => {
    try {
      return localStorage.getItem("uxcam.probe"), "ok";
    } catch (l) {
      return l.name;
    }
  }, s = Date.now(), n = {
    stage: "script-loaded",
    stages: ["script-loaded@0"],
    t0: s,
    appKey: String(((c = o.uxc) == null ? void 0 : c.__ak) ?? ""),
    opts: ((d = o.uxc) == null ? void 0 : d.__o) ?? {},
    err: null,
    postedFn: null,
    resolved: null,
    bridge: null,
    PING: Y,
    PONG: j,
    HELLO: B,
    set(l, u) {
      n.stage = l, n.stages.push(`${l}@${Date.now() - s}`), o.__uxcDiagOn && console.debug(`[UXCam diag] ${l}${u ? " " + u : ""}`);
    },
    report() {
      return {
        stage: n.stage,
        trace: n.stages.join(" > "),
        ctx: k(),
        origin: window.location.origin,
        appKey: n.appKey,
        // DECLARED — verbatim from the snippet's `__o`, before any coercion or default. Paired
        // with `resolved` below, which is what SDKClient actually computed, because the two
        // diverging is itself a finding: `debugIframes` can be switched on from localStorage
        // with no snippet change, and a value of the wrong type coerces to something the
        // customer did not intend.
        opts: W.reduce((l, u) => (u in n.opts && (l[u] = $e(u, n.opts[u])), l), {}),
        // The single thing the old report could not see at all. A misspelled option name is
        // silently ignored by the SDK — `recordStyleSheets` records nothing and warns nobody —
        // so the keys we do NOT recognise are worth more than the ones we do.
        unknownOpts: Object.keys(n.opts).filter((l) => W.indexOf(l) === -1),
        resolved: n.resolved,
        readyState: document.readyState,
        storage: t(),
        posted: n.postedFn ? n.postedFn() : null,
        err: n.err,
        ms: Date.now() - s
      };
    },
    /**
     * Installed by IFrameManager when the DomCollector chunk loads — see installDiagRunner.
     *
     * It lives there, not here, for size: the enumeration and the console tables are the bulk of
     * this feature and every customer downloads this entry, while only a parent page with the
     * chunk already loaded ever calls it. The half that MUST be here is the responder below,
     * because the frames worth interrogating are exactly the ones whose chunk never loaded.
     */
    run: void 0
  };
  try {
    window.addEventListener("message", (l) => {
      if (!l.data || l.data.type !== Y || !o.__uxcDiagOn)
        return;
      let u = !1;
      try {
        u = l.source === window.parent || l.source === window.top;
      } catch {
        u = !1;
      }
      !u || !l.source || l.source.postMessage({ type: j, report: n.report() }, "*");
    });
  } catch {
  }
  const r = [];
  o.__uxcDiagHello = r;
  try {
    window.addEventListener("message", (l) => {
      if (!l.data || l.data.type !== B || !o.__uxcDiagOn || r.length >= 20 || r.some((p) => p.origin === l.origin))
        return;
      const u = l.data.report;
      r.push({
        origin: String(l.origin).slice(0, 120),
        at: Date.now() - s,
        stage: String((u == null ? void 0 : u.stage) ?? "?").slice(0, 32),
        appKey: String((u == null ? void 0 : u.appKey) ?? "").slice(0, 32)
      });
    });
  } catch {
  }
  try {
    if (e && window.parent !== window) {
      const l = () => {
        try {
          window.parent.postMessage({ type: B, report: n.report() }, "*");
        } catch {
        }
      };
      l(), setTimeout(l, 500), setTimeout(l, 2e3);
    }
  } catch {
  }
  return o.__uxcDiag = n, n;
})();
let U = null;
var J;
if (typeof window < "u") {
  const o = window.uxc;
  if (o != null && o.__ak && ((J = o == null ? void 0 : o.__o) == null ? void 0 : J.captureMode) === "flutter") {
    const e = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(s, ...n) {
      const r = s === "experimental-webgl" ? "webgl" : s;
      if (["webgl", "webgl2"].includes(r)) {
        const c = n[0];
        c && typeof c == "object" ? c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0) : n[0] = { preserveDrawingBuffer: !0 };
      }
      return e.apply(this, [s, ...n]);
    };
    let t = null;
    typeof OffscreenCanvas < "u" && (t = OffscreenCanvas.prototype.getContext, OffscreenCanvas.prototype.getContext = function(s, ...n) {
      if (["webgl", "webgl2"].includes(s)) {
        const r = n[0];
        r && typeof r == "object" ? r.preserveDrawingBuffer || (r.preserveDrawingBuffer = !0) : n[0] = { preserveDrawingBuffer: !0 };
      }
      return t.apply(this, [s, ...n]);
    }), U = () => {
      HTMLCanvasElement.prototype.getContext = e, t && (OffscreenCanvas.prototype.getContext = t);
    };
  }
}
const I = "0.1", A = `uxcam:${I}:session:key`, D = `uxcam:${I}:session:time`, O = `uxcam:${I}:session:seq`, P = `uxcam:${I}:session:lasttime`, S = `uxcam:${I}:deviceid`, q = `uxcam:${I}:appkey`, x = `uxcam:${I}:tmp_changes`, E = `uxcam:${I}:load_counter`, Ke = `uxcam:${I}:session:batchIndex`, z = ["WebSockets", "CompressionStream", "Blob", "MutationObserver", "URL", "Proxy", "CSSStyleSheet", "CSSStyleSheet.insertRule", "CSSStyleSheet.deleteRule", "history", "Promise", "TransformStream"], K = (o, e, t) => {
  const s = window.location.hostname, n = "." + s.split(".").slice(-2).join("."), r = /* @__PURE__ */ new Date();
  r.setTime(r.getTime() + t * 24 * 60 * 60 * 1e3);
  try {
    if (document.cookie = `${o}=${e};expires=${r.toUTCString()};domain=${n};path=/`, he(o) !== e) {
      document.cookie = `${o}=${e};expires=${r.toUTCString()};domain=${s};path=/`;
      return;
    }
  } catch {
    document.cookie = `${o}=${e};expires=${r.toUTCString()};domain=${s};path=/`;
  }
}, he = (o) => {
  var s;
  const t = `; ${document.cookie}`.split(`; ${o}=`);
  if (t.length === 2)
    return (s = t.pop()) == null ? void 0 : s.split(";").shift();
}, g = (o) => o != null && o !== "null" && o.trim() !== "", Q = () => {
  const o = he(S), e = localStorage.getItem(S), t = sessionStorage.getItem(S);
  return g(o) ? (g(e) || localStorage.setItem(S, o), g(t) || sessionStorage.setItem(S, o), o) : g(e) ? (g(o) || K(S, e, 365), g(t) || sessionStorage.setItem(S, e), e) : g(t) ? (g(o) || K(S, t, 365), g(e) || localStorage.setItem(S, t), t) : null;
}, M = (o) => {
  K(S, o, 365), localStorage.setItem(S, o), sessionStorage.setItem(S, o);
}, a = class a {
  constructor(e, t) {
    i(this, "socket", null);
    i(this, "changesBucket", []);
    i(this, "binaryBucket", []);
    i(this, "globalBucket", []);
    i(this, "recordingStopped", !1);
    i(this, "lastSeq", 0);
    i(this, "deviceId", null);
    i(this, "sessionId", null);
    i(this, "collector", null);
    i(this, "sessionTime", null);
    i(this, "wsURL");
    i(this, "appKey");
    i(this, "debug");
    i(this, "silent", !1);
    i(this, "min");
    i(this, "appVersion", "unknown");
    i(this, "recordIframes", !0);
    i(this, "recordIframeNavigation", !1);
    i(this, "recordCrossOriginIframes", !1);
    /*
     * What the snippet DECLARED, and whether we filled it in — kept apart because "the customer says
     * the flag is on" is itself the thing under investigation, and the resolved value alone cannot
     * answer it. Both go out on the one `diag/config` line.
     */
    i(this, "xoDeclared", !1);
    i(this, "xoAutoConfigured", !1);
    i(this, "debugIframes", !1);
    i(this, "enableSessionTelemetry", !1);
    i(this, "recordStylesheets", !1);
    i(this, "recordShadowDom", !1);
    i(this, "captureMode", "dom");
    i(this, "restoreGetContext", null);
    i(this, "canvasTransport", null);
    i(this, "initialised", !1);
    /**
     * Check if we're running in cross-origin iframe mode
     * When true, the SDK uses postMessage only (no WebSocket)
     */
    i(this, "isCrossOriginIframeMode", !1);
    i(this, "temporaryBucket", []);
    i(this, "socketLoadedPromise", null);
    i(this, "connectionFailures", 0);
    i(this, "maxConnectionFailures", 2);
    i(this, "isDisconnectedDueToFailures", !1);
    i(this, "isInitializing", !1);
    i(this, "userActivityListeners", []);
    /**
     * Session debug timeline: records every state-changing event in order.
     * Sent to server when session ends so we can reconstruct what happened.
     */
    i(this, "sessionTimeline", []);
    i(this, "timelineCapped", !1);
    i(this, "noInteractionSendCount", 0);
    i(this, "lastProcessTime", 0);
    i(this, "logTimeline", (e, t = {}) => {
      if (this.enableSessionTelemetry) {
        if (this.sessionTimeline.length >= 500) {
          this.timelineCapped || (this.timelineCapped = !0, this.sessionTimeline.push({ t: Date.now(), event: "timeline_capped", detail: { at: 500 } }));
          return;
        }
        this.sessionTimeline.push({ t: Date.now(), event: e, detail: t });
      }
    });
    // 2 hours
    i(this, "sendSessionTimeline", () => {
      if (!this.sessionTimeline.length) return;
      const e = this.sessionTime ? Date.now() - this.sessionTime : 0;
      if (e < a.SESSION_DURATION_THRESHOLD_MS) {
        this.sessionTimeline = [];
        return;
      }
      const t = {
        sessionId: this.sessionId,
        sessionTime: this.sessionTime,
        totalElapsed: Math.round(e / 1e3),
        timelineLength: this.sessionTimeline.length,
        timeline: this.sessionTimeline
      };
      this.sendLog(`[Session Timeline] ${JSON.stringify(t)}`), this.sessionTimeline = [];
    });
    i(this, "staticRequestIdleCallback", (e, t = !1) => {
      if (t) {
        e();
        return;
      }
      window.requestIdleCallback ? window.requestIdleCallback(e) : setTimeout(e, 100);
    });
    i(this, "getTemporaryChanges", () => {
      const e = sessionStorage.getItem(x);
      return e ? JSON.parse(e) : [];
    });
    i(this, "saveTemporaryChange", (e) => {
      const t = this.getTemporaryChanges();
      Array.isArray(e) ? t.push(...e) : t.push(e), sessionStorage.setItem(x, JSON.stringify(t));
    });
    i(this, "clearTemporaryChanges", () => {
      sessionStorage.removeItem(x);
    });
    // will generate a hex string of length
    i(this, "generateId", (e) => {
      const t = [], s = "abcdef0123456789", n = s.length;
      for (let r = 0; r < e; r++)
        t.push(s.charAt(Math.floor(Math.random() * n)));
      return t.join("");
    });
    i(this, "ensureDeviceId", () => {
      if (!g(this.deviceId)) {
        let e = Q();
        e || (e = this.generateId(16)), this.deviceId = e;
        try {
          M(e);
        } catch {
          this.sendLog(`Failed to save deviceId to storage - ${this.appKey}`);
        }
      }
      return this.deviceId;
    });
    i(this, "ensureSessionTime", () => (this.sessionTime === null && (this.sessionTime = (/* @__PURE__ */ new Date()).getTime(), this.logTimeline("sessionTime_created", {
      value: this.sessionTime,
      source: "ensureSessionTime"
    })), this.sessionTime));
    i(this, "clearSession", () => {
      this.saveSessTimout && (clearTimeout(this.saveSessTimout), this.saveSessTimout = null), sessionStorage.removeItem(A), sessionStorage.removeItem(D), sessionStorage.removeItem(O), sessionStorage.removeItem(P), sessionStorage.removeItem(q), sessionStorage.removeItem(E), sessionStorage.removeItem(x), sessionStorage.removeItem(Ke);
    });
    /**
     * Terminates the current session: cleans up runtime state and clears session storage.
     * Session persistence for page reloads is handled by beforeunload → saveSess(),
     * which does not go through this method.
     * @param notify - Whether to notify the server (only works if socket is connected)
     */
    i(this, "terminateCurrentSession", (e) => {
      var s, n, r;
      this.logTimeline("terminate", {
        notify: e,
        sessionId: this.sessionId,
        sessionTime: this.sessionTime,
        elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
        lastSeq: this.lastSeq,
        socketConnected: ((s = this.socket) == null ? void 0 : s.connected) ?? null
      }), this.sendSessionTimeline(), this.log(`terminating session (notify: ${e})`);
      const t = this.sessionId;
      e && ((n = this.socket) != null && n.connected) && t && ((r = this.socket) == null || r.emit("session_abort", {
        sid: t,
        appKey: this.appKey,
        source: this.abortSource
      })), this.__processInterval && (clearInterval(this.__processInterval), this.__processInterval = null), this.stopHeartbeat(), this.collector && (this.collector.destroy(), this.collector = null), this.canvasTransport && (this.canvasTransport.destroy(), this.canvasTransport = null), this.restoreGetContext && (this.restoreGetContext(), this.restoreGetContext = null), this.socket && (this.socket.removeAllListeners(), this.socket.disconnect(), this.socket = null), this.clearSession(), this.sessionId = null, this.lastSeq = 0, this.sessionTime = null, this.connectionFailures = 0, this.isDisconnectedDueToFailures = !0, this.hasValidInteractionSinceLastSend = !1;
    });
    i(this, "onNewSessionTime", (e) => {
      this.logTimeline("sessionTime_set", {
        oldValue: this.sessionTime,
        newValue: e,
        source: "DomCollector.onNewStartTime"
      }), this.sessionTime = e;
    });
    i(this, "getSession", () => {
      const e = sessionStorage.getItem(P);
      let t = !!e;
      if (e) {
        const b = Date.now() - parseInt(e), C = 6 * 60 * 1e3;
        b > C && (this.clearSession(), t = !1);
      }
      if (e && t) {
        const b = sessionStorage.getItem(q);
        b && b !== this.appKey && (this.clearSession(), t = !1);
      }
      const s = sessionStorage.getItem(A), n = sessionStorage.getItem(D), r = sessionStorage.getItem(O), c = sessionStorage.getItem(E), d = s || a.generateUUID(), l = s && n ? new Date(parseInt(n)).getTime() : null, u = r ? parseInt(r) + 500 : 0;
      t && this.logTimeline("reconnect_attempt", {
        existingSessionId: s,
        existingSessionTime: n ? parseInt(n) : null,
        existingSeq: r ? parseInt(r) : null,
        lastTime: e ? parseInt(e) : null,
        idleGapSec: e ? Math.round((Date.now() - parseInt(e)) / 1e3) : null,
        sessionAgeSec: n ? Math.round((Date.now() - parseInt(n)) / 1e3) : null,
        runtimeSessionTime: this.sessionTime,
        runtimeSessionId: this.sessionId
      }), s || (sessionStorage.setItem(A, d), l && sessionStorage.setItem(D, l.toString()), sessionStorage.setItem(O, u.toString()), sessionStorage.setItem(q, this.appKey));
      let p = 0;
      c ? (p = parseInt(c), sessionStorage.setItem(E, (p + 1).toString())) : sessionStorage.setItem(E, "0");
      let y = Q();
      return g(y) || (y = this.generateId(16), M(y)), this.deviceId = y, {
        sessionId: d,
        startTime: l,
        seq: u,
        reconnected: t,
        deviceId: y,
        counter: p
      };
    });
    i(this, "loadPolyfills", async () => {
      const e = a.getSupportedAPIs(), t = [];
      if (e.includes("WebSockets")) {
        if (!e.includes("Promise")) {
          const s = await import("./index.nY_nEAjq.js");
          window.Promise = s.default;
        }
        e.includes("CompressionStream") || t.push(
          // eslint-disable-next-line no-async-promise-executor
          new Promise(async (s) => {
            if (!e.includes("TransformStream")) {
              const r = await import("./polyfill.BioLh7M_.js").then((c) => c.p);
              Object.assign(window, r);
            }
            const {
              makeCompressionStream: n
            } = await import("./ponyfill.ClvznUux.js");
            window.CompressionStream = n(window.TransformStream), s();
          })
        ), await Promise.all(t);
      }
    });
    i(this, "__processInterval", null);
    i(this, "__heartbeatInterval", null);
    i(this, "heartbeatMissCount", 0);
    /** Flag to track if there was valid user interaction since last data send */
    i(this, "hasValidInteractionSinceLastSend", !1);
    i(this, "processBinaryBucket", () => {
      var r, c;
      const e = Date.now();
      if (this.lastProcessTime && e - this.lastProcessTime > 1e4 && this.logTimeline("wake_detected", {
        expectedMs: 200,
        actualMs: e - this.lastProcessTime,
        elapsedSec: this.sessionTime ? Math.round((e - this.sessionTime) / 1e3) : null,
        socketConnected: ((r = this.socket) == null ? void 0 : r.connected) ?? null
      }), this.lastProcessTime = e, !this.binaryBucket.length)
        return;
      const {
        sessionId: t
      } = this, s = this.binaryBucket.slice();
      this.binaryBucket = [];
      const n = this.hasValidInteractionSinceLastSend;
      if (this.hasValidInteractionSinceLastSend = !1, !n && s.length > 0) {
        this.noInteractionSendCount++;
        const d = this.noInteractionSendCount;
        (d === 1 || d === 10 || d % 50 === 0) && this.logTimeline("data_send_no_interaction", {
          totalCount: d,
          chunks: s.length,
          sessionId: t,
          elapsedSec: this.sessionTime ? Math.round((e - this.sessionTime) / 1e3) : null,
          socketConnected: ((c = this.socket) == null ? void 0 : c.connected) ?? null
        });
      } else n && (this.noInteractionSendCount = 0);
      Promise.all(
        s.map(async (d) => {
          const l = await new Blob(d).arrayBuffer();
          return new Uint8Array(l);
        })
      ).then(async (d) => {
        await this.socketLoadedPromise;
        const l = d.length;
        for (let u = 0; u < l; u++)
          this.socket.emit("session_data", {
            sid: t,
            data: d[u],
            vi: n
            // valid interaction flag - backend uses this to reset session timeout
          });
      });
    });
    i(this, "startHeartbeat", () => {
      this.stopHeartbeat(), this.__heartbeatInterval = setInterval(() => {
        var t;
        if (!((t = this.socket) != null && t.connected) || !this.sessionId)
          return;
        let e = !1;
        this.socket.emit("session_ping", { sid: this.sessionId }, (s) => {
          e = !0, s != null && s.alive ? this.heartbeatMissCount = 0 : this.handleSessionAbort();
        }), setTimeout(() => {
          var s;
          e || (this.heartbeatMissCount++, this.logTimeline("heartbeat_miss", {
            missCount: this.heartbeatMissCount,
            elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
            socketConnected: ((s = this.socket) == null ? void 0 : s.connected) ?? null
          }), this.heartbeatMissCount >= 3 && this.handleSessionAbort());
        }, 1e4);
      }, 6e4);
    });
    i(this, "stopHeartbeat", () => {
      this.__heartbeatInterval && (clearInterval(this.__heartbeatInterval), this.__heartbeatInterval = null), this.heartbeatMissCount = 0;
    });
    i(this, "setupUserActivityListeners", () => {
      var n;
      if (this.userActivityListeners.length > 0)
        return;
      this.logTimeline("activity_listeners_setup", {
        elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
        socketConnected: ((n = this.socket) == null ? void 0 : n.connected) ?? null
      });
      let e = !1;
      const t = () => {
        !e && this.isDisconnectedDueToFailures && (e = !0, this.removeUserActivityListeners(), this.isDisconnectedDueToFailures = !1, this.ensureDeviceId(), setTimeout(() => {
          this.init();
        }, 1e3));
      };
      ["click", "keydown", "scroll", "mousemove", "touchstart"].forEach((r) => {
        document.addEventListener(r, t, { once: !0, passive: !0 }), this.userActivityListeners.push(() => {
          document.removeEventListener(r, t);
        });
      });
    });
    i(this, "removeUserActivityListeners", () => {
      this.userActivityListeners.forEach((e) => e()), this.userActivityListeners = [];
    });
    i(this, "init", async () => {
      if (!this.isInitializing) {
        if (a.isBot()) {
          this.diag("bot-detected"), this.log("Bot/crawler detected - skipping SDK initialization");
          return;
        }
        if (k() === "same-child" && Be()) {
          this.diag("same-child-skipped", window.location.pathname), this.log("same-origin child frame - the parent SDK records this frame, skipping init");
          return;
        }
        this.isDisconnectedDueToFailures && (this.isDisconnectedDueToFailures = !1, this.connectionFailures = 0), this.isInitializing = !0, this.diag("init-start");
        try {
          if (this.log("SDK initialising"), this.socket && (this.socket.removeAllListeners(), this.socket.disconnect(), this.socket = null), a.allAPIsMet() || await new Promise((f) => {
            this.staticRequestIdleCallback(() => {
              this.loadPolyfills().then(f);
            });
          }), !a.allAPIsMet()) {
            const f = a.getSupportedAPIs(), h = z.filter((m) => !f.includes(m));
            this.diag("apis-missing", h.join(",")), this.sendLog(`APIs not supported: ${h.join(",")}`);
            return;
          }
          this.diag("chunk-loading");
          const e = await new Promise((f) => {
            this.staticRequestIdleCallback(() => {
              Promise.all([
                import("./index.Bx2ehl_7.js"),
                import("./DomCollector.BBLa2u-I.js")
              ]).then(([h, m]) => {
                f([h, m]);
              }).catch((h) => {
                this.diag("chunk-failed", (h == null ? void 0 : h.message) ?? "unknown"), this.sendLog(`init/chunk-load-failed: ${k()} ${(h == null ? void 0 : h.message) ?? "unknown"}`), this.warn("SDK chunk failed to load — recording disabled", h), f(null);
              });
            });
          });
          if (!e) {
            this.isInitializing = !1;
            return;
          }
          const [t, s] = e, {
            sessionId: n,
            startTime: r,
            seq: c,
            reconnected: d,
            deviceId: l,
            counter: u
          } = this.getSession();
          this.sessionId = n, this.lastSeq = c, this.deviceId = l, r && (this.logTimeline("sessionTime_restored", {
            oldValue: this.sessionTime,
            restoredValue: r,
            ageSec: Math.round((Date.now() - r) / 1e3),
            source: "getSession:storage"
          }), this.sessionTime = r), d && this.log("reconnection detected - waiting for genuine user interaction");
          const p = t.io, { getDeviceData: y } = s, b = s.default, C = k() === "xo-child";
          if (C && !this.recordCrossOriginIframes) {
            this.diag("xo-disabled-no-flag", window.location.origin), this.warn(
              "SDK detected in cross-origin iframe without recordCrossOriginIframes enabled. Disabling SDK to prevent session conflicts with parent site. To record this iframe, enable recordCrossOriginIframes: true in both parent and iframe SDK configs."
            );
            return;
          }
          if (this.recordCrossOriginIframes && C) {
            this.diag("xo-recording", `css=${this.recordStylesheets} shadow=${this.recordShadowDom}`), this.log("cross-origin iframe mode - no WebSocket, payloads go to the parent"), this.isCrossOriginIframeMode = !0, this.initDomCollectorNoSocket(b, y, n, r, c, l, u);
            return;
          }
          if (document.visibilityState !== "visible" && (this.diag("socket-waiting-visible", document.visibilityState), await new Promise((f) => {
            const h = () => {
              document.visibilityState === "visible" && (document.removeEventListener("visibilitychange", h), f());
            };
            document.addEventListener("visibilitychange", h);
          })), this.diag("socket-connecting", this.wsURL), this.log("connecting", { sessionId: n, reconnected: d, wsURL: this.wsURL, deviceId: l }), this.socket = p(
            this.wsURL,
            {
              autoConnect: !0,
              transports: ["websocket"],
              reconnection: !1,
              // Disabled — custom activity-based reconnection in setupUserActivityListeners handles all retry logic
              timeout: 2e4,
              // 20 second timeout for connection
              query: {
                appKey: this.appKey,
                sessId: n,
                reconnected: d ? 1 : 0,
                captureMode: this.captureMode
              }
            }
          ), this.socket.on("connect_error", (f) => {
            this.connectionFailures++, this.logTimeline("connection_failure", {
              attempt: this.connectionFailures,
              message: f == null ? void 0 : f.message,
              isReconnect: d,
              elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null
            });
            const h = f;
            this.log(`connection error (attempt ${this.connectionFailures}/${this.maxConnectionFailures})`, {
              message: f == null ? void 0 : f.message,
              description: h == null ? void 0 : h.description,
              type: h == null ? void 0 : h.type,
              reconnected: d,
              sessionId: n
            });
            const m = d && this.connectionFailures === 1;
            (m || this.connectionFailures >= this.maxConnectionFailures) && (this.log(m ? "reconnection rejected by server - session expired or already processed" : "max connection failures reached - clearing session"), this.terminateCurrentSession(!1), this.setupUserActivityListeners());
          }), this.socketLoadedPromise = new Promise((f) => {
            const h = () => {
              var m;
              this.diag("recording", `session=${this.sessionId}`), this.info("connected successfully"), this.log("connection details", { sessionId: this.sessionId, reconnected: d, socketId: (m = this.socket) == null ? void 0 : m.id }), this.connectionFailures = 0, this.isDisconnectedDueToFailures = !1, this.logTimeline("socket_connect", {
                sessionId: this.sessionId,
                elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
                isReconnect: d
              }), this.removeUserActivityListeners(), this.socket.off("connect", h), this.saveSess(), f();
            };
            this.socket.on("connect", h), this.socket.send("conn");
          }), this.socket.on("disconnect", (f) => {
            this.logTimeline("socket_disconnect", {
              reason: f,
              elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
              lastSeq: this.lastSeq
            }), this.terminateCurrentSession(!1), this.setupUserActivityListeners();
          }), this.socket.on("session_abort", this.handleSessionAbort), this.socket.on("session_invalid", this.handleSessionInvalid), this.socket.on("frames_upload_config", (f) => {
            var h;
            (h = this.collector) == null || h.setFramesUploadConfig(f);
          }), this.socket.on("kill", this.handleSessionKill), d || this.socketLoadedPromise.then(() => {
            this.socket.emit("session_init", {
              sessionId: n,
              deviceId: l,
              appKey: this.appKey,
              deviceTime: a.getISODateTimeNow(),
              deviceData: y({
                appVersion: this.appVersion ? String(this.appVersion) : "unknown"
              })
            });
          }), this.scheduledAbort) {
            this.socketLoadedPromise.then(() => {
              this.socket.emit("session_abort", {
                sid: n,
                appKey: this.appKey,
                source: this.abortSource
              });
            }), this.clearSession();
            return;
          }
          this.__processInterval = setInterval(() => {
            this.processBinaryBucket();
          }, 200), this.startHeartbeat();
          const $ = async () => {
            const { recordingStopped: f } = this, h = f ? this.changesBucket.slice().filter((m) => {
              const w = m, T = m;
              switch (w.type) {
                case "EVENT":
                case "USER_PROPERTY":
                  return !0;
                default:
                  switch (T.ct) {
                    case "20":
                    case "19":
                      return !0;
                    default:
                      return !1;
                  }
              }
            }) : this.changesBucket.slice();
            if (h.length || f) {
              if (this.changesBucket = [], f) {
                this.saveTemporaryChange(h);
                return;
              }
              const w = (await new Promise((v) => {
                this.staticRequestIdleCallback(() => v(new Blob([JSON.stringify(h)])));
              })).stream(), T = [];
              w.pipeThrough(
                new CompressionStream("gzip")
              ).pipeTo(
                new WritableStream({
                  write: (v) => {
                    T.push(v);
                  }
                })
              ).then(() => {
                this.binaryBucket.push(T), setTimeout($, 200);
              });
              return;
            }
            this.staticRequestIdleCallback($);
          };
          $(), this.captureMode === "flutter" && (this.canvasTransport = new Me(), this.canvasTransport.setOnBlocked(() => {
            this.sendLog("Canvas uploads blocked (ad blocker detected) — aborting flutter session"), this.abortInternal(!0, "internal");
          }));
          const ue = () => {
            var h, m, w;
            this.logTimeline("visibility_change", {
              hidden: document.hidden,
              elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
              socketConnected: ((h = this.socket) == null ? void 0 : h.connected) ?? null
            });
            const f = (m = this.collector) == null ? void 0 : m.buildEndMarker();
            f && this.canvasTransport && this.canvasTransport.sendEndMarker(f.batchKey, f.packed), (w = this.socket) != null && w.connected && this.saveSess();
          }, de = () => {
            var h, m, w, T, v, X;
            this.recordingStopped = !0, (h = this.canvasTransport) == null || h.setUnloading(), this.logTimeline("beforeunload", {
              sessionId: this.sessionId,
              elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
              socketConnected: ((m = this.socket) == null ? void 0 : m.connected) ?? null,
              lastSeq: this.lastSeq
            }), this.sendSessionTimeline();
            const f = (w = this.collector) == null ? void 0 : w.buildEndMarker();
            f && this.canvasTransport && this.canvasTransport.sendEndMarker(f.batchKey, f.packed), (T = this.collector) == null || T.unload(), (v = this.canvasTransport) == null || v.unload(), (X = this.socket) != null && X.connected && this.saveSess();
          };
          document.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && ue();
          }, { capture: !0 }), window.addEventListener("onpagehide" in self ? "pagehide" : "unload", de, { capture: !0 }), this.collector = new b({
            onChange: this.onChange,
            onSeqUpdate: this.onSeqUpdate,
            onUserActivity: this.onUserActivity,
            onNewStartTime: this.onNewSessionTime,
            startTime: r,
            seq: c,
            min: this.min,
            sendLog: this.sendLog,
            // for debugging
            sessionCounter: u,
            abort: this.abortInternal,
            appKey: this.appKey,
            recordIframes: this.recordIframes,
            recordIframeNavigation: this.recordIframeNavigation,
            debugIframes: this.debugIframes,
            captureMode: this.captureMode,
            transport: this.canvasTransport ?? void 0,
            sessionId: n,
            recordStylesheets: this.recordStylesheets,
            recordShadowDom: this.recordShadowDom
          }, this.occlusionOptions), window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD && this.event("uxc_page_refresh", {}), this.processTemporaryBucket();
        } finally {
          this.isInitializing = !1;
        }
      }
    });
    /**
     * Initialize DomCollector without WebSocket (for cross-origin iframe mode)
     */
    i(this, "initDomCollectorNoSocket", (e, t, s, n, r, c, d) => {
      this.log("starting DomCollector without a socket (cross-origin iframe mode)"), this.sessionId = s, this.lastSeq = r, this.deviceId = c, n && (this.sessionTime = n), this.collector = new e({
        onChange: this.onChange,
        onSeqUpdate: this.onSeqUpdate,
        onUserActivity: this.onUserActivity,
        onNewStartTime: this.onNewSessionTime,
        startTime: n,
        seq: r,
        min: this.min,
        sendLog: this.sendLog,
        sessionCounter: d,
        abort: this.abortInternal,
        appKey: this.appKey,
        recordIframes: this.recordIframes,
        recordIframeNavigation: this.recordIframeNavigation,
        recordCrossOriginIframes: this.recordCrossOriginIframes,
        debugIframes: this.debugIframes,
        captureMode: this.captureMode,
        transport: this.canvasTransport ?? void 0,
        sessionId: s,
        recordStylesheets: this.recordStylesheets,
        recordShadowDom: this.recordShadowDom
      }, this.occlusionOptions), window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD && this.event("uxc_page_refresh", {}), this.processTemporaryBucket(), this.isInitializing = !1;
    });
    i(this, "processTemporaryBucket", () => {
      const e = this.globalBucket.slice();
      this.globalBucket = [], e.forEach((s) => {
        switch (s[0]) {
          case "event": {
            this.event(s[1], s[2]);
            break;
          }
          case "setUserIdentity": {
            this.setUserIdentity(s[1]);
            break;
          }
          case "setUserProperties": {
            this.setUserProperties(s[1]);
            break;
          }
          case "setUserProperty": {
            this.setUserProperty(s[1], s[2]);
            break;
          }
          case "abort": {
            this.abort();
            break;
          }
        }
      }), this.temporaryBucket.forEach((s) => {
        const n = s, r = s;
        n.ct ? (n.ct === "20" && this.event(n.n, n.p), n.ct === "19" && this.setUserProperty(n.k, n.v)) : (r.type === "EVENT" && this.event(r.name, r.properties), r.type === "USER_PROPERTY" && this.setUserProperty(r.key, r.value));
      }), this.temporaryBucket = [];
      const t = this.getTemporaryChanges();
      t.length && (t.forEach((s) => {
        this.onChange(s);
      }), this.clearTemporaryChanges());
    });
    i(this, "saveSess", () => {
      sessionStorage.setItem(O, this.lastSeq.toString()), sessionStorage.setItem(P, (/* @__PURE__ */ new Date()).getTime().toString()), sessionStorage.setItem(D, this.ensureSessionTime().toString()), this.sessionId && sessionStorage.setItem(A, this.sessionId), g(this.deviceId) && M(this.deviceId);
    });
    i(this, "saveSessTimout", null);
    i(this, "onSeqUpdate", (e) => {
      this.lastSeq = e, this.saveSessTimout && clearTimeout(this.saveSessTimout), this.saveSessTimout = setTimeout(() => {
        this.saveSeqOnly();
      }, 500);
    });
    /**
     * Save sequence number without updating SessionLastTime
     * This prevents passive DOM mutations from keeping sessions alive
     */
    i(this, "saveSeqOnly", () => {
      sessionStorage.setItem(O, this.lastSeq.toString()), sessionStorage.setItem(D, this.ensureSessionTime().toString()), this.sessionId && sessionStorage.setItem(A, this.sessionId), g(this.deviceId) && M(this.deviceId);
    });
    /**
     * Called when a meaningful user interaction occurs
     * Sets a flag that will be included in the next session_data message
     * Backend uses this flag to reset its session timeout timer
     *
     * Only refreshes SessionLastTime when the socket is connected.
     * Without this guard, user activity on a page with a dead socket
     * keeps SessionLastTime artificially fresh, causing getSession()
     * to attempt reconnection to sessions the server expired long ago.
     */
    i(this, "onUserActivity", () => {
      var e;
      this.hasValidInteractionSinceLastSend = !0, (e = this.socket) != null && e.connected && sessionStorage.setItem(P, Date.now().toString());
    });
    /**
     * Log keys already sent this page load. Every message reaching `/logs` becomes one Rollbar item
     * and the route has no rate limit, so a log on a hot path (a mutation batch, a per-root sweep)
     * would otherwise be a self-inflicted flood.
     *
     * Keyed per page load rather than per session on purpose: a reload rebuilds SDKClient, and a
     * failure that only reproduces on some loads is exactly the thing a session-wide sentinel hides.
     */
    i(this, "__sentLogKeys", /* @__PURE__ */ new Set());
    /**
     * [IFRAME SUPPORT] Iframe telemetry gets its own budget.
     *
     * The shared 20-key budget is first-come-first-served, and the CSS, shadow and backfill logs all
     * fire during the initial snapshot — seconds before an iframe watchdog could report. On a page
     * messy enough to have several of those, the budget is already gone precisely when the iframe
     * telemetry matters most. Reserving four keys is exact (there are four iframe codes) and leaves
     * Rollbar volume on healthy pages unchanged, which raising the global cap would not.
     */
    i(this, "__sentIframeLogKeys", /* @__PURE__ */ new Set());
    /**
     * [IFRAME DIAGNOSTICS] `diag/*` gets its own budget for the same reason `iframe/*` does: a stage
     * trace is only useful whole, and sharing the 20-key pool means the snapshot's ordinary logs
     * decide how much of it you get to see. Bigger than the others because a trace IS the payload —
     * one key per stage — and it only ever runs on a host named in DIAG_HOST_SUFFIXES.
     */
    i(this, "__sentDiagLogKeys", /* @__PURE__ */ new Set());
    /**
     * Console output, three levels — see the `debug` / `silent` options and the matching helpers in
     * const.ts, which the lazy chunk uses. `info` and `warn` print unless silent; `log` is the
     * verbose trace and needs `debug` too.
     */
    i(this, "info", (...e) => {
      this.silent || console.log("[UXCam]", ...e);
    });
    i(this, "warn", (...e) => {
      this.silent || console.warn("[UXCam]", ...e);
    });
    i(this, "log", (...e) => {
      this.silent || !this.debug || console.log("[UXCam]", ...e);
    });
    /**
     * [IFRAME DIAGNOSTICS] Mark a stage.
     *
     * Always records into the beacon (free, in-memory, readable by `uxc.diagnose()`); only reaches
     * `/logs` when the diag gate is on for this host. The beacon is read off `window` rather than
     * imported: this file is the SDK entry and must stay free of static imports — see the note above
     * DIAG_HOST_SUFFIXES.
     */
    i(this, "diag", (e, t) => {
      try {
        const s = window;
        s.__uxcDiag && s.__uxcDiag.set(e, t), s.__uxcDiagOn && this.sendLog(`diag/${e}: ${k()}${t ? " " + t : ""}`);
      } catch {
      }
    });
    /**
     * [IFRAME DIAGNOSTICS] Ask this page and every iframe on it what stage their SDK reached.
     *
     *   await uxc.diagnose()
     *
     * Exposed on the client so it is reachable wherever `window.uxc` is; the implementation lives on
     * the beacon so it still works in a frame whose SDKClient never got built.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i(this, "diagnose", (e) => {
      const t = window.__uxcDiag;
      return t ? t.run ? t.run(e) : Promise.resolve({ error: "SDK chunk not loaded on this page", self: t.report() }) : Promise.resolve({ error: "diag beacon missing — SDK entry did not evaluate" });
    });
    i(this, "sendLog", (e) => {
      const t = e.indexOf(":"), s = t === -1 ? e : e.slice(0, t), n = s.startsWith(a.IFRAME_LOG_PREFIX), r = s.startsWith(a.DIAG_LOG_PREFIX);
      if (n && window.__uxcDiagOn !== !0)
        return;
      const c = r ? this.__sentDiagLogKeys : n ? this.__sentIframeLogKeys : this.__sentLogKeys, d = r ? a.MAX_DIAG_LOGS_PER_PAGE_LOAD : n ? a.MAX_IFRAME_LOGS_PER_PAGE_LOAD : a.MAX_LOGS_PER_PAGE_LOAD;
      if (c.has(s) || c.size >= d || (c.add(s), !this.wsURL))
        return;
      const u = `https://${this.wsURL.replace("wss://", "").replace("ws://", "")}/logs`, p = {
        message: `[FE Error]: ${e}`,
        // The page this most needs to report from is an auth handoff whose own URL carries a
        // Bearer JWT in the query string. `/logs` discards this field server-side, but it still
        // crosses the wire and lands in an access log, so it goes through the same occlusion the
        // recording uses rather than being sent raw.
        url: this.occludeUrl(window.location.href)
      };
      try {
        fetch(u, {
          method: "POST",
          body: JSON.stringify(p),
          headers: {
            "Content-Type": "application/json"
          },
          // Without this a log emitted from a `pagehide` handler — which is when the iframe
          // bridge watchdog flushes on a short session — is a coin toss.
          keepalive: !0
        }).catch(() => {
        });
      } catch {
      }
    });
    i(this, "occlusionOptions", {
      url: a.defaultOccludeUrlMapping,
      queryParams: a.defaultOccludeQueryParams
    });
    i(this, "occludeUrl", (e) => {
      try {
        const t = new URL(e), s = a.CREDENTIAL_QUERY_PARAMS.concat(this.occlusionOptions.queryParams || []);
        let n = !1;
        for (const r of s)
          t.searchParams.has(r) && (t.searchParams.set(r, "REDACTED"), n = !0);
        return n ? t.toString() : e;
      } catch {
        try {
          return window.location.origin;
        } catch {
          return "-";
        }
      }
    });
    i(this, "onChange", (e) => {
      if (this.recordingStopped) {
        const t = e, s = e;
        switch (t.type) {
          case "EVENT":
          case "USER_PROPERTY": {
            this.saveTemporaryChange(e);
            return;
          }
          default:
            switch (s.ct) {
              case "20":
              case "19": {
                this.saveTemporaryChange(e);
                return;
              }
              default:
                return;
            }
        }
      }
      this.changesBucket.push(e);
    });
    i(this, "scheduledAbort", !1);
    i(this, "abortSource", "internal");
    /**
     * Handle server notification that the sessionId is invalid or expired
     * This occurs when client tries to reconnect with a sessionId the server doesn't recognize
     */
    i(this, "handleSessionInvalid", (e) => {
      this.log("server rejected session as invalid:", (e == null ? void 0 : e.reason) || "unknown reason"), this.terminateCurrentSession(!1), this.setupUserActivityListeners();
    });
    /**
     * Handle server 'session_abort' event - server is telling us to stop this session due to inactivity
     * Unlike 'kill', abort allows the session to resume when the user returns
     * @param reason - Optional reason for the abort (e.g., 'inactivity', 'timeout')
     */
    i(this, "handleSessionAbort", () => {
      var e;
      this.logTimeline("session_abort", {
        sessionId: this.sessionId,
        sessionTime: this.sessionTime,
        elapsedSec: this.sessionTime ? Math.round((Date.now() - this.sessionTime) / 1e3) : null,
        heartbeatMisses: this.heartbeatMissCount,
        lastSeq: this.lastSeq,
        socketConnected: ((e = this.socket) == null ? void 0 : e.connected) ?? null
      }), this.sendSessionTimeline(), this.terminateCurrentSession(!1), this.setupUserActivityListeners();
    });
    /**
     * Handle server 'kill' event - session data exceeded the size limit (50 MB)
     * Unlike 'session_abort', kill does NOT set up activity listeners because
     * the same page will likely hit the size limit again immediately
     */
    i(this, "handleSessionKill", () => {
      this.terminateCurrentSession(!1);
    });
    i(this, "abortInternal", (e = !0, t = "internal") => {
      this.log("aborting session", e ? "(notifying server)" : "(server already knows)"), this.scheduledAbort = !0, this.abortSource = t, this.terminateCurrentSession(e), this.removeUserActivityListeners();
    });
    i(this, "abort", (e = !0) => {
      this.abortInternal(e, "external");
    });
    i(this, "event", (e, t) => {
      if (this.collector) {
        this.collector.handleEvent(e, t);
        return;
      }
      const s = this.min ? {
        ct: "20",
        n: e,
        p: t,
        t: 0,
        s: 0
      } : {
        type: "EVENT",
        name: e,
        properties: t,
        time: 0,
        seq: 0
      };
      this.temporaryBucket.push(s);
    });
    i(this, "setUserIdentity", (e) => {
      this.setUserProperty("kUXCam_UserIdentity", String(e));
    });
    i(this, "setUserProperty", (e, t) => {
      if (this.collector) {
        this.collector.setUserProperty(e, t);
        return;
      }
      const s = this.min ? {
        ct: "19",
        k: e,
        v: t,
        t: 0,
        s: 0
      } : {
        type: "USER_PROPERTY",
        key: e,
        value: t,
        time: 0,
        seq: 0
      };
      this.temporaryBucket.push(s);
    });
    i(this, "setUserProperties", (e) => {
      const t = Object.keys(e);
      for (let s = 0; s < t.length; s++)
        this.setUserProperty(t[s], e[t[s]]);
    });
    i(this, "appendGestureContent", (e, t, s) => {
      this.collector && this.captureMode === "flutter" && this.collector.setFlutterGestureData(e, t, s || {});
    });
    var l, u, p;
    this.silent = !!(t != null && t.silent), this.debug = !!(t != null && t.debug) || a.storageFlag("uxcam.debug");
    const s = (t == null ? void 0 : t.min) !== void 0 ? !!t.min : !0;
    this.occlusionOptions.url = a.safeUrlOcclusion(((l = t == null ? void 0 : t.occlusion) == null ? void 0 : l.url) || a.defaultOccludeUrlMapping), this.occlusionOptions.queryParams = ((u = t == null ? void 0 : t.occlusion) == null ? void 0 : u.queryParams) || a.defaultOccludeQueryParams, this.appVersion = (t == null ? void 0 : t.appVersion) || "unknown", this.recordIframes = (t == null ? void 0 : t.recordIframes) !== void 0 ? !!t.recordIframes : !0, this.recordIframeNavigation = (t == null ? void 0 : t.recordIframeNavigation) !== void 0 ? !!t.recordIframeNavigation : !1;
    const n = Fe();
    if (this.xoAutoConfigured = n, this.xoDeclared = !!(t != null && t.recordCrossOriginIframes), this.recordCrossOriginIframes = this.xoDeclared || n, this.recordStylesheets = !!(t != null && t.recordStylesheets) || n, this.recordStylesheets && this.log("CSS recording enabled"), this.recordShadowDom = !!(t != null && t.recordShadowDom) || n, this.debugIframes = !!(t != null && t.debugIframes) || a.storageFlag("uxcam.debug.iframe"), this.enableSessionTelemetry = !!(t != null && t.enableSessionTelemetry), this.enableSessionTelemetry && this.log("Session telemetry enabled"), this.captureMode = (t == null ? void 0 : t.captureMode) || "dom", this.captureMode === "flutter" && U && (this.restoreGetContext = U, U = null), this.globalBucket = ((p = window.uxc) == null ? void 0 : p.__t) || [], this.wsURL = Ue, this.appKey = e, this.min = s, window.uxc_initialised) {
      this.diag("already-initialised");
      return;
    }
    if (window.uxc = this, window.uxc_initialised = !0, window.__uxcSilent = this.silent, window.__uxcDebugOn = this.debug, !e) {
      this.diag("no-appkey"), this.sendLog("App Key is required"), this.warn("App Key is required");
      return;
    }
    if (this.captureMode === "flutter" && typeof Worker > "u") {
      this.sendLog("Flutter capture mode requires Web Worker support. SDK will not start.");
      return;
    }
    const r = e.split("-");
    r.length > 1 && r[1] !== "us" && (this.wsURL = `wss://websdk-${r[1]}.uxcam.com`);
    try {
      const y = window.__uxcDiag;
      y && (y.resolved = {
        appVersion: this.appVersion,
        min: this.min,
        recordIframes: this.recordIframes,
        recordIframeNavigation: this.recordIframeNavigation,
        recordCrossOriginIframes: this.recordCrossOriginIframes,
        // The `debugIframes`-style divergence, for the three iframe options: declared is on
        // `opts`, resolved is here, and this says which of the two moved them.
        xoAutoConfigured: this.xoAutoConfigured,
        recordStylesheets: this.recordStylesheets,
        recordShadowDom: this.recordShadowDom,
        debugIframes: this.debugIframes,
        enableSessionTelemetry: this.enableSessionTelemetry,
        captureMode: this.captureMode,
        wsURL: this.wsURL,
        occlusionParams: this.occlusionOptions.queryParams.length
      });
    } catch {
    }
    if (this.diag("config", a.formatConfigDiag({
      appKey: this.appKey,
      origin: window.location.origin,
      xo: this.recordCrossOriginIframes,
      xoDeclared: this.xoDeclared,
      xoAuto: this.xoAutoConfigured,
      css: this.recordStylesheets,
      shadow: this.recordShadowDom,
      iframes: this.recordIframes,
      iframeNav: this.recordIframeNavigation,
      mode: this.captureMode,
      min: this.min,
      debug: this.debug,
      debugIframes: this.debugIframes,
      telemetry: this.enableSessionTelemetry,
      appVersion: this.appVersion,
      wsURL: this.wsURL,
      occlusionParams: this.occlusionOptions.queryParams.length,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      unknown: a.unknownOptionKeys(window.__uxcDiag)
    })), document.readyState === "complete") {
      this.init();
      return;
    }
    this.diag("waiting-readystate", document.readyState);
    let c = setTimeout(() => {
      c = null, document.readyState !== "complete" && this.sendLog(`init/readystate-stalled: ${k()} ${document.readyState}`);
    }, a.READYSTATE_STALL_REPORT_MS);
    const d = () => {
      document.readyState === "complete" && (document.removeEventListener("readystatechange", d), c !== null && (clearTimeout(c), c = null), this.init());
    };
    document.addEventListener("readystatechange", d);
  }
};
i(a, "SESSION_DURATION_THRESHOLD_MS", 2 * 60 * 60 * 1e3), i(a, "allAPIsMet", () => {
  const e = a.getSupportedAPIs();
  return z.every((t) => e.includes(t));
}), i(a, "getSupportedAPIs", () => {
  const e = [];
  return window.WebSocket && e.push("WebSockets"), window.CompressionStream && e.push("CompressionStream"), window.Blob && e.push("Blob"), window.MutationObserver && e.push("MutationObserver"), window.URL && e.push("URL"), window.Proxy && e.push("Proxy"), window.CSSStyleSheet && e.push("CSSStyleSheet"), window.CSSStyleSheet && typeof window.CSSStyleSheet.prototype.insertRule == "function" && e.push("CSSStyleSheet.insertRule"), window.CSSStyleSheet && typeof window.CSSStyleSheet.prototype.deleteRule == "function" && e.push("CSSStyleSheet.deleteRule"), window.history && e.push("history"), window.Promise && e.push("Promise"), window.TransformStream && e.push("TransformStream"), e;
}), i(a, "getISODateTimeNow", () => {
  const e = /* @__PURE__ */ new Date(), t = (u) => (u < 10 ? "0" : "") + u, s = e.getTimezoneOffset(), n = Math.floor(Math.abs(s / 60)), r = Math.abs(s % 60), c = `${n < 10 ? "0" : ""}${n}:${r < 10 ? "0" : ""}${r}`, d = s > 0 ? "-" : "+";
  return `${e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds())} GMT${d}${c}`;
}), i(a, "generateUUID", () => {
  const e = () => Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return `${e()}${e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}), i(a, "isBot", () => {
  var n;
  const e = navigator.userAgent.toLowerCase();
  if (navigator.webdriver)
    return !0;
  const t = [
    "bot",
    "crawl",
    "spider",
    "slurp",
    "mediapartners",
    "googlebot",
    "bingbot",
    "yandex",
    "baidu",
    "duckduck",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "slack",
    "telegram",
    "discord",
    "headless",
    "phantom",
    "selenium",
    "puppeteer",
    "playwright",
    "prerender",
    "lighthouse",
    "pagespeed",
    "gtmetrix",
    "pingdom",
    "uptimerobot",
    "statuscake"
  ];
  for (const r of t)
    if (e.includes(r))
      return !0;
  const s = window;
  return !!(!s.chrome && !((n = navigator.vendor) != null && n.includes("Apple")) && !e.includes("firefox") && (!navigator.languages || navigator.languages.length === 0) || s._phantom || s.__nightmare || s.callPhantom);
}), i(a, "MAX_LOGS_PER_PAGE_LOAD", 20), /**
 * How long to wait for `document.readyState === 'complete'` before reporting a stall.
 *
 * Generous on purpose: a slow page legitimately takes many seconds, and a false report is worse
 * than a late one. This only reports — it never gives up waiting.
 */
i(a, "READYSTATE_STALL_REPORT_MS", 15e3), i(a, "MAX_IFRAME_LOGS_PER_PAGE_LOAD", 4), i(a, "IFRAME_LOG_PREFIX", "iframe/"), i(a, "MAX_DIAG_LOGS_PER_PAGE_LOAD", 30), i(a, "DIAG_LOG_PREFIX", "diag/"), /** Per-origin, reload-surviving opt-in for verbose iframe logging. */
/**
 * A per-origin runtime opt-in: `localStorage[key] === '1'`. False when storage is partitioned or
 * blocked (a third-party frame) — the init option is still available there.
 */
i(a, "storageFlag", (e) => {
  try {
    return window.localStorage.getItem(e) === "1";
  } catch {
    return !1;
  }
}), /** The static half of `warn`, for code that runs without an instance (the occlusion wrapper). */
i(a, "isSilent", () => {
  try {
    return window.__uxcSilent === !0;
  } catch {
    return !1;
  }
}), i(a, "defaultOccludeUrlMapping", (e) => e), i(a, "defaultOccludeQueryParams", []), /**
 * Option keys the customer supplied that the SDK does not read — computed by the beacon, which
 * owns the list of names that are real. Empty when the beacon is absent; never throws.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
i(a, "unknownOptionKeys", (e) => {
  var t, s;
  try {
    const n = (s = (t = e == null ? void 0 : e.report) == null ? void 0 : t.call(e)) == null ? void 0 : s.unknownOpts;
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}), /**
 * Pack the resolved config into one log line.
 *
 * Short keys and `1`/`0` booleans because this is a log message, not an API: the whole config in
 * ~140 characters stays readable in a Coralogix row without wrapping. Free-text fields are the
 * only unbounded ones, so both are truncated — a customer's `appVersion` is whatever they typed.
 */
i(a, "formatConfigDiag", (e) => {
  const t = (r) => r ? "1" : "0";
  let s = e.wsURL;
  try {
    s = new URL(e.wsURL).host;
  } catch {
  }
  const n = e.unknown.length ? e.unknown.slice(0, 5).join(",").slice(0, 120) : "-";
  return [
    `ak=${e.appKey}`,
    // The frame CONTEXT on every diag line says `xo-child`; this says WHICH child. A customer
    // with more than one embedded origin cannot otherwise tell two of these rows apart.
    // Origin, never href — an iframe URL routinely carries credentials.
    `org=${e.origin}`,
    `xo=${t(e.xo)}`,
    // The resolved `xo` above cannot answer the question this case actually turns on: whether
    // the customer's snippet set the flag, or we did. `xodecl` is verbatim from their config,
    // `xoauto` is us filling it in — one of the two is always the reason `xo=1`.
    `xodecl=${t(e.xoDeclared)}`,
    `xoauto=${t(e.xoAuto)}`,
    `css=${t(e.css)}`,
    `shadow=${t(e.shadow)}`,
    `ifr=${t(e.iframes)}`,
    `ifrnav=${t(e.iframeNav)}`,
    `mode=${e.mode}`,
    `min=${t(e.min)}`,
    `dbg=${t(e.debug)}`,
    `dbgifr=${t(e.debugIframes)}`,
    `tel=${t(e.telemetry)}`,
    `occ=${e.occlusionParams}`,
    `ver=${String(e.appVersion).slice(0, 32)}`,
    `ws=${s}`,
    `unknown=${n}`
  ].join(" ");
}), /**
 * Redact credential-bearing query params from a URL that is about to leave the page in a log.
 *
 * Deliberately NOT the customer's `occlusion.url` hook: that hook shapes what appears in the
 * recording and is allowed to be a no-op, while this is a floor that applies whatever the
 * customer configured. The fixed list is the set that shows up in auth-handoff URLs; the
 * configured `queryParams` are added on top so a customer can extend it but never shrink it.
 */
i(a, "CREDENTIAL_QUERY_PARAMS", [
  "authorization",
  "access_token",
  "id_token",
  "refresh_token",
  "token",
  "code",
  "jwt",
  "session_token"
]), i(a, "safeUrlOcclusion", (e) => (t) => {
  try {
    return e(t);
  } catch (s) {
    return a.isSilent() || console.warn("[UXCam] occlusion.url threw - recording the raw URL", s), t;
  }
});
let N = a;
if (typeof window < "u" && !(window != null && window.uxc_initialised)) {
  const e = window.uxc;
  e != null && e.__ak && String(e.__ak).trim() && new N(e.__ak, e.__o);
}
})()