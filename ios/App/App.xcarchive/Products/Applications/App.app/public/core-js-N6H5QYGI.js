// node_modules/@ionic/pwa-elements/dist/esm/polyfills/core-js.js
!function(t) {
  "use strict";
  !function(t2) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: false,
        exports: {}
      };
      return t2[r].call(o.exports, o, o.exports, e), o.l = true, o.exports;
    }
    e.m = t2, e.c = n, e.d = function(t3, n2, r) {
      e.o(t3, n2) || Object.defineProperty(t3, n2, {
        enumerable: true,
        get: r
      });
    }, e.r = function(t3) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t3, "__esModule", {
        value: true
      });
    }, e.t = function(t3, n2) {
      if (1 & n2 && (t3 = e(t3)), 8 & n2) return t3;
      if (4 & n2 && "object" == typeof t3 && t3 && t3.__esModule) return t3;
      var r = /* @__PURE__ */ Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: true,
        value: t3
      }), 2 & n2 && "string" != typeof t3) for (var o in t3) e.d(r, o, (function(n3) {
        return t3[n3];
      }).bind(null, o));
      return r;
    }, e.n = function(t3) {
      var n2 = t3 && t3.__esModule ? function() {
        return t3.default;
      } : function() {
        return t3;
      };
      return e.d(n2, "a", n2), n2;
    }, e.o = function(t3, n2) {
      return Object.prototype.hasOwnProperty.call(t3, n2);
    }, e.p = "", e(e.s = 0);
  }([function(t2, n, e) {
    e(1), e(55), e(62), e(68), e(70), e(71), e(72), e(73), e(75), e(76), e(78), e(87), e(88), e(89), e(98), e(99), e(101), e(102), e(103), e(105), e(106), e(107), e(108), e(110), e(111), e(112), e(113), e(114), e(115), e(116), e(117), e(118), e(127), e(130), e(131), e(133), e(135), e(136), e(137), e(138), e(139), e(141), e(143), e(146), e(148), e(150), e(151), e(153), e(154), e(155), e(156), e(157), e(159), e(160), e(162), e(163), e(164), e(165), e(166), e(167), e(168), e(169), e(170), e(172), e(173), e(183), e(184), e(185), e(189), e(191), e(192), e(193), e(194), e(195), e(196), e(198), e(201), e(202), e(203), e(204), e(208), e(209), e(212), e(213), e(214), e(215), e(216), e(217), e(218), e(219), e(221), e(222), e(223), e(226), e(227), e(228), e(229), e(230), e(231), e(232), e(233), e(234), e(235), e(236), e(237), e(238), e(240), e(241), e(243), e(248), t2.exports = e(246);
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(45), a = e(14), u = e(46), c = e(39), f = e(47), s = e(48), l = e(52), p = e(49), h = e(53), v = p("isConcatSpreadable"), g = h >= 51 || !o(function() {
      var t3 = [];
      return t3[v] = false, t3.concat()[0] !== t3;
    }), d = l("concat"), y = function(t3) {
      if (!a(t3)) return false;
      var n2 = t3[v];
      return void 0 !== n2 ? !!n2 : i(t3);
    };
    r({
      target: "Array",
      proto: true,
      forced: !g || !d
    }, {
      concat: function(t3) {
        var n2, e2, r2, o2, i2, a2 = u(this), l2 = s(a2, 0), p2 = 0;
        for (n2 = -1, r2 = arguments.length; n2 < r2; n2++) if (i2 = -1 === n2 ? a2 : arguments[n2], y(i2)) {
          if (p2 + (o2 = c(i2.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          for (e2 = 0; e2 < o2; e2++, p2++) e2 in i2 && f(l2, p2, i2[e2]);
        } else {
          if (p2 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          f(l2, p2++, i2);
        }
        return l2.length = p2, l2;
      }
    });
  }, function(t2, n, e) {
    var r = e(3), o = e(4).f, i = e(18), a = e(21), u = e(22), c = e(32), f = e(44);
    t2.exports = function(t3, n2) {
      var e2, s, l, p, h, v = t3.target, g = t3.global, d = t3.stat;
      if (e2 = g ? r : d ? r[v] || u(v, {}) : (r[v] || {}).prototype) for (s in n2) {
        if (p = n2[s], l = t3.noTargetGet ? (h = o(e2, s)) && h.value : e2[s], !f(g ? s : v + (d ? "." : "#") + s, t3.forced) && void 0 !== l) {
          if (typeof p == typeof l) continue;
          c(p, l);
        }
        (t3.sham || l && l.sham) && i(p, "sham", true), a(e2, s, p, t3);
      }
    };
  }, function(t2, n) {
    var e = function(t3) {
      return t3 && t3.Math == Math && t3;
    };
    t2.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof global && global) || Function("return this")();
  }, function(t2, n, e) {
    var r = e(5), o = e(7), i = e(8), a = e(9), u = e(13), c = e(15), f = e(16), s = Object.getOwnPropertyDescriptor;
    n.f = r ? s : function(t3, n2) {
      if (t3 = a(t3), n2 = u(n2, true), f) try {
        return s(t3, n2);
      } catch (t4) {
      }
      if (c(t3, n2)) return i(!o.f.call(t3, n2), t3[n2]);
    };
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = !r(function() {
      return 7 != Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1];
    });
  }, function(t2, n) {
    t2.exports = function(t3) {
      try {
        return !!t3();
      } catch (t4) {
        return true;
      }
    };
  }, function(t2, n, e) {
    var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({
      1: 2
    }, 1);
    n.f = i ? function(t3) {
      var n2 = o(this, t3);
      return !!n2 && n2.enumerable;
    } : r;
  }, function(t2, n) {
    t2.exports = function(t3, n2) {
      return {
        enumerable: !(1 & t3),
        configurable: !(2 & t3),
        writable: !(4 & t3),
        value: n2
      };
    };
  }, function(t2, n, e) {
    var r = e(10), o = e(12);
    t2.exports = function(t3) {
      return r(o(t3));
    };
  }, function(t2, n, e) {
    var r = e(6), o = e(11), i = "".split;
    t2.exports = r(function() {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function(t3) {
      return "String" == o(t3) ? i.call(t3, "") : Object(t3);
    } : Object;
  }, function(t2, n) {
    var e = {}.toString;
    t2.exports = function(t3) {
      return e.call(t3).slice(8, -1);
    };
  }, function(t2, n) {
    t2.exports = function(t3) {
      if (null == t3) throw TypeError("Can't call method on " + t3);
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(14);
    t2.exports = function(t3, n2) {
      if (!r(t3)) return t3;
      var e2, o;
      if (n2 && "function" == typeof (e2 = t3.toString) && !r(o = e2.call(t3))) return o;
      if ("function" == typeof (e2 = t3.valueOf) && !r(o = e2.call(t3))) return o;
      if (!n2 && "function" == typeof (e2 = t3.toString) && !r(o = e2.call(t3))) return o;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(t2, n) {
    t2.exports = function(t3) {
      return "object" == typeof t3 ? null !== t3 : "function" == typeof t3;
    };
  }, function(t2, n) {
    var e = {}.hasOwnProperty;
    t2.exports = function(t3, n2) {
      return e.call(t3, n2);
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(6), i = e(17);
    t2.exports = !r && !o(function() {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function() {
          return 7;
        }
      }).a;
    });
  }, function(t2, n, e) {
    var r = e(3), o = e(14), i = r.document, a = o(i) && o(i.createElement);
    t2.exports = function(t3) {
      return a ? i.createElement(t3) : {};
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(19), i = e(8);
    t2.exports = r ? function(t3, n2, e2) {
      return o.f(t3, n2, i(1, e2));
    } : function(t3, n2, e2) {
      return t3[n2] = e2, t3;
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(16), i = e(20), a = e(13), u = Object.defineProperty;
    n.f = r ? u : function(t3, n2, e2) {
      if (i(t3), n2 = a(n2, true), i(e2), o) try {
        return u(t3, n2, e2);
      } catch (t4) {
      }
      if ("get" in e2 || "set" in e2) throw TypeError("Accessors not supported");
      return "value" in e2 && (t3[n2] = e2.value), t3;
    };
  }, function(t2, n, e) {
    var r = e(14);
    t2.exports = function(t3) {
      if (!r(t3)) throw TypeError(String(t3) + " is not an object");
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(3), o = e(18), i = e(15), a = e(22), u = e(23), c = e(25), f = c.get, s = c.enforce, l = String(String).split("String");
    (t2.exports = function(t3, n2, e2, u2) {
      var c2 = !!u2 && !!u2.unsafe, f2 = !!u2 && !!u2.enumerable, p = !!u2 && !!u2.noTargetGet;
      "function" == typeof e2 && ("string" != typeof n2 || i(e2, "name") || o(e2, "name", n2), s(e2).source = l.join("string" == typeof n2 ? n2 : "")), t3 !== r ? (c2 ? !p && t3[n2] && (f2 = true) : delete t3[n2], f2 ? t3[n2] = e2 : o(t3, n2, e2)) : f2 ? t3[n2] = e2 : a(n2, e2);
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && f(this).source || u(this);
    });
  }, function(t2, n, e) {
    var r = e(3), o = e(18);
    t2.exports = function(t3, n2) {
      try {
        o(r, t3, n2);
      } catch (e2) {
        r[t3] = n2;
      }
      return n2;
    };
  }, function(t2, n, e) {
    var r = e(24), o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(t3) {
      return o.call(t3);
    }), t2.exports = r.inspectSource;
  }, function(t2, n, e) {
    var r = e(3), o = e(22), i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t2.exports = i;
  }, function(t2, n, e) {
    var r, o, i, a = e(26), u = e(3), c = e(14), f = e(18), s = e(15), l = e(27), p = e(31), h = u.WeakMap;
    if (a) {
      var v = new h(), g = v.get, d = v.has, y = v.set;
      r = function(t3, n2) {
        return y.call(v, t3, n2), n2;
      }, o = function(t3) {
        return g.call(v, t3) || {};
      }, i = function(t3) {
        return d.call(v, t3);
      };
    } else {
      var x = l("state");
      p[x] = true, r = function(t3, n2) {
        return f(t3, x, n2), n2;
      }, o = function(t3) {
        return s(t3, x) ? t3[x] : {};
      }, i = function(t3) {
        return s(t3, x);
      };
    }
    t2.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function(t3) {
        return i(t3) ? o(t3) : r(t3, {});
      },
      getterFor: function(t3) {
        return function(n2) {
          var e2;
          if (!c(n2) || (e2 = o(n2)).type !== t3) throw TypeError("Incompatible receiver, " + t3 + " required");
          return e2;
        };
      }
    };
  }, function(t2, n, e) {
    var r = e(3), o = e(23), i = r.WeakMap;
    t2.exports = "function" == typeof i && /native code/.test(o(i));
  }, function(t2, n, e) {
    var r = e(28), o = e(30), i = r("keys");
    t2.exports = function(t3) {
      return i[t3] || (i[t3] = o(t3));
    };
  }, function(t2, n, e) {
    var r = e(29), o = e(24);
    (t2.exports = function(t3, n2) {
      return o[t3] || (o[t3] = void 0 !== n2 ? n2 : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
    });
  }, function(t2, n) {
    t2.exports = false;
  }, function(t2, n) {
    var e = 0, r = Math.random();
    t2.exports = function(t3) {
      return "Symbol(" + String(void 0 === t3 ? "" : t3) + ")_" + (++e + r).toString(36);
    };
  }, function(t2, n) {
    t2.exports = {};
  }, function(t2, n, e) {
    var r = e(15), o = e(33), i = e(4), a = e(19);
    t2.exports = function(t3, n2) {
      for (var e2 = o(n2), u = a.f, c = i.f, f = 0; f < e2.length; f++) {
        var s = e2[f];
        r(t3, s) || u(t3, s, c(n2, s));
      }
    };
  }, function(t2, n, e) {
    var r = e(34), o = e(36), i = e(43), a = e(20);
    t2.exports = r("Reflect", "ownKeys") || function(t3) {
      var n2 = o.f(a(t3)), e2 = i.f;
      return e2 ? n2.concat(e2(t3)) : n2;
    };
  }, function(t2, n, e) {
    var r = e(35), o = e(3), i = function(t3) {
      return "function" == typeof t3 ? t3 : void 0;
    };
    t2.exports = function(t3, n2) {
      return arguments.length < 2 ? i(r[t3]) || i(o[t3]) : r[t3] && r[t3][n2] || o[t3] && o[t3][n2];
    };
  }, function(t2, n, e) {
    var r = e(3);
    t2.exports = r;
  }, function(t2, n, e) {
    var r = e(37), o = e(42).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t3) {
      return r(t3, o);
    };
  }, function(t2, n, e) {
    var r = e(15), o = e(9), i = e(38).indexOf, a = e(31);
    t2.exports = function(t3, n2) {
      var e2, u = o(t3), c = 0, f = [];
      for (e2 in u) !r(a, e2) && r(u, e2) && f.push(e2);
      for (; n2.length > c; ) r(u, e2 = n2[c++]) && (~i(f, e2) || f.push(e2));
      return f;
    };
  }, function(t2, n, e) {
    var r = e(9), o = e(39), i = e(41), a = function(t3) {
      return function(n2, e2, a2) {
        var u, c = r(n2), f = o(c.length), s = i(a2, f);
        if (t3 && e2 != e2) {
          for (; f > s; ) if ((u = c[s++]) != u) return true;
        } else for (; f > s; s++) if ((t3 || s in c) && c[s] === e2) return t3 || s || 0;
        return !t3 && -1;
      };
    };
    t2.exports = {
      includes: a(true),
      indexOf: a(false)
    };
  }, function(t2, n, e) {
    var r = e(40), o = Math.min;
    t2.exports = function(t3) {
      return t3 > 0 ? o(r(t3), 9007199254740991) : 0;
    };
  }, function(t2, n) {
    var e = Math.ceil, r = Math.floor;
    t2.exports = function(t3) {
      return isNaN(t3 = +t3) ? 0 : (t3 > 0 ? r : e)(t3);
    };
  }, function(t2, n, e) {
    var r = e(40), o = Math.max, i = Math.min;
    t2.exports = function(t3, n2) {
      var e2 = r(t3);
      return e2 < 0 ? o(e2 + n2, 0) : i(e2, n2);
    };
  }, function(t2, n) {
    t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function(t2, n) {
    n.f = Object.getOwnPropertySymbols;
  }, function(t2, n, e) {
    var r = e(6), o = /#|\.prototype\./, i = function(t3, n2) {
      var e2 = u[a(t3)];
      return e2 == f || e2 != c && ("function" == typeof n2 ? r(n2) : !!n2);
    }, a = i.normalize = function(t3) {
      return String(t3).replace(o, ".").toLowerCase();
    }, u = i.data = {}, c = i.NATIVE = "N", f = i.POLYFILL = "P";
    t2.exports = i;
  }, function(t2, n, e) {
    var r = e(11);
    t2.exports = Array.isArray || function(t3) {
      return "Array" == r(t3);
    };
  }, function(t2, n, e) {
    var r = e(12);
    t2.exports = function(t3) {
      return Object(r(t3));
    };
  }, function(t2, n, e) {
    var r = e(13), o = e(19), i = e(8);
    t2.exports = function(t3, n2, e2) {
      var a = r(n2);
      a in t3 ? o.f(t3, a, i(0, e2)) : t3[a] = e2;
    };
  }, function(t2, n, e) {
    var r = e(14), o = e(45), i = e(49)("species");
    t2.exports = function(t3, n2) {
      var e2;
      return o(t3) && ("function" != typeof (e2 = t3.constructor) || e2 !== Array && !o(e2.prototype) ? r(e2) && null === (e2 = e2[i]) && (e2 = void 0) : e2 = void 0), new (void 0 === e2 ? Array : e2)(0 === n2 ? 0 : n2);
    };
  }, function(t2, n, e) {
    var r = e(3), o = e(28), i = e(15), a = e(30), u = e(50), c = e(51), f = o("wks"), s = r.Symbol, l = c ? s : s && s.withoutSetter || a;
    t2.exports = function(t3) {
      return i(f, t3) || (u && i(s, t3) ? f[t3] = s[t3] : f[t3] = l("Symbol." + t3)), f[t3];
    };
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = !!Object.getOwnPropertySymbols && !r(function() {
      return !String(Symbol());
    });
  }, function(t2, n, e) {
    var r = e(50);
    t2.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, function(t2, n, e) {
    var r = e(6), o = e(49), i = e(53), a = o("species");
    t2.exports = function(t3) {
      return i >= 51 || !r(function() {
        var n2 = [];
        return (n2.constructor = {})[a] = function() {
          return {
            foo: 1
          };
        }, 1 !== n2[t3](Boolean).foo;
      });
    };
  }, function(t2, n, e) {
    var r, o, i = e(3), a = e(54), u = i.process, c = u && u.versions, f = c && c.v8;
    f ? o = (r = f.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t2.exports = o && +o;
  }, function(t2, n, e) {
    var r = e(34);
    t2.exports = r("navigator", "userAgent") || "";
  }, function(t2, n, e) {
    var r = e(2), o = e(56), i = e(57);
    r({
      target: "Array",
      proto: true
    }, {
      copyWithin: o
    }), i("copyWithin");
  }, function(t2, n, e) {
    var r = e(46), o = e(41), i = e(39), a = Math.min;
    t2.exports = [].copyWithin || function(t3, n2) {
      var e2 = r(this), u = i(e2.length), c = o(t3, u), f = o(n2, u), s = arguments.length > 2 ? arguments[2] : void 0, l = a((void 0 === s ? u : o(s, u)) - f, u - c), p = 1;
      for (f < c && c < f + l && (p = -1, f += l - 1, c += l - 1); l-- > 0; ) f in e2 ? e2[c] = e2[f] : delete e2[c], c += p, f += p;
      return e2;
    };
  }, function(t2, n, e) {
    var r = e(49), o = e(58), i = e(19), a = r("unscopables"), u = Array.prototype;
    null == u[a] && i.f(u, a, {
      configurable: true,
      value: o(null)
    }), t2.exports = function(t3) {
      u[a][t3] = true;
    };
  }, function(t2, n, e) {
    var r, o = e(20), i = e(59), a = e(42), u = e(31), c = e(61), f = e(17), s = e(27), l = s("IE_PROTO"), p = function() {
    }, h = function(t3) {
      return "<script>" + t3 + "<\/script>";
    }, v = function() {
      try {
        r = document.domain && new ActiveXObject("htmlfile");
      } catch (t4) {
      }
      var t3, n2;
      v = r ? function(t4) {
        t4.write(h("")), t4.close();
        var n3 = t4.parentWindow.Object;
        return t4 = null, n3;
      }(r) : ((n2 = f("iframe")).style.display = "none", c.appendChild(n2), n2.src = String("javascript:"), (t3 = n2.contentWindow.document).open(), t3.write(h("document.F=Object")), t3.close(), t3.F);
      for (var e2 = a.length; e2--; ) delete v.prototype[a[e2]];
      return v();
    };
    u[l] = true, t2.exports = Object.create || function(t3, n2) {
      var e2;
      return null !== t3 ? (p.prototype = o(t3), e2 = new p(), p.prototype = null, e2[l] = t3) : e2 = v(), void 0 === n2 ? e2 : i(e2, n2);
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(19), i = e(20), a = e(60);
    t2.exports = r ? Object.defineProperties : function(t3, n2) {
      i(t3);
      for (var e2, r2 = a(n2), u = r2.length, c = 0; u > c; ) o.f(t3, e2 = r2[c++], n2[e2]);
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(37), o = e(42);
    t2.exports = Object.keys || function(t3) {
      return r(t3, o);
    };
  }, function(t2, n, e) {
    var r = e(34);
    t2.exports = r("document", "documentElement");
  }, function(t2, n, e) {
    var r = e(2), o = e(63).every, i = e(66), a = e(67), u = i("every"), c = a("every");
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      every: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(64), o = e(10), i = e(46), a = e(39), u = e(48), c = [].push, f = function(t3) {
      var n2 = 1 == t3, e2 = 2 == t3, f2 = 3 == t3, s = 4 == t3, l = 6 == t3, p = 5 == t3 || l;
      return function(h, v, g, d) {
        for (var y, x, m = i(h), b = o(m), S = r(v, g, 3), E = a(b.length), w = 0, O = d || u, R = n2 ? O(h, E) : e2 ? O(h, 0) : void 0; E > w; w++) if ((p || w in b) && (x = S(y = b[w], w, m), t3)) {
          if (n2) R[w] = x;
          else if (x) switch (t3) {
            case 3:
              return true;
            case 5:
              return y;
            case 6:
              return w;
            case 2:
              c.call(R, y);
          }
          else if (s) return false;
        }
        return l ? -1 : f2 || s ? s : R;
      };
    };
    t2.exports = {
      forEach: f(0),
      map: f(1),
      filter: f(2),
      some: f(3),
      every: f(4),
      find: f(5),
      findIndex: f(6)
    };
  }, function(t2, n, e) {
    var r = e(65);
    t2.exports = function(t3, n2, e2) {
      if (r(t3), void 0 === n2) return t3;
      switch (e2) {
        case 0:
          return function() {
            return t3.call(n2);
          };
        case 1:
          return function(e3) {
            return t3.call(n2, e3);
          };
        case 2:
          return function(e3, r2) {
            return t3.call(n2, e3, r2);
          };
        case 3:
          return function(e3, r2, o) {
            return t3.call(n2, e3, r2, o);
          };
      }
      return function() {
        return t3.apply(n2, arguments);
      };
    };
  }, function(t2, n) {
    t2.exports = function(t3) {
      if ("function" != typeof t3) throw TypeError(String(t3) + " is not a function");
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = function(t3, n2) {
      var e2 = [][t3];
      return !!e2 && r(function() {
        e2.call(null, n2 || function() {
          throw 1;
        }, 1);
      });
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(6), i = e(15), a = Object.defineProperty, u = {}, c = function(t3) {
      throw t3;
    };
    t2.exports = function(t3, n2) {
      if (i(u, t3)) return u[t3];
      n2 || (n2 = {});
      var e2 = [][t3], f = !!i(n2, "ACCESSORS") && n2.ACCESSORS, s = i(n2, 0) ? n2[0] : c, l = i(n2, 1) ? n2[1] : void 0;
      return u[t3] = !!e2 && !o(function() {
        if (f && !r) return true;
        var t4 = {
          length: -1
        };
        f ? a(t4, 1, {
          enumerable: true,
          get: c
        }) : t4[1] = 1, e2.call(t4, s, l);
      });
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(69), i = e(57);
    r({
      target: "Array",
      proto: true
    }, {
      fill: o
    }), i("fill");
  }, function(t2, n, e) {
    var r = e(46), o = e(41), i = e(39);
    t2.exports = function(t3) {
      for (var n2 = r(this), e2 = i(n2.length), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, e2), c = a > 2 ? arguments[2] : void 0, f = void 0 === c ? e2 : o(c, e2); f > u; ) n2[u++] = t3;
      return n2;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(63).filter, i = e(52), a = e(67), u = i("filter"), c = a("filter");
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      filter: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(63).find, i = e(57), a = e(67), u = true, c = a("find");
    "find" in [] && Array(1).find(function() {
      u = false;
    }), r({
      target: "Array",
      proto: true,
      forced: u || !c
    }, {
      find: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), i("find");
  }, function(t2, n, e) {
    var r = e(2), o = e(63).findIndex, i = e(57), a = e(67), u = true, c = a("findIndex");
    "findIndex" in [] && Array(1).findIndex(function() {
      u = false;
    }), r({
      target: "Array",
      proto: true,
      forced: u || !c
    }, {
      findIndex: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), i("findIndex");
  }, function(t2, n, e) {
    var r = e(2), o = e(74), i = e(46), a = e(39), u = e(40), c = e(48);
    r({
      target: "Array",
      proto: true
    }, {
      flat: function() {
        var t3 = arguments.length ? arguments[0] : void 0, n2 = i(this), e2 = a(n2.length), r2 = c(n2, 0);
        return r2.length = o(r2, n2, n2, e2, 0, void 0 === t3 ? 1 : u(t3)), r2;
      }
    });
  }, function(t2, n, e) {
    var r = e(45), o = e(39), i = e(64), a = function(t3, n2, e2, u, c, f, s, l) {
      for (var p, h = c, v = 0, g = !!s && i(s, l, 3); v < u; ) {
        if (v in e2) {
          if (p = g ? g(e2[v], v, n2) : e2[v], f > 0 && r(p)) h = a(t3, n2, p, o(p.length), h, f - 1) - 1;
          else {
            if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
            t3[h] = p;
          }
          h++;
        }
        v++;
      }
      return h;
    };
    t2.exports = a;
  }, function(t2, n, e) {
    var r = e(2), o = e(74), i = e(46), a = e(39), u = e(65), c = e(48);
    r({
      target: "Array",
      proto: true
    }, {
      flatMap: function(t3) {
        var n2, e2 = i(this), r2 = a(e2.length);
        return u(t3), (n2 = c(e2, 0)).length = o(n2, e2, e2, r2, 0, 1, t3, arguments.length > 1 ? arguments[1] : void 0), n2;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(77);
    r({
      target: "Array",
      proto: true,
      forced: [].forEach != o
    }, {
      forEach: o
    });
  }, function(t2, n, e) {
    var r = e(63).forEach, o = e(66), i = e(67), a = o("forEach"), u = i("forEach");
    t2.exports = a && u ? [].forEach : function(t3) {
      return r(this, t3, arguments.length > 1 ? arguments[1] : void 0);
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(79);
    r({
      target: "Array",
      stat: true,
      forced: !e(86)(function(t3) {
        Array.from(t3);
      })
    }, {
      from: o
    });
  }, function(t2, n, e) {
    var r = e(64), o = e(46), i = e(80), a = e(81), u = e(39), c = e(47), f = e(83);
    t2.exports = function(t3) {
      var n2, e2, s, l, p, h, v = o(t3), g = "function" == typeof this ? this : Array, d = arguments.length, y = d > 1 ? arguments[1] : void 0, x = void 0 !== y, m = f(v), b = 0;
      if (x && (y = r(y, d > 2 ? arguments[2] : void 0, 2)), null == m || g == Array && a(m)) for (e2 = new g(n2 = u(v.length)); n2 > b; b++) h = x ? y(v[b], b) : v[b], c(e2, b, h);
      else for (p = (l = m.call(v)).next, e2 = new g(); !(s = p.call(l)).done; b++) h = x ? i(l, y, [s.value, b], true) : s.value, c(e2, b, h);
      return e2.length = b, e2;
    };
  }, function(t2, n, e) {
    var r = e(20);
    t2.exports = function(t3, n2, e2, o) {
      try {
        return o ? n2(r(e2)[0], e2[1]) : n2(e2);
      } catch (n3) {
        var i = t3.return;
        throw void 0 !== i && r(i.call(t3)), n3;
      }
    };
  }, function(t2, n, e) {
    var r = e(49), o = e(82), i = r("iterator"), a = Array.prototype;
    t2.exports = function(t3) {
      return void 0 !== t3 && (o.Array === t3 || a[i] === t3);
    };
  }, function(t2, n) {
    t2.exports = {};
  }, function(t2, n, e) {
    var r = e(84), o = e(82), i = e(49)("iterator");
    t2.exports = function(t3) {
      if (null != t3) return t3[i] || t3["@@iterator"] || o[r(t3)];
    };
  }, function(t2, n, e) {
    var r = e(85), o = e(11), i = e(49)("toStringTag"), a = "Arguments" == o(/* @__PURE__ */ function() {
      return arguments;
    }());
    t2.exports = r ? o : function(t3) {
      var n2, e2, r2;
      return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (e2 = function(t4, n3) {
        try {
          return t4[n3];
        } catch (t5) {
        }
      }(n2 = Object(t3), i)) ? e2 : a ? o(n2) : "Object" == (r2 = o(n2)) && "function" == typeof n2.callee ? "Arguments" : r2;
    };
  }, function(t2, n, e) {
    var r = {};
    r[e(49)("toStringTag")] = "z", t2.exports = "[object z]" === String(r);
  }, function(t2, n, e) {
    var r = e(49)("iterator"), o = false;
    try {
      var i = 0, a = {
        next: function() {
          return {
            done: !!i++
          };
        },
        return: function() {
          o = true;
        }
      };
      a[r] = function() {
        return this;
      }, Array.from(a, function() {
        throw 2;
      });
    } catch (t3) {
    }
    t2.exports = function(t3, n2) {
      if (!n2 && !o) return false;
      var e2 = false;
      try {
        var i2 = {};
        i2[r] = function() {
          return {
            next: function() {
              return {
                done: e2 = true
              };
            }
          };
        }, t3(i2);
      } catch (t4) {
      }
      return e2;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(38).includes, i = e(57);
    r({
      target: "Array",
      proto: true,
      forced: !e(67)("indexOf", {
        ACCESSORS: true,
        1: 0
      })
    }, {
      includes: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), i("includes");
  }, function(t2, n, e) {
    var r = e(2), o = e(38).indexOf, i = e(66), a = e(67), u = [].indexOf, c = !!u && 1 / [1].indexOf(1, -0) < 0, f = i("indexOf"), s = a("indexOf", {
      ACCESSORS: true,
      1: 0
    });
    r({
      target: "Array",
      proto: true,
      forced: c || !f || !s
    }, {
      indexOf: function(t3) {
        return c ? u.apply(this, arguments) || 0 : o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(9), o = e(57), i = e(82), a = e(25), u = e(90), c = a.set, f = a.getterFor("Array Iterator");
    t2.exports = u(Array, "Array", function(t3, n2) {
      c(this, {
        type: "Array Iterator",
        target: r(t3),
        index: 0,
        kind: n2
      });
    }, function() {
      var t3 = f(this), n2 = t3.target, e2 = t3.kind, r2 = t3.index++;
      return !n2 || r2 >= n2.length ? (t3.target = void 0, {
        value: void 0,
        done: true
      }) : "keys" == e2 ? {
        value: r2,
        done: false
      } : "values" == e2 ? {
        value: n2[r2],
        done: false
      } : {
        value: [r2, n2[r2]],
        done: false
      };
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
  }, function(t2, n, e) {
    var r = e(2), o = e(91), i = e(93), a = e(96), u = e(95), c = e(18), f = e(21), s = e(49), l = e(29), p = e(82), h = e(92), v = h.IteratorPrototype, g = h.BUGGY_SAFARI_ITERATORS, d = s("iterator"), y = function() {
      return this;
    };
    t2.exports = function(t3, n2, e2, s2, h2, x, m) {
      o(e2, n2, s2);
      var b, S, E, w = function(t4) {
        if (t4 === h2 && I) return I;
        if (!g && t4 in A) return A[t4];
        switch (t4) {
          case "keys":
          case "values":
          case "entries":
            return function() {
              return new e2(this, t4);
            };
        }
        return function() {
          return new e2(this);
        };
      }, O = n2 + " Iterator", R = false, A = t3.prototype, j = A[d] || A["@@iterator"] || h2 && A[h2], I = !g && j || w(h2), k = "Array" == n2 && A.entries || j;
      if (k && (b = i(k.call(new t3())), v !== Object.prototype && b.next && (l || i(b) === v || (a ? a(b, v) : "function" != typeof b[d] && c(b, d, y)), u(b, O, true, true), l && (p[O] = y))), "values" == h2 && j && "values" !== j.name && (R = true, I = function() {
        return j.call(this);
      }), l && !m || A[d] === I || c(A, d, I), p[n2] = I, h2) if (S = {
        values: w("values"),
        keys: x ? I : w("keys"),
        entries: w("entries")
      }, m) for (E in S) (g || R || !(E in A)) && f(A, E, S[E]);
      else r({
        target: n2,
        proto: true,
        forced: g || R
      }, S);
      return S;
    };
  }, function(t2, n, e) {
    var r = e(92).IteratorPrototype, o = e(58), i = e(8), a = e(95), u = e(82), c = function() {
      return this;
    };
    t2.exports = function(t3, n2, e2) {
      var f = n2 + " Iterator";
      return t3.prototype = o(r, {
        next: i(1, e2)
      }), a(t3, f, false, true), u[f] = c, t3;
    };
  }, function(t2, n, e) {
    var r, o, i, a = e(93), u = e(18), c = e(15), f = e(49), s = e(29), l = f("iterator"), p = false;
    [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : p = true), null == r && (r = {}), s || c(r, l) || u(r, l, function() {
      return this;
    }), t2.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: p
    };
  }, function(t2, n, e) {
    var r = e(15), o = e(46), i = e(27), a = e(94), u = i("IE_PROTO"), c = Object.prototype;
    t2.exports = a ? Object.getPrototypeOf : function(t3) {
      return t3 = o(t3), r(t3, u) ? t3[u] : "function" == typeof t3.constructor && t3 instanceof t3.constructor ? t3.constructor.prototype : t3 instanceof Object ? c : null;
    };
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = !r(function() {
      function t3() {
      }
      return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
    });
  }, function(t2, n, e) {
    var r = e(19).f, o = e(15), i = e(49)("toStringTag");
    t2.exports = function(t3, n2, e2) {
      t3 && !o(t3 = e2 ? t3 : t3.prototype, i) && r(t3, i, {
        configurable: true,
        value: n2
      });
    };
  }, function(t2, n, e) {
    var r = e(20), o = e(97);
    t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var t3, n2 = false, e2 = {};
      try {
        (t3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e2, []), n2 = e2 instanceof Array;
      } catch (t4) {
      }
      return function(e3, i) {
        return r(e3), o(i), n2 ? t3.call(e3, i) : e3.__proto__ = i, e3;
      };
    }() : void 0);
  }, function(t2, n, e) {
    var r = e(14);
    t2.exports = function(t3) {
      if (!r(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(10), i = e(9), a = e(66), u = [].join, c = o != Object, f = a("join", ",");
    r({
      target: "Array",
      proto: true,
      forced: c || !f
    }, {
      join: function(t3) {
        return u.call(i(this), void 0 === t3 ? "," : t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(100);
    r({
      target: "Array",
      proto: true,
      forced: o !== [].lastIndexOf
    }, {
      lastIndexOf: o
    });
  }, function(t2, n, e) {
    var r = e(9), o = e(40), i = e(39), a = e(66), u = e(67), c = Math.min, f = [].lastIndexOf, s = !!f && 1 / [1].lastIndexOf(1, -0) < 0, l = a("lastIndexOf"), p = u("indexOf", {
      ACCESSORS: true,
      1: 0
    }), h = s || !l || !p;
    t2.exports = h ? function(t3) {
      if (s) return f.apply(this, arguments) || 0;
      var n2 = r(this), e2 = i(n2.length), a2 = e2 - 1;
      for (arguments.length > 1 && (a2 = c(a2, o(arguments[1]))), a2 < 0 && (a2 = e2 + a2); a2 >= 0; a2--) if (a2 in n2 && n2[a2] === t3) return a2 || 0;
      return -1;
    } : f;
  }, function(t2, n, e) {
    var r = e(2), o = e(63).map, i = e(52), a = e(67), u = i("map"), c = a("map");
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      map: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(47);
    r({
      target: "Array",
      stat: true,
      forced: o(function() {
        function t3() {
        }
        return !(Array.of.call(t3) instanceof t3);
      })
    }, {
      of: function() {
        for (var t3 = 0, n2 = arguments.length, e2 = new ("function" == typeof this ? this : Array)(n2); n2 > t3; ) i(e2, t3, arguments[t3++]);
        return e2.length = n2, e2;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(104).left, i = e(66), a = e(67), u = i("reduce"), c = a("reduce", {
      1: 0
    });
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      reduce: function(t3) {
        return o(this, t3, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(65), o = e(46), i = e(10), a = e(39), u = function(t3) {
      return function(n2, e2, u2, c) {
        r(e2);
        var f = o(n2), s = i(f), l = a(f.length), p = t3 ? l - 1 : 0, h = t3 ? -1 : 1;
        if (u2 < 2) for (; ; ) {
          if (p in s) {
            c = s[p], p += h;
            break;
          }
          if (p += h, t3 ? p < 0 : l <= p) throw TypeError("Reduce of empty array with no initial value");
        }
        for (; t3 ? p >= 0 : l > p; p += h) p in s && (c = e2(c, s[p], p, f));
        return c;
      };
    };
    t2.exports = {
      left: u(false),
      right: u(true)
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(104).right, i = e(66), a = e(67), u = i("reduceRight"), c = a("reduce", {
      1: 0
    });
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      reduceRight: function(t3) {
        return o(this, t3, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(14), i = e(45), a = e(41), u = e(39), c = e(9), f = e(47), s = e(49), l = e(52), p = e(67), h = l("slice"), v = p("slice", {
      ACCESSORS: true,
      0: 0,
      1: 2
    }), g = s("species"), d = [].slice, y = Math.max;
    r({
      target: "Array",
      proto: true,
      forced: !h || !v
    }, {
      slice: function(t3, n2) {
        var e2, r2, s2, l2 = c(this), p2 = u(l2.length), h2 = a(t3, p2), v2 = a(void 0 === n2 ? p2 : n2, p2);
        if (i(l2) && ("function" != typeof (e2 = l2.constructor) || e2 !== Array && !i(e2.prototype) ? o(e2) && null === (e2 = e2[g]) && (e2 = void 0) : e2 = void 0, e2 === Array || void 0 === e2)) return d.call(l2, h2, v2);
        for (r2 = new (void 0 === e2 ? Array : e2)(y(v2 - h2, 0)), s2 = 0; h2 < v2; h2++, s2++) h2 in l2 && f(r2, s2, l2[h2]);
        return r2.length = s2, r2;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(63).some, i = e(66), a = e(67), u = i("some"), c = a("some");
    r({
      target: "Array",
      proto: true,
      forced: !u || !c
    }, {
      some: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    e(109)("Array");
  }, function(t2, n, e) {
    var r = e(34), o = e(19), i = e(49), a = e(5), u = i("species");
    t2.exports = function(t3) {
      var n2 = r(t3), e2 = o.f;
      a && n2 && !n2[u] && e2(n2, u, {
        configurable: true,
        get: function() {
          return this;
        }
      });
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(41), i = e(40), a = e(39), u = e(46), c = e(48), f = e(47), s = e(52), l = e(67), p = s("splice"), h = l("splice", {
      ACCESSORS: true,
      0: 0,
      1: 2
    }), v = Math.max, g = Math.min;
    r({
      target: "Array",
      proto: true,
      forced: !p || !h
    }, {
      splice: function(t3, n2) {
        var e2, r2, s2, l2, p2, h2, d = u(this), y = a(d.length), x = o(t3, y), m = arguments.length;
        if (0 === m ? e2 = r2 = 0 : 1 === m ? (e2 = 0, r2 = y - x) : (e2 = m - 2, r2 = g(v(i(n2), 0), y - x)), y + e2 - r2 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
        for (s2 = c(d, r2), l2 = 0; l2 < r2; l2++) (p2 = x + l2) in d && f(s2, l2, d[p2]);
        if (s2.length = r2, e2 < r2) {
          for (l2 = x; l2 < y - r2; l2++) h2 = l2 + e2, (p2 = l2 + r2) in d ? d[h2] = d[p2] : delete d[h2];
          for (l2 = y; l2 > y - r2 + e2; l2--) delete d[l2 - 1];
        } else if (e2 > r2) for (l2 = y - r2; l2 > x; l2--) h2 = l2 + e2 - 1, (p2 = l2 + r2 - 1) in d ? d[h2] = d[p2] : delete d[h2];
        for (l2 = 0; l2 < e2; l2++) d[l2 + x] = arguments[l2 + 2];
        return d.length = y - r2 + e2, s2;
      }
    });
  }, function(t2, n, e) {
    e(57)("flat");
  }, function(t2, n, e) {
    e(57)("flatMap");
  }, function(t2, n, e) {
    var r = e(14), o = e(19), i = e(93), a = e(49)("hasInstance"), u = Function.prototype;
    a in u || o.f(u, a, {
      value: function(t3) {
        if ("function" != typeof this || !r(t3)) return false;
        if (!r(this.prototype)) return t3 instanceof this;
        for (; t3 = i(t3); ) if (this.prototype === t3) return true;
        return false;
      }
    });
  }, function(t2, n, e) {
    var r = e(5), o = e(19).f, i = Function.prototype, a = i.toString, u = /^\s*function ([^ (]*)/;
    r && !("name" in i) && o(i, "name", {
      configurable: true,
      get: function() {
        try {
          return a.call(this).match(u)[1];
        } catch (t3) {
          return "";
        }
      }
    });
  }, function(t2, n, e) {
    e(2)({
      global: true
    }, {
      globalThis: e(3)
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(34), i = e(6), a = o("JSON", "stringify"), u = /[\uD800-\uDFFF]/g, c = /^[\uD800-\uDBFF]$/, f = /^[\uDC00-\uDFFF]$/, s = function(t3, n2, e2) {
      var r2 = e2.charAt(n2 - 1), o2 = e2.charAt(n2 + 1);
      return c.test(t3) && !f.test(o2) || f.test(t3) && !c.test(r2) ? "\\u" + t3.charCodeAt(0).toString(16) : t3;
    }, l = i(function() {
      return '"\\udf06\\ud834"' !== a("\uDF06\uD834") || '"\\udead"' !== a("\uDEAD");
    });
    a && r({
      target: "JSON",
      stat: true,
      forced: l
    }, {
      stringify: function(t3, n2, e2) {
        var r2 = a.apply(null, arguments);
        return "string" == typeof r2 ? r2.replace(u, s) : r2;
      }
    });
  }, function(t2, n, e) {
    var r = e(3);
    e(95)(r.JSON, "JSON", true);
  }, function(t2, n, e) {
    var r = e(119), o = e(125);
    t2.exports = r("Map", function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, o);
  }, function(t2, n, e) {
    var r = e(2), o = e(3), i = e(44), a = e(21), u = e(120), c = e(122), f = e(123), s = e(14), l = e(6), p = e(86), h = e(95), v = e(124);
    t2.exports = function(t3, n2, e2) {
      var g = -1 !== t3.indexOf("Map"), d = -1 !== t3.indexOf("Weak"), y = g ? "set" : "add", x = o[t3], m = x && x.prototype, b = x, S = {}, E = function(t4) {
        var n3 = m[t4];
        a(m, t4, "add" == t4 ? function(t5) {
          return n3.call(this, 0 === t5 ? 0 : t5), this;
        } : "delete" == t4 ? function(t5) {
          return !(d && !s(t5)) && n3.call(this, 0 === t5 ? 0 : t5);
        } : "get" == t4 ? function(t5) {
          return d && !s(t5) ? void 0 : n3.call(this, 0 === t5 ? 0 : t5);
        } : "has" == t4 ? function(t5) {
          return !(d && !s(t5)) && n3.call(this, 0 === t5 ? 0 : t5);
        } : function(t5, e3) {
          return n3.call(this, 0 === t5 ? 0 : t5, e3), this;
        });
      };
      if (i(t3, "function" != typeof x || !(d || m.forEach && !l(function() {
        new x().entries().next();
      })))) b = e2.getConstructor(n2, t3, g, y), u.REQUIRED = true;
      else if (i(t3, true)) {
        var w = new b(), O = w[y](d ? {} : -0, 1) != w, R = l(function() {
          w.has(1);
        }), A = p(function(t4) {
          new x(t4);
        }), j = !d && l(function() {
          for (var t4 = new x(), n3 = 5; n3--; ) t4[y](n3, n3);
          return !t4.has(-0);
        });
        A || ((b = n2(function(n3, e3) {
          f(n3, b, t3);
          var r2 = v(new x(), n3, b);
          return null != e3 && c(e3, r2[y], r2, g), r2;
        })).prototype = m, m.constructor = b), (R || j) && (E("delete"), E("has"), g && E("get")), (j || O) && E(y), d && m.clear && delete m.clear;
      }
      return S[t3] = b, r({
        global: true,
        forced: b != x
      }, S), h(b, t3), d || e2.setStrong(b, t3, g), b;
    };
  }, function(t2, n, e) {
    var r = e(31), o = e(14), i = e(15), a = e(19).f, u = e(30), c = e(121), f = u("meta"), s = 0, l = Object.isExtensible || function() {
      return true;
    }, p = function(t3) {
      a(t3, f, {
        value: {
          objectID: "O" + ++s,
          weakData: {}
        }
      });
    }, h = t2.exports = {
      REQUIRED: false,
      fastKey: function(t3, n2) {
        if (!o(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
        if (!i(t3, f)) {
          if (!l(t3)) return "F";
          if (!n2) return "E";
          p(t3);
        }
        return t3[f].objectID;
      },
      getWeakData: function(t3, n2) {
        if (!i(t3, f)) {
          if (!l(t3)) return true;
          if (!n2) return false;
          p(t3);
        }
        return t3[f].weakData;
      },
      onFreeze: function(t3) {
        return c && h.REQUIRED && l(t3) && !i(t3, f) && p(t3), t3;
      }
    };
    r[f] = true;
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = !r(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }, function(t2, n, e) {
    var r = e(20), o = e(81), i = e(39), a = e(64), u = e(83), c = e(80), f = function(t3, n2) {
      this.stopped = t3, this.result = n2;
    };
    (t2.exports = function(t3, n2, e2, s, l) {
      var p, h, v, g, d, y, x, m = a(n2, e2, s ? 2 : 1);
      if (l) p = t3;
      else {
        if ("function" != typeof (h = u(t3))) throw TypeError("Target is not iterable");
        if (o(h)) {
          for (v = 0, g = i(t3.length); g > v; v++) if ((d = s ? m(r(x = t3[v])[0], x[1]) : m(t3[v])) && d instanceof f) return d;
          return new f(false);
        }
        p = h.call(t3);
      }
      for (y = p.next; !(x = y.call(p)).done; ) if ("object" == typeof (d = c(p, m, x.value, s)) && d && d instanceof f) return d;
      return new f(false);
    }).stop = function(t3) {
      return new f(true, t3);
    };
  }, function(t2, n) {
    t2.exports = function(t3, n2, e) {
      if (!(t3 instanceof n2)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(14), o = e(96);
    t2.exports = function(t3, n2, e2) {
      var i, a;
      return o && "function" == typeof (i = n2.constructor) && i !== e2 && r(a = i.prototype) && a !== e2.prototype && o(t3, a), t3;
    };
  }, function(t2, n, e) {
    var r = e(19).f, o = e(58), i = e(126), a = e(64), u = e(123), c = e(122), f = e(90), s = e(109), l = e(5), p = e(120).fastKey, h = e(25), v = h.set, g = h.getterFor;
    t2.exports = {
      getConstructor: function(t3, n2, e2, f2) {
        var s2 = t3(function(t4, r2) {
          u(t4, s2, n2), v(t4, {
            type: n2,
            index: o(null),
            first: void 0,
            last: void 0,
            size: 0
          }), l || (t4.size = 0), null != r2 && c(r2, t4[f2], t4, e2);
        }), h2 = g(n2), d = function(t4, n3, e3) {
          var r2, o2, i2 = h2(t4), a2 = y(t4, n3);
          return a2 ? a2.value = e3 : (i2.last = a2 = {
            index: o2 = p(n3, true),
            key: n3,
            value: e3,
            previous: r2 = i2.last,
            next: void 0,
            removed: false
          }, i2.first || (i2.first = a2), r2 && (r2.next = a2), l ? i2.size++ : t4.size++, "F" !== o2 && (i2.index[o2] = a2)), t4;
        }, y = function(t4, n3) {
          var e3, r2 = h2(t4), o2 = p(n3);
          if ("F" !== o2) return r2.index[o2];
          for (e3 = r2.first; e3; e3 = e3.next) if (e3.key == n3) return e3;
        };
        return i(s2.prototype, {
          clear: function() {
            for (var t4 = h2(this), n3 = t4.index, e3 = t4.first; e3; ) e3.removed = true, e3.previous && (e3.previous = e3.previous.next = void 0), delete n3[e3.index], e3 = e3.next;
            t4.first = t4.last = void 0, l ? t4.size = 0 : this.size = 0;
          },
          delete: function(t4) {
            var n3 = h2(this), e3 = y(this, t4);
            if (e3) {
              var r2 = e3.next, o2 = e3.previous;
              delete n3.index[e3.index], e3.removed = true, o2 && (o2.next = r2), r2 && (r2.previous = o2), n3.first == e3 && (n3.first = r2), n3.last == e3 && (n3.last = o2), l ? n3.size-- : this.size--;
            }
            return !!e3;
          },
          forEach: function(t4) {
            for (var n3, e3 = h2(this), r2 = a(t4, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.next : e3.first; ) for (r2(n3.value, n3.key, this); n3 && n3.removed; ) n3 = n3.previous;
          },
          has: function(t4) {
            return !!y(this, t4);
          }
        }), i(s2.prototype, e2 ? {
          get: function(t4) {
            var n3 = y(this, t4);
            return n3 && n3.value;
          },
          set: function(t4, n3) {
            return d(this, 0 === t4 ? 0 : t4, n3);
          }
        } : {
          add: function(t4) {
            return d(this, t4 = 0 === t4 ? 0 : t4, t4);
          }
        }), l && r(s2.prototype, "size", {
          get: function() {
            return h2(this).size;
          }
        }), s2;
      },
      setStrong: function(t3, n2, e2) {
        var r2 = n2 + " Iterator", o2 = g(n2), i2 = g(r2);
        f(t3, n2, function(t4, n3) {
          v(this, {
            type: r2,
            target: t4,
            state: o2(t4),
            kind: n3,
            last: void 0
          });
        }, function() {
          for (var t4 = i2(this), n3 = t4.kind, e3 = t4.last; e3 && e3.removed; ) e3 = e3.previous;
          return t4.target && (t4.last = e3 = e3 ? e3.next : t4.state.first) ? "keys" == n3 ? {
            value: e3.key,
            done: false
          } : "values" == n3 ? {
            value: e3.value,
            done: false
          } : {
            value: [e3.key, e3.value],
            done: false
          } : (t4.target = void 0, {
            value: void 0,
            done: true
          });
        }, e2 ? "entries" : "values", !e2, true), s(n2);
      }
    };
  }, function(t2, n, e) {
    var r = e(21);
    t2.exports = function(t3, n2, e2) {
      for (var o in n2) r(t3, o, n2[o], e2);
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(5), o = e(3), i = e(44), a = e(21), u = e(15), c = e(11), f = e(124), s = e(13), l = e(6), p = e(58), h = e(36).f, v = e(4).f, g = e(19).f, d = e(128).trim, y = o.Number, x = y.prototype, m = "Number" == c(p(x)), b = function(t3) {
      var n2, e2, r2, o2, i2, a2, u2, c2, f2 = s(t3, false);
      if ("string" == typeof f2 && f2.length > 2) {
        if (43 === (n2 = (f2 = d(f2)).charCodeAt(0)) || 45 === n2) {
          if (88 === (e2 = f2.charCodeAt(2)) || 120 === e2) return NaN;
        } else if (48 === n2) {
          switch (f2.charCodeAt(1)) {
            case 66:
            case 98:
              r2 = 2, o2 = 49;
              break;
            case 79:
            case 111:
              r2 = 8, o2 = 55;
              break;
            default:
              return +f2;
          }
          for (a2 = (i2 = f2.slice(2)).length, u2 = 0; u2 < a2; u2++) if ((c2 = i2.charCodeAt(u2)) < 48 || c2 > o2) return NaN;
          return parseInt(i2, r2);
        }
      }
      return +f2;
    };
    if (i("Number", !y(" 0o1") || !y("0b1") || y("+0x1"))) {
      for (var S, E = function(t3) {
        var n2 = arguments.length < 1 ? 0 : t3, e2 = this;
        return e2 instanceof E && (m ? l(function() {
          x.valueOf.call(e2);
        }) : "Number" != c(e2)) ? f(new y(b(n2)), e2, E) : b(n2);
      }, w = r ? h(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), O = 0; w.length > O; O++) u(y, S = w[O]) && !u(E, S) && g(E, S, v(y, S));
      E.prototype = x, x.constructor = E, a(o, "Number", E);
    }
  }, function(t2, n, e) {
    var r = e(12), o = "[" + e(129) + "]", i = RegExp("^" + o + o + "*"), a = RegExp(o + o + "*$"), u = function(t3) {
      return function(n2) {
        var e2 = String(r(n2));
        return 1 & t3 && (e2 = e2.replace(i, "")), 2 & t3 && (e2 = e2.replace(a, "")), e2;
      };
    };
    t2.exports = {
      start: u(1),
      end: u(2),
      trim: u(3)
    };
  }, function(t2, n) {
    t2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      EPSILON: Math.pow(2, -52)
    });
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      isFinite: e(132)
    });
  }, function(t2, n, e) {
    var r = e(3).isFinite;
    t2.exports = Number.isFinite || function(t3) {
      return "number" == typeof t3 && r(t3);
    };
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      isInteger: e(134)
    });
  }, function(t2, n, e) {
    var r = e(14), o = Math.floor;
    t2.exports = function(t3) {
      return !r(t3) && isFinite(t3) && o(t3) === t3;
    };
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      isNaN: function(t3) {
        return t3 != t3;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(134), i = Math.abs;
    r({
      target: "Number",
      stat: true
    }, {
      isSafeInteger: function(t3) {
        return o(t3) && i(t3) <= 9007199254740991;
      }
    });
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  }, function(t2, n, e) {
    e(2)({
      target: "Number",
      stat: true
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(140);
    r({
      target: "Number",
      stat: true,
      forced: Number.parseFloat != o
    }, {
      parseFloat: o
    });
  }, function(t2, n, e) {
    var r = e(3), o = e(128).trim, i = e(129), a = r.parseFloat, u = 1 / a(i + "-0") != -1 / 0;
    t2.exports = u ? function(t3) {
      var n2 = o(String(t3)), e2 = a(n2);
      return 0 === e2 && "-" == n2.charAt(0) ? -0 : e2;
    } : a;
  }, function(t2, n, e) {
    var r = e(2), o = e(142);
    r({
      target: "Number",
      stat: true,
      forced: Number.parseInt != o
    }, {
      parseInt: o
    });
  }, function(t2, n, e) {
    var r = e(3), o = e(128).trim, i = e(129), a = r.parseInt, u = /^[+-]?0[Xx]/, c = 8 !== a(i + "08") || 22 !== a(i + "0x16");
    t2.exports = c ? function(t3, n2) {
      var e2 = o(String(t3));
      return a(e2, n2 >>> 0 || (u.test(e2) ? 16 : 10));
    } : a;
  }, function(t2, n, e) {
    var r = e(2), o = e(40), i = e(144), a = e(145), u = e(6), c = 1 .toFixed, f = Math.floor, s = function(t3, n2, e2) {
      return 0 === n2 ? e2 : n2 % 2 == 1 ? s(t3, n2 - 1, e2 * t3) : s(t3 * t3, n2 / 2, e2);
    };
    r({
      target: "Number",
      proto: true,
      forced: c && ("0.000" !== 8e-5.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !u(function() {
        c.call({});
      })
    }, {
      toFixed: function(t3) {
        var n2, e2, r2, u2, c2 = i(this), l = o(t3), p = [0, 0, 0, 0, 0, 0], h = "", v = "0", g = function(t4, n3) {
          for (var e3 = -1, r3 = n3; ++e3 < 6; ) r3 += t4 * p[e3], p[e3] = r3 % 1e7, r3 = f(r3 / 1e7);
        }, d = function(t4) {
          for (var n3 = 6, e3 = 0; --n3 >= 0; ) e3 += p[n3], p[n3] = f(e3 / t4), e3 = e3 % t4 * 1e7;
        }, y = function() {
          for (var t4 = 6, n3 = ""; --t4 >= 0; ) if ("" !== n3 || 0 === t4 || 0 !== p[t4]) {
            var e3 = String(p[t4]);
            n3 = "" === n3 ? e3 : n3 + a.call("0", 7 - e3.length) + e3;
          }
          return n3;
        };
        if (l < 0 || l > 20) throw RangeError("Incorrect fraction digits");
        if (c2 != c2) return "NaN";
        if (c2 <= -1e21 || c2 >= 1e21) return String(c2);
        if (c2 < 0 && (h = "-", c2 = -c2), c2 > 1e-21) if (e2 = (n2 = function(t4) {
          for (var n3 = 0, e3 = t4; e3 >= 4096; ) n3 += 12, e3 /= 4096;
          for (; e3 >= 2; ) n3 += 1, e3 /= 2;
          return n3;
        }(c2 * s(2, 69, 1)) - 69) < 0 ? c2 * s(2, -n2, 1) : c2 / s(2, n2, 1), e2 *= 4503599627370496, (n2 = 52 - n2) > 0) {
          for (g(0, e2), r2 = l; r2 >= 7; ) g(1e7, 0), r2 -= 7;
          for (g(s(10, r2, 1), 0), r2 = n2 - 1; r2 >= 23; ) d(1 << 23), r2 -= 23;
          d(1 << r2), g(1, 1), d(2), v = y();
        } else g(0, e2), g(1 << -n2, 0), v = y() + a.call("0", l);
        return v = l > 0 ? h + ((u2 = v.length) <= l ? "0." + a.call("0", l - u2) + v : v.slice(0, u2 - l) + "." + v.slice(u2 - l)) : h + v;
      }
    });
  }, function(t2, n, e) {
    var r = e(11);
    t2.exports = function(t3) {
      if ("number" != typeof t3 && "Number" != r(t3)) throw TypeError("Incorrect invocation");
      return +t3;
    };
  }, function(t2, n, e) {
    var r = e(40), o = e(12);
    t2.exports = "".repeat || function(t3) {
      var n2 = String(o(this)), e2 = "", i = r(t3);
      if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; i > 0; (i >>>= 1) && (n2 += n2)) 1 & i && (e2 += n2);
      return e2;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(147);
    r({
      target: "Object",
      stat: true,
      forced: Object.assign !== o
    }, {
      assign: o
    });
  }, function(t2, n, e) {
    var r = e(5), o = e(6), i = e(60), a = e(43), u = e(7), c = e(46), f = e(10), s = Object.assign, l = Object.defineProperty;
    t2.exports = !s || o(function() {
      if (r && 1 !== s({
        b: 1
      }, s(l({}, "a", {
        enumerable: true,
        get: function() {
          l(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), {
        b: 2
      })).b) return true;
      var t3 = {}, n2 = {}, e2 = Symbol();
      return t3[e2] = 7, "abcdefghijklmnopqrst".split("").forEach(function(t4) {
        n2[t4] = t4;
      }), 7 != s({}, t3)[e2] || "abcdefghijklmnopqrst" != i(s({}, n2)).join("");
    }) ? function(t3, n2) {
      for (var e2 = c(t3), o2 = arguments.length, s2 = 1, l2 = a.f, p = u.f; o2 > s2; ) for (var h, v = f(arguments[s2++]), g = l2 ? i(v).concat(l2(v)) : i(v), d = g.length, y = 0; d > y; ) h = g[y++], r && !p.call(v, h) || (e2[h] = v[h]);
      return e2;
    } : s;
  }, function(t2, n, e) {
    var r = e(2), o = e(5), i = e(149), a = e(46), u = e(65), c = e(19);
    o && r({
      target: "Object",
      proto: true,
      forced: i
    }, {
      __defineGetter__: function(t3, n2) {
        c.f(a(this), t3, {
          get: u(n2),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, function(t2, n, e) {
    var r = e(29), o = e(3), i = e(6);
    t2.exports = r || !i(function() {
      var t3 = Math.random();
      __defineSetter__.call(null, t3, function() {
      }), delete o[t3];
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(5), i = e(149), a = e(46), u = e(65), c = e(19);
    o && r({
      target: "Object",
      proto: true,
      forced: i
    }, {
      __defineSetter__: function(t3, n2) {
        c.f(a(this), t3, {
          set: u(n2),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(152).entries;
    r({
      target: "Object",
      stat: true
    }, {
      entries: function(t3) {
        return o(t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(5), o = e(60), i = e(9), a = e(7).f, u = function(t3) {
      return function(n2) {
        for (var e2, u2 = i(n2), c = o(u2), f = c.length, s = 0, l = []; f > s; ) e2 = c[s++], r && !a.call(u2, e2) || l.push(t3 ? [e2, u2[e2]] : u2[e2]);
        return l;
      };
    };
    t2.exports = {
      entries: u(true),
      values: u(false)
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(121), i = e(6), a = e(14), u = e(120).onFreeze, c = Object.freeze;
    r({
      target: "Object",
      stat: true,
      forced: i(function() {
        c(1);
      }),
      sham: !o
    }, {
      freeze: function(t3) {
        return c && a(t3) ? c(u(t3)) : t3;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(122), i = e(47);
    r({
      target: "Object",
      stat: true
    }, {
      fromEntries: function(t3) {
        var n2 = {};
        return o(t3, function(t4, e2) {
          i(n2, t4, e2);
        }, void 0, true), n2;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(9), a = e(4).f, u = e(5), c = o(function() {
      a(1);
    });
    r({
      target: "Object",
      stat: true,
      forced: !u || c,
      sham: !u
    }, {
      getOwnPropertyDescriptor: function(t3, n2) {
        return a(i(t3), n2);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(5), i = e(33), a = e(9), u = e(4), c = e(47);
    r({
      target: "Object",
      stat: true,
      sham: !o
    }, {
      getOwnPropertyDescriptors: function(t3) {
        for (var n2, e2, r2 = a(t3), o2 = u.f, f = i(r2), s = {}, l = 0; f.length > l; ) void 0 !== (e2 = o2(r2, n2 = f[l++])) && c(s, n2, e2);
        return s;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(158).f;
    r({
      target: "Object",
      stat: true,
      forced: o(function() {
        return !Object.getOwnPropertyNames(1);
      })
    }, {
      getOwnPropertyNames: i
    });
  }, function(t2, n, e) {
    var r = e(9), o = e(36).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t2.exports.f = function(t3) {
      return a && "[object Window]" == i.call(t3) ? function(t4) {
        try {
          return o(t4);
        } catch (t5) {
          return a.slice();
        }
      }(t3) : o(r(t3));
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(46), a = e(93), u = e(94);
    r({
      target: "Object",
      stat: true,
      forced: o(function() {
        a(1);
      }),
      sham: !u
    }, {
      getPrototypeOf: function(t3) {
        return a(i(t3));
      }
    });
  }, function(t2, n, e) {
    e(2)({
      target: "Object",
      stat: true
    }, {
      is: e(161)
    });
  }, function(t2, n) {
    t2.exports = Object.is || function(t3, n2) {
      return t3 === n2 ? 0 !== t3 || 1 / t3 == 1 / n2 : t3 != t3 && n2 != n2;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(14), a = Object.isExtensible;
    r({
      target: "Object",
      stat: true,
      forced: o(function() {
        a(1);
      })
    }, {
      isExtensible: function(t3) {
        return !!i(t3) && (!a || a(t3));
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(14), a = Object.isFrozen;
    r({
      target: "Object",
      stat: true,
      forced: o(function() {
        a(1);
      })
    }, {
      isFrozen: function(t3) {
        return !i(t3) || !!a && a(t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(6), i = e(14), a = Object.isSealed;
    r({
      target: "Object",
      stat: true,
      forced: o(function() {
        a(1);
      })
    }, {
      isSealed: function(t3) {
        return !i(t3) || !!a && a(t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(46), i = e(60);
    r({
      target: "Object",
      stat: true,
      forced: e(6)(function() {
        i(1);
      })
    }, {
      keys: function(t3) {
        return i(o(t3));
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(5), i = e(149), a = e(46), u = e(13), c = e(93), f = e(4).f;
    o && r({
      target: "Object",
      proto: true,
      forced: i
    }, {
      __lookupGetter__: function(t3) {
        var n2, e2 = a(this), r2 = u(t3, true);
        do {
          if (n2 = f(e2, r2)) return n2.get;
        } while (e2 = c(e2));
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(5), i = e(149), a = e(46), u = e(13), c = e(93), f = e(4).f;
    o && r({
      target: "Object",
      proto: true,
      forced: i
    }, {
      __lookupSetter__: function(t3) {
        var n2, e2 = a(this), r2 = u(t3, true);
        do {
          if (n2 = f(e2, r2)) return n2.set;
        } while (e2 = c(e2));
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(14), i = e(120).onFreeze, a = e(121), u = e(6), c = Object.preventExtensions;
    r({
      target: "Object",
      stat: true,
      forced: u(function() {
        c(1);
      }),
      sham: !a
    }, {
      preventExtensions: function(t3) {
        return c && o(t3) ? c(i(t3)) : t3;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(14), i = e(120).onFreeze, a = e(121), u = e(6), c = Object.seal;
    r({
      target: "Object",
      stat: true,
      forced: u(function() {
        c(1);
      }),
      sham: !a
    }, {
      seal: function(t3) {
        return c && o(t3) ? c(i(t3)) : t3;
      }
    });
  }, function(t2, n, e) {
    var r = e(85), o = e(21), i = e(171);
    r || o(Object.prototype, "toString", i, {
      unsafe: true
    });
  }, function(t2, n, e) {
    var r = e(85), o = e(84);
    t2.exports = r ? {}.toString : function() {
      return "[object " + o(this) + "]";
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(152).values;
    r({
      target: "Object",
      stat: true
    }, {
      values: function(t3) {
        return o(t3);
      }
    });
  }, function(t2, n, e) {
    var r, o, i, a, u = e(2), c = e(29), f = e(3), s = e(34), l = e(174), p = e(21), h = e(126), v = e(95), g = e(109), d = e(14), y = e(65), x = e(123), m = e(11), b = e(23), S = e(122), E = e(86), w = e(175), O = e(176).set, R = e(178), A = e(179), j = e(181), I = e(180), k = e(182), P = e(25), L = e(44), T = e(49), _ = e(53), U = T("species"), N = "Promise", C = P.get, F = P.set, M = P.getterFor(N), z = l, D = f.TypeError, q = f.document, B = f.process, W = s("fetch"), $ = I.f, G = $, V = "process" == m(B), X = !!(q && q.createEvent && f.dispatchEvent), Y = L(N, function() {
      if (!(b(z) !== String(z))) {
        if (66 === _) return true;
        if (!V && "function" != typeof PromiseRejectionEvent) return true;
      }
      if (c && !z.prototype.finally) return true;
      if (_ >= 51 && /native code/.test(z)) return false;
      var t3 = z.resolve(1), n2 = function(t4) {
        t4(function() {
        }, function() {
        });
      };
      return (t3.constructor = {})[U] = n2, !(t3.then(function() {
      }) instanceof n2);
    }), K = Y || !E(function(t3) {
      z.all(t3).catch(function() {
      });
    }), J = function(t3) {
      var n2;
      return !(!d(t3) || "function" != typeof (n2 = t3.then)) && n2;
    }, H = function(t3, n2, e2) {
      if (!n2.notified) {
        n2.notified = true;
        var r2 = n2.reactions;
        R(function() {
          for (var o2 = n2.value, i2 = 1 == n2.state, a2 = 0; r2.length > a2; ) {
            var u2, c2, f2, s2 = r2[a2++], l2 = i2 ? s2.ok : s2.fail, p2 = s2.resolve, h2 = s2.reject, v2 = s2.domain;
            try {
              l2 ? (i2 || (2 === n2.rejection && nt(t3, n2), n2.rejection = 1), true === l2 ? u2 = o2 : (v2 && v2.enter(), u2 = l2(o2), v2 && (v2.exit(), f2 = true)), u2 === s2.promise ? h2(D("Promise-chain cycle")) : (c2 = J(u2)) ? c2.call(u2, p2, h2) : p2(u2)) : h2(o2);
            } catch (t4) {
              v2 && !f2 && v2.exit(), h2(t4);
            }
          }
          n2.reactions = [], n2.notified = false, e2 && !n2.rejection && Z(t3, n2);
        });
      }
    }, Q = function(t3, n2, e2) {
      var r2, o2;
      X ? ((r2 = q.createEvent("Event")).promise = n2, r2.reason = e2, r2.initEvent(t3, false, true), f.dispatchEvent(r2)) : r2 = {
        promise: n2,
        reason: e2
      }, (o2 = f["on" + t3]) ? o2(r2) : "unhandledrejection" === t3 && j("Unhandled promise rejection", e2);
    }, Z = function(t3, n2) {
      O.call(f, function() {
        var e2, r2 = n2.value;
        if (tt(n2) && (e2 = k(function() {
          V ? B.emit("unhandledRejection", r2, t3) : Q("unhandledrejection", t3, r2);
        }), n2.rejection = V || tt(n2) ? 2 : 1, e2.error)) throw e2.value;
      });
    }, tt = function(t3) {
      return 1 !== t3.rejection && !t3.parent;
    }, nt = function(t3, n2) {
      O.call(f, function() {
        V ? B.emit("rejectionHandled", t3) : Q("rejectionhandled", t3, n2.value);
      });
    }, et = function(t3, n2, e2, r2) {
      return function(o2) {
        t3(n2, e2, o2, r2);
      };
    }, rt = function(t3, n2, e2, r2) {
      n2.done || (n2.done = true, r2 && (n2 = r2), n2.value = e2, n2.state = 2, H(t3, n2, true));
    }, ot = function(t3, n2, e2, r2) {
      if (!n2.done) {
        n2.done = true, r2 && (n2 = r2);
        try {
          if (t3 === e2) throw D("Promise can't be resolved itself");
          var o2 = J(e2);
          o2 ? R(function() {
            var r3 = {
              done: false
            };
            try {
              o2.call(e2, et(ot, t3, r3, n2), et(rt, t3, r3, n2));
            } catch (e3) {
              rt(t3, r3, e3, n2);
            }
          }) : (n2.value = e2, n2.state = 1, H(t3, n2, false));
        } catch (e3) {
          rt(t3, {
            done: false
          }, e3, n2);
        }
      }
    };
    Y && (z = function(t3) {
      x(this, z, N), y(t3), r.call(this);
      var n2 = C(this);
      try {
        t3(et(ot, this, n2), et(rt, this, n2));
      } catch (t4) {
        rt(this, n2, t4);
      }
    }, (r = function(t3) {
      F(this, {
        type: N,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: 0,
        value: void 0
      });
    }).prototype = h(z.prototype, {
      then: function(t3, n2) {
        var e2 = M(this), r2 = $(w(this, z));
        return r2.ok = "function" != typeof t3 || t3, r2.fail = "function" == typeof n2 && n2, r2.domain = V ? B.domain : void 0, e2.parent = true, e2.reactions.push(r2), 0 != e2.state && H(this, e2, false), r2.promise;
      },
      catch: function(t3) {
        return this.then(void 0, t3);
      }
    }), o = function() {
      var t3 = new r(), n2 = C(t3);
      this.promise = t3, this.resolve = et(ot, t3, n2), this.reject = et(rt, t3, n2);
    }, I.f = $ = function(t3) {
      return t3 === z || t3 === i ? new o(t3) : G(t3);
    }, c || "function" != typeof l || (a = l.prototype.then, p(l.prototype, "then", function(t3, n2) {
      var e2 = this;
      return new z(function(t4, n3) {
        a.call(e2, t4, n3);
      }).then(t3, n2);
    }, {
      unsafe: true
    }), "function" == typeof W && u({
      global: true,
      enumerable: true,
      forced: true
    }, {
      fetch: function(t3) {
        return A(z, W.apply(f, arguments));
      }
    }))), u({
      global: true,
      wrap: true,
      forced: Y
    }, {
      Promise: z
    }), v(z, N, false, true), g(N), i = s(N), u({
      target: N,
      stat: true,
      forced: Y
    }, {
      reject: function(t3) {
        var n2 = $(this);
        return n2.reject.call(void 0, t3), n2.promise;
      }
    }), u({
      target: N,
      stat: true,
      forced: c || Y
    }, {
      resolve: function(t3) {
        return A(c && this === i ? z : this, t3);
      }
    }), u({
      target: N,
      stat: true,
      forced: K
    }, {
      all: function(t3) {
        var n2 = this, e2 = $(n2), r2 = e2.resolve, o2 = e2.reject, i2 = k(function() {
          var e3 = y(n2.resolve), i3 = [], a2 = 0, u2 = 1;
          S(t3, function(t4) {
            var c2 = a2++, f2 = false;
            i3.push(void 0), u2++, e3.call(n2, t4).then(function(t5) {
              f2 || (f2 = true, i3[c2] = t5, --u2 || r2(i3));
            }, o2);
          }), --u2 || r2(i3);
        });
        return i2.error && o2(i2.value), e2.promise;
      },
      race: function(t3) {
        var n2 = this, e2 = $(n2), r2 = e2.reject, o2 = k(function() {
          var o3 = y(n2.resolve);
          S(t3, function(t4) {
            o3.call(n2, t4).then(e2.resolve, r2);
          });
        });
        return o2.error && r2(o2.value), e2.promise;
      }
    });
  }, function(t2, n, e) {
    var r = e(3);
    t2.exports = r.Promise;
  }, function(t2, n, e) {
    var r = e(20), o = e(65), i = e(49)("species");
    t2.exports = function(t3, n2) {
      var e2, a = r(t3).constructor;
      return void 0 === a || null == (e2 = r(a)[i]) ? n2 : o(e2);
    };
  }, function(t2, n, e) {
    var r, o, i, a = e(3), u = e(6), c = e(11), f = e(64), s = e(61), l = e(17), p = e(177), h = a.location, v = a.setImmediate, g = a.clearImmediate, d = a.process, y = a.MessageChannel, x = a.Dispatch, m = 0, b = {}, S = function(t3) {
      if (b.hasOwnProperty(t3)) {
        var n2 = b[t3];
        delete b[t3], n2();
      }
    }, E = function(t3) {
      return function() {
        S(t3);
      };
    }, w = function(t3) {
      S(t3.data);
    }, O = function(t3) {
      a.postMessage(t3 + "", h.protocol + "//" + h.host);
    };
    v && g || (v = function(t3) {
      for (var n2 = [], e2 = 1; arguments.length > e2; ) n2.push(arguments[e2++]);
      return b[++m] = function() {
        ("function" == typeof t3 ? t3 : Function(t3)).apply(void 0, n2);
      }, r(m), m;
    }, g = function(t3) {
      delete b[t3];
    }, "process" == c(d) ? r = function(t3) {
      d.nextTick(E(t3));
    } : x && x.now ? r = function(t3) {
      x.now(E(t3));
    } : y && !p ? (i = (o = new y()).port2, o.port1.onmessage = w, r = f(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || u(O) || "file:" === h.protocol ? r = "onreadystatechange" in l("script") ? function(t3) {
      s.appendChild(l("script")).onreadystatechange = function() {
        s.removeChild(this), S(t3);
      };
    } : function(t3) {
      setTimeout(E(t3), 0);
    } : (r = O, a.addEventListener("message", w, false))), t2.exports = {
      set: v,
      clear: g
    };
  }, function(t2, n, e) {
    var r = e(54);
    t2.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  }, function(t2, n, e) {
    var r, o, i, a, u, c, f, s, l = e(3), p = e(4).f, h = e(11), v = e(176).set, g = e(177), d = l.MutationObserver || l.WebKitMutationObserver, y = l.process, x = l.Promise, m = "process" == h(y), b = p(l, "queueMicrotask"), S = b && b.value;
    S || (r = function() {
      var t3, n2;
      for (m && (t3 = y.domain) && t3.exit(); o; ) {
        n2 = o.fn, o = o.next;
        try {
          n2();
        } catch (t4) {
          throw o ? a() : i = void 0, t4;
        }
      }
      i = void 0, t3 && t3.enter();
    }, m ? a = function() {
      y.nextTick(r);
    } : d && !g ? (u = true, c = document.createTextNode(""), new d(r).observe(c, {
      characterData: true
    }), a = function() {
      c.data = u = !u;
    }) : x && x.resolve ? (f = x.resolve(void 0), s = f.then, a = function() {
      s.call(f, r);
    }) : a = function() {
      v.call(l, r);
    }), t2.exports = S || function(t3) {
      var n2 = {
        fn: t3,
        next: void 0
      };
      i && (i.next = n2), o || (o = n2, a()), i = n2;
    };
  }, function(t2, n, e) {
    var r = e(20), o = e(14), i = e(180);
    t2.exports = function(t3, n2) {
      if (r(t3), o(n2) && n2.constructor === t3) return n2;
      var e2 = i.f(t3);
      return (0, e2.resolve)(n2), e2.promise;
    };
  }, function(t2, n, e) {
    var r = e(65), o = function(t3) {
      var n2, e2;
      this.promise = new t3(function(t4, r2) {
        if (void 0 !== n2 || void 0 !== e2) throw TypeError("Bad Promise constructor");
        n2 = t4, e2 = r2;
      }), this.resolve = r(n2), this.reject = r(e2);
    };
    t2.exports.f = function(t3) {
      return new o(t3);
    };
  }, function(t2, n, e) {
    var r = e(3);
    t2.exports = function(t3, n2) {
      var e2 = r.console;
      e2 && e2.error && (1 === arguments.length ? e2.error(t3) : e2.error(t3, n2));
    };
  }, function(t2, n) {
    t2.exports = function(t3) {
      try {
        return {
          error: false,
          value: t3()
        };
      } catch (t4) {
        return {
          error: true,
          value: t4
        };
      }
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(65), i = e(180), a = e(182), u = e(122);
    r({
      target: "Promise",
      stat: true
    }, {
      allSettled: function(t3) {
        var n2 = this, e2 = i.f(n2), r2 = e2.resolve, c = e2.reject, f = a(function() {
          var e3 = o(n2.resolve), i2 = [], a2 = 0, c2 = 1;
          u(t3, function(t4) {
            var o2 = a2++, u2 = false;
            i2.push(void 0), c2++, e3.call(n2, t4).then(function(t5) {
              u2 || (u2 = true, i2[o2] = {
                status: "fulfilled",
                value: t5
              }, --c2 || r2(i2));
            }, function(t5) {
              u2 || (u2 = true, i2[o2] = {
                status: "rejected",
                reason: t5
              }, --c2 || r2(i2));
            });
          }), --c2 || r2(i2);
        });
        return f.error && c(f.value), e2.promise;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(29), i = e(174), a = e(6), u = e(34), c = e(175), f = e(179), s = e(21);
    r({
      target: "Promise",
      proto: true,
      real: true,
      forced: !!i && a(function() {
        i.prototype.finally.call({
          then: function() {
          }
        }, function() {
        });
      })
    }, {
      finally: function(t3) {
        var n2 = c(this, u("Promise")), e2 = "function" == typeof t3;
        return this.then(e2 ? function(e3) {
          return f(n2, t3()).then(function() {
            return e3;
          });
        } : t3, e2 ? function(e3) {
          return f(n2, t3()).then(function() {
            throw e3;
          });
        } : t3);
      }
    }), o || "function" != typeof i || i.prototype.finally || s(i.prototype, "finally", u("Promise").prototype.finally);
  }, function(t2, n, e) {
    var r = e(5), o = e(3), i = e(44), a = e(124), u = e(19).f, c = e(36).f, f = e(186), s = e(187), l = e(188), p = e(21), h = e(6), v = e(25).set, g = e(109), d = e(49)("match"), y = o.RegExp, x = y.prototype, m = /a/g, b = /a/g, S = new y(m) !== m, E = l.UNSUPPORTED_Y;
    if (r && i("RegExp", !S || E || h(function() {
      return b[d] = false, y(m) != m || y(b) == b || "/a/i" != y(m, "i");
    }))) {
      for (var w = function(t3, n2) {
        var e2, r2 = this instanceof w, o2 = f(t3), i2 = void 0 === n2;
        if (!r2 && o2 && t3.constructor === w && i2) return t3;
        S ? o2 && !i2 && (t3 = t3.source) : t3 instanceof w && (i2 && (n2 = s.call(t3)), t3 = t3.source), E && (e2 = !!n2 && n2.indexOf("y") > -1) && (n2 = n2.replace(/y/g, ""));
        var u2 = a(S ? new y(t3, n2) : y(t3, n2), r2 ? this : x, w);
        return E && e2 && v(u2, {
          sticky: e2
        }), u2;
      }, O = function(t3) {
        t3 in w || u(w, t3, {
          configurable: true,
          get: function() {
            return y[t3];
          },
          set: function(n2) {
            y[t3] = n2;
          }
        });
      }, R = c(y), A = 0; R.length > A; ) O(R[A++]);
      x.constructor = w, w.prototype = x, p(o, "RegExp", w);
    }
    g("RegExp");
  }, function(t2, n, e) {
    var r = e(14), o = e(11), i = e(49)("match");
    t2.exports = function(t3) {
      var n2;
      return r(t3) && (void 0 !== (n2 = t3[i]) ? !!n2 : "RegExp" == o(t3));
    };
  }, function(t2, n, e) {
    var r = e(20);
    t2.exports = function() {
      var t3 = r(this), n2 = "";
      return t3.global && (n2 += "g"), t3.ignoreCase && (n2 += "i"), t3.multiline && (n2 += "m"), t3.dotAll && (n2 += "s"), t3.unicode && (n2 += "u"), t3.sticky && (n2 += "y"), n2;
    };
  }, function(t2, n, e) {
    var r = e(6);
    function o(t3, n2) {
      return RegExp(t3, n2);
    }
    n.UNSUPPORTED_Y = r(function() {
      var t3 = o("a", "y");
      return t3.lastIndex = 2, null != t3.exec("abcd");
    }), n.BROKEN_CARET = r(function() {
      var t3 = o("^r", "gy");
      return t3.lastIndex = 2, null != t3.exec("str");
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(190);
    r({
      target: "RegExp",
      proto: true,
      forced: /./.exec !== o
    }, {
      exec: o
    });
  }, function(t2, n, e) {
    var r, o, i = e(187), a = e(188), u = RegExp.prototype.exec, c = String.prototype.replace, f = u, s = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex), l = a.UNSUPPORTED_Y || a.BROKEN_CARET, p = void 0 !== /()??/.exec("")[1];
    (s || p || l) && (f = function(t3) {
      var n2, e2, r2, o2, a2 = this, f2 = l && a2.sticky, h = i.call(a2), v = a2.source, g = 0, d = t3;
      return f2 && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), d = String(t3).slice(a2.lastIndex), a2.lastIndex > 0 && (!a2.multiline || a2.multiline && "\n" !== t3[a2.lastIndex - 1]) && (v = "(?: " + v + ")", d = " " + d, g++), e2 = new RegExp("^(?:" + v + ")", h)), p && (e2 = new RegExp("^" + v + "$(?!\\s)", h)), s && (n2 = a2.lastIndex), r2 = u.call(f2 ? e2 : a2, d), f2 ? r2 ? (r2.input = r2.input.slice(g), r2[0] = r2[0].slice(g), r2.index = a2.lastIndex, a2.lastIndex += r2[0].length) : a2.lastIndex = 0 : s && r2 && (a2.lastIndex = a2.global ? r2.index + r2[0].length : n2), p && r2 && r2.length > 1 && c.call(r2[0], e2, function() {
        for (o2 = 1; o2 < arguments.length - 2; o2++) void 0 === arguments[o2] && (r2[o2] = void 0);
      }), r2;
    }), t2.exports = f;
  }, function(t2, n, e) {
    var r = e(5), o = e(19), i = e(187), a = e(188).UNSUPPORTED_Y;
    r && ("g" != /./g.flags || a) && o.f(RegExp.prototype, "flags", {
      configurable: true,
      get: i
    });
  }, function(t2, n, e) {
    var r = e(5), o = e(188).UNSUPPORTED_Y, i = e(19).f, a = e(25).get, u = RegExp.prototype;
    r && o && i(RegExp.prototype, "sticky", {
      configurable: true,
      get: function() {
        if (this !== u) {
          if (this instanceof RegExp) return !!a(this).sticky;
          throw TypeError("Incompatible receiver, RegExp required");
        }
      }
    });
  }, function(t2, n, e) {
    e(189);
    var r, o, i = e(2), a = e(14), u = (r = false, (o = /[ac]/).exec = function() {
      return r = true, /./.exec.apply(this, arguments);
    }, true === o.test("abc") && r), c = /./.test;
    i({
      target: "RegExp",
      proto: true,
      forced: !u
    }, {
      test: function(t3) {
        if ("function" != typeof this.exec) return c.call(this, t3);
        var n2 = this.exec(t3);
        if (null !== n2 && !a(n2)) throw new Error("RegExp exec method returned something other than an Object or null");
        return !!n2;
      }
    });
  }, function(t2, n, e) {
    var r = e(21), o = e(20), i = e(6), a = e(187), u = RegExp.prototype, c = u.toString, f = i(function() {
      return "/a/b" != c.call({
        source: "a",
        flags: "b"
      });
    }), s = "toString" != c.name;
    (f || s) && r(RegExp.prototype, "toString", function() {
      var t3 = o(this), n2 = String(t3.source), e2 = t3.flags;
      return "/" + n2 + "/" + String(void 0 === e2 && t3 instanceof RegExp && !("flags" in u) ? a.call(t3) : e2);
    }, {
      unsafe: true
    });
  }, function(t2, n, e) {
    var r = e(119), o = e(125);
    t2.exports = r("Set", function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, o);
  }, function(t2, n, e) {
    var r = e(2), o = e(197).codeAt;
    r({
      target: "String",
      proto: true
    }, {
      codePointAt: function(t3) {
        return o(this, t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(40), o = e(12), i = function(t3) {
      return function(n2, e2) {
        var i2, a, u = String(o(n2)), c = r(e2), f = u.length;
        return c < 0 || c >= f ? t3 ? "" : void 0 : (i2 = u.charCodeAt(c)) < 55296 || i2 > 56319 || c + 1 === f || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t3 ? u.charAt(c) : i2 : t3 ? u.slice(c, c + 2) : a - 56320 + (i2 - 55296 << 10) + 65536;
      };
    };
    t2.exports = {
      codeAt: i(false),
      charAt: i(true)
    };
  }, function(t2, n, e) {
    var r, o = e(2), i = e(4).f, a = e(39), u = e(199), c = e(12), f = e(200), s = e(29), l = "".endsWith, p = Math.min, h = f("endsWith");
    o({
      target: "String",
      proto: true,
      forced: !!(s || h || (r = i(String.prototype, "endsWith"), !r || r.writable)) && !h
    }, {
      endsWith: function(t3) {
        var n2 = String(c(this));
        u(t3);
        var e2 = arguments.length > 1 ? arguments[1] : void 0, r2 = a(n2.length), o2 = void 0 === e2 ? r2 : p(a(e2), r2), i2 = String(t3);
        return l ? l.call(n2, i2, o2) : n2.slice(o2 - i2.length, o2) === i2;
      }
    });
  }, function(t2, n, e) {
    var r = e(186);
    t2.exports = function(t3) {
      if (r(t3)) throw TypeError("The method doesn't accept regular expressions");
      return t3;
    };
  }, function(t2, n, e) {
    var r = e(49)("match");
    t2.exports = function(t3) {
      var n2 = /./;
      try {
        "/./"[t3](n2);
      } catch (e2) {
        try {
          return n2[r] = false, "/./"[t3](n2);
        } catch (t4) {
        }
      }
      return false;
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(41), i = String.fromCharCode, a = String.fromCodePoint;
    r({
      target: "String",
      stat: true,
      forced: !!a && 1 != a.length
    }, {
      fromCodePoint: function(t3) {
        for (var n2, e2 = [], r2 = arguments.length, a2 = 0; r2 > a2; ) {
          if (n2 = +arguments[a2++], o(n2, 1114111) !== n2) throw RangeError(n2 + " is not a valid code point");
          e2.push(n2 < 65536 ? i(n2) : i(55296 + ((n2 -= 65536) >> 10), n2 % 1024 + 56320));
        }
        return e2.join("");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(199), i = e(12);
    r({
      target: "String",
      proto: true,
      forced: !e(200)("includes")
    }, {
      includes: function(t3) {
        return !!~String(i(this)).indexOf(o(t3), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(197).charAt, o = e(25), i = e(90), a = o.set, u = o.getterFor("String Iterator");
    i(String, "String", function(t3) {
      a(this, {
        type: "String Iterator",
        string: String(t3),
        index: 0
      });
    }, function() {
      var t3, n2 = u(this), e2 = n2.string, o2 = n2.index;
      return o2 >= e2.length ? {
        value: void 0,
        done: true
      } : (t3 = r(e2, o2), n2.index += t3.length, {
        value: t3,
        done: false
      });
    });
  }, function(t2, n, e) {
    var r = e(205), o = e(20), i = e(39), a = e(12), u = e(206), c = e(207);
    r("match", 1, function(t3, n2, e2) {
      return [function(n3) {
        var e3 = a(this), r2 = null == n3 ? void 0 : n3[t3];
        return void 0 !== r2 ? r2.call(n3, e3) : new RegExp(n3)[t3](String(e3));
      }, function(t4) {
        var r2 = e2(n2, t4, this);
        if (r2.done) return r2.value;
        var a2 = o(t4), f = String(this);
        if (!a2.global) return c(a2, f);
        var s = a2.unicode;
        a2.lastIndex = 0;
        for (var l, p = [], h = 0; null !== (l = c(a2, f)); ) {
          var v = String(l[0]);
          p[h] = v, "" === v && (a2.lastIndex = u(f, i(a2.lastIndex), s)), h++;
        }
        return 0 === h ? null : p;
      }];
    });
  }, function(t2, n, e) {
    e(189);
    var r = e(21), o = e(6), i = e(49), a = e(190), u = e(18), c = i("species"), f = !o(function() {
      var t3 = /./;
      return t3.exec = function() {
        var t4 = [];
        return t4.groups = {
          a: "7"
        }, t4;
      }, "7" !== "".replace(t3, "$<a>");
    }), s = "$0" === "a".replace(/./, "$0"), l = i("replace"), p = !!/./[l] && "" === /./[l]("a", "$0"), h = !o(function() {
      var t3 = /(?:)/, n2 = t3.exec;
      t3.exec = function() {
        return n2.apply(this, arguments);
      };
      var e2 = "ab".split(t3);
      return 2 !== e2.length || "a" !== e2[0] || "b" !== e2[1];
    });
    t2.exports = function(t3, n2, e2, l2) {
      var v = i(t3), g = !o(function() {
        var n3 = {};
        return n3[v] = function() {
          return 7;
        }, 7 != ""[t3](n3);
      }), d = g && !o(function() {
        var n3 = false, e3 = /a/;
        return "split" === t3 && ((e3 = {}).constructor = {}, e3.constructor[c] = function() {
          return e3;
        }, e3.flags = "", e3[v] = /./[v]), e3.exec = function() {
          return n3 = true, null;
        }, e3[v](""), !n3;
      });
      if (!g || !d || "replace" === t3 && (!f || !s || p) || "split" === t3 && !h) {
        var y = /./[v], x = e2(v, ""[t3], function(t4, n3, e3, r2, o2) {
          return n3.exec === a ? g && !o2 ? {
            done: true,
            value: y.call(n3, e3, r2)
          } : {
            done: true,
            value: t4.call(e3, n3, r2)
          } : {
            done: false
          };
        }, {
          REPLACE_KEEPS_$0: s,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
        }), m = x[0], b = x[1];
        r(String.prototype, t3, m), r(RegExp.prototype, v, 2 == n2 ? function(t4, n3) {
          return b.call(t4, this, n3);
        } : function(t4) {
          return b.call(t4, this);
        });
      }
      l2 && u(RegExp.prototype[v], "sham", true);
    };
  }, function(t2, n, e) {
    var r = e(197).charAt;
    t2.exports = function(t3, n2, e2) {
      return n2 + (e2 ? r(t3, n2).length : 1);
    };
  }, function(t2, n, e) {
    var r = e(11), o = e(190);
    t2.exports = function(t3, n2) {
      var e2 = t3.exec;
      if ("function" == typeof e2) {
        var i = e2.call(t3, n2);
        if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
        return i;
      }
      if ("RegExp" !== r(t3)) throw TypeError("RegExp#exec called on incompatible receiver");
      return o.call(t3, n2);
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(91), i = e(12), a = e(39), u = e(65), c = e(20), f = e(11), s = e(186), l = e(187), p = e(18), h = e(6), v = e(49), g = e(175), d = e(206), y = e(25), x = e(29), m = v("matchAll"), b = y.set, S = y.getterFor("RegExp String Iterator"), E = RegExp.prototype, w = E.exec, O = "".matchAll, R = !!O && !h(function() {
      "a".matchAll(/./);
    }), A = o(function(t3, n2, e2, r2) {
      b(this, {
        type: "RegExp String Iterator",
        regexp: t3,
        string: n2,
        global: e2,
        unicode: r2,
        done: false
      });
    }, "RegExp String", function() {
      var t3 = S(this);
      if (t3.done) return {
        value: void 0,
        done: true
      };
      var n2 = t3.regexp, e2 = t3.string, r2 = function(t4, n3) {
        var e3, r3 = t4.exec;
        if ("function" == typeof r3) {
          if ("object" != typeof (e3 = r3.call(t4, n3))) throw TypeError("Incorrect exec result");
          return e3;
        }
        return w.call(t4, n3);
      }(n2, e2);
      return null === r2 ? {
        value: void 0,
        done: t3.done = true
      } : t3.global ? ("" == String(r2[0]) && (n2.lastIndex = d(e2, a(n2.lastIndex), t3.unicode)), {
        value: r2,
        done: false
      }) : (t3.done = true, {
        value: r2,
        done: false
      });
    }), j = function(t3) {
      var n2, e2, r2, o2, i2, u2, f2 = c(this), s2 = String(t3);
      return n2 = g(f2, RegExp), void 0 === (e2 = f2.flags) && f2 instanceof RegExp && !("flags" in E) && (e2 = l.call(f2)), r2 = void 0 === e2 ? "" : String(e2), o2 = new n2(n2 === RegExp ? f2.source : f2, r2), i2 = !!~r2.indexOf("g"), u2 = !!~r2.indexOf("u"), o2.lastIndex = a(f2.lastIndex), new A(o2, s2, i2, u2);
    };
    r({
      target: "String",
      proto: true,
      forced: R
    }, {
      matchAll: function(t3) {
        var n2, e2, r2, o2 = i(this);
        if (null != t3) {
          if (s(t3) && !~String(i("flags" in E ? t3.flags : l.call(t3))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
          if (R) return O.apply(o2, arguments);
          if (void 0 === (e2 = t3[m]) && x && "RegExp" == f(t3) && (e2 = j), null != e2) return u(e2).call(t3, o2);
        } else if (R) return O.apply(o2, arguments);
        return n2 = String(o2), r2 = new RegExp(t3, "g"), x ? j.call(r2, n2) : r2[m](n2);
      }
    }), x || m in E || p(E, m, j);
  }, function(t2, n, e) {
    var r = e(2), o = e(210).end;
    r({
      target: "String",
      proto: true,
      forced: e(211)
    }, {
      padEnd: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(39), o = e(145), i = e(12), a = Math.ceil, u = function(t3) {
      return function(n2, e2, u2) {
        var c, f, s = String(i(n2)), l = s.length, p = void 0 === u2 ? " " : String(u2), h = r(e2);
        return h <= l || "" == p ? s : (c = h - l, (f = o.call(p, a(c / p.length))).length > c && (f = f.slice(0, c)), t3 ? s + f : f + s);
      };
    };
    t2.exports = {
      start: u(false),
      end: u(true)
    };
  }, function(t2, n, e) {
    var r = e(54);
    t2.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
  }, function(t2, n, e) {
    var r = e(2), o = e(210).start;
    r({
      target: "String",
      proto: true,
      forced: e(211)
    }, {
      padStart: function(t3) {
        return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(9), i = e(39);
    r({
      target: "String",
      stat: true
    }, {
      raw: function(t3) {
        for (var n2 = o(t3.raw), e2 = i(n2.length), r2 = arguments.length, a = [], u = 0; e2 > u; ) a.push(String(n2[u++])), u < r2 && a.push(String(arguments[u]));
        return a.join("");
      }
    });
  }, function(t2, n, e) {
    e(2)({
      target: "String",
      proto: true
    }, {
      repeat: e(145)
    });
  }, function(t2, n, e) {
    var r = e(205), o = e(20), i = e(46), a = e(39), u = e(40), c = e(12), f = e(206), s = e(207), l = Math.max, p = Math.min, h = Math.floor, v = /\$([$&'`]|\d\d?|<[^>]*>)/g, g = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function(t3, n2, e2, r2) {
      var d = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, y = r2.REPLACE_KEEPS_$0, x = d ? "$" : "$0";
      return [function(e3, r3) {
        var o2 = c(this), i2 = null == e3 ? void 0 : e3[t3];
        return void 0 !== i2 ? i2.call(e3, o2, r3) : n2.call(String(o2), e3, r3);
      }, function(t4, r3) {
        if (!d && y || "string" == typeof r3 && -1 === r3.indexOf(x)) {
          var i2 = e2(n2, t4, this, r3);
          if (i2.done) return i2.value;
        }
        var c2 = o(t4), h2 = String(this), v2 = "function" == typeof r3;
        v2 || (r3 = String(r3));
        var g2 = c2.global;
        if (g2) {
          var b = c2.unicode;
          c2.lastIndex = 0;
        }
        for (var S = []; ; ) {
          var E = s(c2, h2);
          if (null === E) break;
          if (S.push(E), !g2) break;
          "" === String(E[0]) && (c2.lastIndex = f(h2, a(c2.lastIndex), b));
        }
        for (var w, O = "", R = 0, A = 0; A < S.length; A++) {
          E = S[A];
          for (var j = String(E[0]), I = l(p(u(E.index), h2.length), 0), k = [], P = 1; P < E.length; P++) k.push(void 0 === (w = E[P]) ? w : String(w));
          var L = E.groups;
          if (v2) {
            var T = [j].concat(k, I, h2);
            void 0 !== L && T.push(L);
            var _ = String(r3.apply(void 0, T));
          } else _ = m(j, h2, I, k, L, r3);
          I >= R && (O += h2.slice(R, I) + _, R = I + j.length);
        }
        return O + h2.slice(R);
      }];
      function m(t4, e3, r3, o2, a2, u2) {
        var c2 = r3 + t4.length, f2 = o2.length, s2 = g;
        return void 0 !== a2 && (a2 = i(a2), s2 = v), n2.call(u2, s2, function(n3, i2) {
          var u3;
          switch (i2.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t4;
            case "`":
              return e3.slice(0, r3);
            case "'":
              return e3.slice(c2);
            case "<":
              u3 = a2[i2.slice(1, -1)];
              break;
            default:
              var s3 = +i2;
              if (0 === s3) return n3;
              if (s3 > f2) {
                var l2 = h(s3 / 10);
                return 0 === l2 ? n3 : l2 <= f2 ? void 0 === o2[l2 - 1] ? i2.charAt(1) : o2[l2 - 1] + i2.charAt(1) : n3;
              }
              u3 = o2[s3 - 1];
          }
          return void 0 === u3 ? "" : u3;
        });
      }
    });
  }, function(t2, n, e) {
    var r = e(205), o = e(20), i = e(12), a = e(161), u = e(207);
    r("search", 1, function(t3, n2, e2) {
      return [function(n3) {
        var e3 = i(this), r2 = null == n3 ? void 0 : n3[t3];
        return void 0 !== r2 ? r2.call(n3, e3) : new RegExp(n3)[t3](String(e3));
      }, function(t4) {
        var r2 = e2(n2, t4, this);
        if (r2.done) return r2.value;
        var i2 = o(t4), c = String(this), f = i2.lastIndex;
        a(f, 0) || (i2.lastIndex = 0);
        var s = u(i2, c);
        return a(i2.lastIndex, f) || (i2.lastIndex = f), null === s ? -1 : s.index;
      }];
    });
  }, function(t2, n, e) {
    var r = e(205), o = e(186), i = e(20), a = e(12), u = e(175), c = e(206), f = e(39), s = e(207), l = e(190), p = e(6), h = [].push, v = Math.min, g = !p(function() {
      return !RegExp(4294967295, "y");
    });
    r("split", 2, function(t3, n2, e2) {
      var r2;
      return r2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t4, e3) {
        var r3 = String(a(this)), i2 = void 0 === e3 ? 4294967295 : e3 >>> 0;
        if (0 === i2) return [];
        if (void 0 === t4) return [r3];
        if (!o(t4)) return n2.call(r3, t4, i2);
        for (var u2, c2, f2, s2 = [], p2 = (t4.ignoreCase ? "i" : "") + (t4.multiline ? "m" : "") + (t4.unicode ? "u" : "") + (t4.sticky ? "y" : ""), v2 = 0, g2 = new RegExp(t4.source, p2 + "g"); (u2 = l.call(g2, r3)) && !((c2 = g2.lastIndex) > v2 && (s2.push(r3.slice(v2, u2.index)), u2.length > 1 && u2.index < r3.length && h.apply(s2, u2.slice(1)), f2 = u2[0].length, v2 = c2, s2.length >= i2)); ) g2.lastIndex === u2.index && g2.lastIndex++;
        return v2 === r3.length ? !f2 && g2.test("") || s2.push("") : s2.push(r3.slice(v2)), s2.length > i2 ? s2.slice(0, i2) : s2;
      } : "0".split(void 0, 0).length ? function(t4, e3) {
        return void 0 === t4 && 0 === e3 ? [] : n2.call(this, t4, e3);
      } : n2, [function(n3, e3) {
        var o2 = a(this), i2 = null == n3 ? void 0 : n3[t3];
        return void 0 !== i2 ? i2.call(n3, o2, e3) : r2.call(String(o2), n3, e3);
      }, function(t4, o2) {
        var a2 = e2(r2, t4, this, o2, r2 !== n2);
        if (a2.done) return a2.value;
        var l2 = i(t4), p2 = String(this), h2 = u(l2, RegExp), d = l2.unicode, y = (l2.ignoreCase ? "i" : "") + (l2.multiline ? "m" : "") + (l2.unicode ? "u" : "") + (g ? "y" : "g"), x = new h2(g ? l2 : "^(?:" + l2.source + ")", y), m = void 0 === o2 ? 4294967295 : o2 >>> 0;
        if (0 === m) return [];
        if (0 === p2.length) return null === s(x, p2) ? [p2] : [];
        for (var b = 0, S = 0, E = []; S < p2.length; ) {
          x.lastIndex = g ? S : 0;
          var w, O = s(x, g ? p2 : p2.slice(S));
          if (null === O || (w = v(f(x.lastIndex + (g ? 0 : S)), p2.length)) === b) S = c(p2, S, d);
          else {
            if (E.push(p2.slice(b, S)), E.length === m) return E;
            for (var R = 1; R <= O.length - 1; R++) if (E.push(O[R]), E.length === m) return E;
            S = b = w;
          }
        }
        return E.push(p2.slice(b)), E;
      }];
    }, !g);
  }, function(t2, n, e) {
    var r, o = e(2), i = e(4).f, a = e(39), u = e(199), c = e(12), f = e(200), s = e(29), l = "".startsWith, p = Math.min, h = f("startsWith");
    o({
      target: "String",
      proto: true,
      forced: !!(s || h || (r = i(String.prototype, "startsWith"), !r || r.writable)) && !h
    }, {
      startsWith: function(t3) {
        var n2 = String(c(this));
        u(t3);
        var e2 = a(p(arguments.length > 1 ? arguments[1] : void 0, n2.length)), r2 = String(t3);
        return l ? l.call(n2, r2, e2) : n2.slice(e2, e2 + r2.length) === r2;
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(128).trim;
    r({
      target: "String",
      proto: true,
      forced: e(220)("trim")
    }, {
      trim: function() {
        return o(this);
      }
    });
  }, function(t2, n, e) {
    var r = e(6), o = e(129);
    t2.exports = function(t3) {
      return r(function() {
        return !!o[t3]() || "\u200B\x85\u180E" != "\u200B\x85\u180E"[t3]() || o[t3].name !== t3;
      });
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(128).end, i = e(220)("trimEnd"), a = i ? function() {
      return o(this);
    } : "".trimEnd;
    r({
      target: "String",
      proto: true,
      forced: i
    }, {
      trimEnd: a,
      trimRight: a
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(128).start, i = e(220)("trimStart"), a = i ? function() {
      return o(this);
    } : "".trimStart;
    r({
      target: "String",
      proto: true,
      forced: i
    }, {
      trimStart: a,
      trimLeft: a
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("anchor")
    }, {
      anchor: function(t3) {
        return o(this, "a", "name", t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(12), o = /"/g;
    t2.exports = function(t3, n2, e2, i) {
      var a = String(r(t3)), u = "<" + n2;
      return "" !== e2 && (u += " " + e2 + '="' + String(i).replace(o, "&quot;") + '"'), u + ">" + a + "</" + n2 + ">";
    };
  }, function(t2, n, e) {
    var r = e(6);
    t2.exports = function(t3) {
      return r(function() {
        var n2 = ""[t3]('"');
        return n2 !== n2.toLowerCase() || n2.split('"').length > 3;
      });
    };
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("big")
    }, {
      big: function() {
        return o(this, "big", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("blink")
    }, {
      blink: function() {
        return o(this, "blink", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("bold")
    }, {
      bold: function() {
        return o(this, "b", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("fixed")
    }, {
      fixed: function() {
        return o(this, "tt", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("fontcolor")
    }, {
      fontcolor: function(t3) {
        return o(this, "font", "color", t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("fontsize")
    }, {
      fontsize: function(t3) {
        return o(this, "font", "size", t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("italics")
    }, {
      italics: function() {
        return o(this, "i", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("link")
    }, {
      link: function(t3) {
        return o(this, "a", "href", t3);
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("small")
    }, {
      small: function() {
        return o(this, "small", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("strike")
    }, {
      strike: function() {
        return o(this, "strike", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("sub")
    }, {
      sub: function() {
        return o(this, "sub", "", "");
      }
    });
  }, function(t2, n, e) {
    var r = e(2), o = e(224);
    r({
      target: "String",
      proto: true,
      forced: e(225)("sup")
    }, {
      sup: function() {
        return o(this, "sup", "", "");
      }
    });
  }, function(t2, n, e) {
    var r, o = e(3), i = e(126), a = e(120), u = e(119), c = e(239), f = e(14), s = e(25).enforce, l = e(26), p = !o.ActiveXObject && "ActiveXObject" in o, h = Object.isExtensible, v = function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, g = t2.exports = u("WeakMap", v, c);
    if (l && p) {
      r = c.getConstructor(v, "WeakMap", true), a.REQUIRED = true;
      var d = g.prototype, y = d.delete, x = d.has, m = d.get, b = d.set;
      i(d, {
        delete: function(t3) {
          if (f(t3) && !h(t3)) {
            var n2 = s(this);
            return n2.frozen || (n2.frozen = new r()), y.call(this, t3) || n2.frozen.delete(t3);
          }
          return y.call(this, t3);
        },
        has: function(t3) {
          if (f(t3) && !h(t3)) {
            var n2 = s(this);
            return n2.frozen || (n2.frozen = new r()), x.call(this, t3) || n2.frozen.has(t3);
          }
          return x.call(this, t3);
        },
        get: function(t3) {
          if (f(t3) && !h(t3)) {
            var n2 = s(this);
            return n2.frozen || (n2.frozen = new r()), x.call(this, t3) ? m.call(this, t3) : n2.frozen.get(t3);
          }
          return m.call(this, t3);
        },
        set: function(t3, n2) {
          if (f(t3) && !h(t3)) {
            var e2 = s(this);
            e2.frozen || (e2.frozen = new r()), x.call(this, t3) ? b.call(this, t3, n2) : e2.frozen.set(t3, n2);
          } else b.call(this, t3, n2);
          return this;
        }
      });
    }
  }, function(t2, n, e) {
    var r = e(126), o = e(120).getWeakData, i = e(20), a = e(14), u = e(123), c = e(122), f = e(63), s = e(15), l = e(25), p = l.set, h = l.getterFor, v = f.find, g = f.findIndex, d = 0, y = function(t3) {
      return t3.frozen || (t3.frozen = new x());
    }, x = function() {
      this.entries = [];
    }, m = function(t3, n2) {
      return v(t3.entries, function(t4) {
        return t4[0] === n2;
      });
    };
    x.prototype = {
      get: function(t3) {
        var n2 = m(this, t3);
        if (n2) return n2[1];
      },
      has: function(t3) {
        return !!m(this, t3);
      },
      set: function(t3, n2) {
        var e2 = m(this, t3);
        e2 ? e2[1] = n2 : this.entries.push([t3, n2]);
      },
      delete: function(t3) {
        var n2 = g(this.entries, function(n3) {
          return n3[0] === t3;
        });
        return ~n2 && this.entries.splice(n2, 1), !!~n2;
      }
    }, t2.exports = {
      getConstructor: function(t3, n2, e2, f2) {
        var l2 = t3(function(t4, r2) {
          u(t4, l2, n2), p(t4, {
            type: n2,
            id: d++,
            frozen: void 0
          }), null != r2 && c(r2, t4[f2], t4, e2);
        }), v2 = h(n2), g2 = function(t4, n3, e3) {
          var r2 = v2(t4), a2 = o(i(n3), true);
          return true === a2 ? y(r2).set(n3, e3) : a2[r2.id] = e3, t4;
        };
        return r(l2.prototype, {
          delete: function(t4) {
            var n3 = v2(this);
            if (!a(t4)) return false;
            var e3 = o(t4);
            return true === e3 ? y(n3).delete(t4) : e3 && s(e3, n3.id) && delete e3[n3.id];
          },
          has: function(t4) {
            var n3 = v2(this);
            if (!a(t4)) return false;
            var e3 = o(t4);
            return true === e3 ? y(n3).has(t4) : e3 && s(e3, n3.id);
          }
        }), r(l2.prototype, e2 ? {
          get: function(t4) {
            var n3 = v2(this);
            if (a(t4)) {
              var e3 = o(t4);
              return true === e3 ? y(n3).get(t4) : e3 ? e3[n3.id] : void 0;
            }
          },
          set: function(t4, n3) {
            return g2(this, t4, n3);
          }
        } : {
          add: function(t4) {
            return g2(this, t4, true);
          }
        }), l2;
      }
    };
  }, function(t2, n, e) {
    e(119)("WeakSet", function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, e(239));
  }, function(t2, n, e) {
    var r = e(3), o = e(242), i = e(77), a = e(18);
    for (var u in o) {
      var c = r[u], f = c && c.prototype;
      if (f && f.forEach !== i) try {
        a(f, "forEach", i);
      } catch (t3) {
        f.forEach = i;
      }
    }
  }, function(t2, n) {
    t2.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }, function(t2, n, e) {
    e(203);
    var r, o = e(2), i = e(5), a = e(244), u = e(3), c = e(59), f = e(21), s = e(123), l = e(15), p = e(147), h = e(79), v = e(197).codeAt, g = e(245), d = e(95), y = e(246), x = e(25), m = u.URL, b = y.URLSearchParams, S = y.getState, E = x.set, w = x.getterFor("URL"), O = Math.floor, R = Math.pow, A = /[A-Za-z]/, j = /[\d+-.A-Za-z]/, I = /\d/, k = /^(0x|0X)/, P = /^[0-7]+$/, L = /^\d+$/, T = /^[\dA-Fa-f]+$/, _ = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, U = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, C = /[\u0009\u000A\u000D]/g, F = function(t3, n2) {
      var e2, r2, o2;
      if ("[" == n2.charAt(0)) {
        if ("]" != n2.charAt(n2.length - 1)) return "Invalid host";
        if (!(e2 = z(n2.slice(1, -1)))) return "Invalid host";
        t3.host = e2;
      } else if (X(t3)) {
        if (n2 = g(n2), _.test(n2)) return "Invalid host";
        if (null === (e2 = M(n2))) return "Invalid host";
        t3.host = e2;
      } else {
        if (U.test(n2)) return "Invalid host";
        for (e2 = "", r2 = h(n2), o2 = 0; o2 < r2.length; o2++) e2 += G(r2[o2], q);
        t3.host = e2;
      }
    }, M = function(t3) {
      var n2, e2, r2, o2, i2, a2, u2, c2 = t3.split(".");
      if (c2.length && "" == c2[c2.length - 1] && c2.pop(), (n2 = c2.length) > 4) return t3;
      for (e2 = [], r2 = 0; r2 < n2; r2++) {
        if ("" == (o2 = c2[r2])) return t3;
        if (i2 = 10, o2.length > 1 && "0" == o2.charAt(0) && (i2 = k.test(o2) ? 16 : 8, o2 = o2.slice(8 == i2 ? 1 : 2)), "" === o2) a2 = 0;
        else {
          if (!(10 == i2 ? L : 8 == i2 ? P : T).test(o2)) return t3;
          a2 = parseInt(o2, i2);
        }
        e2.push(a2);
      }
      for (r2 = 0; r2 < n2; r2++) if (a2 = e2[r2], r2 == n2 - 1) {
        if (a2 >= R(256, 5 - n2)) return null;
      } else if (a2 > 255) return null;
      for (u2 = e2.pop(), r2 = 0; r2 < e2.length; r2++) u2 += e2[r2] * R(256, 3 - r2);
      return u2;
    }, z = function(t3) {
      var n2, e2, r2, o2, i2, a2, u2, c2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0, s2 = null, l2 = 0, p2 = function() {
        return t3.charAt(l2);
      };
      if (":" == p2()) {
        if (":" != t3.charAt(1)) return;
        l2 += 2, s2 = ++f2;
      }
      for (; p2(); ) {
        if (8 == f2) return;
        if (":" != p2()) {
          for (n2 = e2 = 0; e2 < 4 && T.test(p2()); ) n2 = 16 * n2 + parseInt(p2(), 16), l2++, e2++;
          if ("." == p2()) {
            if (0 == e2) return;
            if (l2 -= e2, f2 > 6) return;
            for (r2 = 0; p2(); ) {
              if (o2 = null, r2 > 0) {
                if (!("." == p2() && r2 < 4)) return;
                l2++;
              }
              if (!I.test(p2())) return;
              for (; I.test(p2()); ) {
                if (i2 = parseInt(p2(), 10), null === o2) o2 = i2;
                else {
                  if (0 == o2) return;
                  o2 = 10 * o2 + i2;
                }
                if (o2 > 255) return;
                l2++;
              }
              c2[f2] = 256 * c2[f2] + o2, 2 != ++r2 && 4 != r2 || f2++;
            }
            if (4 != r2) return;
            break;
          }
          if (":" == p2()) {
            if (l2++, !p2()) return;
          } else if (p2()) return;
          c2[f2++] = n2;
        } else {
          if (null !== s2) return;
          l2++, s2 = ++f2;
        }
      }
      if (null !== s2) for (a2 = f2 - s2, f2 = 7; 0 != f2 && a2 > 0; ) u2 = c2[f2], c2[f2--] = c2[s2 + a2 - 1], c2[s2 + --a2] = u2;
      else if (8 != f2) return;
      return c2;
    }, D = function(t3) {
      var n2, e2, r2, o2;
      if ("number" == typeof t3) {
        for (n2 = [], e2 = 0; e2 < 4; e2++) n2.unshift(t3 % 256), t3 = O(t3 / 256);
        return n2.join(".");
      }
      if ("object" == typeof t3) {
        for (n2 = "", r2 = function(t4) {
          for (var n3 = null, e3 = 1, r3 = null, o3 = 0, i2 = 0; i2 < 8; i2++) 0 !== t4[i2] ? (o3 > e3 && (n3 = r3, e3 = o3), r3 = null, o3 = 0) : (null === r3 && (r3 = i2), ++o3);
          return o3 > e3 && (n3 = r3, e3 = o3), n3;
        }(t3), e2 = 0; e2 < 8; e2++) o2 && 0 === t3[e2] || (o2 && (o2 = false), r2 === e2 ? (n2 += e2 ? ":" : "::", o2 = true) : (n2 += t3[e2].toString(16), e2 < 7 && (n2 += ":")));
        return "[" + n2 + "]";
      }
      return t3;
    }, q = {}, B = p({}, q, {
      " ": 1,
      '"': 1,
      "<": 1,
      ">": 1,
      "`": 1
    }), W = p({}, B, {
      "#": 1,
      "?": 1,
      "{": 1,
      "}": 1
    }), $ = p({}, W, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1
    }), G = function(t3, n2) {
      var e2 = v(t3, 0);
      return e2 > 32 && e2 < 127 && !l(n2, t3) ? t3 : encodeURIComponent(t3);
    }, V = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    }, X = function(t3) {
      return l(V, t3.scheme);
    }, Y = function(t3) {
      return "" != t3.username || "" != t3.password;
    }, K = function(t3) {
      return !t3.host || t3.cannotBeABaseURL || "file" == t3.scheme;
    }, J = function(t3, n2) {
      var e2;
      return 2 == t3.length && A.test(t3.charAt(0)) && (":" == (e2 = t3.charAt(1)) || !n2 && "|" == e2);
    }, H = function(t3) {
      var n2;
      return t3.length > 1 && J(t3.slice(0, 2)) && (2 == t3.length || "/" === (n2 = t3.charAt(2)) || "\\" === n2 || "?" === n2 || "#" === n2);
    }, Q = function(t3) {
      var n2 = t3.path, e2 = n2.length;
      !e2 || "file" == t3.scheme && 1 == e2 && J(n2[0], true) || n2.pop();
    }, Z = function(t3) {
      return "." === t3 || "%2e" === t3.toLowerCase();
    }, tt = {}, nt = {}, et = {}, rt = {}, ot = {}, it = {}, at = {}, ut = {}, ct = {}, ft = {}, st = {}, lt = {}, pt = {}, ht = {}, vt = {}, gt = {}, dt = {}, yt = {}, xt = {}, mt = {}, bt = {}, St = function(t3, n2, e2, o2) {
      var i2, a2, u2, c2, f2, s2 = e2 || tt, p2 = 0, v2 = "", g2 = false, d2 = false, y2 = false;
      for (e2 || (t3.scheme = "", t3.username = "", t3.password = "", t3.host = null, t3.port = null, t3.path = [], t3.query = null, t3.fragment = null, t3.cannotBeABaseURL = false, n2 = n2.replace(N, "")), n2 = n2.replace(C, ""), i2 = h(n2); p2 <= i2.length; ) {
        switch (a2 = i2[p2], s2) {
          case tt:
            if (!a2 || !A.test(a2)) {
              if (e2) return "Invalid scheme";
              s2 = et;
              continue;
            }
            v2 += a2.toLowerCase(), s2 = nt;
            break;
          case nt:
            if (a2 && (j.test(a2) || "+" == a2 || "-" == a2 || "." == a2)) v2 += a2.toLowerCase();
            else {
              if (":" != a2) {
                if (e2) return "Invalid scheme";
                v2 = "", s2 = et, p2 = 0;
                continue;
              }
              if (e2 && (X(t3) != l(V, v2) || "file" == v2 && (Y(t3) || null !== t3.port) || "file" == t3.scheme && !t3.host)) return;
              if (t3.scheme = v2, e2) return void (X(t3) && V[t3.scheme] == t3.port && (t3.port = null));
              v2 = "", "file" == t3.scheme ? s2 = ht : X(t3) && o2 && o2.scheme == t3.scheme ? s2 = rt : X(t3) ? s2 = ut : "/" == i2[p2 + 1] ? (s2 = ot, p2++) : (t3.cannotBeABaseURL = true, t3.path.push(""), s2 = xt);
            }
            break;
          case et:
            if (!o2 || o2.cannotBeABaseURL && "#" != a2) return "Invalid scheme";
            if (o2.cannotBeABaseURL && "#" == a2) {
              t3.scheme = o2.scheme, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", t3.cannotBeABaseURL = true, s2 = bt;
              break;
            }
            s2 = "file" == o2.scheme ? ht : it;
            continue;
          case rt:
            if ("/" != a2 || "/" != i2[p2 + 1]) {
              s2 = it;
              continue;
            }
            s2 = ct, p2++;
            break;
          case ot:
            if ("/" == a2) {
              s2 = ft;
              break;
            }
            s2 = yt;
            continue;
          case it:
            if (t3.scheme = o2.scheme, a2 == r) t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = o2.query;
            else if ("/" == a2 || "\\" == a2 && X(t3)) s2 = at;
            else if ("?" == a2) t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = "", s2 = mt;
            else {
              if ("#" != a2) {
                t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.path.pop(), s2 = yt;
                continue;
              }
              t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", s2 = bt;
            }
            break;
          case at:
            if (!X(t3) || "/" != a2 && "\\" != a2) {
              if ("/" != a2) {
                t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, s2 = yt;
                continue;
              }
              s2 = ft;
            } else s2 = ct;
            break;
          case ut:
            if (s2 = ct, "/" != a2 || "/" != v2.charAt(p2 + 1)) continue;
            p2++;
            break;
          case ct:
            if ("/" != a2 && "\\" != a2) {
              s2 = ft;
              continue;
            }
            break;
          case ft:
            if ("@" == a2) {
              g2 && (v2 = "%40" + v2), g2 = true, u2 = h(v2);
              for (var x2 = 0; x2 < u2.length; x2++) {
                var m2 = u2[x2];
                if (":" != m2 || y2) {
                  var b2 = G(m2, $);
                  y2 ? t3.password += b2 : t3.username += b2;
                } else y2 = true;
              }
              v2 = "";
            } else if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
              if (g2 && "" == v2) return "Invalid authority";
              p2 -= h(v2).length + 1, v2 = "", s2 = st;
            } else v2 += a2;
            break;
          case st:
          case lt:
            if (e2 && "file" == t3.scheme) {
              s2 = gt;
              continue;
            }
            if (":" != a2 || d2) {
              if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
                if (X(t3) && "" == v2) return "Invalid host";
                if (e2 && "" == v2 && (Y(t3) || null !== t3.port)) return;
                if (c2 = F(t3, v2)) return c2;
                if (v2 = "", s2 = dt, e2) return;
                continue;
              }
              "[" == a2 ? d2 = true : "]" == a2 && (d2 = false), v2 += a2;
            } else {
              if ("" == v2) return "Invalid host";
              if (c2 = F(t3, v2)) return c2;
              if (v2 = "", s2 = pt, e2 == lt) return;
            }
            break;
          case pt:
            if (!I.test(a2)) {
              if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3) || e2) {
                if ("" != v2) {
                  var S2 = parseInt(v2, 10);
                  if (S2 > 65535) return "Invalid port";
                  t3.port = X(t3) && S2 === V[t3.scheme] ? null : S2, v2 = "";
                }
                if (e2) return;
                s2 = dt;
                continue;
              }
              return "Invalid port";
            }
            v2 += a2;
            break;
          case ht:
            if (t3.scheme = "file", "/" == a2 || "\\" == a2) s2 = vt;
            else {
              if (!o2 || "file" != o2.scheme) {
                s2 = yt;
                continue;
              }
              if (a2 == r) t3.host = o2.host, t3.path = o2.path.slice(), t3.query = o2.query;
              else if ("?" == a2) t3.host = o2.host, t3.path = o2.path.slice(), t3.query = "", s2 = mt;
              else {
                if ("#" != a2) {
                  H(i2.slice(p2).join("")) || (t3.host = o2.host, t3.path = o2.path.slice(), Q(t3)), s2 = yt;
                  continue;
                }
                t3.host = o2.host, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", s2 = bt;
              }
            }
            break;
          case vt:
            if ("/" == a2 || "\\" == a2) {
              s2 = gt;
              break;
            }
            o2 && "file" == o2.scheme && !H(i2.slice(p2).join("")) && (J(o2.path[0], true) ? t3.path.push(o2.path[0]) : t3.host = o2.host), s2 = yt;
            continue;
          case gt:
            if (a2 == r || "/" == a2 || "\\" == a2 || "?" == a2 || "#" == a2) {
              if (!e2 && J(v2)) s2 = yt;
              else if ("" == v2) {
                if (t3.host = "", e2) return;
                s2 = dt;
              } else {
                if (c2 = F(t3, v2)) return c2;
                if ("localhost" == t3.host && (t3.host = ""), e2) return;
                v2 = "", s2 = dt;
              }
              continue;
            }
            v2 += a2;
            break;
          case dt:
            if (X(t3)) {
              if (s2 = yt, "/" != a2 && "\\" != a2) continue;
            } else if (e2 || "?" != a2) {
              if (e2 || "#" != a2) {
                if (a2 != r && (s2 = yt, "/" != a2)) continue;
              } else t3.fragment = "", s2 = bt;
            } else t3.query = "", s2 = mt;
            break;
          case yt:
            if (a2 == r || "/" == a2 || "\\" == a2 && X(t3) || !e2 && ("?" == a2 || "#" == a2)) {
              if (".." === (f2 = (f2 = v2).toLowerCase()) || "%2e." === f2 || ".%2e" === f2 || "%2e%2e" === f2 ? (Q(t3), "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("")) : Z(v2) ? "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("") : ("file" == t3.scheme && !t3.path.length && J(v2) && (t3.host && (t3.host = ""), v2 = v2.charAt(0) + ":"), t3.path.push(v2)), v2 = "", "file" == t3.scheme && (a2 == r || "?" == a2 || "#" == a2)) for (; t3.path.length > 1 && "" === t3.path[0]; ) t3.path.shift();
              "?" == a2 ? (t3.query = "", s2 = mt) : "#" == a2 && (t3.fragment = "", s2 = bt);
            } else v2 += G(a2, W);
            break;
          case xt:
            "?" == a2 ? (t3.query = "", s2 = mt) : "#" == a2 ? (t3.fragment = "", s2 = bt) : a2 != r && (t3.path[0] += G(a2, q));
            break;
          case mt:
            e2 || "#" != a2 ? a2 != r && ("'" == a2 && X(t3) ? t3.query += "%27" : t3.query += "#" == a2 ? "%23" : G(a2, q)) : (t3.fragment = "", s2 = bt);
            break;
          case bt:
            a2 != r && (t3.fragment += G(a2, B));
        }
        p2++;
      }
    }, Et = function(t3) {
      var n2, e2, r2 = s(this, Et, "URL"), o2 = arguments.length > 1 ? arguments[1] : void 0, a2 = String(t3), u2 = E(r2, {
        type: "URL"
      });
      if (void 0 !== o2) {
        if (o2 instanceof Et) n2 = w(o2);
        else if (e2 = St(n2 = {}, String(o2))) throw TypeError(e2);
      }
      if (e2 = St(u2, a2, null, n2)) throw TypeError(e2);
      var c2 = u2.searchParams = new b(), f2 = S(c2);
      f2.updateSearchParams(u2.query), f2.updateURL = function() {
        u2.query = String(c2) || null;
      }, i || (r2.href = Ot.call(r2), r2.origin = Rt.call(r2), r2.protocol = At.call(r2), r2.username = jt.call(r2), r2.password = It.call(r2), r2.host = kt.call(r2), r2.hostname = Pt.call(r2), r2.port = Lt.call(r2), r2.pathname = Tt.call(r2), r2.search = _t.call(r2), r2.searchParams = Ut.call(r2), r2.hash = Nt.call(r2));
    }, wt = Et.prototype, Ot = function() {
      var t3 = w(this), n2 = t3.scheme, e2 = t3.username, r2 = t3.password, o2 = t3.host, i2 = t3.port, a2 = t3.path, u2 = t3.query, c2 = t3.fragment, f2 = n2 + ":";
      return null !== o2 ? (f2 += "//", Y(t3) && (f2 += e2 + (r2 ? ":" + r2 : "") + "@"), f2 += D(o2), null !== i2 && (f2 += ":" + i2)) : "file" == n2 && (f2 += "//"), f2 += t3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + a2.join("/") : "", null !== u2 && (f2 += "?" + u2), null !== c2 && (f2 += "#" + c2), f2;
    }, Rt = function() {
      var t3 = w(this), n2 = t3.scheme, e2 = t3.port;
      if ("blob" == n2) try {
        return new URL(n2.path[0]).origin;
      } catch (t4) {
        return "null";
      }
      return "file" != n2 && X(t3) ? n2 + "://" + D(t3.host) + (null !== e2 ? ":" + e2 : "") : "null";
    }, At = function() {
      return w(this).scheme + ":";
    }, jt = function() {
      return w(this).username;
    }, It = function() {
      return w(this).password;
    }, kt = function() {
      var t3 = w(this), n2 = t3.host, e2 = t3.port;
      return null === n2 ? "" : null === e2 ? D(n2) : D(n2) + ":" + e2;
    }, Pt = function() {
      var t3 = w(this).host;
      return null === t3 ? "" : D(t3);
    }, Lt = function() {
      var t3 = w(this).port;
      return null === t3 ? "" : String(t3);
    }, Tt = function() {
      var t3 = w(this), n2 = t3.path;
      return t3.cannotBeABaseURL ? n2[0] : n2.length ? "/" + n2.join("/") : "";
    }, _t = function() {
      var t3 = w(this).query;
      return t3 ? "?" + t3 : "";
    }, Ut = function() {
      return w(this).searchParams;
    }, Nt = function() {
      var t3 = w(this).fragment;
      return t3 ? "#" + t3 : "";
    }, Ct = function(t3, n2) {
      return {
        get: t3,
        set: n2,
        configurable: true,
        enumerable: true
      };
    };
    if (i && c(wt, {
      href: Ct(Ot, function(t3) {
        var n2 = w(this), e2 = String(t3), r2 = St(n2, e2);
        if (r2) throw TypeError(r2);
        S(n2.searchParams).updateSearchParams(n2.query);
      }),
      origin: Ct(Rt),
      protocol: Ct(At, function(t3) {
        var n2 = w(this);
        St(n2, String(t3) + ":", tt);
      }),
      username: Ct(jt, function(t3) {
        var n2 = w(this), e2 = h(String(t3));
        if (!K(n2)) {
          n2.username = "";
          for (var r2 = 0; r2 < e2.length; r2++) n2.username += G(e2[r2], $);
        }
      }),
      password: Ct(It, function(t3) {
        var n2 = w(this), e2 = h(String(t3));
        if (!K(n2)) {
          n2.password = "";
          for (var r2 = 0; r2 < e2.length; r2++) n2.password += G(e2[r2], $);
        }
      }),
      host: Ct(kt, function(t3) {
        var n2 = w(this);
        n2.cannotBeABaseURL || St(n2, String(t3), st);
      }),
      hostname: Ct(Pt, function(t3) {
        var n2 = w(this);
        n2.cannotBeABaseURL || St(n2, String(t3), lt);
      }),
      port: Ct(Lt, function(t3) {
        var n2 = w(this);
        K(n2) || ("" == (t3 = String(t3)) ? n2.port = null : St(n2, t3, pt));
      }),
      pathname: Ct(Tt, function(t3) {
        var n2 = w(this);
        n2.cannotBeABaseURL || (n2.path = [], St(n2, t3 + "", dt));
      }),
      search: Ct(_t, function(t3) {
        var n2 = w(this);
        "" == (t3 = String(t3)) ? n2.query = null : ("?" == t3.charAt(0) && (t3 = t3.slice(1)), n2.query = "", St(n2, t3, mt)), S(n2.searchParams).updateSearchParams(n2.query);
      }),
      searchParams: Ct(Ut),
      hash: Ct(Nt, function(t3) {
        var n2 = w(this);
        "" != (t3 = String(t3)) ? ("#" == t3.charAt(0) && (t3 = t3.slice(1)), n2.fragment = "", St(n2, t3, bt)) : n2.fragment = null;
      })
    }), f(wt, "toJSON", function() {
      return Ot.call(this);
    }, {
      enumerable: true
    }), f(wt, "toString", function() {
      return Ot.call(this);
    }, {
      enumerable: true
    }), m) {
      var Ft = m.createObjectURL, Mt = m.revokeObjectURL;
      Ft && f(Et, "createObjectURL", function(t3) {
        return Ft.apply(m, arguments);
      }), Mt && f(Et, "revokeObjectURL", function(t3) {
        return Mt.apply(m, arguments);
      });
    }
    d(Et, "URL"), o({
      global: true,
      forced: !a,
      sham: !i
    }, {
      URL: Et
    });
  }, function(t2, n, e) {
    var r = e(6), o = e(49), i = e(29), a = o("iterator");
    t2.exports = !r(function() {
      var t3 = new URL("b?a=1&b=2&c=3", "http://a"), n2 = t3.searchParams, e2 = "";
      return t3.pathname = "c%20d", n2.forEach(function(t4, r2) {
        n2.delete("b"), e2 += r2 + t4;
      }), i && !t3.toJSON || !n2.sort || "http://a/c%20d?a=1&c=3" !== t3.href || "3" !== n2.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !n2[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("http://a#\u0431").hash || "a1c3" !== e2 || "x" !== new URL("http://x", void 0).host;
    });
  }, function(t2, n, e) {
    var r = /[^\0-\u007E]/, o = /[.\u3002\uFF0E\uFF61]/g, i = "Overflow: input needs wider integers to process", a = Math.floor, u = String.fromCharCode, c = function(t3) {
      return t3 + 22 + 75 * (t3 < 26);
    }, f = function(t3, n2, e2) {
      var r2 = 0;
      for (t3 = e2 ? a(t3 / 700) : t3 >> 1, t3 += a(t3 / n2); t3 > 455; r2 += 36) t3 = a(t3 / 35);
      return a(r2 + 36 * t3 / (t3 + 38));
    }, s = function(t3) {
      var n2, e2, r2 = [], o2 = (t3 = function(t4) {
        for (var n3 = [], e3 = 0, r3 = t4.length; e3 < r3; ) {
          var o3 = t4.charCodeAt(e3++);
          if (o3 >= 55296 && o3 <= 56319 && e3 < r3) {
            var i2 = t4.charCodeAt(e3++);
            56320 == (64512 & i2) ? n3.push(((1023 & o3) << 10) + (1023 & i2) + 65536) : (n3.push(o3), e3--);
          } else n3.push(o3);
        }
        return n3;
      }(t3)).length, s2 = 128, l = 0, p = 72;
      for (n2 = 0; n2 < t3.length; n2++) (e2 = t3[n2]) < 128 && r2.push(u(e2));
      var h = r2.length, v = h;
      for (h && r2.push("-"); v < o2; ) {
        var g = 2147483647;
        for (n2 = 0; n2 < t3.length; n2++) (e2 = t3[n2]) >= s2 && e2 < g && (g = e2);
        var d = v + 1;
        if (g - s2 > a((2147483647 - l) / d)) throw RangeError(i);
        for (l += (g - s2) * d, s2 = g, n2 = 0; n2 < t3.length; n2++) {
          if ((e2 = t3[n2]) < s2 && ++l > 2147483647) throw RangeError(i);
          if (e2 == s2) {
            for (var y = l, x = 36; ; x += 36) {
              var m = x <= p ? 1 : x >= p + 26 ? 26 : x - p;
              if (y < m) break;
              var b = y - m, S = 36 - m;
              r2.push(u(c(m + b % S))), y = a(b / S);
            }
            r2.push(u(c(y))), p = f(l, d, v == h), l = 0, ++v;
          }
        }
        ++l, ++s2;
      }
      return r2.join("");
    };
    t2.exports = function(t3) {
      var n2, e2, i2 = [], a2 = t3.toLowerCase().replace(o, ".").split(".");
      for (n2 = 0; n2 < a2.length; n2++) e2 = a2[n2], i2.push(r.test(e2) ? "xn--" + s(e2) : e2);
      return i2.join(".");
    };
  }, function(t2, n, e) {
    e(89);
    var r = e(2), o = e(34), i = e(244), a = e(21), u = e(126), c = e(95), f = e(91), s = e(25), l = e(123), p = e(15), h = e(64), v = e(84), g = e(20), d = e(14), y = e(58), x = e(8), m = e(247), b = e(83), S = e(49), E = o("fetch"), w = o("Headers"), O = S("iterator"), R = s.set, A = s.getterFor("URLSearchParams"), j = s.getterFor("URLSearchParamsIterator"), I = /\+/g, k = Array(4), P = function(t3) {
      return k[t3 - 1] || (k[t3 - 1] = RegExp("((?:%[\\da-f]{2}){" + t3 + "})", "gi"));
    }, L = function(t3) {
      try {
        return decodeURIComponent(t3);
      } catch (n2) {
        return t3;
      }
    }, T = function(t3) {
      var n2 = t3.replace(I, " "), e2 = 4;
      try {
        return decodeURIComponent(n2);
      } catch (t4) {
        for (; e2; ) n2 = n2.replace(P(e2--), L);
        return n2;
      }
    }, _ = /[!'()~]|%20/g, U = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    }, N = function(t3) {
      return U[t3];
    }, C = function(t3) {
      return encodeURIComponent(t3).replace(_, N);
    }, F = function(t3, n2) {
      if (n2) for (var e2, r2, o2 = n2.split("&"), i2 = 0; i2 < o2.length; ) (e2 = o2[i2++]).length && (r2 = e2.split("="), t3.push({
        key: T(r2.shift()),
        value: T(r2.join("="))
      }));
    }, M = function(t3) {
      this.entries.length = 0, F(this.entries, t3);
    }, z = function(t3, n2) {
      if (t3 < n2) throw TypeError("Not enough arguments");
    }, D = f(function(t3, n2) {
      R(this, {
        type: "URLSearchParamsIterator",
        iterator: m(A(t3).entries),
        kind: n2
      });
    }, "Iterator", function() {
      var t3 = j(this), n2 = t3.kind, e2 = t3.iterator.next(), r2 = e2.value;
      return e2.done || (e2.value = "keys" === n2 ? r2.key : "values" === n2 ? r2.value : [r2.key, r2.value]), e2;
    }), q = function() {
      l(this, q, "URLSearchParams");
      var t3, n2, e2, r2, o2, i2, a2, u2, c2, f2 = arguments.length > 0 ? arguments[0] : void 0, s2 = this, h2 = [];
      if (R(s2, {
        type: "URLSearchParams",
        entries: h2,
        updateURL: function() {
        },
        updateSearchParams: M
      }), void 0 !== f2) if (d(f2)) {
        if ("function" == typeof (t3 = b(f2))) for (e2 = (n2 = t3.call(f2)).next; !(r2 = e2.call(n2)).done; ) {
          if ((a2 = (i2 = (o2 = m(g(r2.value))).next).call(o2)).done || (u2 = i2.call(o2)).done || !i2.call(o2).done) throw TypeError("Expected sequence with length 2");
          h2.push({
            key: a2.value + "",
            value: u2.value + ""
          });
        }
        else for (c2 in f2) p(f2, c2) && h2.push({
          key: c2,
          value: f2[c2] + ""
        });
      } else F(h2, "string" == typeof f2 ? "?" === f2.charAt(0) ? f2.slice(1) : f2 : f2 + "");
    }, B = q.prototype;
    u(B, {
      append: function(t3, n2) {
        z(arguments.length, 2);
        var e2 = A(this);
        e2.entries.push({
          key: t3 + "",
          value: n2 + ""
        }), e2.updateURL();
      },
      delete: function(t3) {
        z(arguments.length, 1);
        for (var n2 = A(this), e2 = n2.entries, r2 = t3 + "", o2 = 0; o2 < e2.length; ) e2[o2].key === r2 ? e2.splice(o2, 1) : o2++;
        n2.updateURL();
      },
      get: function(t3) {
        z(arguments.length, 1);
        for (var n2 = A(this).entries, e2 = t3 + "", r2 = 0; r2 < n2.length; r2++) if (n2[r2].key === e2) return n2[r2].value;
        return null;
      },
      getAll: function(t3) {
        z(arguments.length, 1);
        for (var n2 = A(this).entries, e2 = t3 + "", r2 = [], o2 = 0; o2 < n2.length; o2++) n2[o2].key === e2 && r2.push(n2[o2].value);
        return r2;
      },
      has: function(t3) {
        z(arguments.length, 1);
        for (var n2 = A(this).entries, e2 = t3 + "", r2 = 0; r2 < n2.length; ) if (n2[r2++].key === e2) return true;
        return false;
      },
      set: function(t3, n2) {
        z(arguments.length, 1);
        for (var e2, r2 = A(this), o2 = r2.entries, i2 = false, a2 = t3 + "", u2 = n2 + "", c2 = 0; c2 < o2.length; c2++) (e2 = o2[c2]).key === a2 && (i2 ? o2.splice(c2--, 1) : (i2 = true, e2.value = u2));
        i2 || o2.push({
          key: a2,
          value: u2
        }), r2.updateURL();
      },
      sort: function() {
        var t3, n2, e2, r2 = A(this), o2 = r2.entries, i2 = o2.slice();
        for (o2.length = 0, e2 = 0; e2 < i2.length; e2++) {
          for (t3 = i2[e2], n2 = 0; n2 < e2; n2++) if (o2[n2].key > t3.key) {
            o2.splice(n2, 0, t3);
            break;
          }
          n2 === e2 && o2.push(t3);
        }
        r2.updateURL();
      },
      forEach: function(t3) {
        for (var n2, e2 = A(this).entries, r2 = h(t3, arguments.length > 1 ? arguments[1] : void 0, 3), o2 = 0; o2 < e2.length; ) r2((n2 = e2[o2++]).value, n2.key, this);
      },
      keys: function() {
        return new D(this, "keys");
      },
      values: function() {
        return new D(this, "values");
      },
      entries: function() {
        return new D(this, "entries");
      }
    }, {
      enumerable: true
    }), a(B, O, B.entries), a(B, "toString", function() {
      for (var t3, n2 = A(this).entries, e2 = [], r2 = 0; r2 < n2.length; ) t3 = n2[r2++], e2.push(C(t3.key) + "=" + C(t3.value));
      return e2.join("&");
    }, {
      enumerable: true
    }), c(q, "URLSearchParams"), r({
      global: true,
      forced: !i
    }, {
      URLSearchParams: q
    }), i || "function" != typeof E || "function" != typeof w || r({
      global: true,
      enumerable: true,
      forced: true
    }, {
      fetch: function(t3) {
        var n2, e2, r2, o2 = [t3];
        return arguments.length > 1 && (n2 = arguments[1], d(n2) && (e2 = n2.body, "URLSearchParams" === v(e2) && ((r2 = n2.headers ? new w(n2.headers) : new w()).has("content-type") || r2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), n2 = y(n2, {
          body: x(0, String(e2)),
          headers: x(0, r2)
        }))), o2.push(n2)), E.apply(this, o2);
      }
    }), t2.exports = {
      URLSearchParams: q,
      getState: A
    };
  }, function(t2, n, e) {
    var r = e(20), o = e(83);
    t2.exports = function(t3) {
      var n2 = o(t3);
      if ("function" != typeof n2) throw TypeError(String(t3) + " is not iterable");
      return r(n2.call(t3));
    };
  }, function(t2, n, e) {
    e(2)({
      target: "URL",
      proto: true,
      enumerable: true
    }, {
      toJSON: function() {
        return URL.prototype.toString.call(this);
      }
    });
  }]);
}();
!function(t) {
  "use strict";
  var e = "URLSearchParams" in self, r = "Symbol" in self && "iterator" in Symbol, o = "FileReader" in self && "Blob" in self && function() {
    try {
      return new Blob(), true;
    } catch (t2) {
      return false;
    }
  }(), n = "FormData" in self, i = "ArrayBuffer" in self;
  if (i) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], a = ArrayBuffer.isView || function(t2) {
    return t2 && s.indexOf(Object.prototype.toString.call(t2)) > -1;
  };
  function h(t2) {
    if ("string" != typeof t2 && (t2 = String(t2)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t2)) throw new TypeError("Invalid character in header field name");
    return t2.toLowerCase();
  }
  function u(t2) {
    return "string" != typeof t2 && (t2 = String(t2)), t2;
  }
  function f(t2) {
    var e2 = {
      next: function() {
        var e3 = t2.shift();
        return {
          done: void 0 === e3,
          value: e3
        };
      }
    };
    return r && (e2[Symbol.iterator] = function() {
      return e2;
    }), e2;
  }
  function d(t2) {
    this.map = {}, t2 instanceof d ? t2.forEach(function(t3, e2) {
      this.append(e2, t3);
    }, this) : Array.isArray(t2) ? t2.forEach(function(t3) {
      this.append(t3[0], t3[1]);
    }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function(e2) {
      this.append(e2, t2[e2]);
    }, this);
  }
  function c(t2) {
    if (t2.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t2.bodyUsed = true;
  }
  function p(t2) {
    return new Promise(function(e2, r2) {
      t2.onload = function() {
        e2(t2.result);
      }, t2.onerror = function() {
        r2(t2.error);
      };
    });
  }
  function y(t2) {
    var e2 = new FileReader(), r2 = p(e2);
    return e2.readAsArrayBuffer(t2), r2;
  }
  function l(t2) {
    if (t2.slice) return t2.slice(0);
    var e2 = new Uint8Array(t2.byteLength);
    return e2.set(new Uint8Array(t2)), e2.buffer;
  }
  function b() {
    return this.bodyUsed = false, this._initBody = function(t2) {
      var r2;
      this._bodyInit = t2, t2 ? "string" == typeof t2 ? this._bodyText = t2 : o && Blob.prototype.isPrototypeOf(t2) ? this._bodyBlob = t2 : n && FormData.prototype.isPrototypeOf(t2) ? this._bodyFormData = t2 : e && URLSearchParams.prototype.isPrototypeOf(t2) ? this._bodyText = t2.toString() : i && o && (r2 = t2) && DataView.prototype.isPrototypeOf(r2) ? (this._bodyArrayBuffer = l(t2.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i && (ArrayBuffer.prototype.isPrototypeOf(t2) || a(t2)) ? this._bodyArrayBuffer = l(t2) : this._bodyText = t2 = Object.prototype.toString.call(t2) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t2 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t2) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
    }, o && (this.blob = function() {
      var t2 = c(this);
      if (t2) return t2;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]));
    }, this.arrayBuffer = function() {
      return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
    }), this.text = function() {
      var t2, e2, r2, o2 = c(this);
      if (o2) return o2;
      if (this._bodyBlob) return t2 = this._bodyBlob, e2 = new FileReader(), r2 = p(e2), e2.readAsText(t2), r2;
      if (this._bodyArrayBuffer) return Promise.resolve(function(t3) {
        for (var e3 = new Uint8Array(t3), r3 = new Array(e3.length), o3 = 0; o3 < e3.length; o3++) r3[o3] = String.fromCharCode(e3[o3]);
        return r3.join("");
      }(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText);
    }, n && (this.formData = function() {
      return this.text().then(v);
    }), this.json = function() {
      return this.text().then(JSON.parse);
    }, this;
  }
  d.prototype.append = function(t2, e2) {
    t2 = h(t2), e2 = u(e2);
    var r2 = this.map[t2];
    this.map[t2] = r2 ? r2 + ", " + e2 : e2;
  }, d.prototype.delete = function(t2) {
    delete this.map[h(t2)];
  }, d.prototype.get = function(t2) {
    return t2 = h(t2), this.has(t2) ? this.map[t2] : null;
  }, d.prototype.has = function(t2) {
    return this.map.hasOwnProperty(h(t2));
  }, d.prototype.set = function(t2, e2) {
    this.map[h(t2)] = u(e2);
  }, d.prototype.forEach = function(t2, e2) {
    for (var r2 in this.map) this.map.hasOwnProperty(r2) && t2.call(e2, this.map[r2], r2, this);
  }, d.prototype.keys = function() {
    var t2 = [];
    return this.forEach(function(e2, r2) {
      t2.push(r2);
    }), f(t2);
  }, d.prototype.values = function() {
    var t2 = [];
    return this.forEach(function(e2) {
      t2.push(e2);
    }), f(t2);
  }, d.prototype.entries = function() {
    var t2 = [];
    return this.forEach(function(e2, r2) {
      t2.push([r2, e2]);
    }), f(t2);
  }, r && (d.prototype[Symbol.iterator] = d.prototype.entries);
  var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  function w(t2, e2) {
    var r2, o2, n2 = (e2 = e2 || {}).body;
    if (t2 instanceof w) {
      if (t2.bodyUsed) throw new TypeError("Already read");
      this.url = t2.url, this.credentials = t2.credentials, e2.headers || (this.headers = new d(t2.headers)), this.method = t2.method, this.mode = t2.mode, this.signal = t2.signal, n2 || null == t2._bodyInit || (n2 = t2._bodyInit, t2.bodyUsed = true);
    } else this.url = String(t2);
    if (this.credentials = e2.credentials || this.credentials || "same-origin", !e2.headers && this.headers || (this.headers = new d(e2.headers)), this.method = (r2 = e2.method || this.method || "GET", o2 = r2.toUpperCase(), m.indexOf(o2) > -1 ? o2 : r2), this.mode = e2.mode || this.mode || null, this.signal = e2.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n2) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(n2);
  }
  function v(t2) {
    var e2 = new FormData();
    return t2.trim().split("&").forEach(function(t3) {
      if (t3) {
        var r2 = t3.split("="), o2 = r2.shift().replace(/\+/g, " "), n2 = r2.join("=").replace(/\+/g, " ");
        e2.append(decodeURIComponent(o2), decodeURIComponent(n2));
      }
    }), e2;
  }
  function E(t2, e2) {
    e2 || (e2 = {}), this.type = "default", this.status = void 0 === e2.status ? 200 : e2.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e2 ? e2.statusText : "OK", this.headers = new d(e2.headers), this.url = e2.url || "", this._initBody(t2);
  }
  w.prototype.clone = function() {
    return new w(this, {
      body: this._bodyInit
    });
  }, b.call(w.prototype), b.call(E.prototype), E.prototype.clone = function() {
    return new E(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new d(this.headers),
      url: this.url
    });
  }, E.error = function() {
    var t2 = new E(null, {
      status: 0,
      statusText: ""
    });
    return t2.type = "error", t2;
  };
  var A = [301, 302, 303, 307, 308];
  E.redirect = function(t2, e2) {
    if (-1 === A.indexOf(e2)) throw new RangeError("Invalid status code");
    return new E(null, {
      status: e2,
      headers: {
        location: t2
      }
    });
  }, t.DOMException = self.DOMException;
  try {
    new t.DOMException();
  } catch (e2) {
    t.DOMException = function(t2, e3) {
      this.message = t2, this.name = e3;
      var r2 = Error(t2);
      this.stack = r2.stack;
    }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
  }
  function _(e2, r2) {
    return new Promise(function(n2, i2) {
      var s2 = new w(e2, r2);
      if (s2.signal && s2.signal.aborted) return i2(new t.DOMException("Aborted", "AbortError"));
      var a2 = new XMLHttpRequest();
      function h2() {
        a2.abort();
      }
      a2.onload = function() {
        var t2, e3, r3 = {
          status: a2.status,
          statusText: a2.statusText,
          headers: (t2 = a2.getAllResponseHeaders() || "", e3 = new d(), t2.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t3) {
            var r4 = t3.split(":"), o3 = r4.shift().trim();
            if (o3) {
              var n3 = r4.join(":").trim();
              e3.append(o3, n3);
            }
          }), e3)
        };
        r3.url = "responseURL" in a2 ? a2.responseURL : r3.headers.get("X-Request-URL");
        var o2 = "response" in a2 ? a2.response : a2.responseText;
        n2(new E(o2, r3));
      }, a2.onerror = function() {
        i2(new TypeError("Network request failed"));
      }, a2.ontimeout = function() {
        i2(new TypeError("Network request failed"));
      }, a2.onabort = function() {
        i2(new t.DOMException("Aborted", "AbortError"));
      }, a2.open(s2.method, s2.url, true), "include" === s2.credentials ? a2.withCredentials = true : "omit" === s2.credentials && (a2.withCredentials = false), "responseType" in a2 && o && (a2.responseType = "blob"), s2.headers.forEach(function(t2, e3) {
        a2.setRequestHeader(e3, t2);
      }), s2.signal && (s2.signal.addEventListener("abort", h2), a2.onreadystatechange = function() {
        4 === a2.readyState && s2.signal.removeEventListener("abort", h2);
      }), a2.send(void 0 === s2._bodyInit ? null : s2._bodyInit);
    });
  }
  _.polyfill = true, self.fetch || (self.fetch = _, self.Headers = d, self.Request = w, self.Response = E), t.Headers = d, t.Request = w, t.Response = E, t.fetch = _;
}({});
/*! Bundled license information:

@ionic/pwa-elements/dist/esm/polyfills/core-js.js:
  (*!fetch 3.0.0, global "this" must be replaced with "window" *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3BvbHlmaWxscy9jb3JlLWpzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY29yZS1qcyAzLjYuNVxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanNcbiAqIExpY2Vuc2U6IGh0dHA6Ly9yb2NrLm1pdC1saWNlbnNlLm9yZ1xuICogwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KVxuICovXG4hZnVuY3Rpb24gKHQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgIWZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIG4gPSB7fTtcbiAgICBmdW5jdGlvbiBlKHIpIHtcbiAgICAgIGlmIChuW3JdKSByZXR1cm4gbltyXS5leHBvcnRzO1xuICAgICAgdmFyIG8gPSBuW3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cywgbywgby5leHBvcnRzLCBlKSwgby5sID0gITAsIG8uZXhwb3J0cztcbiAgICB9XG4gICAgZS5tID0gdCwgZS5jID0gbiwgZS5kID0gZnVuY3Rpb24gKHQsIG4sIHIpIHtcbiAgICAgIGUubyh0LCBuKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgbiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBlLnIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgZS50ID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIGlmICgxICYgbiAmJiAodCA9IGUodCkpLCA4ICYgbikgcmV0dXJuIHQ7XG4gICAgICBpZiAoNCAmIG4gJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0ICYmIHQuX19lc01vZHVsZSkgcmV0dXJuIHQ7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAoZS5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiB0XG4gICAgICB9KSwgMiAmIG4gJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCkgZm9yICh2YXIgbyBpbiB0KSBlLmQociwgbywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRbbl07XG4gICAgICB9LmJpbmQobnVsbCwgbykpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgZS5uID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBuID0gdCAmJiB0Ll9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZS5kKG4sIFwiYVwiLCBuKSwgbjtcbiAgICB9LCBlLm8gPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBuKTtcbiAgICB9LCBlLnAgPSBcIlwiLCBlKGUucyA9IDApO1xuICB9KFtmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIGUoMSksIGUoNTUpLCBlKDYyKSwgZSg2OCksIGUoNzApLCBlKDcxKSwgZSg3MiksIGUoNzMpLCBlKDc1KSwgZSg3NiksIGUoNzgpLCBlKDg3KSwgZSg4OCksIGUoODkpLCBlKDk4KSwgZSg5OSksIGUoMTAxKSwgZSgxMDIpLCBlKDEwMyksIGUoMTA1KSwgZSgxMDYpLCBlKDEwNyksIGUoMTA4KSwgZSgxMTApLCBlKDExMSksIGUoMTEyKSwgZSgxMTMpLCBlKDExNCksIGUoMTE1KSwgZSgxMTYpLCBlKDExNyksIGUoMTE4KSwgZSgxMjcpLCBlKDEzMCksIGUoMTMxKSwgZSgxMzMpLCBlKDEzNSksIGUoMTM2KSwgZSgxMzcpLCBlKDEzOCksIGUoMTM5KSwgZSgxNDEpLCBlKDE0MyksIGUoMTQ2KSwgZSgxNDgpLCBlKDE1MCksIGUoMTUxKSwgZSgxNTMpLCBlKDE1NCksIGUoMTU1KSwgZSgxNTYpLCBlKDE1NyksIGUoMTU5KSwgZSgxNjApLCBlKDE2MiksIGUoMTYzKSwgZSgxNjQpLCBlKDE2NSksIGUoMTY2KSwgZSgxNjcpLCBlKDE2OCksIGUoMTY5KSwgZSgxNzApLCBlKDE3MiksIGUoMTczKSwgZSgxODMpLCBlKDE4NCksIGUoMTg1KSwgZSgxODkpLCBlKDE5MSksIGUoMTkyKSwgZSgxOTMpLCBlKDE5NCksIGUoMTk1KSwgZSgxOTYpLCBlKDE5OCksIGUoMjAxKSwgZSgyMDIpLCBlKDIwMyksIGUoMjA0KSwgZSgyMDgpLCBlKDIwOSksIGUoMjEyKSwgZSgyMTMpLCBlKDIxNCksIGUoMjE1KSwgZSgyMTYpLCBlKDIxNyksIGUoMjE4KSwgZSgyMTkpLCBlKDIyMSksIGUoMjIyKSwgZSgyMjMpLCBlKDIyNiksIGUoMjI3KSwgZSgyMjgpLCBlKDIyOSksIGUoMjMwKSwgZSgyMzEpLCBlKDIzMiksIGUoMjMzKSwgZSgyMzQpLCBlKDIzNSksIGUoMjM2KSwgZSgyMzcpLCBlKDIzOCksIGUoMjQwKSwgZSgyNDEpLCBlKDI0MyksIGUoMjQ4KSwgdC5leHBvcnRzID0gZSgyNDYpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYpLFxuICAgICAgaSA9IGUoNDUpLFxuICAgICAgYSA9IGUoMTQpLFxuICAgICAgdSA9IGUoNDYpLFxuICAgICAgYyA9IGUoMzkpLFxuICAgICAgZiA9IGUoNDcpLFxuICAgICAgcyA9IGUoNDgpLFxuICAgICAgbCA9IGUoNTIpLFxuICAgICAgcCA9IGUoNDkpLFxuICAgICAgaCA9IGUoNTMpLFxuICAgICAgdiA9IHAoXCJpc0NvbmNhdFNwcmVhZGFibGVcIiksXG4gICAgICBnID0gaCA+PSA1MSB8fCAhbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gW107XG4gICAgICAgIHJldHVybiB0W3ZdID0gITEsIHQuY29uY2F0KClbMF0gIT09IHQ7XG4gICAgICB9KSxcbiAgICAgIGQgPSBsKFwiY29uY2F0XCIpLFxuICAgICAgeSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghYSh0KSkgcmV0dXJuICExO1xuICAgICAgICB2YXIgbiA9IHRbdl07XG4gICAgICAgIHJldHVybiB2b2lkIDAgIT09IG4gPyAhIW4gOiBpKHQpO1xuICAgICAgfTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiAhZyB8fCAhZFxuICAgIH0sIHtcbiAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgZSxcbiAgICAgICAgICByLFxuICAgICAgICAgIG8sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBhID0gdSh0aGlzKSxcbiAgICAgICAgICBsID0gcyhhLCAwKSxcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgZm9yIChuID0gLTEsIHIgPSBhcmd1bWVudHMubGVuZ3RoOyBuIDwgcjsgbisrKSBpZiAoaSA9IC0xID09PSBuID8gYSA6IGFyZ3VtZW50c1tuXSwgeShpKSkge1xuICAgICAgICAgIGlmIChwICsgKG8gPSBjKGkubGVuZ3RoKSkgPiA5MDA3MTk5MjU0NzQwOTkxKSB0aHJvdyBUeXBlRXJyb3IoXCJNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWRcIik7XG4gICAgICAgICAgZm9yIChlID0gMDsgZSA8IG87IGUrKywgcCsrKSBlIGluIGkgJiYgZihsLCBwLCBpW2VdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocCA+PSA5MDA3MTk5MjU0NzQwOTkxKSB0aHJvdyBUeXBlRXJyb3IoXCJNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWRcIik7XG4gICAgICAgICAgZihsLCBwKyssIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsLmxlbmd0aCA9IHAsIGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDMpLFxuICAgICAgbyA9IGUoNCkuZixcbiAgICAgIGkgPSBlKDE4KSxcbiAgICAgIGEgPSBlKDIxKSxcbiAgICAgIHUgPSBlKDIyKSxcbiAgICAgIGMgPSBlKDMyKSxcbiAgICAgIGYgPSBlKDQ0KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgdmFyIGUsXG4gICAgICAgIHMsXG4gICAgICAgIGwsXG4gICAgICAgIHAsXG4gICAgICAgIGgsXG4gICAgICAgIHYgPSB0LnRhcmdldCxcbiAgICAgICAgZyA9IHQuZ2xvYmFsLFxuICAgICAgICBkID0gdC5zdGF0O1xuICAgICAgaWYgKGUgPSBnID8gciA6IGQgPyByW3ZdIHx8IHUodiwge30pIDogKHJbdl0gfHwge30pLnByb3RvdHlwZSkgZm9yIChzIGluIG4pIHtcbiAgICAgICAgaWYgKHAgPSBuW3NdLCBsID0gdC5ub1RhcmdldEdldCA/IChoID0gbyhlLCBzKSkgJiYgaC52YWx1ZSA6IGVbc10sICFmKGcgPyBzIDogdiArIChkID8gXCIuXCIgOiBcIiNcIikgKyBzLCB0LmZvcmNlZCkgJiYgdm9pZCAwICE9PSBsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwID09IHR5cGVvZiBsKSBjb250aW51ZTtcbiAgICAgICAgICBjKHAsIGwpO1xuICAgICAgICB9XG4gICAgICAgICh0LnNoYW0gfHwgbCAmJiBsLnNoYW0pICYmIGkocCwgXCJzaGFtXCIsICEwKSwgYShlLCBzLCBwLCB0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHZhciBlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ICYmIHQuTWF0aCA9PSBNYXRoICYmIHQ7XG4gICAgfTtcbiAgICB0LmV4cG9ydHMgPSBlKFwib2JqZWN0XCIgPT0gdHlwZW9mIGdsb2JhbFRoaXMgJiYgZ2xvYmFsVGhpcykgfHwgZShcIm9iamVjdFwiID09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93KSB8fCBlKFwib2JqZWN0XCIgPT0gdHlwZW9mIHNlbGYgJiYgc2VsZikgfHwgZShcIm9iamVjdFwiID09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoNyksXG4gICAgICBpID0gZSg4KSxcbiAgICAgIGEgPSBlKDkpLFxuICAgICAgdSA9IGUoMTMpLFxuICAgICAgYyA9IGUoMTUpLFxuICAgICAgZiA9IGUoMTYpLFxuICAgICAgcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgbi5mID0gciA/IHMgOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgaWYgKHQgPSBhKHQpLCBuID0gdShuLCAhMCksIGYpIHRyeSB7XG4gICAgICAgIHJldHVybiBzKHQsIG4pO1xuICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgIGlmIChjKHQsIG4pKSByZXR1cm4gaSghby5mLmNhbGwodCwgbiksIHRbbl0pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpO1xuICAgIHQuZXhwb3J0cyA9ICFyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA3ICE9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gNztcbiAgICAgICAgfVxuICAgICAgfSlbMV07XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIXQoKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICAgIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgaSA9IG8gJiYgIXIuY2FsbCh7XG4gICAgICAgIDE6IDJcbiAgICAgIH0sIDEpO1xuICAgIG4uZiA9IGkgPyBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4gPSBvKHRoaXMsIHQpO1xuICAgICAgcmV0dXJuICEhbiAmJiBuLmVudW1lcmFibGU7XG4gICAgfSA6IHI7XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6ICEoMSAmIHQpLFxuICAgICAgICBjb25maWd1cmFibGU6ICEoMiAmIHQpLFxuICAgICAgICB3cml0YWJsZTogISg0ICYgdCksXG4gICAgICAgIHZhbHVlOiBuXG4gICAgICB9O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDEwKSxcbiAgICAgIG8gPSBlKDEyKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHIobyh0KSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNiksXG4gICAgICBvID0gZSgxMSksXG4gICAgICBpID0gXCJcIi5zcGxpdDtcbiAgICB0LmV4cG9ydHMgPSByKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhT2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbiAgICB9KSA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gXCJTdHJpbmdcIiA9PSBvKHQpID8gaS5jYWxsKHQsIFwiXCIpIDogT2JqZWN0KHQpO1xuICAgIH0gOiBPYmplY3Q7XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdmFyIGUgPSB7fS50b1N0cmluZztcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUuY2FsbCh0KS5zbGljZSg4LCAtMSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKG51bGwgPT0gdCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyB0KTtcbiAgICAgIHJldHVybiB0O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDE0KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgaWYgKCFyKHQpKSByZXR1cm4gdDtcbiAgICAgIHZhciBlLCBvO1xuICAgICAgaWYgKG4gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiAoZSA9IHQudG9TdHJpbmcpICYmICFyKG8gPSBlLmNhbGwodCkpKSByZXR1cm4gbztcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIChlID0gdC52YWx1ZU9mKSAmJiAhcihvID0gZS5jYWxsKHQpKSkgcmV0dXJuIG87XG4gICAgICBpZiAoIW4gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiAoZSA9IHQudG9TdHJpbmcpICYmICFyKG8gPSBlLmNhbGwodCkpKSByZXR1cm4gbztcbiAgICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgdCA/IG51bGwgIT09IHQgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQ7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICB2YXIgZSA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICByZXR1cm4gZS5jYWxsKHQsIG4pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoNiksXG4gICAgICBpID0gZSgxNyk7XG4gICAgdC5leHBvcnRzID0gIXIgJiYgIW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDcgIT0gT2JqZWN0LmRlZmluZVByb3BlcnR5KGkoXCJkaXZcIiksIFwiYVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICB9XG4gICAgICB9KS5hO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzKSxcbiAgICAgIG8gPSBlKDE0KSxcbiAgICAgIGkgPSByLmRvY3VtZW50LFxuICAgICAgYSA9IG8oaSkgJiYgbyhpLmNyZWF0ZUVsZW1lbnQpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gYSA/IGkuY3JlYXRlRWxlbWVudCh0KSA6IHt9O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoMTkpLFxuICAgICAgaSA9IGUoOCk7XG4gICAgdC5leHBvcnRzID0gciA/IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICByZXR1cm4gby5mKHQsIG4sIGkoMSwgZSkpO1xuICAgIH0gOiBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgcmV0dXJuIHRbbl0gPSBlLCB0O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoMTYpLFxuICAgICAgaSA9IGUoMjApLFxuICAgICAgYSA9IGUoMTMpLFxuICAgICAgdSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICBuLmYgPSByID8gdSA6IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICBpZiAoaSh0KSwgbiA9IGEobiwgITApLCBpKGUpLCBvKSB0cnkge1xuICAgICAgICByZXR1cm4gdSh0LCBuLCBlKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHt9XG4gICAgICBpZiAoXCJnZXRcIiBpbiBlIHx8IFwic2V0XCIgaW4gZSkgdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICByZXR1cm4gXCJ2YWx1ZVwiIGluIGUgJiYgKHRbbl0gPSBlLnZhbHVlKSwgdDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxNCk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICghcih0KSkgdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KSArIFwiIGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzKSxcbiAgICAgIG8gPSBlKDE4KSxcbiAgICAgIGkgPSBlKDE1KSxcbiAgICAgIGEgPSBlKDIyKSxcbiAgICAgIHUgPSBlKDIzKSxcbiAgICAgIGMgPSBlKDI1KSxcbiAgICAgIGYgPSBjLmdldCxcbiAgICAgIHMgPSBjLmVuZm9yY2UsXG4gICAgICBsID0gU3RyaW5nKFN0cmluZykuc3BsaXQoXCJTdHJpbmdcIik7XG4gICAgKHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuLCBlLCB1KSB7XG4gICAgICB2YXIgYyA9ICEhdSAmJiAhIXUudW5zYWZlLFxuICAgICAgICBmID0gISF1ICYmICEhdS5lbnVtZXJhYmxlLFxuICAgICAgICBwID0gISF1ICYmICEhdS5ub1RhcmdldEdldDtcbiAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSAmJiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbiB8fCBpKGUsIFwibmFtZVwiKSB8fCBvKGUsIFwibmFtZVwiLCBuKSwgcyhlKS5zb3VyY2UgPSBsLmpvaW4oXCJzdHJpbmdcIiA9PSB0eXBlb2YgbiA/IG4gOiBcIlwiKSksIHQgIT09IHIgPyAoYyA/ICFwICYmIHRbbl0gJiYgKGYgPSAhMCkgOiBkZWxldGUgdFtuXSwgZiA/IHRbbl0gPSBlIDogbyh0LCBuLCBlKSkgOiBmID8gdFtuXSA9IGUgOiBhKG4sIGUpO1xuICAgIH0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzICYmIGYodGhpcykuc291cmNlIHx8IHUodGhpcyk7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDMpLFxuICAgICAgbyA9IGUoMTgpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvKHIsIHQsIG4pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByW3RdID0gbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDI0KSxcbiAgICAgIG8gPSBGdW5jdGlvbi50b1N0cmluZztcbiAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHIuaW5zcGVjdFNvdXJjZSAmJiAoci5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBvLmNhbGwodCk7XG4gICAgfSksIHQuZXhwb3J0cyA9IHIuaW5zcGVjdFNvdXJjZTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyksXG4gICAgICBvID0gZSgyMiksXG4gICAgICBpID0gcltcIl9fY29yZS1qc19zaGFyZWRfX1wiXSB8fCBvKFwiX19jb3JlLWpzX3NoYXJlZF9fXCIsIHt9KTtcbiAgICB0LmV4cG9ydHMgPSBpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBhID0gZSgyNiksXG4gICAgICB1ID0gZSgzKSxcbiAgICAgIGMgPSBlKDE0KSxcbiAgICAgIGYgPSBlKDE4KSxcbiAgICAgIHMgPSBlKDE1KSxcbiAgICAgIGwgPSBlKDI3KSxcbiAgICAgIHAgPSBlKDMxKSxcbiAgICAgIGggPSB1LldlYWtNYXA7XG4gICAgaWYgKGEpIHtcbiAgICAgIHZhciB2ID0gbmV3IGgoKSxcbiAgICAgICAgZyA9IHYuZ2V0LFxuICAgICAgICBkID0gdi5oYXMsXG4gICAgICAgIHkgPSB2LnNldDtcbiAgICAgIHIgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICByZXR1cm4geS5jYWxsKHYsIHQsIG4pLCBuO1xuICAgICAgfSwgbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBnLmNhbGwodiwgdCkgfHwge307XG4gICAgICB9LCBpID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGQuY2FsbCh2LCB0KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB4ID0gbChcInN0YXRlXCIpO1xuICAgICAgcFt4XSA9ICEwLCByID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgcmV0dXJuIGYodCwgeCwgbiksIG47XG4gICAgICB9LCBvID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHModCwgeCkgPyB0W3hdIDoge307XG4gICAgICB9LCBpID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHModCwgeCk7XG4gICAgICB9O1xuICAgIH1cbiAgICB0LmV4cG9ydHMgPSB7XG4gICAgICBzZXQ6IHIsXG4gICAgICBnZXQ6IG8sXG4gICAgICBoYXM6IGksXG4gICAgICBlbmZvcmNlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gaSh0KSA/IG8odCkgOiByKHQsIHt9KTtcbiAgICAgIH0sXG4gICAgICBnZXR0ZXJGb3I6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgICAgICAgIHZhciBlO1xuICAgICAgICAgIGlmICghYyhuKSB8fCAoZSA9IG8obikpLnR5cGUgIT09IHQpIHRocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgXCIgKyB0ICsgXCIgcmVxdWlyZWRcIik7XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyksXG4gICAgICBvID0gZSgyMyksXG4gICAgICBpID0gci5XZWFrTWFwO1xuICAgIHQuZXhwb3J0cyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobyhpKSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDI4KSxcbiAgICAgIG8gPSBlKDMwKSxcbiAgICAgIGkgPSByKFwia2V5c1wiKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGlbdF0gfHwgKGlbdF0gPSBvKHQpKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyOSksXG4gICAgICBvID0gZSgyNCk7XG4gICAgKHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICByZXR1cm4gb1t0XSB8fCAob1t0XSA9IHZvaWQgMCAhPT0gbiA/IG4gOiB7fSk7XG4gICAgfSkoXCJ2ZXJzaW9uc1wiLCBbXSkucHVzaCh7XG4gICAgICB2ZXJzaW9uOiBcIjMuNi41XCIsXG4gICAgICBtb2RlOiByID8gXCJwdXJlXCIgOiBcImdsb2JhbFwiLFxuICAgICAgY29weXJpZ2h0OiBcIsKpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSlcIlxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9ICExO1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHZhciBlID0gMCxcbiAgICAgIHIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gXCJTeW1ib2woXCIgKyBTdHJpbmcodm9pZCAwID09PSB0ID8gXCJcIiA6IHQpICsgXCIpX1wiICsgKCsrZSArIHIpLnRvU3RyaW5nKDM2KTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9IHt9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxNSksXG4gICAgICBvID0gZSgzMyksXG4gICAgICBpID0gZSg0KSxcbiAgICAgIGEgPSBlKDE5KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgZm9yICh2YXIgZSA9IG8obiksIHUgPSBhLmYsIGMgPSBpLmYsIGYgPSAwOyBmIDwgZS5sZW5ndGg7IGYrKykge1xuICAgICAgICB2YXIgcyA9IGVbZl07XG4gICAgICAgIHIodCwgcykgfHwgdSh0LCBzLCBjKG4sIHMpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzNCksXG4gICAgICBvID0gZSgzNiksXG4gICAgICBpID0gZSg0MyksXG4gICAgICBhID0gZSgyMCk7XG4gICAgdC5leHBvcnRzID0gcihcIlJlZmxlY3RcIiwgXCJvd25LZXlzXCIpIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbiA9IG8uZihhKHQpKSxcbiAgICAgICAgZSA9IGkuZjtcbiAgICAgIHJldHVybiBlID8gbi5jb25jYXQoZSh0KSkgOiBuO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDM1KSxcbiAgICAgIG8gPSBlKDMpLFxuICAgICAgaSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyB0IDogdm9pZCAwO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gaShyW3RdKSB8fCBpKG9bdF0pIDogclt0XSAmJiByW3RdW25dIHx8IG9bdF0gJiYgb1t0XVtuXTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzKTtcbiAgICB0LmV4cG9ydHMgPSByO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzNyksXG4gICAgICBvID0gZSg0MikuY29uY2F0KFwibGVuZ3RoXCIsIFwicHJvdG90eXBlXCIpO1xuICAgIG4uZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gcih0LCBvKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxNSksXG4gICAgICBvID0gZSg5KSxcbiAgICAgIGkgPSBlKDM4KS5pbmRleE9mLFxuICAgICAgYSA9IGUoMzEpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICB2YXIgZSxcbiAgICAgICAgdSA9IG8odCksXG4gICAgICAgIGMgPSAwLFxuICAgICAgICBmID0gW107XG4gICAgICBmb3IgKGUgaW4gdSkgIXIoYSwgZSkgJiYgcih1LCBlKSAmJiBmLnB1c2goZSk7XG4gICAgICBmb3IgKDsgbi5sZW5ndGggPiBjOykgcih1LCBlID0gbltjKytdKSAmJiAofmkoZiwgZSkgfHwgZi5wdXNoKGUpKTtcbiAgICAgIHJldHVybiBmO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDkpLFxuICAgICAgbyA9IGUoMzkpLFxuICAgICAgaSA9IGUoNDEpLFxuICAgICAgYSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobiwgZSwgYSkge1xuICAgICAgICAgIHZhciB1LFxuICAgICAgICAgICAgYyA9IHIobiksXG4gICAgICAgICAgICBmID0gbyhjLmxlbmd0aCksXG4gICAgICAgICAgICBzID0gaShhLCBmKTtcbiAgICAgICAgICBpZiAodCAmJiBlICE9IGUpIHtcbiAgICAgICAgICAgIGZvciAoOyBmID4gczspIGlmICgodSA9IGNbcysrXSkgIT0gdSkgcmV0dXJuICEwO1xuICAgICAgICAgIH0gZWxzZSBmb3IgKDsgZiA+IHM7IHMrKykgaWYgKCh0IHx8IHMgaW4gYykgJiYgY1tzXSA9PT0gZSkgcmV0dXJuIHQgfHwgcyB8fCAwO1xuICAgICAgICAgIHJldHVybiAhdCAmJiAtMTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgdC5leHBvcnRzID0ge1xuICAgICAgaW5jbHVkZXM6IGEoITApLFxuICAgICAgaW5kZXhPZjogYSghMSlcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg0MCksXG4gICAgICBvID0gTWF0aC5taW47XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID4gMCA/IG8ocih0KSwgOTAwNzE5OTI1NDc0MDk5MSkgOiAwO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdmFyIGUgPSBNYXRoLmNlaWwsXG4gICAgICByID0gTWF0aC5mbG9vcjtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGlzTmFOKHQgPSArdCkgPyAwIDogKHQgPiAwID8gciA6IGUpKHQpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDQwKSxcbiAgICAgIG8gPSBNYXRoLm1heCxcbiAgICAgIGkgPSBNYXRoLm1pbjtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgdmFyIGUgPSByKHQpO1xuICAgICAgcmV0dXJuIGUgPCAwID8gbyhlICsgbiwgMCkgOiBpKGUsIG4pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gW1wiY29uc3RydWN0b3JcIiwgXCJoYXNPd25Qcm9wZXJ0eVwiLCBcImlzUHJvdG90eXBlT2ZcIiwgXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLCBcInRvTG9jYWxlU3RyaW5nXCIsIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCJdO1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIG4uZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpLFxuICAgICAgbyA9IC8jfFxcLnByb3RvdHlwZVxcLi8sXG4gICAgICBpID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgdmFyIGUgPSB1W2EodCldO1xuICAgICAgICByZXR1cm4gZSA9PSBmIHx8IGUgIT0gYyAmJiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBuID8gcihuKSA6ICEhbik7XG4gICAgICB9LFxuICAgICAgYSA9IGkubm9ybWFsaXplID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0KS5yZXBsYWNlKG8sIFwiLlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSxcbiAgICAgIHUgPSBpLmRhdGEgPSB7fSxcbiAgICAgIGMgPSBpLk5BVElWRSA9IFwiTlwiLFxuICAgICAgZiA9IGkuUE9MWUZJTEwgPSBcIlBcIjtcbiAgICB0LmV4cG9ydHMgPSBpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxMSk7XG4gICAgdC5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIFwiQXJyYXlcIiA9PSByKHQpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDEyKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIE9iamVjdChyKHQpKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxMyksXG4gICAgICBvID0gZSgxOSksXG4gICAgICBpID0gZSg4KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgdmFyIGEgPSByKG4pO1xuICAgICAgYSBpbiB0ID8gby5mKHQsIGEsIGkoMCwgZSkpIDogdFthXSA9IGU7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTQpLFxuICAgICAgbyA9IGUoNDUpLFxuICAgICAgaSA9IGUoNDkpKFwic3BlY2llc1wiKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgdmFyIGU7XG4gICAgICByZXR1cm4gbyh0KSAmJiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiAoZSA9IHQuY29uc3RydWN0b3IpIHx8IGUgIT09IEFycmF5ICYmICFvKGUucHJvdG90eXBlKSA/IHIoZSkgJiYgbnVsbCA9PT0gKGUgPSBlW2ldKSAmJiAoZSA9IHZvaWQgMCkgOiBlID0gdm9pZCAwKSwgbmV3ICh2b2lkIDAgPT09IGUgPyBBcnJheSA6IGUpKDAgPT09IG4gPyAwIDogbik7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyksXG4gICAgICBvID0gZSgyOCksXG4gICAgICBpID0gZSgxNSksXG4gICAgICBhID0gZSgzMCksXG4gICAgICB1ID0gZSg1MCksXG4gICAgICBjID0gZSg1MSksXG4gICAgICBmID0gbyhcIndrc1wiKSxcbiAgICAgIHMgPSByLlN5bWJvbCxcbiAgICAgIGwgPSBjID8gcyA6IHMgJiYgcy53aXRob3V0U2V0dGVyIHx8IGE7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBpKGYsIHQpIHx8ICh1ICYmIGkocywgdCkgPyBmW3RdID0gc1t0XSA6IGZbdF0gPSBsKFwiU3ltYm9sLlwiICsgdCkpLCBmW3RdO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpO1xuICAgIHQuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUwKTtcbiAgICB0LmV4cG9ydHMgPSByICYmICFTeW1ib2wuc2hhbSAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3I7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpLFxuICAgICAgbyA9IGUoNDkpLFxuICAgICAgaSA9IGUoNTMpLFxuICAgICAgYSA9IG8oXCJzcGVjaWVzXCIpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gaSA+PSA1MSB8fCAhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHJldHVybiAobi5jb25zdHJ1Y3RvciA9IHt9KVthXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9vOiAxXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgMSAhPT0gblt0XShCb29sZWFuKS5mb287XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGkgPSBlKDMpLFxuICAgICAgYSA9IGUoNTQpLFxuICAgICAgdSA9IGkucHJvY2VzcyxcbiAgICAgIGMgPSB1ICYmIHUudmVyc2lvbnMsXG4gICAgICBmID0gYyAmJiBjLnY4O1xuICAgIGYgPyBvID0gKHIgPSBmLnNwbGl0KFwiLlwiKSlbMF0gKyByWzFdIDogYSAmJiAoIShyID0gYS5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pKSB8fCByWzFdID49IDc0KSAmJiAociA9IGEubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pKSAmJiAobyA9IHJbMV0pLCB0LmV4cG9ydHMgPSBvICYmICtvO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzNCk7XG4gICAgdC5leHBvcnRzID0gcihcIm5hdmlnYXRvclwiLCBcInVzZXJBZ2VudFwiKSB8fCBcIlwiO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDU2KSxcbiAgICAgIGkgPSBlKDU3KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgcHJvdG86ICEwXG4gICAgfSwge1xuICAgICAgY29weVdpdGhpbjogb1xuICAgIH0pLCBpKFwiY29weVdpdGhpblwiKTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNDYpLFxuICAgICAgbyA9IGUoNDEpLFxuICAgICAgaSA9IGUoMzkpLFxuICAgICAgYSA9IE1hdGgubWluO1xuICAgIHQuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlID0gcih0aGlzKSxcbiAgICAgICAgdSA9IGkoZS5sZW5ndGgpLFxuICAgICAgICBjID0gbyh0LCB1KSxcbiAgICAgICAgZiA9IG8obiwgdSksXG4gICAgICAgIHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHZvaWQgMCxcbiAgICAgICAgbCA9IGEoKHZvaWQgMCA9PT0gcyA/IHUgOiBvKHMsIHUpKSAtIGYsIHUgLSBjKSxcbiAgICAgICAgcCA9IDE7XG4gICAgICBmb3IgKGYgPCBjICYmIGMgPCBmICsgbCAmJiAocCA9IC0xLCBmICs9IGwgLSAxLCBjICs9IGwgLSAxKTsgbC0tID4gMDspIGYgaW4gZSA/IGVbY10gPSBlW2ZdIDogZGVsZXRlIGVbY10sIGMgKz0gcCwgZiArPSBwO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNDkpLFxuICAgICAgbyA9IGUoNTgpLFxuICAgICAgaSA9IGUoMTkpLFxuICAgICAgYSA9IHIoXCJ1bnNjb3BhYmxlc1wiKSxcbiAgICAgIHUgPSBBcnJheS5wcm90b3R5cGU7XG4gICAgbnVsbCA9PSB1W2FdICYmIGkuZih1LCBhLCB7XG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgdmFsdWU6IG8obnVsbClcbiAgICB9KSwgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHVbYV1bdF0gPSAhMDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IGUoMjApLFxuICAgICAgaSA9IGUoNTkpLFxuICAgICAgYSA9IGUoNDIpLFxuICAgICAgdSA9IGUoMzEpLFxuICAgICAgYyA9IGUoNjEpLFxuICAgICAgZiA9IGUoMTcpLFxuICAgICAgcyA9IGUoMjcpLFxuICAgICAgbCA9IHMoXCJJRV9QUk9UT1wiKSxcbiAgICAgIHAgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIGggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gXCI8c2NyaXB0PlwiICsgdCArIFwiPFxcL3NjcmlwdD5cIjtcbiAgICAgIH0sXG4gICAgICB2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHIgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKTtcbiAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgICAgdmFyIHQsIG47XG4gICAgICAgIHYgPSByID8gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB0LndyaXRlKGgoXCJcIikpLCB0LmNsb3NlKCk7XG4gICAgICAgICAgdmFyIG4gPSB0LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gICAgICAgICAgcmV0dXJuIHQgPSBudWxsLCBuO1xuICAgICAgICB9KHIpIDogKChuID0gZihcImlmcmFtZVwiKSkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBjLmFwcGVuZENoaWxkKG4pLCBuLnNyYyA9IFN0cmluZyhcImphdmFzY3JpcHQ6XCIpLCAodCA9IG4uY29udGVudFdpbmRvdy5kb2N1bWVudCkub3BlbigpLCB0LndyaXRlKGgoXCJkb2N1bWVudC5GPU9iamVjdFwiKSksIHQuY2xvc2UoKSwgdC5GKTtcbiAgICAgICAgZm9yICh2YXIgZSA9IGEubGVuZ3RoOyBlLS07KSBkZWxldGUgdi5wcm90b3R5cGVbYVtlXV07XG4gICAgICAgIHJldHVybiB2KCk7XG4gICAgICB9O1xuICAgIHVbbF0gPSAhMCwgdC5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAodCwgbikge1xuICAgICAgdmFyIGU7XG4gICAgICByZXR1cm4gbnVsbCAhPT0gdCA/IChwLnByb3RvdHlwZSA9IG8odCksIGUgPSBuZXcgcCgpLCBwLnByb3RvdHlwZSA9IG51bGwsIGVbbF0gPSB0KSA6IGUgPSB2KCksIHZvaWQgMCA9PT0gbiA/IGUgOiBpKGUsIG4pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoMTkpLFxuICAgICAgaSA9IGUoMjApLFxuICAgICAgYSA9IGUoNjApO1xuICAgIHQuZXhwb3J0cyA9IHIgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICBpKHQpO1xuICAgICAgZm9yICh2YXIgZSwgciA9IGEobiksIHUgPSByLmxlbmd0aCwgYyA9IDA7IHUgPiBjOykgby5mKHQsIGUgPSByW2MrK10sIG5bZV0pO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMzcpLFxuICAgICAgbyA9IGUoNDIpO1xuICAgIHQuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gcih0LCBvKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzNCk7XG4gICAgdC5leHBvcnRzID0gcihcImRvY3VtZW50XCIsIFwiZG9jdW1lbnRFbGVtZW50XCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYzKS5ldmVyeSxcbiAgICAgIGkgPSBlKDY2KSxcbiAgICAgIGEgPSBlKDY3KSxcbiAgICAgIHUgPSBpKFwiZXZlcnlcIiksXG4gICAgICBjID0gYShcImV2ZXJ5XCIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6ICF1IHx8ICFjXG4gICAgfSwge1xuICAgICAgZXZlcnk6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNjQpLFxuICAgICAgbyA9IGUoMTApLFxuICAgICAgaSA9IGUoNDYpLFxuICAgICAgYSA9IGUoMzkpLFxuICAgICAgdSA9IGUoNDgpLFxuICAgICAgYyA9IFtdLnB1c2gsXG4gICAgICBmID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSAxID09IHQsXG4gICAgICAgICAgZSA9IDIgPT0gdCxcbiAgICAgICAgICBmID0gMyA9PSB0LFxuICAgICAgICAgIHMgPSA0ID09IHQsXG4gICAgICAgICAgbCA9IDYgPT0gdCxcbiAgICAgICAgICBwID0gNSA9PSB0IHx8IGw7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaCwgdiwgZywgZCkge1xuICAgICAgICAgIGZvciAodmFyIHksIHgsIG0gPSBpKGgpLCBiID0gbyhtKSwgUyA9IHIodiwgZywgMyksIEUgPSBhKGIubGVuZ3RoKSwgdyA9IDAsIE8gPSBkIHx8IHUsIFIgPSBuID8gTyhoLCBFKSA6IGUgPyBPKGgsIDApIDogdm9pZCAwOyBFID4gdzsgdysrKSBpZiAoKHAgfHwgdyBpbiBiKSAmJiAoeCA9IFMoeSA9IGJbd10sIHcsIG0pLCB0KSkgaWYgKG4pIFJbd10gPSB4O2Vsc2UgaWYgKHgpIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgYy5jYWxsKFIsIHkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocykgcmV0dXJuICExO1xuICAgICAgICAgIHJldHVybiBsID8gLTEgOiBmIHx8IHMgPyBzIDogUjtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgdC5leHBvcnRzID0ge1xuICAgICAgZm9yRWFjaDogZigwKSxcbiAgICAgIG1hcDogZigxKSxcbiAgICAgIGZpbHRlcjogZigyKSxcbiAgICAgIHNvbWU6IGYoMyksXG4gICAgICBldmVyeTogZig0KSxcbiAgICAgIGZpbmQ6IGYoNSksXG4gICAgICBmaW5kSW5kZXg6IGYoNilcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2NSk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIGlmIChyKHQpLCB2b2lkIDAgPT09IG4pIHJldHVybiB0O1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2FsbChuKTtcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdC5jYWxsKG4sIGUpO1xuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNhbGwobiwgZSwgcik7XG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSwgciwgbykge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2FsbChuLCBlLCByLCBvKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHQuYXBwbHkobiwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCkgdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KSArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNik7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlID0gW11bdF07XG4gICAgICByZXR1cm4gISFlICYmIHIoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLmNhbGwobnVsbCwgbiB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhyb3cgMTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg1KSxcbiAgICAgIG8gPSBlKDYpLFxuICAgICAgaSA9IGUoMTUpLFxuICAgICAgYSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgIHUgPSB7fSxcbiAgICAgIGMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aHJvdyB0O1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgaWYgKGkodSwgdCkpIHJldHVybiB1W3RdO1xuICAgICAgbiB8fCAobiA9IHt9KTtcbiAgICAgIHZhciBlID0gW11bdF0sXG4gICAgICAgIGYgPSAhIWkobiwgXCJBQ0NFU1NPUlNcIikgJiYgbi5BQ0NFU1NPUlMsXG4gICAgICAgIHMgPSBpKG4sIDApID8gblswXSA6IGMsXG4gICAgICAgIGwgPSBpKG4sIDEpID8gblsxXSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiB1W3RdID0gISFlICYmICFvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGYgJiYgIXIpIHJldHVybiAhMDtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgbGVuZ3RoOiAtMVxuICAgICAgICB9O1xuICAgICAgICBmID8gYSh0LCAxLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgZ2V0OiBjXG4gICAgICAgIH0pIDogdFsxXSA9IDEsIGUuY2FsbCh0LCBzLCBsKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoNjkpLFxuICAgICAgaSA9IGUoNTcpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITBcbiAgICB9LCB7XG4gICAgICBmaWxsOiBvXG4gICAgfSksIGkoXCJmaWxsXCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg0NiksXG4gICAgICBvID0gZSg0MSksXG4gICAgICBpID0gZSgzOSk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGZvciAodmFyIG4gPSByKHRoaXMpLCBlID0gaShuLmxlbmd0aCksIGEgPSBhcmd1bWVudHMubGVuZ3RoLCB1ID0gbyhhID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMCwgZSksIGMgPSBhID4gMiA/IGFyZ3VtZW50c1syXSA6IHZvaWQgMCwgZiA9IHZvaWQgMCA9PT0gYyA/IGUgOiBvKGMsIGUpOyBmID4gdTspIG5bdSsrXSA9IHQ7XG4gICAgICByZXR1cm4gbjtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYzKS5maWx0ZXIsXG4gICAgICBpID0gZSg1MiksXG4gICAgICBhID0gZSg2NyksXG4gICAgICB1ID0gaShcImZpbHRlclwiKSxcbiAgICAgIGMgPSBhKFwiZmlsdGVyXCIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6ICF1IHx8ICFjXG4gICAgfSwge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoNjMpLmZpbmQsXG4gICAgICBpID0gZSg1NyksXG4gICAgICBhID0gZSg2NyksXG4gICAgICB1ID0gITAsXG4gICAgICBjID0gYShcImZpbmRcIik7XG4gICAgXCJmaW5kXCIgaW4gW10gJiYgQXJyYXkoMSkuZmluZChmdW5jdGlvbiAoKSB7XG4gICAgICB1ID0gITE7XG4gICAgfSksIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IHUgfHwgIWNcbiAgICB9LCB7XG4gICAgICBmaW5kOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfSksIGkoXCJmaW5kXCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYzKS5maW5kSW5kZXgsXG4gICAgICBpID0gZSg1NyksXG4gICAgICBhID0gZSg2NyksXG4gICAgICB1ID0gITAsXG4gICAgICBjID0gYShcImZpbmRJbmRleFwiKTtcbiAgICBcImZpbmRJbmRleFwiIGluIFtdICYmIEFycmF5KDEpLmZpbmRJbmRleChmdW5jdGlvbiAoKSB7XG4gICAgICB1ID0gITE7XG4gICAgfSksIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IHUgfHwgIWNcbiAgICB9LCB7XG4gICAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KSwgaShcImZpbmRJbmRleFwiKTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg3NCksXG4gICAgICBpID0gZSg0NiksXG4gICAgICBhID0gZSgzOSksXG4gICAgICB1ID0gZSg0MCksXG4gICAgICBjID0gZSg0OCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMFxuICAgIH0sIHtcbiAgICAgIGZsYXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdm9pZCAwLFxuICAgICAgICAgIG4gPSBpKHRoaXMpLFxuICAgICAgICAgIGUgPSBhKG4ubGVuZ3RoKSxcbiAgICAgICAgICByID0gYyhuLCAwKTtcbiAgICAgICAgcmV0dXJuIHIubGVuZ3RoID0gbyhyLCBuLCBuLCBlLCAwLCB2b2lkIDAgPT09IHQgPyAxIDogdSh0KSksIHI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDQ1KSxcbiAgICAgIG8gPSBlKDM5KSxcbiAgICAgIGkgPSBlKDY0KSxcbiAgICAgIGEgPSBmdW5jdGlvbiAodCwgbiwgZSwgdSwgYywgZiwgcywgbCkge1xuICAgICAgICBmb3IgKHZhciBwLCBoID0gYywgdiA9IDAsIGcgPSAhIXMgJiYgaShzLCBsLCAzKTsgdiA8IHU7KSB7XG4gICAgICAgICAgaWYgKHYgaW4gZSkge1xuICAgICAgICAgICAgaWYgKHAgPSBnID8gZyhlW3ZdLCB2LCBuKSA6IGVbdl0sIGYgPiAwICYmIHIocCkpIGggPSBhKHQsIG4sIHAsIG8ocC5sZW5ndGgpLCBoLCBmIC0gMSkgLSAxO2Vsc2Uge1xuICAgICAgICAgICAgICBpZiAoaCA+PSA5MDA3MTk5MjU0NzQwOTkxKSB0aHJvdyBUeXBlRXJyb3IoXCJFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoXCIpO1xuICAgICAgICAgICAgICB0W2hdID0gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgdisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBhO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDc0KSxcbiAgICAgIGkgPSBlKDQ2KSxcbiAgICAgIGEgPSBlKDM5KSxcbiAgICAgIHUgPSBlKDY1KSxcbiAgICAgIGMgPSBlKDQ4KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgcHJvdG86ICEwXG4gICAgfSwge1xuICAgICAgZmxhdE1hcDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgZSA9IGkodGhpcyksXG4gICAgICAgICAgciA9IGEoZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdSh0KSwgKG4gPSBjKGUsIDApKS5sZW5ndGggPSBvKG4sIGUsIGUsIHIsIDAsIDEsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKSwgbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg3Nyk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogW10uZm9yRWFjaCAhPSBvXG4gICAgfSwge1xuICAgICAgZm9yRWFjaDogb1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2MykuZm9yRWFjaCxcbiAgICAgIG8gPSBlKDY2KSxcbiAgICAgIGkgPSBlKDY3KSxcbiAgICAgIGEgPSBvKFwiZm9yRWFjaFwiKSxcbiAgICAgIHUgPSBpKFwiZm9yRWFjaFwiKTtcbiAgICB0LmV4cG9ydHMgPSBhICYmIHUgPyBbXS5mb3JFYWNoIDogZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiByKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDc5KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6ICFlKDg2KShmdW5jdGlvbiAodCkge1xuICAgICAgICBBcnJheS5mcm9tKHQpO1xuICAgICAgfSlcbiAgICB9LCB7XG4gICAgICBmcm9tOiBvXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDY0KSxcbiAgICAgIG8gPSBlKDQ2KSxcbiAgICAgIGkgPSBlKDgwKSxcbiAgICAgIGEgPSBlKDgxKSxcbiAgICAgIHUgPSBlKDM5KSxcbiAgICAgIGMgPSBlKDQ3KSxcbiAgICAgIGYgPSBlKDgzKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4sXG4gICAgICAgIGUsXG4gICAgICAgIHMsXG4gICAgICAgIGwsXG4gICAgICAgIHAsXG4gICAgICAgIGgsXG4gICAgICAgIHYgPSBvKHQpLFxuICAgICAgICBnID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzID8gdGhpcyA6IEFycmF5LFxuICAgICAgICBkID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgeSA9IGQgPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwLFxuICAgICAgICB4ID0gdm9pZCAwICE9PSB5LFxuICAgICAgICBtID0gZih2KSxcbiAgICAgICAgYiA9IDA7XG4gICAgICBpZiAoeCAmJiAoeSA9IHIoeSwgZCA+IDIgPyBhcmd1bWVudHNbMl0gOiB2b2lkIDAsIDIpKSwgbnVsbCA9PSBtIHx8IGcgPT0gQXJyYXkgJiYgYShtKSkgZm9yIChlID0gbmV3IGcobiA9IHUodi5sZW5ndGgpKTsgbiA+IGI7IGIrKykgaCA9IHggPyB5KHZbYl0sIGIpIDogdltiXSwgYyhlLCBiLCBoKTtlbHNlIGZvciAocCA9IChsID0gbS5jYWxsKHYpKS5uZXh0LCBlID0gbmV3IGcoKTsgIShzID0gcC5jYWxsKGwpKS5kb25lOyBiKyspIGggPSB4ID8gaShsLCB5LCBbcy52YWx1ZSwgYl0sICEwKSA6IHMudmFsdWUsIGMoZSwgYiwgaCk7XG4gICAgICByZXR1cm4gZS5sZW5ndGggPSBiLCBlO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIwKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbiwgZSwgbykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG8gPyBuKHIoZSlbMF0sIGVbMV0pIDogbihlKTtcbiAgICAgIH0gY2F0Y2ggKG4pIHtcbiAgICAgICAgdmFyIGkgPSB0LnJldHVybjtcbiAgICAgICAgdGhyb3cgdm9pZCAwICE9PSBpICYmIHIoaS5jYWxsKHQpKSwgbjtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg0OSksXG4gICAgICBvID0gZSg4MiksXG4gICAgICBpID0gcihcIml0ZXJhdG9yXCIpLFxuICAgICAgYSA9IEFycmF5LnByb3RvdHlwZTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gdCAmJiAoby5BcnJheSA9PT0gdCB8fCBhW2ldID09PSB0KTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9IHt9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg4NCksXG4gICAgICBvID0gZSg4MiksXG4gICAgICBpID0gZSg0OSkoXCJpdGVyYXRvclwiKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKG51bGwgIT0gdCkgcmV0dXJuIHRbaV0gfHwgdFtcIkBAaXRlcmF0b3JcIl0gfHwgb1tyKHQpXTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg4NSksXG4gICAgICBvID0gZSgxMSksXG4gICAgICBpID0gZSg0OSkoXCJ0b1N0cmluZ1RhZ1wiKSxcbiAgICAgIGEgPSBcIkFyZ3VtZW50c1wiID09IG8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzO1xuICAgICAgfSgpKTtcbiAgICB0LmV4cG9ydHMgPSByID8gbyA6IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbiwgZSwgcjtcbiAgICAgIHJldHVybiB2b2lkIDAgPT09IHQgPyBcIlVuZGVmaW5lZFwiIDogbnVsbCA9PT0gdCA/IFwiTnVsbFwiIDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgKGUgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0W25dO1xuICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgfShuID0gT2JqZWN0KHQpLCBpKSkgPyBlIDogYSA/IG8obikgOiBcIk9iamVjdFwiID09IChyID0gbyhuKSkgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLmNhbGxlZSA/IFwiQXJndW1lbnRzXCIgOiByO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSB7fTtcbiAgICByW2UoNDkpKFwidG9TdHJpbmdUYWdcIildID0gXCJ6XCIsIHQuZXhwb3J0cyA9IFwiW29iamVjdCB6XVwiID09PSBTdHJpbmcocik7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDQ5KShcIml0ZXJhdG9yXCIpLFxuICAgICAgbyA9ICExO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIGEgPSB7XG4gICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZG9uZTogISFpKytcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXR1cm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8gPSAhMDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICBhW3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIEFycmF5LmZyb20oYSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyAyO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAodCkge31cbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgaWYgKCFuICYmICFvKSByZXR1cm4gITE7XG4gICAgICB2YXIgZSA9ICExO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGkgPSB7fTtcbiAgICAgICAgaVtyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRvbmU6IGUgPSAhMFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIHQoaSk7XG4gICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgzOCkuaW5jbHVkZXMsXG4gICAgICBpID0gZSg1Nyk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogIWUoNjcpKFwiaW5kZXhPZlwiLCB7XG4gICAgICAgIEFDQ0VTU09SUzogITAsXG4gICAgICAgIDE6IDBcbiAgICAgIH0pXG4gICAgfSwge1xuICAgICAgaW5jbHVkZXM6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KSwgaShcImluY2x1ZGVzXCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDM4KS5pbmRleE9mLFxuICAgICAgaSA9IGUoNjYpLFxuICAgICAgYSA9IGUoNjcpLFxuICAgICAgdSA9IFtdLmluZGV4T2YsXG4gICAgICBjID0gISF1ICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwLFxuICAgICAgZiA9IGkoXCJpbmRleE9mXCIpLFxuICAgICAgcyA9IGEoXCJpbmRleE9mXCIsIHtcbiAgICAgICAgQUNDRVNTT1JTOiAhMCxcbiAgICAgICAgMTogMFxuICAgICAgfSk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogYyB8fCAhZiB8fCAhc1xuICAgIH0sIHtcbiAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBjID8gdS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDAgOiBvKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoOSksXG4gICAgICBvID0gZSg1NyksXG4gICAgICBpID0gZSg4MiksXG4gICAgICBhID0gZSgyNSksXG4gICAgICB1ID0gZSg5MCksXG4gICAgICBjID0gYS5zZXQsXG4gICAgICBmID0gYS5nZXR0ZXJGb3IoXCJBcnJheSBJdGVyYXRvclwiKTtcbiAgICB0LmV4cG9ydHMgPSB1KEFycmF5LCBcIkFycmF5XCIsIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICBjKHRoaXMsIHtcbiAgICAgICAgdHlwZTogXCJBcnJheSBJdGVyYXRvclwiLFxuICAgICAgICB0YXJnZXQ6IHIodCksXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBraW5kOiBuXG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IGYodGhpcyksXG4gICAgICAgIG4gPSB0LnRhcmdldCxcbiAgICAgICAgZSA9IHQua2luZCxcbiAgICAgICAgciA9IHQuaW5kZXgrKztcbiAgICAgIHJldHVybiAhbiB8fCByID49IG4ubGVuZ3RoID8gKHQudGFyZ2V0ID0gdm9pZCAwLCB7XG4gICAgICAgIHZhbHVlOiB2b2lkIDAsXG4gICAgICAgIGRvbmU6ICEwXG4gICAgICB9KSA6IFwia2V5c1wiID09IGUgPyB7XG4gICAgICAgIHZhbHVlOiByLFxuICAgICAgICBkb25lOiAhMVxuICAgICAgfSA6IFwidmFsdWVzXCIgPT0gZSA/IHtcbiAgICAgICAgdmFsdWU6IG5bcl0sXG4gICAgICAgIGRvbmU6ICExXG4gICAgICB9IDoge1xuICAgICAgICB2YWx1ZTogW3IsIG5bcl1dLFxuICAgICAgICBkb25lOiAhMVxuICAgICAgfTtcbiAgICB9LCBcInZhbHVlc1wiKSwgaS5Bcmd1bWVudHMgPSBpLkFycmF5LCBvKFwia2V5c1wiKSwgbyhcInZhbHVlc1wiKSwgbyhcImVudHJpZXNcIik7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoOTEpLFxuICAgICAgaSA9IGUoOTMpLFxuICAgICAgYSA9IGUoOTYpLFxuICAgICAgdSA9IGUoOTUpLFxuICAgICAgYyA9IGUoMTgpLFxuICAgICAgZiA9IGUoMjEpLFxuICAgICAgcyA9IGUoNDkpLFxuICAgICAgbCA9IGUoMjkpLFxuICAgICAgcCA9IGUoODIpLFxuICAgICAgaCA9IGUoOTIpLFxuICAgICAgdiA9IGguSXRlcmF0b3JQcm90b3R5cGUsXG4gICAgICBnID0gaC5CVUdHWV9TQUZBUklfSVRFUkFUT1JTLFxuICAgICAgZCA9IHMoXCJpdGVyYXRvclwiKSxcbiAgICAgIHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbiwgZSwgcywgaCwgeCwgbSkge1xuICAgICAgbyhlLCBuLCBzKTtcbiAgICAgIHZhciBiLFxuICAgICAgICBTLFxuICAgICAgICBFLFxuICAgICAgICB3ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAodCA9PT0gaCAmJiBJKSByZXR1cm4gSTtcbiAgICAgICAgICBpZiAoIWcgJiYgdCBpbiBBKSByZXR1cm4gQVt0XTtcbiAgICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJrZXlzXCI6XG4gICAgICAgICAgICBjYXNlIFwidmFsdWVzXCI6XG4gICAgICAgICAgICBjYXNlIFwiZW50cmllc1wiOlxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgZSh0aGlzLCB0KTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZSh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBPID0gbiArIFwiIEl0ZXJhdG9yXCIsXG4gICAgICAgIFIgPSAhMSxcbiAgICAgICAgQSA9IHQucHJvdG90eXBlLFxuICAgICAgICBqID0gQVtkXSB8fCBBW1wiQEBpdGVyYXRvclwiXSB8fCBoICYmIEFbaF0sXG4gICAgICAgIEkgPSAhZyAmJiBqIHx8IHcoaCksXG4gICAgICAgIGsgPSBcIkFycmF5XCIgPT0gbiAmJiBBLmVudHJpZXMgfHwgajtcbiAgICAgIGlmIChrICYmIChiID0gaShrLmNhbGwobmV3IHQoKSkpLCB2ICE9PSBPYmplY3QucHJvdG90eXBlICYmIGIubmV4dCAmJiAobCB8fCBpKGIpID09PSB2IHx8IChhID8gYShiLCB2KSA6IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgYltkXSAmJiBjKGIsIGQsIHkpKSwgdShiLCBPLCAhMCwgITApLCBsICYmIChwW09dID0geSkpKSwgXCJ2YWx1ZXNcIiA9PSBoICYmIGogJiYgXCJ2YWx1ZXNcIiAhPT0gai5uYW1lICYmIChSID0gITAsIEkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBqLmNhbGwodGhpcyk7XG4gICAgICB9KSwgbCAmJiAhbSB8fCBBW2RdID09PSBJIHx8IGMoQSwgZCwgSSksIHBbbl0gPSBJLCBoKSBpZiAoUyA9IHtcbiAgICAgICAgdmFsdWVzOiB3KFwidmFsdWVzXCIpLFxuICAgICAgICBrZXlzOiB4ID8gSSA6IHcoXCJrZXlzXCIpLFxuICAgICAgICBlbnRyaWVzOiB3KFwiZW50cmllc1wiKVxuICAgICAgfSwgbSkgZm9yIChFIGluIFMpIChnIHx8IFIgfHwgIShFIGluIEEpKSAmJiBmKEEsIEUsIFNbRV0pO2Vsc2Ugcih7XG4gICAgICAgIHRhcmdldDogbixcbiAgICAgICAgcHJvdG86ICEwLFxuICAgICAgICBmb3JjZWQ6IGcgfHwgUlxuICAgICAgfSwgUyk7XG4gICAgICByZXR1cm4gUztcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg5MikuSXRlcmF0b3JQcm90b3R5cGUsXG4gICAgICBvID0gZSg1OCksXG4gICAgICBpID0gZSg4KSxcbiAgICAgIGEgPSBlKDk1KSxcbiAgICAgIHUgPSBlKDgyKSxcbiAgICAgIGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgdmFyIGYgPSBuICsgXCIgSXRlcmF0b3JcIjtcbiAgICAgIHJldHVybiB0LnByb3RvdHlwZSA9IG8ociwge1xuICAgICAgICBuZXh0OiBpKDEsIGUpXG4gICAgICB9KSwgYSh0LCBmLCAhMSwgITApLCB1W2ZdID0gYywgdDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBhID0gZSg5MyksXG4gICAgICB1ID0gZSgxOCksXG4gICAgICBjID0gZSgxNSksXG4gICAgICBmID0gZSg0OSksXG4gICAgICBzID0gZSgyOSksXG4gICAgICBsID0gZihcIml0ZXJhdG9yXCIpLFxuICAgICAgcCA9ICExO1xuICAgIFtdLmtleXMgJiYgKFwibmV4dFwiIGluIChpID0gW10ua2V5cygpKSA/IChvID0gYShhKGkpKSkgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgKHIgPSBvKSA6IHAgPSAhMCksIG51bGwgPT0gciAmJiAociA9IHt9KSwgcyB8fCBjKHIsIGwpIHx8IHUociwgbCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSksIHQuZXhwb3J0cyA9IHtcbiAgICAgIEl0ZXJhdG9yUHJvdG90eXBlOiByLFxuICAgICAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogcFxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDE1KSxcbiAgICAgIG8gPSBlKDQ2KSxcbiAgICAgIGkgPSBlKDI3KSxcbiAgICAgIGEgPSBlKDk0KSxcbiAgICAgIHUgPSBpKFwiSUVfUFJPVE9cIiksXG4gICAgICBjID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgICB0LmV4cG9ydHMgPSBhID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID0gbyh0KSwgcih0LCB1KSA/IHRbdV0gOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQuY29uc3RydWN0b3IgJiYgdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3IgPyB0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSA6IHQgaW5zdGFuY2VvZiBPYmplY3QgPyBjIDogbnVsbDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2KTtcbiAgICB0LmV4cG9ydHMgPSAhcihmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiB0KCkge31cbiAgICAgIHJldHVybiB0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGwsIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgdCgpKSAhPT0gdC5wcm90b3R5cGU7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDE5KS5mLFxuICAgICAgbyA9IGUoMTUpLFxuICAgICAgaSA9IGUoNDkpKFwidG9TdHJpbmdUYWdcIik7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIHQgJiYgIW8odCA9IGUgPyB0IDogdC5wcm90b3R5cGUsIGkpICYmIHIodCwgaSwge1xuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogblxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMjApLFxuICAgICAgbyA9IGUoOTcpO1xuICAgIHQuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoXCJfX3Byb3RvX19cIiBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0LFxuICAgICAgICBuID0gITEsXG4gICAgICAgIGUgPSB7fTtcbiAgICAgIHRyeSB7XG4gICAgICAgICh0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBcIl9fcHJvdG9fX1wiKS5zZXQpLmNhbGwoZSwgW10pLCBuID0gZSBpbnN0YW5jZW9mIEFycmF5O1xuICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICByZXR1cm4gcihlKSwgbyhpKSwgbiA/IHQuY2FsbChlLCBpKSA6IGUuX19wcm90b19fID0gaSwgZTtcbiAgICAgIH07XG4gICAgfSgpIDogdm9pZCAwKTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTQpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoIXIodCkgJiYgbnVsbCAhPT0gdCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKHQpICsgXCIgYXMgYSBwcm90b3R5cGVcIik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDEwKSxcbiAgICAgIGkgPSBlKDkpLFxuICAgICAgYSA9IGUoNjYpLFxuICAgICAgdSA9IFtdLmpvaW4sXG4gICAgICBjID0gbyAhPSBPYmplY3QsXG4gICAgICBmID0gYShcImpvaW5cIiwgXCIsXCIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGMgfHwgIWZcbiAgICB9LCB7XG4gICAgICBqb2luOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdS5jYWxsKGkodGhpcyksIHZvaWQgMCA9PT0gdCA/IFwiLFwiIDogdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTAwKTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBvICE9PSBbXS5sYXN0SW5kZXhPZlxuICAgIH0sIHtcbiAgICAgIGxhc3RJbmRleE9mOiBvXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDkpLFxuICAgICAgbyA9IGUoNDApLFxuICAgICAgaSA9IGUoMzkpLFxuICAgICAgYSA9IGUoNjYpLFxuICAgICAgdSA9IGUoNjcpLFxuICAgICAgYyA9IE1hdGgubWluLFxuICAgICAgZiA9IFtdLmxhc3RJbmRleE9mLFxuICAgICAgcyA9ICEhZiAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDAsXG4gICAgICBsID0gYShcImxhc3RJbmRleE9mXCIpLFxuICAgICAgcCA9IHUoXCJpbmRleE9mXCIsIHtcbiAgICAgICAgQUNDRVNTT1JTOiAhMCxcbiAgICAgICAgMTogMFxuICAgICAgfSksXG4gICAgICBoID0gcyB8fCAhbCB8fCAhcDtcbiAgICB0LmV4cG9ydHMgPSBoID8gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmIChzKSByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgICB2YXIgbiA9IHIodGhpcyksXG4gICAgICAgIGUgPSBpKG4ubGVuZ3RoKSxcbiAgICAgICAgYSA9IGUgLSAxO1xuICAgICAgZm9yIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiAoYSA9IGMoYSwgbyhhcmd1bWVudHNbMV0pKSksIGEgPCAwICYmIChhID0gZSArIGEpOyBhID49IDA7IGEtLSkgaWYgKGEgaW4gbiAmJiBuW2FdID09PSB0KSByZXR1cm4gYSB8fCAwO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gOiBmO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYzKS5tYXAsXG4gICAgICBpID0gZSg1MiksXG4gICAgICBhID0gZSg2NyksXG4gICAgICB1ID0gaShcIm1hcFwiKSxcbiAgICAgIGMgPSBhKFwibWFwXCIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6ICF1IHx8ICFjXG4gICAgfSwge1xuICAgICAgbWFwOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoNiksXG4gICAgICBpID0gZSg0Nyk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgICAgIHJldHVybiAhKEFycmF5Lm9mLmNhbGwodCkgaW5zdGFuY2VvZiB0KTtcbiAgICAgIH0pXG4gICAgfSwge1xuICAgICAgb2Y6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBlID0gbmV3IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMgPyB0aGlzIDogQXJyYXkpKG4pOyBuID4gdDspIGkoZSwgdCwgYXJndW1lbnRzW3QrK10pO1xuICAgICAgICByZXR1cm4gZS5sZW5ndGggPSBuLCBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDEwNCkubGVmdCxcbiAgICAgIGkgPSBlKDY2KSxcbiAgICAgIGEgPSBlKDY3KSxcbiAgICAgIHUgPSBpKFwicmVkdWNlXCIpLFxuICAgICAgYyA9IGEoXCJyZWR1Y2VcIiwge1xuICAgICAgICAxOiAwXG4gICAgICB9KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJBcnJheVwiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiAhdSB8fCAhY1xuICAgIH0sIHtcbiAgICAgIHJlZHVjZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgdCwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2NSksXG4gICAgICBvID0gZSg0NiksXG4gICAgICBpID0gZSgxMCksXG4gICAgICBhID0gZSgzOSksXG4gICAgICB1ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuLCBlLCB1LCBjKSB7XG4gICAgICAgICAgcihlKTtcbiAgICAgICAgICB2YXIgZiA9IG8obiksXG4gICAgICAgICAgICBzID0gaShmKSxcbiAgICAgICAgICAgIGwgPSBhKGYubGVuZ3RoKSxcbiAgICAgICAgICAgIHAgPSB0ID8gbCAtIDEgOiAwLFxuICAgICAgICAgICAgaCA9IHQgPyAtMSA6IDE7XG4gICAgICAgICAgaWYgKHUgPCAyKSBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpZiAocCBpbiBzKSB7XG4gICAgICAgICAgICAgIGMgPSBzW3BdLCBwICs9IGg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHAgKz0gaCwgdCA/IHAgPCAwIDogbCA8PSBwKSB0aHJvdyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKDsgdCA/IHAgPj0gMCA6IGwgPiBwOyBwICs9IGgpIHAgaW4gcyAmJiAoYyA9IGUoYywgc1twXSwgcCwgZikpO1xuICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSB7XG4gICAgICBsZWZ0OiB1KCExKSxcbiAgICAgIHJpZ2h0OiB1KCEwKVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTA0KS5yaWdodCxcbiAgICAgIGkgPSBlKDY2KSxcbiAgICAgIGEgPSBlKDY3KSxcbiAgICAgIHUgPSBpKFwicmVkdWNlUmlnaHRcIiksXG4gICAgICBjID0gYShcInJlZHVjZVwiLCB7XG4gICAgICAgIDE6IDBcbiAgICAgIH0pO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6ICF1IHx8ICFjXG4gICAgfSwge1xuICAgICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIHQsIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgxNCksXG4gICAgICBpID0gZSg0NSksXG4gICAgICBhID0gZSg0MSksXG4gICAgICB1ID0gZSgzOSksXG4gICAgICBjID0gZSg5KSxcbiAgICAgIGYgPSBlKDQ3KSxcbiAgICAgIHMgPSBlKDQ5KSxcbiAgICAgIGwgPSBlKDUyKSxcbiAgICAgIHAgPSBlKDY3KSxcbiAgICAgIGggPSBsKFwic2xpY2VcIiksXG4gICAgICB2ID0gcChcInNsaWNlXCIsIHtcbiAgICAgICAgQUNDRVNTT1JTOiAhMCxcbiAgICAgICAgMDogMCxcbiAgICAgICAgMTogMlxuICAgICAgfSksXG4gICAgICBnID0gcyhcInNwZWNpZXNcIiksXG4gICAgICBkID0gW10uc2xpY2UsXG4gICAgICB5ID0gTWF0aC5tYXg7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogIWggfHwgIXZcbiAgICB9LCB7XG4gICAgICBzbGljZTogZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgdmFyIGUsXG4gICAgICAgICAgcixcbiAgICAgICAgICBzLFxuICAgICAgICAgIGwgPSBjKHRoaXMpLFxuICAgICAgICAgIHAgPSB1KGwubGVuZ3RoKSxcbiAgICAgICAgICBoID0gYSh0LCBwKSxcbiAgICAgICAgICB2ID0gYSh2b2lkIDAgPT09IG4gPyBwIDogbiwgcCk7XG4gICAgICAgIGlmIChpKGwpICYmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIChlID0gbC5jb25zdHJ1Y3RvcikgfHwgZSAhPT0gQXJyYXkgJiYgIWkoZS5wcm90b3R5cGUpID8gbyhlKSAmJiBudWxsID09PSAoZSA9IGVbZ10pICYmIChlID0gdm9pZCAwKSA6IGUgPSB2b2lkIDAsIGUgPT09IEFycmF5IHx8IHZvaWQgMCA9PT0gZSkpIHJldHVybiBkLmNhbGwobCwgaCwgdik7XG4gICAgICAgIGZvciAociA9IG5ldyAodm9pZCAwID09PSBlID8gQXJyYXkgOiBlKSh5KHYgLSBoLCAwKSksIHMgPSAwOyBoIDwgdjsgaCsrLCBzKyspIGggaW4gbCAmJiBmKHIsIHMsIGxbaF0pO1xuICAgICAgICByZXR1cm4gci5sZW5ndGggPSBzLCByO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYzKS5zb21lLFxuICAgICAgaSA9IGUoNjYpLFxuICAgICAgYSA9IGUoNjcpLFxuICAgICAgdSA9IGkoXCJzb21lXCIpLFxuICAgICAgYyA9IGEoXCJzb21lXCIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIkFycmF5XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6ICF1IHx8ICFjXG4gICAgfSwge1xuICAgICAgc29tZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgdCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIGUoMTA5KShcIkFycmF5XCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzNCksXG4gICAgICBvID0gZSgxOSksXG4gICAgICBpID0gZSg0OSksXG4gICAgICBhID0gZSg1KSxcbiAgICAgIHUgPSBpKFwic3BlY2llc1wiKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4gPSByKHQpLFxuICAgICAgICBlID0gby5mO1xuICAgICAgYSAmJiBuICYmICFuW3VdICYmIGUobiwgdSwge1xuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg0MSksXG4gICAgICBpID0gZSg0MCksXG4gICAgICBhID0gZSgzOSksXG4gICAgICB1ID0gZSg0NiksXG4gICAgICBjID0gZSg0OCksXG4gICAgICBmID0gZSg0NyksXG4gICAgICBzID0gZSg1MiksXG4gICAgICBsID0gZSg2NyksXG4gICAgICBwID0gcyhcInNwbGljZVwiKSxcbiAgICAgIGggPSBsKFwic3BsaWNlXCIsIHtcbiAgICAgICAgQUNDRVNTT1JTOiAhMCxcbiAgICAgICAgMDogMCxcbiAgICAgICAgMTogMlxuICAgICAgfSksXG4gICAgICB2ID0gTWF0aC5tYXgsXG4gICAgICBnID0gTWF0aC5taW47XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiQXJyYXlcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogIXAgfHwgIWhcbiAgICB9LCB7XG4gICAgICBzcGxpY2U6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIHZhciBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgcyxcbiAgICAgICAgICBsLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgaCxcbiAgICAgICAgICBkID0gdSh0aGlzKSxcbiAgICAgICAgICB5ID0gYShkLmxlbmd0aCksXG4gICAgICAgICAgeCA9IG8odCwgeSksXG4gICAgICAgICAgbSA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmICgwID09PSBtID8gZSA9IHIgPSAwIDogMSA9PT0gbSA/IChlID0gMCwgciA9IHkgLSB4KSA6IChlID0gbSAtIDIsIHIgPSBnKHYoaShuKSwgMCksIHkgLSB4KSksIHkgKyBlIC0gciA+IDkwMDcxOTkyNTQ3NDA5OTEpIHRocm93IFR5cGVFcnJvcihcIk1heGltdW0gYWxsb3dlZCBsZW5ndGggZXhjZWVkZWRcIik7XG4gICAgICAgIGZvciAocyA9IGMoZCwgciksIGwgPSAwOyBsIDwgcjsgbCsrKSAocCA9IHggKyBsKSBpbiBkICYmIGYocywgbCwgZFtwXSk7XG4gICAgICAgIGlmIChzLmxlbmd0aCA9IHIsIGUgPCByKSB7XG4gICAgICAgICAgZm9yIChsID0geDsgbCA8IHkgLSByOyBsKyspIGggPSBsICsgZSwgKHAgPSBsICsgcikgaW4gZCA/IGRbaF0gPSBkW3BdIDogZGVsZXRlIGRbaF07XG4gICAgICAgICAgZm9yIChsID0geTsgbCA+IHkgLSByICsgZTsgbC0tKSBkZWxldGUgZFtsIC0gMV07XG4gICAgICAgIH0gZWxzZSBpZiAoZSA+IHIpIGZvciAobCA9IHkgLSByOyBsID4geDsgbC0tKSBoID0gbCArIGUgLSAxLCAocCA9IGwgKyByIC0gMSkgaW4gZCA/IGRbaF0gPSBkW3BdIDogZGVsZXRlIGRbaF07XG4gICAgICAgIGZvciAobCA9IDA7IGwgPCBlOyBsKyspIGRbbCArIHhdID0gYXJndW1lbnRzW2wgKyAyXTtcbiAgICAgICAgcmV0dXJuIGQubGVuZ3RoID0geSAtIHIgKyBlLCBzO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIGUoNTcpKFwiZmxhdFwiKTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDU3KShcImZsYXRNYXBcIik7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDE0KSxcbiAgICAgIG8gPSBlKDE5KSxcbiAgICAgIGkgPSBlKDkzKSxcbiAgICAgIGEgPSBlKDQ5KShcImhhc0luc3RhbmNlXCIpLFxuICAgICAgdSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICBhIGluIHUgfHwgby5mKHUsIGEsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0aGlzIHx8ICFyKHQpKSByZXR1cm4gITE7XG4gICAgICAgIGlmICghcih0aGlzLnByb3RvdHlwZSkpIHJldHVybiB0IGluc3RhbmNlb2YgdGhpcztcbiAgICAgICAgZm9yICg7IHQgPSBpKHQpOykgaWYgKHRoaXMucHJvdG90eXBlID09PSB0KSByZXR1cm4gITA7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNSksXG4gICAgICBvID0gZSgxOSkuZixcbiAgICAgIGkgPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICBhID0gaS50b1N0cmluZyxcbiAgICAgIHUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG4gICAgciAmJiAhKFwibmFtZVwiIGluIGkpICYmIG8oaSwgXCJuYW1lXCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gYS5jYWxsKHRoaXMpLm1hdGNoKHUpWzFdO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDIpKHtcbiAgICAgIGdsb2JhbDogITBcbiAgICB9LCB7XG4gICAgICBnbG9iYWxUaGlzOiBlKDMpXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMzQpLFxuICAgICAgaSA9IGUoNiksXG4gICAgICBhID0gbyhcIkpTT05cIiwgXCJzdHJpbmdpZnlcIiksXG4gICAgICB1ID0gL1tcXHVEODAwLVxcdURGRkZdL2csXG4gICAgICBjID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvLFxuICAgICAgZiA9IC9eW1xcdURDMDAtXFx1REZGRl0kLyxcbiAgICAgIHMgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgICB2YXIgciA9IGUuY2hhckF0KG4gLSAxKSxcbiAgICAgICAgICBvID0gZS5jaGFyQXQobiArIDEpO1xuICAgICAgICByZXR1cm4gYy50ZXN0KHQpICYmICFmLnRlc3QobykgfHwgZi50ZXN0KHQpICYmICFjLnRlc3QocikgPyBcIlxcXFx1XCIgKyB0LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpIDogdDtcbiAgICAgIH0sXG4gICAgICBsID0gaShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnXCJcXFxcdWRmMDZcXFxcdWQ4MzRcIicgIT09IGEoXCJcXHVkZjA2XFx1ZDgzNFwiKSB8fCAnXCJcXFxcdWRlYWRcIicgIT09IGEoXCJcXHVkZWFkXCIpO1xuICAgICAgfSk7XG4gICAgYSAmJiByKHtcbiAgICAgIHRhcmdldDogXCJKU09OXCIsXG4gICAgICBzdGF0OiAhMCxcbiAgICAgIGZvcmNlZDogbFxuICAgIH0sIHtcbiAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgICAgdmFyIHIgPSBhLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiByID8gci5yZXBsYWNlKHUsIHMpIDogcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyk7XG4gICAgZSg5NSkoci5KU09OLCBcIkpTT05cIiwgITApO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxMTkpLFxuICAgICAgbyA9IGUoMTI1KTtcbiAgICB0LmV4cG9ydHMgPSByKFwiTWFwXCIsIGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdm9pZCAwKTtcbiAgICAgIH07XG4gICAgfSwgbyk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMyksXG4gICAgICBpID0gZSg0NCksXG4gICAgICBhID0gZSgyMSksXG4gICAgICB1ID0gZSgxMjApLFxuICAgICAgYyA9IGUoMTIyKSxcbiAgICAgIGYgPSBlKDEyMyksXG4gICAgICBzID0gZSgxNCksXG4gICAgICBsID0gZSg2KSxcbiAgICAgIHAgPSBlKDg2KSxcbiAgICAgIGggPSBlKDk1KSxcbiAgICAgIHYgPSBlKDEyNCk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIHZhciBnID0gLTEgIT09IHQuaW5kZXhPZihcIk1hcFwiKSxcbiAgICAgICAgZCA9IC0xICE9PSB0LmluZGV4T2YoXCJXZWFrXCIpLFxuICAgICAgICB5ID0gZyA/IFwic2V0XCIgOiBcImFkZFwiLFxuICAgICAgICB4ID0gb1t0XSxcbiAgICAgICAgbSA9IHggJiYgeC5wcm90b3R5cGUsXG4gICAgICAgIGIgPSB4LFxuICAgICAgICBTID0ge30sXG4gICAgICAgIEUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBuID0gbVt0XTtcbiAgICAgICAgICBhKG0sIHQsIFwiYWRkXCIgPT0gdCA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbi5jYWxsKHRoaXMsIDAgPT09IHQgPyAwIDogdCksIHRoaXM7XG4gICAgICAgICAgfSA6IFwiZGVsZXRlXCIgPT0gdCA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gIShkICYmICFzKHQpKSAmJiBuLmNhbGwodGhpcywgMCA9PT0gdCA/IDAgOiB0KTtcbiAgICAgICAgICB9IDogXCJnZXRcIiA9PSB0ID8gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBkICYmICFzKHQpID8gdm9pZCAwIDogbi5jYWxsKHRoaXMsIDAgPT09IHQgPyAwIDogdCk7XG4gICAgICAgICAgfSA6IFwiaGFzXCIgPT0gdCA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gIShkICYmICFzKHQpKSAmJiBuLmNhbGwodGhpcywgMCA9PT0gdCA/IDAgOiB0KTtcbiAgICAgICAgICB9IDogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuLmNhbGwodGhpcywgMCA9PT0gdCA/IDAgOiB0LCBlKSwgdGhpcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIGlmIChpKHQsIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgeCB8fCAhKGQgfHwgbS5mb3JFYWNoICYmICFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IHgoKS5lbnRyaWVzKCkubmV4dCgpO1xuICAgICAgfSkpKSkgYiA9IGUuZ2V0Q29uc3RydWN0b3IobiwgdCwgZywgeSksIHUuUkVRVUlSRUQgPSAhMDtlbHNlIGlmIChpKHQsICEwKSkge1xuICAgICAgICB2YXIgdyA9IG5ldyBiKCksXG4gICAgICAgICAgTyA9IHdbeV0oZCA/IHt9IDogLTAsIDEpICE9IHcsXG4gICAgICAgICAgUiA9IGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdy5oYXMoMSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgQSA9IHAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIG5ldyB4KHQpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGogPSAhZCAmJiBsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSBuZXcgeCgpLCBuID0gNTsgbi0tOykgdFt5XShuLCBuKTtcbiAgICAgICAgICAgIHJldHVybiAhdC5oYXMoLTApO1xuICAgICAgICAgIH0pO1xuICAgICAgICBBIHx8ICgoYiA9IG4oZnVuY3Rpb24gKG4sIGUpIHtcbiAgICAgICAgICBmKG4sIGIsIHQpO1xuICAgICAgICAgIHZhciByID0gdihuZXcgeCgpLCBuLCBiKTtcbiAgICAgICAgICByZXR1cm4gbnVsbCAhPSBlICYmIGMoZSwgclt5XSwgciwgZyksIHI7XG4gICAgICAgIH0pKS5wcm90b3R5cGUgPSBtLCBtLmNvbnN0cnVjdG9yID0gYiksIChSIHx8IGopICYmIChFKFwiZGVsZXRlXCIpLCBFKFwiaGFzXCIpLCBnICYmIEUoXCJnZXRcIikpLCAoaiB8fCBPKSAmJiBFKHkpLCBkICYmIG0uY2xlYXIgJiYgZGVsZXRlIG0uY2xlYXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gU1t0XSA9IGIsIHIoe1xuICAgICAgICBnbG9iYWw6ICEwLFxuICAgICAgICBmb3JjZWQ6IGIgIT0geFxuICAgICAgfSwgUyksIGgoYiwgdCksIGQgfHwgZS5zZXRTdHJvbmcoYiwgdCwgZyksIGI7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMzEpLFxuICAgICAgbyA9IGUoMTQpLFxuICAgICAgaSA9IGUoMTUpLFxuICAgICAgYSA9IGUoMTkpLmYsXG4gICAgICB1ID0gZSgzMCksXG4gICAgICBjID0gZSgxMjEpLFxuICAgICAgZiA9IHUoXCJtZXRhXCIpLFxuICAgICAgcyA9IDAsXG4gICAgICBsID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIH0sXG4gICAgICBwID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgYSh0LCBmLCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIG9iamVjdElEOiBcIk9cIiArICsrcyxcbiAgICAgICAgICAgIHdlYWtEYXRhOiB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaCA9IHQuZXhwb3J0cyA9IHtcbiAgICAgICAgUkVRVUlSRUQ6ICExLFxuICAgICAgICBmYXN0S2V5OiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgIGlmICghbyh0KSkgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIHQgPyB0IDogKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyBcIlNcIiA6IFwiUFwiKSArIHQ7XG4gICAgICAgICAgaWYgKCFpKHQsIGYpKSB7XG4gICAgICAgICAgICBpZiAoIWwodCkpIHJldHVybiBcIkZcIjtcbiAgICAgICAgICAgIGlmICghbikgcmV0dXJuIFwiRVwiO1xuICAgICAgICAgICAgcCh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRbZl0ub2JqZWN0SUQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdlYWtEYXRhOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgIGlmICghaSh0LCBmKSkge1xuICAgICAgICAgICAgaWYgKCFsKHQpKSByZXR1cm4gITA7XG4gICAgICAgICAgICBpZiAoIW4pIHJldHVybiAhMTtcbiAgICAgICAgICAgIHAodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0W2ZdLndlYWtEYXRhO1xuICAgICAgICB9LFxuICAgICAgICBvbkZyZWV6ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gYyAmJiBoLlJFUVVJUkVEICYmIGwodCkgJiYgIWkodCwgZikgJiYgcCh0KSwgdDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICByW2ZdID0gITA7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpO1xuICAgIHQuZXhwb3J0cyA9ICFyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyMCksXG4gICAgICBvID0gZSg4MSksXG4gICAgICBpID0gZSgzOSksXG4gICAgICBhID0gZSg2NCksXG4gICAgICB1ID0gZSg4MyksXG4gICAgICBjID0gZSg4MCksXG4gICAgICBmID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdCwgdGhpcy5yZXN1bHQgPSBuO1xuICAgICAgfTtcbiAgICAodC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUsIHMsIGwpIHtcbiAgICAgIHZhciBwLFxuICAgICAgICBoLFxuICAgICAgICB2LFxuICAgICAgICBnLFxuICAgICAgICBkLFxuICAgICAgICB5LFxuICAgICAgICB4LFxuICAgICAgICBtID0gYShuLCBlLCBzID8gMiA6IDEpO1xuICAgICAgaWYgKGwpIHAgPSB0O2Vsc2Uge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiAoaCA9IHUodCkpKSB0aHJvdyBUeXBlRXJyb3IoXCJUYXJnZXQgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICAgICAgICBpZiAobyhoKSkge1xuICAgICAgICAgIGZvciAodiA9IDAsIGcgPSBpKHQubGVuZ3RoKTsgZyA+IHY7IHYrKykgaWYgKChkID0gcyA/IG0ocih4ID0gdFt2XSlbMF0sIHhbMV0pIDogbSh0W3ZdKSkgJiYgZCBpbnN0YW5jZW9mIGYpIHJldHVybiBkO1xuICAgICAgICAgIHJldHVybiBuZXcgZighMSk7XG4gICAgICAgIH1cbiAgICAgICAgcCA9IGguY2FsbCh0KTtcbiAgICAgIH1cbiAgICAgIGZvciAoeSA9IHAubmV4dDsgISh4ID0geS5jYWxsKHApKS5kb25lOykgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIChkID0gYyhwLCBtLCB4LnZhbHVlLCBzKSkgJiYgZCAmJiBkIGluc3RhbmNlb2YgZikgcmV0dXJuIGQ7XG4gICAgICByZXR1cm4gbmV3IGYoITEpO1xuICAgIH0pLnN0b3AgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG5ldyBmKCEwLCB0KTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICBpZiAoISh0IGluc3RhbmNlb2YgbikpIHRocm93IFR5cGVFcnJvcihcIkluY29ycmVjdCBcIiArIChlID8gZSArIFwiIFwiIDogXCJcIikgKyBcImludm9jYXRpb25cIik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxNCksXG4gICAgICBvID0gZSg5Nik7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIHZhciBpLCBhO1xuICAgICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiAoaSA9IG4uY29uc3RydWN0b3IpICYmIGkgIT09IGUgJiYgcihhID0gaS5wcm90b3R5cGUpICYmIGEgIT09IGUucHJvdG90eXBlICYmIG8odCwgYSksIHQ7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTkpLmYsXG4gICAgICBvID0gZSg1OCksXG4gICAgICBpID0gZSgxMjYpLFxuICAgICAgYSA9IGUoNjQpLFxuICAgICAgdSA9IGUoMTIzKSxcbiAgICAgIGMgPSBlKDEyMiksXG4gICAgICBmID0gZSg5MCksXG4gICAgICBzID0gZSgxMDkpLFxuICAgICAgbCA9IGUoNSksXG4gICAgICBwID0gZSgxMjApLmZhc3RLZXksXG4gICAgICBoID0gZSgyNSksXG4gICAgICB2ID0gaC5zZXQsXG4gICAgICBnID0gaC5nZXR0ZXJGb3I7XG4gICAgdC5leHBvcnRzID0ge1xuICAgICAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh0LCBuLCBlLCBmKSB7XG4gICAgICAgIHZhciBzID0gdChmdW5jdGlvbiAodCwgcikge1xuICAgICAgICAgICAgdSh0LCBzLCBuKSwgdih0LCB7XG4gICAgICAgICAgICAgIHR5cGU6IG4sXG4gICAgICAgICAgICAgIGluZGV4OiBvKG51bGwpLFxuICAgICAgICAgICAgICBmaXJzdDogdm9pZCAwLFxuICAgICAgICAgICAgICBsYXN0OiB2b2lkIDAsXG4gICAgICAgICAgICAgIHNpemU6IDBcbiAgICAgICAgICAgIH0pLCBsIHx8ICh0LnNpemUgPSAwKSwgbnVsbCAhPSByICYmIGMociwgdFtmXSwgdCwgZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaCA9IGcobiksXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICAgICAgICB2YXIgcixcbiAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgaSA9IGgodCksXG4gICAgICAgICAgICAgIGEgPSB5KHQsIG4pO1xuICAgICAgICAgICAgcmV0dXJuIGEgPyBhLnZhbHVlID0gZSA6IChpLmxhc3QgPSBhID0ge1xuICAgICAgICAgICAgICBpbmRleDogbyA9IHAobiwgITApLFxuICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgIHZhbHVlOiBlLFxuICAgICAgICAgICAgICBwcmV2aW91czogciA9IGkubGFzdCxcbiAgICAgICAgICAgICAgbmV4dDogdm9pZCAwLFxuICAgICAgICAgICAgICByZW1vdmVkOiAhMVxuICAgICAgICAgICAgfSwgaS5maXJzdCB8fCAoaS5maXJzdCA9IGEpLCByICYmIChyLm5leHQgPSBhKSwgbCA/IGkuc2l6ZSsrIDogdC5zaXplKyssIFwiRlwiICE9PSBvICYmIChpLmluZGV4W29dID0gYSkpLCB0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeSA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICB2YXIgZSxcbiAgICAgICAgICAgICAgciA9IGgodCksXG4gICAgICAgICAgICAgIG8gPSBwKG4pO1xuICAgICAgICAgICAgaWYgKFwiRlwiICE9PSBvKSByZXR1cm4gci5pbmRleFtvXTtcbiAgICAgICAgICAgIGZvciAoZSA9IHIuZmlyc3Q7IGU7IGUgPSBlLm5leHQpIGlmIChlLmtleSA9PSBuKSByZXR1cm4gZTtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaShzLnByb3RvdHlwZSwge1xuICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gaCh0aGlzKSwgbiA9IHQuaW5kZXgsIGUgPSB0LmZpcnN0OyBlOykgZS5yZW1vdmVkID0gITAsIGUucHJldmlvdXMgJiYgKGUucHJldmlvdXMgPSBlLnByZXZpb3VzLm5leHQgPSB2b2lkIDApLCBkZWxldGUgbltlLmluZGV4XSwgZSA9IGUubmV4dDtcbiAgICAgICAgICAgIHQuZmlyc3QgPSB0Lmxhc3QgPSB2b2lkIDAsIGwgPyB0LnNpemUgPSAwIDogdGhpcy5zaXplID0gMDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gaCh0aGlzKSxcbiAgICAgICAgICAgICAgZSA9IHkodGhpcywgdCk7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICB2YXIgciA9IGUubmV4dCxcbiAgICAgICAgICAgICAgICBvID0gZS5wcmV2aW91cztcbiAgICAgICAgICAgICAgZGVsZXRlIG4uaW5kZXhbZS5pbmRleF0sIGUucmVtb3ZlZCA9ICEwLCBvICYmIChvLm5leHQgPSByKSwgciAmJiAoci5wcmV2aW91cyA9IG8pLCBuLmZpcnN0ID09IGUgJiYgKG4uZmlyc3QgPSByKSwgbi5sYXN0ID09IGUgJiYgKG4ubGFzdCA9IG8pLCBsID8gbi5zaXplLS0gOiB0aGlzLnNpemUtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhIWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiwgZSA9IGgodGhpcyksIHIgPSBhKHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwLCAzKTsgbiA9IG4gPyBuLm5leHQgOiBlLmZpcnN0OykgZm9yIChyKG4udmFsdWUsIG4ua2V5LCB0aGlzKTsgbiAmJiBuLnJlbW92ZWQ7KSBuID0gbi5wcmV2aW91cztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXkodGhpcywgdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSwgaShzLnByb3RvdHlwZSwgZSA/IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHkodGhpcywgdCk7XG4gICAgICAgICAgICByZXR1cm4gbiAmJiBuLnZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIGQodGhpcywgMCA9PT0gdCA/IDAgOiB0LCBuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgYWRkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGQodGhpcywgdCA9IDAgPT09IHQgPyAwIDogdCwgdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSwgbCAmJiByKHMucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGgodGhpcykuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBzO1xuICAgICAgfSxcbiAgICAgIHNldFN0cm9uZzogZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgICAgdmFyIHIgPSBuICsgXCIgSXRlcmF0b3JcIixcbiAgICAgICAgICBvID0gZyhuKSxcbiAgICAgICAgICBpID0gZyhyKTtcbiAgICAgICAgZih0LCBuLCBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgIHYodGhpcywge1xuICAgICAgICAgICAgdHlwZTogcixcbiAgICAgICAgICAgIHRhcmdldDogdCxcbiAgICAgICAgICAgIHN0YXRlOiBvKHQpLFxuICAgICAgICAgICAga2luZDogbixcbiAgICAgICAgICAgIGxhc3Q6IHZvaWQgMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgdCA9IGkodGhpcyksIG4gPSB0LmtpbmQsIGUgPSB0Lmxhc3Q7IGUgJiYgZS5yZW1vdmVkOykgZSA9IGUucHJldmlvdXM7XG4gICAgICAgICAgcmV0dXJuIHQudGFyZ2V0ICYmICh0Lmxhc3QgPSBlID0gZSA/IGUubmV4dCA6IHQuc3RhdGUuZmlyc3QpID8gXCJrZXlzXCIgPT0gbiA/IHtcbiAgICAgICAgICAgIHZhbHVlOiBlLmtleSxcbiAgICAgICAgICAgIGRvbmU6ICExXG4gICAgICAgICAgfSA6IFwidmFsdWVzXCIgPT0gbiA/IHtcbiAgICAgICAgICAgIHZhbHVlOiBlLnZhbHVlLFxuICAgICAgICAgICAgZG9uZTogITFcbiAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgdmFsdWU6IFtlLmtleSwgZS52YWx1ZV0sXG4gICAgICAgICAgICBkb25lOiAhMVxuICAgICAgICAgIH0gOiAodC50YXJnZXQgPSB2b2lkIDAsIHtcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDAsXG4gICAgICAgICAgICBkb25lOiAhMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlID8gXCJlbnRyaWVzXCIgOiBcInZhbHVlc1wiLCAhZSwgITApLCBzKG4pO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIxKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgZm9yICh2YXIgbyBpbiBuKSByKHQsIG8sIG5bb10sIGUpO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNSksXG4gICAgICBvID0gZSgzKSxcbiAgICAgIGkgPSBlKDQ0KSxcbiAgICAgIGEgPSBlKDIxKSxcbiAgICAgIHUgPSBlKDE1KSxcbiAgICAgIGMgPSBlKDExKSxcbiAgICAgIGYgPSBlKDEyNCksXG4gICAgICBzID0gZSgxMyksXG4gICAgICBsID0gZSg2KSxcbiAgICAgIHAgPSBlKDU4KSxcbiAgICAgIGggPSBlKDM2KS5mLFxuICAgICAgdiA9IGUoNCkuZixcbiAgICAgIGcgPSBlKDE5KS5mLFxuICAgICAgZCA9IGUoMTI4KS50cmltLFxuICAgICAgeSA9IG8uTnVtYmVyLFxuICAgICAgeCA9IHkucHJvdG90eXBlLFxuICAgICAgbSA9IFwiTnVtYmVyXCIgPT0gYyhwKHgpKSxcbiAgICAgIGIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBjLFxuICAgICAgICAgIGYgPSBzKHQsICExKTtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGYgJiYgZi5sZW5ndGggPiAyKSBpZiAoNDMgPT09IChuID0gKGYgPSBkKGYpKS5jaGFyQ29kZUF0KDApKSB8fCA0NSA9PT0gbikge1xuICAgICAgICAgIGlmICg4OCA9PT0gKGUgPSBmLmNoYXJDb2RlQXQoMikpIHx8IDEyMCA9PT0gZSkgcmV0dXJuIE5hTjtcbiAgICAgICAgfSBlbHNlIGlmICg0OCA9PT0gbikge1xuICAgICAgICAgIHN3aXRjaCAoZi5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgICAgciA9IDIsIG8gPSA0OTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc5OlxuICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICAgIHIgPSA4LCBvID0gNTU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICtmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGEgPSAoaSA9IGYuc2xpY2UoMikpLmxlbmd0aCwgdSA9IDA7IHUgPCBhOyB1KyspIGlmICgoYyA9IGkuY2hhckNvZGVBdCh1KSkgPCA0OCB8fCBjID4gbykgcmV0dXJuIE5hTjtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaSwgcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICtmO1xuICAgICAgfTtcbiAgICBpZiAoaShcIk51bWJlclwiLCAheShcIiAwbzFcIikgfHwgIXkoXCIwYjFcIikgfHwgeShcIisweDFcIikpKSB7XG4gICAgICBmb3IgKHZhciBTLCBFID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHQsXG4gICAgICAgICAgICBlID0gdGhpcztcbiAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIEUgJiYgKG0gPyBsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHgudmFsdWVPZi5jYWxsKGUpO1xuICAgICAgICAgIH0pIDogXCJOdW1iZXJcIiAhPSBjKGUpKSA/IGYobmV3IHkoYihuKSksIGUsIEUpIDogYihuKTtcbiAgICAgICAgfSwgdyA9IHIgPyBoKHkpIDogXCJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlclwiLnNwbGl0KFwiLFwiKSwgTyA9IDA7IHcubGVuZ3RoID4gTzsgTysrKSB1KHksIFMgPSB3W09dKSAmJiAhdShFLCBTKSAmJiBnKEUsIFMsIHYoeSwgUykpO1xuICAgICAgRS5wcm90b3R5cGUgPSB4LCB4LmNvbnN0cnVjdG9yID0gRSwgYShvLCBcIk51bWJlclwiLCBFKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDEyKSxcbiAgICAgIG8gPSBcIltcIiArIGUoMTI5KSArIFwiXVwiLFxuICAgICAgaSA9IFJlZ0V4cChcIl5cIiArIG8gKyBvICsgXCIqXCIpLFxuICAgICAgYSA9IFJlZ0V4cChvICsgbyArIFwiKiRcIiksXG4gICAgICB1ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgdmFyIGUgPSBTdHJpbmcocihuKSk7XG4gICAgICAgICAgcmV0dXJuIDEgJiB0ICYmIChlID0gZS5yZXBsYWNlKGksIFwiXCIpKSwgMiAmIHQgJiYgKGUgPSBlLnJlcGxhY2UoYSwgXCJcIikpLCBlO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSB7XG4gICAgICBzdGFydDogdSgxKSxcbiAgICAgIGVuZDogdSgyKSxcbiAgICAgIHRyaW06IHUoMylcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbikge1xuICAgIHQuZXhwb3J0cyA9IFwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCI7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgyKSh7XG4gICAgICB0YXJnZXQ6IFwiTnVtYmVyXCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIEVQU0lMT046IE1hdGgucG93KDIsIC01MilcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDIpKHtcbiAgICAgIHRhcmdldDogXCJOdW1iZXJcIixcbiAgICAgIHN0YXQ6ICEwXG4gICAgfSwge1xuICAgICAgaXNGaW5pdGU6IGUoMTMyKVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzKS5pc0Zpbml0ZTtcbiAgICB0LmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBcIm51bWJlclwiID09IHR5cGVvZiB0ICYmIHIodCk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDIpKHtcbiAgICAgIHRhcmdldDogXCJOdW1iZXJcIixcbiAgICAgIHN0YXQ6ICEwXG4gICAgfSwge1xuICAgICAgaXNJbnRlZ2VyOiBlKDEzNClcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTQpLFxuICAgICAgbyA9IE1hdGguZmxvb3I7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiAhcih0KSAmJiBpc0Zpbml0ZSh0KSAmJiBvKHQpID09PSB0O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgyKSh7XG4gICAgICB0YXJnZXQ6IFwiTnVtYmVyXCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIGlzTmFOOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAhPSB0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDEzNCksXG4gICAgICBpID0gTWF0aC5hYnM7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiTnVtYmVyXCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBvKHQpICYmIGkodCkgPD0gOTAwNzE5OTI1NDc0MDk5MTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDIpKHtcbiAgICAgIHRhcmdldDogXCJOdW1iZXJcIixcbiAgICAgIHN0YXQ6ICEwXG4gICAgfSwge1xuICAgICAgTUFYX1NBRkVfSU5URUdFUjogOTAwNzE5OTI1NDc0MDk5MVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIGUoMikoe1xuICAgICAgdGFyZ2V0OiBcIk51bWJlclwiLFxuICAgICAgc3RhdDogITBcbiAgICB9LCB7XG4gICAgICBNSU5fU0FGRV9JTlRFR0VSOiAtOTAwNzE5OTI1NDc0MDk5MVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDE0MCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiTnVtYmVyXCIsXG4gICAgICBzdGF0OiAhMCxcbiAgICAgIGZvcmNlZDogTnVtYmVyLnBhcnNlRmxvYXQgIT0gb1xuICAgIH0sIHtcbiAgICAgIHBhcnNlRmxvYXQ6IG9cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyksXG4gICAgICBvID0gZSgxMjgpLnRyaW0sXG4gICAgICBpID0gZSgxMjkpLFxuICAgICAgYSA9IHIucGFyc2VGbG9hdCxcbiAgICAgIHUgPSAxIC8gYShpICsgXCItMFwiKSAhPSAtMSAvIDA7XG4gICAgdC5leHBvcnRzID0gdSA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbiA9IG8oU3RyaW5nKHQpKSxcbiAgICAgICAgZSA9IGEobik7XG4gICAgICByZXR1cm4gMCA9PT0gZSAmJiBcIi1cIiA9PSBuLmNoYXJBdCgwKSA/IC0wIDogZTtcbiAgICB9IDogYTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgxNDIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk51bWJlclwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6IE51bWJlci5wYXJzZUludCAhPSBvXG4gICAgfSwge1xuICAgICAgcGFyc2VJbnQ6IG9cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyksXG4gICAgICBvID0gZSgxMjgpLnRyaW0sXG4gICAgICBpID0gZSgxMjkpLFxuICAgICAgYSA9IHIucGFyc2VJbnQsXG4gICAgICB1ID0gL15bKy1dPzBbWHhdLyxcbiAgICAgIGMgPSA4ICE9PSBhKGkgKyBcIjA4XCIpIHx8IDIyICE9PSBhKGkgKyBcIjB4MTZcIik7XG4gICAgdC5leHBvcnRzID0gYyA/IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICB2YXIgZSA9IG8oU3RyaW5nKHQpKTtcbiAgICAgIHJldHVybiBhKGUsIG4gPj4+IDAgfHwgKHUudGVzdChlKSA/IDE2IDogMTApKTtcbiAgICB9IDogYTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg0MCksXG4gICAgICBpID0gZSgxNDQpLFxuICAgICAgYSA9IGUoMTQ1KSxcbiAgICAgIHUgPSBlKDYpLFxuICAgICAgYyA9IDEuLnRvRml4ZWQsXG4gICAgICBmID0gTWF0aC5mbG9vcixcbiAgICAgIHMgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgICByZXR1cm4gMCA9PT0gbiA/IGUgOiBuICUgMiA9PSAxID8gcyh0LCBuIC0gMSwgZSAqIHQpIDogcyh0ICogdCwgbiAvIDIsIGUpO1xuICAgICAgfTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJOdW1iZXJcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogYyAmJiAoXCIwLjAwMFwiICE9PSA4ZS01LnRvRml4ZWQoMykgfHwgXCIxXCIgIT09IC45LnRvRml4ZWQoMCkgfHwgXCIxLjI1XCIgIT09IDEuMjU1LnRvRml4ZWQoMikgfHwgXCIxMDAwMDAwMDAwMDAwMDAwMTI4XCIgIT09IDB4ZGUwYjZiM2E3NjQwMDgwLnRvRml4ZWQoMCkpIHx8ICF1KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYy5jYWxsKHt9KTtcbiAgICAgIH0pXG4gICAgfSwge1xuICAgICAgdG9GaXhlZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgZSxcbiAgICAgICAgICByLFxuICAgICAgICAgIHUsXG4gICAgICAgICAgYyA9IGkodGhpcyksXG4gICAgICAgICAgbCA9IG8odCksXG4gICAgICAgICAgcCA9IFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICBoID0gXCJcIixcbiAgICAgICAgICB2ID0gXCIwXCIsXG4gICAgICAgICAgZyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gLTEsIHIgPSBuOyArK2UgPCA2OykgciArPSB0ICogcFtlXSwgcFtlXSA9IHIgJSAxZTcsIHIgPSBmKHIgLyAxZTcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gNiwgZSA9IDA7IC0tbiA+PSAwOykgZSArPSBwW25dLCBwW25dID0gZihlIC8gdCksIGUgPSBlICUgdCAqIDFlNztcbiAgICAgICAgICB9LFxuICAgICAgICAgIHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gNiwgbiA9IFwiXCI7IC0tdCA+PSAwOykgaWYgKFwiXCIgIT09IG4gfHwgMCA9PT0gdCB8fCAwICE9PSBwW3RdKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gU3RyaW5nKHBbdF0pO1xuICAgICAgICAgICAgICBuID0gXCJcIiA9PT0gbiA/IGUgOiBuICsgYS5jYWxsKFwiMFwiLCA3IC0gZS5sZW5ndGgpICsgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH07XG4gICAgICAgIGlmIChsIDwgMCB8fCBsID4gMjApIHRocm93IFJhbmdlRXJyb3IoXCJJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzXCIpO1xuICAgICAgICBpZiAoYyAhPSBjKSByZXR1cm4gXCJOYU5cIjtcbiAgICAgICAgaWYgKGMgPD0gLTFlMjEgfHwgYyA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKGMpO1xuICAgICAgICBpZiAoYyA8IDAgJiYgKGggPSBcIi1cIiwgYyA9IC1jKSwgYyA+IDFlLTIxKSBpZiAoZSA9IChuID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMCwgZSA9IHQ7IGUgPj0gNDA5NjspIG4gKz0gMTIsIGUgLz0gNDA5NjtcbiAgICAgICAgICBmb3IgKDsgZSA+PSAyOykgbiArPSAxLCBlIC89IDI7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH0oYyAqIHMoMiwgNjksIDEpKSAtIDY5KSA8IDAgPyBjICogcygyLCAtbiwgMSkgOiBjIC8gcygyLCBuLCAxKSwgZSAqPSA0NTAzNTk5NjI3MzcwNDk2LCAobiA9IDUyIC0gbikgPiAwKSB7XG4gICAgICAgICAgZm9yIChnKDAsIGUpLCByID0gbDsgciA+PSA3OykgZygxZTcsIDApLCByIC09IDc7XG4gICAgICAgICAgZm9yIChnKHMoMTAsIHIsIDEpLCAwKSwgciA9IG4gLSAxOyByID49IDIzOykgZCgxIDw8IDIzKSwgciAtPSAyMztcbiAgICAgICAgICBkKDEgPDwgciksIGcoMSwgMSksIGQoMiksIHYgPSB5KCk7XG4gICAgICAgIH0gZWxzZSBnKDAsIGUpLCBnKDEgPDwgLW4sIDApLCB2ID0geSgpICsgYS5jYWxsKFwiMFwiLCBsKTtcbiAgICAgICAgcmV0dXJuIHYgPSBsID4gMCA/IGggKyAoKHUgPSB2Lmxlbmd0aCkgPD0gbCA/IFwiMC5cIiArIGEuY2FsbChcIjBcIiwgbCAtIHUpICsgdiA6IHYuc2xpY2UoMCwgdSAtIGwpICsgXCIuXCIgKyB2LnNsaWNlKHUgLSBsKSkgOiBoICsgdjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTEpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoXCJudW1iZXJcIiAhPSB0eXBlb2YgdCAmJiBcIk51bWJlclwiICE9IHIodCkpIHRocm93IFR5cGVFcnJvcihcIkluY29ycmVjdCBpbnZvY2F0aW9uXCIpO1xuICAgICAgcmV0dXJuICt0O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDQwKSxcbiAgICAgIG8gPSBlKDEyKTtcbiAgICB0LmV4cG9ydHMgPSBcIlwiLnJlcGVhdCB8fCBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4gPSBTdHJpbmcobyh0aGlzKSksXG4gICAgICAgIGUgPSBcIlwiLFxuICAgICAgICBpID0gcih0KTtcbiAgICAgIGlmIChpIDwgMCB8fCBpID09IDEgLyAwKSB0aHJvdyBSYW5nZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zXCIpO1xuICAgICAgZm9yICg7IGkgPiAwOyAoaSA+Pj49IDEpICYmIChuICs9IG4pKSAxICYgaSAmJiAoZSArPSBuKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTQ3KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBvXG4gICAgfSwge1xuICAgICAgYXNzaWduOiBvXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDUpLFxuICAgICAgbyA9IGUoNiksXG4gICAgICBpID0gZSg2MCksXG4gICAgICBhID0gZSg0MyksXG4gICAgICB1ID0gZSg3KSxcbiAgICAgIGMgPSBlKDQ2KSxcbiAgICAgIGYgPSBlKDEwKSxcbiAgICAgIHMgPSBPYmplY3QuYXNzaWduLFxuICAgICAgbCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICB0LmV4cG9ydHMgPSAhcyB8fCBvKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyICYmIDEgIT09IHMoe1xuICAgICAgICBiOiAxXG4gICAgICB9LCBzKGwoe30sIFwiYVwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsKHRoaXMsIFwiYlwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLCB7XG4gICAgICAgIGI6IDJcbiAgICAgIH0pKS5iKSByZXR1cm4gITA7XG4gICAgICB2YXIgdCA9IHt9LFxuICAgICAgICBuID0ge30sXG4gICAgICAgIGUgPSBTeW1ib2woKTtcbiAgICAgIHJldHVybiB0W2VdID0gNywgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgblt0XSA9IHQ7XG4gICAgICB9KSwgNyAhPSBzKHt9LCB0KVtlXSB8fCBcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIgIT0gaShzKHt9LCBuKSkuam9pbihcIlwiKTtcbiAgICB9KSA/IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICBmb3IgKHZhciBlID0gYyh0KSwgbyA9IGFyZ3VtZW50cy5sZW5ndGgsIHMgPSAxLCBsID0gYS5mLCBwID0gdS5mOyBvID4gczspIGZvciAodmFyIGgsIHYgPSBmKGFyZ3VtZW50c1tzKytdKSwgZyA9IGwgPyBpKHYpLmNvbmNhdChsKHYpKSA6IGkodiksIGQgPSBnLmxlbmd0aCwgeSA9IDA7IGQgPiB5OykgaCA9IGdbeSsrXSwgciAmJiAhcC5jYWxsKHYsIGgpIHx8IChlW2hdID0gdltoXSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9IDogcztcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg1KSxcbiAgICAgIGkgPSBlKDE0OSksXG4gICAgICBhID0gZSg0NiksXG4gICAgICB1ID0gZSg2NSksXG4gICAgICBjID0gZSgxOSk7XG4gICAgbyAmJiByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogaVxuICAgIH0sIHtcbiAgICAgIF9fZGVmaW5lR2V0dGVyX186IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIGMuZihhKHRoaXMpLCB0LCB7XG4gICAgICAgICAgZ2V0OiB1KG4pLFxuICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDI5KSxcbiAgICAgIG8gPSBlKDMpLFxuICAgICAgaSA9IGUoNik7XG4gICAgdC5leHBvcnRzID0gciB8fCAhaShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICBfX2RlZmluZVNldHRlcl9fLmNhbGwobnVsbCwgdCwgZnVuY3Rpb24gKCkge30pLCBkZWxldGUgb1t0XTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg1KSxcbiAgICAgIGkgPSBlKDE0OSksXG4gICAgICBhID0gZSg0NiksXG4gICAgICB1ID0gZSg2NSksXG4gICAgICBjID0gZSgxOSk7XG4gICAgbyAmJiByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogaVxuICAgIH0sIHtcbiAgICAgIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIGMuZihhKHRoaXMpLCB0LCB7XG4gICAgICAgICAgc2V0OiB1KG4pLFxuICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTUyKS5lbnRyaWVzO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk9iamVjdFwiLFxuICAgICAgc3RhdDogITBcbiAgICB9LCB7XG4gICAgICBlbnRyaWVzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNSksXG4gICAgICBvID0gZSg2MCksXG4gICAgICBpID0gZSg5KSxcbiAgICAgIGEgPSBlKDcpLmYsXG4gICAgICB1ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSwgdSA9IGkobiksIGMgPSBvKHUpLCBmID0gYy5sZW5ndGgsIHMgPSAwLCBsID0gW107IGYgPiBzOykgZSA9IGNbcysrXSwgciAmJiAhYS5jYWxsKHUsIGUpIHx8IGwucHVzaCh0ID8gW2UsIHVbZV1dIDogdVtlXSk7XG4gICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIHQuZXhwb3J0cyA9IHtcbiAgICAgIGVudHJpZXM6IHUoITApLFxuICAgICAgdmFsdWVzOiB1KCExKVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTIxKSxcbiAgICAgIGkgPSBlKDYpLFxuICAgICAgYSA9IGUoMTQpLFxuICAgICAgdSA9IGUoMTIwKS5vbkZyZWV6ZSxcbiAgICAgIGMgPSBPYmplY3QuZnJlZXplO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk9iamVjdFwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6IGkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjKDEpO1xuICAgICAgfSksXG4gICAgICBzaGFtOiAhb1xuICAgIH0sIHtcbiAgICAgIGZyZWV6ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGMgJiYgYSh0KSA/IGModSh0KSkgOiB0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDEyMiksXG4gICAgICBpID0gZSg0Nyk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIGZyb21FbnRyaWVzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9IHt9O1xuICAgICAgICByZXR1cm4gbyh0LCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgIGkobiwgdCwgZSk7XG4gICAgICAgIH0sIHZvaWQgMCwgITApLCBuO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYpLFxuICAgICAgaSA9IGUoOSksXG4gICAgICBhID0gZSg0KS5mLFxuICAgICAgdSA9IGUoNSksXG4gICAgICBjID0gbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGEoMSk7XG4gICAgICB9KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiAhdSB8fCBjLFxuICAgICAgc2hhbTogIXVcbiAgICB9LCB7XG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIHJldHVybiBhKGkodCksIG4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDUpLFxuICAgICAgaSA9IGUoMzMpLFxuICAgICAgYSA9IGUoOSksXG4gICAgICB1ID0gZSg0KSxcbiAgICAgIGMgPSBlKDQ3KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgc2hhbTogIW9cbiAgICB9LCB7XG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBmb3IgKHZhciBuLCBlLCByID0gYSh0KSwgbyA9IHUuZiwgZiA9IGkociksIHMgPSB7fSwgbCA9IDA7IGYubGVuZ3RoID4gbDspIHZvaWQgMCAhPT0gKGUgPSBvKHIsIG4gPSBmW2wrK10pKSAmJiBjKHMsIG4sIGUpO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg2KSxcbiAgICAgIGkgPSBlKDE1OCkuZjtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygxKTtcbiAgICAgIH0pXG4gICAgfSwge1xuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lczogaVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg5KSxcbiAgICAgIG8gPSBlKDM2KS5mLFxuICAgICAgaSA9IHt9LnRvU3RyaW5nLFxuICAgICAgYSA9IFwib2JqZWN0XCIgPT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG4gICAgdC5leHBvcnRzLmYgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGEgJiYgXCJbb2JqZWN0IFdpbmRvd11cIiA9PSBpLmNhbGwodCkgPyBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBvKHQpO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGEuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgfSh0KSA6IG8ocih0KSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg2KSxcbiAgICAgIGkgPSBlKDQ2KSxcbiAgICAgIGEgPSBlKDkzKSxcbiAgICAgIHUgPSBlKDk0KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYSgxKTtcbiAgICAgIH0pLFxuICAgICAgc2hhbTogIXVcbiAgICB9LCB7XG4gICAgICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGEoaSh0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgyKSh7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIGlzOiBlKDE2MSlcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHJldHVybiB0ID09PSBuID8gMCAhPT0gdCB8fCAxIC8gdCA9PSAxIC8gbiA6IHQgIT0gdCAmJiBuICE9IG47XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg2KSxcbiAgICAgIGkgPSBlKDE0KSxcbiAgICAgIGEgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk9iamVjdFwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6IG8oZnVuY3Rpb24gKCkge1xuICAgICAgICBhKDEpO1xuICAgICAgfSlcbiAgICB9LCB7XG4gICAgICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhIWkodCkgJiYgKCFhIHx8IGEodCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDYpLFxuICAgICAgaSA9IGUoMTQpLFxuICAgICAgYSA9IE9iamVjdC5pc0Zyb3plbjtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYSgxKTtcbiAgICAgIH0pXG4gICAgfSwge1xuICAgICAgaXNGcm96ZW46IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhaSh0KSB8fCAhIWEgJiYgYSh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg2KSxcbiAgICAgIGkgPSBlKDE0KSxcbiAgICAgIGEgPSBPYmplY3QuaXNTZWFsZWQ7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBzdGF0OiAhMCxcbiAgICAgIGZvcmNlZDogbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGEoMSk7XG4gICAgICB9KVxuICAgIH0sIHtcbiAgICAgIGlzU2VhbGVkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gIWkodCkgfHwgISFhICYmIGEodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoNDYpLFxuICAgICAgaSA9IGUoNjApO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk9iamVjdFwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6IGUoNikoZnVuY3Rpb24gKCkge1xuICAgICAgICBpKDEpO1xuICAgICAgfSlcbiAgICB9LCB7XG4gICAgICBrZXlzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gaShvKHQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg1KSxcbiAgICAgIGkgPSBlKDE0OSksXG4gICAgICBhID0gZSg0NiksXG4gICAgICB1ID0gZSgxMyksXG4gICAgICBjID0gZSg5MyksXG4gICAgICBmID0gZSg0KS5mO1xuICAgIG8gJiYgcih7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGlcbiAgICB9LCB7XG4gICAgICBfX2xvb2t1cEdldHRlcl9fOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlID0gYSh0aGlzKSxcbiAgICAgICAgICByID0gdSh0LCAhMCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAobiA9IGYoZSwgcikpIHJldHVybiBuLmdldDtcbiAgICAgICAgfSB3aGlsZSAoZSA9IGMoZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDUpLFxuICAgICAgaSA9IGUoMTQ5KSxcbiAgICAgIGEgPSBlKDQ2KSxcbiAgICAgIHUgPSBlKDEzKSxcbiAgICAgIGMgPSBlKDkzKSxcbiAgICAgIGYgPSBlKDQpLmY7XG4gICAgbyAmJiByKHtcbiAgICAgIHRhcmdldDogXCJPYmplY3RcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogaVxuICAgIH0sIHtcbiAgICAgIF9fbG9va3VwU2V0dGVyX186IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuLFxuICAgICAgICAgIGUgPSBhKHRoaXMpLFxuICAgICAgICAgIHIgPSB1KHQsICEwKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChuID0gZihlLCByKSkgcmV0dXJuIG4uc2V0O1xuICAgICAgICB9IHdoaWxlIChlID0gYyhlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTQpLFxuICAgICAgaSA9IGUoMTIwKS5vbkZyZWV6ZSxcbiAgICAgIGEgPSBlKDEyMSksXG4gICAgICB1ID0gZSg2KSxcbiAgICAgIGMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBzdGF0OiAhMCxcbiAgICAgIGZvcmNlZDogdShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGMoMSk7XG4gICAgICB9KSxcbiAgICAgIHNoYW06ICFhXG4gICAgfSwge1xuICAgICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBjICYmIG8odCkgPyBjKGkodCkpIDogdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgxNCksXG4gICAgICBpID0gZSgxMjApLm9uRnJlZXplLFxuICAgICAgYSA9IGUoMTIxKSxcbiAgICAgIHUgPSBlKDYpLFxuICAgICAgYyA9IE9iamVjdC5zZWFsO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIk9iamVjdFwiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6IHUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjKDEpO1xuICAgICAgfSksXG4gICAgICBzaGFtOiAhYVxuICAgIH0sIHtcbiAgICAgIHNlYWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBjICYmIG8odCkgPyBjKGkodCkpIDogdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoODUpLFxuICAgICAgbyA9IGUoMjEpLFxuICAgICAgaSA9IGUoMTcxKTtcbiAgICByIHx8IG8oT2JqZWN0LnByb3RvdHlwZSwgXCJ0b1N0cmluZ1wiLCBpLCB7XG4gICAgICB1bnNhZmU6ICEwXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDg1KSxcbiAgICAgIG8gPSBlKDg0KTtcbiAgICB0LmV4cG9ydHMgPSByID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCJbb2JqZWN0IFwiICsgbyh0aGlzKSArIFwiXVwiO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTUyKS52YWx1ZXM7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiT2JqZWN0XCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIHZhbHVlczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICB1ID0gZSgyKSxcbiAgICAgIGMgPSBlKDI5KSxcbiAgICAgIGYgPSBlKDMpLFxuICAgICAgcyA9IGUoMzQpLFxuICAgICAgbCA9IGUoMTc0KSxcbiAgICAgIHAgPSBlKDIxKSxcbiAgICAgIGggPSBlKDEyNiksXG4gICAgICB2ID0gZSg5NSksXG4gICAgICBnID0gZSgxMDkpLFxuICAgICAgZCA9IGUoMTQpLFxuICAgICAgeSA9IGUoNjUpLFxuICAgICAgeCA9IGUoMTIzKSxcbiAgICAgIG0gPSBlKDExKSxcbiAgICAgIGIgPSBlKDIzKSxcbiAgICAgIFMgPSBlKDEyMiksXG4gICAgICBFID0gZSg4NiksXG4gICAgICB3ID0gZSgxNzUpLFxuICAgICAgTyA9IGUoMTc2KS5zZXQsXG4gICAgICBSID0gZSgxNzgpLFxuICAgICAgQSA9IGUoMTc5KSxcbiAgICAgIGogPSBlKDE4MSksXG4gICAgICBJID0gZSgxODApLFxuICAgICAgayA9IGUoMTgyKSxcbiAgICAgIFAgPSBlKDI1KSxcbiAgICAgIEwgPSBlKDQ0KSxcbiAgICAgIFQgPSBlKDQ5KSxcbiAgICAgIF8gPSBlKDUzKSxcbiAgICAgIFUgPSBUKFwic3BlY2llc1wiKSxcbiAgICAgIE4gPSBcIlByb21pc2VcIixcbiAgICAgIEMgPSBQLmdldCxcbiAgICAgIEYgPSBQLnNldCxcbiAgICAgIE0gPSBQLmdldHRlckZvcihOKSxcbiAgICAgIHogPSBsLFxuICAgICAgRCA9IGYuVHlwZUVycm9yLFxuICAgICAgcSA9IGYuZG9jdW1lbnQsXG4gICAgICBCID0gZi5wcm9jZXNzLFxuICAgICAgVyA9IHMoXCJmZXRjaFwiKSxcbiAgICAgICQgPSBJLmYsXG4gICAgICBHID0gJCxcbiAgICAgIFYgPSBcInByb2Nlc3NcIiA9PSBtKEIpLFxuICAgICAgWCA9ICEhKHEgJiYgcS5jcmVhdGVFdmVudCAmJiBmLmRpc3BhdGNoRXZlbnQpLFxuICAgICAgWSA9IEwoTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIShiKHopICE9PSBTdHJpbmcoeikpKSB7XG4gICAgICAgICAgaWYgKDY2ID09PSBfKSByZXR1cm4gITA7XG4gICAgICAgICAgaWYgKCFWICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50KSByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgJiYgIXoucHJvdG90eXBlLmZpbmFsbHkpIHJldHVybiAhMDtcbiAgICAgICAgaWYgKF8gPj0gNTEgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KHopKSByZXR1cm4gITE7XG4gICAgICAgIHZhciB0ID0gei5yZXNvbHZlKDEpLFxuICAgICAgICAgIG4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdChmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiAodC5jb25zdHJ1Y3RvciA9IHt9KVtVXSA9IG4sICEodC50aGVuKGZ1bmN0aW9uICgpIHt9KSBpbnN0YW5jZW9mIG4pO1xuICAgICAgfSksXG4gICAgICBLID0gWSB8fCAhRShmdW5jdGlvbiAodCkge1xuICAgICAgICB6LmFsbCh0KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9KSxcbiAgICAgIEogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbjtcbiAgICAgICAgcmV0dXJuICEoIWQodCkgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiAobiA9IHQudGhlbikpICYmIG47XG4gICAgICB9LFxuICAgICAgSCA9IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICAgIGlmICghbi5ub3RpZmllZCkge1xuICAgICAgICAgIG4ubm90aWZpZWQgPSAhMDtcbiAgICAgICAgICB2YXIgciA9IG4ucmVhY3Rpb25zO1xuICAgICAgICAgIFIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbyA9IG4udmFsdWUsIGkgPSAxID09IG4uc3RhdGUsIGEgPSAwOyByLmxlbmd0aCA+IGE7KSB7XG4gICAgICAgICAgICAgIHZhciB1LFxuICAgICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgICAgZixcbiAgICAgICAgICAgICAgICBzID0gclthKytdLFxuICAgICAgICAgICAgICAgIGwgPSBpID8gcy5vayA6IHMuZmFpbCxcbiAgICAgICAgICAgICAgICBwID0gcy5yZXNvbHZlLFxuICAgICAgICAgICAgICAgIGggPSBzLnJlamVjdCxcbiAgICAgICAgICAgICAgICB2ID0gcy5kb21haW47XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbCA/IChpIHx8ICgyID09PSBuLnJlamVjdGlvbiAmJiBudCh0LCBuKSwgbi5yZWplY3Rpb24gPSAxKSwgITAgPT09IGwgPyB1ID0gbyA6ICh2ICYmIHYuZW50ZXIoKSwgdSA9IGwobyksIHYgJiYgKHYuZXhpdCgpLCBmID0gITApKSwgdSA9PT0gcy5wcm9taXNlID8gaChEKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSkgOiAoYyA9IEoodSkpID8gYy5jYWxsKHUsIHAsIGgpIDogcCh1KSkgOiBoKG8pO1xuICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgdiAmJiAhZiAmJiB2LmV4aXQoKSwgaCh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5yZWFjdGlvbnMgPSBbXSwgbi5ub3RpZmllZCA9ICExLCBlICYmICFuLnJlamVjdGlvbiAmJiBaKHQsIG4pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgUSA9IGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgICAgIHZhciByLCBvO1xuICAgICAgICBYID8gKChyID0gcS5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5wcm9taXNlID0gbiwgci5yZWFzb24gPSBlLCByLmluaXRFdmVudCh0LCAhMSwgITApLCBmLmRpc3BhdGNoRXZlbnQocikpIDogciA9IHtcbiAgICAgICAgICBwcm9taXNlOiBuLFxuICAgICAgICAgIHJlYXNvbjogZVxuICAgICAgICB9LCAobyA9IGZbXCJvblwiICsgdF0pID8gbyhyKSA6IFwidW5oYW5kbGVkcmVqZWN0aW9uXCIgPT09IHQgJiYgaihcIlVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblwiLCBlKTtcbiAgICAgIH0sXG4gICAgICBaID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgTy5jYWxsKGYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSxcbiAgICAgICAgICAgIHIgPSBuLnZhbHVlO1xuICAgICAgICAgIGlmICh0dChuKSAmJiAoZSA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgViA/IEIuZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLCByLCB0KSA6IFEoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgdCwgcik7XG4gICAgICAgICAgfSksIG4ucmVqZWN0aW9uID0gViB8fCB0dChuKSA/IDIgOiAxLCBlLmVycm9yKSkgdGhyb3cgZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdHQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gMSAhPT0gdC5yZWplY3Rpb24gJiYgIXQucGFyZW50O1xuICAgICAgfSxcbiAgICAgIG50ID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgTy5jYWxsKGYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBWID8gQi5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLCB0KSA6IFEoXCJyZWplY3Rpb25oYW5kbGVkXCIsIHQsIG4udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBldCA9IGZ1bmN0aW9uICh0LCBuLCBlLCByKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICAgIHQobiwgZSwgbywgcik7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcnQgPSBmdW5jdGlvbiAodCwgbiwgZSwgcikge1xuICAgICAgICBuLmRvbmUgfHwgKG4uZG9uZSA9ICEwLCByICYmIChuID0gciksIG4udmFsdWUgPSBlLCBuLnN0YXRlID0gMiwgSCh0LCBuLCAhMCkpO1xuICAgICAgfSxcbiAgICAgIG90ID0gZnVuY3Rpb24gKHQsIG4sIGUsIHIpIHtcbiAgICAgICAgaWYgKCFuLmRvbmUpIHtcbiAgICAgICAgICBuLmRvbmUgPSAhMCwgciAmJiAobiA9IHIpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodCA9PT0gZSkgdGhyb3cgRChcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgICAgICAgICAgdmFyIG8gPSBKKGUpO1xuICAgICAgICAgICAgbyA/IFIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgICAgICBkb25lOiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG8uY2FsbChlLCBldChvdCwgdCwgciwgbiksIGV0KHJ0LCB0LCByLCBuKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBydCh0LCByLCBlLCBuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgOiAobi52YWx1ZSA9IGUsIG4uc3RhdGUgPSAxLCBIKHQsIG4sICExKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcnQodCwge1xuICAgICAgICAgICAgICBkb25lOiAhMVxuICAgICAgICAgICAgfSwgZSwgbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIFkgJiYgKHogPSBmdW5jdGlvbiAodCkge1xuICAgICAgeCh0aGlzLCB6LCBOKSwgeSh0KSwgci5jYWxsKHRoaXMpO1xuICAgICAgdmFyIG4gPSBDKHRoaXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdChldChvdCwgdGhpcywgbiksIGV0KHJ0LCB0aGlzLCBuKSk7XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIHJ0KHRoaXMsIG4sIHQpO1xuICAgICAgfVxuICAgIH0sIChyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIEYodGhpcywge1xuICAgICAgICB0eXBlOiBOLFxuICAgICAgICBkb25lOiAhMSxcbiAgICAgICAgbm90aWZpZWQ6ICExLFxuICAgICAgICBwYXJlbnQ6ICExLFxuICAgICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgICByZWplY3Rpb246ICExLFxuICAgICAgICBzdGF0ZTogMCxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgfSk7XG4gICAgfSkucHJvdG90eXBlID0gaCh6LnByb3RvdHlwZSwge1xuICAgICAgdGhlbjogZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgdmFyIGUgPSBNKHRoaXMpLFxuICAgICAgICAgIHIgPSAkKHcodGhpcywgeikpO1xuICAgICAgICByZXR1cm4gci5vayA9IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCB8fCB0LCByLmZhaWwgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4gJiYgbiwgci5kb21haW4gPSBWID8gQi5kb21haW4gOiB2b2lkIDAsIGUucGFyZW50ID0gITAsIGUucmVhY3Rpb25zLnB1c2gociksIDAgIT0gZS5zdGF0ZSAmJiBIKHRoaXMsIGUsICExKSwgci5wcm9taXNlO1xuICAgICAgfSxcbiAgICAgIGNhdGNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgdCk7XG4gICAgICB9XG4gICAgfSksIG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IG5ldyByKCksXG4gICAgICAgIG4gPSBDKHQpO1xuICAgICAgdGhpcy5wcm9taXNlID0gdCwgdGhpcy5yZXNvbHZlID0gZXQob3QsIHQsIG4pLCB0aGlzLnJlamVjdCA9IGV0KHJ0LCB0LCBuKTtcbiAgICB9LCBJLmYgPSAkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID09PSB6IHx8IHQgPT09IGkgPyBuZXcgbyh0KSA6IEcodCk7XG4gICAgfSwgYyB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGwgfHwgKGEgPSBsLnByb3RvdHlwZS50aGVuLCBwKGwucHJvdG90eXBlLCBcInRoZW5cIiwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgeihmdW5jdGlvbiAodCwgbikge1xuICAgICAgICBhLmNhbGwoZSwgdCwgbik7XG4gICAgICB9KS50aGVuKHQsIG4pO1xuICAgIH0sIHtcbiAgICAgIHVuc2FmZTogITBcbiAgICB9KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBXICYmIHUoe1xuICAgICAgZ2xvYmFsOiAhMCxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgZm9yY2VkOiAhMFxuICAgIH0sIHtcbiAgICAgIGZldGNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gQSh6LCBXLmFwcGx5KGYsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH0pKSksIHUoe1xuICAgICAgZ2xvYmFsOiAhMCxcbiAgICAgIHdyYXA6ICEwLFxuICAgICAgZm9yY2VkOiBZXG4gICAgfSwge1xuICAgICAgUHJvbWlzZTogelxuICAgIH0pLCB2KHosIE4sICExLCAhMCksIGcoTiksIGkgPSBzKE4pLCB1KHtcbiAgICAgIHRhcmdldDogTixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBZXG4gICAgfSwge1xuICAgICAgcmVqZWN0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9ICQodGhpcyk7XG4gICAgICAgIHJldHVybiBuLnJlamVjdC5jYWxsKHZvaWQgMCwgdCksIG4ucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9KSwgdSh7XG4gICAgICB0YXJnZXQ6IE4sXG4gICAgICBzdGF0OiAhMCxcbiAgICAgIGZvcmNlZDogYyB8fCBZXG4gICAgfSwge1xuICAgICAgcmVzb2x2ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIEEoYyAmJiB0aGlzID09PSBpID8geiA6IHRoaXMsIHQpO1xuICAgICAgfVxuICAgIH0pLCB1KHtcbiAgICAgIHRhcmdldDogTixcbiAgICAgIHN0YXQ6ICEwLFxuICAgICAgZm9yY2VkOiBLXG4gICAgfSwge1xuICAgICAgYWxsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgICAgZSA9ICQobiksXG4gICAgICAgICAgciA9IGUucmVzb2x2ZSxcbiAgICAgICAgICBvID0gZS5yZWplY3QsXG4gICAgICAgICAgaSA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB5KG4ucmVzb2x2ZSksXG4gICAgICAgICAgICAgIGkgPSBbXSxcbiAgICAgICAgICAgICAgYSA9IDAsXG4gICAgICAgICAgICAgIHUgPSAxO1xuICAgICAgICAgICAgUyh0LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICB2YXIgYyA9IGErKyxcbiAgICAgICAgICAgICAgICBmID0gITE7XG4gICAgICAgICAgICAgIGkucHVzaCh2b2lkIDApLCB1KyssIGUuY2FsbChuLCB0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgZiB8fCAoZiA9ICEwLCBpW2NdID0gdCwgLS11IHx8IHIoaSkpO1xuICAgICAgICAgICAgICB9LCBvKTtcbiAgICAgICAgICAgIH0pLCAtLXUgfHwgcihpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGkuZXJyb3IgJiYgbyhpLnZhbHVlKSwgZS5wcm9taXNlO1xuICAgICAgfSxcbiAgICAgIHJhY2U6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgICBlID0gJChuKSxcbiAgICAgICAgICByID0gZS5yZWplY3QsXG4gICAgICAgICAgbyA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSB5KG4ucmVzb2x2ZSk7XG4gICAgICAgICAgICBTKHQsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIG8uY2FsbChuLCB0KS50aGVuKGUucmVzb2x2ZSwgcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG8uZXJyb3IgJiYgcihvLnZhbHVlKSwgZS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzKTtcbiAgICB0LmV4cG9ydHMgPSByLlByb21pc2U7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIwKSxcbiAgICAgIG8gPSBlKDY1KSxcbiAgICAgIGkgPSBlKDQ5KShcInNwZWNpZXNcIik7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlLFxuICAgICAgICBhID0gcih0KS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJldHVybiB2b2lkIDAgPT09IGEgfHwgbnVsbCA9PSAoZSA9IHIoYSlbaV0pID8gbiA6IG8oZSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgYSA9IGUoMyksXG4gICAgICB1ID0gZSg2KSxcbiAgICAgIGMgPSBlKDExKSxcbiAgICAgIGYgPSBlKDY0KSxcbiAgICAgIHMgPSBlKDYxKSxcbiAgICAgIGwgPSBlKDE3KSxcbiAgICAgIHAgPSBlKDE3NyksXG4gICAgICBoID0gYS5sb2NhdGlvbixcbiAgICAgIHYgPSBhLnNldEltbWVkaWF0ZSxcbiAgICAgIGcgPSBhLmNsZWFySW1tZWRpYXRlLFxuICAgICAgZCA9IGEucHJvY2VzcyxcbiAgICAgIHkgPSBhLk1lc3NhZ2VDaGFubmVsLFxuICAgICAgeCA9IGEuRGlzcGF0Y2gsXG4gICAgICBtID0gMCxcbiAgICAgIGIgPSB7fSxcbiAgICAgIFMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eSh0KSkge1xuICAgICAgICAgIHZhciBuID0gYlt0XTtcbiAgICAgICAgICBkZWxldGUgYlt0XSwgbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgRSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgUyh0KTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgUyh0LmRhdGEpO1xuICAgICAgfSxcbiAgICAgIE8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBhLnBvc3RNZXNzYWdlKHQgKyBcIlwiLCBoLnByb3RvY29sICsgXCIvL1wiICsgaC5ob3N0KTtcbiAgICAgIH07XG4gICAgdiAmJiBnIHx8ICh2ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGZvciAodmFyIG4gPSBbXSwgZSA9IDE7IGFyZ3VtZW50cy5sZW5ndGggPiBlOykgbi5wdXNoKGFyZ3VtZW50c1tlKytdKTtcbiAgICAgIHJldHVybiBiWysrbV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyB0IDogRnVuY3Rpb24odCkpLmFwcGx5KHZvaWQgMCwgbik7XG4gICAgICB9LCByKG0pLCBtO1xuICAgIH0sIGcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgZGVsZXRlIGJbdF07XG4gICAgfSwgXCJwcm9jZXNzXCIgPT0gYyhkKSA/IHIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgZC5uZXh0VGljayhFKHQpKTtcbiAgICB9IDogeCAmJiB4Lm5vdyA/IHIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgeC5ub3coRSh0KSk7XG4gICAgfSA6IHkgJiYgIXAgPyAoaSA9IChvID0gbmV3IHkoKSkucG9ydDIsIG8ucG9ydDEub25tZXNzYWdlID0gdywgciA9IGYoaS5wb3N0TWVzc2FnZSwgaSwgMSkpIDogIWEuYWRkRXZlbnRMaXN0ZW5lciB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHBvc3RNZXNzYWdlIHx8IGEuaW1wb3J0U2NyaXB0cyB8fCB1KE8pIHx8IFwiZmlsZTpcIiA9PT0gaC5wcm90b2NvbCA/IHIgPSBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGwoXCJzY3JpcHRcIikgPyBmdW5jdGlvbiAodCkge1xuICAgICAgcy5hcHBlbmRDaGlsZChsKFwic2NyaXB0XCIpKS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHMucmVtb3ZlQ2hpbGQodGhpcyksIFModCk7XG4gICAgICB9O1xuICAgIH0gOiBmdW5jdGlvbiAodCkge1xuICAgICAgc2V0VGltZW91dChFKHQpLCAwKTtcbiAgICB9IDogKHIgPSBPLCBhLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHcsICExKSkpLCB0LmV4cG9ydHMgPSB7XG4gICAgICBzZXQ6IHYsXG4gICAgICBjbGVhcjogZ1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDU0KTtcbiAgICB0LmV4cG9ydHMgPSAvKGlwaG9uZXxpcG9kfGlwYWQpLiphcHBsZXdlYmtpdC9pLnRlc3Qocik7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICB1LFxuICAgICAgYyxcbiAgICAgIGYsXG4gICAgICBzLFxuICAgICAgbCA9IGUoMyksXG4gICAgICBwID0gZSg0KS5mLFxuICAgICAgaCA9IGUoMTEpLFxuICAgICAgdiA9IGUoMTc2KS5zZXQsXG4gICAgICBnID0gZSgxNzcpLFxuICAgICAgZCA9IGwuTXV0YXRpb25PYnNlcnZlciB8fCBsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgICB5ID0gbC5wcm9jZXNzLFxuICAgICAgeCA9IGwuUHJvbWlzZSxcbiAgICAgIG0gPSBcInByb2Nlc3NcIiA9PSBoKHkpLFxuICAgICAgYiA9IHAobCwgXCJxdWV1ZU1pY3JvdGFza1wiKSxcbiAgICAgIFMgPSBiICYmIGIudmFsdWU7XG4gICAgUyB8fCAociA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0LCBuO1xuICAgICAgZm9yIChtICYmICh0ID0geS5kb21haW4pICYmIHQuZXhpdCgpOyBvOykge1xuICAgICAgICBuID0gby5mbiwgbyA9IG8ubmV4dDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuKCk7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICB0aHJvdyBvID8gYSgpIDogaSA9IHZvaWQgMCwgdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSA9IHZvaWQgMCwgdCAmJiB0LmVudGVyKCk7XG4gICAgfSwgbSA/IGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB5Lm5leHRUaWNrKHIpO1xuICAgIH0gOiBkICYmICFnID8gKHUgPSAhMCwgYyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLCBuZXcgZChyKS5vYnNlcnZlKGMsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6ICEwXG4gICAgfSksIGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjLmRhdGEgPSB1ID0gIXU7XG4gICAgfSkgOiB4ICYmIHgucmVzb2x2ZSA/IChmID0geC5yZXNvbHZlKHZvaWQgMCksIHMgPSBmLnRoZW4sIGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzLmNhbGwoZiwgcik7XG4gICAgfSkgOiBhID0gZnVuY3Rpb24gKCkge1xuICAgICAgdi5jYWxsKGwsIHIpO1xuICAgIH0pLCB0LmV4cG9ydHMgPSBTIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbiA9IHtcbiAgICAgICAgZm46IHQsXG4gICAgICAgIG5leHQ6IHZvaWQgMFxuICAgICAgfTtcbiAgICAgIGkgJiYgKGkubmV4dCA9IG4pLCBvIHx8IChvID0gbiwgYSgpKSwgaSA9IG47XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMjApLFxuICAgICAgbyA9IGUoMTQpLFxuICAgICAgaSA9IGUoMTgwKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgaWYgKHIodCksIG8obikgJiYgbi5jb25zdHJ1Y3RvciA9PT0gdCkgcmV0dXJuIG47XG4gICAgICB2YXIgZSA9IGkuZih0KTtcbiAgICAgIHJldHVybiAoMCwgZS5yZXNvbHZlKShuKSwgZS5wcm9taXNlO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDY1KSxcbiAgICAgIG8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiwgZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IHQoZnVuY3Rpb24gKHQsIHIpIHtcbiAgICAgICAgICBpZiAodm9pZCAwICE9PSBuIHx8IHZvaWQgMCAhPT0gZSkgdGhyb3cgVHlwZUVycm9yKFwiQmFkIFByb21pc2UgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgbiA9IHQsIGUgPSByO1xuICAgICAgICB9KSwgdGhpcy5yZXNvbHZlID0gcihuKSwgdGhpcy5yZWplY3QgPSByKGUpO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMuZiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbmV3IG8odCk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMyk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlID0gci5jb25zb2xlO1xuICAgICAgZSAmJiBlLmVycm9yICYmICgxID09PSBhcmd1bWVudHMubGVuZ3RoID8gZS5lcnJvcih0KSA6IGUuZXJyb3IodCwgbikpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6ICExLFxuICAgICAgICAgIHZhbHVlOiB0KClcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogITAsXG4gICAgICAgICAgdmFsdWU6IHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDY1KSxcbiAgICAgIGkgPSBlKDE4MCksXG4gICAgICBhID0gZSgxODIpLFxuICAgICAgdSA9IGUoMTIyKTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJQcm9taXNlXCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIGFsbFNldHRsZWQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgICBlID0gaS5mKG4pLFxuICAgICAgICAgIHIgPSBlLnJlc29sdmUsXG4gICAgICAgICAgYyA9IGUucmVqZWN0LFxuICAgICAgICAgIGYgPSBhKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlID0gbyhuLnJlc29sdmUpLFxuICAgICAgICAgICAgICBpID0gW10sXG4gICAgICAgICAgICAgIGEgPSAwLFxuICAgICAgICAgICAgICBjID0gMTtcbiAgICAgICAgICAgIHUodCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSBhKyssXG4gICAgICAgICAgICAgICAgdSA9ICExO1xuICAgICAgICAgICAgICBpLnB1c2godm9pZCAwKSwgYysrLCBlLmNhbGwobiwgdCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHUgfHwgKHUgPSAhMCwgaVtvXSA9IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJmdWxmaWxsZWRcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0XG4gICAgICAgICAgICAgICAgfSwgLS1jIHx8IHIoaSkpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHUgfHwgKHUgPSAhMCwgaVtvXSA9IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJyZWplY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgcmVhc29uOiB0XG4gICAgICAgICAgICAgICAgfSwgLS1jIHx8IHIoaSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLCAtLWMgfHwgcihpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGYuZXJyb3IgJiYgYyhmLnZhbHVlKSwgZS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDI5KSxcbiAgICAgIGkgPSBlKDE3NCksXG4gICAgICBhID0gZSg2KSxcbiAgICAgIHUgPSBlKDM0KSxcbiAgICAgIGMgPSBlKDE3NSksXG4gICAgICBmID0gZSgxNzkpLFxuICAgICAgcyA9IGUoMjEpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlByb21pc2VcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIHJlYWw6ICEwLFxuICAgICAgZm9yY2VkOiAhIWkgJiYgYShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkucHJvdG90eXBlLmZpbmFsbHkuY2FsbCh7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKCkge31cbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgfSlcbiAgICB9LCB7XG4gICAgICBmaW5hbGx5OiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9IGModGhpcywgdShcIlByb21pc2VcIikpLFxuICAgICAgICAgIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQ7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4oZSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGYobiwgdCgpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IDogdCwgZSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGYobiwgdCgpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiB0KTtcbiAgICAgIH1cbiAgICB9KSwgbyB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGkgfHwgaS5wcm90b3R5cGUuZmluYWxseSB8fCBzKGkucHJvdG90eXBlLCBcImZpbmFsbHlcIiwgdShcIlByb21pc2VcIikucHJvdG90eXBlLmZpbmFsbHkpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg1KSxcbiAgICAgIG8gPSBlKDMpLFxuICAgICAgaSA9IGUoNDQpLFxuICAgICAgYSA9IGUoMTI0KSxcbiAgICAgIHUgPSBlKDE5KS5mLFxuICAgICAgYyA9IGUoMzYpLmYsXG4gICAgICBmID0gZSgxODYpLFxuICAgICAgcyA9IGUoMTg3KSxcbiAgICAgIGwgPSBlKDE4OCksXG4gICAgICBwID0gZSgyMSksXG4gICAgICBoID0gZSg2KSxcbiAgICAgIHYgPSBlKDI1KS5zZXQsXG4gICAgICBnID0gZSgxMDkpLFxuICAgICAgZCA9IGUoNDkpKFwibWF0Y2hcIiksXG4gICAgICB5ID0gby5SZWdFeHAsXG4gICAgICB4ID0geS5wcm90b3R5cGUsXG4gICAgICBtID0gL2EvZyxcbiAgICAgIGIgPSAvYS9nLFxuICAgICAgUyA9IG5ldyB5KG0pICE9PSBtLFxuICAgICAgRSA9IGwuVU5TVVBQT1JURURfWTtcbiAgICBpZiAociAmJiBpKFwiUmVnRXhwXCIsICFTIHx8IEUgfHwgaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYltkXSA9ICExLCB5KG0pICE9IG0gfHwgeShiKSA9PSBiIHx8IFwiL2EvaVwiICE9IHkobSwgXCJpXCIpO1xuICAgIH0pKSkge1xuICAgICAgZm9yICh2YXIgdyA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgdmFyIGUsXG4gICAgICAgICAgICByID0gdGhpcyBpbnN0YW5jZW9mIHcsXG4gICAgICAgICAgICBvID0gZih0KSxcbiAgICAgICAgICAgIGkgPSB2b2lkIDAgPT09IG47XG4gICAgICAgICAgaWYgKCFyICYmIG8gJiYgdC5jb25zdHJ1Y3RvciA9PT0gdyAmJiBpKSByZXR1cm4gdDtcbiAgICAgICAgICBTID8gbyAmJiAhaSAmJiAodCA9IHQuc291cmNlKSA6IHQgaW5zdGFuY2VvZiB3ICYmIChpICYmIChuID0gcy5jYWxsKHQpKSwgdCA9IHQuc291cmNlKSwgRSAmJiAoZSA9ICEhbiAmJiBuLmluZGV4T2YoXCJ5XCIpID4gLTEpICYmIChuID0gbi5yZXBsYWNlKC95L2csIFwiXCIpKTtcbiAgICAgICAgICB2YXIgdSA9IGEoUyA/IG5ldyB5KHQsIG4pIDogeSh0LCBuKSwgciA/IHRoaXMgOiB4LCB3KTtcbiAgICAgICAgICByZXR1cm4gRSAmJiBlICYmIHYodSwge1xuICAgICAgICAgICAgc3RpY2t5OiBlXG4gICAgICAgICAgfSksIHU7XG4gICAgICAgIH0sIE8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHQgaW4gdyB8fCB1KHcsIHQsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHlbdF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICB5W3RdID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgUiA9IGMoeSksIEEgPSAwOyBSLmxlbmd0aCA+IEE7KSBPKFJbQSsrXSk7XG4gICAgICB4LmNvbnN0cnVjdG9yID0gdywgdy5wcm90b3R5cGUgPSB4LCBwKG8sIFwiUmVnRXhwXCIsIHcpO1xuICAgIH1cbiAgICBnKFwiUmVnRXhwXCIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxNCksXG4gICAgICBvID0gZSgxMSksXG4gICAgICBpID0gZSg0OSkoXCJtYXRjaFwiKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG47XG4gICAgICByZXR1cm4gcih0KSAmJiAodm9pZCAwICE9PSAobiA9IHRbaV0pID8gISFuIDogXCJSZWdFeHBcIiA9PSBvKHQpKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyMCk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSByKHRoaXMpLFxuICAgICAgICBuID0gXCJcIjtcbiAgICAgIHJldHVybiB0Lmdsb2JhbCAmJiAobiArPSBcImdcIiksIHQuaWdub3JlQ2FzZSAmJiAobiArPSBcImlcIiksIHQubXVsdGlsaW5lICYmIChuICs9IFwibVwiKSwgdC5kb3RBbGwgJiYgKG4gKz0gXCJzXCIpLCB0LnVuaWNvZGUgJiYgKG4gKz0gXCJ1XCIpLCB0LnN0aWNreSAmJiAobiArPSBcInlcIiksIG47XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNik7XG4gICAgZnVuY3Rpb24gbyh0LCBuKSB7XG4gICAgICByZXR1cm4gUmVnRXhwKHQsIG4pO1xuICAgIH1cbiAgICBuLlVOU1VQUE9SVEVEX1kgPSByKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0gbyhcImFcIiwgXCJ5XCIpO1xuICAgICAgcmV0dXJuIHQubGFzdEluZGV4ID0gMiwgbnVsbCAhPSB0LmV4ZWMoXCJhYmNkXCIpO1xuICAgIH0pLCBuLkJST0tFTl9DQVJFVCA9IHIoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBvKFwiXnJcIiwgXCJneVwiKTtcbiAgICAgIHJldHVybiB0Lmxhc3RJbmRleCA9IDIsIG51bGwgIT0gdC5leGVjKFwic3RyXCIpO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDE5MCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiUmVnRXhwXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IC8uLy5leGVjICE9PSBvXG4gICAgfSwge1xuICAgICAgZXhlYzogb1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGkgPSBlKDE4NyksXG4gICAgICBhID0gZSgxODgpLFxuICAgICAgdSA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYyxcbiAgICAgIGMgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UsXG4gICAgICBmID0gdSxcbiAgICAgIHMgPSAociA9IC9hLywgbyA9IC9iKi9nLCB1LmNhbGwociwgXCJhXCIpLCB1LmNhbGwobywgXCJhXCIpLCAwICE9PSByLmxhc3RJbmRleCB8fCAwICE9PSBvLmxhc3RJbmRleCksXG4gICAgICBsID0gYS5VTlNVUFBPUlRFRF9ZIHx8IGEuQlJPS0VOX0NBUkVULFxuICAgICAgcCA9IHZvaWQgMCAhPT0gLygpPz8vLmV4ZWMoXCJcIilbMV07XG4gICAgKHMgfHwgcCB8fCBsKSAmJiAoZiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbixcbiAgICAgICAgZSxcbiAgICAgICAgcixcbiAgICAgICAgbyxcbiAgICAgICAgYSA9IHRoaXMsXG4gICAgICAgIGYgPSBsICYmIGEuc3RpY2t5LFxuICAgICAgICBoID0gaS5jYWxsKGEpLFxuICAgICAgICB2ID0gYS5zb3VyY2UsXG4gICAgICAgIGcgPSAwLFxuICAgICAgICBkID0gdDtcbiAgICAgIHJldHVybiBmICYmICgtMSA9PT0gKGggPSBoLnJlcGxhY2UoXCJ5XCIsIFwiXCIpKS5pbmRleE9mKFwiZ1wiKSAmJiAoaCArPSBcImdcIiksIGQgPSBTdHJpbmcodCkuc2xpY2UoYS5sYXN0SW5kZXgpLCBhLmxhc3RJbmRleCA+IDAgJiYgKCFhLm11bHRpbGluZSB8fCBhLm11bHRpbGluZSAmJiBcIlxcblwiICE9PSB0W2EubGFzdEluZGV4IC0gMV0pICYmICh2ID0gXCIoPzogXCIgKyB2ICsgXCIpXCIsIGQgPSBcIiBcIiArIGQsIGcrKyksIGUgPSBuZXcgUmVnRXhwKFwiXig/OlwiICsgdiArIFwiKVwiLCBoKSksIHAgJiYgKGUgPSBuZXcgUmVnRXhwKFwiXlwiICsgdiArIFwiJCg/IVxcXFxzKVwiLCBoKSksIHMgJiYgKG4gPSBhLmxhc3RJbmRleCksIHIgPSB1LmNhbGwoZiA/IGUgOiBhLCBkKSwgZiA/IHIgPyAoci5pbnB1dCA9IHIuaW5wdXQuc2xpY2UoZyksIHJbMF0gPSByWzBdLnNsaWNlKGcpLCByLmluZGV4ID0gYS5sYXN0SW5kZXgsIGEubGFzdEluZGV4ICs9IHJbMF0ubGVuZ3RoKSA6IGEubGFzdEluZGV4ID0gMCA6IHMgJiYgciAmJiAoYS5sYXN0SW5kZXggPSBhLmdsb2JhbCA/IHIuaW5kZXggKyByWzBdLmxlbmd0aCA6IG4pLCBwICYmIHIgJiYgci5sZW5ndGggPiAxICYmIGMuY2FsbChyWzBdLCBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobyA9IDE7IG8gPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgbysrKSB2b2lkIDAgPT09IGFyZ3VtZW50c1tvXSAmJiAocltvXSA9IHZvaWQgMCk7XG4gICAgICB9KSwgcjtcbiAgICB9KSwgdC5leHBvcnRzID0gZjtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNSksXG4gICAgICBvID0gZSgxOSksXG4gICAgICBpID0gZSgxODcpLFxuICAgICAgYSA9IGUoMTg4KS5VTlNVUFBPUlRFRF9ZO1xuICAgIHIgJiYgKFwiZ1wiICE9IC8uL2cuZmxhZ3MgfHwgYSkgJiYgby5mKFJlZ0V4cC5wcm90b3R5cGUsIFwiZmxhZ3NcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIGdldDogaVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg1KSxcbiAgICAgIG8gPSBlKDE4OCkuVU5TVVBQT1JURURfWSxcbiAgICAgIGkgPSBlKDE5KS5mLFxuICAgICAgYSA9IGUoMjUpLmdldCxcbiAgICAgIHUgPSBSZWdFeHAucHJvdG90eXBlO1xuICAgIHIgJiYgbyAmJiBpKFJlZ0V4cC5wcm90b3R5cGUsIFwic3RpY2t5XCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgIT09IHUpIHtcbiAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICEhYSh0aGlzKS5zdGlja3k7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSW5jb21wYXRpYmxlIHJlY2VpdmVyLCBSZWdFeHAgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDE4OSk7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSA9IGUoMiksXG4gICAgICBhID0gZSgxNCksXG4gICAgICB1ID0gKHIgPSAhMSwgKG8gPSAvW2FjXS8pLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByID0gITAsIC8uLy5leGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCAhMCA9PT0gby50ZXN0KFwiYWJjXCIpICYmIHIpLFxuICAgICAgYyA9IC8uLy50ZXN0O1xuICAgIGkoe1xuICAgICAgdGFyZ2V0OiBcIlJlZ0V4cFwiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiAhdVxuICAgIH0sIHtcbiAgICAgIHRlc3Q6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHRoaXMuZXhlYykgcmV0dXJuIGMuY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmV4ZWModCk7XG4gICAgICAgIGlmIChudWxsICE9PSBuICYmICFhKG4pKSB0aHJvdyBuZXcgRXJyb3IoXCJSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGxcIik7XG4gICAgICAgIHJldHVybiAhIW47XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIxKSxcbiAgICAgIG8gPSBlKDIwKSxcbiAgICAgIGkgPSBlKDYpLFxuICAgICAgYSA9IGUoMTg3KSxcbiAgICAgIHUgPSBSZWdFeHAucHJvdG90eXBlLFxuICAgICAgYyA9IHUudG9TdHJpbmcsXG4gICAgICBmID0gaShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIi9hL2JcIiAhPSBjLmNhbGwoe1xuICAgICAgICAgIHNvdXJjZTogXCJhXCIsXG4gICAgICAgICAgZmxhZ3M6IFwiYlwiXG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBzID0gXCJ0b1N0cmluZ1wiICE9IGMubmFtZTtcbiAgICAoZiB8fCBzKSAmJiByKFJlZ0V4cC5wcm90b3R5cGUsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBvKHRoaXMpLFxuICAgICAgICBuID0gU3RyaW5nKHQuc291cmNlKSxcbiAgICAgICAgZSA9IHQuZmxhZ3M7XG4gICAgICByZXR1cm4gXCIvXCIgKyBuICsgXCIvXCIgKyBTdHJpbmcodm9pZCAwID09PSBlICYmIHQgaW5zdGFuY2VvZiBSZWdFeHAgJiYgIShcImZsYWdzXCIgaW4gdSkgPyBhLmNhbGwodCkgOiBlKTtcbiAgICB9LCB7XG4gICAgICB1bnNhZmU6ICEwXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDExOSksXG4gICAgICBvID0gZSgxMjUpO1xuICAgIHQuZXhwb3J0cyA9IHIoXCJTZXRcIiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB2b2lkIDApO1xuICAgICAgfTtcbiAgICB9LCBvKTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgxOTcpLmNvZGVBdDtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMFxuICAgIH0sIHtcbiAgICAgIGNvZGVQb2ludEF0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoNDApLFxuICAgICAgbyA9IGUoMTIpLFxuICAgICAgaSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobiwgZSkge1xuICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHUgPSBTdHJpbmcobyhuKSksXG4gICAgICAgICAgICBjID0gcihlKSxcbiAgICAgICAgICAgIGYgPSB1Lmxlbmd0aDtcbiAgICAgICAgICByZXR1cm4gYyA8IDAgfHwgYyA+PSBmID8gdCA/IFwiXCIgOiB2b2lkIDAgOiAoaSA9IHUuY2hhckNvZGVBdChjKSkgPCA1NTI5NiB8fCBpID4gNTYzMTkgfHwgYyArIDEgPT09IGYgfHwgKGEgPSB1LmNoYXJDb2RlQXQoYyArIDEpKSA8IDU2MzIwIHx8IGEgPiA1NzM0MyA/IHQgPyB1LmNoYXJBdChjKSA6IGkgOiB0ID8gdS5zbGljZShjLCBjICsgMikgOiBhIC0gNTYzMjAgKyAoaSAtIDU1Mjk2IDw8IDEwKSArIDY1NTM2O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSB7XG4gICAgICBjb2RlQXQ6IGkoITEpLFxuICAgICAgY2hhckF0OiBpKCEwKVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvID0gZSgyKSxcbiAgICAgIGkgPSBlKDQpLmYsXG4gICAgICBhID0gZSgzOSksXG4gICAgICB1ID0gZSgxOTkpLFxuICAgICAgYyA9IGUoMTIpLFxuICAgICAgZiA9IGUoMjAwKSxcbiAgICAgIHMgPSBlKDI5KSxcbiAgICAgIGwgPSBcIlwiLmVuZHNXaXRoLFxuICAgICAgcCA9IE1hdGgubWluLFxuICAgICAgaCA9IGYoXCJlbmRzV2l0aFwiKTtcbiAgICBvKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogISEocyB8fCBoIHx8IChyID0gaShTdHJpbmcucHJvdG90eXBlLCBcImVuZHNXaXRoXCIpLCAhciB8fCByLndyaXRhYmxlKSkgJiYgIWhcbiAgICB9LCB7XG4gICAgICBlbmRzV2l0aDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSBTdHJpbmcoYyh0aGlzKSk7XG4gICAgICAgIHUodCk7XG4gICAgICAgIHZhciBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDAsXG4gICAgICAgICAgciA9IGEobi5sZW5ndGgpLFxuICAgICAgICAgIG8gPSB2b2lkIDAgPT09IGUgPyByIDogcChhKGUpLCByKSxcbiAgICAgICAgICBpID0gU3RyaW5nKHQpO1xuICAgICAgICByZXR1cm4gbCA/IGwuY2FsbChuLCBpLCBvKSA6IG4uc2xpY2UobyAtIGkubGVuZ3RoLCBvKSA9PT0gaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTg2KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHIodCkpIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgICAgIHJldHVybiB0O1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDQ5KShcIm1hdGNoXCIpO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbiA9IC8uLztcbiAgICAgIHRyeSB7XG4gICAgICAgIFwiLy4vXCJbdF0obik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5bcl0gPSAhMSwgXCIvLi9cIlt0XShuKTtcbiAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgIH1cbiAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDQxKSxcbiAgICAgIGkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuICAgICAgYSA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgc3RhdDogITAsXG4gICAgICBmb3JjZWQ6ICEhYSAmJiAxICE9IGEubGVuZ3RoXG4gICAgfSwge1xuICAgICAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgbiwgZSA9IFtdLCByID0gYXJndW1lbnRzLmxlbmd0aCwgYSA9IDA7IHIgPiBhOykge1xuICAgICAgICAgIGlmIChuID0gK2FyZ3VtZW50c1thKytdLCBvKG4sIDExMTQxMTEpICE9PSBuKSB0aHJvdyBSYW5nZUVycm9yKG4gKyBcIiBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50XCIpO1xuICAgICAgICAgIGUucHVzaChuIDwgNjU1MzYgPyBpKG4pIDogaSg1NTI5NiArICgobiAtPSA2NTUzNikgPj4gMTApLCBuICUgMTAyNCArIDU2MzIwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUuam9pbihcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgxOTkpLFxuICAgICAgaSA9IGUoMTIpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiAhZSgyMDApKFwiaW5jbHVkZXNcIilcbiAgICB9LCB7XG4gICAgICBpbmNsdWRlczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICEhflN0cmluZyhpKHRoaXMpKS5pbmRleE9mKG8odCksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTk3KS5jaGFyQXQsXG4gICAgICBvID0gZSgyNSksXG4gICAgICBpID0gZSg5MCksXG4gICAgICBhID0gby5zZXQsXG4gICAgICB1ID0gby5nZXR0ZXJGb3IoXCJTdHJpbmcgSXRlcmF0b3JcIik7XG4gICAgaShTdHJpbmcsIFwiU3RyaW5nXCIsIGZ1bmN0aW9uICh0KSB7XG4gICAgICBhKHRoaXMsIHtcbiAgICAgICAgdHlwZTogXCJTdHJpbmcgSXRlcmF0b3JcIixcbiAgICAgICAgc3RyaW5nOiBTdHJpbmcodCksXG4gICAgICAgIGluZGV4OiAwXG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCxcbiAgICAgICAgbiA9IHUodGhpcyksXG4gICAgICAgIGUgPSBuLnN0cmluZyxcbiAgICAgICAgbyA9IG4uaW5kZXg7XG4gICAgICByZXR1cm4gbyA+PSBlLmxlbmd0aCA/IHtcbiAgICAgICAgdmFsdWU6IHZvaWQgMCxcbiAgICAgICAgZG9uZTogITBcbiAgICAgIH0gOiAodCA9IHIoZSwgbyksIG4uaW5kZXggKz0gdC5sZW5ndGgsIHtcbiAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgIGRvbmU6ICExXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMjA1KSxcbiAgICAgIG8gPSBlKDIwKSxcbiAgICAgIGkgPSBlKDM5KSxcbiAgICAgIGEgPSBlKDEyKSxcbiAgICAgIHUgPSBlKDIwNiksXG4gICAgICBjID0gZSgyMDcpO1xuICAgIHIoXCJtYXRjaFwiLCAxLCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgcmV0dXJuIFtmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgZSA9IGEodGhpcyksXG4gICAgICAgICAgciA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG5bdF07XG4gICAgICAgIHJldHVybiB2b2lkIDAgIT09IHIgPyByLmNhbGwobiwgZSkgOiBuZXcgUmVnRXhwKG4pW3RdKFN0cmluZyhlKSk7XG4gICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgciA9IGUobiwgdCwgdGhpcyk7XG4gICAgICAgIGlmIChyLmRvbmUpIHJldHVybiByLnZhbHVlO1xuICAgICAgICB2YXIgYSA9IG8odCksXG4gICAgICAgICAgZiA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgaWYgKCFhLmdsb2JhbCkgcmV0dXJuIGMoYSwgZik7XG4gICAgICAgIHZhciBzID0gYS51bmljb2RlO1xuICAgICAgICBhLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGwsIHAgPSBbXSwgaCA9IDA7IG51bGwgIT09IChsID0gYyhhLCBmKSk7KSB7XG4gICAgICAgICAgdmFyIHYgPSBTdHJpbmcobFswXSk7XG4gICAgICAgICAgcFtoXSA9IHYsIFwiXCIgPT09IHYgJiYgKGEubGFzdEluZGV4ID0gdShmLCBpKGEubGFzdEluZGV4KSwgcykpLCBoKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAgPT09IGggPyBudWxsIDogcDtcbiAgICAgIH1dO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIGUoMTg5KTtcbiAgICB2YXIgciA9IGUoMjEpLFxuICAgICAgbyA9IGUoNiksXG4gICAgICBpID0gZSg0OSksXG4gICAgICBhID0gZSgxOTApLFxuICAgICAgdSA9IGUoMTgpLFxuICAgICAgYyA9IGkoXCJzcGVjaWVzXCIpLFxuICAgICAgZiA9ICFvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAvLi87XG4gICAgICAgIHJldHVybiB0LmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgICByZXR1cm4gdC5ncm91cHMgPSB7XG4gICAgICAgICAgICBhOiBcIjdcIlxuICAgICAgICAgIH0sIHQ7XG4gICAgICAgIH0sIFwiN1wiICE9PSBcIlwiLnJlcGxhY2UodCwgXCIkPGE+XCIpO1xuICAgICAgfSksXG4gICAgICBzID0gXCIkMFwiID09PSBcImFcIi5yZXBsYWNlKC8uLywgXCIkMFwiKSxcbiAgICAgIGwgPSBpKFwicmVwbGFjZVwiKSxcbiAgICAgIHAgPSAhIS8uL1tsXSAmJiBcIlwiID09PSAvLi9bbF0oXCJhXCIsIFwiJDBcIiksXG4gICAgICBoID0gIW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IC8oPzopLyxcbiAgICAgICAgICBuID0gdC5leGVjO1xuICAgICAgICB0LmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGUgPSBcImFiXCIuc3BsaXQodCk7XG4gICAgICAgIHJldHVybiAyICE9PSBlLmxlbmd0aCB8fCBcImFcIiAhPT0gZVswXSB8fCBcImJcIiAhPT0gZVsxXTtcbiAgICAgIH0pO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuLCBlLCBsKSB7XG4gICAgICB2YXIgdiA9IGkodCksXG4gICAgICAgIGcgPSAhbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG4gPSB7fTtcbiAgICAgICAgICByZXR1cm4gblt2XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICAgIH0sIDcgIT0gXCJcIlt0XShuKTtcbiAgICAgICAgfSksXG4gICAgICAgIGQgPSBnICYmICFvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbiA9ICExLFxuICAgICAgICAgICAgZSA9IC9hLztcbiAgICAgICAgICByZXR1cm4gXCJzcGxpdFwiID09PSB0ICYmICgoZSA9IHt9KS5jb25zdHJ1Y3RvciA9IHt9LCBlLmNvbnN0cnVjdG9yW2NdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSwgZS5mbGFncyA9IFwiXCIsIGVbdl0gPSAvLi9bdl0pLCBlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbiA9ICEwLCBudWxsO1xuICAgICAgICAgIH0sIGVbdl0oXCJcIiksICFuO1xuICAgICAgICB9KTtcbiAgICAgIGlmICghZyB8fCAhZCB8fCBcInJlcGxhY2VcIiA9PT0gdCAmJiAoIWYgfHwgIXMgfHwgcCkgfHwgXCJzcGxpdFwiID09PSB0ICYmICFoKSB7XG4gICAgICAgIHZhciB5ID0gLy4vW3ZdLFxuICAgICAgICAgIHggPSBlKHYsIFwiXCJbdF0sIGZ1bmN0aW9uICh0LCBuLCBlLCByLCBvKSB7XG4gICAgICAgICAgICByZXR1cm4gbi5leGVjID09PSBhID8gZyAmJiAhbyA/IHtcbiAgICAgICAgICAgICAgZG9uZTogITAsXG4gICAgICAgICAgICAgIHZhbHVlOiB5LmNhbGwobiwgZSwgcilcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgIGRvbmU6ICEwLFxuICAgICAgICAgICAgICB2YWx1ZTogdC5jYWxsKGUsIG4sIHIpXG4gICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICBkb25lOiAhMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBSRVBMQUNFX0tFRVBTXyQwOiBzLFxuICAgICAgICAgICAgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU6IHBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtID0geFswXSxcbiAgICAgICAgICBiID0geFsxXTtcbiAgICAgICAgcihTdHJpbmcucHJvdG90eXBlLCB0LCBtKSwgcihSZWdFeHAucHJvdG90eXBlLCB2LCAyID09IG4gPyBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgIHJldHVybiBiLmNhbGwodCwgdGhpcywgbik7XG4gICAgICAgIH0gOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBiLmNhbGwodCwgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbCAmJiB1KFJlZ0V4cC5wcm90b3R5cGVbdl0sIFwic2hhbVwiLCAhMCk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTk3KS5jaGFyQXQ7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIHJldHVybiBuICsgKGUgPyByKHQsIG4pLmxlbmd0aCA6IDEpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDExKSxcbiAgICAgIG8gPSBlKDE5MCk7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHZhciBlID0gdC5leGVjO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICB2YXIgaSA9IGUuY2FsbCh0LCBuKTtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHRocm93IFR5cGVFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICBpZiAoXCJSZWdFeHBcIiAhPT0gcih0KSkgdGhyb3cgVHlwZUVycm9yKFwiUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlclwiKTtcbiAgICAgIHJldHVybiBvLmNhbGwodCwgbik7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSg5MSksXG4gICAgICBpID0gZSgxMiksXG4gICAgICBhID0gZSgzOSksXG4gICAgICB1ID0gZSg2NSksXG4gICAgICBjID0gZSgyMCksXG4gICAgICBmID0gZSgxMSksXG4gICAgICBzID0gZSgxODYpLFxuICAgICAgbCA9IGUoMTg3KSxcbiAgICAgIHAgPSBlKDE4KSxcbiAgICAgIGggPSBlKDYpLFxuICAgICAgdiA9IGUoNDkpLFxuICAgICAgZyA9IGUoMTc1KSxcbiAgICAgIGQgPSBlKDIwNiksXG4gICAgICB5ID0gZSgyNSksXG4gICAgICB4ID0gZSgyOSksXG4gICAgICBtID0gdihcIm1hdGNoQWxsXCIpLFxuICAgICAgYiA9IHkuc2V0LFxuICAgICAgUyA9IHkuZ2V0dGVyRm9yKFwiUmVnRXhwIFN0cmluZyBJdGVyYXRvclwiKSxcbiAgICAgIEUgPSBSZWdFeHAucHJvdG90eXBlLFxuICAgICAgdyA9IEUuZXhlYyxcbiAgICAgIE8gPSBcIlwiLm1hdGNoQWxsLFxuICAgICAgUiA9ICEhTyAmJiAhaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFwiYVwiLm1hdGNoQWxsKC8uLyk7XG4gICAgICB9KSxcbiAgICAgIEEgPSBvKGZ1bmN0aW9uICh0LCBuLCBlLCByKSB7XG4gICAgICAgIGIodGhpcywge1xuICAgICAgICAgIHR5cGU6IFwiUmVnRXhwIFN0cmluZyBJdGVyYXRvclwiLFxuICAgICAgICAgIHJlZ2V4cDogdCxcbiAgICAgICAgICBzdHJpbmc6IG4sXG4gICAgICAgICAgZ2xvYmFsOiBlLFxuICAgICAgICAgIHVuaWNvZGU6IHIsXG4gICAgICAgICAgZG9uZTogITFcbiAgICAgICAgfSk7XG4gICAgICB9LCBcIlJlZ0V4cCBTdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IFModGhpcyk7XG4gICAgICAgIGlmICh0LmRvbmUpIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZvaWQgMCxcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgbiA9IHQucmVnZXhwLFxuICAgICAgICAgIGUgPSB0LnN0cmluZyxcbiAgICAgICAgICByID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBlLFxuICAgICAgICAgICAgICByID0gdC5leGVjO1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygcikge1xuICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgKGUgPSByLmNhbGwodCwgbikpKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgZXhlYyByZXN1bHRcIik7XG4gICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHcuY2FsbCh0LCBuKTtcbiAgICAgICAgICB9KG4sIGUpO1xuICAgICAgICByZXR1cm4gbnVsbCA9PT0gciA/IHtcbiAgICAgICAgICB2YWx1ZTogdm9pZCAwLFxuICAgICAgICAgIGRvbmU6IHQuZG9uZSA9ICEwXG4gICAgICAgIH0gOiB0Lmdsb2JhbCA/IChcIlwiID09IFN0cmluZyhyWzBdKSAmJiAobi5sYXN0SW5kZXggPSBkKGUsIGEobi5sYXN0SW5kZXgpLCB0LnVuaWNvZGUpKSwge1xuICAgICAgICAgIHZhbHVlOiByLFxuICAgICAgICAgIGRvbmU6ICExXG4gICAgICAgIH0pIDogKHQuZG9uZSA9ICEwLCB7XG4gICAgICAgICAgdmFsdWU6IHIsXG4gICAgICAgICAgZG9uZTogITFcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHUsXG4gICAgICAgICAgZiA9IGModGhpcyksXG4gICAgICAgICAgcyA9IFN0cmluZyh0KTtcbiAgICAgICAgcmV0dXJuIG4gPSBnKGYsIFJlZ0V4cCksIHZvaWQgMCA9PT0gKGUgPSBmLmZsYWdzKSAmJiBmIGluc3RhbmNlb2YgUmVnRXhwICYmICEoXCJmbGFnc1wiIGluIEUpICYmIChlID0gbC5jYWxsKGYpKSwgciA9IHZvaWQgMCA9PT0gZSA/IFwiXCIgOiBTdHJpbmcoZSksIG8gPSBuZXcgbihuID09PSBSZWdFeHAgPyBmLnNvdXJjZSA6IGYsIHIpLCBpID0gISF+ci5pbmRleE9mKFwiZ1wiKSwgdSA9ICEhfnIuaW5kZXhPZihcInVcIiksIG8ubGFzdEluZGV4ID0gYShmLmxhc3RJbmRleCksIG5ldyBBKG8sIHMsIGksIHUpO1xuICAgICAgfTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogUlxuICAgIH0sIHtcbiAgICAgIG1hdGNoQWxsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgbyA9IGkodGhpcyk7XG4gICAgICAgIGlmIChudWxsICE9IHQpIHtcbiAgICAgICAgICBpZiAocyh0KSAmJiAhflN0cmluZyhpKFwiZmxhZ3NcIiBpbiBFID8gdC5mbGFncyA6IGwuY2FsbCh0KSkpLmluZGV4T2YoXCJnXCIpKSB0aHJvdyBUeXBlRXJyb3IoXCJgLm1hdGNoQWxsYCBkb2VzIG5vdCBhbGxvdyBub24tZ2xvYmFsIHJlZ2V4ZXNcIik7XG4gICAgICAgICAgaWYgKFIpIHJldHVybiBPLmFwcGx5KG8sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKHZvaWQgMCA9PT0gKGUgPSB0W21dKSAmJiB4ICYmIFwiUmVnRXhwXCIgPT0gZih0KSAmJiAoZSA9IGopLCBudWxsICE9IGUpIHJldHVybiB1KGUpLmNhbGwodCwgbyk7XG4gICAgICAgIH0gZWxzZSBpZiAoUikgcmV0dXJuIE8uYXBwbHkobywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIG4gPSBTdHJpbmcobyksIHIgPSBuZXcgUmVnRXhwKHQsIFwiZ1wiKSwgeCA/IGouY2FsbChyLCBuKSA6IHJbbV0obik7XG4gICAgICB9XG4gICAgfSksIHggfHwgbSBpbiBFIHx8IHAoRSwgbSwgaik7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMjEwKS5lbmQ7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjExKVxuICAgIH0sIHtcbiAgICAgIHBhZEVuZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgdCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgzOSksXG4gICAgICBvID0gZSgxNDUpLFxuICAgICAgaSA9IGUoMTIpLFxuICAgICAgYSA9IE1hdGguY2VpbCxcbiAgICAgIHUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG4sIGUsIHUpIHtcbiAgICAgICAgICB2YXIgYyxcbiAgICAgICAgICAgIGYsXG4gICAgICAgICAgICBzID0gU3RyaW5nKGkobikpLFxuICAgICAgICAgICAgbCA9IHMubGVuZ3RoLFxuICAgICAgICAgICAgcCA9IHZvaWQgMCA9PT0gdSA/IFwiIFwiIDogU3RyaW5nKHUpLFxuICAgICAgICAgICAgaCA9IHIoZSk7XG4gICAgICAgICAgcmV0dXJuIGggPD0gbCB8fCBcIlwiID09IHAgPyBzIDogKGMgPSBoIC0gbCwgKGYgPSBvLmNhbGwocCwgYShjIC8gcC5sZW5ndGgpKSkubGVuZ3RoID4gYyAmJiAoZiA9IGYuc2xpY2UoMCwgYykpLCB0ID8gcyArIGYgOiBmICsgcyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIHQuZXhwb3J0cyA9IHtcbiAgICAgIHN0YXJ0OiB1KCExKSxcbiAgICAgIGVuZDogdSghMClcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg1NCk7XG4gICAgdC5leHBvcnRzID0gL1ZlcnNpb25cXC8xMFxcLlxcZCsoXFwuXFxkKyk/KCBNb2JpbGVcXC9cXHcrKT8gU2FmYXJpXFwvLy50ZXN0KHIpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDIxMCkuc3RhcnQ7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjExKVxuICAgIH0sIHtcbiAgICAgIHBhZFN0YXJ0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoOSksXG4gICAgICBpID0gZSgzOSk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBzdGF0OiAhMFxuICAgIH0sIHtcbiAgICAgIHJhdzogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgbiA9IG8odC5yYXcpLCBlID0gaShuLmxlbmd0aCksIHIgPSBhcmd1bWVudHMubGVuZ3RoLCBhID0gW10sIHUgPSAwOyBlID4gdTspIGEucHVzaChTdHJpbmcoblt1KytdKSksIHUgPCByICYmIGEucHVzaChTdHJpbmcoYXJndW1lbnRzW3VdKSk7XG4gICAgICAgIHJldHVybiBhLmpvaW4oXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgyKSh7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITBcbiAgICB9LCB7XG4gICAgICByZXBlYXQ6IGUoMTQ1KVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyMDUpLFxuICAgICAgbyA9IGUoMjApLFxuICAgICAgaSA9IGUoNDYpLFxuICAgICAgYSA9IGUoMzkpLFxuICAgICAgdSA9IGUoNDApLFxuICAgICAgYyA9IGUoMTIpLFxuICAgICAgZiA9IGUoMjA2KSxcbiAgICAgIHMgPSBlKDIwNyksXG4gICAgICBsID0gTWF0aC5tYXgsXG4gICAgICBwID0gTWF0aC5taW4sXG4gICAgICBoID0gTWF0aC5mbG9vcixcbiAgICAgIHYgPSAvXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2csXG4gICAgICBnID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcbiAgICByKFwicmVwbGFjZVwiLCAyLCBmdW5jdGlvbiAodCwgbiwgZSwgcikge1xuICAgICAgdmFyIGQgPSByLlJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFLFxuICAgICAgICB5ID0gci5SRVBMQUNFX0tFRVBTXyQwLFxuICAgICAgICB4ID0gZCA/IFwiJFwiIDogXCIkMFwiO1xuICAgICAgcmV0dXJuIFtmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICB2YXIgbyA9IGModGhpcyksXG4gICAgICAgICAgaSA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGVbdF07XG4gICAgICAgIHJldHVybiB2b2lkIDAgIT09IGkgPyBpLmNhbGwoZSwgbywgcikgOiBuLmNhbGwoU3RyaW5nKG8pLCBlLCByKTtcbiAgICAgIH0sIGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgIGlmICghZCAmJiB5IHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgLTEgPT09IHIuaW5kZXhPZih4KSkge1xuICAgICAgICAgIHZhciBpID0gZShuLCB0LCB0aGlzLCByKTtcbiAgICAgICAgICBpZiAoaS5kb25lKSByZXR1cm4gaS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IG8odCksXG4gICAgICAgICAgaCA9IFN0cmluZyh0aGlzKSxcbiAgICAgICAgICB2ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiByO1xuICAgICAgICB2IHx8IChyID0gU3RyaW5nKHIpKTtcbiAgICAgICAgdmFyIGcgPSBjLmdsb2JhbDtcbiAgICAgICAgaWYgKGcpIHtcbiAgICAgICAgICB2YXIgYiA9IGMudW5pY29kZTtcbiAgICAgICAgICBjLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgUyA9IFtdOzspIHtcbiAgICAgICAgICB2YXIgRSA9IHMoYywgaCk7XG4gICAgICAgICAgaWYgKG51bGwgPT09IEUpIGJyZWFrO1xuICAgICAgICAgIGlmIChTLnB1c2goRSksICFnKSBicmVhaztcbiAgICAgICAgICBcIlwiID09PSBTdHJpbmcoRVswXSkgJiYgKGMubGFzdEluZGV4ID0gZihoLCBhKGMubGFzdEluZGV4KSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHcsIE8gPSBcIlwiLCBSID0gMCwgQSA9IDA7IEEgPCBTLmxlbmd0aDsgQSsrKSB7XG4gICAgICAgICAgRSA9IFNbQV07XG4gICAgICAgICAgZm9yICh2YXIgaiA9IFN0cmluZyhFWzBdKSwgSSA9IGwocCh1KEUuaW5kZXgpLCBoLmxlbmd0aCksIDApLCBrID0gW10sIFAgPSAxOyBQIDwgRS5sZW5ndGg7IFArKykgay5wdXNoKHZvaWQgMCA9PT0gKHcgPSBFW1BdKSA/IHcgOiBTdHJpbmcodykpO1xuICAgICAgICAgIHZhciBMID0gRS5ncm91cHM7XG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIHZhciBUID0gW2pdLmNvbmNhdChrLCBJLCBoKTtcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gTCAmJiBULnB1c2goTCk7XG4gICAgICAgICAgICB2YXIgXyA9IFN0cmluZyhyLmFwcGx5KHZvaWQgMCwgVCkpO1xuICAgICAgICAgIH0gZWxzZSBfID0gbShqLCBoLCBJLCBrLCBMLCByKTtcbiAgICAgICAgICBJID49IFIgJiYgKE8gKz0gaC5zbGljZShSLCBJKSArIF8sIFIgPSBJICsgai5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPICsgaC5zbGljZShSKTtcbiAgICAgIH1dO1xuICAgICAgZnVuY3Rpb24gbSh0LCBlLCByLCBvLCBhLCB1KSB7XG4gICAgICAgIHZhciBjID0gciArIHQubGVuZ3RoLFxuICAgICAgICAgIGYgPSBvLmxlbmd0aCxcbiAgICAgICAgICBzID0gZztcbiAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gYSAmJiAoYSA9IGkoYSksIHMgPSB2KSwgbi5jYWxsKHUsIHMsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgc3dpdGNoIChpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiO1xuICAgICAgICAgICAgY2FzZSBcIiZcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICBjYXNlIFwiYFwiOlxuICAgICAgICAgICAgICByZXR1cm4gZS5zbGljZSgwLCByKTtcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICAgIHJldHVybiBlLnNsaWNlKGMpO1xuICAgICAgICAgICAgY2FzZSBcIjxcIjpcbiAgICAgICAgICAgICAgdSA9IGFbaS5zbGljZSgxLCAtMSldO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHZhciBzID0gK2k7XG4gICAgICAgICAgICAgIGlmICgwID09PSBzKSByZXR1cm4gbjtcbiAgICAgICAgICAgICAgaWYgKHMgPiBmKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBoKHMgLyAxMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAgPT09IGwgPyBuIDogbCA8PSBmID8gdm9pZCAwID09PSBvW2wgLSAxXSA/IGkuY2hhckF0KDEpIDogb1tsIC0gMV0gKyBpLmNoYXJBdCgxKSA6IG47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdSA9IG9bcyAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB1ID8gXCJcIiA6IHU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyMDUpLFxuICAgICAgbyA9IGUoMjApLFxuICAgICAgaSA9IGUoMTIpLFxuICAgICAgYSA9IGUoMTYxKSxcbiAgICAgIHUgPSBlKDIwNyk7XG4gICAgcihcInNlYXJjaFwiLCAxLCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgcmV0dXJuIFtmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgZSA9IGkodGhpcyksXG4gICAgICAgICAgciA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG5bdF07XG4gICAgICAgIHJldHVybiB2b2lkIDAgIT09IHIgPyByLmNhbGwobiwgZSkgOiBuZXcgUmVnRXhwKG4pW3RdKFN0cmluZyhlKSk7XG4gICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgciA9IGUobiwgdCwgdGhpcyk7XG4gICAgICAgIGlmIChyLmRvbmUpIHJldHVybiByLnZhbHVlO1xuICAgICAgICB2YXIgaSA9IG8odCksXG4gICAgICAgICAgYyA9IFN0cmluZyh0aGlzKSxcbiAgICAgICAgICBmID0gaS5sYXN0SW5kZXg7XG4gICAgICAgIGEoZiwgMCkgfHwgKGkubGFzdEluZGV4ID0gMCk7XG4gICAgICAgIHZhciBzID0gdShpLCBjKTtcbiAgICAgICAgcmV0dXJuIGEoaS5sYXN0SW5kZXgsIGYpIHx8IChpLmxhc3RJbmRleCA9IGYpLCBudWxsID09PSBzID8gLTEgOiBzLmluZGV4O1xuICAgICAgfV07XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIwNSksXG4gICAgICBvID0gZSgxODYpLFxuICAgICAgaSA9IGUoMjApLFxuICAgICAgYSA9IGUoMTIpLFxuICAgICAgdSA9IGUoMTc1KSxcbiAgICAgIGMgPSBlKDIwNiksXG4gICAgICBmID0gZSgzOSksXG4gICAgICBzID0gZSgyMDcpLFxuICAgICAgbCA9IGUoMTkwKSxcbiAgICAgIHAgPSBlKDYpLFxuICAgICAgaCA9IFtdLnB1c2gsXG4gICAgICB2ID0gTWF0aC5taW4sXG4gICAgICBnID0gIXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIVJlZ0V4cCg0Mjk0OTY3Mjk1LCBcInlcIik7XG4gICAgICB9KTtcbiAgICByKFwic3BsaXRcIiwgMiwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgIHZhciByO1xuICAgICAgcmV0dXJuIHIgPSBcImNcIiA9PSBcImFiYmNcIi5zcGxpdCgvKGIpKi8pWzFdIHx8IDQgIT0gXCJ0ZXN0XCIuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoIHx8IDIgIT0gXCJhYlwiLnNwbGl0KC8oPzphYikqLykubGVuZ3RoIHx8IDQgIT0gXCIuXCIuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoIHx8IFwiLlwiLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fCBcIlwiLnNwbGl0KC8uPy8pLmxlbmd0aCA/IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciByID0gU3RyaW5nKGEodGhpcykpLFxuICAgICAgICAgIGkgPSB2b2lkIDAgPT09IGUgPyA0Mjk0OTY3Mjk1IDogZSA+Pj4gMDtcbiAgICAgICAgaWYgKDAgPT09IGkpIHJldHVybiBbXTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkgcmV0dXJuIFtyXTtcbiAgICAgICAgaWYgKCFvKHQpKSByZXR1cm4gbi5jYWxsKHIsIHQsIGkpO1xuICAgICAgICBmb3IgKHZhciB1LCBjLCBmLCBzID0gW10sIHAgPSAodC5pZ25vcmVDYXNlID8gXCJpXCIgOiBcIlwiKSArICh0Lm11bHRpbGluZSA/IFwibVwiIDogXCJcIikgKyAodC51bmljb2RlID8gXCJ1XCIgOiBcIlwiKSArICh0LnN0aWNreSA/IFwieVwiIDogXCJcIiksIHYgPSAwLCBnID0gbmV3IFJlZ0V4cCh0LnNvdXJjZSwgcCArIFwiZ1wiKTsgKHUgPSBsLmNhbGwoZywgcikpICYmICEoKGMgPSBnLmxhc3RJbmRleCkgPiB2ICYmIChzLnB1c2goci5zbGljZSh2LCB1LmluZGV4KSksIHUubGVuZ3RoID4gMSAmJiB1LmluZGV4IDwgci5sZW5ndGggJiYgaC5hcHBseShzLCB1LnNsaWNlKDEpKSwgZiA9IHVbMF0ubGVuZ3RoLCB2ID0gYywgcy5sZW5ndGggPj0gaSkpOykgZy5sYXN0SW5kZXggPT09IHUuaW5kZXggJiYgZy5sYXN0SW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHYgPT09IHIubGVuZ3RoID8gIWYgJiYgZy50ZXN0KFwiXCIpIHx8IHMucHVzaChcIlwiKSA6IHMucHVzaChyLnNsaWNlKHYpKSwgcy5sZW5ndGggPiBpID8gcy5zbGljZSgwLCBpKSA6IHM7XG4gICAgICB9IDogXCIwXCIuc3BsaXQodm9pZCAwLCAwKS5sZW5ndGggPyBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwID09PSB0ICYmIDAgPT09IGUgPyBbXSA6IG4uY2FsbCh0aGlzLCB0LCBlKTtcbiAgICAgIH0gOiBuLCBbZnVuY3Rpb24gKG4sIGUpIHtcbiAgICAgICAgdmFyIG8gPSBhKHRoaXMpLFxuICAgICAgICAgIGkgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuW3RdO1xuICAgICAgICByZXR1cm4gdm9pZCAwICE9PSBpID8gaS5jYWxsKG4sIG8sIGUpIDogci5jYWxsKFN0cmluZyhvKSwgbiwgZSk7XG4gICAgICB9LCBmdW5jdGlvbiAodCwgbykge1xuICAgICAgICB2YXIgYSA9IGUociwgdCwgdGhpcywgbywgciAhPT0gbik7XG4gICAgICAgIGlmIChhLmRvbmUpIHJldHVybiBhLnZhbHVlO1xuICAgICAgICB2YXIgbCA9IGkodCksXG4gICAgICAgICAgcCA9IFN0cmluZyh0aGlzKSxcbiAgICAgICAgICBoID0gdShsLCBSZWdFeHApLFxuICAgICAgICAgIGQgPSBsLnVuaWNvZGUsXG4gICAgICAgICAgeSA9IChsLmlnbm9yZUNhc2UgPyBcImlcIiA6IFwiXCIpICsgKGwubXVsdGlsaW5lID8gXCJtXCIgOiBcIlwiKSArIChsLnVuaWNvZGUgPyBcInVcIiA6IFwiXCIpICsgKGcgPyBcInlcIiA6IFwiZ1wiKSxcbiAgICAgICAgICB4ID0gbmV3IGgoZyA/IGwgOiBcIl4oPzpcIiArIGwuc291cmNlICsgXCIpXCIsIHkpLFxuICAgICAgICAgIG0gPSB2b2lkIDAgPT09IG8gPyA0Mjk0OTY3Mjk1IDogbyA+Pj4gMDtcbiAgICAgICAgaWYgKDAgPT09IG0pIHJldHVybiBbXTtcbiAgICAgICAgaWYgKDAgPT09IHAubGVuZ3RoKSByZXR1cm4gbnVsbCA9PT0gcyh4LCBwKSA/IFtwXSA6IFtdO1xuICAgICAgICBmb3IgKHZhciBiID0gMCwgUyA9IDAsIEUgPSBbXTsgUyA8IHAubGVuZ3RoOykge1xuICAgICAgICAgIHgubGFzdEluZGV4ID0gZyA/IFMgOiAwO1xuICAgICAgICAgIHZhciB3LFxuICAgICAgICAgICAgTyA9IHMoeCwgZyA/IHAgOiBwLnNsaWNlKFMpKTtcbiAgICAgICAgICBpZiAobnVsbCA9PT0gTyB8fCAodyA9IHYoZih4Lmxhc3RJbmRleCArIChnID8gMCA6IFMpKSwgcC5sZW5ndGgpKSA9PT0gYikgUyA9IGMocCwgUywgZCk7ZWxzZSB7XG4gICAgICAgICAgICBpZiAoRS5wdXNoKHAuc2xpY2UoYiwgUykpLCBFLmxlbmd0aCA9PT0gbSkgcmV0dXJuIEU7XG4gICAgICAgICAgICBmb3IgKHZhciBSID0gMTsgUiA8PSBPLmxlbmd0aCAtIDE7IFIrKykgaWYgKEUucHVzaChPW1JdKSwgRS5sZW5ndGggPT09IG0pIHJldHVybiBFO1xuICAgICAgICAgICAgUyA9IGIgPSB3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRS5wdXNoKHAuc2xpY2UoYikpLCBFO1xuICAgICAgfV07XG4gICAgfSwgIWcpO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IGUoMiksXG4gICAgICBpID0gZSg0KS5mLFxuICAgICAgYSA9IGUoMzkpLFxuICAgICAgdSA9IGUoMTk5KSxcbiAgICAgIGMgPSBlKDEyKSxcbiAgICAgIGYgPSBlKDIwMCksXG4gICAgICBzID0gZSgyOSksXG4gICAgICBsID0gXCJcIi5zdGFydHNXaXRoLFxuICAgICAgcCA9IE1hdGgubWluLFxuICAgICAgaCA9IGYoXCJzdGFydHNXaXRoXCIpO1xuICAgIG8oe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiAhIShzIHx8IGggfHwgKHIgPSBpKFN0cmluZy5wcm90b3R5cGUsIFwic3RhcnRzV2l0aFwiKSwgIXIgfHwgci53cml0YWJsZSkpICYmICFoXG4gICAgfSwge1xuICAgICAgc3RhcnRzV2l0aDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSBTdHJpbmcoYyh0aGlzKSk7XG4gICAgICAgIHUodCk7XG4gICAgICAgIHZhciBlID0gYShwKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwLCBuLmxlbmd0aCkpLFxuICAgICAgICAgIHIgPSBTdHJpbmcodCk7XG4gICAgICAgIHJldHVybiBsID8gbC5jYWxsKG4sIHIsIGUpIDogbi5zbGljZShlLCBlICsgci5sZW5ndGgpID09PSByO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDEyOCkudHJpbTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogZSgyMjApKFwidHJpbVwiKVxuICAgIH0sIHtcbiAgICAgIHRyaW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDYpLFxuICAgICAgbyA9IGUoMTI5KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHIoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFvW3RdKCkgfHwgXCLigIvCheGgjlwiICE9IFwi4oCLwoXhoI5cIlt0XSgpIHx8IG9bdF0ubmFtZSAhPT0gdDtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTI4KS5lbmQsXG4gICAgICBpID0gZSgyMjApKFwidHJpbUVuZFwiKSxcbiAgICAgIGEgPSBpID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzKTtcbiAgICAgIH0gOiBcIlwiLnRyaW1FbmQ7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGlcbiAgICB9LCB7XG4gICAgICB0cmltRW5kOiBhLFxuICAgICAgdHJpbVJpZ2h0OiBhXG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMTI4KS5zdGFydCxcbiAgICAgIGkgPSBlKDIyMCkoXCJ0cmltU3RhcnRcIiksXG4gICAgICBhID0gaSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcyk7XG4gICAgICB9IDogXCJcIi50cmltU3RhcnQ7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGlcbiAgICB9LCB7XG4gICAgICB0cmltU3RhcnQ6IGEsXG4gICAgICB0cmltTGVmdDogYVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDIyNCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjI1KShcImFuY2hvclwiKVxuICAgIH0sIHtcbiAgICAgIGFuY2hvcjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgXCJhXCIsIFwibmFtZVwiLCB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMTIpLFxuICAgICAgbyA9IC9cIi9nO1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uICh0LCBuLCBlLCBpKSB7XG4gICAgICB2YXIgYSA9IFN0cmluZyhyKHQpKSxcbiAgICAgICAgdSA9IFwiPFwiICsgbjtcbiAgICAgIHJldHVybiBcIlwiICE9PSBlICYmICh1ICs9IFwiIFwiICsgZSArICc9XCInICsgU3RyaW5nKGkpLnJlcGxhY2UobywgXCImcXVvdDtcIikgKyAnXCInKSwgdSArIFwiPlwiICsgYSArIFwiPC9cIiArIG4gKyBcIj5cIjtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2KTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHIoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbiA9IFwiXCJbdF0oJ1wiJyk7XG4gICAgICAgIHJldHVybiBuICE9PSBuLnRvTG93ZXJDYXNlKCkgfHwgbi5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJiaWdcIilcbiAgICB9LCB7XG4gICAgICBiaWc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgXCJiaWdcIiwgXCJcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMjI0KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogZSgyMjUpKFwiYmxpbmtcIilcbiAgICB9LCB7XG4gICAgICBibGluazogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCBcImJsaW5rXCIsIFwiXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDIyNCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjI1KShcImJvbGRcIilcbiAgICB9LCB7XG4gICAgICBib2xkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIFwiYlwiLCBcIlwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJmaXhlZFwiKVxuICAgIH0sIHtcbiAgICAgIGZpeGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIFwidHRcIiwgXCJcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMjI0KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogZSgyMjUpKFwiZm9udGNvbG9yXCIpXG4gICAgfSwge1xuICAgICAgZm9udGNvbG9yOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCBcImZvbnRcIiwgXCJjb2xvclwiLCB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJmb250c2l6ZVwiKVxuICAgIH0sIHtcbiAgICAgIGZvbnRzaXplOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCBcImZvbnRcIiwgXCJzaXplXCIsIHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDIyNCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjI1KShcIml0YWxpY3NcIilcbiAgICB9LCB7XG4gICAgICBpdGFsaWNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIFwiaVwiLCBcIlwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJsaW5rXCIpXG4gICAgfSwge1xuICAgICAgbGluazogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgXCJhXCIsIFwiaHJlZlwiLCB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJzbWFsbFwiKVxuICAgIH0sIHtcbiAgICAgIHNtYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIFwic21hbGxcIiwgXCJcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMjI0KTtcbiAgICByKHtcbiAgICAgIHRhcmdldDogXCJTdHJpbmdcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGZvcmNlZDogZSgyMjUpKFwic3RyaWtlXCIpXG4gICAgfSwge1xuICAgICAgc3RyaWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvKHRoaXMsIFwic3RyaWtlXCIsIFwiXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgyKSxcbiAgICAgIG8gPSBlKDIyNCk7XG4gICAgcih7XG4gICAgICB0YXJnZXQ6IFwiU3RyaW5nXCIsXG4gICAgICBwcm90bzogITAsXG4gICAgICBmb3JjZWQ6IGUoMjI1KShcInN1YlwiKVxuICAgIH0sIHtcbiAgICAgIHN1YjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbyh0aGlzLCBcInN1YlwiLCBcIlwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICB2YXIgciA9IGUoMiksXG4gICAgICBvID0gZSgyMjQpO1xuICAgIHIoe1xuICAgICAgdGFyZ2V0OiBcIlN0cmluZ1wiLFxuICAgICAgcHJvdG86ICEwLFxuICAgICAgZm9yY2VkOiBlKDIyNSkoXCJzdXBcIilcbiAgICB9LCB7XG4gICAgICBzdXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8odGhpcywgXCJzdXBcIiwgXCJcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvID0gZSgzKSxcbiAgICAgIGkgPSBlKDEyNiksXG4gICAgICBhID0gZSgxMjApLFxuICAgICAgdSA9IGUoMTE5KSxcbiAgICAgIGMgPSBlKDIzOSksXG4gICAgICBmID0gZSgxNCksXG4gICAgICBzID0gZSgyNSkuZW5mb3JjZSxcbiAgICAgIGwgPSBlKDI2KSxcbiAgICAgIHAgPSAhby5BY3RpdmVYT2JqZWN0ICYmIFwiQWN0aXZlWE9iamVjdFwiIGluIG8sXG4gICAgICBoID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSxcbiAgICAgIHYgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB2b2lkIDApO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGcgPSB0LmV4cG9ydHMgPSB1KFwiV2Vha01hcFwiLCB2LCBjKTtcbiAgICBpZiAobCAmJiBwKSB7XG4gICAgICByID0gYy5nZXRDb25zdHJ1Y3Rvcih2LCBcIldlYWtNYXBcIiwgITApLCBhLlJFUVVJUkVEID0gITA7XG4gICAgICB2YXIgZCA9IGcucHJvdG90eXBlLFxuICAgICAgICB5ID0gZC5kZWxldGUsXG4gICAgICAgIHggPSBkLmhhcyxcbiAgICAgICAgbSA9IGQuZ2V0LFxuICAgICAgICBiID0gZC5zZXQ7XG4gICAgICBpKGQsIHtcbiAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGlmIChmKHQpICYmICFoKHQpKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHModGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gbi5mcm96ZW4gfHwgKG4uZnJvemVuID0gbmV3IHIoKSksIHkuY2FsbCh0aGlzLCB0KSB8fCBuLmZyb3plbi5kZWxldGUodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB5LmNhbGwodGhpcywgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAoZih0KSAmJiAhaCh0KSkge1xuICAgICAgICAgICAgdmFyIG4gPSBzKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG4uZnJvemVuIHx8IChuLmZyb3plbiA9IG5ldyByKCkpLCB4LmNhbGwodGhpcywgdCkgfHwgbi5mcm96ZW4uaGFzKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaWYgKGYodCkgJiYgIWgodCkpIHtcbiAgICAgICAgICAgIHZhciBuID0gcyh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBuLmZyb3plbiB8fCAobi5mcm96ZW4gPSBuZXcgcigpKSwgeC5jYWxsKHRoaXMsIHQpID8gbS5jYWxsKHRoaXMsIHQpIDogbi5mcm96ZW4uZ2V0KHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbS5jYWxsKHRoaXMsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgaWYgKGYodCkgJiYgIWgodCkpIHtcbiAgICAgICAgICAgIHZhciBlID0gcyh0aGlzKTtcbiAgICAgICAgICAgIGUuZnJvemVuIHx8IChlLmZyb3plbiA9IG5ldyByKCkpLCB4LmNhbGwodGhpcywgdCkgPyBiLmNhbGwodGhpcywgdCwgbikgOiBlLmZyb3plbi5zZXQodCwgbik7XG4gICAgICAgICAgfSBlbHNlIGIuY2FsbCh0aGlzLCB0LCBuKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSgxMjYpLFxuICAgICAgbyA9IGUoMTIwKS5nZXRXZWFrRGF0YSxcbiAgICAgIGkgPSBlKDIwKSxcbiAgICAgIGEgPSBlKDE0KSxcbiAgICAgIHUgPSBlKDEyMyksXG4gICAgICBjID0gZSgxMjIpLFxuICAgICAgZiA9IGUoNjMpLFxuICAgICAgcyA9IGUoMTUpLFxuICAgICAgbCA9IGUoMjUpLFxuICAgICAgcCA9IGwuc2V0LFxuICAgICAgaCA9IGwuZ2V0dGVyRm9yLFxuICAgICAgdiA9IGYuZmluZCxcbiAgICAgIGcgPSBmLmZpbmRJbmRleCxcbiAgICAgIGQgPSAwLFxuICAgICAgeSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LmZyb3plbiB8fCAodC5mcm96ZW4gPSBuZXcgeCgpKTtcbiAgICAgIH0sXG4gICAgICB4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgIH0sXG4gICAgICBtID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgcmV0dXJuIHYodC5lbnRyaWVzLCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0WzBdID09PSBuO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgeC5wcm90b3R5cGUgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gbSh0aGlzLCB0KTtcbiAgICAgICAgaWYgKG4pIHJldHVybiBuWzFdO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICEhbSh0aGlzLCB0KTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIHZhciBlID0gbSh0aGlzLCB0KTtcbiAgICAgICAgZSA/IGVbMV0gPSBuIDogdGhpcy5lbnRyaWVzLnB1c2goW3QsIG5dKTtcbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gZyh0aGlzLmVudHJpZXMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgcmV0dXJuIG5bMF0gPT09IHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gfm4gJiYgdGhpcy5lbnRyaWVzLnNwbGljZShuLCAxKSwgISF+bjtcbiAgICAgIH1cbiAgICB9LCB0LmV4cG9ydHMgPSB7XG4gICAgICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHQsIG4sIGUsIGYpIHtcbiAgICAgICAgdmFyIGwgPSB0KGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgICB1KHQsIGwsIG4pLCBwKHQsIHtcbiAgICAgICAgICAgICAgdHlwZTogbixcbiAgICAgICAgICAgICAgaWQ6IGQrKyxcbiAgICAgICAgICAgICAgZnJvemVuOiB2b2lkIDBcbiAgICAgICAgICAgIH0pLCBudWxsICE9IHIgJiYgYyhyLCB0W2ZdLCB0LCBlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2ID0gaChuKSxcbiAgICAgICAgICBnID0gZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICAgICAgICAgIHZhciByID0gdih0KSxcbiAgICAgICAgICAgICAgYSA9IG8oaShuKSwgITApO1xuICAgICAgICAgICAgcmV0dXJuICEwID09PSBhID8geShyKS5zZXQobiwgZSkgOiBhW3IuaWRdID0gZSwgdDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcihsLnByb3RvdHlwZSwge1xuICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdih0aGlzKTtcbiAgICAgICAgICAgIGlmICghYSh0KSkgcmV0dXJuICExO1xuICAgICAgICAgICAgdmFyIGUgPSBvKHQpO1xuICAgICAgICAgICAgcmV0dXJuICEwID09PSBlID8geShuKS5kZWxldGUodCkgOiBlICYmIHMoZSwgbi5pZCkgJiYgZGVsZXRlIGVbbi5pZF07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYXM6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHYodGhpcyk7XG4gICAgICAgICAgICBpZiAoIWEodCkpIHJldHVybiAhMTtcbiAgICAgICAgICAgIHZhciBlID0gbyh0KTtcbiAgICAgICAgICAgIHJldHVybiAhMCA9PT0gZSA/IHkobikuaGFzKHQpIDogZSAmJiBzKGUsIG4uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksIHIobC5wcm90b3R5cGUsIGUgPyB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIG4gPSB2KHRoaXMpO1xuICAgICAgICAgICAgaWYgKGEodCkpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSBvKHQpO1xuICAgICAgICAgICAgICByZXR1cm4gITAgPT09IGUgPyB5KG4pLmdldCh0KSA6IGUgPyBlW24uaWRdIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIGcodGhpcywgdCwgbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IDoge1xuICAgICAgICAgIGFkZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBnKHRoaXMsIHQsICEwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBsO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgxMTkpKFwiV2Vha1NldFwiLCBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHZvaWQgMCk7XG4gICAgICB9O1xuICAgIH0sIGUoMjM5KSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDMpLFxuICAgICAgbyA9IGUoMjQyKSxcbiAgICAgIGkgPSBlKDc3KSxcbiAgICAgIGEgPSBlKDE4KTtcbiAgICBmb3IgKHZhciB1IGluIG8pIHtcbiAgICAgIHZhciBjID0gclt1XSxcbiAgICAgICAgZiA9IGMgJiYgYy5wcm90b3R5cGU7XG4gICAgICBpZiAoZiAmJiBmLmZvckVhY2ggIT09IGkpIHRyeSB7XG4gICAgICAgIGEoZiwgXCJmb3JFYWNoXCIsIGkpO1xuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBmLmZvckVhY2ggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSB7XG4gICAgICBDU1NSdWxlTGlzdDogMCxcbiAgICAgIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gICAgICBDU1NWYWx1ZUxpc3Q6IDAsXG4gICAgICBDbGllbnRSZWN0TGlzdDogMCxcbiAgICAgIERPTVJlY3RMaXN0OiAwLFxuICAgICAgRE9NU3RyaW5nTGlzdDogMCxcbiAgICAgIERPTVRva2VuTGlzdDogMSxcbiAgICAgIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICAgICAgRmlsZUxpc3Q6IDAsXG4gICAgICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgICAgIEhUTUxDb2xsZWN0aW9uOiAwLFxuICAgICAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICAgICAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gICAgICBNZWRpYUxpc3Q6IDAsXG4gICAgICBNaW1lVHlwZUFycmF5OiAwLFxuICAgICAgTmFtZWROb2RlTWFwOiAwLFxuICAgICAgTm9kZUxpc3Q6IDEsXG4gICAgICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICAgICAgUGx1Z2luOiAwLFxuICAgICAgUGx1Z2luQXJyYXk6IDAsXG4gICAgICBTVkdMZW5ndGhMaXN0OiAwLFxuICAgICAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgICAgIFNWR1BhdGhTZWdMaXN0OiAwLFxuICAgICAgU1ZHUG9pbnRMaXN0OiAwLFxuICAgICAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgICAgIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gICAgICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICAgICAgU3R5bGVTaGVldExpc3Q6IDAsXG4gICAgICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICAgICAgVGV4dFRyYWNrTGlzdDogMCxcbiAgICAgIFRvdWNoTGlzdDogMFxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSgyMDMpO1xuICAgIHZhciByLFxuICAgICAgbyA9IGUoMiksXG4gICAgICBpID0gZSg1KSxcbiAgICAgIGEgPSBlKDI0NCksXG4gICAgICB1ID0gZSgzKSxcbiAgICAgIGMgPSBlKDU5KSxcbiAgICAgIGYgPSBlKDIxKSxcbiAgICAgIHMgPSBlKDEyMyksXG4gICAgICBsID0gZSgxNSksXG4gICAgICBwID0gZSgxNDcpLFxuICAgICAgaCA9IGUoNzkpLFxuICAgICAgdiA9IGUoMTk3KS5jb2RlQXQsXG4gICAgICBnID0gZSgyNDUpLFxuICAgICAgZCA9IGUoOTUpLFxuICAgICAgeSA9IGUoMjQ2KSxcbiAgICAgIHggPSBlKDI1KSxcbiAgICAgIG0gPSB1LlVSTCxcbiAgICAgIGIgPSB5LlVSTFNlYXJjaFBhcmFtcyxcbiAgICAgIFMgPSB5LmdldFN0YXRlLFxuICAgICAgRSA9IHguc2V0LFxuICAgICAgdyA9IHguZ2V0dGVyRm9yKFwiVVJMXCIpLFxuICAgICAgTyA9IE1hdGguZmxvb3IsXG4gICAgICBSID0gTWF0aC5wb3csXG4gICAgICBBID0gL1tBLVphLXpdLyxcbiAgICAgIGogPSAvW1xcZCstLkEtWmEtel0vLFxuICAgICAgSSA9IC9cXGQvLFxuICAgICAgayA9IC9eKDB4fDBYKS8sXG4gICAgICBQID0gL15bMC03XSskLyxcbiAgICAgIEwgPSAvXlxcZCskLyxcbiAgICAgIFQgPSAvXltcXGRBLUZhLWZdKyQvLFxuICAgICAgXyA9IC9bXFx1MDAwMFxcdTAwMDlcXHUwMDBBXFx1MDAwRCAjJS86P0BbXFxcXF1dLyxcbiAgICAgIFUgPSAvW1xcdTAwMDBcXHUwMDA5XFx1MDAwQVxcdTAwMEQgIy86P0BbXFxcXF1dLyxcbiAgICAgIE4gPSAvXltcXHUwMDAwLVxcdTAwMUYgXSt8W1xcdTAwMDAtXFx1MDAxRiBdKyQvZyxcbiAgICAgIEMgPSAvW1xcdTAwMDlcXHUwMDBBXFx1MDAwRF0vZyxcbiAgICAgIEYgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB2YXIgZSwgciwgbztcbiAgICAgICAgaWYgKFwiW1wiID09IG4uY2hhckF0KDApKSB7XG4gICAgICAgICAgaWYgKFwiXVwiICE9IG4uY2hhckF0KG4ubGVuZ3RoIC0gMSkpIHJldHVybiBcIkludmFsaWQgaG9zdFwiO1xuICAgICAgICAgIGlmICghKGUgPSB6KG4uc2xpY2UoMSwgLTEpKSkpIHJldHVybiBcIkludmFsaWQgaG9zdFwiO1xuICAgICAgICAgIHQuaG9zdCA9IGU7XG4gICAgICAgIH0gZWxzZSBpZiAoWCh0KSkge1xuICAgICAgICAgIGlmIChuID0gZyhuKSwgXy50ZXN0KG4pKSByZXR1cm4gXCJJbnZhbGlkIGhvc3RcIjtcbiAgICAgICAgICBpZiAobnVsbCA9PT0gKGUgPSBNKG4pKSkgcmV0dXJuIFwiSW52YWxpZCBob3N0XCI7XG4gICAgICAgICAgdC5ob3N0ID0gZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoVS50ZXN0KG4pKSByZXR1cm4gXCJJbnZhbGlkIGhvc3RcIjtcbiAgICAgICAgICBmb3IgKGUgPSBcIlwiLCByID0gaChuKSwgbyA9IDA7IG8gPCByLmxlbmd0aDsgbysrKSBlICs9IEcocltvXSwgcSk7XG4gICAgICAgICAgdC5ob3N0ID0gZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIE0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBjID0gdC5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmIChjLmxlbmd0aCAmJiBcIlwiID09IGNbYy5sZW5ndGggLSAxXSAmJiBjLnBvcCgpLCAobiA9IGMubGVuZ3RoKSA+IDQpIHJldHVybiB0O1xuICAgICAgICBmb3IgKGUgPSBbXSwgciA9IDA7IHIgPCBuOyByKyspIHtcbiAgICAgICAgICBpZiAoXCJcIiA9PSAobyA9IGNbcl0pKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoaSA9IDEwLCBvLmxlbmd0aCA+IDEgJiYgXCIwXCIgPT0gby5jaGFyQXQoMCkgJiYgKGkgPSBrLnRlc3QobykgPyAxNiA6IDgsIG8gPSBvLnNsaWNlKDggPT0gaSA/IDEgOiAyKSksIFwiXCIgPT09IG8pIGEgPSAwO2Vsc2Uge1xuICAgICAgICAgICAgaWYgKCEoMTAgPT0gaSA/IEwgOiA4ID09IGkgPyBQIDogVCkudGVzdChvKSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBhID0gcGFyc2VJbnQobywgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUucHVzaChhKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHIgPSAwOyByIDwgbjsgcisrKSBpZiAoYSA9IGVbcl0sIHIgPT0gbiAtIDEpIHtcbiAgICAgICAgICBpZiAoYSA+PSBSKDI1NiwgNSAtIG4pKSByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChhID4gMjU1KSByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh1ID0gZS5wb3AoKSwgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB1ICs9IGVbcl0gKiBSKDI1NiwgMyAtIHIpO1xuICAgICAgICByZXR1cm4gdTtcbiAgICAgIH0sXG4gICAgICB6ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgZSxcbiAgICAgICAgICByLFxuICAgICAgICAgIG8sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBhLFxuICAgICAgICAgIHUsXG4gICAgICAgICAgYyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICBmID0gMCxcbiAgICAgICAgICBzID0gbnVsbCxcbiAgICAgICAgICBsID0gMCxcbiAgICAgICAgICBwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2hhckF0KGwpO1xuICAgICAgICAgIH07XG4gICAgICAgIGlmIChcIjpcIiA9PSBwKCkpIHtcbiAgICAgICAgICBpZiAoXCI6XCIgIT0gdC5jaGFyQXQoMSkpIHJldHVybjtcbiAgICAgICAgICBsICs9IDIsIHMgPSArK2Y7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IHAoKTspIHtcbiAgICAgICAgICBpZiAoOCA9PSBmKSByZXR1cm47XG4gICAgICAgICAgaWYgKFwiOlwiICE9IHAoKSkge1xuICAgICAgICAgICAgZm9yIChuID0gZSA9IDA7IGUgPCA0ICYmIFQudGVzdChwKCkpOykgbiA9IDE2ICogbiArIHBhcnNlSW50KHAoKSwgMTYpLCBsKyssIGUrKztcbiAgICAgICAgICAgIGlmIChcIi5cIiA9PSBwKCkpIHtcbiAgICAgICAgICAgICAgaWYgKDAgPT0gZSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAobCAtPSBlLCBmID4gNikgcmV0dXJuO1xuICAgICAgICAgICAgICBmb3IgKHIgPSAwOyBwKCk7KSB7XG4gICAgICAgICAgICAgICAgaWYgKG8gPSBudWxsLCByID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoXCIuXCIgPT0gcCgpICYmIHIgPCA0KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIUkudGVzdChwKCkpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgZm9yICg7IEkudGVzdChwKCkpOykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPSBwYXJzZUludChwKCksIDEwKSwgbnVsbCA9PT0gbykgbyA9IGk7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IG8pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgbyA9IDEwICogbyArIGk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAobyA+IDI1NSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjW2ZdID0gMjU2ICogY1tmXSArIG8sIDIgIT0gKytyICYmIDQgIT0gciB8fCBmKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKDQgIT0gcikgcmV0dXJuO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcIjpcIiA9PSBwKCkpIHtcbiAgICAgICAgICAgICAgaWYgKGwrKywgIXAoKSkgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwKCkpIHJldHVybjtcbiAgICAgICAgICAgIGNbZisrXSA9IG47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBzKSByZXR1cm47XG4gICAgICAgICAgICBsKyssIHMgPSArK2Y7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChudWxsICE9PSBzKSBmb3IgKGEgPSBmIC0gcywgZiA9IDc7IDAgIT0gZiAmJiBhID4gMDspIHUgPSBjW2ZdLCBjW2YtLV0gPSBjW3MgKyBhIC0gMV0sIGNbcyArIC0tYV0gPSB1O2Vsc2UgaWYgKDggIT0gZikgcmV0dXJuO1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0sXG4gICAgICBEID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sIGUsIHIsIG87XG4gICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgZm9yIChuID0gW10sIGUgPSAwOyBlIDwgNDsgZSsrKSBuLnVuc2hpZnQodCAlIDI1NiksIHQgPSBPKHQgLyAyNTYpO1xuICAgICAgICAgIHJldHVybiBuLmpvaW4oXCIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgZm9yIChuID0gXCJcIiwgciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gbnVsbCwgZSA9IDEsIHIgPSBudWxsLCBvID0gMCwgaSA9IDA7IGkgPCA4OyBpKyspIDAgIT09IHRbaV0gPyAobyA+IGUgJiYgKG4gPSByLCBlID0gbyksIHIgPSBudWxsLCBvID0gMCkgOiAobnVsbCA9PT0gciAmJiAociA9IGkpLCArK28pO1xuICAgICAgICAgICAgcmV0dXJuIG8gPiBlICYmIChuID0gciwgZSA9IG8pLCBuO1xuICAgICAgICAgIH0odCksIGUgPSAwOyBlIDwgODsgZSsrKSBvICYmIDAgPT09IHRbZV0gfHwgKG8gJiYgKG8gPSAhMSksIHIgPT09IGUgPyAobiArPSBlID8gXCI6XCIgOiBcIjo6XCIsIG8gPSAhMCkgOiAobiArPSB0W2VdLnRvU3RyaW5nKDE2KSwgZSA8IDcgJiYgKG4gKz0gXCI6XCIpKSk7XG4gICAgICAgICAgcmV0dXJuIFwiW1wiICsgbiArIFwiXVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSxcbiAgICAgIHEgPSB7fSxcbiAgICAgIEIgPSBwKHt9LCBxLCB7XG4gICAgICAgIFwiIFwiOiAxLFxuICAgICAgICAnXCInOiAxLFxuICAgICAgICBcIjxcIjogMSxcbiAgICAgICAgXCI+XCI6IDEsXG4gICAgICAgIFwiYFwiOiAxXG4gICAgICB9KSxcbiAgICAgIFcgPSBwKHt9LCBCLCB7XG4gICAgICAgIFwiI1wiOiAxLFxuICAgICAgICBcIj9cIjogMSxcbiAgICAgICAgXCJ7XCI6IDEsXG4gICAgICAgIFwifVwiOiAxXG4gICAgICB9KSxcbiAgICAgICQgPSBwKHt9LCBXLCB7XG4gICAgICAgIFwiL1wiOiAxLFxuICAgICAgICBcIjpcIjogMSxcbiAgICAgICAgXCI7XCI6IDEsXG4gICAgICAgIFwiPVwiOiAxLFxuICAgICAgICBcIkBcIjogMSxcbiAgICAgICAgXCJbXCI6IDEsXG4gICAgICAgIFwiXFxcXFwiOiAxLFxuICAgICAgICBcIl1cIjogMSxcbiAgICAgICAgXCJeXCI6IDEsXG4gICAgICAgIFwifFwiOiAxXG4gICAgICB9KSxcbiAgICAgIEcgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB2YXIgZSA9IHYodCwgMCk7XG4gICAgICAgIHJldHVybiBlID4gMzIgJiYgZSA8IDEyNyAmJiAhbChuLCB0KSA/IHQgOiBlbmNvZGVVUklDb21wb25lbnQodCk7XG4gICAgICB9LFxuICAgICAgViA9IHtcbiAgICAgICAgZnRwOiAyMSxcbiAgICAgICAgZmlsZTogbnVsbCxcbiAgICAgICAgaHR0cDogODAsXG4gICAgICAgIGh0dHBzOiA0NDMsXG4gICAgICAgIHdzOiA4MCxcbiAgICAgICAgd3NzOiA0NDNcbiAgICAgIH0sXG4gICAgICBYID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGwoViwgdC5zY2hlbWUpO1xuICAgICAgfSxcbiAgICAgIFkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gXCJcIiAhPSB0LnVzZXJuYW1lIHx8IFwiXCIgIT0gdC5wYXNzd29yZDtcbiAgICAgIH0sXG4gICAgICBLID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICF0Lmhvc3QgfHwgdC5jYW5ub3RCZUFCYXNlVVJMIHx8IFwiZmlsZVwiID09IHQuc2NoZW1lO1xuICAgICAgfSxcbiAgICAgIEogPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgcmV0dXJuIDIgPT0gdC5sZW5ndGggJiYgQS50ZXN0KHQuY2hhckF0KDApKSAmJiAoXCI6XCIgPT0gKGUgPSB0LmNoYXJBdCgxKSkgfHwgIW4gJiYgXCJ8XCIgPT0gZSk7XG4gICAgICB9LFxuICAgICAgSCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuO1xuICAgICAgICByZXR1cm4gdC5sZW5ndGggPiAxICYmIEoodC5zbGljZSgwLCAyKSkgJiYgKDIgPT0gdC5sZW5ndGggfHwgXCIvXCIgPT09IChuID0gdC5jaGFyQXQoMikpIHx8IFwiXFxcXFwiID09PSBuIHx8IFwiP1wiID09PSBuIHx8IFwiI1wiID09PSBuKTtcbiAgICAgIH0sXG4gICAgICBRID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB0LnBhdGgsXG4gICAgICAgICAgZSA9IG4ubGVuZ3RoO1xuICAgICAgICAhZSB8fCBcImZpbGVcIiA9PSB0LnNjaGVtZSAmJiAxID09IGUgJiYgSihuWzBdLCAhMCkgfHwgbi5wb3AoKTtcbiAgICAgIH0sXG4gICAgICBaID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIFwiLlwiID09PSB0IHx8IFwiJTJlXCIgPT09IHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0sXG4gICAgICB0dCA9IHt9LFxuICAgICAgbnQgPSB7fSxcbiAgICAgIGV0ID0ge30sXG4gICAgICBydCA9IHt9LFxuICAgICAgb3QgPSB7fSxcbiAgICAgIGl0ID0ge30sXG4gICAgICBhdCA9IHt9LFxuICAgICAgdXQgPSB7fSxcbiAgICAgIGN0ID0ge30sXG4gICAgICBmdCA9IHt9LFxuICAgICAgc3QgPSB7fSxcbiAgICAgIGx0ID0ge30sXG4gICAgICBwdCA9IHt9LFxuICAgICAgaHQgPSB7fSxcbiAgICAgIHZ0ID0ge30sXG4gICAgICBndCA9IHt9LFxuICAgICAgZHQgPSB7fSxcbiAgICAgIHl0ID0ge30sXG4gICAgICB4dCA9IHt9LFxuICAgICAgbXQgPSB7fSxcbiAgICAgIGJ0ID0ge30sXG4gICAgICBTdCA9IGZ1bmN0aW9uICh0LCBuLCBlLCBvKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBjLFxuICAgICAgICAgIGYsXG4gICAgICAgICAgcyA9IGUgfHwgdHQsXG4gICAgICAgICAgcCA9IDAsXG4gICAgICAgICAgdiA9IFwiXCIsXG4gICAgICAgICAgZyA9ICExLFxuICAgICAgICAgIGQgPSAhMSxcbiAgICAgICAgICB5ID0gITE7XG4gICAgICAgIGZvciAoZSB8fCAodC5zY2hlbWUgPSBcIlwiLCB0LnVzZXJuYW1lID0gXCJcIiwgdC5wYXNzd29yZCA9IFwiXCIsIHQuaG9zdCA9IG51bGwsIHQucG9ydCA9IG51bGwsIHQucGF0aCA9IFtdLCB0LnF1ZXJ5ID0gbnVsbCwgdC5mcmFnbWVudCA9IG51bGwsIHQuY2Fubm90QmVBQmFzZVVSTCA9ICExLCBuID0gbi5yZXBsYWNlKE4sIFwiXCIpKSwgbiA9IG4ucmVwbGFjZShDLCBcIlwiKSwgaSA9IGgobik7IHAgPD0gaS5sZW5ndGg7KSB7XG4gICAgICAgICAgc3dpdGNoIChhID0gaVtwXSwgcykge1xuICAgICAgICAgICAgY2FzZSB0dDpcbiAgICAgICAgICAgICAgaWYgKCFhIHx8ICFBLnRlc3QoYSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSkgcmV0dXJuIFwiSW52YWxpZCBzY2hlbWVcIjtcbiAgICAgICAgICAgICAgICBzID0gZXQ7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdiArPSBhLnRvTG93ZXJDYXNlKCksIHMgPSBudDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG50OlxuICAgICAgICAgICAgICBpZiAoYSAmJiAoai50ZXN0KGEpIHx8IFwiK1wiID09IGEgfHwgXCItXCIgPT0gYSB8fCBcIi5cIiA9PSBhKSkgdiArPSBhLnRvTG93ZXJDYXNlKCk7ZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiOlwiICE9IGEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlKSByZXR1cm4gXCJJbnZhbGlkIHNjaGVtZVwiO1xuICAgICAgICAgICAgICAgICAgdiA9IFwiXCIsIHMgPSBldCwgcCA9IDA7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUgJiYgKFgodCkgIT0gbChWLCB2KSB8fCBcImZpbGVcIiA9PSB2ICYmIChZKHQpIHx8IG51bGwgIT09IHQucG9ydCkgfHwgXCJmaWxlXCIgPT0gdC5zY2hlbWUgJiYgIXQuaG9zdCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodC5zY2hlbWUgPSB2LCBlKSByZXR1cm4gdm9pZCAoWCh0KSAmJiBWW3Quc2NoZW1lXSA9PSB0LnBvcnQgJiYgKHQucG9ydCA9IG51bGwpKTtcbiAgICAgICAgICAgICAgICB2ID0gXCJcIiwgXCJmaWxlXCIgPT0gdC5zY2hlbWUgPyBzID0gaHQgOiBYKHQpICYmIG8gJiYgby5zY2hlbWUgPT0gdC5zY2hlbWUgPyBzID0gcnQgOiBYKHQpID8gcyA9IHV0IDogXCIvXCIgPT0gaVtwICsgMV0gPyAocyA9IG90LCBwKyspIDogKHQuY2Fubm90QmVBQmFzZVVSTCA9ICEwLCB0LnBhdGgucHVzaChcIlwiKSwgcyA9IHh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZXQ6XG4gICAgICAgICAgICAgIGlmICghbyB8fCBvLmNhbm5vdEJlQUJhc2VVUkwgJiYgXCIjXCIgIT0gYSkgcmV0dXJuIFwiSW52YWxpZCBzY2hlbWVcIjtcbiAgICAgICAgICAgICAgaWYgKG8uY2Fubm90QmVBQmFzZVVSTCAmJiBcIiNcIiA9PSBhKSB7XG4gICAgICAgICAgICAgICAgdC5zY2hlbWUgPSBvLnNjaGVtZSwgdC5wYXRoID0gby5wYXRoLnNsaWNlKCksIHQucXVlcnkgPSBvLnF1ZXJ5LCB0LmZyYWdtZW50ID0gXCJcIiwgdC5jYW5ub3RCZUFCYXNlVVJMID0gITAsIHMgPSBidDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzID0gXCJmaWxlXCIgPT0gby5zY2hlbWUgPyBodCA6IGl0O1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNhc2UgcnQ6XG4gICAgICAgICAgICAgIGlmIChcIi9cIiAhPSBhIHx8IFwiL1wiICE9IGlbcCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcyA9IGl0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHMgPSBjdCwgcCsrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb3Q6XG4gICAgICAgICAgICAgIGlmIChcIi9cIiA9PSBhKSB7XG4gICAgICAgICAgICAgICAgcyA9IGZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHMgPSB5dDtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlIGl0OlxuICAgICAgICAgICAgICBpZiAodC5zY2hlbWUgPSBvLnNjaGVtZSwgYSA9PSByKSB0LnVzZXJuYW1lID0gby51c2VybmFtZSwgdC5wYXNzd29yZCA9IG8ucGFzc3dvcmQsIHQuaG9zdCA9IG8uaG9zdCwgdC5wb3J0ID0gby5wb3J0LCB0LnBhdGggPSBvLnBhdGguc2xpY2UoKSwgdC5xdWVyeSA9IG8ucXVlcnk7ZWxzZSBpZiAoXCIvXCIgPT0gYSB8fCBcIlxcXFxcIiA9PSBhICYmIFgodCkpIHMgPSBhdDtlbHNlIGlmIChcIj9cIiA9PSBhKSB0LnVzZXJuYW1lID0gby51c2VybmFtZSwgdC5wYXNzd29yZCA9IG8ucGFzc3dvcmQsIHQuaG9zdCA9IG8uaG9zdCwgdC5wb3J0ID0gby5wb3J0LCB0LnBhdGggPSBvLnBhdGguc2xpY2UoKSwgdC5xdWVyeSA9IFwiXCIsIHMgPSBtdDtlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXCIjXCIgIT0gYSkge1xuICAgICAgICAgICAgICAgICAgdC51c2VybmFtZSA9IG8udXNlcm5hbWUsIHQucGFzc3dvcmQgPSBvLnBhc3N3b3JkLCB0Lmhvc3QgPSBvLmhvc3QsIHQucG9ydCA9IG8ucG9ydCwgdC5wYXRoID0gby5wYXRoLnNsaWNlKCksIHQucGF0aC5wb3AoKSwgcyA9IHl0O1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQudXNlcm5hbWUgPSBvLnVzZXJuYW1lLCB0LnBhc3N3b3JkID0gby5wYXNzd29yZCwgdC5ob3N0ID0gby5ob3N0LCB0LnBvcnQgPSBvLnBvcnQsIHQucGF0aCA9IG8ucGF0aC5zbGljZSgpLCB0LnF1ZXJ5ID0gby5xdWVyeSwgdC5mcmFnbWVudCA9IFwiXCIsIHMgPSBidDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYXQ6XG4gICAgICAgICAgICAgIGlmICghWCh0KSB8fCBcIi9cIiAhPSBhICYmIFwiXFxcXFwiICE9IGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCIvXCIgIT0gYSkge1xuICAgICAgICAgICAgICAgICAgdC51c2VybmFtZSA9IG8udXNlcm5hbWUsIHQucGFzc3dvcmQgPSBvLnBhc3N3b3JkLCB0Lmhvc3QgPSBvLmhvc3QsIHQucG9ydCA9IG8ucG9ydCwgcyA9IHl0O1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMgPSBmdDtcbiAgICAgICAgICAgICAgfSBlbHNlIHMgPSBjdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHV0OlxuICAgICAgICAgICAgICBpZiAocyA9IGN0LCBcIi9cIiAhPSBhIHx8IFwiL1wiICE9IHYuY2hhckF0KHAgKyAxKSkgY29udGludWU7XG4gICAgICAgICAgICAgIHArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGN0OlxuICAgICAgICAgICAgICBpZiAoXCIvXCIgIT0gYSAmJiBcIlxcXFxcIiAhPSBhKSB7XG4gICAgICAgICAgICAgICAgcyA9IGZ0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmdDpcbiAgICAgICAgICAgICAgaWYgKFwiQFwiID09IGEpIHtcbiAgICAgICAgICAgICAgICBnICYmICh2ID0gXCIlNDBcIiArIHYpLCBnID0gITAsIHUgPSBoKHYpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG0gPSB1W3hdO1xuICAgICAgICAgICAgICAgICAgaWYgKFwiOlwiICE9IG0gfHwgeSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IEcobSwgJCk7XG4gICAgICAgICAgICAgICAgICAgIHkgPyB0LnBhc3N3b3JkICs9IGIgOiB0LnVzZXJuYW1lICs9IGI7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ID0gXCJcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhID09IHIgfHwgXCIvXCIgPT0gYSB8fCBcIj9cIiA9PSBhIHx8IFwiI1wiID09IGEgfHwgXCJcXFxcXCIgPT0gYSAmJiBYKHQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGcgJiYgXCJcIiA9PSB2KSByZXR1cm4gXCJJbnZhbGlkIGF1dGhvcml0eVwiO1xuICAgICAgICAgICAgICAgIHAgLT0gaCh2KS5sZW5ndGggKyAxLCB2ID0gXCJcIiwgcyA9IHN0O1xuICAgICAgICAgICAgICB9IGVsc2UgdiArPSBhO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc3Q6XG4gICAgICAgICAgICBjYXNlIGx0OlxuICAgICAgICAgICAgICBpZiAoZSAmJiBcImZpbGVcIiA9PSB0LnNjaGVtZSkge1xuICAgICAgICAgICAgICAgIHMgPSBndDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXCI6XCIgIT0gYSB8fCBkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT0gciB8fCBcIi9cIiA9PSBhIHx8IFwiP1wiID09IGEgfHwgXCIjXCIgPT0gYSB8fCBcIlxcXFxcIiA9PSBhICYmIFgodCkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChYKHQpICYmIFwiXCIgPT0gdikgcmV0dXJuIFwiSW52YWxpZCBob3N0XCI7XG4gICAgICAgICAgICAgICAgICBpZiAoZSAmJiBcIlwiID09IHYgJiYgKFkodCkgfHwgbnVsbCAhPT0gdC5wb3J0KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgaWYgKGMgPSBGKHQsIHYpKSByZXR1cm4gYztcbiAgICAgICAgICAgICAgICAgIGlmICh2ID0gXCJcIiwgcyA9IGR0LCBlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXCJbXCIgPT0gYSA/IGQgPSAhMCA6IFwiXVwiID09IGEgJiYgKGQgPSAhMSksIHYgKz0gYTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PSB2KSByZXR1cm4gXCJJbnZhbGlkIGhvc3RcIjtcbiAgICAgICAgICAgICAgICBpZiAoYyA9IEYodCwgdikpIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIGlmICh2ID0gXCJcIiwgcyA9IHB0LCBlID09IGx0KSByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHB0OlxuICAgICAgICAgICAgICBpZiAoIUkudGVzdChhKSkge1xuICAgICAgICAgICAgICAgIGlmIChhID09IHIgfHwgXCIvXCIgPT0gYSB8fCBcIj9cIiA9PSBhIHx8IFwiI1wiID09IGEgfHwgXCJcXFxcXCIgPT0gYSAmJiBYKHQpIHx8IGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTID4gNjU1MzUpIHJldHVybiBcIkludmFsaWQgcG9ydFwiO1xuICAgICAgICAgICAgICAgICAgICB0LnBvcnQgPSBYKHQpICYmIFMgPT09IFZbdC5zY2hlbWVdID8gbnVsbCA6IFMsIHYgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIHMgPSBkdDtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHBvcnRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2ICs9IGE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBodDpcbiAgICAgICAgICAgICAgaWYgKHQuc2NoZW1lID0gXCJmaWxlXCIsIFwiL1wiID09IGEgfHwgXCJcXFxcXCIgPT0gYSkgcyA9IHZ0O2Vsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbyB8fCBcImZpbGVcIiAhPSBvLnNjaGVtZSkge1xuICAgICAgICAgICAgICAgICAgcyA9IHl0O1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhID09IHIpIHQuaG9zdCA9IG8uaG9zdCwgdC5wYXRoID0gby5wYXRoLnNsaWNlKCksIHQucXVlcnkgPSBvLnF1ZXJ5O2Vsc2UgaWYgKFwiP1wiID09IGEpIHQuaG9zdCA9IG8uaG9zdCwgdC5wYXRoID0gby5wYXRoLnNsaWNlKCksIHQucXVlcnkgPSBcIlwiLCBzID0gbXQ7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXCIjXCIgIT0gYSkge1xuICAgICAgICAgICAgICAgICAgICBIKGkuc2xpY2UocCkuam9pbihcIlwiKSkgfHwgKHQuaG9zdCA9IG8uaG9zdCwgdC5wYXRoID0gby5wYXRoLnNsaWNlKCksIFEodCkpLCBzID0geXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdC5ob3N0ID0gby5ob3N0LCB0LnBhdGggPSBvLnBhdGguc2xpY2UoKSwgdC5xdWVyeSA9IG8ucXVlcnksIHQuZnJhZ21lbnQgPSBcIlwiLCBzID0gYnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB2dDpcbiAgICAgICAgICAgICAgaWYgKFwiL1wiID09IGEgfHwgXCJcXFxcXCIgPT0gYSkge1xuICAgICAgICAgICAgICAgIHMgPSBndDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvICYmIFwiZmlsZVwiID09IG8uc2NoZW1lICYmICFIKGkuc2xpY2UocCkuam9pbihcIlwiKSkgJiYgKEooby5wYXRoWzBdLCAhMCkgPyB0LnBhdGgucHVzaChvLnBhdGhbMF0pIDogdC5ob3N0ID0gby5ob3N0KSwgcyA9IHl0O1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNhc2UgZ3Q6XG4gICAgICAgICAgICAgIGlmIChhID09IHIgfHwgXCIvXCIgPT0gYSB8fCBcIlxcXFxcIiA9PSBhIHx8IFwiP1wiID09IGEgfHwgXCIjXCIgPT0gYSkge1xuICAgICAgICAgICAgICAgIGlmICghZSAmJiBKKHYpKSBzID0geXQ7ZWxzZSBpZiAoXCJcIiA9PSB2KSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5ob3N0ID0gXCJcIiwgZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgcyA9IGR0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYyA9IEYodCwgdikpIHJldHVybiBjO1xuICAgICAgICAgICAgICAgICAgaWYgKFwibG9jYWxob3N0XCIgPT0gdC5ob3N0ICYmICh0Lmhvc3QgPSBcIlwiKSwgZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgdiA9IFwiXCIsIHMgPSBkdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdiArPSBhO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZHQ6XG4gICAgICAgICAgICAgIGlmIChYKHQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMgPSB5dCwgXCIvXCIgIT0gYSAmJiBcIlxcXFxcIiAhPSBhKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIHx8IFwiP1wiICE9IGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSB8fCBcIiNcIiAhPSBhKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYSAhPSByICYmIChzID0geXQsIFwiL1wiICE9IGEpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdC5mcmFnbWVudCA9IFwiXCIsIHMgPSBidDtcbiAgICAgICAgICAgICAgfSBlbHNlIHQucXVlcnkgPSBcIlwiLCBzID0gbXQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB5dDpcbiAgICAgICAgICAgICAgaWYgKGEgPT0gciB8fCBcIi9cIiA9PSBhIHx8IFwiXFxcXFwiID09IGEgJiYgWCh0KSB8fCAhZSAmJiAoXCI/XCIgPT0gYSB8fCBcIiNcIiA9PSBhKSkge1xuICAgICAgICAgICAgICAgIGlmIChcIi4uXCIgPT09IChmID0gKGYgPSB2KS50b0xvd2VyQ2FzZSgpKSB8fCBcIiUyZS5cIiA9PT0gZiB8fCBcIi4lMmVcIiA9PT0gZiB8fCBcIiUyZSUyZVwiID09PSBmID8gKFEodCksIFwiL1wiID09IGEgfHwgXCJcXFxcXCIgPT0gYSAmJiBYKHQpIHx8IHQucGF0aC5wdXNoKFwiXCIpKSA6IFoodikgPyBcIi9cIiA9PSBhIHx8IFwiXFxcXFwiID09IGEgJiYgWCh0KSB8fCB0LnBhdGgucHVzaChcIlwiKSA6IChcImZpbGVcIiA9PSB0LnNjaGVtZSAmJiAhdC5wYXRoLmxlbmd0aCAmJiBKKHYpICYmICh0Lmhvc3QgJiYgKHQuaG9zdCA9IFwiXCIpLCB2ID0gdi5jaGFyQXQoMCkgKyBcIjpcIiksIHQucGF0aC5wdXNoKHYpKSwgdiA9IFwiXCIsIFwiZmlsZVwiID09IHQuc2NoZW1lICYmIChhID09IHIgfHwgXCI/XCIgPT0gYSB8fCBcIiNcIiA9PSBhKSkgZm9yICg7IHQucGF0aC5sZW5ndGggPiAxICYmIFwiXCIgPT09IHQucGF0aFswXTspIHQucGF0aC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIFwiP1wiID09IGEgPyAodC5xdWVyeSA9IFwiXCIsIHMgPSBtdCkgOiBcIiNcIiA9PSBhICYmICh0LmZyYWdtZW50ID0gXCJcIiwgcyA9IGJ0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHYgKz0gRyhhLCBXKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHh0OlxuICAgICAgICAgICAgICBcIj9cIiA9PSBhID8gKHQucXVlcnkgPSBcIlwiLCBzID0gbXQpIDogXCIjXCIgPT0gYSA/ICh0LmZyYWdtZW50ID0gXCJcIiwgcyA9IGJ0KSA6IGEgIT0gciAmJiAodC5wYXRoWzBdICs9IEcoYSwgcSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbXQ6XG4gICAgICAgICAgICAgIGUgfHwgXCIjXCIgIT0gYSA/IGEgIT0gciAmJiAoXCInXCIgPT0gYSAmJiBYKHQpID8gdC5xdWVyeSArPSBcIiUyN1wiIDogdC5xdWVyeSArPSBcIiNcIiA9PSBhID8gXCIlMjNcIiA6IEcoYSwgcSkpIDogKHQuZnJhZ21lbnQgPSBcIlwiLCBzID0gYnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYnQ6XG4gICAgICAgICAgICAgIGEgIT0gciAmJiAodC5mcmFnbWVudCArPSBHKGEsIEIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCsrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgRXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIgPSBzKHRoaXMsIEV0LCBcIlVSTFwiKSxcbiAgICAgICAgICBvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDAsXG4gICAgICAgICAgYSA9IFN0cmluZyh0KSxcbiAgICAgICAgICB1ID0gRShyLCB7XG4gICAgICAgICAgICB0eXBlOiBcIlVSTFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IG8pIGlmIChvIGluc3RhbmNlb2YgRXQpIG4gPSB3KG8pO2Vsc2UgaWYgKGUgPSBTdChuID0ge30sIFN0cmluZyhvKSkpIHRocm93IFR5cGVFcnJvcihlKTtcbiAgICAgICAgaWYgKGUgPSBTdCh1LCBhLCBudWxsLCBuKSkgdGhyb3cgVHlwZUVycm9yKGUpO1xuICAgICAgICB2YXIgYyA9IHUuc2VhcmNoUGFyYW1zID0gbmV3IGIoKSxcbiAgICAgICAgICBmID0gUyhjKTtcbiAgICAgICAgZi51cGRhdGVTZWFyY2hQYXJhbXModS5xdWVyeSksIGYudXBkYXRlVVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHUucXVlcnkgPSBTdHJpbmcoYykgfHwgbnVsbDtcbiAgICAgICAgfSwgaSB8fCAoci5ocmVmID0gT3QuY2FsbChyKSwgci5vcmlnaW4gPSBSdC5jYWxsKHIpLCByLnByb3RvY29sID0gQXQuY2FsbChyKSwgci51c2VybmFtZSA9IGp0LmNhbGwociksIHIucGFzc3dvcmQgPSBJdC5jYWxsKHIpLCByLmhvc3QgPSBrdC5jYWxsKHIpLCByLmhvc3RuYW1lID0gUHQuY2FsbChyKSwgci5wb3J0ID0gTHQuY2FsbChyKSwgci5wYXRobmFtZSA9IFR0LmNhbGwociksIHIuc2VhcmNoID0gX3QuY2FsbChyKSwgci5zZWFyY2hQYXJhbXMgPSBVdC5jYWxsKHIpLCByLmhhc2ggPSBOdC5jYWxsKHIpKTtcbiAgICAgIH0sXG4gICAgICB3dCA9IEV0LnByb3RvdHlwZSxcbiAgICAgIE90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHcodGhpcyksXG4gICAgICAgICAgbiA9IHQuc2NoZW1lLFxuICAgICAgICAgIGUgPSB0LnVzZXJuYW1lLFxuICAgICAgICAgIHIgPSB0LnBhc3N3b3JkLFxuICAgICAgICAgIG8gPSB0Lmhvc3QsXG4gICAgICAgICAgaSA9IHQucG9ydCxcbiAgICAgICAgICBhID0gdC5wYXRoLFxuICAgICAgICAgIHUgPSB0LnF1ZXJ5LFxuICAgICAgICAgIGMgPSB0LmZyYWdtZW50LFxuICAgICAgICAgIGYgPSBuICsgXCI6XCI7XG4gICAgICAgIHJldHVybiBudWxsICE9PSBvID8gKGYgKz0gXCIvL1wiLCBZKHQpICYmIChmICs9IGUgKyAociA/IFwiOlwiICsgciA6IFwiXCIpICsgXCJAXCIpLCBmICs9IEQobyksIG51bGwgIT09IGkgJiYgKGYgKz0gXCI6XCIgKyBpKSkgOiBcImZpbGVcIiA9PSBuICYmIChmICs9IFwiLy9cIiksIGYgKz0gdC5jYW5ub3RCZUFCYXNlVVJMID8gYVswXSA6IGEubGVuZ3RoID8gXCIvXCIgKyBhLmpvaW4oXCIvXCIpIDogXCJcIiwgbnVsbCAhPT0gdSAmJiAoZiArPSBcIj9cIiArIHUpLCBudWxsICE9PSBjICYmIChmICs9IFwiI1wiICsgYyksIGY7XG4gICAgICB9LFxuICAgICAgUnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdyh0aGlzKSxcbiAgICAgICAgICBuID0gdC5zY2hlbWUsXG4gICAgICAgICAgZSA9IHQucG9ydDtcbiAgICAgICAgaWYgKFwiYmxvYlwiID09IG4pIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVUkwobi5wYXRoWzBdKS5vcmlnaW47XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiZmlsZVwiICE9IG4gJiYgWCh0KSA/IG4gKyBcIjovL1wiICsgRCh0Lmhvc3QpICsgKG51bGwgIT09IGUgPyBcIjpcIiArIGUgOiBcIlwiKSA6IFwibnVsbFwiO1xuICAgICAgfSxcbiAgICAgIEF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdyh0aGlzKS5zY2hlbWUgKyBcIjpcIjtcbiAgICAgIH0sXG4gICAgICBqdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHcodGhpcykudXNlcm5hbWU7XG4gICAgICB9LFxuICAgICAgSXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3KHRoaXMpLnBhc3N3b3JkO1xuICAgICAgfSxcbiAgICAgIGt0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHcodGhpcyksXG4gICAgICAgICAgbiA9IHQuaG9zdCxcbiAgICAgICAgICBlID0gdC5wb3J0O1xuICAgICAgICByZXR1cm4gbnVsbCA9PT0gbiA/IFwiXCIgOiBudWxsID09PSBlID8gRChuKSA6IEQobikgKyBcIjpcIiArIGU7XG4gICAgICB9LFxuICAgICAgUHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdyh0aGlzKS5ob3N0O1xuICAgICAgICByZXR1cm4gbnVsbCA9PT0gdCA/IFwiXCIgOiBEKHQpO1xuICAgICAgfSxcbiAgICAgIEx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHcodGhpcykucG9ydDtcbiAgICAgICAgcmV0dXJuIG51bGwgPT09IHQgPyBcIlwiIDogU3RyaW5nKHQpO1xuICAgICAgfSxcbiAgICAgIFR0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHcodGhpcyksXG4gICAgICAgICAgbiA9IHQucGF0aDtcbiAgICAgICAgcmV0dXJuIHQuY2Fubm90QmVBQmFzZVVSTCA/IG5bMF0gOiBuLmxlbmd0aCA/IFwiL1wiICsgbi5qb2luKFwiL1wiKSA6IFwiXCI7XG4gICAgICB9LFxuICAgICAgX3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdyh0aGlzKS5xdWVyeTtcbiAgICAgICAgcmV0dXJuIHQgPyBcIj9cIiArIHQgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIFV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdyh0aGlzKS5zZWFyY2hQYXJhbXM7XG4gICAgICB9LFxuICAgICAgTnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdyh0aGlzKS5mcmFnbWVudDtcbiAgICAgICAgcmV0dXJuIHQgPyBcIiNcIiArIHQgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIEN0ID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQ6IHQsXG4gICAgICAgICAgc2V0OiBuLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgaWYgKGkgJiYgYyh3dCwge1xuICAgICAgaHJlZjogQ3QoT3QsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdyh0aGlzKSxcbiAgICAgICAgICBlID0gU3RyaW5nKHQpLFxuICAgICAgICAgIHIgPSBTdChuLCBlKTtcbiAgICAgICAgaWYgKHIpIHRocm93IFR5cGVFcnJvcihyKTtcbiAgICAgICAgUyhuLnNlYXJjaFBhcmFtcykudXBkYXRlU2VhcmNoUGFyYW1zKG4ucXVlcnkpO1xuICAgICAgfSksXG4gICAgICBvcmlnaW46IEN0KFJ0KSxcbiAgICAgIHByb3RvY29sOiBDdChBdCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB3KHRoaXMpO1xuICAgICAgICBTdChuLCBTdHJpbmcodCkgKyBcIjpcIiwgdHQpO1xuICAgICAgfSksXG4gICAgICB1c2VybmFtZTogQ3QoanQsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdyh0aGlzKSxcbiAgICAgICAgICBlID0gaChTdHJpbmcodCkpO1xuICAgICAgICBpZiAoIUsobikpIHtcbiAgICAgICAgICBuLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIG4udXNlcm5hbWUgKz0gRyhlW3JdLCAkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBwYXNzd29yZDogQ3QoSXQsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdyh0aGlzKSxcbiAgICAgICAgICBlID0gaChTdHJpbmcodCkpO1xuICAgICAgICBpZiAoIUsobikpIHtcbiAgICAgICAgICBuLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIG4ucGFzc3dvcmQgKz0gRyhlW3JdLCAkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBob3N0OiBDdChrdCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB3KHRoaXMpO1xuICAgICAgICBuLmNhbm5vdEJlQUJhc2VVUkwgfHwgU3QobiwgU3RyaW5nKHQpLCBzdCk7XG4gICAgICB9KSxcbiAgICAgIGhvc3RuYW1lOiBDdChQdCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB3KHRoaXMpO1xuICAgICAgICBuLmNhbm5vdEJlQUJhc2VVUkwgfHwgU3QobiwgU3RyaW5nKHQpLCBsdCk7XG4gICAgICB9KSxcbiAgICAgIHBvcnQ6IEN0KEx0LCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9IHcodGhpcyk7XG4gICAgICAgIEsobikgfHwgKFwiXCIgPT0gKHQgPSBTdHJpbmcodCkpID8gbi5wb3J0ID0gbnVsbCA6IFN0KG4sIHQsIHB0KSk7XG4gICAgICB9KSxcbiAgICAgIHBhdGhuYW1lOiBDdChUdCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB3KHRoaXMpO1xuICAgICAgICBuLmNhbm5vdEJlQUJhc2VVUkwgfHwgKG4ucGF0aCA9IFtdLCBTdChuLCB0ICsgXCJcIiwgZHQpKTtcbiAgICAgIH0pLFxuICAgICAgc2VhcmNoOiBDdChfdCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB3KHRoaXMpO1xuICAgICAgICBcIlwiID09ICh0ID0gU3RyaW5nKHQpKSA/IG4ucXVlcnkgPSBudWxsIDogKFwiP1wiID09IHQuY2hhckF0KDApICYmICh0ID0gdC5zbGljZSgxKSksIG4ucXVlcnkgPSBcIlwiLCBTdChuLCB0LCBtdCkpLCBTKG4uc2VhcmNoUGFyYW1zKS51cGRhdGVTZWFyY2hQYXJhbXMobi5xdWVyeSk7XG4gICAgICB9KSxcbiAgICAgIHNlYXJjaFBhcmFtczogQ3QoVXQpLFxuICAgICAgaGFzaDogQ3QoTnQsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuID0gdyh0aGlzKTtcbiAgICAgICAgXCJcIiAhPSAodCA9IFN0cmluZyh0KSkgPyAoXCIjXCIgPT0gdC5jaGFyQXQoMCkgJiYgKHQgPSB0LnNsaWNlKDEpKSwgbi5mcmFnbWVudCA9IFwiXCIsIFN0KG4sIHQsIGJ0KSkgOiBuLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgIH0pXG4gICAgfSksIGYod3QsIFwidG9KU09OXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBPdC5jYWxsKHRoaXMpO1xuICAgIH0sIHtcbiAgICAgIGVudW1lcmFibGU6ICEwXG4gICAgfSksIGYod3QsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE90LmNhbGwodGhpcyk7XG4gICAgfSwge1xuICAgICAgZW51bWVyYWJsZTogITBcbiAgICB9KSwgbSkge1xuICAgICAgdmFyIEZ0ID0gbS5jcmVhdGVPYmplY3RVUkwsXG4gICAgICAgIE10ID0gbS5yZXZva2VPYmplY3RVUkw7XG4gICAgICBGdCAmJiBmKEV0LCBcImNyZWF0ZU9iamVjdFVSTFwiLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gRnQuYXBwbHkobSwgYXJndW1lbnRzKTtcbiAgICAgIH0pLCBNdCAmJiBmKEV0LCBcInJldm9rZU9iamVjdFVSTFwiLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gTXQuYXBwbHkobSwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkKEV0LCBcIlVSTFwiKSwgbyh7XG4gICAgICBnbG9iYWw6ICEwLFxuICAgICAgZm9yY2VkOiAhYSxcbiAgICAgIHNoYW06ICFpXG4gICAgfSwge1xuICAgICAgVVJMOiBFdFxuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgIHZhciByID0gZSg2KSxcbiAgICAgIG8gPSBlKDQ5KSxcbiAgICAgIGkgPSBlKDI5KSxcbiAgICAgIGEgPSBvKFwiaXRlcmF0b3JcIik7XG4gICAgdC5leHBvcnRzID0gIXIoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBuZXcgVVJMKFwiYj9hPTEmYj0yJmM9M1wiLCBcImh0dHA6Ly9hXCIpLFxuICAgICAgICBuID0gdC5zZWFyY2hQYXJhbXMsXG4gICAgICAgIGUgPSBcIlwiO1xuICAgICAgcmV0dXJuIHQucGF0aG5hbWUgPSBcImMlMjBkXCIsIG4uZm9yRWFjaChmdW5jdGlvbiAodCwgcikge1xuICAgICAgICBuLmRlbGV0ZShcImJcIiksIGUgKz0gciArIHQ7XG4gICAgICB9KSwgaSAmJiAhdC50b0pTT04gfHwgIW4uc29ydCB8fCBcImh0dHA6Ly9hL2MlMjBkP2E9MSZjPTNcIiAhPT0gdC5ocmVmIHx8IFwiM1wiICE9PSBuLmdldChcImNcIikgfHwgXCJhPTFcIiAhPT0gU3RyaW5nKG5ldyBVUkxTZWFyY2hQYXJhbXMoXCI/YT0xXCIpKSB8fCAhblthXSB8fCBcImFcIiAhPT0gbmV3IFVSTChcImh0dHBzOi8vYUBiXCIpLnVzZXJuYW1lIHx8IFwiYlwiICE9PSBuZXcgVVJMU2VhcmNoUGFyYW1zKG5ldyBVUkxTZWFyY2hQYXJhbXMoXCJhPWJcIikpLmdldChcImFcIikgfHwgXCJ4bi0tZTFheWJjXCIgIT09IG5ldyBVUkwoXCJodHRwOi8v0YLQtdGB0YJcIikuaG9zdCB8fCBcIiMlRDAlQjFcIiAhPT0gbmV3IFVSTChcImh0dHA6Ly9hI9CxXCIpLmhhc2ggfHwgXCJhMWMzXCIgIT09IGUgfHwgXCJ4XCIgIT09IG5ldyBVUkwoXCJodHRwOi8veFwiLCB2b2lkIDApLmhvc3Q7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSAvW15cXDAtXFx1MDA3RV0vLFxuICAgICAgbyA9IC9bLlxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZyxcbiAgICAgIGkgPSBcIk92ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzXCIsXG4gICAgICBhID0gTWF0aC5mbG9vcixcbiAgICAgIHUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuICAgICAgYyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICsgMjIgKyA3NSAqICh0IDwgMjYpO1xuICAgICAgfSxcbiAgICAgIGYgPSBmdW5jdGlvbiAodCwgbiwgZSkge1xuICAgICAgICB2YXIgciA9IDA7XG4gICAgICAgIGZvciAodCA9IGUgPyBhKHQgLyA3MDApIDogdCA+PiAxLCB0ICs9IGEodCAvIG4pOyB0ID4gNDU1OyByICs9IDM2KSB0ID0gYSh0IC8gMzUpO1xuICAgICAgICByZXR1cm4gYShyICsgMzYgKiB0IC8gKHQgKyAzOCkpO1xuICAgICAgfSxcbiAgICAgIHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIgPSBbXSxcbiAgICAgICAgICBvID0gKHQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IFtdLCBlID0gMCwgciA9IHQubGVuZ3RoOyBlIDwgcjspIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSB0LmNoYXJDb2RlQXQoZSsrKTtcbiAgICAgICAgICAgICAgaWYgKG8gPj0gNTUyOTYgJiYgbyA8PSA1NjMxOSAmJiBlIDwgcikge1xuICAgICAgICAgICAgICAgIHZhciBpID0gdC5jaGFyQ29kZUF0KGUrKyk7XG4gICAgICAgICAgICAgICAgNTYzMjAgPT0gKDY0NTEyICYgaSkgPyBuLnB1c2goKCgxMDIzICYgbykgPDwgMTApICsgKDEwMjMgJiBpKSArIDY1NTM2KSA6IChuLnB1c2gobyksIGUtLSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBuLnB1c2gobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICB9KHQpKS5sZW5ndGgsXG4gICAgICAgICAgcyA9IDEyOCxcbiAgICAgICAgICBsID0gMCxcbiAgICAgICAgICBwID0gNzI7XG4gICAgICAgIGZvciAobiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSAoZSA9IHRbbl0pIDwgMTI4ICYmIHIucHVzaCh1KGUpKTtcbiAgICAgICAgdmFyIGggPSByLmxlbmd0aCxcbiAgICAgICAgICB2ID0gaDtcbiAgICAgICAgZm9yIChoICYmIHIucHVzaChcIi1cIik7IHYgPCBvOykge1xuICAgICAgICAgIHZhciBnID0gMjE0NzQ4MzY0NztcbiAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykgKGUgPSB0W25dKSA+PSBzICYmIGUgPCBnICYmIChnID0gZSk7XG4gICAgICAgICAgdmFyIGQgPSB2ICsgMTtcbiAgICAgICAgICBpZiAoZyAtIHMgPiBhKCgyMTQ3NDgzNjQ3IC0gbCkgLyBkKSkgdGhyb3cgUmFuZ2VFcnJvcihpKTtcbiAgICAgICAgICBmb3IgKGwgKz0gKGcgLSBzKSAqIGQsIHMgPSBnLCBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGlmICgoZSA9IHRbbl0pIDwgcyAmJiArK2wgPiAyMTQ3NDgzNjQ3KSB0aHJvdyBSYW5nZUVycm9yKGkpO1xuICAgICAgICAgICAgaWYgKGUgPT0gcykge1xuICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gbCwgeCA9IDM2OzsgeCArPSAzNikge1xuICAgICAgICAgICAgICAgIHZhciBtID0geCA8PSBwID8gMSA6IHggPj0gcCArIDI2ID8gMjYgOiB4IC0gcDtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IG0pIGJyZWFrO1xuICAgICAgICAgICAgICAgIHZhciBiID0geSAtIG0sXG4gICAgICAgICAgICAgICAgICBTID0gMzYgLSBtO1xuICAgICAgICAgICAgICAgIHIucHVzaCh1KGMobSArIGIgJSBTKSkpLCB5ID0gYShiIC8gUyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgci5wdXNoKHUoYyh5KSkpLCBwID0gZihsLCBkLCB2ID09IGgpLCBsID0gMCwgKyt2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICArK2wsICsrcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gci5qb2luKFwiXCIpO1xuICAgICAgfTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4sXG4gICAgICAgIGUsXG4gICAgICAgIGkgPSBbXSxcbiAgICAgICAgYSA9IHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG8sIFwiLlwiKS5zcGxpdChcIi5cIik7XG4gICAgICBmb3IgKG4gPSAwOyBuIDwgYS5sZW5ndGg7IG4rKykgZSA9IGFbbl0sIGkucHVzaChyLnRlc3QoZSkgPyBcInhuLS1cIiArIHMoZSkgOiBlKTtcbiAgICAgIHJldHVybiBpLmpvaW4oXCIuXCIpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgZSg4OSk7XG4gICAgdmFyIHIgPSBlKDIpLFxuICAgICAgbyA9IGUoMzQpLFxuICAgICAgaSA9IGUoMjQ0KSxcbiAgICAgIGEgPSBlKDIxKSxcbiAgICAgIHUgPSBlKDEyNiksXG4gICAgICBjID0gZSg5NSksXG4gICAgICBmID0gZSg5MSksXG4gICAgICBzID0gZSgyNSksXG4gICAgICBsID0gZSgxMjMpLFxuICAgICAgcCA9IGUoMTUpLFxuICAgICAgaCA9IGUoNjQpLFxuICAgICAgdiA9IGUoODQpLFxuICAgICAgZyA9IGUoMjApLFxuICAgICAgZCA9IGUoMTQpLFxuICAgICAgeSA9IGUoNTgpLFxuICAgICAgeCA9IGUoOCksXG4gICAgICBtID0gZSgyNDcpLFxuICAgICAgYiA9IGUoODMpLFxuICAgICAgUyA9IGUoNDkpLFxuICAgICAgRSA9IG8oXCJmZXRjaFwiKSxcbiAgICAgIHcgPSBvKFwiSGVhZGVyc1wiKSxcbiAgICAgIE8gPSBTKFwiaXRlcmF0b3JcIiksXG4gICAgICBSID0gcy5zZXQsXG4gICAgICBBID0gcy5nZXR0ZXJGb3IoXCJVUkxTZWFyY2hQYXJhbXNcIiksXG4gICAgICBqID0gcy5nZXR0ZXJGb3IoXCJVUkxTZWFyY2hQYXJhbXNJdGVyYXRvclwiKSxcbiAgICAgIEkgPSAvXFwrL2csXG4gICAgICBrID0gQXJyYXkoNCksXG4gICAgICBQID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGtbdCAtIDFdIHx8IChrW3QgLSAxXSA9IFJlZ0V4cChcIigoPzolW1xcXFxkYS1mXXsyfSl7XCIgKyB0ICsgXCJ9KVwiLCBcImdpXCIpKTtcbiAgICAgIH0sXG4gICAgICBMID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHQpO1xuICAgICAgICB9IGNhdGNoIChuKSB7XG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBUID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSB0LnJlcGxhY2UoSSwgXCIgXCIpLFxuICAgICAgICAgIGUgPSA0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobik7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBmb3IgKDsgZTspIG4gPSBuLnJlcGxhY2UoUChlLS0pLCBMKTtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF8gPSAvWyEnKCl+XXwlMjAvZyxcbiAgICAgIFUgPSB7XG4gICAgICAgIFwiIVwiOiBcIiUyMVwiLFxuICAgICAgICBcIidcIjogXCIlMjdcIixcbiAgICAgICAgXCIoXCI6IFwiJTI4XCIsXG4gICAgICAgIFwiKVwiOiBcIiUyOVwiLFxuICAgICAgICBcIn5cIjogXCIlN0VcIixcbiAgICAgICAgXCIlMjBcIjogXCIrXCJcbiAgICAgIH0sXG4gICAgICBOID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIFVbdF07XG4gICAgICB9LFxuICAgICAgQyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZShfLCBOKTtcbiAgICAgIH0sXG4gICAgICBGID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgaWYgKG4pIGZvciAodmFyIGUsIHIsIG8gPSBuLnNwbGl0KFwiJlwiKSwgaSA9IDA7IGkgPCBvLmxlbmd0aDspIChlID0gb1tpKytdKS5sZW5ndGggJiYgKHIgPSBlLnNwbGl0KFwiPVwiKSwgdC5wdXNoKHtcbiAgICAgICAgICBrZXk6IFQoci5zaGlmdCgpKSxcbiAgICAgICAgICB2YWx1ZTogVChyLmpvaW4oXCI9XCIpKVxuICAgICAgICB9KSk7XG4gICAgICB9LFxuICAgICAgTSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuZW50cmllcy5sZW5ndGggPSAwLCBGKHRoaXMuZW50cmllcywgdCk7XG4gICAgICB9LFxuICAgICAgeiA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIGlmICh0IDwgbikgdGhyb3cgVHlwZUVycm9yKFwiTm90IGVub3VnaCBhcmd1bWVudHNcIik7XG4gICAgICB9LFxuICAgICAgRCA9IGYoZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgUih0aGlzLCB7XG4gICAgICAgICAgdHlwZTogXCJVUkxTZWFyY2hQYXJhbXNJdGVyYXRvclwiLFxuICAgICAgICAgIGl0ZXJhdG9yOiBtKEEodCkuZW50cmllcyksXG4gICAgICAgICAga2luZDogblxuICAgICAgICB9KTtcbiAgICAgIH0sIFwiSXRlcmF0b3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IGoodGhpcyksXG4gICAgICAgICAgbiA9IHQua2luZCxcbiAgICAgICAgICBlID0gdC5pdGVyYXRvci5uZXh0KCksXG4gICAgICAgICAgciA9IGUudmFsdWU7XG4gICAgICAgIHJldHVybiBlLmRvbmUgfHwgKGUudmFsdWUgPSBcImtleXNcIiA9PT0gbiA/IHIua2V5IDogXCJ2YWx1ZXNcIiA9PT0gbiA/IHIudmFsdWUgOiBbci5rZXksIHIudmFsdWVdKSwgZTtcbiAgICAgIH0pLFxuICAgICAgcSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbCh0aGlzLCBxLCBcIlVSTFNlYXJjaFBhcmFtc1wiKTtcbiAgICAgICAgdmFyIHQsXG4gICAgICAgICAgbixcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBjLFxuICAgICAgICAgIGYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHZvaWQgMCxcbiAgICAgICAgICBzID0gdGhpcyxcbiAgICAgICAgICBoID0gW107XG4gICAgICAgIGlmIChSKHMsIHtcbiAgICAgICAgICB0eXBlOiBcIlVSTFNlYXJjaFBhcmFtc1wiLFxuICAgICAgICAgIGVudHJpZXM6IGgsXG4gICAgICAgICAgdXBkYXRlVVJMOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICB1cGRhdGVTZWFyY2hQYXJhbXM6IE1cbiAgICAgICAgfSksIHZvaWQgMCAhPT0gZikgaWYgKGQoZikpIHtcbiAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiAodCA9IGIoZikpKSBmb3IgKGUgPSAobiA9IHQuY2FsbChmKSkubmV4dDsgIShyID0gZS5jYWxsKG4pKS5kb25lOykge1xuICAgICAgICAgICAgaWYgKChhID0gKGkgPSAobyA9IG0oZyhyLnZhbHVlKSkpLm5leHQpLmNhbGwobykpLmRvbmUgfHwgKHUgPSBpLmNhbGwobykpLmRvbmUgfHwgIWkuY2FsbChvKS5kb25lKSB0aHJvdyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBzZXF1ZW5jZSB3aXRoIGxlbmd0aCAyXCIpO1xuICAgICAgICAgICAgaC5wdXNoKHtcbiAgICAgICAgICAgICAga2V5OiBhLnZhbHVlICsgXCJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHUudmFsdWUgKyBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgZm9yIChjIGluIGYpIHAoZiwgYykgJiYgaC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogYyxcbiAgICAgICAgICAgIHZhbHVlOiBmW2NdICsgXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgRihoLCBcInN0cmluZ1wiID09IHR5cGVvZiBmID8gXCI/XCIgPT09IGYuY2hhckF0KDApID8gZi5zbGljZSgxKSA6IGYgOiBmICsgXCJcIik7XG4gICAgICB9LFxuICAgICAgQiA9IHEucHJvdG90eXBlO1xuICAgIHUoQiwge1xuICAgICAgYXBwZW5kOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB6KGFyZ3VtZW50cy5sZW5ndGgsIDIpO1xuICAgICAgICB2YXIgZSA9IEEodGhpcyk7XG4gICAgICAgIGUuZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBrZXk6IHQgKyBcIlwiLFxuICAgICAgICAgIHZhbHVlOiBuICsgXCJcIlxuICAgICAgICB9KSwgZS51cGRhdGVVUkwoKTtcbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHooYXJndW1lbnRzLmxlbmd0aCwgMSk7XG4gICAgICAgIGZvciAodmFyIG4gPSBBKHRoaXMpLCBlID0gbi5lbnRyaWVzLCByID0gdCArIFwiXCIsIG8gPSAwOyBvIDwgZS5sZW5ndGg7KSBlW29dLmtleSA9PT0gciA/IGUuc3BsaWNlKG8sIDEpIDogbysrO1xuICAgICAgICBuLnVwZGF0ZVVSTCgpO1xuICAgICAgfSxcbiAgICAgIGdldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgeihhcmd1bWVudHMubGVuZ3RoLCAxKTtcbiAgICAgICAgZm9yICh2YXIgbiA9IEEodGhpcykuZW50cmllcywgZSA9IHQgKyBcIlwiLCByID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIGlmIChuW3JdLmtleSA9PT0gZSkgcmV0dXJuIG5bcl0udmFsdWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIGdldEFsbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgeihhcmd1bWVudHMubGVuZ3RoLCAxKTtcbiAgICAgICAgZm9yICh2YXIgbiA9IEEodGhpcykuZW50cmllcywgZSA9IHQgKyBcIlwiLCByID0gW10sIG8gPSAwOyBvIDwgbi5sZW5ndGg7IG8rKykgbltvXS5rZXkgPT09IGUgJiYgci5wdXNoKG5bb10udmFsdWUpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sXG4gICAgICBoYXM6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHooYXJndW1lbnRzLmxlbmd0aCwgMSk7XG4gICAgICAgIGZvciAodmFyIG4gPSBBKHRoaXMpLmVudHJpZXMsIGUgPSB0ICsgXCJcIiwgciA9IDA7IHIgPCBuLmxlbmd0aDspIGlmIChuW3IrK10ua2V5ID09PSBlKSByZXR1cm4gITA7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgIHooYXJndW1lbnRzLmxlbmd0aCwgMSk7XG4gICAgICAgIGZvciAodmFyIGUsIHIgPSBBKHRoaXMpLCBvID0gci5lbnRyaWVzLCBpID0gITEsIGEgPSB0ICsgXCJcIiwgdSA9IG4gKyBcIlwiLCBjID0gMDsgYyA8IG8ubGVuZ3RoOyBjKyspIChlID0gb1tjXSkua2V5ID09PSBhICYmIChpID8gby5zcGxpY2UoYy0tLCAxKSA6IChpID0gITAsIGUudmFsdWUgPSB1KSk7XG4gICAgICAgIGkgfHwgby5wdXNoKHtcbiAgICAgICAgICBrZXk6IGEsXG4gICAgICAgICAgdmFsdWU6IHVcbiAgICAgICAgfSksIHIudXBkYXRlVVJMKCk7XG4gICAgICB9LFxuICAgICAgc29ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICBuLFxuICAgICAgICAgIGUsXG4gICAgICAgICAgciA9IEEodGhpcyksXG4gICAgICAgICAgbyA9IHIuZW50cmllcyxcbiAgICAgICAgICBpID0gby5zbGljZSgpO1xuICAgICAgICBmb3IgKG8ubGVuZ3RoID0gMCwgZSA9IDA7IGUgPCBpLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgZm9yICh0ID0gaVtlXSwgbiA9IDA7IG4gPCBlOyBuKyspIGlmIChvW25dLmtleSA+IHQua2V5KSB7XG4gICAgICAgICAgICBvLnNwbGljZShuLCAwLCB0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuID09PSBlICYmIG8ucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICByLnVwZGF0ZVVSTCgpO1xuICAgICAgfSxcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZvciAodmFyIG4sIGUgPSBBKHRoaXMpLmVudHJpZXMsIHIgPSBoKHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwLCAzKSwgbyA9IDA7IG8gPCBlLmxlbmd0aDspIHIoKG4gPSBlW28rK10pLnZhbHVlLCBuLmtleSwgdGhpcyk7XG4gICAgICB9LFxuICAgICAga2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEQodGhpcywgXCJrZXlzXCIpO1xuICAgICAgfSxcbiAgICAgIHZhbHVlczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEQodGhpcywgXCJ2YWx1ZXNcIik7XG4gICAgICB9LFxuICAgICAgZW50cmllczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEQodGhpcywgXCJlbnRyaWVzXCIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGVudW1lcmFibGU6ICEwXG4gICAgfSksIGEoQiwgTywgQi5lbnRyaWVzKSwgYShCLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIHQsIG4gPSBBKHRoaXMpLmVudHJpZXMsIGUgPSBbXSwgciA9IDA7IHIgPCBuLmxlbmd0aDspIHQgPSBuW3IrK10sIGUucHVzaChDKHQua2V5KSArIFwiPVwiICsgQyh0LnZhbHVlKSk7XG4gICAgICByZXR1cm4gZS5qb2luKFwiJlwiKTtcbiAgICB9LCB7XG4gICAgICBlbnVtZXJhYmxlOiAhMFxuICAgIH0pLCBjKHEsIFwiVVJMU2VhcmNoUGFyYW1zXCIpLCByKHtcbiAgICAgIGdsb2JhbDogITAsXG4gICAgICBmb3JjZWQ6ICFpXG4gICAgfSwge1xuICAgICAgVVJMU2VhcmNoUGFyYW1zOiBxXG4gICAgfSksIGkgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBFIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdyB8fCByKHtcbiAgICAgIGdsb2JhbDogITAsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGZvcmNlZDogITBcbiAgICB9LCB7XG4gICAgICBmZXRjaDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgZSxcbiAgICAgICAgICByLFxuICAgICAgICAgIG8gPSBbdF07XG4gICAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiAobiA9IGFyZ3VtZW50c1sxXSwgZChuKSAmJiAoZSA9IG4uYm9keSwgXCJVUkxTZWFyY2hQYXJhbXNcIiA9PT0gdihlKSAmJiAoKHIgPSBuLmhlYWRlcnMgPyBuZXcgdyhuLmhlYWRlcnMpIDogbmV3IHcoKSkuaGFzKFwiY29udGVudC10eXBlXCIpIHx8IHIuc2V0KFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIiksIG4gPSB5KG4sIHtcbiAgICAgICAgICBib2R5OiB4KDAsIFN0cmluZyhlKSksXG4gICAgICAgICAgaGVhZGVyczogeCgwLCByKVxuICAgICAgICB9KSkpLCBvLnB1c2gobikpLCBFLmFwcGx5KHRoaXMsIG8pO1xuICAgICAgfVxuICAgIH0pLCB0LmV4cG9ydHMgPSB7XG4gICAgICBVUkxTZWFyY2hQYXJhbXM6IHEsXG4gICAgICBnZXRTdGF0ZTogQVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uICh0LCBuLCBlKSB7XG4gICAgdmFyIHIgPSBlKDIwKSxcbiAgICAgIG8gPSBlKDgzKTtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIG4gPSBvKHQpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbikgdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgICAgIHJldHVybiByKG4uY2FsbCh0KSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKHQsIG4sIGUpIHtcbiAgICBlKDIpKHtcbiAgICAgIHRhcmdldDogXCJVUkxcIixcbiAgICAgIHByb3RvOiAhMCxcbiAgICAgIGVudW1lcmFibGU6ICEwXG4gICAgfSwge1xuICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBVUkwucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1dKTtcbn0oKTtcblxuLy8hZmV0Y2ggMy4wLjAsIGdsb2JhbCBcInRoaXNcIiBtdXN0IGJlIHJlcGxhY2VkIHdpdGggXCJ3aW5kb3dcIlxuLy8gSUlGRSB2ZXJzaW9uXG4hZnVuY3Rpb24gKHQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGUgPSBcIlVSTFNlYXJjaFBhcmFtc1wiIGluIHNlbGYsXG4gICAgciA9IFwiU3ltYm9sXCIgaW4gc2VsZiAmJiBcIml0ZXJhdG9yXCIgaW4gU3ltYm9sLFxuICAgIG8gPSBcIkZpbGVSZWFkZXJcIiBpbiBzZWxmICYmIFwiQmxvYlwiIGluIHNlbGYgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKCksICEwO1xuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgfSgpLFxuICAgIG4gPSBcIkZvcm1EYXRhXCIgaW4gc2VsZixcbiAgICBpID0gXCJBcnJheUJ1ZmZlclwiIGluIHNlbGY7XG4gIGlmIChpKSB2YXIgcyA9IFtcIltvYmplY3QgSW50OEFycmF5XVwiLCBcIltvYmplY3QgVWludDhBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiLCBcIltvYmplY3QgSW50MTZBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiLCBcIltvYmplY3QgSW50MzJBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLCBcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLCBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXSxcbiAgICBhID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCAmJiBzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKSA+IC0xO1xuICAgIH07XG4gIGZ1bmN0aW9uIGgodCkge1xuICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiB0ICYmICh0ID0gU3RyaW5nKHQpKSwgL1teYS16MC05XFwtIyQlJicqKy5eX2B8fl0vaS50ZXN0KHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWVcIik7XG4gICAgcmV0dXJuIHQudG9Mb3dlckNhc2UoKTtcbiAgfVxuICBmdW5jdGlvbiB1KHQpIHtcbiAgICByZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCAmJiAodCA9IFN0cmluZyh0KSksIHQ7XG4gIH1cbiAgZnVuY3Rpb24gZih0KSB7XG4gICAgdmFyIGUgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdC5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHZvaWQgMCA9PT0gZSxcbiAgICAgICAgICB2YWx1ZTogZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHIgJiYgKGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pLCBlO1xuICB9XG4gIGZ1bmN0aW9uIGQodCkge1xuICAgIHRoaXMubWFwID0ge30sIHQgaW5zdGFuY2VvZiBkID8gdC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICB0aGlzLmFwcGVuZChlLCB0KTtcbiAgICB9LCB0aGlzKSA6IEFycmF5LmlzQXJyYXkodCkgPyB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHRoaXMuYXBwZW5kKHRbMF0sIHRbMV0pO1xuICAgIH0sIHRoaXMpIDogdCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLmFwcGVuZChlLCB0W2VdKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuICBmdW5jdGlvbiBjKHQpIHtcbiAgICBpZiAodC5ib2R5VXNlZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJBbHJlYWR5IHJlYWRcIikpO1xuICAgIHQuYm9keVVzZWQgPSAhMDtcbiAgfVxuICBmdW5jdGlvbiBwKHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgIHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBlKHQucmVzdWx0KTtcbiAgICAgIH0sIHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcih0LmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24geSh0KSB7XG4gICAgdmFyIGUgPSBuZXcgRmlsZVJlYWRlcigpLFxuICAgICAgciA9IHAoZSk7XG4gICAgcmV0dXJuIGUucmVhZEFzQXJyYXlCdWZmZXIodCksIHI7XG4gIH1cbiAgZnVuY3Rpb24gbCh0KSB7XG4gICAgaWYgKHQuc2xpY2UpIHJldHVybiB0LnNsaWNlKDApO1xuICAgIHZhciBlID0gbmV3IFVpbnQ4QXJyYXkodC5ieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gZS5zZXQobmV3IFVpbnQ4QXJyYXkodCkpLCBlLmJ1ZmZlcjtcbiAgfVxuICBmdW5jdGlvbiBiKCkge1xuICAgIHJldHVybiB0aGlzLmJvZHlVc2VkID0gITEsIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5fYm9keUluaXQgPSB0LCB0ID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHRoaXMuX2JvZHlUZXh0ID0gdCA6IG8gJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSA/IHRoaXMuX2JvZHlCbG9iID0gdCA6IG4gJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCkgPyB0aGlzLl9ib2R5Rm9ybURhdGEgPSB0IDogZSAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCkgPyB0aGlzLl9ib2R5VGV4dCA9IHQudG9TdHJpbmcoKSA6IGkgJiYgbyAmJiAociA9IHQpICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHIpID8gKHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGwodC5idWZmZXIpLCB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSkgOiBpICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSB8fCBhKHQpKSA/IHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGwodCkgOiB0aGlzLl9ib2R5VGV4dCA9IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkgOiB0aGlzLl9ib2R5VGV4dCA9IFwiXCIsIHRoaXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyB0aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpIDogdGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSA/IHRoaXMuaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIiwgdGhpcy5fYm9keUJsb2IudHlwZSkgOiBlICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSAmJiB0aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIikpO1xuICAgIH0sIG8gJiYgKHRoaXMuYmxvYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0gYyh0aGlzKTtcbiAgICAgIGlmICh0KSByZXR1cm4gdDtcbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYik7XG4gICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk7XG4gICAgICBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2JcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKTtcbiAgICB9LCB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA/IGModGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikgOiB0aGlzLmJsb2IoKS50aGVuKHkpO1xuICAgIH0pLCB0aGlzLnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCxcbiAgICAgICAgZSxcbiAgICAgICAgcixcbiAgICAgICAgbyA9IGModGhpcyk7XG4gICAgICBpZiAobykgcmV0dXJuIG87XG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHJldHVybiB0ID0gdGhpcy5fYm9keUJsb2IsIGUgPSBuZXcgRmlsZVJlYWRlcigpLCByID0gcChlKSwgZS5yZWFkQXNUZXh0KHQpLCByO1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmdW5jdGlvbiAodCkge1xuICAgICAgICBmb3IgKHZhciBlID0gbmV3IFVpbnQ4QXJyYXkodCksIHIgPSBuZXcgQXJyYXkoZS5sZW5ndGgpLCBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHJbb10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGVbb10pO1xuICAgICAgICByZXR1cm4gci5qb2luKFwiXCIpO1xuICAgICAgfSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKTtcbiAgICAgIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpO1xuICAgIH0sIG4gJiYgKHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbih2KTtcbiAgICB9KSwgdGhpcy5qc29uID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSk7XG4gICAgfSwgdGhpcztcbiAgfVxuICBkLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHQgPSBoKHQpLCBlID0gdShlKTtcbiAgICB2YXIgciA9IHRoaXMubWFwW3RdO1xuICAgIHRoaXMubWFwW3RdID0gciA/IHIgKyBcIiwgXCIgKyBlIDogZTtcbiAgfSwgZC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbaCh0KV07XG4gIH0sIGQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQgPSBoKHQpLCB0aGlzLmhhcyh0KSA/IHRoaXMubWFwW3RdIDogbnVsbDtcbiAgfSwgZC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkoaCh0KSk7XG4gIH0sIGQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdGhpcy5tYXBbaCh0KV0gPSB1KGUpO1xuICB9LCBkLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBmb3IgKHZhciByIGluIHRoaXMubWFwKSB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShyKSAmJiB0LmNhbGwoZSwgdGhpcy5tYXBbcl0sIHIsIHRoaXMpO1xuICB9LCBkLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gW107XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZSwgcikge1xuICAgICAgdC5wdXNoKHIpO1xuICAgIH0pLCBmKHQpO1xuICB9LCBkLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LnB1c2goZSk7XG4gICAgfSksIGYodCk7XG4gIH0sIGQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICB0LnB1c2goW3IsIGVdKTtcbiAgICB9KSwgZih0KTtcbiAgfSwgciAmJiAoZC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGQucHJvdG90eXBlLmVudHJpZXMpO1xuICB2YXIgbSA9IFtcIkRFTEVURVwiLCBcIkdFVFwiLCBcIkhFQURcIiwgXCJPUFRJT05TXCIsIFwiUE9TVFwiLCBcIlBVVFwiXTtcbiAgZnVuY3Rpb24gdyh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgbiA9IChlID0gZSB8fCB7fSkuYm9keTtcbiAgICBpZiAodCBpbnN0YW5jZW9mIHcpIHtcbiAgICAgIGlmICh0LmJvZHlVc2VkKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQWxyZWFkeSByZWFkXCIpO1xuICAgICAgdGhpcy51cmwgPSB0LnVybCwgdGhpcy5jcmVkZW50aWFscyA9IHQuY3JlZGVudGlhbHMsIGUuaGVhZGVycyB8fCAodGhpcy5oZWFkZXJzID0gbmV3IGQodC5oZWFkZXJzKSksIHRoaXMubWV0aG9kID0gdC5tZXRob2QsIHRoaXMubW9kZSA9IHQubW9kZSwgdGhpcy5zaWduYWwgPSB0LnNpZ25hbCwgbiB8fCBudWxsID09IHQuX2JvZHlJbml0IHx8IChuID0gdC5fYm9keUluaXQsIHQuYm9keVVzZWQgPSAhMCk7XG4gICAgfSBlbHNlIHRoaXMudXJsID0gU3RyaW5nKHQpO1xuICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzID0gZS5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8IFwic2FtZS1vcmlnaW5cIiwgIWUuaGVhZGVycyAmJiB0aGlzLmhlYWRlcnMgfHwgKHRoaXMuaGVhZGVycyA9IG5ldyBkKGUuaGVhZGVycykpLCB0aGlzLm1ldGhvZCA9IChyID0gZS5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgXCJHRVRcIiwgbyA9IHIudG9VcHBlckNhc2UoKSwgbS5pbmRleE9mKG8pID4gLTEgPyBvIDogciksIHRoaXMubW9kZSA9IGUubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbCwgdGhpcy5zaWduYWwgPSBlLnNpZ25hbCB8fCB0aGlzLnNpZ25hbCwgdGhpcy5yZWZlcnJlciA9IG51bGwsIChcIkdFVFwiID09PSB0aGlzLm1ldGhvZCB8fCBcIkhFQURcIiA9PT0gdGhpcy5tZXRob2QpICYmIG4pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0c1wiKTtcbiAgICB0aGlzLl9pbml0Qm9keShuKTtcbiAgfVxuICBmdW5jdGlvbiB2KHQpIHtcbiAgICB2YXIgZSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHJldHVybiB0LnRyaW0oKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIHIgPSB0LnNwbGl0KFwiPVwiKSxcbiAgICAgICAgICBvID0gci5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCBcIiBcIiksXG4gICAgICAgICAgbiA9IHIuam9pbihcIj1cIikucmVwbGFjZSgvXFwrL2csIFwiIFwiKTtcbiAgICAgICAgZS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG8pLCBkZWNvZGVVUklDb21wb25lbnQobikpO1xuICAgICAgfVxuICAgIH0pLCBlO1xuICB9XG4gIGZ1bmN0aW9uIEUodCwgZSkge1xuICAgIGUgfHwgKGUgPSB7fSksIHRoaXMudHlwZSA9IFwiZGVmYXVsdFwiLCB0aGlzLnN0YXR1cyA9IHZvaWQgMCA9PT0gZS5zdGF0dXMgPyAyMDAgOiBlLnN0YXR1cywgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMCwgdGhpcy5zdGF0dXNUZXh0ID0gXCJzdGF0dXNUZXh0XCIgaW4gZSA/IGUuc3RhdHVzVGV4dCA6IFwiT0tcIiwgdGhpcy5oZWFkZXJzID0gbmV3IGQoZS5oZWFkZXJzKSwgdGhpcy51cmwgPSBlLnVybCB8fCBcIlwiLCB0aGlzLl9pbml0Qm9keSh0KTtcbiAgfVxuICB3LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IHcodGhpcywge1xuICAgICAgYm9keTogdGhpcy5fYm9keUluaXRcbiAgICB9KTtcbiAgfSwgYi5jYWxsKHcucHJvdG90eXBlKSwgYi5jYWxsKEUucHJvdG90eXBlKSwgRS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBFKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IGQodGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KTtcbiAgfSwgRS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG5ldyBFKG51bGwsIHtcbiAgICAgIHN0YXR1czogMCxcbiAgICAgIHN0YXR1c1RleHQ6IFwiXCJcbiAgICB9KTtcbiAgICByZXR1cm4gdC50eXBlID0gXCJlcnJvclwiLCB0O1xuICB9O1xuICB2YXIgQSA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG4gIEUucmVkaXJlY3QgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGlmICgtMSA9PT0gQS5pbmRleE9mKGUpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgc3RhdHVzIGNvZGVcIik7XG4gICAgcmV0dXJuIG5ldyBFKG51bGwsIHtcbiAgICAgIHN0YXR1czogZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgbG9jYXRpb246IHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgdC5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgdC5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHQuRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IHQsIHRoaXMubmFtZSA9IGU7XG4gICAgICB2YXIgciA9IEVycm9yKHQpO1xuICAgICAgdGhpcy5zdGFjayA9IHIuc3RhY2s7XG4gICAgfSwgdC5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpLCB0LkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSB0LkRPTUV4Y2VwdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBfKGUsIHIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHZhciBzID0gbmV3IHcoZSwgcik7XG4gICAgICBpZiAocy5zaWduYWwgJiYgcy5zaWduYWwuYWJvcnRlZCkgcmV0dXJuIGkobmV3IHQuRE9NRXhjZXB0aW9uKFwiQWJvcnRlZFwiLCBcIkFib3J0RXJyb3JcIikpO1xuICAgICAgdmFyIGEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGZ1bmN0aW9uIGgoKSB7XG4gICAgICAgIGEuYWJvcnQoKTtcbiAgICAgIH1cbiAgICAgIGEub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICBlLFxuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IGEuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogYS5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgaGVhZGVyczogKHQgPSBhLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8IFwiXCIsIGUgPSBuZXcgZCgpLCB0LnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csIFwiIFwiKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSB0LnNwbGl0KFwiOlwiKSxcbiAgICAgICAgICAgICAgICBvID0gci5zaGlmdCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHIuam9pbihcIjpcIikudHJpbSgpO1xuICAgICAgICAgICAgICAgIGUuYXBwZW5kKG8sIG4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgZSlcbiAgICAgICAgICB9O1xuICAgICAgICByLnVybCA9IFwicmVzcG9uc2VVUkxcIiBpbiBhID8gYS5yZXNwb25zZVVSTCA6IHIuaGVhZGVycy5nZXQoXCJYLVJlcXVlc3QtVVJMXCIpO1xuICAgICAgICB2YXIgbyA9IFwicmVzcG9uc2VcIiBpbiBhID8gYS5yZXNwb25zZSA6IGEucmVzcG9uc2VUZXh0O1xuICAgICAgICBuKG5ldyBFKG8sIHIpKTtcbiAgICAgIH0sIGEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaShuZXcgVHlwZUVycm9yKFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZFwiKSk7XG4gICAgICB9LCBhLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaShuZXcgVHlwZUVycm9yKFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZFwiKSk7XG4gICAgICB9LCBhLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkobmV3IHQuRE9NRXhjZXB0aW9uKFwiQWJvcnRlZFwiLCBcIkFib3J0RXJyb3JcIikpO1xuICAgICAgfSwgYS5vcGVuKHMubWV0aG9kLCBzLnVybCwgITApLCBcImluY2x1ZGVcIiA9PT0gcy5jcmVkZW50aWFscyA/IGEud2l0aENyZWRlbnRpYWxzID0gITAgOiBcIm9taXRcIiA9PT0gcy5jcmVkZW50aWFscyAmJiAoYS53aXRoQ3JlZGVudGlhbHMgPSAhMSksIFwicmVzcG9uc2VUeXBlXCIgaW4gYSAmJiBvICYmIChhLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiKSwgcy5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgYS5zZXRSZXF1ZXN0SGVhZGVyKGUsIHQpO1xuICAgICAgfSksIHMuc2lnbmFsICYmIChzLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgaCksIGEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICA0ID09PSBhLnJlYWR5U3RhdGUgJiYgcy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGgpO1xuICAgICAgfSksIGEuc2VuZCh2b2lkIDAgPT09IHMuX2JvZHlJbml0ID8gbnVsbCA6IHMuX2JvZHlJbml0KTtcbiAgICB9KTtcbiAgfVxuICBfLnBvbHlmaWxsID0gITAsIHNlbGYuZmV0Y2ggfHwgKHNlbGYuZmV0Y2ggPSBfLCBzZWxmLkhlYWRlcnMgPSBkLCBzZWxmLlJlcXVlc3QgPSB3LCBzZWxmLlJlc3BvbnNlID0gRSksIHQuSGVhZGVycyA9IGQsIHQuUmVxdWVzdCA9IHcsIHQuUmVzcG9uc2UgPSBFLCB0LmZldGNoID0gXztcbn0oe30pOyJdLCJtYXBwaW5ncyI6IjtBQU1BLENBQUMsU0FBVSxHQUFHO0FBQ1o7QUFFQSxHQUFDLFNBQVVBLElBQUc7QUFDWixRQUFJLElBQUksQ0FBQztBQUNULGFBQVMsRUFBRSxHQUFHO0FBQ1osVUFBSSxFQUFFLENBQUMsRUFBRyxRQUFPLEVBQUUsQ0FBQyxFQUFFO0FBQ3RCLFVBQUksSUFBSSxFQUFFLENBQUMsSUFBSTtBQUFBLFFBQ2IsR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLFFBQ0gsU0FBUyxDQUFDO0FBQUEsTUFDWjtBQUNBLGFBQU9BLEdBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksTUFBSSxFQUFFO0FBQUEsSUFDNUQ7QUFDQSxNQUFFLElBQUlBLElBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxJQUFJLFNBQVVBLElBQUdDLElBQUcsR0FBRztBQUN6QyxRQUFFLEVBQUVELElBQUdDLEVBQUMsS0FBSyxPQUFPLGVBQWVELElBQUdDLElBQUc7QUFBQSxRQUN2QyxZQUFZO0FBQUEsUUFDWixLQUFLO0FBQUEsTUFDUCxDQUFDO0FBQUEsSUFDSCxHQUFHLEVBQUUsSUFBSSxTQUFVRCxJQUFHO0FBQ3BCLHFCQUFlLE9BQU8sVUFBVSxPQUFPLGVBQWUsT0FBTyxlQUFlQSxJQUFHLE9BQU8sYUFBYTtBQUFBLFFBQ2pHLE9BQU87QUFBQSxNQUNULENBQUMsR0FBRyxPQUFPLGVBQWVBLElBQUcsY0FBYztBQUFBLFFBQ3pDLE9BQU87QUFBQSxNQUNULENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxJQUFJLFNBQVVBLElBQUdDLElBQUc7QUFDdkIsVUFBSSxJQUFJQSxPQUFNRCxLQUFJLEVBQUVBLEVBQUMsSUFBSSxJQUFJQyxHQUFHLFFBQU9EO0FBQ3ZDLFVBQUksSUFBSUMsTUFBSyxZQUFZLE9BQU9ELE1BQUtBLE1BQUtBLEdBQUUsV0FBWSxRQUFPQTtBQUMvRCxVQUFJLElBQUksdUJBQU8sT0FBTyxJQUFJO0FBQzFCLFVBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLGVBQWUsR0FBRyxXQUFXO0FBQUEsUUFDOUMsWUFBWTtBQUFBLFFBQ1osT0FBT0E7QUFBQSxNQUNULENBQUMsR0FBRyxJQUFJQyxNQUFLLFlBQVksT0FBT0QsR0FBRyxVQUFTLEtBQUtBLEdBQUcsR0FBRSxFQUFFLEdBQUcsSUFBRyxTQUFVQyxJQUFHO0FBQ3pFLGVBQU9ELEdBQUVDLEVBQUM7QUFBQSxNQUNaLEdBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUNmLGFBQU87QUFBQSxJQUNULEdBQUcsRUFBRSxJQUFJLFNBQVVELElBQUc7QUFDcEIsVUFBSUMsS0FBSUQsTUFBS0EsR0FBRSxhQUFhLFdBQVk7QUFDdEMsZUFBT0EsR0FBRTtBQUFBLE1BQ1gsSUFBSSxXQUFZO0FBQ2QsZUFBT0E7QUFBQSxNQUNUO0FBQ0EsYUFBTyxFQUFFLEVBQUVDLElBQUcsS0FBS0EsRUFBQyxHQUFHQTtBQUFBLElBQ3pCLEdBQUcsRUFBRSxJQUFJLFNBQVVELElBQUdDLElBQUc7QUFDdkIsYUFBTyxPQUFPLFVBQVUsZUFBZSxLQUFLRCxJQUFHQyxFQUFDO0FBQUEsSUFDbEQsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFDeEIsRUFBRSxDQUFDLFNBQVVELElBQUcsR0FBRyxHQUFHO0FBQ3BCLE1BQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHQSxHQUFFLFVBQVUsRUFBRSxHQUFHO0FBQUEsRUFDbDNCLEdBQUcsU0FBVUEsSUFBRyxHQUFHLEdBQUc7QUFDcEIsUUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUNULElBQUksRUFBRSxDQUFDLEdBQ1AsSUFBSSxFQUFF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QSxJQUFHO0FBQzdILGdCQUFJRyxLQUFJSCxHQUFFLE1BQU0sR0FBRyxHQUNqQkksS0FBSUQsR0FBRSxNQUFNLEVBQUUsS0FBSztBQUNyQixnQkFBSUMsSUFBRztBQUNMLGtCQUFJSCxLQUFJRSxHQUFFLEtBQUssR0FBRyxFQUFFLEtBQUs7QUFDekIsY0FBQUQsR0FBRSxPQUFPRSxJQUFHSCxFQUFDO0FBQUEsWUFDZjtBQUFBLFVBQ0YsQ0FBQyxHQUFHQztBQUFBLFFBQ047QUFDRixRQUFBQyxHQUFFLE1BQU0saUJBQWlCRyxLQUFJQSxHQUFFLGNBQWNILEdBQUUsUUFBUSxJQUFJLGVBQWU7QUFDMUUsWUFBSUMsS0FBSSxjQUFjRSxLQUFJQSxHQUFFLFdBQVdBLEdBQUU7QUFDekMsUUFBQUwsR0FBRSxJQUFJLEVBQUVHLElBQUdELEVBQUMsQ0FBQztBQUFBLE1BQ2YsR0FBR0csR0FBRSxVQUFVLFdBQVk7QUFDekIsUUFBQUQsR0FBRSxJQUFJLFVBQVUsd0JBQXdCLENBQUM7QUFBQSxNQUMzQyxHQUFHQyxHQUFFLFlBQVksV0FBWTtBQUMzQixRQUFBRCxHQUFFLElBQUksVUFBVSx3QkFBd0IsQ0FBQztBQUFBLE1BQzNDLEdBQUdDLEdBQUUsVUFBVSxXQUFZO0FBQ3pCLFFBQUFELEdBQUUsSUFBSSxFQUFFLGFBQWEsV0FBVyxZQUFZLENBQUM7QUFBQSxNQUMvQyxHQUFHQyxHQUFFLEtBQUtNLEdBQUUsUUFBUUEsR0FBRSxLQUFLLElBQUUsR0FBRyxjQUFjQSxHQUFFLGNBQWNOLEdBQUUsa0JBQWtCLE9BQUssV0FBV00sR0FBRSxnQkFBZ0JOLEdBQUUsa0JBQWtCLFFBQUssa0JBQWtCQSxNQUFLLE1BQU1BLEdBQUUsZUFBZSxTQUFTTSxHQUFFLFFBQVEsUUFBUSxTQUFVWixJQUFHRSxJQUFHO0FBQ3BPLFFBQUFJLEdBQUUsaUJBQWlCSixJQUFHRixFQUFDO0FBQUEsTUFDekIsQ0FBQyxHQUFHWSxHQUFFLFdBQVdBLEdBQUUsT0FBTyxpQkFBaUIsU0FBU0MsRUFBQyxHQUFHUCxHQUFFLHFCQUFxQixXQUFZO0FBQ3pGLGNBQU1BLEdBQUUsY0FBY00sR0FBRSxPQUFPLG9CQUFvQixTQUFTQyxFQUFDO0FBQUEsTUFDL0QsSUFBSVAsR0FBRSxLQUFLLFdBQVdNLEdBQUUsWUFBWSxPQUFPQSxHQUFFLFNBQVM7QUFBQSxJQUN4RCxDQUFDO0FBQUEsRUFDSDtBQUNBLElBQUUsV0FBVyxNQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsR0FBRyxLQUFLLFVBQVUsR0FBRyxLQUFLLFVBQVUsR0FBRyxLQUFLLFdBQVcsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVE7QUFDbEssRUFBRSxDQUFDLENBQUM7IiwibmFtZXMiOlsidCIsIm4iLCJlIiwiciIsIm8iLCJpIiwiYSIsImwiLCJwIiwidSIsImMiLCJmIiwicyIsImgiLCJ2IiwiZyIsImQiLCJ5IiwieCIsIm0iLCJiIiwiUyJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
