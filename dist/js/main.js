"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! For license information please see main.js.LICENSE.txt */
(function () {
  "use strict";

  function t(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function e(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }
  var r,
    n,
    i,
    s,
    a,
    o,
    u,
    l,
    c,
    f,
    h,
    p,
    d,
    _,
    g,
    m,
    v,
    y = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    x = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    b = 1e8,
    w = 1e-8,
    T = 2 * Math.PI,
    k = T / 4,
    M = 0,
    O = Math.sqrt,
    C = Math.cos,
    S = Math.sin,
    E = function E(t) {
      return "string" == typeof t;
    },
    A = function A(t) {
      return "function" == typeof t;
    },
    P = function P(t) {
      return "number" == typeof t;
    },
    D = function D(t) {
      return void 0 === t;
    },
    R = function R(t) {
      return "object" == _typeof(t);
    },
    z = function z(t) {
      return !1 !== t;
    },
    F = function F() {
      return "undefined" != typeof window;
    },
    I = function I(t) {
      return A(t) || E(t);
    },
    Y = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    B = Array.isArray,
    L = /(?:-?\.?\d|\.)+/gi,
    X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    U = /[+-]=-?[.\d]+/,
    H = /[^,'"\[\]\s]+/gi,
    W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    V = {},
    j = {},
    G = function G(t) {
      return (j = Tt(t, V)) && Tr;
    },
    $ = function $(t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    },
    Q = function Q(t, e) {
      return !e && console.warn(t);
    },
    Z = function Z(t, e) {
      return t && (V[t] = e) && j && (j[t] = e) || V;
    },
    K = function K() {
      return 0;
    },
    J = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    tt = {
      suppressEvents: !0,
      kill: !1
    },
    et = {
      suppressEvents: !0
    },
    rt = {},
    nt = [],
    it = {},
    st = {},
    at = {},
    ot = 30,
    ut = [],
    lt = "",
    ct = function ct(t) {
      var e,
        r,
        n = t[0];
      if (R(n) || A(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
        for (r = ut.length; r-- && !ut[r].targetTest(n););
        e = ut[r];
      }
      for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ye(t[r], e))) || t.splice(r, 1);
      return t;
    },
    ft = function ft(t) {
      return t._gsap || ct(_te(t))[0]._gsap;
    },
    ht = function ht(t, e, r) {
      return (r = t[e]) && A(r) ? t[e]() : D(r) && t.getAttribute && t.getAttribute(e) || r;
    },
    pt = function pt(t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    dt = function dt(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    _t = function _t(t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    gt = function gt(t, e) {
      var r = e.charAt(0),
        n = parseFloat(e.substr(2));
      return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n;
    },
    mt = function mt(t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
      return n < r;
    },
    vt = function vt() {
      var t,
        e,
        r = nt.length,
        n = nt.slice(0);
      for (it = {}, nt.length = 0, t = 0; t < r; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    yt = function yt(t, e, r, i) {
      nt.length && !n && vt(), t.render(e, r, i || n && e < 0 && (t._initted || t._startAt)), nt.length && !n && vt();
    },
    xt = function xt(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(H).length < 2 ? e : E(t) ? t.trim() : t;
    },
    bt = function bt(t) {
      return t;
    },
    wt = function wt(t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Tt = function Tt(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    kt = function t(e, r) {
      for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = R(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
      return e;
    },
    Mt = function Mt(t, e) {
      var r,
        n = {};
      for (r in t) r in e || (n[r] = t[r]);
      return n;
    },
    Ot = function Ot(t) {
      var e,
        r = t.parent || s,
        n = t.keyframes ? (e = B(t.keyframes), function (t, r) {
          for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n]);
        }) : wt;
      if (z(t.inherit)) for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
      return t;
    },
    Ct = function Ct(t, e, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var s,
        a = t[n];
      if (i) for (s = e[i]; a && a[i] > s;) a = a._prev;
      return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e;
    },
    St = function St(t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = e._prev,
        s = e._next;
      i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null;
    },
    Et = function Et(t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
    },
    At = function At(t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
      return t;
    },
    Pt = function Pt(t, e, r, i) {
      return t._startAt && (n ? t._startAt.revert(tt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
    },
    Dt = function t(e) {
      return !e || e._ts && t(e.parent);
    },
    Rt = function Rt(t) {
      return t._repeat ? zt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    },
    zt = function zt(t, e) {
      var r = Math.floor(t = _t(t / e));
      return t && r === t ? r - 1 : r;
    },
    Ft = function Ft(t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    },
    It = function It(t) {
      return t._end = _t(t._start + (t._tDur / Math.abs(t._ts || t._rts || w) || 0));
    },
    Yt = function Yt(t, e) {
      var r = t._dp;
      return r && r.smoothChildTiming && t._ts && (t._start = _t(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), It(t), r._dirty || At(r, t)), t;
    },
    Bt = function Bt(t, e) {
      var r;
      if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ft(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), r) - e._tTime > w) && e.render(r, !0)), At(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration()) for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
        t._zTime = -1e-8;
      }
    },
    Lt = function Lt(t, e, r, n) {
      return e.parent && Et(e), e._start = _t((P(r) ? r : r || t !== s ? jt(t, r, e) : t._time) + e._delay), e._end = _t(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ct(t, e, "_first", "_last", t._sort ? "_start" : 0), Ut(e) || (t._recent = e), n || Bt(t, e), t._ts < 0 && Yt(t, t._tTime), t;
    },
    Xt = function Xt(t, e) {
      return (V.ScrollTrigger || $("scrollTrigger", e)) && V.ScrollTrigger.create(e, t);
    },
    Nt = function Nt(t, e, r, i, s) {
      return We(t, e, s), t._initted ? !r && t._pt && !n && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && c !== ke.frame ? (nt.push(t), t._lazy = [s, i], 1) : void 0 : 1;
    },
    qt = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Ut = function Ut(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    Ht = function Ht(t, e, r, n) {
      var i = t._repeat,
        s = _t(e) || 0,
        a = t._tTime / t._tDur;
      return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : _t(s * (i + 1) + t._rDelay * i) : s, a > 0 && !n && Yt(t, t._tTime = t._tDur * a), t.parent && It(t), r || At(t.parent, t), t;
    },
    Wt = function Wt(t) {
      return t instanceof Le ? At(t) : Ht(t, t._dur);
    },
    Vt = {
      _start: 0,
      endTime: K,
      totalDuration: K
    },
    jt = function t(e, r, n) {
      var i,
        s,
        a,
        o = e.labels,
        u = e._recent || Vt,
        l = e.duration() >= b ? u.endTime(!1) : e._dur;
      return E(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = l), o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (s = s / 100 * (B(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)) : null == r ? l : +r;
    },
    Gt = function Gt(t, e, r) {
      var n,
        i,
        s = P(e[1]),
        a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[a];
      if (s && (o.duration = e[1]), o.parent = r, t) {
        for (n = o, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = z(i.vars.inherit) && i.parent;
        o.immediateRender = z(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1];
      }
      return new Qe(e[0], o, e[a + 1]);
    },
    $t = function $t(t, e) {
      return t || 0 === t ? e(t) : e;
    },
    Qt = function Qt(t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    Zt = function Zt(t, e) {
      return E(t) && (e = W.exec(t)) ? e[1] : "";
    },
    Kt = [].slice,
    Jt = function Jt(t, e) {
      return t && R(t) && "length" in t && (!e && !t.length || t.length - 1 in t && R(t[0])) && !t.nodeType && t !== a;
    },
    _te = function te(t, e, r) {
      return i && !e && i.selector ? i.selector(t) : !E(t) || r || !o && Me() ? B(t) ? function (t, e, r) {
        return void 0 === r && (r = []), t.forEach(function (t) {
          var n;
          return E(t) && !e || Jt(t, 1) ? (n = r).push.apply(n, _te(t)) : r.push(t);
        }) || r;
      }(t, r) : Jt(t) ? Kt.call(t, 0) : t ? [t] : [] : Kt.call((e || u).querySelectorAll(t), 0);
    },
    ee = function ee(t) {
      return t = _te(t)[0] || Q("Invalid scope") || {}, function (e) {
        var r = t.current || t.nativeElement || t;
        return _te(e, r.querySelectorAll ? r : r === t ? Q("Invalid scope") || u.createElement("div") : t);
      };
    },
    re = function re(t) {
      return t.sort(function () {
        return .5 - Math.random();
      });
    },
    ne = function ne(t) {
      if (A(t)) return t;
      var e = R(t) ? t : {
          each: t
        },
        r = De(e.ease),
        n = e.from || 0,
        i = parseFloat(e.base) || 0,
        s = {},
        a = n > 0 && n < 1,
        o = isNaN(n) || a,
        u = e.axis,
        l = n,
        c = n;
      return E(n) ? l = c = {
        center: .5,
        edges: .5,
        end: 1
      }[n] || 0 : !a && o && (l = n[0], c = n[1]), function (t, a, f) {
        var h,
          p,
          d,
          _,
          g,
          m,
          v,
          y,
          x,
          w = (f || e).length,
          T = s[w];
        if (!T) {
          if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
            for (v = -b; v < (v = f[x++].getBoundingClientRect().left) && x < w;);
            x < w && x--;
          }
          for (T = s[w] = [], h = o ? Math.min(x, w) * l - .5 : n % x, p = x === b ? 0 : o ? w * c / x - .5 : n / x | 0, v = 0, y = b, m = 0; m < w; m++) d = m % x - h, _ = p - (m / x | 0), T[m] = g = u ? Math.abs("y" === u ? _ : d) : O(d * d + _ * _), g > v && (v = g), g < y && (y = g);
          "random" === n && re(T), T.max = v - y, T.min = y, T.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : u ? "y" === u ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === n ? -1 : 1), T.b = w < 0 ? i - w : i, T.u = Zt(e.amount || e.each) || 0, r = r && w < 0 ? Ae(r) : r;
        }
        return w = (T[t] - T.min) / T.max || 0, _t(T.b + (r ? r(w) : w) * T.v) + T.u;
      };
    },
    ie = function ie(t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var n = _t(Math.round(parseFloat(r) / t) * t * e);
        return (n - n % 1) / e + (P(r) ? 0 : Zt(r));
      };
    },
    se = function se(t, e) {
      var r,
        n,
        i = B(t);
      return !i && R(t) && (r = i = t.radius || b, t.values ? (t = _te(t.values), (n = !P(t[0])) && (r *= r)) : t = ie(t.increment)), $t(e, i ? A(t) ? function (e) {
        return n = t(e), Math.abs(n - e) <= r ? n : e;
      } : function (e) {
        for (var i, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), u = b, l = 0, c = t.length; c--;) (i = n ? (i = t[c].x - a) * i + (s = t[c].y - o) * s : Math.abs(t[c] - a)) < u && (u = i, l = c);
        return l = !r || u <= r ? t[l] : e, n || l === e || P(e) ? l : l + Zt(e);
      } : ie(t));
    },
    ae = function ae(t, e, r, n) {
      return $t(B(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
        return B(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n;
      });
    },
    oe = function oe(t, e, r) {
      return $t(r, function (r) {
        return t[~~e(r)];
      });
    },
    ue = function ue(t) {
      for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? H : L), a += t.substr(s, e - s) + ae(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), s = n + 1;
      return a + t.substr(s, t.length - s);
    },
    le = function le(t, e, r, n, i) {
      var s = e - t,
        a = n - r;
      return $t(i, function (e) {
        return r + ((e - t) / s * a || 0);
      });
    },
    ce = function ce(t, e, r) {
      var n,
        i,
        s,
        a = t.labels,
        o = b;
      for (n in a) (i = a[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n, o = i);
      return s;
    },
    fe = function fe(t, e, r) {
      var n,
        s,
        a,
        o = t.vars,
        u = o[e],
        l = i,
        c = t._ctx;
      if (u) return n = o[e + "Params"], s = o.callbackScope || t, r && nt.length && vt(), c && (i = c), a = n ? u.apply(s, n) : u.call(s), i = l, a;
    },
    he = function he(t) {
      return Et(t), t.scrollTrigger && t.scrollTrigger.kill(!!n), t.progress() < 1 && fe(t, "onInterrupt"), t;
    },
    pe = [],
    de = function de(t) {
      if (t) if (t = !t.name && t["default"] || t, F() || t.headless) {
        var e = t.name,
          r = A(t),
          n = e && !r && t.init ? function () {
            this._props = [];
          } : t,
          i = {
            init: K,
            render: sr,
            add: Ue,
            kill: or,
            modifier: ar,
            rawVars: 0
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: er,
            aliases: {},
            register: 0
          };
        if (Me(), t !== n) {
          if (st[e]) return;
          wt(n, wt(Mt(t, i), s)), Tt(n.prototype, Tt(i, Mt(t, s))), st[n.prop = e] = n, t.targetTest && (ut.push(n), rt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
        }
        Z(e, n), t.register && t.register(Tr, n, cr);
      } else pe.push(t);
    },
    _e = 255,
    ge = {
      aqua: [0, _e, _e],
      lime: [0, _e, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _e],
      navy: [0, 0, 128],
      white: [_e, _e, _e],
      olive: [128, 128, 0],
      yellow: [_e, _e, 0],
      orange: [_e, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_e, 0, 0],
      pink: [_e, 192, 203],
      cyan: [0, _e, _e],
      transparent: [_e, _e, _e, 0]
    },
    me = function me(t, e, r) {
      return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * _e + .5 | 0;
    },
    ve = function ve(t, e, r) {
      var n,
        i,
        s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p = t ? P(t) ? [t >> 16, t >> 8 & _e, t & _e] : 0 : ge.black;
      if (!p) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t]) p = ge[t];else if ("#" === t.charAt(0)) {
          if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + n + n + i + i + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & _e, p & _e, parseInt(t.substr(7), 16) / 255];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & _e, t & _e];
        } else if ("hsl" === t.substr(0, 3)) {
          if (p = h = t.match(L), e) {
            if (~t.indexOf("=")) return p = t.match(X), r && p.length < 4 && (p[3] = 1), p;
          } else a = +p[0] % 360 / 360, o = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = me(a + 1 / 3, n, i), p[1] = me(a, n, i), p[2] = me(a - 1 / 3, n, i);
        } else p = t.match(L) || ge.transparent;
        p = p.map(Number);
      }
      return e && !h && (n = p[0] / _e, i = p[1] / _e, s = p[2] / _e, u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2, l === c ? a = o = 0 : (f = l - c, o = u > .5 ? f / (2 - l - c) : f / (l + c), a = l === n ? (i - s) / f + (i < s ? 6 : 0) : l === i ? (s - n) / f + 2 : (n - i) / f + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p;
    },
    ye = function ye(t) {
      var e = [],
        r = [],
        n = -1;
      return t.split(be).forEach(function (t) {
        var i = t.match(N) || [];
        e.push.apply(e, i), r.push(n += i.length + 1);
      }), e.c = r, e;
    },
    xe = function xe(t, e, r) {
      var n,
        i,
        s,
        a,
        o = "",
        u = (t + o).match(be),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (u = u.map(function (t) {
        return (t = ve(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      }), r && (s = ye(t), (n = r.c).join(o) !== s.c.join(o))) for (a = (i = t.replace(be, "1").split(N)).length - 1; c < a; c++) o += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
      if (!i) for (a = (i = t.split(be)).length - 1; c < a; c++) o += i[c] + u[c];
      return o + i[a];
    },
    be = function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in ge) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    }(),
    we = /hsl[a]?\(/,
    Te = function Te(t) {
      var e,
        r = t.join(" ");
      if (be.lastIndex = 0, be.test(r)) return e = we.test(r), t[1] = xe(t[1], e), t[0] = xe(t[0], e, ye(t[1])), !0;
    },
    ke = function () {
      var t,
        e,
        r,
        n,
        i,
        s,
        c = Date.now,
        f = 500,
        p = 33,
        d = c(),
        _ = d,
        g = 1e3 / 240,
        m = g,
        v = [],
        y = function r(a) {
          var o,
            u,
            l,
            h,
            y = c() - _,
            x = !0 === a;
          if ((y > f || y < 0) && (d += y - p), ((o = (l = (_ += y) - d) - m) > 0 || x) && (h = ++n.frame, i = l - 1e3 * n.time, n.time = l /= 1e3, m += o + (o >= g ? 4 : g - o), u = 1), x || (t = e(r)), u) for (s = 0; s < v.length; s++) v[s](l, i, h, a);
        };
      return n = {
        time: 0,
        frame: 0,
        tick: function tick() {
          y(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return i / (1e3 / (t || 60));
        },
        wake: function wake() {
          l && (!o && F() && (a = o = window, u = a.document || {}, V.gsap = Tr, (a.gsapVersions || (a.gsapVersions = [])).push(Tr.version), G(j || a.GreenSockGlobals || !a.gsap && a || {}), pe.forEach(de)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && n.sleep(), e = r || function (t) {
            return setTimeout(t, m - 1e3 * n.time + 1 | 0);
          }, h = 1, y(2));
        },
        sleep: function sleep() {
          (r ? cancelAnimationFrame : clearTimeout)(t), h = 0, e = K;
        },
        lagSmoothing: function lagSmoothing(t, e) {
          f = t || 1 / 0, p = Math.min(e || 33, f);
        },
        fps: function fps(t) {
          g = 1e3 / (t || 240), m = 1e3 * n.time + g;
        },
        add: function add(t, e, r) {
          var i = e ? function (e, r, s, a) {
            t(e, r, s, a), n.remove(i);
          } : t;
          return n.remove(t), v[r ? "unshift" : "push"](i), Me(), i;
        },
        remove: function remove(t, e) {
          ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
        },
        _listeners: v
      };
    }(),
    Me = function Me() {
      return !h && ke.wake();
    },
    Oe = {},
    Ce = /^[\d.\-M][\d.\-,\s]/,
    Se = /["']/g,
    Ee = function Ee(t) {
      for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[a] = isNaN(n) ? n.replace(Se, "").trim() : +n, a = r.substr(e + 1).trim();
      return i;
    },
    Ae = function Ae(t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Pe = function t(e, r) {
      for (var n, i = e._first; i;) i instanceof Le ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next;
    },
    De = function De(t, e) {
      return t && (A(t) ? t : Oe[t] || function (t) {
        var e,
          r,
          n,
          i,
          s = (t + "").split("("),
          a = Oe[s[0]];
        return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ee(s[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(xt)) : Oe._CE && Ce.test(t) ? Oe._CE("", t) : a;
      }(t)) || e;
    },
    Re = function Re(t, e, r, n) {
      void 0 === r && (r = function r(t) {
        return 1 - e(1 - t);
      }), void 0 === n && (n = function n(t) {
        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
      });
      var i,
        s = {
          easeIn: e,
          easeOut: r,
          easeInOut: n
        };
      return pt(t, function (t) {
        for (var e in Oe[t] = V[t] = s, Oe[i = t.toLowerCase()] = r, s) Oe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Oe[t + "." + e] = s[e];
      }), s;
    },
    ze = function ze(t) {
      return function (e) {
        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2;
      };
    },
    Fe = function t(e, r, n) {
      var i = r >= 1 ? r : 1,
        s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
        a = s / T * (Math.asin(1 / i) || 0),
        o = function o(t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * S((t - a) * s) + 1;
        },
        u = "out" === e ? o : "in" === e ? function (t) {
          return 1 - o(1 - t);
        } : ze(o);
      return s = T / s, u.config = function (r, n) {
        return t(e, r, n);
      }, u;
    },
    Ie = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var n = function n(t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        i = "out" === e ? n : "in" === e ? function (t) {
          return 1 - n(1 - t);
        } : ze(n);
      return i.config = function (r) {
        return t(e, r);
      }, i;
    };
  pt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Re(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn, Re("Elastic", Fe("in"), Fe("out"), Fe()), p = 7.5625, g = 2 * (_ = 1 / (d = 2.75)), m = 2.5 * _, Re("Bounce", function (t) {
    return 1 - v(1 - t);
  }, v = function v(t) {
    return t < _ ? p * t * t : t < g ? p * Math.pow(t - 1.5 / d, 2) + .75 : t < m ? p * (t -= 2.25 / d) * t + .9375 : p * Math.pow(t - 2.625 / d, 2) + .984375;
  }), Re("Expo", function (t) {
    return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
  }), Re("Circ", function (t) {
    return -(O(1 - t * t) - 1);
  }), Re("Sine", function (t) {
    return 1 === t ? 1 : 1 - C(t * k);
  }), Re("Back", Ie("in"), Ie("out"), Ie()), Oe.SteppedEase = Oe.steps = V.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        n = t + (e ? 0 : 1),
        i = e ? 1 : 0;
      return function (t) {
        return ((n * Qt(0, .99999999, t) | 0) + i) * r;
      };
    }
  }, x.ease = Oe["quad.out"], pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return lt += t + "," + t + "Params,";
  });
  var Ye = function Ye(t, e) {
      this.id = M++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ht, this.set = e ? e.getSetter : er;
    },
    Be = function () {
      function t(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ht(this, +t.duration, 1, 1), this.data = t.data, i && (this._ctx = i, i.data.push(this)), h || ke.wake();
      }
      var e = t.prototype;
      return e.delay = function (t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
      }, e.duration = function (t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
      }, e.totalDuration = function (t) {
        return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }, e.totalTime = function (t, e) {
        if (Me(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Yt(this, t), !r._dp || r.parent || Bt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Lt(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === w || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), yt(this, t, e)), this;
      }, e.time = function (t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
      }, e.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
      }, e.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
      }, e.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? zt(this._tTime, r) + 1 : 1;
      }, e.timeScale = function (t, e) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var r = this.parent && this._ts ? Ft(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Qt(-Math.abs(this._delay), this._tDur, r), !1 !== e), It(this), function (t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t;
        }(this);
      }, e.paused = function (t) {
        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Me(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== w && (this._tTime -= w)))), this) : this._ps;
      }, e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return e && (e._sort || !this.parent) && Lt(e, this, t - this._delay), this;
        }
        return this._start;
      }, e.endTime = function (t) {
        return this._start + (z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }, e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ft(e.rawTime(t), this) : this._tTime : this._tTime;
      }, e.revert = function (t) {
        void 0 === t && (t = et);
        var e = n;
        return n = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), n = e, this;
      }, e.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
        return !this.parent && this._sat ? this._sat.globalTime(t) : r;
      }, e.repeat = function (t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
      }, e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return this._rDelay = t, Wt(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }, e.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo;
      }, e.seek = function (t, e) {
        return this.totalTime(jt(this, t), z(e));
      }, e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, z(e)), this._dur || (this._zTime = -1e-8), this;
      }, e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }, e.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }, e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }, e.resume = function () {
        return this.paused(!1);
      }, e.reversed = function (t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
      }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -1e-8, this;
      }, e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - w));
      }, e.eventCallback = function (t, e, r) {
        var n = this.vars;
        return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
      }, e.then = function (t) {
        var e = this;
        return new Promise(function (r) {
          var n = A(t) ? t : bt,
            i = function i() {
              var t = e.then;
              e.then = null, A(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t;
            };
          e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i;
        });
      }, e.kill = function () {
        he(this);
      }, t;
    }();
  wt(Be.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Le = function (r) {
    function i(e, n) {
      var i;
      return void 0 === e && (e = {}), (i = r.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = z(e.sortChildren), s && Lt(e.parent || s, t(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Xt(t(i), e.scrollTrigger), i;
    }
    e(i, r);
    var a = i.prototype;
    return a.to = function (t, e, r) {
      return Gt(0, arguments, this), this;
    }, a.from = function (t, e, r) {
      return Gt(1, arguments, this), this;
    }, a.fromTo = function (t, e, r, n) {
      return Gt(2, arguments, this), this;
    }, a.set = function (t, e, r) {
      return e.duration = 0, e.parent = this, Ot(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Qe(t, e, jt(this, r), 1), this;
    }, a.call = function (t, e, r) {
      return Lt(this, Qe.delayedCall(0, t, e), r);
    }, a.staggerTo = function (t, e, r, n, i, s, a) {
      return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Qe(t, r, jt(this, i)), this;
    }, a.staggerFrom = function (t, e, r, n, i, s, a) {
      return r.runBackwards = 1, Ot(r).immediateRender = z(r.immediateRender), this.staggerTo(t, e, r, n, i, s, a);
    }, a.staggerFromTo = function (t, e, r, n, i, s, a, o) {
      return n.startAt = r, Ot(n).immediateRender = z(n.immediateRender), this.staggerTo(t, e, n, i, s, a, o);
    }, a.render = function (t, e, r) {
      var i,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        m = this._time,
        v = this._dirty ? this.totalDuration() : this._tDur,
        y = this._dur,
        x = t <= 0 ? 0 : _t(t),
        b = this._zTime < 0 != t < 0 && (this._initted || !y);
      if (this !== s && x > v && t >= 0 && (x = v), x !== this._tTime || r || b) {
        if (m !== this._time && y && (x += this._time - m, t += this._time - m), i = x, p = this._start, c = !(h = this._ts), b && (y || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
          if (_ = this._yoyo, l = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, r);
          if (i = _t(x % l), x === v ? (u = this._repeat, i = y) : ((u = ~~(d = _t(x / l))) && u === d && (i = y, u--), i > y && (i = y)), d = zt(this._tTime, l), !m && this._tTime && d !== u && this._tTime - d * l - this._dur <= 0 && (d = u), _ && 1 & u && (i = y - i, g = 1), u !== d && !this._lock) {
            var T = _ && 1 & d,
              k = T === (_ && 1 & u);
            if (u < d && (T = !T), m = T ? 0 : x % y ? y : x, this._lock = 1, this.render(m || (g ? 0 : _t(u * l)), e, !y)._lock = 0, this._tTime = x, !e && this.parent && fe(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), m && m !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (y = this._dur, v = this._tDur, k && (this._lock = 2, m = T ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
            Pe(this, g);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (f = function (t, e, r) {
          var n;
          if (r > e) for (n = t._first; n && n._start <= r;) {
            if ("isPause" === n.data && n._start > e) return n;
            n = n._next;
          } else for (n = t._last; n && n._start >= r;) {
            if ("isPause" === n.data && n._start < e) return n;
            n = n._prev;
          }
        }(this, _t(m), _t(i)), f && (x -= i - (i = f._start))), this._tTime = x, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && !u && (fe(this, "onStart"), this._tTime !== x)) return this;
        if (i >= m && t >= 0) for (a = this._first; a;) {
          if (o = a._next, (a._act || i >= a._start) && a._ts && f !== a) {
            if (a.parent !== this) return this.render(t, e, r);
            if (a.render(a._ts > 0 ? (i - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (i - a._start) * a._ts, e, r), i !== this._time || !this._ts && !c) {
              f = 0, o && (x += this._zTime = -1e-8);
              break;
            }
          }
          a = o;
        } else {
          a = this._last;
          for (var M = t < 0 ? t : i; a;) {
            if (o = a._prev, (a._act || M <= a._end) && a._ts && f !== a) {
              if (a.parent !== this) return this.render(t, e, r);
              if (a.render(a._ts > 0 ? (M - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (M - a._start) * a._ts, e, r || n && (a._initted || a._startAt)), i !== this._time || !this._ts && !c) {
                f = 0, o && (x += this._zTime = M ? -1e-8 : w);
                break;
              }
            }
            a = o;
          }
        }
        if (f && !e && (this.pause(), f.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = p, It(this), this.render(t, e, r);
        this._onUpdate && !e && fe(this, "onUpdate", !0), (x === v && this._tTime >= this.totalDuration() || !x && m) && (p !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !y) && (x === v && this._ts > 0 || !x && this._ts < 0) && Et(this, 1), e || t < 0 && !m || !x && !m && v || (fe(this, x === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, a.add = function (t, e) {
      var r = this;
      if (P(e) || (e = jt(this, e, t)), !(t instanceof Be)) {
        if (B(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (E(t)) return this.addLabel(t, e);
        if (!A(t)) return this;
        t = Qe.delayedCall(0, t);
      }
      return this !== t ? Lt(this, t, e) : this;
    }, a.getChildren = function (t, e, r, n) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -b);
      for (var i = [], s = this._first; s;) s._start >= n && (s instanceof Qe ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
      return i;
    }, a.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, a.remove = function (t) {
      return E(t) ? this.removeLabel(t) : A(t) ? this.killTweensOf(t) : (t.parent === this && St(this, t), t === this._recent && (this._recent = this._last), At(this));
    }, a.totalTime = function (t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _t(ke.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), r.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, a.addLabel = function (t, e) {
      return this.labels[t] = jt(this, e), this;
    }, a.removeLabel = function (t) {
      return delete this.labels[t], this;
    }, a.addPause = function (t, e, r) {
      var n = Qe.delayedCall(0, e || K, r);
      return n.data = "isPause", this._hasPause = 1, Lt(this, n, jt(this, t));
    }, a.removePause = function (t) {
      var e = this._first;
      for (t = jt(this, t); e;) e._start === t && "isPause" === e.data && Et(e), e = e._next;
    }, a.killTweensOf = function (t, e, r) {
      for (var n = this.getTweensOf(t, r), i = n.length; i--;) Xe !== n[i] && n[i].kill(t, e);
      return this;
    }, a.getTweensOf = function (t, e) {
      for (var r, n = [], i = _te(t), s = this._first, a = P(e); s;) s instanceof Qe ? mt(s._targets, i) && (a ? (!Xe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r), s = s._next;
      return n;
    }, a.tweenTo = function (t, e) {
      e = e || {};
      var r,
        n = this,
        i = jt(n, t),
        s = e,
        a = s.startAt,
        o = s.onStart,
        u = s.onStartParams,
        l = s.immediateRender,
        c = Qe.to(n, wt({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: i,
          overwrite: "auto",
          duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || w,
          onStart: function onStart() {
            if (n.pause(), !r) {
              var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
              c._dur !== t && Ht(c, t, 0, 1).render(c._time, !0, !0), r = 1;
            }
            o && o.apply(c, u || []);
          }
        }, e));
      return l ? c.render(0) : c;
    }, a.tweenFromTo = function (t, e, r) {
      return this.tweenTo(e, wt({
        startAt: {
          time: jt(this, t)
        }
      }, r));
    }, a.recent = function () {
      return this._recent;
    }, a.nextLabel = function (t) {
      return void 0 === t && (t = this._time), ce(this, jt(this, t));
    }, a.previousLabel = function (t) {
      return void 0 === t && (t = this._time), ce(this, jt(this, t), 1);
    }, a.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + w);
    }, a.shiftChildren = function (t, e, r) {
      void 0 === r && (r = 0);
      for (var n, i = this._first, s = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
      if (e) for (n in s) s[n] >= r && (s[n] += t);
      return At(this);
    }, a.invalidate = function (t) {
      var e = this._first;
      for (this._lock = 0; e;) e.invalidate(t), e = e._next;
      return r.prototype.invalidate.call(this, t);
    }, a.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), At(this);
    }, a.totalDuration = function (t) {
      var e,
        r,
        n,
        i = 0,
        a = this,
        o = a._last,
        u = b;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (n = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && a._sort && o._ts && !a._lock ? (a._lock = 1, Lt(a, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (i -= r, (!n && !a._dp || n && n.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), u = 0), o._end > i && o._ts && (i = o._end), o = e;
        Ht(a, a === s && a._time > i ? a._time : i, 1, 1), a._dirty = 0;
      }
      return a._tDur;
    }, i.updateRoot = function (t) {
      if (s._ts && (yt(s, Ft(t, s)), c = ke.frame), ke.frame >= ot) {
        ot += y.autoSleep || 120;
        var e = s._first;
        if ((!e || !e._ts) && y.autoSleep && ke._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || ke.sleep();
        }
      }
    }, i;
  }(Be);
  wt(Le.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var Xe,
    Ne,
    qe = function qe(t, e, r, n, i, s, a) {
      var o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _ = new cr(this._pt, t, e, 0, 1, ir, null, i),
        g = 0,
        m = 0;
      for (_.b = r, _.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = ue(n)), s && (s(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(q) || []; o = q.exec(n);) c = o[0], f = n.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (h = parseFloat(u[m - 1]) || 0, _._pt = {
        _next: _._pt,
        p: f || 1 === m ? f : ",",
        s: h,
        c: "=" === c.charAt(1) ? gt(h, c) - h : parseFloat(c) - h,
        m: l && l < 4 ? Math.round : 0
      }, g = q.lastIndex);
      return _.c = g < n.length ? n.substring(g, n.length) : "", _.fp = a, (U.test(n) || p) && (_.e = 0), this._pt = _, _;
    },
    Ue = function Ue(t, e, r, n, i, s, a, o, u, l) {
      A(n) && (n = n(i || 0, t, s));
      var c,
        f = t[e],
        h = "get" !== r ? r : A(f) ? u ? t[e.indexOf("set") || !A(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
        p = A(f) ? u ? Je : Ke : Ze;
      if (E(n) && (~n.indexOf("random(") && (n = ue(n)), "=" === n.charAt(1) && ((c = gt(h, n) + (Zt(h) || 0)) || 0 === c) && (n = c)), !l || h !== n || Ne) return isNaN(h * n) || "" === n ? (!f && !(e in t) && $(e, n), qe.call(this, t, e, h, n, p, o || y.stringFilter, u)) : (c = new cr(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof f ? nr : rr, 0, p), u && (c.fp = u), a && c.modifier(a, this, t), this._pt = c);
    },
    He = function He(t, e, r, n, i, s) {
      var a, o, u, l;
      if (st[t] && !1 !== (a = new st[t]()).init(i, a.rawVars ? e[t] : function (t, e, r, n, i) {
        if (A(t) && (t = je(t, i, e, r, n)), !R(t) || t.style && t.nodeType || B(t) || Y(t)) return E(t) ? je(t, i, e, r, n) : t;
        var s,
          a = {};
        for (s in t) a[s] = je(t[s], i, e, r, n);
        return a;
      }(e[t], n, i, s, r), r, n, s) && (r._pt = o = new cr(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== f)) for (u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length; l--;) u[a._props[l]] = o;
      return a;
    },
    We = function t(e, i, a) {
      var o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        m,
        v,
        y,
        T = e.vars,
        k = T.ease,
        M = T.startAt,
        O = T.immediateRender,
        C = T.lazy,
        S = T.onUpdate,
        E = T.runBackwards,
        A = T.yoyoEase,
        P = T.keyframes,
        D = T.autoRevert,
        R = e._dur,
        F = e._startAt,
        I = e._targets,
        Y = e.parent,
        B = Y && "nested" === Y.data ? Y.vars.targets : I,
        L = "auto" === e._overwrite && !r,
        X = e.timeline;
      if (X && (!P || !k) && (k = "none"), e._ease = De(k, x.ease), e._yEase = A ? Ae(De(!0 === A ? k : A, x.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !X && !!T.runBackwards, !X || P && !T.stagger) {
        if (v = (d = I[0] ? ft(I[0]).harness : 0) && T[d.prop], o = Mt(T, rt), F && (F._zTime < 0 && F.progress(1), i < 0 && E && O && !D ? F.render(-1, !0) : F.revert(E && R ? tt : J), F._lazy = 0), M) {
          if (Et(e._startAt = Qe.set(I, wt({
            data: "isStart",
            overwrite: !1,
            parent: Y,
            immediateRender: !0,
            lazy: !F && z(C),
            startAt: null,
            delay: 0,
            onUpdate: S && function () {
              return fe(e, "onUpdate");
            },
            stagger: 0
          }, M))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (n || !O && !D) && e._startAt.revert(tt), O && R && i <= 0 && a <= 0) return void (i && (e._zTime = i));
        } else if (E && R && !F) if (i && (O = !1), l = wt({
          overwrite: !1,
          data: "isFromStart",
          lazy: O && !F && z(C),
          immediateRender: O,
          stagger: 0,
          parent: Y
        }, o), v && (l[d.prop] = v), Et(e._startAt = Qe.set(I, l)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (n ? e._startAt.revert(tt) : e._startAt.render(-1, !0)), e._zTime = i, O) {
          if (!i) return;
        } else t(e._startAt, w, w);
        for (e._pt = e._ptCache = 0, C = R && z(C) || C && !R, u = 0; u < I.length; u++) {
          if (p = (f = I[u])._gsap || ct(I)[u]._gsap, e._ptLookup[u] = g = {}, it[p.id] && nt.length && vt(), m = B === I ? u : B.indexOf(f), d && !1 !== (_ = new d()).init(f, v || o, e, m, B) && (e._pt = c = new cr(e._pt, f, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach(function (t) {
            g[t] = c;
          }), _.priority && (h = 1)), !d || v) for (l in o) st[l] && (_ = He(l, o, e, m, f, B)) ? _.priority && (h = 1) : g[l] = c = Ue.call(e, f, l, "get", o[l], m, B, 0, T.stringFilter);
          e._op && e._op[u] && e.kill(f, e._op[u]), L && e._pt && (Xe = e, s.killTweensOf(f, g, e.globalTime(i)), y = !e.parent, Xe = 0), e._pt && C && (it[p.id] = 1);
        }
        h && lr(e), e._onInit && e._onInit(e);
      }
      e._onUpdate = S, e._initted = (!e._op || e._pt) && !y, P && i <= 0 && X.render(b, !0, !0);
    },
    Ve = function Ve(t, e, r, n) {
      var i,
        s,
        a = e.ease || n || "power1.inOut";
      if (B(e)) s = r[t] || (r[t] = []), e.forEach(function (t, r) {
        return s.push({
          t: r / (e.length - 1) * 100,
          v: t,
          e: a
        });
      });else for (i in e) s = r[i] || (r[i] = []), "ease" === i || s.push({
        t: parseFloat(t),
        v: e[i],
        e: a
      });
    },
    je = function je(t, e, r, n, i) {
      return A(t) ? t.call(e, r, n, i) : E(t) && ~t.indexOf("random(") ? ue(t) : t;
    },
    Ge = lt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    $e = {};
  pt(Ge + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return $e[t] = 1;
  });
  var Qe = function (i) {
    function a(e, n, a, o) {
      var u;
      "number" == typeof n && (a.duration = n, n = a, a = null);
      var l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        m = (u = i.call(this, o ? n : Ot(n)) || this).vars,
        v = m.duration,
        x = m.delay,
        b = m.immediateRender,
        w = m.stagger,
        T = m.overwrite,
        k = m.keyframes,
        M = m.defaults,
        O = m.scrollTrigger,
        C = m.yoyoEase,
        S = n.parent || s,
        E = (B(e) || Y(e) ? P(e[0]) : "length" in n) ? [e] : _te(e);
      if (u._targets = E.length ? ct(E) : Q("GSAP target " + e + " not found. https://gsap.com", !y.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = T, k || w || I(v) || I(x)) {
        if (n = u.vars, (l = u.timeline = new Le({
          data: "nested",
          defaults: M || {},
          targets: S && "nested" === S.data ? S.vars.targets : E
        })).kill(), l.parent = l._dp = t(u), l._start = 0, w || I(v) || I(x)) {
          if (h = E.length, _ = w && ne(w), R(w)) for (p in w) ~Ge.indexOf(p) && (g || (g = {}), g[p] = w[p]);
          for (c = 0; c < h; c++) (f = Mt(n, $e)).stagger = 0, C && (f.yoyoEase = C), g && Tt(f, g), d = E[c], f.duration = +je(v, t(u), c, d, E), f.delay = (+je(x, t(u), c, d, E) || 0) - u._delay, !w && 1 === h && f.delay && (u._delay = x = f.delay, u._start += x, f.delay = 0), l.to(d, f, _ ? _(c, d, E) : 0), l._ease = Oe.none;
          l.duration() ? v = x = 0 : u.timeline = 0;
        } else if (k) {
          Ot(wt(l.vars.defaults, {
            ease: "none"
          })), l._ease = De(k.ease || n.ease || "none");
          var A,
            D,
            F,
            L = 0;
          if (B(k)) k.forEach(function (t) {
            return l.to(E, t, ">");
          }), l.duration();else {
            for (p in f = {}, k) "ease" === p || "easeEach" === p || Ve(p, k[p], f, k.easeEach);
            for (p in f) for (A = f[p].sort(function (t, e) {
              return t.t - e.t;
            }), L = 0, c = 0; c < A.length; c++) (F = {
              ease: (D = A[c]).e,
              duration: (D.t - (c ? A[c - 1].t : 0)) / 100 * v
            })[p] = D.v, l.to(E, F, L), L += F.duration;
            l.duration() < v && l.to({}, {
              duration: v - l.duration()
            });
          }
        }
        v || u.duration(v = l.duration());
      } else u.timeline = 0;
      return !0 !== T || r || (Xe = t(u), s.killTweensOf(E), Xe = 0), Lt(S, t(u), a), n.reversed && u.reverse(), n.paused && u.paused(!0), (b || !v && !k && u._start === _t(S._time) && z(b) && Dt(t(u)) && "nested" !== S.data) && (u._tTime = -1e-8, u.render(Math.max(0, -x) || 0)), O && Xt(t(u), O), u;
    }
    e(a, i);
    var o = a.prototype;
    return o.render = function (t, e, r) {
      var i,
        s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p = this._time,
        d = this._tDur,
        _ = this._dur,
        g = t < 0,
        m = t > d - w && !g ? d : t < w ? 0 : t;
      if (_) {
        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g || this._lazy) {
          if (i = m, f = this.timeline, this._repeat) {
            if (o = _ + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, r);
            if (i = _t(m % o), m === d ? (a = this._repeat, i = _) : (a = ~~(u = _t(m / o))) && a === u ? (i = _, a--) : i > _ && (i = _), (l = this._yoyo && 1 & a) && (h = this._yEase, i = _ - i), u = zt(this._tTime, o), i === p && !r && this._initted && a === u) return this._tTime = m, this;
            a !== u && (f && this._yEase && Pe(f, l), this.vars.repeatRefresh && !l && !this._lock && i !== o && this._initted && (this._lock = r = 1, this.render(_t(o * a), !0).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (Nt(this, g ? t : i, r, e, m)) return this._tTime = 0, this;
            if (!(p === this._time || r && this.vars.repeatRefresh && a !== u)) return this;
            if (_ !== this._dur) return this.render(t, e, r);
          }
          if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(i / _), this._from && (this.ratio = c = 1 - c), i && !p && !e && !a && (fe(this, "onStart"), this._tTime !== m)) return this;
          for (s = this._pt; s;) s.r(c, s.d), s = s._next;
          f && f.render(t < 0 ? t : f._dur * f._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Pt(this, t, 0, r), fe(this, "onUpdate")), this._repeat && a !== u && this.vars.onRepeat && !e && this.parent && fe(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (g && !this._onUpdate && Pt(this, t, 0, !0), (t || !_) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Et(this, 1), e || g && !p || !(m || p || l) || (fe(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()));
        }
      } else !function (t, e, r, i) {
        var s,
          a,
          o,
          u = t.ratio,
          l = e < 0 || !e && (!t._start && qt(t) && (t._initted || !Ut(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ut(t)) ? 0 : 1,
          c = t._rDelay,
          f = 0;
        if (c && t._repeat && (f = Qt(0, t._tDur, e), a = zt(f, c), t._yoyo && 1 & a && (l = 1 - l), a !== zt(t._tTime, c) && (u = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== u || n || i || t._zTime === w || !e && t._zTime) {
          if (!t._initted && Nt(t, e, i, r, f)) return;
          for (o = t._zTime, t._zTime = e || (r ? w : 0), r || (r = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = f, s = t._pt; s;) s.r(l, s.d), s = s._next;
          e < 0 && Pt(t, e, 0, !0), t._onUpdate && !r && fe(t, "onUpdate"), f && t._repeat && !r && t.parent && fe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Et(t, 1), r || n || (fe(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);
      return this;
    }, o.targets = function () {
      return this._targets;
    }, o.invalidate = function (t) {
      return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), i.prototype.invalidate.call(this, t);
    }, o.resetTo = function (t, e, r, n, i) {
      h || ke.wake(), this._ts || this.play();
      var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || We(this, s), function (t, e, r, n, i, s, a, o) {
        var u,
          l,
          c,
          f,
          h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!h) for (h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--;) {
          if ((u = c[f][e]) && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
          if (!u) return Ne = 1, t.vars[e] = "+=0", We(t, a), Ne = 0, o ? Q(e + " not eligible for reset") : 1;
          h.push(u);
        }
        for (f = h.length; f--;) (u = (l = h[f])._pt || l).s = !n && 0 !== n || i ? u.s + (n || 0) + s * u.c : n, u.c = r - u.s, l.e && (l.e = dt(r) + Zt(l.e)), l.b && (l.b = u.s + Zt(l.b));
      }(this, t, e, r, n, this._ease(s / this._dur), s, i) ? this.resetTo(t, e, r, n, 1) : (Yt(this, 0), this.parent || Ct(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, o.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? he(this) : this.scrollTrigger && this.scrollTrigger.kill(!!n), this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || he(this), this.parent && r !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }
      var i,
        s,
        a,
        o,
        u,
        l,
        c,
        f = this._targets,
        h = t ? _te(t) : f,
        p = this._ptLookup,
        d = this._pt;
      if ((!e || "all" === e) && function (t, e) {
        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
        return r < 0;
      }(f, h)) return "all" === e && (this._pt = 0), he(this);
      for (i = this._op = this._op || [], "all" !== e && (E(e) && (u = {}, pt(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function (t, e) {
        var r,
          n,
          i,
          s,
          a = t[0] ? ft(t[0]).harness : 0,
          o = a && a.aliases;
        if (!o) return e;
        for (n in r = Tt({}, e), o) if (n in r) for (i = (s = o[n].split(",")).length; i--;) r[s[i]] = r[n];
        return r;
      }(f, e)), c = f.length; c--;) if (~h.indexOf(f[c])) for (u in s = p[c], "all" === e ? (i[c] = e, o = s, a = {}) : (a = i[c] = i[c] || {}, o = e), o) (l = s && s[u]) && ("kill" in l.d && !0 !== l.d.kill(u) || St(this, l, "_pt"), delete s[u]), "all" !== a && (a[u] = 1);
      return this._initted && !this._pt && d && he(this), this;
    }, a.to = function (t, e) {
      return new a(t, e, arguments[2]);
    }, a.from = function (t, e) {
      return Gt(1, arguments);
    }, a.delayedCall = function (t, e, r, n) {
      return new a(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: n
      });
    }, a.fromTo = function (t, e, r) {
      return Gt(2, arguments);
    }, a.set = function (t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new a(t, e);
    }, a.killTweensOf = function (t, e, r) {
      return s.killTweensOf(t, e, r);
    }, a;
  }(Be);
  wt(Qe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), pt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    Qe[t] = function () {
      var e = new Le(),
        r = Kt.call(arguments, 0);
      return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
    };
  });
  var Ze = function Ze(t, e, r) {
      return t[e] = r;
    },
    Ke = function Ke(t, e, r) {
      return t[e](r);
    },
    Je = function Je(t, e, r, n) {
      return t[e](n.fp, r);
    },
    tr = function tr(t, e, r) {
      return t.setAttribute(e, r);
    },
    er = function er(t, e) {
      return A(t[e]) ? Ke : D(t[e]) && t.setAttribute ? tr : Ze;
    },
    rr = function rr(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    nr = function nr(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ir = function ir(t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;else if (1 === t && e.e) n = e.e;else {
        for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    sr = function sr(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
    },
    ar = function ar(t, e, r, n) {
      for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i;
    },
    or = function or(t) {
      for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? St(this, n, "_pt") : n.dep || (e = 1), n = r;
      return !e;
    },
    ur = function ur(t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    },
    lr = function lr(t) {
      for (var e, r, n, i, s = t._pt; s;) {
        for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
        (s._prev = r ? r._prev : i) ? s._prev._next = s : n = s, (s._next = r) ? r._prev = s : i = s, s = e;
      }
      t._pt = n;
    },
    cr = function () {
      function t(t, e, r, n, i, s, a, o, u) {
        this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || rr, this.d = a || this, this.set = o || Ze, this.pr = u || 0, this._next = t, t && (t._prev = this);
      }
      return t.prototype.modifier = function (t, e, r) {
        this.mSet = this.mSet || this.set, this.set = ur, this.m = t, this.mt = r, this.tween = e;
      }, t;
    }();
  pt(lt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return rt[t] = 1;
  }), V.TweenMax = V.TweenLite = Qe, V.TimelineLite = V.TimelineMax = Le, s = new Le({
    sortChildren: !1,
    defaults: x,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), y.stringFilter = Te;
  var fr = [],
    hr = {},
    pr = [],
    dr = 0,
    _r = 0,
    gr = function gr(t) {
      return (hr[t] || pr).map(function (t) {
        return t();
      });
    },
    mr = function mr() {
      var t = Date.now(),
        e = [];
      t - dr > 2 && (gr("matchMediaInit"), fr.forEach(function (t) {
        var r,
          n,
          i,
          s,
          o = t.queries,
          u = t.conditions;
        for (n in o) (r = a.matchMedia(o[n]).matches) && (i = 1), r !== u[n] && (u[n] = r, s = 1);
        s && (t.revert(), i && e.push(t));
      }), gr("matchMediaRevert"), e.forEach(function (t) {
        return t.onMatch(t, function (e) {
          return t.add(null, e);
        });
      }), dr = t, gr("matchMedia"));
    },
    vr = function () {
      function t(t, e) {
        this.selector = e && ee(e), this.data = [], this._r = [], this.isReverted = !1, this.id = _r++, t && this.add(t);
      }
      var e = t.prototype;
      return e.add = function (t, e, r) {
        A(t) && (r = e, e = t, t = A);
        var n = this,
          s = function s() {
            var t,
              s = i,
              a = n.selector;
            return s && s !== n && s.data.push(n), r && (n.selector = ee(r)), i = n, t = e.apply(n, arguments), A(t) && n._r.push(t), i = s, n.selector = a, n.isReverted = !1, t;
          };
        return n.last = s, t === A ? s(n, function (t) {
          return n.add(null, t);
        }) : t ? n[t] = s : s;
      }, e.ignore = function (t) {
        var e = i;
        i = null, t(this), i = e;
      }, e.getTweens = function () {
        var e = [];
        return this.data.forEach(function (r) {
          return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Qe && !(r.parent && "nested" === r.parent.data) && e.push(r);
        }), e;
      }, e.clear = function () {
        this._r.length = this.data.length = 0;
      }, e.kill = function (t, e) {
        var r = this;
        if (t ? function () {
          for (var e, n = r.getTweens(), i = r.data.length; i--;) "isFlip" === (e = r.data[i]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function (t) {
            return n.splice(n.indexOf(t), 1);
          }));
          for (n.map(function (t) {
            return {
              g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
              t: t
            };
          }).sort(function (t, e) {
            return e.g - t.g || -1 / 0;
          }).forEach(function (e) {
            return e.t.revert(t);
          }), i = r.data.length; i--;) (e = r.data[i]) instanceof Le ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof Qe) && e.revert && e.revert(t);
          r._r.forEach(function (e) {
            return e(t, r);
          }), r.isReverted = !0;
        }() : this.data.forEach(function (t) {
          return t.kill && t.kill();
        }), this.clear(), e) for (var n = fr.length; n--;) fr[n].id === this.id && fr.splice(n, 1);
      }, e.revert = function (t) {
        this.kill(t || {});
      }, t;
    }(),
    yr = function () {
      function t(t) {
        this.contexts = [], this.scope = t, i && i.data.push(this);
      }
      var e = t.prototype;
      return e.add = function (t, e, r) {
        R(t) || (t = {
          matches: t
        });
        var n,
          s,
          o,
          u = new vr(0, r || this.scope),
          l = u.conditions = {};
        for (s in i && !u.selector && (u.selector = i.selector), this.contexts.push(u), e = u.add("onMatch", e), u.queries = t, t) "all" === s ? o = 1 : (n = a.matchMedia(t[s])) && (fr.indexOf(u) < 0 && fr.push(u), (l[s] = n.matches) && (o = 1), n.addListener ? n.addListener(mr) : n.addEventListener("change", mr));
        return o && e(u, function (t) {
          return u.add(null, t);
        }), this;
      }, e.revert = function (t) {
        this.kill(t || {});
      }, e.kill = function (t) {
        this.contexts.forEach(function (e) {
          return e.kill(t, !0);
        });
      }, t;
    }(),
    xr = {
      registerPlugin: function registerPlugin() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        e.forEach(function (t) {
          return de(t);
        });
      },
      timeline: function timeline(t) {
        return new Le(t);
      },
      getTweensOf: function getTweensOf(t, e) {
        return s.getTweensOf(t, e);
      },
      getProperty: function getProperty(t, e, r, n) {
        E(t) && (t = _te(t)[0]);
        var i = ft(t || {}).get,
          s = r ? bt : xt;
        return "native" === r && (r = ""), t ? e ? s((st[e] && st[e].get || i)(t, e, r, n)) : function (e, r, n) {
          return s((st[e] && st[e].get || i)(t, e, r, n));
        } : t;
      },
      quickSetter: function quickSetter(t, e, r) {
        if ((t = _te(t)).length > 1) {
          var n = t.map(function (t) {
              return Tr.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--;) n[e](t);
          };
        }
        t = t[0] || {};
        var s = st[e],
          a = ft(t),
          o = a.harness && (a.harness.aliases || {})[e] || e,
          u = s ? function (e) {
            var n = new s();
            f._pt = 0, n.init(t, r ? e + r : e, f, 0, [t]), n.render(1, n), f._pt && sr(1, f);
          } : a.set(t, o);
        return s ? u : function (e) {
          return u(t, o, r ? e + r : e, a, 1);
        };
      },
      quickTo: function quickTo(t, e, r) {
        var n,
          i = Tr.to(t, wt(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
          s = function s(t, r, n) {
            return i.resetTo(e, t, r, n);
          };
        return s.tween = i, s;
      },
      isTweening: function isTweening(t) {
        return s.getTweensOf(t, !0).length > 0;
      },
      defaults: function defaults(t) {
        return t && t.ease && (t.ease = De(t.ease, x.ease)), kt(x, t || {});
      },
      config: function config(t) {
        return kt(y, t || {});
      },
      registerEffect: function registerEffect(t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return t && !st[t] && !V[t] && Q(e + " effect requires " + t + " plugin.");
        }), at[e] = function (t, e, n) {
          return r(_te(t), wt(e || {}, i), n);
        }, s && (Le.prototype[e] = function (t, r, n) {
          return this.add(at[e](t, R(r) ? r : (n = r) && {}, this), n);
        });
      },
      registerEase: function registerEase(t, e) {
        Oe[t] = De(e);
      },
      parseEase: function parseEase(t, e) {
        return arguments.length ? De(t, e) : Oe;
      },
      getById: function getById(t) {
        return s.getById(t);
      },
      exportRoot: function exportRoot(t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Le(t);
        for (i.smoothChildTiming = z(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, r = s._first; r;) n = r._next, !e && !r._dur && r instanceof Qe && r.vars.onComplete === r._targets[0] || Lt(i, r, r._start - r._delay), r = n;
        return Lt(s, i, 0), i;
      },
      context: function context(t, e) {
        return t ? new vr(t, e) : i;
      },
      matchMedia: function matchMedia(t) {
        return new yr(t);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return fr.forEach(function (t) {
          var e,
            r,
            n = t.conditions;
          for (r in n) n[r] && (n[r] = !1, e = 1);
          e && t.revert();
        }) || mr();
      },
      addEventListener: function addEventListener(t, e) {
        var r = hr[t] || (hr[t] = []);
        ~r.indexOf(e) || r.push(e);
      },
      removeEventListener: function removeEventListener(t, e) {
        var r = hr[t],
          n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1);
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return B(e) ? oe(e, t(0, e.length), r) : $t(n, function (t) {
            return (i + (t - e) % i) % i + e;
          });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            s = 2 * i;
          return B(e) ? oe(e, t(0, e.length - 1), r) : $t(n, function (t) {
            return e + ((t = (s + (t - e) % s) % s || 0) > i ? s - t : t);
          });
        },
        distribute: ne,
        random: ae,
        snap: se,
        normalize: function normalize(t, e, r) {
          return le(t, e, 0, 1, r);
        },
        getUnit: Zt,
        clamp: function clamp(t, e, r) {
          return $t(r, function (r) {
            return Qt(t, e, r);
          });
        },
        splitColor: ve,
        toArray: _te,
        selector: ee,
        mapRange: le,
        pipe: function pipe() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function unitize(t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || Zt(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var s = isNaN(e + r) ? 0 : function (t) {
            return (1 - t) * e + t * r;
          };
          if (!s) {
            var a,
              o,
              u,
              l,
              c,
              f = E(e),
              h = {};
            if (!0 === n && (i = 1) && (n = null), f) e = {
              p: e
            }, r = {
              p: r
            };else if (B(e) && !B(r)) {
              for (u = [], l = e.length, c = l - 2, o = 1; o < l; o++) u.push(t(e[o - 1], e[o]));
              l--, s = function s(t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e);
              }, n = r;
            } else i || (e = Tt(B(e) ? [] : {}, e));
            if (!u) {
              for (a in r) Ue.call(h, e, a, "get", r[a]);
              s = function s(t) {
                return sr(t, h) || (f ? e.p : e);
              };
            }
          }
          return $t(n, s);
        },
        shuffle: re
      },
      install: G,
      effects: at,
      ticker: ke,
      updateRoot: Le.updateRoot,
      plugins: st,
      globalTimeline: s,
      core: {
        PropTween: cr,
        globals: Z,
        Tween: Qe,
        Timeline: Le,
        Animation: Be,
        getCache: ft,
        _removeLinkedListItem: St,
        reverting: function reverting() {
          return n;
        },
        context: function context(t) {
          return t && i && (i.data.push(t), t._ctx = i), i;
        },
        suppressOverwrites: function suppressOverwrites(t) {
          return r = t;
        }
      }
    };
  pt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return xr[t] = Qe[t];
  }), ke.add(Le.updateRoot), f = xr.to({}, {
    duration: 0
  });
  var br = function br(t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
      return r;
    },
    wr = function wr(t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function init(t, r, n) {
          n._onInit = function (t) {
            var n, i;
            if (E(r) && (n = {}, pt(r, function (t) {
              return n[t] = 1;
            }), r = n), e) {
              for (i in n = {}, r) n[i] = e(r[i]);
              r = n;
            }
            !function (t, e) {
              var r,
                n,
                i,
                s = t._targets;
              for (r in e) for (n = s.length; n--;) (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = br(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r));
            }(t, r);
          };
        }
      };
    },
    Tr = xr.registerPlugin({
      name: "attr",
      init: function init(t, e, r, n, i) {
        var s, a, o;
        for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], n, i, 0, 0, s)).op = s, a.b = o, this._props.push(s);
      },
      render: function render(t, e) {
        for (var r = e._pt; r;) n ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
      }
    }, {
      name: "endArray",
      init: function init(t, e) {
        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
      }
    }, wr("roundProps", ie), wr("modifiers"), wr("snap", se)) || xr;
  Qe.version = Le.version = Tr.version = "3.12.7", l = 1, F() && Me(), Oe.Power0, Oe.Power1, Oe.Power2, Oe.Power3, Oe.Power4, Oe.Linear, Oe.Quad, Oe.Cubic, Oe.Quart, Oe.Quint, Oe.Strong, Oe.Elastic, Oe.Back, Oe.SteppedEase, Oe.Bounce, Oe.Sine, Oe.Expo, Oe.Circ;
  var kr,
    Mr,
    Or,
    Cr,
    Sr,
    Er,
    Ar,
    Pr,
    Dr = {},
    Rr = 180 / Math.PI,
    zr = Math.PI / 180,
    Fr = Math.atan2,
    Ir = /([A-Z])/g,
    Yr = /(left|right|width|margin|padding|x)/i,
    Br = /[\s,\(]\S/,
    Lr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Xr = function Xr(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Nr = function Nr(t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    qr = function qr(t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    },
    Ur = function Ur(t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
    },
    Hr = function Hr(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Wr = function Wr(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    Vr = function Vr(t, e, r) {
      return t.style[e] = r;
    },
    jr = function jr(t, e, r) {
      return t.style.setProperty(e, r);
    },
    Gr = function Gr(t, e, r) {
      return t._gsap[e] = r;
    },
    $r = function $r(t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r;
    },
    Qr = function Qr(t, e, r, n, i) {
      var s = t._gsap;
      s.scaleX = s.scaleY = r, s.renderTransform(i, s);
    },
    Zr = function Zr(t, e, r, n, i) {
      var s = t._gsap;
      s[e] = r, s.renderTransform(i, s);
    },
    Kr = "transform",
    Jr = Kr + "Origin",
    tn = function t(e, r) {
      var n = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (e in Dr && s) {
        if (this.tfm = this.tfm || {}, "transform" === e) return Lr.transform.split(",").forEach(function (e) {
          return t.call(n, e, r);
        });
        if (~(e = Lr[e] || e).indexOf(",") ? e.split(",").forEach(function (t) {
          return n.tfm[t] = yn(i, t);
        }) : this.tfm[e] = a.x ? a[e] : yn(i, e), e === Jr && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(Kr) >= 0) return;
        a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Jr, r, "")), e = Kr;
      }
      (s || r) && this.props.push(e, r, s[e]);
    },
    en = function en(t) {
      t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
    },
    rn = function rn() {
      var t,
        e,
        r = this.props,
        n = this.target,
        i = n.style,
        s = n._gsap;
      for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(Ir, "-$1").toLowerCase());
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = Ar()) && t.isStart || i[Kr] || (en(i), s.zOrigin && i[Jr] && (i[Jr] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
      }
    },
    nn = function nn(t, e) {
      var r = {
        target: t,
        props: [],
        revert: rn,
        save: tn
      };
      return t._gsap || Tr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function (t) {
        return r.save(t);
      }), r;
    },
    sn = function sn(t, e) {
      var r = Mr.createElementNS ? Mr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Mr.createElement(t);
      return r && r.style ? r : Mr.createElement(t);
    },
    an = function t(e, r, n) {
      var i = getComputedStyle(e);
      return i[r] || i.getPropertyValue(r.replace(Ir, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, un(r) || r, 1) || "";
    },
    on = "O,Moz,ms,Ms,Webkit".split(","),
    un = function un(t, e, r) {
      var n = (e || Sr).style,
        i = 5;
      if (t in n && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(on[i] + t in n););
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? on[i] : "") + t;
    },
    ln = function ln() {
      "undefined" != typeof window && window.document && (kr = window, Mr = kr.document, Or = Mr.documentElement, Sr = sn("div") || {
        style: {}
      }, sn("div"), Kr = un(Kr), Jr = Kr + "Origin", Sr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Pr = !!un("perspective"), Ar = Tr.core.reverting, Cr = 1);
    },
    cn = function cn(t) {
      var e,
        r = t.ownerSVGElement,
        n = sn("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = t.cloneNode(!0);
      i.style.display = "block", n.appendChild(i), Or.appendChild(n);
      try {
        e = i.getBBox();
      } catch (t) {}
      return n.removeChild(i), Or.removeChild(n), e;
    },
    fn = function fn(t, e) {
      for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    hn = function hn(t) {
      var e, r;
      try {
        e = t.getBBox();
      } catch (n) {
        e = cn(t), r = 1;
      }
      return e && (e.width || e.height) || r || (e = cn(t)), !e || e.width || e.x || e.y ? e : {
        x: +fn(t, ["x", "cx", "x1"]) || 0,
        y: +fn(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      };
    },
    pn = function pn(t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !hn(t));
    },
    dn = function dn(t, e) {
      if (e) {
        var r,
          n = t.style;
        e in Dr && e !== Jr && (e = Kr), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(Ir, "-$1").toLowerCase())) : n.removeAttribute(e);
      }
    },
    _n = function _n(t, e, r, n, i, s) {
      var a = new cr(t._pt, e, r, 0, 1, s ? Wr : Hr);
      return t._pt = a, a.b = n, a.e = i, t._props.push(r), a;
    },
    gn = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    mn = {
      grid: 1,
      flex: 1
    },
    vn = function t(e, r, n, i) {
      var s,
        a,
        o,
        u,
        l = parseFloat(n) || 0,
        c = (n + "").trim().substr((l + "").length) || "px",
        f = Sr.style,
        h = Yr.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
        _ = 100,
        g = "px" === i,
        m = "%" === i;
      if (i === c || !l || gn[i] || gn[c]) return l;
      if ("px" !== c && !g && (l = t(e, r, n, "px")), u = e.getCTM && pn(e), (m || "%" === c) && (Dr[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[h ? "width" : "height"] : e[d], dt(m ? l / s * _ : l / 100 * s);
      if (f[h ? "width" : "height"] = _ + (g ? c : i), a = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Mr && a.appendChild || (a = Mr.body), (o = a._gsap) && m && o.width && h && o.time === ke.time && !o.uncache) return dt(l / o.width * _);
      if (!m || "height" !== r && "width" !== r) (m || "%" === c) && !mn[an(a, "display")] && (f.position = an(e, "position")), a === e && (f.position = "static"), a.appendChild(Sr), s = Sr[d], a.removeChild(Sr), f.position = "absolute";else {
        var v = e.style[r];
        e.style[r] = _ + i, s = e[d], v ? e.style[r] = v : dn(e, r);
      }
      return h && m && ((o = ft(a)).time = ke.time, o.width = a[d]), dt(g ? s * l / _ : s && l ? _ / s * l : 0);
    },
    yn = function yn(t, e, r, n) {
      var i;
      return Cr || ln(), e in Lr && "transform" !== e && ~(e = Lr[e]).indexOf(",") && (e = e.split(",")[0]), Dr[e] && "transform" !== e ? (i = An(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Pn(an(t, Jr)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Tn[e] && Tn[e](t, e, r) || an(t, e) || ht(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? vn(t, e, i, r) + r : i;
    },
    xn = function xn(t, e, r, n) {
      if (!r || "none" === r) {
        var i = un(e, t, 1),
          s = i && an(t, i, 1);
        s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = an(t, "borderTopColor"));
      }
      var a,
        o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        m = new cr(this._pt, t.style, e, 0, 1, ir),
        v = 0,
        x = 0;
      if (m.b = r, m.e = n, r += "", "auto" == (n += "") && (f = t.style[e], t.style[e] = n, n = an(t, e) || n, f ? t.style[e] = f : dn(t, e)), Te(a = [r, n]), n = a[1], u = (r = a[0]).match(N) || [], (n.match(N) || []).length) {
        for (; o = N.exec(n);) h = o[0], d = n.substring(v, o.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), h !== (f = u[x++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), "=" === h.charAt(1) && (h = gt(l, h) + g), p = parseFloat(h), _ = h.substr((p + "").length), v = N.lastIndex - _.length, _ || (_ = _ || y.units[e] || g, v === n.length && (n += _, m.e += _)), g !== _ && (l = vn(t, e, f, _) || 0), m._pt = {
          _next: m._pt,
          p: d || 1 === x ? d : ",",
          s: l,
          c: p - l,
          m: c && c < 4 || "zIndex" === e ? Math.round : 0
        });
        m.c = v < n.length ? n.substring(v, n.length) : "";
      } else m.r = "display" === e && "none" === n ? Wr : Hr;
      return U.test(n) && (m.e = 0), this._pt = m, m;
    },
    bn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    wn = function wn(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          i,
          s = e.t,
          a = s.style,
          o = e.u,
          u = s._gsap;
        if ("all" === o || !0 === o) a.cssText = "", n = 1;else for (i = (o = o.split(",")).length; --i > -1;) r = o[i], Dr[r] && (n = 1, r = "transformOrigin" === r ? Jr : Kr), dn(s, r);
        n && (dn(s, Kr), u && (u.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", An(s, 1), u.uncache = 1, en(a)));
      }
    },
    Tn = {
      clearProps: function clearProps(t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var s = t._pt = new cr(t._pt, e, r, 0, 0, wn);
          return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1;
        }
      }
    },
    kn = [1, 0, 0, 1, 0, 0],
    Mn = {},
    On = function On(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Cn = function Cn(t) {
      var e = an(t, Kr);
      return On(e) ? kn : e.substr(7).match(X).map(dt);
    },
    Sn = function Sn(t, e) {
      var r,
        n,
        i,
        s,
        a = t._gsap || ft(t),
        o = t.style,
        u = Cn(t);
      return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? kn : u : (u !== kn || t.offsetParent || t === Or || a.svg || (i = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1, n = t.nextElementSibling, Or.appendChild(t)), u = Cn(t), i ? o.display = i : dn(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Or.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    En = function En(t, e, r, n, i, s) {
      var a,
        o,
        u,
        l = t._gsap,
        c = i || Sn(t, !0),
        f = l.xOrigin || 0,
        h = l.yOrigin || 0,
        p = l.xOffset || 0,
        d = l.yOffset || 0,
        _ = c[0],
        g = c[1],
        m = c[2],
        v = c[3],
        y = c[4],
        x = c[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        T = parseFloat(b[1]) || 0;
      r ? c !== kn && (o = _ * v - g * m) && (u = w * (-g / o) + T * (_ / o) - (_ * x - g * y) / o, w = w * (v / o) + T * (-m / o) + (m * x - v * y) / o, T = u) : (w = (a = hn(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), T = a.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * a.height : T)), n || !1 !== n && l.smooth ? (y = w - f, x = T - h, l.xOffset = p + (y * _ + x * m) - y, l.yOffset = d + (y * g + x * v) - x) : l.xOffset = l.yOffset = 0, l.xOrigin = w, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[Jr] = "0px 0px", s && (_n(s, l, "xOrigin", f, w), _n(s, l, "yOrigin", h, T), _n(s, l, "xOffset", p, l.xOffset), _n(s, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", w + " " + T);
    },
    An = function An(t, e) {
      var r = t._gsap || new Ye(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        m,
        v,
        x,
        b,
        w,
        T,
        k,
        M,
        O,
        C,
        S,
        E,
        A,
        P,
        D,
        R,
        z,
        F,
        I = t.style,
        Y = r.scaleX < 0,
        B = "px",
        L = "deg",
        X = getComputedStyle(t),
        N = an(t, Jr) || "0";
      return n = i = s = u = l = c = f = h = p = 0, a = o = 1, r.svg = !(!t.getCTM || !pn(t)), X.translate && ("none" === X.translate && "none" === X.scale && "none" === X.rotate || (I[Kr] = ("none" !== X.translate ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") + ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") + ("none" !== X[Kr] ? X[Kr] : "")), I.scale = I.rotate = I.translate = "none"), g = Sn(t, r.svg), r.svg && (r.uncache ? (S = t.getBBox(), N = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", C = "") : C = !e && t.getAttribute("data-svg-origin"), En(t, C || N, !!C || r.originIsAbsolute, !1 !== r.smooth, g)), d = r.xOrigin || 0, _ = r.yOrigin || 0, g !== kn && (b = g[0], w = g[1], T = g[2], k = g[3], n = M = g[4], i = O = g[5], 6 === g.length ? (a = Math.sqrt(b * b + w * w), o = Math.sqrt(k * k + T * T), u = b || w ? Fr(w, b) * Rr : 0, (f = T || k ? Fr(T, k) * Rr + u : 0) && (o *= Math.abs(Math.cos(f * zr))), r.svg && (n -= d - (d * b + _ * T), i -= _ - (d * w + _ * k))) : (F = g[6], R = g[7], A = g[8], P = g[9], D = g[10], z = g[11], n = g[12], i = g[13], s = g[14], l = (m = Fr(F, D)) * Rr, m && (C = M * (v = Math.cos(-m)) + A * (x = Math.sin(-m)), S = O * v + P * x, E = F * v + D * x, A = M * -x + A * v, P = O * -x + P * v, D = F * -x + D * v, z = R * -x + z * v, M = C, O = S, F = E), c = (m = Fr(-T, D)) * Rr, m && (v = Math.cos(-m), z = k * (x = Math.sin(-m)) + z * v, b = C = b * v - A * x, w = S = w * v - P * x, T = E = T * v - D * x), u = (m = Fr(w, b)) * Rr, m && (C = b * (v = Math.cos(m)) + w * (x = Math.sin(m)), S = M * v + O * x, w = w * v - b * x, O = O * v - M * x, b = C, M = S), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), a = dt(Math.sqrt(b * b + w * w + T * T)), o = dt(Math.sqrt(O * O + F * F)), m = Fr(M, O), f = Math.abs(m) > 2e-4 ? m * Rr : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (C = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !On(an(t, Kr)), C && t.setAttribute("transform", C))), Math.abs(f) > 90 && Math.abs(f) < 270 && (Y ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + B, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + B, r.z = s + B, r.scaleX = dt(a), r.scaleY = dt(o), r.rotation = dt(u) + L, r.rotationX = dt(l) + L, r.rotationY = dt(c) + L, r.skewX = f + L, r.skewY = h + L, r.transformPerspective = p + B, (r.zOrigin = parseFloat(N.split(" ")[2]) || !e && r.zOrigin || 0) && (I[Jr] = Pn(N)), r.xOffset = r.yOffset = 0, r.force3D = y.force3D, r.renderTransform = r.svg ? Bn : Pr ? Yn : Rn, r.uncache = 0, r;
    },
    Pn = function Pn(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Dn = function Dn(t, e, r) {
      var n = Zt(e);
      return dt(parseFloat(e) + parseFloat(vn(t, "x", r + "px", n))) + n;
    },
    Rn = function Rn(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Yn(t, e);
    },
    zn = "0deg",
    Fn = "0px",
    In = ") ",
    Yn = function Yn(t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        l = r.rotationY,
        c = r.rotationX,
        f = r.skewX,
        h = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        _ = r.transformPerspective,
        g = r.force3D,
        m = r.target,
        v = r.zOrigin,
        y = "",
        x = "auto" === g && t && 1 !== t || !0 === g;
      if (v && (c !== zn || l !== zn)) {
        var b,
          w = parseFloat(l) * zr,
          T = Math.sin(w),
          k = Math.cos(w);
        w = parseFloat(c) * zr, b = Math.cos(w), s = Dn(m, s, T * b * -v), a = Dn(m, a, -Math.sin(w) * -v), o = Dn(m, o, k * b * -v + v);
      }
      _ !== Fn && (y += "perspective(" + _ + In), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (x || s !== Fn || a !== Fn || o !== Fn) && (y += o !== Fn || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + In), u !== zn && (y += "rotate(" + u + In), l !== zn && (y += "rotateY(" + l + In), c !== zn && (y += "rotateX(" + c + In), f === zn && h === zn || (y += "skew(" + f + ", " + h + In), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + In), m.style[Kr] = y || "translate(0, 0)";
    },
    Bn = function Bn(t, e) {
      var r,
        n,
        i,
        s,
        a,
        o = e || this,
        u = o.xPercent,
        l = o.yPercent,
        c = o.x,
        f = o.y,
        h = o.rotation,
        p = o.skewX,
        d = o.skewY,
        _ = o.scaleX,
        g = o.scaleY,
        m = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        x = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        T = parseFloat(c),
        k = parseFloat(f);
      h = parseFloat(h), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), h += d), h || p ? (h *= zr, p *= zr, r = Math.cos(h) * _, n = Math.sin(h) * _, i = Math.sin(h - p) * -g, s = Math.cos(h - p) * g, p && (d *= zr, a = Math.tan(p - d), i *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), n *= a)), r = dt(r), n = dt(n), i = dt(i), s = dt(s)) : (r = _, s = g, n = i = 0), (T && !~(c + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (T = vn(m, "x", c, "px"), k = vn(m, "y", f, "px")), (v || y || x || b) && (T = dt(T + v - (v * r + y * i) + x), k = dt(k + y - (v * n + y * s) + b)), (u || l) && (a = m.getBBox(), T = dt(T + u / 100 * a.width), k = dt(k + l / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + k + ")", m.setAttribute("transform", a), w && (m.style[Kr] = a);
    },
    Ln = function Ln(t, e, r, n, i) {
      var s,
        a,
        o = 360,
        u = E(i),
        l = parseFloat(i) * (u && ~i.indexOf("rad") ? Rr : 1) - n,
        c = n + l + "deg";
      return u && ("short" === (s = i.split("_")[1]) && (l %= o) != l % 180 && (l += l < 0 ? o : -360), "cw" === s && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === s && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), t._pt = a = new cr(t._pt, e, r, n, l, Nr), a.e = c, a.u = "deg", t._props.push(r), a;
    },
    Xn = function Xn(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Nn = function Nn(t, e, r) {
      var n,
        i,
        s,
        a,
        o,
        u,
        l,
        c = Xn({}, r._gsap),
        f = r.style;
      for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Kr] = e, n = An(r, 1), dn(r, Kr), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[Kr], f[Kr] = e, n = An(r, 1), f[Kr] = s), Dr) (s = c[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = Zt(s) !== (l = Zt(a)) ? vn(r, i, s, l) : parseFloat(s), u = parseFloat(a), t._pt = new cr(t._pt, n, i, o, u - o, Xr), t._pt.u = l || 0, t._props.push(i));
      Xn(n, c);
    };
  pt("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      s = "Left",
      a = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
        return e < 2 ? t + r : "border" + r + t;
      });
    Tn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var s, o;
      if (arguments.length < 4) return s = a.map(function (e) {
        return yn(t, e, r);
      }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
      s = (n + "").split(" "), o = {}, a.forEach(function (t, e) {
        return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0];
      }), t.init(e, o, i);
    };
  });
  var qn,
    Un,
    Hn = {
      name: "css",
      register: ln,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, n, i) {
        var s,
          a,
          o,
          u,
          l,
          c,
          f,
          h,
          p,
          d,
          _,
          g,
          m,
          v,
          x,
          b,
          w,
          T,
          k,
          M,
          O = this._props,
          C = t.style,
          S = r.vars.startAt;
        for (f in Cr || ln(), this.styles = this.styles || nn(t), b = this.styles.props, this.tween = r, e) if ("autoRound" !== f && (a = e[f], !st[f] || !He(f, e, r, n, t, i))) if (l = _typeof(a), c = Tn[f], "function" === l && (l = _typeof(a = a.call(r, n, t, i))), "string" === l && ~a.indexOf("random(") && (a = ue(a)), c) c(this, t, f, a, r) && (x = 1);else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", be.lastIndex = 0, be.test(s) || (h = Zt(s), p = Zt(a)), p ? h !== p && (s = vn(t, f, s, p) + p) : h && (a += h), this.add(C, "setProperty", s, a, n, i, 0, 0, f), O.push(f), b.push(f, 0, C[f]);else if ("undefined" !== l) {
          if (S && f in S ? (s = "function" == typeof S[f] ? S[f].call(r, n, t, i) : S[f], E(s) && ~s.indexOf("random(") && (s = ue(s)), Zt(s + "") || "auto" === s || (s += y.units[f] || Zt(yn(t, f)) || ""), "=" === (s + "").charAt(1) && (s = yn(t, f))) : s = yn(t, f), u = parseFloat(s), (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), f in Lr && ("autoAlpha" === f && (1 === u && "hidden" === yn(t, "visibility") && o && (u = 0), b.push("visibility", 0, C.visibility), _n(this, C, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Lr[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Dr) {
            if (this.styles.save(f), g || ((m = t._gsap).renderTransform && !e.parseTransform || An(t, e.parseTransform), v = !1 !== e.smoothOrigin && m.smooth, (g = this._pt = new cr(this._pt, C, Kr, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new cr(this._pt, m, "scaleY", m.scaleY, (d ? gt(m.scaleY, d + o) : o) - m.scaleY || 0, Xr), this._pt.u = 0, O.push("scaleY", f), f += "X";else {
              if ("transformOrigin" === f) {
                b.push(Jr, 0, C[Jr]), T = void 0, k = void 0, M = void 0, k = (T = (w = a).split(" "))[0], M = T[1] || "50%", "top" !== k && "bottom" !== k && "left" !== M && "right" !== M || (w = k, k = M, M = w), T[0] = bn[k] || k, T[1] = bn[M] || M, a = T.join(" "), m.svg ? En(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== m.zOrigin && _n(this, m, "zOrigin", m.zOrigin, p), _n(this, C, f, Pn(s), Pn(a)));
                continue;
              }
              if ("svgOrigin" === f) {
                En(t, a, 1, v, 0, this);
                continue;
              }
              if (f in Mn) {
                Ln(this, m, f, u, d ? gt(u, d + a) : a);
                continue;
              }
              if ("smoothOrigin" === f) {
                _n(this, m, "smooth", m.smooth, a);
                continue;
              }
              if ("force3D" === f) {
                m[f] = a;
                continue;
              }
              if ("transform" === f) {
                Nn(this, a, t);
                continue;
              }
            }
          } else f in C || (f = un(f) || f);
          if (_ || (o || 0 === o) && (u || 0 === u) && !Br.test(a) && f in C) o || (o = 0), (h = (s + "").substr((u + "").length)) !== (p = Zt(a) || (f in y.units ? y.units[f] : h)) && (u = vn(t, f, s, p)), this._pt = new cr(this._pt, _ ? m : C, f, u, (d ? gt(u, d + o) : o) - u, _ || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Xr : Ur), this._pt.u = p || 0, h !== p && "%" !== p && (this._pt.b = s, this._pt.r = qr);else if (f in C) xn.call(this, t, f, s, d ? d + a : a);else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, n, i);else if ("parseTransform" !== f) {
            $(f, a);
            continue;
          }
          _ || (f in C ? b.push(f, 0, C[f]) : "function" == typeof t[f] ? b.push(f, 2, t[f]()) : b.push(f, 1, s || t[f])), O.push(f);
        }
        x && lr(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Ar()) for (var r = e._pt; r;) r.r(t, r.d), r = r._next;else e.styles.revert();
      },
      get: yn,
      aliases: Lr,
      getSetter: function getSetter(t, e, r) {
        var n = Lr[e];
        return n && n.indexOf(",") < 0 && (e = n), e in Dr && e !== Jr && (t._gsap.x || yn(t, "x")) ? r && Er === r ? "scale" === e ? $r : Gr : (Er = r || {}) && ("scale" === e ? Qr : Zr) : t.style && !D(t.style[e]) ? Vr : ~e.indexOf("-") ? jr : er(t, e);
      },
      core: {
        _removeProperty: dn,
        _getMatrix: Sn
      }
    };
  Tr.utils.checkPrefix = un, Tr.core.getStyleSaver = nn, Un = pt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (qn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Dr[t] = 1;
  }), pt(qn, function (t) {
    y.units[t] = "deg", Mn[t] = 1;
  }), Lr[Un[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qn, pt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Lr[e[1]] = Un[e[0]];
  }), pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    y.units[t] = "px";
  }), Tr.registerPlugin(Hn);
  var Wn = Tr.registerPlugin(Hn) || Tr;
  function Vn(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  Wn.core.Tween;
  var jn,
    Gn,
    $n,
    Qn,
    Zn,
    Kn,
    Jn,
    ti,
    ei,
    ri,
    ni,
    ii,
    si,
    ai = function ai() {
      return jn || "undefined" != typeof window && (jn = window.gsap) && jn.registerPlugin && jn;
    },
    oi = 1,
    ui = [],
    li = [],
    ci = [],
    fi = Date.now,
    hi = function hi(t, e) {
      return e;
    },
    pi = function pi(t, e) {
      return ~ci.indexOf(t) && ci[ci.indexOf(t) + 1][e];
    },
    di = function di(t) {
      return !!~ri.indexOf(t);
    },
    _i = function _i(t, e, r, n, i) {
      return t.addEventListener(e, r, {
        passive: !1 !== n,
        capture: !!i
      });
    },
    gi = function gi(t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    mi = "scrollLeft",
    vi = "scrollTop",
    yi = function yi() {
      return ni && ni.isPressed || li.cache++;
    },
    xi = function xi(t, e) {
      var r = function r(n) {
        if (n || 0 === n) {
          oi && ($n.history.scrollRestoration = "manual");
          var i = ni && ni.isPressed;
          n = r.v = Math.round(n) || (ni && ni.iOS ? 1 : 0), t(n), r.cacheID = li.cache, i && hi("ss", n);
        } else (e || li.cache !== r.cacheID || hi("ref")) && (r.cacheID = li.cache, r.v = t());
        return r.v + r.offset;
      };
      return r.offset = 0, t && r;
    },
    bi = {
      s: mi,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: xi(function (t) {
        return arguments.length ? $n.scrollTo(t, wi.sc()) : $n.pageXOffset || Qn[mi] || Zn[mi] || Kn[mi] || 0;
      })
    },
    wi = {
      s: vi,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: bi,
      sc: xi(function (t) {
        return arguments.length ? $n.scrollTo(bi.sc(), t) : $n.pageYOffset || Qn[vi] || Zn[vi] || Kn[vi] || 0;
      })
    },
    Ti = function Ti(t, e) {
      return (e && e._ctx && e._ctx.selector || jn.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== jn.config().nullTargetWarn ? console.warn("Element not found:", t) : null);
    },
    ki = function ki(t, e) {
      var r = e.s,
        n = e.sc;
      di(t) && (t = Qn.scrollingElement || Zn);
      var i = li.indexOf(t),
        s = n === wi.sc ? 1 : 2;
      !~i && (i = li.push(t) - 1), li[i + s] || _i(t, "scroll", yi);
      var a = li[i + s],
        o = a || (li[i + s] = xi(pi(t, r), !0) || (di(t) ? n : xi(function (e) {
          return arguments.length ? t[r] = e : t[r];
        })));
      return o.target = t, a || (o.smooth = "smooth" === jn.getProperty(t, "scrollBehavior")), o;
    },
    Mi = function Mi(t, e, r) {
      var n = t,
        i = t,
        s = fi(),
        a = s,
        o = e || 50,
        u = Math.max(500, 3 * o),
        l = function l(t, e) {
          var u = fi();
          e || u - s > o ? (i = n, n = t, a = s, s = u) : r ? n += t : n = i + (t - i) / (u - a) * (s - a);
        };
      return {
        update: l,
        reset: function reset() {
          i = n = r ? 0 : n, a = s = 0;
        },
        getVelocity: function getVelocity(t) {
          var e = a,
            o = i,
            c = fi();
          return (t || 0 === t) && t !== n && l(t), s === a || c - a > u ? 0 : (n + (r ? o : -o)) / ((r ? c : s) - e) * 1e3;
        }
      };
    },
    Oi = function Oi(t, e) {
      return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
    },
    Ci = function Ci(t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    },
    Si = function Si() {
      var t, e, r, n;
      (ei = jn.core.globals().ScrollTrigger) && ei.core && (t = ei.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, li), n.push.apply(n, ci), li = r, ci = n, hi = function hi(t, r) {
        return e[t](r);
      });
    },
    Ei = function Ei(t) {
      return jn = t || ai(), !Gn && jn && "undefined" != typeof document && document.body && ($n = window, Qn = document, Zn = Qn.documentElement, Kn = Qn.body, ri = [$n, Qn, Zn, Kn], jn.utils.clamp, si = jn.core.context || function () {}, ti = "onpointerenter" in Kn ? "pointer" : "mouse", Jn = Ai.isTouch = $n.matchMedia && $n.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in $n || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ii = Ai.eventTypes = ("ontouchstart" in Zn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Zn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return oi = 0;
      }, 500), Si(), Gn = 1), Gn;
    };
  bi.op = wi, li.cache = 0;
  var Ai = function () {
    function t(t) {
      this.init(t);
    }
    var e, r;
    return t.prototype.init = function (t) {
      Gn || Ei(jn) || console.warn("Please gsap.registerPlugin(Observer)"), ei || Si();
      var e = t.tolerance,
        r = t.dragMinimum,
        n = t.type,
        i = t.target,
        s = t.lineHeight,
        a = t.debounce,
        o = t.preventDefault,
        u = t.onStop,
        l = t.onStopDelay,
        c = t.ignore,
        f = t.wheelSpeed,
        h = t.event,
        p = t.onDragStart,
        d = t.onDragEnd,
        _ = t.onDrag,
        g = t.onPress,
        m = t.onRelease,
        v = t.onRight,
        y = t.onLeft,
        x = t.onUp,
        b = t.onDown,
        w = t.onChangeX,
        T = t.onChangeY,
        k = t.onChange,
        M = t.onToggleX,
        O = t.onToggleY,
        C = t.onHover,
        S = t.onHoverEnd,
        E = t.onMove,
        A = t.ignoreCheck,
        P = t.isNormalizer,
        D = t.onGestureStart,
        R = t.onGestureEnd,
        z = t.onWheel,
        F = t.onEnable,
        I = t.onDisable,
        Y = t.onClick,
        B = t.scrollSpeed,
        L = t.capture,
        X = t.allowClicks,
        N = t.lockAxis,
        q = t.onLockAxis;
      this.target = i = Ti(i) || Zn, this.vars = t, c && (c = jn.utils.toArray(c)), e = e || 1e-9, r = r || 0, f = f || 1, B = B || 1, n = n || "wheel,touch,pointer", a = !1 !== a, s || (s = parseFloat($n.getComputedStyle(Kn).lineHeight) || 22);
      var U,
        H,
        W,
        V,
        j,
        G,
        $,
        Q = this,
        Z = 0,
        K = 0,
        J = t.passive || !o && !1 !== t.passive,
        tt = ki(i, bi),
        et = ki(i, wi),
        rt = tt(),
        nt = et(),
        it = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === ii[0],
        st = di(i),
        at = i.ownerDocument || Qn,
        ot = [0, 0, 0],
        ut = [0, 0, 0],
        lt = 0,
        ct = function ct() {
          return lt = fi();
        },
        ft = function ft(t, e) {
          return (Q.event = t) && c && ~c.indexOf(t.target) || e && it && "touch" !== t.pointerType || A && A(t, e);
        },
        ht = function ht() {
          var t = Q.deltaX = Ci(ot),
            r = Q.deltaY = Ci(ut),
            n = Math.abs(t) >= e,
            i = Math.abs(r) >= e;
          k && (n || i) && k(Q, t, r, ot, ut), n && (v && Q.deltaX > 0 && v(Q), y && Q.deltaX < 0 && y(Q), w && w(Q), M && Q.deltaX < 0 != Z < 0 && M(Q), Z = Q.deltaX, ot[0] = ot[1] = ot[2] = 0), i && (b && Q.deltaY > 0 && b(Q), x && Q.deltaY < 0 && x(Q), T && T(Q), O && Q.deltaY < 0 != K < 0 && O(Q), K = Q.deltaY, ut[0] = ut[1] = ut[2] = 0), (V || W) && (E && E(Q), W && (p && 1 === W && p(Q), _ && _(Q), W = 0), V = !1), G && !(G = !1) && q && q(Q), j && (z(Q), j = !1), U = 0;
        },
        pt = function pt(t, e, r) {
          ot[r] += t, ut[r] += e, Q._vx.update(t), Q._vy.update(e), a ? U || (U = requestAnimationFrame(ht)) : ht();
        },
        dt = function dt(t, e) {
          N && !$ && (Q.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), "y" !== $ && (ot[2] += t, Q._vx.update(t, !0)), "x" !== $ && (ut[2] += e, Q._vy.update(e, !0)), a ? U || (U = requestAnimationFrame(ht)) : ht();
        },
        _t = function _t(t) {
          if (!ft(t, 1)) {
            var e = (t = Oi(t, o)).clientX,
              n = t.clientY,
              i = e - Q.x,
              s = n - Q.y,
              a = Q.isDragging;
            Q.x = e, Q.y = n, (a || (i || s) && (Math.abs(Q.startX - e) >= r || Math.abs(Q.startY - n) >= r)) && (W = a ? 2 : 1, a || (Q.isDragging = !0), dt(i, s));
          }
        },
        gt = Q.onPress = function (t) {
          ft(t, 1) || t && t.button || (Q.axis = $ = null, H.pause(), Q.isPressed = !0, t = Oi(t), Z = K = 0, Q.startX = Q.x = t.clientX, Q.startY = Q.y = t.clientY, Q._vx.reset(), Q._vy.reset(), _i(P ? i : at, ii[1], _t, J, !0), Q.deltaX = Q.deltaY = 0, g && g(Q));
        },
        mt = Q.onRelease = function (t) {
          if (!ft(t, 1)) {
            gi(P ? i : at, ii[1], _t, !0);
            var e = !isNaN(Q.y - Q.startY),
              r = Q.isDragging,
              n = r && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
              s = Oi(t);
            !n && e && (Q._vx.reset(), Q._vy.reset(), o && X && jn.delayedCall(.08, function () {
              if (fi() - lt > 300 && !t.defaultPrevented) if (t.target.click) t.target.click();else if (at.createEvent) {
                var e = at.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, $n, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
              }
            })), Q.isDragging = Q.isGesturing = Q.isPressed = !1, u && r && !P && H.restart(!0), W && ht(), d && r && d(Q), m && m(Q, n);
          }
        },
        vt = function vt(t) {
          return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && D(t, Q.isDragging);
        },
        yt = function yt() {
          return (Q.isGesturing = !1) || R(Q);
        },
        xt = function xt(t) {
          if (!ft(t)) {
            var e = tt(),
              r = et();
            pt((e - rt) * B, (r - nt) * B, 1), rt = e, nt = r, u && H.restart(!0);
          }
        },
        bt = function bt(t) {
          if (!ft(t)) {
            t = Oi(t, o), z && (j = !0);
            var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? $n.innerHeight : 1) * f;
            pt(t.deltaX * e, t.deltaY * e, 0), u && !P && H.restart(!0);
          }
        },
        wt = function wt(t) {
          if (!ft(t)) {
            var e = t.clientX,
              r = t.clientY,
              n = e - Q.x,
              i = r - Q.y;
            Q.x = e, Q.y = r, V = !0, u && H.restart(!0), (n || i) && dt(n, i);
          }
        },
        Tt = function Tt(t) {
          Q.event = t, C(Q);
        },
        kt = function kt(t) {
          Q.event = t, S(Q);
        },
        Mt = function Mt(t) {
          return ft(t) || Oi(t, o) && Y(Q);
        };
      H = Q._dc = jn.delayedCall(l || .25, function () {
        Q._vx.reset(), Q._vy.reset(), H.pause(), u && u(Q);
      }).pause(), Q.deltaX = Q.deltaY = 0, Q._vx = Mi(0, 50, !0), Q._vy = Mi(0, 50, !0), Q.scrollX = tt, Q.scrollY = et, Q.isDragging = Q.isGesturing = Q.isPressed = !1, si(this), Q.enable = function (t) {
        return Q.isEnabled || (_i(st ? at : i, "scroll", yi), n.indexOf("scroll") >= 0 && _i(st ? at : i, "scroll", xt, J, L), n.indexOf("wheel") >= 0 && _i(i, "wheel", bt, J, L), (n.indexOf("touch") >= 0 && Jn || n.indexOf("pointer") >= 0) && (_i(i, ii[0], gt, J, L), _i(at, ii[2], mt), _i(at, ii[3], mt), X && _i(i, "click", ct, !0, !0), Y && _i(i, "click", Mt), D && _i(at, "gesturestart", vt), R && _i(at, "gestureend", yt), C && _i(i, ti + "enter", Tt), S && _i(i, ti + "leave", kt), E && _i(i, ti + "move", wt)), Q.isEnabled = !0, Q.isDragging = Q.isGesturing = Q.isPressed = V = W = !1, Q._vx.reset(), Q._vy.reset(), rt = tt(), nt = et(), t && t.type && gt(t), F && F(Q)), Q;
      }, Q.disable = function () {
        Q.isEnabled && (ui.filter(function (t) {
          return t !== Q && di(t.target);
        }).length || gi(st ? at : i, "scroll", yi), Q.isPressed && (Q._vx.reset(), Q._vy.reset(), gi(P ? i : at, ii[1], _t, !0)), gi(st ? at : i, "scroll", xt, L), gi(i, "wheel", bt, L), gi(i, ii[0], gt, L), gi(at, ii[2], mt), gi(at, ii[3], mt), gi(i, "click", ct, !0), gi(i, "click", Mt), gi(at, "gesturestart", vt), gi(at, "gestureend", yt), gi(i, ti + "enter", Tt), gi(i, ti + "leave", kt), gi(i, ti + "move", wt), Q.isEnabled = Q.isPressed = Q.isDragging = !1, I && I(Q));
      }, Q.kill = Q.revert = function () {
        Q.disable();
        var t = ui.indexOf(Q);
        t >= 0 && ui.splice(t, 1), ni === Q && (ni = 0);
      }, ui.push(Q), P && di(i) && (ni = Q), Q.enable(h);
    }, e = t, (r = [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]) && Vn(e.prototype, r), t;
  }();
  Ai.version = "3.12.7", Ai.create = function (t) {
    return new Ai(t);
  }, Ai.register = Ei, Ai.getAll = function () {
    return ui.slice();
  }, Ai.getById = function (t) {
    return ui.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }, ai() && jn.registerPlugin(Ai);
  var Pi,
    Di,
    Ri,
    zi,
    Fi,
    Ii,
    Yi,
    Bi,
    Li,
    Xi,
    Ni,
    qi,
    Ui,
    Hi,
    Wi,
    Vi,
    ji,
    Gi,
    $i,
    Qi,
    Zi,
    Ki,
    Ji,
    ts,
    es,
    rs,
    ns,
    is,
    ss,
    as,
    os,
    us,
    ls,
    cs,
    fs,
    hs,
    ps,
    ds,
    _s = 1,
    gs = Date.now,
    ms = gs(),
    vs = 0,
    ys = 0,
    xs = function xs(t, e, r) {
      var n = zs(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
      return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t;
    },
    bs = function bs(t, e) {
      return !e || zs(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")";
    },
    ws = function t() {
      return ys && requestAnimationFrame(t);
    },
    Ts = function Ts() {
      return Hi = 1;
    },
    ks = function ks() {
      return Hi = 0;
    },
    Ms = function Ms(t) {
      return t;
    },
    Os = function Os(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Cs = function Cs() {
      return "undefined" != typeof window;
    },
    Ss = function Ss() {
      return Pi || Cs() && (Pi = window.gsap) && Pi.registerPlugin && Pi;
    },
    Es = function Es(t) {
      return !!~Yi.indexOf(t);
    },
    As = function As(t) {
      return ("Height" === t ? os : Ri["inner" + t]) || Fi["client" + t] || Ii["client" + t];
    },
    Ps = function Ps(t) {
      return pi(t, "getBoundingClientRect") || (Es(t) ? function () {
        return Ha.width = Ri.innerWidth, Ha.height = os, Ha;
      } : function () {
        return na(t);
      });
    },
    Ds = function Ds(t, e) {
      var r = e.s,
        n = e.d2,
        i = e.d,
        s = e.a;
      return Math.max(0, (r = "scroll" + n) && (s = pi(t, r)) ? s() - Ps(t)()[i] : Es(t) ? (Fi[r] || Ii[r]) - As(n) : t[r] - t["offset" + n]);
    },
    Rs = function Rs(t, e) {
      for (var r = 0; r < $i.length; r += 3) (!e || ~e.indexOf($i[r + 1])) && t($i[r], $i[r + 1], $i[r + 2]);
    },
    zs = function zs(t) {
      return "string" == typeof t;
    },
    Fs = function Fs(t) {
      return "function" == typeof t;
    },
    Is = function Is(t) {
      return "number" == typeof t;
    },
    Ys = function Ys(t) {
      return "object" == _typeof(t);
    },
    Bs = function Bs(t, e, r) {
      return t && t.progress(e ? 0 : 1) && r && t.pause();
    },
    Ls = function Ls(t, e) {
      if (t.enabled) {
        var r = t._ctx ? t._ctx.add(function () {
          return e(t);
        }) : e(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    Xs = Math.abs,
    Ns = "left",
    qs = "right",
    Us = "bottom",
    Hs = "width",
    Ws = "height",
    Vs = "Right",
    js = "Left",
    Gs = "Top",
    $s = "Bottom",
    Qs = "padding",
    Zs = "margin",
    Ks = "Width",
    Js = "Height",
    ta = "px",
    ea = function ea(t) {
      return Ri.getComputedStyle(t);
    },
    ra = function ra(t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    na = function na(t, e) {
      var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== ea(t)[Wi] && Pi.to(t, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        n = t.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    ia = function ia(t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    sa = function sa(t) {
      var e,
        r = [],
        n = t.labels,
        i = t.duration();
      for (e in n) r.push(n[e] / i);
      return r;
    },
    aa = function aa(t) {
      var e = Pi.utils.snap(t),
        r = Array.isArray(t) && t.slice(0).sort(function (t, e) {
          return t - e;
        });
      return r ? function (t, n, i) {
        var s;
        if (void 0 === i && (i = .001), !n) return e(t);
        if (n > 0) {
          for (t -= i, s = 0; s < r.length; s++) if (r[s] >= t) return r[s];
          return r[s - 1];
        }
        for (s = r.length, t += i; s--;) if (r[s] <= t) return r[s];
        return r[0];
      } : function (r, n, i) {
        void 0 === i && (i = .001);
        var s = e(r);
        return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t);
      };
    },
    oa = function oa(t, e, r, n) {
      return r.split(",").forEach(function (r) {
        return t(e, r, n);
      });
    },
    ua = function ua(t, e, r, n, i) {
      return t.addEventListener(e, r, {
        passive: !n,
        capture: !!i
      });
    },
    la = function la(t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    ca = function ca(t, e, r) {
      (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
    },
    fa = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    ha = {
      toggleActions: "play",
      anticipatePin: 0
    },
    pa = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    da = function da(t, e) {
      if (zs(t)) {
        var r = t.indexOf("="),
          n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in pa ? pa[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
      }
      return t;
    },
    _a = function _a(t, e, r, n, i, s, a, o) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        f = i.indent,
        h = i.fontWeight,
        p = zi.createElement("div"),
        d = Es(r) || "fixed" === pi(r, "pinType"),
        _ = -1 !== t.indexOf("scroller"),
        g = d ? Ii : r,
        m = -1 !== t.indexOf("start"),
        v = m ? u : l,
        y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return y += "position:" + ((_ || o) && d ? "fixed;" : "absolute;"), (_ || o || !d) && (y += (n === wi ? qs : Us) + ":" + (s + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), p.style.cssText = y, p.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + n.op.d2], ga(p, 0, n, m), p;
    },
    ga = function ga(t, e, r, n) {
      var i = {
          display: "block"
        },
        s = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + Ks] = 1, i["border" + a + Ks] = 0, i[r.p] = e + "px", Pi.set(t, i);
    },
    ma = [],
    va = {},
    ya = function ya() {
      return gs() - vs > 34 && (fs || (fs = requestAnimationFrame(Ya)));
    },
    xa = function xa() {
      (!Ji || !Ji.isPressed || Ji.startX > Ii.clientWidth) && (li.cache++, Ji ? fs || (fs = requestAnimationFrame(Ya)) : Ya(), vs || Oa("scrollStart"), vs = gs());
    },
    ba = function ba() {
      rs = Ri.innerWidth, es = Ri.innerHeight;
    },
    wa = function wa(t) {
      li.cache++, (!0 === t || !Ui && !Ki && !zi.fullscreenElement && !zi.webkitFullscreenElement && (!ts || rs !== Ri.innerWidth || Math.abs(Ri.innerHeight - es) > .25 * Ri.innerHeight)) && Bi.restart(!0);
    },
    Ta = {},
    ka = [],
    Ma = function t() {
      return la(Za, "scrollEnd", t) || za(!0);
    },
    Oa = function Oa(t) {
      return Ta[t] && Ta[t].map(function (t) {
        return t();
      }) || ka;
    },
    Ca = [],
    Sa = function Sa(t) {
      for (var e = 0; e < Ca.length; e += 5) (!t || Ca[e + 4] && Ca[e + 4].query === t) && (Ca[e].style.cssText = Ca[e + 1], Ca[e].getBBox && Ca[e].setAttribute("transform", Ca[e + 2] || ""), Ca[e + 3].uncache = 1);
    },
    Ea = function Ea(t, e) {
      var r;
      for (Vi = 0; Vi < ma.length; Vi++) !(r = ma[Vi]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
      us = !0, e && Sa(e), e || Oa("revert");
    },
    Aa = function Aa(t, e) {
      li.cache++, (e || !hs) && li.forEach(function (t) {
        return Fs(t) && t.cacheID++ && (t.rec = 0);
      }), zs(t) && (Ri.history.scrollRestoration = ss = t);
    },
    Pa = 0,
    Da = function Da() {
      Ii.appendChild(as), os = !Ji && as.offsetHeight || Ri.innerHeight, Ii.removeChild(as);
    },
    Ra = function Ra(t) {
      return Li(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (e) {
        return e.style.display = t ? "none" : "block";
      });
    },
    za = function za(t, e) {
      if (Fi = zi.documentElement, Ii = zi.body, Yi = [Ri, zi, Fi, Ii], !vs || t || us) {
        Da(), hs = Za.isRefreshing = !0, li.forEach(function (t) {
          return Fs(t) && ++t.cacheID && (t.rec = t());
        });
        var r = Oa("refreshInit");
        Qi && Za.sort(), e || Ea(), li.forEach(function (t) {
          Fs(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
        }), ma.slice(0).forEach(function (t) {
          return t.refresh();
        }), us = !1, ma.forEach(function (t) {
          if (t._subPinOffset && t.pin) {
            var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
              r = t.pin[e];
            t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh();
          }
        }), ls = 1, Ra(!0), ma.forEach(function (t) {
          var e = Ds(t.scroller, t._dir),
            r = "max" === t.vars.end || t._endClamp && t.end > e,
            n = t._startClamp && t.start >= e;
          (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0);
        }), Ra(!1), ls = 0, r.forEach(function (t) {
          return t && t.render && t.render(-1);
        }), li.forEach(function (t) {
          Fs(t) && (t.smooth && requestAnimationFrame(function () {
            return t.target.style.scrollBehavior = "smooth";
          }), t.rec && t(t.rec));
        }), Aa(ss, 1), Bi.pause(), Pa++, hs = 2, Ya(2), ma.forEach(function (t) {
          return Fs(t.vars.onRefresh) && t.vars.onRefresh(t);
        }), hs = Za.isRefreshing = !1, Oa("refresh");
      } else ua(Za, "scrollEnd", Ma);
    },
    Fa = 0,
    Ia = 1,
    Ya = function Ya(t) {
      if (2 === t || !hs && !us) {
        Za.isUpdating = !0, ds && ds.update(0);
        var e = ma.length,
          r = gs(),
          n = r - ms >= 50,
          i = e && ma[0].scroll();
        if (Ia = Fa > i ? -1 : 1, hs || (Fa = i), n && (vs && !Hi && r - vs > 200 && (vs = 0, Oa("scrollEnd")), Ni = ms, ms = r), Ia < 0) {
          for (Vi = e; Vi-- > 0;) ma[Vi] && ma[Vi].update(0, n);
          Ia = 1;
        } else for (Vi = 0; Vi < e; Vi++) ma[Vi] && ma[Vi].update(0, n);
        Za.isUpdating = !1;
      }
      fs = 0;
    },
    Ba = [Ns, "top", Us, qs, Zs + $s, Zs + Vs, Zs + Gs, Zs + js, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    La = Ba.concat([Hs, Ws, "boxSizing", "max" + Ks, "max" + Js, "position", Zs, Qs, Qs + Gs, Qs + Vs, Qs + $s, Qs + js]),
    Xa = function Xa(t, e, r, n) {
      if (!t._gsap.swappedIn) {
        for (var i, s = Ba.length, a = e.style, o = t.style; s--;) a[i = Ba[s]] = r[i];
        a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o[Us] = o[qs] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Hs] = ia(t, bi) + ta, a[Ws] = ia(t, wi) + ta, a[Qs] = o[Zs] = o.top = o[Ns] = "0", qa(n), o[Hs] = o["max" + Ks] = r[Hs], o[Ws] = o["max" + Js] = r[Ws], o[Qs] = r[Qs], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
      }
    },
    Na = /([A-Z])/g,
    qa = function qa(t) {
      if (t) {
        var e,
          r,
          n = t.t.style,
          i = t.length,
          s = 0;
        for ((t.t._gsap || Pi.core.getCache(t.t)).uncache = 1; s < i; s += 2) r = t[s + 1], e = t[s], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Na, "-$1").toLowerCase());
      }
    },
    Ua = function Ua(t) {
      for (var e = La.length, r = t.style, n = [], i = 0; i < e; i++) n.push(La[i], r[La[i]]);
      return n.t = t, n;
    },
    Ha = {
      left: 0,
      top: 0
    },
    Wa = function Wa(t, e, r, n, i, s, a, o, u, l, c, f, h, p) {
      Fs(t) && (t = t(o)), zs(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? da("0" + t.substr(3), r) : 0));
      var d,
        _,
        g,
        m = h ? h.time() : 0;
      if (h && h.seek(0), isNaN(t) || (t = +t), Is(t)) h && (t = Pi.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)), a && ga(a, r, n, !0);else {
        Fs(e) && (e = e(o));
        var v,
          y,
          x,
          b,
          w = (t || "0").split(" ");
        g = Ti(e, o) || Ii, (v = na(g) || {}) && (v.left || v.top) || "none" !== ea(g).display || (b = g.style.display, g.style.display = "block", v = na(g), b ? g.style.display = b : g.style.removeProperty("display")), y = da(w[0], v[n.d]), x = da(w[1] || "0", r), t = v[n.p] - u[n.p] - l + y + i - x, a && ga(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x;
      }
      if (p && (o[p] = t || -.001, t < 0 && (t = 0)), s) {
        var T = t + r,
          k = s._isStart;
        d = "scroll" + n.d2, ga(s, T, n, k && T > 20 || !k && (c ? Math.max(Ii[d], Fi[d]) : s.parentNode[d]) <= T + 1), c && (u = na(a), c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + ta));
      }
      return h && g && (d = na(g), h.seek(f), _ = na(g), h._caScrollDist = d[n.p] - _[n.p], t = t / h._caScrollDist * f), h && h.seek(m), h ? t : Math.round(t);
    },
    Va = /(webkit|moz|length|cssText|inset)/i,
    ja = function ja(t, e, r, n) {
      if (t.parentNode !== e) {
        var i,
          s,
          a = t.style;
        if (e === Ii) {
          for (i in t._stOrig = a.cssText, s = ea(t)) +i || Va.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
          a.top = r, a.left = n;
        } else a.cssText = t._stOrig;
        Pi.core.getCache(t).uncache = 1, e.appendChild(t);
      }
    },
    Ga = function Ga(t, e, r) {
      var n = e,
        i = n;
      return function (e) {
        var s = Math.round(t());
        return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s, r && r()), i = n, n = Math.round(e);
      };
    },
    $a = function $a(t, e, r) {
      var n = {};
      n[e.p] = "+=" + r, Pi.set(t, n);
    },
    Qa = function Qa(t, e) {
      var r = ki(t, e),
        n = "_scroll" + e.p2,
        i = function e(i, s, a, o, u) {
          var l = e.tween,
            c = s.onComplete,
            f = {};
          a = a || r();
          var h = Ga(r, a, function () {
            l.kill(), e.tween = 0;
          });
          return u = o && u || 0, o = o || i - a, l && l.kill(), s[n] = i, s.inherit = !1, s.modifiers = f, f[n] = function () {
            return h(a + o * l.ratio + u * l.ratio * l.ratio);
          }, s.onUpdate = function () {
            li.cache++, e.tween && Ya();
          }, s.onComplete = function () {
            e.tween = 0, c && c.call(l);
          }, l = e.tween = Pi.to(t, s);
        };
      return t[n] = r, r.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }, ua(t, "wheel", r.wheelHandler), Za.isTouch && ua(t, "touchmove", r.wheelHandler), i;
    },
    Za = function () {
      function t(e, r) {
        Di || t.register(Pi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), is(this), this.init(e, r);
      }
      return t.prototype.init = function (e, r) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), ys) {
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            g,
            m,
            v,
            y,
            x,
            b,
            w,
            T,
            k,
            M,
            O,
            C,
            S,
            E,
            A,
            P,
            D,
            R,
            z,
            F,
            I,
            Y,
            B,
            L,
            X,
            N,
            q,
            U,
            H,
            W = e = ra(zs(e) || Is(e) || e.nodeType ? {
              trigger: e
            } : e, ha),
            V = W.onUpdate,
            j = W.toggleClass,
            G = W.id,
            $ = W.onToggle,
            Q = W.onRefresh,
            Z = W.scrub,
            K = W.trigger,
            J = W.pin,
            tt = W.pinSpacing,
            et = W.invalidateOnRefresh,
            rt = W.anticipatePin,
            nt = W.onScrubComplete,
            it = W.onSnapComplete,
            st = W.once,
            at = W.snap,
            ot = W.pinReparent,
            ut = W.pinSpacer,
            lt = W.containerAnimation,
            ct = W.fastScrollEnd,
            ft = W.preventOverlaps,
            ht = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? bi : wi,
            pt = !Z && 0 !== Z,
            dt = Ti(e.scroller || Ri),
            _t = Pi.core.getCache(dt),
            gt = Es(dt),
            mt = "fixed" === ("pinType" in e ? e.pinType : pi(dt, "pinType") || gt && "fixed"),
            vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            yt = pt && e.toggleActions.split(" "),
            xt = "markers" in e ? e.markers : ha.markers,
            bt = gt ? 0 : parseFloat(ea(dt)["border" + ht.p2 + Ks]) || 0,
            wt = this,
            Tt = e.onRefreshInit && function () {
              return e.onRefreshInit(wt);
            },
            kt = function (t, e, r) {
              var n = r.d,
                i = r.d2,
                s = r.a;
              return (s = pi(t, "getBoundingClientRect")) ? function () {
                return s()[n];
              } : function () {
                return (e ? As(i) : t["client" + i]) || 0;
              };
            }(dt, gt, ht),
            Mt = function (t, e) {
              return !e || ~ci.indexOf(t) ? Ps(t) : function () {
                return Ha;
              };
            }(dt, gt),
            Ot = 0,
            Ct = 0,
            St = 0,
            Et = ki(dt, ht);
          if (wt._startClamp = wt._endClamp = !1, wt._dir = ht, rt *= 45, wt.scroller = dt, wt.scroll = lt ? lt.time.bind(lt) : Et, a = Et(), wt.vars = e, r = r || e.animation, "refreshPriority" in e && (Qi = 1, -9999 === e.refreshPriority && (ds = wt)), _t.tweenScroll = _t.tweenScroll || {
            top: Qa(dt, wi),
            left: Qa(dt, bi)
          }, wt.tweenTo = n = _t.tweenScroll[ht.p], wt.scrubDuration = function (t) {
            (F = Is(t) && t) ? z ? z.duration(t) : z = Pi.to(r, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: !1,
              duration: F,
              paused: !0,
              onComplete: function onComplete() {
                return nt && nt(wt);
              }
            }) : (z && z.progress(1).kill(), z = 0);
          }, r && (r.vars.lazy = !1, r._initted && !wt.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), wt.animation = r.pause(), r.scrollTrigger = wt, wt.scrubDuration(Z), D = 0, G || (G = r.vars.id)), at && (Ys(at) && !at.push || (at = {
            snapTo: at
          }), "scrollBehavior" in Ii.style && Pi.set(gt ? [Ii, Fi] : dt, {
            scrollBehavior: "auto"
          }), li.forEach(function (t) {
            return Fs(t) && t.target === (gt ? zi.scrollingElement || Fi : dt) && (t.smooth = !1);
          }), s = Fs(at.snapTo) ? at.snapTo : "labels" === at.snapTo ? function (t) {
            return function (e) {
              return Pi.utils.snap(sa(t), e);
            };
          }(r) : "labelsDirectional" === at.snapTo ? (q = r, function (t, e) {
            return aa(sa(q))(t, e.direction);
          }) : !1 !== at.directional ? function (t, e) {
            return aa(at.snapTo)(t, gs() - Ct < 500 ? 0 : e.direction);
          } : Pi.utils.snap(at.snapTo), I = at.duration || {
            min: .1,
            max: 2
          }, I = Ys(I) ? Xi(I.min, I.max) : Xi(I, I), Y = Pi.delayedCall(at.delay || F / 2 || .1, function () {
            var t = Et(),
              e = gs() - Ct < 500,
              i = n.tween;
            if (!(e || Math.abs(wt.getVelocity()) < 10) || i || Hi || Ot === t) wt.isActive && Ot !== t && Y.restart(!0);else {
              var a,
                o,
                c = (t - u) / g,
                f = r && !pt ? r.totalProgress() : c,
                h = e ? 0 : (f - R) / (gs() - Ni) * 1e3 || 0,
                p = Pi.utils.clamp(-c, 1 - c, Xs(h / 2) * h / .185),
                d = c + (!1 === at.inertia ? 0 : p),
                _ = at,
                m = _.onStart,
                v = _.onInterrupt,
                y = _.onComplete;
              if (a = s(d, wt), Is(a) || (a = d), o = Math.max(0, Math.round(u + a * g)), t <= l && t >= u && o !== t) {
                if (i && !i._initted && i.data <= Xs(o - t)) return;
                !1 === at.inertia && (p = a - c), n(o, {
                  duration: I(Xs(.185 * Math.max(Xs(d - f), Xs(a - f)) / h / .05 || 0)),
                  ease: at.ease || "power3",
                  data: Xs(o - t),
                  onInterrupt: function onInterrupt() {
                    return Y.restart(!0) && v && v(wt);
                  },
                  onComplete: function onComplete() {
                    wt.update(), Ot = Et(), r && !pt && (z ? z.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), D = R = r && !pt ? r.totalProgress() : wt.progress, it && it(wt), y && y(wt);
                  }
                }, t, p * g, o - t - p * g), m && m(wt, n.tween);
              }
            }
          }).pause()), G && (va[G] = wt), (N = (K = wt.trigger = Ti(K || !0 !== J && J)) && K._gsap && K._gsap.stRevert) && (N = N(wt)), J = !0 === J ? K : Ti(J), zs(j) && (j = {
            targets: K,
            className: j
          }), J && (!1 === tt || tt === Zs || (tt = !(!tt && J.parentNode && J.parentNode.style && "flex" === ea(J.parentNode).display) && Qs), wt.pin = J, (i = Pi.core.getCache(J)).spacer ? m = i.pinState : (ut && ((ut = Ti(ut)) && !ut.nodeType && (ut = ut.current || ut.nativeElement), i.spacerIsNative = !!ut, ut && (i.spacerState = Ua(ut))), i.spacer = x = ut || zi.createElement("div"), x.classList.add("pin-spacer"), G && x.classList.add("pin-spacer-" + G), i.pinState = m = Ua(J)), !1 !== e.force3D && Pi.set(J, {
            force3D: !0
          }), wt.spacer = x = i.spacer, P = ea(J), O = P[tt + ht.os2], w = Pi.getProperty(J), T = Pi.quickSetter(J, ht.a, ta), Xa(J, x, P), y = Ua(J)), xt) {
            d = Ys(xt) ? ra(xt, fa) : fa, h = _a("scroller-start", G, dt, ht, d, 0), p = _a("scroller-end", G, dt, ht, d, 0, h), b = h["offset" + ht.op.d2];
            var At = Ti(pi(dt, "content") || dt);
            c = this.markerStart = _a("start", G, At, ht, d, b, 0, lt), f = this.markerEnd = _a("end", G, At, ht, d, b, 0, lt), lt && (X = Pi.quickSetter([c, f], ht.a, ta)), mt || ci.length && !0 === pi(dt, "fixedMarkers") || (H = ea(U = gt ? Ii : dt).position, U.style.position = "absolute" === H || "fixed" === H ? H : "relative", Pi.set([h, p], {
              force3D: !0
            }), S = Pi.quickSetter(h, ht.a, ta), A = Pi.quickSetter(p, ht.a, ta));
          }
          if (lt) {
            var Pt = lt.vars.onUpdate,
              Dt = lt.vars.onUpdateParams;
            lt.eventCallback("onUpdate", function () {
              wt.update(0, 0, 1), Pt && Pt.apply(lt, Dt || []);
            });
          }
          if (wt.previous = function () {
            return ma[ma.indexOf(wt) - 1];
          }, wt.next = function () {
            return ma[ma.indexOf(wt) + 1];
          }, wt.revert = function (t, e) {
            if (!e) return wt.kill(!0);
            var n = !1 !== t || !wt.enabled,
              i = Ui;
            n !== wt.isReverted && (n && (B = Math.max(Et(), wt.scroll.rec || 0), St = wt.progress, L = r && r.progress()), c && [c, f, h, p].forEach(function (t) {
              return t.style.display = n ? "none" : "block";
            }), n && (Ui = wt, wt.update(n)), !J || ot && wt.isActive || (n ? function (t, e, r) {
              qa(r);
              var n = t._gsap;
              if (n.spacerIsNative) qa(n.spacerState);else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e));
              }
              t._gsap.swappedIn = !1;
            }(J, x, m) : Xa(J, x, ea(J), C)), n || wt.update(n), Ui = i, wt.isReverted = n);
          }, wt.refresh = function (i, s, d, b) {
            if (!Ui && wt.enabled || s) if (J && i && vs) ua(t, "scrollEnd", Ma);else {
              !hs && Tt && Tt(wt), Ui = wt, n.tween && !d && (n.tween.kill(), n.tween = 0), z && z.pause(), et && r && r.revert({
                kill: !1
              }).invalidate(), wt.isReverted || wt.revert(!0, !0), wt._subPinOffset = !1;
              var T,
                O,
                S,
                A,
                P,
                D,
                R,
                F,
                I,
                X,
                N,
                q,
                U,
                H = kt(),
                W = Mt(),
                V = lt ? lt.duration() : Ds(dt, ht),
                j = g <= .01,
                G = 0,
                $ = b || 0,
                Z = Ys(d) ? d.end : e.end,
                rt = e.endTrigger || K,
                nt = Ys(d) ? d.start : e.start || (0 !== e.start && K ? J ? "0 0" : "0 100%" : 0),
                it = wt.pinnedContainer = e.pinnedContainer && Ti(e.pinnedContainer, wt),
                st = K && Math.max(0, ma.indexOf(wt)) || 0,
                at = st;
              for (xt && Ys(d) && (q = Pi.getProperty(h, ht.p), U = Pi.getProperty(p, ht.p)); at-- > 0;) (D = ma[at]).end || D.refresh(0, 1) || (Ui = wt), !(R = D.pin) || R !== K && R !== J && R !== it || D.isReverted || (X || (X = []), X.unshift(D), D.revert(!0, !0)), D !== ma[at] && (st--, at--);
              for (Fs(nt) && (nt = nt(wt)), nt = xs(nt, "start", wt), u = Wa(nt, K, H, ht, Et(), c, h, wt, W, bt, mt, V, lt, wt._startClamp && "_startClamp") || (J ? -.001 : 0), Fs(Z) && (Z = Z(wt)), zs(Z) && !Z.indexOf("+=") && (~Z.indexOf(" ") ? Z = (zs(nt) ? nt.split(" ")[0] : "") + Z : (G = da(Z.substr(2), H), Z = zs(nt) ? nt : (lt ? Pi.utils.mapRange(0, lt.duration(), lt.scrollTrigger.start, lt.scrollTrigger.end, u) : u) + G, rt = K)), Z = xs(Z, "end", wt), l = Math.max(u, Wa(Z || (rt ? "100% 0" : V), rt, H, ht, Et() + G, f, p, wt, W, bt, mt, V, lt, wt._endClamp && "_endClamp")) || -.001, G = 0, at = st; at--;) (R = (D = ma[at]).pin) && D.start - D._pinPush <= u && !lt && D.end > 0 && (T = D.end - (wt._startClamp ? Math.max(0, D.start) : D.start), (R === K && D.start - D._pinPush < u || R === it) && isNaN(nt) && (G += T * (1 - D.progress)), R === J && ($ += T));
              if (u += G, l += G, wt._startClamp && (wt._startClamp += G), wt._endClamp && !hs && (wt._endClamp = l || -.001, l = Math.min(l, Ds(dt, ht))), g = l - u || (u -= .01) && .001, j && (St = Pi.utils.clamp(0, 1, Pi.utils.normalize(u, l, B))), wt._pinPush = $, c && G && ((T = {})[ht.a] = "+=" + G, it && (T[ht.p] = "-=" + Et()), Pi.set([c, f], T)), !J || ls && wt.end >= Ds(dt, ht)) {
                if (K && Et() && !lt) for (O = K.parentNode; O && O !== Ii;) O._pinOffset && (u -= O._pinOffset, l -= O._pinOffset), O = O.parentNode;
              } else T = ea(J), A = ht === wi, S = Et(), k = parseFloat(w(ht.a)) + $, !V && l > 1 && (N = {
                style: N = (gt ? zi.scrollingElement || Fi : dt).style,
                value: N["overflow" + ht.a.toUpperCase()]
              }, gt && "scroll" !== ea(Ii)["overflow" + ht.a.toUpperCase()] && (N.style["overflow" + ht.a.toUpperCase()] = "scroll")), Xa(J, x, T), y = Ua(J), O = na(J, !0), F = mt && ki(dt, A ? bi : wi)(), tt ? ((C = [tt + ht.os2, g + $ + ta]).t = x, (at = tt === Qs ? ia(J, ht) + g + $ : 0) && (C.push(ht.d, at + ta), "auto" !== x.style.flexBasis && (x.style.flexBasis = at + ta)), qa(C), it && ma.forEach(function (t) {
                t.pin === it && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0);
              }), mt && Et(B)) : (at = ia(J, ht)) && "auto" !== x.style.flexBasis && (x.style.flexBasis = at + ta), mt && ((P = {
                top: O.top + (A ? S - u : F) + ta,
                left: O.left + (A ? F : S - u) + ta,
                boxSizing: "border-box",
                position: "fixed"
              })[Hs] = P["max" + Ks] = Math.ceil(O.width) + ta, P[Ws] = P["max" + Js] = Math.ceil(O.height) + ta, P[Zs] = P[Zs + Gs] = P[Zs + Vs] = P[Zs + $s] = P[Zs + js] = "0", P[Qs] = T[Qs], P[Qs + Gs] = T[Qs + Gs], P[Qs + Vs] = T[Qs + Vs], P[Qs + $s] = T[Qs + $s], P[Qs + js] = T[Qs + js], v = function (t, e, r) {
                for (var n, i = [], s = t.length, a = r ? 8 : 0; a < s; a += 2) n = t[a], i.push(n, n in e ? e[n] : t[a + 1]);
                return i.t = t.t, i;
              }(m, P, ot), hs && Et(0)), r ? (I = r._initted, Zi(1), r.render(r.duration(), !0, !0), M = w(ht.a) - k + g + $, E = Math.abs(g - M) > 1, mt && E && v.splice(v.length - 2, 2), r.render(0, !0, !0), I || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Zi(0)) : M = g, N && (N.value ? N.style["overflow" + ht.a.toUpperCase()] = N.value : N.style.removeProperty("overflow-" + ht.a));
              X && X.forEach(function (t) {
                return t.revert(!1, !0);
              }), wt.start = u, wt.end = l, a = o = hs ? B : Et(), lt || hs || (a < B && Et(B), wt.scroll.rec = 0), wt.revert(!1, !0), Ct = gs(), Y && (Ot = -1, Y.restart(!0)), Ui = 0, r && pt && (r._initted || L) && r.progress() !== L && r.progress(L || 0, !0).render(r.time(), !0, !0), (j || St !== wt.progress || lt || et || r && !r._initted) && (r && !pt && r.totalProgress(lt && u < -.001 && !St ? Pi.utils.normalize(u, l, 0) : St, !0), wt.progress = j || (a - u) / g === St ? 0 : St), J && tt && (x._pinOffset = Math.round(wt.progress * M)), z && z.invalidate(), isNaN(q) || (q -= Pi.getProperty(h, ht.p), U -= Pi.getProperty(p, ht.p), $a(h, ht, q), $a(c, ht, q - (b || 0)), $a(p, ht, U), $a(f, ht, U - (b || 0))), j && !hs && wt.update(), !Q || hs || _ || (_ = !0, Q(wt), _ = !1);
            }
          }, wt.getVelocity = function () {
            return (Et() - o) / (gs() - Ni) * 1e3 || 0;
          }, wt.endAnimation = function () {
            Bs(wt.callbackAnimation), r && (z ? z.progress(1) : r.paused() ? pt || Bs(r, wt.direction < 0, 1) : Bs(r, r.reversed()));
          }, wt.labelToScroll = function (t) {
            return r && r.labels && (u || wt.refresh() || u) + r.labels[t] / r.duration() * g || 0;
          }, wt.getTrailing = function (t) {
            var e = ma.indexOf(wt),
              r = wt.direction > 0 ? ma.slice(0, e).reverse() : ma.slice(e + 1);
            return (zs(t) ? r.filter(function (e) {
              return e.vars.preventOverlaps === t;
            }) : r).filter(function (t) {
              return wt.direction > 0 ? t.end <= u : t.start >= l;
            });
          }, wt.update = function (t, e, i) {
            if (!lt || i || t) {
              var s,
                c,
                f,
                p,
                d,
                _,
                m,
                b = !0 === hs ? B : wt.scroll(),
                w = t ? 0 : (b - u) / g,
                C = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                P = wt.progress;
              if (e && (o = a, a = lt ? Et() : b, at && (R = D, D = r && !pt ? r.totalProgress() : C)), rt && J && !Ui && !_s && vs && (!C && u < b + (b - o) / (gs() - Ni) * rt ? C = 1e-4 : 1 === C && l > b + (b - o) / (gs() - Ni) * rt && (C = .9999)), C !== P && wt.enabled) {
                if (p = (d = (s = wt.isActive = !!C && C < 1) != (!!P && P < 1)) || !!C != !!P, wt.direction = C > P ? 1 : -1, wt.progress = C, p && !Ui && (c = C && !P ? 0 : 1 === C ? 1 : 1 === P ? 2 : 3, pt && (f = !d && "none" !== yt[c + 1] && yt[c + 1] || yt[c], m = r && ("complete" === f || "reset" === f || f in r))), ft && (d || m) && (m || Z || !r) && (Fs(ft) ? ft(wt) : wt.getTrailing(ft).forEach(function (t) {
                  return t.endAnimation();
                })), pt || (!z || Ui || _s ? r && r.totalProgress(C, !(!Ui || !Ct && !t)) : (z._dp._time - z._start !== z._time && z.render(z._dp._time - z._start), z.resetTo ? z.resetTo("totalProgress", C, r._tTime / r._tDur) : (z.vars.totalProgress = C, z.invalidate().restart()))), J) if (t && tt && (x.style[tt + ht.os2] = O), mt) {
                  if (p) {
                    if (_ = !t && C > P && l + 1 > b && b + 1 >= Ds(dt, ht), ot) if (t || !s && !_) ja(J, x);else {
                      var F = na(J, !0),
                        I = b - u;
                      ja(J, Ii, F.top + (ht === wi ? I : 0) + ta, F.left + (ht === wi ? 0 : I) + ta);
                    }
                    qa(s || _ ? v : y), E && C < 1 && s || T(k + (1 !== C || _ ? 0 : M));
                  }
                } else T(Os(k + M * C));
                at && !n.tween && !Ui && !_s && Y.restart(!0), j && (d || st && C && (C < 1 || !cs)) && Li(j.targets).forEach(function (t) {
                  return t.classList[s || st ? "add" : "remove"](j.className);
                }), V && !pt && !t && V(wt), p && !Ui ? (pt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), V && V(wt)), !d && cs || ($ && d && Ls(wt, $), vt[c] && Ls(wt, vt[c]), st && (1 === C ? wt.kill(!1, 1) : vt[c] = 0), d || vt[c = 1 === C ? 1 : 3] && Ls(wt, vt[c])), ct && !s && Math.abs(wt.getVelocity()) > (Is(ct) ? ct : 2500) && (Bs(wt.callbackAnimation), z ? z.progress(1) : Bs(r, "reverse" === f ? 1 : !C, 1))) : pt && V && !Ui && V(wt);
              }
              if (A) {
                var L = lt ? b / lt.duration() * (lt._caScrollDist || 0) : b;
                S(L + (h._isFlipped ? 1 : 0)), A(L);
              }
              X && X(-b / lt.duration() * (lt._caScrollDist || 0));
            }
          }, wt.enable = function (e, r) {
            wt.enabled || (wt.enabled = !0, ua(dt, "resize", wa), gt || ua(dt, "scroll", xa), Tt && ua(t, "refreshInit", Tt), !1 !== e && (wt.progress = St = 0, a = o = Ot = Et()), !1 !== r && wt.refresh());
          }, wt.getTween = function (t) {
            return t && n ? n.tween : z;
          }, wt.setPositions = function (t, e, r, n) {
            if (lt) {
              var i = lt.scrollTrigger,
                s = lt.duration(),
                a = i.end - i.start;
              t = i.start + a * t / s, e = i.start + a * e / s;
            }
            wt.refresh(!1, !1, {
              start: bs(t, r && !!wt._startClamp),
              end: bs(e, r && !!wt._endClamp)
            }, n), wt.update();
          }, wt.adjustPinSpacing = function (t) {
            if (C && t) {
              var e = C.indexOf(ht.d) + 1;
              C[e] = parseFloat(C[e]) + t + ta, C[1] = parseFloat(C[1]) + t + ta, qa(C);
            }
          }, wt.disable = function (e, r) {
            if (wt.enabled && (!1 !== e && wt.revert(!0, !0), wt.enabled = wt.isActive = !1, r || z && z.pause(), B = 0, i && (i.uncache = 1), Tt && la(t, "refreshInit", Tt), Y && (Y.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !gt)) {
              for (var s = ma.length; s--;) if (ma[s].scroller === dt && ma[s] !== wt) return;
              la(dt, "resize", wa), gt || la(dt, "scroll", xa);
            }
          }, wt.kill = function (t, n) {
            wt.disable(t, n), z && !n && z.kill(), G && delete va[G];
            var s = ma.indexOf(wt);
            s >= 0 && ma.splice(s, 1), s === Vi && Ia > 0 && Vi--, s = 0, ma.forEach(function (t) {
              return t.scroller === wt.scroller && (s = 1);
            }), s || hs || (wt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
              kill: !1
            }), n || r.kill()), c && [c, f, h, p].forEach(function (t) {
              return t.parentNode && t.parentNode.removeChild(t);
            }), ds === wt && (ds = 0), J && (i && (i.uncache = 1), s = 0, ma.forEach(function (t) {
              return t.pin === J && s++;
            }), s || (i.spacer = 0)), e.onKill && e.onKill(wt);
          }, ma.push(wt), wt.enable(!1, !1), N && N(wt), r && r.add && !g) {
            var Rt = wt.update;
            wt.update = function () {
              wt.update = Rt, li.cache++, u || l || wt.refresh();
            }, Pi.delayedCall(.01, wt.update), g = .01, u = l = 0;
          } else wt.refresh();
          J && function () {
            if (ps !== Pa) {
              var t = ps = Pa;
              requestAnimationFrame(function () {
                return t === Pa && za(!0);
              });
            }
          }();
        } else this.update = this.refresh = this.kill = Ms;
      }, t.register = function (e) {
        return Di || (Pi = e || Ss(), Cs() && window.document && t.enable(), Di = ys), Di;
      }, t.defaults = function (t) {
        if (t) for (var e in t) ha[e] = t[e];
        return ha;
      }, t.disable = function (t, e) {
        ys = 0, ma.forEach(function (r) {
          return r[e ? "kill" : "disable"](t);
        }), la(Ri, "wheel", xa), la(zi, "scroll", xa), clearInterval(qi), la(zi, "touchcancel", Ms), la(Ii, "touchstart", Ms), oa(la, zi, "pointerdown,touchstart,mousedown", Ts), oa(la, zi, "pointerup,touchend,mouseup", ks), Bi.kill(), Rs(la);
        for (var r = 0; r < li.length; r += 3) ca(la, li[r], li[r + 1]), ca(la, li[r], li[r + 2]);
      }, t.enable = function () {
        if (Ri = window, zi = document, Fi = zi.documentElement, Ii = zi.body, Pi && (Li = Pi.utils.toArray, Xi = Pi.utils.clamp, is = Pi.core.context || Ms, Zi = Pi.core.suppressOverwrites || Ms, ss = Ri.history.scrollRestoration || "auto", Fa = Ri.pageYOffset || 0, Pi.core.globals("ScrollTrigger", t), Ii)) {
          ys = 1, (as = document.createElement("div")).style.height = "100vh", as.style.position = "absolute", Da(), ws(), Ai.register(Pi), t.isTouch = Ai.isTouch, ns = Ai.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ts = 1 === Ai.isTouch, ua(Ri, "wheel", xa), Yi = [Ri, zi, Fi, Ii], Pi.matchMedia ? (t.matchMedia = function (t) {
            var e,
              r = Pi.matchMedia();
            for (e in t) r.add(e, t[e]);
            return r;
          }, Pi.addEventListener("matchMediaInit", function () {
            return Ea();
          }), Pi.addEventListener("matchMediaRevert", function () {
            return Sa();
          }), Pi.addEventListener("matchMedia", function () {
            za(0, 1), Oa("matchMedia");
          }), Pi.matchMedia().add("(orientation: portrait)", function () {
            return ba(), ba;
          })) : console.warn("Requires GSAP 3.11.0 or later"), ba(), ua(zi, "scroll", xa);
          var e,
            r,
            n = Ii.hasAttribute("style"),
            i = Ii.style,
            s = i.borderTopStyle,
            a = Pi.core.Animation.prototype;
          for (a.revert || Object.defineProperty(a, "revert", {
            value: function value() {
              return this.time(-.01, !0);
            }
          }), i.borderTopStyle = "solid", e = na(Ii), wi.m = Math.round(e.top + wi.sc()) || 0, bi.m = Math.round(e.left + bi.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), n || (Ii.setAttribute("style", ""), Ii.removeAttribute("style")), qi = setInterval(ya, 250), Pi.delayedCall(.5, function () {
            return _s = 0;
          }), ua(zi, "touchcancel", Ms), ua(Ii, "touchstart", Ms), oa(ua, zi, "pointerdown,touchstart,mousedown", Ts), oa(ua, zi, "pointerup,touchend,mouseup", ks), Wi = Pi.utils.checkPrefix("transform"), La.push(Wi), Di = gs(), Bi = Pi.delayedCall(.2, za).pause(), $i = [zi, "visibilitychange", function () {
            var t = Ri.innerWidth,
              e = Ri.innerHeight;
            zi.hidden ? (ji = t, Gi = e) : ji === t && Gi === e || wa();
          }, zi, "DOMContentLoaded", za, Ri, "load", za, Ri, "resize", wa], Rs(ua), ma.forEach(function (t) {
            return t.enable(0, 1);
          }), r = 0; r < li.length; r += 3) ca(la, li[r], li[r + 1]), ca(la, li[r], li[r + 2]);
        }
      }, t.config = function (e) {
        "limitCallbacks" in e && (cs = !!e.limitCallbacks);
        var r = e.syncInterval;
        r && clearInterval(qi) || (qi = r) && setInterval(ya, r), "ignoreMobileResize" in e && (ts = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Rs(la) || Rs(ua, e.autoRefreshEvents || "none"), Ki = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
      }, t.scrollerProxy = function (t, e) {
        var r = Ti(t),
          n = li.indexOf(r),
          i = Es(r);
        ~n && li.splice(n, i ? 6 : 2), e && (i ? ci.unshift(Ri, e, Ii, e, Fi, e) : ci.unshift(r, e));
      }, t.clearMatchMedia = function (t) {
        ma.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }, t.isInViewport = function (t, e, r) {
        var n = (zs(t) ? Ti(t) : t).getBoundingClientRect(),
          i = n[r ? Hs : Ws] * e || 0;
        return r ? n.right - i > 0 && n.left + i < Ri.innerWidth : n.bottom - i > 0 && n.top + i < Ri.innerHeight;
      }, t.positionInViewport = function (t, e, r) {
        zs(t) && (t = Ti(t));
        var n = t.getBoundingClientRect(),
          i = n[r ? Hs : Ws],
          s = null == e ? i / 2 : e in pa ? pa[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
        return r ? (n.left + s) / Ri.innerWidth : (n.top + s) / Ri.innerHeight;
      }, t.killAll = function (t) {
        if (ma.slice(0).forEach(function (t) {
          return "ScrollSmoother" !== t.vars.id && t.kill();
        }), !0 !== t) {
          var e = Ta.killAll || [];
          Ta = {}, e.forEach(function (t) {
            return t();
          });
        }
      }, t;
    }();
  Za.version = "3.12.7", Za.saveStyles = function (t) {
    return t ? Li(t).forEach(function (t) {
      if (t && t.style) {
        var e = Ca.indexOf(t);
        e >= 0 && Ca.splice(e, 5), Ca.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Pi.core.getCache(t), is());
      }
    }) : Ca;
  }, Za.revert = function (t, e) {
    return Ea(!t, e);
  }, Za.create = function (t, e) {
    return new Za(t, e);
  }, Za.refresh = function (t) {
    return t ? wa(!0) : (Di || Za.register()) && za(!0);
  }, Za.update = function (t) {
    return ++li.cache && Ya(!0 === t ? 2 : 0);
  }, Za.clearScrollMemory = Aa, Za.maxScroll = function (t, e) {
    return Ds(t, e ? bi : wi);
  }, Za.getScrollFunc = function (t, e) {
    return ki(Ti(t), e ? bi : wi);
  }, Za.getById = function (t) {
    return va[t];
  }, Za.getAll = function () {
    return ma.filter(function (t) {
      return "ScrollSmoother" !== t.vars.id;
    });
  }, Za.isScrolling = function () {
    return !!vs;
  }, Za.snapDirectional = aa, Za.addEventListener = function (t, e) {
    var r = Ta[t] || (Ta[t] = []);
    ~r.indexOf(e) || r.push(e);
  }, Za.removeEventListener = function (t, e) {
    var r = Ta[t],
      n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1);
  }, Za.batch = function (t, e) {
    var r,
      n = [],
      i = {},
      s = e.interval || .016,
      a = e.batchMax || 1e9,
      o = function o(t, e) {
        var r = [],
          n = [],
          i = Pi.delayedCall(s, function () {
            e(r, n), r = [], n = [];
          }).pause();
        return function (t) {
          r.length || i.restart(!0), r.push(t.trigger), n.push(t), a <= r.length && i.progress(1);
        };
      };
    for (r in e) i[r] = "on" === r.substr(0, 2) && Fs(e[r]) && "onRefreshInit" !== r ? o(0, e[r]) : e[r];
    return Fs(a) && (a = a(), ua(Za, "refresh", function () {
      return a = e.batchMax();
    })), Li(t).forEach(function (t) {
      var e = {};
      for (r in i) e[r] = i[r];
      e.trigger = t, n.push(Za.create(e));
    }), n;
  };
  var Ka,
    Ja = function Ja(t, e, r, n) {
      return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1;
    },
    to = function t(e, r) {
      !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Ai.isTouch ? " pinch-zoom" : "") : "none", e === Fi && t(Ii, r);
    },
    eo = {
      auto: 1,
      scroll: 1
    },
    ro = function ro(t) {
      var e,
        r = t.event,
        n = t.target,
        i = t.axis,
        s = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = s._gsap || Pi.core.getCache(s),
        o = gs();
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; s && s !== Ii && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !eo[(e = ea(s)).overflowY] && !eo[e.overflowX]);) s = s.parentNode;
        a._isScroll = s && s !== n && !Es(s) && (eo[(e = ea(s)).overflowY] || eo[e.overflowX]), a._isScrollT = o;
      }
      (a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0);
    },
    no = function no(t, e, r, n) {
      return Ai.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: n = n && ro,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function onEnable() {
          return r && ua(zi, Ai.eventTypes[0], so, !1, !0);
        },
        onDisable: function onDisable() {
          return la(zi, Ai.eventTypes[0], so, !0);
        }
      });
    },
    io = /(input|label|select|textarea)/i,
    so = function so(t) {
      var e = io.test(t.target.tagName);
      (e || Ka) && (t._gsapAllow = !0, Ka = e);
    };
  Za.sort = function (t) {
    if (Fs(t)) return ma.sort(t);
    var e = Ri.pageYOffset || 0;
    return Za.getAll().forEach(function (t) {
      return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + Ri.innerHeight;
    }), ma.sort(t || function (t, e) {
      return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0));
    });
  }, Za.observe = function (t) {
    return new Ai(t);
  }, Za.normalizeScroll = function (t) {
    if (void 0 === t) return Ji;
    if (!0 === t && Ji) return Ji.enable();
    if (!1 === t) return Ji && Ji.kill(), void (Ji = t);
    var e = t instanceof Ai ? t : function (t) {
      Ys(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
      var e,
        r,
        n,
        i,
        s,
        a,
        o,
        u,
        l = t,
        c = l.normalizeScrollX,
        f = l.momentum,
        h = l.allowNestedScroll,
        p = l.onRelease,
        d = Ti(t.target) || Fi,
        _ = Pi.core.globals().ScrollSmoother,
        g = _ && _.get(),
        m = ns && (t.content && Ti(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
        v = ki(d, wi),
        y = ki(d, bi),
        x = 1,
        b = (Ai.isTouch && Ri.visualViewport ? Ri.visualViewport.scale * Ri.visualViewport.width : Ri.outerWidth) / Ri.innerWidth,
        w = 0,
        T = Fs(f) ? function () {
          return f(e);
        } : function () {
          return f || 2.8;
        },
        k = no(d, t.type, !0, h),
        M = function M() {
          return i = !1;
        },
        O = Ms,
        C = Ms,
        S = function S() {
          r = Ds(d, wi), C = Xi(ns ? 1 : 0, r), c && (O = Xi(0, Ds(d, bi))), n = Pa;
        },
        E = function E() {
          m._gsap.y = Os(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0;
        },
        A = function A() {
          S(), s.isActive() && s.vars.scrollY > r && (v() > r ? s.progress(1) && v(r) : s.resetTo("scrollY", r));
        };
      return m && Pi.set(m, {
        y: "+=0"
      }), t.ignoreCheck = function (t) {
        return ns && "touchmove" === t.type && function () {
          if (i) {
            requestAnimationFrame(M);
            var t = Os(e.deltaY / 2),
              r = C(v.v - t);
            if (m && r !== v.v + v.offset) {
              v.offset = r - v.v;
              var n = Os((parseFloat(m && m._gsap.y) || 0) - v.offset);
              m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", v.cacheID = li.cache, Ya();
            }
            return !0;
          }
          v.offset && E(), i = !0;
        }() || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1;
      }, t.onPress = function () {
        i = !1;
        var t = x;
        x = Os((Ri.visualViewport && Ri.visualViewport.scale || 1) / b), s.pause(), t !== x && to(d, x > 1.01 || !c && "x"), a = y(), o = v(), S(), n = Pa;
      }, t.onRelease = t.onGestureStart = function (t, e) {
        if (v.offset && E(), e) {
          li.cache++;
          var n,
            i,
            a = T();
          c && (i = (n = y()) + .05 * a * -t.velocityX / .227, a *= Ja(y, n, i, Ds(d, bi)), s.vars.scrollX = O(i)), i = (n = v()) + .05 * a * -t.velocityY / .227, a *= Ja(v, n, i, Ds(d, wi)), s.vars.scrollY = C(i), s.invalidate().duration(a).play(.01), (ns && s.vars.scrollY >= r || n >= r - 1) && Pi.to({}, {
            onUpdate: A,
            duration: a
          });
        } else u.restart(!0);
        p && p(t);
      }, t.onWheel = function () {
        s._ts && s.pause(), gs() - w > 1e3 && (n = 0, w = gs());
      }, t.onChange = function (t, e, r, i, s) {
        if (Pa !== n && S(), e && c && y(O(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])), r) {
          v.offset && E();
          var u = s[2] === r,
            l = u ? o + t.startY - t.y : v() + r - s[1],
            f = C(l);
          u && l !== f && (o += f - l), v(f);
        }
        (r || e) && Ya();
      }, t.onEnable = function () {
        to(d, !c && "x"), Za.addEventListener("refresh", A), ua(Ri, "resize", A), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), k.enable();
      }, t.onDisable = function () {
        to(d, !0), la(Ri, "resize", A), Za.removeEventListener("refresh", A), k.kill();
      }, t.lockAxis = !1 !== t.lockAxis, (e = new Ai(t)).iOS = ns, ns && !v() && v(1), ns && Pi.ticker.add(Ms), u = e._dc, s = Pi.to(e, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: c ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Ga(v, v(), function () {
            return s.pause();
          })
        },
        onUpdate: Ya,
        onComplete: u.vars.onComplete
      }), e;
    }(t);
    return Ji && Ji.target === e.target && Ji.kill(), Es(e.target) && (Ji = e), e;
  }, Za.core = {
    _getVelocityProp: Mi,
    _inputObserver: no,
    _scrollers: li,
    _proxies: ci,
    bridge: {
      ss: function ss() {
        vs || Oa("scrollStart"), vs = gs();
      },
      ref: function ref() {
        return Ui;
      }
    }
  }, Ss() && Pi.registerPlugin(Za), Wn.registerPlugin(Za);
  var ao = [{
    title: "Slide 1",
    description: "Lorem ipsum...",
    image: "/images/heroImage.jpg"
  }, {
    title: "Slide 2",
    description: "Consectetur adipiscing...",
    image: "/images/heroImage.jpg"
  }, {
    title: "Slide 3",
    description: "Sed do eiusmod...",
    image: "/images/heroImage.jpg"
  }, {
    title: "Slide 4",
    description: "Tempor incididunt...",
    image: "/images/heroImage.jpg"
  }, {
    title: "",
    description: "Fara titlu",
    image: "/images/heroImage.jpg"
  }].filter(function (t) {
    return "" !== t.title.trim();
  });
  document.querySelector(".container").innerHTML = ao.map(function (t) {
    return "\n    <section class=\"slide\">\n        <img src=\"".concat(t.image, "\" alt=\"").concat(t.title, "\" class=\"slide-image\">\n        <div class=\"slide-content\">\n            <h1 class=\"anim\">").concat(t.title, "</h1>\n            <p class=\"anim\">").concat(t.description, "</p>\n        </div>\n    </section>\n");
  }).join("");
  var oo = Wn.utils.toArray(".slide");
  Wn.to(oo, {
    xPercent: -100 * (oo.length - 1),
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".container",
      pin: !0,
      scrub: 2.5,
      end: "+=300%"
    }
  });
})();