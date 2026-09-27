var we = Object.defineProperty;
var be = (u, e, t) => e in u ? we(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var r = (u, e, t) => be(u, typeof e != "symbol" ? e + "" : e, t);
import { g as Ce } from "./browser.DAhQtf15.js";
var R = /* @__PURE__ */ ((u) => (u.IMG = "0", u.VIDEO = "1", u.IFRAME = "2", u))(R || {}), p = /* @__PURE__ */ ((u) => (u.WINDOW_RESIZE = "1", u.VIEWPORT_RESIZE_EXPERIMENTAL = "1.1e", u.CUSTOM_EVENT = "2", u.DOM_READY = "3", u.ADD_NODES = "4", u.ATTR_CHANGE = "5", u.REMOVE_NODES = "6", u.SCROLL = "7", u.FOCUS = "8", u.MOUSE_MOVE = "9", u.TOUCH = "9.1e", u.MOUSE_CLICK = "10", u.MOUSE_OVER = "11", u.MOUSE_OUT = "12", u.PAGE_LOAD = "13", u.CHARACTER_DATA_CHANGE = "14", u.CSS_INSERT_RULE = "15", u.CSS_DELETE_RULE = "16", u.URL_CHANGE = "17", u.INPUT_CHANGE = "18", u.CHECKED_CHANGE = "18.c", u.USER_PROPERTY = "19", u.EVENT = "20", u.CLIENT_IP = "21", u.MEDIA_INFO = "22", u.MOUSE_DOUBLE_CLICK = "23", u.GESTURE = "24", u.CANVAS_FRAME_EXPERIMENTAL = "25", u.IFRAME_LOAD = "26", u.CANVAS_FRAME_REF = "27", u.CSS_REPLACE = "28", u.ADOPTED_STYLE_SHEET = "29", u.CSS_STYLE_DECLARATION = "30", u))(p || {}), x = /* @__PURE__ */ ((u) => (u.SWIPE_UP = "1", u.SWIPE_DOWN = "2", u.SWIPE_LEFT = "3", u.SWIPE_RIGHT = "4", u.TRAIL = "5", u))(x || {});
const J = "0.1", he = J.split(".").map((u, e) => parseInt(u) * Math.pow(10, 2 - e)).reduce((u, e) => u + e, 0), ee = "UXCAM_CROSS_ORIGIN_EVENT", q = (u, e) => e ? `iframe/${u}: ${e}` : `iframe/${u}`, $ = (u) => {
  var e;
  try {
    const t = u.getAttribute("src");
    return t ? new URL(t, ((e = u.ownerDocument) == null ? void 0 : e.baseURI) ?? document.baseURI).origin : "-";
  } catch {
    return "-";
  }
}, z = (u) => {
  const e = u.getAttribute("sandbox");
  if (e === null)
    return "-";
  const t = e.toLowerCase().split(/\s+/).filter(Boolean);
  if (!t.length)
    return "none";
  const s = t.includes("allow-scripts"), i = t.includes("allow-same-origin");
  return s && i ? "scripts+sameorigin" : s ? "scripts" : "none";
}, N = () => {
  try {
    return window.__uxcDiagOn === !0;
  } catch {
    return !1;
  }
}, Q = () => {
  try {
    return window.__uxcSilent === !0;
  } catch {
    return !1;
  }
}, le = () => {
  try {
    return !Q() && window.__uxcDebugOn === !0;
  } catch {
    return !1;
  }
}, de = (...u) => {
  Q() || console.warn("[UXCam]", ...u);
}, Ie = (...u) => {
  le() && console.log("[UXCam]", ...u);
}, B = (u, e) => e ? `diag/${u}: ${e}` : `diag/${u}`, W = 50;
function k(u) {
  return !!u && u.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !!u.host && Object.prototype.toString.call(u) === "[object ShadowRoot]";
}
function Me(u = window) {
  var i, n, o, a;
  const e = (c) => typeof c == "function" && Function.prototype.toString.call(c).includes("[native code]"), t = (c, l) => {
    var h;
    return c ? (h = Object.getOwnPropertyDescriptor(c, l)) == null ? void 0 : h.get : void 0;
  }, s = u;
  return e(t((i = s.Element) == null ? void 0 : i.prototype, "shadowRoot")) && e(t((n = s.Node) == null ? void 0 : n.prototype, "parentNode")) && e((a = (o = s.Node) == null ? void 0 : o.prototype) == null ? void 0 : a.getRootNode) && e(s.MutationObserver);
}
function te(u, e, t) {
  let s = u, i = 0;
  for (; s && i < W; i++) {
    const n = s.closest(e);
    if (n)
      return n;
    const o = s.getRootNode();
    s = (o == null ? void 0 : o.host) ?? null;
  }
  return s && i >= W && (t == null || t()), null;
}
const se = (u, e) => Math.sqrt(Math.pow(u[0] - e[0], 2) + Math.pow(u[1] - e[1], 2)), Re = (u) => {
  if (u.length < 2)
    return !1;
  let e = 0;
  const t = u[0], s = u[u.length - 1], i = se(t, s);
  for (let c = 0; c < u.length - 1; c++)
    e += se(u[c], u[c + 1]);
  return i / e > 0.8 && i > 30;
}, Te = (u) => {
  const e = u[0], t = u[u.length - 1], s = t[0] - e[0], i = t[1] - e[1];
  return Math.abs(s) > Math.abs(i) ? s > 0 ? x.SWIPE_RIGHT : x.SWIPE_LEFT : i > 0 ? x.SWIPE_DOWN : x.SWIPE_UP;
};
function Y(u) {
  const e = u.map((l) => ({ t: l.t, sz: l.data.byteLength, w: l.w, h: l.h })), t = new TextEncoder().encode(JSON.stringify(e)), s = Ce(t), i = u.reduce((l, h) => l + h.data.byteLength, 0), n = 4 + s.byteLength + i, o = new Uint8Array(n);
  new DataView(o.buffer).setUint32(0, s.byteLength, !1), o.set(s, 4);
  let c = 4 + s.byteLength;
  for (const l of u)
    o.set(new Uint8Array(l.data), c), c += l.data.byteLength;
  return o.buffer;
}
const Oe = {
  childList: !0,
  attributes: !0,
  characterData: !0,
  subtree: !0
}, De = 8;
class Le {
  constructor(e) {
    r(this, "opts");
    /** Closed roots, captured at `attachShadow` time — `element.shadowRoot` is null for them. */
    r(this, "closedShadowRoots", /* @__PURE__ */ new WeakMap());
    /** Roots we already observe (dedupe). */
    r(this, "observedRoots", /* @__PURE__ */ new WeakSet());
    r(this, "rootState", /* @__PURE__ */ new WeakMap());
    r(this, "liveRoots", /* @__PURE__ */ new Set());
    /**
     * Hosts of the roots we observe. Exists so the event hot path can ask "is this element a shadow
     * host?" with a WeakSet lookup instead of `getShadowRootOf`, which allocates a string via
     * `Object.prototype.toString.call` on every call.
     */
    r(this, "knownHosts", /* @__PURE__ */ new WeakSet());
    /**
     * Roots with adopted stylesheets still to emit. Drained once the batch's ADD_NODES are on the
     * wire, which is what keeps an ADOPTED_STYLE_SHEET behind the root it belongs to.
     */
    r(this, "pendingAdopted", /* @__PURE__ */ new Set());
    /**
     * Roots that have ever carried adopted stylesheets — the only ones worth re-checking.
     *
     * `adoptedStyleSheets` is an ObservableArray, so `push`/`splice`/`length = 0` mutate it without
     * ever invoking the setter the patch wraps. Re-reading these roots' arrays on the periodic sweep
     * is how an in-place theme swap gets noticed; the signature cache makes an unchanged root free on
     * the wire. Entries are dropped by `teardownRoot`, so this tracks live roots only.
     */
    r(this, "adoptedRoots", /* @__PURE__ */ new Set());
    /**
     * Set by `destroy()`. Because `destroy()` replaces `observedRoots` with a fresh WeakSet, the
     * dedupe can no longer stop a late `collectElement` (from a mutation batch that was already
     * queued) from re-observing a live root — an observer nothing would ever disconnect. This flag
     * is what makes destruction one-way.
     */
    r(this, "destroyed", !1);
    /**
     * Is this element the host of a root we observe? The allocation-free check for the event hot
     * path; use `getShadowRootOf` when the root itself is needed.
     */
    r(this, "isKnownHost", (e) => this.knownHosts.has(e));
    /**
     * The shadow root of an element, open (`element.shadowRoot`) or closed (captured at
     * `attachShadow` time). Only ever returns a native root.
     */
    r(this, "getShadowRootOf", (e) => {
      const t = e.shadowRoot ?? this.closedShadowRoots.get(e) ?? null;
      return t ? k(t) ? t : (this.opts.logError("non-native-root-skipped"), null) : null;
    });
    /**
     * Start observing a shadow root: mutations plus the non-composed event listeners. Deduped, so
     * it is safe to call from every discovery path.
     *
     * The iframe context is resolved when a batch is delivered, not captured here. A root created by
     * `attachShadow` can be observed before its iframe's document has been registered, and the
     * dedupe below means no later call gets a second chance to correct a value baked in now.
     */
    r(this, "observeRoot", (e) => {
      if (!this.opts.enabled || this.destroyed || this.observedRoots.has(e))
        return;
      this.observedRoots.add(e), e.host && this.knownHosts.add(e.host);
      const t = new MutationObserver((o) => {
        this.opts.onMutations(o, this.opts.getContextId(e));
      }), s = this.opts.getRootListeners();
      try {
        t.observe(e, Oe);
        for (const { type: o, handler: a } of s)
          e.addEventListener(o, a, !0);
      } catch (o) {
        this.opts.logError("observe-failed", o);
      }
      const n = { root: e, observer: t, removeListeners: () => {
        for (const { type: o, handler: a } of s)
          e.removeEventListener(o, a, !0);
      } };
      this.rootState.set(e, n), this.liveRoots.add(n);
    });
    /**
     * A root discovered during snapshot/mutation serialization. Observes it and, if it already
     * carries adopted sheets, queues them until the host is on the wire.
     */
    r(this, "trackSerializedRoot", (e) => {
      var t;
      this.observeRoot(e), (t = e.adoptedStyleSheets) != null && t.length && this.queueAdopted(e);
    });
    /**
     * Remember that this root's adopted stylesheets need emitting, and make sure a flush happens.
     *
     * Every adopted-sheet capture goes through here rather than emitting inline, because the event
     * has to land *after* the ADD_NODES whose `isShadow` child is what makes replay create the root.
     */
    r(this, "queueAdopted", (e) => {
      !this.opts.enabled || this.destroyed || (this.pendingAdopted.add(e), this.observedRoots.has(e) && this.adoptedRoots.add(e), this.opts.scheduleFlush());
    });
    /**
     * A root created at runtime via the patched `attachShadow`. Observes it and, for a
     * pre-populated root (declarative shadow DOM), emits its children as an ADD_NODES under the
     * host. An empty root — the common case — needs nothing here: children appended afterwards
     * arrive through the observer with their `isShadow` flag set.
     */
    r(this, "addShadowRoot", (e, t) => {
      if (!(!this.opts.enabled || this.destroyed || this.observedRoots.has(e))) {
        if (!this.opts.isTracked(t)) {
          this.trackSerializedRoot(e);
          return;
        }
        if (this.observeRoot(e), e.childNodes.length) {
          const s = this.opts.getUUID(t), i = [];
          for (const n of e.childNodes)
            i.push(this.opts.serializeNode(n));
          this.opts.emitAddNodes(s, i, this.opts.getContextId(e));
        }
        this.queueAdopted(e);
      }
    });
    /**
     * Safety net: pick up a shadow root on an already-tracked element that never went through
     * `attachShadow`, and so was announced by nothing.
     *
     * Declarative shadow DOM is attached by the HTML parser rather than by `attachShadow`, which is
     * why this exists. Measured in Chrome, though, `setHTMLUnsafe` only ever attaches a declarative
     * root to an element it *creates* — a `<template shadowrootmode>` that is a direct child of the
     * context element attaches no root at all — and a newly created host is already handled by
     * `collectElement`'s own `getShadowRootOf` lookup. So there is no confirmed trigger for this today;
     * it is here because the cost is one `shadowRoot` read per mutation target and the failure it
     * guards against (a root and its entire subtree silently absent from the recording) is invisible
     * from the outside.
     */
    r(this, "discoverRootOn", (e) => {
      if (!this.opts.enabled || this.destroyed)
        return;
      const t = this.getShadowRootOf(e);
      t && !this.observedRoots.has(t) && this.addShadowRoot(t, e);
    });
    /**
     * Emit the adopted sheets queued since the last flush. Called at the end of every mutation batch,
     * so the events land behind the ADD_NODES that put their hosts (and therefore their roots) on the
     * wire — which is the whole reason capture is queued rather than emitted inline.
     *
     * Also drives `sweepDetachedAndAdopted`, which is throttled and so does NOT run every batch.
     */
    r(this, "flushPendingAdopted", () => {
      for (const e of this.pendingAdopted) {
        const t = e.host;
        if (t && this.opts.isTracked(t))
          try {
            this.opts.captureAdoptedStyleSheets(e, this.opts.getUUID(t), this.opts.getContextId(e));
          } catch (s) {
            this.opts.logError("adopted-flush-failed", s);
          }
      }
      this.pendingAdopted.clear();
      try {
        this.sweepDetachedAndAdopted();
      } catch (e) {
        this.opts.logError("adopted-sweep-failed", e);
      }
    });
    /**
     * Periodic reconciliation, amortized because it is O(roots) and a mutating page flushes every
     * frame: prune roots whose host left the document, and re-read the adopted-sheet arrays that
     * in-place mutation could have changed behind the setter patch.
     */
    r(this, "flushCounter", 0);
    r(this, "sweepDetachedAndAdopted", () => {
      var e;
      if (++this.flushCounter % De === 0) {
        for (const t of this.liveRoots)
          (e = t.root.host) != null && e.isConnected || this.teardownRoot(t);
        for (const t of this.adoptedRoots) {
          const s = t.host;
          if (!(s != null && s.isConnected)) {
            this.adoptedRoots.delete(t);
            continue;
          }
          if (this.opts.isTracked(s))
            try {
              this.opts.captureAdoptedStyleSheets(t, this.opts.getUUID(s), this.opts.getContextId(t));
            } catch (i) {
              this.opts.logError("adopted-resweep-failed", i);
            }
        }
      }
    });
    r(this, "teardownRoot", (e) => {
      e.observer.disconnect(), e.removeListeners(), this.observedRoots.delete(e.root), this.rootState.delete(e.root), this.liveRoots.delete(e), this.adoptedRoots.delete(e.root), e.root.host && this.knownHosts.delete(e.root.host);
    });
    /**
     * A shadow host was removed: stop observing its root and collect its shadow descendants for
     * unregistration. A NodeIterator over the light DOM does not pierce shadow roots, so without
     * this both the observer and every shadow node's UUID would leak. Recurses into nested roots.
     */
    r(this, "cleanupRemovedHost", (e, t, s = 0) => {
      if (!this.opts.enabled)
        return;
      if (s >= W) {
        this.opts.logError("cleanup-depth-exceeded");
        return;
      }
      const i = this.getShadowRootOf(e);
      if (!i)
        return;
      const n = this.rootState.get(i);
      n ? this.teardownRoot(n) : this.observedRoots.delete(i), this.pendingAdopted.delete(i);
      const a = (e.ownerDocument ?? document).createNodeIterator(i, NodeFilter.SHOW_ALL);
      let c;
      for (; c = a.nextNode(); )
        t.push(c), c.nodeType === Node.ELEMENT_NODE && this.cleanupRemovedHost(c, t, s + 1);
    });
    /**
     * Patch `Element.prototype.attachShadow` for one realm so roots created at runtime — including
     * `mode: 'closed'`, which `element.shadowRoot` never exposes — are captured. Returns an
     * uninstaller. Must be called per realm: a same-origin iframe has its own `Element`.
     *
     * A host that is not yet connected is only recorded in `closedShadowRoots`; the snapshot path
     * picks its root up when the subtree is appended (`getShadowRootOf` reads that map).
     */
    r(this, "patchAttachShadow", (e = window) => {
      var h;
      if (!this.opts.enabled)
        return () => {
        };
      const t = e.Element;
      if (!((h = t == null ? void 0 : t.prototype) != null && h.attachShadow))
        return () => {
        };
      const s = t.prototype, i = s.attachShadow, { addShadowRoot: n, rememberClosedRoot: o } = this, a = this.opts.debug, c = this.opts.logError, l = function(d) {
        const f = i.call(this, d);
        try {
          (d == null ? void 0 : d.mode) === "closed" && o(this, f), this.isConnected && n(f, this);
        } catch (g) {
          a("shadow: attachShadow capture failed", g), c("attachshadow-capture-failed", g);
        }
        return f;
      };
      try {
        s.attachShadow = l;
      } catch (d) {
        return a("shadow: could not patch attachShadow", d), c("attachshadow-patch-failed", d), () => {
        };
      }
      return () => {
        try {
          s.attachShadow === l && (s.attachShadow = i);
        } catch (d) {
          a("shadow: could not restore attachShadow", d), c("attachshadow-restore-failed", d);
        }
      };
    });
    /** A closed root is invisible via `element.shadowRoot`, so this is the only chance to keep it. */
    r(this, "rememberClosedRoot", (e, t) => {
      this.closedShadowRoots.set(e, t);
    });
    /** Disconnect every observer and listener, and clear all state. One-way. */
    r(this, "destroy", () => {
      this.destroyed = !0;
      for (const e of this.liveRoots)
        this.teardownRoot(e);
      this.liveRoots.clear(), this.pendingAdopted.clear(), this.adoptedRoots.clear(), this.observedRoots = /* @__PURE__ */ new WeakSet(), this.rootState = /* @__PURE__ */ new WeakMap(), this.closedShadowRoots = /* @__PURE__ */ new WeakMap(), this.knownHosts = /* @__PURE__ */ new WeakSet();
    });
    this.opts = e;
  }
  /** True once any shadow root exists — lets hot paths skip shadow work entirely. */
  get hasShadowRoots() {
    return this.liveRoots.size > 0;
  }
}
class Ne {
  constructor(e, t) {
    /** Child UUID -> Parent UUID */
    r(this, "childToParent", /* @__PURE__ */ new Map());
    /** Parent UUID -> Child UUID */
    r(this, "parentToChild", /* @__PURE__ */ new Map());
    /** UUID generator function (from parent DomCollector's namespace) */
    r(this, "generateId");
    /** The parent-namespace UUID of the iframe element itself */
    r(this, "iframeUUID");
    /** Whether the child's document snapshot has been converted into an IFRAME_LOAD */
    r(this, "snapshotSeen", !1);
    /** How many payloads this iframe's child has delivered. Zero is the signal worth reporting. */
    r(this, "messageCount", 0);
    this.iframeUUID = e, this.generateId = t;
  }
  /**
   * Get or create a parent-namespace UUID for a child UUID.
   * If the child UUID has been seen before, returns the existing mapping.
   * Otherwise, generates a new parent UUID and stores the bidirectional mapping.
   */
  getRemappedId(e) {
    const t = this.childToParent.get(e);
    if (t !== void 0)
      return t;
    const s = this.generateId();
    return this.childToParent.set(e, s), this.parentToChild.set(s, e), s;
  }
  /**
   * Get the original child UUID from a parent UUID.
   */
  getChildId(e) {
    return this.parentToChild.get(e);
  }
  /**
   * Check if a child UUID has been mapped.
   */
  has(e) {
    return this.childToParent.has(e);
  }
  /**
   * Get the iframe element's UUID in the parent namespace.
   */
  getIframeUUID() {
    return this.iframeUUID;
  }
  /**
   * Whether the child's document snapshot has been converted into an IFRAME_LOAD yet.
   *
   * Nothing the child sends before its snapshot can be consumed: every UUID in those events is
   * minted fresh here, so it names a node the replay has never received, and they carry an
   * iframe context the replay cannot resolve to an element yet. Forwarding them yields dangling
   * targets and — for mouse events — a cursor the replay declines to move, which reads as
   * drift. Gate on this instead.
   */
  hasSnapshot() {
    return this.snapshotSeen;
  }
  /** Record that the child's snapshot has been converted and forwarded. */
  markSnapshot() {
    this.snapshotSeen = !0;
  }
  /**
   * Count one payload received from this iframe's child.
   *
   * The only per-message work the bridge telemetry does: one integer increment, no allocation, no
   * stringify, no config branch. Everything else is derived at report time.
   */
  countMessage() {
    this.messageCount++;
  }
  /** Whether this iframe's child has ever delivered anything. */
  hasReceived() {
    return this.messageCount > 0;
  }
  /** [IFRAME DIAGNOSTICS] Raw count, for `uxc.diagnose()`. hasReceived() answers the watchdog. */
  getMessageCount() {
    return this.messageCount;
  }
  /**
   * Reset all mappings. Called when the iframe navigates
   * (child sends a new PAGE_LOAD), because all old UUIDs become invalid.
   */
  reset() {
    this.childToParent.clear(), this.parentToChild.clear(), this.snapshotSeen = !1;
  }
  /**
   * Get the number of mappings (for diagnostics).
   */
  size() {
    return this.childToParent.size;
  }
  /**
   * Destroy and release memory.
   */
  destroy() {
    this.childToParent.clear(), this.parentToChild.clear();
  }
}
class xe {
  constructor(e) {
    r(this, "enabled", !1);
    r(this, "sendLog");
    this.sendLog = e;
  }
  /**
   * Enable or disable debug mode
   */
  setEnabled(e) {
    this.enabled = e;
  }
  /**
   * Log a debug message with context
   */
  log(e, t) {
    if (!this.enabled) return;
    const s = `[UXCam][iframe][${e}] ${JSON.stringify(t || {})}`;
    console.log(s);
  }
  /**
   * Log a warning.
   *
   * `sendLog` always gets the bounded `iframe/xo-err` key — that is the copy we can see from
   * production. The console gets the full detail only when debug logging is on: a bridge hiccup
   * inside a customer's frame is ours to read in Coralogix, not a visitor's to read in DevTools.
   * The old format put the context AND the error type ahead of the first colon, so its dedup key
   * varied per call site and per error — several budget slots for one subsystem, from inside
   * per-iframe loops. One key, first occurrence wins.
   */
  warn(e, t) {
    this.enabled && console.warn(`[UXCam][iframe][WARN][${e}] ${JSON.stringify(t || {})}`), this.sendLog(q("xo-err", `${e} warn`));
  }
  /**
   * Log an error. See `warn` for why `sendLog` gets a single fixed key and the console is gated.
   */
  error(e, t) {
    this.enabled && console.error(`[UXCam][iframe][ERROR][${e}]`, t);
    const s = (t == null ? void 0 : t.name) ?? typeof t;
    this.sendLog(q("xo-err", `${e} ${s}`));
  }
  /**
   * Log cross-origin specific events
   */
  logCrossOrigin(e, t) {
    this.log(`cross-origin:${e}`, t);
  }
  /**
   * Log same-origin specific events
   */
  logSameOrigin(e, t) {
    this.log(`same-origin:${e}`, t);
  }
}
const T = class T {
  /**
   * Create a new IFrameManager instance
   */
  constructor(e, t) {
    // Configuration
    r(this, "config");
    r(this, "debug");
    // Same-origin iframe tracking
    r(this, "__iframeMap", /* @__PURE__ */ new Map());
    r(this, "__iframeMutationObservers", /* @__PURE__ */ new Map());
    r(this, "__iframeDocumentMap", /* @__PURE__ */ new Map());
    r(this, "__iframeCleanupMap", /* @__PURE__ */ new Map());
    r(this, "__iframeLastDocument", /* @__PURE__ */ new Map());
    r(this, "__iframeUnloadListeners", /* @__PURE__ */ new Map());
    r(this, "__iframeUnloadListenerWindow", /* @__PURE__ */ new Map());
    r(this, "__iframeSrcMap", /* @__PURE__ */ new Map());
    r(this, "__iframeSnapshotSent", /* @__PURE__ */ new WeakSet());
    // Cross-origin (child) mode
    r(this, "isCrossSiteChild", !1);
    // Cross-origin iframe tracking (parent mode)
    r(this, "crossOriginIframeMap", /* @__PURE__ */ new Map());
    r(this, "crossOriginMirrors", /* @__PURE__ */ new Map());
    r(this, "xoWatchdog", null);
    r(this, "xoArmedAt", 0);
    r(this, "xoReported", !1);
    /** Cumulative count of payloads dropped for arriving before the child's snapshot. */
    r(this, "xoDropCount", 0);
    /** First rejection reason seen, if any: appkey | origin | nosource | unresolved. */
    r(this, "xoFirstReject", null);
    r(this, "xoFlushOnHide", null);
    /** Child origin → the stage its beacon reported when we pinged it. Empty until a PONG lands. */
    r(this, "xoPongs", /* @__PURE__ */ new Map());
    r(this, "xoPongListener", null);
    r(this, "xoPingTimer", null);
    /** [IFRAME DIAGNOSTICS] first-occurrence latches, so a trace stays a trace and not a firehose. */
    r(this, "diagPostLogged", !1);
    r(this, "diagRecvLogged", !1);
    // Callbacks
    r(this, "onChange");
    r(this, "getSeq");
    r(this, "getTime");
    r(this, "createId");
    r(this, "getIframeUUID");
    r(this, "getIframeFullSelector");
    r(this, "getIframeDocuments");
    this.config = e, this.onChange = t.onChange, this.getSeq = t.getSeq, this.getTime = t.getTime, this.createId = t.createId, this.getIframeUUID = t.getIframeUUID, this.getIframeFullSelector = t.getIframeFullSelector, this.getIframeDocuments = t.getIframeDocuments, this.debug = new xe(e.sendLog), this.debug.setEnabled(!Q() && (e.debugIframes === !0 || le())), this.config.enableCrossSiteIframes && this.detectCrossSiteMode(), this.installDiagRunner();
  }
  // ============================================================================
  // Cross-Origin Detection
  // ============================================================================
  /**
   * Check if we're running inside an iframe
   */
  static isInIframe() {
    try {
      return window.self !== window.top;
    } catch {
      return !0;
    }
  }
  /**
   * Detect if we're running as a cross-site child iframe
   */
  detectCrossSiteMode() {
    if (!T.isInIframe()) {
      this.isCrossSiteChild = !1;
      return;
    }
    try {
      const e = window.parent.document;
      this.isCrossSiteChild = !1;
    } catch {
      this.isCrossSiteChild = !0;
    }
    this.debug.logCrossOrigin("detection", {
      isInIframe: T.isInIframe(),
      isCrossSiteChild: this.isCrossSiteChild,
      origin: window.location.origin
    });
  }
  /**
   * Get the cross-origin detection result
   */
  getCrossOriginDetectionResult() {
    return {
      isInIframe: T.isInIframe(),
      isCrossSiteChild: this.isCrossSiteChild,
      origin: window.location.origin,
      hasParent: window.parent !== window
    };
  }
  /**
   * Check if running in cross-site child mode
   */
  isCrossSiteMode() {
    return this.isCrossSiteChild;
  }
  // ============================================================================
  // Cross-Origin Communication (Child Mode)
  // ============================================================================
  /**
   * Extract payload type from DOMChanges or DOMChangesMin
   */
  getPayloadType(e) {
    const t = e.ct;
    if (t) return t;
    const s = e.type;
    return s || "unknown";
  }
  /**
   * Send payload to parent window via postMessage (for cross-origin iframes)
   */
  sendToParent(e) {
    if (!this.isCrossSiteChild || !this.config.enableCrossSiteIframes) {
      N() && !this.diagPostLogged && (this.diagPostLogged = !0, this.config.sendLog(B(
        "xo-nosend",
        `child=${this.isCrossSiteChild} enabled=${this.config.enableCrossSiteIframes}`
      )));
      return;
    }
    const t = this.getPayloadType(e);
    N() && !this.diagPostLogged && (this.diagPostLogged = !0, this.config.sendLog(B("xo-post", `type=${t} origin=${window.location.origin}`))), this.debug.logCrossOrigin("send-to-parent", {
      appKey: this.config.appKey,
      origin: window.location.origin,
      payloadType: t
    }), window.parent.postMessage({
      type: ee,
      payload: e,
      appKey: this.config.appKey,
      sourceOrigin: window.location.origin
    }, "*");
  }
  /**
   * Initialize listener for cross-origin messages (for parent window)
   * Returns a cleanup function.
   *
   * When a message arrives from a registered cross-origin iframe:
   * 1. Validate (type, appKey, origin anti-forwarding)
   * 2. Resolve event.source → HTMLIFrameElement via crossOriginIframeMap
   * 3. Look up CrossOriginIframeMirror for UUID remapping
   * 4. Discard irrelevant events (WINDOW_RESIZE, DOM_READY, etc.)
   * 5. Transform event (remap UUIDs, convert PAGE_LOAD→IFRAME_LOAD)
   * 6. Re-sequence (assign new seq/time)
   * 7. Emit via onChange
   */
  initCrossSiteListener() {
    if (this.isCrossSiteChild || !this.config.enableCrossSiteIframes)
      return this.debug.logCrossOrigin("listener-skip", { reason: "is-child-or-disabled" }), () => {
      };
    this.debug.logCrossOrigin("listener-attached");
    const e = (t) => {
      if (!t.data || t.data.type !== ee)
        return;
      if (t.data.appKey && t.data.appKey !== this.config.appKey) {
        this.debug.logCrossOrigin("listener-rejected", { reason: "appkey-mismatch" }), this.noteBridgeReject("appkey");
        return;
      }
      if (t.data.sourceOrigin && t.origin && t.data.sourceOrigin !== t.origin) {
        this.debug.logCrossOrigin("listener-rejected", { reason: "origin-mismatch" }), this.noteBridgeReject("origin");
        return;
      }
      const s = t.data.payload, i = this.getPayloadType(s);
      if (!t.source) {
        this.debug.logCrossOrigin("listener-no-source"), this.noteBridgeReject("nosource");
        return;
      }
      const n = this.crossOriginIframeMap.get(t.source) ?? this.discoverIframeFromSource(t.source);
      if (!n) {
        this.debug.logCrossOrigin("listener-unregistered-source", {
          origin: t.origin,
          payloadType: i
        }), this.noteBridgeReject("unresolved"), this.emitLegacyPassThrough(s);
        return;
      }
      const o = this.crossOriginMirrors.get(n);
      if (!o) {
        this.debug.logCrossOrigin("listener-no-mirror", { origin: t.origin }), this.emitLegacyPassThrough(s);
        return;
      }
      if (o.countMessage(), N() && !this.diagRecvLogged && (this.diagRecvLogged = !0, this.config.sendLog(B("xo-recv", `origin=${t.origin} type=${i}`))), this.debug.logCrossOrigin("listener-received", {
        origin: t.origin,
        payloadType: i,
        iframeUUID: o.getIframeUUID()
      }), this.shouldDiscardEvent(i)) {
        this.debug.logCrossOrigin("listener-discarded", { payloadType: i });
        return;
      }
      const a = this.transformCrossOriginEvent(
        s,
        i,
        o,
        o.getIframeUUID(),
        n
      );
      a && (this.config.min ? (a.s = this.getSeq(), a.t = this.getTime(), a.f = !0) : (a.seq = this.getSeq(), a.time = this.getTime(), a.fromIframe = !0), this.onChange(a));
    };
    return window.addEventListener("message", e), () => window.removeEventListener("message", e);
  }
  /**
   * Legacy pass-through for messages from unregistered sources.
   * Just re-sequences and emits without remapping (backward compatible).
   */
  emitLegacyPassThrough(e) {
    this.config.min ? (e.s = this.getSeq(), e.t = this.getTime(), e.f = !0) : (e.seq = this.getSeq(), e.time = this.getTime(), e.fromIframe = !0), this.onChange(e);
  }
  // ============================================================================
  // Cross-Origin Iframe Registration (Parent Mode)
  // ============================================================================
  /**
   * Register a cross-origin iframe for event remapping.
   * Creates the mapping from event.source → iframe element
   * and initializes a CrossOriginIframeMirror for UUID translation.
   */
  addCrossOriginIframe(e, t) {
    if (this.config.enableCrossSiteIframes) {
      try {
        const s = e.contentWindow;
        s && this.crossOriginIframeMap.set(
          s,
          e
        );
      } catch (s) {
        this.debug.error("addCrossOriginIframe-contentWindow", s);
      }
      if (!this.crossOriginMirrors.has(e)) {
        const s = new Ne(
          t,
          this.createId
        );
        this.crossOriginMirrors.set(e, s), this.debug.logCrossOrigin("mirror-created", { iframeUUID: t }), this.armBridgeWatchdog();
      }
    }
  }
  // ========================================================================
  // Bridge watchdog
  // ========================================================================
  /**
   * Start the one-shot bridge report, if it isn't already running.
   *
   * Armed from the first registration rather than from page load, and that placement is the whole
   * point: a page with no cross-origin iframes never arms, never logs and never spends a log-budget
   * slot, while an iframe an SPA inserts thirty seconds into the session still gets reported ten
   * seconds after IT appeared. A page-load-anchored timer would have missed exactly the case this
   * was written for.
   */
  /**
   * [IFRAME DIAGNOSTICS] Install `uxc.diagnose()`'s implementation onto the beacon.
   *
   * The beacon itself is in the SDK entry, where it has to be — it must exist before every gate
   * that can stop the SDK, so that a frame which stopped can still answer a ping. This half is
   * only ever called interactively, on a page whose chunks already loaded, so it lives here and
   * keeps ~6KB out of the script every customer downloads.
   *
   * What it does: ping every iframe on the page and print what each one's SDK reports back, next
   * to what this page knows about the frame. `no-response` means the SDK entry never executed in
   * that frame at all — a CSP, a missing snippet, or a document that never ran a script — which is
   * a different diagnosis from every stage a frame could report, and the reason the ping exists.
   */
  installDiagRunner() {
    try {
      const e = window.__uxcDiag;
      if (!e || e.run) return;
      e.run = async (t = 700) => {
        const s = Array.prototype.slice.call(
          document.querySelectorAll("iframe")
        ), i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = (l) => {
          if (!l.data || l.data.type !== e.PONG) return;
          const h = l.source ? i.get(l.source) : void 0;
          h && n.set(h, l.data.report);
        };
        window.addEventListener("message", o);
        for (const l of s)
          try {
            const h = l.contentWindow;
            if (!h) continue;
            i.set(h, l), h.postMessage({ type: e.PING }, "*");
          } catch {
          }
        await new Promise((l) => setTimeout(l, t)), window.removeEventListener("message", o);
        const a = s.map((l) => {
          const h = n.get(l);
          let d = !1;
          try {
            d = !!l.contentDocument;
          } catch {
            d = !1;
          }
          return {
            origin: $(l),
            sameOrigin: d,
            sandbox: z(l),
            registered: this.crossOriginMirrors.has(l),
            childStage: h ? h.stage : d ? "no-sdk (parent records it)" : "no-response",
            childOpts: h ? JSON.stringify(h.opts) : null,
            childPosted: h ? h.posted : null,
            childStorage: h ? h.storage : null,
            childTrace: h ? h.trace : null
          };
        }), c = {
          self: e.report(),
          frames: a,
          bridge: e.bridge ? e.bridge() : []
        };
        try {
          console.log("[UXCam diag] this frame"), console.table([c.self]), console.log("[UXCam diag] iframes"), console.table(a), c.bridge.length && (console.log("[UXCam diag] bridge"), console.table(c.bridge)), console.log(`[UXCam diag] paste this into the ticket:
` + JSON.stringify(c));
        } catch {
        }
        return c;
      };
    } catch {
    }
  }
  /**
   * [IFRAME DIAGNOSTICS] Publish the parent's view of the bridge for `uxc.diagnose()`.
   *
   * The aggregated `iframe/xo-bridge` log answers "did anything arrive" once, ten seconds in. This
   * answers "what is each frame doing" at any moment, per frame, from the console — the two halves
   * of the same question, one for a session you can only read after the fact and one for a session
   * you have in front of you. A live getter rather than a snapshot so it is never stale.
   */
  publishDiagBridge() {
    try {
      const e = window.__uxcDiag;
      if (!e) return;
      e.bridge = () => {
        const t = [];
        for (const [s, i] of this.crossOriginMirrors)
          t.push({
            origin: $(s),
            sandbox: z(s),
            registered: !0,
            messages: i.getMessageCount(),
            snapshot: i.hasSnapshot(),
            iframeUUID: i.getIframeUUID()
          });
        return t;
      };
    } catch {
    }
  }
  armBridgeWatchdog() {
    if (this.publishDiagBridge(), !N() || this.xoWatchdog !== null || this.xoReported) return;
    this.xoArmedAt = Date.now(), this.listenForPongs(), this.xoWatchdog = setTimeout(() => {
      this.xoWatchdog = null, this.reportBridgeState();
    }, T.XO_REPORT_DELAY_MS), this.pingChildren(), this.xoPingTimer = setTimeout(
      () => {
        this.xoPingTimer = null, this.pingChildren();
      },
      T.XO_REPORT_DELAY_MS - T.XO_PING_LEAD_MS
    );
    const e = () => this.reportBridgeState();
    this.xoFlushOnHide = e, window.addEventListener("pagehide", e);
  }
  /**
   * Collect PONGs from any frame we ping.
   *
   * A permanent listener rather than a per-sweep one: `uxc.diagnose()` installs its own, and two
   * short-lived listeners racing the same replies is how a reply gets counted twice. The wire
   * names come off the beacon so this file never redeclares them — see the no-static-imports note
   * in the entry.
   */
  listenForPongs() {
    if (!this.xoPongListener)
      try {
        const e = window.__uxcDiag, t = e == null ? void 0 : e.PONG;
        if (!t) return;
        this.xoPongListener = (s) => {
          var n;
          const i = s.data;
          !i || i.type !== t || this.xoPongs.size >= 20 || this.xoPongs.set(String(s.origin), String(((n = i.report) == null ? void 0 : n.stage) ?? "?").slice(0, 32));
        }, window.addEventListener("message", this.xoPongListener);
      } catch {
      }
  }
  /** Ask every registered cross-origin child what stage it reached. Answers arrive asynchronously. */
  pingChildren() {
    var e, t;
    try {
      const s = (e = window.__uxcDiag) == null ? void 0 : e.PING;
      if (!s) return;
      for (const i of this.crossOriginMirrors.keys())
        try {
          (t = i.contentWindow) == null || t.postMessage({ type: s }, "*");
        } catch {
        }
    } catch {
    }
  }
  /**
   * What the child itself said, for one origin — read at report time, never retained.
   *
   * `hello` is the load-bearing one and the reason both exist. PONG only answers if the parent
   * managed to ask, which needs this chunk loaded and a live `contentWindow`; HELLO is posted
   * unprompted from the child's module evaluation, before every gate that can stop it. So
   * `hello=0 ping=none` is a positive statement that no UXCam script ran in that frame, while
   * `hello=1 ping=none` says it ran and has since gone away — two different bugs.
   */
  helloCount() {
    var e;
    try {
      return ((e = window.__uxcDiagHello) == null ? void 0 : e.length) ?? 0;
    } catch {
      return 0;
    }
  }
  childEvidence(e) {
    let t = "0";
    try {
      const s = window.__uxcDiagHello, i = s == null ? void 0 : s.find((n) => n.origin === e);
      i && (t = `1@${i.at}:${i.stage}`);
    } catch {
    }
    return { hello: t, ping: this.xoPongs.get(e) ?? "none" };
  }
  /**
   * Emit the single aggregated bridge report.
   *
   * One `sendLog` key, so it survives dedup as one Rollbar item carrying the whole picture. Seven
   * separate keys would each give you their first occurrence and tell you nothing about the frame
   * you actually care about.
   */
  reportBridgeState() {
    if (this.xoReported) return;
    this.xoReported = !0, this.clearBridgeWatchdog();
    let e = 0, t = 0, s = 0;
    const i = [];
    for (const [o, a] of this.crossOriginMirrors)
      if (e++, a.hasReceived())
        t++, a.hasSnapshot() && s++;
      else if (i.length < 3) {
        const c = $(o), l = this.childEvidence(c);
        i.push(`${c}[hello=${l.hello} ping=${l.ping}]`);
      }
    if (e === 0) return;
    const n = [
      `reg=${e}`,
      `msg=${t}`,
      `snap=${s}`,
      `silent=${e - t}`,
      `nosnap=${t - s}`,
      `drop=${this.xoDropCount}`,
      `rej=${this.xoFirstReject ?? "-"}`,
      // Totals, so a search can filter on them without parsing `origins=`.
      `hello=${this.helloCount()}`,
      `pong=${this.xoPongs.size}`,
      `t=${Date.now() - this.xoArmedAt}`,
      `origins=${i.join(",") || "-"}`
    ].join(" ");
    this.config.sendLog(q("xo-bridge", n)), this.debug.logCrossOrigin("bridge-report", { detail: n });
  }
  /** Record the first rejection reason; later ones are noise once the first is known. */
  noteBridgeReject(e) {
    N() && this.xoFirstReject === null && this.config.sendLog(B("xo-reject", e)), this.xoFirstReject === null && (this.xoFirstReject = e);
  }
  clearBridgeWatchdog() {
    this.xoWatchdog !== null && (clearTimeout(this.xoWatchdog), this.xoWatchdog = null), this.xoFlushOnHide && (window.removeEventListener("pagehide", this.xoFlushOnHide), this.xoFlushOnHide = null), this.xoPingTimer !== null && (clearTimeout(this.xoPingTimer), this.xoPingTimer = null), this.xoPongListener && (window.removeEventListener("message", this.xoPongListener), this.xoPongListener = null);
  }
  /**
   * Remove a cross-origin iframe and clean up its mirror.
   */
  removeCrossOriginIframe(e) {
    const t = this.crossOriginMirrors.get(e);
    t && (t.destroy(), this.crossOriginMirrors.delete(e), this.debug.logCrossOrigin("mirror-removed", { iframeUUID: t.getIframeUUID() }));
    try {
      const s = e.contentWindow;
      s && this.crossOriginIframeMap.delete(s);
    } catch {
    }
  }
  /**
   * Re-register the contentWindow mapping for a cross-origin iframe.
   * Called when iframe navigates (contentWindow stays same WindowProxy
   * but re-registering ensures the map is up to date).
   */
  refreshCrossOriginIframeMapping(e) {
    try {
      const t = e.contentWindow;
      t && this.crossOriginIframeMap.set(
        t,
        e
      );
    } catch (t) {
      this.debug.error("refreshCrossOriginIframeMapping", t);
    }
  }
  /**
   * Auto-discover an iframe element from a postMessage source.
   * Scans all iframes on the page to find which one has contentWindow === source,
   * then registers it for cross-origin event remapping.
   * This is a safety net for cases where the iframe wasn't pre-registered
   * (e.g., iframe started as same-origin about:blank then navigated cross-origin).
   */
  discoverIframeFromSource(e) {
    const t = [document];
    for (const s of this.getIframeDocuments())
      s && t.push(s);
    for (const s of t) {
      let i;
      try {
        i = s.querySelectorAll("iframe");
      } catch {
        continue;
      }
      for (const n of i)
        try {
          if (n.contentWindow === e) {
            const o = this.getIframeUUID(n);
            if (o)
              return this.addCrossOriginIframe(n, o), this.debug.logCrossOrigin("auto-discovered", { uuid: o }), n;
          }
        } catch {
        }
    }
    return null;
  }
  shouldDiscardEvent(e) {
    return T.DISCARDED_CHANGE_TYPES.has(e) || T.DISCARDED_FULL_TYPES.has(e);
  }
  /**
   * Central routing method that dispatches each cross-origin event
   * to the appropriate transformation handler.
   */
  transformCrossOriginEvent(e, t, s, i, n) {
    if (t === p.PAGE_LOAD || t === "PAGE_LOAD") {
      s.reset();
      const a = this.transformPageLoadToIframeLoad(e, s, i);
      return s.markSnapshot(), a;
    }
    return !this.config.recordIframeNavigation && this.isNavigationPayload(e, t) ? (this.debug.logCrossOrigin("dropped-iframe-navigation", { payloadType: t, iframeUUID: i }), null) : !(t === p.EVENT || t === "EVENT") && !s.hasSnapshot() ? (this.xoDropCount++, this.debug.logCrossOrigin("dropped-before-snapshot", { payloadType: t, iframeUUID: i }), null) : t === p.IFRAME_LOAD || t === "IFRAME_LOAD" ? this.transformIframeLoad(e, s, i) : t === p.ADD_NODES || t === "ADD_NODES" ? this.transformAddNodes(e, s, i) : t === p.REMOVE_NODES || t === "REMOVE_NODES" ? this.transformRemoveNodes(e, s, i) : t === p.CSS_INSERT_RULE || t === "CSS_INSERT_RULE" || t === p.CSS_DELETE_RULE || t === "CSS_DELETE_RULE" ? this.transformCSSEvent(e, s, i) : t === p.EVENT || t === "EVENT" ? this.transformEventPayload(e, i, n) : this.transformSingleTargetEvent(e, s, i, n);
  }
  /**
   * True for the two payloads a child SDK emits on a route change: URL_CHANGE and the
   * `uxc_url_navigate` EVENT that `capturePageView` sends alongside it.
   */
  isNavigationPayload(e, t) {
    return t === p.URL_CHANGE || t === "URL_CHANGE" ? !0 : t === p.EVENT || t === "EVENT" ? (e.n ?? e.name) === "uxc_url_navigate" : !1;
  }
  /**
   * Convert a child's PAGE_LOAD into a parent's IFRAME_LOAD.
   * The child's full DOM snapshot becomes a subtree attached under the iframe element.
   */
  transformPageLoadToIframeLoad(e, t, s) {
    if (this.config.min) {
      const n = JSON.parse(JSON.stringify(e.n));
      return this.remapNodeTreeMin(n, t), {
        s: 0,
        t: 0,
        ct: p.IFRAME_LOAD,
        tg: s,
        n
      };
    } else {
      const n = JSON.parse(JSON.stringify(e.node));
      return this.remapNodeTree(n, t), {
        seq: 0,
        time: 0,
        type: "IFRAME_LOAD",
        target: s,
        node: n
      };
    }
  }
  /**
   * Transform a nested IFRAME_LOAD from a child cross-origin iframe.
   */
  transformIframeLoad(e, t, s) {
    if (this.config.min) {
      const i = e, n = JSON.parse(JSON.stringify(i.n));
      this.remapNodeTreeMin(n, t);
      const o = i.if;
      return {
        ...i,
        tg: t.getRemappedId(i.tg),
        n,
        if: o ? t.getRemappedId(o) : s
      };
    } else {
      const i = e, n = JSON.parse(JSON.stringify(i.node));
      this.remapNodeTree(n, t);
      const o = i.iframeContext;
      return {
        ...i,
        target: t.getRemappedId(i.target),
        node: n,
        iframeContext: o ? t.getRemappedId(o) : s
      };
    }
  }
  /**
   * Transform ADD_NODES: remap parentUUID, prevUUID, nextUUID, and all child node trees.
   */
  transformAddNodes(e, t, s) {
    if (this.config.min) {
      const i = e, n = JSON.parse(JSON.stringify(i.c));
      for (const a of n)
        this.remapNodeTreeMin(a, t);
      const o = i.if;
      return {
        ...i,
        p: t.getRemappedId(i.p),
        c: n,
        pu: i.pu ? t.getRemappedId(i.pu) : null,
        nu: i.nu ? t.getRemappedId(i.nu) : null,
        if: o ? t.getRemappedId(o) : s
      };
    } else {
      const i = e, n = JSON.parse(JSON.stringify(i.children));
      for (const a of n)
        this.remapNodeTree(a, t);
      const o = i.iframeContext;
      return {
        ...i,
        parentUUID: t.getRemappedId(i.parentUUID),
        children: n,
        prevUUID: i.prevUUID ? t.getRemappedId(i.prevUUID) : null,
        nextUUID: i.nextUUID ? t.getRemappedId(i.nextUUID) : null,
        iframeContext: o ? t.getRemappedId(o) : s
      };
    }
  }
  /**
   * Transform REMOVE_NODES: remap all UUID references.
   */
  transformRemoveNodes(e, t, s) {
    if (this.config.min) {
      const i = e, n = i.if;
      return {
        ...i,
        u: i.u.map((o) => t.getRemappedId(o)),
        if: n ? t.getRemappedId(n) : s
      };
    } else {
      const i = e, n = i.iframeContext;
      return {
        ...i,
        UUIDs: i.UUIDs.map((o) => t.getRemappedId(o)),
        iframeContext: n ? t.getRemappedId(n) : s
      };
    }
  }
  /**
   * Transform CSS events (CSS_INSERT_RULE, CSS_DELETE_RULE).
   * Full format uses 'targetStyle' (not 'target'), min format uses 'tg'.
   */
  transformCSSEvent(e, t, s) {
    if (this.config.min) {
      const i = { ...e };
      "tg" in i && typeof i.tg == "string" && (i.tg = t.getRemappedId(i.tg));
      const n = e.if;
      return i.if = n ? t.getRemappedId(n) : s, i;
    } else {
      const i = { ...e };
      "targetStyle" in i && typeof i.targetStyle == "string" && (i.targetStyle = t.getRemappedId(
        i.targetStyle
      ));
      const n = e.iframeContext;
      return i.iframeContext = n ? t.getRemappedId(n) : s, i;
    }
  }
  /**
   * Transform single-target events (ATTR_CHANGE, CHARACTER_DATA_CHANGE,
   * SCROLL, MOUSE_MOVE, MOUSE_CLICK, MOUSE_OVER, MOUSE_OUT,
   * MOUSE_DOUBLE_CLICK, INPUT_CHANGE, CHECKED_CHANGE, FOCUS,
   * TOUCH, MEDIA_INFO, GESTURE, URL_CHANGE, etc.)
   *
   * Remaps the `target`/`tg` field if present, adds iframeContext.
   */
  transformSingleTargetEvent(e, t, s, i) {
    if (this.config.min) {
      const n = { ...e };
      "tg" in n && typeof n.tg == "string" && (n.tg = t.getRemappedId(n.tg));
      const o = e.if;
      if (n.if = o ? t.getRemappedId(o) : s, "sel" in n && typeof n.sel == "string") {
        const a = this.getIframeFullSelector(i);
        n.sel = `${a} >>> ${n.sel}`;
      }
      return n;
    } else {
      const n = { ...e };
      "target" in n && typeof n.target == "string" && (n.target = t.getRemappedId(
        n.target
      ));
      const o = e.iframeContext;
      if (n.iframeContext = o ? t.getRemappedId(o) : s, "selector" in n && typeof n.selector == "string") {
        const a = this.getIframeFullSelector(i);
        n.selector = `${a} >>> ${n.selector}`;
      }
      return n;
    }
  }
  /**
   * Transform EVENT type payloads (uxc_input, uxc_dead_click, etc.) from cross-origin iframes.
   * Prefixes selector-like fields inside the event properties with the iframe's full path.
   * EVENT payloads have properties nested inside `p` (min) or `properties` (full).
   */
  transformEventPayload(e, t, s) {
    const i = this.getIframeFullSelector(s), n = (o) => `${i} >>> ${o}`;
    if (this.config.min) {
      const o = { ...e };
      o.if = t;
      const a = o.p;
      if (a) {
        const c = { ...a };
        typeof c.selector == "string" && (c.selector = n(c.selector)), typeof c.uxc_target == "string" && (c.uxc_target = n(c.uxc_target)), o.p = c;
      }
      return o;
    } else {
      const o = { ...e };
      o.iframeContext = t;
      const a = o.properties;
      if (a) {
        const c = { ...a };
        typeof c.selector == "string" && (c.selector = n(c.selector)), typeof c.uxc_target == "string" && (c.uxc_target = n(c.uxc_target)), o.properties = c;
      }
      return o;
    }
  }
  // ============================================================================
  // Node Tree UUID Remapping
  // ============================================================================
  /**
   * Recursively remap all UUIDs in an INode tree (full format).
   */
  remapNodeTree(e, t) {
    if (e.UUID = t.getRemappedId(e.UUID), e.cssRules)
      for (const s of e.cssRules)
        s.targetStyle && (s.targetStyle = t.getRemappedId(s.targetStyle));
    if (e.meta && e.meta.type === R.IFRAME) {
      const s = e.meta;
      s.contentDocumentUUID && (s.contentDocumentUUID = t.getRemappedId(
        s.contentDocumentUUID
      ));
    }
    for (const s of e.childNodes)
      this.remapNodeTree(s, t);
  }
  /**
   * Recursively remap all UUIDs in an INodeMin tree (minified format).
   */
  remapNodeTreeMin(e, t) {
    if (e.u = t.getRemappedId(e.u), e.r)
      for (const s of e.r)
        s.t && (s.t = t.getRemappedId(s.t));
    if (e.m && e.m.type === R.IFRAME) {
      const s = e.m;
      s.cd && (s.cd = t.getRemappedId(s.cd));
    }
    for (const s of e.c)
      this.remapNodeTreeMin(s, t);
  }
  // ============================================================================
  // Same-Origin Iframe Handling
  // ============================================================================
  /**
   * Check if an iframe is same-origin
   */
  isSameOriginIframe(e) {
    try {
      return !!e.contentDocument;
    } catch {
      return !1;
    }
  }
  /**
   * Get iframe origin information
   */
  getIframeOriginInfo(e) {
    var t;
    try {
      const s = e.contentDocument;
      let i = "unknown";
      try {
        i = ((t = s == null ? void 0 : s.location) == null ? void 0 : t.origin) ?? "unknown";
      } catch {
        i = "access-denied";
      }
      return {
        isSameOrigin: !!s,
        origin: i,
        hasContentDocument: !!s
      };
    } catch {
      return {
        isSameOrigin: !1,
        origin: "access-denied",
        hasContentDocument: !1
      };
    }
  }
  /**
   * Process an iframe element for recording
   */
  processIframe(e, t, s, i, n, o) {
    if (!this.config.enableSameSiteIframes) {
      this.debug.logSameOrigin("disabled", { src: e.src });
      return;
    }
    try {
      const a = e.contentDocument;
      if (!a) {
        this.debug.logSameOrigin("no-content-doc", { src: e.src }), this.recordIframeMetadata(e, s, !1);
        return;
      }
      if (a.readyState !== "loading" && a.documentElement) {
        this.debug.logSameOrigin("ready", { iframeUUID: t, src: e.src }), this.__iframeMap.set(t, e), this.__iframeSrcMap.set(e, e.src || e.getAttribute("src") || ""), n(a.documentElement);
        const l = o(a.documentElement);
        if (!l)
          return;
        this.__iframeDocumentMap.set(a, t);
        const h = i(a.documentElement);
        this.__iframeSnapshotSent.add(a), this.recordIframeMetadata(e, s, !0, l, h), this.observeIframeDocument(e, a, t, i, n);
      } else {
        this.debug.logSameOrigin("waiting-for-load", { iframeUUID: t, src: e.src }), this.__iframeMap.set(t, e), this.__iframeSrcMap.set(e, e.src || e.getAttribute("src") || ""), this.recordIframeMetadata(e, s, !0);
        const l = () => {
          try {
            const h = e.contentDocument;
            if (h && h.documentElement) {
              if (this.debug.logSameOrigin("load-handled", { iframeUUID: t, src: e.src }), n(h.documentElement), !o(h.documentElement))
                return;
              this.__iframeDocumentMap.set(h, t), this.__iframeSrcMap.set(e, e.src || e.getAttribute("src") || "");
              const f = i(h.documentElement);
              this.__iframeSnapshotSent.add(h), this.sendIframeLoadEvent(t, f), this.observeIframeDocument(e, h, t, i, n);
            }
          } catch (h) {
            this.debug.error("iframe-load-handler", h);
          }
        };
        e.addEventListener("load", l, { once: !0 });
      }
    } catch (a) {
      this.debug.error("process-iframe", a), this.recordIframeMetadata(e, s, !1);
    }
  }
  /**
   * Record iframe metadata on a node
   */
  recordIframeMetadata(e, t, s, i, n) {
    const o = this.config.min ? {
      type: R.IFRAME,
      s: e.src || "",
      so: s,
      ...i && { cd: i }
    } : {
      type: R.IFRAME,
      src: e.src || "",
      isSameOrigin: s,
      ...i && { contentDocumentUUID: i }
    };
    this.config.min ? (t.m = o, n && t.c.push(n)) : (t.meta = o, n && t.childNodes.push(n));
  }
  /**
   * Send IFRAME_LOAD event
   */
  sendIframeLoadEvent(e, t) {
    const s = this.config.min ? {
      s: this.getSeq(),
      t: this.getTime(),
      ct: p.IFRAME_LOAD,
      tg: e || "",
      n: t
    } : {
      seq: this.getSeq(),
      time: this.getTime(),
      type: "IFRAME_LOAD",
      target: e || "",
      node: t
    };
    this.onChange(s);
  }
  /**
   * Observe mutations in an iframe document
   */
  observeIframeDocument(e, t, s, i, n) {
    const o = this.__iframeLastDocument.get(e);
    if (o && o !== t) {
      this.debug.logSameOrigin("document-changed", { iframeUUID: s });
      const c = this.__iframeCleanupMap.get(e);
      c && c(), this.__iframeDocumentMap.delete(o);
    }
    if (this.__iframeMutationObservers.has(e)) {
      this.debug.logSameOrigin("observer-exists", { iframeUUID: s });
      const c = this.__iframeMutationObservers.get(e);
      c == null || c.disconnect(), this.__iframeMutationObservers.delete(e);
    }
    const a = () => {
      const c = e.contentDocument;
      if (!c || !c.body) {
        this.debug.logSameOrigin("observer-waiting", { iframeUUID: s }), e.addEventListener("load", a, { once: !0 });
        return;
      }
      this.debug.logSameOrigin("observer-attaching", { iframeUUID: s }), this.__iframeLastDocument.set(e, c);
      const l = c.defaultView || window, h = new MutationObserver(() => {
        const S = this.config.min ? {
          s: this.getSeq(),
          t: this.getTime(),
          ct: p.IFRAME_LOAD,
          tg: s,
          n: { nn: "IFRAME_MUTATION_BATCH", c: [], a: {}, u: s, r: [], s: !1, nt: 0, t: "IFRAME_MUTATION_BATCH" }
        } : {
          seq: this.getSeq(),
          time: this.getTime(),
          type: "IFRAME_LOAD",
          target: s,
          node: { nodeName: "IFRAME_MUTATION_BATCH", tagName: "IFRAME_MUTATION_BATCH", attributes: {}, UUID: s, childNodes: [], cssRules: [], isSVG: !1, nodeType: 0 }
        };
        this.onChange(S);
      });
      c.documentElement && h.observe(c.documentElement, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      }), this.__iframeMutationObservers.set(e, h);
      const d = () => {
        this.debug.logSameOrigin("cleanup", { iframeUUID: s }), h.disconnect(), this.__iframeMutationObservers.delete(e), this.__iframeDocumentMap.delete(c), this.__iframeCleanupMap.delete(e), this.__iframeLastDocument.delete(e), this.__iframeSrcMap.delete(e);
        const S = this.__iframeUnloadListeners.get(e), _ = this.__iframeUnloadListenerWindow.get(e);
        S && _ && _.removeEventListener("unload", S), this.__iframeUnloadListeners.delete(e), this.__iframeUnloadListenerWindow.delete(e);
      };
      this.__iframeCleanupMap.set(e, d);
      const f = this.__iframeUnloadListeners.get(e), g = this.__iframeUnloadListenerWindow.get(e);
      f && g && g.removeEventListener("unload", f);
      const m = () => {
        this.debug.logSameOrigin("unload", { iframeUUID: s }), d(), e.isConnected && e.addEventListener("load", a, { once: !0 });
      };
      if (this.__iframeUnloadListeners.set(e, m), this.__iframeUnloadListenerWindow.set(e, l), l == null || l.addEventListener("unload", m, { once: !0 }), s && c.documentElement && !this.__iframeSnapshotSent.has(c))
        try {
          const S = i(c.documentElement);
          this.sendIframeLoadEvent(s, S), this.__iframeSnapshotSent.add(c);
        } catch (S) {
          this.debug.error("initial-snapshot", S);
        }
    };
    a();
  }
  /**
   * Handle iframe removal from DOM
   */
  handleIframeRemoval(e) {
    const t = this.__iframeCleanupMap.get(e);
    if (t)
      this.debug.logSameOrigin("removed-cleanup", { src: e.src }), t();
    else {
      this.debug.logSameOrigin("removed-manual", { src: e.src });
      const s = this.__iframeMutationObservers.get(e);
      s && (s.disconnect(), this.__iframeMutationObservers.delete(e));
      for (const [o, a] of this.__iframeMap)
        if (a === e) {
          this.__iframeMap.delete(o);
          break;
        }
      try {
        const o = e.contentDocument;
        o && this.__iframeDocumentMap.delete(o);
      } catch {
      }
      this.__iframeLastDocument.delete(e), this.__iframeSrcMap.delete(e);
      const i = this.__iframeUnloadListeners.get(e), n = this.__iframeUnloadListenerWindow.get(e);
      i && n && n.removeEventListener("unload", i), this.__iframeUnloadListeners.delete(e), this.__iframeUnloadListenerWindow.delete(e);
    }
  }
  // ============================================================================
  // Cleanup
  // ============================================================================
  /**
   * Destroy the IFrameManager and clean up all resources
   */
  destroy() {
    this.debug.log("destroy"), this.reportBridgeState(), this.clearBridgeWatchdog(), this.__iframeCleanupMap.forEach((e) => {
      e();
    });
    for (const [, e] of this.crossOriginMirrors)
      e.destroy();
    this.crossOriginMirrors.clear(), this.crossOriginIframeMap = /* @__PURE__ */ new Map(), this.__iframeMap.clear(), this.__iframeMutationObservers.clear(), this.__iframeDocumentMap.clear(), this.__iframeCleanupMap.clear(), this.__iframeLastDocument.clear(), this.__iframeUnloadListeners.clear(), this.__iframeUnloadListenerWindow.clear(), this.__iframeSrcMap.clear();
  }
  /**
   * Get debug information about tracked iframes
   */
  getDebugInfo() {
    return {
      config: {
        enableSameSite: this.config.enableSameSiteIframes,
        enableCrossSite: this.config.enableCrossSiteIframes,
        isCrossSiteChild: this.isCrossSiteChild
      },
      stats: {
        totalIframes: this.__iframeMap.size,
        totalObservers: this.__iframeMutationObservers.size,
        totalDocuments: this.__iframeDocumentMap.size
      },
      crossOrigin: {
        registeredIframes: this.crossOriginMirrors.size,
        mirrors: Array.from(this.crossOriginMirrors.entries()).map(
          ([, e]) => ({
            iframeUUID: e.getIframeUUID(),
            mappingCount: e.size()
          })
        )
      }
    };
  }
};
// ------------------------------------------------------------------------
// Bridge watchdog state
//
// A cross-origin iframe that is registered but never speaks is invisible from the parent's
// recording alone, and that is the single most common way this feature fails in the field:
// the child never loaded the SDK, or loaded it and bailed. One aggregated report per page load
// answers it. Nothing here retains a WindowProxy — every figure is derived from
// `crossOriginMirrors` at report time.
// ------------------------------------------------------------------------
/** ms to give a registered child before reporting. Measured from registration, not page load. */
r(T, "XO_REPORT_DELAY_MS", 1e4), /**
 * How long before the report to run the ping sweep. The answer has to be sitting in `xoPongs`
 * by the time `reportBridgeState` reads it, because that function also runs from `pagehide`,
 * where there is no next tick to await. So the ping is fired ahead of the report, not inside it.
 */
r(T, "XO_PING_LEAD_MS", 800), // ============================================================================
// Cross-Origin Event Transformation
// ============================================================================
/** Event types from child frames that should be discarded */
r(T, "DISCARDED_CHANGE_TYPES", /* @__PURE__ */ new Set([
  p.WINDOW_RESIZE,
  p.VIEWPORT_RESIZE_EXPERIMENTAL,
  p.DOM_READY,
  p.CLIENT_IP,
  p.USER_PROPERTY
])), r(T, "DISCARDED_FULL_TYPES", /* @__PURE__ */ new Set([
  "WINDOW_RESIZE",
  "VIEWPORT_RESIZE_EXPERIMENTAL",
  "DOM_READY",
  "CLIENT_IP",
  "USER_PROPERTY",
  "DEVICE_DATA"
]));
let j = T;
const Ae = `/**
 * Canvas Snapshot Worker
 *
 * Runs in a Web Worker context. Receives ImageBitmap frames, applies occlusion,
 * encodes to WebP, and deduplicates identical frames before sending back.
 *
 * Imported as a raw string via Vite's \`?raw\` suffix and loaded as a Blob URL
 * at runtime — this avoids code-splitting issues in the IIFE build.
 */

let lastFrameHash = 0;
let lastFrameSize = 0;
let isFirstFrame = true;
const transparentBlobMap = new Map();
let resolvedFormat = null;

// Reuse OffscreenCanvas + context across messages to avoid allocation/GC pressure.
// Resized only when frame dimensions change.
let reusableCanvas = null;
let reusableCtx = null;
let reusableW = 0;
let reusableH = 0;

function getReusableCanvas(width, height) {
	if (reusableCanvas && reusableW === width && reusableH === height) {
		return { offscreen: reusableCanvas, ctx: reusableCtx };
	}
	reusableCanvas = new OffscreenCanvas(width, height);
	reusableCtx = reusableCanvas.getContext('2d', { alpha: false, willReadFrequently: false });
	reusableW = width;
	reusableH = height;
	return { offscreen: reusableCanvas, ctx: reusableCtx };
}

async function getTransparentBlobFor(width, height, dataURLOptions) {
	const key = width + '-' + height;
	if (transparentBlobMap.has(key)) return transparentBlobMap.get(key);
	// Match the encode path: opaque white background (alpha:false context).
	// A "blank" first frame from Flutter (canvas not yet rendered) draws
	// nothing on top of white, so the encoded bytes equal this reference.
	const offscreen = new OffscreenCanvas(width, height);
	const refCtx = offscreen.getContext('2d', { alpha: false, willReadFrequently: false });
	refCtx.fillStyle = '#FFFFFF';
	refCtx.fillRect(0, 0, width, height);
	const blob = await offscreen.convertToBlob(dataURLOptions);
	const arrayBuffer = await blob.arrayBuffer();
	const bytes = new Uint8Array(arrayBuffer);
	transparentBlobMap.set(key, bytes);
	return bytes;
}

/** FNV-1a hash — fast, good distribution, no allocations. */
function fnv1a(bytes) {
	let h = 0x811c9dc5;
	for (let i = 0; i < bytes.byteLength; i++) {
		h ^= bytes[i];
		h = Math.imul(h, 0x01000193);
	}
	return h >>> 0;
}

function bytesAreEqual(a, b) {
	if (a.byteLength !== b.byteLength) return false;
	for (let i = 0; i < a.byteLength; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

/**
 * Lightweight luma-thresholded unsharp mask.
 *
 * Why this shape:
 *   - Screen content (UI, text) carries almost all its detail in luma, so
 *     sharpening Y only and copying chroma gives ~3x the throughput of a
 *     per-channel pass with no visible difference on text.
 *   - A 5-tap cross Laplacian on the green channel approximates luma well
 *     enough for an 8-bit pipeline (G is ~59% of Rec.601 luma).
 *   - Flat regions (low local variance) skip the kernel entirely — most
 *     UI pixels are flat, so this is where the speedup comes from.
 *
 * Buffers are module-scoped and reused across frames; only resized when
 * dimensions change. No per-frame allocation.
 */
const SHARPEN_AMOUNT = 0.6;        // 0 = off, 1 = strong. 0.6 is crisp without ringing.
const SHARPEN_THRESHOLD = 6;       // skip pixels whose local luma range < this (0..255)

let sharpenOut = null;             // Uint8ClampedArray destination
let sharpenW = 0;
let sharpenH = 0;

function ensureSharpenBuffers(width, height) {
	if (sharpenW === width && sharpenH === height && sharpenOut) return;
	const len = width * height * 4;
	sharpenOut = new Uint8ClampedArray(len);
	sharpenW = width;
	sharpenH = height;
}

function applySharpen(ctx, width, height) {
	if (width < 3 || height < 3) return;

	ensureSharpenBuffers(width, height);

	const img = ctx.getImageData(0, 0, width, height);
	const src = img.data;
	const src32 = new Uint32Array(src.buffer);
	const out = sharpenOut;

	// Bulk copy first — borders and skipped pixels are then already correct.
	out.set(src);

	const w = width;
	const h = height;
	const amount = SHARPEN_AMOUNT;
	const threshold = SHARPEN_THRESHOLD;

	for (let y = 1; y < h - 1; y++) {
		const rowMid = y * w;
		const rowUp = rowMid - w;
		const rowDn = rowMid + w;

		for (let x = 1; x < w - 1; x++) {
			const iE = rowMid + x;
			// Green-channel proxy for luma — byte 1 of each RGBA word.
			const gE = (src32[iE] >>> 8) & 0xff;
			const gB = (src32[rowUp + x] >>> 8) & 0xff;
			const gH = (src32[rowDn + x] >>> 8) & 0xff;
			const gD = (src32[iE - 1] >>> 8) & 0xff;
			const gF = (src32[iE + 1] >>> 8) & 0xff;

			let mn = gB; if (gD < mn) mn = gD; if (gE < mn) mn = gE; if (gF < mn) mn = gF; if (gH < mn) mn = gH;
			let mx = gB; if (gD > mx) mx = gD; if (gE > mx) mx = gE; if (gF > mx) mx = gF; if (gH > mx) mx = gH;

			// Flat region — leave pixel untouched (already copied via out.set).
			if (mx - mn < threshold) continue;

			// 5-tap unsharp on each color channel: out = e + amount*(e - mean(neighbors))
			const px = iE * 4;
			const upx = (rowUp + x) * 4;
			const dpx = (rowDn + x) * 4;
			const lpx = px - 4;
			const rpx = px + 4;

			const r = src[px];
			const g = src[px + 1];
			const b = src[px + 2];

			const rN = (src[upx] + src[dpx] + src[lpx] + src[rpx]) * 0.25;
			const gN = (src[upx + 1] + src[dpx + 1] + src[lpx + 1] + src[rpx + 1]) * 0.25;
			const bN = (src[upx + 2] + src[dpx + 2] + src[lpx + 2] + src[rpx + 2]) * 0.25;

			out[px]     = r + (r - rN) * amount;
			out[px + 1] = g + (g - gN) * amount;
			out[px + 2] = b + (b - bN) * amount;
		}
	}

	ctx.putImageData(new ImageData(out, w, h), 0, 0);
}

async function probeWebPSupport(requestedOptions) {
	const probe = new OffscreenCanvas(1, 1);
	probe.getContext('2d');
	const blob = await probe.convertToBlob({ type: 'image/webp', quality: requestedOptions.quality });
	if (blob.type === 'image/webp') {
		return requestedOptions;
	}
	return { type: 'image/jpeg', quality: requestedOptions.quality };
}

self.onmessage = async (e) => {
	const { bitmap, width, height, occlusionRects, dataURLOptions, captureTime, disableDedup=false, placeholder=false } = e.data;

	if (!('OffscreenCanvas' in globalThis)) {
		if (bitmap) bitmap.close();
		self.postMessage({ skipped: true, captureTime, placeholder });
		return;
	}

	if (!resolvedFormat) {
		resolvedFormat = await probeWebPSupport(dataURLOptions);
	}

	// Placeholder frame (white t=0 head): encode a solid-white frame in the SAME
	// resolvedFormat as every real frame, so the video's first frame can never
	// disagree on codec. HTMLCanvasElement.toBlob on the main thread would fall
	// back to PNG where WebP is unsupported while the worker falls back to JPEG —
	// that mismatch makes ffmpeg's concat demuxer (format probed from frame 0)
	// reject all real frames and collapse the video to a single frame. Routing the
	// placeholder through here guarantees format parity on every browser. No
	// dedup / first-frame-transparent checks — the placeholder must always emit.
	if (placeholder) {
		const { offscreen, ctx } = getReusableCanvas(width, height);
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, width, height);
		const blob = await offscreen.convertToBlob(resolvedFormat);
		const arrayBuffer = await blob.arrayBuffer();
		self.postMessage({ buffer: arrayBuffer, type: blob.type, width, height, captureTime, placeholder: true }, [arrayBuffer]);
		return;
	}

	const { offscreen, ctx } = getReusableCanvas(width, height);

	// Opaque background — context is alpha:false, so we must fill before drawImage.
	// Drawing onto an opaque RGB surface stops the encoder from spending bits on
	// alpha and avoids halos around anti-aliased glyphs.
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(0, 0, width, height);

	// Bitmap is pre-scaled on main thread via createImageBitmap — draw 1:1
	ctx.drawImage(bitmap, 0, 0);
	bitmap.close();

	// Occlusion: solid red fill (from Dart-provided rects)
	if (occlusionRects && occlusionRects.length > 0) {
		ctx.fillStyle = '#FF0000';
		for (const rect of occlusionRects) {
			ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
		}
	}

	applySharpen(ctx, width, height);

	const blob = await offscreen.convertToBlob(resolvedFormat);
	const type = blob.type;
	const arrayBuffer = await blob.arrayBuffer();
	const currentBytes = new Uint8Array(arrayBuffer);

	// First frame: skip if transparent (canvas not yet rendered by Flutter)
	if (isFirstFrame) {
		isFirstFrame = false;
		const transparentRef = await getTransparentBlobFor(width, height, resolvedFormat);
		if (bytesAreEqual(currentBytes, transparentRef)) {
			lastFrameSize = currentBytes.byteLength;
			lastFrameHash = fnv1a(currentBytes);
			self.postMessage({ skipped: true, captureTime });
			return;
		}
	}

	if (!disableDedup) {
		const currentHash = fnv1a(currentBytes);
		if (currentBytes.byteLength === lastFrameSize && currentHash === lastFrameHash) {
			self.postMessage({ skipped: true, captureTime });
			return;
		}
		lastFrameSize = currentBytes.byteLength;
		lastFrameHash = currentHash;
	}

	self.postMessage({ buffer: arrayBuffer, type, width, height, captureTime }, [arrayBuffer]);
};
`, V = "uxcam:0.1:session:batchIndex", Ue = 3e3, ke = 3, ie = "image/webp", ne = 0.4, Pe = {
  FullHD: { width: 1920, height: 1080 },
  HD: { width: 1280, height: 720 },
  MD: { width: 1024, height: 576 },
  SD: { width: 854, height: 480 }
}, G = Pe.HD;
function K(u) {
  if (!(u instanceof Element)) return null;
  const e = u.querySelector("canvas");
  if (e) return e;
  if (!u.shadowRoot) return null;
  const t = u.shadowRoot.querySelector("canvas");
  if (t) return t;
  for (const s of u.shadowRoot.children) {
    const i = K(s);
    if (i) return i;
  }
  return null;
}
function Fe(u) {
  var o, a, c;
  const e = window, t = u;
  if (((c = (a = (o = e._flutter) == null ? void 0 : o.loader) == null ? void 0 : a.config) == null ? void 0 : c.renderer) === "skwasm") return "skwasm";
  const s = window.devicePixelRatio || 1, i = u.width > u.clientWidth * (s * 0.9);
  return !!t._ckSurface || !!t.grContext || i, "canvaskit";
}
function ue() {
  const u = window, e = !!u._flutter || !!u.flutterConfiguration, t = document.querySelector("flutter-view"), s = document.querySelector("flt-glass-pane");
  let i = null;
  s && (i = K(s)), !i && t && (i = K(t));
  const o = !!i && (e || !!(s ?? t)), a = i ? Fe(i) : null;
  return { isFlutter: o, canvas: i, renderingMode: a };
}
class He {
  constructor(e) {
    r(this, "canvas");
    r(this, "options");
    r(this, "worker");
    r(this, "snapshotInProgress", !1);
    r(this, "rafId", 0);
    r(this, "lastSnapshotTime", 0);
    r(this, "timeBetweenSnapshots");
    r(this, "destroyed", !1);
    r(this, "preserveBufferChecked", !1);
    r(this, "visibilityHandler", null);
    /**
     * Native→frame scale, locked so it can only ever DECREASE during a session.
     *
     * Fitting every frame into CANVAS_TARGET_RESOLUTION independently makes the
     * scale jump whenever the canvas shrinks: on Android the soft keyboard cuts
     * the canvas height roughly in half, the 720px height cap loosens, and the same
     * 1082px-wide screen is suddenly written 1.8× larger (354→644px wide). The
     * video pipeline pads to the largest frame, so replay shows a "zoom" on every
     * text-field focus that never happened on the device. Keeping the scale at its
     * smallest value so far means a shorter canvas yields a shorter frame at the
     * same scale — padded below, exactly how the screen shrank. It only drops when
     * the canvas grows past the target box, so frames never exceed it.
     */
    r(this, "lockedScale", 1);
    // Batch upload state
    r(this, "frameBuffer", []);
    r(this, "batchIndex", 0);
    r(this, "batchFlushTimer", null);
    this.canvas = e.canvas, this.options = e, this.timeBetweenSnapshots = 1e3 / ke, this.restoreBatchIndex(), this.initWorker(), this.setupVisibilityHandler(), this.emitPlaceholderFrame(), this.startCaptureLoop(), this.batchFlushTimer = setInterval(() => this.flushBatch(), Ue);
  }
  restoreBatchIndex() {
    const e = sessionStorage.getItem(V);
    e && (this.batchIndex = parseInt(e, 10));
  }
  /**
   * White frame stamped t=0: the video's first frame matches the record stream's
   * zero, so the whole timeline (tt, gestures, screens, events) aligns with the
   * video by construction. Shows as a white "app booting" head until the first
   * real canvas frame.
   *
   * Encoded THROUGH THE WORKER (not HTMLCanvasElement.toBlob) so it lands in the
   * exact same image format the worker resolved for real frames. toBlob and the
   * worker's OffscreenCanvas.convertToBlob disagree on the WebP fallback (toBlob →
   * PNG, worker → JPEG where WebP is unsupported); a first frame in a different
   * codec than the rest makes ffmpeg's concat demuxer — which probes the format
   * from frame 0 only — reject every real frame and collapse the video to a single
   * frame. Going through the worker guarantees parity on every browser. The worker
   * response is routed to the buffer head (unshift) via the placeholder flag.
   */
  async emitPlaceholderFrame() {
    var e, t;
    try {
      if (this.destroyed) return;
      let s = 0, i = 0;
      if (this.canvas.width > 0 && this.canvas.height > 0) {
        const n = this.computeScaledDimensions();
        s = n.targetWidth, i = n.targetHeight;
      }
      if (s <= 0 || i <= 0) {
        const n = Math.max(1, ((e = document.documentElement) == null ? void 0 : e.clientWidth) || window.innerWidth || 1280), o = Math.max(1, ((t = document.documentElement) == null ? void 0 : t.clientHeight) || window.innerHeight || 720), a = Math.min(G.width / n, G.height / o, 1);
        s = Math.max(1, Math.round(n * a)), i = Math.max(1, Math.round(o * a));
      }
      this.worker.postMessage({
        placeholder: !0,
        width: s,
        height: i,
        captureTime: 0,
        dataURLOptions: { type: ie, quality: ne }
      });
    } catch {
    }
  }
  initWorker() {
    this.worker = this.createWorker(), this.worker.onmessage = (e) => this.onWorkerMessage(e);
  }
  createWorker() {
    const e = new Blob([Ae], { type: "application/javascript" }), t = URL.createObjectURL(e), s = new Worker(t);
    return URL.revokeObjectURL(t), s;
  }
  // --- RAF Capture Loop ---
  startCaptureLoop() {
    const e = (t) => {
      if (this.destroyed) return;
      if (this.lastSnapshotTime && t - this.lastSnapshotTime < this.timeBetweenSnapshots || this.snapshotInProgress) {
        this.rafId = requestAnimationFrame(e);
        return;
      }
      this.lastSnapshotTime = t, this.captureSnapshot(), this.rafId = requestAnimationFrame(e);
    };
    this.rafId = requestAnimationFrame(e);
  }
  // --- Canvas Staleness Detection ---
  /**
   * Flutter may replace its canvas element (route navigation, hot reload,
   * engine restart). Detect this by checking if the stored reference is
   * still connected to the DOM. If stale, re-detect and swap.
   * Returns false if no valid canvas could be found.
   */
  ensureCanvasIsLive() {
    if (this.canvas.isConnected) return !0;
    const e = ue();
    return e.canvas ? (this.canvas = e.canvas, !0) : !1;
  }
  // --- Snapshot Capture ---
  captureSnapshot() {
    this.snapshotInProgress || this.ensureCanvasIsLive() && (this.canvas.width === 0 || this.canvas.height === 0 || (this.snapshotInProgress = !0, this.captureSnapshotAsync().catch(() => {
    })));
  }
  async captureSnapshotAsync() {
    const e = this.getOcclusionRects(), { targetWidth: t, targetHeight: s, scale: i } = this.computeScaledDimensions(), n = this.scaleRects(e, i), o = this.options.getTime();
    try {
      this.applyWebGLHack();
      const a = await createImageBitmap(this.canvas, {
        resizeWidth: t,
        resizeHeight: s,
        resizeQuality: "high"
      });
      if (this.destroyed) {
        a.close(), this.snapshotInProgress = !1;
        return;
      }
      this.worker.postMessage(
        {
          bitmap: a,
          width: t,
          height: s,
          occlusionRects: n,
          dataURLOptions: { type: ie, quality: ne },
          captureTime: o
        },
        [a]
      );
    } catch {
      this.snapshotInProgress = !1;
    }
  }
  getOcclusionRects() {
    const e = window.__uxcam_getOcclusionRects;
    return (e ? e() : []).map((s) => ({
      x: s.left,
      y: s.top,
      width: Math.max(0, s.right - s.left),
      height: Math.max(0, s.bottom - s.top)
    }));
  }
  computeScaledDimensions() {
    const e = this.canvas.width, t = this.canvas.height, s = Math.min(
      G.width / e,
      G.height / t,
      1
    );
    s < this.lockedScale && (this.lockedScale = s);
    const i = this.lockedScale;
    return {
      targetWidth: Math.round(e * i),
      targetHeight: Math.round(t * i),
      scale: i
    };
  }
  /**
   * Scale factor from gesture logical (CSS) pixels to stored frame pixels.
   * Flutter delivers gesture coords in clientWidth/clientHeight space; frames
   * are captured at nativeW/H and downscaled to targetW/H — so multiplying
   * by this factor puts a click in the same coordinate space as the frame.
   * Returns 1 if the canvas has no layout yet.
   */
  getFrameScale() {
    const { targetWidth: e, targetHeight: t } = this.computeScaledDimensions(), s = this.canvas.clientWidth, i = this.canvas.clientHeight, n = s > 0 ? e / s : 1, o = i > 0 ? t / i : 1;
    return { sx: n, sy: o, frameWidth: e, frameHeight: t };
  }
  scaleRects(e, t) {
    return t >= 1 ? e : e.map((s) => ({
      x: s.x * t,
      y: s.y * t,
      width: s.width * t,
      height: s.height * t
    }));
  }
  /**
   * One-time check: verify that the early SDKClient getContext patch
   * succeeded in setting preserveDrawingBuffer=true. If it didn't
   * (SDK loaded after Flutter created the context), log a warning —
   * canvas captures will produce black frames on mobile.
   *
   * We intentionally do NOT call gl.clear(COLOR_BUFFER_BIT) here
   * because it wipes the visible canvas every capture frame, causing
   * user-visible flicker on the live site.
   */
  applyWebGLHack() {
    var t, s;
    if (this.preserveBufferChecked) return;
    this.preserveBufferChecked = !0;
    const e = this.canvas.getContext("webgl2") ?? this.canvas.getContext("webgl");
    ((s = (t = e == null ? void 0 : e.getContextAttributes) == null ? void 0 : t.call(e)) == null ? void 0 : s.preserveDrawingBuffer) === !1 && de(
      "Flutter web: preserveDrawingBuffer is false — recorded video may be black (affects mobile and desktop). Place the UXCam script in <head> or above flutter_bootstrap.js."
    );
  }
  // --- Visibility Handling ---
  setupVisibilityHandler() {
    const e = () => {
      document.hidden ? (this.flushBatch(), this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0)) : !this.rafId && !this.destroyed && this.startCaptureLoop();
    };
    document.addEventListener("visibilitychange", e), this.visibilityHandler = e;
  }
  removeVisibilityHandler() {
    this.visibilityHandler && (document.removeEventListener("visibilitychange", this.visibilityHandler), this.visibilityHandler = null);
  }
  // --- Worker Encoding ---
  onWorkerMessage(e) {
    if (e.data.placeholder || (this.snapshotInProgress = !1), e.data.skipped || !e.data.buffer) return;
    const { buffer: t, width: s, height: i, captureTime: n } = e.data;
    if (e.data.placeholder) {
      if (this.destroyed) return;
      this.frameBuffer.unshift({ data: t, w: s, h: i, t: n });
      return;
    }
    this.addFrameToBuffer({ data: t, w: s, h: i, t: n });
  }
  // --- Batch Buffer Management ---
  addFrameToBuffer(e) {
    this.frameBuffer.push(e);
  }
  flushBatch() {
    if (!this.frameBuffer.length) return;
    const e = this.frameBuffer, t = this.batchIndex;
    this.frameBuffer = [], this.batchIndex++, sessionStorage.setItem(V, this.batchIndex.toString());
    const s = t.toString().padStart(4, "0"), i = Y(e);
    this.options.transport.upload(s, i, this.options.sessionId);
  }
  /**
   * Build a lightweight end-marker batch: a single frame with sz=0 carrying
   * the current relative timestamp. Returns { batchKey, packed } for the
   * caller to send via sendBeacon before any heavier payloads.
   * Advances batchIndex so subsequent batches don't collide.
   */
  buildEndMarker() {
    const e = this.batchIndex.toString().padStart(4, "0");
    this.batchIndex++, sessionStorage.setItem(V, this.batchIndex.toString());
    const t = this.options.getTime(), s = { data: new ArrayBuffer(0), w: 0, h: 0, t };
    return { batchKey: e, packed: Y([s]) };
  }
  /** Synchronous best-effort flush for page unload — uses sendBeacon via transport. */
  unload() {
    if (this.destroyed = !0, this.batchFlushTimer && (clearInterval(this.batchFlushTimer), this.batchFlushTimer = null), this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), this.frameBuffer.length) {
      const e = this.batchIndex.toString().padStart(4, "0");
      this.batchIndex++, sessionStorage.setItem(V, this.batchIndex.toString());
      const t = Y(this.frameBuffer);
      this.frameBuffer = [], this.options.transport.upload(e, t, this.options.sessionId);
    }
  }
  destroy() {
    this.unload(), this.removeVisibilityHandler(), this.worker.terminate();
  }
}
const et = () => {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}, U = (u) => u || "", qe = /url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/g, H = (u, e) => u && u.replace(qe, (t, s, i, n) => {
  const o = (s ?? i ?? n ?? "").trim();
  if (!o || o.startsWith("data:") || o.startsWith("blob:") || o.startsWith("#") || /^[a-z][a-z0-9+.-]*:\/\//i.test(o))
    return t;
  try {
    return `url("${new URL(o, e).href}")`;
  } catch {
    return t;
  }
}), re = Object.freeze([]), We = /* @__PURE__ */ new Set(["src", "srcset", "poster"]), Be = 8e3, Ve = 20, Ge = 4 * 1024 * 1024, $e = 8 * 1024 * 1024, oe = 1024, Xe = "@uxc-css-ref:", Ye = (u, e = 0) => {
  let t = 3735928559 ^ e, s = 1103547991 ^ e;
  for (let i = 0; i < u.length; i++) {
    const n = u.charCodeAt(i);
    t = Math.imul(t ^ n, 2654435761), s = Math.imul(s ^ n, 1597334677);
  }
  return t = Math.imul(t ^ t >>> 16, 2246822507), t ^= Math.imul(s ^ s >>> 13, 3266489909), s = Math.imul(s ^ s >>> 16, 2246822507), s ^= Math.imul(t ^ t >>> 13, 3266489909), 4294967296 * (2097151 & s) + (t >>> 0);
}, ae = (u) => `${Ye(u).toString(36)}-${u.length.toString(36)}`, ze = /* @__PURE__ */ new Set([
  "transform",
  "opacity",
  "transition",
  "animation",
  "offset",
  "offset-distance",
  "offset-path",
  "offset-rotate"
]), je = 256 * 1024, ge = () => {
  let u = "Unknown OS";
  return navigator.userAgent.indexOf("Win") != -1 && (u = "Windows"), navigator.userAgent.indexOf("Mac") != -1 && (u = "Mac OS"), navigator.userAgent.indexOf("Linux") != -1 && (u = "Linux"), navigator.userAgent.indexOf("Android") != -1 && (u = "Android"), navigator.userAgent.indexOf("like Mac") != -1 && (u = "iOS"), u;
}, P = () => {
  const { search: u } = location, e = new URLSearchParams(u), t = {};
  for (const [s, i] of e.entries())
    s.startsWith("utm_") && (t[s] = i);
  return t;
}, fe = () => {
  const u = "Unknown Browser", e = navigator.userAgent;
  return e.indexOf("YaBrowser") !== -1 ? "Yandex" : e.indexOf("SamsungBrowser") !== -1 ? "Samsung" : e.indexOf("Edge") !== -1 || e.indexOf("Edg/") !== -1 ? "Edge" : e.indexOf("MSIE") !== -1 ? "IE" : e.indexOf("OPR") !== -1 ? "Opera" : e.indexOf("Chrome") !== -1 || e.indexOf("CriOS") !== -1 ? "Chrome" : e.indexOf("Firefox") !== -1 ? "Firefox" : e.indexOf("Safari") !== -1 ? "Safari" : u;
}, me = () => {
  const u = "Unknown Version", e = navigator.userAgent;
  if (e.indexOf("YaBrowser") !== -1) {
    const t = e.match(/YaBrowser\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("SamsungBrowser") !== -1) {
    const t = e.match(/SamsungBrowser\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("Edge") !== -1) {
    const t = e.match(/Edge\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("Edg/") !== -1) {
    const t = e.match(/Edg\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("MSIE") !== -1) {
    const t = e.match(/MSIE ([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("OPR") !== -1) {
    const t = e.match(/OPR\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("Chrome") !== -1) {
    const t = e.match(/Chrome\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("CriOS") !== -1) {
    const t = e.match(/CriOS\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("Firefox") !== -1) {
    const t = e.match(/Firefox\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("Safari") !== -1) {
    const t = e.match(/Version\/([0-9.]*)/);
    if (t)
      return t[1];
  }
  return u;
}, pe = () => {
  const u = "unknown", e = navigator.userAgent;
  if (e.indexOf("Windows") !== -1) {
    if (/(Windows 11.0)/.test(e)) return "11";
    if (/(Windows 10.0|Windows NT 10.0)/.test(e)) return "10";
    if (/(Windows 8.1|Windows NT 6.3)/.test(e)) return "8.1";
    if (/(Windows 8|Windows NT 6.2)/.test(e)) return "8";
    if (/(Windows 7|Windows NT 6.1)/.test(e)) return "7";
    if (/(Windows Vista|Windows NT 6.0)/.test(e)) return "Vista";
    if (/(Windows Server 2003)/.test(e)) return "Server 2003";
    if (/(Windows NT 5.1|Windows XP)/.test(e)) return "XP";
  }
  if (e.indexOf("iPhone") !== -1 || e.indexOf("iPad") !== -1) {
    const t = e.match(/OS ([0-9_]*) like Mac OS X/);
    if (t)
      return t[1].replace("_", ".");
  }
  if (e.indexOf("Mac") !== -1) {
    const t = e.match(/Mac OS X (10[\.\_\d]+)/);
    if (t)
      return t[1].replace("_", ".");
  }
  if (e.indexOf("Android") !== -1) {
    const t = e.match(/Android\s([0-9.]*)/);
    if (t)
      return t[1];
  }
  if (e.indexOf("like Mac") !== -1) {
    const t = e.match(/CPU OS ([0-9_]*) like Mac OS X/);
    if (t)
      return t[1].replace("_", ".");
  }
  if (e.indexOf("Linux") !== -1) {
    const t = e.match(/Linux\s([0-9.]*)/);
    if (t)
      return t[1] || "unknown";
  }
  return u;
}, Se = () => {
  const u = navigator.userAgent;
  return /(Tablet|IPad)/.test(u) ? (/iPad/.test(u), "Tablet") : /Mobile|IPhone/.test(u) ? (/iPhone/.test(u), "Phone") : Ke() ? window.screen.availWidth > 1024 ? "Tablet" : "Phone" : "Desktop";
}, Ke = () => "ontouchstart" in window || navigator.maxTouchPoints > 0, _e = () => {
  const u = navigator.userAgent;
  return /Android/.test(u) ? "unknown" : /(iPod|iPad|iPhone|Mac)/.test(u) ? "Apple" : "unknown";
}, Ee = () => (navigator.connection || {}).effectiveType || "unknown", ve = () => document.referrer || null, Je = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  } catch {
  }
  try {
    return navigator.language;
  } catch {
  }
  return "N/A";
}, tt = (u = {}) => {
  const e = ge(), t = pe(), s = fe(), i = me(), n = P(), o = ve();
  return {
    osType: e,
    osVersion: t,
    deviceType: Se(),
    deviceManufacturer: _e(),
    deviceClass: "unknown",
    deviceModel: "unknown",
    deviceLanguage: Je(),
    browser: s,
    browserVersion: i,
    displayWidth: window.screen.availWidth,
    displayHeight: window.screen.availHeight,
    displayDpi: window.devicePixelRatio,
    networkType: Ee(),
    sdkVersion: J,
    sdkVersionNumber: he,
    appVersion: "unknown",
    utm: n,
    referer: o,
    userAgent: navigator.userAgent,
    ...u
  };
}, st = () => {
  const u = ge(), e = pe(), t = fe(), s = me(), i = P(), n = ve();
  return {
    ot: u,
    ov: e,
    dt: Se(),
    dm: _e(),
    dw: window.screen.availWidth,
    dh: window.screen.availHeight,
    dd: window.devicePixelRatio,
    dc: "unknown",
    dmo: "unknown",
    br: t,
    dl: navigator.language,
    bv: s,
    nt: Ee(),
    sv: J,
    svn: he,
    av: "unknown",
    utm: i,
    ref: n,
    ua: navigator.userAgent
  };
}, L = class L {
  constructor({ onChange: e, startTime: t, onSeqUpdate: s, onUserActivity: i, onNewStartTime: n, seq: o, min: a, sendLog: c, sessionCounter: l, abort: h, appKey: d, recordIframes: f, recordIframeNavigation: g, recordCrossOriginIframes: m, debugIframes: S, captureMode: _, transport: w, sessionId: E, recordStylesheets: v, recordShadowDom: C }, O) {
    r(this, "sendLog");
    // [IFRAME SUPPORT] IFrameManager instance for handling iframe functionality
    r(this, "iframeManager");
    // [IFRAME SUPPORT] Track observed documents to prevent double attachment
    r(this, "observedDocuments", /* @__PURE__ */ new WeakMap());
    // Track windows we've already patched for CSS rule interception
    r(this, "cssPatchedWindows", /* @__PURE__ */ new WeakSet());
    // Track windows we've already patched for input property setter interception
    r(this, "inputPatchedWindows", /* @__PURE__ */ new WeakSet());
    // [IFRAME SUPPORT] Flag to indicate if running as cross-site child iframe
    r(this, "isCrossSiteChild", !1);
    /** Console output behind the SDK `debug` option — see `debugLog` in const.ts. */
    r(this, "debug", (...e) => {
      Ie(...e);
    });
    /**
     * [SHADOW DOM] Report a shadow-capture failure to `/logs`.
     *
     * Separate from `debug`, which is console-only and off unless the customer opted in, and therefore
     * useless for anything we need to see from production. Every shadow failure is silent by nature — the page keeps working and the session
     * keeps recording, a root and its subtree are simply absent from replay, which is
     * indistinguishable from a page that has no shadow DOM at all.
     *
     * `code` must be a fixed string: sendLog dedupes on the text before the first colon, so a code
     * interpolated with per-call detail would defeat the cap.
     */
    r(this, "logShadowError", (e, t) => {
      const s = t instanceof Error ? t.message : t === void 0 ? "" : String(t);
      this.sendLog(s ? `shadow/${e}: ${s}` : `shadow/${e}`);
    });
    r(this, "getSeq", (e = 1) => {
      const t = this.seq, s = t + e;
      return this.seq = s, this.onSeqUpdate(t), t;
    });
    r(this, "min");
    // [CSS RECORD] Feature flag; when false every CSS path behaves exactly as before.
    r(this, "recordStylesheets", !1);
    // [SHADOW DOM] Feature flag; when false every shadow path is skipped and behavior is unchanged.
    r(this, "recordShadowDom", !1);
    r(this, "getTime", () => this.startTime === null ? (this.startTime = (/* @__PURE__ */ new Date()).getTime(), this.onNewStartTime(this.startTime), 0) : (/* @__PURE__ */ new Date()).getTime() - this.startTime);
    /**
     * Returns cursor position relative to the document where the event occurred.
     * - Main document: x,y are viewport-relative; pageX,pageY are document-relative.
     * - Iframe: same, but relative to that iframe's document (no translation to top document).
     * Replay/consumer should use iframeContext (when present) and apply iframe rect at replay time:
     *   globalX = iframeRect.left + x, globalY = iframeRect.top + y
     */
    r(this, "getCursorPosition", (e) => ({
      x: e.clientX,
      y: e.clientY,
      pageX: e.pageX,
      pageY: e.pageY
    }));
    /**
     * Is this node still attached to its own document? (Its own — iframe nodes belong to the
     * iframe's document, not ours.)
     *
     * `isConnected` is that check: it is true exactly when the node's root is a document, so it
     * matches the old `documentElement.contains( node )` for light DOM and iframes, and — unlike
     * `contains` — is also correct inside a shadow tree, which a `contains` walk never enters.
     */
    r(this, "isNodeTrackedInDocument", (e) => !!e && e.isConnected);
    r(this, "onNewStartTime");
    r(this, "obfuscatedSelector", '[data-uxc="obfuscated"]');
    r(this, "createID", () => `${this.sessionCounter}_${crypto.randomUUID()}`);
    r(this, "__domMap", (() => {
      const e = /* @__PURE__ */ new Map();
      return e.set("#document", document), e.set("#doctype", document.doctype), e.set("#html", document.documentElement), e.set("#body", document.body), e.set("#head", document.head), e;
    })());
    r(this, "__reverseDomMap", (() => {
      const e = /* @__PURE__ */ new Map();
      return e.set(document, "#document"), e.set(document.doctype, "#doctype"), e.set(document.documentElement, "#html"), e.set(document.body, "#body"), e.set(document.head, "#head"), e;
    })());
    // WeakMap (not Map) so removed <style>/<link> sheets can be GC'd on SPA route churn.
    // Only .set()/.has() are used — never iterated, sized, or deleted — so this is a safe swap.
    r(this, "__styleSheetMap", /* @__PURE__ */ new WeakMap());
    // [CSS RECORD] Stable numeric id per constructable/adopted sheet (no ownerNode to key on)
    r(this, "__styleIdMirror", /* @__PURE__ */ new WeakMap());
    r(this, "__styleIdCounter", 0);
    // [CSS RECORD] Adopted sheets whose full rule set has already been serialized (send once)
    r(this, "__adoptedSheetsSerialized", /* @__PURE__ */ new WeakSet());
    // [CSS RECORD] Links whose deferred (on-load) inline has been scheduled — dedupe so we attach one
    // listener and emit at most one CSS_REPLACE per link.
    r(this, "__pendingLinkInline", /* @__PURE__ */ new WeakSet());
    // [CSS RECORD] Serialized <link> CSS bytes inlined so far this session (budget gate).
    r(this, "__cssLinkInlineBytesUsed", 0);
    // [CSS RECORD] Content keys of CSS payloads already shipped during THIS page load (dedup refs).
    // Deliberately not persisted across page loads — see the CSS_DEDUP_MIN_BYTES comment.
    r(this, "__cssShippedHashes", /* @__PURE__ */ new Set());
    // [CSS RECORD] Live <link>-inline fallback timers, cleared on teardown so none fires post-destroy.
    r(this, "__linkInlineTimers", /* @__PURE__ */ new Set());
    r(this, "__iframeMap", /* @__PURE__ */ new Map());
    r(this, "__iframeMutationObservers", /* @__PURE__ */ new Map());
    r(this, "__iframeDocumentMap", /* @__PURE__ */ new Map());
    r(this, "__iframeCleanupMap", /* @__PURE__ */ new Map());
    // Track the last observed document per iframe to handle remount/navigation
    r(this, "__iframeLastDocument", /* @__PURE__ */ new Map());
    // Track unload listeners so they can be replaced safely on remount
    r(this, "__iframeUnloadListeners", /* @__PURE__ */ new Map());
    // Track which window the unload listener was attached to
    r(this, "__iframeUnloadListenerWindow", /* @__PURE__ */ new Map());
    // Track iframe src to detect navigation changes (debug/diagnostics)
    r(this, "__iframeSrcMap", /* @__PURE__ */ new Map());
    // Track iframe documents that already emitted a snapshot
    r(this, "__iframeSnapshotSent", /* @__PURE__ */ new WeakSet());
    // [SHADOW DOM] Owns all shadow-root state: discovery, observers, listeners, teardown.
    // Constructed in the constructor body so every arrow-property callback it takes is initialized.
    r(this, "shadowManager");
    /**
     * [SHADOW DOM] Per-realm shadow patches (`attachShadow` + the `adoptedStyleSheets` setter) and
     * their uninstallers, keyed by the window they were installed in.
     *
     * Each same-origin iframe has its own `Element` and `ShadowRoot`, so the main window's patches do
     * not apply to it. These have to be installed the moment the iframe's document becomes reachable,
     * *before* it is serialized: a `mode: 'closed'` root created by the iframe's own scripts during
     * parse is invisible to `element.shadowRoot`, so if the patch is not yet in place when those
     * scripts run, that root can never be recovered by any later pass.
     */
    r(this, "shadowPatchedRealms", /* @__PURE__ */ new Map());
    /** Install this realm's shadow patches if they are not already in place. Safe to call repeatedly. */
    r(this, "ensureShadowRealmPatched", (e) => {
      if (!this.recordShadowDom || !e || this.shadowPatchedRealms.has(e))
        return;
      this.shadowPatchedRealms.set(e, () => {
      });
      let t = () => {
      }, s = () => {
      };
      this.shadowPatchedRealms.set(e, () => {
        t(), s();
      });
      try {
        t = this.shadowManager.patchAttachShadow(e), s = this.observeAdoptedStyleSheets(e, { includeDocument: !1 });
      } catch (i) {
        this.debug("shadow: realm patch failed", i), this.logShadowError("realm-patch-failed", i);
      }
    });
    r(this, "restoreShadowRealm", (e) => {
      if (!e)
        return;
      const t = this.shadowPatchedRealms.get(e);
      this.shadowPatchedRealms.delete(e), t == null || t();
    });
    /**
     * Set by teardown, and the reason teardown is actually final.
     *
     * A mutation batch can already be queued on an idle callback when destroy() runs. Processing it
     * afterwards would serialize live nodes and — because ShadowDomManager.destroy() swaps in a
     * fresh dedupe WeakSet — re-observe shadow roots that nothing will ever disconnect, pinning this
     * collector and both mirror Maps for the lifetime of the page.
     */
    r(this, "destroyed", !1);
    r(this, "registerElement", (e) => {
      if (this.__reverseDomMap.has(e))
        return;
      const t = this.createID().toString();
      this.__domMap.set(t, e), this.__reverseDomMap.set(e, t);
    });
    r(this, "unregisterElement", (e) => {
      const t = this.__reverseDomMap.get(e);
      t !== void 0 && (this.__reverseDomMap.delete(e), this.__domMap.delete(t), this.__adoptedSignatureByHost.delete(t));
    });
    r(this, "scheduleUnregisterElement", (e) => {
      setTimeout(() => {
        const t = Array.isArray(e) ? e : [e];
        for (const s of t)
          this.isNodeTrackedInDocument(s) || this.unregisterElement(s);
      });
    });
    r(this, "getUUIDByElement", (e, t) => {
      if (!e)
        return this.debug("getUUIDByElement called without an element", t), "";
      let s = this.__reverseDomMap.get(e);
      if (s === void 0) {
        this.debug("getUUIDByElement miss - registering element now", e.nodeName, e.id || void 0, t);
        const i = this.createID().toString();
        this.__domMap.set(i, e), this.__reverseDomMap.set(e, i), s = i;
      }
      return s;
    });
    /**
     * [SHADOW DOM] A node's parent for mirror/backfill purposes: if the immediate parent is a shadow
     * root, return its host (the node that actually lives in the mirror) instead of the root, which is
     * never registered. This keeps the backfill walk on registered nodes and prevents a ShadowRoot
     * from ever being passed to collectElement/getUUIDByElement. Flag-gated → identical when off.
     */
    r(this, "getEffectiveParent", (e) => {
      const t = e.parentNode;
      return this.recordShadowDom && k(t) ? t.host : t;
    });
    /**
     * [SHADOW DOM] Stamp the two shadow flags onto a freshly serialized node:
     * - isShadowHost/sh: the element owns a shadow root (its shadow children follow in childNodes)
     * - isShadow/sd: the node is a DIRECT child of a shadow root (replay routes it into host.shadowRoot)
     * Only direct children are marked; deeper descendants are rebuilt normally under their parent.
     *
     * `shadowRoot` is the already-resolved root of `element`, passed in so the snapshot does not
     * look it up twice per element (once here, once in collectShadowChildren).
     *
     * `isDirectShadowChild` overrides the live-DOM check. Serialization happens on an idle callback,
     * up to MUT_MAX_WAIT_TIME after the mutation, by which point a node that was added to a shadow
     * root and then detached again reads as having no shadow parent — and would be rebuilt in the
     * host's light DOM. The mutation record knows the truth (its target was the ShadowRoot), so
     * mutationWork passes it down rather than letting it be re-derived from a stale tree.
     */
    r(this, "applyShadowFlags", (e, t, s, i) => {
      (i ?? k(e.parentNode)) && (this.min ? t.sd = !0 : t.isShadow = !0), s && (this.min ? t.sh = !0 : t.isShadowHost = !0);
    });
    /**
     * [SHADOW DOM] Serialize a host's shadow children into the host node (nested, like the iframe
     * document is folded into its parent) and start observing the shadow root for live mutations.
     * Each shadow child self-marks isShadow via applyShadowFlags in collectElement.
     */
    r(this, "collectShadowChildren", (e, t, s = 0) => {
      if (s >= W) {
        this.logShadowError("serialize-depth-exceeded");
        return;
      }
      for (const i of t.childNodes) {
        const n = this.collectElement(i, { shadowDepth: s + 1 });
        this.min ? e.c.push(n) : e.childNodes.push(n);
      }
      this.shadowManager.trackSerializedRoot(t);
    });
    /**
     * [SHADOW DOM] Non-composed events (`composed: false`) never leave the shadow tree, so the
     * collector's document-level capture listeners never see them and they have to be attached to
     * each shadow root instead. Composed events (click, input, mousemove, mouseover, focus, touch*)
     * do escape and are handled by retargeting in resolveEventTarget.
     *
     * The non-composed set is `scroll`, `submit`, `change`, `mouseenter` and `mouseleave`. Verified
     * in Chrome with real user-generated events: hovering an element inside a shadow root produces a
     * `mouseenter` whose `composed` is false, and a `mouseleave` that reaches no document-level
     * listener at all — so MOUSE_OUT was never recorded inside a shadow tree, and MOUSE_OVER was only
     * ever recorded against the host rather than the element actually hovered. There is no
     * double-recording risk in adding them: a non-composed event targeting a shadow-internal node
     * never reaches the document, and the host's own enter/leave never reaches the shadow root.
     */
    r(this, "shadowChangeHandler", null);
    r(this, "shadowRootListeners", null);
    r(this, "getShadowRootListeners", () => (this.shadowRootListeners || (this.shadowRootListeners = [
      { type: "scroll", handler: this.tagShadowEvent(this.handleScroll) },
      { type: "submit", handler: this.tagShadowEvent(this.handleSubmit) },
      { type: "mouseenter", handler: this.tagShadowEvent(this.handleMouseOver) },
      { type: "mouseleave", handler: this.tagShadowEvent(this.handleMouseOut) }
    ], this.shadowChangeHandler ? this.shadowRootListeners.push({ type: "change", handler: this.tagShadowEvent(this.shadowChangeHandler) }) : this.logShadowError("change-listener-missing")), this.shadowRootListeners));
    /**
     * [SHADOW DOM] Stamp a shadow-root event with its owning iframe context before handling it.
     *
     * Same job as `tagEvent` in attachDocumentEventListeners, except the context is derived from the
     * root the listener is attached to rather than captured up front — one handler set then serves
     * every realm. Without this, a scroll or change inside a shadow root in a same-origin iframe was
     * emitted with no `iframeContext` and replayed against the top document.
     */
    r(this, "tagShadowEvent", (e) => (t) => {
      const s = this.getNodeIframeContext(t.currentTarget);
      s && (t.__iframeContext = s), e.call(this, t);
    });
    /**
     * [SHADOW DOM] Resolve the real target of an event. A capture-phase listener on the document
     * sees an event that originated inside a shadow tree retargeted to the shadow HOST;
     * composedPath()[0] is the actual innermost node.
     *
     * composedPath() allocates the full event path, so the cheap checks come first and the last of them
     * is a WeakSet membership test rather than `getShadowRootOf`. The saving is not on non-host targets
     * (there `getShadowRootOf` already short-circuits on a null `shadowRoot`) but on hosts: it used to
     * do a WeakMap lookup plus `Object.prototype.toString.call` per event, and in an app whose whole UI
     * sits under one custom element every mousemove target IS a host, which is exactly the case the
     * original "a shadow-host target is rare" assumption got backwards.
     */
    r(this, "getEventTarget", (e) => {
      const t = e.target;
      if (!this.recordShadowDom || !this.shadowManager.hasShadowRoots || !t || t.nodeType !== Node.ELEMENT_NODE || !this.shadowManager.isKnownHost(t))
        return t;
      const s = e.composedPath ? e.composedPath() : [], i = s.length ? s[0] : null;
      return i && i !== t && this.__reverseDomMap.has(i) ? i : t;
    });
    /**
     * Resolve an event to a tracked element plus its mirror UUID, or null when the element is not
     * on the wire. Callers must not fall back to getUUIDByElement, which mints a UUID for an
     * unknown element and would emit changes against an id replay has never seen.
     */
    r(this, "resolveEventTarget", (e) => {
      const t = this.getEventTarget(e);
      if (!t)
        return null;
      const s = this.__reverseDomMap.get(t);
      return s === void 0 ? null : { element: t, uuid: s };
    });
    /**
     * Tag a secondary observer's mutations with their document/shadow context and queue them into
     * the shared mutation pipeline. Used by every shadow root and every same-origin iframe, so it
     * is one bound handler rather than a closure allocated per observer.
     */
    r(this, "queueTaggedMutations", (e, t) => {
      if (this.destroyed)
        return;
      if (t === void 0) {
        this.queueMutations(e);
        return;
      }
      const s = this.tagMutationWithContext(e, t);
      for (const i of s)
        this.mutCollection.push(i);
      this.scheduleMutationWork();
    });
    /**
     * Stamp `seq`/`time` onto live MutationRecords and queue them. Shared by the main document
     * observer and by any secondary observer that needs no context tag.
     *
     * Deliberately not `onMutation`, which additionally carries the `!pageCollected → collectDOM()`
     * bootstrap that only the document observer should trigger.
     */
    r(this, "queueMutations", (e) => {
      for (const t of e) {
        const s = t;
        s.seq = this.getSeq(), s.time = this.getTime(), this.mutCollection.push(s);
      }
      this.scheduleMutationWork();
    });
    /**
     * [IFRAME SUPPORT] The iframe context a node belongs to, or undefined for the top document.
     * Derived from the node's owning document so callers don't have to thread it through.
     */
    r(this, "getNodeIframeContext", (e) => {
      const t = e == null ? void 0 : e.ownerDocument;
      return t ? this.__iframeDocumentMap.get(t) : void 0;
    });
    /** Emit an ADD_NODES change in whichever wire shape this session uses. */
    r(this, "emitAddNodes", (e, t, s, i = null, n = null) => {
      const o = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.ADD_NODES,
        p: e,
        c: t,
        pu: i,
        nu: n,
        ...s && { if: s }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "ADD_NODES",
        parentUUID: e,
        children: t,
        prevUUID: i,
        nextUUID: n,
        ...s && { iframeContext: s }
      };
      this.__onChange(o);
    });
    /**
     * `onChange` is a function that will be called with the changes
     */
    r(this, "__onChange");
    /**
     * `onSeqUpadte` is a function that will be called with the new seq
     */
    r(this, "onSeqUpdate");
    /**
     * `onUserActivity` is called when meaningful user interaction occurs
     */
    r(this, "onUserActivity");
    /**
     * `seq` is a number that will be incremented for each change
     */
    r(this, "seq", 0);
    /**
     * `startTime` is the time when the collection started
     */
    r(this, "startTime", null);
    /**
     * `sessionCounter` is used for debugging
     */
    r(this, "sessionCounter");
    r(this, "occlusionOptions");
    r(this, "appKey");
    r(this, "recordIframes");
    /** [IFRAME SUPPORT] See ICollect.recordIframeNavigation. */
    r(this, "recordIframeNavigation");
    r(this, "isCrossOriginIframeMode", !1);
    // [FLUTTER SUPPORT] FlutterCanvasManager instance
    r(this, "flutterCanvasManager", null);
    r(this, "captureMode", "dom");
    r(this, "transport");
    r(this, "sessionId");
    r(this, "pendingGestureContent", null);
    r(this, "destroy");
    r(this, "abort");
    /** Called by Flutter via window.uxc.setFlutterGestureData(x, y, data) to provide widget hit-test info for the next click. */
    r(this, "setFlutterGestureData", (e, t, s) => {
      this.pendingGestureContent = { x: e, y: t, data: s };
    });
    r(this, "init", () => {
      const e = this.iframeManager.initCrossSiteListener(), t = this.startInputObserver(), s = this.startMutationObserver(), i = this.hookInputPropertySetters(), n = this.startUrlObserver(), o = this.injectCSSObserver();
      let a = () => {
      };
      try {
        a = this.observeAdoptedStyleSheets();
      } catch (c) {
        this.logShadowError("init-patch-failed", c);
      }
      return this.initFlutterCanvasCapture(), this.idleMutWork && this.clearIdleCallback(this.idleMutWork), () => {
        this.stopMutationPipeline(), e(), s(), t(), i(), n(), o(), a();
        for (const c of this.__linkInlineTimers)
          clearTimeout(c);
        this.__linkInlineTimers.clear(), this.flutterRetryTimer && (clearTimeout(this.flutterRetryTimer), this.flutterRetryTimer = null), this.flutterCanvasManager && (this.flutterCanvasManager.destroy(), this.flutterCanvasManager = null), this.iframeManager.destroy();
      };
    });
    // [FLUTTER SUPPORT] Initialize Flutter canvas capture if applicable
    // Flutter bootstraps asynchronously, so the DOM (flutter-view, flt-glass-pane,
    // canvas) may not exist yet when the SDK runs. We retry detection up to a
    // maximum timeout to handle this race condition.
    r(this, "flutterRetryTimer", null);
    r(this, "initFlutterCanvasCapture", () => {
      this.captureMode === "flutter" && this.tryFlutterDetection(Date.now());
    });
    r(this, "tryFlutterDetection", (e) => {
      const t = ue();
      if (t.canvas) {
        this.debug("flutter: starting FlutterCanvasManager", {
          isFlutter: t.isFlutter,
          renderingMode: t.renderingMode,
          canvasSize: `${t.canvas.width}x${t.canvas.height}`
        }), this.flutterCanvasManager = new He({
          canvas: t.canvas,
          renderingMode: t.renderingMode,
          onChange: this.__onChange,
          getSeq: () => this.getSeq(),
          getTime: () => this.getTime(),
          getUUID: (i) => this.getUUIDByElement(i),
          min: this.min,
          transport: this.transport,
          sessionId: this.sessionId
        });
        return;
      }
      const s = Date.now() - e;
      s < L.FLUTTER_MAX_RETRY_MS ? (this.debug(`flutter: canvas not found yet, retrying in ${L.FLUTTER_RETRY_INTERVAL_MS}ms (${(s / 1e3).toFixed(1)}s elapsed)`), this.flutterRetryTimer = setTimeout(() => this.tryFlutterDetection(e), L.FLUTTER_RETRY_INTERVAL_MS)) : de("Flutter canvas not found after", (s / 1e3).toFixed(1), "s — giving up");
    });
    // [IFRAME SUPPORT] Cross-origin iframe mode initialization
    // This method is used when recordCrossOriginIframes is true
    // Collects DOM, user interactions and sends via postMessage (no websocket)
    r(this, "initCrossOriginIframeMode", () => {
      this.publishDiagPosted();
      const e = Date.now();
      let t = !1;
      const s = () => {
        t || (t = !0, this.sendLog(q(
          "child",
          `origin=${window.location.origin} mode=xo posted=${this.xoChildPosted} t=${Date.now() - e}`
        )));
      }, i = N(), n = i ? setTimeout(s, L.XO_CHILD_REPORT_DELAY_MS) : void 0;
      i && window.addEventListener("pagehide", s);
      const o = this.startInputObserver(), a = this.startMutationObserver(), c = this.hookInputPropertySetters(), l = this.injectCSSObserver();
      let h = () => {
      };
      try {
        h = this.observeAdoptedStyleSheets();
      } catch (d) {
        this.logShadowError("init-patch-failed", d);
      }
      return () => {
        clearTimeout(n), window.removeEventListener("pagehide", s), this.stopMutationPipeline(), a(), o(), c(), l(), h(), this.iframeManager.destroy();
      };
    });
    /**
     * Stop accepting and processing mutations, and run every per-iframe cleanup.
     *
     * Both must happen before the observers are disconnected, and neither happened before:
     * - A batch already queued on an idle callback would otherwise still run after
     *   ShadowDomManager.destroy(), re-observing live shadow roots into a dead collector.
     * - `__iframeCleanupMap` was never drained by anything. IFrameManager.destroy() drains its own
     *   separate map, not this one, so every recorded same-origin iframe kept its observers and
     *   listeners — and, before the realm patches moved into `shadowPatchedRealms`, a patched
     *   `Element.prototype.attachShadow` that retained this collector and both mirror Maps.
     */
    r(this, "stopMutationPipeline", () => {
      this.destroyed = !0, this.idleMutWork && (this.clearIdleCallback(this.idleMutWork), this.idleMutWork = null), this.mutWorkQueued = !1, this.mutCollection = [], this.batchSerialized = null;
      for (const e of [...this.__iframeCleanupMap.values()])
        try {
          e();
        } catch (t) {
          this.debug("iframe cleanup failed during teardown", t);
        }
      this.__iframeCleanupMap.clear();
      for (const e of [...this.shadowPatchedRealms.values()])
        try {
          e();
        } catch (t) {
          this.debug("shadow realm restore failed during teardown", t), this.logShadowError("realm-restore-failed", t);
        }
      this.shadowPatchedRealms.clear();
    });
    r(this, "scheduleOnChangeEvent", (e) => {
      setTimeout(() => {
        this.__onChange(e);
      });
    });
    // ==========================================================================
    // [CSS RECORD] Helpers — all only reached when this.recordStylesheets is true.
    // ==========================================================================
    /** Stable numeric id for a constructable/adopted sheet that has no ownerNode. */
    r(this, "getStyleId", (e) => {
      let t = this.__styleIdMirror.get(e);
      return t === void 0 && (t = ++this.__styleIdCounter, this.__styleIdMirror.set(e, t)), t;
    });
    /**
     * Identify a stylesheet on the wire: by ownerNode UUID for <style>/<link> sheets,
     * or by styleId for constructable/adopted sheets that have no DOM node.
     */
    r(this, "resolveSheetTarget", (e) => {
      const t = e.ownerNode;
      return t ? { targetStyle: this.getUUIDByElement(t) } : { targetStyle: "", styleId: this.getStyleId(e) };
    });
    /**
     * Flatten a CSSRuleList to absolute-url'd rule strings. @import rules are inlined
     * recursively when readable; a cross-origin @import is kept as-is (replay re-fetches).
     */
    r(this, "serializeCssRules", (e, t, s, i = 0) => {
      const n = [];
      for (let o = 0; o < e.length; o++) {
        const a = e[o];
        if (a.type === CSSRule.IMPORT_RULE)
          try {
            const c = a.styleSheet, l = s ?? /* @__PURE__ */ new Set();
            if (c && c.cssRules && i < Ve && !l.has(c)) {
              l.add(c), n.push(...this.serializeCssRules(c.cssRules, c.href || t, l, i + 1));
              continue;
            }
          } catch {
          }
        n.push(H(a.cssText || "", t));
      }
      return n;
    });
    /** Serialize a readable sheet to INodeCSSRule[] (targetStyle left blank — caller keys it).
     * A sheet whose content already shipped this session collapses to a single ref entry. */
    r(this, "serializeSheetRules", (e) => {
      let t;
      try {
        if (t = e.cssRules, !t)
          return this.sendLog("css/sheet-unreadable: no cssRules"), [];
      } catch (a) {
        return this.sendLog(`css/sheet-unreadable: ${a instanceof Error ? a.message : String(a)}`), [];
      }
      const s = e.href || document.baseURI, i = this.serializeCssRules(t, s), n = i.join(`
`), o = this.getCssRef(n);
      return o !== null ? [this.min ? { r: o, i: 0, t: "" } : { rule: o, index: 0, targetStyle: "" }] : (this.markCssShipped(n), i.map((a, c) => this.min ? { r: a, i: c, t: "" } : { rule: a, index: c, targetStyle: "" }));
    });
    // ---- [CSS RECORD] Per-page-load dedup refs ----------------------------------------
    /** Ref marker for a payload already shipped this page load, or null if new/too small. */
    r(this, "getCssRef", (e) => {
      if (!e || e.length < oe)
        return null;
      const t = ae(e);
      return this.__cssShippedHashes.has(t) ? Xe + t : null;
    });
    /** Record a payload as shipped so later identical payloads become refs. */
    r(this, "markCssShipped", (e) => {
      !e || e.length < oe || this.__cssShippedHashes.add(ae(e));
    });
    /** Body on first occurrence (recorded as shipped), `@uxc-css-ref:` marker on repeats. */
    r(this, "dedupCssText", (e) => {
      const t = this.getCssRef(e);
      return t !== null ? t : (this.markCssShipped(e), e);
    });
    /**
     * [CSS RECORD] Text to record for a <style> element: the authored text while it still
     * matches the parsed CSSOM, or the serialized CSSOM once the two have diverged (rules
     * inserted or edited through CSSOM APIs before this serialization — e.g. insertRule
     * calls made before the SDK started). Recording the CSSOM then keeps the replay
     * baseline aligned with the rule indices later CSS_* events carry; rrweb snapshots
     * <style> elements from the CSSOM for the same reason. Falls back to the authored text
     * whenever the comparison cannot run (oversized text, @import — dropped by replaceSync,
     * so it would read as a false divergence — or no constructable-sheet support).
     */
    r(this, "resolveStyleSnapshotText", (e, t, s) => {
      if (!t.trim() || t.length > je || t.indexOf("@import") !== -1)
        return t;
      try {
        const i = this.serializeCssRules(e.cssRules, s).join(`
`);
        if (!i.trim())
          return this.sendLog(`css/empty-cssom: ${t.length}B authored, 0 rules`), t;
        const n = new CSSStyleSheet();
        return n.replaceSync(t), this.serializeCssRules(n.cssRules, s).join(`
`) === i ? t : i;
      } catch {
        return t;
      }
    });
    /**
     * [CSS RECORD] Gate for inlining a <link> sheet: enforces the per-sheet cap and the
     * session-wide budget, consuming budget on success. Callers keep the href fallback
     * (and leave the sheet untracked) when this returns false.
     */
    r(this, "consumeLinkInlineBudget", (e) => e > Ge || this.__cssLinkInlineBytesUsed + e > $e ? !1 : (this.__cssLinkInlineBytesUsed += e, !0));
    /**
     * Serialize a <style>/<link> sheet directly into a snapshot node's cssRules[] / r[].
     * Returns false (capturing nothing) on cross-origin sheets so the caller keeps the href.
     * `enforceLinkBudget` (link sheets only) additionally bails out — keeping the href
     * fallback — when the sheet is over the per-sheet cap or the session inline budget.
     */
    r(this, "serializeSheetInto", (e, t, s, i = !1) => {
      let n;
      try {
        if (n = t.cssRules, !n)
          return !1;
      } catch {
        return !1;
      }
      const o = t.href || document.baseURI, a = this.serializeCssRules(n, o), c = a.join(`
`), l = this.getCssRef(c);
      return l !== null ? (this.min ? e.r.push({ r: l, i: 0, t: s }) : e.cssRules.push({ rule: l, index: 0, targetStyle: s }), !0) : i && !this.consumeLinkInlineBudget(c.length) ? !1 : (this.markCssShipped(c), a.forEach((h, d) => {
        this.min ? e.r.push({ r: h, i: d, t: s }) : e.cssRules.push({ rule: h, index: d, targetStyle: s });
      }), !0);
    });
    /** Index path of a rule from the top of its stylesheet (for @media/@supports nesting). */
    /**
     * Run CSS emit logic from inside a CSSOM Proxy trap without letting a throw escape into the
     * host app's own insertRule/deleteRule/replace/setProperty call. Any failure (e.g. a
     * SecurityError deep in serialization, or a __onChange failure) is swallowed so recording
     * degrades gracefully instead of breaking the page's styling engine.
     *
     * Pass `code` to report the failure to `/logs` as well. Without one the failure is invisible,
     * which is the right default for a CSSOM trap that fires thousands of times but not for a
     * once-per-root path where a swallowed throw means permanently missing data.
     */
    r(this, "safeEmit", (e, t) => {
      try {
        e();
      } catch (s) {
        t && this.logShadowError(t, s);
      }
    });
    r(this, "getRulePath", (e) => {
      var i;
      const t = [];
      let s = e;
      for (; s; ) {
        const n = s.parentRule;
        let o;
        try {
          o = n ? n.cssRules : (i = s.parentStyleSheet) == null ? void 0 : i.cssRules;
        } catch {
          break;
        }
        if (!o)
          break;
        t.unshift(Array.prototype.indexOf.call(o, s)), s = n;
      }
      return t;
    });
    /** Emit a CSS_INSERT_RULE. nestedPath is the path to the grouping rule (undefined = top level). */
    r(this, "emitInsertRule", (e, t, s, i) => {
      const { targetStyle: n, styleId: o } = this.resolveSheetTarget(e), a = H(t, e.href || document.baseURI), c = i ? [...i, s] : s, l = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.CSS_INSERT_RULE,
        r: a,
        i: c,
        tg: n,
        ...o !== void 0 ? { sid: o } : {}
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "CSS_INSERT_RULE",
        rule: a,
        index: c,
        targetStyle: n,
        ...o !== void 0 ? { styleId: o } : {}
      };
      this.__onChange(l);
    });
    /** Emit a CSS_DELETE_RULE. */
    r(this, "emitDeleteRule", (e, t, s) => {
      const { targetStyle: i, styleId: n } = this.resolveSheetTarget(e), o = s ? [...s, t] : t, a = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.CSS_DELETE_RULE,
        i: o,
        tg: i,
        ...n !== void 0 ? { sid: n } : {}
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "CSS_DELETE_RULE",
        index: o,
        targetStyle: i,
        ...n !== void 0 ? { styleId: n } : {}
      };
      this.__onChange(a);
    });
    /** Emit a CSS_REPLACE (whole-sheet swap via replace / replaceSync). Text identical to a
     * payload already shipped this session (e.g. replaceSync re-called with the same sheet)
     * goes out as a ref marker instead of the body. */
    r(this, "emitReplace", (e, t) => {
      const { targetStyle: s, styleId: i } = this.resolveSheetTarget(e), n = this.dedupCssText(H(t || "", e.href || document.baseURI)), o = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.CSS_REPLACE,
        tx: n,
        tg: s,
        ...i !== void 0 ? { sid: i } : {}
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "CSS_REPLACE",
        text: n,
        targetStyle: s,
        ...i !== void 0 ? { styleId: i } : {}
      };
      this.__onChange(o);
    });
    /**
     * [CSS RECORD] For a <link rel=stylesheet> whose sheet is not yet parsed at collect time, emit a
     * standalone CSS_REPLACE with the full serialized sheet once it loads — so replay inlines it (via
     * the <style> carrier keyed on the link's UUID) instead of re-fetching the href on another origin.
     * The already-serialized snapshot/ADD_NODES node is NOT back-filled (it has already shipped).
     * Cross-origin sheets throw on .cssRules and are left to their href fallback.
     */
    r(this, "inlineLinkStylesheetOnLoad", (e) => {
      if (!this.recordStylesheets || this.__pendingLinkInline.has(e))
        return;
      this.__pendingLinkInline.add(e);
      let t = !1;
      const s = () => {
        if (t)
          return;
        const n = e.sheet;
        if (!n)
          return;
        let o;
        try {
          if (o = n.cssRules, !o)
            return;
        } catch {
          t = !0;
          return;
        }
        t = !0, this.safeEmit(() => {
          const a = n.href || e.href || document.baseURI, c = this.serializeCssRules(o, a).join(`
`);
          !(this.getCssRef(c) !== null) && !this.consumeLinkInlineBudget(c.length) || (this.__styleSheetMap.set(n, !0), this.emitReplace(n, c));
        });
      };
      e.addEventListener("load", s, { once: !0 });
      const i = setTimeout(() => {
        this.__linkInlineTimers.delete(i), s();
      }, Be);
      this.__linkInlineTimers.add(i);
    });
    /**
     * [CSS RECORD] Skip streaming rule-level setProperty/removeProperty for the animation-driven
     * properties in CSS_IGNORED_DECLARATION_PROPERTIES (rrweb's ignoreCSSAttributes approach).
     * Called before getRulePath so the ignored common case also skips that walk. Only reached on
     * the recordStylesheets path.
     */
    r(this, "shouldRecordDeclaration", (e) => !ze.has(e));
    /** Emit a CSS_STYLE_DECLARATION (setProperty / removeProperty on a rule declaration). */
    r(this, "emitStyleDeclaration", (e, t) => {
      const s = e.parentStyleSheet;
      if (!s)
        return;
      const { targetStyle: i, styleId: n } = this.resolveSheetTarget(s), o = this.getRulePath(e), a = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.CSS_STYLE_DECLARATION,
        i: o,
        tg: i,
        ...n !== void 0 ? { sid: n } : {},
        ...t.set ? { set: { p: t.set.property, v: t.set.value, pr: t.set.priority } } : {},
        ...t.remove !== void 0 ? { rm: t.remove } : {}
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "CSS_STYLE_DECLARATION",
        index: o,
        targetStyle: i,
        ...n !== void 0 ? { styleId: n } : {},
        ...t.set ? { set: t.set } : {},
        ...t.remove !== void 0 ? { remove: t.remove } : {}
      };
      this.__onChange(a);
    });
    /**
     * [CSS RECORD] Last `styleIds` list emitted per host, so an unchanged re-capture ships nothing.
     * A shadow root can be reached by the setter patch, the pending-adopted flush and the snapshot
     * sweep; without this each one emits another ADOPTED_STYLE_SHEET carrying identical ids.
     */
    r(this, "__adoptedSignatureByHost", /* @__PURE__ */ new Map());
    /**
     * Snapshot the adoptedStyleSheets of a document/shadow host. Full rules are sent only the
     * first time a sheet is seen; subsequent calls carry just the ordered styleId list.
     *
     * An empty list is emitted too, so that clearing `adoptedStyleSheets` is representable — a host
     * that drops its sheets used to keep replaying the old ones forever.
     */
    r(this, "captureAdoptedStyleSheets", (e, t, s) => {
      const i = [], n = [];
      for (const l of e.adoptedStyleSheets ?? []) {
        this.__styleSheetMap.set(l, !0);
        const h = this.getStyleId(l);
        if (i.push(h), !this.__adoptedSheetsSerialized.has(l)) {
          const d = this.serializeSheetRules(l);
          d.length && (this.__adoptedSheetsSerialized.add(l), n.push(this.min ? { sid: h, r: d } : { styleId: h, rules: d }));
        }
      }
      const o = i.join(","), a = this.__adoptedSignatureByHost.get(t);
      if (!n.length && a === o || !i.length && a === void 0)
        return;
      this.__adoptedSignatureByHost.set(t, o);
      const c = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.ADOPTED_STYLE_SHEET,
        h: t,
        sids: i,
        sh: n,
        ...s && { if: s }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "ADOPTED_STYLE_SHEET",
        host: t,
        styleIds: i,
        sheets: n,
        ...s && { iframeContext: s }
      };
      this.__onChange(c);
    });
    /**
     * Patch adoptedStyleSheets setters so live re-assignments are captured. The document-level patch
     * is part of full CSS recording (recordStylesheets). The shadow-root patch is the ONLY way to
     * capture a component's encapsulated constructable sheet — e.g. Swiper assigns
     * shadowRoot.adoptedStyleSheets after attachShadow, with no <style>/URL fallback — so it installs
     * whenever shadow capture is on, independent of recordStylesheets.
     */
    r(this, "observeAdoptedStyleSheets", (e = window, { includeDocument: t = !0 } = {}) => {
      var a, c;
      if (!this.recordStylesheets && !this.recordShadowDom)
        return () => {
        };
      const s = e, i = e.document, n = this.recordStylesheets && t ? this.patchAdoptedStyleSheets((a = s.Document) == null ? void 0 : a.prototype, (l) => {
        l === i && this.captureAdoptedStyleSheets(l, "#document");
      }) : () => {
      }, o = this.recordShadowDom ? this.patchAdoptedStyleSheets((c = s.ShadowRoot) == null ? void 0 : c.prototype, (l) => {
        this.shadowManager.queueAdopted(l);
      }) : () => {
      };
      return () => {
        n(), o();
      };
    });
    /**
     * Patch the `adoptedStyleSheets` accessor on a prototype so live re-assignments are captured.
     * The original setter always runs first, so a rejected assignment records nothing. `onSet`
     * decides whether and how to attribute the assignment for that particular host.
     */
    r(this, "patchAdoptedStyleSheets", (e, t) => {
      if (!e)
        return () => {
        };
      const s = Object.getOwnPropertyDescriptor(e, "adoptedStyleSheets");
      if (!s || typeof s.get != "function" || typeof s.set != "function")
        return () => {
        };
      const i = s.get, n = s.set, o = this.safeEmit, a = function(c) {
        n.call(this, c), o(() => t(this), "adopted-setter-failed");
      };
      return Object.defineProperty(e, "adoptedStyleSheets", {
        configurable: !0,
        enumerable: s.enumerable,
        get() {
          return i.call(this);
        },
        set: a
      }), () => {
        const c = Object.getOwnPropertyDescriptor(e, "adoptedStyleSheets");
        (c == null ? void 0 : c.set) === a && Object.defineProperty(e, "adoptedStyleSheets", s);
      };
    });
    /**
     * [CSS RECORD] Whether CSSOM calls on this sheet should be recorded. Rewriting a <style>'s
     * text content replaces its CSSStyleSheet object, so identity tracking via __styleSheetMap
     * goes stale after runtime regeneration (e.g. Tailwind Play CDN). When recordStylesheets is
     * on, fall back to the sheet's ownerNode — rrweb resolves targets this way at call time —
     * and adopt a sheet owned by an already-tracked element so its later calls keep recording.
     * With the flag off this is exactly the legacy __styleSheetMap identity check.
     */
    r(this, "isSheetTracked", (e) => {
      if (this.__styleSheetMap.has(e))
        return !0;
      if (!this.recordStylesheets)
        return !1;
      const t = e.ownerNode;
      return t && this.__reverseDomMap.has(t) ? (this.__styleSheetMap.set(e, !0), !0) : !1;
    });
    r(this, "injectCSSObserver", (e = window) => {
      if (!e || this.cssPatchedWindows.has(e))
        return () => {
        };
      const { CSSStyleSheet: t } = e;
      if (!t)
        return () => {
        };
      const s = t.prototype.insertRule, i = t.prototype.deleteRule;
      t.prototype.insertRule = new Proxy(t.prototype.insertRule, {
        apply: (o, a, c) => {
          const [l, h] = c, d = o.apply(a, c);
          if (this.isSheetTracked(a))
            if (this.recordStylesheets)
              this.safeEmit(() => this.emitInsertRule(a, l, typeof d == "number" ? d : h ?? 0));
            else {
              const { targetStyle: f, styleId: g } = this.resolveSheetTarget(a), m = this.min ? {
                s: this.getSeq(),
                t: this.getTime(),
                ct: p.CSS_INSERT_RULE,
                r: U(l),
                i: h,
                tg: f,
                ...g !== void 0 ? { sid: g } : {}
              } : {
                seq: this.getSeq(),
                time: this.getTime(),
                type: "CSS_INSERT_RULE",
                rule: U(l),
                index: h,
                targetStyle: f,
                ...g !== void 0 ? { styleId: g } : {}
              };
              this.__onChange(m);
            }
          return d;
        }
      }), t.prototype.deleteRule = new Proxy(t.prototype.deleteRule, {
        apply: (o, a, c) => {
          const [l] = c, h = o.apply(a, c);
          if (this.isSheetTracked(a))
            if (this.recordStylesheets)
              this.safeEmit(() => this.emitDeleteRule(a, l));
            else {
              const { targetStyle: d, styleId: f } = this.resolveSheetTarget(a), g = this.min ? {
                s: this.getSeq(),
                t: this.getTime(),
                ct: p.CSS_DELETE_RULE,
                i: l,
                tg: d,
                ...f !== void 0 ? { sid: f } : {}
              } : {
                seq: this.getSeq(),
                time: this.getTime(),
                type: "CSS_DELETE_RULE",
                index: l,
                targetStyle: d,
                ...f !== void 0 ? { styleId: f } : {}
              };
              this.__onChange(g);
            }
          return h;
        }
      });
      const n = [];
      return (this.recordStylesheets || this.recordShadowDom) && this.installWholeSheetCssPatches(e, n), this.recordStylesheets && this.installExtraCssPatches(e, n), this.cssPatchedWindows.add(e), () => {
        t.prototype.insertRule = s, t.prototype.deleteRule = i;
        for (const o of n)
          o();
        this.cssPatchedWindows.delete(e);
      };
    });
    /**
     * Patch whole-sheet operations: replace / replaceSync on constructable stylesheets, plus the
     * deprecated addRule / removeRule aliases. Needed by both full CSS recording and shadow capture,
     * because an adopted constructable sheet is restyled through exactly these methods.
     */
    r(this, "installWholeSheetCssPatches", (e, t) => {
      const { CSSStyleSheet: s } = e, i = (c) => {
        const l = s.prototype, h = l[c];
        typeof h == "function" && (l[c] = new Proxy(h, {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          apply: (d, f, g) => {
            const m = d.apply(f, g);
            return this.isSheetTracked(f) && this.safeEmit(() => this.emitReplace(f, g[0])), m;
          }
        }), t.push(() => {
          l[c] = h;
        }));
      };
      i("replace"), i("replaceSync");
      const n = s.prototype, o = n.addRule;
      typeof o == "function" && (n.addRule = function(c, l, h = this.cssRules.length) {
        return n.insertRule.call(this, `${c} { ${l} }`, h), -1;
      }, t.push(() => {
        n.addRule = o;
      }));
      const a = n.removeRule;
      typeof a == "function" && (n.removeRule = function(c = 0) {
        n.deleteRule.call(this, c);
      }, t.push(() => {
        n.removeRule = a;
      }));
    });
    /**
     * [CSS RECORD] Patch nested grouping-rule insert/delete (rules inside @media/@supports) and
     * setProperty / removeProperty on rule declaration blocks. Only called when recordStylesheets is
     * true — shadow capture does not need this depth of CSSOM coverage.
     */
    r(this, "installExtraCssPatches", (e, t) => {
      const { CSSGroupingRule: s, CSSStyleDeclaration: i } = e;
      if (s) {
        const n = s.prototype.insertRule, o = s.prototype.deleteRule;
        s.prototype.insertRule = new Proxy(n, {
          apply: (a, c, l) => {
            const [h, d] = l, f = a.apply(c, l), g = c.parentStyleSheet;
            return g && this.isSheetTracked(g) && this.safeEmit(() => this.emitInsertRule(g, h, typeof f == "number" ? f : d ?? 0, this.getRulePath(c))), f;
          }
        }), s.prototype.deleteRule = new Proxy(o, {
          apply: (a, c, l) => {
            const [h] = l;
            let d = [];
            this.safeEmit(() => {
              d = this.getRulePath(c);
            });
            const f = a.apply(c, l), g = c.parentStyleSheet;
            return g && this.isSheetTracked(g) && this.safeEmit(() => this.emitDeleteRule(g, h, d)), f;
          }
        }), t.push(() => {
          s.prototype.insertRule = n, s.prototype.deleteRule = o;
        });
      }
      if (i) {
        const n = i.prototype.setProperty, o = i.prototype.removeProperty;
        i.prototype.setProperty = new Proxy(n, {
          apply: (a, c, l) => {
            const h = a.apply(c, l), d = c.parentRule;
            if (d && d.parentStyleSheet && this.isSheetTracked(d.parentStyleSheet)) {
              const [f, g, m] = l;
              this.shouldRecordDeclaration(f) && this.safeEmit(() => this.emitStyleDeclaration(d, { set: { property: f, value: g ?? "", priority: m ?? "" } }));
            }
            return h;
          }
        }), i.prototype.removeProperty = new Proxy(o, {
          apply: (a, c, l) => {
            const h = a.apply(c, l), d = c.parentRule;
            if (d && d.parentStyleSheet && this.isSheetTracked(d.parentStyleSheet)) {
              const f = l[0];
              this.shouldRecordDeclaration(f) && this.safeEmit(() => this.emitStyleDeclaration(d, { remove: f }));
            }
            return h;
          }
        }), t.push(() => {
          i.prototype.setProperty = n, i.prototype.removeProperty = o;
        });
      }
    });
    r(this, "collectDocument", (e) => {
      const t = [];
      for (const i of e.childNodes) {
        const n = this.collectElement(i);
        t.push(n);
      }
      return this.min ? {
        nn: "#document",
        nt: Node.DOCUMENT_NODE,
        t: "#document",
        a: {},
        u: "#document",
        c: t,
        r: [],
        s: !1
      } : {
        nodeName: "#document",
        tagName: "#document",
        attributes: {},
        UUID: "#document",
        nodeType: Node.DOCUMENT_NODE,
        cssRules: [],
        childNodes: t,
        isSVG: !1
      };
    });
    r(this, "collectTextNode", (e) => {
      const t = this.getUUIDByElement(e);
      let s = e.textContent || "";
      if (e.parentNode && e.parentNode.nodeName === "STYLE")
        if (this.recordStylesheets) {
          const n = e.parentNode.sheet, o = n && n.href || document.baseURI;
          let a = e.textContent || "";
          n && !e.previousSibling && !e.nextSibling && (a = this.resolveStyleSnapshotText(n, a, o)), s = this.dedupCssText(H(a, o));
        } else
          s = U(e.textContent || "");
      else e.parentNode && e.parentNode.nodeName === "SCRIPT" ? s = "/* script content */" : e.parentNode && this.isTextSensitive(e.parentNode) && (s = s.replace(/[\p{L}\p{N}]/gu, "*"));
      return this.min ? {
        nn: "#text",
        nt: Node.TEXT_NODE,
        t: "#text",
        a: {
          textContent: s
        },
        u: t,
        c: [],
        r: [],
        s: !1
      } : {
        nodeName: "#text",
        tagName: "#text",
        nodeType: Node.TEXT_NODE,
        cssRules: [],
        attributes: {
          textContent: s
        },
        UUID: t,
        childNodes: [],
        isSVG: !1
      };
    });
    r(this, "collectCommentNode", (e) => this.min ? {
      nn: "#comment",
      nt: Node.COMMENT_NODE,
      t: "#comment",
      a: {
        textContent: e.textContent || ""
      },
      u: this.getUUIDByElement(e),
      c: [],
      r: [],
      s: !1
    } : {
      nodeName: "#comment",
      tagName: "#comment",
      nodeType: Node.COMMENT_NODE,
      cssRules: [],
      attributes: {
        textContent: e.textContent || ""
      },
      UUID: this.getUUIDByElement(e),
      childNodes: [],
      isSVG: !1
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    r(this, "collectDocumentTypeNode", (e) => this.min ? {
      nn: "#doctype",
      nt: Node.DOCUMENT_TYPE_NODE,
      t: "#doctype",
      a: {},
      u: "#doctype",
      c: [],
      r: [],
      s: !1
    } : {
      nodeName: "#doctype",
      tagName: "#doctype",
      nodeType: Node.DOCUMENT_TYPE_NODE,
      cssRules: [],
      attributes: {},
      UUID: "#doctype",
      childNodes: [],
      isSVG: !1
    });
    r(this, "getSourceURL", (e) => (!e.match(/^http/) && !e.match(/^data:/) && (e.startsWith("/") ? e.startsWith("//") ? e = `${window.location.protocol}${e}` : e = `${window.location.origin}${e}` : e = `${window.location.origin}/${e}`), e));
    /**
     * [IFRAME SUPPORT] Whether this iframe still holds its placeholder `about:blank` while a `src`
     * navigation is on its way.
     *
     * The same initial-document window that made cross-origin frames look same-origin also makes a
     * *same-origin* frame look finished: `readyState` on the placeholder is already 'complete', so
     * the "capture it now" branch serialized an empty document as the iframe's whole content and —
     * having decided it was done — attached no `load` listener to try again. Nested iframes are hit
     * hardest: the inner app inserts them after it boots, which is exactly this window.
     *
     * `srcdoc` documents report `about:srcdoc`, and an iframe deliberately left on `about:blank` for
     * a script to write into has no other `src` to wait for — neither is pending, and both are still
     * captured immediately.
     */
    r(this, "hasUncommittedNavigation", (e, t) => {
      const s = e.getAttribute("src");
      return !s || s === "about:blank" ? !1 : t.URL === "about:blank" || t.URL === "";
    });
    /**
     * [IFRAME SUPPORT] Whether this iframe's `src` points at another origin.
     *
     * The `src` has the deciding vote, not `contentDocument`: until a freshly inserted iframe's
     * navigation commits it still exposes the initial `about:blank`, which IS same-origin with us
     * — readable, and already `readyState === 'complete'`. Trusting that recorded an empty
     * same-origin iframe (`so: true`, one blank document as its whole content) for what is really
     * a cross-origin frame, skipped `addCrossOriginIframe`, and left no `load` handler behind to
     * notice — so the postMessage bridge a child SDK sends on was never wired up and the frame
     * replayed blank for the rest of the session.
     *
     * Only http(s) srcs are origin-compared. `about:`/`data:`/`blob:`/`javascript:` and `srcdoc`
     * iframes keep the contentDocument-based classification, which is already right for them.
     *
     * Resolved against `iframe.ownerDocument.baseURI`, not the module-global `document` — for an
     * iframe nested in a same-origin child document, a relative `src` resolves against that
     * document, and it may carry its own <base href>.
     */
    /**
     * [IFRAME SUPPORT] Report, once per page load, that a cross-origin iframe was seen — and which
     * classification branch it took.
     *
     * The one signal that separates "this page has no cross-origin iframes" from "we saw one and got
     * it wrong", and the reason it exists: the misclassification this file now guards against left no
     * trace whatsoever in the recording, so every occurrence cost a manual forensic pass over an
     * exported session. `path=so-ready` on a cross-origin src is the fingerprint of that bug; keep
     * this line after the fix, because it is the alarm if it ever regresses.
     *
     * Names the origin only. An iframe `src` routinely carries credentials — see iframeOrigin.
     */
    r(this, "xoIframeSeenLogged", !1);
    /** How many payloads this collector has posted to a parent, when running as a cross-origin child. */
    r(this, "xoChildPosted", 0);
    /**
     * [IFRAME DIAGNOSTICS] Mirror the post count onto the diag beacon.
     *
     * The beacon lives in the SDK entry, which cannot import from here and which this chunk cannot
     * import from either — the entry must stay free of static imports. `window` is the seam. It is
     * how a `uxc.diagnose()` ping answered from a child frame can say "I have posted 0 payloads",
     * which is a different diagnosis from "I never started".
     */
    r(this, "publishDiagPosted", () => {
      try {
        const e = window.__uxcDiag;
        e && (e.postedFn = () => this.xoChildPosted);
      } catch {
      }
    });
    r(this, "logXoIframeSeen", (e, t) => {
      N() && (this.xoIframeSeenLogged || this.isCrossOriginIframeSrc(e) && (this.xoIframeSeenLogged = !0, this.sendLog(q(
        "xo-seen",
        `${$(e)} path=${t} sbx=${z(e)}`
      ))));
    });
    r(this, "isCrossOriginIframeSrc", (e) => {
      var s;
      const t = e.getAttribute("src");
      if (!t)
        return !1;
      try {
        const i = new URL(t, ((s = e.ownerDocument) == null ? void 0 : s.baseURI) ?? document.baseURI);
        return i.protocol !== "http:" && i.protocol !== "https:" ? !1 : i.origin !== window.location.origin;
      } catch {
        return !1;
      }
    });
    r(this, "collectElementNode", (e, t) => {
      const s = this.getUUIDByElement(e), i = this.min, n = i ? {
        nn: e.nodeName,
        nt: Node.ELEMENT_NODE,
        t: e.tagName,
        a: {},
        u: s,
        c: [],
        r: [],
        s: e instanceof SVGElement
      } : {
        nodeName: e.nodeName,
        tagName: e.tagName,
        nodeType: Node.ELEMENT_NODE,
        attributes: {},
        cssRules: [],
        UUID: s,
        childNodes: [],
        isSVG: e instanceof SVGElement
      }, o = this.isElementUXCamObfuscated(e);
      if (e.nodeName === "IMG" || e.nodeName === "VIDEO") {
        if (e.naturalWidth || e.videoWidth) {
          const h = e.nodeName === "IMG" ? e.naturalWidth : e.videoWidth, d = e.nodeName === "IMG" ? e.naturalHeight : e.videoHeight, f = e.nodeName === "IMG" ? R.IMG : R.VIDEO, g = i ? {
            type: f,
            w: h,
            h: d
          } : {
            type: f,
            width: h,
            height: d
          };
          i ? n.m = g : n.meta = g;
        } else if (e.nodeName === "IMG") {
          const h = () => {
            this.handleMetaLoad(e), e.removeEventListener("load", h);
          };
          e.addEventListener("load", h);
        } else if (e.nodeName === "VIDEO") {
          const h = () => {
            this.handleMetaLoad(e), e.removeEventListener("loadedmetadata", h);
          };
          e.addEventListener("loadedmetadata", h);
        }
      }
      if (e.nodeName === "IFRAME" && this.recordIframes) {
        const h = e;
        try {
          const d = h.contentDocument, f = !!d && !this.isCrossOriginIframeSrc(h);
          if (f && d && d.readyState !== "loading" && !this.hasUncommittedNavigation(h, d) && d.documentElement) {
            this.logXoIframeSeen(h, "so-ready"), this.__iframeMap.set(s, h), this.__iframeSrcMap.set(h, h.src || h.getAttribute("src") || ""), this.registerElement(d.documentElement);
            const m = this.getUUIDByElement(d.documentElement);
            if (!m)
              return n;
            this.__iframeDocumentMap.set(d, s), this.ensureShadowRealmPatched(d.defaultView);
            const S = this.collectElement(d.documentElement, t);
            this.__iframeSnapshotSent.add(d);
            const _ = i ? {
              type: R.IFRAME,
              s: h.src || "",
              so: !0,
              cd: m
            } : {
              type: R.IFRAME,
              src: h.src || "",
              isSameOrigin: !0,
              contentDocumentUUID: m
            };
            i ? (n.m = _, n.c.push(S)) : (n.meta = _, n.childNodes.push(S)), this.observeIframeDocument(h, d, s);
          } else if (f && d) {
            this.logXoIframeSeen(h, "so-pending");
            const m = i ? {
              type: R.IFRAME,
              s: h.src || "",
              so: !0
            } : {
              type: R.IFRAME,
              src: h.src || "",
              isSameOrigin: !0
            };
            i ? n.m = m : n.meta = m, this.__iframeMap.set(s, h), this.__iframeSrcMap.set(h, h.src || h.getAttribute("src") || "");
            const S = () => {
              try {
                const _ = h.contentDocument;
                if (_ && _.documentElement) {
                  if (this.registerElement(_.documentElement), !this.getUUIDByElement(_.documentElement))
                    return;
                  this.__iframeDocumentMap.set(_, s), this.__iframeSrcMap.set(h, h.src || h.getAttribute("src") || ""), this.ensureShadowRealmPatched(_.defaultView);
                  const E = this.collectElement(
                    _.documentElement
                  );
                  this.__iframeSnapshotSent.add(_);
                  const v = this.min ? {
                    s: this.getSeq(),
                    t: this.getTime(),
                    ct: p.IFRAME_LOAD,
                    tg: s || "",
                    n: E
                  } : {
                    seq: this.getSeq(),
                    time: this.getTime(),
                    type: "IFRAME_LOAD",
                    target: s || "",
                    node: E
                  };
                  this.__onChange(v), this.observeIframeDocument(h, _, s);
                } else
                  this.iframeManager.addCrossOriginIframe(h, s), h.addEventListener("load", () => {
                    this.iframeManager.refreshCrossOriginIframeMapping(h);
                  });
              } catch {
                this.iframeManager.addCrossOriginIframe(h, s), h.addEventListener("load", () => {
                  this.iframeManager.refreshCrossOriginIframeMapping(h);
                });
              }
            };
            h.addEventListener("load", S, { once: !0 });
          } else {
            this.logXoIframeSeen(h, "xo");
            const m = i ? {
              type: R.IFRAME,
              s: h.src || "",
              so: !1
            } : {
              type: R.IFRAME,
              src: h.src || "",
              isSameOrigin: !1
            };
            i ? n.m = m : n.meta = m, this.iframeManager.addCrossOriginIframe(h, s), h.addEventListener("load", () => {
              this.iframeManager.refreshCrossOriginIframeMapping(h);
            });
          }
        } catch {
          this.logXoIframeSeen(h, "threw");
          const f = i ? {
            type: R.IFRAME,
            s: h.src || "",
            so: !1
          } : {
            type: R.IFRAME,
            src: h.src || "",
            isSameOrigin: !1
          };
          i ? n.m = f : n.meta = f, this.iframeManager.addCrossOriginIframe(h, s), h.addEventListener("load", () => {
            this.iframeManager.refreshCrossOriginIframeMapping(h);
          });
        }
      }
      if (e.scrollTop || e.scrollLeft) {
        const h = i ? {
          s: this.getSeq(),
          t: this.getTime(),
          ct: p.SCROLL,
          tg: s,
          st: e.scrollTop,
          sl: e.scrollLeft
        } : {
          seq: this.getSeq(),
          time: this.getTime(),
          type: "SCROLL",
          target: s,
          scrollTop: e.scrollTop,
          scrollLeft: e.scrollLeft
        };
        this.__onChange(h);
      }
      if (e instanceof SVGElement && (i ? n.a.xmlns = "http://www.w3.org/2000/svg" : n.attributes.xmlns = "http://www.w3.org/2000/svg"), e.nodeName !== "SCRIPT") {
        const h = o && (e.nodeName === "IMG" || e.nodeName === "VIDEO");
        for (let d = 0; d < e.attributes.length; d++) {
          const f = e.attributes[d];
          let g = f.value;
          if (!h) {
            if (e.nodeName === "INPUT" && f.name === "value" && this.isSensitiveInput(e) && (e.type === "number" ? g = "000000" : g = "******"), f.name === "src" || f.name === "href") {
              if (g.startsWith("data:image") && g.length > 1e3)
                continue;
              f.name === "src" ? g = e.src : f.name === "href" ? g = e.href : g = this.getSourceURL(g);
            }
            if (f.name === "srcset" && g)
              try {
                g = g.split(",").map((S) => {
                  const [_, w] = S.trim().split(" ");
                  return `${this.getSourceURL(_)} ${w}`;
                }).join(", ");
              } catch {
              }
            i ? n.a[f.name] = g : n.attributes[f.name] = g;
          }
        }
      }
      if (e instanceof HTMLInputElement) {
        const h = e;
        if (h.type === "checkbox" || h.type === "radio") {
          const d = e.hasAttribute("checked");
          h.checked !== d && (i ? n.a.checked = h.checked ? "" : void 0 : h.checked ? n.attributes.checked = "" : delete n.attributes.checked);
        } else {
          const d = e.getAttribute("value");
          if (h.value !== (d || "")) {
            let f = h.value;
            this.isSensitiveInput(e) && (f = h.type === "number" ? "000000" : "******"), i ? n.a.value = f : n.attributes.value = f;
          }
        }
      } else if (e instanceof HTMLTextAreaElement) {
        const h = e.textContent || "";
        if (e.value !== h) {
          let d = e.value;
          this.isSensitiveInput(e) && (d = "******"), i ? n.a.value = d : n.attributes.value = d;
        }
      } else if (e instanceof HTMLSelectElement)
        e.value && (i ? n.a.value = e.value : n.attributes.value = e.value);
      else if (e instanceof HTMLOptionElement) {
        const h = e.hasAttribute("selected");
        e.selected !== h && (e.selected ? i ? n.a.selected = "" : n.attributes.selected = "" : i ? delete n.a.selected : delete n.attributes.selected);
      }
      const a = Array.from(e.childNodes), c = (t == null ? void 0 : t.backTrackedNodes) && t.backTrackedNodes.get(e);
      if (c)
        for (const h of c) {
          const {
            prevSibling: d,
            node: f
          } = h, g = d ? a.indexOf(d) + 1 : a.length;
          a.splice(g, 0, f);
        }
      const l = t != null && t.isDirectShadowChild ? { backTrackedNodes: t.backTrackedNodes, shadowDepth: t.shadowDepth } : t;
      for (const h of a) {
        const d = this.collectElement(h, l);
        i ? n.c.push(d) : n.childNodes.push(d);
      }
      if (e.nodeName === "STYLE") {
        const h = e.sheet;
        if (h) {
          if (this.__styleSheetMap.set(h, !0), this.recordStylesheets)
            !!(e.textContent && e.textContent.trim()) || this.serializeSheetInto(n, h, s);
          else if (!e.innerText.trim() && h.cssRules.length) {
            const d = h.cssRules.length;
            for (let f = 0; f < d; f++) {
              const g = h.cssRules[f];
              i ? n.r.push({
                r: U(g.cssText || ""),
                i: f,
                t: s
              }) : n.cssRules.push({
                rule: U(g.cssText || ""),
                index: f,
                targetStyle: s
              });
            }
          }
        }
      } else if (this.recordStylesheets && e.nodeName === "LINK" && e.rel === "stylesheet") {
        const h = e;
        h.sheet ? this.serializeSheetInto(n, h.sheet, s, !0) && this.__styleSheetMap.set(h.sheet, !0) : this.inlineLinkStylesheetOnLoad(h);
      }
      return n;
    });
    r(this, "collectElement", (e, t) => {
      var n;
      const { nodeType: s } = e;
      this.registerElement(e), (n = this.batchSerialized) == null || n.add(e);
      let i;
      switch (s) {
        case Node.DOCUMENT_NODE: {
          i = this.collectDocument(e);
          break;
        }
        case Node.ELEMENT_NODE: {
          i = this.collectElementNode(e, t);
          break;
        }
        case Node.TEXT_NODE: {
          i = this.collectTextNode(e);
          break;
        }
        case Node.COMMENT_NODE: {
          i = this.collectCommentNode(e);
          break;
        }
        case Node.DOCUMENT_TYPE_NODE: {
          i = this.collectDocumentTypeNode(e);
          break;
        }
        default:
          throw new Error("Unknown node type");
      }
      if (this.recordShadowDom) {
        const o = s === Node.ELEMENT_NODE ? this.shadowManager.getShadowRootOf(e) : null;
        this.applyShadowFlags(e, i, o, t == null ? void 0 : t.isDirectShadowChild), o && this.collectShadowChildren(i, o, (t == null ? void 0 : t.shadowDepth) ?? 0);
      }
      return i;
    });
    r(this, "backtrackMutations", (e) => {
      const t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      for (const i of e)
        if (i.type === "childList")
          for (const n of i.removedNodes) {
            s.add(n);
            const o = t.get(i.target) || [];
            o.push({
              parent: i.target,
              node: n,
              prevSibling: i.previousSibling,
              nextSibling: i.nextSibling
            }), t.set(i.target, o);
          }
      return {
        removedNodesMap: t,
        removedInBatch: s
      };
    });
    /**
     * Is this element occluded by itself or by any ancestor, crossing shadow boundaries?
     *
     * The single occlusion predicate every masking decision should use. `collectElementNode` and
     * `isTextSensitive` already reasoned this way; the value-masking checks below did not, so an
     * input inside a `data-uxc="obfuscated"` container had its snapshot value masked and then leaked
     * every keystroke through INPUT_CHANGE. Marking a shadow host has to mask everything the
     * component renders, which is why the walk has to step out through hosts.
     */
    r(this, "isElementUXCamObfuscated", (e) => !!te(e, this.obfuscatedSelector, this.onOcclusionDepthExceeded));
    /**
     * The occlusion walk gave up before reaching the top of the host chain, so a masking ancestor above
     * the cap was never consulted and this element records unmasked. Privacy-relevant, hence a log
     * rather than the silent null the walk used to return.
     */
    r(this, "onOcclusionDepthExceeded", () => {
      this.logShadowError("occlusion-depth-exceeded");
    });
    r(this, "isAttributeChangeSensitive", (e) => {
      if (e.type !== "attributes")
        return !1;
      const { attributeName: t, target: s } = e;
      return t !== "value" || s.nodeName !== "INPUT" ? !1 : !!(this.isElementUXCamObfuscated(s) || s.matches(this.sensitiveTypeSelector) || s.matches(this.sensitiveNameSelector) || s.matches(this.sensitiveAutoCompleteSelector));
    });
    r(this, "sensitiveTypeSelector", [
      "password",
      "email",
      "tel",
      "hidden",
      "number",
      "hidden"
    ].map((e) => `[type="${e}"]`).join(", "));
    r(this, "sensitiveNameSelector", [
      "password",
      "cc-",
      "email",
      "phone"
    ].map((e) => `[name*="${e}"]`).join(", "));
    r(this, "sensitiveAutoCompleteSelector", [
      "cc-",
      "address",
      "phone",
      "email",
      "password"
    ].map((e) => `[autocomplete*="${e}"]`).join(", "));
    r(this, "isSensitiveInput", (e) => !!(e.matches(this.sensitiveTypeSelector) || this.isElementUXCamObfuscated(e) || e.matches(this.sensitiveNameSelector) || e.matches(this.sensitiveAutoCompleteSelector)));
    r(this, "isTextSensitive", (e) => {
      var s, i;
      if (e.parentNode && (((s = e.parentNode) == null ? void 0 : s.nodeName) === "STYLE" || ((i = e.parentNode) == null ? void 0 : i.nodeName) === "SCRIPT"))
        return !1;
      const t = k(e) ? e.host : e.nodeType === Node.ELEMENT_NODE ? e : null;
      return t ? !!te(t, this.obfuscatedSelector, this.onOcclusionDepthExceeded) : !1;
    });
    r(this, "mutCollection", []);
    /**
     * [SHADOW DOM] Nodes already serialized during the current mutationWork pass.
     *
     * A shadow root's own observer and the main document observer feed the same queue, so one batch
     * can contain both "host was inserted" and "children were added to that host's shadow root".
     * Serializing the host folds those children in (collectShadowChildren), which would make the
     * later shadow record emit them a second time under the same UUIDs. This set is what lets the
     * add path recognize that case; rrweb solves the same problem with its ProcessedNodeManager.
     *
     * Non-null only for the duration of mutationWork, so snapshot and iframe-load serialization
     * never accumulate into it.
     */
    r(this, "batchSerialized", null);
    r(this, "MUT_MAX_WAIT_TIME", 3e3);
    r(this, "scheduledTimestamp", null);
    r(this, "clearIdleCallback", (e) => {
      typeof window.cancelIdleCallback == "function" ? window.cancelIdleCallback(e) : clearTimeout(e);
    });
    r(this, "idleMutWork", null);
    r(this, "mutWorkQueued", !1);
    /**
     * Debounce the mutation pass onto an idle callback.
     *
     * [SHADOW DOM] Every shadow root needs its own MutationObserver (subtree does not pierce a
     * shadow boundary), and they all deliver in the same microtask checkpoint. Without the
     * microtask guard a page with hundreds of web components would run one
     * cancelIdleCallback + requestIdleCallback cycle per observer per frame. Collapsing the burst
     * is equivalent: previously the last call in the burst won, now there is only one call.
     */
    r(this, "scheduleMutationWork", () => {
      this.destroyed || this.mutWorkQueued || (this.mutWorkQueued = !0, queueMicrotask(() => {
        this.mutWorkQueued = !1, this.scheduleMutationWorkNow();
      }));
    });
    r(this, "scheduleMutationWorkNow", () => {
      this.scheduledTimestamp || (this.scheduledTimestamp = (/* @__PURE__ */ new Date()).getTime()), this.idleMutWork && (this.clearIdleCallback(this.idleMutWork), this.idleMutWork = null);
      const t = (/* @__PURE__ */ new Date()).getTime() - this.scheduledTimestamp, s = () => {
        this.mutationWork(), this.scheduledTimestamp = null;
      };
      if (t > this.MUT_MAX_WAIT_TIME) {
        s();
        return;
      }
      this.idleMutWork = L.saveIdleCallback(s);
    });
    // private __internalFlagged = false
    r(this, "backFillElement", (e, t, s) => {
      if (!this.isNodeTrackedInDocument(e) || this.__reverseDomMap.has(e))
        return;
      const i = this.getEffectiveParent(e), n = e.previousSibling;
      if (!this.__reverseDomMap.has(i)) {
        let h = i;
        for (; h && !this.__reverseDomMap.has(h); )
          h = this.getEffectiveParent(h);
        if (h) {
          const d = this.collectElement(h), f = this.getUUIDByElement(this.getEffectiveParent(h), "backfill parent recv"), g = h.previousSibling;
          if (g && !this.__reverseDomMap.has(g)) {
            const _ = [];
            let w = g;
            for (; w && !this.__reverseDomMap.has(w); )
              _.push(w), w = w.previousSibling;
            for (const E of _.reverse()) {
              const v = this.collectElement(E), C = E.previousSibling, O = C ? this.getUUIDByElement(C, "backfill parent sibl recv") : null, D = this.min ? {
                s: t,
                t: s,
                ct: p.ADD_NODES,
                p: f,
                c: [
                  v
                ],
                pu: O,
                nu: null
              } : {
                seq: t,
                time: s,
                type: "ADD_NODES",
                parentUUID: f,
                children: [
                  v
                ],
                prevUUID: O,
                nextUUID: null
              };
              this.__onChange(D);
            }
          }
          const m = g ? this.getUUIDByElement(g, "backfill parent prev sibl") : null, S = this.min ? {
            s: t,
            t: s,
            ct: p.ADD_NODES,
            p: f,
            c: [
              d
            ],
            pu: m,
            nu: null
          } : {
            seq: t,
            time: s,
            type: "ADD_NODES",
            parentUUID: f,
            children: [
              d
            ],
            prevUUID: m,
            nextUUID: null
          };
          this.__onChange(S);
        }
      }
      this.__reverseDomMap.has(i) || this.sendLog("Backfilling nodes with missing parent");
      const o = this.getUUIDByElement(i, "backfill parent");
      if (n && !this.__reverseDomMap.has(n)) {
        let h = n;
        const d = [];
        for (; h && !this.__reverseDomMap.has(h); )
          d.push(h), h = h.previousSibling;
        for (const f of d.reverse()) {
          const g = this.collectElement(f), m = f.previousSibling, S = m ? this.getUUIDByElement(m, "backfill sibl recv") : null, _ = this.min ? {
            s: t,
            t: s,
            ct: p.ADD_NODES,
            p: o,
            c: [
              g
            ],
            pu: S,
            nu: null
          } : {
            seq: t,
            time: s,
            type: "ADD_NODES",
            parentUUID: o,
            children: [
              g
            ],
            prevUUID: S,
            nextUUID: null
          };
          this.__onChange(_);
        }
      }
      n && !this.__reverseDomMap.has(n) && this.sendLog("Backfilling nodes with missing siblings");
      const a = this.collectElement(e), c = n ? this.getUUIDByElement(n, "backfill sibl") : null, l = this.min ? {
        s: t,
        t: s,
        ct: p.ADD_NODES,
        p: o,
        c: [
          a
        ],
        pu: c,
        nu: null
      } : {
        seq: t,
        time: s,
        type: "ADD_NODES",
        parentUUID: o,
        children: [
          a
        ],
        prevUUID: c,
        nextUUID: null
      };
      this.__onChange(l);
    });
    /**
     * Helper to tag mutations with iframe context
     * This ensures the replay player knows which document to query for the target element
     */
    r(this, "tagMutationWithContext", (e, t) => e.map((s) => {
      const i = s.type === "childList", n = {
        type: s.type,
        target: s.target,
        addedNodes: i ? Array.from(s.addedNodes) : re,
        removedNodes: i ? Array.from(s.removedNodes) : re,
        previousSibling: s.previousSibling,
        nextSibling: s.nextSibling,
        attributeName: s.attributeName,
        attributeNamespace: s.attributeNamespace,
        oldValue: s.oldValue,
        seq: Number(this.getSeq()),
        time: Number(this.getTime())
      };
      return t !== void 0 && (n.__iframeContext = t), n;
    }));
    r(this, "mutationWork", () => {
      var e;
      if (!this.destroyed)
        try {
          const t = Array.from(this.mutCollection);
          this.mutCollection = [], this.batchSerialized = /* @__PURE__ */ new Set();
          const {
            removedNodesMap: s,
            removedInBatch: i
          } = this.backtrackMutations(t);
          for (const n of t) {
            const { type: o, seq: a, time: c } = n;
            let l = n.target;
            const h = this.recordShadowDom && k(l);
            if (h && (l = l.host), this.recordShadowDom && l.nodeType === Node.ELEMENT_NODE) {
              const d = l;
              this.safeEmit(() => this.shadowManager.discoverRootOn(d), "discover-failed");
            }
            switch (o) {
              case "attributes": {
                if (!this.__reverseDomMap.has(l)) {
                  if (!this.isNodeTrackedInDocument(l))
                    continue;
                  try {
                    this.backFillElement(l, a, c);
                  } catch (_) {
                    this.sendLog(`Backfill: ${_.message || "Backfilling failed"}`), this.abort();
                    return;
                  }
                  !this.__reverseDomMap.has(l) && !sessionStorage.getItem("uxc:debug:addedNodesToUnknownElement") && (this.sendLog("Nodes were added to an previously unknown element"), sessionStorage.setItem("uxc:debug:addedNodesToUnknownElement", "1"));
                }
                const { attributeName: d } = n, f = l.getAttribute(d);
                let g = f;
                if (typeof f == "string" && (d === "src" || d === "href")) {
                  if (f.startsWith("data:image") && f.length > 1e3)
                    continue;
                  g = g.replace(/^\//, `${window.location.origin}/`);
                }
                if (d === "transform")
                  continue;
                if (this.isAttributeChangeSensitive(n) && (g = "******"), We.has(d) && this.isElementUXCamObfuscated(l)) {
                  if (d === "src") {
                    const _ = () => {
                      this.handleMetaLoad(l), l.removeEventListener("load", _);
                    };
                    l.addEventListener("load", _);
                  }
                  continue;
                }
                if (!this.__reverseDomMap.has(l)) {
                  this.debug("element not collected", l, t);
                  continue;
                }
                if (d === "src" && l.nodeName === "SCRIPT")
                  continue;
                const m = n.__iframeContext, S = this.min ? {
                  s: a,
                  t: c,
                  ct: p.ATTR_CHANGE,
                  tg: this.getUUIDByElement(l, n),
                  a: d,
                  v: g,
                  ...m && { if: m }
                } : {
                  seq: a,
                  time: c,
                  type: "ATTR_CHANGE",
                  target: this.getUUIDByElement(l, n),
                  attr: d,
                  value: g,
                  ...m && { iframeContext: m }
                };
                this.__onChange(S);
                break;
              }
              case "childList": {
                const {
                  addedNodes: d,
                  removedNodes: f
                } = n, g = Array.from(d), m = Array.from(f);
                if (g.length) {
                  if (!this.__reverseDomMap.has(l)) {
                    if (!this.isNodeTrackedInDocument(l))
                      continue;
                    try {
                      this.backFillElement(l, a, c);
                    } catch (y) {
                      this.sendLog(`Backfill: ${y.message || "Backfilling failed"}`), this.abort();
                      return;
                    }
                    !this.__reverseDomMap.has(l) && !sessionStorage.getItem("uxc:debug:addedNodesToUnknownElement") && (this.sendLog("Nodes were added to an previously unknown element"), sessionStorage.setItem("uxc:debug:addedNodesToUnknownElement", "1"));
                  }
                  this.registerElement(l);
                  let S = n.previousSibling, _ = n.nextSibling;
                  const w = this.getUUIDByElement(l, n), E = [];
                  for (const y of g) {
                    if (this.recordShadowDom && ((e = this.batchSerialized) != null && e.has(y)) && !i.has(y) && this.getEffectiveParent(y) === l)
                      continue;
                    const b = this.collectElement(y, {
                      backTrackedNodes: s,
                      isDirectShadowChild: h
                    });
                    if (E.push(b), y.nodeName === "STYLE") {
                      const I = y.sheet;
                      I && this.__styleSheetMap.set(I, !0);
                    } else if (y.nodeName === "LINK") {
                      const I = y;
                      if (I.rel === "stylesheet")
                        if (I.sheet)
                          try {
                            I.sheet.cssRules, this.__styleSheetMap.set(I.sheet, !0);
                          } catch {
                          }
                        else
                          this.inlineLinkStylesheetOnLoad(I);
                    }
                  }
                  for (; S && !this.__reverseDomMap.has(S); )
                    E.unshift(this.collectElement(S, {
                      backTrackedNodes: s,
                      isDirectShadowChild: h
                    })), S = S.previousSibling;
                  for (; _ && !this.__reverseDomMap.has(_); )
                    E.push(this.collectElement(_, {
                      backTrackedNodes: s,
                      isDirectShadowChild: h
                    })), _ = _.nextSibling;
                  const v = S ? this.getUUIDByElement(S, n) : null, C = _ ? this.getUUIDByElement(_, n) : null, O = n.__iframeContext, D = this.min ? {
                    s: a,
                    t: c,
                    ct: p.ADD_NODES,
                    p: w,
                    c: E,
                    pu: v,
                    nu: C,
                    ...O && { if: O }
                  } : {
                    seq: a,
                    time: c,
                    type: "ADD_NODES",
                    parentUUID: w,
                    children: E,
                    prevUUID: v,
                    nextUUID: C,
                    ...O && { iframeContext: O }
                  };
                  E.length && this.__onChange(D);
                  for (const y of g)
                    if (y.nodeName === "IFRAME" && this.recordIframes) {
                      const b = y, I = this.getUUIDByElement(b);
                      let A = !1;
                      const F = () => {
                        if (!A) {
                          A = !0;
                          try {
                            const M = b.contentDocument;
                            if (M && M.documentElement && !this.isCrossOriginIframeSrc(b)) {
                              this.registerElement(M.documentElement), this.__iframeMap.set(I, b), this.__iframeDocumentMap.set(M, I), this.__iframeSrcMap.set(b, b.src || b.getAttribute("src") || ""), this.ensureShadowRealmPatched(M.defaultView);
                              const Z = this.collectElement(
                                M.documentElement
                              );
                              this.__iframeSnapshotSent.add(M);
                              const ye = this.min ? {
                                s: this.getSeq(),
                                t: this.getTime(),
                                ct: p.IFRAME_LOAD,
                                tg: I || "",
                                n: Z
                              } : {
                                seq: this.getSeq(),
                                time: this.getTime(),
                                type: "IFRAME_LOAD",
                                target: I || "",
                                node: Z
                              };
                              this.__onChange(ye), this.observeIframeDocument(b, M, I);
                            } else
                              this.logXoIframeSeen(b, "xo"), this.iframeManager.addCrossOriginIframe(b, I), b.addEventListener("load", () => {
                                this.iframeManager.refreshCrossOriginIframeMapping(b);
                              });
                          } catch {
                            this.logXoIframeSeen(b, "threw"), this.iframeManager.addCrossOriginIframe(b, I), b.addEventListener("load", () => {
                              this.iframeManager.refreshCrossOriginIframeMapping(b);
                            });
                          }
                        }
                      };
                      (() => {
                        if (this.isCrossOriginIframeSrc(b))
                          return !0;
                        const M = b.contentDocument;
                        return !!M && M.readyState !== "loading" && !this.hasUncommittedNavigation(b, M);
                      })() ? F() : b.addEventListener("load", F, { once: !0 });
                    }
                }
                if (m.length) {
                  const S = [];
                  for (const v of m) {
                    const C = this.__reverseDomMap.get(v);
                    C !== void 0 && S.push(C);
                  }
                  const _ = n.__iframeContext, w = this.min ? {
                    s: a,
                    t: c,
                    ct: p.REMOVE_NODES,
                    u: S,
                    ..._ && { if: _ }
                  } : {
                    seq: a,
                    time: c,
                    type: "REMOVE_NODES",
                    UUIDs: S,
                    ..._ && { iframeContext: _ }
                  }, E = [];
                  for (const v of m) {
                    if (v.nodeName === "IFRAME") {
                      const y = v;
                      this.iframeManager.removeCrossOriginIframe(y);
                      const b = this.__iframeCleanupMap.get(y);
                      if (b)
                        b();
                      else {
                        const I = this.__iframeMutationObservers.get(y);
                        I && (I.disconnect(), this.__iframeMutationObservers.delete(y));
                        const A = this.__reverseDomMap.get(y);
                        A && this.__iframeMap.delete(A);
                        try {
                          const M = y.contentDocument;
                          M && this.__iframeDocumentMap.delete(M);
                        } catch {
                        }
                        this.__iframeLastDocument.delete(y), this.__iframeSrcMap.delete(y);
                        const F = this.__iframeUnloadListeners.get(y), X = this.__iframeUnloadListenerWindow.get(y);
                        F && X && X.removeEventListener("unload", F), this.__iframeUnloadListeners.delete(y), this.__iframeUnloadListenerWindow.delete(y);
                      }
                    }
                    const O = (v.ownerDocument ?? document).createNodeIterator(v, NodeFilter.SHOW_ALL);
                    let D;
                    for (; D = O.nextNode(); )
                      E.push(D), this.recordShadowDom && D.nodeType === Node.ELEMENT_NODE && this.shadowManager.cleanupRemovedHost(D, E);
                  }
                  this.__onChange(w), this.scheduleUnregisterElement(E);
                }
                break;
              }
              case "characterData": {
                if (!this.isNodeTrackedInDocument(l))
                  continue;
                if (!this.__reverseDomMap.has(l))
                  try {
                    this.backFillElement(l, a, c);
                  } catch (S) {
                    this.sendLog(`Backfill: ${S.message || "Backfilling failed"}`), this.abort();
                    return;
                  }
                const { textContent: d } = n.target;
                let f = d || "";
                if (n.target.parentNode && n.target.parentNode.nodeName === "STYLE")
                  if (this.recordStylesheets) {
                    const S = n.target.parentNode.sheet, _ = S && S.href || document.baseURI;
                    f = H(f, _);
                  } else
                    f = U(f);
                else this.isTextSensitive(n.target.parentNode) && (f = f.replace(/[\p{L}\p{N}]/gu, "*"));
                const g = n.__iframeContext, m = this.min ? {
                  s: a,
                  t: c,
                  ct: p.CHARACTER_DATA_CHANGE,
                  tg: this.getUUIDByElement(l, n),
                  tc: f,
                  ...g && { if: g }
                } : {
                  seq: a,
                  time: c,
                  type: "CHARACTER_DATA_CHANGE",
                  target: this.getUUIDByElement(l, n),
                  textContent: f,
                  ...g && { iframeContext: g }
                };
                this.__onChange(m);
                break;
              }
            }
          }
        } catch (t) {
          throw this.debug("mutation processing failed", t), t;
        } finally {
          this.batchSerialized = null, this.recordShadowDom && this.safeEmit(this.shadowManager.flushPendingAdopted, "adopted-flush-failed");
        }
    });
    r(this, "onMutation", (e) => {
      this.destroyed || (this.pageCollected || (this.debug("collecting page from mutation"), this.collectDOM()), this.queueMutations(e));
    });
    r(this, "handleScroll", (e) => {
      var l, h;
      const t = e.__iframeContext, s = this.getEventTarget(e), i = s && s.nodeType === Node.DOCUMENT_NODE;
      if (t && i) {
        const d = s, f = ((l = d.documentElement) == null ? void 0 : l.scrollTop) ?? 0, g = ((h = d.documentElement) == null ? void 0 : h.scrollLeft) ?? 0, m = this.min ? {
          s: this.getSeq(),
          t: this.getTime(),
          ct: p.SCROLL,
          tg: "#html",
          st: f,
          sl: g,
          if: t
        } : {
          seq: this.getSeq(),
          time: this.getTime(),
          type: "SCROLL",
          target: "#html",
          scrollTop: f,
          scrollLeft: g,
          iframeContext: t
        };
        this.__onChange(m);
        return;
      }
      if (!this.__reverseDomMap.has(s) && s !== document && s !== document.documentElement)
        return;
      let n, o, a;
      s === document || s === document.documentElement ? (n = document.documentElement.scrollTop, o = document.documentElement.scrollLeft, a = this.getUUIDByElement(document.documentElement)) : (n = s.scrollTop, o = s.scrollLeft, a = this.getUUIDByElement(s));
      const c = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.SCROLL,
        tg: a,
        st: n,
        sl: o,
        ...t && { if: t }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "SCROLL",
        target: a,
        scrollTop: n,
        scrollLeft: o,
        ...t && { iframeContext: t }
      };
      this.__onChange(c);
    });
    r(this, "handleFocus", (e) => {
      const t = this.resolveEventTarget(e);
      if (!t)
        return;
      const s = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.FOCUS,
        tg: t.uuid
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "FOCUS",
        target: t.uuid
      };
      this.__onChange(s);
    });
    r(this, "handleMouseMove", (e) => {
      const t = this.resolveEventTarget(e);
      if (!t)
        return;
      const s = this.getCursorPosition(e), i = e.__iframeContext, n = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.MOUSE_MOVE,
        tg: t.uuid,
        x: s.x,
        y: s.y,
        ...i && { if: i }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "MOUSE_MOVE",
        target: t.uuid,
        x: s.x,
        y: s.y,
        ...i && { iframeContext: i }
      };
      this.__onChange(n);
    });
    r(this, "handleMetaLoad", (e) => {
      const t = e.nodeName === "IMG" ? e.naturalWidth : e.videoWidth, s = e.nodeName === "IMG" ? e.naturalHeight : e.videoHeight, i = e.nodeName === "IMG" ? R.IMG : R.VIDEO, n = this.min ? {
        type: i,
        w: t,
        h: s
      } : {
        type: i,
        width: t,
        height: s
      };
      try {
        const o = this.min ? {
          s: this.getSeq(),
          t: this.getTime(),
          ct: p.MEDIA_INFO,
          tg: this.getUUIDByElement(e),
          m: n
        } : {
          seq: this.getSeq(),
          time: this.getTime(),
          type: "MEDIA_INFO",
          target: this.getUUIDByElement(e),
          meta: n
        };
        this.__onChange(o);
      } catch {
        return;
      }
    });
    /**
     * `:nth-child(n)` for an element that shares its signature with a sibling, or '' when it is
     * already unique at this level.
     *
     * One indexed pass over the live HTMLCollection. The previous version built up to three arrays per
     * ancestor level via Array.from + filter + indexOf, plus two strings per sibling in the predicate
     * — and the shadow-boundary walk makes the path longer, so it ran more often.
     */
    r(this, "nthChildSuffix", (e, t, s) => {
      var a;
      const i = (a = e.parentNode) == null ? void 0 : a.children;
      if (!i)
        return "";
      let n = 0, o = 0;
      for (let c = 0; c < i.length; c++) {
        const l = i[c];
        if (l === e && (o = c + 1), l.tagName.toLowerCase() === t && !(s !== null && l.classList.toString() !== s) && (n++, n > 1 && o))
          return `:nth-child(${o})`;
      }
      return n > 1 ? `:nth-child(${o})` : "";
    });
    r(this, "getElementSelector", (e) => {
      var n, o;
      if (!e || !e.tagName || typeof e.tagName != "string")
        return "N/A";
      const t = [];
      let s = "";
      const i = (a) => {
        t.length ? t.unshift(a, s) : t.unshift(a);
      };
      for (; e; ) {
        let a = "";
        const c = (n = e.tagName) == null ? void 0 : n.toLowerCase();
        if (e.id) {
          if (a = `#${e.id}`, i(a), e.getRootNode() === e.ownerDocument)
            break;
        } else if (((o = e.classList) == null ? void 0 : o.length) > 0) {
          const d = Array.from(e.classList).map((f) => `.${f}`).join("");
          a = `${c}${d}`, a += this.nthChildSuffix(e, c, e.classList.toString()), i(a);
        } else
          a = c, a += this.nthChildSuffix(e, c, null), i(a);
        const l = e.parentNode, h = this.recordShadowDom && k(l);
        if (s = h ? " >>> " : " > ", e = h ? l.host : l, !e || e.tagName === "HTML") break;
      }
      return t.join("");
    });
    /**
     * Get the full selector path for an element, including iframe ancestry.
     * For elements inside iframes, this returns a path like:
     * "body > div#app > iframe.embedded >>> body > div.content"
     * The ">>>" delimiter separates document boundaries (parent doc -> iframe doc).
     */
    r(this, "getFullSelector", (e, t) => {
      const s = this.getElementSelector(e);
      if (!t)
        return s;
      const i = this.__iframeMap.get(t);
      return i ? `${this.getIframeAncestrySelector(i)} >>> ${s}` : `iframe[uxc-iframe-id="${t}"] > ${s}`;
    });
    /**
     * Build the full selector path for an iframe element, including any parent iframe ancestry.
     * For nested iframes, this recursively traverses up through all iframe boundaries.
     * Example output for a doubly-nested iframe:
     * "#toproot > div > iframe.outer >>> body > div > iframe.inner"
     */
    r(this, "getIframeAncestrySelector", (e) => {
      const t = this.getElementSelector(e), s = this.__iframeDocumentMap.get(e.ownerDocument);
      if (!s)
        return t;
      const i = this.__iframeMap.get(s);
      return i ? `${this.getIframeAncestrySelector(i)} >>> ${t}` : t;
    });
    r(this, "handleEvent", (e, t = {}) => {
      const s = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.EVENT,
        n: e,
        p: t
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "EVENT",
        name: e,
        properties: t
      };
      this.__onChange(s);
    });
    r(this, "clickQueue", []);
    r(this, "scheduledClickWork", null);
    r(this, "scheduleClickWork", () => {
      this.scheduledClickWork && (clearTimeout(this.scheduledClickWork), this.scheduledClickWork = null), this.scheduledClickWork = setTimeout(this.clickWork, 500);
    });
    // check if elements are focusable
    /**
     * [SHADOW DOM] The innermost focused element, descending through shadow roots.
     *
     * `document.activeElement` stops at the outermost shadow host, so a focused element inside a
     * shadow tree never compares equal to it. Each root exposes its own `activeElement`, so the
     * focused node is found by following that chain down.
     */
    r(this, "getDeepActiveElement", () => {
      var t;
      if (!this.recordShadowDom)
        return document.activeElement;
      let e = document.activeElement;
      for (let s = 0; s < W; s++) {
        const i = (t = e == null ? void 0 : e.shadowRoot) == null ? void 0 : t.activeElement;
        if (!i)
          return e;
        e = i;
      }
      return e;
    });
    r(this, "isElementInteractive", (e) => {
      if (!e)
        return !1;
      const t = e.nodeName;
      return e === this.getDeepActiveElement() && e !== document.body && (!e.hasAttribute("tabindex") || e.tabIndex > -1) || e.hasAttribute("tabindex") && e.tabIndex > -1 ? !0 : [
        "BUTTON",
        "DETAILS",
        "EMBED",
        "IFRAME",
        "KEYGEN",
        "LABEL",
        "SELECT",
        "TEXTAREA",
        "AUDIO",
        "VIDEO",
        "INPUT"
      ].includes(e.nodeName) ? !e.disabled : e.nodeName === "A" && e.hasAttribute("href") || e instanceof HTMLInputElement && e.type !== "hidden" || ["AUDIO", "VIDEO"].includes(t) && e.hasAttribute("controls") || ["IMG", "OBJECT"].includes(t) && e.hasAttribute("usemap") || e.getAttribute("onclick") ? !0 : e.parentElement ? this.isElementInteractive(e.parentElement) : !1;
    });
    r(this, "clickWork", () => {
      const e = this.clickQueue.slice();
      this.clickQueue = [];
      const t = [];
      for (; ; ) {
        const i = e.shift();
        if (!i)
          break;
        const { pgX: n, pgY: o } = i;
        let a = !1;
        for (const c of t) {
          const l = c[c.length - 1];
          if (l) {
            const { pgX: h, pgY: d, t: f } = l;
            if (Math.abs(n - h) <= 10 && Math.abs(o - d) <= 10 && i.t - f < 300) {
              c.push(i), a = !0;
              break;
            }
          }
        }
        a || t.push([i]);
      }
      const s = [];
      for (const i of t) {
        const n = i.length > 2;
        for (const o of i)
          o.isRage = n, s.push(o);
      }
      s.sort((i, n) => i.s - n.s);
      for (const i of s) {
        if (i.ignore)
          continue;
        const n = i.type === p.MOUSE_CLICK ? "MOUSE_CLICK" : "MOUSE_DOUBLE_CLICK", o = i.type, a = this.min ? {
          s: i.s,
          t: i.t,
          ct: o,
          tg: i.target,
          a: i.activity,
          ires: i.isResponsive,
          x: i.x,
          y: i.y,
          rg: i.isRage,
          sel: i.selector,
          ...i.iframeContext && { if: i.iframeContext },
          ...i.elementId && { ei: i.elementId },
          ...i.elementName && { en: i.elementName },
          ...i.elementClass && { ec: i.elementClass },
          ...i.elementType !== void 0 && { et: i.elementType }
        } : {
          seq: i.s,
          time: i.t,
          type: n,
          target: i.target,
          isResponsive: i.isResponsive,
          activity: i.activity,
          x: i.x,
          y: i.y,
          isRage: i.isRage,
          selector: i.selector,
          ...i.iframeContext && { iframeContext: i.iframeContext },
          ...i.elementId && { elementId: i.elementId },
          ...i.elementName && { elementName: i.elementName },
          ...i.elementClass && { elementClass: i.elementClass },
          ...i.elementType !== void 0 && { elementType: i.elementType }
        };
        this.__onChange(a);
      }
    });
    r(this, "handleMouseClick", (e) => {
      var h;
      if (this.captureMode === "flutter" && this.pendingGestureContent) {
        const d = this.pendingGestureContent;
        this.pendingGestureContent = null, this.onUserActivity();
        const f = new URL(this.getOccludedURL()).pathname, g = d.data, m = (h = this.flutterCanvasManager) == null ? void 0 : h.getFrameScale(), S = m ? d.x * m.sx : d.x, _ = m ? d.y * m.sy : d.y, w = g.class || "", E = g.isInteractive === !0, v = typeof g.type == "number" ? g.type : void 0, C = g.isSensitive === !0;
        this.clickQueue.push({
          x: S,
          y: _,
          pgX: S,
          pgY: _,
          target: g.id || "",
          selector: w,
          isResponsive: E,
          s: this.getSeq(),
          t: this.getTime(),
          activity: f,
          isRage: !1,
          type: p.MOUSE_CLICK,
          ...!C && {
            elementId: g.id,
            elementName: g.name,
            elementClass: g.class,
            elementType: v
          }
        }), this.scheduleClickWork(), E || this.handleEvent("uxc_dead_click", {
          x: S,
          y: _,
          selector: w
        });
        return;
      }
      const t = this.resolveEventTarget(e);
      if (!t)
        return;
      const { element: s, uuid: i } = t;
      this.onUserActivity();
      const n = this.getCursorPosition(e), o = e.__iframeContext, a = new URL(this.getOccludedURL()).pathname, c = this.getFullSelector(s, o), l = this.isElementInteractive(s);
      this.clickQueue.push({
        x: n.x,
        y: n.y,
        pgX: n.pageX,
        pgY: n.pageY,
        target: i,
        selector: c,
        isResponsive: l,
        s: this.getSeq(),
        t: this.getTime(),
        activity: a,
        isRage: !1,
        type: p.MOUSE_CLICK,
        iframeContext: o
      }), this.scheduleClickWork(), l || this.handleEvent("uxc_dead_click", {
        x: n.x,
        y: n.y,
        selector: c
      });
    });
    r(this, "handleDoubleClick", (e) => {
      var h;
      if (this.captureMode === "flutter" && this.pendingGestureContent) {
        const d = this.pendingGestureContent;
        this.pendingGestureContent = null, this.onUserActivity();
        const f = new URL(this.getOccludedURL()).pathname, g = d.data, m = (h = this.flutterCanvasManager) == null ? void 0 : h.getFrameScale(), S = m ? d.x * m.sx : d.x, _ = m ? d.y * m.sy : d.y, w = g.id || "", E = g.class || "", v = g.isInteractive === !0, C = typeof g.type == "number" ? g.type : void 0, D = g.isSensitive === !0 ? {} : {
          elementId: g.id,
          elementName: g.name,
          elementClass: g.class,
          elementType: C
        };
        this.clickQueue.push({
          x: S,
          y: _,
          pgX: S,
          pgY: _,
          target: w,
          selector: E,
          isResponsive: v,
          s: this.getSeq(),
          t: this.getTime(),
          activity: f,
          isRage: !1,
          type: p.MOUSE_DOUBLE_CLICK,
          ...D
        }), this.clickQueue.push({
          x: S,
          y: _,
          pgX: S,
          pgY: _,
          target: w,
          selector: E,
          isResponsive: v,
          s: this.getSeq(),
          t: this.getTime(),
          activity: f,
          isRage: !1,
          type: p.MOUSE_DOUBLE_CLICK,
          ignore: !0,
          ...D
        }), this.scheduleClickWork(), v || this.handleEvent("uxc_dead_click", {
          x: S,
          y: _,
          selector: E
        });
        return;
      }
      const t = this.getCursorPosition(e), s = e.__iframeContext, i = this.resolveEventTarget(e);
      if (!i)
        return;
      const { element: n, uuid: o } = i, a = new URL(this.getOccludedURL()).pathname, c = this.getFullSelector(n, s), l = this.isElementInteractive(n);
      this.clickQueue.push({
        x: t.x,
        y: t.y,
        pgX: t.pageX,
        pgY: t.pageY,
        target: o,
        selector: c,
        isResponsive: l,
        s: this.getSeq(),
        t: this.getTime(),
        activity: a,
        isRage: !1,
        type: p.MOUSE_DOUBLE_CLICK,
        iframeContext: s
      }), this.clickQueue.push({
        x: t.x,
        y: t.y,
        pgX: t.pageX,
        pgY: t.pageY,
        target: o,
        selector: c,
        isResponsive: l,
        s: this.getSeq(),
        t: this.getTime(),
        activity: a,
        isRage: !1,
        type: p.MOUSE_DOUBLE_CLICK,
        ignore: !0
      }), this.scheduleClickWork(), l || this.handleEvent("uxc_dead_click", {
        x: t.x,
        y: t.y,
        selector: c
      });
    });
    r(this, "handleMouseOver", (e) => {
      const t = this.resolveEventTarget(e);
      if (!t)
        return;
      const s = e.__iframeContext, i = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.MOUSE_OVER,
        tg: t.uuid,
        ...s && { if: s }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "MOUSE_OVER",
        target: t.uuid,
        ...s && { iframeContext: s }
      };
      this.__onChange(i);
    });
    r(this, "handleMouseOut", (e) => {
      const t = this.resolveEventTarget(e);
      if (!t)
        return;
      const s = e.__iframeContext, i = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.MOUSE_OUT,
        tg: t.uuid,
        ...s && { if: s }
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "MOUSE_OUT",
        target: t.uuid,
        ...s && { iframeContext: s }
      };
      this.__onChange(i);
    });
    r(this, "touchMap", /* @__PURE__ */ new Map());
    r(this, "handleTouchStart", (e) => {
      this.onUserActivity();
      const t = e.view || window;
      for (const s of e.changedTouches) {
        const { identifier: i, clientX: n, clientY: o } = s, {
          scrollX: a,
          scrollY: c
        } = t;
        this.touchMap.set(i, {
          prevX: n,
          prevY: o,
          id: i,
          points: [[n, o]],
          initScrollX: a,
          initScrollY: c,
          seq: this.getSeq(),
          time: this.getTime()
        });
      }
    });
    r(this, "handleTouchMove", (e) => {
      const t = this.resolveEventTarget(e);
      if (t)
        for (const s of e.changedTouches) {
          const { identifier: i, clientX: n, clientY: o } = s, a = this.touchMap.get(i);
          if (!a)
            continue;
          const c = e.view || window, {
            initScrollX: l,
            initScrollY: h
          } = a, {
            scrollX: d,
            scrollY: f
          } = c, g = n + (d - l), m = o + (f - h), S = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.TOUCH,
            tg: t.uuid,
            ox: a.prevX,
            oy: a.prevY,
            x: g,
            y: m
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "TOUCH_EXPERIMENTAL",
            target: t.uuid,
            ox: a.prevX,
            oy: a.prevY,
            x: g,
            y: m
          };
          a.prevX = n, a.prevY = o, a.initScrollX = d, a.initScrollY = f;
          const _ = [
            n + c.scrollX,
            o + c.scrollY
          ];
          a.points.push(_), this.__onChange(S);
        }
    });
    r(this, "handleTouchEnd", (e) => {
      const t = this.resolveEventTarget(e);
      if (t)
        for (const s of e.changedTouches) {
          const { identifier: i, clientX: n, clientY: o } = s, a = this.touchMap.get(i);
          if (!a)
            continue;
          const c = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.TOUCH,
            tg: t.uuid,
            ox: a.prevX,
            oy: a.prevY,
            x: n,
            y: o
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "TOUCH_EXPERIMENTAL",
            target: t.uuid,
            ox: a.prevX,
            oy: a.prevY,
            x: n,
            y: o
          };
          this.__onChange(c);
          const {
            points: l,
            seq: h,
            time: d
          } = a;
          if (l.length > 1) {
            const f = l[0][0], g = l[0][1];
            if (Re(l)) {
              const S = Te(l);
              this.__onChange(this.min ? {
                seq: h,
                time: d,
                type: "GESTURE",
                gestureType: S,
                x: f,
                y: g,
                points: l
              } : {
                s: h,
                t: d,
                ct: p.GESTURE,
                gt: S,
                d: S,
                p: l,
                x: f,
                y: g
              });
            } else
              this.__onChange(this.min ? {
                seq: h,
                time: d,
                type: "GESTURE",
                gestureType: x.TRAIL,
                x: f,
                y: g,
                points: l
              } : {
                s: h,
                t: d,
                ct: p.GESTURE,
                gt: x.TRAIL,
                x: f,
                y: g,
                p: l
              });
          }
          this.touchMap.delete(i);
        }
    });
    r(this, "handleWindowResize", (e) => {
      if (e == null ? void 0 : e.__iframeContext)
        return;
      const s = (e == null ? void 0 : e.currentTarget) || (e == null ? void 0 : e.target) || window, i = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.WINDOW_RESIZE,
        w: s.innerWidth,
        h: s.innerHeight
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "WINDOW_RESIZE",
        width: s.innerWidth,
        height: s.innerHeight
      };
      this.__onChange(i);
    });
    r(this, "handleViewPortResize", (e) => {
      if (e == null ? void 0 : e.__iframeContext)
        return;
      const s = e.target, {
        width: i,
        height: n,
        scale: o,
        offsetLeft: a,
        offsetTop: c,
        pageLeft: l,
        pageTop: h
      } = s, d = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.VIEWPORT_RESIZE_EXPERIMENTAL,
        w: i,
        h: n,
        sc: o,
        ol: a,
        ot: c,
        pl: l,
        pt: h
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "VIEWPORT_RESIZE_EXPERIMENTAL",
        width: i,
        height: n,
        scale: o,
        offsetLeft: a,
        offsetTop: c,
        pageLeft: l,
        pageTop: h
      };
      this.__onChange(d);
    });
    r(this, "handleSubmit", (e) => {
      const t = this.resolveEventTarget(e);
      t && (this.onUserActivity(), this.handleEvent("uxc_submit", {
        uxc_target: this.getElementSelector(t.element),
        uxc_page: new URL(this.getOccludedURL()).pathname,
        internal: !0
      }));
    });
    r(this, "setUserProperty", (e, t) => {
      const s = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.USER_PROPERTY,
        k: e,
        v: t
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "USER_PROPERTY",
        key: e,
        value: t
      };
      this.__onChange(s);
    });
    r(this, "setFramesUploadConfig", (e) => {
      var t;
      this.sessionId && ((t = this.transport) == null || t.setConfig(e, this.sessionId));
    });
    r(this, "setClientIP", (e) => {
      const t = this.min ? {
        s: this.getSeq(),
        t: this.getTime(),
        ct: p.CLIENT_IP,
        ip: e
      } : {
        seq: this.getSeq(),
        time: this.getTime(),
        type: "CLIENT_IP",
        ip: e
      };
      this.__onChange(t);
    });
    // [IFRAME SUPPORT] Generic method to observe any document (main or iframe)
    r(this, "observeDocument", (e) => {
      if (this.observedDocuments.get(e)) return () => {
      };
      this.observedDocuments.set(e, !0);
      const t = new MutationObserver(this.onMutation);
      return e.documentElement && t.observe(e.documentElement, { childList: !0, attributes: !0, characterData: !0, subtree: !0 }), e.addEventListener("scroll", this.handleScroll, !0), e.addEventListener("focus", this.handleFocus, !0), e.addEventListener("mousemove", this.handleMouseMove, !0), e.addEventListener("click", this.handleMouseClick, !0), e.addEventListener("dblclick", this.handleDoubleClick, !0), e.addEventListener("mouseenter", this.handleMouseOver, !0), e.addEventListener("mouseleave", this.handleMouseOut, !0), e.addEventListener("submit", this.handleSubmit, !0), e.addEventListener("touchstart", this.handleTouchStart, !0), e.addEventListener("touchend", this.handleTouchEnd, !0), e.addEventListener("touchmove", this.handleTouchMove, !0), () => {
        t && t.disconnect(), e.removeEventListener("scroll", this.handleScroll, !0), e.removeEventListener("focus", this.handleFocus, !0), e.removeEventListener("mousemove", this.handleMouseMove, !0), e.removeEventListener("click", this.handleMouseClick, !0), e.removeEventListener("dblclick", this.handleDoubleClick, !0), e.removeEventListener("mouseenter", this.handleMouseOver, !0), e.removeEventListener("mouseleave", this.handleMouseOut, !0), e.removeEventListener("submit", this.handleSubmit, !0), e.removeEventListener("touchstart", this.handleTouchStart, !0), e.removeEventListener("touchend", this.handleTouchEnd, !0), e.removeEventListener("touchmove", this.handleTouchMove, !0), this.observedDocuments.delete(e);
      };
    });
    r(this, "__mutObserver", null);
    r(this, "observeIframeDocument", (e, t, s) => {
      const i = e.contentDocument, n = this.__iframeLastDocument.get(e);
      if (n && i && n !== i) {
        const a = this.__iframeCleanupMap.get(e);
        a && a(), this.__iframeDocumentMap.delete(n);
      }
      if (this.__iframeMutationObservers.has(e)) {
        const a = this.__iframeMutationObservers.get(e);
        a == null || a.disconnect(), this.__iframeMutationObservers.delete(e);
      }
      const o = () => {
        const a = e.contentDocument;
        if (!a || !a.body) {
          e.addEventListener("load", o, { once: !0 });
          return;
        }
        this.__iframeLastDocument.set(e, a);
        const c = a.defaultView || window, l = new MutationObserver((v) => {
          this.queueTaggedMutations(v, s);
        });
        a.documentElement && l.observe(a.documentElement, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        }), this.__iframeMutationObservers.set(e, l);
        const h = this.injectCSSObserver(c), d = this.attachDocumentEventListeners(a, c, s), f = this.setupIframeInputObserver(a, s), g = this.hookInputPropertySetters(c), m = c && this.recordIframeNavigation ? this.startUrlObserverForWindow(c, s) : () => {
        };
        this.ensureShadowRealmPatched(c), this.registerDocumentStyleSheets(a);
        const S = () => {
          l.disconnect(), this.__iframeMutationObservers.delete(e), d(), f(), g(), h(), m(), this.restoreShadowRealm(c), s && this.__iframeMap.delete(s), this.__iframeDocumentMap.delete(a), this.__iframeCleanupMap.delete(e), this.__iframeLastDocument.delete(e), this.__iframeSrcMap.delete(e);
          const v = this.__iframeUnloadListeners.get(e), C = this.__iframeUnloadListenerWindow.get(e);
          v && C && C.removeEventListener("unload", v), this.__iframeUnloadListeners.delete(e), this.__iframeUnloadListenerWindow.delete(e);
        };
        this.__iframeCleanupMap.set(e, S);
        const _ = this.__iframeUnloadListeners.get(e), w = this.__iframeUnloadListenerWindow.get(e);
        _ && w && w.removeEventListener("unload", _);
        const E = () => {
          S(), s && this.__iframeMap.set(s, e), e.isConnected && e.addEventListener("load", o, { once: !0 });
        };
        if (this.__iframeUnloadListeners.set(e, E), this.__iframeUnloadListenerWindow.set(e, c), c == null || c.addEventListener("unload", E, { once: !0 }), this.registerIframeStylesheets(a), s && a.documentElement && !this.__iframeSnapshotSent.has(a))
          try {
            this.registerElement(a.documentElement), this.__iframeDocumentMap.set(a, s);
            const v = this.collectElement(a.documentElement), C = this.min ? {
              s: this.getSeq(),
              t: this.getTime(),
              ct: p.IFRAME_LOAD,
              tg: s || "",
              n: v
            } : {
              seq: this.getSeq(),
              time: this.getTime(),
              type: "IFRAME_LOAD",
              target: s || "",
              node: v
            };
            this.__onChange(C), this.__iframeSnapshotSent.add(a);
          } catch {
          }
      };
      o();
    });
    /**
     * Setup input observer for iframe documents to capture input/change events
     */
    r(this, "setupIframeInputObserver", (e, t) => this.attachInputObserver(e, e.defaultView, t));
    /**
     * Register stylesheets from iframe document for CSS observer
     * This allows dynamic CSS rules added via insertRule/deleteRule to be captured
     */
    r(this, "registerIframeStylesheets", (e) => {
      this.registerDocumentStyleSheets(e);
    });
    /**
     * Register all accessible stylesheets (style + link rel=stylesheet) for a document.
     * This ensures insertRule/deleteRule tracking works even for external sheets.
     */
    r(this, "registerDocumentStyleSheets", (e) => {
      try {
        const t = Array.from(e.styleSheets || []);
        for (const s of t)
          try {
            s.cssRules, this.__styleSheetMap.set(s, !0);
          } catch {
            continue;
          }
      } catch {
      }
    });
    /**
     * Attach DOM event listeners for a document/sourceWindow pair.
     * Used for both main document and same-origin iframes to keep parity.
     */
    r(this, "attachDocumentEventListeners", (e, t, s) => {
      const i = (E) => (v) => {
        s && (v.__iframeContext = s), E.call(this, v);
      }, n = i(this.handleScroll), o = i(this.handleFocus), a = i(this.handleMouseMove), c = i(this.handleMouseClick), l = i(this.handleDoubleClick), h = i(this.handleMouseOver), d = i(this.handleMouseOut), f = i(this.handleSubmit), g = i(this.handleTouchStart), m = i(this.handleTouchEnd), S = i(this.handleTouchMove), _ = i(this.handleViewPortResize), w = i(this.handleWindowResize);
      return e.addEventListener("scroll", n, !0), e.addEventListener("focus", o, !0), e.addEventListener("mousemove", a, !0), e.addEventListener("click", c, !0), e.addEventListener("dblclick", l, !0), e.addEventListener("mouseenter", h, !0), e.addEventListener("mouseleave", d, !0), e.addEventListener("submit", f, !0), e.addEventListener("touchstart", g, !0), e.addEventListener("touchend", m, !0), e.addEventListener("touchmove", S, !0), t.addEventListener("beforeunload", this.clickWork, !0), t.visualViewport && t.visualViewport.addEventListener("resize", _), t.addEventListener("resize", w), () => {
        e.removeEventListener("scroll", n, !0), e.removeEventListener("focus", o, !0), e.removeEventListener("mousemove", a, !0), e.removeEventListener("click", c, !0), e.removeEventListener("dblclick", l, !0), e.removeEventListener("mouseenter", h, !0), e.removeEventListener("mouseleave", d, !0), e.removeEventListener("submit", f, !0), e.removeEventListener("touchstart", g, !0), e.removeEventListener("touchend", m, !0), e.removeEventListener("touchmove", S, !0), t.removeEventListener("beforeunload", this.clickWork, !0), t.visualViewport && t.visualViewport.removeEventListener("resize", _), t.removeEventListener("resize", w);
      };
    });
    /**
     * Attach input/change listeners with UXCam semantics (debounce, masking, analytics)
     * for any document/window pair. Supports optional iframe context tagging.
     */
    r(this, "attachInputObserver", (e, t, s) => {
      const i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = (a) => {
        const c = this.getEventTarget(a);
        if (!c || !this.__reverseDomMap.has(c))
          return;
        this.onUserActivity();
        const l = i.get(c), h = n.get(c);
        l && clearTimeout(l);
        let { value: d } = c;
        if (c.type === "checkbox" || c.type === "radio") {
          const g = c.checked || !1, m = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.CHECKED_CHANGE,
            tg: this.getUUIDByElement(c),
            c: g,
            ...s && { if: s }
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "CHECKED_CHANGE",
            target: this.getUUIDByElement(c),
            checked: g,
            ...s && { iframeContext: s }
          };
          this.__onChange(m);
          return;
        }
        this.isSensitiveInput(c) && (c.type === "number" ? d = "000000" : d = "******");
        const f = setTimeout(() => {
          const g = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.INPUT_CHANGE,
            tg: this.getUUIDByElement(c),
            v: d,
            ...s && { if: s }
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "INPUT_CHANGE",
            target: this.getUUIDByElement(c),
            value: d,
            ...s && { iframeContext: s }
          };
          this.__onChange(g), i.delete(c);
        }, 200);
        if (!h) {
          n.set(c, !0);
          const g = () => {
            const m = {
              uxc_target: this.getElementSelector(c),
              uxc_page: new URL(this.getOccludedURLFor(t)).pathname,
              internal: !0
            };
            c.name && (m.uxc_name = c.name), this.handleEvent("uxc_input", m), n.delete(c);
          };
          c.addEventListener("blur", g, { once: !0 });
        }
        i.set(c, f);
      };
      return e.addEventListener("input", o, !0), e.addEventListener("change", o, !0), () => {
        e.removeEventListener("input", o, !0), e.removeEventListener("change", o, !0);
        for (const a of i.values())
          clearTimeout(a);
        i.clear(), n.clear();
      };
    });
    r(this, "startMutationObserver", () => {
      this.debug("mutation observer started"), this.__mutObserver = new MutationObserver(this.onMutation);
      const e = this.shadowManager.patchAttachShadow(window);
      this.collectDOM(), this.registerDocumentStyleSheets(document), this.__mutObserver.observe(document.documentElement, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      });
      const t = this.attachDocumentEventListeners(document, window);
      return () => {
        document.documentElement.style.border = "none", this.__mutObserver && this.__mutObserver.disconnect(), this.shadowManager.destroy(), e(), t();
      };
    });
    r(this, "getOccludedURLFor", (e = window) => {
      const t = this.occlusionOptions.url(e.location.toString()), s = new URL(t), i = new URLSearchParams(s.search);
      for (const o of this.occlusionOptions.queryParams)
        i.has(o) && i.set(o, "__occluded__");
      const n = i.toString();
      return `${s.origin}${s.pathname}${n ? "?" + n : ""}${s.hash}`;
    });
    r(this, "getOccludedURL", () => this.getOccludedURLFor(window));
    r(this, "capturePageView", (e = window) => {
      const t = this.getOccludedURLFor(e), s = new URL(t);
      this.handleEvent("uxc_url_navigate", {
        url: t,
        query: s.search,
        path: s.pathname,
        hash: s.hash,
        hostname: s.hostname
      });
    });
    r(this, "startUrlObserverForWindow", (e, t) => {
      const s = e.history.pushState, i = e.history.replaceState;
      let n = this.getOccludedURLFor(e);
      const o = () => {
        const a = this.getOccludedURLFor(e);
        if (a === n)
          return;
        n = a;
        const c = this.min ? {
          s: this.getSeq(),
          t: this.getTime(),
          ct: p.URL_CHANGE,
          u: a,
          utm: P(),
          ...t && { if: t }
        } : {
          seq: this.getSeq(),
          time: this.getTime(),
          type: "URL_CHANGE",
          url: a,
          utm: P(),
          ...t && { iframeContext: t }
        };
        this.__onChange(c), this.capturePageView(e);
      };
      return e.history.pushState = new Proxy(e.history.pushState, {
        apply: (a, c, l) => {
          const h = a.apply(c, l);
          return o(), h;
        }
      }), e.history.replaceState = new Proxy(e.history.replaceState, {
        apply: (a, c, l) => {
          const h = a.apply(c, l);
          return o(), h;
        }
      }), e.addEventListener("popstate", o), e.addEventListener("hashchange", o), () => {
        e.history.pushState = s, e.history.replaceState = i, e.removeEventListener("popstate", o), e.removeEventListener("hashchange", o);
      };
    });
    r(this, "startUrlObserver", () => this.startUrlObserverForWindow(window));
    r(this, "startInputObserver", () => {
      const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), s = (i) => {
        const n = this.getEventTarget(i);
        if (!n || !this.__reverseDomMap.has(n))
          return;
        this.onUserActivity();
        const o = e.get(n), a = t.get(n);
        o && clearTimeout(o);
        let { value: c } = n;
        if (n.type === "checkbox" || n.type === "radio") {
          const h = n.checked || !1, d = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.CHECKED_CHANGE,
            tg: this.getUUIDByElement(n),
            c: h
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "CHECKED_CHANGE",
            target: this.getUUIDByElement(n),
            checked: h
          };
          this.__onChange(d);
          return;
        }
        this.isSensitiveInput(n) && (n.type === "number" ? c = "000000" : c = "******");
        const l = setTimeout(() => {
          const h = this.min ? {
            s: this.getSeq(),
            t: this.getTime(),
            ct: p.INPUT_CHANGE,
            tg: this.getUUIDByElement(n),
            v: c
          } : {
            seq: this.getSeq(),
            time: this.getTime(),
            type: "INPUT_CHANGE",
            target: this.getUUIDByElement(n),
            value: c
          };
          this.__onChange(h), e.delete(n);
        }, 200);
        if (!a) {
          t.set(n, !0);
          const h = () => {
            const d = {
              uxc_target: this.getElementSelector(n),
              uxc_page: new URL(this.getOccludedURL()).pathname,
              internal: !0
            };
            n.name && (d.uxc_name = n.name), this.handleEvent("uxc_input", d), t.delete(n);
          };
          n.addEventListener("blur", h, { once: !0 });
        }
        e.set(n, l);
      };
      return document.addEventListener("input", s, !0), document.addEventListener("change", s, !0), this.shadowChangeHandler = s, this.shadowRootListeners = null, () => {
        document.removeEventListener("input", s, !0), document.removeEventListener("change", s, !0), this.shadowChangeHandler = null, this.shadowRootListeners = null;
        for (const i of e.values())
          clearTimeout(i);
        e.clear(), t.clear();
      };
    });
    /**
     * Hook property setters on form element prototypes to capture programmatic changes.
     */
    r(this, "hookInputPropertySetters", (e = window) => {
      if (!e || this.inputPatchedWindows.has(e))
        return () => {
        };
      const t = e, s = [
        { proto: t.HTMLInputElement.prototype, prop: "value" },
        { proto: t.HTMLInputElement.prototype, prop: "checked" },
        { proto: t.HTMLSelectElement.prototype, prop: "value" },
        { proto: t.HTMLSelectElement.prototype, prop: "selectedIndex" },
        { proto: t.HTMLTextAreaElement.prototype, prop: "value" },
        { proto: t.HTMLOptionElement.prototype, prop: "selected" }
      ], i = Object.getOwnPropertyDescriptor(
        t.HTMLInputElement.prototype,
        "value"
      );
      if (!i || !i.set)
        return () => {
        };
      const n = this, o = [];
      for (const { proto: a, prop: c } of s) {
        const l = Object.getOwnPropertyDescriptor(a, c);
        if (!l || !l.set)
          continue;
        const h = l.set, d = l.get;
        Object.defineProperty(a, c, {
          set(f) {
            h.call(this, f), setTimeout(() => {
              const g = this;
              if (!n.__reverseDomMap.has(g))
                return;
              const m = n.getUUIDByElement(g);
              if (!m)
                return;
              if (c === "checked") {
                const w = n.min ? {
                  s: n.getSeq(),
                  t: n.getTime(),
                  ct: p.CHECKED_CHANGE,
                  tg: m,
                  c: !!f
                } : {
                  seq: n.getSeq(),
                  time: n.getTime(),
                  type: "CHECKED_CHANGE",
                  target: m,
                  checked: !!f
                };
                n.__onChange(w);
                return;
              }
              if (c === "selected") {
                const E = g.closest("select");
                if (E && n.__reverseDomMap.has(E)) {
                  const v = n.getUUIDByElement(E);
                  if (v) {
                    const C = n.min ? {
                      s: n.getSeq(),
                      t: n.getTime(),
                      ct: p.INPUT_CHANGE,
                      tg: v,
                      v: E.value
                    } : {
                      seq: n.getSeq(),
                      time: n.getTime(),
                      type: "INPUT_CHANGE",
                      target: v,
                      value: E.value
                    };
                    n.__onChange(C);
                  }
                }
                return;
              }
              if (c === "selectedIndex") {
                let E = g.value;
                n.isSensitiveInput(g) && (E = "******");
                const v = n.min ? {
                  s: n.getSeq(),
                  t: n.getTime(),
                  ct: p.INPUT_CHANGE,
                  tg: m,
                  v: E
                } : {
                  seq: n.getSeq(),
                  time: n.getTime(),
                  type: "INPUT_CHANGE",
                  target: m,
                  value: E
                };
                n.__onChange(v);
                return;
              }
              let S = String(f);
              n.isSensitiveInput(g) && (S = g.type === "number" ? "000000" : "******");
              const _ = n.min ? {
                s: n.getSeq(),
                t: n.getTime(),
                ct: p.INPUT_CHANGE,
                tg: m,
                v: S
              } : {
                seq: n.getSeq(),
                time: n.getTime(),
                type: "INPUT_CHANGE",
                target: m,
                value: S
              };
              n.__onChange(_);
            }, 0);
          },
          get: d,
          enumerable: l.enumerable,
          configurable: !0
        }), o.push(() => {
          Object.defineProperty(a, c, l);
        });
      }
      return this.inputPatchedWindows.add(e), () => {
        for (const a of o)
          a();
        this.inputPatchedWindows.delete(e);
      };
    });
    r(this, "pageCollected", !1);
    r(this, "collectDOM", () => {
      if (this.pageCollected)
        return;
      this.pageCollected = !0;
      const e = this.collectElement(document.documentElement);
      this.debug("initial page snapshot collected");
      const t = this.getTime(), s = this.getSeq(), i = this.min, n = i ? {
        s,
        t,
        ct: p.WINDOW_RESIZE,
        w: window.innerWidth,
        h: window.innerHeight
      } : {
        seq: s,
        time: t,
        type: "WINDOW_RESIZE",
        width: window.innerWidth,
        height: window.innerHeight
      };
      this.__onChange(n);
      const o = this.getOccludedURL(), a = i ? {
        s,
        t,
        ct: p.PAGE_LOAD,
        n: e,
        u: o,
        utm: P(),
        ts: document.documentElement.scrollTop,
        ls: document.documentElement.scrollLeft
      } : {
        seq: s,
        time: t,
        type: "PAGE_LOAD",
        node: e,
        url: o,
        utm: P(),
        topScroll: document.documentElement.scrollTop,
        leftScroll: document.documentElement.scrollLeft
      };
      this.__onChange(a), this.capturePageView(), this.recordStylesheets && this.safeEmit(() => this.captureAdoptedStyleSheets(document, "#document"), "document-adopted-failed"), this.recordShadowDom && this.safeEmit(this.shadowManager.flushPendingAdopted, "adopted-flush-failed");
      const c = i ? {
        s,
        t,
        ct: p.DOM_READY
      } : {
        seq: s,
        time: t,
        type: "DOM_READY"
      };
      this.scheduleOnChangeEvent(c);
    });
    this.iframeManager = new j({
      enableSameSiteIframes: f ?? !0,
      recordIframeNavigation: g ?? !1,
      enableCrossSiteIframes: !0,
      recordCrossOriginIframes: m ?? !1,
      debugIframes: S ?? !1,
      appKey: d,
      min: a,
      sendLog: c
    }, {
      onChange: e,
      getSeq: () => this.getSeq(),
      getTime: () => this.getTime(),
      createId: () => this.createID(),
      getIframeUUID: (y) => this.__reverseDomMap.get(y),
      getIframeFullSelector: (y) => this.getIframeAncestrySelector(y),
      getIframeDocuments: () => this.__iframeDocumentMap.keys()
    });
    const D = this.iframeManager.getCrossOriginDetectionResult();
    this.isCrossSiteChild = D.isCrossSiteChild, this.isCrossOriginIframeMode = m === !0 && this.isCrossSiteChild, this.appKey = d, this.__onChange = (y) => {
      this.isCrossOriginIframeMode ? (this.xoChildPosted++, this.iframeManager.sendToParent(y)) : this.isCrossSiteChild ? (this.xoChildPosted++, this.iframeManager.sendToParent(y)) : e(y);
    }, this.onSeqUpdate = s, this.onUserActivity = i, this.onNewStartTime = n, this.startTime = t, this.seq = o, this.min = a, this.occlusionOptions = O, this.sendLog = c, this.sessionCounter = l, this.recordIframes = f ?? !0, this.recordIframeNavigation = g ?? !1, this.recordStylesheets = v ?? !1, this.recordShadowDom = (C ?? !1) && Me(), C && !this.recordShadowDom && c("Shadow DOM recording disabled: DOM accessors are not native on this page"), this.captureMode = _ || "dom", this.transport = w, this.sessionId = E, this.shadowManager = new Le({
      enabled: this.recordShadowDom,
      isTracked: (y) => this.__reverseDomMap.has(y),
      getUUID: this.getUUIDByElement,
      serializeNode: (y) => this.collectElement(y),
      emitAddNodes: this.emitAddNodes,
      captureAdoptedStyleSheets: this.captureAdoptedStyleSheets,
      onMutations: this.queueTaggedMutations,
      getContextId: this.getNodeIframeContext,
      scheduleFlush: this.scheduleMutationWork,
      getRootListeners: this.getShadowRootListeners,
      debug: this.debug,
      logError: this.logShadowError
    }), this.debug("DomCollector options", O), this.isCrossOriginIframeMode ? this.destroy = this.initCrossOriginIframeMode() : this.destroy = this.init(), this.abort = h, this.appKey = d;
  }
  /** Synchronous best-effort flush for page unload. */
  unload() {
    var e;
    (e = this.flutterCanvasManager) == null || e.unload();
  }
  /** Build a lightweight end-marker batch for session close. Returns null if no canvas manager. */
  buildEndMarker() {
    var e;
    return ((e = this.flutterCanvasManager) == null ? void 0 : e.buildEndMarker()) ?? null;
  }
};
r(L, "FLUTTER_MAX_RETRY_MS", 15e3), r(L, "FLUTTER_RETRY_INTERVAL_MS", 500), /** Matches the parent watchdog's window, so the two reports describe the same interval. */
r(L, "XO_CHILD_REPORT_DELAY_MS", 1e4), r(L, "saveIdleCallback", (e, t = 500) => typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(e, {
  timeout: t
}) : setTimeout(e, t));
let ce = L;
export {
  P as collectUTM,
  ce as default,
  tt as getDeviceData,
  st as getDeviceDataMin,
  et as isInIframe
};
