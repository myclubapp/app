import {
  createAnimation,
  getIonPageElement
} from "./chunk-HIKKWWV7.js";

// node_modules/@ionic/core/components/ios.transition.js
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

@ionic/core/components/ios.transition.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2lvcy50cmFuc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SW9uUGFnZUVsZW1lbnQgfSBmcm9tICcuL2luZGV4Mi5qcyc7XG5jb25zdCBEVVJBVElPTiA9IDU0MDtcbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jb25zdCBnZXRDbG9uZWRFbGVtZW50ID0gdGFnTmFtZSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RhZ05hbWV9Lmlvbi1jbG9uZWQtZWxlbWVudGApO1xufTtcbmNvbnN0IHNoYWRvdyA9IGVsID0+IHtcbiAgcmV0dXJuIGVsLnNoYWRvd1Jvb3QgfHwgZWw7XG59O1xuY29uc3QgZ2V0TGFyZ2VUaXRsZSA9IHJlZkVsID0+IHtcbiAgY29uc3QgdGFicyA9IHJlZkVsLnRhZ05hbWUgPT09ICdJT04tVEFCUycgPyByZWZFbCA6IHJlZkVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWJzJyk7XG4gIGNvbnN0IHF1ZXJ5ID0gJ2lvbi1jb250ZW50IGlvbi1oZWFkZXI6bm90KC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUpIGlvbi10aXRsZS50aXRsZS1sYXJnZSc7XG4gIGlmICh0YWJzICE9IG51bGwpIHtcbiAgICBjb25zdCBhY3RpdmVUYWIgPSB0YWJzLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWI6bm90KC50YWItaGlkZGVuKSwgLmlvbi1wYWdlOm5vdCguaW9uLXBhZ2UtaGlkZGVuKScpO1xuICAgIHJldHVybiBhY3RpdmVUYWIgIT0gbnVsbCA/IGFjdGl2ZVRhYi5xdWVyeVNlbGVjdG9yKHF1ZXJ5KSA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIHJlZkVsLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xufTtcbmNvbnN0IGdldEJhY2tCdXR0b24gPSAocmVmRWwsIGJhY2tEaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgdGFicyA9IHJlZkVsLnRhZ05hbWUgPT09ICdJT04tVEFCUycgPyByZWZFbCA6IHJlZkVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWJzJyk7XG4gIGxldCBidXR0b25zTGlzdCA9IFtdO1xuICBpZiAodGFicyAhPSBudWxsKSB7XG4gICAgY29uc3QgYWN0aXZlVGFiID0gdGFicy5xdWVyeVNlbGVjdG9yKCdpb24tdGFiOm5vdCgudGFiLWhpZGRlbiksIC5pb24tcGFnZTpub3QoLmlvbi1wYWdlLWhpZGRlbiknKTtcbiAgICBpZiAoYWN0aXZlVGFiICE9IG51bGwpIHtcbiAgICAgIGJ1dHRvbnNMaXN0ID0gYWN0aXZlVGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1dHRvbnNMaXN0ID0gcmVmRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKTtcbiAgfVxuICBmb3IgKGNvbnN0IGJ1dHRvbnMgb2YgYnV0dG9uc0xpc3QpIHtcbiAgICBjb25zdCBwYXJlbnRIZWFkZXIgPSBidXR0b25zLmNsb3Nlc3QoJ2lvbi1oZWFkZXInKTtcbiAgICBjb25zdCBhY3RpdmVIZWFkZXIgPSBwYXJlbnRIZWFkZXIgJiYgIXBhcmVudEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvbnNDb2xsYXBzZSA9IGJ1dHRvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJyk7XG4gICAgY29uc3Qgc3RhcnRTbG90ID0gYnV0dG9ucy5zbG90ID09PSAnc3RhcnQnIHx8IGJ1dHRvbnMuc2xvdCA9PT0gJyc7XG4gICAgaWYgKGJhY2tCdXR0b24gIT09IG51bGwgJiYgc3RhcnRTbG90ICYmIChidXR0b25zQ29sbGFwc2UgJiYgYWN0aXZlSGVhZGVyICYmIGJhY2tEaXJlY3Rpb24gfHwgIWJ1dHRvbnNDb2xsYXBzZSkpIHtcbiAgICAgIHJldHVybiBiYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBjcmVhdGVMYXJnZVRpdGxlVHJhbnNpdGlvbiA9IChyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xuICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b24gPSBnZXRCYWNrQnV0dG9uKGVudGVyaW5nRWwsIGJhY2tEaXJlY3Rpb24pO1xuICBjb25zdCBsZWF2aW5nTGFyZ2VUaXRsZSA9IGdldExhcmdlVGl0bGUobGVhdmluZ0VsKTtcbiAgY29uc3QgZW50ZXJpbmdMYXJnZVRpdGxlID0gZ2V0TGFyZ2VUaXRsZShlbnRlcmluZ0VsKTtcbiAgY29uc3QgbGVhdmluZ0JhY2tCdXR0b24gPSBnZXRCYWNrQnV0dG9uKGxlYXZpbmdFbCwgYmFja0RpcmVjdGlvbik7XG4gIGNvbnN0IHNob3VsZEFuaW1hdGlvbkZvcndhcmQgPSBlbnRlcmluZ0JhY2tCdXR0b24gIT09IG51bGwgJiYgbGVhdmluZ0xhcmdlVGl0bGUgIT09IG51bGwgJiYgIWJhY2tEaXJlY3Rpb247XG4gIGNvbnN0IHNob3VsZEFuaW1hdGlvbkJhY2t3YXJkID0gZW50ZXJpbmdMYXJnZVRpdGxlICE9PSBudWxsICYmIGxlYXZpbmdCYWNrQnV0dG9uICE9PSBudWxsICYmIGJhY2tEaXJlY3Rpb247XG4gIGlmIChzaG91bGRBbmltYXRpb25Gb3J3YXJkKSB7XG4gICAgY29uc3QgbGVhdmluZ0xhcmdlVGl0bGVCb3ggPSBsZWF2aW5nTGFyZ2VUaXRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b25Cb3ggPSBlbnRlcmluZ0JhY2tCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEVsID0gc2hhZG93KGVudGVyaW5nQmFja0J1dHRvbikucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10ZXh0Jyk7XG4gICAgLy8gVGV4dCBlbGVtZW50IG5vdCByZW5kZXJlZCBpZiBkZXZlbG9wZXJzIHBhc3MgdGV4dD1cIlwiIHRvIHRoZSBiYWNrIGJ1dHRvblxuICAgIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvblRleHRCb3ggPSBlbnRlcmluZ0JhY2tCdXR0b25UZXh0RWwgPT09IG51bGwgfHwgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRlcmluZ0JhY2tCdXR0b25UZXh0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVhdmluZ0xhcmdlVGl0bGVUZXh0RWwgPSBzaGFkb3cobGVhdmluZ0xhcmdlVGl0bGUpLnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLXRpdGxlJyk7XG4gICAgY29uc3QgbGVhdmluZ0xhcmdlVGl0bGVUZXh0Qm94ID0gbGVhdmluZ0xhcmdlVGl0bGVUZXh0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgYW5pbWF0ZUxhcmdlVGl0bGUocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsZWF2aW5nTGFyZ2VUaXRsZSwgbGVhdmluZ0xhcmdlVGl0bGVCb3gsIGxlYXZpbmdMYXJnZVRpdGxlVGV4dEJveCwgZW50ZXJpbmdCYWNrQnV0dG9uQm94LCBlbnRlcmluZ0JhY2tCdXR0b25UZXh0RWwsIGVudGVyaW5nQmFja0J1dHRvblRleHRCb3gpO1xuICAgIGFuaW1hdGVCYWNrQnV0dG9uKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgZW50ZXJpbmdCYWNrQnV0dG9uLCBlbnRlcmluZ0JhY2tCdXR0b25Cb3gsIGVudGVyaW5nQmFja0J1dHRvblRleHRFbCwgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEJveCwgbGVhdmluZ0xhcmdlVGl0bGUsIGxlYXZpbmdMYXJnZVRpdGxlVGV4dEJveCk7XG4gIH0gZWxzZSBpZiAoc2hvdWxkQW5pbWF0aW9uQmFja3dhcmQpIHtcbiAgICBjb25zdCBlbnRlcmluZ0xhcmdlVGl0bGVCb3ggPSBlbnRlcmluZ0xhcmdlVGl0bGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVhdmluZ0JhY2tCdXR0b25Cb3ggPSBsZWF2aW5nQmFja0J1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBsZWF2aW5nQmFja0J1dHRvblRleHRFbCA9IHNoYWRvdyhsZWF2aW5nQmFja0J1dHRvbikucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10ZXh0Jyk7XG4gICAgLy8gVGV4dCBlbGVtZW50IG5vdCByZW5kZXJlZCBpZiBkZXZlbG9wZXJzIHBhc3MgdGV4dD1cIlwiIHRvIHRoZSBiYWNrIGJ1dHRvblxuICAgIGNvbnN0IGxlYXZpbmdCYWNrQnV0dG9uVGV4dEJveCA9IGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsID09PSBudWxsIHx8IGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsZWF2aW5nQmFja0J1dHRvblRleHRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbnRlcmluZ0xhcmdlVGl0bGVUZXh0RWwgPSBzaGFkb3coZW50ZXJpbmdMYXJnZVRpdGxlKS5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci10aXRsZScpO1xuICAgIGNvbnN0IGVudGVyaW5nTGFyZ2VUaXRsZVRleHRCb3ggPSBlbnRlcmluZ0xhcmdlVGl0bGVUZXh0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgYW5pbWF0ZUxhcmdlVGl0bGUocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBlbnRlcmluZ0xhcmdlVGl0bGUsIGVudGVyaW5nTGFyZ2VUaXRsZUJveCwgZW50ZXJpbmdMYXJnZVRpdGxlVGV4dEJveCwgbGVhdmluZ0JhY2tCdXR0b25Cb3gsIGxlYXZpbmdCYWNrQnV0dG9uVGV4dEVsLCBsZWF2aW5nQmFja0J1dHRvblRleHRCb3gpO1xuICAgIGFuaW1hdGVCYWNrQnV0dG9uKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgbGVhdmluZ0JhY2tCdXR0b24sIGxlYXZpbmdCYWNrQnV0dG9uQm94LCBsZWF2aW5nQmFja0J1dHRvblRleHRFbCwgbGVhdmluZ0JhY2tCdXR0b25UZXh0Qm94LCBlbnRlcmluZ0xhcmdlVGl0bGUsIGVudGVyaW5nTGFyZ2VUaXRsZVRleHRCb3gpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZm9yd2FyZDogc2hvdWxkQW5pbWF0aW9uRm9yd2FyZCxcbiAgICBiYWNrd2FyZDogc2hvdWxkQW5pbWF0aW9uQmFja3dhcmRcbiAgfTtcbn07XG5jb25zdCBhbmltYXRlQmFja0J1dHRvbiA9IChyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGJhY2tCdXR0b25FbCwgYmFja0J1dHRvbkJveCwgYmFja0J1dHRvblRleHRFbCwgYmFja0J1dHRvblRleHRCb3gsIGxhcmdlVGl0bGVFbCwgbGFyZ2VUaXRsZVRleHRCb3gpID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgY29uc3QgQkFDS19CVVRUT05fU1RBUlRfT0ZGU0VUID0gcnRsID8gYGNhbGMoMTAwJSAtICR7YmFja0J1dHRvbkJveC5yaWdodCArIDR9cHgpYCA6IGAke2JhY2tCdXR0b25Cb3gubGVmdCAtIDR9cHhgO1xuICBjb25zdCBURVhUX09SSUdJTl9YID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgY29uc3QgSUNPTl9PUklHSU5fWCA9IHJ0bCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIGNvbnN0IENPTlRBSU5FUl9PUklHSU5fWCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIGxldCBXSURUSF9TQ0FMRSA9IDE7XG4gIGxldCBIRUlHSFRfU0NBTEUgPSAxO1xuICBsZXQgVEVYVF9TVEFSVF9TQ0FMRSA9IGBzY2FsZSgke0hFSUdIVF9TQ0FMRX0pYDtcbiAgY29uc3QgVEVYVF9FTkRfU0NBTEUgPSAnc2NhbGUoMSknO1xuICBpZiAoYmFja0J1dHRvblRleHRFbCAmJiBiYWNrQnV0dG9uVGV4dEJveCkge1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHRpdGxlIGFuZCBiYWNrIGJ1dHRvbiB0ZXh0cyBtYXRjaCB0aGVuIHRoZXkgc2hvdWxkIG92ZXJsYXAgZHVyaW5nIHRoZVxuICAgICAqIHBhZ2UgdHJhbnNpdGlvbi4gSWYgdGhlIHRleHRzIGRvIG5vdCBtYXRjaCB1cCB0aGVuIHRoZSBiYWNrIGJ1dHRvbiB0ZXh0IHNjYWxlXG4gICAgICogYWRqdXN0cyB0byBub3QgcGVyZmVjdGx5IG1hdGNoIHRoZSBsYXJnZSB0aXRsZSB0ZXh0IG90aGVyd2lzZSB0aGUgcHJvcG9ydGlvbnNcbiAgICAgKiB3aWxsIGJlIGluY29ycmVjdC4gV2hlbiB0aGUgdGV4dHMgbWF0Y2ggd2Ugc2NhbGUgYm90aCB0aGUgd2lkdGggYW5kIGhlaWdodCB0b1xuICAgICAqIGFjY291bnQgZm9yIGZvbnQgd2VpZ2h0IGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHRpdGxlIGFuZCBiYWNrIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25zdCBkb1RpdGxlQW5kQnV0dG9uVGV4dHNNYXRjaCA9ICgoX2EgPSBiYWNrQnV0dG9uVGV4dEVsLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJpbSgpKSA9PT0gKChfYiA9IGxhcmdlVGl0bGVFbC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRyaW0oKSk7XG4gICAgV0lEVEhfU0NBTEUgPSBsYXJnZVRpdGxlVGV4dEJveC53aWR0aCAvIGJhY2tCdXR0b25UZXh0Qm94LndpZHRoO1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IGFuIG9mZnNldCB0byBhY2NvdW50IGZvciBzbGlnaHQgc2l6aW5nL3BhZGRpbmcgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGVcbiAgICAgKiB0aXRsZSBhbmQgdGhlIGJhY2sgYnV0dG9uLlxuICAgICAqL1xuICAgIEhFSUdIVF9TQ0FMRSA9IChsYXJnZVRpdGxlVGV4dEJveC5oZWlnaHQgLSBMQVJHRV9USVRMRV9TSVpFX09GRlNFVCkgLyBiYWNrQnV0dG9uVGV4dEJveC5oZWlnaHQ7XG4gICAgLyoqXG4gICAgICogRXZlbiB0aG91Z2ggd2Ugc2V0IFRFWFRfU1RBUlRfU0NBTEUgdG8gSEVJR0hUX1NDQUxFIGFib3ZlLCB3ZSBwb3RlbnRpYWxseSBuZWVkXG4gICAgICogdG8gcmUtY29tcHV0ZSB0aGlzIGhlcmUgc2luY2UgdGhlIEhFSUdIVF9TQ0FMRSBtYXkgaGF2ZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIFRFWFRfU1RBUlRfU0NBTEUgPSBkb1RpdGxlQW5kQnV0dG9uVGV4dHNNYXRjaCA/IGBzY2FsZSgke1dJRFRIX1NDQUxFfSwgJHtIRUlHSFRfU0NBTEV9KWAgOiBgc2NhbGUoJHtIRUlHSFRfU0NBTEV9KWA7XG4gIH1cbiAgY29uc3QgYmFja0J1dHRvbkljb25FbCA9IHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJyk7XG4gIGNvbnN0IGJhY2tCdXR0b25JY29uQm94ID0gYmFja0J1dHRvbkljb25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgLyoqXG4gICAqIFdlIG5lZWQgdG8gb2Zmc2V0IHRoZSBjb250YWluZXIgYnkgdGhlIGljb24gZGltZW5zaW9uc1xuICAgKiBzbyB0aGF0IHRoZSBiYWNrIGJ1dHRvbiB0ZXh0IGFsaWducyB3aXRoIHRoZSBsYXJnZSB0aXRsZVxuICAgKiB0ZXh0LiBPdGhlcndpc2UsIHRoZSBiYWNrIGJ1dHRvbiBpY29uIHdpbGwgYWxpZ24gd2l0aCB0aGVcbiAgICogbGFyZ2UgdGl0bGUgdGV4dCBidXQgdGhlIGJhY2sgYnV0dG9uIHRleHQgd2lsbCBub3QuXG4gICAqL1xuICBjb25zdCBDT05UQUlORVJfU1RBUlRfVFJBTlNMQVRFX1ggPSBydGwgPyBgJHtiYWNrQnV0dG9uSWNvbkJveC53aWR0aCAvIDIgLSAoYmFja0J1dHRvbkljb25Cb3gucmlnaHQgLSBiYWNrQnV0dG9uQm94LnJpZ2h0KX1weGAgOiBgJHtiYWNrQnV0dG9uQm94LmxlZnQgLSBiYWNrQnV0dG9uSWNvbkJveC53aWR0aCAvIDJ9cHhgO1xuICBjb25zdCBDT05UQUlORVJfRU5EX1RSQU5TTEFURV9YID0gcnRsID8gYC0ke3dpbmRvdy5pbm5lcldpZHRoIC0gYmFja0J1dHRvbkJveC5yaWdodH1weGAgOiBgJHtiYWNrQnV0dG9uQm94LmxlZnR9cHhgO1xuICAvKipcbiAgICogQmFjayBidXR0b24gY29udGFpbmVyIHNob3VsZCBiZVxuICAgKiBhbGlnbmVkIHRvIHRoZSB0b3Agb2YgdGhlIHRpdGxlIGNvbnRhaW5lclxuICAgKiBzbyB0aGUgdGV4dHMgb3ZlcmxhcCBhcyB0aGUgYmFjayBidXR0b25cbiAgICogdGV4dCBiZWdpbnMgdG8gZmFkZSBpbi5cbiAgICovXG4gIGNvbnN0IENPTlRBSU5FUl9TVEFSVF9UUkFOU0xBVEVfWSA9IGAke2xhcmdlVGl0bGVUZXh0Qm94LnRvcH1weGA7XG4gIC8qKlxuICAgKiBUaGUgY2xvbmVkIGJhY2sgYnV0dG9uIHNob3VsZCBhbGlnbiBleGFjdGx5IHdpdGggdGhlXG4gICAqIHJlYWwgYmFjayBidXR0b24gb24gdGhlIGVudGVyaW5nIHBhZ2Ugb3RoZXJ3aXNlIHRoZXJlIHdpbGxcbiAgICogYmUgYSBsYXlvdXQgc2hpZnQuXG4gICAqL1xuICBjb25zdCBDT05UQUlORVJfRU5EX1RSQU5TTEFURV9ZID0gYCR7YmFja0J1dHRvbkJveC50b3B9cHhgO1xuICAvKipcbiAgICogSW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uLCB0aGUgY2xvbmVkIGJhY2sgYnV0dG9uXG4gICAqIGNvbnRhaW5lciBzaG91bGQgdHJhbnNsYXRlIGZyb20gb3ZlciB0aGUgbGFyZ2UgdGl0bGVcbiAgICogdG8gb3ZlciB0aGUgYmFjayBidXR0b24uIEluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24sXG4gICAqIGl0IHNob3VsZCB0cmFuc2xhdGUgZnJvbSBvdmVyIHRoZSBiYWNrIGJ1dHRvbiB0byBvdmVyXG4gICAqIHRoZSBsYXJnZSB0aXRsZS5cbiAgICovXG4gIGNvbnN0IEZPUldBUkRfQ09OVEFJTkVSX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Q09OVEFJTkVSX1NUQVJUX1RSQU5TTEFURV9YfSwgJHtDT05UQUlORVJfU1RBUlRfVFJBTlNMQVRFX1l9LCAwKWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0NPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1h9LCAke0NPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1l9LCAwKWBcbiAgfV07XG4gIGNvbnN0IEJBQ0tXQVJEX0NPTlRBSU5FUl9LRVlGUkFNRVMgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0NPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1h9LCAke0NPTlRBSU5FUl9FTkRfVFJBTlNMQVRFX1l9LCAwKWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0NPTlRBSU5FUl9TVEFSVF9UUkFOU0xBVEVfWH0sICR7Q09OVEFJTkVSX1NUQVJUX1RSQU5TTEFURV9ZfSwgMClgXG4gIH1dO1xuICBjb25zdCBDT05UQUlORVJfS0VZRlJBTUVTID0gYmFja0RpcmVjdGlvbiA/IEJBQ0tXQVJEX0NPTlRBSU5FUl9LRVlGUkFNRVMgOiBGT1JXQVJEX0NPTlRBSU5FUl9LRVlGUkFNRVM7XG4gIC8qKlxuICAgKiBJbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24sIHRoZSB0ZXh0IGluIHRoZSBjbG9uZWQgYmFjayBidXR0b25cbiAgICogc2hvdWxkIHN0YXJ0IHRvIGJlIChyb3VnaGx5KSB0aGUgc2l6ZSBvZiB0aGUgbGFyZ2UgdGl0bGVcbiAgICogYW5kIHRoZW4gc2NhbGUgZG93biB0byBiZSB0aGUgc2l6ZSBvZiB0aGUgYWN0dWFsIGJhY2sgYnV0dG9uLlxuICAgKiBUaGUgdGV4dCBzaG91bGQgYWxzbyB0cmFuc2xhdGUsIGJ1dCB0aGF0IHRyYW5zbGF0ZSBpcyBoYW5kbGVkXG4gICAqIGJ5IHRoZSBjb250YWluZXIga2V5ZnJhbWVzLlxuICAgKi9cbiAgY29uc3QgRk9SV0FSRF9URVhUX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiBURVhUX1NUQVJUX1NDQUxFXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06IFRFWFRfRU5EX1NDQUxFXG4gIH1dO1xuICBjb25zdCBCQUNLV0FSRF9URVhUX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBURVhUX0VORF9TQ0FMRVxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiBURVhUX1NUQVJUX1NDQUxFXG4gIH1dO1xuICBjb25zdCBURVhUX0tFWUZSQU1FUyA9IGJhY2tEaXJlY3Rpb24gPyBCQUNLV0FSRF9URVhUX0tFWUZSQU1FUyA6IEZPUldBUkRfVEVYVF9LRVlGUkFNRVM7XG4gIC8qKlxuICAgKiBUaGUgaWNvbiBzaG91bGQgc2NhbGUgaW4vb3V0IGluIHRoZSBzZWNvbmRcbiAgICogaGFsZiBvZiB0aGUgYW5pbWF0aW9uLiBUaGUgaWNvbiBzaG91bGQgYWxzb1xuICAgKiB0cmFuc2xhdGUsIGJ1dCB0aGF0IHRyYW5zbGF0ZSBpcyBoYW5kbGVkIGJ5IHRoZVxuICAgKiBjb250YWluZXIga2V5ZnJhbWVzLlxuICAgKi9cbiAgY29uc3QgRk9SV0FSRF9JQ09OX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC42KSdcbiAgfSwge1xuICAgIG9mZnNldDogMC42LFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC42KSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XTtcbiAgY29uc3QgQkFDS1dBUkRfSUNPTl9LRVlGUkFNRVMgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjIsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjYpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC42KSdcbiAgfV07XG4gIGNvbnN0IElDT05fS0VZRlJBTUVTID0gYmFja0RpcmVjdGlvbiA/IEJBQ0tXQVJEX0lDT05fS0VZRlJBTUVTIDogRk9SV0FSRF9JQ09OX0tFWUZSQU1FUztcbiAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b25JY29uQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbkFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBjbG9uZWRCYWNrQnV0dG9uRWwgPSBnZXRDbG9uZWRFbGVtZW50KCdpb24tYmFjay1idXR0b24nKTtcbiAgY29uc3QgY2xvbmVkQmFja0J1dHRvblRleHRFbCA9IHNoYWRvdyhjbG9uZWRCYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpO1xuICBjb25zdCBjbG9uZWRCYWNrQnV0dG9uSWNvbkVsID0gc2hhZG93KGNsb25lZEJhY2tCdXR0b25FbCkucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgY2xvbmVkQmFja0J1dHRvbkVsLnRleHQgPSBiYWNrQnV0dG9uRWwudGV4dDtcbiAgY2xvbmVkQmFja0J1dHRvbkVsLm1vZGUgPSBiYWNrQnV0dG9uRWwubW9kZTtcbiAgY2xvbmVkQmFja0J1dHRvbkVsLmljb24gPSBiYWNrQnV0dG9uRWwuaWNvbjtcbiAgY2xvbmVkQmFja0J1dHRvbkVsLmNvbG9yID0gYmFja0J1dHRvbkVsLmNvbG9yO1xuICBjbG9uZWRCYWNrQnV0dG9uRWwuZGlzYWJsZWQgPSBiYWNrQnV0dG9uRWwuZGlzYWJsZWQ7XG4gIGNsb25lZEJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xuICBjbG9uZWRCYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24uYWRkRWxlbWVudChjbG9uZWRCYWNrQnV0dG9uSWNvbkVsKTtcbiAgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvbi5hZGRFbGVtZW50KGNsb25lZEJhY2tCdXR0b25UZXh0RWwpO1xuICBlbnRlcmluZ0JhY2tCdXR0b25BbmltYXRpb24uYWRkRWxlbWVudChjbG9uZWRCYWNrQnV0dG9uRWwpO1xuICBlbnRlcmluZ0JhY2tCdXR0b25BbmltYXRpb24uYmVmb3JlU3R5bGVzKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIFtDT05UQUlORVJfT1JJR0lOX1hdOiAnMHB4J1xuICB9KVxuICAvKipcbiAgICogVGhlIHdyaXRlIGhvb2tzIG11c3QgYmUgc2V0IG9uIHRoaXMgYW5pbWF0aW9uIGFzIGl0IGlzIGd1YXJhbnRlZWQgdG8gcnVuLiBPdGhlclxuICAgKiBhbmltYXRpb25zIHN1Y2ggYXMgdGhlIGJhY2sgYnV0dG9uIHRleHQgYW5pbWF0aW9uIHdpbGwgbm90IHJ1biBpZiB0aGUgYmFjayBidXR0b25cbiAgICogaGFzIG5vIHZpc2libGUgdGV4dC5cbiAgICovLmJlZm9yZUFkZFdyaXRlKCgpID0+IHtcbiAgICBiYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIGNsb25lZEJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eShURVhUX09SSUdJTl9YLCBCQUNLX0JVVFRPTl9TVEFSVF9PRkZTRVQpO1xuICB9KS5hZnRlckFkZFdyaXRlKCgpID0+IHtcbiAgICBiYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnJyk7XG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICBjbG9uZWRCYWNrQnV0dG9uRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoVEVYVF9PUklHSU5fWCk7XG4gIH0pLmtleWZyYW1lcyhDT05UQUlORVJfS0VZRlJBTUVTKTtcbiAgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvbi5iZWZvcmVTdHlsZXMoe1xuICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogYCR7VEVYVF9PUklHSU5fWH0gdG9wYFxuICB9KS5rZXlmcmFtZXMoVEVYVF9LRVlGUkFNRVMpO1xuICBlbnRlcmluZ0JhY2tCdXR0b25JY29uQW5pbWF0aW9uLmJlZm9yZVN0eWxlcyh7XG4gICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgJHtJQ09OX09SSUdJTl9YfSBjZW50ZXJgXG4gIH0pLmtleWZyYW1lcyhJQ09OX0tFWUZSQU1FUyk7XG4gIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKFtlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uLCBlbnRlcmluZ0JhY2tCdXR0b25JY29uQW5pbWF0aW9uLCBlbnRlcmluZ0JhY2tCdXR0b25BbmltYXRpb25dKTtcbn07XG5jb25zdCBhbmltYXRlTGFyZ2VUaXRsZSA9IChyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGxhcmdlVGl0bGVFbCwgbGFyZ2VUaXRsZUJveCwgbGFyZ2VUaXRsZVRleHRCb3gsIGJhY2tCdXR0b25Cb3gsIGJhY2tCdXR0b25UZXh0RWwsIGJhY2tCdXR0b25UZXh0Qm94KSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIC8qKlxuICAgKiBUaGUgaG9yaXpvbnRhbCB0cmFuc2Zvcm0gb3JpZ2luIGZvciB0aGUgbGFyZ2UgdGl0bGVcbiAgICovXG4gIGNvbnN0IE9SSUdJTl9YID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgY29uc3QgVElUTEVfU1RBUlRfT0ZGU0VUID0gcnRsID8gYGNhbGMoMTAwJSAtICR7bGFyZ2VUaXRsZUJveC5yaWdodH1weClgIDogYCR7bGFyZ2VUaXRsZUJveC5sZWZ0fXB4YDtcbiAgLyoqXG4gICAqIFRoZSBjbG9uZWQgbGFyZ2Ugc2hvdWxkIGFsaWduIGV4YWN0bHkgd2l0aCB0aGVcbiAgICogcmVhbCBsYXJnZSB0aXRsZSBvbiB0aGUgbGVhdmluZyBwYWdlIG90aGVyd2lzZSB0aGVyZSB3aWxsXG4gICAqIGJlIGEgbGF5b3V0IHNoaWZ0LlxuICAgKi9cbiAgY29uc3QgU1RBUlRfVFJBTlNMQVRFX1ggPSAnMHB4JztcbiAgY29uc3QgU1RBUlRfVFJBTlNMQVRFX1kgPSBgJHtsYXJnZVRpdGxlQm94LnRvcH1weGA7XG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0byBvZmZzZXQgdGhlIGxhcmdlIHRpdGxlIHRyYW5zbGF0aW9uIGJ5LlxuICAgKiBUaGlzIGFjY291bnRzIGZvciBkaWZmZXJlbmNlcyBpbiBzaXppbmcgYmV0d2VlbiB0aGUgbGFyZ2VcbiAgICogdGl0bGUgYW5kIHRoZSBiYWNrIGJ1dHRvbiBkdWUgdG8gcGFkZGluZyBhbmQgZm9udCB3ZWlnaHQuXG4gICAqL1xuICBjb25zdCBMQVJHRV9USVRMRV9UUkFOU0xBVElPTl9PRkZTRVQgPSA4O1xuICBsZXQgRU5EX1RSQU5TTEFURV9YID0gcnRsID8gYC0ke3dpbmRvdy5pbm5lcldpZHRoIC0gYmFja0J1dHRvbkJveC5yaWdodCAtIExBUkdFX1RJVExFX1RSQU5TTEFUSU9OX09GRlNFVH1weGAgOiBgJHtiYWNrQnV0dG9uQm94LnggKyBMQVJHRV9USVRMRV9UUkFOU0xBVElPTl9PRkZTRVR9cHhgO1xuICAvKipcbiAgICogSG93IG11Y2ggdG8gc2NhbGUgdGhlIGxhcmdlIHRpdGxlIHVwL2Rvd24gYnkuXG4gICAqL1xuICBsZXQgSEVJR0hUX1NDQUxFID0gMC41O1xuICAvKipcbiAgICogVGhlIGxhcmdlIHRpdGxlIGFsd2F5cyBzdGFydHMgZnVsbCBzaXplLlxuICAgKi9cbiAgY29uc3QgU1RBUlRfU0NBTEUgPSAnc2NhbGUoMSknO1xuICAvKipcbiAgICogQnkgZGVmYXVsdCwgd2UgZG9uJ3Qgd29ycnkgYWJvdXQgaGF2aW5nIHRoZSBsYXJnZSB0aXRsZSBzY2FsZWQgdG8gcGVyZmVjdGx5XG4gICAqIG1hdGNoIHRoZSBiYWNrIGJ1dHRvbiBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgdGhlIGJhY2sgYnV0dG9uJ3MgdGV4dCBtYXRjaGVzXG4gICAqIHRoZSBsYXJnZSB0aXRsZSdzIHRleHQuXG4gICAqL1xuICBsZXQgRU5EX1NDQUxFID0gYHNjYWxlKCR7SEVJR0hUX1NDQUxFfSlgO1xuICAvLyBUZXh0IGVsZW1lbnQgbm90IHJlbmRlcmVkIGlmIGRldmVsb3BlcnMgcGFzcyB0ZXh0PVwiXCIgdG8gdGhlIGJhY2sgYnV0dG9uXG4gIGlmIChiYWNrQnV0dG9uVGV4dEVsICYmIGJhY2tCdXR0b25UZXh0Qm94KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlZCB0aXRsZSBzaG91bGQgKHJvdWdobHkpIG92ZXJsYXAgdGhlIGJhY2sgYnV0dG9uLiBUaGlzIGVuc3VyZXMgdGhhdFxuICAgICAqIHRoZSBiYWNrIGJ1dHRvbiBhbmQgdGl0bGUgb3ZlcmxhcCBkdXJpbmcgdGhlIGFuaW1hdGlvbi4gTm90ZSB0aGF0IHNpbmNlIGJvdGhcbiAgICAgKiBlbGVtZW50cyBlaXRoZXIgZmFkZSBpbiBvciBmYWRlIG91dCBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlIGFuaW1hdGlvbiwgbmVpdGhlclxuICAgICAqIGVsZW1lbnQgd2lsbCBiZSBmdWxseSB2aXNpYmxlIG9uIHRvcCBvZiB0aGUgb3RoZXIuIEFzIGEgcmVzdWx0LCB0aGUgb3ZlcmxhcFxuICAgICAqIGRvZXMgbm90IG5lZWQgdG8gYmUgcGVyZmVjdCwgc28gYXBwcm94aW1hdGUgdmFsdWVzIGFyZSBhY2NlcHRhYmxlIGhlcmUuXG4gICAgICovXG4gICAgRU5EX1RSQU5TTEFURV9YID0gcnRsID8gYC0ke3dpbmRvdy5pbm5lcldpZHRoIC0gYmFja0J1dHRvblRleHRCb3gucmlnaHQgLSBMQVJHRV9USVRMRV9UUkFOU0xBVElPTl9PRkZTRVR9cHhgIDogYCR7YmFja0J1dHRvblRleHRCb3gueCAtIExBUkdFX1RJVExFX1RSQU5TTEFUSU9OX09GRlNFVH1weGA7XG4gICAgLyoqXG4gICAgICogSW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uLCB0aGUgbGFyZ2UgdGl0bGUgc2hvdWxkIHN0YXJ0IGF0IGl0cyBub3JtYWwgc2l6ZSBhbmRcbiAgICAgKiB0aGVuIHNjYWxlIGRvd24gdG8gYmUgKHJvdWdobHkpIHRoZSBzaXplIG9mIHRoZSBiYWNrIGJ1dHRvbiBvbiB0aGUgb3RoZXIgdmlldy5cbiAgICAgKiBJbiB0aGUgYmFja3dhcmQgZGlyZWN0aW9uLCB0aGUgbGFyZ2UgdGl0bGUgc2hvdWxkIHN0YXJ0IGF0IChyb3VnaGx5KSB0aGUgc2l6ZVxuICAgICAqIG9mIHRoZSBiYWNrIGJ1dHRvbiBhbmQgdGhlbiBzY2FsZSB1cCB0byBpdHMgb3JpZ2luYWwgc2l6ZS5cbiAgICAgKiBOb3RlIHRoYXQgc2luY2UgYm90aCBlbGVtZW50cyBlaXRoZXIgZmFkZSBpbiBvciBmYWRlIG91dCBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlXG4gICAgICogYW5pbWF0aW9uLCBuZWl0aGVyIGVsZW1lbnQgd2lsbCBiZSBmdWxseSB2aXNpYmxlIG9uIHRvcCBvZiB0aGUgb3RoZXIuIEFzIGEgcmVzdWx0LFxuICAgICAqIHRoZSBvdmVybGFwICBkb2VzIG5vdCBuZWVkIHRvIGJlIHBlcmZlY3QsIHNvIGFwcHJveGltYXRlIHZhbHVlcyBhcmUgYWNjZXB0YWJsZSBoZXJlLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHRpdGxlIGFuZCBiYWNrIGJ1dHRvbiB0ZXh0cyBtYXRjaCB0aGVuIHRoZXkgc2hvdWxkIG92ZXJsYXAgZHVyaW5nIHRoZVxuICAgICAqIHBhZ2UgdHJhbnNpdGlvbi4gSWYgdGhlIHRleHRzIGRvIG5vdCBtYXRjaCB1cCB0aGVuIHRoZSBsYXJnZSB0aXRsZSB0ZXh0IHNjYWxlXG4gICAgICogYWRqdXN0cyB0byBub3QgcGVyZmVjdGx5IG1hdGNoIHRoZSBiYWNrIGJ1dHRvbiB0ZXh0IG90aGVyd2lzZSB0aGUgcHJvcG9ydGlvbnNcbiAgICAgKiB3aWxsIGJlIGluY29ycmVjdC4gV2hlbiB0aGUgdGV4dHMgbWF0Y2ggd2Ugc2NhbGUgYm90aCB0aGUgd2lkdGggYW5kIGhlaWdodCB0b1xuICAgICAqIGFjY291bnQgZm9yIGZvbnQgd2VpZ2h0IGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHRpdGxlIGFuZCBiYWNrIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25zdCBkb1RpdGxlQW5kQnV0dG9uVGV4dHNNYXRjaCA9ICgoX2EgPSBiYWNrQnV0dG9uVGV4dEVsLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJpbSgpKSA9PT0gKChfYiA9IGxhcmdlVGl0bGVFbC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRyaW0oKSk7XG4gICAgY29uc3QgV0lEVEhfU0NBTEUgPSBiYWNrQnV0dG9uVGV4dEJveC53aWR0aCAvIGxhcmdlVGl0bGVUZXh0Qm94LndpZHRoO1xuICAgIEhFSUdIVF9TQ0FMRSA9IGJhY2tCdXR0b25UZXh0Qm94LmhlaWdodCAvIChsYXJnZVRpdGxlVGV4dEJveC5oZWlnaHQgLSBMQVJHRV9USVRMRV9TSVpFX09GRlNFVCk7XG4gICAgLyoqXG4gICAgICogRXZlbiB0aG91Z2ggd2Ugc2V0IFRFWFRfU1RBUlRfU0NBTEUgdG8gSEVJR0hUX1NDQUxFIGFib3ZlLCB3ZSBwb3RlbnRpYWxseSBuZWVkXG4gICAgICogdG8gcmUtY29tcHV0ZSB0aGlzIGhlcmUgc2luY2UgdGhlIEhFSUdIVF9TQ0FMRSBtYXkgaGF2ZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIEVORF9TQ0FMRSA9IGRvVGl0bGVBbmRCdXR0b25UZXh0c01hdGNoID8gYHNjYWxlKCR7V0lEVEhfU0NBTEV9LCAke0hFSUdIVF9TQ0FMRX0pYCA6IGBzY2FsZSgke0hFSUdIVF9TQ0FMRX0pYDtcbiAgfVxuICAvKipcbiAgICogVGhlIG1pZHBvaW50cyBvZiB0aGUgYmFjayBidXR0b24gYW5kIHRoZSB0aXRsZSBzaG91bGQgYWxpZ24gc3VjaCB0aGF0IHRoZSBiYWNrXG4gICAqIGJ1dHRvbiBhbmQgdGl0bGUgYXBwZWFyIHRvIGJlIGNlbnRlcmVkIHdpdGggZWFjaCBvdGhlci5cbiAgICovXG4gIGNvbnN0IGJhY2tCdXR0b25NaWRQb2ludCA9IGJhY2tCdXR0b25Cb3gudG9wICsgYmFja0J1dHRvbkJveC5oZWlnaHQgLyAyO1xuICBjb25zdCB0aXRsZU1pZFBvaW50ID0gbGFyZ2VUaXRsZUJveC5oZWlnaHQgKiBIRUlHSFRfU0NBTEUgLyAyO1xuICBjb25zdCBFTkRfVFJBTlNMQVRFX1kgPSBgJHtiYWNrQnV0dG9uTWlkUG9pbnQgLSB0aXRsZU1pZFBvaW50fXB4YDtcbiAgY29uc3QgQkFDS1dBUkRTX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtFTkRfVFJBTlNMQVRFX1h9LCAke0VORF9UUkFOU0xBVEVfWX0sIDApICR7RU5EX1NDQUxFfWBcbiAgfSwge1xuICAgIG9mZnNldDogMC4xLFxuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7U1RBUlRfVFJBTlNMQVRFX1h9LCAke1NUQVJUX1RSQU5TTEFURV9ZfSwgMCkgJHtTVEFSVF9TQ0FMRX1gXG4gIH1dO1xuICBjb25zdCBGT1JXQVJEU19LRVlGUkFNRVMgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjk5LFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7U1RBUlRfVFJBTlNMQVRFX1h9LCAke1NUQVJUX1RSQU5TTEFURV9ZfSwgMCkgJHtTVEFSVF9TQ0FMRX1gXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuNixcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0VORF9UUkFOU0xBVEVfWH0sICR7RU5EX1RSQU5TTEFURV9ZfSwgMCkgJHtFTkRfU0NBTEV9YFxuICB9XTtcbiAgY29uc3QgS0VZRlJBTUVTID0gYmFja0RpcmVjdGlvbiA/IEJBQ0tXQVJEU19LRVlGUkFNRVMgOiBGT1JXQVJEU19LRVlGUkFNRVM7XG4gIGNvbnN0IGNsb25lZFRpdGxlRWwgPSBnZXRDbG9uZWRFbGVtZW50KCdpb24tdGl0bGUnKTtcbiAgY29uc3QgY2xvbmVkTGFyZ2VUaXRsZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjbG9uZWRUaXRsZUVsLmlubmVyVGV4dCA9IGxhcmdlVGl0bGVFbC5pbm5lclRleHQ7XG4gIGNsb25lZFRpdGxlRWwuc2l6ZSA9IGxhcmdlVGl0bGVFbC5zaXplO1xuICBjbG9uZWRUaXRsZUVsLmNvbG9yID0gbGFyZ2VUaXRsZUVsLmNvbG9yO1xuICBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uLmFkZEVsZW1lbnQoY2xvbmVkVGl0bGVFbCk7XG4gIGNsb25lZExhcmdlVGl0bGVBbmltYXRpb24uYmVmb3JlU3R5bGVzKHtcbiAgICAndHJhbnNmb3JtLW9yaWdpbic6IGAke09SSUdJTl9YfSB0b3BgLFxuICAgIC8qKlxuICAgICAqIFNpbmNlIGZvbnQgc2l6ZSBjaGFuZ2VzIHdpbGwgY2F1c2VcbiAgICAgKiB0aGUgZGltZW5zaW9uIG9mIHRoZSBsYXJnZSB0aXRsZSB0byBjaGFuZ2VcbiAgICAgKiB3ZSBuZWVkIHRvIHNldCB0aGUgY2xvbmVkIHRpdGxlIGhlaWdodFxuICAgICAqIGVxdWFsIHRvIHRoYXQgb2YgdGhlIG9yaWdpbmFsIGxhcmdlIHRpdGxlIGhlaWdodC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IGAke2xhcmdlVGl0bGVCb3guaGVpZ2h0fXB4YCxcbiAgICBkaXNwbGF5OiAnJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBbT1JJR0lOX1hdOiBUSVRMRV9TVEFSVF9PRkZTRVRcbiAgfSkuYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xuICAgIGxhcmdlVGl0bGVFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJyk7XG4gIH0pLmFmdGVyQWRkV3JpdGUoKCkgPT4ge1xuICAgIGxhcmdlVGl0bGVFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcnKTtcbiAgICBjbG9uZWRUaXRsZUVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfSkua2V5ZnJhbWVzKEtFWUZSQU1FUyk7XG4gIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKGNsb25lZExhcmdlVGl0bGVBbmltYXRpb24pO1xufTtcbmNvbnN0IGlvc1RyYW5zaXRpb25BbmltYXRpb24gPSAobmF2RWwsIG9wdHMpID0+IHtcbiAgdmFyIF9hO1xuICB0cnkge1xuICAgIGNvbnN0IEVBU0lORyA9ICdjdWJpYy1iZXppZXIoMC4zMiwwLjcyLDAsMSknO1xuICAgIGNvbnN0IE9QQUNJVFkgPSAnb3BhY2l0eSc7XG4gICAgY29uc3QgVFJBTlNGT1JNID0gJ3RyYW5zZm9ybSc7XG4gICAgY29uc3QgQ0VOVEVSID0gJzAlJztcbiAgICBjb25zdCBPRkZfT1BBQ0lUWSA9IDAuODtcbiAgICBjb25zdCBpc1JUTCA9IG5hdkVsLm93bmVyRG9jdW1lbnQuZGlyID09PSAncnRsJztcbiAgICBjb25zdCBPRkZfUklHSFQgPSBpc1JUTCA/ICctOTkuNSUnIDogJzk5LjUlJztcbiAgICBjb25zdCBPRkZfTEVGVCA9IGlzUlRMID8gJzMzJScgOiAnLTMzJSc7XG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcbiAgICBjb25zdCBiYWNrRGlyZWN0aW9uID0gb3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJztcbiAgICBjb25zdCBjb250ZW50RWwgPSBlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IGlvbi1jb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyRWxzID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gKjpub3QoaW9uLXRvb2xiYXIpLCA6c2NvcGUgPiBpb24tZm9vdGVyID4gKicpO1xuICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhckVscyA9IGVudGVyaW5nRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gaW9uLWhlYWRlciA+IGlvbi10b29sYmFyJyk7XG4gICAgY29uc3Qgcm9vdEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGNvbnN0IGVudGVyaW5nQ29udGVudEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHJvb3RBbmltYXRpb24uYWRkRWxlbWVudChlbnRlcmluZ0VsKS5kdXJhdGlvbigoKF9hID0gb3B0cy5kdXJhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCkgfHwgRFVSQVRJT04pLmVhc2luZyhvcHRzLmVhc2luZyB8fCBFQVNJTkcpLmZpbGwoJ2JvdGgnKS5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgICBpZiAobGVhdmluZ0VsICYmIG5hdkVsICE9PSBudWxsICYmIG5hdkVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG5hdkRlY29yQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBuYXZEZWNvckFuaW1hdGlvbi5hZGRFbGVtZW50KG5hdkVsKTtcbiAgICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKG5hdkRlY29yQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgaWYgKCFjb250ZW50RWwgJiYgZW50ZXJpbmdUb29sQmFyRWxzLmxlbmd0aCA9PT0gMCAmJiBoZWFkZXJFbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKSk7IC8vIFJFVklFV1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChjb250ZW50RWwpOyAvLyBSRVZJRVdcbiAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KGhlYWRlckVscyk7XG4gICAgfVxuICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKGVudGVyaW5nQ29udGVudEFuaW1hdGlvbik7XG4gICAgaWYgKGJhY2tEaXJlY3Rpb24pIHtcbiAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtPRkZfTEVGVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApLmZyb21UbyhPUEFDSVRZLCBPRkZfT1BBQ0lUWSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVudGVyaW5nIGNvbnRlbnQsIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX1JJR0hUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCk7XG4gICAgfVxuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdEVsID0gc2hhZG93KGNvbnRlbnRFbCkucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tZWZmZWN0Jyk7XG4gICAgICBpZiAoZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwpIHtcbiAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uQ292ZXJFbCA9IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvdmVyJyk7XG4gICAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvblNoYWRvd0VsID0gZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tc2hhZG93Jyk7XG4gICAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBjb25zdCBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBjb25zdCBlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3cgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0LmFkZEVsZW1lbnQoZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwpLmJlZm9yZVN0eWxlcyh7XG4gICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSkuYWZ0ZXJTdHlsZXMoe1xuICAgICAgICAgIG9wYWNpdHk6ICcnLFxuICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25Db3Zlci5hZGRFbGVtZW50KGVudGVyaW5nVHJhbnNpdGlvbkNvdmVyRWwpIC8vIFJFVklFV1xuICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oT1BBQ0lUWSwgMCwgMC4xKTtcbiAgICAgICAgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93LmFkZEVsZW1lbnQoZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93RWwpIC8vIFJFVklFV1xuICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oT1BBQ0lUWSwgMC4wMywgMC43KTtcbiAgICAgICAgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0LmFkZEFuaW1hdGlvbihbZW50ZXJpbmdUcmFuc2l0aW9uQ292ZXIsIGVudGVyaW5nVHJhbnNpdGlvblNoYWRvd10pO1xuICAgICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkQW5pbWF0aW9uKFtlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZW50ZXJpbmdDb250ZW50SGFzTGFyZ2VUaXRsZSA9IGVudGVyaW5nRWwucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlci5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UnKTtcbiAgICBjb25zdCB7XG4gICAgICBmb3J3YXJkLFxuICAgICAgYmFja3dhcmRcbiAgICB9ID0gY3JlYXRlTGFyZ2VUaXRsZVRyYW5zaXRpb24ocm9vdEFuaW1hdGlvbiwgaXNSVEwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XG4gICAgZW50ZXJpbmdUb29sQmFyRWxzLmZvckVhY2goZW50ZXJpbmdUb29sQmFyRWwgPT4ge1xuICAgICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xCYXJFbCk7XG4gICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihlbnRlcmluZ1Rvb2xCYXIpO1xuICAgICAgY29uc3QgZW50ZXJpbmdUaXRsZSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgZW50ZXJpbmdUaXRsZS5hZGRFbGVtZW50KGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10aXRsZScpKTsgLy8gUkVWSUVXXG4gICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShlbnRlcmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucyxbbWVudVRvZ2dsZV0nKSk7XG4gICAgICBjb25zdCBwYXJlbnRIZWFkZXIgPSBlbnRlcmluZ1Rvb2xCYXJFbC5jbG9zZXN0KCdpb24taGVhZGVyJyk7XG4gICAgICBjb25zdCBpbmFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciA9PT0gbnVsbCB8fCBwYXJlbnRIZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgICAgbGV0IGJ1dHRvbnNUb0FuaW1hdGU7XG4gICAgICBpZiAoYmFja0RpcmVjdGlvbikge1xuICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+IHtcbiAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlQnV0dG9uID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9ucy1jb2xsYXBzZScpO1xuICAgICAgICAgIHJldHVybiBpc0NvbGxhcHNlQnV0dG9uICYmICFpbmFjdGl2ZUhlYWRlciB8fCAhaXNDb2xsYXBzZUJ1dHRvbjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+ICFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJykpO1xuICAgICAgfVxuICAgICAgZW50ZXJpbmdUb29sQmFyQnV0dG9ucy5hZGRFbGVtZW50KGJ1dHRvbnNUb0FuaW1hdGUpO1xuICAgICAgY29uc3QgZW50ZXJpbmdUb29sQmFySXRlbXMgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIGVudGVyaW5nVG9vbEJhckl0ZW1zLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKjpub3QoaW9uLXRpdGxlKTpub3QoaW9uLWJ1dHRvbnMpOm5vdChbbWVudVRvZ2dsZV0pJykpO1xuICAgICAgY29uc3QgZW50ZXJpbmdUb29sQmFyQmcgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIGVudGVyaW5nVG9vbEJhckJnLmFkZEVsZW1lbnQoc2hhZG93KGVudGVyaW5nVG9vbEJhckVsKS5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJykpOyAvLyBSRVZJRVdcbiAgICAgIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgY29uc3QgYmFja0J1dHRvbkVsID0gZW50ZXJpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2stYnV0dG9uJyk7XG4gICAgICBpZiAoYmFja0J1dHRvbkVsKSB7XG4gICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5hZGRFbGVtZW50KGJhY2tCdXR0b25FbCk7XG4gICAgICB9XG4gICAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkQW5pbWF0aW9uKFtlbnRlcmluZ1RpdGxlLCBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zLCBlbnRlcmluZ1Rvb2xCYXJJdGVtcywgZW50ZXJpbmdUb29sQmFyQmcsIGVudGVyaW5nQmFja0J1dHRvbl0pO1xuICAgICAgZW50ZXJpbmdUb29sQmFyQnV0dG9ucy5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICBlbnRlcmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICBpZiAoYmFja0RpcmVjdGlvbikge1xuICAgICAgICBpZiAoIWluYWN0aXZlSGVhZGVyKSB7XG4gICAgICAgICAgZW50ZXJpbmdUaXRsZS5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWAsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgKS5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCk7XG4gICAgICAgIC8vIGJhY2sgZGlyZWN0aW9uLCBlbnRlcmluZyBwYWdlIGhhcyBhIGJhY2sgYnV0dG9uXG4gICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbnRlcmluZyB0b29sYmFyLCBmb3J3YXJkIGRpcmVjdGlvblxuICAgICAgICBpZiAoIWVudGVyaW5nQ29udGVudEhhc0xhcmdlVGl0bGUpIHtcbiAgICAgICAgICBlbnRlcmluZ1RpdGxlLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtPRkZfUklHSFR9KWAsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgKS5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9SSUdIVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApO1xuICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZy5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWSwgJ3RyYW5zZm9ybSddKTtcbiAgICAgICAgY29uc3QgdHJhbnNsdWNlbnRIZWFkZXIgPSBwYXJlbnRIZWFkZXIgPT09IG51bGwgfHwgcGFyZW50SGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRIZWFkZXIudHJhbnNsdWNlbnQ7XG4gICAgICAgIGlmICghdHJhbnNsdWNlbnRIZWFkZXIpIHtcbiAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZy5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgJ3ZhcigtLW9wYWNpdHkpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW50ZXJpbmdUb29sQmFyQmcuZnJvbVRvKCd0cmFuc2Zvcm0nLCBpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScsICd0cmFuc2xhdGVYKDBweCknKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmb3J3YXJkIGRpcmVjdGlvbiwgZW50ZXJpbmcgcGFnZSBoYXMgYSBiYWNrIGJ1dHRvblxuICAgICAgICBpZiAoIWZvcndhcmQpIHtcbiAgICAgICAgICBlbnRlcmluZ0JhY2tCdXR0b24uZnJvbVRvKE9QQUNJVFksIDAuMDEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrQnV0dG9uRWwgJiYgIWZvcndhcmQpIHtcbiAgICAgICAgICBjb25zdCBlbnRlcmluZ0JhY2tCdG5UZXh0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgZW50ZXJpbmdCYWNrQnRuVGV4dC5hZGRFbGVtZW50KHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpKSAvLyBSRVZJRVdcbiAgICAgICAgICAuZnJvbVRvKGB0cmFuc2Zvcm1gLCBpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDBweCknIDogJ3RyYW5zbGF0ZVgoMTAwcHgpJywgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICAgICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oZW50ZXJpbmdCYWNrQnRuVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcbiAgICBpZiAobGVhdmluZ0VsKSB7XG4gICAgICBjb25zdCBsZWF2aW5nQ29udGVudCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgY29uc3QgbGVhdmluZ0NvbnRlbnRFbCA9IGxlYXZpbmdFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiBpb24tY29udGVudCcpO1xuICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJFbHMgPSBsZWF2aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gaW9uLWhlYWRlciA+IGlvbi10b29sYmFyJyk7XG4gICAgICBjb25zdCBsZWF2aW5nSGVhZGVyRWxzID0gbGVhdmluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGlvbi1oZWFkZXIgPiAqOm5vdChpb24tdG9vbGJhciksIDpzY29wZSA+IGlvbi1mb290ZXIgPiAqJyk7XG4gICAgICBpZiAoIWxlYXZpbmdDb250ZW50RWwgJiYgbGVhdmluZ1Rvb2xCYXJFbHMubGVuZ3RoID09PSAwICYmIGxlYXZpbmdIZWFkZXJFbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxlYXZpbmdDb250ZW50LmFkZEVsZW1lbnQobGVhdmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKSk7IC8vIFJFVklFV1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkRWxlbWVudChsZWF2aW5nQ29udGVudEVsKTsgLy8gUkVWSUVXXG4gICAgICAgIGxlYXZpbmdDb250ZW50LmFkZEVsZW1lbnQobGVhdmluZ0hlYWRlckVscyk7XG4gICAgICB9XG4gICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihsZWF2aW5nQ29udGVudCk7XG4gICAgICBpZiAoYmFja0RpcmVjdGlvbikge1xuICAgICAgICAvLyBsZWF2aW5nIGNvbnRlbnQsIGJhY2sgZGlyZWN0aW9uXG4gICAgICAgIGxlYXZpbmdDb250ZW50LmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCwgaXNSVEwgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMTAwJSknKTtcbiAgICAgICAgY29uc3QgbGVhdmluZ1BhZ2UgPSBnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpO1xuICAgICAgICByb290QW5pbWF0aW9uLmFmdGVyQWRkV3JpdGUoKCkgPT4ge1xuICAgICAgICAgIGlmIChyb290QW5pbWF0aW9uLmdldERpcmVjdGlvbigpID09PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgbGVhdmluZ1BhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBsZWF2aW5nIGNvbnRlbnQsIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgIGxlYXZpbmdDb250ZW50LmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWApLmZyb21UbyhPUEFDSVRZLCAxLCBPRkZfT1BBQ0lUWSk7XG4gICAgICB9XG4gICAgICBpZiAobGVhdmluZ0NvbnRlbnRFbCkge1xuICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsID0gc2hhZG93KGxlYXZpbmdDb250ZW50RWwpLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWVmZmVjdCcpO1xuICAgICAgICBpZiAobGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbCkge1xuICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uQ292ZXJFbCA9IGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0RWwucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY292ZXInKTtcbiAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvd0VsID0gbGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1zaGFkb3cnKTtcbiAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uQ292ZXIgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvdyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgIGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0LmFkZEVsZW1lbnQobGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbCkuYmVmb3JlU3R5bGVzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9KS5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAnJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25Db3Zlci5hZGRFbGVtZW50KGxlYXZpbmdUcmFuc2l0aW9uQ292ZXJFbCkgLy8gUkVWSUVXXG4gICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXSkuZnJvbVRvKE9QQUNJVFksIDAuMSwgMCk7XG4gICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25TaGFkb3cuYWRkRWxlbWVudChsZWF2aW5nVHJhbnNpdGlvblNoYWRvd0VsKSAvLyBSRVZJRVdcbiAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKS5mcm9tVG8oT1BBQ0lUWSwgMC43LCAwLjAzKTtcbiAgICAgICAgICBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdC5hZGRBbmltYXRpb24oW2xlYXZpbmdUcmFuc2l0aW9uQ292ZXIsIGxlYXZpbmdUcmFuc2l0aW9uU2hhZG93XSk7XG4gICAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkQW5pbWF0aW9uKFtsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZWF2aW5nVG9vbEJhckVscy5mb3JFYWNoKGxlYXZpbmdUb29sQmFyRWwgPT4ge1xuICAgICAgICBjb25zdCBsZWF2aW5nVG9vbEJhciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRFbGVtZW50KGxlYXZpbmdUb29sQmFyRWwpO1xuICAgICAgICBjb25zdCBsZWF2aW5nVGl0bGUgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgbGVhdmluZ1RpdGxlLmFkZEVsZW1lbnQobGVhdmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yKCdpb24tdGl0bGUnKSk7IC8vIFJFVklFV1xuICAgICAgICBjb25zdCBsZWF2aW5nVG9vbEJhckJ1dHRvbnMgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGxlYXZpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMsW21lbnVUb2dnbGVdJyk7XG4gICAgICAgIGNvbnN0IHBhcmVudEhlYWRlciA9IGxlYXZpbmdUb29sQmFyRWwuY2xvc2VzdCgnaW9uLWhlYWRlcicpO1xuICAgICAgICBjb25zdCBpbmFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciA9PT0gbnVsbCB8fCBwYXJlbnRIZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBidXR0b25zVG9BbmltYXRlID0gQXJyYXkuZnJvbShidXR0b25zKS5maWx0ZXIoYnV0dG9uID0+IHtcbiAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlQnV0dG9uID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9ucy1jb2xsYXBzZScpO1xuICAgICAgICAgIHJldHVybiBpc0NvbGxhcHNlQnV0dG9uICYmICFpbmFjdGl2ZUhlYWRlciB8fCAhaXNDb2xsYXBzZUJ1dHRvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIGxlYXZpbmdUb29sQmFyQnV0dG9ucy5hZGRFbGVtZW50KGJ1dHRvbnNUb0FuaW1hdGUpO1xuICAgICAgICBjb25zdCBsZWF2aW5nVG9vbEJhckl0ZW1zID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFySXRlbUVscyA9IGxlYXZpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKjpub3QoaW9uLXRpdGxlKTpub3QoaW9uLWJ1dHRvbnMpOm5vdChbbWVudVRvZ2dsZV0pJyk7XG4gICAgICAgIGlmIChsZWF2aW5nVG9vbEJhckl0ZW1FbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxlYXZpbmdUb29sQmFySXRlbXMuYWRkRWxlbWVudChsZWF2aW5nVG9vbEJhckl0ZW1FbHMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFyQmcgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgbGVhdmluZ1Rvb2xCYXJCZy5hZGRFbGVtZW50KHNoYWRvdyhsZWF2aW5nVG9vbEJhckVsKS5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJykpOyAvLyBSRVZJRVdcbiAgICAgICAgY29uc3QgbGVhdmluZ0JhY2tCdXR0b24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbkVsID0gbGVhdmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFjay1idXR0b24nKTtcbiAgICAgICAgaWYgKGJhY2tCdXR0b25FbCkge1xuICAgICAgICAgIGxlYXZpbmdCYWNrQnV0dG9uLmFkZEVsZW1lbnQoYmFja0J1dHRvbkVsKTtcbiAgICAgICAgfVxuICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRBbmltYXRpb24oW2xlYXZpbmdUaXRsZSwgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLCBsZWF2aW5nVG9vbEJhckl0ZW1zLCBsZWF2aW5nQmFja0J1dHRvbiwgbGVhdmluZ1Rvb2xCYXJCZ10pO1xuICAgICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihsZWF2aW5nVG9vbEJhcik7XG4gICAgICAgIC8vIGZhZGUgb3V0IGxlYXZpbmcgdG9vbGJhciBpdGVtc1xuICAgICAgICBsZWF2aW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWSwgMC45OSwgMCk7XG4gICAgICAgIGxlYXZpbmdUb29sQmFyQnV0dG9ucy5mcm9tVG8oT1BBQ0lUWSwgMC45OSwgMCk7XG4gICAgICAgIGxlYXZpbmdUb29sQmFySXRlbXMuZnJvbVRvKE9QQUNJVFksIDAuOTksIDApO1xuICAgICAgICBpZiAoYmFja0RpcmVjdGlvbikge1xuICAgICAgICAgIGlmICghaW5hY3RpdmVIZWFkZXIpIHtcbiAgICAgICAgICAgIC8vIGxlYXZpbmcgdG9vbGJhciwgYmFjayBkaXJlY3Rpb25cbiAgICAgICAgICAgIGxlYXZpbmdUaXRsZS5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgIGxlYXZpbmdUb29sQmFyQmcuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFksICd0cmFuc2Zvcm0nXSk7XG4gICAgICAgICAgLy8gbGVhdmluZyB0b29sYmFyLCBiYWNrIGRpcmVjdGlvbiwgYW5kIHRoZXJlJ3Mgbm8gZW50ZXJpbmcgdG9vbGJhclxuICAgICAgICAgIC8vIHNob3VsZCBqdXN0IHNsaWRlIG91dCwgbm8gZmFkaW5nIG91dFxuICAgICAgICAgIGNvbnN0IHRyYW5zbHVjZW50SGVhZGVyID0gcGFyZW50SGVhZGVyID09PSBudWxsIHx8IHBhcmVudEhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50SGVhZGVyLnRyYW5zbHVjZW50O1xuICAgICAgICAgIGlmICghdHJhbnNsdWNlbnRIZWFkZXIpIHtcbiAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQmcuZnJvbVRvKE9QQUNJVFksICd2YXIoLS1vcGFjaXR5KScsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZWF2aW5nVG9vbEJhckJnLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMHB4KScsIGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiYWNrQnV0dG9uRWwgJiYgIWJhY2t3YXJkKSB7XG4gICAgICAgICAgICBjb25zdCBsZWF2aW5nQmFja0J0blRleHQgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIGxlYXZpbmdCYWNrQnRuVGV4dC5hZGRFbGVtZW50KHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpKSAvLyBSRVZJRVdcbiAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWCgkeyhpc1JUTCA/IC0xMjQgOiAxMjQpICsgJ3B4J30pYCk7XG4gICAgICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRBbmltYXRpb24obGVhdmluZ0JhY2tCdG5UZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbGVhdmluZyB0b29sYmFyLCBmb3J3YXJkIGRpcmVjdGlvblxuICAgICAgICAgIGlmICghaW5hY3RpdmVIZWFkZXIpIHtcbiAgICAgICAgICAgIGxlYXZpbmdUaXRsZS5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgKS5mcm9tVG8oT1BBQ0lUWSwgMC45OSwgMCkuYWZ0ZXJDbGVhclN0eWxlcyhbVFJBTlNGT1JNLCBPUEFDSVRZXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlYXZpbmdUb29sQmFySXRlbXMuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCwgYHRyYW5zbGF0ZVgoJHtPRkZfTEVGVH0pYCkuYWZ0ZXJDbGVhclN0eWxlcyhbVFJBTlNGT1JNLCBPUEFDSVRZXSk7XG4gICAgICAgICAgbGVhdmluZ0JhY2tCdXR0b24uYWZ0ZXJDbGVhclN0eWxlcyhbT1BBQ0lUWV0pO1xuICAgICAgICAgIGxlYXZpbmdUaXRsZS5hZnRlckNsZWFyU3R5bGVzKFtPUEFDSVRZXSk7XG4gICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLmFmdGVyQ2xlYXJTdHlsZXMoW09QQUNJVFldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByb290QW5pbWF0aW9uO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn07XG4vKipcbiAqIFRoZSBzY2FsZSBvZiB0aGUgYmFjayBidXR0b24gZHVyaW5nIHRoZSBhbmltYXRpb25cbiAqIGlzIGNvbXB1dGVkIGJhc2VkIG9uIHRoZSBzY2FsZSBvZiB0aGUgbGFyZ2UgdGl0bGVcbiAqIGFuZCB2aWNlIHZlcnNhLiBIb3dldmVyLCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHNsaWdodFxuICogdmFyaWF0aW9ucyBpbiB0aGUgc2l6ZSBvZiB0aGUgbGFyZ2UgdGl0bGUgZHVlIHRvXG4gKiBwYWRkaW5nIGFuZCBmb250IHdlaWdodC4gVGhpcyB2YWx1ZSBzaG91bGQgYmUgdXNlZCB0byBzdWJ0cmFjdFxuICogYSBzbWFsbCBhbW91bnQgZnJvbSB0aGUgbGFyZ2UgdGl0bGUgaGVpZ2h0IHdoZW4gY29tcHV0aW5nIHNjYWxlc1xuICogdG8gZ2V0IG1vcmUgYWNjdXJhdGUgc2NhbGUgcmVzdWx0cy5cbiAqL1xuY29uc3QgTEFSR0VfVElUTEVfU0laRV9PRkZTRVQgPSAxMDtcbmV4cG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24sIHNoYWRvdyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsSUFBTSxXQUFXO0FBRWpCLElBQU0sbUJBQW1CLGFBQVc7QUFDbEMsU0FBTyxTQUFTLGNBQWMsR0FBRyxPQUFPLHFCQUFxQjtBQUMvRDtBQUNBLElBQU0sU0FBUyxRQUFNO0FBQ25CLFNBQU8sR0FBRyxjQUFjO0FBQzFCO0FBQ0EsSUFBTSxnQkFBZ0IsV0FBUztBQUM3QixRQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsUUFBUSxNQUFNLGNBQWMsVUFBVTtBQUNsRixRQUFNLFFBQVE7QUFDZCxNQUFJLFFBQVEsTUFBTTtBQUNoQixVQUFNLFlBQVksS0FBSyxjQUFjLDJEQUEyRDtBQUNoRyxXQUFPLGFBQWEsT0FBTyxVQUFVLGNBQWMsS0FBSyxJQUFJO0FBQUEsRUFDOUQ7QUFDQSxTQUFPLE1BQU0sY0FBYyxLQUFLO0FBQ2xDO0FBQ0EsSUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLGtCQUFrQjtBQUM5QyxRQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsUUFBUSxNQUFNLGNBQWMsVUFBVTtBQUNsRixNQUFJLGNBQWMsQ0FBQztBQUNuQixNQUFJLFFBQVEsTUFBTTtBQUNoQixVQUFNLFlBQVksS0FBSyxjQUFjLDJEQUEyRDtBQUNoRyxRQUFJLGFBQWEsTUFBTTtBQUNyQixvQkFBYyxVQUFVLGlCQUFpQixhQUFhO0FBQUEsSUFDeEQ7QUFBQSxFQUNGLE9BQU87QUFDTCxrQkFBYyxNQUFNLGlCQUFpQixhQUFhO0FBQUEsRUFDcEQ7QUFDQSxhQUFXLFdBQVcsYUFBYTtBQUNqQyxVQUFNLGVBQWUsUUFBUSxRQUFRLFlBQVk7QUFDakQsVUFBTSxlQUFlLGdCQUFnQixDQUFDLGFBQWEsVUFBVSxTQUFTLG1DQUFtQztBQUN6RyxVQUFNLGFBQWEsUUFBUSxjQUFjLGlCQUFpQjtBQUMxRCxVQUFNLGtCQUFrQixRQUFRLFVBQVUsU0FBUyxrQkFBa0I7QUFDckUsVUFBTSxZQUFZLFFBQVEsU0FBUyxXQUFXLFFBQVEsU0FBUztBQUMvRCxRQUFJLGVBQWUsUUFBUSxjQUFjLG1CQUFtQixnQkFBZ0IsaUJBQWlCLENBQUMsa0JBQWtCO0FBQzlHLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUNBLElBQU0sNkJBQTZCLENBQUMsZUFBZSxLQUFLLGVBQWUsWUFBWSxjQUFjO0FBQy9GLFFBQU0scUJBQXFCLGNBQWMsWUFBWSxhQUFhO0FBQ2xFLFFBQU0sb0JBQW9CLGNBQWMsU0FBUztBQUNqRCxRQUFNLHFCQUFxQixjQUFjLFVBQVU7QUFDbkQsUUFBTSxvQkFBb0IsY0FBYyxXQUFXLGFBQWE7QUFDaEUsUUFBTSx5QkFBeUIsdUJBQXVCLFFBQVEsc0JBQXNCLFFBQVEsQ0FBQztBQUM3RixRQUFNLDBCQUEwQix1QkFBdUIsUUFBUSxzQkFBc0IsUUFBUTtBQUM3RixNQUFJLHdCQUF3QjtBQUMxQixVQUFNLHVCQUF1QixrQkFBa0Isc0JBQXNCO0FBQ3JFLFVBQU0sd0JBQXdCLG1CQUFtQixzQkFBc0I7QUFDdkUsVUFBTSwyQkFBMkIsT0FBTyxrQkFBa0IsRUFBRSxjQUFjLGNBQWM7QUFFeEYsVUFBTSw0QkFBNEIsNkJBQTZCLFFBQVEsNkJBQTZCLFNBQVMsU0FBUyx5QkFBeUIsc0JBQXNCO0FBQ3JLLFVBQU0sMEJBQTBCLE9BQU8saUJBQWlCLEVBQUUsY0FBYyxnQkFBZ0I7QUFDeEYsVUFBTSwyQkFBMkIsd0JBQXdCLHNCQUFzQjtBQUMvRSxzQkFBa0IsZUFBZSxLQUFLLGVBQWUsbUJBQW1CLHNCQUFzQiwwQkFBMEIsdUJBQXVCLDBCQUEwQix5QkFBeUI7QUFDbE0sc0JBQWtCLGVBQWUsS0FBSyxlQUFlLG9CQUFvQix1QkFBdUIsMEJBQTBCLDJCQUEyQixtQkFBbUIsd0JBQXdCO0FBQUEsRUFDbE0sV0FBVyx5QkFBeUI7QUFDbEMsVUFBTSx3QkFBd0IsbUJBQW1CLHNCQUFzQjtBQUN2RSxVQUFNLHVCQUF1QixrQkFBa0Isc0JBQXNCO0FBQ3JFLFVBQU0sMEJBQTBCLE9BQU8saUJBQWlCLEVBQUUsY0FBYyxjQUFjO0FBRXRGLFVBQU0sMkJBQTJCLDRCQUE0QixRQUFRLDRCQUE0QixTQUFTLFNBQVMsd0JBQXdCLHNCQUFzQjtBQUNqSyxVQUFNLDJCQUEyQixPQUFPLGtCQUFrQixFQUFFLGNBQWMsZ0JBQWdCO0FBQzFGLFVBQU0sNEJBQTRCLHlCQUF5QixzQkFBc0I7QUFDakYsc0JBQWtCLGVBQWUsS0FBSyxlQUFlLG9CQUFvQix1QkFBdUIsMkJBQTJCLHNCQUFzQix5QkFBeUIsd0JBQXdCO0FBQ2xNLHNCQUFrQixlQUFlLEtBQUssZUFBZSxtQkFBbUIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLHlCQUF5QjtBQUFBLEVBQ2hNO0FBQ0EsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLEVBQ1o7QUFDRjtBQUNBLElBQU0sb0JBQW9CLENBQUMsZUFBZSxLQUFLLGVBQWUsY0FBYyxlQUFlLGtCQUFrQixtQkFBbUIsY0FBYyxzQkFBc0I7QUFDbEssTUFBSSxJQUFJO0FBQ1IsUUFBTSwyQkFBMkIsTUFBTSxlQUFlLGNBQWMsUUFBUSxDQUFDLFFBQVEsR0FBRyxjQUFjLE9BQU8sQ0FBQztBQUM5RyxRQUFNLGdCQUFnQixNQUFNLFVBQVU7QUFDdEMsUUFBTSxnQkFBZ0IsTUFBTSxTQUFTO0FBQ3JDLFFBQU0scUJBQXFCLE1BQU0sVUFBVTtBQUMzQyxNQUFJLGNBQWM7QUFDbEIsTUFBSSxlQUFlO0FBQ25CLE1BQUksbUJBQW1CLFNBQVMsWUFBWTtBQUM1QyxRQUFNLGlCQUFpQjtBQUN2QixNQUFJLG9CQUFvQixtQkFBbUI7QUFRekMsVUFBTSwrQkFBK0IsS0FBSyxpQkFBaUIsaUJBQWlCLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxLQUFLLFNBQVMsS0FBSyxhQUFhLGlCQUFpQixRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsS0FBSztBQUMxTSxrQkFBYyxrQkFBa0IsUUFBUSxrQkFBa0I7QUFLMUQsb0JBQWdCLGtCQUFrQixTQUFTLDJCQUEyQixrQkFBa0I7QUFLeEYsdUJBQW1CLDZCQUE2QixTQUFTLFdBQVcsS0FBSyxZQUFZLE1BQU0sU0FBUyxZQUFZO0FBQUEsRUFDbEg7QUFDQSxRQUFNLG1CQUFtQixPQUFPLFlBQVksRUFBRSxjQUFjLFVBQVU7QUFDdEUsUUFBTSxvQkFBb0IsaUJBQWlCLHNCQUFzQjtBQU9qRSxRQUFNLDhCQUE4QixNQUFNLEdBQUcsa0JBQWtCLFFBQVEsS0FBSyxrQkFBa0IsUUFBUSxjQUFjLE1BQU0sT0FBTyxHQUFHLGNBQWMsT0FBTyxrQkFBa0IsUUFBUSxDQUFDO0FBQ3BMLFFBQU0sNEJBQTRCLE1BQU0sSUFBSSxPQUFPLGFBQWEsY0FBYyxLQUFLLE9BQU8sR0FBRyxjQUFjLElBQUk7QUFPL0csUUFBTSw4QkFBOEIsR0FBRyxrQkFBa0IsR0FBRztBQU01RCxRQUFNLDRCQUE0QixHQUFHLGNBQWMsR0FBRztBQVF0RCxRQUFNLDhCQUE4QixDQUFDO0FBQUEsSUFDbkMsUUFBUTtBQUFBLElBQ1IsV0FBVyxlQUFlLDJCQUEyQixLQUFLLDJCQUEyQjtBQUFBLEVBQ3ZGLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFdBQVcsZUFBZSx5QkFBeUIsS0FBSyx5QkFBeUI7QUFBQSxFQUNuRixDQUFDO0FBQ0QsUUFBTSwrQkFBK0IsQ0FBQztBQUFBLElBQ3BDLFFBQVE7QUFBQSxJQUNSLFdBQVcsZUFBZSx5QkFBeUIsS0FBSyx5QkFBeUI7QUFBQSxFQUNuRixHQUFHO0FBQUEsSUFDRCxRQUFRO0FBQUEsSUFDUixXQUFXLGVBQWUsMkJBQTJCLEtBQUssMkJBQTJCO0FBQUEsRUFDdkYsQ0FBQztBQUNELFFBQU0sc0JBQXNCLGdCQUFnQiwrQkFBK0I7QUFRM0UsUUFBTSx5QkFBeUIsQ0FBQztBQUFBLElBQzlCLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLENBQUM7QUFDRCxRQUFNLDBCQUEwQixDQUFDO0FBQUEsSUFDL0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUNELFFBQU0saUJBQWlCLGdCQUFnQiwwQkFBMEI7QUFPakUsUUFBTSx5QkFBeUIsQ0FBQztBQUFBLElBQzlCLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLENBQUM7QUFDRCxRQUFNLDBCQUEwQixDQUFDO0FBQUEsSUFDL0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUNELFFBQU0saUJBQWlCLGdCQUFnQiwwQkFBMEI7QUFDakUsUUFBTSxrQ0FBa0MsZ0JBQWdCO0FBQ3hELFFBQU0sa0NBQWtDLGdCQUFnQjtBQUN4RCxRQUFNLDhCQUE4QixnQkFBZ0I7QUFDcEQsUUFBTSxxQkFBcUIsaUJBQWlCLGlCQUFpQjtBQUM3RCxRQUFNLHlCQUF5QixPQUFPLGtCQUFrQixFQUFFLGNBQWMsY0FBYztBQUN0RixRQUFNLHlCQUF5QixPQUFPLGtCQUFrQixFQUFFLGNBQWMsVUFBVTtBQUNsRixxQkFBbUIsT0FBTyxhQUFhO0FBQ3ZDLHFCQUFtQixPQUFPLGFBQWE7QUFDdkMscUJBQW1CLE9BQU8sYUFBYTtBQUN2QyxxQkFBbUIsUUFBUSxhQUFhO0FBQ3hDLHFCQUFtQixXQUFXLGFBQWE7QUFDM0MscUJBQW1CLE1BQU0sWUFBWSxXQUFXLE9BQU87QUFDdkQscUJBQW1CLE1BQU0sWUFBWSxZQUFZLE9BQU87QUFDeEQsa0NBQWdDLFdBQVcsc0JBQXNCO0FBQ2pFLGtDQUFnQyxXQUFXLHNCQUFzQjtBQUNqRSw4QkFBNEIsV0FBVyxrQkFBa0I7QUFDekQsOEJBQTRCLGFBQWE7QUFBQSxJQUN2QyxVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxDQUFDLGtCQUFrQixHQUFHO0FBQUEsRUFDeEIsQ0FBQyxFQUtHLGVBQWUsTUFBTTtBQUN2QixpQkFBYSxNQUFNLFlBQVksV0FBVyxNQUFNO0FBQ2hELHVCQUFtQixNQUFNLFlBQVksZUFBZSx3QkFBd0I7QUFBQSxFQUM5RSxDQUFDLEVBQUUsY0FBYyxNQUFNO0FBQ3JCLGlCQUFhLE1BQU0sWUFBWSxXQUFXLEVBQUU7QUFDNUMsdUJBQW1CLE1BQU0sWUFBWSxXQUFXLE1BQU07QUFDdEQsdUJBQW1CLE1BQU0sZUFBZSxhQUFhO0FBQUEsRUFDdkQsQ0FBQyxFQUFFLFVBQVUsbUJBQW1CO0FBQ2hDLGtDQUFnQyxhQUFhO0FBQUEsSUFDM0Msb0JBQW9CLEdBQUcsYUFBYTtBQUFBLEVBQ3RDLENBQUMsRUFBRSxVQUFVLGNBQWM7QUFDM0Isa0NBQWdDLGFBQWE7QUFBQSxJQUMzQyxvQkFBb0IsR0FBRyxhQUFhO0FBQUEsRUFDdEMsQ0FBQyxFQUFFLFVBQVUsY0FBYztBQUMzQixnQkFBYyxhQUFhLENBQUMsaUNBQWlDLGlDQUFpQywyQkFBMkIsQ0FBQztBQUM1SDtBQUNBLElBQU0sb0JBQW9CLENBQUMsZUFBZSxLQUFLLGVBQWUsY0FBYyxlQUFlLG1CQUFtQixlQUFlLGtCQUFrQixzQkFBc0I7QUFDbkssTUFBSSxJQUFJO0FBSVIsUUFBTSxXQUFXLE1BQU0sVUFBVTtBQUNqQyxRQUFNLHFCQUFxQixNQUFNLGVBQWUsY0FBYyxLQUFLLFFBQVEsR0FBRyxjQUFjLElBQUk7QUFNaEcsUUFBTSxvQkFBb0I7QUFDMUIsUUFBTSxvQkFBb0IsR0FBRyxjQUFjLEdBQUc7QUFNOUMsUUFBTSxpQ0FBaUM7QUFDdkMsTUFBSSxrQkFBa0IsTUFBTSxJQUFJLE9BQU8sYUFBYSxjQUFjLFFBQVEsOEJBQThCLE9BQU8sR0FBRyxjQUFjLElBQUksOEJBQThCO0FBSWxLLE1BQUksZUFBZTtBQUluQixRQUFNLGNBQWM7QUFNcEIsTUFBSSxZQUFZLFNBQVMsWUFBWTtBQUVyQyxNQUFJLG9CQUFvQixtQkFBbUI7QUFRekMsc0JBQWtCLE1BQU0sSUFBSSxPQUFPLGFBQWEsa0JBQWtCLFFBQVEsOEJBQThCLE9BQU8sR0FBRyxrQkFBa0IsSUFBSSw4QkFBOEI7QUFpQnRLLFVBQU0sK0JBQStCLEtBQUssaUJBQWlCLGlCQUFpQixRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsS0FBSyxTQUFTLEtBQUssYUFBYSxpQkFBaUIsUUFBUSxPQUFPLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFDMU0sVUFBTSxjQUFjLGtCQUFrQixRQUFRLGtCQUFrQjtBQUNoRSxtQkFBZSxrQkFBa0IsVUFBVSxrQkFBa0IsU0FBUztBQUt0RSxnQkFBWSw2QkFBNkIsU0FBUyxXQUFXLEtBQUssWUFBWSxNQUFNLFNBQVMsWUFBWTtBQUFBLEVBQzNHO0FBS0EsUUFBTSxxQkFBcUIsY0FBYyxNQUFNLGNBQWMsU0FBUztBQUN0RSxRQUFNLGdCQUFnQixjQUFjLFNBQVMsZUFBZTtBQUM1RCxRQUFNLGtCQUFrQixHQUFHLHFCQUFxQixhQUFhO0FBQzdELFFBQU0sc0JBQXNCLENBQUM7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxXQUFXLGVBQWUsZUFBZSxLQUFLLGVBQWUsUUFBUSxTQUFTO0FBQUEsRUFDaEYsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVyxlQUFlLGlCQUFpQixLQUFLLGlCQUFpQixRQUFRLFdBQVc7QUFBQSxFQUN0RixDQUFDO0FBQ0QsUUFBTSxxQkFBcUIsQ0FBQztBQUFBLElBQzFCLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVcsZUFBZSxpQkFBaUIsS0FBSyxpQkFBaUIsUUFBUSxXQUFXO0FBQUEsRUFDdEYsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1gsR0FBRztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsV0FBVyxlQUFlLGVBQWUsS0FBSyxlQUFlLFFBQVEsU0FBUztBQUFBLEVBQ2hGLENBQUM7QUFDRCxRQUFNLFlBQVksZ0JBQWdCLHNCQUFzQjtBQUN4RCxRQUFNLGdCQUFnQixpQkFBaUIsV0FBVztBQUNsRCxRQUFNLDRCQUE0QixnQkFBZ0I7QUFDbEQsZ0JBQWMsWUFBWSxhQUFhO0FBQ3ZDLGdCQUFjLE9BQU8sYUFBYTtBQUNsQyxnQkFBYyxRQUFRLGFBQWE7QUFDbkMsNEJBQTBCLFdBQVcsYUFBYTtBQUNsRCw0QkFBMEIsYUFBYTtBQUFBLElBQ3JDLG9CQUFvQixHQUFHLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU8vQixRQUFRLEdBQUcsY0FBYyxNQUFNO0FBQUEsSUFDL0IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsQ0FBQyxRQUFRLEdBQUc7QUFBQSxFQUNkLENBQUMsRUFBRSxlQUFlLE1BQU07QUFDdEIsaUJBQWEsTUFBTSxZQUFZLFdBQVcsR0FBRztBQUFBLEVBQy9DLENBQUMsRUFBRSxjQUFjLE1BQU07QUFDckIsaUJBQWEsTUFBTSxZQUFZLFdBQVcsRUFBRTtBQUM1QyxrQkFBYyxNQUFNLFlBQVksV0FBVyxNQUFNO0FBQUEsRUFDbkQsQ0FBQyxFQUFFLFVBQVUsU0FBUztBQUN0QixnQkFBYyxhQUFhLHlCQUF5QjtBQUN0RDtBQUNBLElBQU0seUJBQXlCLENBQUMsT0FBTyxTQUFTO0FBQzlDLE1BQUk7QUFDSixNQUFJO0FBQ0YsVUFBTSxTQUFTO0FBQ2YsVUFBTSxVQUFVO0FBQ2hCLFVBQU0sWUFBWTtBQUNsQixVQUFNLFNBQVM7QUFDZixVQUFNLGNBQWM7QUFDcEIsVUFBTSxRQUFRLE1BQU0sY0FBYyxRQUFRO0FBQzFDLFVBQU0sWUFBWSxRQUFRLFdBQVc7QUFDckMsVUFBTSxXQUFXLFFBQVEsUUFBUTtBQUNqQyxVQUFNLGFBQWEsS0FBSztBQUN4QixVQUFNLFlBQVksS0FBSztBQUN2QixVQUFNLGdCQUFnQixLQUFLLGNBQWM7QUFDekMsVUFBTSxZQUFZLFdBQVcsY0FBYyxzQkFBc0I7QUFDakUsVUFBTSxZQUFZLFdBQVcsaUJBQWlCLG1FQUFtRTtBQUNqSCxVQUFNLHFCQUFxQixXQUFXLGlCQUFpQixtQ0FBbUM7QUFDMUYsVUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQ3RDLFVBQU0sMkJBQTJCLGdCQUFnQjtBQUNqRCxrQkFBYyxXQUFXLFVBQVUsRUFBRSxXQUFXLEtBQUssS0FBSyxjQUFjLFFBQVEsT0FBTyxTQUFTLEtBQUssTUFBTSxRQUFRLEVBQUUsT0FBTyxLQUFLLFVBQVUsTUFBTSxFQUFFLEtBQUssTUFBTSxFQUFFLGtCQUFrQixvQkFBb0I7QUFFdE0sUUFBSSxhQUFhLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDdEQsWUFBTSxvQkFBb0IsZ0JBQWdCO0FBQzFDLHdCQUFrQixXQUFXLEtBQUs7QUFDbEMsb0JBQWMsYUFBYSxpQkFBaUI7QUFBQSxJQUM5QztBQUNBLFFBQUksQ0FBQyxhQUFhLG1CQUFtQixXQUFXLEtBQUssVUFBVSxXQUFXLEdBQUc7QUFDM0UsK0JBQXlCLFdBQVcsV0FBVyxjQUFjLHlEQUF5RCxDQUFDO0FBQUEsSUFDekgsT0FBTztBQUNMLCtCQUF5QixXQUFXLFNBQVM7QUFDN0MsK0JBQXlCLFdBQVcsU0FBUztBQUFBLElBQy9DO0FBQ0Esa0JBQWMsYUFBYSx3QkFBd0I7QUFDbkQsUUFBSSxlQUFlO0FBQ2pCLCtCQUF5QixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLGFBQWEsY0FBYyxRQUFRLEtBQUssY0FBYyxNQUFNLEdBQUcsRUFBRSxPQUFPLFNBQVMsYUFBYSxDQUFDO0FBQUEsSUFDOUosT0FBTztBQUVMLCtCQUF5QixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLGFBQWEsY0FBYyxTQUFTLEtBQUssY0FBYyxNQUFNLEdBQUc7QUFBQSxJQUMvSDtBQUNBLFFBQUksV0FBVztBQUNiLFlBQU0sNkJBQTZCLE9BQU8sU0FBUyxFQUFFLGNBQWMsb0JBQW9CO0FBQ3ZGLFVBQUksNEJBQTRCO0FBQzlCLGNBQU0sNEJBQTRCLDJCQUEyQixjQUFjLG1CQUFtQjtBQUM5RixjQUFNLDZCQUE2QiwyQkFBMkIsY0FBYyxvQkFBb0I7QUFDaEcsY0FBTSwyQkFBMkIsZ0JBQWdCO0FBQ2pELGNBQU0sMEJBQTBCLGdCQUFnQjtBQUNoRCxjQUFNLDJCQUEyQixnQkFBZ0I7QUFDakQsaUNBQXlCLFdBQVcsMEJBQTBCLEVBQUUsYUFBYTtBQUFBLFVBQzNFLFNBQVM7QUFBQSxVQUNULFNBQVM7QUFBQSxRQUNYLENBQUMsRUFBRSxZQUFZO0FBQUEsVUFDYixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQ0QsZ0NBQXdCLFdBQVcseUJBQXlCLEVBQzNELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBUyxHQUFHLEdBQUc7QUFDcEQsaUNBQXlCLFdBQVcsMEJBQTBCLEVBQzdELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBUyxNQUFNLEdBQUc7QUFDdkQsaUNBQXlCLGFBQWEsQ0FBQyx5QkFBeUIsd0JBQXdCLENBQUM7QUFDekYsaUNBQXlCLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUFBLE1BQ2xFO0FBQUEsSUFDRjtBQUNBLFVBQU0sK0JBQStCLFdBQVcsY0FBYyxxQ0FBcUM7QUFDbkcsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJLDJCQUEyQixlQUFlLE9BQU8sZUFBZSxZQUFZLFNBQVM7QUFDekYsdUJBQW1CLFFBQVEsdUJBQXFCO0FBQzlDLFlBQU0sa0JBQWtCLGdCQUFnQjtBQUN4QyxzQkFBZ0IsV0FBVyxpQkFBaUI7QUFDNUMsb0JBQWMsYUFBYSxlQUFlO0FBQzFDLFlBQU0sZ0JBQWdCLGdCQUFnQjtBQUN0QyxvQkFBYyxXQUFXLGtCQUFrQixjQUFjLFdBQVcsQ0FBQztBQUNyRSxZQUFNLHlCQUF5QixnQkFBZ0I7QUFDL0MsWUFBTSxVQUFVLE1BQU0sS0FBSyxrQkFBa0IsaUJBQWlCLDBCQUEwQixDQUFDO0FBQ3pGLFlBQU0sZUFBZSxrQkFBa0IsUUFBUSxZQUFZO0FBQzNELFlBQU0saUJBQWlCLGlCQUFpQixRQUFRLGlCQUFpQixTQUFTLFNBQVMsYUFBYSxVQUFVLFNBQVMsbUNBQW1DO0FBQ3RKLFVBQUk7QUFDSixVQUFJLGVBQWU7QUFDakIsMkJBQW1CLFFBQVEsT0FBTyxZQUFVO0FBQzFDLGdCQUFNLG1CQUFtQixPQUFPLFVBQVUsU0FBUyxrQkFBa0I7QUFDckUsaUJBQU8sb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7QUFBQSxRQUNqRCxDQUFDO0FBQUEsTUFDSCxPQUFPO0FBQ0wsMkJBQW1CLFFBQVEsT0FBTyxZQUFVLENBQUMsT0FBTyxVQUFVLFNBQVMsa0JBQWtCLENBQUM7QUFBQSxNQUM1RjtBQUNBLDZCQUF1QixXQUFXLGdCQUFnQjtBQUNsRCxZQUFNLHVCQUF1QixnQkFBZ0I7QUFDN0MsMkJBQXFCLFdBQVcsa0JBQWtCLGlCQUFpQiw4REFBOEQsQ0FBQztBQUNsSSxZQUFNLG9CQUFvQixnQkFBZ0I7QUFDMUMsd0JBQWtCLFdBQVcsT0FBTyxpQkFBaUIsRUFBRSxjQUFjLHFCQUFxQixDQUFDO0FBQzNGLFlBQU0scUJBQXFCLGdCQUFnQjtBQUMzQyxZQUFNLGVBQWUsa0JBQWtCLGNBQWMsaUJBQWlCO0FBQ3RFLFVBQUksY0FBYztBQUNoQiwyQkFBbUIsV0FBVyxZQUFZO0FBQUEsTUFDNUM7QUFDQSxzQkFBZ0IsYUFBYSxDQUFDLGVBQWUsd0JBQXdCLHNCQUFzQixtQkFBbUIsa0JBQWtCLENBQUM7QUFDakksNkJBQXVCLE9BQU8sU0FBUyxNQUFNLENBQUM7QUFDOUMsMkJBQXFCLE9BQU8sU0FBUyxNQUFNLENBQUM7QUFDNUMsVUFBSSxlQUFlO0FBQ2pCLFlBQUksQ0FBQyxnQkFBZ0I7QUFDbkIsd0JBQWMsT0FBTyxhQUFhLGNBQWMsUUFBUSxLQUFLLGNBQWMsTUFBTSxHQUFHLEVBQUUsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUFBLFFBQy9HO0FBQ0EsNkJBQXFCLE9BQU8sYUFBYSxjQUFjLFFBQVEsS0FBSyxjQUFjLE1BQU0sR0FBRztBQUUzRiwyQkFBbUIsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUFBLE1BQzVDLE9BQU87QUFFTCxZQUFJLENBQUMsOEJBQThCO0FBQ2pDLHdCQUFjLE9BQU8sYUFBYSxjQUFjLFNBQVMsS0FBSyxjQUFjLE1BQU0sR0FBRyxFQUFFLE9BQU8sU0FBUyxNQUFNLENBQUM7QUFBQSxRQUNoSDtBQUNBLDZCQUFxQixPQUFPLGFBQWEsY0FBYyxTQUFTLEtBQUssY0FBYyxNQUFNLEdBQUc7QUFDNUYsMEJBQWtCLGtCQUFrQixDQUFDLFNBQVMsV0FBVyxDQUFDO0FBQzFELGNBQU0sb0JBQW9CLGlCQUFpQixRQUFRLGlCQUFpQixTQUFTLFNBQVMsYUFBYTtBQUNuRyxZQUFJLENBQUMsbUJBQW1CO0FBQ3RCLDRCQUFrQixPQUFPLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxRQUMxRCxPQUFPO0FBQ0wsNEJBQWtCLE9BQU8sYUFBYSxRQUFRLHNCQUFzQixvQkFBb0IsaUJBQWlCO0FBQUEsUUFDM0c7QUFFQSxZQUFJLENBQUMsU0FBUztBQUNaLDZCQUFtQixPQUFPLFNBQVMsTUFBTSxDQUFDO0FBQUEsUUFDNUM7QUFDQSxZQUFJLGdCQUFnQixDQUFDLFNBQVM7QUFDNUIsZ0JBQU0sc0JBQXNCLGdCQUFnQjtBQUM1Qyw4QkFBb0IsV0FBVyxPQUFPLFlBQVksRUFBRSxjQUFjLGNBQWMsQ0FBQyxFQUNoRixPQUFPLGFBQWEsUUFBUSx1QkFBdUIscUJBQXFCLGlCQUFpQjtBQUMxRiwwQkFBZ0IsYUFBYSxtQkFBbUI7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFFRCxRQUFJLFdBQVc7QUFDYixZQUFNLGlCQUFpQixnQkFBZ0I7QUFDdkMsWUFBTSxtQkFBbUIsVUFBVSxjQUFjLHNCQUFzQjtBQUN2RSxZQUFNLG9CQUFvQixVQUFVLGlCQUFpQixtQ0FBbUM7QUFDeEYsWUFBTSxtQkFBbUIsVUFBVSxpQkFBaUIsbUVBQW1FO0FBQ3ZILFVBQUksQ0FBQyxvQkFBb0Isa0JBQWtCLFdBQVcsS0FBSyxpQkFBaUIsV0FBVyxHQUFHO0FBQ3hGLHVCQUFlLFdBQVcsVUFBVSxjQUFjLHlEQUF5RCxDQUFDO0FBQUEsTUFDOUcsT0FBTztBQUNMLHVCQUFlLFdBQVcsZ0JBQWdCO0FBQzFDLHVCQUFlLFdBQVcsZ0JBQWdCO0FBQUEsTUFDNUM7QUFDQSxvQkFBYyxhQUFhLGNBQWM7QUFDekMsVUFBSSxlQUFlO0FBRWpCLHVCQUFlLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sYUFBYSxjQUFjLE1BQU0sS0FBSyxRQUFRLHNCQUFzQixrQkFBa0I7QUFDekksY0FBTSxjQUFjLGtCQUFrQixTQUFTO0FBQy9DLHNCQUFjLGNBQWMsTUFBTTtBQUNoQyxjQUFJLGNBQWMsYUFBYSxNQUFNLFVBQVU7QUFDN0Msd0JBQVksTUFBTSxZQUFZLFdBQVcsTUFBTTtBQUFBLFVBQ2pEO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSCxPQUFPO0FBRUwsdUJBQWUsT0FBTyxhQUFhLGNBQWMsTUFBTSxLQUFLLGNBQWMsUUFBUSxHQUFHLEVBQUUsT0FBTyxTQUFTLEdBQUcsV0FBVztBQUFBLE1BQ3ZIO0FBQ0EsVUFBSSxrQkFBa0I7QUFDcEIsY0FBTSw0QkFBNEIsT0FBTyxnQkFBZ0IsRUFBRSxjQUFjLG9CQUFvQjtBQUM3RixZQUFJLDJCQUEyQjtBQUM3QixnQkFBTSwyQkFBMkIsMEJBQTBCLGNBQWMsbUJBQW1CO0FBQzVGLGdCQUFNLDRCQUE0QiwwQkFBMEIsY0FBYyxvQkFBb0I7QUFDOUYsZ0JBQU0sMEJBQTBCLGdCQUFnQjtBQUNoRCxnQkFBTSx5QkFBeUIsZ0JBQWdCO0FBQy9DLGdCQUFNLDBCQUEwQixnQkFBZ0I7QUFDaEQsa0NBQXdCLFdBQVcseUJBQXlCLEVBQUUsYUFBYTtBQUFBLFlBQ3pFLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxVQUNYLENBQUMsRUFBRSxZQUFZO0FBQUEsWUFDYixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsVUFDWCxDQUFDO0FBQ0QsaUNBQXVCLFdBQVcsd0JBQXdCLEVBQ3pELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBUyxLQUFLLENBQUM7QUFDcEQsa0NBQXdCLFdBQVcseUJBQXlCLEVBQzNELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBUyxLQUFLLElBQUk7QUFDdkQsa0NBQXdCLGFBQWEsQ0FBQyx3QkFBd0IsdUJBQXVCLENBQUM7QUFDdEYseUJBQWUsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQUEsUUFDdkQ7QUFBQSxNQUNGO0FBQ0Esd0JBQWtCLFFBQVEsc0JBQW9CO0FBQzVDLGNBQU0saUJBQWlCLGdCQUFnQjtBQUN2Qyx1QkFBZSxXQUFXLGdCQUFnQjtBQUMxQyxjQUFNLGVBQWUsZ0JBQWdCO0FBQ3JDLHFCQUFhLFdBQVcsaUJBQWlCLGNBQWMsV0FBVyxDQUFDO0FBQ25FLGNBQU0sd0JBQXdCLGdCQUFnQjtBQUM5QyxjQUFNLFVBQVUsaUJBQWlCLGlCQUFpQiwwQkFBMEI7QUFDNUUsY0FBTSxlQUFlLGlCQUFpQixRQUFRLFlBQVk7QUFDMUQsY0FBTSxpQkFBaUIsaUJBQWlCLFFBQVEsaUJBQWlCLFNBQVMsU0FBUyxhQUFhLFVBQVUsU0FBUyxtQ0FBbUM7QUFDdEosY0FBTSxtQkFBbUIsTUFBTSxLQUFLLE9BQU8sRUFBRSxPQUFPLFlBQVU7QUFDNUQsZ0JBQU0sbUJBQW1CLE9BQU8sVUFBVSxTQUFTLGtCQUFrQjtBQUNyRSxpQkFBTyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUFBLFFBQ2pELENBQUM7QUFDRCw4QkFBc0IsV0FBVyxnQkFBZ0I7QUFDakQsY0FBTSxzQkFBc0IsZ0JBQWdCO0FBQzVDLGNBQU0sd0JBQXdCLGlCQUFpQixpQkFBaUIsOERBQThEO0FBQzlILFlBQUksc0JBQXNCLFNBQVMsR0FBRztBQUNwQyw4QkFBb0IsV0FBVyxxQkFBcUI7QUFBQSxRQUN0RDtBQUNBLGNBQU0sbUJBQW1CLGdCQUFnQjtBQUN6Qyx5QkFBaUIsV0FBVyxPQUFPLGdCQUFnQixFQUFFLGNBQWMscUJBQXFCLENBQUM7QUFDekYsY0FBTSxvQkFBb0IsZ0JBQWdCO0FBQzFDLGNBQU0sZUFBZSxpQkFBaUIsY0FBYyxpQkFBaUI7QUFDckUsWUFBSSxjQUFjO0FBQ2hCLDRCQUFrQixXQUFXLFlBQVk7QUFBQSxRQUMzQztBQUNBLHVCQUFlLGFBQWEsQ0FBQyxjQUFjLHVCQUF1QixxQkFBcUIsbUJBQW1CLGdCQUFnQixDQUFDO0FBQzNILHNCQUFjLGFBQWEsY0FBYztBQUV6QywwQkFBa0IsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUN6Qyw4QkFBc0IsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUM3Qyw0QkFBb0IsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUMzQyxZQUFJLGVBQWU7QUFDakIsY0FBSSxDQUFDLGdCQUFnQjtBQUVuQix5QkFBYSxPQUFPLGFBQWEsY0FBYyxNQUFNLEtBQUssUUFBUSxzQkFBc0Isa0JBQWtCLEVBQUUsT0FBTyxTQUFTLE1BQU0sQ0FBQztBQUFBLFVBQ3JJO0FBQ0EsOEJBQW9CLE9BQU8sYUFBYSxjQUFjLE1BQU0sS0FBSyxRQUFRLHNCQUFzQixrQkFBa0I7QUFDakgsMkJBQWlCLGtCQUFrQixDQUFDLFNBQVMsV0FBVyxDQUFDO0FBR3pELGdCQUFNLG9CQUFvQixpQkFBaUIsUUFBUSxpQkFBaUIsU0FBUyxTQUFTLGFBQWE7QUFDbkcsY0FBSSxDQUFDLG1CQUFtQjtBQUN0Qiw2QkFBaUIsT0FBTyxTQUFTLGtCQUFrQixDQUFDO0FBQUEsVUFDdEQsT0FBTztBQUNMLDZCQUFpQixPQUFPLGFBQWEsbUJBQW1CLFFBQVEsc0JBQXNCLGtCQUFrQjtBQUFBLFVBQzFHO0FBQ0EsY0FBSSxnQkFBZ0IsQ0FBQyxVQUFVO0FBQzdCLGtCQUFNLHFCQUFxQixnQkFBZ0I7QUFDM0MsK0JBQW1CLFdBQVcsT0FBTyxZQUFZLEVBQUUsY0FBYyxjQUFjLENBQUMsRUFDL0UsT0FBTyxhQUFhLGNBQWMsTUFBTSxLQUFLLGVBQWUsUUFBUSxPQUFPLE9BQU8sSUFBSSxHQUFHO0FBQzFGLDJCQUFlLGFBQWEsa0JBQWtCO0FBQUEsVUFDaEQ7QUFBQSxRQUNGLE9BQU87QUFFTCxjQUFJLENBQUMsZ0JBQWdCO0FBQ25CLHlCQUFhLE9BQU8sYUFBYSxjQUFjLE1BQU0sS0FBSyxjQUFjLFFBQVEsR0FBRyxFQUFFLE9BQU8sU0FBUyxNQUFNLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLE9BQU8sQ0FBQztBQUFBLFVBQ3JKO0FBQ0EsOEJBQW9CLE9BQU8sYUFBYSxjQUFjLE1BQU0sS0FBSyxjQUFjLFFBQVEsR0FBRyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsT0FBTyxDQUFDO0FBQ2pJLDRCQUFrQixpQkFBaUIsQ0FBQyxPQUFPLENBQUM7QUFDNUMsdUJBQWEsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLGdDQUFzQixpQkFBaUIsQ0FBQyxPQUFPLENBQUM7QUFBQSxRQUNsRDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFDQSxXQUFPO0FBQUEsRUFDVCxTQUFTLEtBQUs7QUFDWixVQUFNO0FBQUEsRUFDUjtBQUNGO0FBVUEsSUFBTSwwQkFBMEI7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
