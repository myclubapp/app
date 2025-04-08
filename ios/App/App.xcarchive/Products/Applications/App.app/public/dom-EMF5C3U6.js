// node_modules/@ionic/core/dist/esm/polyfills/dom.js
(function() {
  "use strict";
  var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
  function g(a) {
    var b = aa.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  function l(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document); ) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function n(a, b) {
    for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function p(a, b, d) {
    d = void 0 === d ? /* @__PURE__ */ new Set() : d;
    for (var c = a; c; ) {
      if (c.nodeType === Node.ELEMENT_NODE) {
        var e = c;
        b(e);
        var f = e.localName;
        if ("link" === f && "import" === e.getAttribute("rel")) {
          c = e.import;
          if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) p(c, b, d);
          c = n(a, e);
          continue;
        } else if ("template" === f) {
          c = n(a, e);
          continue;
        }
        if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) p(e, b, d);
      }
      c = c.firstChild ? c.firstChild : n(a, c);
    }
  }
  function r(a, b, d) {
    a[b] = d;
  }
  ;
  function u() {
    this.a = /* @__PURE__ */ new Map();
    this.g = /* @__PURE__ */ new Map();
    this.c = [];
    this.f = [];
    this.b = false;
  }
  function ba(a, b, d) {
    a.a.set(b, d);
    a.g.set(d.constructorFunction, d);
  }
  function ca(a, b) {
    a.b = true;
    a.c.push(b);
  }
  function da(a, b) {
    a.b = true;
    a.f.push(b);
  }
  function v(a, b) {
    a.b && p(b, function(b2) {
      return w(a, b2);
    });
  }
  function w(a, b) {
    if (a.b && !b.__CE_patched) {
      b.__CE_patched = true;
      for (var d = 0; d < a.c.length; d++) a.c[d](b);
      for (d = 0; d < a.f.length; d++) a.f[d](b);
    }
  }
  function x(a, b) {
    var d = [];
    p(b, function(b2) {
      return d.push(b2);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
    }
  }
  function z(a, b) {
    var d = [];
    p(b, function(b2) {
      return d.push(b2);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state && a.disconnectedCallback(c);
    }
  }
  function A(a, b, d) {
    d = void 0 === d ? {} : d;
    var c = d.u || /* @__PURE__ */ new Set(), e = d.i || function(b2) {
      return y(a, b2);
    }, f = [];
    p(b, function(b2) {
      if ("link" === b2.localName && "import" === b2.getAttribute("rel")) {
        var d2 = b2.import;
        d2 instanceof Node && (d2.__CE_isImportDocument = true, d2.__CE_hasRegistry = true);
        d2 && "complete" === d2.readyState ? d2.__CE_documentLoadHandled = true : b2.addEventListener("load", function() {
          var d3 = b2.import;
          if (!d3.__CE_documentLoadHandled) {
            d3.__CE_documentLoadHandled = true;
            var f2 = new Set(c);
            f2.delete(d3);
            A(a, d3, {
              u: f2,
              i: e
            });
          }
        });
      } else f.push(b2);
    }, c);
    if (a.b) for (b = 0; b < f.length; b++) w(a, f[b]);
    for (b = 0; b < f.length; b++) e(f[b]);
  }
  function y(a, b) {
    if (void 0 === b.__CE_state) {
      var d = b.ownerDocument;
      if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) {
        if (d = a.a.get(b.localName)) {
          d.constructionStack.push(b);
          var c = d.constructorFunction;
          try {
            try {
              if (new c() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              d.constructionStack.pop();
            }
          } catch (t) {
            throw b.__CE_state = 2, t;
          }
          b.__CE_state = 1;
          b.__CE_definition = d;
          if (d.attributeChangedCallback) for (d = d.observedAttributes, c = 0; c < d.length; c++) {
            var e = d[c], f = b.getAttribute(e);
            null !== f && a.attributeChangedCallback(b, e, null, f, null);
          }
          l(b) && a.connectedCallback(b);
        }
      }
    }
  }
  u.prototype.connectedCallback = function(a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };
  u.prototype.disconnectedCallback = function(a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  u.prototype.attributeChangedCallback = function(a, b, d, c, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
  };
  function B(a) {
    var b = document;
    this.c = a;
    this.a = b;
    this.b = void 0;
    A(this.c, this.a);
    "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
      childList: true,
      subtree: true
    }));
  }
  function C(a) {
    a.b && a.b.disconnect();
  }
  B.prototype.f = function(a) {
    var b = this.a.readyState;
    "interactive" !== b && "complete" !== b || C(this);
    for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, c = 0; c < d.length; c++) A(this.c, d[c]);
  };
  function ea() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function(b) {
      a.b = b;
      a.a && b(a.a);
    });
  }
  function D(a) {
    if (a.a) throw Error("Already resolved.");
    a.a = void 0;
    a.b && a.b(void 0);
  }
  ;
  function E(a) {
    this.c = false;
    this.a = a;
    this.j = /* @__PURE__ */ new Map();
    this.f = function(b) {
      return b();
    };
    this.b = false;
    this.g = [];
    this.o = new B(a);
  }
  E.prototype.l = function(a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    if (!g(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
    if (this.c) throw Error("A custom element is already being defined.");
    this.c = true;
    try {
      var c = function(b2) {
        var a2 = e[b2];
        if (void 0 !== a2 && !(a2 instanceof Function)) throw Error("The '" + b2 + "' callback must be a function.");
        return a2;
      }, e = b.prototype;
      if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = c("connectedCallback");
      var t = c("disconnectedCallback");
      var k = c("adoptedCallback");
      var h = c("attributeChangedCallback");
      var m = b.observedAttributes || [];
    } catch (q) {
      return;
    } finally {
      this.c = false;
    }
    b = {
      localName: a,
      constructorFunction: b,
      connectedCallback: f,
      disconnectedCallback: t,
      adoptedCallback: k,
      attributeChangedCallback: h,
      observedAttributes: m,
      constructionStack: []
    };
    ba(this.a, a, b);
    this.g.push(b);
    this.b || (this.b = true, this.f(function() {
      return fa(d);
    }));
  };
  E.prototype.i = function(a) {
    A(this.a, a);
  };
  function fa(a) {
    if (false !== a.b) {
      a.b = false;
      for (var b = a.g, d = [], c = /* @__PURE__ */ new Map(), e = 0; e < b.length; e++) c.set(b[e].localName, []);
      A(a.a, document, {
        i: function(b2) {
          if (void 0 === b2.__CE_state) {
            var e2 = b2.localName, f2 = c.get(e2);
            f2 ? f2.push(b2) : a.a.a.get(e2) && d.push(b2);
          }
        }
      });
      for (e = 0; e < d.length; e++) y(a.a, d[e]);
      for (; 0 < b.length; ) {
        var f = b.shift();
        e = f.localName;
        f = c.get(f.localName);
        for (var t = 0; t < f.length; t++) y(a.a, f[t]);
        (e = a.j.get(e)) && D(e);
      }
    }
  }
  E.prototype.get = function(a) {
    if (a = this.a.a.get(a)) return a.constructorFunction;
  };
  E.prototype.m = function(a) {
    if (!g(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.j.get(a);
    if (b) return b.c;
    b = new ea();
    this.j.set(a, b);
    this.a.a.get(a) && !this.g.some(function(b2) {
      return b2.localName === a;
    }) && D(b);
    return b.c;
  };
  E.prototype.s = function(a) {
    C(this.o);
    var b = this.f;
    this.f = function(d) {
      return a(function() {
        return b(d);
      });
    };
  };
  window.CustomElementRegistry = E;
  E.prototype.define = E.prototype.l;
  E.prototype.upgrade = E.prototype.i;
  E.prototype.get = E.prototype.get;
  E.prototype.whenDefined = E.prototype.m;
  E.prototype.polyfillWrapFlushCallback = E.prototype.s;
  var F = window.Document.prototype.createElement, G = window.Document.prototype.createElementNS, ha = window.Document.prototype.importNode, ia = window.Document.prototype.prepend, ja = window.Document.prototype.append, ka = window.DocumentFragment.prototype.prepend, la = window.DocumentFragment.prototype.append, H = window.Node.prototype.cloneNode, I = window.Node.prototype.appendChild, J = window.Node.prototype.insertBefore, K = window.Node.prototype.removeChild, L = window.Node.prototype.replaceChild, M = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), N = window.Element.prototype.attachShadow, O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), P = window.Element.prototype.getAttribute, Q = window.Element.prototype.setAttribute, R = window.Element.prototype.removeAttribute, S = window.Element.prototype.getAttributeNS, T = window.Element.prototype.setAttributeNS, U = window.Element.prototype.removeAttributeNS, ma = window.Element.prototype.insertAdjacentElement, na = window.Element.prototype.insertAdjacentHTML, oa = window.Element.prototype.prepend, pa = window.Element.prototype.append, V = window.Element.prototype.before, qa = window.Element.prototype.after, ra = window.Element.prototype.replaceWith, sa = window.Element.prototype.remove, ta = window.HTMLElement, W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), ua = window.HTMLElement.prototype.insertAdjacentElement, va = window.HTMLElement.prototype.insertAdjacentHTML;
  var wa = new function() {
  }();
  function xa() {
    var a = X;
    window.HTMLElement = function() {
      function b() {
        var b2 = this.constructor, c = a.g.get(b2);
        if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
        var e = c.constructionStack;
        if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b2.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
        c = e.length - 1;
        var f = e[c];
        if (f === wa) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[c] = wa;
        Object.setPrototypeOf(f, b2.prototype);
        w(a, f);
        return f;
      }
      b.prototype = ta.prototype;
      Object.defineProperty(b.prototype, "constructor", {
        writable: true,
        configurable: true,
        enumerable: false,
        value: b
      });
      return b;
    }();
  }
  ;
  function Y(a, b, d) {
    function c(b2) {
      return function(d2) {
        for (var e = [], c2 = 0; c2 < arguments.length; ++c2) e[c2] = arguments[c2];
        c2 = [];
        for (var f = [], m = 0; m < e.length; m++) {
          var q = e[m];
          q instanceof Element && l(q) && f.push(q);
          if (q instanceof DocumentFragment) for (q = q.firstChild; q; q = q.nextSibling) c2.push(q);
          else c2.push(q);
        }
        b2.apply(this, e);
        for (e = 0; e < f.length; e++) z(a, f[e]);
        if (l(this)) for (e = 0; e < c2.length; e++) f = c2[e], f instanceof Element && x(a, f);
      };
    }
    void 0 !== d.h && (b.prepend = c(d.h));
    void 0 !== d.append && (b.append = c(d.append));
  }
  ;
  function ya() {
    var a = X;
    r(Document.prototype, "createElement", function(b) {
      if (this.__CE_hasRegistry) {
        var d = a.a.get(b);
        if (d) return new d.constructorFunction();
      }
      b = F.call(this, b);
      w(a, b);
      return b;
    });
    r(Document.prototype, "importNode", function(b, d) {
      b = ha.call(this, b, !!d);
      this.__CE_hasRegistry ? A(a, b) : v(a, b);
      return b;
    });
    r(Document.prototype, "createElementNS", function(b, d) {
      if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
        var c = a.a.get(d);
        if (c) return new c.constructorFunction();
      }
      b = G.call(this, b, d);
      w(a, b);
      return b;
    });
    Y(a, Document.prototype, {
      h: ia,
      append: ja
    });
  }
  ;
  function za() {
    function a(a2, c) {
      Object.defineProperty(a2, "textContent", {
        enumerable: c.enumerable,
        configurable: true,
        get: c.get,
        set: function(a3) {
          if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a3);
          else {
            var d = void 0;
            if (this.firstChild) {
              var e = this.childNodes, k = e.length;
              if (0 < k && l(this)) {
                d = Array(k);
                for (var h = 0; h < k; h++) d[h] = e[h];
              }
            }
            c.set.call(this, a3);
            if (d) for (a3 = 0; a3 < d.length; a3++) z(b, d[a3]);
          }
        }
      });
    }
    var b = X;
    r(Node.prototype, "insertBefore", function(a2, c) {
      if (a2 instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a2.childNodes);
        a2 = J.call(this, a2, c);
        if (l(this)) for (c = 0; c < e.length; c++) x(b, e[c]);
        return a2;
      }
      e = l(a2);
      c = J.call(this, a2, c);
      e && z(b, a2);
      l(this) && x(b, a2);
      return c;
    });
    r(Node.prototype, "appendChild", function(a2) {
      if (a2 instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a2.childNodes);
        a2 = I.call(this, a2);
        if (l(this)) for (var e = 0; e < c.length; e++) x(b, c[e]);
        return a2;
      }
      c = l(a2);
      e = I.call(this, a2);
      c && z(b, a2);
      l(this) && x(b, a2);
      return e;
    });
    r(Node.prototype, "cloneNode", function(a2) {
      a2 = H.call(this, !!a2);
      this.ownerDocument.__CE_hasRegistry ? A(b, a2) : v(b, a2);
      return a2;
    });
    r(Node.prototype, "removeChild", function(a2) {
      var c = l(a2), e = K.call(this, a2);
      c && z(b, a2);
      return e;
    });
    r(Node.prototype, "replaceChild", function(a2, c) {
      if (a2 instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a2.childNodes);
        a2 = L.call(this, a2, c);
        if (l(this)) for (z(b, c), c = 0; c < e.length; c++) x(b, e[c]);
        return a2;
      }
      e = l(a2);
      var f = L.call(this, a2, c), d = l(this);
      d && z(b, c);
      e && z(b, a2);
      d && x(b, a2);
      return f;
    });
    M && M.get ? a(Node.prototype, M) : ca(b, function(b2) {
      a(b2, {
        enumerable: true,
        configurable: true,
        get: function() {
          for (var a2 = [], b3 = 0; b3 < this.childNodes.length; b3++) {
            var f = this.childNodes[b3];
            f.nodeType !== Node.COMMENT_NODE && a2.push(f.textContent);
          }
          return a2.join("");
        },
        set: function(a2) {
          for (; this.firstChild; ) K.call(this, this.firstChild);
          null != a2 && "" !== a2 && I.call(this, document.createTextNode(a2));
        }
      });
    });
  }
  ;
  function Aa(a) {
    function b(b2) {
      return function(e) {
        for (var c = [], d2 = 0; d2 < arguments.length; ++d2) c[d2] = arguments[d2];
        d2 = [];
        for (var k = [], h = 0; h < c.length; h++) {
          var m = c[h];
          m instanceof Element && l(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) d2.push(m);
          else d2.push(m);
        }
        b2.apply(this, c);
        for (c = 0; c < k.length; c++) z(a, k[c]);
        if (l(this)) for (c = 0; c < d2.length; c++) k = d2[c], k instanceof Element && x(a, k);
      };
    }
    var d = Element.prototype;
    void 0 !== V && (d.before = b(V));
    void 0 !== V && (d.after = b(qa));
    void 0 !== ra && r(d, "replaceWith", function(b2) {
      for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];
      c = [];
      for (var d2 = [], k = 0; k < e.length; k++) {
        var h = e[k];
        h instanceof Element && l(h) && d2.push(h);
        if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) c.push(h);
        else c.push(h);
      }
      k = l(this);
      ra.apply(this, e);
      for (e = 0; e < d2.length; e++) z(a, d2[e]);
      if (k) for (z(a, this), e = 0; e < c.length; e++) d2 = c[e], d2 instanceof Element && x(a, d2);
    });
    void 0 !== sa && r(d, "remove", function() {
      var b2 = l(this);
      sa.call(this);
      b2 && z(a, this);
    });
  }
  ;
  function Ba() {
    function a(a2, b2) {
      Object.defineProperty(a2, "innerHTML", {
        enumerable: b2.enumerable,
        configurable: true,
        get: b2.get,
        set: function(a3) {
          var e = this, d2 = void 0;
          l(this) && (d2 = [], p(this, function(a4) {
            a4 !== e && d2.push(a4);
          }));
          b2.set.call(this, a3);
          if (d2) for (var f = 0; f < d2.length; f++) {
            var t = d2[f];
            1 === t.__CE_state && c.disconnectedCallback(t);
          }
          this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
          return a3;
        }
      });
    }
    function b(a2, b2) {
      r(a2, "insertAdjacentElement", function(a3, e) {
        var d2 = l(e);
        a3 = b2.call(this, a3, e);
        d2 && z(c, e);
        l(a3) && x(c, e);
        return a3;
      });
    }
    function d(a2, b2) {
      function e(a3, b3) {
        for (var e2 = []; a3 !== b3; a3 = a3.nextSibling) e2.push(a3);
        for (b3 = 0; b3 < e2.length; b3++) A(c, e2[b3]);
      }
      r(a2, "insertAdjacentHTML", function(a3, c2) {
        a3 = a3.toLowerCase();
        if ("beforebegin" === a3) {
          var d2 = this.previousSibling;
          b2.call(this, a3, c2);
          e(d2 || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a3) d2 = this.firstChild, b2.call(this, a3, c2), e(this.firstChild, d2);
        else if ("beforeend" === a3) d2 = this.lastChild, b2.call(this, a3, c2), e(d2 || this.firstChild, null);
        else if ("afterend" === a3) d2 = this.nextSibling, b2.call(this, a3, c2), e(this.nextSibling, d2);
        else throw new SyntaxError("The value provided (" + String(a3) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }
    var c = X;
    N && r(Element.prototype, "attachShadow", function(a2) {
      a2 = N.call(this, a2);
      var b2 = c;
      if (b2.b && !a2.__CE_patched) {
        a2.__CE_patched = true;
        for (var e = 0; e < b2.c.length; e++) b2.c[e](a2);
      }
      return this.__CE_shadowRoot = a2;
    });
    O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function(b2) {
      a(b2, {
        enumerable: true,
        configurable: true,
        get: function() {
          return H.call(this, true).innerHTML;
        },
        set: function(a2) {
          var b3 = "template" === this.localName, c2 = b3 ? this.content : this, e = G.call(document, this.namespaceURI, this.localName);
          for (e.innerHTML = a2; 0 < c2.childNodes.length; ) K.call(c2, c2.childNodes[0]);
          for (a2 = b3 ? e.content : e; 0 < a2.childNodes.length; ) I.call(c2, a2.childNodes[0]);
        }
      });
    });
    r(Element.prototype, "setAttribute", function(a2, b2) {
      if (1 !== this.__CE_state) return Q.call(this, a2, b2);
      var e = P.call(this, a2);
      Q.call(this, a2, b2);
      b2 = P.call(this, a2);
      c.attributeChangedCallback(this, a2, e, b2, null);
    });
    r(Element.prototype, "setAttributeNS", function(a2, b2, d2) {
      if (1 !== this.__CE_state) return T.call(this, a2, b2, d2);
      var e = S.call(this, a2, b2);
      T.call(this, a2, b2, d2);
      d2 = S.call(this, a2, b2);
      c.attributeChangedCallback(this, b2, e, d2, a2);
    });
    r(Element.prototype, "removeAttribute", function(a2) {
      if (1 !== this.__CE_state) return R.call(this, a2);
      var b2 = P.call(this, a2);
      R.call(this, a2);
      null !== b2 && c.attributeChangedCallback(this, a2, b2, null, null);
    });
    r(Element.prototype, "removeAttributeNS", function(a2, b2) {
      if (1 !== this.__CE_state) return U.call(this, a2, b2);
      var d2 = S.call(this, a2, b2);
      U.call(this, a2, b2);
      var e = S.call(this, a2, b2);
      d2 !== e && c.attributeChangedCallback(this, b2, d2, e, a2);
    });
    ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
    va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
    Y(c, Element.prototype, {
      h: oa,
      append: pa
    });
    Aa(c);
  }
  ;
  var Z = window.customElements;
  if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
    var X = new u();
    xa();
    ya();
    Y(X, DocumentFragment.prototype, {
      h: ka,
      append: la
    });
    za();
    Ba();
    document.__CE_hasRegistry = true;
    var customElements = new E(X);
    Object.defineProperty(window, "customElements", {
      configurable: true,
      enumerable: true,
      value: customElements
    });
  }
  ;
}).call(self);
"string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
  enumerable: true,
  configurable: true,
  get: function() {
    var a = document.querySelector("base");
    return a && a.href ? a.href : document.URL;
  }
});
"function" !== typeof window.CustomEvent && (window.CustomEvent = function(c, a) {
  a = a || {
    bubbles: false,
    cancelable: false,
    detail: void 0
  };
  var b = document.createEvent("CustomEvent");
  b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
  return b;
}, window.CustomEvent.prototype = window.Event.prototype);
(function(b, c, d) {
  b.composedPath || (b.composedPath = function() {
    if (this.path) return this.path;
    var a = this.target;
    for (this.path = []; null !== a.parentNode; ) this.path.push(a), a = a.parentNode;
    this.path.push(c, d);
    return this.path;
  });
})(Event.prototype, document, window);
(function(a) {
  "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function(a2) {
    a2 = (this.document || this.ownerDocument).querySelectorAll(a2);
    for (var b = 0; a2[b] && a2[b] !== this; ) ++b;
    return !!a2[b];
  });
  "function" !== typeof a.closest && (a.closest = function(a2) {
    for (var b = this; b && 1 === b.nodeType; ) {
      if (b.matches(a2)) return b;
      b = b.parentNode;
    }
    return null;
  });
})(window.Element.prototype);
(function(c) {
  function d(a) {
    a = b(a);
    return a && 11 === a.nodeType ? d(a.host) : a;
  }
  function b(a) {
    return a && a.parentNode ? b(a.parentNode) : a;
  }
  "function" !== typeof c.getRootNode && (c.getRootNode = function(a) {
    return a && a.composed ? d(this) : b(this);
  });
})(Element.prototype);
(function(a) {
  "isConnected" in a || Object.defineProperty(a, "isConnected", {
    configurable: true,
    enumerable: true,
    get: function() {
      var a2 = this.getRootNode({
        composed: true
      });
      return a2 && 9 === a2.nodeType;
    }
  });
})(Element.prototype);
(function(b) {
  b.forEach(function(a) {
    a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function() {
        null !== this.parentNode && this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
!function(e) {
  "classList" in e || Object.defineProperty(e, "classList", {
    get: function() {
      var e2 = this, t = (e2.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
      function n() {
        t.length > 0 ? e2.setAttribute("class", t.join(" ")) : e2.removeAttribute("class");
      }
      return "" === t[0] && t.splice(0, 1), t.toggle = function(e3, i) {
        void 0 !== i ? i ? t.add(e3) : t.remove(e3) : -1 !== t.indexOf(e3) ? t.splice(t.indexOf(e3), 1) : t.push(e3), n();
      }, t.add = function() {
        for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++) -1 === t.indexOf(e3[i]) && t.push(e3[i]);
        n();
      }, t.remove = function() {
        for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++) -1 !== t.indexOf(e3[i]) && t.splice(t.indexOf(e3[i]), 1);
        n();
      }, t.item = function(e3) {
        return t[e3];
      }, t.contains = function(e3) {
        return -1 !== t.indexOf(e3);
      }, t.replace = function(e3, i) {
        -1 !== t.indexOf(e3) && t.splice(t.indexOf(e3), 1, i), n();
      }, t.value = e2.getAttribute("class") || "", t;
    }
  });
}(Element.prototype);
(function(b) {
  try {
    document.body.classList.add();
  } catch (e) {
    var c = b.add, d = b.remove;
    b.add = function() {
      for (var a = 0; a < arguments.length; a++) c.call(this, arguments[a]);
    };
    b.remove = function() {
      for (var a = 0; a < arguments.length; a++) d.call(this, arguments[a]);
    };
  }
})(DOMTokenList.prototype);
/*! Bundled license information:

@ionic/core/dist/esm/polyfills/dom.js:
  (*!
  Element.closest and Element.matches
  https://github.com/jonathantneal/closest
  Creative Commons Zero v1.0 Universal
  *)
  (*!
  Element.getRootNode()
  *)
  (*!
  Element.isConnected()
  *)
  (*!
  Element.remove()
  *)
  (*!
  Element.classList
  *)
  (*!
  DOMTokenList
  *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9wb2x5ZmlsbHMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIC8qXG4gICAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gICAgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAgICBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAgICBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICAgIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gICovXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgYWEgPSBuZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7XG4gIGZ1bmN0aW9uIGcoYSkge1xuICAgIHZhciBiID0gYWEuaGFzKGEpO1xuICAgIGEgPSAvXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO1xuICAgIHJldHVybiAhYiAmJiBhO1xuICB9XG4gIGZ1bmN0aW9uIGwoYSkge1xuICAgIHZhciBiID0gYS5pc0Nvbm5lY3RlZDtcbiAgICBpZiAodm9pZCAwICE9PSBiKSByZXR1cm4gYjtcbiAgICBmb3IgKDsgYSAmJiAhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50IHx8IGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KSBhID0gYS5wYXJlbnROb2RlIHx8ICh3aW5kb3cuU2hhZG93Um9vdCAmJiBhIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGEuaG9zdCA6IHZvaWQgMCk7XG4gICAgcmV0dXJuICEoIWEgfHwgIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBhIGluc3RhbmNlb2YgRG9jdW1lbnQpKTtcbiAgfVxuICBmdW5jdGlvbiBuKGEsIGIpIHtcbiAgICBmb3IgKDsgYiAmJiBiICE9PSBhICYmICFiLm5leHRTaWJsaW5nOykgYiA9IGIucGFyZW50Tm9kZTtcbiAgICByZXR1cm4gYiAmJiBiICE9PSBhID8gYi5uZXh0U2libGluZyA6IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcChhLCBiLCBkKSB7XG4gICAgZCA9IHZvaWQgMCA9PT0gZCA/IG5ldyBTZXQoKSA6IGQ7XG4gICAgZm9yICh2YXIgYyA9IGE7IGM7KSB7XG4gICAgICBpZiAoYy5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGUgPSBjO1xuICAgICAgICBiKGUpO1xuICAgICAgICB2YXIgZiA9IGUubG9jYWxOYW1lO1xuICAgICAgICBpZiAoXCJsaW5rXCIgPT09IGYgJiYgXCJpbXBvcnRcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpIHtcbiAgICAgICAgICBjID0gZS5pbXBvcnQ7XG4gICAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBOb2RlICYmICFkLmhhcyhjKSkgZm9yIChkLmFkZChjKSwgYyA9IGMuZmlyc3RDaGlsZDsgYzsgYyA9IGMubmV4dFNpYmxpbmcpIHAoYywgYiwgZCk7XG4gICAgICAgICAgYyA9IG4oYSwgZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0ZW1wbGF0ZVwiID09PSBmKSB7XG4gICAgICAgICAgYyA9IG4oYSwgZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUgPSBlLl9fQ0Vfc2hhZG93Um9vdCkgZm9yIChlID0gZS5maXJzdENoaWxkOyBlOyBlID0gZS5uZXh0U2libGluZykgcChlLCBiLCBkKTtcbiAgICAgIH1cbiAgICAgIGMgPSBjLmZpcnN0Q2hpbGQgPyBjLmZpcnN0Q2hpbGQgOiBuKGEsIGMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByKGEsIGIsIGQpIHtcbiAgICBhW2JdID0gZDtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIHUoKSB7XG4gICAgdGhpcy5hID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmMgPSBbXTtcbiAgICB0aGlzLmYgPSBbXTtcbiAgICB0aGlzLmIgPSAhMTtcbiAgfVxuICBmdW5jdGlvbiBiYShhLCBiLCBkKSB7XG4gICAgYS5hLnNldChiLCBkKTtcbiAgICBhLmcuc2V0KGQuY29uc3RydWN0b3JGdW5jdGlvbiwgZCk7XG4gIH1cbiAgZnVuY3Rpb24gY2EoYSwgYikge1xuICAgIGEuYiA9ICEwO1xuICAgIGEuYy5wdXNoKGIpO1xuICB9XG4gIGZ1bmN0aW9uIGRhKGEsIGIpIHtcbiAgICBhLmIgPSAhMDtcbiAgICBhLmYucHVzaChiKTtcbiAgfVxuICBmdW5jdGlvbiB2KGEsIGIpIHtcbiAgICBhLmIgJiYgcChiLCBmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIHcoYSwgYik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdyhhLCBiKSB7XG4gICAgaWYgKGEuYiAmJiAhYi5fX0NFX3BhdGNoZWQpIHtcbiAgICAgIGIuX19DRV9wYXRjaGVkID0gITA7XG4gICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGEuYy5sZW5ndGg7IGQrKykgYS5jW2RdKGIpO1xuICAgICAgZm9yIChkID0gMDsgZCA8IGEuZi5sZW5ndGg7IGQrKykgYS5mW2RdKGIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB4KGEsIGIpIHtcbiAgICB2YXIgZCA9IFtdO1xuICAgIHAoYiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIHJldHVybiBkLnB1c2goYik7XG4gICAgfSk7XG4gICAgZm9yIChiID0gMDsgYiA8IGQubGVuZ3RoOyBiKyspIHtcbiAgICAgIHZhciBjID0gZFtiXTtcbiAgICAgIDEgPT09IGMuX19DRV9zdGF0ZSA/IGEuY29ubmVjdGVkQ2FsbGJhY2soYykgOiB5KGEsIGMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB6KGEsIGIpIHtcbiAgICB2YXIgZCA9IFtdO1xuICAgIHAoYiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIHJldHVybiBkLnB1c2goYik7XG4gICAgfSk7XG4gICAgZm9yIChiID0gMDsgYiA8IGQubGVuZ3RoOyBiKyspIHtcbiAgICAgIHZhciBjID0gZFtiXTtcbiAgICAgIDEgPT09IGMuX19DRV9zdGF0ZSAmJiBhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBBKGEsIGIsIGQpIHtcbiAgICBkID0gdm9pZCAwID09PSBkID8ge30gOiBkO1xuICAgIHZhciBjID0gZC51IHx8IG5ldyBTZXQoKSxcbiAgICAgIGUgPSBkLmkgfHwgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIHkoYSwgYik7XG4gICAgICB9LFxuICAgICAgZiA9IFtdO1xuICAgIHAoYiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGlmIChcImxpbmtcIiA9PT0gYi5sb2NhbE5hbWUgJiYgXCJpbXBvcnRcIiA9PT0gYi5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpIHtcbiAgICAgICAgdmFyIGQgPSBiLmltcG9ydDtcbiAgICAgICAgZCBpbnN0YW5jZW9mIE5vZGUgJiYgKGQuX19DRV9pc0ltcG9ydERvY3VtZW50ID0gITAsIGQuX19DRV9oYXNSZWdpc3RyeSA9ICEwKTtcbiAgICAgICAgZCAmJiBcImNvbXBsZXRlXCIgPT09IGQucmVhZHlTdGF0ZSA/IGQuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkID0gITAgOiBiLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZCA9IGIuaW1wb3J0O1xuICAgICAgICAgIGlmICghZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGQuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkID0gITA7XG4gICAgICAgICAgICB2YXIgZiA9IG5ldyBTZXQoYyk7XG4gICAgICAgICAgICBmLmRlbGV0ZShkKTtcbiAgICAgICAgICAgIEEoYSwgZCwge1xuICAgICAgICAgICAgICB1OiBmLFxuICAgICAgICAgICAgICBpOiBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGYucHVzaChiKTtcbiAgICB9LCBjKTtcbiAgICBpZiAoYS5iKSBmb3IgKGIgPSAwOyBiIDwgZi5sZW5ndGg7IGIrKykgdyhhLCBmW2JdKTtcbiAgICBmb3IgKGIgPSAwOyBiIDwgZi5sZW5ndGg7IGIrKykgZShmW2JdKTtcbiAgfVxuICBmdW5jdGlvbiB5KGEsIGIpIHtcbiAgICBpZiAodm9pZCAwID09PSBiLl9fQ0Vfc3RhdGUpIHtcbiAgICAgIHZhciBkID0gYi5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKGQuZGVmYXVsdFZpZXcgfHwgZC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgJiYgZC5fX0NFX2hhc1JlZ2lzdHJ5KSBpZiAoZCA9IGEuYS5nZXQoYi5sb2NhbE5hbWUpKSB7XG4gICAgICAgIGQuY29uc3RydWN0aW9uU3RhY2sucHVzaChiKTtcbiAgICAgICAgdmFyIGMgPSBkLmNvbnN0cnVjdG9yRnVuY3Rpb247XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuZXcgYygpICE9PSBiKSB0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuXCIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBkLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIHRocm93IGIuX19DRV9zdGF0ZSA9IDIsIHQ7XG4gICAgICAgIH1cbiAgICAgICAgYi5fX0NFX3N0YXRlID0gMTtcbiAgICAgICAgYi5fX0NFX2RlZmluaXRpb24gPSBkO1xuICAgICAgICBpZiAoZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIGZvciAoZCA9IGQub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBjID0gMDsgYyA8IGQubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICB2YXIgZSA9IGRbY10sXG4gICAgICAgICAgICBmID0gYi5nZXRBdHRyaWJ1dGUoZSk7XG4gICAgICAgICAgbnVsbCAhPT0gZiAmJiBhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhiLCBlLCBudWxsLCBmLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBsKGIpICYmIGEuY29ubmVjdGVkQ2FsbGJhY2soYik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHUucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGEuX19DRV9kZWZpbml0aW9uO1xuICAgIGIuY29ubmVjdGVkQ2FsbGJhY2sgJiYgYi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpO1xuICB9O1xuICB1LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhLl9fQ0VfZGVmaW5pdGlvbjtcbiAgICBiLmRpc2Nvbm5lY3RlZENhbGxiYWNrICYmIGIuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKTtcbiAgfTtcbiAgdS5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGEsIGIsIGQsIGMsIGUpIHtcbiAgICB2YXIgZiA9IGEuX19DRV9kZWZpbml0aW9uO1xuICAgIGYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrICYmIC0xIDwgZi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSAmJiBmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsIGIsIGQsIGMsIGUpO1xuICB9O1xuICBmdW5jdGlvbiBCKGEpIHtcbiAgICB2YXIgYiA9IGRvY3VtZW50O1xuICAgIHRoaXMuYyA9IGE7XG4gICAgdGhpcy5hID0gYjtcbiAgICB0aGlzLmIgPSB2b2lkIDA7XG4gICAgQSh0aGlzLmMsIHRoaXMuYSk7XG4gICAgXCJsb2FkaW5nXCIgPT09IHRoaXMuYS5yZWFkeVN0YXRlICYmICh0aGlzLmIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmYuYmluZCh0aGlzKSksIHRoaXMuYi5vYnNlcnZlKHRoaXMuYSwge1xuICAgICAgY2hpbGRMaXN0OiAhMCxcbiAgICAgIHN1YnRyZWU6ICEwXG4gICAgfSkpO1xuICB9XG4gIGZ1bmN0aW9uIEMoYSkge1xuICAgIGEuYiAmJiBhLmIuZGlzY29ubmVjdCgpO1xuICB9XG4gIEIucHJvdG90eXBlLmYgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gdGhpcy5hLnJlYWR5U3RhdGU7XG4gICAgXCJpbnRlcmFjdGl2ZVwiICE9PSBiICYmIFwiY29tcGxldGVcIiAhPT0gYiB8fCBDKHRoaXMpO1xuICAgIGZvciAoYiA9IDA7IGIgPCBhLmxlbmd0aDsgYisrKSBmb3IgKHZhciBkID0gYVtiXS5hZGRlZE5vZGVzLCBjID0gMDsgYyA8IGQubGVuZ3RoOyBjKyspIEEodGhpcy5jLCBkW2NdKTtcbiAgfTtcbiAgZnVuY3Rpb24gZWEoKSB7XG4gICAgdmFyIGEgPSB0aGlzO1xuICAgIHRoaXMuYiA9IHRoaXMuYSA9IHZvaWQgMDtcbiAgICB0aGlzLmMgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYikge1xuICAgICAgYS5iID0gYjtcbiAgICAgIGEuYSAmJiBiKGEuYSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gRChhKSB7XG4gICAgaWYgKGEuYSkgdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTtcbiAgICBhLmEgPSB2b2lkIDA7XG4gICAgYS5iICYmIGEuYih2b2lkIDApO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gRShhKSB7XG4gICAgdGhpcy5jID0gITE7XG4gICAgdGhpcy5hID0gYTtcbiAgICB0aGlzLmogPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5mID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgIHJldHVybiBiKCk7XG4gICAgfTtcbiAgICB0aGlzLmIgPSAhMTtcbiAgICB0aGlzLmcgPSBbXTtcbiAgICB0aGlzLm8gPSBuZXcgQihhKTtcbiAgfVxuICBFLnByb3RvdHlwZS5sID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgZCA9IHRoaXM7XG4gICAgaWYgKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7XG4gICAgaWYgKCFnKGEpKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIiArIGEgKyBcIicgaXMgbm90IHZhbGlkLlwiKTtcbiAgICBpZiAodGhpcy5hLmEuZ2V0KGEpKSB0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIiArIGEgKyBcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtcbiAgICBpZiAodGhpcy5jKSB0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTtcbiAgICB0aGlzLmMgPSAhMDtcbiAgICB0cnkge1xuICAgICAgdmFyIGMgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHZhciBhID0gZVtiXTtcbiAgICAgICAgICBpZiAodm9pZCAwICE9PSBhICYmICEoYSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgRXJyb3IoXCJUaGUgJ1wiICsgYiArIFwiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9LFxuICAgICAgICBlID0gYi5wcm90b3R5cGU7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgT2JqZWN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgIHZhciBmID0gYyhcImNvbm5lY3RlZENhbGxiYWNrXCIpO1xuICAgICAgdmFyIHQgPSBjKFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIik7XG4gICAgICB2YXIgayA9IGMoXCJhZG9wdGVkQ2FsbGJhY2tcIik7XG4gICAgICB2YXIgaCA9IGMoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIik7XG4gICAgICB2YXIgbSA9IGIub2JzZXJ2ZWRBdHRyaWJ1dGVzIHx8IFtdO1xuICAgIH0gY2F0Y2ggKHEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5jID0gITE7XG4gICAgfVxuICAgIGIgPSB7XG4gICAgICBsb2NhbE5hbWU6IGEsXG4gICAgICBjb25zdHJ1Y3RvckZ1bmN0aW9uOiBiLFxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2s6IGYsXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjazogdCxcbiAgICAgIGFkb3B0ZWRDYWxsYmFjazogayxcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazogaCxcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlczogbSxcbiAgICAgIGNvbnN0cnVjdGlvblN0YWNrOiBbXVxuICAgIH07XG4gICAgYmEodGhpcy5hLCBhLCBiKTtcbiAgICB0aGlzLmcucHVzaChiKTtcbiAgICB0aGlzLmIgfHwgKHRoaXMuYiA9ICEwLCB0aGlzLmYoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhKGQpO1xuICAgIH0pKTtcbiAgfTtcbiAgRS5wcm90b3R5cGUuaSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgQSh0aGlzLmEsIGEpO1xuICB9O1xuICBmdW5jdGlvbiBmYShhKSB7XG4gICAgaWYgKCExICE9PSBhLmIpIHtcbiAgICAgIGEuYiA9ICExO1xuICAgICAgZm9yICh2YXIgYiA9IGEuZywgZCA9IFtdLCBjID0gbmV3IE1hcCgpLCBlID0gMDsgZSA8IGIubGVuZ3RoOyBlKyspIGMuc2V0KGJbZV0ubG9jYWxOYW1lLCBbXSk7XG4gICAgICBBKGEuYSwgZG9jdW1lbnQsIHtcbiAgICAgICAgaTogZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICBpZiAodm9pZCAwID09PSBiLl9fQ0Vfc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBlID0gYi5sb2NhbE5hbWUsXG4gICAgICAgICAgICAgIGYgPSBjLmdldChlKTtcbiAgICAgICAgICAgIGYgPyBmLnB1c2goYikgOiBhLmEuYS5nZXQoZSkgJiYgZC5wdXNoKGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmb3IgKGUgPSAwOyBlIDwgZC5sZW5ndGg7IGUrKykgeShhLmEsIGRbZV0pO1xuICAgICAgZm9yICg7IDAgPCBiLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGYgPSBiLnNoaWZ0KCk7XG4gICAgICAgIGUgPSBmLmxvY2FsTmFtZTtcbiAgICAgICAgZiA9IGMuZ2V0KGYubG9jYWxOYW1lKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBmLmxlbmd0aDsgdCsrKSB5KGEuYSwgZlt0XSk7XG4gICAgICAgIChlID0gYS5qLmdldChlKSkgJiYgRChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgRS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICBpZiAoYSA9IHRoaXMuYS5hLmdldChhKSkgcmV0dXJuIGEuY29uc3RydWN0b3JGdW5jdGlvbjtcbiAgfTtcbiAgRS5wcm90b3R5cGUubSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKCFnKGEpKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiICsgYSArIFwiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7XG4gICAgdmFyIGIgPSB0aGlzLmouZ2V0KGEpO1xuICAgIGlmIChiKSByZXR1cm4gYi5jO1xuICAgIGIgPSBuZXcgZWEoKTtcbiAgICB0aGlzLmouc2V0KGEsIGIpO1xuICAgIHRoaXMuYS5hLmdldChhKSAmJiAhdGhpcy5nLnNvbWUoZnVuY3Rpb24gKGIpIHtcbiAgICAgIHJldHVybiBiLmxvY2FsTmFtZSA9PT0gYTtcbiAgICB9KSAmJiBEKGIpO1xuICAgIHJldHVybiBiLmM7XG4gIH07XG4gIEUucHJvdG90eXBlLnMgPSBmdW5jdGlvbiAoYSkge1xuICAgIEModGhpcy5vKTtcbiAgICB2YXIgYiA9IHRoaXMuZjtcbiAgICB0aGlzLmYgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGEoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYihkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG4gIHdpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnkgPSBFO1xuICBFLnByb3RvdHlwZS5kZWZpbmUgPSBFLnByb3RvdHlwZS5sO1xuICBFLnByb3RvdHlwZS51cGdyYWRlID0gRS5wcm90b3R5cGUuaTtcbiAgRS5wcm90b3R5cGUuZ2V0ID0gRS5wcm90b3R5cGUuZ2V0O1xuICBFLnByb3RvdHlwZS53aGVuRGVmaW5lZCA9IEUucHJvdG90eXBlLm07XG4gIEUucHJvdG90eXBlLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgPSBFLnByb3RvdHlwZS5zO1xuICB2YXIgRiA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxcbiAgICBHID0gd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsXG4gICAgaGEgPSB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsXG4gICAgaWEgPSB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsXG4gICAgamEgPSB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxcbiAgICBrYSA9IHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5wcmVwZW5kLFxuICAgIGxhID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxcbiAgICBIID0gd2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxcbiAgICBJID0gd2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuICAgIEogPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLFxuICAgIEsgPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsXG4gICAgTCA9IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsXG4gICAgTSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLCBcInRleHRDb250ZW50XCIpLFxuICAgIE4gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LFxuICAgIE8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSwgXCJpbm5lckhUTUxcIiksXG4gICAgUCA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsXG4gICAgUSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsXG4gICAgUiA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsXG4gICAgUyA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxcbiAgICBUID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFxuICAgIFUgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsXG4gICAgbWEgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LFxuICAgIG5hID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTCxcbiAgICBvYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLFxuICAgIHBhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxcbiAgICBWID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxcbiAgICBxYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZnRlcixcbiAgICByYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxcbiAgICBzYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUsXG4gICAgdGEgPSB3aW5kb3cuSFRNTEVsZW1lbnQsXG4gICAgVyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSwgXCJpbm5lckhUTUxcIiksXG4gICAgdWEgPSB3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxcbiAgICB2YSA9IHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MO1xuICB2YXIgd2EgPSBuZXcgZnVuY3Rpb24gKCkge30oKTtcbiAgZnVuY3Rpb24geGEoKSB7XG4gICAgdmFyIGEgPSBYO1xuICAgIHdpbmRvdy5IVE1MRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGIoKSB7XG4gICAgICAgIHZhciBiID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjID0gYS5nLmdldChiKTtcbiAgICAgICAgaWYgKCFjKSB0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTtcbiAgICAgICAgdmFyIGUgPSBjLmNvbnN0cnVjdGlvblN0YWNrO1xuICAgICAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiBlID0gRi5jYWxsKGRvY3VtZW50LCBjLmxvY2FsTmFtZSksIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCBiLnByb3RvdHlwZSksIGUuX19DRV9zdGF0ZSA9IDEsIGUuX19DRV9kZWZpbml0aW9uID0gYywgdyhhLCBlKSwgZTtcbiAgICAgICAgYyA9IGUubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGYgPSBlW2NdO1xuICAgICAgICBpZiAoZiA9PT0gd2EpIHRocm93IEVycm9yKFwiVGhlIEhUTUxFbGVtZW50IGNvbnN0cnVjdG9yIHdhcyBlaXRoZXIgY2FsbGVkIHJlZW50cmFudGx5IGZvciB0aGlzIGNvbnN0cnVjdG9yIG9yIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cIik7XG4gICAgICAgIGVbY10gPSB3YTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGYsIGIucHJvdG90eXBlKTtcbiAgICAgICAgdyhhLCBmKTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9XG4gICAgICBiLnByb3RvdHlwZSA9IHRhLnByb3RvdHlwZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHZhbHVlOiBiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBiO1xuICAgIH0oKTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIFkoYSwgYiwgZCkge1xuICAgIGZ1bmN0aW9uIGMoYikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGZvciAodmFyIGUgPSBbXSwgYyA9IDA7IGMgPCBhcmd1bWVudHMubGVuZ3RoOyArK2MpIGVbY10gPSBhcmd1bWVudHNbY107XG4gICAgICAgIGMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZiA9IFtdLCBtID0gMDsgbSA8IGUubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICB2YXIgcSA9IGVbbV07XG4gICAgICAgICAgcSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbChxKSAmJiBmLnB1c2gocSk7XG4gICAgICAgICAgaWYgKHEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSBmb3IgKHEgPSBxLmZpcnN0Q2hpbGQ7IHE7IHEgPSBxLm5leHRTaWJsaW5nKSBjLnB1c2gocSk7ZWxzZSBjLnB1c2gocSk7XG4gICAgICAgIH1cbiAgICAgICAgYi5hcHBseSh0aGlzLCBlKTtcbiAgICAgICAgZm9yIChlID0gMDsgZSA8IGYubGVuZ3RoOyBlKyspIHooYSwgZltlXSk7XG4gICAgICAgIGlmIChsKHRoaXMpKSBmb3IgKGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKykgZiA9IGNbZV0sIGYgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHgoYSwgZik7XG4gICAgICB9O1xuICAgIH1cbiAgICB2b2lkIDAgIT09IGQuaCAmJiAoYi5wcmVwZW5kID0gYyhkLmgpKTtcbiAgICB2b2lkIDAgIT09IGQuYXBwZW5kICYmIChiLmFwcGVuZCA9IGMoZC5hcHBlbmQpKTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIHlhKCkge1xuICAgIHZhciBhID0gWDtcbiAgICByKERvY3VtZW50LnByb3RvdHlwZSwgXCJjcmVhdGVFbGVtZW50XCIsIGZ1bmN0aW9uIChiKSB7XG4gICAgICBpZiAodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KSB7XG4gICAgICAgIHZhciBkID0gYS5hLmdldChiKTtcbiAgICAgICAgaWYgKGQpIHJldHVybiBuZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICBiID0gRi5jYWxsKHRoaXMsIGIpO1xuICAgICAgdyhhLCBiKTtcbiAgICAgIHJldHVybiBiO1xuICAgIH0pO1xuICAgIHIoRG9jdW1lbnQucHJvdG90eXBlLCBcImltcG9ydE5vZGVcIiwgZnVuY3Rpb24gKGIsIGQpIHtcbiAgICAgIGIgPSBoYS5jYWxsKHRoaXMsIGIsICEhZCk7XG4gICAgICB0aGlzLl9fQ0VfaGFzUmVnaXN0cnkgPyBBKGEsIGIpIDogdihhLCBiKTtcbiAgICAgIHJldHVybiBiO1xuICAgIH0pO1xuICAgIHIoRG9jdW1lbnQucHJvdG90eXBlLCBcImNyZWF0ZUVsZW1lbnROU1wiLCBmdW5jdGlvbiAoYiwgZCkge1xuICAgICAgaWYgKHRoaXMuX19DRV9oYXNSZWdpc3RyeSAmJiAobnVsbCA9PT0gYiB8fCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiA9PT0gYikpIHtcbiAgICAgICAgdmFyIGMgPSBhLmEuZ2V0KGQpO1xuICAgICAgICBpZiAoYykgcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGIgPSBHLmNhbGwodGhpcywgYiwgZCk7XG4gICAgICB3KGEsIGIpO1xuICAgICAgcmV0dXJuIGI7XG4gICAgfSk7XG4gICAgWShhLCBEb2N1bWVudC5wcm90b3R5cGUsIHtcbiAgICAgIGg6IGlhLFxuICAgICAgYXBwZW5kOiBqYVxuICAgIH0pO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gemEoKSB7XG4gICAgZnVuY3Rpb24gYShhLCBjKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJ0ZXh0Q29udGVudFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGMuZW51bWVyYWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBjLmdldCxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkgYy5zZXQuY2FsbCh0aGlzLCBhKTtlbHNlIHtcbiAgICAgICAgICAgIHZhciBkID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2hpbGROb2RlcyxcbiAgICAgICAgICAgICAgICBrID0gZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmICgwIDwgayAmJiBsKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgZCA9IEFycmF5KGspO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgazsgaCsrKSBkW2hdID0gZVtoXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYy5zZXQuY2FsbCh0aGlzLCBhKTtcbiAgICAgICAgICAgIGlmIChkKSBmb3IgKGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykgeihiLCBkW2FdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYiA9IFg7XG4gICAgcihOb2RlLnByb3RvdHlwZSwgXCJpbnNlcnRCZWZvcmVcIiwgZnVuY3Rpb24gKGEsIGMpIHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICB2YXIgZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO1xuICAgICAgICBhID0gSi5jYWxsKHRoaXMsIGEsIGMpO1xuICAgICAgICBpZiAobCh0aGlzKSkgZm9yIChjID0gMDsgYyA8IGUubGVuZ3RoOyBjKyspIHgoYiwgZVtjXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgICAgZSA9IGwoYSk7XG4gICAgICBjID0gSi5jYWxsKHRoaXMsIGEsIGMpO1xuICAgICAgZSAmJiB6KGIsIGEpO1xuICAgICAgbCh0aGlzKSAmJiB4KGIsIGEpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gICAgcihOb2RlLnByb3RvdHlwZSwgXCJhcHBlbmRDaGlsZFwiLCBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHZhciBjID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7XG4gICAgICAgIGEgPSBJLmNhbGwodGhpcywgYSk7XG4gICAgICAgIGlmIChsKHRoaXMpKSBmb3IgKHZhciBlID0gMDsgZSA8IGMubGVuZ3RoOyBlKyspIHgoYiwgY1tlXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgICAgYyA9IGwoYSk7XG4gICAgICBlID0gSS5jYWxsKHRoaXMsIGEpO1xuICAgICAgYyAmJiB6KGIsIGEpO1xuICAgICAgbCh0aGlzKSAmJiB4KGIsIGEpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gICAgcihOb2RlLnByb3RvdHlwZSwgXCJjbG9uZU5vZGVcIiwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIGEgPSBILmNhbGwodGhpcywgISFhKTtcbiAgICAgIHRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5ID8gQShiLCBhKSA6IHYoYiwgYSk7XG4gICAgICByZXR1cm4gYTtcbiAgICB9KTtcbiAgICByKE5vZGUucHJvdG90eXBlLCBcInJlbW92ZUNoaWxkXCIsIGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYyA9IGwoYSksXG4gICAgICAgIGUgPSBLLmNhbGwodGhpcywgYSk7XG4gICAgICBjICYmIHooYiwgYSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICByKE5vZGUucHJvdG90eXBlLCBcInJlcGxhY2VDaGlsZFwiLCBmdW5jdGlvbiAoYSwgYykge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHZhciBlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7XG4gICAgICAgIGEgPSBMLmNhbGwodGhpcywgYSwgYyk7XG4gICAgICAgIGlmIChsKHRoaXMpKSBmb3IgKHooYiwgYyksIGMgPSAwOyBjIDwgZS5sZW5ndGg7IGMrKykgeChiLCBlW2NdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICBlID0gbChhKTtcbiAgICAgIHZhciBmID0gTC5jYWxsKHRoaXMsIGEsIGMpLFxuICAgICAgICBkID0gbCh0aGlzKTtcbiAgICAgIGQgJiYgeihiLCBjKTtcbiAgICAgIGUgJiYgeihiLCBhKTtcbiAgICAgIGQgJiYgeChiLCBhKTtcbiAgICAgIHJldHVybiBmO1xuICAgIH0pO1xuICAgIE0gJiYgTS5nZXQgPyBhKE5vZGUucHJvdG90eXBlLCBNKSA6IGNhKGIsIGZ1bmN0aW9uIChiKSB7XG4gICAgICBhKGIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgYiA9IDA7IGIgPCB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgIHZhciBmID0gdGhpcy5jaGlsZE5vZGVzW2JdO1xuICAgICAgICAgICAgZi5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUgJiYgYS5wdXNoKGYudGV4dENvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYS5qb2luKFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgZm9yICg7IHRoaXMuZmlyc3RDaGlsZDspIEsuY2FsbCh0aGlzLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIG51bGwgIT0gYSAmJiBcIlwiICE9PSBhICYmIEkuY2FsbCh0aGlzLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gQWEoYSkge1xuICAgIGZ1bmN0aW9uIGIoYikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSBbXSwgZCA9IDA7IGQgPCBhcmd1bWVudHMubGVuZ3RoOyArK2QpIGNbZF0gPSBhcmd1bWVudHNbZF07XG4gICAgICAgIGQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayA9IFtdLCBoID0gMDsgaCA8IGMubGVuZ3RoOyBoKyspIHtcbiAgICAgICAgICB2YXIgbSA9IGNbaF07XG4gICAgICAgICAgbSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbChtKSAmJiBrLnB1c2gobSk7XG4gICAgICAgICAgaWYgKG0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSBmb3IgKG0gPSBtLmZpcnN0Q2hpbGQ7IG07IG0gPSBtLm5leHRTaWJsaW5nKSBkLnB1c2gobSk7ZWxzZSBkLnB1c2gobSk7XG4gICAgICAgIH1cbiAgICAgICAgYi5hcHBseSh0aGlzLCBjKTtcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IGsubGVuZ3RoOyBjKyspIHooYSwga1tjXSk7XG4gICAgICAgIGlmIChsKHRoaXMpKSBmb3IgKGMgPSAwOyBjIDwgZC5sZW5ndGg7IGMrKykgayA9IGRbY10sIGsgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHgoYSwgayk7XG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgZCA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIHZvaWQgMCAhPT0gViAmJiAoZC5iZWZvcmUgPSBiKFYpKTtcbiAgICB2b2lkIDAgIT09IFYgJiYgKGQuYWZ0ZXIgPSBiKHFhKSk7XG4gICAgdm9pZCAwICE9PSByYSAmJiByKGQsIFwicmVwbGFjZVdpdGhcIiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGZvciAodmFyIGUgPSBbXSwgYyA9IDA7IGMgPCBhcmd1bWVudHMubGVuZ3RoOyArK2MpIGVbY10gPSBhcmd1bWVudHNbY107XG4gICAgICBjID0gW107XG4gICAgICBmb3IgKHZhciBkID0gW10sIGsgPSAwOyBrIDwgZS5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaCA9IGVba107XG4gICAgICAgIGggaW5zdGFuY2VvZiBFbGVtZW50ICYmIGwoaCkgJiYgZC5wdXNoKGgpO1xuICAgICAgICBpZiAoaCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIGZvciAoaCA9IGguZmlyc3RDaGlsZDsgaDsgaCA9IGgubmV4dFNpYmxpbmcpIGMucHVzaChoKTtlbHNlIGMucHVzaChoKTtcbiAgICAgIH1cbiAgICAgIGsgPSBsKHRoaXMpO1xuICAgICAgcmEuYXBwbHkodGhpcywgZSk7XG4gICAgICBmb3IgKGUgPSAwOyBlIDwgZC5sZW5ndGg7IGUrKykgeihhLCBkW2VdKTtcbiAgICAgIGlmIChrKSBmb3IgKHooYSwgdGhpcyksIGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKykgZCA9IGNbZV0sIGQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHgoYSwgZCk7XG4gICAgfSk7XG4gICAgdm9pZCAwICE9PSBzYSAmJiByKGQsIFwicmVtb3ZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBiID0gbCh0aGlzKTtcbiAgICAgIHNhLmNhbGwodGhpcyk7XG4gICAgICBiICYmIHooYSwgdGhpcyk7XG4gICAgfSk7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiBCYSgpIHtcbiAgICBmdW5jdGlvbiBhKGEsIGIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcImlubmVySFRNTFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGIuZW51bWVyYWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBiLmdldCxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHZhciBlID0gdGhpcyxcbiAgICAgICAgICAgIGQgPSB2b2lkIDA7XG4gICAgICAgICAgbCh0aGlzKSAmJiAoZCA9IFtdLCBwKHRoaXMsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBhICE9PSBlICYmIGQucHVzaChhKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgYi5zZXQuY2FsbCh0aGlzLCBhKTtcbiAgICAgICAgICBpZiAoZCkgZm9yICh2YXIgZiA9IDA7IGYgPCBkLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGRbZl07XG4gICAgICAgICAgICAxID09PSB0Ll9fQ0Vfc3RhdGUgJiYgYy5kaXNjb25uZWN0ZWRDYWxsYmFjayh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPyBBKGMsIHRoaXMpIDogdihjLCB0aGlzKTtcbiAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGIoYSwgYikge1xuICAgICAgcihhLCBcImluc2VydEFkamFjZW50RWxlbWVudFwiLCBmdW5jdGlvbiAoYSwgZSkge1xuICAgICAgICB2YXIgZCA9IGwoZSk7XG4gICAgICAgIGEgPSBiLmNhbGwodGhpcywgYSwgZSk7XG4gICAgICAgIGQgJiYgeihjLCBlKTtcbiAgICAgICAgbChhKSAmJiB4KGMsIGUpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkKGEsIGIpIHtcbiAgICAgIGZ1bmN0aW9uIGUoYSwgYikge1xuICAgICAgICBmb3IgKHZhciBlID0gW107IGEgIT09IGI7IGEgPSBhLm5leHRTaWJsaW5nKSBlLnB1c2goYSk7XG4gICAgICAgIGZvciAoYiA9IDA7IGIgPCBlLmxlbmd0aDsgYisrKSBBKGMsIGVbYl0pO1xuICAgICAgfVxuICAgICAgcihhLCBcImluc2VydEFkamFjZW50SFRNTFwiLCBmdW5jdGlvbiAoYSwgYykge1xuICAgICAgICBhID0gYS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoXCJiZWZvcmViZWdpblwiID09PSBhKSB7XG4gICAgICAgICAgdmFyIGQgPSB0aGlzLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICBiLmNhbGwodGhpcywgYSwgYyk7XG4gICAgICAgICAgZShkIHx8IHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChcImFmdGVyYmVnaW5cIiA9PT0gYSkgZCA9IHRoaXMuZmlyc3RDaGlsZCwgYi5jYWxsKHRoaXMsIGEsIGMpLCBlKHRoaXMuZmlyc3RDaGlsZCwgZCk7ZWxzZSBpZiAoXCJiZWZvcmVlbmRcIiA9PT0gYSkgZCA9IHRoaXMubGFzdENoaWxkLCBiLmNhbGwodGhpcywgYSwgYyksIGUoZCB8fCB0aGlzLmZpcnN0Q2hpbGQsIG51bGwpO2Vsc2UgaWYgKFwiYWZ0ZXJlbmRcIiA9PT0gYSkgZCA9IHRoaXMubmV4dFNpYmxpbmcsIGIuY2FsbCh0aGlzLCBhLCBjKSwgZSh0aGlzLm5leHRTaWJsaW5nLCBkKTtlbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSB2YWx1ZSBwcm92aWRlZCAoXCIgKyBTdHJpbmcoYSkgKyBcIikgaXMgbm90IG9uZSBvZiAnYmVmb3JlYmVnaW4nLCAnYWZ0ZXJiZWdpbicsICdiZWZvcmVlbmQnLCBvciAnYWZ0ZXJlbmQnLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYyA9IFg7XG4gICAgTiAmJiByKEVsZW1lbnQucHJvdG90eXBlLCBcImF0dGFjaFNoYWRvd1wiLCBmdW5jdGlvbiAoYSkge1xuICAgICAgYSA9IE4uY2FsbCh0aGlzLCBhKTtcbiAgICAgIHZhciBiID0gYztcbiAgICAgIGlmIChiLmIgJiYgIWEuX19DRV9wYXRjaGVkKSB7XG4gICAgICAgIGEuX19DRV9wYXRjaGVkID0gITA7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYi5jLmxlbmd0aDsgZSsrKSBiLmNbZV0oYSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX0NFX3NoYWRvd1Jvb3QgPSBhO1xuICAgIH0pO1xuICAgIE8gJiYgTy5nZXQgPyBhKEVsZW1lbnQucHJvdG90eXBlLCBPKSA6IFcgJiYgVy5nZXQgPyBhKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgVykgOiBkYShjLCBmdW5jdGlvbiAoYikge1xuICAgICAgYShiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gSC5jYWxsKHRoaXMsICEwKS5pbm5lckhUTUw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICB2YXIgYiA9IFwidGVtcGxhdGVcIiA9PT0gdGhpcy5sb2NhbE5hbWUsXG4gICAgICAgICAgICBjID0gYiA/IHRoaXMuY29udGVudCA6IHRoaXMsXG4gICAgICAgICAgICBlID0gRy5jYWxsKGRvY3VtZW50LCB0aGlzLm5hbWVzcGFjZVVSSSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICAgIGZvciAoZS5pbm5lckhUTUwgPSBhOyAwIDwgYy5jaGlsZE5vZGVzLmxlbmd0aDspIEsuY2FsbChjLCBjLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgIGZvciAoYSA9IGIgPyBlLmNvbnRlbnQgOiBlOyAwIDwgYS5jaGlsZE5vZGVzLmxlbmd0aDspIEkuY2FsbChjLCBhLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByKEVsZW1lbnQucHJvdG90eXBlLCBcInNldEF0dHJpYnV0ZVwiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKDEgIT09IHRoaXMuX19DRV9zdGF0ZSkgcmV0dXJuIFEuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIHZhciBlID0gUC5jYWxsKHRoaXMsIGEpO1xuICAgICAgUS5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgYiA9IFAuY2FsbCh0aGlzLCBhKTtcbiAgICAgIGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIGEsIGUsIGIsIG51bGwpO1xuICAgIH0pO1xuICAgIHIoRWxlbWVudC5wcm90b3R5cGUsIFwic2V0QXR0cmlidXRlTlNcIiwgZnVuY3Rpb24gKGEsIGIsIGQpIHtcbiAgICAgIGlmICgxICE9PSB0aGlzLl9fQ0Vfc3RhdGUpIHJldHVybiBULmNhbGwodGhpcywgYSwgYiwgZCk7XG4gICAgICB2YXIgZSA9IFMuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIFQuY2FsbCh0aGlzLCBhLCBiLCBkKTtcbiAgICAgIGQgPSBTLmNhbGwodGhpcywgYSwgYik7XG4gICAgICBjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLCBiLCBlLCBkLCBhKTtcbiAgICB9KTtcbiAgICByKEVsZW1lbnQucHJvdG90eXBlLCBcInJlbW92ZUF0dHJpYnV0ZVwiLCBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKDEgIT09IHRoaXMuX19DRV9zdGF0ZSkgcmV0dXJuIFIuY2FsbCh0aGlzLCBhKTtcbiAgICAgIHZhciBiID0gUC5jYWxsKHRoaXMsIGEpO1xuICAgICAgUi5jYWxsKHRoaXMsIGEpO1xuICAgICAgbnVsbCAhPT0gYiAmJiBjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLCBhLCBiLCBudWxsLCBudWxsKTtcbiAgICB9KTtcbiAgICByKEVsZW1lbnQucHJvdG90eXBlLCBcInJlbW92ZUF0dHJpYnV0ZU5TXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoMSAhPT0gdGhpcy5fX0NFX3N0YXRlKSByZXR1cm4gVS5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgdmFyIGQgPSBTLmNhbGwodGhpcywgYSwgYik7XG4gICAgICBVLmNhbGwodGhpcywgYSwgYik7XG4gICAgICB2YXIgZSA9IFMuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIGQgIT09IGUgJiYgYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgYiwgZCwgZSwgYSk7XG4gICAgfSk7XG4gICAgdWEgPyBiKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgdWEpIDogbWEgPyBiKEVsZW1lbnQucHJvdG90eXBlLCBtYSkgOiBjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtcbiAgICB2YSA/IGQoSFRNTEVsZW1lbnQucHJvdG90eXBlLCB2YSkgOiBuYSA/IGQoRWxlbWVudC5wcm90b3R5cGUsIG5hKSA6IGNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRIVE1MYCB3YXMgbm90IHBhdGNoZWQuXCIpO1xuICAgIFkoYywgRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICAgIGg6IG9hLFxuICAgICAgYXBwZW5kOiBwYVxuICAgIH0pO1xuICAgIEFhKGMpO1xuICB9XG4gIDtcbiAgdmFyIFogPSB3aW5kb3cuY3VzdG9tRWxlbWVudHM7XG4gIGlmICghWiB8fCBaLmZvcmNlUG9seWZpbGwgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBaLmRlZmluZSB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIFouZ2V0KSB7XG4gICAgdmFyIFggPSBuZXcgdSgpO1xuICAgIHhhKCk7XG4gICAgeWEoKTtcbiAgICBZKFgsIERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLCB7XG4gICAgICBoOiBrYSxcbiAgICAgIGFwcGVuZDogbGFcbiAgICB9KTtcbiAgICB6YSgpO1xuICAgIEJhKCk7XG4gICAgZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSA9ICEwO1xuICAgIHZhciBjdXN0b21FbGVtZW50cyA9IG5ldyBFKFgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiY3VzdG9tRWxlbWVudHNcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgdmFsdWU6IGN1c3RvbUVsZW1lbnRzXG4gICAgfSk7XG4gIH1cbiAgO1xufSkuY2FsbChzZWxmKTtcblxuLy8gUG9seWZpbGwgZG9jdW1lbnQuYmFzZVVSSVxuXCJzdHJpbmdcIiAhPT0gdHlwZW9mIGRvY3VtZW50LmJhc2VVUkkgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KERvY3VtZW50LnByb3RvdHlwZSwgXCJiYXNlVVJJXCIsIHtcbiAgZW51bWVyYWJsZTogITAsXG4gIGNvbmZpZ3VyYWJsZTogITAsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7XG4gICAgcmV0dXJuIGEgJiYgYS5ocmVmID8gYS5ocmVmIDogZG9jdW1lbnQuVVJMO1xuICB9XG59KTtcblxuLy8gUG9seWZpbGwgQ3VzdG9tRXZlbnRcblwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAmJiAod2luZG93LkN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGMsIGEpIHtcbiAgYSA9IGEgfHwge1xuICAgIGJ1YmJsZXM6ICExLFxuICAgIGNhbmNlbGFibGU6ICExLFxuICAgIGRldGFpbDogdm9pZCAwXG4gIH07XG4gIHZhciBiID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgYi5pbml0Q3VzdG9tRXZlbnQoYywgYS5idWJibGVzLCBhLmNhbmNlbGFibGUsIGEuZGV0YWlsKTtcbiAgcmV0dXJuIGI7XG59LCB3aW5kb3cuQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZSk7XG5cbi8vIEV2ZW50LmNvbXBvc2VkUGF0aFxuKGZ1bmN0aW9uIChiLCBjLCBkKSB7XG4gIGIuY29tcG9zZWRQYXRoIHx8IChiLmNvbXBvc2VkUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wYXRoKSByZXR1cm4gdGhpcy5wYXRoO1xuICAgIHZhciBhID0gdGhpcy50YXJnZXQ7XG4gICAgZm9yICh0aGlzLnBhdGggPSBbXTsgbnVsbCAhPT0gYS5wYXJlbnROb2RlOykgdGhpcy5wYXRoLnB1c2goYSksIGEgPSBhLnBhcmVudE5vZGU7XG4gICAgdGhpcy5wYXRoLnB1c2goYywgZCk7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfSk7XG59KShFdmVudC5wcm90b3R5cGUsIGRvY3VtZW50LCB3aW5kb3cpO1xuXG4vKiFcbkVsZW1lbnQuY2xvc2VzdCBhbmQgRWxlbWVudC5tYXRjaGVzXG5odHRwczovL2dpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9jbG9zZXN0XG5DcmVhdGl2ZSBDb21tb25zIFplcm8gdjEuMCBVbml2ZXJzYWxcbiovXG4oZnVuY3Rpb24gKGEpIHtcbiAgXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgYS5tYXRjaGVzICYmIChhLm1hdGNoZXMgPSBhLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGEubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIChhKSB7XG4gICAgYSA9ICh0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChhKTtcbiAgICBmb3IgKHZhciBiID0gMDsgYVtiXSAmJiBhW2JdICE9PSB0aGlzOykgKytiO1xuICAgIHJldHVybiAhIWFbYl07XG4gIH0pO1xuICBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBhLmNsb3Nlc3QgJiYgKGEuY2xvc2VzdCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgZm9yICh2YXIgYiA9IHRoaXM7IGIgJiYgMSA9PT0gYi5ub2RlVHlwZTspIHtcbiAgICAgIGlmIChiLm1hdGNoZXMoYSkpIHJldHVybiBiO1xuICAgICAgYiA9IGIucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufSkod2luZG93LkVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LmdldFJvb3ROb2RlKClcbiovXG4oZnVuY3Rpb24gKGMpIHtcbiAgZnVuY3Rpb24gZChhKSB7XG4gICAgYSA9IGIoYSk7XG4gICAgcmV0dXJuIGEgJiYgMTEgPT09IGEubm9kZVR5cGUgPyBkKGEuaG9zdCkgOiBhO1xuICB9XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgIHJldHVybiBhICYmIGEucGFyZW50Tm9kZSA/IGIoYS5wYXJlbnROb2RlKSA6IGE7XG4gIH1cbiAgXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgYy5nZXRSb290Tm9kZSAmJiAoYy5nZXRSb290Tm9kZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEgJiYgYS5jb21wb3NlZCA/IGQodGhpcykgOiBiKHRoaXMpO1xuICB9KTtcbn0pKEVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LmlzQ29ubmVjdGVkKClcbiovXG4oZnVuY3Rpb24gKGEpIHtcbiAgXCJpc0Nvbm5lY3RlZFwiIGluIGEgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiaXNDb25uZWN0ZWRcIiwge1xuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0Um9vdE5vZGUoe1xuICAgICAgICBjb21wb3NlZDogITBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGEgJiYgOSA9PT0gYS5ub2RlVHlwZTtcbiAgICB9XG4gIH0pO1xufSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQucmVtb3ZlKClcbiovXG4oZnVuY3Rpb24gKGIpIHtcbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgYS5oYXNPd25Qcm9wZXJ0eShcInJlbW92ZVwiKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJyZW1vdmVcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCAhPT0gdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7XG5cbi8qIVxuRWxlbWVudC5jbGFzc0xpc3RcbiovXG4hZnVuY3Rpb24gKGUpIHtcbiAgJ2NsYXNzTGlzdCcgaW4gZSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJjbGFzc0xpc3RcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB0aGlzLFxuICAgICAgICB0ID0gKGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIikucmVwbGFjZSgvXlxccyt8XFxzJC9nLCBcIlwiKS5zcGxpdCgvXFxzKy9nKTtcbiAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgIHQubGVuZ3RoID4gMCA/IGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdC5qb2luKFwiIFwiKSkgOiBlLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCIgPT09IHRbMF0gJiYgdC5zcGxpY2UoMCwgMSksIHQudG9nZ2xlID0gZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgdm9pZCAwICE9PSBpID8gaSA/IHQuYWRkKGUpIDogdC5yZW1vdmUoZSkgOiAtMSAhPT0gdC5pbmRleE9mKGUpID8gdC5zcGxpY2UodC5pbmRleE9mKGUpLCAxKSA6IHQucHVzaChlKSwgbigpO1xuICAgICAgfSwgdC5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGUgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGkgPSAwLCBzID0gZS5sZW5ndGg7IGkgPCBzOyBpKyspIC0xID09PSB0LmluZGV4T2YoZVtpXSkgJiYgdC5wdXNoKGVbaV0pO1xuICAgICAgICBuKCk7XG4gICAgICB9LCB0LnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgaSA9IDAsIHMgPSBlLmxlbmd0aDsgaSA8IHM7IGkrKykgLTEgIT09IHQuaW5kZXhPZihlW2ldKSAmJiB0LnNwbGljZSh0LmluZGV4T2YoZVtpXSksIDEpO1xuICAgICAgICBuKCk7XG4gICAgICB9LCB0Lml0ZW0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdFtlXTtcbiAgICAgIH0sIHQuY29udGFpbnMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gLTEgIT09IHQuaW5kZXhPZihlKTtcbiAgICAgIH0sIHQucmVwbGFjZSA9IGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgIC0xICE9PSB0LmluZGV4T2YoZSkgJiYgdC5zcGxpY2UodC5pbmRleE9mKGUpLCAxLCBpKSwgbigpO1xuICAgICAgfSwgdC52YWx1ZSA9IGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIiwgdDtcbiAgICB9XG4gIH0pO1xufShFbGVtZW50LnByb3RvdHlwZSk7XG5cbi8qIVxuRE9NVG9rZW5MaXN0XG4qL1xuKGZ1bmN0aW9uIChiKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgYyA9IGIuYWRkLFxuICAgICAgZCA9IGIucmVtb3ZlO1xuICAgIGIuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBhcmd1bWVudHMubGVuZ3RoOyBhKyspIGMuY2FsbCh0aGlzLCBhcmd1bWVudHNbYV0pO1xuICAgIH07XG4gICAgYi5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFyZ3VtZW50cy5sZW5ndGg7IGErKykgZC5jYWxsKHRoaXMsIGFyZ3VtZW50c1thXSk7XG4gICAgfTtcbiAgfVxufSkoRE9NVG9rZW5MaXN0LnByb3RvdHlwZSk7Il0sIm1hcHBpbmdzIjoiO0NBQUMsV0FBWTtBQVNYO0FBRUEsTUFBSSxLQUFLLElBQUksSUFBSSxtSEFBbUgsTUFBTSxHQUFHLENBQUM7QUFDOUksV0FBUyxFQUFFLEdBQUc7QUFDWixRQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsUUFBSSxtQ0FBbUMsS0FBSyxDQUFDO0FBQzdDLFdBQU8sQ0FBQyxLQUFLO0FBQUEsRUFDZjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osUUFBSSxJQUFJLEVBQUU7QUFDVixRQUFJLFdBQVcsRUFBRyxRQUFPO0FBQ3pCLFdBQU8sS0FBSyxFQUFFLEVBQUUseUJBQXlCLGFBQWEsWUFBWSxLQUFJLEVBQUUsZUFBZSxPQUFPLGNBQWMsYUFBYSxhQUFhLEVBQUUsT0FBTztBQUMvSSxXQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSx5QkFBeUIsYUFBYTtBQUFBLEVBQzNEO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQU8sS0FBSyxNQUFNLEtBQUssQ0FBQyxFQUFFLGNBQWMsS0FBSSxFQUFFO0FBQzlDLFdBQU8sS0FBSyxNQUFNLElBQUksRUFBRSxjQUFjO0FBQUEsRUFDeEM7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUc7QUFDbEIsUUFBSSxXQUFXLElBQUksb0JBQUksSUFBSSxJQUFJO0FBQy9CLGFBQVMsSUFBSSxHQUFHLEtBQUk7QUFDbEIsVUFBSSxFQUFFLGFBQWEsS0FBSyxjQUFjO0FBQ3BDLFlBQUksSUFBSTtBQUNSLFVBQUUsQ0FBQztBQUNILFlBQUksSUFBSSxFQUFFO0FBQ1YsWUFBSSxXQUFXLEtBQUssYUFBYSxFQUFFLGFBQWEsS0FBSyxHQUFHO0FBQ3RELGNBQUksRUFBRTtBQUNOLGNBQUksYUFBYSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRyxNQUFL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
