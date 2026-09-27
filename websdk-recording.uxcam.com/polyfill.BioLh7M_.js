function Zo(H, q) {
  for (var we = 0; we < q.length; we++) {
    const p = q[we];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const V in p)
        if (V !== "default" && !(V in H)) {
          const ke = Object.getOwnPropertyDescriptor(p, V);
          ke && Object.defineProperty(H, V, ke.get ? ke : {
            enumerable: !0,
            get: () => p[V]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(H, Symbol.toStringTag, { value: "Module" }));
}
var qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Eo = {};
/**
 * @license
 * web-streams-polyfill v4.0.0
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */
(function() {
  function H() {
  }
  function q(e) {
    return typeof e == "object" && e !== null || typeof e == "function";
  }
  const we = H;
  function p(e, r) {
    try {
      Object.defineProperty(e, "name", { value: r, configurable: !0 });
    } catch {
    }
  }
  const V = Promise, ke = Promise.resolve.bind(V), Oo = Promise.prototype.then, jo = Promise.reject.bind(V), ko = ke;
  function j(e) {
    return new V(e);
  }
  function v(e) {
    return j((r) => r(e));
  }
  function d(e) {
    return jo(e);
  }
  function N(e, r, t) {
    return Oo.call(e, r, t);
  }
  function F(e, r, t) {
    N(N(e, r, t), void 0, we);
  }
  function yr(e, r) {
    F(e, r);
  }
  function gr(e, r) {
    F(e, void 0, r);
  }
  function U(e, r, t) {
    return N(e, r, t);
  }
  function Se(e) {
    N(e, void 0, we);
  }
  let ue = (e) => {
    if (typeof queueMicrotask == "function") ue = queueMicrotask;
    else {
      const r = v(void 0);
      ue = (t) => N(r, t);
    }
    return ue(e);
  };
  function ce(e, r, t) {
    if (typeof e != "function") throw new TypeError("Argument is not a function");
    return Function.prototype.apply.call(e, r, t);
  }
  function G(e, r, t) {
    try {
      return v(ce(e, r, t));
    } catch (o) {
      return d(o);
    }
  }
  class L {
    constructor() {
      this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
    }
    get length() {
      return this._size;
    }
    push(r) {
      const t = this._back;
      let o = t;
      t._elements.length === 16383 && (o = { _elements: [], _next: void 0 }), t._elements.push(r), o !== t && (this._back = o, t._next = o), ++this._size;
    }
    shift() {
      const r = this._front;
      let t = r;
      const o = this._cursor;
      let n = o + 1;
      const s = r._elements, a = s[o];
      return n === 16384 && (t = r._next, n = 0), --this._size, this._cursor = n, r !== t && (this._front = t), s[o] = void 0, a;
    }
    forEach(r) {
      let t = this._cursor, o = this._front, n = o._elements;
      for (; !(t === n.length && o._next === void 0 || t === n.length && (o = o._next, n = o._elements, t = 0, n.length === 0)); ) r(n[t]), ++t;
    }
    peek() {
      const r = this._front, t = this._cursor;
      return r._elements[t];
    }
  }
  const st = Symbol("[[AbortSteps]]"), lt = Symbol("[[ErrorSteps]]"), vr = Symbol("[[CancelSteps]]"), wr = Symbol("[[PullSteps]]"), Sr = Symbol("[[ReleaseSteps]]");
  function ut(e, r) {
    e._ownerReadableStream = r, r._reader = e, r._state === "readable" ? Tr(e) : r._state === "closed" ? function(t) {
      Tr(t), dt(t);
    }(e) : ct(e, r._storedError);
  }
  function Rr(e, r) {
    return x(e._ownerReadableStream, r);
  }
  function X(e) {
    const r = e._ownerReadableStream;
    r._state === "readable" ? Pr(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : function(t, o) {
      ct(t, o);
    }(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), r._readableStreamController[Sr](), r._reader = void 0, e._ownerReadableStream = void 0;
  }
  function Qe(e) {
    return new TypeError("Cannot " + e + " a stream using a released reader");
  }
  function Tr(e) {
    e._closedPromise = j((r, t) => {
      e._closedPromise_resolve = r, e._closedPromise_reject = t;
    });
  }
  function ct(e, r) {
    Tr(e), Pr(e, r);
  }
  function Pr(e, r) {
    e._closedPromise_reject !== void 0 && (Se(e._closedPromise), e._closedPromise_reject(r), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
  }
  function dt(e) {
    e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
  }
  const ft = Number.isFinite || function(e) {
    return typeof e == "number" && isFinite(e);
  }, Wo = Math.trunc || function(e) {
    return e < 0 ? Math.ceil(e) : Math.floor(e);
  };
  function Q(e, r) {
    if (e !== void 0 && typeof (t = e) != "object" && typeof t != "function") throw new TypeError(`${r} is not an object.`);
    var t;
  }
  function $(e, r) {
    if (typeof e != "function") throw new TypeError(`${r} is not a function.`);
  }
  function ht(e, r) {
    if (!/* @__PURE__ */ function(t) {
      return typeof t == "object" && t !== null || typeof t == "function";
    }(e)) throw new TypeError(`${r} is not an object.`);
  }
  function J(e, r, t) {
    if (e === void 0) throw new TypeError(`Parameter ${r} is required in '${t}'.`);
  }
  function Cr(e, r, t) {
    if (e === void 0) throw new TypeError(`${r} is required in '${t}'.`);
  }
  function qr(e) {
    return Number(e);
  }
  function bt(e) {
    return e === 0 ? 0 : e;
  }
  function Er(e, r) {
    const t = Number.MAX_SAFE_INTEGER;
    let o = Number(e);
    if (o = bt(o), !ft(o)) throw new TypeError(`${r} is not a finite number`);
    if (o = function(n) {
      return bt(Wo(n));
    }(o), o < 0 || o > t) throw new TypeError(`${r} is outside the accepted range of 0 to ${t}, inclusive`);
    return ft(o) && o !== 0 ? o : 0;
  }
  function Or(e, r) {
    if (!ae(e)) throw new TypeError(`${r} is not a ReadableStream.`);
  }
  function Re(e) {
    return new re(e);
  }
  function _t(e, r) {
    e._reader._readRequests.push(r);
  }
  function jr(e, r, t) {
    const o = e._reader._readRequests.shift();
    t ? o._closeSteps() : o._chunkSteps(r);
  }
  function Ye(e) {
    return e._reader._readRequests.length;
  }
  function pt(e) {
    const r = e._reader;
    return r !== void 0 && !!te(r);
  }
  class re {
    constructor(r) {
      if (J(r, 1, "ReadableStreamDefaultReader"), Or(r, "First parameter"), se(r)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
      ut(this, r), this._readRequests = new L();
    }
    get closed() {
      return te(this) ? this._closedPromise : d(He("closed"));
    }
    cancel(r = void 0) {
      return te(this) ? this._ownerReadableStream === void 0 ? d(Qe("cancel")) : Rr(this, r) : d(He("cancel"));
    }
    read() {
      if (!te(this)) return d(He("read"));
      if (this._ownerReadableStream === void 0) return d(Qe("read from"));
      let r, t;
      const o = j((n, s) => {
        r = n, t = s;
      });
      return We(this, { _chunkSteps: (n) => r({ value: n, done: !1 }), _closeSteps: () => r({ value: void 0, done: !0 }), _errorSteps: (n) => t(n) }), o;
    }
    releaseLock() {
      if (!te(this)) throw He("releaseLock");
      this._ownerReadableStream !== void 0 && function(r) {
        X(r);
        const t = new TypeError("Reader was released");
        mt(r, t);
      }(this);
    }
  }
  function te(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_readRequests") && e instanceof re;
  }
  function We(e, r) {
    const t = e._ownerReadableStream;
    t._disturbed = !0, t._state === "closed" ? r._closeSteps() : t._state === "errored" ? r._errorSteps(t._storedError) : t._readableStreamController[wr](r);
  }
  function mt(e, r) {
    const t = e._readRequests;
    e._readRequests = new L(), t.forEach((o) => {
      o._errorSteps(r);
    });
  }
  function He(e) {
    return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
  }
  var kr, Wr, Ar;
  function Ae(e) {
    return e.slice();
  }
  function yt(e, r, t, o, n) {
    new Uint8Array(e).set(new Uint8Array(t, o, n), r);
  }
  Object.defineProperties(re.prototype, { cancel: { enumerable: !0 }, read: { enumerable: !0 }, releaseLock: { enumerable: !0 }, closed: { enumerable: !0 } }), p(re.prototype.cancel, "cancel"), p(re.prototype.read, "read"), p(re.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(re.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: !0 });
  let de = (e) => (de = typeof e.transfer == "function" ? (r) => r.transfer() : typeof structuredClone == "function" ? (r) => structuredClone(r, { transfer: [r] }) : (r) => r, de(e)), fe = (e) => (fe = typeof e.detached == "boolean" ? (r) => r.detached : (r) => r.byteLength === 0, fe(e));
  function gt(e, r, t) {
    if (e.slice) return e.slice(r, t);
    const o = t - r, n = new ArrayBuffer(o);
    return yt(n, 0, e, r, o), n;
  }
  function Be(e, r) {
    const t = e[r];
    if (t != null) {
      if (typeof t != "function") throw new TypeError(`${String(r)} is not a function`);
      return t;
    }
  }
  function vt(e) {
    try {
      const r = e.done, t = e.value;
      return N(ko(t), (o) => ({ done: r, value: o }));
    } catch (r) {
      return d(r);
    }
  }
  const ze = (Ar = (kr = Symbol.asyncIterator) !== null && kr !== void 0 ? kr : (Wr = Symbol.for) === null || Wr === void 0 ? void 0 : Wr.call(Symbol, "Symbol.asyncIterator")) !== null && Ar !== void 0 ? Ar : "@@asyncIterator";
  function wt(e, r = "sync", t) {
    if (t === void 0) if (r === "async") {
      if ((t = Be(e, ze)) === void 0)
        return function(n) {
          const s = { next() {
            let a;
            try {
              a = St(n);
            } catch (i) {
              return d(i);
            }
            return vt(a);
          }, return(a) {
            let i;
            try {
              const l = Be(n.iterator, "return");
              if (l === void 0) return v({ done: !0, value: a });
              i = ce(l, n.iterator, [a]);
            } catch (l) {
              return d(l);
            }
            return q(i) ? vt(i) : d(new TypeError("The iterator.return() method must return an object"));
          } };
          return { iterator: s, nextMethod: s.next, done: !1 };
        }(wt(e, "sync", Be(e, Symbol.iterator)));
    } else t = Be(e, Symbol.iterator);
    if (t === void 0) throw new TypeError("The object is not iterable");
    const o = ce(t, e, []);
    if (!q(o)) throw new TypeError("The iterator method must return an object");
    return { iterator: o, nextMethod: o.next, done: !1 };
  }
  function St(e) {
    const r = ce(e.nextMethod, e.iterator, []);
    if (!q(r)) throw new TypeError("The iterator.next() method must return an object");
    return r;
  }
  class Rt {
    constructor(r, t) {
      this._ongoingPromise = void 0, this._isFinished = !1, this._reader = r, this._preventCancel = t;
    }
    next() {
      const r = () => this._nextSteps();
      return this._ongoingPromise = this._ongoingPromise ? U(this._ongoingPromise, r, r) : r(), this._ongoingPromise;
    }
    return(r) {
      const t = () => this._returnSteps(r);
      return this._ongoingPromise ? U(this._ongoingPromise, t, t) : t();
    }
    _nextSteps() {
      if (this._isFinished) return Promise.resolve({ value: void 0, done: !0 });
      const r = this._reader;
      let t, o;
      const n = j((s, a) => {
        t = s, o = a;
      });
      return We(r, { _chunkSteps: (s) => {
        this._ongoingPromise = void 0, ue(() => t({ value: s, done: !1 }));
      }, _closeSteps: () => {
        this._ongoingPromise = void 0, this._isFinished = !0, X(r), t({ value: void 0, done: !0 });
      }, _errorSteps: (s) => {
        this._ongoingPromise = void 0, this._isFinished = !0, X(r), o(s);
      } }), n;
    }
    _returnSteps(r) {
      if (this._isFinished) return Promise.resolve({ value: r, done: !0 });
      this._isFinished = !0;
      const t = this._reader;
      if (!this._preventCancel) {
        const o = Rr(t, r);
        return X(t), U(o, () => ({ value: r, done: !0 }));
      }
      return X(t), v({ value: r, done: !0 });
    }
  }
  const Tt = { next() {
    return Pt(this) ? this._asyncIteratorImpl.next() : d(Ct("next"));
  }, return(e) {
    return Pt(this) ? this._asyncIteratorImpl.return(e) : d(Ct("return"));
  }, [ze]() {
    return this;
  } };
  function Pt(e) {
    if (!q(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return !1;
    try {
      return e._asyncIteratorImpl instanceof Rt;
    } catch {
      return !1;
    }
  }
  function Ct(e) {
    return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
  }
  Object.defineProperty(Tt, ze, { enumerable: !1 });
  const qt = Number.isNaN || function(e) {
    return e != e;
  };
  function Et(e) {
    const r = gt(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
    return new Uint8Array(r);
  }
  function Br(e) {
    const r = e._queue.shift();
    return e._queueTotalSize -= r.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), r.value;
  }
  function zr(e, r, t) {
    if (typeof (o = t) != "number" || qt(o) || o < 0 || t === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
    var o;
    e._queue.push({ value: r, size: t }), e._queueTotalSize += t;
  }
  function oe(e) {
    e._queue = new L(), e._queueTotalSize = 0;
  }
  function Ot(e) {
    return e === DataView;
  }
  class he {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    get view() {
      if (!Fr(this)) throw Dr("view");
      return this._view;
    }
    respond(r) {
      if (!Fr(this)) throw Dr("respond");
      if (J(r, 1, "respond"), r = Er(r, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
      if (fe(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
      Xe(this._associatedReadableByteStreamController, r);
    }
    respondWithNewView(r) {
      if (!Fr(this)) throw Dr("respondWithNewView");
      if (J(r, 1, "respondWithNewView"), !ArrayBuffer.isView(r)) throw new TypeError("You can only respond with array buffer views");
      if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
      if (fe(r.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
      Je(this._associatedReadableByteStreamController, r);
    }
  }
  Object.defineProperties(he.prototype, { respond: { enumerable: !0 }, respondWithNewView: { enumerable: !0 }, view: { enumerable: !0 } }), p(he.prototype.respond, "respond"), p(he.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(he.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: !0 });
  class K {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    get byobRequest() {
      if (!be(this)) throw Ie("byobRequest");
      return Mr(this);
    }
    get desiredSize() {
      if (!be(this)) throw Ie("desiredSize");
      return $t(this);
    }
    close() {
      if (!be(this)) throw Ie("close");
      if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
      const r = this._controlledReadableByteStream._state;
      if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be closed`);
      Fe(this);
    }
    enqueue(r) {
      if (!be(this)) throw Ie("enqueue");
      if (J(r, 1, "enqueue"), !ArrayBuffer.isView(r)) throw new TypeError("chunk must be an array buffer view");
      if (r.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
      if (r.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
      if (this._closeRequested) throw new TypeError("stream is closed or draining");
      const t = this._controlledReadableByteStream._state;
      if (t !== "readable") throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be enqueued to`);
      Ge(this, r);
    }
    error(r = void 0) {
      if (!be(this)) throw Ie("error");
      M(this, r);
    }
    [vr](r) {
      jt(this), oe(this);
      const t = this._cancelAlgorithm(r);
      return Ue(this), t;
    }
    [wr](r) {
      const t = this._controlledReadableByteStream;
      if (this._queueTotalSize > 0) return void Lt(this, r);
      const o = this._autoAllocateChunkSize;
      if (o !== void 0) {
        let n;
        try {
          n = new ArrayBuffer(o);
        } catch (a) {
          return void r._errorSteps(a);
        }
        const s = { buffer: n, bufferByteLength: o, byteOffset: 0, byteLength: o, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
        this._pendingPullIntos.push(s);
      }
      _t(t, r), _e(this);
    }
    [Sr]() {
      if (this._pendingPullIntos.length > 0) {
        const r = this._pendingPullIntos.peek();
        r.readerType = "none", this._pendingPullIntos = new L(), this._pendingPullIntos.push(r);
      }
    }
  }
  function be(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") && e instanceof K;
  }
  function Fr(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") && e instanceof he;
  }
  function _e(e) {
    if (function(t) {
      const o = t._controlledReadableByteStream;
      return o._state !== "readable" || t._closeRequested || !t._started ? !1 : !!(pt(o) && Ye(o) > 0 || xr(o) && Nt(o) > 0 || $t(t) > 0);
    }(e)) {
      if (e._pulling) return void (e._pullAgain = !0);
      e._pulling = !0, F(e._pullAlgorithm(), () => (e._pulling = !1, e._pullAgain && (e._pullAgain = !1, _e(e)), null), (t) => (M(e, t), null));
    }
  }
  function jt(e) {
    Lr(e), e._pendingPullIntos = new L();
  }
  function Ir(e, r) {
    let t = !1;
    e._state === "closed" && (t = !0);
    const o = kt(r);
    r.readerType === "default" ? jr(e, o, t) : function(n, s, a) {
      const i = n._reader, l = i._readIntoRequests.shift();
      a ? l._closeSteps(s) : l._chunkSteps(s);
    }(e, o, t);
  }
  function kt(e) {
    const r = e.bytesFilled, t = e.elementSize;
    return new e.viewConstructor(e.buffer, e.byteOffset, r / t);
  }
  function Ve(e, r, t, o) {
    e._queue.push({ buffer: r, byteOffset: t, byteLength: o }), e._queueTotalSize += o;
  }
  function Wt(e, r, t, o) {
    let n;
    try {
      n = gt(r, t, t + o);
    } catch (s) {
      throw M(e, s), s;
    }
    Ve(e, n, 0, o);
  }
  function At(e, r) {
    r.bytesFilled > 0 && Wt(e, r.buffer, r.byteOffset, r.bytesFilled), Te(e);
  }
  function Bt(e, r) {
    const t = Math.min(e._queueTotalSize, r.byteLength - r.bytesFilled), o = r.bytesFilled + t;
    let n = t, s = !1;
    const a = o - o % r.elementSize;
    a >= r.minimumFill && (n = a - r.bytesFilled, s = !0);
    const i = e._queue;
    for (; n > 0; ) {
      const l = i.peek(), c = Math.min(n, l.byteLength), f = r.byteOffset + r.bytesFilled;
      yt(r.buffer, f, l.buffer, l.byteOffset, c), l.byteLength === c ? i.shift() : (l.byteOffset += c, l.byteLength -= c), e._queueTotalSize -= c, zt(e, c, r), n -= c;
    }
    return s;
  }
  function zt(e, r, t) {
    t.bytesFilled += r;
  }
  function Ft(e) {
    e._queueTotalSize === 0 && e._closeRequested ? (Ue(e), Ne(e._controlledReadableByteStream)) : _e(e);
  }
  function Lr(e) {
    e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
  }
  function $r(e) {
    for (; e._pendingPullIntos.length > 0; ) {
      if (e._queueTotalSize === 0) return;
      const r = e._pendingPullIntos.peek();
      Bt(e, r) && (Te(e), Ir(e._controlledReadableByteStream, r));
    }
  }
  function Ao(e, r, t, o) {
    const n = e._controlledReadableByteStream, s = r.constructor, a = function(u) {
      return Ot(u) ? 1 : u.BYTES_PER_ELEMENT;
    }(s), { byteOffset: i, byteLength: l } = r, c = t * a;
    let f;
    try {
      f = de(r.buffer);
    } catch (u) {
      return void o._errorSteps(u);
    }
    const y = { buffer: f, bufferByteLength: f.byteLength, byteOffset: i, byteLength: l, bytesFilled: 0, minimumFill: c, elementSize: a, viewConstructor: s, readerType: "byob" };
    if (e._pendingPullIntos.length > 0) return e._pendingPullIntos.push(y), void xt(n, o);
    if (n._state !== "closed") {
      if (e._queueTotalSize > 0) {
        if (Bt(e, y)) {
          const u = kt(y);
          return Ft(e), void o._chunkSteps(u);
        }
        if (e._closeRequested) {
          const u = new TypeError("Insufficient bytes to fill elements in the given buffer");
          return M(e, u), void o._errorSteps(u);
        }
      }
      e._pendingPullIntos.push(y), xt(n, o), _e(e);
    } else {
      const u = new s(y.buffer, y.byteOffset, 0);
      o._closeSteps(u);
    }
  }
  function It(e, r) {
    const t = e._pendingPullIntos.peek();
    Lr(e), e._controlledReadableByteStream._state === "closed" ? function(o, n) {
      n.readerType === "none" && Te(o);
      const s = o._controlledReadableByteStream;
      if (xr(s)) for (; Nt(s) > 0; ) Ir(s, Te(o));
    }(e, t) : function(o, n, s) {
      if (zt(0, n, s), s.readerType === "none") return At(o, s), void $r(o);
      if (s.bytesFilled < s.minimumFill) return;
      Te(o);
      const a = s.bytesFilled % s.elementSize;
      if (a > 0) {
        const i = s.byteOffset + s.bytesFilled;
        Wt(o, s.buffer, i - a, a);
      }
      s.bytesFilled -= a, Ir(o._controlledReadableByteStream, s), $r(o);
    }(e, r, t), _e(e);
  }
  function Te(e) {
    return e._pendingPullIntos.shift();
  }
  function Ue(e) {
    e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
  }
  function Fe(e) {
    const r = e._controlledReadableByteStream;
    if (!e._closeRequested && r._state === "readable") if (e._queueTotalSize > 0) e._closeRequested = !0;
    else {
      if (e._pendingPullIntos.length > 0) {
        const t = e._pendingPullIntos.peek();
        if (t.bytesFilled % t.elementSize != 0) {
          const o = new TypeError("Insufficient bytes to fill elements in the given buffer");
          throw M(e, o), o;
        }
      }
      Ue(e), Ne(r);
    }
  }
  function Ge(e, r) {
    const t = e._controlledReadableByteStream;
    if (e._closeRequested || t._state !== "readable") return;
    const { buffer: o, byteOffset: n, byteLength: s } = r;
    if (fe(o)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
    const a = de(o);
    if (e._pendingPullIntos.length > 0) {
      const i = e._pendingPullIntos.peek();
      if (fe(i.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
      Lr(e), i.buffer = de(i.buffer), i.readerType === "none" && At(e, i);
    }
    pt(t) ? (function(i) {
      const l = i._controlledReadableByteStream._reader;
      for (; l._readRequests.length > 0; ) {
        if (i._queueTotalSize === 0) return;
        Lt(i, l._readRequests.shift());
      }
    }(e), Ye(t) === 0 ? Ve(e, a, n, s) : (e._pendingPullIntos.length > 0 && Te(e), jr(t, new Uint8Array(a, n, s), !1))) : xr(t) ? (Ve(e, a, n, s), $r(e)) : Ve(e, a, n, s), _e(e);
  }
  function M(e, r) {
    const t = e._controlledReadableByteStream;
    t._state === "readable" && (jt(e), oe(e), Ue(e), bo(t, r));
  }
  function Lt(e, r) {
    const t = e._queue.shift();
    e._queueTotalSize -= t.byteLength, Ft(e);
    const o = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    r._chunkSteps(o);
  }
  function Mr(e) {
    if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
      const r = e._pendingPullIntos.peek(), t = new Uint8Array(r.buffer, r.byteOffset + r.bytesFilled, r.byteLength - r.bytesFilled), o = Object.create(he.prototype);
      (function(n, s, a) {
        n._associatedReadableByteStreamController = s, n._view = a;
      })(o, e, t), e._byobRequest = o;
    }
    return e._byobRequest;
  }
  function $t(e) {
    const r = e._controlledReadableByteStream._state;
    return r === "errored" ? null : r === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
  }
  function Xe(e, r) {
    const t = e._pendingPullIntos.peek();
    if (e._controlledReadableByteStream._state === "closed") {
      if (r !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
    } else {
      if (r === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
      if (t.bytesFilled + r > t.byteLength) throw new RangeError("bytesWritten out of range");
    }
    t.buffer = de(t.buffer), It(e, r);
  }
  function Je(e, r) {
    const t = e._pendingPullIntos.peek();
    if (e._controlledReadableByteStream._state === "closed") {
      if (r.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
    } else if (r.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
    if (t.byteOffset + t.bytesFilled !== r.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
    if (t.bufferByteLength !== r.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
    if (t.bytesFilled + r.byteLength > t.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
    const o = r.byteLength;
    t.buffer = de(r.buffer), It(e, o);
  }
  function Mt(e, r, t, o, n, s, a) {
    r._controlledReadableByteStream = e, r._pullAgain = !1, r._pulling = !1, r._byobRequest = null, r._queue = r._queueTotalSize = void 0, oe(r), r._closeRequested = !1, r._started = !1, r._strategyHWM = s, r._pullAlgorithm = o, r._cancelAlgorithm = n, r._autoAllocateChunkSize = a, r._pendingPullIntos = new L(), e._readableStreamController = r, F(v(t()), () => (r._started = !0, _e(r), null), (i) => (M(r, i), null));
  }
  function Dr(e) {
    return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
  }
  function Ie(e) {
    return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
  }
  function Bo(e, r) {
    if ((e = `${e}`) != "byob") throw new TypeError(`${r} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
    return e;
  }
  function Dt(e) {
    return new ne(e);
  }
  function xt(e, r) {
    e._reader._readIntoRequests.push(r);
  }
  function Nt(e) {
    return e._reader._readIntoRequests.length;
  }
  function xr(e) {
    const r = e._reader;
    return r !== void 0 && !!pe(r);
  }
  Object.defineProperties(K.prototype, { close: { enumerable: !0 }, enqueue: { enumerable: !0 }, error: { enumerable: !0 }, byobRequest: { enumerable: !0 }, desiredSize: { enumerable: !0 } }), p(K.prototype.close, "close"), p(K.prototype.enqueue, "enqueue"), p(K.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(K.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: !0 });
  class ne {
    constructor(r) {
      if (J(r, 1, "ReadableStreamBYOBReader"), Or(r, "First parameter"), se(r)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
      if (!be(r._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
      ut(this, r), this._readIntoRequests = new L();
    }
    get closed() {
      return pe(this) ? this._closedPromise : d(Ke("closed"));
    }
    cancel(r = void 0) {
      return pe(this) ? this._ownerReadableStream === void 0 ? d(Qe("cancel")) : Rr(this, r) : d(Ke("cancel"));
    }
    read(r, t = {}) {
      if (!pe(this)) return d(Ke("read"));
      if (!ArrayBuffer.isView(r)) return d(new TypeError("view must be an array buffer view"));
      if (r.byteLength === 0) return d(new TypeError("view must have non-zero byteLength"));
      if (r.buffer.byteLength === 0) return d(new TypeError("view's buffer must have non-zero byteLength"));
      if (fe(r.buffer)) return d(new TypeError("view's buffer has been detached"));
      let o;
      try {
        o = function(l, c) {
          var f;
          return Q(l, c), { min: Er((f = l == null ? void 0 : l.min) !== null && f !== void 0 ? f : 1, `${c} has member 'min' that`) };
        }(t, "options");
      } catch (l) {
        return d(l);
      }
      const n = o.min;
      if (n === 0) return d(new TypeError("options.min must be greater than 0"));
      if (function(l) {
        return Ot(l.constructor);
      }(r)) {
        if (n > r.byteLength) return d(new RangeError("options.min must be less than or equal to view's byteLength"));
      } else if (n > r.length) return d(new RangeError("options.min must be less than or equal to view's length"));
      if (this._ownerReadableStream === void 0) return d(Qe("read from"));
      let s, a;
      const i = j((l, c) => {
        s = l, a = c;
      });
      return Qt(this, r, n, { _chunkSteps: (l) => s({ value: l, done: !1 }), _closeSteps: (l) => s({ value: l, done: !0 }), _errorSteps: (l) => a(l) }), i;
    }
    releaseLock() {
      if (!pe(this)) throw Ke("releaseLock");
      this._ownerReadableStream !== void 0 && function(r) {
        X(r);
        const t = new TypeError("Reader was released");
        Yt(r, t);
      }(this);
    }
  }
  function pe(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") && e instanceof ne;
  }
  function Qt(e, r, t, o) {
    const n = e._ownerReadableStream;
    n._disturbed = !0, n._state === "errored" ? o._errorSteps(n._storedError) : Ao(n._readableStreamController, r, t, o);
  }
  function Yt(e, r) {
    const t = e._readIntoRequests;
    e._readIntoRequests = new L(), t.forEach((o) => {
      o._errorSteps(r);
    });
  }
  function Ke(e) {
    return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
  }
  function Le(e, r) {
    const { highWaterMark: t } = e;
    if (t === void 0) return r;
    if (qt(t) || t < 0) throw new RangeError("Invalid highWaterMark");
    return t;
  }
  function Ze(e) {
    const { size: r } = e;
    return r || (() => 1);
  }
  function er(e, r) {
    Q(e, r);
    const t = e == null ? void 0 : e.highWaterMark, o = e == null ? void 0 : e.size;
    return { highWaterMark: t === void 0 ? void 0 : qr(t), size: o === void 0 ? void 0 : zo(o, `${r} has member 'size' that`) };
  }
  function zo(e, r) {
    return $(e, r), (t) => qr(e(t));
  }
  function Fo(e, r, t) {
    return $(e, t), (o) => G(e, r, [o]);
  }
  function Io(e, r, t) {
    return $(e, t), () => G(e, r, []);
  }
  function Lo(e, r, t) {
    return $(e, t), (o) => ce(e, r, [o]);
  }
  function $o(e, r, t) {
    return $(e, t), (o, n) => G(e, r, [o, n]);
  }
  function Ht(e, r) {
    if (!Pe(e)) throw new TypeError(`${r} is not a WritableStream.`);
  }
  Object.defineProperties(ne.prototype, { cancel: { enumerable: !0 }, read: { enumerable: !0 }, releaseLock: { enumerable: !0 }, closed: { enumerable: !0 } }), p(ne.prototype.cancel, "cancel"), p(ne.prototype.read, "read"), p(ne.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ne.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: !0 });
  const Mo = typeof AbortController == "function";
  class ie {
    constructor(r = {}, t = {}) {
      r === void 0 ? r = null : ht(r, "First parameter");
      const o = er(t, "Second parameter"), n = function(a, i) {
        Q(a, i);
        const l = a == null ? void 0 : a.abort, c = a == null ? void 0 : a.close, f = a == null ? void 0 : a.start, y = a == null ? void 0 : a.type, u = a == null ? void 0 : a.write;
        return { abort: l === void 0 ? void 0 : Fo(l, a, `${i} has member 'abort' that`), close: c === void 0 ? void 0 : Io(c, a, `${i} has member 'close' that`), start: f === void 0 ? void 0 : Lo(f, a, `${i} has member 'start' that`), write: u === void 0 ? void 0 : $o(u, a, `${i} has member 'write' that`), type: y };
      }(r, "First parameter");
      if (Ut(this), n.type !== void 0) throw new RangeError("Invalid type is specified");
      const s = Ze(o);
      (function(a, i, l, c) {
        const f = Object.create(qe.prototype);
        let y, u, h, E;
        y = i.start !== void 0 ? () => i.start(f) : () => {
        }, u = i.write !== void 0 ? (O) => i.write(O, f) : () => v(void 0), h = i.close !== void 0 ? () => i.close() : () => v(void 0), E = i.abort !== void 0 ? (O) => i.abort(O) : () => v(void 0), ro(a, f, y, u, h, E, l, c);
      })(this, n, Le(o, 1), s);
    }
    get locked() {
      if (!Pe(this)) throw ir("locked");
      return Ce(this);
    }
    abort(r = void 0) {
      return Pe(this) ? Ce(this) ? d(new TypeError("Cannot abort a stream that already has a writer")) : rr(this, r) : d(ir("abort"));
    }
    close() {
      return Pe(this) ? Ce(this) ? d(new TypeError("Cannot close a stream that already has a writer")) : Y(this) ? d(new TypeError("Cannot close an already-closing stream")) : Gt(this) : d(ir("close"));
    }
    getWriter() {
      if (!Pe(this)) throw ir("getWriter");
      return Vt(this);
    }
  }
  function Vt(e) {
    return new Z(e);
  }
  function Ut(e) {
    e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new L(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = !1;
  }
  function Pe(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_writableStreamController") && e instanceof ie;
  }
  function Ce(e) {
    return e._writer !== void 0;
  }
  function rr(e, r) {
    var t;
    if (e._state === "closed" || e._state === "errored") return v(void 0);
    e._writableStreamController._abortReason = r, (t = e._writableStreamController._abortController) === null || t === void 0 || t.abort(r);
    const o = e._state;
    if (o === "closed" || o === "errored") return v(void 0);
    if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
    let n = !1;
    o === "erroring" && (n = !0, r = void 0);
    const s = j((a, i) => {
      e._pendingAbortRequest = { _promise: void 0, _resolve: a, _reject: i, _reason: r, _wasAlreadyErroring: n };
    });
    return e._pendingAbortRequest._promise = s, n || Qr(e, r), s;
  }
  function Gt(e) {
    const r = e._state;
    if (r === "closed" || r === "errored") return d(new TypeError(`The stream (in ${r} state) is not in the writable state and cannot be closed`));
    const t = j((s, a) => {
      const i = { _resolve: s, _reject: a };
      e._closeRequest = i;
    }), o = e._writer;
    var n;
    return o !== void 0 && e._backpressure && r === "writable" && Kr(o), zr(n = e._writableStreamController, eo, 0), nr(n), t;
  }
  function Nr(e, r) {
    e._state !== "writable" ? Yr(e) : Qr(e, r);
  }
  function Qr(e, r) {
    const t = e._writableStreamController;
    e._state = "erroring", e._storedError = r;
    const o = e._writer;
    o !== void 0 && Jt(o, r), !function(n) {
      return !(n._inFlightWriteRequest === void 0 && n._inFlightCloseRequest === void 0);
    }(e) && t._started && Yr(e);
  }
  function Yr(e) {
    e._state = "errored", e._writableStreamController[lt]();
    const r = e._storedError;
    if (e._writeRequests.forEach((o) => {
      o._reject(r);
    }), e._writeRequests = new L(), e._pendingAbortRequest === void 0) return void tr(e);
    const t = e._pendingAbortRequest;
    if (e._pendingAbortRequest = void 0, t._wasAlreadyErroring) return t._reject(r), void tr(e);
    F(e._writableStreamController[st](t._reason), () => (t._resolve(), tr(e), null), (o) => (t._reject(o), tr(e), null));
  }
  function Y(e) {
    return e._closeRequest !== void 0 || e._inFlightCloseRequest !== void 0;
  }
  function tr(e) {
    e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
    const r = e._writer;
    r !== void 0 && Xr(r, e._storedError);
  }
  function Hr(e, r) {
    const t = e._writer;
    t !== void 0 && r !== e._backpressure && (r ? function(o) {
      sr(o);
    }(t) : Kr(t)), e._backpressure = r;
  }
  Object.defineProperties(ie.prototype, { abort: { enumerable: !0 }, close: { enumerable: !0 }, getWriter: { enumerable: !0 }, locked: { enumerable: !0 } }), p(ie.prototype.abort, "abort"), p(ie.prototype.close, "close"), p(ie.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ie.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: !0 });
  class Z {
    constructor(r) {
      if (J(r, 1, "WritableStreamDefaultWriter"), Ht(r, "First parameter"), Ce(r)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
      this._ownerWritableStream = r, r._writer = this;
      const t = r._state;
      if (t === "writable") !Y(r) && r._backpressure ? sr(this) : ao(this), ar(this);
      else if (t === "erroring") Jr(this, r._storedError), ar(this);
      else if (t === "closed") ao(this), ar(o = this), io(o);
      else {
        const n = r._storedError;
        Jr(this, n), no(this, n);
      }
      var o;
    }
    get closed() {
      return me(this) ? this._closedPromise : d(ye("closed"));
    }
    get desiredSize() {
      if (!me(this)) throw ye("desiredSize");
      if (this._ownerWritableStream === void 0) throw Me("desiredSize");
      return function(r) {
        const t = r._ownerWritableStream, o = t._state;
        return o === "errored" || o === "erroring" ? null : o === "closed" ? 0 : to(t._writableStreamController);
      }(this);
    }
    get ready() {
      return me(this) ? this._readyPromise : d(ye("ready"));
    }
    abort(r = void 0) {
      return me(this) ? this._ownerWritableStream === void 0 ? d(Me("abort")) : function(t, o) {
        return rr(t._ownerWritableStream, o);
      }(this, r) : d(ye("abort"));
    }
    close() {
      if (!me(this)) return d(ye("close"));
      const r = this._ownerWritableStream;
      return r === void 0 ? d(Me("close")) : Y(r) ? d(new TypeError("Cannot close an already-closing stream")) : Xt(this);
    }
    releaseLock() {
      if (!me(this)) throw ye("releaseLock");
      this._ownerWritableStream !== void 0 && Kt(this);
    }
    write(r = void 0) {
      return me(this) ? this._ownerWritableStream === void 0 ? d(Me("write to")) : Zt(this, r) : d(ye("write"));
    }
  }
  function me(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") && e instanceof Z;
  }
  function Xt(e) {
    return Gt(e._ownerWritableStream);
  }
  function Do(e, r) {
    e._closedPromiseState === "pending" ? Xr(e, r) : function(t, o) {
      no(t, o);
    }(e, r);
  }
  function Jt(e, r) {
    e._readyPromiseState === "pending" ? so(e, r) : function(t, o) {
      Jr(t, o);
    }(e, r);
  }
  function Kt(e) {
    const r = e._ownerWritableStream, t = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
    Jt(e, t), Do(e, t), r._writer = void 0, e._ownerWritableStream = void 0;
  }
  function Zt(e, r) {
    const t = e._ownerWritableStream, o = t._writableStreamController, n = function(i, l) {
      try {
        return i._strategySizeAlgorithm(l);
      } catch (c) {
        return $e(i, c), 1;
      }
    }(o, r);
    if (t !== e._ownerWritableStream) return d(Me("write to"));
    const s = t._state;
    if (s === "errored") return d(t._storedError);
    if (Y(t) || s === "closed") return d(new TypeError("The stream is closing or closed and cannot be written to"));
    if (s === "erroring") return d(t._storedError);
    const a = function(i) {
      return j((l, c) => {
        const f = { _resolve: l, _reject: c };
        i._writeRequests.push(f);
      });
    }(t);
    return function(i, l, c) {
      try {
        zr(i, l, c);
      } catch (y) {
        return void $e(i, y);
      }
      const f = i._controlledWritableStream;
      !Y(f) && f._state === "writable" && Hr(f, Ur(i)), nr(i);
    }(o, r, n), a;
  }
  Object.defineProperties(Z.prototype, { abort: { enumerable: !0 }, close: { enumerable: !0 }, releaseLock: { enumerable: !0 }, write: { enumerable: !0 }, closed: { enumerable: !0 }, desiredSize: { enumerable: !0 }, ready: { enumerable: !0 } }), p(Z.prototype.abort, "abort"), p(Z.prototype.close, "close"), p(Z.prototype.releaseLock, "releaseLock"), p(Z.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Z.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: !0 });
  const eo = {};
  class qe {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    get abortReason() {
      if (!Vr(this)) throw Gr("abortReason");
      return this._abortReason;
    }
    get signal() {
      if (!Vr(this)) throw Gr("signal");
      if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
      return this._abortController.signal;
    }
    error(r = void 0) {
      if (!Vr(this)) throw Gr("error");
      this._controlledWritableStream._state === "writable" && oo(this, r);
    }
    [st](r) {
      const t = this._abortAlgorithm(r);
      return or(this), t;
    }
    [lt]() {
      oe(this);
    }
  }
  function Vr(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") && e instanceof qe;
  }
  function ro(e, r, t, o, n, s, a, i) {
    r._controlledWritableStream = e, e._writableStreamController = r, r._queue = void 0, r._queueTotalSize = void 0, oe(r), r._abortReason = void 0, r._abortController = function() {
      if (Mo) return new AbortController();
    }(), r._started = !1, r._strategySizeAlgorithm = i, r._strategyHWM = a, r._writeAlgorithm = o, r._closeAlgorithm = n, r._abortAlgorithm = s;
    const l = Ur(r);
    Hr(e, l), F(v(t()), () => (r._started = !0, nr(r), null), (c) => (r._started = !0, Nr(e, c), null));
  }
  function or(e) {
    e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
  }
  function to(e) {
    return e._strategyHWM - e._queueTotalSize;
  }
  function nr(e) {
    const r = e._controlledWritableStream;
    if (!e._started || r._inFlightWriteRequest !== void 0) return;
    if (r._state === "erroring") return void Yr(r);
    if (e._queue.length === 0) return;
    const t = e._queue.peek().value;
    t === eo ? function(o) {
      const n = o._controlledWritableStream;
      (function(a) {
        a._inFlightCloseRequest = a._closeRequest, a._closeRequest = void 0;
      })(n), Br(o);
      const s = o._closeAlgorithm();
      or(o), F(s, () => (function(a) {
        a._inFlightCloseRequest._resolve(void 0), a._inFlightCloseRequest = void 0, a._state === "erroring" && (a._storedError = void 0, a._pendingAbortRequest !== void 0 && (a._pendingAbortRequest._resolve(), a._pendingAbortRequest = void 0)), a._state = "closed";
        const i = a._writer;
        i !== void 0 && io(i);
      }(n), null), (a) => (function(i, l) {
        i._inFlightCloseRequest._reject(l), i._inFlightCloseRequest = void 0, i._pendingAbortRequest !== void 0 && (i._pendingAbortRequest._reject(l), i._pendingAbortRequest = void 0), Nr(i, l);
      }(n, a), null));
    }(e) : function(o, n) {
      const s = o._controlledWritableStream;
      (function(i) {
        i._inFlightWriteRequest = i._writeRequests.shift();
      })(s);
      const a = o._writeAlgorithm(n);
      F(a, () => {
        (function(l) {
          l._inFlightWriteRequest._resolve(void 0), l._inFlightWriteRequest = void 0;
        })(s);
        const i = s._state;
        if (Br(o), !Y(s) && i === "writable") {
          const l = Ur(o);
          Hr(s, l);
        }
        return nr(o), null;
      }, (i) => (s._state === "writable" && or(o), function(l, c) {
        l._inFlightWriteRequest._reject(c), l._inFlightWriteRequest = void 0, Nr(l, c);
      }(s, i), null));
    }(e, t);
  }
  function $e(e, r) {
    e._controlledWritableStream._state === "writable" && oo(e, r);
  }
  function Ur(e) {
    return to(e) <= 0;
  }
  function oo(e, r) {
    const t = e._controlledWritableStream;
    or(e), Qr(t, r);
  }
  function ir(e) {
    return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
  }
  function Gr(e) {
    return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
  }
  function ye(e) {
    return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
  }
  function Me(e) {
    return new TypeError("Cannot " + e + " a stream using a released writer");
  }
  function ar(e) {
    e._closedPromise = j((r, t) => {
      e._closedPromise_resolve = r, e._closedPromise_reject = t, e._closedPromiseState = "pending";
    });
  }
  function no(e, r) {
    ar(e), Xr(e, r);
  }
  function Xr(e, r) {
    e._closedPromise_reject !== void 0 && (Se(e._closedPromise), e._closedPromise_reject(r), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
  }
  function io(e) {
    e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
  }
  function sr(e) {
    e._readyPromise = j((r, t) => {
      e._readyPromise_resolve = r, e._readyPromise_reject = t;
    }), e._readyPromiseState = "pending";
  }
  function Jr(e, r) {
    sr(e), so(e, r);
  }
  function ao(e) {
    sr(e), Kr(e);
  }
  function so(e, r) {
    e._readyPromise_reject !== void 0 && (Se(e._readyPromise), e._readyPromise_reject(r), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
  }
  function Kr(e) {
    e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
  }
  Object.defineProperties(qe.prototype, { abortReason: { enumerable: !0 }, signal: { enumerable: !0 }, error: { enumerable: !0 } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(qe.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: !0 });
  const Zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof qo < "u" ? qo : void 0, xo = function() {
    const e = Zr == null ? void 0 : Zr.DOMException;
    return function(r) {
      if (typeof r != "function" && typeof r != "object" || r.name !== "DOMException") return !1;
      try {
        return new r(), !0;
      } catch {
        return !1;
      }
    }(e) ? e : void 0;
  }() || function() {
    const e = function(r, t) {
      this.message = r || "", this.name = t || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    };
    return p(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: !0, configurable: !0 }), e;
  }();
  function lo(e, r, t, o, n, s) {
    const a = Re(e), i = Vt(r);
    e._disturbed = !0;
    let l = !1, c = v(void 0);
    return j((f, y) => {
      let u;
      if (s !== void 0) {
        if (u = () => {
          const b = s.reason !== void 0 ? s.reason : new xo("Aborted", "AbortError"), C = [];
          o || C.push(() => r._state === "writable" ? rr(r, b) : v(void 0)), n || C.push(() => e._state === "readable" ? x(e, b) : v(void 0)), R(() => Promise.all(C.map((w) => w())), !0, b);
        }, s.aborted) return void u();
        s.addEventListener("abort", u);
      }
      var h, E, O;
      if (z(e, a._closedPromise, (b) => (o ? g(!0, b) : R(() => rr(r, b), !0, b), null)), z(r, i._closedPromise, (b) => (n ? g(!0, b) : R(() => x(e, b), !0, b), null)), h = e, E = a._closedPromise, O = () => (t ? g() : R(() => function(b) {
        const C = b._ownerWritableStream, w = C._state;
        return Y(C) || w === "closed" ? v(void 0) : w === "errored" ? d(C._storedError) : Xt(b);
      }(i)), null), h._state === "closed" ? O() : yr(E, O), Y(r) || r._state === "closed") {
        const b = new TypeError("the destination writable stream closed before all data could be piped to it");
        n ? g(!0, b) : R(() => x(e, b), !0, b);
      }
      function B() {
        const b = c;
        return N(c, () => b !== c ? B() : void 0);
      }
      function z(b, C, w) {
        b._state === "errored" ? w(b._storedError) : gr(C, w);
      }
      function R(b, C, w) {
        function S() {
          return F(b(), () => A(C, w), (_) => A(!0, _)), null;
        }
        l || (l = !0, r._state !== "writable" || Y(r) ? S() : yr(B(), S));
      }
      function g(b, C) {
        l || (l = !0, r._state !== "writable" || Y(r) ? A(b, C) : yr(B(), () => A(b, C)));
      }
      function A(b, C) {
        return Kt(i), X(a), s !== void 0 && s.removeEventListener("abort", u), b ? y(C) : f(void 0), null;
      }
      Se(j((b, C) => {
        (function w(S) {
          S ? b() : N(l ? v(!0) : N(i._readyPromise, () => j((_, T) => {
            We(a, { _chunkSteps: (m) => {
              c = N(Zt(i, m), void 0, H), _(!1);
            }, _closeSteps: () => _(!0), _errorSteps: T });
          })), w, C);
        })(!1);
      }));
    });
  }
  class ee {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    get desiredSize() {
      if (!lr(this)) throw cr("desiredSize");
      return et(this);
    }
    close() {
      if (!lr(this)) throw cr("close");
      if (!Oe(this)) throw new TypeError("The stream is not in a state that permits close");
      ge(this);
    }
    enqueue(r = void 0) {
      if (!lr(this)) throw cr("enqueue");
      if (!Oe(this)) throw new TypeError("The stream is not in a state that permits enqueue");
      return Ee(this, r);
    }
    error(r = void 0) {
      if (!lr(this)) throw cr("error");
      D(this, r);
    }
    [vr](r) {
      oe(this);
      const t = this._cancelAlgorithm(r);
      return ur(this), t;
    }
    [wr](r) {
      const t = this._controlledReadableStream;
      if (this._queue.length > 0) {
        const o = Br(this);
        this._closeRequested && this._queue.length === 0 ? (ur(this), Ne(t)) : De(this), r._chunkSteps(o);
      } else _t(t, r), De(this);
    }
    [Sr]() {
    }
  }
  function lr(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") && e instanceof ee;
  }
  function De(e) {
    if (uo(e)) {
      if (e._pulling) return void (e._pullAgain = !0);
      e._pulling = !0, F(e._pullAlgorithm(), () => (e._pulling = !1, e._pullAgain && (e._pullAgain = !1, De(e)), null), (r) => (D(e, r), null));
    }
  }
  function uo(e) {
    const r = e._controlledReadableStream;
    return !Oe(e) || !e._started ? !1 : se(r) && Ye(r) > 0 ? !0 : et(e) > 0;
  }
  function ur(e) {
    e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
  }
  function ge(e) {
    if (!Oe(e)) return;
    const r = e._controlledReadableStream;
    e._closeRequested = !0, e._queue.length === 0 && (ur(e), Ne(r));
  }
  function Ee(e, r) {
    if (!Oe(e)) return;
    const t = e._controlledReadableStream;
    if (se(t) && Ye(t) > 0) jr(t, r, !1);
    else {
      let o;
      try {
        o = e._strategySizeAlgorithm(r);
      } catch (n) {
        throw D(e, n), n;
      }
      try {
        zr(e, r, o);
      } catch (n) {
        throw D(e, n), n;
      }
    }
    De(e);
  }
  function D(e, r) {
    const t = e._controlledReadableStream;
    t._state === "readable" && (oe(e), ur(e), bo(t, r));
  }
  function et(e) {
    const r = e._controlledReadableStream._state;
    return r === "errored" ? null : r === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
  }
  function Oe(e) {
    const r = e._controlledReadableStream._state;
    return !e._closeRequested && r === "readable";
  }
  function co(e, r, t, o, n, s, a) {
    r._controlledReadableStream = e, r._queue = void 0, r._queueTotalSize = void 0, oe(r), r._started = !1, r._closeRequested = !1, r._pullAgain = !1, r._pulling = !1, r._strategySizeAlgorithm = a, r._strategyHWM = s, r._pullAlgorithm = o, r._cancelAlgorithm = n, e._readableStreamController = r, F(v(t()), () => (r._started = !0, De(r), null), (i) => (D(r, i), null));
  }
  function cr(e) {
    return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
  }
  function No(e, r) {
    return be(e._readableStreamController) ? function(t) {
      let o, n, s, a, i, l = Re(t), c = !1, f = !1, y = !1, u = !1, h = !1;
      const E = j((w) => {
        i = w;
      });
      function O(w) {
        gr(w._closedPromise, (S) => (w !== l || (M(s._readableStreamController, S), M(a._readableStreamController, S), u && h || i(void 0)), null));
      }
      function B() {
        pe(l) && (X(l), l = Re(t), O(l)), We(l, { _chunkSteps: (w) => {
          ue(() => {
            f = !1, y = !1;
            const S = w;
            let _ = w;
            if (!u && !h) try {
              _ = Et(w);
            } catch (T) {
              return M(s._readableStreamController, T), M(a._readableStreamController, T), void i(x(t, T));
            }
            u || Ge(s._readableStreamController, S), h || Ge(a._readableStreamController, _), c = !1, f ? R() : y && g();
          });
        }, _closeSteps: () => {
          c = !1, u || Fe(s._readableStreamController), h || Fe(a._readableStreamController), s._readableStreamController._pendingPullIntos.length > 0 && Xe(s._readableStreamController, 0), a._readableStreamController._pendingPullIntos.length > 0 && Xe(a._readableStreamController, 0), u && h || i(void 0);
        }, _errorSteps: () => {
          c = !1;
        } });
      }
      function z(w, S) {
        te(l) && (X(l), l = Dt(t), O(l));
        const _ = S ? a : s, T = S ? s : a;
        Qt(l, w, 1, { _chunkSteps: (m) => {
          ue(() => {
            f = !1, y = !1;
            const P = S ? h : u;
            if (S ? u : h) P || Je(_._readableStreamController, m);
            else {
              let I;
              try {
                I = Et(m);
              } catch (k) {
                return M(_._readableStreamController, k), M(T._readableStreamController, k), void i(x(t, k));
              }
              P || Je(_._readableStreamController, m), Ge(T._readableStreamController, I);
            }
            c = !1, f ? R() : y && g();
          });
        }, _closeSteps: (m) => {
          c = !1;
          const P = S ? h : u, I = S ? u : h;
          P || Fe(_._readableStreamController), I || Fe(T._readableStreamController), m !== void 0 && (P || Je(_._readableStreamController, m), !I && T._readableStreamController._pendingPullIntos.length > 0 && Xe(T._readableStreamController, 0)), P && I || i(void 0);
        }, _errorSteps: () => {
          c = !1;
        } });
      }
      function R() {
        if (c) return f = !0, v(void 0);
        c = !0;
        const w = Mr(s._readableStreamController);
        return w === null ? B() : z(w._view, !1), v(void 0);
      }
      function g() {
        if (c) return y = !0, v(void 0);
        c = !0;
        const w = Mr(a._readableStreamController);
        return w === null ? B() : z(w._view, !0), v(void 0);
      }
      function A(w) {
        if (u = !0, o = w, h) {
          const S = Ae([o, n]), _ = x(t, S);
          i(_);
        }
        return E;
      }
      function b(w) {
        if (h = !0, n = w, u) {
          const S = Ae([o, n]), _ = x(t, S);
          i(_);
        }
        return E;
      }
      function C() {
      }
      return s = ho(C, R, A), a = ho(C, g, b), O(l), [s, a];
    }(e) : function(t, o) {
      const n = Re(t);
      let s, a, i, l, c, f = !1, y = !1, u = !1, h = !1;
      const E = j((g) => {
        c = g;
      });
      function O() {
        return f ? (y = !0, v(void 0)) : (f = !0, We(n, { _chunkSteps: (g) => {
          ue(() => {
            y = !1;
            const A = g, b = g;
            u || Ee(i._readableStreamController, A), h || Ee(l._readableStreamController, b), f = !1, y && O();
          });
        }, _closeSteps: () => {
          f = !1, u || ge(i._readableStreamController), h || ge(l._readableStreamController), u && h || c(void 0);
        }, _errorSteps: () => {
          f = !1;
        } }), v(void 0));
      }
      function B(g) {
        if (u = !0, s = g, h) {
          const A = Ae([s, a]), b = x(t, A);
          c(b);
        }
        return E;
      }
      function z(g) {
        if (h = !0, a = g, u) {
          const A = Ae([s, a]), b = x(t, A);
          c(b);
        }
        return E;
      }
      function R() {
      }
      return i = xe(R, O, B), l = xe(R, O, z), gr(n._closedPromise, (g) => (D(i._readableStreamController, g), D(l._readableStreamController, g), u && h || c(void 0), null)), [i, l];
    }(e);
  }
  function Qo(e) {
    return q(r = e) && r.getReader !== void 0 ? function(t) {
      let o;
      function n() {
        let a;
        try {
          a = t.read();
        } catch (i) {
          return d(i);
        }
        return U(a, (i) => {
          if (!q(i)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
          if (i.done) ge(o._readableStreamController);
          else {
            const l = i.value;
            Ee(o._readableStreamController, l);
          }
        });
      }
      function s(a) {
        try {
          return v(t.cancel(a));
        } catch (i) {
          return d(i);
        }
      }
      return o = xe(H, n, s, 0), o;
    }(e.getReader()) : function(t) {
      let o;
      const n = wt(t, "async");
      function s() {
        let i;
        try {
          i = St(n);
        } catch (l) {
          return d(l);
        }
        return U(v(i), (l) => {
          if (!q(l)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
          if (l.done) ge(o._readableStreamController);
          else {
            const c = l.value;
            Ee(o._readableStreamController, c);
          }
        });
      }
      function a(i) {
        const l = n.iterator;
        let c;
        try {
          c = Be(l, "return");
        } catch (f) {
          return d(f);
        }
        return c === void 0 ? v(void 0) : U(G(c, l, [i]), (f) => {
          if (!q(f)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
        });
      }
      return o = xe(H, s, a, 0), o;
    }(e);
    var r;
  }
  function Yo(e, r, t) {
    return $(e, t), (o) => G(e, r, [o]);
  }
  function Ho(e, r, t) {
    return $(e, t), (o) => G(e, r, [o]);
  }
  function Vo(e, r, t) {
    return $(e, t), (o) => ce(e, r, [o]);
  }
  function Uo(e, r) {
    if ((e = `${e}`) != "bytes") throw new TypeError(`${r} '${e}' is not a valid enumeration value for ReadableStreamType`);
    return e;
  }
  function fo(e, r) {
    Q(e, r);
    const t = e == null ? void 0 : e.preventAbort, o = e == null ? void 0 : e.preventCancel, n = e == null ? void 0 : e.preventClose, s = e == null ? void 0 : e.signal;
    return s !== void 0 && function(a, i) {
      if (!function(l) {
        if (typeof l != "object" || l === null) return !1;
        try {
          return typeof l.aborted == "boolean";
        } catch {
          return !1;
        }
      }(a)) throw new TypeError(`${i} is not an AbortSignal.`);
    }(s, `${r} has member 'signal' that`), { preventAbort: !!t, preventCancel: !!o, preventClose: !!n, signal: s };
  }
  Object.defineProperties(ee.prototype, { close: { enumerable: !0 }, enqueue: { enumerable: !0 }, error: { enumerable: !0 }, desiredSize: { enumerable: !0 } }), p(ee.prototype.close, "close"), p(ee.prototype.enqueue, "enqueue"), p(ee.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ee.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: !0 });
  class W {
    constructor(r = {}, t = {}) {
      r === void 0 ? r = null : ht(r, "First parameter");
      const o = er(t, "Second parameter"), n = function(s, a) {
        Q(s, a);
        const i = s, l = i == null ? void 0 : i.autoAllocateChunkSize, c = i == null ? void 0 : i.cancel, f = i == null ? void 0 : i.pull, y = i == null ? void 0 : i.start, u = i == null ? void 0 : i.type;
        return { autoAllocateChunkSize: l === void 0 ? void 0 : Er(l, `${a} has member 'autoAllocateChunkSize' that`), cancel: c === void 0 ? void 0 : Yo(c, i, `${a} has member 'cancel' that`), pull: f === void 0 ? void 0 : Ho(f, i, `${a} has member 'pull' that`), start: y === void 0 ? void 0 : Vo(y, i, `${a} has member 'start' that`), type: u === void 0 ? void 0 : Uo(u, `${a} has member 'type' that`) };
      }(r, "First parameter");
      if (rt(this), n.type === "bytes") {
        if (o.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
        (function(s, a, i) {
          const l = Object.create(K.prototype);
          let c, f, y;
          c = a.start !== void 0 ? () => a.start(l) : () => {
          }, f = a.pull !== void 0 ? () => a.pull(l) : () => v(void 0), y = a.cancel !== void 0 ? (h) => a.cancel(h) : () => v(void 0);
          const u = a.autoAllocateChunkSize;
          if (u === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
          Mt(s, l, c, f, y, i, u);
        })(this, n, Le(o, 0));
      } else {
        const s = Ze(o);
        (function(a, i, l, c) {
          const f = Object.create(ee.prototype);
          let y, u, h;
          y = i.start !== void 0 ? () => i.start(f) : () => {
          }, u = i.pull !== void 0 ? () => i.pull(f) : () => v(void 0), h = i.cancel !== void 0 ? (E) => i.cancel(E) : () => v(void 0), co(a, f, y, u, h, l, c);
        })(this, n, Le(o, 1), s);
      }
    }
    get locked() {
      if (!ae(this)) throw ve("locked");
      return se(this);
    }
    cancel(r = void 0) {
      return ae(this) ? se(this) ? d(new TypeError("Cannot cancel a stream that already has a reader")) : x(this, r) : d(ve("cancel"));
    }
    getReader(r = void 0) {
      if (!ae(this)) throw ve("getReader");
      return function(t, o) {
        Q(t, o);
        const n = t == null ? void 0 : t.mode;
        return { mode: n === void 0 ? void 0 : Bo(n, `${o} has member 'mode' that`) };
      }(r, "First parameter").mode === void 0 ? Re(this) : Dt(this);
    }
    pipeThrough(r, t = {}) {
      if (!ae(this)) throw ve("pipeThrough");
      J(r, 1, "pipeThrough");
      const o = function(s, a) {
        Q(s, a);
        const i = s == null ? void 0 : s.readable;
        Cr(i, "readable", "ReadableWritablePair"), Or(i, `${a} has member 'readable' that`);
        const l = s == null ? void 0 : s.writable;
        return Cr(l, "writable", "ReadableWritablePair"), Ht(l, `${a} has member 'writable' that`), { readable: i, writable: l };
      }(r, "First parameter"), n = fo(t, "Second parameter");
      if (se(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
      if (Ce(o.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
      return Se(lo(this, o.writable, n.preventClose, n.preventAbort, n.preventCancel, n.signal)), o.readable;
    }
    pipeTo(r, t = {}) {
      if (!ae(this)) return d(ve("pipeTo"));
      if (r === void 0) return d("Parameter 1 is required in 'pipeTo'.");
      if (!Pe(r)) return d(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
      let o;
      try {
        o = fo(t, "Second parameter");
      } catch (n) {
        return d(n);
      }
      return se(this) ? d(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ce(r) ? d(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : lo(this, r, o.preventClose, o.preventAbort, o.preventCancel, o.signal);
    }
    tee() {
      if (!ae(this)) throw ve("tee");
      return Ae(No(this));
    }
    values(r = void 0) {
      if (!ae(this)) throw ve("values");
      return function(t, o) {
        const n = Re(t), s = new Rt(n, o), a = Object.create(Tt);
        return a._asyncIteratorImpl = s, a;
      }(this, function(t, o) {
        return Q(t, o), { preventCancel: !!(t == null ? void 0 : t.preventCancel) };
      }(r, "First parameter").preventCancel);
    }
    [ze](r) {
      return this.values(r);
    }
    static from(r) {
      return Qo(r);
    }
  }
  function xe(e, r, t, o = 1, n = () => 1) {
    const s = Object.create(W.prototype);
    return rt(s), co(s, Object.create(ee.prototype), e, r, t, o, n), s;
  }
  function ho(e, r, t) {
    const o = Object.create(W.prototype);
    return rt(o), Mt(o, Object.create(K.prototype), e, r, t, 0, void 0), o;
  }
  function rt(e) {
    e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = !1;
  }
  function ae(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_readableStreamController") && e instanceof W;
  }
  function se(e) {
    return e._reader !== void 0;
  }
  function x(e, r) {
    if (e._disturbed = !0, e._state === "closed") return v(void 0);
    if (e._state === "errored") return d(e._storedError);
    Ne(e);
    const t = e._reader;
    if (t !== void 0 && pe(t)) {
      const o = t._readIntoRequests;
      t._readIntoRequests = new L(), o.forEach((n) => {
        n._closeSteps(void 0);
      });
    }
    return U(e._readableStreamController[vr](r), H);
  }
  function Ne(e) {
    e._state = "closed";
    const r = e._reader;
    if (r !== void 0 && (dt(r), te(r))) {
      const t = r._readRequests;
      r._readRequests = new L(), t.forEach((o) => {
        o._closeSteps();
      });
    }
  }
  function bo(e, r) {
    e._state = "errored", e._storedError = r;
    const t = e._reader;
    t !== void 0 && (Pr(t, r), te(t) ? mt(t, r) : Yt(t, r));
  }
  function ve(e) {
    return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
  }
  function _o(e, r) {
    Q(e, r);
    const t = e == null ? void 0 : e.highWaterMark;
    return Cr(t, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: qr(t) };
  }
  Object.defineProperties(W, { from: { enumerable: !0 } }), Object.defineProperties(W.prototype, { cancel: { enumerable: !0 }, getReader: { enumerable: !0 }, pipeThrough: { enumerable: !0 }, pipeTo: { enumerable: !0 }, tee: { enumerable: !0 }, values: { enumerable: !0 }, locked: { enumerable: !0 } }), p(W.from, "from"), p(W.prototype.cancel, "cancel"), p(W.prototype.getReader, "getReader"), p(W.prototype.pipeThrough, "pipeThrough"), p(W.prototype.pipeTo, "pipeTo"), p(W.prototype.tee, "tee"), p(W.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(W.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: !0 }), Object.defineProperty(W.prototype, ze, { value: W.prototype.values, writable: !0, configurable: !0 });
  const po = (e) => e.byteLength;
  p(po, "size");
  class dr {
    constructor(r) {
      J(r, 1, "ByteLengthQueuingStrategy"), r = _o(r, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = r.highWaterMark;
    }
    get highWaterMark() {
      if (!yo(this)) throw mo("highWaterMark");
      return this._byteLengthQueuingStrategyHighWaterMark;
    }
    get size() {
      if (!yo(this)) throw mo("size");
      return po;
    }
  }
  function mo(e) {
    return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
  }
  function yo(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") && e instanceof dr;
  }
  Object.defineProperties(dr.prototype, { highWaterMark: { enumerable: !0 }, size: { enumerable: !0 } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(dr.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: !0 });
  const go = () => 1;
  p(go, "size");
  class fr {
    constructor(r) {
      J(r, 1, "CountQueuingStrategy"), r = _o(r, "First parameter"), this._countQueuingStrategyHighWaterMark = r.highWaterMark;
    }
    get highWaterMark() {
      if (!wo(this)) throw vo("highWaterMark");
      return this._countQueuingStrategyHighWaterMark;
    }
    get size() {
      if (!wo(this)) throw vo("size");
      return go;
    }
  }
  function vo(e) {
    return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
  }
  function wo(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") && e instanceof fr;
  }
  function Go(e, r, t) {
    return $(e, t), (o) => G(e, r, [o]);
  }
  function Xo(e, r, t) {
    return $(e, t), (o) => ce(e, r, [o]);
  }
  function Jo(e, r, t) {
    return $(e, t), (o, n) => G(e, r, [o, n]);
  }
  function Ko(e, r, t) {
    return $(e, t), (o) => G(e, r, [o]);
  }
  Object.defineProperties(fr.prototype, { highWaterMark: { enumerable: !0 }, size: { enumerable: !0 } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(fr.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: !0 });
  class hr {
    constructor(r = {}, t = {}, o = {}) {
      r === void 0 && (r = null);
      const n = er(t, "Second parameter"), s = er(o, "Third parameter"), a = function(u, h) {
        Q(u, h);
        const E = u == null ? void 0 : u.cancel, O = u == null ? void 0 : u.flush, B = u == null ? void 0 : u.readableType, z = u == null ? void 0 : u.start, R = u == null ? void 0 : u.transform, g = u == null ? void 0 : u.writableType;
        return { cancel: E === void 0 ? void 0 : Ko(E, u, `${h} has member 'cancel' that`), flush: O === void 0 ? void 0 : Go(O, u, `${h} has member 'flush' that`), readableType: B, start: z === void 0 ? void 0 : Xo(z, u, `${h} has member 'start' that`), transform: R === void 0 ? void 0 : Jo(R, u, `${h} has member 'transform' that`), writableType: g };
      }(r, "First parameter");
      if (a.readableType !== void 0) throw new RangeError("Invalid readableType specified");
      if (a.writableType !== void 0) throw new RangeError("Invalid writableType specified");
      const i = Le(s, 0), l = Ze(s), c = Le(n, 1), f = Ze(n);
      let y;
      (function(u, h, E, O, B, z) {
        function R() {
          return h;
        }
        function g(S) {
          return function(_, T) {
            const m = _._transformStreamController;
            return _._backpressure ? U(_._backpressureChangePromise, () => {
              const P = _._writable;
              if (P._state === "erroring") throw P._storedError;
              return Po(m, T);
            }) : Po(m, T);
          }(u, S);
        }
        function A(S) {
          return function(_, T) {
            const m = _._transformStreamController;
            if (m._finishPromise !== void 0) return m._finishPromise;
            const P = _._readable;
            m._finishPromise = j((k, at) => {
              m._finishPromise_resolve = k, m._finishPromise_reject = at;
            });
            const I = m._cancelAlgorithm(T);
            return pr(m), F(I, () => (P._state === "errored" ? je(m, P._storedError) : (D(P._readableStreamController, T), nt(m)), null), (k) => (D(P._readableStreamController, k), je(m, k), null)), m._finishPromise;
          }(u, S);
        }
        function b() {
          return function(S) {
            const _ = S._transformStreamController;
            if (_._finishPromise !== void 0) return _._finishPromise;
            const T = S._readable;
            _._finishPromise = j((P, I) => {
              _._finishPromise_resolve = P, _._finishPromise_reject = I;
            });
            const m = _._flushAlgorithm();
            return pr(_), F(m, () => (T._state === "errored" ? je(_, T._storedError) : (ge(T._readableStreamController), nt(_)), null), (P) => (D(T._readableStreamController, P), je(_, P), null)), _._finishPromise;
          }(u);
        }
        function C() {
          return function(S) {
            return br(S, !1), S._backpressureChangePromise;
          }(u);
        }
        function w(S) {
          return function(_, T) {
            const m = _._transformStreamController;
            if (m._finishPromise !== void 0) return m._finishPromise;
            const P = _._writable;
            m._finishPromise = j((k, at) => {
              m._finishPromise_resolve = k, m._finishPromise_reject = at;
            });
            const I = m._cancelAlgorithm(T);
            return pr(m), F(I, () => (P._state === "errored" ? je(m, P._storedError) : ($e(P._writableStreamController, T), ot(_), nt(m)), null), (k) => ($e(P._writableStreamController, k), ot(_), je(m, k), null)), m._finishPromise;
          }(u, S);
        }
        u._writable = function(S, _, T, m, P = 1, I = () => 1) {
          const k = Object.create(ie.prototype);
          return Ut(k), ro(k, Object.create(qe.prototype), S, _, T, m, P, I), k;
        }(R, g, b, A, E, O), u._readable = xe(R, C, w, B, z), u._backpressure = void 0, u._backpressureChangePromise = void 0, u._backpressureChangePromise_resolve = void 0, br(u, !0), u._transformStreamController = void 0;
      })(this, j((u) => {
        y = u;
      }), c, f, i, l), function(u, h) {
        const E = Object.create(le.prototype);
        let O, B, z;
        O = h.transform !== void 0 ? (R) => h.transform(R, E) : (R) => {
          try {
            return To(E, R), v(void 0);
          } catch (g) {
            return d(g);
          }
        }, B = h.flush !== void 0 ? () => h.flush(E) : () => v(void 0), z = h.cancel !== void 0 ? (R) => h.cancel(R) : () => v(void 0), function(R, g, A, b, C) {
          g._controlledTransformStream = R, R._transformStreamController = g, g._transformAlgorithm = A, g._flushAlgorithm = b, g._cancelAlgorithm = C, g._finishPromise = void 0, g._finishPromise_resolve = void 0, g._finishPromise_reject = void 0;
        }(u, E, O, B, z);
      }(this, a), a.start !== void 0 ? y(a.start(this._transformStreamController)) : y(void 0);
    }
    get readable() {
      if (!So(this)) throw Co("readable");
      return this._readable;
    }
    get writable() {
      if (!So(this)) throw Co("writable");
      return this._writable;
    }
  }
  function So(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_transformStreamController") && e instanceof hr;
  }
  function Ro(e, r) {
    D(e._readable._readableStreamController, r), tt(e, r);
  }
  function tt(e, r) {
    pr(e._transformStreamController), $e(e._writable._writableStreamController, r), ot(e);
  }
  function ot(e) {
    e._backpressure && br(e, !1);
  }
  function br(e, r) {
    e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = j((t) => {
      e._backpressureChangePromise_resolve = t;
    }), e._backpressure = r;
  }
  Object.defineProperties(hr.prototype, { readable: { enumerable: !0 }, writable: { enumerable: !0 } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(hr.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: !0 });
  class le {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    get desiredSize() {
      if (!_r(this)) throw mr("desiredSize");
      return et(this._controlledTransformStream._readable._readableStreamController);
    }
    enqueue(r = void 0) {
      if (!_r(this)) throw mr("enqueue");
      To(this, r);
    }
    error(r = void 0) {
      if (!_r(this)) throw mr("error");
      var t;
      t = r, Ro(this._controlledTransformStream, t);
    }
    terminate() {
      if (!_r(this)) throw mr("terminate");
      (function(r) {
        const t = r._controlledTransformStream;
        ge(t._readable._readableStreamController);
        const o = new TypeError("TransformStream terminated");
        tt(t, o);
      })(this);
    }
  }
  function _r(e) {
    return !!q(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") && e instanceof le;
  }
  function pr(e) {
    e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
  }
  function To(e, r) {
    const t = e._controlledTransformStream, o = t._readable._readableStreamController;
    if (!Oe(o)) throw new TypeError("Readable side is not in a state that permits enqueue");
    try {
      Ee(o, r);
    } catch (s) {
      throw tt(t, s), t._readable._storedError;
    }
    (function(s) {
      return !uo(s);
    })(o) !== t._backpressure && br(t, !0);
  }
  function Po(e, r) {
    return U(e._transformAlgorithm(r), void 0, (t) => {
      throw Ro(e._controlledTransformStream, t), t;
    });
  }
  function mr(e) {
    return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
  }
  function nt(e) {
    e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
  }
  function je(e, r) {
    e._finishPromise_reject !== void 0 && (Se(e._finishPromise), e._finishPromise_reject(r), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
  }
  function Co(e) {
    return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
  }
  Object.defineProperties(le.prototype, { enqueue: { enumerable: !0 }, error: { enumerable: !0 }, terminate: { enumerable: !0 }, desiredSize: { enumerable: !0 } }), p(le.prototype.enqueue, "enqueue"), p(le.prototype.error, "error"), p(le.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(le.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: !0 });
  const it = { ReadableStream: W, ReadableStreamDefaultController: ee, ReadableByteStreamController: K, ReadableStreamBYOBRequest: he, ReadableStreamDefaultReader: re, ReadableStreamBYOBReader: ne, WritableStream: ie, WritableStreamDefaultController: qe, WritableStreamDefaultWriter: Z, ByteLengthQueuingStrategy: dr, CountQueuingStrategy: fr, TransformStream: hr, TransformStreamDefaultController: le };
  for (const e in it) Object.prototype.hasOwnProperty.call(it, e) && Object.defineProperty(Zr, e, { value: it[e], writable: !0, configurable: !0 });
})();
const en = /* @__PURE__ */ Zo({
  __proto__: null,
  default: Eo
}, [Eo]);
export {
  en as p
};
