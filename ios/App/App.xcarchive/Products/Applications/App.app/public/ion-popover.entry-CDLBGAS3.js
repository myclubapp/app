import {
  deepReady,
  waitForMount
} from "./chunk-P46UNXAG.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import {
  BACKDROP,
  FOCUS_TRAP_DISABLE_CLASS,
  dismiss,
  eventMethod,
  focusFirstDescendant,
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
  addEventListener,
  getElementRoot,
  hasLazyBuild,
  raf
} from "./chunk-RRWPYKYY.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
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

// node_modules/@ionic/core/dist/esm/ion-popover.entry.js
var getArrowDimensions = (arrowEl) => {
  if (!arrowEl) {
    return {
      arrowWidth: 0,
      arrowHeight: 0
    };
  }
  const {
    width,
    height
  } = arrowEl.getBoundingClientRect();
  return {
    arrowWidth: width,
    arrowHeight: height
  };
};
var getPopoverDimensions = (size, contentEl, triggerEl) => {
  const contentDimentions = contentEl.getBoundingClientRect();
  const contentHeight = contentDimentions.height;
  let contentWidth = contentDimentions.width;
  if (size === "cover" && triggerEl) {
    const triggerDimensions = triggerEl.getBoundingClientRect();
    contentWidth = triggerDimensions.width;
  }
  return {
    contentWidth,
    contentHeight
  };
};
var configureDismissInteraction = (triggerEl, triggerAction, popoverEl, parentPopoverEl) => {
  let dismissCallbacks = [];
  const root = getElementRoot(parentPopoverEl);
  const parentContentEl = root.querySelector(".popover-content");
  switch (triggerAction) {
    case "hover":
      dismissCallbacks = [{
        /**
         * Do not use mouseover here
         * as this will causes the event to
         * be dispatched on each underlying
         * element rather than on the popover
         * content as a whole.
         */
        eventName: "mouseenter",
        callback: (ev) => {
          const element = document.elementFromPoint(ev.clientX, ev.clientY);
          if (element === triggerEl) {
            return;
          }
          popoverEl.dismiss(void 0, void 0, false);
        }
      }];
      break;
    case "context-menu":
    case "click":
    default:
      dismissCallbacks = [{
        eventName: "click",
        callback: (ev) => {
          const target = ev.target;
          const closestTrigger = target.closest("[data-ion-popover-trigger]");
          if (closestTrigger === triggerEl) {
            ev.stopPropagation();
            return;
          }
          popoverEl.dismiss(void 0, void 0, false);
        }
      }];
      break;
  }
  dismissCallbacks.forEach(({
    eventName,
    callback
  }) => parentContentEl.addEventListener(eventName, callback));
  return () => {
    dismissCallbacks.forEach(({
      eventName,
      callback
    }) => parentContentEl.removeEventListener(eventName, callback));
  };
};
var configureTriggerInteraction = (triggerEl, triggerAction, popoverEl) => {
  let triggerCallbacks = [];
  switch (triggerAction) {
    case "hover":
      let hoverTimeout;
      triggerCallbacks = [{
        eventName: "mouseenter",
        callback: (ev) => __async(void 0, null, function* () {
          ev.stopPropagation();
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
          }
          hoverTimeout = setTimeout(() => {
            raf(() => {
              popoverEl.presentFromTrigger(ev);
              hoverTimeout = void 0;
            });
          }, 100);
        })
      }, {
        eventName: "mouseleave",
        callback: (ev) => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
          }
          const target = ev.relatedTarget;
          if (!target) {
            return;
          }
          if (target.closest("ion-popover") !== popoverEl) {
            popoverEl.dismiss(void 0, void 0, false);
          }
        }
      }, {
        /**
         * stopPropagation here prevents the popover
         * from dismissing when dismiss-on-select="true".
         */
        eventName: "click",
        callback: (ev) => ev.stopPropagation()
      }, {
        eventName: "ionPopoverActivateTrigger",
        callback: (ev) => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
    case "context-menu":
      triggerCallbacks = [{
        eventName: "contextmenu",
        callback: (ev) => {
          ev.preventDefault();
          popoverEl.presentFromTrigger(ev);
        }
      }, {
        eventName: "click",
        callback: (ev) => ev.stopPropagation()
      }, {
        eventName: "ionPopoverActivateTrigger",
        callback: (ev) => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
    case "click":
    default:
      triggerCallbacks = [{
        /**
         * Do not do a stopPropagation() here
         * because if you had two click triggers
         * then clicking the first trigger and then
         * clicking the second trigger would not cause
         * the first popover to dismiss.
         */
        eventName: "click",
        callback: (ev) => popoverEl.presentFromTrigger(ev)
      }, {
        eventName: "ionPopoverActivateTrigger",
        callback: (ev) => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
  }
  triggerCallbacks.forEach(({
    eventName,
    callback
  }) => triggerEl.addEventListener(eventName, callback));
  triggerEl.setAttribute("data-ion-popover-trigger", "true");
  return () => {
    triggerCallbacks.forEach(({
      eventName,
      callback
    }) => triggerEl.removeEventListener(eventName, callback));
    triggerEl.removeAttribute("data-ion-popover-trigger");
  };
};
var getIndexOfItem = (items, item) => {
  if (!item || item.tagName !== "ION-ITEM") {
    return -1;
  }
  return items.findIndex((el) => el === item);
};
var getNextItem = (items, currentItem) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex + 1];
};
var getPrevItem = (items, currentItem) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex - 1];
};
var focusItem = (item) => {
  const root = getElementRoot(item);
  const button = root.querySelector("button");
  if (button) {
    raf(() => button.focus());
  }
};
var isTriggerElement = (el) => el.hasAttribute("data-ion-popover-trigger");
var configureKeyboardInteraction = (popoverEl) => {
  const callback = (ev) => __async(void 0, null, function* () {
    var _a;
    const activeElement = document.activeElement;
    let items = [];
    const targetTagName = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.tagName;
    if (targetTagName !== "ION-POPOVER" && targetTagName !== "ION-ITEM") {
      return;
    }
    try {
      items = Array.from(popoverEl.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"));
    } catch (_b) {
    }
    switch (ev.key) {
      /**
       * If we are in a child popover
       * then pressing the left arrow key
       * should close this popover and move
       * focus to the popover that presented
       * this one.
       */
      case "ArrowLeft":
        const parentPopover = yield popoverEl.getParentPopover();
        if (parentPopover) {
          popoverEl.dismiss(void 0, void 0, false);
        }
        break;
      /**
       * ArrowDown should move focus to the next focusable ion-item.
       */
      case "ArrowDown":
        ev.preventDefault();
        const nextItem = getNextItem(items, activeElement);
        if (nextItem !== void 0) {
          focusItem(nextItem);
        }
        break;
      /**
       * ArrowUp should move focus to the previous focusable ion-item.
       */
      case "ArrowUp":
        ev.preventDefault();
        const prevItem = getPrevItem(items, activeElement);
        if (prevItem !== void 0) {
          focusItem(prevItem);
        }
        break;
      /**
       * Home should move focus to the first focusable ion-item.
       */
      case "Home":
        ev.preventDefault();
        const firstItem = items[0];
        if (firstItem !== void 0) {
          focusItem(firstItem);
        }
        break;
      /**
       * End should move focus to the last focusable ion-item.
       */
      case "End":
        ev.preventDefault();
        const lastItem = items[items.length - 1];
        if (lastItem !== void 0) {
          focusItem(lastItem);
        }
        break;
      /**
       * ArrowRight, Spacebar, or Enter should activate
       * the currently focused trigger item to open a
       * popover if the element is a trigger item.
       */
      case "ArrowRight":
      case " ":
      case "Enter":
        if (activeElement && isTriggerElement(activeElement)) {
          const rightEvent = new CustomEvent("ionPopoverActivateTrigger");
          activeElement.dispatchEvent(rightEvent);
        }
        break;
    }
  });
  popoverEl.addEventListener("keydown", callback);
  return () => popoverEl.removeEventListener("keydown", callback);
};
var getPopoverPosition = (isRTL, contentWidth, contentHeight, arrowWidth, arrowHeight, reference, side, align, defaultPosition, triggerEl, event) => {
  var _a;
  let referenceCoordinates = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  };
  switch (reference) {
    case "event":
      if (!event) {
        return defaultPosition;
      }
      const mouseEv = event;
      referenceCoordinates = {
        top: mouseEv.clientY,
        left: mouseEv.clientX,
        width: 1,
        height: 1
      };
      break;
    /**
     * Calculate position relative to the bounding
     * box on either the trigger element
     * specified via the `trigger` prop or
     * the target specified on the event
     * that was passed in.
     */
    case "trigger":
    default:
      const customEv = event;
      const actualTriggerEl = triggerEl || ((_a = customEv === null || customEv === void 0 ? void 0 : customEv.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (customEv === null || customEv === void 0 ? void 0 : customEv.target);
      if (!actualTriggerEl) {
        return defaultPosition;
      }
      const triggerBoundingBox = actualTriggerEl.getBoundingClientRect();
      referenceCoordinates = {
        top: triggerBoundingBox.top,
        left: triggerBoundingBox.left,
        width: triggerBoundingBox.width,
        height: triggerBoundingBox.height
      };
      break;
  }
  const coordinates = calculatePopoverSide(side, referenceCoordinates, contentWidth, contentHeight, arrowWidth, arrowHeight, isRTL);
  const alignedCoordinates = calculatePopoverAlign(align, side, referenceCoordinates, contentWidth, contentHeight);
  const top = coordinates.top + alignedCoordinates.top;
  const left = coordinates.left + alignedCoordinates.left;
  const {
    arrowTop,
    arrowLeft
  } = calculateArrowPosition(side, arrowWidth, arrowHeight, top, left, contentWidth, contentHeight, isRTL);
  const {
    originX,
    originY
  } = calculatePopoverOrigin(side, align, isRTL);
  return {
    top,
    left,
    referenceCoordinates,
    arrowTop,
    arrowLeft,
    originX,
    originY
  };
};
var calculatePopoverOrigin = (side, align, isRTL) => {
  switch (side) {
    case "top":
      return {
        originX: getOriginXAlignment(align),
        originY: "bottom"
      };
    case "bottom":
      return {
        originX: getOriginXAlignment(align),
        originY: "top"
      };
    case "left":
      return {
        originX: "right",
        originY: getOriginYAlignment(align)
      };
    case "right":
      return {
        originX: "left",
        originY: getOriginYAlignment(align)
      };
    case "start":
      return {
        originX: isRTL ? "left" : "right",
        originY: getOriginYAlignment(align)
      };
    case "end":
      return {
        originX: isRTL ? "right" : "left",
        originY: getOriginYAlignment(align)
      };
  }
};
var getOriginXAlignment = (align) => {
  switch (align) {
    case "start":
      return "left";
    case "center":
      return "center";
    case "end":
      return "right";
  }
};
var getOriginYAlignment = (align) => {
  switch (align) {
    case "start":
      return "top";
    case "center":
      return "center";
    case "end":
      return "bottom";
  }
};
var calculateArrowPosition = (side, arrowWidth, arrowHeight, top, left, contentWidth, contentHeight, isRTL) => {
  const leftPosition = {
    arrowTop: top + contentHeight / 2 - arrowWidth / 2,
    arrowLeft: left + contentWidth - arrowWidth / 2
  };
  const rightPosition = {
    arrowTop: top + contentHeight / 2 - arrowWidth / 2,
    arrowLeft: left - arrowWidth * 1.5
  };
  switch (side) {
    case "top":
      return {
        arrowTop: top + contentHeight,
        arrowLeft: left + contentWidth / 2 - arrowWidth / 2
      };
    case "bottom":
      return {
        arrowTop: top - arrowHeight,
        arrowLeft: left + contentWidth / 2 - arrowWidth / 2
      };
    case "left":
      return leftPosition;
    case "right":
      return rightPosition;
    case "start":
      return isRTL ? rightPosition : leftPosition;
    case "end":
      return isRTL ? leftPosition : rightPosition;
    default:
      return {
        arrowTop: 0,
        arrowLeft: 0
      };
  }
};
var calculatePopoverSide = (side, triggerBoundingBox, contentWidth, contentHeight, arrowWidth, arrowHeight, isRTL) => {
  const sideLeft = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left - contentWidth - arrowWidth
  };
  const sideRight = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left + triggerBoundingBox.width + arrowWidth
  };
  switch (side) {
    case "top":
      return {
        top: triggerBoundingBox.top - contentHeight - arrowHeight,
        left: triggerBoundingBox.left
      };
    case "right":
      return sideRight;
    case "bottom":
      return {
        top: triggerBoundingBox.top + triggerBoundingBox.height + arrowHeight,
        left: triggerBoundingBox.left
      };
    case "left":
      return sideLeft;
    case "start":
      return isRTL ? sideRight : sideLeft;
    case "end":
      return isRTL ? sideLeft : sideRight;
  }
};
var calculatePopoverAlign = (align, side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (align) {
    case "center":
      return calculatePopoverCenterAlign(side, triggerBoundingBox, contentWidth, contentHeight);
    case "end":
      return calculatePopoverEndAlign(side, triggerBoundingBox, contentWidth, contentHeight);
    case "start":
    default:
      return {
        top: 0,
        left: 0
      };
  }
};
var calculatePopoverEndAlign = (side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (side) {
    case "start":
    case "end":
    case "left":
    case "right":
      return {
        top: -(contentHeight - triggerBoundingBox.height),
        left: 0
      };
    case "top":
    case "bottom":
    default:
      return {
        top: 0,
        left: -(contentWidth - triggerBoundingBox.width)
      };
  }
};
var calculatePopoverCenterAlign = (side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (side) {
    case "start":
    case "end":
    case "left":
    case "right":
      return {
        top: -(contentHeight / 2 - triggerBoundingBox.height / 2),
        left: 0
      };
    case "top":
    case "bottom":
    default:
      return {
        top: 0,
        left: -(contentWidth / 2 - triggerBoundingBox.width / 2)
      };
  }
};
var calculateWindowAdjustment = (side, coordTop, coordLeft, bodyPadding, bodyWidth, bodyHeight, contentWidth, contentHeight, safeAreaMargin, contentOriginX, contentOriginY, triggerCoordinates, coordArrowTop = 0, coordArrowLeft = 0, arrowHeight = 0) => {
  let arrowTop = coordArrowTop;
  const arrowLeft = coordArrowLeft;
  let left = coordLeft;
  let top = coordTop;
  let bottom;
  let originX = contentOriginX;
  let originY = contentOriginY;
  let checkSafeAreaLeft = false;
  let checkSafeAreaRight = false;
  const triggerTop = triggerCoordinates ? triggerCoordinates.top + triggerCoordinates.height : bodyHeight / 2 - contentHeight / 2;
  const triggerHeight = triggerCoordinates ? triggerCoordinates.height : 0;
  let addPopoverBottomClass = false;
  if (left < bodyPadding + safeAreaMargin) {
    left = bodyPadding;
    checkSafeAreaLeft = true;
    originX = "left";
  } else if (contentWidth + bodyPadding + left + safeAreaMargin > bodyWidth) {
    checkSafeAreaRight = true;
    left = bodyWidth - contentWidth - bodyPadding;
    originX = "right";
  }
  if (triggerTop + triggerHeight + contentHeight > bodyHeight && (side === "top" || side === "bottom")) {
    if (triggerTop - contentHeight > 0) {
      top = Math.max(12, triggerTop - contentHeight - triggerHeight - (arrowHeight - 1));
      arrowTop = top + contentHeight;
      originY = "bottom";
      addPopoverBottomClass = true;
    } else {
      bottom = bodyPadding;
    }
  }
  return {
    top,
    left,
    bottom,
    originX,
    originY,
    checkSafeAreaLeft,
    checkSafeAreaRight,
    arrowTop,
    arrowLeft,
    addPopoverBottomClass
  };
};
var shouldShowArrow = (side, didAdjustBounds = false, ev, trigger) => {
  if (!ev && !trigger) {
    return false;
  }
  if (side !== "top" && side !== "bottom" && didAdjustBounds) {
    return false;
  }
  return true;
};
var POPOVER_IOS_BODY_PADDING = 5;
var iosEnterAnimation = (baseEl, opts) => {
  var _a;
  const {
    event: ev,
    size,
    trigger,
    reference,
    side,
    align
  } = opts;
  const doc = baseEl.ownerDocument;
  const isRTL = doc.dir === "rtl";
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;
  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector(".popover-content");
  const arrowEl = root.querySelector(".popover-arrow");
  const referenceSizeEl = trigger || ((_a = ev === null || ev === void 0 ? void 0 : ev.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (ev === null || ev === void 0 ? void 0 : ev.target);
  const {
    contentWidth,
    contentHeight
  } = getPopoverDimensions(size, contentEl, referenceSizeEl);
  const {
    arrowWidth,
    arrowHeight
  } = getArrowDimensions(arrowEl);
  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2,
    originX: isRTL ? "right" : "left",
    originY: "top"
  };
  const results = getPopoverPosition(isRTL, contentWidth, contentHeight, arrowWidth, arrowHeight, reference, side, align, defaultPosition, trigger, ev);
  const padding = size === "cover" ? 0 : POPOVER_IOS_BODY_PADDING;
  const margin = size === "cover" ? 0 : 25;
  const {
    originX,
    originY,
    top,
    left,
    bottom,
    checkSafeAreaLeft,
    checkSafeAreaRight,
    arrowTop,
    arrowLeft,
    addPopoverBottomClass
  } = calculateWindowAdjustment(side, results.top, results.left, padding, bodyWidth, bodyHeight, contentWidth, contentHeight, margin, results.originX, results.originY, results.referenceCoordinates, results.arrowTop, results.arrowLeft, arrowHeight);
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const contentAnimation = createAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  contentAnimation.addElement(root.querySelector(".popover-arrow")).addElement(root.querySelector(".popover-content")).fromTo("opacity", 0.01, 1);
  return baseAnimation.easing("ease").duration(100).beforeAddWrite(() => {
    if (size === "cover") {
      baseEl.style.setProperty("--width", `${contentWidth}px`);
    }
    if (addPopoverBottomClass) {
      baseEl.classList.add("popover-bottom");
    }
    if (bottom !== void 0) {
      contentEl.style.setProperty("bottom", `${bottom}px`);
    }
    const safeAreaLeft = " + var(--ion-safe-area-left, 0)";
    const safeAreaRight = " - var(--ion-safe-area-right, 0)";
    let leftValue = `${left}px`;
    if (checkSafeAreaLeft) {
      leftValue = `${left}px${safeAreaLeft}`;
    }
    if (checkSafeAreaRight) {
      leftValue = `${left}px${safeAreaRight}`;
    }
    contentEl.style.setProperty("top", `calc(${top}px + var(--offset-y, 0))`);
    contentEl.style.setProperty("left", `calc(${leftValue} + var(--offset-x, 0))`);
    contentEl.style.setProperty("transform-origin", `${originY} ${originX}`);
    if (arrowEl !== null) {
      const didAdjustBounds = results.top !== top || results.left !== left;
      const showArrow = shouldShowArrow(side, didAdjustBounds, ev, trigger);
      if (showArrow) {
        arrowEl.style.setProperty("top", `calc(${arrowTop}px + var(--offset-y, 0))`);
        arrowEl.style.setProperty("left", `calc(${arrowLeft}px + var(--offset-x, 0))`);
      } else {
        arrowEl.style.setProperty("display", "none");
      }
    }
  }).addAnimation([backdropAnimation, contentAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector(".popover-content");
  const arrowEl = root.querySelector(".popover-arrow");
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const contentAnimation = createAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  contentAnimation.addElement(root.querySelector(".popover-arrow")).addElement(root.querySelector(".popover-content")).fromTo("opacity", 0.99, 0);
  return baseAnimation.easing("ease").afterAddWrite(() => {
    baseEl.style.removeProperty("--width");
    baseEl.classList.remove("popover-bottom");
    contentEl.style.removeProperty("top");
    contentEl.style.removeProperty("left");
    contentEl.style.removeProperty("bottom");
    contentEl.style.removeProperty("transform-origin");
    if (arrowEl) {
      arrowEl.style.removeProperty("top");
      arrowEl.style.removeProperty("left");
      arrowEl.style.removeProperty("display");
    }
  }).duration(300).addAnimation([backdropAnimation, contentAnimation]);
};
var POPOVER_MD_BODY_PADDING = 12;
var mdEnterAnimation = (baseEl, opts) => {
  var _a;
  const {
    event: ev,
    size,
    trigger,
    reference,
    side,
    align
  } = opts;
  const doc = baseEl.ownerDocument;
  const isRTL = doc.dir === "rtl";
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;
  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector(".popover-content");
  const referenceSizeEl = trigger || ((_a = ev === null || ev === void 0 ? void 0 : ev.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (ev === null || ev === void 0 ? void 0 : ev.target);
  const {
    contentWidth,
    contentHeight
  } = getPopoverDimensions(size, contentEl, referenceSizeEl);
  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2,
    originX: isRTL ? "right" : "left",
    originY: "top"
  };
  const results = getPopoverPosition(isRTL, contentWidth, contentHeight, 0, 0, reference, side, align, defaultPosition, trigger, ev);
  const padding = size === "cover" ? 0 : POPOVER_MD_BODY_PADDING;
  const {
    originX,
    originY,
    top,
    left,
    bottom
  } = calculateWindowAdjustment(side, results.top, results.left, padding, bodyWidth, bodyHeight, contentWidth, contentHeight, 0, results.originX, results.originY, results.referenceCoordinates);
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const contentAnimation = createAnimation();
  const viewportAnimation = createAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(root.querySelector(".popover-wrapper")).duration(150).fromTo("opacity", 0.01, 1);
  contentAnimation.addElement(contentEl).beforeStyles({
    top: `calc(${top}px + var(--offset-y, 0px))`,
    left: `calc(${left}px + var(--offset-x, 0px))`,
    "transform-origin": `${originY} ${originX}`
  }).beforeAddWrite(() => {
    if (bottom !== void 0) {
      contentEl.style.setProperty("bottom", `${bottom}px`);
    }
  }).fromTo("transform", "scale(0.8)", "scale(1)");
  viewportAnimation.addElement(root.querySelector(".popover-viewport")).fromTo("opacity", 0.01, 1);
  return baseAnimation.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(() => {
    if (size === "cover") {
      baseEl.style.setProperty("--width", `${contentWidth}px`);
    }
    if (originY === "bottom") {
      baseEl.classList.add("popover-bottom");
    }
  }).addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector(".popover-content");
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(root.querySelector(".popover-wrapper")).fromTo("opacity", 0.99, 0);
  return baseAnimation.easing("ease").afterAddWrite(() => {
    baseEl.style.removeProperty("--width");
    baseEl.classList.remove("popover-bottom");
    contentEl.style.removeProperty("top");
    contentEl.style.removeProperty("left");
    contentEl.style.removeProperty("bottom");
    contentEl.style.removeProperty("transform-origin");
  }).duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
var popoverIosCss = ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';
var IonPopoverIosStyle0 = popoverIosCss;
var popoverMdCss = ":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}";
var IonPopoverMdStyle0 = popoverMdCss;
var Popover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionPopoverDidPresent", 7);
    this.willPresent = createEvent(this, "ionPopoverWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPopoverWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPopoverDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.ionMount = createEvent(this, "ionMount", 7);
    this.parentPopover = null;
    this.coreDelegate = CoreDelegate();
    this.lockController = createLockController();
    this.inline = false;
    this.focusDescendantOnPresent = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const event = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(event);
      }
    };
    this.configureTriggerInteraction = () => {
      const {
        trigger,
        triggerAction,
        el,
        destroyTriggerInteraction
      } = this;
      if (destroyTriggerInteraction) {
        destroyTriggerInteraction();
      }
      if (trigger === void 0) {
        return;
      }
      const triggerEl = this.triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
      if (!triggerEl) {
        printIonWarning(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`, this.el);
        return;
      }
      this.destroyTriggerInteraction = configureTriggerInteraction(triggerEl, triggerAction, el);
    };
    this.configureKeyboardInteraction = () => {
      const {
        destroyKeyboardInteraction,
        el
      } = this;
      if (destroyKeyboardInteraction) {
        destroyKeyboardInteraction();
      }
      this.destroyKeyboardInteraction = configureKeyboardInteraction(el);
    };
    this.configureDismissInteraction = () => {
      const {
        destroyDismissInteraction,
        parentPopover,
        triggerAction,
        triggerEl,
        el
      } = this;
      if (!parentPopover || !triggerEl) {
        return;
      }
      if (destroyDismissInteraction) {
        destroyDismissInteraction();
      }
      this.destroyDismissInteraction = configureDismissInteraction(triggerEl, triggerAction, el, parentPopover);
    };
    this.presented = false;
    this.hasController = false;
    this.delegate = void 0;
    this.overlayIndex = void 0;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.component = void 0;
    this.componentProps = void 0;
    this.keyboardClose = true;
    this.cssClass = void 0;
    this.backdropDismiss = true;
    this.event = void 0;
    this.showBackdrop = true;
    this.translucent = false;
    this.animated = true;
    this.htmlAttributes = void 0;
    this.triggerAction = "click";
    this.trigger = void 0;
    this.size = "auto";
    this.dismissOnSelect = false;
    this.reference = "trigger";
    this.side = "bottom";
    this.alignment = void 0;
    this.arrow = true;
    this.isOpen = false;
    this.keyboardEvents = false;
    this.focusTrap = true;
    this.keepContentsMounted = false;
  }
  onTriggerChange() {
    this.configureTriggerInteraction();
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  connectedCallback() {
    const {
      configureTriggerInteraction: configureTriggerInteraction2,
      el
    } = this;
    prepareOverlay(el);
    configureTriggerInteraction2();
  }
  disconnectedCallback() {
    const {
      destroyTriggerInteraction
    } = this;
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }
  }
  componentWillLoad() {
    var _a, _b;
    const {
      el
    } = this;
    const popoverId = (_b = (_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : setOverlayId(el);
    this.parentPopover = el.closest(`ion-popover:not(#${popoverId})`);
    if (this.alignment === void 0) {
      this.alignment = getIonMode(this) === "ios" ? "center" : "start";
    }
  }
  componentDidLoad() {
    const {
      parentPopover,
      isOpen
    } = this;
    if (isOpen === true) {
      raf(() => this.present());
    }
    if (parentPopover) {
      addEventListener(parentPopover, "ionPopoverWillDismiss", () => {
        this.dismiss(void 0, void 0, false);
      });
    }
    this.configureTriggerInteraction();
  }
  /**
   * When opening a popover from a trigger, we should not be
   * modifying the `event` prop from inside the component.
   * Additionally, when pressing the "Right" arrow key, we need
   * to shift focus to the first descendant in the newly presented
   * popover.
   *
   * @internal
   */
  presentFromTrigger(event, focusDescendant = false) {
    return __async(this, null, function* () {
      this.focusDescendantOnPresent = focusDescendant;
      yield this.present(event);
      this.focusDescendantOnPresent = false;
    });
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
   * Present the popover overlay after it has been created.
   * Developers can pass a mouse, touch, or pointer event
   * to position the popover relative to where that event
   * was dispatched.
   */
  present(event) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.presented) {
        unlock();
        return;
      }
      const {
        el
      } = this;
      const {
        inline,
        delegate
      } = this.getDelegate(true);
      this.ionMount.emit();
      this.usersElement = yield attachComponent(delegate, el, this.component, ["popover-viewport"], this.componentProps, inline);
      if (!this.keyboardEvents) {
        this.configureKeyboardInteraction();
      }
      this.configureDismissInteraction();
      if (hasLazyBuild(el)) {
        yield deepReady(this.usersElement);
      } else if (!this.keepContentsMounted) {
        yield waitForMount();
      }
      yield present(this, "popoverEnter", iosEnterAnimation, mdEnterAnimation, {
        event: event || this.event,
        size: this.size,
        trigger: this.triggerEl,
        reference: this.reference,
        side: this.side,
        align: this.alignment
      });
      if (this.focusDescendantOnPresent) {
        focusFirstDescendant(el);
      }
      unlock();
    });
  }
  /**
   * Dismiss the popover overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
   * @param dismissParentPopover If `true`, dismissing this popover will also dismiss
   * a parent popover if this popover is nested. Defaults to `true`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role, dismissParentPopover = true) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      const {
        destroyKeyboardInteraction,
        destroyDismissInteraction
      } = this;
      if (dismissParentPopover && this.parentPopover) {
        this.parentPopover.dismiss(data, role, dismissParentPopover);
      }
      const shouldDismiss = yield dismiss(this, data, role, "popoverLeave", iosLeaveAnimation, mdLeaveAnimation, this.event);
      if (shouldDismiss) {
        if (destroyKeyboardInteraction) {
          destroyKeyboardInteraction();
          this.destroyKeyboardInteraction = void 0;
        }
        if (destroyDismissInteraction) {
          destroyDismissInteraction();
          this.destroyDismissInteraction = void 0;
        }
        const {
          delegate
        } = this.getDelegate();
        yield detachComponent(delegate, this.usersElement);
      }
      unlock();
      return shouldDismiss;
    });
  }
  /**
   * @internal
   */
  getParentPopover() {
    return __async(this, null, function* () {
      return this.parentPopover;
    });
  }
  /**
   * Returns a promise that resolves when the popover did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionPopoverDidDismiss");
  }
  /**
   * Returns a promise that resolves when the popover will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionPopoverWillDismiss");
  }
  render() {
    const mode = getIonMode(this);
    const {
      onLifecycle,
      parentPopover,
      dismissOnSelect,
      side,
      arrow,
      htmlAttributes,
      focusTrap
    } = this;
    const desktop = isPlatform("desktop");
    const enableArrow = arrow && !parentPopover;
    return h(Host, Object.assign({
      key: "48f108a9b74f121559626889dd5a1fcccf38fc3d",
      "aria-modal": "true",
      "no-router": true,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), {
        [mode]: true,
        "popover-translucent": this.translucent,
        "overlay-hidden": true,
        "popover-desktop": desktop,
        [`popover-side-${side}`]: true,
        [FOCUS_TRAP_DISABLE_CLASS]: focusTrap === false,
        "popover-nested": !!parentPopover
      }),
      onIonPopoverDidPresent: onLifecycle,
      onIonPopoverWillPresent: onLifecycle,
      onIonPopoverWillDismiss: onLifecycle,
      onIonPopoverDidDismiss: onLifecycle,
      onIonBackdropTap: this.onBackdropTap
    }), !parentPopover && h("ion-backdrop", {
      key: "580c14ab48472534f59eedc5ba7fa486df25ed4e",
      tappable: this.backdropDismiss,
      visible: this.showBackdrop,
      part: "backdrop"
    }), h("div", {
      key: "9bcf47893e8d3053e2baa40511785d84feb4038c",
      class: "popover-wrapper ion-overlay-wrapper",
      onClick: dismissOnSelect ? () => this.dismiss() : void 0
    }, enableArrow && h("div", {
      key: "4d47f2bdc01a546a88190c07f8f4700f21de6715",
      class: "popover-arrow",
      part: "arrow"
    }), h("div", {
      key: "70018c088654c1996e305b7b6b114419e97824ef",
      class: "popover-content",
      part: "content"
    }, h("slot", {
      key: "3de8e1959b8facba2fbe694947704832200d8276"
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "trigger": ["onTriggerChange"],
      "triggerAction": ["onTriggerChange"],
      "isOpen": ["onIsOpenChange"]
    };
  }
};
var LIFECYCLE_MAP = {
  ionPopoverDidPresent: "ionViewDidEnter",
  ionPopoverWillPresent: "ionViewWillEnter",
  ionPopoverWillDismiss: "ionViewWillLeave",
  ionPopoverDidDismiss: "ionViewDidLeave"
};
Popover.style = {
  ios: IonPopoverIosStyle0,
  md: IonPopoverMdStyle0
};
export {
  Popover as ion_popover
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-popover.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcG9wb3Zlci5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgaiBhcyBwcmVwYXJlT3ZlcmxheSwgayBhcyBzZXRPdmVybGF5SWQsIGYgYXMgcHJlc2VudCwgbiBhcyBmb2N1c0ZpcnN0RGVzY2VuZGFudCwgZyBhcyBkaXNtaXNzLCBoIGFzIGV2ZW50TWV0aG9kLCBGIGFzIEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUyB9IGZyb20gJy4vb3ZlcmxheXMtNDFhNWQ1MWIuanMnO1xuaW1wb3J0IHsgQyBhcyBDb3JlRGVsZWdhdGUsIGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCBnIGFzIGdldEVsZW1lbnRSb290LCBhIGFzIGFkZEV2ZW50TGlzdGVuZXIsIGsgYXMgaGFzTGF6eUJ1aWxkIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlTG9ja0NvbnRyb2xsZXIgfSBmcm9tICcuL2xvY2stY29udHJvbGxlci0zMTY5MjhiZS5qcyc7XG5pbXBvcnQgeyBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlLCBhIGFzIGlzUGxhdGZvcm0gfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBlIGFzIGRlZXBSZWFkeSwgdyBhcyB3YWl0Rm9yTW91bnQgfSBmcm9tICcuL2luZGV4LWVjYjU1YjhkLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tZWFiNWE0Y2EuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTMxNGE1NGY2LmpzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwb3BvdmVyXG4gKiBhcnJvdyBvbiBgaW9zYCBtb2RlLiBJZiBhcnJvdyBpcyBkaXNhYmxlZFxuICogcmV0dXJucyAoMCwgMCkuXG4gKi9cbmNvbnN0IGdldEFycm93RGltZW5zaW9ucyA9IGFycm93RWwgPT4ge1xuICBpZiAoIWFycm93RWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyb3dXaWR0aDogMCxcbiAgICAgIGFycm93SGVpZ2h0OiAwXG4gICAgfTtcbiAgfVxuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH0gPSBhcnJvd0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGFycm93V2lkdGg6IHdpZHRoLFxuICAgIGFycm93SGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIHJlY29tbWVuZGVkIGRpbWVuc2lvbnMgb2YgdGhlIHBvcG92ZXJcbiAqIHRoYXQgdGFrZXMgaW50byBhY2NvdW50IHdoZXRoZXIgb3Igbm90IHRoZSB3aWR0aFxuICogc2hvdWxkIG1hdGNoIHRoZSB0cmlnZ2VyIHdpZHRoLlxuICovXG5jb25zdCBnZXRQb3BvdmVyRGltZW5zaW9ucyA9IChzaXplLCBjb250ZW50RWwsIHRyaWdnZXJFbCkgPT4ge1xuICBjb25zdCBjb250ZW50RGltZW50aW9ucyA9IGNvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnREaW1lbnRpb25zLmhlaWdodDtcbiAgbGV0IGNvbnRlbnRXaWR0aCA9IGNvbnRlbnREaW1lbnRpb25zLndpZHRoO1xuICBpZiAoc2l6ZSA9PT0gJ2NvdmVyJyAmJiB0cmlnZ2VyRWwpIHtcbiAgICBjb25zdCB0cmlnZ2VyRGltZW5zaW9ucyA9IHRyaWdnZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb250ZW50V2lkdGggPSB0cmlnZ2VyRGltZW5zaW9ucy53aWR0aDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRXaWR0aCxcbiAgICBjb250ZW50SGVpZ2h0XG4gIH07XG59O1xuY29uc3QgY29uZmlndXJlRGlzbWlzc0ludGVyYWN0aW9uID0gKHRyaWdnZXJFbCwgdHJpZ2dlckFjdGlvbiwgcG9wb3ZlckVsLCBwYXJlbnRQb3BvdmVyRWwpID0+IHtcbiAgbGV0IGRpc21pc3NDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KHBhcmVudFBvcG92ZXJFbCk7XG4gIGNvbnN0IHBhcmVudENvbnRlbnRFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xuICBzd2l0Y2ggKHRyaWdnZXJBY3Rpb24pIHtcbiAgICBjYXNlICdob3Zlcic6XG4gICAgICBkaXNtaXNzQ2FsbGJhY2tzID0gW3tcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERvIG5vdCB1c2UgbW91c2VvdmVyIGhlcmVcbiAgICAgICAgICogYXMgdGhpcyB3aWxsIGNhdXNlcyB0aGUgZXZlbnQgdG9cbiAgICAgICAgICogYmUgZGlzcGF0Y2hlZCBvbiBlYWNoIHVuZGVybHlpbmdcbiAgICAgICAgICogZWxlbWVudCByYXRoZXIgdGhhbiBvbiB0aGUgcG9wb3ZlclxuICAgICAgICAgKiBjb250ZW50IGFzIGEgd2hvbGUuXG4gICAgICAgICAqL1xuICAgICAgICBldmVudE5hbWU6ICdtb3VzZWVudGVyJyxcbiAgICAgICAgY2FsbGJhY2s6IGV2ID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBEbyBub3QgZGlzbWlzcyB0aGUgcG9wb3ZlciBpcyB3ZVxuICAgICAgICAgICAqIGFyZSBob3ZlcmluZyBvdmVyIGl0cyB0cmlnZ2VyLlxuICAgICAgICAgICAqIFRoaXMgd291bGQgYmUgZWFzaWVyIGlmIHdlIHVzZWQgbW91c2VvdmVyXG4gICAgICAgICAgICogYnV0IHRoaXMgd291bGQgY2F1c2UgdGhlIGV2ZW50IHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgKiBtb3JlIG9mdGVuIHRoYW4gd2Ugd291bGQgbGlrZSwgcG90ZW50aWFsbHlcbiAgICAgICAgICAgKiBjYXVzaW5nIHBlcmZvcm1hbmNlIGlzc3Vlcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldi5jbGllbnRYLCBldi5jbGllbnRZKTtcbiAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdHJpZ2dlckVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvcG92ZXJFbC5kaXNtaXNzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGV4dC1tZW51JzpcbiAgICBjYXNlICdjbGljayc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRpc21pc3NDYWxsYmFja3MgPSBbe1xuICAgICAgICBldmVudE5hbWU6ICdjbGljaycsXG4gICAgICAgIGNhbGxiYWNrOiBldiA9PiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRG8gbm90IGRpc21pc3MgdGhlIHBvcG92ZXIgaXMgd2VcbiAgICAgICAgICAgKiBhcmUgaG92ZXJpbmcgb3ZlciBpdHMgdHJpZ2dlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICAgICAgY29uc3QgY2xvc2VzdFRyaWdnZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaW9uLXBvcG92ZXItdHJpZ2dlcl0nKTtcbiAgICAgICAgICBpZiAoY2xvc2VzdFRyaWdnZXIgPT09IHRyaWdnZXJFbCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBzdG9wUHJvcGFnYXRpb24gaGVyZSBzbyBpZiB0aGVcbiAgICAgICAgICAgICAqIHBvcG92ZXIgaGFzIGRpc21pc3NPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgICogdGhlIHBvcG92ZXIgZG9lcyBub3QgZGlzbWlzcyBzaW5jZVxuICAgICAgICAgICAgICogd2UganVzdCBjbGlja2VkIGEgdHJpZ2dlciBlbGVtZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcG9wb3ZlckVsLmRpc21pc3ModW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfV07XG4gICAgICBicmVhaztcbiAgfVxuICBkaXNtaXNzQ2FsbGJhY2tzLmZvckVhY2goKHtcbiAgICBldmVudE5hbWUsXG4gICAgY2FsbGJhY2tcbiAgfSkgPT4gcGFyZW50Q29udGVudEVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGRpc21pc3NDYWxsYmFja3MuZm9yRWFjaCgoe1xuICAgICAgZXZlbnROYW1lLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KSA9PiBwYXJlbnRDb250ZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSk7XG4gIH07XG59O1xuLyoqXG4gKiBDb25maWd1cmVzIHRoZSB0cmlnZ2VyRWwgdG8gcmVzcG9uZFxuICogdG8gdXNlciBpbnRlcmFjdGlvbiBiYXNlZCB1cG9uIHRoZSB0cmlnZ2VyQWN0aW9uXG4gKiBwcm9wIHRoYXQgZGV2cyBoYXZlIGRlZmluZWQuXG4gKi9cbmNvbnN0IGNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbiA9ICh0cmlnZ2VyRWwsIHRyaWdnZXJBY3Rpb24sIHBvcG92ZXJFbCkgPT4ge1xuICBsZXQgdHJpZ2dlckNhbGxiYWNrcyA9IFtdO1xuICAvKipcbiAgICogQmFzZWQgdXBvbiB0aGUga2luZCBvZiB0cmlnZ2VyIGludGVyYWN0aW9uXG4gICAqIHRoZSB1c2VyIHdhbnRzLCB3ZSBzZXR1cCB0aGUgY29ycmVjdCBldmVudFxuICAgKiBsaXN0ZW5lcnMuXG4gICAqL1xuICBzd2l0Y2ggKHRyaWdnZXJBY3Rpb24pIHtcbiAgICBjYXNlICdob3Zlcic6XG4gICAgICBsZXQgaG92ZXJUaW1lb3V0O1xuICAgICAgdHJpZ2dlckNhbGxiYWNrcyA9IFt7XG4gICAgICAgIGV2ZW50TmFtZTogJ21vdXNlZW50ZXInLFxuICAgICAgICBjYWxsYmFjazogYXN5bmMgZXYgPT4ge1xuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmIChob3ZlclRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChob3ZlclRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBIb3ZlcmluZyBvdmVyIGEgdHJpZ2dlciBzaG91bGQgbm90XG4gICAgICAgICAgICogaW1tZWRpYXRlbHkgb3BlbiB0aGUgbmV4dCBwb3BvdmVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGhvdmVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICAgICAgcG9wb3ZlckVsLnByZXNlbnRGcm9tVHJpZ2dlcihldik7XG4gICAgICAgICAgICAgIGhvdmVyVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnROYW1lOiAnbW91c2VsZWF2ZScsXG4gICAgICAgIGNhbGxiYWNrOiBldiA9PiB7XG4gICAgICAgICAgaWYgKGhvdmVyVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhvdmVyVGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIG1vdXNlIGlzIG92ZXIgYW5vdGhlciBwb3BvdmVyXG4gICAgICAgICAgICogdGhhdCBpcyBub3QgdGhpcyBwb3BvdmVyIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICogY2xvc2UgdGhpcyBwb3BvdmVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCdpb24tcG9wb3ZlcicpICE9PSBwb3BvdmVyRWwpIHtcbiAgICAgICAgICAgIHBvcG92ZXJFbC5kaXNtaXNzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzdG9wUHJvcGFnYXRpb24gaGVyZSBwcmV2ZW50cyB0aGUgcG9wb3ZlclxuICAgICAgICAgKiBmcm9tIGRpc21pc3Npbmcgd2hlbiBkaXNtaXNzLW9uLXNlbGVjdD1cInRydWVcIi5cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50TmFtZTogJ2NsaWNrJyxcbiAgICAgICAgY2FsbGJhY2s6IGV2ID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9LCB7XG4gICAgICAgIGV2ZW50TmFtZTogJ2lvblBvcG92ZXJBY3RpdmF0ZVRyaWdnZXInLFxuICAgICAgICBjYWxsYmFjazogZXYgPT4gcG9wb3ZlckVsLnByZXNlbnRGcm9tVHJpZ2dlcihldiwgdHJ1ZSlcbiAgICAgIH1dO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGV4dC1tZW51JzpcbiAgICAgIHRyaWdnZXJDYWxsYmFja3MgPSBbe1xuICAgICAgICBldmVudE5hbWU6ICdjb250ZXh0bWVudScsXG4gICAgICAgIGNhbGxiYWNrOiBldiA9PiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUHJldmVudHMgdGhlIHBsYXRmb3JtIGNvbnRleHRcbiAgICAgICAgICAgKiBtZW51IGZyb20gYXBwZWFyaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcG9wb3ZlckVsLnByZXNlbnRGcm9tVHJpZ2dlcihldik7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICBjYWxsYmFjazogZXYgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnROYW1lOiAnaW9uUG9wb3ZlckFjdGl2YXRlVHJpZ2dlcicsXG4gICAgICAgIGNhbGxiYWNrOiBldiA9PiBwb3BvdmVyRWwucHJlc2VudEZyb21UcmlnZ2VyKGV2LCB0cnVlKVxuICAgICAgfV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbGljayc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRyaWdnZXJDYWxsYmFja3MgPSBbe1xuICAgICAgICAvKipcbiAgICAgICAgICogRG8gbm90IGRvIGEgc3RvcFByb3BhZ2F0aW9uKCkgaGVyZVxuICAgICAgICAgKiBiZWNhdXNlIGlmIHlvdSBoYWQgdHdvIGNsaWNrIHRyaWdnZXJzXG4gICAgICAgICAqIHRoZW4gY2xpY2tpbmcgdGhlIGZpcnN0IHRyaWdnZXIgYW5kIHRoZW5cbiAgICAgICAgICogY2xpY2tpbmcgdGhlIHNlY29uZCB0cmlnZ2VyIHdvdWxkIG5vdCBjYXVzZVxuICAgICAgICAgKiB0aGUgZmlyc3QgcG9wb3ZlciB0byBkaXNtaXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICBjYWxsYmFjazogZXYgPT4gcG9wb3ZlckVsLnByZXNlbnRGcm9tVHJpZ2dlcihldilcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnROYW1lOiAnaW9uUG9wb3ZlckFjdGl2YXRlVHJpZ2dlcicsXG4gICAgICAgIGNhbGxiYWNrOiBldiA9PiBwb3BvdmVyRWwucHJlc2VudEZyb21UcmlnZ2VyKGV2LCB0cnVlKVxuICAgICAgfV07XG4gICAgICBicmVhaztcbiAgfVxuICB0cmlnZ2VyQ2FsbGJhY2tzLmZvckVhY2goKHtcbiAgICBldmVudE5hbWUsXG4gICAgY2FsbGJhY2tcbiAgfSkgPT4gdHJpZ2dlckVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykpO1xuICB0cmlnZ2VyRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlvbi1wb3BvdmVyLXRyaWdnZXInLCAndHJ1ZScpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyaWdnZXJDYWxsYmFja3MuZm9yRWFjaCgoe1xuICAgICAgZXZlbnROYW1lLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KSA9PiB0cmlnZ2VyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSk7XG4gICAgdHJpZ2dlckVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pb24tcG9wb3Zlci10cmlnZ2VyJyk7XG4gIH07XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhbiBpb24taXRlbSBpbiBhbiBhcnJheSBvZiBpb24taXRlbXMuXG4gKi9cbmNvbnN0IGdldEluZGV4T2ZJdGVtID0gKGl0ZW1zLCBpdGVtKSA9PiB7XG4gIGlmICghaXRlbSB8fCBpdGVtLnRhZ05hbWUgIT09ICdJT04tSVRFTScpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbCA9PT0gaXRlbSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgYSBjdXJyZW50bHkgZm9jdXNlZCBpb24taXRlbVxuICogcmV0dXJucyB0aGUgbmV4dCBpb24taXRlbSByZWxhdGl2ZSB0byB0aGUgZm9jdXNlZCBvbmUgb3JcbiAqIHVuZGVmaW5lZC5cbiAqL1xuY29uc3QgZ2V0TmV4dEl0ZW0gPSAoaXRlbXMsIGN1cnJlbnRJdGVtKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRJdGVtSW5kZXggPSBnZXRJbmRleE9mSXRlbShpdGVtcywgY3VycmVudEl0ZW0pO1xuICByZXR1cm4gaXRlbXNbY3VycmVudEl0ZW1JbmRleCArIDFdO1xufTtcbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIGEgY3VycmVudGx5IGZvY3VzZWQgaW9uLWl0ZW1cbiAqIHJldHVybnMgdGhlIHByZXZpb3VzIGlvbi1pdGVtIHJlbGF0aXZlIHRvIHRoZSBmb2N1c2VkIG9uZSBvclxuICogdW5kZWZpbmVkLlxuICovXG5jb25zdCBnZXRQcmV2SXRlbSA9IChpdGVtcywgY3VycmVudEl0ZW0pID0+IHtcbiAgY29uc3QgY3VycmVudEl0ZW1JbmRleCA9IGdldEluZGV4T2ZJdGVtKGl0ZW1zLCBjdXJyZW50SXRlbSk7XG4gIHJldHVybiBpdGVtc1tjdXJyZW50SXRlbUluZGV4IC0gMV07XG59O1xuLyoqIEZvY3VzIHRoZSBpbnRlcm5hbCBidXR0b24gb2YgdGhlIGlvbi1pdGVtICovXG5jb25zdCBmb2N1c0l0ZW0gPSBpdGVtID0+IHtcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGl0ZW0pO1xuICBjb25zdCBidXR0b24gPSByb290LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBpZiAoYnV0dG9uKSB7XG4gICAgcmFmKCgpID0+IGJ1dHRvbi5mb2N1cygpKTtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYGVsYCBoYXMgYmVlbiBkZXNpZ25hdGVkXG4gKiBhcyBhIHRyaWdnZXIgZWxlbWVudCBmb3IgYW4gaW9uLXBvcG92ZXIuXG4gKi9cbmNvbnN0IGlzVHJpZ2dlckVsZW1lbnQgPSBlbCA9PiBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtaW9uLXBvcG92ZXItdHJpZ2dlcicpO1xuY29uc3QgY29uZmlndXJlS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IHBvcG92ZXJFbCA9PiB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgZXYgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBjb25zdCB0YXJnZXRUYWdOYW1lID0gKF9hID0gZXYudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGFnTmFtZTtcbiAgICAvKipcbiAgICAgKiBPbmx5IGhhbmRsZSBjdXN0b20ga2V5Ym9hcmQgaW50ZXJhY3Rpb25zIGZvciB0aGUgaG9zdCBwb3BvdmVyIGVsZW1lbnRcbiAgICAgKiBhbmQgY2hpbGRyZW4gaW9uLWl0ZW0gZWxlbWVudHMuXG4gICAgICovXG4gICAgaWYgKHRhcmdldFRhZ05hbWUgIT09ICdJT04tUE9QT1ZFUicgJiYgdGFyZ2V0VGFnTmFtZSAhPT0gJ0lPTi1JVEVNJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wbGV4IHNlbGVjdG9ycyB3aXRoIDpub3QoKSBhcmUgOm5vdCBzdXBwb3J0ZWRcbiAgICAgKiBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWl1bSBzbyB3ZSBuZWVkIHRvIGRvIGFcbiAgICAgKiB0cnkvY2F0Y2ggaGVyZSBzbyBlcnJvcnMgYXJlIG5vdCB0aHJvd24uXG4gICAgICovXG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogU2VsZWN0IGFsbCBpb24taXRlbXMgdGhhdCBhcmUgbm90IGNoaWxkcmVuIG9mIGNoaWxkIHBvcG92ZXJzLlxuICAgICAgICogaS5lLiBvbmx5IHNlbGVjdCBpb24taXRlbSBlbGVtZW50cyB0aGF0IGFyZSBwYXJ0IG9mIHRoaXMgcG9wb3ZlclxuICAgICAgICovXG4gICAgICBpdGVtcyA9IEFycmF5LmZyb20ocG9wb3ZlckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pdGVtOm5vdChpb24tcG9wb3ZlciBpb24tcG9wb3ZlciAqKTpub3QoW2Rpc2FibGVkXSknKSk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICB9IGNhdGNoIChfYikge31cbiAgICBzd2l0Y2ggKGV2LmtleSkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB3ZSBhcmUgaW4gYSBjaGlsZCBwb3BvdmVyXG4gICAgICAgKiB0aGVuIHByZXNzaW5nIHRoZSBsZWZ0IGFycm93IGtleVxuICAgICAgICogc2hvdWxkIGNsb3NlIHRoaXMgcG9wb3ZlciBhbmQgbW92ZVxuICAgICAgICogZm9jdXMgdG8gdGhlIHBvcG92ZXIgdGhhdCBwcmVzZW50ZWRcbiAgICAgICAqIHRoaXMgb25lLlxuICAgICAgICovXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjb25zdCBwYXJlbnRQb3BvdmVyID0gYXdhaXQgcG9wb3ZlckVsLmdldFBhcmVudFBvcG92ZXIoKTtcbiAgICAgICAgaWYgKHBhcmVudFBvcG92ZXIpIHtcbiAgICAgICAgICBwb3BvdmVyRWwuZGlzbWlzcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgLyoqXG4gICAgICAgKiBBcnJvd0Rvd24gc2hvdWxkIG1vdmUgZm9jdXMgdG8gdGhlIG5leHQgZm9jdXNhYmxlIGlvbi1pdGVtLlxuICAgICAgICovXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAvLyBEaXNhYmxlIG1vdmVtZW50L3Njcm9sbCB3aXRoIGtleWJvYXJkXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtID0gZ2V0TmV4dEl0ZW0oaXRlbXMsIGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBpZiAobmV4dEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvY3VzSXRlbShuZXh0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAvKipcbiAgICAgICAqIEFycm93VXAgc2hvdWxkIG1vdmUgZm9jdXMgdG8gdGhlIHByZXZpb3VzIGZvY3VzYWJsZSBpb24taXRlbS5cbiAgICAgICAqL1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIC8vIERpc2FibGUgbW92ZW1lbnQvc2Nyb2xsIHdpdGgga2V5Ym9hcmRcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJldkl0ZW0gPSBnZXRQcmV2SXRlbShpdGVtcywgYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChwcmV2SXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9jdXNJdGVtKHByZXZJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIC8qKlxuICAgICAgICogSG9tZSBzaG91bGQgbW92ZSBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGlvbi1pdGVtLlxuICAgICAgICovXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gICAgICAgIGlmIChmaXJzdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvY3VzSXRlbShmaXJzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgLyoqXG4gICAgICAgKiBFbmQgc2hvdWxkIG1vdmUgZm9jdXMgdG8gdGhlIGxhc3QgZm9jdXNhYmxlIGlvbi1pdGVtLlxuICAgICAgICovXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBsYXN0SXRlbSA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvY3VzSXRlbShsYXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAvKipcbiAgICAgICAqIEFycm93UmlnaHQsIFNwYWNlYmFyLCBvciBFbnRlciBzaG91bGQgYWN0aXZhdGVcbiAgICAgICAqIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB0cmlnZ2VyIGl0ZW0gdG8gb3BlbiBhXG4gICAgICAgKiBwb3BvdmVyIGlmIHRoZSBlbGVtZW50IGlzIGEgdHJpZ2dlciBpdGVtLlxuICAgICAgICovXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBpc1RyaWdnZXJFbGVtZW50KGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnaW9uUG9wb3ZlckFjdGl2YXRlVHJpZ2dlcicpO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChyaWdodEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIHBvcG92ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2FsbGJhY2spO1xuICByZXR1cm4gKCkgPT4gcG9wb3ZlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjYWxsYmFjayk7XG59O1xuLyoqXG4gKiBQb3NpdGlvbnMgYSBwb3BvdmVyIGJ5IHRha2luZyBpbnRvIGFjY291bnRcbiAqIHRoZSByZWZlcmVuY2UgcG9pbnQsIHByZWZlcnJlZCBzaWRlLCBhbGlnbm1lbnRcbiAqIGFuZCB2aWV3cG9ydCBkaW1lbnNpb25zLlxuICovXG5jb25zdCBnZXRQb3BvdmVyUG9zaXRpb24gPSAoaXNSVEwsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgYXJyb3dXaWR0aCwgYXJyb3dIZWlnaHQsIHJlZmVyZW5jZSwgc2lkZSwgYWxpZ24sIGRlZmF1bHRQb3NpdGlvbiwgdHJpZ2dlckVsLCBldmVudCkgPT4ge1xuICB2YXIgX2E7XG4gIGxldCByZWZlcmVuY2VDb29yZGluYXRlcyA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGVcbiAgICogeC15IGNvb3JkaW5hdGVzIGluIHRoZSBldmVudCB0aGF0XG4gICAqIHdhcyBwYXNzZWQgaW5cbiAgICovXG4gIHN3aXRjaCAocmVmZXJlbmNlKSB7XG4gICAgY2FzZSAnZXZlbnQnOlxuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3QgbW91c2VFdiA9IGV2ZW50O1xuICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgIHRvcDogbW91c2VFdi5jbGllbnRZLFxuICAgICAgICBsZWZ0OiBtb3VzZUV2LmNsaWVudFgsXG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGJvdW5kaW5nXG4gICAgICogYm94IG9uIGVpdGhlciB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAgICogc3BlY2lmaWVkIHZpYSB0aGUgYHRyaWdnZXJgIHByb3Agb3JcbiAgICAgKiB0aGUgdGFyZ2V0IHNwZWNpZmllZCBvbiB0aGUgZXZlbnRcbiAgICAgKiB0aGF0IHdhcyBwYXNzZWQgaW4uXG4gICAgICovXG4gICAgY2FzZSAndHJpZ2dlcic6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnN0IGN1c3RvbUV2ID0gZXZlbnQ7XG4gICAgICAvKipcbiAgICAgICAqIGlvblNoYWRvd1RhcmdldCBpcyB1c2VkIHdoZW4gd2UgbmVlZCB0byBhbGlnbiB0aGVcbiAgICAgICAqIHBvcG92ZXIgd2l0aCBhbiBlbGVtZW50IGluc2lkZSBvZiB0aGUgc2hhZG93IHJvb3RcbiAgICAgICAqIG9mIGFuIElvbmljIGNvbXBvbmVudC4gRXg6IFByZXNlbnRpbmcgYSBwb3BvdmVyXG4gICAgICAgKiBieSBjbGlja2luZyBvbiB0aGUgY29sbGFwc2VkIGluZGljYXRvciBpbnNpZGVcbiAgICAgICAqIG9mIGBpb24tYnJlYWRjcnVtYmAgYW5kIGNlbnRlcmluZyBpdCByZWxhdGl2ZVxuICAgICAgICogdG8gdGhlIGluZGljYXRvciByYXRoZXIgdGhhbiBgaW9uLWJyZWFkY3J1bWJgXG4gICAgICAgKiBhcyBhIHdob2xlLlxuICAgICAgICovXG4gICAgICBjb25zdCBhY3R1YWxUcmlnZ2VyRWwgPSB0cmlnZ2VyRWwgfHwgKChfYSA9IGN1c3RvbUV2ID09PSBudWxsIHx8IGN1c3RvbUV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXN0b21Fdi5kZXRhaWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pb25TaGFkb3dUYXJnZXQpIHx8IChjdXN0b21FdiA9PT0gbnVsbCB8fCBjdXN0b21FdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VzdG9tRXYudGFyZ2V0KTtcbiAgICAgIGlmICghYWN0dWFsVHJpZ2dlckVsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCB0cmlnZ2VyQm91bmRpbmdCb3ggPSBhY3R1YWxUcmlnZ2VyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZWZlcmVuY2VDb29yZGluYXRlcyA9IHtcbiAgICAgICAgdG9wOiB0cmlnZ2VyQm91bmRpbmdCb3gudG9wLFxuICAgICAgICBsZWZ0OiB0cmlnZ2VyQm91bmRpbmdCb3gubGVmdCxcbiAgICAgICAgd2lkdGg6IHRyaWdnZXJCb3VuZGluZ0JveC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0cmlnZ2VyQm91bmRpbmdCb3guaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0b3AvbGVmdCBvZmZzZXQgdGhhdCB3b3VsZCBhbGxvd1xuICAgKiBwb3BvdmVyIHRvIGJlIHBvc2l0aW9uZWQgb24gdGhlXG4gICAqIHByZWZlcnJlZCBzaWRlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqL1xuICBjb25zdCBjb29yZGluYXRlcyA9IGNhbGN1bGF0ZVBvcG92ZXJTaWRlKHNpZGUsIHJlZmVyZW5jZUNvb3JkaW5hdGVzLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIGFycm93V2lkdGgsIGFycm93SGVpZ2h0LCBpc1JUTCk7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvcC9sZWZ0IGFkanVzdG1lbnRzIHRoYXRcbiAgICogd291bGQgYWxsb3cgdGhlIHBvcG92ZXIgY29udGVudFxuICAgKiB0byBoYXZlIHRoZSBjb3JyZWN0IGFsaWdubWVudC5cbiAgICovXG4gIGNvbnN0IGFsaWduZWRDb29yZGluYXRlcyA9IGNhbGN1bGF0ZVBvcG92ZXJBbGlnbihhbGlnbiwgc2lkZSwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCk7XG4gIGNvbnN0IHRvcCA9IGNvb3JkaW5hdGVzLnRvcCArIGFsaWduZWRDb29yZGluYXRlcy50b3A7XG4gIGNvbnN0IGxlZnQgPSBjb29yZGluYXRlcy5sZWZ0ICsgYWxpZ25lZENvb3JkaW5hdGVzLmxlZnQ7XG4gIGNvbnN0IHtcbiAgICBhcnJvd1RvcCxcbiAgICBhcnJvd0xlZnRcbiAgfSA9IGNhbGN1bGF0ZUFycm93UG9zaXRpb24oc2lkZSwgYXJyb3dXaWR0aCwgYXJyb3dIZWlnaHQsIHRvcCwgbGVmdCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBpc1JUTCk7XG4gIGNvbnN0IHtcbiAgICBvcmlnaW5YLFxuICAgIG9yaWdpbllcbiAgfSA9IGNhbGN1bGF0ZVBvcG92ZXJPcmlnaW4oc2lkZSwgYWxpZ24sIGlzUlRMKTtcbiAgcmV0dXJuIHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByZWZlcmVuY2VDb29yZGluYXRlcyxcbiAgICBhcnJvd1RvcCxcbiAgICBhcnJvd0xlZnQsXG4gICAgb3JpZ2luWCxcbiAgICBvcmlnaW5ZXG4gIH07XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB0cmFuc2Zvcm0tb3JpZ2luXG4gKiBvZiB0aGUgcG9wb3ZlciBhbmltYXRpb24gc28gdGhhdCBpdFxuICogaXMgaW4gbGluZSB3aXRoIHdoYXQgdGhlIHNpZGUgYW5kIGFsaWdubWVudFxuICogcHJvcCB2YWx1ZXMgYXJlLiBDdXJyZW50bHkgb25seSB1c2VkXG4gKiB3aXRoIHRoZSBNRCBhbmltYXRpb24uXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZVBvcG92ZXJPcmlnaW4gPSAoc2lkZSwgYWxpZ24sIGlzUlRMKSA9PiB7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcmlnaW5YOiBnZXRPcmlnaW5YQWxpZ25tZW50KGFsaWduKSxcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbSdcbiAgICAgIH07XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpblg6IGdldE9yaWdpblhBbGlnbm1lbnQoYWxpZ24pLFxuICAgICAgICBvcmlnaW5ZOiAndG9wJ1xuICAgICAgfTtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpblg6ICdyaWdodCcsXG4gICAgICAgIG9yaWdpblk6IGdldE9yaWdpbllBbGlnbm1lbnQoYWxpZ24pXG4gICAgICB9O1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcbiAgICAgICAgb3JpZ2luWTogZ2V0T3JpZ2luWUFsaWdubWVudChhbGlnbilcbiAgICAgIH07XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3JpZ2luWDogaXNSVEwgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgICBvcmlnaW5ZOiBnZXRPcmlnaW5ZQWxpZ25tZW50KGFsaWduKVxuICAgICAgfTtcbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3JpZ2luWDogaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBvcmlnaW5ZOiBnZXRPcmlnaW5ZQWxpZ25tZW50KGFsaWduKVxuICAgICAgfTtcbiAgfVxufTtcbmNvbnN0IGdldE9yaWdpblhBbGlnbm1lbnQgPSBhbGlnbiA9PiB7XG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gJ2NlbnRlcic7XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICB9XG59O1xuY29uc3QgZ2V0T3JpZ2luWUFsaWdubWVudCA9IGFsaWduID0+IHtcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIHJldHVybiAndG9wJztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuICdjZW50ZXInO1xuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgd2hlcmUgdGhlIGFycm93IHBvc2l0aW9uaW5nXG4gKiBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHBvcG92ZXIgY29udGVudC5cbiAqL1xuY29uc3QgY2FsY3VsYXRlQXJyb3dQb3NpdGlvbiA9IChzaWRlLCBhcnJvd1dpZHRoLCBhcnJvd0hlaWdodCwgdG9wLCBsZWZ0LCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIGlzUlRMKSA9PiB7XG4gIC8qKlxuICAgKiBOb3RlOiBXaGVuIHNpZGUgaXMgbGVmdCwgcmlnaHQsIHN0YXJ0LCBvciBlbmQsIHRoZSBhcnJvdyBpc1xuICAgKiBiZWVuIHJvdGF0ZWQgdXNpbmcgYSBgdHJhbnNmb3JtYCwgc28gdG8gbW92ZSB0aGUgYXJyb3cgdXAgb3IgZG93blxuICAgKiBieSBpdHMgZGltZW5zaW9uLCB5b3UgbmVlZCB0byB1c2UgYGFycm93V2lkdGhgLlxuICAgKi9cbiAgY29uc3QgbGVmdFBvc2l0aW9uID0ge1xuICAgIGFycm93VG9wOiB0b3AgKyBjb250ZW50SGVpZ2h0IC8gMiAtIGFycm93V2lkdGggLyAyLFxuICAgIGFycm93TGVmdDogbGVmdCArIGNvbnRlbnRXaWR0aCAtIGFycm93V2lkdGggLyAyXG4gIH07XG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBhcnJvdyB0byB0aGUgbGVmdCBieSBhcnJvd1dpZHRoIGFuZCB0aGVuXG4gICAqIGFnYWluIGJ5IGhhbGYgb2YgaXRzIHdpZHRoIGJlY2F1c2Ugd2UgaGF2ZSByb3RhdGVkXG4gICAqIHRoZSBhcnJvdyB1c2luZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIGNvbnN0IHJpZ2h0UG9zaXRpb24gPSB7XG4gICAgYXJyb3dUb3A6IHRvcCArIGNvbnRlbnRIZWlnaHQgLyAyIC0gYXJyb3dXaWR0aCAvIDIsXG4gICAgYXJyb3dMZWZ0OiBsZWZ0IC0gYXJyb3dXaWR0aCAqIDEuNVxuICB9O1xuICBzd2l0Y2ggKHNpZGUpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJyb3dUb3A6IHRvcCArIGNvbnRlbnRIZWlnaHQsXG4gICAgICAgIGFycm93TGVmdDogbGVmdCArIGNvbnRlbnRXaWR0aCAvIDIgLSBhcnJvd1dpZHRoIC8gMlxuICAgICAgfTtcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJyb3dUb3A6IHRvcCAtIGFycm93SGVpZ2h0LFxuICAgICAgICBhcnJvd0xlZnQ6IGxlZnQgKyBjb250ZW50V2lkdGggLyAyIC0gYXJyb3dXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gbGVmdFBvc2l0aW9uO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiByaWdodFBvc2l0aW9uO1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIHJldHVybiBpc1JUTCA/IHJpZ2h0UG9zaXRpb24gOiBsZWZ0UG9zaXRpb247XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIHJldHVybiBpc1JUTCA/IGxlZnRQb3NpdGlvbiA6IHJpZ2h0UG9zaXRpb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFycm93VG9wOiAwLFxuICAgICAgICBhcnJvd0xlZnQ6IDBcbiAgICAgIH07XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHJlcXVpcmVkIHRvcC9sZWZ0XG4gKiB2YWx1ZXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBwb3BvdmVyXG4gKiBjb250ZW50IG9uIHRoZSBzaWRlIHNwZWNpZmllZCBpbiB0aGVcbiAqIGBzaWRlYCBwcm9wLlxuICovXG5jb25zdCBjYWxjdWxhdGVQb3BvdmVyU2lkZSA9IChzaWRlLCB0cmlnZ2VyQm91bmRpbmdCb3gsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgYXJyb3dXaWR0aCwgYXJyb3dIZWlnaHQsIGlzUlRMKSA9PiB7XG4gIGNvbnN0IHNpZGVMZWZ0ID0ge1xuICAgIHRvcDogdHJpZ2dlckJvdW5kaW5nQm94LnRvcCxcbiAgICBsZWZ0OiB0cmlnZ2VyQm91bmRpbmdCb3gubGVmdCAtIGNvbnRlbnRXaWR0aCAtIGFycm93V2lkdGhcbiAgfTtcbiAgY29uc3Qgc2lkZVJpZ2h0ID0ge1xuICAgIHRvcDogdHJpZ2dlckJvdW5kaW5nQm94LnRvcCxcbiAgICBsZWZ0OiB0cmlnZ2VyQm91bmRpbmdCb3gubGVmdCArIHRyaWdnZXJCb3VuZGluZ0JveC53aWR0aCArIGFycm93V2lkdGhcbiAgfTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdHJpZ2dlckJvdW5kaW5nQm94LnRvcCAtIGNvbnRlbnRIZWlnaHQgLSBhcnJvd0hlaWdodCxcbiAgICAgICAgbGVmdDogdHJpZ2dlckJvdW5kaW5nQm94LmxlZnRcbiAgICAgIH07XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIHNpZGVSaWdodDtcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB0cmlnZ2VyQm91bmRpbmdCb3gudG9wICsgdHJpZ2dlckJvdW5kaW5nQm94LmhlaWdodCArIGFycm93SGVpZ2h0LFxuICAgICAgICBsZWZ0OiB0cmlnZ2VyQm91bmRpbmdCb3gubGVmdFxuICAgICAgfTtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBzaWRlTGVmdDtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICByZXR1cm4gaXNSVEwgPyBzaWRlUmlnaHQgOiBzaWRlTGVmdDtcbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuIGlzUlRMID8gc2lkZUxlZnQgOiBzaWRlUmlnaHQ7XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHJlcXVpcmVkIHRvcC9sZWZ0XG4gKiBvZmZzZXQgdmFsdWVzIG5lZWRlZCB0byBwcm92aWRlIHRoZVxuICogY29ycmVjdCBhbGlnbm1lbnQgcmVnYXJkbGVzcyB3aGlsZSB0YWtpbmdcbiAqIGludG8gYWNjb3VudCB0aGUgc2lkZSB0aGUgcG9wb3ZlciBpcyBvbi5cbiAqL1xuY29uc3QgY2FsY3VsYXRlUG9wb3ZlckFsaWduID0gKGFsaWduLCBzaWRlLCB0cmlnZ2VyQm91bmRpbmdCb3gsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCkgPT4ge1xuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQb3BvdmVyQ2VudGVyQWxpZ24oc2lkZSwgdHJpZ2dlckJvdW5kaW5nQm94LCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpO1xuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUG9wb3ZlckVuZEFsaWduKHNpZGUsIHRyaWdnZXJCb3VuZGluZ0JveCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KTtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfTtcbiAgfVxufTtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBlbmQgYWxpZ25tZW50IGZvclxuICogdGhlIHBvcG92ZXIuIElmIHNpZGUgaXMgb24gdGhlIHgtYXhpc1xuICogdGhlbiB0aGUgYWxpZ24gdmFsdWVzIHJlZmVyIHRvIHRoZSB0b3BcbiAqIGFuZCBib3R0b20gbWFyZ2lucyBvZiB0aGUgY29udGVudC5cbiAqIElmIHNpZGUgaXMgb24gdGhlIHktYXhpcyB0aGVuIHRoZVxuICogYWxpZ24gdmFsdWVzIHJlZmVyIHRvIHRoZSBsZWZ0IGFuZCByaWdodFxuICogbWFyZ2lucyBvZiB0aGUgY29udGVudC5cbiAqL1xuY29uc3QgY2FsY3VsYXRlUG9wb3ZlckVuZEFsaWduID0gKHNpZGUsIHRyaWdnZXJCb3VuZGluZ0JveCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KSA9PiB7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICBjYXNlICdlbmQnOlxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogLShjb250ZW50SGVpZ2h0IC0gdHJpZ2dlckJvdW5kaW5nQm94LmhlaWdodCksXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH07XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IC0oY29udGVudFdpZHRoIC0gdHJpZ2dlckJvdW5kaW5nQm94LndpZHRoKVxuICAgICAgfTtcbiAgfVxufTtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBjZW50ZXIgYWxpZ25tZW50IGZvclxuICogdGhlIHBvcG92ZXIuIElmIHNpZGUgaXMgb24gdGhlIHgtYXhpc1xuICogdGhlbiB0aGUgYWxpZ24gdmFsdWVzIHJlZmVyIHRvIHRoZSB0b3BcbiAqIGFuZCBib3R0b20gbWFyZ2lucyBvZiB0aGUgY29udGVudC5cbiAqIElmIHNpZGUgaXMgb24gdGhlIHktYXhpcyB0aGVuIHRoZVxuICogYWxpZ24gdmFsdWVzIHJlZmVyIHRvIHRoZSBsZWZ0IGFuZCByaWdodFxuICogbWFyZ2lucyBvZiB0aGUgY29udGVudC5cbiAqL1xuY29uc3QgY2FsY3VsYXRlUG9wb3ZlckNlbnRlckFsaWduID0gKHNpZGUsIHRyaWdnZXJCb3VuZGluZ0JveCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KSA9PiB7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICBjYXNlICdlbmQnOlxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogLShjb250ZW50SGVpZ2h0IC8gMiAtIHRyaWdnZXJCb3VuZGluZ0JveC5oZWlnaHQgLyAyKSxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfTtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogLShjb250ZW50V2lkdGggLyAyIC0gdHJpZ2dlckJvdW5kaW5nQm94LndpZHRoIC8gMilcbiAgICAgIH07XG4gIH1cbn07XG4vKipcbiAqIEFkanVzdHMgcG9wb3ZlciBwb3NpdGlvbmluZyBjb29yZGluYXRlc1xuICogc3VjaCB0aGF0IHBvcG92ZXIgZG9lcyBub3QgYXBwZWFyIG9mZnNjcmVlblxuICogb3Igb3ZlcmxhcHBpbmcgc2FmZSBhcmVhIGJvdW5kcy5cbiAqL1xuY29uc3QgY2FsY3VsYXRlV2luZG93QWRqdXN0bWVudCA9IChzaWRlLCBjb29yZFRvcCwgY29vcmRMZWZ0LCBib2R5UGFkZGluZywgYm9keVdpZHRoLCBib2R5SGVpZ2h0LCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIHNhZmVBcmVhTWFyZ2luLCBjb250ZW50T3JpZ2luWCwgY29udGVudE9yaWdpblksIHRyaWdnZXJDb29yZGluYXRlcywgY29vcmRBcnJvd1RvcCA9IDAsIGNvb3JkQXJyb3dMZWZ0ID0gMCwgYXJyb3dIZWlnaHQgPSAwKSA9PiB7XG4gIGxldCBhcnJvd1RvcCA9IGNvb3JkQXJyb3dUb3A7XG4gIGNvbnN0IGFycm93TGVmdCA9IGNvb3JkQXJyb3dMZWZ0O1xuICBsZXQgbGVmdCA9IGNvb3JkTGVmdDtcbiAgbGV0IHRvcCA9IGNvb3JkVG9wO1xuICBsZXQgYm90dG9tO1xuICBsZXQgb3JpZ2luWCA9IGNvbnRlbnRPcmlnaW5YO1xuICBsZXQgb3JpZ2luWSA9IGNvbnRlbnRPcmlnaW5ZO1xuICBsZXQgY2hlY2tTYWZlQXJlYUxlZnQgPSBmYWxzZTtcbiAgbGV0IGNoZWNrU2FmZUFyZWFSaWdodCA9IGZhbHNlO1xuICBjb25zdCB0cmlnZ2VyVG9wID0gdHJpZ2dlckNvb3JkaW5hdGVzID8gdHJpZ2dlckNvb3JkaW5hdGVzLnRvcCArIHRyaWdnZXJDb29yZGluYXRlcy5oZWlnaHQgOiBib2R5SGVpZ2h0IC8gMiAtIGNvbnRlbnRIZWlnaHQgLyAyO1xuICBjb25zdCB0cmlnZ2VySGVpZ2h0ID0gdHJpZ2dlckNvb3JkaW5hdGVzID8gdHJpZ2dlckNvb3JkaW5hdGVzLmhlaWdodCA6IDA7XG4gIGxldCBhZGRQb3BvdmVyQm90dG9tQ2xhc3MgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEFkanVzdCBwb3BvdmVyIHNvIGl0IGRvZXMgbm90XG4gICAqIGdvIG9mZiB0aGUgbGVmdCBvZiB0aGUgc2NyZWVuLlxuICAgKi9cbiAgaWYgKGxlZnQgPCBib2R5UGFkZGluZyArIHNhZmVBcmVhTWFyZ2luKSB7XG4gICAgbGVmdCA9IGJvZHlQYWRkaW5nO1xuICAgIGNoZWNrU2FmZUFyZWFMZWZ0ID0gdHJ1ZTtcbiAgICBvcmlnaW5YID0gJ2xlZnQnO1xuICAgIC8qKlxuICAgICAqIEFkanVzdCBwb3BvdmVyIHNvIGl0IGRvZXMgbm90XG4gICAgICogZ28gb2ZmIHRoZSByaWdodCBvZiB0aGUgc2NyZWVuLlxuICAgICAqL1xuICB9IGVsc2UgaWYgKGNvbnRlbnRXaWR0aCArIGJvZHlQYWRkaW5nICsgbGVmdCArIHNhZmVBcmVhTWFyZ2luID4gYm9keVdpZHRoKSB7XG4gICAgY2hlY2tTYWZlQXJlYVJpZ2h0ID0gdHJ1ZTtcbiAgICBsZWZ0ID0gYm9keVdpZHRoIC0gY29udGVudFdpZHRoIC0gYm9keVBhZGRpbmc7XG4gICAgb3JpZ2luWCA9ICdyaWdodCc7XG4gIH1cbiAgLyoqXG4gICAqIEFkanVzdCBwb3BvdmVyIHNvIGl0IGRvZXMgbm90XG4gICAqIGdvIG9mZiB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAqIElmIHBvcG92ZXIgaXMgb24gdGhlIGxlZnQgb3IgdGhlIHJpZ2h0IG9mXG4gICAqIHRoZSB0cmlnZ2VyLCB0aGVuIHdlIHNob3VsZCBub3QgYWRqdXN0IHRvcFxuICAgKiBtYXJnaW5zLlxuICAgKi9cbiAgaWYgKHRyaWdnZXJUb3AgKyB0cmlnZ2VySGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQgJiYgKHNpZGUgPT09ICd0b3AnIHx8IHNpZGUgPT09ICdib3R0b20nKSkge1xuICAgIGlmICh0cmlnZ2VyVG9wIC0gY29udGVudEhlaWdodCA+IDApIHtcbiAgICAgIC8qKlxuICAgICAgICogV2hpbGUgd2Ugc3RyaXZlIHRvIGFsaWduIHRoZSBwb3BvdmVyIHdpdGggdGhlIHRyaWdnZXJcbiAgICAgICAqIG9uIHNtYWxsZXIgc2NyZWVucyB0aGlzIGlzIG5vdCBhbHdheXMgcG9zc2libGUuIEFzIGEgcmVzdWx0LFxuICAgICAgICogd2UgYWRqdXN0IHRoZSBwb3BvdmVyIHVwIHNvIHRoYXQgaXQgZG9lcyBub3QgaGFuZ1xuICAgICAgICogb2ZmIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi4gSG93ZXZlciwgd2UgZG8gbm90IHdhbnQgdG8gbW92ZVxuICAgICAgICogdGhlIHBvcG92ZXIgdXAgc28gbXVjaCB0aGF0IGl0IGdvZXMgb2ZmIHRoZSB0b3Agb2YgdGhlIHNjcmVlbi5cbiAgICAgICAqXG4gICAgICAgKiBXZSBjaG9zZSAxMiBoZXJlIHNvIHRoYXQgdGhlIHBvcG92ZXIgcG9zaXRpb24gbG9va3MgYSBiaXQgbmljZXIgYXNcbiAgICAgICAqIGl0IGlzIG5vdCByaWdodCB1cCBhZ2FpbnN0IHRoZSBlZGdlIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgKi9cbiAgICAgIHRvcCA9IE1hdGgubWF4KDEyLCB0cmlnZ2VyVG9wIC0gY29udGVudEhlaWdodCAtIHRyaWdnZXJIZWlnaHQgLSAoYXJyb3dIZWlnaHQgLSAxKSk7XG4gICAgICBhcnJvd1RvcCA9IHRvcCArIGNvbnRlbnRIZWlnaHQ7XG4gICAgICBvcmlnaW5ZID0gJ2JvdHRvbSc7XG4gICAgICBhZGRQb3BvdmVyQm90dG9tQ2xhc3MgPSB0cnVlO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBub3QgZW5vdWdoIHJvb20gZm9yIHBvcG92ZXIgdG8gYXBwZWFyXG4gICAgICAgKiBhYm92ZSB0cmlnZ2VyLCB0aGVuIGN1dCBpdCBvZmYuXG4gICAgICAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tID0gYm9keVBhZGRpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgYm90dG9tLFxuICAgIG9yaWdpblgsXG4gICAgb3JpZ2luWSxcbiAgICBjaGVja1NhZmVBcmVhTGVmdCxcbiAgICBjaGVja1NhZmVBcmVhUmlnaHQsXG4gICAgYXJyb3dUb3AsXG4gICAgYXJyb3dMZWZ0LFxuICAgIGFkZFBvcG92ZXJCb3R0b21DbGFzc1xuICB9O1xufTtcbmNvbnN0IHNob3VsZFNob3dBcnJvdyA9IChzaWRlLCBkaWRBZGp1c3RCb3VuZHMgPSBmYWxzZSwgZXYsIHRyaWdnZXIpID0+IHtcbiAgLyoqXG4gICAqIElmIG5vIGV2ZW50IHByb3ZpZGVkIGFuZFxuICAgKiB3ZSBkbyBub3QgaGF2ZSBhIHRyaWdnZXIsXG4gICAqIHRoZW4gdGhpcyBwb3BvdmVyIHdhcyBsaWtlbHlcbiAgICogcHJlc2VudGVkIHZpYSB0aGUgcG9wb3ZlckNvbnRyb2xsZXJcbiAgICogb3IgdXNlcnMgY2FsbGVkIGBwcmVzZW50YCBtYW51YWxseS5cbiAgICogSW4gdGhpcyBjYXNlLCB0aGUgYXJyb3cgc2hvdWxkIG5vdCBiZVxuICAgKiBzaG93biBhcyB3ZSBkbyBub3QgaGF2ZSBhIHJlZmVyZW5jZS5cbiAgICovXG4gIGlmICghZXYgJiYgIXRyaWdnZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIElmIHBvcG92ZXIgaXMgb24gdGhlIGxlZnQgb3IgdGhlIHJpZ2h0XG4gICAqIG9mIGEgdHJpZ2dlciwgYnV0IHdlIG5lZWRlZCB0byBhZGp1c3QgdGhlXG4gICAqIHBvcG92ZXIgZHVlIHRvIHNjcmVlbiBib3VuZHMsIHRoZW4gd2Ugc2hvdWxkXG4gICAqIGhpZGUgdGhlIGFycm93IGFzIGl0IHdpbGwgbmV2ZXIgYmUgcG9pbnRpbmdcbiAgICogYXQgdGhlIHRyaWdnZXIuXG4gICAqL1xuICBpZiAoc2lkZSAhPT0gJ3RvcCcgJiYgc2lkZSAhPT0gJ2JvdHRvbScgJiYgZGlkQWRqdXN0Qm91bmRzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyA9IDU7XG4vKipcbiAqIGlPUyBQb3BvdmVyIEVudGVyIEFuaW1hdGlvblxuICovXG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBvcHRzKSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3Qge1xuICAgIGV2ZW50OiBldixcbiAgICBzaXplLFxuICAgIHRyaWdnZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIHNpZGUsXG4gICAgYWxpZ25cbiAgfSA9IG9wdHM7XG4gIGNvbnN0IGRvYyA9IGJhc2VFbC5vd25lckRvY3VtZW50O1xuICBjb25zdCBpc1JUTCA9IGRvYy5kaXIgPT09ICdydGwnO1xuICBjb25zdCBib2R5V2lkdGggPSBkb2MuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aDtcbiAgY29uc3QgYm9keUhlaWdodCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lckhlaWdodDtcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGJhc2VFbCk7XG4gIGNvbnN0IGNvbnRlbnRFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xuICBjb25zdCBhcnJvd0VsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1hcnJvdycpO1xuICBjb25zdCByZWZlcmVuY2VTaXplRWwgPSB0cmlnZ2VyIHx8ICgoX2EgPSBldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuZGV0YWlsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW9uU2hhZG93VGFyZ2V0KSB8fCAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRhcmdldCk7XG4gIGNvbnN0IHtcbiAgICBjb250ZW50V2lkdGgsXG4gICAgY29udGVudEhlaWdodFxuICB9ID0gZ2V0UG9wb3ZlckRpbWVuc2lvbnMoc2l6ZSwgY29udGVudEVsLCByZWZlcmVuY2VTaXplRWwpO1xuICBjb25zdCB7XG4gICAgYXJyb3dXaWR0aCxcbiAgICBhcnJvd0hlaWdodFxuICB9ID0gZ2V0QXJyb3dEaW1lbnNpb25zKGFycm93RWwpO1xuICBjb25zdCBkZWZhdWx0UG9zaXRpb24gPSB7XG4gICAgdG9wOiBib2R5SGVpZ2h0IC8gMiAtIGNvbnRlbnRIZWlnaHQgLyAyLFxuICAgIGxlZnQ6IGJvZHlXaWR0aCAvIDIgLSBjb250ZW50V2lkdGggLyAyLFxuICAgIG9yaWdpblg6IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICBvcmlnaW5ZOiAndG9wJ1xuICB9O1xuICBjb25zdCByZXN1bHRzID0gZ2V0UG9wb3ZlclBvc2l0aW9uKGlzUlRMLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIGFycm93V2lkdGgsIGFycm93SGVpZ2h0LCByZWZlcmVuY2UsIHNpZGUsIGFsaWduLCBkZWZhdWx0UG9zaXRpb24sIHRyaWdnZXIsIGV2KTtcbiAgY29uc3QgcGFkZGluZyA9IHNpemUgPT09ICdjb3ZlcicgPyAwIDogUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HO1xuICBjb25zdCBtYXJnaW4gPSBzaXplID09PSAnY292ZXInID8gMCA6IDI1O1xuICBjb25zdCB7XG4gICAgb3JpZ2luWCxcbiAgICBvcmlnaW5ZLFxuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIGJvdHRvbSxcbiAgICBjaGVja1NhZmVBcmVhTGVmdCxcbiAgICBjaGVja1NhZmVBcmVhUmlnaHQsXG4gICAgYXJyb3dUb3AsXG4gICAgYXJyb3dMZWZ0LFxuICAgIGFkZFBvcG92ZXJCb3R0b21DbGFzc1xuICB9ID0gY2FsY3VsYXRlV2luZG93QWRqdXN0bWVudChzaWRlLCByZXN1bHRzLnRvcCwgcmVzdWx0cy5sZWZ0LCBwYWRkaW5nLCBib2R5V2lkdGgsIGJvZHlIZWlnaHQsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgbWFyZ2luLCByZXN1bHRzLm9yaWdpblgsIHJlc3VsdHMub3JpZ2luWSwgcmVzdWx0cy5yZWZlcmVuY2VDb29yZGluYXRlcywgcmVzdWx0cy5hcnJvd1RvcCwgcmVzdWx0cy5hcnJvd0xlZnQsIGFycm93SGVpZ2h0KTtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICAvLyBJbiBDaHJvbWl1bSwgaWYgdGhlIHdyYXBwZXIgYW5pbWF0ZXMsIHRoZSBiYWNrZHJvcCBmaWx0ZXIgZG9lc24ndCB3b3JrLlxuICAvLyBUaGUgQ2hyb21pdW0gdGVhbSBzdGF0ZWQgdGhhdCB0aGlzIGJlaGF2aW9yIGlzIGV4cGVjdGVkIGFuZCBub3QgYSBidWcuIFRoZSBlbGVtZW50IGFuaW1hdGluZyBvcGFjaXR5IGNyZWF0ZXMgYSBiYWNrZHJvcCByb290IGZvciB0aGUgYmFja2Ryb3AtZmlsdGVyLlxuICAvLyBUbyBnZXQgYXJvdW5kIHRoaXMsIGluc3RlYWQgb2YgYW5pbWF0aW5nIHRoZSB3cmFwcGVyLCBhbmltYXRlIGJvdGggdGhlIGFycm93IGFuZCBjb250ZW50LlxuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMTQ4ODI2XG4gIGNvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWFycm93JykpLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50JykpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAvLyBUT0RPKEZXLTQzNzYpIEVuc3VyZSB0aGF0IGFycm93IGFsc28gYmx1cnMgd2hlbiB0cmFuc2x1Y2VudFxuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5lYXNpbmcoJ2Vhc2UnKS5kdXJhdGlvbigxMDApLmJlZm9yZUFkZFdyaXRlKCgpID0+IHtcbiAgICBpZiAoc2l6ZSA9PT0gJ2NvdmVyJykge1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLXdpZHRoJywgYCR7Y29udGVudFdpZHRofXB4YCk7XG4gICAgfVxuICAgIGlmIChhZGRQb3BvdmVyQm90dG9tQ2xhc3MpIHtcbiAgICAgIGJhc2VFbC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWJvdHRvbScpO1xuICAgIH1cbiAgICBpZiAoYm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm90dG9tJywgYCR7Ym90dG9tfXB4YCk7XG4gICAgfVxuICAgIGNvbnN0IHNhZmVBcmVhTGVmdCA9ICcgKyB2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDApJztcbiAgICBjb25zdCBzYWZlQXJlYVJpZ2h0ID0gJyAtIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDApJztcbiAgICBsZXQgbGVmdFZhbHVlID0gYCR7bGVmdH1weGA7XG4gICAgaWYgKGNoZWNrU2FmZUFyZWFMZWZ0KSB7XG4gICAgICBsZWZ0VmFsdWUgPSBgJHtsZWZ0fXB4JHtzYWZlQXJlYUxlZnR9YDtcbiAgICB9XG4gICAgaWYgKGNoZWNrU2FmZUFyZWFSaWdodCkge1xuICAgICAgbGVmdFZhbHVlID0gYCR7bGVmdH1weCR7c2FmZUFyZWFSaWdodH1gO1xuICAgIH1cbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGBjYWxjKCR7dG9wfXB4ICsgdmFyKC0tb2Zmc2V0LXksIDApKWApO1xuICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsIGBjYWxjKCR7bGVmdFZhbHVlfSArIHZhcigtLW9mZnNldC14LCAwKSlgKTtcbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtvcmlnaW5ZfSAke29yaWdpblh9YCk7XG4gICAgaWYgKGFycm93RWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpZEFkanVzdEJvdW5kcyA9IHJlc3VsdHMudG9wICE9PSB0b3AgfHwgcmVzdWx0cy5sZWZ0ICE9PSBsZWZ0O1xuICAgICAgY29uc3Qgc2hvd0Fycm93ID0gc2hvdWxkU2hvd0Fycm93KHNpZGUsIGRpZEFkanVzdEJvdW5kcywgZXYsIHRyaWdnZXIpO1xuICAgICAgaWYgKHNob3dBcnJvdykge1xuICAgICAgICBhcnJvd0VsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBgY2FsYygke2Fycm93VG9wfXB4ICsgdmFyKC0tb2Zmc2V0LXksIDApKWApO1xuICAgICAgICBhcnJvd0VsLnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JywgYGNhbGMoJHthcnJvd0xlZnR9cHggKyB2YXIoLS1vZmZzZXQteCwgMCkpYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJvd0VsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIGNvbnRlbnRBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogaU9TIFBvcG92ZXIgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGJhc2VFbCk7XG4gIGNvbnN0IGNvbnRlbnRFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xuICBjb25zdCBhcnJvd0VsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1hcnJvdycpO1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgY29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItYXJyb3cnKSkuYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmVhc2luZygnZWFzZScpLmFmdGVyQWRkV3JpdGUoKCkgPT4ge1xuICAgIGJhc2VFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS13aWR0aCcpO1xuICAgIGJhc2VFbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BvdmVyLWJvdHRvbScpO1xuICAgIGNvbnRlbnRFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3R0b20nKTtcbiAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybS1vcmlnaW4nKTtcbiAgICBpZiAoYXJyb3dFbCkge1xuICAgICAgYXJyb3dFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgICBhcnJvd0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgICBhcnJvd0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgfVxuICB9KS5kdXJhdGlvbigzMDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIGNvbnRlbnRBbmltYXRpb25dKTtcbn07XG5jb25zdCBQT1BPVkVSX01EX0JPRFlfUEFERElORyA9IDEyO1xuLyoqXG4gKiBNZCBQb3BvdmVyIEVudGVyIEFuaW1hdGlvblxuICovXG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCB7XG4gICAgZXZlbnQ6IGV2LFxuICAgIHNpemUsXG4gICAgdHJpZ2dlcixcbiAgICByZWZlcmVuY2UsXG4gICAgc2lkZSxcbiAgICBhbGlnblxuICB9ID0gb3B0cztcbiAgY29uc3QgZG9jID0gYmFzZUVsLm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IGlzUlRMID0gZG9jLmRpciA9PT0gJ3J0bCc7XG4gIGNvbnN0IGJvZHlXaWR0aCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lcldpZHRoO1xuICBjb25zdCBib2R5SGVpZ2h0ID0gZG9jLmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0O1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3QgY29udGVudEVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XG4gIGNvbnN0IHJlZmVyZW5jZVNpemVFbCA9IHRyaWdnZXIgfHwgKChfYSA9IGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5kZXRhaWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pb25TaGFkb3dUYXJnZXQpIHx8IChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudGFyZ2V0KTtcbiAgY29uc3Qge1xuICAgIGNvbnRlbnRXaWR0aCxcbiAgICBjb250ZW50SGVpZ2h0XG4gIH0gPSBnZXRQb3BvdmVyRGltZW5zaW9ucyhzaXplLCBjb250ZW50RWwsIHJlZmVyZW5jZVNpemVFbCk7XG4gIGNvbnN0IGRlZmF1bHRQb3NpdGlvbiA9IHtcbiAgICB0b3A6IGJvZHlIZWlnaHQgLyAyIC0gY29udGVudEhlaWdodCAvIDIsXG4gICAgbGVmdDogYm9keVdpZHRoIC8gMiAtIGNvbnRlbnRXaWR0aCAvIDIsXG4gICAgb3JpZ2luWDogaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgIG9yaWdpblk6ICd0b3AnXG4gIH07XG4gIGNvbnN0IHJlc3VsdHMgPSBnZXRQb3BvdmVyUG9zaXRpb24oaXNSVEwsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgMCwgMCwgcmVmZXJlbmNlLCBzaWRlLCBhbGlnbiwgZGVmYXVsdFBvc2l0aW9uLCB0cmlnZ2VyLCBldik7XG4gIGNvbnN0IHBhZGRpbmcgPSBzaXplID09PSAnY292ZXInID8gMCA6IFBPUE9WRVJfTURfQk9EWV9QQURESU5HO1xuICBjb25zdCB7XG4gICAgb3JpZ2luWCxcbiAgICBvcmlnaW5ZLFxuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIGJvdHRvbVxuICB9ID0gY2FsY3VsYXRlV2luZG93QWRqdXN0bWVudChzaWRlLCByZXN1bHRzLnRvcCwgcmVzdWx0cy5sZWZ0LCBwYWRkaW5nLCBib2R5V2lkdGgsIGJvZHlIZWlnaHQsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgMCwgcmVzdWx0cy5vcmlnaW5YLCByZXN1bHRzLm9yaWdpblksIHJlc3VsdHMucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgY29udGVudEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB2aWV3cG9ydEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScpLmJlZm9yZVN0eWxlcyh7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gIH0pLmFmdGVyQ2xlYXJTdHlsZXMoWydwb2ludGVyLWV2ZW50cyddKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKS5kdXJhdGlvbigxNTApLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICBjb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoY29udGVudEVsKS5iZWZvcmVTdHlsZXMoe1xuICAgIHRvcDogYGNhbGMoJHt0b3B9cHggKyB2YXIoLS1vZmZzZXQteSwgMHB4KSlgLFxuICAgIGxlZnQ6IGBjYWxjKCR7bGVmdH1weCArIHZhcigtLW9mZnNldC14LCAwcHgpKWAsXG4gICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgJHtvcmlnaW5ZfSAke29yaWdpblh9YFxuICB9KS5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XG4gICAgaWYgKGJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JvdHRvbScsIGAke2JvdHRvbX1weGApO1xuICAgIH1cbiAgfSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMC44KScsICdzY2FsZSgxKScpO1xuICB2aWV3cG9ydEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignLnBvcG92ZXItdmlld3BvcnQnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJykuZHVyYXRpb24oMzAwKS5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XG4gICAgaWYgKHNpemUgPT09ICdjb3ZlcicpIHtcbiAgICAgIGJhc2VFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13aWR0aCcsIGAke2NvbnRlbnRXaWR0aH1weGApO1xuICAgIH1cbiAgICBpZiAob3JpZ2luWSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIGJhc2VFbC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWJvdHRvbScpO1xuICAgIH1cbiAgfSkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbiwgY29udGVudEFuaW1hdGlvbiwgdmlld3BvcnRBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogTWQgUG9wb3ZlciBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICBjb25zdCBjb250ZW50RWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKTtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLXdyYXBwZXInKSkuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmVhc2luZygnZWFzZScpLmFmdGVyQWRkV3JpdGUoKCkgPT4ge1xuICAgIGJhc2VFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS13aWR0aCcpO1xuICAgIGJhc2VFbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BvdmVyLWJvdHRvbScpO1xuICAgIGNvbnRlbnRFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3R0b20nKTtcbiAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybS1vcmlnaW4nKTtcbiAgfSkuZHVyYXRpb24oMTUwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgcG9wb3Zlcklvc0NzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLW1pbi13aWR0aDowOy0tbWluLWhlaWdodDowOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6YXV0bzstLW9mZnNldC14OjBweDstLW9mZnNldC15OjBweDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTt6LWluZGV4OjEwMDF9Omhvc3QoLnBvcG92ZXItbmVzdGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5wb3BvdmVyLW5lc3RlZCkgLnBvcG92ZXItd3JhcHBlcntwb2ludGVyLWV2ZW50czphdXRvfTpob3N0KC5vdmVybGF5LWhpZGRlbil7ZGlzcGxheTpub25lfS5wb3BvdmVyLXdyYXBwZXJ7ei1pbmRleDoxMH0ucG9wb3Zlci1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtvdmVyZmxvdzphdXRvO3otaW5kZXg6MTB9OjpzbG90dGVkKC5wb3BvdmVyLXZpZXdwb3J0KXstLWlvbi1zYWZlLWFyZWEtdG9wOjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1ib3R0b206MHB4Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdCgucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLWxlZnQpey0tb2Zmc2V0LXg6NXB4fTpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtcmlnaHQpey0tb2Zmc2V0LXg6LTVweH06aG9zdCgucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLXN0YXJ0KXstLW9mZnNldC14OjVweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLXN0YXJ0KSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLXN0YXJ0ey0tb2Zmc2V0LXg6LTVweH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLXN0YXJ0OmRpcihydGwpKXstLW9mZnNldC14Oi01cHh9fTpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtZW5kKXstLW9mZnNldC14Oi01cHh9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnBvcG92ZXItbmVzdGVkLnBvcG92ZXItc2lkZS1lbmQpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtZW5key0tb2Zmc2V0LXg6NXB4fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtZW5kOmRpcihydGwpKXstLW9mZnNldC14OjVweH19Omhvc3R7LS13aWR0aDoyMDBweDstLW1heC1oZWlnaHQ6OTAlOy0tYm94LXNoYWRvdzpub25lOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4wOCl9Omhvc3QoLnBvcG92ZXItZGVza3RvcCl7LS1ib3gtc2hhZG93OjBweCA0cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ucG9wb3Zlci1jb250ZW50e2JvcmRlci1yYWRpdXM6MTBweH06aG9zdCgucG9wb3Zlci1kZXNrdG9wKSAucG9wb3Zlci1jb250ZW50e2JvcmRlcjowLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTAwLCAjZTZlNmU2KSl9LnBvcG92ZXItYXJyb3d7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMHB4O2hlaWdodDoxMHB4O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjExfS5wb3BvdmVyLWFycm93OjphZnRlcnt0b3A6M3B4O2JvcmRlci1yYWRpdXM6M3B4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRlbnQ6XFxcIlxcXCI7ei1pbmRleDoxMH0ucG9wb3Zlci1hcnJvdzo6YWZ0ZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjNweH06aG9zdCgucG9wb3Zlci1ib3R0b20pIC5wb3BvdmVyLWFycm93e3RvcDphdXRvO2JvdHRvbTotMTBweH06aG9zdCgucG9wb3Zlci1ib3R0b20pIC5wb3BvdmVyLWFycm93OjphZnRlcnt0b3A6LTZweH06aG9zdCgucG9wb3Zlci1zaWRlLWxlZnQpIC5wb3BvdmVyLWFycm93ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Omhvc3QoLnBvcG92ZXItc2lkZS1yaWdodCkgLnBvcG92ZXItYXJyb3d7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfTpob3N0KC5wb3BvdmVyLXNpZGUtdG9wKSAucG9wb3Zlci1hcnJvd3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9Omhvc3QoLnBvcG92ZXItc2lkZS1zdGFydCkgLnBvcG92ZXItYXJyb3d7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucG9wb3Zlci1zaWRlLXN0YXJ0KSAucG9wb3Zlci1hcnJvdyw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkucG9wb3Zlci1zaWRlLXN0YXJ0IC5wb3BvdmVyLWFycm93ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgucG9wb3Zlci1zaWRlLXN0YXJ0OmRpcihydGwpKSAucG9wb3Zlci1hcnJvd3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9fTpob3N0KC5wb3BvdmVyLXNpZGUtZW5kKSAucG9wb3Zlci1hcnJvd3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnBvcG92ZXItc2lkZS1lbmQpIC5wb3BvdmVyLWFycm93LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5wb3BvdmVyLXNpZGUtZW5kIC5wb3BvdmVyLWFycm93ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnBvcG92ZXItc2lkZS1lbmQ6ZGlyKHJ0bCkpIC5wb3BvdmVyLWFycm93ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9fS5wb3BvdmVyLWFycm93LC5wb3BvdmVyLWNvbnRlbnR7b3BhY2l0eTowfUBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSl7Omhvc3QoLnBvcG92ZXItdHJhbnNsdWNlbnQpIC5wb3BvdmVyLWNvbnRlbnQsOmhvc3QoLnBvcG92ZXItdHJhbnNsdWNlbnQpIC5wb3BvdmVyLWFycm93OjphZnRlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX1cIjtcbmNvbnN0IElvblBvcG92ZXJJb3NTdHlsZTAgPSBwb3BvdmVySW9zQ3NzO1xuY29uc3QgcG9wb3Zlck1kQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOy0tbWluLXdpZHRoOjA7LS1taW4taGVpZ2h0OjA7LS1tYXgtd2lkdGg6YXV0bzstLWhlaWdodDphdXRvOy0tb2Zmc2V0LXg6MHB4Oy0tb2Zmc2V0LXk6MHB4O2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO3otaW5kZXg6MTAwMX06aG9zdCgucG9wb3Zlci1uZXN0ZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnBvcG92ZXItbmVzdGVkKSAucG9wb3Zlci13cmFwcGVye3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLm92ZXJsYXktaGlkZGVuKXtkaXNwbGF5Om5vbmV9LnBvcG92ZXItd3JhcHBlcnt6LWluZGV4OjEwfS5wb3BvdmVyLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OmF1dG87ei1pbmRleDoxMH06OnNsb3R0ZWQoLnBvcG92ZXItdmlld3BvcnQpey0taW9uLXNhZmUtYXJlYS10b3A6MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTowcHg7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtbGVmdCl7LS1vZmZzZXQteDo1cHh9Omhvc3QoLnBvcG92ZXItbmVzdGVkLnBvcG92ZXItc2lkZS1yaWdodCl7LS1vZmZzZXQteDotNXB4fTpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtc3RhcnQpey0tb2Zmc2V0LXg6NXB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtc3RhcnQpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtc3RhcnR7LS1vZmZzZXQteDotNXB4fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5wb3BvdmVyLW5lc3RlZC5wb3BvdmVyLXNpZGUtc3RhcnQ6ZGlyKHJ0bCkpey0tb2Zmc2V0LXg6LTVweH19Omhvc3QoLnBvcG92ZXItbmVzdGVkLnBvcG92ZXItc2lkZS1lbmQpey0tb2Zmc2V0LXg6LTVweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucG9wb3Zlci1uZXN0ZWQucG9wb3Zlci1zaWRlLWVuZCksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnBvcG92ZXItbmVzdGVkLnBvcG92ZXItc2lkZS1lbmR7LS1vZmZzZXQteDo1cHh9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnBvcG92ZXItbmVzdGVkLnBvcG92ZXItc2lkZS1lbmQ6ZGlyKHJ0bCkpey0tb2Zmc2V0LXg6NXB4fX06aG9zdHstLXdpZHRoOjI1MHB4Oy0tbWF4LWhlaWdodDo5MCU7LS1ib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTstLWJhY2tkcm9wLW9wYWNpdHk6dmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMzIpfS5wb3BvdmVyLWNvbnRlbnR7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5wb3BvdmVyLWNvbnRlbnR7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH1bZGlyPXJ0bF0gLnBvcG92ZXItY29udGVudHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5wb3BvdmVyLWNvbnRlbnQ6ZGlyKHJ0bCl7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19LnBvcG92ZXItdmlld3BvcnR7LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OjEwMG1zO3RyYW5zaXRpb24tZGVsYXk6MTAwbXN9LnBvcG92ZXItd3JhcHBlcntvcGFjaXR5OjB9XCI7XG5jb25zdCBJb25Qb3BvdmVyTWRTdHlsZTAgPSBwb3BvdmVyTWRDc3M7XG5jb25zdCBQb3BvdmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJEaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJXaWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwid2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuaW9uTW91bnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vdW50XCIsIDcpO1xuICAgIHRoaXMucGFyZW50UG9wb3ZlciA9IG51bGw7XG4gICAgdGhpcy5jb3JlRGVsZWdhdGUgPSBDb3JlRGVsZWdhdGUoKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmlubGluZSA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNEZXNjZW5kYW50T25QcmVzZW50ID0gZmFsc2U7XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgIH07XG4gICAgdGhpcy5vbkxpZmVjeWNsZSA9IG1vZGFsRXZlbnQgPT4ge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLnVzZXJzRWxlbWVudDtcbiAgICAgIGNvbnN0IG5hbWUgPSBMSUZFQ1lDTEVfTUFQW21vZGFsRXZlbnQudHlwZV07XG4gICAgICBpZiAoZWwgJiYgbmFtZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgZGV0YWlsOiBtb2RhbEV2ZW50LmRldGFpbFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgdHJpZ2dlckFjdGlvbixcbiAgICAgICAgZWwsXG4gICAgICAgIGRlc3Ryb3lUcmlnZ2VySW50ZXJhY3Rpb25cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGRlc3Ryb3lUcmlnZ2VySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHRyaWdnZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0cmlnZ2VyRWwgPSB0aGlzLnRyaWdnZXJFbCA9IHRyaWdnZXIgIT09IHVuZGVmaW5lZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRyaWdnZXIpIDogbnVsbDtcbiAgICAgIGlmICghdHJpZ2dlckVsKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgQSB0cmlnZ2VyIGVsZW1lbnQgd2l0aCB0aGUgSUQgXCIke3RyaWdnZXJ9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLiBUaGUgdHJpZ2dlciBlbGVtZW50IG11c3QgYmUgaW4gdGhlIERPTSB3aGVuIHRoZSBcInRyaWdnZXJcIiBwcm9wZXJ0eSBpcyBzZXQgb24gaW9uLXBvcG92ZXIuYCwgdGhpcy5lbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbiA9IGNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbih0cmlnZ2VyRWwsIHRyaWdnZXJBY3Rpb24sIGVsKTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlndXJlS2V5Ym9hcmRJbnRlcmFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGVzdHJveUtleWJvYXJkSW50ZXJhY3Rpb24sXG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChkZXN0cm95S2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgICBkZXN0cm95S2V5Ym9hcmRJbnRlcmFjdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95S2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGNvbmZpZ3VyZUtleWJvYXJkSW50ZXJhY3Rpb24oZWwpO1xuICAgIH07XG4gICAgdGhpcy5jb25maWd1cmVEaXNtaXNzSW50ZXJhY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlc3Ryb3lEaXNtaXNzSW50ZXJhY3Rpb24sXG4gICAgICAgIHBhcmVudFBvcG92ZXIsXG4gICAgICAgIHRyaWdnZXJBY3Rpb24sXG4gICAgICAgIHRyaWdnZXJFbCxcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFwYXJlbnRQb3BvdmVyIHx8ICF0cmlnZ2VyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGRlc3Ryb3lEaXNtaXNzSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZGVzdHJveURpc21pc3NJbnRlcmFjdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95RGlzbWlzc0ludGVyYWN0aW9uID0gY29uZmlndXJlRGlzbWlzc0ludGVyYWN0aW9uKHRyaWdnZXJFbCwgdHJpZ2dlckFjdGlvbiwgZWwsIHBhcmVudFBvcG92ZXIpO1xuICAgIH07XG4gICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICB0aGlzLmRlbGVnYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3ZlcmxheUluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW50ZXJBbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbXBvbmVudFByb3BzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgdGhpcy5jc3NDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgdGhpcy5ldmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaHRtbEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gJ2NsaWNrJztcbiAgICB0aGlzLnRyaWdnZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplID0gJ2F1dG8nO1xuICAgIHRoaXMuZGlzbWlzc09uU2VsZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSAndHJpZ2dlcic7XG4gICAgdGhpcy5zaWRlID0gJ2JvdHRvbSc7XG4gICAgdGhpcy5hbGlnbm1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hcnJvdyA9IHRydWU7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmtleWJvYXJkRXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXAgPSB0cnVlO1xuICAgIHRoaXMua2VlcENvbnRlbnRzTW91bnRlZCA9IGZhbHNlO1xuICB9XG4gIG9uVHJpZ2dlckNoYW5nZSgpIHtcbiAgICB0aGlzLmNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbigpO1xuICB9XG4gIG9uSXNPcGVuQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSAmJiBvbGRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJlc2VudCgpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29uZmlndXJlVHJpZ2dlckludGVyYWN0aW9uLFxuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBwcmVwYXJlT3ZlcmxheShlbCk7XG4gICAgY29uZmlndXJlVHJpZ2dlckludGVyYWN0aW9uKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvblxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uKSB7XG4gICAgICBkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBwb3BvdmVySWQgPSAoX2IgPSAoX2EgPSB0aGlzLmh0bWxBdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHNldE92ZXJsYXlJZChlbCk7XG4gICAgdGhpcy5wYXJlbnRQb3BvdmVyID0gZWwuY2xvc2VzdChgaW9uLXBvcG92ZXI6bm90KCMke3BvcG92ZXJJZH0pYCk7XG4gICAgaWYgKHRoaXMuYWxpZ25tZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWxpZ25tZW50ID0gZ2V0SW9uTW9kZSh0aGlzKSA9PT0gJ2lvcycgPyAnY2VudGVyJyA6ICdzdGFydCc7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFyZW50UG9wb3ZlcixcbiAgICAgIGlzT3BlblxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIHBvcG92ZXIgd2FzIHJlbmRlcmVkIHdpdGggaXNPcGVuPVwidHJ1ZVwiXG4gICAgICogdGhlbiB3ZSBzaG91bGQgb3BlbiBwb3BvdmVyIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmIChpc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIGlmIChwYXJlbnRQb3BvdmVyKSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKHBhcmVudFBvcG92ZXIsICdpb25Qb3BvdmVyV2lsbERpc21pc3MnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIG9wZW5pbmcgYSBwb3BvdmVyIGZyb20gYSB0cmlnZ2VyLCB3ZSBzaG91bGQgbm90IGJlXG4gICAqIG1vZGlmeWluZyB0aGUgYGV2ZW50YCBwcm9wIGZyb20gaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gICAqIEFkZGl0aW9uYWxseSwgd2hlbiBwcmVzc2luZyB0aGUgXCJSaWdodFwiIGFycm93IGtleSwgd2UgbmVlZFxuICAgKiB0byBzaGlmdCBmb2N1cyB0byB0aGUgZmlyc3QgZGVzY2VuZGFudCBpbiB0aGUgbmV3bHkgcHJlc2VudGVkXG4gICAqIHBvcG92ZXIuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlc2VudEZyb21UcmlnZ2VyKGV2ZW50LCBmb2N1c0Rlc2NlbmRhbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZm9jdXNEZXNjZW5kYW50T25QcmVzZW50ID0gZm9jdXNEZXNjZW5kYW50O1xuICAgIGF3YWl0IHRoaXMucHJlc2VudChldmVudCk7XG4gICAgdGhpcy5mb2N1c0Rlc2NlbmRhbnRPblByZXNlbnQgPSBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCBhbiBvdmVybGF5XG4gICAqIGlzIGJlaW5nIHVzZWQgaW5saW5lIG9yIHZpYSBhIGNvbnRyb2xsZXIvSlNcbiAgICogYW5kIHJldHVybnMgdGhlIGNvcnJlY3QgZGVsZWdhdGUuXG4gICAqIEJ5IGRlZmF1bHQsIHN1YnNlcXVlbnQgY2FsbHMgdG8gZ2V0RGVsZWdhdGVcbiAgICogd2lsbCB1c2UgYSBjYWNoZWQgdmVyc2lvbiBvZiB0aGUgZGVsZWdhdGUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjYWxsaW5nIGRpc21pc3MgYWZ0ZXJcbiAgICogcHJlc2VudCBzbyB0aGF0IHRoZSBjb3JyZWN0IGRlbGVnYXRlIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0RGVsZWdhdGUoZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLndvcmtpbmdEZWxlZ2F0ZSAmJiAhZm9yY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlbGVnYXRlOiB0aGlzLndvcmtpbmdEZWxlZ2F0ZSxcbiAgICAgICAgaW5saW5lOiB0aGlzLmlubGluZVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgb3ZlcmxheSBpbmxpbmVcbiAgICAgKiB3ZSBwb3RlbnRpYWxseSBuZWVkIHRvIHVzZSB0aGUgY29yZURlbGVnYXRlXG4gICAgICogc28gdGhhdCB0aGlzIHdvcmtzIGluIHZhbmlsbGEgSlMgYXBwcy5cbiAgICAgKiBJZiBhIGRldmVsb3BlciBoYXMgcHJlc2VudGVkIHRoaXMgY29tcG9uZW50XG4gICAgICogdmlhIGEgY29udHJvbGxlciwgdGhlbiB3ZSBjYW4gYXNzdW1lXG4gICAgICogdGhlIGNvbXBvbmVudCBpcyBhbHJlYWR5IGluIHRoZVxuICAgICAqIGNvcnJlY3QgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG4gICAgY29uc3QgaW5saW5lID0gdGhpcy5pbmxpbmUgPSBwYXJlbnRFbCAhPT0gbnVsbCAmJiAhdGhpcy5oYXNDb250cm9sbGVyO1xuICAgIGNvbnN0IGRlbGVnYXRlID0gdGhpcy53b3JraW5nRGVsZWdhdGUgPSBpbmxpbmUgPyB0aGlzLmRlbGVnYXRlIHx8IHRoaXMuY29yZURlbGVnYXRlIDogdGhpcy5kZWxlZ2F0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5saW5lLFxuICAgICAgZGVsZWdhdGVcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBQcmVzZW50IHRoZSBwb3BvdmVyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICogRGV2ZWxvcGVycyBjYW4gcGFzcyBhIG1vdXNlLCB0b3VjaCwgb3IgcG9pbnRlciBldmVudFxuICAgKiB0byBwb3NpdGlvbiB0aGUgcG9wb3ZlciByZWxhdGl2ZSB0byB3aGVyZSB0aGF0IGV2ZW50XG4gICAqIHdhcyBkaXNwYXRjaGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudChldmVudCkge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGlmICh0aGlzLnByZXNlbnRlZCkge1xuICAgICAgdW5sb2NrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgaW5saW5lLFxuICAgICAgZGVsZWdhdGVcbiAgICB9ID0gdGhpcy5nZXREZWxlZ2F0ZSh0cnVlKTtcbiAgICAvKipcbiAgICAgKiBFbWl0IGlvbk1vdW50IHNvIEpTIEZyYW1ld29ya3MgaGF2ZSBhbiBvcHBvcnR1bml0eVxuICAgICAqIHRvIGFkZCB0aGUgY2hpbGQgY29tcG9uZW50IHRvIHRoZSBET00uIFRoZSBjaGlsZFxuICAgICAqIGNvbXBvbmVudCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoaXMudXNlcnNFbGVtZW50IGJlbG93LlxuICAgICAqL1xuICAgIHRoaXMuaW9uTW91bnQuZW1pdCgpO1xuICAgIHRoaXMudXNlcnNFbGVtZW50ID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KGRlbGVnYXRlLCBlbCwgdGhpcy5jb21wb25lbnQsIFsncG9wb3Zlci12aWV3cG9ydCddLCB0aGlzLmNvbXBvbmVudFByb3BzLCBpbmxpbmUpO1xuICAgIGlmICghdGhpcy5rZXlib2FyZEV2ZW50cykge1xuICAgICAgdGhpcy5jb25maWd1cmVLZXlib2FyZEludGVyYWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlndXJlRGlzbWlzc0ludGVyYWN0aW9uKCk7XG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyB0aGUgbGF6eSBsb2FkZWQgYnVpbGQgb2YgU3RlbmNpbCwgd2UgbmVlZCB0byB3YWl0XG4gICAgICogZm9yIGV2ZXJ5IFN0ZW5jaWwgY29tcG9uZW50IGluc3RhbmNlIHRvIGJlIHJlYWR5IGJlZm9yZSBwcmVzZW50aW5nXG4gICAgICogb3RoZXJ3aXNlIHRoZXJlIGNhbiBiZSBhIGZsYXNoIG9mIHVuc3R5bGVkIGNvbnRlbnQuIFdpdGggdGhlXG4gICAgICogY3VzdG9tIGVsZW1lbnRzIGJ1bmRsZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBKUyBmcmFtZXdvcmtcbiAgICAgKiBtb3VudCB0aGUgaW5uZXIgY29udGVudHMgb2YgdGhlIG92ZXJsYXkgb3RoZXJ3aXNlIFdlYktpdCBtYXlcbiAgICAgKiBnZXQgdGhlIHRyYW5zaXRpb24gaW5jb3JyZWN0LlxuICAgICAqL1xuICAgIGlmIChoYXNMYXp5QnVpbGQoZWwpKSB7XG4gICAgICBhd2FpdCBkZWVwUmVhZHkodGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBrZWVwQ29udGVudHNNb3VudGVkPVwidHJ1ZVwiIHRoZW4gdGhlXG4gICAgICAgKiBKUyBGcmFtZXdvcmsgaGFzIGFscmVhZHkgbW91bnRlZCB0aGUgaW5uZXJcbiAgICAgICAqIGNvbnRlbnRzIHNvIHRoZXJlIGlzIG5vIG5lZWQgdG8gd2FpdC5cbiAgICAgICAqIE90aGVyd2lzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgSlNcbiAgICAgICAqIEZyYW1ld29yayB0byBtb3VudCB0aGUgaW5uZXIgY29udGVudHNcbiAgICAgICAqIG9mIHRoaXMgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgfSBlbHNlIGlmICghdGhpcy5rZWVwQ29udGVudHNNb3VudGVkKSB7XG4gICAgICBhd2FpdCB3YWl0Rm9yTW91bnQoKTtcbiAgICB9XG4gICAgYXdhaXQgcHJlc2VudCh0aGlzLCAncG9wb3ZlckVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIHtcbiAgICAgIGV2ZW50OiBldmVudCB8fCB0aGlzLmV2ZW50LFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyRWwsXG4gICAgICByZWZlcmVuY2U6IHRoaXMucmVmZXJlbmNlLFxuICAgICAgc2lkZTogdGhpcy5zaWRlLFxuICAgICAgYWxpZ246IHRoaXMuYWxpZ25tZW50XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogSWYgcG9wb3ZlciBpcyBuZXN0ZWQgYW5kIHdhc1xuICAgICAqIHByZXNlbnRlZCB1c2luZyB0aGUgXCJSaWdodFwiIGFycm93IGtleSxcbiAgICAgKiB3ZSBuZWVkIHRvIG1vdmUgZm9jdXMgdG8gdGhlIGZpcnN0XG4gICAgICogZGVzY2VuZGFudCBpbnNpZGUgb2YgdGhlIHBvcG92ZXIuXG4gICAgICovXG4gICAgaWYgKHRoaXMuZm9jdXNEZXNjZW5kYW50T25QcmVzZW50KSB7XG4gICAgICBmb2N1c0ZpcnN0RGVzY2VuZGFudChlbCk7XG4gICAgfVxuICAgIHVubG9jaygpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNtaXNzIHRoZSBwb3BvdmVyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBwb3BvdmVyLiBGb3IgZXhhbXBsZSwgJ2NhbmNlbCcgb3IgJ2JhY2tkcm9wJy5cbiAgICogQHBhcmFtIGRpc21pc3NQYXJlbnRQb3BvdmVyIElmIGB0cnVlYCwgZGlzbWlzc2luZyB0aGlzIHBvcG92ZXIgd2lsbCBhbHNvIGRpc21pc3NcbiAgICogYSBwYXJlbnQgcG9wb3ZlciBpZiB0aGlzIHBvcG92ZXIgaXMgbmVzdGVkLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBuby1vcCBpZiB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW4gcHJlc2VudGVkIHlldC4gSWYgeW91IHdhbnRcbiAgICogdG8gcmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgRE9NIHRoYXQgd2FzIG5ldmVyIHByZXNlbnRlZCwgdXNlIHRoZVxuICAgKiBbcmVtb3ZlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZW1vdmUpIG1ldGhvZC5cbiAgICovXG4gIGFzeW5jIGRpc21pc3MoZGF0YSwgcm9sZSwgZGlzbWlzc1BhcmVudFBvcG92ZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgY29uc3Qge1xuICAgICAgZGVzdHJveUtleWJvYXJkSW50ZXJhY3Rpb24sXG4gICAgICBkZXN0cm95RGlzbWlzc0ludGVyYWN0aW9uXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGRpc21pc3NQYXJlbnRQb3BvdmVyICYmIHRoaXMucGFyZW50UG9wb3Zlcikge1xuICAgICAgdGhpcy5wYXJlbnRQb3BvdmVyLmRpc21pc3MoZGF0YSwgcm9sZSwgZGlzbWlzc1BhcmVudFBvcG92ZXIpO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAncG9wb3ZlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sIHRoaXMuZXZlbnQpO1xuICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICBpZiAoZGVzdHJveUtleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZGVzdHJveUtleWJvYXJkSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgdGhpcy5kZXN0cm95S2V5Ym9hcmRJbnRlcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChkZXN0cm95RGlzbWlzc0ludGVyYWN0aW9uKSB7XG4gICAgICAgIGRlc3Ryb3lEaXNtaXNzSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgdGhpcy5kZXN0cm95RGlzbWlzc0ludGVyYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB1c2luZyBwb3BvdmVyIGlubGluZVxuICAgICAgICogd2UgcG90ZW50aWFsbHkgbmVlZCB0byB1c2UgdGhlIGNvcmVEZWxlZ2F0ZVxuICAgICAgICogc28gdGhhdCB0aGlzIHdvcmtzIGluIHZhbmlsbGEgSlMgYXBwc1xuICAgICAgICovXG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlbGVnYXRlXG4gICAgICB9ID0gdGhpcy5nZXREZWxlZ2F0ZSgpO1xuICAgICAgYXdhaXQgZGV0YWNoQ29tcG9uZW50KGRlbGVnYXRlLCB0aGlzLnVzZXJzRWxlbWVudCk7XG4gICAgfVxuICAgIHVubG9jaygpO1xuICAgIHJldHVybiBzaG91bGREaXNtaXNzO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGdldFBhcmVudFBvcG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50UG9wb3ZlcjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwb3BvdmVyIGRpZCBkaXNtaXNzLlxuICAgKi9cbiAgb25EaWREaXNtaXNzKCkge1xuICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUG9wb3ZlckRpZERpc21pc3MnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwb3BvdmVyIHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Qb3BvdmVyV2lsbERpc21pc3MnKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3Qge1xuICAgICAgb25MaWZlY3ljbGUsXG4gICAgICBwYXJlbnRQb3BvdmVyLFxuICAgICAgZGlzbWlzc09uU2VsZWN0LFxuICAgICAgc2lkZSxcbiAgICAgIGFycm93LFxuICAgICAgaHRtbEF0dHJpYnV0ZXMsXG4gICAgICBmb2N1c1RyYXBcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBkZXNrdG9wID0gaXNQbGF0Zm9ybSgnZGVza3RvcCcpO1xuICAgIGNvbnN0IGVuYWJsZUFycm93ID0gYXJyb3cgJiYgIXBhcmVudFBvcG92ZXI7XG4gICAgcmV0dXJuIGgoSG9zdCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICc0OGYxMDhhOWI3NGYxMjE1NTk2MjY4ODlkZDVhMWZjY2NmMzhmYzNkJyxcbiAgICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICAgIFwibm8tcm91dGVyXCI6IHRydWUsXG4gICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgfSwgaHRtbEF0dHJpYnV0ZXMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gXG4gICAgICB9LFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ3BvcG92ZXItdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50LFxuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAncG9wb3Zlci1kZXNrdG9wJzogZGVza3RvcCxcbiAgICAgICAgW2Bwb3BvdmVyLXNpZGUtJHtzaWRlfWBdOiB0cnVlLFxuICAgICAgICBbRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTXTogZm9jdXNUcmFwID09PSBmYWxzZSxcbiAgICAgICAgJ3BvcG92ZXItbmVzdGVkJzogISFwYXJlbnRQb3BvdmVyXG4gICAgICB9KSxcbiAgICAgIG9uSW9uUG9wb3ZlckRpZFByZXNlbnQ6IG9uTGlmZWN5Y2xlLFxuICAgICAgb25Jb25Qb3BvdmVyV2lsbFByZXNlbnQ6IG9uTGlmZWN5Y2xlLFxuICAgICAgb25Jb25Qb3BvdmVyV2lsbERpc21pc3M6IG9uTGlmZWN5Y2xlLFxuICAgICAgb25Jb25Qb3BvdmVyRGlkRGlzbWlzczogb25MaWZlY3ljbGUsXG4gICAgICBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXBcbiAgICB9KSwgIXBhcmVudFBvcG92ZXIgJiYgaChcImlvbi1iYWNrZHJvcFwiLCB7XG4gICAgICBrZXk6ICc1ODBjMTRhYjQ4NDcyNTM0ZjU5ZWVkYzViYTdmYTQ4NmRmMjVlZDRlJyxcbiAgICAgIHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzcyxcbiAgICAgIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLFxuICAgICAgcGFydDogXCJiYWNrZHJvcFwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnOWJjZjQ3ODkzZThkMzA1M2UyYmFhNDA1MTE3ODVkODRmZWI0MDM4YycsXG4gICAgICBjbGFzczogXCJwb3BvdmVyLXdyYXBwZXIgaW9uLW92ZXJsYXktd3JhcHBlclwiLFxuICAgICAgb25DbGljazogZGlzbWlzc09uU2VsZWN0ID8gKCkgPT4gdGhpcy5kaXNtaXNzKCkgOiB1bmRlZmluZWRcbiAgICB9LCBlbmFibGVBcnJvdyAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzRkNDdmMmJkYzAxYTU0NmE4ODE5MGMwN2Y4ZjQ3MDBmMjFkZTY3MTUnLFxuICAgICAgY2xhc3M6IFwicG9wb3Zlci1hcnJvd1wiLFxuICAgICAgcGFydDogXCJhcnJvd1wiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNzAwMThjMDg4NjU0YzE5OTZlMzA1YjdiNmIxMTQ0MTllOTc4MjRlZicsXG4gICAgICBjbGFzczogXCJwb3BvdmVyLWNvbnRlbnRcIixcbiAgICAgIHBhcnQ6IFwiY29udGVudFwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnM2RlOGUxOTU5YjhmYWNiYTJmYmU2OTQ5NDc3MDQ4MzIyMDBkODI3NidcbiAgICB9KSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ0cmlnZ2VyXCI6IFtcIm9uVHJpZ2dlckNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlckFjdGlvblwiOiBbXCJvblRyaWdnZXJDaGFuZ2VcIl0sXG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBMSUZFQ1lDTEVfTUFQID0ge1xuICBpb25Qb3BvdmVyRGlkUHJlc2VudDogJ2lvblZpZXdEaWRFbnRlcicsXG4gIGlvblBvcG92ZXJXaWxsUHJlc2VudDogJ2lvblZpZXdXaWxsRW50ZXInLFxuICBpb25Qb3BvdmVyV2lsbERpc21pc3M6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgaW9uUG9wb3ZlckRpZERpc21pc3M6ICdpb25WaWV3RGlkTGVhdmUnXG59O1xuUG9wb3Zlci5zdHlsZSA9IHtcbiAgaW9zOiBJb25Qb3BvdmVySW9zU3R5bGUwLFxuICBtZDogSW9uUG9wb3Zlck1kU3R5bGUwXG59O1xuZXhwb3J0IHsgUG9wb3ZlciBhcyBpb25fcG9wb3ZlciB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsSUFBTSxxQkFBcUIsYUFBVztBQUNwQyxNQUFJLENBQUMsU0FBUztBQUNaLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUNBLFFBQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLEVBQ0YsSUFBSSxRQUFRLHNCQUFzQjtBQUNsQyxTQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsRUFDZjtBQUNGO0FBTUEsSUFBTSx1QkFBdUIsQ0FBQyxNQUFNLFdBQVcsY0FBYztBQUMzRCxRQUFNLG9CQUFvQixVQUFVLHNCQUFzQjtBQUMxRCxRQUFNLGdCQUFnQixrQkFBa0I7QUFDeEMsTUFBSSxlQUFlLGtCQUFrQjtBQUNyQyxNQUFJLFNBQVMsV0FBVyxXQUFXO0FBQ2pDLFVBQU0sb0JBQW9CLFVBQVUsc0JBQXNCO0FBQzFELG1CQUFlLGtCQUFrQjtBQUFBLEVBQ25DO0FBQ0EsU0FBTztBQUFB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
