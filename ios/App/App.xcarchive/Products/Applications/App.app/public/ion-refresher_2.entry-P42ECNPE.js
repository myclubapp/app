import {
  SPINNERS
} from "./chunk-OFQNJW2D.js";
import {
  ION_CONTENT_CLASS_SELECTOR,
  ION_CONTENT_ELEMENT_SELECTOR,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-7QVPRCLC.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-HHPBBMWP.js";
import {
  getTimeGivenProgression
} from "./chunk-6NM256MY.js";
import {
  arrowDown,
  caretBackSharp
} from "./chunk-Y2OY2WAF.js";
import {
  ImpactStyle,
  hapticImpact
} from "./chunk-3XAIP4YB.js";
import "./chunk-UPH3BB7G.js";
import {
  createAnimation
} from "./chunk-BKPN4S4N.js";
import "./chunk-5HIO5JVM.js";
import {
  clamp,
  componentOnReady,
  getElementRoot,
  raf,
  transitionEndAsync
} from "./chunk-RRWPYKYY.js";
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
  readTask,
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js
var getRefresherAnimationType = (contentEl) => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === "ION-HEADER";
  return hasHeader ? "translate" : "scale";
};
var createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === "scale" ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
var createBaseAnimation = (pullingRefresherIcon) => {
  const spinner = pullingRefresherIcon.querySelector("ion-spinner");
  const circle = spinner.shadowRoot.querySelector("circle");
  const spinnerArrowContainer = pullingRefresherIcon.querySelector(".spinner-arrow-container");
  const arrowContainer = pullingRefresherIcon.querySelector(".arrow-container");
  const arrow = arrowContainer ? arrowContainer.querySelector("ion-icon") : null;
  const baseAnimation = createAnimation().duration(1e3).easing("ease-out");
  const spinnerArrowContainerAnimation = createAnimation().addElement(spinnerArrowContainer).keyframes([{
    offset: 0,
    opacity: "0.3"
  }, {
    offset: 0.45,
    opacity: "0.3"
  }, {
    offset: 0.55,
    opacity: "1"
  }, {
    offset: 1,
    opacity: "1"
  }]);
  const circleInnerAnimation = createAnimation().addElement(circle).keyframes([{
    offset: 0,
    strokeDasharray: "1px, 200px"
  }, {
    offset: 0.2,
    strokeDasharray: "1px, 200px"
  }, {
    offset: 0.55,
    strokeDasharray: "100px, 200px"
  }, {
    offset: 1,
    strokeDasharray: "100px, 200px"
  }]);
  const circleOuterAnimation = createAnimation().addElement(spinner).keyframes([{
    offset: 0,
    transform: "rotate(-90deg)"
  }, {
    offset: 1,
    transform: "rotate(210deg)"
  }]);
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = createAnimation().addElement(arrowContainer).keyframes([{
      offset: 0,
      transform: "rotate(0deg)"
    }, {
      offset: 0.3,
      transform: "rotate(0deg)"
    }, {
      offset: 0.55,
      transform: "rotate(280deg)"
    }, {
      offset: 1,
      transform: "rotate(400deg)"
    }]);
    const arrowAnimation = createAnimation().addElement(arrow).keyframes([{
      offset: 0,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: 0.3,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: 0.55,
      transform: "translateX(-1.5px) scale(1)"
    }, {
      offset: 1,
      transform: "translateX(-1.5px) scale(1)"
    }]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
var createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `scale(0) translateY(-${height}px)`
  }, {
    offset: 1,
    transform: "scale(1) translateY(100px)"
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `translateY(-${height}px)`
  }, {
    offset: 1,
    transform: "translateY(100px)"
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createSnapBackAnimation = (pullingRefresherIcon) => {
  return createAnimation().duration(125).addElement(pullingRefresherIcon).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)");
};
var setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty("opacity", opacity.toString());
};
var handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  writeTask(() => {
    ticks.forEach((el, i) => {
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = clamp(0, start / range, 1);
      el.style.setProperty("opacity", progression.toString());
    });
  });
};
var handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  writeTask(() => {
    spinner.style.setProperty("--refreshing-rotation-duration", lastVelocityY >= 1 ? "0.5s" : "2s");
    spinner.style.setProperty("opacity", "1");
  });
};
var translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = transitionEndAsync(el, duration);
  writeTask(() => {
    el.style.setProperty("transition", `${duration}ms all ease-out`);
    if (value === void 0) {
      el.style.removeProperty("transform");
    } else {
      el.style.setProperty("transform", `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
var supportsRubberBandScrolling = () => {
  return navigator.maxTouchPoints > 0 && CSS.supports("background: -webkit-named-image(apple-pay-logo-black)");
};
var shouldUseNativeRefresher = (referenceEl, mode) => __async(void 0, null, function* () {
  const refresherContent = referenceEl.querySelector("ion-refresher-content");
  if (!refresherContent) {
    return Promise.resolve(false);
  }
  yield new Promise((resolve) => componentOnReady(refresherContent, resolve));
  const pullingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
  const refreshingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
  return pullingSpinner !== null && refreshingSpinner !== null && (mode === "ios" && supportsRubberBandScrolling() || mode === "md");
});
var refresherIosCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
var IonRefresherIosStyle0 = refresherIosCss;
var refresherMdCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";
var IonRefresherMdStyle0 = refresherMdCss;
var Refresher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRefresh = createEvent(this, "ionRefresh", 7);
    this.ionPull = createEvent(this, "ionPull", 7);
    this.ionStart = createEvent(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.contentFullscreen = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = "280ms";
    this.snapbackDuration = "280ms";
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  checkNativeRefresher() {
    return __async(this, null, function* () {
      const useNativeRefresher = yield shouldUseNativeRefresher(this.el, getIonMode(this));
      if (useNativeRefresher && !this.nativeRefresher) {
        const contentEl = this.el.closest("ion-content");
        this.setupNativeRefresher(contentEl);
      } else if (!useNativeRefresher) {
        this.destroyNativeRefresher();
      }
    });
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback);
      this.scrollListenerCallback = void 0;
    }
    this.nativeRefresher = false;
  }
  resetNativeRefresher(el, state) {
    return __async(this, null, function* () {
      this.state = state;
      if (getIonMode(this) === "ios") {
        yield translateElement(el, void 0, 300);
      } else {
        yield transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"), 200);
      }
      this.didRefresh = false;
      this.needsCompletion = false;
      this.pointerDown = false;
      this.animations.forEach((ani) => ani.destroy());
      this.animations = [];
      this.progress = 0;
      this.state = 1;
    });
  }
  setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      this.elementToTransform = this.scrollEl;
      const ticks = pullingSpinner.shadowRoot.querySelectorAll("svg");
      let MAX_PULL = this.scrollEl.clientHeight * 0.16;
      const NUM_TICKS = ticks.length;
      writeTask(() => ticks.forEach((el) => el.style.setProperty("animation", "none")));
      this.scrollListenerCallback = () => {
        if (!this.pointerDown && this.state === 1) {
          return;
        }
        readTask(() => {
          const scrollTop = this.scrollEl.scrollTop;
          const refresherHeight = this.el.clientHeight;
          if (scrollTop > 0) {
            if (this.state === 8) {
              const ratio = clamp(0, scrollTop / (refresherHeight * 0.5), 1);
              writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
              return;
            }
            return;
          }
          if (this.pointerDown) {
            if (!this.didStart) {
              this.didStart = true;
              this.ionStart.emit();
            }
            if (this.pointerDown) {
              this.ionPull.emit();
            }
          }
          const offset = this.didStart ? 30 : 0;
          const pullAmount = this.progress = clamp(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
          const shouldShowRefreshingSpinner = this.state === 8 || pullAmount === 1;
          if (shouldShowRefreshingSpinner) {
            if (this.pointerDown) {
              handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
            }
            if (!this.didRefresh) {
              this.beginRefresh();
              this.didRefresh = true;
              hapticImpact({
                style: ImpactStyle.Light
              });
              if (!this.pointerDown) {
                translateElement(this.elementToTransform, `${refresherHeight}px`);
              }
            }
          } else {
            this.state = 2;
            handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
          }
        });
      };
      this.scrollEl.addEventListener("scroll", this.scrollListenerCallback);
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        onStart: () => {
          this.pointerDown = true;
          if (!this.didRefresh) {
            translateElement(this.elementToTransform, "0px");
          }
          if (MAX_PULL === 0) {
            MAX_PULL = this.scrollEl.clientHeight * 0.16;
          }
        },
        onMove: (ev) => {
          this.lastVelocityY = ev.velocityY;
        },
        onEnd: () => {
          this.pointerDown = false;
          this.didStart = false;
          if (this.needsCompletion) {
            this.resetNativeRefresher(
              this.elementToTransform,
              32
              /* RefresherState.Completing */
            );
            this.needsCompletion = false;
          } else if (this.didRefresh) {
            readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
          }
        }
      });
      this.disabledChanged();
    });
  }
  setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      const circle = getElementRoot(pullingSpinner).querySelector("circle");
      const pullingRefresherIcon = this.el.querySelector("ion-refresher-content .refresher-pulling-icon");
      const refreshingCircle = getElementRoot(refreshingSpinner).querySelector("circle");
      if (circle !== null && refreshingCircle !== null) {
        writeTask(() => {
          circle.style.setProperty("animation", "none");
          refreshingSpinner.style.setProperty("animation-delay", "-655ms");
          refreshingCircle.style.setProperty("animation-delay", "-655ms");
        });
      }
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        canStart: () => this.state !== 8 && this.state !== 32 && this.scrollEl.scrollTop === 0,
        onStart: (ev) => {
          this.progress = 0;
          ev.data = {
            animation: void 0,
            didStart: false,
            cancelled: false
          };
        },
        onMove: (ev) => {
          if (ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
            ev.data.cancelled = true;
            return;
          }
          if (!ev.data.didStart) {
            ev.data.didStart = true;
            this.state = 2;
            const {
              scrollEl
            } = this;
            const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
            writeTask(() => scrollEl.style.setProperty(overflowProperty, "hidden"));
            const animationType = getRefresherAnimationType(contentEl);
            const animation = createPullingAnimation(animationType, pullingRefresherIcon, this.el);
            ev.data.animation = animation;
            animation.progressStart(false, 0);
            this.ionStart.emit();
            this.animations.push(animation);
            return;
          }
          this.progress = clamp(0, ev.deltaY / 180 * 0.5, 1);
          ev.data.animation.progressStep(this.progress);
          this.ionPull.emit();
        },
        onEnd: (ev) => {
          if (!ev.data.didStart) {
            return;
          }
          this.gesture.enable(false);
          const {
            scrollEl
          } = this;
          const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
          writeTask(() => scrollEl.style.removeProperty(overflowProperty));
          if (this.progress <= 0.4) {
            ev.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
              this.animations.forEach((ani) => ani.destroy());
              this.animations = [];
              this.gesture.enable(true);
              this.state = 1;
            });
            return;
          }
          const progress = getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
          const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
          this.animations.push(snapBackAnimation);
          writeTask(() => __async(this, null, function* () {
            pullingRefresherIcon.style.setProperty("--ion-pulling-refresher-translate", `${progress * 100}px`);
            ev.data.animation.progressEnd();
            yield snapBackAnimation.play();
            this.beginRefresh();
            ev.data.animation.destroy();
            this.gesture.enable(true);
          }));
        }
      });
      this.disabledChanged();
    });
  }
  setupNativeRefresher(contentEl) {
    return __async(this, null, function* () {
      if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
        return;
      }
      this.setCss(0, "", false, "");
      this.nativeRefresher = true;
      const pullingSpinner = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
      const refreshingSpinner = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
      if (getIonMode(this) === "ios") {
        this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
      } else {
        this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
      }
    });
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (this.el.getAttribute("slot") !== "fixed") {
        console.error('Make sure you use: <ion-refresher slot="fixed">');
        return;
      }
      const contentEl = this.el.closest(ION_CONTENT_ELEMENT_SELECTOR);
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      componentOnReady(contentEl, () => __async(this, null, function* () {
        const customScrollTarget = contentEl.querySelector(ION_CONTENT_CLASS_SELECTOR);
        this.scrollEl = yield getScrollElement(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
        this.backgroundContentEl = yield contentEl.getBackgroundElement();
        this.contentFullscreen = contentEl.fullscreen;
        if (yield shouldUseNativeRefresher(this.el, getIonMode(this))) {
          this.setupNativeRefresher(contentEl);
        } else {
          this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
            el: contentEl,
            gestureName: "refresher",
            gesturePriority: 31,
            direction: "y",
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: (ev) => this.onMove(ev),
            onEnd: () => this.onEnd()
          });
          this.disabledChanged();
        }
      }));
    });
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = void 0;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  complete() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        this.needsCompletion = true;
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            32
            /* RefresherState.Completing */
          )));
        }
      } else {
        this.close(32, "120ms");
      }
    });
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  cancel() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            16
            /* RefresherState.Cancelling */
          )));
        }
      } else {
        this.close(16, "");
      }
    });
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1) {
      return false;
    }
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1;
    this.memoizeOverflowStyle();
    if (this.contentFullscreen && this.backgroundContentEl) {
      this.backgroundContentEl.style.setProperty("--offset-top", "0px");
    }
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    const ev = detail.event;
    if (ev.touches !== void 0 && ev.touches.length > 1) {
      return;
    }
    if ((this.state & 56) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    if (deltaY <= 0) {
      this.progress = 0;
      this.state = 1;
      if (this.appliedStyles) {
        this.setCss(0, "", false, "");
        return;
      }
      return;
    }
    if (this.state === 1) {
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      this.state = 2;
    }
    if (ev.cancelable) {
      ev.preventDefault();
    }
    this.setCss(deltaY, "0ms", true, "");
    if (deltaY === 0) {
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    this.progress = deltaY / pullMin;
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    this.ionPull.emit();
    if (deltaY < pullMin) {
      this.state = 2;
      return;
    }
    if (deltaY > this.pullMax) {
      this.beginRefresh();
      return;
    }
    this.state = 4;
    return;
  }
  onEnd() {
    if (this.state === 4) {
      this.beginRefresh();
    } else if (this.state === 2) {
      this.cancel();
    } else if (this.state === 1) {
      this.restoreOverflowStyle();
    }
  }
  beginRefresh() {
    this.state = 8;
    this.setCss(this.pullMin, this.snapbackDuration, true, "");
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    setTimeout(() => {
      var _a;
      this.state = 1;
      this.progress = 0;
      this.didStart = false;
      this.setCss(0, "0ms", false, "", true);
      if (this.contentFullscreen && this.backgroundContentEl) {
        (_a = this.backgroundContentEl) === null || _a === void 0 ? void 0 : _a.style.removeProperty("--offset-top");
      }
    }, 600);
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    writeTask(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : "";
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = overflowVisible ? "hidden" : "";
      }
      if (shouldRestoreOverflowStyle) {
        this.restoreOverflowStyle();
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : "",
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : "",
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : ""
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== void 0 && this.scrollEl !== void 0) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = void 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "4c36bffbfa32ef1bd28a60f4455c125842880659",
      slot: "fixed",
      class: {
        [mode]: true,
        // Used internally for styling
        [`refresher-${mode}`]: true,
        "refresher-native": this.nativeRefresher,
        "refresher-active": this.state !== 1,
        "refresher-pulling": this.state === 2,
        "refresher-ready": this.state === 4,
        "refresher-refreshing": this.state === 8,
        "refresher-cancelling": this.state === 16,
        "refresher-completing": this.state === 32
        /* RefresherState.Completing */
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Refresher.style = {
  ios: IonRefresherIosStyle0,
  md: IonRefresherMdStyle0
};
var RefresherContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.pullingIcon = void 0;
    this.pullingText = void 0;
    this.refreshingSpinner = void 0;
    this.refreshingText = void 0;
  }
  componentWillLoad() {
    if (this.pullingIcon === void 0) {
      const hasRubberBandScrolling = supportsRubberBandScrolling();
      const mode = getIonMode(this);
      const overflowRefresher = hasRubberBandScrolling ? "lines" : arrowDown;
      this.pullingIcon = config.get("refreshingIcon", mode === "ios" && hasRubberBandScrolling ? config.get("spinner", overflowRefresher) : "circular");
    }
    if (this.refreshingSpinner === void 0) {
      const mode = getIonMode(this);
      this.refreshingSpinner = config.get("refreshingSpinner", config.get("spinner", mode === "ios" ? "lines" : "circular"));
    }
  }
  renderPullingText() {
    const {
      customHTMLEnabled,
      pullingText
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "refresher-pulling-text",
        innerHTML: sanitizeDOMString(pullingText)
      });
    }
    return h("div", {
      class: "refresher-pulling-text"
    }, pullingText);
  }
  renderRefreshingText() {
    const {
      customHTMLEnabled,
      refreshingText
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "refresher-refreshing-text",
        innerHTML: sanitizeDOMString(refreshingText)
      });
    }
    return h("div", {
      class: "refresher-refreshing-text"
    }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] !== void 0;
    const mode = getIonMode(this);
    return h(Host, {
      key: "fb78d7e31f8feb31025e58903eb9de85cb928dbd",
      class: mode
    }, h("div", {
      key: "23f67800f09765ef8fde8cf85a843e19e667f337",
      class: "refresher-pulling"
    }, this.pullingIcon && hasSpinner && h("div", {
      key: "5a08d3b69762f8b51dcd3dcfbaf3fddb707257fa",
      class: "refresher-pulling-icon"
    }, h("div", {
      key: "42a613b029e092acdff7fe613a429375d89f157e",
      class: "spinner-arrow-container"
    }, h("ion-spinner", {
      key: "2f9cdc75938c4d306de7a717ed67901daef71c2c",
      name: this.pullingIcon,
      paused: true
    }), mode === "md" && this.pullingIcon === "circular" && h("div", {
      key: "1f8a6347b4a46417ba55286a79f1a41f04bf9c91",
      class: "arrow-container"
    }, h("ion-icon", {
      key: "326713d11d482d420ba5a739ff4528400a37e9ca",
      icon: caretBackSharp,
      "aria-hidden": "true"
    })))), this.pullingIcon && !hasSpinner && h("div", {
      key: "ab18c7cbea7bcbfa034f90f317652af4d93660ed",
      class: "refresher-pulling-icon"
    }, h("ion-icon", {
      key: "f488acd54acc8a61b6c5a279f0d7f9a437c370c0",
      icon: this.pullingIcon,
      lazy: false,
      "aria-hidden": "true"
    })), this.pullingText !== void 0 && this.renderPullingText()), h("div", {
      key: "914ad6139442dac53af47120ea821fa11c309a38",
      class: "refresher-refreshing"
    }, this.refreshingSpinner && h("div", {
      key: "7eba732f5e2d72b90399d68a3e89617d8979b3d1",
      class: "refresher-refreshing-icon"
    }, h("ion-spinner", {
      key: "838d66d8bef6f56622c62b1068e7fed29e094302",
      name: this.refreshingSpinner
    })), this.refreshingText !== void 0 && this.renderRefreshingText()));
  }
  get el() {
    return getElement(this);
  }
};
export {
  Refresher as ion_refresher,
  RefresherContent as ion_refresher_content
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-refresher_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmVmcmVzaGVyXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd3JpdGVUYXNrLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgcmVhZFRhc2ssIGgsIGYgYXMgZ2V0RWxlbWVudCwgZSBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIH0gZnJvbSAnLi9jdWJpYy1iZXppZXItZmUyMDgzZGMuanMnO1xuaW1wb3J0IHsgSSBhcyBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiwgYiBhcyBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SLCBwIGFzIHByaW50SW9uQ29udGVudEVycm9yTXNnLCBnIGFzIGdldFNjcm9sbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWU5MTllMzUzLmpzJztcbmltcG9ydCB7IHQgYXMgdHJhbnNpdGlvbkVuZEFzeW5jLCBjIGFzIGNvbXBvbmVudE9uUmVhZHksIGogYXMgY2xhbXAsIGcgYXMgZ2V0RWxlbWVudFJvb3QsIHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGQgYXMgaGFwdGljSW1wYWN0LCBJIGFzIEltcGFjdFN0eWxlIH0gZnJvbSAnLi9oYXB0aWMtYWMxNjRlNGMuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlLCBjIGFzIGNvbmZpZyB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tZWFiNWE0Y2EuanMnO1xuaW1wb3J0IHsgRSBhcyBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQsIGEgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2NvbmZpZy00OWM4ODIxNS5qcyc7XG5pbXBvcnQgeyBoIGFzIGNhcmV0QmFja1NoYXJwLCBpIGFzIGFycm93RG93biB9IGZyb20gJy4vaW5kZXgtZTJjZjJjZWIuanMnO1xuaW1wb3J0IHsgUyBhcyBTUElOTkVSUyB9IGZyb20gJy4vc3Bpbm5lci1jb25maWdzLTk2NGY3Y2YzLmpzJztcbmltcG9ydCAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcbmltcG9ydCAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5jb25zdCBnZXRSZWZyZXNoZXJBbmltYXRpb25UeXBlID0gY29udGVudEVsID0+IHtcbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gY29udGVudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGhhc0hlYWRlciA9IHByZXZpb3VzU2libGluZyAhPT0gbnVsbCAmJiBwcmV2aW91c1NpYmxpbmcudGFnTmFtZSA9PT0gJ0lPTi1IRUFERVInO1xuICByZXR1cm4gaGFzSGVhZGVyID8gJ3RyYW5zbGF0ZScgOiAnc2NhbGUnO1xufTtcbmNvbnN0IGNyZWF0ZVB1bGxpbmdBbmltYXRpb24gPSAodHlwZSwgcHVsbGluZ1NwaW5uZXIsIHJlZnJlc2hlckVsKSA9PiB7XG4gIHJldHVybiB0eXBlID09PSAnc2NhbGUnID8gY3JlYXRlU2NhbGVBbmltYXRpb24ocHVsbGluZ1NwaW5uZXIsIHJlZnJlc2hlckVsKSA6IGNyZWF0ZVRyYW5zbGF0ZUFuaW1hdGlvbihwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGVyRWwpO1xufTtcbmNvbnN0IGNyZWF0ZUJhc2VBbmltYXRpb24gPSBwdWxsaW5nUmVmcmVzaGVySWNvbiA9PiB7XG4gIGNvbnN0IHNwaW5uZXIgPSBwdWxsaW5nUmVmcmVzaGVySWNvbi5xdWVyeVNlbGVjdG9yKCdpb24tc3Bpbm5lcicpO1xuICBjb25zdCBjaXJjbGUgPSBzcGlubmVyLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignY2lyY2xlJyk7XG4gIGNvbnN0IHNwaW5uZXJBcnJvd0NvbnRhaW5lciA9IHB1bGxpbmdSZWZyZXNoZXJJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyLWFycm93LWNvbnRhaW5lcicpO1xuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IHB1bGxpbmdSZWZyZXNoZXJJY29uLnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1jb250YWluZXInKTtcbiAgY29uc3QgYXJyb3cgPSBhcnJvd0NvbnRhaW5lciA/IGFycm93Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJykgOiBudWxsO1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZHVyYXRpb24oMTAwMCkuZWFzaW5nKCdlYXNlLW91dCcpO1xuICBjb25zdCBzcGlubmVyQXJyb3dDb250YWluZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHNwaW5uZXJBcnJvd0NvbnRhaW5lcikua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6ICcwLjMnXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuNDUsXG4gICAgb3BhY2l0eTogJzAuMydcbiAgfSwge1xuICAgIG9mZnNldDogMC41NSxcbiAgICBvcGFjaXR5OiAnMSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAnMSdcbiAgfV0pO1xuICBjb25zdCBjaXJjbGVJbm5lckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQoY2lyY2xlKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAnMXB4LCAyMDBweCdcbiAgfSwge1xuICAgIG9mZnNldDogMC4yLFxuICAgIHN0cm9rZURhc2hhcnJheTogJzFweCwgMjAwcHgnXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuNTUsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAnMTAwcHgsIDIwMHB4J1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCdcbiAgfV0pO1xuICBjb25zdCBjaXJjbGVPdXRlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQoc3Bpbm5lcikua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyMTBkZWcpJ1xuICB9XSk7XG4gIC8qKlxuICAgKiBPbmx5IGFkZCBhcnJvdyBhbmltYXRpb24gaWYgcHJlc2VudFxuICAgKiB0aGlzIGFsbG93cyB1c2VycyB0byBjdXN0b21pemUgdGhlIHNwaW5uZXJzXG4gICAqIHdpdGhvdXQgZXJyb3JzIGJlaW5nIHRocm93blxuICAgKi9cbiAgaWYgKGFycm93Q29udGFpbmVyICYmIGFycm93KSB7XG4gICAgY29uc3QgYXJyb3dDb250YWluZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KGFycm93Q29udGFpbmVyKS5rZXlmcmFtZXMoW3tcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDAuMyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDAuNTUsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjgwZGVnKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDAwZGVnKSdcbiAgICB9XSk7XG4gICAgY29uc3QgYXJyb3dBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KGFycm93KS5rZXlmcmFtZXMoW3tcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSBzY2FsZSgwKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDAuMyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSBzY2FsZSgwKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDAuNTUsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xLjVweCkgc2NhbGUoMSknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAxLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMS41cHgpIHNjYWxlKDEpJ1xuICAgIH1dKTtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbYXJyb3dDb250YWluZXJBbmltYXRpb24sIGFycm93QW5pbWF0aW9uXSk7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKFtzcGlubmVyQXJyb3dDb250YWluZXJBbmltYXRpb24sIGNpcmNsZUlubmVyQW5pbWF0aW9uLCBjaXJjbGVPdXRlckFuaW1hdGlvbl0pO1xufTtcbmNvbnN0IGNyZWF0ZVNjYWxlQW5pbWF0aW9uID0gKHB1bGxpbmdSZWZyZXNoZXJJY29uLCByZWZyZXNoZXJFbCkgPT4ge1xuICAvKipcbiAgICogRG8gbm90IHRha2UgdGhlIGhlaWdodCBvZiB0aGUgcmVmcmVzaGVyIGljb25cbiAgICogYmVjYXVzZSBhdCB0aGlzIHBvaW50IHRoZSBET00gaGFzIG5vdCB1cGRhdGVkLFxuICAgKiBzbyB0aGUgcmVmcmVzaGVyIGljb24gaXMgc3RpbGwgaGlkZGVuIHdpdGhcbiAgICogZGlzcGxheTogbm9uZS5cbiAgICogVGhlIGBpb24tcmVmcmVzaGVyYCBjb250YWluZXIgaGVpZ2h0XG4gICAqIGlzIHJvdWdobHkgdGhlIGFtb3VudCB3ZSBuZWVkIHRvIG9mZnNldFxuICAgKiB0aGUgaWNvbiBieSB3aGVuIHB1bGxpbmcgZG93bi5cbiAgICovXG4gIGNvbnN0IGhlaWdodCA9IHJlZnJlc2hlckVsLmNsaWVudEhlaWdodDtcbiAgY29uc3Qgc3Bpbm5lckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocHVsbGluZ1JlZnJlc2hlckljb24pLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICB0cmFuc2Zvcm06IGBzY2FsZSgwKSB0cmFuc2xhdGVZKC0ke2hlaWdodH1weClgXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSkgdHJhbnNsYXRlWSgxMDBweCknXG4gIH1dKTtcbiAgcmV0dXJuIGNyZWF0ZUJhc2VBbmltYXRpb24ocHVsbGluZ1JlZnJlc2hlckljb24pLmFkZEFuaW1hdGlvbihbc3Bpbm5lckFuaW1hdGlvbl0pO1xufTtcbmNvbnN0IGNyZWF0ZVRyYW5zbGF0ZUFuaW1hdGlvbiA9IChwdWxsaW5nUmVmcmVzaGVySWNvbiwgcmVmcmVzaGVyRWwpID0+IHtcbiAgLyoqXG4gICAqIERvIG5vdCB0YWtlIHRoZSBoZWlnaHQgb2YgdGhlIHJlZnJlc2hlciBpY29uXG4gICAqIGJlY2F1c2UgYXQgdGhpcyBwb2ludCB0aGUgRE9NIGhhcyBub3QgdXBkYXRlZCxcbiAgICogc28gdGhlIHJlZnJlc2hlciBpY29uIGlzIHN0aWxsIGhpZGRlbiB3aXRoXG4gICAqIGRpc3BsYXk6IG5vbmUuXG4gICAqIFRoZSBgaW9uLXJlZnJlc2hlcmAgY29udGFpbmVyIGhlaWdodFxuICAgKiBpcyByb3VnaGx5IHRoZSBhbW91bnQgd2UgbmVlZCB0byBvZmZzZXRcbiAgICogdGhlIGljb24gYnkgd2hlbiBwdWxsaW5nIGRvd24uXG4gICAqL1xuICBjb25zdCBoZWlnaHQgPSByZWZyZXNoZXJFbC5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IHNwaW5uZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHB1bGxpbmdSZWZyZXNoZXJJY29uKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtoZWlnaHR9cHgpYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwcHgpJ1xuICB9XSk7XG4gIHJldHVybiBjcmVhdGVCYXNlQW5pbWF0aW9uKHB1bGxpbmdSZWZyZXNoZXJJY29uKS5hZGRBbmltYXRpb24oW3NwaW5uZXJBbmltYXRpb25dKTtcbn07XG5jb25zdCBjcmVhdGVTbmFwQmFja0FuaW1hdGlvbiA9IHB1bGxpbmdSZWZyZXNoZXJJY29uID0+IHtcbiAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbigpLmR1cmF0aW9uKDEyNSkuYWRkRWxlbWVudChwdWxsaW5nUmVmcmVzaGVySWNvbikuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSh2YXIoLS1pb24tcHVsbGluZy1yZWZyZXNoZXItdHJhbnNsYXRlLCAxMDBweCkpJywgJ3RyYW5zbGF0ZVkoMHB4KScpO1xufTtcbi8vIGlPUyBOYXRpdmUgUmVmcmVzaGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3Qgc2V0U3Bpbm5lck9wYWNpdHkgPSAoc3Bpbm5lciwgb3BhY2l0eSkgPT4ge1xuICBzcGlubmVyLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5Jywgb3BhY2l0eS50b1N0cmluZygpKTtcbn07XG5jb25zdCBoYW5kbGVTY3JvbGxXaGlsZVB1bGxpbmcgPSAodGlja3MsIG51bVRpY2tzLCBwdWxsQW1vdW50KSA9PiB7XG4gIGNvbnN0IG1heCA9IDE7XG4gIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgdGlja3MuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogQ29tcHV0ZSB0aGUgb3BhY2l0eSBvZiBlYWNoIHRpY2tcbiAgICAgICAqIG1hcmsgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSBwdWxsQW1vdW50XG4gICAgICAgKiBvZmZzZXQgYnkgbWF4IC8gbnVtVGlja3Mgc29cbiAgICAgICAqIHRoZSB0aWNrIG1hcmtzIGFyZSBzaG93biBzdGFnZ2VyZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1pbiA9IGkgKiAobWF4IC8gbnVtVGlja3MpO1xuICAgICAgY29uc3QgcmFuZ2UgPSBtYXggLSBtaW47XG4gICAgICBjb25zdCBzdGFydCA9IHB1bGxBbW91bnQgLSBtaW47XG4gICAgICBjb25zdCBwcm9ncmVzc2lvbiA9IGNsYW1wKDAsIHN0YXJ0IC8gcmFuZ2UsIDEpO1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCBwcm9ncmVzc2lvbi50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgaGFuZGxlU2Nyb2xsV2hpbGVSZWZyZXNoaW5nID0gKHNwaW5uZXIsIGxhc3RWZWxvY2l0eVkpID0+IHtcbiAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAvLyBJZiB1c2VyIHB1bGxzIGRvd24gcXVpY2tseSwgdGhlIHNwaW5uZXIgc2hvdWxkIHNwaW4gZmFzdGVyXG4gICAgc3Bpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWZyZXNoaW5nLXJvdGF0aW9uLWR1cmF0aW9uJywgbGFzdFZlbG9jaXR5WSA+PSAxLjAgPyAnMC41cycgOiAnMnMnKTtcbiAgICBzcGlubmVyLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5JywgJzEnKTtcbiAgfSk7XG59O1xuY29uc3QgdHJhbnNsYXRlRWxlbWVudCA9IChlbCwgdmFsdWUsIGR1cmF0aW9uID0gMjAwKSA9PiB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgY29uc3QgdHJhbnMgPSB0cmFuc2l0aW9uRW5kQXN5bmMoZWwsIGR1cmF0aW9uKTtcbiAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsIGAke2R1cmF0aW9ufW1zIGFsbCBlYXNlLW91dGApO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMHB4LCAke3ZhbHVlfSwgMHB4KWApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cmFucztcbn07XG4vLyBVdGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogSW4gb3JkZXIgdG8gdXNlIHRoZSBuYXRpdmUgaU9TIHJlZnJlc2hlciB0aGUgZGV2aWNlIG11c3Qgc3VwcG9ydCBydWJiZXIgYmFuZCBzY3JvbGxpbmcuXG4gKiBBcyBwYXJ0IG9mIHRoaXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBEZXNrdG9wIFNhZmFyaSBiZWNhdXNlIGl0IGhhcyBhIHNsaWdodGx5IGRpZmZlcmVudCBydWJiZXIgYmFuZCBlZmZlY3QgdGhhdCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgcmVmcmVzaGVyIGluIElvbmljLlxuICpcbiAqIFdlIGFsc28gbmVlZCB0byBiZSBjYXJlZnVsIG5vdCB0byBpbmNsdWRlIGRldmljZXMgdGhhdCBzcG9vZiB0aGVpciB1c2VyIGFnZW50LlxuICogRm9yIGV4YW1wbGUsIHdoZW4gdXNpbmcgaU9TIGVtdWxhdGlvbiBpbiBDaHJvbWUgdGhlIHVzZXIgYWdlbnQgd2lsbCBiZSBzcG9vZmVkIHN1Y2ggdGhhdFxuICogbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRlciA+IDAuIFRvIHdvcmsgYXJvdW5kIHRoaXMsXG4gKiB3ZSBjaGVjayB0byBzZWUgaWYgdGhlIGFwcGxlLXBheS1sb2dvIGlzIHN1cHBvcnRlZCBhcyBhIG5hbWVkIGltYWdlIHdoaWNoIGlzIG9ubHlcbiAqIHRydWUgb24gQXBwbGUgZGV2aWNlcy5cbiAqXG4gKiBXZSBwcmV2aW91c2x5IGNoZWNrZWQgcmVmZXJlbmNFbC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyB0byBleHBsaWNpdGx5IGNoZWNrXG4gKiBmb3IgcnViYmVyIGJhbmQgc3VwcG9ydC4gSG93ZXZlciwgdGhpcyBwcm9wZXJ0eSB3YXMgcmVtb3ZlZCBvbiBpUGFkT1MgYW5kIGl0J3MgcG9zc2libGVcbiAqIHRoYXQgdGhpcyB3aWxsIGJlIHJlbW92ZWQgb24gaU9TIGluIHRoZSBmdXR1cmUgdG9vLlxuICpcbiAqL1xuY29uc3Qgc3VwcG9ydHNSdWJiZXJCYW5kU2Nyb2xsaW5nID0gKCkgPT4ge1xuICByZXR1cm4gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCAmJiBDU1Muc3VwcG9ydHMoJ2JhY2tncm91bmQ6IC13ZWJraXQtbmFtZWQtaW1hZ2UoYXBwbGUtcGF5LWxvZ28tYmxhY2spJyk7XG59O1xuY29uc3Qgc2hvdWxkVXNlTmF0aXZlUmVmcmVzaGVyID0gYXN5bmMgKHJlZmVyZW5jZUVsLCBtb2RlKSA9PiB7XG4gIGNvbnN0IHJlZnJlc2hlckNvbnRlbnQgPSByZWZlcmVuY2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyLWNvbnRlbnQnKTtcbiAgaWYgKCFyZWZyZXNoZXJDb250ZW50KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gIH1cbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KHJlZnJlc2hlckNvbnRlbnQsIHJlc29sdmUpKTtcbiAgY29uc3QgcHVsbGluZ1NwaW5uZXIgPSByZWZlcmVuY2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nIGlvbi1zcGlubmVyJyk7XG4gIGNvbnN0IHJlZnJlc2hpbmdTcGlubmVyID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcicpO1xuICByZXR1cm4gcHVsbGluZ1NwaW5uZXIgIT09IG51bGwgJiYgcmVmcmVzaGluZ1NwaW5uZXIgIT09IG51bGwgJiYgKG1vZGUgPT09ICdpb3MnICYmIHN1cHBvcnRzUnViYmVyQmFuZFNjcm9sbGluZygpIHx8IG1vZGUgPT09ICdtZCcpO1xufTtcbmNvbnN0IHJlZnJlc2hlcklvc0NzcyA9IFwiaW9uLXJlZnJlc2hlcnt0b3A6MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NjBweDtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTF9aW9uLXJlZnJlc2hlcntpbnNldC1pbmxpbmUtc3RhcnQ6MH1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1hY3RpdmV7ZGlzcGxheTpibG9ja31pb24tcmVmcmVzaGVyLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJX0ucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZy1pY29uLC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOjIwMG1zO3RyYW5zaXRpb246MjAwbXM7Zm9udC1zaXplOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9W2Rpcj1ydGxdIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLFtkaXI9cnRsXSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJlZnJlc2hlci1wdWxsaW5nLWljb246ZGlyKHJ0bCksLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb246ZGlyKHJ0bCl7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfX0ucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOmNlbnRlcn1pb24tcmVmcmVzaGVyLWNvbnRlbnQgLmFycm93LWNvbnRhaW5lcntkaXNwbGF5Om5vbmV9LnJlZnJlc2hlci1wdWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNhbmNlbGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7ZGlzcGxheTpub25lfS5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLC5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29ue2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX0ucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLWlvcyBsaW5lLC5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1saW5lcy1zbWFsbC1pb3MgbGluZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xle3N0cm9rZTp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWJ1YmJsZXMgY2lyY2xlLC5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1jaXJjbGVzIGNpcmNsZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItZG90cyBjaXJjbGV7ZmlsbDp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZle2Rpc3BsYXk6YmxvY2s7ei1pbmRleDoxfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZSBpb24tc3Bpbm5lcnstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1zcGlubmVyey0tcmVmcmVzaGluZy1yb3RhdGlvbi1kdXJhdGlvbjoycztkaXNwbGF5Om5vbmU7LXdlYmtpdC1hbmltYXRpb246dmFyKC0tcmVmcmVzaGluZy1yb3RhdGlvbi1kdXJhdGlvbikgZWFzZS1vdXQgcmVmcmVzaGVyLXJvdGF0ZSBmb3J3YXJkczthbmltYXRpb246dmFyKC0tcmVmcmVzaGluZy1yb3RhdGlvbi1kdXJhdGlvbikgZWFzZS1vdXQgcmVmcmVzaGVyLXJvdGF0ZSBmb3J3YXJkc30ucmVmcmVzaGVyLW5hdGl2ZSAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpub25lOy13ZWJraXQtYW5pbWF0aW9uOjI1MG1zIGxpbmVhciByZWZyZXNoZXItcG9wIGZvcndhcmRzO2FuaW1hdGlvbjoyNTBtcyBsaW5lYXIgcmVmcmVzaGVyLXBvcCBmb3J3YXJkc30ucmVmcmVzaGVyLW5hdGl2ZSBpb24tc3Bpbm5lcnt3aWR0aDozMnB4O2hlaWdodDozMnB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC00NTAsICM3NDc1NzcpKX0ucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItcmVmcmVzaGluZyAucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXNwaW5uZXIsLnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLWNvbXBsZXRpbmcgLnJlZnJlc2hlci1wdWxsaW5nIGlvbi1zcGlubmVye2Rpc3BsYXk6bm9uZX0ucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItcmVmcmVzaGluZyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgaW9uLXNwaW5uZXIsLnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLWNvbXBsZXRpbmcgLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1zcGlubmVye2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXB1bGxpbmcgLnJlZnJlc2hlci1wdWxsaW5nIGlvbi1zcGlubmVye2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXB1bGxpbmcgLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1zcGlubmVye2Rpc3BsYXk6bm9uZX0ucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZSgxODBkZWcpOy13ZWJraXQtdHJhbnNpdGlvbjozMDBtczt0cmFuc2l0aW9uOjMwMG1zfUAtd2Via2l0LWtleWZyYW1lcyByZWZyZXNoZXItcG9wezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMik7dHJhbnNmb3JtOnNjYWxlKDEuMik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgcmVmcmVzaGVyLXBvcHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1ALXdlYmtpdC1rZXlmcmFtZXMgcmVmcmVzaGVyLXJvdGF0ZXtmcm9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX19QGtleWZyYW1lcyByZWZyZXNoZXItcm90YXRle2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfX1cIjtcbmNvbnN0IElvblJlZnJlc2hlcklvc1N0eWxlMCA9IHJlZnJlc2hlcklvc0NzcztcbmNvbnN0IHJlZnJlc2hlck1kQ3NzID0gXCJpb24tcmVmcmVzaGVye3RvcDowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo2MHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMX1pb24tcmVmcmVzaGVye2luc2V0LWlubGluZS1zdGFydDowfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLWFjdGl2ZXtkaXNwbGF5OmJsb2NrfWlvbi1yZWZyZXNoZXItY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZywucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpub25lO3dpZHRoOjEwMCV9LnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246MjAwbXM7dHJhbnNpdGlvbjoyMDBtcztmb250LXNpemU6MzBweDt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJlZnJlc2hlci1wdWxsaW5nLWljb24sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX1bZGlyPXJ0bF0gLnJlZnJlc2hlci1wdWxsaW5nLWljb24sW2Rpcj1ydGxdIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsucmVmcmVzaGVyLXB1bGxpbmctaWNvbjpkaXIocnRsKSwucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbjpkaXIocnRsKXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9fS5yZWZyZXNoZXItcHVsbGluZy10ZXh0LC5yZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0e2ZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyfWlvbi1yZWZyZXNoZXItY29udGVudCAuYXJyb3ctY29udGFpbmVye2Rpc3BsYXk6bm9uZX0ucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItcmVhZHkgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItcmVhZHkgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ucmVmcmVzaGVyLXJlZnJlc2hpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0ucmVmcmVzaGVyLW5hdGl2ZSAucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLW5hdGl2ZSAucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtkaXNwbGF5Om5vbmV9LnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29ue2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX0ucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcHVsbGluZy10ZXh0LC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfS5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLW1kIGxpbmUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItbGluZXMtc21hbGwtbWQgbGluZSwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1jcmVzY2VudCBjaXJjbGV7c3Ryb2tlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX0ucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1idWJibGVzIGNpcmNsZSwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1jaXJjbGVzIGNpcmNsZSwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1kb3RzIGNpcmNsZXtmaWxsOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmV7ZGlzcGxheTpibG9jazt6LWluZGV4OjF9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIGlvbi1zcGlubmVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUgLnNwaW5uZXItYXJyb3ctY29udGFpbmVye2Rpc3BsYXk6aW5oZXJpdH1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUgLmFycm93LWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIC5hcnJvdy1jb250YWluZXIgaW9uLWljb257LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTotNHB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXNpemU6MTJweH1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZyxpb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmcsaW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmcsaW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIC5yZWZyZXNoZXItcHVsbGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYygtMTAwJSAtIDEwcHgpKTt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKC0xMDAlIC0gMTBweCkpfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbixpb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjAwLCAjZWNlY2VjKSk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjZmZmZmZmKSk7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtib3gtc2hhZG93OjBweCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKX1cIjtcbmNvbnN0IElvblJlZnJlc2hlck1kU3R5bGUwID0gcmVmcmVzaGVyTWRDc3M7XG5jb25zdCBSZWZyZXNoZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uUmVmcmVzaCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVmcmVzaFwiLCA3KTtcbiAgICB0aGlzLmlvblB1bGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblB1bGxcIiwgNyk7XG4gICAgdGhpcy5pb25TdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3RhcnRcIiwgNyk7XG4gICAgdGhpcy5hcHBsaWVkU3R5bGVzID0gZmFsc2U7XG4gICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMucG9pbnRlckRvd24gPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRzQ29tcGxldGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlkUmVmcmVzaCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudEZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RWZWxvY2l0eVkgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIHRoaXMubmF0aXZlUmVmcmVzaGVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi87XG4gICAgdGhpcy5wdWxsTWluID0gNjA7XG4gICAgdGhpcy5wdWxsTWF4ID0gdGhpcy5wdWxsTWluICsgNjA7XG4gICAgdGhpcy5jbG9zZUR1cmF0aW9uID0gJzI4MG1zJztcbiAgICB0aGlzLnNuYXBiYWNrRHVyYXRpb24gPSAnMjgwbXMnO1xuICAgIHRoaXMucHVsbEZhY3RvciA9IDE7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY2hlY2tOYXRpdmVSZWZyZXNoZXIoKSB7XG4gICAgY29uc3QgdXNlTmF0aXZlUmVmcmVzaGVyID0gYXdhaXQgc2hvdWxkVXNlTmF0aXZlUmVmcmVzaGVyKHRoaXMuZWwsIGdldElvbk1vZGUodGhpcykpO1xuICAgIGlmICh1c2VOYXRpdmVSZWZyZXNoZXIgJiYgIXRoaXMubmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICB0aGlzLnNldHVwTmF0aXZlUmVmcmVzaGVyKGNvbnRlbnRFbCk7XG4gICAgfSBlbHNlIGlmICghdXNlTmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lOYXRpdmVSZWZyZXNoZXIoKTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveU5hdGl2ZVJlZnJlc2hlcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lckNhbGxiYWNrKTtcbiAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXJDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5uYXRpdmVSZWZyZXNoZXIgPSBmYWxzZTtcbiAgfVxuICBhc3luYyByZXNldE5hdGl2ZVJlZnJlc2hlcihlbCwgc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgPT09ICdpb3MnKSB7XG4gICAgICBhd2FpdCB0cmFuc2xhdGVFbGVtZW50KGVsLCB1bmRlZmluZWQsIDMwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRyYW5zaXRpb25FbmRBc3luYyh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uJyksIDIwMCk7XG4gICAgfVxuICAgIHRoaXMuZGlkUmVmcmVzaCA9IGZhbHNlO1xuICAgIHRoaXMubmVlZHNDb21wbGV0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5wb2ludGVyRG93biA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGFuaSA9PiBhbmkuZGVzdHJveSgpKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMSAvKiBSZWZyZXNoZXJTdGF0ZS5JbmFjdGl2ZSAqLztcbiAgfVxuICBhc3luYyBzZXR1cGlPU05hdGl2ZVJlZnJlc2hlcihwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpIHtcbiAgICB0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgY29uc3QgdGlja3MgPSBwdWxsaW5nU3Bpbm5lci5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpO1xuICAgIGxldCBNQVhfUFVMTCA9IHRoaXMuc2Nyb2xsRWwuY2xpZW50SGVpZ2h0ICogMC4xNjtcbiAgICBjb25zdCBOVU1fVElDS1MgPSB0aWNrcy5sZW5ndGg7XG4gICAgd3JpdGVUYXNrKCgpID0+IHRpY2tzLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2FuaW1hdGlvbicsICdub25lJykpKTtcbiAgICB0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAvLyBJZiBwb2ludGVyIGlzIG5vdCBvbiBzY3JlZW4gb3IgcmVmcmVzaGVyIGlzIG5vdCBhY3RpdmUsIGlnbm9yZSBzY3JvbGxcbiAgICAgIGlmICghdGhpcy5wb2ludGVyRG93biAmJiB0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlYWRUYXNrKCgpID0+IHtcbiAgICAgICAgLy8gUFRSIHNob3VsZCBvbmx5IGJlIGFjdGl2ZSB3aGVuIG92ZXJmbG93IHNjcm9sbGluZyBhdCB0aGUgdG9wXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCByZWZyZXNoZXJIZWlnaHQgPSB0aGlzLmVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiByZWZyZXNoZXIgaXMgcmVmcmVzaGluZyBhbmQgdXNlciB0cmllcyB0byBzY3JvbGxcbiAgICAgICAgICAgKiBwcm9ncmVzc2l2ZWx5IGZhZGUgcmVmcmVzaGVyIG91dC9pblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSA4IC8qIFJlZnJlc2hlclN0YXRlLlJlZnJlc2hpbmcgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gY2xhbXAoMCwgc2Nyb2xsVG9wIC8gKHJlZnJlc2hlckhlaWdodCAqIDAuNSksIDEpO1xuICAgICAgICAgICAgd3JpdGVUYXNrKCgpID0+IHNldFNwaW5uZXJPcGFjaXR5KHJlZnJlc2hpbmdTcGlubmVyLCAxIC0gcmF0aW8pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlbWl0IFwicHVsbGluZ1wiIG9uIGV2ZXJ5IG1vdmVcbiAgICAgICAgICBpZiAodGhpcy5wb2ludGVyRG93bikge1xuICAgICAgICAgICAgdGhpcy5pb25QdWxsLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHdhbnQgdG8gZGVsYXkgdGhlIHN0YXJ0IG9mIHRoaXMgZ2VzdHVyZSBieSB+MzBweFxuICAgICAgICAgKiB3aGVuIGluaXRpYWxseSBwdWxsaW5nIGRvd24gc28gdGhlIHJlZnJlc2hlciBkb2VzIG5vdFxuICAgICAgICAgKiBvdmVybGFwIHdpdGggdGhlIGNvbnRlbnQuIEJ1dCB3aGVuIGxldHRpbmcgZ28gb2YgdGhlXG4gICAgICAgICAqIGdlc3R1cmUgYmVmb3JlIHRoZSByZWZyZXNoZXIgY29tcGxldGVzLCB3ZSB3YW50IHRoZVxuICAgICAgICAgKiByZWZyZXNoZXIgdGljayBtYXJrcyB0byBxdWlja2x5IGZhZGUgb3V0LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5kaWRTdGFydCA/IDMwIDogMDtcbiAgICAgICAgY29uc3QgcHVsbEFtb3VudCA9IHRoaXMucHJvZ3Jlc3MgPSBjbGFtcCgwLCAoTWF0aC5hYnMoc2Nyb2xsVG9wKSAtIG9mZnNldCkgLyBNQVhfUFVMTCwgMSk7XG4gICAgICAgIGNvbnN0IHNob3VsZFNob3dSZWZyZXNoaW5nU3Bpbm5lciA9IHRoaXMuc3RhdGUgPT09IDggLyogUmVmcmVzaGVyU3RhdGUuUmVmcmVzaGluZyAqLyB8fCBwdWxsQW1vdW50ID09PSAxO1xuICAgICAgICBpZiAoc2hvdWxkU2hvd1JlZnJlc2hpbmdTcGlubmVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9pbnRlckRvd24pIHtcbiAgICAgICAgICAgIGhhbmRsZVNjcm9sbFdoaWxlUmVmcmVzaGluZyhyZWZyZXNoaW5nU3Bpbm5lciwgdGhpcy5sYXN0VmVsb2NpdHlZKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmRpZFJlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLmRpZFJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgaGFwdGljSW1wYWN0KHtcbiAgICAgICAgICAgICAgc3R5bGU6IEltcGFjdFN0eWxlLkxpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJhbnNsYXRlIHRoZSBjb250ZW50IGVsZW1lbnQgb3RoZXJ3aXNlIHdoZW4gcG9pbnRlciBpcyByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHNjcmVlbiB0aGUgc2Nyb2xsIGNvbnRlbnQgd2lsbCBib3VuY2UgYmFjayBvdmVyIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VG9UcmFuc2Zvcm0sIGAke3JlZnJlc2hlckhlaWdodH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgICAgICAgIGhhbmRsZVNjcm9sbFdoaWxlUHVsbGluZyh0aWNrcywgTlVNX1RJQ0tTLCBwdWxsQW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJDYWxsYmFjayk7XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC0zOTc4MjY0Mi5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiB0aGlzLnNjcm9sbEVsLFxuICAgICAgZ2VzdHVyZU5hbWU6ICdyZWZyZXNoZXInLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgICB0aGlzLnBvaW50ZXJEb3duID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpZFJlZnJlc2gpIHtcbiAgICAgICAgICB0cmFuc2xhdGVFbGVtZW50KHRoaXMuZWxlbWVudFRvVHJhbnNmb3JtLCAnMHB4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBjb250ZW50IGhhZCBgZGlzcGxheTogbm9uZWAgd2hlblxuICAgICAgICAgKiB0aGUgcmVmcmVzaGVyIHdhcyBpbml0aWFsaXplZCwgaXRzIGNsaWVudEhlaWdodFxuICAgICAgICAgKiB3aWxsIGJlIDAuIFdoZW4gdGhlIGdlc3R1cmUgc3RhcnRzLCB0aGUgY29udGVudFxuICAgICAgICAgKiB3aWxsIGJlIHZpc2libGUsIHNvIHRyeSB0byBnZXQgdGhlIGNvcnJlY3RcbiAgICAgICAgICogY2xpZW50IGhlaWdodCBhZ2Fpbi4gVGhpcyBpcyBtb3N0IGNvbW1vbiB3aGVuXG4gICAgICAgICAqIHVzaW5nIHRoZSByZWZyZXNoZXIgaW4gYW4gaW9uLW1lbnUuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoTUFYX1BVTEwgPT09IDApIHtcbiAgICAgICAgICBNQVhfUFVMTCA9IHRoaXMuc2Nyb2xsRWwuY2xpZW50SGVpZ2h0ICogMC4xNjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW92ZTogZXYgPT4ge1xuICAgICAgICB0aGlzLmxhc3RWZWxvY2l0eVkgPSBldi52ZWxvY2l0eVk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2ludGVyRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm5lZWRzQ29tcGxldGlvbikge1xuICAgICAgICAgIHRoaXMucmVzZXROYXRpdmVSZWZyZXNoZXIodGhpcy5lbGVtZW50VG9UcmFuc2Zvcm0sIDMyIC8qIFJlZnJlc2hlclN0YXRlLkNvbXBsZXRpbmcgKi8pO1xuICAgICAgICAgIHRoaXMubmVlZHNDb21wbGV0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWRSZWZyZXNoKSB7XG4gICAgICAgICAgcmVhZFRhc2soKCkgPT4gdHJhbnNsYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSwgYCR7dGhpcy5lbC5jbGllbnRIZWlnaHR9cHhgKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICB9XG4gIGFzeW5jIHNldHVwTUROYXRpdmVSZWZyZXNoZXIoY29udGVudEVsLCBwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpIHtcbiAgICBjb25zdCBjaXJjbGUgPSBnZXRFbGVtZW50Um9vdChwdWxsaW5nU3Bpbm5lcikucXVlcnlTZWxlY3RvcignY2lyY2xlJyk7XG4gICAgY29uc3QgcHVsbGluZ1JlZnJlc2hlckljb24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbicpO1xuICAgIGNvbnN0IHJlZnJlc2hpbmdDaXJjbGUgPSBnZXRFbGVtZW50Um9vdChyZWZyZXNoaW5nU3Bpbm5lcikucXVlcnlTZWxlY3RvcignY2lyY2xlJyk7XG4gICAgaWYgKGNpcmNsZSAhPT0gbnVsbCAmJiByZWZyZXNoaW5nQ2lyY2xlICE9PSBudWxsKSB7XG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBjaXJjbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2FuaW1hdGlvbicsICdub25lJyk7XG4gICAgICAgIC8vIFRoaXMgbGluZXMgdXAgdGhlIGFuaW1hdGlvbiBvbiB0aGUgcmVmcmVzaGluZyBzcGlubmVyIHdpdGggdGhlIHB1bGxpbmcgc3Bpbm5lclxuICAgICAgICByZWZyZXNoaW5nU3Bpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnYW5pbWF0aW9uLWRlbGF5JywgJy02NTVtcycpO1xuICAgICAgICByZWZyZXNoaW5nQ2lyY2xlLnN0eWxlLnNldFByb3BlcnR5KCdhbmltYXRpb24tZGVsYXknLCAnLTY1NW1zJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC0zOTc4MjY0Mi5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiB0aGlzLnNjcm9sbEVsLFxuICAgICAgZ2VzdHVyZU5hbWU6ICdyZWZyZXNoZXInLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgY2FuU3RhcnQ6ICgpID0+IHRoaXMuc3RhdGUgIT09IDggLyogUmVmcmVzaGVyU3RhdGUuUmVmcmVzaGluZyAqLyAmJiB0aGlzLnN0YXRlICE9PSAzMiAvKiBSZWZyZXNoZXJTdGF0ZS5Db21wbGV0aW5nICovICYmIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wID09PSAwLFxuICAgICAgb25TdGFydDogZXYgPT4ge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgZXYuZGF0YSA9IHtcbiAgICAgICAgICBhbmltYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBkaWRTdGFydDogZmFsc2UsXG4gICAgICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG9uTW92ZTogZXYgPT4ge1xuICAgICAgICBpZiAoZXYudmVsb2NpdHlZIDwgMCAmJiB0aGlzLnByb2dyZXNzID09PSAwICYmICFldi5kYXRhLmRpZFN0YXJ0IHx8IGV2LmRhdGEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgZXYuZGF0YS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2LmRhdGEuZGlkU3RhcnQpIHtcbiAgICAgICAgICBldi5kYXRhLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgICAgICAgIC8vIFdoZW4gaW9uLXJlZnJlc2hlciBpcyBiZWluZyB1c2VkIHdpdGggYSBjdXN0b20gc2Nyb2xsIHRhcmdldCwgdGhlIG92ZXJmbG93IHN0eWxlcyBuZWVkIHRvIGJlIGFwcGxpZWQgZGlyZWN0bHkgaW5zdGVhZCBvZiB2aWEgYSBjc3MgdmFyaWFibGVcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxFbFxuICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IG92ZXJmbG93UHJvcGVydHkgPSBzY3JvbGxFbC5tYXRjaGVzKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKSA/ICdvdmVyZmxvdycgOiAnLS1vdmVyZmxvdyc7XG4gICAgICAgICAgd3JpdGVUYXNrKCgpID0+IHNjcm9sbEVsLnN0eWxlLnNldFByb3BlcnR5KG92ZXJmbG93UHJvcGVydHksICdoaWRkZW4nKSk7XG4gICAgICAgICAgY29uc3QgYW5pbWF0aW9uVHlwZSA9IGdldFJlZnJlc2hlckFuaW1hdGlvblR5cGUoY29udGVudEVsKTtcbiAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBjcmVhdGVQdWxsaW5nQW5pbWF0aW9uKGFuaW1hdGlvblR5cGUsIHB1bGxpbmdSZWZyZXNoZXJJY29uLCB0aGlzLmVsKTtcbiAgICAgICAgICBldi5kYXRhLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydChmYWxzZSwgMCk7XG4gICAgICAgICAgdGhpcy5pb25TdGFydC5lbWl0KCk7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2Ugd2UgYXJlIHVzaW5nIGFuIGVhc2luZyBjdXJ2ZSwgc2xvdyB0aGUgZ2VzdHVyZSB0cmFja2luZyBkb3duIGEgYml0XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcCgwLCBldi5kZWx0YVkgLyAxODAgKiAwLjUsIDEpO1xuICAgICAgICBldi5kYXRhLmFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAodGhpcy5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuaW9uUHVsbC5lbWl0KCk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6IGV2ID0+IHtcbiAgICAgICAgaWYgKCFldi5kYXRhLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2Nyb2xsRWxcbiAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG92ZXJmbG93UHJvcGVydHkgPSBzY3JvbGxFbC5tYXRjaGVzKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKSA/ICdvdmVyZmxvdycgOiAnLS1vdmVyZmxvdyc7XG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiBzY3JvbGxFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShvdmVyZmxvd1Byb3BlcnR5KSk7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzIDw9IDAuNCkge1xuICAgICAgICAgIGV2LmRhdGEuYW5pbWF0aW9uLnByb2dyZXNzRW5kKDAsIHRoaXMucHJvZ3Jlc3MsIDUwMCkub25GaW5pc2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goYW5pID0+IGFuaS5kZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi87XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMCwgMF0sIFsxLCAxXSwgWzEsIDFdLCB0aGlzLnByb2dyZXNzKVswXTtcbiAgICAgICAgY29uc3Qgc25hcEJhY2tBbmltYXRpb24gPSBjcmVhdGVTbmFwQmFja0FuaW1hdGlvbihwdWxsaW5nUmVmcmVzaGVySWNvbik7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHNuYXBCYWNrQW5pbWF0aW9uKTtcbiAgICAgICAgd3JpdGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBwdWxsaW5nUmVmcmVzaGVySWNvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tcHVsbGluZy1yZWZyZXNoZXItdHJhbnNsYXRlJywgYCR7cHJvZ3Jlc3MgKiAxMDB9cHhgKTtcbiAgICAgICAgICBldi5kYXRhLmFuaW1hdGlvbi5wcm9ncmVzc0VuZCgpO1xuICAgICAgICAgIGF3YWl0IHNuYXBCYWNrQW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmJlZ2luUmVmcmVzaCgpO1xuICAgICAgICAgIGV2LmRhdGEuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICB9XG4gIGFzeW5jIHNldHVwTmF0aXZlUmVmcmVzaGVyKGNvbnRlbnRFbCkge1xuICAgIGlmICh0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2sgfHwgIWNvbnRlbnRFbCB8fCB0aGlzLm5hdGl2ZVJlZnJlc2hlciB8fCAhdGhpcy5zY3JvbGxFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB1c2luZyBub24tbmF0aXZlIHJlZnJlc2hlciBiZWZvcmUgbWFrZSBzdXJlXG4gICAgICogd2UgY2xlYW4gdXAgYW55IG9sZCBDU1MuIFRoaXMgY2FuIGhhcHBlbiB3aGVuXG4gICAgICogYSB1c2VyIG1hbnVhbGx5IGNhbGxzIHRoZSByZWZyZXNoIG1ldGhvZCBpbiBhXG4gICAgICogY29tcG9uZW50IGNyZWF0ZSBjYWxsYmFjayBiZWZvcmUgdGhlIG5hdGl2ZVxuICAgICAqIHJlZnJlc2hlciBpcyBzZXR1cC5cbiAgICAgKi9cbiAgICB0aGlzLnNldENzcygwLCAnJywgZmFsc2UsICcnKTtcbiAgICB0aGlzLm5hdGl2ZVJlZnJlc2hlciA9IHRydWU7XG4gICAgY29uc3QgcHVsbGluZ1NwaW5uZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXNwaW5uZXInKTtcbiAgICBjb25zdCByZWZyZXNoaW5nU3Bpbm5lciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcicpO1xuICAgIGlmIChnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJykge1xuICAgICAgdGhpcy5zZXR1cGlPU05hdGl2ZVJlZnJlc2hlcihwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHVwTUROYXRpdmVSZWZyZXNoZXIoY29udGVudEVsLCBwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja05hdGl2ZVJlZnJlc2hlcigpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAnZml4ZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgeW91IHVzZTogPGlvbi1yZWZyZXNoZXIgc2xvdD1cImZpeGVkXCI+Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdChJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SKTtcbiAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2codGhpcy5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgY29udGVudCB0byBiZSByZWFkeSBiZWZvcmUgcXVlcnlpbmcgdGhlIHNjcm9sbFxuICAgICAqIG9yIHRoZSBiYWNrZ3JvdW5kIGNvbnRlbnQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjb21wb25lbnRPblJlYWR5KGNvbnRlbnRFbCwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY3VzdG9tU2Nyb2xsVGFyZ2V0ID0gY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IpO1xuICAgICAgLyoqXG4gICAgICAgKiBRdWVyeSB0aGUgY3VzdG9tIHNjcm9sbCB0YXJnZXQgKGlmIGF2YWlsYWJsZSksIGZpcnN0LiBJbiByZWZyZXNoZXIgaW1wbGVtZW50YXRpb25zLFxuICAgICAgICogdGhlIGlvbi1yZWZyZXNoZXIgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBhIGRpcmVjdCBjaGlsZCBvZiBpb24tY29udGVudCAoc2xvdD1cImZpeGVkXCIpLiBCeVxuICAgICAgICogcXVlcnlpbmcgdGhlIGN1c3RvbSBzY3JvbGwgdGFyZ2V0IGZpcnN0IGFuZCBmYWxsaW5nIGJhY2sgdG8gdGhlIGlvbi1jb250ZW50IGVsZW1lbnQsXG4gICAgICAgKiB0aGUgY29ycmVjdCBzY3JvbGwgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAqL1xuICAgICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY3VzdG9tU2Nyb2xsVGFyZ2V0ICE9PSBudWxsICYmIGN1c3RvbVNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gY3VzdG9tU2Nyb2xsVGFyZ2V0IDogY29udGVudEVsKTtcbiAgICAgIC8qKlxuICAgICAgICogUXVlcnkgdGhlIGJhY2tncm91bmQgY29udGVudCBlbGVtZW50IGZyb20gdGhlIGhvc3QgaW9uLWNvbnRlbnQgZWxlbWVudCBkaXJlY3RseS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29udGVudEVsID0gYXdhaXQgY29udGVudEVsLmdldEJhY2tncm91bmRFbGVtZW50KCk7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIHRoZSBjb250ZW50IGVsZW1lbnQgaXMgZnVsbHNjcmVlbiB0byBhcHBseSB0aGUgY29ycmVjdCBzdHlsZXNcbiAgICAgICAqIHdoZW4gdGhlIHJlZnJlc2hlciBpcyByZWZyZXNoaW5nLiBPdGhlcndpc2UsIHRoZSByZWZyZXNoZXIgd2lsbCBiZVxuICAgICAgICogaGlkZGVuIGJlY2F1c2UgaXQgaXMgcG9zaXRpb25lZCBiZWhpbmQgdGhlIGJhY2tncm91bmQgY29udGVudCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB0aGlzLmNvbnRlbnRGdWxsc2NyZWVuID0gY29udGVudEVsLmZ1bGxzY3JlZW47XG4gICAgICBpZiAoYXdhaXQgc2hvdWxkVXNlTmF0aXZlUmVmcmVzaGVyKHRoaXMuZWwsIGdldElvbk1vZGUodGhpcykpKSB7XG4gICAgICAgIHRoaXMuc2V0dXBOYXRpdmVSZWZyZXNoZXIoY29udGVudEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtMzk3ODI2NDIuanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgZWw6IGNvbnRlbnRFbCxcbiAgICAgICAgICBnZXN0dXJlTmFtZTogJ3JlZnJlc2hlcicsXG4gICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhblN0YXJ0OiAoKSA9PiB0aGlzLmNhblN0YXJ0KCksXG4gICAgICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5vblN0YXJ0KCksXG4gICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgb25FbmQ6ICgpID0+IHRoaXMub25FbmQoKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmRlc3Ryb3lOYXRpdmVSZWZyZXNoZXIoKTtcbiAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aGVuIHlvdXIgYXN5bmMgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAqIEZvciBleGFtcGxlLCB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlIGlzIHdoaWxlIHRoZSBhcHAgaXMgcGVyZm9ybWluZ1xuICAgKiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzdWNoIGFzIHJlY2VpdmluZyBtb3JlIGRhdGEgZnJvbSBhblxuICAgKiBBSkFYIHJlcXVlc3QuIE9uY2UgdGhlIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQsIHlvdSB0aGVuIGNhbGwgdGhpc1xuICAgKiBtZXRob2QgdG8gc2lnbmlmeSB0aGF0IHRoZSByZWZyZXNoaW5nIGhhcyBjb21wbGV0ZWQgYW5kIHRvIGNsb3NlXG4gICAqIHRoZSByZWZyZXNoZXIuIFRoaXMgbWV0aG9kIGFsc28gY2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbVxuICAgKiBgcmVmcmVzaGluZ2AgdG8gYGNvbXBsZXRpbmdgLlxuICAgKi9cbiAgYXN5bmMgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICB0aGlzLm5lZWRzQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAvLyBEbyBub3QgcmVzZXQgc2Nyb2xsIGVsIHVudGlsIHVzZXIgcmVtb3ZlcyBwb2ludGVyIGZyb20gc2NyZWVuXG4gICAgICBpZiAoIXRoaXMucG9pbnRlckRvd24pIHtcbiAgICAgICAgcmFmKCgpID0+IHJhZigoKSA9PiB0aGlzLnJlc2V0TmF0aXZlUmVmcmVzaGVyKHRoaXMuZWxlbWVudFRvVHJhbnNmb3JtLCAzMiAvKiBSZWZyZXNoZXJTdGF0ZS5Db21wbGV0aW5nICovKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKDMyIC8qIFJlZnJlc2hlclN0YXRlLkNvbXBsZXRpbmcgKi8sICcxMjBtcycpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbSBgcmVmcmVzaGluZ2AgdG8gYGNhbmNlbGxpbmdgLlxuICAgKi9cbiAgYXN5bmMgY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLm5hdGl2ZVJlZnJlc2hlcikge1xuICAgICAgLy8gRG8gbm90IHJlc2V0IHNjcm9sbCBlbCB1bnRpbCB1c2VyIHJlbW92ZXMgcG9pbnRlciBmcm9tIHNjcmVlblxuICAgICAgaWYgKCF0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgIHJhZigoKSA9PiByYWYoKCkgPT4gdGhpcy5yZXNldE5hdGl2ZVJlZnJlc2hlcih0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSwgMTYgLyogUmVmcmVzaGVyU3RhdGUuQ2FuY2VsbGluZyAqLykpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgxNiAvKiBSZWZyZXNoZXJTdGF0ZS5DYW5jZWxsaW5nICovLCAnJyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgaG93IGZhciBkb3duIHRoZSB1c2VyIGhhcyBwdWxsZWQuXG4gICAqIFRoZSBudW1iZXIgYDBgIHJlcHJlc2VudHMgdGhlIHVzZXIgaGFzbid0IHB1bGxlZCBkb3duIGF0IGFsbC4gVGhlXG4gICAqIG51bWJlciBgMWAsIGFuZCBhbnl0aGluZyBncmVhdGVyIHRoYW4gYDFgLCByZXByZXNlbnRzIHRoYXQgdGhlIHVzZXJcbiAgICogaGFzIHB1bGxlZCBmYXIgZW5vdWdoIGRvd24gdGhhdCB3aGVuIHRoZXkgbGV0IGdvIHRoZW4gdGhlIHJlZnJlc2ggd2lsbFxuICAgKiBoYXBwZW4uIElmIHRoZXkgbGV0IGdvIGFuZCB0aGUgbnVtYmVyIGlzIGxlc3MgdGhhbiBgMWAsIHRoZW4gdGhlXG4gICAqIHJlZnJlc2ggd2lsbCBub3QgaGFwcGVuLCBhbmQgdGhlIGNvbnRlbnQgd2lsbCByZXR1cm4gdG8gaXQncyBvcmlnaW5hbFxuICAgKiBwb3NpdGlvbi5cbiAgICovXG4gIGdldFByb2dyZXNzKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9ncmVzcyk7XG4gIH1cbiAgY2FuU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlICE9PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgLy8gbm90IHBvc3NpYmxlIHRvIHB1bGwgdGhlIGNvbnRlbnQgZG93biB5ZXRcbiAgICBpZiAodGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi87XG4gICAgdGhpcy5tZW1vaXplT3ZlcmZsb3dTdHlsZSgpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb250ZW50IGlzIGZ1bGxzY3JlZW4sIHRoZW4gd2UgbmVlZCB0b1xuICAgICAqIHNldCB0aGUgb2Zmc2V0LXRvcCBzdHlsZSBvbiB0aGUgYmFja2dyb3VuZCBjb250ZW50XG4gICAgICogZWxlbWVudCB0byBlbnN1cmUgdGhhdCB0aGUgcmVmcmVzaGVyIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnRGdWxsc2NyZWVuICYmIHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9mZnNldC10b3AnLCAnMHB4Jyk7XG4gICAgfVxuICB9XG4gIG9uTW92ZShkZXRhaWwpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcyBtZXRob2QgY2FuIGdldCBjYWxsZWQgbGlrZSBhIGJhemlsbGlvbiB0aW1lcyBwZXIgc2Vjb25kLFxuICAgIC8vIHNvIGl0J3MgYnVpbHQgdG8gYmUgYXMgZWZmaWNpZW50IGFzIHBvc3NpYmxlLCBhbmQgZG9lcyBpdHNcbiAgICAvLyBiZXN0IHRvIGRvIGFueSBET00gcmVhZC93cml0ZXMgb25seSB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5XG4gICAgLy8gaWYgbXVsdGktdG91Y2ggdGhlbiBnZXQgb3V0IGltbWVkaWF0ZWx5XG4gICAgY29uc3QgZXYgPSBkZXRhaWwuZXZlbnQ7XG4gICAgaWYgKGV2LnRvdWNoZXMgIT09IHVuZGVmaW5lZCAmJiBldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG8gbm90aGluZyBpZiBpdCdzIGFjdGl2ZWx5IHJlZnJlc2hpbmdcbiAgICAvLyBvciBpdCdzIGluIHRoZSB3YXkgb2YgY2xvc2luZ1xuICAgIC8vIG9yIHRoaXMgd2FzIG5ldmVyIGEgc3RhcnRZXG4gICAgaWYgKCh0aGlzLnN0YXRlICYgNTYgLyogUmVmcmVzaGVyU3RhdGUuX0JVU1lfICovKSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwdWxsRmFjdG9yID0gTnVtYmVyLmlzTmFOKHRoaXMucHVsbEZhY3RvcikgfHwgdGhpcy5wdWxsRmFjdG9yIDwgMCA/IDEgOiB0aGlzLnB1bGxGYWN0b3I7XG4gICAgY29uc3QgZGVsdGFZID0gZGV0YWlsLmRlbHRhWSAqIHB1bGxGYWN0b3I7XG4gICAgLy8gZG9uJ3QgYm90aGVyIGlmIHRoZXkncmUgc2Nyb2xsaW5nIHVwXG4gICAgLy8gYW5kIGhhdmUgbm90IGFscmVhZHkgc3RhcnRlZCBkcmFnZ2luZ1xuICAgIGlmIChkZWx0YVkgPD0gMCkge1xuICAgICAgLy8gdGhlIGN1cnJlbnQgWSBpcyBoaWdoZXIgdGhhbiB0aGUgc3RhcnRpbmcgWVxuICAgICAgLy8gc28gdGhleSBzY3JvbGxlZCB1cCBlbm91Z2ggdG8gYmUgaWdub3JlZFxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB0aGlzLnN0YXRlID0gMSAvKiBSZWZyZXNoZXJTdGF0ZS5JbmFjdGl2ZSAqLztcbiAgICAgIGlmICh0aGlzLmFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0eWxlcyBvbmx5IGlmIHRoZXkgd2VyZSBhcHBsaWVkXG4gICAgICAgIHRoaXMuc2V0Q3NzKDAsICcnLCBmYWxzZSwgJycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgbm90IGFscmVhZHkgYWN0aXZlbHkgcHVsbGluZyBkb3duXG4gICAgICAvLyBnZXQgdGhlIGNvbnRlbnQncyBzY3JvbGxUb3BcbiAgICAgIGNvbnN0IHNjcm9sbEhvc3RTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgICAvLyBub3QgcG9zc2libGUgdG8gcHVsbCB0aGUgY29udGVudCBkb3duIHlldFxuICAgICAgaWYgKHNjcm9sbEhvc3RTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjb250ZW50IHNjcm9sbGVkIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AsIGFuZCBkcmFnZ2luZyBkb3duXG4gICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgIH1cbiAgICAvLyBwcmV2ZW50IG5hdGl2ZSBzY3JvbGwgZXZlbnRzXG4gICAgaWYgKGV2LmNhbmNlbGFibGUpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIHRoZSByZWZyZXNoZXIgaXMgYWN0aXZlbHkgcHVsbGluZyBhdCB0aGlzIHBvaW50XG4gICAgLy8gbW92ZSB0aGUgc2Nyb2xsIGVsZW1lbnQgd2l0aGluIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICB0aGlzLnNldENzcyhkZWx0YVksICcwbXMnLCB0cnVlLCAnJyk7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgLy8gZG9uJ3QgY29udGludWUgaWYgdGhlcmUncyBubyBkZWx0YSB5ZXRcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwdWxsTWluID0gdGhpcy5wdWxsTWluO1xuICAgIC8vIHNldCBwdWxsIHByb2dyZXNzXG4gICAgdGhpcy5wcm9ncmVzcyA9IGRlbHRhWSAvIHB1bGxNaW47XG4gICAgLy8gZW1pdCBcInN0YXJ0XCIgaWYgaXQgaGFzbid0IHN0YXJ0ZWQgeWV0XG4gICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgIH1cbiAgICAvLyBlbWl0IFwicHVsbGluZ1wiIG9uIGV2ZXJ5IG1vdmVcbiAgICB0aGlzLmlvblB1bGwuZW1pdCgpO1xuICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhlIGRlbHRhIGlzIGxlc3MgdGhhbiB0aGUgcHVsbCB0aHJlc2hvbGRcbiAgICBpZiAoZGVsdGFZIDwgcHVsbE1pbikge1xuICAgICAgLy8gZW5zdXJlIGl0IHN0YXlzIGluIHRoZSBwdWxsaW5nIHN0YXRlLCBjdXogaXRzIG5vdCByZWFkeSB5ZXRcbiAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFJlZnJlc2hlclN0YXRlLlB1bGxpbmcgKi87XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZWx0YVkgPiB0aGlzLnB1bGxNYXgpIHtcbiAgICAgIC8vIHRoZXkgcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgbWF4LCBzbyBraWNrIG9mZiB0aGUgcmVmcmVzaFxuICAgICAgdGhpcy5iZWdpblJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgcHVsbCBtaW4hIVxuICAgIC8vIGl0IGlzIG5vdyBpbiB0aGUgYHJlYWR5YCBzdGF0ZSEhXG4gICAgLy8gaWYgdGhleSBsZXQgZ28gdGhlbiBpdCdsbCByZWZyZXNoLCBrZXJwb3chIVxuICAgIHRoaXMuc3RhdGUgPSA0IC8qIFJlZnJlc2hlclN0YXRlLlJlYWR5ICovO1xuICAgIHJldHVybjtcbiAgfVxuICBvbkVuZCgpIHtcbiAgICAvLyBvbmx5IHJ1biBpbiBhIHpvbmUgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLnN0YXRlID09PSA0IC8qIFJlZnJlc2hlclN0YXRlLlJlYWR5ICovKSB7XG4gICAgICAvLyB0aGV5IHB1bGxlZCBkb3duIGZhciBlbm91Z2gsIHNvIGl0J3MgcmVhZHkgdG8gcmVmcmVzaFxuICAgICAgdGhpcy5iZWdpblJlZnJlc2goKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IDIgLyogUmVmcmVzaGVyU3RhdGUuUHVsbGluZyAqLykge1xuICAgICAgLy8gdGhleSB3ZXJlIHB1bGxpbmcgZG93biwgYnV0IGRpZG4ndCBwdWxsIGRvd24gZmFyIGVub3VnaFxuICAgICAgLy8gc2V0IHRoZSBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgLy8gYW5kIGNsb3NlIHRoZSByZWZyZXNoZXJcbiAgICAgIC8vIHNldCB0aGF0IHRoZSByZWZyZXNoIGlzIGFjdGl2ZWx5IGNhbmNlbGxpbmdcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBwdWxsIHRvIHJlZnJlc2ggZ2VzdHVyZSB3YXMgYWJvcnRlZFxuICAgICAgICogc28gd2Ugc2hvdWxkIGltbWVkaWF0ZWx5IHJlc3RvcmUgYW55IG92ZXJmbG93IHN0eWxlc1xuICAgICAgICogdGhhdCBoYXZlIGJlZW4gbW9kaWZpZWQuIERvIG5vdCBjYWxsIHRoaXMuY2FuY2VsXG4gICAgICAgKiBiZWNhdXNlIHRoZSBzdHlsZXMgd2lsbCBvbmx5IGJlIHJlc2V0IGFmdGVyIGEgdGltZW91dC5cbiAgICAgICAqIElmIHRoZSBnZXN0dXJlIGlzIGFib3J0ZWQgdGhlbiBzY3JvbGxpbmcgc2hvdWxkIGJlXG4gICAgICAgKiBhdmFpbGFibGUgcmlnaHQgYXdheS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5yZXN0b3JlT3ZlcmZsb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuICBiZWdpblJlZnJlc2goKSB7XG4gICAgLy8gYXNzdW1lcyB3ZSdyZSBhbHJlYWR5IGJhY2sgaW4gYSB6b25lXG4gICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICB0aGlzLnN0YXRlID0gOCAvKiBSZWZyZXNoZXJTdGF0ZS5SZWZyZXNoaW5nICovO1xuICAgIC8vIHBsYWNlIHRoZSBjb250ZW50IGluIGEgaGFuZ291dCBwb3NpdGlvbiB3aGlsZSBpdCB0aGlua3NcbiAgICB0aGlzLnNldENzcyh0aGlzLnB1bGxNaW4sIHRoaXMuc25hcGJhY2tEdXJhdGlvbiwgdHJ1ZSwgJycpO1xuICAgIC8vIGVtaXQgXCJyZWZyZXNoXCIgYmVjYXVzZSBpdCB3YXMgcHVsbGVkIGRvd24gZmFyIGVub3VnaFxuICAgIC8vIGFuZCB0aGV5IGxldCBnbyB0byBiZWdpbiByZWZyZXNoaW5nXG4gICAgdGhpcy5pb25SZWZyZXNoLmVtaXQoe1xuICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIGNsb3NlKHN0YXRlLCBkZWxheSkge1xuICAgIC8vIGNyZWF0ZSBmYWxsYmFjayB0aW1lciBpbmNhc2Ugc29tZXRoaW5nIGdvZXMgd3Jvbmcgd2l0aCB0cmFuc2l0aW9uRW5kIGV2ZW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICB0aGlzLnN0YXRlID0gMSAvKiBSZWZyZXNoZXJTdGF0ZS5JbmFjdGl2ZSAqLztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXNldCBhbnkgb3ZlcmZsb3cgc3R5bGVzIHNvIHRoZVxuICAgICAgICogdXNlciBjYW4gc2Nyb2xsIGFnYWluLlxuICAgICAgICovXG4gICAgICB0aGlzLnNldENzcygwLCAnMG1zJywgZmFsc2UsICcnLCB0cnVlKTtcbiAgICAgIC8qKlxuICAgICAgICogUmVzZXQgdGhlIG9mZnNldC10b3Agc3R5bGUgb24gdGhlIGJhY2tncm91bmQgY29udGVudFxuICAgICAgICogd2hlbiB0aGUgcmVmcmVzaGVyIGlzIG5vIGxvbmdlciByZWZyZXNoaW5nIGFuZCB0aGVcbiAgICAgICAqIGNvbnRlbnQgaXMgZnVsbHNjcmVlbi5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgYmVoYXZpb3Igb2YgYmFja2dyb3VuZCBjb250ZW50XG4gICAgICAgKiBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiByZWZyZXNoaW5nIGlzIGNvbXBsZXRlLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5jb250ZW50RnVsbHNjcmVlbiAmJiB0aGlzLmJhY2tncm91bmRDb250ZW50RWwpIHtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrZ3JvdW5kQ29udGVudEVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tb2Zmc2V0LXRvcCcpO1xuICAgICAgfVxuICAgIH0sIDYwMCk7XG4gICAgLy8gcmVzZXQgdGhlIHN0eWxlcyBvbiB0aGUgc2Nyb2xsIGVsZW1lbnRcbiAgICAvLyBzZXQgdGhhdCB0aGUgcmVmcmVzaCBpcyBhY3RpdmVseSBjYW5jZWxsaW5nL2NvbXBsZXRpbmdcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zZXRDc3MoMCwgdGhpcy5jbG9zZUR1cmF0aW9uLCB0cnVlLCBkZWxheSk7XG4gIH1cbiAgc2V0Q3NzKHksIGR1cmF0aW9uLCBvdmVyZmxvd1Zpc2libGUsIGRlbGF5LCBzaG91bGRSZXN0b3JlT3ZlcmZsb3dTdHlsZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMubmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXBwbGllZFN0eWxlcyA9IHkgPiAwO1xuICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLmJhY2tncm91bmRDb250ZW50RWwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSB0aGlzLnNjcm9sbEVsLnN0eWxlO1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb250ZW50RWwuc3R5bGU7XG4gICAgICAgIHNjcm9sbFN0eWxlLnRyYW5zZm9ybSA9IGJhY2tncm91bmRTdHlsZS50cmFuc2Zvcm0gPSB5ID4gMCA/IGB0cmFuc2xhdGVZKCR7eX1weCkgdHJhbnNsYXRlWigwcHgpYCA6ICcnO1xuICAgICAgICBzY3JvbGxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBiYWNrZ3JvdW5kU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHNjcm9sbFN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGJhY2tncm91bmRTdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBkZWxheTtcbiAgICAgICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSBvdmVyZmxvd1Zpc2libGUgPyAnaGlkZGVuJyA6ICcnO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBSZXNldCB0aGUgb3ZlcmZsb3cgc3R5bGVzIG9ubHkgb25jZVxuICAgICAgICogdGhlIHB1bGwgdG8gcmVmcmVzaCBlZmZlY3QgaGFzIGJlZW4gY2xvc2VkLlxuICAgICAgICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIGdlc3R1cmUgaXMgZG9uZVxuICAgICAgICogYW5kIHRoZSByZWZyZXNoIG9wZXJhdGlvbiBoYXMgZWl0aGVyXG4gICAgICAgKiBiZWVuIGFib3J0ZWQgb3IgaGFzIGNvbXBsZXRlZC5cbiAgICAgICAqL1xuICAgICAgaWYgKHNob3VsZFJlc3RvcmVPdmVyZmxvd1N0eWxlKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZU92ZXJmbG93U3R5bGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZW1vaXplT3ZlcmZsb3dTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1lcbiAgICAgIH0gPSB0aGlzLnNjcm9sbEVsLnN0eWxlO1xuICAgICAgdGhpcy5vdmVyZmxvd1N0eWxlcyA9IHtcbiAgICAgICAgb3ZlcmZsb3c6IG92ZXJmbG93ICE9PSBudWxsICYmIG92ZXJmbG93ICE9PSB2b2lkIDAgPyBvdmVyZmxvdyA6ICcnLFxuICAgICAgICBvdmVyZmxvd1g6IG92ZXJmbG93WCAhPT0gbnVsbCAmJiBvdmVyZmxvd1ggIT09IHZvaWQgMCA/IG92ZXJmbG93WCA6ICcnLFxuICAgICAgICBvdmVyZmxvd1k6IG92ZXJmbG93WSAhPT0gbnVsbCAmJiBvdmVyZmxvd1kgIT09IHZvaWQgMCA/IG92ZXJmbG93WSA6ICcnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN0b3JlT3ZlcmZsb3dTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5vdmVyZmxvd1N0eWxlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2Nyb2xsRWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1lcbiAgICAgIH0gPSB0aGlzLm92ZXJmbG93U3R5bGVzO1xuICAgICAgdGhpcy5zY3JvbGxFbC5zdHlsZS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgICAgdGhpcy5zY3JvbGxFbC5zdHlsZS5vdmVyZmxvd1ggPSBvdmVyZmxvd1g7XG4gICAgICB0aGlzLnNjcm9sbEVsLnN0eWxlLm92ZXJmbG93WSA9IG92ZXJmbG93WTtcbiAgICAgIHRoaXMub3ZlcmZsb3dTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc0YzM2YmZmYmZhMzJlZjFiZDI4YTYwZjQ0NTVjMTI1ODQyODgwNjU5JyxcbiAgICAgIHNsb3Q6IFwiZml4ZWRcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgcmVmcmVzaGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgJ3JlZnJlc2hlci1uYXRpdmUnOiB0aGlzLm5hdGl2ZVJlZnJlc2hlcixcbiAgICAgICAgJ3JlZnJlc2hlci1hY3RpdmUnOiB0aGlzLnN0YXRlICE9PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovLFxuICAgICAgICAncmVmcmVzaGVyLXB1bGxpbmcnOiB0aGlzLnN0YXRlID09PSAyIC8qIFJlZnJlc2hlclN0YXRlLlB1bGxpbmcgKi8sXG4gICAgICAgICdyZWZyZXNoZXItcmVhZHknOiB0aGlzLnN0YXRlID09PSA0IC8qIFJlZnJlc2hlclN0YXRlLlJlYWR5ICovLFxuICAgICAgICAncmVmcmVzaGVyLXJlZnJlc2hpbmcnOiB0aGlzLnN0YXRlID09PSA4IC8qIFJlZnJlc2hlclN0YXRlLlJlZnJlc2hpbmcgKi8sXG4gICAgICAgICdyZWZyZXNoZXItY2FuY2VsbGluZyc6IHRoaXMuc3RhdGUgPT09IDE2IC8qIFJlZnJlc2hlclN0YXRlLkNhbmNlbGxpbmcgKi8sXG4gICAgICAgICdyZWZyZXNoZXItY29tcGxldGluZyc6IHRoaXMuc3RhdGUgPT09IDMyIC8qIFJlZnJlc2hlclN0YXRlLkNvbXBsZXRpbmcgKi9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuUmVmcmVzaGVyLnN0eWxlID0ge1xuICBpb3M6IElvblJlZnJlc2hlcklvc1N0eWxlMCxcbiAgbWQ6IElvblJlZnJlc2hlck1kU3R5bGUwXG59O1xuY29uc3QgUmVmcmVzaGVyQ29udGVudCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jdXN0b21IVE1MRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2lubmVySFRNTFRlbXBsYXRlc0VuYWJsZWQnLCBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQpO1xuICAgIHRoaXMucHVsbGluZ0ljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wdWxsaW5nVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlZnJlc2hpbmdTcGlubmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVmcmVzaGluZ1RleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgaWYgKHRoaXMucHVsbGluZ0ljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmF0aXZlIGlPUyByZWZyZXNoZXIgdXNlcyBhIHNwaW5uZXIgaW5zdGVhZCBvZlxuICAgICAgICogYW4gaWNvbiwgc28gd2UgbmVlZCB0byBzZWUgaWYgdGhpcyBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAqIHRoZSBuYXRpdmUgaU9TIHJlZnJlc2hlci5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaGFzUnViYmVyQmFuZFNjcm9sbGluZyA9IHN1cHBvcnRzUnViYmVyQmFuZFNjcm9sbGluZygpO1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICBjb25zdCBvdmVyZmxvd1JlZnJlc2hlciA9IGhhc1J1YmJlckJhbmRTY3JvbGxpbmcgPyAnbGluZXMnIDogYXJyb3dEb3duO1xuICAgICAgdGhpcy5wdWxsaW5nSWNvbiA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdJY29uJywgbW9kZSA9PT0gJ2lvcycgJiYgaGFzUnViYmVyQmFuZFNjcm9sbGluZyA/IGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBvdmVyZmxvd1JlZnJlc2hlcikgOiAnY2lyY3VsYXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmdTcGlubmVyID0gY29uZmlnLmdldCgncmVmcmVzaGluZ1NwaW5uZXInLCBjb25maWcuZ2V0KCdzcGlubmVyJywgbW9kZSA9PT0gJ2lvcycgPyAnbGluZXMnIDogJ2NpcmN1bGFyJykpO1xuICAgIH1cbiAgfVxuICByZW5kZXJQdWxsaW5nVGV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXN0b21IVE1MRW5hYmxlZCxcbiAgICAgIHB1bGxpbmdUZXh0XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGN1c3RvbUhUTUxFbmFibGVkKSB7XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInJlZnJlc2hlci1wdWxsaW5nLXRleHRcIixcbiAgICAgICAgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyhwdWxsaW5nVGV4dClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy10ZXh0XCJcbiAgICB9LCBwdWxsaW5nVGV4dCk7XG4gIH1cbiAgcmVuZGVyUmVmcmVzaGluZ1RleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VzdG9tSFRNTEVuYWJsZWQsXG4gICAgICByZWZyZXNoaW5nVGV4dFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXN0b21IVE1MRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0XCIsXG4gICAgICAgIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcocmVmcmVzaGluZ1RleHQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwicmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dFwiXG4gICAgfSwgcmVmcmVzaGluZ1RleHQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwdWxsaW5nSWNvbiA9IHRoaXMucHVsbGluZ0ljb247XG4gICAgY29uc3QgaGFzU3Bpbm5lciA9IHB1bGxpbmdJY29uICE9IG51bGwgJiYgU1BJTk5FUlNbcHVsbGluZ0ljb25dICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZmI3OGQ3ZTMxZjhmZWIzMTAyNWU1ODkwM2ViOWRlODVjYjkyOGRiZCcsXG4gICAgICBjbGFzczogbW9kZVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMjNmNjc4MDBmMDk3NjVlZjhmZGU4Y2Y4NWE4NDNlMTllNjY3ZjMzNycsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZ1wiXG4gICAgfSwgdGhpcy5wdWxsaW5nSWNvbiAmJiBoYXNTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNWEwOGQzYjY5NzYyZjhiNTFkY2QzZGNmYmFmM2ZkZGI3MDcyNTdmYScsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzQyYTYxM2IwMjllMDkyYWNkZmY3ZmU2MTNhNDI5Mzc1ZDg5ZjE1N2UnLFxuICAgICAgY2xhc3M6IFwic3Bpbm5lci1hcnJvdy1jb250YWluZXJcIlxuICAgIH0sIGgoXCJpb24tc3Bpbm5lclwiLCB7XG4gICAgICBrZXk6ICcyZjljZGM3NTkzOGM0ZDMwNmRlN2E3MTdlZDY3OTAxZGFlZjcxYzJjJyxcbiAgICAgIG5hbWU6IHRoaXMucHVsbGluZ0ljb24sXG4gICAgICBwYXVzZWQ6IHRydWVcbiAgICB9KSwgbW9kZSA9PT0gJ21kJyAmJiB0aGlzLnB1bGxpbmdJY29uID09PSAnY2lyY3VsYXInICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMWY4YTYzNDdiNGE0NjQxN2JhNTUyODZhNzlmMWE0MWYwNGJmOWM5MScsXG4gICAgICBjbGFzczogXCJhcnJvdy1jb250YWluZXJcIlxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICczMjY3MTNkMTFkNDgyZDQyMGJhNWE3MzlmZjQ1Mjg0MDBhMzdlOWNhJyxcbiAgICAgIGljb246IGNhcmV0QmFja1NoYXJwLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKSkpLCB0aGlzLnB1bGxpbmdJY29uICYmICFoYXNTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnYWIxOGM3Y2JlYTdiY2JmYTAzNGY5MGYzMTc2NTJhZjRkOTM2NjBlZCcsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCJcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnZjQ4OGFjZDU0YWNjOGE2MWI2YzVhMjc5ZjBkN2Y5YTQzN2MzNzBjMCcsXG4gICAgICBpY29uOiB0aGlzLnB1bGxpbmdJY29uLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpLCB0aGlzLnB1bGxpbmdUZXh0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJQdWxsaW5nVGV4dCgpKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc5MTRhZDYxMzk0NDJkYWM1M2FmNDcxMjBlYTgyMWZhMTFjMzA5YTM4JyxcbiAgICAgIGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nXCJcbiAgICB9LCB0aGlzLnJlZnJlc2hpbmdTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnN2ViYTczMmY1ZTJkNzJiOTAzOTlkNjhhM2U4OTYxN2Q4OTc5YjNkMScsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy1pY29uXCJcbiAgICB9LCBoKFwiaW9uLXNwaW5uZXJcIiwge1xuICAgICAga2V5OiAnODM4ZDY2ZDhiZWY2ZjU2NjIyYzYyYjEwNjhlN2ZlZDI5ZTA5NDMwMicsXG4gICAgICBuYW1lOiB0aGlzLnJlZnJlc2hpbmdTcGlubmVyXG4gICAgfSkpLCB0aGlzLnJlZnJlc2hpbmdUZXh0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJSZWZyZXNoaW5nVGV4dCgpKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuZXhwb3J0IHsgUmVmcmVzaGVyIGFzIGlvbl9yZWZyZXNoZXIsIFJlZnJlc2hlckNvbnRlbnQgYXMgaW9uX3JlZnJlc2hlcl9jb250ZW50IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQU0sNEJBQTRCLGVBQWE7QUFDN0MsUUFBTSxrQkFBa0IsVUFBVTtBQUNsQyxRQUFNLFlBQVksb0JBQW9CLFFBQVEsZ0JBQWdCLFlBQVk7QUFDMUUsU0FBTyxZQUFZLGNBQWM7QUFDbkM7QUFDQSxJQUFNLHlCQUF5QixDQUFDLE1BQU0sZ0JBQWdCLGdCQUFnQjtBQUNwRSxTQUFPLFNBQVMsVUFBVSxxQkFBcUIsZ0JBQWdCLFdBQVcsSUFBSSx5QkFBeUIsZ0JBQWdCLFdBQVc7QUFDcEk7QUFDQSxJQUFNLHNCQUFzQiwwQkFBd0I7QUFDbEQsUUFBTSxVQUFVLHFCQUFxQixjQUFjLGFBQWE7QUFDaEUsUUFBTSxTQUFTLFFBQVEsV0FBVyxjQUFjLFFBQVE7QUFDeEQsUUFBTSx3QkFBd0IscUJBQXFCLGNBQWMsMEJBQTBCO0FBQzNGLFFBQU0saUJBQWlCLHFCQUFxQixjQUFjLGtCQUFrQjtBQUM1RSxRQUFNLFFBQVEsaUJBQWlCLGVBQWUsY0FBYyxVQUFVLElBQUk7QUFDMUUsUUFBTSxnQkFBZ0IsZ0JBQWdCLEVBQUUsU0FBUyxHQUFJLEVBQUUsT0FBTyxVQUFVO0FBQ3hFLFFBQU0saUNBQWlDLGdCQUFnQixFQUFFLFdBQVcscUJBQXFCLEVBQUUsVUFBVSxDQUFDO0FBQUEsSUFDcEcsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsQ0FBQyxDQUFDO0FBQ0Ys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
