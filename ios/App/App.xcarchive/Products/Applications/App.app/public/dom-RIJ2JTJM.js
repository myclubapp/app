// node_modules/@ionic/pwa-elements/dist/esm/polyfills/dom.js
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

@ionic/pwa-elements/dist/esm/polyfills/dom.js:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3BvbHlmaWxscy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgLypcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAgICBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICAgIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICAgIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gICAgc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAgKi9cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhYSA9IG5ldyBTZXQoXCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpKTtcbiAgZnVuY3Rpb24gZyhhKSB7XG4gICAgdmFyIGIgPSBhYS5oYXMoYSk7XG4gICAgYSA9IC9eW2Etel1bLjAtOV9hLXpdKi1bXFwtLjAtOV9hLXpdKiQvLnRlc3QoYSk7XG4gICAgcmV0dXJuICFiICYmIGE7XG4gIH1cbiAgZnVuY3Rpb24gbChhKSB7XG4gICAgdmFyIGIgPSBhLmlzQ29ubmVjdGVkO1xuICAgIGlmICh2b2lkIDAgIT09IGIpIHJldHVybiBiO1xuICAgIGZvciAoOyBhICYmICEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgfHwgYSBpbnN0YW5jZW9mIERvY3VtZW50KTspIGEgPSBhLnBhcmVudE5vZGUgfHwgKHdpbmRvdy5TaGFkb3dSb290ICYmIGEgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gYS5ob3N0IDogdm9pZCAwKTtcbiAgICByZXR1cm4gISghYSB8fCAhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50IHx8IGEgaW5zdGFuY2VvZiBEb2N1bWVudCkpO1xuICB9XG4gIGZ1bmN0aW9uIG4oYSwgYikge1xuICAgIGZvciAoOyBiICYmIGIgIT09IGEgJiYgIWIubmV4dFNpYmxpbmc7KSBiID0gYi5wYXJlbnROb2RlO1xuICAgIHJldHVybiBiICYmIGIgIT09IGEgPyBiLm5leHRTaWJsaW5nIDogbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBwKGEsIGIsIGQpIHtcbiAgICBkID0gdm9pZCAwID09PSBkID8gbmV3IFNldCgpIDogZDtcbiAgICBmb3IgKHZhciBjID0gYTsgYzspIHtcbiAgICAgIGlmIChjLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZSA9IGM7XG4gICAgICAgIGIoZSk7XG4gICAgICAgIHZhciBmID0gZS5sb2NhbE5hbWU7XG4gICAgICAgIGlmIChcImxpbmtcIiA9PT0gZiAmJiBcImltcG9ydFwiID09PSBlLmdldEF0dHJpYnV0ZShcInJlbFwiKSkge1xuICAgICAgICAgIGMgPSBlLmltcG9ydDtcbiAgICAgICAgICBpZiAoYyBpbnN0YW5jZW9mIE5vZGUgJiYgIWQuaGFzKGMpKSBmb3IgKGQuYWRkKGMpLCBjID0gYy5maXJzdENoaWxkOyBjOyBjID0gYy5uZXh0U2libGluZykgcChjLCBiLCBkKTtcbiAgICAgICAgICBjID0gbihhLCBlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChcInRlbXBsYXRlXCIgPT09IGYpIHtcbiAgICAgICAgICBjID0gbihhLCBlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZSA9IGUuX19DRV9zaGFkb3dSb290KSBmb3IgKGUgPSBlLmZpcnN0Q2hpbGQ7IGU7IGUgPSBlLm5leHRTaWJsaW5nKSBwKGUsIGIsIGQpO1xuICAgICAgfVxuICAgICAgYyA9IGMuZmlyc3RDaGlsZCA/IGMuZmlyc3RDaGlsZCA6IG4oYSwgYyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHIoYSwgYiwgZCkge1xuICAgIGFbYl0gPSBkO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gdSgpIHtcbiAgICB0aGlzLmEgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5nID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuYyA9IFtdO1xuICAgIHRoaXMuZiA9IFtdO1xuICAgIHRoaXMuYiA9ICExO1xuICB9XG4gIGZ1bmN0aW9uIGJhKGEsIGIsIGQpIHtcbiAgICBhLmEuc2V0KGIsIGQpO1xuICAgIGEuZy5zZXQoZC5jb25zdHJ1Y3RvckZ1bmN0aW9uLCBkKTtcbiAgfVxuICBmdW5jdGlvbiBjYShhLCBiKSB7XG4gICAgYS5iID0gITA7XG4gICAgYS5jLnB1c2goYik7XG4gIH1cbiAgZnVuY3Rpb24gZGEoYSwgYikge1xuICAgIGEuYiA9ICEwO1xuICAgIGEuZi5wdXNoKGIpO1xuICB9XG4gIGZ1bmN0aW9uIHYoYSwgYikge1xuICAgIGEuYiAmJiBwKGIsIGZ1bmN0aW9uIChiKSB7XG4gICAgICByZXR1cm4gdyhhLCBiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB3KGEsIGIpIHtcbiAgICBpZiAoYS5iICYmICFiLl9fQ0VfcGF0Y2hlZCkge1xuICAgICAgYi5fX0NFX3BhdGNoZWQgPSAhMDtcbiAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgYS5jLmxlbmd0aDsgZCsrKSBhLmNbZF0oYik7XG4gICAgICBmb3IgKGQgPSAwOyBkIDwgYS5mLmxlbmd0aDsgZCsrKSBhLmZbZF0oYik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHgoYSwgYikge1xuICAgIHZhciBkID0gW107XG4gICAgcChiLCBmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGQucHVzaChiKTtcbiAgICB9KTtcbiAgICBmb3IgKGIgPSAwOyBiIDwgZC5sZW5ndGg7IGIrKykge1xuICAgICAgdmFyIGMgPSBkW2JdO1xuICAgICAgMSA9PT0gYy5fX0NFX3N0YXRlID8gYS5jb25uZWN0ZWRDYWxsYmFjayhjKSA6IHkoYSwgYyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHooYSwgYikge1xuICAgIHZhciBkID0gW107XG4gICAgcChiLCBmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGQucHVzaChiKTtcbiAgICB9KTtcbiAgICBmb3IgKGIgPSAwOyBiIDwgZC5sZW5ndGg7IGIrKykge1xuICAgICAgdmFyIGMgPSBkW2JdO1xuICAgICAgMSA9PT0gYy5fX0NFX3N0YXRlICYmIGEuZGlzY29ubmVjdGVkQ2FsbGJhY2soYyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIEEoYSwgYiwgZCkge1xuICAgIGQgPSB2b2lkIDAgPT09IGQgPyB7fSA6IGQ7XG4gICAgdmFyIGMgPSBkLnUgfHwgbmV3IFNldCgpLFxuICAgICAgZSA9IGQuaSB8fCBmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4geShhLCBiKTtcbiAgICAgIH0sXG4gICAgICBmID0gW107XG4gICAgcChiLCBmdW5jdGlvbiAoYikge1xuICAgICAgaWYgKFwibGlua1wiID09PSBiLmxvY2FsTmFtZSAmJiBcImltcG9ydFwiID09PSBiLmdldEF0dHJpYnV0ZShcInJlbFwiKSkge1xuICAgICAgICB2YXIgZCA9IGIuaW1wb3J0O1xuICAgICAgICBkIGluc3RhbmNlb2YgTm9kZSAmJiAoZC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSAhMCwgZC5fX0NFX2hhc1JlZ2lzdHJ5ID0gITApO1xuICAgICAgICBkICYmIFwiY29tcGxldGVcIiA9PT0gZC5yZWFkeVN0YXRlID8gZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQgPSAhMCA6IGIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkID0gYi5pbXBvcnQ7XG4gICAgICAgICAgaWYgKCFkLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCkge1xuICAgICAgICAgICAgZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgIHZhciBmID0gbmV3IFNldChjKTtcbiAgICAgICAgICAgIGYuZGVsZXRlKGQpO1xuICAgICAgICAgICAgQShhLCBkLCB7XG4gICAgICAgICAgICAgIHU6IGYsXG4gICAgICAgICAgICAgIGk6IGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZi5wdXNoKGIpO1xuICAgIH0sIGMpO1xuICAgIGlmIChhLmIpIGZvciAoYiA9IDA7IGIgPCBmLmxlbmd0aDsgYisrKSB3KGEsIGZbYl0pO1xuICAgIGZvciAoYiA9IDA7IGIgPCBmLmxlbmd0aDsgYisrKSBlKGZbYl0pO1xuICB9XG4gIGZ1bmN0aW9uIHkoYSwgYikge1xuICAgIGlmICh2b2lkIDAgPT09IGIuX19DRV9zdGF0ZSkge1xuICAgICAgdmFyIGQgPSBiLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoZC5kZWZhdWx0VmlldyB8fCBkLl9fQ0VfaXNJbXBvcnREb2N1bWVudCAmJiBkLl9fQ0VfaGFzUmVnaXN0cnkpIGlmIChkID0gYS5hLmdldChiLmxvY2FsTmFtZSkpIHtcbiAgICAgICAgZC5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGIpO1xuICAgICAgICB2YXIgYyA9IGQuY29uc3RydWN0b3JGdW5jdGlvbjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG5ldyBjKCkgIT09IGIpIHRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGQuY29uc3RydWN0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgdGhyb3cgYi5fX0NFX3N0YXRlID0gMiwgdDtcbiAgICAgICAgfVxuICAgICAgICBiLl9fQ0Vfc3RhdGUgPSAxO1xuICAgICAgICBiLl9fQ0VfZGVmaW5pdGlvbiA9IGQ7XG4gICAgICAgIGlmIChkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgZm9yIChkID0gZC5vYnNlcnZlZEF0dHJpYnV0ZXMsIGMgPSAwOyBjIDwgZC5sZW5ndGg7IGMrKykge1xuICAgICAgICAgIHZhciBlID0gZFtjXSxcbiAgICAgICAgICAgIGYgPSBiLmdldEF0dHJpYnV0ZShlKTtcbiAgICAgICAgICBudWxsICE9PSBmICYmIGEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGIsIGUsIG51bGwsIGYsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGwoYikgJiYgYS5jb25uZWN0ZWRDYWxsYmFjayhiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYS5fX0NFX2RlZmluaXRpb247XG4gICAgYi5jb25uZWN0ZWRDYWxsYmFjayAmJiBiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSk7XG4gIH07XG4gIHUucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGEuX19DRV9kZWZpbml0aW9uO1xuICAgIGIuZGlzY29ubmVjdGVkQ2FsbGJhY2sgJiYgYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpO1xuICB9O1xuICB1LnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYSwgYiwgZCwgYywgZSkge1xuICAgIHZhciBmID0gYS5fX0NFX2RlZmluaXRpb247XG4gICAgZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgJiYgLTEgPCBmLm9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKGIpICYmIGYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrLmNhbGwoYSwgYiwgZCwgYywgZSk7XG4gIH07XG4gIGZ1bmN0aW9uIEIoYSkge1xuICAgIHZhciBiID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5jID0gYTtcbiAgICB0aGlzLmEgPSBiO1xuICAgIHRoaXMuYiA9IHZvaWQgMDtcbiAgICBBKHRoaXMuYywgdGhpcy5hKTtcbiAgICBcImxvYWRpbmdcIiA9PT0gdGhpcy5hLnJlYWR5U3RhdGUgJiYgKHRoaXMuYiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSwgdGhpcy5iLm9ic2VydmUodGhpcy5hLCB7XG4gICAgICBjaGlsZExpc3Q6ICEwLFxuICAgICAgc3VidHJlZTogITBcbiAgICB9KSk7XG4gIH1cbiAgZnVuY3Rpb24gQyhhKSB7XG4gICAgYS5iICYmIGEuYi5kaXNjb25uZWN0KCk7XG4gIH1cbiAgQi5wcm90b3R5cGUuZiA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSB0aGlzLmEucmVhZHlTdGF0ZTtcbiAgICBcImludGVyYWN0aXZlXCIgIT09IGIgJiYgXCJjb21wbGV0ZVwiICE9PSBiIHx8IEModGhpcyk7XG4gICAgZm9yIChiID0gMDsgYiA8IGEubGVuZ3RoOyBiKyspIGZvciAodmFyIGQgPSBhW2JdLmFkZGVkTm9kZXMsIGMgPSAwOyBjIDwgZC5sZW5ndGg7IGMrKykgQSh0aGlzLmMsIGRbY10pO1xuICB9O1xuICBmdW5jdGlvbiBlYSgpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdGhpcy5iID0gdGhpcy5hID0gdm9pZCAwO1xuICAgIHRoaXMuYyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChiKSB7XG4gICAgICBhLmIgPSBiO1xuICAgICAgYS5hICYmIGIoYS5hKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBEKGEpIHtcbiAgICBpZiAoYS5hKSB0aHJvdyBFcnJvcihcIkFscmVhZHkgcmVzb2x2ZWQuXCIpO1xuICAgIGEuYSA9IHZvaWQgMDtcbiAgICBhLmIgJiYgYS5iKHZvaWQgMCk7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiBFKGEpIHtcbiAgICB0aGlzLmMgPSAhMTtcbiAgICB0aGlzLmEgPSBhO1xuICAgIHRoaXMuaiA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmYgPSBmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGIoKTtcbiAgICB9O1xuICAgIHRoaXMuYiA9ICExO1xuICAgIHRoaXMuZyA9IFtdO1xuICAgIHRoaXMubyA9IG5ldyBCKGEpO1xuICB9XG4gIEUucHJvdG90eXBlLmwgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBkID0gdGhpcztcbiAgICBpZiAoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTtcbiAgICBpZiAoIWcoYSkpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiICsgYSArIFwiJyBpcyBub3QgdmFsaWQuXCIpO1xuICAgIGlmICh0aGlzLmEuYS5nZXQoYSkpIHRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiICsgYSArIFwiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO1xuICAgIGlmICh0aGlzLmMpIHRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO1xuICAgIHRoaXMuYyA9ICEwO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYyA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgdmFyIGEgPSBlW2JdO1xuICAgICAgICAgIGlmICh2b2lkIDAgIT09IGEgJiYgIShhIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB0aHJvdyBFcnJvcihcIlRoZSAnXCIgKyBiICsgXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0sXG4gICAgICAgIGUgPSBiLnByb3RvdHlwZTtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBPYmplY3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgdmFyIGYgPSBjKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7XG4gICAgICB2YXIgdCA9IGMoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTtcbiAgICAgIHZhciBrID0gYyhcImFkb3B0ZWRDYWxsYmFja1wiKTtcbiAgICAgIHZhciBoID0gYyhcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTtcbiAgICAgIHZhciBtID0gYi5vYnNlcnZlZEF0dHJpYnV0ZXMgfHwgW107XG4gICAgfSBjYXRjaCAocSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmMgPSAhMTtcbiAgICB9XG4gICAgYiA9IHtcbiAgICAgIGxvY2FsTmFtZTogYSxcbiAgICAgIGNvbnN0cnVjdG9yRnVuY3Rpb246IGIsXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjazogZixcbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrOiB0LFxuICAgICAgYWRvcHRlZENhbGxiYWNrOiBrLFxuICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOiBoLFxuICAgICAgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBtLFxuICAgICAgY29uc3RydWN0aW9uU3RhY2s6IFtdXG4gICAgfTtcbiAgICBiYSh0aGlzLmEsIGEsIGIpO1xuICAgIHRoaXMuZy5wdXNoKGIpO1xuICAgIHRoaXMuYiB8fCAodGhpcy5iID0gITAsIHRoaXMuZihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmEoZCk7XG4gICAgfSkpO1xuICB9O1xuICBFLnByb3RvdHlwZS5pID0gZnVuY3Rpb24gKGEpIHtcbiAgICBBKHRoaXMuYSwgYSk7XG4gIH07XG4gIGZ1bmN0aW9uIGZhKGEpIHtcbiAgICBpZiAoITEgIT09IGEuYikge1xuICAgICAgYS5iID0gITE7XG4gICAgICBmb3IgKHZhciBiID0gYS5nLCBkID0gW10sIGMgPSBuZXcgTWFwKCksIGUgPSAwOyBlIDwgYi5sZW5ndGg7IGUrKykgYy5zZXQoYltlXS5sb2NhbE5hbWUsIFtdKTtcbiAgICAgIEEoYS5hLCBkb2N1bWVudCwge1xuICAgICAgICBpOiBmdW5jdGlvbiAoYikge1xuICAgICAgICAgIGlmICh2b2lkIDAgPT09IGIuX19DRV9zdGF0ZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBiLmxvY2FsTmFtZSxcbiAgICAgICAgICAgICAgZiA9IGMuZ2V0KGUpO1xuICAgICAgICAgICAgZiA/IGYucHVzaChiKSA6IGEuYS5hLmdldChlKSAmJiBkLnB1c2goYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZvciAoZSA9IDA7IGUgPCBkLmxlbmd0aDsgZSsrKSB5KGEuYSwgZFtlXSk7XG4gICAgICBmb3IgKDsgMCA8IGIubGVuZ3RoOykge1xuICAgICAgICB2YXIgZiA9IGIuc2hpZnQoKTtcbiAgICAgICAgZSA9IGYubG9jYWxOYW1lO1xuICAgICAgICBmID0gYy5nZXQoZi5sb2NhbE5hbWUpO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGYubGVuZ3RoOyB0KyspIHkoYS5hLCBmW3RdKTtcbiAgICAgICAgKGUgPSBhLmouZ2V0KGUpKSAmJiBEKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBFLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoYSkge1xuICAgIGlmIChhID0gdGhpcy5hLmEuZ2V0KGEpKSByZXR1cm4gYS5jb25zdHJ1Y3RvckZ1bmN0aW9uO1xuICB9O1xuICBFLnByb3RvdHlwZS5tID0gZnVuY3Rpb24gKGEpIHtcbiAgICBpZiAoIWcoYSkpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIgKyBhICsgXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTtcbiAgICB2YXIgYiA9IHRoaXMuai5nZXQoYSk7XG4gICAgaWYgKGIpIHJldHVybiBiLmM7XG4gICAgYiA9IG5ldyBlYSgpO1xuICAgIHRoaXMuai5zZXQoYSwgYik7XG4gICAgdGhpcy5hLmEuZ2V0KGEpICYmICF0aGlzLmcuc29tZShmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGIubG9jYWxOYW1lID09PSBhO1xuICAgIH0pICYmIEQoYik7XG4gICAgcmV0dXJuIGIuYztcbiAgfTtcbiAgRS5wcm90b3R5cGUucyA9IGZ1bmN0aW9uIChhKSB7XG4gICAgQyh0aGlzLm8pO1xuICAgIHZhciBiID0gdGhpcy5mO1xuICAgIHRoaXMuZiA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gYShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiKGQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbiAgd2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeSA9IEU7XG4gIEUucHJvdG90eXBlLmRlZmluZSA9IEUucHJvdG90eXBlLmw7XG4gIEUucHJvdG90eXBlLnVwZ3JhZGUgPSBFLnByb3RvdHlwZS5pO1xuICBFLnByb3RvdHlwZS5nZXQgPSBFLnByb3RvdHlwZS5nZXQ7XG4gIEUucHJvdG90eXBlLndoZW5EZWZpbmVkID0gRS5wcm90b3R5cGUubTtcbiAgRS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayA9IEUucHJvdG90eXBlLnM7XG4gIHZhciBGID0gd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LFxuICAgIEcgPSB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUyxcbiAgICBoYSA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxcbiAgICBpYSA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCxcbiAgICBqYSA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuYXBwZW5kLFxuICAgIGthID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsXG4gICAgbGEgPSB3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLFxuICAgIEggPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLFxuICAgIEkgPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsXG4gICAgSiA9IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsXG4gICAgSyA9IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxcbiAgICBMID0gd2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxcbiAgICBNID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsIFwidGV4dENvbnRlbnRcIiksXG4gICAgTiA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csXG4gICAgTyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLCBcImlubmVySFRNTFwiKSxcbiAgICBQID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxcbiAgICBRID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxcbiAgICBSID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxcbiAgICBTID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLFxuICAgIFQgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsXG4gICAgVSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxcbiAgICBtYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsXG4gICAgbmEgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MLFxuICAgIG9hID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsXG4gICAgcGEgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLFxuICAgIFYgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLFxuICAgIHFhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLFxuICAgIHJhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLFxuICAgIHNhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSxcbiAgICB0YSA9IHdpbmRvdy5IVE1MRWxlbWVudCxcbiAgICBXID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLCBcImlubmVySFRNTFwiKSxcbiAgICB1YSA9IHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LFxuICAgIHZhID0gd2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUw7XG4gIHZhciB3YSA9IG5ldyBmdW5jdGlvbiAoKSB7fSgpO1xuICBmdW5jdGlvbiB4YSgpIHtcbiAgICB2YXIgYSA9IFg7XG4gICAgd2luZG93LkhUTUxFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gYigpIHtcbiAgICAgICAgdmFyIGIgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGMgPSBhLmcuZ2V0KGIpO1xuICAgICAgICBpZiAoIWMpIHRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO1xuICAgICAgICB2YXIgZSA9IGMuY29uc3RydWN0aW9uU3RhY2s7XG4gICAgICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuIGUgPSBGLmNhbGwoZG9jdW1lbnQsIGMubG9jYWxOYW1lKSwgT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsIGIucHJvdG90eXBlKSwgZS5fX0NFX3N0YXRlID0gMSwgZS5fX0NFX2RlZmluaXRpb24gPSBjLCB3KGEsIGUpLCBlO1xuICAgICAgICBjID0gZS5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgZiA9IGVbY107XG4gICAgICAgIGlmIChmID09PSB3YSkgdGhyb3cgRXJyb3IoXCJUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlwiKTtcbiAgICAgICAgZVtjXSA9IHdhO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZiwgYi5wcm90b3R5cGUpO1xuICAgICAgICB3KGEsIGYpO1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH1cbiAgICAgIGIucHJvdG90eXBlID0gdGEucHJvdG90eXBlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgdmFsdWU6IGJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGI7XG4gICAgfSgpO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gWShhLCBiLCBkKSB7XG4gICAgZnVuY3Rpb24gYyhiKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IFtdLCBjID0gMDsgYyA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrYykgZVtjXSA9IGFyZ3VtZW50c1tjXTtcbiAgICAgICAgYyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBmID0gW10sIG0gPSAwOyBtIDwgZS5sZW5ndGg7IG0rKykge1xuICAgICAgICAgIHZhciBxID0gZVttXTtcbiAgICAgICAgICBxIGluc3RhbmNlb2YgRWxlbWVudCAmJiBsKHEpICYmIGYucHVzaChxKTtcbiAgICAgICAgICBpZiAocSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIGZvciAocSA9IHEuZmlyc3RDaGlsZDsgcTsgcSA9IHEubmV4dFNpYmxpbmcpIGMucHVzaChxKTtlbHNlIGMucHVzaChxKTtcbiAgICAgICAgfVxuICAgICAgICBiLmFwcGx5KHRoaXMsIGUpO1xuICAgICAgICBmb3IgKGUgPSAwOyBlIDwgZi5sZW5ndGg7IGUrKykgeihhLCBmW2VdKTtcbiAgICAgICAgaWYgKGwodGhpcykpIGZvciAoZSA9IDA7IGUgPCBjLmxlbmd0aDsgZSsrKSBmID0gY1tlXSwgZiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgeChhLCBmKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHZvaWQgMCAhPT0gZC5oICYmIChiLnByZXBlbmQgPSBjKGQuaCkpO1xuICAgIHZvaWQgMCAhPT0gZC5hcHBlbmQgJiYgKGIuYXBwZW5kID0gYyhkLmFwcGVuZCkpO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24geWEoKSB7XG4gICAgdmFyIGEgPSBYO1xuICAgIHIoRG9jdW1lbnQucHJvdG90eXBlLCBcImNyZWF0ZUVsZW1lbnRcIiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgdmFyIGQgPSBhLmEuZ2V0KGIpO1xuICAgICAgICBpZiAoZCkgcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGIgPSBGLmNhbGwodGhpcywgYik7XG4gICAgICB3KGEsIGIpO1xuICAgICAgcmV0dXJuIGI7XG4gICAgfSk7XG4gICAgcihEb2N1bWVudC5wcm90b3R5cGUsIFwiaW1wb3J0Tm9kZVwiLCBmdW5jdGlvbiAoYiwgZCkge1xuICAgICAgYiA9IGhhLmNhbGwodGhpcywgYiwgISFkKTtcbiAgICAgIHRoaXMuX19DRV9oYXNSZWdpc3RyeSA/IEEoYSwgYikgOiB2KGEsIGIpO1xuICAgICAgcmV0dXJuIGI7XG4gICAgfSk7XG4gICAgcihEb2N1bWVudC5wcm90b3R5cGUsIFwiY3JlYXRlRWxlbWVudE5TXCIsIGZ1bmN0aW9uIChiLCBkKSB7XG4gICAgICBpZiAodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5ICYmIChudWxsID09PSBiIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID09PSBiKSkge1xuICAgICAgICB2YXIgYyA9IGEuYS5nZXQoZCk7XG4gICAgICAgIGlmIChjKSByZXR1cm4gbmV3IGMuY29uc3RydWN0b3JGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgYiA9IEcuY2FsbCh0aGlzLCBiLCBkKTtcbiAgICAgIHcoYSwgYik7XG4gICAgICByZXR1cm4gYjtcbiAgICB9KTtcbiAgICBZKGEsIERvY3VtZW50LnByb3RvdHlwZSwge1xuICAgICAgaDogaWEsXG4gICAgICBhcHBlbmQ6IGphXG4gICAgfSk7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiB6YSgpIHtcbiAgICBmdW5jdGlvbiBhKGEsIGMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcInRleHRDb250ZW50XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogYy5lbnVtZXJhYmxlLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGMuZ2V0LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSBjLnNldC5jYWxsKHRoaXMsIGEpO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jaGlsZE5vZGVzLFxuICAgICAgICAgICAgICAgIGsgPSBlLmxlbmd0aDtcbiAgICAgICAgICAgICAgaWYgKDAgPCBrICYmIGwodGhpcykpIHtcbiAgICAgICAgICAgICAgICBkID0gQXJyYXkoayk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBrOyBoKyspIGRbaF0gPSBlW2hdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjLnNldC5jYWxsKHRoaXMsIGEpO1xuICAgICAgICAgICAgaWYgKGQpIGZvciAoYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB6KGIsIGRbYV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBiID0gWDtcbiAgICByKE5vZGUucHJvdG90eXBlLCBcImluc2VydEJlZm9yZVwiLCBmdW5jdGlvbiAoYSwgYykge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHZhciBlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7XG4gICAgICAgIGEgPSBKLmNhbGwodGhpcywgYSwgYyk7XG4gICAgICAgIGlmIChsKHRoaXMpKSBmb3IgKGMgPSAwOyBjIDwgZS5sZW5ndGg7IGMrKykgeChiLCBlW2NdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICBlID0gbChhKTtcbiAgICAgIGMgPSBKLmNhbGwodGhpcywgYSwgYyk7XG4gICAgICBlICYmIHooYiwgYSk7XG4gICAgICBsKHRoaXMpICYmIHgoYiwgYSk7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgICByKE5vZGUucHJvdG90eXBlLCBcImFwcGVuZENoaWxkXCIsIGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgdmFyIGMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTtcbiAgICAgICAgYSA9IEkuY2FsbCh0aGlzLCBhKTtcbiAgICAgICAgaWYgKGwodGhpcykpIGZvciAodmFyIGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKykgeChiLCBjW2VdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICBjID0gbChhKTtcbiAgICAgIGUgPSBJLmNhbGwodGhpcywgYSk7XG4gICAgICBjICYmIHooYiwgYSk7XG4gICAgICBsKHRoaXMpICYmIHgoYiwgYSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICByKE5vZGUucHJvdG90eXBlLCBcImNsb25lTm9kZVwiLCBmdW5jdGlvbiAoYSkge1xuICAgICAgYSA9IEguY2FsbCh0aGlzLCAhIWEpO1xuICAgICAgdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPyBBKGIsIGEpIDogdihiLCBhKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0pO1xuICAgIHIoTm9kZS5wcm90b3R5cGUsIFwicmVtb3ZlQ2hpbGRcIiwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBjID0gbChhKSxcbiAgICAgICAgZSA9IEsuY2FsbCh0aGlzLCBhKTtcbiAgICAgIGMgJiYgeihiLCBhKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICAgIHIoTm9kZS5wcm90b3R5cGUsIFwicmVwbGFjZUNoaWxkXCIsIGZ1bmN0aW9uIChhLCBjKSB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgdmFyIGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTtcbiAgICAgICAgYSA9IEwuY2FsbCh0aGlzLCBhLCBjKTtcbiAgICAgICAgaWYgKGwodGhpcykpIGZvciAoeihiLCBjKSwgYyA9IDA7IGMgPCBlLmxlbmd0aDsgYysrKSB4KGIsIGVbY10pO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICAgIGUgPSBsKGEpO1xuICAgICAgdmFyIGYgPSBMLmNhbGwodGhpcywgYSwgYyksXG4gICAgICAgIGQgPSBsKHRoaXMpO1xuICAgICAgZCAmJiB6KGIsIGMpO1xuICAgICAgZSAmJiB6KGIsIGEpO1xuICAgICAgZCAmJiB4KGIsIGEpO1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSk7XG4gICAgTSAmJiBNLmdldCA/IGEoTm9kZS5wcm90b3R5cGUsIE0pIDogY2EoYiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGEoYiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBiID0gMDsgYiA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgdmFyIGYgPSB0aGlzLmNoaWxkTm9kZXNbYl07XG4gICAgICAgICAgICBmLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSAmJiBhLnB1c2goZi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhLmpvaW4oXCJcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBmb3IgKDsgdGhpcy5maXJzdENoaWxkOykgSy5jYWxsKHRoaXMsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgbnVsbCAhPSBhICYmIFwiXCIgIT09IGEgJiYgSS5jYWxsKHRoaXMsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiBBYShhKSB7XG4gICAgZnVuY3Rpb24gYihiKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IFtdLCBkID0gMDsgZCA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrZCkgY1tkXSA9IGFyZ3VtZW50c1tkXTtcbiAgICAgICAgZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrID0gW10sIGggPSAwOyBoIDwgYy5sZW5ndGg7IGgrKykge1xuICAgICAgICAgIHZhciBtID0gY1toXTtcbiAgICAgICAgICBtIGluc3RhbmNlb2YgRWxlbWVudCAmJiBsKG0pICYmIGsucHVzaChtKTtcbiAgICAgICAgICBpZiAobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIGZvciAobSA9IG0uZmlyc3RDaGlsZDsgbTsgbSA9IG0ubmV4dFNpYmxpbmcpIGQucHVzaChtKTtlbHNlIGQucHVzaChtKTtcbiAgICAgICAgfVxuICAgICAgICBiLmFwcGx5KHRoaXMsIGMpO1xuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgay5sZW5ndGg7IGMrKykgeihhLCBrW2NdKTtcbiAgICAgICAgaWYgKGwodGhpcykpIGZvciAoYyA9IDA7IGMgPCBkLmxlbmd0aDsgYysrKSBrID0gZFtjXSwgayBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgeChhLCBrKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBkID0gRWxlbWVudC5wcm90b3R5cGU7XG4gICAgdm9pZCAwICE9PSBWICYmIChkLmJlZm9yZSA9IGIoVikpO1xuICAgIHZvaWQgMCAhPT0gViAmJiAoZC5hZnRlciA9IGIocWEpKTtcbiAgICB2b2lkIDAgIT09IHJhICYmIHIoZCwgXCJyZXBsYWNlV2l0aFwiLCBmdW5jdGlvbiAoYikge1xuICAgICAgZm9yICh2YXIgZSA9IFtdLCBjID0gMDsgYyA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrYykgZVtjXSA9IGFyZ3VtZW50c1tjXTtcbiAgICAgIGMgPSBbXTtcbiAgICAgIGZvciAodmFyIGQgPSBbXSwgayA9IDA7IGsgPCBlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBoID0gZVtrXTtcbiAgICAgICAgaCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbChoKSAmJiBkLnB1c2goaCk7XG4gICAgICAgIGlmIChoIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgZm9yIChoID0gaC5maXJzdENoaWxkOyBoOyBoID0gaC5uZXh0U2libGluZykgYy5wdXNoKGgpO2Vsc2UgYy5wdXNoKGgpO1xuICAgICAgfVxuICAgICAgayA9IGwodGhpcyk7XG4gICAgICByYS5hcHBseSh0aGlzLCBlKTtcbiAgICAgIGZvciAoZSA9IDA7IGUgPCBkLmxlbmd0aDsgZSsrKSB6KGEsIGRbZV0pO1xuICAgICAgaWYgKGspIGZvciAoeihhLCB0aGlzKSwgZSA9IDA7IGUgPCBjLmxlbmd0aDsgZSsrKSBkID0gY1tlXSwgZCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgeChhLCBkKTtcbiAgICB9KTtcbiAgICB2b2lkIDAgIT09IHNhICYmIHIoZCwgXCJyZW1vdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGIgPSBsKHRoaXMpO1xuICAgICAgc2EuY2FsbCh0aGlzKTtcbiAgICAgIGIgJiYgeihhLCB0aGlzKTtcbiAgICB9KTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIEJhKCkge1xuICAgIGZ1bmN0aW9uIGEoYSwgYikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiaW5uZXJIVE1MXCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogYi5lbnVtZXJhYmxlLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGIuZ2V0LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLFxuICAgICAgICAgICAgZCA9IHZvaWQgMDtcbiAgICAgICAgICBsKHRoaXMpICYmIChkID0gW10sIHAodGhpcywgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGEgIT09IGUgJiYgZC5wdXNoKGEpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBiLnNldC5jYWxsKHRoaXMsIGEpO1xuICAgICAgICAgIGlmIChkKSBmb3IgKHZhciBmID0gMDsgZiA8IGQubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgIHZhciB0ID0gZFtmXTtcbiAgICAgICAgICAgIDEgPT09IHQuX19DRV9zdGF0ZSAmJiBjLmRpc2Nvbm5lY3RlZENhbGxiYWNrKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSA/IEEoYywgdGhpcykgOiB2KGMsIHRoaXMpO1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYihhLCBiKSB7XG4gICAgICByKGEsIFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsIGZ1bmN0aW9uIChhLCBlKSB7XG4gICAgICAgIHZhciBkID0gbChlKTtcbiAgICAgICAgYSA9IGIuY2FsbCh0aGlzLCBhLCBlKTtcbiAgICAgICAgZCAmJiB6KGMsIGUpO1xuICAgICAgICBsKGEpICYmIHgoYywgZSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGQoYSwgYikge1xuICAgICAgZnVuY3Rpb24gZShhLCBiKSB7XG4gICAgICAgIGZvciAodmFyIGUgPSBbXTsgYSAhPT0gYjsgYSA9IGEubmV4dFNpYmxpbmcpIGUucHVzaChhKTtcbiAgICAgICAgZm9yIChiID0gMDsgYiA8IGUubGVuZ3RoOyBiKyspIEEoYywgZVtiXSk7XG4gICAgICB9XG4gICAgICByKGEsIFwiaW5zZXJ0QWRqYWNlbnRIVE1MXCIsIGZ1bmN0aW9uIChhLCBjKSB7XG4gICAgICAgIGEgPSBhLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcImJlZm9yZWJlZ2luXCIgPT09IGEpIHtcbiAgICAgICAgICB2YXIgZCA9IHRoaXMucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgIGIuY2FsbCh0aGlzLCBhLCBjKTtcbiAgICAgICAgICBlKGQgfHwgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsIHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKFwiYWZ0ZXJiZWdpblwiID09PSBhKSBkID0gdGhpcy5maXJzdENoaWxkLCBiLmNhbGwodGhpcywgYSwgYyksIGUodGhpcy5maXJzdENoaWxkLCBkKTtlbHNlIGlmIChcImJlZm9yZWVuZFwiID09PSBhKSBkID0gdGhpcy5sYXN0Q2hpbGQsIGIuY2FsbCh0aGlzLCBhLCBjKSwgZShkIHx8IHRoaXMuZmlyc3RDaGlsZCwgbnVsbCk7ZWxzZSBpZiAoXCJhZnRlcmVuZFwiID09PSBhKSBkID0gdGhpcy5uZXh0U2libGluZywgYi5jYWxsKHRoaXMsIGEsIGMpLCBlKHRoaXMubmV4dFNpYmxpbmcsIGQpO2Vsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIHZhbHVlIHByb3ZpZGVkIChcIiArIFN0cmluZyhhKSArIFwiKSBpcyBub3Qgb25lIG9mICdiZWZvcmViZWdpbicsICdhZnRlcmJlZ2luJywgJ2JlZm9yZWVuZCcsIG9yICdhZnRlcmVuZCcuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBjID0gWDtcbiAgICBOICYmIHIoRWxlbWVudC5wcm90b3R5cGUsIFwiYXR0YWNoU2hhZG93XCIsIGZ1bmN0aW9uIChhKSB7XG4gICAgICBhID0gTi5jYWxsKHRoaXMsIGEpO1xuICAgICAgdmFyIGIgPSBjO1xuICAgICAgaWYgKGIuYiAmJiAhYS5fX0NFX3BhdGNoZWQpIHtcbiAgICAgICAgYS5fX0NFX3BhdGNoZWQgPSAhMDtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBiLmMubGVuZ3RoOyBlKyspIGIuY1tlXShhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdCA9IGE7XG4gICAgfSk7XG4gICAgTyAmJiBPLmdldCA/IGEoRWxlbWVudC5wcm90b3R5cGUsIE8pIDogVyAmJiBXLmdldCA/IGEoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBXKSA6IGRhKGMsIGZ1bmN0aW9uIChiKSB7XG4gICAgICBhKGIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBILmNhbGwodGhpcywgITApLmlubmVySFRNTDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHZhciBiID0gXCJ0ZW1wbGF0ZVwiID09PSB0aGlzLmxvY2FsTmFtZSxcbiAgICAgICAgICAgIGMgPSBiID8gdGhpcy5jb250ZW50IDogdGhpcyxcbiAgICAgICAgICAgIGUgPSBHLmNhbGwoZG9jdW1lbnQsIHRoaXMubmFtZXNwYWNlVVJJLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgICAgZm9yIChlLmlubmVySFRNTCA9IGE7IDAgPCBjLmNoaWxkTm9kZXMubGVuZ3RoOykgSy5jYWxsKGMsIGMuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgZm9yIChhID0gYiA/IGUuY29udGVudCA6IGU7IDAgPCBhLmNoaWxkTm9kZXMubGVuZ3RoOykgSS5jYWxsKGMsIGEuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHIoRWxlbWVudC5wcm90b3R5cGUsIFwic2V0QXR0cmlidXRlXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoMSAhPT0gdGhpcy5fX0NFX3N0YXRlKSByZXR1cm4gUS5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgdmFyIGUgPSBQLmNhbGwodGhpcywgYSk7XG4gICAgICBRLmNhbGwodGhpcywgYSwgYik7XG4gICAgICBiID0gUC5jYWxsKHRoaXMsIGEpO1xuICAgICAgYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgYSwgZSwgYiwgbnVsbCk7XG4gICAgfSk7XG4gICAgcihFbGVtZW50LnByb3RvdHlwZSwgXCJzZXRBdHRyaWJ1dGVOU1wiLCBmdW5jdGlvbiAoYSwgYiwgZCkge1xuICAgICAgaWYgKDEgIT09IHRoaXMuX19DRV9zdGF0ZSkgcmV0dXJuIFQuY2FsbCh0aGlzLCBhLCBiLCBkKTtcbiAgICAgIHZhciBlID0gUy5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgVC5jYWxsKHRoaXMsIGEsIGIsIGQpO1xuICAgICAgZCA9IFMuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIGIsIGUsIGQsIGEpO1xuICAgIH0pO1xuICAgIHIoRWxlbWVudC5wcm90b3R5cGUsIFwicmVtb3ZlQXR0cmlidXRlXCIsIGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoMSAhPT0gdGhpcy5fX0NFX3N0YXRlKSByZXR1cm4gUi5jYWxsKHRoaXMsIGEpO1xuICAgICAgdmFyIGIgPSBQLmNhbGwodGhpcywgYSk7XG4gICAgICBSLmNhbGwodGhpcywgYSk7XG4gICAgICBudWxsICE9PSBiICYmIGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIGEsIGIsIG51bGwsIG51bGwpO1xuICAgIH0pO1xuICAgIHIoRWxlbWVudC5wcm90b3R5cGUsIFwicmVtb3ZlQXR0cmlidXRlTlNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmICgxICE9PSB0aGlzLl9fQ0Vfc3RhdGUpIHJldHVybiBVLmNhbGwodGhpcywgYSwgYik7XG4gICAgICB2YXIgZCA9IFMuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIFUuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgIHZhciBlID0gUy5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgZCAhPT0gZSAmJiBjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLCBiLCBkLCBlLCBhKTtcbiAgICB9KTtcbiAgICB1YSA/IGIoSFRNTEVsZW1lbnQucHJvdG90eXBlLCB1YSkgOiBtYSA/IGIoRWxlbWVudC5wcm90b3R5cGUsIG1hKSA6IGNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO1xuICAgIHZhID8gZChIVE1MRWxlbWVudC5wcm90b3R5cGUsIHZhKSA6IG5hID8gZChFbGVtZW50LnByb3RvdHlwZSwgbmEpIDogY29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEhUTUxgIHdhcyBub3QgcGF0Y2hlZC5cIik7XG4gICAgWShjLCBFbGVtZW50LnByb3RvdHlwZSwge1xuICAgICAgaDogb2EsXG4gICAgICBhcHBlbmQ6IHBhXG4gICAgfSk7XG4gICAgQWEoYyk7XG4gIH1cbiAgO1xuICB2YXIgWiA9IHdpbmRvdy5jdXN0b21FbGVtZW50cztcbiAgaWYgKCFaIHx8IFouZm9yY2VQb2x5ZmlsbCB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIFouZGVmaW5lIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgWi5nZXQpIHtcbiAgICB2YXIgWCA9IG5ldyB1KCk7XG4gICAgeGEoKTtcbiAgICB5YSgpO1xuICAgIFkoWCwgRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsIHtcbiAgICAgIGg6IGthLFxuICAgICAgYXBwZW5kOiBsYVxuICAgIH0pO1xuICAgIHphKCk7XG4gICAgQmEoKTtcbiAgICBkb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5ID0gITA7XG4gICAgdmFyIGN1c3RvbUVsZW1lbnRzID0gbmV3IEUoWCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCJjdXN0b21FbGVtZW50c1wiLCB7XG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICB2YWx1ZTogY3VzdG9tRWxlbWVudHNcbiAgICB9KTtcbiAgfVxuICA7XG59KS5jYWxsKHNlbGYpO1xuXG4vLyBQb2x5ZmlsbCBkb2N1bWVudC5iYXNlVVJJXG5cInN0cmluZ1wiICE9PSB0eXBlb2YgZG9jdW1lbnQuYmFzZVVSSSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9jdW1lbnQucHJvdG90eXBlLCBcImJhc2VVUklcIiwge1xuICBlbnVtZXJhYmxlOiAhMCxcbiAgY29uZmlndXJhYmxlOiAhMCxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtcbiAgICByZXR1cm4gYSAmJiBhLmhyZWYgPyBhLmhyZWYgOiBkb2N1bWVudC5VUkw7XG4gIH1cbn0pO1xuXG4vLyBQb2x5ZmlsbCBDdXN0b21FdmVudFxuXCJmdW5jdGlvblwiICE9PSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICYmICh3aW5kb3cuQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAoYywgYSkge1xuICBhID0gYSB8fCB7XG4gICAgYnViYmxlczogITEsXG4gICAgY2FuY2VsYWJsZTogITEsXG4gICAgZGV0YWlsOiB2b2lkIDBcbiAgfTtcbiAgdmFyIGIgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICBiLmluaXRDdXN0b21FdmVudChjLCBhLmJ1YmJsZXMsIGEuY2FuY2VsYWJsZSwgYS5kZXRhaWwpO1xuICByZXR1cm4gYjtcbn0sIHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlKTtcblxuLy8gRXZlbnQuY29tcG9zZWRQYXRoXG4oZnVuY3Rpb24gKGIsIGMsIGQpIHtcbiAgYi5jb21wb3NlZFBhdGggfHwgKGIuY29tcG9zZWRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBhdGgpIHJldHVybiB0aGlzLnBhdGg7XG4gICAgdmFyIGEgPSB0aGlzLnRhcmdldDtcbiAgICBmb3IgKHRoaXMucGF0aCA9IFtdOyBudWxsICE9PSBhLnBhcmVudE5vZGU7KSB0aGlzLnBhdGgucHVzaChhKSwgYSA9IGEucGFyZW50Tm9kZTtcbiAgICB0aGlzLnBhdGgucHVzaChjLCBkKTtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9KTtcbn0pKEV2ZW50LnByb3RvdHlwZSwgZG9jdW1lbnQsIHdpbmRvdyk7XG5cbi8qIVxuRWxlbWVudC5jbG9zZXN0IGFuZCBFbGVtZW50Lm1hdGNoZXNcbmh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcbkNyZWF0aXZlIENvbW1vbnMgWmVybyB2MS4wIFVuaXZlcnNhbFxuKi9cbihmdW5jdGlvbiAoYSkge1xuICBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBhLm1hdGNoZXMgJiYgKGEubWF0Y2hlcyA9IGEubXNNYXRjaGVzU2VsZWN0b3IgfHwgYS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgYS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZnVuY3Rpb24gKGEpIHtcbiAgICBhID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGEpO1xuICAgIGZvciAodmFyIGIgPSAwOyBhW2JdICYmIGFbYl0gIT09IHRoaXM7KSArK2I7XG4gICAgcmV0dXJuICEhYVtiXTtcbiAgfSk7XG4gIFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIGEuY2xvc2VzdCAmJiAoYS5jbG9zZXN0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICBmb3IgKHZhciBiID0gdGhpczsgYiAmJiAxID09PSBiLm5vZGVUeXBlOykge1xuICAgICAgaWYgKGIubWF0Y2hlcyhhKSkgcmV0dXJuIGI7XG4gICAgICBiID0gYi5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG59KSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuKi9cbihmdW5jdGlvbiAoYykge1xuICBmdW5jdGlvbiBkKGEpIHtcbiAgICBhID0gYihhKTtcbiAgICByZXR1cm4gYSAmJiAxMSA9PT0gYS5ub2RlVHlwZSA/IGQoYS5ob3N0KSA6IGE7XG4gIH1cbiAgZnVuY3Rpb24gYihhKSB7XG4gICAgcmV0dXJuIGEgJiYgYS5wYXJlbnROb2RlID8gYihhLnBhcmVudE5vZGUpIDogYTtcbiAgfVxuICBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBjLmdldFJvb3ROb2RlICYmIChjLmdldFJvb3ROb2RlID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYSAmJiBhLmNvbXBvc2VkID8gZCh0aGlzKSA6IGIodGhpcyk7XG4gIH0pO1xufSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQuaXNDb25uZWN0ZWQoKVxuKi9cbihmdW5jdGlvbiAoYSkge1xuICBcImlzQ29ubmVjdGVkXCIgaW4gYSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJpc0Nvbm5lY3RlZFwiLCB7XG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhID0gdGhpcy5nZXRSb290Tm9kZSh7XG4gICAgICAgIGNvbXBvc2VkOiAhMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYSAmJiA5ID09PSBhLm5vZGVUeXBlO1xuICAgIH1cbiAgfSk7XG59KShFbGVtZW50LnByb3RvdHlwZSk7XG5cbi8qIVxuRWxlbWVudC5yZW1vdmUoKVxuKi9cbihmdW5jdGlvbiAoYikge1xuICBiLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICBhLmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcInJlbW92ZVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITAsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsICE9PSB0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsIERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTtcblxuLyohXG5FbGVtZW50LmNsYXNzTGlzdFxuKi9cbiFmdW5jdGlvbiAoZSkge1xuICAnY2xhc3NMaXN0JyBpbiBlIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcImNsYXNzTGlzdFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IHRoaXMsXG4gICAgICAgIHQgPSAoZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMkL2csIFwiXCIpLnNwbGl0KC9cXHMrL2cpO1xuICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgdC5sZW5ndGggPiAwID8gZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0LmpvaW4oXCIgXCIpKSA6IGUucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIiA9PT0gdFswXSAmJiB0LnNwbGljZSgwLCAxKSwgdC50b2dnbGUgPSBmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICB2b2lkIDAgIT09IGkgPyBpID8gdC5hZGQoZSkgOiB0LnJlbW92ZShlKSA6IC0xICE9PSB0LmluZGV4T2YoZSkgPyB0LnNwbGljZSh0LmluZGV4T2YoZSksIDEpIDogdC5wdXNoKGUpLCBuKCk7XG4gICAgICB9LCB0LmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgaSA9IDAsIHMgPSBlLmxlbmd0aDsgaSA8IHM7IGkrKykgLTEgPT09IHQuaW5kZXhPZihlW2ldKSAmJiB0LnB1c2goZVtpXSk7XG4gICAgICAgIG4oKTtcbiAgICAgIH0sIHQucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBlID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLCBpID0gMCwgcyA9IGUubGVuZ3RoOyBpIDwgczsgaSsrKSAtMSAhPT0gdC5pbmRleE9mKGVbaV0pICYmIHQuc3BsaWNlKHQuaW5kZXhPZihlW2ldKSwgMSk7XG4gICAgICAgIG4oKTtcbiAgICAgIH0sIHQuaXRlbSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0W2VdO1xuICAgICAgfSwgdC5jb250YWlucyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAtMSAhPT0gdC5pbmRleE9mKGUpO1xuICAgICAgfSwgdC5yZXBsYWNlID0gZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgLTEgIT09IHQuaW5kZXhPZihlKSAmJiB0LnNwbGljZSh0LmluZGV4T2YoZSksIDEsIGkpLCBuKCk7XG4gICAgICB9LCB0LnZhbHVlID0gZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiLCB0O1xuICAgIH1cbiAgfSk7XG59KEVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5ET01Ub2tlbkxpc3RcbiovXG4oZnVuY3Rpb24gKGIpIHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBjID0gYi5hZGQsXG4gICAgICBkID0gYi5yZW1vdmU7XG4gICAgYi5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFyZ3VtZW50cy5sZW5ndGg7IGErKykgYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1thXSk7XG4gICAgfTtcbiAgICBiLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYXJndW1lbnRzLmxlbmd0aDsgYSsrKSBkLmNhbGwodGhpcywgYXJndW1lbnRzW2FdKTtcbiAgICB9O1xuICB9XG59KShET01Ub2tlbkxpc3QucHJvdG90eXBlKTsiXSwibWFwcGluZ3MiOiI7Q0FBQyxXQUFZO0FBU1g7QUFFQSxNQUFJLEtBQUssSUFBSSxJQUFJLG1IQUFtSCxNQUFNLEdBQUcsQ0FBQztBQUM5SSxXQUFTLEVBQUUsR0FBRztBQUNaLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixRQUFJLG1DQUFtQyxLQUFLLENBQUM7QUFDN0MsV0FBTyxDQUFDLEtBQUs7QUFBQSxFQUNmO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixRQUFJLElBQUksRUFBRTtBQUNWLFFBQUksV0FBVyxFQUFHLFFBQU87QUFDekIsV0FBTyxLQUFLLEVBQUUsRUFBRSx5QkFBeUIsYUFBYSxZQUFZLEtBQUksRUFBRSxlQUFlLE9BQU8sY0FBYyxhQUFhLGFBQWEsRUFBRSxPQUFPO0FBQy9JLFdBQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLHlCQUF5QixhQUFhO0FBQUEsRUFDM0Q7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxLQUFLLE1BQU0sS0FBSyxDQUFDLEVBQUUsY0FBYyxLQUFJLEVBQUU7QUFDOUMsV0FBTyxLQUFLLE1BQU0sSUFBSSxFQUFFLGNBQWM7QUFBQSxFQUN4QztBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixRQUFJLFdBQVcsSUFBSSxvQkFBSSxJQUFJLElBQUk7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSTtBQUNsQixVQUFJLEVBQUUsYUFBYSxLQUFLLGNBQWM7QUFDcEMsWUFBSSxJQUFJO0FBQ1IsVUFBRSxDQUFDO0FBQ0gsWUFBSSxJQUFJLEVBQUU7QUFDVixZQUFJLFdBQVcsS0FBSyxhQUFhLEVBQUUsYUFBYSxLQUFLLEdBQUc7QUFDdEQsY0FBSSxFQUFFO0FBQ04sY0FBSSxhQUFhLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxF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
