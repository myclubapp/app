import {
  menuController
} from "./chunk-R3N6CFPK.js";
import {
  getTimeGivenProgression
} from "./chunk-6NM256MY.js";
import {
  menuOutline,
  menuSharp
} from "./chunk-Y2OY2WAF.js";
import {
  BACKDROP,
  GESTURE,
  focusFirstDescendant,
  focusLastDescendant,
  getPresentedOverlay
} from "./chunk-HYGHPGGJ.js";
import "./chunk-BKPN4S4N.js";
import "./chunk-U6MFTC2E.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import {
  assert,
  clamp,
  inheritAriaAttributes,
  isEndSide
} from "./chunk-RRWPYKYY.js";
import {
  GESTURE_CONTROLLER
} from "./chunk-F4BDZKIT.js";
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
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js
var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
var IonMenuIosStyle0 = menuIosCss;
var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
var IonMenuMdStyle0 = menuMdCss;
var iosEasing = "cubic-bezier(0.32,0.72,0,1)";
var mdEasing = "cubic-bezier(0.0,0.0,0.2,1)";
var iosEasingReverse = "cubic-bezier(1, 0, 0.68, 0.28)";
var mdEasingReverse = "cubic-bezier(0.4, 0, 0.6, 1)";
var Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionWillOpen = createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = createEvent(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    this.didLoad = false;
    this.operationCancelled = false;
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = (ev) => {
      const lastOverlay = getPresentedOverlay(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.contentId = void 0;
    this.menuId = void 0;
    this.type = void 0;
    this.disabled = false;
    this.side = "start";
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== void 0) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute("style");
    }
    if (this.menuInnerEl) {
      this.menuInnerEl.removeAttribute("style");
    }
    this.animation = void 0;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = isEndSide(this.side);
    this.animation = void 0;
  }
  swipeGestureChanged() {
    this.updateState();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (typeof customElements !== "undefined" && customElements != null) {
        yield customElements.whenDefined("ion-menu");
      }
      if (this.type === void 0) {
        this.type = config.get("menuType", "overlay");
      }
      const content = this.contentId !== void 0 ? document.getElementById(this.contentId) : null;
      if (content === null) {
        console.error('Menu: must have a "content" element to listen for drag events on.');
        return;
      }
      if (this.el.contains(content)) {
        console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
      }
      this.contentEl = content;
      content.classList.add("menu-content");
      this.typeChanged(this.type, void 0);
      this.sideChanged();
      menuController._register(this);
      this.menuChanged();
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el: document,
        gestureName: "menu-swipe",
        gesturePriority: 30,
        threshold: 10,
        blurOnStart: true,
        canStart: (ev) => this.canStart(ev),
        onWillStart: () => this.onWillStart(),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.updateState();
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      const splitPane = this.el.closest("ion-split-pane");
      if (splitPane !== null) {
        this.isPaneVisible = yield splitPane.isVisible();
      }
      this.menuChanged();
      this.updateState();
    });
  }
  menuChanged() {
    if (this.didLoad) {
      this.ionMenuChange.emit({
        disabled: this.disabled,
        open: this._isOpen
      });
    }
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      yield this.close(false);
      this.blocker.destroy();
      menuController._unregister(this);
      if (this.animation) {
        this.animation.destroy();
      }
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = void 0;
      }
      this.animation = void 0;
      this.contentEl = void 0;
    });
  }
  onSplitPaneChanged(ev) {
    const closestSplitPane = this.el.closest("ion-split-pane");
    if (closestSplitPane !== null && closestSplitPane === ev.target) {
      this.isPaneVisible = ev.detail.visible;
      this.updateState();
    }
  }
  onBackdropClick(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close(void 0, BACKDROP);
      }
    }
  }
  onKeydown(ev) {
    if (ev.key === "Escape") {
      this.close(void 0, BACKDROP);
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  close(animated = true, role) {
    return this.setOpen(false, animated, role);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  setOpen(shouldOpen, animated = true, role) {
    return menuController._setOpen(this, shouldOpen, animated, role);
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    if (this.el.contains(target)) {
      this.lastFocus = target;
    } else {
      const {
        el
      } = this;
      focusFirstDescendant(el);
      if (this.lastFocus === doc.activeElement) {
        focusLastDescendant(el);
      }
    }
  }
  _setOpen(shouldOpen, animated = true, role) {
    return __async(this, null, function* () {
      if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
        return false;
      }
      this.beforeAnimation(shouldOpen, role);
      yield this.loadAnimation();
      yield this.startAnimation(shouldOpen, animated);
      if (this.operationCancelled) {
        this.operationCancelled = false;
        return false;
      }
      this.afterAnimation(shouldOpen, role);
      return true;
    });
  }
  loadAnimation() {
    return __async(this, null, function* () {
      const width = this.menuInnerEl.offsetWidth;
      const isEndSide$1 = isEndSide(this.side);
      if (width === this.width && this.animation !== void 0 && isEndSide$1 === this.isEndSide) {
        return;
      }
      this.width = width;
      this.isEndSide = isEndSide$1;
      if (this.animation) {
        this.animation.destroy();
        this.animation = void 0;
      }
      const animation = this.animation = yield menuController._createAnimation(this.type, this);
      if (!config.getBoolean("animated", true)) {
        animation.duration(0);
      }
      animation.fill("both");
    });
  }
  startAnimation(shouldOpen, animated) {
    return __async(this, null, function* () {
      const isReversed = !shouldOpen;
      const mode = getIonMode(this);
      const easing = mode === "ios" ? iosEasing : mdEasing;
      const easingReverse = mode === "ios" ? iosEasingReverse : mdEasingReverse;
      const ani = this.animation.direction(isReversed ? "reverse" : "normal").easing(isReversed ? easingReverse : easing);
      if (animated) {
        yield ani.play();
      } else {
        ani.play({
          sync: true
        });
      }
      if (ani.getDirection() === "reverse") {
        ani.direction("normal");
      }
    });
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    const isModalPresented = !!document.querySelector("ion-modal.show-modal");
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    } else if (menuController._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen, GESTURE);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide2 = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide2);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen ? isEndSide2 ? shouldCompleteRight : shouldCompleteLeft : isEndSide2 ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    let newStepValue = shouldComplete ? 1e-3 : -1e-3;
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    newStepValue += getTimeGivenProgression([0, 0], [0.4, 0], [0.6, 1], [1, 1], clamp(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(() => this.afterAnimation(shouldOpen, GESTURE), {
      oneTimeCallback: true
    }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen, role) {
    assert(!this.isAnimating, "_before() should not be called while animating");
    if (isPlatform("android")) {
      this.el.setAttribute("aria-hidden", "true");
    }
    this.el.classList.add(SHOW_MENU);
    this.el.setAttribute("tabindex", "0");
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      this.contentEl.setAttribute("aria-hidden", "true");
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    } else {
      this.ionWillClose.emit({
        role
      });
    }
  }
  afterAnimation(isOpen, role) {
    var _a;
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      if (isPlatform("android")) {
        this.el.removeAttribute("aria-hidden");
      }
      this.ionDidOpen.emit();
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest("ion-menu");
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      document.addEventListener("focus", this.handleFocus, true);
    } else {
      this.el.removeAttribute("aria-hidden");
      this.el.classList.remove(SHOW_MENU);
      this.el.removeAttribute("tabindex");
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        this.contentEl.removeAttribute("aria-hidden");
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      this.ionDidClose.emit({
        role
      });
      document.removeEventListener("focus", this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    if (!isActive) {
      if (this.isAnimating) {
        this.operationCancelled = true;
      }
      this.afterAnimation(false, GESTURE);
    }
  }
  render() {
    const {
      type,
      disabled,
      el,
      isPaneVisible,
      inheritedAttributes,
      side
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "342db8551d26604128b29b21d2d8c37593972ed9",
      onKeyDown: shouldUseCloseWatcher() ? null : this.onKeydown,
      role: "navigation",
      "aria-label": inheritedAttributes["aria-label"] || "menu",
      class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        "menu-enabled": !disabled,
        [`menu-side-${side}`]: true,
        "menu-pane-visible": isPaneVisible,
        "split-pane-side": hostContext("ion-split-pane", el)
      }
    }, h("div", {
      key: "3c9bec2862b7fb9d88de66b1600be01f6735e3dd",
      class: "menu-inner",
      part: "container",
      ref: (el2) => this.menuInnerEl = el2
    }, h("slot", {
      key: "76283b4b2a65c78646f92c3b273eea021eda499c"
    })), h("ion-backdrop", {
      key: "121c395bc4873542a1b6ae2c9e23f2e881e75d93",
      ref: (el2) => this.backdropEl = el2,
      class: "menu-backdrop",
      tappable: false,
      stopPropagation: false,
      part: "backdrop"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "type": ["typeChanged"],
      "disabled": ["disabledChanged"],
      "side": ["sideChanged"],
      "swipeGesture": ["swipeGestureChanged"]
    };
  }
};
var computeDelta = (deltaX, isOpen, isEndSide2) => {
  return Math.max(0, isOpen !== isEndSide2 ? -deltaX : deltaX);
};
var checkEdgeSide = (win, posX, isEndSide2, maxEdgeStart) => {
  if (isEndSide2) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
var SHOW_MENU = "show-menu";
var SHOW_BACKDROP = "show-backdrop";
var MENU_CONTENT_OPEN = "menu-content-open";
Menu.style = {
  ios: IonMenuIosStyle0,
  md: IonMenuMdStyle0
};
var updateVisibility = (menu) => __async(void 0, null, function* () {
  const menuEl = yield menuController.get(menu);
  return !!(menuEl && (yield menuEl.isActive()));
});
var menuButtonIosCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';
var IonMenuButtonIosStyle0 = menuButtonIosCss;
var menuButtonMdCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';
var IonMenuButtonMdStyle0 = menuButtonMdCss;
var MenuButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.onClick = () => __async(this, null, function* () {
      return menuController.toggle(this.menu);
    });
    this.visible = false;
    this.color = void 0;
    this.disabled = false;
    this.menu = void 0;
    this.autoHide = true;
    this.type = "button";
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const {
      color,
      disabled,
      inheritedAttributes
    } = this;
    const mode = getIonMode(this);
    const menuIcon = config.get("menuIcon", mode === "ios" ? menuOutline : menuSharp);
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    const ariaLabel = inheritedAttributes["aria-label"] || "menu";
    return h(Host, {
      key: "3cde3704f28eb275f4a5ff2985bbb68c1024e79c",
      onClick: this.onClick,
      "aria-disabled": disabled ? "true" : null,
      "aria-hidden": hidden ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        button: true,
        // ion-buttons target .button
        "menu-button-hidden": hidden,
        "menu-button-disabled": disabled,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "ion-activatable": true,
        "ion-focusable": true
      })
    }, h("button", Object.assign({
      key: "a02a3374288bd1759b6e352ada8eab0d45c6422f"
    }, attrs, {
      disabled,
      class: "button-native",
      part: "native",
      "aria-label": ariaLabel
    }), h("span", {
      key: "ba699f2277a4e7b27ce5e42faeefc53d8805bb43",
      class: "button-inner"
    }, h("slot", {
      key: "829fe6cbdeb173f50d1a670389d1565baa6273e4"
    }, h("ion-icon", {
      key: "a9a9f7b8dcffc648a8429fe0adbe766869de72fd",
      part: "icon",
      icon: menuIcon,
      mode,
      lazy: false,
      "aria-hidden": "true"
    }))), mode === "md" && h("ion-ripple-effect", {
      key: "48deca9a771a249f2fc76eaa8b9741c8d66d8355",
      type: "unbounded"
    })));
  }
  get el() {
    return getElement(this);
  }
};
MenuButton.style = {
  ios: IonMenuButtonIosStyle0,
  md: IonMenuButtonMdStyle0
};
var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
var IonMenuToggleStyle0 = menuToggleCss;
var MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = void 0;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return h(Host, {
      key: "88e88fa13ac7f10ba3acfe378bd11cda0c7e2749",
      onClick: this.onClick,
      "aria-hidden": hidden ? "true" : null,
      class: {
        [mode]: true,
        "menu-toggle-hidden": hidden
      }
    }, h("slot", {
      key: "0a14c7b63eda64702d2fd1b4bc7db4809892842d"
    }));
  }
};
MenuToggle.style = IonMenuToggleStyle0;
export {
  Menu as ion_menu,
  MenuButton as ion_menu_button,
  MenuToggle as ion_menu_toggle
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-menu_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbWVudV8zLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIH0gZnJvbSAnLi9jdWJpYy1iZXppZXItZmUyMDgzZGMuanMnO1xuaW1wb3J0IHsgbyBhcyBnZXRQcmVzZW50ZWRPdmVybGF5LCBCIGFzIEJBQ0tEUk9QLCBuIGFzIGZvY3VzRmlyc3REZXNjZW5kYW50LCBxIGFzIGZvY3VzTGFzdERlc2NlbmRhbnQsIEcgYXMgR0VTVFVSRSB9IGZyb20gJy4vb3ZlcmxheXMtNDFhNWQ1MWIuanMnO1xuaW1wb3J0IHsgRyBhcyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2dlc3R1cmUtY29udHJvbGxlci0zMTRhNTRmNi5qcyc7XG5pbXBvcnQgeyBzaG91bGRVc2VDbG9zZVdhdGNoZXIgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCB7IG8gYXMgaXNFbmRTaWRlLCBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcywgbiBhcyBhc3NlcnQsIGogYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgbSBhcyBtZW51Q29udHJvbGxlciB9IGZyb20gJy4vaW5kZXgtZjlmNWQwMTguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25maWcsIGIgYXMgZ2V0SW9uTW9kZSwgYSBhcyBpc1BsYXRmb3JtIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IHUgYXMgbWVudU91dGxpbmUsIHYgYXMgbWVudVNoYXJwIH0gZnJvbSAnLi9pbmRleC1lMmNmMmNlYi5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0ICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS0yZWVhMTc2My5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuaW1wb3J0ICcuL2FuaW1hdGlvbi1lYWI1YTRjYS5qcyc7XG5jb25zdCBtZW51SW9zQ3NzID0gXCI6aG9zdHstLXdpZHRoOjMwNHB4Oy0tbWluLXdpZHRoOmF1dG87LS1tYXgtd2lkdGg6YXV0bzstLWhlaWdodDoxMDAlOy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46c3RyaWN0fTpob3N0KC5zaG93LW1lbnUpe2Rpc3BsYXk6YmxvY2t9Lm1lbnUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtOTk5OXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtOTk5OXB4KTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0fTpob3N0KC5tZW51LXNpZGUtc3RhcnQpIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7dG9wOjA7Ym90dG9tOjB9Omhvc3QoLm1lbnUtc2lkZS1zdGFydCkgLm1lbnUtaW5uZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjA7aW5zZXQtaW5saW5lLWVuZDphdXRvfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5tZW51LXNpZGUtc3RhcnQpIC5tZW51LWlubmVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5tZW51LXNpZGUtc3RhcnQgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OnVuc2V0Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgubWVudS1zaWRlLXN0YXJ0OmRpcihydGwpKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6dW5zZXQ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fX06aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4O3RvcDowO2JvdHRvbTowfTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lcntpbnNldC1pbmxpbmUtc3RhcnQ6YXV0bztpbnNldC1pbmxpbmUtZW5kOjB9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLm1lbnUtc2lkZS1lbmQpIC5tZW51LWlubmVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5tZW51LXNpZGUtZW5kIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1sZWZ0OnVuc2V0Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHh9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLm1lbnUtc2lkZS1lbmQ6ZGlyKHJ0bCkpIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1sZWZ0OnVuc2V0Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHh9fWlvbi1iYWNrZHJvcHtkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjAxO3otaW5kZXg6LTF9QG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KXsubWVudS1pbm5lcnstLXdpZHRoOjI2NHB4fX06aG9zdCgubWVudS10eXBlLXJldmVhbCl7ei1pbmRleDowfTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsLnNob3ctbWVudSkgLm1lbnUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICAwKX06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpe3otaW5kZXg6MTAwMH06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpIC5zaG93LWJhY2tkcm9we2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKXstbXMtZmxleDowIDEgYXV0bztmbGV4OjAgMSBhdXRvO3dpZHRoOnZhcigtLXNpZGUtd2lkdGgsIHZhcigtLXdpZHRoKSk7bWluLXdpZHRoOnZhcigtLXNpZGUtbWluLXdpZHRoLCB2YXIoLS1taW4td2lkdGgpKTttYXgtd2lkdGg6dmFyKC0tc2lkZS1tYXgtd2lkdGgsIHZhcigtLW1heC13aWR0aCkpfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGUpe2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTt6LWluZGV4OjB9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZS5tZW51LWVuYWJsZWQpe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlKXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSl7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSkgLm1lbnUtaW5uZXJ7bGVmdDowO3JpZ2h0OjA7d2lkdGg6YXV0bzstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIGlvbi1iYWNrZHJvcHtkaXNwbGF5OmhpZGRlbiAhaW1wb3J0YW50fTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGUpey13ZWJraXQtYm9yZGVyLXN0YXJ0OjA7Ym9yZGVyLWlubGluZS1zdGFydDowOy13ZWJraXQtYm9yZGVyLWVuZDp2YXIoLS1ib3JkZXIpO2JvcmRlci1pbmxpbmUtZW5kOnZhcigtLWJvcmRlcik7Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b206MDttaW4td2lkdGg6dmFyKC0tc2lkZS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1zaWRlLW1heC13aWR0aCl9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZVtzaWRlPWVuZF0pey13ZWJraXQtYm9yZGVyLXN0YXJ0OnZhcigtLWJvcmRlcik7Ym9yZGVyLWlubGluZS1zdGFydDp2YXIoLS1ib3JkZXIpOy13ZWJraXQtYm9yZGVyLWVuZDowO2JvcmRlci1pbmxpbmUtZW5kOjA7Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b206MDttaW4td2lkdGg6dmFyKC0tc2lkZS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1zaWRlLW1heC13aWR0aCl9Omhvc3QoLm1lbnUtdHlwZS1wdXNoKXt6LWluZGV4OjEwMDB9Omhvc3QoLm1lbnUtdHlwZS1wdXNoKSAuc2hvdy1iYWNrZHJvcHtkaXNwbGF5OmJsb2NrfVwiO1xuY29uc3QgSW9uTWVudUlvc1N0eWxlMCA9IG1lbnVJb3NDc3M7XG5jb25zdCBtZW51TWRDc3MgPSBcIjpob3N0ey0td2lkdGg6MzA0cHg7LS1taW4td2lkdGg6YXV0bzstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OjEwMCU7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpzdHJpY3R9Omhvc3QoLnNob3ctbWVudSl7ZGlzcGxheTpibG9ja30ubWVudS1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTk5cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTk5cHgpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3R9Omhvc3QoLm1lbnUtc2lkZS1zdGFydCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDt0b3A6MDtib3R0b206MH06aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lcntpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbnNldC1pbmxpbmUtZW5kOmF1dG99Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLm1lbnUtc2lkZS1zdGFydCkgLm1lbnUtaW5uZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLm1lbnUtc2lkZS1zdGFydCAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6dW5zZXQ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5tZW51LXNpZGUtc3RhcnQ6ZGlyKHJ0bCkpIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1yaWdodDp1bnNldDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9fTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHg7dG9wOjA7Ym90dG9tOjB9Omhvc3QoLm1lbnUtc2lkZS1lbmQpIC5tZW51LWlubmVye2luc2V0LWlubGluZS1zdGFydDphdXRvO2luc2V0LWlubGluZS1lbmQ6MH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLm1lbnUtc2lkZS1lbmQgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6dW5zZXQ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgubWVudS1zaWRlLWVuZDpkaXIocnRsKSkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6dW5zZXQ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweH19aW9uLWJhY2tkcm9we2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjAuMDE7ei1pbmRleDotMX1AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpey5tZW51LWlubmVyey0td2lkdGg6MjY0cHh9fTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsKXt6LWluZGV4OjB9Omhvc3QoLm1lbnUtdHlwZS1yZXZlYWwuc2hvdy1tZW51KSAubWVudS1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSl7ei1pbmRleDoxMDAwfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSkgLnNob3ctYmFja2Ryb3B7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcn06aG9zdCgubWVudS1wYW5lLXZpc2libGUpey1tcy1mbGV4OjAgMSBhdXRvO2ZsZXg6MCAxIGF1dG87d2lkdGg6dmFyKC0tc2lkZS13aWR0aCwgdmFyKC0td2lkdGgpKTttaW4td2lkdGg6dmFyKC0tc2lkZS1taW4td2lkdGgsIHZhcigtLW1pbi13aWR0aCkpO21heC13aWR0aDp2YXIoLS1zaWRlLW1heC13aWR0aCwgdmFyKC0tbWF4LXdpZHRoKSl9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZSl7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO3otaW5kZXg6MH06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlLm1lbnUtZW5hYmxlZCl7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGUpey1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGVbc2lkZT1lbmRdKXstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKSAubWVudS1pbm5lcntsZWZ0OjA7cmlnaHQ6MDt3aWR0aDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSkgaW9uLWJhY2tkcm9we2Rpc3BsYXk6aGlkZGVuICFpbXBvcnRhbnR9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZSl7LXdlYmtpdC1ib3JkZXItc3RhcnQ6MDtib3JkZXItaW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1ib3JkZXItZW5kOnZhcigtLWJvcmRlcik7Ym9yZGVyLWlubGluZS1lbmQ6dmFyKC0tYm9yZGVyKTtib3JkZXItdG9wOjA7Ym9yZGVyLWJvdHRvbTowO21pbi13aWR0aDp2YXIoLS1zaWRlLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLXNpZGUtbWF4LXdpZHRoKX06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSl7LXdlYmtpdC1ib3JkZXItc3RhcnQ6dmFyKC0tYm9yZGVyKTtib3JkZXItaW5saW5lLXN0YXJ0OnZhcigtLWJvcmRlcik7LXdlYmtpdC1ib3JkZXItZW5kOjA7Ym9yZGVyLWlubGluZS1lbmQ6MDtib3JkZXItdG9wOjA7Ym9yZGVyLWJvdHRvbTowO21pbi13aWR0aDp2YXIoLS1zaWRlLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLXNpZGUtbWF4LXdpZHRoKX06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpIC5tZW51LWlubmVyey13ZWJraXQtYm94LXNoYWRvdzo0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtib3gtc2hhZG93OjRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpfVwiO1xuY29uc3QgSW9uTWVudU1kU3R5bGUwID0gbWVudU1kQ3NzO1xuY29uc3QgaW9zRWFzaW5nID0gJ2N1YmljLWJlemllcigwLjMyLDAuNzIsMCwxKSc7XG5jb25zdCBtZEVhc2luZyA9ICdjdWJpYy1iZXppZXIoMC4wLDAuMCwwLjIsMSknO1xuY29uc3QgaW9zRWFzaW5nUmV2ZXJzZSA9ICdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknO1xuY29uc3QgbWRFYXNpbmdSZXZlcnNlID0gJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknO1xuY29uc3QgTWVudSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25XaWxsT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbE9wZW5cIiwgNyk7XG4gICAgdGhpcy5pb25XaWxsQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbldpbGxDbG9zZVwiLCA3KTtcbiAgICB0aGlzLmlvbkRpZE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRpZE9wZW5cIiwgNyk7XG4gICAgdGhpcy5pb25EaWRDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkQ2xvc2VcIiwgNyk7XG4gICAgdGhpcy5pb25NZW51Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25NZW51Q2hhbmdlXCIsIDcpO1xuICAgIHRoaXMubGFzdE9uRW5kID0gMDtcbiAgICB0aGlzLmJsb2NrZXIgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlQmxvY2tlcih7XG4gICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5kaWRMb2FkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogRmxhZyB1c2VkIHRvIGRldGVybWluZSBpZiBhbiBvcGVuL2Nsb3NlXG4gICAgICogb3BlcmF0aW9uIHdhcyBjYW5jZWxsZWQuIEZvciBleGFtcGxlLCBpZlxuICAgICAqIGFuIGFwcCBjYWxscyBcIm1lbnUub3BlblwiIHRoZW4gZGlzYWJsZXMgdGhlIG1lbnVcbiAgICAgKiBwYXJ0IHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24sIHRoZW4gdGhpcyB3b3VsZFxuICAgICAqIGJlIGNvbnNpZGVyZWQgYSBjYW5jZWxsZWQgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIHRoaXMub3BlcmF0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuaGFuZGxlRm9jdXMgPSBldiA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIE92ZXJsYXlzIGhhdmUgdGhlaXIgb3duIGZvY3VzIHRyYXBwaW5nIGxpc3RlbmVyXG4gICAgICAgKiBzbyB3ZSBkbyBub3Qgd2FudCB0aGUgdHdvIGxpc3RlbmVycyB0byBjb25mbGljdFxuICAgICAgICogd2l0aCBlYWNoIG90aGVyLiBJZiB0aGUgdG9wLW1vc3Qgb3ZlcmxheSB0aGF0IGlzXG4gICAgICAgKiBvcGVuIGRvZXMgbm90IGNvbnRhaW4gdGhpcyBpb24tbWVudSwgdGhlbiBpb24tbWVudSdzXG4gICAgICAgKiBmb2N1cyB0cmFwcGluZyBzaG91bGQgbm90IHJ1bi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbGFzdE92ZXJsYXkgPSBnZXRQcmVzZW50ZWRPdmVybGF5KGRvY3VtZW50KTtcbiAgICAgIGlmIChsYXN0T3ZlcmxheSAmJiAhbGFzdE92ZXJsYXkuY29udGFpbnModGhpcy5lbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFwS2V5Ym9hcmRGb2N1cyhldiwgZG9jdW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy5pc1BhbmVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5pc0VuZFNpZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRlbnRJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbnVJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2lkZSA9ICdzdGFydCc7XG4gICAgdGhpcy5zd2lwZUdlc3R1cmUgPSB0cnVlO1xuICAgIHRoaXMubWF4RWRnZVN0YXJ0ID0gNTA7XG4gIH1cbiAgdHlwZUNoYW5nZWQodHlwZSwgb2xkVHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuY29udGVudEVsO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIGlmIChvbGRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoYG1lbnUtY29udGVudC0ke29sZFR5cGV9YCk7XG4gICAgICB9XG4gICAgICBjb250ZW50RWwuY2xhc3NMaXN0LmFkZChgbWVudS1jb250ZW50LSR7dHlwZX1gKTtcbiAgICAgIGNvbnRlbnRFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1lbnVJbm5lckVsKSB7XG4gICAgICAvLyBSZW1vdmUgZWZmZWN0cyBvZiBwcmV2aW91cyBhbmltYXRpb25zXG4gICAgICB0aGlzLm1lbnVJbm5lckVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7XG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIG9wZW46IHRoaXMuX2lzT3BlblxuICAgIH0pO1xuICB9XG4gIHNpZGVDaGFuZ2VkKCkge1xuICAgIHRoaXMuaXNFbmRTaWRlID0gaXNFbmRTaWRlKHRoaXMuc2lkZSk7XG4gICAgLyoqXG4gICAgICogTWVudSBkaXJlY3Rpb24gYW5pbWF0aW9uIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRvY3VtZW50IGRpcmVjdGlvbi5cbiAgICAgKiBJZiB0aGUgZG9jdW1lbnQgZGlyZWN0aW9uIGNoYW5nZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICBzd2lwZUdlc3R1cmVDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBUT0RPOiBjb25uZWN0ZWRDYWxsYmFjayBpcyBmaXJlZCBpbiBDRSBidWlsZFxuICAgIC8vIGJlZm9yZSBXQyBpcyBkZWZpbmVkLiBUaGlzIG5lZWRzIHRvIGJlIGZpeGVkIGluIFN0ZW5jaWwuXG4gICAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgY3VzdG9tRWxlbWVudHMgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2lvbi1tZW51Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50eXBlID0gY29uZmlnLmdldCgnbWVudVR5cGUnLCAnb3ZlcmxheScpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50SWQgIT09IHVuZGVmaW5lZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGVudElkKSA6IG51bGw7XG4gICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnU6IG11c3QgaGF2ZSBhIFwiY29udGVudFwiIGVsZW1lbnQgdG8gbGlzdGVuIGZvciBkcmFnIGV2ZW50cyBvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnMoY29udGVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1lbnU6IFwiY29udGVudElkXCIgc2hvdWxkIHJlZmVyIHRvIHRoZSBtYWluIHZpZXcncyBpb24tY29udGVudCwgbm90IHRoZSBpb24tY29udGVudCBpbnNpZGUgb2YgdGhlIGlvbi1tZW51LmApO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRFbCA9IGNvbnRlbnQ7XG4gICAgLy8gYWRkIG1lbnUncyBjb250ZW50IGNsYXNzZXNcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpO1xuICAgIHRoaXMudHlwZUNoYW5nZWQodGhpcy50eXBlLCB1bmRlZmluZWQpO1xuICAgIHRoaXMuc2lkZUNoYW5nZWQoKTtcbiAgICAvLyByZWdpc3RlciB0aGlzIG1lbnUgd2l0aCB0aGUgYXBwJ3MgbWVudSBjb250cm9sbGVyXG4gICAgbWVudUNvbnRyb2xsZXIuX3JlZ2lzdGVyKHRoaXMpO1xuICAgIHRoaXMubWVudUNoYW5nZWQoKTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTM5NzgyNjQyLmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgZWw6IGRvY3VtZW50LFxuICAgICAgZ2VzdHVyZU5hbWU6ICdtZW51LXN3aXBlJyxcbiAgICAgIGdlc3R1cmVQcmlvcml0eTogMzAsXG4gICAgICB0aHJlc2hvbGQ6IDEwLFxuICAgICAgYmx1ck9uU3RhcnQ6IHRydWUsXG4gICAgICBjYW5TdGFydDogZXYgPT4gdGhpcy5jYW5TdGFydChldiksXG4gICAgICBvbldpbGxTdGFydDogKCkgPT4gdGhpcy5vbldpbGxTdGFydCgpLFxuICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5vblN0YXJ0KCksXG4gICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXJpYUF0dHJpYnV0ZXModGhpcy5lbCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmRpZExvYWQgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEEgbWVudSBpbnNpZGUgb2YgYSBzcGxpdCBwYW5lIGlzIGFzc3VtZWRcbiAgICAgKiB0byBiZSBhIHNpZGUgcGFuZS5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIG1lbnUgaXMgbG9hZGVkIGl0IG5lZWRzIHRvXG4gICAgICogc2VlIGlmIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIHZpc2libGUgaW5zaWRlXG4gICAgICogb2YgdGhlIHNwbGl0IHBhbmUuIElmIHRoZSBzcGxpdCBwYW5lIGlzXG4gICAgICogaGlkZGVuIHRoZW4gdGhlIG1lbnUgc2hvdWxkIGJlIHRvby5cbiAgICAgKi9cbiAgICBjb25zdCBzcGxpdFBhbmUgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1zcGxpdC1wYW5lJyk7XG4gICAgaWYgKHNwbGl0UGFuZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5pc1BhbmVWaXNpYmxlID0gYXdhaXQgc3BsaXRQYW5lLmlzVmlzaWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLm1lbnVDaGFuZ2VkKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIG1lbnVDaGFuZ2VkKCkge1xuICAgIC8qKlxuICAgICAqIEluZm9ybSBkZXBlbmRlbnQgY29tcG9uZW50cyBzdWNoIGFzIGlvbi1tZW51LWJ1dHRvblxuICAgICAqIHRoYXQgdGhlIG1lbnUgaXMgcmVhZHkuIE5vdGUgdGhhdCB3ZSBvbmx5IHdhbnQgdG8gZG8gdGhpc1xuICAgICAqIG9uY2UgdGhlIG1lbnUgaGFzIGJlZW4gcmVuZGVyZWQgd2hpY2ggaXMgd2h5IHdlIGNoZWNrIGZvciBkaWRMb2FkLlxuICAgICAqL1xuICAgIGlmICh0aGlzLmRpZExvYWQpIHtcbiAgICAgIHRoaXMuaW9uTWVudUNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIG9wZW46IHRoaXMuX2lzT3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBtZW51IHNob3VsZCBiZSBjbG9zZWQgd2hlbiBpdCBpc1xuICAgICAqIHVubW91bnRlZCBmcm9tIHRoZSBET00uXG4gICAgICogVGhpcyBpcyBhbiBhc3luYyBjYWxsLCBzbyB3ZSBuZWVkIHRvIHdhaXQgZm9yXG4gICAgICogdGhpcyB0byBmaW5pc2ggb3RoZXJ3aXNlIGNvbnRlbnRFbFxuICAgICAqIHdpbGwgbm90IGhhdmUgTUVOVV9DT05URU5UX09QRU4gcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBhd2FpdCB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgICB0aGlzLmJsb2NrZXIuZGVzdHJveSgpO1xuICAgIG1lbnVDb250cm9sbGVyLl91bnJlZ2lzdGVyKHRoaXMpO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IHVuZGVmaW5lZDtcbiAgfVxuICBvblNwbGl0UGFuZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBjbG9zZXN0U3BsaXRQYW5lID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tc3BsaXQtcGFuZScpO1xuICAgIGlmIChjbG9zZXN0U3BsaXRQYW5lICE9PSBudWxsICYmIGNsb3Nlc3RTcGxpdFBhbmUgPT09IGV2LnRhcmdldCkge1xuICAgICAgdGhpcy5pc1BhbmVWaXNpYmxlID0gZXYuZGV0YWlsLnZpc2libGU7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG4gIG9uQmFja2Ryb3BDbGljayhldikge1xuICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGUgKEN1c3RvbUV2ZW50IHRyaWdnZXJzIGVycm9ycyB3aGljaCBzaG91bGQgYmUgc29ydGVkKVxuICAgIGlmICh0aGlzLl9pc09wZW4gJiYgdGhpcy5sYXN0T25FbmQgPCBldi50aW1lU3RhbXAgLSAxMDApIHtcbiAgICAgIGNvbnN0IHNob3VsZENsb3NlID0gZXYuY29tcG9zZWRQYXRoID8gIWV2LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMubWVudUlubmVyRWwpIDogZmFsc2U7XG4gICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2UodW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uS2V5ZG93bihldikge1xuICAgIGlmIChldi5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaXMgdGhlIG1lbnUgaXMgb3Blbi5cbiAgICovXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2lzT3Blbik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlzIHRoZSBtZW51IGlzIGFjdGl2ZS5cbiAgICpcbiAgICogQSBtZW51IGlzIGFjdGl2ZSB3aGVuIGl0IGNhbiBiZSBvcGVuZWQgb3IgY2xvc2VkLCBtZWFuaW5nIGl0J3MgZW5hYmxlZFxuICAgKiBhbmQgaXQncyBub3QgcGFydCBvZiBhIGBpb24tc3BsaXQtcGFuZWAuXG4gICAqL1xuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2lzQWN0aXZlKCkpO1xuICB9XG4gIC8qKlxuICAgKiBPcGVucyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuIG9yIGl0IGNhbid0IGJlIG9wZW5lZCxcbiAgICogaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgb3BlbihhbmltYXRlZCA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcGVuKHRydWUsIGFuaW1hdGVkKTtcbiAgfVxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtZW51LiBJZiB0aGUgbWVudSBpcyBhbHJlYWR5IGNsb3NlZCBvciBpdCBjYW4ndCBiZSBjbG9zZWQsXG4gICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICovXG4gIGNsb3NlKGFuaW1hdGVkID0gdHJ1ZSwgcm9sZSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wZW4oZmFsc2UsIGFuaW1hdGVkLCByb2xlKTtcbiAgfVxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0byBjbG9zZSwgb3RoZXJ3aXNlIGl0IHdpbGwgdHJ5IHRvIG9wZW4gaXQuXG4gICAqIElmIHRoZSBvcGVyYXRpb24gY2FuJ3QgYmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgdG9nZ2xlKGFuaW1hdGVkID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wZW4oIXRoaXMuX2lzT3BlbiwgYW5pbWF0ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBPcGVucyBvciBjbG9zZXMgdGhlIGJ1dHRvbi5cbiAgICogSWYgdGhlIG9wZXJhdGlvbiBjYW4ndCBiZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqL1xuICBzZXRPcGVuKHNob3VsZE9wZW4sIGFuaW1hdGVkID0gdHJ1ZSwgcm9sZSkge1xuICAgIHJldHVybiBtZW51Q29udHJvbGxlci5fc2V0T3Blbih0aGlzLCBzaG91bGRPcGVuLCBhbmltYXRlZCwgcm9sZSk7XG4gIH1cbiAgdHJhcEtleWJvYXJkRm9jdXMoZXYsIGRvYykge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdGFyZ2V0IGlzIGluc2lkZSB0aGUgbWVudSBjb250ZW50cywgbGV0IHRoZSBicm93c2VyXG4gICAgICogZm9jdXMgYXMgbm9ybWFsIGFuZCBrZWVwIGEgbG9nIG9mIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cyA9IHRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBPdGhlcndpc2UsIHdlIGFyZSBhYm91dCB0byBoYXZlIGZvY3VzIGdvIG91dCBvZiB0aGUgbWVudS5cbiAgICAgICAqIFdyYXAgdGhlIGZvY3VzIHRvIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIC8qKlxuICAgICAgICogT25jZSB3ZSBjYWxsIGBmb2N1c0ZpcnN0RGVzY2VuZGFudGAsIGFub3RoZXIgZm9jdXMgZXZlbnRcbiAgICAgICAqIHdpbGwgZmlyZSwgd2hpY2ggd2lsbCBjYXVzZSBgbGFzdEZvY3VzYCB0byBiZSB1cGRhdGVkXG4gICAgICAgKiBiZWZvcmUgd2UgY2FuIHJ1biB0aGUgY29kZSBhZnRlciB0aGF0LiBXZSBjYWNoZSB0aGUgdmFsdWVcbiAgICAgICAqIGhlcmUgdG8gYXZvaWQgdGhhdC5cbiAgICAgICAqL1xuICAgICAgZm9jdXNGaXJzdERlc2NlbmRhbnQoZWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgY2FjaGVkIGxhc3QgZm9jdXNlZCBlbGVtZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBub3ctXG4gICAgICAgKiBhY3RpdmUgZWxlbWVudCwgdGhhdCBtZWFucyB0aGUgdXNlciB3YXMgb24gdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAqIGFscmVhZHkgYW5kIHByZXNzZWQgU2hpZnQgKyBUYWIsIHNvIHdlIG5lZWQgdG8gd3JhcCB0byB0aGVcbiAgICAgICAqIGxhc3QgZGVzY2VuZGFudC5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMubGFzdEZvY3VzID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBmb2N1c0xhc3REZXNjZW5kYW50KGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX3NldE9wZW4oc2hvdWxkT3BlbiwgYW5pbWF0ZWQgPSB0cnVlLCByb2xlKSB7XG4gICAgLy8gSWYgdGhlIG1lbnUgaXMgZGlzYWJsZWQgb3IgaXQgaXMgY3VycmVudGx5IGJlaW5nIGFuaW1hdGVkLCBsZXQncyBkbyBub3RoaW5nXG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSgpIHx8IHRoaXMuaXNBbmltYXRpbmcgfHwgc2hvdWxkT3BlbiA9PT0gdGhpcy5faXNPcGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYmVmb3JlQW5pbWF0aW9uKHNob3VsZE9wZW4sIHJvbGUpO1xuICAgIGF3YWl0IHRoaXMubG9hZEFuaW1hdGlvbigpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRBbmltYXRpb24oc2hvdWxkT3BlbiwgYW5pbWF0ZWQpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBhbmltYXRpb24gd2FzIGNhbmNlbGxlZCB0aGVuXG4gICAgICogcmV0dXJuIGZhbHNlIGJlY2F1c2UgdGhlIG9wZXJhdGlvblxuICAgICAqIGRpZCBub3Qgc3VjY2VlZC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5vcGVyYXRpb25DYW5jZWxsZWQpIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYWZ0ZXJBbmltYXRpb24oc2hvdWxkT3Blbiwgcm9sZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgYXN5bmMgbG9hZEFuaW1hdGlvbigpIHtcbiAgICAvLyBNZW51IHN3aXBlIGFuaW1hdGlvbiB0YWtlcyB0aGUgbWVudSdzIGlubmVyIHdpZHRoIGFzIHBhcmFtZXRlcixcbiAgICAvLyBJZiBgb2Zmc2V0V2lkdGhgIGNoYW5nZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGFuaW1hdGlvbi5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMubWVudUlubmVyRWwub2Zmc2V0V2lkdGg7XG4gICAgLyoqXG4gICAgICogTWVudSBkaXJlY3Rpb24gYW5pbWF0aW9uIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRvY3VtZW50IGRpcmVjdGlvbi5cbiAgICAgKiBJZiB0aGUgZG9jdW1lbnQgZGlyZWN0aW9uIGNoYW5nZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBpc0VuZFNpZGUkMSA9IGlzRW5kU2lkZSh0aGlzLnNpZGUpO1xuICAgIGlmICh3aWR0aCA9PT0gdGhpcy53aWR0aCAmJiB0aGlzLmFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkICYmIGlzRW5kU2lkZSQxID09PSB0aGlzLmlzRW5kU2lkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5pc0VuZFNpZGUgPSBpc0VuZFNpZGUkMTtcbiAgICAvLyBEZXN0cm95IGV4aXN0aW5nIGFuaW1hdGlvblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBuZXcgYW5pbWF0aW9uXG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24gPSBhd2FpdCBtZW51Q29udHJvbGxlci5fY3JlYXRlQW5pbWF0aW9uKHRoaXMudHlwZSwgdGhpcyk7XG4gICAgaWYgKCFjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKSkge1xuICAgICAgYW5pbWF0aW9uLmR1cmF0aW9uKDApO1xuICAgIH1cbiAgICBhbmltYXRpb24uZmlsbCgnYm90aCcpO1xuICB9XG4gIGFzeW5jIHN0YXJ0QW5pbWF0aW9uKHNob3VsZE9wZW4sIGFuaW1hdGVkKSB7XG4gICAgY29uc3QgaXNSZXZlcnNlZCA9ICFzaG91bGRPcGVuO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGVhc2luZyA9IG1vZGUgPT09ICdpb3MnID8gaW9zRWFzaW5nIDogbWRFYXNpbmc7XG4gICAgY29uc3QgZWFzaW5nUmV2ZXJzZSA9IG1vZGUgPT09ICdpb3MnID8gaW9zRWFzaW5nUmV2ZXJzZSA6IG1kRWFzaW5nUmV2ZXJzZTtcbiAgICBjb25zdCBhbmkgPSB0aGlzLmFuaW1hdGlvbi5kaXJlY3Rpb24oaXNSZXZlcnNlZCA/ICdyZXZlcnNlJyA6ICdub3JtYWwnKS5lYXNpbmcoaXNSZXZlcnNlZCA/IGVhc2luZ1JldmVyc2UgOiBlYXNpbmcpO1xuICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgYXdhaXQgYW5pLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5pLnBsYXkoe1xuICAgICAgICBzeW5jOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2UgcnVuIHRoaXMgYWZ0ZXIgdGhlIHBsYXkgaW52b2NhdGlvblxuICAgICAqIGluc3RlYWQgb2YgdXNpbmcgYW5pLm9uRmluaXNoIHNvIHRoYXRcbiAgICAgKiBtdWx0aXBsZSBvbkZpbmlzaCBjYWxsYmFja3MgZG8gbm90IGdldFxuICAgICAqIHJ1biBpZiBhbiBhbmltYXRpb24gaXMgcGxheWVkLCBzdG9wcGVkLFxuICAgICAqIGFuZCB0aGVuIHBsYXllZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICBpZiAoYW5pLmdldERpcmVjdGlvbigpID09PSAncmV2ZXJzZScpIHtcbiAgICAgIGFuaS5kaXJlY3Rpb24oJ25vcm1hbCcpO1xuICAgIH1cbiAgfVxuICBfaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzUGFuZVZpc2libGU7XG4gIH1cbiAgY2FuU3dpcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3dpcGVHZXN0dXJlICYmICF0aGlzLmlzQW5pbWF0aW5nICYmIHRoaXMuX2lzQWN0aXZlKCk7XG4gIH1cbiAgY2FuU3RhcnQoZGV0YWlsKSB7XG4gICAgLy8gRG8gbm90IGFsbG93IHN3aXBlIGdlc3R1cmUgaWYgYSBtb2RhbCBpcyBvcGVuXG4gICAgY29uc3QgaXNNb2RhbFByZXNlbnRlZCA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLW1vZGFsLnNob3ctbW9kYWwnKTtcbiAgICBpZiAoaXNNb2RhbFByZXNlbnRlZCB8fCAhdGhpcy5jYW5Td2lwZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc09wZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAobWVudUNvbnRyb2xsZXIuX2dldE9wZW5TeW5jKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrRWRnZVNpZGUod2luZG93LCBkZXRhaWwuY3VycmVudFgsIHRoaXMuaXNFbmRTaWRlLCB0aGlzLm1heEVkZ2VTdGFydCk7XG4gIH1cbiAgb25XaWxsU3RhcnQoKSB7XG4gICAgdGhpcy5iZWZvcmVBbmltYXRpb24oIXRoaXMuX2lzT3BlbiwgR0VTVFVSRSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZEFuaW1hdGlvbigpO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhlIGNsb25lZCBhbmltYXRpb24gc2hvdWxkIG5vdCB1c2UgYW4gZWFzaW5nIGN1cnZlIGR1cmluZyBzZWVrXG4gICAgdGhpcy5hbmltYXRpb24ucHJvZ3Jlc3NTdGFydCh0cnVlLCB0aGlzLl9pc09wZW4gPyAxIDogMCk7XG4gIH1cbiAgb25Nb3ZlKGRldGFpbCkge1xuICAgIGlmICghdGhpcy5pc0FuaW1hdGluZyB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIGFzc2VydChmYWxzZSwgJ2lzQW5pbWF0aW5nIGhhcyB0byBiZSB0cnVlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlbHRhID0gY29tcHV0ZURlbHRhKGRldGFpbC5kZWx0YVgsIHRoaXMuX2lzT3BlbiwgdGhpcy5pc0VuZFNpZGUpO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gdGhpcy53aWR0aDtcbiAgICB0aGlzLmFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAodGhpcy5faXNPcGVuID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZSk7XG4gIH1cbiAgb25FbmQoZGV0YWlsKSB7XG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuO1xuICAgIGNvbnN0IGlzRW5kU2lkZSA9IHRoaXMuaXNFbmRTaWRlO1xuICAgIGNvbnN0IGRlbHRhID0gY29tcHV0ZURlbHRhKGRldGFpbC5kZWx0YVgsIGlzT3BlbiwgaXNFbmRTaWRlKTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGRldGFpbC52ZWxvY2l0eVg7XG4gICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlUmlnaHQgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZXRhaWwuZGVsdGFYID4geik7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGVMZWZ0ID0gdmVsb2NpdHkgPD0gMCAmJiAodmVsb2NpdHkgPCAtMC4yIHx8IGRldGFpbC5kZWx0YVggPCAteik7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSBpc09wZW4gPyBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZVJpZ2h0IDogc2hvdWxkQ29tcGxldGVMZWZ0IDogaXNFbmRTaWRlID8gc2hvdWxkQ29tcGxldGVMZWZ0IDogc2hvdWxkQ29tcGxldGVSaWdodDtcbiAgICBsZXQgc2hvdWxkT3BlbiA9ICFpc09wZW4gJiYgc2hvdWxkQ29tcGxldGU7XG4gICAgaWYgKGlzT3BlbiAmJiAhc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgIHNob3VsZE9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmxhc3RPbkVuZCA9IGRldGFpbC5jdXJyZW50VGltZTtcbiAgICAvLyBBY2NvdW50IGZvciByb3VuZGluZyBlcnJvcnMgaW4gSlNcbiAgICBsZXQgbmV3U3RlcFZhbHVlID0gc2hvdWxkQ29tcGxldGUgPyAwLjAwMSA6IC0wLjAwMTtcbiAgICAvKipcbiAgICAgKiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gYSBuZWdhdGl2ZVxuICAgICAqIHZhbHVlLCBidXQgeW91IGNhbid0IGhhdmUgYSBuZWdhdGl2ZSB0aW1lIHZhbHVlXG4gICAgICogZm9yIHRoZSBjdWJpYyBiZXppZXIgY3VydmUgKGF0IGxlYXN0IHdpdGggd2ViIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgY29uc3QgYWRqdXN0ZWRTdGVwVmFsdWUgPSBzdGVwVmFsdWUgPCAwID8gMC4wMSA6IHN0ZXBWYWx1ZTtcbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgKlxuICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAqL1xuICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihbMCwgMF0sIFswLjQsIDBdLCBbMC42LCAxXSwgWzEsIDFdLCBjbGFtcCgwLCBhZGp1c3RlZFN0ZXBWYWx1ZSwgMC45OTk5KSlbMF0gfHwgMDtcbiAgICBjb25zdCBwbGF5VG8gPSB0aGlzLl9pc09wZW4gPyAhc2hvdWxkQ29tcGxldGUgOiBzaG91bGRDb21wbGV0ZTtcbiAgICB0aGlzLmFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQsIDAuMCwgMC42LCAxKScpLm9uRmluaXNoKCgpID0+IHRoaXMuYWZ0ZXJBbmltYXRpb24oc2hvdWxkT3BlbiwgR0VTVFVSRSksIHtcbiAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgIH0pLnByb2dyZXNzRW5kKHBsYXlUbyA/IDEgOiAwLCB0aGlzLl9pc09wZW4gPyAxIC0gbmV3U3RlcFZhbHVlIDogbmV3U3RlcFZhbHVlLCAzMDApO1xuICB9XG4gIGJlZm9yZUFuaW1hdGlvbihzaG91bGRPcGVuLCByb2xlKSB7XG4gICAgYXNzZXJ0KCF0aGlzLmlzQW5pbWF0aW5nLCAnX2JlZm9yZSgpIHNob3VsZCBub3QgYmUgY2FsbGVkIHdoaWxlIGFuaW1hdGluZycpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIG1lbnUgaXMgcHJlc2VudGVkIG9uIGFuIEFuZHJvaWQgZGV2aWNlLCBUYWxrQmFjaydzIGZvY3VzIHJpbmdzXG4gICAgICogbWF5IGFwcGVhciBpbiB0aGUgd3JvbmcgcG9zaXRpb24gZHVlIHRvIHRoZSB0cmFuc2l0aW9uIChzcGVjaWZpY2FsbHlcbiAgICAgKiBgdHJhbnNmb3JtYCBzdHlsZXMpLiBUaGlzIG9jY3VycyBiZWNhdXNlIHRoZSBmb2N1cyByaW5ncyBhcmUgaW5pdGlhbGx5XG4gICAgICogZGlzcGxheWVkIGF0IHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgYmVmb3JlIHRoZSB0cmFuc2l0aW9uXG4gICAgICogYmVnaW5zLiBUaGlzIHdvcmthcm91bmQgZW5zdXJlcyB0aGUgZm9jdXMgcmluZ3MgZG8gbm90IGFwcGVhciBpbiB0aGVcbiAgICAgKiBpbmNvcnJlY3QgbG9jYXRpb24uXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIHNvbHV0aW9uIGlzIGFwcGxpZWQgdG8gaU9TIGRldmljZXMsIHRoZW4gaXQgbGVhZHMgdG8gYSBidWcgd2hlcmVcbiAgICAgKiB0aGUgb3ZlcmxheXMgY2Fubm90IGJlIGFjY2Vzc2VkIGJ5IHNjcmVlbiByZWFkZXJzLiBUaGlzIGlzIGR1ZSB0b1xuICAgICAqIFZvaWNlT3ZlciBub3QgYmVpbmcgYWJsZSB0byB1cGRhdGUgdGhlIGFjY2Vzc2liaWxpdHkgdHJlZSB3aGVuIHRoZVxuICAgICAqIGBhcmlhLWhpZGRlbmAgaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBpZiAoaXNQbGF0Zm9ybSgnYW5kcm9pZCcpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgICAvLyB0aGlzIHBsYWNlcyB0aGUgbWVudSBpbnRvIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGJlZm9yZSBpdCBhbmltYXRlcyBpblxuICAgIC8vIHRoaXMgY3NzIGNsYXNzIGRvZXNuJ3QgYWN0dWFsbHkga2ljayBvZmYgYW55IGFuaW1hdGlvbnNcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoU0hPV19NRU5VKTtcbiAgICAvKipcbiAgICAgKiBXZSBhZGQgYSB0YWJpbmRleCBoZXJlIHNvIHRoYXQgZm9jdXMgdHJhcHBpbmdcbiAgICAgKiBzdGlsbCB3b3JrcyBldmVuIGlmIHRoZSBtZW51IGRvZXMgbm90IGhhdmVcbiAgICAgKiBhbnkgZm9jdXNhYmxlIGVsZW1lbnRzIHNsb3R0ZWQgaW5zaWRlLiBUaGVcbiAgICAgKiBmb2N1cyB0cmFwcGluZyB1dGlsaXR5IHdpbGwgZmFsbGJhY2sgdG8gZm9jdXNpbmdcbiAgICAgKiB0aGUgbWVudSBzbyBmb2N1cyBkb2VzIG5vdCBsZWF2ZSB3aGVuIHRoZSBtZW51XG4gICAgICogaXMgb3Blbi5cbiAgICAgKi9cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGlmICh0aGlzLmJhY2tkcm9wRWwpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QuYWRkKFNIT1dfQkFDS0RST1ApO1xuICAgIH1cbiAgICAvLyBhZGQgY3NzIGNsYXNzIGFuZCBoaWRlIGNvbnRlbnQgYmVoaW5kIG1lbnUgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgdGhpcy5jb250ZW50RWwuY2xhc3NMaXN0LmFkZChNRU5VX0NPTlRFTlRfT1BFTik7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIG1lbnUgaXMgb3BlbiBhbmQgb3ZlcmxheWluZyB0aGUgbWFpblxuICAgICAgICogY29udGVudCwgdGhlIG1haW4gY29udGVudCBzaG91bGQgbm90IGJlIGFubm91bmNlZFxuICAgICAgICogYnkgdGhlIHNjcmVlbnJlYWRlciBhcyB0aGUgbWVudSBpcyB0aGUgbWFpblxuICAgICAgICogZm9jdXMuIFRoaXMgaXMgdXNlZnVsIHdpdGggc2NyZWVucmVhZGVycyB0aGF0IGhhdmVcbiAgICAgICAqIFwicmVhZCBmcm9tIHRvcFwiIGdlc3R1cmVzIHRoYXQgcmVhZCB0aGUgZW50aXJlXG4gICAgICAgKiBwYWdlIGZyb20gdG9wIHRvIGJvdHRvbSB3aGVuIGFjdGl2YXRlZC5cbiAgICAgICAqIFRoaXMgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzXG4gICAgICAgKiBzbyB0aGF0IHVzZXJzIGNhbm5vdCBhY2NpZGVudGFsbHkgc2Nyb2xsXG4gICAgICAgKiB0aGUgY29udGVudCB3aGlsZSBkcmFnZ2luZyBhIG1lbnUgb3Blbi5cbiAgICAgICAqL1xuICAgICAgdGhpcy5jb250ZW50RWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICAgIHRoaXMuYmxvY2tlci5ibG9jaygpO1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIGlmIChzaG91bGRPcGVuKSB7XG4gICAgICB0aGlzLmlvbldpbGxPcGVuLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pb25XaWxsQ2xvc2UuZW1pdCh7XG4gICAgICAgIHJvbGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhZnRlckFuaW1hdGlvbihpc09wZW4sIHJvbGUpIHtcbiAgICB2YXIgX2E7XG4gICAgLy8ga2VlcCBvcGVuaW5nL2Nsb3NpbmcgdGhlIG1lbnUgZGlzYWJsZWQgZm9yIGEgdG91Y2ggbW9yZSB5ZXRcbiAgICAvLyBvbmx5IGFkZCBsaXN0ZW5lcnMvY3NzIGlmIGl0J3MgZW5hYmxlZCBhbmQgaXNPcGVuXG4gICAgLy8gYW5kIG9ubHkgcmVtb3ZlIGxpc3RlbmVycy9jc3MgaWYgaXQncyBub3Qgb3BlblxuICAgIC8vIGVtaXQgb3BlbmVkL2Nsb3NlZCBldmVudHNcbiAgICB0aGlzLl9pc09wZW4gPSBpc09wZW47XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICB0aGlzLmJsb2NrZXIudW5ibG9jaygpO1xuICAgIH1cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIG1lbnUgaXMgcHJlc2VudGVkIG9uIGFuIEFuZHJvaWQgZGV2aWNlLCBUYWxrQmFjaydzIGZvY3VzIHJpbmdzXG4gICAgICAgKiBtYXkgYXBwZWFyIGluIHRoZSB3cm9uZyBwb3NpdGlvbiBkdWUgdG8gdGhlIHRyYW5zaXRpb24gKHNwZWNpZmljYWxseVxuICAgICAgICogYHRyYW5zZm9ybWAgc3R5bGVzKS4gVGhlIG1lbnUgaXMgaGlkZGVuIGZyb20gc2NyZWVuIHJlYWRlcnMgZHVyaW5nIHRoZVxuICAgICAgICogdHJhbnNpdGlvbiB0byBwcmV2ZW50IHRoaXMuIE9uY2UgdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGUsIHRoZSBtZW51XG4gICAgICAgKiBpcyBzaG93biBhZ2Fpbi5cbiAgICAgICAqL1xuICAgICAgaWYgKGlzUGxhdGZvcm0oJ2FuZHJvaWQnKSkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICAgIC8vIGVtaXQgb3BlbiBldmVudFxuICAgICAgdGhpcy5pb25EaWRPcGVuLmVtaXQoKTtcbiAgICAgIC8qKlxuICAgICAgICogTW92ZSBmb2N1cyB0byB0aGUgbWVudSB0byBwcmVwYXJlIGZvY3VzIHRyYXBwaW5nLCBhcyBsb25nIGFzXG4gICAgICAgKiBpdCBpc24ndCBhbHJlYWR5IGZvY3VzZWQuIFVzZSB0aGUgaG9zdCBlbGVtZW50IGluc3RlYWQgb2YgdGhlXG4gICAgICAgKiBmaXJzdCBkZXNjZW5kYW50IHRvIGF2b2lkIHRoZSBzY3JvbGwgcG9zaXRpb24ganVtcGluZyBhcm91bmQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZvY3VzZWRNZW51ID0gKF9hID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsb3Nlc3QoJ2lvbi1tZW51Jyk7XG4gICAgICBpZiAoZm9jdXNlZE1lbnUgIT09IHRoaXMuZWwpIHtcbiAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgLy8gc3RhcnQgZm9jdXMgdHJhcHBpbmdcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgLy8gcmVtb3ZlIGNzcyBjbGFzc2VzIGFuZCB1bmhpZGUgY29udGVudCBmcm9tIHNjcmVlbiByZWFkZXJzXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19NRU5VKTtcbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRhYmluZGV4IGZyb20gdGhlIG1lbnUgY29tcG9uZW50XG4gICAgICAgKiBzbyB0aGF0IGlzIGNhbm5vdCBiZSB0YWJiZWQgdG8uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgaWYgKHRoaXMuY29udGVudEVsKSB7XG4gICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFyaWEtaGlkZGVuIHNvIHNjcmVlbiByZWFkZXJzXG4gICAgICAgICAqIGNhbiBhbm5vdW5jZSB0aGUgbWFpbiBjb250ZW50IGFnYWluXG4gICAgICAgICAqIG5vdyB0aGF0IHRoZSBtZW51IGlzIG5vdCB0aGUgbWFpbiBmb2N1cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGVudEVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJhY2tkcm9wRWwpIHtcbiAgICAgICAgdGhpcy5iYWNrZHJvcEVsLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19CQUNLRFJPUCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgfVxuICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgdGhpcy5pb25EaWRDbG9zZS5lbWl0KHtcbiAgICAgICAgcm9sZVxuICAgICAgfSk7XG4gICAgICAvLyB1bmRvIGZvY3VzIHRyYXBwaW5nIHNvIG11bHRpcGxlIG1lbnVzIGRvbid0IGNvbGxpZGVcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoKTtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKGlzQWN0aXZlICYmIHRoaXMuc3dpcGVHZXN0dXJlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG1lbnUgaXMgZGlzYWJsZWQgYnV0IGl0IGlzIHN0aWxsIG9wZW5cbiAgICAgKiB0aGVuIHdlIHNob3VsZCBjbG9zZSB0aGUgbWVudSBpbW1lZGlhdGVseS5cbiAgICAgKiBBZGRpdGlvbmFsbHksIGlmIHRoZSBtZW51IGlzIGluIHRoZSBwcm9jZXNzXG4gICAgICogb2YgYW5pbWF0aW5nIHtvcGVuLCBjbG9zZX0gYW5kIHRoZSBtZW51IGlzIGRpc2FibGVkXG4gICAgICogdGhlbiBpdCBzaG91bGQgc3RpbGwgYmUgY2xvc2VkIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSXQgaXMgcG9zc2libGUgdG8gZGlzYWJsZSB0aGUgbWVudSB3aGlsZVxuICAgICAgICogaXQgaXMgbWlkLWFuaW1hdGlvbi4gV2hlbiB0aGlzIGhhcHBlbnMsIHdlXG4gICAgICAgKiBuZWVkIHRvIHNldCB0aGUgb3BlcmF0aW9uQ2FuY2VsbGVkIGZsYWdcbiAgICAgICAqIHNvIHRoYXQgdGhpcy5fc2V0T3BlbiBrbm93cyB0byByZXR1cm4gZmFsc2VcbiAgICAgICAqIGFuZCBub3QgcnVuIHRoZSBcImFmdGVyQW5pbWF0aW9uXCIgY2FsbGJhY2suXG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIG1lbnUgaXMgZGlzYWJsZWQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAqIGZvcmNpYmx5IGNsb3NlIHRoZSBtZW51IGV2ZW4gaWYgaXQgaXMgb3Blbi5cbiAgICAgICAqL1xuICAgICAgdGhpcy5hZnRlckFuaW1hdGlvbihmYWxzZSwgR0VTVFVSRSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIGlzUGFuZVZpc2libGUsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgc2lkZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBDbG9zZSBXYXRjaGVyIGlzIGVuYWJsZWQgdGhlblxuICAgICAqIHRoZSBpb25CYWNrQnV0dG9uIGxpc3RlbmVyIGluIHRoZSBtZW51IGNvbnRyb2xsZXJcbiAgICAgKiB3aWxsIGhhbmRsZSBjbG9zaW5nIHRoZSBtZW51IHdoZW4gRXNjYXBlIGlzIHByZXNzZWQuXG4gICAgICovXG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMzQyZGI4NTUxZDI2NjA0MTI4YjI5YjIxZDJkOGMzNzU5Mzk3MmVkOScsXG4gICAgICBvbktleURvd246IHNob3VsZFVzZUNsb3NlV2F0Y2hlcigpID8gbnVsbCA6IHRoaXMub25LZXlkb3duLFxuICAgICAgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogaW5oZXJpdGVkQXR0cmlidXRlc1snYXJpYS1sYWJlbCddIHx8ICdtZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgW2BtZW51LXR5cGUtJHt0eXBlfWBdOiB0cnVlLFxuICAgICAgICAnbWVudS1lbmFibGVkJzogIWRpc2FibGVkLFxuICAgICAgICBbYG1lbnUtc2lkZS0ke3NpZGV9YF06IHRydWUsXG4gICAgICAgICdtZW51LXBhbmUtdmlzaWJsZSc6IGlzUGFuZVZpc2libGUsXG4gICAgICAgICdzcGxpdC1wYW5lLXNpZGUnOiBob3N0Q29udGV4dCgnaW9uLXNwbGl0LXBhbmUnLCBlbClcbiAgICAgIH1cbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzNjOWJlYzI4NjJiN2ZiOWQ4OGRlNjZiMTYwMGJlMDFmNjczNWUzZGQnLFxuICAgICAgY2xhc3M6IFwibWVudS1pbm5lclwiLFxuICAgICAgcGFydDogXCJjb250YWluZXJcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5tZW51SW5uZXJFbCA9IGVsXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNzYyODNiNGIyYTY1Yzc4NjQ2ZjkyYzNiMjczZWVhMDIxZWRhNDk5YydcbiAgICB9KSksIGgoXCJpb24tYmFja2Ryb3BcIiwge1xuICAgICAga2V5OiAnMTIxYzM5NWJjNDg3MzU0MmExYjZhZTJjOWUyM2YyZTg4MWU3NWQ5MycsXG4gICAgICByZWY6IGVsID0+IHRoaXMuYmFja2Ryb3BFbCA9IGVsLFxuICAgICAgY2xhc3M6IFwibWVudS1iYWNrZHJvcFwiLFxuICAgICAgdGFwcGFibGU6IGZhbHNlLFxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgIHBhcnQ6IFwiYmFja2Ryb3BcIlxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ0eXBlXCI6IFtcInR5cGVDaGFuZ2VkXCJdLFxuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICBcInNpZGVcIjogW1wic2lkZUNoYW5nZWRcIl0sXG4gICAgICBcInN3aXBlR2VzdHVyZVwiOiBbXCJzd2lwZUdlc3R1cmVDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IGNvbXB1dGVEZWx0YSA9IChkZWx0YVgsIGlzT3BlbiwgaXNFbmRTaWRlKSA9PiB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBpc09wZW4gIT09IGlzRW5kU2lkZSA/IC1kZWx0YVggOiBkZWx0YVgpO1xufTtcbmNvbnN0IGNoZWNrRWRnZVNpZGUgPSAod2luLCBwb3NYLCBpc0VuZFNpZGUsIG1heEVkZ2VTdGFydCkgPT4ge1xuICBpZiAoaXNFbmRTaWRlKSB7XG4gICAgcmV0dXJuIHBvc1ggPj0gd2luLmlubmVyV2lkdGggLSBtYXhFZGdlU3RhcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc1ggPD0gbWF4RWRnZVN0YXJ0O1xuICB9XG59O1xuY29uc3QgU0hPV19NRU5VID0gJ3Nob3ctbWVudSc7XG5jb25zdCBTSE9XX0JBQ0tEUk9QID0gJ3Nob3ctYmFja2Ryb3AnO1xuY29uc3QgTUVOVV9DT05URU5UX09QRU4gPSAnbWVudS1jb250ZW50LW9wZW4nO1xuTWVudS5zdHlsZSA9IHtcbiAgaW9zOiBJb25NZW51SW9zU3R5bGUwLFxuICBtZDogSW9uTWVudU1kU3R5bGUwXG59O1xuXG4vLyBHaXZlbiBhIG1lbnUsIHJldHVybiB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSB0b2dnbGUgc2hvdWxkIGJlIHZpc2libGVcbmNvbnN0IHVwZGF0ZVZpc2liaWxpdHkgPSBhc3luYyBtZW51ID0+IHtcbiAgY29uc3QgbWVudUVsID0gYXdhaXQgbWVudUNvbnRyb2xsZXIuZ2V0KG1lbnUpO1xuICByZXR1cm4gISEobWVudUVsICYmIChhd2FpdCBtZW51RWwuaXNBY3RpdmUoKSkpO1xufTtcbmNvbnN0IG1lbnVCdXR0b25Jb3NDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYm9yZGVyLXJhZGl1czppbml0aWFsOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDt6LWluZGV4OjF9aW9uLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgubWVudS1idXR0b24taGlkZGVuKXtkaXNwbGF5Om5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpfS5idXR0b24tbmF0aXZlOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MH1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfTpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHksIDApfX06aG9zdCguaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXI6bm90KC5pbi10b29sYmFyLWNvbG9yKSl7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWNvbG9yKSl9Omhvc3R7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6LjE7LS1ib3JkZXItcmFkaXVzOjRweDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLXBhZGRpbmctc3RhcnQ6NXB4Oy0tcGFkZGluZy1lbmQ6NXB4O21pbi1oZWlnaHQ6MzJweDtmb250LXNpemU6Y2xhbXAoMzFweCwgMS45Mzc1cmVtLCAzOC4xM3B4KX06aG9zdCguaW9uLWFjdGl2YXRlZCl7b3BhY2l0eTowLjR9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCg6aG92ZXIpe29wYWNpdHk6MC42fX1cIjtcbmNvbnN0IElvbk1lbnVCdXR0b25Jb3NTdHlsZTAgPSBtZW51QnV0dG9uSW9zQ3NzO1xuY29uc3QgbWVudUJ1dHRvbk1kQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvci1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJvcmRlci1yYWRpdXM6aW5pdGlhbDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDppbmhlcml0O2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7ei1pbmRleDoxfWlvbi1pY29ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5tZW51LWJ1dHRvbi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KX0uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjB9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX06aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5LCAwKX19Omhvc3QoLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi10b29sYmFyOm5vdCguaW4tdG9vbGJhci1jb2xvcikpe2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1jb2xvcikpfTpob3N0ey0tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xMjstLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5Oi4wNDstLWJvcmRlci1yYWRpdXM6NTAlOy0tY29sb3I6aW5pdGlhbDstLXBhZGRpbmctc3RhcnQ6OHB4Oy0tcGFkZGluZy1lbmQ6OHB4O3dpZHRoOjNyZW07aGVpZ2h0OjNyZW07Zm9udC1zaXplOjEuNXJlbX06aG9zdCguaW9uLWNvbG9yLmlvbi1mb2N1c2VkKTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9fVwiO1xuY29uc3QgSW9uTWVudUJ1dHRvbk1kU3R5bGUwID0gbWVudUJ1dHRvbk1kQ3NzO1xuY29uc3QgTWVudUJ1dHRvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5vbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZSh0aGlzLm1lbnUpO1xuICAgIH07XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tZW51ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYXV0b0hpZGUgPSB0cnVlO1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZWQoKTtcbiAgfVxuICBhc3luYyB2aXNpYmlsaXR5Q2hhbmdlZCgpIHtcbiAgICB0aGlzLnZpc2libGUgPSBhd2FpdCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgbWVudUljb24gPSBjb25maWcuZ2V0KCdtZW51SWNvbicsIG1vZGUgPT09ICdpb3MnID8gbWVudU91dGxpbmUgOiBtZW51U2hhcnApO1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuYXV0b0hpZGUgJiYgIXRoaXMudmlzaWJsZTtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgIH07XG4gICAgY29uc3QgYXJpYUxhYmVsID0gaW5oZXJpdGVkQXR0cmlidXRlc1snYXJpYS1sYWJlbCddIHx8ICdtZW51JztcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICczY2RlMzcwNGYyOGViMjc1ZjRhNWZmMjk4NWJiYjY4YzEwMjRlNzljJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAvLyBpb24tYnV0dG9ucyB0YXJnZXQgLmJ1dHRvblxuICAgICAgICAnbWVudS1idXR0b24taGlkZGVuJzogaGlkZGVuLFxuICAgICAgICAnbWVudS1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXRvb2xiYXItY29sb3InOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXJbY29sb3JdJywgdGhpcy5lbCksXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2EwMmEzMzc0Mjg4YmQxNzU5YjZlMzUyYWRhOGVhYjBkNDVjNjQyMmYnXG4gICAgfSwgYXR0cnMsIHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gICAgfSksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJ2JhNjk5ZjIyNzdhNGU3YjI3Y2U1ZTQyZmFlZWZjNTNkODgwNWJiNDMnLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc4MjlmZTZjYmRlYjE3M2Y1MGQxYTY3MDM4OWQxNTY1YmFhNjI3M2U0J1xuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdhOWE5ZjdiOGRjZmZjNjQ4YTg0MjlmZTBhZGJlNzY2ODY5ZGU3MmZkJyxcbiAgICAgIHBhcnQ6IFwiaWNvblwiLFxuICAgICAgaWNvbjogbWVudUljb24sXG4gICAgICBtb2RlOiBtb2RlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwge1xuICAgICAga2V5OiAnNDhkZWNhOWE3NzFhMjQ5ZjJmYzc2ZWFhOGI5NzQxYzhkNjZkODM1NScsXG4gICAgICB0eXBlOiBcInVuYm91bmRlZFwiXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5NZW51QnV0dG9uLnN0eWxlID0ge1xuICBpb3M6IElvbk1lbnVCdXR0b25Jb3NTdHlsZTAsXG4gIG1kOiBJb25NZW51QnV0dG9uTWRTdHlsZTBcbn07XG5jb25zdCBtZW51VG9nZ2xlQ3NzID0gXCI6aG9zdCgubWVudS10b2dnbGUtaGlkZGVuKXtkaXNwbGF5Om5vbmV9XCI7XG5jb25zdCBJb25NZW51VG9nZ2xlU3R5bGUwID0gbWVudVRvZ2dsZUNzcztcbmNvbnN0IE1lbnVUb2dnbGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci50b2dnbGUodGhpcy5tZW51KTtcbiAgICB9O1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubWVudSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gIH1cbiAgYXN5bmMgdmlzaWJpbGl0eUNoYW5nZWQoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gYXdhaXQgdXBkYXRlVmlzaWJpbGl0eSh0aGlzLm1lbnUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnODhlODhmYTEzYWM3ZjEwYmEzYWNmZTM3OGJkMTFjZGEwYzdlMjc0OScsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdtZW51LXRvZ2dsZS1oaWRkZW4nOiBoaWRkZW5cbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwYTE0YzdiNjNlZGE2NDcwMmQyZmQxYjRiYzdkYjQ4MDk4OTI4NDJkJ1xuICAgIH0pKTtcbiAgfVxufTtcbk1lbnVUb2dnbGUuc3R5bGUgPSBJb25NZW51VG9nZ2xlU3R5bGUwO1xuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBh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
