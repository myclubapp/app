import {
  createButtonActiveGesture
} from "./chunk-2QL2Q4AG.js";
import "./chunk-3XAIP4YB.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import "./chunk-UPH3BB7G.js";
import {
  BACKDROP,
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
  getClassMap
} from "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import {
  raf
} from "./chunk-RRWPYKYY.js";
import "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  readTask,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};
var actionSheetIosCss = '.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color-step-150, var(--ion-background-color, #fff)));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #0054e9);--button-color-disabled:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999));text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #c5000f)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #c5000f)}}';
var IonActionSheetIosStyle0 = actionSheetIosCss;
var actionSheetMdCss = '.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--button-color-disabled:var(--button-color);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}';
var IonActionSheetMdStyle0 = actionSheetMdCss;
var ActionSheet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionActionSheetDidPresent", 7);
    this.willPresent = createEvent(this, "ionActionSheetWillPresent", 7);
    this.willDismiss = createEvent(this, "ionActionSheetWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionActionSheetDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.buttons = [];
    this.cssClass = void 0;
    this.backdropDismiss = true;
    this.header = void 0;
    this.subHeader = void 0;
    this.translucent = false;
    this.animated = true;
    this.htmlAttributes = void 0;
    this.isOpen = false;
    this.trigger = void 0;
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
  /**
   * Present the action sheet overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "actionSheetEnter", iosEnterAnimation, mdEnterAnimation);
      unlock();
    });
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      const dismissed = yield dismiss(this, data, role, "actionSheetLeave", iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionActionSheetDidDismiss");
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionActionSheetWillDismiss");
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(button.data, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(button.data, button.role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button) {
        const rtn = yield safeCall(button.handler);
        if (rtn === false) {
          return false;
        }
      }
      return true;
    });
  }
  getButtons() {
    return this.buttons.map((b) => {
      return typeof b === "string" ? {
        text: b
      } : b;
    });
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    const {
      groupEl,
      wrapperEl
    } = this;
    if (!this.gesture && getIonMode(this) === "ios" && wrapperEl && groupEl) {
      readTask(() => {
        const isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
        if (!isScrollable) {
          this.gesture = createButtonActiveGesture(wrapperEl, (refEl) => refEl.classList.contains("action-sheet-button"));
          this.gesture.enable(true);
        }
      });
    }
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  render() {
    const {
      header,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = getIonMode(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find((b) => b.role === "cancel");
    const buttons = allButtons.filter((b) => b.role !== "cancel");
    const headerID = `action-sheet-${overlayIndex}-header`;
    return h(Host, Object.assign({
      key: "7bbd202ca9e19727e7514abbe073687d982f80c3",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": header !== void 0 ? headerID : null,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({
        [mode]: true
      }, getClassMap(this.cssClass)), {
        "overlay-hidden": true,
        "action-sheet-translucent": this.translucent
      }),
      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }), h("ion-backdrop", {
      key: "23344a9221a2e6720d7b9de5249dc37256cafa7b",
      tappable: this.backdropDismiss
    }), h("div", {
      key: "fbc2ba15549c2ab04e759e82df6e177fd80cc0a6",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", {
      key: "748ee5235d0b4cb26d6f1b7589f77af2e37ad28a",
      class: "action-sheet-wrapper ion-overlay-wrapper",
      ref: (el) => this.wrapperEl = el
    }, h("div", {
      key: "7ce5fa236cf75e9b1e49c4725c9a811078706554",
      class: "action-sheet-container"
    }, h("div", {
      key: "dc2251f3bcee4a93e3449f09621cbd2b65d329e9",
      class: "action-sheet-group",
      ref: (el) => this.groupEl = el
    }, header !== void 0 && h("div", {
      key: "48d325c8a852f56ed57a9ada1a6709d05ba32ee2",
      id: headerID,
      class: {
        "action-sheet-title": true,
        "action-sheet-has-sub-title": this.subHeader !== void 0
      }
    }, header, this.subHeader && h("div", {
      key: "66093728052eb67f37a35f3232761ce4a08896f3",
      class: "action-sheet-sub-title"
    }, this.subHeader)), buttons.map((b) => h("button", Object.assign({}, b.htmlAttributes, {
      type: "button",
      id: b.id,
      class: buttonClass(b),
      onClick: () => this.buttonClick(b),
      disabled: b.disabled
    }), h("span", {
      class: "action-sheet-button-inner"
    }, b.icon && h("ion-icon", {
      icon: b.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), b.text), mode === "md" && h("ion-ripple-effect", null)))), cancelButton && h("div", {
      key: "f4eb8e3e2885b85af5080df18d0de0bdd1d719de",
      class: "action-sheet-group action-sheet-group-cancel"
    }, h("button", Object.assign({
      key: "169f4eb09255aba85062baad49ceb151239fbfb7"
    }, cancelButton.htmlAttributes, {
      type: "button",
      class: buttonClass(cancelButton),
      onClick: () => this.buttonClick(cancelButton)
    }), h("span", {
      key: "25fb8a466dd67ea94c79cfb4f9965527e1ce6d42",
      class: "action-sheet-button-inner"
    }, cancelButton.icon && h("ion-icon", {
      key: "eb5b071e120a2c86afdf967af6a763a43044d1ca",
      icon: cancelButton.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), cancelButton.text), mode === "md" && h("ion-ripple-effect", {
      key: "452ad7e1052b2c681e2d98de8193949755ad4d54"
    }))))), h("div", {
      key: "e1cecf280c987c050d9445e2c458b903f153089b",
      tabindex: "0",
      "aria-hidden": "true"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonClass = (button) => {
  return Object.assign({
    "action-sheet-button": true,
    "ion-activatable": !button.disabled,
    "ion-focusable": !button.disabled,
    [`action-sheet-${button.role}`]: button.role !== void 0
  }, getClassMap(button.cssClass));
};
ActionSheet.style = {
  ios: IonActionSheetIosStyle0,
  md: IonActionSheetMdStyle0
};
export {
  ActionSheet as ion_action_sheet
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-action-sheet.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWN0aW9uLXNoZWV0LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgcmVhZFRhc2ssIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgfSBmcm9tICcuL2J1dHRvbi1hY3RpdmUtOTBmMWRiYzQuanMnO1xuaW1wb3J0IHsgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVMb2NrQ29udHJvbGxlciB9IGZyb20gJy4vbG9jay1jb250cm9sbGVyLTMxNjkyOGJlLmpzJztcbmltcG9ydCB7IGQgYXMgY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyLCBlIGFzIGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyLCBCIGFzIEJBQ0tEUk9QLCBpIGFzIGlzQ2FuY2VsLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCwgaiBhcyBwcmVwYXJlT3ZlcmxheSwgayBhcyBzZXRPdmVybGF5SWQgfSBmcm9tICcuL292ZXJsYXlzLTQxYTVkNTFiLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tZWFiNWE0Y2EuanMnO1xuaW1wb3J0ICcuL2hhcHRpYy1hYzE2NGU0Yy5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcbmltcG9ydCAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtMzk3ODI2NDIuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci0zMTRhNTRmNi5qcyc7XG5pbXBvcnQgJy4vaGFyZHdhcmUtYmFjay1idXR0b24tODY0MTAxYTMuanMnO1xuaW1wb3J0ICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS0yZWVhMTc2My5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuXG4vKipcbiAqIGlPUyBBY3Rpb24gU2hlZXQgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIGlPUyBBY3Rpb24gU2hlZXQgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKS5kdXJhdGlvbig0NTApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogTUQgQWN0aW9uIFNoZWV0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1EIEFjdGlvbiBTaGVldCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDUwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgYWN0aW9uU2hlZXRJb3NDc3MgPSBcIi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oey0tY29sb3I6aW5pdGlhbDstLWJ1dHRvbi1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0tYnV0dG9uLWNvbG9yKTstLWJ1dHRvbi1jb2xvci1mb2N1c2VkOnZhcigtLWJ1dHRvbi1jb2xvcik7LS1idXR0b24tY29sb3ItaG92ZXI6dmFyKC0tYnV0dG9uLWNvbG9yKTstLWJ1dHRvbi1jb2xvci1zZWxlY3RlZDp2YXIoLS1idXR0b24tY29sb3IpOy0tbWluLXdpZHRoOmF1dG87LS13aWR0aDoxMDAlOy0tbWF4LXdpZHRoOjUwMHB4Oy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkgKyB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSkpKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO291dGxpbmU6bm9uZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oe2Rpc3BsYXk6bm9uZX0uYWN0aW9uLXNoZWV0LXdyYXBwZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7ei1pbmRleDoxMDtwb2ludGVyLWV2ZW50czpub25lfS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O292ZXJmbG93OmhpZGRlbn0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpkaXNhYmxlZHtjb2xvcjp2YXIoLS1idXR0b24tY29sb3ItZGlzYWJsZWQpO29wYWNpdHk6MC40fS5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjF9LmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gKHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKSArIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKSkpO21heC1oZWlnaHQ6Y2FsYygxMDBkdmggLSAodmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApICsgdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDApKSl9LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3stbXMtZmxleC1uZWdhdGl2ZToyO2ZsZXgtc2hyaW5rOjI7b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW47b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3BvaW50ZXItZXZlbnRzOmFsbDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfUBtZWRpYSAoYW55LXBvaW50ZXI6IGNvYXJzZSl7LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfX0uYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3stbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7b3ZlcmZsb3c6aGlkZGVufS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MH0uYWN0aW9uLXNoZWV0LXNlbGVjdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2NvbG9yOnZhcigtLWJ1dHRvbi1jb2xvci1zZWxlY3RlZCl9LmFjdGlvbi1zaGVldC1zZWxlY3RlZC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZCk7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZC1vcGFjaXR5KX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2NvbG9yOnZhcigtLWJ1dHRvbi1jb2xvci1hY3RpdmF0ZWQpfS5hY3Rpb24tc2hlZXQtYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQtYWN0aXZhdGVkKTtvcGFjaXR5OnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5KX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tjb2xvcjp2YXIoLS1idXR0b24tY29sb3ItZm9jdXNlZCl9LmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWZvY3VzZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQtZm9jdXNlZCk7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bm90KDpkaXNhYmxlZCk6aG92ZXJ7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yLWhvdmVyKX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpub3QoOmRpc2FibGVkKTpob3Zlcjo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5KX19LnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNmOWY5ZjkpKSk7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjQpOy0tYnV0dG9uLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4wOCksIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4wOCkgNTAlLCB0cmFuc3BhcmVudCA1MCUpIGJvdHRvbS8xMDAlIDFweCBuby1yZXBlYXQgdHJhbnNwYXJlbnQ7LS1idXR0b24tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApOy0tYnV0dG9uLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6LjA4Oy0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yOy0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTouMDQ7LS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJ1dHRvbi1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpKTstLWJ1dHRvbi1iYWNrZ3JvdW5kLXNlbGVjdGVkLW9wYWNpdHk6MTstLWJ1dHRvbi1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1idXR0b24tY29sb3ItZGlzYWJsZWQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpO3RleHQtYWxpZ246Y2VudGVyfS5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3std2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6dmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKTstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveH0uYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2JvcmRlci1yYWRpdXM6MTNweDttYXJnaW4tYm90dG9tOjhweH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MTBweH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToxMHB4fUBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSl7LmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyODAlKSBibHVyKDIwcHgpfS5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLC5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCkpLCB0byhyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCkpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuNCkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjQpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KSkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KSwgcmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjQpLCByZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuNCkgNTAlLCByZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCkgNTAlKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3AsIGJvdHRvbTtiYWNrZ3JvdW5kLXNpemU6MTAwJSBjYWxjKDEwMCUgLSAxcHgpLCAxMDAlIDFweDstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxMjAlKTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTIwJSl9LmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuNyk7YmFja2dyb3VuZC1pbWFnZTpub25lfS5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLXNlbGVjdGVkKX19LmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjA4KSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMDgpKSwgY29sb3Itc3RvcCg1MCUsIHRyYW5zcGFyZW50KSkgYm90dG9tLzEwMCUgMXB4IG5vLXJlcGVhdCB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMDgpLCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMDgpIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSBib3R0b20vMTAwJSAxcHggbm8tcmVwZWF0IHRyYW5zcGFyZW50fS5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxM3B4O2NvbG9yOnZhcigtLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtc2l6ZTptYXgoMTNweCwgMC44MTI1cmVtKTtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LmFjdGlvbi1zaGVldC10aXRsZS5hY3Rpb24tc2hlZXQtaGFzLXN1Yi10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tmb250LXdlaWdodDo2MDB9LmFjdGlvbi1zaGVldC1zdWItdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZTptYXgoMTNweCwgMC44MTI1cmVtKTtmb250LXdlaWdodDo0MDB9LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTRweDstd2Via2l0LXBhZGRpbmctZW5kOjE0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE0cHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxNHB4O21pbi1oZWlnaHQ6NTZweDtmb250LXNpemU6bWF4KDIwcHgsIDEuMjVyZW0pO2NvbnRhaW46Y29udGVudH0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7LXdlYmtpdC1tYXJnaW4tZW5kOjAuM2VtO21hcmdpbi1pbmxpbmUtZW5kOjAuM2VtO2ZvbnQtc2l6ZTptYXgoMjhweCwgMS43NXJlbSk7cG9pbnRlci1ldmVudHM6bm9uZX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxke2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYWN0aW9uLXNoZWV0LXNlbGVjdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2ZvbnQtd2VpZ2h0OmJvbGR9LmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7Zm9udC13ZWlnaHQ6NjAwfS5hY3Rpb24tc2hlZXQtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLXNlbGVjdGVkKTtvcGFjaXR5OnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLXNlbGVjdGVkLW9wYWNpdHkpfS5hY3Rpb24tc2hlZXQtZGVzdHJ1Y3RpdmUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsLmFjdGlvbi1zaGVldC1kZXN0cnVjdGl2ZS5pb24tYWN0aXZhdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLC5hY3Rpb24tc2hlZXQtZGVzdHJ1Y3RpdmUuaW9uLWZvY3VzZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZil9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXsuYWN0aW9uLXNoZWV0LWRlc3RydWN0aXZlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmhvdmVye2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNjNTAwMGYpfX1cIjtcbmNvbnN0IElvbkFjdGlvblNoZWV0SW9zU3R5bGUwID0gYWN0aW9uU2hlZXRJb3NDc3M7XG5jb25zdCBhY3Rpb25TaGVldE1kQ3NzID0gXCIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oey0tY29sb3I6aW5pdGlhbDstLWJ1dHRvbi1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0tYnV0dG9uLWNvbG9yKTstLWJ1dHRvbi1jb2xvci1mb2N1c2VkOnZhcigtLWJ1dHRvbi1jb2xvcik7LS1idXR0b24tY29sb3ItaG92ZXI6dmFyKC0tYnV0dG9uLWNvbG9yKTstLWJ1dHRvbi1jb2xvci1zZWxlY3RlZDp2YXIoLS1idXR0b24tY29sb3IpOy0tbWluLXdpZHRoOmF1dG87LS13aWR0aDoxMDAlOy0tbWF4LXdpZHRoOjUwMHB4Oy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkgKyB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSkpKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO291dGxpbmU6bm9uZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLWh7ZGlzcGxheTpub25lfS5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2xlZnQ6MDtyaWdodDowO2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O292ZXJmbG93OmhpZGRlbn0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kOmRpc2FibGVke2NvbG9yOnZhcigtLWJ1dHRvbi1jb2xvci1kaXNhYmxlZCk7b3BhY2l0eTowLjR9LmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxfS5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gKHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKSArIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKSkpO21heC1oZWlnaHQ6Y2FsYygxMDBkdmggLSAodmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApICsgdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDApKSl9LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LW1key1tcy1mbGV4LW5lZ2F0aXZlOjI7ZmxleC1zaHJpbms6MjtvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6Y29udGFpbjtvdmVyZmxvdy15OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7cG9pbnRlci1ldmVudHM6YWxsO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9QG1lZGlhIChhbnktcG9pbnRlcjogY29hcnNlKXsuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX19LmFjdGlvbi1zaGVldC1ncm91cC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7b3ZlcmZsb3c6aGlkZGVufS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQ6OmFmdGVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowfS5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtjb2xvcjp2YXIoLS1idXR0b24tY29sb3Itc2VsZWN0ZWQpfS5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1tZDo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZCk7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZC1vcGFjaXR5KX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2YXRlZCl9LmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWFjdGl2YXRlZC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eSl9LmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWZvY3VzZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtjb2xvcjp2YXIoLS1idXR0b24tY29sb3ItZm9jdXNlZCl9LmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWZvY3VzZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1tZDo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkKTtvcGFjaXR5OnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eSl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXsuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kOm5vdCg6ZGlzYWJsZWQpOmhvdmVye2NvbG9yOnZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcil9LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZDpub3QoOmRpc2FibGVkKTpob3Zlcjo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5KX19LnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTstLWJhY2tkcm9wLW9wYWNpdHk6dmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMzIpOy0tYnV0dG9uLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZDpjdXJyZW50Q29sb3I7LS1idXR0b24tYmFja2dyb3VuZC1zZWxlY3RlZC1vcGFjaXR5OjA7LS1idXR0b24tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1idXR0b24tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTowOy0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yOy0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTouMDQ7LS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJ1dHRvbi1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpOy0tYnV0dG9uLWNvbG9yLWRpc2FibGVkOnZhcigtLWJ1dHRvbi1jb2xvcik7LS1jb2xvcjpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNTQpfS5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LW1key13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDp2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCk7bWFyZ2luLWJvdHRvbTowfS5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjE3cHg7bWluLWhlaWdodDo2MHB4O2NvbG9yOnZhcigtLWNvbG9yLCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNTQpKTtmb250LXNpemU6MXJlbTt0ZXh0LWFsaWduOnN0YXJ0fS5hY3Rpb24tc2hlZXQtc3ViLXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MC44NzVyZW19LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjB9LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20pfS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NTJweDtmb250LXNpemU6MXJlbTt0ZXh0LWFsaWduOnN0YXJ0O2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW59LmFjdGlvbi1zaGVldC1pY29uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjMycHg7bWFyZ2luLWlubGluZS1lbmQ6MzJweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6MS41cmVtfS5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYWN0aW9uLXNoZWV0LXNlbGVjdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7Zm9udC13ZWlnaHQ6Ym9sZH1cIjtcbmNvbnN0IElvbkFjdGlvblNoZWV0TWRTdHlsZTAgPSBhY3Rpb25TaGVldE1kQ3NzO1xuY29uc3QgQWN0aW9uU2hlZXQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXREaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGVsZWdhdGVDb250cm9sbGVyID0gY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMubG9ja0NvbnRyb2xsZXIgPSBjcmVhdGVMb2NrQ29udHJvbGxlcigpO1xuICAgIHRoaXMudHJpZ2dlckNvbnRyb2xsZXIgPSBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlcigpO1xuICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgIH07XG4gICAgdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXIgPSBldiA9PiB7XG4gICAgICBjb25zdCByb2xlID0gZXYuZGV0YWlsLnJvbGU7XG4gICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gdGhpcy5nZXRCdXR0b25zKCkuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGNhbmNlbEJ1dHRvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm92ZXJsYXlJbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlbGVnYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzQ29udHJvbGxlciA9IGZhbHNlO1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgdGhpcy5lbnRlckFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxlYXZlQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgIHRoaXMuaGVhZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3ViSGVhZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIG9uSXNPcGVuQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSAmJiBvbGRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJlc2VudCgpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlckNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGVsLFxuICAgICAgdHJpZ2dlckNvbnRyb2xsZXJcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlckNvbnRyb2xsZXIuYWRkQ2xpY2tMaXN0ZW5lcihlbCwgdHJpZ2dlcik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBQcmVzZW50IHRoZSBhY3Rpb24gc2hlZXQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBhd2FpdCB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5hdHRhY2hWaWV3VG9Eb20oKTtcbiAgICBhd2FpdCBwcmVzZW50KHRoaXMsICdhY3Rpb25TaGVldEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pO1xuICAgIHVubG9jaygpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNtaXNzIHRoZSBhY3Rpb24gc2hlZXQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFjdGlvbiBzaGVldC5cbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICpcbiAgICogVGhpcyBpcyBhIG5vLW9wIGlmIHRoZSBvdmVybGF5IGhhcyBub3QgYmVlbiBwcmVzZW50ZWQgeWV0LiBJZiB5b3Ugd2FudFxuICAgKiB0byByZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBET00gdGhhdCB3YXMgbmV2ZXIgcHJlc2VudGVkLCB1c2UgdGhlXG4gICAqIFtyZW1vdmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3JlbW92ZSkgbWV0aG9kLlxuICAgKi9cbiAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgY29uc3QgZGlzbWlzc2VkID0gYXdhaXQgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnYWN0aW9uU2hlZXRMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5yZW1vdmVWaWV3RnJvbURvbSgpO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgICByZXR1cm4gZGlzbWlzc2VkO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFjdGlvbiBzaGVldCBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkFjdGlvblNoZWV0RGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFjdGlvbiBzaGVldCB3aWxsIGRpc21pc3MuXG4gICAqXG4gICAqL1xuICBvbldpbGxEaXNtaXNzKCkge1xuICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzcycpO1xuICB9XG4gIGFzeW5jIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgIGNvbnN0IHJvbGUgPSBidXR0b24ucm9sZTtcbiAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc21pc3MoYnV0dG9uLmRhdGEsIHJvbGUpO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pO1xuICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKGJ1dHRvbi5kYXRhLCBidXR0b24ucm9sZSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBhc3luYyBjYWxsQnV0dG9uSGFuZGxlcihidXR0b24pIHtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgIGNvbnN0IHJ0biA9IGF3YWl0IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyKTtcbiAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9ucy5tYXAoYiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGIgPT09ICdzdHJpbmcnID8ge1xuICAgICAgICB0ZXh0OiBiXG4gICAgICB9IDogYjtcbiAgICB9KTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlci5yZW1vdmVDbGlja0xpc3RlbmVyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAvKipcbiAgICAgKiBPbmx5IGNyZWF0ZSBnZXN0dXJlIGlmOlxuICAgICAqIDEuIEEgZ2VzdHVyZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XG4gICAgICogMi4gQXBwIGlzIHJ1bm5pbmcgaW4gaU9TIG1vZGVcbiAgICAgKiAzLiBBIHdyYXBwZXIgcmVmIGV4aXN0c1xuICAgICAqIDQuIEEgZ3JvdXAgcmVmIGV4aXN0c1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGdyb3VwRWwsXG4gICAgICB3cmFwcGVyRWxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuZ2VzdHVyZSAmJiBnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJyAmJiB3cmFwcGVyRWwgJiYgZ3JvdXBFbCkge1xuICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICBjb25zdCBpc1Njcm9sbGFibGUgPSBncm91cEVsLnNjcm9sbEhlaWdodCA+IGdyb3VwRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAoIWlzU2Nyb2xsYWJsZSkge1xuICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUod3JhcHBlckVsLCByZWZFbCA9PiByZWZFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGlvbi1zaGVldC1idXR0b24nKSk7XG4gICAgICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGFjdGlvbiBzaGVldCB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIGFjdGlvbiBzaGVldCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlYWRlcixcbiAgICAgIGh0bWxBdHRyaWJ1dGVzLFxuICAgICAgb3ZlcmxheUluZGV4XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgYWxsQnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGFsbEJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihiID0+IGIucm9sZSAhPT0gJ2NhbmNlbCcpO1xuICAgIGNvbnN0IGhlYWRlcklEID0gYGFjdGlvbi1zaGVldC0ke292ZXJsYXlJbmRleH0taGVhZGVyYDtcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJzdiYmQyMDJjYTllMTk3MjdlNzUxNGFiYmUwNzM2ODdkOTgyZjgwYzMnLFxuICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGhlYWRlciAhPT0gdW5kZWZpbmVkID8gaGVhZGVySUQgOiBudWxsLFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgIH0sIGh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwge1xuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAnYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudFxuICAgICAgfSksXG4gICAgICBvbklvbkFjdGlvblNoZWV0V2lsbERpc21pc3M6IHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyLFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwXG4gICAgfSksIGgoXCJpb24tYmFja2Ryb3BcIiwge1xuICAgICAga2V5OiAnMjMzNDRhOTIyMWEyZTY3MjBkN2I5ZGU1MjQ5ZGMzNzI1NmNhZmE3YicsXG4gICAgICB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3NcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdmYmMyYmExNTU0OWMyYWIwNGU3NTllODJkZjZlMTc3ZmQ4MGNjMGE2JyxcbiAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc3NDhlZTUyMzVkMGI0Y2IyNmQ2ZjFiNzU4OWY3N2FmMmUzN2FkMjhhJyxcbiAgICAgIGNsYXNzOiBcImFjdGlvbi1zaGVldC13cmFwcGVyIGlvbi1vdmVybGF5LXdyYXBwZXJcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy53cmFwcGVyRWwgPSBlbFxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnN2NlNWZhMjM2Y2Y3NWU5YjFlNDljNDcyNWM5YTgxMTA3ODcwNjU1NCcsXG4gICAgICBjbGFzczogXCJhY3Rpb24tc2hlZXQtY29udGFpbmVyXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2RjMjI1MWYzYmNlZTRhOTNlMzQ0OWYwOTYyMWNiZDJiNjVkMzI5ZTknLFxuICAgICAgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWdyb3VwXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMuZ3JvdXBFbCA9IGVsXG4gICAgfSwgaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc0OGQzMjVjOGE4NTJmNTZlZDU3YTlhZGExYTY3MDlkMDViYTMyZWUyJyxcbiAgICAgIGlkOiBoZWFkZXJJRCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhY3Rpb24tc2hlZXQtdGl0bGUnOiB0cnVlLFxuICAgICAgICAnYWN0aW9uLXNoZWV0LWhhcy1zdWItdGl0bGUnOiB0aGlzLnN1YkhlYWRlciAhPT0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSwgaGVhZGVyLCB0aGlzLnN1YkhlYWRlciAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzY2MDkzNzI4MDUyZWI2N2YzN2EzNWYzMjMyNzYxY2U0YTA4ODk2ZjMnLFxuICAgICAgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LXN1Yi10aXRsZVwiXG4gICAgfSwgdGhpcy5zdWJIZWFkZXIpKSwgYnV0dG9ucy5tYXAoYiA9PiBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIGIuaHRtbEF0dHJpYnV0ZXMsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBpZDogYi5pZCxcbiAgICAgIGNsYXNzOiBidXR0b25DbGFzcyhiKSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYiksXG4gICAgICBkaXNhYmxlZDogYi5kaXNhYmxlZFxuICAgIH0pLCBoKFwic3BhblwiLCB7XG4gICAgICBjbGFzczogXCJhY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyXCJcbiAgICB9LCBiLmljb24gJiYgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGljb246IGIuaWNvbixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGNsYXNzOiBcImFjdGlvbi1zaGVldC1pY29uXCJcbiAgICB9KSwgYi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKSksIGNhbmNlbEJ1dHRvbiAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2Y0ZWI4ZTNlMjg4NWI4NWFmNTA4MGRmMThkMGRlMGJkZDFkNzE5ZGUnLFxuICAgICAgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWdyb3VwIGFjdGlvbi1zaGVldC1ncm91cC1jYW5jZWxcIlxuICAgIH0sIGgoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICcxNjlmNGViMDkyNTVhYmE4NTA2MmJhYWQ0OWNlYjE1MTIzOWZiZmI3J1xuICAgIH0sIGNhbmNlbEJ1dHRvbi5odG1sQXR0cmlidXRlcywge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBidXR0b25DbGFzcyhjYW5jZWxCdXR0b24pLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5idXR0b25DbGljayhjYW5jZWxCdXR0b24pXG4gICAgfSksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJzI1ZmI4YTQ2NmRkNjdlYTk0Yzc5Y2ZiNGY5OTY1NTI3ZTFjZTZkNDInLFxuICAgICAgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lclwiXG4gICAgfSwgY2FuY2VsQnV0dG9uLmljb24gJiYgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGtleTogJ2ViNWIwNzFlMTIwYTJjODZhZmRmOTY3YWY2YTc2M2E0MzA0NGQxY2EnLFxuICAgICAgaWNvbjogY2FuY2VsQnV0dG9uLmljb24sXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBjbGFzczogXCJhY3Rpb24tc2hlZXQtaWNvblwiXG4gICAgfSksIGNhbmNlbEJ1dHRvbi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwge1xuICAgICAga2V5OiAnNDUyYWQ3ZTEwNTJiMmM2ODFlMmQ5OGRlODE5Mzk0OTc1NWFkNGQ1NCdcbiAgICB9KSkpKSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZTFjZWNmMjgwYzk4N2MwNTBkOTQ0NWUyYzQ1OGI5MDNmMTUzMDg5YicsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBidXR0b25DbGFzcyA9IGJ1dHRvbiA9PiB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAnYWN0aW9uLXNoZWV0LWJ1dHRvbic6IHRydWUsXG4gICAgJ2lvbi1hY3RpdmF0YWJsZSc6ICFidXR0b24uZGlzYWJsZWQsXG4gICAgJ2lvbi1mb2N1c2FibGUnOiAhYnV0dG9uLmRpc2FibGVkLFxuICAgIFtgYWN0aW9uLXNoZWV0LSR7YnV0dG9uLnJvbGV9YF06IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWRcbiAgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuQWN0aW9uU2hlZXQuc3R5bGUgPSB7XG4gIGlvczogSW9uQWN0aW9uU2hlZXRJb3NTdHlsZTAsXG4gIG1kOiBJb25BY3Rpb25TaGVldE1kU3R5bGUwXG59O1xuZXhwb3J0IHsgQWN0aW9uU2hlZXQgYXMgaW9uX2FjdGlvbl9zaGVldCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLElBQU0sb0JBQW9CLFlBQVU7QUFDbEMsUUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQ3RDLFFBQU0sb0JBQW9CLGdCQUFnQjtBQUMxQyxRQUFNLG1CQUFtQixnQkFBZ0I7QUFDekMsb0JBQWtCLFdBQVcsT0FBTyxjQUFjLGNBQWMsQ0FBQyxFQUFFLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixFQUFFLGFBQWE7QUFBQSxJQUNqSSxrQkFBa0I7QUFBQSxFQUNwQixDQUFDLEVBQUUsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7QUFDdEMsbUJBQWlCLFdBQVcsT0FBTyxjQUFjLHVCQUF1QixDQUFDLEVBQUUsT0FBTyxhQUFhLG9CQUFvQixnQkFBZ0I7QUFDbkksU0FBTyxjQUFjLFdBQVcsTUFBTSxFQUFFLE9BQU8sNkJBQTZCLEVBQUUsU0FBUyxHQUFHLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixnQkFBZ0IsQ0FBQztBQUNoSjtBQUtBLElBQU0sb0JBQW9CLFlBQVU7QUFDbEMsUUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQ3RDLFFBQU0sb0JBQW9CLGdCQUFnQjtBQUMxQyxR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
