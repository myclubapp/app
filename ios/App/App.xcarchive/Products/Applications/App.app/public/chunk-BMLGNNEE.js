import {
  getIonPageElement
} from "./chunk-P46UNXAG.js";
import {
  createAnimation
} from "./chunk-BKPN4S4N.js";

// node_modules/@ionic/core/dist/esm/ios.transition-7fe5dbea.js
var DURATION = 540;
var getClonedElement = (tagName) => {
  return document.querySelector(`${tagName}.ion-cloned-element`);
};
var shadow = (el) => {
  return el.shadowRoot || el;
};
var getLargeTitle = (refEl) => {
  const tabs = refEl.tagName === "ION-TABS" ? refEl : refEl.querySelector("ion-tabs");
  const query = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
  if (tabs != null) {
    const activeTab = tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    return activeTab != null ? activeTab.querySelector(query) : null;
  }
  return refEl.querySelector(query);
};
var getBackButton = (refEl, backDirection) => {
  const tabs = refEl.tagName === "ION-TABS" ? refEl : refEl.querySelector("ion-tabs");
  let buttonsList = [];
  if (tabs != null) {
    const activeTab = tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    if (activeTab != null) {
      buttonsList = activeTab.querySelectorAll("ion-buttons");
    }
  } else {
    buttonsList = refEl.querySelectorAll("ion-buttons");
  }
  for (const buttons of buttonsList) {
    const parentHeader = buttons.closest("ion-header");
    const activeHeader = parentHeader && !parentHeader.classList.contains("header-collapse-condense-inactive");
    const backButton = buttons.querySelector("ion-back-button");
    const buttonsCollapse = buttons.classList.contains("buttons-collapse");
    const startSlot = buttons.slot === "start" || buttons.slot === "";
    if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
      return backButton;
    }
  }
  return null;
};
var createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
  const enteringBackButton = getBackButton(enteringEl, backDirection);
  const leavingLargeTitle = getLargeTitle(leavingEl);
  const enteringLargeTitle = getLargeTitle(enteringEl);
  const leavingBackButton = getBackButton(leavingEl, backDirection);
  const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
  const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
  if (shouldAnimationForward) {
    const leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
    const enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
    const enteringBackButtonTextEl = shadow(enteringBackButton).querySelector(".button-text");
    const enteringBackButtonTextBox = enteringBackButtonTextEl === null || enteringBackButtonTextEl === void 0 ? void 0 : enteringBackButtonTextEl.getBoundingClientRect();
    const leavingLargeTitleTextEl = shadow(leavingLargeTitle).querySelector(".toolbar-title");
    const leavingLargeTitleTextBox = leavingLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, leavingLargeTitleTextBox, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox, leavingLargeTitle, leavingLargeTitleTextBox);
  } else if (shouldAnimationBackward) {
    const enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
    const leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
    const leavingBackButtonTextEl = shadow(leavingBackButton).querySelector(".button-text");
    const leavingBackButtonTextBox = leavingBackButtonTextEl === null || leavingBackButtonTextEl === void 0 ? void 0 : leavingBackButtonTextEl.getBoundingClientRect();
    const enteringLargeTitleTextEl = shadow(enteringLargeTitle).querySelector(".toolbar-title");
    const enteringLargeTitleTextBox = enteringLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, enteringLargeTitleTextBox, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox, enteringLargeTitle, enteringLargeTitleTextBox);
  }
  return {
    forward: shouldAnimationForward,
    backward: shouldAnimationBackward
  };
};
var animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl, backButtonBox, backButtonTextEl, backButtonTextBox, largeTitleEl, largeTitleTextBox) => {
  var _a, _b;
  const BACK_BUTTON_START_OFFSET = rtl ? `calc(100% - ${backButtonBox.right + 4}px)` : `${backButtonBox.left - 4}px`;
  const TEXT_ORIGIN_X = rtl ? "right" : "left";
  const ICON_ORIGIN_X = rtl ? "left" : "right";
  const CONTAINER_ORIGIN_X = rtl ? "right" : "left";
  let WIDTH_SCALE = 1;
  let HEIGHT_SCALE = 1;
  let TEXT_START_SCALE = `scale(${HEIGHT_SCALE})`;
  const TEXT_END_SCALE = "scale(1)";
  if (backButtonTextEl && backButtonTextBox) {
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    WIDTH_SCALE = largeTitleTextBox.width / backButtonTextBox.width;
    HEIGHT_SCALE = (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET) / backButtonTextBox.height;
    TEXT_START_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  const backButtonIconEl = shadow(backButtonEl).querySelector("ion-icon");
  const backButtonIconBox = backButtonIconEl.getBoundingClientRect();
  const CONTAINER_START_TRANSLATE_X = rtl ? `${backButtonIconBox.width / 2 - (backButtonIconBox.right - backButtonBox.right)}px` : `${backButtonBox.left - backButtonIconBox.width / 2}px`;
  const CONTAINER_END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right}px` : `${backButtonBox.left}px`;
  const CONTAINER_START_TRANSLATE_Y = `${largeTitleTextBox.top}px`;
  const CONTAINER_END_TRANSLATE_Y = `${backButtonBox.top}px`;
  const FORWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }];
  const BACKWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }];
  const CONTAINER_KEYFRAMES = backDirection ? BACKWARD_CONTAINER_KEYFRAMES : FORWARD_CONTAINER_KEYFRAMES;
  const FORWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: TEXT_START_SCALE
  }, {
    offset: 1,
    opacity: 1,
    transform: TEXT_END_SCALE
  }];
  const BACKWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: TEXT_END_SCALE
  }, {
    offset: 1,
    opacity: 0,
    transform: TEXT_START_SCALE
  }];
  const TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
  const FORWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: "scale(0.6)"
  }, {
    offset: 0.6,
    opacity: 0,
    transform: "scale(0.6)"
  }, {
    offset: 1,
    opacity: 1,
    transform: "scale(1)"
  }];
  const BACKWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: "scale(1)"
  }, {
    offset: 0.2,
    opacity: 0,
    transform: "scale(0.6)"
  }, {
    offset: 1,
    opacity: 0,
    transform: "scale(0.6)"
  }];
  const ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
  const enteringBackButtonTextAnimation = createAnimation();
  const enteringBackButtonIconAnimation = createAnimation();
  const enteringBackButtonAnimation = createAnimation();
  const clonedBackButtonEl = getClonedElement("ion-back-button");
  const clonedBackButtonTextEl = shadow(clonedBackButtonEl).querySelector(".button-text");
  const clonedBackButtonIconEl = shadow(clonedBackButtonEl).querySelector("ion-icon");
  clonedBackButtonEl.text = backButtonEl.text;
  clonedBackButtonEl.mode = backButtonEl.mode;
  clonedBackButtonEl.icon = backButtonEl.icon;
  clonedBackButtonEl.color = backButtonEl.color;
  clonedBackButtonEl.disabled = backButtonEl.disabled;
  clonedBackButtonEl.style.setProperty("display", "block");
  clonedBackButtonEl.style.setProperty("position", "fixed");
  enteringBackButtonIconAnimation.addElement(clonedBackButtonIconEl);
  enteringBackButtonTextAnimation.addElement(clonedBackButtonTextEl);
  enteringBackButtonAnimation.addElement(clonedBackButtonEl);
  enteringBackButtonAnimation.beforeStyles({
    position: "absolute",
    top: "0px",
    [CONTAINER_ORIGIN_X]: "0px"
  }).beforeAddWrite(() => {
    backButtonEl.style.setProperty("display", "none");
    clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
  }).afterAddWrite(() => {
    backButtonEl.style.setProperty("display", "");
    clonedBackButtonEl.style.setProperty("display", "none");
    clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
  }).keyframes(CONTAINER_KEYFRAMES);
  enteringBackButtonTextAnimation.beforeStyles({
    "transform-origin": `${TEXT_ORIGIN_X} top`
  }).keyframes(TEXT_KEYFRAMES);
  enteringBackButtonIconAnimation.beforeStyles({
    "transform-origin": `${ICON_ORIGIN_X} center`
  }).keyframes(ICON_KEYFRAMES);
  rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation, enteringBackButtonAnimation]);
};
var animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, largeTitleTextBox, backButtonBox, backButtonTextEl, backButtonTextBox) => {
  var _a, _b;
  const ORIGIN_X = rtl ? "right" : "left";
  const TITLE_START_OFFSET = rtl ? `calc(100% - ${largeTitleBox.right}px)` : `${largeTitleBox.left}px`;
  const START_TRANSLATE_X = "0px";
  const START_TRANSLATE_Y = `${largeTitleBox.top}px`;
  const LARGE_TITLE_TRANSLATION_OFFSET = 8;
  let END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonBox.x + LARGE_TITLE_TRANSLATION_OFFSET}px`;
  let HEIGHT_SCALE = 0.5;
  const START_SCALE = "scale(1)";
  let END_SCALE = `scale(${HEIGHT_SCALE})`;
  if (backButtonTextEl && backButtonTextBox) {
    END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonTextBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonTextBox.x - LARGE_TITLE_TRANSLATION_OFFSET}px`;
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    const WIDTH_SCALE = backButtonTextBox.width / largeTitleTextBox.width;
    HEIGHT_SCALE = backButtonTextBox.height / (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET);
    END_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  const backButtonMidPoint = backButtonBox.top + backButtonBox.height / 2;
  const titleMidPoint = largeTitleBox.height * HEIGHT_SCALE / 2;
  const END_TRANSLATE_Y = `${backButtonMidPoint - titleMidPoint}px`;
  const BACKWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }, {
    offset: 0.1,
    opacity: 0
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }];
  const FORWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0.99,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }, {
    offset: 0.6,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }];
  const KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
  const clonedTitleEl = getClonedElement("ion-title");
  const clonedLargeTitleAnimation = createAnimation();
  clonedTitleEl.innerText = largeTitleEl.innerText;
  clonedTitleEl.size = largeTitleEl.size;
  clonedTitleEl.color = largeTitleEl.color;
  clonedLargeTitleAnimation.addElement(clonedTitleEl);
  clonedLargeTitleAnimation.beforeStyles({
    "transform-origin": `${ORIGIN_X} top`,
    /**
     * Since font size changes will cause
     * the dimension of the large title to change
     * we need to set the cloned title height
     * equal to that of the original large title height.
     */
    height: `${largeTitleBox.height}px`,
    display: "",
    position: "relative",
    [ORIGIN_X]: TITLE_START_OFFSET
  }).beforeAddWrite(() => {
    largeTitleEl.style.setProperty("opacity", "0");
  }).afterAddWrite(() => {
    largeTitleEl.style.setProperty("opacity", "");
    clonedTitleEl.style.setProperty("display", "none");
  }).keyframes(KEYFRAMES);
  rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
var iosTransitionAnimation = (navEl, opts) => {
  var _a;
  try {
    const EASING = "cubic-bezier(0.32,0.72,0,1)";
    const OPACITY = "opacity";
    const TRANSFORM = "transform";
    const CENTER = "0%";
    const OFF_OPACITY = 0.8;
    const isRTL = navEl.ownerDocument.dir === "rtl";
    const OFF_RIGHT = isRTL ? "-99.5%" : "99.5%";
    const OFF_LEFT = isRTL ? "33%" : "-33%";
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const backDirection = opts.direction === "back";
    const contentEl = enteringEl.querySelector(":scope > ion-content");
    const headerEls = enteringEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
    const enteringToolBarEls = enteringEl.querySelectorAll(":scope > ion-header > ion-toolbar");
    const rootAnimation = createAnimation();
    const enteringContentAnimation = createAnimation();
    rootAnimation.addElement(enteringEl).duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || DURATION).easing(opts.easing || EASING).fill("both").beforeRemoveClass("ion-page-invisible");
    if (leavingEl && navEl !== null && navEl !== void 0) {
      const navDecorAnimation = createAnimation();
      navDecorAnimation.addElement(navEl);
      rootAnimation.addAnimation(navDecorAnimation);
    }
    if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
      enteringContentAnimation.addElement(enteringEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
    } else {
      enteringContentAnimation.addElement(contentEl);
      enteringContentAnimation.addElement(headerEls);
    }
    rootAnimation.addAnimation(enteringContentAnimation);
    if (backDirection) {
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, OFF_OPACITY, 1);
    } else {
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
    }
    if (contentEl) {
      const enteringTransitionEffectEl = shadow(contentEl).querySelector(".transition-effect");
      if (enteringTransitionEffectEl) {
        const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector(".transition-cover");
        const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector(".transition-shadow");
        const enteringTransitionEffect = createAnimation();
        const enteringTransitionCover = createAnimation();
        const enteringTransitionShadow = createAnimation();
        enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
          opacity: "1",
          display: "block"
        }).afterStyles({
          opacity: "",
          display: ""
        });
        enteringTransitionCover.addElement(enteringTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
        enteringTransitionShadow.addElement(enteringTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.7);
        enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
        enteringContentAnimation.addAnimation([enteringTransitionEffect]);
      }
    }
    const enteringContentHasLargeTitle = enteringEl.querySelector("ion-header.header-collapse-condense");
    const {
      forward,
      backward
    } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
    enteringToolBarEls.forEach((enteringToolBarEl) => {
      const enteringToolBar = createAnimation();
      enteringToolBar.addElement(enteringToolBarEl);
      rootAnimation.addAnimation(enteringToolBar);
      const enteringTitle = createAnimation();
      enteringTitle.addElement(enteringToolBarEl.querySelector("ion-title"));
      const enteringToolBarButtons = createAnimation();
      const buttons = Array.from(enteringToolBarEl.querySelectorAll("ion-buttons,[menuToggle]"));
      const parentHeader = enteringToolBarEl.closest("ion-header");
      const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains("header-collapse-condense-inactive");
      let buttonsToAnimate;
      if (backDirection) {
        buttonsToAnimate = buttons.filter((button) => {
          const isCollapseButton = button.classList.contains("buttons-collapse");
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
      } else {
        buttonsToAnimate = buttons.filter((button) => !button.classList.contains("buttons-collapse"));
      }
      enteringToolBarButtons.addElement(buttonsToAnimate);
      const enteringToolBarItems = createAnimation();
      enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
      const enteringToolBarBg = createAnimation();
      enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector(".toolbar-background"));
      const enteringBackButton = createAnimation();
      const backButtonEl = enteringToolBarEl.querySelector("ion-back-button");
      if (backButtonEl) {
        enteringBackButton.addElement(backButtonEl);
      }
      enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
      enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
      enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
      if (backDirection) {
        if (!inactiveHeader) {
          enteringTitle.fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
        enteringBackButton.fromTo(OPACITY, 0.01, 1);
      } else {
        if (!enteringContentHasLargeTitle) {
          enteringTitle.fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        enteringToolBarBg.beforeClearStyles([OPACITY, "transform"]);
        const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
        if (!translucentHeader) {
          enteringToolBarBg.fromTo(OPACITY, 0.01, "var(--opacity)");
        } else {
          enteringToolBarBg.fromTo("transform", isRTL ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
        }
        if (!forward) {
          enteringBackButton.fromTo(OPACITY, 0.01, 1);
        }
        if (backButtonEl && !forward) {
          const enteringBackBtnText = createAnimation();
          enteringBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo(`transform`, isRTL ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
          enteringToolBar.addAnimation(enteringBackBtnText);
        }
      }
    });
    if (leavingEl) {
      const leavingContent = createAnimation();
      const leavingContentEl = leavingEl.querySelector(":scope > ion-content");
      const leavingToolBarEls = leavingEl.querySelectorAll(":scope > ion-header > ion-toolbar");
      const leavingHeaderEls = leavingEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
      if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
        leavingContent.addElement(leavingEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
      } else {
        leavingContent.addElement(leavingContentEl);
        leavingContent.addElement(leavingHeaderEls);
      }
      rootAnimation.addAnimation(leavingContent);
      if (backDirection) {
        leavingContent.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)");
        const leavingPage = getIonPageElement(leavingEl);
        rootAnimation.afterAddWrite(() => {
          if (rootAnimation.getDirection() === "normal") {
            leavingPage.style.setProperty("display", "none");
          }
        });
      } else {
        leavingContent.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 1, OFF_OPACITY);
      }
      if (leavingContentEl) {
        const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector(".transition-effect");
        if (leavingTransitionEffectEl) {
          const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector(".transition-cover");
          const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector(".transition-shadow");
          const leavingTransitionEffect = createAnimation();
          const leavingTransitionCover = createAnimation();
          const leavingTransitionShadow = createAnimation();
          leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
            opacity: "1",
            display: "block"
          }).afterStyles({
            opacity: "",
            display: ""
          });
          leavingTransitionCover.addElement(leavingTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
          leavingTransitionShadow.addElement(leavingTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.7, 0.03);
          leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
          leavingContent.addAnimation([leavingTransitionEffect]);
        }
      }
      leavingToolBarEls.forEach((leavingToolBarEl) => {
        const leavingToolBar = createAnimation();
        leavingToolBar.addElement(leavingToolBarEl);
        const leavingTitle = createAnimation();
        leavingTitle.addElement(leavingToolBarEl.querySelector("ion-title"));
        const leavingToolBarButtons = createAnimation();
        const buttons = leavingToolBarEl.querySelectorAll("ion-buttons,[menuToggle]");
        const parentHeader = leavingToolBarEl.closest("ion-header");
        const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains("header-collapse-condense-inactive");
        const buttonsToAnimate = Array.from(buttons).filter((button) => {
          const isCollapseButton = button.classList.contains("buttons-collapse");
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
        leavingToolBarButtons.addElement(buttonsToAnimate);
        const leavingToolBarItems = createAnimation();
        const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
        if (leavingToolBarItemEls.length > 0) {
          leavingToolBarItems.addElement(leavingToolBarItemEls);
        }
        const leavingToolBarBg = createAnimation();
        leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector(".toolbar-background"));
        const leavingBackButton = createAnimation();
        const backButtonEl = leavingToolBarEl.querySelector("ion-back-button");
        if (backButtonEl) {
          leavingBackButton.addElement(backButtonEl);
        }
        leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
        rootAnimation.addAnimation(leavingToolBar);
        leavingBackButton.fromTo(OPACITY, 0.99, 0);
        leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
        leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
        if (backDirection) {
          if (!inactiveHeader) {
            leavingTitle.fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)").fromTo(OPACITY, 0.99, 0);
          }
          leavingToolBarItems.fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)");
          leavingToolBarBg.beforeClearStyles([OPACITY, "transform"]);
          const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
          if (!translucentHeader) {
            leavingToolBarBg.fromTo(OPACITY, "var(--opacity)", 0);
          } else {
            leavingToolBarBg.fromTo("transform", "translateX(0px)", isRTL ? "translateX(-100%)" : "translateX(100%)");
          }
          if (backButtonEl && !backward) {
            const leavingBackBtnText = createAnimation();
            leavingBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo("transform", `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + "px"})`);
            leavingToolBar.addAnimation(leavingBackBtnText);
          }
        } else {
          if (!inactiveHeader) {
            leavingTitle.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
          }
          leavingToolBarItems.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).afterClearStyles([TRANSFORM, OPACITY]);
          leavingBackButton.afterClearStyles([OPACITY]);
          leavingTitle.afterClearStyles([OPACITY]);
          leavingToolBarButtons.afterClearStyles([OPACITY]);
        }
      });
    }
    return rootAnimation;
  } catch (err) {
    throw err;
  }
};
var LARGE_TITLE_SIZE_OFFSET = 10;

export {
  shadow,
  iosTransitionAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm/ios.transition-7fe5dbea.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb3MudHJhbnNpdGlvbi03ZmU1ZGJlYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1lYWI1YTRjYS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1lY2I1NWI4ZC5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0ICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0ICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmNvbnN0IERVUkFUSU9OID0gNTQwO1xuLy8gVE9ETyhGVy0yODMyKTogdHlwZXNcbmNvbnN0IGdldENsb25lZEVsZW1lbnQgPSB0YWdOYW1lID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGFnTmFtZX0uaW9uLWNsb25lZC1lbGVtZW50YCk7XG59O1xuY29uc3Qgc2hhZG93ID0gZWwgPT4ge1xuICByZXR1cm4gZWwuc2hhZG93Um9vdCB8fCBlbDtcbn07XG5jb25zdCBnZXRMYXJnZVRpdGxlID0gcmVmRWwgPT4ge1xuICBjb25zdCB0YWJzID0gcmVmRWwudGFnTmFtZSA9PT0gJ0lPTi1UQUJTJyA/IHJlZkVsIDogcmVmRWwucXVlcnlTZWxlY3RvcignaW9uLXRhYnMnKTtcbiAgY29uc3QgcXVlcnkgPSAnaW9uLWNvbnRlbnQgaW9uLWhlYWRlcjpub3QoLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZSkgaW9uLXRpdGxlLnRpdGxlLWxhcmdlJztcbiAgaWYgKHRhYnMgIT0gbnVsbCkge1xuICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRhYnMucXVlcnlTZWxlY3RvcignaW9uLXRhYjpub3QoLnRhYi1oaWRkZW4pLCAuaW9uLXBhZ2U6bm90KC5pb24tcGFnZS1oaWRkZW4pJyk7XG4gICAgcmV0dXJuIGFjdGl2ZVRhYiAhPSBudWxsID8gYWN0aXZlVGFiLnF1ZXJ5U2VsZWN0b3IocXVlcnkpIDogbnVsbDtcbiAgfVxuICByZXR1cm4gcmVmRWwucXVlcnlTZWxlY3RvcihxdWVyeSk7XG59O1xuY29uc3QgZ2V0QmFja0J1dHRvbiA9IChyZWZFbCwgYmFja0RpcmVjdGlvbikgPT4ge1xuICBjb25zdCB0YWJzID0gcmVmRWwudGFnTmFtZSA9PT0gJ0lPTi1UQUJTJyA/IHJlZkVsIDogcmVmRWwucXVlcnlTZWxlY3RvcignaW9uLXRhYnMnKTtcbiAgbGV0IGJ1dHRvbnNMaXN0ID0gW107XG4gIGlmICh0YWJzICE9IG51bGwpIHtcbiAgICBjb25zdCBhY3RpdmVUYWIgPSB0YWJzLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWI6bm90KC50YWItaGlkZGVuKSwgLmlvbi1wYWdlOm5vdCguaW9uLXBhZ2UtaGlkZGVuKScpO1xuICAgIGlmIChhY3RpdmVUYWIgIT0gbnVsbCkge1xuICAgICAgYnV0dG9uc0xpc3QgPSBhY3RpdmVUYWIucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uc0xpc3QgPSByZWZFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpO1xuICB9XG4gIGZvciAoY29uc3QgYnV0dG9ucyBvZiBidXR0b25zTGlzdCkge1xuICAgIGNvbnN0IHBhcmVudEhlYWRlciA9IGJ1dHRvbnMuY2xvc2VzdCgnaW9uLWhlYWRlcicpO1xuICAgIGNvbnN0IGFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciAmJiAhcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgY29uc3QgYmFja0J1dHRvbiA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcignaW9uLWJhY2stYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uc0NvbGxhcHNlID0gYnV0dG9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKTtcbiAgICBjb25zdCBzdGFydFNsb3QgPSBidXR0b25zLnNsb3QgPT09ICdzdGFydCcgfHwgYnV0dG9ucy5zbG90ID09PSAnJztcbiAgICBpZiAoYmFja0J1dHRvbiAhPT0gbnVsbCAmJiBzdGFydFNsb3QgJiYgKGJ1dHRvbnNDb2xsYXBzZSAmJiBhY3RpdmVIZWFkZXIgJiYgYmFja0RpcmVjdGlvbiB8fCAhYnV0dG9uc0NvbGxhcHNlKSkge1xuICAgICAgcmV0dXJuIGJhY2tCdXR0b247XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGNyZWF0ZUxhcmdlVGl0bGVUcmFuc2l0aW9uID0gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XG4gIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbiA9IGdldEJhY2tCdXR0b24oZW50ZXJpbmdFbCwgYmFja0RpcmVjdGlvbik7XG4gIGNvbnN0IGxlYXZpbmdMYXJnZVRpdGxlID0gZ2V0TGFyZ2VUaXRsZShsZWF2aW5nRWwpO1xuICBjb25zdCBlbnRlcmluZ0xhcmdlVGl0bGUgPSBnZXRMYXJnZVRpdGxlKGVudGVyaW5nRWwpO1xuICBjb25zdCBsZWF2aW5nQmFja0J1dHRvbiA9IGdldEJhY2tCdXR0b24obGVhdmluZ0VsLCBiYWNrRGlyZWN0aW9uKTtcbiAgY29uc3Qgc2hvdWxkQW5pbWF0aW9uRm9yd2FyZCA9IGVudGVyaW5nQmFja0J1dHRvbiAhPT0gbnVsbCAmJiBsZWF2aW5nTGFyZ2VUaXRsZSAhPT0gbnVsbCAmJiAhYmFja0RpcmVjdGlvbjtcbiAgY29uc3Qgc2hvdWxkQW5pbWF0aW9uQmFja3dhcmQgPSBlbnRlcmluZ0xhcmdlVGl0bGUgIT09IG51bGwgJiYgbGVhdmluZ0JhY2tCdXR0b24gIT09IG51bGwgJiYgYmFja0RpcmVjdGlvbjtcbiAgaWYgKHNob3VsZEFuaW1hdGlvbkZvcndhcmQpIHtcbiAgICBjb25zdCBsZWF2aW5nTGFyZ2VUaXRsZUJveCA9IGxlYXZpbmdMYXJnZVRpdGxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbkJveCA9IGVudGVyaW5nQmFja0J1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b25UZXh0RWwgPSBzaGFkb3coZW50ZXJpbmdCYWNrQnV0dG9uKS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRleHQnKTtcbiAgICAvLyBUZXh0IGVsZW1lbnQgbm90IHJlbmRlcmVkIGlmIGRldmVsb3BlcnMgcGFzcyB0ZXh0PVwiXCIgdG8gdGhlIGJhY2sgYnV0dG9uXG4gICAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEJveCA9IGVudGVyaW5nQmFja0J1dHRvblRleHRFbCA9PT0gbnVsbCB8fCBlbnRlcmluZ0JhY2tCdXR0b25UZXh0RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVudGVyaW5nQmFja0J1dHRvblRleHRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBsZWF2aW5nTGFyZ2VUaXRsZVRleHRFbCA9IHNoYWRvdyhsZWF2aW5nTGFyZ2VUaXRsZSkucXVlcnlTZWxlY3RvcignLnRvb2xiYXItdGl0bGUnKTtcbiAgICBjb25zdCBsZWF2aW5nTGFyZ2VUaXRsZVRleHRCb3ggPSBsZWF2aW5nTGFyZ2VUaXRsZVRleHRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBhbmltYXRlTGFyZ2VUaXRsZShyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGxlYXZpbmdMYXJnZVRpdGxlLCBsZWF2aW5nTGFyZ2VUaXRsZUJveCwgbGVhdmluZ0xhcmdlVGl0bGVUZXh0Qm94LCBlbnRlcmluZ0JhY2tCdXR0b25Cb3gsIGVudGVyaW5nQmFja0J1dHRvblRleHRFbCwgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEJveCk7XG4gICAgYW5pbWF0ZUJhY2tCdXR0b24ocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBlbnRlcmluZ0JhY2tCdXR0b24sIGVudGVyaW5nQmFja0J1dHRvbkJveCwgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEVsLCBlbnRlcmluZ0JhY2tCdXR0b25UZXh0Qm94LCBsZWF2aW5nTGFyZ2VUaXRsZSwgbGVhdmluZ0xhcmdlVGl0bGVUZXh0Qm94KTtcbiAgfSBlbHNlIGlmIChzaG91bGRBbmltYXRpb25CYWNrd2FyZCkge1xuICAgIGNvbnN0IGVudGVyaW5nTGFyZ2VUaXRsZUJveCA9IGVudGVyaW5nTGFyZ2VUaXRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBsZWF2aW5nQmFja0J1dHRvbkJveCA9IGxlYXZpbmdCYWNrQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsID0gc2hhZG93KGxlYXZpbmdCYWNrQnV0dG9uKS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRleHQnKTtcbiAgICAvLyBUZXh0IGVsZW1lbnQgbm90IHJlbmRlcmVkIGlmIGRldmVsb3BlcnMgcGFzcyB0ZXh0PVwiXCIgdG8gdGhlIGJhY2sgYnV0dG9uXG4gICAgY29uc3QgbGVhdmluZ0JhY2tCdXR0b25UZXh0Qm94ID0gbGVhdmluZ0JhY2tCdXR0b25UZXh0RWwgPT09IG51bGwgfHwgbGVhdmluZ0JhY2tCdXR0b25UZXh0RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVudGVyaW5nTGFyZ2VUaXRsZVRleHRFbCA9IHNoYWRvdyhlbnRlcmluZ0xhcmdlVGl0bGUpLnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLXRpdGxlJyk7XG4gICAgY29uc3QgZW50ZXJpbmdMYXJnZVRpdGxlVGV4dEJveCA9IGVudGVyaW5nTGFyZ2VUaXRsZVRleHRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBhbmltYXRlTGFyZ2VUaXRsZShyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nTGFyZ2VUaXRsZSwgZW50ZXJpbmdMYXJnZVRpdGxlQm94LCBlbnRlcmluZ0xhcmdlVGl0bGVUZXh0Qm94LCBsZWF2aW5nQmFja0J1dHRvbkJveCwgbGVhdmluZ0JhY2tCdXR0b25UZXh0RWwsIGxlYXZpbmdCYWNrQnV0dG9uVGV4dEJveCk7XG4gICAgYW5pbWF0ZUJhY2tCdXR0b24ocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsZWF2aW5nQmFja0J1dHRvbiwgbGVhdmluZ0JhY2tCdXR0b25Cb3gsIGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsLCBsZWF2aW5nQmFja0J1dHRvblRleHRCb3gsIGVudGVyaW5nTGFyZ2VUaXRsZSwgZW50ZXJpbmdMYXJnZVRpdGxlVGV4dEJveCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmb3J3YXJkOiBzaG91bGRBbmltYXRpb25Gb3J3YXJkLFxuICAgIGJhY2t3YXJkOiBzaG91bGRBbmltYXRpb25CYWNrd2FyZFxuICB9O1xufTtcbmNvbnN0IGFuaW1hdGVCYWNrQnV0dG9uID0gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgYmFja0J1dHRvbkVsLCBiYWNrQnV0dG9uQm94LCBiYWNrQnV0dG9uVGV4dEVsLCBiYWNrQnV0dG9uVGV4dEJveCwgbGFyZ2VUaXRsZUVsLCBsYXJnZVRpdGxlVGV4dEJveCkgPT4ge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCBCQUNLX0JVVFRPTl9TVEFSVF9PRkZTRVQgPSBydGwgPyBgY2FsYygxMDAlIC0gJHtiYWNrQnV0dG9uQm94LnJpZ2h0ICsgNH1weClgIDogYCR7YmFja0J1dHRvbkJveC5sZWZ0IC0gNH1weGA7XG4gIGNvbnN0IFRFWFRfT1JJR0lOX1ggPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICBjb25zdCBJQ09OX09SSUdJTl9YID0gcnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgY29uc3QgQ09OVEFJTkVSX09SSUdJTl9YID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgbGV0IFdJRFRIX1NDQUxFID0gMTtcbiAgbGV0IEhFSUdIVF9TQ0FMRSA9IDE7XG4gIGxldCBURVhUX1NUQVJUX1NDQUxFID0gYHNjYWxlKCR7SEVJR0hUX1NDQUxFfSlgO1xuICBjb25zdCBURVhUX0VORF9TQ0FMRSA9ICdzY2FsZSgxKSc7XG4gIGlmIChiYWNrQnV0dG9uVGV4dEVsICYmIGJhY2tCdXR0b25UZXh0Qm94KSB7XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdGl0bGUgYW5kIGJhY2sgYnV0dG9uIHRleHRzIG1hdGNoIHRoZW4gdGhleSBzaG91bGQgb3ZlcmxhcCBkdXJpbmcgdGhlXG4gICAgICogcGFnZSB0cmFuc2l0aW9uLiBJZiB0aGUgdGV4dHMgZG8gbm90IG1hdGNoIHVwIHRoZW4gdGhlIGJhY2sgYnV0dG9uIHRleHQgc2NhbGVcbiAgICAgKiBhZGp1c3RzIHRvIG5vdCBwZXJmZWN0bHkgbWF0Y2ggdGhlIGxhcmdlIHRpdGxlIHRleHQgb3RoZXJ3aXNlIHRoZSBwcm9wb3J0aW9uc1xuICAgICAqIHdpbGwgYmUgaW5jb3JyZWN0LiBXaGVuIHRoZSB0ZXh0cyBtYXRjaCB3ZSBzY2FsZSBib3RoIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHRvXG4gICAgICogYWNjb3VudCBmb3IgZm9udCB3ZWlnaHQgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdGl0bGUgYW5kIGJhY2sgYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbnN0IGRvVGl0bGVBbmRCdXR0b25UZXh0c01hdGNoID0gKChfYSA9IGJhY2tCdXR0b25UZXh0RWwudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpID09PSAoKF9iID0gbGFyZ2VUaXRsZUVsLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKTtcbiAgICBXSURUSF9TQ0FMRSA9IGxhcmdlVGl0bGVUZXh0Qm94LndpZHRoIC8gYmFja0J1dHRvblRleHRCb3gud2lkdGg7XG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgYW4gb2Zmc2V0IHRvIGFjY291bnQgZm9yIHNsaWdodCBzaXppbmcvcGFkZGluZyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZVxuICAgICAqIHRpdGxlIGFuZCB0aGUgYmFjayBidXR0b24uXG4gICAgICovXG4gICAgSEVJR0hUX1NDQUxFID0gKGxhcmdlVGl0bGVUZXh0Qm94LmhlaWdodCAtIExBUkdFX1RJVExFX1NJWkVfT0ZGU0VUKSAvIGJhY2tCdXR0b25UZXh0Qm94LmhlaWdodDtcbiAgICAvKipcbiAgICAgKiBFdmVuIHRob3VnaCB3ZSBzZXQgVEVYVF9TVEFSVF9TQ0FMRSB0byBIRUlHSFRfU0NBTEUgYWJvdmUsIHdlIHBvdGVudGlhbGx5IG5lZWRcbiAgICAgKiB0byByZS1jb21wdXRlIHRoaXMgaGVyZSBzaW5jZSB0aGUgSEVJR0hUX1NDQUxFIG1heSBoYXZlIGNoYW5nZWQuXG4gICAgICovXG4gICAgVEVYVF9TVEFSVF9TQ0FMRSA9IGRvVGl0bGVBbmRCdXR0b25UZXh0c01hdGNoID8gYHNjYWxlKCR7V0lEVEhfU0NBTEV9LCAke0hFSUdIVF9TQ0FMRX0pYCA6IGBzY2FsZSgke0hFSUdIVF9TQ0FMRX0pYDtcbiAgfVxuICBjb25zdCBiYWNrQnV0dG9uSWNvbkVsID0gc2hhZG93KGJhY2tCdXR0b25FbCkucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgY29uc3QgYmFja0J1dHRvbkljb25Cb3ggPSBiYWNrQnV0dG9uSWNvbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAvKipcbiAgICogV2UgbmVlZCB0byBvZmZzZXQgdGhlIGNvbnRhaW5lciBieSB0aGUgaWNvbiBkaW1lbnNpb25zXG4gICAqIHNvIHRoYXQgdGhlIGJhY2sgYnV0dG9uIHRleHQgYWxpZ25zIHdpdGggdGhlIGxhcmdlIHRpdGxlXG4gICAqIHRleHQuIE90aGVyd2lzZSwgdGhlIGJhY2sgYnV0dG9uIGljb24gd2lsbCBhbGlnbiB3aXRoIHRoZVxuICAgKiBsYXJnZSB0aXRsZSB0ZXh0IGJ1dCB0aGUgYmFjayBidXR0b24gdGV4dCB3aWxsIG5vdC5cbiAgICovXG4gIGNvbnN0IENPTlRBSU5FUl9TVEFSVF9UUkFOU0xBVEVfWCA9IHJ0bCA/IGAke2JhY2tCdXR0b25JY29uQm94LndpZHRoIC8gMiAtIChiYWNrQnV0dG9uSWNvbkJveC5yaWdodCAtIGJhY2tCdXR0b25Cb3gucmlnaHQpfXB4YCA6IGAke2JhY2tCdXR0b25Cb3gubGVmdCAtIGJhY2tCdXR0b25JY29uQm94LndpZHRoIC8gMn1weGA7XG4gIGNvbnN0IENPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1ggPSBydGwgPyBgLSR7d2luZG93LmlubmVyV2lkdGggLSBiYWNrQnV0dG9uQm94LnJpZ2h0fXB4YCA6IGAke2JhY2tCdXR0b25Cb3gubGVmdH1weGA7XG4gIC8qKlxuICAgKiBCYWNrIGJ1dHRvbiBjb250YWluZXIgc2hvdWxkIGJlXG4gICAqIGFsaWduZWQgdG8gdGhlIHRvcCBvZiB0aGUgdGl0bGUgY29udGFpbmVyXG4gICAqIHNvIHRoZSB0ZXh0cyBvdmVybGFwIGFzIHRoZSBiYWNrIGJ1dHRvblxuICAgKiB0ZXh0IGJlZ2lucyB0byBmYWRlIGluLlxuICAgKi9cbiAgY29uc3QgQ09OVEFJTkVSX1NUQVJUX1RSQU5TTEFURV9ZID0gYCR7bGFyZ2VUaXRsZVRleHRCb3gudG9wfXB4YDtcbiAgLyoqXG4gICAqIFRoZSBjbG9uZWQgYmFjayBidXR0b24gc2hvdWxkIGFsaWduIGV4YWN0bHkgd2l0aCB0aGVcbiAgICogcmVhbCBiYWNrIGJ1dHRvbiBvbiB0aGUgZW50ZXJpbmcgcGFnZSBvdGhlcndpc2UgdGhlcmUgd2lsbFxuICAgKiBiZSBhIGxheW91dCBzaGlmdC5cbiAgICovXG4gIGNvbnN0IENPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1kgPSBgJHtiYWNrQnV0dG9uQm94LnRvcH1weGA7XG4gIC8qKlxuICAgKiBJbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24sIHRoZSBjbG9uZWQgYmFjayBidXR0b25cbiAgICogY29udGFpbmVyIHNob3VsZCB0cmFuc2xhdGUgZnJvbSBvdmVyIHRoZSBsYXJnZSB0aXRsZVxuICAgKiB0byBvdmVyIHRoZSBiYWNrIGJ1dHRvbi4gSW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbixcbiAgICogaXQgc2hvdWxkIHRyYW5zbGF0ZSBmcm9tIG92ZXIgdGhlIGJhY2sgYnV0dG9uIHRvIG92ZXJcbiAgICogdGhlIGxhcmdlIHRpdGxlLlxuICAgKi9cbiAgY29uc3QgRk9SV0FSRF9DT05UQUlORVJfS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtDT05UQUlORVJfU1RBUlRfVFJBTlNMQVRFX1h9LCAke0NPTlRBSU5FUl9TVEFSVF9UUkFOU0xBVEVfWX0sIDApYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Q09OVEFJTkVSX0VORF9UUkFOU0xBVEVfWH0sICR7Q09OVEFJTkVSX0VORF9UUkFOU0xBVEVfWX0sIDApYFxuICB9XTtcbiAgY29uc3QgQkFDS1dBUkRfQ09OVEFJTkVSX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Q09OVEFJTkVSX0VORF9UUkFOU0xBVEVfWH0sICR7Q09OVEFJTkVSX0VORF9UUkFOU0xBVEVfWX0sIDApYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Q09OVEFJTkVSX1NUQVJUX1RSQU5TTEFURV9YfSwgJHtDT05UQUlORVJfU1RBUlRfVFJBTlNMQVRFX1l9LCAwKWBcbiAgfV07XG4gIGNvbnN0IENPTlRBSU5FUl9LRVlGUkFNRVMgPSBiYWNrRGlyZWN0aW9uID8gQkFDS1dBUkRfQ09OVEFJTkVSX0tFWUZSQU1FUyA6IEZPUldBUkRfQ09OVEFJTkVSX0tFWUZSQU1FUztcbiAgLyoqXG4gICAqIEluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiwgdGhlIHRleHQgaW4gdGhlIGNsb25lZCBiYWNrIGJ1dHRvblxuICAgKiBzaG91bGQgc3RhcnQgdG8gYmUgKHJvdWdobHkpIHRoZSBzaXplIG9mIHRoZSBsYXJnZSB0aXRsZVxuICAgKiBhbmQgdGhlbiBzY2FsZSBkb3duIHRvIGJlIHRoZSBzaXplIG9mIHRoZSBhY3R1YWwgYmFjayBidXR0b24uXG4gICAqIFRoZSB0ZXh0IHNob3VsZCBhbHNvIHRyYW5zbGF0ZSwgYnV0IHRoYXQgdHJhbnNsYXRlIGlzIGhhbmRsZWRcbiAgICogYnkgdGhlIGNvbnRhaW5lciBrZXlmcmFtZXMuXG4gICAqL1xuICBjb25zdCBGT1JXQVJEX1RFWFRfS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06IFRFWFRfU1RBUlRfU0NBTEVcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogVEVYVF9FTkRfU0NBTEVcbiAgfV07XG4gIGNvbnN0IEJBQ0tXQVJEX1RFWFRfS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06IFRFWFRfRU5EX1NDQUxFXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06IFRFWFRfU1RBUlRfU0NBTEVcbiAgfV07XG4gIGNvbnN0IFRFWFRfS0VZRlJBTUVTID0gYmFja0RpcmVjdGlvbiA/IEJBQ0tXQVJEX1RFWFRfS0VZRlJBTUVTIDogRk9SV0FSRF9URVhUX0tFWUZSQU1FUztcbiAgLyoqXG4gICAqIFRoZSBpY29uIHNob3VsZCBzY2FsZSBpbi9vdXQgaW4gdGhlIHNlY29uZFxuICAgKiBoYWxmIG9mIHRoZSBhbmltYXRpb24uIFRoZSBpY29uIHNob3VsZCBhbHNvXG4gICAqIHRyYW5zbGF0ZSwgYnV0IHRoYXQgdHJhbnNsYXRlIGlzIGhhbmRsZWQgYnkgdGhlXG4gICAqIGNvbnRhaW5lciBrZXlmcmFtZXMuXG4gICAqL1xuICBjb25zdCBGT1JXQVJEX0lDT05fS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjYpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjYsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjYpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1dO1xuICBjb25zdCBCQUNLV0FSRF9JQ09OX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuMixcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNiknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjYpJ1xuICB9XTtcbiAgY29uc3QgSUNPTl9LRVlGUkFNRVMgPSBiYWNrRGlyZWN0aW9uID8gQkFDS1dBUkRfSUNPTl9LRVlGUkFNRVMgOiBGT1JXQVJEX0lDT05fS0VZRlJBTUVTO1xuICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGNsb25lZEJhY2tCdXR0b25FbCA9IGdldENsb25lZEVsZW1lbnQoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICBjb25zdCBjbG9uZWRCYWNrQnV0dG9uVGV4dEVsID0gc2hhZG93KGNsb25lZEJhY2tCdXR0b25FbCkucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10ZXh0Jyk7XG4gIGNvbnN0IGNsb25lZEJhY2tCdXR0b25JY29uRWwgPSBzaGFkb3coY2xvbmVkQmFja0J1dHRvbkVsKS5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpO1xuICBjbG9uZWRCYWNrQnV0dG9uRWwudGV4dCA9IGJhY2tCdXR0b25FbC50ZXh0O1xuICBjbG9uZWRCYWNrQnV0dG9uRWwubW9kZSA9IGJhY2tCdXR0b25FbC5tb2RlO1xuICBjbG9uZWRCYWNrQnV0dG9uRWwuaWNvbiA9IGJhY2tCdXR0b25FbC5pY29uO1xuICBjbG9uZWRCYWNrQnV0dG9uRWwuY29sb3IgPSBiYWNrQnV0dG9uRWwuY29sb3I7XG4gIGNsb25lZEJhY2tCdXR0b25FbC5kaXNhYmxlZCA9IGJhY2tCdXR0b25FbC5kaXNhYmxlZDtcbiAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIGNsb25lZEJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgZW50ZXJpbmdCYWNrQnV0dG9uSWNvbkFuaW1hdGlvbi5hZGRFbGVtZW50KGNsb25lZEJhY2tCdXR0b25JY29uRWwpO1xuICBlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uLmFkZEVsZW1lbnQoY2xvbmVkQmFja0J1dHRvblRleHRFbCk7XG4gIGVudGVyaW5nQmFja0J1dHRvbkFuaW1hdGlvbi5hZGRFbGVtZW50KGNsb25lZEJhY2tCdXR0b25FbCk7XG4gIGVudGVyaW5nQmFja0J1dHRvbkFuaW1hdGlvbi5iZWZvcmVTdHlsZXMoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgW0NPTlRBSU5FUl9PUklHSU5fWF06ICcwcHgnXG4gIH0pXG4gIC8qKlxuICAgKiBUaGUgd3JpdGUgaG9va3MgbXVzdCBiZSBzZXQgb24gdGhpcyBhbmltYXRpb24gYXMgaXQgaXMgZ3VhcmFudGVlZCB0byBydW4uIE90aGVyXG4gICAqIGFuaW1hdGlvbnMgc3VjaCBhcyB0aGUgYmFjayBidXR0b24gdGV4dCBhbmltYXRpb24gd2lsbCBub3QgcnVuIGlmIHRoZSBiYWNrIGJ1dHRvblxuICAgKiBoYXMgbm8gdmlzaWJsZSB0ZXh0LlxuICAgKi8uYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xuICAgIGJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KFRFWFRfT1JJR0lOX1gsIEJBQ0tfQlVUVE9OX1NUQVJUX09GRlNFVCk7XG4gIH0pLmFmdGVyQWRkV3JpdGUoKCkgPT4ge1xuICAgIGJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICcnKTtcbiAgICBjbG9uZWRCYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIGNsb25lZEJhY2tCdXR0b25FbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShURVhUX09SSUdJTl9YKTtcbiAgfSkua2V5ZnJhbWVzKENPTlRBSU5FUl9LRVlGUkFNRVMpO1xuICBlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uLmJlZm9yZVN0eWxlcyh7XG4gICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgJHtURVhUX09SSUdJTl9YfSB0b3BgXG4gIH0pLmtleWZyYW1lcyhURVhUX0tFWUZSQU1FUyk7XG4gIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24uYmVmb3JlU3R5bGVzKHtcbiAgICAndHJhbnNmb3JtLW9yaWdpbic6IGAke0lDT05fT1JJR0lOX1h9IGNlbnRlcmBcbiAgfSkua2V5ZnJhbWVzKElDT05fS0VZRlJBTUVTKTtcbiAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24oW2VudGVyaW5nQmFja0J1dHRvblRleHRBbmltYXRpb24sIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24sIGVudGVyaW5nQmFja0J1dHRvbkFuaW1hdGlvbl0pO1xufTtcbmNvbnN0IGFuaW1hdGVMYXJnZVRpdGxlID0gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgbGFyZ2VUaXRsZUVsLCBsYXJnZVRpdGxlQm94LCBsYXJnZVRpdGxlVGV4dEJveCwgYmFja0J1dHRvbkJveCwgYmFja0J1dHRvblRleHRFbCwgYmFja0J1dHRvblRleHRCb3gpID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgLyoqXG4gICAqIFRoZSBob3Jpem9udGFsIHRyYW5zZm9ybSBvcmlnaW4gZm9yIHRoZSBsYXJnZSB0aXRsZVxuICAgKi9cbiAgY29uc3QgT1JJR0lOX1ggPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICBjb25zdCBUSVRMRV9TVEFSVF9PRkZTRVQgPSBydGwgPyBgY2FsYygxMDAlIC0gJHtsYXJnZVRpdGxlQm94LnJpZ2h0fXB4KWAgOiBgJHtsYXJnZVRpdGxlQm94LmxlZnR9cHhgO1xuICAvKipcbiAgICogVGhlIGNsb25lZCBsYXJnZSBzaG91bGQgYWxpZ24gZXhhY3RseSB3aXRoIHRoZVxuICAgKiByZWFsIGxhcmdlIHRpdGxlIG9uIHRoZSBsZWF2aW5nIHBhZ2Ugb3RoZXJ3aXNlIHRoZXJlIHdpbGxcbiAgICogYmUgYSBsYXlvdXQgc2hpZnQuXG4gICAqL1xuICBjb25zdCBTVEFSVF9UUkFOU0xBVEVfWCA9ICcwcHgnO1xuICBjb25zdCBTVEFSVF9UUkFOU0xBVEVfWSA9IGAke2xhcmdlVGl0bGVCb3gudG9wfXB4YDtcbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRvIG9mZnNldCB0aGUgbGFyZ2UgdGl0bGUgdHJhbnNsYXRpb24gYnkuXG4gICAqIFRoaXMgYWNjb3VudHMgZm9yIGRpZmZlcmVuY2VzIGluIHNpemluZyBiZXR3ZWVuIHRoZSBsYXJnZVxuICAgKiB0aXRsZSBhbmQgdGhlIGJhY2sgYnV0dG9uIGR1ZSB0byBwYWRkaW5nIGFuZCBmb250IHdlaWdodC5cbiAgICovXG4gIGNvbnN0IExBUkdFX1RJVExFX1RSQU5TTEFUSU9OX09GRlNFVCA9IDg7XG4gIGxldCBFTkRfVFJBTlNMQVRFX1ggPSBydGwgPyBgLSR7d2luZG93LmlubmVyV2lkdGggLSBiYWNrQnV0dG9uQm94LnJpZ2h0IC0gTEFSR0VfVElUTEVfVFJBTlNMQVRJT05fT0ZGU0VUfXB4YCA6IGAke2JhY2tCdXR0b25Cb3gueCArIExBUkdFX1RJVExFX1RSQU5TTEFUSU9OX09GRlNFVH1weGA7XG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0byBzY2FsZSB0aGUgbGFyZ2UgdGl0bGUgdXAvZG93biBieS5cbiAgICovXG4gIGxldCBIRUlHSFRfU0NBTEUgPSAwLjU7XG4gIC8qKlxuICAgKiBUaGUgbGFyZ2UgdGl0bGUgYWx3YXlzIHN0YXJ0cyBmdWxsIHNpemUuXG4gICAqL1xuICBjb25zdCBTVEFSVF9TQ0FMRSA9ICdzY2FsZSgxKSc7XG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCB3ZSBkb24ndCB3b3JyeSBhYm91dCBoYXZpbmcgdGhlIGxhcmdlIHRpdGxlIHNjYWxlZCB0byBwZXJmZWN0bHlcbiAgICogbWF0Y2ggdGhlIGJhY2sgYnV0dG9uIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyBpZiB0aGUgYmFjayBidXR0b24ncyB0ZXh0IG1hdGNoZXNcbiAgICogdGhlIGxhcmdlIHRpdGxlJ3MgdGV4dC5cbiAgICovXG4gIGxldCBFTkRfU0NBTEUgPSBgc2NhbGUoJHtIRUlHSFRfU0NBTEV9KWA7XG4gIC8vIFRleHQgZWxlbWVudCBub3QgcmVuZGVyZWQgaWYgZGV2ZWxvcGVycyBwYXNzIHRleHQ9XCJcIiB0byB0aGUgYmFjayBidXR0b25cbiAgaWYgKGJhY2tCdXR0b25UZXh0RWwgJiYgYmFja0J1dHRvblRleHRCb3gpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbGVkIHRpdGxlIHNob3VsZCAocm91Z2hseSkgb3ZlcmxhcCB0aGUgYmFjayBidXR0b24uIFRoaXMgZW5zdXJlcyB0aGF0XG4gICAgICogdGhlIGJhY2sgYnV0dG9uIGFuZCB0aXRsZSBvdmVybGFwIGR1cmluZyB0aGUgYW5pbWF0aW9uLiBOb3RlIHRoYXQgc2luY2UgYm90aFxuICAgICAqIGVsZW1lbnRzIGVpdGhlciBmYWRlIGluIG9yIGZhZGUgb3V0IG92ZXIgdGhlIGNvdXJzZSBvZiB0aGUgYW5pbWF0aW9uLCBuZWl0aGVyXG4gICAgICogZWxlbWVudCB3aWxsIGJlIGZ1bGx5IHZpc2libGUgb24gdG9wIG9mIHRoZSBvdGhlci4gQXMgYSByZXN1bHQsIHRoZSBvdmVybGFwXG4gICAgICogZG9lcyBub3QgbmVlZCB0byBiZSBwZXJmZWN0LCBzbyBhcHByb3hpbWF0ZSB2YWx1ZXMgYXJlIGFjY2VwdGFibGUgaGVyZS5cbiAgICAgKi9cbiAgICBFTkRfVFJBTlNMQVRFX1ggPSBydGwgPyBgLSR7d2luZG93LmlubmVyV2lkdGggLSBiYWNrQnV0dG9uVGV4dEJveC5yaWdodCAtIExBUkdFX1RJVExFX1RSQU5TTEFUSU9OX09GRlNFVH1weGAgOiBgJHtiYWNrQnV0dG9uVGV4dEJveC54IC0gTEFSR0VfVElUTEVfVFJBTlNMQVRJT05fT0ZGU0VUfXB4YDtcbiAgICAvKipcbiAgICAgKiBJbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24sIHRoZSBsYXJnZSB0aXRsZSBzaG91bGQgc3RhcnQgYXQgaXRzIG5vcm1hbCBzaXplIGFuZFxuICAgICAqIHRoZW4gc2NhbGUgZG93biB0byBiZSAocm91Z2hseSkgdGhlIHNpemUgb2YgdGhlIGJhY2sgYnV0dG9uIG9uIHRoZSBvdGhlciB2aWV3LlxuICAgICAqIEluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24sIHRoZSBsYXJnZSB0aXRsZSBzaG91bGQgc3RhcnQgYXQgKHJvdWdobHkpIHRoZSBzaXplXG4gICAgICogb2YgdGhlIGJhY2sgYnV0dG9uIGFuZCB0aGVuIHNjYWxlIHVwIHRvIGl0cyBvcmlnaW5hbCBzaXplLlxuICAgICAqIE5vdGUgdGhhdCBzaW5jZSBib3RoIGVsZW1lbnRzIGVpdGhlciBmYWRlIGluIG9yIGZhZGUgb3V0IG92ZXIgdGhlIGNvdXJzZSBvZiB0aGVcbiAgICAgKiBhbmltYXRpb24sIG5laXRoZXIgZWxlbWVudCB3aWxsIGJlIGZ1bGx5IHZpc2libGUgb24gdG9wIG9mIHRoZSBvdGhlci4gQXMgYSByZXN1bHQsXG4gICAgICogdGhlIG92ZXJsYXAgIGRvZXMgbm90IG5lZWQgdG8gYmUgcGVyZmVjdCwgc28gYXBwcm94aW1hdGUgdmFsdWVzIGFyZSBhY2NlcHRhYmxlIGhlcmUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdGl0bGUgYW5kIGJhY2sgYnV0dG9uIHRleHRzIG1hdGNoIHRoZW4gdGhleSBzaG91bGQgb3ZlcmxhcCBkdXJpbmcgdGhlXG4gICAgICogcGFnZSB0cmFuc2l0aW9uLiBJZiB0aGUgdGV4dHMgZG8gbm90IG1hdGNoIHVwIHRoZW4gdGhlIGxhcmdlIHRpdGxlIHRleHQgc2NhbGVcbiAgICAgKiBhZGp1c3RzIHRvIG5vdCBwZXJmZWN0bHkgbWF0Y2ggdGhlIGJhY2sgYnV0dG9uIHRleHQgb3RoZXJ3aXNlIHRoZSBwcm9wb3J0aW9uc1xuICAgICAqIHdpbGwgYmUgaW5jb3JyZWN0LiBXaGVuIHRoZSB0ZXh0cyBtYXRjaCB3ZSBzY2FsZSBib3RoIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHRvXG4gICAgICogYWNjb3VudCBmb3IgZm9udCB3ZWlnaHQgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdGl0bGUgYW5kIGJhY2sgYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbnN0IGRvVGl0bGVBbmRCdXR0b25UZXh0c01hdGNoID0gKChfYSA9IGJhY2tCdXR0b25UZXh0RWwudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpID09PSAoKF9iID0gbGFyZ2VUaXRsZUVsLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKTtcbiAgICBjb25zdCBXSURUSF9TQ0FMRSA9IGJhY2tCdXR0b25UZXh0Qm94LndpZHRoIC8gbGFyZ2VUaXRsZVRleHRCb3gud2lkdGg7XG4gICAgSEVJR0hUX1NDQUxFID0gYmFja0J1dHRvblRleHRCb3guaGVpZ2h0IC8gKGxhcmdlVGl0bGVUZXh0Qm94LmhlaWdodCAtIExBUkdFX1RJVExFX1NJWkVfT0ZGU0VUKTtcbiAgICAvKipcbiAgICAgKiBFdmVuIHRob3VnaCB3ZSBzZXQgVEVYVF9TVEFSVF9TQ0FMRSB0byBIRUlHSFRfU0NBTEUgYWJvdmUsIHdlIHBvdGVudGlhbGx5IG5lZWRcbiAgICAgKiB0byByZS1jb21wdXRlIHRoaXMgaGVyZSBzaW5jZSB0aGUgSEVJR0hUX1NDQUxFIG1heSBoYXZlIGNoYW5nZWQuXG4gICAgICovXG4gICAgRU5EX1NDQUxFID0gZG9UaXRsZUFuZEJ1dHRvblRleHRzTWF0Y2ggPyBgc2NhbGUoJHtXSURUSF9TQ0FMRX0sICR7SEVJR0hUX1NDQUxFfSlgIDogYHNjYWxlKCR7SEVJR0hUX1NDQUxFfSlgO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgbWlkcG9pbnRzIG9mIHRoZSBiYWNrIGJ1dHRvbiBhbmQgdGhlIHRpdGxlIHNob3VsZCBhbGlnbiBzdWNoIHRoYXQgdGhlIGJhY2tcbiAgICogYnV0dG9uIGFuZCB0aXRsZSBhcHBlYXIgdG8gYmUgY2VudGVyZWQgd2l0aCBlYWNoIG90aGVyLlxuICAgKi9cbiAgY29uc3QgYmFja0J1dHRvbk1pZFBvaW50ID0gYmFja0J1dHRvbkJveC50b3AgKyBiYWNrQnV0dG9uQm94LmhlaWdodCAvIDI7XG4gIGNvbnN0IHRpdGxlTWlkUG9pbnQgPSBsYXJnZVRpdGxlQm94LmhlaWdodCAqIEhFSUdIVF9TQ0FMRSAvIDI7XG4gIGNvbnN0IEVORF9UUkFOU0xBVEVfWSA9IGAke2JhY2tCdXR0b25NaWRQb2ludCAtIHRpdGxlTWlkUG9pbnR9cHhgO1xuICBjb25zdCBCQUNLV0FSRFNfS0VZRlJBTUVTID0gW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0VORF9UUkFOU0xBVEVfWH0sICR7RU5EX1RSQU5TTEFURV9ZfSwgMCkgJHtFTkRfU0NBTEV9YFxuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjEsXG4gICAgb3BhY2l0eTogMFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtTVEFSVF9UUkFOU0xBVEVfWH0sICR7U1RBUlRfVFJBTlNMQVRFX1l9LCAwKSAke1NUQVJUX1NDQUxFfWBcbiAgfV07XG4gIGNvbnN0IEZPUldBUkRTX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtTVEFSVF9UUkFOU0xBVEVfWH0sICR7U1RBUlRfVFJBTlNMQVRFX1l9LCAwKSAke1NUQVJUX1NDQUxFfWBcbiAgfSwge1xuICAgIG9mZnNldDogMC42LFxuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7RU5EX1RSQU5TTEFURV9YfSwgJHtFTkRfVFJBTlNMQVRFX1l9LCAwKSAke0VORF9TQ0FMRX1gXG4gIH1dO1xuICBjb25zdCBLRVlGUkFNRVMgPSBiYWNrRGlyZWN0aW9uID8gQkFDS1dBUkRTX0tFWUZSQU1FUyA6IEZPUldBUkRTX0tFWUZSQU1FUztcbiAgY29uc3QgY2xvbmVkVGl0bGVFbCA9IGdldENsb25lZEVsZW1lbnQoJ2lvbi10aXRsZScpO1xuICBjb25zdCBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNsb25lZFRpdGxlRWwuaW5uZXJUZXh0ID0gbGFyZ2VUaXRsZUVsLmlubmVyVGV4dDtcbiAgY2xvbmVkVGl0bGVFbC5zaXplID0gbGFyZ2VUaXRsZUVsLnNpemU7XG4gIGNsb25lZFRpdGxlRWwuY29sb3IgPSBsYXJnZVRpdGxlRWwuY29sb3I7XG4gIGNsb25lZExhcmdlVGl0bGVBbmltYXRpb24uYWRkRWxlbWVudChjbG9uZWRUaXRsZUVsKTtcbiAgY2xvbmVkTGFyZ2VUaXRsZUFuaW1hdGlvbi5iZWZvcmVTdHlsZXMoe1xuICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogYCR7T1JJR0lOX1h9IHRvcGAsXG4gICAgLyoqXG4gICAgICogU2luY2UgZm9udCBzaXplIGNoYW5nZXMgd2lsbCBjYXVzZVxuICAgICAqIHRoZSBkaW1lbnNpb24gb2YgdGhlIGxhcmdlIHRpdGxlIHRvIGNoYW5nZVxuICAgICAqIHdlIG5lZWQgdG8gc2V0IHRoZSBjbG9uZWQgdGl0bGUgaGVpZ2h0XG4gICAgICogZXF1YWwgdG8gdGhhdCBvZiB0aGUgb3JpZ2luYWwgbGFyZ2UgdGl0bGUgaGVpZ2h0LlxuICAgICAqL1xuICAgIGhlaWdodDogYCR7bGFyZ2VUaXRsZUJveC5oZWlnaHR9cHhgLFxuICAgIGRpc3BsYXk6ICcnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIFtPUklHSU5fWF06IFRJVExFX1NUQVJUX09GRlNFVFxuICB9KS5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XG4gICAgbGFyZ2VUaXRsZUVsLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5JywgJzAnKTtcbiAgfSkuYWZ0ZXJBZGRXcml0ZSgoKSA9PiB7XG4gICAgbGFyZ2VUaXRsZUVsLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5JywgJycpO1xuICAgIGNsb25lZFRpdGxlRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9KS5rZXlmcmFtZXMoS0VZRlJBTUVTKTtcbiAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24oY2xvbmVkTGFyZ2VUaXRsZUFuaW1hdGlvbik7XG59O1xuY29uc3QgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiA9IChuYXZFbCwgb3B0cykgPT4ge1xuICB2YXIgX2E7XG4gIHRyeSB7XG4gICAgY29uc3QgRUFTSU5HID0gJ2N1YmljLWJlemllcigwLjMyLDAuNzIsMCwxKSc7XG4gICAgY29uc3QgT1BBQ0lUWSA9ICdvcGFjaXR5JztcbiAgICBjb25zdCBUUkFOU0ZPUk0gPSAndHJhbnNmb3JtJztcbiAgICBjb25zdCBDRU5URVIgPSAnMCUnO1xuICAgIGNvbnN0IE9GRl9PUEFDSVRZID0gMC44O1xuICAgIGNvbnN0IGlzUlRMID0gbmF2RWwub3duZXJEb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgIGNvbnN0IE9GRl9SSUdIVCA9IGlzUlRMID8gJy05OS41JScgOiAnOTkuNSUnO1xuICAgIGNvbnN0IE9GRl9MRUZUID0gaXNSVEwgPyAnMzMlJyA6ICctMzMlJztcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICAgIGNvbnN0IGJhY2tEaXJlY3Rpb24gPSBvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGVudGVyaW5nRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gaW9uLWNvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXJFbHMgPSBlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGlvbi1oZWFkZXIgPiAqOm5vdChpb24tdG9vbGJhciksIDpzY29wZSA+IGlvbi1mb290ZXIgPiAqJyk7XG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyRWxzID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXInKTtcbiAgICBjb25zdCByb290QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgY29uc3QgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgcm9vdEFuaW1hdGlvbi5hZGRFbGVtZW50KGVudGVyaW5nRWwpLmR1cmF0aW9uKCgoX2EgPSBvcHRzLmR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwKSB8fCBEVVJBVElPTikuZWFzaW5nKG9wdHMuZWFzaW5nIHx8IEVBU0lORykuZmlsbCgnYm90aCcpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICAgIGlmIChsZWF2aW5nRWwgJiYgbmF2RWwgIT09IG51bGwgJiYgbmF2RWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbmF2RGVjb3JBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIG5hdkRlY29yQW5pbWF0aW9uLmFkZEVsZW1lbnQobmF2RWwpO1xuICAgICAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24obmF2RGVjb3JBbmltYXRpb24pO1xuICAgIH1cbiAgICBpZiAoIWNvbnRlbnRFbCAmJiBlbnRlcmluZ1Rvb2xCYXJFbHMubGVuZ3RoID09PSAwICYmIGhlYWRlckVscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KGVudGVyaW5nRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpKTsgLy8gUkVWSUVXXG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KGNvbnRlbnRFbCk7IC8vIFJFVklFV1xuICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoaGVhZGVyRWxzKTtcbiAgICB9XG4gICAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24oZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uKTtcbiAgICBpZiAoYmFja0RpcmVjdGlvbikge1xuICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCkuZnJvbVRvKE9QQUNJVFksIE9GRl9PUEFDSVRZLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW50ZXJpbmcgY29udGVudCwgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtPRkZfUklHSFR9KWAsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgKTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwgPSBzaGFkb3coY29udGVudEVsKS5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1lZmZlY3QnKTtcbiAgICAgIGlmIChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbCkge1xuICAgICAgICBjb25zdCBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlckVsID0gZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY292ZXInKTtcbiAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93RWwgPSBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1zaGFkb3cnKTtcbiAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvbkNvdmVyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvblNoYWRvdyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkRWxlbWVudChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbCkuYmVmb3JlU3R5bGVzKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KS5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgb3BhY2l0eTogJycsXG4gICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgfSk7XG4gICAgICAgIGVudGVyaW5nVHJhbnNpdGlvbkNvdmVyLmFkZEVsZW1lbnQoZW50ZXJpbmdUcmFuc2l0aW9uQ292ZXJFbCkgLy8gUkVWSUVXXG4gICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pLmZyb21UbyhPUEFDSVRZLCAwLCAwLjEpO1xuICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3cuYWRkRWxlbWVudChlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3dFbCkgLy8gUkVWSUVXXG4gICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pLmZyb21UbyhPUEFDSVRZLCAwLjAzLCAwLjcpO1xuICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkQW5pbWF0aW9uKFtlbnRlcmluZ1RyYW5zaXRpb25Db3ZlciwgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93XSk7XG4gICAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRBbmltYXRpb24oW2VudGVyaW5nVHJhbnNpdGlvbkVmZmVjdF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlbnRlcmluZ0NvbnRlbnRIYXNMYXJnZVRpdGxlID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yKCdpb24taGVhZGVyLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZScpO1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcndhcmQsXG4gICAgICBiYWNrd2FyZFxuICAgIH0gPSBjcmVhdGVMYXJnZVRpdGxlVHJhbnNpdGlvbihyb290QW5pbWF0aW9uLCBpc1JUTCwgYmFja0RpcmVjdGlvbiwgZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXJFbHMuZm9yRWFjaChlbnRlcmluZ1Rvb2xCYXJFbCA9PiB7XG4gICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXIgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRFbGVtZW50KGVudGVyaW5nVG9vbEJhckVsKTtcbiAgICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKGVudGVyaW5nVG9vbEJhcik7XG4gICAgICBjb25zdCBlbnRlcmluZ1RpdGxlID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBlbnRlcmluZ1RpdGxlLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvcignaW9uLXRpdGxlJykpOyAvLyBSRVZJRVdcbiAgICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhckJ1dHRvbnMgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zLFttZW51VG9nZ2xlXScpKTtcbiAgICAgIGNvbnN0IHBhcmVudEhlYWRlciA9IGVudGVyaW5nVG9vbEJhckVsLmNsb3Nlc3QoJ2lvbi1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGluYWN0aXZlSGVhZGVyID0gcGFyZW50SGVhZGVyID09PSBudWxsIHx8IHBhcmVudEhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICBsZXQgYnV0dG9uc1RvQW5pbWF0ZTtcbiAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgIGJ1dHRvbnNUb0FuaW1hdGUgPSBidXR0b25zLmZpbHRlcihidXR0b24gPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQ29sbGFwc2VCdXR0b24gPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJyk7XG4gICAgICAgICAgcmV0dXJuIGlzQ29sbGFwc2VCdXR0b24gJiYgIWluYWN0aXZlSGVhZGVyIHx8ICFpc0NvbGxhcHNlQnV0dG9uO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbnNUb0FuaW1hdGUgPSBidXR0b25zLmZpbHRlcihidXR0b24gPT4gIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKSk7XG4gICAgICB9XG4gICAgICBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zLmFkZEVsZW1lbnQoYnV0dG9uc1RvQW5pbWF0ZSk7XG4gICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXJJdGVtcyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqOm5vdChpb24tdGl0bGUpOm5vdChpb24tYnV0dG9ucyk6bm90KFttZW51VG9nZ2xlXSknKSk7XG4gICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXJCZyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgZW50ZXJpbmdUb29sQmFyQmcuYWRkRWxlbWVudChzaGFkb3coZW50ZXJpbmdUb29sQmFyRWwpLnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLWJhY2tncm91bmQnKSk7IC8vIFJFVklFV1xuICAgICAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBjb25zdCBiYWNrQnV0dG9uRWwgPSBlbnRlcmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFjay1idXR0b24nKTtcbiAgICAgIGlmIChiYWNrQnV0dG9uRWwpIHtcbiAgICAgICAgZW50ZXJpbmdCYWNrQnV0dG9uLmFkZEVsZW1lbnQoYmFja0J1dHRvbkVsKTtcbiAgICAgIH1cbiAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oW2VudGVyaW5nVGl0bGUsIGVudGVyaW5nVG9vbEJhckJ1dHRvbnMsIGVudGVyaW5nVG9vbEJhckl0ZW1zLCBlbnRlcmluZ1Rvb2xCYXJCZywgZW50ZXJpbmdCYWNrQnV0dG9uXSk7XG4gICAgICBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcbiAgICAgIGVudGVyaW5nVG9vbEJhckl0ZW1zLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcbiAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghaW5hY3RpdmVIZWFkZXIpIHtcbiAgICAgICAgICBlbnRlcmluZ1RpdGxlLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtPRkZfTEVGVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRlcmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWAsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgKTtcbiAgICAgICAgLy8gYmFjayBkaXJlY3Rpb24sIGVudGVyaW5nIHBhZ2UgaGFzIGEgYmFjayBidXR0b25cbiAgICAgICAgZW50ZXJpbmdCYWNrQnV0dG9uLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVudGVyaW5nIHRvb2xiYXIsIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgIGlmICghZW50ZXJpbmdDb250ZW50SGFzTGFyZ2VUaXRsZSkge1xuICAgICAgICAgIGVudGVyaW5nVGl0bGUuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9SSUdIVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRlcmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX1JJR0hUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCk7XG4gICAgICAgIGVudGVyaW5nVG9vbEJhckJnLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZLCAndHJhbnNmb3JtJ10pO1xuICAgICAgICBjb25zdCB0cmFuc2x1Y2VudEhlYWRlciA9IHBhcmVudEhlYWRlciA9PT0gbnVsbCB8fCBwYXJlbnRIZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEhlYWRlci50cmFuc2x1Y2VudDtcbiAgICAgICAgaWYgKCF0cmFuc2x1Y2VudEhlYWRlcikge1xuICAgICAgICAgIGVudGVyaW5nVG9vbEJhckJnLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAndmFyKC0tb3BhY2l0eSknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZy5mcm9tVG8oJ3RyYW5zZm9ybScsIGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDEwMCUpJywgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvcndhcmQgZGlyZWN0aW9uLCBlbnRlcmluZyBwYWdlIGhhcyBhIGJhY2sgYnV0dG9uXG4gICAgICAgIGlmICghZm9yd2FyZCkge1xuICAgICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tCdXR0b25FbCAmJiAhZm9yd2FyZCkge1xuICAgICAgICAgIGNvbnN0IGVudGVyaW5nQmFja0J0blRleHQgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICBlbnRlcmluZ0JhY2tCdG5UZXh0LmFkZEVsZW1lbnQoc2hhZG93KGJhY2tCdXR0b25FbCkucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10ZXh0JykpIC8vIFJFVklFV1xuICAgICAgICAgIC5mcm9tVG8oYHRyYW5zZm9ybWAsIGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMHB4KScgOiAndHJhbnNsYXRlWCgxMDBweCknLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgICAgICAgZW50ZXJpbmdUb29sQmFyLmFkZEFuaW1hdGlvbihlbnRlcmluZ0JhY2tCdG5UZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICAgIGlmIChsZWF2aW5nRWwpIHtcbiAgICAgIGNvbnN0IGxlYXZpbmdDb250ZW50ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBjb25zdCBsZWF2aW5nQ29udGVudEVsID0gbGVhdmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IGlvbi1jb250ZW50Jyk7XG4gICAgICBjb25zdCBsZWF2aW5nVG9vbEJhckVscyA9IGxlYXZpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXInKTtcbiAgICAgIGNvbnN0IGxlYXZpbmdIZWFkZXJFbHMgPSBsZWF2aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gaW9uLWhlYWRlciA+ICo6bm90KGlvbi10b29sYmFyKSwgOnNjb3BlID4gaW9uLWZvb3RlciA+IConKTtcbiAgICAgIGlmICghbGVhdmluZ0NvbnRlbnRFbCAmJiBsZWF2aW5nVG9vbEJhckVscy5sZW5ndGggPT09IDAgJiYgbGVhdmluZ0hlYWRlckVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkRWxlbWVudChsZWF2aW5nRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpKTsgLy8gUkVWSUVXXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWF2aW5nQ29udGVudC5hZGRFbGVtZW50KGxlYXZpbmdDb250ZW50RWwpOyAvLyBSRVZJRVdcbiAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkRWxlbWVudChsZWF2aW5nSGVhZGVyRWxzKTtcbiAgICAgIH1cbiAgICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKGxlYXZpbmdDb250ZW50KTtcbiAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGxlYXZpbmcgY29udGVudCwgYmFjayBkaXJlY3Rpb25cbiAgICAgICAgbGVhdmluZ0NvbnRlbnQuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICBjb25zdCBsZWF2aW5nUGFnZSA9IGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCk7XG4gICAgICAgIHJvb3RBbmltYXRpb24uYWZ0ZXJBZGRXcml0ZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHJvb3RBbmltYXRpb24uZ2V0RGlyZWN0aW9uKCkgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICBsZWF2aW5nUGFnZS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGxlYXZpbmcgY29udGVudCwgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgbGVhdmluZ0NvbnRlbnQuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCwgYHRyYW5zbGF0ZVgoJHtPRkZfTEVGVH0pYCkuZnJvbVRvKE9QQUNJVFksIDEsIE9GRl9PUEFDSVRZKTtcbiAgICAgIH1cbiAgICAgIGlmIChsZWF2aW5nQ29udGVudEVsKSB7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0RWwgPSBzaGFkb3cobGVhdmluZ0NvbnRlbnRFbCkucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tZWZmZWN0Jyk7XG4gICAgICAgIGlmIChsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsKSB7XG4gICAgICAgICAgY29uc3QgbGVhdmluZ1RyYW5zaXRpb25Db3ZlckVsID0gbGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1jb3ZlcicpO1xuICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uU2hhZG93RWwgPSBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLXNoYWRvdycpO1xuICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgY29uc3QgbGVhdmluZ1RyYW5zaXRpb25Db3ZlciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uU2hhZG93ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkRWxlbWVudChsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsKS5iZWZvcmVTdHlsZXMoe1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pLmFmdGVyU3R5bGVzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcnLFxuICAgICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZWF2aW5nVHJhbnNpdGlvbkNvdmVyLmFkZEVsZW1lbnQobGVhdmluZ1RyYW5zaXRpb25Db3ZlckVsKSAvLyBSRVZJRVdcbiAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oT1BBQ0lUWSwgMC4xLCAwKTtcbiAgICAgICAgICBsZWF2aW5nVHJhbnNpdGlvblNoYWRvdy5hZGRFbGVtZW50KGxlYXZpbmdUcmFuc2l0aW9uU2hhZG93RWwpIC8vIFJFVklFV1xuICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pLmZyb21UbyhPUEFDSVRZLCAwLjcsIDAuMDMpO1xuICAgICAgICAgIGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0LmFkZEFuaW1hdGlvbihbbGVhdmluZ1RyYW5zaXRpb25Db3ZlciwgbGVhdmluZ1RyYW5zaXRpb25TaGFkb3ddKTtcbiAgICAgICAgICBsZWF2aW5nQ29udGVudC5hZGRBbmltYXRpb24oW2xlYXZpbmdUcmFuc2l0aW9uRWZmZWN0XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxlYXZpbmdUb29sQmFyRWxzLmZvckVhY2gobGVhdmluZ1Rvb2xCYXJFbCA9PiB7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIGxlYXZpbmdUb29sQmFyLmFkZEVsZW1lbnQobGVhdmluZ1Rvb2xCYXJFbCk7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUaXRsZSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBsZWF2aW5nVGl0bGUuYWRkRWxlbWVudChsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10aXRsZScpKTsgLy8gUkVWSUVXXG4gICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFyQnV0dG9ucyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gbGVhdmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucyxbbWVudVRvZ2dsZV0nKTtcbiAgICAgICAgY29uc3QgcGFyZW50SGVhZGVyID0gbGVhdmluZ1Rvb2xCYXJFbC5jbG9zZXN0KCdpb24taGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGluYWN0aXZlSGVhZGVyID0gcGFyZW50SGVhZGVyID09PSBudWxsIHx8IHBhcmVudEhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnNUb0FuaW1hdGUgPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmZpbHRlcihidXR0b24gPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQ29sbGFwc2VCdXR0b24gPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJyk7XG4gICAgICAgICAgcmV0dXJuIGlzQ29sbGFwc2VCdXR0b24gJiYgIWluYWN0aXZlSGVhZGVyIHx8ICFpc0NvbGxhcHNlQnV0dG9uO1xuICAgICAgICB9KTtcbiAgICAgICAgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLmFkZEVsZW1lbnQoYnV0dG9uc1RvQW5pbWF0ZSk7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFySXRlbXMgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJJdGVtRWxzID0gbGVhdmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqOm5vdChpb24tdGl0bGUpOm5vdChpb24tYnV0dG9ucyk6bm90KFttZW51VG9nZ2xlXSknKTtcbiAgICAgICAgaWYgKGxlYXZpbmdUb29sQmFySXRlbUVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5hZGRFbGVtZW50KGxlYXZpbmdUb29sQmFySXRlbUVscyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJCZyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBsZWF2aW5nVG9vbEJhckJnLmFkZEVsZW1lbnQoc2hhZG93KGxlYXZpbmdUb29sQmFyRWwpLnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLWJhY2tncm91bmQnKSk7IC8vIFJFVklFV1xuICAgICAgICBjb25zdCBsZWF2aW5nQmFja0J1dHRvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBjb25zdCBiYWNrQnV0dG9uRWwgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgICAgICBpZiAoYmFja0J1dHRvbkVsKSB7XG4gICAgICAgICAgbGVhdmluZ0JhY2tCdXR0b24uYWRkRWxlbWVudChiYWNrQnV0dG9uRWwpO1xuICAgICAgICB9XG4gICAgICAgIGxlYXZpbmdUb29sQmFyLmFkZEFuaW1hdGlvbihbbGVhdmluZ1RpdGxlLCBsZWF2aW5nVG9vbEJhckJ1dHRvbnMsIGxlYXZpbmdUb29sQmFySXRlbXMsIGxlYXZpbmdCYWNrQnV0dG9uLCBsZWF2aW5nVG9vbEJhckJnXSk7XG4gICAgICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKGxlYXZpbmdUb29sQmFyKTtcbiAgICAgICAgLy8gZmFkZSBvdXQgbGVhdmluZyB0b29sYmFyIGl0ZW1zXG4gICAgICAgIGxlYXZpbmdCYWNrQnV0dG9uLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcbiAgICAgICAgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcbiAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oT1BBQ0lUWSwgMC45OSwgMCk7XG4gICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xuICAgICAgICAgICAgLy8gbGVhdmluZyB0b29sYmFyLCBiYWNrIGRpcmVjdGlvblxuICAgICAgICAgICAgbGVhdmluZ1RpdGxlLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDEwMCUpJykuZnJvbVRvKE9QQUNJVFksIDAuOTksIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZWF2aW5nVG9vbEJhckl0ZW1zLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCZy5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWSwgJ3RyYW5zZm9ybSddKTtcbiAgICAgICAgICAvLyBsZWF2aW5nIHRvb2xiYXIsIGJhY2sgZGlyZWN0aW9uLCBhbmQgdGhlcmUncyBubyBlbnRlcmluZyB0b29sYmFyXG4gICAgICAgICAgLy8gc2hvdWxkIGp1c3Qgc2xpZGUgb3V0LCBubyBmYWRpbmcgb3V0XG4gICAgICAgICAgY29uc3QgdHJhbnNsdWNlbnRIZWFkZXIgPSBwYXJlbnRIZWFkZXIgPT09IG51bGwgfHwgcGFyZW50SGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRIZWFkZXIudHJhbnNsdWNlbnQ7XG4gICAgICAgICAgaWYgKCF0cmFuc2x1Y2VudEhlYWRlcikge1xuICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCZy5mcm9tVG8oT1BBQ0lUWSwgJ3ZhcigtLW9wYWNpdHkpJywgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQmcuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJywgaXNSVEwgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMTAwJSknKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJhY2tCdXR0b25FbCAmJiAhYmFja3dhcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdCYWNrQnRuVGV4dCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgbGVhdmluZ0JhY2tCdG5UZXh0LmFkZEVsZW1lbnQoc2hhZG93KGJhY2tCdXR0b25FbCkucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10ZXh0JykpIC8vIFJFVklFV1xuICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGB0cmFuc2xhdGVYKCR7KGlzUlRMID8gLTEyNCA6IDEyNCkgKyAncHgnfSlgKTtcbiAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyLmFkZEFuaW1hdGlvbihsZWF2aW5nQmFja0J0blRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBsZWF2aW5nIHRvb2xiYXIsIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xuICAgICAgICAgICAgbGVhdmluZ1RpdGxlLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWApLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKS5hZnRlckNsZWFyU3R5bGVzKFtUUkFOU0ZPUk0sIE9QQUNJVFldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgKS5hZnRlckNsZWFyU3R5bGVzKFtUUkFOU0ZPUk0sIE9QQUNJVFldKTtcbiAgICAgICAgICBsZWF2aW5nQmFja0J1dHRvbi5hZnRlckNsZWFyU3R5bGVzKFtPUEFDSVRZXSk7XG4gICAgICAgICAgbGVhdmluZ1RpdGxlLmFmdGVyQ2xlYXJTdHlsZXMoW09QQUNJVFldKTtcbiAgICAgICAgICBsZWF2aW5nVG9vbEJhckJ1dHRvbnMuYWZ0ZXJDbGVhclN0eWxlcyhbT1BBQ0lUWV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3RBbmltYXRpb247XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfVxufTtcbi8qKlxuICogVGhlIHNjYWxlIG9mIHRoZSBiYWNrIGJ1dHRvbiBkdXJpbmcgdGhlIGFuaW1hdGlvblxuICogaXMgY29tcHV0ZWQgYmFzZWQgb24gdGhlIHNjYWxlIG9mIHRoZSBsYXJnZSB0aXRsZVxuICogYW5kIHZpY2UgdmVyc2EuIEhvd2V2ZXIsIHdlIG5lZWQgdG8gYWNjb3VudCBmb3Igc2xpZ2h0XG4gKiB2YXJpYXRpb25zIGluIHRoZSBzaXplIG9mIHRoZSBsYXJnZSB0aXRsZSBkdWUgdG9cbiAqIHBhZGRpbmcgYW5kIGZvbnQgd2VpZ2h0LiBUaGlzIHZhbHVlIHNob3VsZCBiZSB1c2VkIHRvIHN1YnRyYWN0XG4gKiBhIHNtYWxsIGFtb3VudCBmcm9tIHRoZSBsYXJnZSB0aXRsZSBoZWlnaHQgd2hlbiBjb21wdXRpbmcgc2NhbGVzXG4gKiB0byBnZXQgbW9yZSBhY2N1cmF0ZSBzY2FsZSByZXN1bHRzLlxuICovXG5jb25zdCBMQVJHRV9USVRMRV9TSVpFX09GRlNFVCA9IDEwO1xuZXhwb3J0IHsgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiwgc2hhZG93IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVVBLElBQU0sV0FBVztBQUVqQixJQUFNLG1CQUFtQixhQUFXO0FBQ2xDLFNBQU8sU0FBUyxjQUFjLEdBQUcsT0FBTyxxQkFBcUI7QUFDL0Q7QUFDQSxJQUFNLFNBQVMsUUFBTTtBQUNuQixTQUFPLEdBQUcsY0FB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
