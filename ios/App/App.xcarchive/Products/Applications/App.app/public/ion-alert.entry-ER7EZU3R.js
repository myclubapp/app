import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-HHPBBMWP.js";
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
  config,
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-alert.entry.js
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: "scale(1)"
  }, {
    offset: 1,
    opacity: 0,
    transform: "scale(0.9)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(0.9)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).fromTo("opacity", 0.99, 0);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
var alertIosCss = ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-ios,.alert-radio-label.sc-ion-alert-ios{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:clamp(270px, 16.875rem, 324px);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:max(14px, 0.875rem)}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:max(17px, 1.0625rem);font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:max(14px, 0.875rem)}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:max(13px, 0.8125rem);text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:7px;margin-top:10px;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:7px;padding-bottom:7px;border:0.55px solid var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf));background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:1rem}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-input.sc-ion-alert-ios::-webkit-date-and-time-value{height:18px}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{min-height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000)}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #0054e9)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000)}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:min(1.375rem, 55.836px);height:min(1.375rem, 55.836px);border-width:0.125rem;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:calc(min(1.375rem, 55.836px) / 8);position:absolute;width:calc(min(1.375rem, 55.836px) / 6 + 1px);height:calc(min(1.375rem, 55.836px) * 0.5);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:calc(min(1.375rem, 55.836px) / 3)}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios{border-right:none}[dir=rtl].sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}[dir=rtl].sc-ion-alert-ios .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}@supports selector(:dir(rtl)){.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:none}}.alert-button.sc-ion-alert-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:max(44px, 2.75rem);border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #0054e9);font-size:max(17px, 1.0625rem);overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #c5000f)}";
var IonAlertIosStyle0 = alertIosCss;
var alertMdCss = ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-md,.alert-radio-label.sc-ion-alert-md{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:0.875rem}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1.25rem;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1rem}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.alert-message.sc-ion-alert-md{font-size:1rem}@media screen and (max-width: 767px){.alert-message.sc-ion-alert-md{max-height:266px}}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #0054e9)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;border-top:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));overflow:auto}@media screen and (max-width: 767px){.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{max-height:266px}}.alert-tappable.sc-ion-alert-md{position:relative;min-height:48px}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373))}.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #0054e9)}.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626))}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;width:calc(100% - 53px);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373));contain:strict}.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #0054e9);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}@media screen and (min-width: 768px){.sc-ion-alert-md-h{--max-width:min(100vw - 96px, 560px);--max-height:min(100vh - 96px, 560px)}}";
var IonAlertMdStyle0 = alertMdCss;
var Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionAlertDidPresent", 7);
    this.willPresent = createEvent(this, "ionAlertWillPresent", 7);
    this.willDismiss = createEvent(this, "ionAlertWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionAlertDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.processedInputs = [];
    this.processedButtons = [];
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.processedButtons.find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.cssClass = void 0;
    this.header = void 0;
    this.subHeader = void 0;
    this.message = void 0;
    this.buttons = [];
    this.inputs = [];
    this.backdropDismiss = true;
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
  onKeydown(ev) {
    var _a;
    const inputTypes = new Set(this.processedInputs.map((i) => i.type));
    if (inputTypes.has("checkbox") && ev.key === "Enter") {
      ev.preventDefault();
      return;
    }
    if (ev.target.classList.contains("alert-wrapper")) {
      if (ev.key === "Tab" && ev.shiftKey) {
        ev.preventDefault();
        const lastChildBtn = (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.querySelector(".alert-button:last-child");
        lastChildBtn.focus();
        return;
      }
    }
    if (!inputTypes.has("radio") || ev.target && !this.el.contains(ev.target) || ev.target.classList.contains("alert-button")) {
      return;
    }
    const query = this.el.querySelectorAll(".alert-radio");
    const radios = Array.from(query).filter((radio) => !radio.disabled);
    const index = radios.findIndex((radio) => radio.id === ev.target.id);
    let nextEl;
    if (["ArrowDown", "ArrowRight"].includes(ev.key)) {
      nextEl = index === radios.length - 1 ? radios[0] : radios[index + 1];
    }
    if (["ArrowUp", "ArrowLeft"].includes(ev.key)) {
      nextEl = index === 0 ? radios[radios.length - 1] : radios[index - 1];
    }
    if (nextEl && radios.includes(nextEl)) {
      const nextProcessed = this.processedInputs.find((input) => input.id === (nextEl === null || nextEl === void 0 ? void 0 : nextEl.id));
      if (nextProcessed) {
        this.rbClick(nextProcessed);
        nextEl.focus();
      }
    }
  }
  buttonsChanged() {
    const buttons = this.buttons;
    this.processedButtons = buttons.map((btn) => {
      return typeof btn === "string" ? {
        text: btn,
        role: btn.toLowerCase() === "cancel" ? "cancel" : void 0
      } : btn;
    });
  }
  inputsChanged() {
    const inputs = this.inputs;
    const first = inputs.find((input) => !input.disabled);
    const checked = inputs.find((input) => input.checked && !input.disabled);
    const focusable = checked || first;
    const inputTypes = new Set(inputs.map((i) => i.type));
    if (inputTypes.has("checkbox") && inputTypes.has("radio")) {
      console.warn(`Alert cannot mix input types: ${Array.from(inputTypes.values()).join("/")}. Please see alert docs for more info.`);
    }
    this.inputType = inputTypes.values().next().value;
    this.processedInputs = inputs.map((i, index) => {
      var _a;
      return {
        type: i.type || "text",
        name: i.name || `${index}`,
        placeholder: i.placeholder || "",
        value: i.value,
        label: i.label,
        checked: !!i.checked,
        disabled: !!i.disabled,
        id: i.id || `alert-input-${this.overlayIndex}-${index}`,
        handler: i.handler,
        min: i.min,
        max: i.max,
        cssClass: (_a = i.cssClass) !== null && _a !== void 0 ? _a : "",
        attributes: i.attributes || {},
        tabindex: i.type === "radio" && i !== focusable ? -1 : 0
      };
    });
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
    this.inputsChanged();
    this.buttonsChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  componentDidLoad() {
    if (!this.gesture && getIonMode(this) === "ios" && this.wrapperEl) {
      this.gesture = createButtonActiveGesture(this.wrapperEl, (refEl) => refEl.classList.contains("alert-button"));
      this.gesture.enable(true);
    }
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the alert overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "alertEnter", iosEnterAnimation, mdEnterAnimation).then(() => {
        var _a, _b;
        if (this.buttons.length === 1 && this.inputs.length === 0) {
          const queryBtn = (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.querySelector(".alert-button");
          queryBtn.focus();
        } else {
          (_b = this.wrapperEl) === null || _b === void 0 ? void 0 : _b.focus();
        }
      });
      unlock();
    });
  }
  /**
   * Dismiss the alert overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the alert.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the alert.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      const dismissed = yield dismiss(this, data, role, "alertLeave", iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the alert did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionAlertDidDismiss");
  }
  /**
   * Returns a promise that resolves when the alert will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionAlertWillDismiss");
  }
  rbClick(selectedInput) {
    for (const input of this.processedInputs) {
      input.checked = input === selectedInput;
      input.tabindex = input === selectedInput ? 0 : -1;
    }
    this.activeId = selectedInput.id;
    safeCall(selectedInput.handler, selectedInput);
    forceUpdate(this);
  }
  cbClick(selectedInput) {
    selectedInput.checked = !selectedInput.checked;
    safeCall(selectedInput.handler, selectedInput);
    forceUpdate(this);
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      const values = this.getValues();
      if (isCancel(role)) {
        return this.dismiss({
          values
        }, role);
      }
      const returnData = yield this.callButtonHandler(button, values);
      if (returnData !== false) {
        return this.dismiss(Object.assign({
          values
        }, returnData), button.role);
      }
      return false;
    });
  }
  callButtonHandler(button, data) {
    return __async(this, null, function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        const returnData = yield safeCall(button.handler, data);
        if (returnData === false) {
          return false;
        }
        if (typeof returnData === "object") {
          return returnData;
        }
      }
      return {};
    });
  }
  getValues() {
    if (this.processedInputs.length === 0) {
      return void 0;
    }
    if (this.inputType === "radio") {
      const checkedInput = this.processedInputs.find((i) => !!i.checked);
      return checkedInput ? checkedInput.value : void 0;
    }
    if (this.inputType === "checkbox") {
      return this.processedInputs.filter((i) => i.checked).map((i) => i.value);
    }
    const values = {};
    this.processedInputs.forEach((i) => {
      values[i.name] = i.value || "";
    });
    return values;
  }
  renderAlertInputs() {
    switch (this.inputType) {
      case "checkbox":
        return this.renderCheckbox();
      case "radio":
        return this.renderRadio();
      default:
        return this.renderInput();
    }
  }
  renderCheckbox() {
    const inputs = this.processedInputs;
    const mode = getIonMode(this);
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-checkbox-group"
    }, inputs.map((i) => h("button", {
      type: "button",
      onClick: () => this.cbClick(i),
      "aria-checked": `${i.checked}`,
      id: i.id,
      disabled: i.disabled,
      tabIndex: i.tabindex,
      role: "checkbox",
      class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), {
        "alert-tappable": true,
        "alert-checkbox": true,
        "alert-checkbox-button": true,
        "ion-focusable": true,
        "alert-checkbox-button-disabled": i.disabled || false
      })
    }, h("div", {
      class: "alert-button-inner"
    }, h("div", {
      class: "alert-checkbox-icon"
    }, h("div", {
      class: "alert-checkbox-inner"
    })), h("div", {
      class: "alert-checkbox-label"
    }, i.label)), mode === "md" && h("ion-ripple-effect", null))));
  }
  renderRadio() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-radio-group",
      role: "radiogroup",
      "aria-activedescendant": this.activeId
    }, inputs.map((i) => h("button", {
      type: "button",
      onClick: () => this.rbClick(i),
      "aria-checked": `${i.checked}`,
      disabled: i.disabled,
      id: i.id,
      tabIndex: i.tabindex,
      class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), {
        "alert-radio-button": true,
        "alert-tappable": true,
        "alert-radio": true,
        "ion-focusable": true,
        "alert-radio-button-disabled": i.disabled || false
      }),
      role: "radio"
    }, h("div", {
      class: "alert-button-inner"
    }, h("div", {
      class: "alert-radio-icon"
    }, h("div", {
      class: "alert-radio-inner"
    })), h("div", {
      class: "alert-radio-label"
    }, i.label)))));
  }
  renderInput() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-input-group"
    }, inputs.map((i) => {
      var _a, _b, _c, _d;
      if (i.type === "textarea") {
        return h("div", {
          class: "alert-input-wrapper"
        }, h("textarea", Object.assign({
          placeholder: i.placeholder,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_b = (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : i.disabled,
          class: inputClass(i),
          onInput: (e) => {
            var _a2;
            i.value = e.target.value;
            if ((_a2 = i.attributes) === null || _a2 === void 0 ? void 0 : _a2.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      } else {
        return h("div", {
          class: "alert-input-wrapper"
        }, h("input", Object.assign({
          placeholder: i.placeholder,
          type: i.type,
          min: i.min,
          max: i.max,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_d = (_c = i.attributes) === null || _c === void 0 ? void 0 : _c.disabled) !== null && _d !== void 0 ? _d : i.disabled,
          class: inputClass(i),
          onInput: (e) => {
            var _a2;
            i.value = e.target.value;
            if ((_a2 = i.attributes) === null || _a2 === void 0 ? void 0 : _a2.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      }
    }));
  }
  renderAlertButtons() {
    const buttons = this.processedButtons;
    const mode = getIonMode(this);
    const alertButtonGroupClass = {
      "alert-button-group": true,
      "alert-button-group-vertical": buttons.length > 2
    };
    return h("div", {
      class: alertButtonGroupClass
    }, buttons.map((button) => h("button", Object.assign({}, button.htmlAttributes, {
      type: "button",
      id: button.id,
      class: buttonClass(button),
      tabIndex: 0,
      onClick: () => this.buttonClick(button)
    }), h("span", {
      class: "alert-button-inner"
    }, button.text), mode === "md" && h("ion-ripple-effect", null))));
  }
  renderAlertMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        id: msgId,
        class: "alert-message",
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      id: msgId,
      class: "alert-message"
    }, message);
  }
  render() {
    const {
      overlayIndex,
      header,
      subHeader,
      message,
      htmlAttributes
    } = this;
    const mode = getIonMode(this);
    const hdrId = `alert-${overlayIndex}-hdr`;
    const msgId = `alert-${overlayIndex}-msg`;
    const subHdrId = `alert-${overlayIndex}-sub-hdr`;
    const role = this.inputs.length > 0 || this.buttons.length > 0 ? "alertdialog" : "alert";
    const ariaLabelledBy = header && subHeader ? `${hdrId} ${subHdrId}` : header ? hdrId : subHeader ? subHdrId : null;
    return h(Host, {
      key: "755f2398806084f16ee24d9fefce9ebc0b8f30f2",
      tabindex: "-1",
      style: {
        zIndex: `${2e4 + overlayIndex}`
      },
      class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), {
        [mode]: true,
        "overlay-hidden": true,
        "alert-translucent": this.translucent
      }),
      onIonAlertWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }, h("ion-backdrop", {
      key: "5965913fb076436e37f4a55cd8778cbc58449bfd",
      tappable: this.backdropDismiss
    }), h("div", {
      key: "cb17e07896b6ad8c9c607261fe08437b1a3b272f",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", Object.assign({
      key: "e1d43053dceab70b9392802767caa70fa7ed0518",
      class: "alert-wrapper ion-overlay-wrapper",
      role,
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": message !== void 0 ? msgId : null,
      tabindex: "0",
      ref: (el) => this.wrapperEl = el
    }, htmlAttributes), h("div", {
      key: "a82e0bf863971084f3a8a34d25d6cf7aae1690a8",
      class: "alert-head"
    }, header && h("h2", {
      key: "36a9b4394f4b4cdcd6972ae60265ac889e2157cf",
      id: hdrId,
      class: "alert-title"
    }, header), subHeader && !header && h("h2", {
      key: "86008c1eb484cc69f66e42c254933ce289180785",
      id: subHdrId,
      class: "alert-sub-title"
    }, subHeader), subHeader && header && h("h3", {
      key: "bfaacd3b119d06273683019cddef2c42245c3101",
      id: subHdrId,
      class: "alert-sub-title"
    }, subHeader)), this.renderAlertMessage(msgId), this.renderAlertInputs(), this.renderAlertButtons()), h("div", {
      key: "0e7df4ab31a72953dcf171ebc87074603f848c06",
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
      "trigger": ["triggerChanged"],
      "buttons": ["buttonsChanged"],
      "inputs": ["inputsChanged"]
    };
  }
};
var inputClass = (input) => {
  var _a, _b, _c;
  return Object.assign(Object.assign({
    "alert-input": true,
    "alert-input-disabled": ((_b = (_a = input.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : input.disabled) || false
  }, getClassMap(input.cssClass)), getClassMap(input.attributes ? (_c = input.attributes.class) === null || _c === void 0 ? void 0 : _c.toString() : ""));
};
var buttonClass = (button) => {
  return Object.assign({
    "alert-button": true,
    "ion-focusable": true,
    "ion-activatable": true,
    [`alert-button-role-${button.role}`]: button.role !== void 0
  }, getClassMap(button.cssClass));
};
Alert.style = {
  ios: IonAlertIosStyle0,
  md: IonAlertMdStyle0
};
export {
  Alert as ion_alert
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-alert.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWxlcnQuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaSBhcyBmb3JjZVVwZGF0ZSwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IEUgYXMgRU5BQkxFX0hUTUxfQ09OVEVOVF9ERUZBVUxULCBhIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9jb25maWctNDljODgyMTUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIH0gZnJvbSAnLi9idXR0b24tYWN0aXZlLTkwZjFkYmM0LmpzJztcbmltcG9ydCB7IHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlTG9ja0NvbnRyb2xsZXIgfSBmcm9tICcuL2xvY2stY29udHJvbGxlci0zMTY5MjhiZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlciwgZSBhcyBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlciwgQiBhcyBCQUNLRFJPUCwgaSBhcyBpc0NhbmNlbCwgaiBhcyBwcmVwYXJlT3ZlcmxheSwgayBhcyBzZXRPdmVybGF5SWQsIGYgYXMgcHJlc2VudCwgZyBhcyBkaXNtaXNzLCBoIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy00MWE1ZDUxYi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbmZpZywgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1lYWI1YTRjYS5qcyc7XG5pbXBvcnQgJy4vaGFwdGljLWFjMTY0ZTRjLmpzJztcbmltcG9ydCAnLi9jYXBhY2l0b3ItNTkzOTVjYmQuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCAnLi9pbmRleC0zOTc4MjY0Mi5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTMxNGE1NGY2LmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5cbi8qKlxuICogaU9TIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAnMC4wMScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1dKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnZWFzZS1pbi1vdXQnKS5kdXJhdGlvbigyMDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogaU9TIEFsZXJ0IExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1kIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6ICcwLjAxJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6ICcxJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfV0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdlYXNlLWluLW91dCcpLmR1cmF0aW9uKDE1MCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcblxuLyoqXG4gKiBNZCBBbGVydCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMTUwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgYWxlcnRJb3NDc3MgPSBcIi5zYy1pb24tYWxlcnQtaW9zLWh7LS1taW4td2lkdGg6MjUwcHg7LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OjkwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1hbGVydC1pb3MtaHtkaXNwbGF5Om5vbmV9LmFsZXJ0LXRvcC5zYy1pb24tYWxlcnQtaW9zLWh7cGFkZGluZy10b3A6NTBweDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46Y29udGVudDtvcGFjaXR5OjA7ei1pbmRleDoxMH0uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjVweDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXdlaWdodDpub3JtYWx9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteTphdXRvO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWlufS5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze292ZXJmbG93LXdyYXA6YW55d2hlcmV9QG1lZGlhIChhbnktcG9pbnRlcjogY29hcnNlKXsuYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvczo6LXdlYmtpdC1zY3JvbGxiYXIsLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX19LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6aW5oZXJpdDtmb250OmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDoxMDAlfS5hbGVydC1idXR0b24tZ3JvdXAtdmVydGljYWwuc2MtaW9uLWFsZXJ0LWlvc3stbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jaztib3JkZXI6MDtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MS4yNXJlbTt6LWluZGV4OjB9LmFsZXJ0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC10YXBwYWJsZS5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpfS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQtZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5pdGlhbDt0ZXh0LWFsaWduOnN0YXJ0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtjb250YWluOmNvbnRlbnR9LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1jaGVja2JveC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby5zYy1pb24tYWxlcnQtaW9ze291dGxpbmU6bm9uZX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3MsLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fXRleHRhcmVhLmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7bWluLWhlaWdodDozN3B4O3Jlc2l6ZTpub25lfS5zYy1pb24tYWxlcnQtaW9zLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNmOWY5ZjkpKSk7LS1tYXgtd2lkdGg6Y2xhbXAoMjcwcHgsIDE2Ljg3NXJlbSwgMzI0cHgpOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zKTtmb250LXNpemU6bWF4KDE0cHgsIDAuODc1cmVtKX0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6MTNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3ZlcmZsb3c6aGlkZGVufS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7cG9pbnRlci1ldmVudHM6bm9uZX1Ac3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkpey5hbGVydC10cmFuc2x1Y2VudC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206N3B4O3RleHQtYWxpZ246Y2VudGVyfS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi10b3A6OHB4O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6bWF4KDE3cHgsIDEuMDYyNXJlbSk7Zm9udC13ZWlnaHQ6NjAwfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LWlvc3tjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7Zm9udC1zaXplOm1heCgxNHB4LCAwLjg3NXJlbSl9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjIxcHg7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtc2l6ZTptYXgoMTNweCwgMC44MTI1cmVtKTt0ZXh0LWFsaWduOmNlbnRlcn0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9ze21heC1oZWlnaHQ6MjQwcHh9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvczplbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbToxMnB4fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6N3B4O21hcmdpbi10b3A6MTBweDstd2Via2l0LXBhZGRpbmctc3RhcnQ6N3B4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjdweDstd2Via2l0LXBhZGRpbmctZW5kOjdweDtwYWRkaW5nLWlubGluZS1lbmQ6N3B4O3BhZGRpbmctdG9wOjdweDtwYWRkaW5nLWJvdHRvbTo3cHg7Ym9yZGVyOjAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYmZiZmJmKSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2ZvbnQtc2l6ZToxcmVtfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZXtoZWlnaHQ6MThweH0uYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3stbXMtc2Nyb2xsLWNoYWluaW5nOm5vbmU7b3ZlcnNjcm9sbC1iZWhhdmlvcjpjb250YWluO21heC1oZWlnaHQ6MjQwcHg7Ym9yZGVyLXRvcDowLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpO292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LWlvc3ttaW4taGVpZ2h0OjQ0cHh9LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTNweDstd2Via2l0LXBhZGRpbmctZW5kOjEzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEzcHg7cGFkZGluZy10b3A6MTNweDtwYWRkaW5nLWJvdHRvbToxM3B4Oy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LW9yZGVyOjA7b3JkZXI6MDtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9ze3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MTttaW4td2lkdGg6MzBweH1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7dG9wOi03cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NnB4O2hlaWdodDoxMnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjdweH0uYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjZweDttYXJnaW4taW5saW5lLWVuZDo2cHg7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDptaW4oMS4zNzVyZW0sIDU1LjgzNnB4KTtoZWlnaHQ6bWluKDEuMzc1cmVtLCA1NS44MzZweCk7Ym9yZGVyLXdpZHRoOjAuMTI1cmVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYzhjN2NjKSkpKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7Y29udGFpbjpzdHJpY3R9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3N7dG9wOmNhbGMobWluKDEuMzc1cmVtLCA1NS44MzZweCkgLyA4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDpjYWxjKG1pbigxLjM3NXJlbSwgNTUuODM2cHgpIC8gNiArIDFweCk7aGVpZ2h0OmNhbGMobWluKDEuMzc1cmVtLCA1NS44MzZweCkgKiAwLjUpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjAuMTI1cmVtO2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tpbnNldC1pbmxpbmUtc3RhcnQ6Y2FsYyhtaW4oMS4zNzVyZW0sIDU1LjgzNnB4KSAvIDMpfS5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LW1hcmdpbi1lbmQ6LTAuNTVweDttYXJnaW4taW5saW5lLWVuZDotMC41NXB4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxkLFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24tZ3JvdXAtdmVydGljYWwuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0Om5vbmV9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxkOmRpcihydGwpe2JvcmRlci1yaWdodDpub25lfX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czowOy1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjUwJTtoZWlnaHQ6bWF4KDQ0cHgsIDIuNzVyZW0pO2JvcmRlci10b3A6MC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKTtib3JkZXItcmlnaHQ6MC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXNpemU6bWF4KDE3cHgsIDEuMDYyNXJlbSk7b3ZlcmZsb3c6aGlkZGVufVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxkLFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpmaXJzdC1jaGlsZHtib3JkZXItcmlnaHQ6MH1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6Zmlyc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxkOmRpcihydGwpe2JvcmRlci1yaWdodDowfX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6MDtmb250LXdlaWdodDpib2xkfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQsW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9W2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQ6ZGlyKHJ0bCl7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9fS5hbGVydC1idXR0b24uaW9uLWFjdGl2YXRlZC5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEpfS5hbGVydC1idXR0b24tcm9sZS1kZXN0cnVjdGl2ZS5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1idXR0b24tcm9sZS1kZXN0cnVjdGl2ZS5pb24tYWN0aXZhdGVkLnNjLWlvbi1hbGVydC1pb3MsLmFsZXJ0LWJ1dHRvbi1yb2xlLWRlc3RydWN0aXZlLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZil9XCI7XG5jb25zdCBJb25BbGVydElvc1N0eWxlMCA9IGFsZXJ0SW9zQ3NzO1xuY29uc3QgYWxlcnRNZENzcyA9IFwiLnNjLWlvbi1hbGVydC1tZC1oey0tbWluLXdpZHRoOjI1MHB4Oy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDo5MCU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWxlcnQtbWQtaHtkaXNwbGF5Om5vbmV9LmFsZXJ0LXRvcC5zYy1pb24tYWxlcnQtbWQtaHtwYWRkaW5nLXRvcDo1MHB4Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOmNvbnRlbnQ7b3BhY2l0eTowO3otaW5kZXg6MTB9LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6NXB4O21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteTphdXRvO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWlufS5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZHtvdmVyZmxvdy13cmFwOmFueXdoZXJlfUBtZWRpYSAoYW55LXBvaW50ZXI6IGNvYXJzZSl7LmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1zY3JvbGxiYXIsLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1zY3JvbGxiYXIsLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1kOjotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6aW5oZXJpdDtmb250OmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93O3dpZHRoOjEwMCV9LmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtbWR7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtd3JhcDpub3dyYXA7ZmxleC13cmFwOm5vd3JhcH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jaztib3JkZXI6MDtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MS4yNXJlbTt6LWluZGV4OjB9LmFsZXJ0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LXRhcHBhYmxlLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1tZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNlNmU2ZTYpKX0uYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQtZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1jaGVja2JveC1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1yYWRpby1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1ke2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC41O3BvaW50ZXItZXZlbnRzOm5vbmV9LmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5pdGlhbDt0ZXh0LWFsaWduOnN0YXJ0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtjb250YWluOmNvbnRlbnR9LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWNoZWNrYm94LnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1yYWRpby5zYy1pb24tYWxlcnQtbWR7b3V0bGluZTpub25lfS5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9dGV4dGFyZWEuYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1ke21pbi1oZWlnaHQ6MzdweDtyZXNpemU6bm9uZX0uc2MtaW9uLWFsZXJ0LW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7LS1tYXgtd2lkdGg6MjgwcHg7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMyKTtmb250LXNpemU6MC44NzVyZW19LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9LmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtcGFkZGluZy1zdGFydDoyM3B4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIzcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyM3B4O3BhZGRpbmctaW5saW5lLWVuZDoyM3B4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MTVweDt0ZXh0LWFsaWduOnN0YXJ0fS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtc2l6ZToxLjI1cmVtO2ZvbnQtd2VpZ2h0OjUwMH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1tZHtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1zaXplOjFyZW19LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1pbnB1dC1ncm91cC5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjI0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjRweDstd2Via2l0LXBhZGRpbmctZW5kOjI0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjI0cHg7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3MzczNzMpKX0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWR7Zm9udC1zaXplOjFyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpey5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHttYXgtaGVpZ2h0OjI2NnB4fX0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQ6ZW1wdHl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWQrLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctdG9wOjB9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6NXB4O21hcmdpbi1ib3R0b206NXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsICNkOWQ5ZDkpKTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC02MDAsICM5OTk5OTkpKSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC02MDAsICM5OTk5OTkpKSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC02MDAsICM5OTk5OTkpKSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOmZvY3Vze21hcmdpbi1ib3R0b206NHB4O2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX0uYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1jaGVja2JveC1ncm91cC5zYy1pb24tYWxlcnQtbWR7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgI2Q5ZDlkOSkpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsICNkOWQ5ZDkpKTtvdmVyZmxvdzphdXRvfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXsuYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1jaGVja2JveC1ncm91cC5zYy1pb24tYWxlcnQtbWR7bWF4LWhlaWdodDoyNjZweH19LmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjQ4cHh9LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6NTJweDtwYWRkaW5nLWlubGluZS1zdGFydDo1MnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjZweDtwYWRkaW5nLWlubGluZS1lbmQ6MjZweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpO2ZvbnQtc2l6ZToxcmVtfS5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZHt0b3A6MDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01NTAsICM3MzczNzMpKX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjI2cHh9LmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1tZHt0b3A6M3B4O2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLCAwLCAwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLCAwLCAwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfS5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjNweH1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0xNTAsICMyNjI2MjYpKX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwgMSwgMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwgMSwgMSl9LmFsZXJ0LWNoZWNrYm94LWxhYmVsLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6NTNweDtwYWRkaW5nLWlubGluZS1zdGFydDo1M3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjZweDtwYWRkaW5nLWlubGluZS1lbmQ6MjZweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6Y2FsYygxMDAlIC0gNTNweCk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpO2ZvbnQtc2l6ZToxcmVtfS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZHt0b3A6MDtib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoycHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtNTUwLCAjNzM3MzczKSk7Y29udGFpbjpzdHJpY3R9LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1ke2luc2V0LWlubGluZS1zdGFydDoyNnB4fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZHtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWR7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NnB4O2hlaWdodDoxMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1ke2luc2V0LWlubGluZS1zdGFydDozcHh9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstbXMtZmxleC13cmFwOndyYXAtcmV2ZXJzZTtmbGV4LXdyYXA6d3JhcC1yZXZlcnNlOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtib3JkZXItcmFkaXVzOjJweDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6OHB4O21hcmdpbi1pbmxpbmUtZW5kOjhweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDoxMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMHB4O3BhZGRpbmctaW5saW5lLWVuZDoxMHB4O3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXdlaWdodDo1MDA7dGV4dC1hbGlnbjplbmQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO292ZXJmbG93OmhpZGRlbn0uYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpey5zYy1pb24tYWxlcnQtbWQtaHstLW1heC13aWR0aDptaW4oMTAwdncgLSA5NnB4LCA1NjBweCk7LS1tYXgtaGVpZ2h0Om1pbigxMDB2aCAtIDk2cHgsIDU2MHB4KX19XCI7XG5jb25zdCBJb25BbGVydE1kU3R5bGUwID0gYWxlcnRNZENzcztcbmNvbnN0IEFsZXJ0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0RGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydERpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWRQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlciA9IGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyID0gY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmN1c3RvbUhUTUxFbmFibGVkID0gY29uZmlnLmdldCgnaW5uZXJIVE1MVGVtcGxhdGVzRW5hYmxlZCcsIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCk7XG4gICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBbXTtcbiAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBbXTtcbiAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgIHRoaXMub25CYWNrZHJvcFRhcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICB9O1xuICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gZXYgPT4ge1xuICAgICAgY29uc3Qgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHRoaXMucHJvY2Vzc2VkQnV0dG9ucy5maW5kKGIgPT4gYi5yb2xlID09PSAnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub3ZlcmxheUluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVsZWdhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNDb250cm9sbGVyID0gZmFsc2U7XG4gICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICB0aGlzLmVudGVyQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGVhdmVBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jc3NDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN1YkhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5idXR0b25zID0gW107XG4gICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaHRtbEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnRyaWdnZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25Jc09wZW5DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0cnVlICYmIG9sZFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wcmVzZW50KCk7XG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VyQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZWwsXG4gICAgICB0cmlnZ2VyQ29udHJvbGxlclxuICAgIH0gPSB0aGlzO1xuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyQ29udHJvbGxlci5hZGRDbGlja0xpc3RlbmVyKGVsLCB0cmlnZ2VyKTtcbiAgICB9XG4gIH1cbiAgb25LZXlkb3duKGV2KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBuZXcgU2V0KHRoaXMucHJvY2Vzc2VkSW5wdXRzLm1hcChpID0+IGkudHlwZSkpO1xuICAgIC8qKlxuICAgICAqIEJhc2VkIG9uIGtleWJvYXJkIG5hdmlnYXRpb24gcmVxdWlyZW1lbnRzLCB0aGVcbiAgICAgKiBjaGVja2JveCBzaG91bGQgbm90IHJlc3BvbmQgdG8gdGhlIGVudGVyIGtleWRvd24gZXZlbnQuXG4gICAgICovXG4gICAgaWYgKGlucHV0VHlwZXMuaGFzKCdjaGVja2JveCcpICYmIGV2LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHdoZW4gYWxlcnQgY29udGFpbmVyIGlzIGJlaW5nIGZvY3VzZWQsIGFuZCB0aGUgdXNlciBwcmVzc2VzIHRoZSB0YWIgKyBzaGlmdCBrZXlzLCB0aGUgZm9jdXMgd2lsbCBiZSBzZXQgdG8gdGhlIGxhc3QgYWxlcnQgYnV0dG9uLlxuICAgICAqL1xuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGVydC13cmFwcGVyJykpIHtcbiAgICAgIGlmIChldi5rZXkgPT09ICdUYWInICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZEJ0biA9IChfYSA9IHRoaXMud3JhcHBlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJ1dHRvbjpsYXN0LWNoaWxkJyk7XG4gICAgICAgIGxhc3RDaGlsZEJ0bi5mb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRoZSBvbmx5IGlucHV0cyB3ZSB3YW50IHRvIG5hdmlnYXRlIGJldHdlZW4gdXNpbmcgYXJyb3cga2V5cyBhcmUgdGhlIHJhZGlvc1xuICAgIC8vIGlnbm9yZSB0aGUga2V5ZG93biBldmVudCBpZiBpdCBpcyBub3Qgb24gYSByYWRpbyBidXR0b25cbiAgICBpZiAoIWlucHV0VHlwZXMuaGFzKCdyYWRpbycpIHx8IGV2LnRhcmdldCAmJiAhdGhpcy5lbC5jb250YWlucyhldi50YXJnZXQpIHx8IGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsZXJ0LWJ1dHRvbicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEdldCBhbGwgcmFkaW9zIGluc2lkZSBvZiB0aGUgcmFkaW8gZ3JvdXAgYW5kIHRoZW5cbiAgICAvLyBmaWx0ZXIgb3V0IGRpc2FibGVkIHJhZGlvcyBzaW5jZSB3ZSBuZWVkIHRvIHNraXAgdGhvc2VcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LXJhZGlvJyk7XG4gICAgY29uc3QgcmFkaW9zID0gQXJyYXkuZnJvbShxdWVyeSkuZmlsdGVyKHJhZGlvID0+ICFyYWRpby5kaXNhYmxlZCk7XG4gICAgLy8gVGhlIGZvY3VzZWQgcmFkaW8gaXMgdGhlIG9uZSB0aGF0IHNoYXJlcyB0aGUgc2FtZSBpZCBhc1xuICAgIC8vIHRoZSBldmVudCB0YXJnZXRcbiAgICBjb25zdCBpbmRleCA9IHJhZGlvcy5maW5kSW5kZXgocmFkaW8gPT4gcmFkaW8uaWQgPT09IGV2LnRhcmdldC5pZCk7XG4gICAgLy8gV2UgbmVlZCB0byBrbm93IHdoYXQgdGhlIG5leHQgcmFkaW8gZWxlbWVudCBzaG91bGRcbiAgICAvLyBiZSBpbiBvcmRlciB0byBjaGFuZ2UgdGhlIGZvY3VzXG4gICAgbGV0IG5leHRFbDtcbiAgICAvLyBJZiBoaXR0aW5nIGFycm93IGRvd24gb3IgYXJyb3cgcmlnaHQsIG1vdmUgdG8gdGhlIG5leHQgcmFkaW9cbiAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgbGFzdCByYWRpbywgbW92ZSB0byB0aGUgZmlyc3QgcmFkaW9cbiAgICBpZiAoWydBcnJvd0Rvd24nLCAnQXJyb3dSaWdodCddLmluY2x1ZGVzKGV2LmtleSkpIHtcbiAgICAgIG5leHRFbCA9IGluZGV4ID09PSByYWRpb3MubGVuZ3RoIC0gMSA/IHJhZGlvc1swXSA6IHJhZGlvc1tpbmRleCArIDFdO1xuICAgIH1cbiAgICAvLyBJZiBoaXR0aW5nIGFycm93IHVwIG9yIGFycm93IGxlZnQsIG1vdmUgdG8gdGhlIHByZXZpb3VzIHJhZGlvXG4gICAgLy8gSWYgd2UncmUgb24gdGhlIGZpcnN0IHJhZGlvLCBtb3ZlIHRvIHRoZSBsYXN0IHJhZGlvXG4gICAgaWYgKFsnQXJyb3dVcCcsICdBcnJvd0xlZnQnXS5pbmNsdWRlcyhldi5rZXkpKSB7XG4gICAgICBuZXh0RWwgPSBpbmRleCA9PT0gMCA/IHJhZGlvc1tyYWRpb3MubGVuZ3RoIC0gMV0gOiByYWRpb3NbaW5kZXggLSAxXTtcbiAgICB9XG4gICAgaWYgKG5leHRFbCAmJiByYWRpb3MuaW5jbHVkZXMobmV4dEVsKSkge1xuICAgICAgY29uc3QgbmV4dFByb2Nlc3NlZCA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZpbmQoaW5wdXQgPT4gaW5wdXQuaWQgPT09IChuZXh0RWwgPT09IG51bGwgfHwgbmV4dEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXh0RWwuaWQpKTtcbiAgICAgIGlmIChuZXh0UHJvY2Vzc2VkKSB7XG4gICAgICAgIHRoaXMucmJDbGljayhuZXh0UHJvY2Vzc2VkKTtcbiAgICAgICAgbmV4dEVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGJ1dHRvbnNDaGFuZ2VkKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XG4gICAgdGhpcy5wcm9jZXNzZWRCdXR0b25zID0gYnV0dG9ucy5tYXAoYnRuID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgYnRuID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgdGV4dDogYnRuLFxuICAgICAgICByb2xlOiBidG4udG9Mb3dlckNhc2UoKSA9PT0gJ2NhbmNlbCcgPyAnY2FuY2VsJyA6IHVuZGVmaW5lZFxuICAgICAgfSA6IGJ0bjtcbiAgICB9KTtcbiAgfVxuICBpbnB1dHNDaGFuZ2VkKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuaW5wdXRzO1xuICAgIC8vIEdldCB0aGUgZmlyc3QgaW5wdXQgdGhhdCBpcyBub3QgZGlzYWJsZWQgYW5kIHRoZSBjaGVja2VkIG9uZVxuICAgIC8vIElmIGFuIGVuYWJsZWQgY2hlY2tlZCBpbnB1dCBleGlzdHMsIHNldCBpdCB0byBiZSB0aGUgZm9jdXNhYmxlIGlucHV0XG4gICAgLy8gb3RoZXJ3aXNlIHdlIGRlZmF1bHQgdG8gZm9jdXMgdGhlIGZpcnN0IGlucHV0XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgdXNlZCB3aGVuIHRoZSBpbnB1dCBpcyB0eXBlIHJhZGlvXG4gICAgY29uc3QgZmlyc3QgPSBpbnB1dHMuZmluZChpbnB1dCA9PiAhaW5wdXQuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBpbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5jaGVja2VkICYmICFpbnB1dC5kaXNhYmxlZCk7XG4gICAgY29uc3QgZm9jdXNhYmxlID0gY2hlY2tlZCB8fCBmaXJzdDtcbiAgICAvLyBBbiBhbGVydCBjYW4gYmUgY3JlYXRlZCB3aXRoIHNldmVyYWwgZGlmZmVyZW50IGlucHV0cy4gUmFkaW9zLFxuICAgIC8vIGNoZWNrYm94ZXMgYW5kIGlucHV0cyBhcmUgYWxsIGFjY2VwdGVkLCBidXQgdGhleSBjYW5ub3QgYmUgbWl4ZWQuXG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IG5ldyBTZXQoaW5wdXRzLm1hcChpID0+IGkudHlwZSkpO1xuICAgIGlmIChpbnB1dFR5cGVzLmhhcygnY2hlY2tib3gnKSAmJiBpbnB1dFR5cGVzLmhhcygncmFkaW8nKSkge1xuICAgICAgY29uc29sZS53YXJuKGBBbGVydCBjYW5ub3QgbWl4IGlucHV0IHR5cGVzOiAke0FycmF5LmZyb20oaW5wdXRUeXBlcy52YWx1ZXMoKSkuam9pbignLycpfS4gUGxlYXNlIHNlZSBhbGVydCBkb2NzIGZvciBtb3JlIGluZm8uYCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRUeXBlID0gaW5wdXRUeXBlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBpbnB1dHMubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogaS50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgbmFtZTogaS5uYW1lIHx8IGAke2luZGV4fWAsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBpLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGkubGFiZWwsXG4gICAgICAgIGNoZWNrZWQ6ICEhaS5jaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogISFpLmRpc2FibGVkLFxuICAgICAgICBpZDogaS5pZCB8fCBgYWxlcnQtaW5wdXQtJHt0aGlzLm92ZXJsYXlJbmRleH0tJHtpbmRleH1gLFxuICAgICAgICBoYW5kbGVyOiBpLmhhbmRsZXIsXG4gICAgICAgIG1pbjogaS5taW4sXG4gICAgICAgIG1heDogaS5tYXgsXG4gICAgICAgIGNzc0NsYXNzOiAoX2EgPSBpLmNzc0NsYXNzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgYXR0cmlidXRlczogaS5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICB0YWJpbmRleDogaS50eXBlID09PSAncmFkaW8nICYmIGkgIT09IGZvY3VzYWJsZSA/IC0xIDogMFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dHNDaGFuZ2VkKCk7XG4gICAgdGhpcy5idXR0b25zQ2hhbmdlZCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMudHJpZ2dlckNvbnRyb2xsZXIucmVtb3ZlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogT25seSBjcmVhdGUgZ2VzdHVyZSBpZjpcbiAgICAgKiAxLiBBIGdlc3R1cmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdFxuICAgICAqIDIuIEFwcCBpcyBydW5uaW5nIGluIGlPUyBtb2RlXG4gICAgICogMy4gQSB3cmFwcGVyIHJlZiBleGlzdHNcbiAgICAgKi9cbiAgICBpZiAoIXRoaXMuZ2VzdHVyZSAmJiBnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJyAmJiB0aGlzLndyYXBwZXJFbCkge1xuICAgICAgdGhpcy5nZXN0dXJlID0gY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSh0aGlzLndyYXBwZXJFbCwgcmVmRWwgPT4gcmVmRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGVydC1idXR0b24nKSk7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBhbGVydCB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIGFsZXJ0IGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmFmKCgpID0+IHRoaXMucHJlc2VudCgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBiaW5kaW5nIHZhbHVlcyBpbiBmcmFtZXdvcmtzIHN1Y2ggYXMgQW5ndWxhclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdmFsdWUgdG8gYmUgc2V0IGFmdGVyIHRoZSBXZWIgQ29tcG9uZW50XG4gICAgICogaW5pdGlhbGl6ZXMgYnV0IGJlZm9yZSB0aGUgdmFsdWUgd2F0Y2hlciBpcyBzZXQgdXAgaW4gU3RlbmNpbC5cbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdhdGNoZXIgY2FsbGJhY2sgbWF5IG5vdCBiZSBmaXJlZC5cbiAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgdGhlIHdhdGNoZXJcbiAgICAgKiBjYWxsYmFjayB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCBhbmQgdGhlIHdhdGNoZXJcbiAgICAgKiBpcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICAvKipcbiAgICogUHJlc2VudCB0aGUgYWxlcnQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBhd2FpdCB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5hdHRhY2hWaWV3VG9Eb20oKTtcbiAgICBhd2FpdCBwcmVzZW50KHRoaXMsICdhbGVydEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgYWxlcnQgaGFzIG9ubHkgb25lIGJ1dHRvbiBhbmQgbm8gaW5wdXRzLlxuICAgICAgICogSWYgc28sIHRoZW4gZm9jdXMgb24gdGhlIGJ1dHRvbi4gT3RoZXJ3aXNlLCBmb2N1cyB0aGUgYWxlcnQgd3JhcHBlci5cbiAgICAgICAqIFRoaXMgd2lsbCBtYXAgdG8gdGhlIGRlZmF1bHQgbmF0aXZlIGFsZXJ0IGJlaGF2aW9yLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5idXR0b25zLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgcXVlcnlCdG4gPSAoX2EgPSB0aGlzLndyYXBwZXJFbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1idXR0b24nKTtcbiAgICAgICAgcXVlcnlCdG4uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChfYiA9IHRoaXMud3JhcHBlckVsKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1bmxvY2soKTtcbiAgfVxuICAvKipcbiAgICogRGlzbWlzcyB0aGUgYWxlcnQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFsZXJ0LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGFsZXJ0LlxuICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBuby1vcCBpZiB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW4gcHJlc2VudGVkIHlldC4gSWYgeW91IHdhbnRcbiAgICogdG8gcmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgRE9NIHRoYXQgd2FzIG5ldmVyIHByZXNlbnRlZCwgdXNlIHRoZVxuICAgKiBbcmVtb3ZlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZW1vdmUpIG1ldGhvZC5cbiAgICovXG4gIGFzeW5jIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGNvbnN0IGRpc21pc3NlZCA9IGF3YWl0IGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ2FsZXJ0TGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbik7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIucmVtb3ZlVmlld0Zyb21Eb20oKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkFsZXJ0RGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFsZXJ0IHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BbGVydFdpbGxEaXNtaXNzJyk7XG4gIH1cbiAgcmJDbGljayhzZWxlY3RlZElucHV0KSB7XG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLnByb2Nlc3NlZElucHV0cykge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0ID09PSBzZWxlY3RlZElucHV0O1xuICAgICAgaW5wdXQudGFiaW5kZXggPSBpbnB1dCA9PT0gc2VsZWN0ZWRJbnB1dCA/IDAgOiAtMTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkSW5wdXQuaWQ7XG4gICAgc2FmZUNhbGwoc2VsZWN0ZWRJbnB1dC5oYW5kbGVyLCBzZWxlY3RlZElucHV0KTtcbiAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgfVxuICBjYkNsaWNrKHNlbGVjdGVkSW5wdXQpIHtcbiAgICBzZWxlY3RlZElucHV0LmNoZWNrZWQgPSAhc2VsZWN0ZWRJbnB1dC5jaGVja2VkO1xuICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gIH1cbiAgYXN5bmMgYnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgY29uc3Qgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHtcbiAgICAgICAgdmFsdWVzXG4gICAgICB9LCByb2xlKTtcbiAgICB9XG4gICAgY29uc3QgcmV0dXJuRGF0YSA9IGF3YWl0IHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uLCB2YWx1ZXMpO1xuICAgIGlmIChyZXR1cm5EYXRhICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdmFsdWVzXG4gICAgICB9LCByZXR1cm5EYXRhKSwgYnV0dG9uLnJvbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgYXN5bmMgY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uLCBkYXRhKSB7XG4gICAgaWYgKGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5oYW5kbGVyKSB7XG4gICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgIGNvbnN0IHJldHVybkRhdGEgPSBhd2FpdCBzYWZlQ2FsbChidXR0b24uaGFuZGxlciwgZGF0YSk7XG4gICAgICBpZiAocmV0dXJuRGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmV0dXJuRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICBnZXRWYWx1ZXMoKSB7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2VkSW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRob3V0IGFueSBvcHRpb25zL2lucHV0cyBhdCBhbGxcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIHJhZGlvIGJ1dHRvbnMgKHNpbmdsZSB2YWx1ZSBzZWxlY3QpXG4gICAgICAvLyByZXR1cm4gdGhlIG9uZSB2YWx1ZSB3aGljaCBpcyBjaGVja2VkLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSB0aGlzLnByb2Nlc3NlZElucHV0cy5maW5kKGkgPT4gISFpLmNoZWNrZWQpO1xuICAgICAgcmV0dXJuIGNoZWNrZWRJbnB1dCA/IGNoZWNrZWRJbnB1dC52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggY2hlY2tib3hlcyAobXVsdGlwbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NlZElucHV0cy5maWx0ZXIoaSA9PiBpLmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggdGV4dCBpbnB1dHNcbiAgICAvLyByZXR1cm4gYW4gb2JqZWN0IG9mIGFsbCB0aGUgdmFsdWVzIHdpdGggdGhlIGlucHV0IG5hbWUgYXMgdGhlIGtleVxuICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xuICAgIHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICB2YWx1ZXNbaS5uYW1lXSA9IGkudmFsdWUgfHwgJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICByZW5kZXJBbGVydElucHV0cygpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNoZWNrYm94KCk7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJhZGlvKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuICByZW5kZXJDaGVja2JveCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWdyb3VwXCJcbiAgICB9LCBpbnB1dHMubWFwKGkgPT4gaChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jYkNsaWNrKGkpLFxuICAgICAgXCJhcmlhLWNoZWNrZWRcIjogYCR7aS5jaGVja2VkfWAsXG4gICAgICBpZDogaS5pZCxcbiAgICAgIGRpc2FibGVkOiBpLmRpc2FibGVkLFxuICAgICAgdGFiSW5kZXg6IGkudGFiaW5kZXgsXG4gICAgICByb2xlOiBcImNoZWNrYm94XCIsXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRDbGFzc01hcChpLmNzc0NsYXNzKSksIHtcbiAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LWNoZWNrYm94JzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LWNoZWNrYm94LWJ1dHRvbic6IHRydWUsXG4gICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LWNoZWNrYm94LWJ1dHRvbi1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfHwgZmFsc2VcbiAgICAgIH0pXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtaWNvblwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1jaGVja2JveC1pbm5lclwiXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWxhYmVsXCJcbiAgICB9LCBpLmxhYmVsKSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSkpO1xuICB9XG4gIHJlbmRlclJhZGlvKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzO1xuICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtcmFkaW8tZ3JvdXBcIixcbiAgICAgIHJvbGU6IFwicmFkaW9ncm91cFwiLFxuICAgICAgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogdGhpcy5hY3RpdmVJZFxuICAgIH0sIGlucHV0cy5tYXAoaSA9PiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnJiQ2xpY2soaSksXG4gICAgICBcImFyaWEtY2hlY2tlZFwiOiBgJHtpLmNoZWNrZWR9YCxcbiAgICAgIGRpc2FibGVkOiBpLmRpc2FibGVkLFxuICAgICAgaWQ6IGkuaWQsXG4gICAgICB0YWJJbmRleDogaS50YWJpbmRleCxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKGkuY3NzQ2xhc3MpKSwge1xuICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LXJhZGlvJzogdHJ1ZSxcbiAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgfSksXG4gICAgICByb2xlOiBcInJhZGlvXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1yYWRpby1pY29uXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LXJhZGlvLWlubmVyXCJcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtcmFkaW8tbGFiZWxcIlxuICAgIH0sIGkubGFiZWwpKSkpKTtcbiAgfVxuICByZW5kZXJJbnB1dCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWlucHV0LWdyb3VwXCJcbiAgICB9LCBpbnB1dHMubWFwKGkgPT4ge1xuICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgaWYgKGkudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3M6IFwiYWxlcnQtaW5wdXQtd3JhcHBlclwiXG4gICAgICAgIH0sIGgoXCJ0ZXh0YXJlYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogaS5wbGFjZWhvbGRlcixcbiAgICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgICB0YWJJbmRleDogaS50YWJpbmRleFxuICAgICAgICB9LCBpLmF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBkaXNhYmxlZDogKF9iID0gKF9hID0gaS5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGlzYWJsZWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGkuZGlzYWJsZWQsXG4gICAgICAgICAgY2xhc3M6IGlucHV0Q2xhc3MoaSksXG4gICAgICAgICAgb25JbnB1dDogZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoKF9hID0gaS5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25JbnB1dCkge1xuICAgICAgICAgICAgICBpLmF0dHJpYnV0ZXMub25JbnB1dChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3M6IFwiYWxlcnQtaW5wdXQtd3JhcHBlclwiXG4gICAgICAgIH0sIGgoXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogaS5wbGFjZWhvbGRlcixcbiAgICAgICAgICB0eXBlOiBpLnR5cGUsXG4gICAgICAgICAgbWluOiBpLm1pbixcbiAgICAgICAgICBtYXg6IGkubWF4LFxuICAgICAgICAgIHZhbHVlOiBpLnZhbHVlLFxuICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgIHRhYkluZGV4OiBpLnRhYmluZGV4XG4gICAgICAgIH0sIGkuYXR0cmlidXRlcywge1xuICAgICAgICAgIGRpc2FibGVkOiAoX2QgPSAoX2MgPSBpLmF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5kaXNhYmxlZCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogaS5kaXNhYmxlZCxcbiAgICAgICAgICBjbGFzczogaW5wdXRDbGFzcyhpKSxcbiAgICAgICAgICBvbklucHV0OiBlID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGkudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGlmICgoX2EgPSBpLmF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbklucHV0KSB7XG4gICAgICAgICAgICAgIGkuYXR0cmlidXRlcy5vbklucHV0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbiAgcmVuZGVyQWxlcnRCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb2Nlc3NlZEJ1dHRvbnM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgYWxlcnRCdXR0b25Hcm91cENsYXNzID0ge1xuICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cCc6IHRydWUsXG4gICAgICAnYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsJzogYnV0dG9ucy5sZW5ndGggPiAyXG4gICAgfTtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogYWxlcnRCdXR0b25Hcm91cENsYXNzXG4gICAgfSwgYnV0dG9ucy5tYXAoYnV0dG9uID0+IGgoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7fSwgYnV0dG9uLmh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgaWQ6IGJ1dHRvbi5pZCxcbiAgICAgIGNsYXNzOiBidXR0b25DbGFzcyhidXR0b24pLFxuICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGJ1dHRvbilcbiAgICB9KSwgaChcInNwYW5cIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtYnV0dG9uLWlubmVyXCJcbiAgICB9LCBidXR0b24udGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSkpO1xuICB9XG4gIHJlbmRlckFsZXJ0TWVzc2FnZShtc2dJZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1c3RvbUhUTUxFbmFibGVkLFxuICAgICAgbWVzc2FnZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXN0b21IVE1MRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBpZDogbXNnSWQsXG4gICAgICAgIGNsYXNzOiBcImFsZXJ0LW1lc3NhZ2VcIixcbiAgICAgICAgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyhtZXNzYWdlKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBtc2dJZCxcbiAgICAgIGNsYXNzOiBcImFsZXJ0LW1lc3NhZ2VcIlxuICAgIH0sIG1lc3NhZ2UpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvdmVybGF5SW5kZXgsXG4gICAgICBoZWFkZXIsXG4gICAgICBzdWJIZWFkZXIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgaHRtbEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoZHJJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0taGRyYDtcbiAgICBjb25zdCBtc2dJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0tbXNnYDtcbiAgICBjb25zdCBzdWJIZHJJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0tc3ViLWhkcmA7XG4gICAgY29uc3Qgcm9sZSA9IHRoaXMuaW5wdXRzLmxlbmd0aCA+IDAgfHwgdGhpcy5idXR0b25zLmxlbmd0aCA+IDAgPyAnYWxlcnRkaWFsb2cnIDogJ2FsZXJ0JztcbiAgICAvKipcbiAgICAgKiBVc2UgYm90aCB0aGUgaGVhZGVyIGFuZCBzdWJIZWFkZXIgaWRzIGlmIHRoZXkgYXJlIGRlZmluZWQuXG4gICAgICogSWYgb25seSB0aGUgaGVhZGVyIGlzIGRlZmluZWQsIHVzZSB0aGUgaGVhZGVyIGlkLlxuICAgICAqIElmIG9ubHkgdGhlIHN1YkhlYWRlciBpcyBkZWZpbmVkLCB1c2UgdGhlIHN1YkhlYWRlciBpZC5cbiAgICAgKiBJZiBuZWl0aGVyIGFyZSBkZWZpbmVkLCBkbyBub3Qgc2V0IGFyaWEtbGFiZWxsZWRieS5cbiAgICAgKi9cbiAgICBjb25zdCBhcmlhTGFiZWxsZWRCeSA9IGhlYWRlciAmJiBzdWJIZWFkZXIgPyBgJHtoZHJJZH0gJHtzdWJIZHJJZH1gIDogaGVhZGVyID8gaGRySWQgOiBzdWJIZWFkZXIgPyBzdWJIZHJJZCA6IG51bGw7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNzU1ZjIzOTg4MDYwODRmMTZlZTI0ZDlmZWZjZTllYmMwYjhmMzBmMicsXG4gICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgekluZGV4OiBgJHsyMDAwMCArIG92ZXJsYXlJbmRleH1gXG4gICAgICB9LFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ292ZXJsYXktaGlkZGVuJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudFxuICAgICAgfSksXG4gICAgICBvbklvbkFsZXJ0V2lsbERpc21pc3M6IHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyLFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwXG4gICAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7XG4gICAgICBrZXk6ICc1OTY1OTEzZmIwNzY0MzZlMzdmNGE1NWNkODc3OGNiYzU4NDQ5YmZkJyxcbiAgICAgIHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzc1xuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2NiMTdlMDc4OTZiNmFkOGM5YzYwNzI2MWZlMDg0MzdiMWEzYjI3MmYnLFxuICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pLCBoKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnZTFkNDMwNTNkY2VhYjcwYjkzOTI4MDI3NjdjYWE3MGZhN2VkMDUxOCcsXG4gICAgICBjbGFzczogXCJhbGVydC13cmFwcGVyIGlvbi1vdmVybGF5LXdyYXBwZXJcIixcbiAgICAgIHJvbGU6IHJvbGUsXG4gICAgICBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsXG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRCeSxcbiAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtc2dJZCA6IG51bGwsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMud3JhcHBlckVsID0gZWxcbiAgICB9LCBodG1sQXR0cmlidXRlcyksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnYTgyZTBiZjg2Mzk3MTA4NGYzYThhMzRkMjVkNmNmN2FhZTE2OTBhOCcsXG4gICAgICBjbGFzczogXCJhbGVydC1oZWFkXCJcbiAgICB9LCBoZWFkZXIgJiYgaChcImgyXCIsIHtcbiAgICAgIGtleTogJzM2YTliNDM5NGY0YjRjZGNkNjk3MmFlNjAyNjVhYzg4OWUyMTU3Y2YnLFxuICAgICAgaWQ6IGhkcklkLFxuICAgICAgY2xhc3M6IFwiYWxlcnQtdGl0bGVcIlxuICAgIH0sIGhlYWRlciksIHN1YkhlYWRlciAmJiAhaGVhZGVyICYmIGgoXCJoMlwiLCB7XG4gICAgICBrZXk6ICc4NjAwOGMxZWI0ODRjYzY5ZjY2ZTQyYzI1NDkzM2NlMjg5MTgwNzg1JyxcbiAgICAgIGlkOiBzdWJIZHJJZCxcbiAgICAgIGNsYXNzOiBcImFsZXJ0LXN1Yi10aXRsZVwiXG4gICAgfSwgc3ViSGVhZGVyKSwgc3ViSGVhZGVyICYmIGhlYWRlciAmJiBoKFwiaDNcIiwge1xuICAgICAga2V5OiAnYmZhYWNkM2IxMTlkMDYyNzM2ODMwMTljZGRlZjJjNDIyNDVjMzEwMScsXG4gICAgICBpZDogc3ViSGRySWQsXG4gICAgICBjbGFzczogXCJhbGVydC1zdWItdGl0bGVcIlxuICAgIH0sIHN1YkhlYWRlcikpLCB0aGlzLnJlbmRlckFsZXJ0TWVzc2FnZShtc2dJZCksIHRoaXMucmVuZGVyQWxlcnRJbnB1dHMoKSwgdGhpcy5yZW5kZXJBbGVydEJ1dHRvbnMoKSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMGU3ZGY0YWIzMWE3Mjk1M2RjZjE3MWViYzg3MDc0NjAzZjg0OGMwNicsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXSxcbiAgICAgIFwiYnV0dG9uc1wiOiBbXCJidXR0b25zQ2hhbmdlZFwiXSxcbiAgICAgIFwiaW5wdXRzXCI6IFtcImlucHV0c0NoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgaW5wdXRDbGFzcyA9IGlucHV0ID0+IHtcbiAgdmFyIF9hLCBfYiwgX2M7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICdhbGVydC1pbnB1dCc6IHRydWUsXG4gICAgJ2FsZXJ0LWlucHV0LWRpc2FibGVkJzogKChfYiA9IChfYSA9IGlucHV0LmF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kaXNhYmxlZCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5wdXQuZGlzYWJsZWQpIHx8IGZhbHNlXG4gIH0sIGdldENsYXNzTWFwKGlucHV0LmNzc0NsYXNzKSksIGdldENsYXNzTWFwKGlucHV0LmF0dHJpYnV0ZXMgPyAoX2MgPSBpbnB1dC5hdHRyaWJ1dGVzLmNsYXNzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSA6ICcnKSk7XG59O1xuY29uc3QgYnV0dG9uQ2xhc3MgPSBidXR0b24gPT4ge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgJ2FsZXJ0LWJ1dHRvbic6IHRydWUsXG4gICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgIFtgYWxlcnQtYnV0dG9uLXJvbGUtJHtidXR0b24ucm9sZX1gXTogYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZFxuICB9LCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5BbGVydC5zdHlsZSA9IHtcbiAgaW9zOiBJb25BbGVydElvc1N0eWxlMCxcbiAgbWQ6IElvbkFsZXJ0TWRTdHlsZTBcbn07XG5leHBvcnQgeyBBbGVydCBhcyBpb25fYWxlcnQgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQU0sb0JBQW9CLFlBQVU7QUFDbEMsUUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQ3RDLFFBQU0sb0JBQW9CLGdCQUFnQjtBQUMxQyxRQUFNLG1CQUFtQixnQkFBZ0I7QUFDekMsb0JBQWtCLFdBQVcsT0FBTyxjQUFjLGNBQWMsQ0FBQyxFQUFFLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixFQUFFLGFBQWE7QUFBQSxJQUNq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
