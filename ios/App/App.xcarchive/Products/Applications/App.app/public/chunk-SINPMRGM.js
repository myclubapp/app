import {
  __async,
  __glob
} from "./chunk-LQ2EECYJ.js";

// import("./**/*.entry.js") in node_modules/web-social-share/dist/esm/index-f937ef18.js
var globImport_entry_js = __glob({
  "./web-social-share.entry.js": () => import("./web-social-share.entry-2LSEDD3C.js")
});

// node_modules/web-social-share/dist/esm/index-f937ef18.js
var NAMESPACE = "websocialshare";
var scopeId;
var hostTagName;
var isSvgMode = false;
var queuePending = false;
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || {
  head: {}
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  let scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
var EMPTY_OBJ = {};
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else {
    elm = newVNode2.$elm$ = doc.createElement(newVNode2.$tag$);
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
  }
  return elm;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      callNodeRefs(vnode);
      elm.remove();
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (vnode1, vnode2) => {
  if (vnode1.$tag$ === vnode2.$tag$) {
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      if (tag === "slot") ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var callNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(callNodeRefs);
  }
};
var renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  patch(oldVNode, rootVnode);
};
var getElement = (ref) => getHostRef(ref).$hostElement$;
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let promise;
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var updateComponent = (hostRef, instance, isInitialLoad) => __async(void 0, null, function* () {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm["s-p"];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
});
var callRender = (hostRef, instance, elm) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", {
    detail: {
      namespace: NAMESPACE
    }
  }));
};
var then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var addHydratedFlag = (elm) => elm.classList.add("hydrated");
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    return propValue;
  }
  return propValue;
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if ((flags & (2 | 16)) === 2) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
var proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(
        ([_, m]) => m[0] & 15
        /* HasAttribute */
      ).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        return attrName;
      });
    }
  }
  return Cstr;
};
var initializeComponent = (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => __async(void 0, null, function* () {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      hostRef.$flags$ |= 32;
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        const endLoad = uniqueTime();
        Cstr = yield Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        proxyComponent(
          Cstr,
          cmpMeta,
          2
          /* proxyState */
        );
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8;
      }
      endNewInstance();
    }
    if (Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
});
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    }
    endConnected();
  }
};
var disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    getHostRef(elm);
  }
};
var bootstrapLazy = (lazyBundles, options = {}) => {
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const visibilityStyle = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              {
                self.attachShadow({
                  mode: "open"
                });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(
          HostElement,
          cmpMeta,
          1
          /* isElementConstructor */
        ));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  return hostRefs.set(elm, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  if (!hmrVersionId || !BUILD.hotModuleReplacement) {
    const processMod = (importedModule) => {
      cmpModules.set(bundleId, importedModule);
      return importedModule[exportName];
    };
    switch (bundleId) {
      case "web-social-share":
        return import(
          /* webpackMode: "lazy" */
          "./web-social-share.entry-2LSEDD3C.js"
        ).then(processMod, consoleError);
    }
  }
  return /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

export {
  promiseResolve,
  h,
  getElement,
  createEvent,
  bootstrapLazy,
  registerInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93ZWItc29jaWFsLXNoYXJlL2Rpc3QvZXNtL2luZGV4LWY5MzdlZjE4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5BTUVTUEFDRSA9ICd3ZWJzb2NpYWxzaGFyZSc7XG5sZXQgc2NvcGVJZDtcbmxldCBob3N0VGFnTmFtZTtcbmxldCBpc1N2Z01vZGUgPSBmYWxzZTtcbmxldCBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwge1xuICBoZWFkOiB7fVxufTtcbmNvbnN0IHBsdCA9IHtcbiAgJGZsYWdzJDogMCxcbiAgJHJlc291cmNlc1VybCQ6ICcnLFxuICBqbXA6IGggPT4gaCgpLFxuICByYWY6IGggPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpLFxuICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gIGNlOiAoZXZlbnROYW1lLCBvcHRzKSA9PiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBvcHRzKVxufTtcbmNvbnN0IHByb21pc2VSZXNvbHZlID0gdiA9PiBQcm9taXNlLnJlc29sdmUodik7XG5jb25zdCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyA9IC8qQF9fUFVSRV9fKi8oKCkgPT4ge1xuICB0cnkge1xuICAgIG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSAnZnVuY3Rpb24nO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuY29uc3QgSFlEUkFURURfQ1NTID0gJ3t2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fSc7XG5jb25zdCBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9ICcnKSA9PiB7XG4gIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbn07XG5jb25zdCB1bmlxdWVUaW1lID0gKGtleSwgbWVhc3VyZVRleHQpID0+IHtcbiAge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IHJvb3RBcHBsaWVkU3R5bGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICBsZXQgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgIHN0eWxlID0gc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBjc3NUZXh0O1xuICB9XG4gIHN0eWxlcy5zZXQoc2NvcGVJZCwgc3R5bGUpO1xufTtcbmNvbnN0IGFkZFN0eWxlID0gKHN0eWxlQ29udGFpbmVyTm9kZSwgY21wTWV0YSwgbW9kZSwgaG9zdEVsbSkgPT4ge1xuICBsZXQgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSk7XG4gIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgLy8gaWYgYW4gZWxlbWVudCBpcyBOT1QgY29ubmVjdGVkIHRoZW4gZ2V0Um9vdE5vZGUoKSB3aWxsIHJldHVybiB0aGUgd3Jvbmcgcm9vdCBub2RlXG4gIC8vIHNvIHRoZSBmYWxsYmFjayBpcyB0byBhbHdheXMgdXNlIHRoZSBkb2N1bWVudCBmb3IgdGhlIHJvb3Qgbm9kZSBpbiB0aG9zZSBjYXNlc1xuICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUubm9kZVR5cGUgPT09IDExIC8qIERvY3VtZW50RnJhZ21lbnQgKi8gPyBzdHlsZUNvbnRhaW5lck5vZGUgOiBkb2M7XG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUuaGVhZCB8fCBzdHlsZUNvbnRhaW5lck5vZGU7XG4gICAgICBsZXQgYXBwbGllZFN0eWxlcyA9IHJvb3RBcHBsaWVkU3R5bGVzLmdldChzdHlsZUNvbnRhaW5lck5vZGUpO1xuICAgICAgbGV0IHN0eWxlRWxtO1xuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgIHJvb3RBcHBsaWVkU3R5bGVzLnNldChzdHlsZUNvbnRhaW5lck5vZGUsIGFwcGxpZWRTdHlsZXMgPSBuZXcgU2V0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcignbGluaycpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgIGFwcGxpZWRTdHlsZXMuYWRkKHNjb3BlSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSBob3N0UmVmID0+IHtcbiAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGZsYWdzID0gY21wTWV0YS4kZmxhZ3MkO1xuICBjb25zdCBlbmRBdHRhY2hTdHlsZXMgPSBjcmVhdGVUaW1lKCdhdHRhY2hTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gIGNvbnN0IHNjb3BlSWQgPSBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEpO1xuICBpZiAoZmxhZ3MgJiAxMCAvKiBuZWVkc1Njb3BlZEVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgIC8vIG9yIHRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlIHNoYWRvdyBkb21cbiAgICAvLyBhbmQgdGhpcyBob3N0IGVsZW1lbnQgd2FzIE5PVCBjcmVhdGVkIHdpdGggU1NSXG4gICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgdG8gcmVwcmVzZW50IHdoZXJlIHRoZSBvcmlnaW5hbFxuICAgIC8vIGNvbnRlbnQgd2FzIGZpcnN0IHBsYWNlZCwgd2hpY2ggaXMgdXNlZnVsIGxhdGVyIG9uXG4gICAgLy8gRE9NIFdSSVRFISFcbiAgICBlbG1bJ3Mtc2MnXSA9IHNjb3BlSWQ7XG4gICAgZWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZCArICctaCcpO1xuICB9XG4gIGVuZEF0dGFjaFN0eWxlcygpO1xufTtcbmNvbnN0IGdldFNjb3BlSWQgPSAoY21wLCBtb2RlKSA9PiAnc2MtJyArIGNtcC4kdGFnTmFtZSQ7XG4vKipcbiAqIERlZmF1bHQgc3R5bGUgbW9kZSBpZFxuICovXG4vKipcbiAqIFJldXNhYmxlIGVtcHR5IG9iai9hcnJheVxuICogRG9uJ3QgYWRkIHZhbHVlcyB0byB0aGVzZSEhXG4gKi9cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuY29uc3QgaXNEZWYgPSB2ID0+IHYgIT0gbnVsbDtcbmNvbnN0IGlzQ29tcGxleFR5cGUgPSBvID0+IHtcbiAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3R5cGVvZi1mbi1vYmplY3QvNVxuICBvID0gdHlwZW9mIG87XG4gIHJldHVybiBvID09PSAnb2JqZWN0JyB8fCBvID09PSAnZnVuY3Rpb24nO1xufTtcbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgY2hpbGQ/OiBkLkNoaWxkVHlwZSk6IGQuVk5vZGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogZC5DaGlsZFR5cGVbXSk6IGQuVk5vZGU7XG5jb25zdCBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBjaGlsZCA9IG51bGw7XG4gIGxldCBzaW1wbGUgPSBmYWxzZTtcbiAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgY29uc3Qgdk5vZGVDaGlsZHJlbiA9IFtdO1xuICBjb25zdCB3YWxrID0gYyA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNbaV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKHNpbXBsZSA9IHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiAhaXNDb21wbGV4VHlwZShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoaWxkIHdhcyBzaW1wbGUgKHN0cmluZyksIHdlIG1lcmdlIGJvdGhcbiAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFwcGVuZCBhIG5ldyB2Tm9kZSwgaWYgaXQncyB0ZXh0LCB3ZSBjcmVhdGUgYSB0ZXh0IHZOb2RlXG4gICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgd2FsayhjaGlsZHJlbik7XG4gIGlmICh2bm9kZURhdGEpIHtcbiAgICB7XG4gICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgdm5vZGVEYXRhLmNsYXNzID0gdHlwZW9mIGNsYXNzRGF0YSAhPT0gJ29iamVjdCcgPyBjbGFzc0RhdGEgOiBPYmplY3Qua2V5cyhjbGFzc0RhdGEpLmZpbHRlcihrID0+IGNsYXNzRGF0YVtrXSkuam9pbignICcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGVOYW1lLCBudWxsKTtcbiAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn07XG5jb25zdCBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgY29uc3Qgdm5vZGUgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkdGFnJDogdGFnLFxuICAgICR0ZXh0JDogdGV4dCxcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkY2hpbGRyZW4kOiBudWxsXG4gIH07XG4gIHtcbiAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgfVxuICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgSG9zdCA9IHt9O1xuY29uc3QgaXNIb3N0ID0gbm9kZSA9PiBub2RlICYmIG5vZGUuJHRhZyQgPT09IEhvc3Q7XG4vKipcbiAqIFByb2R1Y3Rpb24gc2V0QWNjZXNzb3IoKSBmdW5jdGlvbiBiYXNlZCBvbiBQcmVhY3QgYnlcbiAqIEphc29uIE1pbGxlciAoQGRldmVsb3BpdClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgY29tcGlsZXIgYW5kIHZkb21cbiAqL1xuY29uc3Qgc2V0QWNjZXNzb3IgPSAoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzU3ZnLCBmbGFncykgPT4ge1xuICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgbGV0IGlzUHJvcCA9IGlzTWVtYmVySW5FbGVtZW50KGVsbSwgbWVtYmVyTmFtZSk7XG4gICAgbGV0IGxuID0gbWVtYmVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChtZW1iZXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG9sZFZhbHVlKTtcbiAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChuZXdWYWx1ZSk7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKGMgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzLmZpbHRlcihjID0+IGMgJiYgIW9sZENsYXNzZXMuaW5jbHVkZXMoYykpKTtcbiAgICB9IGVsc2UgaWYgKG1lbWJlck5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAvLyBtaW5pZmllciB3aWxsIGNsZWFuIHRoaXMgdXBcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICBuZXdWYWx1ZShlbG0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzUHJvcCAmJiBtZW1iZXJOYW1lWzBdID09PSAnbycgJiYgbWVtYmVyTmFtZVsxXSA9PT0gJ24nKSB7XG4gICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgLy8gc28gaWYgdGhlIG1lbWJlciBuYW1lIHN0YXJ0cyB3aXRoIFwib25cIiBhbmQgdGhlIDNyZCBjaGFyYWN0ZXJzIGlzXG4gICAgICAvLyBhIGNhcGl0YWwgbGV0dGVyLCBhbmQgaXQncyBub3QgYWxyZWFkeSBhIG1lbWJlciBvbiB0aGUgZWxlbWVudCxcbiAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgaWYgKG1lbWJlck5hbWVbMl0gPT09ICctJykge1xuICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgIC8vIGFsbG93cyB0byBiZSBleHBsaWNpdCBhYm91dCB0aGUgZG9tIGV2ZW50IHRvIGxpc3RlbiB3aXRob3V0IGFueSBtYWdpY1xuICAgICAgICAvLyB1bmRlciB0aGUgaG9vZDpcbiAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgIC8vIDxteS1jbXAgb24tQ2xpY2s+IC8vIGxpc3RlbnMgZm9yIFwiQ2xpY2tcIlxuICAgICAgICAvLyA8bXktY21wIG9uLWlvbkNoYW5nZT4gLy8gbGlzdGVucyBmb3IgXCJpb25DaGFuZ2VcIlxuICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICBtZW1iZXJOYW1lID0gbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgLy8gc3RhbmRhcmQgZXZlbnRcbiAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgIC8vIHNvIGxldCdzIGFkZCB0aGUgbGlzdGVuZXIgXCJtb3VzZW92ZXJcIiwgd2hpY2ggaXMgYWxsIGxvd2VyY2FzZWRcbiAgICAgICAgbWVtYmVyTmFtZSA9IGxuLnNsaWNlKDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgIC8vIHNvIGxldCdzIHRyaW0gb2ZmIHRoZSBcIm9uXCIgcHJlZml4IGFuZCBsb3dlcmNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICBtZW1iZXJOYW1lID0gbG5bMl0gKyBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgfVxuICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgcHJvcGVydHkgaWYgaXQgZXhpc3RzIGFuZCBpdCdzIG5vdCBhIFNWR1xuICAgICAgY29uc3QgaXNDb21wbGV4ID0gaXNDb21wbGV4VHlwZShuZXdWYWx1ZSk7XG4gICAgICBpZiAoKGlzUHJvcCB8fCBpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpICYmICFpc1N2Zykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgU2FmYXJpLCBtb3ZpbmcgdGhlIDxpbnB1dD4gY2FyZXQgd2hlbiByZS1hc3NpZ25pbmcgdGhlIHNhbWUgdmFsdWVkXG4gICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGZhbHNlIHx8IGVsbS5nZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSkgPT09ICcnKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKCFpc1Byb3AgfHwgZmxhZ3MgJiA0IC8qIGlzSG9zdCAqLyB8fCBpc1N2ZykgJiYgIWlzQ29tcGxleCkge1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgcGFyc2VDbGFzc0xpc3RSZWdleCA9IC9cXHMvO1xuY29uc3QgcGFyc2VDbGFzc0xpc3QgPSB2YWx1ZSA9PiAhdmFsdWUgPyBbXSA6IHZhbHVlLnNwbGl0KHBhcnNlQ2xhc3NMaXN0UmVnZXgpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAvLyBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaW4gaXMgYSBzaGFkb3cgcm9vdCwgd2hpY2ggaXMgYSBkb2N1bWVudCBmcmFnbWVudFxuICAvLyB0aGVuIHdlIHdhbnQgdG8gYmUgYWRkaW5nIGF0dHJzL3Byb3BzIHRvIHRoZSBzaGFkb3cgcm9vdCdzIFwiaG9zdFwiIGVsZW1lbnRcbiAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICBjb25zdCBlbG0gPSBuZXdWbm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMTEgLyogRG9jdW1lbnRGcmFnbWVudCAqLyAmJiBuZXdWbm9kZS4kZWxtJC5ob3N0ID8gbmV3Vm5vZGUuJGVsbSQuaG9zdCA6IG5ld1Zub2RlLiRlbG0kO1xuICBjb25zdCBvbGRWbm9kZUF0dHJzID0gb2xkVm5vZGUgJiYgb2xkVm5vZGUuJGF0dHJzJCB8fCBFTVBUWV9PQko7XG4gIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IEVNUFRZX09CSjtcbiAge1xuICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG4gICAgZm9yIChtZW1iZXJOYW1lIGluIG9sZFZub2RlQXR0cnMpIHtcbiAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB1bmRlZmluZWQsIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGFkZCBuZXcgJiB1cGRhdGUgY2hhbmdlZCBhdHRyaWJ1dGVzXG4gIGZvciAobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSB7XG4gICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBuZXdWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBpc1N2Z01vZGUsIG5ld1Zub2RlLiRmbGFncyQpO1xuICB9XG59O1xuY29uc3QgY3JlYXRlRWxtID0gKG9sZFBhcmVudFZOb2RlLCBuZXdQYXJlbnRWTm9kZSwgY2hpbGRJbmRleCwgcGFyZW50RWxtKSA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gIGNvbnN0IG5ld1ZOb2RlID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgZWxtO1xuICBsZXQgY2hpbGROb2RlO1xuICBpZiAobmV3Vk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgLy8gY3JlYXRlIHRleHQgbm9kZVxuICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gZG9jLmNyZWF0ZVRleHROb2RlKG5ld1ZOb2RlLiR0ZXh0JCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVFbGVtZW50KG5ld1ZOb2RlLiR0YWckKTtcbiAgICAvLyBhZGQgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAge1xuICAgICAgdXBkYXRlRWxlbWVudChudWxsLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKHNjb3BlSWQpICYmIGVsbVsncy1zaSddICE9PSBzY29wZUlkKSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNjb3BlSWQgYW5kIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICAvLyB0aGVuIGxldCdzIGFkZCB0aGUgc2NvcGVJZCBhcyBhIGNzcyBjbGFzc1xuICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoZWxtWydzLXNpJ10gPSBzY29wZUlkKTtcbiAgICB9XG4gICAgaWYgKG5ld1ZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXdWTm9kZS4kY2hpbGRyZW4kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlLCBpKTtcbiAgICAgICAgLy8gcmV0dXJuIG5vZGUgY291bGQgaGF2ZSBiZWVuIG51bGxcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IG5vZGVcbiAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZWxtO1xufTtcbmNvbnN0IGFkZFZub2RlcyA9IChwYXJlbnRFbG0sIGJlZm9yZSwgcGFyZW50Vk5vZGUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkgPT4ge1xuICBsZXQgY29udGFpbmVyRWxtID0gcGFyZW50RWxtO1xuICBsZXQgY2hpbGROb2RlO1xuICBpZiAoY29udGFpbmVyRWxtLnNoYWRvd1Jvb3QgJiYgY29udGFpbmVyRWxtLnRhZ05hbWUgPT09IGhvc3RUYWdOYW1lKSB7XG4gICAgY29udGFpbmVyRWxtID0gY29udGFpbmVyRWxtLnNoYWRvd1Jvb3Q7XG4gIH1cbiAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgIGlmICh2bm9kZXNbc3RhcnRJZHhdKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0obnVsbCwgcGFyZW50Vk5vZGUsIHN0YXJ0SWR4KTtcbiAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgY29udGFpbmVyRWxtLmluc2VydEJlZm9yZShjaGlsZE5vZGUsIGJlZm9yZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgcmVtb3ZlVm5vZGVzID0gKHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgdm5vZGUsIGVsbSkgPT4ge1xuICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgaWYgKHZub2RlID0gdm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgZWxtID0gdm5vZGUuJGVsbSQ7XG4gICAgICBjYWxsTm9kZVJlZnModm5vZGUpO1xuICAgICAgLy8gcmVtb3ZlIHRoZSB2bm9kZSdzIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgdXBkYXRlQ2hpbGRyZW4gPSAocGFyZW50RWxtLCBvbGRDaCwgbmV3Vk5vZGUsIG5ld0NoKSA9PiB7XG4gIGxldCBvbGRTdGFydElkeCA9IDA7XG4gIGxldCBuZXdTdGFydElkeCA9IDA7XG4gIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgbGV0IG5vZGU7XG4gIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gVm5vZGUgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGxlZnRcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKG9sZEVuZFZub2RlID09IG51bGwpIHtcbiAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgfSBlbHNlIGlmIChuZXdFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICBwYXJlbnRFbG0uaW5zZXJ0QmVmb3JlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQsIG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICBwYXJlbnRFbG0uaW5zZXJ0QmVmb3JlKG9sZEVuZFZub2RlLiRlbG0kLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB7XG4gICAgICAgIC8vIG5ldyBlbGVtZW50XG4gICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZSwgbmV3U3RhcnRJZHgpO1xuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICB7XG4gICAgICAgICAgb2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBuZXdDaFtuZXdFbmRJZHggKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLiRlbG0kLCBuZXdWTm9kZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgpO1xuICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgfVxufTtcbmNvbnN0IGlzU2FtZVZub2RlID0gKHZub2RlMSwgdm5vZGUyKSA9PiB7XG4gIC8vIGNvbXBhcmUgaWYgdHdvIHZub2RlIHRvIHNlZSBpZiB0aGV5J3JlIFwidGVjaG5pY2FsbHlcIiB0aGUgc2FtZVxuICAvLyBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgZWxlbWVudCB0YWcsIGFuZCBzYW1lIGtleSB0byBiZSB0aGUgc2FtZVxuICBpZiAodm5vZGUxLiR0YWckID09PSB2bm9kZTIuJHRhZyQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcGF0Y2ggPSAob2xkVk5vZGUsIG5ld1ZOb2RlKSA9PiB7XG4gIGNvbnN0IGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQ7XG4gIGNvbnN0IG9sZENoaWxkcmVuID0gb2xkVk5vZGUuJGNoaWxkcmVuJDtcbiAgY29uc3QgbmV3Q2hpbGRyZW4gPSBuZXdWTm9kZS4kY2hpbGRyZW4kO1xuICBjb25zdCB0YWcgPSBuZXdWTm9kZS4kdGFnJDtcbiAgY29uc3QgdGV4dCA9IG5ld1ZOb2RlLiR0ZXh0JDtcbiAgaWYgKHRleHQgPT09IG51bGwpIHtcbiAgICAvLyBlbGVtZW50IG5vZGVcbiAgICB7XG4gICAgICBpZiAodGFnID09PSAnc2xvdCcpIDtlbHNlIHtcbiAgICAgICAgLy8gZWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IHJlbmRlciBvZiBhbiBlbGVtZW50IE9SIGl0J3MgYW4gdXBkYXRlXG4gICAgICAgIC8vIEFORCB3ZSBhbHJlYWR5IGtub3cgaXQncyBwb3NzaWJsZSBpdCBjb3VsZCBoYXZlIGNoYW5nZWRcbiAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQob2xkVk5vZGUsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwgJiYgbmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIC8vIGxvb2tzIGxpa2UgdGhlcmUncyBjaGlsZCB2bm9kZXMgZm9yIGJvdGggdGhlIG9sZCBhbmQgbmV3IHZub2Rlc1xuICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaGlsZHJlbiwgbmV3Vk5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAvLyBubyBvbGQgY2hpbGQgdm5vZGVzLCBidXQgdGhlcmUgYXJlIG5ldyBjaGlsZCB2bm9kZXMgdG8gYWRkXG4gICAgICBpZiAob2xkVk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIHRoZSBvbGQgdm5vZGUgd2FzIHRleHQsIHNvIGJlIHN1cmUgdG8gY2xlYXIgaXQgb3V0XG4gICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChvbGRDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgLy8gbm8gbmV3IGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBvbGQgY2hpbGQgdm5vZGVzIHRvIHJlbW92ZVxuICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoaWxkcmVuLCAwLCBvbGRDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob2xkVk5vZGUuJHRleHQkICE9PSB0ZXh0KSB7XG4gICAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSB0ZXh0IG9ubHkgdm5vZGVcbiAgICAvLyBhbmQgYWxzbyBvbmx5IGlmIHRoZSB0ZXh0IGlzIGRpZmZlcmVudCB0aGFuIGJlZm9yZVxuICAgIGVsbS5kYXRhID0gdGV4dDtcbiAgfVxufTtcbmNvbnN0IGNhbGxOb2RlUmVmcyA9IHZOb2RlID0+IHtcbiAge1xuICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgdk5vZGUuJGNoaWxkcmVuJCAmJiB2Tm9kZS4kY2hpbGRyZW4kLm1hcChjYWxsTm9kZVJlZnMpO1xuICB9XG59O1xuY29uc3QgcmVuZGVyVmRvbSA9IChob3N0UmVmLCByZW5kZXJGblJlc3VsdHMpID0+IHtcbiAgY29uc3QgaG9zdEVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gIGNvbnN0IHJvb3RWbm9kZSA9IGlzSG9zdChyZW5kZXJGblJlc3VsdHMpID8gcmVuZGVyRm5SZXN1bHRzIDogaChudWxsLCBudWxsLCByZW5kZXJGblJlc3VsdHMpO1xuICBob3N0VGFnTmFtZSA9IGhvc3RFbG0udGFnTmFtZTtcbiAgcm9vdFZub2RlLiR0YWckID0gbnVsbDtcbiAgcm9vdFZub2RlLiRmbGFncyQgfD0gNCAvKiBpc0hvc3QgKi87XG4gIGhvc3RSZWYuJHZub2RlJCA9IHJvb3RWbm9kZTtcbiAgcm9vdFZub2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQgPSBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbTtcbiAge1xuICAgIHNjb3BlSWQgPSBob3N0RWxtWydzLXNjJ107XG4gIH1cbiAgLy8gc3luY2hyb25vdXMgcGF0Y2hcbiAgcGF0Y2gob2xkVk5vZGUsIHJvb3RWbm9kZSk7XG59O1xuY29uc3QgZ2V0RWxlbWVudCA9IHJlZiA9PiBnZXRIb3N0UmVmKHJlZikuJGhvc3RFbGVtZW50JDtcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgY29uc3QgZWxtID0gZ2V0RWxlbWVudChyZWYpO1xuICByZXR1cm4ge1xuICAgIGVtaXQ6IGRldGFpbCA9PiB7XG4gICAgICByZXR1cm4gZW1pdEV2ZW50KGVsbSwgbmFtZSwge1xuICAgICAgICBidWJibGVzOiAhIShmbGFncyAmIDQgLyogQnViYmxlcyAqLyksXG4gICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogQ29tcG9zZWQgKi8pLFxuICAgICAgICBjYW5jZWxhYmxlOiAhIShmbGFncyAmIDEgLyogQ2FuY2VsbGFibGUgKi8pLFxuICAgICAgICBkZXRhaWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgJiBkaXNwYXRjaCBhIGN1c3RvbSBFdmVudCBvbiBhIHByb3ZpZGVkIHRhcmdldFxuICogQHBhcmFtIGVsbSB0aGUgdGFyZ2V0IG9mIHRoZSBFdmVudFxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gZ2l2ZSB0aGUgY3VzdG9tIEV2ZW50XG4gKiBAcGFyYW0gb3B0cyBvcHRpb25zIGZvciBjb25maWd1cmluZyBhIGN1c3RvbSBFdmVudFxuICogQHJldHVybnMgdGhlIGN1c3RvbSBFdmVudFxuICovXG5jb25zdCBlbWl0RXZlbnQgPSAoZWxtLCBuYW1lLCBvcHRzKSA9PiB7XG4gIGNvbnN0IGV2ID0gcGx0LmNlKG5hbWUsIG9wdHMpO1xuICBlbG0uZGlzcGF0Y2hFdmVudChldik7XG4gIHJldHVybiBldjtcbn07XG5jb25zdCBhdHRhY2hUb0FuY2VzdG9yID0gKGhvc3RSZWYsIGFuY2VzdG9yQ29tcG9uZW50KSA9PiB7XG4gIGlmIChhbmNlc3RvckNvbXBvbmVudCAmJiAhaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10ucHVzaChuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSByKSk7XG4gIH1cbn07XG5jb25zdCBzY2hlZHVsZVVwZGF0ZSA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gIH1cbiAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi87XG4gICAgcmV0dXJuO1xuICB9XG4gIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgLy8gdGhlcmUgaXMgbm8gYW5jZXN0b3IgY29tcG9uZW50IG9yIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgLy8gaGFzIGFscmVhZHkgZmlyZWQgb2ZmIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHRoZW5cbiAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gIGNvbnN0IGRpc3BhdGNoID0gKCkgPT4gZGlzcGF0Y2hIb29rcyhob3N0UmVmLCBpc0luaXRpYWxMb2FkKTtcbiAgcmV0dXJuIHdyaXRlVGFzayhkaXNwYXRjaCk7XG59O1xuY29uc3QgZGlzcGF0Y2hIb29rcyA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIGNvbnN0IGVuZFNjaGVkdWxlID0gY3JlYXRlVGltZSgnc2NoZWR1bGVVcGRhdGUnLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQ7XG4gIGxldCBwcm9taXNlO1xuICBlbmRTY2hlZHVsZSgpO1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoKSA9PiB1cGRhdGVDb21wb25lbnQoaG9zdFJlZiwgaW5zdGFuY2UsIGlzSW5pdGlhbExvYWQpKTtcbn07XG5jb25zdCB1cGRhdGVDb21wb25lbnQgPSBhc3luYyAoaG9zdFJlZiwgaW5zdGFuY2UsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgLy8gdXBkYXRlQ29tcG9uZW50XG4gIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3QgZW5kVXBkYXRlID0gY3JlYXRlVGltZSgndXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICAvLyBET00gV1JJVEUhXG4gICAgYXR0YWNoU3R5bGVzKGhvc3RSZWYpO1xuICB9XG4gIGNvbnN0IGVuZFJlbmRlciA9IGNyZWF0ZVRpbWUoJ3JlbmRlcicsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gIHtcbiAgICBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgfVxuICBpZiAocmMpIHtcbiAgICAvLyBvaywgc28gdHVybnMgb3V0IHRoZXJlIGFyZSBzb21lIGNoaWxkIGhvc3QgZWxlbWVudHNcbiAgICAvLyB3YWl0aW5nIG9uIHRoaXMgcGFyZW50IGVsZW1lbnQgdG8gbG9hZFxuICAgIC8vIGxldCdzIGZpcmUgb2ZmIGFsbCB1cGRhdGUgY2FsbGJhY2tzIHdhaXRpbmdcbiAgICByYy5tYXAoY2IgPT4gY2IoKSk7XG4gICAgZWxtWydzLXJjJ10gPSB1bmRlZmluZWQ7XG4gIH1cbiAgZW5kUmVuZGVyKCk7XG4gIGVuZFVwZGF0ZSgpO1xuICB7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9taXNlcyA9IGVsbVsncy1wJ107XG4gICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwb3N0VXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UuYWxsKGNoaWxkcmVuUHJvbWlzZXMpLnRoZW4ocG9zdFVwZGF0ZSk7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gNCAvKiBpc1dhaXRpbmdGb3JDaGlsZHJlbiAqLztcbiAgICAgIGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBjYWxsUmVuZGVyID0gKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pID0+IHtcbiAgdHJ5IHtcbiAgICBpbnN0YW5jZSA9IGluc3RhbmNlLnJlbmRlcigpO1xuICAgIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgfVxuICAgIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyIC8qIGhhc1JlbmRlcmVkICovO1xuICAgIH1cbiAgICB7XG4gICAgICB7XG4gICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgIC8vIG9yIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBjc3MgY2xhc3MvYXR0cnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIHtcbiAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IHBvc3RVcGRhdGVDb21wb25lbnQgPSBob3N0UmVmID0+IHtcbiAgY29uc3QgdGFnTmFtZSA9IGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJDtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAge1xuICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgYWRkSHlkcmF0ZWRGbGFnKGVsbSk7XG4gICAgfVxuICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICB7XG4gICAgICBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQoZWxtKTtcbiAgICAgIGlmICghYW5jZXN0b3JDb21wb25lbnQpIHtcbiAgICAgICAgYXBwRGlkTG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbmRQb3N0VXBkYXRlKCk7XG4gIH1cbiAgLy8gbG9hZCBldmVudHMgZmlyZSBmcm9tIGJvdHRvbSB0byB0b3BcbiAgLy8gdGhlIGRlZXBlc3QgZWxlbWVudHMgbG9hZCBmaXJzdCB0aGVuIGJ1YmJsZXMgdXBcbiAge1xuICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pIHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKSk7XG4gICAgfVxuICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+KDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogbmVlZHNSZXJlbmRlciAqLyk7XG4gIH1cbiAgLy8gKCDigKJf4oCiKVxuICAvLyAoIOKAol/igKIpPuKMkOKWoC3ilqBcbiAgLy8gKOKMkOKWoF/ilqApXG59O1xuY29uc3QgYXBwRGlkTG9hZCA9IHdobyA9PiB7XG4gIC8vIG9uIGFwcGxvYWRcbiAgLy8gd2UgaGF2ZSBmaW5pc2ggdGhlIGZpcnN0IGJpZyBpbml0aWFsIHJlbmRlclxuICB7XG4gICAgYWRkSHlkcmF0ZWRGbGFnKGRvYy5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG4gIG5leHRUaWNrKCgpID0+IGVtaXRFdmVudCh3aW4sICdhcHBsb2FkJywge1xuICAgIGRldGFpbDoge1xuICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0VcbiAgICB9XG4gIH0pKTtcbn07XG5jb25zdCB0aGVuID0gKHByb21pc2UsIHRoZW5GbikgPT4ge1xuICByZXR1cm4gcHJvbWlzZSAmJiBwcm9taXNlLnRoZW4gPyBwcm9taXNlLnRoZW4odGhlbkZuKSA6IHRoZW5GbigpO1xufTtcbmNvbnN0IGFkZEh5ZHJhdGVkRmxhZyA9IGVsbSA9PiBlbG0uY2xhc3NMaXN0LmFkZCgnaHlkcmF0ZWQnKTtcbi8qKlxuICogUGFyc2UgYSBuZXcgcHJvcGVydHkgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgdHlwZS5cbiAqXG4gKiBXaGlsZSB0aGUgcHJvcCB2YWx1ZSBjYW4gcmVhc29uYWJseSBiZSBleHBlY3RlZCB0byBiZSBvZiBgYW55YCB0eXBlIGFzIGZhciBhcyBUeXBlU2NyaXB0J3MgdHlwZSBjaGVja2VyIGlzIGNvbmNlcm5lZCxcbiAqIGl0IGlzIG5vdCBzYWZlIHRvIGFzc3VtZSB0aGF0IHRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgZXZhbHVhdGluZyBgdHlwZW9mIHByb3BWYWx1ZWAgbWF0Y2hlczpcbiAqICAgMS4gYGFueWAsIHRoZSB0eXBlIGdpdmVuIHRvIGBwcm9wVmFsdWVgIGluIHRoZSBmdW5jdGlvbiBzaWduYXR1cmVcbiAqICAgMi4gdGhlIHR5cGUgc3RvcmVkIGZyb20gYHByb3BUeXBlYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSBjYXBhYmlsaXR5IHRvIHBhcnNlL2NvZXJjZSBhIHByb3BlcnR5J3MgdmFsdWUgdG8gcG90ZW50aWFsbHkgYW55IG90aGVyIEphdmFTY3JpcHQgdHlwZS5cbiAqXG4gKiBQcm9wZXJ0eSB2YWx1ZXMgcmVwcmVzZW50ZWQgaW4gVFNYIHByZXNlcnZlIHRoZWlyIHR5cGUgaW5mb3JtYXRpb24uIEluIHRoZSBleGFtcGxlIGJlbG93LCB0aGUgbnVtYmVyIDAgaXMgcGFzc2VkIHRvXG4gKiBhIGNvbXBvbmVudC4gVGhpcyBgcHJvcFZhbHVlYCB3aWxsIHByZXNlcnZlIGl0cyB0eXBlIGluZm9ybWF0aW9uIChgdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcidgKS4gTm90ZSB0aGF0IGlzXG4gKiBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgYmVpbmcgcGFzc2VkIGluLCBub3QgdGhlIHR5cGUgZGVjbGFyZWQgb2YgdGhlIGNsYXNzIG1lbWJlciBkZWNvcmF0ZWQgd2l0aCBgQFByb3BgLlxuICogYGBgdHN4XG4gKiA8bXktY21wIHByb3AtdmFsPXswfT48L215LWNtcD5cbiAqIGBgYFxuICpcbiAqIEhUTUwgcHJvcCB2YWx1ZXMgb24gdGhlIG90aGVyIGhhbmQsIHdpbGwgYWx3YXlzIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHByb3BWYWx1ZSB0aGUgbmV3IHZhbHVlIHRvIGNvZXJjZSB0byBzb21lIHR5cGVcbiAqIEBwYXJhbSBwcm9wVHlwZSB0aGUgdHlwZSBvZiB0aGUgcHJvcCwgZXhwcmVzc2VkIGFzIGEgYmluYXJ5IG51bWJlclxuICogQHJldHVybnMgdGhlIHBhcnNlZC9jb2VyY2VkIHZhbHVlXG4gKi9cbmNvbnN0IHBhcnNlUHJvcGVydHlWYWx1ZSA9IChwcm9wVmFsdWUsIHByb3BUeXBlKSA9PiB7XG4gIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgIWlzQ29tcGxleFR5cGUocHJvcFZhbHVlKSkge1xuICAgIGlmIChwcm9wVHlwZSAmIDQgLyogQm9vbGVhbiAqLykge1xuICAgICAgLy8gcGVyIHRoZSBIVE1MIHNwZWMsIGFueSBzdHJpbmcgdmFsdWUgbWVhbnMgaXQgaXMgYSBib29sZWFuIHRydWUgdmFsdWVcbiAgICAgIC8vIGJ1dCB3ZSdsbCBjaGVhdCBoZXJlIGFuZCBzYXkgdGhhdCB0aGUgc3RyaW5nIFwiZmFsc2VcIiBpcyB0aGUgYm9vbGVhbiBmYWxzZVxuICAgICAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcHJvcFZhbHVlID09PSAnJyB8fCAhIXByb3BWYWx1ZTtcbiAgICB9XG4gICAgLy8gcmVkdW5kYW50IHJldHVybiBoZXJlIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbiAgfVxuICAvLyBub3Qgc3VyZSBleGFjdGx5IHdoYXQgdHlwZSB3ZSB3YW50XG4gIC8vIHNvIG5vIG5lZWQgdG8gY2hhbmdlIHRvIGEgZGlmZmVyZW50IHR5cGVcbiAgcmV0dXJuIHByb3BWYWx1ZTtcbn07XG5jb25zdCBnZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lKSA9PiBnZXRIb3N0UmVmKHJlZikuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuY29uc3Qgc2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSwgbmV3VmFsLCBjbXBNZXRhKSA9PiB7XG4gIC8vIGNoZWNrIG91ciBuZXcgcHJvcGVydHkgdmFsdWUgYWdhaW5zdCBvdXIgaW50ZXJuYWwgdmFsdWVcbiAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgY29uc3Qgb2xkVmFsID0gaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG4gIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQ7XG4gIG5ld1ZhbCA9IHBhcnNlUHJvcGVydHlWYWx1ZShuZXdWYWwsIGNtcE1ldGEuJG1lbWJlcnMkW3Byb3BOYW1lXVswXSk7XG4gIC8vIGV4cGxpY2l0bHkgY2hlY2sgZm9yIE5hTiBvbiBib3RoIHNpZGVzLCBhcyBgTmFOID09PSBOYU5gIGlzIGFsd2F5cyBmYWxzZVxuICBjb25zdCBhcmVCb3RoTmFOID0gTnVtYmVyLmlzTmFOKG9sZFZhbCkgJiYgTnVtYmVyLmlzTmFOKG5ld1ZhbCk7XG4gIGNvbnN0IGRpZFZhbHVlQ2hhbmdlID0gbmV3VmFsICE9PSBvbGRWYWwgJiYgIWFyZUJvdGhOYU47XG4gIGlmICgoIShmbGFncyAmIDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgfHwgb2xkVmFsID09PSB1bmRlZmluZWQpICYmIGRpZFZhbHVlQ2hhbmdlKSB7XG4gICAgLy8gZ2Fkem9va3MhIHRoZSBwcm9wZXJ0eSdzIHZhbHVlIGhhcyBjaGFuZ2VkISFcbiAgICAvLyBzZXQgb3VyIG5ldyB2YWx1ZSFcbiAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaWYgKChmbGFncyAmICgyIC8qIGhhc1JlbmRlcmVkICovIHwgMTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi8pKSA9PT0gMiAvKiBoYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAvLyBsb29rcyBsaWtlIHRoaXMgdmFsdWUgYWN0dWFsbHkgY2hhbmdlZCwgc28gd2UndmUgZ290IHdvcmsgdG8gZG8hXG4gICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAvLyBxdWV1ZSB0aGF0IHdlIG5lZWQgdG8gZG8gYW4gdXBkYXRlLCBidXQgZG9uJ3Qgd29ycnkgYWJvdXQgcXVldWluZ1xuICAgICAgICAvLyB1cCBtaWxsaW9ucyBjdXogdGhpcyBmdW5jdGlvbiBlbnN1cmVzIGl0IG9ubHkgcnVucyBvbmNlXG4gICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5jb25zdCBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICBpZiAoY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAvLyBJdCdzIGJldHRlciB0byBoYXZlIGEgY29uc3QgdGhhbiB0d28gT2JqZWN0LmVudHJpZXMoKVxuICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCk7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ3N0ci5wcm90b3R5cGU7XG4gICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogUHJvcCAqLyB8fCBmbGFncyAmIDIgLyogcHJveHlTdGF0ZSAqLyAmJiBtZW1iZXJGbGFncyAmIDMyIC8qIFN0YXRlICovKSB7XG4gICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gcHJvcFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIGdldCB2YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgc2V0IHZhbHVlXG4gICAgICAgICAgICBzZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgY21wTWV0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSB7XG4gICAgICBjb25zdCBhdHRyTmFtZVRvUHJvcE5hbWUgPSBuZXcgTWFwKCk7XG4gICAgICBwcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGF0dHJOYW1lLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gYXR0ck5hbWVUb1Byb3BOYW1lLmdldChhdHRyTmFtZSk7XG4gICAgICAgICAgLy8gIEluIGEgd2ViIGNvbXBvbmVudCBsaWZlY3ljbGUgdGhlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBydW5zIHByaW9yIHRvIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgLy8gIGluIHRoZSBjYXNlIHdoZXJlIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IGlubGluZS5cbiAgICAgICAgICAvLyAgYGBgaHRtbFxuICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gIFRoZXJlIGlzIGFuIGVkZ2UgY2FzZSB3aGVyZSBhIGRldmVsb3BlciBzZXRzIHRoZSBhdHRyaWJ1dGUgaW5saW5lIG9uIGEgY3VzdG9tIGVsZW1lbnQgYW5kIHRoZW5cbiAgICAgICAgICAvLyAgcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2VzIGl0IGJlZm9yZSBpdCBoYXMgYmVlbiB1cGdyYWRlZCBhcyBzaG93biBiZWxvdzpcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgLy8gICAgPCEtLSB0aGlzIGNvbXBvbmVudCBoYXMgX25vdF8gYmVlbiB1cGdyYWRlZCB5ZXQgLS0+XG4gICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBpZD1cInRlc3RcIiBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAvLyAgICA8c2NyaXB0PlxuICAgICAgICAgIC8vICAgICAgLy8gZ3JhYiBub24tdXBncmFkZWQgY29tcG9uZW50XG4gICAgICAgICAgLy8gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdFwiKTtcbiAgICAgICAgICAvLyAgICAgIGVsLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIjtcbiAgICAgICAgICAvLyAgICAgIC8vIHVwZ3JhZGUgY29tcG9uZW50XG4gICAgICAgICAgLy8gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWNvbXBvbmVudCcsIE15Q29tcG9uZW50KTtcbiAgICAgICAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgLy8gIEluIHRoaXMgY2FzZSBpZiB3ZSBkbyBub3QgdW5zaGFkb3cgaGVyZSBhbmQgdXNlIHRoZSB2YWx1ZSBvZiB0aGUgc2hhZG93aW5nIHByb3BlcnR5LCBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcbiAgICAgICAgICAvLyAgd2lsbCBiZSBjYWxsZWQgd2l0aCBgbmV3VmFsdWUgPSBcInNvbWUtdmFsdWVcImAgYW5kIHdpbGwgc2V0IHRoZSBzaGFkb3dlZCBwcm9wZXJ0eSAodGhpcy5zb21lQXR0cmlidXRlID0gXCJhbm90aGVyLXZhbHVlXCIpXG4gICAgICAgICAgLy8gIHRvIHRoZSB2YWx1ZSB0aGF0IHdhcyBzZXQgaW5saW5lIGkuZS4gXCJzb21lLXZhbHVlXCIgZnJvbSBhYm92ZSBleGFtcGxlLiBXaGVuXG4gICAgICAgICAgLy8gIHRoZSBjb25uZWN0ZWRDYWxsYmFjayBhdHRlbXB0cyB0byB1bnNoYWRvdyBpdCB3aWxsIHVzZSBcInNvbWUtdmFsdWVcIiBhcyB0aGUgaW5pdGlhbCB2YWx1ZSByYXRoZXIgdGhhbiBcImFub3RoZXItdmFsdWVcIlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gIFRoZSBjYXNlIHdoZXJlIHRoZSBhdHRyaWJ1dGUgd2FzIE5PVCBzZXQgaW5saW5lIGJ1dCB3YXMgbm90IHNldCBwcm9ncmFtbWF0aWNhbGx5IHNoYWxsIGJlIGhhbmRsZWQvdW5zaGFkb3dlZFxuICAgICAgICAgIC8vICBieSBjb25uZWN0ZWRDYWxsYmFjayBhcyB0aGlzIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB3aWxsIG5vdCBmaXJlLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgVE9ETyhTVEVOQ0lMLTE2KSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgd2hldGhlciBvciBub3Qgd2UgYWN0dWFsbHkgd2FudCB0byBiZSByZWZsZWN0aW5nIHRoZSBhdHRyaWJ1dGVzIHRvXG4gICAgICAgICAgLy8gIHByb3BlcnRpZXMgaGVyZSBnaXZlbiB0aGF0IHRoaXMgZ29lcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzIG91dGxpbmVkIGhlcmVcbiAgICAgICAgICAvLyAgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNhdm9pZC1yZWVudHJhbmN5XG4gICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdudW1iZXInICYmIHRoaXNbcHJvcE5hbWVdID09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcHJvcE5hbWUgZXhpc3RzIG9uIHRoZSBwcm90b3R5cGUgb2YgYENzdHJgLCB0aGlzIHVwZGF0ZSBtYXkgYmUgYSByZXN1bHQgb2YgU3RlbmNpbCB1c2luZyBuYXRpdmVcbiAgICAgICAgICAgIC8vIEFQSXMgdG8gcmVmbGVjdCBwcm9wcyBhcyBhdHRyaWJ1dGVzLiBDYWxscyB0byBgc2V0QXR0cmlidXRlKHNvbWVFbGVtZW50LCBwcm9wTmFtZSlgIHdpbGwgcmVzdWx0IGluXG4gICAgICAgICAgICAvLyBgcHJvcE5hbWVgIHRvIGJlIGNvbnZlcnRlZCB0byBhIGBET01TdHJpbmdgLCB3aGljaCBtYXkgbm90IGJlIHdoYXQgd2Ugd2FudCBmb3Igb3RoZXIgcHJpbWl0aXZlIHByb3BzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9IG5ld1ZhbHVlID09PSBudWxsICYmIHR5cGVvZiB0aGlzW3Byb3BOYW1lXSA9PT0gJ2Jvb2xlYW4nID8gZmFsc2UgOiBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gb2JzZXJ2ZVxuICAgICAgLy8gYW5kIGFsc28gY3JlYXRlIGEgbWFwIG9mIGh0bWwgYXR0cmlidXRlIG5hbWUgdG8ganMgcHJvcGVydHkgbmFtZVxuICAgICAgQ3N0ci5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBtZW1iZXJzLmZpbHRlcigoW18sIG1dKSA9PiBtWzBdICYgMTUgLyogSGFzQXR0cmlidXRlICovKSAvLyBmaWx0ZXIgdG8gb25seSBrZWVwIHByb3BzIHRoYXQgc2hvdWxkIG1hdGNoIGF0dHJpYnV0ZXNcbiAgICAgIC5tYXAoKFtwcm9wTmFtZSwgbV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBtWzFdIHx8IHByb3BOYW1lO1xuICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgIHJldHVybiBhdHRyTmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gIC8vIGluaXRpYWxpemVDb21wb25lbnRcbiAgaWYgKChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLykgPT09IDApIHtcbiAgICB7XG4gICAgICAvLyB3ZSBoYXZlbid0IGluaXRpYWxpemVkIHRoaXMgZWxlbWVudCB5ZXRcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLztcbiAgICAgIC8vIGxhenkgbG9hZGVkIGNvbXBvbmVudHNcbiAgICAgIC8vIHJlcXVlc3QgdGhlIGNvbXBvbmVudCdzIGltcGxlbWVudGF0aW9uIHRvIGJlXG4gICAgICAvLyB3aXJlZCB1cCB3aXRoIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgIENzdHIgPSBsb2FkTW9kdWxlKGNtcE1ldGEpO1xuICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAvLyBBd2FpdCBjcmVhdGVzIGEgbWljcm8tdGFzayBhdm9pZCBpZiBwb3NzaWJsZVxuICAgICAgICBjb25zdCBlbmRMb2FkID0gdW5pcXVlVGltZSgpO1xuICAgICAgICBDc3RyID0gYXdhaXQgQ3N0cjtcbiAgICAgICAgZW5kTG9hZCgpO1xuICAgICAgfVxuICAgICAgaWYgKCFDc3RyLmlzUHJveGllZCkge1xuICAgICAgICBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAyIC8qIHByb3h5U3RhdGUgKi8pO1xuICAgICAgICBDc3RyLmlzUHJveGllZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmROZXdJbnN0YW5jZSA9IGNyZWF0ZVRpbWUoJ2NyZWF0ZUluc3RhbmNlJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgLy8gb2ssIHRpbWUgdG8gY29uc3RydWN0IHRoZSBpbnN0YW5jZVxuICAgICAgLy8gYnV0IGxldCdzIGtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydCBhbmQgc3RvcFxuICAgICAgLy8gc28gdGhhdCB0aGUgZ2V0dGVycy9zZXR0ZXJzIGRvbid0IGluY29ycmVjdGx5IHN0ZXAgb24gZGF0YVxuICAgICAge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgfVxuICAgICAgLy8gY29uc3RydWN0IHRoZSBsYXp5LWxvYWRlZCBjb21wb25lbnQgaW1wbGVtZW50YXRpb25cbiAgICAgIC8vIHBhc3NpbmcgdGhlIGhvc3RSZWYgaXMgdmVyeSBpbXBvcnRhbnQgZHVyaW5nXG4gICAgICAvLyBjb25zdHJ1Y3Rpb24gaW4gb3JkZXIgdG8gZGlyZWN0bHkgd2lyZSB0b2dldGhlciB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBhbmQgdGhlIGxhenktbG9hZGVkIGluc3RhbmNlXG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQ3N0cihob3N0UmVmKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgIH1cbiAgICAgIGVuZE5ld0luc3RhbmNlKCk7XG4gICAgfVxuICAgIGlmIChDc3RyLnN0eWxlKSB7XG4gICAgICAvLyB0aGlzIGNvbXBvbmVudCBoYXMgc3R5bGVzIGJ1dCB3ZSBoYXZlbid0IHJlZ2lzdGVyZWQgdGhlbSB5ZXRcbiAgICAgIGxldCBzdHlsZSA9IENzdHIuc3R5bGU7XG4gICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhKTtcbiAgICAgIGlmICghc3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICBjb25zdCBlbmRSZWdpc3RlclN0eWxlcyA9IGNyZWF0ZVRpbWUoJ3JlZ2lzdGVyU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgZW5kUmVnaXN0ZXJTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gd2UndmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBsYXp5IGluc3RhbmNlXG4gIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICBjb25zdCBzY2hlZHVsZSA9ICgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIHRydWUpO1xuICBpZiAoYW5jZXN0b3JDb21wb25lbnQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcmMnXSkge1xuICAgIC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgbG9hZCBhbmQgdGhpcyBjb21wb25lbnQgaXQgaGFzIGFuIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAvLyBzbyBsZXQncyBqdXN0IGNvb2wgb3VyIGpldHMgYW5kIHdhaXQgZm9yIHRoZSBhbmNlc3RvciB0byBjb250aW51ZSBmaXJzdFxuICAgIC8vIHRoaXMgd2lsbCBnZXQgZmlyZWQgb2ZmIHdoZW4gdGhlIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICBhbmNlc3RvckNvbXBvbmVudFsncy1yYyddLnB1c2goc2NoZWR1bGUpO1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlKCk7XG4gIH1cbn07XG5jb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGVsbSA9PiB7XG4gIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgIGNvbnN0IGVuZENvbm5lY3RlZCA9IGNyZWF0ZVRpbWUoJ2Nvbm5lY3RlZENhbGxiYWNrJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogaGFzQ29ubmVjdGVkICovKSkge1xuICAgICAgLy8gZmlyc3QgdGltZSB0aGlzIGNvbXBvbmVudCBoYXMgY29ubmVjdGVkXG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gMSAvKiBoYXNDb25uZWN0ZWQgKi87XG4gICAgICB7XG4gICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudCAoaWYgdGhlcmUgaXMgb25lKSBhbmQgcmVnaXN0ZXJcbiAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgIHdoaWxlIChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkge1xuICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBhbmNlc3RvcnMgbG9va2luZyBmb3IgdGhlIGZpcnN0XG4gICAgICAgICAgLy8gY29tcG9uZW50IHRoYXQgaGFzbid0IGZpbmlzaGVkIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHlldFxuICAgICAgICAgIGlmIChhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICAgICAgICAgIC8vIHdlIGZvdW5kIHRoaXMgY29tcG9uZW50cyBmaXJzdCBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQncyBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBMYXp5IHByb3BlcnRpZXNcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICBpZiAoY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogUHJvcCAqLyAmJiBlbG0uaGFzT3duUHJvcGVydHkobWVtYmVyTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZW5kQ29ubmVjdGVkKCk7XG4gIH1cbn07XG5jb25zdCBkaXNjb25uZWN0ZWRDYWxsYmFjayA9IGVsbSA9PiB7XG4gIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgIGdldEhvc3RSZWYoZWxtKTtcbiAgfVxufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbmRCb290c3RyYXAgPSBjcmVhdGVUaW1lKCk7XG4gIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgY29uc3QgZXhjbHVkZSA9IG9wdGlvbnMuZXhjbHVkZSB8fCBbXTtcbiAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSB3aW4uY3VzdG9tRWxlbWVudHM7XG4gIGNvbnN0IGhlYWQgPSBkb2MuaGVhZDtcbiAgY29uc3QgbWV0YUNoYXJzZXQgPSAvKkBfX1BVUkVfXyovaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW2NoYXJzZXRdJyk7XG4gIGNvbnN0IHZpc2liaWxpdHlTdHlsZSA9IC8qQF9fUFVSRV9fKi9kb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgY29uc3QgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcbiAgbGV0IGFwcExvYWRGYWxsYmFjaztcbiAgbGV0IGlzQm9vdHN0cmFwcGluZyA9IHRydWU7XG4gIE9iamVjdC5hc3NpZ24ocGx0LCBvcHRpb25zKTtcbiAgcGx0LiRyZXNvdXJjZXNVcmwkID0gbmV3IFVSTChvcHRpb25zLnJlc291cmNlc1VybCB8fCAnLi8nLCBkb2MuYmFzZVVSSSkuaHJlZjtcbiAgbGF6eUJ1bmRsZXMubWFwKGxhenlCdW5kbGUgPT4ge1xuICAgIGxhenlCdW5kbGVbMV0ubWFwKGNvbXBhY3RNZXRhID0+IHtcbiAgICAgIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgICAgICRmbGFncyQ6IGNvbXBhY3RNZXRhWzBdLFxuICAgICAgICAkdGFnTmFtZSQ6IGNvbXBhY3RNZXRhWzFdLFxuICAgICAgICAkbWVtYmVycyQ6IGNvbXBhY3RNZXRhWzJdLFxuICAgICAgICAkbGlzdGVuZXJzJDogY29tcGFjdE1ldGFbM11cbiAgICAgIH07XG4gICAgICB7XG4gICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgICB9XG4gICAgICBjb25zdCB0YWdOYW1lID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZikge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICByZWdpc3Rlckhvc3Qoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgaXMgdXNpbmcgc2hhZG93IGRvbVxuICAgICAgICAgICAgLy8gYW5kIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAvLyBhZGQgdGhlIHJlYWQtb25seSBwcm9wZXJ0eSBcInNoYWRvd1Jvb3RcIiB0byB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAvLyBhZGRpbmcgdGhlIHNoYWRvdyByb290IGJ1aWxkIGNvbmRpdGlvbmFscyB0byBtaW5pbWl6ZSBydW50aW1lXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAoYXBwTG9hZEZhbGxiYWNrKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYXBwTG9hZEZhbGxiYWNrKTtcbiAgICAgICAgICAgIGFwcExvYWRGYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrIHdpbGwgYmUgcHJvY2Vzc2VkIG9uY2UgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICBwbHQuam1wKCgpID0+IGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRPblJlYWR5KCkge1xuICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGNtcFRhZ3MucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIHByb3h5Q29tcG9uZW50KEhvc3RFbGVtZW50LCBjbXBNZXRhLCAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICB7XG4gICAgdmlzaWJpbGl0eVN0eWxlLmlubmVySFRNTCA9IGNtcFRhZ3MgKyBIWURSQVRFRF9DU1M7XG4gICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgaGVhZC5pbnNlcnRCZWZvcmUodmlzaWJpbGl0eVN0eWxlLCBtZXRhQ2hhcnNldCA/IG1ldGFDaGFyc2V0Lm5leHRTaWJsaW5nIDogaGVhZC5maXJzdENoaWxkKTtcbiAgfVxuICAvLyBQcm9jZXNzIGRlZmVycmVkIGNvbm5lY3RlZENhbGxiYWNrcyBub3cgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgaXNCb290c3RyYXBwaW5nID0gZmFsc2U7XG4gIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5tYXAoaG9zdCA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIHBsdC5qbXAoKCkgPT4gYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpO1xuICAgIH1cbiAgfVxuICAvLyBGYWxsYmFjayBhcHBMb2FkIGV2ZW50XG4gIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IGhvc3RSZWZzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSByZWYgPT4gaG9zdFJlZnMuZ2V0KHJlZik7XG5jb25zdCByZWdpc3Rlckluc3RhbmNlID0gKGxhenlJbnN0YW5jZSwgaG9zdFJlZikgPT4gaG9zdFJlZnMuc2V0KGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UsIGhvc3RSZWYpO1xuY29uc3QgcmVnaXN0ZXJIb3N0ID0gKGVsbSwgY21wTWV0YSkgPT4ge1xuICBjb25zdCBob3N0UmVmID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJGhvc3RFbGVtZW50JDogZWxtLFxuICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAkaW5zdGFuY2VWYWx1ZXMkOiBuZXcgTWFwKClcbiAgfTtcbiAge1xuICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCA9IG5ldyBQcm9taXNlKHIgPT4gaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkID0gcik7XG4gICAgZWxtWydzLXAnXSA9IFtdO1xuICAgIGVsbVsncy1yYyddID0gW107XG4gIH1cbiAgcmV0dXJuIGhvc3RSZWZzLnNldChlbG0sIGhvc3RSZWYpO1xufTtcbmNvbnN0IGlzTWVtYmVySW5FbGVtZW50ID0gKGVsbSwgbWVtYmVyTmFtZSkgPT4gbWVtYmVyTmFtZSBpbiBlbG07XG5jb25zdCBjb25zb2xlRXJyb3IgPSAoZSwgZWwpID0+ICgwLCBjb25zb2xlLmVycm9yKShlLCBlbCk7XG5jb25zdCBjbXBNb2R1bGVzID0gLypAX19QVVJFX18qL25ldyBNYXAoKTtcbmNvbnN0IGxvYWRNb2R1bGUgPSAoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKSA9PiB7XG4gIC8vIGxvYWRNb2R1bGVJbXBvcnRcbiAgY29uc3QgZXhwb3J0TmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgY29uc3QgYnVuZGxlSWQgPSBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkO1xuICBjb25zdCBtb2R1bGUgPSBjbXBNb2R1bGVzLmdldChidW5kbGVJZCk7XG4gIGlmIChtb2R1bGUpIHtcbiAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICB9XG4gIGlmICghaG1yVmVyc2lvbklkIHx8ICFCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgIGNvbnN0IHByb2Nlc3NNb2QgPSBpbXBvcnRlZE1vZHVsZSA9PiB7XG4gICAgICBjbXBNb2R1bGVzLnNldChidW5kbGVJZCwgaW1wb3J0ZWRNb2R1bGUpO1xuICAgICAgcmV0dXJuIGltcG9ydGVkTW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH07XG4gICAgc3dpdGNoIChidW5kbGVJZCkge1xuICAgICAgY2FzZSAnd2ViLXNvY2lhbC1zaGFyZSc6XG4gICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgICAgICcuL3dlYi1zb2NpYWwtc2hhcmUuZW50cnkuanMnKS50aGVuKHByb2Nlc3NNb2QsIGNvbnNvbGVFcnJvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbXBvcnQoLyogQHZpdGUtaWdub3JlICovXG4gIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gIC8qIHdlYnBhY2tFeGNsdWRlOiAvXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQvICovXG4gIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7Jyd9YCkudGhlbihpbXBvcnRlZE1vZHVsZSA9PiB7XG4gICAge1xuICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydGVkTW9kdWxlW2V4cG9ydE5hbWVdO1xuICB9LCBjb25zb2xlRXJyb3IpO1xufTtcbmNvbnN0IHN0eWxlcyA9IG5ldyBNYXAoKTtcbmNvbnN0IHF1ZXVlRG9tUmVhZHMgPSBbXTtcbmNvbnN0IHF1ZXVlRG9tV3JpdGVzID0gW107XG5jb25zdCBxdWV1ZVRhc2sgPSAocXVldWUsIHdyaXRlKSA9PiBjYiA9PiB7XG4gIHF1ZXVlLnB1c2goY2IpO1xuICBpZiAoIXF1ZXVlUGVuZGluZykge1xuICAgIHF1ZXVlUGVuZGluZyA9IHRydWU7XG4gICAgaWYgKHdyaXRlICYmIHBsdC4kZmxhZ3MkICYgNCAvKiBxdWV1ZVN5bmMgKi8pIHtcbiAgICAgIG5leHRUaWNrKGZsdXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgY29uc3VtZSA9IHF1ZXVlID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICBxdWV1ZVtpXShwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xufTtcbmNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAvLyBhbHdheXMgZm9yY2UgYSBidW5jaCBvZiBtZWRpdW0gY2FsbGJhY2tzIHRvIHJ1biwgYnV0IHN0aWxsIGhhdmVcbiAgLy8gYSB0aHJvdHRsZSBvbiBob3cgbWFueSBjYW4gcnVuIGluIGEgY2VydGFpbiB0aW1lXG4gIC8vIERPTSBSRUFEUyEhIVxuICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICAvLyBET00gV1JJVEVTISEhXG4gIHtcbiAgICBjb25zdW1lKHF1ZXVlRG9tV3JpdGVzKTtcbiAgICBpZiAocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBzdGlsbCBtb3JlIHRvIGRvIHlldCwgYnV0IHdlJ3ZlIHJ1biBvdXQgb2YgdGltZVxuICAgICAgLy8gbGV0J3MgbGV0IHRoaXMgdGhpbmcgY29vbCBvZmYgYW5kIHRyeSBhZ2FpbiBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBuZXh0VGljayA9IC8qQF9fUFVSRV9fKi9jYiA9PiBwcm9taXNlUmVzb2x2ZSgpLnRoZW4oY2IpO1xuY29uc3Qgd3JpdGVUYXNrID0gLypAX19QVVJFX18qL3F1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5leHBvcnQgeyBib290c3RyYXBMYXp5IGFzIGIsIGNyZWF0ZUV2ZW50IGFzIGMsIGdldEVsZW1lbnQgYXMgZywgaCwgcHJvbWlzZVJlc29sdmUgYXMgcCwgcmVnaXN0ZXJJbnN0YW5jZSBhcyByIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU0sWUFBWTtBQUNsQixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUksWUFBWTtBQUNoQixJQUFJLGVBQWU7QUFDbkIsSUFBTSxNQUFNLE9BQU8sV0FBVyxjQUFjLFNBQVMsQ0FBQztBQUN0RCxJQUFNLE1BQU0sSUFBSSxZQUFZO0FBQUEsRUFDMUIsTUFBTSxDQUFDO0FBQ1Q7QUFDQSxJQUFNLE1BQU07QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULGdCQUFnQjtBQUFBLEVBQ2hCLEtBQUssQ0FBQUEsT0FBS0EsR0FBRTtBQUFBLEVBQ1osS0FBSyxDQUFBQSxPQUFLLHNCQUFzQkEsRUFBQztBQUFBLEVBQ2pDLEtBQUssQ0FBQyxJQUFJLFdBQVcsVUFBVSxTQUFTLEdBQUcsaUJBQWlCLFdBQVcsVUFBVSxJQUFJO0FBQUEsRUFDckYsS0FBSyxDQUFDLElBQUksV0FBVyxVQUFVLFNBQVMsR0FBRyxvQkFBb0IsV0FBVyxVQUFVLElBQUk7QUFBQSxFQUN4RixJQUFJLENBQUMsV0FBVyxTQUFTLElBQUksWUFBWSxXQUFXLElBQUk7QUFDMUQ7QUFDQSxJQUFNLGlCQUFpQixPQUFLLFFBQVEsUUFBUSxDQUFDO0FBQzdDLElBQU0sbUNBQWlELHVCQUFNO0FBQzNELE1BQUk7QUFDRixRQUFJLGNBQWM7QUFDbEIsV0FBTyxPQUFPLElBQUksY0FBYyxFQUFFLGdCQUFnQjtBQUFBLEVBQ3BELFNBQVMsR0FBRztBQUFBLEVBQUM7QUFDYixTQUFPO0FBQ1QsR0FBRztBQUNILElBQU0sZUFBZTtBQUNyQixJQUFNLGFBQWEsQ0FBQyxRQUFRLFVBQVUsT0FBTztBQUMzQztBQUNFLFdBQU8sTUFBTTtBQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sYUFBYSxDQUFDLEtBQUssZ0JBQWdCO0FBQ3ZDO0FBQ0UsV0FBTyxNQUFNO0FBQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxvQkFBb0Isb0JBQUksUUFBUTtBQUN0QyxJQUFNLGdCQUFnQixDQUFDQyxVQUFTLFNBQVMsWUFBWTtBQUNuRCxNQUFJLFFBQVEsT0FBTyxJQUFJQSxRQUFPO0FBQzlCLE1BQUksb0NBQW9DLFNBQVM7QUFDL0MsWUFBUSxTQUFTLElBQUksY0FBYztBQUNuQyxRQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzdCLGNBQVE7QUFBQSxJQUNWLE9BQU87QUFDTCxZQUFNLFlBQVksT0FBTztBQUFBLElBQzNCO0FBQUEsRUFDRixPQUFPO0FBQ0wsWUFBUTtBQUFBLEVBQ1Y7QUFDQSxTQUFPLElBQUlBLFVBQVMsS0FBSztBQUMzQjtBQUNBLElBQU0sV0FBVyxDQUFDLG9CQUFvQixTQUFTLE1BQU0sWUFBWTtBQUMvRCxNQUFJQSxXQUFVLFdBQVcsT0FBTztBQUNoQyxRQUFNLFFBQVEsT0FBTyxJQUFJQSxRQUFPO0FBR2hDLHVCQUFxQixtQkFBbUIsYUFBYSxLQUE0QixxQkFBcUI7QUFDdEcsTUFBSSxPQUFPO0FBQ1QsUUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3QiwyQkFBcUIsbUJBQW1CLFFBQVE7QUFDaEQsVUFBSSxnQkFBZ0Isa0JBQWtCLElBQUksa0JBQWtCO0FBQzVELFVBQUk7QUFDSixVQUFJLENBQUMsZUFBZTtBQUNsQiwwQkFBa0IsSUFBSSxvQkFBb0IsZ0JBQWdCLG9CQUFJLElBQUksQ0FBQztBQUFBLE1BQ3JFO0FBQ0EsVUFBSSxDQUFDLGNBQWMsSUFBSUEsUUFBTyxHQUFHO0FBQy9CO0FBQ0U7QUFDRSx1QkFBVyxJQUFJLGNBQWMsT0FBTztBQUNwQyxxQkFBUyxZQUFZO0FBQUEsVUFDdkI7QUFDQSw2QkFBbUIsYUFBYSxVQUFVLG1CQUFtQixjQUFjLE1BQU0sQ0FBQztBQUFBLFFBQ3BGO0FBQ0EsWUFBSSxlQUFlO0FBQ2pCLHdCQUFjLElBQUlBLFFBQU87QUFBQSxRQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQW1CLFNBQVMsS0FBSyxHQUFHO0FBQ2pFLHlCQUFtQixxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixvQkFBb0IsS0FBSztBQUFBLElBQzFGO0FBQUEsRUFDRjtBQUNBLFNBQU9BO0FBQ1Q7QUFDQSxJQUFNLGVBQWUsYUFBVztBQUM5QixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNLE1BQU0sUUFBUTtBQUNwQixRQUFNLFFBQVEsUUFBUTtBQUN0QixRQUFNLGtCQUFrQixXQUFXLGdCQUFnQixRQUFRLFNBQVM7QUFDcEUsUUFBTUEsV0FBVSxTQUFTLElBQUksYUFBYSxJQUFJLGFBQWEsSUFBSSxZQUFZLEdBQUcsT0FBTztBQUNyRixNQUFJLFFBQVEsSUFBbUM7QUFRN0MsUUFBSSxNQUFNLElBQUlBO0FBQ2QsUUFBSSxVQUFVLElBQUlBLFdBQVUsSUFBSTtBQUFBLEVBQ2xDO0FBQ0Esa0JBQWdCO0FBQ2xCO0FBQ0EsSUFBTSxhQUFhLENBQUMsS0FBSyxTQUFTLFFBQVEsSUFBSTtBQVE5QyxJQUFNLFlBQVksQ0FBQztBQUNuQixJQUFNLFFBQVEsT0FBSyxLQUFLO0FBQ3hCLElBQU0sZ0JBQWdCLE9BQUs7QUFFekIsTUFBSSxPQUFPO0FBQ1gsU0FBTyxNQUFNLFlBQVksTUFBTTtBQUNqQztBQVlBLElBQU0sSUFBSSxDQUFDLFVBQVUsY0FBYyxhQUFhO0FBQzlDLE1BQUksUUFBUTtBQUNaLE1BQUksU0FBUztBQUNiLE1BQUksYUFBYTtBQUNqQixRQUFNLGdCQUFnQixDQUFDO0FBQ3ZCLFFBQU0sT0FBTyxPQUFLO0FBQ2hCLGFBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsY0FBUSxFQUFFLENBQUM7QUFDWCxVQUFJLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDeEIsYUFBSyxLQUFLO0FBQUEsTUFDWixXQUFXLFNBQVMsUUFBUSxPQUFPLFVBQVUsV0FBVztBQUN0RCxZQUFJLFNBQVMsT0FBTyxhQUFhLGNBQWMsQ0FBQyxjQUFjLEtBQUssR0FBRztBQUNwRSxrQkFBUSxPQUFPLEtBQUs7QUFBQSxRQUN0QjtBQUNBLFlBQUksVUFBVSxZQUFZO0FBRXhCLHdCQUFjLGNBQWMsU0FBUyxDQUFDLEVBQUUsVUFBVTtBQUFBLFFBQ3BELE9BQU87QUFFTCx3QkFBYyxLQUFLLFNBQVMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLO0FBQUEsUUFDM0Q7QUFDQSxxQkFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLE9BQUssUUFBUTtBQUNiLE1BQUksV0FBVztBQUNiO0FBQ0UsWUFBTSxZQUFZLFVBQVUsYUFBYSxVQUFVO0FBQ25ELFVBQUksV0FBVztBQUNiLGtCQUFVLFFBQVEsT0FBTyxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssU0FBUyxFQUFFLE9BQU8sT0FBSyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRztBQUFBLE1BQ3pIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFFBQVEsU0FBUyxVQUFVLElBQUk7QUFDckMsUUFBTSxVQUFVO0FBQ2hCLE1BQUksY0FBYyxTQUFTLEdBQUc7QUFDNUIsVUFBTSxhQUFhO0FBQUEsRUFDckI7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLFdBQVcsQ0FBQyxLQUFLLFNBQVM7QUFDOUIsUUFBTSxRQUFRO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsRUFDZDtBQUNBO0FBQ0UsVUFBTSxVQUFVO0FBQUEsRUFDbEI7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLE9BQU8sQ0FBQztBQUNkLElBQU0sU0FBUyxVQUFRLFFBQVEsS0FBSyxVQUFVO0FBUzlDLElBQU0sY0FBYyxDQUFDLEtBQUssWUFBWSxVQUFVLFVBQVUsT0FBTyxVQUFVO0FBQ3pFLE1BQUksYUFBYSxVQUFVO0FBQ3pCLFFBQUksU0FBUyxrQkFBa0IsS0FBSyxVQUFVO0FBQzlDLFFBQUksS0FBSyxXQUFXLFlBQVk7QUFDaEMsUUFBSSxlQUFlLFNBQVM7QUFDMUIsWUFBTSxZQUFZLElBQUk7QUFDdEIsWUFBTSxhQUFhLGVBQWUsUUFBUTtBQUMxQyxZQUFNLGFBQWEsZUFBZSxRQUFRO0FBQzFDLGdCQUFVLE9BQU8sR0FBRyxXQUFXLE9BQU8sT0FBSyxLQUFLLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLGdCQUFVLElBQUksR0FBRyxXQUFXLE9BQU8sT0FBSyxLQUFLLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDdkUsV0FBVyxlQUFlLE9BQU87QUFFL0IsVUFBSSxVQUFVO0FBQ1osaUJBQVMsR0FBRztBQUFBLE1BQ2Q7QUFBQSxJQUNGLFdBQVcsQ0FBQyxVQUFVLFdBQVcsQ0FBQyxNQUFNLE9BQU8sV0FBVyxDQUFDLE1BQU0sS0FBSztBQUtwRSxVQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUs7QUFRekIscUJBQWEsV0FBVyxNQUFNLENBQUM7QUFBQSxNQUNqQyxXQUFXLGtCQUFrQixLQUFLLEVBQUUsR0FBRztBQUtyQyxxQkFBYSxHQUFHLE1BQU0sQ0FBQztBQUFBLE1BQ3pCLE9BQU87QUFNTCxxQkFBYSxHQUFHLENBQUMsSUFBSSxXQUFXLE1BQU0sQ0FBQztBQUFBLE1BQ3pDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osWUFBSSxJQUFJLEtBQUssWUFBWSxVQUFVLEtBQUs7QUFBQSxNQUMxQztBQUNBLFVBQUksVUFBVTtBQUNaLFlBQUksSUFBSSxLQUFLLFlBQVksVUFBVSxLQUFLO0FBQUEsTUFDMUM7QUFBQSxJQUNGLE9BQU87QUFFTCxZQUFNLFlBQVksY0FBYyxRQUFRO0FBQ3hDLFdBQUssVUFBVSxhQUFhLGFBQWEsU0FBUyxDQUFDLE9BQU87QUFDeEQsWUFBSTtBQUNGLGNBQUksQ0FBQyxJQUFJLFFBQVEsU0FBUyxHQUFHLEdBQUc7QUFDOUIsa0JBQU0sSUFBSSxZQUFZLE9BQU8sS0FBSztBQUVsQyxnQkFBSSxlQUFlLFFBQVE7QUFDekIsdUJBQVM7QUFBQSxZQUNYLFdBQVcsWUFBWSxRQUFRLElBQUksVUFBVSxLQUFLLEdBQUc7QUFDbkQsa0JBQUksVUFBVSxJQUFJO0FBQUEsWUFDcEI7QUFBQSxVQUNGLE9BQU87QUFDTCxnQkFBSSxVQUFVLElBQUk7QUFBQSxVQUNwQjtBQUFBLFFBQ0YsU0FBUyxHQUFHO0FBQUEsUUFBQztBQUFBLE1BQ2Y7QUFDQSxVQUFJLFlBQVksUUFBUSxhQUFhLE9BQU87QUFDMUMsWUFBSSxhQUFhLFNBQVMsSUFBSSxhQUFhLFVBQVUsTUFBTSxJQUFJO0FBQzdEO0FBQ0UsZ0JBQUksZ0JBQWdCLFVBQVU7QUFBQSxVQUNoQztBQUFBLFFBQ0Y7QUFBQSxNQUNGLFlBQVksQ0FBQyxVQUFVLFFBQVEsS0FBa0IsVUFBVSxDQUFDLFdBQVc7QUFDckUsbUJBQVcsYUFBYSxPQUFPLEtBQUs7QUFDcEM7QUFDRSxjQUFJLGFBQWEsWUFBWSxRQUFRO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sc0JBQXNCO0FBQzVCLElBQU0saUJBQWlCLFdBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLE1BQU0sbUJBQW1CO0FBQzdFLElBQU0sZ0JBQWdCLENBQUMsVUFBVSxVQUFVQyxZQUFXLGVBQWU7QUFJbkUsUUFBTSxNQUFNLFNBQVMsTUFBTSxhQUFhLE1BQTZCLFNBQVMsTUFBTSxPQUFPLFNBQVMsTUFBTSxPQUFPLFNBQVM7QUFDMUgsUUFBTSxnQkFBZ0IsWUFBWSxTQUFTLFdBQVc7QUFDdEQsUUFBTSxnQkFBZ0IsU0FBUyxXQUFXO0FBQzFDO0FBRUUsU0FBSyxjQUFjLGVBQWU7QUFDaEMsVUFBSSxFQUFFLGNBQWMsZ0JBQWdCO0FBQ2xDLG9CQUFZLEtBQUssWUFBWSxjQUFjLFVBQVUsR0FBRyxRQUFXQSxZQUFXLFNBQVMsT0FBTztBQUFBLE1BQ2hHO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxPQUFLLGNBQWMsZUFBZTtBQUNoQyxnQkFBWSxLQUFLLFlBQVksY0FBYyxVQUFVLEdBQUcsY0FBYyxVQUFVLEdBQUdBLFlBQVcsU0FBUyxPQUFPO0FBQUEsRUFDaEg7QUFDRjtBQUNBLElBQU0sWUFBWSxDQUFDLGdCQUFnQixnQkFBZ0IsWUFBWSxjQUFjO0FBRTNFLFFBQU1DLFlBQVcsZUFBZSxXQUFXLFVBQVU7QUFDckQsTUFBSSxJQUFJO0FBQ1IsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJQSxVQUFTLFdBQVcsTUFBTTtBQUU1QixVQUFNQSxVQUFTLFFBQVEsSUFBSSxlQUFlQSxVQUFTLE1BQU07QUFBQSxFQUMzRCxPQUFPO0FBRUwsVUFBTUEsVUFBUyxRQUFRLElBQUksY0FBY0EsVUFBUyxLQUFLO0FBRXZEO0FBQ0Usb0JBQWMsTUFBTUEsV0FBVSxTQUFTO0FBQUEsSUFDekM7QUFDQSxRQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLFNBQVM7QUFHN0MsVUFBSSxVQUFVLElBQUksSUFBSSxNQUFNLElBQUksT0FBTztBQUFBLElBQ3pDO0FBQ0EsUUFBSUEsVUFBUyxZQUFZO0FBQ3ZCLFdBQUssSUFBSSxHQUFHLElBQUlBLFVBQVMsV0FBVyxRQUFRLEVBQUUsR0FBRztBQUUvQyxvQkFBWSxVQUFVLGdCQUFnQkEsV0FBVSxDQUFDO0FBRWpELFlBQUksV0FBVztBQUViLGNBQUksWUFBWSxTQUFTO0FBQUEsUUFDM0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLFlBQVksQ0FBQyxXQUFXLFFBQVEsYUFBYSxRQUFRLFVBQVUsV0FBVztBQUM5RSxNQUFJLGVBQWU7QUFDbkIsTUFBSTtBQUNKLE1BQUksYUFBYSxjQUFjLGFBQWEsWUFBWSxhQUFhO0FBQ25FLG1CQUFlLGFBQWE7QUFBQSxFQUM5QjtBQUNBLFNBQU8sWUFBWSxRQUFRLEVBQUUsVUFBVTtBQUNyQyxRQUFJLE9BQU8sUUFBUSxHQUFHO0FBQ3BCLGtCQUFZLFVBQVUsTUFBTSxhQUFhLFFBQVE7QUFDakQsVUFBSSxXQUFXO0FBQ2IsZUFBTyxRQUFRLEVBQUUsUUFBUTtBQUN6QixxQkFBYSxhQUFhLFdBQVcsTUFBTTtBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sZUFBZSxDQUFDLFFBQVEsVUFBVSxRQUFRLE9BQU8sUUFBUTtBQUM3RCxTQUFPLFlBQVksUUFBUSxFQUFFLFVBQVU7QUFDckMsUUFBSSxRQUFRLE9BQU8sUUFBUSxHQUFHO0FBQzVCLFlBQU0sTUFBTTtBQUNaLG1CQUFhLEtBQUs7QUFFbEIsVUFBSSxPQUFPO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0saUJBQWlCLENBQUMsV0FBVyxPQUFPQSxXQUFVLFVBQVU7QUFDNUQsTUFBSSxjQUFjO0FBQ2xCLE1BQUksY0FBYztBQUNsQixNQUFJLFlBQVksTUFBTSxTQUFTO0FBQy9CLE1BQUksZ0JBQWdCLE1BQU0sQ0FBQztBQUMzQixNQUFJLGNBQWMsTUFBTSxTQUFTO0FBQ2pDLE1BQUksWUFBWSxNQUFNLFNBQVM7QUFDL0IsTUFBSSxnQkFBZ0IsTUFBTSxDQUFDO0FBQzNCLE1BQUksY0FBYyxNQUFNLFNBQVM7QUFDakMsTUFBSTtBQUNKLFNBQU8sZUFBZSxhQUFhLGVBQWUsV0FBVztBQUMzRCxRQUFJLGlCQUFpQixNQUFNO0FBRXpCLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUFBLElBQ3JDLFdBQVcsZUFBZSxNQUFNO0FBQzlCLG9CQUFjLE1BQU0sRUFBRSxTQUFTO0FBQUEsSUFDakMsV0FBVyxpQkFBaUIsTUFBTTtBQUNoQyxzQkFBZ0IsTUFBTSxFQUFFLFdBQVc7QUFBQSxJQUNyQyxXQUFXLGVBQWUsTUFBTTtBQUM5QixvQkFBYyxNQUFNLEVBQUUsU0FBUztBQUFBLElBQ2pDLFdBQVcsWUFBWSxlQUFlLGFBQWEsR0FBRztBQUNwRCxZQUFNLGVBQWUsYUFBYTtBQUNsQyxzQkFBZ0IsTUFBTSxFQUFFLFdBQVc7QUFDbkMsc0JBQWdCLE1BQU0sRUFBRSxXQUFXO0FBQUEsSUFDckMsV0FBVyxZQUFZLGFBQWEsV0FBVyxHQUFHO0FBQ2hELFlBQU0sYUFBYSxXQUFXO0FBQzlCLG9CQUFjLE1BQU0sRUFBRSxTQUFTO0FBQy9CLG9CQUFjLE1BQU0sRUFBRSxTQUFTO0FBQUEsSUFDakMsV0FBVyxZQUFZLGVBQWUsV0FBVyxHQUFHO0FBQ2xELFlBQU0sZUFBZSxXQUFXO0FBQ2hDLGdCQUFVLGFBQWEsY0FBYyxPQUFPLFlBQVksTUFBTSxXQUFXO0FBQ3pFLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUNuQyxvQkFBYyxNQUFNLEVBQUUsU0FBUztBQUFBLElBQ2pDLFdBQVcsWUFBWSxhQUFhLGFBQWEsR0FBRztBQUNsRCxZQUFNLGFBQWEsYUFBYTtBQUNoQyxnQkFBVSxhQUFhLFlBQVksT0FBTyxjQUFjLEtBQUs7QUFDN0Qsb0JBQWMsTUFBTSxFQUFFLFNBQVM7QUFDL0Isc0JBQWdCLE1BQU0sRUFBRSxXQUFXO0FBQUEsSUFDckMsT0FBTztBQUNMO0FBRUUsZUFBTyxVQUFVLFNBQVMsTUFBTSxXQUFXLEdBQUdBLFdBQVUsV0FBVztBQUNuRSx3QkFBZ0IsTUFBTSxFQUFFLFdBQVc7QUFBQSxNQUNyQztBQUNBLFVBQUksTUFBTTtBQUNSO0FBQ0Usd0JBQWMsTUFBTSxXQUFXLGFBQWEsTUFBTSxjQUFjLEtBQUs7QUFBQSxRQUN2RTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLE1BQUksY0FBYyxXQUFXO0FBQzNCLGNBQVUsV0FBVyxNQUFNLFlBQVksQ0FBQyxLQUFLLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQyxFQUFFLE9BQU9BLFdBQVUsT0FBTyxhQUFhLFNBQVM7QUFBQSxFQUNoSSxXQUFXLGNBQWMsV0FBVztBQUNsQyxpQkFBYSxPQUFPLGFBQWEsU0FBUztBQUFBLEVBQzVDO0FBQ0Y7QUFDQSxJQUFNLGNBQWMsQ0FBQyxRQUFRLFdBQVc7QUFHdEMsTUFBSSxPQUFPLFVBQVUsT0FBTyxPQUFPO0FBQ2pDLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxRQUFRLENBQUMsVUFBVUEsY0FBYTtBQUNwQyxRQUFNLE1BQU1BLFVBQVMsUUFBUSxTQUFTO0FBQ3RDLFFBQU0sY0FBYyxTQUFTO0FBQzdCLFFBQU0sY0FBY0EsVUFBUztBQUM3QixRQUFNLE1BQU1BLFVBQVM7QUFDckIsUUFBTSxPQUFPQSxVQUFTO0FBQ3RCLE1BQUksU0FBUyxNQUFNO0FBRWpCO0FBQ0UsVUFBSSxRQUFRLE9BQVE7QUFBQSxXQUFNO0FBSXhCLHNCQUFjLFVBQVVBLFdBQVUsU0FBUztBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUNBLFFBQUksZ0JBQWdCLFFBQVEsZ0JBQWdCLE1BQU07QUFFaEQscUJBQWUsS0FBSyxhQUFhQSxXQUFVLFdBQVc7QUFBQSxJQUN4RCxXQUFXLGdCQUFnQixNQUFNO0FBRS9CLFVBQUksU0FBUyxXQUFXLE1BQU07QUFFNUIsWUFBSSxjQUFjO0FBQUEsTUFDcEI7QUFFQSxnQkFBVSxLQUFLLE1BQU1BLFdBQVUsYUFBYSxHQUFHLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDdkUsV0FBVyxnQkFBZ0IsTUFBTTtBQUUvQixtQkFBYSxhQUFhLEdBQUcsWUFBWSxTQUFTLENBQUM7QUFBQSxJQUNyRDtBQUFBLEVBQ0YsV0FBVyxTQUFTLFdBQVcsTUFBTTtBQUduQyxRQUFJLE9BQU87QUFBQSxFQUNiO0FBQ0Y7QUFDQSxJQUFNLGVBQWUsV0FBUztBQUM1QjtBQUNFLFVBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsSUFBSSxJQUFJO0FBQzVELFVBQU0sY0FBYyxNQUFNLFdBQVcsSUFBSSxZQUFZO0FBQUEsRUFDdkQ7QUFDRjtBQUNBLElBQU0sYUFBYSxDQUFDLFNBQVMsb0JBQW9CO0FBQy9DLFFBQU0sVUFBVSxRQUFRO0FBQ3hCLFFBQU0sV0FBVyxRQUFRLFdBQVcsU0FBUyxNQUFNLElBQUk7QUFDdkQsUUFBTSxZQUFZLE9BQU8sZUFBZSxJQUFJLGtCQUFrQixFQUFFLE1BQU0sTUFBTSxlQUFlO0FBQzNGLGdCQUFjLFFBQVE7QUFDdEIsWUFBVSxRQUFRO0FBQ2xCLFlBQVUsV0FBVztBQUNyQixVQUFRLFVBQVU7QUFDbEIsWUFBVSxRQUFRLFNBQVMsUUFBUSxRQUFRLGNBQWM7QUFDekQ7QUFDRSxjQUFVLFFBQVEsTUFBTTtBQUFBLEVBQzFCO0FBRUEsUUFBTSxVQUFVLFNBQVM7QUFDM0I7QUFDQSxJQUFNLGFBQWEsU0FBTyxXQUFXLEdBQUcsRUFBRTtBQUMxQyxJQUFNLGNBQWMsQ0FBQyxLQUFLLE1BQU0sVUFBVTtBQUN4QyxRQUFNLE1BQU0sV0FBVyxHQUFHO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU0sWUFBVTtBQUNkLGFBQU8sVUFBVSxLQUFLLE1BQU07QUFBQSxRQUMxQixTQUFTLENBQUMsRUFBRSxRQUFRO0FBQUEsUUFDcEIsVUFBVSxDQUFDLEVBQUUsUUFBUTtBQUFBLFFBQ3JCLFlBQVksQ0FBQyxFQUFFLFFBQVE7QUFBQSxRQUN2QjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0Y7QUFRQSxJQUFNLFlBQVksQ0FBQyxLQUFLLE1BQU0sU0FBUztBQUNyQyxRQUFNLEtBQUssSUFBSSxHQUFHLE1BQU0sSUFBSTtBQUM1QixNQUFJLGNBQWMsRUFBRTtBQUNwQixTQUFPO0FBQ1Q7QUFDQSxJQUFNLG1CQUFtQixDQUFDLFNBQVMsc0JBQXNCO0FBQ3ZELE1BQUkscUJBQXFCLENBQUMsUUFBUSxxQkFBcUIsa0JBQWtCLEtBQUssR0FBRztBQUMvRSxzQkFBa0IsS0FBSyxFQUFFLEtBQUssSUFBSSxRQUFRLE9BQUssUUFBUSxvQkFBb0IsQ0FBQyxDQUFDO0FBQUEsRUFDL0U7QUFDRjtBQUNBLElBQU0saUJBQWlCLENBQUMsU0FBUyxrQkFBa0I7QUFDakQ7QUFDRSxZQUFRLFdBQVc7QUFBQSxFQUNyQjtBQUNBLE1BQUksUUFBUSxVQUFVLEdBQThCO0FBQ2xELFlBQVEsV0FBVztBQUNuQjtBQUFBLEVBQ0Y7QUFDQSxtQkFBaUIsU0FBUyxRQUFRLG1CQUFtQjtBQUlyRCxRQUFNLFdBQVcsTUFBTSxjQUFjLFNBQVMsYUFBYTtBQUMzRCxTQUFPLFVBQVUsUUFBUTtBQUMzQjtBQUNBLElBQU0sZ0JBQWdCLENBQUMsU0FBUyxrQkFBa0I7QUFDaEQsUUFBTSxjQUFjLFdBQVcsa0JBQWtCLFFBQVEsVUFBVSxTQUFTO0FBQzVFLFFBQU0sV0FBVyxRQUFRO0FBQ3pCLE1BQUk7QUFDSixjQUFZO0FBQ1osU0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsU0FBUyxVQUFVLGFBQWEsQ0FBQztBQUM5RTtBQUNBLElBQU0sa0JBQWtCLENBQU8sU0FBUyxVQUFVLGtCQUFrQjtBQUVsRSxRQUFNLE1BQU0sUUFBUTtBQUNwQixRQUFNLFlBQVksV0FBVyxVQUFVLFFBQVEsVUFBVSxTQUFTO0FBQ2xFLFFBQU0sS0FBSyxJQUFJLE1BQU07QUFDckIsTUFBSSxlQUFlO0FBRWpCLGlCQUFhLE9BQU87QUFBQSxFQUN0QjtBQUNBLFFBQU0sWUFBWSxXQUFXLFVBQVUsUUFBUSxVQUFVLFNBQVM7QUFDbEU7QUFDRSxlQUFXLFNBQVMsUUFBUTtBQUFBLEVBQzlCO0FBQ0EsTUFBSSxJQUFJO0FBSU4sT0FBRyxJQUFJLFFBQU0sR0FBRyxDQUFDO0FBQ2pCLFFBQUksTUFBTSxJQUFJO0FBQUEsRUFDaEI7QUFDQSxZQUFVO0FBQ1YsWUFBVTtBQUNWO0FBQ0UsVUFBTSxtQkFBbUIsSUFBSSxLQUFLO0FBQ2xDLFVBQU0sYUFBYSxNQUFNLG9CQUFvQixPQUFPO0FBQ3BELFFBQUksaUJBQWlCLFdBQVcsR0FBRztBQUNqQyxpQkFBVztBQUFBLElBQ2IsT0FBTztBQUNMLGNBQVEsSUFBSSxnQkFBZ0IsRUFBRSxLQUFLLFVBQVU7QUFDN0MsY0FBUSxXQUFXO0FBQ25CLHVCQUFpQixTQUFTO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFNLGFBQWEsQ0FBQyxTQUFTLFVBQVUsUUFBUTtBQUM3QyxNQUFJO0FBQ0YsZUFBVyxTQUFTLE9BQU87QUFDM0I7QUFDRSxjQUFRLFdBQVcsQ0FBQztBQUFBLElBQ3RCO0FBQ0E7QUFDRSxjQUFRLFdBQVc7QUFBQSxJQUNyQjtBQUNBO0FBQ0U7QUFJRTtBQUNFLHFCQUFXLFNBQVMsUUFBUTtBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLFNBQVMsR0FBRztBQUNWLGlCQUFhLEdBQUcsUUFBUSxhQUFhO0FBQUEsRUFDdkM7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLHNCQUFzQixhQUFXO0FBQ3JDLFFBQU0sVUFBVSxRQUFRLFVBQVU7QUFDbEMsUUFBTSxNQUFNLFFBQVE7QUFDcEIsUUFBTSxnQkFBZ0IsV0FBVyxjQUFjLE9BQU87QUFDdEQsUUFBTSxvQkFBb0IsUUFBUTtBQUNsQyxNQUFJLEVBQUUsUUFBUSxVQUFVLEtBQThCO0FBQ3BELFlBQVEsV0FBVztBQUNuQjtBQUVFLHNCQUFnQixHQUFHO0FBQUEsSUFDckI7QUFDQSxrQkFBYztBQUNkO0FBQ0UsY0FBUSxpQkFBaUIsR0FBRztBQUM1QixVQUFJLENBQUMsbUJBQW1CO0FBQ3RCLG1CQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxrQkFBYztBQUFBLEVBQ2hCO0FBR0E7QUFDRSxRQUFJLFFBQVEsbUJBQW1CO0FBQzdCLGNBQVEsa0JBQWtCO0FBQzFCLGNBQVEsb0JBQW9CO0FBQUEsSUFDOUI7QUFDQSxRQUFJLFFBQVEsVUFBVSxLQUF5QjtBQUM3QyxlQUFTLE1BQU0sZUFBZSxTQUFTLEtBQUssQ0FBQztBQUFBLElBQy9DO0FBQ0EsWUFBUSxXQUFXLEVBQUUsSUFBK0I7QUFBQSxFQUN0RDtBQUlGO0FBQ0EsSUFBTSxhQUFhLFNBQU87QUFHeEI7QUFDRSxvQkFBZ0IsSUFBSSxlQUFlO0FBQUEsRUFDckM7QUFDQSxXQUFTLE1BQU0sVUFBVSxLQUFLLFdBQVc7QUFBQSxJQUN2QyxRQUFRO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxJQUFNLE9BQU8sQ0FBQyxTQUFTLFdBQVc7QUFDaEMsU0FBTyxXQUFXLFFBQVEsT0FBTyxRQUFRLEtBQUssTUFBTSxJQUFJLE9BQU87QUFDakU7QUFDQSxJQUFNLGtCQUFrQixTQUFPLElBQUksVUFBVSxJQUFJLFVBQVU7QUF3QjNELElBQU0scUJBQXFCLENBQUMsV0FBVyxhQUFhO0FBRWxELE1BQUksYUFBYSxRQUFRLENBQUMsY0FBYyxTQUFTLEdBQUc7QUFDbEQsUUFBSSxXQUFXLEdBQWlCO0FBRzlCLGFBQU8sY0FBYyxVQUFVLFFBQVEsY0FBYyxNQUFNLENBQUMsQ0FBQztBQUFBLElBQy9EO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFHQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLFdBQVcsQ0FBQyxLQUFLLGFBQWEsV0FBVyxHQUFHLEVBQUUsaUJBQWlCLElBQUksUUFBUTtBQUNqRixJQUFNLFdBQVcsQ0FBQyxLQUFLLFVBQVUsUUFBUSxZQUFZO0FBRW5ELFFBQU0sVUFBVSxXQUFXLEdBQUc7QUFDOUIsUUFBTSxTQUFTLFFBQVEsaUJBQWlCLElBQUksUUFBUTtBQUNwRCxRQUFNLFFBQVEsUUFBUTtBQUN0QixRQUFNLFdBQVcsUUFBUTtBQUN6QixXQUFTLG1CQUFtQixRQUFRLFFBQVEsVUFBVSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRWxFLFFBQU0sYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLE9BQU8sTUFBTSxNQUFNO0FBQzlELFFBQU0saUJBQWlCLFdBQVcsVUFBVSxDQUFDO0FBQzdDLE9BQUssRUFBRSxRQUFRLE1BQW1DLFdBQVcsV0FBYyxnQkFBZ0I7QUFHekYsWUFBUSxpQkFBaUIsSUFBSSxVQUFVLE1BQU07QUFDN0MsUUFBSSxVQUFVO0FBQ1osV0FBSyxTQUFTLElBQXNCLFNBQWlDLEdBQXFCO0FBS3hGLHVCQUFlLFNBQVMsS0FBSztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0saUJBQWlCLENBQUMsTUFBTSxTQUFTLFVBQVU7QUFDL0MsTUFBSSxRQUFRLFdBQVc7QUFFckIsVUFBTSxVQUFVLE9BQU8sUUFBUSxRQUFRLFNBQVM7QUFDaEQsVUFBTSxZQUFZLEtBQUs7QUFDdkIsWUFBUSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU07QUFDM0MsVUFBSSxjQUFjLE1BQWlCLFFBQVEsS0FBc0IsY0FBYyxJQUFnQjtBQUU3RixlQUFPLGVBQWUsV0FBVyxZQUFZO0FBQUEsVUFDM0MsTUFBTTtBQUVKLG1CQUFPLFNBQVMsTUFBTSxVQUFVO0FBQUEsVUFDbEM7QUFBQSxVQUNBLElBQUksVUFBVTtBQUVaLHFCQUFTLE1BQU0sWUFBWSxVQUFVLE9BQU87QUFBQSxVQUM5QztBQUFBLFVBQ0EsY0FBYztBQUFBLFVBQ2QsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFDRCxRQUFJLFFBQVEsR0FBOEI7QUFDeEMsWUFBTSxxQkFBcUIsb0JBQUksSUFBSTtBQUNuQyxnQkFBVSwyQkFBMkIsU0FBVSxVQUFVLFdBQVcsVUFBVTtBQUM1RSxZQUFJLElBQUksTUFBTTtBQUNaLGdCQUFNLFdBQVcsbUJBQW1CLElBQUksUUFBUTtBQWtDaEQsY0FBSSxLQUFLLGVBQWUsUUFBUSxHQUFHO0FBQ2pDLHVCQUFXLEtBQUssUUFBUTtBQUN4QixtQkFBTyxLQUFLLFFBQVE7QUFBQSxVQUN0QixXQUFXLFVBQVUsZUFBZSxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTSxZQUFZLEtBQUssUUFBUSxLQUFLLFVBQVU7QUFJakg7QUFBQSxVQUNGO0FBQ0EsZUFBSyxRQUFRLElBQUksYUFBYSxRQUFRLE9BQU8sS0FBSyxRQUFRLE1BQU0sWUFBWSxRQUFRO0FBQUEsUUFDdEYsQ0FBQztBQUFBLE1BQ0g7QUFHQSxXQUFLLHFCQUFxQixRQUFRO0FBQUEsUUFBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUk7QUFBQTtBQUFBLE1BQXFCLEVBQ2hGLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO0FBQ3RCLGNBQU0sV0FBVyxFQUFFLENBQUMsS0FBSztBQUN6QiwyQkFBbUIsSUFBSSxVQUFVLFFBQVE7QUFDekMsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxzQkFBc0IsQ0FBTyxLQUFLLFNBQVMsU0FBUyxjQUFjLFNBQVM7QUFFL0UsT0FBSyxRQUFRLFVBQVUsUUFBc0MsR0FBRztBQUM5RDtBQUVFLGNBQVEsV0FBVztBQUluQixhQUFPLFdBQVcsT0FBTztBQUN6QixVQUFJLEtBQUssTUFBTTtBQUViLGNBQU0sVUFBVSxXQUFXO0FBQzNCLGVBQU8sTUFBTTtBQUNiLGdCQUFRO0FBQUEsTUFDVjtBQUNBLFVBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxVQUFlO0FBQUEsVUFBTTtBQUFBLFVBQVM7QUFBQTtBQUFBLFFBQWtCO0FBQ2hELGFBQUssWUFBWTtBQUFBLE1BQ25CO0FBQ0EsWUFBTSxpQkFBaUIsV0FBVyxrQkFBa0IsUUFBUSxTQUFTO0FBSXJFO0FBQ0UsZ0JBQVEsV0FBVztBQUFBLE1BQ3JCO0FBS0EsVUFBSTtBQUNGLFlBQUksS0FBSyxPQUFPO0FBQUEsTUFDbEIsU0FBUyxHQUFHO0FBQ1YscUJBQWEsQ0FBQztBQUFBLE1BQ2hCO0FBQ0E7QUFDRSxnQkFBUSxXQUFXLENBQUM7QUFBQSxNQUN0QjtBQUNBLHFCQUFlO0FBQUEsSUFDakI7QUFDQSxRQUFJLEtBQUssT0FBTztBQUVkLFVBQUksUUFBUSxLQUFLO0FBQ2pCLFlBQU1GLFdBQVUsV0FBVyxPQUFPO0FBQ2xDLFVBQUksQ0FBQyxPQUFPLElBQUlBLFFBQU8sR0FBRztBQUN4QixjQUFNLG9CQUFvQixXQUFXLGtCQUFrQixRQUFRLFNBQVM7QUFDeEUsc0JBQWNBLFVBQVMsT0FBTyxDQUFDLEVBQUUsUUFBUSxVQUFVLEVBQStCO0FBQ2xGLDBCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLG9CQUFvQixRQUFRO0FBQ2xDLFFBQU0sV0FBVyxNQUFNLGVBQWUsU0FBUyxJQUFJO0FBQ25ELE1BQUkscUJBQXFCLGtCQUFrQixNQUFNLEdBQUc7QUFPbEQsc0JBQWtCLE1BQU0sRUFBRSxLQUFLLFFBQVE7QUFBQSxFQUN6QyxPQUFPO0FBQ0wsYUFBUztBQUFBLEVBQ1g7QUFDRjtBQUNBLElBQU0sb0JBQW9CLFNBQU87QUFDL0IsT0FBSyxJQUFJLFVBQVUsT0FBK0IsR0FBRztBQUNuRCxVQUFNLFVBQVUsV0FBVyxHQUFHO0FBQzlCLFVBQU0sVUFBVSxRQUFRO0FBQ3hCLFVBQU0sZUFBZSxXQUFXLHFCQUFxQixRQUFRLFNBQVM7QUFDdEUsUUFBSSxFQUFFLFFBQVEsVUFBVSxJQUF1QjtBQUU3QyxjQUFRLFdBQVc7QUFDbkI7QUFHRSxZQUFJLG9CQUFvQjtBQUN4QixlQUFPLG9CQUFvQixrQkFBa0IsY0FBYyxrQkFBa0IsTUFBTTtBQUdqRixjQUFJLGtCQUFrQixLQUFLLEdBQUc7QUFHNUIsNkJBQWlCLFNBQVMsUUFBUSxzQkFBc0IsaUJBQWlCO0FBQ3pFO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBR0EsVUFBSSxRQUFRLFdBQVc7QUFDckIsZUFBTyxRQUFRLFFBQVEsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTTtBQUNyRSxjQUFJLGNBQWMsTUFBaUIsSUFBSSxlQUFlLFVBQVUsR0FBRztBQUNqRSxrQkFBTSxRQUFRLElBQUksVUFBVTtBQUM1QixtQkFBTyxJQUFJLFVBQVU7QUFDckIsZ0JBQUksVUFBVSxJQUFJO0FBQUEsVUFDcEI7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQ0E7QUFDRSw0QkFBb0IsS0FBSyxTQUFTLE9BQU87QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFDQSxpQkFBYTtBQUFBLEVBQ2Y7QUFDRjtBQUNBLElBQU0sdUJBQXVCLFNBQU87QUFDbEMsT0FBSyxJQUFJLFVBQVUsT0FBK0IsR0FBRztBQUNuRCxlQUFXLEdBQUc7QUFBQSxFQUNoQjtBQUNGO0FBQ0EsSUFBTSxnQkFBZ0IsQ0FBQyxhQUFhLFVBQVUsQ0FBQyxNQUFNO0FBQ25ELFFBQU0sZUFBZSxXQUFXO0FBQ2hDLFFBQU0sVUFBVSxDQUFDO0FBQ2pCLFFBQU0sVUFBVSxRQUFRLFdBQVcsQ0FBQztBQUNwQyxRQUFNLGlCQUFpQixJQUFJO0FBQzNCLFFBQU0sT0FBTyxJQUFJO0FBQ2pCLFFBQU0sY0FBMkIscUJBQUssY0FBYyxlQUFlO0FBQ25FLFFBQU0sa0JBQStCLG9CQUFJLGNBQWMsT0FBTztBQUM5RCxRQUFNLDZCQUE2QixDQUFDO0FBQ3BDLE1BQUk7QUFDSixNQUFJLGtCQUFrQjtBQUN0QixTQUFPLE9BQU8sS0FBSyxPQUFPO0FBQzFCLE1BQUksaUJBQWlCLElBQUksSUFBSSxRQUFRLGdCQUFnQixNQUFNLElBQUksT0FBTyxFQUFFO0FBQ3hFLGNBQVksSUFBSSxnQkFBYztBQUM1QixlQUFXLENBQUMsRUFBRSxJQUFJLGlCQUFlO0FBQy9CLFlBQU0sVUFBVTtBQUFBLFFBQ2QsU0FBUyxZQUFZLENBQUM7QUFBQSxRQUN0QixXQUFXLFlBQVksQ0FBQztBQUFBLFFBQ3hCLFdBQVcsWUFBWSxDQUFDO0FBQUEsUUFDeEIsYUFBYSxZQUFZLENBQUM7QUFBQSxNQUM1QjtBQUNBO0FBQ0UsZ0JBQVEsWUFBWSxZQUFZLENBQUM7QUFBQSxNQUNuQztBQUNBLFlBQU0sVUFBVSxRQUFRO0FBQ3hCLFlBQU0sY0FBYyxjQUFjLFlBQVk7QUFBQTtBQUFBLFFBRTVDLFlBQVksTUFBTTtBQUVoQixnQkFBTSxJQUFJO0FBQ1YsaUJBQU87QUFDUCx1QkFBYSxNQUFNLE9BQU87QUFDMUIsY0FBSSxRQUFRLFVBQVUsR0FBZ0M7QUFLcEQ7QUFDRTtBQUNFLHFCQUFLLGFBQWE7QUFBQSxrQkFDaEIsTUFBTTtBQUFBLGdCQUNSLENBQUM7QUFBQSxjQUNIO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxvQkFBb0I7QUFDbEIsY0FBSSxpQkFBaUI7QUFDbkIseUJBQWEsZUFBZTtBQUM1Qiw4QkFBa0I7QUFBQSxVQUNwQjtBQUNBLGNBQUksaUJBQWlCO0FBRW5CLHVDQUEyQixLQUFLLElBQUk7QUFBQSxVQUN0QyxPQUFPO0FBQ0wsZ0JBQUksSUFBSSxNQUFNLGtCQUFrQixJQUFJLENBQUM7QUFBQSxVQUN2QztBQUFBLFFBQ0Y7QUFBQSxRQUNBLHVCQUF1QjtBQUNyQixjQUFJLElBQUksTUFBTSxxQkFBcUIsSUFBSSxDQUFDO0FBQUEsUUFDMUM7QUFBQSxRQUNBLG1CQUFtQjtBQUNqQixpQkFBTyxXQUFXLElBQUksRUFBRTtBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUNBLGNBQVEsaUJBQWlCLFdBQVcsQ0FBQztBQUNyQyxVQUFJLENBQUMsUUFBUSxTQUFTLE9BQU8sS0FBSyxDQUFDLGVBQWUsSUFBSSxPQUFPLEdBQUc7QUFDOUQsZ0JBQVEsS0FBSyxPQUFPO0FBQ3BCLHVCQUFlLE9BQU8sU0FBUztBQUFBLFVBQWU7QUFBQSxVQUFhO0FBQUEsVUFBUztBQUFBO0FBQUEsUUFBNEIsQ0FBQztBQUFBLE1BQ25HO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0Q7QUFDRSxvQkFBZ0IsWUFBWSxVQUFVO0FBQ3RDLG9CQUFnQixhQUFhLGVBQWUsRUFBRTtBQUM5QyxTQUFLLGFBQWEsaUJBQWlCLGNBQWMsWUFBWSxjQUFjLEtBQUssVUFBVTtBQUFBLEVBQzVGO0FBRUEsb0JBQWtCO0FBQ2xCLE1BQUksMkJBQTJCLFFBQVE7QUFDckMsK0JBQTJCLElBQUksVUFBUSxLQUFLLGtCQUFrQixDQUFDO0FBQUEsRUFDakUsT0FBTztBQUNMO0FBQ0UsVUFBSSxJQUFJLE1BQU0sa0JBQWtCLFdBQVcsWUFBWSxFQUFFLENBQUM7QUFBQSxJQUM1RDtBQUFBLEVBQ0Y7QUFFQSxlQUFhO0FBQ2Y7QUFDQSxJQUFNLFdBQVcsb0JBQUksUUFBUTtBQUM3QixJQUFNLGFBQWEsU0FBTyxTQUFTLElBQUksR0FBRztBQUMxQyxJQUFNLG1CQUFtQixDQUFDLGNBQWMsWUFBWSxTQUFTLElBQUksUUFBUSxpQkFBaUIsY0FBYyxPQUFPO0FBQy9HLElBQU0sZUFBZSxDQUFDLEtBQUssWUFBWTtBQUNyQyxRQUFNLFVBQVU7QUFBQSxJQUNkLFNBQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxJQUNYLGtCQUFrQixvQkFBSSxJQUFJO0FBQUEsRUFDNUI7QUFDQTtBQUNFLFlBQVEsbUJBQW1CLElBQUksUUFBUSxPQUFLLFFBQVEsbUJBQW1CLENBQUM7QUFDeEUsUUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLFFBQUksTUFBTSxJQUFJLENBQUM7QUFBQSxFQUNqQjtBQUNBLFNBQU8sU0FBUyxJQUFJLEtBQUssT0FBTztBQUNsQztBQUNBLElBQU0sb0JBQW9CLENBQUMsS0FBSyxlQUFlLGNBQWM7QUFDN0QsSUFBTSxlQUFlLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxPQUFPLEdBQUcsRUFBRTtBQUN4RCxJQUFNLGFBQTBCLG9CQUFJLElBQUk7QUFDeEMsSUFBTSxhQUFhLENBQUMsU0FBUyxTQUFTLGlCQUFpQjtBQUVyRCxRQUFNLGFBQWEsUUFBUSxVQUFVLFFBQVEsTUFBTSxHQUFHO0FBQ3RELFFBQU0sV0FBVyxRQUFRO0FBQ3pCLFFBQU0sU0FBUyxXQUFXLElBQUksUUFBUTtBQUN0QyxNQUFJLFFBQVE7QUFDVixXQUFPLE9BQU8sVUFBVTtBQUFBLEVBQzFCO0FBQ0EsTUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sc0JBQXNCO0FBQ2hELFVBQU0sYUFBYSxvQkFBa0I7QUFDbkMsaUJBQVcsSUFBSSxVQUFVLGNBQWM7QUFDdkMsYUFBTyxlQUFlLFVBQVU7QUFBQSxJQUNsQztBQUNBLFlBQVEsVUFBVTtBQUFBLE1BQ2hCLEtBQUs7QUFDSCxlQUFPO0FBQUE7QUFBQSxVQUNQO0FBQUEsUUFBNkIsRUFBRSxLQUFLLFlBQVksWUFBWTtBQUFBLElBQ2hFO0FBQUEsRUFDRjtBQUNBLHdJQUlBLHlCQUFLLFFBQVEsWUFBWSxFQUFFLElBQUksS0FBSyxvQkFBa0I7QUFDcEQ7QUFDRSxpQkFBVyxJQUFJLFVBQVUsY0FBYztBQUFBLElBQ3pDO0FBQ0EsV0FBTyxlQUFlLFVBQVU7QUFBQSxFQUNsQyxHQUFHLFlBQVk7QUFDakI7QUFDQSxJQUFNLFNBQVMsb0JBQUksSUFBSTtBQUN2QixJQUFNLGdCQUFnQixDQUFDO0FBQ3ZCLElBQU0saUJBQWlCLENBQUM7QUFDeEIsSUFBTSxZQUFZLENBQUMsT0FBTyxVQUFVLFFBQU07QUFDeEMsUUFBTSxLQUFLLEVBQUU7QUFDYixNQUFJLENBQUMsY0FBYztBQUNqQixtQkFBZTtBQUNmLFFBQUksU0FBUyxJQUFJLFVBQVUsR0FBbUI7QUFDNUMsZUFBUyxLQUFLO0FBQUEsSUFDaEIsT0FBTztBQUNMLFVBQUksSUFBSSxLQUFLO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sVUFBVSxXQUFTO0FBQ3ZCLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsUUFBSTtBQUNGLFlBQU0sQ0FBQyxFQUFFLFlBQVksSUFBSSxDQUFDO0FBQUEsSUFDNUIsU0FBUyxHQUFHO0FBQ1YsbUJBQWEsQ0FBQztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUNBLFFBQU0sU0FBUztBQUNqQjtBQUNBLElBQU0sUUFBUSxNQUFNO0FBSWxCLFVBQVEsYUFBYTtBQUVyQjtBQUNFLFlBQVEsY0FBYztBQUN0QixRQUFJLGVBQWUsY0FBYyxTQUFTLEdBQUc7QUFHM0MsVUFBSSxJQUFJLEtBQUs7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxXQUF3QixRQUFNLGVBQWUsRUFBRSxLQUFLLEVBQUU7QUFDNUQsSUFBTSxZQUF5QiwwQkFBVSxnQkFBZ0IsSUFBSTsiLCJuYW1lcyI6WyJoIiwic2NvcGVJZCIsImlzU3ZnTW9kZSIsIm5ld1ZOb2RlIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
