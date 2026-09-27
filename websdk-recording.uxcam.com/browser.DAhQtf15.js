var qr = {}, Vr = function(n, r, a, e, t) {
  var i = new Worker(qr[r] || (qr[r] = URL.createObjectURL(new Blob([
    n + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
  ], { type: "text/javascript" }))));
  return i.onmessage = function(o) {
    var v = o.data, s = v.$e$;
    if (s) {
      var l = new Error(s[0]);
      l.code = s[1], l.stack = s[2], t(l, null);
    } else
      t(null, v);
  }, i.postMessage(a, e), i;
}, A = Uint8Array, M = Uint16Array, vr = Int32Array, sr = new A([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), lr = new A([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), wr = new A([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ir = function(n, r) {
  for (var a = new M(31), e = 0; e < 31; ++e)
    a[e] = r += 1 << n[e - 1];
  for (var t = new vr(a[30]), e = 1; e < 30; ++e)
    for (var i = a[e]; i < a[e + 1]; ++i)
      t[i] = i - a[e] << 5 | e;
  return { b: a, r: t };
}, Rr = Ir(sr, 2), Xr = Rr.b, ir = Rr.r;
Xr[28] = 258, ir[258] = 28;
var Yr = Ir(lr, 0), yr = Yr.r, fr = new M(32768);
for (var c = 0; c < 32768; ++c) {
  var H = (c & 43690) >> 1 | (c & 21845) << 1;
  H = (H & 52428) >> 2 | (H & 13107) << 2, H = (H & 61680) >> 4 | (H & 3855) << 4, fr[c] = ((H & 65280) >> 8 | (H & 255) << 8) >> 1;
}
var d = function(n, r, a) {
  for (var e = n.length, t = 0, i = new M(r); t < e; ++t)
    n[t] && ++i[n[t] - 1];
  var o = new M(r);
  for (t = 1; t < r; ++t)
    o[t] = o[t - 1] + i[t - 1] << 1;
  var v;
  if (a) {
    v = new M(1 << r);
    var s = 15 - r;
    for (t = 0; t < e; ++t)
      if (n[t])
        for (var l = t << 4 | n[t], f = r - n[t], g = o[n[t] - 1]++ << f, D = g | (1 << f) - 1; g <= D; ++g)
          v[fr[g] >> s] = l;
  } else
    for (v = new M(e), t = 0; t < e; ++t)
      n[t] && (v[t] = fr[o[n[t] - 1]++] >> 15 - n[t]);
  return v;
}, J = new A(288);
for (var c = 0; c < 144; ++c)
  J[c] = 8;
for (var c = 144; c < 256; ++c)
  J[c] = 9;
for (var c = 256; c < 280; ++c)
  J[c] = 7;
for (var c = 280; c < 288; ++c)
  J[c] = 8;
var ar = new A(32);
for (var c = 0; c < 32; ++c)
  ar[c] = 5;
var Wr = /* @__PURE__ */ d(J, 9, 0), Br = /* @__PURE__ */ d(ar, 5, 0), zr = function(n) {
  return (n + 7) / 8 | 0;
}, Hr = function(n, r, a) {
  return (r == null || r < 0) && (r = 0), (a == null || a > n.length) && (a = n.length), new A(n.subarray(r, a));
}, jr = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], P = function(n, r, a) {
  var e = new Error(r || jr[n]);
  if (e.code = n, Error.captureStackTrace && Error.captureStackTrace(e, P), !a)
    throw e;
  return e;
}, $ = function(n, r, a) {
  a <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= a, n[e + 1] |= a >> 8;
}, j = function(n, r, a) {
  a <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= a, n[e + 1] |= a >> 8, n[e + 2] |= a >> 16;
}, tr = function(n, r) {
  for (var a = [], e = 0; e < n.length; ++e)
    n[e] && a.push({ s: e, f: n[e] });
  var t = a.length, i = a.slice();
  if (!t)
    return { t: Ar, l: 0 };
  if (t == 1) {
    var o = new A(a[0].s + 1);
    return o[a[0].s] = 1, { t: o, l: 1 };
  }
  a.sort(function(O, T) {
    return O.f - T.f;
  }), a.push({ s: -1, f: 25001 });
  var v = a[0], s = a[1], l = 0, f = 1, g = 2;
  for (a[0] = { s: -1, f: v.f + s.f, l: v, r: s }; f != t - 1; )
    v = a[a[l].f < a[g].f ? l++ : g++], s = a[l != f && a[l].f < a[g].f ? l++ : g++], a[f++] = { s: -1, f: v.f + s.f, l: v, r: s };
  for (var D = i[0].s, e = 1; e < t; ++e)
    i[e].s > D && (D = i[e].s);
  var p = new M(D + 1), E = or(a[f - 1], p, 0);
  if (E > r) {
    var e = 0, y = 0, W = E - r, K = 1 << W;
    for (i.sort(function(T, z) {
      return p[z.s] - p[T.s] || T.f - z.f;
    }); e < t; ++e) {
      var I = i[e].s;
      if (p[I] > r)
        y += K - (1 << E - p[I]), p[I] = r;
      else
        break;
    }
    for (y >>= W; y > 0; ) {
      var N = i[e].s;
      p[N] < r ? y -= 1 << r - p[N]++ - 1 : ++e;
    }
    for (; e >= 0 && y; --e) {
      var S = i[e].s;
      p[S] == r && (--p[S], ++y);
    }
    E = r;
  }
  return { t: new A(p), l: E };
}, or = function(n, r, a) {
  return n.s == -1 ? Math.max(or(n.l, r, a + 1), or(n.r, r, a + 1)) : r[n.s] = a;
}, br = function(n) {
  for (var r = n.length; r && !n[--r]; )
    ;
  for (var a = new M(++r), e = 0, t = n[0], i = 1, o = function(s) {
    a[e++] = s;
  }, v = 1; v <= r; ++v)
    if (n[v] == t && v != r)
      ++i;
    else {
      if (!t && i > 2) {
        for (; i > 138; i -= 138)
          o(32754);
        i > 2 && (o(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (o(t), --i; i > 6; i -= 6)
          o(8304);
        i > 2 && (o(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        o(t);
      i = 1, t = n[v];
    }
  return { c: a.subarray(0, e), n: r };
}, m = function(n, r) {
  for (var a = 0, e = 0; e < r.length; ++e)
    a += n[e] * r[e];
  return a;
}, Mr = function(n, r, a) {
  var e = a.length, t = zr(r + 2);
  n[t] = e & 255, n[t + 1] = e >> 8, n[t + 2] = n[t] ^ 255, n[t + 3] = n[t + 1] ^ 255;
  for (var i = 0; i < e; ++i)
    n[t + i + 4] = a[i];
  return (t + 4 + e) * 8;
}, pr = function(n, r, a, e, t, i, o, v, s, l, f) {
  $(r, f++, a), ++t[256];
  for (var g = tr(t, 15), D = g.t, p = g.l, E = tr(i, 15), y = E.t, W = E.l, K = br(D), I = K.c, N = K.n, S = br(y), O = S.c, T = S.n, z = new M(19), u = 0; u < I.length; ++u)
    ++z[I[u] & 31];
  for (var u = 0; u < O.length; ++u)
    ++z[O[u] & 31];
  for (var h = tr(z, 7), x = h.t, Q = h.l, F = 19; F > 4 && !x[wr[F - 1]]; --F)
    ;
  var V = l + 5 << 3, C = m(t, J) + m(i, ar) + o, G = m(t, D) + m(i, y) + o + 14 + 3 * F + m(z, x) + 2 * z[16] + 3 * z[17] + 7 * z[18];
  if (s >= 0 && V <= C && V <= G)
    return Mr(r, f, n.subarray(s, s + l));
  var Z, w, U, B;
  if ($(r, f, 1 + (G < C)), f += 2, G < C) {
    Z = d(D, p, 0), w = D, U = d(y, W, 0), B = y;
    var hr = d(x, Q, 0);
    $(r, f, N - 257), $(r, f + 5, T - 1), $(r, f + 10, F - 4), f += 14;
    for (var u = 0; u < F; ++u)
      $(r, f + 3 * u, x[wr[u]]);
    f += 3 * F;
    for (var q = [I, O], nr = 0; nr < 2; ++nr)
      for (var X = q[nr], u = 0; u < X.length; ++u) {
        var L = X[u] & 31;
        $(r, f, hr[L]), f += x[L], L > 15 && ($(r, f, X[u] >> 5 & 127), f += X[u] >> 12);
      }
  } else
    Z = Wr, w = J, U = Br, B = ar;
  for (var u = 0; u < v; ++u) {
    var b = e[u];
    if (b > 255) {
      var L = b >> 18 & 31;
      j(r, f, Z[L + 257]), f += w[L + 257], L > 7 && ($(r, f, b >> 23 & 31), f += sr[L]);
      var Y = b & 31;
      j(r, f, U[Y]), f += B[Y], Y > 3 && (j(r, f, b >> 5 & 8191), f += lr[Y]);
    } else
      j(r, f, Z[b]), f += w[b];
  }
  return j(r, f, Z[256]), f + w[256];
}, Jr = /* @__PURE__ */ new vr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ar = /* @__PURE__ */ new A(0), Kr = function(n, r, a, e, t, i) {
  var o = i.z || n.length, v = new A(e + o + 5 * (1 + Math.ceil(o / 7e3)) + t), s = v.subarray(e, v.length - t), l = i.l, f = (i.r || 0) & 7;
  if (r) {
    f && (s[0] = i.r >> 3);
    for (var g = Jr[r - 1], D = g >> 13, p = g & 8191, E = (1 << a) - 1, y = i.p || new M(32768), W = i.h || new M(E + 1), K = Math.ceil(a / 3), I = 2 * K, N = function(gr) {
      return (n[gr] ^ n[gr + 1] << K ^ n[gr + 2] << I) & E;
    }, S = new vr(25e3), O = new M(288), T = new M(32), z = 0, u = 0, h = i.i || 0, x = 0, Q = i.w || 0, F = 0; h + 2 < o; ++h) {
      var V = N(h), C = h & 32767, G = W[V];
      if (y[C] = G, W[V] = C, Q <= h) {
        var Z = o - h;
        if ((z > 7e3 || x > 24576) && (Z > 423 || !l)) {
          f = pr(n, s, 0, S, O, T, u, x, F, h - F, f), x = z = u = 0, F = h;
          for (var w = 0; w < 286; ++w)
            O[w] = 0;
          for (var w = 0; w < 30; ++w)
            T[w] = 0;
        }
        var U = 2, B = 0, hr = p, q = C - G & 32767;
        if (Z > 2 && V == N(h - q))
          for (var nr = Math.min(D, Z) - 1, X = Math.min(32767, h), L = Math.min(258, Z); q <= X && --hr && C != G; ) {
            if (n[h + U] == n[h + U - q]) {
              for (var b = 0; b < L && n[h + b] == n[h + b - q]; ++b)
                ;
              if (b > U) {
                if (U = b, B = q, b > nr)
                  break;
                for (var Y = Math.min(q, b - 2), Cr = 0, w = 0; w < Y; ++w) {
                  var ur = h - q + w & 32767, Qr = y[ur], Gr = ur - Qr & 32767;
                  Gr > Cr && (Cr = Gr, G = ur);
                }
              }
            }
            C = G, G = y[C], q += C - G & 32767;
          }
        if (B) {
          S[x++] = 268435456 | ir[U] << 18 | yr[B];
          var Ur = ir[U] & 31, Zr = yr[B] & 31;
          u += sr[Ur] + lr[Zr], ++O[257 + Ur], ++T[Zr], Q = h + U, ++z;
        } else
          S[x++] = n[h], ++O[n[h]];
      }
    }
    for (h = Math.max(h, Q); h < o; ++h)
      S[x++] = n[h], ++O[n[h]];
    f = pr(n, s, l, S, O, T, u, x, F, h - F, f), l || (i.r = f & 7 | s[f / 8 | 0] << 3, f -= 7, i.h = W, i.p = y, i.i = h, i.w = Q);
  } else {
    for (var h = i.w || 0; h < o + l; h += 65535) {
      var cr = h + 65535;
      cr >= o && (s[f / 8 | 0] = l, cr = o), f = Mr(s, f + 1, n.subarray(h, cr));
    }
    i.i = o;
  }
  return Hr(v, 0, e + zr(f) + t);
}, Nr = /* @__PURE__ */ function() {
  for (var n = new Int32Array(256), r = 0; r < 256; ++r) {
    for (var a = r, e = 9; --e; )
      a = (a & 1 && -306674912) ^ a >>> 1;
    n[r] = a;
  }
  return n;
}(), xr = function() {
  var n = -1;
  return {
    p: function(r) {
      for (var a = n, e = 0; e < r.length; ++e)
        a = Nr[a & 255 ^ r[e]] ^ a >>> 8;
      n = a;
    },
    d: function() {
      return ~n;
    }
  };
}, Fr = function() {
  var n = 1, r = 0;
  return {
    p: function(a) {
      for (var e = n, t = r, i = a.length | 0, o = 0; o != i; ) {
        for (var v = Math.min(o + 2655, i); o < v; ++o)
          t += e += a[o];
        e = (e & 65535) + 15 * (e >> 16), t = (t & 65535) + 15 * (t >> 16);
      }
      n = e, r = t;
    },
    d: function() {
      return n %= 65521, r %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (r & 255) << 8 | r >> 8;
    }
  };
}, rr = function(n, r, a, e, t) {
  if (!t && (t = { l: 1 }, r.dictionary)) {
    var i = r.dictionary.subarray(-32768), o = new A(i.length + n.length);
    o.set(i), o.set(n, i.length), n = o, t.w = i.length;
  }
  return Kr(n, r.level == null ? 6 : r.level, r.mem == null ? t.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + r.mem, a, e, t);
}, mr = function(n, r) {
  var a = {};
  for (var e in n)
    a[e] = n[e];
  for (var e in r)
    a[e] = r[e];
  return a;
}, Lr = function(n, r, a) {
  for (var e = n(), t = n.toString(), i = t.slice(t.indexOf("[") + 1, t.lastIndexOf("]")).replace(/\s+/g, "").split(","), o = 0; o < e.length; ++o) {
    var v = e[o], s = i[o];
    if (typeof v == "function") {
      r += ";" + s + "=";
      var l = v.toString();
      if (v.prototype)
        if (l.indexOf("[native code]") != -1) {
          var f = l.indexOf(" ", 8) + 1;
          r += l.slice(f, l.indexOf("(", f));
        } else {
          r += l;
          for (var g in v.prototype)
            r += ";" + s + ".prototype." + g + "=" + v.prototype[g].toString();
        }
      else
        r += l;
    } else
      a[s] = v;
  }
  return r;
}, er = [], dr = function(n) {
  var r = [];
  for (var a in n)
    n[a].buffer && r.push((n[a] = new n[a].constructor(n[a])).buffer);
  return r;
}, _r = function(n, r, a, e) {
  if (!er[a]) {
    for (var t = "", i = {}, o = n.length - 1, v = 0; v < o; ++v)
      t = Lr(n[v], t, i);
    er[a] = { c: Lr(n[o], t, i), e: i };
  }
  var s = mr({}, er[a].e);
  return Vr(er[a].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + r.toString() + "}", a, s, dr(s), e);
}, Dr = function() {
  return [A, M, vr, sr, lr, wr, ir, yr, Wr, J, Br, ar, fr, Jr, Ar, d, $, j, tr, or, br, m, Mr, pr, zr, Hr, Kr, rr, en, an];
}, rn = function() {
  return [Er, Sr, R, xr, Nr];
}, nn = function() {
  return [Pr, R, Fr];
}, an = function(n) {
  return postMessage(n, [n.buffer]);
}, _ = function(n) {
  return n.ondata = function(r, a) {
    return postMessage([r, a], [r.buffer]);
  }, function(r) {
    r.data.length ? (n.push(r.data[0], r.data[1]), postMessage([r.data[0].length])) : n.flush();
  };
}, Or = function(n, r, a, e, t, i, o) {
  var v, s = _r(n, e, t, function(l, f) {
    l ? (s.terminate(), r.ondata.call(r, l)) : Array.isArray(f) ? f.length == 1 ? (r.queuedSize -= f[0], r.ondrain && r.ondrain(f[0])) : (f[1] && s.terminate(), r.ondata.call(r, l, f[0], f[1])) : o(f);
  });
  s.postMessage(a), r.queuedSize = 0, r.push = function(l, f) {
    r.ondata || P(5), v && r.ondata(P(4, 0, 1), null, !!f), r.queuedSize += l.length, s.postMessage([l, v = f], [l.buffer]);
  }, r.terminate = function() {
    s.terminate();
  }, r.flush = function() {
    s.postMessage([]);
  };
}, R = function(n, r, a) {
  for (; a; ++r)
    n[r] = a, a >>>= 8;
}, Er = function(n, r) {
  var a = r.filename;
  if (n[0] = 31, n[1] = 139, n[2] = 8, n[8] = r.level < 2 ? 4 : r.level == 9 ? 2 : 0, n[9] = 3, r.mtime != 0 && R(n, 4, Math.floor(new Date(r.mtime || Date.now()) / 1e3)), a) {
    n[3] = 8;
    for (var e = 0; e <= a.length; ++e)
      n[e + 10] = a.charCodeAt(e);
  }
}, Sr = function(n) {
  return 10 + (n.filename ? n.filename.length + 1 : 0);
}, Pr = function(n, r) {
  var a = r.level, e = a == 0 ? 0 : a < 6 ? 1 : a == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = e << 6 | (r.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, r.dictionary) {
    var t = Fr();
    t.p(r.dictionary), R(n, 2, t.d());
  }
};
function Tr(n, r) {
  return typeof n == "function" && (r = n, n = {}), this.ondata = r, n;
}
var k = /* @__PURE__ */ function() {
  function n(r, a) {
    if (typeof r == "function" && (a = r, r = {}), this.ondata = a, this.o = r || {}, this.s = { l: 0, i: 32768, w: 32768, z: 32768 }, this.b = new A(98304), this.o.dictionary) {
      var e = this.o.dictionary.subarray(-32768);
      this.b.set(e, 32768 - e.length), this.s.i = 32768 - e.length;
    }
  }
  return n.prototype.p = function(r, a) {
    this.ondata(rr(r, this.o, 0, 0, this.s), a);
  }, n.prototype.push = function(r, a) {
    this.ondata || P(5), this.s.l && P(4);
    var e = r.length + this.s.z;
    if (e > this.b.length) {
      if (e > 2 * this.b.length - 32768) {
        var t = new A(e & -32768);
        t.set(this.b.subarray(0, this.s.z)), this.b = t;
      }
      var i = this.b.length - this.s.z;
      this.b.set(r.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(r.subarray(i), 32768), this.s.z = r.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
    } else
      this.b.set(r, this.s.z), this.s.z += r.length;
    this.s.l = a & 1, (this.s.z > this.s.w + 8191 || a) && (this.p(this.b, a || !1), this.s.w = this.s.i, this.s.i -= 2);
  }, n.prototype.flush = function() {
    this.ondata || P(5), this.s.l && P(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2;
  }, n;
}(), on = /* @__PURE__ */ function() {
  function n(r, a) {
    Or([
      Dr,
      function() {
        return [_, k];
      }
    ], this, Tr.call(this, r, a), function(e) {
      var t = new k(e.data);
      onmessage = _(t);
    }, 6);
  }
  return n;
}();
function en(n, r) {
  return rr(n, r || {}, 0, 0);
}
var $r = /* @__PURE__ */ function() {
  function n(r, a) {
    this.c = xr(), this.l = 0, this.v = 1, k.call(this, r, a);
  }
  return n.prototype.push = function(r, a) {
    this.c.p(r), this.l += r.length, k.prototype.push.call(this, r, a);
  }, n.prototype.p = function(r, a) {
    var e = rr(r, this.o, this.v && Sr(this.o), a && 8, this.s);
    this.v && (Er(e, this.o), this.v = 0), a && (R(e, e.length - 8, this.c.d()), R(e, e.length - 4, this.l)), this.ondata(e, a);
  }, n.prototype.flush = function() {
    k.prototype.flush.call(this);
  }, n;
}(), vn = /* @__PURE__ */ function() {
  function n(r, a) {
    Or([
      Dr,
      rn,
      function() {
        return [_, k, $r];
      }
    ], this, Tr.call(this, r, a), function(e) {
      var t = new $r(e.data);
      onmessage = _(t);
    }, 8);
  }
  return n;
}();
function sn(n, r) {
  r || (r = {});
  var a = xr(), e = n.length;
  a.p(n);
  var t = rr(n, r, Sr(r), 8), i = t.length;
  return Er(t, r), R(t, i - 8, a.d()), R(t, i - 4, e), t;
}
var kr = /* @__PURE__ */ function() {
  function n(r, a) {
    this.c = Fr(), this.v = 1, k.call(this, r, a);
  }
  return n.prototype.push = function(r, a) {
    this.c.p(r), k.prototype.push.call(this, r, a);
  }, n.prototype.p = function(r, a) {
    var e = rr(r, this.o, this.v && (this.o.dictionary ? 6 : 2), a && 4, this.s);
    this.v && (Pr(e, this.o), this.v = 0), a && R(e, e.length - 4, this.c.d()), this.ondata(e, a);
  }, n.prototype.flush = function() {
    k.prototype.flush.call(this);
  }, n;
}(), ln = /* @__PURE__ */ function() {
  function n(r, a) {
    Or([
      Dr,
      nn,
      function() {
        return [_, k, kr];
      }
    ], this, Tr.call(this, r, a), function(e) {
      var t = new kr(e.data);
      onmessage = _(t);
    }, 10);
  }
  return n;
}(), tn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), fn = 0;
try {
  tn.decode(Ar, { stream: !0 }), fn = 1;
} catch {
}
export {
  on as A,
  k as D,
  $r as G,
  kr as Z,
  vn as a,
  ln as b,
  sn as g
};
