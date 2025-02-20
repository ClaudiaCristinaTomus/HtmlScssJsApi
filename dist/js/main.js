"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! For license information please see main.js.LICENSE.txt */
(function () {
  "use strict";

  var e = {
      56: function _(e, t, r) {
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      72: function _(e) {
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++) if (t[n].identifier === e) {
            r = n;
            break;
          }
          return r;
        }
        function n(e, n) {
          for (var s = {}, a = [], o = 0; o < e.length; o++) {
            var l = e[o],
              d = n.base ? l[0] + n.base : l[0],
              c = s[d] || 0,
              p = "".concat(d, " ").concat(c);
            s[d] = c + 1;
            var u = r(p),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5]
              };
            if (-1 !== u) t[u].references++, t[u].updater(f);else {
              var h = i(f, n);
              n.byIndex = o, t.splice(o, 0, {
                identifier: p,
                updater: h,
                references: 1
              });
            }
            a.push(p);
          }
          return a;
        }
        function i(e, t) {
          var r = t.domAPI(t);
          return r.update(e), function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              r.update(e = t);
            } else r.remove();
          };
        }
        e.exports = function (e, i) {
          var s = n(e = e || [], i = i || {});
          return function (e) {
            e = e || [];
            for (var a = 0; a < s.length; a++) {
              var o = r(s[a]);
              t[o].references--;
            }
            for (var l = n(e, i), d = 0; d < s.length; d++) {
              var c = r(s[d]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            s = l;
          };
        };
      },
      85: function _(e) {
        e.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA";
      },
      113: function _(e) {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      124: function _(e, t, r) {
        r.d(t, {
          A: function A() {
            return o;
          }
        });
        var n = r(601),
          i = r.n(n),
          s = r(314),
          a = r.n(s)()(i());
        a.push([e.id, ":root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform,\n        200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n        200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n    200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n", ""]);
        var o = a;
      },
      314: function _(e) {
        e.exports = function (e) {
          var t = [];
          return t.toString = function () {
            return this.map(function (t) {
              var r = "",
                n = void 0 !== t[5];
              return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r;
            }).join("");
          }, t.i = function (e, r, n, i, s) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var a = {};
            if (n) for (var o = 0; o < this.length; o++) {
              var l = this[o][0];
              null != l && (a[l] = !0);
            }
            for (var d = 0; d < e.length; d++) {
              var c = [].concat(e[d]);
              n && a[c[0]] || (void 0 !== s && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = s), r && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = r) : c[2] = r), i && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = i) : c[4] = "".concat(i)), t.push(c));
            }
          }, t;
        };
      },
      417: function _(e) {
        e.exports = function (e, t) {
          return t || (t = {}), e ? (e = String(e.__esModule ? e["default"] : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e;
        };
      },
      506: function _(e, t, r) {
        r.d(t, {
          A: function A() {
            return o;
          }
        });
        var n = r(601),
          i = r.n(n),
          s = r(314),
          a = r.n(s)()(i());
        a.push([e.id, ":root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n", ""]);
        var o = a;
      },
      540: function _(e) {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      601: function _(e) {
        e.exports = function (e) {
          return e[1];
        };
      },
      632: function _(e, t, r) {
        r.d(t, {
          A: function A() {
            return o;
          }
        });
        var n = r(601),
          i = r.n(n),
          s = r(314),
          a = r.n(s)()(i());
        a.push([e.id, ".swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n", ""]);
        var o = a;
      },
      659: function _(e) {
        var t = {};
        e.exports = function (e, r) {
          var n = function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
              t[e] = r;
            }
            return t[e];
          }(e);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          n.appendChild(r);
        };
      },
      825: function _(e) {
        e.exports = function (e) {
          if ("undefined" == typeof document) return {
            update: function update() {},
            remove: function remove() {}
          };
          var t = e.insertStyleElement(e);
          return {
            update: function update(r) {
              !function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")), r.media && (n += "@media ".concat(r.media, " {"));
                var i = void 0 !== r.layer;
                i && (n += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), n += r.css, i && (n += "}"), r.media && (n += "}"), r.supports && (n += "}");
                var s = r.sourceMap;
                s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleTagTransform(n, e, t.options);
              }(t, e, r);
            },
            remove: function remove() {
              !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              }(t);
            }
          };
        };
      },
      870: function _(e, t, r) {
        r.d(t, {
          A: function A() {
            return u;
          }
        });
        var n = r(601),
          i = r.n(n),
          s = r(314),
          a = r.n(s),
          o = r(417),
          l = r.n(o),
          d = new URL(r(85), r.b),
          c = a()(i()),
          p = l()(d);
        c.push([e.id, "/**\n * Swiper 11.2.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2025 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 14, 2025\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(".concat(p, ");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n"), ""]);
        var u = c;
      }
    },
    t = {};
  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var s = t[n] = {
      id: n,
      exports: {}
    };
    return e[n](s, s.exports, r), s.exports;
  }
  function n(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function i(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  r.m = e, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, {
      a: t
    }), t;
  }, r.d = function (e, t) {
    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.b = document.baseURI || self.location.href, r.nc = void 0;
  var s,
    a,
    o,
    l,
    d,
    c,
    p,
    u,
    f,
    h,
    g,
    m,
    v,
    w,
    b,
    y,
    _,
    x = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    T = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    A = 1e8,
    S = 1e-8,
    E = 2 * Math.PI,
    C = E / 4,
    M = 0,
    k = Math.sqrt,
    P = Math.cos,
    O = Math.sin,
    z = function z(e) {
      return "string" == typeof e;
    },
    L = function L(e) {
      return "function" == typeof e;
    },
    I = function I(e) {
      return "number" == typeof e;
    },
    D = function D(e) {
      return void 0 === e;
    },
    B = function B(e) {
      return "object" == _typeof(e);
    },
    R = function R(e) {
      return !1 !== e;
    },
    F = function F() {
      return "undefined" != typeof window;
    },
    G = function G(e) {
      return L(e) || z(e);
    },
    N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    Y = Array.isArray,
    V = /(?:-?\.?\d|\.)+/gi,
    H = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    $ = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    j = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    q = /[+-]=-?[.\d]+/,
    X = /[^,'"\[\]\s]+/gi,
    W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    U = {},
    Q = {},
    Z = function Z(e) {
      return (Q = Ee(e, U)) && Er;
    },
    K = function K(e, t) {
      return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
    },
    J = function J(e, t) {
      return !t && console.warn(e);
    },
    ee = function ee(e, t) {
      return e && (U[e] = t) && Q && (Q[e] = t) || U;
    },
    te = function te() {
      return 0;
    },
    re = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    ne = {
      suppressEvents: !0,
      kill: !1
    },
    ie = {
      suppressEvents: !0
    },
    se = {},
    ae = [],
    oe = {},
    le = {},
    de = {},
    ce = 30,
    pe = [],
    ue = "",
    fe = function fe(e) {
      var t,
        r,
        n = e[0];
      if (B(n) || L(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
        for (r = pe.length; r-- && !pe[r].targetTest(n););
        t = pe[r];
      }
      for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Nt(e[r], t))) || e.splice(r, 1);
      return e;
    },
    he = function he(e) {
      return e._gsap || fe(_nt(e))[0]._gsap;
    },
    ge = function ge(e, t, r) {
      return (r = e[t]) && L(r) ? e[t]() : D(r) && e.getAttribute && e.getAttribute(t) || r;
    },
    me = function me(e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ve = function ve(e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    we = function we(e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    },
    be = function be(e, t) {
      var r = t.charAt(0),
        n = parseFloat(t.substr(2));
      return e = parseFloat(e), "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n;
    },
    ye = function ye(e, t) {
      for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r;);
      return n < r;
    },
    _e = function _e() {
      var e,
        t,
        r = ae.length,
        n = ae.slice(0);
      for (oe = {}, ae.length = 0, e = 0; e < r; e++) (t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    },
    xe = function xe(e, t, r, n) {
      ae.length && !a && _e(), e.render(t, r, n || a && t < 0 && (e._initted || e._startAt)), ae.length && !a && _e();
    },
    Te = function Te(e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(X).length < 2 ? t : z(e) ? e.trim() : e;
    },
    Ae = function Ae(e) {
      return e;
    },
    Se = function Se(e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    Ee = function Ee(e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Ce = function e(t, r) {
      for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = B(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
      return t;
    },
    Me = function Me(e, t) {
      var r,
        n = {};
      for (r in e) r in t || (n[r] = e[r]);
      return n;
    },
    ke = function ke(e) {
      var t,
        r = e.parent || l,
        n = e.keyframes ? (t = Y(e.keyframes), function (e, r) {
          for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n]);
        }) : Se;
      if (R(e.inherit)) for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
      return e;
    },
    Pe = function Pe(e, t, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var s,
        a = e[n];
      if (i) for (s = t[i]; a && a[i] > s;) a = a._prev;
      return a ? (t._next = a._next, a._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = a, t.parent = t._dp = e, t;
    },
    Oe = function Oe(e, t, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = t._prev,
        s = t._next;
      i ? i._next = s : e[r] === t && (e[r] = s), s ? s._prev = i : e[n] === t && (e[n] = i), t._next = t._prev = t.parent = null;
    },
    ze = function ze(e, t) {
      e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
    },
    Le = function Le(e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0)) for (var r = e; r;) r._dirty = 1, r = r.parent;
      return e;
    },
    Ie = function Ie(e, t, r, n) {
      return e._startAt && (a ? e._startAt.revert(ne) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
    },
    De = function e(t) {
      return !t || t._ts && e(t.parent);
    },
    Be = function Be(e) {
      return e._repeat ? Re(e._tTime, e = e.duration() + e._rDelay) * e : 0;
    },
    Re = function Re(e, t) {
      var r = Math.floor(e = we(e / t));
      return e && r === e ? r - 1 : r;
    },
    Fe = function Fe(e, t) {
      return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
    },
    Ge = function Ge(e) {
      return e._end = we(e._start + (e._tDur / Math.abs(e._ts || e._rts || S) || 0));
    },
    Ne = function Ne(e, t) {
      var r = e._dp;
      return r && r.smoothChildTiming && e._ts && (e._start = we(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ge(e), r._dirty || Le(r, e)), e;
    },
    Ye = function Ye(e, t) {
      var r;
      if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Fe(e.rawTime(), t), (!t._dur || Je(0, t.totalDuration(), r) - t._tTime > S) && t.render(r, !0)), Le(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration()) for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
        e._zTime = -1e-8;
      }
    },
    Ve = function Ve(e, t, r, n) {
      return t.parent && ze(t), t._start = we((I(r) ? r : r || e !== l ? Qe(e, r, t) : e._time) + t._delay), t._end = we(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Pe(e, t, "_first", "_last", e._sort ? "_start" : 0), qe(t) || (e._recent = t), n || Ye(e, t), e._ts < 0 && Ne(e, e._tTime), e;
    },
    He = function He(e, t) {
      return (U.ScrollTrigger || K("scrollTrigger", t)) && U.ScrollTrigger.create(t, e);
    },
    $e = function $e(e, t, r, n, i) {
      return Wt(e, t, i), e._initted ? !r && e._pt && !a && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && f !== Ct.frame ? (ae.push(e), e._lazy = [i, n], 1) : void 0 : 1;
    },
    je = function e(t) {
      var r = t.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r));
    },
    qe = function qe(e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t;
    },
    Xe = function Xe(e, t, r, n) {
      var i = e._repeat,
        s = we(t) || 0,
        a = e._tTime / e._tDur;
      return a && !n && (e._time *= s / e._dur), e._dur = s, e._tDur = i ? i < 0 ? 1e10 : we(s * (i + 1) + e._rDelay * i) : s, a > 0 && !n && Ne(e, e._tTime = e._tDur * a), e.parent && Ge(e), r || Le(e.parent, e), e;
    },
    We = function We(e) {
      return e instanceof Vt ? Le(e) : Xe(e, e._dur);
    },
    Ue = {
      _start: 0,
      endTime: te,
      totalDuration: te
    },
    Qe = function e(t, r, n) {
      var i,
        s,
        a,
        o = t.labels,
        l = t._recent || Ue,
        d = t.duration() >= A ? l.endTime(!1) : t._dur;
      return z(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? l : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = d), o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (s = s / 100 * (Y(n) ? n[0] : n).totalDuration()), i > 1 ? e(t, r.substr(0, i - 1), n) + s : d + s)) : null == r ? d : +r;
    },
    Ze = function Ze(e, t, r) {
      var n,
        i,
        s = I(t[1]),
        a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];
      if (s && (o.duration = t[1]), o.parent = r, e) {
        for (n = o, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = R(i.vars.inherit) && i.parent;
        o.immediateRender = R(n.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
      }
      return new Jt(t[0], o, t[a + 1]);
    },
    Ke = function Ke(e, t) {
      return e || 0 === e ? t(e) : t;
    },
    Je = function Je(e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    et = function et(e, t) {
      return z(e) && (t = W.exec(e)) ? t[1] : "";
    },
    tt = [].slice,
    rt = function rt(e, t) {
      return e && B(e) && "length" in e && (!t && !e.length || e.length - 1 in e && B(e[0])) && !e.nodeType && e !== d;
    },
    _nt = function nt(e, t, r) {
      return o && !t && o.selector ? o.selector(e) : !z(e) || r || !c && Mt() ? Y(e) ? function (e, t, r) {
        return void 0 === r && (r = []), e.forEach(function (e) {
          var n;
          return z(e) && !t || rt(e, 1) ? (n = r).push.apply(n, _nt(e)) : r.push(e);
        }) || r;
      }(e, r) : rt(e) ? tt.call(e, 0) : e ? [e] : [] : tt.call((t || p).querySelectorAll(e), 0);
    },
    it = function it(e) {
      return e = _nt(e)[0] || J("Invalid scope") || {}, function (t) {
        var r = e.current || e.nativeElement || e;
        return _nt(t, r.querySelectorAll ? r : r === e ? J("Invalid scope") || p.createElement("div") : e);
      };
    },
    st = function st(e) {
      return e.sort(function () {
        return .5 - Math.random();
      });
    },
    at = function at(e) {
      if (L(e)) return e;
      var t = B(e) ? e : {
          each: e
        },
        r = Dt(t.ease),
        n = t.from || 0,
        i = parseFloat(t.base) || 0,
        s = {},
        a = n > 0 && n < 1,
        o = isNaN(n) || a,
        l = t.axis,
        d = n,
        c = n;
      return z(n) ? d = c = {
        center: .5,
        edges: .5,
        end: 1
      }[n] || 0 : !a && o && (d = n[0], c = n[1]), function (e, a, p) {
        var u,
          f,
          h,
          g,
          m,
          v,
          w,
          b,
          y,
          _ = (p || t).length,
          x = s[_];
        if (!x) {
          if (!(y = "auto" === t.grid ? 0 : (t.grid || [1, A])[1])) {
            for (w = -A; w < (w = p[y++].getBoundingClientRect().left) && y < _;);
            y < _ && y--;
          }
          for (x = s[_] = [], u = o ? Math.min(y, _) * d - .5 : n % y, f = y === A ? 0 : o ? _ * c / y - .5 : n / y | 0, w = 0, b = A, v = 0; v < _; v++) h = v % y - u, g = f - (v / y | 0), x[v] = m = l ? Math.abs("y" === l ? g : h) : k(h * h + g * g), m > w && (w = m), m < b && (b = m);
          "random" === n && st(x), x.max = w - b, x.min = b, x.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (y > _ ? _ - 1 : l ? "y" === l ? _ / y : y : Math.max(y, _ / y)) || 0) * ("edges" === n ? -1 : 1), x.b = _ < 0 ? i - _ : i, x.u = et(t.amount || t.each) || 0, r = r && _ < 0 ? Lt(r) : r;
        }
        return _ = (x[e] - x.min) / x.max || 0, we(x.b + (r ? r(_) : _) * x.v) + x.u;
      };
    },
    ot = function ot(e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var n = we(Math.round(parseFloat(r) / e) * e * t);
        return (n - n % 1) / t + (I(r) ? 0 : et(r));
      };
    },
    lt = function lt(e, t) {
      var r,
        n,
        i = Y(e);
      return !i && B(e) && (r = i = e.radius || A, e.values ? (e = _nt(e.values), (n = !I(e[0])) && (r *= r)) : e = ot(e.increment)), Ke(t, i ? L(e) ? function (t) {
        return n = e(t), Math.abs(n - t) <= r ? n : t;
      } : function (t) {
        for (var i, s, a = parseFloat(n ? t.x : t), o = parseFloat(n ? t.y : 0), l = A, d = 0, c = e.length; c--;) (i = n ? (i = e[c].x - a) * i + (s = e[c].y - o) * s : Math.abs(e[c] - a)) < l && (l = i, d = c);
        return d = !r || l <= r ? e[d] : t, n || d === t || I(t) ? d : d + et(t);
      } : ot(e));
    },
    dt = function dt(e, t, r, n) {
      return Ke(Y(e) ? !t : !0 === r ? !!(r = 0) : !n, function () {
        return Y(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * n) / n;
      });
    },
    ct = function ct(e, t, r) {
      return Ke(r, function (r) {
        return e[~~t(r)];
      });
    },
    pt = function pt(e) {
      for (var t, r, n, i, s = 0, a = ""; ~(t = e.indexOf("random(", s));) n = e.indexOf(")", t), i = "[" === e.charAt(t + 7), r = e.substr(t + 7, n - t - 7).match(i ? X : V), a += e.substr(s, t - s) + dt(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), s = n + 1;
      return a + e.substr(s, e.length - s);
    },
    ut = function ut(e, t, r, n, i) {
      var s = t - e,
        a = n - r;
      return Ke(i, function (t) {
        return r + ((t - e) / s * a || 0);
      });
    },
    ft = function ft(e, t, r) {
      var n,
        i,
        s,
        a = e.labels,
        o = A;
      for (n in a) (i = a[n] - t) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n, o = i);
      return s;
    },
    ht = function ht(e, t, r) {
      var n,
        i,
        s,
        a = e.vars,
        l = a[t],
        d = o,
        c = e._ctx;
      if (l) return n = a[t + "Params"], i = a.callbackScope || e, r && ae.length && _e(), c && (o = c), s = n ? l.apply(i, n) : l.call(i), o = d, s;
    },
    gt = function gt(e) {
      return ze(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && ht(e, "onInterrupt"), e;
    },
    mt = [],
    vt = function vt(e) {
      if (e) if (e = !e.name && e["default"] || e, F() || e.headless) {
        var t = e.name,
          r = L(e),
          n = t && !r && e.init ? function () {
            this._props = [];
          } : e,
          i = {
            init: te,
            render: lr,
            add: qt,
            kill: cr,
            modifier: dr,
            rawVars: 0
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: ir,
            aliases: {},
            register: 0
          };
        if (Mt(), e !== n) {
          if (le[t]) return;
          Se(n, Se(Me(e, i), s)), Ee(n.prototype, Ee(i, Me(e, s))), le[n.prop = t] = n, e.targetTest && (pe.push(n), se[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
        }
        ee(t, n), e.register && e.register(Er, n, fr);
      } else mt.push(e);
    },
    wt = 255,
    bt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0]
    },
    yt = function yt(e, t, r) {
      return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * wt + .5 | 0;
    },
    _t = function _t(e, t, r) {
      var n,
        i,
        s,
        a,
        o,
        l,
        d,
        c,
        p,
        u,
        f = e ? I(e) ? [e >> 16, e >> 8 & wt, e & wt] : 0 : bt.black;
      if (!f) {
        if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), bt[e]) f = bt[e];else if ("#" === e.charAt(0)) {
          if (e.length < 6 && (n = e.charAt(1), i = e.charAt(2), s = e.charAt(3), e = "#" + n + n + i + i + s + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(f = parseInt(e.substr(1, 6), 16)) >> 16, f >> 8 & wt, f & wt, parseInt(e.substr(7), 16) / 255];
          f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & wt, e & wt];
        } else if ("hsl" === e.substr(0, 3)) {
          if (f = u = e.match(V), t) {
            if (~e.indexOf("=")) return f = e.match(H), r && f.length < 4 && (f[3] = 1), f;
          } else a = +f[0] % 360 / 360, o = +f[1] / 100, n = 2 * (l = +f[2] / 100) - (i = l <= .5 ? l * (o + 1) : l + o - l * o), f.length > 3 && (f[3] *= 1), f[0] = yt(a + 1 / 3, n, i), f[1] = yt(a, n, i), f[2] = yt(a - 1 / 3, n, i);
        } else f = e.match(V) || bt.transparent;
        f = f.map(Number);
      }
      return t && !u && (n = f[0] / wt, i = f[1] / wt, s = f[2] / wt, l = ((d = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2, d === c ? a = o = 0 : (p = d - c, o = l > .5 ? p / (2 - d - c) : p / (d + c), a = d === n ? (i - s) / p + (i < s ? 6 : 0) : d === i ? (s - n) / p + 2 : (n - i) / p + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * l + .5)), r && f.length < 4 && (f[3] = 1), f;
    },
    xt = function xt(e) {
      var t = [],
        r = [],
        n = -1;
      return e.split(At).forEach(function (e) {
        var i = e.match($) || [];
        t.push.apply(t, i), r.push(n += i.length + 1);
      }), t.c = r, t;
    },
    Tt = function Tt(e, t, r) {
      var n,
        i,
        s,
        a,
        o = "",
        l = (e + o).match(At),
        d = t ? "hsla(" : "rgba(",
        c = 0;
      if (!l) return e;
      if (l = l.map(function (e) {
        return (e = _t(e, t, 1)) && d + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
      }), r && (s = xt(e), (n = r.c).join(o) !== s.c.join(o))) for (a = (i = e.replace(At, "1").split($)).length - 1; c < a; c++) o += i[c] + (~n.indexOf(c) ? l.shift() || d + "0,0,0,0)" : (s.length ? s : l.length ? l : r).shift());
      if (!i) for (a = (i = e.split(At)).length - 1; c < a; c++) o += i[c] + l[c];
      return o + i[a];
    },
    At = function () {
      var e,
        t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in bt) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    }(),
    St = /hsl[a]?\(/,
    Et = function Et(e) {
      var t,
        r = e.join(" ");
      if (At.lastIndex = 0, At.test(r)) return t = St.test(r), e[1] = Tt(e[1], t), e[0] = Tt(e[0], t, xt(e[1])), !0;
    },
    Ct = function () {
      var e,
        t,
        r,
        n,
        i,
        s,
        a = Date.now,
        o = 500,
        l = 33,
        f = a(),
        h = f,
        m = 1e3 / 240,
        v = m,
        w = [],
        b = function r(d) {
          var c,
            p,
            u,
            g,
            b = a() - h,
            y = !0 === d;
          if ((b > o || b < 0) && (f += b - l), ((c = (u = (h += b) - f) - v) > 0 || y) && (g = ++n.frame, i = u - 1e3 * n.time, n.time = u /= 1e3, v += c + (c >= m ? 4 : m - c), p = 1), y || (e = t(r)), p) for (s = 0; s < w.length; s++) w[s](u, i, g, d);
        };
      return n = {
        time: 0,
        frame: 0,
        tick: function tick() {
          b(!0);
        },
        deltaRatio: function deltaRatio(e) {
          return i / (1e3 / (e || 60));
        },
        wake: function wake() {
          u && (!c && F() && (d = c = window, p = d.document || {}, U.gsap = Er, (d.gsapVersions || (d.gsapVersions = [])).push(Er.version), Z(Q || d.GreenSockGlobals || !d.gsap && d || {}), mt.forEach(vt)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && n.sleep(), t = r || function (e) {
            return setTimeout(e, v - 1e3 * n.time + 1 | 0);
          }, g = 1, b(2));
        },
        sleep: function sleep() {
          (r ? cancelAnimationFrame : clearTimeout)(e), g = 0, t = te;
        },
        lagSmoothing: function lagSmoothing(e, t) {
          o = e || 1 / 0, l = Math.min(t || 33, o);
        },
        fps: function fps(e) {
          m = 1e3 / (e || 240), v = 1e3 * n.time + m;
        },
        add: function add(e, t, r) {
          var i = t ? function (t, r, s, a) {
            e(t, r, s, a), n.remove(i);
          } : e;
          return n.remove(e), w[r ? "unshift" : "push"](i), Mt(), i;
        },
        remove: function remove(e, t) {
          ~(t = w.indexOf(e)) && w.splice(t, 1) && s >= t && s--;
        },
        _listeners: w
      };
    }(),
    Mt = function Mt() {
      return !g && Ct.wake();
    },
    kt = {},
    Pt = /^[\d.\-M][\d.\-,\s]/,
    Ot = /["']/g,
    zt = function zt(e) {
      for (var t, r, n, i = {}, s = e.substr(1, e.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++) r = s[o], t = o !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, t), i[a] = isNaN(n) ? n.replace(Ot, "").trim() : +n, a = r.substr(t + 1).trim();
      return i;
    },
    Lt = function Lt(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    It = function e(t, r) {
      for (var n, i = t._first; i;) i instanceof Vt ? e(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? e(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next;
    },
    Dt = function Dt(e, t) {
      return e && (L(e) ? e : kt[e] || function (e) {
        var t,
          r,
          n,
          i,
          s = (e + "").split("("),
          a = kt[s[0]];
        return a && s.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [zt(s[1])] : (t = e, r = t.indexOf("(") + 1, n = t.indexOf(")"), i = t.indexOf("(", r), t.substring(r, ~i && i < n ? t.indexOf(")", n + 1) : n)).split(",").map(Te)) : kt._CE && Pt.test(e) ? kt._CE("", e) : a;
      }(e)) || t;
    },
    Bt = function Bt(e, t, r, n) {
      void 0 === r && (r = function r(e) {
        return 1 - t(1 - e);
      }), void 0 === n && (n = function n(e) {
        return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
      });
      var i,
        s = {
          easeIn: t,
          easeOut: r,
          easeInOut: n
        };
      return me(e, function (e) {
        for (var t in kt[e] = U[e] = s, kt[i = e.toLowerCase()] = r, s) kt[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = kt[e + "." + t] = s[t];
      }), s;
    },
    Rt = function Rt(e) {
      return function (t) {
        return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
      };
    },
    Ft = function e(t, r, n) {
      var i = r >= 1 ? r : 1,
        s = (n || (t ? .3 : .45)) / (r < 1 ? r : 1),
        a = s / E * (Math.asin(1 / i) || 0),
        o = function o(e) {
          return 1 === e ? 1 : i * Math.pow(2, -10 * e) * O((e - a) * s) + 1;
        },
        l = "out" === t ? o : "in" === t ? function (e) {
          return 1 - o(1 - e);
        } : Rt(o);
      return s = E / s, l.config = function (r, n) {
        return e(t, r, n);
      }, l;
    },
    Gt = function e(t, r) {
      void 0 === r && (r = 1.70158);
      var n = function n(e) {
          return e ? --e * e * ((r + 1) * e + r) + 1 : 0;
        },
        i = "out" === t ? n : "in" === t ? function (e) {
          return 1 - n(1 - e);
        } : Rt(n);
      return i.config = function (r) {
        return e(t, r);
      }, i;
    };
  me("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var r = t < 5 ? t + 1 : t;
    Bt(e + ",Power" + (r - 1), t ? function (e) {
      return Math.pow(e, r);
    } : function (e) {
      return e;
    }, function (e) {
      return 1 - Math.pow(1 - e, r);
    }, function (e) {
      return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2;
    });
  }), kt.Linear.easeNone = kt.none = kt.Linear.easeIn, Bt("Elastic", Ft("in"), Ft("out"), Ft()), m = 7.5625, b = 2 * (w = 1 / (v = 2.75)), y = 2.5 * w, Bt("Bounce", function (e) {
    return 1 - _(1 - e);
  }, _ = function _(e) {
    return e < w ? m * e * e : e < b ? m * Math.pow(e - 1.5 / v, 2) + .75 : e < y ? m * (e -= 2.25 / v) * e + .9375 : m * Math.pow(e - 2.625 / v, 2) + .984375;
  }), Bt("Expo", function (e) {
    return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }), Bt("Circ", function (e) {
    return -(k(1 - e * e) - 1);
  }), Bt("Sine", function (e) {
    return 1 === e ? 1 : 1 - P(e * C);
  }), Bt("Back", Gt("in"), Gt("out"), Gt()), kt.SteppedEase = kt.steps = U.SteppedEase = {
    config: function config(e, t) {
      void 0 === e && (e = 1);
      var r = 1 / e,
        n = e + (t ? 0 : 1),
        i = t ? 1 : 0;
      return function (e) {
        return ((n * Je(0, .99999999, e) | 0) + i) * r;
      };
    }
  }, T.ease = kt["quad.out"], me("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
    return ue += e + "," + e + "Params,";
  });
  var Nt = function Nt(e, t) {
      this.id = M++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ge, this.set = t ? t.getSetter : ir;
    },
    Yt = function () {
      function e(e) {
        this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Xe(this, +e.duration, 1, 1), this.data = e.data, o && (this._ctx = o, o.data.push(this)), g || Ct.wake();
      }
      var t = e.prototype;
      return t.delay = function (e) {
        return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
      }, t.duration = function (e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
      }, t.totalDuration = function (e) {
        return arguments.length ? (this._dirty = 0, Xe(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }, t.totalTime = function (e, t) {
        if (Mt(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ne(this, e), !r._dp || r.parent || Ye(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ve(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === S || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), xe(this, e, t)), this;
      }, t.time = function (e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Be(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
      }, t.totalProgress = function (e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
      }, t.progress = function (e, t) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Be(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
      }, t.iteration = function (e, t) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Re(this._tTime, r) + 1 : 1;
      }, t.timeScale = function (e, t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === e) return this;
        var r = this.parent && this._ts ? Fe(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Je(-Math.abs(this._delay), this._tDur, r), !1 !== t), Ge(this), function (e) {
          for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
          return e;
        }(this);
      }, t.paused = function (e) {
        return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Mt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== S && (this._tTime -= S)))), this) : this._ps;
      }, t.startTime = function (e) {
        if (arguments.length) {
          this._start = e;
          var t = this.parent || this._dp;
          return t && (t._sort || !this.parent) && Ve(t, this, e - this._delay), this;
        }
        return this._start;
      }, t.endTime = function (e) {
        return this._start + (R(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }, t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fe(t.rawTime(e), this) : this._tTime : this._tTime;
      }, t.revert = function (e) {
        void 0 === e && (e = ie);
        var t = a;
        return a = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), a = t, this;
      }, t.globalTime = function (e) {
        for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : r;
      }, t.repeat = function (e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, We(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
      }, t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return this._rDelay = e, We(this), t ? this.time(t) : this;
        }
        return this._rDelay;
      }, t.yoyo = function (e) {
        return arguments.length ? (this._yoyo = e, this) : this._yoyo;
      }, t.seek = function (e, t) {
        return this.totalTime(Qe(this, e), R(t));
      }, t.restart = function (e, t) {
        return this.play().totalTime(e ? -this._delay : 0, R(t)), this._dur || (this._zTime = -1e-8), this;
      }, t.play = function (e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
      }, t.reverse = function (e, t) {
        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
      }, t.pause = function (e, t) {
        return null != e && this.seek(e, t), this.paused(!0);
      }, t.resume = function () {
        return this.paused(!1);
      }, t.reversed = function (e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0;
      }, t.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -1e-8, this;
      }, t.isActive = function () {
        var e,
          t = this.parent || this._dp,
          r = this._start;
        return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - S));
      }, t.eventCallback = function (e, t, r) {
        var n = this.vars;
        return arguments.length > 1 ? (t ? (n[e] = t, r && (n[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e];
      }, t.then = function (e) {
        var t = this;
        return new Promise(function (r) {
          var n = L(e) ? e : Ae,
            i = function i() {
              var e = t.then;
              t.then = null, L(n) && (n = n(t)) && (n.then || n === t) && (t.then = e), r(n), t.then = e;
            };
          t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i;
        });
      }, t.kill = function () {
        gt(this);
      }, e;
    }();
  Se(Yt.prototype, {
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
  var Vt = function (e) {
    function t(t, r) {
      var i;
      return void 0 === t && (t = {}), (i = e.call(this, t) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = R(t.sortChildren), l && Ve(t.parent || l, n(i), r), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && He(n(i), t.scrollTrigger), i;
    }
    i(t, e);
    var r = t.prototype;
    return r.to = function (e, t, r) {
      return Ze(0, arguments, this), this;
    }, r.from = function (e, t, r) {
      return Ze(1, arguments, this), this;
    }, r.fromTo = function (e, t, r, n) {
      return Ze(2, arguments, this), this;
    }, r.set = function (e, t, r) {
      return t.duration = 0, t.parent = this, ke(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Jt(e, t, Qe(this, r), 1), this;
    }, r.call = function (e, t, r) {
      return Ve(this, Jt.delayedCall(0, e, t), r);
    }, r.staggerTo = function (e, t, r, n, i, s, a) {
      return r.duration = t, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Jt(e, r, Qe(this, i)), this;
    }, r.staggerFrom = function (e, t, r, n, i, s, a) {
      return r.runBackwards = 1, ke(r).immediateRender = R(r.immediateRender), this.staggerTo(e, t, r, n, i, s, a);
    }, r.staggerFromTo = function (e, t, r, n, i, s, a, o) {
      return n.startAt = r, ke(n).immediateRender = R(n.immediateRender), this.staggerTo(e, t, n, i, s, a, o);
    }, r.render = function (e, t, r) {
      var n,
        i,
        s,
        o,
        d,
        c,
        p,
        u,
        f,
        h,
        g,
        m,
        v = this._time,
        w = this._dirty ? this.totalDuration() : this._tDur,
        b = this._dur,
        y = e <= 0 ? 0 : we(e),
        _ = this._zTime < 0 != e < 0 && (this._initted || !b);
      if (this !== l && y > w && e >= 0 && (y = w), y !== this._tTime || r || _) {
        if (v !== this._time && b && (y += this._time - v, e += this._time - v), n = y, f = this._start, c = !(u = this._ts), _ && (b || (v = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
          if (g = this._yoyo, d = b + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * d + e, t, r);
          if (n = we(y % d), y === w ? (o = this._repeat, n = b) : ((o = ~~(h = we(y / d))) && o === h && (n = b, o--), n > b && (n = b)), h = Re(this._tTime, d), !v && this._tTime && h !== o && this._tTime - h * d - this._dur <= 0 && (h = o), g && 1 & o && (n = b - n, m = 1), o !== h && !this._lock) {
            var x = g && 1 & h,
              T = x === (g && 1 & o);
            if (o < h && (x = !x), v = x ? 0 : y % b ? b : y, this._lock = 1, this.render(v || (m ? 0 : we(o * d)), t, !b)._lock = 0, this._tTime = y, !t && this.parent && ht(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (b = this._dur, w = this._tDur, T && (this._lock = 2, v = x ? b : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
            It(this, m);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (p = function (e, t, r) {
          var n;
          if (r > t) for (n = e._first; n && n._start <= r;) {
            if ("isPause" === n.data && n._start > t) return n;
            n = n._next;
          } else for (n = e._last; n && n._start >= r;) {
            if ("isPause" === n.data && n._start < t) return n;
            n = n._prev;
          }
        }(this, we(v), we(n)), p && (y -= n - (n = p._start))), this._tTime = y, this._time = n, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && n && !t && !o && (ht(this, "onStart"), this._tTime !== y)) return this;
        if (n >= v && e >= 0) for (i = this._first; i;) {
          if (s = i._next, (i._act || n >= i._start) && i._ts && p !== i) {
            if (i.parent !== this) return this.render(e, t, r);
            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, t, r), n !== this._time || !this._ts && !c) {
              p = 0, s && (y += this._zTime = -1e-8);
              break;
            }
          }
          i = s;
        } else {
          i = this._last;
          for (var A = e < 0 ? e : n; i;) {
            if (s = i._prev, (i._act || A <= i._end) && i._ts && p !== i) {
              if (i.parent !== this) return this.render(e, t, r);
              if (i.render(i._ts > 0 ? (A - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (A - i._start) * i._ts, t, r || a && (i._initted || i._startAt)), n !== this._time || !this._ts && !c) {
                p = 0, s && (y += this._zTime = A ? -1e-8 : S);
                break;
              }
            }
            i = s;
          }
        }
        if (p && !t && (this.pause(), p.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1, this._ts)) return this._start = f, Ge(this), this.render(e, t, r);
        this._onUpdate && !t && ht(this, "onUpdate", !0), (y === w && this._tTime >= this.totalDuration() || !y && v) && (f !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !b) && (y === w && this._ts > 0 || !y && this._ts < 0) && ze(this, 1), t || e < 0 && !v || !y && !v && w || (ht(this, y === w && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < w && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, r.add = function (e, t) {
      var r = this;
      if (I(t) || (t = Qe(this, t, e)), !(e instanceof Yt)) {
        if (Y(e)) return e.forEach(function (e) {
          return r.add(e, t);
        }), this;
        if (z(e)) return this.addLabel(e, t);
        if (!L(e)) return this;
        e = Jt.delayedCall(0, e);
      }
      return this !== e ? Ve(this, e, t) : this;
    }, r.getChildren = function (e, t, r, n) {
      void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = -A);
      for (var i = [], s = this._first; s;) s._start >= n && (s instanceof Jt ? t && i.push(s) : (r && i.push(s), e && i.push.apply(i, s.getChildren(!0, t, r)))), s = s._next;
      return i;
    }, r.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), r = t.length; r--;) if (t[r].vars.id === e) return t[r];
    }, r.remove = function (e) {
      return z(e) ? this.removeLabel(e) : L(e) ? this.killTweensOf(e) : (e.parent === this && Oe(this, e), e === this._recent && (this._recent = this._last), Le(this));
    }, r.totalTime = function (t, r) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = we(Ct.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime;
    }, r.addLabel = function (e, t) {
      return this.labels[e] = Qe(this, t), this;
    }, r.removeLabel = function (e) {
      return delete this.labels[e], this;
    }, r.addPause = function (e, t, r) {
      var n = Jt.delayedCall(0, t || te, r);
      return n.data = "isPause", this._hasPause = 1, Ve(this, n, Qe(this, e));
    }, r.removePause = function (e) {
      var t = this._first;
      for (e = Qe(this, e); t;) t._start === e && "isPause" === t.data && ze(t), t = t._next;
    }, r.killTweensOf = function (e, t, r) {
      for (var n = this.getTweensOf(e, r), i = n.length; i--;) Ht !== n[i] && n[i].kill(e, t);
      return this;
    }, r.getTweensOf = function (e, t) {
      for (var r, n = [], i = _nt(e), s = this._first, a = I(t); s;) s instanceof Jt ? ye(s._targets, i) && (a ? (!Ht || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, t)).length && n.push.apply(n, r), s = s._next;
      return n;
    }, r.tweenTo = function (e, t) {
      t = t || {};
      var r,
        n = this,
        i = Qe(n, e),
        s = t,
        a = s.startAt,
        o = s.onStart,
        l = s.onStartParams,
        d = s.immediateRender,
        c = Jt.to(n, Se({
          ease: t.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: i,
          overwrite: "auto",
          duration: t.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || S,
          onStart: function onStart() {
            if (n.pause(), !r) {
              var e = t.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
              c._dur !== e && Xe(c, e, 0, 1).render(c._time, !0, !0), r = 1;
            }
            o && o.apply(c, l || []);
          }
        }, t));
      return d ? c.render(0) : c;
    }, r.tweenFromTo = function (e, t, r) {
      return this.tweenTo(t, Se({
        startAt: {
          time: Qe(this, e)
        }
      }, r));
    }, r.recent = function () {
      return this._recent;
    }, r.nextLabel = function (e) {
      return void 0 === e && (e = this._time), ft(this, Qe(this, e));
    }, r.previousLabel = function (e) {
      return void 0 === e && (e = this._time), ft(this, Qe(this, e), 1);
    }, r.currentLabel = function (e) {
      return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + S);
    }, r.shiftChildren = function (e, t, r) {
      void 0 === r && (r = 0);
      for (var n, i = this._first, s = this.labels; i;) i._start >= r && (i._start += e, i._end += e), i = i._next;
      if (t) for (n in s) s[n] >= r && (s[n] += e);
      return Le(this);
    }, r.invalidate = function (t) {
      var r = this._first;
      for (this._lock = 0; r;) r.invalidate(t), r = r._next;
      return e.prototype.invalidate.call(this, t);
    }, r.clear = function (e) {
      void 0 === e && (e = !0);
      for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
      return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Le(this);
    }, r.totalDuration = function (e) {
      var t,
        r,
        n,
        i = 0,
        s = this,
        a = s._last,
        o = A;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
      if (s._dirty) {
        for (n = s.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Ve(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (i -= r, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), o = 0), a._end > i && a._ts && (i = a._end), a = t;
        Xe(s, s === l && s._time > i ? s._time : i, 1, 1), s._dirty = 0;
      }
      return s._tDur;
    }, t.updateRoot = function (e) {
      if (l._ts && (xe(l, Fe(e, l)), f = Ct.frame), Ct.frame >= ce) {
        ce += x.autoSleep || 120;
        var t = l._first;
        if ((!t || !t._ts) && x.autoSleep && Ct._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || Ct.sleep();
        }
      }
    }, t;
  }(Yt);
  Se(Vt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var Ht,
    $t,
    jt = function jt(e, t, r, n, i, s, a) {
      var o,
        l,
        d,
        c,
        p,
        u,
        f,
        h,
        g = new fr(this._pt, e, t, 0, 1, or, null, i),
        m = 0,
        v = 0;
      for (g.b = r, g.e = n, r += "", (f = ~(n += "").indexOf("random(")) && (n = pt(n)), s && (s(h = [r, n], e, t), r = h[0], n = h[1]), l = r.match(j) || []; o = j.exec(n);) c = o[0], p = n.substring(m, o.index), d ? d = (d + 1) % 5 : "rgba(" === p.substr(-5) && (d = 1), c !== l[v++] && (u = parseFloat(l[v - 1]) || 0, g._pt = {
        _next: g._pt,
        p: p || 1 === v ? p : ",",
        s: u,
        c: "=" === c.charAt(1) ? be(u, c) - u : parseFloat(c) - u,
        m: d && d < 4 ? Math.round : 0
      }, m = j.lastIndex);
      return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = a, (q.test(n) || f) && (g.e = 0), this._pt = g, g;
    },
    qt = function qt(e, t, r, n, i, s, a, o, l, d) {
      L(n) && (n = n(i || 0, e, s));
      var c,
        p = e[t],
        u = "get" !== r ? r : L(p) ? l ? e[t.indexOf("set") || !L(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : p,
        f = L(p) ? l ? rr : tr : er;
      if (z(n) && (~n.indexOf("random(") && (n = pt(n)), "=" === n.charAt(1) && ((c = be(u, n) + (et(u) || 0)) || 0 === c) && (n = c)), !d || u !== n || $t) return isNaN(u * n) || "" === n ? (!p && !(t in e) && K(t, n), jt.call(this, e, t, u, n, f, o || x.stringFilter, l)) : (c = new fr(this._pt, e, t, +u || 0, n - (u || 0), "boolean" == typeof p ? ar : sr, 0, f), l && (c.fp = l), a && c.modifier(a, this, e), this._pt = c);
    },
    Xt = function Xt(e, t, r, n, i, s) {
      var a, o, l, d;
      if (le[e] && !1 !== (a = new le[e]()).init(i, a.rawVars ? t[e] : function (e, t, r, n, i) {
        if (L(e) && (e = Qt(e, i, t, r, n)), !B(e) || e.style && e.nodeType || Y(e) || N(e)) return z(e) ? Qt(e, i, t, r, n) : e;
        var s,
          a = {};
        for (s in e) a[s] = Qt(e[s], i, t, r, n);
        return a;
      }(t[e], n, i, s, r), r, n, s) && (r._pt = o = new fr(r._pt, i, e, 0, 1, a.render, a, 0, a.priority), r !== h)) for (l = r._ptLookup[r._targets.indexOf(i)], d = a._props.length; d--;) l[a._props[d]] = o;
      return a;
    },
    Wt = function e(t, r, n) {
      var i,
        o,
        d,
        c,
        p,
        u,
        f,
        h,
        g,
        m,
        v,
        w,
        b,
        y = t.vars,
        _ = y.ease,
        x = y.startAt,
        E = y.immediateRender,
        C = y.lazy,
        M = y.onUpdate,
        k = y.runBackwards,
        P = y.yoyoEase,
        O = y.keyframes,
        z = y.autoRevert,
        L = t._dur,
        I = t._startAt,
        D = t._targets,
        B = t.parent,
        F = B && "nested" === B.data ? B.vars.targets : D,
        G = "auto" === t._overwrite && !s,
        N = t.timeline;
      if (N && (!O || !_) && (_ = "none"), t._ease = Dt(_, T.ease), t._yEase = P ? Lt(Dt(!0 === P ? _ : P, T.ease)) : 0, P && t._yoyo && !t._repeat && (P = t._yEase, t._yEase = t._ease, t._ease = P), t._from = !N && !!y.runBackwards, !N || O && !y.stagger) {
        if (w = (h = D[0] ? he(D[0]).harness : 0) && y[h.prop], i = Me(y, se), I && (I._zTime < 0 && I.progress(1), r < 0 && k && E && !z ? I.render(-1, !0) : I.revert(k && L ? ne : re), I._lazy = 0), x) {
          if (ze(t._startAt = Jt.set(D, Se({
            data: "isStart",
            overwrite: !1,
            parent: B,
            immediateRender: !0,
            lazy: !I && R(C),
            startAt: null,
            delay: 0,
            onUpdate: M && function () {
              return ht(t, "onUpdate");
            },
            stagger: 0
          }, x))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (a || !E && !z) && t._startAt.revert(ne), E && L && r <= 0 && n <= 0) return void (r && (t._zTime = r));
        } else if (k && L && !I) if (r && (E = !1), d = Se({
          overwrite: !1,
          data: "isFromStart",
          lazy: E && !I && R(C),
          immediateRender: E,
          stagger: 0,
          parent: B
        }, i), w && (d[h.prop] = w), ze(t._startAt = Jt.set(D, d)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (a ? t._startAt.revert(ne) : t._startAt.render(-1, !0)), t._zTime = r, E) {
          if (!r) return;
        } else e(t._startAt, S, S);
        for (t._pt = t._ptCache = 0, C = L && R(C) || C && !L, o = 0; o < D.length; o++) {
          if (f = (p = D[o])._gsap || fe(D)[o]._gsap, t._ptLookup[o] = m = {}, oe[f.id] && ae.length && _e(), v = F === D ? o : F.indexOf(p), h && !1 !== (g = new h()).init(p, w || i, t, v, F) && (t._pt = c = new fr(t._pt, p, g.name, 0, 1, g.render, g, 0, g.priority), g._props.forEach(function (e) {
            m[e] = c;
          }), g.priority && (u = 1)), !h || w) for (d in i) le[d] && (g = Xt(d, i, t, v, p, F)) ? g.priority && (u = 1) : m[d] = c = qt.call(t, p, d, "get", i[d], v, F, 0, y.stringFilter);
          t._op && t._op[o] && t.kill(p, t._op[o]), G && t._pt && (Ht = t, l.killTweensOf(p, m, t.globalTime(r)), b = !t.parent, Ht = 0), t._pt && C && (oe[f.id] = 1);
        }
        u && ur(t), t._onInit && t._onInit(t);
      }
      t._onUpdate = M, t._initted = (!t._op || t._pt) && !b, O && r <= 0 && N.render(A, !0, !0);
    },
    Ut = function Ut(e, t, r, n) {
      var i,
        s,
        a = t.ease || n || "power1.inOut";
      if (Y(t)) s = r[e] || (r[e] = []), t.forEach(function (e, r) {
        return s.push({
          t: r / (t.length - 1) * 100,
          v: e,
          e: a
        });
      });else for (i in t) s = r[i] || (r[i] = []), "ease" === i || s.push({
        t: parseFloat(e),
        v: t[i],
        e: a
      });
    },
    Qt = function Qt(e, t, r, n, i) {
      return L(e) ? e.call(t, r, n, i) : z(e) && ~e.indexOf("random(") ? pt(e) : e;
    },
    Zt = ue + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Kt = {};
  me(Zt + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return Kt[e] = 1;
  });
  var Jt = function (e) {
    function t(t, r, i, a) {
      var o;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var d,
        c,
        p,
        u,
        f,
        h,
        g,
        m,
        v = (o = e.call(this, a ? r : ke(r)) || this).vars,
        w = v.duration,
        b = v.delay,
        y = v.immediateRender,
        _ = v.stagger,
        T = v.overwrite,
        A = v.keyframes,
        S = v.defaults,
        E = v.scrollTrigger,
        C = v.yoyoEase,
        M = r.parent || l,
        k = (Y(t) || N(t) ? I(t[0]) : "length" in r) ? [t] : _nt(t);
      if (o._targets = k.length ? fe(k) : J("GSAP target " + t + " not found. https://gsap.com", !x.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = T, A || _ || G(w) || G(b)) {
        if (r = o.vars, (d = o.timeline = new Vt({
          data: "nested",
          defaults: S || {},
          targets: M && "nested" === M.data ? M.vars.targets : k
        })).kill(), d.parent = d._dp = n(o), d._start = 0, _ || G(w) || G(b)) {
          if (u = k.length, g = _ && at(_), B(_)) for (f in _) ~Zt.indexOf(f) && (m || (m = {}), m[f] = _[f]);
          for (c = 0; c < u; c++) (p = Me(r, Kt)).stagger = 0, C && (p.yoyoEase = C), m && Ee(p, m), h = k[c], p.duration = +Qt(w, n(o), c, h, k), p.delay = (+Qt(b, n(o), c, h, k) || 0) - o._delay, !_ && 1 === u && p.delay && (o._delay = b = p.delay, o._start += b, p.delay = 0), d.to(h, p, g ? g(c, h, k) : 0), d._ease = kt.none;
          d.duration() ? w = b = 0 : o.timeline = 0;
        } else if (A) {
          ke(Se(d.vars.defaults, {
            ease: "none"
          })), d._ease = Dt(A.ease || r.ease || "none");
          var P,
            O,
            z,
            L = 0;
          if (Y(A)) A.forEach(function (e) {
            return d.to(k, e, ">");
          }), d.duration();else {
            for (f in p = {}, A) "ease" === f || "easeEach" === f || Ut(f, A[f], p, A.easeEach);
            for (f in p) for (P = p[f].sort(function (e, t) {
              return e.t - t.t;
            }), L = 0, c = 0; c < P.length; c++) (z = {
              ease: (O = P[c]).e,
              duration: (O.t - (c ? P[c - 1].t : 0)) / 100 * w
            })[f] = O.v, d.to(k, z, L), L += z.duration;
            d.duration() < w && d.to({}, {
              duration: w - d.duration()
            });
          }
        }
        w || o.duration(w = d.duration());
      } else o.timeline = 0;
      return !0 !== T || s || (Ht = n(o), l.killTweensOf(k), Ht = 0), Ve(M, n(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), (y || !w && !A && o._start === we(M._time) && R(y) && De(n(o)) && "nested" !== M.data) && (o._tTime = -1e-8, o.render(Math.max(0, -b) || 0)), E && He(n(o), E), o;
    }
    i(t, e);
    var r = t.prototype;
    return r.render = function (e, t, r) {
      var n,
        i,
        s,
        o,
        l,
        d,
        c,
        p,
        u,
        f = this._time,
        h = this._tDur,
        g = this._dur,
        m = e < 0,
        v = e > h - S && !m ? h : e < S ? 0 : e;
      if (g) {
        if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
          if (n = v, p = this.timeline, this._repeat) {
            if (o = g + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + e, t, r);
            if (n = we(v % o), v === h ? (s = this._repeat, n = g) : (s = ~~(l = we(v / o))) && s === l ? (n = g, s--) : n > g && (n = g), (d = this._yoyo && 1 & s) && (u = this._yEase, n = g - n), l = Re(this._tTime, o), n === f && !r && this._initted && s === l) return this._tTime = v, this;
            s !== l && (p && this._yEase && It(p, d), this.vars.repeatRefresh && !d && !this._lock && n !== o && this._initted && (this._lock = r = 1, this.render(we(o * s), !0).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if ($e(this, m ? e : n, r, t, v)) return this._tTime = 0, this;
            if (!(f === this._time || r && this.vars.repeatRefresh && s !== l)) return this;
            if (g !== this._dur) return this.render(e, t, r);
          }
          if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (u || this._ease)(n / g), this._from && (this.ratio = c = 1 - c), n && !f && !t && !s && (ht(this, "onStart"), this._tTime !== v)) return this;
          for (i = this._pt; i;) i.r(c, i.d), i = i._next;
          p && p.render(e < 0 ? e : p._dur * p._ease(n / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && Ie(this, e, 0, r), ht(this, "onUpdate")), this._repeat && s !== l && this.vars.onRepeat && !t && this.parent && ht(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && Ie(this, e, 0, !0), (e || !g) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && ze(this, 1), t || m && !f || !(v || f || d) || (ht(this, v === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < h && this.timeScale() > 0) && this._prom()));
        }
      } else !function (e, t, r, n) {
        var i,
          s,
          o,
          l = e.ratio,
          d = t < 0 || !t && (!e._start && je(e) && (e._initted || !qe(e)) || (e._ts < 0 || e._dp._ts < 0) && !qe(e)) ? 0 : 1,
          c = e._rDelay,
          p = 0;
        if (c && e._repeat && (p = Je(0, e._tDur, t), s = Re(p, c), e._yoyo && 1 & s && (d = 1 - d), s !== Re(e._tTime, c) && (l = 1 - d, e.vars.repeatRefresh && e._initted && e.invalidate())), d !== l || a || n || e._zTime === S || !t && e._zTime) {
          if (!e._initted && $e(e, t, n, r, p)) return;
          for (o = e._zTime, e._zTime = t || (r ? S : 0), r || (r = t && !o), e.ratio = d, e._from && (d = 1 - d), e._time = 0, e._tTime = p, i = e._pt; i;) i.r(d, i.d), i = i._next;
          t < 0 && Ie(e, t, 0, !0), e._onUpdate && !r && ht(e, "onUpdate"), p && e._repeat && !r && e.parent && ht(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === d && (d && ze(e, 1), r || a || (ht(e, d ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
        } else e._zTime || (e._zTime = t);
      }(this, e, t, r);
      return this;
    }, r.targets = function () {
      return this._targets;
    }, r.invalidate = function (t) {
      return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t);
    }, r.resetTo = function (e, t, r, n, i) {
      g || Ct.wake(), this._ts || this.play();
      var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Wt(this, s), function (e, t, r, n, i, s, a, o) {
        var l,
          d,
          c,
          p,
          u = (e._pt && e._ptCache || (e._ptCache = {}))[t];
        if (!u) for (u = e._ptCache[t] = [], c = e._ptLookup, p = e._targets.length; p--;) {
          if ((l = c[p][t]) && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
          if (!l) return $t = 1, e.vars[t] = "+=0", Wt(e, a), $t = 0, o ? J(t + " not eligible for reset") : 1;
          u.push(l);
        }
        for (p = u.length; p--;) (l = (d = u[p])._pt || d).s = !n && 0 !== n || i ? l.s + (n || 0) + s * l.c : n, l.c = r - l.s, d.e && (d.e = ve(r) + et(d.e)), d.b && (d.b = l.s + et(d.b));
      }(this, e, t, r, n, this._ease(s / this._dur), s, i) ? this.resetTo(e, t, r, n, 1) : (Ne(this, 0), this.parent || Pe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, r.kill = function (e, t) {
      if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? gt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!a), this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(e, t, Ht && !0 !== Ht.vars.overwrite)._first || gt(this), this.parent && r !== this.timeline.totalDuration() && Xe(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }
      var n,
        i,
        s,
        o,
        l,
        d,
        c,
        p = this._targets,
        u = e ? _nt(e) : p,
        f = this._ptLookup,
        h = this._pt;
      if ((!t || "all" === t) && function (e, t) {
        for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
        return r < 0;
      }(p, u)) return "all" === t && (this._pt = 0), gt(this);
      for (n = this._op = this._op || [], "all" !== t && (z(t) && (l = {}, me(t, function (e) {
        return l[e] = 1;
      }), t = l), t = function (e, t) {
        var r,
          n,
          i,
          s,
          a = e[0] ? he(e[0]).harness : 0,
          o = a && a.aliases;
        if (!o) return t;
        for (n in r = Ee({}, t), o) if (n in r) for (i = (s = o[n].split(",")).length; i--;) r[s[i]] = r[n];
        return r;
      }(p, t)), c = p.length; c--;) if (~u.indexOf(p[c])) for (l in i = f[c], "all" === t ? (n[c] = t, o = i, s = {}) : (s = n[c] = n[c] || {}, o = t), o) (d = i && i[l]) && ("kill" in d.d && !0 !== d.d.kill(l) || Oe(this, d, "_pt"), delete i[l]), "all" !== s && (s[l] = 1);
      return this._initted && !this._pt && h && gt(this), this;
    }, t.to = function (e, r) {
      return new t(e, r, arguments[2]);
    }, t.from = function (e, t) {
      return Ze(1, arguments);
    }, t.delayedCall = function (e, r, n, i) {
      return new t(r, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: n,
        onReverseCompleteParams: n,
        callbackScope: i
      });
    }, t.fromTo = function (e, t, r) {
      return Ze(2, arguments);
    }, t.set = function (e, r) {
      return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r);
    }, t.killTweensOf = function (e, t, r) {
      return l.killTweensOf(e, t, r);
    }, t;
  }(Yt);
  Se(Jt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), me("staggerTo,staggerFrom,staggerFromTo", function (e) {
    Jt[e] = function () {
      var t = new Vt(),
        r = tt.call(arguments, 0);
      return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r);
    };
  });
  var er = function er(e, t, r) {
      return e[t] = r;
    },
    tr = function tr(e, t, r) {
      return e[t](r);
    },
    rr = function rr(e, t, r, n) {
      return e[t](n.fp, r);
    },
    nr = function nr(e, t, r) {
      return e.setAttribute(t, r);
    },
    ir = function ir(e, t) {
      return L(e[t]) ? tr : D(e[t]) && e.setAttribute ? nr : er;
    },
    sr = function sr(e, t) {
      return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
    },
    ar = function ar(e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    or = function or(e, t) {
      var r = t._pt,
        n = "";
      if (!e && t.b) n = t.b;else if (1 === e && t.e) n = t.e;else {
        for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + n, r = r._next;
        n += t.c;
      }
      t.set(t.t, t.p, n, t);
    },
    lr = function lr(e, t) {
      for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
    },
    dr = function dr(e, t, r, n) {
      for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(e, t, r), s = i;
    },
    cr = function cr(e) {
      for (var t, r, n = this._pt; n;) r = n._next, n.p === e && !n.op || n.op === e ? Oe(this, n, "_pt") : n.dep || (t = 1), n = r;
      return !t;
    },
    pr = function pr(e, t, r, n) {
      n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
    },
    ur = function ur(e) {
      for (var t, r, n, i, s = e._pt; s;) {
        for (t = s._next, r = n; r && r.pr > s.pr;) r = r._next;
        (s._prev = r ? r._prev : i) ? s._prev._next = s : n = s, (s._next = r) ? r._prev = s : i = s, s = t;
      }
      e._pt = n;
    },
    fr = function () {
      function e(e, t, r, n, i, s, a, o, l) {
        this.t = t, this.s = n, this.c = i, this.p = r, this.r = s || sr, this.d = a || this, this.set = o || er, this.pr = l || 0, this._next = e, e && (e._prev = this);
      }
      return e.prototype.modifier = function (e, t, r) {
        this.mSet = this.mSet || this.set, this.set = pr, this.m = e, this.mt = r, this.tween = t;
      }, e;
    }();
  me(ue + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (e) {
    return se[e] = 1;
  }), U.TweenMax = U.TweenLite = Jt, U.TimelineLite = U.TimelineMax = Vt, l = new Vt({
    sortChildren: !1,
    defaults: T,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), x.stringFilter = Et;
  var hr = [],
    gr = {},
    mr = [],
    vr = 0,
    wr = 0,
    br = function br(e) {
      return (gr[e] || mr).map(function (e) {
        return e();
      });
    },
    yr = function yr() {
      var e = Date.now(),
        t = [];
      e - vr > 2 && (br("matchMediaInit"), hr.forEach(function (e) {
        var r,
          n,
          i,
          s,
          a = e.queries,
          o = e.conditions;
        for (n in a) (r = d.matchMedia(a[n]).matches) && (i = 1), r !== o[n] && (o[n] = r, s = 1);
        s && (e.revert(), i && t.push(e));
      }), br("matchMediaRevert"), t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }), vr = e, br("matchMedia"));
    },
    _r = function () {
      function e(e, t) {
        this.selector = t && it(t), this.data = [], this._r = [], this.isReverted = !1, this.id = wr++, e && this.add(e);
      }
      var t = e.prototype;
      return t.add = function (e, t, r) {
        L(e) && (r = t, t = e, e = L);
        var n = this,
          i = function i() {
            var e,
              i = o,
              s = n.selector;
            return i && i !== n && i.data.push(n), r && (n.selector = it(r)), o = n, e = t.apply(n, arguments), L(e) && n._r.push(e), o = i, n.selector = s, n.isReverted = !1, e;
          };
        return n.last = i, e === L ? i(n, function (e) {
          return n.add(null, e);
        }) : e ? n[e] = i : i;
      }, t.ignore = function (e) {
        var t = o;
        o = null, e(this), o = t;
      }, t.getTweens = function () {
        var t = [];
        return this.data.forEach(function (r) {
          return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof Jt && !(r.parent && "nested" === r.parent.data) && t.push(r);
        }), t;
      }, t.clear = function () {
        this._r.length = this.data.length = 0;
      }, t.kill = function (e, t) {
        var r = this;
        if (e ? function () {
          for (var t, n = r.getTweens(), i = r.data.length; i--;) "isFlip" === (t = r.data[i]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function (e) {
            return n.splice(n.indexOf(e), 1);
          }));
          for (n.map(function (e) {
            return {
              g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
              t: e
            };
          }).sort(function (e, t) {
            return t.g - e.g || -1 / 0;
          }).forEach(function (t) {
            return t.t.revert(e);
          }), i = r.data.length; i--;) (t = r.data[i]) instanceof Vt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Jt) && t.revert && t.revert(e);
          r._r.forEach(function (t) {
            return t(e, r);
          }), r.isReverted = !0;
        }() : this.data.forEach(function (e) {
          return e.kill && e.kill();
        }), this.clear(), t) for (var n = hr.length; n--;) hr[n].id === this.id && hr.splice(n, 1);
      }, t.revert = function (e) {
        this.kill(e || {});
      }, e;
    }(),
    xr = function () {
      function e(e) {
        this.contexts = [], this.scope = e, o && o.data.push(this);
      }
      var t = e.prototype;
      return t.add = function (e, t, r) {
        B(e) || (e = {
          matches: e
        });
        var n,
          i,
          s,
          a = new _r(0, r || this.scope),
          l = a.conditions = {};
        for (i in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === i ? s = 1 : (n = d.matchMedia(e[i])) && (hr.indexOf(a) < 0 && hr.push(a), (l[i] = n.matches) && (s = 1), n.addListener ? n.addListener(yr) : n.addEventListener("change", yr));
        return s && t(a, function (e) {
          return a.add(null, e);
        }), this;
      }, t.revert = function (e) {
        this.kill(e || {});
      }, t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }, e;
    }(),
    Tr = {
      registerPlugin: function registerPlugin() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        t.forEach(function (e) {
          return vt(e);
        });
      },
      timeline: function timeline(e) {
        return new Vt(e);
      },
      getTweensOf: function getTweensOf(e, t) {
        return l.getTweensOf(e, t);
      },
      getProperty: function getProperty(e, t, r, n) {
        z(e) && (e = _nt(e)[0]);
        var i = he(e || {}).get,
          s = r ? Ae : Te;
        return "native" === r && (r = ""), e ? t ? s((le[t] && le[t].get || i)(e, t, r, n)) : function (t, r, n) {
          return s((le[t] && le[t].get || i)(e, t, r, n));
        } : e;
      },
      quickSetter: function quickSetter(e, t, r) {
        if ((e = _nt(e)).length > 1) {
          var n = e.map(function (e) {
              return Er.quickSetter(e, t, r);
            }),
            i = n.length;
          return function (e) {
            for (var t = i; t--;) n[t](e);
          };
        }
        e = e[0] || {};
        var s = le[t],
          a = he(e),
          o = a.harness && (a.harness.aliases || {})[t] || t,
          l = s ? function (t) {
            var n = new s();
            h._pt = 0, n.init(e, r ? t + r : t, h, 0, [e]), n.render(1, n), h._pt && lr(1, h);
          } : a.set(e, o);
        return s ? l : function (t) {
          return l(e, o, r ? t + r : t, a, 1);
        };
      },
      quickTo: function quickTo(e, t, r) {
        var n,
          i = Er.to(e, Se(((n = {})[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
          s = function s(e, r, n) {
            return i.resetTo(t, e, r, n);
          };
        return s.tween = i, s;
      },
      isTweening: function isTweening(e) {
        return l.getTweensOf(e, !0).length > 0;
      },
      defaults: function defaults(e) {
        return e && e.ease && (e.ease = Dt(e.ease, T.ease)), Ce(T, e || {});
      },
      config: function config(e) {
        return Ce(x, e || {});
      },
      registerEffect: function registerEffect(e) {
        var t = e.name,
          r = e.effect,
          n = e.plugins,
          i = e.defaults,
          s = e.extendTimeline;
        (n || "").split(",").forEach(function (e) {
          return e && !le[e] && !U[e] && J(t + " effect requires " + e + " plugin.");
        }), de[t] = function (e, t, n) {
          return r(_nt(e), Se(t || {}, i), n);
        }, s && (Vt.prototype[t] = function (e, r, n) {
          return this.add(de[t](e, B(r) ? r : (n = r) && {}, this), n);
        });
      },
      registerEase: function registerEase(e, t) {
        kt[e] = Dt(t);
      },
      parseEase: function parseEase(e, t) {
        return arguments.length ? Dt(e, t) : kt;
      },
      getById: function getById(e) {
        return l.getById(e);
      },
      exportRoot: function exportRoot(e, t) {
        void 0 === e && (e = {});
        var r,
          n,
          i = new Vt(e);
        for (i.smoothChildTiming = R(e.smoothChildTiming), l.remove(i), i._dp = 0, i._time = i._tTime = l._time, r = l._first; r;) n = r._next, !t && !r._dur && r instanceof Jt && r.vars.onComplete === r._targets[0] || Ve(i, r, r._start - r._delay), r = n;
        return Ve(l, i, 0), i;
      },
      context: function context(e, t) {
        return e ? new _r(e, t) : o;
      },
      matchMedia: function matchMedia(e) {
        return new xr(e);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return hr.forEach(function (e) {
          var t,
            r,
            n = e.conditions;
          for (r in n) n[r] && (n[r] = !1, t = 1);
          t && e.revert();
        }) || yr();
      },
      addEventListener: function addEventListener(e, t) {
        var r = gr[e] || (gr[e] = []);
        ~r.indexOf(t) || r.push(t);
      },
      removeEventListener: function removeEventListener(e, t) {
        var r = gr[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1);
      },
      utils: {
        wrap: function e(t, r, n) {
          var i = r - t;
          return Y(t) ? ct(t, e(0, t.length), r) : Ke(n, function (e) {
            return (i + (e - t) % i) % i + t;
          });
        },
        wrapYoyo: function e(t, r, n) {
          var i = r - t,
            s = 2 * i;
          return Y(t) ? ct(t, e(0, t.length - 1), r) : Ke(n, function (e) {
            return t + ((e = (s + (e - t) % s) % s || 0) > i ? s - e : e);
          });
        },
        distribute: at,
        random: dt,
        snap: lt,
        normalize: function normalize(e, t, r) {
          return ut(e, t, 0, 1, r);
        },
        getUnit: et,
        clamp: function clamp(e, t, r) {
          return Ke(r, function (r) {
            return Je(e, t, r);
          });
        },
        splitColor: _t,
        toArray: _nt,
        selector: it,
        mapRange: ut,
        pipe: function pipe() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function unitize(e, t) {
          return function (r) {
            return e(parseFloat(r)) + (t || et(r));
          };
        },
        interpolate: function e(t, r, n, i) {
          var s = isNaN(t + r) ? 0 : function (e) {
            return (1 - e) * t + e * r;
          };
          if (!s) {
            var a,
              o,
              l,
              d,
              c,
              p = z(t),
              u = {};
            if (!0 === n && (i = 1) && (n = null), p) t = {
              p: t
            }, r = {
              p: r
            };else if (Y(t) && !Y(r)) {
              for (l = [], d = t.length, c = d - 2, o = 1; o < d; o++) l.push(e(t[o - 1], t[o]));
              d--, s = function s(e) {
                e *= d;
                var t = Math.min(c, ~~e);
                return l[t](e - t);
              }, n = r;
            } else i || (t = Ee(Y(t) ? [] : {}, t));
            if (!l) {
              for (a in r) qt.call(u, t, a, "get", r[a]);
              s = function s(e) {
                return lr(e, u) || (p ? t.p : t);
              };
            }
          }
          return Ke(n, s);
        },
        shuffle: st
      },
      install: Z,
      effects: de,
      ticker: Ct,
      updateRoot: Vt.updateRoot,
      plugins: le,
      globalTimeline: l,
      core: {
        PropTween: fr,
        globals: ee,
        Tween: Jt,
        Timeline: Vt,
        Animation: Yt,
        getCache: he,
        _removeLinkedListItem: Oe,
        reverting: function reverting() {
          return a;
        },
        context: function context(e) {
          return e && o && (o.data.push(e), e._ctx = o), o;
        },
        suppressOverwrites: function suppressOverwrites(e) {
          return s = e;
        }
      }
    };
  me("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return Tr[e] = Jt[e];
  }), Ct.add(Vt.updateRoot), h = Tr.to({}, {
    duration: 0
  });
  var Ar = function Ar(e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
      return r;
    },
    Sr = function Sr(e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function init(e, r, n) {
          n._onInit = function (e) {
            var n, i;
            if (z(r) && (n = {}, me(r, function (e) {
              return n[e] = 1;
            }), r = n), t) {
              for (i in n = {}, r) n[i] = t(r[i]);
              r = n;
            }
            !function (e, t) {
              var r,
                n,
                i,
                s = e._targets;
              for (r in t) for (n = s.length; n--;) (i = e._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Ar(i, r)), i && i.modifier && i.modifier(t[r], e, s[n], r));
            }(e, r);
          };
        }
      };
    },
    Er = Tr.registerPlugin({
      name: "attr",
      init: function init(e, t, r, n, i) {
        var s, a, o;
        for (s in this.tween = r, t) o = e.getAttribute(s) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[s], n, i, 0, 0, s)).op = s, a.b = o, this._props.push(s);
      },
      render: function render(e, t) {
        for (var r = t._pt; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
      }
    }, {
      name: "endArray",
      init: function init(e, t) {
        for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
      }
    }, Sr("roundProps", ot), Sr("modifiers"), Sr("snap", lt)) || Tr;
  Jt.version = Vt.version = Er.version = "3.12.7", u = 1, F() && Mt(), kt.Power0, kt.Power1, kt.Power2, kt.Power3, kt.Power4, kt.Linear, kt.Quad, kt.Cubic, kt.Quart, kt.Quint, kt.Strong, kt.Elastic, kt.Back, kt.SteppedEase, kt.Bounce, kt.Sine, kt.Expo, kt.Circ;
  var Cr,
    Mr,
    kr,
    Pr,
    Or,
    zr,
    Lr,
    Ir,
    Dr = {},
    Br = 180 / Math.PI,
    Rr = Math.PI / 180,
    Fr = Math.atan2,
    Gr = /([A-Z])/g,
    Nr = /(left|right|width|margin|padding|x)/i,
    Yr = /[\s,\(]\S/,
    Vr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Hr = function Hr(e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    },
    $r = function $r(e, t) {
      return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    },
    jr = function jr(e, t) {
      return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
    },
    qr = function qr(e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t);
    },
    Xr = function Xr(e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Wr = function Wr(e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    },
    Ur = function Ur(e, t, r) {
      return e.style[t] = r;
    },
    Qr = function Qr(e, t, r) {
      return e.style.setProperty(t, r);
    },
    Zr = function Zr(e, t, r) {
      return e._gsap[t] = r;
    },
    Kr = function Kr(e, t, r) {
      return e._gsap.scaleX = e._gsap.scaleY = r;
    },
    Jr = function Jr(e, t, r, n, i) {
      var s = e._gsap;
      s.scaleX = s.scaleY = r, s.renderTransform(i, s);
    },
    en = function en(e, t, r, n, i) {
      var s = e._gsap;
      s[t] = r, s.renderTransform(i, s);
    },
    tn = "transform",
    rn = tn + "Origin",
    nn = function e(t, r) {
      var n = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (t in Dr && s) {
        if (this.tfm = this.tfm || {}, "transform" === t) return Vr.transform.split(",").forEach(function (t) {
          return e.call(n, t, r);
        });
        if (~(t = Vr[t] || t).indexOf(",") ? t.split(",").forEach(function (e) {
          return n.tfm[e] = xn(i, e);
        }) : this.tfm[t] = a.x ? a[t] : xn(i, t), t === rn && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(tn) >= 0) return;
        a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(rn, r, "")), t = tn;
      }
      (s || r) && this.props.push(t, r, s[t]);
    },
    sn = function sn(e) {
      e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
    },
    an = function an() {
      var e,
        t,
        r = this.props,
        n = this.target,
        i = n.style,
        s = n._gsap;
      for (e = 0; e < r.length; e += 3) r[e + 1] ? 2 === r[e + 1] ? n[r[e]](r[e + 2]) : n[r[e]] = r[e + 2] : r[e + 2] ? i[r[e]] = r[e + 2] : i.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(Gr, "-$1").toLowerCase());
      if (this.tfm) {
        for (t in this.tfm) s[t] = this.tfm[t];
        s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (e = Lr()) && e.isStart || i[tn] || (sn(i), s.zOrigin && i[rn] && (i[rn] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
      }
    },
    on = function on(e, t) {
      var r = {
        target: e,
        props: [],
        revert: an,
        save: nn
      };
      return e._gsap || Er.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function (e) {
        return r.save(e);
      }), r;
    },
    ln = function ln(e, t) {
      var r = Mr.createElementNS ? Mr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mr.createElement(e);
      return r && r.style ? r : Mr.createElement(e);
    },
    dn = function e(t, r, n) {
      var i = getComputedStyle(t);
      return i[r] || i.getPropertyValue(r.replace(Gr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && e(t, pn(r) || r, 1) || "";
    },
    cn = "O,Moz,ms,Ms,Webkit".split(","),
    pn = function pn(e, t, r) {
      var n = (t || Or).style,
        i = 5;
      if (e in n && !r) return e;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(cn[i] + e in n););
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? cn[i] : "") + e;
    },
    un = function un() {
      "undefined" != typeof window && window.document && (Cr = window, Mr = Cr.document, kr = Mr.documentElement, Or = ln("div") || {
        style: {}
      }, ln("div"), tn = pn(tn), rn = tn + "Origin", Or.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ir = !!pn("perspective"), Lr = Er.core.reverting, Pr = 1);
    },
    fn = function fn(e) {
      var t,
        r = e.ownerSVGElement,
        n = ln("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = e.cloneNode(!0);
      i.style.display = "block", n.appendChild(i), kr.appendChild(n);
      try {
        t = i.getBBox();
      } catch (e) {}
      return n.removeChild(i), kr.removeChild(n), t;
    },
    hn = function hn(e, t) {
      for (var r = t.length; r--;) if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    gn = function gn(e) {
      var t, r;
      try {
        t = e.getBBox();
      } catch (n) {
        t = fn(e), r = 1;
      }
      return t && (t.width || t.height) || r || (t = fn(e)), !t || t.width || t.x || t.y ? t : {
        x: +hn(e, ["x", "cx", "x1"]) || 0,
        y: +hn(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      };
    },
    mn = function mn(e) {
      return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !gn(e));
    },
    vn = function vn(e, t) {
      if (t) {
        var r,
          n = e.style;
        t in Dr && t !== rn && (t = tn), n.removeProperty ? ("ms" !== (r = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), n.removeProperty("--" === r ? t : t.replace(Gr, "-$1").toLowerCase())) : n.removeAttribute(t);
      }
    },
    wn = function wn(e, t, r, n, i, s) {
      var a = new fr(e._pt, t, r, 0, 1, s ? Wr : Xr);
      return e._pt = a, a.b = n, a.e = i, e._props.push(r), a;
    },
    bn = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    yn = {
      grid: 1,
      flex: 1
    },
    _n = function e(t, r, n, i) {
      var s,
        a,
        o,
        l,
        d = parseFloat(n) || 0,
        c = (n + "").trim().substr((d + "").length) || "px",
        p = Or.style,
        u = Nr.test(r),
        f = "svg" === t.tagName.toLowerCase(),
        h = (f ? "client" : "offset") + (u ? "Width" : "Height"),
        g = 100,
        m = "px" === i,
        v = "%" === i;
      if (i === c || !d || bn[i] || bn[c]) return d;
      if ("px" !== c && !m && (d = e(t, r, n, "px")), l = t.getCTM && mn(t), (v || "%" === c) && (Dr[r] || ~r.indexOf("adius"))) return s = l ? t.getBBox()[u ? "width" : "height"] : t[h], ve(v ? d / s * g : d / 100 * s);
      if (p[u ? "width" : "height"] = g + (m ? c : i), a = "rem" !== i && ~r.indexOf("adius") || "em" === i && t.appendChild && !f ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Mr && a.appendChild || (a = Mr.body), (o = a._gsap) && v && o.width && u && o.time === Ct.time && !o.uncache) return ve(d / o.width * g);
      if (!v || "height" !== r && "width" !== r) (v || "%" === c) && !yn[dn(a, "display")] && (p.position = dn(t, "position")), a === t && (p.position = "static"), a.appendChild(Or), s = Or[h], a.removeChild(Or), p.position = "absolute";else {
        var w = t.style[r];
        t.style[r] = g + i, s = t[h], w ? t.style[r] = w : vn(t, r);
      }
      return u && v && ((o = he(a)).time = Ct.time, o.width = a[h]), ve(m ? s * d / g : s && d ? g / s * d : 0);
    },
    xn = function xn(e, t, r, n) {
      var i;
      return Pr || un(), t in Vr && "transform" !== t && ~(t = Vr[t]).indexOf(",") && (t = t.split(",")[0]), Dr[t] && "transform" !== t ? (i = Ln(e, n), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : In(dn(e, rn)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = En[t] && En[t](e, t, r) || dn(e, t) || ge(e, t) || ("opacity" === t ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? _n(e, t, i, r) + r : i;
    },
    Tn = function Tn(e, t, r, n) {
      if (!r || "none" === r) {
        var i = pn(t, e, 1),
          s = i && dn(e, i, 1);
        s && s !== r ? (t = i, r = s) : "borderColor" === t && (r = dn(e, "borderTopColor"));
      }
      var a,
        o,
        l,
        d,
        c,
        p,
        u,
        f,
        h,
        g,
        m,
        v = new fr(this._pt, e.style, t, 0, 1, or),
        w = 0,
        b = 0;
      if (v.b = r, v.e = n, r += "", "auto" == (n += "") && (p = e.style[t], e.style[t] = n, n = dn(e, t) || n, p ? e.style[t] = p : vn(e, t)), Et(a = [r, n]), n = a[1], l = (r = a[0]).match($) || [], (n.match($) || []).length) {
        for (; o = $.exec(n);) u = o[0], h = n.substring(w, o.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), u !== (p = l[b++] || "") && (d = parseFloat(p) || 0, m = p.substr((d + "").length), "=" === u.charAt(1) && (u = be(d, u) + m), f = parseFloat(u), g = u.substr((f + "").length), w = $.lastIndex - g.length, g || (g = g || x.units[t] || m, w === n.length && (n += g, v.e += g)), m !== g && (d = _n(e, t, p, g) || 0), v._pt = {
          _next: v._pt,
          p: h || 1 === b ? h : ",",
          s: d,
          c: f - d,
          m: c && c < 4 || "zIndex" === t ? Math.round : 0
        });
        v.c = w < n.length ? n.substring(w, n.length) : "";
      } else v.r = "display" === t && "none" === n ? Wr : Xr;
      return q.test(n) && (v.e = 0), this._pt = v, v;
    },
    An = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    Sn = function Sn(e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r,
          n,
          i,
          s = t.t,
          a = s.style,
          o = t.u,
          l = s._gsap;
        if ("all" === o || !0 === o) a.cssText = "", n = 1;else for (i = (o = o.split(",")).length; --i > -1;) r = o[i], Dr[r] && (n = 1, r = "transformOrigin" === r ? rn : tn), vn(s, r);
        n && (vn(s, tn), l && (l.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", Ln(s, 1), l.uncache = 1, sn(a)));
      }
    },
    En = {
      clearProps: function clearProps(e, t, r, n, i) {
        if ("isFromStart" !== i.data) {
          var s = e._pt = new fr(e._pt, t, r, 0, 0, Sn);
          return s.u = n, s.pr = -10, s.tween = i, e._props.push(r), 1;
        }
      }
    },
    Cn = [1, 0, 0, 1, 0, 0],
    Mn = {},
    kn = function kn(e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    },
    Pn = function Pn(e) {
      var t = dn(e, tn);
      return kn(t) ? Cn : t.substr(7).match(H).map(ve);
    },
    On = function On(e, t) {
      var r,
        n,
        i,
        s,
        a = e._gsap || he(e),
        o = e.style,
        l = Pn(e);
      return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Cn : l : (l !== Cn || e.offsetParent || e === kr || a.svg || (i = o.display, o.display = "block", (r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (s = 1, n = e.nextElementSibling, kr.appendChild(e)), l = Pn(e), i ? o.display = i : vn(e, "display"), s && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : kr.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    zn = function zn(e, t, r, n, i, s) {
      var a,
        o,
        l,
        d = e._gsap,
        c = i || On(e, !0),
        p = d.xOrigin || 0,
        u = d.yOrigin || 0,
        f = d.xOffset || 0,
        h = d.yOffset || 0,
        g = c[0],
        m = c[1],
        v = c[2],
        w = c[3],
        b = c[4],
        y = c[5],
        _ = t.split(" "),
        x = parseFloat(_[0]) || 0,
        T = parseFloat(_[1]) || 0;
      r ? c !== Cn && (o = g * w - m * v) && (l = x * (-m / o) + T * (g / o) - (g * y - m * b) / o, x = x * (w / o) + T * (-v / o) + (v * y - w * b) / o, T = l) : (x = (a = gn(e)).x + (~_[0].indexOf("%") ? x / 100 * a.width : x), T = a.y + (~(_[1] || _[0]).indexOf("%") ? T / 100 * a.height : T)), n || !1 !== n && d.smooth ? (b = x - p, y = T - u, d.xOffset = f + (b * g + y * v) - b, d.yOffset = h + (b * m + y * w) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = x, d.yOrigin = T, d.smooth = !!n, d.origin = t, d.originIsAbsolute = !!r, e.style[rn] = "0px 0px", s && (wn(s, d, "xOrigin", p, x), wn(s, d, "yOrigin", u, T), wn(s, d, "xOffset", f, d.xOffset), wn(s, d, "yOffset", h, d.yOffset)), e.setAttribute("data-svg-origin", x + " " + T);
    },
    Ln = function Ln(e, t) {
      var r = e._gsap || new Nt(e);
      if ("x" in r && !t && !r.uncache) return r;
      var n,
        i,
        s,
        a,
        o,
        l,
        d,
        c,
        p,
        u,
        f,
        h,
        g,
        m,
        v,
        w,
        b,
        y,
        _,
        T,
        A,
        S,
        E,
        C,
        M,
        k,
        P,
        O,
        z,
        L,
        I,
        D,
        B = e.style,
        R = r.scaleX < 0,
        F = "px",
        G = "deg",
        N = getComputedStyle(e),
        Y = dn(e, rn) || "0";
      return n = i = s = l = d = c = p = u = f = 0, a = o = 1, r.svg = !(!e.getCTM || !mn(e)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (B[tn] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[tn] ? N[tn] : "")), B.scale = B.rotate = B.translate = "none"), m = On(e, r.svg), r.svg && (r.uncache ? (M = e.getBBox(), Y = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), zn(e, C || Y, !!C || r.originIsAbsolute, !1 !== r.smooth, m)), h = r.xOrigin || 0, g = r.yOrigin || 0, m !== Cn && (y = m[0], _ = m[1], T = m[2], A = m[3], n = S = m[4], i = E = m[5], 6 === m.length ? (a = Math.sqrt(y * y + _ * _), o = Math.sqrt(A * A + T * T), l = y || _ ? Fr(_, y) * Br : 0, (p = T || A ? Fr(T, A) * Br + l : 0) && (o *= Math.abs(Math.cos(p * Rr))), r.svg && (n -= h - (h * y + g * T), i -= g - (h * _ + g * A))) : (D = m[6], L = m[7], P = m[8], O = m[9], z = m[10], I = m[11], n = m[12], i = m[13], s = m[14], d = (v = Fr(D, z)) * Br, v && (C = S * (w = Math.cos(-v)) + P * (b = Math.sin(-v)), M = E * w + O * b, k = D * w + z * b, P = S * -b + P * w, O = E * -b + O * w, z = D * -b + z * w, I = L * -b + I * w, S = C, E = M, D = k), c = (v = Fr(-T, z)) * Br, v && (w = Math.cos(-v), I = A * (b = Math.sin(-v)) + I * w, y = C = y * w - P * b, _ = M = _ * w - O * b, T = k = T * w - z * b), l = (v = Fr(_, y)) * Br, v && (C = y * (w = Math.cos(v)) + _ * (b = Math.sin(v)), M = S * w + E * b, _ = _ * w - y * b, E = E * w - S * b, y = C, S = M), d && Math.abs(d) + Math.abs(l) > 359.9 && (d = l = 0, c = 180 - c), a = ve(Math.sqrt(y * y + _ * _ + T * T)), o = ve(Math.sqrt(E * E + D * D)), v = Fr(S, E), p = Math.abs(v) > 2e-4 ? v * Br : 0, f = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (C = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !kn(dn(e, tn)), C && e.setAttribute("transform", C))), Math.abs(p) > 90 && Math.abs(p) < 270 && (R ? (a *= -1, p += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, p += p <= 0 ? 180 : -180)), t = t || r.uncache, r.x = n - ((r.xPercent = n && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + F, r.y = i - ((r.yPercent = i && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + F, r.z = s + F, r.scaleX = ve(a), r.scaleY = ve(o), r.rotation = ve(l) + G, r.rotationX = ve(d) + G, r.rotationY = ve(c) + G, r.skewX = p + G, r.skewY = u + G, r.transformPerspective = f + F, (r.zOrigin = parseFloat(Y.split(" ")[2]) || !t && r.zOrigin || 0) && (B[rn] = In(Y)), r.xOffset = r.yOffset = 0, r.force3D = x.force3D, r.renderTransform = r.svg ? Yn : Ir ? Nn : Bn, r.uncache = 0, r;
    },
    In = function In(e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Dn = function Dn(e, t, r) {
      var n = et(t);
      return ve(parseFloat(t) + parseFloat(_n(e, "x", r + "px", n))) + n;
    },
    Bn = function Bn(e, t) {
      t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Nn(e, t);
    },
    Rn = "0deg",
    Fn = "0px",
    Gn = ") ",
    Nn = function Nn(e, t) {
      var r = t || this,
        n = r.xPercent,
        i = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        l = r.rotation,
        d = r.rotationY,
        c = r.rotationX,
        p = r.skewX,
        u = r.skewY,
        f = r.scaleX,
        h = r.scaleY,
        g = r.transformPerspective,
        m = r.force3D,
        v = r.target,
        w = r.zOrigin,
        b = "",
        y = "auto" === m && e && 1 !== e || !0 === m;
      if (w && (c !== Rn || d !== Rn)) {
        var _,
          x = parseFloat(d) * Rr,
          T = Math.sin(x),
          A = Math.cos(x);
        x = parseFloat(c) * Rr, _ = Math.cos(x), s = Dn(v, s, T * _ * -w), a = Dn(v, a, -Math.sin(x) * -w), o = Dn(v, o, A * _ * -w + w);
      }
      g !== Fn && (b += "perspective(" + g + Gn), (n || i) && (b += "translate(" + n + "%, " + i + "%) "), (y || s !== Fn || a !== Fn || o !== Fn) && (b += o !== Fn || y ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Gn), l !== Rn && (b += "rotate(" + l + Gn), d !== Rn && (b += "rotateY(" + d + Gn), c !== Rn && (b += "rotateX(" + c + Gn), p === Rn && u === Rn || (b += "skew(" + p + ", " + u + Gn), 1 === f && 1 === h || (b += "scale(" + f + ", " + h + Gn), v.style[tn] = b || "translate(0, 0)";
    },
    Yn = function Yn(e, t) {
      var r,
        n,
        i,
        s,
        a,
        o = t || this,
        l = o.xPercent,
        d = o.yPercent,
        c = o.x,
        p = o.y,
        u = o.rotation,
        f = o.skewX,
        h = o.skewY,
        g = o.scaleX,
        m = o.scaleY,
        v = o.target,
        w = o.xOrigin,
        b = o.yOrigin,
        y = o.xOffset,
        _ = o.yOffset,
        x = o.forceCSS,
        T = parseFloat(c),
        A = parseFloat(p);
      u = parseFloat(u), f = parseFloat(f), (h = parseFloat(h)) && (f += h = parseFloat(h), u += h), u || f ? (u *= Rr, f *= Rr, r = Math.cos(u) * g, n = Math.sin(u) * g, i = Math.sin(u - f) * -m, s = Math.cos(u - f) * m, f && (h *= Rr, a = Math.tan(f - h), i *= a = Math.sqrt(1 + a * a), s *= a, h && (a = Math.tan(h), r *= a = Math.sqrt(1 + a * a), n *= a)), r = ve(r), n = ve(n), i = ve(i), s = ve(s)) : (r = g, s = m, n = i = 0), (T && !~(c + "").indexOf("px") || A && !~(p + "").indexOf("px")) && (T = _n(v, "x", c, "px"), A = _n(v, "y", p, "px")), (w || b || y || _) && (T = ve(T + w - (w * r + b * i) + y), A = ve(A + b - (w * n + b * s) + _)), (l || d) && (a = v.getBBox(), T = ve(T + l / 100 * a.width), A = ve(A + d / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + A + ")", v.setAttribute("transform", a), x && (v.style[tn] = a);
    },
    Vn = function Vn(e, t, r, n, i) {
      var s,
        a,
        o = 360,
        l = z(i),
        d = parseFloat(i) * (l && ~i.indexOf("rad") ? Br : 1) - n,
        c = n + d + "deg";
      return l && ("short" === (s = i.split("_")[1]) && (d %= o) != d % 180 && (d += d < 0 ? o : -360), "cw" === s && d < 0 ? d = (d + 36e9) % o - ~~(d / o) * o : "ccw" === s && d > 0 && (d = (d - 36e9) % o - ~~(d / o) * o)), e._pt = a = new fr(e._pt, t, r, n, d, $r), a.e = c, a.u = "deg", e._props.push(r), a;
    },
    Hn = function Hn(e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    $n = function $n(e, t, r) {
      var n,
        i,
        s,
        a,
        o,
        l,
        d,
        c = Hn({}, r._gsap),
        p = r.style;
      for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), p[tn] = t, n = Ln(r, 1), vn(r, tn), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[tn], p[tn] = t, n = Ln(r, 1), p[tn] = s), Dr) (s = c[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = et(s) !== (d = et(a)) ? _n(r, i, s, d) : parseFloat(s), l = parseFloat(a), e._pt = new fr(e._pt, n, i, o, l - o, Hr), e._pt.u = d || 0, e._props.push(i));
      Hn(n, c);
    };
  me("padding,margin,Width,Radius", function (e, t) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      s = "Left",
      a = (t < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
        return t < 2 ? e + r : "border" + r + e;
      });
    En[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
      var s, o;
      if (arguments.length < 4) return s = a.map(function (t) {
        return xn(e, t, r);
      }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
      s = (n + "").split(" "), o = {}, a.forEach(function (e, t) {
        return o[e] = s[t] = s[t] || s[(t - 1) / 2 | 0];
      }), e.init(t, o, i);
    };
  });
  var jn,
    qn,
    Xn = {
      name: "css",
      register: un,
      targetTest: function targetTest(e) {
        return e.style && e.nodeType;
      },
      init: function init(e, t, r, n, i) {
        var s,
          a,
          o,
          l,
          d,
          c,
          p,
          u,
          f,
          h,
          g,
          m,
          v,
          w,
          b,
          y,
          _,
          T,
          A,
          S,
          E = this._props,
          C = e.style,
          M = r.vars.startAt;
        for (p in Pr || un(), this.styles = this.styles || on(e), y = this.styles.props, this.tween = r, t) if ("autoRound" !== p && (a = t[p], !le[p] || !Xt(p, t, r, n, e, i))) if (d = _typeof(a), c = En[p], "function" === d && (d = _typeof(a = a.call(r, n, e, i))), "string" === d && ~a.indexOf("random(") && (a = pt(a)), c) c(this, e, p, a, r) && (b = 1);else if ("--" === p.substr(0, 2)) s = (getComputedStyle(e).getPropertyValue(p) + "").trim(), a += "", At.lastIndex = 0, At.test(s) || (u = et(s), f = et(a)), f ? u !== f && (s = _n(e, p, s, f) + f) : u && (a += u), this.add(C, "setProperty", s, a, n, i, 0, 0, p), E.push(p), y.push(p, 0, C[p]);else if ("undefined" !== d) {
          if (M && p in M ? (s = "function" == typeof M[p] ? M[p].call(r, n, e, i) : M[p], z(s) && ~s.indexOf("random(") && (s = pt(s)), et(s + "") || "auto" === s || (s += x.units[p] || et(xn(e, p)) || ""), "=" === (s + "").charAt(1) && (s = xn(e, p))) : s = xn(e, p), l = parseFloat(s), (h = "string" === d && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), p in Vr && ("autoAlpha" === p && (1 === l && "hidden" === xn(e, "visibility") && o && (l = 0), y.push("visibility", 0, C.visibility), wn(this, C, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== p && "transform" !== p && ~(p = Vr[p]).indexOf(",") && (p = p.split(",")[0])), g = p in Dr) {
            if (this.styles.save(p), m || ((v = e._gsap).renderTransform && !t.parseTransform || Ln(e, t.parseTransform), w = !1 !== t.smoothOrigin && v.smooth, (m = this._pt = new fr(this._pt, C, tn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === p) this._pt = new fr(this._pt, v, "scaleY", v.scaleY, (h ? be(v.scaleY, h + o) : o) - v.scaleY || 0, Hr), this._pt.u = 0, E.push("scaleY", p), p += "X";else {
              if ("transformOrigin" === p) {
                y.push(rn, 0, C[rn]), T = void 0, A = void 0, S = void 0, A = (T = (_ = a).split(" "))[0], S = T[1] || "50%", "top" !== A && "bottom" !== A && "left" !== S && "right" !== S || (_ = A, A = S, S = _), T[0] = An[A] || A, T[1] = An[S] || S, a = T.join(" "), v.svg ? zn(e, a, 0, w, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && wn(this, v, "zOrigin", v.zOrigin, f), wn(this, C, p, In(s), In(a)));
                continue;
              }
              if ("svgOrigin" === p) {
                zn(e, a, 1, w, 0, this);
                continue;
              }
              if (p in Mn) {
                Vn(this, v, p, l, h ? be(l, h + a) : a);
                continue;
              }
              if ("smoothOrigin" === p) {
                wn(this, v, "smooth", v.smooth, a);
                continue;
              }
              if ("force3D" === p) {
                v[p] = a;
                continue;
              }
              if ("transform" === p) {
                $n(this, a, e);
                continue;
              }
            }
          } else p in C || (p = pn(p) || p);
          if (g || (o || 0 === o) && (l || 0 === l) && !Yr.test(a) && p in C) o || (o = 0), (u = (s + "").substr((l + "").length)) !== (f = et(a) || (p in x.units ? x.units[p] : u)) && (l = _n(e, p, s, f)), this._pt = new fr(this._pt, g ? v : C, p, l, (h ? be(l, h + o) : o) - l, g || "px" !== f && "zIndex" !== p || !1 === t.autoRound ? Hr : qr), this._pt.u = f || 0, u !== f && "%" !== f && (this._pt.b = s, this._pt.r = jr);else if (p in C) Tn.call(this, e, p, s, h ? h + a : a);else if (p in e) this.add(e, p, s || e[p], h ? h + a : a, n, i);else if ("parseTransform" !== p) {
            K(p, a);
            continue;
          }
          g || (p in C ? y.push(p, 0, C[p]) : "function" == typeof e[p] ? y.push(p, 2, e[p]()) : y.push(p, 1, s || e[p])), E.push(p);
        }
        b && ur(this);
      },
      render: function render(e, t) {
        if (t.tween._time || !Lr()) for (var r = t._pt; r;) r.r(e, r.d), r = r._next;else t.styles.revert();
      },
      get: xn,
      aliases: Vr,
      getSetter: function getSetter(e, t, r) {
        var n = Vr[t];
        return n && n.indexOf(",") < 0 && (t = n), t in Dr && t !== rn && (e._gsap.x || xn(e, "x")) ? r && zr === r ? "scale" === t ? Kr : Zr : (zr = r || {}) && ("scale" === t ? Jr : en) : e.style && !D(e.style[t]) ? Ur : ~t.indexOf("-") ? Qr : ir(e, t);
      },
      core: {
        _removeProperty: vn,
        _getMatrix: On
      }
    };
  Er.utils.checkPrefix = pn, Er.core.getStyleSaver = on, qn = me("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (jn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
    Dr[e] = 1;
  }), me(jn, function (e) {
    x.units[e] = "deg", Mn[e] = 1;
  }), Vr[qn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + jn, me("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
    var t = e.split(":");
    Vr[t[1]] = qn[t[0]];
  }), me("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
    x.units[e] = "px";
  }), Er.registerPlugin(Xn);
  var Wn = Er.registerPlugin(Xn) || Er;
  function Un(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  Wn.core.Tween;
  var Qn,
    Zn,
    Kn,
    Jn,
    ei,
    ti,
    ri,
    ni,
    ii,
    si,
    ai,
    oi,
    li,
    di = function di() {
      return Qn || "undefined" != typeof window && (Qn = window.gsap) && Qn.registerPlugin && Qn;
    },
    ci = 1,
    pi = [],
    ui = [],
    fi = [],
    hi = Date.now,
    gi = function gi(e, t) {
      return t;
    },
    mi = function mi(e, t) {
      return ~fi.indexOf(e) && fi[fi.indexOf(e) + 1][t];
    },
    vi = function vi(e) {
      return !!~si.indexOf(e);
    },
    wi = function wi(e, t, r, n, i) {
      return e.addEventListener(t, r, {
        passive: !1 !== n,
        capture: !!i
      });
    },
    bi = function bi(e, t, r, n) {
      return e.removeEventListener(t, r, !!n);
    },
    yi = "scrollLeft",
    _i = "scrollTop",
    xi = function xi() {
      return ai && ai.isPressed || ui.cache++;
    },
    Ti = function Ti(e, t) {
      var r = function r(n) {
        if (n || 0 === n) {
          ci && (Kn.history.scrollRestoration = "manual");
          var i = ai && ai.isPressed;
          n = r.v = Math.round(n) || (ai && ai.iOS ? 1 : 0), e(n), r.cacheID = ui.cache, i && gi("ss", n);
        } else (t || ui.cache !== r.cacheID || gi("ref")) && (r.cacheID = ui.cache, r.v = e());
        return r.v + r.offset;
      };
      return r.offset = 0, e && r;
    },
    Ai = {
      s: yi,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Ti(function (e) {
        return arguments.length ? Kn.scrollTo(e, Si.sc()) : Kn.pageXOffset || Jn[yi] || ei[yi] || ti[yi] || 0;
      })
    },
    Si = {
      s: _i,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ai,
      sc: Ti(function (e) {
        return arguments.length ? Kn.scrollTo(Ai.sc(), e) : Kn.pageYOffset || Jn[_i] || ei[_i] || ti[_i] || 0;
      })
    },
    Ei = function Ei(e, t) {
      return (t && t._ctx && t._ctx.selector || Qn.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Qn.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
    },
    Ci = function Ci(e, t) {
      var r = t.s,
        n = t.sc;
      vi(e) && (e = Jn.scrollingElement || ei);
      var i = ui.indexOf(e),
        s = n === Si.sc ? 1 : 2;
      !~i && (i = ui.push(e) - 1), ui[i + s] || wi(e, "scroll", xi);
      var a = ui[i + s],
        o = a || (ui[i + s] = Ti(mi(e, r), !0) || (vi(e) ? n : Ti(function (t) {
          return arguments.length ? e[r] = t : e[r];
        })));
      return o.target = e, a || (o.smooth = "smooth" === Qn.getProperty(e, "scrollBehavior")), o;
    },
    Mi = function Mi(e, t, r) {
      var n = e,
        i = e,
        s = hi(),
        a = s,
        o = t || 50,
        l = Math.max(500, 3 * o),
        d = function d(e, t) {
          var l = hi();
          t || l - s > o ? (i = n, n = e, a = s, s = l) : r ? n += e : n = i + (e - i) / (l - a) * (s - a);
        };
      return {
        update: d,
        reset: function reset() {
          i = n = r ? 0 : n, a = s = 0;
        },
        getVelocity: function getVelocity(e) {
          var t = a,
            o = i,
            c = hi();
          return (e || 0 === e) && e !== n && d(e), s === a || c - a > l ? 0 : (n + (r ? o : -o)) / ((r ? c : s) - t) * 1e3;
        }
      };
    },
    ki = function ki(e, t) {
      return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
    },
    Pi = function Pi(e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    Oi = function Oi() {
      var e, t, r, n;
      (ii = Qn.core.globals().ScrollTrigger) && ii.core && (e = ii.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, ui), n.push.apply(n, fi), ui = r, fi = n, gi = function gi(e, r) {
        return t[e](r);
      });
    },
    zi = function zi(e) {
      return Qn = e || di(), !Zn && Qn && "undefined" != typeof document && document.body && (Kn = window, Jn = document, ei = Jn.documentElement, ti = Jn.body, si = [Kn, Jn, ei, ti], Qn.utils.clamp, li = Qn.core.context || function () {}, ni = "onpointerenter" in ti ? "pointer" : "mouse", ri = Li.isTouch = Kn.matchMedia && Kn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Kn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, oi = Li.eventTypes = ("ontouchstart" in ei ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ei ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return ci = 0;
      }, 500), Oi(), Zn = 1), Zn;
    };
  Ai.op = Si, ui.cache = 0;
  var Li = function () {
    function e(e) {
      this.init(e);
    }
    var t, r;
    return e.prototype.init = function (e) {
      Zn || zi(Qn) || console.warn("Please gsap.registerPlugin(Observer)"), ii || Oi();
      var t = e.tolerance,
        r = e.dragMinimum,
        n = e.type,
        i = e.target,
        s = e.lineHeight,
        a = e.debounce,
        o = e.preventDefault,
        l = e.onStop,
        d = e.onStopDelay,
        c = e.ignore,
        p = e.wheelSpeed,
        u = e.event,
        f = e.onDragStart,
        h = e.onDragEnd,
        g = e.onDrag,
        m = e.onPress,
        v = e.onRelease,
        w = e.onRight,
        b = e.onLeft,
        y = e.onUp,
        _ = e.onDown,
        x = e.onChangeX,
        T = e.onChangeY,
        A = e.onChange,
        S = e.onToggleX,
        E = e.onToggleY,
        C = e.onHover,
        M = e.onHoverEnd,
        k = e.onMove,
        P = e.ignoreCheck,
        O = e.isNormalizer,
        z = e.onGestureStart,
        L = e.onGestureEnd,
        I = e.onWheel,
        D = e.onEnable,
        B = e.onDisable,
        R = e.onClick,
        F = e.scrollSpeed,
        G = e.capture,
        N = e.allowClicks,
        Y = e.lockAxis,
        V = e.onLockAxis;
      this.target = i = Ei(i) || ei, this.vars = e, c && (c = Qn.utils.toArray(c)), t = t || 1e-9, r = r || 0, p = p || 1, F = F || 1, n = n || "wheel,touch,pointer", a = !1 !== a, s || (s = parseFloat(Kn.getComputedStyle(ti).lineHeight) || 22);
      var H,
        $,
        j,
        q,
        X,
        W,
        U,
        Q = this,
        Z = 0,
        K = 0,
        J = e.passive || !o && !1 !== e.passive,
        ee = Ci(i, Ai),
        te = Ci(i, Si),
        re = ee(),
        ne = te(),
        ie = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === oi[0],
        se = vi(i),
        ae = i.ownerDocument || Jn,
        oe = [0, 0, 0],
        le = [0, 0, 0],
        de = 0,
        ce = function ce() {
          return de = hi();
        },
        pe = function pe(e, t) {
          return (Q.event = e) && c && ~c.indexOf(e.target) || t && ie && "touch" !== e.pointerType || P && P(e, t);
        },
        ue = function ue() {
          var e = Q.deltaX = Pi(oe),
            r = Q.deltaY = Pi(le),
            n = Math.abs(e) >= t,
            i = Math.abs(r) >= t;
          A && (n || i) && A(Q, e, r, oe, le), n && (w && Q.deltaX > 0 && w(Q), b && Q.deltaX < 0 && b(Q), x && x(Q), S && Q.deltaX < 0 != Z < 0 && S(Q), Z = Q.deltaX, oe[0] = oe[1] = oe[2] = 0), i && (_ && Q.deltaY > 0 && _(Q), y && Q.deltaY < 0 && y(Q), T && T(Q), E && Q.deltaY < 0 != K < 0 && E(Q), K = Q.deltaY, le[0] = le[1] = le[2] = 0), (q || j) && (k && k(Q), j && (f && 1 === j && f(Q), g && g(Q), j = 0), q = !1), W && !(W = !1) && V && V(Q), X && (I(Q), X = !1), H = 0;
        },
        fe = function fe(e, t, r) {
          oe[r] += e, le[r] += t, Q._vx.update(e), Q._vy.update(t), a ? H || (H = requestAnimationFrame(ue)) : ue();
        },
        he = function he(e, t) {
          Y && !U && (Q.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y", W = !0), "y" !== U && (oe[2] += e, Q._vx.update(e, !0)), "x" !== U && (le[2] += t, Q._vy.update(t, !0)), a ? H || (H = requestAnimationFrame(ue)) : ue();
        },
        ge = function ge(e) {
          if (!pe(e, 1)) {
            var t = (e = ki(e, o)).clientX,
              n = e.clientY,
              i = t - Q.x,
              s = n - Q.y,
              a = Q.isDragging;
            Q.x = t, Q.y = n, (a || (i || s) && (Math.abs(Q.startX - t) >= r || Math.abs(Q.startY - n) >= r)) && (j = a ? 2 : 1, a || (Q.isDragging = !0), he(i, s));
          }
        },
        me = Q.onPress = function (e) {
          pe(e, 1) || e && e.button || (Q.axis = U = null, $.pause(), Q.isPressed = !0, e = ki(e), Z = K = 0, Q.startX = Q.x = e.clientX, Q.startY = Q.y = e.clientY, Q._vx.reset(), Q._vy.reset(), wi(O ? i : ae, oi[1], ge, J, !0), Q.deltaX = Q.deltaY = 0, m && m(Q));
        },
        ve = Q.onRelease = function (e) {
          if (!pe(e, 1)) {
            bi(O ? i : ae, oi[1], ge, !0);
            var t = !isNaN(Q.y - Q.startY),
              r = Q.isDragging,
              n = r && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
              s = ki(e);
            !n && t && (Q._vx.reset(), Q._vy.reset(), o && N && Qn.delayedCall(.08, function () {
              if (hi() - de > 300 && !e.defaultPrevented) if (e.target.click) e.target.click();else if (ae.createEvent) {
                var t = ae.createEvent("MouseEvents");
                t.initMouseEvent("click", !0, !0, Kn, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
              }
            })), Q.isDragging = Q.isGesturing = Q.isPressed = !1, l && r && !O && $.restart(!0), j && ue(), h && r && h(Q), v && v(Q, n);
          }
        },
        we = function we(e) {
          return e.touches && e.touches.length > 1 && (Q.isGesturing = !0) && z(e, Q.isDragging);
        },
        be = function be() {
          return (Q.isGesturing = !1) || L(Q);
        },
        ye = function ye(e) {
          if (!pe(e)) {
            var t = ee(),
              r = te();
            fe((t - re) * F, (r - ne) * F, 1), re = t, ne = r, l && $.restart(!0);
          }
        },
        _e = function _e(e) {
          if (!pe(e)) {
            e = ki(e, o), I && (X = !0);
            var t = (1 === e.deltaMode ? s : 2 === e.deltaMode ? Kn.innerHeight : 1) * p;
            fe(e.deltaX * t, e.deltaY * t, 0), l && !O && $.restart(!0);
          }
        },
        xe = function xe(e) {
          if (!pe(e)) {
            var t = e.clientX,
              r = e.clientY,
              n = t - Q.x,
              i = r - Q.y;
            Q.x = t, Q.y = r, q = !0, l && $.restart(!0), (n || i) && he(n, i);
          }
        },
        Te = function Te(e) {
          Q.event = e, C(Q);
        },
        Ae = function Ae(e) {
          Q.event = e, M(Q);
        },
        Se = function Se(e) {
          return pe(e) || ki(e, o) && R(Q);
        };
      $ = Q._dc = Qn.delayedCall(d || .25, function () {
        Q._vx.reset(), Q._vy.reset(), $.pause(), l && l(Q);
      }).pause(), Q.deltaX = Q.deltaY = 0, Q._vx = Mi(0, 50, !0), Q._vy = Mi(0, 50, !0), Q.scrollX = ee, Q.scrollY = te, Q.isDragging = Q.isGesturing = Q.isPressed = !1, li(this), Q.enable = function (e) {
        return Q.isEnabled || (wi(se ? ae : i, "scroll", xi), n.indexOf("scroll") >= 0 && wi(se ? ae : i, "scroll", ye, J, G), n.indexOf("wheel") >= 0 && wi(i, "wheel", _e, J, G), (n.indexOf("touch") >= 0 && ri || n.indexOf("pointer") >= 0) && (wi(i, oi[0], me, J, G), wi(ae, oi[2], ve), wi(ae, oi[3], ve), N && wi(i, "click", ce, !0, !0), R && wi(i, "click", Se), z && wi(ae, "gesturestart", we), L && wi(ae, "gestureend", be), C && wi(i, ni + "enter", Te), M && wi(i, ni + "leave", Ae), k && wi(i, ni + "move", xe)), Q.isEnabled = !0, Q.isDragging = Q.isGesturing = Q.isPressed = q = j = !1, Q._vx.reset(), Q._vy.reset(), re = ee(), ne = te(), e && e.type && me(e), D && D(Q)), Q;
      }, Q.disable = function () {
        Q.isEnabled && (pi.filter(function (e) {
          return e !== Q && vi(e.target);
        }).length || bi(se ? ae : i, "scroll", xi), Q.isPressed && (Q._vx.reset(), Q._vy.reset(), bi(O ? i : ae, oi[1], ge, !0)), bi(se ? ae : i, "scroll", ye, G), bi(i, "wheel", _e, G), bi(i, oi[0], me, G), bi(ae, oi[2], ve), bi(ae, oi[3], ve), bi(i, "click", ce, !0), bi(i, "click", Se), bi(ae, "gesturestart", we), bi(ae, "gestureend", be), bi(i, ni + "enter", Te), bi(i, ni + "leave", Ae), bi(i, ni + "move", xe), Q.isEnabled = Q.isPressed = Q.isDragging = !1, B && B(Q));
      }, Q.kill = Q.revert = function () {
        Q.disable();
        var e = pi.indexOf(Q);
        e >= 0 && pi.splice(e, 1), ai === Q && (ai = 0);
      }, pi.push(Q), O && vi(i) && (ai = Q), Q.enable(u);
    }, t = e, (r = [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]) && Un(t.prototype, r), e;
  }();
  Li.version = "3.12.7", Li.create = function (e) {
    return new Li(e);
  }, Li.register = zi, Li.getAll = function () {
    return pi.slice();
  }, Li.getById = function (e) {
    return pi.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }, di() && Qn.registerPlugin(Li);
  var Ii,
    Di,
    Bi,
    Ri,
    Fi,
    Gi,
    Ni,
    Yi,
    Vi,
    Hi,
    $i,
    ji,
    qi,
    Xi,
    Wi,
    Ui,
    Qi,
    Zi,
    Ki,
    Ji,
    es,
    ts,
    rs,
    ns,
    is,
    ss,
    as,
    os,
    ls,
    ds,
    cs,
    ps,
    us,
    fs,
    hs,
    gs,
    ms,
    vs,
    ws = 1,
    bs = Date.now,
    ys = bs(),
    _s = 0,
    xs = 0,
    Ts = function Ts(e, t, r) {
      var n = Rs(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
      return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e;
    },
    As = function As(e, t) {
      return !t || Rs(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")";
    },
    Ss = function e() {
      return xs && requestAnimationFrame(e);
    },
    Es = function Es() {
      return Xi = 1;
    },
    Cs = function Cs() {
      return Xi = 0;
    },
    Ms = function Ms(e) {
      return e;
    },
    ks = function ks(e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    Ps = function Ps() {
      return "undefined" != typeof window;
    },
    Os = function Os() {
      return Ii || Ps() && (Ii = window.gsap) && Ii.registerPlugin && Ii;
    },
    zs = function zs(e) {
      return !!~Ni.indexOf(e);
    },
    Ls = function Ls(e) {
      return ("Height" === e ? cs : Bi["inner" + e]) || Fi["client" + e] || Gi["client" + e];
    },
    Is = function Is(e) {
      return mi(e, "getBoundingClientRect") || (zs(e) ? function () {
        return Xa.width = Bi.innerWidth, Xa.height = cs, Xa;
      } : function () {
        return aa(e);
      });
    },
    Ds = function Ds(e, t) {
      var r = t.s,
        n = t.d2,
        i = t.d,
        s = t.a;
      return Math.max(0, (r = "scroll" + n) && (s = mi(e, r)) ? s() - Is(e)()[i] : zs(e) ? (Fi[r] || Gi[r]) - Ls(n) : e[r] - e["offset" + n]);
    },
    Bs = function Bs(e, t) {
      for (var r = 0; r < Ki.length; r += 3) (!t || ~t.indexOf(Ki[r + 1])) && e(Ki[r], Ki[r + 1], Ki[r + 2]);
    },
    Rs = function Rs(e) {
      return "string" == typeof e;
    },
    Fs = function Fs(e) {
      return "function" == typeof e;
    },
    Gs = function Gs(e) {
      return "number" == typeof e;
    },
    Ns = function Ns(e) {
      return "object" == _typeof(e);
    },
    Ys = function Ys(e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    },
    Vs = function Vs(e, t) {
      if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function () {
          return t(e);
        }) : t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    Hs = Math.abs,
    $s = "left",
    js = "right",
    qs = "bottom",
    Xs = "width",
    Ws = "height",
    Us = "Right",
    Qs = "Left",
    Zs = "Top",
    Ks = "Bottom",
    Js = "padding",
    ea = "margin",
    ta = "Width",
    ra = "Height",
    na = "px",
    ia = function ia(e) {
      return Bi.getComputedStyle(e);
    },
    sa = function sa(e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    aa = function aa(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ia(e)[Wi] && Ii.to(e, {
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
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    oa = function oa(e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    la = function la(e) {
      var t,
        r = [],
        n = e.labels,
        i = e.duration();
      for (t in n) r.push(n[t] / i);
      return r;
    },
    da = function da(e) {
      var t = Ii.utils.snap(e),
        r = Array.isArray(e) && e.slice(0).sort(function (e, t) {
          return e - t;
        });
      return r ? function (e, n, i) {
        var s;
        if (void 0 === i && (i = .001), !n) return t(e);
        if (n > 0) {
          for (e -= i, s = 0; s < r.length; s++) if (r[s] >= e) return r[s];
          return r[s - 1];
        }
        for (s = r.length, e += i; s--;) if (r[s] <= e) return r[s];
        return r[0];
      } : function (r, n, i) {
        void 0 === i && (i = .001);
        var s = t(r);
        return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : t(n < 0 ? r - e : r + e);
      };
    },
    ca = function ca(e, t, r, n) {
      return r.split(",").forEach(function (r) {
        return e(t, r, n);
      });
    },
    pa = function pa(e, t, r, n, i) {
      return e.addEventListener(t, r, {
        passive: !n,
        capture: !!i
      });
    },
    ua = function ua(e, t, r, n) {
      return e.removeEventListener(t, r, !!n);
    },
    fa = function fa(e, t, r) {
      (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
    },
    ha = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    ga = {
      toggleActions: "play",
      anticipatePin: 0
    },
    ma = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    va = function va(e, t) {
      if (Rs(e)) {
        var r = e.indexOf("="),
          n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in ma ? ma[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
      }
      return e;
    },
    wa = function wa(e, t, r, n, i, s, a, o) {
      var l = i.startColor,
        d = i.endColor,
        c = i.fontSize,
        p = i.indent,
        u = i.fontWeight,
        f = Ri.createElement("div"),
        h = zs(r) || "fixed" === mi(r, "pinType"),
        g = -1 !== e.indexOf("scroller"),
        m = h ? Gi : r,
        v = -1 !== e.indexOf("start"),
        w = v ? l : d,
        b = "border-color:" + w + ";font-size:" + c + ";color:" + w + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return b += "position:" + ((g || o) && h ? "fixed;" : "absolute;"), (g || o || !h) && (b += (n === Si ? js : qs) + ":" + (s + parseFloat(p)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = v, f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), f.style.cssText = b, f.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f), f._offset = f["offset" + n.op.d2], ba(f, 0, n, v), f;
    },
    ba = function ba(e, t, r, n) {
      var i = {
          display: "block"
        },
        s = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + ta] = 1, i["border" + a + ta] = 0, i[r.p] = t + "px", Ii.set(e, i);
    },
    ya = [],
    _a = {},
    xa = function xa() {
      return bs() - _s > 34 && (hs || (hs = requestAnimationFrame(Na)));
    },
    Ta = function Ta() {
      (!rs || !rs.isPressed || rs.startX > Gi.clientWidth) && (ui.cache++, rs ? hs || (hs = requestAnimationFrame(Na)) : Na(), _s || ka("scrollStart"), _s = bs());
    },
    Aa = function Aa() {
      ss = Bi.innerWidth, is = Bi.innerHeight;
    },
    Sa = function Sa(e) {
      ui.cache++, (!0 === e || !qi && !ts && !Ri.fullscreenElement && !Ri.webkitFullscreenElement && (!ns || ss !== Bi.innerWidth || Math.abs(Bi.innerHeight - is) > .25 * Bi.innerHeight)) && Yi.restart(!0);
    },
    Ea = {},
    Ca = [],
    Ma = function e() {
      return ua(eo, "scrollEnd", e) || Ra(!0);
    },
    ka = function ka(e) {
      return Ea[e] && Ea[e].map(function (e) {
        return e();
      }) || Ca;
    },
    Pa = [],
    Oa = function Oa(e) {
      for (var t = 0; t < Pa.length; t += 5) (!e || Pa[t + 4] && Pa[t + 4].query === e) && (Pa[t].style.cssText = Pa[t + 1], Pa[t].getBBox && Pa[t].setAttribute("transform", Pa[t + 2] || ""), Pa[t + 3].uncache = 1);
    },
    za = function za(e, t) {
      var r;
      for (Ui = 0; Ui < ya.length; Ui++) !(r = ya[Ui]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
      ps = !0, t && Oa(t), t || ka("revert");
    },
    La = function La(e, t) {
      ui.cache++, (t || !gs) && ui.forEach(function (e) {
        return Fs(e) && e.cacheID++ && (e.rec = 0);
      }), Rs(e) && (Bi.history.scrollRestoration = ls = e);
    },
    Ia = 0,
    Da = function Da() {
      Gi.appendChild(ds), cs = !rs && ds.offsetHeight || Bi.innerHeight, Gi.removeChild(ds);
    },
    Ba = function Ba(e) {
      return Vi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (t) {
        return t.style.display = e ? "none" : "block";
      });
    },
    Ra = function Ra(e, t) {
      if (Fi = Ri.documentElement, Gi = Ri.body, Ni = [Bi, Ri, Fi, Gi], !_s || e || ps) {
        Da(), gs = eo.isRefreshing = !0, ui.forEach(function (e) {
          return Fs(e) && ++e.cacheID && (e.rec = e());
        });
        var r = ka("refreshInit");
        Ji && eo.sort(), t || za(), ui.forEach(function (e) {
          Fs(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
        }), ya.slice(0).forEach(function (e) {
          return e.refresh();
        }), ps = !1, ya.forEach(function (e) {
          if (e._subPinOffset && e.pin) {
            var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
              r = e.pin[t];
            e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
          }
        }), us = 1, Ba(!0), ya.forEach(function (e) {
          var t = Ds(e.scroller, e._dir),
            r = "max" === e.vars.end || e._endClamp && e.end > t,
            n = e._startClamp && e.start >= t;
          (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0);
        }), Ba(!1), us = 0, r.forEach(function (e) {
          return e && e.render && e.render(-1);
        }), ui.forEach(function (e) {
          Fs(e) && (e.smooth && requestAnimationFrame(function () {
            return e.target.style.scrollBehavior = "smooth";
          }), e.rec && e(e.rec));
        }), La(ls, 1), Yi.pause(), Ia++, gs = 2, Na(2), ya.forEach(function (e) {
          return Fs(e.vars.onRefresh) && e.vars.onRefresh(e);
        }), gs = eo.isRefreshing = !1, ka("refresh");
      } else pa(eo, "scrollEnd", Ma);
    },
    Fa = 0,
    Ga = 1,
    Na = function Na(e) {
      if (2 === e || !gs && !ps) {
        eo.isUpdating = !0, vs && vs.update(0);
        var t = ya.length,
          r = bs(),
          n = r - ys >= 50,
          i = t && ya[0].scroll();
        if (Ga = Fa > i ? -1 : 1, gs || (Fa = i), n && (_s && !Xi && r - _s > 200 && (_s = 0, ka("scrollEnd")), $i = ys, ys = r), Ga < 0) {
          for (Ui = t; Ui-- > 0;) ya[Ui] && ya[Ui].update(0, n);
          Ga = 1;
        } else for (Ui = 0; Ui < t; Ui++) ya[Ui] && ya[Ui].update(0, n);
        eo.isUpdating = !1;
      }
      hs = 0;
    },
    Ya = [$s, "top", qs, js, ea + Ks, ea + Us, ea + Zs, ea + Qs, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Va = Ya.concat([Xs, Ws, "boxSizing", "max" + ta, "max" + ra, "position", ea, Js, Js + Zs, Js + Us, Js + Ks, Js + Qs]),
    Ha = function Ha(e, t, r, n) {
      if (!e._gsap.swappedIn) {
        for (var i, s = Ya.length, a = t.style, o = e.style; s--;) a[i = Ya[s]] = r[i];
        a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o[qs] = o[js] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Xs] = oa(e, Ai) + na, a[Ws] = oa(e, Si) + na, a[Js] = o[ea] = o.top = o[$s] = "0", ja(n), o[Xs] = o["max" + ta] = r[Xs], o[Ws] = o["max" + ra] = r[Ws], o[Js] = r[Js], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
      }
    },
    $a = /([A-Z])/g,
    ja = function ja(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          s = 0;
        for ((e.t._gsap || Ii.core.getCache(e.t)).uncache = 1; s < i; s += 2) r = e[s + 1], t = e[s], r ? n[t] = r : n[t] && n.removeProperty(t.replace($a, "-$1").toLowerCase());
      }
    },
    qa = function qa(e) {
      for (var t = Va.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Va[i], r[Va[i]]);
      return n.t = e, n;
    },
    Xa = {
      left: 0,
      top: 0
    },
    Wa = function Wa(e, t, r, n, i, s, a, o, l, d, c, p, u, f) {
      Fs(e) && (e = e(o)), Rs(e) && "max" === e.substr(0, 3) && (e = p + ("=" === e.charAt(4) ? va("0" + e.substr(3), r) : 0));
      var h,
        g,
        m,
        v = u ? u.time() : 0;
      if (u && u.seek(0), isNaN(e) || (e = +e), Gs(e)) u && (e = Ii.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, p, e)), a && ba(a, r, n, !0);else {
        Fs(t) && (t = t(o));
        var w,
          b,
          y,
          _,
          x = (e || "0").split(" ");
        m = Ei(t, o) || Gi, (w = aa(m) || {}) && (w.left || w.top) || "none" !== ia(m).display || (_ = m.style.display, m.style.display = "block", w = aa(m), _ ? m.style.display = _ : m.style.removeProperty("display")), b = va(x[0], w[n.d]), y = va(x[1] || "0", r), e = w[n.p] - l[n.p] - d + b + i - y, a && ba(a, y, n, r - y < 20 || a._isStart && y > 20), r -= r - y;
      }
      if (f && (o[f] = e || -.001, e < 0 && (e = 0)), s) {
        var T = e + r,
          A = s._isStart;
        h = "scroll" + n.d2, ba(s, T, n, A && T > 20 || !A && (c ? Math.max(Gi[h], Fi[h]) : s.parentNode[h]) <= T + 1), c && (l = aa(a), c && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + na));
      }
      return u && m && (h = aa(m), u.seek(p), g = aa(m), u._caScrollDist = h[n.p] - g[n.p], e = e / u._caScrollDist * p), u && u.seek(v), u ? e : Math.round(e);
    },
    Ua = /(webkit|moz|length|cssText|inset)/i,
    Qa = function Qa(e, t, r, n) {
      if (e.parentNode !== t) {
        var i,
          s,
          a = e.style;
        if (t === Gi) {
          for (i in e._stOrig = a.cssText, s = ia(e)) +i || Ua.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
          a.top = r, a.left = n;
        } else a.cssText = e._stOrig;
        Ii.core.getCache(e).uncache = 1, t.appendChild(e);
      }
    },
    Za = function Za(e, t, r) {
      var n = t,
        i = n;
      return function (t) {
        var s = Math.round(e());
        return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (t = s, r && r()), i = n, n = Math.round(t);
      };
    },
    Ka = function Ka(e, t, r) {
      var n = {};
      n[t.p] = "+=" + r, Ii.set(e, n);
    },
    Ja = function Ja(e, t) {
      var r = Ci(e, t),
        n = "_scroll" + t.p2,
        i = function t(i, s, a, o, l) {
          var d = t.tween,
            c = s.onComplete,
            p = {};
          a = a || r();
          var u = Za(r, a, function () {
            d.kill(), t.tween = 0;
          });
          return l = o && l || 0, o = o || i - a, d && d.kill(), s[n] = i, s.inherit = !1, s.modifiers = p, p[n] = function () {
            return u(a + o * d.ratio + l * d.ratio * d.ratio);
          }, s.onUpdate = function () {
            ui.cache++, t.tween && Na();
          }, s.onComplete = function () {
            t.tween = 0, c && c.call(d);
          }, d = t.tween = Ii.to(e, s);
        };
      return e[n] = r, r.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }, pa(e, "wheel", r.wheelHandler), eo.isTouch && pa(e, "touchmove", r.wheelHandler), i;
    },
    eo = function () {
      function e(t, r) {
        Di || e.register(Ii) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), os(this), this.init(t, r);
      }
      return e.prototype.init = function (t, r) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), xs) {
          var n,
            i,
            s,
            a,
            o,
            l,
            d,
            c,
            p,
            u,
            f,
            h,
            g,
            m,
            v,
            w,
            b,
            y,
            _,
            x,
            T,
            A,
            S,
            E,
            C,
            M,
            k,
            P,
            O,
            z,
            L,
            I,
            D,
            B,
            R,
            F,
            G,
            N,
            Y,
            V,
            H,
            $,
            j = t = sa(Rs(t) || Gs(t) || t.nodeType ? {
              trigger: t
            } : t, ga),
            q = j.onUpdate,
            X = j.toggleClass,
            W = j.id,
            U = j.onToggle,
            Q = j.onRefresh,
            Z = j.scrub,
            K = j.trigger,
            J = j.pin,
            ee = j.pinSpacing,
            te = j.invalidateOnRefresh,
            re = j.anticipatePin,
            ne = j.onScrubComplete,
            ie = j.onSnapComplete,
            se = j.once,
            ae = j.snap,
            oe = j.pinReparent,
            le = j.pinSpacer,
            de = j.containerAnimation,
            ce = j.fastScrollEnd,
            pe = j.preventOverlaps,
            ue = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? Ai : Si,
            fe = !Z && 0 !== Z,
            he = Ei(t.scroller || Bi),
            ge = Ii.core.getCache(he),
            me = zs(he),
            ve = "fixed" === ("pinType" in t ? t.pinType : mi(he, "pinType") || me && "fixed"),
            we = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
            be = fe && t.toggleActions.split(" "),
            ye = "markers" in t ? t.markers : ga.markers,
            _e = me ? 0 : parseFloat(ia(he)["border" + ue.p2 + ta]) || 0,
            xe = this,
            Te = t.onRefreshInit && function () {
              return t.onRefreshInit(xe);
            },
            Ae = function (e, t, r) {
              var n = r.d,
                i = r.d2,
                s = r.a;
              return (s = mi(e, "getBoundingClientRect")) ? function () {
                return s()[n];
              } : function () {
                return (t ? Ls(i) : e["client" + i]) || 0;
              };
            }(he, me, ue),
            Se = function (e, t) {
              return !t || ~fi.indexOf(e) ? Is(e) : function () {
                return Xa;
              };
            }(he, me),
            Ee = 0,
            Ce = 0,
            Me = 0,
            ke = Ci(he, ue);
          if (xe._startClamp = xe._endClamp = !1, xe._dir = ue, re *= 45, xe.scroller = he, xe.scroll = de ? de.time.bind(de) : ke, a = ke(), xe.vars = t, r = r || t.animation, "refreshPriority" in t && (Ji = 1, -9999 === t.refreshPriority && (vs = xe)), ge.tweenScroll = ge.tweenScroll || {
            top: Ja(he, Si),
            left: Ja(he, Ai)
          }, xe.tweenTo = n = ge.tweenScroll[ue.p], xe.scrubDuration = function (e) {
            (D = Gs(e) && e) ? I ? I.duration(e) : I = Ii.to(r, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: !1,
              duration: D,
              paused: !0,
              onComplete: function onComplete() {
                return ne && ne(xe);
              }
            }) : (I && I.progress(1).kill(), I = 0);
          }, r && (r.vars.lazy = !1, r._initted && !xe.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), xe.animation = r.pause(), r.scrollTrigger = xe, xe.scrubDuration(Z), z = 0, W || (W = r.vars.id)), ae && (Ns(ae) && !ae.push || (ae = {
            snapTo: ae
          }), "scrollBehavior" in Gi.style && Ii.set(me ? [Gi, Fi] : he, {
            scrollBehavior: "auto"
          }), ui.forEach(function (e) {
            return Fs(e) && e.target === (me ? Ri.scrollingElement || Fi : he) && (e.smooth = !1);
          }), s = Fs(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? function (e) {
            return function (t) {
              return Ii.utils.snap(la(e), t);
            };
          }(r) : "labelsDirectional" === ae.snapTo ? (V = r, function (e, t) {
            return da(la(V))(e, t.direction);
          }) : !1 !== ae.directional ? function (e, t) {
            return da(ae.snapTo)(e, bs() - Ce < 500 ? 0 : t.direction);
          } : Ii.utils.snap(ae.snapTo), B = ae.duration || {
            min: .1,
            max: 2
          }, B = Ns(B) ? Hi(B.min, B.max) : Hi(B, B), R = Ii.delayedCall(ae.delay || D / 2 || .1, function () {
            var e = ke(),
              t = bs() - Ce < 500,
              i = n.tween;
            if (!(t || Math.abs(xe.getVelocity()) < 10) || i || Xi || Ee === e) xe.isActive && Ee !== e && R.restart(!0);else {
              var a,
                o,
                c = (e - l) / m,
                p = r && !fe ? r.totalProgress() : c,
                u = t ? 0 : (p - L) / (bs() - $i) * 1e3 || 0,
                f = Ii.utils.clamp(-c, 1 - c, Hs(u / 2) * u / .185),
                h = c + (!1 === ae.inertia ? 0 : f),
                g = ae,
                v = g.onStart,
                w = g.onInterrupt,
                b = g.onComplete;
              if (a = s(h, xe), Gs(a) || (a = h), o = Math.max(0, Math.round(l + a * m)), e <= d && e >= l && o !== e) {
                if (i && !i._initted && i.data <= Hs(o - e)) return;
                !1 === ae.inertia && (f = a - c), n(o, {
                  duration: B(Hs(.185 * Math.max(Hs(h - p), Hs(a - p)) / u / .05 || 0)),
                  ease: ae.ease || "power3",
                  data: Hs(o - e),
                  onInterrupt: function onInterrupt() {
                    return R.restart(!0) && w && w(xe);
                  },
                  onComplete: function onComplete() {
                    xe.update(), Ee = ke(), r && !fe && (I ? I.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), z = L = r && !fe ? r.totalProgress() : xe.progress, ie && ie(xe), b && b(xe);
                  }
                }, e, f * m, o - e - f * m), v && v(xe, n.tween);
              }
            }
          }).pause()), W && (_a[W] = xe), (Y = (K = xe.trigger = Ei(K || !0 !== J && J)) && K._gsap && K._gsap.stRevert) && (Y = Y(xe)), J = !0 === J ? K : Ei(J), Rs(X) && (X = {
            targets: K,
            className: X
          }), J && (!1 === ee || ee === ea || (ee = !(!ee && J.parentNode && J.parentNode.style && "flex" === ia(J.parentNode).display) && Js), xe.pin = J, (i = Ii.core.getCache(J)).spacer ? v = i.pinState : (le && ((le = Ei(le)) && !le.nodeType && (le = le.current || le.nativeElement), i.spacerIsNative = !!le, le && (i.spacerState = qa(le))), i.spacer = y = le || Ri.createElement("div"), y.classList.add("pin-spacer"), W && y.classList.add("pin-spacer-" + W), i.pinState = v = qa(J)), !1 !== t.force3D && Ii.set(J, {
            force3D: !0
          }), xe.spacer = y = i.spacer, O = ia(J), E = O[ee + ue.os2], x = Ii.getProperty(J), T = Ii.quickSetter(J, ue.a, na), Ha(J, y, O), b = qa(J)), ye) {
            h = Ns(ye) ? sa(ye, ha) : ha, u = wa("scroller-start", W, he, ue, h, 0), f = wa("scroller-end", W, he, ue, h, 0, u), _ = u["offset" + ue.op.d2];
            var Pe = Ei(mi(he, "content") || he);
            c = this.markerStart = wa("start", W, Pe, ue, h, _, 0, de), p = this.markerEnd = wa("end", W, Pe, ue, h, _, 0, de), de && (N = Ii.quickSetter([c, p], ue.a, na)), ve || fi.length && !0 === mi(he, "fixedMarkers") || ($ = ia(H = me ? Gi : he).position, H.style.position = "absolute" === $ || "fixed" === $ ? $ : "relative", Ii.set([u, f], {
              force3D: !0
            }), M = Ii.quickSetter(u, ue.a, na), P = Ii.quickSetter(f, ue.a, na));
          }
          if (de) {
            var Oe = de.vars.onUpdate,
              ze = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              xe.update(0, 0, 1), Oe && Oe.apply(de, ze || []);
            });
          }
          if (xe.previous = function () {
            return ya[ya.indexOf(xe) - 1];
          }, xe.next = function () {
            return ya[ya.indexOf(xe) + 1];
          }, xe.revert = function (e, t) {
            if (!t) return xe.kill(!0);
            var n = !1 !== e || !xe.enabled,
              i = qi;
            n !== xe.isReverted && (n && (F = Math.max(ke(), xe.scroll.rec || 0), Me = xe.progress, G = r && r.progress()), c && [c, p, u, f].forEach(function (e) {
              return e.style.display = n ? "none" : "block";
            }), n && (qi = xe, xe.update(n)), !J || oe && xe.isActive || (n ? function (e, t, r) {
              ja(r);
              var n = e._gsap;
              if (n.spacerIsNative) ja(n.spacerState);else if (e._gsap.swappedIn) {
                var i = t.parentNode;
                i && (i.insertBefore(e, t), i.removeChild(t));
              }
              e._gsap.swappedIn = !1;
            }(J, y, v) : Ha(J, y, ia(J), C)), n || xe.update(n), qi = i, xe.isReverted = n);
          }, xe.refresh = function (i, s, h, _) {
            if (!qi && xe.enabled || s) if (J && i && _s) pa(e, "scrollEnd", Ma);else {
              !gs && Te && Te(xe), qi = xe, n.tween && !h && (n.tween.kill(), n.tween = 0), I && I.pause(), te && r && r.revert({
                kill: !1
              }).invalidate(), xe.isReverted || xe.revert(!0, !0), xe._subPinOffset = !1;
              var T,
                E,
                M,
                P,
                O,
                z,
                L,
                D,
                B,
                N,
                Y,
                V,
                H,
                $ = Ae(),
                j = Se(),
                q = de ? de.duration() : Ds(he, ue),
                X = m <= .01,
                W = 0,
                U = _ || 0,
                Z = Ns(h) ? h.end : t.end,
                re = t.endTrigger || K,
                ne = Ns(h) ? h.start : t.start || (0 !== t.start && K ? J ? "0 0" : "0 100%" : 0),
                ie = xe.pinnedContainer = t.pinnedContainer && Ei(t.pinnedContainer, xe),
                se = K && Math.max(0, ya.indexOf(xe)) || 0,
                ae = se;
              for (ye && Ns(h) && (V = Ii.getProperty(u, ue.p), H = Ii.getProperty(f, ue.p)); ae-- > 0;) (z = ya[ae]).end || z.refresh(0, 1) || (qi = xe), !(L = z.pin) || L !== K && L !== J && L !== ie || z.isReverted || (N || (N = []), N.unshift(z), z.revert(!0, !0)), z !== ya[ae] && (se--, ae--);
              for (Fs(ne) && (ne = ne(xe)), ne = Ts(ne, "start", xe), l = Wa(ne, K, $, ue, ke(), c, u, xe, j, _e, ve, q, de, xe._startClamp && "_startClamp") || (J ? -.001 : 0), Fs(Z) && (Z = Z(xe)), Rs(Z) && !Z.indexOf("+=") && (~Z.indexOf(" ") ? Z = (Rs(ne) ? ne.split(" ")[0] : "") + Z : (W = va(Z.substr(2), $), Z = Rs(ne) ? ne : (de ? Ii.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, l) : l) + W, re = K)), Z = Ts(Z, "end", xe), d = Math.max(l, Wa(Z || (re ? "100% 0" : q), re, $, ue, ke() + W, p, f, xe, j, _e, ve, q, de, xe._endClamp && "_endClamp")) || -.001, W = 0, ae = se; ae--;) (L = (z = ya[ae]).pin) && z.start - z._pinPush <= l && !de && z.end > 0 && (T = z.end - (xe._startClamp ? Math.max(0, z.start) : z.start), (L === K && z.start - z._pinPush < l || L === ie) && isNaN(ne) && (W += T * (1 - z.progress)), L === J && (U += T));
              if (l += W, d += W, xe._startClamp && (xe._startClamp += W), xe._endClamp && !gs && (xe._endClamp = d || -.001, d = Math.min(d, Ds(he, ue))), m = d - l || (l -= .01) && .001, X && (Me = Ii.utils.clamp(0, 1, Ii.utils.normalize(l, d, F))), xe._pinPush = U, c && W && ((T = {})[ue.a] = "+=" + W, ie && (T[ue.p] = "-=" + ke()), Ii.set([c, p], T)), !J || us && xe.end >= Ds(he, ue)) {
                if (K && ke() && !de) for (E = K.parentNode; E && E !== Gi;) E._pinOffset && (l -= E._pinOffset, d -= E._pinOffset), E = E.parentNode;
              } else T = ia(J), P = ue === Si, M = ke(), A = parseFloat(x(ue.a)) + U, !q && d > 1 && (Y = {
                style: Y = (me ? Ri.scrollingElement || Fi : he).style,
                value: Y["overflow" + ue.a.toUpperCase()]
              }, me && "scroll" !== ia(Gi)["overflow" + ue.a.toUpperCase()] && (Y.style["overflow" + ue.a.toUpperCase()] = "scroll")), Ha(J, y, T), b = qa(J), E = aa(J, !0), D = ve && Ci(he, P ? Ai : Si)(), ee ? ((C = [ee + ue.os2, m + U + na]).t = y, (ae = ee === Js ? oa(J, ue) + m + U : 0) && (C.push(ue.d, ae + na), "auto" !== y.style.flexBasis && (y.style.flexBasis = ae + na)), ja(C), ie && ya.forEach(function (e) {
                e.pin === ie && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
              }), ve && ke(F)) : (ae = oa(J, ue)) && "auto" !== y.style.flexBasis && (y.style.flexBasis = ae + na), ve && ((O = {
                top: E.top + (P ? M - l : D) + na,
                left: E.left + (P ? D : M - l) + na,
                boxSizing: "border-box",
                position: "fixed"
              })[Xs] = O["max" + ta] = Math.ceil(E.width) + na, O[Ws] = O["max" + ra] = Math.ceil(E.height) + na, O[ea] = O[ea + Zs] = O[ea + Us] = O[ea + Ks] = O[ea + Qs] = "0", O[Js] = T[Js], O[Js + Zs] = T[Js + Zs], O[Js + Us] = T[Js + Us], O[Js + Ks] = T[Js + Ks], O[Js + Qs] = T[Js + Qs], w = function (e, t, r) {
                for (var n, i = [], s = e.length, a = r ? 8 : 0; a < s; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                return i.t = e.t, i;
              }(v, O, oe), gs && ke(0)), r ? (B = r._initted, es(1), r.render(r.duration(), !0, !0), S = x(ue.a) - A + m + U, k = Math.abs(m - S) > 1, ve && k && w.splice(w.length - 2, 2), r.render(0, !0, !0), B || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), es(0)) : S = m, Y && (Y.value ? Y.style["overflow" + ue.a.toUpperCase()] = Y.value : Y.style.removeProperty("overflow-" + ue.a));
              N && N.forEach(function (e) {
                return e.revert(!1, !0);
              }), xe.start = l, xe.end = d, a = o = gs ? F : ke(), de || gs || (a < F && ke(F), xe.scroll.rec = 0), xe.revert(!1, !0), Ce = bs(), R && (Ee = -1, R.restart(!0)), qi = 0, r && fe && (r._initted || G) && r.progress() !== G && r.progress(G || 0, !0).render(r.time(), !0, !0), (X || Me !== xe.progress || de || te || r && !r._initted) && (r && !fe && r.totalProgress(de && l < -.001 && !Me ? Ii.utils.normalize(l, d, 0) : Me, !0), xe.progress = X || (a - l) / m === Me ? 0 : Me), J && ee && (y._pinOffset = Math.round(xe.progress * S)), I && I.invalidate(), isNaN(V) || (V -= Ii.getProperty(u, ue.p), H -= Ii.getProperty(f, ue.p), Ka(u, ue, V), Ka(c, ue, V - (_ || 0)), Ka(f, ue, H), Ka(p, ue, H - (_ || 0))), X && !gs && xe.update(), !Q || gs || g || (g = !0, Q(xe), g = !1);
            }
          }, xe.getVelocity = function () {
            return (ke() - o) / (bs() - $i) * 1e3 || 0;
          }, xe.endAnimation = function () {
            Ys(xe.callbackAnimation), r && (I ? I.progress(1) : r.paused() ? fe || Ys(r, xe.direction < 0, 1) : Ys(r, r.reversed()));
          }, xe.labelToScroll = function (e) {
            return r && r.labels && (l || xe.refresh() || l) + r.labels[e] / r.duration() * m || 0;
          }, xe.getTrailing = function (e) {
            var t = ya.indexOf(xe),
              r = xe.direction > 0 ? ya.slice(0, t).reverse() : ya.slice(t + 1);
            return (Rs(e) ? r.filter(function (t) {
              return t.vars.preventOverlaps === e;
            }) : r).filter(function (e) {
              return xe.direction > 0 ? e.end <= l : e.start >= d;
            });
          }, xe.update = function (e, t, i) {
            if (!de || i || e) {
              var s,
                c,
                p,
                f,
                h,
                g,
                v,
                _ = !0 === gs ? F : xe.scroll(),
                x = e ? 0 : (_ - l) / m,
                C = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                O = xe.progress;
              if (t && (o = a, a = de ? ke() : _, ae && (L = z, z = r && !fe ? r.totalProgress() : C)), re && J && !qi && !ws && _s && (!C && l < _ + (_ - o) / (bs() - $i) * re ? C = 1e-4 : 1 === C && d > _ + (_ - o) / (bs() - $i) * re && (C = .9999)), C !== O && xe.enabled) {
                if (f = (h = (s = xe.isActive = !!C && C < 1) != (!!O && O < 1)) || !!C != !!O, xe.direction = C > O ? 1 : -1, xe.progress = C, f && !qi && (c = C && !O ? 0 : 1 === C ? 1 : 1 === O ? 2 : 3, fe && (p = !h && "none" !== be[c + 1] && be[c + 1] || be[c], v = r && ("complete" === p || "reset" === p || p in r))), pe && (h || v) && (v || Z || !r) && (Fs(pe) ? pe(xe) : xe.getTrailing(pe).forEach(function (e) {
                  return e.endAnimation();
                })), fe || (!I || qi || ws ? r && r.totalProgress(C, !(!qi || !Ce && !e)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", C, r._tTime / r._tDur) : (I.vars.totalProgress = C, I.invalidate().restart()))), J) if (e && ee && (y.style[ee + ue.os2] = E), ve) {
                  if (f) {
                    if (g = !e && C > O && d + 1 > _ && _ + 1 >= Ds(he, ue), oe) if (e || !s && !g) Qa(J, y);else {
                      var D = aa(J, !0),
                        B = _ - l;
                      Qa(J, Gi, D.top + (ue === Si ? B : 0) + na, D.left + (ue === Si ? 0 : B) + na);
                    }
                    ja(s || g ? w : b), k && C < 1 && s || T(A + (1 !== C || g ? 0 : S));
                  }
                } else T(ks(A + S * C));
                ae && !n.tween && !qi && !ws && R.restart(!0), X && (h || se && C && (C < 1 || !fs)) && Vi(X.targets).forEach(function (e) {
                  return e.classList[s || se ? "add" : "remove"](X.className);
                }), q && !fe && !e && q(xe), f && !qi ? (fe && (v && ("complete" === p ? r.pause().totalProgress(1) : "reset" === p ? r.restart(!0).pause() : "restart" === p ? r.restart(!0) : r[p]()), q && q(xe)), !h && fs || (U && h && Vs(xe, U), we[c] && Vs(xe, we[c]), se && (1 === C ? xe.kill(!1, 1) : we[c] = 0), h || we[c = 1 === C ? 1 : 3] && Vs(xe, we[c])), ce && !s && Math.abs(xe.getVelocity()) > (Gs(ce) ? ce : 2500) && (Ys(xe.callbackAnimation), I ? I.progress(1) : Ys(r, "reverse" === p ? 1 : !C, 1))) : fe && q && !qi && q(xe);
              }
              if (P) {
                var G = de ? _ / de.duration() * (de._caScrollDist || 0) : _;
                M(G + (u._isFlipped ? 1 : 0)), P(G);
              }
              N && N(-_ / de.duration() * (de._caScrollDist || 0));
            }
          }, xe.enable = function (t, r) {
            xe.enabled || (xe.enabled = !0, pa(he, "resize", Sa), me || pa(he, "scroll", Ta), Te && pa(e, "refreshInit", Te), !1 !== t && (xe.progress = Me = 0, a = o = Ee = ke()), !1 !== r && xe.refresh());
          }, xe.getTween = function (e) {
            return e && n ? n.tween : I;
          }, xe.setPositions = function (e, t, r, n) {
            if (de) {
              var i = de.scrollTrigger,
                s = de.duration(),
                a = i.end - i.start;
              e = i.start + a * e / s, t = i.start + a * t / s;
            }
            xe.refresh(!1, !1, {
              start: As(e, r && !!xe._startClamp),
              end: As(t, r && !!xe._endClamp)
            }, n), xe.update();
          }, xe.adjustPinSpacing = function (e) {
            if (C && e) {
              var t = C.indexOf(ue.d) + 1;
              C[t] = parseFloat(C[t]) + e + na, C[1] = parseFloat(C[1]) + e + na, ja(C);
            }
          }, xe.disable = function (t, r) {
            if (xe.enabled && (!1 !== t && xe.revert(!0, !0), xe.enabled = xe.isActive = !1, r || I && I.pause(), F = 0, i && (i.uncache = 1), Te && ua(e, "refreshInit", Te), R && (R.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !me)) {
              for (var s = ya.length; s--;) if (ya[s].scroller === he && ya[s] !== xe) return;
              ua(he, "resize", Sa), me || ua(he, "scroll", Ta);
            }
          }, xe.kill = function (e, n) {
            xe.disable(e, n), I && !n && I.kill(), W && delete _a[W];
            var s = ya.indexOf(xe);
            s >= 0 && ya.splice(s, 1), s === Ui && Ga > 0 && Ui--, s = 0, ya.forEach(function (e) {
              return e.scroller === xe.scroller && (s = 1);
            }), s || gs || (xe.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
              kill: !1
            }), n || r.kill()), c && [c, p, u, f].forEach(function (e) {
              return e.parentNode && e.parentNode.removeChild(e);
            }), vs === xe && (vs = 0), J && (i && (i.uncache = 1), s = 0, ya.forEach(function (e) {
              return e.pin === J && s++;
            }), s || (i.spacer = 0)), t.onKill && t.onKill(xe);
          }, ya.push(xe), xe.enable(!1, !1), Y && Y(xe), r && r.add && !m) {
            var Le = xe.update;
            xe.update = function () {
              xe.update = Le, ui.cache++, l || d || xe.refresh();
            }, Ii.delayedCall(.01, xe.update), m = .01, l = d = 0;
          } else xe.refresh();
          J && function () {
            if (ms !== Ia) {
              var e = ms = Ia;
              requestAnimationFrame(function () {
                return e === Ia && Ra(!0);
              });
            }
          }();
        } else this.update = this.refresh = this.kill = Ms;
      }, e.register = function (t) {
        return Di || (Ii = t || Os(), Ps() && window.document && e.enable(), Di = xs), Di;
      }, e.defaults = function (e) {
        if (e) for (var t in e) ga[t] = e[t];
        return ga;
      }, e.disable = function (e, t) {
        xs = 0, ya.forEach(function (r) {
          return r[t ? "kill" : "disable"](e);
        }), ua(Bi, "wheel", Ta), ua(Ri, "scroll", Ta), clearInterval(ji), ua(Ri, "touchcancel", Ms), ua(Gi, "touchstart", Ms), ca(ua, Ri, "pointerdown,touchstart,mousedown", Es), ca(ua, Ri, "pointerup,touchend,mouseup", Cs), Yi.kill(), Bs(ua);
        for (var r = 0; r < ui.length; r += 3) fa(ua, ui[r], ui[r + 1]), fa(ua, ui[r], ui[r + 2]);
      }, e.enable = function () {
        if (Bi = window, Ri = document, Fi = Ri.documentElement, Gi = Ri.body, Ii && (Vi = Ii.utils.toArray, Hi = Ii.utils.clamp, os = Ii.core.context || Ms, es = Ii.core.suppressOverwrites || Ms, ls = Bi.history.scrollRestoration || "auto", Fa = Bi.pageYOffset || 0, Ii.core.globals("ScrollTrigger", e), Gi)) {
          xs = 1, (ds = document.createElement("div")).style.height = "100vh", ds.style.position = "absolute", Da(), Ss(), Li.register(Ii), e.isTouch = Li.isTouch, as = Li.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ns = 1 === Li.isTouch, pa(Bi, "wheel", Ta), Ni = [Bi, Ri, Fi, Gi], Ii.matchMedia ? (e.matchMedia = function (e) {
            var t,
              r = Ii.matchMedia();
            for (t in e) r.add(t, e[t]);
            return r;
          }, Ii.addEventListener("matchMediaInit", function () {
            return za();
          }), Ii.addEventListener("matchMediaRevert", function () {
            return Oa();
          }), Ii.addEventListener("matchMedia", function () {
            Ra(0, 1), ka("matchMedia");
          }), Ii.matchMedia().add("(orientation: portrait)", function () {
            return Aa(), Aa;
          })) : console.warn("Requires GSAP 3.11.0 or later"), Aa(), pa(Ri, "scroll", Ta);
          var t,
            r,
            n = Gi.hasAttribute("style"),
            i = Gi.style,
            s = i.borderTopStyle,
            a = Ii.core.Animation.prototype;
          for (a.revert || Object.defineProperty(a, "revert", {
            value: function value() {
              return this.time(-.01, !0);
            }
          }), i.borderTopStyle = "solid", t = aa(Gi), Si.m = Math.round(t.top + Si.sc()) || 0, Ai.m = Math.round(t.left + Ai.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), n || (Gi.setAttribute("style", ""), Gi.removeAttribute("style")), ji = setInterval(xa, 250), Ii.delayedCall(.5, function () {
            return ws = 0;
          }), pa(Ri, "touchcancel", Ms), pa(Gi, "touchstart", Ms), ca(pa, Ri, "pointerdown,touchstart,mousedown", Es), ca(pa, Ri, "pointerup,touchend,mouseup", Cs), Wi = Ii.utils.checkPrefix("transform"), Va.push(Wi), Di = bs(), Yi = Ii.delayedCall(.2, Ra).pause(), Ki = [Ri, "visibilitychange", function () {
            var e = Bi.innerWidth,
              t = Bi.innerHeight;
            Ri.hidden ? (Qi = e, Zi = t) : Qi === e && Zi === t || Sa();
          }, Ri, "DOMContentLoaded", Ra, Bi, "load", Ra, Bi, "resize", Sa], Bs(pa), ya.forEach(function (e) {
            return e.enable(0, 1);
          }), r = 0; r < ui.length; r += 3) fa(ua, ui[r], ui[r + 1]), fa(ua, ui[r], ui[r + 2]);
        }
      }, e.config = function (t) {
        "limitCallbacks" in t && (fs = !!t.limitCallbacks);
        var r = t.syncInterval;
        r && clearInterval(ji) || (ji = r) && setInterval(xa, r), "ignoreMobileResize" in t && (ns = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Bs(ua) || Bs(pa, t.autoRefreshEvents || "none"), ts = -1 === (t.autoRefreshEvents + "").indexOf("resize"));
      }, e.scrollerProxy = function (e, t) {
        var r = Ei(e),
          n = ui.indexOf(r),
          i = zs(r);
        ~n && ui.splice(n, i ? 6 : 2), t && (i ? fi.unshift(Bi, t, Gi, t, Fi, t) : fi.unshift(r, t));
      }, e.clearMatchMedia = function (e) {
        ya.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }, e.isInViewport = function (e, t, r) {
        var n = (Rs(e) ? Ei(e) : e).getBoundingClientRect(),
          i = n[r ? Xs : Ws] * t || 0;
        return r ? n.right - i > 0 && n.left + i < Bi.innerWidth : n.bottom - i > 0 && n.top + i < Bi.innerHeight;
      }, e.positionInViewport = function (e, t, r) {
        Rs(e) && (e = Ei(e));
        var n = e.getBoundingClientRect(),
          i = n[r ? Xs : Ws],
          s = null == t ? i / 2 : t in ma ? ma[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return r ? (n.left + s) / Bi.innerWidth : (n.top + s) / Bi.innerHeight;
      }, e.killAll = function (e) {
        if (ya.slice(0).forEach(function (e) {
          return "ScrollSmoother" !== e.vars.id && e.kill();
        }), !0 !== e) {
          var t = Ea.killAll || [];
          Ea = {}, t.forEach(function (e) {
            return e();
          });
        }
      }, e;
    }();
  eo.version = "3.12.7", eo.saveStyles = function (e) {
    return e ? Vi(e).forEach(function (e) {
      if (e && e.style) {
        var t = Pa.indexOf(e);
        t >= 0 && Pa.splice(t, 5), Pa.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ii.core.getCache(e), os());
      }
    }) : Pa;
  }, eo.revert = function (e, t) {
    return za(!e, t);
  }, eo.create = function (e, t) {
    return new eo(e, t);
  }, eo.refresh = function (e) {
    return e ? Sa(!0) : (Di || eo.register()) && Ra(!0);
  }, eo.update = function (e) {
    return ++ui.cache && Na(!0 === e ? 2 : 0);
  }, eo.clearScrollMemory = La, eo.maxScroll = function (e, t) {
    return Ds(e, t ? Ai : Si);
  }, eo.getScrollFunc = function (e, t) {
    return Ci(Ei(e), t ? Ai : Si);
  }, eo.getById = function (e) {
    return _a[e];
  }, eo.getAll = function () {
    return ya.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }, eo.isScrolling = function () {
    return !!_s;
  }, eo.snapDirectional = da, eo.addEventListener = function (e, t) {
    var r = Ea[e] || (Ea[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, eo.removeEventListener = function (e, t) {
    var r = Ea[e],
      n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  }, eo.batch = function (e, t) {
    var r,
      n = [],
      i = {},
      s = t.interval || .016,
      a = t.batchMax || 1e9,
      o = function o(e, t) {
        var r = [],
          n = [],
          i = Ii.delayedCall(s, function () {
            t(r, n), r = [], n = [];
          }).pause();
        return function (e) {
          r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1);
        };
      };
    for (r in t) i[r] = "on" === r.substr(0, 2) && Fs(t[r]) && "onRefreshInit" !== r ? o(0, t[r]) : t[r];
    return Fs(a) && (a = a(), pa(eo, "refresh", function () {
      return a = t.batchMax();
    })), Vi(e).forEach(function (e) {
      var t = {};
      for (r in i) t[r] = i[r];
      t.trigger = e, n.push(eo.create(t));
    }), n;
  };
  var to,
    ro = function ro(e, t, r, n) {
      return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
    },
    no = function e(t, r) {
      !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Li.isTouch ? " pinch-zoom" : "") : "none", t === Fi && e(Gi, r);
    },
    io = {
      auto: 1,
      scroll: 1
    },
    so = function so(e) {
      var t,
        r = e.event,
        n = e.target,
        i = e.axis,
        s = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = s._gsap || Ii.core.getCache(s),
        o = bs();
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; s && s !== Gi && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !io[(t = ia(s)).overflowY] && !io[t.overflowX]);) s = s.parentNode;
        a._isScroll = s && s !== n && !zs(s) && (io[(t = ia(s)).overflowY] || io[t.overflowX]), a._isScrollT = o;
      }
      (a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0);
    },
    ao = function ao(e, t, r, n) {
      return Li.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: n = n && so,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function onEnable() {
          return r && pa(Ri, Li.eventTypes[0], lo, !1, !0);
        },
        onDisable: function onDisable() {
          return ua(Ri, Li.eventTypes[0], lo, !0);
        }
      });
    },
    oo = /(input|label|select|textarea)/i,
    lo = function lo(e) {
      var t = oo.test(e.target.tagName);
      (t || to) && (e._gsapAllow = !0, to = t);
    };
  function co(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }
  function po(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {});
    var r = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(function (e) {
      return r.indexOf(e) < 0;
    }).forEach(function (r) {
      void 0 === e[r] ? e[r] = t[r] : co(t[r]) && co(e[r]) && Object.keys(t[r]).length > 0 && po(e[r], t[r]);
    });
  }
  eo.sort = function (e) {
    if (Fs(e)) return ya.sort(e);
    var t = Bi.pageYOffset || 0;
    return eo.getAll().forEach(function (e) {
      return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Bi.innerHeight;
    }), ya.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, eo.observe = function (e) {
    return new Li(e);
  }, eo.normalizeScroll = function (e) {
    if (void 0 === e) return rs;
    if (!0 === e && rs) return rs.enable();
    if (!1 === e) return rs && rs.kill(), void (rs = e);
    var t = e instanceof Li ? e : function (e) {
      Ns(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
      var t,
        r,
        n,
        i,
        s,
        a,
        o,
        l,
        d = e,
        c = d.normalizeScrollX,
        p = d.momentum,
        u = d.allowNestedScroll,
        f = d.onRelease,
        h = Ei(e.target) || Fi,
        g = Ii.core.globals().ScrollSmoother,
        m = g && g.get(),
        v = as && (e.content && Ei(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
        w = Ci(h, Si),
        b = Ci(h, Ai),
        y = 1,
        _ = (Li.isTouch && Bi.visualViewport ? Bi.visualViewport.scale * Bi.visualViewport.width : Bi.outerWidth) / Bi.innerWidth,
        x = 0,
        T = Fs(p) ? function () {
          return p(t);
        } : function () {
          return p || 2.8;
        },
        A = ao(h, e.type, !0, u),
        S = function S() {
          return i = !1;
        },
        E = Ms,
        C = Ms,
        M = function M() {
          r = Ds(h, Si), C = Hi(as ? 1 : 0, r), c && (E = Hi(0, Ds(h, Ai))), n = Ia;
        },
        k = function k() {
          v._gsap.y = ks(parseFloat(v._gsap.y) + w.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", w.offset = w.cacheID = 0;
        },
        P = function P() {
          M(), s.isActive() && s.vars.scrollY > r && (w() > r ? s.progress(1) && w(r) : s.resetTo("scrollY", r));
        };
      return v && Ii.set(v, {
        y: "+=0"
      }), e.ignoreCheck = function (e) {
        return as && "touchmove" === e.type && function () {
          if (i) {
            requestAnimationFrame(S);
            var e = ks(t.deltaY / 2),
              r = C(w.v - e);
            if (v && r !== w.v + w.offset) {
              w.offset = r - w.v;
              var n = ks((parseFloat(v && v._gsap.y) || 0) - w.offset);
              v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", v._gsap.y = n + "px", w.cacheID = ui.cache, Na();
            }
            return !0;
          }
          w.offset && k(), i = !0;
        }() || y > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1;
      }, e.onPress = function () {
        i = !1;
        var e = y;
        y = ks((Bi.visualViewport && Bi.visualViewport.scale || 1) / _), s.pause(), e !== y && no(h, y > 1.01 || !c && "x"), a = b(), o = w(), M(), n = Ia;
      }, e.onRelease = e.onGestureStart = function (e, t) {
        if (w.offset && k(), t) {
          ui.cache++;
          var n,
            i,
            a = T();
          c && (i = (n = b()) + .05 * a * -e.velocityX / .227, a *= ro(b, n, i, Ds(h, Ai)), s.vars.scrollX = E(i)), i = (n = w()) + .05 * a * -e.velocityY / .227, a *= ro(w, n, i, Ds(h, Si)), s.vars.scrollY = C(i), s.invalidate().duration(a).play(.01), (as && s.vars.scrollY >= r || n >= r - 1) && Ii.to({}, {
            onUpdate: P,
            duration: a
          });
        } else l.restart(!0);
        f && f(e);
      }, e.onWheel = function () {
        s._ts && s.pause(), bs() - x > 1e3 && (n = 0, x = bs());
      }, e.onChange = function (e, t, r, i, s) {
        if (Ia !== n && M(), t && c && b(E(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), r) {
          w.offset && k();
          var l = s[2] === r,
            d = l ? o + e.startY - e.y : w() + r - s[1],
            p = C(d);
          l && d !== p && (o += p - d), w(p);
        }
        (r || t) && Na();
      }, e.onEnable = function () {
        no(h, !c && "x"), eo.addEventListener("refresh", P), pa(Bi, "resize", P), w.smooth && (w.target.style.scrollBehavior = "auto", w.smooth = b.smooth = !1), A.enable();
      }, e.onDisable = function () {
        no(h, !0), ua(Bi, "resize", P), eo.removeEventListener("refresh", P), A.kill();
      }, e.lockAxis = !1 !== e.lockAxis, (t = new Li(e)).iOS = as, as && !w() && w(1), as && Ii.ticker.add(Ms), l = t._dc, s = Ii.to(t, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: c ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Za(w, w(), function () {
            return s.pause();
          })
        },
        onUpdate: Na,
        onComplete: l.vars.onComplete
      }), t;
    }(e);
    return rs && rs.target === t.target && rs.kill(), zs(t.target) && (rs = t), t;
  }, eo.core = {
    _getVelocityProp: Mi,
    _inputObserver: ao,
    _scrollers: ui,
    _proxies: fi,
    bridge: {
      ss: function ss() {
        _s || ka("scrollStart"), _s = bs();
      },
      ref: function ref() {
        return qi;
      }
    }
  }, Os() && Ii.registerPlugin(eo);
  var uo = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function fo() {
    var e = "undefined" != typeof document ? document : {};
    return po(e, uo), e;
  }
  var ho = {
    document: uo,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function go() {
    var e = "undefined" != typeof window ? window : {};
    return po(e, ho), e;
  }
  function mo(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function vo() {
    return Date.now();
  }
  function wo(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function bo() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (var _n2 = 1; _n2 < arguments.length; _n2 += 1) {
      var _i2 = _n2 < 0 || arguments.length <= _n2 ? void 0 : arguments[_n2];
      if (null != _i2 && (r = _i2, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
        var _r2 = Object.keys(Object(_i2)).filter(function (e) {
          return t.indexOf(e) < 0;
        });
        for (var _t2 = 0, _n3 = _r2.length; _t2 < _n3; _t2 += 1) {
          var _n4 = _r2[_t2],
            _s2 = Object.getOwnPropertyDescriptor(_i2, _n4);
          void 0 !== _s2 && _s2.enumerable && (wo(e[_n4]) && wo(_i2[_n4]) ? _i2[_n4].__swiper__ ? e[_n4] = _i2[_n4] : bo(e[_n4], _i2[_n4]) : !wo(e[_n4]) && wo(_i2[_n4]) ? (e[_n4] = {}, _i2[_n4].__swiper__ ? e[_n4] = _i2[_n4] : bo(e[_n4], _i2[_n4])) : e[_n4] = _i2[_n4]);
        }
      }
    }
    var r;
    return e;
  }
  function yo(e, t, r) {
    e.style.setProperty(t, r);
  }
  function _o(e) {
    var t = e.swiper,
      r = e.targetPosition,
      n = e.side;
    var i = go(),
      s = -t.translate;
    var a,
      o = null;
    var l = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    var d = r > s ? "next" : "prev",
      c = function c(e, t) {
        return "next" === d && e >= t || "prev" === d && e <= t;
      },
      _p = function p() {
        a = new Date().getTime(), null === o && (o = a);
        var e = Math.max(Math.min((a - o) / l, 1), 0),
          d = .5 - Math.cos(e * Math.PI) / 2;
        var u = s + d * (r - s);
        if (c(u, r) && (u = r), t.wrapperEl.scrollTo(_defineProperty({}, n, u)), c(u, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, n, u));
        }), void i.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = i.requestAnimationFrame(_p);
      };
    _p();
  }
  function xo(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
  }
  function To(e, t) {
    void 0 === t && (t = "");
    var r = go(),
      n = _toConsumableArray(e.children);
    return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push.apply(n, _toConsumableArray(e.assignedElements())), t ? n.filter(function (e) {
      return e.matches(t);
    }) : n;
  }
  function Ao(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function So(e, t) {
    var _r$classList;
    void 0 === t && (t = []);
    var r = document.createElement(e);
    return (_r$classList = r.classList).add.apply(_r$classList, _toConsumableArray(Array.isArray(t) ? t : function (e) {
      return void 0 === e && (e = ""), e.trim().split(" ").filter(function (e) {
        return !!e.trim();
      });
    }(t))), r;
  }
  function Eo(e, t) {
    return go().getComputedStyle(e, null).getPropertyValue(t);
  }
  function Co(e) {
    var t,
      r = e;
    if (r) {
      for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
      return t;
    }
  }
  function Mo(e, t) {
    var r = [];
    var n = e.parentElement;
    for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
    return r;
  }
  function ko(e, t, r) {
    var n = go();
    return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  function Po(e) {
    return (Array.isArray(e) ? e : [e]).filter(function (e) {
      return !!e;
    });
  }
  var Oo, zo, Lo;
  function Io() {
    return Oo || (Oo = function () {
      var e = go(),
        t = fo();
      return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), Oo;
  }
  function Do(e) {
    return void 0 === e && (e = {}), zo || (zo = function (e) {
      var _ref = void 0 === e ? {} : e,
        t = _ref.userAgent;
      var r = Io(),
        n = go(),
        i = n.navigator.platform,
        s = t || n.navigator.userAgent,
        a = {
          ios: !1,
          android: !1
        },
        o = n.screen.width,
        l = n.screen.height,
        d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
      var c = s.match(/(iPad).*OS\s([\d_]+)/);
      var p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        f = "Win32" === i;
      var h = "MacIntel" === i;
      return !c && h && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(l)) >= 0 && (c = s.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), d && !f && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a;
    }(e)), zo;
  }
  function Bo() {
    return Lo || (Lo = function () {
      var e = go(),
        t = Do();
      var r = !1;
      function n() {
        var t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }
      if (n()) {
        var _t3 = String(e.navigator.userAgent);
        if (_t3.includes("Version/")) {
          var _t3$split$1$split$0$s = _t3.split("Version/")[1].split(" ")[0].split(".").map(function (e) {
              return Number(e);
            }),
            _t3$split$1$split$0$s2 = _slicedToArray(_t3$split$1$split$0$s, 2),
            _e2 = _t3$split$1$split$0$s2[0],
            _n5 = _t3$split$1$split$0$s2[1];
          r = _e2 < 16 || 16 === _e2 && _n5 < 2;
        }
      }
      var i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        s = n();
      return {
        isSafari: r || s,
        needPerspectiveFix: r,
        need3dFix: s || i && t.ios,
        isWebView: i
      };
    }()), Lo;
  }
  var Ro = {
    on: function on(e, t, r) {
      var n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ("function" != typeof t) return n;
      var i = r ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t);
      }), n;
    },
    once: function once(e, t, r) {
      var n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ("function" != typeof t) return n;
      function i() {
        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
        t.apply(n, s);
      }
      return i.__emitterProxy = t, n.on(e, i, r);
    },
    onAny: function onAny(e, t) {
      var r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ("function" != typeof e) return r;
      var n = t ? "unshift" : "push";
      return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var r = t.eventsAnyListeners.indexOf(e);
      return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
    },
    off: function off(e, t) {
      var r = this;
      return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(function (n, i) {
          (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1);
        });
      }), r) : r;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, r, n;
      for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
      return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), n = e) : (t = s[0].events, r = s[0].data, n = s[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(n, [t].concat(_toConsumableArray(r)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(n, r);
        });
      }), e;
    }
  };
  var Fo = function Fo(e, t, r) {
      t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
    },
    Go = function Go(e, t, r) {
      t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
    },
    No = function No(e, t) {
      if (!e || e.destroyed || !e.params) return;
      var r = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
      if (r) {
        var _t4 = r.querySelector(".".concat(e.params.lazyPreloaderClass));
        !_t4 && e.isElement && (r.shadowRoot ? _t4 = r.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame(function () {
          r.shadowRoot && (_t4 = r.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)), _t4 && _t4.remove());
        })), _t4 && _t4.remove();
      }
    },
    Yo = function Yo(e, t) {
      if (!e.slides[t]) return;
      var r = e.slides[t].querySelector('[loading="lazy"]');
      r && r.removeAttribute("loading");
    },
    Vo = function Vo(e) {
      if (!e || e.destroyed || !e.params) return;
      var t = e.params.lazyPreloadPrevNext;
      var r = e.slides.length;
      if (!r || !t || t < 0) return;
      t = Math.min(t, r);
      var n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        var _r3 = i,
          _s3 = [_r3 - t];
        return _s3.push.apply(_s3, _toConsumableArray(Array.from({
          length: t
        }).map(function (e, t) {
          return _r3 + n + t;
        }))), void e.slides.forEach(function (t, r) {
          _s3.includes(t.column) && Yo(e, r);
        });
      }
      var s = i + n - 1;
      if (e.params.rewind || e.params.loop) for (var _n6 = i - t; _n6 <= s + t; _n6 += 1) {
        var _t5 = (_n6 % r + r) % r;
        (_t5 < i || _t5 > s) && Yo(e, _t5);
      } else for (var _n7 = Math.max(i - t, 0); _n7 <= Math.min(s + t, r - 1); _n7 += 1) _n7 !== i && (_n7 > s || _n7 < i) && Yo(e, _n7);
    };
  var Ho = {
      updateSize: function updateSize() {
        var e = this;
        var t, r;
        var n = e.el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(Eo(n, "padding-left") || 0, 10) - parseInt(Eo(n, "padding-right") || 0, 10), r = r - parseInt(Eo(n, "padding-top") || 0, 10) - parseInt(Eo(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
          width: t,
          height: r,
          size: e.isHorizontal() ? t : r
        }));
      },
      updateSlides: function updateSlides() {
        var e = this;
        function t(t, r) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0);
        }
        var r = e.params,
          n = e.wrapperEl,
          i = e.slidesEl,
          s = e.size,
          a = e.rtlTranslate,
          o = e.wrongRTL,
          l = e.virtual && r.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = To(i, ".".concat(e.params.slideClass, ", swiper-slide")),
          p = l ? e.virtual.slides.length : c.length;
        var u = [];
        var f = [],
          h = [];
        var g = r.slidesOffsetBefore;
        "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
        var m = r.slidesOffsetAfter;
        "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
        var v = e.snapGrid.length,
          w = e.slidesGrid.length;
        var b = r.spaceBetween,
          y = -g,
          _ = 0,
          x = 0;
        if (void 0 === s) return;
        "string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * s : "string" == typeof b && (b = parseFloat(b)), e.virtualSize = -b, c.forEach(function (e) {
          a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
        }), r.centeredSlides && r.cssMode && (yo(n, "--swiper-centered-offset-before", ""), yo(n, "--swiper-centered-offset-after", ""));
        var T = r.grid && r.grid.rows > 1 && e.grid;
        var A;
        T ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        var S = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(function (e) {
          return void 0 !== r.breakpoints[e].slidesPerView;
        }).length > 0;
        for (var _n8 = 0; _n8 < p; _n8 += 1) {
          var _i3 = void 0;
          if (A = 0, c[_n8] && (_i3 = c[_n8]), T && e.grid.updateSlide(_n8, _i3, c), !c[_n8] || "none" !== Eo(_i3, "display")) {
            if ("auto" === r.slidesPerView) {
              S && (c[_n8].style[e.getDirectionLabel("width")] = "");
              var _s4 = getComputedStyle(_i3),
                _a2 = _i3.style.transform,
                _o2 = _i3.style.webkitTransform;
              if (_a2 && (_i3.style.transform = "none"), _o2 && (_i3.style.webkitTransform = "none"), r.roundLengths) A = e.isHorizontal() ? ko(_i3, "width", !0) : ko(_i3, "height", !0);else {
                var _e3 = t(_s4, "width"),
                  _r4 = t(_s4, "padding-left"),
                  _n9 = t(_s4, "padding-right"),
                  _a3 = t(_s4, "margin-left"),
                  _o3 = t(_s4, "margin-right"),
                  _l2 = _s4.getPropertyValue("box-sizing");
                if (_l2 && "border-box" === _l2) A = _e3 + _a3 + _o3;else {
                  var _i4 = _i3,
                    _t6 = _i4.clientWidth,
                    _s5 = _i4.offsetWidth;
                  A = _e3 + _r4 + _n9 + _a3 + _o3 + (_s5 - _t6);
                }
              }
              _a2 && (_i3.style.transform = _a2), _o2 && (_i3.style.webkitTransform = _o2), r.roundLengths && (A = Math.floor(A));
            } else A = (s - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (A = Math.floor(A)), c[_n8] && (c[_n8].style[e.getDirectionLabel("width")] = "".concat(A, "px"));
            c[_n8] && (c[_n8].swiperSlideSize = A), h.push(A), r.centeredSlides ? (y = y + A / 2 + _ / 2 + b, 0 === _ && 0 !== _n8 && (y = y - s / 2 - b), 0 === _n8 && (y = y - s / 2 - b), Math.abs(y) < .001 && (y = 0), r.roundLengths && (y = Math.floor(y)), x % r.slidesPerGroup == 0 && u.push(y), f.push(y)) : (r.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(y), f.push(y), y = y + A + b), e.virtualSize += A + b, _ = A, x += 1;
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, s) + m, a && o && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = "".concat(e.virtualSize + b, "px")), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + b, "px")), T && e.grid.updateWrapperSize(A, u), !r.centeredSlides) {
          var _t7 = [];
          for (var _n10 = 0; _n10 < u.length; _n10 += 1) {
            var _i5 = u[_n10];
            r.roundLengths && (_i5 = Math.floor(_i5)), u[_n10] <= e.virtualSize - s && _t7.push(_i5);
          }
          u = _t7, Math.floor(e.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - s);
        }
        if (l && r.loop) {
          var _t8 = h[0] + b;
          if (r.slidesPerGroup > 1) {
            var _n11 = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
              _i6 = _t8 * r.slidesPerGroup;
            for (var _e4 = 0; _e4 < _n11; _e4 += 1) u.push(u[u.length - 1] + _i6);
          }
          for (var _n12 = 0; _n12 < e.virtual.slidesBefore + e.virtual.slidesAfter; _n12 += 1) 1 === r.slidesPerGroup && u.push(u[u.length - 1] + _t8), f.push(f[f.length - 1] + _t8), e.virtualSize += _t8;
        }
        if (0 === u.length && (u = [0]), 0 !== b) {
          var _t9 = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
          c.filter(function (e, t) {
            return !(r.cssMode && !r.loop) || t !== c.length - 1;
          }).forEach(function (e) {
            e.style[_t9] = "".concat(b, "px");
          });
        }
        if (r.centeredSlides && r.centeredSlidesBounds) {
          var _e5 = 0;
          h.forEach(function (t) {
            _e5 += t + (b || 0);
          }), _e5 -= b;
          var _t10 = _e5 > s ? _e5 - s : 0;
          u = u.map(function (e) {
            return e <= 0 ? -g : e > _t10 ? _t10 + m : e;
          });
        }
        if (r.centerInsufficientSlides) {
          var _e6 = 0;
          h.forEach(function (t) {
            _e6 += t + (b || 0);
          }), _e6 -= b;
          var _t11 = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
          if (_e6 + _t11 < s) {
            var _r5 = (s - _e6 - _t11) / 2;
            u.forEach(function (e, t) {
              u[t] = e - _r5;
            }), f.forEach(function (e, t) {
              f[t] = e + _r5;
            });
          }
        }
        if (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: f,
          slidesSizesGrid: h
        }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
          yo(n, "--swiper-centered-offset-before", -u[0] + "px"), yo(n, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
          var _t12 = -e.snapGrid[0],
            _r6 = -e.slidesGrid[0];
          e.snapGrid = e.snapGrid.map(function (e) {
            return e + _t12;
          }), e.slidesGrid = e.slidesGrid.map(function (e) {
            return e + _r6;
          });
        }
        if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
          var _t13 = "".concat(r.containerModifierClass, "backface-hidden"),
            _n13 = e.el.classList.contains(_t13);
          p <= r.maxBackfaceHiddenSlides ? _n13 || e.el.classList.add(_t13) : _n13 && e.el.classList.remove(_t13);
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t = this,
          r = [],
          n = t.virtual && t.params.virtual.enabled;
        var i,
          s = 0;
        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
        var a = function a(e) {
          return n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
        };
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
          if (t.params.centeredSlides) (t.visibleSlides || []).forEach(function (e) {
            r.push(e);
          });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            var _e7 = t.activeIndex + i;
            if (_e7 > t.slides.length && !n) break;
            r.push(a(_e7));
          }
        } else r.push(a(t.activeIndex));
        for (i = 0; i < r.length; i += 1) if (void 0 !== r[i]) {
          var _e8 = r[i].offsetHeight;
          s = _e8 > s ? _e8 : s;
        }
        (s || 0 === s) && (t.wrapperEl.style.height = "".concat(s, "px"));
      },
      updateSlidesOffset: function updateSlidesOffset() {
        var e = this,
          t = e.slides,
          r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
        for (var _n14 = 0; _n14 < t.length; _n14 += 1) t[_n14].swiperSlideOffset = (e.isHorizontal() ? t[_n14].offsetLeft : t[_n14].offsetTop) - r - e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
          r = t.params,
          n = t.slides,
          i = t.rtlTranslate,
          s = t.snapGrid;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        var a = -e;
        i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
        var o = r.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
        for (var _e9 = 0; _e9 < n.length; _e9 += 1) {
          var _l3 = n[_e9];
          var _d = _l3.swiperSlideOffset;
          r.cssMode && r.centeredSlides && (_d -= n[0].swiperSlideOffset);
          var _c = (a + (r.centeredSlides ? t.minTranslate() : 0) - _d) / (_l3.swiperSlideSize + o),
            _p2 = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - _d) / (_l3.swiperSlideSize + o),
            _u = -(a - _d),
            _f = _u + t.slidesSizesGrid[_e9],
            _h = _u >= 0 && _u <= t.size - t.slidesSizesGrid[_e9],
            _g = _u >= 0 && _u < t.size - 1 || _f > 1 && _f <= t.size || _u <= 0 && _f >= t.size;
          _g && (t.visibleSlides.push(_l3), t.visibleSlidesIndexes.push(_e9)), Fo(_l3, _g, r.slideVisibleClass), Fo(_l3, _h, r.slideFullyVisibleClass), _l3.progress = i ? -_c : _c, _l3.originalProgress = i ? -_p2 : _p2;
        }
      },
      updateProgress: function updateProgress(e) {
        var t = this;
        if (void 0 === e) {
          var _r7 = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * _r7 || 0;
        }
        var r = t.params,
          n = t.maxTranslate() - t.minTranslate();
        var i = t.progress,
          s = t.isBeginning,
          a = t.isEnd,
          o = t.progressLoop;
        var l = s,
          d = a;
        if (0 === n) i = 0, s = !0, a = !0;else {
          i = (e - t.minTranslate()) / n;
          var _r8 = Math.abs(e - t.minTranslate()) < 1,
            _o4 = Math.abs(e - t.maxTranslate()) < 1;
          s = _r8 || i <= 0, a = _o4 || i >= 1, _r8 && (i = 0), _o4 && (i = 1);
        }
        if (r.loop) {
          var _r9 = t.getSlideIndexByData(0),
            _n15 = t.getSlideIndexByData(t.slides.length - 1),
            _i7 = t.slidesGrid[_r9],
            _s6 = t.slidesGrid[_n15],
            _a4 = t.slidesGrid[t.slidesGrid.length - 1],
            _l4 = Math.abs(e);
          o = _l4 >= _i7 ? (_l4 - _i7) / _a4 : (_l4 + _a4 - _s6) / _a4, o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: i,
          progressLoop: o,
          isBeginning: s,
          isEnd: a
        }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", i);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e = this,
          t = e.slides,
          r = e.params,
          n = e.slidesEl,
          i = e.activeIndex,
          s = e.virtual && r.virtual.enabled,
          a = e.grid && r.grid && r.grid.rows > 1,
          o = function o(e) {
            return To(n, ".".concat(r.slideClass).concat(e, ", swiper-slide").concat(e))[0];
          };
        var l, d, c;
        if (s) {
          if (r.loop) {
            var _t14 = i - e.virtual.slidesBefore;
            _t14 < 0 && (_t14 = e.virtual.slides.length + _t14), _t14 >= e.virtual.slides.length && (_t14 -= e.virtual.slides.length), l = o("[data-swiper-slide-index=\"".concat(_t14, "\"]"));
          } else l = o("[data-swiper-slide-index=\"".concat(i, "\"]"));
        } else a ? (l = t.find(function (e) {
          return e.column === i;
        }), c = t.find(function (e) {
          return e.column === i + 1;
        }), d = t.find(function (e) {
          return e.column === i - 1;
        })) : l = t[i];
        l && (a || (c = function (e, t) {
          var r = [];
          for (; e.nextElementSibling;) {
            var _n16 = e.nextElementSibling;
            t ? _n16.matches(t) && r.push(_n16) : r.push(_n16), e = _n16;
          }
          return r;
        }(l, ".".concat(r.slideClass, ", swiper-slide"))[0], r.loop && !c && (c = t[0]), d = function (e, t) {
          var r = [];
          for (; e.previousElementSibling;) {
            var _n17 = e.previousElementSibling;
            t ? _n17.matches(t) && r.push(_n17) : r.push(_n17), e = _n17;
          }
          return r;
        }(l, ".".concat(r.slideClass, ", swiper-slide"))[0], r.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach(function (e) {
          Go(e, e === l, r.slideActiveClass), Go(e, e === c, r.slideNextClass), Go(e, e === d, r.slidePrevClass);
        }), e.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t = this,
          r = t.rtlTranslate ? t.translate : -t.translate,
          n = t.snapGrid,
          i = t.params,
          s = t.activeIndex,
          a = t.realIndex,
          o = t.snapIndex;
        var l,
          d = e;
        var c = function c(e) {
          var r = e - t.virtual.slidesBefore;
          return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r;
        };
        if (void 0 === d && (d = function (e) {
          var t = e.slidesGrid,
            r = e.params,
            n = e.rtlTranslate ? e.translate : -e.translate;
          var i;
          for (var _e10 = 0; _e10 < t.length; _e10 += 1) void 0 !== t[_e10 + 1] ? n >= t[_e10] && n < t[_e10 + 1] - (t[_e10 + 1] - t[_e10]) / 2 ? i = _e10 : n >= t[_e10] && n < t[_e10 + 1] && (i = _e10 + 1) : n >= t[_e10] && (i = _e10);
          return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
        }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);else {
          var _e11 = Math.min(i.slidesPerGroupSkip, d);
          l = _e11 + Math.floor((d - _e11) / i.slidesPerGroup);
        }
        if (l >= n.length && (l = n.length - 1), d === s && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
        if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
        var p = t.grid && i.grid && i.grid.rows > 1;
        var u;
        if (t.virtual && i.virtual.enabled && i.loop) u = c(d);else if (p) {
          var _e12 = t.slides.find(function (e) {
            return e.column === d;
          });
          var _r10 = parseInt(_e12.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(_r10) && (_r10 = Math.max(t.slides.indexOf(_e12), 0)), u = Math.floor(_r10 / i.grid.rows);
        } else if (t.slides[d]) {
          var _e13 = t.slides[d].getAttribute("data-swiper-slide-index");
          u = _e13 ? parseInt(_e13, 10) : d;
        } else u = d;
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: a,
          realIndex: u,
          previousIndex: s,
          activeIndex: d
        }), t.initialized && Vo(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function updateClickedSlide(e, t) {
        var r = this,
          n = r.params;
        var i = e.closest(".".concat(n.slideClass, ", swiper-slide"));
        !i && r.isElement && t && t.length > 1 && t.includes(e) && _toConsumableArray(t.slice(t.indexOf(e) + 1, t.length)).forEach(function (e) {
          !i && e.matches && e.matches(".".concat(n.slideClass, ", swiper-slide")) && (i = e);
        });
        var s,
          a = !1;
        if (i) for (var _e14 = 0; _e14 < r.slides.length; _e14 += 1) if (r.slides[_e14] === i) {
          a = !0, s = _e14;
          break;
        }
        if (!i || !a) return r.clickedSlide = void 0, void (r.clickedIndex = void 0);
        r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide();
      }
    },
    $o = {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
          r = this.rtlTranslate,
          n = this.translate,
          i = this.wrapperEl;
        if (t.virtualTranslate) return r ? -n : n;
        if (t.cssMode) return n;
        var s = function (e, t) {
          void 0 === t && (t = "x");
          var r = go();
          var n, i, s;
          var a = function (e) {
            var t = go();
            var r;
            return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
          }(e);
          return r.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0;
        }(i, e);
        return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var r = this,
          n = r.rtlTranslate,
          i = r.params,
          s = r.wrapperEl,
          a = r.progress;
        var o,
          l = 0,
          d = 0;
        r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = "translate3d(".concat(l, "px, ").concat(d, "px, 0px)"));
        var c = r.maxTranslate() - r.minTranslate();
        o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, r, n, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
        var s = this,
          a = s.params,
          o = s.wrapperEl;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        var l = s.minTranslate(),
          d = s.maxTranslate();
        var c;
        if (c = n && e > l ? l : n && e < d ? d : e, s.updateProgress(c), a.cssMode) {
          var _e15 = s.isHorizontal();
          if (0 === t) o[_e15 ? "scrollLeft" : "scrollTop"] = -c;else {
            if (!s.support.smoothScroll) return _o({
              swiper: s,
              targetPosition: -c,
              side: _e15 ? "left" : "top"
            }), !0;
            o.scrollTo(_defineProperty(_defineProperty({}, _e15 ? "left" : "top", -c), "behavior", "smooth"));
          }
          return !0;
        }
        return 0 === t ? (s.setTransition(0), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, r && s.emit("transitionEnd"));
        }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
      }
    };
  function jo(e) {
    var t = e.swiper,
      r = e.runCallbacks,
      n = e.direction,
      i = e.step;
    var s = t.activeIndex,
      a = t.previousIndex;
    var o = n;
    if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit("transition".concat(i)), r && s !== a) {
      if ("reset" === o) return void t.emit("slideResetTransition".concat(i));
      t.emit("slideChangeTransition".concat(i)), "next" === o ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
    }
  }
  var qo = {
      setTransition: function setTransition(e, t) {
        var r = this;
        r.params.cssMode || (r.wrapperEl.style.transitionDuration = "".concat(e, "ms"), r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          n = r.params;
        n.cssMode || (n.autoHeight && r.updateAutoHeight(), jo({
          swiper: r,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          n = r.params;
        r.animating = !1, n.cssMode || (r.setTransition(0), jo({
          swiper: r,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    Xo = {
      slideTo: function slideTo(e, t, r, n, i) {
        void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
        var s = this;
        var a = e;
        a < 0 && (a = 0);
        var o = s.params,
          l = s.snapGrid,
          d = s.slidesGrid,
          c = s.previousIndex,
          p = s.activeIndex,
          u = s.rtlTranslate,
          f = s.wrapperEl,
          h = s.enabled;
        if (!h && !n && !i || s.destroyed || s.animating && o.preventInteractionOnTransition) return !1;
        void 0 === t && (t = s.params.speed);
        var g = Math.min(s.params.slidesPerGroupSkip, a);
        var m = g + Math.floor((a - g) / s.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1);
        var v = -l[m];
        if (o.normalizeSlideIndex) for (var _e16 = 0; _e16 < d.length; _e16 += 1) {
          var _t15 = -Math.floor(100 * v),
            _r11 = Math.floor(100 * d[_e16]),
            _n18 = Math.floor(100 * d[_e16 + 1]);
          void 0 !== d[_e16 + 1] ? _t15 >= _r11 && _t15 < _n18 - (_n18 - _r11) / 2 ? a = _e16 : _t15 >= _r11 && _t15 < _n18 && (a = _e16 + 1) : _t15 >= _r11 && (a = _e16);
        }
        if (s.initialized && a !== p) {
          if (!s.allowSlideNext && (u ? v > s.translate && v > s.minTranslate() : v < s.translate && v < s.minTranslate())) return !1;
          if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== a) return !1;
        }
        var w;
        a !== (c || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(v), w = a > p ? "next" : a < p ? "prev" : "reset";
        var b = s.virtual && s.params.virtual.enabled;
        if ((!b || !i) && (u && -v === s.translate || !u && v === s.translate)) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" !== w && (s.transitionStart(r, w), s.transitionEnd(r, w)), !1;
        if (o.cssMode) {
          var _e17 = s.isHorizontal(),
            _r12 = u ? v : -v;
          if (0 === t) b && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), b && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(function () {
            f[_e17 ? "scrollLeft" : "scrollTop"] = _r12;
          })) : f[_e17 ? "scrollLeft" : "scrollTop"] = _r12, b && requestAnimationFrame(function () {
            s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
          });else {
            if (!s.support.smoothScroll) return _o({
              swiper: s,
              targetPosition: _r12,
              side: _e17 ? "left" : "top"
            }), !0;
            f.scrollTo(_defineProperty(_defineProperty({}, _e17 ? "left" : "top", _r12), "behavior", "smooth"));
          }
          return !0;
        }
        var y = Bo().isSafari;
        return b && !i && y && s.isElement && s.virtual.update(!1, !1, a), s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(r, w), 0 === t ? s.transitionEnd(r, w) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, w));
        }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
      },
      slideToLoop: function slideToLoop(e, t, r, n) {
        void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
        var i = this;
        if (i.destroyed) return;
        void 0 === t && (t = i.params.speed);
        var s = i.grid && i.params.grid && i.params.grid.rows > 1;
        var a = e;
        if (i.params.loop) if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;else {
          var _e18;
          if (s) {
            var _t16 = a * i.params.grid.rows;
            _e18 = i.slides.find(function (e) {
              return 1 * e.getAttribute("data-swiper-slide-index") === _t16;
            }).column;
          } else _e18 = i.getSlideIndexByData(a);
          var _t17 = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
            _r13 = i.params.centeredSlides;
          var _o5 = i.params.slidesPerView;
          "auto" === _o5 ? _o5 = i.slidesPerViewDynamic() : (_o5 = Math.ceil(parseFloat(i.params.slidesPerView, 10)), _r13 && _o5 % 2 == 0 && (_o5 += 1));
          var _l5 = _t17 - _e18 < _o5;
          if (_r13 && (_l5 = _l5 || _e18 < Math.ceil(_o5 / 2)), n && _r13 && "auto" !== i.params.slidesPerView && !s && (_l5 = !1), _l5) {
            var _n19 = _r13 ? _e18 < i.activeIndex ? "prev" : "next" : _e18 - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
            i.loopFix({
              direction: _n19,
              slideTo: !0,
              activeSlideIndex: "next" === _n19 ? _e18 + 1 : _e18 - _t17 + 1,
              slideRealIndex: "next" === _n19 ? i.realIndex : void 0
            });
          }
          if (s) {
            var _e19 = a * i.params.grid.rows;
            a = i.slides.find(function (t) {
              return 1 * t.getAttribute("data-swiper-slide-index") === _e19;
            }).column;
          } else a = i.getSlideIndexByData(a);
        }
        return requestAnimationFrame(function () {
          i.slideTo(a, t, r, n);
        }), i;
      },
      slideNext: function slideNext(e, t, r) {
        void 0 === t && (t = !0);
        var n = this,
          i = n.enabled,
          s = n.params,
          a = n.animating;
        if (!i || n.destroyed) return n;
        void 0 === e && (e = n.params.speed);
        var o = s.slidesPerGroup;
        "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        var l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o,
          d = n.virtual && s.virtual.enabled;
        if (s.loop) {
          if (a && !d && s.loopPreventsSliding) return !1;
          if (n.loopFix({
            direction: "next"
          }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode) return requestAnimationFrame(function () {
            n.slideTo(n.activeIndex + l, e, t, r);
          }), !0;
        }
        return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r);
      },
      slidePrev: function slidePrev(e, t, r) {
        void 0 === t && (t = !0);
        var n = this,
          i = n.params,
          s = n.snapGrid,
          a = n.slidesGrid,
          o = n.rtlTranslate,
          l = n.enabled,
          d = n.animating;
        if (!l || n.destroyed) return n;
        void 0 === e && (e = n.params.speed);
        var c = n.virtual && i.virtual.enabled;
        if (i.loop) {
          if (d && !c && i.loopPreventsSliding) return !1;
          n.loopFix({
            direction: "prev"
          }), n._clientLeft = n.wrapperEl.clientLeft;
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        var u = p(o ? n.translate : -n.translate),
          f = s.map(function (e) {
            return p(e);
          }),
          h = i.freeMode && i.freeMode.enabled;
        var g = s[f.indexOf(u) - 1];
        if (void 0 === g && (i.cssMode || h)) {
          var _e20;
          s.forEach(function (t, r) {
            u >= t && (_e20 = r);
          }), void 0 !== _e20 && (g = h ? s[_e20] : s[_e20 > 0 ? _e20 - 1 : _e20]);
        }
        var m = 0;
        if (void 0 !== g && (m = a.indexOf(g), m < 0 && (m = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - n.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && n.isBeginning) {
          var _i8 = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
          return n.slideTo(_i8, e, t, r);
        }
        return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame(function () {
          n.slideTo(m, e, t, r);
        }), !0) : n.slideTo(m, e, t, r);
      },
      slideReset: function slideReset(e, t, r) {
        void 0 === t && (t = !0);
        var n = this;
        if (!n.destroyed) return void 0 === e && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r);
      },
      slideToClosest: function slideToClosest(e, t, r, n) {
        void 0 === t && (t = !0), void 0 === n && (n = .5);
        var i = this;
        if (i.destroyed) return;
        void 0 === e && (e = i.params.speed);
        var s = i.activeIndex;
        var a = Math.min(i.params.slidesPerGroupSkip, s),
          o = a + Math.floor((s - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          var _e21 = i.snapGrid[o];
          l - _e21 > (i.snapGrid[o + 1] - _e21) * n && (s += i.params.slidesPerGroup);
        } else {
          var _e22 = i.snapGrid[o - 1];
          l - _e22 <= (i.snapGrid[o] - _e22) * n && (s -= i.params.slidesPerGroup);
        }
        return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, r);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e = this;
        if (e.destroyed) return;
        var t = e.params,
          r = e.slidesEl,
          n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        var i,
          s = e.clickedIndex;
        var a = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
        if (t.loop) {
          if (e.animating) return;
          i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), s = e.getSlideIndex(To(r, "".concat(a, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0]), mo(function () {
            e.slideTo(s);
          })) : e.slideTo(s) : s > e.slides.length - n ? (e.loopFix(), s = e.getSlideIndex(To(r, "".concat(a, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0]), mo(function () {
            e.slideTo(s);
          })) : e.slideTo(s);
        } else e.slideTo(s);
      }
    },
    Wo = {
      loopCreate: function loopCreate(e) {
        var t = this,
          r = t.params,
          n = t.slidesEl;
        if (!r.loop || t.virtual && t.params.virtual.enabled) return;
        var i = function i() {
            To(n, ".".concat(r.slideClass, ", swiper-slide")).forEach(function (e, t) {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          s = t.grid && r.grid && r.grid.rows > 1,
          a = r.slidesPerGroup * (s ? r.grid.rows : 1),
          o = t.slides.length % a != 0,
          l = s && t.slides.length % r.grid.rows != 0,
          d = function d(e) {
            for (var _n20 = 0; _n20 < e; _n20 += 1) {
              var _e23 = t.isElement ? So("swiper-slide", [r.slideBlankClass]) : So("div", [r.slideClass, r.slideBlankClass]);
              t.slidesEl.append(_e23);
            }
          };
        o ? (r.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : Ao("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : l ? (r.loopAddBlankSlides ? (d(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : Ao("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
          slideRealIndex: e,
          direction: r.centeredSlides ? void 0 : "next"
        });
      },
      loopFix: function loopFix(e) {
        var _ref2 = void 0 === e ? {} : e,
          t = _ref2.slideRealIndex,
          _ref2$slideTo = _ref2.slideTo,
          r = _ref2$slideTo === void 0 ? !0 : _ref2$slideTo,
          n = _ref2.direction,
          i = _ref2.setTranslate,
          s = _ref2.activeSlideIndex,
          a = _ref2.byController,
          o = _ref2.byMousewheel;
        var l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        var d = l.slides,
          c = l.allowSlidePrev,
          p = l.allowSlideNext,
          u = l.slidesEl,
          f = l.params,
          h = f.centeredSlides;
        if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== l.snapIndex ? f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = p, void l.emit("loopFix");
        var g = f.slidesPerView;
        "auto" === g ? g = l.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), h && g % 2 == 0 && (g += 1));
        var m = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
        var v = m;
        v % m != 0 && (v += m - v % m), v += f.loopAdditionalSlides, l.loopedSlides = v;
        var w = l.grid && f.grid && f.grid.rows > 1;
        d.length < g + v ? Ao("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && "row" === f.grid.fill && Ao("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        var b = [],
          y = [];
        var _ = l.activeIndex;
        void 0 === s ? s = l.getSlideIndex(d.find(function (e) {
          return e.classList.contains(f.slideActiveClass);
        })) : _ = s;
        var x = "next" === n || !n,
          T = "prev" === n || !n;
        var A = 0,
          S = 0;
        var E = w ? Math.ceil(d.length / f.grid.rows) : d.length,
          C = (w ? d[s].column : s) + (h && void 0 === i ? -g / 2 + .5 : 0);
        if (C < v) {
          A = Math.max(v - C, m);
          for (var _e24 = 0; _e24 < v - C; _e24 += 1) {
            var _t18 = _e24 - Math.floor(_e24 / E) * E;
            if (w) {
              var _e25 = E - _t18 - 1;
              for (var _t19 = d.length - 1; _t19 >= 0; _t19 -= 1) d[_t19].column === _e25 && b.push(_t19);
            } else b.push(E - _t18 - 1);
          }
        } else if (C + g > E - v) {
          S = Math.max(C - (E - 2 * v), m);
          var _loop = function _loop() {
            var t = _e26 - Math.floor(_e26 / E) * E;
            w ? d.forEach(function (e, r) {
              e.column === t && y.push(r);
            }) : y.push(t);
          };
          for (var _e26 = 0; _e26 < S; _e26 += 1) {
            _loop();
          }
        }
        if (l.__preventObserver__ = !0, requestAnimationFrame(function () {
          l.__preventObserver__ = !1;
        }), T && b.forEach(function (e) {
          d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
        }), x && y.forEach(function (e) {
          d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
        }), l.recalcSlides(), "auto" === f.slidesPerView ? l.updateSlides() : w && (b.length > 0 && T || y.length > 0 && x) && l.slides.forEach(function (e, t) {
          l.grid.updateSlide(t, e, l.slides);
        }), f.watchSlidesProgress && l.updateSlidesOffset(), r) if (b.length > 0 && T) {
          if (void 0 === t) {
            var _e27 = l.slidesGrid[_],
              _t20 = l.slidesGrid[_ + A] - _e27;
            o ? l.setTranslate(l.translate - _t20) : (l.slideTo(_ + Math.ceil(A), 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - _t20, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - _t20));
          } else if (i) {
            var _e28 = w ? b.length / f.grid.rows : b.length;
            l.slideTo(l.activeIndex + _e28, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate;
          }
        } else if (y.length > 0 && x) if (void 0 === t) {
          var _e29 = l.slidesGrid[_],
            _t21 = l.slidesGrid[_ - S] - _e29;
          o ? l.setTranslate(l.translate - _t21) : (l.slideTo(_ - S, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - _t21, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - _t21));
        } else {
          var _e30 = w ? y.length / f.grid.rows : y.length;
          l.slideTo(l.activeIndex - _e30, 0, !1, !0);
        }
        if (l.allowSlidePrev = c, l.allowSlideNext = p, l.controller && l.controller.control && !a) {
          var _e31 = {
            slideRealIndex: t,
            direction: n,
            setTranslate: i,
            activeSlideIndex: s,
            byController: !0
          };
          Array.isArray(l.controller.control) ? l.controller.control.forEach(function (t) {
            !t.destroyed && t.params.loop && t.loopFix(_objectSpread(_objectSpread({}, _e31), {}, {
              slideTo: t.params.slidesPerView === f.slidesPerView && r
            }));
          }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(_objectSpread(_objectSpread({}, _e31), {}, {
            slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && r
          }));
        }
        l.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this,
          t = e.params,
          r = e.slidesEl;
        if (!t.loop || e.virtual && e.params.virtual.enabled) return;
        e.recalcSlides();
        var n = [];
        e.slides.forEach(function (e) {
          var t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
          n[t] = e;
        }), e.slides.forEach(function (e) {
          e.removeAttribute("data-swiper-slide-index");
        }), n.forEach(function (e) {
          r.append(e);
        }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
      }
    },
    Uo = {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(function () {
          t.__preventObserver__ = !1;
        });
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(function () {
          e.__preventObserver__ = !1;
        }));
      }
    };
  function Qo(e, t, r) {
    var n = go(),
      i = e.params,
      s = i.edgeSwipeDetection,
      a = i.edgeSwipeThreshold;
    return !s || !(r <= a || r >= n.innerWidth - a) || "prevent" === s && (t.preventDefault(), !0);
  }
  function Zo(e) {
    var t = this,
      r = fo();
    var n = e;
    n.originalEvent && (n = n.originalEvent);
    var i = t.touchEventsData;
    if ("pointerdown" === n.type) {
      if (null !== i.pointerId && i.pointerId !== n.pointerId) return;
      i.pointerId = n.pointerId;
    } else "touchstart" === n.type && 1 === n.targetTouches.length && (i.touchId = n.targetTouches[0].identifier);
    if ("touchstart" === n.type) return void Qo(t, n, n.targetTouches[0].pageX);
    var s = t.params,
      a = t.touches,
      o = t.enabled;
    if (!o) return;
    if (!s.simulateTouch && "mouse" === n.pointerType) return;
    if (t.animating && s.preventInteractionOnTransition) return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    var l = n.target;
    if ("wrapper" === s.touchEventsTarget && !function (e, t) {
      var r = go();
      var n = t.contains(e);
      return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = _toConsumableArray(t.assignedElements()).includes(e), n || (n = function (e, t) {
        var r = [t];
        for (; r.length > 0;) {
          var _t22 = r.shift();
          if (e === _t22) return !0;
          r.push.apply(r, _toConsumableArray(_t22.children).concat(_toConsumableArray(_t22.shadowRoot ? _t22.shadowRoot.children : []), _toConsumableArray(_t22.assignedElements ? _t22.assignedElements() : [])));
        }
      }(e, t))), n;
    }(l, t.wrapperEl)) return;
    if ("which" in n && 3 === n.which) return;
    if ("button" in n && n.button > 0) return;
    if (i.isTouched && i.isMoved) return;
    var d = !!s.noSwipingClass && "" !== s.noSwipingClass,
      c = n.composedPath ? n.composedPath() : n.path;
    d && n.target && n.target.shadowRoot && c && (l = c[0]);
    var p = s.noSwipingSelector ? s.noSwipingSelector : ".".concat(s.noSwipingClass),
      u = !(!n.target || !n.target.shadowRoot);
    if (s.noSwiping && (u ? function (e, t) {
      return void 0 === t && (t = this), function t(r) {
        if (!r || r === fo() || r === go()) return null;
        r.assignedSlot && (r = r.assignedSlot);
        var n = r.closest(e);
        return n || r.getRootNode ? n || t(r.getRootNode().host) : null;
      }(t);
    }(p, l) : l.closest(p))) return void (t.allowClick = !0);
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    a.currentX = n.pageX, a.currentY = n.pageY;
    var f = a.currentX,
      h = a.currentY;
    if (!Qo(t, n, f)) return;
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), a.startX = f, a.startY = h, i.touchStartTime = vo(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
    var g = !0;
    l.matches(i.focusableElements) && (g = !1, "SELECT" === l.nodeName && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== l && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !l.matches(i.focusableElements)) && r.activeElement.blur();
    var m = g && t.allowTouchMove && s.touchStartPreventDefault;
    !s.touchStartForcePreventDefault && !m || l.isContentEditable || n.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n);
  }
  function Ko(e) {
    var t = fo(),
      r = this,
      n = r.touchEventsData,
      i = r.params,
      s = r.touches,
      a = r.rtlTranslate,
      o = r.enabled;
    if (!o) return;
    if (!i.simulateTouch && "mouse" === e.pointerType) return;
    var l,
      d = e;
    if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
      if (null !== n.touchId) return;
      if (d.pointerId !== n.pointerId) return;
    }
    if ("touchmove" === d.type) {
      if (l = _toConsumableArray(d.changedTouches).find(function (e) {
        return e.identifier === n.touchId;
      }), !l || l.identifier !== n.touchId) return;
    } else l = d;
    if (!n.isTouched) return void (n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", d));
    var c = l.pageX,
      p = l.pageY;
    if (d.preventedByNestedSwiper) return s.startX = c, void (s.startY = p);
    if (!r.allowTouchMove) return d.target.matches(n.focusableElements) || (r.allowClick = !1), void (n.isTouched && (Object.assign(s, {
      startX: c,
      startY: p,
      currentX: c,
      currentY: p
    }), n.touchStartTime = vo()));
    if (i.touchReleaseOnEdges && !i.loop) if (r.isVertical()) {
      if (p < s.startY && r.translate <= r.maxTranslate() || p > s.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void (n.isMoved = !1);
    } else if (c < s.startX && r.translate <= r.maxTranslate() || c > s.startX && r.translate >= r.minTranslate()) return;
    if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== d.target && "mouse" !== d.pointerType && t.activeElement.blur(), t.activeElement && d.target === t.activeElement && d.target.matches(n.focusableElements)) return n.isMoved = !0, void (r.allowClick = !1);
    n.allowTouchCallbacks && r.emit("touchMove", d), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = c, s.currentY = p;
    var u = s.currentX - s.startX,
      f = s.currentY - s.startY;
    if (r.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(f, 2)) < r.params.threshold) return;
    if (void 0 === n.isScrolling) {
      var _e32;
      r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : u * u + f * f >= 25 && (_e32 = 180 * Math.atan2(Math.abs(f), Math.abs(u)) / Math.PI, n.isScrolling = r.isHorizontal() ? _e32 > i.touchAngle : 90 - _e32 > i.touchAngle);
    }
    if (n.isScrolling && r.emit("touchMoveOpposite", d), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling || "touchmove" === d.type && n.preventTouchMoveFromPointerMove) return void (n.isTouched = !1);
    if (!n.startMoving) return;
    r.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation();
    var h = r.isHorizontal() ? u : f,
      g = r.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    i.oneWayMovement && (h = Math.abs(h) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), s.diff = h, h *= i.touchRatio, a && (h = -h, g = -g);
    var m = r.touchesDirection;
    r.swipeDirection = h > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
    var v = r.params.loop && !i.cssMode,
      w = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
    if (!n.isMoved) {
      if (v && w && r.loopFix({
        direction: r.swipeDirection
      }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
        var _e33 = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        r.wrapperEl.dispatchEvent(_e33);
      }
      n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", d);
    }
    if (new Date().getTime(), !1 !== i._loopSwapReset && n.isMoved && n.allowThresholdMove && m !== r.touchesDirection && v && w && Math.abs(h) >= 1) return Object.assign(s, {
      startX: c,
      startY: p,
      currentX: c,
      currentY: p,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, void (n.startTranslate = n.currentTranslate);
    r.emit("sliderMove", d), n.isMoved = !0, n.currentTranslate = h + n.startTranslate;
    var b = !0,
      y = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (y = 0), h > 0 ? (v && w && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== i.slidesPerView && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), n.currentTranslate > r.minTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + Math.pow(-r.minTranslate() + n.startTranslate + h, y)))) : h < 0 && (v && w && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== i.slidesPerView && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: r.slides.length - ("auto" === i.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
    }), n.currentTranslate < r.maxTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - Math.pow(r.maxTranslate() - n.startTranslate - h, y)))), b && (d.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
      if (!(Math.abs(h) > i.threshold || n.allowThresholdMove)) return void (n.currentTranslate = n.startTranslate);
      if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void (s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
    }
    i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate));
  }
  function Jo(e) {
    var t = this,
      r = t.touchEventsData;
    var n,
      i = e;
    if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
      if (n = _toConsumableArray(i.changedTouches).find(function (e) {
        return e.identifier === r.touchId;
      }), !n || n.identifier !== r.touchId) return;
    } else {
      if (null !== r.touchId) return;
      if (i.pointerId !== r.pointerId) return;
      n = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
    r.pointerId = null, r.touchId = null;
    var s = t.params,
      a = t.touches,
      o = t.rtlTranslate,
      l = t.slidesGrid,
      d = t.enabled;
    if (!d) return;
    if (!s.simulateTouch && "mouse" === i.pointerType) return;
    if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void (r.startMoving = !1);
    s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var c = vo(),
      p = c - r.touchStartTime;
    if (t.allowClick) {
      var _e34 = i.path || i.composedPath && i.composedPath();
      t.updateClickedSlide(_e34 && _e34[0] || i.target, _e34), t.emit("tap click", i), p < 300 && c - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
    }
    if (r.lastClickTime = vo(), mo(function () {
      t.destroyed || (t.allowClick = !0);
    }), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === a.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void (r.startMoving = !1);
    var u;
    if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, u = s.followFinger ? o ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
    if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: u
    });
    var f = u >= -t.maxTranslate() && !t.params.loop;
    var h = 0,
      g = t.slidesSizesGrid[0];
    for (var _e35 = 0; _e35 < l.length; _e35 += _e35 < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
      var _t23 = _e35 < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== l[_e35 + _t23] ? (f || u >= l[_e35] && u < l[_e35 + _t23]) && (h = _e35, g = l[_e35 + _t23] - l[_e35]) : (f || u >= l[_e35]) && (h = _e35, g = l[l.length - 1] - l[l.length - 2]);
    }
    var m = null,
      v = null;
    s.rewind && (t.isBeginning ? v = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
    var w = (u - l[h]) / g,
      b = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (p > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? m : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (w > 1 - s.longSwipesRatio ? t.slideTo(h + b) : null !== v && w < 0 && Math.abs(w) > s.longSwipesRatio ? t.slideTo(v) : t.slideTo(h));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== m ? m : h + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h)) : i.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h);
    }
  }
  function el() {
    var e = this,
      t = e.params,
      r = e.el;
    if (r && 0 === r.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var n = e.allowSlideNext,
      i = e.allowSlidePrev,
      s = e.snapGrid,
      a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    var o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(function () {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function tl(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function rl() {
    var e = this,
      t = e.wrapperEl,
      r = e.rtlTranslate,
      n = e.enabled;
    if (!n) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var s = e.maxTranslate() - e.minTranslate();
    i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function nl(e) {
    var t = this;
    No(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
  }
  function il() {
    var e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  var sl = function sl(e, t) {
    var r = fo(),
      n = e.params,
      i = e.el,
      s = e.wrapperEl,
      a = e.device,
      o = !!n.nested,
      l = "on" === t ? "addEventListener" : "removeEventListener",
      d = t;
    i && "string" != typeof i && (r[l]("touchstart", e.onDocumentTouchStart, {
      passive: !1,
      capture: o
    }), i[l]("touchstart", e.onTouchStart, {
      passive: !1
    }), i[l]("pointerdown", e.onTouchStart, {
      passive: !1
    }), r[l]("touchmove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), r[l]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), r[l]("touchend", e.onTouchEnd, {
      passive: !0
    }), r[l]("pointerup", e.onTouchEnd, {
      passive: !0
    }), r[l]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), r[l]("touchcancel", e.onTouchEnd, {
      passive: !0
    }), r[l]("pointerout", e.onTouchEnd, {
      passive: !0
    }), r[l]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), r[l]("contextmenu", e.onTouchEnd, {
      passive: !0
    }), (n.preventClicks || n.preventClicksPropagation) && i[l]("click", e.onClick, !0), n.cssMode && s[l]("scroll", e.onScroll), n.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", el, !0) : e[d]("observerUpdate", el, !0), i[l]("load", e.onLoad, {
      capture: !0
    }));
  };
  var al = {
    attachEvents: function attachEvents() {
      var e = this,
        t = e.params;
      e.onTouchStart = Zo.bind(e), e.onTouchMove = Ko.bind(e), e.onTouchEnd = Jo.bind(e), e.onDocumentTouchStart = il.bind(e), t.cssMode && (e.onScroll = rl.bind(e)), e.onClick = tl.bind(e), e.onLoad = nl.bind(e), sl(e, "on");
    },
    detachEvents: function detachEvents() {
      sl(this, "off");
    }
  };
  var ol = function ol(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };
  var ll = {
      setBreakpoint: function setBreakpoint() {
        var e = this,
          t = e.realIndex,
          r = e.initialized,
          n = e.params,
          i = e.el,
          s = n.breakpoints;
        if (!s || s && 0 === Object.keys(s).length) return;
        var a = fo(),
          o = "window" !== n.breakpointsBase && n.breakpointsBase ? "container" : n.breakpointsBase,
          l = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : a.querySelector(n.breakpointsBase),
          d = e.getBreakpoint(s, o, l);
        if (!d || e.currentBreakpoint === d) return;
        var c = (d in s ? s[d] : void 0) || e.originalParams,
          p = ol(e, n),
          u = ol(e, c),
          f = e.params.grabCursor,
          h = c.grabCursor,
          g = n.enabled;
        p && !u ? (i.classList.remove("".concat(n.containerModifierClass, "grid"), "".concat(n.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !p && u && (i.classList.add("".concat(n.containerModifierClass, "grid")), (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === n.grid.fill) && i.classList.add("".concat(n.containerModifierClass, "grid-column")), e.emitContainerClasses()), f && !h ? e.unsetGrabCursor() : !f && h && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
          if (void 0 === c[t]) return;
          var r = n[t] && n[t].enabled,
            i = c[t] && c[t].enabled;
          r && !i && e[t].disable(), !r && i && e[t].enable();
        });
        var m = c.direction && c.direction !== n.direction,
          v = n.loop && (c.slidesPerView !== n.slidesPerView || m),
          w = n.loop;
        m && r && e.changeDirection(), bo(e.params, c);
        var b = e.params.enabled,
          y = e.params.loop;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), g && !b ? e.disable() : !g && b && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", c), r && (v ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && y ? (e.loopCreate(t), e.updateSlides()) : w && !y && e.loopDestroy()), e.emit("breakpoint", c);
      },
      getBreakpoint: function getBreakpoint(e, t, r) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
        var n = !1;
        var i = go(),
          s = "window" === t ? i.innerHeight : r.clientHeight,
          a = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var _t24 = parseFloat(e.substr(1));
              return {
                value: s * _t24,
                point: e
              };
            }
            return {
              value: e,
              point: e
            };
          });
        a.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });
        for (var _e36 = 0; _e36 < a.length; _e36 += 1) {
          var _a$_e = a[_e36],
            _s7 = _a$_e.point,
            _o6 = _a$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_o6, "px)")).matches && (n = _s7) : _o6 <= r.clientWidth && (n = _s7);
        }
        return n || "max";
      }
    },
    dl = {
      addClasses: function addClasses() {
        var _i$classList;
        var e = this,
          t = e.classNames,
          r = e.params,
          n = e.rtl,
          i = e.el,
          s = e.device,
          a = function (e, t) {
            var r = [];
            return e.forEach(function (e) {
              "object" == _typeof(e) ? Object.keys(e).forEach(function (n) {
                e[n] && r.push(t + n);
              }) : "string" == typeof e && r.push(t + e);
            }), r;
          }(["initialized", r.direction, {
            "free-mode": e.params.freeMode && r.freeMode.enabled
          }, {
            autoheight: r.autoHeight
          }, {
            rtl: n
          }, {
            grid: r.grid && r.grid.rows > 1
          }, {
            "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
          }, {
            android: s.android
          }, {
            ios: s.ios
          }, {
            "css-mode": r.cssMode
          }, {
            centered: r.cssMode && r.centeredSlides
          }, {
            "watch-progress": r.watchSlidesProgress
          }], r.containerModifierClass);
        t.push.apply(t, _toConsumableArray(a)), (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(t)), e.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var _e$classList;
        var e = this.el,
          t = this.classNames;
        e && "string" != typeof e && ((_e$classList = e.classList).remove.apply(_e$classList, _toConsumableArray(t)), this.emitContainerClasses());
      }
    },
    cl = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };
  function pl(e, t) {
    return function (r) {
      void 0 === r && (r = {});
      var n = Object.keys(r)[0],
        i = r[n];
      "object" == _typeof(i) && null !== i ? (!0 === e[n] && (e[n] = {
        enabled: !0
      }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != _typeof(e[n]) || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
        enabled: !1
      }), bo(t, r)) : bo(t, r)) : bo(t, r);
    };
  }
  var ul = {
      eventsEmitter: Ro,
      update: Ho,
      translate: $o,
      transition: qo,
      slide: Xo,
      loop: Wo,
      grabCursor: Uo,
      events: al,
      breakpoints: ll,
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
            t = e.isLocked,
            r = e.params,
            n = r.slidesOffsetBefore;
          if (n) {
            var _t25 = e.slides.length - 1,
              _r14 = e.slidesGrid[_t25] + e.slidesSizesGrid[_t25] + 2 * n;
            e.isLocked = e.size > _r14;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: dl
    },
    fl = {};
  var hl = /*#__PURE__*/function () {
    function hl() {
      var _n21, _n22, _a$modules;
      _classCallCheck(this, hl);
      var e, t;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
      1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : (_n21 = n, _n22 = _slicedToArray(_n21, 2), e = _n22[0], t = _n22[1], _n21), t || (t = {}), t = bo({}, t), e && !t.el && (t.el = e);
      var s = fo();
      if (t.el && "string" == typeof t.el && s.querySelectorAll(t.el).length > 1) {
        var _e37 = [];
        return s.querySelectorAll(t.el).forEach(function (r) {
          var n = bo({}, t, {
            el: r
          });
          _e37.push(new hl(n));
        }), _e37;
      }
      var a = this;
      a.__swiper__ = !0, a.support = Io(), a.device = Do({
        userAgent: t.userAgent
      }), a.browser = Bo(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = _toConsumableArray(a.__modules__), t.modules && Array.isArray(t.modules) && (_a$modules = a.modules).push.apply(_a$modules, _toConsumableArray(t.modules));
      var o = {};
      a.modules.forEach(function (e) {
        e({
          params: t,
          swiper: a,
          extendParams: pl(t, o),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a)
        });
      });
      var l = bo({}, cl, o);
      return a.params = bo({}, l, fl, t), a.originalParams = bo({}, a.params), a.passedParams = bo({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === a.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === a.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment: function cssOverflowAdjustment() {
          return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    return _createClass(hl, [{
      key: "getDirectionLabel",
      value: function getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[e];
      }
    }, {
      key: "getSlideIndex",
      value: function getSlideIndex(e) {
        var t = this.slidesEl,
          r = this.params,
          n = Co(To(t, ".".concat(r.slideClass, ", swiper-slide"))[0]);
        return Co(e) - n;
      }
    }, {
      key: "getSlideIndexByData",
      value: function getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find(function (t) {
          return 1 * t.getAttribute("data-swiper-slide-index") === e;
        }));
      }
    }, {
      key: "recalcSlides",
      value: function recalcSlides() {
        var e = this.slidesEl,
          t = this.params;
        this.slides = To(e, ".".concat(t.slideClass, ", swiper-slide"));
      }
    }, {
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var r = this;
        e = Math.min(Math.max(e, 0), 1);
        var n = r.minTranslate(),
          i = (r.maxTranslate() - n) * e + n;
        r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.forEach(function (r) {
          var n = e.getSlideClasses(r);
          t.push({
            slideEl: r,
            classNames: n
          }), e.emit("_slideClass", r, n);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var r = this.params,
          n = this.slides,
          i = this.slidesGrid,
          s = this.slidesSizesGrid,
          a = this.size,
          o = this.activeIndex;
        var l = 1;
        if ("number" == typeof r.slidesPerView) return r.slidesPerView;
        if (r.centeredSlides) {
          var _e38,
            _t26 = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
          for (var _r15 = o + 1; _r15 < n.length; _r15 += 1) n[_r15] && !_e38 && (_t26 += Math.ceil(n[_r15].swiperSlideSize), l += 1, _t26 > a && (_e38 = !0));
          for (var _r16 = o - 1; _r16 >= 0; _r16 -= 1) n[_r16] && !_e38 && (_t26 += n[_r16].swiperSlideSize, l += 1, _t26 > a && (_e38 = !0));
        } else if ("current" === e) for (var _e39 = o + 1; _e39 < n.length; _e39 += 1) (t ? i[_e39] + s[_e39] - i[o] < a : i[_e39] - i[o] < a) && (l += 1);else for (var _e40 = o - 1; _e40 >= 0; _e40 -= 1) i[o] - i[_e40] < a && (l += 1);
        return l;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
          r = e.params;
        function n() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        var i;
        if (r.breakpoints && e.setBreakpoint(), _toConsumableArray(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
          t.complete && No(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();else {
          if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
            var _t27 = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
            i = e.slideTo(_t27.length - 1, 0, !1, !0);
          } else i = e.slideTo(e.activeIndex, 0, !1, !0);
          i || n();
        }
        r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var r = this,
          n = r.params.direction;
        return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove("".concat(r.params.containerModifierClass).concat(n)), r.el.classList.add("".concat(r.params.containerModifierClass).concat(e)), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), r.emit("changeDirection"), t && r.update()), r;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(e) {
        var t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var r = e || t.params.el;
        if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
        r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        var n = function n() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };
        var i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : To(r, n())[0];
        return !i && t.params.createElements && (i = So("div", t.params.wrapperClass), r.append(i), To(r, ".".concat(t.params.slideClass)).forEach(function (e) {
          i.append(e);
        })), Object.assign(t, {
          el: r,
          wrapperEl: i,
          slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
          hostEl: t.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: "rtl" === r.dir.toLowerCase() || "rtl" === Eo(r, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === Eo(r, "direction")),
          wrongRTL: "-webkit-box" === Eo(i, "display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        var r = _toConsumableArray(t.el.querySelectorAll('[loading="lazy"]'));
        return t.isElement && r.push.apply(r, _toConsumableArray(t.hostEl.querySelectorAll('[loading="lazy"]'))), r.forEach(function (e) {
          e.complete ? No(t, e) : e.addEventListener("load", function (e) {
            No(t, e.target);
          });
        }), Vo(t), t.initialized = !0, Vo(t), t.emit("init"), t.emit("afterInit"), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var r = this,
          n = r.params,
          i = r.el,
          s = r.wrapperEl,
          a = r.slides;
        return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), s && s.removeAttribute("style"), a && a.length && a.forEach(function (e) {
          e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(function (e) {
          r.off(e);
        }), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        }(r)), r.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        bo(fl, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return fl;
      }
    }, {
      key: "defaults",
      get: function get() {
        return cl;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        hl.prototype.__modules__ || (hl.prototype.__modules__ = []);
        var t = hl.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return hl.installModule(e);
        }), hl) : (hl.installModule(e), hl);
      }
    }]);
  }();
  function gl(e, t, r, n) {
    return e.params.createElements && Object.keys(n).forEach(function (i) {
      if (!r[i] && !0 === r.auto) {
        var _s8 = To(e.el, ".".concat(n[i]))[0];
        _s8 || (_s8 = So("div", n[i]), _s8.className = n[i], e.el.append(_s8)), r[i] = _s8, t[i] = _s8;
      }
    }), r;
  }
  function ml(e) {
    var t = e.swiper,
      r = e.extendParams,
      n = e.on,
      i = e.emit;
    function s(e) {
      var r;
      return e && "string" == typeof e && t.isElement && (r = t.el.querySelector(e) || t.hostEl.querySelector(e), r) ? r : (e && ("string" == typeof e && (r = _toConsumableArray(document.querySelectorAll(e))), t.params.uniqueNavElements && "string" == typeof e && r && r.length > 1 && 1 === t.el.querySelectorAll(e).length ? r = t.el.querySelector(e) : r && 1 === r.length && (r = r[0])), e && !r ? e : r);
    }
    function a(e, r) {
      var n = t.params.navigation;
      (e = Po(e)).forEach(function (e) {
        var _e$classList2;
        e && ((_e$classList2 = e.classList)[r ? "add" : "remove"].apply(_e$classList2, _toConsumableArray(n.disabledClass.split(" "))), "BUTTON" === e.tagName && (e.disabled = r), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass));
      });
    }
    function o() {
      var _t$navigation = t.navigation,
        e = _t$navigation.nextEl,
        r = _t$navigation.prevEl;
      if (t.params.loop) return a(r, !1), void a(e, !1);
      a(r, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind);
    }
    function l(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function d(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function c() {
      var e = t.params.navigation;
      if (t.params.navigation = gl(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var r = s(e.nextEl),
        n = s(e.prevEl);
      Object.assign(t.navigation, {
        nextEl: r,
        prevEl: n
      }), r = Po(r), n = Po(n);
      var i = function i(r, n) {
        var _r$classList2;
        r && r.addEventListener("click", "next" === n ? d : l), !t.enabled && r && (_r$classList2 = r.classList).add.apply(_r$classList2, _toConsumableArray(e.lockClass.split(" ")));
      };
      r.forEach(function (e) {
        return i(e, "next");
      }), n.forEach(function (e) {
        return i(e, "prev");
      });
    }
    function p() {
      var _t$navigation2 = t.navigation,
        e = _t$navigation2.nextEl,
        r = _t$navigation2.prevEl;
      e = Po(e), r = Po(r);
      var n = function n(e, r) {
        var _e$classList3;
        e.removeEventListener("click", "next" === r ? d : l), (_e$classList3 = e.classList).remove.apply(_e$classList3, _toConsumableArray(t.params.navigation.disabledClass.split(" ")));
      };
      e.forEach(function (e) {
        return n(e, "next");
      }), r.forEach(function (e) {
        return n(e, "prev");
      });
    }
    r({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null
    }, n("init", function () {
      !1 === t.params.navigation.enabled ? u() : (c(), o());
    }), n("toEdge fromEdge lock unlock", function () {
      o();
    }), n("destroy", function () {
      p();
    }), n("enable disable", function () {
      var _t$navigation3 = t.navigation,
        e = _t$navigation3.nextEl,
        r = _t$navigation3.prevEl;
      e = Po(e), r = Po(r), t.enabled ? o() : [].concat(_toConsumableArray(e), _toConsumableArray(r)).filter(function (e) {
        return !!e;
      }).forEach(function (e) {
        return e.classList.add(t.params.navigation.lockClass);
      });
    }), n("click", function (e, r) {
      var _t$navigation4 = t.navigation,
        n = _t$navigation4.nextEl,
        s = _t$navigation4.prevEl;
      n = Po(n), s = Po(s);
      var a = r.target;
      var o = s.includes(a) || n.includes(a);
      if (t.isElement && !o) {
        var _e41 = r.path || r.composedPath && r.composedPath();
        _e41 && (o = _e41.find(function (e) {
          return n.includes(e) || s.includes(e);
        }));
      }
      if (t.params.navigation.hideOnClick && !o) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
        var _e42;
        n.length ? _e42 = n[0].classList.contains(t.params.navigation.hiddenClass) : s.length && (_e42 = s[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === _e42 ? "navigationShow" : "navigationHide"), [].concat(_toConsumableArray(n), _toConsumableArray(s)).filter(function (e) {
          return !!e;
        }).forEach(function (e) {
          return e.classList.toggle(t.params.navigation.hiddenClass);
        });
      }
    });
    var u = function u() {
      var _t$el$classList;
      (_t$el$classList = t.el.classList).add.apply(_t$el$classList, _toConsumableArray(t.params.navigation.navigationDisabledClass.split(" "))), p();
    };
    Object.assign(t.navigation, {
      enable: function enable() {
        var _t$el$classList2;
        (_t$el$classList2 = t.el.classList).remove.apply(_t$el$classList2, _toConsumableArray(t.params.navigation.navigationDisabledClass.split(" "))), c(), o();
      },
      disable: u,
      update: o,
      init: c,
      destroy: p
    });
  }
  function vl(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."));
  }
  function wl(e) {
    var t = e.swiper,
      r = e.extendParams,
      n = e.on,
      i = e.emit;
    var s = "swiper-pagination";
    var a;
    r({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(s, "-bullet"),
        bulletActiveClass: "".concat(s, "-bullet-active"),
        modifierClass: "".concat(s, "-"),
        currentClass: "".concat(s, "-current"),
        totalClass: "".concat(s, "-total"),
        hiddenClass: "".concat(s, "-hidden"),
        progressbarFillClass: "".concat(s, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(s, "-progressbar-opposite"),
        clickableClass: "".concat(s, "-clickable"),
        lockClass: "".concat(s, "-lock"),
        horizontalClass: "".concat(s, "-horizontal"),
        verticalClass: "".concat(s, "-vertical"),
        paginationDisabledClass: "".concat(s, "-disabled")
      }
    }), t.pagination = {
      el: null,
      bullets: []
    };
    var o = 0;
    function l() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }
    function d(e, r) {
      var n = t.params.pagination.bulletActiveClass;
      e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add("".concat(n, "-").concat(r)), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add("".concat(n, "-").concat(r, "-").concat(r)));
    }
    function c(e) {
      var r = e.target.closest(vl(t.params.pagination.bulletClass));
      if (!r) return;
      e.preventDefault();
      var n = Co(r) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === n) return;
        var _e43 = (i = t.realIndex, s = n, (s %= a = t.slides.length) == 1 + (i %= a) ? "next" : s === i - 1 ? "previous" : void 0);
        "next" === _e43 ? t.slideNext() : "previous" === _e43 ? t.slidePrev() : t.slideToLoop(n);
      } else t.slideTo(n);
      var i, s, a;
    }
    function p() {
      var e = t.rtl,
        r = t.params.pagination;
      if (l()) return;
      var n,
        s,
        c = t.pagination.el;
      c = Po(c);
      var p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (s = t.previousRealIndex || 0, n = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (n = t.snapIndex, s = t.previousSnapIndex) : (s = t.previousIndex || 0, n = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        var _i9 = t.pagination.bullets;
        var _l6, _p3, _u2;
        if (r.dynamicBullets && (a = ko(_i9[0], t.isHorizontal() ? "width" : "height", !0), c.forEach(function (e) {
          e.style[t.isHorizontal() ? "width" : "height"] = a * (r.dynamicMainBullets + 4) + "px";
        }), r.dynamicMainBullets > 1 && void 0 !== s && (o += n - (s || 0), o > r.dynamicMainBullets - 1 ? o = r.dynamicMainBullets - 1 : o < 0 && (o = 0)), _l6 = Math.max(n - o, 0), _p3 = _l6 + (Math.min(_i9.length, r.dynamicMainBullets) - 1), _u2 = (_p3 + _l6) / 2), _i9.forEach(function (e) {
          var _e$classList4;
          var t = _toConsumableArray(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
            return "".concat(r.bulletActiveClass).concat(e);
          })).map(function (e) {
            return "string" == typeof e && e.includes(" ") ? e.split(" ") : e;
          }).flat();
          (_e$classList4 = e.classList).remove.apply(_e$classList4, _toConsumableArray(t));
        }), c.length > 1) _i9.forEach(function (e) {
          var _e$classList5, _e$classList6;
          var i = Co(e);
          i === n ? (_e$classList5 = e.classList).add.apply(_e$classList5, _toConsumableArray(r.bulletActiveClass.split(" "))) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (i >= _l6 && i <= _p3 && (_e$classList6 = e.classList).add.apply(_e$classList6, _toConsumableArray("".concat(r.bulletActiveClass, "-main").split(" "))), i === _l6 && d(e, "prev"), i === _p3 && d(e, "next"));
        });else {
          var _e44$classList;
          var _e44 = _i9[n];
          if (_e44 && (_e44$classList = _e44.classList).add.apply(_e44$classList, _toConsumableArray(r.bulletActiveClass.split(" "))), t.isElement && _i9.forEach(function (e, t) {
            e.setAttribute("part", t === n ? "bullet-active" : "bullet");
          }), r.dynamicBullets) {
            var _e45 = _i9[_l6],
              _t28 = _i9[_p3];
            for (var _e46 = _l6; _e46 <= _p3; _e46 += 1) {
              var _i9$_e46$classList;
              _i9[_e46] && (_i9$_e46$classList = _i9[_e46].classList).add.apply(_i9$_e46$classList, _toConsumableArray("".concat(r.bulletActiveClass, "-main").split(" ")));
            }
            d(_e45, "prev"), d(_t28, "next");
          }
        }
        if (r.dynamicBullets) {
          var _n23 = Math.min(_i9.length, r.dynamicMainBullets + 4),
            _s9 = (a * _n23 - a) / 2 - _u2 * a,
            _o7 = e ? "right" : "left";
          _i9.forEach(function (e) {
            e.style[t.isHorizontal() ? _o7 : "top"] = "".concat(_s9, "px");
          });
        }
      }
      c.forEach(function (e, s) {
        if ("fraction" === r.type && (e.querySelectorAll(vl(r.currentClass)).forEach(function (e) {
          e.textContent = r.formatFractionCurrent(n + 1);
        }), e.querySelectorAll(vl(r.totalClass)).forEach(function (e) {
          e.textContent = r.formatFractionTotal(u);
        })), "progressbar" === r.type) {
          var _i10;
          _i10 = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          var _s10 = (n + 1) / u;
          var _a5 = 1,
            _o8 = 1;
          "horizontal" === _i10 ? _a5 = _s10 : _o8 = _s10, e.querySelectorAll(vl(r.progressbarFillClass)).forEach(function (e) {
            e.style.transform = "translate3d(0,0,0) scaleX(".concat(_a5, ") scaleY(").concat(_o8, ")"), e.style.transitionDuration = "".concat(t.params.speed, "ms");
          });
        }
        "custom" === r.type && r.renderCustom ? (e.innerHTML = r.renderCustom(t, n + 1, u), 0 === s && i("paginationRender", e)) : (0 === s && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass);
      });
    }
    function u() {
      var e = t.params.pagination;
      if (l()) return;
      var r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
      var n = t.pagination.el;
      n = Po(n);
      var s = "";
      if ("bullets" === e.type) {
        var _n24 = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && _n24 > r && (_n24 = r);
        for (var _r17 = 0; _r17 < _n24; _r17 += 1) e.renderBullet ? s += e.renderBullet.call(t, _r17, e.bulletClass) : s += "<".concat(e.bulletElement, " ").concat(t.isElement ? 'part="bullet"' : "", " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
      }
      "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>")), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>")), t.pagination.bullets = [], n.forEach(function (r) {
        var _t$pagination$bullets;
        "custom" !== e.type && (r.innerHTML = s || ""), "bullets" === e.type && (_t$pagination$bullets = t.pagination.bullets).push.apply(_t$pagination$bullets, _toConsumableArray(r.querySelectorAll(vl(e.bulletClass))));
      }), "custom" !== e.type && i("paginationRender", n[0]);
    }
    function f() {
      t.params.pagination = gl(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      var e = t.params.pagination;
      if (!e.el) return;
      var r;
      "string" == typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" != typeof e.el || (r = _toConsumableArray(document.querySelectorAll(e.el))), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(r) && r.length > 1 && (r = _toConsumableArray(t.el.querySelectorAll(e.el)), r.length > 1 && (r = r.find(function (e) {
        return Mo(e, ".swiper")[0] === t.el;
      }))), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
        el: r
      }), r = Po(r), r.forEach(function (r) {
        var _r$classList3;
        "bullets" === e.type && e.clickable && (_r$classList3 = r.classList).add.apply(_r$classList3, _toConsumableArray((e.clickableClass || "").split(" "))), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add("".concat(e.modifierClass).concat(e.type, "-dynamic")), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", c), t.enabled || r.classList.add(e.lockClass);
      }));
    }
    function h() {
      var e = t.params.pagination;
      if (l()) return;
      var r = t.pagination.el;
      r && (r = Po(r), r.forEach(function (r) {
        var _r$classList4;
        r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && ((_r$classList4 = r.classList).remove.apply(_r$classList4, _toConsumableArray((e.clickableClass || "").split(" "))), r.removeEventListener("click", c));
      })), t.pagination.bullets && t.pagination.bullets.forEach(function (t) {
        var _t$classList;
        return (_t$classList = t.classList).remove.apply(_t$classList, _toConsumableArray(e.bulletActiveClass.split(" ")));
      });
    }
    n("changeDirection", function () {
      if (!t.pagination || !t.pagination.el) return;
      var e = t.params.pagination;
      var r = t.pagination.el;
      r = Po(r), r.forEach(function (r) {
        r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), n("init", function () {
      !1 === t.params.pagination.enabled ? g() : (f(), u(), p());
    }), n("activeIndexChange", function () {
      void 0 === t.snapIndex && p();
    }), n("snapIndexChange", function () {
      p();
    }), n("snapGridLengthChange", function () {
      u(), p();
    }), n("destroy", function () {
      h();
    }), n("enable disable", function () {
      var e = t.pagination.el;
      e && (e = Po(e), e.forEach(function (e) {
        return e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass);
      }));
    }), n("lock unlock", function () {
      p();
    }), n("click", function (e, r) {
      var n = r.target,
        s = Po(t.pagination.el);
      if (t.params.pagination.el && t.params.pagination.hideOnClick && s && s.length > 0 && !n.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
        var _e47 = s[0].classList.contains(t.params.pagination.hiddenClass);
        i(!0 === _e47 ? "paginationShow" : "paginationHide"), s.forEach(function (e) {
          return e.classList.toggle(t.params.pagination.hiddenClass);
        });
      }
    });
    var g = function g() {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      var e = t.pagination.el;
      e && (e = Po(e), e.forEach(function (e) {
        return e.classList.add(t.params.pagination.paginationDisabledClass);
      })), h();
    };
    Object.assign(t.pagination, {
      enable: function enable() {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        var e = t.pagination.el;
        e && (e = Po(e), e.forEach(function (e) {
          return e.classList.remove(t.params.pagination.paginationDisabledClass);
        })), f(), u(), p();
      },
      disable: g,
      render: u,
      update: p,
      init: f,
      destroy: h
    });
  }
  function bl(e, t) {
    var r = xo(t);
    return r !== t && (r.style.backfaceVisibility = "hidden", r.style["-webkit-backface-visibility"] = "hidden"), r;
  }
  function yl(e) {
    var t = e.swiper,
      r = e.extendParams,
      n = e.on;
    r({
      fadeEffect: {
        crossFade: !1
      }
    }), function (e) {
      var t = e.effect,
        r = e.swiper,
        n = e.on,
        i = e.setTranslate,
        s = e.setTransition,
        a = e.overwriteParams,
        o = e.perspective,
        l = e.recreateShadows,
        d = e.getEffectParams;
      var c;
      n("beforeInit", function () {
        if (r.params.effect !== t) return;
        r.classNames.push("".concat(r.params.containerModifierClass).concat(t)), o && o() && r.classNames.push("".concat(r.params.containerModifierClass, "3d"));
        var e = a ? a() : {};
        Object.assign(r.params, e), Object.assign(r.originalParams, e);
      }), n("setTranslate", function () {
        r.params.effect === t && i();
      }), n("setTransition", function (e, n) {
        r.params.effect === t && s(n);
      }), n("transitionEnd", function () {
        if (r.params.effect === t && l) {
          if (!d || !d().slideShadows) return;
          r.slides.forEach(function (e) {
            e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (e) {
              return e.remove();
            });
          }), l();
        }
      }), n("virtualUpdate", function () {
        r.params.effect === t && (r.slides.length || (c = !0), requestAnimationFrame(function () {
          c && r.slides && r.slides.length && (i(), c = !1);
        }));
      });
    }({
      effect: "fade",
      swiper: t,
      on: n,
      setTranslate: function setTranslate() {
        var e = t.slides;
        t.params.fadeEffect;
        for (var _r18 = 0; _r18 < e.length; _r18 += 1) {
          var _e48 = t.slides[_r18];
          var _n25 = -_e48.swiperSlideOffset;
          t.params.virtualTranslate || (_n25 -= t.translate);
          var _i11 = 0;
          t.isHorizontal() || (_i11 = _n25, _n25 = 0);
          var _s11 = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e48.progress), 0) : 1 + Math.min(Math.max(_e48.progress, -1), 0),
            _a6 = bl(0, _e48);
          _a6.style.opacity = _s11, _a6.style.transform = "translate3d(".concat(_n25, "px, ").concat(_i11, "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var r = t.slides.map(function (e) {
          return xo(e);
        });
        r.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms");
        }), function (e) {
          var t = e.swiper,
            r = e.duration,
            n = e.transformElements,
            i = e.allSlides;
          var s = t.activeIndex;
          if (t.params.virtualTranslate && 0 !== r) {
            var _e49,
              _r19 = !1;
            _e49 = i ? n : n.filter(function (e) {
              var r = e.classList.contains("swiper-slide-transform") ? function (e) {
                return e.parentElement ? e.parentElement : t.slides.find(function (t) {
                  return t.shadowRoot && t.shadowRoot === e.parentNode;
                });
              }(e) : e;
              return t.getSlideIndex(r) === s;
            }), _e49.forEach(function (e) {
              !function (e, t) {
                t && e.addEventListener("transitionend", function r(n) {
                  n.target === e && (t.call(e, n), e.removeEventListener("transitionend", r));
                });
              }(e, function () {
                if (_r19) return;
                if (!t || t.destroyed) return;
                _r19 = !0, t.animating = !1;
                var e = new window.CustomEvent("transitionend", {
                  bubbles: !0,
                  cancelable: !0
                });
                t.wrapperEl.dispatchEvent(e);
              });
            });
          }
        }({
          swiper: t,
          duration: e,
          transformElements: r,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }
  Object.keys(ul).forEach(function (e) {
    Object.keys(ul[e]).forEach(function (t) {
      hl.prototype[t] = ul[e][t];
    });
  }), hl.use([function (e) {
    var t = e.swiper,
      r = e.on,
      n = e.emit;
    var i = go();
    var s = null,
      a = null;
    var o = function o() {
        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"));
      },
      l = function l() {
        t && !t.destroyed && t.initialized && n("orientationchange");
      };
    r("init", function () {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver(function (e) {
        a = i.requestAnimationFrame(function () {
          var r = t.width,
            n = t.height;
          var i = r,
            s = n;
          e.forEach(function (e) {
            var r = e.contentBoxSize,
              n = e.contentRect,
              a = e.target;
            a && a !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, s = n ? n.height : (r[0] || r).blockSize);
          }), i === r && s === n || o();
        });
      }), s.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l));
    }), r("destroy", function () {
      a && i.cancelAnimationFrame(a), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l);
    });
  }, function (e) {
    var t = e.swiper,
      r = e.extendParams,
      n = e.on,
      i = e.emit;
    var s = [],
      a = go(),
      o = function o(e, r) {
        void 0 === r && (r = {});
        var n = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void i("observerUpdate", e[0]);
          var r = function r() {
            i("observerUpdate", e[0]);
          };
          a.requestAnimationFrame ? a.requestAnimationFrame(r) : a.setTimeout(r, 0);
        });
        n.observe(e, {
          attributes: void 0 === r.attributes || r.attributes,
          childList: t.isElement || (void 0 === r.childList || r).childList,
          characterData: void 0 === r.characterData || r.characterData
        }), s.push(n);
      };
    r({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), n("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e50 = Mo(t.hostEl);
          for (var _t29 = 0; _t29 < _e50.length; _t29 += 1) o(_e50[_t29]);
        }
        o(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), o(t.wrapperEl, {
          attributes: !1
        });
      }
    }), n("destroy", function () {
      s.forEach(function (e) {
        e.disconnect();
      }), s.splice(0, s.length);
    });
  }]);
  var _l = r(72),
    xl = r.n(_l),
    Tl = r(825),
    Al = r.n(Tl),
    Sl = r(659),
    El = r.n(Sl),
    Cl = r(56),
    Ml = r.n(Cl),
    kl = r(540),
    Pl = r.n(kl),
    Ol = r(113),
    zl = r.n(Ol),
    Ll = r(870),
    Il = {};
  Il.styleTagTransform = zl(), Il.setAttributes = Ml(), Il.insert = El().bind(null, "head"), Il.domAPI = Al(), Il.insertStyleElement = Pl(), xl()(Ll.A, Il), Ll.A && Ll.A.locals && Ll.A.locals;
  var Dl = r(632),
    Bl = {};
  Bl.styleTagTransform = zl(), Bl.setAttributes = Ml(), Bl.insert = El().bind(null, "head"), Bl.domAPI = Al(), Bl.insertStyleElement = Pl(), xl()(Dl.A, Bl), Dl.A && Dl.A.locals && Dl.A.locals;
  var Rl = r(506),
    Fl = {};
  Fl.styleTagTransform = zl(), Fl.setAttributes = Ml(), Fl.insert = El().bind(null, "head"), Fl.domAPI = Al(), Fl.insertStyleElement = Pl(), xl()(Rl.A, Fl), Rl.A && Rl.A.locals && Rl.A.locals;
  var Gl = r(124),
    Nl = {};
  Nl.styleTagTransform = zl(), Nl.setAttributes = Ml(), Nl.insert = El().bind(null, "head"), Nl.domAPI = Al(), Nl.insertStyleElement = Pl(), xl()(Gl.A, Nl), Gl.A && Gl.A.locals && Gl.A.locals, Wn.registerPlugin(eo);
  var Yl = [{
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
    title: "",
    description: "Tempor incididunt...",
    image: "/images/heroImage.jpg"
  }].filter(function (e) {
    return "" !== e.title.trim();
  });
  document.addEventListener("DOMContentLoaded", function () {
    var e = window.innerWidth <= 768,
      t = document.querySelector(".container"),
      r = document.querySelector(".swiper"),
      n = document.querySelector(".swiper .swiper-wrapper");
    if (e) r.style.display = "block", t && (t.style.display = "none"), n && (n.innerHTML = Yl.map(function (e) {
      return "\n                <div class=\"swiper-slide\">\n                    <img src=\"".concat(e.image, "\" alt=\"").concat(e.title, "\" class=\"slide-image\">\n                    <div class=\"slide-content\">\n                        <h1 class=\"anim\">").concat(e.title, "</h1>\n                        <p class=\"anim\">").concat(e.description, "</p>\n                    </div>\n                </div>\n            ");
    }).join("")), new hl(".swiper", {
      modules: [ml, wl, yl],
      effect: "fade",
      loop: !0,
      autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
      },
      fadeEffect: {
        crossFade: !0
      },
      observer: !0,
      observeParents: !0
    });else if (r && (r.style.display = "none"), t) {
      t.style.display = "flex", t.innerHTML = Yl.map(function (e) {
        return "\n                <section class=\"slide\">\n                    <img src=\"".concat(e.image, "\" alt=\"").concat(e.title, "\" class=\"slide-image\">\n                    <div class=\"slide-content\">\n                        <h1 class=\"anim\">").concat(e.title, "</h1>\n                        <p class=\"anim\">").concat(e.description, "</p>\n                    </div>\n                </section>\n            ");
      }).join("");
      var _e51 = Wn.utils.toArray(".slide");
      if (Wn.to(_e51, {
        xPercent: -100 * (_e51.length - 1),
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".container",
          pin: !0,
          scrub: 2.5,
          end: "+=300%"
        }
      }), t) {
        var _e52 = document.createElement("img");
        _e52.src = "/images/ScrollPrompt.png", _e52.alt = "Scroll Down", _e52.classList.add("scroll-arrow"), t.appendChild(_e52), console.log("Săgeata a fost adăugată:", _e52), _e52.addEventListener("click", function () {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        });
      }
    }
  }), document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var e, _t30, _r20;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e = document.querySelector(".scroller-wrapper");
          if (!e) {
            _context.next = 15;
            break;
          }
          _context.prev = 2;
          _context.next = 5;
          return fetch("https://dummyjson.com/products?limit=10");
        case 5:
          _t30 = _context.sent;
          _context.next = 8;
          return _t30.json();
        case 8:
          _r20 = _context.sent;
          e.innerHTML = _r20.products.map(function (e) {
            return "\n                <a href=\"#\" class=\"scroller-item\">\n                    <img src=\"".concat(e.thumbnail, "\" alt=\"").concat(e.title, "\">\n                    <h3>").concat(e.title, "</h3>\n                </a>\n            ");
          }).join("");
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.error("Eroare la preluarea produselor:", _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  })));
})();