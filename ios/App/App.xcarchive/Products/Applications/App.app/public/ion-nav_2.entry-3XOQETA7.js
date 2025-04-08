import {
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  lifecycle,
  setPageHidden,
  transition
} from "./chunk-P46UNXAG.js";
import {
  getTimeGivenProgression
} from "./chunk-6NM256MY.js";
import {
  attachComponent
} from "./chunk-U6MFTC2E.js";
import "./chunk-5HIO5JVM.js";
import {
  assert,
  shallowEqualStringMap
} from "./chunk-RRWPYKYY.js";
import {
  config,
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

// node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js
var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = class {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  init(container) {
    return __async(this, null, function* () {
      this.state = VIEW_STATE_ATTACHED;
      if (!this.element) {
        const component = this.component;
        this.element = yield attachComponent(this.delegate, container, component, ["ion-page", "ion-page-invisible"], this.params);
      }
    });
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    assert(this.state !== VIEW_STATE_DESTROYED, "view state must be ATTACHED");
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }
    this.nav = void 0;
    this.state = VIEW_STATE_DESTROYED;
  }
};
var matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return shallowEqualStringMap(view.params, params);
};
var convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
var convertToViews = (pages) => {
  return pages.map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ("component" in page) {
      return convertToView(page.component, page.componentProps === null ? void 0 : page.componentProps);
    }
    return convertToView(page, void 0);
  }).filter((v) => v !== null);
};
var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var IonNavStyle0 = navCss;
var Nav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.gestureOrAnimationInProgress = false;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.didLoad = false;
    this.delegate = void 0;
    this.swipeGesture = void 0;
    this.animated = true;
    this.animation = void 0;
    this.rootParams = void 0;
    this.root = void 0;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    if (this.root === void 0) {
      return;
    }
    if (this.didLoad === false) {
      return;
    }
    if (!this.useRouter) {
      if (this.root !== void 0) {
        this.setRoot(this.root, this.rootParams);
      }
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null;
    if (this.swipeGesture === void 0) {
      const mode = getIonMode(this);
      this.swipeGesture = config.getBoolean("swipeBackEnabled", mode === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      this.rootChanged();
      this.gesture = (yield import("./swipe-back-07df2095-UALNL7HB.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
      this.swipeGestureChanged();
    });
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === "number") {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {};
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }
    let resolve;
    const promise = new Promise((r) => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: () => __async(this, null, function* () {
            mark();
            yield finish;
          })
        });
        return p;
      }
    };
    if (direction === "root") {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
          direction: "back",
          animationBuilder: animation
        }));
      } else if (direction === "forward") {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), {
          animationBuilder: animation
        }));
      } else if (direction === "back") {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
          direction: "back",
          animated: true,
          animationBuilder: animation
        }));
      }
    }
    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  getRouteId() {
    return __async(this, null, function* () {
      const active = this.getActiveSync();
      if (active) {
        return {
          id: active.element.tagName,
          params: active.params,
          element: active.element
        };
      }
      return void 0;
    });
  }
  /**
   * Get the active view.
   */
  getActive() {
    return __async(this, null, function* () {
      return this.getActiveSync();
    });
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  getByIndex(index) {
    return __async(this, null, function* () {
      return this.views[index];
    });
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  canGoBack(view) {
    return __async(this, null, function* () {
      return this.canGoBackSync(view);
    });
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  getPrevious(view) {
    return __async(this, null, function* () {
      return this.getPreviousSync(view);
    });
  }
  /**
   * Returns the number of views in the stack.
   */
  getLength() {
    return __async(this, null, function* () {
      return Promise.resolve(this.views.length);
    });
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return void 0;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  queueTrns(ti, done) {
    return __async(this, null, function* () {
      var _a, _b;
      if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
        return false;
      }
      const promise = new Promise((resolve, reject) => {
        ti.resolve = resolve;
        ti.reject = reject;
      });
      ti.done = done;
      if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
        const router = document.querySelector("ion-router");
        if (router) {
          const canTransition = yield router.canTransition();
          if (canTransition === false) {
            return false;
          }
          if (typeof canTransition === "string") {
            router.push(canTransition, ti.opts.direction || "back");
            return false;
          }
        }
      }
      if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        ti.insertViews = void 0;
      }
      this.transInstr.push(ti);
      this.nextTrns();
      return promise;
    });
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const direction = result.direction === "back" ? "back" : "forward";
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */
  runTransition(ti) {
    return __async(this, null, function* () {
      try {
        this.ionNavWillChange.emit();
        this.isTransitioning = true;
        this.prepareTI(ti);
        const leavingView = this.getActiveSync();
        const enteringView = this.getEnteringView(ti, leavingView);
        if (!leavingView && !enteringView) {
          throw new Error("no views in the stack to be removed");
        }
        if (enteringView && enteringView.state === VIEW_STATE_NEW) {
          yield enteringView.init(this.el);
        }
        this.postViewInit(enteringView, leavingView, ti);
        const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        if (requiresTransition && ti.opts && leavingView) {
          const isBackDirection = ti.opts.direction === "back";
          if (isBackDirection) {
            ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
          }
          leavingView.animationBuilder = ti.opts.animationBuilder;
        }
        let result;
        if (requiresTransition) {
          result = yield this.transition(enteringView, leavingView, ti);
        } else {
          result = {
            hasCompleted: true,
            requiresTransition: false
          };
        }
        this.success(result, ti);
        this.ionNavDidChange.emit();
      } catch (rejectReason) {
        this.failed(rejectReason, ti);
      }
      this.isTransitioning = false;
      this.nextTrns();
    });
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;
    if (ti.removeView !== void 0) {
      assert(ti.removeStart !== void 0, "removeView needs removeStart");
      assert(ti.removeCount !== void 0, "removeView needs removeCount");
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error("removeView was not found");
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== void 0) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, "length can not be zero");
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error("invalid views to insert");
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error("inserted view was already inserted");
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error("inserted view was already destroyed");
      }
    }
    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== void 0) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== void 0) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return void 0;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    assert(leavingView || enteringView, "Both leavingView and enteringView are null");
    assert(ti.resolve, "resolve must be valid");
    assert(ti.reject, "reject must be valid");
    const opts = ti.opts;
    const {
      insertViews,
      removeStart,
      removeCount
    } = ti;
    let destroyQueue;
    if (removeStart !== void 0 && removeCount !== void 0) {
      assert(removeStart >= 0, "removeStart can not be negative");
      assert(removeCount >= 0, "removeCount can not be negative");
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== void 0 && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = "back";
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    assert(finalNumViews >= 0, "final balance can not be negative");
    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error("navigation stack needs at least one root page");
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = "forward";
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  transition(enteringView, leavingView, ti) {
    return __async(this, null, function* () {
      const opts = ti.opts;
      const progressCallback = opts.progressAnimation ? (ani) => {
        if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
          }, {
            oneTimeCallback: true
          });
          ani.progressEnd(0, 0, 0);
        } else {
          this.sbAni = ani;
        }
      } : void 0;
      const mode = getIonMode(this);
      const enteringEl = enteringView.element;
      const leavingEl = leavingView && leavingView.element;
      const animationOpts = Object.assign(Object.assign({
        mode,
        showGoBack: this.canGoBackSync(enteringView),
        baseEl: this.el,
        progressCallback,
        animated: this.animated && config.getBoolean("animated", true),
        enteringEl,
        leavingEl
      }, opts), {
        animationBuilder: opts.animationBuilder || this.animation || config.get("navAnimation")
      });
      const {
        hasCompleted
      } = yield transition(animationOpts);
      return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    });
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      assert(view.nav === this, "view is not part of the nav");
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    } else {
      assert(!view.nav, "nav is used");
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(view) {
    assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, "view state should be loaded or destroyed");
    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, "view must be part of the stack");
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          lifecycle(element, LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = true;
    this.pop({
      direction: "back",
      progressAnimation: true
    });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = false;
      }, {
        oneTimeCallback: true
      });
      let newStepValue = shouldComplete ? -1e-3 : 1e-3;
      if (!shouldComplete) {
        this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
        newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    } else {
      this.gestureOrAnimationInProgress = false;
    }
  }
  render() {
    return h("slot", {
      key: "71e9b5d07fc90ca5534197a63a003a4154aabd59"
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }
};
Nav.style = IonNavStyle0;
var navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
  const nav = el.closest("ion-nav");
  if (nav) {
    if (routerDirection === "forward") {
      if (component !== void 0) {
        return nav.push(component, componentProps, {
          skipIfBusy: true,
          animationBuilder: routerAnimation
        });
      }
    } else if (routerDirection === "root") {
      if (component !== void 0) {
        return nav.setRoot(component, componentProps, {
          skipIfBusy: true,
          animationBuilder: routerAnimation
        });
      }
    } else if (routerDirection === "back") {
      return nav.pop({
        skipIfBusy: true,
        animationBuilder: routerAnimation
      });
    }
  }
  return Promise.resolve(false);
};
var NavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
    };
    this.component = void 0;
    this.componentProps = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
  }
  render() {
    return h(Host, {
      key: "9ba170d1b10e08e8a6b5e6a30d363871d455a0a9",
      onClick: this.onClick
    });
  }
  get el() {
    return getElement(this);
  }
};
export {
  Nav as ion_nav,
  NavLink as ion_nav_link
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-nav_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbmF2XzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZiBhcyBnZXRFbGVtZW50LCBlIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gfSBmcm9tICcuL2N1YmljLWJlemllci1mZTIwODNkYy5qcyc7XG5pbXBvcnQgeyBuIGFzIGFzc2VydCwgcyBhcyBzaGFsbG93RXF1YWxTdHJpbmdNYXAgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlLCBjIGFzIGNvbmZpZyB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGwgYXMgbGlmZWN5Y2xlLCB0IGFzIHRyYW5zaXRpb24sIHMgYXMgc2V0UGFnZUhpZGRlbiwgZCBhcyBMSUZFQ1lDTEVfV0lMTF9VTkxPQUQsIGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIGMgYXMgTElGRUNZQ0xFX0RJRF9MRUFWRSB9IGZyb20gJy4vaW5kZXgtZWNiNTViOGQuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS0yZWVhMTc2My5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuY29uc3QgVklFV19TVEFURV9ORVcgPSAxO1xuY29uc3QgVklFV19TVEFURV9BVFRBQ0hFRCA9IDI7XG5jb25zdCBWSUVXX1NUQVRFX0RFU1RST1lFRCA9IDM7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIHBhcmFtcykge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuc3RhdGUgPSBWSUVXX1NUQVRFX05FVztcbiAgfVxuICBhc3luYyBpbml0KGNvbnRhaW5lcikge1xuICAgIHRoaXMuc3RhdGUgPSBWSUVXX1NUQVRFX0FUVEFDSEVEO1xuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGF3YWl0IGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgdGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRE9NIFdSSVRFXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICBhc3NlcnQodGhpcy5zdGF0ZSAhPT0gVklFV19TVEFURV9ERVNUUk9ZRUQsICd2aWV3IHN0YXRlIG11c3QgYmUgQVRUQUNIRUQnKTtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGVsZW1lbnQucGFyZW50RWxlbWVudCwgZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5hdiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0gVklFV19TVEFURV9ERVNUUk9ZRUQ7XG4gIH1cbn1cbmNvbnN0IG1hdGNoZXMgPSAodmlldywgaWQsIHBhcmFtcykgPT4ge1xuICBpZiAoIXZpZXcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHZpZXcuY29tcG9uZW50ICE9PSBpZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gc2hhbGxvd0VxdWFsU3RyaW5nTWFwKHZpZXcucGFyYW1zLCBwYXJhbXMpO1xufTtcbmNvbnN0IGNvbnZlcnRUb1ZpZXcgPSAocGFnZSwgcGFyYW1zKSA9PiB7XG4gIGlmICghcGFnZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwYWdlIGluc3RhbmNlb2YgVmlld0NvbnRyb2xsZXIpIHtcbiAgICByZXR1cm4gcGFnZTtcbiAgfVxuICByZXR1cm4gbmV3IFZpZXdDb250cm9sbGVyKHBhZ2UsIHBhcmFtcyk7XG59O1xuY29uc3QgY29udmVydFRvVmlld3MgPSBwYWdlcyA9PiB7XG4gIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgaWYgKHBhZ2UgaW5zdGFuY2VvZiBWaWV3Q29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIGlmICgnY29tcG9uZW50JyBpbiBwYWdlKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVmlldyhwYWdlLmNvbXBvbmVudCwgcGFnZS5jb21wb25lbnRQcm9wcyA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHBhZ2UuY29tcG9uZW50UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydFRvVmlldyhwYWdlLCB1bmRlZmluZWQpO1xuICB9KS5maWx0ZXIodiA9PiB2ICE9PSBudWxsKTtcbn07XG5jb25zdCBuYXZDc3MgPSBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfVwiO1xuY29uc3QgSW9uTmF2U3R5bGUwID0gbmF2Q3NzO1xuY29uc3QgTmF2ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxDaGFuZ2VcIiwgMyk7XG4gICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdkRpZENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLnRyYW5zSW5zdHIgPSBbXTtcbiAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnVzZVJvdXRlciA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZpZXdzID0gW107XG4gICAgdGhpcy5kaWRMb2FkID0gZmFsc2U7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN3aXBlR2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJvb3RQYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yb290ID0gdW5kZWZpbmVkO1xuICB9XG4gIHN3aXBlR2VzdHVyZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSh0aGlzLnN3aXBlR2VzdHVyZSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHJvb3RDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWRMb2FkID09PSBmYWxzZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgY29tcG9uZW50IGhhcyBub3QgbG9hZGVkIHlldCwgd2UgY2FuIHNraXAgc2V0dGluZyB1cCB0aGUgcm9vdCBjb21wb25lbnQuXG4gICAgICAgKiBJdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGBjb21wb25lbnREaWRMb2FkYCBmaXJlcy5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudXNlUm91dGVyKSB7XG4gICAgICBpZiAodGhpcy5yb290ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRSb290KHRoaXMucm9vdCwgdGhpcy5yb290UGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy51c2VSb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJykgIT09IG51bGwgJiYgdGhpcy5lbC5jbG9zZXN0KCdbbm8tcm91dGVyXScpID09PSBudWxsO1xuICAgIGlmICh0aGlzLnN3aXBlR2VzdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgIHRoaXMuc3dpcGVHZXN0dXJlID0gY29uZmlnLmdldEJvb2xlYW4oJ3N3aXBlQmFja0VuYWJsZWQnLCBtb2RlID09PSAnaW9zJyk7XG4gICAgfVxuICAgIHRoaXMuaW9uTmF2V2lsbExvYWQuZW1pdCgpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLy8gV2Ugd2FudCB0byBzZXQgdGhpcyBmbGFnIGJlZm9yZSBhbnkgd2F0Y2ggY2FsbGJhY2tzIGFyZSBtYW51YWxseSBjYWxsZWRcbiAgICB0aGlzLmRpZExvYWQgPSB0cnVlO1xuICAgIHRoaXMucm9vdENoYW5nZWQoKTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL3N3aXBlLWJhY2stMDdkZjIwOTUuanMnKSkuY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSh0aGlzLmVsLCB0aGlzLmNhblN0YXJ0LmJpbmQodGhpcyksIHRoaXMub25TdGFydC5iaW5kKHRoaXMpLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpLCB0aGlzLm9uRW5kLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3dpcGVHZXN0dXJlQ2hhbmdlZCgpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZm9yIChjb25zdCB2aWV3IG9mIHRoaXMudmlld3MpIHtcbiAgICAgIGxpZmVjeWNsZSh2aWV3LmVsZW1lbnQsIExJRkVDWUNMRV9XSUxMX1VOTE9BRCk7XG4gICAgICB2aWV3Ll9kZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIFJlbGVhc2Ugc3dpcGUgYmFjayBnZXN0dXJlIGFuZCB0cmFuc2l0aW9uLlxuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPSAwO1xuICAgIHRoaXMudmlld3MubGVuZ3RoID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIFB1c2ggYSBuZXcgY29tcG9uZW50IG9udG8gdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBzdGFjay4gUGFzcyBhbnkgYWRkaXRpb25hbFxuICAgKiBpbmZvcm1hdGlvbiBhbG9uZyBhcyBhbiBvYmplY3QuIFRoaXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBpcyBhY2Nlc3NpYmxlXG4gICAqIHRocm91Z2ggTmF2UGFyYW1zLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcHVzaCBvbnRvIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgKiBAcGFyYW0gY29tcG9uZW50UHJvcHMgQW55IHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBwdXNoKGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIG9wdHMsIGRvbmUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoLTEsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIG9wdHMsIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgY29tcG9uZW50IGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2sgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogVGhpcyBpcyB1c2VmdWwgdG8gYWRkIGEgY29tcG9uZW50IGF0IGFueSBwb2ludCBpbiB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIGluc2VydEluZGV4IFRoZSBpbmRleCB0byBpbnNlcnQgdGhlIGNvbXBvbmVudCBhdCBpbiB0aGUgc3RhY2suXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byBpbnNlcnQgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICogQHBhcmFtIGNvbXBvbmVudFByb3BzIEFueSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgaW5zZXJ0KGluc2VydEluZGV4LCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBvcHRzLCBkb25lKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0UGFnZXMoaW5zZXJ0SW5kZXgsIFt7XG4gICAgICBjb21wb25lbnQsXG4gICAgICBjb21wb25lbnRQcm9wc1xuICAgIH1dLCBvcHRzLCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0cyBhbiBhcnJheSBvZiBjb21wb25lbnRzIGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2sgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogVGhlIGxhc3QgY29tcG9uZW50IGluIHRoZSBhcnJheSB3aWxsIGJlY29tZSBpbnN0YW50aWF0ZWQgYXMgYSB2aWV3LCBhbmQgYW5pbWF0ZVxuICAgKiBpbiB0byBiZWNvbWUgdGhlIGFjdGl2ZSB2aWV3LlxuICAgKlxuICAgKiBAcGFyYW0gaW5zZXJ0SW5kZXggVGhlIGluZGV4IHRvIGluc2VydCB0aGUgY29tcG9uZW50cyBhdCBpbiB0aGUgc3RhY2suXG4gICAqIEBwYXJhbSBpbnNlcnRDb21wb25lbnRzIFRoZSBjb21wb25lbnRzIHRvIGluc2VydCBpbnRvIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICovXG4gIGluc2VydFBhZ2VzKGluc2VydEluZGV4LCBpbnNlcnRDb21wb25lbnRzLCBvcHRzLCBkb25lKSB7XG4gICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgIGluc2VydFN0YXJ0OiBpbnNlcnRJbmRleCxcbiAgICAgIGluc2VydFZpZXdzOiBpbnNlcnRDb21wb25lbnRzLFxuICAgICAgb3B0c1xuICAgIH0sIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBQb3AgYSBjb21wb25lbnQgb2ZmIG9mIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLiBOYXZpZ2F0ZXMgYmFjayBmcm9tIHRoZSBjdXJyZW50XG4gICAqIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBwb3Aob3B0cywgZG9uZSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUluZGV4KC0xLCAxLCBvcHRzLCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogUG9wIHRvIGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleE9yVmlld0N0cmwgVGhlIGluZGV4IG9yIHZpZXcgY29udHJvbGxlciB0byBwb3AgdG8uXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcG9wVG8oaW5kZXhPclZpZXdDdHJsLCBvcHRzLCBkb25lKSB7XG4gICAgY29uc3QgdGkgPSB7XG4gICAgICByZW1vdmVTdGFydDogLTEsXG4gICAgICByZW1vdmVDb3VudDogLTEsXG4gICAgICBvcHRzXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGluZGV4T3JWaWV3Q3RybCA9PT0gJ29iamVjdCcgJiYgaW5kZXhPclZpZXdDdHJsLmNvbXBvbmVudCkge1xuICAgICAgdGkucmVtb3ZlVmlldyA9IGluZGV4T3JWaWV3Q3RybDtcbiAgICAgIHRpLnJlbW92ZVN0YXJ0ID0gMTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmRleE9yVmlld0N0cmwgPT09ICdudW1iZXInKSB7XG4gICAgICB0aS5yZW1vdmVTdGFydCA9IGluZGV4T3JWaWV3Q3RybCArIDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh0aSwgZG9uZSk7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlIGJhY2sgdG8gdGhlIHJvb3Qgb2YgdGhlIHN0YWNrLCBubyBtYXR0ZXIgaG93IGZhciBiYWNrIHRoYXQgaXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcG9wVG9Sb290KG9wdHMsIGRvbmUpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVJbmRleCgxLCAtMSwgb3B0cywgZG9uZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjb21wb25lbnQgZnJvbSB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnRJbmRleCBUaGUgbnVtYmVyIHRvIGJlZ2luIHJlbW92YWwgYXQuXG4gICAqIEBwYXJhbSByZW1vdmVDb3VudCBUaGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICovXG4gIHJlbW92ZUluZGV4KHN0YXJ0SW5kZXgsIHJlbW92ZUNvdW50ID0gMSwgb3B0cywgZG9uZSkge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICByZW1vdmVTdGFydDogc3RhcnRJbmRleCxcbiAgICAgIHJlbW92ZUNvdW50LFxuICAgICAgb3B0c1xuICAgIH0sIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIHJvb3QgZm9yIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2sgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byBzZXQgYXMgdGhlIHJvb3Qgb2YgdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAqIEBwYXJhbSBjb21wb25lbnRQcm9wcyBBbnkgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICovXG4gIHNldFJvb3QoY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgb3B0cywgZG9uZSkge1xuICAgIHJldHVybiB0aGlzLnNldFBhZ2VzKFt7XG4gICAgICBjb21wb25lbnQsXG4gICAgICBjb21wb25lbnRQcm9wc1xuICAgIH1dLCBvcHRzLCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSB2aWV3cyBvZiB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YWNrIGFuZCBuYXZpZ2F0ZSB0byB0aGUgbGFzdCB2aWV3LlxuICAgKiBCeSBkZWZhdWx0IGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkLCBidXQgdGhleSBjYW4gYmUgZW5hYmxlZCBieSBwYXNzaW5nIG9wdGlvbnNcbiAgICogdG8gdGhlIG5hdmlnYXRpb24gY29udHJvbGxlci4gTmF2aWdhdGlvbiBwYXJhbWV0ZXJzIGNhbiBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAgICogaW5kaXZpZHVhbCBwYWdlcyBpbiB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB2aWV3cyBUaGUgbGlzdCBvZiB2aWV3cyB0byBzZXQgYXMgdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgc2V0UGFnZXModmlld3MsIG9wdHMsIGRvbmUpIHtcbiAgICBvcHRzICE9PSBudWxsICYmIG9wdHMgIT09IHZvaWQgMCA/IG9wdHMgOiBvcHRzID0ge307XG4gICAgLy8gaWYgYW5pbWF0aW9uIHdhc24ndCBzZXQgdG8gdHJ1ZSB0aGVuIGRlZmF1bHQgaXQgdG8gTk9UIGFuaW1hdGVcbiAgICBpZiAob3B0cy5hbmltYXRlZCAhPT0gdHJ1ZSkge1xuICAgICAgb3B0cy5hbmltYXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgaW5zZXJ0U3RhcnQ6IDAsXG4gICAgICBpbnNlcnRWaWV3czogdmlld3MsXG4gICAgICByZW1vdmVTdGFydDogMCxcbiAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgIG9wdHNcbiAgICB9LCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIGJ5IHRoZSByb3V0ZXIgdG8gdXBkYXRlIHRoZSB2aWV3LlxuICAgKlxuICAgKiBAcGFyYW0gaWQgVGhlIGNvbXBvbmVudCB0YWcuXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGNvbXBvbmVudCBwYXJhbXMuXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gQSBkaXJlY3Rpb24gaGludC5cbiAgICogQHBhcmFtIGFuaW1hdGlvbiBhbiBBbmltYXRpb25CdWlsZGVyLlxuICAgKlxuICAgKiBAcmV0dXJuIHRoZSBzdGF0dXMuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc2V0Um91dGVJZChpZCwgcGFyYW1zLCBkaXJlY3Rpb24sIGFuaW1hdGlvbikge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgIGlmIChtYXRjaGVzKGFjdGl2ZSwgaWQsIHBhcmFtcykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgZWxlbWVudDogYWN0aXZlLmVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgbGV0IGZpbmlzaDtcbiAgICBjb25zdCBjb21tb25PcHRzID0ge1xuICAgICAgdXBkYXRlVVJMOiBmYWxzZSxcbiAgICAgIHZpZXdJc1JlYWR5OiBlbnRlcmluZ0VsID0+IHtcbiAgICAgICAgbGV0IG1hcms7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZShyID0+IG1hcmsgPSByKTtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgY2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICBlbGVtZW50OiBlbnRlcmluZ0VsLFxuICAgICAgICAgIG1hcmtWaXNpYmxlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBtYXJrKCk7XG4gICAgICAgICAgICBhd2FpdCBmaW5pc2g7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncm9vdCcpIHtcbiAgICAgIGZpbmlzaCA9IHRoaXMuc2V0Um9vdChpZCwgcGFyYW1zLCBjb21tb25PcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTG9vayBmb3IgYSB2aWV3IG1hdGNoaW5nIHRoZSB0YXJnZXQgaW4gdGhlIHZpZXcgc3RhY2suXG4gICAgICBjb25zdCB2aWV3Q29udHJvbGxlciA9IHRoaXMudmlld3MuZmluZCh2ID0+IG1hdGNoZXModiwgaWQsIHBhcmFtcykpO1xuICAgICAgaWYgKHZpZXdDb250cm9sbGVyKSB7XG4gICAgICAgIGZpbmlzaCA9IHRoaXMucG9wVG8odmlld0NvbnRyb2xsZXIsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uT3B0cyksIHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrJyxcbiAgICAgICAgICBhbmltYXRpb25CdWlsZGVyOiBhbmltYXRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgICBmaW5pc2ggPSB0aGlzLnB1c2goaWQsIHBhcmFtcywgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25PcHRzKSwge1xuICAgICAgICAgIGFuaW1hdGlvbkJ1aWxkZXI6IGFuaW1hdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7XG4gICAgICAgIGZpbmlzaCA9IHRoaXMuc2V0Um9vdChpZCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vbk9wdHMpLCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnYmFjaycsXG4gICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogYW5pbWF0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCBieSA8aW9uLXJvdXRlcj4gdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmVTeW5jKCk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGFjdGl2ZS5lbGVtZW50LnRhZ05hbWUsXG4gICAgICAgIHBhcmFtczogYWN0aXZlLnBhcmFtcyxcbiAgICAgICAgZWxlbWVudDogYWN0aXZlLmVsZW1lbnRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgYWN0aXZlIHZpZXcuXG4gICAqL1xuICBhc3luYyBnZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHZpZXcgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdmlldy5cbiAgICovXG4gIGFzeW5jIGdldEJ5SW5kZXgoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3c1tpbmRleF07XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjdXJyZW50IHZpZXcgY2FuIGdvIGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB2aWV3IFRoZSB2aWV3IHRvIGNoZWNrLlxuICAgKi9cbiAgYXN5bmMgY2FuR29CYWNrKHZpZXcpIHtcbiAgICByZXR1cm4gdGhpcy5jYW5Hb0JhY2tTeW5jKHZpZXcpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHByZXZpb3VzIHZpZXcuXG4gICAqXG4gICAqIEBwYXJhbSB2aWV3IFRoZSB2aWV3IHRvIGdldC5cbiAgICovXG4gIGFzeW5jIGdldFByZXZpb3VzKHZpZXcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmV2aW91c1N5bmModmlldyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB2aWV3cyBpbiB0aGUgc3RhY2suXG4gICAqL1xuICBhc3luYyBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnZpZXdzLmxlbmd0aCk7XG4gIH1cbiAgZ2V0QWN0aXZlU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3c1t0aGlzLnZpZXdzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGNhbkdvQmFja1N5bmModmlldyA9IHRoaXMuZ2V0QWN0aXZlU3luYygpKSB7XG4gICAgcmV0dXJuICEhKHZpZXcgJiYgdGhpcy5nZXRQcmV2aW91c1N5bmModmlldykpO1xuICB9XG4gIGdldFByZXZpb3VzU3luYyh2aWV3ID0gdGhpcy5nZXRBY3RpdmVTeW5jKCkpIHtcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICBjb25zdCBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgcmV0dXJuIGluZGV4ID4gMCA/IHZpZXdzW2luZGV4IC0gMV0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBuYXZpZ2F0aW9uIHN0YWNrIGNoYW5nZSB0byB0aGUgcXVldWUgYW5kIHNjaGVkdWxlcyBpdCB0byBydW4uXG4gICAqXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIHRyYW5zaXRpb24gc3VjY2VlZHMuXG4gICAqL1xuICBhc3luYyBxdWV1ZVRybnModGksIGRvbmUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiAoKF9hID0gdGkub3B0cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNraXBJZkJ1c3kpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRpLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICB0aS5kb25lID0gZG9uZTtcbiAgICAvKipcbiAgICAgKiBJZiB1c2luZyByb3V0ZXIsIGNoZWNrIHRvIHNlZSBpZiBuYXZpZ2F0aW9uIGhvb2tzXG4gICAgICogd2lsbCBhbGxvdyB1cyB0byBwZXJmb3JtIHRoaXMgdHJhbnNpdGlvbi4gVGhpc1xuICAgICAqIGlzIHJlcXVpcmVkIGluIG9yZGVyIGZvciBob29rcyB0byB3b3JrIHdpdGhcbiAgICAgKiB0aGUgaW9uLWJhY2stYnV0dG9uIG9yIHN3aXBlIHRvIGdvIGJhY2suXG4gICAgICovXG4gICAgaWYgKHRpLm9wdHMgJiYgdGkub3B0cy51cGRhdGVVUkwgIT09IGZhbHNlICYmIHRoaXMudXNlUm91dGVyKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgIGNvbnN0IGNhblRyYW5zaXRpb24gPSBhd2FpdCByb3V0ZXIuY2FuVHJhbnNpdGlvbigpO1xuICAgICAgICBpZiAoY2FuVHJhbnNpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYW5UcmFuc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJvdXRlci5wdXNoKGNhblRyYW5zaXRpb24sIHRpLm9wdHMuZGlyZWN0aW9uIHx8ICdiYWNrJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSBlbXB0eVxuICAgIGlmICgoKF9iID0gdGkuaW5zZXJ0Vmlld3MpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sZW5ndGgpID09PSAwKSB7XG4gICAgICB0aS5pbnNlcnRWaWV3cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gRW5xdWV1ZSB0cmFuc2l0aW9uIGluc3RydWN0aW9uXG4gICAgdGhpcy50cmFuc0luc3RyLnB1c2godGkpO1xuICAgIC8vIGlmIHRoZXJlIGlzbid0IGEgdHJhbnNpdGlvbiBhbHJlYWR5IGhhcHBlbmluZ1xuICAgIC8vIHRoZW4gdGhpcyB3aWxsIGtpY2sgb2ZmIHRoaXMgdHJhbnNpdGlvblxuICAgIHRoaXMubmV4dFRybnMoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBzdWNjZXNzKHJlc3VsdCwgdGkpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuZmlyZUVycm9yKCduYXYgY29udHJvbGxlciB3YXMgZGVzdHJveWVkJywgdGkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGkuZG9uZSkge1xuICAgICAgdGkuZG9uZShyZXN1bHQuaGFzQ29tcGxldGVkLCByZXN1bHQucmVxdWlyZXNUcmFuc2l0aW9uLCByZXN1bHQuZW50ZXJpbmdWaWV3LCByZXN1bHQubGVhdmluZ1ZpZXcsIHJlc3VsdC5kaXJlY3Rpb24pO1xuICAgIH1cbiAgICB0aS5yZXNvbHZlKHJlc3VsdC5oYXNDb21wbGV0ZWQpO1xuICAgIGlmICh0aS5vcHRzLnVwZGF0ZVVSTCAhPT0gZmFsc2UgJiYgdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gcmVzdWx0LmRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJ2JhY2snIDogJ2ZvcndhcmQnO1xuICAgICAgICByb3V0ZXIubmF2Q2hhbmdlZChkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmYWlsZWQocmVqZWN0UmVhc29uLCB0aSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5maXJlRXJyb3IoJ25hdiBjb250cm9sbGVyIHdhcyBkZXN0cm95ZWQnLCB0aSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPSAwO1xuICAgIHRoaXMuZmlyZUVycm9yKHJlamVjdFJlYXNvbiwgdGkpO1xuICB9XG4gIGZpcmVFcnJvcihyZWplY3RSZWFzb24sIHRpKSB7XG4gICAgaWYgKHRpLmRvbmUpIHtcbiAgICAgIHRpLmRvbmUoZmFsc2UsIGZhbHNlLCByZWplY3RSZWFzb24pO1xuICAgIH1cbiAgICBpZiAodGkucmVqZWN0ICYmICF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGkucmVqZWN0KHJlamVjdFJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29uc3VtZXMgdGhlIG5leHQgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUuXG4gICAqXG4gICAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHRyYW5zaXRpb24gaXMgZXhlY3V0ZWQuXG4gICAqL1xuICBuZXh0VHJucygpIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBmcmFtZXdvcmsncyBicmVhZCAnbiBidXR0YSBmdW5jdGlvblxuICAgIC8vIG9ubHkgb25lIHRyYW5zaXRpb24gaXMgYWxsb3dlZCBhdCBhbnkgZ2l2ZW4gdGltZVxuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB0aGVyZSBpcyBubyB0cmFuc2l0aW9uIGhhcHBlbmluZyByaWdodCBub3csIGV4ZWN1dGVzIHRoZSBuZXh0IGluc3RydWN0aW9ucy5cbiAgICBjb25zdCB0aSA9IHRoaXMudHJhbnNJbnN0ci5zaGlmdCgpO1xuICAgIGlmICghdGkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5ydW5UcmFuc2l0aW9uKHRpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKiogRXhlY3V0ZXMgYWxsIHRoZSB0cmFuc2l0aW9uIGluc3RydWN0aW9uIGZyb20gdGhlIHF1ZXVlLiAqL1xuICBhc3luYyBydW5UcmFuc2l0aW9uKHRpKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHNldCB0aGF0IHRoaXMgbmF2IGlzIGFjdGl2ZWx5IHRyYW5zaXRpb25pbmdcbiAgICAgIHRoaXMuaW9uTmF2V2lsbENoYW5nZS5lbWl0KCk7XG4gICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLnByZXBhcmVUSSh0aSk7XG4gICAgICBjb25zdCBsZWF2aW5nVmlldyA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgY29uc3QgZW50ZXJpbmdWaWV3ID0gdGhpcy5nZXRFbnRlcmluZ1ZpZXcodGksIGxlYXZpbmdWaWV3KTtcbiAgICAgIGlmICghbGVhdmluZ1ZpZXcgJiYgIWVudGVyaW5nVmlldykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZpZXdzIGluIHRoZSBzdGFjayB0byBiZSByZW1vdmVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoZW50ZXJpbmdWaWV3ICYmIGVudGVyaW5nVmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9ORVcpIHtcbiAgICAgICAgYXdhaXQgZW50ZXJpbmdWaWV3LmluaXQodGhpcy5lbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBvc3RWaWV3SW5pdChlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSk7XG4gICAgICAvLyBOZWVkcyB0cmFuc2l0aW9uP1xuICAgICAgY29uc3QgcmVxdWlyZXNUcmFuc2l0aW9uID0gKHRpLmVudGVyaW5nUmVxdWlyZXNUcmFuc2l0aW9uIHx8IHRpLmxlYXZpbmdSZXF1aXJlc1RyYW5zaXRpb24pICYmIGVudGVyaW5nVmlldyAhPT0gbGVhdmluZ1ZpZXc7XG4gICAgICBpZiAocmVxdWlyZXNUcmFuc2l0aW9uICYmIHRpLm9wdHMgJiYgbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgY29uc3QgaXNCYWNrRGlyZWN0aW9uID0gdGkub3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGhlYWRpbmcgYmFjaywgdXNlIHRoZSBlbnRlcmluZyBwYWdlJ3MgYW5pbWF0aW9uXG4gICAgICAgICAqIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkIGJ5IHRoZSBkZXZlbG9wZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaXNCYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgICAgdGkub3B0cy5hbmltYXRpb25CdWlsZGVyID0gdGkub3B0cy5hbmltYXRpb25CdWlsZGVyIHx8IChlbnRlcmluZ1ZpZXcgPT09IG51bGwgfHwgZW50ZXJpbmdWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRlcmluZ1ZpZXcuYW5pbWF0aW9uQnVpbGRlcik7XG4gICAgICAgIH1cbiAgICAgICAgbGVhdmluZ1ZpZXcuYW5pbWF0aW9uQnVpbGRlciA9IHRpLm9wdHMuYW5pbWF0aW9uQnVpbGRlcjtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICBpZiAocmVxdWlyZXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMudHJhbnNpdGlvbihlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0cmFuc2l0aW9uIGlzIG5vdCByZXF1aXJlZCwgc28gd2UgYXJlIGFscmVhZHkgZG9uZSFcbiAgICAgICAgLy8gdGhleSdyZSBpbnNlcnRpbmcvcmVtb3ZpbmcgdGhlIHZpZXdzIHNvbWV3aGVyZSBpbiB0aGUgbWlkZGxlIG9yXG4gICAgICAgIC8vIGJlZ2lubmluZywgc28gdmlzdWFsbHkgbm90aGluZyBuZWVkcyB0byBhbmltYXRlL3RyYW5zaXRpb25cbiAgICAgICAgLy8gcmVzb2x2ZSBpbW1lZGlhdGVseSBiZWNhdXNlIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRoYXQncyBoYXBwZW5pbmdcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIGhhc0NvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlc1RyYW5zaXRpb246IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLnN1Y2Nlc3MocmVzdWx0LCB0aSk7XG4gICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZS5lbWl0KCk7XG4gICAgfSBjYXRjaCAocmVqZWN0UmVhc29uKSB7XG4gICAgICB0aGlzLmZhaWxlZChyZWplY3RSZWFzb24sIHRpKTtcbiAgICB9XG4gICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5leHRUcm5zKCk7XG4gIH1cbiAgcHJlcGFyZVRJKHRpKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgX2M7XG4gICAgY29uc3Qgdmlld3NMZW5ndGggPSB0aGlzLnZpZXdzLmxlbmd0aDtcbiAgICAoX2EgPSB0aS5vcHRzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aS5vcHRzID0ge307XG4gICAgKF9iID0gKF9jID0gdGkub3B0cykuZGVsZWdhdGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IF9jLmRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcbiAgICBpZiAodGkucmVtb3ZlVmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc3NlcnQodGkucmVtb3ZlU3RhcnQgIT09IHVuZGVmaW5lZCwgJ3JlbW92ZVZpZXcgbmVlZHMgcmVtb3ZlU3RhcnQnKTtcbiAgICAgIGFzc2VydCh0aS5yZW1vdmVDb3VudCAhPT0gdW5kZWZpbmVkLCAncmVtb3ZlVmlldyBuZWVkcyByZW1vdmVDb3VudCcpO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnZpZXdzLmluZGV4T2YodGkucmVtb3ZlVmlldyk7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVtb3ZlVmlldyB3YXMgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICB0aS5yZW1vdmVTdGFydCArPSBpbmRleDtcbiAgICB9XG4gICAgaWYgKHRpLnJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aS5yZW1vdmVTdGFydCA8IDApIHtcbiAgICAgICAgdGkucmVtb3ZlU3RhcnQgPSB2aWV3c0xlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBpZiAodGkucmVtb3ZlQ291bnQgPCAwKSB7XG4gICAgICAgIHRpLnJlbW92ZUNvdW50ID0gdmlld3NMZW5ndGggLSB0aS5yZW1vdmVTdGFydDtcbiAgICAgIH1cbiAgICAgIHRpLmxlYXZpbmdSZXF1aXJlc1RyYW5zaXRpb24gPSB0aS5yZW1vdmVDb3VudCA+IDAgJiYgdGkucmVtb3ZlU3RhcnQgKyB0aS5yZW1vdmVDb3VudCA9PT0gdmlld3NMZW5ndGg7XG4gICAgfVxuICAgIGlmICh0aS5pbnNlcnRWaWV3cykge1xuICAgICAgLy8gYWxsb3cgLTEgdG8gYmUgcGFzc2VkIGluIHRvIGF1dG8gcHVzaCBpdCBvbiB0aGUgZW5kXG4gICAgICAvLyBhbmQgY2xlYW4gdXAgdGhlIGluZGV4IGlmIGl0J3MgbGFyZ2VyIHRoZW4gdGhlIHNpemUgb2YgdGhlIHN0YWNrXG4gICAgICBpZiAodGkuaW5zZXJ0U3RhcnQgPCAwIHx8IHRpLmluc2VydFN0YXJ0ID4gdmlld3NMZW5ndGgpIHtcbiAgICAgICAgdGkuaW5zZXJ0U3RhcnQgPSB2aWV3c0xlbmd0aDtcbiAgICAgIH1cbiAgICAgIHRpLmVudGVyaW5nUmVxdWlyZXNUcmFuc2l0aW9uID0gdGkuaW5zZXJ0U3RhcnQgPT09IHZpZXdzTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBpbnNlcnRWaWV3cyA9IHRpLmluc2VydFZpZXdzO1xuICAgIGlmICghaW5zZXJ0Vmlld3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXNzZXJ0KGluc2VydFZpZXdzLmxlbmd0aCA+IDAsICdsZW5ndGggY2FuIG5vdCBiZSB6ZXJvJyk7XG4gICAgY29uc3Qgdmlld0NvbnRyb2xsZXJzID0gY29udmVydFRvVmlld3MoaW5zZXJ0Vmlld3MpO1xuICAgIGlmICh2aWV3Q29udHJvbGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdmlld3MgdG8gaW5zZXJ0Jyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGFsbCB0aGUgaW5zZXJ0ZWQgdmlldyBhcmUgY29ycmVjdFxuICAgIGZvciAoY29uc3QgdmlldyBvZiB2aWV3Q29udHJvbGxlcnMpIHtcbiAgICAgIHZpZXcuZGVsZWdhdGUgPSB0aS5vcHRzLmRlbGVnYXRlO1xuICAgICAgY29uc3QgbmF2ID0gdmlldy5uYXY7XG4gICAgICBpZiAobmF2ICYmIG5hdiAhPT0gdGhpcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydGVkIHZpZXcgd2FzIGFscmVhZHkgaW5zZXJ0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX0RFU1RST1lFRCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydGVkIHZpZXcgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRpLmluc2VydFZpZXdzID0gdmlld0NvbnRyb2xsZXJzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aWV3IHRoYXQgd2lsbCBiZSBlbnRlcmVkIGNvbnNpZGVyaW5nIHRoZSB0cmFuc2l0aW9uIGluc3RydWN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHRpIFRoZSBpbnN0cnVjdGlvbnMuXG4gICAqIEBwYXJhbSBsZWF2aW5nVmlldyBUaGUgdmlldyBiZWluZyBsZWZ0IG9yIHVuZGVmaW5lZCBpZiBub25lLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgdmlldyB0aGF0IHdpbGwgYmUgZW50ZXJlZCwgdW5kZWZpbmVkIGlmIG5vbmUuXG4gICAqL1xuICBnZXRFbnRlcmluZ1ZpZXcodGksIGxlYXZpbmdWaWV3KSB7XG4gICAgLy8gVGhlIGxhc3QgaW5zZXJ0ZWQgdmlldyB3aWxsIGJlIGVudGVyZWQgd2hlbiB2aWV3IGFyZSBpbnNlcnRlZC5cbiAgICBjb25zdCBpbnNlcnRWaWV3cyA9IHRpLmluc2VydFZpZXdzO1xuICAgIGlmIChpbnNlcnRWaWV3cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaW5zZXJ0Vmlld3NbaW5zZXJ0Vmlld3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIC8vIFdoZW4gdmlld3MgYXJlIGRlbGV0ZWQsIHdlIHdpbGwgZW50ZXIgdGhlIGxhc3QgdmlldyB0aGF0IGlzIG5vdCByZW1vdmVkIGFuZCBub3QgdGhlIHZpZXcgYmVpbmcgbGVmdC5cbiAgICBjb25zdCByZW1vdmVTdGFydCA9IHRpLnJlbW92ZVN0YXJ0O1xuICAgIGlmIChyZW1vdmVTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICBjb25zdCByZW1vdmVFbmQgPSByZW1vdmVTdGFydCArIHRpLnJlbW92ZUNvdW50O1xuICAgICAgZm9yIChsZXQgaSA9IHZpZXdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3c1tpXTtcbiAgICAgICAgaWYgKChpIDwgcmVtb3ZlU3RhcnQgfHwgaSA+PSByZW1vdmVFbmQpICYmIHZpZXcgIT09IGxlYXZpbmdWaWV3KSB7XG4gICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbmQgUmVtb3ZlcyB0aGUgdmlld3MgZnJvbSB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIGVudGVyaW5nVmlldyBUaGUgdmlldyBiZWluZyBlbnRlcmVkLlxuICAgKiBAcGFyYW0gbGVhdmluZ1ZpZXcgVGhlIHZpZXcgYmVpbmcgbGVmdC5cbiAgICogQHBhcmFtIHRpIFRoZSBpbnN0cnVjdGlvbnMuXG4gICAqL1xuICBwb3N0Vmlld0luaXQoZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBhc3NlcnQobGVhdmluZ1ZpZXcgfHwgZW50ZXJpbmdWaWV3LCAnQm90aCBsZWF2aW5nVmlldyBhbmQgZW50ZXJpbmdWaWV3IGFyZSBudWxsJyk7XG4gICAgYXNzZXJ0KHRpLnJlc29sdmUsICdyZXNvbHZlIG11c3QgYmUgdmFsaWQnKTtcbiAgICBhc3NlcnQodGkucmVqZWN0LCAncmVqZWN0IG11c3QgYmUgdmFsaWQnKTtcbiAgICAvLyBDb21wdXRlIHRoZSB2aWV3cyB0byByZW1vdmUuXG4gICAgY29uc3Qgb3B0cyA9IHRpLm9wdHM7XG4gICAgY29uc3Qge1xuICAgICAgaW5zZXJ0Vmlld3MsXG4gICAgICByZW1vdmVTdGFydCxcbiAgICAgIHJlbW92ZUNvdW50XG4gICAgfSA9IHRpO1xuICAgIC8qKiBSZWNvcmRzIHRoZSB2aWV3IHRvIGRlc3Ryb3kgKi9cbiAgICBsZXQgZGVzdHJveVF1ZXVlO1xuICAgIC8vIHRoZXJlIGFyZSB2aWV3cyB0byByZW1vdmVcbiAgICBpZiAocmVtb3ZlU3RhcnQgIT09IHVuZGVmaW5lZCAmJiByZW1vdmVDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc3NlcnQocmVtb3ZlU3RhcnQgPj0gMCwgJ3JlbW92ZVN0YXJ0IGNhbiBub3QgYmUgbmVnYXRpdmUnKTtcbiAgICAgIGFzc2VydChyZW1vdmVDb3VudCA+PSAwLCAncmVtb3ZlQ291bnQgY2FuIG5vdCBiZSBuZWdhdGl2ZScpO1xuICAgICAgZGVzdHJveVF1ZXVlID0gW107XG4gICAgICBmb3IgKGxldCBpID0gcmVtb3ZlU3RhcnQ7IGkgPCByZW1vdmVTdGFydCArIHJlbW92ZUNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmlld3NbaV07XG4gICAgICAgIGlmICh2aWV3ICE9PSB1bmRlZmluZWQgJiYgdmlldyAhPT0gZW50ZXJpbmdWaWV3ICYmIHZpZXcgIT09IGxlYXZpbmdWaWV3KSB7XG4gICAgICAgICAgZGVzdHJveVF1ZXVlLnB1c2godmlldyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRlZmF1bHQgdGhlIGRpcmVjdGlvbiB0byBcImJhY2tcIlxuICAgICAgKF9hID0gb3B0cy5kaXJlY3Rpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG9wdHMuZGlyZWN0aW9uID0gJ2JhY2snO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbE51bVZpZXdzID0gdGhpcy52aWV3cy5sZW5ndGggKyAoKF9iID0gaW5zZXJ0Vmlld3MgPT09IG51bGwgfHwgaW5zZXJ0Vmlld3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluc2VydFZpZXdzLmxlbmd0aCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCkgLSAocmVtb3ZlQ291bnQgIT09IG51bGwgJiYgcmVtb3ZlQ291bnQgIT09IHZvaWQgMCA/IHJlbW92ZUNvdW50IDogMCk7XG4gICAgYXNzZXJ0KGZpbmFsTnVtVmlld3MgPj0gMCwgJ2ZpbmFsIGJhbGFuY2UgY2FuIG5vdCBiZSBuZWdhdGl2ZScpO1xuICAgIGlmIChmaW5hbE51bVZpZXdzID09PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFlvdSBjYW4ndCByZW1vdmUgYWxsIHRoZSBwYWdlcyBpbiB0aGUgbmF2aWdhdGlvbiBzdGFjay4gbmF2LnBvcCgpIGlzIHByb2JhYmx5IGNhbGxlZCB0b28gbWFueSB0aW1lcy5gLCB0aGlzLCB0aGlzLmVsKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdGlvbiBzdGFjayBuZWVkcyBhdCBsZWFzdCBvbmUgcm9vdCBwYWdlJyk7XG4gICAgfVxuICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHRyYW5zaXRpb24gY2FuIG5vdCBiZSByZWplY3RlZCwgYW55IHRocm93IHNob3VsZCBiZSBhbiBlcnJvclxuICAgIC8vIEluc2VydCB0aGUgbmV3IHZpZXdzIGluIHRoZSBzdGFjay5cbiAgICBpZiAoaW5zZXJ0Vmlld3MpIHtcbiAgICAgIC8vIGFkZCB0aGUgdmlld3MgdG8gdGhlXG4gICAgICBsZXQgaW5zZXJ0SW5kZXggPSB0aS5pbnNlcnRTdGFydDtcbiAgICAgIGZvciAoY29uc3QgdmlldyBvZiBpbnNlcnRWaWV3cykge1xuICAgICAgICB0aGlzLmluc2VydFZpZXdBdCh2aWV3LCBpbnNlcnRJbmRleCk7XG4gICAgICAgIGluc2VydEluZGV4Kys7XG4gICAgICB9XG4gICAgICBpZiAodGkuZW50ZXJpbmdSZXF1aXJlc1RyYW5zaXRpb24pIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byBmb3J3YXJkIGlmIG5vdCBhbHJlYWR5IHNldFxuICAgICAgICAoX2MgPSBvcHRzLmRpcmVjdGlvbikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogb3B0cy5kaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZSB2aWV3cyB0byBiZSByZW1vdmVkIGFyZSBpbiB0aGUgYmVnaW5uaW5nIG9yIG1pZGRsZVxuICAgIC8vIGFuZCB0aGVyZSBpcyBub3QgYSB2aWV3IHRoYXQgbmVlZHMgdG8gdmlzdWFsbHkgdHJhbnNpdGlvbiBvdXRcbiAgICAvLyB0aGVuIGp1c3QgZGVzdHJveSB0aGVtIGFuZCBkb24ndCB0cmFuc2l0aW9uIGFueXRoaW5nXG4gICAgLy8gYmF0Y2ggYWxsIG9mIGxpZmVjeWNsZXMgdG9nZXRoZXJcbiAgICAvLyBsZXQncyBtYWtlIHN1cmUsIGNhbGxiYWNrcyBhcmUgem9uZWRcbiAgICBpZiAoZGVzdHJveVF1ZXVlICYmIGRlc3Ryb3lRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHZpZXcgb2YgZGVzdHJveVF1ZXVlKSB7XG4gICAgICAgIGxpZmVjeWNsZSh2aWV3LmVsZW1lbnQsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcbiAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX0RJRF9MRUFWRSk7XG4gICAgICAgIGxpZmVjeWNsZSh2aWV3LmVsZW1lbnQsIExJRkVDWUNMRV9XSUxMX1VOTE9BRCk7XG4gICAgICB9XG4gICAgICAvLyBvbmNlIGFsbCBsaWZlY3ljbGUgZXZlbnRzIGhhcyBiZWVuIGRlbGl2ZXJlZCwgd2UgY2FuIHNhZmVseSBkZXRyb3kgdGhlIHZpZXdzXG4gICAgICBmb3IgKGNvbnN0IHZpZXcgb2YgZGVzdHJveVF1ZXVlKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVZpZXcodmlldyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIHRyYW5zaXRpb24oZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpIHtcbiAgICAvLyB3ZSBzaG91bGQgYW5pbWF0ZSAoZHVyYXRpb24gPiAwKSBpZiB0aGUgcHVzaGVkIHBhZ2UgaXMgbm90IHRoZSBmaXJzdCBvbmUgKHN0YXJ0dXApXG4gICAgLy8gb3IgaWYgaXQgaXMgYSBwb3J0YWwgKG1vZGFsLCBhY3Rpb25zaGVldCwgZXRjLilcbiAgICBjb25zdCBvcHRzID0gdGkub3B0cztcbiAgICBjb25zdCBwcm9ncmVzc0NhbGxiYWNrID0gb3B0cy5wcm9ncmVzc0FuaW1hdGlvbiA/IGFuaSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEJlY2F1c2UgdGhpcyBwcm9ncmVzcyBjYWxsYmFjayBpcyBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgZ2VzdHVyZSB0byBzdGFydCBhbmQgZW5kIGJlZm9yZVxuICAgICAgICogdGhlIGFuaW1hdGlvbiBpcyBldmVyIHNldC4gSW4gdGhhdCBzY2VuYXJpbywgd2Ugc2hvdWxkXG4gICAgICAgKiBpbW1lZGlhdGVseSBjYWxsIHByb2dyZXNzRW5kIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gcHJvbWlzZVxuICAgICAgICogcmVzb2x2ZXMgYW5kIHRoZSBnZXN0dXJlIGRvZXMgbm90IGdldCBsb2NrZWQgdXAuXG4gICAgICAgKi9cbiAgICAgIGlmIChhbmkgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGFuaS5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGF5aW5nIGFuaW1hdGlvbiB0byBiZWdpbm5pbmdcbiAgICAgICAgICogd2l0aCBhIGR1cmF0aW9uIG9mIDAgcHJldmVudHNcbiAgICAgICAgICogYW55IGZsaWNrZXJpbmcgd2hlbiB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAqIGlzIGxhdGVyIGNsZWFuZWQgdXAuXG4gICAgICAgICAqL1xuICAgICAgICBhbmkucHJvZ3Jlc3NFbmQoMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNiQW5pID0gYW5pO1xuICAgICAgfVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IGVudGVyaW5nVmlldy5lbGVtZW50O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW9wdGlvbmFsLWNoYWluXG4gICAgY29uc3QgbGVhdmluZ0VsID0gbGVhdmluZ1ZpZXcgJiYgbGVhdmluZ1ZpZXcuZWxlbWVudDtcbiAgICBjb25zdCBhbmltYXRpb25PcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgIG1vZGUsXG4gICAgICBzaG93R29CYWNrOiB0aGlzLmNhbkdvQmFja1N5bmMoZW50ZXJpbmdWaWV3KSxcbiAgICAgIGJhc2VFbDogdGhpcy5lbCxcbiAgICAgIHByb2dyZXNzQ2FsbGJhY2ssXG4gICAgICBhbmltYXRlZDogdGhpcy5hbmltYXRlZCAmJiBjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKSxcbiAgICAgIGVudGVyaW5nRWwsXG4gICAgICBsZWF2aW5nRWxcbiAgICB9LCBvcHRzKSwge1xuICAgICAgYW5pbWF0aW9uQnVpbGRlcjogb3B0cy5hbmltYXRpb25CdWlsZGVyIHx8IHRoaXMuYW5pbWF0aW9uIHx8IGNvbmZpZy5nZXQoJ25hdkFuaW1hdGlvbicpXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgaGFzQ29tcGxldGVkXG4gICAgfSA9IGF3YWl0IHRyYW5zaXRpb24oYW5pbWF0aW9uT3B0cyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbkZpbmlzaChoYXNDb21wbGV0ZWQsIGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIG9wdHMpO1xuICB9XG4gIHRyYW5zaXRpb25GaW5pc2goaGFzQ29tcGxldGVkLCBlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCBvcHRzKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZSwgdGhlIGxlYXZpbmdWaWV3IHdpbGwgc3RpbGwgYmUgdGhlIGFjdGl2ZVxuICAgICAqIHZpZXcgb24gdGhlIHN0YWNrLiBPdGhlcndpc2UgdW5tb3VudCBhbGwgdGhlIHZpZXdzIGFmdGVyIHRoZSBlbnRlcmluZ1ZpZXcuXG4gICAgICovXG4gICAgY29uc3QgYWN0aXZlVmlldyA9IGhhc0NvbXBsZXRlZCA/IGVudGVyaW5nVmlldyA6IGxlYXZpbmdWaWV3O1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICB0aGlzLnVubW91bnRJbmFjdGl2ZVZpZXdzKGFjdGl2ZVZpZXcpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaGFzQ29tcGxldGVkLFxuICAgICAgcmVxdWlyZXNUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgZW50ZXJpbmdWaWV3LFxuICAgICAgbGVhdmluZ1ZpZXcsXG4gICAgICBkaXJlY3Rpb246IG9wdHMuZGlyZWN0aW9uXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0cyBhIHZpZXcgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogV2hlbiB0aGUgdmlldyBhbHJlYWR5IGlzIGluIHRoZSBzdGFjayBpdCB3aWxsIGJlIG1vdmVkIHRvIHRoZSBuZXcgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB2aWV3IFRoZSB2aWV3IHRvIGluc2VydC5cbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB3aGVyZSB0byBpbnNlcnQgdGhlIHZpZXcuXG4gICAqL1xuICBpbnNlcnRWaWV3QXQodmlldywgaW5kZXgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgaWYgKGV4aXN0aW5nSW5kZXggPiAtMSkge1xuICAgICAgYXNzZXJ0KHZpZXcubmF2ID09PSB0aGlzLCAndmlldyBpcyBub3QgcGFydCBvZiB0aGUgbmF2Jyk7XG4gICAgICAvLyBUaGUgdmlldyBhbHJlYWR5IGluIHRoZSBzdGFjaywgcmVtb3ZlcyBpdC5cbiAgICAgIHZpZXdzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcbiAgICAgIC8vIGFuZCBhZGQgaXQgYmFjayBhdCB0aGUgcmVxdWVzdGVkIGluZGV4LlxuICAgICAgdmlld3Muc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0KCF2aWV3Lm5hdiwgJ25hdiBpcyB1c2VkJyk7XG4gICAgICAvLyB0aGlzIGlzIGEgbmV3IHZpZXcgdG8gYWRkIHRvIHRoZSBzdGFja1xuICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgZW50ZXJpbmcgdmlld1xuICAgICAgdmlldy5uYXYgPSB0aGlzO1xuICAgICAgdmlld3Muc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2aWV3IGZyb20gdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gdmlldyBUaGUgdmlldyB0byByZW1vdmUuXG4gICAqL1xuICByZW1vdmVWaWV3KHZpZXcpIHtcbiAgICBhc3NlcnQodmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9BVFRBQ0hFRCB8fCB2aWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX0RFU1RST1lFRCwgJ3ZpZXcgc3RhdGUgc2hvdWxkIGJlIGxvYWRlZCBvciBkZXN0cm95ZWQnKTtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgY29uc3QgaW5kZXggPSB2aWV3cy5pbmRleE9mKHZpZXcpO1xuICAgIGFzc2VydChpbmRleCA+IC0xLCAndmlldyBtdXN0IGJlIHBhcnQgb2YgdGhlIHN0YWNrJyk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZpZXdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIGRlc3Ryb3lWaWV3KHZpZXcpIHtcbiAgICB2aWV3Ll9kZXN0cm95KCk7XG4gICAgdGhpcy5yZW1vdmVWaWV3KHZpZXcpO1xuICB9XG4gIC8qKlxuICAgKiBVbm1vdW50cyBhbGwgaW5hY3RpdmUgdmlld3MgYWZ0ZXIgdGhlIHNwZWNpZmllZCBhY3RpdmUgdmlldy5cbiAgICpcbiAgICogRE9NIFdSSVRFXG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmVWaWV3IFRoZSB2aWV3IHRoYXQgaXMgYWN0aXZlbHkgdmlzaWJsZSBpbiB0aGUgc3RhY2suIFVzZWQgdG8gY2FsY3VsYXRlIHdoaWNoIHZpZXdzIHRvIHVubW91bnQuXG4gICAqL1xuICB1bm1vdW50SW5hY3RpdmVWaWV3cyhhY3RpdmVWaWV3KSB7XG4gICAgLy8gb2ssIGNsZWFudXAgdGltZSEhIERlc3Ryb3kgYWxsIG9mIHRoZSB2aWV3cyB0aGF0IGFyZVxuICAgIC8vIElOQUNUSVZFIGFuZCBjb21lIGFmdGVyIHRoZSBhY3RpdmUgdmlld1xuICAgIC8vIG9ubHkgZG8gdGhpcyBpZiB0aGUgdmlld3MgZXhpc3QsIHRob3VnaFxuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgY29uc3QgYWN0aXZlVmlld0luZGV4ID0gdmlld3MuaW5kZXhPZihhY3RpdmVWaWV3KTtcbiAgICBmb3IgKGxldCBpID0gdmlld3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB2aWV3c1tpXTtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBpbnNlcnRpbmcgbXVsdGlwbGUgdmlld3MgdmlhIGluc2VydFBhZ2VzXG4gICAgICAgKiB0aGUgbGFzdCBwYWdlIHdpbGwgYmUgdHJhbnNpdGlvbmVkIHRvLCBidXQgdGhlXG4gICAgICAgKiBvdGhlcnMgd2lsbCBub3QgYmUuIEFzIGEgcmVzdWx0LCBhIERPTSBlbGVtZW50XG4gICAgICAgKiB3aWxsIG9ubHkgYmUgY3JlYXRlZCBmb3IgdGhlIGxhc3QgcGFnZSBpbnNlcnRlZC5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCBpdCBpcyBwb3NzaWJsZSB0byBoYXZlIHZpZXdzIGluIHRoZVxuICAgICAgICogc3RhY2sgdGhhdCBkbyBub3QgaGF2ZSBgdmlldy5lbGVtZW50YCB5ZXQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB2aWV3LmVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoaSA+IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBhZnRlciB0aGUgYWN0aXZlIHZpZXdcbiAgICAgICAgICAvLyBsZXQncyB1bmxvYWQgaXRcbiAgICAgICAgICBsaWZlY3ljbGUoZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCBhY3RpdmVWaWV3SW5kZXgpIHtcbiAgICAgICAgICAvLyB0aGlzIHZpZXcgY29tZXMgYmVmb3JlIHRoZSBhY3RpdmUgdmlld1xuICAgICAgICAgIC8vIGFuZCBpdCBpcyBub3QgYSBwb3J0YWwgdGhlbiBlbnN1cmUgaXQgaXMgaGlkZGVuXG4gICAgICAgICAgc2V0UGFnZUhpZGRlbihlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYW5TdGFydCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyAmJiAhIXRoaXMuc3dpcGVHZXN0dXJlICYmICF0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiB0aGlzLnRyYW5zSW5zdHIubGVuZ3RoID09PSAwICYmIHRoaXMuY2FuR29CYWNrU3luYygpO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcbiAgICB0aGlzLnBvcCh7XG4gICAgICBkaXJlY3Rpb246ICdiYWNrJyxcbiAgICAgIHByb2dyZXNzQW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25Nb3ZlKHN0ZXBWYWx1ZSkge1xuICAgIGlmICh0aGlzLnNiQW5pKSB7XG4gICAgICB0aGlzLnNiQW5pLnByb2dyZXNzU3RlcChzdGVwVmFsdWUpO1xuICAgIH1cbiAgfVxuICBvbkVuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIpIHtcbiAgICBpZiAodGhpcy5zYkFuaSkge1xuICAgICAgdGhpcy5zYkFuaS5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgfSwge1xuICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgIH0pO1xuICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICBsZXQgbmV3U3RlcFZhbHVlID0gc2hvdWxkQ29tcGxldGUgPyAtMC4wMDEgOiAwLjAwMTtcbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAqXG4gICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICogaW4gdGVybXMgb2YgYSBsaW5lYXIgY3VydmUuXG4gICAgICAgKi9cbiAgICAgIGlmICghc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5zYkFuaS5lYXNpbmcoJ2N1YmljLWJlemllcigxLCAwLCAwLjY4LCAwLjI4KScpO1xuICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMSwgMF0sIFswLjY4LCAwLjI4XSwgWzEsIDFdLCBzdGVwVmFsdWUpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKFswLCAwXSwgWzAuMzIsIDAuNzJdLCBbMCwgMV0sIFsxLCAxXSwgc3RlcFZhbHVlKVswXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2JBbmkucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCBkdXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc3MWU5YjVkMDdmYzkwY2E1NTM0MTk3YTYzYTAwM2E0MTU0YWFiZDU5J1xuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInN3aXBlR2VzdHVyZVwiOiBbXCJzd2lwZUdlc3R1cmVDaGFuZ2VkXCJdLFxuICAgICAgXCJyb290XCI6IFtcInJvb3RDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbk5hdi5zdHlsZSA9IElvbk5hdlN0eWxlMDtcbmNvbnN0IG5hdkxpbmsgPSAoZWwsIHJvdXRlckRpcmVjdGlvbiwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgcm91dGVyQW5pbWF0aW9uKSA9PiB7XG4gIGNvbnN0IG5hdiA9IGVsLmNsb3Nlc3QoJ2lvbi1uYXYnKTtcbiAgaWYgKG5hdikge1xuICAgIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgaWYgKGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXYucHVzaChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCB7XG4gICAgICAgICAgc2tpcElmQnVzeTogdHJ1ZSxcbiAgICAgICAgICBhbmltYXRpb25CdWlsZGVyOiByb3V0ZXJBbmltYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdyb290Jykge1xuICAgICAgaWYgKGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXYuc2V0Um9vdChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCB7XG4gICAgICAgICAgc2tpcElmQnVzeTogdHJ1ZSxcbiAgICAgICAgICBhbmltYXRpb25CdWlsZGVyOiByb3V0ZXJBbmltYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdiYWNrJykge1xuICAgICAgcmV0dXJuIG5hdi5wb3Aoe1xuICAgICAgICBza2lwSWZCdXN5OiB0cnVlLFxuICAgICAgICBhbmltYXRpb25CdWlsZGVyOiByb3V0ZXJBbmltYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbn07XG5jb25zdCBOYXZMaW5rID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gbmF2TGluayh0aGlzLmVsLCB0aGlzLnJvdXRlckRpcmVjdGlvbiwgdGhpcy5jb21wb25lbnQsIHRoaXMuY29tcG9uZW50UHJvcHMsIHRoaXMucm91dGVyQW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29tcG9uZW50UHJvcHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgdGhpcy5yb3V0ZXJBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzliYTE3MGQxYjEwZTA4ZThhNmI1ZTZhMzBkMzYzODcxZDQ1NWEwYTknLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuZXhwb3J0IHsgTmF2IGFzIGlvbl9uYXYsIE5hdkxpbmsgYXMgaW9uX25hdl9saW5rIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sdUJBQXVCO0FBRTdCLElBQU0saUJBQU4sTUFBcUI7QUFBQSxFQUNuQixZQUFZLFdBQVcsUUFBUTtBQUM3QixTQUFLLFlBQVk7QUFDakIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxRQUFRO0FBQUEsRUFDZjtBQUFBLEVBQ00sS0FBSyxXQUFXO0FBQUE7QUFDcEIsV0FBSyxRQUFRO0FBQ2IsVUFBSSxDQUFDLEtBQUssU0FBUztBQUNqQixjQUFNLFlBQVksS0FBSztBQUN2QixhQUFLLFVBQVUsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLFdBQVcsV0FBVyxDQUFDLFlBQVksb0JBQW9CLEdBQUcsS0FBSyxNQUFNO0FBQUEsTUFDM0g7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFdBQVc7QUFDVCxXQUFPLEtBQUssVUFBVSxzQkFBc0IsNkJBQTZCO0FBQ3pFLFVBQU0sVUFBVSxLQUFLO0FBQ3JCLFFBQUksU0FBUztBQUNYLFVBQUksS0FBSyxVQUFVO0FBQ2pCLGFBQUssU0FBUyxrQkFBa0IsUUFBUSxlQUFlLE9BQU87QUFBQSxNQUNoRSxPQUFPO0FBQ0ws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LEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxXQUFXLFdBQVc7QUFDcEIsV0FBTztBQUFBLE1BQ0wsZ0JBQWdCLENBQUMscUJBQXFCO0FBQUEsTUFDdEMsUUFBUSxDQUFDLGFBQWE7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksUUFBUTtBQUNaLElBQU0sVUFBVSxDQUFDLElBQUksaUJBQWlCLFdBQVcsZ0JBQWdCLG9CQUFvQjtBQUNuRixRQUFNLE1BQU0sR0FBRyxRQUFRLFNBQVM7QUFDaEMsTUFBSSxLQUFLO0FBQ1AsUUFBSSxvQkFBb0IsV0FBVztBQUNqQyxVQUFJLGNBQWMsUUFBVztBQUMzQixlQUFPLElBQUksS0FBSyxXQUFXLGdCQUFnQjtBQUFBLFVBQ3pDLFlBQVk7QUFBQSxVQUNaLGtCQUFrQjtBQUFBLFFBQ3BCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixXQUFXLG9CQUFvQixRQUFRO0FBQ3JDLFVBQUksY0FBYyxRQUFXO0FBQzNCLGVBQU8sSUFBSSxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsVUFDNUMsWUFBWTtBQUFBLFVBQ1osa0JBQWtCO0FBQUEsUUFDcEIsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLFdBQVcsb0JBQW9CLFFBQVE7QUFDckMsYUFBTyxJQUFJLElBQUk7QUFBQSxRQUNiLFlBQVk7QUFBQSxRQUNaLGtCQUFrQjtBQUFBLE1BQ3BCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNBLFNBQU8sUUFBUSxRQUFRLEtBQUs7QUFDOUI7QUFDQSxJQUFNLFVBQVUsTUFBTTtBQUFBLEVBQ3BCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssVUFBVSxNQUFNO0FBQ25CLGFBQU8sUUFBUSxLQUFLLElBQUksS0FBSyxpQkFBaUIsS0FBSyxXQUFXLEtBQUssZ0JBQWdCLEtBQUssZUFBZTtBQUFBLElBQ3pHO0FBQ0EsU0FBSyxZQUFZO0FBQ2pCLFNBQUssaUJBQWlCO0FBQ3RCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssa0JBQWtCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFNBQVM7QUFDUCxXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsU0FBUyxLQUFLO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
