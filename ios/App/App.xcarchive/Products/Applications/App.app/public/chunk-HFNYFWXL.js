import {
  __async,
  __glob
} from "./chunk-LQ2EECYJ.js";

// import("./**/*.entry.js") in node_modules/@ionic/pwa-elements/dist/esm/index-1c5c47b4.js
var globImport_entry_js = __glob({
  "./pwa-action-sheet.entry.js": () => import("./pwa-action-sheet.entry-GINWFJRF.js"),
  "./pwa-camera-modal-instance.entry.js": () => import("./pwa-camera-modal-instance.entry-57BSCCNT.js"),
  "./pwa-camera-modal.entry.js": () => import("./pwa-camera-modal.entry-3RKQEEE5.js"),
  "./pwa-camera.entry.js": () => import("./pwa-camera.entry-MOXURVAO.js"),
  "./pwa-toast.entry.js": () => import("./pwa-toast.entry-UQPUOGT3.js")
});

// node_modules/@ionic/pwa-elements/dist/esm/index-1c5c47b4.js
var NAMESPACE = "ionicpwaelements";
var scopeId;
var hostTagName;
var isSvgMode = false;
var queuePending = false;
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
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
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
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2) {
      return parseFloat(propValue);
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
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
  var _a;
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
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
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
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
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
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
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
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
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
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        elm.remove();
      }
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
var isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
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
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      {
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
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
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
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = (hostRef, instance, isInitialLoad) => __async(void 0, null, function* () {
  var _a;
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
    const childrenPromises = (_a = elm["s-p"]) !== null && _a !== void 0 ? _a : [];
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
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
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
    hostRef.$onInstanceResolve$(elm);
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
var forceUpdate = (ref) => {
  {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
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
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => elm.classList.add("hydrated");
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
      } else if (flags & 1 && memberFlags & 64) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            const ref = getHostRef(this);
            return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
          }
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
        /* MEMBER_FLAGS.HasAttribute */
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
    hostRef.$flags$ |= 32;
    {
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
          /* PROXY_FLAGS.proxyState */
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
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    }
    endConnected();
  }
};
var disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const instance = hostRef.$lazyInstance$;
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    {
      safeCall(instance, "disconnectedCallback");
    }
  }
};
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
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
      {
        cmpMeta.$listeners$ = compactMeta[3];
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
          /* PROXY_FLAGS.isElementConstructor */
        ));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
    if (nonce != null) {
      visibilityStyle.setAttribute("nonce", nonce);
    }
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
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  try {
    {
      if (hostRef.$flags$ & 256) {
        hostRef.$lazyInstance$[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (flags & 16) return doc.body;
  return elm;
};
var hostListenerOpts = (flags) => (flags & 2) !== 0;
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
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
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
      case "pwa-action-sheet":
        return import(
          /* webpackMode: "lazy" */
          "./pwa-action-sheet.entry-GINWFJRF.js"
        ).then(processMod, consoleError);
      case "pwa-camera-modal":
        return import(
          /* webpackMode: "lazy" */
          "./pwa-camera-modal.entry-3RKQEEE5.js"
        ).then(processMod, consoleError);
      case "pwa-toast":
        return import(
          /* webpackMode: "lazy" */
          "./pwa-toast.entry-UQPUOGT3.js"
        ).then(processMod, consoleError);
      case "pwa-camera-modal-instance":
        return import(
          /* webpackMode: "lazy" */
          "./pwa-camera-modal-instance.entry-57BSCCNT.js"
        ).then(processMod, consoleError);
      case "pwa-camera":
        return import(
          /* webpackMode: "lazy" */
          "./pwa-camera.entry-MOXURVAO.js"
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
  h,
  Host,
  getElement,
  createEvent,
  forceUpdate,
  bootstrapLazy,
  registerInstance,
  promiseResolve
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL2luZGV4LTFjNWM0N2I0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5BTUVTUEFDRSA9ICdpb25pY3B3YWVsZW1lbnRzJztcblxuLyoqXG4gKiBWaXJ0dWFsIERPTSBwYXRjaGluZyBhbGdvcml0aG0gYmFzZWQgb24gU25hYmJkb20gYnlcbiAqIFNpbW9uIEZyaWlzIFZpbmR1bSAoQHBhbGRlcGluZClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NuYWJiZG9tL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIHJlbmRlcmVyIGFuZCBzbG90IHByb2plY3Rpb25cbiAqL1xubGV0IHNjb3BlSWQ7XG5sZXQgaG9zdFRhZ05hbWU7XG5sZXQgaXNTdmdNb2RlID0gZmFsc2U7XG5sZXQgcXVldWVQZW5kaW5nID0gZmFsc2U7XG5jb25zdCBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9ICcnKSA9PiB7XG4gIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbn07XG5jb25zdCB1bmlxdWVUaW1lID0gKGtleSwgbWVhc3VyZVRleHQpID0+IHtcbiAge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IEhZRFJBVEVEX0NTUyA9ICd7dmlzaWJpbGl0eTpoaWRkZW59Lmh5ZHJhdGVke3Zpc2liaWxpdHk6aW5oZXJpdH0nO1xuLyoqXG4gKiBEZWZhdWx0IHN0eWxlIG1vZGUgaWRcbiAqL1xuLyoqXG4gKiBSZXVzYWJsZSBlbXB0eSBvYmovYXJyYXlcbiAqIERvbid0IGFkZCB2YWx1ZXMgdG8gdGhlc2UhIVxuICovXG5jb25zdCBFTVBUWV9PQkogPSB7fTtcbi8qKlxuICogTmFtZXNwYWNlc1xuICovXG5jb25zdCBTVkdfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuY29uc3QgSFRNTF9OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmNvbnN0IGlzRGVmID0gdiA9PiB2ICE9IG51bGw7XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSB2YWx1ZSBpcyBhICdjb21wbGV4IHR5cGUnLCBkZWZpbmVkIGhlcmUgYXMgYW4gb2JqZWN0IG9yIGFcbiAqIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBvIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMgd2hldGhlciBpdCdzIGEgY29tcGxleCB0eXBlIG9yIG5vdFxuICovXG5jb25zdCBpc0NvbXBsZXhUeXBlID0gbyA9PiB7XG4gIC8vIGh0dHBzOi8vanNwZXJmLmNvbS90eXBlb2YtZm4tb2JqZWN0LzVcbiAgbyA9IHR5cGVvZiBvO1xuICByZXR1cm4gbyA9PT0gJ29iamVjdCcgfHwgbyA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHF1ZXJ5aW5nIGEgYG1ldGFgIHRhZyB0aGF0IGNvbnRhaW5zIGEgbm9uY2UgdmFsdWVcbiAqIG91dCBvZiBhIERPTSdzIGhlYWQuXG4gKlxuICogQHBhcmFtIGRvYyBUaGUgRE9NIGNvbnRhaW5pbmcgdGhlIGBoZWFkYCB0byBxdWVyeSBhZ2FpbnN0XG4gKiBAcmV0dXJucyBUaGUgY29udGVudCBvZiB0aGUgbWV0YSB0YWcgcmVwcmVzZW50aW5nIHRoZSBub25jZSB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gdGFnXG4gKiBleGlzdHMgb3IgdGhlIHRhZyBoYXMgbm8gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYykge1xuICB2YXIgX2EsIF9iLCBfYztcbiAgcmV0dXJuIChfYyA9IChfYiA9IChfYSA9IGRvYy5oZWFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NwLW5vbmNlXCJdJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBQcm9kdWN0aW9uIGgoKSBmdW5jdGlvbiBiYXNlZCBvbiBQcmVhY3QgYnlcbiAqIEphc29uIE1pbGxlciAoQGRldmVsb3BpdClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgY29tcGlsZXIgYW5kIHZkb21cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgY2hpbGQ/OiBkLkNoaWxkVHlwZSk6IGQuVk5vZGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogZC5DaGlsZFR5cGVbXSk6IGQuVk5vZGU7XG5jb25zdCBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBjaGlsZCA9IG51bGw7XG4gIGxldCBzaW1wbGUgPSBmYWxzZTtcbiAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgY29uc3Qgdk5vZGVDaGlsZHJlbiA9IFtdO1xuICBjb25zdCB3YWxrID0gYyA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNbaV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKHNpbXBsZSA9IHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiAhaXNDb21wbGV4VHlwZShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoaWxkIHdhcyBzaW1wbGUgKHN0cmluZyksIHdlIG1lcmdlIGJvdGhcbiAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFwcGVuZCBhIG5ldyB2Tm9kZSwgaWYgaXQncyB0ZXh0LCB3ZSBjcmVhdGUgYSB0ZXh0IHZOb2RlXG4gICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgd2FsayhjaGlsZHJlbik7XG4gIGlmICh2bm9kZURhdGEpIHtcbiAgICB7XG4gICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgdm5vZGVEYXRhLmNsYXNzID0gdHlwZW9mIGNsYXNzRGF0YSAhPT0gJ29iamVjdCcgPyBjbGFzc0RhdGEgOiBPYmplY3Qua2V5cyhjbGFzc0RhdGEpLmZpbHRlcihrID0+IGNsYXNzRGF0YVtrXSkuam9pbignICcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGVOYW1lLCBudWxsKTtcbiAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn07XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSB2aXJ0dWFsIERPTSBub2RlIGZyb20gYSB0YWcgYW5kIHNvbWVcbiAqIHBvc3NpYmxlIHRleHQgY29udGVudC5cbiAqXG4gKiBAcGFyYW0gdGFnIHRoZSB0YWcgZm9yIHRoaXMgZWxlbWVudFxuICogQHBhcmFtIHRleHQgcG9zc2libGUgdGV4dCBjb250ZW50IGZvciB0aGUgbm9kZVxuICogQHJldHVybnMgYSBuZXdseS1taW50ZWQgdmlydHVhbCBET00gbm9kZVxuICovXG5jb25zdCBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgY29uc3Qgdm5vZGUgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkdGFnJDogdGFnLFxuICAgICR0ZXh0JDogdGV4dCxcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkY2hpbGRyZW4kOiBudWxsXG4gIH07XG4gIHtcbiAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgfVxuICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgSG9zdCA9IHt9O1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZ2l2ZW4gbm9kZSBpcyBhIEhvc3Qgbm9kZSBvciBub3RcbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgdmlydHVhbCBET00gbm9kZSB0byBjaGVja1xuICogQHJldHVybnMgd2hldGhlciBpdCdzIGEgSG9zdCBub2RlIG9yIG5vdFxuICovXG5jb25zdCBpc0hvc3QgPSBub2RlID0+IG5vZGUgJiYgbm9kZS4kdGFnJCA9PT0gSG9zdDtcbi8qKlxuICogUGFyc2UgYSBuZXcgcHJvcGVydHkgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgdHlwZS5cbiAqXG4gKiBXaGlsZSB0aGUgcHJvcCB2YWx1ZSBjYW4gcmVhc29uYWJseSBiZSBleHBlY3RlZCB0byBiZSBvZiBgYW55YCB0eXBlIGFzIGZhciBhcyBUeXBlU2NyaXB0J3MgdHlwZSBjaGVja2VyIGlzIGNvbmNlcm5lZCxcbiAqIGl0IGlzIG5vdCBzYWZlIHRvIGFzc3VtZSB0aGF0IHRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgZXZhbHVhdGluZyBgdHlwZW9mIHByb3BWYWx1ZWAgbWF0Y2hlczpcbiAqICAgMS4gYGFueWAsIHRoZSB0eXBlIGdpdmVuIHRvIGBwcm9wVmFsdWVgIGluIHRoZSBmdW5jdGlvbiBzaWduYXR1cmVcbiAqICAgMi4gdGhlIHR5cGUgc3RvcmVkIGZyb20gYHByb3BUeXBlYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSBjYXBhYmlsaXR5IHRvIHBhcnNlL2NvZXJjZSBhIHByb3BlcnR5J3MgdmFsdWUgdG8gcG90ZW50aWFsbHkgYW55IG90aGVyIEphdmFTY3JpcHQgdHlwZS5cbiAqXG4gKiBQcm9wZXJ0eSB2YWx1ZXMgcmVwcmVzZW50ZWQgaW4gVFNYIHByZXNlcnZlIHRoZWlyIHR5cGUgaW5mb3JtYXRpb24uIEluIHRoZSBleGFtcGxlIGJlbG93LCB0aGUgbnVtYmVyIDAgaXMgcGFzc2VkIHRvXG4gKiBhIGNvbXBvbmVudC4gVGhpcyBgcHJvcFZhbHVlYCB3aWxsIHByZXNlcnZlIGl0cyB0eXBlIGluZm9ybWF0aW9uIChgdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcidgKS4gTm90ZSB0aGF0IGlzXG4gKiBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgYmVpbmcgcGFzc2VkIGluLCBub3QgdGhlIHR5cGUgZGVjbGFyZWQgb2YgdGhlIGNsYXNzIG1lbWJlciBkZWNvcmF0ZWQgd2l0aCBgQFByb3BgLlxuICogYGBgdHN4XG4gKiA8bXktY21wIHByb3AtdmFsPXswfT48L215LWNtcD5cbiAqIGBgYFxuICpcbiAqIEhUTUwgcHJvcCB2YWx1ZXMgb24gdGhlIG90aGVyIGhhbmQsIHdpbGwgYWx3YXlzIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHByb3BWYWx1ZSB0aGUgbmV3IHZhbHVlIHRvIGNvZXJjZSB0byBzb21lIHR5cGVcbiAqIEBwYXJhbSBwcm9wVHlwZSB0aGUgdHlwZSBvZiB0aGUgcHJvcCwgZXhwcmVzc2VkIGFzIGEgYmluYXJ5IG51bWJlclxuICogQHJldHVybnMgdGhlIHBhcnNlZC9jb2VyY2VkIHZhbHVlXG4gKi9cbmNvbnN0IHBhcnNlUHJvcGVydHlWYWx1ZSA9IChwcm9wVmFsdWUsIHByb3BUeXBlKSA9PiB7XG4gIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgIWlzQ29tcGxleFR5cGUocHJvcFZhbHVlKSkge1xuICAgIGlmIChwcm9wVHlwZSAmIDQgLyogTUVNQkVSX0ZMQUdTLkJvb2xlYW4gKi8pIHtcbiAgICAgIC8vIHBlciB0aGUgSFRNTCBzcGVjLCBhbnkgc3RyaW5nIHZhbHVlIG1lYW5zIGl0IGlzIGEgYm9vbGVhbiB0cnVlIHZhbHVlXG4gICAgICAvLyBidXQgd2UnbGwgY2hlYXQgaGVyZSBhbmQgc2F5IHRoYXQgdGhlIHN0cmluZyBcImZhbHNlXCIgaXMgdGhlIGJvb2xlYW4gZmFsc2VcbiAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHByb3BWYWx1ZSA9PT0gJycgfHwgISFwcm9wVmFsdWU7XG4gICAgfVxuICAgIGlmIChwcm9wVHlwZSAmIDIgLyogTUVNQkVSX0ZMQUdTLk51bWJlciAqLykge1xuICAgICAgLy8gZm9yY2UgaXQgdG8gYmUgYSBudW1iZXJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHByb3BWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChwcm9wVHlwZSAmIDEgLyogTUVNQkVSX0ZMQUdTLlN0cmluZyAqLykge1xuICAgICAgLy8gY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBhcyBhIG51bWJlciBvciBib29sZWFuXG4gICAgICAvLyBidXQgd2Ugc3RpbGwgd2FudCBpdCBhcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgIH1cbiAgICAvLyByZWR1bmRhbnQgcmV0dXJuIGhlcmUgZm9yIGJldHRlciBtaW5pZmljYXRpb25cbiAgICByZXR1cm4gcHJvcFZhbHVlO1xuICB9XG4gIC8vIG5vdCBzdXJlIGV4YWN0bHkgd2hhdCB0eXBlIHdlIHdhbnRcbiAgLy8gc28gbm8gbmVlZCB0byBjaGFuZ2UgdG8gYSBkaWZmZXJlbnQgdHlwZVxuICByZXR1cm4gcHJvcFZhbHVlO1xufTtcbmNvbnN0IGdldEVsZW1lbnQgPSByZWYgPT4gZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQ7XG5jb25zdCBjcmVhdGVFdmVudCA9IChyZWYsIG5hbWUsIGZsYWdzKSA9PiB7XG4gIGNvbnN0IGVsbSA9IGdldEVsZW1lbnQocmVmKTtcbiAgcmV0dXJuIHtcbiAgICBlbWl0OiBkZXRhaWwgPT4ge1xuICAgICAgcmV0dXJuIGVtaXRFdmVudChlbG0sIG5hbWUsIHtcbiAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEVWRU5UX0ZMQUdTLkJ1YmJsZXMgKi8pLFxuICAgICAgICBjb21wb3NlZDogISEoZmxhZ3MgJiAyIC8qIEVWRU5UX0ZMQUdTLkNvbXBvc2VkICovKSxcbiAgICAgICAgY2FuY2VsYWJsZTogISEoZmxhZ3MgJiAxIC8qIEVWRU5UX0ZMQUdTLkNhbmNlbGxhYmxlICovKSxcbiAgICAgICAgZGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlICYgZGlzcGF0Y2ggYSBjdXN0b20gRXZlbnQgb24gYSBwcm92aWRlZCB0YXJnZXRcbiAqIEBwYXJhbSBlbG0gdGhlIHRhcmdldCBvZiB0aGUgRXZlbnRcbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGdpdmUgdGhlIGN1c3RvbSBFdmVudFxuICogQHBhcmFtIG9wdHMgb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgYSBjdXN0b20gRXZlbnRcbiAqIEByZXR1cm5zIHRoZSBjdXN0b20gRXZlbnRcbiAqL1xuY29uc3QgZW1pdEV2ZW50ID0gKGVsbSwgbmFtZSwgb3B0cykgPT4ge1xuICBjb25zdCBldiA9IHBsdC5jZShuYW1lLCBvcHRzKTtcbiAgZWxtLmRpc3BhdGNoRXZlbnQoZXYpO1xuICByZXR1cm4gZXY7XG59O1xuY29uc3Qgcm9vdEFwcGxpZWRTdHlsZXMgPSAvKkBfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICBsZXQgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgIHN0eWxlID0gc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBjc3NUZXh0O1xuICB9XG4gIHN0eWxlcy5zZXQoc2NvcGVJZCwgc3R5bGUpO1xufTtcbmNvbnN0IGFkZFN0eWxlID0gKHN0eWxlQ29udGFpbmVyTm9kZSwgY21wTWV0YSwgbW9kZSwgaG9zdEVsbSkgPT4ge1xuICB2YXIgX2E7XG4gIGxldCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhKTtcbiAgY29uc3Qgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICAvLyBpZiBhbiBlbGVtZW50IGlzIE5PVCBjb25uZWN0ZWQgdGhlbiBnZXRSb290Tm9kZSgpIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyByb290IG5vZGVcbiAgLy8gc28gdGhlIGZhbGxiYWNrIGlzIHRvIGFsd2F5cyB1c2UgdGhlIGRvY3VtZW50IGZvciB0aGUgcm9vdCBub2RlIGluIHRob3NlIGNhc2VzXG4gIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogTk9ERV9UWVBFLkRvY3VtZW50RnJhZ21lbnQgKi8gPyBzdHlsZUNvbnRhaW5lck5vZGUgOiBkb2M7XG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUuaGVhZCB8fCBzdHlsZUNvbnRhaW5lck5vZGU7XG4gICAgICBsZXQgYXBwbGllZFN0eWxlcyA9IHJvb3RBcHBsaWVkU3R5bGVzLmdldChzdHlsZUNvbnRhaW5lck5vZGUpO1xuICAgICAgbGV0IHN0eWxlRWxtO1xuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgIHJvb3RBcHBsaWVkU3R5bGVzLnNldChzdHlsZUNvbnRhaW5lck5vZGUsIGFwcGxpZWRTdHlsZXMgPSBuZXcgU2V0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVE9ETyhTVEVOQ0lMLTY1OSk6IFJlbW92ZSBjb2RlIGltcGxlbWVudGluZyB0aGUgQ1NTIHZhcmlhYmxlIHNoaW1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZUVsbSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICAgIGNvbnN0IG5vbmNlID0gKF9hID0gcGx0LiRub25jZSQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpO1xuICAgICAgICAgIGlmIChub25jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHlsZUVsbS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcignbGluaycpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgIGFwcGxpZWRTdHlsZXMuYWRkKHNjb3BlSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSBob3N0UmVmID0+IHtcbiAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGZsYWdzID0gY21wTWV0YS4kZmxhZ3MkO1xuICBjb25zdCBlbmRBdHRhY2hTdHlsZXMgPSBjcmVhdGVUaW1lKCdhdHRhY2hTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gIGNvbnN0IHNjb3BlSWQgPSBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEpO1xuICAvLyBUT0RPKFNURU5DSUwtNjYyKTogUmVtb3ZlIGNvZGUgcmVsYXRlZCB0byBkZXByZWNhdGVkIHNoYWRvd0RvbVNoaW0gZmllbGRcbiAgaWYgKGZsYWdzICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgIC8vIG9ubHkgcmVxdWlyZWQgd2hlbiB3ZSdyZSBOT1QgdXNpbmcgbmF0aXZlIHNoYWRvdyBkb20gKHNsb3QpXG4gICAgLy8gb3IgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmUgc2hhZG93IGRvbVxuICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAvLyBsZXQncyBwaWNrIG91dCB0aGUgaW5uZXIgY29udGVudCBmb3Igc2xvdCBwcm9qZWN0aW9uXG4gICAgLy8gY3JlYXRlIGEgbm9kZSB0byByZXByZXNlbnQgd2hlcmUgdGhlIG9yaWdpbmFsXG4gICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAvLyBET00gV1JJVEUhIVxuICAgIGVsbVsncy1zYyddID0gc2NvcGVJZDtcbiAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gIH1cbiAgZW5kQXR0YWNoU3R5bGVzKCk7XG59O1xuY29uc3QgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+ICdzYy0nICsgY21wLiR0YWdOYW1lJDtcbi8qKlxuICogUHJvZHVjdGlvbiBzZXRBY2Nlc3NvcigpIGZ1bmN0aW9uIGJhc2VkIG9uIFByZWFjdCBieVxuICogSmFzb24gTWlsbGVyIChAZGV2ZWxvcGl0KVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogTW9kaWZpZWQgZm9yIFN0ZW5jaWwncyBjb21waWxlciBhbmQgdmRvbVxuICovXG5jb25zdCBzZXRBY2Nlc3NvciA9IChlbG0sIG1lbWJlck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNTdmcsIGZsYWdzKSA9PiB7XG4gIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICBsZXQgaXNQcm9wID0gaXNNZW1iZXJJbkVsZW1lbnQoZWxtLCBtZW1iZXJOYW1lKTtcbiAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1lbWJlck5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsbS5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3Qob2xkVmFsdWUpO1xuICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG5ld1ZhbHVlKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkQ2xhc3Nlcy5maWx0ZXIoYyA9PiBjICYmICFuZXdDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMuZmlsdGVyKGMgPT4gYyAmJiAhb2xkQ2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgIH0gZWxzZSBpZiAobWVtYmVyTmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgLy8gdXBkYXRlIHN0eWxlIGF0dHJpYnV0ZSwgY3NzIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgICAge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZiAoIW5ld1ZhbHVlIHx8IG5ld1ZhbHVlW3Byb3BdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gbmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKCFvbGRWYWx1ZSB8fCBuZXdWYWx1ZVtwcm9wXSAhPT0gb2xkVmFsdWVbcHJvcF0pIHtcbiAgICAgICAgICBpZiAocHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICBlbG0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgbmV3VmFsdWVbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSBuZXdWYWx1ZVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1lbWJlck5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAvLyBtaW5pZmllciB3aWxsIGNsZWFuIHRoaXMgdXBcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICBuZXdWYWx1ZShlbG0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzUHJvcCAmJiBtZW1iZXJOYW1lWzBdID09PSAnbycgJiYgbWVtYmVyTmFtZVsxXSA9PT0gJ24nKSB7XG4gICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgLy8gc28gaWYgdGhlIG1lbWJlciBuYW1lIHN0YXJ0cyB3aXRoIFwib25cIiBhbmQgdGhlIDNyZCBjaGFyYWN0ZXJzIGlzXG4gICAgICAvLyBhIGNhcGl0YWwgbGV0dGVyLCBhbmQgaXQncyBub3QgYWxyZWFkeSBhIG1lbWJlciBvbiB0aGUgZWxlbWVudCxcbiAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgaWYgKG1lbWJlck5hbWVbMl0gPT09ICctJykge1xuICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgIC8vIGFsbG93cyB0byBiZSBleHBsaWNpdCBhYm91dCB0aGUgZG9tIGV2ZW50IHRvIGxpc3RlbiB3aXRob3V0IGFueSBtYWdpY1xuICAgICAgICAvLyB1bmRlciB0aGUgaG9vZDpcbiAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgIC8vIDxteS1jbXAgb24tQ2xpY2s+IC8vIGxpc3RlbnMgZm9yIFwiQ2xpY2tcIlxuICAgICAgICAvLyA8bXktY21wIG9uLWlvbkNoYW5nZT4gLy8gbGlzdGVucyBmb3IgXCJpb25DaGFuZ2VcIlxuICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICBtZW1iZXJOYW1lID0gbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgLy8gc3RhbmRhcmQgZXZlbnRcbiAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgIC8vIHNvIGxldCdzIGFkZCB0aGUgbGlzdGVuZXIgXCJtb3VzZW92ZXJcIiwgd2hpY2ggaXMgYWxsIGxvd2VyY2FzZWRcbiAgICAgICAgbWVtYmVyTmFtZSA9IGxuLnNsaWNlKDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgIC8vIHNvIGxldCdzIHRyaW0gb2ZmIHRoZSBcIm9uXCIgcHJlZml4IGFuZCBsb3dlcmNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICBtZW1iZXJOYW1lID0gbG5bMl0gKyBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgfVxuICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgcHJvcGVydHkgaWYgaXQgZXhpc3RzIGFuZCBpdCdzIG5vdCBhIFNWR1xuICAgICAgY29uc3QgaXNDb21wbGV4ID0gaXNDb21wbGV4VHlwZShuZXdWYWx1ZSk7XG4gICAgICBpZiAoKGlzUHJvcCB8fCBpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpICYmICFpc1N2Zykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgU2FmYXJpLCBtb3ZpbmcgdGhlIDxpbnB1dD4gY2FyZXQgd2hlbiByZS1hc3NpZ25pbmcgdGhlIHNhbWUgdmFsdWVkXG4gICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGZhbHNlIHx8IGVsbS5nZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSkgPT09ICcnKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKCFpc1Byb3AgfHwgZmxhZ3MgJiA0IC8qIFZOT0RFX0ZMQUdTLmlzSG9zdCAqLyB8fCBpc1N2ZykgJiYgIWlzQ29tcGxleCkge1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgcGFyc2VDbGFzc0xpc3RSZWdleCA9IC9cXHMvO1xuY29uc3QgcGFyc2VDbGFzc0xpc3QgPSB2YWx1ZSA9PiAhdmFsdWUgPyBbXSA6IHZhbHVlLnNwbGl0KHBhcnNlQ2xhc3NMaXN0UmVnZXgpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAvLyBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaW4gaXMgYSBzaGFkb3cgcm9vdCwgd2hpY2ggaXMgYSBkb2N1bWVudCBmcmFnbWVudFxuICAvLyB0aGVuIHdlIHdhbnQgdG8gYmUgYWRkaW5nIGF0dHJzL3Byb3BzIHRvIHRoZSBzaGFkb3cgcm9vdCdzIFwiaG9zdFwiIGVsZW1lbnRcbiAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICBjb25zdCBlbG0gPSBuZXdWbm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMTEgLyogTk9ERV9UWVBFLkRvY3VtZW50RnJhZ21lbnQgKi8gJiYgbmV3Vm5vZGUuJGVsbSQuaG9zdCA/IG5ld1Zub2RlLiRlbG0kLmhvc3QgOiBuZXdWbm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IG9sZFZub2RlICYmIG9sZFZub2RlLiRhdHRycyQgfHwgRU1QVFlfT0JKO1xuICBjb25zdCBuZXdWbm9kZUF0dHJzID0gbmV3Vm5vZGUuJGF0dHJzJCB8fCBFTVBUWV9PQko7XG4gIHtcbiAgICAvLyByZW1vdmUgYXR0cmlidXRlcyBubyBsb25nZXIgcHJlc2VudCBvbiB0aGUgdm5vZGUgYnkgc2V0dGluZyB0aGVtIHRvIHVuZGVmaW5lZFxuICAgIGZvciAobWVtYmVyTmFtZSBpbiBvbGRWbm9kZUF0dHJzKSB7XG4gICAgICBpZiAoIShtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpKSB7XG4gICAgICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgdW5kZWZpbmVkLCBpc1N2Z01vZGUsIG5ld1Zub2RlLiRmbGFncyQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuICBmb3IgKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykge1xuICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgbmV3Vm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgfVxufTtcbi8qKlxuICogQ3JlYXRlIGEgRE9NIE5vZGUgY29ycmVzcG9uZGluZyB0byBvbmUgb2YgdGhlIGNoaWxkcmVuIG9mIGEgZ2l2ZW4gVk5vZGUuXG4gKlxuICogQHBhcmFtIG9sZFBhcmVudFZOb2RlIHRoZSBwYXJlbnQgVk5vZGUgZnJvbSB0aGUgcHJldmlvdXMgcmVuZGVyXG4gKiBAcGFyYW0gbmV3UGFyZW50Vk5vZGUgdGhlIHBhcmVudCBWTm9kZSBmcm9tIHRoZSBjdXJyZW50IHJlbmRlclxuICogQHBhcmFtIGNoaWxkSW5kZXggdGhlIGluZGV4IG9mIHRoZSBWTm9kZSwgaW4gdGhlIF9uZXdfIHBhcmVudCBub2RlJ3NcbiAqIGNoaWxkcmVuLCBmb3Igd2hpY2ggd2Ugd2lsbCBjcmVhdGUgYSBuZXcgRE9NIG5vZGVcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIHBhcmVudCBET00gbm9kZSB3aGljaCBvdXIgbmV3IG5vZGUgd2lsbCBiZSBhIGNoaWxkIG9mXG4gKiBAcmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBub2RlXG4gKi9cbmNvbnN0IGNyZWF0ZUVsbSA9IChvbGRQYXJlbnRWTm9kZSwgbmV3UGFyZW50Vk5vZGUsIGNoaWxkSW5kZXgsIHBhcmVudEVsbSkgPT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICBjb25zdCBuZXdWTm9kZSA9IG5ld1BhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRJbmRleF07XG4gIGxldCBpID0gMDtcbiAgbGV0IGVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgaWYgKG5ld1ZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcbiAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShuZXdWTm9kZS4kdGV4dCQpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaXNTdmdNb2RlKSB7XG4gICAgICBpc1N2Z01vZGUgPSBuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2Zyc7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlRWxlbWVudE5TKGlzU3ZnTW9kZSA/IFNWR19OUyA6IEhUTUxfTlMsIG5ld1ZOb2RlLiR0YWckKTtcbiAgICBpZiAoaXNTdmdNb2RlICYmIG5ld1ZOb2RlLiR0YWckID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGQgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAge1xuICAgICAgdXBkYXRlRWxlbWVudChudWxsLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKHNjb3BlSWQpICYmIGVsbVsncy1zaSddICE9PSBzY29wZUlkKSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNjb3BlSWQgYW5kIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICAvLyB0aGVuIGxldCdzIGFkZCB0aGUgc2NvcGVJZCBhcyBhIGNzcyBjbGFzc1xuICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoZWxtWydzLXNpJ10gPSBzY29wZUlkKTtcbiAgICB9XG4gICAgaWYgKG5ld1ZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXdWTm9kZS4kY2hpbGRyZW4kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlLCBpKTtcbiAgICAgICAgLy8gcmV0dXJuIG5vZGUgY291bGQgaGF2ZSBiZWVuIG51bGxcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IG5vZGVcbiAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB7XG4gICAgICBpZiAobmV3Vk5vZGUuJHRhZyQgPT09ICdzdmcnKSB7XG4gICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8c3ZnPiBlbGVtZW50XG4gICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgIC8vIFJlZW50ZXIgU1ZHIGNvbnRleHQgd2hlbiB3ZSdyZSBleGl0aW5nIDxmb3JlaWduT2JqZWN0PiBlbGVtZW50XG4gICAgICAgIGlzU3ZnTW9kZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBlbG07XG59O1xuLyoqXG4gKiBDcmVhdGUgRE9NIG5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gYSBsaXN0IG9mIHtAbGluayBkLlZub2RlfSBvYmplY3RzIGFuZFxuICogYWRkIHRoZW0gdG8gdGhlIERPTSBpbiB0aGUgYXBwcm9wcmlhdGUgcGxhY2UuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgRE9NIG5vZGUgd2hpY2ggc2hvdWxkIGJlIHVzZWQgYXMgYSBwYXJlbnQgZm9yIHRoZSBuZXdcbiAqIERPTSBub2Rlc1xuICogQHBhcmFtIGJlZm9yZSBhIGNoaWxkIG9mIHRoZSBgcGFyZW50RWxtYCB3aGljaCB0aGUgbmV3IGNoaWxkcmVuIHNob3VsZCBiZVxuICogaW5zZXJ0ZWQgYmVmb3JlIChvcHRpb25hbClcbiAqIEBwYXJhbSBwYXJlbnRWTm9kZSB0aGUgcGFyZW50IHZpcnR1YWwgRE9NIG5vZGVcbiAqIEBwYXJhbSB2bm9kZXMgdGhlIG5ldyBjaGlsZCB2aXJ0dWFsIERPTSBub2RlcyB0byBwcm9kdWNlIERPTSBub2RlcyBmb3JcbiAqIEBwYXJhbSBzdGFydElkeCB0aGUgaW5kZXggaW4gdGhlIGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIGF0IHdoaWNoIHRvIHN0YXJ0XG4gKiBjcmVhdGluZyBET00gbm9kZXMgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSBlbmRJZHggdGhlIGluZGV4IGluIHRoZSBjaGlsZCB2aXJ0dWFsIERPTSBub2RlcyBhdCB3aGljaCB0byBzdG9wXG4gKiBjcmVhdGluZyBET00gbm9kZXMgKGluY2x1c2l2ZSlcbiAqL1xuY29uc3QgYWRkVm5vZGVzID0gKHBhcmVudEVsbSwgYmVmb3JlLCBwYXJlbnRWTm9kZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gIGxldCBjb250YWluZXJFbG0gPSBwYXJlbnRFbG07XG4gIGxldCBjaGlsZE5vZGU7XG4gIGlmIChjb250YWluZXJFbG0uc2hhZG93Um9vdCAmJiBjb250YWluZXJFbG0udGFnTmFtZSA9PT0gaG9zdFRhZ05hbWUpIHtcbiAgICBjb250YWluZXJFbG0gPSBjb250YWluZXJFbG0uc2hhZG93Um9vdDtcbiAgfVxuICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgaWYgKHZub2Rlc1tzdGFydElkeF0pIHtcbiAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShudWxsLCBwYXJlbnRWTm9kZSwgc3RhcnRJZHgpO1xuICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICB2bm9kZXNbc3RhcnRJZHhdLiRlbG0kID0gY2hpbGROb2RlO1xuICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgYmVmb3JlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFJlbW92ZSB0aGUgRE9NIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gYSBsaXN0IG9mIHtAbGluayBkLlZOb2RlfSBvYmplY3RzLlxuICogVGhpcyBjYW4gYmUgdXNlZCB0bywgZm9yIGluc3RhbmNlLCBjbGVhbiB1cCBhZnRlciBhIGxpc3Qgb2YgY2hpbGRyZW4gd2hpY2hcbiAqIHNob3VsZCBubyBsb25nZXIgYmUgc2hvd24uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhbHNvIGhhbmRsZXMgc29tZSBvZiBTdGVuY2lsJ3Mgc2xvdCByZWxvY2F0aW9uIGxvZ2ljLlxuICpcbiAqIEBwYXJhbSB2bm9kZXMgYSBsaXN0IG9mIHZpcnR1YWwgRE9NIG5vZGVzIHRvIHJlbW92ZVxuICogQHBhcmFtIHN0YXJ0SWR4IHRoZSBpbmRleCBhdCB3aGljaCB0byBzdGFydCByZW1vdmluZyBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIGVuZElkeCB0aGUgaW5kZXggYXQgd2hpY2ggdG8gc3RvcCByZW1vdmluZyBub2RlcyAoaW5jbHVzaXZlKVxuICovXG5jb25zdCByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gc3RhcnRJZHg7IGluZGV4IDw9IGVuZElkeDsgKytpbmRleCkge1xuICAgIGNvbnN0IHZub2RlID0gdm5vZGVzW2luZGV4XTtcbiAgICBpZiAodm5vZGUpIHtcbiAgICAgIGNvbnN0IGVsbSA9IHZub2RlLiRlbG0kO1xuICAgICAgbnVsbGlmeVZOb2RlUmVmcyh2bm9kZSk7XG4gICAgICBpZiAoZWxtKSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgdm5vZGUncyBlbGVtZW50IGZyb20gdGhlIGRvbVxuICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBSZWNvbmNpbGUgdGhlIGNoaWxkcmVuIG9mIGEgbmV3IFZOb2RlIHdpdGggdGhlIGNoaWxkcmVuIG9mIGFuIG9sZCBWTm9kZSBieVxuICogdHJhdmVyc2luZyB0aGUgdHdvIGNvbGxlY3Rpb25zIG9mIGNoaWxkcmVuLCBpZGVudGlmeWluZyBub2RlcyB0aGF0IGFyZVxuICogY29uc2VydmVkIG9yIGNoYW5nZWQsIGNhbGxpbmcgb3V0IHRvIGBwYXRjaGAgdG8gbWFrZSBhbnkgbmVjZXNzYXJ5XG4gKiB1cGRhdGVzIHRvIHRoZSBET00sIGFuZCByZWFycmFuZ2luZyBET00gbm9kZXMgYXMgbmVlZGVkLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gZm9yIHJlY29uY2lsaW5nIGNoaWxkcmVuIHdvcmtzIGJ5IGFuYWx5emluZyB0d28gJ3dpbmRvd3MnIG9udG9cbiAqIHRoZSB0d28gYXJyYXlzIG9mIGNoaWxkcmVuIChgb2xkQ2hgIGFuZCBgbmV3Q2hgKS4gV2Uga2VlcCB0cmFjayBvZiB0aGVcbiAqICd3aW5kb3dzJyBieSBzdG9yaW5nIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBhbmQgcmVmZXJlbmNlcyB0byB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXJyYXkgZW50cmllcy4gSW5pdGlhbGx5IHRoZSB0d28gJ3dpbmRvd3MnIGFyZSBiYXNpY2FsbHkgZXF1YWxcbiAqIHRvIHRoZSBlbnRpcmUgYXJyYXksIGJ1dCB3ZSBwcm9ncmVzc2l2ZWx5IG5hcnJvdyB0aGUgd2luZG93cyB1bnRpbCB0aGVyZSBhcmVcbiAqIG5vIGNoaWxkcmVuIGxlZnQgdG8gdXBkYXRlIGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogMS4gU2tpcCBhbnkgYG51bGxgIGVudHJpZXMgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHR3byBhcnJheXMsIHNvXG4gKiAgICB0aGF0IGlmIHdlIGhhdmUgYW4gaW5pdGlhbCBhcnJheSBsaWtlIHRoZSBmb2xsb3dpbmcgd2UnbGwgZW5kIHVwIGRlYWxpbmdcbiAqICAgIG9ubHkgd2l0aCBhIHdpbmRvdyBib3VuZGVkIGJ5IHRoZSBoaWdobGlnaHRlZCBlbGVtZW50czpcbiAqXG4gKiAgICBbbnVsbCwgbnVsbCwgVk5vZGUxICwgLi4uICwgVk5vZGUyLCBudWxsLCBudWxsXVxuICogICAgICAgICAgICAgICAgIF5eXl5eXiAgICAgICAgIF5eXl5eXlxuICpcbiAqIDIuIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudHMgYXQgdGhlIGhlYWQgYW5kIHRhaWwgcG9zaXRpb25zIGFyZSBlcXVhbFxuICogICAgYWNyb3NzIHRoZSB3aW5kb3dzLiBUaGlzIHdpbGwgYmFzaWNhbGx5IGRldGVjdCBlbGVtZW50cyB3aGljaCBoYXZlbid0XG4gKiAgICBiZWVuIGFkZGVkLCByZW1vdmVkLCBvciBjaGFuZ2VkIHBvc2l0aW9uLCBpLmUuIGlmIHlvdSBoYWQgdGhlIGZvbGxvd2luZ1xuICogICAgVk5vZGUgZWxlbWVudHMgKHJlcHJlc2VudGVkIGFzIEhUTUwpOlxuICpcbiAqICAgIG9sZFZOb2RlOiBgPGRpdj48cD48c3Bhbj5IRVk8L3NwYW4+PC9wPjwvZGl2PmBcbiAqICAgIG5ld1ZOb2RlOiBgPGRpdj48cD48c3Bhbj5USEVSRTwvc3Bhbj48L3A+PC9kaXY+YFxuICpcbiAqICAgIFRoZW4gd2hlbiBjb21wYXJpbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBgPGRpdj5gIHRhZyB3ZSBjaGVjayB0aGUgZXF1YWxpdHlcbiAqICAgIG9mIHRoZSBWTm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGUgYDxwPmAgdGFncyBhbmQsIHNpbmNlIHRoZXkgYXJlIHRoZVxuICogICAgc2FtZSB0YWcgaW4gdGhlIHNhbWUgcG9zaXRpb24sIHdlJ2QgYmUgYWJsZSB0byBhdm9pZCBjb21wbGV0ZWx5XG4gKiAgICByZS1yZW5kZXJpbmcgdGhlIHN1YnRyZWUgdW5kZXIgdGhlbSB3aXRoIGEgbmV3IERPTSBlbGVtZW50IGFuZCB3b3VsZCBqdXN0XG4gKiAgICBjYWxsIG91dCB0byBgcGF0Y2hgIHRvIGhhbmRsZSByZWNvbmNpbGluZyB0aGVpciBjaGlsZHJlbiBhbmQgc28gb24uXG4gKlxuICogMy4gQ2hlY2ssIGZvciBib3RoIHdpbmRvd3MsIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICogICAgd2luZG93IGNvcnJlc3BvbmRzIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG90aGVyIHdpbmRvdy4gVGhpcyBpc1xuICogICAgYSBoZXVyaXN0aWMgd2hpY2ggd2lsbCBsZXQgdXMgaWRlbnRpZnkgX3NvbWVfIHNpdHVhdGlvbnMgaW4gd2hpY2hcbiAqICAgIGVsZW1lbnRzIGhhdmUgY2hhbmdlZCBwb3NpdGlvbiwgZm9yIGluc3RhbmNlIGl0IF9zaG91bGRfIGRldGVjdCB0aGF0IHRoZVxuICogICAgY2hpbGRyZW4gbm9kZXMgdGhlbXNlbHZlcyBoYXZlIG5vdCBjaGFuZ2VkIGJ1dCBtZXJlbHkgbW92ZWQgaW4gdGhlXG4gKiAgICBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiAgICBvbGRWTm9kZTogYDxkaXY+PGVsZW1lbnQtb25lIC8+PGVsZW1lbnQtdHdvIC8+PC9kaXY+YFxuICogICAgbmV3Vk5vZGU6IGA8ZGl2PjxlbGVtZW50LXR3byAvPjxlbGVtZW50LW9uZSAvPjwvZGl2PmBcbiAqXG4gKiAgICBJZiB3ZSBmaW5kIGNhc2VzIGxpa2UgdGhpcyB0aGVuIHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBjb25jcmV0ZSBET01cbiAqICAgIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1vdmVkIGNoaWxkcmVuIHRvIHdyaXRlIHRoZSByZS1vcmRlciB0byB0aGVcbiAqICAgIERPTS5cbiAqXG4gKiA0LiBGaW5hbGx5LCBpZiBWTm9kZXMgaGF2ZSB0aGUgYGtleWAgYXR0cmlidXRlIHNldCBvbiB0aGVtIHdlIGNoZWNrIGZvciBhbnlcbiAqICAgIG5vZGVzIGluIHRoZSBvbGQgY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgaW5cbiAqICAgIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbi4gSWYgd2UgZmluZCBzdWNoIGEgbm9kZSB3ZSBoYW5kbGUgY2FsbGluZ1xuICogICAgb3V0IHRvIGBwYXRjaGAsIG1vdmluZyByZWxldmFudCBET00gbm9kZXMsIGFuZCBzbyBvbiwgaW4gYWNjb3JkYW5jZSB3aXRoXG4gKiAgICB3aGF0IHdlIGZpbmQuXG4gKlxuICogRmluYWxseSwgb25jZSB3ZSd2ZSBuYXJyb3dlZCBvdXIgJ3dpbmRvd3MnIHRvIHRoZSBwb2ludCB0aGF0IGVpdGhlciBvZiB0aGVtXG4gKiBjb2xsYXBzZSAoaS5lLiB0aGV5IGhhdmUgbGVuZ3RoIDApIHdlIHRoZW4gaGFuZGxlIGFueSByZW1haW5pbmcgVk5vZGVcbiAqIGluc2VydGlvbiBvciBkZWxldGlvbiB0aGF0IG5lZWRzIHRvIGhhcHBlbiB0byBnZXQgYSBET00gc3RhdGUgdGhhdCBjb3JyZWN0bHlcbiAqIHJlZmxlY3RzIHRoZSBuZXcgY2hpbGQgVk5vZGVzLiBJZiwgZm9yIGluc3RhbmNlLCBhZnRlciBvdXIgd2luZG93IG9uIHRoZSBvbGRcbiAqIGNoaWxkcmVuIGhhcyBjb2xsYXBzZWQgd2Ugc3RpbGwgaGF2ZSBtb3JlIG5vZGVzIG9uIHRoZSBuZXcgY2hpbGRyZW4gdGhhdFxuICogd2UgaGF2ZW4ndCBkZWFsdCB3aXRoIHlldCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZW0sIG9yIGlmIHRoZSBuZXcgY2hpbGRyZW5cbiAqIGNvbGxhcHNlIGJ1dCB3ZSBzdGlsbCBoYXZlIHVuaGFuZGxlZCBfb2xkXyBjaGlsZHJlbiB0aGVuIHdlIG5lZWQgdG8gbWFrZVxuICogc3VyZSB0aGUgY29ycmVzcG9uZGluZyBET00gbm9kZXMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJlbnQgVk5vZGUgaXMgcmVuZGVyZWRcbiAqIEBwYXJhbSBvbGRDaCB0aGUgb2xkIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICogQHBhcmFtIG5ld1ZOb2RlIHRoZSBuZXcgVk5vZGUgd2hpY2ggd2lsbCByZXBsYWNlIHRoZSBwYXJlbnRcbiAqIEBwYXJhbSBuZXdDaCB0aGUgbmV3IGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICovXG5jb25zdCB1cGRhdGVDaGlsZHJlbiA9IChwYXJlbnRFbG0sIG9sZENoLCBuZXdWTm9kZSwgbmV3Q2gpID0+IHtcbiAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICBsZXQgbm9kZTtcbiAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICBpZiAob2xkU3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBWTm9kZSBtaWdodCBoYXZlIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgIH0gZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgIC8vIGlmIHRoZSBzdGFydCBub2RlcyBhcmUgdGhlIHNhbWUgdGhlbiB3ZSBzaG91bGQgcGF0Y2ggdGhlIG5ldyBWTm9kZVxuICAgICAgLy8gb250byB0aGUgb2xkIG9uZSwgYW5kIGluY3JlbWVudCBvdXIgYG5ld1N0YXJ0SWR4YCBhbmQgYG9sZFN0YXJ0SWR4YFxuICAgICAgLy8gaW5kaWNlcyB0byByZWZsZWN0IHRoYXQuIFdlIGRvbid0IG5lZWQgdG8gbW92ZSBhbnkgRE9NIE5vZGVzIGFyb3VuZFxuICAgICAgLy8gc2luY2UgdGhpbmdzIGFyZSBtYXRjaGVkIHVwIGluIG9yZGVyLlxuICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgfSBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAvLyBsaWtld2lzZSwgaWYgdGhlIGVuZCBub2RlcyBhcmUgdGhlIHNhbWUgd2UgcGF0Y2ggbmV3IG9udG8gb2xkIGFuZFxuICAgICAgLy8gZGVjcmVtZW50IG91ciBlbmQgaW5kaWNlcywgYW5kIGFsc28gbGlrZXdpc2UgaW4gdGhpcyBjYXNlIHdlIGRvbid0XG4gICAgICAvLyBuZWVkIHRvIG1vdmUgYW55IERPTSBOb2Rlcy5cbiAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgdGhlIGVsZW1lbnQgZm9yIGBvbGRTdGFydFZub2RlYCBpbnRvIGEgcG9zaXRpb24gd2hpY2hcbiAgICAgIC8vIHdpbGwgYmUgYXBwcm9wcmlhdGUgZm9yIGBuZXdFbmRWbm9kZWAuIEZvciB0aGlzIHdlIGNhbiB1c2VcbiAgICAgIC8vIGAuaW5zZXJ0QmVmb3JlYCBhbmQgYG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nYC4gSWYgdGhlcmUgaXMgYVxuICAgICAgLy8gc2libGluZyBmb3IgYG9sZEVuZFZub2RlLiRlbG0kYCB0aGVuIHdlIHdhbnQgdG8gbW92ZSB0aGUgRE9NIG5vZGUgZm9yXG4gICAgICAvLyBgb2xkU3RhcnRWbm9kZWAgYmV0d2VlbiBgb2xkRW5kVm5vZGVgIGFuZCBpdCdzIHNpYmxpbmcsIGxpa2Ugc286XG4gICAgICAvL1xuICAgICAgLy8gPG9sZC1zdGFydC1ub2RlIC8+XG4gICAgICAvLyA8c29tZS1pbnRlcnZlbmluZy1ub2RlIC8+XG4gICAgICAvLyA8b2xkLWVuZC1ub2RlIC8+XG4gICAgICAvLyA8IS0tIC0+ICAgICAgICAgICAgICA8LS0gYG9sZFN0YXJ0Vm5vZGUuJGVsbSRgIHNob3VsZCBiZSBpbnNlcnRlZCBoZXJlXG4gICAgICAvLyA8bmV4dC1zaWJsaW5nIC8+XG4gICAgICAvL1xuICAgICAgLy8gSWYgaW5zdGVhZCBgb2xkRW5kVm5vZGUuJGVsbSRgIGhhcyBubyBzaWJsaW5nIHRoZW4gd2UganVzdCB3YW50IHRvIHB1dFxuICAgICAgLy8gdGhlIG5vZGUgZm9yIGBvbGRTdGFydFZub2RlYCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZHJlbiBvZlxuICAgICAgLy8gYHBhcmVudEVsbWAuIEx1Y2tpbHksIGBOb2RlLm5leHRTaWJsaW5nYCB3aWxsIHJldHVybiBgbnVsbGAgaWYgdGhlcmVcbiAgICAgIC8vIGFyZW4ndCBhbnkgc2libGluZ3MsIGFuZCBwYXNzaW5nIGBudWxsYCB0byBgTm9kZS5pbnNlcnRCZWZvcmVgIHdpbGxcbiAgICAgIC8vIGFwcGVuZCBpdCB0byB0aGUgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50LlxuICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgLy8gV2UndmUgYWxyZWFkeSBjaGVja2VkIGFib3ZlIGlmIGBvbGRTdGFydFZub2RlYCBhbmQgYG5ld1N0YXJ0Vm5vZGVgIGFyZVxuICAgICAgLy8gdGhlIHNhbWUgbm9kZSwgc28gc2luY2Ugd2UncmUgaGVyZSB3ZSBrbm93IHRoYXQgdGhleSBhcmUgbm90LiBUaHVzIHdlXG4gICAgICAvLyBjYW4gbW92ZSB0aGUgZWxlbWVudCBmb3IgYG9sZEVuZFZub2RlYCBfYmVmb3JlXyB0aGUgZWxlbWVudCBmb3JcbiAgICAgIC8vIGBvbGRTdGFydFZub2RlYCwgbGVhdmluZyBgb2xkU3RhcnRWbm9kZWAgdG8gYmUgcmVjb25jaWxlZCBpbiB0aGVcbiAgICAgIC8vIGZ1dHVyZS5cbiAgICAgIHBhcmVudEVsbS5pbnNlcnRCZWZvcmUob2xkRW5kVm5vZGUuJGVsbSQsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2UgZWl0aGVyIGRpZG4ndCBmaW5kIGFuIGVsZW1lbnQgaW4gdGhlIG9sZCBjaGlsZHJlbiB0aGF0IG1hdGNoZXNcbiAgICAgICAgLy8gdGhlIGtleSBvZiB0aGUgZmlyc3QgbmV3IGNoaWxkIE9SIHRoZSBidWlsZCBpcyBub3QgdXNpbmcgYGtleWBcbiAgICAgICAgLy8gYXR0cmlidXRlcyBhdCBhbGwuIEluIGVpdGhlciBjYXNlIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGVsZW1lbnRcbiAgICAgICAgLy8gZm9yIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBuZXdTdGFydElkeCk7XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIC8vIGlmIHdlIGNyZWF0ZWQgYSBuZXcgbm9kZSB0aGVuIGhhbmRsZSBpbnNlcnRpbmcgaXQgdG8gdGhlIERPTVxuICAgICAgICB7XG4gICAgICAgICAgb2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAvLyB3ZSBoYXZlIHNvbWUgbW9yZSBuZXcgbm9kZXMgdG8gYWRkIHdoaWNoIGRvbid0IG1hdGNoIHVwIHdpdGggb2xkIG5vZGVzXG4gICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgbmV3Q2hbbmV3RW5kSWR4ICsgMV0gPT0gbnVsbCA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS4kZWxtJCwgbmV3Vk5vZGUsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4KTtcbiAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgIC8vIHRoZXJlIGFyZSBub2RlcyBpbiB0aGUgYG9sZENoYCBhcnJheSB3aGljaCBubyBsb25nZXIgY29ycmVzcG9uZCB0byBub2Rlc1xuICAgIC8vIGluIHRoZSBuZXcgYXJyYXksIHNvIGxldHMgcmVtb3ZlIHRoZW0gKHdoaWNoIGVudGFpbHMgY2xlYW5pbmcgdXAgdGhlXG4gICAgLy8gcmVsZXZhbnQgRE9NIG5vZGVzKVxuICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gIH1cbn07XG4vKipcbiAqIENvbXBhcmUgdHdvIFZOb2RlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgdGhlIHNhbWVcbiAqXG4gKiAqKk5CKio6IFRoaXMgZnVuY3Rpb24gaXMgYW4gZXF1YWxpdHkgX2hldXJpc3RpY18gYmFzZWQgb24gdGhlIGF2YWlsYWJsZVxuICogaW5mb3JtYXRpb24gc2V0IG9uIHRoZSB0d28gVk5vZGVzIGFuZCBjYW4gYmUgbWlzbGVhZGluZyB1bmRlciBjZXJ0YWluXG4gKiBjaXJjdW1zdGFuY2VzLiBJbiBwYXJ0aWN1bGFyLCBpZiB0aGUgdHdvIG5vZGVzIGRvIG5vdCBoYXZlIGBrZXlgIGF0dHJzXG4gKiAoYXZhaWxhYmxlIHVuZGVyIGAka2V5JGAgb24gVk5vZGVzKSB0aGVuIHRoZSBmdW5jdGlvbiBmYWxscyBiYWNrIG9uIG1lcmVseVxuICogY2hlY2tpbmcgdGhhdCB0aGV5IGhhdmUgdGhlIHNhbWUgdGFnLlxuICpcbiAqIFNvLCBpbiBvdGhlciB3b3JkcywgaWYgYGtleWAgYXR0cnMgYXJlIG5vdCBzZXQgb24gVk5vZGVzIHdoaWNoIG1heSBiZVxuICogY2hhbmdpbmcgb3JkZXIgd2l0aGluIGEgYGNoaWxkcmVuYCBhcnJheSBvciBzb21ldGhpbmcgYWxvbmcgdGhvc2UgbGluZXMgdGhlblxuICogd2UgY291bGQgb2J0YWluIGEgZmFsc2UgbmVnYXRpdmUgYW5kIHRoZW4gaGF2ZSB0byBkbyBuZWVkbGVzcyByZS1yZW5kZXJpbmdcbiAqIChpLmUuIHdlJ2Qgc2F5IHR3byBWTm9kZXMgYXJlbid0IGVxdWFsIHdoZW4gaW4gZmFjdCB0aGV5IHNob3VsZCBiZSkuXG4gKlxuICogQHBhcmFtIGxlZnRWTm9kZSB0aGUgZmlyc3QgVk5vZGUgdG8gY2hlY2tcbiAqIEBwYXJhbSByaWdodFZOb2RlIHRoZSBzZWNvbmQgVk5vZGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhleSdyZSBlcXVhbCBvciBub3RcbiAqL1xuY29uc3QgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlKSA9PiB7XG4gIC8vIGNvbXBhcmUgaWYgdHdvIHZub2RlIHRvIHNlZSBpZiB0aGV5J3JlIFwidGVjaG5pY2FsbHlcIiB0aGUgc2FtZVxuICAvLyBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgZWxlbWVudCB0YWcsIGFuZCBzYW1lIGtleSB0byBiZSB0aGUgc2FtZVxuICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogSGFuZGxlIHJlY29uY2lsaW5nIGFuIG91dGRhdGVkIFZOb2RlIHdpdGggYSBuZXcgb25lIHdoaWNoIGNvcnJlc3BvbmRzIHRvXG4gKiBpdC4gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIGZsdXNoaW5nIHVwZGF0ZXMgdG8gdGhlIERPTSBhbmQgcmVjb25jaWxpbmcgdGhlXG4gKiBjaGlsZHJlbiBvZiB0aGUgdHdvIG5vZGVzIChpZiBhbnkpLlxuICpcbiAqIEBwYXJhbSBvbGRWTm9kZSBhbiBvbGQgVk5vZGUgd2hvc2UgRE9NIGVsZW1lbnQgYW5kIGNoaWxkcmVuIHdlIHdhbnQgdG8gdXBkYXRlXG4gKiBAcGFyYW0gbmV3Vk5vZGUgYSBuZXcgVk5vZGUgcmVwcmVzZW50aW5nIGFuIHVwZGF0ZWQgdmVyc2lvbiBvZiB0aGUgb2xkIG9uZVxuICovXG5jb25zdCBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUpID0+IHtcbiAgY29uc3QgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlLiRjaGlsZHJlbiQ7XG4gIGNvbnN0IHRhZyA9IG5ld1ZOb2RlLiR0YWckO1xuICBjb25zdCB0ZXh0ID0gbmV3Vk5vZGUuJHRleHQkO1xuICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgIHtcbiAgICAgIC8vIHRlc3QgaWYgd2UncmUgcmVuZGVyaW5nIGFuIHN2ZyBlbGVtZW50LCBvciBzdGlsbCByZW5kZXJpbmcgbm9kZXMgaW5zaWRlIG9mIG9uZVxuICAgICAgLy8gb25seSBhZGQgdGhpcyB0byB0aGUgd2hlbiB0aGUgY29tcGlsZXIgc2VlcyB3ZSdyZSB1c2luZyBhbiBzdmcgc29tZXdoZXJlXG4gICAgICBpc1N2Z01vZGUgPSB0YWcgPT09ICdzdmcnID8gdHJ1ZSA6IHRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgfVxuICAgIHtcbiAgICAgIHtcbiAgICAgICAgLy8gZWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IHJlbmRlciBvZiBhbiBlbGVtZW50IE9SIGl0J3MgYW4gdXBkYXRlXG4gICAgICAgIC8vIEFORCB3ZSBhbHJlYWR5IGtub3cgaXQncyBwb3NzaWJsZSBpdCBjb3VsZCBoYXZlIGNoYW5nZWRcbiAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQob2xkVk5vZGUsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwgJiYgbmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIC8vIGxvb2tzIGxpa2UgdGhlcmUncyBjaGlsZCB2bm9kZXMgZm9yIGJvdGggdGhlIG9sZCBhbmQgbmV3IHZub2Rlc1xuICAgICAgLy8gc28gd2UgbmVlZCB0byBjYWxsIGB1cGRhdGVDaGlsZHJlbmAgdG8gcmVjb25jaWxlIHRoZW1cbiAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgLy8gbm8gb2xkIGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBuZXcgY2hpbGQgdm5vZGVzIHRvIGFkZFxuICAgICAgaWYgKG9sZFZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICBlbG0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB0aGUgbmV3IHZub2RlIGNoaWxkcmVuXG4gICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBuZXdWTm9kZSwgbmV3Q2hpbGRyZW4sIDAsIG5ld0NoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIC8vIG5vIG5ldyBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgb2xkIGNoaWxkIHZub2RlcyB0byByZW1vdmVcbiAgICAgIHJlbW92ZVZub2RlcyhvbGRDaGlsZHJlbiwgMCwgb2xkQ2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGlmIChpc1N2Z01vZGUgJiYgdGFnID09PSAnc3ZnJykge1xuICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9sZFZOb2RlLiR0ZXh0JCAhPT0gdGV4dCkge1xuICAgIC8vIHVwZGF0ZSB0aGUgdGV4dCBjb250ZW50IGZvciB0aGUgdGV4dCBvbmx5IHZub2RlXG4gICAgLy8gYW5kIGFsc28gb25seSBpZiB0aGUgdGV4dCBpcyBkaWZmZXJlbnQgdGhhbiBiZWZvcmVcbiAgICBlbG0uZGF0YSA9IHRleHQ7XG4gIH1cbn07XG4vKipcbiAqICdOdWxsaWZ5JyBhbnkgVkRvbSBgcmVmYCBjYWxsYmFja3Mgb24gYSBWRG9tIG5vZGUgb3IgaXRzIGNoaWxkcmVuIGJ5XG4gKiBjYWxsaW5nIHRoZW0gd2l0aCBgbnVsbGAuIFRoaXMgc2lnbmFscyB0aGF0IHRoZSBET00gZWxlbWVudCBjb3JyZXNwb25kaW5nIHRvXG4gKiB0aGUgVkRvbSBub2RlIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB2Tm9kZSBhIHZpcnR1YWwgRE9NIG5vZGVcbiAqL1xuY29uc3QgbnVsbGlmeVZOb2RlUmVmcyA9IHZOb2RlID0+IHtcbiAge1xuICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgdk5vZGUuJGNoaWxkcmVuJCAmJiB2Tm9kZS4kY2hpbGRyZW4kLm1hcChudWxsaWZ5Vk5vZGVSZWZzKTtcbiAgfVxufTtcbi8qKlxuICogVGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIFN0ZW5jaWwncyB2aXJ0dWFsIERPTS1iYXNlZCByZW5kZXJpbmcgZW5naW5lXG4gKlxuICogR2l2ZW4gYSB7QGxpbmsgZC5Ib3N0UmVmfSBjb250YWluZXIgYW5kIHNvbWUgdmlydHVhbCBET00gbm9kZXMsIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNyZWF0aW5nIGEgdmlydHVhbCBET00gdHJlZSB3aXRoIGEgc2luZ2xlIHJvb3QsIHBhdGNoaW5nXG4gKiB0aGUgY3VycmVudCB2aXJ0dWFsIERPTSB0cmVlIG9udG8gYW4gb2xkIG9uZSAoaWYgYW55KSwgZGVhbGluZyB3aXRoIHNsb3RcbiAqIHJlbG9jYXRpb24sIGFuZCByZWZsZWN0aW5nIGF0dHJpYnV0ZXMuXG4gKlxuICogQHBhcmFtIGhvc3RSZWYgZGF0YSBuZWVkZWQgdG8gcm9vdCBhbmQgcmVuZGVyIHRoZSB2aXJ0dWFsIERPTSB0cmVlLCBzdWNoIGFzXG4gKiB0aGUgRE9NIG5vZGUgaW50byB3aGljaCBpdCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKiBAcGFyYW0gcmVuZGVyRm5SZXN1bHRzIHRoZSB2aXJ0dWFsIERPTSBub2RlcyB0byBiZSByZW5kZXJlZFxuICovXG5jb25zdCByZW5kZXJWZG9tID0gKGhvc3RSZWYsIHJlbmRlckZuUmVzdWx0cykgPT4ge1xuICBjb25zdCBob3N0RWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBvbGRWTm9kZSA9IGhvc3RSZWYuJHZub2RlJCB8fCBuZXdWTm9kZShudWxsLCBudWxsKTtcbiAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0KHJlbmRlckZuUmVzdWx0cykgPyByZW5kZXJGblJlc3VsdHMgOiBoKG51bGwsIG51bGwsIHJlbmRlckZuUmVzdWx0cyk7XG4gIGhvc3RUYWdOYW1lID0gaG9zdEVsbS50YWdOYW1lO1xuICByb290Vm5vZGUuJHRhZyQgPSBudWxsO1xuICByb290Vm5vZGUuJGZsYWdzJCB8PSA0IC8qIFZOT0RFX0ZMQUdTLmlzSG9zdCAqLztcbiAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICByb290Vm5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCA9IGhvc3RFbG0uc2hhZG93Um9vdCB8fCBob3N0RWxtO1xuICB7XG4gICAgc2NvcGVJZCA9IGhvc3RFbG1bJ3Mtc2MnXTtcbiAgfVxuICAvLyBzeW5jaHJvbm91cyBwYXRjaFxuICBwYXRjaChvbGRWTm9kZSwgcm9vdFZub2RlKTtcbn07XG5jb25zdCBhdHRhY2hUb0FuY2VzdG9yID0gKGhvc3RSZWYsIGFuY2VzdG9yQ29tcG9uZW50KSA9PiB7XG4gIGlmIChhbmNlc3RvckNvbXBvbmVudCAmJiAhaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10ucHVzaChuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSByKSk7XG4gIH1cbn07XG5jb25zdCBzY2hlZHVsZVVwZGF0ZSA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgfVxuICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovKSB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi87XG4gICAgcmV0dXJuO1xuICB9XG4gIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgLy8gdGhlcmUgaXMgbm8gYW5jZXN0b3IgY29tcG9uZW50IG9yIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgLy8gaGFzIGFscmVhZHkgZmlyZWQgb2ZmIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHRoZW5cbiAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gIGNvbnN0IGRpc3BhdGNoID0gKCkgPT4gZGlzcGF0Y2hIb29rcyhob3N0UmVmLCBpc0luaXRpYWxMb2FkKTtcbiAgcmV0dXJuIHdyaXRlVGFzayhkaXNwYXRjaCk7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBpbml0aWFsLXJlbmRlciBhbmQgdXBkYXRlIGxpZmVjeWNsZSBob29rcywgZW5xdWV1aW5nIGNhbGxzIHRvXG4gKiBjb21wb25lbnQgbGlmZWN5Y2xlIG1ldGhvZHMgbGlrZSBgY29tcG9uZW50V2lsbExvYWRgIGFzIHdlbGwgYXNcbiAqIHtAbGluayB1cGRhdGVDb21wb25lbnR9LCB3aGljaCB3aWxsIGtpY2sgb2ZmIHRoZSB2aXJ0dWFsIERPTSByZS1yZW5kZXIuXG4gKlxuICogQHBhcmFtIGhvc3RSZWYgYSByZWZlcmVuY2UgdG8gYSBob3N0IERPTSBub2RlXG4gKiBAcGFyYW0gaXNJbml0aWFsTG9hZCB3aGV0aGVyIHdlJ3JlIG9uIHRoZSBpbml0aWFsIGxvYWQgb3Igbm90XG4gKiBAcmV0dXJucyBhbiBlbXB0eSBQcm9taXNlIHdoaWNoIGlzIHVzZWQgdG8gZW5xdWV1ZSBhIHNlcmllcyBvZiBvcGVyYXRpb25zIGZvclxuICogdGhlIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgY29uc3QgZW5kU2NoZWR1bGUgPSBjcmVhdGVUaW1lKCdzY2hlZHVsZVVwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgLy8gV2UncmUgZ29pbmcgdG8gdXNlIHRoaXMgdmFyaWFibGUgdG9nZXRoZXIgd2l0aCBgZW5xdWV1ZWAgdG8gaW1wbGVtZW50IGFcbiAgLy8gbGl0dGxlIHByb21pc2UtYmFzZWQgcXVldWUuIFdlIHN0YXJ0IG91dCB3aXRoIGl0IGB1bmRlZmluZWRgLiBXaGVuIHdlIGFkZFxuICAvLyB0aGUgZmlyc3QgZnVuY3Rpb24gdG8gdGhlIHF1ZXVlIHdlJ2xsIHNldCB0aGlzIHZhcmlhYmxlIHRvIGJlIHRoYXRcbiAgLy8gZnVuY3Rpb24ncyByZXR1cm4gdmFsdWUuIFdoZW4gd2UgYXR0ZW1wdCB0byBhZGQgc3Vic2VxdWVudCB2YWx1ZXMgdG8gdGhlXG4gIC8vIHF1ZXVlIHdlJ2xsIGNoZWNrIHRoYXQgdmFsdWUgYW5kLCBpZiBpdCB3YXMgYSBgUHJvbWlzZWAsIHdlJ2xsIHRoZW4gY2hhaW5cbiAgLy8gdGhlIG5ldyBmdW5jdGlvbiBvZmYgb2YgdGhhdCBgUHJvbWlzZWAgdXNpbmcgYC50aGVuKClgLiBUaGlzIHdpbGwgZ2l2ZSBvdXJcbiAgLy8gcXVldWUgdHdvIG5pY2UgcHJvcGVydGllczpcbiAgLy9cbiAgLy8gMS4gSWYgYWxsIGZ1bmN0aW9ucyBhZGRlZCB0byB0aGUgcXVldWUgYXJlIHN5bmNocm9ub3VzIHRoZXknbGwgYmUgY2FsbGVkXG4gIC8vICAgIHN5bmNocm9ub3VzbHkgcmlnaHQgYXdheS5cbiAgLy8gMi4gSWYgYWxsIGZ1bmN0aW9ucyBhZGRlZCB0byB0aGUgcXVldWUgYXJlIGFzeW5jaHJvbm91cyB0aGV5J2xsIGFsbCBiZVxuICAvLyAgICBjYWxsZWQgaW4gb3JkZXIgYWZ0ZXIgYGRpc3BhdGNoSG9va3NgIGV4aXRzLlxuICBsZXQgbWF5YmVQcm9taXNlO1xuICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyNTYgLyogSE9TVF9GTEFHUy5pc0xpc3RlblJlYWR5ICovO1xuICAgICAgaWYgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQpIHtcbiAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJC5tYXAoKFttZXRob2ROYW1lLCBldmVudF0pID0+IHNhZmVDYWxsKGluc3RhbmNlLCBtZXRob2ROYW1lLCBldmVudCkpO1xuICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbmRTY2hlZHVsZSgpO1xuICByZXR1cm4gZW5xdWV1ZShtYXliZVByb21pc2UsICgpID0+IHVwZGF0ZUNvbXBvbmVudChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkpO1xufTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGEgUHJvbWlzZSB0byBpbXBsZW1lbnQgYSBzaW1wbGUgZmlyc3QtaW4sIGZpcnN0LW91dCBxdWV1ZVxuICogb2YgZnVuY3Rpb25zIHRvIGJlIGNhbGxlZC5cbiAqXG4gKiBUaGUgcXVldWUgaXMgb3JkZXJlZCBvbiB0aGUgYmFzaXMgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LiBJZiBpdCdzXG4gKiBgdW5kZWZpbmVkYCwgdGhlbiBub3RoaW5nIGlzIG9uIHRoZSBxdWV1ZSB5ZXQsIHNvIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBjYW5cbiAqIGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5IChhbHRob3VnaCBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBtYXkgcmV0dXJuIGFcbiAqIGBQcm9taXNlYCkuIFRoZSBpZGVhIGlzIHRoYXQgdGhlbiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZW5xdWV1ZWluZ1xuICogb3BlcmF0aW9uIGlzIGtlcHQgYXJvdW5kLCBzbyB0aGF0IGlmIGl0IHdhcyBhIGBQcm9taXNlYCB0aGVuIHN1YnNlcXVlbnRcbiAqIGZ1bmN0aW9ucyBjYW4gYmUgZW5xdWV1ZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGFnYWluIHdpdGggdGhhdCBgUHJvbWlzZWBcbiAqIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gbWF5YmVQcm9taXNlIGVpdGhlciBhIGBQcm9taXNlYCB3aGljaCBzaG91bGQgcmVzb2x2ZSBiZWZvcmUgdGhlIG5leHQgZnVuY3Rpb24gaXMgY2FsbGVkIG9yIGFuICdlbXB0eScgc2VudGluZWxcbiAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRvIGVucXVldWVcbiAqIEByZXR1cm5zIGVpdGhlciBhIGBQcm9taXNlYCBvciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5jb25zdCBlbnF1ZXVlID0gKG1heWJlUHJvbWlzZSwgZm4pID0+IGlzUHJvbWlzZXkobWF5YmVQcm9taXNlKSA/IG1heWJlUHJvbWlzZS50aGVuKGZuKSA6IGZuKCk7XG4vKipcbiAqIENoZWNrIHRoYXQgYSB2YWx1ZSBpcyBhIGBQcm9taXNlYC4gVG8gY2hlY2ssIHdlIGZpcnN0IHNlZSBpZiB0aGUgdmFsdWUgaXMgYW5cbiAqIGluc3RhbmNlIG9mIHRoZSBgUHJvbWlzZWAgZ2xvYmFsLiBJbiBhIGZldyBjaXJjdW1zdGFuY2VzLCBpbiBwYXJ0aWN1bGFyIGlmXG4gKiB0aGUgZ2xvYmFsIGhhcyBiZWVuIG92ZXJ3cml0dGVuLCB0aGlzIGlzIGNvdWxkIGJlIG1pc2xlYWRpbmcsIHNvIHdlIGFsc28gZG9cbiAqIGEgbGl0dGxlICdkdWNrIHR5cGluZycgY2hlY2sgdG8gc2VlIGlmIHRoZSBgLnRoZW5gIHByb3BlcnR5IG9mIHRoZSB2YWx1ZSBpc1xuICogZGVmaW5lZCBhbmQgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gbWF5YmVQcm9taXNlIGl0IG1pZ2h0IGJlIGEgcHJvbWlzZSFcbiAqIEByZXR1cm5zIHdoZXRoZXIgaXQgaXMgb3Igbm90XG4gKi9cbmNvbnN0IGlzUHJvbWlzZXkgPSBtYXliZVByb21pc2UgPT4gbWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCBtYXliZVByb21pc2UgJiYgbWF5YmVQcm9taXNlLnRoZW4gJiYgdHlwZW9mIG1heWJlUHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nO1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRVcGRhdGUgPSBjcmVhdGVUaW1lKCd1cGRhdGUnLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCByYyA9IGVsbVsncy1yYyddO1xuICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgIC8vIERPTSBXUklURSFcbiAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gIH1cbiAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAge1xuICAgIGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UpO1xuICB9XG4gIGlmIChyYykge1xuICAgIC8vIG9rLCBzbyB0dXJucyBvdXQgdGhlcmUgYXJlIHNvbWUgY2hpbGQgaG9zdCBlbGVtZW50c1xuICAgIC8vIHdhaXRpbmcgb24gdGhpcyBwYXJlbnQgZWxlbWVudCB0byBsb2FkXG4gICAgLy8gbGV0J3MgZmlyZSBvZmYgYWxsIHVwZGF0ZSBjYWxsYmFja3Mgd2FpdGluZ1xuICAgIHJjLm1hcChjYiA9PiBjYigpKTtcbiAgICBlbG1bJ3MtcmMnXSA9IHVuZGVmaW5lZDtcbiAgfVxuICBlbmRSZW5kZXIoKTtcbiAgZW5kVXBkYXRlKCk7XG4gIHtcbiAgICBjb25zdCBjaGlsZHJlblByb21pc2VzID0gKF9hID0gZWxtWydzLXAnXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwb3N0VXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UuYWxsKGNoaWxkcmVuUHJvbWlzZXMpLnRoZW4ocG9zdFVwZGF0ZSk7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovO1xuICAgICAgY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGNhbGxSZW5kZXIgPSAoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSkgPT4ge1xuICB0cnkge1xuICAgIGluc3RhbmNlID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gICAge1xuICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovO1xuICAgIH1cbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovO1xuICAgIH1cbiAgICB7XG4gICAgICB7XG4gICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgIC8vIG9yIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBjc3MgY2xhc3MvYXR0cnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIHtcbiAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IHBvc3RVcGRhdGVDb21wb25lbnQgPSBob3N0UmVmID0+IHtcbiAgY29uc3QgdGFnTmFtZSA9IGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJDtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQ7XG4gIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiA2NCAvKiBIT1NUX0ZMQUdTLmhhc0xvYWRlZENvbXBvbmVudCAqLykpIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAge1xuICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgYWRkSHlkcmF0ZWRGbGFnKGVsbSk7XG4gICAgfVxuICAgIHtcbiAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgIH1cbiAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAge1xuICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgIGFwcERpZExvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW5kUG9zdFVwZGF0ZSgpO1xuICB9XG4gIHtcbiAgICBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQoZWxtKTtcbiAgfVxuICAvLyBsb2FkIGV2ZW50cyBmaXJlIGZyb20gYm90dG9tIHRvIHRvcFxuICAvLyB0aGUgZGVlcGVzdCBlbGVtZW50cyBsb2FkIGZpcnN0IHRoZW4gYnViYmxlcyB1cFxuICB7XG4gICAgaWYgKGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQpIHtcbiAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQoKTtcbiAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKSB7XG4gICAgICBuZXh0VGljaygoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSkpO1xuICAgIH1cbiAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKTtcbiAgfVxuICAvLyAoIOKAol/igKIpXG4gIC8vICgg4oCiX+KAoik+4oyQ4pagLeKWoFxuICAvLyAo4oyQ4pagX+KWoClcbn07XG5jb25zdCBmb3JjZVVwZGF0ZSA9IHJlZiA9PiB7XG4gIHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkLmlzQ29ubmVjdGVkO1xuICAgIGlmIChpc0Nvbm5lY3RlZCAmJiAoaG9zdFJlZi4kZmxhZ3MkICYgKDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLyB8IDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pKSA9PT0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSB7XG4gICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgXCJ0cnVlXCIgd2hlbiB0aGUgZm9yY2VkIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNjaGVkdWxlZFxuICAgIHJldHVybiBpc0Nvbm5lY3RlZDtcbiAgfVxufTtcbmNvbnN0IGFwcERpZExvYWQgPSB3aG8gPT4ge1xuICAvLyBvbiBhcHBsb2FkXG4gIC8vIHdlIGhhdmUgZmluaXNoIHRoZSBmaXJzdCBiaWcgaW5pdGlhbCByZW5kZXJcbiAge1xuICAgIGFkZEh5ZHJhdGVkRmxhZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuICBuZXh0VGljaygoKSA9PiBlbWl0RXZlbnQod2luLCAnYXBwbG9hZCcsIHtcbiAgICBkZXRhaWw6IHtcbiAgICAgIG5hbWVzcGFjZTogTkFNRVNQQUNFXG4gICAgfVxuICB9KSk7XG59O1xuY29uc3Qgc2FmZUNhbGwgPSAoaW5zdGFuY2UsIG1ldGhvZCwgYXJnKSA9PiB7XG4gIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVttZXRob2RdKGFyZyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IGFkZEh5ZHJhdGVkRmxhZyA9IGVsbSA9PiBlbG0uY2xhc3NMaXN0LmFkZCgnaHlkcmF0ZWQnKTtcbmNvbnN0IGdldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUpID0+IGdldEhvc3RSZWYocmVmKS4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG5jb25zdCBzZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lLCBuZXdWYWwsIGNtcE1ldGEpID0+IHtcbiAgLy8gY2hlY2sgb3VyIG5ldyBwcm9wZXJ0eSB2YWx1ZSBhZ2FpbnN0IG91ciBpbnRlcm5hbCB2YWx1ZVxuICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgY29uc3QgZmxhZ3MgPSBob3N0UmVmLiRmbGFncyQ7XG4gIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgLy8gZXhwbGljaXRseSBjaGVjayBmb3IgTmFOIG9uIGJvdGggc2lkZXMsIGFzIGBOYU4gPT09IE5hTmAgaXMgYWx3YXlzIGZhbHNlXG4gIGNvbnN0IGFyZUJvdGhOYU4gPSBOdW1iZXIuaXNOYU4ob2xkVmFsKSAmJiBOdW1iZXIuaXNOYU4obmV3VmFsKTtcbiAgY29uc3QgZGlkVmFsdWVDaGFuZ2UgPSBuZXdWYWwgIT09IG9sZFZhbCAmJiAhYXJlQm90aE5hTjtcbiAgaWYgKCghKGZsYWdzICYgOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdW5kZWZpbmVkKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgIC8vIGdhZHpvb2tzISB0aGUgcHJvcGVydHkncyB2YWx1ZSBoYXMgY2hhbmdlZCEhXG4gICAgLy8gc2V0IG91ciBuZXcgdmFsdWUhXG4gICAgaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLnNldChwcm9wTmFtZSwgbmV3VmFsKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGlmICgoZmxhZ3MgJiAoMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovIHwgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAvLyBidXQgb25seSBpZiB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkLCBvdGhlcndpc2UganVzdCBjaGlsbCBvdXRcbiAgICAgICAgLy8gcXVldWUgdGhhdCB3ZSBuZWVkIHRvIGRvIGFuIHVwZGF0ZSwgYnV0IGRvbid0IHdvcnJ5IGFib3V0IHF1ZXVpbmdcbiAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBBdHRhY2ggYSBzZXJpZXMgb2YgcnVudGltZSBjb25zdHJ1Y3RzIHRvIGEgY29tcGlsZWQgU3RlbmNpbCBjb21wb25lbnRcbiAqIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgZ2V0dGVycyBhbmQgc2V0dGVycyBmb3IgdGhlIGBAUHJvcGAgYW5kIGBAU3RhdGVgXG4gKiBkZWNvcmF0b3JzLCBjYWxsYmFja3MgZm9yIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UsIGFuZCBzbyBvbi5cbiAqXG4gKiBAcGFyYW0gQ3N0ciB0aGUgY29uc3RydWN0b3IgZm9yIGEgY29tcG9uZW50IHRoYXQgd2UgbmVlZCB0byBwcm9jZXNzXG4gKiBAcGFyYW0gY21wTWV0YSBtZXRhZGF0YSBjb2xsZWN0ZWQgcHJldmlvdXNseSBhYm91dCB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0gZmxhZ3MgYSBudW1iZXIgdXNlZCB0byBzdG9yZSBhIHNlcmllcyBvZiBiaXQgZmxhZ3NcbiAqIEByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzYW1lIGNvbnN0cnVjdG9yIHBhc3NlZCBpbiAoYnV0IG5vdyBtdXRhdGVkKVxuICovXG5jb25zdCBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICBpZiAoY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAvLyBJdCdzIGJldHRlciB0byBoYXZlIGEgY29uc3QgdGhhbiB0d28gT2JqZWN0LmVudHJpZXMoKVxuICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCk7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ3N0ci5wcm90b3R5cGU7XG4gICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gfHwgZmxhZ3MgJiAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8gJiYgbWVtYmVyRmxhZ3MgJiAzMiAvKiBNRU1CRVJfRkxBR1MuU3RhdGUgKi8pIHtcbiAgICAgICAgLy8gcHJveHlDb21wb25lbnQgLSBwcm9wXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgZ2V0IHZhbHVlXG4gICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBzZXQgdmFsdWVcbiAgICAgICAgICAgIHNldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBjbXBNZXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmbGFncyAmIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gJiYgbWVtYmVyRmxhZ3MgJiA2NCAvKiBNRU1CRVJfRkxBR1MuTWV0aG9kICovKSB7XG4gICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmbGFncyAmIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pIHtcbiAgICAgIGNvbnN0IGF0dHJOYW1lVG9Qcm9wTmFtZSA9IG5ldyBNYXAoKTtcbiAgICAgIHByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgcGx0LmptcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhdHRyTmFtZVRvUHJvcE5hbWUuZ2V0KGF0dHJOYW1lKTtcbiAgICAgICAgICAvLyAgSW4gYSB3ZWIgY29tcG9uZW50IGxpZmVjeWNsZSB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHJ1bnMgcHJpb3IgdG8gY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAvLyAgaW4gdGhlIGNhc2Ugd2hlcmUgYW4gYXR0cmlidXRlIHdhcyBzZXQgaW5saW5lLlxuICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgVGhlcmUgaXMgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIHNldHMgdGhlIGF0dHJpYnV0ZSBpbmxpbmUgb24gYSBjdXN0b20gZWxlbWVudCBhbmQgdGhlblxuICAgICAgICAgIC8vICBwcm9ncmFtbWF0aWNhbGx5IGNoYW5nZXMgaXQgYmVmb3JlIGl0IGhhcyBiZWVuIHVwZ3JhZGVkIGFzIHNob3duIGJlbG93OlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAvLyAgICA8IS0tIHRoaXMgY29tcG9uZW50IGhhcyBfbm90XyBiZWVuIHVwZ3JhZGVkIHlldCAtLT5cbiAgICAgICAgICAvLyAgICA8bXktY29tcG9uZW50IGlkPVwidGVzdFwiIHNvbWUtYXR0cmlidXRlPVwic29tZS12YWx1ZVwiPjwvbXktY29tcG9uZW50PlxuICAgICAgICAgIC8vICAgIDxzY3JpcHQ+XG4gICAgICAgICAgLy8gICAgICAvLyBncmFiIG5vbi11cGdyYWRlZCBjb21wb25lbnRcbiAgICAgICAgICAvLyAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0XCIpO1xuICAgICAgICAgIC8vICAgICAgZWwuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiO1xuICAgICAgICAgIC8vICAgICAgLy8gdXBncmFkZSBjb21wb25lbnRcbiAgICAgICAgICAvLyAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY29tcG9uZW50JywgTXlDb21wb25lbnQpO1xuICAgICAgICAgIC8vICAgIDwvc2NyaXB0PlxuICAgICAgICAgIC8vICBgYGBcbiAgICAgICAgICAvLyAgSW4gdGhpcyBjYXNlIGlmIHdlIGRvIG5vdCB1bnNoYWRvdyBoZXJlIGFuZCB1c2UgdGhlIHZhbHVlIG9mIHRoZSBzaGFkb3dpbmcgcHJvcGVydHksIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1xuICAgICAgICAgIC8vICB3aWxsIGJlIGNhbGxlZCB3aXRoIGBuZXdWYWx1ZSA9IFwic29tZS12YWx1ZVwiYCBhbmQgd2lsbCBzZXQgdGhlIHNoYWRvd2VkIHByb3BlcnR5ICh0aGlzLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIilcbiAgICAgICAgICAvLyAgdG8gdGhlIHZhbHVlIHRoYXQgd2FzIHNldCBpbmxpbmUgaS5lLiBcInNvbWUtdmFsdWVcIiBmcm9tIGFib3ZlIGV4YW1wbGUuIFdoZW5cbiAgICAgICAgICAvLyAgdGhlIGNvbm5lY3RlZENhbGxiYWNrIGF0dGVtcHRzIHRvIHVuc2hhZG93IGl0IHdpbGwgdXNlIFwic29tZS12YWx1ZVwiIGFzIHRoZSBpbml0aWFsIHZhbHVlIHJhdGhlciB0aGFuIFwiYW5vdGhlci12YWx1ZVwiXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgVGhlIGNhc2Ugd2hlcmUgdGhlIGF0dHJpYnV0ZSB3YXMgTk9UIHNldCBpbmxpbmUgYnV0IHdhcyBub3Qgc2V0IHByb2dyYW1tYXRpY2FsbHkgc2hhbGwgYmUgaGFuZGxlZC91bnNoYWRvd2VkXG4gICAgICAgICAgLy8gIGJ5IGNvbm5lY3RlZENhbGxiYWNrIGFzIHRoaXMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHdpbGwgbm90IGZpcmUuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNsYXp5LXByb3BlcnRpZXNcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICBUT0RPKFNURU5DSUwtMTYpIHdlIHNob3VsZCB0aGluayBhYm91dCB3aGV0aGVyIG9yIG5vdCB3ZSBhY3R1YWxseSB3YW50IHRvIGJlIHJlZmxlY3RpbmcgdGhlIGF0dHJpYnV0ZXMgdG9cbiAgICAgICAgICAvLyAgcHJvcGVydGllcyBoZXJlIGdpdmVuIHRoYXQgdGhpcyBnb2VzIGFnYWluc3QgYmVzdCBwcmFjdGljZXMgb3V0bGluZWQgaGVyZVxuICAgICAgICAgIC8vICBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2F2b2lkLXJlZW50cmFuY3lcbiAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHR5cGVvZiB0aGlzW3Byb3BOYW1lXSA9PT0gJ251bWJlcicgJiYgdGhpc1twcm9wTmFtZV0gPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wTmFtZSBleGlzdHMgb24gdGhlIHByb3RvdHlwZSBvZiBgQ3N0cmAsIHRoaXMgdXBkYXRlIG1heSBiZSBhIHJlc3VsdCBvZiBTdGVuY2lsIHVzaW5nIG5hdGl2ZVxuICAgICAgICAgICAgLy8gQVBJcyB0byByZWZsZWN0IHByb3BzIGFzIGF0dHJpYnV0ZXMuIENhbGxzIHRvIGBzZXRBdHRyaWJ1dGUoc29tZUVsZW1lbnQsIHByb3BOYW1lKWAgd2lsbCByZXN1bHQgaW5cbiAgICAgICAgICAgIC8vIGBwcm9wTmFtZWAgdG8gYmUgY29udmVydGVkIHRvIGEgYERPTVN0cmluZ2AsIHdoaWNoIG1heSBub3QgYmUgd2hhdCB3ZSB3YW50IGZvciBvdGhlciBwcmltaXRpdmUgcHJvcHMuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnYm9vbGVhbicgPyBmYWxzZSA6IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byBvYnNlcnZlXG4gICAgICAvLyBhbmQgYWxzbyBjcmVhdGUgYSBtYXAgb2YgaHRtbCBhdHRyaWJ1dGUgbmFtZSB0byBqcyBwcm9wZXJ0eSBuYW1lXG4gICAgICBDc3RyLm9ic2VydmVkQXR0cmlidXRlcyA9IG1lbWJlcnMuZmlsdGVyKChbXywgbV0pID0+IG1bMF0gJiAxNSAvKiBNRU1CRVJfRkxBR1MuSGFzQXR0cmlidXRlICovKSAvLyBmaWx0ZXIgdG8gb25seSBrZWVwIHByb3BzIHRoYXQgc2hvdWxkIG1hdGNoIGF0dHJpYnV0ZXNcbiAgICAgIC5tYXAoKFtwcm9wTmFtZSwgbV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBtWzFdIHx8IHByb3BOYW1lO1xuICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgIHJldHVybiBhdHRyTmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gIC8vIGluaXRpYWxpemVDb21wb25lbnRcbiAgaWYgKChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSA9PT0gMCkge1xuICAgIC8vIExldCB0aGUgcnVudGltZSBrbm93IHRoYXQgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgIHtcbiAgICAgIC8vIGxhenkgbG9hZGVkIGNvbXBvbmVudHNcbiAgICAgIC8vIHJlcXVlc3QgdGhlIGNvbXBvbmVudCdzIGltcGxlbWVudGF0aW9uIHRvIGJlXG4gICAgICAvLyB3aXJlZCB1cCB3aXRoIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgIENzdHIgPSBsb2FkTW9kdWxlKGNtcE1ldGEpO1xuICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAvLyBBd2FpdCBjcmVhdGVzIGEgbWljcm8tdGFzayBhdm9pZCBpZiBwb3NzaWJsZVxuICAgICAgICBjb25zdCBlbmRMb2FkID0gdW5pcXVlVGltZSgpO1xuICAgICAgICBDc3RyID0gYXdhaXQgQ3N0cjtcbiAgICAgICAgZW5kTG9hZCgpO1xuICAgICAgfVxuICAgICAgaWYgKCFDc3RyLmlzUHJveGllZCkge1xuICAgICAgICBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pO1xuICAgICAgICBDc3RyLmlzUHJveGllZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmROZXdJbnN0YW5jZSA9IGNyZWF0ZVRpbWUoJ2NyZWF0ZUluc3RhbmNlJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgLy8gb2ssIHRpbWUgdG8gY29uc3RydWN0IHRoZSBpbnN0YW5jZVxuICAgICAgLy8gYnV0IGxldCdzIGtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydCBhbmQgc3RvcFxuICAgICAgLy8gc28gdGhhdCB0aGUgZ2V0dGVycy9zZXR0ZXJzIGRvbid0IGluY29ycmVjdGx5IHN0ZXAgb24gZGF0YVxuICAgICAge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICB9XG4gICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBDc3RyKGhvc3RSZWYpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+OCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICB9XG4gICAgICBlbmROZXdJbnN0YW5jZSgpO1xuICAgIH1cbiAgICBpZiAoQ3N0ci5zdHlsZSkge1xuICAgICAgLy8gdGhpcyBjb21wb25lbnQgaGFzIHN0eWxlcyBidXQgd2UgaGF2ZW4ndCByZWdpc3RlcmVkIHRoZW0geWV0XG4gICAgICBsZXQgc3R5bGUgPSBDc3RyLnN0eWxlO1xuICAgICAgY29uc3Qgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSk7XG4gICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKCdyZWdpc3RlclN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICBlbmRSZWdpc3RlclN0eWxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyB3ZSd2ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhIGxhenkgaW5zdGFuY2VcbiAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgdHJ1ZSk7XG4gIGlmIChhbmNlc3RvckNvbXBvbmVudCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1yYyddKSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgLy8gYnV0IHRoZSBhbmNlc3RvciBjb21wb25lbnQgaGFzIE5PVCBmaXJlZCBpdHMgd2lsbCB1cGRhdGUgbGlmZWN5Y2xlIHlldFxuICAgIC8vIHNvIGxldCdzIGp1c3QgY29vbCBvdXIgamV0cyBhbmQgd2FpdCBmb3IgdGhlIGFuY2VzdG9yIHRvIGNvbnRpbnVlIGZpcnN0XG4gICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgLy8gZmluYWxseSBnZXRzIGFyb3VuZCB0byByZW5kZXJpbmcgaXRzIGxhenkgc2VsZlxuICAgIC8vIGZpcmUgb2ZmIHRoZSBpbml0aWFsIHVwZGF0ZVxuICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGUoKTtcbiAgfVxufTtcbmNvbnN0IGNvbm5lY3RlZENhbGxiYWNrID0gZWxtID0+IHtcbiAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3QgZW5kQ29ubmVjdGVkID0gY3JlYXRlVGltZSgnY29ubmVjdGVkQ2FsbGJhY2snLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgMSAvKiBIT1NUX0ZMQUdTLmhhc0Nvbm5lY3RlZCAqLykpIHtcbiAgICAgIC8vIGZpcnN0IHRpbWUgdGhpcyBjb21wb25lbnQgaGFzIGNvbm5lY3RlZFxuICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi87XG4gICAgICB7XG4gICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudCAoaWYgdGhlcmUgaXMgb25lKSBhbmQgcmVnaXN0ZXJcbiAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgIHdoaWxlIChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkge1xuICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBhbmNlc3RvcnMgbG9va2luZyBmb3IgdGhlIGZpcnN0XG4gICAgICAgICAgLy8gY29tcG9uZW50IHRoYXQgaGFzbid0IGZpbmlzaGVkIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHlldFxuICAgICAgICAgIGlmIChhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICAgICAgICAgIC8vIHdlIGZvdW5kIHRoaXMgY29tcG9uZW50cyBmaXJzdCBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQncyBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBMYXp5IHByb3BlcnRpZXNcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICBpZiAoY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCB0aGUgZmlyc3QgdGltZSB0aGlzIGhhcyBjb25uZWN0ZWRcbiAgICAgIC8vIHJlYXR0YWNoIGFueSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGhvc3RcbiAgICAgIC8vIHNpbmNlIHRoZXkgd291bGQgaGF2ZSBiZWVuIHJlbW92ZWQgd2hlbiBkaXNjb25uZWN0ZWRcbiAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQpO1xuICAgIH1cbiAgICBlbmRDb25uZWN0ZWQoKTtcbiAgfVxufTtcbmNvbnN0IGRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZWxtID0+IHtcbiAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQ7XG4gICAge1xuICAgICAgaWYgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCkge1xuICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQubWFwKHJtTGlzdGVuZXIgPT4gcm1MaXN0ZW5lcigpKTtcbiAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB7XG4gICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJyk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgYm9vdHN0cmFwTGF6eSA9IChsYXp5QnVuZGxlcywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgZW5kQm9vdHN0cmFwID0gY3JlYXRlVGltZSgpO1xuICBjb25zdCBjbXBUYWdzID0gW107XG4gIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRzID0gd2luLmN1c3RvbUVsZW1lbnRzO1xuICBjb25zdCBoZWFkID0gZG9jLmhlYWQ7XG4gIGNvbnN0IG1ldGFDaGFyc2V0ID0gLypAX19QVVJFX18qL2hlYWQucXVlcnlTZWxlY3RvcignbWV0YVtjaGFyc2V0XScpO1xuICBjb25zdCB2aXNpYmlsaXR5U3R5bGUgPSAvKkBfX1BVUkVfXyovZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gIGxldCBpc0Jvb3RzdHJhcHBpbmcgPSB0cnVlO1xuICBPYmplY3QuYXNzaWduKHBsdCwgb3B0aW9ucyk7XG4gIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgJy4vJywgZG9jLmJhc2VVUkkpLmhyZWY7XG4gIGxhenlCdW5kbGVzLm1hcChsYXp5QnVuZGxlID0+IHtcbiAgICBsYXp5QnVuZGxlWzFdLm1hcChjb21wYWN0TWV0YSA9PiB7XG4gICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdXG4gICAgICB9O1xuICAgICAge1xuICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBjbXBNZXRhLiRsaXN0ZW5lcnMkID0gY29tcGFjdE1ldGFbM107XG4gICAgICB9XG4gICAgICBjb25zdCB0YWdOYW1lID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZikge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICByZWdpc3Rlckhvc3Qoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGlzIHVzaW5nIHNoYWRvdyBkb21cbiAgICAgICAgICAgIC8vIGFuZCB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgc2hhZG93IGRvbVxuICAgICAgICAgICAgLy8gYWRkIHRoZSByZWFkLW9ubHkgcHJvcGVydHkgXCJzaGFkb3dSb290XCIgdG8gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgLy8gYWRkaW5nIHRoZSBzaGFkb3cgcm9vdCBidWlsZCBjb25kaXRpb25hbHMgdG8gbWluaW1pemUgcnVudGltZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgbW9kZTogJ29wZW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNCb290c3RyYXBwaW5nKSB7XG4gICAgICAgICAgICAvLyBjb25uZWN0ZWRDYWxsYmFjayB3aWxsIGJlIHByb2Nlc3NlZCBvbmNlIGFsbCBjb21wb25lbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gICAgICAgICAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50T25SZWFkeSgpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0SG9zdFJlZih0aGlzKS4kb25SZWFkeVByb21pc2UkO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY21wTWV0YS4kbGF6eUJ1bmRsZUlkJCA9IGxhenlCdW5kbGVbMF07XG4gICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXModGFnTmFtZSkgJiYgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjbXBUYWdzLnB1c2godGFnTmFtZSk7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAge1xuICAgIHZpc2liaWxpdHlTdHlsZS5pbm5lckhUTUwgPSBjbXBUYWdzICsgSFlEUkFURURfQ1NTO1xuICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGVzJywgJycpO1xuICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgIGNvbnN0IG5vbmNlID0gKF9hID0gcGx0LiRub25jZSQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpO1xuICAgIGlmIChub25jZSAhPSBudWxsKSB7XG4gICAgICB2aXNpYmlsaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICB9XG4gICAgaGVhZC5pbnNlcnRCZWZvcmUodmlzaWJpbGl0eVN0eWxlLCBtZXRhQ2hhcnNldCA/IG1ldGFDaGFyc2V0Lm5leHRTaWJsaW5nIDogaGVhZC5maXJzdENoaWxkKTtcbiAgfVxuICAvLyBQcm9jZXNzIGRlZmVycmVkIGNvbm5lY3RlZENhbGxiYWNrcyBub3cgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgaXNCb290c3RyYXBwaW5nID0gZmFsc2U7XG4gIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5tYXAoaG9zdCA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIHBsdC5qbXAoKCkgPT4gYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpO1xuICAgIH1cbiAgfVxuICAvLyBGYWxsYmFjayBhcHBMb2FkIGV2ZW50XG4gIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IGFkZEhvc3RFdmVudExpc3RlbmVycyA9IChlbG0sIGhvc3RSZWYsIGxpc3RlbmVycywgYXR0YWNoUGFyZW50TGlzdGVuZXJzKSA9PiB7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICBsaXN0ZW5lcnMubWFwKChbZmxhZ3MsIG5hbWUsIG1ldGhvZF0pID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGdldEhvc3RMaXN0ZW5lclRhcmdldChlbG0sIGZsYWdzKTtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgY29uc3Qgb3B0cyA9IGhvc3RMaXN0ZW5lck9wdHMoZmxhZ3MpO1xuICAgICAgcGx0LmFlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpO1xuICAgICAgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCB8fCBbXSkucHVzaCgoKSA9PiBwbHQucmVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cykpO1xuICAgIH0pO1xuICB9XG59O1xuY29uc3QgaG9zdExpc3RlbmVyUHJveHkgPSAoaG9zdFJlZiwgbWV0aG9kTmFtZSkgPT4gZXYgPT4ge1xuICB0cnkge1xuICAgIHtcbiAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAyNTYgLyogSE9TVF9GTEFHUy5pc0xpc3RlblJlYWR5ICovKSB7XG4gICAgICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBsZXQncyBjYWxsIGl0J3MgbWVtYmVyIG1ldGhvZCBmb3IgdGhpcyBldmVudFxuICAgICAgICBob3N0UmVmLiRsYXp5SW5zdGFuY2UkW21ldGhvZE5hbWVdKGV2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkID0gaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCB8fCBbXSkucHVzaChbbWV0aG9kTmFtZSwgZXZdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlRXJyb3IoZSk7XG4gIH1cbn07XG5jb25zdCBnZXRIb3N0TGlzdGVuZXJUYXJnZXQgPSAoZWxtLCBmbGFncykgPT4ge1xuICBpZiAoZmxhZ3MgJiAxNiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRCb2R5ICovKSByZXR1cm4gZG9jLmJvZHk7XG4gIHJldHVybiBlbG07XG59O1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBob3N0TGlzdGVuZXJPcHRzID0gZmxhZ3MgPT4gKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMDtcbi8qKlxuICogQXNzaWducyB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIG5vbmNlIHByb3BlcnR5IG9uIHRoZSBydW50aW1lIHBsYXRmb3JtIG9iamVjdC5cbiAqIER1cmluZyBydW50aW1lLCB0aGlzIHZhbHVlIGlzIHVzZWQgdG8gc2V0IHRoZSBub25jZSBhdHRyaWJ1dGUgb24gYWxsIGR5bmFtaWNhbGx5IGNyZWF0ZWQgc2NyaXB0IGFuZCBzdHlsZSB0YWdzLlxuICogQHBhcmFtIG5vbmNlIFRoZSB2YWx1ZSB0byBiZSBhc3NpZ25lZCB0byB0aGUgcGxhdGZvcm0gbm9uY2UgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmNvbnN0IHNldE5vbmNlID0gbm9uY2UgPT4gcGx0LiRub25jZSQgPSBub25jZTtcbmNvbnN0IGhvc3RSZWZzID0gLypAX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG5jb25zdCBnZXRIb3N0UmVmID0gcmVmID0+IGhvc3RSZWZzLmdldChyZWYpO1xuY29uc3QgcmVnaXN0ZXJJbnN0YW5jZSA9IChsYXp5SW5zdGFuY2UsIGhvc3RSZWYpID0+IGhvc3RSZWZzLnNldChob3N0UmVmLiRsYXp5SW5zdGFuY2UkID0gbGF6eUluc3RhbmNlLCBob3N0UmVmKTtcbmNvbnN0IHJlZ2lzdGVySG9zdCA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IHtcbiAgICAkZmxhZ3MkOiAwLFxuICAgICRob3N0RWxlbWVudCQ6IGVsbSxcbiAgICAkY21wTWV0YSQ6IGNtcE1ldGEsXG4gICAgJGluc3RhbmNlVmFsdWVzJDogbmV3IE1hcCgpXG4gIH07XG4gIHtcbiAgICBob3N0UmVmLiRvbkluc3RhbmNlUHJvbWlzZSQgPSBuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJCA9IHIpO1xuICB9XG4gIHtcbiAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQgPSBuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCA9IHIpO1xuICAgIGVsbVsncy1wJ10gPSBbXTtcbiAgICBlbG1bJ3MtcmMnXSA9IFtdO1xuICB9XG4gIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQpO1xuICByZXR1cm4gaG9zdFJlZnMuc2V0KGVsbSwgaG9zdFJlZik7XG59O1xuY29uc3QgaXNNZW1iZXJJbkVsZW1lbnQgPSAoZWxtLCBtZW1iZXJOYW1lKSA9PiBtZW1iZXJOYW1lIGluIGVsbTtcbmNvbnN0IGNvbnNvbGVFcnJvciA9IChlLCBlbCkgPT4gKDAsIGNvbnNvbGUuZXJyb3IpKGUsIGVsKTtcbmNvbnN0IGNtcE1vZHVsZXMgPSAvKkBfX1BVUkVfXyovbmV3IE1hcCgpO1xuY29uc3QgbG9hZE1vZHVsZSA9IChjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgLy8gbG9hZE1vZHVsZUltcG9ydFxuICBjb25zdCBleHBvcnROYW1lID0gY21wTWV0YS4kdGFnTmFtZSQucmVwbGFjZSgvLS9nLCAnXycpO1xuICBjb25zdCBidW5kbGVJZCA9IGNtcE1ldGEuJGxhenlCdW5kbGVJZCQ7XG4gIGNvbnN0IG1vZHVsZSA9IGNtcE1vZHVsZXMuZ2V0KGJ1bmRsZUlkKTtcbiAgaWYgKG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gIH1cbiAgaWYgKCFobXJWZXJzaW9uSWQgfHwgIUJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgY29uc3QgcHJvY2Vzc01vZCA9IGltcG9ydGVkTW9kdWxlID0+IHtcbiAgICAgIGNtcE1vZHVsZXMuc2V0KGJ1bmRsZUlkLCBpbXBvcnRlZE1vZHVsZSk7XG4gICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfTtcbiAgICBzd2l0Y2ggKGJ1bmRsZUlkKSB7XG4gICAgICBjYXNlICdwd2EtYWN0aW9uLXNoZWV0JzpcbiAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICAgICAgJy4vcHdhLWFjdGlvbi1zaGVldC5lbnRyeS5qcycpLnRoZW4ocHJvY2Vzc01vZCwgY29uc29sZUVycm9yKTtcbiAgICAgIGNhc2UgJ3B3YS1jYW1lcmEtbW9kYWwnOlxuICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICAgICAgICAnLi9wd2EtY2FtZXJhLW1vZGFsLmVudHJ5LmpzJykudGhlbihwcm9jZXNzTW9kLCBjb25zb2xlRXJyb3IpO1xuICAgICAgY2FzZSAncHdhLXRvYXN0JzpcbiAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICAgICAgJy4vcHdhLXRvYXN0LmVudHJ5LmpzJykudGhlbihwcm9jZXNzTW9kLCBjb25zb2xlRXJyb3IpO1xuICAgICAgY2FzZSAncHdhLWNhbWVyYS1tb2RhbC1pbnN0YW5jZSc6XG4gICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgICAgICcuL3B3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2UuZW50cnkuanMnKS50aGVuKHByb2Nlc3NNb2QsIGNvbnNvbGVFcnJvcik7XG4gICAgICBjYXNlICdwd2EtY2FtZXJhJzpcbiAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICAgICAgJy4vcHdhLWNhbWVyYS5lbnRyeS5qcycpLnRoZW4ocHJvY2Vzc01vZCwgY29uc29sZUVycm9yKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi9cbiAgLyogd2VicGFja0luY2x1ZGU6IC9cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gIGAuLyR7YnVuZGxlSWR9LmVudHJ5LmpzJHsnJ31gKS50aGVuKGltcG9ydGVkTW9kdWxlID0+IHtcbiAgICB7XG4gICAgICBjbXBNb2R1bGVzLnNldChidW5kbGVJZCwgaW1wb3J0ZWRNb2R1bGUpO1xuICAgIH1cbiAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gIH0sIGNvbnNvbGVFcnJvcik7XG59O1xuY29uc3Qgc3R5bGVzID0gLypAX19QVVJFX18qL25ldyBNYXAoKTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwge1xuICBoZWFkOiB7fVxufTtcbmNvbnN0IHBsdCA9IHtcbiAgJGZsYWdzJDogMCxcbiAgJHJlc291cmNlc1VybCQ6ICcnLFxuICBqbXA6IGggPT4gaCgpLFxuICByYWY6IGggPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpLFxuICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gIGNlOiAoZXZlbnROYW1lLCBvcHRzKSA9PiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBvcHRzKVxufTtcbmNvbnN0IHByb21pc2VSZXNvbHZlID0gdiA9PiBQcm9taXNlLnJlc29sdmUodik7XG5jb25zdCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyA9IC8qQF9fUFVSRV9fKi8oKCkgPT4ge1xuICB0cnkge1xuICAgIG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSAnZnVuY3Rpb24nO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuY29uc3QgcXVldWVEb21SZWFkcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXMgPSBbXTtcbmNvbnN0IHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IGNiID0+IHtcbiAgcXVldWUucHVzaChjYik7XG4gIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgcXVldWVQZW5kaW5nID0gdHJ1ZTtcbiAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlU3luYyAqLykge1xuICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBjb25zdW1lID0gcXVldWUgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHF1ZXVlW2ldKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG59O1xuY29uc3QgZmx1c2ggPSAoKSA9PiB7XG4gIC8vIGFsd2F5cyBmb3JjZSBhIGJ1bmNoIG9mIG1lZGl1bSBjYWxsYmFja3MgdG8gcnVuLCBidXQgc3RpbGwgaGF2ZVxuICAvLyBhIHRocm90dGxlIG9uIGhvdyBtYW55IGNhbiBydW4gaW4gYSBjZXJ0YWluIHRpbWVcbiAgLy8gRE9NIFJFQURTISEhXG4gIGNvbnN1bWUocXVldWVEb21SZWFkcyk7XG4gIC8vIERPTSBXUklURVMhISFcbiAge1xuICAgIGNvbnN1bWUocXVldWVEb21Xcml0ZXMpO1xuICAgIGlmIChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIHN0aWxsIG1vcmUgdG8gZG8geWV0LCBidXQgd2UndmUgcnVuIG91dCBvZiB0aW1lXG4gICAgICAvLyBsZXQncyBsZXQgdGhpcyB0aGluZyBjb29sIG9mZiBhbmQgdHJ5IGFnYWluIGluIHRoZSBuZXh0IHRpY2tcbiAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IG5leHRUaWNrID0gLypAX19QVVJFX18qL2NiID0+IHByb21pc2VSZXNvbHZlKCkudGhlbihjYik7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovcXVldWVUYXNrKHF1ZXVlRG9tV3JpdGVzLCB0cnVlKTtcbmV4cG9ydCB7IEhvc3QgYXMgSCwgYm9vdHN0cmFwTGF6eSBhcyBiLCBjcmVhdGVFdmVudCBhcyBjLCBmb3JjZVVwZGF0ZSBhcyBmLCBnZXRFbGVtZW50IGFzIGcsIGgsIHByb21pc2VSZXNvbHZlIGFzIHAsIHJlZ2lzdGVySW5zdGFuY2UgYXMgciwgc2V0Tm9uY2UgYXMgcyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxZQUFZO0FBVWxCLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSSxZQUFZO0FBQ2hCLElBQUksZUFBZTtBQUNuQixJQUFNLGFBQWEsQ0FBQyxRQUFRLFVBQVUsT0FBTztBQUMzQztBQUNFLFdBQU8sTUFBTTtBQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sYUFBYSxDQUFDLEtBQUssZ0JBQWdCO0FBQ3ZDO0FB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QixXQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFFBQUk7QUFDRixZQUFNLENBQUMsRUFBRSxZQUFZLElBQUksQ0FBQztBQUFBLElBQzVCLFNBQVMsR0FBRztBQUNWLG1CQUFhLENBQUM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFNBQVM7QUFDakI7QUFDQSxJQUFNLFFBQVEsTUFBTTtBQUlsQixVQUFRLGFBQWE7QUFFckI7QUFDRSxZQUFRLGNBQWM7QUFDdEIsUUFBSSxlQUFlLGNBQWMsU0FBUyxHQUFHO0FBRzNDLFVBQUksSUFBSSxLQUFLO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sV0FBd0IsUUFBTSxlQUFlLEVBQUUsS0FBSyxFQUFFO0FBQzVELElBQU0sWUFBeUIsMEJBQVUsZ0JBQWdCLElBQUk7IiwibmFtZXMiOlsiZG9jIiwic2NvcGVJZCIsImlzU3ZnTW9kZSIsIm5ld1ZOb2RlIiwiaCJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
