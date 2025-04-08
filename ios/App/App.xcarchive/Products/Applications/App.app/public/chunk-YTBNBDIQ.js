import {
  __async,
  __glob
} from "./chunk-LQ2EECYJ.js";

// import("./**/*.entry.js") in node_modules/myclub-game-preview/dist/esm/index-e2967431.js
var globImport_entry_js = __glob({
  "./game-preview.entry.js": () => import("./game-preview.entry-EJ6DCZYM.js")
});

// node_modules/myclub-game-preview/dist/esm/index-e2967431.js
var NAMESPACE = "myclub-game-preview";
var BUILD = (
  /* myclub-game-preview */
  {
    allRenderFn: true,
    appendChildSlotFix: false,
    asyncLoading: true,
    asyncQueue: false,
    attachStyles: true,
    cloneNodeFix: false,
    cmpDidLoad: true,
    cmpDidRender: false,
    cmpDidUnload: false,
    cmpDidUpdate: false,
    cmpShouldUpdate: false,
    cmpWillLoad: true,
    cmpWillRender: false,
    cmpWillUpdate: false,
    connectedCallback: false,
    constructableCSS: true,
    cssAnnotations: true,
    devTools: false,
    disconnectedCallback: false,
    element: false,
    event: false,
    experimentalScopedSlotChanges: false,
    experimentalSlotFixes: false,
    formAssociated: false,
    hasRenderFn: true,
    hostListener: false,
    hostListenerTarget: false,
    hostListenerTargetBody: false,
    hostListenerTargetDocument: false,
    hostListenerTargetParent: false,
    hostListenerTargetWindow: false,
    hotModuleReplacement: false,
    hydrateClientSide: false,
    hydrateServerSide: false,
    hydratedAttribute: false,
    hydratedClass: true,
    hydratedSelectorName: "hydrated",
    initializeNextTick: false,
    invisiblePrehydration: true,
    isDebug: false,
    isDev: false,
    isTesting: false,
    lazyLoad: true,
    lifecycle: true,
    lifecycleDOMEvents: false,
    member: true,
    method: false,
    mode: false,
    observeAttribute: true,
    profile: false,
    prop: true,
    propBoolean: false,
    propMutable: false,
    propNumber: false,
    propString: true,
    reflect: false,
    scoped: false,
    scopedSlotTextContentFix: false,
    scriptDataOpts: false,
    shadowDelegatesFocus: false,
    shadowDom: true,
    slot: true,
    slotChildNodesFix: false,
    slotRelocation: false,
    state: true,
    style: true,
    svg: true,
    taskQueue: true,
    transformTagName: false,
    updatable: true,
    vdomAttribute: true,
    vdomClass: false,
    vdomFunctional: false,
    vdomKey: true,
    vdomListener: false,
    vdomPropOrAttr: true,
    vdomRef: false,
    vdomRender: true,
    vdomStyle: false,
    vdomText: true,
    vdomXlink: false,
    watchCallback: false
  }
);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  return /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
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
var queuePending = false;
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
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
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
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
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
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
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
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
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
    if (vnodeData.key) {
      key = vnodeData.key;
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
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
  {
    vnode.$key$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
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
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
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
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (cmpMeta.$flags$ & 4) {
          styleElm.innerHTML += SLOT_FB_CSS;
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
    memberName.toLowerCase();
    if (memberName === "key") ;
    else {
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
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var scopeId;
var hostTagName;
var useNativeShadowDom = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
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
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
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
  elm["s-hn"] = hostTagName;
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
        insertBefore(containerElm, childNode, before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      if (elm) {
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
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
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
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
      if (tag === "slot" && !useNativeShadowDom) ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
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
var insertBefore = (parent, newNode, reference) => {
  const inserted = parent == null ? void 0 : parent.insertBefore(newNode, reference);
  return inserted;
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = (cmpMeta.$flags$ & 1) !== 0;
  patch(oldVNode, rootVnode, isInitialLoad);
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
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  if (!instance) {
    throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
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
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
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
var callRender = (hostRef, instance, elm, isInitialLoad) => {
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
          renderVdom(hostRef, instance, isInitialLoad);
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
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated");
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
  }
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
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || BUILD.watchCallback) {
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
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
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8) && flags2 & 128 && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}), ...members.filter(
        ([_, m]) => m[0] & 15
        /* HasAttribute */
      ).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        return attrName;
      })]));
    }
  }
  return Cstr;
};
var initializeComponent = (elm, hostRef, cmpMeta, hmrVersionId) => __async(void 0, null, function* () {
  let Cstr;
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = yield CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
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
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(
        () => hostRef.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
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
var fireConnectedCallback = (instance) => {
};
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
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) ;
      else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback());
      }
    }
    endConnected();
  }
};
var disconnectInstance = (instance) => {
};
var disconnectedCallback = (elm) => __async(void 0, null, function* () {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) ;
    else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance());
    }
  }
});
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              if (!self.shadowRoot) {
                {
                  self.attachShadow({
                    mode: "open"
                  });
                }
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(`Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`);
                }
              }
            }
          }
        }
        connectedCallback() {
          getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
          }
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
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(tagName, proxyComponent(
          HostElement,
          cmpMeta,
          1
          /* isElementConstructor */
        ));
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
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

export {
  registerInstance,
  getAssetPath,
  h,
  Host,
  bootstrapLazy
};
/*! Bundled license information:

myclub-game-preview/dist/esm/index-e2967431.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9teWNsdWItZ2FtZS1wcmV2aWV3L2Rpc3QvZXNtL2luZGV4LWUyOTY3NDMxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5BTUVTUEFDRSA9ICdteWNsdWItZ2FtZS1wcmV2aWV3JztcbmNvbnN0IEJVSUxEID0gLyogbXljbHViLWdhbWUtcHJldmlldyAqL3tcbiAgYWxsUmVuZGVyRm46IHRydWUsXG4gIGFwcGVuZENoaWxkU2xvdEZpeDogZmFsc2UsXG4gIGFzeW5jTG9hZGluZzogdHJ1ZSxcbiAgYXN5bmNRdWV1ZTogZmFsc2UsXG4gIGF0dGFjaFN0eWxlczogdHJ1ZSxcbiAgY2xvbmVOb2RlRml4OiBmYWxzZSxcbiAgY21wRGlkTG9hZDogdHJ1ZSxcbiAgY21wRGlkUmVuZGVyOiBmYWxzZSxcbiAgY21wRGlkVW5sb2FkOiBmYWxzZSxcbiAgY21wRGlkVXBkYXRlOiBmYWxzZSxcbiAgY21wU2hvdWxkVXBkYXRlOiBmYWxzZSxcbiAgY21wV2lsbExvYWQ6IHRydWUsXG4gIGNtcFdpbGxSZW5kZXI6IGZhbHNlLFxuICBjbXBXaWxsVXBkYXRlOiBmYWxzZSxcbiAgY29ubmVjdGVkQ2FsbGJhY2s6IGZhbHNlLFxuICBjb25zdHJ1Y3RhYmxlQ1NTOiB0cnVlLFxuICBjc3NBbm5vdGF0aW9uczogdHJ1ZSxcbiAgZGV2VG9vbHM6IGZhbHNlLFxuICBkaXNjb25uZWN0ZWRDYWxsYmFjazogZmFsc2UsXG4gIGVsZW1lbnQ6IGZhbHNlLFxuICBldmVudDogZmFsc2UsXG4gIGV4cGVyaW1lbnRhbFNjb3BlZFNsb3RDaGFuZ2VzOiBmYWxzZSxcbiAgZXhwZXJpbWVudGFsU2xvdEZpeGVzOiBmYWxzZSxcbiAgZm9ybUFzc29jaWF0ZWQ6IGZhbHNlLFxuICBoYXNSZW5kZXJGbjogdHJ1ZSxcbiAgaG9zdExpc3RlbmVyOiBmYWxzZSxcbiAgaG9zdExpc3RlbmVyVGFyZ2V0OiBmYWxzZSxcbiAgaG9zdExpc3RlbmVyVGFyZ2V0Qm9keTogZmFsc2UsXG4gIGhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50OiBmYWxzZSxcbiAgaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50OiBmYWxzZSxcbiAgaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93OiBmYWxzZSxcbiAgaG90TW9kdWxlUmVwbGFjZW1lbnQ6IGZhbHNlLFxuICBoeWRyYXRlQ2xpZW50U2lkZTogZmFsc2UsXG4gIGh5ZHJhdGVTZXJ2ZXJTaWRlOiBmYWxzZSxcbiAgaHlkcmF0ZWRBdHRyaWJ1dGU6IGZhbHNlLFxuICBoeWRyYXRlZENsYXNzOiB0cnVlLFxuICBoeWRyYXRlZFNlbGVjdG9yTmFtZTogXCJoeWRyYXRlZFwiLFxuICBpbml0aWFsaXplTmV4dFRpY2s6IGZhbHNlLFxuICBpbnZpc2libGVQcmVoeWRyYXRpb246IHRydWUsXG4gIGlzRGVidWc6IGZhbHNlLFxuICBpc0RldjogZmFsc2UsXG4gIGlzVGVzdGluZzogZmFsc2UsXG4gIGxhenlMb2FkOiB0cnVlLFxuICBsaWZlY3ljbGU6IHRydWUsXG4gIGxpZmVjeWNsZURPTUV2ZW50czogZmFsc2UsXG4gIG1lbWJlcjogdHJ1ZSxcbiAgbWV0aG9kOiBmYWxzZSxcbiAgbW9kZTogZmFsc2UsXG4gIG9ic2VydmVBdHRyaWJ1dGU6IHRydWUsXG4gIHByb2ZpbGU6IGZhbHNlLFxuICBwcm9wOiB0cnVlLFxuICBwcm9wQm9vbGVhbjogZmFsc2UsXG4gIHByb3BNdXRhYmxlOiBmYWxzZSxcbiAgcHJvcE51bWJlcjogZmFsc2UsXG4gIHByb3BTdHJpbmc6IHRydWUsXG4gIHJlZmxlY3Q6IGZhbHNlLFxuICBzY29wZWQ6IGZhbHNlLFxuICBzY29wZWRTbG90VGV4dENvbnRlbnRGaXg6IGZhbHNlLFxuICBzY3JpcHREYXRhT3B0czogZmFsc2UsXG4gIHNoYWRvd0RlbGVnYXRlc0ZvY3VzOiBmYWxzZSxcbiAgc2hhZG93RG9tOiB0cnVlLFxuICBzbG90OiB0cnVlLFxuICBzbG90Q2hpbGROb2Rlc0ZpeDogZmFsc2UsXG4gIHNsb3RSZWxvY2F0aW9uOiBmYWxzZSxcbiAgc3RhdGU6IHRydWUsXG4gIHN0eWxlOiB0cnVlLFxuICBzdmc6IHRydWUsXG4gIHRhc2tRdWV1ZTogdHJ1ZSxcbiAgdHJhbnNmb3JtVGFnTmFtZTogZmFsc2UsXG4gIHVwZGF0YWJsZTogdHJ1ZSxcbiAgdmRvbUF0dHJpYnV0ZTogdHJ1ZSxcbiAgdmRvbUNsYXNzOiBmYWxzZSxcbiAgdmRvbUZ1bmN0aW9uYWw6IGZhbHNlLFxuICB2ZG9tS2V5OiB0cnVlLFxuICB2ZG9tTGlzdGVuZXI6IGZhbHNlLFxuICB2ZG9tUHJvcE9yQXR0cjogdHJ1ZSxcbiAgdmRvbVJlZjogZmFsc2UsXG4gIHZkb21SZW5kZXI6IHRydWUsXG4gIHZkb21TdHlsZTogZmFsc2UsXG4gIHZkb21UZXh0OiB0cnVlLFxuICB2ZG9tWGxpbms6IGZhbHNlLFxuICB3YXRjaENhbGxiYWNrOiBmYWxzZVxufTtcblxuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2NC4xOS4yIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtcbiAgICBnZXQ6IGFsbFtuYW1lXSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pO1xufTtcbnZhciBob3N0UmVmcyA9IC8qIEBfX1BVUkVfXyAqL25ldyBXZWFrTWFwKCk7XG52YXIgZ2V0SG9zdFJlZiA9IHJlZiA9PiBob3N0UmVmcy5nZXQocmVmKTtcbnZhciByZWdpc3Rlckluc3RhbmNlID0gKGxhenlJbnN0YW5jZSwgaG9zdFJlZikgPT4gaG9zdFJlZnMuc2V0KGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UsIGhvc3RSZWYpO1xudmFyIHJlZ2lzdGVySG9zdCA9IChob3N0RWxlbWVudCwgY21wTWV0YSkgPT4ge1xuICBjb25zdCBob3N0UmVmID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJGhvc3RFbGVtZW50JDogaG9zdEVsZW1lbnQsXG4gICAgJGNtcE1ldGEkOiBjbXBNZXRhLFxuICAgICRpbnN0YW5jZVZhbHVlcyQ6IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKVxuICB9O1xuICB7XG4gICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkID0gbmV3IFByb21pc2UociA9PiBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQgPSByKTtcbiAgICBob3N0RWxlbWVudFtcInMtcFwiXSA9IFtdO1xuICAgIGhvc3RFbGVtZW50W1wicy1yY1wiXSA9IFtdO1xuICB9XG4gIHJldHVybiBob3N0UmVmcy5zZXQoaG9zdEVsZW1lbnQsIGhvc3RSZWYpO1xufTtcbnZhciBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xudmFyIGNvbnNvbGVFcnJvciA9IChlLCBlbCkgPT4gKDAsIGNvbnNvbGUuZXJyb3IpKGUsIGVsKTtcblxuLy8gc3JjL2NsaWVudC9jbGllbnQtbG9hZC1tb2R1bGUudHNcbnZhciBjbXBNb2R1bGVzID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpO1xudmFyIGxvYWRNb2R1bGUgPSAoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKSA9PiB7XG4gIGNvbnN0IGV4cG9ydE5hbWUgPSBjbXBNZXRhLiR0YWdOYW1lJC5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbiAgY29uc3QgYnVuZGxlSWQgPSBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkO1xuICBpZiAoIWJ1bmRsZUlkKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBjb25zdCBtb2R1bGUgPSBjbXBNb2R1bGVzLmdldChidW5kbGVJZCk7XG4gIGlmIChtb2R1bGUpIHtcbiAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICB9XG4gIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgcmV0dXJuIGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi9cbiAgLyogd2VicGFja0luY2x1ZGU6IC9cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gIGAuLyR7YnVuZGxlSWR9LmVudHJ5LmpzJHtcIlwifWApLnRoZW4oaW1wb3J0ZWRNb2R1bGUgPT4ge1xuICAgIHtcbiAgICAgIGNtcE1vZHVsZXMuc2V0KGJ1bmRsZUlkLCBpbXBvcnRlZE1vZHVsZSk7XG4gICAgfVxuICAgIHJldHVybiBpbXBvcnRlZE1vZHVsZVtleHBvcnROYW1lXTtcbiAgfSwgY29uc29sZUVycm9yKTtcbn07XG5cbi8vIHNyYy9jbGllbnQvY2xpZW50LXN0eWxlLnRzXG52YXIgc3R5bGVzID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpO1xudmFyIEhZRFJBVEVEX0NTUyA9IFwie3Zpc2liaWxpdHk6aGlkZGVufS5oeWRyYXRlZHt2aXNpYmlsaXR5OmluaGVyaXR9XCI7XG52YXIgU0xPVF9GQl9DU1MgPSBcInNsb3QtZmJ7ZGlzcGxheTpjb250ZW50c31zbG90LWZiW2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fTtcbnZhciBkb2MgPSB3aW4uZG9jdW1lbnQgfHwge1xuICBoZWFkOiB7fVxufTtcbnZhciBwbHQgPSB7XG4gICRmbGFncyQ6IDAsXG4gICRyZXNvdXJjZXNVcmwkOiBcIlwiLFxuICBqbXA6IGgyID0+IGgyKCksXG4gIHJhZjogaDIgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgyKSxcbiAgYWVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gIHJlbDogKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpLFxuICBjZTogKGV2ZW50TmFtZSwgb3B0cykgPT4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgb3B0cylcbn07XG52YXIgcHJvbWlzZVJlc29sdmUgPSB2ID0+IFByb21pc2UucmVzb2x2ZSh2KTtcbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyA9IC8qIEBfX1BVUkVfXyAqLygoKSA9PiB7XG4gIHRyeSB7XG4gICAgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICByZXR1cm4gdHlwZW9mIG5ldyBDU1NTdHlsZVNoZWV0KCkucmVwbGFjZVN5bmMgPT09IFwiZnVuY3Rpb25cIjtcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcbnZhciBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZURvbVJlYWRzID0gW107XG52YXIgcXVldWVEb21Xcml0ZXMgPSBbXTtcbnZhciBxdWV1ZVRhc2sgPSAocXVldWUsIHdyaXRlKSA9PiBjYiA9PiB7XG4gIHF1ZXVlLnB1c2goY2IpO1xuICBpZiAoIXF1ZXVlUGVuZGluZykge1xuICAgIHF1ZXVlUGVuZGluZyA9IHRydWU7XG4gICAgaWYgKHdyaXRlICYmIHBsdC4kZmxhZ3MkICYgNCAvKiBxdWV1ZVN5bmMgKi8pIHtcbiAgICAgIG5leHRUaWNrKGZsdXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgfVxuICB9XG59O1xudmFyIGNvbnN1bWUgPSBxdWV1ZSA9PiB7XG4gIGZvciAobGV0IGkyID0gMDsgaTIgPCBxdWV1ZS5sZW5ndGg7IGkyKyspIHtcbiAgICB0cnkge1xuICAgICAgcXVldWVbaTJdKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG59O1xudmFyIGZsdXNoID0gKCkgPT4ge1xuICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICB7XG4gICAgY29uc3VtZShxdWV1ZURvbVdyaXRlcyk7XG4gICAgaWYgKHF1ZXVlUGVuZGluZyA9IHF1ZXVlRG9tUmVhZHMubGVuZ3RoID4gMCkge1xuICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgfVxuICB9XG59O1xudmFyIG5leHRUaWNrID0gY2IgPT4gcHJvbWlzZVJlc29sdmUoKS50aGVuKGNiKTtcbnZhciB3cml0ZVRhc2sgPSAvKiBAX19QVVJFX18gKi9xdWV1ZVRhc2socXVldWVEb21Xcml0ZXMsIHRydWUpO1xuXG4vLyBzcmMvcnVudGltZS9hc3NldC1wYXRoLnRzXG52YXIgZ2V0QXNzZXRQYXRoID0gcGF0aCA9PiB7XG4gIGNvbnN0IGFzc2V0VXJsID0gbmV3IFVSTChwYXRoLCBwbHQuJHJlc291cmNlc1VybCQpO1xuICByZXR1cm4gYXNzZXRVcmwub3JpZ2luICE9PSB3aW4ubG9jYXRpb24ub3JpZ2luID8gYXNzZXRVcmwuaHJlZiA6IGFzc2V0VXJsLnBhdGhuYW1lO1xufTtcblxuLy8gc3JjL3V0aWxzL2NvbnN0YW50cy50c1xudmFyIEVNUFRZX09CSiA9IHt9O1xudmFyIFNWR19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbnZhciBIVE1MX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbi8vIHNyYy91dGlscy9oZWxwZXJzLnRzXG52YXIgaXNEZWYgPSB2ID0+IHYgIT0gbnVsbDtcbnZhciBpc0NvbXBsZXhUeXBlID0gbyA9PiB7XG4gIG8gPSB0eXBlb2YgbztcbiAgcmV0dXJuIG8gPT09IFwib2JqZWN0XCIgfHwgbyA9PT0gXCJmdW5jdGlvblwiO1xufTtcblxuLy8gc3JjL3V0aWxzL3F1ZXJ5LW5vbmNlLW1ldGEtdGFnLWNvbnRlbnQudHNcbmZ1bmN0aW9uIHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MyKSB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICByZXR1cm4gKF9jID0gKF9iID0gKF9hID0gZG9jMi5oZWFkKSA9PSBudWxsID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NwLW5vbmNlXCJdJykpID09IG51bGwgPyB2b2lkIDAgOiBfYi5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpKSAhPSBudWxsID8gX2MgOiB2b2lkIDA7XG59XG5cbi8vIHNyYy91dGlscy9yZXN1bHQudHNcbnZhciByZXN1bHRfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQocmVzdWx0X2V4cG9ydHMsIHtcbiAgZXJyOiAoKSA9PiBlcnIsXG4gIG1hcDogKCkgPT4gbWFwLFxuICBvazogKCkgPT4gb2ssXG4gIHVud3JhcDogKCkgPT4gdW53cmFwLFxuICB1bndyYXBFcnI6ICgpID0+IHVud3JhcEVyclxufSk7XG52YXIgb2sgPSB2YWx1ZSA9PiAoe1xuICBpc09rOiB0cnVlLFxuICBpc0VycjogZmFsc2UsXG4gIHZhbHVlXG59KTtcbnZhciBlcnIgPSB2YWx1ZSA9PiAoe1xuICBpc09rOiBmYWxzZSxcbiAgaXNFcnI6IHRydWUsXG4gIHZhbHVlXG59KTtcbmZ1bmN0aW9uIG1hcChyZXN1bHQsIGZuKSB7XG4gIGlmIChyZXN1bHQuaXNPaykge1xuICAgIGNvbnN0IHZhbCA9IGZuKHJlc3VsdC52YWx1ZSk7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJldHVybiB2YWwudGhlbihuZXdWYWwgPT4gb2sobmV3VmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvayh2YWwpO1xuICAgIH1cbiAgfVxuICBpZiAocmVzdWx0LmlzRXJyKSB7XG4gICAgY29uc3QgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgcmV0dXJuIGVycih2YWx1ZSk7XG4gIH1cbiAgdGhyb3cgXCJzaG91bGQgbmV2ZXIgZ2V0IGhlcmVcIjtcbn1cbnZhciB1bndyYXAgPSByZXN1bHQgPT4ge1xuICBpZiAocmVzdWx0LmlzT2spIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgfVxufTtcbnZhciB1bndyYXBFcnIgPSByZXN1bHQgPT4ge1xuICBpZiAocmVzdWx0LmlzRXJyKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyByZXN1bHQudmFsdWU7XG4gIH1cbn07XG52YXIgY3JlYXRlVGltZSA9IChmbk5hbWUsIHRhZ05hbWUgPSBcIlwiKSA9PiB7XG4gIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbn07XG52YXIgdW5pcXVlVGltZSA9IChrZXksIG1lYXN1cmVUZXh0KSA9PiB7XG4gIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbn07XG52YXIgaCA9IChub2RlTmFtZSwgdm5vZGVEYXRhLCAuLi5jaGlsZHJlbikgPT4ge1xuICBsZXQgY2hpbGQgPSBudWxsO1xuICBsZXQga2V5ID0gbnVsbDtcbiAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuICBsZXQgbGFzdFNpbXBsZSA9IGZhbHNlO1xuICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gIGNvbnN0IHdhbGsgPSBjID0+IHtcbiAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYy5sZW5ndGg7IGkyKyspIHtcbiAgICAgIGNoaWxkID0gY1tpMl07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICBpZiAoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSBcImZ1bmN0aW9uXCIgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuICAgICAgICAgIHZOb2RlQ2hpbGRyZW5bdk5vZGVDaGlsZHJlbi5sZW5ndGggLSAxXS4kdGV4dCQgKz0gY2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgd2FsayhjaGlsZHJlbik7XG4gIGlmICh2bm9kZURhdGEpIHtcbiAgICBpZiAodm5vZGVEYXRhLmtleSkge1xuICAgICAga2V5ID0gdm5vZGVEYXRhLmtleTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlTmFtZSwgbnVsbCk7XG4gIHZub2RlLiRhdHRycyQgPSB2bm9kZURhdGE7XG4gIGlmICh2Tm9kZUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gdk5vZGVDaGlsZHJlbjtcbiAgfVxuICB7XG4gICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gIH1cbiAgcmV0dXJuIHZub2RlO1xufTtcbnZhciBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgY29uc3Qgdm5vZGUgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkdGFnJDogdGFnLFxuICAgICR0ZXh0JDogdGV4dCxcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkY2hpbGRyZW4kOiBudWxsXG4gIH07XG4gIHtcbiAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgfVxuICB7XG4gICAgdm5vZGUuJGtleSQgPSBudWxsO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn07XG52YXIgSG9zdCA9IHt9O1xudmFyIGlzSG9zdCA9IG5vZGUgPT4gbm9kZSAmJiBub2RlLiR0YWckID09PSBIb3N0O1xudmFyIHBhcnNlUHJvcGVydHlWYWx1ZSA9IChwcm9wVmFsdWUsIHByb3BUeXBlKSA9PiB7XG4gIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgaWYgKHByb3BUeXBlICYgMSAvKiBTdHJpbmcgKi8pIHtcbiAgICAgIHJldHVybiBTdHJpbmcocHJvcFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbiAgfVxuICByZXR1cm4gcHJvcFZhbHVlO1xufTtcbnZhciBlbWl0RXZlbnQgPSAoZWxtLCBuYW1lLCBvcHRzKSA9PiB7XG4gIGNvbnN0IGV2ID0gcGx0LmNlKG5hbWUsIG9wdHMpO1xuICBlbG0uZGlzcGF0Y2hFdmVudChldik7XG4gIHJldHVybiBldjtcbn07XG52YXIgcm9vdEFwcGxpZWRTdHlsZXMgPSAvKiBAX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZDIsIGNzc1RleHQsIGFsbG93Q1MpID0+IHtcbiAgbGV0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkMik7XG4gIGlmIChzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyAmJiBhbGxvd0NTKSB7XG4gICAgc3R5bGUgPSBzdHlsZSB8fCBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHN0eWxlID0gY3NzVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gY3NzVGV4dDtcbiAgfVxuICBzdHlsZXMuc2V0KHNjb3BlSWQyLCBzdHlsZSk7XG59O1xudmFyIGFkZFN0eWxlID0gKHN0eWxlQ29udGFpbmVyTm9kZSwgY21wTWV0YSwgbW9kZSkgPT4ge1xuICB2YXIgX2E7XG4gIGNvbnN0IHNjb3BlSWQyID0gZ2V0U2NvcGVJZChjbXBNZXRhKTtcbiAgY29uc3Qgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQyKTtcbiAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLm5vZGVUeXBlID09PSAxMSAvKiBEb2N1bWVudEZyYWdtZW50ICovID8gc3R5bGVDb250YWluZXJOb2RlIDogZG9jO1xuICBpZiAoc3R5bGUpIHtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUuaGVhZCB8fCBzdHlsZUNvbnRhaW5lck5vZGU7XG4gICAgICBsZXQgYXBwbGllZFN0eWxlcyA9IHJvb3RBcHBsaWVkU3R5bGVzLmdldChzdHlsZUNvbnRhaW5lck5vZGUpO1xuICAgICAgbGV0IHN0eWxlRWxtO1xuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgIHJvb3RBcHBsaWVkU3R5bGVzLnNldChzdHlsZUNvbnRhaW5lck5vZGUsIGFwcGxpZWRTdHlsZXMgPSAvKiBAX19QVVJFX18gKi9uZXcgU2V0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkMikpIHtcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlRWxtID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPSBudWxsID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgICBpZiAobm9uY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3R5bGVFbG0uc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihcImxpbmtcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA0IC8qIGhhc1Nsb3RSZWxvY2F0aW9uICovKSB7XG4gICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MICs9IFNMT1RfRkJfQ1NTO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgYXBwbGllZFN0eWxlcy5hZGQoc2NvcGVJZDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcGVJZDI7XG59O1xudmFyIGF0dGFjaFN0eWxlcyA9IGhvc3RSZWYgPT4ge1xuICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gIGNvbnN0IGVuZEF0dGFjaFN0eWxlcyA9IGNyZWF0ZVRpbWUoXCJhdHRhY2hTdHlsZXNcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICBjb25zdCBzY29wZUlkMiA9IGFkZFN0eWxlKGVsbS5zaGFkb3dSb290ID8gZWxtLnNoYWRvd1Jvb3QgOiBlbG0uZ2V0Um9vdE5vZGUoKSwgY21wTWV0YSk7XG4gIGlmIChmbGFncyAmIDEwIC8qIG5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgIGVsbVtcInMtc2NcIl0gPSBzY29wZUlkMjtcbiAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkMiArIFwiLWhcIik7XG4gIH1cbiAgZW5kQXR0YWNoU3R5bGVzKCk7XG59O1xudmFyIGdldFNjb3BlSWQgPSAoY21wLCBtb2RlKSA9PiBcInNjLVwiICsgY21wLiR0YWdOYW1lJDtcbnZhciBzZXRBY2Nlc3NvciA9IChlbG0sIG1lbWJlck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNTdmcsIGZsYWdzKSA9PiB7XG4gIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICBsZXQgaXNQcm9wID0gaXNNZW1iZXJJbkVsZW1lbnQoZWxtLCBtZW1iZXJOYW1lKTtcbiAgICBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1lbWJlck5hbWUgPT09IFwia2V5XCIpIDtlbHNlIHtcbiAgICAgIGNvbnN0IGlzQ29tcGxleCA9IGlzQ29tcGxleFR5cGUobmV3VmFsdWUpO1xuICAgICAgaWYgKChpc1Byb3AgfHwgaXNDb21wbGV4ICYmIG5ld1ZhbHVlICE9PSBudWxsKSAmJiAhaXNTdmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWVsbS50YWdOYW1lLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyBcIlwiIDogbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgICAgICAgaXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFZhbHVlID09IG51bGwgfHwgZWxtW21lbWJlck5hbWVdICE9IG4pIHtcbiAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gXCJcIikge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCghaXNQcm9wIHx8IGZsYWdzICYgNCAvKiBpc0hvc3QgKi8gfHwgaXNTdmcpICYmICFpc0NvbXBsZXgpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBuZXdWYWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvcnVudGltZS92ZG9tL3VwZGF0ZS1lbGVtZW50LnRzXG52YXIgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZTIpID0+IHtcbiAgY29uc3QgZWxtID0gbmV3Vm5vZGUuJGVsbSQubm9kZVR5cGUgPT09IDExIC8qIERvY3VtZW50RnJhZ21lbnQgKi8gJiYgbmV3Vm5vZGUuJGVsbSQuaG9zdCA/IG5ld1Zub2RlLiRlbG0kLmhvc3QgOiBuZXdWbm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IG9sZFZub2RlICYmIG9sZFZub2RlLiRhdHRycyQgfHwgRU1QVFlfT0JKO1xuICBjb25zdCBuZXdWbm9kZUF0dHJzID0gbmV3Vm5vZGUuJGF0dHJzJCB8fCBFTVBUWV9PQko7XG4gIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlck5hbWUgb2Ygc29ydGVkQXR0ck5hbWVzKE9iamVjdC5rZXlzKG9sZFZub2RlQXR0cnMpKSkge1xuICAgICAgaWYgKCEobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSkge1xuICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIHZvaWQgMCwgaXNTdmdNb2RlMiwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgbWVtYmVyTmFtZSBvZiBzb3J0ZWRBdHRyTmFtZXMoT2JqZWN0LmtleXMobmV3Vm5vZGVBdHRycykpKSB7XG4gICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBuZXdWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBpc1N2Z01vZGUyLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHNvcnRlZEF0dHJOYW1lcyhhdHRyTmFtZXMpIHtcbiAgcmV0dXJuIGF0dHJOYW1lcy5pbmNsdWRlcyhcInJlZlwiKSA/XG4gIC8vIHdlIG5lZWQgdG8gc29ydCB0aGVzZSB0byBlbnN1cmUgdGhhdCBgJ3JlZidgIGlzIHRoZSBsYXN0IGF0dHJcbiAgWy4uLmF0dHJOYW1lcy5maWx0ZXIoYXR0ciA9PiBhdHRyICE9PSBcInJlZlwiKSwgXCJyZWZcIl0gOlxuICAvLyBubyBuZWVkIHRvIHNvcnQsIHJldHVybiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgYXR0ck5hbWVzO1xufVxuXG4vLyBzcmMvcnVudGltZS92ZG9tL3Zkb20tcmVuZGVyLnRzXG52YXIgc2NvcGVJZDtcbnZhciBob3N0VGFnTmFtZTtcbnZhciB1c2VOYXRpdmVTaGFkb3dEb20gPSBmYWxzZTtcbnZhciBpc1N2Z01vZGUgPSBmYWxzZTtcbnZhciBjcmVhdGVFbG0gPSAob2xkUGFyZW50Vk5vZGUsIG5ld1BhcmVudFZOb2RlLCBjaGlsZEluZGV4LCBwYXJlbnRFbG0pID0+IHtcbiAgY29uc3QgbmV3Vk5vZGUyID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgbGV0IGkyID0gMDtcbiAgbGV0IGVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgaWYgKG5ld1ZOb2RlMi4kdGV4dCQgIT09IG51bGwpIHtcbiAgICBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSBkb2MuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUyLiR0ZXh0JCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc1N2Z01vZGUpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlMi4kdGFnJCA9PT0gXCJzdmdcIjtcbiAgICB9XG4gICAgZWxtID0gbmV3Vk5vZGUyLiRlbG0kID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCAhdXNlTmF0aXZlU2hhZG93RG9tICYmIEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlMi4kZmxhZ3MkICYgMiAvKiBpc1Nsb3RGYWxsYmFjayAqLyA/IFwic2xvdC1mYlwiIDogbmV3Vk5vZGUyLiR0YWckKTtcbiAgICBpZiAoaXNTdmdNb2RlICYmIG5ld1ZOb2RlMi4kdGFnJCA9PT0gXCJmb3JlaWduT2JqZWN0XCIpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICB7XG4gICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlMiwgaXNTdmdNb2RlKTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKHNjb3BlSWQpICYmIGVsbVtcInMtc2lcIl0gIT09IHNjb3BlSWQpIHtcbiAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGVsbVtcInMtc2lcIl0gPSBzY29wZUlkKTtcbiAgICB9XG4gICAgaWYgKG5ld1ZOb2RlMi4kY2hpbGRyZW4kKSB7XG4gICAgICBmb3IgKGkyID0gMDsgaTIgPCBuZXdWTm9kZTIuJGNoaWxkcmVuJC5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG9sZFBhcmVudFZOb2RlLCBuZXdWTm9kZTIsIGkyKTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChuZXdWTm9kZTIuJHRhZyQgPT09IFwic3ZnXCIpIHtcbiAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGVsbS50YWdOYW1lID09PSBcImZvcmVpZ25PYmplY3RcIikge1xuICAgICAgICBpc1N2Z01vZGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbG1bXCJzLWhuXCJdID0gaG9zdFRhZ05hbWU7XG4gIHJldHVybiBlbG07XG59O1xudmFyIGFkZFZub2RlcyA9IChwYXJlbnRFbG0sIGJlZm9yZSwgcGFyZW50Vk5vZGUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkgPT4ge1xuICBsZXQgY29udGFpbmVyRWxtID0gcGFyZW50RWxtO1xuICBsZXQgY2hpbGROb2RlO1xuICBpZiAoY29udGFpbmVyRWxtLnNoYWRvd1Jvb3QgJiYgY29udGFpbmVyRWxtLnRhZ05hbWUgPT09IGhvc3RUYWdOYW1lKSB7XG4gICAgY29udGFpbmVyRWxtID0gY29udGFpbmVyRWxtLnNoYWRvd1Jvb3Q7XG4gIH1cbiAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgIGlmICh2bm9kZXNbc3RhcnRJZHhdKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0obnVsbCwgcGFyZW50Vk5vZGUsIHN0YXJ0SWR4KTtcbiAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKGNvbnRhaW5lckVsbSwgY2hpbGROb2RlLCBiZWZvcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gc3RhcnRJZHg7IGluZGV4IDw9IGVuZElkeDsgKytpbmRleCkge1xuICAgIGNvbnN0IHZub2RlID0gdm5vZGVzW2luZGV4XTtcbiAgICBpZiAodm5vZGUpIHtcbiAgICAgIGNvbnN0IGVsbSA9IHZub2RlLiRlbG0kO1xuICAgICAgaWYgKGVsbSkge1xuICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIHVwZGF0ZUNoaWxkcmVuID0gKHBhcmVudEVsbSwgb2xkQ2gsIG5ld1ZOb2RlMiwgbmV3Q2gsIGlzSW5pdGlhbFJlbmRlciA9IGZhbHNlKSA9PiB7XG4gIGxldCBvbGRTdGFydElkeCA9IDA7XG4gIGxldCBuZXdTdGFydElkeCA9IDA7XG4gIGxldCBpZHhJbk9sZCA9IDA7XG4gIGxldCBpMiA9IDA7XG4gIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgbGV0IG5vZGU7XG4gIGxldCBlbG1Ub01vdmU7XG4gIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgIH0gZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKSkge1xuICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKSkge1xuICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpc0luaXRpYWxSZW5kZXIpKSB7XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIGluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuJGVsbSQsIG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGlzSW5pdGlhbFJlbmRlcikpIHtcbiAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuJGVsbSQsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkeEluT2xkID0gLTE7XG4gICAgICB7XG4gICAgICAgIGZvciAoaTIgPSBvbGRTdGFydElkeDsgaTIgPD0gb2xkRW5kSWR4OyArK2kyKSB7XG4gICAgICAgICAgaWYgKG9sZENoW2kyXSAmJiBvbGRDaFtpMl0uJGtleSQgIT09IG51bGwgJiYgb2xkQ2hbaTJdLiRrZXkkID09PSBuZXdTdGFydFZub2RlLiRrZXkkKSB7XG4gICAgICAgICAgICBpZHhJbk9sZCA9IGkyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWR4SW5PbGQgPj0gMCkge1xuICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgIGlmIChlbG1Ub01vdmUuJHRhZyQgIT09IG5ld1N0YXJ0Vm5vZGUuJHRhZyQpIHtcbiAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUyLCBpZHhJbk9sZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0Y2goZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHZvaWQgMDtcbiAgICAgICAgICBub2RlID0gZWxtVG9Nb3ZlLiRlbG0kO1xuICAgICAgICB9XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZTIsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAge1xuICAgICAgICAgIGluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLnBhcmVudE5vZGUsIG5vZGUsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlMiwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgpO1xuICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgfVxufTtcbnZhciBpc1NhbWVWbm9kZSA9IChsZWZ0Vk5vZGUsIHJpZ2h0Vk5vZGUsIGlzSW5pdGlhbFJlbmRlciA9IGZhbHNlKSA9PiB7XG4gIGlmIChsZWZ0Vk5vZGUuJHRhZyQgPT09IHJpZ2h0Vk5vZGUuJHRhZyQpIHtcbiAgICBpZiAoIWlzSW5pdGlhbFJlbmRlcikge1xuICAgICAgcmV0dXJuIGxlZnRWTm9kZS4ka2V5JCA9PT0gcmlnaHRWTm9kZS4ka2V5JDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUyLCBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlMi4kY2hpbGRyZW4kO1xuICBjb25zdCB0YWcgPSBuZXdWTm9kZTIuJHRhZyQ7XG4gIGNvbnN0IHRleHQgPSBuZXdWTm9kZTIuJHRleHQkO1xuICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgIHtcbiAgICAgIGlzU3ZnTW9kZSA9IHRhZyA9PT0gXCJzdmdcIiA/IHRydWUgOiB0YWcgPT09IFwiZm9yZWlnbk9iamVjdFwiID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgfVxuICAgIHtcbiAgICAgIGlmICh0YWcgPT09IFwic2xvdFwiICYmICF1c2VOYXRpdmVTaGFkb3dEb20pIDtlbHNlIHtcbiAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUyLCBpc1N2Z01vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwgJiYgbmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlMiwgbmV3Q2hpbGRyZW4sIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgfSBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9sZFZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgfVxuICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgbmV3Vk5vZGUyLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChvbGRDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoaWxkcmVuLCAwLCBvbGRDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgaWYgKGlzU3ZnTW9kZSAmJiB0YWcgPT09IFwic3ZnXCIpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IHRleHQpIHtcbiAgICBlbG0uZGF0YSA9IHRleHQ7XG4gIH1cbn07XG52YXIgaW5zZXJ0QmVmb3JlID0gKHBhcmVudCwgbmV3Tm9kZSwgcmVmZXJlbmNlKSA9PiB7XG4gIGNvbnN0IGluc2VydGVkID0gcGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZSk7XG4gIHJldHVybiBpbnNlcnRlZDtcbn07XG52YXIgcmVuZGVyVmRvbSA9IChob3N0UmVmLCByZW5kZXJGblJlc3VsdHMsIGlzSW5pdGlhbExvYWQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBob3N0RWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gIGNvbnN0IG9sZFZOb2RlID0gaG9zdFJlZi4kdm5vZGUkIHx8IG5ld1ZOb2RlKG51bGwsIG51bGwpO1xuICBjb25zdCByb290Vm5vZGUgPSBpc0hvc3QocmVuZGVyRm5SZXN1bHRzKSA/IHJlbmRlckZuUmVzdWx0cyA6IGgobnVsbCwgbnVsbCwgcmVuZGVyRm5SZXN1bHRzKTtcbiAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gIGlmIChpc0luaXRpYWxMb2FkICYmIHJvb3RWbm9kZS4kYXR0cnMkKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocm9vdFZub2RlLiRhdHRycyQpKSB7XG4gICAgICBpZiAoaG9zdEVsbS5oYXNBdHRyaWJ1dGUoa2V5KSAmJiAhW1wia2V5XCIsIFwicmVmXCIsIFwic3R5bGVcIiwgXCJjbGFzc1wiXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkW2tleV0gPSBob3N0RWxtW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gIHJvb3RWbm9kZS4kZmxhZ3MkIHw9IDQgLyogaXNIb3N0ICovO1xuICBob3N0UmVmLiR2bm9kZSQgPSByb290Vm5vZGU7XG4gIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gaG9zdEVsbS5zaGFkb3dSb290IHx8IGhvc3RFbG07XG4gIHtcbiAgICBzY29wZUlkID0gaG9zdEVsbVtcInMtc2NcIl07XG4gIH1cbiAgdXNlTmF0aXZlU2hhZG93RG9tID0gKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgIT09IDA7XG4gIHBhdGNoKG9sZFZOb2RlLCByb290Vm5vZGUsIGlzSW5pdGlhbExvYWQpO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvdXBkYXRlLWNvbXBvbmVudC50c1xudmFyIGF0dGFjaFRvQW5jZXN0b3IgPSAoaG9zdFJlZiwgYW5jZXN0b3JDb21wb25lbnQpID0+IHtcbiAgaWYgKGFuY2VzdG9yQ29tcG9uZW50ICYmICFob3N0UmVmLiRvblJlbmRlclJlc29sdmUkICYmIGFuY2VzdG9yQ29tcG9uZW50W1wicy1wXCJdKSB7XG4gICAgYW5jZXN0b3JDb21wb25lbnRbXCJzLXBcIl0ucHVzaChuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSByKSk7XG4gIH1cbn07XG52YXIgc2NoZWR1bGVVcGRhdGUgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDE2IC8qIGlzUXVldWVkRm9yVXBkYXRlICovO1xuICB9XG4gIGlmIChob3N0UmVmLiRmbGFncyQgJiA0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovKSB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBuZWVkc1JlcmVuZGVyICovO1xuICAgIHJldHVybjtcbiAgfVxuICBhdHRhY2hUb0FuY2VzdG9yKGhvc3RSZWYsIGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gKCkgPT4gZGlzcGF0Y2hIb29rcyhob3N0UmVmLCBpc0luaXRpYWxMb2FkKTtcbiAgcmV0dXJuIHdyaXRlVGFzayhkaXNwYXRjaCk7XG59O1xudmFyIGRpc3BhdGNoSG9va3MgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGVuZFNjaGVkdWxlID0gY3JlYXRlVGltZShcInNjaGVkdWxlVXBkYXRlXCIsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVuZGVyIGNvbXBvbmVudCA8JHtlbG0udGFnTmFtZS50b0xvd2VyQ2FzZSgpfSAvPiB3aXRoIGludmFsaWQgU3RlbmNpbCBydW50aW1lISBNYWtlIHN1cmUgdGhpcyBpbXBvcnRlZCBjb21wb25lbnQgaXMgY29tcGlsZWQgd2l0aCBhIFxcYGV4dGVybmFsUnVudGltZTogdHJ1ZVxcYCBmbGFnLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL2N1c3RvbS1lbGVtZW50cyNleHRlcm5hbHJ1bnRpbWVgKTtcbiAgfVxuICBsZXQgbWF5YmVQcm9taXNlO1xuICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgIHtcbiAgICAgIG1heWJlUHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbXBvbmVudFdpbGxMb2FkXCIpO1xuICAgIH1cbiAgfVxuICBlbmRTY2hlZHVsZSgpO1xuICByZXR1cm4gZW5xdWV1ZShtYXliZVByb21pc2UsICgpID0+IHVwZGF0ZUNvbXBvbmVudChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkpO1xufTtcbnZhciBlbnF1ZXVlID0gKG1heWJlUHJvbWlzZSwgZm4pID0+IGlzUHJvbWlzZXkobWF5YmVQcm9taXNlKSA/IG1heWJlUHJvbWlzZS50aGVuKGZuKS5jYXRjaChlcnIyID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnIyKTtcbiAgZm4oKTtcbn0pIDogZm4oKTtcbnZhciBpc1Byb21pc2V5ID0gbWF5YmVQcm9taXNlID0+IG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgfHwgbWF5YmVQcm9taXNlICYmIG1heWJlUHJvbWlzZS50aGVuICYmIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHVwZGF0ZUNvbXBvbmVudCA9IGFzeW5jIChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICB2YXIgX2E7XG4gIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3QgZW5kVXBkYXRlID0gY3JlYXRlVGltZShcInVwZGF0ZVwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCByYyA9IGVsbVtcInMtcmNcIl07XG4gIGlmIChpc0luaXRpYWxMb2FkKSB7XG4gICAgYXR0YWNoU3R5bGVzKGhvc3RSZWYpO1xuICB9XG4gIGNvbnN0IGVuZFJlbmRlciA9IGNyZWF0ZVRpbWUoXCJyZW5kZXJcIiwgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAge1xuICAgIGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSwgaXNJbml0aWFsTG9hZCk7XG4gIH1cbiAgaWYgKHJjKSB7XG4gICAgcmMubWFwKGNiID0+IGNiKCkpO1xuICAgIGVsbVtcInMtcmNcIl0gPSB2b2lkIDA7XG4gIH1cbiAgZW5kUmVuZGVyKCk7XG4gIGVuZFVwZGF0ZSgpO1xuICB7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9taXNlcyA9IChfYSA9IGVsbVtcInMtcFwiXSkgIT0gbnVsbCA/IF9hIDogW107XG4gICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwb3N0VXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UuYWxsKGNoaWxkcmVuUHJvbWlzZXMpLnRoZW4ocG9zdFVwZGF0ZSk7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gNCAvKiBpc1dhaXRpbmdGb3JDaGlsZHJlbiAqLztcbiAgICAgIGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gIH1cbn07XG52YXIgY2FsbFJlbmRlciA9IChob3N0UmVmLCBpbnN0YW5jZSwgZWxtLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHRyeSB7XG4gICAgaW5zdGFuY2UgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjE2IC8qIGlzUXVldWVkRm9yVXBkYXRlICovO1xuICAgIH1cbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBoYXNSZW5kZXJlZCAqLztcbiAgICB9XG4gICAge1xuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgcmVuZGVyVmRvbShob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG52YXIgcG9zdFVwZGF0ZUNvbXBvbmVudCA9IGhvc3RSZWYgPT4ge1xuICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGVuZFBvc3RVcGRhdGUgPSBjcmVhdGVUaW1lKFwicG9zdFVwZGF0ZVwiLCB0YWdOYW1lKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBob3N0UmVmLiRsYXp5SW5zdGFuY2UkO1xuICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAge1xuICAgICAgYWRkSHlkcmF0ZWRGbGFnKGVsbSk7XG4gICAgfVxuICAgIHtcbiAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbXBvbmVudERpZExvYWRcIik7XG4gICAgfVxuICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICB7XG4gICAgICBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQoZWxtKTtcbiAgICAgIGlmICghYW5jZXN0b3JDb21wb25lbnQpIHtcbiAgICAgICAgYXBwRGlkTG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbmRQb3N0VXBkYXRlKCk7XG4gIH1cbiAge1xuICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pIHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKSk7XG4gICAgfVxuICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+KDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogbmVlZHNSZXJlbmRlciAqLyk7XG4gIH1cbn07XG52YXIgYXBwRGlkTG9hZCA9IHdobyA9PiB7XG4gIHtcbiAgICBhZGRIeWRyYXRlZEZsYWcoZG9jLmRvY3VtZW50RWxlbWVudCk7XG4gIH1cbiAgbmV4dFRpY2soKCkgPT4gZW1pdEV2ZW50KHdpbiwgXCJhcHBsb2FkXCIsIHtcbiAgICBkZXRhaWw6IHtcbiAgICAgIG5hbWVzcGFjZTogTkFNRVNQQUNFXG4gICAgfVxuICB9KSk7XG59O1xudmFyIHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZykgPT4ge1xuICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2VbbWV0aG9kXSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShhcmcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn07XG52YXIgYWRkSHlkcmF0ZWRGbGFnID0gZWxtID0+IHtcbiAgdmFyIF9hO1xuICByZXR1cm4gZWxtLmNsYXNzTGlzdC5hZGQoKF9hID0gQlVJTEQuaHlkcmF0ZWRTZWxlY3Rvck5hbWUpICE9IG51bGwgPyBfYSA6IFwiaHlkcmF0ZWRcIik7XG59O1xuXG4vLyBzcmMvcnVudGltZS9zZXQtdmFsdWUudHNcbnZhciBnZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lKSA9PiBnZXRIb3N0UmVmKHJlZikuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xudmFyIHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICBpZiAoIWhvc3RSZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgaG9zdCBlbGVtZW50IGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9XCIgYXMgaXQgaXMgdW5rbm93biB0byB0aGlzIFN0ZW5jaWwgcnVudGltZS4gVGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiBpbnRlZ3JhdGluZyBhIDNyZCBwYXJ0eSBTdGVuY2lsIGNvbXBvbmVudCB3aXRoIGFub3RoZXIgU3RlbmNpbCBjb21wb25lbnQgb3IgYXBwbGljYXRpb24uIFBsZWFzZSByZWFjaCBvdXQgdG8gdGhlIG1haW50YWluZXJzIG9mIHRoZSAzcmQgcGFydHkgU3RlbmNpbCBjb21wb25lbnQgb3IgcmVwb3J0IHRoaXMgb24gdGhlIFN0ZW5jaWwgRGlzY29yZCBzZXJ2ZXIgKGh0dHBzOi8vY2hhdC5zdGVuY2lsanMuY29tKSBvciBjb21tZW50IG9uIHRoaXMgc2ltaWxhciBbR2l0SHViIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9zdGVuY2lsL2lzc3Vlcy81NDU3KS5gKTtcbiAgfVxuICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgY29uc3QgZmxhZ3MgPSBob3N0UmVmLiRmbGFncyQ7XG4gIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgY29uc3QgYXJlQm90aE5hTiA9IE51bWJlci5pc05hTihvbGRWYWwpICYmIE51bWJlci5pc05hTihuZXdWYWwpO1xuICBjb25zdCBkaWRWYWx1ZUNoYW5nZSA9IG5ld1ZhbCAhPT0gb2xkVmFsICYmICFhcmVCb3RoTmFOO1xuICBpZiAoKCEoZmxhZ3MgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdm9pZCAwKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgIGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5zZXQocHJvcE5hbWUsIG5ld1ZhbCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpZiAoKGZsYWdzICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL3Byb3h5LWNvbXBvbmVudC50c1xudmFyIHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHByb3RvdHlwZSA9IENzdHIucHJvdG90eXBlO1xuICBpZiAoY21wTWV0YS4kbWVtYmVycyQgfHwgQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcygoX2EgPSBjbXBNZXRhLiRtZW1iZXJzJCkgIT0gbnVsbCA/IF9hIDoge30pO1xuICAgIG1lbWJlcnMubWFwKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzXV0pID0+IHtcbiAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gfHwgZmxhZ3MgJiAyIC8qIHByb3h5U3RhdGUgKi8gJiYgbWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgY21wTWV0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSB7XG4gICAgICBjb25zdCBhdHRyTmFtZVRvUHJvcE5hbWUgPSAvKiBAX19QVVJFX18gKi9uZXcgTWFwKCk7XG4gICAgICBwcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGF0dHJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgcGx0LmptcCgoKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGF0dHJOYW1lVG9Qcm9wTmFtZS5nZXQoYXR0ck5hbWUpO1xuICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSBcIm51bWJlclwiICYmIHRoaXNbcHJvcE5hbWVdID09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZsYWdzMiA9IGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGZsYWdzJDtcbiAgICAgICAgICAgIGlmIChmbGFnczIgJiYgIShmbGFnczIgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pICYmIGZsYWdzMiAmIDEyOCAvKiBpc1dhdGNoUmVhZHkgKi8gJiYgbmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSAoX2EyID0gY21wTWV0YS4kd2F0Y2hlcnMkKSA9PSBudWxsID8gdm9pZCAwIDogX2EyW2F0dHJOYW1lXTtcbiAgICAgICAgICAgICAgZW50cnkgPT0gbnVsbCA/IHZvaWQgMCA6IGVudHJ5LmZvckVhY2goY2FsbGJhY2tOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbY2FsbGJhY2tOYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZVtjYWxsYmFja05hbWVdLmNhbGwoaW5zdGFuY2UsIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSBcImJvb2xlYW5cIiA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIENzdHIub2JzZXJ2ZWRBdHRyaWJ1dGVzID0gQXJyYXkuZnJvbSgvKiBAX19QVVJFX18gKi9uZXcgU2V0KFsuLi5PYmplY3Qua2V5cygoX2IgPSBjbXBNZXRhLiR3YXRjaGVycyQpICE9IG51bGwgPyBfYiA6IHt9KSwgLi4ubWVtYmVycy5maWx0ZXIoKFtfLCBtXSkgPT4gbVswXSAmIDE1IC8qIEhhc0F0dHJpYnV0ZSAqLykubWFwKChbcHJvcE5hbWUsIG1dKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbVsxXSB8fCBwcm9wTmFtZTtcbiAgICAgICAgYXR0ck5hbWVUb1Byb3BOYW1lLnNldChhdHRyTmFtZSwgcHJvcE5hbWUpO1xuICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICB9KV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENzdHI7XG59O1xuXG4vLyBzcmMvcnVudGltZS9pbml0aWFsaXplLWNvbXBvbmVudC50c1xudmFyIGluaXRpYWxpemVDb21wb25lbnQgPSBhc3luYyAoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgbGV0IENzdHI7XG4gIGlmICgoaG9zdFJlZi4kZmxhZ3MkICYgMzIgLyogaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi8pID09PSAwKSB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIGhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgICBpZiAoYnVuZGxlSWQpIHtcbiAgICAgIGNvbnN0IENzdHJJbXBvcnQgPSBsb2FkTW9kdWxlKGNtcE1ldGEpO1xuICAgICAgaWYgKENzdHJJbXBvcnQgJiYgXCJ0aGVuXCIgaW4gQ3N0ckltcG9ydCkge1xuICAgICAgICBjb25zdCBlbmRMb2FkID0gdW5pcXVlVGltZSgpO1xuICAgICAgICBDc3RyID0gYXdhaXQgQ3N0ckltcG9ydDtcbiAgICAgICAgZW5kTG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ3N0ciA9IENzdHJJbXBvcnQ7XG4gICAgICB9XG4gICAgICBpZiAoIUNzdHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25zdHJ1Y3RvciBmb3IgXCIke2NtcE1ldGEuJHRhZ05hbWUkfSMke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiB3YXMgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgICBpZiAoIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogcHJveHlTdGF0ZSAqLyk7XG4gICAgICAgIENzdHIuaXNQcm94aWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVuZE5ld0luc3RhbmNlID0gY3JlYXRlVGltZShcImNyZWF0ZUluc3RhbmNlXCIsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBDc3RyKGhvc3RSZWYpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+OCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgfVxuICAgICAgZW5kTmV3SW5zdGFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ3N0ciA9IGVsbS5jb25zdHJ1Y3RvcjtcbiAgICAgIGNvbnN0IGNtcFRhZyA9IGVsbS5sb2NhbE5hbWU7XG4gICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChjbXBUYWcpLnRoZW4oKCkgPT4gaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBpc1dhdGNoUmVhZHkgKi8pO1xuICAgIH1cbiAgICBpZiAoQ3N0ciAmJiBDc3RyLnN0eWxlKSB7XG4gICAgICBsZXQgc3R5bGU7XG4gICAgICBpZiAodHlwZW9mIENzdHIuc3R5bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3R5bGUgPSBDc3RyLnN0eWxlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NvcGVJZDIgPSBnZXRTY29wZUlkKGNtcE1ldGEpO1xuICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQyKSkge1xuICAgICAgICBjb25zdCBlbmRSZWdpc3RlclN0eWxlcyA9IGNyZWF0ZVRpbWUoXCJyZWdpc3RlclN0eWxlc1wiLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgICAgIHJlZ2lzdGVyU3R5bGUoc2NvcGVJZDIsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgZW5kUmVnaXN0ZXJTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgdHJ1ZSk7XG4gIGlmIChhbmNlc3RvckNvbXBvbmVudCAmJiBhbmNlc3RvckNvbXBvbmVudFtcInMtcmNcIl0pIHtcbiAgICBhbmNlc3RvckNvbXBvbmVudFtcInMtcmNcIl0ucHVzaChzY2hlZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGUoKTtcbiAgfVxufTtcbnZhciBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSBpbnN0YW5jZSA9PiB7fTtcblxuLy8gc3JjL3J1bnRpbWUvY29ubmVjdGVkLWNhbGxiYWNrLnRzXG52YXIgY29ubmVjdGVkQ2FsbGJhY2sgPSBlbG0gPT4ge1xuICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBjb25zdCBlbmRDb25uZWN0ZWQgPSBjcmVhdGVUaW1lKFwiY29ubmVjdGVkQ2FsbGJhY2tcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogaGFzQ29ubmVjdGVkICovKSkge1xuICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEgLyogaGFzQ29ubmVjdGVkICovO1xuICAgICAge1xuICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgIHdoaWxlIChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkge1xuICAgICAgICAgIGlmIChhbmNlc3RvckNvbXBvbmVudFtcInMtcFwiXSkge1xuICAgICAgICAgICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQgPSBhbmNlc3RvckNvbXBvbmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCkubWFwKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzXV0pID0+IHtcbiAgICAgICAgICBpZiAobWVtYmVyRmxhZ3MgJiAzMSAvKiBQcm9wICovICYmIGVsbS5oYXNPd25Qcm9wZXJ0eShtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICBkZWxldGUgZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaW5pdGlhbGl6ZUNvbXBvbmVudChlbG0sIGhvc3RSZWYsIGNtcE1ldGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCkgO2Vsc2UgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCkge1xuICAgICAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQudGhlbigoKSA9PiBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVuZENvbm5lY3RlZCgpO1xuICB9XG59O1xudmFyIGRpc2Nvbm5lY3RJbnN0YW5jZSA9IGluc3RhbmNlID0+IHt9O1xudmFyIGRpc2Nvbm5lY3RlZENhbGxiYWNrID0gYXN5bmMgZWxtID0+IHtcbiAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICBpZiAoaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCkgO2Vsc2UgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCkge1xuICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4gZGlzY29ubmVjdEluc3RhbmNlKCkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gc3JjL3J1bnRpbWUvYm9vdHN0cmFwLWxhenkudHNcbnZhciBib290c3RyYXBMYXp5ID0gKGxhenlCdW5kbGVzLCBvcHRpb25zID0ge30pID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBlbmRCb290c3RyYXAgPSBjcmVhdGVUaW1lKCk7XG4gIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgY29uc3QgZXhjbHVkZSA9IG9wdGlvbnMuZXhjbHVkZSB8fCBbXTtcbiAgY29uc3QgY3VzdG9tRWxlbWVudHMyID0gd2luLmN1c3RvbUVsZW1lbnRzO1xuICBjb25zdCBoZWFkID0gZG9jLmhlYWQ7XG4gIGNvbnN0IG1ldGFDaGFyc2V0ID0gLyogQF9fUFVSRV9fICovaGVhZC5xdWVyeVNlbGVjdG9yKFwibWV0YVtjaGFyc2V0XVwiKTtcbiAgY29uc3QgZGF0YVN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqL2RvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gIGxldCBpc0Jvb3RzdHJhcHBpbmcgPSB0cnVlO1xuICBPYmplY3QuYXNzaWduKHBsdCwgb3B0aW9ucyk7XG4gIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgXCIuL1wiLCBkb2MuYmFzZVVSSSkuaHJlZjtcbiAgbGV0IGhhc1Nsb3RSZWxvY2F0aW9uID0gZmFsc2U7XG4gIGxhenlCdW5kbGVzLm1hcChsYXp5QnVuZGxlID0+IHtcbiAgICBsYXp5QnVuZGxlWzFdLm1hcChjb21wYWN0TWV0YSA9PiB7XG4gICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdXG4gICAgICB9O1xuICAgICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDQgLyogaGFzU2xvdFJlbG9jYXRpb24gKi8pIHtcbiAgICAgICAgaGFzU2xvdFJlbG9jYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFnTmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgICAgY29uc3QgSG9zdEVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gU3RlbmNpbExhenlIb3N0XG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGYpIHtcbiAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICB0aGlzLmhhc1JlZ2lzdGVyZWRFdmVudExpc3RlbmVycyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHJlZ2lzdGVySG9zdChzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmICghc2VsZi5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VsZi5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNoYWRvd1Jvb3QubW9kZSAhPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHJlLXVzZSBleGlzdGluZyBzaGFkb3cgcm9vdCBmb3IgJHtjbXBNZXRhLiR0YWdOYW1lJH0hIE1vZGUgaXMgc2V0IHRvICR7c2VsZi5zaGFkb3dSb290Lm1vZGV9IGJ1dCBTdGVuY2lsIG9ubHkgc3VwcG9ydHMgb3BlbiBzaGFkb3cgcm9vdHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgIGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhc1JlZ2lzdGVyZWRFdmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcnMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXBwTG9hZEZhbGxiYWNrKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYXBwTG9hZEZhbGxiYWNrKTtcbiAgICAgICAgICAgIGFwcExvYWRGYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICBwbHQuam1wKCgpID0+IGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRPblJlYWR5KCkge1xuICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMyLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjbXBUYWdzLnB1c2godGFnTmFtZSk7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzMi5kZWZpbmUodGFnTmFtZSwgcHJveHlDb21wb25lbnQoSG9zdEVsZW1lbnQsIGNtcE1ldGEsIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmIChjbXBUYWdzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaGFzU2xvdFJlbG9jYXRpb24pIHtcbiAgICAgIGRhdGFTdHlsZXMudGV4dENvbnRlbnQgKz0gU0xPVF9GQl9DU1M7XG4gICAgfVxuICAgIHtcbiAgICAgIGRhdGFTdHlsZXMudGV4dENvbnRlbnQgKz0gY21wVGFncy5zb3J0KCkgKyBIWURSQVRFRF9DU1M7XG4gICAgfVxuICAgIGlmIChkYXRhU3R5bGVzLmlubmVySFRNTC5sZW5ndGgpIHtcbiAgICAgIGRhdGFTdHlsZXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZXNcIiwgXCJcIik7XG4gICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPSBudWxsID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgIGlmIChub25jZSAhPSBudWxsKSB7XG4gICAgICAgIGRhdGFTdHlsZXMuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgfVxuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoZGF0YVN0eWxlcywgbWV0YUNoYXJzZXQgPyBtZXRhQ2hhcnNldC5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGlzQm9vdHN0cmFwcGluZyA9IGZhbHNlO1xuICBpZiAoZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubWFwKGhvc3QgPT4gaG9zdC5jb25uZWN0ZWRDYWxsYmFjaygpKTtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBwbHQuam1wKCgpID0+IGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKTtcbiAgICB9XG4gIH1cbiAgZW5kQm9vdHN0cmFwKCk7XG59O1xuXG4vLyBzcmMvcnVudGltZS9ub25jZS50c1xudmFyIHNldE5vbmNlID0gbm9uY2UgPT4gcGx0LiRub25jZSQgPSBub25jZTtcbmV4cG9ydCB7IEhvc3QgYXMgSCwgYm9vdHN0cmFwTGF6eSBhcyBiLCBnZXRBc3NldFBhdGggYXMgZywgaCwgcHJvbWlzZVJlc29sdmUgYXMgcCwgcmVnaXN0ZXJJbnN0YW5jZSBhcyByLCBzZXROb25jZSBhcyBzIH07XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFlBQVk7QUFDbEIsSUFBTTtBQUFBO0FBQUEsRUFBaUM7QUFBQSxJQUNyQyxhQUFhO0FBQUEsSUFDYixvQkFBb0I7QUFBQSxJQUNwQixjQUFjO0FBQUEsSUFDZCxZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxJQUNqQixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxJQUNuQixrQkFBa0I7QUFBQSxJQUNsQixnQkFBZ0I7QUFBQSxJQUNoQixVQUFVO0FBQUEsSUFDVixzQkFBc0I7QUFBQSxJQUN0QixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCwrQkFBK0I7QUFBQSxJQUMvQix1QkFBdUI7QUFBQSxJQUN2QixnQkFBZ0I7QUFBQSxJQUNoQixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxvQkFBb0I7QUFBQSxJQUNwQix3QkFBd0I7QUFBQSxJQUN4Qiw0QkFBNEI7QUFBQSxJQUM1QiwwQkFBMEI7QUFBQSxJQUMxQiwwQkFBMEI7QUFBQSxJQUMxQixzQkFBc0I7QUFBQSxJQUN0QixtQkFBbUI7QUFBQSxJQUNuQixtQkFBbUI7QUFBQSxJQUNuQixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsSUFDZixzQkFBc0I7QUFBQSxJQUN0QixvQkFBb0I7QUFBQSxJQUNwQix1QkFBdUI7QUFBQSxJQUN2QixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxvQkFBb0I7QUFBQSxJQUNwQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixrQkFBa0I7QUFBQSxJQUNsQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUiwwQkFBMEI7QUFBQSxJQUMxQixnQkFBZ0I7QUFBQSxJQUNoQixzQkFBc0I7QUFBQSxJQUN0QixXQUFXO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxJQUNuQixnQkFBZ0I7QUFBQSxJQUNoQixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxLQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxrQkFBa0I7QUFBQSxJQUNsQixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxJQUNoQixTQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsRUFDakI7QUFBQTtBQUtBLElBQUksWUFBWSxPQUFPO0FBQ3ZCLElBQUksV0FBVyxDQUFDLFFBQVEsUUFBUTtBQUM5QixXQUFTLFFBQVEsSUFBSyxXQUFVLFFBQVEsTUFBTTtBQUFBLElBQzVDLEtBQUssSUFBSSxJQUFJO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDZCxDQUFDO0FBQ0g7QUFDQSxJQUFJLFdBQTBCLG9CQUFJLFFBQVE7QUFDMUMsSUFBSSxhQUFhLFNBQU8sU0FBUyxJQUFJLEdBQUc7QUFDeEMsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLFlBQVksU0FBUyxJQUFJLFFBQVEsaUJBQWlCLGNBQWMsT0FBTztBQUM3RyxJQUFJLGVBQWUsQ0FBQyxhQUFhLFlBQVk7QUFDM0MsUUFBTSxVQUFVO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxlQUFlO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxrQkFBaUMsb0JBQUksSUFBSTtBQUFBLEVBQzNDO0FBQ0E7QUFDRSxZQUFRLG1CQUFtQixJQUFJLFFBQVEsT0FBSyxRQUFRLG1CQUFtQixDQUFDO0FBQ3hFLGdCQUFZLEtBQUssSUFBSSxDQUFDO0FBQ3RCLGdCQUFZLE1BQU0sSUFBSSxDQUFDO0FBQUEsRUFDekI7QUFDQSxTQUFPLFNBQVMsSUFBSSxhQUFhLE9BQU87QUFDMUM7QUFDQSxJQUFJLG9CQUFvQixDQUFDLEtBQUssZUFBZSxjQUFjO0FBQzNELElBQUksZUFBZSxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVEsT0FBTyxHQUFHLEVBQUU7QUFHdEQsSUFBSSxhQUE0QixvQkFBSSxJQUFJO0FBQ3hDLElBQUksYUFBYSxDQUFDLFNBQVMsU0FBUyxpQkFBaUI7QUFDbkQsUUFBTSxhQUFhLFFBQVEsVUFBVSxRQUFRLE1BQU0sR0FBRztBQUN0RCxRQUFNLFdBQVcsUUFBUTtBQUN6QixNQUFJLENBQUMsVUFBVTtBQUNiLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxTQUFTLFdBQVcsSUFBSSxRQUFRO0FBQ3RDLE1BQUksUUFBUTtBQUNWLFdBQU8sT0FBTyxVQUFVO0FBQUEsRUFDMUI7QUFFQSx3SUFJQSx5QkFBSyxRQUFRLFlBQVksRUFBRSxJQUFJLEtBQUssb0JBQWtCO0FBQ3BEO0FBQ0UsaUJBQVcsSUFBSSxVQUFVLGNBQWM7QUFBQSxJQUN6QztBQUNBLFdBQU8sZUFBZSxVQUFVO0FBQUEsRUFDbEMsR0FBRyxZQUFZO0FBQ2pCO0FBR0EsSUFBSSxTQUF3QixvQkFBSSxJQUFJO0FBQ3BDLElBQUksZUFBZTtBQUNuQixJQUFJLGNBQWM7QUFDbEIsSUFBSSxNQUFNLE9BQU8sV0FBVyxjQUFjLFNBQVMsQ0FBQztBQUNwRCxJQUFJLE1BQU0sSUFBSSxZQUFZO0FBQUEsRUFDeEIsTUFBTSxDQUFDO0FBQ1Q7QUFDQSxJQUFJLE1BQU07QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULGdCQUFnQjtBQUFBLEVBQ2hCLEtBQUssUUFBTSxHQUFHO0FBQUEsRUFDZCxLQUFLLFFBQU0sc0JBQXNCLEVBQUU7QUFBQSxFQUNuQyxLQUFLLENBQUMsSUFBSSxXQUFXLFVBQVUsU0FBUyxHQUFHLGlCQUFpQixXQUFXLFVBQVUsSUFBSTtBQUFBLEVBQ3JGLEtBQUssQ0FBQyxJQUFJLFdBQVcsVUFBVSxTQUFTLEdBQUcsb0JBQW9CLFdBQVcsVUFBVSxJQUFJO0FBQUEsRUFDeEYsSUFBSSxDQUFDLFdBQVcsU0FBUyxJQUFJLFlBQVksV0FBVyxJQUFJO0FBQzFEO0FBQ0EsSUFBSSxpQkFBaUIsT0FBSyxRQUFRLFFBQVEsQ0FBQztBQUMzQyxJQUFJLG1DQUFtRCx1QkFBTTtBQUMzRCxNQUFJO0FBQ0YsUUFBSSxjQUFjO0FBQ2xCLFdBQU8sT0FBTyxJQUFJLGNBQWMsRUFBRSxnQkFBZ0I7QUFBQSxFQUNwRCxTQUFTLEdBQUc7QUFBQSxFQUFDO0FBQ2IsU0FBTztBQUNULEdBQUc7QUFDSCxJQUFJLGVBQWU7QUFDbkIsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixJQUFJLGlCQUFpQixDQUFDO0FBQ3RCLElBQUksWUFBWSxDQUFDLE9BQU8sVUFBVSxRQUFNO0FBQ3RDLFFBQU0sS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLGNBQWM7QUFDakIsbUJBQWU7QUFDZixRQUFJLFNBQVMsSUFBSSxVQUFVLEdBQW1CO0FBQzVDLGVBQVMsS0FBSztBQUFBLElBQ2hCLE9BQU87QUFDTCxVQUFJLElBQUksS0FBSztBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFJLFVBQVUsV0FBUztBQUNyQixXQUFTLEtBQUssR0FBRyxLQUFLLE1BQU0sUUFBUSxNQUFNO0FBQ3hDLFFBQUk7QUFDRixZQUFNLEVBQUUsRUFBRSxZQUFZLElBQUksQ0FBQztBQUFBLElBQzdCLFNBQVMsR0FBRztBQUNWLG1CQUFhLENBQUM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFNBQVM7QUFDakI7QUFDQSxJQUFJLFFBQVEsTUFBTTtBQUNoQixVQUFRLGFBQWE7QUFDckI7QUFDRSxZQUFRLGNBQWM7QUFDdEIsUUFBSSxlQUFlLGNBQWMsU0FBUyxHQUFHO0FBQzNDLFVBQUksSUFBSSxLQUFLO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksV0FBVyxRQUFNLGVBQWUsRUFBRSxLQUFLLEVBQUU7QUFDN0MsSUFBSSxZQUEyQiwwQkFBVSxnQkFBZ0IsSUFBSTtBQUc3RCxJQUFJLGVBQWUsVUFBUTtBQUN6QixRQUFNLFdBQVcsSUFBSSxJQUFJLE1BQU0sSUFBSSxjQUFjO0FBQ2pELFNBQU8sU0FBUyxXQUFXLElBQUksU0FBUyxTQUFTLFNBQVMsT0FBTyxTQUFTO0FBQzVFO0FBR0EsSUFBSSxZQUFZLENBQUM7QUFDakIsSUFBSSxTQUFTO0FBQ2IsSUFBSSxVQUFVO0FBR2QsSUFBSSxRQUFRLE9BQUssS0FBSztBQUN0QixJQUFJLGdCQUFnQixPQUFLO0FBQ3ZCLE1BQUksT0FBTztBQUNYLFNBQU8sTUFBTSxZQUFZLE1BQU07QUFDakM7QUFHQSxTQUFTLHlCQUF5QixNQUFNO0FBQ3RDLE1BQUksSUFBSSxJQUFJO0FBQ1osVUFBUSxNQUFNLE1BQU0sS0FBSyxLQUFLLFNBQVMsT0FBTyxTQUFTLEdBQUcsY0FBYyx3QkFBd0IsTUFBTSxPQUFPLFNBQVMsR0FBRyxhQUFhLFNBQVMsTUFBTSxPQUFPLEtBQUs7QUFDbks7QUFHQSxJQUFJLGlCQUFpQixDQUFDO0FBQ3RCLFNBQVMsZ0JBQWdCO0FBQUEsRUFDdkIsS0FBSyxNQUFNO0FBQUEsRUFDWCxLQUFLLE1BQU07QUFBQSxFQUNYLElBQUksTUFBTTtBQUFBLEVBQ1YsUUFBUSxNQUFNO0FBQUEsRUFDZCxXQUFXLE1BQU07QUFDbkIsQ0FBQztBQUNELElBQUksS0FBSyxZQUFVO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1A7QUFDRjtBQUNBLElBQUksTUFBTSxZQUFVO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1A7QUFDRjtBQUNBLFNBQVMsSUFBSSxRQUFRLElBQUk7QUFDdkIsTUFBSSxPQUFPLE1BQU07QUFDZixVQUFNLE1BQU0sR0FBRyxPQUFPLEtBQUs7QUFDM0IsUUFBSSxlQUFlLFNBQVM7QUFDMUIsYUFBTyxJQUFJLEtBQUssWUFBVSxHQUFHLE1BQU0sQ0FBQztBQUFBLElBQ3RDLE9BQU87QUFDTCxhQUFPLEdBQUcsR0FBRztBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0EsTUFBSSxPQUFPLE9BQU87QUFDaEIsVUFBTSxRQUFRLE9BQU87QUFDckIsV0FBTyxJQUFJLEtBQUs7QUFBQSxFQUNsQjtBQUNBLFFBQU07QUFDUjtBQUNBLElBQUksU0FBUyxZQUFVO0FBQ3JCLE1BQUksT0FBTyxNQUFNO0FBQ2YsV0FBTyxPQUFPO0FBQUEsRUFDaEIsT0FBTztBQUNMLFVBQU0sT0FBTztBQUFBLEVBQ2Y7QUFDRjtBQUNBLElBQUksWUFBWSxZQUFVO0FBQ3hCLE1BQUksT0FBTyxPQUFPO0FBQ2hCLFdBQU8sT0FBTztBQUFBLEVBQ2hCLE9BQU87QUFDTCxVQUFNLE9BQU87QUFBQSxFQUNmO0FBQ0Y7QUFDQSxJQUFJLGFBQWEsQ0FBQyxRQUFRLFVBQVUsT0FBTztBQUN6QztBQUNFLFdBQU8sTUFBTTtBQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksYUFBYSxDQUFDLEtBQUssZ0JBQWdCO0FBQ3JDO0FBQ0UsV0FBTyxNQUFNO0FBQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBSSxJQUFJLENBQUMsVUFBVSxjQUFjLGFBQWE7QUFDNUMsTUFBSSxRQUFRO0FBQ1osTUFBSSxNQUFNO0FBQ1YsTUFBSSxTQUFTO0FBQ2IsTUFBSSxhQUFhO0FBQ2pCLFFBQU0sZ0JBQWdCLENBQUM7QUFDdkIsUUFBTSxPQUFPLE9BQUs7QUFDaEIsYUFBUyxLQUFLLEdBQUcsS0FBSyxFQUFFLFFBQVEsTUFBTTtBQUNwQyxjQUFRLEVBQUUsRUFBRTtBQUNaLFVBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN4QixhQUFLLEtBQUs7QUFBQSxNQUNaLFdBQVcsU0FBUyxRQUFRLE9BQU8sVUFBVSxXQUFXO0FBQ3RELFlBQUksU0FBUyxPQUFPLGFBQWEsY0FBYyxDQUFDLGNBQWMsS0FBSyxHQUFHO0FBQ3BFLGtCQUFRLE9BQU8sS0FBSztBQUFBLFFBQ3RCO0FBQ0EsWUFBSSxVQUFVLFlBQVk7QUFDeEIsd0JBQWMsY0FBYyxTQUFTLENBQUMsRUFBRSxVQUFVO0FBQUEsUUFDcEQsT0FBTztBQUNMLHdCQUFjLEtBQUssU0FBUyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUs7QUFBQSxRQUMzRDtBQUNBLHFCQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsT0FBSyxRQUFRO0FBQ2IsTUFBSSxXQUFXO0FBQ2IsUUFBSSxVQUFVLEtBQUs7QUFDakIsWUFBTSxVQUFVO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQ0EsUUFBTSxRQUFRLFNBQVMsVUFBVSxJQUFJO0FBQ3JDLFFBQU0sVUFBVTtBQUNoQixNQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzVCLFVBQU0sYUFBYTtBQUFBLEVBQ3JCO0FBQ0E7QUFDRSxVQUFNLFFBQVE7QUFBQSxFQUNoQjtBQUNBLFNBQU87QUFDVDtBQUNBLElBQUksV0FBVyxDQUFDLEtBQUssU0FBUztBQUM1QixRQUFNLFFBQVE7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxFQUNkO0FBQ0E7QUFDRSxVQUFNLFVBQVU7QUFBQSxFQUNsQjtBQUNBO0FBQ0UsVUFBTSxRQUFRO0FBQUEsRUFDaEI7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFJLE9BQU8sQ0FBQztBQUNaLElBQUksU0FBUyxVQUFRLFFBQVEsS0FBSyxVQUFVO0FBQzVDLElBQUkscUJBQXFCLENBQUMsV0FBVyxhQUFhO0FBQ2hELE1BQUksYUFBYSxRQUFRLENBQUMsY0FBYyxTQUFTLEdBQUc7QUFDbEQsUUFBSSxXQUFXLEdBQWdCO0FBQzdCLGFBQU8sT0FBTyxTQUFTO0FBQUEsSUFDekI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQUNBLElBQUksWUFBWSxDQUFDLEtBQUssTUFBTSxTQUFTO0FBQ25DLFFBQU0sS0FBSyxJQUFJLEdBQUcsTUFBTSxJQUFJO0FBQzVCLE1BQUksY0FBYyxFQUFFO0FBQ3BCLFNBQU87QUFDVDtBQUNBLElBQUksb0JBQW1DLG9CQUFJLFFBQVE7QUFDbkQsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLFNBQVMsWUFBWTtBQUNsRCxNQUFJLFFBQVEsT0FBTyxJQUFJLFFBQVE7QUFDL0IsTUFBSSxvQ0FBb0MsU0FBUztBQUMvQyxZQUFRLFNBQVMsSUFBSSxjQUFjO0FBQ25DLFFBQUksT0FBTyxVQUFVLFVBQVU7QUFDN0IsY0FBUTtBQUFBLElBQ1YsT0FBTztBQUNMLFlBQU0sWUFBWSxPQUFPO0FBQUEsSUFDM0I7QUFBQSxFQUNGLE9BQU87QUFDTCxZQUFRO0FBQUEsRUFDVjtBQUNBLFNBQU8sSUFBSSxVQUFVLEtBQUs7QUFDNUI7QUFDQSxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsU0FBUyxTQUFTO0FBQ3BELE1BQUk7QUFDSixRQUFNLFdBQVcsV0FBVyxPQUFPO0FBQ25DLFFBQU0sUUFBUSxPQUFPLElBQUksUUFBUTtBQUNqQyx1QkFBcUIsbUJBQW1CLGFBQWEsS0FBNEIscUJBQXFCO0FBQ3RHLE1BQUksT0FBTztBQUNULFFBQUksT0FBTyxVQUFVLFVBQVU7QUFDN0IsMkJBQXFCLG1CQUFtQixRQUFRO0FBQ2hELFVBQUksZ0JBQWdCLGtCQUFrQixJQUFJLGtCQUFrQjtBQUM1RCxVQUFJO0FBQ0osVUFBSSxDQUFDLGVBQWU7QUFDbEIsMEJBQWtCLElBQUksb0JBQW9CLGdCQUErQixvQkFBSSxJQUFJLENBQUM7QUFBQSxNQUNwRjtBQUNBLFVBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxHQUFHO0FBQ2hDO0FBQ0UscUJBQVcsSUFBSSxjQUFjLE9BQU87QUFDcEMsbUJBQVMsWUFBWTtBQUNyQixnQkFBTSxTQUFTLEtBQUssSUFBSSxZQUFZLE9BQU8sS0FBSyx5QkFBeUIsR0FBRztBQUM1RSxjQUFJLFNBQVMsTUFBTTtBQUNqQixxQkFBUyxhQUFhLFNBQVMsS0FBSztBQUFBLFVBQ3RDO0FBQ0EsNkJBQW1CLGFBQWEsVUFBVSxtQkFBbUIsY0FBYyxNQUFNLENBQUM7QUFBQSxRQUNwRjtBQUNBLFlBQUksUUFBUSxVQUFVLEdBQTJCO0FBQy9DLG1CQUFTLGFBQWE7QUFBQSxRQUN4QjtBQUNBLFlBQUksZUFBZTtBQUNqQix3QkFBYyxJQUFJLFFBQVE7QUFBQSxRQUM1QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQW1CLFNBQVMsS0FBSyxHQUFHO0FBQ2pFLHlCQUFtQixxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixvQkFBb0IsS0FBSztBQUFBLElBQzFGO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUNBLElBQUksZUFBZSxhQUFXO0FBQzVCLFFBQU0sVUFBVSxRQUFRO0FBQ3hCLFFBQU0sTUFBTSxRQUFRO0FBQ3BCLFFBQU0sUUFBUSxRQUFRO0FBQ3RCLFFBQU0sa0JBQWtCLFdBQVcsZ0JBQWdCLFFBQVEsU0FBUztBQUNwRSxRQUFNLFdBQVcsU0FBUyxJQUFJLGFBQWEsSUFBSSxhQUFhLElBQUksWUFBWSxHQUFHLE9BQU87QUFDdEYsTUFBSSxRQUFRLElBQW1DO0FBQzdDLFFBQUksTUFBTSxJQUFJO0FBQ2QsUUFBSSxVQUFVLElBQUksV0FBVyxJQUFJO0FBQUEsRUFDbkM7QUFDQSxrQkFBZ0I7QUFDbEI7QUFDQSxJQUFJLGFBQWEsQ0FBQyxLQUFLLFNBQVMsUUFBUSxJQUFJO0FBQzVDLElBQUksY0FBYyxDQUFDLEtBQUssWUFBWSxVQUFVLFVBQVUsT0FBTyxVQUFVO0FBQ3ZFLE1BQUksYUFBYSxVQUFVO0FBQ3pCLFFBQUksU0FBUyxrQkFBa0IsS0FBSyxVQUFVO0FBQzlDLGVBQVcsWUFBWTtBQUN2QixRQUFJLGVBQWUsTUFBTztBQUFBLFNBQU07QUFDOUIsWUFBTSxZQUFZLGNBQWMsUUFBUTtBQUN4QyxXQUFLLFVBQVUsYUFBYSxhQUFhLFNBQVMsQ0FBQyxPQUFPO0FBQ3hELFlBQUk7QUFDRixjQUFJLENBQUMsSUFBSSxRQUFRLFNBQVMsR0FBRyxHQUFHO0FBQzlCLGtCQUFNLElBQUksWUFBWSxPQUFPLEtBQUs7QUFDbEMsZ0JBQUksZUFBZSxRQUFRO0FBQ3pCLHVCQUFTO0FBQUEsWUFDWCxXQUFXLFlBQVksUUFBUSxJQUFJLFVBQVUsS0FBSyxHQUFHO0FBQ25ELGtCQUFJLFVBQVUsSUFBSTtBQUFBLFlBQ3BCO0FBQUEsVUFDRixPQUFPO0FBQ0wsZ0JBQUksVUFBVSxJQUFJO0FBQUEsVUFDcEI7QUFBQSxRQUNGLFNBQVMsR0FBRztBQUFBLFFBQUM7QUFBQSxNQUNmO0FBQ0EsVUFBSSxZQUFZLFFBQVEsYUFBYSxPQUFPO0FBQzFDLFlBQUksYUFBYSxTQUFTLElBQUksYUFBYSxVQUFVLE1BQU0sSUFBSTtBQUM3RDtBQUNFLGdCQUFJLGdCQUFnQixVQUFVO0FBQUEsVUFDaEM7QUFBQSxRQUNGO0FBQUEsTUFDRixZQUFZLENBQUMsVUFBVSxRQUFRLEtBQWtCLFVBQVUsQ0FBQyxXQUFXO0FBQ3JFLG1CQUFXLGFBQWEsT0FBTyxLQUFLO0FBQ3BDO0FBQ0UsY0FBSSxhQUFhLFlBQVksUUFBUTtBQUFBLFFBQ3ZDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsVUFBVSxlQUFlO0FBQ3RELFFBQU0sTUFBTSxTQUFTLE1BQU0sYUFBYSxNQUE2QixTQUFTLE1BQU0sT0FBTyxTQUFTLE1BQU0sT0FBTyxTQUFTO0FBQzFILFFBQU0sZ0JBQWdCLFlBQVksU0FBUyxXQUFXO0FBQ3RELFFBQU0sZ0JBQWdCLFNBQVMsV0FBVztBQUMxQztBQUNFLGVBQVcsY0FBYyxnQkFBZ0IsT0FBTyxLQUFLLGFBQWEsQ0FBQyxHQUFHO0FBQ3BFLFVBQUksRUFBRSxjQUFjLGdCQUFnQjtBQUNsQyxvQkFBWSxLQUFLLFlBQVksY0FBYyxVQUFVLEdBQUcsUUFBUSxZQUFZLFNBQVMsT0FBTztBQUFBLE1BQzlGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxhQUFXLGNBQWMsZ0JBQWdCLE9BQU8sS0FBSyxhQUFhLENBQUMsR0FBRztBQUNwRSxnQkFBWSxLQUFLLFlBQVksY0FBYyxVQUFVLEdBQUcsY0FBYyxVQUFVLEdBQUcsWUFBWSxTQUFTLE9BQU87QUFBQSxFQUNqSDtBQUNGO0FBQ0EsU0FBUyxnQkFBZ0IsV0FBVztBQUNsQyxTQUFPLFVBQVUsU0FBUyxLQUFLO0FBQUE7QUFBQSxJQUUvQixDQUFDLEdBQUcsVUFBVSxPQUFPLFVBQVEsU0FBUyxLQUFLLEdBQUcsS0FBSztBQUFBO0FBQUE7QUFBQSxJQUVuRDtBQUFBO0FBQ0Y7QUFHQSxJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUkscUJBQXFCO0FBQ3pCLElBQUksWUFBWTtBQUNoQixJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsZ0JBQWdCLFlBQVksY0FBYztBQUN6RSxRQUFNLFlBQVksZUFBZSxXQUFXLFVBQVU7QUFDdEQsTUFBSSxLQUFLO0FBQ1QsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLFVBQVUsV0FBVyxNQUFNO0FBQzdCLFVBQU0sVUFBVSxRQUFRLElBQUksZUFBZSxVQUFVLE1BQU07QUFBQSxFQUM3RCxPQUFPO0FBQ0wsUUFBSSxDQUFDLFdBQVc7QUFDZCxrQkFBWSxVQUFVLFVBQVU7QUFBQSxJQUNsQztBQUNBLFVBQU0sVUFBVSxRQUFRLElBQUksZ0JBQWdCLFlBQVksU0FBUyxTQUFTLENBQUMsc0JBQXNCLE1BQU0sa0JBQWtCLFVBQVUsVUFBVSxJQUF5QixZQUFZLFVBQVUsS0FBSztBQUNqTSxRQUFJLGFBQWEsVUFBVSxVQUFVLGlCQUFpQjtBQUNwRCxrQkFBWTtBQUFBLElBQ2Q7QUFDQTtBQUNFLG9CQUFjLE1BQU0sV0FBVyxTQUFTO0FBQUEsSUFDMUM7QUFDQSxRQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLFNBQVM7QUFDN0MsVUFBSSxVQUFVLElBQUksSUFBSSxNQUFNLElBQUksT0FBTztBQUFBLElBQ3pDO0FBQ0EsUUFBSSxVQUFVLFlBQVk7QUFDeEIsV0FBSyxLQUFLLEdBQUcsS0FBSyxVQUFVLFdBQVcsUUFBUSxFQUFFLElBQUk7QUFDbkQsb0JBQVksVUFBVSxnQkFBZ0IsV0FBVyxFQUFFO0FBQ25ELFlBQUksV0FBVztBQUNiLGNBQUksWUFBWSxTQUFTO0FBQUEsUUFDM0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBO0FBQ0UsVUFBSSxVQUFVLFVBQVUsT0FBTztBQUM3QixvQkFBWTtBQUFBLE1BQ2QsV0FBVyxJQUFJLFlBQVksaUJBQWlCO0FBQzFDLG9CQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsTUFBSSxNQUFNLElBQUk7QUFDZCxTQUFPO0FBQ1Q7QUFDQSxJQUFJLFlBQVksQ0FBQyxXQUFXLFFBQVEsYUFBYSxRQUFRLFVBQVUsV0FBVztBQUM1RSxNQUFJLGVBQWU7QUFDbkIsTUFBSTtBQUNKLE1BQUksYUFBYSxjQUFjLGFBQWEsWUFBWSxhQUFhO0FBQ25FLG1CQUFlLGFBQWE7QUFBQSxFQUM5QjtBQUNBLFNBQU8sWUFBWSxRQUFRLEVBQUUsVUFBVTtBQUNyQyxRQUFJLE9BQU8sUUFBUSxHQUFHO0FBQ3BCLGtCQUFZLFVBQVUsTUFBTSxhQUFhLFFBQVE7QUFDakQsVUFBSSxXQUFXO0FBQ2IsZUFBTyxRQUFRLEVBQUUsUUFBUTtBQUN6QixxQkFBYSxjQUFjLFdBQVcsTUFBTTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksZUFBZSxDQUFDLFFBQVEsVUFBVSxXQUFXO0FBQy9DLFdBQVMsUUFBUSxVQUFVLFNBQVMsUUFBUSxFQUFFLE9BQU87QUFDbkQsVUFBTSxRQUFRLE9BQU8sS0FBSztBQUMxQixRQUFJLE9BQU87QUFDVCxZQUFNLE1BQU0sTUFBTTtBQUNsQixVQUFJLEtBQUs7QUFDUCxZQUFJLE9BQU87QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksaUJBQWlCLENBQUMsV0FBVyxPQUFPLFdBQVcsT0FBTyxrQkFBa0IsVUFBVTtBQUNwRixNQUFJLGNBQWM7QUFDbEIsTUFBSSxjQUFjO0FBQ2xCLE1BQUksV0FBVztBQUNmLE1BQUksS0FBSztBQUNULE1BQUksWUFBWSxNQUFNLFNBQVM7QUFDL0IsTUFBSSxnQkFBZ0IsTUFBTSxDQUFDO0FBQzNCLE1BQUksY0FBYyxNQUFNLFNBQVM7QUFDakMsTUFBSSxZQUFZLE1BQU0sU0FBUztBQUMvQixNQUFJLGdCQUFnQixNQUFNLENBQUM7QUFDM0IsTUFBSSxjQUFjLE1BQU0sU0FBUztBQUNqQyxNQUFJO0FBQ0osTUFBSTtBQUNKLFNBQU8sZUFBZSxhQUFhLGVBQWUsV0FBVztBQUMzRCxRQUFJLGlCQUFpQixNQUFNO0FBQ3pCLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUFBLElBQ3JDLFdBQVcsZUFBZSxNQUFNO0FBQzlCLG9CQUFjLE1BQU0sRUFBRSxTQUFTO0FBQUEsSUFDakMsV0FBVyxpQkFBaUIsTUFBTTtBQUNoQyxzQkFBZ0IsTUFBTSxFQUFFLFdBQVc7QUFBQSxJQUNyQyxXQUFXLGVBQWUsTUFBTTtBQUM5QixvQkFBYyxNQUFNLEVBQUUsU0FBUztBQUFBLElBQ2pDLFdBQVcsWUFBWSxlQUFlLGVBQWUsZUFBZSxHQUFHO0FBQ3JFLFlBQU0sZUFBZSxlQUFlLGVBQWU7QUFDbkQsc0JBQWdCLE1BQU0sRUFBRSxXQUFXO0FBQ25DLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUFBLElBQ3JDLFdBQVcsWUFBWSxhQUFhLGFBQWEsZUFBZSxHQUFHO0FBQ2pFLFlBQU0sYUFBYSxhQUFhLGVBQWU7QUFDL0Msb0JBQWMsTUFBTSxFQUFFLFNBQVM7QUFDL0Isb0JBQWMsTUFBTSxFQUFFLFNBQVM7QUFBQSxJQUNqQyxXQUFXLFlBQVksZUFBZSxhQUFhLGVBQWUsR0FBRztBQUNuRSxZQUFNLGVBQWUsYUFBYSxlQUFlO0FBQ2pELG1CQUFhLFdBQVcsY0FBYyxPQUFPLFlBQVksTUFBTSxXQUFXO0FBQzFFLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUNuQyxvQkFBYyxNQUFNLEVBQUUsU0FBUztBQUFBLElBQ2pDLFdBQVcsWUFBWSxhQUFhLGVBQWUsZUFBZSxHQUFHO0FBQ25FLFlBQU0sYUFBYSxlQUFlLGVBQWU7QUFDakQsbUJBQWEsV0FBVyxZQUFZLE9BQU8sY0FBYyxLQUFLO0FBQzlELG9CQUFjLE1BQU0sRUFBRSxTQUFTO0FBQy9CLHNCQUFnQixNQUFNLEVBQUUsV0FBVztBQUFBLElBQ3JDLE9BQU87QUFDTCxpQkFBVztBQUNYO0FBQ0UsYUFBSyxLQUFLLGFBQWEsTUFBTSxXQUFXLEVBQUUsSUFBSTtBQUM1QyxjQUFJLE1BQU0sRUFBRSxLQUFLLE1BQU0sRUFBRSxFQUFFLFVBQVUsUUFBUSxNQUFNLEVBQUUsRUFBRSxVQUFVLGNBQWMsT0FBTztBQUNwRix1QkFBVztBQUNYO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsVUFBSSxZQUFZLEdBQUc7QUFDakIsb0JBQVksTUFBTSxRQUFRO0FBQzFCLFlBQUksVUFBVSxVQUFVLGNBQWMsT0FBTztBQUMzQyxpQkFBTyxVQUFVLFNBQVMsTUFBTSxXQUFXLEdBQUcsV0FBVyxRQUFRO0FBQUEsUUFDbkUsT0FBTztBQUNMLGdCQUFNLFdBQVcsZUFBZSxlQUFlO0FBQy9DLGdCQUFNLFFBQVEsSUFBSTtBQUNsQixpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFDQSx3QkFBZ0IsTUFBTSxFQUFFLFdBQVc7QUFBQSxNQUNyQyxPQUFPO0FBQ0wsZUFBTyxVQUFVLFNBQVMsTUFBTSxXQUFXLEdBQUcsV0FBVyxXQUFXO0FBQ3BFLHdCQUFnQixNQUFNLEVBQUUsV0FBVztBQUFBLE1BQ3JDO0FBQ0EsVUFBSSxNQUFNO0FBQ1I7QUFDRSx1QkFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLGNBQWMsS0FBSztBQUFBLFFBQ3hFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsTUFBSSxjQUFjLFdBQVc7QUFDM0IsY0FBVSxXQUFXLE1BQU0sWUFBWSxDQUFDLEtBQUssT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDLEVBQUUsT0FBTyxXQUFXLE9BQU8sYUFBYSxTQUFTO0FBQUEsRUFDakksV0FBVyxjQUFjLFdBQVc7QUFDbEMsaUJBQWEsT0FBTyxhQUFhLFNBQVM7QUFBQSxFQUM1QztBQUNGO0FBQ0EsSUFBSSxjQUFjLENBQUMsV0FBVyxZQUFZLGtCQUFrQixVQUFVO0FBQ3BFLE1BQUksVUFBVSxVQUFVLFdBQVcsT0FBTztBQUN4QyxRQUFJLENBQUMsaUJBQWlCO0FBQ3BCLGFBQU8sVUFBVSxVQUFVLFdBQVc7QUFBQSxJQUN4QztBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBSSxRQUFRLENBQUMsVUFBVSxXQUFXLGtCQUFrQixVQUFVO0FBQzVELFFBQU0sTUFBTSxVQUFVLFFBQVEsU0FBUztBQUN2QyxRQUFNLGNBQWMsU0FBUztBQUM3QixRQUFNLGNBQWMsVUFBVTtBQUM5QixRQUFNLE1BQU0sVUFBVTtBQUN0QixRQUFNLE9BQU8sVUFBVTtBQUN2QixNQUFJLFNBQVMsTUFBTTtBQUNqQjtBQUNFLGtCQUFZLFFBQVEsUUFBUSxPQUFPLFFBQVEsa0JBQWtCLFFBQVE7QUFBQSxJQUN2RTtBQUNBO0FBQ0UsVUFBSSxRQUFRLFVBQVUsQ0FBQyxtQkFBb0I7QUFBQSxXQUFNO0FBQy9DLHNCQUFjLFVBQVUsV0FBVyxTQUFTO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxnQkFBZ0IsUUFBUSxnQkFBZ0IsTUFBTTtBQUNoRCxxQkFBZSxLQUFLLGFBQWEsV0FBVyxhQUFhLGVBQWU7QUFBQSxJQUMxRSxXQUFXLGdCQUFnQixNQUFNO0FBQy9CLFVBQUksU0FBUyxXQUFXLE1BQU07QUFDNUIsWUFBSSxjQUFjO0FBQUEsTUFDcEI7QUFDQSxnQkFBVSxLQUFLLE1BQU0sV0FBVyxhQUFhLEdBQUcsWUFBWSxTQUFTLENBQUM7QUFBQSxJQUN4RSxXQUFXLGdCQUFnQixNQUFNO0FBQy9CLG1CQUFhLGFBQWEsR0FBRyxZQUFZLFNBQVMsQ0FBQztBQUFBLElBQ3JEO0FBQ0EsUUFBSSxhQUFhLFFBQVEsT0FBTztBQUM5QixrQkFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGLFdBQVcsU0FBUyxXQUFXLE1BQU07QUFDbkMsUUFBSSxPQUFPO0FBQUEsRUFDYjtBQUNGO0FBQ0EsSUFBSSxlQUFlLENBQUMsUUFBUSxTQUFTLGNBQWM7QUFDakQsUUFBTSxXQUFXLFVBQVUsT0FBTyxTQUFTLE9BQU8sYUFBYSxTQUFTLFNBQVM7QUFDakYsU0FBTztBQUNUO0FBQ0EsSUFBSSxhQUFhLENBQUMsU0FBUyxpQkFBaUIsZ0JBQWdCLFVBQVU7QUFDcEUsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxXQUFXLFFBQVEsV0FBVyxTQUFTLE1BQU0sSUFBSTtBQUN2RCxRQUFNLFlBQVksT0FBTyxlQUFlLElBQUksa0JBQWtCLEVBQUUsTUFBTSxNQUFNLGVBQWU7QUFDM0YsZ0JBQWMsUUFBUTtBQUN0QixNQUFJLGlCQUFpQixVQUFVLFNBQVM7QUFDdEMsZUFBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sR0FBRztBQUNoRCxVQUFJLFFBQVEsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sT0FBTyxTQUFTLE9BQU8sRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNoRixrQkFBVSxRQUFRLEdBQUcsSUFBSSxRQUFRLEdBQUc7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsWUFBVSxRQUFRO0FBQ2xCLFlBQVUsV0FBVztBQUNyQixVQUFRLFVBQVU7QUFDbEIsWUFBVSxRQUFRLFNBQVMsUUFBUSxRQUFRLGNBQWM7QUFDekQ7QUFDRSxjQUFVLFFBQVEsTUFBTTtBQUFBLEVBQzFCO0FBQ0Esd0JBQXNCLFFBQVEsVUFBVSxPQUFvQztBQUM1RSxRQUFNLFVBQVUsV0FBVyxhQUFhO0FBQzFDO0FBR0EsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLHNCQUFzQjtBQUNyRCxNQUFJLHFCQUFxQixDQUFDLFFBQVEscUJBQXFCLGtCQUFrQixLQUFLLEdBQUc7QUFDL0Usc0JBQWtCLEtBQUssRUFBRSxLQUFLLElBQUksUUFBUSxPQUFLLFFBQVEsb0JBQW9CLENBQUMsQ0FBQztBQUFBLEVBQy9FO0FBQ0Y7QUFDQSxJQUFJLGlCQUFpQixDQUFDLFNBQVMsa0JBQWtCO0FBQy9DO0FBQ0UsWUFBUSxXQUFXO0FBQUEsRUFDckI7QUFDQSxNQUFJLFFBQVEsVUFBVSxHQUE4QjtBQUNsRCxZQUFRLFdBQVc7QUFDbkI7QUFBQSxFQUNGO0FBQ0EsbUJBQWlCLFNBQVMsUUFBUSxtQkFBbUI7QUFDckQsUUFBTSxXQUFXLE1BQU0sY0FBYyxTQUFTLGFBQWE7QUFDM0QsU0FBTyxVQUFVLFFBQVE7QUFDM0I7QUFDQSxJQUFJLGdCQUFnQixDQUFDLFNBQVMsa0JBQWtCO0FBQzlDLFFBQU0sTUFBTSxRQUFRO0FBQ3BCLFFBQU0sY0FBYyxXQUFXLGtCQUFrQixRQUFRLFVBQVUsU0FBUztBQUM1RSxRQUFNLFdBQVcsUUFBUTtBQUN6QixNQUFJLENBQUMsVUFBVTtBQUNiLFVBQU0sSUFBSSxNQUFNLDJCQUEyQixJQUFJLFFBQVEsWUFBWSxDQUFDLHlOQUF5TjtBQUFBLEVBQy9SO0FBQ0EsTUFBSTtBQUNKLE1BQUksZUFBZTtBQUNqQjtBQUNFLHFCQUFlLFNBQVMsVUFBVSxtQkFBbUI7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFDQSxjQUFZO0FBQ1osU0FBTyxRQUFRLGNBQWMsTUFBTSxnQkFBZ0IsU0FBUyxVQUFVLGFBQWEsQ0FBQztBQUN0RjtBQUNBLElBQUksVUFBVSxDQUFDLGNBQWMsT0FBTyxXQUFXLFlBQVksSUFBSSxhQUFhLEtBQUssRUFBRSxFQUFFLE1BQU0sVUFBUTtBQUNqRyxVQUFRLE1BQU0sSUFBSTtBQUNsQixLQUFHO0FBQ0wsQ0FBQyxJQUFJLEdBQUc7QUFDUixJQUFJLGFBQWEsa0JBQWdCLHdCQUF3QixXQUFXLGdCQUFnQixhQUFhLFFBQVEsT0FBTyxhQUFhLFNBQVM7QUFDdEksSUFBSSxrQkFBa0IsQ0FBTyxTQUFTLFVBQVUsa0JBQWtCO0FBQ2hFLE1BQUk7QUFDSixRQUFNLE1BQU0sUUFBUTtBQUNwQixRQUFNLFlBQVksV0FBVyxVQUFVLFFBQVEsVUFBVSxTQUFTO0FBQ2xFLFFBQU0sS0FBSyxJQUFJLE1BQU07QUFDckIsTUFBSSxlQUFlO0FBQ2pCLGlCQUFhLE9BQU87QUFBQSxFQUN0QjtBQUNBLFFBQU0sWUFBWSxXQUFXLFVBQVUsUUFBUSxVQUFVLFNBQVM7QUFDbEU7QUFDRSxlQUFXLFNBQVMsVUFBVSxLQUFLLGFBQWE7QUFBQSxFQUNsRDtBQUNBLE1BQUksSUFBSTtBQUNOLE9BQUcsSUFBSSxRQUFNLEdBQUcsQ0FBQztBQUNqQixRQUFJLE1BQU0sSUFBSTtBQUFBLEVBQ2hCO0FBQ0EsWUFBVTtBQUNWLFlBQVU7QUFDVjtBQUNFLFVBQU0sb0JBQW9CLEtBQUssSUFBSSxLQUFLLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDM0QsVUFBTSxhQUFhLE1BQU0sb0JBQW9CLE9BQU87QUFDcEQsUUFBSSxpQkFBaUIsV0FBVyxHQUFHO0FBQ2pDLGlCQUFXO0FBQUEsSUFDYixPQUFPO0FBQ0wsY0FBUSxJQUFJLGdCQUFnQixFQUFFLEtBQUssVUFBVTtBQUM3QyxjQUFRLFdBQVc7QUFDbkIsdUJBQWlCLFNBQVM7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksYUFBYSxDQUFDLFNBQVMsVUFBVSxLQUFLLGtCQUFrQjtBQUMxRCxNQUFJO0FBQ0YsZUFBVyxTQUFTLE9BQU87QUFDM0I7QUFDRSxjQUFRLFdBQVcsQ0FBQztBQUFBLElBQ3RCO0FBQ0E7QUFDRSxjQUFRLFdBQVc7QUFBQSxJQUNyQjtBQUNBO0FBQ0U7QUFDRTtBQUNFLHFCQUFXLFNBQVMsVUFBVSxhQUFhO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsU0FBUyxHQUFHO0FBQ1YsaUJBQWEsR0FBRyxRQUFRLGFBQWE7QUFBQSxFQUN2QztBQUNBLFNBQU87QUFDVDtBQUNBLElBQUksc0JBQXNCLGFBQVc7QUFDbkMsUUFBTSxVQUFVLFFBQVEsVUFBVTtBQUNsQyxRQUFNLE1BQU0sUUFBUTtBQUNwQixRQUFNLGdCQUFnQixXQUFXLGNBQWMsT0FBTztBQUN0RCxRQUFNLFdBQVcsUUFBUTtBQUN6QixRQUFNLG9CQUFvQixRQUFRO0FBQ2xDLE1BQUksRUFBRSxRQUFRLFVBQVUsS0FBOEI7QUFDcEQsWUFBUSxXQUFXO0FBQ25CO0FBQ0Usc0JBQWdCLEdBQUc7QUFBQSxJQUNyQjtBQUNBO0FBQ0UsZUFBUyxVQUFVLGtCQUFrQjtBQUFBLElBQ3ZDO0FBQ0Esa0JBQWM7QUFDZDtBQUNFLGNBQVEsaUJBQWlCLEdBQUc7QUFDNUIsVUFBSSxDQUFDLG1CQUFtQjtBQUN0QixtQkFBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRixPQUFPO0FBQ0wsa0JBQWM7QUFBQSxFQUNoQjtBQUNBO0FBQ0UsUUFBSSxRQUFRLG1CQUFtQjtBQUM3QixjQUFRLGtCQUFrQjtBQUMxQixjQUFRLG9CQUFvQjtBQUFBLElBQzlCO0FBQ0EsUUFBSSxRQUFRLFVBQVUsS0FBeUI7QUFDN0MsZUFBUyxNQUFNLGVBQWUsU0FBUyxLQUFLLENBQUM7QUFBQSxJQUMvQztBQUNBLFlBQVEsV0FBVyxFQUFFLElBQStCO0FBQUEsRUFDdEQ7QUFDRjtBQUNBLElBQUksYUFBYSxTQUFPO0FBQ3RCO0FBQ0Usb0JBQWdCLElBQUksZUFBZTtBQUFBLEVBQ3JDO0FBQ0EsV0FBUyxNQUFNLFVBQVUsS0FBSyxXQUFXO0FBQUEsSUFDdkMsUUFBUTtBQUFBLE1BQ04sV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUNKO0FBQ0EsSUFBSSxXQUFXLENBQUMsVUFBVSxRQUFRLFFBQVE7QUFDeEMsTUFBSSxZQUFZLFNBQVMsTUFBTSxHQUFHO0FBQ2hDLFFBQUk7QUFDRixhQUFPLFNBQVMsTUFBTSxFQUFFLEdBQUc7QUFBQSxJQUM3QixTQUFTLEdBQUc7QUFDVixtQkFBYSxDQUFDO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBSSxrQkFBa0IsU0FBTztBQUMzQixNQUFJO0FBQ0osU0FBTyxJQUFJLFVBQVUsS0FBSyxLQUFLLE1BQU0seUJBQXlCLE9BQU8sS0FBSyxVQUFVO0FBQ3RGO0FBR0EsSUFBSSxXQUFXLENBQUMsS0FBSyxhQUFhLFdBQVcsR0FBRyxFQUFFLGlCQUFpQixJQUFJLFFBQVE7QUFDL0UsSUFBSSxXQUFXLENBQUMsS0FBSyxVQUFVLFFBQVEsWUFBWTtBQUNqRCxRQUFNLFVBQVUsV0FBVyxHQUFHO0FBQzlCLE1BQUksQ0FBQyxTQUFTO0FBQ1osVUFBTSxJQUFJLE1BQU0sbUNBQW1DLFFBQVEsU0FBUywrWUFBK1k7QUFBQSxFQUNyZDtBQUNBLFFBQU0sU0FBUyxRQUFRLGlCQUFpQixJQUFJLFFBQVE7QUFDcEQsUUFBTSxRQUFRLFFBQVE7QUFDdEIsUUFBTSxXQUFXLFFBQVE7QUFDekIsV0FBUyxtQkFBbUIsUUFBUSxRQUFRLFVBQVUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNsRSxRQUFNLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sTUFBTTtBQUM5RCxRQUFNLGlCQUFpQixXQUFXLFVBQVUsQ0FBQztBQUM3QyxPQUFLLEVBQUUsUUFBUSxNQUFtQyxXQUFXLFdBQVcsZ0JBQWdCO0FBQ3RGLFlBQVEsaUJBQWlCLElBQUksVUFBVSxNQUFNO0FBQzdDLFFBQUksVUFBVTtBQUNaLFdBQUssU0FBUyxJQUFzQixTQUFpQyxHQUFxQjtBQUN4Rix1QkFBZSxTQUFTLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFJLGlCQUFpQixDQUFDLE1BQU0sU0FBUyxVQUFVO0FBQzdDLE1BQUksSUFBSTtBQUNSLFFBQU0sWUFBWSxLQUFLO0FBQ3ZCLE1BQUksUUFBUSxhQUFhLE1BQU0sZUFBZTtBQUM1QyxVQUFNLFVBQVUsT0FBTyxTQUFTLEtBQUssUUFBUSxjQUFjLE9BQU8sS0FBSyxDQUFDLENBQUM7QUFDekUsWUFBUSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU07QUFDM0MsVUFBSSxjQUFjLE1BQWlCLFFBQVEsS0FBc0IsY0FBYyxJQUFnQjtBQUM3RixlQUFPLGVBQWUsV0FBVyxZQUFZO0FBQUEsVUFDM0MsTUFBTTtBQUNKLG1CQUFPLFNBQVMsTUFBTSxVQUFVO0FBQUEsVUFDbEM7QUFBQSxVQUNBLElBQUksVUFBVTtBQUNaLHFCQUFTLE1BQU0sWUFBWSxVQUFVLE9BQU87QUFBQSxVQUM5QztBQUFBLFVBQ0EsY0FBYztBQUFBLFVBQ2QsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFDRCxRQUFJLFFBQVEsR0FBOEI7QUFDeEMsWUFBTSxxQkFBb0Msb0JBQUksSUFBSTtBQUNsRCxnQkFBVSwyQkFBMkIsU0FBVSxVQUFVLFVBQVUsVUFBVTtBQUMzRSxZQUFJLElBQUksTUFBTTtBQUNaLGNBQUk7QUFDSixnQkFBTSxXQUFXLG1CQUFtQixJQUFJLFFBQVE7QUFDaEQsY0FBSSxLQUFLLGVBQWUsUUFBUSxHQUFHO0FBQ2pDLHVCQUFXLEtBQUssUUFBUTtBQUN4QixtQkFBTyxLQUFLLFFBQVE7QUFBQSxVQUN0QixXQUFXLFVBQVUsZUFBZSxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTSxZQUFZLEtBQUssUUFBUSxLQUFLLFVBQVU7QUFDakg7QUFBQSxVQUNGLFdBQVcsWUFBWSxNQUFNO0FBQzNCLGtCQUFNLFVBQVUsV0FBVyxJQUFJO0FBQy9CLGtCQUFNLFNBQVMsV0FBVyxPQUFPLFNBQVMsUUFBUTtBQUNsRCxnQkFBSSxVQUFVLEVBQUUsU0FBUyxNQUFtQyxTQUFTLE9BQTBCLGFBQWEsVUFBVTtBQUNwSCxvQkFBTSxXQUFXLFFBQVE7QUFDekIsb0JBQU0sU0FBUyxNQUFNLFFBQVEsZUFBZSxPQUFPLFNBQVMsSUFBSSxRQUFRO0FBQ3hFLHVCQUFTLE9BQU8sU0FBUyxNQUFNLFFBQVEsa0JBQWdCO0FBQ3JELG9CQUFJLFNBQVMsWUFBWSxLQUFLLE1BQU07QUFDbEMsMkJBQVMsWUFBWSxFQUFFLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUTtBQUFBLGdCQUNwRTtBQUFBLGNBQ0YsQ0FBQztBQUFBLFlBQ0g7QUFDQTtBQUFBLFVBQ0Y7QUFDQSxlQUFLLFFBQVEsSUFBSSxhQUFhLFFBQVEsT0FBTyxLQUFLLFFBQVEsTUFBTSxZQUFZLFFBQVE7QUFBQSxRQUN0RixDQUFDO0FBQUEsTUFDSDtBQUNBLFdBQUsscUJBQXFCLE1BQU0sS0FBb0Isb0JBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxlQUFlLE9BQU8sS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVE7QUFBQSxRQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSTtBQUFBO0FBQUEsTUFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTTtBQUMzTSxjQUFNLFdBQVcsRUFBRSxDQUFDLEtBQUs7QUFDekIsMkJBQW1CLElBQUksVUFBVSxRQUFRO0FBQ3pDLGVBQU87QUFBQSxNQUNULENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUdBLElBQUksc0JBQXNCLENBQU8sS0FBSyxTQUFTLFNBQVMsaUJBQWlCO0FBQ3ZFLE1BQUk7QUFDSixPQUFLLFFBQVEsVUFBVSxRQUFzQyxHQUFHO0FBQzlELFlBQVEsV0FBVztBQUNuQixVQUFNLFdBQVcsUUFBUTtBQUN6QixRQUFJLFVBQVU7QUFDWixZQUFNLGFBQWEsV0FBVyxPQUFPO0FBQ3JDLFVBQUksY0FBYyxVQUFVLFlBQVk7QUFDdEMsY0FBTSxVQUFVLFdBQVc7QUFDM0IsZUFBTyxNQUFNO0FBQ2IsZ0JBQVE7QUFBQSxNQUNWLE9BQU87QUFDTCxlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUksQ0FBQyxNQUFNO0FBQ1QsY0FBTSxJQUFJLE1BQU0sb0JBQW9CLFFBQVEsU0FBUyxJQUFJLFFBQVEsVUFBVSxpQkFBaUI7QUFBQSxNQUM5RjtBQUNBLFVBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxVQUFlO0FBQUEsVUFBTTtBQUFBLFVBQVM7QUFBQTtBQUFBLFFBQWtCO0FBQ2hELGFBQUssWUFBWTtBQUFBLE1BQ25CO0FBQ0EsWUFBTSxpQkFBaUIsV0FBVyxrQkFBa0IsUUFBUSxTQUFTO0FBQ3JFO0FBQ0UsZ0JBQVEsV0FBVztBQUFBLE1BQ3JCO0FBQ0EsVUFBSTtBQUNGLFlBQUksS0FBSyxPQUFPO0FBQUEsTUFDbEIsU0FBUyxHQUFHO0FBQ1YscUJBQWEsQ0FBQztBQUFBLE1BQ2hCO0FBQ0E7QUFDRSxnQkFBUSxXQUFXLENBQUM7QUFBQSxNQUN0QjtBQUNBLHFCQUFlO0FBQUEsSUFDakIsT0FBTztBQUNMLGFBQU8sSUFBSTtBQUNYLFlBQU0sU0FBUyxJQUFJO0FBQ25CLHFCQUFlLFlBQVksTUFBTSxFQUFFO0FBQUEsUUFBSyxNQUFNLFFBQVEsV0FBVztBQUFBO0FBQUEsTUFBc0I7QUFBQSxJQUN6RjtBQUNBLFFBQUksUUFBUSxLQUFLLE9BQU87QUFDdEIsVUFBSTtBQUNKLFVBQUksT0FBTyxLQUFLLFVBQVUsVUFBVTtBQUNsQyxnQkFBUSxLQUFLO0FBQUEsTUFDZjtBQUNBLFlBQU0sV0FBVyxXQUFXLE9BQU87QUFDbkMsVUFBSSxDQUFDLE9BQU8sSUFBSSxRQUFRLEdBQUc7QUFDekIsY0FBTSxvQkFBb0IsV0FBVyxrQkFBa0IsUUFBUSxTQUFTO0FBQ3hFLHNCQUFjLFVBQVUsT0FBTyxDQUFDLEVBQUUsUUFBUSxVQUFVLEVBQStCO0FBQ25GLDBCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLG9CQUFvQixRQUFRO0FBQ2xDLFFBQU0sV0FBVyxNQUFNLGVBQWUsU0FBUyxJQUFJO0FBQ25ELE1BQUkscUJBQXFCLGtCQUFrQixNQUFNLEdBQUc7QUFDbEQsc0JBQWtCLE1BQU0sRUFBRSxLQUFLLFFBQVE7QUFBQSxFQUN6QyxPQUFPO0FBQ0wsYUFBUztBQUFBLEVBQ1g7QUFDRjtBQUNBLElBQUksd0JBQXdCLGNBQVk7QUFBQztBQUd6QyxJQUFJLG9CQUFvQixTQUFPO0FBQzdCLE9BQUssSUFBSSxVQUFVLE9BQStCLEdBQUc7QUFDbkQsVUFBTSxVQUFVLFdBQVcsR0FBRztBQUM5QixVQUFNLFVBQVUsUUFBUTtBQUN4QixVQUFNLGVBQWUsV0FBVyxxQkFBcUIsUUFBUSxTQUFTO0FBQ3RFLFFBQUksRUFBRSxRQUFRLFVBQVUsSUFBdUI7QUFDN0MsY0FBUSxXQUFXO0FBQ25CO0FBQ0UsWUFBSSxvQkFBb0I7QUFDeEIsZUFBTyxvQkFBb0Isa0JBQWtCLGNBQWMsa0JBQWtCLE1BQU07QUFDakYsY0FBSSxrQkFBa0IsS0FBSyxHQUFHO0FBQzVCLDZCQUFpQixTQUFTLFFBQVEsc0JBQXNCLGlCQUFpQjtBQUN6RTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLFVBQUksUUFBUSxXQUFXO0FBQ3JCLGVBQU8sUUFBUSxRQUFRLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU07QUFDckUsY0FBSSxjQUFjLE1BQWlCLElBQUksZUFBZSxVQUFVLEdBQUc7QUFDakUsa0JBQU0sUUFBUSxJQUFJLFVBQVU7QUFDNUIsbUJBQU8sSUFBSSxVQUFVO0FBQ3JCLGdCQUFJLFVBQVUsSUFBSTtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUNBO0FBQ0UsNEJBQW9CLEtBQUssU0FBUyxPQUFPO0FBQUEsTUFDM0M7QUFBQSxJQUNGLE9BQU87QUFDTCxVQUFJLFdBQVcsT0FBTyxTQUFTLFFBQVEsZUFBZ0I7QUFBQSxlQUFVLFdBQVcsT0FBTyxTQUFTLFFBQVEsa0JBQWtCO0FBQ3BILGdCQUFRLGlCQUFpQixLQUFLLE1BQU0sc0JBQXNCLENBQUM7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFDQSxpQkFBYTtBQUFBLEVBQ2Y7QUFDRjtBQUNBLElBQUkscUJBQXFCLGNBQVk7QUFBQztBQUN0QyxJQUFJLHVCQUF1QixDQUFNLFFBQU87QUFDdEMsT0FBSyxJQUFJLFVBQVUsT0FBK0IsR0FBRztBQUNuRCxVQUFNLFVBQVUsV0FBVyxHQUFHO0FBQzlCLFFBQUksV0FBVyxPQUFPLFNBQVMsUUFBUSxlQUFnQjtBQUFBLGFBQVUsV0FBVyxPQUFPLFNBQVMsUUFBUSxrQkFBa0I7QUFDcEgsY0FBUSxpQkFBaUIsS0FBSyxNQUFNLG1CQUFtQixDQUFDO0FBQUEsSUFDMUQ7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFJLGdCQUFnQixDQUFDLGFBQWEsVUFBVSxDQUFDLE1BQU07QUFDakQsTUFBSTtBQUNKLFFBQU0sZUFBZSxXQUFXO0FBQ2hDLFFBQU0sVUFBVSxDQUFDO0FBQ2pCLFFBQU0sVUFBVSxRQUFRLFdBQVcsQ0FBQztBQUNwQyxRQUFNLGtCQUFrQixJQUFJO0FBQzVCLFFBQU0sT0FBTyxJQUFJO0FBQ2pCLFFBQU0sY0FBNkIscUJBQUssY0FBYyxlQUFlO0FBQ3JFLFFBQU0sYUFBNEIsb0JBQUksY0FBYyxPQUFPO0FBQzNELFFBQU0sNkJBQTZCLENBQUM7QUFDcEMsTUFBSTtBQUNKLE1BQUksa0JBQWtCO0FBQ3RCLFNBQU8sT0FBTyxLQUFLLE9BQU87QUFDMUIsTUFBSSxpQkFBaUIsSUFBSSxJQUFJLFFBQVEsZ0JBQWdCLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDeEUsTUFBSSxvQkFBb0I7QUFDeEIsY0FBWSxJQUFJLGdCQUFjO0FBQzVCLGVBQVcsQ0FBQyxFQUFFLElBQUksaUJBQWU7QUFDL0IsWUFBTSxVQUFVO0FBQUEsUUFDZCxTQUFTLFlBQVksQ0FBQztBQUFBLFFBQ3RCLFdBQVcsWUFBWSxDQUFDO0FBQUEsUUFDeEIsV0FBVyxZQUFZLENBQUM7QUFBQSxRQUN4QixhQUFhLFlBQVksQ0FBQztBQUFBLE1BQzVCO0FBQ0EsVUFBSSxRQUFRLFVBQVUsR0FBMkI7QUFDL0MsNEJBQW9CO0FBQUEsTUFDdEI7QUFDQTtBQUNFLGdCQUFRLFlBQVksWUFBWSxDQUFDO0FBQUEsTUFDbkM7QUFDQSxZQUFNLFVBQVUsUUFBUTtBQUN4QixZQUFNLGNBQWMsY0FBYyxZQUFZO0FBQUE7QUFBQSxRQUU1QyxZQUFZLE1BQU07QUFDaEIsZ0JBQU0sSUFBSTtBQUNWLGVBQUssOEJBQThCO0FBQ25DLGlCQUFPO0FBQ1AsdUJBQWEsTUFBTSxPQUFPO0FBQzFCLGNBQUksUUFBUSxVQUFVLEdBQWdDO0FBQ3BEO0FBQ0Usa0JBQUksQ0FBQyxLQUFLLFlBQVk7QUFDcEI7QUFDRSx1QkFBSyxhQUFhO0FBQUEsb0JBQ2hCLE1BQU07QUFBQSxrQkFDUixDQUFDO0FBQUEsZ0JBQ0g7QUFBQSxjQUNGLE9BQU87QUFDTCxvQkFBSSxLQUFLLFdBQVcsU0FBUyxRQUFRO0FBQ25DLHdCQUFNLElBQUksTUFBTSw2Q0FBNkMsUUFBUSxTQUFTLG9CQUFvQixLQUFLLFdBQVcsSUFBSSwrQ0FBK0M7QUFBQSxnQkFDdks7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxvQkFBb0I7QUFDbEIscUJBQVcsSUFBSTtBQUNmLGNBQUksQ0FBQyxLQUFLLDZCQUE2QjtBQUNyQyxpQkFBSyw4QkFBOEI7QUFBQSxVQUNyQztBQUNBLGNBQUksaUJBQWlCO0FBQ25CLHlCQUFhLGVBQWU7QUFDNUIsOEJBQWtCO0FBQUEsVUFDcEI7QUFDQSxjQUFJLGlCQUFpQjtBQUNuQix1Q0FBMkIsS0FBSyxJQUFJO0FBQUEsVUFDdEMsT0FBTztBQUNMLGdCQUFJLElBQUksTUFBTSxrQkFBa0IsSUFBSSxDQUFDO0FBQUEsVUFDdkM7QUFBQSxRQUNGO0FBQUEsUUFDQSx1QkFBdUI7QUFDckIsY0FBSSxJQUFJLE1BQU0scUJBQXFCLElBQUksQ0FBQztBQUFBLFFBQzFDO0FBQUEsUUFDQSxtQkFBbUI7QUFDakIsaUJBQU8sV0FBVyxJQUFJLEVBQUU7QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFDQSxjQUFRLGlCQUFpQixXQUFXLENBQUM7QUFDckMsVUFBSSxDQUFDLFFBQVEsU0FBUyxPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLEdBQUc7QUFDL0QsZ0JBQVEsS0FBSyxPQUFPO0FBQ3BCLHdCQUFnQixPQUFPLFNBQVM7QUFBQSxVQUFlO0FBQUEsVUFBYTtBQUFBLFVBQVM7QUFBQTtBQUFBLFFBQTRCLENBQUM7QUFBQSxNQUNwRztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNELE1BQUksUUFBUSxTQUFTLEdBQUc7QUFDdEIsUUFBSSxtQkFBbUI7QUFDckIsaUJBQVcsZUFBZTtBQUFBLElBQzVCO0FBQ0E7QUFDRSxpQkFBVyxlQUFlLFFBQVEsS0FBSyxJQUFJO0FBQUEsSUFDN0M7QUFDQSxRQUFJLFdBQVcsVUFBVSxRQUFRO0FBQy9CLGlCQUFXLGFBQWEsZUFBZSxFQUFFO0FBQ3pDLFlBQU0sU0FBUyxLQUFLLElBQUksWUFBWSxPQUFPLEtBQUsseUJBQXlCLEdBQUc7QUFDNUUsVUFBSSxTQUFTLE1BQU07QUFDakIsbUJBQVcsYUFBYSxTQUFTLEtBQUs7QUFBQSxNQUN4QztBQUNBLFdBQUssYUFBYSxZQUFZLGNBQWMsWUFBWSxjQUFjLEtBQUssVUFBVTtBQUFBLElBQ3ZGO0FBQUEsRUFDRjtBQUNBLG9CQUFrQjtBQUNsQixNQUFJLDJCQUEyQixRQUFRO0FBQ3JDLCtCQUEyQixJQUFJLFVBQVEsS0FBSyxrQkFBa0IsQ0FBQztBQUFBLEVBQ2pFLE9BQU87QUFDTDtBQUNFLFVBQUksSUFBSSxNQUFNLGtCQUFrQixXQUFXLFlBQVksRUFBRSxDQUFDO0FBQUEsSUFDNUQ7QUFBQSxFQUNGO0FBQ0EsZUFBYTtBQUNmOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
