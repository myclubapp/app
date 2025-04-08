import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-HHPBBMWP.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import {
  BACKDROP,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  prepareOverlay,
  present,
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
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-loading.entry.js
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: 1,
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
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
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: 1,
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
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
var loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";
var IonLoadingIosStyle0 = loadingIosCss;
var loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";
var IonLoadingMdStyle0 = loadingMdCss;
var Loading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionLoadingDidPresent", 7);
    this.willPresent = createEvent(this, "ionLoadingWillPresent", 7);
    this.willDismiss = createEvent(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionLoadingDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.message = void 0;
    this.cssClass = void 0;
    this.duration = 0;
    this.backdropDismiss = false;
    this.showBackdrop = true;
    this.spinner = void 0;
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
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    var _a;
    if (this.spinner === void 0) {
      const mode = getIonMode(this);
      this.spinner = config.get("loadingSpinner", config.get("spinner", mode === "ios" ? "lines" : "crescent"));
    }
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
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  /**
   * Present the loading overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "loadingEnter", iosEnterAnimation, mdEnterAnimation);
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10);
      }
      unlock();
    });
  }
  /**
   * Dismiss the loading overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the loading.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the loading.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }
      const dismissed = yield dismiss(this, data, role, "loadingLeave", iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the loading did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionLoadingDidDismiss");
  }
  /**
   * Returns a promise that resolves when the loading will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionLoadingWillDismiss");
  }
  renderLoadingMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "loading-content",
        id: msgId,
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      class: "loading-content",
      id: msgId
    }, message);
  }
  render() {
    const {
      message,
      spinner,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = getIonMode(this);
    const msgId = `loading-${overlayIndex}-msg`;
    const ariaLabelledBy = message !== void 0 ? msgId : null;
    return h(Host, Object.assign({
      key: "d6066c8b56b1fe4b597a243a7dab191ef0d21286",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${4e4 + this.overlayIndex}`
      },
      onIonBackdropTap: this.onBackdropTap,
      class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), {
        [mode]: true,
        "overlay-hidden": true,
        "loading-translucent": this.translucent
      })
    }), h("ion-backdrop", {
      key: "2431eda00a2a3f510f5dfc39b7c7d47c056dfa3d",
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), h("div", {
      key: "cf210aaf5e754e4eccdb49cf7ead4647b3f9b2d1",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", {
      key: "fa9375143d391656d70e181d25b952c77c2fc6ec",
      class: "loading-wrapper ion-overlay-wrapper"
    }, spinner && h("div", {
      key: "8e4a4ed994f7f62df86b03696ac95162df41f52d",
      class: "loading-spinner"
    }, h("ion-spinner", {
      key: "e5b323c272d365853ba92bd211e390b4fd4751d2",
      name: spinner,
      "aria-hidden": "true"
    })), message !== void 0 && this.renderLoadingMessage(msgId)), h("div", {
      key: "cae35ec8c34800477bff3ebcec8010e632158233",
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
Loading.style = {
  ios: IonLoadingIosStyle0,
  md: IonLoadingMdStyle0
};
export {
  Loading as ion_loading
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-loading.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbG9hZGluZy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgRSBhcyBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQsIGEgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2NvbmZpZy00OWM4ODIxNS5qcyc7XG5pbXBvcnQgeyByIGFzIHJhZiB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxvY2tDb250cm9sbGVyIH0gZnJvbSAnLi9sb2NrLWNvbnRyb2xsZXItMzE2OTI4YmUuanMnO1xuaW1wb3J0IHsgZCBhcyBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIsIGUgYXMgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIsIEIgYXMgQkFDS0RST1AsIGogYXMgcHJlcGFyZU92ZXJsYXksIGsgYXMgc2V0T3ZlcmxheUlkLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCB9IGZyb20gJy4vb3ZlcmxheXMtNDFhNWQ1MWIuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMDFmM2YyOWMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25maWcsIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tZWFiNWE0Y2EuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMnO1xuaW1wb3J0ICcuL2luZGV4LTczOGQ3NTA0LmpzJztcblxuLyoqXG4gKiBpT1MgTG9hZGluZyBFbnRlciBBbmltYXRpb25cbiAqL1xuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSBiYXNlRWwgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScpLmJlZm9yZVN0eWxlcyh7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gIH0pLmFmdGVyQ2xlYXJTdHlsZXMoWydwb2ludGVyLWV2ZW50cyddKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy13cmFwcGVyJykpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfV0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdlYXNlLWluLW91dCcpLmR1cmF0aW9uKDIwMCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcblxuLyoqXG4gKiBpT1MgTG9hZGluZyBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSBiYXNlRWwgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScsIDApO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1kIExvYWRpbmcgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSBiYXNlRWwgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScpLmJlZm9yZVN0eWxlcyh7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gIH0pLmFmdGVyQ2xlYXJTdHlsZXMoWydwb2ludGVyLWV2ZW50cyddKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy13cmFwcGVyJykpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfV0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdlYXNlLWluLW91dCcpLmR1cmF0aW9uKDIwMCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcblxuLyoqXG4gKiBNZCBMb2FkaW5nIExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy13cmFwcGVyJykpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjk5LFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45KSdcbiAgfV0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdlYXNlLWluLW91dCcpLmR1cmF0aW9uKDIwMCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbmNvbnN0IGxvYWRpbmdJb3NDc3MgPSBcIi5zYy1pb24tbG9hZGluZy1pb3MtaHstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdXRsaW5lOm5vbmU7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjb250YWluOnN0cmljdDstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLWxvYWRpbmctaW9zLWh7ZGlzcGxheTpub25lfS5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmluaGVyaXQ7YWxpZ24taXRlbXM6aW5oZXJpdDstbXMtZmxleC1wYWNrOmluaGVyaXQ7anVzdGlmeS1jb250ZW50OmluaGVyaXQ7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO29wYWNpdHk6MDt6LWluZGV4OjEwfWlvbi1zcGlubmVyLnNjLWlvbi1sb2FkaW5nLWlvc3tjb2xvcjp2YXIoLS1zcGlubmVyLWNvbG9yKX0uc2MtaW9uLWxvYWRpbmctaW9zLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNmOWY5ZjkpKSk7LS1tYXgtd2lkdGg6MjcwcHg7LS1tYXgtaGVpZ2h0OjkwJTstLXNwaW5uZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zKTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1zaXplOjAuODc1cmVtfS5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctaW9ze2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDozNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjM0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDozNHB4O3BhZGRpbmctaW5saW5lLWVuZDozNHB4O3BhZGRpbmctdG9wOjI0cHg7cGFkZGluZy1ib3R0b206MjRweH1Ac3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkpey5sb2FkaW5nLXRyYW5zbHVjZW50LnNjLWlvbi1sb2FkaW5nLWlvcy1oIC5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctaW9ze2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCl9fS5sb2FkaW5nLWNvbnRlbnQuc2MtaW9uLWxvYWRpbmctaW9ze2ZvbnQtd2VpZ2h0OmJvbGR9LmxvYWRpbmctc3Bpbm5lci5zYy1pb24tbG9hZGluZy1pb3MrLmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1pb3N7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHh9XCI7XG5jb25zdCBJb25Mb2FkaW5nSW9zU3R5bGUwID0gbG9hZGluZ0lvc0NzcztcbmNvbnN0IGxvYWRpbmdNZENzcyA9IFwiLnNjLWlvbi1sb2FkaW5nLW1kLWh7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOmF1dG87LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1sb2FkaW5nLW1kLWh7ZGlzcGxheTpub25lfS5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0Oy1tcy1mbGV4LXBhY2s6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7b3BhY2l0eTowO3otaW5kZXg6MTB9aW9uLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctbWR7Y29sb3I6dmFyKC0tc3Bpbm5lci1jb2xvcil9LnNjLWlvbi1sb2FkaW5nLW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSk7LS1tYXgtd2lkdGg6MjgwcHg7LS1tYXgtaGVpZ2h0OjkwJTstLXNwaW5uZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zMik7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpO2ZvbnQtc2l6ZTowLjg3NXJlbX0ubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLW1ke2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNHB4O3BhZGRpbmctaW5saW5lLWVuZDoyNHB4O3BhZGRpbmctdG9wOjI0cHg7cGFkZGluZy1ib3R0b206MjRweDstd2Via2l0LWJveC1zaGFkb3c6MCAxNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO2JveC1zaGFkb3c6MCAxNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpfS5sb2FkaW5nLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctbWQrLmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1tZHstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH1cIjtcbmNvbnN0IElvbkxvYWRpbmdNZFN0eWxlMCA9IGxvYWRpbmdNZENzcztcbmNvbnN0IExvYWRpbmcgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTG9hZGluZ0RpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTG9hZGluZ1dpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdEaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIgPSBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5sb2NrQ29udHJvbGxlciA9IGNyZWF0ZUxvY2tDb250cm9sbGVyKCk7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlciA9IGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyKCk7XG4gICAgdGhpcy5jdXN0b21IVE1MRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2lubmVySFRNTFRlbXBsYXRlc0VuYWJsZWQnLCBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQpO1xuICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgIH07XG4gICAgdGhpcy5vdmVybGF5SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgIHRoaXMuZW50ZXJBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jc3NDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaHRtbEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnRyaWdnZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25Jc09wZW5DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0cnVlICYmIG9sZFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wcmVzZW50KCk7XG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VyQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZWwsXG4gICAgICB0cmlnZ2VyQ29udHJvbGxlclxuICAgIH0gPSB0aGlzO1xuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyQ29udHJvbGxlci5hZGRDbGlja0xpc3RlbmVyKGVsLCB0cmlnZ2VyKTtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAodGhpcy5zcGlubmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgdGhpcy5zcGlubmVyID0gY29uZmlnLmdldCgnbG9hZGluZ1NwaW5uZXInLCBjb25maWcuZ2V0KCdzcGlubmVyJywgbW9kZSA9PT0gJ2lvcycgPyAnbGluZXMnIDogJ2NyZXNjZW50JykpO1xuICAgIH1cbiAgICBpZiAoISgoX2EgPSB0aGlzLmh0bWxBdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICBzZXRPdmVybGF5SWQodGhpcy5lbCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgbG9hZGluZyBpbmRpY2F0b3Igd2FzIHJlbmRlcmVkIHdpdGggaXNPcGVuPVwidHJ1ZVwiXG4gICAgICogdGhlbiB3ZSBzaG91bGQgb3BlbiBsb2FkaW5nIGluZGljYXRvciBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlci5yZW1vdmVDbGlja0xpc3RlbmVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXNlbnQgdGhlIGxvYWRpbmcgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBhd2FpdCB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5hdHRhY2hWaWV3VG9Eb20oKTtcbiAgICBhd2FpdCBwcmVzZW50KHRoaXMsICdsb2FkaW5nRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbik7XG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKCksIHRoaXMuZHVyYXRpb24gKyAxMCk7XG4gICAgfVxuICAgIHVubG9jaygpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNtaXNzIHRoZSBsb2FkaW5nIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBsb2FkaW5nLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGxvYWRpbmcuXG4gICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICpcbiAgICogVGhpcyBpcyBhIG5vLW9wIGlmIHRoZSBvdmVybGF5IGhhcyBub3QgYmVlbiBwcmVzZW50ZWQgeWV0LiBJZiB5b3Ugd2FudFxuICAgKiB0byByZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBET00gdGhhdCB3YXMgbmV2ZXIgcHJlc2VudGVkLCB1c2UgdGhlXG4gICAqIFtyZW1vdmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3JlbW92ZSkgbWV0aG9kLlxuICAgKi9cbiAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kdXJhdGlvblRpbWVvdXQpO1xuICAgIH1cbiAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdsb2FkaW5nTGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbik7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIucmVtb3ZlVmlld0Zyb21Eb20oKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkaW5nIGRpZCBkaXNtaXNzLlxuICAgKi9cbiAgb25EaWREaXNtaXNzKCkge1xuICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uTG9hZGluZ0RpZERpc21pc3MnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkaW5nIHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Mb2FkaW5nV2lsbERpc21pc3MnKTtcbiAgfVxuICByZW5kZXJMb2FkaW5nTWVzc2FnZShtc2dJZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1c3RvbUhUTUxFbmFibGVkLFxuICAgICAgbWVzc2FnZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXN0b21IVE1MRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJsb2FkaW5nLWNvbnRlbnRcIixcbiAgICAgICAgaWQ6IG1zZ0lkLFxuICAgICAgICBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKG1lc3NhZ2UpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibG9hZGluZy1jb250ZW50XCIsXG4gICAgICBpZDogbXNnSWRcbiAgICB9LCBtZXNzYWdlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIHNwaW5uZXIsXG4gICAgICBodG1sQXR0cmlidXRlcyxcbiAgICAgIG92ZXJsYXlJbmRleFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IG1zZ0lkID0gYGxvYWRpbmctJHtvdmVybGF5SW5kZXh9LW1zZ2A7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXMgZGVmaW5lZCwgdXNlIHRoYXQgYXMgdGhlIGxhYmVsLlxuICAgICAqIE90aGVyd2lzZSwgZG9uJ3Qgc2V0IGFyaWEtbGFiZWxsZWRieS5cbiAgICAgKi9cbiAgICBjb25zdCBhcmlhTGFiZWxsZWRCeSA9IG1lc3NhZ2UgIT09IHVuZGVmaW5lZCA/IG1zZ0lkIDogbnVsbDtcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2Q2MDY2YzhiNTZiMWZlNGI1OTdhMjQzYTdkYWIxOTFlZjBkMjEyODYnLFxuICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZEJ5LFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgIH0sIGh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IGAkezQwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcCxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdvdmVybGF5LWhpZGRlbic6IHRydWUsXG4gICAgICAgICdsb2FkaW5nLXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudFxuICAgICAgfSlcbiAgICB9KSwgaChcImlvbi1iYWNrZHJvcFwiLCB7XG4gICAgICBrZXk6ICcyNDMxZWRhMDBhMmEzZjUxMGY1ZGZjMzliN2M3ZDQ3YzA1NmRmYTNkJyxcbiAgICAgIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLFxuICAgICAgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnY2YyMTBhYWY1ZTc1NGU0ZWNjZGI0OWNmN2VhZDQ2NDdiM2Y5YjJkMScsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZmE5Mzc1MTQzZDM5MTY1NmQ3MGUxODFkMjViOTUyYzc3YzJmYzZlYycsXG4gICAgICBjbGFzczogXCJsb2FkaW5nLXdyYXBwZXIgaW9uLW92ZXJsYXktd3JhcHBlclwiXG4gICAgfSwgc3Bpbm5lciAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzhlNGE0ZWQ5OTRmN2Y2MmRmODZiMDM2OTZhYzk1MTYyZGY0MWY1MmQnLFxuICAgICAgY2xhc3M6IFwibG9hZGluZy1zcGlubmVyXCJcbiAgICB9LCBoKFwiaW9uLXNwaW5uZXJcIiwge1xuICAgICAga2V5OiAnZTViMzIzYzI3MmQzNjU4NTNiYTkyYmQyMTFlMzkwYjRmZDQ3NTFkMicsXG4gICAgICBuYW1lOiBzcGlubmVyLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKSwgbWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmVuZGVyTG9hZGluZ01lc3NhZ2UobXNnSWQpKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdjYWUzNWVjOGMzNDgwMDQ3N2JmZjNlYmNlYzgwMTBlNjMyMTU4MjMzJyxcbiAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiaXNPcGVuXCI6IFtcIm9uSXNPcGVuQ2hhbmdlXCJdLFxuICAgICAgXCJ0cmlnZ2VyXCI6IFtcInRyaWdnZXJDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbkxvYWRpbmcuc3R5bGUgPSB7XG4gIGlvczogSW9uTG9hZGluZ0lvc1N0eWxlMCxcbiAgbWQ6IElvbkxvYWRpbmdNZFN0eWxlMFxufTtcbmV4cG9ydCB7IExvYWRpbmcgYXMgaW9uX2xvYWRpbmcgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU0sb0JBQW9CLFlBQVU7QUFDbEMsUUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQ3RDLFFBQU0sb0JBQW9CLGdCQUFnQjtBQUMxQyxRQUFNLG1CQUFtQixnQkFBZ0I7QUFDekMsb0JBQWtCLFdBQVcsT0FBTyxjQUFjLGNBQWMsQ0FBQyxFQUFFLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixFQUFFLGFBQWE7QUFBQSxJQUNqSSxrQkFBa0I7QUFBQSxFQUNwQixDQUFDLEVBQUUsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7QUFDdEMsbUJBQWlCLFdBQVcsT0FBTyxjQUFjLGtCQUFrQixDQUFDLEVBQUUsVUFBVSxDQUFDO0FBQUEsSUFDL0UsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsQ0FBQyxDQUFDO0FBQ0YsU0FBTyxjQUFjLFdBQVcsTUFBTSxFQUFFLE9BQU8sYUFBYSxFQUFFLFNBQVMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsZ0JBQWdCLENBQUM7QUFDaEk7QUFLQSxJQUFNLG9CQUFvQixZQUFV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
