import {
  KEYBOARD_DID_OPEN
} from "./chunk-ORZG2IJI.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  findIonContent,
  isIonContent,
  printIonContentErrorMsg,
  resetContentScrollY
} from "./chunk-7QVPRCLC.js";
import "./chunk-XCF7ZGBQ.js";
import {
  deepReady,
  waitForMount
} from "./chunk-P46UNXAG.js";
import {
  getTimeGivenProgression
} from "./chunk-6NM256MY.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import {
  getCapacitor
} from "./chunk-UPH3BB7G.js";
import {
  BACKDROP,
  FOCUS_TRAP_DISABLE_CLASS,
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
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
import {
  CoreDelegate,
  attachComponent,
  detachComponent
} from "./chunk-U6MFTC2E.js";
import {
  getClassMap
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  clamp,
  getElementRoot,
  hasLazyBuild,
  inheritAttributes,
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
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-modal.entry.js
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
var StatusBar = {
  getEngine() {
    const capacitor = getCapacitor();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable("StatusBar")) {
      return capacitor.Plugins.StatusBar;
    }
    return void 0;
  },
  setStyle(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.setStyle(options);
  },
  getStyle: function() {
    return __async(this, null, function* () {
      const engine = this.getEngine();
      if (!engine) {
        return Style.Default;
      }
      const {
        style
      } = yield engine.getInfo();
      return style;
    });
  }
};
var getBackdropValueForSheet = (x, backdropBreakpoint) => {
  if (backdropBreakpoint === 1) {
    return 0;
  }
  const slope = 1 / (1 - backdropBreakpoint);
  const b = -(backdropBreakpoint * slope);
  return x * slope + b;
};
var setCardStatusBarDark = () => {
  if (!win || win.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: Style.Dark
  });
};
var setCardStatusBarDefault = (defaultStyle = Style.Default) => {
  if (!win || win.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: defaultStyle
  });
};
var handleCanDismiss = (el, animation) => __async(void 0, null, function* () {
  if (typeof el.canDismiss !== "function") {
    return;
  }
  const shouldDismiss = yield el.canDismiss(void 0, GESTURE);
  if (!shouldDismiss) {
    return;
  }
  if (animation.isRunning()) {
    animation.onFinish(() => {
      el.dismiss(void 0, "handler");
    }, {
      oneTimeCallback: true
    });
  } else {
    el.dismiss(void 0, "handler");
  }
});
var calculateSpringStep = (t) => {
  return 255275e-8 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1;
};
var SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.915
};
var createSwipeToCloseGesture = (el, animation, statusBarStyle, onDismiss) => {
  const DISMISS_THRESHOLD = 0.5;
  const height = el.offsetHeight;
  let isOpen = false;
  let canDismissBlocksGesture = false;
  let contentEl = null;
  let scrollEl = null;
  const canDismissMaxStep = 0.2;
  let initialScrollY = true;
  let lastStep = 0;
  const getScrollY = () => {
    if (contentEl && isIonContent(contentEl)) {
      return contentEl.scrollY;
    } else {
      return true;
    }
  };
  const canStart = (detail) => {
    const target = detail.event.target;
    if (target === null || !target.closest) {
      return true;
    }
    contentEl = findClosestIonContent(target);
    if (contentEl) {
      if (isIonContent(contentEl)) {
        const root = getElementRoot(contentEl);
        scrollEl = root.querySelector(".inner-scroll");
      } else {
        scrollEl = contentEl;
      }
      const hasRefresherInContent = !!contentEl.querySelector("ion-refresher");
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    const footer = target.closest("ion-footer");
    if (footer === null) {
      return true;
    }
    return false;
  };
  const onStart = (detail) => {
    const {
      deltaY
    } = detail;
    initialScrollY = getScrollY();
    canDismissBlocksGesture = el.canDismiss !== void 0 && el.canDismiss !== true;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    animation.progressStart(true, isOpen ? 1 : 0);
  };
  const onMove = (detail) => {
    const {
      deltaY
    } = detail;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    animation.progressStep(clampedStep);
    if (clampedStep >= DISMISS_THRESHOLD && lastStep < DISMISS_THRESHOLD) {
      setCardStatusBarDefault(statusBarStyle);
    } else if (clampedStep < DISMISS_THRESHOLD && lastStep >= DISMISS_THRESHOLD) {
      setCardStatusBarDark();
    }
    lastStep = clampedStep;
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    const threshold = (detail.deltaY + velocity * 1e3) / height;
    const shouldComplete = !isAttemptingDismissWithCanDismiss && threshold >= DISMISS_THRESHOLD;
    let newStepValue = shouldComplete ? -1e-3 : 1e-3;
    if (!shouldComplete) {
      animation.easing("cubic-bezier(1, 0, 0.68, 0.28)");
      newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], clampedStep)[0];
    } else {
      animation.easing("cubic-bezier(0.32, 0.72, 0, 1)");
      newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], clampedStep)[0];
    }
    const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - clampedStep) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    if (contentEl) {
      resetContentScrollY(contentEl, initialScrollY);
    }
    animation.onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);
    if (isAttemptingDismissWithCanDismiss && clampedStep > maxStep / 4) {
      handleCanDismiss(el, animation);
    } else if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = createGesture({
    el,
    gestureName: "modalSwipeToClose",
    gesturePriority: OVERLAY_GESTURE_PRIORITY,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
var computeDuration = (remaining, velocity) => {
  return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};
var createSheetEnterAnimation = (opts) => {
  const {
    currentBreakpoint,
    backdropBreakpoint,
    expandToScroll
  } = opts;
  const shouldShowBackdrop = backdropBreakpoint === void 0 || backdropBreakpoint < currentBreakpoint;
  const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : "0";
  const backdropAnimation = createAnimation("backdropAnimation").fromTo("opacity", 0, initialBackdrop);
  if (shouldShowBackdrop) {
    backdropAnimation.beforeStyles({
      "pointer-events": "none"
    }).afterClearStyles(["pointer-events"]);
  }
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    transform: "translateY(100%)"
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }]);
  const contentAnimation = !expandToScroll ? createAnimation("contentAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    maxHeight: `${(1 - currentBreakpoint) * 100}%`
  }, {
    offset: 1,
    opacity: 1,
    maxHeight: `${currentBreakpoint * 100}%`
  }]) : void 0;
  return {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  };
};
var createSheetLeaveAnimation = (opts) => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
  const defaultBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: 1,
    opacity: 0
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const backdropAnimation = createAnimation("backdropAnimation").keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(100%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};
var createEnterAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(100vh)", "translateY(0vh)");
  return {
    backdropAnimation,
    wrapperAnimation,
    contentAnimation: void 0
  };
};
var iosEnterAnimation = (baseEl, opts) => {
  const {
    presentingEl,
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
    opacity: 1
  });
  !expandToScroll && (contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.addElement(baseEl.querySelector(".ion-page")));
  const baseAnimation = createAnimation("entering-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([wrapperAnimation]).beforeAddWrite(() => {
    if (expandToScroll) {
      return;
    }
    const ionFooter = baseEl.querySelector("ion-footer");
    const ionFooterAlreadyAppended = baseEl.shadowRoot.querySelector("ion-footer");
    if (ionFooter && !ionFooterAlreadyAppended) {
      const footerHeight = ionFooter.clientHeight;
      const clonedFooter = ionFooter.cloneNode(true);
      baseEl.shadowRoot.appendChild(clonedFooter);
      ionFooter.style.setProperty("display", "none");
      ionFooter.setAttribute("aria-hidden", "true");
      const page = baseEl.querySelector(".ion-page");
      page.style.setProperty("padding-bottom", `${footerHeight}px`);
    }
  });
  if (contentAnimation) {
    baseAnimation.addAnimation(contentAnimation);
  }
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeStyles({
      transform: "translateY(0)",
      "transform-origin": "top center",
      overflow: "hidden"
    });
    const bodyEl = document.body;
    if (isMobile) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.afterStyles({
        transform: finalTransform
      }).beforeAddWrite(() => bodyEl.style.setProperty("background-color", "black")).addElement(presentingEl).keyframes([{
        offset: 0,
        filter: "contrast(1)",
        transform: "translateY(0px) scale(1)",
        borderRadius: "0px"
      }, {
        offset: 1,
        filter: "contrast(0.85)",
        transform: finalTransform,
        borderRadius: "10px 10px 0 0"
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "0", "1");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-wrapper")).keyframes([{
          offset: 0,
          filter: "contrast(1)",
          transform: "translateY(0) scale(1)"
        }, {
          offset: 1,
          filter: "contrast(0.85)",
          transform: finalTransform
        }]);
        const shadowAnimation = createAnimation().afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-shadow")).keyframes([{
          offset: 0,
          opacity: "1",
          transform: "translateY(0) scale(1)"
        }, {
          offset: 1,
          opacity: "0",
          transform: finalTransform
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
var createLeaveAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(0vh)", "translateY(100vh)");
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
var iosLeaveAnimation = (baseEl, opts, duration = 500) => {
  const {
    presentingEl,
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
    opacity: 1
  });
  const baseAnimation = createAnimation("leaving-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration).addAnimation(wrapperAnimation).beforeAddWrite(() => {
    if (expandToScroll) {
      return;
    }
    const ionFooter = baseEl.querySelector("ion-footer");
    if (ionFooter) {
      const clonedFooter = baseEl.shadowRoot.querySelector("ion-footer");
      ionFooter.style.removeProperty("display");
      ionFooter.removeAttribute("aria-hidden");
      clonedFooter.style.setProperty("display", "none");
      clonedFooter.setAttribute("aria-hidden", "true");
      const page = baseEl.querySelector(".ion-page");
      page.style.removeProperty("padding-bottom");
    }
  });
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((currentStep) => {
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty("overflow", "");
      const numModals = Array.from(bodyEl.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter((m) => m.presentingElement !== void 0).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty("background-color", "");
      }
    });
    const bodyEl = document.body;
    if (isMobile) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.addElement(presentingEl).keyframes([{
        offset: 0,
        filter: "contrast(0.85)",
        transform: finalTransform,
        borderRadius: "10px 10px 0 0"
      }, {
        offset: 1,
        filter: "contrast(1)",
        transform: "translateY(0px) scale(1)",
        borderRadius: "0px"
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "1", "0");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.addElement(presentingElRoot.querySelector(".modal-wrapper")).afterStyles({
          transform: "translate3d(0, 0, 0)"
        }).keyframes([{
          offset: 0,
          filter: "contrast(0.85)",
          transform: finalTransform
        }, {
          offset: 1,
          filter: "contrast(1)",
          transform: "translateY(0) scale(1)"
        }]);
        const shadowAnimation = createAnimation().addElement(presentingElRoot.querySelector(".modal-shadow")).afterStyles({
          transform: "translateY(0) scale(1)"
        }).keyframes([{
          offset: 0,
          opacity: "0",
          transform: finalTransform
        }, {
          offset: 1,
          opacity: "1",
          transform: "translateY(0) scale(1)"
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
var createEnterAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "translateY(40px)"
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(0px)`
  }]);
  return {
    backdropAnimation,
    wrapperAnimation,
    contentAnimation: void 0
  };
};
var mdEnterAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  expandToScroll && (contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.addElement(baseEl.querySelector(".ion-page")));
  const baseAnimation = createAnimation().addElement(baseEl).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([backdropAnimation, wrapperAnimation]).beforeAddWrite(() => {
    if (expandToScroll) {
      return;
    }
    const ionFooter = baseEl.querySelector("ion-footer");
    const ionFooterAlreadyAppended = baseEl.shadowRoot.querySelector("ion-footer");
    if (ionFooter && !ionFooterAlreadyAppended) {
      const footerHeight = ionFooter.clientHeight;
      const clonedFooter = ionFooter.cloneNode(true);
      baseEl.shadowRoot.appendChild(clonedFooter);
      ionFooter.style.setProperty("display", "none");
      ionFooter.setAttribute("aria-hidden", "true");
      const page = baseEl.querySelector(".ion-page");
      page.style.setProperty("padding-bottom", `${footerHeight}px`);
    }
  });
  if (contentAnimation) {
    baseAnimation.addAnimation(contentAnimation);
  }
  return baseAnimation;
};
var createLeaveAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    opacity: 0,
    transform: "translateY(40px)"
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
var mdLeaveAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  const baseAnimation = createAnimation().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([backdropAnimation, wrapperAnimation]).beforeAddWrite(() => {
    if (expandToScroll) {
      return;
    }
    const ionFooter = baseEl.querySelector("ion-footer");
    if (ionFooter) {
      const clonedFooter = baseEl.shadowRoot.querySelector("ion-footer");
      ionFooter.style.removeProperty("display");
      ionFooter.removeAttribute("aria-hidden");
      clonedFooter.style.setProperty("display", "none");
      clonedFooter.setAttribute("aria-hidden", "true");
      const page = baseEl.querySelector(".ion-page");
      page.style.removeProperty("padding-bottom");
    }
  });
  return baseAnimation;
};
var createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation, breakpoints = [], expandToScroll, getCurrentBreakpoint, onDismiss, onBreakpointChange) => {
  const defaultBackdrop = [{
    offset: 0,
    opacity: "var(--backdrop-opacity)"
  }, {
    offset: 1,
    opacity: 0.01
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: "var(--backdrop-opacity)"
  }, {
    offset: 1 - backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const SheetDefaults = {
    WRAPPER_KEYFRAMES: [{
      offset: 0,
      transform: "translateY(0%)"
    }, {
      offset: 1,
      transform: "translateY(100%)"
    }],
    BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop,
    CONTENT_KEYFRAMES: [{
      offset: 0,
      maxHeight: "100%"
    }, {
      offset: 1,
      maxHeight: "0%"
    }]
  };
  const contentEl = baseEl.querySelector("ion-content");
  const height = wrapperEl.clientHeight;
  let currentBreakpoint = initialBreakpoint;
  let offset = 0;
  let canDismissBlocksGesture = false;
  let cachedScrollEl = null;
  const canDismissMaxStep = 0.95;
  const maxBreakpoint = breakpoints[breakpoints.length - 1];
  const minBreakpoint = breakpoints[0];
  const wrapperAnimation = animation.childAnimations.find((ani) => ani.id === "wrapperAnimation");
  const backdropAnimation = animation.childAnimations.find((ani) => ani.id === "backdropAnimation");
  const contentAnimation = animation.childAnimations.find((ani) => ani.id === "contentAnimation");
  const enableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "auto");
    backdropEl.style.setProperty("pointer-events", "auto");
    baseEl.classList.remove(FOCUS_TRAP_DISABLE_CLASS);
  };
  const disableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "none");
    backdropEl.style.setProperty("pointer-events", "none");
    baseEl.classList.add(FOCUS_TRAP_DISABLE_CLASS);
  };
  const swapFooterVisibility = (footer) => {
    const originalFooter = baseEl.querySelector("ion-footer");
    if (!originalFooter) {
      return;
    }
    const clonedFooter = wrapperEl.nextElementSibling;
    const footerToHide = footer === "original" ? clonedFooter : originalFooter;
    const footerToShow = footer === "original" ? originalFooter : clonedFooter;
    footerToShow.style.removeProperty("display");
    footerToShow.removeAttribute("aria-hidden");
    const page = baseEl.querySelector(".ion-page");
    if (footer === "original") {
      page.style.removeProperty("padding-bottom");
    } else {
      const pagePadding = footerToShow.clientHeight;
      page.style.setProperty("padding-bottom", `${pagePadding}px`);
    }
    footerToHide.style.setProperty("display", "none");
    footerToHide.setAttribute("aria-hidden", "true");
  };
  if (wrapperAnimation && backdropAnimation) {
    wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
    backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
    contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.keyframes([...SheetDefaults.CONTENT_KEYFRAMES]);
    animation.progressStart(true, 1 - currentBreakpoint);
    const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
    if (shouldEnableBackdrop) {
      enableBackdrop();
    } else {
      disableBackdrop();
    }
  }
  if (contentEl && currentBreakpoint !== maxBreakpoint && expandToScroll) {
    contentEl.scrollY = false;
  }
  const canStart = (detail) => {
    const contentEl2 = findClosestIonContent(detail.event.target);
    currentBreakpoint = getCurrentBreakpoint();
    if (!expandToScroll && contentEl2) {
      const scrollEl = isIonContent(contentEl2) ? getElementRoot(contentEl2).querySelector(".inner-scroll") : contentEl2;
      return scrollEl.scrollTop === 0;
    }
    if (currentBreakpoint === 1 && contentEl2) {
      const scrollEl = isIonContent(contentEl2) ? getElementRoot(contentEl2).querySelector(".inner-scroll") : contentEl2;
      const hasRefresherInContent = !!contentEl2.querySelector("ion-refresher");
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    return true;
  };
  const onStart = (detail) => {
    canDismissBlocksGesture = baseEl.canDismiss !== void 0 && baseEl.canDismiss !== true && minBreakpoint === 0;
    if (!expandToScroll) {
      const targetEl = findClosestIonContent(detail.event.target);
      cachedScrollEl = targetEl && isIonContent(targetEl) ? getElementRoot(targetEl).querySelector(".inner-scroll") : targetEl;
    }
    if (!expandToScroll) {
      swapFooterVisibility("original");
    }
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    raf(() => {
      baseEl.focus();
    });
    animation.progressStart(true, 1 - currentBreakpoint);
  };
  const onMove = (detail) => {
    if (!expandToScroll && detail.deltaY <= 0 && cachedScrollEl) {
      return;
    }
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    const initialStep = 1 - currentBreakpoint;
    const secondToLastBreakpoint = breakpoints.length > 1 ? 1 - breakpoints[1] : void 0;
    const step = initialStep + detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = secondToLastBreakpoint !== void 0 && step >= secondToLastBreakpoint && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss && secondToLastBreakpoint !== void 0 ? secondToLastBreakpoint + calculateSpringStep((step - secondToLastBreakpoint) / (maxStep - secondToLastBreakpoint)) : step;
    offset = clamp(1e-4, processedStep, maxStep);
    animation.progressStep(offset);
  };
  const onEnd = (detail) => {
    if (!expandToScroll && detail.deltaY <= 0 && cachedScrollEl && cachedScrollEl.scrollTop > 0) {
      return;
    }
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 350) / height;
    const diff = currentBreakpoint - threshold;
    const closest = breakpoints.reduce((a, b) => {
      return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
    });
    moveSheetToBreakpoint({
      breakpoint: closest,
      breakpointOffset: offset,
      canDismiss: canDismissBlocksGesture,
      /**
       * The swipe is user-driven, so we should
       * always animate when the gesture ends.
       */
      animated: true
    });
  };
  const moveSheetToBreakpoint = (options) => {
    const {
      breakpoint,
      canDismiss,
      breakpointOffset,
      animated
    } = options;
    const shouldPreventDismiss = canDismiss && breakpoint === 0;
    const snapToBreakpoint = shouldPreventDismiss ? currentBreakpoint : breakpoint;
    const shouldRemainOpen = snapToBreakpoint !== 0;
    currentBreakpoint = 0;
    if (wrapperAnimation && backdropAnimation) {
      wrapperAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${breakpointOffset * 100}%)`
      }, {
        offset: 1,
        transform: `translateY(${(1 - snapToBreakpoint) * 100}%)`
      }]);
      backdropAnimation.keyframes([{
        offset: 0,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - breakpointOffset, backdropBreakpoint)})`
      }, {
        offset: 1,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(snapToBreakpoint, backdropBreakpoint)})`
      }]);
      if (contentAnimation) {
        contentAnimation.keyframes([{
          offset: 0,
          maxHeight: `${(1 - breakpointOffset) * 100}%`
        }, {
          offset: 1,
          maxHeight: `${snapToBreakpoint * 100}%`
        }]);
      }
      animation.progressStep(0);
    }
    gesture.enable(false);
    if (!expandToScroll && shouldRemainOpen) {
      swapFooterVisibility("cloned");
    }
    if (shouldPreventDismiss) {
      handleCanDismiss(baseEl, animation);
    } else if (!shouldRemainOpen) {
      onDismiss();
    }
    if (contentEl && (snapToBreakpoint === breakpoints[breakpoints.length - 1] || !expandToScroll)) {
      contentEl.scrollY = true;
    }
    return new Promise((resolve) => {
      animation.onFinish(() => {
        if (shouldRemainOpen) {
          if (wrapperAnimation && backdropAnimation) {
            raf(() => {
              wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
              backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
              contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.keyframes([...SheetDefaults.CONTENT_KEYFRAMES]);
              animation.progressStart(true, 1 - snapToBreakpoint);
              currentBreakpoint = snapToBreakpoint;
              onBreakpointChange(currentBreakpoint);
              const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
              if (shouldEnableBackdrop) {
                enableBackdrop();
              } else {
                disableBackdrop();
              }
              gesture.enable(true);
              resolve();
            });
          } else {
            gesture.enable(true);
            resolve();
          }
        } else {
          resolve();
        }
      }, {
        oneTimeCallback: true
      }).progressEnd(1, 0, animated ? 500 : 0);
    });
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "modalSheet",
    gesturePriority: 40,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return {
    gesture,
    moveSheetToBreakpoint
  };
};
var modalIosCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer ion-toolbar:first-of-type{padding-top:6px}';
var IonModalIosStyle0 = modalIosCss;
var modalMdCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}';
var IonModalMdStyle0 = modalMdCss;
var Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionModalDidPresent", 7);
    this.willPresent = createEvent(this, "ionModalWillPresent", 7);
    this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
    this.ionBreakpointDidChange = createEvent(this, "ionBreakpointDidChange", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.ionMount = createEvent(this, "ionMount", 7);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.coreDelegate = CoreDelegate();
    this.isSheetModal = false;
    this.inheritedAttributes = {};
    this.inline = false;
    this.gestureAnimationDismissing = false;
    this.onHandleClick = () => {
      const {
        sheetTransition,
        handleBehavior
      } = this;
      if (handleBehavior !== "cycle" || sheetTransition !== void 0) {
        return;
      }
      this.moveToNextBreakpoint();
    };
    this.onBackdropTap = () => {
      const {
        sheetTransition
      } = this;
      if (sheetTransition !== void 0) {
        return;
      }
      this.dismiss(void 0, BACKDROP);
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
    this.presented = false;
    this.hasController = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.breakpoints = void 0;
    this.expandToScroll = true;
    this.initialBreakpoint = void 0;
    this.backdropBreakpoint = 0;
    this.handle = void 0;
    this.handleBehavior = "none";
    this.component = void 0;
    this.componentProps = void 0;
    this.cssClass = void 0;
    this.backdropDismiss = true;
    this.showBackdrop = true;
    this.animated = true;
    this.presentingElement = void 0;
    this.htmlAttributes = void 0;
    this.isOpen = false;
    this.trigger = void 0;
    this.keepContentsMounted = false;
    this.focusTrap = true;
    this.canDismiss = true;
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
  breakpointsChanged(breakpoints) {
    if (breakpoints !== void 0) {
      this.sortedBreakpoints = breakpoints.sort((a, b) => a - b);
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    prepareOverlay(el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    const {
      breakpoints,
      initialBreakpoint,
      el,
      htmlAttributes
    } = this;
    const isSheetModal = this.isSheetModal = breakpoints !== void 0 && initialBreakpoint !== void 0;
    const attributesToInherit = ["aria-label", "role"];
    this.inheritedAttributes = inheritAttributes(el, attributesToInherit);
    if (htmlAttributes !== void 0) {
      attributesToInherit.forEach((attribute) => {
        const attributeValue = htmlAttributes[attribute];
        if (attributeValue) {
          this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
            [attribute]: htmlAttributes[attribute]
          });
          delete htmlAttributes[attribute];
        }
      });
    }
    if (isSheetModal) {
      this.currentBreakpoint = this.initialBreakpoint;
    }
    if (breakpoints !== void 0 && initialBreakpoint !== void 0 && !breakpoints.includes(initialBreakpoint)) {
      printIonWarning("Your breakpoints array must include the initialBreakpoint value.");
    }
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.breakpointsChanged(this.breakpoints);
    this.triggerChanged();
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return {
      inline,
      delegate
    };
  }
  /**
   * Determines whether or not the
   * modal is allowed to dismiss based
   * on the state of the canDismiss prop.
   */
  checkCanDismiss(data, role) {
    return __async(this, null, function* () {
      const {
        canDismiss
      } = this;
      if (typeof canDismiss === "function") {
        return canDismiss(data, role);
      }
      return canDismiss;
    });
  }
  /**
   * Present the modal overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.presented) {
        unlock();
        return;
      }
      const {
        presentingElement,
        el
      } = this;
      this.currentBreakpoint = this.initialBreakpoint;
      const {
        inline,
        delegate
      } = this.getDelegate(true);
      this.ionMount.emit();
      this.usersElement = yield attachComponent(delegate, el, this.component, ["ion-page"], this.componentProps, inline);
      if (hasLazyBuild(el)) {
        yield deepReady(this.usersElement);
      } else if (!this.keepContentsMounted) {
        yield waitForMount();
      }
      writeTask(() => this.el.classList.add("show-modal"));
      const hasCardModal = presentingElement !== void 0;
      if (hasCardModal && getIonMode(this) === "ios") {
        this.statusBarStyle = yield StatusBar.getStyle();
        setCardStatusBarDark();
      }
      yield present(this, "modalEnter", iosEnterAnimation, mdEnterAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: this.initialBreakpoint,
        backdropBreakpoint: this.backdropBreakpoint,
        expandToScroll: this.expandToScroll
      });
      if (typeof window !== "undefined") {
        this.keyboardOpenCallback = () => {
          if (this.gesture) {
            this.gesture.enable(false);
            raf(() => {
              if (this.gesture) {
                this.gesture.enable(true);
              }
            });
          }
        };
        window.addEventListener(KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
      }
      if (this.isSheetModal) {
        this.initSheetGesture();
      } else if (hasCardModal) {
        this.initSwipeToClose();
      }
      unlock();
    });
  }
  initSwipeToClose() {
    var _a;
    if (getIonMode(this) !== "ios") {
      return;
    }
    const {
      el
    } = this;
    const animationBuilder = this.leaveAnimation || config.get("modalLeave", iosLeaveAnimation);
    const ani = this.animation = animationBuilder(el, {
      presentingEl: this.presentingElement,
      expandToScroll: this.expandToScroll
    });
    const contentEl = findIonContent(el);
    if (!contentEl) {
      printIonContentErrorMsg(el);
      return;
    }
    const statusBarStyle = (_a = this.statusBarStyle) !== null && _a !== void 0 ? _a : Style.Default;
    this.gesture = createSwipeToCloseGesture(el, ani, statusBarStyle, () => {
      this.gestureAnimationDismissing = true;
      setCardStatusBarDefault(this.statusBarStyle);
      this.animation.onFinish(() => __async(this, null, function* () {
        yield this.dismiss(void 0, GESTURE);
        this.gestureAnimationDismissing = false;
      }));
    });
    this.gesture.enable(true);
  }
  initSheetGesture() {
    const {
      wrapperEl,
      initialBreakpoint,
      backdropBreakpoint
    } = this;
    if (!wrapperEl || initialBreakpoint === void 0) {
      return;
    }
    const animationBuilder = this.enterAnimation || config.get("modalEnter", iosEnterAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: initialBreakpoint,
      backdropBreakpoint,
      expandToScroll: this.expandToScroll
    });
    ani.progressStart(true, 1);
    const {
      gesture,
      moveSheetToBreakpoint
    } = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, this.sortedBreakpoints, this.expandToScroll, () => {
      var _a;
      return (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : 0;
    }, () => this.sheetOnDismiss(), (breakpoint) => {
      if (this.currentBreakpoint !== breakpoint) {
        this.currentBreakpoint = breakpoint;
        this.ionBreakpointDidChange.emit({
          breakpoint
        });
      }
    });
    this.gesture = gesture;
    this.moveSheetToBreakpoint = moveSheetToBreakpoint;
    this.gesture.enable(true);
  }
  sheetOnDismiss() {
    this.gestureAnimationDismissing = true;
    this.animation.onFinish(() => __async(this, null, function* () {
      this.currentBreakpoint = 0;
      this.ionBreakpointDidChange.emit({
        breakpoint: this.currentBreakpoint
      });
      yield this.dismiss(void 0, GESTURE);
      this.gestureAnimationDismissing = false;
    }));
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      var _a;
      if (this.gestureAnimationDismissing && role !== GESTURE) {
        return false;
      }
      const unlock = yield this.lockController.lock();
      if (role !== "handler" && !(yield this.checkCanDismiss(data, role))) {
        unlock();
        return false;
      }
      const {
        presentingElement
      } = this;
      const hasCardModal = presentingElement !== void 0;
      if (hasCardModal && getIonMode(this) === "ios") {
        setCardStatusBarDefault(this.statusBarStyle);
      }
      if (typeof window !== "undefined" && this.keyboardOpenCallback) {
        window.removeEventListener(KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
        this.keyboardOpenCallback = void 0;
      }
      const dismissed = yield dismiss(this, data, role, "modalLeave", iosLeaveAnimation, mdLeaveAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : this.initialBreakpoint,
        backdropBreakpoint: this.backdropBreakpoint,
        expandToScroll: this.expandToScroll
      });
      if (dismissed) {
        const {
          delegate
        } = this.getDelegate();
        yield detachComponent(delegate, this.usersElement);
        writeTask(() => this.el.classList.remove("show-modal"));
        if (this.animation) {
          this.animation.destroy();
        }
        if (this.gesture) {
          this.gesture.destroy();
        }
      }
      this.currentBreakpoint = void 0;
      this.animation = void 0;
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionModalDidDismiss");
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionModalWillDismiss");
  }
  /**
   * Move a sheet style modal to a specific breakpoint. The breakpoint value must
   * be a value defined in your `breakpoints` array.
   */
  setCurrentBreakpoint(breakpoint) {
    return __async(this, null, function* () {
      if (!this.isSheetModal) {
        printIonWarning("setCurrentBreakpoint is only supported on sheet modals.");
        return;
      }
      if (!this.breakpoints.includes(breakpoint)) {
        printIonWarning(`Attempted to set invalid breakpoint value ${breakpoint}. Please double check that the breakpoint value is part of your defined breakpoints.`);
        return;
      }
      const {
        currentBreakpoint,
        moveSheetToBreakpoint,
        canDismiss,
        breakpoints,
        animated
      } = this;
      if (currentBreakpoint === breakpoint) {
        return;
      }
      if (moveSheetToBreakpoint) {
        this.sheetTransition = moveSheetToBreakpoint({
          breakpoint,
          breakpointOffset: 1 - currentBreakpoint,
          canDismiss: canDismiss !== void 0 && canDismiss !== true && breakpoints[0] === 0,
          animated
        });
        yield this.sheetTransition;
        this.sheetTransition = void 0;
      }
    });
  }
  /**
   * Returns the current breakpoint of a sheet style modal
   */
  getCurrentBreakpoint() {
    return __async(this, null, function* () {
      return this.currentBreakpoint;
    });
  }
  moveToNextBreakpoint() {
    return __async(this, null, function* () {
      const {
        breakpoints,
        currentBreakpoint
      } = this;
      if (!breakpoints || currentBreakpoint == null) {
        return false;
      }
      const allowedBreakpoints = breakpoints.filter((b) => b !== 0);
      const currentBreakpointIndex = allowedBreakpoints.indexOf(currentBreakpoint);
      const nextBreakpointIndex = (currentBreakpointIndex + 1) % allowedBreakpoints.length;
      const nextBreakpoint = allowedBreakpoints[nextBreakpointIndex];
      yield this.setCurrentBreakpoint(nextBreakpoint);
      return true;
    });
  }
  render() {
    const {
      handle,
      isSheetModal,
      presentingElement,
      htmlAttributes,
      handleBehavior,
      inheritedAttributes,
      focusTrap,
      expandToScroll
    } = this;
    const showHandle = handle !== false && isSheetModal;
    const mode = getIonMode(this);
    const isCardModal = presentingElement !== void 0 && mode === "ios";
    const isHandleCycle = handleBehavior === "cycle";
    return h(Host, Object.assign({
      key: "e661562f9e4126136cee337e4ab8ca69ac80faae",
      "no-router": true,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        ["modal-default"]: !isCardModal && !isSheetModal,
        [`modal-card`]: isCardModal,
        [`modal-sheet`]: isSheetModal,
        [`modal-no-expand-scroll`]: isSheetModal && !expandToScroll,
        "overlay-hidden": true,
        [FOCUS_TRAP_DISABLE_CLASS]: focusTrap === false
      }, getClassMap(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonModalDidPresent: this.onLifecycle,
      onIonModalWillPresent: this.onLifecycle,
      onIonModalWillDismiss: this.onLifecycle,
      onIonModalDidDismiss: this.onLifecycle
    }), h("ion-backdrop", {
      key: "9221692e0e111f99e80239ca44faaaed9b288425",
      ref: (el) => this.backdropEl = el,
      visible: this.showBackdrop,
      tappable: this.backdropDismiss,
      part: "backdrop"
    }), mode === "ios" && h("div", {
      key: "20def7088d31e5eb13c3f2404c514cd8b74cd966",
      class: "modal-shadow"
    }), h("div", Object.assign({
      key: "b11229330571d4ff7b9136dfdddcd7d759ada876",
      /*
        role and aria-modal must be used on the
        same element. They must also be set inside the
        shadow DOM otherwise ion-button will not be highlighted
        when using VoiceOver: https://bugs.webkit.org/show_bug.cgi?id=247134
      */
      role: "dialog"
    }, inheritedAttributes, {
      "aria-modal": "true",
      class: "modal-wrapper ion-overlay-wrapper",
      part: "content",
      ref: (el) => this.wrapperEl = el
    }), showHandle && h("button", {
      key: "95b2a62477dfbc063a91910f0d37357388cfd914",
      class: "modal-handle",
      // Prevents the handle from receiving keyboard focus when it does not cycle
      tabIndex: !isHandleCycle ? -1 : 0,
      "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
      onClick: isHandleCycle ? this.onHandleClick : void 0,
      part: "handle"
    }), h("slot", {
      key: "fba17dfdbdffbfd8992f473f633d172c5124dc19"
    })));
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
var LIFECYCLE_MAP = {
  ionModalDidPresent: "ionViewDidEnter",
  ionModalWillPresent: "ionViewWillEnter",
  ionModalWillDismiss: "ionViewWillLeave",
  ionModalDidDismiss: "ionViewDidLeave"
};
Modal.style = {
  ios: IonModalIosStyle0,
  md: IonModalMdStyle0
};
export {
  Modal as ion_modal
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-modal.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbW9kYWwuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgdyBhcyB3cml0ZVRhc2ssIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgaSBhcyBpc0lvbkNvbnRlbnQsIGQgYXMgZGlzYWJsZUNvbnRlbnRTY3JvbGxZLCByIGFzIHJlc2V0Q29udGVudFNjcm9sbFksIGEgYXMgZmluZElvbkNvbnRlbnQsIHAgYXMgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgfSBmcm9tICcuL2luZGV4LWU5MTllMzUzLmpzJztcbmltcG9ydCB7IEMgYXMgQ29yZURlbGVnYXRlLCBhIGFzIGF0dGFjaENvbXBvbmVudCwgZCBhcyBkZXRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS0yZWVhMTc2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEVsZW1lbnRSb290LCBqIGFzIGNsYW1wLCByIGFzIHJhZiwgaCBhcyBpbmhlcml0QXR0cmlidXRlcywgayBhcyBoYXNMYXp5QnVpbGQgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVMb2NrQ29udHJvbGxlciB9IGZyb20gJy4vbG9jay1jb250cm9sbGVyLTMxNjkyOGJlLmpzJztcbmltcG9ydCB7IHAgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENhcGFjaXRvciB9IGZyb20gJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcbmltcG9ydCB7IEcgYXMgR0VTVFVSRSwgTyBhcyBPVkVSTEFZX0dFU1RVUkVfUFJJT1JJVFksIEYgYXMgRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTLCBlIGFzIGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyLCBCIGFzIEJBQ0tEUk9QLCBqIGFzIHByZXBhcmVPdmVybGF5LCBrIGFzIHNldE92ZXJsYXlJZCwgZiBhcyBwcmVzZW50LCBnIGFzIGRpc21pc3MsIGggYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLTQxYTVkNTFiLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGUgYXMgZGVlcFJlYWR5LCB3IGFzIHdhaXRGb3JNb3VudCB9IGZyb20gJy4vaW5kZXgtZWNiNTViOGQuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlLCBjIGFzIGNvbmZpZyB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IEtFWUJPQVJEX0RJRF9PUEVOIH0gZnJvbSAnLi9rZXlib2FyZC01MjI3OGJkNy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWVhYjVhNGNhLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gfSBmcm9tICcuL2N1YmljLWJlemllci1mZTIwODNkYy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zOTc4MjY0Mi5qcyc7XG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0ICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMnO1xuaW1wb3J0ICcuL2tleWJvYXJkLTczMTc1ZTI0LmpzJztcbnZhciBTdHlsZTtcbihmdW5jdGlvbiAoU3R5bGUpIHtcbiAgU3R5bGVbXCJEYXJrXCJdID0gXCJEQVJLXCI7XG4gIFN0eWxlW1wiTGlnaHRcIl0gPSBcIkxJR0hUXCI7XG4gIFN0eWxlW1wiRGVmYXVsdFwiXSA9IFwiREVGQVVMVFwiO1xufSkoU3R5bGUgfHwgKFN0eWxlID0ge30pKTtcbmNvbnN0IFN0YXR1c0JhciA9IHtcbiAgZ2V0RW5naW5lKCkge1xuICAgIGNvbnN0IGNhcGFjaXRvciA9IGdldENhcGFjaXRvcigpO1xuICAgIGlmIChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNQbHVnaW5BdmFpbGFibGUoJ1N0YXR1c0JhcicpKSB7XG4gICAgICByZXR1cm4gY2FwYWNpdG9yLlBsdWdpbnMuU3RhdHVzQmFyO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICBzZXRTdHlsZShvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmdpbmUuc2V0U3R5bGUob3B0aW9ucyk7XG4gIH0sXG4gIGdldFN0eWxlOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuIFN0eWxlLkRlZmF1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlXG4gICAgfSA9IGF3YWl0IGVuZ2luZS5nZXRJbmZvKCk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG4vKipcbiAqIFVzZSB5ID0gbXggKyBiIHRvXG4gKiBmaWd1cmUgb3V0IHRoZSBiYWNrZHJvcCB2YWx1ZVxuICogYXQgYSBwYXJ0aWN1bGFyIHggY29vcmRpbmF0ZS4gVGhpc1xuICogaXMgdXNlZnVsIHdoZW4gdGhlIGJhY2tkcm9wIGRvZXNcbiAqIG5vdCBiZWdpbiB0byBmYWRlIGluIHVudGlsIGFmdGVyXG4gKiB0aGUgMCBicmVha3BvaW50LlxuICovXG5jb25zdCBnZXRCYWNrZHJvcFZhbHVlRm9yU2hlZXQgPSAoeCwgYmFja2Ryb3BCcmVha3BvaW50KSA9PiB7XG4gIC8qKlxuICAgKiBXZSB3aWxsIHVzZSB0aGVzZSBwb2ludHM6XG4gICAqIChiYWNrZHJvcEJyZWFrcG9pbnQsIDApXG4gICAqIChtYXhCcmVha3BvaW50LCAxKVxuICAgKiBXZSBrbm93IHRoYXQgYXQgdGhlIGJlZ2lubmluZyBicmVha3BvaW50LFxuICAgKiB0aGUgYmFja2Ryb3Agd2lsbCBiZSBoaWRkZW4uIFdlIGFsc29cbiAgICoga25vdyB0aGF0IGF0IHRoZSBtYXhCcmVha3BvaW50LCB0aGUgYmFja2Ryb3BcbiAgICogbXVzdCBiZSBmdWxseSB2aXNpYmxlLiBtYXhCcmVha3BvaW50IHNob3VsZFxuICAgKiBhbHdheXMgYmUgMSBldmVuIGlmIHRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIG9mIHRoZSBicmVha3BvaW50cyBhcnJheSBpcyBub3QgMSBzaW5jZVxuICAgKiB0aGUgYW5pbWF0aW9uIHJ1bnMgZnJvbSBhIHByb2dyZXNzIG9mIDBcbiAgICogdG8gYSBwcm9ncmVzcyBvZiAxLlxuICAgKiBtID0gKHkyIC0geTEpIC8gKHgyIC0geDEpXG4gICAqXG4gICAqIFRoaXMgaXMgc2ltcGxpZmllZCBmcm9tOlxuICAgKiBtID0gKDEgLSAwKSAvIChtYXhCcmVha3BvaW50IC0gYmFja2Ryb3BCcmVha3BvaW50KVxuICAgKlxuICAgKiBJZiB0aGUgYmFja2Ryb3BCcmVha3BvaW50IGlzIDEsIHdlIHJldHVybiAwIGFzIHRoZVxuICAgKiBiYWNrZHJvcCBpcyBjb21wbGV0ZWx5IGhpZGRlbi5cbiAgICpcbiAgICovXG4gIGlmIChiYWNrZHJvcEJyZWFrcG9pbnQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBzbG9wZSA9IDEgLyAoMSAtIGJhY2tkcm9wQnJlYWtwb2ludCk7XG4gIC8qKlxuICAgKiBGcm9tIGhlcmUsIGNvbXB1dGUgYiB3aGljaCBpc1xuICAgKiB0aGUgYmFja2Ryb3Agb3BhY2l0eSBpZiB0aGUgb2Zmc2V0XG4gICAqIGlzIDAuIElmIHRoZSBiYWNrZHJvcCBkb2VzIG5vdFxuICAgKiBiZWdpbiB0byBmYWRlIGluIHVudGlsIGFmdGVyIHRoZVxuICAgKiAwIGJyZWFrcG9pbnQsIHRoaXMgYiB2YWx1ZSB3aWxsIGJlXG4gICAqIG5lZ2F0aXZlLiBUaGlzIGlzIGZpbmUgYXMgd2UgbmV2ZXIgcGFzc1xuICAgKiBiIGRpcmVjdGx5IGludG8gdGhlIGFuaW1hdGlvbiBrZXlmcmFtZXMuXG4gICAqIGIgPSB5IC0gbXhcbiAgICogVXNlIGEga25vd24gcG9pbnQ6IChiYWNrZHJvcEJyZWFrcG9pbnQsIDApXG4gICAqIFRoaXMgaXMgc2ltcGxpZmllZCBmcm9tOlxuICAgKiBiID0gMCAtIChiYWNrZHJvcEJyZWFrcG9pbnQgKiBzbG9wZSlcbiAgICovXG4gIGNvbnN0IGIgPSAtKGJhY2tkcm9wQnJlYWtwb2ludCAqIHNsb3BlKTtcbiAgLyoqXG4gICAqIEZpbmFsbHksIHdlIGNhbiBub3cgZGV0ZXJtaW5lIHRoZVxuICAgKiBiYWNrZHJvcCBvZmZzZXQgZ2l2ZW4gYW4gYXJiaXRyYXJ5XG4gICAqIGdlc3R1cmUgb2Zmc2V0LlxuICAgKi9cbiAgcmV0dXJuIHggKiBzbG9wZSArIGI7XG59O1xuLyoqXG4gKiBUaGUgdGFibGV0L2Rlc2t0b3AgY2FyZCBtb2RhbCBhY3RpdmF0ZXNcbiAqIHdoZW4gdGhlIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjguXG4gKiBBdCB0aGF0IHBvaW50LCB0aGUgcHJlc2VudGluZyBlbGVtZW50XG4gKiBpcyBub3QgdHJhbnNmb3JtZWQsIHNvIHdlIGRvIG5vdCBuZWVkIHRvXG4gKiBhZGp1c3QgdGhlIHN0YXR1cyBiYXIgY29sb3IuXG4gKlxuICovXG5jb25zdCBzZXRDYXJkU3RhdHVzQmFyRGFyayA9ICgpID0+IHtcbiAgaWYgKCF3aW4gfHwgd2luLmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFN0YXR1c0Jhci5zZXRTdHlsZSh7XG4gICAgc3R5bGU6IFN0eWxlLkRhcmtcbiAgfSk7XG59O1xuY29uc3Qgc2V0Q2FyZFN0YXR1c0JhckRlZmF1bHQgPSAoZGVmYXVsdFN0eWxlID0gU3R5bGUuRGVmYXVsdCkgPT4ge1xuICBpZiAoIXdpbiB8fCB3aW4uaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgU3RhdHVzQmFyLnNldFN0eWxlKHtcbiAgICBzdHlsZTogZGVmYXVsdFN0eWxlXG4gIH0pO1xufTtcbmNvbnN0IGhhbmRsZUNhbkRpc21pc3MgPSBhc3luYyAoZWwsIGFuaW1hdGlvbikgPT4ge1xuICAvKipcbiAgICogSWYgY2FuRGlzbWlzcyBpcyBub3QgYSBmdW5jdGlvblxuICAgKiB0aGVuIHdlIGNhbiByZXR1cm4gZWFybHkuIElmIGNhbkRpc21pc3MgaXMgYHRydWVgLFxuICAgKiB0aGVuIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlIGlzIGBmYWxzZWAgYXMgY2FuRGlzbWlzc1xuICAgKiB3aWxsIG5ldmVyIGludGVycnVwdCB0aGUgZ2VzdHVyZS4gQXMgYSByZXN1bHQsXG4gICAqIHRoaXMgY29kZSBibG9jayBpcyBuZXZlciByZWFjaGVkLiBJZiBjYW5EaXNtaXNzIGlzIGBmYWxzZWAsXG4gICAqIHRoZW4gd2UgbmV2ZXIgZGlzbWlzcy5cbiAgICovXG4gIGlmICh0eXBlb2YgZWwuY2FuRGlzbWlzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUnVuIHRoZSBjYW5EaXNtaXNzIGNhbGxiYWNrLlxuICAgKiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsXG4gICAqIHRoZW4gd2UgY2FuIHByb2NlZWQgd2l0aCBkaXNtaXNzLlxuICAgKi9cbiAgY29uc3Qgc2hvdWxkRGlzbWlzcyA9IGF3YWl0IGVsLmNhbkRpc21pc3ModW5kZWZpbmVkLCBHRVNUVVJFKTtcbiAgaWYgKCFzaG91bGREaXNtaXNzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBJZiBjYW5EaXNtaXNzIHJlc29sdmVkIGFmdGVyIHRoZSBzbmFwXG4gICAqIGJhY2sgYW5pbWF0aW9uIGZpbmlzaGVkLCB3ZSBjYW5cbiAgICogZGlzbWlzcyBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogSWYgY2FuRGlzbWlzcyByZXNvbHZlZCBiZWZvcmUgdGhlIHNuYXBcbiAgICogYmFjayBhbmltYXRpb24gZmluaXNoZWQsIHdlIG5lZWQgdG9cbiAgICogd2FpdCB1bnRpbCB0aGUgc25hcCBiYWNrIGFuaW1hdGlvbiBpc1xuICAgKiBkb25lIGJlZm9yZSBkaXNtaXNzaW5nLlxuICAgKi9cbiAgaWYgKGFuaW1hdGlvbi5pc1J1bm5pbmcoKSkge1xuICAgIGFuaW1hdGlvbi5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICBlbC5kaXNtaXNzKHVuZGVmaW5lZCwgJ2hhbmRsZXInKTtcbiAgICB9LCB7XG4gICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5kaXNtaXNzKHVuZGVmaW5lZCwgJ2hhbmRsZXInKTtcbiAgfVxufTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXRzIHVzIHNpbXVsYXRlIGEgcmVhbGlzdGljIHNwcmluZy1saWtlIGFuaW1hdGlvblxuICogd2hlbiBzd2lwaW5nIGRvd24gb24gdGhlIG1vZGFsLlxuICogVGhlcmUgYXJlIHR3byBmb3JjZXMgdGhhdCB3ZSBuZWVkIHRvIHVzZSB0byBjb21wdXRlIHRoZSBzcHJpbmcgcGh5c2ljczpcbiAqXG4gKiAxLiBTdGlmZm5lc3MsIGs6IFRoaXMgaXMgYSBtZWFzdXJlIG9mIHJlc2lzdGFuY2UgYXBwbGllZCBhIHNwcmluZy5cbiAqIDIuIERhbXBlbmluZywgYzogVGhpcyB2YWx1ZSBoYXMgdGhlIGVmZmVjdCBvZiByZWR1Y2luZyBvciBwcmV2ZW50aW5nIG9zY2lsbGF0aW9uLlxuICpcbiAqIFVzaW5nIHRoZXNlIHR3byB2YWx1ZXMsIHdlIGNhbiBjYWxjdWxhdGUgdGhlIFNwcmluZyBGb3JjZSBhbmQgdGhlIERhbXBlbmluZyBGb3JjZVxuICogdG8gY29tcHV0ZSB0aGUgdG90YWwgZm9yY2UgYXBwbGllZCB0byBhIHNwcmluZy5cbiAqXG4gKiBTcHJpbmcgRm9yY2U6IFRoaXMgZm9yY2UgcHVsbHMgYSBzcHJpbmcgYmFjayBpbnRvIGl0cyBlcXVpbGlicml1bSBwb3NpdGlvbi5cbiAqIEhvb2tlJ3MgTGF3IHRlbGxzIHVzIHRoYXQgdGhhdCBzcHJpbmcgZm9yY2UgKEZTKSA9IGtYLlxuICogayBpcyB0aGUgc3RpZmZuZXNzIG9mIGEgc3ByaW5nLCBhbmQgWCBpcyB0aGUgZGlzcGxhY2VtZW50IG9mIHRoZSBzcHJpbmcgZnJvbSBpdHNcbiAqIGVxdWlsaWJyaXVtIHBvc2l0aW9uLiBJbiB0aGlzIGNhc2UsIGl0IGlzIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIGZyZWUgZW5kXG4gKiBvZiBhIHNwcmluZyB3YXMgZGlzcGxhY2VkIChzdHJldGNoZWQvcHVzaGVkKSBmcm9tIGl0cyBcInJlbGF4ZWRcIiBwb3NpdGlvbi5cbiAqXG4gKiBEYW1wZW5pbmcgRm9yY2U6IFRoaXMgZm9yY2Ugc2xvd3MgZG93biBtb3Rpb24uIFdpdGhvdXQgaXQsIGEgc3ByaW5nIHdvdWxkIG9zY2lsbGF0ZSBmb3JldmVyLlxuICogVGhlIGRhbXBlbmluZyBmb3JjZSwgRkQsIGNhbiBiZSBmb3VuZCB2aWEgdGhpcyBmb3JtdWxhOiBGRCA9IC1jdlxuICogd2hlcmUgYyB0aGUgZGFtcGVuaW5nIHZhbHVlIGFuZCB2IGlzIHZlbG9jaXR5LlxuICpcbiAqIFRoZXJlZm9yZSwgdGhlIHJlc3VsdGluZyBmb3JjZSB0aGF0IGlzIGV4ZXJ0ZWQgb24gdGhlIGJsb2NrIGlzOlxuICogRiA9IEZTICsgRkQgPSAta1ggLSBjdlxuICpcbiAqIE5ld3RvbidzIDJuZCBMYXcgdGVsbHMgdXMgdGhhdCBGID0gbWE6XG4gKiBtYSA9IC1rWCAtIGN2LlxuICpcbiAqIEZvciBJb25pYydzIHB1cnBvc2VzLCB3ZSBjYW4gYXNzdW1lIHRoYXQgbSA9IDE6XG4gKiBhID0gLWtYIC0gY3ZcbiAqXG4gKiBJbWFnaW5lIGEgYmxvY2sgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiBhIHNwcmluZy4gQXQgZXF1aWxpYnJpdW1cbiAqIHRoZSBibG9jayBpcyBhdCBwb3NpdGlvbiB4ID0gMS5cbiAqIFByZXNzaW5nIG9uIHRoZSBibG9jayBtb3ZlcyBpdCB0byBwb3NpdGlvbiB4ID0gMDtcbiAqIFNvLCB0byBjYWxjdWxhdGUgdGhlIGRpc3BsYWNlbWVudCwgd2UgbmVlZCB0byB0YWtlIHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBhbmQgc3VidHJhY3QgdGhlIHByZXZpb3VzIHBvc2l0aW9uIGZyb20gaXQuXG4gKiBYID0geCAtIHgwID0gMCAtIDEgPSAtMS5cbiAqXG4gKiBGb3IgSW9uaWMncyBwdXJwb3Nlcywgd2UgYXJlIG9ubHkgcHVzaGluZyBvbiB0aGUgc3ByaW5nIG1vZGFsXG4gKiBzbyB3ZSBoYXZlIGEgbWF4IHBvc2l0aW9uIG9mIDEuXG4gKiBBcyBhIHJlc3VsdCwgd2UgY2FuIGV4cGFuZCBkaXNwbGFjZW1lbnQgdG8gdGhpcyBmb3JtdWxhOlxuICogWCA9IHggLSAxXG4gKlxuICogYSA9IC1rKHggLSAxKSAtIGN2XG4gKlxuICogV2UgY2FuIHJlcHJlc2VudCB0aGUgbW90aW9uIG9mIHNvbWV0aGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRpbWU6IGYodCkgPSB4LlxuICogVGhlIGRlcml2YXRpdmUgb2YgcG9zaXRpb24gZ2l2ZXMgdXMgdGhlIHZlbG9jaXR5OiBmJyh0KVxuICogVGhlIGRlcml2YXRpdmUgb2YgdGhlIHZlbG9jaXR5IGdpdmVzIHVzIHRoZSBhY2NlbGVyYXRpb246IGYnJyh0KVxuICpcbiAqIFdlIGNhbiBzdWJzdGl0dXRlIHRoZSBmb3JtdWxhIGFib3ZlIHdpdGggdGhlc2UgdmFsdWVzOlxuICpcbiAqIGZcIih0KSA9IC1rICogKGYodCkgLSAxKSAtIGMgKiBmJyh0KVxuICpcbiAqIFRoaXMgaXMgY2FsbGVkIGEgZGlmZmVyZW50aWFsIGVxdWF0aW9uLlxuICpcbiAqIFdlIGtub3cgdGhhdCBhdCB0ID0gMCwgd2UgYXJlIGF0IHggPSAwIGJlY2F1c2UgdGhlIG1vZGFsIGRvZXMgbm90IG1vdmU6IGYoMCkgPSAwXG4gKiBUaGlzIG1lYW5zIG91ciB2ZWxvY2l0eSBpcyBhbHNvIHplcm86IGYnKDApID0gMC5cbiAqXG4gKiBXZSBjYW4gY2hlYXQgYSBiaXQgYW5kIHBsdWcgdGhlIGZvcm11bGEgaW50byBXb2xmcmFtIEFscGhhLlxuICogSG93ZXZlciwgd2UgbmVlZCB0byBwaWNrIHN0aWZmbmVzcyBhbmQgZGFtcGVuaW5nIHZhbHVlczpcbiAqIGsgPSAwLjU3XG4gKiBjID0gMTVcbiAqXG4gKiBJIHBpY2tlZCB0aGVzZSBhcyB0aGV5IGFyZSBmYWlybHkgY2xvc2UgdG8gbmF0aXZlIGlPUydzIHNwcmluZyBlZmZlY3RcbiAqIHdpdGggdGhlIG1vZGFsLlxuICpcbiAqIFdoYXQgd2UgcGx1ZyBpbiBpcyB0aGlzOiBmKDApID0gMDsgZicoMCkgPSAwOyBmJycodCkgPSAtMC41NyhmKHQpIC0gMSkgLSAxNWYnKHQpXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGZvcm11bGEgdGhhdCBsZXRzIHVzIGNhbGN1bGF0ZSB0aGUgYWNjZWxlcmF0aW9uXG4gKiBmb3IgYSBnaXZlbiB0aW1lIHQuXG4gKiBOb3RlOiBUaGlzIGlzIHRoZSBhcHByb3hpbWF0ZSBmb3JtIG9mIHRoZSBzb2x1dGlvbi4gV29sZnJhbSBBbHBoYSB3aWxsXG4gKiBnaXZlIHlvdSBhIGNvbXBsZXggZGlmZmVyZW50aWFsIGVxdWF0aW9uIHRvby5cbiAqL1xuY29uc3QgY2FsY3VsYXRlU3ByaW5nU3RlcCA9IHQgPT4ge1xuICByZXR1cm4gMC4wMDI1NTI3NSAqIDIuNzE4MjggKiogKC0xNC45NjE5ICogdCkgLSAxLjAwMjU1ICogMi43MTgyOCAqKiAoLTAuMDM4MDk2OCAqIHQpICsgMTtcbn07XG5cbi8vIERlZmF1bHRzIGZvciB0aGUgY2FyZCBzd2lwZSBhbmltYXRpb25cbmNvbnN0IFN3aXBlVG9DbG9zZURlZmF1bHRzID0ge1xuICBNSU5fUFJFU0VOVElOR19TQ0FMRTogMC45MTVcbn07XG5jb25zdCBjcmVhdGVTd2lwZVRvQ2xvc2VHZXN0dXJlID0gKGVsLCBhbmltYXRpb24sIHN0YXR1c0JhclN0eWxlLCBvbkRpc21pc3MpID0+IHtcbiAgLyoqXG4gICAqIFRoZSBzdGVwIHZhbHVlIGF0IHdoaWNoIGEgY2FyZCBtb2RhbFxuICAgKiBpcyBlbGlnaWJsZSBmb3IgZGlzbWlzc2luZyB2aWEgZ2VzdHVyZS5cbiAgICovXG4gIGNvbnN0IERJU01JU1NfVEhSRVNIT0xEID0gMC41O1xuICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gIGxldCBpc09wZW4gPSBmYWxzZTtcbiAgbGV0IGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlID0gZmFsc2U7XG4gIGxldCBjb250ZW50RWwgPSBudWxsO1xuICBsZXQgc2Nyb2xsRWwgPSBudWxsO1xuICBjb25zdCBjYW5EaXNtaXNzTWF4U3RlcCA9IDAuMjtcbiAgbGV0IGluaXRpYWxTY3JvbGxZID0gdHJ1ZTtcbiAgbGV0IGxhc3RTdGVwID0gMDtcbiAgY29uc3QgZ2V0U2Nyb2xsWSA9ICgpID0+IHtcbiAgICBpZiAoY29udGVudEVsICYmIGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICByZXR1cm4gY29udGVudEVsLnNjcm9sbFk7XG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBzY3JvbGwgY29udGFpbmVycyBhcmUgaW50ZW5kZWQgdG8gYmVcbiAgICAgICAqIHVzZWQgd2l0aCB2aXJ0dWFsIHNjcm9sbGluZywgc28gd2UgYXNzdW1lXG4gICAgICAgKiB0aGVyZSBpcyBzY3JvbGxpbmcgaW4gdGhpcyBjYXNlLlxuICAgICAgICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2FuU3RhcnQgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRldGFpbC5ldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCAhdGFyZ2V0LmNsb3Nlc3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgc3dpcGluZyBvbiB0aGUgY29udGVudCxcbiAgICAgKiBzd2lwaW5nIHNob3VsZCBvbmx5IGJlIHBvc3NpYmxlIGlmXG4gICAgICogdGhlIGNvbnRlbnQgaXMgc2Nyb2xsZWQgYWxsIHRoZSB3YXlcbiAgICAgKiB0byB0aGUgdG9wIHNvIHRoYXQgd2UgZG8gbm90IGludGVyZmVyZVxuICAgICAqIHdpdGggc2Nyb2xsaW5nLlxuICAgICAqXG4gICAgICogV2UgY2Fubm90IGFzc3VtZSB0aGF0IHRoZSBgaW9uLWNvbnRlbnRgXG4gICAgICogdGFyZ2V0IHdpbGwgcmVtYWluIGNvbnNpc3RlbnQgYmV0d2VlblxuICAgICAqIHN3aXBlcy4gRm9yIGV4YW1wbGUsIHdoZW4gdXNpbmdcbiAgICAgKiBpb24tbmF2IHdpdGhpbiBhIGNhcmQgbW9kYWwgaXQgaXNcbiAgICAgKiBwb3NzaWJsZSB0byBzd2lwZSwgcHVzaCBhIHZpZXcsIGFuZCB0aGVuXG4gICAgICogc3dpcGUgYWdhaW4uIFRoZSB0YXJnZXQgY29udGVudCB3aWxsIG5vdFxuICAgICAqIGJlIHRoZSBzYW1lIGJldHdlZW4gc3dpcGVzLlxuICAgICAqL1xuICAgIGNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudCh0YXJnZXQpO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNhcmQgc2hvdWxkIG5ldmVyIHN3aXBlIHRvIGNsb3NlXG4gICAgICAgKiBvbiB0aGUgY29udGVudCB3aXRoIGEgcmVmcmVzaGVyLlxuICAgICAgICogTm90ZTogV2UgY2Fubm90IHNvbHZlIHRoaXMgYnkgbWFraW5nIHRoZVxuICAgICAgICogc3dpcGVUb0Nsb3NlIGdlc3R1cmUgaGF2ZSBhIGhpZ2hlciBwcmlvcml0eVxuICAgICAgICogdGhhbiB0aGUgcmVmcmVzaGVyIGdlc3R1cmUgYXMgdGhlIGlPUyBuYXRpdmVcbiAgICAgICAqIHJlZnJlc2ggZ2VzdHVyZSB1c2VzIGEgc2Nyb2xsIGxpc3RlbmVyIGluXG4gICAgICAgKiBhZGRpdGlvbiB0byBhIGdlc3R1cmUuXG4gICAgICAgKlxuICAgICAgICogTm90ZTogRG8gbm90IHVzZSBnZXRTY3JvbGxFbGVtZW50IGhlcmVcbiAgICAgICAqIGJlY2F1c2Ugd2UgbmVlZCB0aGlzIHRvIGJlIGEgc3luY2hyb25vdXNcbiAgICAgICAqIG9wZXJhdGlvbiwgYW5kIGdldFNjcm9sbEVsZW1lbnQgaXNcbiAgICAgICAqIGFzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChjb250ZW50RWwpO1xuICAgICAgICBzY3JvbGxFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLmlubmVyLXNjcm9sbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsRWwgPSBjb250ZW50RWw7XG4gICAgICB9XG4gICAgICBjb25zdCBoYXNSZWZyZXNoZXJJbkNvbnRlbnQgPSAhIWNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyJyk7XG4gICAgICByZXR1cm4gIWhhc1JlZnJlc2hlckluQ29udGVudCAmJiBzY3JvbGxFbC5zY3JvbGxUb3AgPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhcmQgc2hvdWxkIGJlIHN3aXBlYWJsZSBvbiBhbGxcbiAgICAgKiBwYXJ0cyBvZiB0aGUgbW9kYWwgZXhjZXB0IGZvciB0aGUgZm9vdGVyLlxuICAgICAqL1xuICAgIGNvbnN0IGZvb3RlciA9IHRhcmdldC5jbG9zZXN0KCdpb24tZm9vdGVyJyk7XG4gICAgaWYgKGZvb3RlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3Qgb25TdGFydCA9IGRldGFpbCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGVsdGFZXG4gICAgfSA9IGRldGFpbDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluaXRpYWwgc2Nyb2xsWSB2YWx1ZSBzb1xuICAgICAqIHRoYXQgd2UgY2FuIGNvcnJlY3RseSByZXNldCB0aGUgc2Nyb2xsWVxuICAgICAqIHByb3Agd2hlbiB0aGUgZ2VzdHVyZSBlbmRzLlxuICAgICAqL1xuICAgIGluaXRpYWxTY3JvbGxZID0gZ2V0U2Nyb2xsWSgpO1xuICAgIC8qKlxuICAgICAqIElmIGNhbkRpc21pc3MgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgdHJ1ZWBcbiAgICAgKiB0aGVuIHVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIHN3aXBlIGRvd25cbiAgICAgKiB1bnRpbCBhIHRocmVzaG9sZCBpcyBoaXQuIEF0IHRoYXQgcG9pbnQsXG4gICAgICogdGhlIGNhcmQgbW9kYWwgc2hvdWxkIG5vdCBwcm9jZWVkIGFueSBmdXJ0aGVyLlxuICAgICAqIFRPRE8gKEZXLTkzNylcbiAgICAgKiBSZW1vdmUgdW5kZWZpbmVkIGNoZWNrXG4gICAgICovXG4gICAgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmUgPSBlbC5jYW5EaXNtaXNzICE9PSB1bmRlZmluZWQgJiYgZWwuY2FuRGlzbWlzcyAhPT0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgcHVsbGluZyBkb3duLCB0aGVuXG4gICAgICogaXQgaXMgcG9zc2libGUgd2UgYXJlIHB1bGxpbmcgb24gdGhlXG4gICAgICogY29udGVudC4gV2UgZG8gbm90IHdhbnQgc2Nyb2xsaW5nIHRvXG4gICAgICogaGFwcGVuIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIGdlc3R1cmUuXG4gICAgICovXG4gICAgaWYgKGRlbHRhWSA+IDAgJiYgY29udGVudEVsKSB7XG4gICAgICBkaXNhYmxlQ29udGVudFNjcm9sbFkoY29udGVudEVsKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgaXNPcGVuID8gMSA6IDApO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbHRhWVxuICAgIH0gPSBkZXRhaWw7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHB1bGxpbmcgZG93biwgdGhlblxuICAgICAqIGl0IGlzIHBvc3NpYmxlIHdlIGFyZSBwdWxsaW5nIG9uIHRoZVxuICAgICAqIGNvbnRlbnQuIFdlIGRvIG5vdCB3YW50IHNjcm9sbGluZyB0b1xuICAgICAqIGhhcHBlbiBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBnZXN0dXJlLlxuICAgICAqL1xuICAgIGlmIChkZWx0YVkgPiAwICYmIGNvbnRlbnRFbCkge1xuICAgICAgZGlzYWJsZUNvbnRlbnRTY3JvbGxZKGNvbnRlbnRFbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBzd2lwaW5nIG9uIHRoZSBjb250ZW50XG4gICAgICogdGhlbiB0aGUgc3dpcGUgZ2VzdHVyZSBzaG91bGQgb25seVxuICAgICAqIGhhcHBlbiBpZiB3ZSBhcmUgcHVsbGluZyBkb3duLlxuICAgICAqXG4gICAgICogSG93ZXZlciwgaWYgd2UgcHVsbCB1cCBhbmRcbiAgICAgKiB0aGVuIGRvd24gc3VjaCB0aGF0IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiByZXR1cm5zIHRvIDAsIHdlIHNob3VsZCBiZSBhYmxlIHRvIHN3aXBlXG4gICAgICogdGhlIGNhcmQuXG4gICAgICovXG4gICAgY29uc3Qgc3RlcCA9IGRldGFpbC5kZWx0YVkgLyBoZWlnaHQ7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdXNlciBpcyBzd2lwaW5nIGRvd24gYW5kXG4gICAgICogaWYgd2UgaGF2ZSBhIGNhbkRpc21pc3MgdmFsdWUgdGhhdFxuICAgICAqIHNob3VsZCBibG9jayB0aGUgZ2VzdHVyZSBmcm9tXG4gICAgICogcHJvY2VlZGluZyxcbiAgICAgKi9cbiAgICBjb25zdCBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPSBzdGVwID49IDAgJiYgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmU7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGJsb2NraW5nIHRoZSBnZXN0dXJlIGZyb20gZGlzbWlzc2luZyxcbiAgICAgKiBzZXQgdGhlIG1heCBzdGVwIHZhbHVlIHNvIHRoYXQgdGhlIHNoZWV0IGNhbm5vdCBiZVxuICAgICAqIGNvbXBsZXRlbHkgaGlkZGVuLlxuICAgICAqL1xuICAgIGNvbnN0IG1heFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPyBjYW5EaXNtaXNzTWF4U3RlcCA6IDAuOTk5OTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgYmxvY2tpbmcgdGhlIGdlc3R1cmUgZnJvbVxuICAgICAqIGRpc21pc3NpbmcsIGNhbGN1bGF0ZSB0aGUgc3ByaW5nIG1vZGlmaWVyIHZhbHVlXG4gICAgICogdGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdGFydGluZyBicmVha3BvaW50XG4gICAgICogdmFsdWUgdG8gZ2l2ZSB0aGUgZ2VzdHVyZSBhIHNwcmluZy1saWtlIGZlZWxpbmcuXG4gICAgICogTm90ZSB0aGF0IHRoZSBzdGFydGluZyBicmVha3BvaW50IGlzIGFsd2F5cyAwLFxuICAgICAqIHNvIHdlIG9taXQgYWRkaW5nIDAgdG8gdGhlIHJlc3VsdC5cbiAgICAgKi9cbiAgICBjb25zdCBwcm9jZXNzZWRTdGVwID0gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID8gY2FsY3VsYXRlU3ByaW5nU3RlcChzdGVwIC8gbWF4U3RlcCkgOiBzdGVwO1xuICAgIGNvbnN0IGNsYW1wZWRTdGVwID0gY2xhbXAoMC4wMDAxLCBwcm9jZXNzZWRTdGVwLCBtYXhTdGVwKTtcbiAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGVwKGNsYW1wZWRTdGVwKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHN3aXBpbmcgZG93biBoYWxmIHdheSwgdGhlIHN0YXR1cyBiYXIgc3R5bGVcbiAgICAgKiBzaG91bGQgYmUgcmVzZXQgdG8gaXRzIGRlZmF1bHQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBXZSB0cmFjayBsYXN0U3RlcCBzbyB0aGF0IHdlIGRvIG5vdCBmaXJlIHRoZXNlXG4gICAgICogZnVuY3Rpb25zIG9uIGV2ZXJ5IG9uTW92ZSwgb25seSB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAqIGNyb3NzZWQgYSBjZXJ0YWluIHRocmVzaG9sZC5cbiAgICAgKi9cbiAgICBpZiAoY2xhbXBlZFN0ZXAgPj0gRElTTUlTU19USFJFU0hPTEQgJiYgbGFzdFN0ZXAgPCBESVNNSVNTX1RIUkVTSE9MRCkge1xuICAgICAgc2V0Q2FyZFN0YXR1c0JhckRlZmF1bHQoc3RhdHVzQmFyU3R5bGUpO1xuICAgICAgLyoqXG4gICAgICAgKiBIb3dldmVyLCBpZiB3ZSBzd2lwZSBiYWNrIHVwLCB0aGVuIHRoZVxuICAgICAgICogc3RhdHVzIGJhciBzdHlsZSBzaG91bGQgYmUgc2V0IHRvIGhhdmUgbGlnaHRcbiAgICAgICAqIHRleHQgb24gYSBkYXJrIGJhY2tncm91bmQuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKGNsYW1wZWRTdGVwIDwgRElTTUlTU19USFJFU0hPTEQgJiYgbGFzdFN0ZXAgPj0gRElTTUlTU19USFJFU0hPTEQpIHtcbiAgICAgIHNldENhcmRTdGF0dXNCYXJEYXJrKCk7XG4gICAgfVxuICAgIGxhc3RTdGVwID0gY2xhbXBlZFN0ZXA7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gZGV0YWlsID0+IHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGRldGFpbC52ZWxvY2l0eVk7XG4gICAgY29uc3Qgc3RlcCA9IGRldGFpbC5kZWx0YVkgLyBoZWlnaHQ7XG4gICAgY29uc3QgaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID0gc3RlcCA+PSAwICYmIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlO1xuICAgIGNvbnN0IG1heFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPyBjYW5EaXNtaXNzTWF4U3RlcCA6IDAuOTk5OTtcbiAgICBjb25zdCBwcm9jZXNzZWRTdGVwID0gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID8gY2FsY3VsYXRlU3ByaW5nU3RlcChzdGVwIC8gbWF4U3RlcCkgOiBzdGVwO1xuICAgIGNvbnN0IGNsYW1wZWRTdGVwID0gY2xhbXAoMC4wMDAxLCBwcm9jZXNzZWRTdGVwLCBtYXhTdGVwKTtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAoZGV0YWlsLmRlbHRhWSArIHZlbG9jaXR5ICogMTAwMCkgLyBoZWlnaHQ7XG4gICAgLyoqXG4gICAgICogSWYgY2FuRGlzbWlzcyBibG9ja3NcbiAgICAgKiB0aGUgc3dpcGUgZ2VzdHVyZSwgdGhlbiB0aGVcbiAgICAgKiBhbmltYXRpb24gY2FuIG5ldmVyIGNvbXBsZXRlIHVudGlsXG4gICAgICogY2FuRGlzbWlzcyBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gIWlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyAmJiB0aHJlc2hvbGQgPj0gRElTTUlTU19USFJFU0hPTEQ7XG4gICAgbGV0IG5ld1N0ZXBWYWx1ZSA9IHNob3VsZENvbXBsZXRlID8gLTAuMDAxIDogMC4wMDE7XG4gICAgaWYgKCFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgYW5pbWF0aW9uLmVhc2luZygnY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjgsIDAuMjgpJyk7XG4gICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMSwgMF0sIFswLjY4LCAwLjI4XSwgWzEsIDFdLCBjbGFtcGVkU3RlcClbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllcigwLjMyLCAwLjcyLCAwLCAxKScpO1xuICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKFswLCAwXSwgWzAuMzIsIDAuNzJdLCBbMCwgMV0sIFsxLCAxXSwgY2xhbXBlZFN0ZXApWzBdO1xuICAgIH1cbiAgICBjb25zdCBkdXJhdGlvbiA9IHNob3VsZENvbXBsZXRlID8gY29tcHV0ZUR1cmF0aW9uKHN0ZXAgKiBoZWlnaHQsIHZlbG9jaXR5KSA6IGNvbXB1dGVEdXJhdGlvbigoMSAtIGNsYW1wZWRTdGVwKSAqIGhlaWdodCwgdmVsb2NpdHkpO1xuICAgIGlzT3BlbiA9IHNob3VsZENvbXBsZXRlO1xuICAgIGdlc3R1cmUuZW5hYmxlKGZhbHNlKTtcbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICByZXNldENvbnRlbnRTY3JvbGxZKGNvbnRlbnRFbCwgaW5pdGlhbFNjcm9sbFkpO1xuICAgIH1cbiAgICBhbmltYXRpb24ub25GaW5pc2goKCkgPT4ge1xuICAgICAgaWYgKCFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICBnZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9KS5wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSA/IDEgOiAwLCBuZXdTdGVwVmFsdWUsIGR1cmF0aW9uKTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY2FuRGlzbWlzcyB2YWx1ZSBibG9ja2VkIHRoZSBnZXN0dXJlXG4gICAgICogZnJvbSBwcm9jZWVkaW5nLCB0aGVuIHdlIHNob3VsZCBpZ25vcmUgd2hhdGV2ZXJcbiAgICAgKiBzaG91bGRDb21wbGV0ZSBpcy4gV2hldGhlciBvciBub3QgdGhlIG1vZGFsXG4gICAgICogYW5pbWF0aW9uIHNob3VsZCBjb21wbGV0ZSBpcyBub3cgZGV0ZXJtaW5lZCBieVxuICAgICAqIGNhbkRpc21pc3MuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdXNlciBzd2lwZWQgPjI1JSBvZiB0aGUgd2F5XG4gICAgICogdG8gdGhlIG1heCBzdGVwLCB0aGVuIHdlIHNob3VsZFxuICAgICAqIGNoZWNrIGNhbkRpc21pc3MuIDI1JSB3YXMgY2hvc2VuXG4gICAgICogdG8gYXZvaWQgYWNjaWRlbnRhbCBzd2lwZXMuXG4gICAgICovXG4gICAgaWYgKGlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyAmJiBjbGFtcGVkU3RlcCA+IG1heFN0ZXAgLyA0KSB7XG4gICAgICBoYW5kbGVDYW5EaXNtaXNzKGVsLCBhbmltYXRpb24pO1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgIG9uRGlzbWlzcygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2VzdHVyZSA9IGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnbW9kYWxTd2lwZVRvQ2xvc2UnLFxuICAgIGdlc3R1cmVQcmlvcml0eTogT1ZFUkxBWV9HRVNUVVJFX1BSSU9SSVRZLFxuICAgIGRpcmVjdGlvbjogJ3knLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydCxcbiAgICBvbk1vdmUsXG4gICAgb25FbmRcbiAgfSk7XG4gIHJldHVybiBnZXN0dXJlO1xufTtcbmNvbnN0IGNvbXB1dGVEdXJhdGlvbiA9IChyZW1haW5pbmcsIHZlbG9jaXR5KSA9PiB7XG4gIHJldHVybiBjbGFtcCg0MDAsIHJlbWFpbmluZyAvIE1hdGguYWJzKHZlbG9jaXR5ICogMS4xKSwgNTAwKTtcbn07XG5jb25zdCBjcmVhdGVTaGVldEVudGVyQW5pbWF0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50QnJlYWtwb2ludCxcbiAgICBiYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgZXhwYW5kVG9TY3JvbGxcbiAgfSA9IG9wdHM7XG4gIC8qKlxuICAgKiBJZiB0aGUgYmFja2Ryb3BCcmVha3BvaW50IGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgYmFja2Ryb3BcbiAgICogc2hvdWxkIGFsd2F5cyBmYWRlIGluLiBJZiB0aGUgYmFja2Ryb3BCcmVha3BvaW50IGNhbWUgYmVmb3JlIHRoZVxuICAgKiBjdXJyZW50IGJyZWFrcG9pbnQsIHRoZW4gdGhlIGJhY2tkcm9wIHNob3VsZCBiZSBmYWRpbmcgaW4uXG4gICAqL1xuICBjb25zdCBzaG91bGRTaG93QmFja2Ryb3AgPSBiYWNrZHJvcEJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCB8fCBiYWNrZHJvcEJyZWFrcG9pbnQgPCBjdXJyZW50QnJlYWtwb2ludDtcbiAgY29uc3QgaW5pdGlhbEJhY2tkcm9wID0gc2hvdWxkU2hvd0JhY2tkcm9wID8gYGNhbGModmFyKC0tYmFja2Ryb3Atb3BhY2l0eSkgKiAke2N1cnJlbnRCcmVha3BvaW50fSlgIDogJzAnO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbignYmFja2Ryb3BBbmltYXRpb24nKS5mcm9tVG8oJ29wYWNpdHknLCAwLCBpbml0aWFsQmFja2Ryb3ApO1xuICBpZiAoc2hvdWxkU2hvd0JhY2tkcm9wKSB7XG4gICAgYmFja2Ryb3BBbmltYXRpb24uYmVmb3JlU3R5bGVzKHtcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgIH0pLmFmdGVyQ2xlYXJTdHlsZXMoWydwb2ludGVyLWV2ZW50cyddKTtcbiAgfVxuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCd3cmFwcGVyQW5pbWF0aW9uJykua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHsxMDAgLSBjdXJyZW50QnJlYWtwb2ludCAqIDEwMH0lKWBcbiAgfV0pO1xuICAvKipcbiAgICogVGhpcyBhbGxvd3MgdGhlIGNvbnRlbnQgdG8gYmUgc2Nyb2xsYWJsZSBhdCBhbnkgYnJlYWtwb2ludC5cbiAgICovXG4gIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSAhZXhwYW5kVG9TY3JvbGwgPyBjcmVhdGVBbmltYXRpb24oJ2NvbnRlbnRBbmltYXRpb24nKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICBtYXhIZWlnaHQ6IGAkeygxIC0gY3VycmVudEJyZWFrcG9pbnQpICogMTAwfSVgXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMSxcbiAgICBtYXhIZWlnaHQ6IGAke2N1cnJlbnRCcmVha3BvaW50ICogMTAwfSVgXG4gIH1dKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyQW5pbWF0aW9uLFxuICAgIGJhY2tkcm9wQW5pbWF0aW9uLFxuICAgIGNvbnRlbnRBbmltYXRpb25cbiAgfTtcbn07XG5jb25zdCBjcmVhdGVTaGVldExlYXZlQW5pbWF0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50QnJlYWtwb2ludCxcbiAgICBiYWNrZHJvcEJyZWFrcG9pbnRcbiAgfSA9IG9wdHM7XG4gIC8qKlxuICAgKiBCYWNrZHJvcCBkb2VzIG5vdCBhbHdheXMgZmFkZSBpbiBmcm9tIDAgdG8gMSBpZiBiYWNrZHJvcEJyZWFrcG9pbnRcbiAgICogaXMgZGVmaW5lZCwgc28gd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGF0IG9mZnNldCBieSBmaWd1cmluZyBvdXRcbiAgICogd2hhdCB0aGUgY3VycmVudCBiYWNrZHJvcCB2YWx1ZSBzaG91bGQgYmUuXG4gICAqL1xuICBjb25zdCBiYWNrZHJvcFZhbHVlID0gYGNhbGModmFyKC0tYmFja2Ryb3Atb3BhY2l0eSkgKiAke2dldEJhY2tkcm9wVmFsdWVGb3JTaGVldChjdXJyZW50QnJlYWtwb2ludCwgYmFja2Ryb3BCcmVha3BvaW50KX0pYDtcbiAgY29uc3QgZGVmYXVsdEJhY2tkcm9wID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogYmFja2Ryb3BWYWx1ZVxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDBcbiAgfV07XG4gIGNvbnN0IGN1c3RvbUJhY2tkcm9wID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogYmFja2Ryb3BWYWx1ZVxuICB9LCB7XG4gICAgb2Zmc2V0OiBiYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgb3BhY2l0eTogMFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDBcbiAgfV07XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCdiYWNrZHJvcEFuaW1hdGlvbicpLmtleWZyYW1lcyhiYWNrZHJvcEJyZWFrcG9pbnQgIT09IDAgPyBjdXN0b21CYWNrZHJvcCA6IGRlZmF1bHRCYWNrZHJvcCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ3dyYXBwZXJBbmltYXRpb24nKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7MTAwIC0gY3VycmVudEJyZWFrcG9pbnQgKiAxMDB9JSlgXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYFxuICB9XSk7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlckFuaW1hdGlvbixcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICB9O1xufTtcbmNvbnN0IGNyZWF0ZUVudGVyQW5pbWF0aW9uJDEgPSAoKSA9PiB7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDB2aCknLCAndHJhbnNsYXRlWSgwdmgpJyk7XG4gIHJldHVybiB7XG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgd3JhcHBlckFuaW1hdGlvbixcbiAgICBjb250ZW50QW5pbWF0aW9uOiB1bmRlZmluZWRcbiAgfTtcbn07XG4vKipcbiAqIGlPUyBNb2RhbCBFbnRlciBBbmltYXRpb24gZm9yIHRoZSBDYXJkIHByZXNlbnRhdGlvbiBzdHlsZVxuICovXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHByZXNlbnRpbmdFbCxcbiAgICBjdXJyZW50QnJlYWtwb2ludCxcbiAgICBleHBhbmRUb1Njcm9sbFxuICB9ID0gb3B0cztcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGJhc2VFbCk7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyQW5pbWF0aW9uLFxuICAgIGJhY2tkcm9wQW5pbWF0aW9uLFxuICAgIGNvbnRlbnRBbmltYXRpb25cbiAgfSA9IGN1cnJlbnRCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVTaGVldEVudGVyQW5pbWF0aW9uKG9wdHMpIDogY3JlYXRlRW50ZXJBbmltYXRpb24kMSgpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtd3JhcHBlciwgLm1vZGFsLXNoYWRvdycpKS5iZWZvcmVTdHlsZXMoe1xuICAgIG9wYWNpdHk6IDFcbiAgfSk7XG4gIC8vIFRoZSBjb250ZW50IGFuaW1hdGlvbiBpcyBvbmx5IGFkZGVkIGlmIHNjcm9sbGluZyBpcyBlbmFibGVkIGZvclxuICAvLyBhbGwgdGhlIGJyZWFrcG9pbnRzLlxuICAhZXhwYW5kVG9TY3JvbGwgJiYgKGNvbnRlbnRBbmltYXRpb24gPT09IG51bGwgfHwgY29udGVudEFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuaW9uLXBhZ2UnKSkpO1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCdlbnRlcmluZy1iYXNlJykuYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJykuZHVyYXRpb24oNTAwKS5hZGRBbmltYXRpb24oW3dyYXBwZXJBbmltYXRpb25dKS5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XG4gICAgaWYgKGV4cGFuZFRvU2Nyb2xsKSB7XG4gICAgICAvLyBTY3JvbGwgY2FuIG9ubHkgYmUgZG9uZSB3aGVuIHRoZSBtb2RhbCBpcyBmdWxseSBleHBhbmRlZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlcmUgYXJlIHNvbWUgYnJvd3NlcnMgdGhhdCBjYXVzZXMgZmxpY2tlcmluZyB3aGVuXG4gICAgICogZHJhZ2dpbmcgdGhlIGNvbnRlbnQgd2hlbiBzY3JvbGwgaXMgZW5hYmxlZCBhdCBldmVyeVxuICAgICAqIGJyZWFrcG9pbnQuIFRoaXMgaXMgZHVlIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQgYmVpbmdcbiAgICAgKiB0cmFuc2Zvcm1lZCBvZmYgdGhlIHNjcmVlbiBhbmQgaGF2aW5nIGEgc25hcCBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBBIHdvcmthcm91bmQgaXMgdG8gY2xvbmUgdGhlIGZvb3RlciBlbGVtZW50IGFuZCBhcHBlbmRcbiAgICAgKiBpdCBvdXRzaWRlIG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFRoaXMgd2F5LCB0aGUgZm9vdGVyXG4gICAgICogaXMgc3RpbGwgdmlzaWJsZSBhbmQgdGhlIGRyYWcgY2FuIGJlIGRvbmUgd2l0aG91dFxuICAgICAqIGZsaWNrZXJpbmcuIFRoZSBvcmlnaW5hbCBmb290ZXIgaXMgaGlkZGVuIHVudGlsIHRoZSBtb2RhbFxuICAgICAqIGlzIGRpc21pc3NlZC4gVGhpcyBtYWludGFpbnMgdGhlIGFuaW1hdGlvbiBvZiB0aGUgZm9vdGVyXG4gICAgICogd2hlbiB0aGUgbW9kYWwgaXMgZGlzbWlzc2VkLlxuICAgICAqXG4gICAgICogVGhlIHdvcmthcm91bmQgbmVlZHMgdG8gYmUgZG9uZSBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHNcbiAgICAgKiBzbyB0aGVyZSBhcmUgbm8gZmxpY2tlcmluZyBpc3N1ZXMuXG4gICAgICovXG4gICAgY29uc3QgaW9uRm9vdGVyID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mb290ZXInKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBwcmV2ZW50IG1vcmUgdGhhbiBvbmUgZm9vdGVyXG4gICAgICogZnJvbSBiZWluZyBhcHBlbmRlZCB0byB0aGUgc2hhZG93IHJvb3QuXG4gICAgICogT3RoZXJ3aXNlLCBpT1MgYW5kIE1EIGVudGVyIGFuaW1hdGlvbnMgd291bGQgYXBwZW5kXG4gICAgICogdGhlIGZvb3RlciB0d2ljZS5cbiAgICAgKi9cbiAgICBjb25zdCBpb25Gb290ZXJBbHJlYWR5QXBwZW5kZWQgPSBiYXNlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpb24tZm9vdGVyJyk7XG4gICAgaWYgKGlvbkZvb3RlciAmJiAhaW9uRm9vdGVyQWxyZWFkeUFwcGVuZGVkKSB7XG4gICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSBpb25Gb290ZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgY2xvbmVkRm9vdGVyID0gaW9uRm9vdGVyLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGJhc2VFbC5zaGFkb3dSb290LmFwcGVuZENoaWxkKGNsb25lZEZvb3Rlcik7XG4gICAgICBpb25Gb290ZXIuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaW9uRm9vdGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgLy8gUGFkZGluZyBpcyBhZGRlZCB0byBwcmV2ZW50IHNvbWUgY29udGVudCBmcm9tIGJlaW5nIGhpZGRlbi5cbiAgICAgIGNvbnN0IHBhZ2UgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLmlvbi1wYWdlJyk7XG4gICAgICBwYWdlLnN0eWxlLnNldFByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScsIGAke2Zvb3RlckhlaWdodH1weGApO1xuICAgIH1cbiAgfSk7XG4gIGlmIChjb250ZW50QW5pbWF0aW9uKSB7XG4gICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oY29udGVudEFuaW1hdGlvbik7XG4gIH1cbiAgaWYgKHByZXNlbnRpbmdFbCkge1xuICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gICAgY29uc3QgaGFzQ2FyZE1vZGFsID0gcHJlc2VudGluZ0VsLnRhZ05hbWUgPT09ICdJT04tTU9EQUwnICYmIHByZXNlbnRpbmdFbC5wcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByZXNlbnRpbmdFbFJvb3QgPSBnZXRFbGVtZW50Um9vdChwcmVzZW50aW5nRWwpO1xuICAgIGNvbnN0IHByZXNlbnRpbmdBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5iZWZvcmVTdHlsZXMoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AgY2VudGVyJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvZXMgbm90IHN1cHBvcnQgYG1heCgpYCAoZXg6IEZpcmVmb3gpXG4gICAgICAgKiBObyBuZWVkIHRvIHdvcnJ5IGFib3V0IHN0YXR1c2JhciBwYWRkaW5nIHNpbmNlIGVuZ2luZXMgbGlrZSBHZWNrb1xuICAgICAgICogYXJlIG5vdCB1c2VkIGFzIHRoZSBlbmdpbmUgZm9yIHN0YW5kYWxvbmUgQ29yZG92YS9DYXBhY2l0b3IgYXBwc1xuICAgICAgICovXG4gICAgICBjb25zdCB0cmFuc2Zvcm1PZmZzZXQgPSAhQ1NTLnN1cHBvcnRzKCd3aWR0aCcsICdtYXgoMHB4LCAxcHgpJykgPyAnMzBweCcgOiAnbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSknO1xuICAgICAgY29uc3QgbW9kYWxUcmFuc2Zvcm0gPSBoYXNDYXJkTW9kYWwgPyAnLTEwcHgnIDogdHJhbnNmb3JtT2Zmc2V0O1xuICAgICAgY29uc3QgdG9QcmVzZW50aW5nU2NhbGUgPSBTd2lwZVRvQ2xvc2VEZWZhdWx0cy5NSU5fUFJFU0VOVElOR19TQ0FMRTtcbiAgICAgIGNvbnN0IGZpbmFsVHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHttb2RhbFRyYW5zZm9ybX0pIHNjYWxlKCR7dG9QcmVzZW50aW5nU2NhbGV9KWA7XG4gICAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFmdGVyU3R5bGVzKHtcbiAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybVxuICAgICAgfSkuYmVmb3JlQWRkV3JpdGUoKCkgPT4gYm9keUVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2JsYWNrJykpLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsKS5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgxKScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCdcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgwLjg1KScsXG4gICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm0sXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEwcHggMTBweCAwIDAnXG4gICAgICB9XSk7XG4gICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihwcmVzZW50aW5nQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oYmFja2Ryb3BBbmltYXRpb24pO1xuICAgICAgaWYgKCFoYXNDYXJkTW9kYWwpIHtcbiAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAnMCcsICcxJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b1ByZXNlbnRpbmdTY2FsZSA9IGhhc0NhcmRNb2RhbCA/IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFIDogMTtcbiAgICAgICAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICAgICAgcHJlc2VudGluZ0FuaW1hdGlvbi5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybVxuICAgICAgICB9KS5hZGRFbGVtZW50KHByZXNlbnRpbmdFbFJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDEpJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHNjYWxlKDEpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDAuODUpJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZpbmFsVHJhbnNmb3JtXG4gICAgICAgIH1dKTtcbiAgICAgICAgY29uc3Qgc2hhZG93QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWZ0ZXJTdHlsZXMoe1xuICAgICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm1cbiAgICAgICAgfSkuYWRkRWxlbWVudChwcmVzZW50aW5nRWxSb290LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zaGFkb3cnKSkua2V5ZnJhbWVzKFt7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHNjYWxlKDEpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZpbmFsVHJhbnNmb3JtXG4gICAgICAgIH1dKTtcbiAgICAgICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oW3ByZXNlbnRpbmdBbmltYXRpb24sIHNoYWRvd0FuaW1hdGlvbl0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihiYWNrZHJvcEFuaW1hdGlvbik7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb247XG59O1xuY29uc3QgY3JlYXRlTGVhdmVBbmltYXRpb24kMSA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMHZoKScsICd0cmFuc2xhdGVZKDEwMHZoKScpO1xuICByZXR1cm4ge1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uLFxuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgfTtcbn07XG4vKipcbiAqIGlPUyBNb2RhbCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsLCBvcHRzLCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlc2VudGluZ0VsLFxuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGV4cGFuZFRvU2Nyb2xsXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgfSA9IGN1cnJlbnRCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVTaGVldExlYXZlQW5pbWF0aW9uKG9wdHMpIDogY3JlYXRlTGVhdmVBbmltYXRpb24kMSgpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtd3JhcHBlciwgLm1vZGFsLXNoYWRvdycpKS5iZWZvcmVTdHlsZXMoe1xuICAgIG9wYWNpdHk6IDFcbiAgfSk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ2xlYXZpbmctYmFzZScpLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjMyLDAuNzIsMCwxKScpLmR1cmF0aW9uKGR1cmF0aW9uKS5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbikuYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xuICAgIGlmIChleHBhbmRUb1Njcm9sbCkge1xuICAgICAgLy8gU2Nyb2xsIGNhbiBvbmx5IGJlIGRvbmUgd2hlbiB0aGUgbW9kYWwgaXMgZnVsbHkgZXhwYW5kZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGV4cGFuZFRvU2Nyb2xsIGlzIGRpc2FibGVkLCB3ZSBuZWVkIHRvIHN3YXBcbiAgICAgKiB0aGUgdmlzaWJpbGl0eSB0byB0aGUgb3JpZ2luYWwsIHNvIHRoZSBmb290ZXJcbiAgICAgKiBkaXNtaXNzZXMgd2l0aCB0aGUgbW9kYWwgYW5kIGRvZXNuJ3Qgc3RheVxuICAgICAqIHVudGlsIHRoZSBtb2RhbCBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgKi9cbiAgICBjb25zdCBpb25Gb290ZXIgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWZvb3RlcicpO1xuICAgIGlmIChpb25Gb290ZXIpIHtcbiAgICAgIGNvbnN0IGNsb25lZEZvb3RlciA9IGJhc2VFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mb290ZXInKTtcbiAgICAgIGlvbkZvb3Rlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgaW9uRm9vdGVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIGNsb25lZEZvb3Rlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICBjbG9uZWRGb290ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBjb25zdCBwYWdlID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5pb24tcGFnZScpO1xuICAgICAgcGFnZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB9XG4gIH0pO1xuICBpZiAocHJlc2VudGluZ0VsKSB7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcbiAgICBjb25zdCBoYXNDYXJkTW9kYWwgPSBwcmVzZW50aW5nRWwudGFnTmFtZSA9PT0gJ0lPTi1NT0RBTCcgJiYgcHJlc2VudGluZ0VsLnByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJlc2VudGluZ0VsUm9vdCA9IGdldEVsZW1lbnRSb290KHByZXNlbnRpbmdFbCk7XG4gICAgY29uc3QgcHJlc2VudGluZ0FuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmJlZm9yZUNsZWFyU3R5bGVzKFsndHJhbnNmb3JtJ10pLmFmdGVyQ2xlYXJTdHlsZXMoWyd0cmFuc2Zvcm0nXSkub25GaW5pc2goY3VycmVudFN0ZXAgPT4ge1xuICAgICAgLy8gb25seSByZXNldCBiYWNrZ3JvdW5kIGNvbG9yIGlmIHRoaXMgaXMgdGhlIGxhc3QgY2FyZC1zdHlsZSBtb2RhbFxuICAgICAgaWYgKGN1cnJlbnRTdGVwICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByZXNlbnRpbmdFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnJyk7XG4gICAgICBjb25zdCBudW1Nb2RhbHMgPSBBcnJheS5mcm9tKGJvZHlFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tbW9kYWw6bm90KC5vdmVybGF5LWhpZGRlbiknKSkuZmlsdGVyKG0gPT4gbS5wcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkKS5sZW5ndGg7XG4gICAgICBpZiAobnVtTW9kYWxzIDw9IDEpIHtcbiAgICAgICAgYm9keUVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1PZmZzZXQgPSAhQ1NTLnN1cHBvcnRzKCd3aWR0aCcsICdtYXgoMHB4LCAxcHgpJykgPyAnMzBweCcgOiAnbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSknO1xuICAgICAgY29uc3QgbW9kYWxUcmFuc2Zvcm0gPSBoYXNDYXJkTW9kYWwgPyAnLTEwcHgnIDogdHJhbnNmb3JtT2Zmc2V0O1xuICAgICAgY29uc3QgdG9QcmVzZW50aW5nU2NhbGUgPSBTd2lwZVRvQ2xvc2VEZWZhdWx0cy5NSU5fUFJFU0VOVElOR19TQ0FMRTtcbiAgICAgIGNvbnN0IGZpbmFsVHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHttb2RhbFRyYW5zZm9ybX0pIHNjYWxlKCR7dG9QcmVzZW50aW5nU2NhbGV9KWA7XG4gICAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsKS5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgwLjg1KScsXG4gICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm0sXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEwcHggMTBweCAwIDAnXG4gICAgICB9LCB7XG4gICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgZmlsdGVyOiAnY29udHJhc3QoMSknLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCkgc2NhbGUoMSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwcHgnXG4gICAgICB9XSk7XG4gICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihwcmVzZW50aW5nQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oYmFja2Ryb3BBbmltYXRpb24pO1xuICAgICAgaWYgKCFoYXNDYXJkTW9kYWwpIHtcbiAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAnMScsICcwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b1ByZXNlbnRpbmdTY2FsZSA9IGhhc0NhcmRNb2RhbCA/IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFIDogMTtcbiAgICAgICAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICAgICAgcHJlc2VudGluZ0FuaW1hdGlvbi5hZGRFbGVtZW50KHByZXNlbnRpbmdFbFJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSkuYWZ0ZXJTdHlsZXMoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICB9KS5rZXlmcmFtZXMoW3tcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgZmlsdGVyOiAnY29udHJhc3QoMC44NSknLFxuICAgICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgxKScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSBzY2FsZSgxKSdcbiAgICAgICAgfV0pO1xuICAgICAgICBjb25zdCBzaGFkb3dBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHByZXNlbnRpbmdFbFJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXNoYWRvdycpKS5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSBzY2FsZSgxKSdcbiAgICAgICAgfSkua2V5ZnJhbWVzKFt7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZpbmFsVHJhbnNmb3JtXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCkgc2NhbGUoMSknXG4gICAgICAgIH1dKTtcbiAgICAgICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oW3ByZXNlbnRpbmdBbmltYXRpb24sIHNoYWRvd0FuaW1hdGlvbl0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihiYWNrZHJvcEFuaW1hdGlvbik7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb247XG59O1xuY29uc3QgY3JlYXRlRW50ZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuMDEsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg0MHB4KSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMHB4KWBcbiAgfV0pO1xuICByZXR1cm4ge1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uLFxuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvbjogdW5kZWZpbmVkXG4gIH07XG59O1xuLyoqXG4gKiBNZCBNb2RhbCBFbnRlciBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGV4cGFuZFRvU2Nyb2xsXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvblxuICB9ID0gY3VycmVudEJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNoZWV0RW50ZXJBbmltYXRpb24ob3B0cykgOiBjcmVhdGVFbnRlckFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKTtcbiAgLy8gVGhlIGNvbnRlbnQgYW5pbWF0aW9uIGlzIG9ubHkgYWRkZWQgaWYgc2Nyb2xsaW5nIGlzIGVuYWJsZWQgZm9yXG4gIC8vIGFsbCB0aGUgYnJlYWtwb2ludHMuXG4gIGV4cGFuZFRvU2Nyb2xsICYmIChjb250ZW50QW5pbWF0aW9uID09PSBudWxsIHx8IGNvbnRlbnRBbmltYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmlvbi1wYWdlJykpKTtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpLmR1cmF0aW9uKDI4MCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pLmJlZm9yZUFkZFdyaXRlKCgpID0+IHtcbiAgICBpZiAoZXhwYW5kVG9TY3JvbGwpIHtcbiAgICAgIC8vIFNjcm9sbCBjYW4gb25seSBiZSBkb25lIHdoZW4gdGhlIG1vZGFsIGlzIGZ1bGx5IGV4cGFuZGVkLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGVyZSBhcmUgc29tZSBicm93c2VycyB0aGF0IGNhdXNlcyBmbGlja2VyaW5nIHdoZW5cbiAgICAgKiBkcmFnZ2luZyB0aGUgY29udGVudCB3aGVuIHNjcm9sbCBpcyBlbmFibGVkIGF0IGV2ZXJ5XG4gICAgICogYnJlYWtwb2ludC4gVGhpcyBpcyBkdWUgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCBiZWluZ1xuICAgICAqIHRyYW5zZm9ybWVkIG9mZiB0aGUgc2NyZWVuIGFuZCBoYXZpbmcgYSBzbmFwIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEEgd29ya2Fyb3VuZCBpcyB0byBjbG9uZSB0aGUgZm9vdGVyIGVsZW1lbnQgYW5kIGFwcGVuZFxuICAgICAqIGl0IG91dHNpZGUgb2YgdGhlIHdyYXBwZXIgZWxlbWVudC4gVGhpcyB3YXksIHRoZSBmb290ZXJcbiAgICAgKiBpcyBzdGlsbCB2aXNpYmxlIGFuZCB0aGUgZHJhZyBjYW4gYmUgZG9uZSB3aXRob3V0XG4gICAgICogZmxpY2tlcmluZy4gVGhlIG9yaWdpbmFsIGZvb3RlciBpcyBoaWRkZW4gdW50aWwgdGhlIG1vZGFsXG4gICAgICogaXMgZGlzbWlzc2VkLiBUaGlzIG1haW50YWlucyB0aGUgYW5pbWF0aW9uIG9mIHRoZSBmb290ZXJcbiAgICAgKiB3aGVuIHRoZSBtb2RhbCBpcyBkaXNtaXNzZWQuXG4gICAgICpcbiAgICAgKiBUaGUgd29ya2Fyb3VuZCBuZWVkcyB0byBiZSBkb25lIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0c1xuICAgICAqIHNvIHRoZXJlIGFyZSBubyBmbGlja2VyaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBjb25zdCBpb25Gb290ZXIgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWZvb3RlcicpO1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIHByZXZlbnQgbW9yZSB0aGFuIG9uZSBmb290ZXJcbiAgICAgKiBmcm9tIGJlaW5nIGFwcGVuZGVkIHRvIHRoZSBzaGFkb3cgcm9vdC5cbiAgICAgKiBPdGhlcndpc2UsIGlPUyBhbmQgTUQgZW50ZXIgYW5pbWF0aW9ucyB3b3VsZCBhcHBlbmRcbiAgICAgKiB0aGUgZm9vdGVyIHR3aWNlLlxuICAgICAqL1xuICAgIGNvbnN0IGlvbkZvb3RlckFscmVhZHlBcHBlbmRlZCA9IGJhc2VFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mb290ZXInKTtcbiAgICBpZiAoaW9uRm9vdGVyICYmICFpb25Gb290ZXJBbHJlYWR5QXBwZW5kZWQpIHtcbiAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IGlvbkZvb3Rlci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBjbG9uZWRGb290ZXIgPSBpb25Gb290ZXIuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgYmFzZUVsLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY2xvbmVkRm9vdGVyKTtcbiAgICAgIGlvbkZvb3Rlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICBpb25Gb290ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAvLyBQYWRkaW5nIGlzIGFkZGVkIHRvIHByZXZlbnQgc29tZSBjb250ZW50IGZyb20gYmVpbmcgaGlkZGVuLlxuICAgICAgY29uc3QgcGFnZSA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuaW9uLXBhZ2UnKTtcbiAgICAgIHBhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJywgYCR7Zm9vdGVySGVpZ2h0fXB4YCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGNvbnRlbnRBbmltYXRpb24pIHtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihjb250ZW50QW5pbWF0aW9uKTtcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbjtcbn07XG5jb25zdCBjcmVhdGVMZWF2ZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjk5LFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMHB4KWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknXG4gIH1dKTtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZHJvcEFuaW1hdGlvbixcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gIH07XG59O1xuLyoqXG4gKiBNZCBNb2RhbCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGV4cGFuZFRvU2Nyb2xsXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgfSA9IGN1cnJlbnRCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVTaGVldExlYXZlQW5pbWF0aW9uKG9wdHMpIDogY3JlYXRlTGVhdmVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSkuYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xuICAgIGlmIChleHBhbmRUb1Njcm9sbCkge1xuICAgICAgLy8gU2Nyb2xsIGNhbiBvbmx5IGJlIGRvbmUgd2hlbiB0aGUgbW9kYWwgaXMgZnVsbHkgZXhwYW5kZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGV4cGFuZFRvU2Nyb2xsIGlzIGRpc2FibGVkLCB3ZSBuZWVkIHRvIHN3YXBcbiAgICAgKiB0aGUgdmlzaWJpbGl0eSB0byB0aGUgb3JpZ2luYWwsIHNvIHRoZSBmb290ZXJcbiAgICAgKiBkaXNtaXNzZXMgd2l0aCB0aGUgbW9kYWwgYW5kIGRvZXNuJ3Qgc3RheVxuICAgICAqIHVudGlsIHRoZSBtb2RhbCBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgKi9cbiAgICBjb25zdCBpb25Gb290ZXIgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWZvb3RlcicpO1xuICAgIGlmIChpb25Gb290ZXIpIHtcbiAgICAgIGNvbnN0IGNsb25lZEZvb3RlciA9IGJhc2VFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mb290ZXInKTtcbiAgICAgIGlvbkZvb3Rlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgaW9uRm9vdGVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIGNsb25lZEZvb3Rlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICBjbG9uZWRGb290ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBjb25zdCBwYWdlID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5pb24tcGFnZScpO1xuICAgICAgcGFnZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbjtcbn07XG5jb25zdCBjcmVhdGVTaGVldEdlc3R1cmUgPSAoYmFzZUVsLCBiYWNrZHJvcEVsLCB3cmFwcGVyRWwsIGluaXRpYWxCcmVha3BvaW50LCBiYWNrZHJvcEJyZWFrcG9pbnQsIGFuaW1hdGlvbiwgYnJlYWtwb2ludHMgPSBbXSwgZXhwYW5kVG9TY3JvbGwsIGdldEN1cnJlbnRCcmVha3BvaW50LCBvbkRpc21pc3MsIG9uQnJlYWtwb2ludENoYW5nZSkgPT4ge1xuICAvLyBEZWZhdWx0cyBmb3IgdGhlIHNoZWV0IHN3aXBlIGFuaW1hdGlvblxuICBjb25zdCBkZWZhdWx0QmFja2Ryb3AgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMC4wMVxuICB9XTtcbiAgY29uc3QgY3VzdG9tQmFja2Ryb3AgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEgLSBiYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgb3BhY2l0eTogMFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDBcbiAgfV07XG4gIGNvbnN0IFNoZWV0RGVmYXVsdHMgPSB7XG4gICAgV1JBUFBFUl9LRVlGUkFNRVM6IFt7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKSdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDEsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgIH1dLFxuICAgIEJBQ0tEUk9QX0tFWUZSQU1FUzogYmFja2Ryb3BCcmVha3BvaW50ICE9PSAwID8gY3VzdG9tQmFja2Ryb3AgOiBkZWZhdWx0QmFja2Ryb3AsXG4gICAgQ09OVEVOVF9LRVlGUkFNRVM6IFt7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH0sIHtcbiAgICAgIG9mZnNldDogMSxcbiAgICAgIG1heEhlaWdodDogJzAlJ1xuICAgIH1dXG4gIH07XG4gIGNvbnN0IGNvbnRlbnRFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tY29udGVudCcpO1xuICBjb25zdCBoZWlnaHQgPSB3cmFwcGVyRWwuY2xpZW50SGVpZ2h0O1xuICBsZXQgY3VycmVudEJyZWFrcG9pbnQgPSBpbml0aWFsQnJlYWtwb2ludDtcbiAgbGV0IG9mZnNldCA9IDA7XG4gIGxldCBjYW5EaXNtaXNzQmxvY2tzR2VzdHVyZSA9IGZhbHNlO1xuICBsZXQgY2FjaGVkU2Nyb2xsRWwgPSBudWxsO1xuICBjb25zdCBjYW5EaXNtaXNzTWF4U3RlcCA9IDAuOTU7XG4gIGNvbnN0IG1heEJyZWFrcG9pbnQgPSBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgbWluQnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzWzBdO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gYW5pbWF0aW9uLmNoaWxkQW5pbWF0aW9ucy5maW5kKGFuaSA9PiBhbmkuaWQgPT09ICd3cmFwcGVyQW5pbWF0aW9uJyk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gYW5pbWF0aW9uLmNoaWxkQW5pbWF0aW9ucy5maW5kKGFuaSA9PiBhbmkuaWQgPT09ICdiYWNrZHJvcEFuaW1hdGlvbicpO1xuICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gYW5pbWF0aW9uLmNoaWxkQW5pbWF0aW9ucy5maW5kKGFuaSA9PiBhbmkuaWQgPT09ICdjb250ZW50QW5pbWF0aW9uJyk7XG4gIGNvbnN0IGVuYWJsZUJhY2tkcm9wID0gKCkgPT4ge1xuICAgIGJhc2VFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnYXV0bycpO1xuICAgIGJhY2tkcm9wRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBiYWNrZHJvcCBpcyBlbmFibGVkLCBlbGVtZW50cyBzdWNoXG4gICAgICogYXMgaW5wdXRzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlIG91dHNpZGVcbiAgICAgKiB0aGUgc2hlZXQuXG4gICAgICovXG4gICAgYmFzZUVsLmNsYXNzTGlzdC5yZW1vdmUoRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZUJhY2tkcm9wID0gKCkgPT4ge1xuICAgIGJhc2VFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIGJhY2tkcm9wRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBiYWNrZHJvcCBpcyBlbmFibGVkLCBlbGVtZW50cyBzdWNoXG4gICAgICogYXMgaW5wdXRzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlIG91dHNpZGVcbiAgICAgKiB0aGUgc2hlZXQuXG4gICAgICogQWRkaW5nIHRoaXMgY2xhc3MgZGlzYWJsZXMgZm9jdXMgdHJhcHBpbmdcbiAgICAgKiBmb3IgdGhlIHNoZWV0IHRlbXBvcmFyaWx5LlxuICAgICAqL1xuICAgIGJhc2VFbC5jbGFzc0xpc3QuYWRkKEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUyk7XG4gIH07XG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSB2aXNpYmxlIG1vZGFsIGZvb3RlciB3aGVuIGBleHBhbmRUb1Njcm9sbGAgaXMgZGlzYWJsZWQuXG4gICAqIEBwYXJhbSBmb290ZXIgVGhlIGZvb3RlciB0byBzaG93LlxuICAgKi9cbiAgY29uc3Qgc3dhcEZvb3RlclZpc2liaWxpdHkgPSBmb290ZXIgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRm9vdGVyID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mb290ZXInKTtcbiAgICBpZiAoIW9yaWdpbmFsRm9vdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsb25lZEZvb3RlciA9IHdyYXBwZXJFbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgZm9vdGVyVG9IaWRlID0gZm9vdGVyID09PSAnb3JpZ2luYWwnID8gY2xvbmVkRm9vdGVyIDogb3JpZ2luYWxGb290ZXI7XG4gICAgY29uc3QgZm9vdGVyVG9TaG93ID0gZm9vdGVyID09PSAnb3JpZ2luYWwnID8gb3JpZ2luYWxGb290ZXIgOiBjbG9uZWRGb290ZXI7XG4gICAgZm9vdGVyVG9TaG93LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgZm9vdGVyVG9TaG93LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICBjb25zdCBwYWdlID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5pb24tcGFnZScpO1xuICAgIGlmIChmb290ZXIgPT09ICdvcmlnaW5hbCcpIHtcbiAgICAgIHBhZ2Uuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhZ2VQYWRkaW5nID0gZm9vdGVyVG9TaG93LmNsaWVudEhlaWdodDtcbiAgICAgIHBhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJywgYCR7cGFnZVBhZGRpbmd9cHhgKTtcbiAgICB9XG4gICAgZm9vdGVyVG9IaWRlLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICBmb290ZXJUb0hpZGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH07XG4gIC8qKlxuICAgKiBBZnRlciB0aGUgZW50ZXJpbmcgYW5pbWF0aW9uIGNvbXBsZXRlcyxcbiAgICogd2UgbmVlZCB0byBzZXQgdGhlIGFuaW1hdGlvbiB0byBnbyBmcm9tXG4gICAqIG9mZnNldCAwIHRvIG9mZnNldCAxIHNvIHRoYXQgdXNlcnMgY2FuXG4gICAqIHN3aXBlIGluIGFueSBkaXJlY3Rpb24uIFdlIHRoZW4gc2V0IHRoZVxuICAgKiBhbmltYXRpb24gb2Zmc2V0IHRvIHRoZSBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICogc28gdGhlcmUgaXMgbm8gZmxpY2tlcmluZy5cbiAgICovXG4gIGlmICh3cmFwcGVyQW5pbWF0aW9uICYmIGJhY2tkcm9wQW5pbWF0aW9uKSB7XG4gICAgd3JhcHBlckFuaW1hdGlvbi5rZXlmcmFtZXMoWy4uLlNoZWV0RGVmYXVsdHMuV1JBUFBFUl9LRVlGUkFNRVNdKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvbi5rZXlmcmFtZXMoWy4uLlNoZWV0RGVmYXVsdHMuQkFDS0RST1BfS0VZRlJBTUVTXSk7XG4gICAgY29udGVudEFuaW1hdGlvbiA9PT0gbnVsbCB8fCBjb250ZW50QW5pbWF0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50QW5pbWF0aW9uLmtleWZyYW1lcyhbLi4uU2hlZXREZWZhdWx0cy5DT05URU5UX0tFWUZSQU1FU10pO1xuICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDEgLSBjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgLyoqXG4gICAgICogSWYgYmFja2Ryb3AgaXMgbm90IGVuYWJsZWQsIHRoZW4gY29udGVudFxuICAgICAqIGJlaGluZCBtb2RhbCBzaG91bGQgYmUgY2xpY2thYmxlLiBUbyBkbyB0aGlzLCB3ZSBuZWVkXG4gICAgICogdG8gcmVtb3ZlIHBvaW50ZXItZXZlbnRzIGZyb20gaW9uLW1vZGFsIGFzIGEgd2hvbGUuXG4gICAgICogaW9uLWJhY2tkcm9wIGFuZCAubW9kYWwtd3JhcHBlciBhbHdheXMgaGF2ZSBwb2ludGVyLWV2ZW50czogYXV0b1xuICAgICAqIGFwcGxpZWQsIHNvIHRoZSBtb2RhbCBjb250ZW50IGNhbiBzdGlsbCBiZSBpbnRlcmFjdGVkIHdpdGguXG4gICAgICovXG4gICAgY29uc3Qgc2hvdWxkRW5hYmxlQmFja2Ryb3AgPSBjdXJyZW50QnJlYWtwb2ludCA+IGJhY2tkcm9wQnJlYWtwb2ludDtcbiAgICBpZiAoc2hvdWxkRW5hYmxlQmFja2Ryb3ApIHtcbiAgICAgIGVuYWJsZUJhY2tkcm9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc2FibGVCYWNrZHJvcCgpO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudEVsICYmIGN1cnJlbnRCcmVha3BvaW50ICE9PSBtYXhCcmVha3BvaW50ICYmIGV4cGFuZFRvU2Nyb2xsKSB7XG4gICAgY29udGVudEVsLnNjcm9sbFkgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBjYW5TdGFydCA9IGRldGFpbCA9PiB7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHN3aXBpbmcgb24gdGhlIGNvbnRlbnQsIHN3aXBpbmcgc2hvdWxkIG9ubHkgYmUgcG9zc2libGUgaWYgdGhlIGNvbnRlbnRcbiAgICAgKiBpcyBzY3JvbGxlZCBhbGwgdGhlIHdheSB0byB0aGUgdG9wIHNvIHRoYXQgd2UgZG8gbm90IGludGVyZmVyZSB3aXRoIHNjcm9sbGluZy5cbiAgICAgKlxuICAgICAqIFdlIGNhbm5vdCBhc3N1bWUgdGhhdCB0aGUgYGlvbi1jb250ZW50YCB0YXJnZXQgd2lsbCByZW1haW4gY29uc2lzdGVudCBiZXR3ZWVuIHN3aXBlcy5cbiAgICAgKiBGb3IgZXhhbXBsZSwgd2hlbiB1c2luZyBpb24tbmF2IHdpdGhpbiBhIG1vZGFsIGl0IGlzIHBvc3NpYmxlIHRvIHN3aXBlLCBwdXNoIGEgdmlldyxcbiAgICAgKiBhbmQgdGhlbiBzd2lwZSBhZ2Fpbi4gVGhlIHRhcmdldCBjb250ZW50IHdpbGwgbm90IGJlIHRoZSBzYW1lIGJldHdlZW4gc3dpcGVzLlxuICAgICAqL1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudChkZXRhaWwuZXZlbnQudGFyZ2V0KTtcbiAgICBjdXJyZW50QnJlYWtwb2ludCA9IGdldEN1cnJlbnRCcmVha3BvaW50KCk7XG4gICAgLyoqXG4gICAgICogSWYgYGV4cGFuZFRvU2Nyb2xsYCBpcyBkaXNhYmxlZCwgd2Ugc2hvdWxkIG5vdCBhbGxvdyB0aGUgc3dpcGUgZ2VzdHVyZVxuICAgICAqIHRvIHN0YXJ0IGlmIHRoZSBjb250ZW50IGlzIG5vdCBzY3JvbGxlZCB0byB0aGUgdG9wLlxuICAgICAqL1xuICAgIGlmICghZXhwYW5kVG9TY3JvbGwgJiYgY29udGVudEVsKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGlzSW9uQ29udGVudChjb250ZW50RWwpID8gZ2V0RWxlbWVudFJvb3QoY29udGVudEVsKS5xdWVyeVNlbGVjdG9yKCcuaW5uZXItc2Nyb2xsJykgOiBjb250ZW50RWw7XG4gICAgICByZXR1cm4gc2Nyb2xsRWwuc2Nyb2xsVG9wID09PSAwO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEJyZWFrcG9pbnQgPT09IDEgJiYgY29udGVudEVsKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtb2RhbCBzaG91bGQgbmV2ZXIgc3dpcGUgdG8gY2xvc2Ugb24gdGhlIGNvbnRlbnQgd2l0aCBhIHJlZnJlc2hlci5cbiAgICAgICAqIE5vdGUgMTogV2UgY2Fubm90IHNvbHZlIHRoaXMgYnkgbWFraW5nIHRoaXMgZ2VzdHVyZSBoYXZlIGEgaGlnaGVyIHByaW9yaXR5IHRoYW5cbiAgICAgICAqIHRoZSByZWZyZXNoZXIgZ2VzdHVyZSBhcyB0aGUgaU9TIG5hdGl2ZSByZWZyZXNoIGdlc3R1cmUgdXNlcyBhIHNjcm9sbCBsaXN0ZW5lciBpblxuICAgICAgICogYWRkaXRpb24gdG8gYSBnZXN0dXJlLlxuICAgICAgICpcbiAgICAgICAqIE5vdGUgMjogRG8gbm90IHVzZSBnZXRTY3JvbGxFbGVtZW50IGhlcmUgYmVjYXVzZSB3ZSBuZWVkIHRoaXMgdG8gYmUgYSBzeW5jaHJvbm91c1xuICAgICAgICogb3BlcmF0aW9uLCBhbmQgZ2V0U2Nyb2xsRWxlbWVudCBpcyBhc3luY2hyb25vdXMuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gaXNJb25Db250ZW50KGNvbnRlbnRFbCkgPyBnZXRFbGVtZW50Um9vdChjb250ZW50RWwpLnF1ZXJ5U2VsZWN0b3IoJy5pbm5lci1zY3JvbGwnKSA6IGNvbnRlbnRFbDtcbiAgICAgIGNvbnN0IGhhc1JlZnJlc2hlckluQ29udGVudCA9ICEhY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXInKTtcbiAgICAgIHJldHVybiAhaGFzUmVmcmVzaGVySW5Db250ZW50ICYmIHNjcm9sbEVsLnNjcm9sbFRvcCA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IG9uU3RhcnQgPSBkZXRhaWwgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIGNhbkRpc21pc3MgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgdHJ1ZWBcbiAgICAgKiB0aGVuIHVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIHN3aXBlIGRvd25cbiAgICAgKiB1bnRpbCBhIHRocmVzaG9sZCBpcyBoaXQuIEF0IHRoYXQgcG9pbnQsXG4gICAgICogdGhlIGNhcmQgbW9kYWwgc2hvdWxkIG5vdCBwcm9jZWVkIGFueSBmdXJ0aGVyLlxuICAgICAqXG4gICAgICogY2FuRGlzbWlzcyBpcyBuZXZlciBmaXJlZCB2aWEgZ2VzdHVyZSBpZiB0aGVyZSBpc1xuICAgICAqIG5vIDAgYnJlYWtwb2ludC4gSG93ZXZlciwgaXQgY2FuIGJlIGZpcmVkIGlmIHRoZSB1c2VyXG4gICAgICogcHJlc3NlcyBFc2Mgb3IgdGhlIGhhcmR3YXJlIGJhY2sgYnV0dG9uLlxuICAgICAqIFRPRE8gKEZXLTkzNylcbiAgICAgKiBSZW1vdmUgdW5kZWZpbmVkIGNoZWNrXG4gICAgICovXG4gICAgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmUgPSBiYXNlRWwuY2FuRGlzbWlzcyAhPT0gdW5kZWZpbmVkICYmIGJhc2VFbC5jYW5EaXNtaXNzICE9PSB0cnVlICYmIG1pbkJyZWFrcG9pbnQgPT09IDA7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIHNjcm9sbCBlbGVtZW50IHJlZmVyZW5jZSB3aGVuIHRoZSBnZXN0dXJlIHN0YXJ0cyxcbiAgICAgKiB0aGlzIGFsbG93cyB1cyB0byBhdm9pZCBxdWVyeWluZyB0aGUgRE9NIGZvciB0aGUgdGFyZ2V0IGluIG9uTW92ZSxcbiAgICAgKiB3aGljaCB3b3VsZCBpbXBhY3QgcGVyZm9ybWFuY2Ugc2lnbmlmaWNhbnRseS5cbiAgICAgKi9cbiAgICBpZiAoIWV4cGFuZFRvU2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudChkZXRhaWwuZXZlbnQudGFyZ2V0KTtcbiAgICAgIGNhY2hlZFNjcm9sbEVsID0gdGFyZ2V0RWwgJiYgaXNJb25Db250ZW50KHRhcmdldEVsKSA/IGdldEVsZW1lbnRSb290KHRhcmdldEVsKS5xdWVyeVNlbGVjdG9yKCcuaW5uZXItc2Nyb2xsJykgOiB0YXJnZXRFbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgZXhwYW5kVG9TY3JvbGwgaXMgZGlzYWJsZWQsIHdlIG5lZWQgdG8gc3dhcFxuICAgICAqIHRoZSBmb290ZXIgdmlzaWJpbGl0eSB0byB0aGUgb3JpZ2luYWwsIHNvIGlmIHRoZSBtb2RhbFxuICAgICAqIGlzIGRpc21pc3NlZCwgdGhlIGZvb3RlciBkaXNtaXNzZXMgd2l0aCB0aGUgbW9kYWxcbiAgICAgKiBhbmQgZG9lc24ndCBzdGF5IG9uIHRoZSBzY3JlZW4gYWZ0ZXIgdGhlIG1vZGFsIGlzIGdvbmUuXG4gICAgICovXG4gICAgaWYgKCFleHBhbmRUb1Njcm9sbCkge1xuICAgICAgc3dhcEZvb3RlclZpc2liaWxpdHkoJ29yaWdpbmFsJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBwdWxsaW5nIGRvd24sIHRoZW4gaXQgaXMgcG9zc2libGUgd2UgYXJlIHB1bGxpbmcgb24gdGhlIGNvbnRlbnQuXG4gICAgICogV2UgZG8gbm90IHdhbnQgc2Nyb2xsaW5nIHRvIGhhcHBlbiBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBnZXN0dXJlLlxuICAgICAqL1xuICAgIGlmIChkZXRhaWwuZGVsdGFZID4gMCAmJiBjb250ZW50RWwpIHtcbiAgICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gZmFsc2U7XG4gICAgfVxuICAgIHJhZigoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIERpc21pc3NlcyB0aGUgb3BlbiBrZXlib2FyZCB3aGVuIHRoZSBzaGVldCBkcmFnIGdlc3R1cmUgaXMgc3RhcnRlZC5cbiAgICAgICAqIFNldHMgdGhlIGZvY3VzIG9udG8gdGhlIG1vZGFsIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGJhc2VFbC5mb2N1cygpO1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDEgLSBjdXJyZW50QnJlYWtwb2ludCk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZSA9IGRldGFpbCA9PiB7XG4gICAgLyoqXG4gICAgICogSWYgYGV4cGFuZFRvU2Nyb2xsYCBpcyBkaXNhYmxlZCwgYW5kIGFuIHVwd2FyZHMgc3dpcGUgZ2VzdHVyZSBpcyBkb25lIHdpdGhpblxuICAgICAqIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQsIHdlIHNob3VsZCBub3QgYWxsb3cgdGhlIHN3aXBlIGdlc3R1cmUgdG8gY29udGludWUuXG4gICAgICovXG4gICAgaWYgKCFleHBhbmRUb1Njcm9sbCAmJiBkZXRhaWwuZGVsdGFZIDw9IDAgJiYgY2FjaGVkU2Nyb2xsRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHB1bGxpbmcgZG93biwgdGhlbiBpdCBpcyBwb3NzaWJsZSB3ZSBhcmUgcHVsbGluZyBvbiB0aGUgY29udGVudC5cbiAgICAgKiBXZSBkbyBub3Qgd2FudCBzY3JvbGxpbmcgdG8gaGFwcGVuIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIGdlc3R1cmUuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24sIHNjcm9sbHMgYWxsIHRoZSB3YXkgdXAsIGFuZCB0aGVuXG4gICAgICogcHVsbHMgZG93biBhZ2FpbiBzdWNoIHRoYXQgdGhlIG1vZGFsIHNob3VsZCBzdGFydCB0byBtb3ZlLlxuICAgICAqL1xuICAgIGlmIChkZXRhaWwuZGVsdGFZID4gMCAmJiBjb250ZW50RWwpIHtcbiAgICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIHRoZSBjaGFuZ2UgaW4gZ2VzdHVyZSBwb3NpdGlvbiBvbiB0aGUgWSBheGlzLFxuICAgICAqIGNvbXB1dGUgd2hlcmUgdGhlIG9mZnNldCBvZiB0aGUgYW5pbWF0aW9uIHNob3VsZCBiZVxuICAgICAqIHJlbGF0aXZlIHRvIHdoZXJlIHRoZSB1c2VyIGRyYWdnZWQuXG4gICAgICovXG4gICAgY29uc3QgaW5pdGlhbFN0ZXAgPSAxIC0gY3VycmVudEJyZWFrcG9pbnQ7XG4gICAgY29uc3Qgc2Vjb25kVG9MYXN0QnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzLmxlbmd0aCA+IDEgPyAxIC0gYnJlYWtwb2ludHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RlcCA9IGluaXRpYWxTdGVwICsgZGV0YWlsLmRlbHRhWSAvIGhlaWdodDtcbiAgICBjb25zdCBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPSBzZWNvbmRUb0xhc3RCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgJiYgc3RlcCA+PSBzZWNvbmRUb0xhc3RCcmVha3BvaW50ICYmIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlO1xuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBibG9ja2luZyB0aGUgZ2VzdHVyZSBmcm9tIGRpc21pc3NpbmcsXG4gICAgICogc2V0IHRoZSBtYXggc3RlcCB2YWx1ZSBzbyB0aGF0IHRoZSBzaGVldCBjYW5ub3QgYmVcbiAgICAgKiBjb21wbGV0ZWx5IGhpZGRlbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYXhTdGVwID0gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID8gY2FuRGlzbWlzc01heFN0ZXAgOiAwLjk5OTk7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGJsb2NraW5nIHRoZSBnZXN0dXJlIGZyb21cbiAgICAgKiBkaXNtaXNzaW5nLCBjYWxjdWxhdGUgdGhlIHNwcmluZyBtb2RpZmllciB2YWx1ZVxuICAgICAqIHRoaXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgc3RhcnRpbmcgYnJlYWtwb2ludFxuICAgICAqIHZhbHVlIHRvIGdpdmUgdGhlIGdlc3R1cmUgYSBzcHJpbmctbGlrZSBmZWVsaW5nLlxuICAgICAqIE5vdGUgdGhhdCB3aGVuIGlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyBpcyB0cnVlLFxuICAgICAqIHRoZSBtb2RpZmllciBpcyBhbHdheXMgYWRkZWQgdG8gdGhlIGJyZWFrcG9pbnQgdGhhdFxuICAgICAqIGFwcGVhcnMgcmlnaHQgYWZ0ZXIgdGhlIDAgYnJlYWtwb2ludC5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIGlzIGVzc2VudGlhbGx5IHRoZSBwcm9ncmVzc2lvblxuICAgICAqIGJldHdlZW4gc2Vjb25kVG9MYXN0QnJlYWtwb2ludCBhbmQgbWF4U3RlcCB3aGljaCBpc1xuICAgICAqIHdoeSB3ZSBzdWJ0cmFjdCBzZWNvbmRUb0xhc3RCcmVha3BvaW50LiBUaGlzIGxldHMgdXMgZ2V0XG4gICAgICogdGhlIHJlc3VsdCBhcyBhIHZhbHVlIGZyb20gMCB0byAxLlxuICAgICAqL1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgJiYgc2Vjb25kVG9MYXN0QnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkID8gc2Vjb25kVG9MYXN0QnJlYWtwb2ludCArIGNhbGN1bGF0ZVNwcmluZ1N0ZXAoKHN0ZXAgLSBzZWNvbmRUb0xhc3RCcmVha3BvaW50KSAvIChtYXhTdGVwIC0gc2Vjb25kVG9MYXN0QnJlYWtwb2ludCkpIDogc3RlcDtcbiAgICBvZmZzZXQgPSBjbGFtcCgwLjAwMDEsIHByb2Nlc3NlZFN0ZXAsIG1heFN0ZXApO1xuICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAob2Zmc2V0KTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSBkZXRhaWwgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIGV4cGFuZFRvU2Nyb2xsIGlzIGRpc2FibGVkLCB3ZSBzaG91bGQgbm90IGFsbG93IHRoZSBtb3ZlU2hlZXRUb0JyZWFrcG9pbnRcbiAgICAgKiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHN3aXBlIGNvbnRlbnQgdXB3YXJkcyBhbmQgdGhlIGNvbnRlbnRcbiAgICAgKiBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcC5cbiAgICAgKi9cbiAgICBpZiAoIWV4cGFuZFRvU2Nyb2xsICYmIGRldGFpbC5kZWx0YVkgPD0gMCAmJiBjYWNoZWRTY3JvbGxFbCAmJiBjYWNoZWRTY3JvbGxFbC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGdlc3R1cmUgcmVsZWFzZXMsIHdlIG5lZWQgdG8gZGV0ZXJtaW5lXG4gICAgICogdGhlIGNsb3Nlc3QgYnJlYWtwb2ludCB0byBzbmFwIHRvLlxuICAgICAqL1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZGV0YWlsLnZlbG9jaXR5WTtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAoZGV0YWlsLmRlbHRhWSArIHZlbG9jaXR5ICogMzUwKSAvIGhlaWdodDtcbiAgICBjb25zdCBkaWZmID0gY3VycmVudEJyZWFrcG9pbnQgLSB0aHJlc2hvbGQ7XG4gICAgY29uc3QgY2xvc2VzdCA9IGJyZWFrcG9pbnRzLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGIgLSBkaWZmKSA8IE1hdGguYWJzKGEgLSBkaWZmKSA/IGIgOiBhO1xuICAgIH0pO1xuICAgIG1vdmVTaGVldFRvQnJlYWtwb2ludCh7XG4gICAgICBicmVha3BvaW50OiBjbG9zZXN0LFxuICAgICAgYnJlYWtwb2ludE9mZnNldDogb2Zmc2V0LFxuICAgICAgY2FuRGlzbWlzczogY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmUsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBzd2lwZSBpcyB1c2VyLWRyaXZlbiwgc28gd2Ugc2hvdWxkXG4gICAgICAgKiBhbHdheXMgYW5pbWF0ZSB3aGVuIHRoZSBnZXN0dXJlIGVuZHMuXG4gICAgICAgKi9cbiAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG1vdmVTaGVldFRvQnJlYWtwb2ludCA9IG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJyZWFrcG9pbnQsXG4gICAgICBjYW5EaXNtaXNzLFxuICAgICAgYnJlYWtwb2ludE9mZnNldCxcbiAgICAgIGFuaW1hdGVkXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogY2FuRGlzbWlzcyBzaG91bGQgb25seSBwcmV2ZW50IHNuYXBwaW5nXG4gICAgICogd2hlbiB1c2VycyBhcmUgdHJ5aW5nIHRvIGRpc21pc3MuIElmIGNhbkRpc21pc3NcbiAgICAgKiBpcyBwcmVzZW50IGJ1dCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gc3dpcGUgdXB3YXJkcyxcbiAgICAgKiB3ZSBzaG91bGQgYWxsb3cgdGhhdCB0byBoYXBwZW4sXG4gICAgICovXG4gICAgY29uc3Qgc2hvdWxkUHJldmVudERpc21pc3MgPSBjYW5EaXNtaXNzICYmIGJyZWFrcG9pbnQgPT09IDA7XG4gICAgY29uc3Qgc25hcFRvQnJlYWtwb2ludCA9IHNob3VsZFByZXZlbnREaXNtaXNzID8gY3VycmVudEJyZWFrcG9pbnQgOiBicmVha3BvaW50O1xuICAgIGNvbnN0IHNob3VsZFJlbWFpbk9wZW4gPSBzbmFwVG9CcmVha3BvaW50ICE9PSAwO1xuICAgIGN1cnJlbnRCcmVha3BvaW50ID0gMDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGFuaW1hdGlvbiBzbyB0aGF0IGl0IHBsYXlzIGZyb21cbiAgICAgKiB0aGUgbGFzdCBvZmZzZXQgdG8gdGhlIGNsb3Nlc3Qgc25hcCBwb2ludC5cbiAgICAgKi9cbiAgICBpZiAod3JhcHBlckFuaW1hdGlvbiAmJiBiYWNrZHJvcEFuaW1hdGlvbikge1xuICAgICAgd3JhcHBlckFuaW1hdGlvbi5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7YnJlYWtwb2ludE9mZnNldCAqIDEwMH0lKWBcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7KDEgLSBzbmFwVG9CcmVha3BvaW50KSAqIDEwMH0lKWBcbiAgICAgIH1dKTtcbiAgICAgIGJhY2tkcm9wQW5pbWF0aW9uLmtleWZyYW1lcyhbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG9wYWNpdHk6IGBjYWxjKHZhcigtLWJhY2tkcm9wLW9wYWNpdHkpICogJHtnZXRCYWNrZHJvcFZhbHVlRm9yU2hlZXQoMSAtIGJyZWFrcG9pbnRPZmZzZXQsIGJhY2tkcm9wQnJlYWtwb2ludCl9KWBcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBvcGFjaXR5OiBgY2FsYyh2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSAqICR7Z2V0QmFja2Ryb3BWYWx1ZUZvclNoZWV0KHNuYXBUb0JyZWFrcG9pbnQsIGJhY2tkcm9wQnJlYWtwb2ludCl9KWBcbiAgICAgIH1dKTtcbiAgICAgIGlmIChjb250ZW50QW5pbWF0aW9uKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9kYWwgY29udGVudCBzaG91bGQgc2Nyb2xsIGF0IGFueSBicmVha3BvaW50IHdoZW4gZXhwYW5kVG9TY3JvbGxcbiAgICAgICAgICogaXMgZGlzYWJsZWQuIEluIG9yZGVyIHRvIGRvIHRoaXMsIHRoZSBjb250ZW50IG5lZWRzIHRvIGJlIGNvbXBsZXRlbHlcbiAgICAgICAgICogdmlld2FibGUgc28gc2Nyb2xsaW5nIGNhbiBhY2Nlc3MgZXZlcnl0aGluZy4gT3RoZXJ3aXNlLCB0aGUgZGVmYXVsdFxuICAgICAgICAgKiBiZWhhdmlvciB3b3VsZCBzaG93IHRoZSBjb250ZW50IG9mZiB0aGUgc2NyZWVuIGFuZCBvbmx5IGFsbG93XG4gICAgICAgICAqIHNjcm9sbGluZyB3aGVuIHRoZSBzaGVldCBpcyBmdWxseSBleHBhbmRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnRlbnRBbmltYXRpb24ua2V5ZnJhbWVzKFt7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIG1heEhlaWdodDogYCR7KDEgLSBicmVha3BvaW50T2Zmc2V0KSAqIDEwMH0lYFxuICAgICAgICB9LCB7XG4gICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgIG1heEhlaWdodDogYCR7c25hcFRvQnJlYWtwb2ludCAqIDEwMH0lYFxuICAgICAgICB9XSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGVwKDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXN0dXJlIHNob3VsZCByZW1haW4gZGlzYWJsZWQgdW50aWwgdGhlXG4gICAgICogc25hcHBpbmcgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgKi9cbiAgICBnZXN0dXJlLmVuYWJsZShmYWxzZSk7XG4gICAgLyoqXG4gICAgICogSWYgZXhwYW5kVG9TY3JvbGwgaXMgZGlzYWJsZWQsIHdlIG5lZWQgdG8gc3dhcFxuICAgICAqIHRoZSBmb290ZXIgdmlzaWJpbGl0eSB0byB0aGUgY2xvbmVkIG9uZSBzbyB0aGUgZm9vdGVyXG4gICAgICogZG9lc24ndCBmbGlja2VyIHdoZW4gdGhlIHNoZWV0J3MgaGVpZ2h0IGlzIGFuaW1hdGVkLlxuICAgICAqL1xuICAgIGlmICghZXhwYW5kVG9TY3JvbGwgJiYgc2hvdWxkUmVtYWluT3Blbikge1xuICAgICAgc3dhcEZvb3RlclZpc2liaWxpdHkoJ2Nsb25lZCcpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkUHJldmVudERpc21pc3MpIHtcbiAgICAgIGhhbmRsZUNhbkRpc21pc3MoYmFzZUVsLCBhbmltYXRpb24pO1xuICAgIH0gZWxzZSBpZiAoIXNob3VsZFJlbWFpbk9wZW4pIHtcbiAgICAgIG9uRGlzbWlzcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHNjcm9sbGluZyBpbW1lZGlhdGVseSBpZiB0aGUgc2hlZXQgaXMgYWJvdXQgdG8gZnVsbHkgZXhwYW5kXG4gICAgICogb3IgaWYgaXQgYWxsb3dzIHNjcm9sbGluZyBhdCBhbnkgYnJlYWtwb2ludC4gV2l0aG91dCB0aGlzLCB0aGVyZSB3b3VsZFxuICAgICAqIGJlIGEgfjUwMG1zIGRlbGF5IHdoaWxlIHRoZSBtb2RhbCBhbmltYXRpb24gY29tcGxldGVzLCBjYXVzaW5nIGFcbiAgICAgKiBub3RpY2VhYmxlIGxhZy4gTmF0aXZlIGlPUyBhbGxvd3Mgc2Nyb2xsaW5nIGFzIHNvb24gYXMgdGhlIGdlc3R1cmUgaXNcbiAgICAgKiByZWxlYXNlZCwgc28gd2UgYWxpZ24gd2l0aCB0aGF0IGJlaGF2aW9yLlxuICAgICAqL1xuICAgIGlmIChjb250ZW50RWwgJiYgKHNuYXBUb0JyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRzLmxlbmd0aCAtIDFdIHx8ICFleHBhbmRUb1Njcm9sbCkpIHtcbiAgICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgYW5pbWF0aW9uLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFJlbWFpbk9wZW4pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPbmNlIHRoZSBzbmFwcGluZyBhbmltYXRpb24gY29tcGxldGVzLFxuICAgICAgICAgICAqIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGFuaW1hdGlvbiB0byBnb1xuICAgICAgICAgICAqIGZyb20gMCB0byAxIHNvIHVzZXJzIGNhbiBzd2lwZSBpbiBhbnkgZGlyZWN0aW9uLlxuICAgICAgICAgICAqIFdlIHRoZW4gc2V0IHRoZSBhbmltYXRpb24gb2Zmc2V0IHRvIHRoZSBjdXJyZW50XG4gICAgICAgICAgICogYnJlYWtwb2ludCBzbyB0aGF0IGl0IHN0YXJ0cyBhdCB0aGUgc25hcHBlZCBwb3NpdGlvbi5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAod3JhcHBlckFuaW1hdGlvbiAmJiBiYWNrZHJvcEFuaW1hdGlvbikge1xuICAgICAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5rZXlmcmFtZXMoWy4uLlNoZWV0RGVmYXVsdHMuV1JBUFBFUl9LRVlGUkFNRVNdKTtcbiAgICAgICAgICAgICAgYmFja2Ryb3BBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLkJBQ0tEUk9QX0tFWUZSQU1FU10pO1xuICAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uID09PSBudWxsIHx8IGNvbnRlbnRBbmltYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLkNPTlRFTlRfS0VZRlJBTUVTXSk7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDEgLSBzbmFwVG9CcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBzbmFwVG9CcmVha3BvaW50O1xuICAgICAgICAgICAgICBvbkJyZWFrcG9pbnRDaGFuZ2UoY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogQmFja2Ryb3Agc2hvdWxkIGJlY29tZSBlbmFibGVkXG4gICAgICAgICAgICAgICAqIGFmdGVyIHRoZSBiYWNrZHJvcEJyZWFrcG9pbnQgdmFsdWVcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIGNvbnN0IHNob3VsZEVuYWJsZUJhY2tkcm9wID0gY3VycmVudEJyZWFrcG9pbnQgPiBiYWNrZHJvcEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgIGlmIChzaG91bGRFbmFibGVCYWNrZHJvcCkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tkcm9wKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZUJhY2tkcm9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2VzdHVyZS5lbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIG11c3QgYmUgYSBvbmUgdGltZSBjYWxsYmFja1xuICAgICAgICAgKiBvdGhlcndpc2UgYSBuZXcgY2FsbGJhY2sgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCBldmVyeSB0aW1lIG9uRW5kIHJ1bnMuXG4gICAgICAgICAqL1xuICAgICAgfSwge1xuICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgIH0pLnByb2dyZXNzRW5kKDEsIDAsIGFuaW1hdGVkID8gNTAwIDogMCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGdlc3R1cmUgPSBjcmVhdGVHZXN0dXJlKHtcbiAgICBlbDogd3JhcHBlckVsLFxuICAgIGdlc3R1cmVOYW1lOiAnbW9kYWxTaGVldCcsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiA0MCxcbiAgICBkaXJlY3Rpb246ICd5JyxcbiAgICB0aHJlc2hvbGQ6IDEwLFxuICAgIGNhblN0YXJ0LFxuICAgIG9uU3RhcnQsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGdlc3R1cmUsXG4gICAgbW92ZVNoZWV0VG9CcmVha3BvaW50XG4gIH07XG59O1xuY29uc3QgbW9kYWxJb3NDc3MgPSBcIjpob3N0ey0td2lkdGg6MTAwJTstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLW92ZXJmbG93OmhpZGRlbjstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWJveC1zaGFkb3c6bm9uZTstLWJhY2tkcm9wLW9wYWNpdHk6MDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtjb250YWluOnN0cmljdH0ubW9kYWwtd3JhcHBlcixpb24tYmFja2Ryb3B7cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgub3ZlcmxheS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX0ubW9kYWwtd3JhcHBlciwubW9kYWwtc2hhZG93e2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjEwfS5tb2RhbC1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjUwMHB4Oy0taW9uLXNhZmUtYXJlYS10b3A6MHB4Oy0taW9uLXNhZmUtYXJlYS1ib3R0b206MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjYwMHB4fX0ubW9kYWwtaGFuZGxle2xlZnQ6MHB4O3JpZ2h0OjBweDt0b3A6NXB4O2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzZweDtoZWlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Ym9yZGVyOjA7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKSk7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoxMX0ubW9kYWwtaGFuZGxlOjpiZWZvcmV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjM2cHg7aGVpZ2h0OjVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtjb250ZW50OlxcXCJcXFwifTpob3N0KC5tb2RhbC1zaGVldCl7LS1oZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSArIDEwcHgpKX06aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC13cmFwcGVyLDpob3N0KC5tb2RhbC1zaGVldCkgLm1vZGFsLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MH06aG9zdCgubW9kYWwtc2hlZXQubW9kYWwtbm8tZXhwYW5kLXNjcm9sbCkgaW9uLWZvb3Rlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDt3aWR0aDp2YXIoLS13aWR0aCl9Omhvc3R7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjQpfTpob3N0KC5tb2RhbC1jYXJkKSw6aG9zdCgubW9kYWwtc2hlZXQpey0tYm9yZGVyLXJhZGl1czoxMHB4fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpezpob3N0ey0tYm9yZGVyLXJhZGl1czoxMHB4fX0ubW9kYWwtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtAc3VwcG9ydHMgKHdpZHRoOiBtYXgoMHB4LCAxcHgpKXs6aG9zdCgubW9kYWwtY2FyZCl7LS1oZWlnaHQ6Y2FsYygxMDAlIC0gbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSkgLSAxMHB4KX19QHN1cHBvcnRzIG5vdCAod2lkdGg6IG1heCgwcHgsIDFweCkpezpob3N0KC5tb2RhbC1jYXJkKXstLWhlaWdodDpjYWxjKDEwMCUgLSA0MHB4KX19Omhvc3QoLm1vZGFsLWNhcmQpIC5tb2RhbC13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjA7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MH06aG9zdCgubW9kYWwtY2FyZCl7LS1iYWNrZHJvcC1vcGFjaXR5OjA7LS13aWR0aDoxMDAlOy1tcy1mbGV4LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZH06aG9zdCgubW9kYWwtY2FyZCkgLm1vZGFsLXNoYWRvd3tkaXNwbGF5Om5vbmV9Omhvc3QoLm1vZGFsLWNhcmQpIGlvbi1iYWNrZHJvcHtwb2ludGVyLWV2ZW50czpub25lfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7Omhvc3QoLm1vZGFsLWNhcmQpey0td2lkdGg6Y2FsYygxMDAlIC0gMTIwcHgpOy0taGVpZ2h0OmNhbGMoMTAwJSAtICgxMjBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSArIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKSkpOy0tbWF4LXdpZHRoOjcyMHB4Oy0tbWF4LWhlaWdodDoxMDAwcHg7LS1iYWNrZHJvcC1vcGFjaXR5OjA7LS1ib3gtc2hhZG93OjBweCAwcHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTstd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dH06aG9zdCgubW9kYWwtY2FyZCkgLm1vZGFsLXdyYXBwZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfTpob3N0KC5tb2RhbC1jYXJkKSAubW9kYWwtc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpfX06aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjA7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MH06aG9zdCgubW9kYWwtc2hlZXQubW9kYWwtbm8tZXhwYW5kLXNjcm9sbCkgaW9uLWZvb3RlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBle3BhZGRpbmctdG9wOjZweH1cIjtcbmNvbnN0IElvbk1vZGFsSW9zU3R5bGUwID0gbW9kYWxJb3NDc3M7XG5jb25zdCBtb2RhbE1kQ3NzID0gXCI6aG9zdHstLXdpZHRoOjEwMCU7LS1taW4td2lkdGg6YXV0bzstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OjEwMCU7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS1vdmVyZmxvdzpoaWRkZW47LS1ib3JkZXItcmFkaXVzOjA7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7LS1ib3gtc2hhZG93Om5vbmU7LS1iYWNrZHJvcC1vcGFjaXR5OjA7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Y29udGFpbjpzdHJpY3R9Lm1vZGFsLXdyYXBwZXIsaW9uLWJhY2tkcm9we3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLm92ZXJsYXktaGlkZGVuKXtkaXNwbGF5Om5vbmV9Lm1vZGFsLXdyYXBwZXIsLm1vZGFsLXNoYWRvd3tib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtvdmVyZmxvdzp2YXIoLS1vdmVyZmxvdyk7ei1pbmRleDoxMH0ubW9kYWwtc2hhZG93e3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCl7Omhvc3R7LS13aWR0aDo2MDBweDstLWhlaWdodDo1MDBweDstLWlvbi1zYWZlLWFyZWEtdG9wOjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA3NjhweCl7Omhvc3R7LS13aWR0aDo2MDBweDstLWhlaWdodDo2MDBweH19Lm1vZGFsLWhhbmRsZXtsZWZ0OjBweDtyaWdodDowcHg7dG9wOjVweDtib3JkZXItcmFkaXVzOjhweDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjM2cHg7aGVpZ2h0OjVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlcjowO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTM1MCwgI2MwYzBiZSkpO2N1cnNvcjpwb2ludGVyO3otaW5kZXg6MTF9Lm1vZGFsLWhhbmRsZTo6YmVmb3Jley13ZWJraXQtcGFkZGluZy1zdGFydDo0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6NHB4O3BhZGRpbmctaW5saW5lLWVuZDo0cHg7cGFkZGluZy10b3A6NHB4O3BhZGRpbmctYm90dG9tOjRweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozNnB4O2hlaWdodDo1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Y29udGVudDpcXFwiXFxcIn06aG9zdCgubW9kYWwtc2hlZXQpey0taGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkgKyAxMHB4KSl9Omhvc3QoLm1vZGFsLXNoZWV0KSAubW9kYWwtd3JhcHBlciw6aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjB9Omhvc3QoLm1vZGFsLXNoZWV0Lm1vZGFsLW5vLWV4cGFuZC1zY3JvbGwpIGlvbi1mb290ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7d2lkdGg6dmFyKC0td2lkdGgpfTpob3N0ey0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zMil9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCl7Omhvc3R7LS1ib3JkZXItcmFkaXVzOjJweDstLWJveC1zaGFkb3c6MCAyOHB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjQpfX0ubW9kYWwtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgNDBweCwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgNDBweCwgIDApO29wYWNpdHk6MC4wMX1cIjtcbmNvbnN0IElvbk1vZGFsTWRTdHlsZTAgPSBtb2RhbE1kQ3NzO1xuY29uc3QgTW9kYWwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxEaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmlvbkJyZWFrcG9pbnREaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJyZWFrcG9pbnREaWRDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5kaWRQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmlvbk1vdW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb3VudFwiLCA3KTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyID0gY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmNvcmVEZWxlZ2F0ZSA9IENvcmVEZWxlZ2F0ZSgpO1xuICAgIHRoaXMuaXNTaGVldE1vZGFsID0gZmFsc2U7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCBtb2RhbCBpcyBiZWluZyBkaXNtaXNzZWQgdmlhIGdlc3R1cmVcbiAgICB0aGlzLmdlc3R1cmVBbmltYXRpb25EaXNtaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5vbkhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaGVldFRyYW5zaXRpb24sXG4gICAgICAgIGhhbmRsZUJlaGF2aW9yXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChoYW5kbGVCZWhhdmlvciAhPT0gJ2N5Y2xlJyB8fCBzaGVldFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNoZWV0IG1vZGFsIHNob3VsZCBub3QgYWR2YW5jZSB0byB0aGUgbmV4dCBicmVha3BvaW50XG4gICAgICAgICAqIGlmIHRoZSBoYW5kbGUgYmVoYXZpb3IgaXMgbm90IGBjeWNsZWAgb3IgaWYgdGhlIGhhbmRsZVxuICAgICAgICAgKiBpcyBjbGlja2VkIHdoaWxlIHRoZSBzaGVldCBpcyBtb3ZpbmcgdG8gYSBicmVha3BvaW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlVG9OZXh0QnJlYWtwb2ludCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaGVldFRyYW5zaXRpb25cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKHNoZWV0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBoYW5kbGUgaXMgZG91YmxlIGNsaWNrZWQgYXQgdGhlIGxhcmdlc3QgYnJlYWtwb2ludCxcbiAgICAgICAgICogaXQgd2lsbCBzdGFydCB0byBtb3ZlIHRvIHRoZSBmaXJzdCBicmVha3BvaW50LiBXaGlsZSB0cmFuc2l0aW9uaW5nLFxuICAgICAgICAgKiB0aGUgYmFja2Ryb3Agd2lsbCBvZnRlbiByZWNlaXZlIHRoZSBzZWNvbmQgY2xpY2suIFdlIHByZXZlbnQgdGhlXG4gICAgICAgICAqIGJhY2tkcm9wIGZyb20gZGlzbWlzc2luZyB0aGUgbW9kYWwgd2hpbGUgbW92aW5nIGJldHdlZW4gYnJlYWtwb2ludHMuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgfTtcbiAgICB0aGlzLm9uTGlmZWN5Y2xlID0gbW9kYWxFdmVudCA9PiB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMudXNlcnNFbGVtZW50O1xuICAgICAgY29uc3QgbmFtZSA9IExJRkVDWUNMRV9NQVBbbW9kYWxFdmVudC50eXBlXTtcbiAgICAgIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDb250cm9sbGVyID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgIHRoaXMuZW50ZXJBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJyZWFrcG9pbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXhwYW5kVG9TY3JvbGwgPSB0cnVlO1xuICAgIHRoaXMuaW5pdGlhbEJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5iYWNrZHJvcEJyZWFrcG9pbnQgPSAwO1xuICAgIHRoaXMuaGFuZGxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFuZGxlQmVoYXZpb3IgPSAnbm9uZSc7XG4gICAgdGhpcy5jb21wb25lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb21wb25lbnRQcm9wcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNzc0NsYXNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgdGhpcy5wcmVzZW50aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmh0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMua2VlcENvbnRlbnRzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwID0gdHJ1ZTtcbiAgICB0aGlzLmNhbkRpc21pc3MgPSB0cnVlO1xuICB9XG4gIG9uSXNPcGVuQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSAmJiBvbGRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJlc2VudCgpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlckNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGVsLFxuICAgICAgdHJpZ2dlckNvbnRyb2xsZXJcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlckNvbnRyb2xsZXIuYWRkQ2xpY2tMaXN0ZW5lcihlbCwgdHJpZ2dlcik7XG4gICAgfVxuICB9XG4gIGJyZWFrcG9pbnRzQ2hhbmdlZChicmVha3BvaW50cykge1xuICAgIGlmIChicmVha3BvaW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNvcnRlZEJyZWFrcG9pbnRzID0gYnJlYWtwb2ludHMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIHByZXBhcmVPdmVybGF5KGVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlci5yZW1vdmVDbGlja0xpc3RlbmVyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIGJyZWFrcG9pbnRzLFxuICAgICAgaW5pdGlhbEJyZWFrcG9pbnQsXG4gICAgICBlbCxcbiAgICAgIGh0bWxBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaXNTaGVldE1vZGFsID0gdGhpcy5pc1NoZWV0TW9kYWwgPSBicmVha3BvaW50cyAhPT0gdW5kZWZpbmVkICYmIGluaXRpYWxCcmVha3BvaW50ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvSW5oZXJpdCA9IFsnYXJpYS1sYWJlbCcsICdyb2xlJ107XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXNUb0luaGVyaXQpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgYSBjb250cm9sbGVyIG1vZGFsIHlvdSBjYW4gc2V0IGF0dHJpYnV0ZXNcbiAgICAgKiB1c2luZyB0aGUgaHRtbEF0dHJpYnV0ZXMgcHJvcGVydHkuIFNpbmNlIHRoZSBhYm92ZSBhdHRyaWJ1dGVzXG4gICAgICogbmVlZCB0byBiZSBpbmhlcml0ZWQgaW5zaWRlIG9mIHRoZSBtb2RhbCwgd2UgbmVlZCB0byBsb29rXG4gICAgICogYW5kIHNlZSBpZiB0aGVzZSBhdHRyaWJ1dGVzIGFyZSBiZWluZyBzZXQgdmlhIGh0bWxBdHRyaWJ1dGVzLlxuICAgICAqXG4gICAgICogV2UgY291bGQgYWx0ZXJuYXRpdmVseSBtb3ZlIHRoaXMgdG8gY29tcG9uZW50RGlkTG9hZCB0byBzaW1wbGlmeSB0aGUgd29ya1xuICAgICAqIGhlcmUsIGJ1dCB3ZSdkIHRoZW4gbmVlZCB0byBtYWtlIGluaGVyaXRlZEF0dHJpYnV0ZXMgYSBTdGF0ZSB2YXJpYWJsZSxcbiAgICAgKiB0aHVzIGNhdXNpbmcgYW5vdGhlciByZW5kZXIgdG8gYWx3YXlzIGhhcHBlbiBhZnRlciB0aGUgZmlyc3QgcmVuZGVyLlxuICAgICAqL1xuICAgIGlmIChodG1sQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdHRyaWJ1dGVzVG9Jbmhlcml0LmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBodG1sQXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiBhbiBhdHRyaWJ1dGUgd2UgbmVlZCB0byBpbmhlcml0IHdhc1xuICAgICAgICAgICAqIHNldCB1c2luZyBodG1sQXR0cmlidXRlcyB0aGVuIGFkZCBpdCB0b1xuICAgICAgICAgICAqIGluaGVyaXRlZEF0dHJpYnV0ZXMgYW5kIHJlbW92ZSBpdCBmcm9tIGh0bWxBdHRyaWJ1dGVzLlxuICAgICAgICAgICAqIFRoaXMgZW5zdXJlcyB0aGUgYXR0cmlidXRlIGlzIGluaGVyaXRlZCBhbmQgbm90XG4gICAgICAgICAgICogc2V0IG9uIHRoZSBob3N0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogSW4gdGhpcyBjYXNlLCBpZiBhbiBpbmhlcml0ZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAqIG9uIHRoZSBob3N0IGVsZW1lbnQgYW5kIHVzaW5nIGh0bWxBdHRyaWJ1dGVzIHRoZW5cbiAgICAgICAgICAgKiBodG1sQXR0cmlidXRlcyB3aW5zLCBidXQgdGhhdCdzIG5vdCBhIHBhdHRlcm4gdGhhdCB3ZSByZWNvbW1lbmQuXG4gICAgICAgICAgICogVGhlIG9ubHkgdGltZSB5b3UnZCBuZWVkIGh0bWxBdHRyaWJ1dGVzIGlzIHdoZW4gdXNpbmcgbW9kYWxDb250cm9sbGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzKSwge1xuICAgICAgICAgICAgW2F0dHJpYnV0ZV06IGh0bWxBdHRyaWJ1dGVzW2F0dHJpYnV0ZV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWxldGUgaHRtbEF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc1NoZWV0TW9kYWwpIHtcbiAgICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB0aGlzLmluaXRpYWxCcmVha3BvaW50O1xuICAgIH1cbiAgICBpZiAoYnJlYWtwb2ludHMgIT09IHVuZGVmaW5lZCAmJiBpbml0aWFsQnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkICYmICFicmVha3BvaW50cy5pbmNsdWRlcyhpbml0aWFsQnJlYWtwb2ludCkpIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnWW91ciBicmVha3BvaW50cyBhcnJheSBtdXN0IGluY2x1ZGUgdGhlIGluaXRpYWxCcmVha3BvaW50IHZhbHVlLicpO1xuICAgIH1cbiAgICBpZiAoISgoX2EgPSB0aGlzLmh0bWxBdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICBzZXRPdmVybGF5SWQodGhpcy5lbCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgbW9kYWwgd2FzIHJlbmRlcmVkIHdpdGggaXNPcGVuPVwidHJ1ZVwiXG4gICAgICogdGhlbiB3ZSBzaG91bGQgb3BlbiBtb2RhbCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIHRoaXMuYnJlYWtwb2ludHNDaGFuZ2VkKHRoaXMuYnJlYWtwb2ludHMpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgYW4gb3ZlcmxheVxuICAgKiBpcyBiZWluZyB1c2VkIGlubGluZSBvciB2aWEgYSBjb250cm9sbGVyL0pTXG4gICAqIGFuZCByZXR1cm5zIHRoZSBjb3JyZWN0IGRlbGVnYXRlLlxuICAgKiBCeSBkZWZhdWx0LCBzdWJzZXF1ZW50IGNhbGxzIHRvIGdldERlbGVnYXRlXG4gICAqIHdpbGwgdXNlIGEgY2FjaGVkIHZlcnNpb24gb2YgdGhlIGRlbGVnYXRlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FsbGluZyBkaXNtaXNzIGFmdGVyXG4gICAqIHByZXNlbnQgc28gdGhhdCB0aGUgY29ycmVjdCBkZWxlZ2F0ZSBpcyBnaXZlbi5cbiAgICovXG4gIGdldERlbGVnYXRlKGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy53b3JraW5nRGVsZWdhdGUgJiYgIWZvcmNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWxlZ2F0ZTogdGhpcy53b3JraW5nRGVsZWdhdGUsXG4gICAgICAgIGlubGluZTogdGhpcy5pbmxpbmVcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIG92ZXJsYXkgaW5saW5lXG4gICAgICogd2UgcG90ZW50aWFsbHkgbmVlZCB0byB1c2UgdGhlIGNvcmVEZWxlZ2F0ZVxuICAgICAqIHNvIHRoYXQgdGhpcyB3b3JrcyBpbiB2YW5pbGxhIEpTIGFwcHMuXG4gICAgICogSWYgYSBkZXZlbG9wZXIgaGFzIHByZXNlbnRlZCB0aGlzIGNvbXBvbmVudFxuICAgICAqIHZpYSBhIGNvbnRyb2xsZXIsIHRoZW4gd2UgY2FuIGFzc3VtZVxuICAgICAqIHRoZSBjb21wb25lbnQgaXMgYWxyZWFkeSBpbiB0aGVcbiAgICAgKiBjb3JyZWN0IHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGlubGluZSA9IHRoaXMuaW5saW5lID0gcGFyZW50RWwgIT09IG51bGwgJiYgIXRoaXMuaGFzQ29udHJvbGxlcjtcbiAgICBjb25zdCBkZWxlZ2F0ZSA9IHRoaXMud29ya2luZ0RlbGVnYXRlID0gaW5saW5lID8gdGhpcy5kZWxlZ2F0ZSB8fCB0aGlzLmNvcmVEZWxlZ2F0ZSA6IHRoaXMuZGVsZWdhdGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlubGluZSxcbiAgICAgIGRlbGVnYXRlXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICogbW9kYWwgaXMgYWxsb3dlZCB0byBkaXNtaXNzIGJhc2VkXG4gICAqIG9uIHRoZSBzdGF0ZSBvZiB0aGUgY2FuRGlzbWlzcyBwcm9wLlxuICAgKi9cbiAgYXN5bmMgY2hlY2tDYW5EaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW5EaXNtaXNzXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBjYW5EaXNtaXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2FuRGlzbWlzcyhkYXRhLCByb2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbkRpc21pc3M7XG4gIH1cbiAgLyoqXG4gICAqIFByZXNlbnQgdGhlIG1vZGFsIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICovXG4gIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgaWYgKHRoaXMucHJlc2VudGVkKSB7XG4gICAgICB1bmxvY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgcHJlc2VudGluZ0VsZW1lbnQsXG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBtb2RhbCBpcyBwcmVzZW50ZWQgbXVsdGlwbGUgdGltZXMgKGlubGluZSBtb2RhbHMpLCB3ZVxuICAgICAqIG5lZWQgdG8gcmVzZXQgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCB0byB0aGUgaW5pdGlhbCBicmVha3BvaW50LlxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB0aGlzLmluaXRpYWxCcmVha3BvaW50O1xuICAgIGNvbnN0IHtcbiAgICAgIGlubGluZSxcbiAgICAgIGRlbGVnYXRlXG4gICAgfSA9IHRoaXMuZ2V0RGVsZWdhdGUodHJ1ZSk7XG4gICAgLyoqXG4gICAgICogRW1pdCBpb25Nb3VudCBzbyBKUyBGcmFtZXdvcmtzIGhhdmUgYW4gb3Bwb3J0dW5pdHlcbiAgICAgKiB0byBhZGQgdGhlIGNoaWxkIGNvbXBvbmVudCB0byB0aGUgRE9NLiBUaGUgY2hpbGRcbiAgICAgKiBjb21wb25lbnQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGlzLnVzZXJzRWxlbWVudCBiZWxvdy5cbiAgICAgKi9cbiAgICB0aGlzLmlvbk1vdW50LmVtaXQoKTtcbiAgICB0aGlzLnVzZXJzRWxlbWVudCA9IGF3YWl0IGF0dGFjaENvbXBvbmVudChkZWxlZ2F0ZSwgZWwsIHRoaXMuY29tcG9uZW50LCBbJ2lvbi1wYWdlJ10sIHRoaXMuY29tcG9uZW50UHJvcHMsIGlubGluZSk7XG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyB0aGUgbGF6eSBsb2FkZWQgYnVpbGQgb2YgU3RlbmNpbCwgd2UgbmVlZCB0byB3YWl0XG4gICAgICogZm9yIGV2ZXJ5IFN0ZW5jaWwgY29tcG9uZW50IGluc3RhbmNlIHRvIGJlIHJlYWR5IGJlZm9yZSBwcmVzZW50aW5nXG4gICAgICogb3RoZXJ3aXNlIHRoZXJlIGNhbiBiZSBhIGZsYXNoIG9mIHVuc3R5bGVkIGNvbnRlbnQuIFdpdGggdGhlXG4gICAgICogY3VzdG9tIGVsZW1lbnRzIGJ1bmRsZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBKUyBmcmFtZXdvcmtcbiAgICAgKiBtb3VudCB0aGUgaW5uZXIgY29udGVudHMgb2YgdGhlIG92ZXJsYXkgb3RoZXJ3aXNlIFdlYktpdCBtYXlcbiAgICAgKiBnZXQgdGhlIHRyYW5zaXRpb24gaW5jb3JyZWN0LlxuICAgICAqL1xuICAgIGlmIChoYXNMYXp5QnVpbGQoZWwpKSB7XG4gICAgICBhd2FpdCBkZWVwUmVhZHkodGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBrZWVwQ29udGVudHNNb3VudGVkPVwidHJ1ZVwiIHRoZW4gdGhlXG4gICAgICAgKiBKUyBGcmFtZXdvcmsgaGFzIGFscmVhZHkgbW91bnRlZCB0aGUgaW5uZXJcbiAgICAgICAqIGNvbnRlbnRzIHNvIHRoZXJlIGlzIG5vIG5lZWQgdG8gd2FpdC5cbiAgICAgICAqIE90aGVyd2lzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgSlNcbiAgICAgICAqIEZyYW1ld29yayB0byBtb3VudCB0aGUgaW5uZXIgY29udGVudHNcbiAgICAgICAqIG9mIHRoaXMgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgfSBlbHNlIGlmICghdGhpcy5rZWVwQ29udGVudHNNb3VudGVkKSB7XG4gICAgICBhd2FpdCB3YWl0Rm9yTW91bnQoKTtcbiAgICB9XG4gICAgd3JpdGVUYXNrKCgpID0+IHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpKTtcbiAgICBjb25zdCBoYXNDYXJkTW9kYWwgPSBwcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdlIG5lZWQgdG8gY2hhbmdlIHRoZSBzdGF0dXMgYmFyIGF0IHRoZVxuICAgICAqIHN0YXJ0IG9mIHRoZSBhbmltYXRpb24gc28gdGhhdCBpdCBjb21wbGV0ZXNcbiAgICAgKiBieSB0aGUgdGltZSB0aGUgY2FyZCBhbmltYXRpb24gaXMgZG9uZS5cbiAgICAgKi9cbiAgICBpZiAoaGFzQ2FyZE1vZGFsICYmIGdldElvbk1vZGUodGhpcykgPT09ICdpb3MnKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgb3JpZ2luYWwgc3RhdHVzIGJhciBjb2xvciBiZWZvcmUgdGhlIG1vZGFsIGlzIHByZXNlbnRlZFxuICAgICAgdGhpcy5zdGF0dXNCYXJTdHlsZSA9IGF3YWl0IFN0YXR1c0Jhci5nZXRTdHlsZSgpO1xuICAgICAgc2V0Q2FyZFN0YXR1c0JhckRhcmsoKTtcbiAgICB9XG4gICAgYXdhaXQgcHJlc2VudCh0aGlzLCAnbW9kYWxFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uLCB7XG4gICAgICBwcmVzZW50aW5nRWw6IHByZXNlbnRpbmdFbGVtZW50LFxuICAgICAgY3VycmVudEJyZWFrcG9pbnQ6IHRoaXMuaW5pdGlhbEJyZWFrcG9pbnQsXG4gICAgICBiYWNrZHJvcEJyZWFrcG9pbnQ6IHRoaXMuYmFja2Ryb3BCcmVha3BvaW50LFxuICAgICAgZXhwYW5kVG9TY3JvbGw6IHRoaXMuZXhwYW5kVG9TY3JvbGxcbiAgICB9KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBuZWVkcyB0byBiZSBzZXR1cCBiZWZvcmUgYW55XG4gICAgICAgKiBub24tdHJhbnNpdGlvbiBhc3luYyB3b3JrIHNvIGl0IGNhbiBiZSBkZXJlZmVyZW5jZWRcbiAgICAgICAqIGluIHRoZSBkaXNtaXNzIG1ldGhvZC4gVGhlIGRpc21pc3MgbWV0aG9kXG4gICAgICAgKiBvbmx5IHdhaXRzIGZvciB0aGUgZW50ZXJpbmcgdHJhbnNpdGlvblxuICAgICAgICogdG8gZmluaXNoLiBJdCBkb2VzIG5vdCB3YWl0IGZvciBhbGwgb2YgdGhlIGBwcmVzZW50YFxuICAgICAgICogbWV0aG9kIHRvIHJlc29sdmUuXG4gICAgICAgKi9cbiAgICAgIHRoaXMua2V5Ym9hcmRPcGVuQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBXaGVuIHRoZSBuYXRpdmUga2V5Ym9hcmQgaXMgb3BlbmVkIGFuZCB0aGUgd2Vidmlld1xuICAgICAgICAgICAqIGlzIHJlc2l6ZWQsIHRoZSBnZXN0dXJlIGltcGxlbWVudGF0aW9uIHdpbGwgYmVjb21lIHVucmVzcG9uc2l2ZVxuICAgICAgICAgICAqIGFuZCBlbnRlciBhIGZyZWUtc2Nyb2xsIG1vZGUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBXaGVuIHRoZSBrZXlib2FyZCBpcyBvcGVuZWQsIHdlIGRpc2FibGUgdGhlIGdlc3R1cmUgZm9yXG4gICAgICAgICAgICogYSBzaW5nbGUgZnJhbWUgYW5kIHJlLWVuYWJsZSBvbmNlIHRoZSBjb250ZW50cyBoYXZlIHJlcG9zaXRpb25lZFxuICAgICAgICAgICAqIGZyb20gdGhlIGtleWJvYXJkIHBsYWNlbWVudC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKGZhbHNlKTtcbiAgICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoS0VZQk9BUkRfRElEX09QRU4sIHRoaXMua2V5Ym9hcmRPcGVuQ2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1NoZWV0TW9kYWwpIHtcbiAgICAgIHRoaXMuaW5pdFNoZWV0R2VzdHVyZSgpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ2FyZE1vZGFsKSB7XG4gICAgICB0aGlzLmluaXRTd2lwZVRvQ2xvc2UoKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gIH1cbiAgaW5pdFN3aXBlVG9DbG9zZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgIT09ICdpb3MnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgLy8gQWxsIG9mIHRoZSBlbGVtZW50cyBuZWVkZWQgZm9yIHRoZSBzd2lwZSBnZXN0dXJlXG4gICAgLy8gc2hvdWxkIGJlIGluIHRoZSBET00gYW5kIHJlZmVyZW5jZWQgYnkgbm93LCBleGNlcHRcbiAgICAvLyBmb3IgdGhlIHByZXNlbnRpbmcgZWxcbiAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gdGhpcy5sZWF2ZUFuaW1hdGlvbiB8fCBjb25maWcuZ2V0KCdtb2RhbExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24pO1xuICAgIGNvbnN0IGFuaSA9IHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlcihlbCwge1xuICAgICAgcHJlc2VudGluZ0VsOiB0aGlzLnByZXNlbnRpbmdFbGVtZW50LFxuICAgICAgZXhwYW5kVG9TY3JvbGw6IHRoaXMuZXhwYW5kVG9TY3JvbGxcbiAgICB9KTtcbiAgICBjb25zdCBjb250ZW50RWwgPSBmaW5kSW9uQ29udGVudChlbCk7XG4gICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgIHByaW50SW9uQ29udGVudEVycm9yTXNnKGVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdHVzQmFyU3R5bGUgPSAoX2EgPSB0aGlzLnN0YXR1c0JhclN0eWxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBTdHlsZS5EZWZhdWx0O1xuICAgIHRoaXMuZ2VzdHVyZSA9IGNyZWF0ZVN3aXBlVG9DbG9zZUdlc3R1cmUoZWwsIGFuaSwgc3RhdHVzQmFyU3R5bGUsICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogV2hpbGUgdGhlIGdlc3R1cmUgYW5pbWF0aW9uIGlzIGZpbmlzaGluZ1xuICAgICAgICogaXQgaXMgcG9zc2libGUgZm9yIGEgdXNlciB0byB0YXAgdGhlIGJhY2tkcm9wLlxuICAgICAgICogVGhpcyB3b3VsZCByZXN1bHQgaW4gdGhlIGRpc21pc3MgYW5pbWF0aW9uXG4gICAgICAgKiBiZWluZyBwbGF5ZWQgYWdhaW4uIFR5cGljYWxseSB0aGlzIGlzIGF2b2lkZWRcbiAgICAgICAqIGJ5IHNldHRpbmcgYHByZXNlbnRlZCA9IGZhbHNlYCBvbiB0aGUgb3ZlcmxheVxuICAgICAgICogY29tcG9uZW50OyBob3dldmVyLCB3ZSBjYW5ub3QgZG8gdGhhdCBoZXJlIGFzXG4gICAgICAgKiB0aGF0IHdvdWxkIHByZXZlbnQgdGhlIGVsZW1lbnQgZnJvbSBiZWluZ1xuICAgICAgICogcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuZ2VzdHVyZUFuaW1hdGlvbkRpc21pc3NpbmcgPSB0cnVlO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXNldCB0aGUgc3RhdHVzIGJhciBzdHlsZSBhcyB0aGUgZGlzbWlzcyBhbmltYXRpb25cbiAgICAgICAqIHN0YXJ0cyBvdGhlcndpc2UgdGhlIHN0YXR1cyBiYXIgd2lsbCBiZSB0aGUgd3JvbmdcbiAgICAgICAqIGNvbG9yIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGRpc21pc3MgYW5pbWF0aW9uLlxuICAgICAgICogVGhlIGRpc21pc3MgbWV0aG9kIGRvZXMgdGhpcyBhcyB3ZWxsLCBidXRcbiAgICAgICAqIGluIHRoaXMgY2FzZSBpdCdzIG9ubHkgY2FsbGVkIG9uY2UgdGhlIGFuaW1hdGlvblxuICAgICAgICogaGFzIGZpbmlzaGVkLlxuICAgICAgICovXG4gICAgICBzZXRDYXJkU3RhdHVzQmFyRGVmYXVsdCh0aGlzLnN0YXR1c0JhclN0eWxlKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLm9uRmluaXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgR0VTVFVSRSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZUFuaW1hdGlvbkRpc21pc3NpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUodHJ1ZSk7XG4gIH1cbiAgaW5pdFNoZWV0R2VzdHVyZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBpbml0aWFsQnJlYWtwb2ludCxcbiAgICAgIGJhY2tkcm9wQnJlYWtwb2ludFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICghd3JhcHBlckVsIHx8IGluaXRpYWxCcmVha3BvaW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IHRoaXMuZW50ZXJBbmltYXRpb24gfHwgY29uZmlnLmdldCgnbW9kYWxFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uKTtcbiAgICBjb25zdCBhbmkgPSB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIodGhpcy5lbCwge1xuICAgICAgcHJlc2VudGluZ0VsOiB0aGlzLnByZXNlbnRpbmdFbGVtZW50LFxuICAgICAgY3VycmVudEJyZWFrcG9pbnQ6IGluaXRpYWxCcmVha3BvaW50LFxuICAgICAgYmFja2Ryb3BCcmVha3BvaW50LFxuICAgICAgZXhwYW5kVG9TY3JvbGw6IHRoaXMuZXhwYW5kVG9TY3JvbGxcbiAgICB9KTtcbiAgICBhbmkucHJvZ3Jlc3NTdGFydCh0cnVlLCAxKTtcbiAgICBjb25zdCB7XG4gICAgICBnZXN0dXJlLFxuICAgICAgbW92ZVNoZWV0VG9CcmVha3BvaW50XG4gICAgfSA9IGNyZWF0ZVNoZWV0R2VzdHVyZSh0aGlzLmVsLCB0aGlzLmJhY2tkcm9wRWwsIHdyYXBwZXJFbCwgaW5pdGlhbEJyZWFrcG9pbnQsIGJhY2tkcm9wQnJlYWtwb2ludCwgYW5pLCB0aGlzLnNvcnRlZEJyZWFrcG9pbnRzLCB0aGlzLmV4cGFuZFRvU2Nyb2xsLCAoKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKF9hID0gdGhpcy5jdXJyZW50QnJlYWtwb2ludCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMDtcbiAgICB9LCAoKSA9PiB0aGlzLnNoZWV0T25EaXNtaXNzKCksIGJyZWFrcG9pbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEJyZWFrcG9pbnQgIT09IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgICAgIHRoaXMuaW9uQnJlYWtwb2ludERpZENoYW5nZS5lbWl0KHtcbiAgICAgICAgICBicmVha3BvaW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ2VzdHVyZSA9IGdlc3R1cmU7XG4gICAgdGhpcy5tb3ZlU2hlZXRUb0JyZWFrcG9pbnQgPSBtb3ZlU2hlZXRUb0JyZWFrcG9pbnQ7XG4gICAgdGhpcy5nZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgfVxuICBzaGVldE9uRGlzbWlzcygpIHtcbiAgICAvKipcbiAgICAgKiBXaGlsZSB0aGUgZ2VzdHVyZSBhbmltYXRpb24gaXMgZmluaXNoaW5nXG4gICAgICogaXQgaXMgcG9zc2libGUgZm9yIGEgdXNlciB0byB0YXAgdGhlIGJhY2tkcm9wLlxuICAgICAqIFRoaXMgd291bGQgcmVzdWx0IGluIHRoZSBkaXNtaXNzIGFuaW1hdGlvblxuICAgICAqIGJlaW5nIHBsYXllZCBhZ2Fpbi4gVHlwaWNhbGx5IHRoaXMgaXMgYXZvaWRlZFxuICAgICAqIGJ5IHNldHRpbmcgYHByZXNlbnRlZCA9IGZhbHNlYCBvbiB0aGUgb3ZlcmxheVxuICAgICAqIGNvbXBvbmVudDsgaG93ZXZlciwgd2UgY2Fubm90IGRvIHRoYXQgaGVyZSBhc1xuICAgICAqIHRoYXQgd291bGQgcHJldmVudCB0aGUgZWxlbWVudCBmcm9tIGJlaW5nXG4gICAgICogcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICovXG4gICAgdGhpcy5nZXN0dXJlQW5pbWF0aW9uRGlzbWlzc2luZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRpb24ub25GaW5pc2goYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9IDA7XG4gICAgICB0aGlzLmlvbkJyZWFrcG9pbnREaWRDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuY3VycmVudEJyZWFrcG9pbnRcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgR0VTVFVSRSk7XG4gICAgICB0aGlzLmdlc3R1cmVBbmltYXRpb25EaXNtaXNzaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIERpc21pc3MgdGhlIG1vZGFsIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBtb2RhbC4gRm9yIGV4YW1wbGUsICdjYW5jZWwnIG9yICdiYWNrZHJvcCcuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBuby1vcCBpZiB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW4gcHJlc2VudGVkIHlldC4gSWYgeW91IHdhbnRcbiAgICogdG8gcmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgRE9NIHRoYXQgd2FzIG5ldmVyIHByZXNlbnRlZCwgdXNlIHRoZVxuICAgKiBbcmVtb3ZlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZW1vdmUpIG1ldGhvZC5cbiAgICovXG4gIGFzeW5jIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgIHZhciBfYTtcbiAgICBpZiAodGhpcy5nZXN0dXJlQW5pbWF0aW9uRGlzbWlzc2luZyAmJiByb2xlICE9PSBHRVNUVVJFKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJlY2F1c2UgdGhlIGNhbkRpc21pc3MgY2hlY2sgYmVsb3cgaXMgYXN5bmMsXG4gICAgICogd2UgbmVlZCB0byBjbGFpbSBhIGxvY2sgYmVmb3JlIHRoZSBjaGVjayBoYXBwZW5zLFxuICAgICAqIGluIGNhc2UgdGhlIGRpc21pc3MgdHJhbnNpdGlvbiBkb2VzIHJ1bi5cbiAgICAgKi9cbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICAvKipcbiAgICAgKiBJZiBhIGNhbkRpc21pc3MgaGFuZGxlciBpcyByZXNwb25zaWJsZVxuICAgICAqIGZvciBjYWxsaW5nIHRoZSBkaXNtaXNzIG1ldGhvZCwgd2Ugc2hvdWxkXG4gICAgICogbm90IHJ1biB0aGUgY2FuRGlzbWlzcyBjaGVjayBhZ2Fpbi5cbiAgICAgKi9cbiAgICBpZiAocm9sZSAhPT0gJ2hhbmRsZXInICYmICEoYXdhaXQgdGhpcy5jaGVja0NhbkRpc21pc3MoZGF0YSwgcm9sZSkpKSB7XG4gICAgICB1bmxvY2soKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgcHJlc2VudGluZ0VsZW1lbnRcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBXZSBuZWVkIHRvIHN0YXJ0IHRoZSBzdGF0dXMgYmFyIGNoYW5nZVxuICAgICAqIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHNvIHRoYXQgdGhlIGNoYW5nZVxuICAgICAqIGZpbmlzaGVzIHdoZW4gdGhlIGRpc21pc3MgYW5pbWF0aW9uIGRvZXMuXG4gICAgICovXG4gICAgY29uc3QgaGFzQ2FyZE1vZGFsID0gcHJlc2VudGluZ0VsZW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgICBpZiAoaGFzQ2FyZE1vZGFsICYmIGdldElvbk1vZGUodGhpcykgPT09ICdpb3MnKSB7XG4gICAgICBzZXRDYXJkU3RhdHVzQmFyRGVmYXVsdCh0aGlzLnN0YXR1c0JhclN0eWxlKTtcbiAgICB9XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHRoaXMua2V5Ym9hcmRPcGVuQ2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEtFWUJPQVJEX0RJRF9PUEVOLCB0aGlzLmtleWJvYXJkT3BlbkNhbGxiYWNrKTtcbiAgICAgIHRoaXMua2V5Ym9hcmRPcGVuQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGRpc21pc3NlZCA9IGF3YWl0IGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ21vZGFsTGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbiwge1xuICAgICAgcHJlc2VudGluZ0VsOiBwcmVzZW50aW5nRWxlbWVudCxcbiAgICAgIGN1cnJlbnRCcmVha3BvaW50OiAoX2EgPSB0aGlzLmN1cnJlbnRCcmVha3BvaW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmluaXRpYWxCcmVha3BvaW50LFxuICAgICAgYmFja2Ryb3BCcmVha3BvaW50OiB0aGlzLmJhY2tkcm9wQnJlYWtwb2ludCxcbiAgICAgIGV4cGFuZFRvU2Nyb2xsOiB0aGlzLmV4cGFuZFRvU2Nyb2xsXG4gICAgfSk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkZWxlZ2F0ZVxuICAgICAgfSA9IHRoaXMuZ2V0RGVsZWdhdGUoKTtcbiAgICAgIGF3YWl0IGRldGFjaENvbXBvbmVudChkZWxlZ2F0ZSwgdGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgd3JpdGVUYXNrKCgpID0+IHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpKTtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtb2RhbCBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsRGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Nb2RhbFdpbGxEaXNtaXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIE1vdmUgYSBzaGVldCBzdHlsZSBtb2RhbCB0byBhIHNwZWNpZmljIGJyZWFrcG9pbnQuIFRoZSBicmVha3BvaW50IHZhbHVlIG11c3RcbiAgICogYmUgYSB2YWx1ZSBkZWZpbmVkIGluIHlvdXIgYGJyZWFrcG9pbnRzYCBhcnJheS5cbiAgICovXG4gIGFzeW5jIHNldEN1cnJlbnRCcmVha3BvaW50KGJyZWFrcG9pbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNTaGVldE1vZGFsKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ3NldEN1cnJlbnRCcmVha3BvaW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIHNoZWV0IG1vZGFscy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoYEF0dGVtcHRlZCB0byBzZXQgaW52YWxpZCBicmVha3BvaW50IHZhbHVlICR7YnJlYWtwb2ludH0uIFBsZWFzZSBkb3VibGUgY2hlY2sgdGhhdCB0aGUgYnJlYWtwb2ludCB2YWx1ZSBpcyBwYXJ0IG9mIHlvdXIgZGVmaW5lZCBicmVha3BvaW50cy5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudEJyZWFrcG9pbnQsXG4gICAgICBtb3ZlU2hlZXRUb0JyZWFrcG9pbnQsXG4gICAgICBjYW5EaXNtaXNzLFxuICAgICAgYnJlYWtwb2ludHMsXG4gICAgICBhbmltYXRlZFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXJyZW50QnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobW92ZVNoZWV0VG9CcmVha3BvaW50KSB7XG4gICAgICB0aGlzLnNoZWV0VHJhbnNpdGlvbiA9IG1vdmVTaGVldFRvQnJlYWtwb2ludCh7XG4gICAgICAgIGJyZWFrcG9pbnQsXG4gICAgICAgIGJyZWFrcG9pbnRPZmZzZXQ6IDEgLSBjdXJyZW50QnJlYWtwb2ludCxcbiAgICAgICAgY2FuRGlzbWlzczogY2FuRGlzbWlzcyAhPT0gdW5kZWZpbmVkICYmIGNhbkRpc21pc3MgIT09IHRydWUgJiYgYnJlYWtwb2ludHNbMF0gPT09IDAsXG4gICAgICAgIGFuaW1hdGVkXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuc2hlZXRUcmFuc2l0aW9uO1xuICAgICAgdGhpcy5zaGVldFRyYW5zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgb2YgYSBzaGVldCBzdHlsZSBtb2RhbFxuICAgKi9cbiAgYXN5bmMgZ2V0Q3VycmVudEJyZWFrcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEJyZWFrcG9pbnQ7XG4gIH1cbiAgYXN5bmMgbW92ZVRvTmV4dEJyZWFrcG9pbnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnJlYWtwb2ludHMsXG4gICAgICBjdXJyZW50QnJlYWtwb2ludFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICghYnJlYWtwb2ludHMgfHwgY3VycmVudEJyZWFrcG9pbnQgPT0gbnVsbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgbW9kYWwgZG9lcyBub3QgaGF2ZSBicmVha3BvaW50cyBhbmQvb3IgdGhlIGN1cnJlbnRcbiAgICAgICAqIGJyZWFrcG9pbnQgaXMgbm90IHNldCwgd2UgY2FuJ3QgbW92ZSB0byB0aGUgbmV4dCBicmVha3BvaW50LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFsbG93ZWRCcmVha3BvaW50cyA9IGJyZWFrcG9pbnRzLmZpbHRlcihiID0+IGIgIT09IDApO1xuICAgIGNvbnN0IGN1cnJlbnRCcmVha3BvaW50SW5kZXggPSBhbGxvd2VkQnJlYWtwb2ludHMuaW5kZXhPZihjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgY29uc3QgbmV4dEJyZWFrcG9pbnRJbmRleCA9IChjdXJyZW50QnJlYWtwb2ludEluZGV4ICsgMSkgJSBhbGxvd2VkQnJlYWtwb2ludHMubGVuZ3RoO1xuICAgIGNvbnN0IG5leHRCcmVha3BvaW50ID0gYWxsb3dlZEJyZWFrcG9pbnRzW25leHRCcmVha3BvaW50SW5kZXhdO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCB0byB0aGUgbmV4dCBhdmFpbGFibGUgYnJlYWtwb2ludC5cbiAgICAgKiBJZiB0aGUgY3VycmVudCBicmVha3BvaW50IGlzIHRoZSBsYXN0IGJyZWFrcG9pbnQsIHdlIHNldCB0aGUgY3VycmVudFxuICAgICAqIGJyZWFrcG9pbnQgdG8gdGhlIGZpcnN0IG5vbi16ZXJvIGJyZWFrcG9pbnQgdG8gYXZvaWQgZGlzbWlzc2luZyB0aGUgc2hlZXQuXG4gICAgICovXG4gICAgYXdhaXQgdGhpcy5zZXRDdXJyZW50QnJlYWtwb2ludChuZXh0QnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZSxcbiAgICAgIGlzU2hlZXRNb2RhbCxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50LFxuICAgICAgaHRtbEF0dHJpYnV0ZXMsXG4gICAgICBoYW5kbGVCZWhhdmlvcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICBmb2N1c1RyYXAsXG4gICAgICBleHBhbmRUb1Njcm9sbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNob3dIYW5kbGUgPSBoYW5kbGUgIT09IGZhbHNlICYmIGlzU2hlZXRNb2RhbDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBpc0NhcmRNb2RhbCA9IHByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgbW9kZSA9PT0gJ2lvcyc7XG4gICAgY29uc3QgaXNIYW5kbGVDeWNsZSA9IGhhbmRsZUJlaGF2aW9yID09PSAnY3ljbGUnO1xuICAgIHJldHVybiBoKEhvc3QsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnZTY2MTU2MmY5ZTQxMjYxMzZjZWUzMzdlNGFiOGNhNjlhYzgwZmFhZScsXG4gICAgICBcIm5vLXJvdXRlclwiOiB0cnVlLFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgIH0sIGh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ21vZGFsLWRlZmF1bHQnXTogIWlzQ2FyZE1vZGFsICYmICFpc1NoZWV0TW9kYWwsXG4gICAgICAgIFtgbW9kYWwtY2FyZGBdOiBpc0NhcmRNb2RhbCxcbiAgICAgICAgW2Btb2RhbC1zaGVldGBdOiBpc1NoZWV0TW9kYWwsXG4gICAgICAgIFtgbW9kYWwtbm8tZXhwYW5kLXNjcm9sbGBdOiBpc1NoZWV0TW9kYWwgJiYgIWV4cGFuZFRvU2Nyb2xsLFxuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICBbRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTXTogZm9jdXNUcmFwID09PSBmYWxzZVxuICAgICAgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLFxuICAgICAgb25Jb25Nb2RhbERpZFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsV2lsbFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsV2lsbERpc21pc3M6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsRGlkRGlzbWlzczogdGhpcy5vbkxpZmVjeWNsZVxuICAgIH0pLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHtcbiAgICAgIGtleTogJzkyMjE2OTJlMGUxMTFmOTllODAyMzljYTQ0ZmFhYWVkOWIyODg0MjUnLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmJhY2tkcm9wRWwgPSBlbCxcbiAgICAgIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLFxuICAgICAgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzLFxuICAgICAgcGFydDogXCJiYWNrZHJvcFwiXG4gICAgfSksIG1vZGUgPT09ICdpb3MnICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMjBkZWY3MDg4ZDMxZTVlYjEzYzNmMjQwNGM1MTRjZDhiNzRjZDk2NicsXG4gICAgICBjbGFzczogXCJtb2RhbC1zaGFkb3dcIlxuICAgIH0pLCBoKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnYjExMjI5MzMwNTcxZDRmZjdiOTEzNmRmZGRkY2Q3ZDc1OWFkYTg3NicsXG4gICAgICAvKlxuICAgICAgICByb2xlIGFuZCBhcmlhLW1vZGFsIG11c3QgYmUgdXNlZCBvbiB0aGVcbiAgICAgICAgc2FtZSBlbGVtZW50LiBUaGV5IG11c3QgYWxzbyBiZSBzZXQgaW5zaWRlIHRoZVxuICAgICAgICBzaGFkb3cgRE9NIG90aGVyd2lzZSBpb24tYnV0dG9uIHdpbGwgbm90IGJlIGhpZ2hsaWdodGVkXG4gICAgICAgIHdoZW4gdXNpbmcgVm9pY2VPdmVyOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjQ3MTM0XG4gICAgICAqL1xuICAgICAgcm9sZTogXCJkaWFsb2dcIlxuICAgIH0sIGluaGVyaXRlZEF0dHJpYnV0ZXMsIHtcbiAgICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICAgIGNsYXNzOiBcIm1vZGFsLXdyYXBwZXIgaW9uLW92ZXJsYXktd3JhcHBlclwiLFxuICAgICAgcGFydDogXCJjb250ZW50XCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMud3JhcHBlckVsID0gZWxcbiAgICB9KSwgc2hvd0hhbmRsZSAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJzk1YjJhNjI0NzdkZmJjMDYzYTkxOTEwZjBkMzczNTczODhjZmQ5MTQnLFxuICAgICAgY2xhc3M6IFwibW9kYWwtaGFuZGxlXCIsXG4gICAgICAvLyBQcmV2ZW50cyB0aGUgaGFuZGxlIGZyb20gcmVjZWl2aW5nIGtleWJvYXJkIGZvY3VzIHdoZW4gaXQgZG9lcyBub3QgY3ljbGVcbiAgICAgIHRhYkluZGV4OiAhaXNIYW5kbGVDeWNsZSA/IC0xIDogMCxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkFjdGl2YXRlIHRvIGFkanVzdCB0aGUgc2l6ZSBvZiB0aGUgZGlhbG9nIG92ZXJsYXlpbmcgdGhlIHNjcmVlblwiLFxuICAgICAgb25DbGljazogaXNIYW5kbGVDeWNsZSA/IHRoaXMub25IYW5kbGVDbGljayA6IHVuZGVmaW5lZCxcbiAgICAgIHBhcnQ6IFwiaGFuZGxlXCJcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZmJhMTdkZmRiZGZmYmZkODk5MmY0NzNmNjMzZDE3MmM1MTI0ZGMxOSdcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBMSUZFQ1lDTEVfTUFQID0ge1xuICBpb25Nb2RhbERpZFByZXNlbnQ6ICdpb25WaWV3RGlkRW50ZXInLFxuICBpb25Nb2RhbFdpbGxQcmVzZW50OiAnaW9uVmlld1dpbGxFbnRlcicsXG4gIGlvbk1vZGFsV2lsbERpc21pc3M6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgaW9uTW9kYWxEaWREaXNtaXNzOiAnaW9uVmlld0RpZExlYXZlJ1xufTtcbk1vZGFsLnN0eWxlID0ge1xuICBpb3M6IElvbk1vZGFsSW9zU3R5bGUwLFxuICBtZDogSW9uTW9kYWxNZFN0eWxlMFxufTtcbmV4cG9ydCB7IE1vZGFsIGFzIGlvbl9tb2RhbCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsSUFBSTtBQUFBLENBQ0gsU0FBVUEsUUFBTztBQUNoQixFQUFBQSxPQUFNLE1BQU0sSUFBSTtBQUNoQixFQUFBQSxPQUFNLE9BQU8sSUFBSTtBQUNqQixFQUFBQSxPQUFNLFNBQVMsSUFBSTtBQUNyQixHQUFHLFVBQVUsUUFBUSxDQUFDLEVBQUU7QUFDeEIsSUFBTSxZQUFZO0FBQUEs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
