import {
  createColorClasses,
  openURL
} from "./chunk-QQMTNXUN.js";
import {
  componentOnReady,
  debounce
} from "./chunk-RRWPYKYY.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-route_4.entry.js
var Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
    this.url = "";
    this.component = void 0;
    this.componentProps = void 0;
    this.beforeLeave = void 0;
    this.beforeEnter = void 0;
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      "url": ["onUpdate"],
      "component": ["onUpdate"],
      "componentProps": ["onComponentProps"]
    };
  }
};
var RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
    this.from = void 0;
    this.to = void 0;
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      "from": ["propDidChange"],
      "to": ["propDidChange"]
    };
  }
};
var ROUTER_INTENT_NONE = "root";
var ROUTER_INTENT_FORWARD = "forward";
var ROUTER_INTENT_BACK = "back";
var generatePath = (segments) => {
  const path = segments.filter((s) => s.length > 0).join("/");
  return "/" + path;
};
var generateUrl = (segments, useHash, queryString) => {
  let url = generatePath(segments);
  if (useHash) {
    url = "#" + url;
  }
  if (queryString !== void 0) {
    url += "?" + queryString;
  }
  return url;
};
var writeSegments = (history, root, useHash, segments, direction, state, queryString) => {
  const url = generateUrl([...parsePath(root).segments, ...segments], useHash, queryString);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, "", url);
  } else {
    history.replaceState(state, "", url);
  }
};
var chainToSegments = (chain) => {
  const segments = [];
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        segments.push(param);
      } else if (segment !== "") {
        segments.push(segment);
      }
    }
  }
  return segments;
};
var removePrefix = (prefix, segments) => {
  if (prefix.length > segments.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === "") {
    return segments;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== segments[i]) {
      return null;
    }
  }
  if (segments.length === prefix.length) {
    return [""];
  }
  return segments.slice(prefix.length);
};
var readSegments = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const segments = parsePath(pathname).segments;
  return removePrefix(prefix, segments);
};
var parsePath = (path) => {
  let segments = [""];
  let queryString;
  if (path != null) {
    const qsStart = path.indexOf("?");
    if (qsStart > -1) {
      queryString = path.substring(qsStart + 1);
      path = path.substring(0, qsStart);
    }
    segments = path.split("/").map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length === 0) {
      segments = [""];
    }
  }
  return {
    segments,
    queryString
  };
};
var printRoutes = (routes) => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const segments = [];
    chain.forEach((r) => segments.push(...r.segments));
    const ids = chain.map((r) => r.id);
    console.debug(`%c ${generatePath(segments)}`, "font-weight: bold; padding-left: 20px", "=>	", `(${ids.join(", ")})`);
  }
  console.groupEnd();
};
var printRedirects = (redirects) => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug("FROM: ", `$c ${generatePath(redirect.from)}`, "font-weight: bold", " TO: ", `$c ${generatePath(redirect.to.segments)}`, "font-weight: bold");
    }
  }
  console.groupEnd();
};
var writeNavState = (root, chain, direction, index, changed = false, animation) => __async(void 0, null, function* () {
  try {
    const outlet = searchNavNode(root);
    if (index >= chain.length || !outlet) {
      return changed;
    }
    yield new Promise((resolve) => componentOnReady(outlet, resolve));
    const route = chain[index];
    const result = yield outlet.setRouteId(route.id, route.params, direction, animation);
    if (result.changed) {
      direction = ROUTER_INTENT_NONE;
      changed = true;
    }
    changed = yield writeNavState(result.element, chain, direction, index + 1, changed, animation);
    if (result.markVisible) {
      yield result.markVisible();
    }
    return changed;
  } catch (e) {
    console.error(e);
    return false;
  }
});
var readNavState = (root) => __async(void 0, null, function* () {
  const ids = [];
  let outlet;
  let node = root;
  while (outlet = searchNavNode(node)) {
    const id = yield outlet.getRouteId();
    if (id) {
      node = id.element;
      id.element = void 0;
      ids.push(id);
    } else {
      break;
    }
  }
  return {
    ids,
    outlet
  };
});
var waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.addEventListener("ionNavWillLoad", () => resolve(), {
      once: true
    });
  });
};
var OUTLET_SELECTOR = ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";
var searchNavNode = (root) => {
  if (!root) {
    return void 0;
  }
  if (root.matches(OUTLET_SELECTOR)) {
    return root;
  }
  const outlet = root.querySelector(OUTLET_SELECTOR);
  return outlet !== null && outlet !== void 0 ? outlet : void 0;
};
var matchesRedirect = (segments, redirect) => {
  const {
    from,
    to
  } = redirect;
  if (to === void 0) {
    return false;
  }
  if (from.length > segments.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === "*") {
      return true;
    }
    if (expected !== segments[i]) {
      return false;
    }
  }
  return from.length === segments.length;
};
var findRouteRedirect = (segments, redirects) => {
  return redirects.find((redirect) => matchesRedirect(segments, redirect));
};
var matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let score = 0;
  for (let i = 0; i < len; i++) {
    const routeId = ids[i];
    const routeChain = chain[i];
    if (routeId.id.toLowerCase() !== routeChain.id) {
      break;
    }
    if (routeId.params) {
      const routeIdParams = Object.keys(routeId.params);
      if (routeIdParams.length === routeChain.segments.length) {
        const pathWithParams = routeIdParams.map((key) => `:${key}`);
        for (let j = 0; j < pathWithParams.length; j++) {
          if (pathWithParams[j].toLowerCase() !== routeChain.segments[j]) {
            break;
          }
          score++;
        }
      }
    }
    score++;
  }
  return score;
};
var matchesSegments = (segments, chain) => {
  const inputSegments = new RouterSegments(segments);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const chainSegments = chain[i].segments;
    if (chainSegments[0] === "") {
      matchesDefault = true;
    } else {
      for (const segment of chainSegments) {
        const data = inputSegments.next();
        if (segment[0] === ":") {
          if (data === "") {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        } else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = matchesDefault ? matchesDefault === (inputSegments.next() === "") : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
var mergeParams = (a, b) => {
  return a || b ? Object.assign(Object.assign({}, a), b) : void 0;
};
var findChainForIDs = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  for (const chain of chains) {
    const score = matchesIDs(ids, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => {
      var _a;
      return {
        id: route.id,
        segments: route.segments,
        params: mergeParams(route.params, (_a = ids[i]) === null || _a === void 0 ? void 0 : _a.params)
      };
    });
  }
  return null;
};
var findChainForSegments = (segments, chains) => {
  let match = null;
  let bestScore = 0;
  for (const chain of chains) {
    const matchedChain = matchesSegments(segments, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > bestScore) {
        bestScore = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
var computePriority = (chain) => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        score += Math.pow(1, level);
      } else if (segment !== "") {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
var RouterSegments = class {
  constructor(segments) {
    this.segments = segments.slice();
  }
  next() {
    if (this.segments.length > 0) {
      return this.segments.shift();
    }
    return "";
  }
};
var readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
var readRedirects = (root) => {
  return Array.from(root.children).filter((el) => el.tagName === "ION-ROUTE-REDIRECT").map((el) => {
    const to = readProp(el, "to");
    return {
      from: parsePath(readProp(el, "from")).segments,
      to: to == null ? void 0 : parsePath(to)
    };
  });
};
var readRoutes = (root) => {
  return flattenRouterTree(readRouteNodes(root));
};
var readRouteNodes = (node) => {
  return Array.from(node.children).filter((el) => el.tagName === "ION-ROUTE" && el.component).map((el) => {
    const component = readProp(el, "component");
    return {
      segments: parsePath(readProp(el, "url")).segments,
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(el)
    };
  });
};
var flattenRouterTree = (nodes) => {
  const chains = [];
  for (const node of nodes) {
    flattenNode([], chains, node);
  }
  return chains;
};
var flattenNode = (chain, chains, node) => {
  chain = [...chain, {
    id: node.id,
    segments: node.segments,
    params: node.params,
    beforeLeave: node.beforeLeave,
    beforeEnter: node.beforeEnter
  }];
  if (node.children.length === 0) {
    chains.push(chain);
    return;
  }
  for (const child of node.children) {
    flattenNode(chain, chains, child);
  }
};
var Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteWillChange = createEvent(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = createEvent(this, "ionRouteDidChange", 7);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    this.root = "/";
    this.useHash = true;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield waitUntilNavNode();
      const canProceed = yield this.runGuards(this.getSegments());
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          const {
            redirect
          } = canProceed;
          const path = parsePath(redirect);
          this.setSegments(path.segments, ROUTER_INTENT_NONE, path.queryString);
          yield this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
        }
      } else {
        yield this.onRoutesChanged();
      }
    });
  }
  componentDidLoad() {
    window.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
  }
  onPopState() {
    return __async(this, null, function* () {
      const direction = this.historyDirection();
      let segments = this.getSegments();
      const canProceed = yield this.runGuards(segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          segments = parsePath(canProceed.redirect).segments;
        } else {
          return false;
        }
      }
      return this.writeNavStateRoot(segments, direction);
    });
  }
  onBackButton(ev) {
    ev.detail.register(0, (processNextHandler) => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  canTransition() {
    return __async(this, null, function* () {
      const canProceed = yield this.runGuards();
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          return canProceed.redirect;
        } else {
          return false;
        }
      }
      return true;
    });
  }
  /**
   * Navigate to the specified path.
   *
   * @param path The path to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   */
  push(path, direction = "forward", animation) {
    return __async(this, null, function* () {
      var _a;
      if (path.startsWith(".")) {
        const currentPath = (_a = this.previousPath) !== null && _a !== void 0 ? _a : "/";
        const url = new URL(path, `https://host/${currentPath}`);
        path = url.pathname + url.search;
      }
      let parsedPath = parsePath(path);
      const canProceed = yield this.runGuards(parsedPath.segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          parsedPath = parsePath(canProceed.redirect);
        } else {
          return false;
        }
      }
      this.setSegments(parsedPath.segments, direction, parsedPath.queryString);
      return this.writeNavStateRoot(parsedPath.segments, direction, animation);
    });
  }
  /** Go back to previous page in the window.history. */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  printDebug() {
    return __async(this, null, function* () {
      printRoutes(readRoutes(this.el));
      printRedirects(readRedirects(this.el));
    });
  }
  /** @internal */
  navChanged(direction) {
    return __async(this, null, function* () {
      if (this.busy) {
        console.warn("[ion-router] router is busy, navChanged was cancelled");
        return false;
      }
      const {
        ids,
        outlet
      } = yield readNavState(window.document.body);
      const routes = readRoutes(this.el);
      const chain = findChainForIDs(ids, routes);
      if (!chain) {
        console.warn("[ion-router] no matching URL for ", ids.map((i) => i.id));
        return false;
      }
      const segments = chainToSegments(chain);
      if (!segments) {
        console.warn("[ion-router] router could not match path because some required param is missing");
        return false;
      }
      this.setSegments(segments, direction);
      yield this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, segments, null, ids.length);
      return true;
    });
  }
  /** This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes. */
  onRedirectChanged() {
    const segments = this.getSegments();
    if (segments && findRouteRedirect(segments, readRedirects(this.el))) {
      this.writeNavStateRoot(segments, ROUTER_INTENT_NONE);
    }
  }
  /** This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes. */
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getSegments(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    var _a;
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || state >= lastState && lastState > 0) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  writeNavStateRoot(segments, direction, animation) {
    return __async(this, null, function* () {
      if (!segments) {
        console.error("[ion-router] URL is not part of the routing set");
        return false;
      }
      const redirects = readRedirects(this.el);
      const redirect = findRouteRedirect(segments, redirects);
      let redirectFrom = null;
      if (redirect) {
        const {
          segments: toSegments,
          queryString
        } = redirect.to;
        this.setSegments(toSegments, direction, queryString);
        redirectFrom = redirect.from;
        segments = toSegments;
      }
      const routes = readRoutes(this.el);
      const chain = findChainForSegments(segments, routes);
      if (!chain) {
        console.error("[ion-router] the path does not match any route");
        return false;
      }
      return this.safeWriteNavState(document.body, chain, direction, segments, redirectFrom, 0, animation);
    });
  }
  safeWriteNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      const unlock = yield this.lock();
      let changed = false;
      try {
        changed = yield this.writeNavState(node, chain, direction, segments, redirectFrom, index, animation);
      } catch (e) {
        console.error(e);
      }
      unlock();
      return changed;
    });
  }
  lock() {
    return __async(this, null, function* () {
      const p = this.waitPromise;
      let resolve;
      this.waitPromise = new Promise((r) => resolve = r);
      if (p !== void 0) {
        yield p;
      }
      return resolve;
    });
  }
  /**
   * Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
   *
   * When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
   * Otherwise the beforeEnterHook hook of the target route is executed.
   */
  runGuards() {
    return __async(this, arguments, function* (to = this.getSegments(), from) {
      if (from === void 0) {
        from = parsePath(this.previousPath).segments;
      }
      if (!to || !from) {
        return true;
      }
      const routes = readRoutes(this.el);
      const fromChain = findChainForSegments(from, routes);
      const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
      const canLeave = beforeLeaveHook ? yield beforeLeaveHook() : true;
      if (canLeave === false || typeof canLeave === "object") {
        return canLeave;
      }
      const toChain = findChainForSegments(to, routes);
      const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
      return beforeEnterHook ? beforeEnterHook() : true;
    });
  }
  writeNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      if (this.busy) {
        console.warn("[ion-router] router is busy, transition was cancelled");
        return false;
      }
      this.busy = true;
      const routeEvent = this.routeChangeEvent(segments, redirectFrom);
      if (routeEvent) {
        this.ionRouteWillChange.emit(routeEvent);
      }
      const changed = yield writeNavState(node, chain, direction, index, false, animation);
      this.busy = false;
      if (routeEvent) {
        this.ionRouteDidChange.emit(routeEvent);
      }
      return changed;
    });
  }
  setSegments(segments, direction, queryString) {
    this.state++;
    writeSegments(window.history, this.root, this.useHash, segments, direction, this.state, queryString);
  }
  getSegments() {
    return readSegments(window.location, this.root, this.useHash);
  }
  routeChangeEvent(toSegments, redirectFromSegments) {
    const from = this.previousPath;
    const to = generatePath(toSegments);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromSegments ? generatePath(redirectFromSegments) : null;
    return {
      from,
      redirectedFrom,
      to
    };
  }
  get el() {
    return getElement(this);
  }
};
var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
var IonRouterLinkStyle0 = routerLinkCss;
var RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
    this.color = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.target = void 0;
  }
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(Host, {
      key: "11183264fb6ae0db9a7a47c71b6862d60001b834",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "ion-activatable": true
      })
    }, h("a", Object.assign({
      key: "3e0e5242161cb0df593d6d573e51b8ba750065a1"
    }, attrs), h("slot", {
      key: "5bd808e98a4627bb1236f0d955f4b32971355417"
    })));
  }
};
RouterLink.style = IonRouterLinkStyle0;
export {
  Route as ion_route,
  RouteRedirect as ion_route_redirect,
  Router as ion_router,
  RouterLink as ion_router_link
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-route_4.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcm91dGVfNC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIGdldEVsZW1lbnQsIGgsIGUgYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5LCBwIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IFJvdXRlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblJvdXRlRGF0YUNoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlRGF0YUNoYW5nZWRcIiwgNyk7XG4gICAgdGhpcy51cmwgPSAnJztcbiAgICB0aGlzLmNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbXBvbmVudFByb3BzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYmVmb3JlTGVhdmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5iZWZvcmVFbnRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBvblVwZGF0ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuaW9uUm91dGVEYXRhQ2hhbmdlZC5lbWl0KG5ld1ZhbHVlKTtcbiAgfVxuICBvbkNvbXBvbmVudFByb3BzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5czEgPSBuZXdWYWx1ZSA/IE9iamVjdC5rZXlzKG5ld1ZhbHVlKSA6IFtdO1xuICAgIGNvbnN0IGtleXMyID0gb2xkVmFsdWUgPyBPYmplY3Qua2V5cyhvbGRWYWx1ZSkgOiBbXTtcbiAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25VcGRhdGUobmV3VmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xuICAgICAgaWYgKG5ld1ZhbHVlW2tleV0gIT09IG9sZFZhbHVlW2tleV0pIHtcbiAgICAgICAgdGhpcy5vblVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pb25Sb3V0ZURhdGFDaGFuZ2VkLmVtaXQoKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInVybFwiOiBbXCJvblVwZGF0ZVwiXSxcbiAgICAgIFwiY29tcG9uZW50XCI6IFtcIm9uVXBkYXRlXCJdLFxuICAgICAgXCJjb21wb25lbnRQcm9wc1wiOiBbXCJvbkNvbXBvbmVudFByb3BzXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IFJvdXRlUmVkaXJlY3QgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uUm91dGVSZWRpcmVjdENoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlUmVkaXJlY3RDaGFuZ2VkXCIsIDcpO1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG4gIHByb3BEaWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5pb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZC5lbWl0KCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZC5lbWl0KCk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJmcm9tXCI6IFtcInByb3BEaWRDaGFuZ2VcIl0sXG4gICAgICBcInRvXCI6IFtcInByb3BEaWRDaGFuZ2VcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgUk9VVEVSX0lOVEVOVF9OT05FID0gJ3Jvb3QnO1xuY29uc3QgUk9VVEVSX0lOVEVOVF9GT1JXQVJEID0gJ2ZvcndhcmQnO1xuY29uc3QgUk9VVEVSX0lOVEVOVF9CQUNLID0gJ2JhY2snO1xuXG4vKiogSm9pbiB0aGUgbm9uIGVtcHR5IHNlZ21lbnRzIHdpdGggXCIvXCIuICovXG5jb25zdCBnZW5lcmF0ZVBhdGggPSBzZWdtZW50cyA9PiB7XG4gIGNvbnN0IHBhdGggPSBzZWdtZW50cy5maWx0ZXIocyA9PiBzLmxlbmd0aCA+IDApLmpvaW4oJy8nKTtcbiAgcmV0dXJuICcvJyArIHBhdGg7XG59O1xuY29uc3QgZ2VuZXJhdGVVcmwgPSAoc2VnbWVudHMsIHVzZUhhc2gsIHF1ZXJ5U3RyaW5nKSA9PiB7XG4gIGxldCB1cmwgPSBnZW5lcmF0ZVBhdGgoc2VnbWVudHMpO1xuICBpZiAodXNlSGFzaCkge1xuICAgIHVybCA9ICcjJyArIHVybDtcbiAgfVxuICBpZiAocXVlcnlTdHJpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIHVybCArPSAnPycgKyBxdWVyeVN0cmluZztcbiAgfVxuICByZXR1cm4gdXJsO1xufTtcbmNvbnN0IHdyaXRlU2VnbWVudHMgPSAoaGlzdG9yeSwgcm9vdCwgdXNlSGFzaCwgc2VnbWVudHMsIGRpcmVjdGlvbiwgc3RhdGUsIHF1ZXJ5U3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IGdlbmVyYXRlVXJsKFsuLi5wYXJzZVBhdGgocm9vdCkuc2VnbWVudHMsIC4uLnNlZ21lbnRzXSwgdXNlSGFzaCwgcXVlcnlTdHJpbmcpO1xuICBpZiAoZGlyZWN0aW9uID09PSBST1VURVJfSU5URU5UX0ZPUldBUkQpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIHVybCk7XG4gIH0gZWxzZSB7XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICB9XG59O1xuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgY2hhaW4gdG8gYSBsaXN0IG9mIHNlZ21lbnRzLlxuICpcbiAqIE5vdGVzOlxuICogLSBwYXJhbWV0ZXIgc2VnbWVudHMgb2YgdGhlIGZvcm0gOnBhcmFtIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIHZhbHVlLFxuICogLSBudWxsIGlzIHJldHVybmVkIHdoZW4gYSB2YWx1ZSBpcyBtaXNzaW5nIGZvciBhbnkgcGFyYW1ldGVyIHNlZ21lbnQuXG4gKi9cbmNvbnN0IGNoYWluVG9TZWdtZW50cyA9IGNoYWluID0+IHtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgZm9yIChjb25zdCByb3V0ZSBvZiBjaGFpbikge1xuICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiByb3V0ZS5zZWdtZW50cykge1xuICAgICAgaWYgKHNlZ21lbnRbMF0gPT09ICc6Jykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICAgICAgICBjb25zdCBwYXJhbSA9IHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXNbc2VnbWVudC5zbGljZSgxKV07XG4gICAgICAgIGlmICghcGFyYW0pIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzZWdtZW50cy5wdXNoKHBhcmFtKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gJycpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcbi8qKlxuICogUmVtb3ZlcyB0aGUgcHJlZml4IHNlZ21lbnRzIGZyb20gdGhlIHBhdGggc2VnbWVudHMuXG4gKlxuICogUmV0dXJuOlxuICogLSBudWxsIHdoZW4gdGhlIHBhdGggc2VnbWVudHMgZG8gbm90IHN0YXJ0IHdpdGggdGhlIHBhc3NlZCBwcmVmaXgsXG4gKiAtIHRoZSBwYXRoIHNlZ21lbnRzIGFmdGVyIHRoZSBwcmVmaXggb3RoZXJ3aXNlLlxuICovXG5jb25zdCByZW1vdmVQcmVmaXggPSAocHJlZml4LCBzZWdtZW50cykgPT4ge1xuICBpZiAocHJlZml4Lmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwcmVmaXgubGVuZ3RoIDw9IDEgJiYgcHJlZml4WzBdID09PSAnJykge1xuICAgIHJldHVybiBzZWdtZW50cztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVmaXhbaV0gIT09IHNlZ21lbnRzW2ldKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gcHJlZml4Lmxlbmd0aCkge1xuICAgIHJldHVybiBbJyddO1xuICB9XG4gIHJldHVybiBzZWdtZW50cy5zbGljZShwcmVmaXgubGVuZ3RoKTtcbn07XG5jb25zdCByZWFkU2VnbWVudHMgPSAobG9jLCByb290LCB1c2VIYXNoKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHBhcnNlUGF0aChyb290KS5zZWdtZW50cztcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VIYXNoID8gbG9jLmhhc2guc2xpY2UoMSkgOiBsb2MucGF0aG5hbWU7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGFyc2VQYXRoKHBhdGhuYW1lKS5zZWdtZW50cztcbiAgcmV0dXJuIHJlbW92ZVByZWZpeChwcmVmaXgsIHNlZ21lbnRzKTtcbn07XG4vKipcbiAqIFBhcnNlcyB0aGUgcGF0aCB0bzpcbiAqIC0gc2VnbWVudHMgYW4gYXJyYXkgb2YgJy8nIHNlcGFyYXRlZCBwYXJ0cyxcbiAqIC0gcXVlcnlTdHJpbmcgKHVuZGVmaW5lZCB3aGVuIG5vIHF1ZXJ5IHN0cmluZykuXG4gKi9cbmNvbnN0IHBhcnNlUGF0aCA9IHBhdGggPT4ge1xuICBsZXQgc2VnbWVudHMgPSBbJyddO1xuICBsZXQgcXVlcnlTdHJpbmc7XG4gIGlmIChwYXRoICE9IG51bGwpIHtcbiAgICBjb25zdCBxc1N0YXJ0ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKHFzU3RhcnQgPiAtMSkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBwYXRoLnN1YnN0cmluZyhxc1N0YXJ0ICsgMSk7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXNTdGFydCk7XG4gICAgfVxuICAgIHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLm1hcChzID0+IHMudHJpbSgpKS5maWx0ZXIocyA9PiBzLmxlbmd0aCA+IDApO1xuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlZ21lbnRzID0gWycnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWdtZW50cyxcbiAgICBxdWVyeVN0cmluZ1xuICB9O1xufTtcbmNvbnN0IHByaW50Um91dGVzID0gcm91dGVzID0+IHtcbiAgY29uc29sZS5ncm91cChgW2lvbi1jb3JlXSBST1VURVNbJHtyb3V0ZXMubGVuZ3RofV1gKTtcbiAgZm9yIChjb25zdCBjaGFpbiBvZiByb3V0ZXMpIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICAgIGNoYWluLmZvckVhY2gociA9PiBzZWdtZW50cy5wdXNoKC4uLnIuc2VnbWVudHMpKTtcbiAgICBjb25zdCBpZHMgPSBjaGFpbi5tYXAociA9PiByLmlkKTtcbiAgICBjb25zb2xlLmRlYnVnKGAlYyAke2dlbmVyYXRlUGF0aChzZWdtZW50cyl9YCwgJ2ZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nLWxlZnQ6IDIwcHgnLCAnPT5cXHQnLCBgKCR7aWRzLmpvaW4oJywgJyl9KWApO1xuICB9XG4gIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn07XG5jb25zdCBwcmludFJlZGlyZWN0cyA9IHJlZGlyZWN0cyA9PiB7XG4gIGNvbnNvbGUuZ3JvdXAoYFtpb24tY29yZV0gUkVESVJFQ1RTWyR7cmVkaXJlY3RzLmxlbmd0aH1dYCk7XG4gIGZvciAoY29uc3QgcmVkaXJlY3Qgb2YgcmVkaXJlY3RzKSB7XG4gICAgaWYgKHJlZGlyZWN0LnRvKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdGUk9NOiAnLCBgJGMgJHtnZW5lcmF0ZVBhdGgocmVkaXJlY3QuZnJvbSl9YCwgJ2ZvbnQtd2VpZ2h0OiBib2xkJywgJyBUTzogJywgYCRjICR7Z2VuZXJhdGVQYXRoKHJlZGlyZWN0LnRvLnNlZ21lbnRzKX1gLCAnZm9udC13ZWlnaHQ6IGJvbGQnKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5ncm91cEVuZCgpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZXMgdGhlIHBhc3NlZCByb3V0ZSBjaGFpbi5cbiAqXG4gKiBUaGVyZSBtdXN0IGJlIGV4YWN0bHkgb25lIG91dGxldCBwZXIgcm91dGUgZW50cnkgaW4gdGhlIGNoYWluLlxuICpcbiAqIFRoZSBtZXRob2RzIGNhbGxzIHNldFJvdXRlSWQgb24gZWFjaCBvZiB0aGUgb3V0bGV0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcm91dGUgZW50cnkgaW4gdGhlIGNoYWluLlxuICogc2V0Um91dGVJZCB3aWxsIGNyZWF0ZSBvciBzZWxlY3QgdGhlIHZpZXcgaW4gdGhlIG91dGxldC5cbiAqL1xuY29uc3Qgd3JpdGVOYXZTdGF0ZSA9IGFzeW5jIChyb290LCBjaGFpbiwgZGlyZWN0aW9uLCBpbmRleCwgY2hhbmdlZCA9IGZhbHNlLCBhbmltYXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBmaW5kIG5leHQgbmF2aWdhdGlvbiBvdXRsZXQgaW4gdGhlIERPTVxuICAgIGNvbnN0IG91dGxldCA9IHNlYXJjaE5hdk5vZGUocm9vdCk7XG4gICAgLy8gbWFrZSBzdXJlIHdlIGNhbiBjb250aW51ZSBpbnRlcmFjdGluZyB0aGUgRE9NLCBvdGhlcndpc2UgYWJvcnRcbiAgICBpZiAoaW5kZXggPj0gY2hhaW4ubGVuZ3RoIHx8ICFvdXRsZXQpIHtcbiAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGNvbXBvbmVudE9uUmVhZHkob3V0bGV0LCByZXNvbHZlKSk7XG4gICAgY29uc3Qgcm91dGUgPSBjaGFpbltpbmRleF07XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb3V0bGV0LnNldFJvdXRlSWQocm91dGUuaWQsIHJvdXRlLnBhcmFtcywgZGlyZWN0aW9uLCBhbmltYXRpb24pO1xuICAgIC8vIGlmIHRoZSBvdXRsZXQgY2hhbmdlZCB0aGUgcGFnZSwgcmVzZXQgbmF2aWdhdGlvbiB0byBuZXV0cmFsIChubyBkaXJlY3Rpb24pXG4gICAgLy8gdGhpcyBtZWFucyBuZXN0ZWQgb3V0bGV0cyB3aWxsIG5vdCBhbmltYXRlXG4gICAgaWYgKHJlc3VsdC5jaGFuZ2VkKSB7XG4gICAgICBkaXJlY3Rpb24gPSBST1VURVJfSU5URU5UX05PTkU7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gcmVjdXJzaXZlbHkgc2V0IG5lc3RlZCBvdXRsZXRzXG4gICAgY2hhbmdlZCA9IGF3YWl0IHdyaXRlTmF2U3RhdGUocmVzdWx0LmVsZW1lbnQsIGNoYWluLCBkaXJlY3Rpb24sIGluZGV4ICsgMSwgY2hhbmdlZCwgYW5pbWF0aW9uKTtcbiAgICAvLyBvbmNlIGFsbCBuZXN0ZWQgb3V0bGV0cyBhcmUgdmlzaWJsZSBsZXQncyBtYWtlIHRoZSBwYXJlbnQgdmlzaWJsZSB0b28sXG4gICAgLy8gdXNpbmcgbWFya1Zpc2libGUgcHJldmVudHMgZmxpY2tlcmluZ1xuICAgIGlmIChyZXN1bHQubWFya1Zpc2libGUpIHtcbiAgICAgIGF3YWl0IHJlc3VsdC5tYXJrVmlzaWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuLyoqXG4gKiBSZWN1cnNpdmVseSB3YWxrcyB0aGUgb3V0bGV0IGluIHRoZSBET00uXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJldHVybnMgYSBsaXN0IG9mIFJvdXRlSUQgY29ycmVzcG9uZGluZyB0byBlYWNoIG9mIHRoZSBvdXRsZXQgYW5kIHRoZSBsYXN0IG91dGxldCB3aXRob3V0IGEgUm91dGVJRC5cbiAqL1xuY29uc3QgcmVhZE5hdlN0YXRlID0gYXN5bmMgcm9vdCA9PiB7XG4gIGNvbnN0IGlkcyA9IFtdO1xuICBsZXQgb3V0bGV0O1xuICBsZXQgbm9kZSA9IHJvb3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICB3aGlsZSAob3V0bGV0ID0gc2VhcmNoTmF2Tm9kZShub2RlKSkge1xuICAgIGNvbnN0IGlkID0gYXdhaXQgb3V0bGV0LmdldFJvdXRlSWQoKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIG5vZGUgPSBpZC5lbGVtZW50O1xuICAgICAgaWQuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIGlkcy5wdXNoKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgaWRzLFxuICAgIG91dGxldFxuICB9O1xufTtcbmNvbnN0IHdhaXRVbnRpbE5hdk5vZGUgPSAoKSA9PiB7XG4gIGlmIChzZWFyY2hOYXZOb2RlKGRvY3VtZW50LmJvZHkpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uTmF2V2lsbExvYWQnLCAoKSA9PiByZXNvbHZlKCksIHtcbiAgICAgIG9uY2U6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqIFNlbGVjdG9yIGZvciBhbGwgdGhlIG91dGxldHMgc3VwcG9ydGVkIGJ5IHRoZSByb3V0ZXIuICovXG5jb25zdCBPVVRMRVRfU0VMRUNUT1IgPSAnOm5vdChbbm8tcm91dGVyXSkgaW9uLW5hdiwgOm5vdChbbm8tcm91dGVyXSkgaW9uLXRhYnMsIDpub3QoW25vLXJvdXRlcl0pIGlvbi1yb3V0ZXItb3V0bGV0JztcbmNvbnN0IHNlYXJjaE5hdk5vZGUgPSByb290ID0+IHtcbiAgaWYgKCFyb290KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAocm9vdC5tYXRjaGVzKE9VVExFVF9TRUxFQ1RPUikpIHtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuICBjb25zdCBvdXRsZXQgPSByb290LnF1ZXJ5U2VsZWN0b3IoT1VUTEVUX1NFTEVDVE9SKTtcbiAgcmV0dXJuIG91dGxldCAhPT0gbnVsbCAmJiBvdXRsZXQgIT09IHZvaWQgMCA/IG91dGxldCA6IHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiByZWRpcmVjdCBtYXRjaGVzIHRoZSBnaXZlbiBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEEgcmVkaXJlY3QgbWF0Y2hlcyB3aGVuIHRoZSBzZWdtZW50cyBvZiB0aGUgcGF0aCBhbmQgcmVkaXJlY3QuZnJvbSBhcmUgZXF1YWwuXG4gKiBOb3RlIHRoYXQgc2VnbWVudHMgYXJlIG9ubHkgY2hlY2tlZCB1bnRpbCByZWRpcmVjdC5mcm9tIGNvbnRhaW5zIGEgJyonIHdoaWNoIG1hdGNoZXMgYW55IHBhdGggc2VnbWVudC5cbiAqIFRoZSBwYXRoIFsnc29tZScsICdwYXRoJywgJ3RvJywgJ3BhZ2UnXSBtYXRjaGVzIGJvdGggWydzb21lJywgJ3BhdGgnLCAndG8nLCAncGFnZSddIGFuZCBbJ3NvbWUnLCAncGF0aCcsICcqJ10uXG4gKi9cbmNvbnN0IG1hdGNoZXNSZWRpcmVjdCA9IChzZWdtZW50cywgcmVkaXJlY3QpID0+IHtcbiAgY29uc3Qge1xuICAgIGZyb20sXG4gICAgdG9cbiAgfSA9IHJlZGlyZWN0O1xuICBpZiAodG8gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZnJvbS5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBmcm9tW2ldO1xuICAgIGlmIChleHBlY3RlZCA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGV4cGVjdGVkICE9PSBzZWdtZW50c1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnJvbS5sZW5ndGggPT09IHNlZ21lbnRzLmxlbmd0aDtcbn07XG4vKiogUmV0dXJucyB0aGUgZmlyc3QgcmVkaXJlY3QgbWF0Y2hpbmcgdGhlIHBhdGggc2VnbWVudHMgb3IgdW5kZWZpbmVkIHdoZW4gbm8gbWF0Y2ggZm91bmQuICovXG5jb25zdCBmaW5kUm91dGVSZWRpcmVjdCA9IChzZWdtZW50cywgcmVkaXJlY3RzKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdHMuZmluZChyZWRpcmVjdCA9PiBtYXRjaGVzUmVkaXJlY3Qoc2VnbWVudHMsIHJlZGlyZWN0KSk7XG59O1xuY29uc3QgbWF0Y2hlc0lEcyA9IChpZHMsIGNoYWluKSA9PiB7XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGlkcy5sZW5ndGgsIGNoYWluLmxlbmd0aCk7XG4gIGxldCBzY29yZSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZUlkID0gaWRzW2ldO1xuICAgIGNvbnN0IHJvdXRlQ2hhaW4gPSBjaGFpbltpXTtcbiAgICAvLyBTa2lwIHJlc3VsdHMgd2hlcmUgdGhlIHJvdXRlIGlkIGRvZXMgbm90IG1hdGNoIHRoZSBjaGFpbiBhdCB0aGUgc2FtZSBpbmRleFxuICAgIGlmIChyb3V0ZUlkLmlkLnRvTG93ZXJDYXNlKCkgIT09IHJvdXRlQ2hhaW4uaWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocm91dGVJZC5wYXJhbXMpIHtcbiAgICAgIGNvbnN0IHJvdXRlSWRQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZUlkLnBhcmFtcyk7XG4gICAgICAvLyBPbmx5IGNvbXBhcmUgcm91dGVzIHdpdGggdGhlIGNoYWluIHRoYXQgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgcGFyYW1ldGVycy5cbiAgICAgIGlmIChyb3V0ZUlkUGFyYW1zLmxlbmd0aCA9PT0gcm91dGVDaGFpbi5zZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTWFwcyB0aGUgcm91dGUncyBwYXJhbXMgaW50byBhIHBhdGggYmFzZWQgb24gdGhlIHBhdGggdmFyaWFibGUgbmFtZXMsXG4gICAgICAgIC8vIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgcm91dGUgY2hhaW4gZm9ybWF0LlxuICAgICAgICAvL1xuICAgICAgICAvLyBCZWZvcmU6XG4gICAgICAgIC8vIGBgYHRzXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gIHBhcmFtczoge1xuICAgICAgICAvLyAgICBzMTogJ2EnLFxuICAgICAgICAvLyAgICBzMjogJ2InXG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gYGBgXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEFmdGVyOlxuICAgICAgICAvLyBgYGB0c1xuICAgICAgICAvLyBbJzpzMScsJzpzMiddXG4gICAgICAgIC8vIGBgYFxuICAgICAgICAvL1xuICAgICAgICBjb25zdCBwYXRoV2l0aFBhcmFtcyA9IHJvdXRlSWRQYXJhbXMubWFwKGtleSA9PiBgOiR7a2V5fWApO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhdGhXaXRoUGFyYW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgLy8gU2tpcCByZXN1bHRzIHdoZXJlIHRoZSBwYXRoIHZhcmlhYmxlIGlzIG5vdCBhIG1hdGNoXG4gICAgICAgICAgaWYgKHBhdGhXaXRoUGFyYW1zW2pdLnRvTG93ZXJDYXNlKCkgIT09IHJvdXRlQ2hhaW4uc2VnbWVudHNbal0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZWlnaHQgcGF0aCBtYXRjaGVzIGZvciB0aGUgc2FtZSBpbmRleCBoaWdoZXIuXG4gICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBXZWlnaHQgaWQgbWF0Y2hlc1xuICAgIHNjb3JlKys7XG4gIH1cbiAgcmV0dXJuIHNjb3JlO1xufTtcbi8qKlxuICogTWF0Y2hlcyB0aGUgc2VnbWVudHMgYWdhaW5zdCB0aGUgY2hhaW4uXG4gKlxuICogUmV0dXJuczpcbiAqIC0gbnVsbCB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoLFxuICogLSBhIGNoYWluIHdpdGggdGhlIHBhcmFtcyBwcm9wZXJ0aWVzIHVwZGF0ZWQgd2l0aCB0aGUgcGFyYW1ldGVyIHNlZ21lbnRzIG9uIG1hdGNoLlxuICovXG5jb25zdCBtYXRjaGVzU2VnbWVudHMgPSAoc2VnbWVudHMsIGNoYWluKSA9PiB7XG4gIGNvbnN0IGlucHV0U2VnbWVudHMgPSBuZXcgUm91dGVyU2VnbWVudHMoc2VnbWVudHMpO1xuICBsZXQgbWF0Y2hlc0RlZmF1bHQgPSBmYWxzZTtcbiAgbGV0IGFsbHBhcmFtcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFpbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYWluU2VnbWVudHMgPSBjaGFpbltpXS5zZWdtZW50cztcbiAgICBpZiAoY2hhaW5TZWdtZW50c1swXSA9PT0gJycpIHtcbiAgICAgIG1hdGNoZXNEZWZhdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBzZWdtZW50IG9mIGNoYWluU2VnbWVudHMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGlucHV0U2VnbWVudHMubmV4dCgpO1xuICAgICAgICAvLyBkYXRhIHBhcmFtXG4gICAgICAgIGlmIChzZWdtZW50WzBdID09PSAnOicpIHtcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbGxwYXJhbXMgPSBhbGxwYXJhbXMgfHwgW107XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gYWxscGFyYW1zW2ldIHx8IChhbGxwYXJhbXNbaV0gPSB7fSk7XG4gICAgICAgICAgcGFyYW1zW3NlZ21lbnQuc2xpY2UoMSldID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhICE9PSBzZWdtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXNEZWZhdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNvbnN0IG1hdGNoZXMgPSBtYXRjaGVzRGVmYXVsdCA/IG1hdGNoZXNEZWZhdWx0ID09PSAoaW5wdXRTZWdtZW50cy5uZXh0KCkgPT09ICcnKSA6IHRydWU7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChhbGxwYXJhbXMpIHtcbiAgICByZXR1cm4gY2hhaW4ubWFwKChyb3V0ZSwgaSkgPT4gKHtcbiAgICAgIGlkOiByb3V0ZS5pZCxcbiAgICAgIHNlZ21lbnRzOiByb3V0ZS5zZWdtZW50cyxcbiAgICAgIHBhcmFtczogbWVyZ2VQYXJhbXMocm91dGUucGFyYW1zLCBhbGxwYXJhbXNbaV0pLFxuICAgICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgICAgYmVmb3JlTGVhdmU6IHJvdXRlLmJlZm9yZUxlYXZlXG4gICAgfSkpO1xuICB9XG4gIHJldHVybiBjaGFpbjtcbn07XG4vKipcbiAqIE1lcmdlcyB0aGUgcm91dGUgcGFyYW1ldGVyIG9iamVjdHMuXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCB3aGVuIGJvdGggcGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLlxuICovXG5jb25zdCBtZXJnZVBhcmFtcyA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhIHx8IGIgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGEpLCBiKSA6IHVuZGVmaW5lZDtcbn07XG4vKipcbiAqIEZpbmRzIHRoZSBiZXN0IG1hdGNoIGZvciB0aGUgaWRzIGluIHRoZSBjaGFpbnMuXG4gKlxuICogUmV0dXJucyB0aGUgYmVzdCBtYXRjaCBvciBudWxsIHdoZW4gbm8gbWF0Y2ggaXMgZm91bmQuXG4gKiBXaGVuIGEgY2hhaW4gaXMgcmV0dXJuZWQgdGhlIHBhcmFtZXRlcnMgYXJlIHVwZGF0ZWQgZnJvbSB0aGUgUm91dGVJRHMuXG4gKiBUaGF0IGlzIHRoZXkgY29udGFpbiBib3RoIHRoZSBjb21wb25lbnRQcm9wcyBvZiB0aGUgPGlvbi1yb3V0ZT4gYW5kIHRoZSBwYXJhbWV0ZXIgc2VnbWVudC5cbiAqL1xuY29uc3QgZmluZENoYWluRm9ySURzID0gKGlkcywgY2hhaW5zKSA9PiB7XG4gIGxldCBtYXRjaCA9IG51bGw7XG4gIGxldCBtYXhNYXRjaGVzID0gMDtcbiAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcbiAgICBjb25zdCBzY29yZSA9IG1hdGNoZXNJRHMoaWRzLCBjaGFpbik7XG4gICAgaWYgKHNjb3JlID4gbWF4TWF0Y2hlcykge1xuICAgICAgbWF0Y2ggPSBjaGFpbjtcbiAgICAgIG1heE1hdGNoZXMgPSBzY29yZTtcbiAgICB9XG4gIH1cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoLm1hcCgocm91dGUsIGkpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiByb3V0ZS5pZCxcbiAgICAgICAgc2VnbWVudHM6IHJvdXRlLnNlZ21lbnRzLFxuICAgICAgICBwYXJhbXM6IG1lcmdlUGFyYW1zKHJvdXRlLnBhcmFtcywgKF9hID0gaWRzW2ldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyYW1zKVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIEZpbmRzIHRoZSBiZXN0IG1hdGNoIGZvciB0aGUgc2VnbWVudHMgaW4gdGhlIGNoYWlucy5cbiAqXG4gKiBSZXR1cm5zIHRoZSBiZXN0IG1hdGNoIG9yIG51bGwgd2hlbiBubyBtYXRjaCBpcyBmb3VuZC5cbiAqIFdoZW4gYSBjaGFpbiBpcyByZXR1cm5lZCB0aGUgcGFyYW1ldGVycyBhcmUgdXBkYXRlZCBmcm9tIHRoZSBzZWdtZW50cy5cbiAqIFRoYXQgaXMgdGhleSBjb250YWluIGJvdGggdGhlIGNvbXBvbmVudFByb3BzIG9mIHRoZSA8aW9uLXJvdXRlPiBhbmQgdGhlIHBhcmFtZXRlciBzZWdtZW50cy5cbiAqL1xuY29uc3QgZmluZENoYWluRm9yU2VnbWVudHMgPSAoc2VnbWVudHMsIGNoYWlucykgPT4ge1xuICBsZXQgbWF0Y2ggPSBudWxsO1xuICBsZXQgYmVzdFNjb3JlID0gMDtcbiAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcbiAgICBjb25zdCBtYXRjaGVkQ2hhaW4gPSBtYXRjaGVzU2VnbWVudHMoc2VnbWVudHMsIGNoYWluKTtcbiAgICBpZiAobWF0Y2hlZENoYWluICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVQcmlvcml0eShtYXRjaGVkQ2hhaW4pO1xuICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICBtYXRjaCA9IG1hdGNoZWRDaGFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoO1xufTtcbi8qKlxuICogQ29tcHV0ZXMgdGhlIHByaW9yaXR5IG9mIGEgY2hhaW4uXG4gKlxuICogUGFyYW1ldGVyIHNlZ21lbnRzIGFyZSBnaXZlbiBhIGxvd2VyIHByaW9yaXR5IG92ZXIgZml4ZWQgc2VnbWVudHMuXG4gKlxuICogQ29uc2lkZXJpbmcgdGhlIGZvbGxvd2luZyAyIGNoYWlucyBtYXRjaGluZyB0aGUgcGF0aCAvcGF0aC90by9wYWdlOlxuICogLSAvcGF0aC90by86d2hlcmVcbiAqIC0gL3BhdGgvdG8vcGFnZVxuICpcbiAqIFRoZSBzZWNvbmQgb25lIHdpbGwgYmUgZ2l2ZW4gYSBoaWdoZXIgcHJpb3JpdHkgYmVjYXVzZSBcInBhZ2VcIiBpcyBhIGZpeGVkIHNlZ21lbnQgKHZzIFwiOndoZXJlXCIsIGEgcGFyYW1ldGVyIHNlZ21lbnQpLlxuICovXG5jb25zdCBjb21wdXRlUHJpb3JpdHkgPSBjaGFpbiA9PiB7XG4gIGxldCBzY29yZSA9IDE7XG4gIGxldCBsZXZlbCA9IDE7XG4gIGZvciAoY29uc3Qgcm91dGUgb2YgY2hhaW4pIHtcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygcm91dGUuc2VnbWVudHMpIHtcbiAgICAgIGlmIChzZWdtZW50WzBdID09PSAnOicpIHtcbiAgICAgICAgc2NvcmUgKz0gTWF0aC5wb3coMSwgbGV2ZWwpO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50ICE9PSAnJykge1xuICAgICAgICBzY29yZSArPSBNYXRoLnBvdygyLCBsZXZlbCk7XG4gICAgICB9XG4gICAgICBsZXZlbCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcmU7XG59O1xuY2xhc3MgUm91dGVyU2VnbWVudHMge1xuICBjb25zdHJ1Y3RvcihzZWdtZW50cykge1xuICAgIHRoaXMuc2VnbWVudHMgPSBzZWdtZW50cy5zbGljZSgpO1xuICB9XG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5jb25zdCByZWFkUHJvcCA9IChlbCwgcHJvcCkgPT4ge1xuICBpZiAocHJvcCBpbiBlbCkge1xuICAgIHJldHVybiBlbFtwcm9wXTtcbiAgfVxuICBpZiAoZWwuaGFzQXR0cmlidXRlKHByb3ApKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIEV4dHJhY3RzIHRoZSByZWRpcmVjdHMgKHRoYXQgaXMgPGlvbi1yb3V0ZS1yZWRpcmVjdD4gZWxlbWVudHMgaW5zaWRlIHRoZSByb290KS5cbiAqXG4gKiBUaGUgcmVkaXJlY3RzIGFyZSByZXR1cm5lZCBhcyBhIGxpc3Qgb2YgUm91dGVSZWRpcmVjdC5cbiAqL1xuY29uc3QgcmVhZFJlZGlyZWN0cyA9IHJvb3QgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShyb290LmNoaWxkcmVuKS5maWx0ZXIoZWwgPT4gZWwudGFnTmFtZSA9PT0gJ0lPTi1ST1VURS1SRURJUkVDVCcpLm1hcChlbCA9PiB7XG4gICAgY29uc3QgdG8gPSByZWFkUHJvcChlbCwgJ3RvJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IHBhcnNlUGF0aChyZWFkUHJvcChlbCwgJ2Zyb20nKSkuc2VnbWVudHMsXG4gICAgICB0bzogdG8gPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHBhcnNlUGF0aCh0bylcbiAgICB9O1xuICB9KTtcbn07XG4vKipcbiAqIEV4dHJhY3RzIGFsbCB0aGUgcm91dGVzICh0aGF0IGlzIDxpb24tcm91dGU+IGVsZW1lbnRzIGluc2lkZSB0aGUgcm9vdCkuXG4gKlxuICogVGhlIHJvdXRlcyBhcmUgcmV0dXJuZWQgYXMgYSBsaXN0IG9mIGNoYWlucyAtIHRoZSBmbGF0dGVuZWQgdHJlZS5cbiAqL1xuY29uc3QgcmVhZFJvdXRlcyA9IHJvb3QgPT4ge1xuICByZXR1cm4gZmxhdHRlblJvdXRlclRyZWUocmVhZFJvdXRlTm9kZXMocm9vdCkpO1xufTtcbi8qKlxuICogUmVhZHMgdGhlIHJvdXRlIG5vZGVzIGFzIGEgdHJlZSBtb2RlbGVkIGFmdGVyIHRoZSBET00gdHJlZSBvZiA8aW9uLXJvdXRlPiBlbGVtZW50cy5cbiAqXG4gKiBOb3RlOiByb3V0ZXMgd2l0aG91dCBhIGNvbXBvbmVudCBhcmUgaWdub3JlZCB0b2dldGhlciB3aXRoIHRoZWlyIGNoaWxkcmVuLlxuICovXG5jb25zdCByZWFkUm91dGVOb2RlcyA9IG5vZGUgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5maWx0ZXIoZWwgPT4gZWwudGFnTmFtZSA9PT0gJ0lPTi1ST1VURScgJiYgZWwuY29tcG9uZW50KS5tYXAoZWwgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWRQcm9wKGVsLCAnY29tcG9uZW50Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlZ21lbnRzOiBwYXJzZVBhdGgocmVhZFByb3AoZWwsICd1cmwnKSkuc2VnbWVudHMsXG4gICAgICBpZDogY29tcG9uZW50LnRvTG93ZXJDYXNlKCksXG4gICAgICBwYXJhbXM6IGVsLmNvbXBvbmVudFByb3BzLFxuICAgICAgYmVmb3JlTGVhdmU6IGVsLmJlZm9yZUxlYXZlLFxuICAgICAgYmVmb3JlRW50ZXI6IGVsLmJlZm9yZUVudGVyLFxuICAgICAgY2hpbGRyZW46IHJlYWRSb3V0ZU5vZGVzKGVsKVxuICAgIH07XG4gIH0pO1xufTtcbi8qKlxuICogRmxhdHRlbnMgYSBSb3V0ZXJUcmVlIGluIGEgbGlzdCBvZiBjaGFpbnMuXG4gKlxuICogRWFjaCBjaGFpbiByZXByZXNlbnRzIGEgcGF0aCBmcm9tIHRoZSByb290IG5vZGUgdG8gYSB0ZXJtaW5hbCBub2RlLlxuICovXG5jb25zdCBmbGF0dGVuUm91dGVyVHJlZSA9IG5vZGVzID0+IHtcbiAgY29uc3QgY2hhaW5zID0gW107XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGZsYXR0ZW5Ob2RlKFtdLCBjaGFpbnMsIG5vZGUpO1xuICB9XG4gIHJldHVybiBjaGFpbnM7XG59O1xuLyoqIEZsYXR0ZW5zIGEgcm91dGUgbm9kZSByZWN1cnNpdmVseSBhbmQgcHVzaCBlYWNoIGJyYW5jaCB0byB0aGUgY2hhaW5zIGxpc3QuICovXG5jb25zdCBmbGF0dGVuTm9kZSA9IChjaGFpbiwgY2hhaW5zLCBub2RlKSA9PiB7XG4gIGNoYWluID0gWy4uLmNoYWluLCB7XG4gICAgaWQ6IG5vZGUuaWQsXG4gICAgc2VnbWVudHM6IG5vZGUuc2VnbWVudHMsXG4gICAgcGFyYW1zOiBub2RlLnBhcmFtcyxcbiAgICBiZWZvcmVMZWF2ZTogbm9kZS5iZWZvcmVMZWF2ZSxcbiAgICBiZWZvcmVFbnRlcjogbm9kZS5iZWZvcmVFbnRlclxuICB9XTtcbiAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY2hhaW5zLnB1c2goY2hhaW4pO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICBmbGF0dGVuTm9kZShjaGFpbiwgY2hhaW5zLCBjaGlsZCk7XG4gIH1cbn07XG5jb25zdCBSb3V0ZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uUm91dGVXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZVdpbGxDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25Sb3V0ZURpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUm91dGVEaWRDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5wcmV2aW91c1BhdGggPSBudWxsO1xuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMubGFzdFN0YXRlID0gMDtcbiAgICB0aGlzLnJvb3QgPSAnLyc7XG4gICAgdGhpcy51c2VIYXNoID0gdHJ1ZTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCB3YWl0VW50aWxOYXZOb2RlKCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHRoaXMuZ2V0U2VnbWVudHMoKSk7XG4gICAgaWYgKGNhblByb2NlZWQgIT09IHRydWUpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FuUHJvY2VlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJlZGlyZWN0XG4gICAgICAgIH0gPSBjYW5Qcm9jZWVkO1xuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VQYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgdGhpcy5zZXRTZWdtZW50cyhwYXRoLnNlZ21lbnRzLCBST1VURVJfSU5URU5UX05PTkUsIHBhdGgucXVlcnlTdHJpbmcpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlTmF2U3RhdGVSb290KHBhdGguc2VnbWVudHMsIFJPVVRFUl9JTlRFTlRfTk9ORSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMub25Sb3V0ZXNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvblJvdXRlUmVkaXJlY3RDaGFuZ2VkJywgZGVib3VuY2UodGhpcy5vblJlZGlyZWN0Q2hhbmdlZC5iaW5kKHRoaXMpLCAxMCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25Sb3V0ZURhdGFDaGFuZ2VkJywgZGVib3VuY2UodGhpcy5vblJvdXRlc0NoYW5nZWQuYmluZCh0aGlzKSwgMTAwKSk7XG4gIH1cbiAgYXN5bmMgb25Qb3BTdGF0ZSgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmhpc3RvcnlEaXJlY3Rpb24oKTtcbiAgICBsZXQgc2VnbWVudHMgPSB0aGlzLmdldFNlZ21lbnRzKCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHNlZ21lbnRzKTtcbiAgICBpZiAoY2FuUHJvY2VlZCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYW5Qcm9jZWVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzZWdtZW50cyA9IHBhcnNlUGF0aChjYW5Qcm9jZWVkLnJlZGlyZWN0KS5zZWdtZW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3Qoc2VnbWVudHMsIGRpcmVjdGlvbik7XG4gIH1cbiAgb25CYWNrQnV0dG9uKGV2KSB7XG4gICAgZXYuZGV0YWlsLnJlZ2lzdGVyKDAsIHByb2Nlc3NOZXh0SGFuZGxlciA9PiB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICAgIHByb2Nlc3NOZXh0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgY2FuVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBjYW5Qcm9jZWVkID0gYXdhaXQgdGhpcy5ydW5HdWFyZHMoKTtcbiAgICBpZiAoY2FuUHJvY2VlZCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYW5Qcm9jZWVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gY2FuUHJvY2VlZC5yZWRpcmVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHRvIHRoZSBzcGVjaWZpZWQgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gbmF2aWdhdGUgdG8uXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBvZiB0aGUgYW5pbWF0aW9uLiBEZWZhdWx0cyB0byBgXCJmb3J3YXJkXCJgLlxuICAgKi9cbiAgYXN5bmMgcHVzaChwYXRoLCBkaXJlY3Rpb24gPSAnZm9yd2FyZCcsIGFuaW1hdGlvbikge1xuICAgIHZhciBfYTtcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gKF9hID0gdGhpcy5wcmV2aW91c1BhdGgpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcvJztcbiAgICAgIC8vIENvbnZlcnQgY3VycmVudFBhdGggdG8gYW4gVVJMIGJ5IHByZS1wZW5kaW5nIGEgcHJvdG9jb2wgYW5kIGEgaG9zdCB0byByZXNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoLlxuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgaHR0cHM6Ly9ob3N0LyR7Y3VycmVudFBhdGh9YCk7XG4gICAgICBwYXRoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICB9XG4gICAgbGV0IHBhcnNlZFBhdGggPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHBhcnNlZFBhdGguc2VnbWVudHMpO1xuICAgIGlmIChjYW5Qcm9jZWVkICE9PSB0cnVlKSB7XG4gICAgICBpZiAodHlwZW9mIGNhblByb2NlZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgoY2FuUHJvY2VlZC5yZWRpcmVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U2VnbWVudHMocGFyc2VkUGF0aC5zZWdtZW50cywgZGlyZWN0aW9uLCBwYXJzZWRQYXRoLnF1ZXJ5U3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy53cml0ZU5hdlN0YXRlUm9vdChwYXJzZWRQYXRoLnNlZ21lbnRzLCBkaXJlY3Rpb24sIGFuaW1hdGlvbik7XG4gIH1cbiAgLyoqIEdvIGJhY2sgdG8gcHJldmlvdXMgcGFnZSBpbiB0aGUgd2luZG93Lmhpc3RvcnkuICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53YWl0UHJvbWlzZSk7XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBwcmludERlYnVnKCkge1xuICAgIHByaW50Um91dGVzKHJlYWRSb3V0ZXModGhpcy5lbCkpO1xuICAgIHByaW50UmVkaXJlY3RzKHJlYWRSZWRpcmVjdHModGhpcy5lbCkpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgbmF2Q2hhbmdlZChkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5idXN5KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tpb24tcm91dGVyXSByb3V0ZXIgaXMgYnVzeSwgbmF2Q2hhbmdlZCB3YXMgY2FuY2VsbGVkJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGlkcyxcbiAgICAgIG91dGxldFxuICAgIH0gPSBhd2FpdCByZWFkTmF2U3RhdGUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IHJvdXRlcyA9IHJlYWRSb3V0ZXModGhpcy5lbCk7XG4gICAgY29uc3QgY2hhaW4gPSBmaW5kQ2hhaW5Gb3JJRHMoaWRzLCByb3V0ZXMpO1xuICAgIGlmICghY2hhaW4pIHtcbiAgICAgIGNvbnNvbGUud2FybignW2lvbi1yb3V0ZXJdIG5vIG1hdGNoaW5nIFVSTCBmb3IgJywgaWRzLm1hcChpID0+IGkuaWQpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgc2VnbWVudHMgPSBjaGFpblRvU2VnbWVudHMoY2hhaW4pO1xuICAgIGlmICghc2VnbWVudHMpIHtcbiAgICAgIGNvbnNvbGUud2FybignW2lvbi1yb3V0ZXJdIHJvdXRlciBjb3VsZCBub3QgbWF0Y2ggcGF0aCBiZWNhdXNlIHNvbWUgcmVxdWlyZWQgcGFyYW0gaXMgbWlzc2luZycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldFNlZ21lbnRzKHNlZ21lbnRzLCBkaXJlY3Rpb24pO1xuICAgIGF3YWl0IHRoaXMuc2FmZVdyaXRlTmF2U3RhdGUob3V0bGV0LCBjaGFpbiwgUk9VVEVSX0lOVEVOVF9OT05FLCBzZWdtZW50cywgbnVsbCwgaWRzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqIFRoaXMgaGFuZGxlciBnZXRzIGNhbGxlZCB3aGVuIGEgYGlvbi1yb3V0ZS1yZWRpcmVjdGAgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBET00gb3IgaWYgdGhlIGZyb20gb3IgdG8gcHJvcGVydHkgb2Ygc3VjaCBub2RlIGNoYW5nZXMuICovXG4gIG9uUmVkaXJlY3RDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5nZXRTZWdtZW50cygpO1xuICAgIGlmIChzZWdtZW50cyAmJiBmaW5kUm91dGVSZWRpcmVjdChzZWdtZW50cywgcmVhZFJlZGlyZWN0cyh0aGlzLmVsKSkpIHtcbiAgICAgIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3Qoc2VnbWVudHMsIFJPVVRFUl9JTlRFTlRfTk9ORSk7XG4gICAgfVxuICB9XG4gIC8qKiBUaGlzIGhhbmRsZXIgZ2V0cyBjYWxsZWQgd2hlbiBhIGBpb24tcm91dGVgIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgRE9NIG9yIGlmIHRoZSBmcm9tIG9yIHRvIHByb3BlcnR5IG9mIHN1Y2ggbm9kZSBjaGFuZ2VzLiAqL1xuICBvblJvdXRlc0NoYW5nZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3QodGhpcy5nZXRTZWdtZW50cygpLCBST1VURVJfSU5URU5UX05PTkUpO1xuICB9XG4gIGhpc3RvcnlEaXJlY3Rpb24oKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICBpZiAod2luLmhpc3Rvcnkuc3RhdGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RhdGUrKztcbiAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh0aGlzLnN0YXRlLCB3aW4uZG9jdW1lbnQudGl0bGUsIChfYSA9IHdpbi5kb2N1bWVudC5sb2NhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhyZWYpO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZSA9IHdpbi5oaXN0b3J5LnN0YXRlO1xuICAgIGNvbnN0IGxhc3RTdGF0ZSA9IHRoaXMubGFzdFN0YXRlO1xuICAgIHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlID4gbGFzdFN0YXRlIHx8IHN0YXRlID49IGxhc3RTdGF0ZSAmJiBsYXN0U3RhdGUgPiAwKSB7XG4gICAgICByZXR1cm4gUk9VVEVSX0lOVEVOVF9GT1JXQVJEO1xuICAgIH1cbiAgICBpZiAoc3RhdGUgPCBsYXN0U3RhdGUpIHtcbiAgICAgIHJldHVybiBST1VURVJfSU5URU5UX0JBQ0s7XG4gICAgfVxuICAgIHJldHVybiBST1VURVJfSU5URU5UX05PTkU7XG4gIH1cbiAgYXN5bmMgd3JpdGVOYXZTdGF0ZVJvb3Qoc2VnbWVudHMsIGRpcmVjdGlvbiwgYW5pbWF0aW9uKSB7XG4gICAgaWYgKCFzZWdtZW50cykge1xuICAgICAgY29uc29sZS5lcnJvcignW2lvbi1yb3V0ZXJdIFVSTCBpcyBub3QgcGFydCBvZiB0aGUgcm91dGluZyBzZXQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gbG9va3VwIHJlZGlyZWN0IHJ1bGVcbiAgICBjb25zdCByZWRpcmVjdHMgPSByZWFkUmVkaXJlY3RzKHRoaXMuZWwpO1xuICAgIGNvbnN0IHJlZGlyZWN0ID0gZmluZFJvdXRlUmVkaXJlY3Qoc2VnbWVudHMsIHJlZGlyZWN0cyk7XG4gICAgbGV0IHJlZGlyZWN0RnJvbSA9IG51bGw7XG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNlZ21lbnRzOiB0b1NlZ21lbnRzLFxuICAgICAgICBxdWVyeVN0cmluZ1xuICAgICAgfSA9IHJlZGlyZWN0LnRvO1xuICAgICAgdGhpcy5zZXRTZWdtZW50cyh0b1NlZ21lbnRzLCBkaXJlY3Rpb24sIHF1ZXJ5U3RyaW5nKTtcbiAgICAgIHJlZGlyZWN0RnJvbSA9IHJlZGlyZWN0LmZyb207XG4gICAgICBzZWdtZW50cyA9IHRvU2VnbWVudHM7XG4gICAgfVxuICAgIC8vIGxvb2t1cCByb3V0ZSBjaGFpblxuICAgIGNvbnN0IHJvdXRlcyA9IHJlYWRSb3V0ZXModGhpcy5lbCk7XG4gICAgY29uc3QgY2hhaW4gPSBmaW5kQ2hhaW5Gb3JTZWdtZW50cyhzZWdtZW50cywgcm91dGVzKTtcbiAgICBpZiAoIWNoYWluKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbaW9uLXJvdXRlcl0gdGhlIHBhdGggZG9lcyBub3QgbWF0Y2ggYW55IHJvdXRlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHdyaXRlIERPTSBnaXZlXG4gICAgcmV0dXJuIHRoaXMuc2FmZVdyaXRlTmF2U3RhdGUoZG9jdW1lbnQuYm9keSwgY2hhaW4sIGRpcmVjdGlvbiwgc2VnbWVudHMsIHJlZGlyZWN0RnJvbSwgMCwgYW5pbWF0aW9uKTtcbiAgfVxuICBhc3luYyBzYWZlV3JpdGVOYXZTdGF0ZShub2RlLCBjaGFpbiwgZGlyZWN0aW9uLCBzZWdtZW50cywgcmVkaXJlY3RGcm9tLCBpbmRleCA9IDAsIGFuaW1hdGlvbikge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9jaygpO1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGNoYW5nZWQgPSBhd2FpdCB0aGlzLndyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgc2VnbWVudHMsIHJlZGlyZWN0RnJvbSwgaW5kZXgsIGFuaW1hdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cbiAgYXN5bmMgbG9jaygpIHtcbiAgICBjb25zdCBwID0gdGhpcy53YWl0UHJvbWlzZTtcbiAgICBsZXQgcmVzb2x2ZTtcbiAgICB0aGlzLndhaXRQcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgaWYgKHAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXdhaXQgcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBiZWZvcmVMZWF2ZSBob29rIG9mIHRoZSBzb3VyY2Ugcm91dGUgYW5kIHRoZSBiZWZvcmVFbnRlciBob29rIG9mIHRoZSB0YXJnZXQgcm91dGUgaWYgdGhleSBleGlzdC5cbiAgICpcbiAgICogV2hlbiB0aGUgYmVmb3JlTGVhdmUgaG9vayBkb2VzIG5vdCByZXR1cm4gdHJ1ZSAodG8gYWxsb3cgbmF2aWdhdGluZykgdGhlbiB0aGF0IHZhbHVlIGlzIHJldHVybmVkIGVhcmx5IGFuZCB0aGUgYmVmb3JlRW50ZXIgaXMgZXhlY3V0ZWQuXG4gICAqIE90aGVyd2lzZSB0aGUgYmVmb3JlRW50ZXJIb29rIGhvb2sgb2YgdGhlIHRhcmdldCByb3V0ZSBpcyBleGVjdXRlZC5cbiAgICovXG4gIGFzeW5jIHJ1bkd1YXJkcyh0byA9IHRoaXMuZ2V0U2VnbWVudHMoKSwgZnJvbSkge1xuICAgIGlmIChmcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZyb20gPSBwYXJzZVBhdGgodGhpcy5wcmV2aW91c1BhdGgpLnNlZ21lbnRzO1xuICAgIH1cbiAgICBpZiAoIXRvIHx8ICFmcm9tKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVzID0gcmVhZFJvdXRlcyh0aGlzLmVsKTtcbiAgICBjb25zdCBmcm9tQ2hhaW4gPSBmaW5kQ2hhaW5Gb3JTZWdtZW50cyhmcm9tLCByb3V0ZXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW9wdGlvbmFsLWNoYWluXG4gICAgY29uc3QgYmVmb3JlTGVhdmVIb29rID0gZnJvbUNoYWluICYmIGZyb21DaGFpbltmcm9tQ2hhaW4ubGVuZ3RoIC0gMV0uYmVmb3JlTGVhdmU7XG4gICAgY29uc3QgY2FuTGVhdmUgPSBiZWZvcmVMZWF2ZUhvb2sgPyBhd2FpdCBiZWZvcmVMZWF2ZUhvb2soKSA6IHRydWU7XG4gICAgaWYgKGNhbkxlYXZlID09PSBmYWxzZSB8fCB0eXBlb2YgY2FuTGVhdmUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gY2FuTGVhdmU7XG4gICAgfVxuICAgIGNvbnN0IHRvQ2hhaW4gPSBmaW5kQ2hhaW5Gb3JTZWdtZW50cyh0bywgcm91dGVzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICAgIGNvbnN0IGJlZm9yZUVudGVySG9vayA9IHRvQ2hhaW4gJiYgdG9DaGFpblt0b0NoYWluLmxlbmd0aCAtIDFdLmJlZm9yZUVudGVyO1xuICAgIHJldHVybiBiZWZvcmVFbnRlckhvb2sgPyBiZWZvcmVFbnRlckhvb2soKSA6IHRydWU7XG4gIH1cbiAgYXN5bmMgd3JpdGVOYXZTdGF0ZShub2RlLCBjaGFpbiwgZGlyZWN0aW9uLCBzZWdtZW50cywgcmVkaXJlY3RGcm9tLCBpbmRleCA9IDAsIGFuaW1hdGlvbikge1xuICAgIGlmICh0aGlzLmJ1c3kpIHtcbiAgICAgIGNvbnNvbGUud2FybignW2lvbi1yb3V0ZXJdIHJvdXRlciBpcyBidXN5LCB0cmFuc2l0aW9uIHdhcyBjYW5jZWxsZWQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAvLyBnZW5lcmF0ZSByb3V0ZSBldmVudCBhbmQgZW1pdCB3aWxsIGNoYW5nZVxuICAgIGNvbnN0IHJvdXRlRXZlbnQgPSB0aGlzLnJvdXRlQ2hhbmdlRXZlbnQoc2VnbWVudHMsIHJlZGlyZWN0RnJvbSk7XG4gICAgaWYgKHJvdXRlRXZlbnQpIHtcbiAgICAgIHRoaXMuaW9uUm91dGVXaWxsQ2hhbmdlLmVtaXQocm91dGVFdmVudCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZWQgPSBhd2FpdCB3cml0ZU5hdlN0YXRlKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIGluZGV4LCBmYWxzZSwgYW5pbWF0aW9uKTtcbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAvLyBlbWl0IGRpZCBjaGFuZ2VcbiAgICBpZiAocm91dGVFdmVudCkge1xuICAgICAgdGhpcy5pb25Sb3V0ZURpZENoYW5nZS5lbWl0KHJvdXRlRXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuICBzZXRTZWdtZW50cyhzZWdtZW50cywgZGlyZWN0aW9uLCBxdWVyeVN0cmluZykge1xuICAgIHRoaXMuc3RhdGUrKztcbiAgICB3cml0ZVNlZ21lbnRzKHdpbmRvdy5oaXN0b3J5LCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCwgc2VnbWVudHMsIGRpcmVjdGlvbiwgdGhpcy5zdGF0ZSwgcXVlcnlTdHJpbmcpO1xuICB9XG4gIGdldFNlZ21lbnRzKCkge1xuICAgIHJldHVybiByZWFkU2VnbWVudHMod2luZG93LmxvY2F0aW9uLCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCk7XG4gIH1cbiAgcm91dGVDaGFuZ2VFdmVudCh0b1NlZ21lbnRzLCByZWRpcmVjdEZyb21TZWdtZW50cykge1xuICAgIGNvbnN0IGZyb20gPSB0aGlzLnByZXZpb3VzUGF0aDtcbiAgICBjb25zdCB0byA9IGdlbmVyYXRlUGF0aCh0b1NlZ21lbnRzKTtcbiAgICB0aGlzLnByZXZpb3VzUGF0aCA9IHRvO1xuICAgIGlmICh0byA9PT0gZnJvbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlZGlyZWN0ZWRGcm9tID0gcmVkaXJlY3RGcm9tU2VnbWVudHMgPyBnZW5lcmF0ZVBhdGgocmVkaXJlY3RGcm9tU2VnbWVudHMpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbSxcbiAgICAgIHJlZGlyZWN0ZWRGcm9tLFxuICAgICAgdG9cbiAgICB9O1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IHJvdXRlckxpbmtDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9YXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0fVwiO1xuY29uc3QgSW9uUm91dGVyTGlua1N0eWxlMCA9IHJvdXRlckxpbmtDc3M7XG5jb25zdCBSb3V0ZXJMaW5rID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBldiA9PiB7XG4gICAgICBvcGVuVVJMKHRoaXMuaHJlZiwgZXYsIHRoaXMucm91dGVyRGlyZWN0aW9uLCB0aGlzLnJvdXRlckFuaW1hdGlvbik7XG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaHJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB0aGlzLnJvdXRlckFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICByZWw6IHRoaXMucmVsLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgIH07XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMTExODMyNjRmYjZhZTBkYjlhN2E0N2M3MWI2ODYyZDYwMDAxYjgzNCcsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJzNlMGU1MjQyMTYxY2IwZGY1OTNkNmQ1NzNlNTFiOGJhNzUwMDY1YTEnXG4gICAgfSwgYXR0cnMpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc1YmQ4MDhlOThhNDYyN2JiMTIzNmYwZDk1NWY0YjMyOTcxMzU1NDE3J1xuICAgIH0pKSk7XG4gIH1cbn07XG5Sb3V0ZXJMaW5rLnN0eWxlID0gSW9uUm91dGVyTGlua1N0eWxlMDtcbmV4cG9ydCB7IFJvdXRlIGFzIGlvbl9yb3V0ZSwgUm91dGVSZWRpcmVjdCBhcyBpb25fcm91dGVfcmVkaXJlY3QsIFJvdXRlciBhcyBpb25fcm91dGVyLCBSb3V0ZXJMaW5rIGFzIGlvbl9yb3V0ZXJfbGluayB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLFFBQVEsTUFBTTtBQUFBLEVBQ2xCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssc0JBQXNCLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxTQUFLLE1BQU07QUFDWCxTQUFLLFlBQVk7QUFDakIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxjQUFjO0FBQ25CLFNBQUssY0FBYztBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTLFVBQVU7QUFDakIsU0FBSyxvQkFBb0IsS0FBSyxRQUFRO0FBQUEsRUFDeEM7QUFBQSxFQUNBLGlCQUFpQixVQUFVLFVBQVU7QUFDbkMsUUFBSSxhQUFhLFVBQVU7QUFDekI7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLFdBQVcsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDO0FBQ2xELFVBQU0sUUFBUSxXQUFXLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQztBQUNsRCxRQUFJLE1BQU0sV0FBVyxNQUFNLFFBQVE7QUFDakMsV0FBSyxTQUFTLFFBQVE7QUFDdEI7QUFBQSxJQUNGO0FBQ0EsZUFBVyxPQUFPLE9BQU87QUFDdkIsVUFBSSxTQUFTLEdBQUcsTUFBTSxTQUFTLEdBQUcsR0FBRztBQUNuQyxhQUFLLFNBQVMsUUFBUTtBQUN0QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssb0JBQW9CLEtBQUs7QUFBQSxFQUNoQztBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsYUFBYSxDQUFDLFVBQVU7QUFBQSxNQUN4QixrQkFBa0IsQ0FBQyxrQkFBa0I7QUFB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TUFBTSxLQUFLLFNBQVMsVUFBVSxXQUFXLEtBQUssT0FBTyxXQUFXO0FBQUEsRUFDckc7QUFBQSxFQUNBLGNBQWM7QUFDWixXQUFPLGFBQWEsT0FBTyxVQUFVLEtBQUssTUFBTSxLQUFLLE9BQU87QUFBQSxFQUM5RDtBQUFBLEVBQ0EsaUJBQWlCLFlBQVksc0JBQXNCO0FBQ2pELFVBQU0sT0FBTyxLQUFLO0FBQ2xCLFVBQU0sS0FBSyxhQUFhLFVBQVU7QUFDbEMsU0FBSyxlQUFlO0FBQ3BCLFFBQUksT0FBTyxNQUFNO0FBQ2YsYUFBTztBQUFBLElBQ1Q7QUFDQSxVQUFNLGlCQUFpQix1QkFBdUIsYUFBYSxvQkFBb0IsSUFBSTtBQUNuRixXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sYUFBYSxNQUFNO0FBQUEsRUFDdkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxVQUFVLFFBQU07QUFDbkIsY0FBUSxLQUFLLE1BQU0sSUFBSSxLQUFLLGlCQUFpQixLQUFLLGVBQWU7QUFBQSxJQUNuRTtBQUNBLFNBQUssUUFBUTtBQUNiLFNBQUssT0FBTztBQUNaLFNBQUssTUFBTTtBQUNYLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixVQUFNLFFBQVE7QUFBQSxNQUNaLE1BQU0sS0FBSztBQUFBLE1BQ1gsS0FBSyxLQUFLO0FBQUEsTUFDVixRQUFRLEtBQUs7QUFBQSxJQUNmO0FBQ0EsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTyxtQkFBbUIsS0FBSyxPQUFPO0FBQUEsUUFDcEMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLE1BQ3JCLENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxLQUFLLE9BQU8sT0FBTztBQUFBLE1BQ3RCLEtBQUs7QUFBQSxJQUNQLEdBQUcsS0FBSyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ25CLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUNGO0FBQ0EsV0FBVyxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
