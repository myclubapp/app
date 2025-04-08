import {
  createKeyboardController
} from "./chunk-FVVVVDYK.js";
import {
  findIonContent,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-7QVPRCLC.js";
import "./chunk-XCF7ZGBQ.js";
import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  transition
} from "./chunk-P46UNXAG.js";
import {
  getTimeGivenProgression
} from "./chunk-6NM256MY.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import "./chunk-UPH3BB7G.js";
import {
  attachComponent,
  detachComponent
} from "./chunk-U6MFTC2E.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  clamp,
  componentOnReady,
  hasLazyBuild,
  inheritAriaAttributes,
  shallowEqualStringMap
} from "./chunk-RRWPYKYY.js";
import {
  shouldUseCloseWatcher
} from "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
  config,
  getIonMode,
  isPlatform
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-app_8.entry.js
var appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
var IonAppStyle0 = appCss;
var App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(() => __async(this, null, function* () {
        const isHybrid = isPlatform(window, "hybrid");
        if (!config.getBoolean("_testing")) {
          import("./index-40894f4b-57JFFX3H.js").then((module) => module.startTapClick(config));
        }
        if (config.getBoolean("statusTap", isHybrid)) {
          import("./status-tap-f6d08e9e-GNBECCSG.js").then((module) => module.startStatusTap());
        }
        if (config.getBoolean("inputShims", needInputShims())) {
          const platform = isPlatform(window, "ios") ? "ios" : "android";
          import("./input-shims-7dc1f6dc-2CELSON4.js").then((module) => module.startInputShims(config, platform));
        }
        const hardwareBackButtonModule = yield import("./hardware-back-button-864101a3-JJAXKNX7.js");
        const supportsHardwareBackButtonEvents = isHybrid || shouldUseCloseWatcher();
        if (config.getBoolean("hardwareBackButton", supportsHardwareBackButtonEvents)) {
          hardwareBackButtonModule.startHardwareBackButton();
        } else {
          if (shouldUseCloseWatcher()) {
            printIonWarning("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used.");
          }
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        if (typeof window !== "undefined") {
          import("./keyboard-52278bd7-AO63BOO7.js").then((module) => module.startKeyboardAssist(window));
        }
        import("./focus-visible-dd40d69f-XJBI2RII.js").then((module) => this.focusVisible = module.startFocusVisible());
      }));
    }
  }
  /**
   * Used to set focus on an element that uses `ion-focusable`.
   * Do not use this if focusing the element as a result of a keyboard
   * event as the focus utility should handle this for us. This method
   * should be used when we want to programmatically focus an element as
   * a result of another user action. (Ex: We focus the first element
   * inside of a popover when the user presents it, but the popover is not always
   * presented as a result of keyboard action.)
   */
  setFocus(elements) {
    return __async(this, null, function* () {
      if (this.focusVisible) {
        this.focusVisible.setFocus(elements);
      }
    });
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "96715520fd05d6f0e6fa26a8ba78792cfccd4c0a",
      class: {
        [mode]: true,
        "ion-page": true,
        "force-statusbar-padding": config.getBoolean("_forceStatusbarPadding")
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
var needInputShims = () => {
  const needsShimsIOS = isPlatform(window, "ios") && isPlatform(window, "mobile");
  if (needsShimsIOS) {
    return true;
  }
  const isAndroidMobileWeb = isPlatform(window, "android") && isPlatform(window, "mobileweb");
  if (isAndroidMobileWeb) {
    return true;
  }
  return false;
};
var rIC = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 32);
  }
};
App.style = IonAppStyle0;
var buttonsIosCss = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}";
var IonButtonsIosStyle0 = buttonsIosCss;
var buttonsMdCss = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
var IonButtonsMdStyle0 = buttonsMdCss;
var Buttons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapse = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "58c1fc5eb867d0731c63549b1ccb3ec3bbbe6e1b",
      class: {
        [mode]: true,
        ["buttons-collapse"]: this.collapse
      }
    }, h("slot", {
      key: "0c8f95b9840c8fa0c4e50be84c5159620a3eb5c8"
    }));
  }
};
Buttons.style = {
  ios: IonButtonsIosStyle0,
  md: IonButtonsMdStyle0
};
var contentCss = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
var IonContentStyle0 = contentCss;
var Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionScrollStart = createEvent(this, "ionScrollStart", 7);
    this.ionScroll = createEvent(this, "ionScroll", 7);
    this.ionScrollEnd = createEvent(this, "ionScrollEnd", 7);
    this.watchDog = null;
    this.isScrolling = false;
    this.lastScroll = 0;
    this.queued = false;
    this.cTop = -1;
    this.cBottom = -1;
    this.isMainContent = true;
    this.resizeTimeout = null;
    this.inheritedAttributes = {};
    this.tabsElement = null;
    this.detail = {
      scrollTop: 0,
      scrollLeft: 0,
      type: "scroll",
      event: void 0,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      deltaX: 0,
      deltaY: 0,
      currentTime: 0,
      data: void 0,
      isScrolling: true
    };
    this.color = void 0;
    this.fullscreen = false;
    this.fixedSlotPlacement = "after";
    this.forceOverscroll = void 0;
    this.scrollX = false;
    this.scrollY = true;
    this.scrollEvents = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  connectedCallback() {
    this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null;
    if (hasLazyBuild(this.el)) {
      const closestTabs = this.tabsElement = this.el.closest("ion-tabs");
      if (closestTabs !== null) {
        this.tabsLoadCallback = () => this.resize();
        closestTabs.addEventListener("ionTabBarLoaded", this.tabsLoadCallback);
      }
    }
  }
  disconnectedCallback() {
    this.onScrollEnd();
    if (hasLazyBuild(this.el)) {
      const {
        tabsElement,
        tabsLoadCallback
      } = this;
      if (tabsElement !== null && tabsLoadCallback !== void 0) {
        tabsElement.removeEventListener("ionTabBarLoaded", tabsLoadCallback);
      }
      this.tabsElement = null;
      this.tabsLoadCallback = void 0;
    }
  }
  /**
   * Rotating certain devices can update
   * the safe area insets. As a result,
   * the fullscreen feature on ion-content
   * needs to be recalculated.
   *
   * We listen for "resize" because we
   * do not care what the orientation of
   * the device is. Other APIs
   * such as ScreenOrientation or
   * the deviceorientation event must have
   * permission from the user first whereas
   * the "resize" event does not.
   *
   * We also throttle the callback to minimize
   * thrashing when quickly resizing a window.
   */
  onResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      if (this.el.offsetParent === null) {
        return;
      }
      this.resize();
    }, 100);
  }
  shouldForceOverscroll() {
    const {
      forceOverscroll
    } = this;
    const mode = getIonMode(this);
    return forceOverscroll === void 0 ? mode === "ios" && isPlatform("ios") : forceOverscroll;
  }
  resize() {
    {
      if (this.fullscreen) {
        readTask(() => this.readDimensions());
      } else if (this.cTop !== 0 || this.cBottom !== 0) {
        this.cTop = this.cBottom = 0;
        forceUpdate(this);
      }
    }
  }
  readDimensions() {
    const page = getPageElement(this.el);
    const top = Math.max(this.el.offsetTop, 0);
    const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
    const dirty = top !== this.cTop || bottom !== this.cBottom;
    if (dirty) {
      this.cTop = top;
      this.cBottom = bottom;
      forceUpdate(this);
    }
  }
  onScroll(ev) {
    const timeStamp = Date.now();
    const shouldStart = !this.isScrolling;
    this.lastScroll = timeStamp;
    if (shouldStart) {
      this.onScrollStart();
    }
    if (!this.queued && this.scrollEvents) {
      this.queued = true;
      readTask((ts) => {
        this.queued = false;
        this.detail.event = ev;
        updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
        this.ionScroll.emit(this.detail);
      });
    }
  }
  /**
   * Get the element where the actual scrolling takes place.
   * This element can be used to subscribe to `scroll` events or manually modify
   * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
   *
   * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
   * and `scrollToPoint()` to scroll the content into a certain point.
   */
  getScrollElement() {
    return __async(this, null, function* () {
      if (!this.scrollEl) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.scrollEl);
    });
  }
  /**
   * Returns the background content element.
   * @internal
   */
  getBackgroundElement() {
    return __async(this, null, function* () {
      if (!this.backgroundContentEl) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.backgroundContentEl);
    });
  }
  /**
   * Scroll to the top of the component.
   *
   * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
   */
  scrollToTop(duration = 0) {
    return this.scrollToPoint(void 0, 0, duration);
  }
  /**
   * Scroll to the bottom of the component.
   *
   * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
   */
  scrollToBottom(duration = 0) {
    return __async(this, null, function* () {
      const scrollEl = yield this.getScrollElement();
      const y = scrollEl.scrollHeight - scrollEl.clientHeight;
      return this.scrollToPoint(void 0, y, duration);
    });
  }
  /**
   * Scroll by a specified X/Y distance in the component.
   *
   * @param x The amount to scroll by on the horizontal axis.
   * @param y The amount to scroll by on the vertical axis.
   * @param duration The amount of time to take scrolling by that amount.
   */
  scrollByPoint(x, y, duration) {
    return __async(this, null, function* () {
      const scrollEl = yield this.getScrollElement();
      return this.scrollToPoint(x + scrollEl.scrollLeft, y + scrollEl.scrollTop, duration);
    });
  }
  /**
   * Scroll to a specified X/Y location in the component.
   *
   * @param x The point to scroll to on the horizontal axis.
   * @param y The point to scroll to on the vertical axis.
   * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
   */
  scrollToPoint(x, y, duration = 0) {
    return __async(this, null, function* () {
      const el = yield this.getScrollElement();
      if (duration < 32) {
        if (y != null) {
          el.scrollTop = y;
        }
        if (x != null) {
          el.scrollLeft = x;
        }
        return;
      }
      let resolve;
      let startTime = 0;
      const promise = new Promise((r) => resolve = r);
      const fromY = el.scrollTop;
      const fromX = el.scrollLeft;
      const deltaY = y != null ? y - fromY : 0;
      const deltaX = x != null ? x - fromX : 0;
      const step = (timeStamp) => {
        const linearTime = Math.min(1, (timeStamp - startTime) / duration) - 1;
        const easedT = Math.pow(linearTime, 3) + 1;
        if (deltaY !== 0) {
          el.scrollTop = Math.floor(easedT * deltaY + fromY);
        }
        if (deltaX !== 0) {
          el.scrollLeft = Math.floor(easedT * deltaX + fromX);
        }
        if (easedT < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame((ts) => {
        startTime = ts;
        step(ts);
      });
      return promise;
    });
  }
  onScrollStart() {
    this.isScrolling = true;
    this.ionScrollStart.emit({
      isScrolling: true
    });
    if (this.watchDog) {
      clearInterval(this.watchDog);
    }
    this.watchDog = setInterval(() => {
      if (this.lastScroll < Date.now() - 120) {
        this.onScrollEnd();
      }
    }, 100);
  }
  onScrollEnd() {
    if (this.watchDog) clearInterval(this.watchDog);
    this.watchDog = null;
    if (this.isScrolling) {
      this.isScrolling = false;
      this.ionScrollEnd.emit({
        isScrolling: false
      });
    }
  }
  render() {
    const {
      fixedSlotPlacement,
      inheritedAttributes,
      isMainContent,
      scrollX,
      scrollY,
      el
    } = this;
    const rtl = isRTL(el) ? "rtl" : "ltr";
    const mode = getIonMode(this);
    const forceOverscroll = this.shouldForceOverscroll();
    const transitionShadow = mode === "ios";
    this.resize();
    return h(Host, Object.assign({
      key: "f2a24aa66dbf5c76f9d4b06f708eb73cadc239df",
      role: isMainContent ? "main" : void 0,
      class: createColorClasses(this.color, {
        [mode]: true,
        "content-sizing": hostContext("ion-popover", this.el),
        overscroll: forceOverscroll,
        [`content-${rtl}`]: true
      }),
      style: {
        "--offset-top": `${this.cTop}px`,
        "--offset-bottom": `${this.cBottom}px`
      }
    }, inheritedAttributes), h("div", {
      key: "6480ca7648b278abb36477b3838bccbcd4995e2a",
      ref: (el2) => this.backgroundContentEl = el2,
      id: "background-content",
      part: "background"
    }), fixedSlotPlacement === "before" ? h("slot", {
      name: "fixed"
    }) : null, h("div", {
      key: "29a23b663f5f0215bb000820c01e1814c0d55985",
      class: {
        "inner-scroll": true,
        "scroll-x": scrollX,
        "scroll-y": scrollY,
        overscroll: (scrollX || scrollY) && forceOverscroll
      },
      ref: (scrollEl) => this.scrollEl = scrollEl,
      onScroll: this.scrollEvents ? (ev) => this.onScroll(ev) : void 0,
      part: "scroll"
    }, h("slot", {
      key: "0fe1bd05609a4b88ae2ce9addf5d5dc5dc1806f0"
    })), transitionShadow ? h("div", {
      class: "transition-effect"
    }, h("div", {
      class: "transition-cover"
    }), h("div", {
      class: "transition-shadow"
    })) : null, fixedSlotPlacement === "after" ? h("slot", {
      name: "fixed"
    }) : null);
  }
  get el() {
    return getElement(this);
  }
};
var getParentElement = (el) => {
  var _a;
  if (el.parentElement) {
    return el.parentElement;
  }
  if ((_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.host) {
    return el.parentNode.host;
  }
  return null;
};
var getPageElement = (el) => {
  const tabs = el.closest("ion-tabs");
  if (tabs) {
    return tabs;
  }
  const page = el.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
  if (page) {
    return page;
  }
  return getParentElement(el);
};
var updateScrollDetail = (detail, el, timestamp, shouldStart) => {
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  const currentX = el.scrollLeft;
  const currentY = el.scrollTop;
  const timeDelta = timestamp - prevT;
  if (shouldStart) {
    detail.startTime = timestamp;
    detail.startX = currentX;
    detail.startY = currentY;
    detail.velocityX = detail.velocityY = 0;
  }
  detail.currentTime = timestamp;
  detail.currentX = detail.scrollLeft = currentX;
  detail.currentY = detail.scrollTop = currentY;
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
};
Content.style = IonContentStyle0;
var handleFooterFade = (scrollEl, baseEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    const fadeDuration = 10;
    const fadeStart = maxScroll - fadeDuration;
    const distanceToStart = scrollTop - fadeStart;
    const scale = clamp(0, 1 - distanceToStart / fadeDuration, 1);
    writeTask(() => {
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
var footerIosCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";
var IonFooterIosStyle0 = footerIosCss;
var footerMdCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}";
var IonFooterMdStyle0 = footerMdCss;
var Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.keyboardCtrl = null;
    this.checkCollapsibleFooter = () => {
      const mode = getIonMode(this);
      if (mode !== "ios") {
        return;
      }
      const {
        collapse
      } = this;
      const hasFade = collapse === "fade";
      this.destroyCollapsibleFooter();
      if (hasFade) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        this.setupFadeFooter(contentEl);
      }
    };
    this.setupFadeFooter = (contentEl) => __async(this, null, function* () {
      const scrollEl = this.scrollEl = yield getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleFooterFade(scrollEl, this.el);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleFooterFade(scrollEl, this.el);
    });
    this.keyboardVisible = false;
    this.collapse = void 0;
    this.translucent = false;
  }
  componentDidLoad() {
    this.checkCollapsibleFooter();
  }
  componentDidUpdate() {
    this.checkCollapsibleFooter();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      this.keyboardCtrl = yield createKeyboardController((keyboardOpen, waitForResize) => __async(this, null, function* () {
        if (keyboardOpen === false && waitForResize !== void 0) {
          yield waitForResize;
        }
        this.keyboardVisible = keyboardOpen;
      }));
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  destroyCollapsibleFooter() {
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
  }
  render() {
    const {
      translucent,
      collapse
    } = this;
    const mode = getIonMode(this);
    const tabs = this.el.closest("ion-tabs");
    const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(":scope > ion-tab-bar");
    return h(Host, {
      key: "ddc228f1a1e7fa4f707dccf74db2490ca3241137",
      role: "contentinfo",
      class: {
        [mode]: true,
        // Used internally for styling
        [`footer-${mode}`]: true,
        [`footer-translucent`]: translucent,
        [`footer-translucent-${mode}`]: translucent,
        ["footer-toolbar-padding"]: !this.keyboardVisible && (!tabBar || tabBar.slot !== "bottom"),
        [`footer-collapse-${collapse}`]: collapse !== void 0
      }
    }, mode === "ios" && translucent && h("div", {
      key: "e16ed4963ff94e06de77eb8038201820af73937c",
      class: "footer-background"
    }), h("slot", {
      key: "f186934febf85d37133d9351a96c1a64b0a4b203"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Footer.style = {
  ios: IonFooterIosStyle0,
  md: IonFooterMdStyle0
};
var TRANSITION = "all 0.2s ease-in-out";
var cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add("ion-cloned-element");
  clonedEl.style.setProperty("display", "none");
  document.body.appendChild(clonedEl);
  return clonedEl;
};
var createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll("ion-toolbar");
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector("ion-title");
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector(".toolbar-background"),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector(".toolbar-title") : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll("ion-buttons"))
      };
    })
  };
};
var handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = clamp(1, 1 + -scrollTop / 500, 1.1);
    const nativeRefresher = contentEl.querySelector("ion-refresher.refresher-native");
    if (nativeRefresher === null) {
      writeTask(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
var setToolbarBackgroundOpacity = (headerEl, opacity) => {
  if (headerEl.collapse === "fade") {
    return;
  }
  if (opacity === void 0) {
    headerEl.style.removeProperty("--opacity-scale");
  } else {
    headerEl.style.setProperty("--opacity-scale", opacity.toString());
  }
};
var handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : (1 - ev[0].intersectionRatio) * 100 / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? void 0 : scale);
};
var handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  writeTask(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    } else {
      const hasValidIntersection = intersection.x === 0 && intersection.y === 0 || intersection.width !== 0 && intersection.height !== 0;
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
var setHeaderActive = (headerIndex, active = true) => {
  const headerEl = headerIndex.el;
  const toolbars = headerIndex.toolbars;
  const ionTitles = toolbars.map((toolbar) => toolbar.ionTitleEl);
  if (active) {
    headerEl.classList.remove("header-collapse-condense-inactive");
    ionTitles.forEach((ionTitle) => {
      if (ionTitle) {
        ionTitle.removeAttribute("aria-hidden");
      }
    });
  } else {
    headerEl.classList.add("header-collapse-condense-inactive");
    ionTitles.forEach((ionTitle) => {
      if (ionTitle) {
        ionTitle.setAttribute("aria-hidden", "true");
      }
    });
  }
};
var scaleLargeTitles = (toolbars = [], scale = 1, transition2 = false) => {
  toolbars.forEach((toolbar) => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== "large") {
      return;
    }
    titleDiv.style.transition = transition2 ? TRANSITION : "";
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
var handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty("--opacity-scale", "0");
      scrollEl.style.setProperty("clip-path", `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = clamp(0, distanceToStart / fadeDuration, 1);
    writeTask(() => {
      scrollEl.style.removeProperty("clip-path");
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
var headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}";
var IonHeaderIosStyle0 = headerIosCss;
var headerMdCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}";
var IonHeaderMdStyle0 = headerMdCss;
var Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.setupFadeHeader = (contentEl, condenseHeader) => __async(this, null, function* () {
      const scrollEl = this.scrollEl = yield getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    });
    this.collapse = void 0;
    this.translucent = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  checkCollapsibleHeader() {
    return __async(this, null, function* () {
      const mode = getIonMode(this);
      if (mode !== "ios") {
        return;
      }
      const {
        collapse
      } = this;
      const hasCondense = collapse === "condense";
      const hasFade = collapse === "fade";
      this.destroyCollapsibleHeader();
      if (hasCondense) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        writeTask(() => {
          const title = cloneElement("ion-title");
          title.size = "large";
          cloneElement("ion-back-button");
        });
        yield this.setupCondenseHeader(contentEl, pageEl);
      } else if (hasFade) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
        yield this.setupFadeHeader(contentEl, condenseHeader);
      }
    });
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove("header-collapse-main");
      this.collapsibleMainHeader = void 0;
    }
  }
  setupCondenseHeader(contentEl, pageEl) {
    return __async(this, null, function* () {
      if (!contentEl || !pageEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      if (typeof IntersectionObserver === "undefined") {
        return;
      }
      this.scrollEl = yield getScrollElement(contentEl);
      const headers = pageEl.querySelectorAll("ion-header");
      this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== "condense");
      if (!this.collapsibleMainHeader) {
        return;
      }
      const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
      const scrollHeaderIndex = createHeaderIndex(this.el);
      if (!mainHeaderIndex || !scrollHeaderIndex) {
        return;
      }
      setHeaderActive(mainHeaderIndex, false);
      setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
      const toolbarIntersection = (ev) => {
        handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
      };
      this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
        root: contentEl,
        threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      });
      this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
      this.contentScrollCallback = () => {
        handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
      };
      this.scrollEl.addEventListener("scroll", this.contentScrollCallback);
      writeTask(() => {
        if (this.collapsibleMainHeader !== void 0) {
          this.collapsibleMainHeader.classList.add("header-collapse-main");
        }
      });
    });
  }
  render() {
    const {
      translucent,
      inheritedAttributes
    } = this;
    const mode = getIonMode(this);
    const collapse = this.collapse || "none";
    const roleType = hostContext("ion-menu", this.el) ? "none" : "banner";
    return h(Host, Object.assign({
      key: "b6cc27f0b08afc9fcc889683525da765d80ba672",
      role: roleType,
      class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent
      }
    }, inheritedAttributes), mode === "ios" && translucent && h("div", {
      key: "395766d4dcee3398bc91960db21f922095292f14",
      class: "header-background"
    }), h("slot", {
      key: "09a67ece27b258ff1248805d43d92a49b2c6859a"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Header.style = {
  ios: IonHeaderIosStyle0,
  md: IonHeaderMdStyle0
};
var routerOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var IonRouterOutletStyle0 = routerOutletCss;
var RouterOutlet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.lockController = createLockController();
    this.gestureOrAnimationInProgress = false;
    this.mode = getIonMode(this);
    this.delegate = void 0;
    this.animated = true;
    this.animation = void 0;
    this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== void 0);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const onStart = () => {
        this.gestureOrAnimationInProgress = true;
        if (this.swipeHandler) {
          this.swipeHandler.onStart();
        }
      };
      this.gesture = (yield import("./swipe-back-07df2095-UALNL7HB.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => {
        var _a;
        return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step);
      }, (shouldComplete, step, dur) => {
        if (this.ani) {
          this.ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
            if (this.swipeHandler) {
              this.swipeHandler.onEnd(shouldComplete);
            }
          }, {
            oneTimeCallback: true
          });
          let newStepValue = shouldComplete ? -1e-3 : 1e-3;
          if (!shouldComplete) {
            this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
            newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
          } else {
            newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
          }
          this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        } else {
          this.gestureOrAnimationInProgress = false;
        }
      });
      this.swipeHandlerChanged();
    });
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /** @internal */
  commit(enteringEl, leavingEl, opts) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      let changed = false;
      try {
        changed = yield this.transition(enteringEl, leavingEl, opts);
      } catch (e) {
        console.error(e);
      }
      unlock();
      return changed;
    });
  }
  /** @internal */
  setRouteId(id, params, direction, animation) {
    return __async(this, null, function* () {
      const changed = yield this.setRoot(id, params, {
        duration: direction === "root" ? 0 : void 0,
        direction: direction === "back" ? "back" : "forward",
        animationBuilder: animation
      });
      return {
        changed,
        element: this.activeEl
      };
    });
  }
  /** @internal */
  getRouteId() {
    return __async(this, null, function* () {
      const active = this.activeEl;
      return active ? {
        id: active.tagName,
        element: active,
        params: this.activeParams
      } : void 0;
    });
  }
  setRoot(component, params, opts) {
    return __async(this, null, function* () {
      if (this.activeComponent === component && shallowEqualStringMap(params, this.activeParams)) {
        return false;
      }
      const leavingEl = this.activeEl;
      const enteringEl = yield attachComponent(this.delegate, this.el, component, ["ion-page", "ion-page-invisible"], params);
      this.activeComponent = component;
      this.activeEl = enteringEl;
      this.activeParams = params;
      yield this.commit(enteringEl, leavingEl, opts);
      yield detachComponent(this.delegate, leavingEl);
      return true;
    });
  }
  transition(_0, _1) {
    return __async(this, arguments, function* (enteringEl, leavingEl, opts = {}) {
      if (leavingEl === enteringEl) {
        return false;
      }
      this.ionNavWillChange.emit();
      const {
        el,
        mode
      } = this;
      const animated = this.animated && config.getBoolean("animated", true);
      const animationBuilder = opts.animationBuilder || this.animation || config.get("navAnimation");
      yield transition(Object.assign(Object.assign({
        mode,
        animated,
        enteringEl,
        leavingEl,
        baseEl: el,
        /**
         * We need to wait for all Stencil components
         * to be ready only when using the lazy
         * loaded bundle.
         */
        deepWait: hasLazyBuild(el),
        progressCallback: opts.progressAnimation ? (ani) => {
          if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
            this.gestureOrAnimationInProgress = true;
            ani.onFinish(() => {
              this.gestureOrAnimationInProgress = false;
              if (this.swipeHandler) {
                this.swipeHandler.onEnd(false);
              }
            }, {
              oneTimeCallback: true
            });
            ani.progressEnd(0, 0, 0);
          } else {
            this.ani = ani;
          }
        } : void 0
      }, opts), {
        animationBuilder
      }));
      this.ionNavDidChange.emit();
      return true;
    });
  }
  render() {
    return h("slot", {
      key: "8d0c163c5f63158e16ef2db7cc3c756cf597461d"
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeHandler": ["swipeHandlerChanged"]
    };
  }
};
RouterOutlet.style = IonRouterOutletStyle0;
var titleIosCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host{inset-inline-start:0}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}";
var IonTitleIosStyle0 = titleIosCss;
var titleMdCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}";
var IonTitleMdStyle0 = titleMdCss;
var ToolbarTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.color = void 0;
    this.size = void 0;
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true
    });
  }
  getSize() {
    return this.size !== void 0 ? this.size : "default";
  }
  render() {
    const mode = getIonMode(this);
    const size = this.getSize();
    return h(Host, {
      key: "3f7b19c99961dbb86c0a925218332528b22e6880",
      class: createColorClasses(this.color, {
        [mode]: true,
        [`title-${size}`]: true,
        "title-rtl": document.dir === "rtl"
      })
    }, h("div", {
      key: "12054fbdd60e40a15875e442c20143766fc34fc3",
      class: "toolbar-title"
    }, h("slot", {
      key: "9f14fb14a67d4bd1e4536a4d64a637fbe5a151c7"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "size": ["sizeChanged"]
    };
  }
};
ToolbarTitle.style = {
  ios: IonTitleIosStyle0,
  md: IonTitleMdStyle0
};
var toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
var IonToolbarIosStyle0 = toolbarIosCss;
var toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, #c1c4cd))));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
var IonToolbarMdStyle0 = toolbarMdCss;
var Toolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.childrenStyles = /* @__PURE__ */ new Map();
    this.color = void 0;
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll("ion-buttons"));
    const firstButtons = buttons.find((button) => {
      return button.slot === "start";
    });
    if (firstButtons) {
      firstButtons.classList.add("buttons-first-slot");
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find((button) => button.slot === "end") || buttonsReversed.find((button) => button.slot === "primary") || buttonsReversed.find((button) => button.slot === "secondary");
    if (lastButtons) {
      lastButtons.classList.add("buttons-last-slot");
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }
  render() {
    const mode = getIonMode(this);
    const childStyles = {};
    this.childrenStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    return h(Host, {
      key: "402afe7ce0c97883cedd0e48a5a0492a9bfe76ae",
      class: Object.assign(Object.assign({}, childStyles), createColorClasses(this.color, {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el)
      }))
    }, h("div", {
      key: "2465a6dc8d507ec650538378d1be2abd399c58ad",
      class: "toolbar-background",
      part: "background"
    }), h("div", {
      key: "6075096afd12303b961e4fe9ad345ef2887573af",
      class: "toolbar-container",
      part: "container"
    }, h("slot", {
      key: "8b7eec1148cfeb339d87cdf9273f2104703e7601",
      name: "start"
    }), h("slot", {
      key: "b102d3926cade24faf78b7af78ad5e192c4c0308",
      name: "secondary"
    }), h("div", {
      key: "c6ab2e978328324c6f9e7892024cbcd8b8987067",
      class: "toolbar-content",
      part: "content"
    }, h("slot", {
      key: "86f8952c4355a9df5b4bbb95e9d0cafefd272d5b"
    })), h("slot", {
      key: "501e43431da6b9dd35b47b79222f948d445f7a78",
      name: "primary"
    }), h("slot", {
      key: "84bf1a15a5e52e8e94df9f479c4ce18004f5ab57",
      name: "end"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Toolbar.style = {
  ios: IonToolbarIosStyle0,
  md: IonToolbarMdStyle0
};
export {
  App as ion_app,
  Buttons as ion_buttons,
  Content as ion_content,
  Footer as ion_footer,
  Header as ion_header,
  RouterOutlet as ion_router_outlet,
  ToolbarTitle as ion_title,
  Toolbar as ion_toolbar
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-app_8.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYXBwXzguZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgcmVhZFRhc2ssIGkgYXMgZm9yY2VVcGRhdGUsIHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBzaG91bGRVc2VDbG9zZVdhdGNoZXIgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCB7IHAgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUsIGMgYXMgY29uZmlnLCBhIGFzIGlzUGxhdGZvcm0gfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgeyBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcywgayBhcyBoYXNMYXp5QnVpbGQsIGMgYXMgY29tcG9uZW50T25SZWFkeSwgaiBhcyBjbGFtcCwgcyBhcyBzaGFsbG93RXF1YWxTdHJpbmdNYXAgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLWJhYmVhYmViLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBhIGFzIGZpbmRJb25Db250ZW50LCBwIGFzIHByaW50SW9uQ29udGVudEVycm9yTXNnLCBnIGFzIGdldFNjcm9sbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWU5MTllMzUzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9rZXlib2FyZC1jb250cm9sbGVyLWVjNWMyYmZhLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gfSBmcm9tICcuL2N1YmljLWJlemllci1mZTIwODNkYy5qcyc7XG5pbXBvcnQgeyBhIGFzIGF0dGFjaENvbXBvbmVudCwgZCBhcyBkZXRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS0yZWVhMTc2My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxvY2tDb250cm9sbGVyIH0gZnJvbSAnLi9sb2NrLWNvbnRyb2xsZXItMzE2OTI4YmUuanMnO1xuaW1wb3J0IHsgdCBhcyB0cmFuc2l0aW9uIH0gZnJvbSAnLi9pbmRleC1lY2I1NWI4ZC5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0ICcuL2tleWJvYXJkLTczMTc1ZTI0LmpzJztcbmltcG9ydCAnLi9jYXBhY2l0b3ItNTkzOTVjYmQuanMnO1xuY29uc3QgYXBwQ3NzID0gXCJodG1sLnBsdC1tb2JpbGUgaW9uLWFwcHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9aHRtbC5wbHQtbW9iaWxlIGlvbi1hcHAgW2NvbnRlbnRlZGl0YWJsZV17LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0Oy1tb3otdXNlci1zZWxlY3Q6dGV4dDstbXMtdXNlci1zZWxlY3Q6dGV4dDt1c2VyLXNlbGVjdDp0ZXh0fWlvbi1hcHAuZm9yY2Utc3RhdHVzYmFyLXBhZGRpbmd7LS1pb24tc2FmZS1hcmVhLXRvcDoyMHB4fVwiO1xuY29uc3QgSW9uQXBwU3R5bGUwID0gYXBwQ3NzO1xuY29uc3QgQXBwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHtcbiAgICAgIHJJQyhhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSHlicmlkID0gaXNQbGF0Zm9ybSh3aW5kb3csICdoeWJyaWQnKTtcbiAgICAgICAgaWYgKCFjb25maWcuZ2V0Qm9vbGVhbignX3Rlc3RpbmcnKSkge1xuICAgICAgICAgIGltcG9ydCgnLi9pbmRleC00MDg5NGY0Yi5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydFRhcENsaWNrKGNvbmZpZykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignc3RhdHVzVGFwJywgaXNIeWJyaWQpKSB7XG4gICAgICAgICAgaW1wb3J0KCcuL3N0YXR1cy10YXAtZjZkMDhlOWUuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRTdGF0dXNUYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdpbnB1dFNoaW1zJywgbmVlZElucHV0U2hpbXMoKSkpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBuZWVkSW5wdXRTaGltcygpIGVuc3VyZXMgdGhhdCBvbmx5IGlPUyBhbmQgQW5kcm9pZFxuICAgICAgICAgICAqIHBsYXRmb3JtcyBwcm9jZWVkIGludG8gdGhpcyBibG9jay5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGlzUGxhdGZvcm0od2luZG93LCAnaW9zJykgPyAnaW9zJyA6ICdhbmRyb2lkJztcbiAgICAgICAgICBpbXBvcnQoJy4vaW5wdXQtc2hpbXMtN2RjMWY2ZGMuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRJbnB1dFNoaW1zKGNvbmZpZywgcGxhdGZvcm0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXJkd2FyZUJhY2tCdXR0b25Nb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vaGFyZHdhcmUtYmFjay1idXR0b24tODY0MTAxYTMuanMnKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydHNIYXJkd2FyZUJhY2tCdXR0b25FdmVudHMgPSBpc0h5YnJpZCB8fCBzaG91bGRVc2VDbG9zZVdhdGNoZXIoKTtcbiAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdoYXJkd2FyZUJhY2tCdXR0b24nLCBzdXBwb3J0c0hhcmR3YXJlQmFja0J1dHRvbkV2ZW50cykpIHtcbiAgICAgICAgICBoYXJkd2FyZUJhY2tCdXR0b25Nb2R1bGUuc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiBhbiBhcHAgc2V0cyBoYXJkd2FyZUJhY2tCdXR0b246IGZhbHNlIGFuZCBleHBlcmltZW50YWxDbG9zZVdhdGNoZXI6IHRydWVcbiAgICAgICAgICAgKiB0aGVuIHRoZSBjbG9zZSB3YXRjaGVyIHdpbGwgbm90IGJlIHVzZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHNob3VsZFVzZUNsb3NlV2F0Y2hlcigpKSB7XG4gICAgICAgICAgICBwcmludElvbldhcm5pbmcoJ2V4cGVyaW1lbnRhbENsb3NlV2F0Y2hlciB3YXMgc2V0IHRvIGB0cnVlYCwgYnV0IGhhcmR3YXJlQmFja0J1dHRvbiB3YXMgc2V0IHRvIGBmYWxzZWAuIEJvdGggY29uZmlnIG9wdGlvbnMgbXVzdCBiZSBgdHJ1ZWAgZm9yIHRoZSBDbG9zZSBXYXRjaGVyIEFQSSB0byBiZSB1c2VkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoYXJkd2FyZUJhY2tCdXR0b25Nb2R1bGUuYmxvY2tIYXJkd2FyZUJhY2tCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpbXBvcnQoJy4va2V5Ym9hcmQtNTIyNzhiZDcuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRLZXlib2FyZEFzc2lzdCh3aW5kb3cpKTtcbiAgICAgICAgfVxuICAgICAgICBpbXBvcnQoJy4vZm9jdXMtdmlzaWJsZS1kZDQwZDY5Zi5qcycpLnRoZW4obW9kdWxlID0+IHRoaXMuZm9jdXNWaXNpYmxlID0gbW9kdWxlLnN0YXJ0Rm9jdXNWaXNpYmxlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVc2VkIHRvIHNldCBmb2N1cyBvbiBhbiBlbGVtZW50IHRoYXQgdXNlcyBgaW9uLWZvY3VzYWJsZWAuXG4gICAqIERvIG5vdCB1c2UgdGhpcyBpZiBmb2N1c2luZyB0aGUgZWxlbWVudCBhcyBhIHJlc3VsdCBvZiBhIGtleWJvYXJkXG4gICAqIGV2ZW50IGFzIHRoZSBmb2N1cyB1dGlsaXR5IHNob3VsZCBoYW5kbGUgdGhpcyBmb3IgdXMuIFRoaXMgbWV0aG9kXG4gICAqIHNob3VsZCBiZSB1c2VkIHdoZW4gd2Ugd2FudCB0byBwcm9ncmFtbWF0aWNhbGx5IGZvY3VzIGFuIGVsZW1lbnQgYXNcbiAgICogYSByZXN1bHQgb2YgYW5vdGhlciB1c2VyIGFjdGlvbi4gKEV4OiBXZSBmb2N1cyB0aGUgZmlyc3QgZWxlbWVudFxuICAgKiBpbnNpZGUgb2YgYSBwb3BvdmVyIHdoZW4gdGhlIHVzZXIgcHJlc2VudHMgaXQsIGJ1dCB0aGUgcG9wb3ZlciBpcyBub3QgYWx3YXlzXG4gICAqIHByZXNlbnRlZCBhcyBhIHJlc3VsdCBvZiBrZXlib2FyZCBhY3Rpb24uKVxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoZWxlbWVudHMpIHtcbiAgICBpZiAodGhpcy5mb2N1c1Zpc2libGUpIHtcbiAgICAgIHRoaXMuZm9jdXNWaXNpYmxlLnNldEZvY3VzKGVsZW1lbnRzKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzk2NzE1NTIwZmQwNWQ2ZjBlNmZhMjZhOGJhNzg3OTJjZmNjZDRjMGEnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW9uLXBhZ2UnOiB0cnVlLFxuICAgICAgICAnZm9yY2Utc3RhdHVzYmFyLXBhZGRpbmcnOiBjb25maWcuZ2V0Qm9vbGVhbignX2ZvcmNlU3RhdHVzYmFyUGFkZGluZycpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuY29uc3QgbmVlZElucHV0U2hpbXMgPSAoKSA9PiB7XG4gIC8qKlxuICAgKiBpT1MgYWx3YXlzIG5lZWRzIGlucHV0IHNoaW1zXG4gICAqL1xuICBjb25zdCBuZWVkc1NoaW1zSU9TID0gaXNQbGF0Zm9ybSh3aW5kb3csICdpb3MnKSAmJiBpc1BsYXRmb3JtKHdpbmRvdywgJ21vYmlsZScpO1xuICBpZiAobmVlZHNTaGltc0lPUykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBBbmRyb2lkIG9ubHkgbmVlZHMgaW5wdXQgc2hpbXMgd2hlbiBydW5uaW5nXG4gICAqIGluIHRoZSBicm93c2VyIGFuZCBvbmx5IGlmIHRoZSBicm93c2VyIGlzIHVzaW5nIHRoZVxuICAgKiBuZXcgQ2hyb21lIDEwOCsgcmVzaXplIGJlaGF2aW9yOiBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2Jsb2cvdmlld3BvcnQtcmVzaXplLWJlaGF2aW9yL1xuICAgKi9cbiAgY29uc3QgaXNBbmRyb2lkTW9iaWxlV2ViID0gaXNQbGF0Zm9ybSh3aW5kb3csICdhbmRyb2lkJykgJiYgaXNQbGF0Zm9ybSh3aW5kb3csICdtb2JpbGV3ZWInKTtcbiAgaWYgKGlzQW5kcm9pZE1vYmlsZVdlYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBySUMgPSBjYWxsYmFjayA9PiB7XG4gIGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG4gICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDMyKTtcbiAgfVxufTtcbkFwcC5zdHlsZSA9IElvbkFwcFN0eWxlMDtcbmNvbnN0IGJ1dHRvbnNJb3NDc3MgPSBcIi5zYy1pb24tYnV0dG9ucy1pb3MtaHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7ei1pbmRleDo5OX0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWJ1dHRvbnstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWJ1dHRvbnstLXBhZGRpbmctdG9wOjNweDstLXBhZGRpbmctYm90dG9tOjNweDstLXBhZGRpbmctc3RhcnQ6NXB4Oy0tcGFkZGluZy1lbmQ6NXB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweDttaW4taGVpZ2h0OjMycHh9LnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24taGFzLWljb24tb25seXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowfS5zYy1pb24tYnV0dG9ucy1pb3MtcyBpb24tYnV0dG9uOm5vdCguYnV0dG9uLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6NHB4fS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiwuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uey0tY29sb3I6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LnNjLWlvbi1idXR0b25zLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLXNvbGlkLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24tc29saWR7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IzAwMDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xMjstLWJhY2tncm91bmQtYWN0aXZhdGVkOiMwMDA7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5Oi4xMjstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OjAuNDU7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24tY2xlYXIsLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1jbGVhcnstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1vdXRsaW5lLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24tb3V0bGluZXstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLWNsZWFyLC5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLW91dGxpbmV7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDpjdXJyZW50Q29sb3I7LS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50fS5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLXNvbGlkOm5vdCguaW9uLWNvbG9yKXstLWJhY2tncm91bmQtZm9jdXNlZDojMDAwOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6LjEyOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzAwMDstLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6LjEyfS5zYy1pb24tYnV0dG9ucy1pb3MtcyBpb24taWNvbltzbG90PXN0YXJ0XXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tZW5kOjAuM2VtO21hcmdpbi1pbmxpbmUtZW5kOjAuM2VtO2ZvbnQtc2l6ZToxLjQxZW07bGluZS1oZWlnaHQ6MC42N30uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWljb25bc2xvdD1lbmRde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LW1hcmdpbi1zdGFydDowLjRlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuNGVtO2ZvbnQtc2l6ZToxLjQxZW07bGluZS1oZWlnaHQ6MC42N30uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWljb25bc2xvdD1pY29uLW9ubHlde3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxLjY1ZW07bGluZS1oZWlnaHQ6MC42N31cIjtcbmNvbnN0IElvbkJ1dHRvbnNJb3NTdHlsZTAgPSBidXR0b25zSW9zQ3NzO1xuY29uc3QgYnV0dG9uc01kQ3NzID0gXCIuc2MtaW9uLWJ1dHRvbnMtbWQtaHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7ei1pbmRleDo5OX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyBpb24tYnV0dG9uey0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1idXR0b257LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjhweDstLXBhZGRpbmctZW5kOjhweDstLWJveC1zaGFkb3c6bm9uZTstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHg7bWluLWhlaWdodDozMnB4fS5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24taGFzLWljb24tb25seXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowfS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1idXR0b246bm90KC5idXR0b24tcm91bmQpey0tYm9yZGVyLXJhZGl1czoycHh9LnNjLWlvbi1idXR0b25zLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiwuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1tZC1oLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbnstLWNvbG9yOmluaXRpYWw7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1jb2xvci1ob3Zlcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLXNvbGlkLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLXNvbGlkey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1ob3Zlcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnNjLWlvbi1idXR0b25zLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbi1vdXRsaW5lLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLW91dGxpbmV7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLWhhcy1pY29uLW9ubHkuYnV0dG9uLWNsZWFyey0tcGFkZGluZy10b3A6MTJweDstLXBhZGRpbmctZW5kOjEycHg7LS1wYWRkaW5nLWJvdHRvbToxMnB4Oy0tcGFkZGluZy1zdGFydDoxMnB4Oy0tYm9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3dpZHRoOjNyZW07aGVpZ2h0OjNyZW19LnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbnstLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yfS5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tc29saWR7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICM0MjQyNDIpKTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcn0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLW91dGxpbmV7LS1jb2xvcjppbml0aWFsOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yOy0tYm9yZGVyLWNvbG9yOmN1cnJlbnRDb2xvcn0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLWNsZWFyey0tY29sb3I6aW5pdGlhbDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDpjdXJyZW50Q29sb3I7LS1iYWNrZ3JvdW5kLWhvdmVyOmN1cnJlbnRDb2xvcn0uc2MtaW9uLWJ1dHRvbnMtbWQtcyBpb24taWNvbltzbG90PXN0YXJ0XXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tZW5kOjAuM2VtO21hcmdpbi1pbmxpbmUtZW5kOjAuM2VtO2ZvbnQtc2l6ZToxLjRlbX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyBpb24taWNvbltzbG90PWVuZF17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjAuNGVtO21hcmdpbi1pbmxpbmUtc3RhcnQ6MC40ZW07Zm9udC1zaXplOjEuNGVtfS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MS44ZW19XCI7XG5jb25zdCBJb25CdXR0b25zTWRTdHlsZTAgPSBidXR0b25zTWRDc3M7XG5jb25zdCBCdXR0b25zID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNvbGxhcHNlID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzU4YzFmYzVlYjg2N2QwNzMxYzYzNTQ5YjFjY2IzZWMzYmJiZTZlMWInLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ2J1dHRvbnMtY29sbGFwc2UnXTogdGhpcy5jb2xsYXBzZVxuICAgICAgfVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzBjOGY5NWI5ODQwYzhmYTBjNGU1MGJlODRjNTE1OTYyMGEzZWI1YzgnXG4gICAgfSkpO1xuICB9XG59O1xuQnV0dG9ucy5zdHlsZSA9IHtcbiAgaW9zOiBJb25CdXR0b25zSW9zU3R5bGUwLFxuICBtZDogSW9uQnV0dG9uc01kU3R5bGUwXG59O1xuY29uc3QgY29udGVudENzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTstLXBhZGRpbmctdG9wOjBweDstLXBhZGRpbmctYm90dG9tOjBweDstLXBhZGRpbmctc3RhcnQ6MHB4Oy0tcGFkZGluZy1lbmQ6MHB4Oy0ta2V5Ym9hcmQtb2Zmc2V0OjBweDstLW9mZnNldC10b3A6MHB4Oy0tb2Zmc2V0LWJvdHRvbTowcHg7LS1vdmVyZmxvdzphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MCAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzaXplIHN0eWxlfTpob3N0KC5pb24tY29sb3IpIC5pbm5lci1zY3JvbGx7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0jYmFja2dyb3VuZC1jb250ZW50e2xlZnQ6MHB4O3JpZ2h0OjBweDt0b3A6Y2FsYyh2YXIoLS1vZmZzZXQtdG9wKSAqIC0xKTtib3R0b206Y2FsYyh2YXIoLS1vZmZzZXQtYm90dG9tKSAqIC0xKTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfS5pbm5lci1zY3JvbGx7bGVmdDowcHg7cmlnaHQ6MHB4O3RvcDpjYWxjKHZhcigtLW9mZnNldC10b3ApICogLTEpO2JvdHRvbTpjYWxjKHZhcigtLW9mZnNldC1ib3R0b20pICogLTEpOy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOmNhbGModmFyKC0tcGFkZGluZy10b3ApICsgdmFyKC0tb2Zmc2V0LXRvcCkpO3BhZGRpbmctYm90dG9tOmNhbGModmFyKC0tcGFkZGluZy1ib3R0b20pICsgdmFyKC0ta2V5Ym9hcmQtb2Zmc2V0KSArIHZhcigtLW9mZnNldC1ib3R0b20pKTtwb3NpdGlvbjphYnNvbHV0ZTtjb2xvcjp2YXIoLS1jb2xvcik7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbjstbXMtdG91Y2gtYWN0aW9uOnBhbi14IHBhbi15IHBpbmNoLXpvb207dG91Y2gtYWN0aW9uOnBhbi14IHBhbi15IHBpbmNoLXpvb219LnNjcm9sbC15LC5zY3JvbGwteHstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt6LWluZGV4OjA7d2lsbC1jaGFuZ2U6c2Nyb2xsLXBvc2l0aW9ufS5zY3JvbGwteXtvdmVyZmxvdy15OnZhcigtLW92ZXJmbG93KTtvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6Y29udGFpbn0uc2Nyb2xsLXh7b3ZlcmZsb3cteDp2YXIoLS1vdmVyZmxvdyk7b3ZlcnNjcm9sbC1iZWhhdmlvci14OmNvbnRhaW59Lm92ZXJzY3JvbGw6OmJlZm9yZSwub3ZlcnNjcm9sbDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7Y29udGVudDpcXFwiXFxcIn0ub3ZlcnNjcm9sbDo6YmVmb3Jle2JvdHRvbTotMXB4fS5vdmVyc2Nyb2xsOjphZnRlcnt0b3A6LTFweH06aG9zdCguY29udGVudC1zaXppbmcpe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi1oZWlnaHQ6MDtjb250YWluOm5vbmV9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKSAuaW5uZXItc2Nyb2xse3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowO2JvdHRvbTowO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1vZmZzZXQtdG9wKSAqIC0xKTttYXJnaW4tYm90dG9tOmNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSl9LnRyYW5zaXRpb24tZWZmZWN0e2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDB2aDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguY29udGVudC1sdHIpIC50cmFuc2l0aW9uLWVmZmVjdHtsZWZ0Oi0xMDAlO306aG9zdCguY29udGVudC1ydGwpIC50cmFuc2l0aW9uLWVmZmVjdHtyaWdodDotMTAwJTt9LnRyYW5zaXRpb24tY292ZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6YmxhY2s7b3BhY2l0eTowLjF9LnRyYW5zaXRpb24tc2hhZG93e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgLTlweCAwIDlweCAwIHJnYmEoMCwgMCwgMTAwLCAwLjAzKTtib3gtc2hhZG93Omluc2V0IC05cHggMCA5cHggMCByZ2JhKDAsIDAsIDEwMCwgMC4wMyl9Omhvc3QoLmNvbnRlbnQtbHRyKSAudHJhbnNpdGlvbi1zaGFkb3d7cmlnaHQ6MDt9Omhvc3QoLmNvbnRlbnQtcnRsKSAudHJhbnNpdGlvbi1zaGFkb3d7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7dHJhbnNmb3JtOnNjYWxlWCgtMSl9OjpzbG90dGVkKFtzbG90PWZpeGVkXSl7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX1cIjtcbmNvbnN0IElvbkNvbnRlbnRTdHlsZTAgPSBjb250ZW50Q3NzO1xuY29uc3QgQ29udGVudCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25TY3JvbGxTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsU3RhcnRcIiwgNyk7XG4gICAgdGhpcy5pb25TY3JvbGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNjcm9sbFwiLCA3KTtcbiAgICB0aGlzLmlvblNjcm9sbEVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsRW5kXCIsIDcpO1xuICAgIHRoaXMud2F0Y2hEb2cgPSBudWxsO1xuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RTY3JvbGwgPSAwO1xuICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgdGhpcy5jVG9wID0gLTE7XG4gICAgdGhpcy5jQm90dG9tID0gLTE7XG4gICAgdGhpcy5pc01haW5Db250ZW50ID0gdHJ1ZTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMudGFic0VsZW1lbnQgPSBudWxsO1xuICAgIC8vIERldGFpbCBpcyB1c2VkIGluIGEgaG90IGxvb3AgaW4gdGhlIHNjcm9sbCBldmVudCwgYnkgYWxsb2NhdGluZyBpdCBoZXJlXG4gICAgLy8gVjggd2lsbCBiZSBhYmxlIHRvIGlubGluZSBhbnkgcmVhZC93cml0ZSB0byBpdCBzaW5jZSBpdCdzIGEgbW9ub21vcnBoaWMgY2xhc3MuXG4gICAgLy8gaHR0cHM6Ly9tcmFsZS5waC9ibG9nLzIwMTUvMDEvMTEvd2hhdHMtdXAtd2l0aC1tb25vbW9ycGhpc20uaHRtbFxuICAgIHRoaXMuZGV0YWlsID0ge1xuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgIHR5cGU6ICdzY3JvbGwnLFxuICAgICAgZXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0WDogMCxcbiAgICAgIHN0YXJ0WTogMCxcbiAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgY3VycmVudFk6IDAsXG4gICAgICB2ZWxvY2l0eVg6IDAsXG4gICAgICB2ZWxvY2l0eVk6IDAsXG4gICAgICBkZWx0YVg6IDAsXG4gICAgICBkZWx0YVk6IDAsXG4gICAgICBjdXJyZW50VGltZTogMCxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMuZml4ZWRTbG90UGxhY2VtZW50ID0gJ2FmdGVyJztcbiAgICB0aGlzLmZvcmNlT3ZlcnNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjcm9sbFggPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbFkgPSB0cnVlO1xuICAgIHRoaXMuc2Nyb2xsRXZlbnRzID0gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEFyaWFBdHRyaWJ1dGVzKHRoaXMuZWwpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaXNNYWluQ29udGVudCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLW1lbnUsIGlvbi1wb3BvdmVyLCBpb24tbW9kYWwnKSA9PT0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGUgZnVsbHNjcmVlbiBjb250ZW50IG9mZnNldHMgbmVlZCB0byBiZVxuICAgICAqIGNvbXB1dGVkIGFmdGVyIHRoZSB0YWIgYmFyIGhhcyBsb2FkZWQuIFNpbmNlXG4gICAgICogbGF6eSBldmFsdWF0aW9uIG1lYW5zIGNvbXBvbmVudHMgYXJlIG5vdCBoeWRyYXRlZFxuICAgICAqIGF0IHRoZSBzYW1lIHRpbWUsIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGlvblRhYkJhckxvYWRlZFxuICAgICAqIGV2ZW50IHRvIGZpcmUuIFRoaXMgZG9lcyBub3QgaW1wYWN0IGRpc3QtY3VzdG9tLWVsZW1lbnRzXG4gICAgICogYmVjYXVzZSB0aGVyZSBpcyBubyBoeWRyYXRpb24gdGhlcmUuXG4gICAgICovXG4gICAgaWYgKGhhc0xhenlCdWlsZCh0aGlzLmVsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIGNhY2hlIHRoZSByZWZlcmVuY2UgdG8gdGhlIHRhYnMuXG4gICAgICAgKiBJZiBqdXN0IHRoZSBjb250ZW50IGlzIHVubW91bnRlZCB0aGVuIHdlIHdvbid0XG4gICAgICAgKiBiZSBhYmxlIHRvIHF1ZXJ5IGZvciB0aGUgY2xvc2VzdCB0YWJzIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgKiBzaW5jZSB0aGUgY29udGVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxuICAgICAgICovXG4gICAgICBjb25zdCBjbG9zZXN0VGFicyA9IHRoaXMudGFic0VsZW1lbnQgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi10YWJzJyk7XG4gICAgICBpZiAoY2xvc2VzdFRhYnMgIT09IG51bGwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICogd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgcGFzcyB0aGUgc2FtZSBmdW5jdGlvbiByZWZlcmVuY2VcbiAgICAgICAgICogb3RoZXJ3aXNlIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIG5vdCBiZSByZW1vdmVkIHByb3Blcmx5LlxuICAgICAgICAgKiBXZSBjYW4ndCBvbmx5IHBhc3MgYHRoaXMucmVzaXplYCBiZWNhdXNlIFwidGhpc1wiIGluIHRoZSBmdW5jdGlvblxuICAgICAgICAgKiBjb250ZXh0IGJlY29tZXMgYSByZWZlcmVuY2UgdG8gSW9uVGFicyBpbnN0ZWFkIG9mIElvbkNvbnRlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbGlzdGVuIGZvciBpb25UYWJCYXJMb2FkZWQgb24gdGhlIElvblRhYnNcbiAgICAgICAgICogaW5zdGFuY2UgcmF0aGVyIHRoYW4gdGhlIElvblRhYkJhciBpbnN0YW5jZS4gSXQncyBwb3NzaWJsZSBmb3JcbiAgICAgICAgICogYSB0YWIgYmFyIHRvIGJlIGNvbmRpdGlvbmFsbHkgcmVuZGVyZWQvbW91bnRlZC4gU2luY2UgaW9uVGFiQmFyTG9hZGVkXG4gICAgICAgICAqIGJ1YmJsZXMsIHdlIGNhbiBjYXRjaCBhbnkgaW5zdGFuY2VzIG9mIGNoaWxkIHRhYiBiYXJzIGxvYWRpbmcgYnkgbGlzdGVuaW5nXG4gICAgICAgICAqIG9uIElvblRhYnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhYnNMb2FkQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICBjbG9zZXN0VGFicy5hZGRFdmVudExpc3RlbmVyKCdpb25UYWJCYXJMb2FkZWQnLCB0aGlzLnRhYnNMb2FkQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgaWYgKGhhc0xhenlCdWlsZCh0aGlzLmVsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZXZlbnQgbGlzdGVuZXIgYW5kIHRhYnMgY2FjaGVzIG5lZWQgdG9cbiAgICAgICAqIGJlIGNsZWFyZWQgb3RoZXJ3aXNlIHRoaXMgd2lsbCBjcmVhdGUgYSBtZW1vcnlcbiAgICAgICAqIGxlYWsgd2hlcmUgdGhlIElvblRhYnMgaW5zdGFuY2UgY2FuIG5ldmVyIGJlXG4gICAgICAgKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgY29uc3Qge1xuICAgICAgICB0YWJzRWxlbWVudCxcbiAgICAgICAgdGFic0xvYWRDYWxsYmFja1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAodGFic0VsZW1lbnQgIT09IG51bGwgJiYgdGFic0xvYWRDYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYnNFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvblRhYkJhckxvYWRlZCcsIHRhYnNMb2FkQ2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJzRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLnRhYnNMb2FkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSb3RhdGluZyBjZXJ0YWluIGRldmljZXMgY2FuIHVwZGF0ZVxuICAgKiB0aGUgc2FmZSBhcmVhIGluc2V0cy4gQXMgYSByZXN1bHQsXG4gICAqIHRoZSBmdWxsc2NyZWVuIGZlYXR1cmUgb24gaW9uLWNvbnRlbnRcbiAgICogbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkLlxuICAgKlxuICAgKiBXZSBsaXN0ZW4gZm9yIFwicmVzaXplXCIgYmVjYXVzZSB3ZVxuICAgKiBkbyBub3QgY2FyZSB3aGF0IHRoZSBvcmllbnRhdGlvbiBvZlxuICAgKiB0aGUgZGV2aWNlIGlzLiBPdGhlciBBUElzXG4gICAqIHN1Y2ggYXMgU2NyZWVuT3JpZW50YXRpb24gb3JcbiAgICogdGhlIGRldmljZW9yaWVudGF0aW9uIGV2ZW50IG11c3QgaGF2ZVxuICAgKiBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXIgZmlyc3Qgd2hlcmVhc1xuICAgKiB0aGUgXCJyZXNpemVcIiBldmVudCBkb2VzIG5vdC5cbiAgICpcbiAgICogV2UgYWxzbyB0aHJvdHRsZSB0aGUgY2FsbGJhY2sgdG8gbWluaW1pemVcbiAgICogdGhyYXNoaW5nIHdoZW4gcXVpY2tseSByZXNpemluZyBhIHdpbmRvdy5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFJlc2l6ZSBzaG91bGQgb25seSBoYXBwZW5cbiAgICAgICAqIGlmIHRoZSBjb250ZW50IGlzIHZpc2libGUuXG4gICAgICAgKiBXaGVuIHRoZSBjb250ZW50IGlzIGhpZGRlblxuICAgICAgICogdGhlbiBvZmZzZXRQYXJlbnQgd2lsbCBiZSBudWxsLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5lbC5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIHNob3VsZEZvcmNlT3ZlcnNjcm9sbCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JjZU92ZXJzY3JvbGxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gZm9yY2VPdmVyc2Nyb2xsID09PSB1bmRlZmluZWQgPyBtb2RlID09PSAnaW9zJyAmJiBpc1BsYXRmb3JtKCdpb3MnKSA6IGZvcmNlT3ZlcnNjcm9sbDtcbiAgfVxuICByZXNpemUoKSB7XG4gICAgLyoqXG4gICAgICogT25seSBmb3JjZSB1cGRhdGUgaWYgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBpbiBhIGJyb3dzZXIgY29udGV4dC5cbiAgICAgKiBVc2luZyBgZm9yY2VVcGRhdGVgIGluIGEgc2VydmVyIGNvbnRleHQgd2l0aCBwcmUtcmVuZGVyaW5nIGNhbiBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICogVGhlIGBoeWRyYXRlRG9jdW1lbnRgIGZ1bmN0aW9uIGluIGBAc3RlbmNpbC9jb3JlYCB3aWxsIHJlbmRlciB0aGUgYGlvbi1jb250ZW50YCwgYnV0XG4gICAgICogYGZvcmNlVXBkYXRlYCB3aWxsIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsIGxvY2tpbmcgdXAgdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqIFRPRE86IFJlbW92ZSBpZiBTVEVOQ0lMLTgzNCBkZXRlcm1pbmVzIFN0ZW5jaWwgd2lsbCBhY2NvdW50IGZvciB0aGlzLlxuICAgICAqL1xuICAgIHtcbiAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgICAgcmVhZFRhc2soKCkgPT4gdGhpcy5yZWFkRGltZW5zaW9ucygpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jVG9wICE9PSAwIHx8IHRoaXMuY0JvdHRvbSAhPT0gMCkge1xuICAgICAgICB0aGlzLmNUb3AgPSB0aGlzLmNCb3R0b20gPSAwO1xuICAgICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVhZERpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgcGFnZSA9IGdldFBhZ2VFbGVtZW50KHRoaXMuZWwpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMuZWwub2Zmc2V0VG9wLCAwKTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1heChwYWdlLm9mZnNldEhlaWdodCAtIHRvcCAtIHRoaXMuZWwub2Zmc2V0SGVpZ2h0LCAwKTtcbiAgICBjb25zdCBkaXJ0eSA9IHRvcCAhPT0gdGhpcy5jVG9wIHx8IGJvdHRvbSAhPT0gdGhpcy5jQm90dG9tO1xuICAgIGlmIChkaXJ0eSkge1xuICAgICAgdGhpcy5jVG9wID0gdG9wO1xuICAgICAgdGhpcy5jQm90dG9tID0gYm90dG9tO1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfVxuICB9XG4gIG9uU2Nyb2xsKGV2KSB7XG4gICAgY29uc3QgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzaG91bGRTdGFydCA9ICF0aGlzLmlzU2Nyb2xsaW5nO1xuICAgIHRoaXMubGFzdFNjcm9sbCA9IHRpbWVTdGFtcDtcbiAgICBpZiAoc2hvdWxkU3RhcnQpIHtcbiAgICAgIHRoaXMub25TY3JvbGxTdGFydCgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucXVldWVkICYmIHRoaXMuc2Nyb2xsRXZlbnRzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICByZWFkVGFzayh0cyA9PiB7XG4gICAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGV0YWlsLmV2ZW50ID0gZXY7XG4gICAgICAgIHVwZGF0ZVNjcm9sbERldGFpbCh0aGlzLmRldGFpbCwgdGhpcy5zY3JvbGxFbCwgdHMsIHNob3VsZFN0YXJ0KTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGwuZW1pdCh0aGlzLmRldGFpbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgYWN0dWFsIHNjcm9sbGluZyB0YWtlcyBwbGFjZS5cbiAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBgc2Nyb2xsYCBldmVudHMgb3IgbWFudWFsbHkgbW9kaWZ5XG4gICAqIGBzY3JvbGxUb3BgLiBIb3dldmVyLCBpdCdzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgQVBJIHByb3ZpZGVkIGJ5IGBpb24tY29udGVudGA6XG4gICAqXG4gICAqIGkuZS4gVXNpbmcgYGlvblNjcm9sbGAsIGBpb25TY3JvbGxTdGFydGAsIGBpb25TY3JvbGxFbmRgIGZvciBzY3JvbGxpbmcgZXZlbnRzXG4gICAqIGFuZCBgc2Nyb2xsVG9Qb2ludCgpYCB0byBzY3JvbGwgdGhlIGNvbnRlbnQgaW50byBhIGNlcnRhaW4gcG9pbnQuXG4gICAqL1xuICBhc3luYyBnZXRTY3JvbGxFbGVtZW50KCkge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgZ2V0cyBjYWxsZWQgaW4gY2VydGFpbiBlYXJseSBsaWZlY3ljbGUgaG9va3MgKGV4OiBWdWUgb25Nb3VudGVkKSxcbiAgICAgKiBzY3JvbGxFbCB3b24ndCBiZSBkZWZpbmVkIHlldCB3aXRoIHRoZSBjdXN0b20gZWxlbWVudHMgYnVpbGQsIHNvIHdhaXQgZm9yIGl0IHRvIGxvYWQgaW4uXG4gICAgICovXG4gICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGNvbXBvbmVudE9uUmVhZHkodGhpcy5lbCwgcmVzb2x2ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2Nyb2xsRWwpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYWNrZ3JvdW5kIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBnZXRCYWNrZ3JvdW5kRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KHRoaXMuZWwsIHJlc29sdmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmJhY2tncm91bmRDb250ZW50RWwpO1xuICB9XG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoZSB0b3AuIERlZmF1bHRzIHRvIGAwYC5cbiAgICovXG4gIHNjcm9sbFRvVG9wKGR1cmF0aW9uID0gMCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCAwLCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgKi9cbiAgYXN5bmMgc2Nyb2xsVG9Cb3R0b20oZHVyYXRpb24gPSAwKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBjb25zdCB5ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsRWwuY2xpZW50SGVpZ2h0O1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCB5LCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCBieSBhIHNwZWNpZmllZCBYL1kgZGlzdGFuY2UgaW4gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHggVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICogQHBhcmFtIHkgVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgYnkgdGhhdCBhbW91bnQuXG4gICAqL1xuICBhc3luYyBzY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1BvaW50KHggKyBzY3JvbGxFbC5zY3JvbGxMZWZ0LCB5ICsgc2Nyb2xsRWwuc2Nyb2xsVG9wLCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmllZCBYL1kgbG9jYXRpb24gaW4gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHggVGhlIHBvaW50IHRvIHNjcm9sbCB0byBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLlxuICAgKiBAcGFyYW0geSBUaGUgcG9pbnQgdG8gc2Nyb2xsIHRvIG9uIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoYXQgcG9pbnQuIERlZmF1bHRzIHRvIGAwYC5cbiAgICovXG4gIGFzeW5jIHNjcm9sbFRvUG9pbnQoeCwgeSwgZHVyYXRpb24gPSAwKSB7XG4gICAgY29uc3QgZWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBpZiAoZHVyYXRpb24gPCAzMikge1xuICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSB5O1xuICAgICAgfVxuICAgICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlc29sdmU7XG4gICAgbGV0IHN0YXJ0VGltZSA9IDA7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHIgPT4gcmVzb2x2ZSA9IHIpO1xuICAgIGNvbnN0IGZyb21ZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGZyb21YID0gZWwuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBkZWx0YVkgPSB5ICE9IG51bGwgPyB5IC0gZnJvbVkgOiAwO1xuICAgIGNvbnN0IGRlbHRhWCA9IHggIT0gbnVsbCA/IHggLSBmcm9tWCA6IDA7XG4gICAgLy8gc2Nyb2xsIGxvb3BcbiAgICBjb25zdCBzdGVwID0gdGltZVN0YW1wID0+IHtcbiAgICAgIGNvbnN0IGxpbmVhclRpbWUgPSBNYXRoLm1pbigxLCAodGltZVN0YW1wIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICBjb25zdCBlYXNlZFQgPSBNYXRoLnBvdyhsaW5lYXJUaW1lLCAzKSArIDE7XG4gICAgICBpZiAoZGVsdGFZICE9PSAwKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWFzZWRUICogZGVsdGFZICsgZnJvbVkpO1xuICAgICAgfVxuICAgICAgaWYgKGRlbHRhWCAhPT0gMCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihlYXNlZFQgKiBkZWx0YVggKyBmcm9tWCk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzZWRUIDwgMSkge1xuICAgICAgICAvLyBkbyBub3QgdXNlIERvbUNvbnRyb2xsZXIgaGVyZVxuICAgICAgICAvLyBtdXN0IHVzZSBuYXRpdmVSYWYgaW4gb3JkZXIgdG8gZmlyZSBpbiB0aGUgbmV4dCBmcmFtZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBjaGlsbCBvdXQgZm9yIGEgZnJhbWUgZmlyc3RcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodHMgPT4ge1xuICAgICAgc3RhcnRUaW1lID0gdHM7XG4gICAgICBzdGVwKHRzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBvblNjcm9sbFN0YXJ0KCkge1xuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW9uU2Nyb2xsU3RhcnQuZW1pdCh7XG4gICAgICBpc1Njcm9sbGluZzogdHJ1ZVxuICAgIH0pO1xuICAgIGlmICh0aGlzLndhdGNoRG9nKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMud2F0Y2hEb2cpO1xuICAgIH1cbiAgICAvLyB3YXRjaGRvZ1xuICAgIHRoaXMud2F0Y2hEb2cgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXN0U2Nyb2xsIDwgRGF0ZS5ub3coKSAtIDEyMCkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuICBvblNjcm9sbEVuZCgpIHtcbiAgICBpZiAodGhpcy53YXRjaERvZykgY2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoRG9nKTtcbiAgICB0aGlzLndhdGNoRG9nID0gbnVsbDtcbiAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pb25TY3JvbGxFbmQuZW1pdCh7XG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaXhlZFNsb3RQbGFjZW1lbnQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgaXNNYWluQ29udGVudCxcbiAgICAgIHNjcm9sbFgsXG4gICAgICBzY3JvbGxZLFxuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBydGwgPSBpc1JUTChlbCkgPyAncnRsJyA6ICdsdHInO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGZvcmNlT3ZlcnNjcm9sbCA9IHRoaXMuc2hvdWxkRm9yY2VPdmVyc2Nyb2xsKCk7XG4gICAgY29uc3QgdHJhbnNpdGlvblNoYWRvdyA9IG1vZGUgPT09ICdpb3MnO1xuICAgIHRoaXMucmVzaXplKCk7XG4gICAgcmV0dXJuIGgoSG9zdCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICdmMmEyNGFhNjZkYmY1Yzc2ZjlkNGIwNmY3MDhlYjczY2FkYzIzOWRmJyxcbiAgICAgIHJvbGU6IGlzTWFpbkNvbnRlbnQgPyAnbWFpbicgOiB1bmRlZmluZWQsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnY29udGVudC1zaXppbmcnOiBob3N0Q29udGV4dCgnaW9uLXBvcG92ZXInLCB0aGlzLmVsKSxcbiAgICAgICAgb3ZlcnNjcm9sbDogZm9yY2VPdmVyc2Nyb2xsLFxuICAgICAgICBbYGNvbnRlbnQtJHtydGx9YF06IHRydWVcbiAgICAgIH0pLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJy0tb2Zmc2V0LXRvcCc6IGAke3RoaXMuY1RvcH1weGAsXG4gICAgICAgICctLW9mZnNldC1ib3R0b20nOiBgJHt0aGlzLmNCb3R0b219cHhgXG4gICAgICB9XG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNjQ4MGNhNzY0OGIyNzhhYmIzNjQ3N2IzODM4YmNjYmNkNDk5NWUyYScsXG4gICAgICByZWY6IGVsID0+IHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCA9IGVsLFxuICAgICAgaWQ6IFwiYmFja2dyb3VuZC1jb250ZW50XCIsXG4gICAgICBwYXJ0OiBcImJhY2tncm91bmRcIlxuICAgIH0pLCBmaXhlZFNsb3RQbGFjZW1lbnQgPT09ICdiZWZvcmUnID8gaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJmaXhlZFwiXG4gICAgfSkgOiBudWxsLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzI5YTIzYjY2M2Y1ZjAyMTViYjAwMDgyMGMwMWUxODE0YzBkNTU5ODUnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2lubmVyLXNjcm9sbCc6IHRydWUsXG4gICAgICAgICdzY3JvbGwteCc6IHNjcm9sbFgsXG4gICAgICAgICdzY3JvbGwteSc6IHNjcm9sbFksXG4gICAgICAgIG92ZXJzY3JvbGw6IChzY3JvbGxYIHx8IHNjcm9sbFkpICYmIGZvcmNlT3ZlcnNjcm9sbFxuICAgICAgfSxcbiAgICAgIHJlZjogc2Nyb2xsRWwgPT4gdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsLFxuICAgICAgb25TY3JvbGw6IHRoaXMuc2Nyb2xsRXZlbnRzID8gZXYgPT4gdGhpcy5vblNjcm9sbChldikgOiB1bmRlZmluZWQsXG4gICAgICBwYXJ0OiBcInNjcm9sbFwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMGZlMWJkMDU2MDlhNGI4OGFlMmNlOWFkZGY1ZDVkYzVkYzE4MDZmMCdcbiAgICB9KSksIHRyYW5zaXRpb25TaGFkb3cgPyBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tZWZmZWN0XCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tY292ZXJcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tc2hhZG93XCJcbiAgICB9KSkgOiBudWxsLCBmaXhlZFNsb3RQbGFjZW1lbnQgPT09ICdhZnRlcicgPyBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImZpeGVkXCJcbiAgICB9KSA6IG51bGwpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IGdldFBhcmVudEVsZW1lbnQgPSBlbCA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAvLyBub3JtYWwgZWxlbWVudCB3aXRoIGEgcGFyZW50IGVsZW1lbnRcbiAgICByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICBpZiAoKF9hID0gZWwucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpIHtcbiAgICAvLyBzaGFkb3cgZG9tJ3MgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICByZXR1cm4gZWwucGFyZW50Tm9kZS5ob3N0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldFBhZ2VFbGVtZW50ID0gZWwgPT4ge1xuICBjb25zdCB0YWJzID0gZWwuY2xvc2VzdCgnaW9uLXRhYnMnKTtcbiAgaWYgKHRhYnMpIHtcbiAgICByZXR1cm4gdGFicztcbiAgfVxuICAvKipcbiAgICogSWYgd2UncmUgaW4gYSBwb3BvdmVyLCB3ZSBuZWVkIHRvIHVzZSBpdHMgd3JhcHBlciBzbyB3ZSBjYW4gYWNjb3VudCBmb3Igc3BhY2VcbiAgICogYmV0d2VlbiB0aGUgcG9wb3ZlciBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JlZW4uIEJ1dCBpZiB0aGUgcG9wb3ZlciBjb250YWluc1xuICAgKiBpdHMgb3duIHBhZ2UgZWxlbWVudCwgd2Ugc2hvdWxkIHVzZSB0aGF0IGluc3RlYWQuXG4gICAqL1xuICBjb25zdCBwYWdlID0gZWwuY2xvc2VzdCgnaW9uLWFwcCwgaW9uLXBhZ2UsIC5pb24tcGFnZSwgcGFnZS1pbm5lciwgLnBvcG92ZXItY29udGVudCcpO1xuICBpZiAocGFnZSkge1xuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiBnZXRQYXJlbnRFbGVtZW50KGVsKTtcbn07XG4vLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXG5jb25zdCB1cGRhdGVTY3JvbGxEZXRhaWwgPSAoZGV0YWlsLCBlbCwgdGltZXN0YW1wLCBzaG91bGRTdGFydCkgPT4ge1xuICBjb25zdCBwcmV2WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgY29uc3QgcHJldlkgPSBkZXRhaWwuY3VycmVudFk7XG4gIGNvbnN0IHByZXZUID0gZGV0YWlsLmN1cnJlbnRUaW1lO1xuICBjb25zdCBjdXJyZW50WCA9IGVsLnNjcm9sbExlZnQ7XG4gIGNvbnN0IGN1cnJlbnRZID0gZWwuc2Nyb2xsVG9wO1xuICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lc3RhbXAgLSBwcmV2VDtcbiAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgLy8gcmVtZW1iZXIgdGhlIHN0YXJ0IHBvc2l0aW9uc1xuICAgIGRldGFpbC5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgZGV0YWlsLnN0YXJ0WCA9IGN1cnJlbnRYO1xuICAgIGRldGFpbC5zdGFydFkgPSBjdXJyZW50WTtcbiAgICBkZXRhaWwudmVsb2NpdHlYID0gZGV0YWlsLnZlbG9jaXR5WSA9IDA7XG4gIH1cbiAgZGV0YWlsLmN1cnJlbnRUaW1lID0gdGltZXN0YW1wO1xuICBkZXRhaWwuY3VycmVudFggPSBkZXRhaWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRYO1xuICBkZXRhaWwuY3VycmVudFkgPSBkZXRhaWwuc2Nyb2xsVG9wID0gY3VycmVudFk7XG4gIGRldGFpbC5kZWx0YVggPSBjdXJyZW50WCAtIGRldGFpbC5zdGFydFg7XG4gIGRldGFpbC5kZWx0YVkgPSBjdXJyZW50WSAtIGRldGFpbC5zdGFydFk7XG4gIGlmICh0aW1lRGVsdGEgPiAwICYmIHRpbWVEZWx0YSA8IDEwMCkge1xuICAgIGNvbnN0IHZlbG9jaXR5WCA9IChjdXJyZW50WCAtIHByZXZYKSAvIHRpbWVEZWx0YTtcbiAgICBjb25zdCB2ZWxvY2l0eVkgPSAoY3VycmVudFkgLSBwcmV2WSkgLyB0aW1lRGVsdGE7XG4gICAgZGV0YWlsLnZlbG9jaXR5WCA9IHZlbG9jaXR5WCAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVggKiAwLjM7XG4gICAgZGV0YWlsLnZlbG9jaXR5WSA9IHZlbG9jaXR5WSAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVkgKiAwLjM7XG4gIH1cbn07XG5Db250ZW50LnN0eWxlID0gSW9uQ29udGVudFN0eWxlMDtcbmNvbnN0IGhhbmRsZUZvb3RlckZhZGUgPSAoc2Nyb2xsRWwsIGJhc2VFbCkgPT4ge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IG1heFNjcm9sbCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAvKipcbiAgICAgKiBUb29sYmFyIGJhY2tncm91bmQgd2lsbCBmYWRlXG4gICAgICogb3V0IG92ZXIgZmFkZUR1cmF0aW9uIGluIHBpeGVscy5cbiAgICAgKi9cbiAgICBjb25zdCBmYWRlRHVyYXRpb24gPSAxMDtcbiAgICAvKipcbiAgICAgKiBCZWdpbiBmYWRpbmcgb3V0IG1heFNjcm9sbCAtIDMwcHhcbiAgICAgKiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGNvbnRlbnQuXG4gICAgICogQWxzbyBkZXRlcm1pbmUgaG93IGNsb3NlIHdlIGFyZVxuICAgICAqIHRvIHN0YXJ0aW5nIHRoZSBmYWRlLiBJZiB3ZSBhcmVcbiAgICAgKiBiZWZvcmUgdGhlIHN0YXJ0aW5nIHBvaW50LCB0aGVcbiAgICAgKiBzY2FsZSB2YWx1ZSB3aWxsIGdldCBjbGFtcGVkIHRvIDAuXG4gICAgICogSWYgd2UgYXJlIGFmdGVyIHRoZSBtYXhTY3JvbGwgKHJ1YmJlclxuICAgICAqIGJhbmQgc2Nyb2xsaW5nKSwgdGhlIHNjYWxlIHZhbHVlIHdpbGxcbiAgICAgKiBnZXQgY2xhbXBlZCB0byAxLlxuICAgICAqL1xuICAgIGNvbnN0IGZhZGVTdGFydCA9IG1heFNjcm9sbCAtIGZhZGVEdXJhdGlvbjtcbiAgICBjb25zdCBkaXN0YW5jZVRvU3RhcnQgPSBzY3JvbGxUb3AgLSBmYWRlU3RhcnQ7XG4gICAgY29uc3Qgc2NhbGUgPSBjbGFtcCgwLCAxIC0gZGlzdGFuY2VUb1N0YXJ0IC8gZmFkZUR1cmF0aW9uLCAxKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBzY2FsZS50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgZm9vdGVySW9zQ3NzID0gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyLmZvb3Rlci10b29sYmFyLXBhZGRpbmcgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBle3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKX0uZm9vdGVyLWlvcyBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBley0tYm9yZGVyLXdpZHRoOjAuNTVweCAwIDB9QHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpKXsuZm9vdGVyLWJhY2tncm91bmR7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX0uZm9vdGVyLXRyYW5zbHVjZW50LWlvcyBpb24tdG9vbGJhcnstLW9wYWNpdHk6Ljh9fS5mb290ZXItaW9zLmlvbi1uby1ib3JkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZXstLWJvcmRlci13aWR0aDowfS5mb290ZXItY29sbGFwc2UtZmFkZSBpb24tdG9vbGJhcnstLW9wYWNpdHktc2NhbGU6aW5oZXJpdH1cIjtcbmNvbnN0IElvbkZvb3Rlcklvc1N0eWxlMCA9IGZvb3Rlcklvc0NzcztcbmNvbnN0IGZvb3Rlck1kQ3NzID0gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyLmZvb3Rlci10b29sYmFyLXBhZGRpbmcgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBle3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKX0uZm9vdGVyLW1key13ZWJraXQtYm94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKX0uZm9vdGVyLW1kLmlvbi1uby1ib3JkZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfVwiO1xuY29uc3QgSW9uRm9vdGVyTWRTdHlsZTAgPSBmb290ZXJNZENzcztcbmNvbnN0IEZvb3RlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5rZXlib2FyZEN0cmwgPSBudWxsO1xuICAgIHRoaXMuY2hlY2tDb2xsYXBzaWJsZUZvb3RlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgaWYgKG1vZGUgIT09ICdpb3MnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29sbGFwc2VcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaGFzRmFkZSA9IGNvbGxhcHNlID09PSAnZmFkZSc7XG4gICAgICB0aGlzLmRlc3Ryb3lDb2xsYXBzaWJsZUZvb3RlcigpO1xuICAgICAgaWYgKGhhc0ZhZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZUVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tYXBwLGlvbi1wYWdlLC5pb24tcGFnZSxwYWdlLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHBhZ2VFbCA/IGZpbmRJb25Db250ZW50KHBhZ2VFbCkgOiBudWxsO1xuICAgICAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgICAgIHByaW50SW9uQ29udGVudEVycm9yTXNnKHRoaXMuZWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHVwRmFkZUZvb3Rlcihjb250ZW50RWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXR1cEZhZGVGb290ZXIgPSBhc3luYyBjb250ZW50RWwgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgZmFkaW5nIG9mIHRvb2xiYXJzIG9uIHNjcm9sbFxuICAgICAgICovXG4gICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlRm9vdGVyRmFkZShzY3JvbGxFbCwgdGhpcy5lbCk7XG4gICAgICB9O1xuICAgICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgaGFuZGxlRm9vdGVyRmFkZShzY3JvbGxFbCwgdGhpcy5lbCk7XG4gICAgfTtcbiAgICB0aGlzLmtleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5jaGVja0NvbGxhcHNpYmxlRm9vdGVyKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY2hlY2tDb2xsYXBzaWJsZUZvb3RlcigpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMua2V5Ym9hcmRDdHJsID0gYXdhaXQgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyKGFzeW5jIChrZXlib2FyZE9wZW4sIHdhaXRGb3JSZXNpemUpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGtleWJvYXJkIGlzIGhpZGluZywgdGhlbiB3ZSBuZWVkIHRvIHdhaXRcbiAgICAgICAqIGZvciB0aGUgd2VidmlldyB0byByZXNpemUuIE90aGVyd2lzZSwgdGhlIGZvb3RlclxuICAgICAgICogd2lsbCBmbGlja2VyIGJlZm9yZSB0aGUgd2VidmlldyByZXNpemVzLlxuICAgICAgICovXG4gICAgICBpZiAoa2V5Ym9hcmRPcGVuID09PSBmYWxzZSAmJiB3YWl0Rm9yUmVzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXdhaXQgd2FpdEZvclJlc2l6ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRWaXNpYmxlID0ga2V5Ym9hcmRPcGVuOyAvLyB0cmlnZ2VyIHJlLXJlbmRlciBieSB1cGRhdGluZyBzdGF0ZVxuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkQ3RybCkge1xuICAgICAgdGhpcy5rZXlib2FyZEN0cmwuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBkZXN0cm95Q29sbGFwc2libGVGb290ZXIoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwgJiYgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2x1Y2VudCxcbiAgICAgIGNvbGxhcHNlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXRhYnMnKTtcbiAgICBjb25zdCB0YWJCYXIgPSB0YWJzID09PSBudWxsIHx8IHRhYnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnMucXVlcnlTZWxlY3RvcignOnNjb3BlID4gaW9uLXRhYi1iYXInKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkZGMyMjhmMWExZTdmYTRmNzA3ZGNjZjc0ZGIyNDkwY2EzMjQxMTM3JyxcbiAgICAgIHJvbGU6IFwiY29udGVudGluZm9cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgZm9vdGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgW2Bmb290ZXItdHJhbnNsdWNlbnRgXTogdHJhbnNsdWNlbnQsXG4gICAgICAgIFtgZm9vdGVyLXRyYW5zbHVjZW50LSR7bW9kZX1gXTogdHJhbnNsdWNlbnQsXG4gICAgICAgIFsnZm9vdGVyLXRvb2xiYXItcGFkZGluZyddOiAhdGhpcy5rZXlib2FyZFZpc2libGUgJiYgKCF0YWJCYXIgfHwgdGFiQmFyLnNsb3QgIT09ICdib3R0b20nKSxcbiAgICAgICAgW2Bmb290ZXItY29sbGFwc2UtJHtjb2xsYXBzZX1gXTogY29sbGFwc2UgIT09IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sIG1vZGUgPT09ICdpb3MnICYmIHRyYW5zbHVjZW50ICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZTE2ZWQ0OTYzZmY5NGUwNmRlNzdlYjgwMzgyMDE4MjBhZjczOTM3YycsXG4gICAgICBjbGFzczogXCJmb290ZXItYmFja2dyb3VuZFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2YxODY5MzRmZWJmODVkMzcxMzNkOTM1MWE5NmMxYTY0YjBhNGIyMDMnXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkZvb3Rlci5zdHlsZSA9IHtcbiAgaW9zOiBJb25Gb290ZXJJb3NTdHlsZTAsXG4gIG1kOiBJb25Gb290ZXJNZFN0eWxlMFxufTtcbmNvbnN0IFRSQU5TSVRJT04gPSAnYWxsIDAuMnMgZWFzZS1pbi1vdXQnO1xuY29uc3QgY2xvbmVFbGVtZW50ID0gdGFnTmFtZSA9PiB7XG4gIGNvbnN0IGdldENhY2hlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0YWdOYW1lfS5pb24tY2xvbmVkLWVsZW1lbnRgKTtcbiAgaWYgKGdldENhY2hlZEVsICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldENhY2hlZEVsO1xuICB9XG4gIGNvbnN0IGNsb25lZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgY2xvbmVkRWwuY2xhc3NMaXN0LmFkZCgnaW9uLWNsb25lZC1lbGVtZW50Jyk7XG4gIGNsb25lZEVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbCk7XG4gIHJldHVybiBjbG9uZWRFbDtcbn07XG5jb25zdCBjcmVhdGVIZWFkZXJJbmRleCA9IGhlYWRlckVsID0+IHtcbiAgaWYgKCFoZWFkZXJFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0b29sYmFycyA9IGhlYWRlckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10b29sYmFyJyk7XG4gIHJldHVybiB7XG4gICAgZWw6IGhlYWRlckVsLFxuICAgIHRvb2xiYXJzOiBBcnJheS5mcm9tKHRvb2xiYXJzKS5tYXAodG9vbGJhciA9PiB7XG4gICAgICBjb25zdCBpb25UaXRsZUVsID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKCdpb24tdGl0bGUnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsOiB0b29sYmFyLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b29sYmFyLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItYmFja2dyb3VuZCcpLFxuICAgICAgICBpb25UaXRsZUVsLFxuICAgICAgICBpbm5lclRpdGxlRWw6IGlvblRpdGxlRWwgPyBpb25UaXRsZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItdGl0bGUnKSA6IG51bGwsXG4gICAgICAgIGlvbkJ1dHRvbnNFbDogQXJyYXkuZnJvbSh0b29sYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zJykpXG4gICAgICB9O1xuICAgIH0pXG4gIH07XG59O1xuY29uc3QgaGFuZGxlQ29udGVudFNjcm9sbCA9IChzY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgsIGNvbnRlbnRFbCkgPT4ge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMSwgMSArIC1zY3JvbGxUb3AgLyA1MDAsIDEuMSk7XG4gICAgLy8gTmF0aXZlIHJlZnJlc2hlciBzaG91bGQgbm90IGNhdXNlIHRpdGxlcyB0byBzY2FsZVxuICAgIGNvbnN0IG5hdGl2ZVJlZnJlc2hlciA9IGNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUnKTtcbiAgICBpZiAobmF0aXZlUmVmcmVzaGVyID09PSBudWxsKSB7XG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBzY2FsZUxhcmdlVGl0bGVzKHNjcm9sbEhlYWRlckluZGV4LnRvb2xiYXJzLCBzY2FsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eSA9IChoZWFkZXJFbCwgb3BhY2l0eSkgPT4ge1xuICAvKipcbiAgICogRmFkaW5nIGluIHRoZSBiYWNrZHJvcCBvcGFjaXR5XG4gICAqIHNob3VsZCBoYXBwZW4gYWZ0ZXIgdGhlIGxhcmdlIHRpdGxlXG4gICAqIGhhcyBjb2xsYXBzZWQsIHNvIGl0IGlzIGhhbmRsZWRcbiAgICogYnkgaGFuZGxlSGVhZGVyRmFkZSgpXG4gICAqL1xuICBpZiAoaGVhZGVyRWwuY29sbGFwc2UgPT09ICdmYWRlJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGVhZGVyRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tb3BhY2l0eS1zY2FsZScpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBvcGFjaXR5LnRvU3RyaW5nKCkpO1xuICB9XG59O1xuY29uc3QgaGFuZGxlVG9vbGJhckJvcmRlckludGVyc2VjdGlvbiA9IChldiwgbWFpbkhlYWRlckluZGV4LCBzY3JvbGxUb3ApID0+IHtcbiAgaWYgKCFldlswXS5pc0ludGVyc2VjdGluZykge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogVGhlcmUgaXMgYSBidWcgaW4gU2FmYXJpIHdoZXJlIG92ZXJmbG93IHNjcm9sbGluZyBvbiBhIG5vbi1ib2R5IGVsZW1lbnRcbiAgICogZG9lcyBub3QgYWx3YXlzIHJlc2V0IHRoZSBzY3JvbGxUb3AgcG9zaXRpb24gdG8gMCB3aGVuIGxldHRpbmcgZ28uIEl0IHdpbGxcbiAgICogc2V0IHRvIDEgb25jZSB0aGUgcnViYmVyIGJhbmQgZWZmZWN0IGhhcyBlbmRlZC4gVGhpcyBjYXVzZXMgdGhlIGJhY2tncm91bmQgdG9cbiAgICogYXBwZWFyIHNsaWdodGx5IG9uIGNlcnRhaW4gYXBwIHNldHVwcy5cbiAgICpcbiAgICogQWRkaXRpb25hbGx5LCB3ZSBjaGVjayBpZiB1c2VyIGlzIHJ1YmJlciBiYW5kaW5nIChzY3JvbGxpbmcgaXMgbmVnYXRpdmUpXG4gICAqIGFzIHRoaXMgY2FuIG1lYW4gdGhleSBhcmUgdXNpbmcgcHVsbCB0byByZWZyZXNoLiBPbmNlIHRoZSByZWZyZXNoZXIgc3RhcnRzLFxuICAgKiB0aGUgY29udGVudCBpcyB0cmFuc2Zvcm1lZCB3aGljaCBjYW4gY2F1c2UgdGhlIGludGVyc2VjdGlvbiBvYnNlcnZlciB0byBlcnJvbmVvdXNseVxuICAgKiBmaXJlIGhlcmUgYXMgd2VsbC5cbiAgICovXG4gIGNvbnN0IHNjYWxlID0gZXZbMF0uaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjkgfHwgc2Nyb2xsVG9wIDw9IDAgPyAwIDogKDEgLSBldlswXS5pbnRlcnNlY3Rpb25SYXRpbykgKiAxMDAgLyA3NTtcbiAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC5lbCwgc2NhbGUgPT09IDEgPyB1bmRlZmluZWQgOiBzY2FsZSk7XG59O1xuLyoqXG4gKiBJZiB0b29sYmFycyBhcmUgaW50ZXJzZWN0aW5nLCBoaWRlIHRoZSBzY3JvbGxhYmxlIHRvb2xiYXIgY29udGVudFxuICogYW5kIHNob3cgdGhlIHByaW1hcnkgdG9vbGJhciBjb250ZW50LiBJZiB0aGUgdG9vbGJhcnMgYXJlIG5vdCBpbnRlcnNlY3RpbmcsXG4gKiBoaWRlIHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudCBhbmQgc2hvdyB0aGUgc2Nyb2xsYWJsZSB0b29sYmFyIGNvbnRlbnRcbiAqL1xuY29uc3QgaGFuZGxlVG9vbGJhckludGVyc2VjdGlvbiA9IChldixcbi8vIFRPRE8oRlctMjgzMik6IHR5cGUgKEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSB0cmlnZ2VycyBlcnJvcnMgd2hpY2ggc2hvdWxkIGJlIHNvcnRlZClcbm1haW5IZWFkZXJJbmRleCwgc2Nyb2xsSGVhZGVySW5kZXgsIHNjcm9sbEVsKSA9PiB7XG4gIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGhhbmRsZVRvb2xiYXJCb3JkZXJJbnRlcnNlY3Rpb24oZXYsIG1haW5IZWFkZXJJbmRleCwgc2Nyb2xsVG9wKTtcbiAgICBjb25zdCBldmVudCA9IGV2WzBdO1xuICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGV2ZW50LmludGVyc2VjdGlvblJlY3Q7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvbi53aWR0aCAqIGludGVyc2VjdGlvbi5oZWlnaHQ7XG4gICAgY29uc3Qgcm9vdEFyZWEgPSBldmVudC5yb290Qm91bmRzLndpZHRoICogZXZlbnQucm9vdEJvdW5kcy5oZWlnaHQ7XG4gICAgY29uc3QgaXNQYWdlSGlkZGVuID0gaW50ZXJzZWN0aW9uQXJlYSA9PT0gMCAmJiByb290QXJlYSA9PT0gMDtcbiAgICBjb25zdCBsZWZ0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5sZWZ0IC0gZXZlbnQuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5yaWdodCAtIGV2ZW50LmJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCk7XG4gICAgY29uc3QgaXNQYWdlVHJhbnNpdGlvbmluZyA9IGludGVyc2VjdGlvbkFyZWEgPiAwICYmIChsZWZ0RGlmZiA+PSA1IHx8IHJpZ2h0RGlmZiA+PSA1KTtcbiAgICBpZiAoaXNQYWdlSGlkZGVuIHx8IGlzUGFnZVRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZXJlIGlzIGEgYnVnIHdpdGggSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb24gU2FmYXJpXG4gICAgICAgKiB3aGVyZSBgZXZlbnQuaXNJbnRlcnNlY3RpbmcgPT09IGZhbHNlYCB3aGVuIGNhbmNlbGxpbmdcbiAgICAgICAqIGEgc3dpcGUgdG8gZ28gYmFjayBnZXN0dXJlLiBDaGVja2luZyB0aGUgaW50ZXJzZWN0aW9uXG4gICAgICAgKiB4LCB5LCB3aWR0aCwgYW5kIGhlaWdodCBwcm92aWRlcyBhIHdvcmthcm91bmQuIFRoaXMgYnVnXG4gICAgICAgKiBkb2VzIG5vdCBoYXBwZW4gd2hlbiB1c2luZyBTYWZhcmkgKyBXZWIgQW5pbWF0aW9ucyxcbiAgICAgICAqIG9ubHkgU2FmYXJpICsgQ1NTIEFuaW1hdGlvbnMuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGhhc1ZhbGlkSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uLnggPT09IDAgJiYgaW50ZXJzZWN0aW9uLnkgPT09IDAgfHwgaW50ZXJzZWN0aW9uLndpZHRoICE9PSAwICYmIGludGVyc2VjdGlvbi5oZWlnaHQgIT09IDA7XG4gICAgICBpZiAoaGFzVmFsaWRJbnRlcnNlY3Rpb24gJiYgc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4KTtcbiAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICAgIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eShtYWluSGVhZGVySW5kZXguZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuY29uc3Qgc2V0SGVhZGVyQWN0aXZlID0gKGhlYWRlckluZGV4LCBhY3RpdmUgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsID0gaGVhZGVySW5kZXguZWw7XG4gIGNvbnN0IHRvb2xiYXJzID0gaGVhZGVySW5kZXgudG9vbGJhcnM7XG4gIGNvbnN0IGlvblRpdGxlcyA9IHRvb2xiYXJzLm1hcCh0b29sYmFyID0+IHRvb2xiYXIuaW9uVGl0bGVFbCk7XG4gIGlmIChhY3RpdmUpIHtcbiAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcbiAgICBpb25UaXRsZXMuZm9yRWFjaChpb25UaXRsZSA9PiB7XG4gICAgICBpZiAoaW9uVGl0bGUpIHtcbiAgICAgICAgaW9uVGl0bGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgIC8qKlxuICAgICAqIFRoZSBzbWFsbCB0aXRsZSBzaG91bGQgb25seSBiZSBhY2Nlc3NlZCBieSBzY3JlZW4gcmVhZGVyc1xuICAgICAqIHdoZW4gdGhlIGxhcmdlIHRpdGxlIGNvbGxhcHNlcyBpbnRvIHRoZSBzbWFsbCB0aXRsZSBkdWVcbiAgICAgKiB0byBzY3JvbGxpbmcuXG4gICAgICpcbiAgICAgKiBPcmlnaW5hbGx5LCB0aGUgaGVhZGVyIHdhcyBnaXZlbiBgYXJpYS1oaWRkZW49XCJ0cnVlXCJgXG4gICAgICogYnV0IHRoaXMgY2F1c2VkIGlzc3VlcyB3aXRoIHNjcmVlbiByZWFkZXJzIG5vdCBiZWluZ1xuICAgICAqIGFibGUgdG8gYWNjZXNzIGFueSBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaW9uVGl0bGVzLmZvckVhY2goaW9uVGl0bGUgPT4ge1xuICAgICAgaWYgKGlvblRpdGxlKSB7XG4gICAgICAgIGlvblRpdGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuY29uc3Qgc2NhbGVMYXJnZVRpdGxlcyA9ICh0b29sYmFycyA9IFtdLCBzY2FsZSA9IDEsIHRyYW5zaXRpb24gPSBmYWxzZSkgPT4ge1xuICB0b29sYmFycy5mb3JFYWNoKHRvb2xiYXIgPT4ge1xuICAgIGNvbnN0IGlvblRpdGxlID0gdG9vbGJhci5pb25UaXRsZUVsO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gdG9vbGJhci5pbm5lclRpdGxlRWw7XG4gICAgaWYgKCFpb25UaXRsZSB8fCBpb25UaXRsZS5zaXplICE9PSAnbGFyZ2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uID8gVFJBTlNJVElPTiA6ICcnO1xuICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlgO1xuICB9KTtcbn07XG5jb25zdCBoYW5kbGVIZWFkZXJGYWRlID0gKHNjcm9sbEVsLCBiYXNlRWwsIGNvbmRlbnNlSGVhZGVyKSA9PiB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgY29uc3QgYmFzZUVsSGVpZ2h0ID0gYmFzZUVsLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBmYWRlU3RhcnQgPSBjb25kZW5zZUhlYWRlciA/IGNvbmRlbnNlSGVhZGVyLmNsaWVudEhlaWdodCA6IDA7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHVzaW5nIGZhZGUgaGVhZGVyIHdpdGggYSBjb25kZW5zZVxuICAgICAqIGhlYWRlciwgdGhlbiB0aGUgdG9vbGJhciBiYWNrZ3JvdW5kcyBzaG91bGRcbiAgICAgKiBub3QgYmVnaW4gdG8gZmFkZSBpbiB1bnRpbCB0aGUgY29uZGVuc2VcbiAgICAgKiBoZWFkZXIgaGFzIGZ1bGx5IGNvbGxhcHNlZC5cbiAgICAgKlxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIG1haW4gY29udGVudCBzaG91bGQgbm90XG4gICAgICogb3ZlcmZsb3cgb3V0IG9mIHRoZSBjb250YWluZXIgdW50aWwgdGhlXG4gICAgICogY29uZGVuc2UgaGVhZGVyIGhhcyBmdWxseSBjb2xsYXBzZWQuIFdoZW5cbiAgICAgKiB1c2luZyBqdXN0IHRoZSBjb25kZW5zZSBoZWFkZXIgdGhlIGNvbnRlbnRcbiAgICAgKiBzaG91bGQgb3ZlcmZsb3cgb3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgaWYgKGNvbmRlbnNlSGVhZGVyICE9PSBudWxsICYmIHNjcm9sbFRvcCA8IGZhZGVTdGFydCkge1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCAnMCcpO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2NsaXAtcGF0aCcsIGBpbnNldCgke2Jhc2VFbEhlaWdodH1weCAwcHggMHB4IDBweClgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlzdGFuY2VUb1N0YXJ0ID0gc2Nyb2xsVG9wIC0gZmFkZVN0YXJ0O1xuICAgIGNvbnN0IGZhZGVEdXJhdGlvbiA9IDEwO1xuICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMCwgZGlzdGFuY2VUb1N0YXJ0IC8gZmFkZUR1cmF0aW9uLCAxKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2NsaXAtcGF0aCcpO1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBzY2FsZS50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgaGVhZGVySW9zQ3NzID0gXCJpb24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7d2lkdGg6MTAwJTt6LWluZGV4OjEwfWlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZXtwYWRkaW5nLXRvcDp2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCl9LmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBley0tYm9yZGVyLXdpZHRoOjAgMCAwLjU1cHh9QHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpKXsuaGVhZGVyLWJhY2tncm91bmR7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX0uaGVhZGVyLXRyYW5zbHVjZW50LWlvcyBpb24tdG9vbGJhcnstLW9wYWNpdHk6Ljh9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZSAuaGVhZGVyLWJhY2tncm91bmR7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KX19LmhlYWRlci1pb3MuaW9uLW5vLWJvcmRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGV7LS1ib3JkZXItd2lkdGg6MH0uaGVhZGVyLWNvbGxhcHNlLWZhZGUgaW9uLXRvb2xiYXJ7LS1vcGFjaXR5LXNjYWxlOmluaGVyaXR9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZXt6LWluZGV4Ojl9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcntwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjB9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBle3BhZGRpbmctdG9wOjBweDt6LWluZGV4OjF9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcnstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO3otaW5kZXg6MH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZXstLWJvcmRlci13aWR0aDowcHh9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhciBpb24tc2VhcmNoYmFye3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbToxM3B4fS5oZWFkZXItY29sbGFwc2UtbWFpbnstLW9wYWNpdHktc2NhbGU6MX0uaGVhZGVyLWNvbGxhcHNlLW1haW4gaW9uLXRvb2xiYXJ7LS1vcGFjaXR5LXNjYWxlOmluaGVyaXR9LmhlYWRlci1jb2xsYXBzZS1tYWluIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxlLC5oZWFkZXItY29sbGFwc2UtbWFpbiBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zey13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2UtaW4tb3V0fS5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmU6bm90KC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UpIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxlLC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmU6bm90KC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UpIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLWJ1dHRvbnMuYnV0dG9ucy1jb2xsYXBzZXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi10aXRsZSwuaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zLmJ1dHRvbnMtY29sbGFwc2V7dmlzaWJpbGl0eTpoaWRkZW59aW9uLWhlYWRlci5oZWFkZXItaW9zOm5vdCguaGVhZGVyLWNvbGxhcHNlLW1haW4pOmhhcyh+aW9uLWNvbnRlbnQgaW9uLWhlYWRlci5oZWFkZXItaW9zW2NvbGxhcHNlPWNvbmRlbnNlXSx+aW9uLWNvbnRlbnQgaW9uLWhlYWRlci5oZWFkZXItaW9zLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSl7b3BhY2l0eTowfVwiO1xuY29uc3QgSW9uSGVhZGVySW9zU3R5bGUwID0gaGVhZGVySW9zQ3NzO1xuY29uc3QgaGVhZGVyTWRDc3MgPSBcImlvbi1oZWFkZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTt3aWR0aDoxMDAlO3otaW5kZXg6MTB9aW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBle3BhZGRpbmctdG9wOnZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKX0uaGVhZGVyLW1key13ZWJraXQtYm94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNle2Rpc3BsYXk6bm9uZX0uaGVhZGVyLW1kLmlvbi1uby1ib3JkZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfVwiO1xuY29uc3QgSW9uSGVhZGVyTWRTdHlsZTAgPSBoZWFkZXJNZENzcztcbmNvbnN0IEhlYWRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5zZXR1cEZhZGVIZWFkZXIgPSBhc3luYyAoY29udGVudEVsLCBjb25kZW5zZUhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgZmFkaW5nIG9mIHRvb2xiYXJzIG9uIHNjcm9sbFxuICAgICAgICovXG4gICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlSGVhZGVyRmFkZSh0aGlzLnNjcm9sbEVsLCB0aGlzLmVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgICB9O1xuICAgICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgaGFuZGxlSGVhZGVyRmFkZSh0aGlzLnNjcm9sbEVsLCB0aGlzLmVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgfTtcbiAgICB0aGlzLmNvbGxhcHNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXJpYUF0dHJpYnV0ZXModGhpcy5lbCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmNoZWNrQ29sbGFwc2libGVIZWFkZXIoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgfVxuICBhc3luYyBjaGVja0NvbGxhcHNpYmxlSGVhZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGlmIChtb2RlICE9PSAnaW9zJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBjb2xsYXBzZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0NvbmRlbnNlID0gY29sbGFwc2UgPT09ICdjb25kZW5zZSc7XG4gICAgY29uc3QgaGFzRmFkZSA9IGNvbGxhcHNlID09PSAnZmFkZSc7XG4gICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICBpZiAoaGFzQ29uZGVuc2UpIHtcbiAgICAgIGNvbnN0IHBhZ2VFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWFwcCxpb24tcGFnZSwuaW9uLXBhZ2UscGFnZS1pbm5lcicpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gcGFnZUVsID8gZmluZElvbkNvbnRlbnQocGFnZUVsKSA6IG51bGw7XG4gICAgICAvLyBDbG9uZWQgZWxlbWVudHMgYXJlIGFsd2F5cyBuZWVkZWQgaW4gaU9TIHRyYW5zaXRpb25cbiAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY2xvbmVFbGVtZW50KCdpb24tdGl0bGUnKTtcbiAgICAgICAgdGl0bGUuc2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNsb25lRWxlbWVudCgnaW9uLWJhY2stYnV0dG9uJyk7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuc2V0dXBDb25kZW5zZUhlYWRlcihjb250ZW50RWwsIHBhZ2VFbCk7XG4gICAgfSBlbHNlIGlmIChoYXNGYWRlKSB7XG4gICAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHBhZ2VFbCA/IGZpbmRJb25Db250ZW50KHBhZ2VFbCkgOiBudWxsO1xuICAgICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2codGhpcy5lbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmRlbnNlSGVhZGVyID0gY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1oZWFkZXJbY29sbGFwc2U9XCJjb25kZW5zZVwiXScpO1xuICAgICAgYXdhaXQgdGhpcy5zZXR1cEZhZGVIZWFkZXIoY29udGVudEVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgfVxuICB9XG4gIGRlc3Ryb3lDb2xsYXBzaWJsZUhlYWRlcigpIHtcbiAgICBpZiAodGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjaykge1xuICAgICAgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayk7XG4gICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKSB7XG4gICAgICB0aGlzLmNvbGxhcHNpYmxlTWFpbkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY29sbGFwc2UtbWFpbicpO1xuICAgICAgdGhpcy5jb2xsYXBzaWJsZU1haW5IZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGFzeW5jIHNldHVwQ29uZGVuc2VIZWFkZXIoY29udGVudEVsLCBwYWdlRWwpIHtcbiAgICBpZiAoIWNvbnRlbnRFbCB8fCAhcGFnZUVsKSB7XG4gICAgICBwcmludElvbkNvbnRlbnRFcnJvck1zZyh0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY29udGVudEVsKTtcbiAgICBjb25zdCBoZWFkZXJzID0gcGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1oZWFkZXInKTtcbiAgICB0aGlzLmNvbGxhcHNpYmxlTWFpbkhlYWRlciA9IEFycmF5LmZyb20oaGVhZGVycykuZmluZChoZWFkZXIgPT4gaGVhZGVyLmNvbGxhcHNlICE9PSAnY29uZGVuc2UnKTtcbiAgICBpZiAoIXRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1haW5IZWFkZXJJbmRleCA9IGNyZWF0ZUhlYWRlckluZGV4KHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKTtcbiAgICBjb25zdCBzY3JvbGxIZWFkZXJJbmRleCA9IGNyZWF0ZUhlYWRlckluZGV4KHRoaXMuZWwpO1xuICAgIGlmICghbWFpbkhlYWRlckluZGV4IHx8ICFzY3JvbGxIZWFkZXJJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC5lbCwgMCk7XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGludGVyYWN0aW9uIGJldHdlZW4gdG9vbGJhciBjb2xsYXBzZSBhbmRcbiAgICAgKiBzaG93aW5nL2hpZGluZyBjb250ZW50IGluIHRoZSBwcmltYXJ5IGlvbi1oZWFkZXJcbiAgICAgKiBhcyB3ZWxsIGFzIHByb2dyZXNzaXZlbHkgc2hvd2luZy9oaWRpbmcgdGhlIG1haW4gaGVhZGVyXG4gICAgICogYm9yZGVyIGFzIHRoZSB0b3AtbW9zdCB0b29sYmFyIGNvbGxhcHNlcyBvciBleHBhbmRzLlxuICAgICAqL1xuICAgIGNvbnN0IHRvb2xiYXJJbnRlcnNlY3Rpb24gPSBldiA9PiB7XG4gICAgICBoYW5kbGVUb29sYmFySW50ZXJzZWN0aW9uKGV2LCBtYWluSGVhZGVySW5kZXgsIHNjcm9sbEhlYWRlckluZGV4LCB0aGlzLnNjcm9sbEVsKTtcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodG9vbGJhckludGVyc2VjdGlvbiwge1xuICAgICAgcm9vdDogY29udGVudEVsLFxuICAgICAgdGhyZXNob2xkOiBbMC4yNSwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45LCAxXVxuICAgIH0pO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzY3JvbGxIZWFkZXJJbmRleC50b29sYmFyc1tzY3JvbGxIZWFkZXJJbmRleC50b29sYmFycy5sZW5ndGggLSAxXS5lbCk7XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHNjYWxpbmcgb2YgbGFyZ2UgaU9TIHRpdGxlcyBhbmRcbiAgICAgKiBzaG93aW5nL2hpZGluZyBib3JkZXIgb24gbGFzdCB0b29sYmFyXG4gICAgICogaW4gcHJpbWFyeSBoZWFkZXJcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGhhbmRsZUNvbnRlbnRTY3JvbGwodGhpcy5zY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgsIGNvbnRlbnRFbCk7XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzaWJsZU1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbGxhcHNlLW1haW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsdWNlbnQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlIHx8ICdub25lJztcbiAgICAvLyBiYW5uZXIgcm9sZSBtdXN0IGJlIGF0IHRvcCBsZXZlbCwgc28gcmVtb3ZlIHJvbGUgaWYgaW5zaWRlIGEgbWVudVxuICAgIGNvbnN0IHJvbGVUeXBlID0gaG9zdENvbnRleHQoJ2lvbi1tZW51JywgdGhpcy5lbCkgPyAnbm9uZScgOiAnYmFubmVyJztcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2I2Y2MyN2YwYjA4YWZjOWZjYzg4OTY4MzUyNWRhNzY1ZDgwYmE2NzInLFxuICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICBbYGhlYWRlci0ke21vZGV9YF06IHRydWUsXG4gICAgICAgIFtgaGVhZGVyLXRyYW5zbHVjZW50YF06IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgIFtgaGVhZGVyLWNvbGxhcHNlLSR7Y29sbGFwc2V9YF06IHRydWUsXG4gICAgICAgIFtgaGVhZGVyLXRyYW5zbHVjZW50LSR7bW9kZX1gXTogdGhpcy50cmFuc2x1Y2VudFxuICAgICAgfVxuICAgIH0sIGluaGVyaXRlZEF0dHJpYnV0ZXMpLCBtb2RlID09PSAnaW9zJyAmJiB0cmFuc2x1Y2VudCAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzM5NTc2NmQ0ZGNlZTMzOThiYzkxOTYwZGIyMWY5MjIwOTUyOTJmMTQnLFxuICAgICAgY2xhc3M6IFwiaGVhZGVyLWJhY2tncm91bmRcIlxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwOWE2N2VjZTI3YjI1OGZmMTI0ODgwNWQ0M2Q5MmE0OWIyYzY4NTlhJ1xuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5IZWFkZXIuc3R5bGUgPSB7XG4gIGlvczogSW9uSGVhZGVySW9zU3R5bGUwLFxuICBtZDogSW9uSGVhZGVyTWRTdHlsZTBcbn07XG5jb25zdCByb3V0ZXJPdXRsZXRDc3MgPSBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfVwiO1xuY29uc3QgSW9uUm91dGVyT3V0bGV0U3R5bGUwID0gcm91dGVyT3V0bGV0Q3NzO1xuY29uc3QgUm91dGVyT3V0bGV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxDaGFuZ2VcIiwgMyk7XG4gICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdkRpZENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHRoaXMuZGVsZWdhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zd2lwZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgc3dpcGVIYW5kbGVyQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRoaXMuc3dpcGVIYW5kbGVyICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnN3aXBlSGFuZGxlcikge1xuICAgICAgICB0aGlzLnN3aXBlSGFuZGxlci5vblN0YXJ0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL3N3aXBlLWJhY2stMDdkZjIwOTUuanMnKSkuY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSh0aGlzLmVsLCAoKSA9PiAhdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzICYmICEhdGhpcy5zd2lwZUhhbmRsZXIgJiYgdGhpcy5zd2lwZUhhbmRsZXIuY2FuU3RhcnQoKSwgKCkgPT4gb25TdGFydCgpLCBzdGVwID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiAoX2EgPSB0aGlzLmFuaSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2dyZXNzU3RlcChzdGVwKTtcbiAgICB9LCAoc2hvdWxkQ29tcGxldGUsIHN0ZXAsIGR1cikgPT4ge1xuICAgICAgaWYgKHRoaXMuYW5pKSB7XG4gICAgICAgIHRoaXMuYW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVyLm9uRW5kKHNob3VsZENvbXBsZXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICBsZXQgbmV3U3RlcFZhbHVlID0gc2hvdWxkQ29tcGxldGUgPyAtMC4wMDEgOiAwLjAwMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuaW1hdGlvbiB3aWxsIGJlIHJldmVyc2VkIGhlcmUsIHNvIG5lZWQgdG9cbiAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSB0aW1lIHJlbGF0aXZlXG4gICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgKiBpbiB0ZXJtcyBvZiBhIGxpbmVhciBjdXJ2ZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICghc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLmFuaS5lYXNpbmcoJ2N1YmljLWJlemllcigxLCAwLCAwLjY4LCAwLjI4KScpO1xuICAgICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihbMCwgMF0sIFsxLCAwXSwgWzAuNjgsIDAuMjhdLCBbMSwgMV0sIHN0ZXApWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihbMCwgMF0sIFswLjMyLCAwLjcyXSwgWzAsIDFdLCBbMSwgMV0sIHN0ZXApWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgZHVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3dpcGVIYW5kbGVyQ2hhbmdlZCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW9uTmF2V2lsbExvYWQuZW1pdCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgY29tbWl0KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cykge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGNoYW5nZWQgPSBhd2FpdCB0aGlzLnRyYW5zaXRpb24oZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIHNldFJvdXRlSWQoaWQsIHBhcmFtcywgZGlyZWN0aW9uLCBhbmltYXRpb24pIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gYXdhaXQgdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIHtcbiAgICAgIGR1cmF0aW9uOiBkaXJlY3Rpb24gPT09ICdyb290JyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJ2JhY2snIDogJ2ZvcndhcmQnLFxuICAgICAgYW5pbWF0aW9uQnVpbGRlcjogYW5pbWF0aW9uXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWQsXG4gICAgICBlbGVtZW50OiB0aGlzLmFjdGl2ZUVsXG4gICAgfTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVFbDtcbiAgICByZXR1cm4gYWN0aXZlID8ge1xuICAgICAgaWQ6IGFjdGl2ZS50YWdOYW1lLFxuICAgICAgZWxlbWVudDogYWN0aXZlLFxuICAgICAgcGFyYW1zOiB0aGlzLmFjdGl2ZVBhcmFtc1xuICAgIH0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgYXN5bmMgc2V0Um9vdChjb21wb25lbnQsIHBhcmFtcywgb3B0cykge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNvbXBvbmVudCA9PT0gY29tcG9uZW50ICYmIHNoYWxsb3dFcXVhbFN0cmluZ01hcChwYXJhbXMsIHRoaXMuYWN0aXZlUGFyYW1zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBhdHRhY2ggZW50ZXJpbmcgdmlldyB0byBET01cbiAgICBjb25zdCBsZWF2aW5nRWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBhd2FpdCBhdHRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy5lbCwgY29tcG9uZW50LCBbJ2lvbi1wYWdlJywgJ2lvbi1wYWdlLWludmlzaWJsZSddLCBwYXJhbXMpO1xuICAgIHRoaXMuYWN0aXZlQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuYWN0aXZlRWwgPSBlbnRlcmluZ0VsO1xuICAgIHRoaXMuYWN0aXZlUGFyYW1zID0gcGFyYW1zO1xuICAgIC8vIGNvbW1pdCBhbmltYXRpb25cbiAgICBhd2FpdCB0aGlzLmNvbW1pdChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpO1xuICAgIGF3YWl0IGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBsZWF2aW5nRWwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGFzeW5jIHRyYW5zaXRpb24oZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzID0ge30pIHtcbiAgICBpZiAobGVhdmluZ0VsID09PSBlbnRlcmluZ0VsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGVtaXQgbmF2IHdpbGwgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlLmVtaXQoKTtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIG1vZGVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhbmltYXRlZCA9IHRoaXMuYW5pbWF0ZWQgJiYgY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSk7XG4gICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IG9wdHMuYW5pbWF0aW9uQnVpbGRlciB8fCB0aGlzLmFuaW1hdGlvbiB8fCBjb25maWcuZ2V0KCduYXZBbmltYXRpb24nKTtcbiAgICBhd2FpdCB0cmFuc2l0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBtb2RlLFxuICAgICAgYW5pbWF0ZWQsXG4gICAgICBlbnRlcmluZ0VsLFxuICAgICAgbGVhdmluZ0VsLFxuICAgICAgYmFzZUVsOiBlbCxcbiAgICAgIC8qKlxuICAgICAgICogV2UgbmVlZCB0byB3YWl0IGZvciBhbGwgU3RlbmNpbCBjb21wb25lbnRzXG4gICAgICAgKiB0byBiZSByZWFkeSBvbmx5IHdoZW4gdXNpbmcgdGhlIGxhenlcbiAgICAgICAqIGxvYWRlZCBidW5kbGUuXG4gICAgICAgKi9cbiAgICAgIGRlZXBXYWl0OiBoYXNMYXp5QnVpbGQoZWwpLFxuICAgICAgcHJvZ3Jlc3NDYWxsYmFjazogb3B0cy5wcm9ncmVzc0FuaW1hdGlvbiA/IGFuaSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIHRoaXMgcHJvZ3Jlc3MgY2FsbGJhY2sgaXMgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgZ2VzdHVyZSB0byBzdGFydCBhbmQgZW5kIGJlZm9yZVxuICAgICAgICAgKiB0aGUgYW5pbWF0aW9uIGlzIGV2ZXIgc2V0LiBJbiB0aGF0IHNjZW5hcmlvLCB3ZSBzaG91bGRcbiAgICAgICAgICogaW1tZWRpYXRlbHkgY2FsbCBwcm9ncmVzc0VuZCBzbyB0aGF0IHRoZSB0cmFuc2l0aW9uIHByb21pc2VcbiAgICAgICAgICogcmVzb2x2ZXMgYW5kIHRoZSBnZXN0dXJlIGRvZXMgbm90IGdldCBsb2NrZWQgdXAuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoYW5pICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgYW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVyLm9uRW5kKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQbGF5aW5nIGFuaW1hdGlvbiB0byBiZWdpbm5pbmdcbiAgICAgICAgICAgKiB3aXRoIGEgZHVyYXRpb24gb2YgMCBwcmV2ZW50c1xuICAgICAgICAgICAqIGFueSBmbGlja2VyaW5nIHdoZW4gdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAqIGlzIGxhdGVyIGNsZWFuZWQgdXAuXG4gICAgICAgICAgICovXG4gICAgICAgICAgYW5pLnByb2dyZXNzRW5kKDAsIDAsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5pID0gYW5pO1xuICAgICAgICB9XG4gICAgICB9IDogdW5kZWZpbmVkXG4gICAgfSwgb3B0cyksIHtcbiAgICAgIGFuaW1hdGlvbkJ1aWxkZXJcbiAgICB9KSk7XG4gICAgLy8gZW1pdCBuYXYgY2hhbmdlZCBldmVudFxuICAgIHRoaXMuaW9uTmF2RGlkQ2hhbmdlLmVtaXQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzhkMGMxNjNjNWY2MzE1OGUxNmVmMmRiN2NjM2M3NTZjZjU5NzQ2MWQnXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwic3dpcGVIYW5kbGVyXCI6IFtcInN3aXBlSGFuZGxlckNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuUm91dGVyT3V0bGV0LnN0eWxlID0gSW9uUm91dGVyT3V0bGV0U3R5bGUwO1xuY29uc3QgdGl0bGVJb3NDc3MgPSBcIjpob3N0ey0tY29sb3I6aW5pdGlhbDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci10aXRsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLnRpdGxlLXNtYWxsKSAudG9vbGJhci10aXRsZXt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3R7dG9wOjA7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjkwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OTBweDstd2Via2l0LXBhZGRpbmctZW5kOjkwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjkwcHg7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Zm9udC1zaXplOm1pbigxLjA2MjVyZW0sIDIwLjRweCk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC50aXRsZS1zbWFsbCl7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjlweDtwYWRkaW5nLWlubGluZS1zdGFydDo5cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo5cHg7cGFkZGluZy1pbmxpbmUtZW5kOjlweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6bWluKDAuODEyNXJlbSwgMjMuNHB4KTtmb250LXdlaWdodDpub3JtYWx9Omhvc3QoLnRpdGxlLWxhcmdlKXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTJweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTJweDtwYWRkaW5nLWlubGluZS1lbmQ6MTJweDtwYWRkaW5nLXRvcDoycHg7cGFkZGluZy1ib3R0b206NHB4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgY2VudGVyO3Bvc2l0aW9uOnN0YXRpYzstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7bWluLXdpZHRoOjEwMCU7Zm9udC1zaXplOm1pbigyLjEyNXJlbSwgNjEuMnB4KTtmb250LXdlaWdodDo3MDA7dGV4dC1hbGlnbjpzdGFydH06aG9zdCgudGl0bGUtbGFyZ2UudGl0bGUtcnRsKXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyfTpob3N0KC50aXRsZS1sYXJnZS5pb24tY2xvbmVkLWVsZW1lbnQpey0tY29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSl9Omhvc3QoLnRpdGxlLWxhcmdlKSAudG9vbGJhci10aXRsZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46aW5oZXJpdDt0cmFuc2Zvcm0tb3JpZ2luOmluaGVyaXQ7d2lkdGg6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGl0bGUtbGFyZ2UpIC50b29sYmFyLXRpdGxlLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1sYXJnZSAudG9vbGJhci10aXRsZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gaW5oZXJpdCk7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBpbmhlcml0KX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgudGl0bGUtbGFyZ2U6ZGlyKHJ0bCkpIC50b29sYmFyLXRpdGxley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBpbmhlcml0KTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGluaGVyaXQpfX1cIjtcbmNvbnN0IElvblRpdGxlSW9zU3R5bGUwID0gdGl0bGVJb3NDc3M7XG5jb25zdCB0aXRsZU1kQ3NzID0gXCI6aG9zdHstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvb2xiYXItdGl0bGV7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czphdXRvfTpob3N0KC50aXRsZS1zbWFsbCkgLnRvb2xiYXItdGl0bGV7d2hpdGUtc3BhY2U6bm9ybWFsfTpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MS4yNXJlbTtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6MC4wMTI1ZW19Omhvc3QoLnRpdGxlLXNtYWxsKXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZTowLjkzNzVyZW07Zm9udC13ZWlnaHQ6bm9ybWFsfVwiO1xuY29uc3QgSW9uVGl0bGVNZFN0eWxlMCA9IHRpdGxlTWRDc3M7XG5jb25zdCBUb29sYmFyVGl0bGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIHNpemVDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBlbWl0U3R5bGUoKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zaXplIDogJ2RlZmF1bHQnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnM2Y3YjE5Yzk5OTYxZGJiODZjMGE5MjUyMTgzMzI1MjhiMjJlNjg4MCcsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgJ3RpdGxlLXJ0bCc6IGRvY3VtZW50LmRpciA9PT0gJ3J0bCdcbiAgICAgIH0pXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICcxMjA1NGZiZGQ2MGU0MGExNTg3NWU0NDJjMjAxNDM3NjZmYzM0ZmMzJyxcbiAgICAgIGNsYXNzOiBcInRvb2xiYXItdGl0bGVcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzlmMTRmYjE0YTY3ZDRiZDFlNDUzNmE0ZDY0YTYzN2ZiZTVhMTUxYzcnXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJzaXplXCI6IFtcInNpemVDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcblRvb2xiYXJUaXRsZS5zdHlsZSA9IHtcbiAgaW9zOiBJb25UaXRsZUlvc1N0eWxlMCxcbiAgbWQ6IElvblRpdGxlTWRTdHlsZTBcbn07XG5jb25zdCB0b29sYmFySW9zQ3NzID0gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tb3BhY2l0eToxOy0tb3BhY2l0eS1zY2FsZToxOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46Y29udGVudDt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIC50b29sYmFyLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvb2xiYXItY29udGFpbmVyey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRvb2xiYXItYmFja2dyb3VuZHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTpjYWxjKHZhcigtLW9wYWNpdHkpICogdmFyKC0tb3BhY2l0eS1zY2FsZSkpO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjdmN2Y3KSkpOy0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSkpOy0tcGFkZGluZy10b3A6M3B4Oy0tcGFkZGluZy1ib3R0b206M3B4Oy0tcGFkZGluZy1zdGFydDo0cHg7LS1wYWRkaW5nLWVuZDo0cHg7LS1taW4taGVpZ2h0OjQ0cHh9LnRvb2xiYXItY29udGVudHstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1vcmRlcjo0O29yZGVyOjQ7bWluLXdpZHRoOjB9Omhvc3QoLnRvb2xiYXItc2VnbWVudCkgLnRvb2xiYXItY29udGVudHtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KC50b29sYmFyLXNlYXJjaGJhcikgLnRvb2xiYXItY29udGFpbmVye3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH06aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIDo6c2xvdHRlZCgqKXstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6c3RhcnR9Omhvc3QoLnRvb2xiYXItc2VhcmNoYmFyKSA6OnNsb3R0ZWQoaW9uLWNoaXApe21hcmdpbi10b3A6M3B4fTo6c2xvdHRlZChpb24tYnV0dG9ucyl7bWluLWhlaWdodDozOHB4fTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn06OnNsb3R0ZWQoW3Nsb3Q9c2Vjb25kYXJ5XSl7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfTo6c2xvdHRlZChbc2xvdD1wcmltYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1O3RleHQtYWxpZ246ZW5kfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1vcmRlcjo2O29yZGVyOjY7dGV4dC1hbGlnbjplbmR9Omhvc3QoLnRvb2xiYXItdGl0bGUtbGFyZ2UpIC50b29sYmFyLWNvbnRhaW5lcnstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdCgudG9vbGJhci10aXRsZS1sYXJnZSkgLnRvb2xiYXItY29udGVudCBpb24tdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4O21pbi13aWR0aDoxMDAlfVwiO1xuY29uc3QgSW9uVG9vbGJhcklvc1N0eWxlMCA9IHRvb2xiYXJJb3NDc3M7XG5jb25zdCB0b29sYmFyTWRDc3MgPSBcIjpob3N0ey0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1vcGFjaXR5OjE7LS1vcGFjaXR5LXNjYWxlOjE7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpjb250ZW50O3otaW5kZXg6MTA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvb2xiYXItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci1jb250YWluZXJ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7Y29udGFpbjpjb250ZW50O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0udG9vbGJhci1iYWNrZ3JvdW5ke2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOnN0cmljdDtvcGFjaXR5OmNhbGModmFyKC0tb3BhY2l0eSkgKiB2YXIoLS1vcGFjaXR5LXNjYWxlKSk7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24tcHJvZ3Jlc3MtYmFyKXtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzQyNDI0MikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgI2MxYzRjZCkpKSk7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7LS1taW4taGVpZ2h0OjU2cHh9LnRvb2xiYXItY29udGVudHstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1vcmRlcjozO29yZGVyOjM7bWluLXdpZHRoOjA7bWF4LXdpZHRoOjEwMCV9OjpzbG90dGVkKC5idXR0b25zLWZpcnN0LXNsb3Qpey13ZWJraXQtbWFyZ2luLXN0YXJ0OjRweDttYXJnaW4taW5saW5lLXN0YXJ0OjRweH06OnNsb3R0ZWQoLmJ1dHRvbnMtbGFzdC1zbG90KXstd2Via2l0LW1hcmdpbi1lbmQ6NHB4O21hcmdpbi1pbmxpbmUtZW5kOjRweH06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9OjpzbG90dGVkKFtzbG90PXNlY29uZGFyeV0pey1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NH06OnNsb3R0ZWQoW3Nsb3Q9cHJpbWFyeV0pey1tcy1mbGV4LW9yZGVyOjU7b3JkZXI6NTt0ZXh0LWFsaWduOmVuZH06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXgtb3JkZXI6NjtvcmRlcjo2O3RleHQtYWxpZ246ZW5kfVwiO1xuY29uc3QgSW9uVG9vbGJhck1kU3R5bGUwID0gdG9vbGJhck1kQ3NzO1xuY29uc3QgVG9vbGJhciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jaGlsZHJlblN0eWxlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKSk7XG4gICAgY29uc3QgZmlyc3RCdXR0b25zID0gYnV0dG9ucy5maW5kKGJ1dHRvbiA9PiB7XG4gICAgICByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdzdGFydCc7XG4gICAgfSk7XG4gICAgaWYgKGZpcnN0QnV0dG9ucykge1xuICAgICAgZmlyc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZmlyc3Qtc2xvdCcpO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25zUmV2ZXJzZWQgPSBidXR0b25zLnJldmVyc2UoKTtcbiAgICBjb25zdCBsYXN0QnV0dG9ucyA9IGJ1dHRvbnNSZXZlcnNlZC5maW5kKGJ1dHRvbiA9PiBidXR0b24uc2xvdCA9PT0gJ2VuZCcpIHx8IGJ1dHRvbnNSZXZlcnNlZC5maW5kKGJ1dHRvbiA9PiBidXR0b24uc2xvdCA9PT0gJ3ByaW1hcnknKSB8fCBidXR0b25zUmV2ZXJzZWQuZmluZChidXR0b24gPT4gYnV0dG9uLnNsb3QgPT09ICdzZWNvbmRhcnknKTtcbiAgICBpZiAobGFzdEJ1dHRvbnMpIHtcbiAgICAgIGxhc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtbGFzdC1zbG90Jyk7XG4gICAgfVxuICB9XG4gIGNoaWxkcmVuU3R5bGUoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0YWdOYW1lID0gZXYudGFyZ2V0LnRhZ05hbWU7XG4gICAgY29uc3QgdXBkYXRlZFN0eWxlcyA9IGV2LmRldGFpbDtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7fTtcbiAgICBjb25zdCBjaGlsZFN0eWxlcyA9IHRoaXMuY2hpbGRyZW5TdHlsZXMuZ2V0KHRhZ05hbWUpIHx8IHt9O1xuICAgIGxldCBoYXNTdHlsZUNoYW5nZSA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKHVwZGF0ZWRTdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkS2V5ID0gYHRvb2xiYXItJHtrZXl9YDtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdXBkYXRlZFN0eWxlc1trZXldO1xuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjaGlsZFN0eWxlc1tjaGlsZEtleV0pIHtcbiAgICAgICAgaGFzU3R5bGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIG5ld1N0eWxlc1tjaGlsZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChoYXNTdHlsZUNoYW5nZSkge1xuICAgICAgdGhpcy5jaGlsZHJlblN0eWxlcy5zZXQodGFnTmFtZSwgbmV3U3R5bGVzKTtcbiAgICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgY2hpbGRTdHlsZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuU3R5bGVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihjaGlsZFN0eWxlcywgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzQwMmFmZTdjZTBjOTc4ODNjZWRkMGU0OGE1YTA0OTJhOWJmZTc2YWUnLFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRTdHlsZXMpLCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpbi10b29sYmFyJzogaG9zdENvbnRleHQoJ2lvbi10b29sYmFyJywgdGhpcy5lbClcbiAgICAgIH0pKVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMjQ2NWE2ZGM4ZDUwN2VjNjUwNTM4Mzc4ZDFiZTJhYmQzOTljNThhZCcsXG4gICAgICBjbGFzczogXCJ0b29sYmFyLWJhY2tncm91bmRcIixcbiAgICAgIHBhcnQ6IFwiYmFja2dyb3VuZFwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNjA3NTA5NmFmZDEyMzAzYjk2MWU0ZmU5YWQzNDVlZjI4ODc1NzNhZicsXG4gICAgICBjbGFzczogXCJ0b29sYmFyLWNvbnRhaW5lclwiLFxuICAgICAgcGFydDogXCJjb250YWluZXJcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzhiN2VlYzExNDhjZmViMzM5ZDg3Y2RmOTI3M2YyMTA0NzAzZTc2MDEnLFxuICAgICAgbmFtZTogXCJzdGFydFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2IxMDJkMzkyNmNhZGUyNGZhZjc4YjdhZjc4YWQ1ZTE5MmM0YzAzMDgnLFxuICAgICAgbmFtZTogXCJzZWNvbmRhcnlcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2M2YWIyZTk3ODMyODMyNGM2ZjllNzg5MjAyNGNiY2Q4Yjg5ODcwNjcnLFxuICAgICAgY2xhc3M6IFwidG9vbGJhci1jb250ZW50XCIsXG4gICAgICBwYXJ0OiBcImNvbnRlbnRcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzg2Zjg5NTJjNDM1NWE5ZGY1YjRiYmI5NWU5ZDBjYWZlZmQyNzJkNWInXG4gICAgfSkpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc1MDFlNDM0MzFkYTZiOWRkMzViNDdiNzkyMjJmOTQ4ZDQ0NWY3YTc4JyxcbiAgICAgIG5hbWU6IFwicHJpbWFyeVwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzg0YmYxYTE1YTVlNTJlOGU5NGRmOWY0NzljNGNlMTgwMDRmNWFiNTcnLFxuICAgICAgbmFtZTogXCJlbmRcIlxuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuVG9vbGJhci5zdHlsZSA9IHtcbiAgaW9zOiBJb25Ub29sYmFySW9zU3R5bGUwLFxuICBtZDogSW9uVG9vbGJhck1kU3R5bGUwXG59O1xuZXhwb3J0IHsgQXBwIGFzIGlvbl9hcHAsIEJ1dHRvbnMgYXMgaW9uX2J1dHRvbnMsIENvbnRlbnQgYXMgaW9uX2NvbnRlbnQsIEZvb3RlciBhcyBpb25fZm9vdGVyLCBIZWFkZXIgYXMgaW9uX2hlYWRlciwgUm91dGVyT3V0bGV0IGFzIGlvbl9yb3V0ZXJfb3V0bGV0LCBUb29sYmFyVGl0bGUgYXMgaW9uX3RpdGxlLCBUb29sYmFyIGFzIGlvbl90b29sYmFyIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLElBQU0sU0FBUztBQUNmLElBQU0sZUFBZTtBQUNyQixJQUFNLE1BQU0sTUFBTTtBQUFBLEVBQ2hCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQUEsRUFDaEM7QUFBQSxFQUNBLG1CQUFtQjtBQUNqQjtBQUNFLFVBQUksTUFBWTtBQUNkLGNBQU0sV0FBVyxXQUFXLFFBQVEsUUFBUTtBQUM1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
