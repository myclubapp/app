import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-HHPBBMWP.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import {
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  isCancel,
  prepareOverlay,
  present,
  safeCall,
  setOverlayId
} from "./chunk-HYGHPGGJ.js";
import {
  createAnimation
} from "./chunk-BKPN4S4N.js";
import "./chunk-U6MFTC2E.js";
import {
  createColorClasses,
  getClassMap
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  getElementRoot,
  raf
} from "./chunk-RRWPYKYY.js";
import {
  createGesture
} from "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import {
  win
} from "./chunk-JYOJD2RE.js";
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

// node_modules/@ionic/core/dist/esm/ion-toast.entry.js
function getAnimationPosition(position, positionAnchor, mode, toast) {
  let offset;
  if (mode === "md") {
    offset = position === "top" ? 8 : -8;
  } else {
    offset = position === "top" ? 10 : -10;
  }
  if (positionAnchor && win) {
    warnIfAnchorIsHidden(positionAnchor, toast);
    const box = positionAnchor.getBoundingClientRect();
    if (position === "top") {
      offset += box.bottom;
    } else if (position === "bottom") {
      offset -= win.innerHeight - box.top;
    }
    return {
      top: `${offset}px`,
      bottom: `${offset}px`
    };
  } else {
    return {
      top: `calc(${offset}px + var(--ion-safe-area-top, 0px))`,
      bottom: `calc(${offset}px - var(--ion-safe-area-bottom, 0px))`
    };
  }
}
function warnIfAnchorIsHidden(positionAnchor, toast) {
  if (positionAnchor.offsetParent === null) {
    printIonWarning("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.", toast);
  }
}
var getOffsetForMiddlePosition = (toastHeight, wrapperHeight) => {
  return Math.floor(toastHeight / 2 - wrapperHeight / 2);
};
var iosEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", "translateY(-100%)", `translateY(${top})`);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo("transform", "translateY(100%)", `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation);
};
var iosLeaveAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", `translateY(${top})`, "translateY(-100%)");
      break;
    case "middle":
      wrapperAnimation.fromTo("opacity", 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo("transform", `translateY(${bottom})`, "translateY(100%)");
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var mdEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperEl.style.setProperty("transform", `translateY(${top})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperEl.style.setProperty("transform", `translateY(${bottom})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl).fromTo("opacity", 0.99, 0);
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var createSwipeToDismissGesture = (el, toastPosition, onDismiss) => {
  const wrapperEl = getElementRoot(el).querySelector(".toast-wrapper");
  const hostElHeight = el.clientHeight;
  const wrapperElBox = wrapperEl.getBoundingClientRect();
  let MAX_SWIPE_DISTANCE = 0;
  const DISMISS_THRESHOLD = 0.5;
  const STEP_OFFSET = el.position === "middle" ? 0.5 : 0;
  const INVERSION_FACTOR = el.position === "top" ? -1 : 1;
  const topPosition = getOffsetForMiddlePosition(hostElHeight, wrapperElBox.height);
  const SWIPE_UP_DOWN_KEYFRAMES = [{
    offset: 0,
    transform: `translateY(-${topPosition + wrapperElBox.height}px)`
  }, {
    offset: 0.5,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    transform: `translateY(${topPosition + wrapperElBox.height}px)`
  }];
  const swipeAnimation = createAnimation("toast-swipe-to-dismiss-animation").addElement(wrapperEl).duration(100);
  switch (el.position) {
    case "middle":
      MAX_SWIPE_DISTANCE = hostElHeight + wrapperElBox.height;
      swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES);
      swipeAnimation.progressStart(true, 0.5);
      break;
    case "top":
      MAX_SWIPE_DISTANCE = wrapperElBox.bottom;
      swipeAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${toastPosition.top})`
      }, {
        offset: 1,
        transform: "translateY(-100%)"
      }]);
      swipeAnimation.progressStart(true, 0);
      break;
    case "bottom":
    default:
      MAX_SWIPE_DISTANCE = hostElHeight - wrapperElBox.top;
      swipeAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${toastPosition.bottom})`
      }, {
        offset: 1,
        transform: "translateY(100%)"
      }]);
      swipeAnimation.progressStart(true, 0);
      break;
  }
  const computeStep = (delta) => {
    return delta * INVERSION_FACTOR / MAX_SWIPE_DISTANCE;
  };
  const onMove = (detail) => {
    const step = STEP_OFFSET + computeStep(detail.deltaY);
    swipeAnimation.progressStep(step);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 1e3) / MAX_SWIPE_DISTANCE * INVERSION_FACTOR;
    gesture.enable(false);
    let shouldDismiss = true;
    let playTo = 1;
    let step = 0;
    let remainingDistance = 0;
    if (el.position === "middle") {
      shouldDismiss = threshold >= DISMISS_THRESHOLD / 2 || threshold <= -DISMISS_THRESHOLD / 2;
      playTo = 1;
      step = 0;
      const wrapperElBox2 = wrapperEl.getBoundingClientRect();
      const startOffset = wrapperElBox2.top - topPosition;
      const startPosition = `${startOffset}px`;
      const offsetFactor = detail.deltaY <= 0 ? -1 : 1;
      const endOffset = (topPosition + wrapperElBox2.height) * offsetFactor;
      const endPosition = shouldDismiss ? `${endOffset}px` : "0px";
      const KEYFRAMES = [{
        offset: 0,
        transform: `translateY(${startPosition})`
      }, {
        offset: 1,
        transform: `translateY(${endPosition})`
      }];
      swipeAnimation.keyframes(KEYFRAMES);
      remainingDistance = endOffset - startOffset;
    } else {
      shouldDismiss = threshold >= DISMISS_THRESHOLD;
      playTo = shouldDismiss ? 1 : 0;
      step = computeStep(detail.deltaY);
      const remainingStepAmount = shouldDismiss ? 1 - step : step;
      remainingDistance = remainingStepAmount * MAX_SWIPE_DISTANCE;
    }
    const duration = Math.min(Math.abs(remainingDistance) / Math.abs(velocity), 200);
    swipeAnimation.onFinish(() => {
      if (shouldDismiss) {
        onDismiss();
        swipeAnimation.destroy();
      } else {
        if (el.position === "middle") {
          swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES).progressStart(true, 0.5);
        } else {
          swipeAnimation.progressStart(true, 0);
        }
        gesture.enable(true);
      }
    }, {
      oneTimeCallback: true
    }).progressEnd(playTo, step, duration);
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "toast-swipe-to-dismiss",
    gesturePriority: OVERLAY_GESTURE_PRIORITY,
    /**
     * Toast only supports vertical swipes.
     * This needs to be updated if we later
     * support horizontal swipes.
     */
    direction: "y",
    onMove,
    onEnd
  });
  return gesture;
};
var toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
var IonToastIosStyle0 = toastIosCss;
var toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
var IonToastMdStyle0 = toastMdCss;
var Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionToastDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.createSwipeGesture = (toastPosition) => {
      const gesture = this.gesture = createSwipeToDismissGesture(this.el, toastPosition, () => {
        this.dismiss(void 0, GESTURE);
      });
      gesture.enable(true);
    };
    this.destroySwipeGesture = () => {
      const {
        gesture
      } = this;
      if (gesture === void 0) {
        return;
      }
      gesture.destroy();
      this.gesture = void 0;
    };
    this.prefersSwipeGesture = () => {
      const {
        swipeGesture
      } = this;
      return swipeGesture === "vertical";
    };
    this.revealContentToScreenReader = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.color = void 0;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.cssClass = void 0;
    this.duration = config.getNumber("toastDuration", 0);
    this.header = void 0;
    this.layout = "baseline";
    this.message = void 0;
    this.keyboardClose = false;
    this.position = "bottom";
    this.positionAnchor = void 0;
    this.buttons = void 0;
    this.translucent = false;
    this.animated = true;
    this.icon = void 0;
    this.htmlAttributes = void 0;
    this.swipeGesture = void 0;
    this.isOpen = false;
    this.trigger = void 0;
  }
  swipeGestureChanged() {
    this.destroySwipeGesture();
    if (this.presented && this.prefersSwipeGesture()) {
      this.createSwipeGesture(this.lastPresentedPosition);
    }
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the toast overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      const {
        el,
        position
      } = this;
      const anchor = this.getAnchorElement();
      const animationPosition = getAnimationPosition(position, anchor, getIonMode(this), el);
      this.lastPresentedPosition = animationPosition;
      yield present(this, "toastEnter", iosEnterAnimation, mdEnterAnimation, {
        position,
        top: animationPosition.top,
        bottom: animationPosition.bottom
      });
      this.revealContentToScreenReader = true;
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(void 0, "timeout"), this.duration);
      }
      if (this.prefersSwipeGesture()) {
        this.createSwipeGesture(animationPosition);
      }
      unlock();
    });
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      var _a, _b;
      const unlock = yield this.lockController.lock();
      const {
        durationTimeout,
        position,
        lastPresentedPosition
      } = this;
      if (durationTimeout) {
        clearTimeout(durationTimeout);
      }
      const dismissed = yield dismiss(
        this,
        data,
        role,
        "toastLeave",
        iosLeaveAnimation,
        mdLeaveAnimation,
        /**
         * Fetch the cached position that was calculated back in the present
         * animation. We always want to animate the dismiss from the same
         * position the present stopped at, so the animation looks continuous.
         */
        {
          position,
          top: (_a = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.top) !== null && _a !== void 0 ? _a : "",
          bottom: (_b = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.bottom) !== null && _b !== void 0 ? _b : ""
        }
      );
      if (dismissed) {
        this.delegateController.removeViewFromDom();
        this.revealContentToScreenReader = false;
      }
      this.lastPresentedPosition = void 0;
      this.destroySwipeGesture();
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionToastDidDismiss");
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionToastWillDismiss");
  }
  getButtons() {
    const buttons = this.buttons ? this.buttons.map((b) => {
      return typeof b === "string" ? {
        text: b
      } : b;
    }) : [];
    return buttons;
  }
  /**
   * Returns the element specified by the positionAnchor prop,
   * or undefined if prop's value is an ID string and the element
   * is not found in the DOM.
   */
  getAnchorElement() {
    const {
      position,
      positionAnchor,
      el
    } = this;
    if (positionAnchor === void 0) {
      return;
    }
    if (position === "middle" && positionAnchor !== void 0) {
      printIonWarning('The positionAnchor property is ignored when using position="middle".', this.el);
      return void 0;
    }
    if (typeof positionAnchor === "string") {
      const foundEl = document.getElementById(positionAnchor);
      if (foundEl === null) {
        printIonWarning(`An anchor element with an ID of "${positionAnchor}" was not found in the DOM.`, el);
        return void 0;
      }
      return foundEl;
    }
    if (positionAnchor instanceof HTMLElement) {
      return positionAnchor;
    }
    printIonWarning("Invalid positionAnchor value:", positionAnchor, el);
    return void 0;
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(void 0, role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        try {
          const rtn = yield safeCall(button.handler);
          if (rtn === false) {
            return false;
          }
        } catch (e) {
          console.error(e);
        }
      }
      return true;
    });
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = getIonMode(this);
    const buttonGroupsClasses = {
      "toast-button-group": true,
      [`toast-button-group-${side}`]: true
    };
    return h("div", {
      class: buttonGroupsClasses
    }, buttons.map((b) => h("button", Object.assign({}, b.htmlAttributes, {
      type: "button",
      class: buttonClass(b),
      tabIndex: 0,
      onClick: () => this.buttonClick(b),
      part: buttonPart(b)
    }), h("div", {
      class: "toast-button-inner"
    }, b.icon && h("ion-icon", {
      "aria-hidden": "true",
      icon: b.icon,
      slot: b.text === void 0 ? "icon-only" : void 0,
      class: "toast-button-icon"
    }), b.text), mode === "md" && h("ion-ripple-effect", {
      type: b.icon !== void 0 && b.text === void 0 ? "unbounded" : "bounded"
    }))));
  }
  /**
   * Render the `message` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderToastMessage(key, ariaHidden = null) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        key,
        "aria-hidden": ariaHidden,
        class: "toast-message",
        part: "message",
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      key,
      "aria-hidden": ariaHidden,
      class: "toast-message",
      part: "message"
    }, message);
  }
  /**
   * Render the `header` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderHeader(key, ariaHidden = null) {
    return h("div", {
      key,
      class: "toast-header",
      "aria-hidden": ariaHidden,
      part: "header"
    }, this.header);
  }
  render() {
    const {
      layout,
      el,
      revealContentToScreenReader,
      header,
      message
    } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter((b) => b.side === "start");
    const endButtons = allButtons.filter((b) => b.side !== "start");
    const mode = getIonMode(this);
    const wrapperClass = {
      "toast-wrapper": true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true
    };
    if (layout === "stacked" && startButtons.length > 0 && endButtons.length > 0) {
      printIonWarning("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.", el);
    }
    return h(Host, Object.assign({
      key: "34036afc0701173d51c9c11ea4a2e1d65685ba41",
      tabindex: "-1"
    }, this.htmlAttributes, {
      style: {
        zIndex: `${6e4 + this.overlayIndex}`
      },
      class: createColorClasses(this.color, Object.assign(Object.assign({
        [mode]: true
      }, getClassMap(this.cssClass)), {
        "overlay-hidden": true,
        "toast-translucent": this.translucent
      })),
      onIonToastWillDismiss: this.dispatchCancelHandler
    }), h("div", {
      key: "d927e43957f47888ce4e64f1e99c935d55757af7",
      class: wrapperClass
    }, h("div", {
      key: "ca43bc42478181acdf8cdea6601a85fa95d12216",
      class: "toast-container",
      part: "container"
    }, this.renderButtons(startButtons, "start"), this.icon !== void 0 && h("ion-icon", {
      key: "fdd6fb8f6e947ed002bd2e63fdc8ec7e764f4a7d",
      class: "toast-icon",
      part: "icon",
      icon: this.icon,
      lazy: false,
      "aria-hidden": "true"
    }), h("div", {
      key: "37c16c81ee3e4304379dfbcabdffe73db73e4653",
      class: "toast-content",
      role: "status",
      "aria-atomic": "true",
      "aria-live": "polite"
    }, !revealContentToScreenReader && header !== void 0 && this.renderHeader("oldHeader", "true"), !revealContentToScreenReader && message !== void 0 && this.renderToastMessage("oldMessage", "true"), revealContentToScreenReader && header !== void 0 && this.renderHeader("header"), revealContentToScreenReader && message !== void 0 && this.renderToastMessage("header")), this.renderButtons(endButtons, "end"))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonClass = (button) => {
  return {
    "toast-button": true,
    "toast-button-icon-only": button.icon !== void 0 && button.text === void 0,
    [`toast-button-${button.role}`]: button.role !== void 0,
    "ion-focusable": true,
    "ion-activatable": true
  };
};
var buttonPart = (button) => {
  return isCancel(button.role) ? "button cancel" : "button";
};
Toast.style = {
  ios: IonToastIosStyle0,
  md: IonToastMdStyle0
};
export {
  Toast as ion_toast
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-toast.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdG9hc3QuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IEUgYXMgRU5BQkxFX0hUTUxfQ09OVEVOVF9ERUZBVUxULCBhIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9jb25maWctNDljODgyMTUuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRFbGVtZW50Um9vdCwgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVMb2NrQ29udHJvbGxlciB9IGZyb20gJy4vbG9jay1jb250cm9sbGVyLTMxNjkyOGJlLmpzJztcbmltcG9ydCB7IHAgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgeyBPIGFzIE9WRVJMQVlfR0VTVFVSRV9QUklPUklUWSwgZCBhcyBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIsIGUgYXMgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIsIGkgYXMgaXNDYW5jZWwsIGogYXMgcHJlcGFyZU92ZXJsYXksIGsgYXMgc2V0T3ZlcmxheUlkLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCwgRyBhcyBHRVNUVVJFIH0gZnJvbSAnLi9vdmVybGF5cy00MWE1ZDUxYi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMDFmM2YyOWMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25maWcsIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tZWFiNWE0Y2EuanMnO1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTM5NzgyNjQyLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgQ1NTIHRvcCBhbmQgYm90dG9tIHBvc2l0aW9uIG9mIHRoZSB0b2FzdCwgdG8gYmUgdXNlZFxuICogYXMgc3RhcnRpbmcgcG9pbnRzIGZvciB0aGUgYW5pbWF0aW9uIGtleWZyYW1lcy5cbiAqXG4gKiBUaGUgZGVmYXVsdCBhbmltYXRpb25zIGZvciBib3RoIE1EIGFuZCBpT1NcbiAqIHVzZSB0cmFuc2xhdGVZLCB3aGljaCBjYWxjdWxhdGVzIGZyb20gdGhlXG4gKiB0b3AgZWRnZSBvZiB0aGUgc2NyZWVuLiBUaGlzIGJlaGF2aW9yIGltcGFjdHNcbiAqIGhvdyB3ZSBjb21wdXRlIHRoZSBvZmZzZXQgd2hlbiBhIHRvYXN0IGhhc1xuICogcG9zaXRpb249J2JvdHRvbScgc2luY2Ugd2UgbmVlZCB0byBjYWxjdWxhdGUgZnJvbVxuICogdGhlIGJvdHRvbSBlZGdlIG9mIHRoZSBzY3JlZW4gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gcG9zaXRpb24gVGhlIHZhbHVlIG9mIHRoZSB0b2FzdCdzIHBvc2l0aW9uIHByb3AuXG4gKiBAcGFyYW0gcG9zaXRpb25BbmNob3IgVGhlIGVsZW1lbnQgdGhlIHRvYXN0IHNob3VsZCBiZSBhbmNob3JlZCB0byxcbiAqIGlmIGFwcGxpY2FibGUuXG4gKiBAcGFyYW0gbW9kZSBUaGUgdG9hc3QgY29tcG9uZW50J3MgbW9kZSAobWQsIGlvcywgZXRjKS5cbiAqIEBwYXJhbSB0b2FzdCBBIHJlZmVyZW5jZSB0byB0aGUgdG9hc3QgZWxlbWVudCBpdHNlbGYuXG4gKi9cbmZ1bmN0aW9uIGdldEFuaW1hdGlvblBvc2l0aW9uKHBvc2l0aW9uLCBwb3NpdGlvbkFuY2hvciwgbW9kZSwgdG9hc3QpIHtcbiAgLyoqXG4gICAqIFN0YXJ0IHdpdGggYSBwcmVkZWZpbmVkIG9mZnNldCBmcm9tIHRoZSBlZGdlIHRoZSB0b2FzdCB3aWxsIGJlXG4gICAqIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8sIHdoZXRoZXIgb24gdGhlIHNjcmVlbiBvciBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIGxldCBvZmZzZXQ7XG4gIGlmIChtb2RlID09PSAnbWQnKSB7XG4gICAgb2Zmc2V0ID0gcG9zaXRpb24gPT09ICd0b3AnID8gOCA6IC04O1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHBvc2l0aW9uID09PSAndG9wJyA/IDEwIDogLTEwO1xuICB9XG4gIC8qKlxuICAgKiBJZiBwb3NpdGlvbkFuY2hvciBpcyBkZWZpbmVkLCBhZGQgaW4gdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRhcmdldFxuICAgKiBzY3JlZW4gZWRnZSB0byB0aGUgdGFyZ2V0IGFuY2hvciBlZGdlLiBGb3IgcG9zaXRpb249XCJ0b3BcIiwgdGhlXG4gICAqIGJvdHRvbSBhbmNob3IgZWRnZSBpcyB0YXJnZXRlZC4gRm9yIHBvc2l0aW9uPVwiYm90dG9tXCIsIHRoZSB0b3BcbiAgICogYW5jaG9yIGVkZ2UgaXMgdGFyZ2V0ZWQuXG4gICAqL1xuICBpZiAocG9zaXRpb25BbmNob3IgJiYgd2luKSB7XG4gICAgd2FybklmQW5jaG9ySXNIaWRkZW4ocG9zaXRpb25BbmNob3IsIHRvYXN0KTtcbiAgICBjb25zdCBib3ggPSBwb3NpdGlvbkFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBvZmZzZXQgKz0gYm94LmJvdHRvbTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgLyoqXG4gICAgICAgKiBKdXN0IGJveC50b3AgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBlZGdlIG9mIHRoZSBzY3JlZW5cbiAgICAgICAqIHRvIHRoZSB0b3AgZWRnZSBvZiB0aGUgYW5jaG9yLiBXZSB3YW50IHRvIGNhbGN1bGF0ZSBmcm9tIHRoZVxuICAgICAgICogYm90dG9tIGVkZ2Ugb2YgdGhlIHNjcmVlbiBpbnN0ZWFkLlxuICAgICAgICovXG4gICAgICBvZmZzZXQgLT0gd2luLmlubmVySGVpZ2h0IC0gYm94LnRvcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2UgZG9uJ3QgaW5jbHVkZSBzYWZlIGFyZWEgaGVyZSBiZWNhdXNlIHRoYXQgc2hvdWxkIGFscmVhZHkgYmVcbiAgICAgKiBhY2NvdW50ZWQgZm9yIHdoZW4gY2hlY2tpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbmNob3IuXG4gICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYCR7b2Zmc2V0fXB4YCxcbiAgICAgIGJvdHRvbTogYCR7b2Zmc2V0fXB4YFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYGNhbGMoJHtvZmZzZXR9cHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMHB4KSlgLFxuICAgICAgYm90dG9tOiBgY2FsYygke29mZnNldH1weCAtIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwcHgpKWBcbiAgICB9O1xuICB9XG59XG4vKipcbiAqIElmIHRoZSBhbmNob3IgZWxlbWVudCBpcyBoaWRkZW4sIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gKiB3aWxsIHJldHVybiBhbGwgMHMgZm9yIGl0LCB3aGljaCBjYW4gY2F1c2UgdW5leHBlY3RlZFxuICogcmVzdWx0cyBpbiB0aGUgcG9zaXRpb24gY2FsY3VsYXRpb24gd2hlbiBhbmltYXRpbmcuXG4gKi9cbmZ1bmN0aW9uIHdhcm5JZkFuY2hvcklzSGlkZGVuKHBvc2l0aW9uQW5jaG9yLCB0b2FzdCkge1xuICBpZiAocG9zaXRpb25BbmNob3Iub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XG4gICAgcHJpbnRJb25XYXJuaW5nKCdUaGUgcG9zaXRpb25BbmNob3IgZWxlbWVudCBmb3IgaW9uLXRvYXN0IHdhcyBmb3VuZCBpbiB0aGUgRE9NLCBidXQgYXBwZWFycyB0byBiZSBoaWRkZW4uIFRoaXMgbWF5IGxlYWQgdG8gdW5leHBlY3RlZCBwb3NpdGlvbmluZyBvZiB0aGUgdG9hc3QuJywgdG9hc3QpO1xuICB9XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHRvcCBvZmZzZXQgcmVxdWlyZWQgdG8gcGxhY2VcbiAqIHRoZSB0b2FzdCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXG4gKiBPbmx5IG5lZWRlZCB3aGVuIHBvc2l0aW9uPVwidG9hc3RcIi5cbiAqIEBwYXJhbSB0b2FzdEhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGlvbi10b2FzdCBlbGVtZW50XG4gKiBAcGFyYW0gd3JhcHBlckhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIC50b2FzdC13cmFwcGVyIGVsZW1lbnRcbiAqIGluc2lkZSB0aGUgdG9hc3QncyBzaGFkb3cgcm9vdC5cbiAqL1xuY29uc3QgZ2V0T2Zmc2V0Rm9yTWlkZGxlUG9zaXRpb24gPSAodG9hc3RIZWlnaHQsIHdyYXBwZXJIZWlnaHQpID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IodG9hc3RIZWlnaHQgLyAyIC0gd3JhcHBlckhlaWdodCAvIDIpO1xufTtcblxuLyoqXG4gKiBpT1MgVG9hc3QgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgb3B0cykgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIHRvcCxcbiAgICBib3R0b21cbiAgfSA9IG9wdHM7XG4gIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICBjb25zdCB3cmFwcGVyRWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudCh3cmFwcGVyRWwpO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgtMTAwJSknLCBgdHJhbnNsYXRlWSgke3RvcH0pYCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgY29uc3QgdG9wUG9zaXRpb24gPSBnZXRPZmZzZXRGb3JNaWRkbGVQb3NpdGlvbihiYXNlRWwuY2xpZW50SGVpZ2h0LCB3cmFwcGVyRWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSBgJHt0b3BQb3NpdGlvbn1weGA7XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsIGB0cmFuc2xhdGVZKCR7Ym90dG9tfSlgKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmVhc2luZygnY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKScpLmR1cmF0aW9uKDQwMCkuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xufTtcblxuLyoqXG4gKiBpT1MgVG9hc3QgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCwgb3B0cykgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIHRvcCxcbiAgICBib3R0b21cbiAgfSA9IG9wdHM7XG4gIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICBjb25zdCB3cmFwcGVyRWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudCh3cmFwcGVyRWwpO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RvcH0pYCwgJ3RyYW5zbGF0ZVkoLTEwMCUpJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtib3R0b219KWAsICd0cmFuc2xhdGVZKDEwMCUpJyk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpLmR1cmF0aW9uKDMwMCkuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xufTtcblxuLyoqXG4gKiBNRCBUb2FzdCBFbnRlciBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvbixcbiAgICB0b3AsXG4gICAgYm90dG9tXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qgd3JhcHBlckVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB3cmFwcGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dG9wfSlgKTtcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgY29uc3QgdG9wUG9zaXRpb24gPSBnZXRPZmZzZXRGb3JNaWRkbGVQb3NpdGlvbihiYXNlRWwuY2xpZW50SGVpZ2h0LCB3cmFwcGVyRWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSBgJHt0b3BQb3NpdGlvbn1weGA7XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHdyYXBwZXJFbC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtib3R0b219KWApO1xuICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDAwKS5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XG59O1xuXG4vKipcbiAqIG1kIFRvYXN0IExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICBjb25zdCB3cmFwcGVyRWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudCh3cmFwcGVyRWwpLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpLmR1cmF0aW9uKDMwMCkuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBnZXN0dXJlIHRoYXQgYWxsb3dzIHRoZSBUb2FzdFxuICogdG8gYmUgc3dpcGVkIHRvIGRpc21pc3MuXG4gKiBAcGFyYW0gZWwgLSBUaGUgVG9hc3QgZWxlbWVudFxuICogQHBhcmFtIHRvYXN0UG9zaXRpb24gLSBUaGUgbGFzdCBjb21wdXRlZCBwb3NpdGlvbiBvZiB0aGUgVG9hc3QuIFRoaXMgaXMgY29tcHV0ZWQgaW4gdGhlIFwicHJlc2VudFwiIG1ldGhvZC5cbiAqIEBwYXJhbSBvbkRpc21pc3MgLSBBIGNhbGxiYWNrIHRvIGZpcmUgd2hlbiB0aGUgVG9hc3Qgd2FzIHN3aXBlZCB0byBkaXNtaXNzLlxuICovXG5jb25zdCBjcmVhdGVTd2lwZVRvRGlzbWlzc0dlc3R1cmUgPSAoZWwsIHRvYXN0UG9zaXRpb24sIG9uRGlzbWlzcykgPT4ge1xuICAvKipcbiAgICogVXNlcnMgc2hvdWxkIHN3aXBlIG9uIHRoZSB2aXNpYmxlIHRvYXN0IHdyYXBwZXJcbiAgICogcmF0aGVyIHRoYW4gb24gaW9uLXRvYXN0IHdoaWNoIGNvdmVycyB0aGUgZW50aXJlIHNjcmVlbi5cbiAgICogV2hlbiB0ZXN0aW5nIHRoZSBjbGFzcyBpbnN0YW5jZSB0aGUgaW5uZXIgd3JhcHBlciB3aWxsIG5vdFxuICAgKiBiZSBkZWZpbmVkLiBBcyBhIHJlc3VsdCwgd2UgdXNlIGEgcGxhY2Vob2xkZXIgZWxlbWVudCBpbiB0aG9zZSBlbnZpcm9ubWVudHMuXG4gICAqL1xuICBjb25zdCB3cmFwcGVyRWwgPSBnZXRFbGVtZW50Um9vdChlbCkucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcbiAgY29uc3QgaG9zdEVsSGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCB3cmFwcGVyRWxCb3ggPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBhbW91bnQgdGhhdFxuICAgKiB0aGUgdG9hc3QgY2FuIGJlIHN3aXBlZC4gVGhpcyBzaG91bGRcbiAgICogYWNjb3VudCBmb3IgdGhlIHdyYXBwZXIgZWxlbWVudCdzIGhlaWdodFxuICAgKiB0b28gc28gdGhlIHRvYXN0IGNhbiBiZSBzd2lwZWQgb2Zmc2NyZWVuXG4gICAqIGNvbXBsZXRlbHkuXG4gICAqL1xuICBsZXQgTUFYX1NXSVBFX0RJU1RBTkNFID0gMDtcbiAgLyoqXG4gICAqIFRoZSBzdGVwIHZhbHVlIGF0IHdoaWNoIGEgdG9hc3RcbiAgICogaXMgZWxpZ2libGUgZm9yIGRpc21pc3NpbmcgdmlhIGdlc3R1cmUuXG4gICAqL1xuICBjb25zdCBESVNNSVNTX1RIUkVTSE9MRCA9IDAuNTtcbiAgLyoqXG4gICAqIFRoZSBtaWRkbGUgcG9zaXRpb24gVG9hc3Qgc3RhcnRzIDUwJSBvZiB0aGUgd2F5XG4gICAqIHRocm91Z2ggdGhlIGFuaW1hdGlvbiwgc28gd2UgbmVlZCB0byB1c2UgdGhpc1xuICAgKiBhcyB0aGUgc3RhcnRpbmcgcG9pbnQgZm9yIG91ciBzdGVwIHZhbHVlcy5cbiAgICovXG4gIGNvbnN0IFNURVBfT0ZGU0VUID0gZWwucG9zaXRpb24gPT09ICdtaWRkbGUnID8gMC41IDogMDtcbiAgLyoqXG4gICAqIFdoZW4gdGhlIFRvYXN0IGlzIGF0IHRoZSB0b3AgdXNlcnMgd2lsbCBiZVxuICAgKiBzd2lwaW5nIHVwLiBBcyBhIHJlc3VsdCwgdGhlIGRlbHRhIHZhbHVlcyB3aWxsIGJlXG4gICAqIG5lZ2F0aXZlIG51bWJlcnMgd2hpY2ggd2lsbCByZXN1bHQgaW4gbmVnYXRpdmUgc3RlcHNcbiAgICogYW5kIHRocmVzaG9sZHMuIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIG1ha2UgdGhvc2UgbnVtYmVyc1xuICAgKiBwb3NpdGl2ZS5cbiAgICovXG4gIGNvbnN0IElOVkVSU0lPTl9GQUNUT1IgPSBlbC5wb3NpdGlvbiA9PT0gJ3RvcCcgPyAtMSA6IDE7XG4gIC8qKlxuICAgKiBUaGUgdG9wIG9mZnNldCB0aGF0IHBsYWNlcyB0aGVcbiAgICogdG9hc3QgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxuICAgKiBPbmx5IG5lZWRlZCB3aGVuIHBvc2l0aW9uPVwibWlkZGxlXCIuXG4gICAqL1xuICBjb25zdCB0b3BQb3NpdGlvbiA9IGdldE9mZnNldEZvck1pZGRsZVBvc2l0aW9uKGhvc3RFbEhlaWdodCwgd3JhcHBlckVsQm94LmhlaWdodCk7XG4gIGNvbnN0IFNXSVBFX1VQX0RPV05fS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHt0b3BQb3NpdGlvbiArIHdyYXBwZXJFbEJveC5oZWlnaHR9cHgpYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjUsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwcHgpYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0b3BQb3NpdGlvbiArIHdyYXBwZXJFbEJveC5oZWlnaHR9cHgpYFxuICB9XTtcbiAgY29uc3Qgc3dpcGVBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ3RvYXN0LXN3aXBlLXRvLWRpc21pc3MtYW5pbWF0aW9uJykuYWRkRWxlbWVudCh3cmFwcGVyRWwpXG4gIC8qKlxuICAgKiBUaGUgc3BlY2lmaWMgdmFsdWUgaGVyZSBkb2VzIG5vdCBhY3R1YWxseVxuICAgKiBtYXR0ZXIuIFdlIGp1c3QgbmVlZCB0aGlzIHRvIGJlIGEgcG9zaXRpdmVcbiAgICogdmFsdWUgc28gdGhlIGFuaW1hdGlvbiBkb2VzIG5vdCBqdW1wXG4gICAqIHRvIHRoZSBlbmQgd2hlbiB0aGUgdXNlciBiZWluZ3MgdG8gZHJhZy5cbiAgICovLmR1cmF0aW9uKDEwMCk7XG4gIHN3aXRjaCAoZWwucG9zaXRpb24pIHtcbiAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgTUFYX1NXSVBFX0RJU1RBTkNFID0gaG9zdEVsSGVpZ2h0ICsgd3JhcHBlckVsQm94LmhlaWdodDtcbiAgICAgIHN3aXBlQW5pbWF0aW9uLmtleWZyYW1lcyhTV0lQRV9VUF9ET1dOX0tFWUZSQU1FUyk7XG4gICAgICAvKipcbiAgICAgICAqIFRvYXN0IGNhbiBiZSBzd2lwZWQgdXAgb3IgZG93biBidXRcbiAgICAgICAqIHNob3VsZCBzdGFydCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgKi9cbiAgICAgIHN3aXBlQW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgMC41KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBib3R0b20gZWRnZSBvZiB0aGUgd3JhcHBlclxuICAgICAgICogaW5jbHVkZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHRvcFxuICAgICAgICogb2YgdGhlIHNjcmVlbiBhbmQgdGhlIHRvcCBvZiB0aGUgd3JhcHBlclxuICAgICAgICogYXMgd2VsbCBhcyB0aGUgd3JhcHBlciBoZWlnaHQgc28gdGhlIHdyYXBwZXJcbiAgICAgICAqIGNhbiBiZSBkcmFnZ2VkIGZ1bGx5IG9mZnNjcmVlbi5cbiAgICAgICAqL1xuICAgICAgTUFYX1NXSVBFX0RJU1RBTkNFID0gd3JhcHBlckVsQm94LmJvdHRvbTtcbiAgICAgIHN3aXBlQW5pbWF0aW9uLmtleWZyYW1lcyhbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0b2FzdFBvc2l0aW9uLnRvcH0pYFxuICAgICAgfSwge1xuICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgfV0pO1xuICAgICAgc3dpcGVBbmltYXRpb24ucHJvZ3Jlc3NTdGFydCh0cnVlLCAwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBjb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVcbiAgICAgICAqIHRvcCBvZiB0aGUgd3JhcHBlciBhbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICAgICAqIHNjcmVlbiBpbmNsdWRpbmcgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlclxuICAgICAgICogZWxlbWVudCBzbyBpdCBjYW4gYmUgZHJhZ2dlZCBmdWxseSBvZmZzY3JlZW4uXG4gICAgICAgKi9cbiAgICAgIE1BWF9TV0lQRV9ESVNUQU5DRSA9IGhvc3RFbEhlaWdodCAtIHdyYXBwZXJFbEJveC50b3A7XG4gICAgICBzd2lwZUFuaW1hdGlvbi5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dG9hc3RQb3NpdGlvbi5ib3R0b219KWBcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgfV0pO1xuICAgICAgc3dpcGVBbmltYXRpb24ucHJvZ3Jlc3NTdGFydCh0cnVlLCAwKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGNvbnN0IGNvbXB1dGVTdGVwID0gZGVsdGEgPT4ge1xuICAgIHJldHVybiBkZWx0YSAqIElOVkVSU0lPTl9GQUNUT1IgLyBNQVhfU1dJUEVfRElTVEFOQ0U7XG4gIH07XG4gIGNvbnN0IG9uTW92ZSA9IGRldGFpbCA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IFNURVBfT0ZGU0VUICsgY29tcHV0ZVN0ZXAoZGV0YWlsLmRlbHRhWSk7XG4gICAgc3dpcGVBbmltYXRpb24ucHJvZ3Jlc3NTdGVwKHN0ZXApO1xuICB9O1xuICBjb25zdCBvbkVuZCA9IGRldGFpbCA9PiB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBkZXRhaWwudmVsb2NpdHlZO1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IChkZXRhaWwuZGVsdGFZICsgdmVsb2NpdHkgKiAxMDAwKSAvIE1BWF9TV0lQRV9ESVNUQU5DRSAqIElOVkVSU0lPTl9GQUNUT1I7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0aGUgZ2VzdHVyZSBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEl0IHdpbGwgYmUgcmUtZW5hYmxlZCBpZiB0aGUgdG9hc3QgYW5pbWF0ZXMgYmFjayB0b1xuICAgICAqIGl0cyBpbml0aWFsIHByZXNlbnRlZCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBnZXN0dXJlLmVuYWJsZShmYWxzZSk7XG4gICAgbGV0IHNob3VsZERpc21pc3MgPSB0cnVlO1xuICAgIGxldCBwbGF5VG8gPSAxO1xuICAgIGxldCBzdGVwID0gMDtcbiAgICBsZXQgcmVtYWluaW5nRGlzdGFuY2UgPSAwO1xuICAgIGlmIChlbC5wb3NpdGlvbiA9PT0gJ21pZGRsZScpIHtcbiAgICAgIC8qKlxuICAgICAgICogQSBtaWRkbGUgcG9zaXRpb25lZCBUb2FzdCBhcHBlYXJzXG4gICAgICAgKiBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gKGF0IGFuaW1hdGlvbiBvZmZzZXQgMC41KS5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCB0aGUgdGhyZXNob2xkIHdpbGwgYmUgY2FsY3VsYXRlZCByZWxhdGl2ZVxuICAgICAgICogdG8gdGhpcyBzdGFydGluZyBwb3NpdGlvbi4gSW4gb3RoZXIgd29yZHMgYXQgYW5pbWF0aW9uIG9mZnNldCAwLjVcbiAgICAgICAqIHRoZSB0aHJlc2hvbGQgd2lsbCBiZSAwLiBXZSB3YW50IHRoZSBtaWRkbGUgVG9hc3QgdG8gYmUgZWxpZ2libGVcbiAgICAgICAqIGZvciBkaXNtaXNzIHdoZW4gdGhlIHVzZXIgaGFzIHN3aXBlZCBlaXRoZXIgaGFsZiB3YXkgdXAgb3IgZG93biB0aGVcbiAgICAgICAqIHNjcmVlbi4gQXMgYSByZXN1bHQsIHdlIGRpdmlkZSBESVNNSVNTX1RIUkVTSE9MRCBpbiBoYWxmLiBXZSBhbHNvXG4gICAgICAgKiBjb25zaWRlciB3aGVuIHRoZSB0aHJlc2hvbGQgaXMgYSBuZWdhdGl2ZSBpbiB0aGUgZXZlbnQgdGhlXG4gICAgICAgKiB1c2VyIGRyYWdzIHVwIChzaW5jZSB0aGUgZGVsdGFZIHdpbGwgYWxzbyBiZSBuZWdhdGl2ZSkuXG4gICAgICAgKi9cbiAgICAgIHNob3VsZERpc21pc3MgPSB0aHJlc2hvbGQgPj0gRElTTUlTU19USFJFU0hPTEQgLyAyIHx8IHRocmVzaG9sZCA8PSAtRElTTUlTU19USFJFU0hPTEQgLyAyO1xuICAgICAgLyoqXG4gICAgICAgKiBTaW5jZSB3ZSBhcmUgcmVwbGFjaW5nIHRoZSBrZXlmcmFtZXNcbiAgICAgICAqIGJlbG93IHRoZSBhbmltYXRpb24gYWx3YXlzIHN0YXJ0cyBmcm9tXG4gICAgICAgKiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXcga2V5ZnJhbWVzLlxuICAgICAgICogU2ltaWxhcmx5LCB3ZSBhcmUgYWx3YXlzIHBsYXlpbmcgdG9cbiAgICAgICAqIHRoZSBlbmQgb2YgdGhlIG5ldyBrZXlmcmFtZXMuXG4gICAgICAgKi9cbiAgICAgIHBsYXlUbyA9IDE7XG4gICAgICBzdGVwID0gMDtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIFRvYXN0IHNob3VsZCBhbmltYXRlIGZyb20gd2hlcmV2ZXIgaXRzXG4gICAgICAgKiBjdXJyZW50IHBvc2l0aW9uIGlzIHRvIHRoZSBkZXNpcmVkIGVuZCBzdGF0ZS5cbiAgICAgICAqXG4gICAgICAgKiBUbyBiZWdpbiwgd2UgZ2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZVxuICAgICAgICogVG9hc3QgZm9yIGl0cyBzdGFydGluZyBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcHBlckVsQm94ID0gd3JhcHBlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc3RhcnRPZmZzZXQgPSB3cmFwcGVyRWxCb3gudG9wIC0gdG9wUG9zaXRpb247XG4gICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gYCR7c3RhcnRPZmZzZXR9cHhgO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgZGVsdGFZIGlzIG5lZ2F0aXZlIHRoZW4gdGhlIHVzZXIgaXMgc3dpcGluZ1xuICAgICAgICogdXAsIHNvIHRoZSBUb2FzdCBzaG91bGQgYW5pbWF0ZSB0byB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgKiBJZiB0aGUgZGVsdGFZIGlzIHBvc2l0aXZlIHRoZW4gdGhlIHVzZXIgaXMgc3dpcGluZ1xuICAgICAgICogZG93biwgc28gdGhlIFRvYXN0IHNob3VsZCBhbmltYXRlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAgICAqIFdlIGFsc28gYWNjb3VudCBmb3Igd2hlbiB0aGUgZGVsdGFZIGlzIDAsIGJ1dCByZWFsaXN0aWNhbGx5XG4gICAgICAgKiB0aGF0IHNob3VsZCBuZXZlciBoYXBwZW4gYmVjYXVzZSBpdCBtZWFucyB0aGUgdXNlciBkaWQgbm90IGRyYWdcbiAgICAgICAqIHRoZSB0b2FzdC5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgb2Zmc2V0RmFjdG9yID0gZGV0YWlsLmRlbHRhWSA8PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZW5kT2Zmc2V0ID0gKHRvcFBvc2l0aW9uICsgd3JhcHBlckVsQm94LmhlaWdodCkgKiBvZmZzZXRGYWN0b3I7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBUb2FzdCBzaG91bGQgZGlzbWlzc1xuICAgICAgICogdGhlbiB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWRnZSBvZlxuICAgICAgICogdGhlIHNjcmVlbiBpdCBzaG91bGQgYW5pbWF0ZSB0b3dhcmRzLlxuICAgICAgICogQnkgZGVmYXVsdCwgdGhlIFRvYXN0IHdpbGwgY29tZVxuICAgICAgICogYmFjayB0byBpdHMgZGVmYXVsdCBzdGF0ZSBpbiB0aGVcbiAgICAgICAqIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxuICAgICAgICovXG4gICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IHNob3VsZERpc21pc3MgPyBgJHtlbmRPZmZzZXR9cHhgIDogJzBweCc7XG4gICAgICBjb25zdCBLRVlGUkFNRVMgPSBbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtzdGFydFBvc2l0aW9ufSlgXG4gICAgICB9LCB7XG4gICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2VuZFBvc2l0aW9ufSlgXG4gICAgICB9XTtcbiAgICAgIHN3aXBlQW5pbWF0aW9uLmtleWZyYW1lcyhLRVlGUkFNRVMpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb21wdXRlIHRoZSByZW1haW5pbmcgYW1vdW50IG9mIHBpeGVscyB0aGVcbiAgICAgICAqIHRvYXN0IG5lZWRzIHRvIG1vdmUgdG8gYmUgZnVsbHkgZGlzbWlzc2VkLlxuICAgICAgICovXG4gICAgICByZW1haW5pbmdEaXN0YW5jZSA9IGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG91bGREaXNtaXNzID0gdGhyZXNob2xkID49IERJU01JU1NfVEhSRVNIT0xEO1xuICAgICAgcGxheVRvID0gc2hvdWxkRGlzbWlzcyA/IDEgOiAwO1xuICAgICAgc3RlcCA9IGNvbXB1dGVTdGVwKGRldGFpbC5kZWx0YVkpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb21wdXRlIHRoZSByZW1haW5pbmcgYW1vdW50IG9mIHBpeGVscyB0aGVcbiAgICAgICAqIHRvYXN0IG5lZWRzIHRvIG1vdmUgdG8gYmUgZnVsbHkgZGlzbWlzc2VkLlxuICAgICAgICovXG4gICAgICBjb25zdCByZW1haW5pbmdTdGVwQW1vdW50ID0gc2hvdWxkRGlzbWlzcyA/IDEgLSBzdGVwIDogc3RlcDtcbiAgICAgIHJlbWFpbmluZ0Rpc3RhbmNlID0gcmVtYWluaW5nU3RlcEFtb3VudCAqIE1BWF9TV0lQRV9ESVNUQU5DRTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGFuaW1hdGlvbiBzcGVlZCBzaG91bGQgZGVwZW5kIG9uIGhvdyBxdWlja2x5XG4gICAgICogdGhlIHVzZXIgZmxpY2tzIHRoZSB0b2FzdCBhY3Jvc3MgdGhlIHNjcmVlbi4gSG93ZXZlcixcbiAgICAgKiBpdCBzaG91bGQgYmUgbm8gc2xvd2VyIHRoYW4gMjAwbXMuXG4gICAgICogV2UgdXNlIE1hdGguYWJzIG9uIHRoZSByZW1haW5pbmdEaXN0YW5jZSBiZWNhdXNlIHRoYXQgdmFsdWVcbiAgICAgKiBjYW4gYmUgbmVnYXRpdmUgd2hlbiBzd2lwaW5nIHVwIG9uIGEgbWlkZGxlIHBvc2l0aW9uIHRvYXN0LlxuICAgICAqL1xuICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5taW4oTWF0aC5hYnMocmVtYWluaW5nRGlzdGFuY2UpIC8gTWF0aC5hYnModmVsb2NpdHkpLCAyMDApO1xuICAgIHN3aXBlQW5pbWF0aW9uLm9uRmluaXNoKCgpID0+IHtcbiAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgICBzd2lwZUFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWwucG9zaXRpb24gPT09ICdtaWRkbGUnKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlIHRvYXN0IHNuYXBwZWQgYmFjayB0b1xuICAgICAgICAgICAqIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiB3ZSBuZWVkXG4gICAgICAgICAgICogdG8gcmVzZXQgdGhlIGtleWZyYW1lc1xuICAgICAgICAgICAqIHNvIHRoZSB0b2FzdCBjYW4gYmUgc3dpcGVkXG4gICAgICAgICAgICogdXAgb3IgZG93biBhZ2Fpbi5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzd2lwZUFuaW1hdGlvbi5rZXlmcmFtZXMoU1dJUEVfVVBfRE9XTl9LRVlGUkFNRVMpLnByb2dyZXNzU3RhcnQodHJ1ZSwgMC41KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZUFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgdG9hc3QgZGlkIG5vdCBkaXNtaXNzIHRoZW5cbiAgICAgICAgICogdGhlIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gc3dpcGUgYWdhaW4uXG4gICAgICAgICAqL1xuICAgICAgICBnZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBtdXN0IGJlIGEgb25lIHRpbWUgY2FsbGJhY2tcbiAgICAgICAqIG90aGVyd2lzZSBhIG5ldyBjYWxsYmFjayB3aWxsXG4gICAgICAgKiBiZSBhZGRlZCBldmVyeSB0aW1lIG9uRW5kIHJ1bnMuXG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICB9KS5wcm9ncmVzc0VuZChwbGF5VG8sIHN0ZXAsIGR1cmF0aW9uKTtcbiAgfTtcbiAgY29uc3QgZ2VzdHVyZSA9IGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsOiB3cmFwcGVyRWwsXG4gICAgZ2VzdHVyZU5hbWU6ICd0b2FzdC1zd2lwZS10by1kaXNtaXNzJyxcbiAgICBnZXN0dXJlUHJpb3JpdHk6IE9WRVJMQVlfR0VTVFVSRV9QUklPUklUWSxcbiAgICAvKipcbiAgICAgKiBUb2FzdCBvbmx5IHN1cHBvcnRzIHZlcnRpY2FsIHN3aXBlcy5cbiAgICAgKiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWQgaWYgd2UgbGF0ZXJcbiAgICAgKiBzdXBwb3J0IGhvcml6b250YWwgc3dpcGVzLlxuICAgICAqL1xuICAgIGRpcmVjdGlvbjogJ3knLFxuICAgIG9uTW92ZSxcbiAgICBvbkVuZFxuICB9KTtcbiAgcmV0dXJuIGdlc3R1cmU7XG59O1xuY29uc3QgdG9hc3RJb3NDc3MgPSBcIjpob3N0ey0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6bm9uZTstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm94LXNoYWRvdzpub25lOy0tbWluLXdpZHRoOmF1dG87LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS13aGl0ZS1zcGFjZTpub3JtYWw7dG9wOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjb250YWluOnN0cmljdDt6LWluZGV4OjEwMDE7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdCgub3ZlcmxheS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX06aG9zdCguaW9uLWNvbG9yKXstLWJ1dHRvbi1jb2xvcjppbmhlcml0O2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvYXN0LWJ1dHRvbi1jYW5jZWx7Y29sb3I6aW5oZXJpdH06aG9zdCguaW9uLWNvbG9yKSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9hc3Qtd3JhcHBlcntib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtwb2ludGVyLWV2ZW50czphdXRvfS50b2FzdC13cmFwcGVye2luc2V0LWlubGluZS1zdGFydDp2YXIoLS1zdGFydCk7aW5zZXQtaW5saW5lLWVuZDp2YXIoLS1lbmQpfS50b2FzdC13cmFwcGVyLnRvYXN0LXRvcHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgLTEwMCUsICAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIC0xMDAlLCAgMCk7dG9wOjB9LnRvYXN0LXdyYXBwZXIudG9hc3QtYm90dG9tey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7Ym90dG9tOjB9LnRvYXN0LWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDppbmhlcml0O21pbi1oZWlnaHQ6aW5oZXJpdDttYXgtaGVpZ2h0OmluaGVyaXQ7Y29udGFpbjpjb250ZW50fS50b2FzdC1sYXlvdXQtc3RhY2tlZCAudG9hc3QtY29udGFpbmVyey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0udG9hc3QtbGF5b3V0LWJhc2VsaW5lIC50b2FzdC1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRvYXN0LWljb257LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHh9LnRvYXN0LWNvbnRlbnR7bWluLXdpZHRoOjB9LnRvYXN0LW1lc3NhZ2V7LW1zLWZsZXg6MTtmbGV4OjE7d2hpdGUtc3BhY2U6dmFyKC0td2hpdGUtc3BhY2UpfS50b2FzdC1idXR0b24tZ3JvdXB7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LnRvYXN0LWxheW91dC1zdGFja2VkIC50b2FzdC1idXR0b24tZ3JvdXB7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmVuZDt3aWR0aDoxMDAlfS50b2FzdC1idXR0b257Ym9yZGVyOjA7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWJ1dHRvbi1jb2xvcik7ei1pbmRleDowfS50b2FzdC1pY29uLC50b2FzdC1idXR0b24taWNvbntmb250LXNpemU6MS40ZW19LnRvYXN0LWJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7LnRvYXN0LWJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcn19Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSk7LS1ib3JkZXItcmFkaXVzOjE0cHg7LS1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpOy0tbWF4LXdpZHRoOjcwMHB4Oy0tbWF4LWhlaWdodDo0NzhweDstLXN0YXJ0OjEwcHg7LS1lbmQ6MTBweDtmb250LXNpemU6Y2xhbXAoMTRweCwgMC44NzVyZW0sIDQzLjRweCl9LnRvYXN0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMH1Ac3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkpezpob3N0KC50b2FzdC10cmFuc2x1Y2VudCkgLnRvYXN0LXdyYXBwZXJ7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX06aG9zdCguaW9uLWNvbG9yLnRvYXN0LXRyYW5zbHVjZW50KSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC44KX19LnRvYXN0LXdyYXBwZXIudG9hc3QtbWlkZGxle29wYWNpdHk6MC4wMX0udG9hc3QtY29udGVudHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTVweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTVweDtwYWRkaW5nLWlubGluZS1lbmQ6MTVweDtwYWRkaW5nLXRvcDoxNXB4O3BhZGRpbmctYm90dG9tOjE1cHh9LnRvYXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDB9LnRvYXN0LWJ1dHRvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTVweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTVweDtwYWRkaW5nLWlubGluZS1lbmQ6MTVweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7bWluLWhlaWdodDo0NHB4Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5IDEwMG1zIGxpbmVhcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IsIG9wYWNpdHkgMTAwbXMgbGluZWFyO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTtmb250LXNpemU6Y2xhbXAoMTdweCwgMS4wNjI1cmVtLCAyMS45OThweCk7Zm9udC13ZWlnaHQ6NTAwO292ZXJmbG93OmhpZGRlbn0udG9hc3QtYnV0dG9uLmlvbi1hY3RpdmF0ZWR7b3BhY2l0eTowLjR9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXsudG9hc3QtYnV0dG9uOmhvdmVye29wYWNpdHk6MC42fX1cIjtcbmNvbnN0IElvblRvYXN0SW9zU3R5bGUwID0gdG9hc3RJb3NDc3M7XG5jb25zdCB0b2FzdE1kQ3NzID0gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6aW5pdGlhbDstLWJveC1zaGFkb3c6bm9uZTstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy0td2hpdGUtc3BhY2U6bm9ybWFsO3RvcDowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7ei1pbmRleDoxMDAxO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QoLm92ZXJsYXktaGlkZGVuKXtkaXNwbGF5Om5vbmV9Omhvc3QoLmlvbi1jb2xvcil7LS1idXR0b24tY29sb3I6aW5oZXJpdDtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIC50b2FzdC1idXR0b24tY2FuY2Vse2NvbG9yOmluaGVyaXR9Omhvc3QoLmlvbi1jb2xvcikgLnRvYXN0LXdyYXBwZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvYXN0LXdyYXBwZXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7cG9pbnRlci1ldmVudHM6YXV0b30udG9hc3Qtd3JhcHBlcntpbnNldC1pbmxpbmUtc3RhcnQ6dmFyKC0tc3RhcnQpO2luc2V0LWlubGluZS1lbmQ6dmFyKC0tZW5kKX0udG9hc3Qtd3JhcHBlci50b2FzdC10b3B7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIC0xMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAtMTAwJSwgIDApO3RvcDowfS50b2FzdC13cmFwcGVyLnRvYXN0LWJvdHRvbXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApO2JvdHRvbTowfS50b2FzdC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6aW5oZXJpdDttaW4taGVpZ2h0OmluaGVyaXQ7bWF4LWhlaWdodDppbmhlcml0O2NvbnRhaW46Y29udGVudH0udG9hc3QtbGF5b3V0LXN0YWNrZWQgLnRvYXN0LWNvbnRhaW5lcnstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LnRvYXN0LWxheW91dC1iYXNlbGluZSAudG9hc3QtY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50b2FzdC1pY29uey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4fS50b2FzdC1jb250ZW50e21pbi13aWR0aDowfS50b2FzdC1tZXNzYWdley1tcy1mbGV4OjE7ZmxleDoxO3doaXRlLXNwYWNlOnZhcigtLXdoaXRlLXNwYWNlKX0udG9hc3QtYnV0dG9uLWdyb3Vwe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50b2FzdC1sYXlvdXQtc3RhY2tlZCAudG9hc3QtYnV0dG9uLWdyb3Vwey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDplbmQ7d2lkdGg6MTAwJX0udG9hc3QtYnV0dG9ue2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpO3otaW5kZXg6MH0udG9hc3QtaWNvbiwudG9hc3QtYnV0dG9uLWljb257Zm9udC1zaXplOjEuNGVtfS50b2FzdC1idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9fTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC04MDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtODAwLCAjMzMzMzMzKSk7LS1ib3JkZXItcmFkaXVzOjRweDstLWJveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7LS1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtOTUwLCAjZjJmMmYyKSk7LS1tYXgtd2lkdGg6NzAwcHg7LS1zdGFydDo4cHg7LS1lbmQ6OHB4O2ZvbnQtc2l6ZTowLjg3NXJlbX0udG9hc3Qtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjAuMDE7ei1pbmRleDoxMH0udG9hc3QtY29udGVudHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDoxNHB4O3BhZGRpbmctYm90dG9tOjE0cHh9LnRvYXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS4yNXJlbX0udG9hc3QtbWVzc2FnZXtsaW5lLWhlaWdodDoxLjI1cmVtfS50b2FzdC1sYXlvdXQtYmFzZWxpbmUgLnRvYXN0LWJ1dHRvbi1ncm91cC1zdGFydHstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHh9LnRvYXN0LWxheW91dC1zdGFja2VkIC50b2FzdC1idXR0b24tZ3JvdXAtc3RhcnR7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHg7bWFyZ2luLXRvcDo4cHh9LnRvYXN0LWxheW91dC1iYXNlbGluZSAudG9hc3QtYnV0dG9uLWdyb3VwLWVuZHstd2Via2l0LW1hcmdpbi1lbmQ6OHB4O21hcmdpbi1pbmxpbmUtZW5kOjhweH0udG9hc3QtbGF5b3V0LXN0YWNrZWQgLnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHg7bWFyZ2luLWJvdHRvbTo4cHh9LnRvYXN0LWJ1dHRvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTVweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTVweDtwYWRkaW5nLWlubGluZS1lbmQ6MTVweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTowLjg3NXJlbTtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6MC44NHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtvdmVyZmxvdzpoaWRkZW59LnRvYXN0LWJ1dHRvbi1jYW5jZWx7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTkwMCwgI2U2ZTZlNikpfS50b2FzdC1idXR0b24taWNvbi1vbmx5e2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHg7cGFkZGluZy10b3A6OXB4O3BhZGRpbmctYm90dG9tOjlweDt3aWR0aDozNnB4O2hlaWdodDozNnB4fUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7LnRvYXN0LWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCAwLCA4NCwgMjMzKSwgMC4wOCl9LnRvYXN0LWJ1dHRvbi1jYW5jZWw6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuMDgpfX1cIjtcbmNvbnN0IElvblRvYXN0TWRTdHlsZTAgPSB0b2FzdE1kQ3NzO1xuY29uc3QgVG9hc3QgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3REaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3RXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGVsZWdhdGVDb250cm9sbGVyID0gY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMubG9ja0NvbnRyb2xsZXIgPSBjcmVhdGVMb2NrQ29udHJvbGxlcigpO1xuICAgIHRoaXMudHJpZ2dlckNvbnRyb2xsZXIgPSBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlcigpO1xuICAgIHRoaXMuY3VzdG9tSFRNTEVuYWJsZWQgPSBjb25maWcuZ2V0KCdpbm5lckhUTUxUZW1wbGF0ZXNFbmFibGVkJywgRU5BQkxFX0hUTUxfQ09OVEVOVF9ERUZBVUxUKTtcbiAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gZXYgPT4ge1xuICAgICAgY29uc3Qgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHRoaXMuZ2V0QnV0dG9ucygpLmZpbmQoYiA9PiBiLnJvbGUgPT09ICdjYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihjYW5jZWxCdXR0b24pO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHN3aXBlIGdlc3R1cmUgc28gVG9hc3RcbiAgICAgKiBjYW4gYmUgc3dpcGVkIHRvIGRpc21pc3MuXG4gICAgICovXG4gICAgdGhpcy5jcmVhdGVTd2lwZUdlc3R1cmUgPSB0b2FzdFBvc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IGdlc3R1cmUgPSB0aGlzLmdlc3R1cmUgPSBjcmVhdGVTd2lwZVRvRGlzbWlzc0dlc3R1cmUodGhpcy5lbCwgdG9hc3RQb3NpdGlvbiwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIGdlc3R1cmUgY29tcGxldGVkIHRoZW5cbiAgICAgICAgICogd2Ugc2hvdWxkIGRpc21pc3MgdGhlIHRvYXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgR0VTVFVSRSk7XG4gICAgICB9KTtcbiAgICAgIGdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBhbiBleGlzdGluZyBzd2lwZSBnZXN0dXJlXG4gICAgICogc28gVG9hc3QgY2FuIG5vIGxvbmdlciBiZSBzd2lwZWQgdG8gZGlzbWlzcy5cbiAgICAgKi9cbiAgICB0aGlzLmRlc3Ryb3lTd2lwZUdlc3R1cmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGdlc3R1cmVcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGdlc3R1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBnZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHN3aXBlR2VzdHVyZVxuICAgICAqIGlzIGNvbmZpZ3VyZWQgdG8gYSB2YWx1ZSB0aGF0IGVuYWJsZXMgdGhlIHN3aXBlIGJlaGF2aW9yLlxuICAgICAqIFJldHVybnMgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgdGhpcy5wcmVmZXJzU3dpcGVHZXN0dXJlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzd2lwZUdlc3R1cmVcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIHN3aXBlR2VzdHVyZSA9PT0gJ3ZlcnRpY2FsJztcbiAgICB9O1xuICAgIHRoaXMucmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW50ZXJBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNzc0NsYXNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZHVyYXRpb24gPSBjb25maWcuZ2V0TnVtYmVyKCd0b2FzdER1cmF0aW9uJywgMCk7XG4gICAgdGhpcy5oZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXlvdXQgPSAnYmFzZWxpbmUnO1xuICAgIHRoaXMubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgdGhpcy5wb3NpdGlvbkFuY2hvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmh0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3dpcGVHZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIHN3aXBlR2VzdHVyZUNoYW5nZWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIFRvYXN0IGlzIHByZXNlbnRlZCwgdGhlbiB3ZSBuZWVkIHRvIGRlc3Ryb3lcbiAgICAgKiBhbnkgYWN0aXZlcyBnZXN0dXJlcyBiZWZvcmUgYSBuZXcgZ2VzdHVyZSBpcyBwb3RlbnRpYWxseVxuICAgICAqIGNyZWF0ZWQgYmVsb3cuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgVG9hc3QgaXMgZGlzbWlzc2VkLCB0aGVuIG5vIGdlc3R1cmUgc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgICAqIHNpbmNlIHRoZSBUb2FzdCBpcyBub3QgdmlzaWJsZS4gVGhpcyBjYXNlIHNob3VsZCBuZXZlclxuICAgICAqIGhhcHBlbiBzaW5jZSB0aGUgXCJkaXNtaXNzXCIgbWV0aG9kIGhhbmRsZXMgZGVzdHJveWluZ1xuICAgICAqIGFueSBhY3RpdmUgc3dpcGUgZ2VzdHVyZXMsIGJ1dCB3ZSBrZWVwIHRoaXMgY29kZVxuICAgICAqIGFyb3VuZCB0byBoYW5kbGUgdGhlIGZpcnN0IGNhc2UuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95U3dpcGVHZXN0dXJlKCk7XG4gICAgLyoqXG4gICAgICogQSBuZXcgc3dpcGUgZ2VzdHVyZSBzaG91bGQgb25seSBiZSBjcmVhdGVkXG4gICAgICogaWYgdGhlIFRvYXN0IGlzIHByZXNlbnRlZC4gSWYgdGhlIFRvYXN0IGlzIG5vdFxuICAgICAqIHlldCBwcmVzZW50ZWQgdGhlbiB0aGUgXCJwcmVzZW50XCIgbWV0aG9kIHdpbGxcbiAgICAgKiBoYW5kbGUgY2FsbGluZyB0aGUgc3dpcGUgZ2VzdHVyZSBzZXR1cCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcmVzZW50ZWQgJiYgdGhpcy5wcmVmZXJzU3dpcGVHZXN0dXJlKCkpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIFRvYXN0IGlzIHByZXNlbnRlZCB0aGVuXG4gICAgICAgKiBsYXN0UHJlc2VudGVkUG9zaXRpb24gaXMgZGVmaW5lZC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5jcmVhdGVTd2lwZUdlc3R1cmUodGhpcy5sYXN0UHJlc2VudGVkUG9zaXRpb24pO1xuICAgIH1cbiAgfVxuICBvbklzT3BlbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRydWUgJiYgb2xkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByZXNlbnQoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09PSBmYWxzZSAmJiBvbGRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBlbCxcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyLmFkZENsaWNrTGlzdGVuZXIoZWwsIHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlci5yZW1vdmVDbGlja0xpc3RlbmVyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0b2FzdCB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIHRvYXN0IGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmFmKCgpID0+IHRoaXMucHJlc2VudCgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBiaW5kaW5nIHZhbHVlcyBpbiBmcmFtZXdvcmtzIHN1Y2ggYXMgQW5ndWxhclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdmFsdWUgdG8gYmUgc2V0IGFmdGVyIHRoZSBXZWIgQ29tcG9uZW50XG4gICAgICogaW5pdGlhbGl6ZXMgYnV0IGJlZm9yZSB0aGUgdmFsdWUgd2F0Y2hlciBpcyBzZXQgdXAgaW4gU3RlbmNpbC5cbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdhdGNoZXIgY2FsbGJhY2sgbWF5IG5vdCBiZSBmaXJlZC5cbiAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgdGhlIHdhdGNoZXJcbiAgICAgKiBjYWxsYmFjayB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCBhbmQgdGhlIHdhdGNoZXJcbiAgICAgKiBpcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICAvKipcbiAgICogUHJlc2VudCB0aGUgdG9hc3Qgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBhd2FpdCB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5hdHRhY2hWaWV3VG9Eb20oKTtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIHBvc2l0aW9uXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5nZXRBbmNob3JFbGVtZW50KCk7XG4gICAgY29uc3QgYW5pbWF0aW9uUG9zaXRpb24gPSBnZXRBbmltYXRpb25Qb3NpdGlvbihwb3NpdGlvbiwgYW5jaG9yLCBnZXRJb25Nb2RlKHRoaXMpLCBlbCk7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIGNhbGN1bGF0ZWQgcG9zaXRpb24gb2YgdGhlIHRvYXN0LCBzbyB3ZSBjYW4gcmUtdXNlIGl0XG4gICAgICogaW4gdGhlIGRpc21pc3MgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIHRoaXMubGFzdFByZXNlbnRlZFBvc2l0aW9uID0gYW5pbWF0aW9uUG9zaXRpb247XG4gICAgYXdhaXQgcHJlc2VudCh0aGlzLCAndG9hc3RFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uLCB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIHRvcDogYW5pbWF0aW9uUG9zaXRpb24udG9wLFxuICAgICAgYm90dG9tOiBhbmltYXRpb25Qb3NpdGlvbi5ib3R0b21cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDb250ZW50IGlzIHJldmVhbGVkIHRvIHNjcmVlbiByZWFkZXJzIGFmdGVyXG4gICAgICogdGhlIHRyYW5zaXRpb24gdG8gYXZvaWQgamFuayBzaW5jZSB0aGlzXG4gICAgICogc3RhdGUgdXBkYXRlcyB3aWxsIGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIHRoaXMucmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgIHRoaXMuZHVyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCAndGltZW91dCcpLCB0aGlzLmR1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhlIFRvYXN0IGhhcyBhIHN3aXBlIGdlc3R1cmUgdGhlbiB3ZSBjYW5cbiAgICAgKiBjcmVhdGUgdGhlIGdlc3R1cmUgc28gdXNlcnMgY2FuIHN3aXBlIHRoZVxuICAgICAqIHByZXNlbnRlZCBUb2FzdC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcmVmZXJzU3dpcGVHZXN0dXJlKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlU3dpcGVHZXN0dXJlKGFuaW1hdGlvblBvc2l0aW9uKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqIERpc21pc3MgdGhlIHRvYXN0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSB0b2FzdC5cbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSB0b2FzdC5cbiAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgbm8tb3AgaWYgdGhlIG92ZXJsYXkgaGFzIG5vdCBiZWVuIHByZXNlbnRlZCB5ZXQuIElmIHlvdSB3YW50XG4gICAqIHRvIHJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIERPTSB0aGF0IHdhcyBuZXZlciBwcmVzZW50ZWQsIHVzZSB0aGVcbiAgICogW3JlbW92ZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvcmVtb3ZlKSBtZXRob2QuXG4gICAqL1xuICBhc3luYyBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGNvbnN0IHtcbiAgICAgIGR1cmF0aW9uVGltZW91dCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGFzdFByZXNlbnRlZFBvc2l0aW9uXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGR1cmF0aW9uVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGR1cmF0aW9uVGltZW91dCk7XG4gICAgfVxuICAgIGNvbnN0IGRpc21pc3NlZCA9IGF3YWl0IGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3RvYXN0TGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbixcbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgY2FjaGVkIHBvc2l0aW9uIHRoYXQgd2FzIGNhbGN1bGF0ZWQgYmFjayBpbiB0aGUgcHJlc2VudFxuICAgICAqIGFuaW1hdGlvbi4gV2UgYWx3YXlzIHdhbnQgdG8gYW5pbWF0ZSB0aGUgZGlzbWlzcyBmcm9tIHRoZSBzYW1lXG4gICAgICogcG9zaXRpb24gdGhlIHByZXNlbnQgc3RvcHBlZCBhdCwgc28gdGhlIGFuaW1hdGlvbiBsb29rcyBjb250aW51b3VzLlxuICAgICAqL1xuICAgIHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgdG9wOiAoX2EgPSBsYXN0UHJlc2VudGVkUG9zaXRpb24gPT09IG51bGwgfHwgbGFzdFByZXNlbnRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0UHJlc2VudGVkUG9zaXRpb24udG9wKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgIGJvdHRvbTogKF9iID0gbGFzdFByZXNlbnRlZFBvc2l0aW9uID09PSBudWxsIHx8IGxhc3RQcmVzZW50ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdFByZXNlbnRlZFBvc2l0aW9uLmJvdHRvbSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJydcbiAgICB9KTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5yZW1vdmVWaWV3RnJvbURvbSgpO1xuICAgICAgdGhpcy5yZXZlYWxDb250ZW50VG9TY3JlZW5SZWFkZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UHJlc2VudGVkUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIFRvYXN0IGhhcyBhIHN3aXBlIGdlc3R1cmUgdGhlbiB3ZSBjYW5cbiAgICAgKiBzYWZlbHkgZGVzdHJveSBpdCBub3cgdGhhdCBpdCBpcyBkaXNtaXNzZWQuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95U3dpcGVHZXN0dXJlKCk7XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB0b2FzdCBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblRvYXN0RGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHRvYXN0IHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Ub2FzdFdpbGxEaXNtaXNzJyk7XG4gIH1cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLm1hcChiID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgYiA9PT0gJ3N0cmluZycgPyB7XG4gICAgICAgIHRleHQ6IGJcbiAgICAgIH0gOiBiO1xuICAgIH0pIDogW107XG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IHRoZSBwb3NpdGlvbkFuY2hvciBwcm9wLFxuICAgKiBvciB1bmRlZmluZWQgaWYgcHJvcCdzIHZhbHVlIGlzIGFuIElEIHN0cmluZyBhbmQgdGhlIGVsZW1lbnRcbiAgICogaXMgbm90IGZvdW5kIGluIHRoZSBET00uXG4gICAqL1xuICBnZXRBbmNob3JFbGVtZW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcG9zaXRpb25BbmNob3IsXG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIHBvc2l0aW9uQW5jaG9yIGlzIHVuZGVmaW5lZCB0aGVuXG4gICAgICogbm8gYW5jaG9yIHNob3VsZCBiZSB1c2VkIHdoZW4gcHJlc2VudGluZyB0aGUgdG9hc3QuXG4gICAgICovXG4gICAgaWYgKHBvc2l0aW9uQW5jaG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSAnbWlkZGxlJyAmJiBwb3NpdGlvbkFuY2hvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ1RoZSBwb3NpdGlvbkFuY2hvciBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4gdXNpbmcgcG9zaXRpb249XCJtaWRkbGVcIi4nLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcG9zaXRpb25BbmNob3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBhbmNob3IgaXMgZGVmaW5lZCBhcyBhbiBJRCwgZmluZCB0aGUgZWxlbWVudC5cbiAgICAgICAqIFdlIGRvIHRoaXMgb24gZXZlcnkgcHJlc2VudCBzbyB0aGUgdG9hc3QgZG9lc24ndCBuZWVkXG4gICAgICAgKiB0byBhY2NvdW50IGZvciB0aGUgc3Vycm91bmRpbmcgRE9NIGNoYW5naW5nIHNpbmNlIHRoZVxuICAgICAgICogbGFzdCB0aW1lIGl0IHdhcyBwcmVzZW50ZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZvdW5kRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbkFuY2hvcik7XG4gICAgICBpZiAoZm91bmRFbCA9PT0gbnVsbCkge1xuICAgICAgICBwcmludElvbldhcm5pbmcoYEFuIGFuY2hvciBlbGVtZW50IHdpdGggYW4gSUQgb2YgXCIke3Bvc2l0aW9uQW5jaG9yfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIERPTS5gLCBlbCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm91bmRFbDtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uQW5jaG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbkFuY2hvcjtcbiAgICB9XG4gICAgcHJpbnRJb25XYXJuaW5nKCdJbnZhbGlkIHBvc2l0aW9uQW5jaG9yIHZhbHVlOicsIHBvc2l0aW9uQW5jaG9yLCBlbCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBhc3luYyBidXR0b25DbGljayhidXR0b24pIHtcbiAgICBjb25zdCByb2xlID0gYnV0dG9uLnJvbGU7XG4gICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgcm9sZSk7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZERpc21pc3MgPSBhd2FpdCB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbik7XG4gICAgaWYgKHNob3VsZERpc21pc3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCByb2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIGFzeW5jIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbikge1xuICAgIGlmIChidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uaGFuZGxlcikge1xuICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAvLyBwYXNzIHRoZSBoYW5kbGVyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRzXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBydG4gPSBhd2FpdCBzYWZlQ2FsbChidXR0b24uaGFuZGxlcik7XG4gICAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlbmRlckJ1dHRvbnMoYnV0dG9ucywgc2lkZSkge1xuICAgIGlmIChidXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBidXR0b25Hcm91cHNDbGFzc2VzID0ge1xuICAgICAgJ3RvYXN0LWJ1dHRvbi1ncm91cCc6IHRydWUsXG4gICAgICBbYHRvYXN0LWJ1dHRvbi1ncm91cC0ke3NpZGV9YF06IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBidXR0b25Hcm91cHNDbGFzc2VzXG4gICAgfSwgYnV0dG9ucy5tYXAoYiA9PiBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIGIuaHRtbEF0dHJpYnV0ZXMsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBjbGFzczogYnV0dG9uQ2xhc3MoYiksXG4gICAgICB0YWJJbmRleDogMCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYiksXG4gICAgICBwYXJ0OiBidXR0b25QYXJ0KGIpXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwidG9hc3QtYnV0dG9uLWlubmVyXCJcbiAgICB9LCBiLmljb24gJiYgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBpY29uOiBiLmljb24sXG4gICAgICBzbG90OiBiLnRleHQgPT09IHVuZGVmaW5lZCA/ICdpY29uLW9ubHknIDogdW5kZWZpbmVkLFxuICAgICAgY2xhc3M6IFwidG9hc3QtYnV0dG9uLWljb25cIlxuICAgIH0pLCBiLnRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7XG4gICAgICB0eXBlOiBiLmljb24gIT09IHVuZGVmaW5lZCAmJiBiLnRleHQgPT09IHVuZGVmaW5lZCA/ICd1bmJvdW5kZWQnIDogJ2JvdW5kZWQnXG4gICAgfSkpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgYG1lc3NhZ2VgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ga2V5IC0gQSBrZXkgdG8gZ2l2ZSB0aGUgZWxlbWVudCBhIHN0YWJsZSBpZGVudGl0eS4gVGhpcyBpcyB1c2VkIHRvIGltcHJvdmUgY29tcGF0aWJpbGl0eSB3aXRoIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAcGFyYW0gYXJpYUhpZGRlbiAtIElmIFwidHJ1ZVwiIHRoZW4gY29udGVudCB3aWxsIGJlIGhpZGRlbiBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgcmVuZGVyVG9hc3RNZXNzYWdlKGtleSwgYXJpYUhpZGRlbiA9IG51bGwpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXN0b21IVE1MRW5hYmxlZCxcbiAgICAgIG1lc3NhZ2VcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoY3VzdG9tSFRNTEVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogYXJpYUhpZGRlbixcbiAgICAgICAgY2xhc3M6IFwidG9hc3QtbWVzc2FnZVwiLFxuICAgICAgICBwYXJ0OiBcIm1lc3NhZ2VcIixcbiAgICAgICAgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyhtZXNzYWdlKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBhcmlhSGlkZGVuLFxuICAgICAgY2xhc3M6IFwidG9hc3QtbWVzc2FnZVwiLFxuICAgICAgcGFydDogXCJtZXNzYWdlXCJcbiAgICB9LCBtZXNzYWdlKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIHRoZSBgaGVhZGVyYCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIGtleSAtIEEga2V5IHRvIGdpdmUgdGhlIGVsZW1lbnQgYSBzdGFibGUgaWRlbnRpdHkuIFRoaXMgaXMgdXNlZCB0byBpbXByb3ZlIGNvbXBhdGliaWxpdHkgd2l0aCBzY3JlZW4gcmVhZGVycy5cbiAgICogQHBhcmFtIGFyaWFIaWRkZW4gLSBJZiBcInRydWVcIiB0aGVuIGNvbnRlbnQgd2lsbCBiZSBoaWRkZW4gZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIHJlbmRlckhlYWRlcihrZXksIGFyaWFIaWRkZW4gPSBudWxsKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiBrZXksXG4gICAgICBjbGFzczogXCJ0b2FzdC1oZWFkZXJcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogYXJpYUhpZGRlbixcbiAgICAgIHBhcnQ6IFwiaGVhZGVyXCJcbiAgICB9LCB0aGlzLmhlYWRlcik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheW91dCxcbiAgICAgIGVsLFxuICAgICAgcmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyLFxuICAgICAgaGVhZGVyLFxuICAgICAgbWVzc2FnZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFsbEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICBjb25zdCBzdGFydEJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihiID0+IGIuc2lkZSA9PT0gJ3N0YXJ0Jyk7XG4gICAgY29uc3QgZW5kQnV0dG9ucyA9IGFsbEJ1dHRvbnMuZmlsdGVyKGIgPT4gYi5zaWRlICE9PSAnc3RhcnQnKTtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSB7XG4gICAgICAndG9hc3Qtd3JhcHBlcic6IHRydWUsXG4gICAgICBbYHRvYXN0LSR7dGhpcy5wb3NpdGlvbn1gXTogdHJ1ZSxcbiAgICAgIFtgdG9hc3QtbGF5b3V0LSR7bGF5b3V0fWBdOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFja2VkIGJ1dHRvbnMgYXJlIG9ubHkgbWVhbnQgdG8gYmVcbiAgICAgKiAgdXNlZCB3aXRoIG9uZSB0eXBlIG9mIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpZiAobGF5b3V0ID09PSAnc3RhY2tlZCcgJiYgc3RhcnRCdXR0b25zLmxlbmd0aCA+IDAgJiYgZW5kQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ1RoaXMgdG9hc3QgaXMgdXNpbmcgc3RhcnQgYW5kIGVuZCBidXR0b25zIHdpdGggdGhlIHN0YWNrZWQgdG9hc3QgbGF5b3V0LiBXZSByZWNvbW1lbmQgZm9sbG93aW5nIHRoZSBiZXN0IHByYWN0aWNlIG9mIHVzaW5nIGVpdGhlciBzdGFydCBvciBlbmQgYnV0dG9ucyB3aXRoIHRoZSBzdGFja2VkIHRvYXN0IGxheW91dC4nLCBlbCk7XG4gICAgfVxuICAgIHJldHVybiBoKEhvc3QsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnMzQwMzZhZmMwNzAxMTczZDUxYzljMTFlYTRhMmUxZDY1Njg1YmE0MScsXG4gICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgfSwgdGhpcy5odG1sQXR0cmlidXRlcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgekluZGV4OiBgJHs2MDAwMCArIHRoaXMub3ZlcmxheUluZGV4fWBcbiAgICAgIH0sXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIFttb2RlXTogdHJ1ZVxuICAgICAgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7XG4gICAgICAgICdvdmVybGF5LWhpZGRlbic6IHRydWUsXG4gICAgICAgICd0b2FzdC10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnRcbiAgICAgIH0pKSxcbiAgICAgIG9uSW9uVG9hc3RXaWxsRGlzbWlzczogdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdkOTI3ZTQzOTU3ZjQ3ODg4Y2U0ZTY0ZjFlOTljOTM1ZDU1NzU3YWY3JyxcbiAgICAgIGNsYXNzOiB3cmFwcGVyQ2xhc3NcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2NhNDNiYzQyNDc4MTgxYWNkZjhjZGVhNjYwMWE4NWZhOTVkMTIyMTYnLFxuICAgICAgY2xhc3M6IFwidG9hc3QtY29udGFpbmVyXCIsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgdGhpcy5yZW5kZXJCdXR0b25zKHN0YXJ0QnV0dG9ucywgJ3N0YXJ0JyksIHRoaXMuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdmZGQ2ZmI4ZjZlOTQ3ZWQwMDJiZDJlNjNmZGM4ZWM3ZTc2NGY0YTdkJyxcbiAgICAgIGNsYXNzOiBcInRvYXN0LWljb25cIixcbiAgICAgIHBhcnQ6IFwiaWNvblwiLFxuICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMzdjMTZjODFlZTNlNDMwNDM3OWRmYmNhYmRmZmU3M2RiNzNlNDY1MycsXG4gICAgICBjbGFzczogXCJ0b2FzdC1jb250ZW50XCIsXG4gICAgICByb2xlOiBcInN0YXR1c1wiLFxuICAgICAgXCJhcmlhLWF0b21pY1wiOiBcInRydWVcIixcbiAgICAgIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCJcbiAgICB9LCAhcmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyICYmIGhlYWRlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmVuZGVySGVhZGVyKCdvbGRIZWFkZXInLCAndHJ1ZScpLCAhcmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyICYmIG1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlbmRlclRvYXN0TWVzc2FnZSgnb2xkTWVzc2FnZScsICd0cnVlJyksIHJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciAmJiBoZWFkZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlbmRlckhlYWRlcignaGVhZGVyJyksIHJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciAmJiBtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJUb2FzdE1lc3NhZ2UoJ2hlYWRlcicpKSwgdGhpcy5yZW5kZXJCdXR0b25zKGVuZEJ1dHRvbnMsICdlbmQnKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXSxcbiAgICAgIFwiaXNPcGVuXCI6IFtcIm9uSXNPcGVuQ2hhbmdlXCJdLFxuICAgICAgXCJ0cmlnZ2VyXCI6IFtcInRyaWdnZXJDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IGJ1dHRvbkNsYXNzID0gYnV0dG9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICAndG9hc3QtYnV0dG9uJzogdHJ1ZSxcbiAgICAndG9hc3QtYnV0dG9uLWljb24tb25seSc6IGJ1dHRvbi5pY29uICE9PSB1bmRlZmluZWQgJiYgYnV0dG9uLnRleHQgPT09IHVuZGVmaW5lZCxcbiAgICBbYHRvYXN0LWJ1dHRvbi0ke2J1dHRvbi5yb2xlfWBdOiBidXR0b24ucm9sZSAhPT0gdW5kZWZpbmVkLFxuICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZVxuICB9O1xufTtcbmNvbnN0IGJ1dHRvblBhcnQgPSBidXR0b24gPT4ge1xuICByZXR1cm4gaXNDYW5jZWwoYnV0dG9uLnJvbGUpID8gJ2J1dHRvbiBjYW5jZWwnIDogJ2J1dHRvbic7XG59O1xuVG9hc3Quc3R5bGUgPSB7XG4gIGlvczogSW9uVG9hc3RJb3NTdHlsZTAsXG4gIG1kOiBJb25Ub2FzdE1kU3R5bGUwXG59O1xuZXhwb3J0IHsgVG9hc3QgYXMgaW9uX3RvYXN0IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxTQUFTLHFCQUFxQixVQUFVLGdCQUFnQixNQUFNLE9BQU87QUFLbkUsTUFBSTtBQUNKLE1BQUksU0FBUyxNQUFNO0FBQ2pCLGFBQVMsYUFBYSxRQUFRLElBQUk7QUFBQSxFQUNwQyxPQUFPO0FBQ0wsYUFBUyxhQUFhLFFBQVEsS0FBSztBQUFBLEVBQ3JDO0FBT0EsTUFBSSxrQkFBa0IsS0FBSztBQUN6Qix5QkFBcUIsZ0JBQWdCLEtBQUs7QUFDMUMsVUFBTSxNQUFNLGVBQWUsc0JBQXNCO0FBQ2pELFFBQUksYUFBYSxPQUFPO0FBQ3RCLGdCQUFVLElBQUk7QUFBQSxJQUNoQixXQUFXLGFBQWEsVUFBVTtBQU1oQyxnQkFBVSxJQUFJLGNBQWMsSUFBSTtBQUFBLElBQ2xDO0FBS0EsV0FBTztBQUFBLE1BQ0wsS0FBSyxHQUFHLE1BQU07QUFBQSxNQUNkLFFBQVEsR0FBRyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsTUFBTTtBQUFBLE1BQ25CLFFBQVEsUUFBUSxNQUFNO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0Y7QUFNQSxTQUFTLHFCQUFxQixnQkFBZ0IsT0FBTztBQUNuRCxNQUFJLGVBQWUsaUJBQWlCLE1BQU07QUFDeEMsb0JBQWdCLGtKQUFrSixLQUFLO0FBQUEsRUFDeks7QUFDRjtBQVNBLElBQU0sNkJBQTZCLENBQUMsYUFBYSxrQkFBa0I7QUFDakUsU0FBTyxLQUFLLE1BQU0sY0FBYyxJQUFJLGdCQUFnQixDQUFDO0FBQ3ZEO0FBS0EsSUFBTSxvQkFBb0IsQ0FBQyxRQUFRLFNBQVM7QUFDMUMsUUFBTSxnQkFBZ0IsZ0JBQWdC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
