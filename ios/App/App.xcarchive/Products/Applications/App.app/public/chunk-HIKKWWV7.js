// node_modules/@ionic/core/components/index5.js
var win = typeof window !== "undefined" ? window : void 0;

// node_modules/@ionic/core/components/animation.js
var animationPrefix;
var getAnimationPrefix = (el) => {
  if (animationPrefix === void 0) {
    const supportsUnprefixed = el.style.animationName !== void 0;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.setProperty(prefix + propertyName, value);
};
var addClassToArray = (classes = [], className) => {
  if (className !== void 0) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
var createAnimation = (animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = (clearStyleSheets) => {
    childAnimations.forEach((childAnimation) => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  const cleanUp = (clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = void 0;
    forceDurationValue = void 0;
    forceDelayValue = void 0;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex((callbackObject) => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach((animation) => {
        animation.cancel();
      });
      webAnimations.length = 0;
    }
  };
  const cleanUpStyleSheets = () => {
    stylesheets.forEach((stylesheet) => {
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = (readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = (writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = (readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = (writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = (className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = (className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = "";
    }
    return ani;
  };
  const afterAddClass = (className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = (className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = "";
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== void 0) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return "both";
  };
  const getDirection = () => {
    if (forceDirectionValue !== void 0) {
      return forceDirectionValue;
    }
    if (_direction !== void 0) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return "normal";
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return "linear";
    }
    if (_easing !== void 0) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return "linear";
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== void 0) {
      return forceDurationValue;
    }
    if (_duration !== void 0) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== void 0) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== void 0) {
      return forceDelayValue;
    }
    if (_delay !== void 0) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = (animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = (animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = (animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = (animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = (animationDuration) => {
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = (animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = (animation) => {
    parentAnimation = animation;
    return ani;
  };
  const addElement = (el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return ani;
  };
  const addAnimation = (animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = (keyframeValues) => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = (keyframeValues) => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach((animation) => {
        const keyframeEffect = animation.effect;
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
        }
      });
    }
  };
  const beforeAnimation = () => {
    _beforeAddReadFunctions.forEach((callback) => callback());
    _beforeAddWriteFunctions.forEach((callback) => callback());
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  const afterAnimation = () => {
    _afterAddReadFunctions.forEach((callback) => callback());
    _afterAddWriteFunctions.forEach((callback) => callback());
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    forceDurationValue = void 0;
    forceDirectionValue = void 0;
    forceDelayValue = void 0;
    onFinishCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeWebAnimation = () => {
    elements.forEach((element) => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = () => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  };
  const setAnimationStep = (step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach((animation) => {
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach((animation) => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== void 0) {
      setAnimationStep(step);
    }
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach((animation) => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach((animation) => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = (step) => {
    childAnimations.forEach((animation) => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation) => {
      animation.progressEnd(playTo, step, dur);
    });
    if (dur !== void 0) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
      if (forceDirectionValue === "reverse") {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== void 0 && !parentAnimation) {
      play();
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach((animation) => {
          animation.pause();
        });
      } else {
        elements.forEach((element) => {
          setStyleProperty(element, "animation-play-state", "paused");
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach((animation) => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach((animation) => {
      animation.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  };
  const play = (opts) => {
    return new Promise((resolve) => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, {
          oneTimeCallback: true
        });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };
      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      onFinish(onFinishCallback, {
        oneTimeCallback: true
      });
      onStop(onStopCallback, {
        oneTimeCallback: true
      });
      childAnimations.forEach((animation) => {
        animation.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  const stop = () => {
    childAnimations.forEach((animation) => {
      animation.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach((onStopCallback) => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{
        offset: 0,
        [property]: value
      }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, {
        offset: 1,
        [property]: value
      }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};

// node_modules/@ionic/core/components/ionic-global.js
var Config = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== void 0 ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === void 0) {
      return fallback;
    }
    if (typeof val === "string") {
      return val === "true";
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
};
var config = /* @__PURE__ */ new Config();
var getPlatforms = (win2) => setupPlatforms(win2);
var isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = (win2 = window) => {
  if (typeof win2 === "undefined") {
    return [];
  }
  win2.Ionic = win2.Ionic || {};
  let platforms = win2.Ionic.platforms;
  if (platforms == null) {
    platforms = win2.Ionic.platforms = detectPlatforms(win2);
    platforms.forEach((p) => win2.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
var detectPlatforms = (win2) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win2) : PLATFORMS_MAP[p](win2);
  });
};
var isMobileWeb = (win2) => isMobile(win2) && !isHybrid(win2);
var isIpad = (win2) => {
  if (testUserAgent(win2, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win2, /Macintosh/i) && isMobile(win2)) {
    return true;
  }
  return false;
};
var isIphone = (win2) => testUserAgent(win2, /iPhone/i);
var isIOS = (win2) => testUserAgent(win2, /iPhone|iPod/i) || isIpad(win2);
var isAndroid = (win2) => testUserAgent(win2, /android|sink/i);
var isAndroidTablet = (win2) => {
  return isAndroid(win2) && !testUserAgent(win2, /mobile/i);
};
var isPhablet = (win2) => {
  const width = win2.innerWidth;
  const height = win2.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
var isTablet = (win2) => {
  const width = win2.innerWidth;
  const height = win2.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win2) || isAndroidTablet(win2) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
var isMobile = (win2) => matchMedia(win2, "(any-pointer:coarse)");
var isDesktop = (win2) => !isMobile(win2);
var isHybrid = (win2) => isCordova(win2) || isCapacitorNative(win2);
var isCordova = (win2) => !!(win2["cordova"] || win2["phonegap"] || win2["PhoneGap"]);
var isCapacitorNative = (win2) => {
  const capacitor = win2["Capacitor"];
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
};
var isElectron = (win2) => testUserAgent(win2, /electron/i);
var isPWA = (win2) => {
  var _a;
  return !!(((_a = win2.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win2, "(display-mode: standalone)").matches) || win2.navigator.standalone);
};
var testUserAgent = (win2, expr) => expr.test(win2.navigator.userAgent);
var matchMedia = (win2, query) => {
  var _a;
  return (_a = win2.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win2, query).matches;
};
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};

// node_modules/@ionic/core/components/index6.js
var printIonWarning = (message, ...params) => {
  const logLevel = config.get(
    "logLevel",
    "WARN"
    /* LogLevel.WARN */
  );
  if ([
    "WARN"
    /* LogLevel.WARN */
  ].includes(logLevel)) {
    return console.warn(`[Ionic Warning]: ${message}`, ...params);
  }
};

// node_modules/@ionic/core/components/helpers.js
var componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};
var raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};

// node_modules/@ionic/core/components/index2.js
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
var moveFocus = (el) => {
  el.tabIndex = -1;
  el.focus();
};
var isVisible = (el) => {
  return el.offsetParent !== null;
};
var createFocusController = () => {
  const saveViewFocus = (referenceEl) => {
    const focusManagerEnabled = config.get("focusManagerPriority", false);
    if (focusManagerEnabled) {
      const activeEl = document.activeElement;
      if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) {
        activeEl.setAttribute(LAST_FOCUS, "true");
      }
    }
  };
  const setViewFocus = (referenceEl) => {
    const focusManagerPriorities = config.get("focusManagerPriority", false);
    if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
      const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
      if (lastFocus && isVisible(lastFocus)) {
        moveFocus(lastFocus);
        return;
      }
      for (const priority of focusManagerPriorities) {
        switch (priority) {
          case "content":
            const content = referenceEl.querySelector('main, [role="main"]');
            if (content && isVisible(content)) {
              moveFocus(content);
              return;
            }
            break;
          case "heading":
            const headingOne = referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');
            if (headingOne && isVisible(headingOne)) {
              moveFocus(headingOne);
              return;
            }
            break;
          case "banner":
            const header = referenceEl.querySelector('header, [role="banner"]');
            if (header && isVisible(header)) {
              moveFocus(header);
              return;
            }
            break;
          default:
            printIonWarning(`Unrecognized focus manager priority value ${priority}`);
            break;
        }
      }
      moveFocus(referenceEl);
    }
  };
  return {
    saveViewFocus,
    setViewFocus
  };
};
var LAST_FOCUS = "ion-last-focus";
var focusController = createFocusController();
var getIonPageElement = (element) => {
  if (element.classList.contains("ion-page")) {
    return element;
  }
  const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (ionPage) {
    return ionPage;
  }
  return element;
};

export {
  createAnimation,
  getPlatforms,
  isPlatform,
  componentOnReady,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_DID_ENTER,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  getIonPageElement
};
/*! Bundled license information:

@ionic/core/components/index5.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/animation.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ionic-global.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/index6.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/helpers.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/index2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2luZGV4NS5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2FuaW1hdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2lvbmljLWdsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2luZGV4Ni5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvY29tcG9uZW50cy9pbmRleDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuZXhwb3J0IHsgZG9jIGFzIGQsIHdpbiBhcyB3IH07IiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd2luIH0gZnJvbSAnLi9pbmRleDUuanMnO1xubGV0IGFuaW1hdGlvblByZWZpeDtcbmNvbnN0IGdldEFuaW1hdGlvblByZWZpeCA9IGVsID0+IHtcbiAgaWYgKGFuaW1hdGlvblByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNVbnByZWZpeGVkID0gZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN1cHBvcnRzV2Via2l0UHJlZml4ID0gZWwuc3R5bGUud2Via2l0QW5pbWF0aW9uTmFtZSAhPT0gdW5kZWZpbmVkO1xuICAgIGFuaW1hdGlvblByZWZpeCA9ICFzdXBwb3J0c1VucHJlZml4ZWQgJiYgc3VwcG9ydHNXZWJraXRQcmVmaXggPyAnLXdlYmtpdC0nIDogJyc7XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvblByZWZpeDtcbn07XG5jb25zdCBzZXRTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gcHJvcGVydHlOYW1lLnN0YXJ0c1dpdGgoJ2FuaW1hdGlvbicpID8gZ2V0QW5pbWF0aW9uUHJlZml4KGVsZW1lbnQpIDogJyc7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJlZml4ICsgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG59O1xuY29uc3QgYWRkQ2xhc3NUb0FycmF5ID0gKGNsYXNzZXMgPSBbXSwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChjbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZVRvQXBwZW5kID0gQXJyYXkuaXNBcnJheShjbGFzc05hbWUpID8gY2xhc3NOYW1lIDogW2NsYXNzTmFtZV07XG4gICAgcmV0dXJuIFsuLi5jbGFzc2VzLCAuLi5jbGFzc05hbWVUb0FwcGVuZF07XG4gIH1cbiAgcmV0dXJuIGNsYXNzZXM7XG59O1xuY29uc3QgY3JlYXRlQW5pbWF0aW9uID0gYW5pbWF0aW9uSWQgPT4ge1xuICBsZXQgX2RlbGF5O1xuICBsZXQgX2R1cmF0aW9uO1xuICBsZXQgX2Vhc2luZztcbiAgbGV0IF9pdGVyYXRpb25zO1xuICBsZXQgX2ZpbGw7XG4gIGxldCBfZGlyZWN0aW9uO1xuICBsZXQgX2tleWZyYW1lcyA9IFtdO1xuICBsZXQgYmVmb3JlQWRkQ2xhc3NlcyA9IFtdO1xuICBsZXQgYmVmb3JlUmVtb3ZlQ2xhc3NlcyA9IFtdO1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgbGV0IHBhcmVudEFuaW1hdGlvbjtcbiAgbGV0IGJlZm9yZVN0eWxlc1ZhbHVlID0ge307XG4gIGxldCBhZnRlckFkZENsYXNzZXMgPSBbXTtcbiAgbGV0IGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IFtdO1xuICBsZXQgYWZ0ZXJTdHlsZXNWYWx1ZSA9IHt9O1xuICBsZXQgbnVtQW5pbWF0aW9uc1J1bm5pbmcgPSAwO1xuICBsZXQgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcbiAgbGV0IHNob3VsZEZvcmNlU3luY1BsYXliYWNrID0gZmFsc2U7XG4gIGxldCBmb3JjZURpcmVjdGlvblZhbHVlO1xuICBsZXQgZm9yY2VEdXJhdGlvblZhbHVlO1xuICBsZXQgZm9yY2VEZWxheVZhbHVlO1xuICBsZXQgd2lsbENvbXBsZXRlID0gdHJ1ZTtcbiAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gIGxldCBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgbGV0IGFuaTtcbiAgbGV0IHBhdXNlZCA9IGZhbHNlO1xuICBjb25zdCBpZCA9IGFuaW1hdGlvbklkO1xuICBjb25zdCBvbkZpbmlzaENhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgb25TdG9wT25lVGltZUNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBjaGlsZEFuaW1hdGlvbnMgPSBbXTtcbiAgY29uc3Qgc3R5bGVzaGVldHMgPSBbXTtcbiAgY29uc3QgX2JlZm9yZUFkZFJlYWRGdW5jdGlvbnMgPSBbXTtcbiAgY29uc3QgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zID0gW107XG4gIGNvbnN0IF9hZnRlckFkZFJlYWRGdW5jdGlvbnMgPSBbXTtcbiAgY29uc3QgX2FmdGVyQWRkV3JpdGVGdW5jdGlvbnMgPSBbXTtcbiAgY29uc3Qgd2ViQW5pbWF0aW9ucyA9IFtdO1xuICBjb25zdCBzdXBwb3J0c0FuaW1hdGlvbkVmZmVjdCA9IHR5cGVvZiBBbmltYXRpb25FZmZlY3QgPT09ICdmdW5jdGlvbicgfHwgd2luICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbi5BbmltYXRpb25FZmZlY3QgPT09ICdmdW5jdGlvbic7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgZmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYiBBbmltYXRpb25zLlxuICAgKlxuICAgKiBDZXJ0YWluIGVudmlyb25tZW50cyBzdWNoIGFzIGVtdWxhdGVkIGJyb3dzZXIgZW52aXJvbm1lbnRzIGZvciB0ZXN0aW5nLFxuICAgKiBkbyBub3Qgc3VwcG9ydCBXZWIgQW5pbWF0aW9ucy4gQXMgYSByZXN1bHQsIHdlIG5lZWQgdG8gY2hlY2sgZm9yIHN1cHBvcnRcbiAgICogYW5kIHByb3ZpZGUgYSBmYWxsYmFjayB0byB0ZXN0IGNlcnRhaW4gZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIFdlYiBBbmltYXRpb25zLlxuICAgKi9cbiAgY29uc3Qgc3VwcG9ydHNXZWJBbmltYXRpb25zID0gdHlwZW9mIEVsZW1lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGUgPT09ICdmdW5jdGlvbicgJiYgc3VwcG9ydHNBbmltYXRpb25FZmZlY3Q7XG4gIGNvbnN0IGdldFdlYkFuaW1hdGlvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdlYkFuaW1hdGlvbnM7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSBjbGVhclN0eWxlU2hlZXRzID0+IHtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChjaGlsZEFuaW1hdGlvbiA9PiB7XG4gICAgICBjaGlsZEFuaW1hdGlvbi5kZXN0cm95KGNsZWFyU3R5bGVTaGVldHMpO1xuICAgIH0pO1xuICAgIGNsZWFuVXAoY2xlYXJTdHlsZVNoZWV0cyk7XG4gICAgZWxlbWVudHMubGVuZ3RoID0gMDtcbiAgICBjaGlsZEFuaW1hdGlvbnMubGVuZ3RoID0gMDtcbiAgICBfa2V5ZnJhbWVzLmxlbmd0aCA9IDA7XG4gICAgY2xlYXJPbkZpbmlzaCgpO1xuICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgLyoqXG4gICAqIENhbmNlbHMgYW55IFdlYiBBbmltYXRpb25zLCByZW1vdmVzXG4gICAqIGFueSBhbmltYXRpb24gcHJvcGVydGllcyBmcm9tIHRoZVxuICAgKiBhbmltYXRpb24ncyBlbGVtZW50cywgYW5kIHJlbW92ZXMgdGhlXG4gICAqIGFuaW1hdGlvbidzIHN0eWxlc2hlZXRzIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGNvbnN0IGNsZWFuVXAgPSBjbGVhclN0eWxlU2hlZXRzID0+IHtcbiAgICBjbGVhblVwRWxlbWVudHMoKTtcbiAgICBpZiAoY2xlYXJTdHlsZVNoZWV0cykge1xuICAgICAgY2xlYW5VcFN0eWxlU2hlZXRzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldEZsYWdzID0gKCkgPT4ge1xuICAgIHNob3VsZEZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2U7XG4gICAgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZTtcbiAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgICBmb3JjZURpcmVjdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRHVyYXRpb25WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZURlbGF5VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgbnVtQW5pbWF0aW9uc1J1bm5pbmcgPSAwO1xuICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgd2lsbENvbXBsZXRlID0gdHJ1ZTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNSdW5uaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBudW1BbmltYXRpb25zUnVubmluZyAhPT0gMCAmJiAhcGF1c2VkO1xuICB9O1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gYSBjaG9zZW4gY2FsbGJhY2sgYXJyYXlcbiAgICogQHBhcmFtIGNhbGxiYWNrVG9SZW1vdmU6IEEgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSByZW1vdmVkXG4gICAqIEBwYXJhbSBjYWxsYmFja09iamVjdHM6IEFuIGFycmF5IG9mIGNhbGxiYWNrcyB0aGF0IGNhbGxiYWNrVG9SZW1vdmUgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbS5cbiAgICovXG4gIGNvbnN0IGNsZWFyQ2FsbGJhY2sgPSAoY2FsbGJhY2tUb1JlbW92ZSwgY2FsbGJhY2tPYmplY3RzKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBjYWxsYmFja09iamVjdHMuZmluZEluZGV4KGNhbGxiYWNrT2JqZWN0ID0+IGNhbGxiYWNrT2JqZWN0LmMgPT09IGNhbGxiYWNrVG9SZW1vdmUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjYWxsYmFja09iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQWRkIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiBhbiBhbmltYXRpb24gaXMgc3RvcHBlZC9jYW5jZWxsZWQuXG4gICAqIEBwYXJhbSBjYWxsYmFjazogQSByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGZpcmVkXG4gICAqIEBwYXJhbSBvcHRzOiBBbnkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwYXJ0aWN1bGFyIGNhbGxiYWNrXG4gICAqL1xuICBjb25zdCBvblN0b3AgPSAoY2FsbGJhY2ssIG9wdHMpID0+IHtcbiAgICBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzLnB1c2goe1xuICAgICAgYzogY2FsbGJhY2ssXG4gICAgICBvOiBvcHRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3Qgb25GaW5pc2ggPSAoY2FsbGJhY2ssIG9wdHMpID0+IHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLm9uZVRpbWVDYWxsYmFjaykgPyBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MgOiBvbkZpbmlzaENhbGxiYWNrcztcbiAgICBjYWxsYmFja3MucHVzaCh7XG4gICAgICBjOiBjYWxsYmFjayxcbiAgICAgIG86IG9wdHNcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBjbGVhck9uRmluaXNoID0gKCkgPT4ge1xuICAgIG9uRmluaXNoQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgLyoqXG4gICAqIENhbmNlbHMgYW55IFdlYiBBbmltYXRpb25zIGFuZCByZW1vdmVzXG4gICAqIGFueSBhbmltYXRpb24gcHJvcGVydGllcyBmcm9tIHRoZVxuICAgKiB0aGUgYW5pbWF0aW9uJ3MgZWxlbWVudHMuXG4gICAqL1xuICBjb25zdCBjbGVhblVwRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgd2ViQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgICAgd2ViQW5pbWF0aW9ucy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGFuaW1hdGlvbidzIHN0eWxlc2hlZXRzXG4gICAqIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGNvbnN0IGNsZWFuVXBTdHlsZVNoZWV0cyA9ICgpID0+IHtcbiAgICBzdHlsZXNoZWV0cy5mb3JFYWNoKHN0eWxlc2hlZXQgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHNoYXJpbmcgc3R5bGVzaGVldHMsIGl0J3MgcG9zc2libGVcbiAgICAgICAqIGZvciBhbm90aGVyIGFuaW1hdGlvbiB0byBoYXZlIGFscmVhZHlcbiAgICAgICAqIGNsZWFuZWQgdXAgYSBwYXJ0aWN1bGFyIHN0eWxlc2hlZXRcbiAgICAgICAqL1xuICAgICAgaWYgKHN0eWxlc2hlZXQgPT09IG51bGwgfHwgc3R5bGVzaGVldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVzaGVldC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHN0eWxlc2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzdHlsZXNoZWV0cy5sZW5ndGggPSAwO1xuICB9O1xuICBjb25zdCBiZWZvcmVBZGRSZWFkID0gcmVhZEZuID0+IHtcbiAgICBfYmVmb3JlQWRkUmVhZEZ1bmN0aW9ucy5wdXNoKHJlYWRGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYmVmb3JlQWRkV3JpdGUgPSB3cml0ZUZuID0+IHtcbiAgICBfYmVmb3JlQWRkV3JpdGVGdW5jdGlvbnMucHVzaCh3cml0ZUZuKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlckFkZFJlYWQgPSByZWFkRm4gPT4ge1xuICAgIF9hZnRlckFkZFJlYWRGdW5jdGlvbnMucHVzaChyZWFkRm4pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQWRkV3JpdGUgPSB3cml0ZUZuID0+IHtcbiAgICBfYWZ0ZXJBZGRXcml0ZUZ1bmN0aW9ucy5wdXNoKHdyaXRlRm4pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZUFkZENsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICBiZWZvcmVBZGRDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGJlZm9yZUFkZENsYXNzZXMsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYmVmb3JlUmVtb3ZlQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGJlZm9yZVJlbW92ZUNsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYmVmb3JlUmVtb3ZlQ2xhc3NlcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogU2V0IENTUyBpbmxpbmUgc3R5bGVzIHRvIHRoZSBhbmltYXRpb24nc1xuICAgKiBlbGVtZW50cyBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXG4gICAqL1xuICBjb25zdCBiZWZvcmVTdHlsZXMgPSAoc3R5bGVzID0ge30pID0+IHtcbiAgICBiZWZvcmVTdHlsZXNWYWx1ZSA9IHN0eWxlcztcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogQ2xlYXIgQ1NTIGlubGluZSBzdHlsZXMgZnJvbSB0aGUgYW5pbWF0aW9uJ3NcbiAgICogZWxlbWVudHMgYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxuICAgKi9cbiAgY29uc3QgYmVmb3JlQ2xlYXJTdHlsZXMgPSAocHJvcGVydHlOYW1lcyA9IFtdKSA9PiB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0eU5hbWVzKSB7XG4gICAgICBiZWZvcmVTdHlsZXNWYWx1ZVtwcm9wZXJ0eV0gPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJBZGRDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgYWZ0ZXJBZGRDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGFmdGVyQWRkQ2xhc3NlcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlclJlbW92ZUNsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICBhZnRlclJlbW92ZUNsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYWZ0ZXJSZW1vdmVDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyU3R5bGVzID0gKHN0eWxlcyA9IHt9KSA9PiB7XG4gICAgYWZ0ZXJTdHlsZXNWYWx1ZSA9IHN0eWxlcztcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlckNsZWFyU3R5bGVzID0gKHByb3BlcnR5TmFtZXMgPSBbXSkgPT4ge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydHlOYW1lcykge1xuICAgICAgYWZ0ZXJTdHlsZXNWYWx1ZVtwcm9wZXJ0eV0gPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZ2V0RmlsbCA9ICgpID0+IHtcbiAgICBpZiAoX2ZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9maWxsO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldEZpbGwoKTtcbiAgICB9XG4gICAgcmV0dXJuICdib3RoJztcbiAgfTtcbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChmb3JjZURpcmVjdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmb3JjZURpcmVjdGlvblZhbHVlO1xuICAgIH1cbiAgICBpZiAoX2RpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2RpcmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXREaXJlY3Rpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuICdub3JtYWwnO1xuICB9O1xuICBjb25zdCBnZXRFYXNpbmcgPSAoKSA9PiB7XG4gICAgaWYgKHNob3VsZEZvcmNlTGluZWFyRWFzaW5nKSB7XG4gICAgICByZXR1cm4gJ2xpbmVhcic7XG4gICAgfVxuICAgIGlmIChfZWFzaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZWFzaW5nO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldEVhc2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gJ2xpbmVhcic7XG4gIH07XG4gIGNvbnN0IGdldER1cmF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChzaG91bGRGb3JjZVN5bmNQbGF5YmFjaykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChmb3JjZUR1cmF0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZvcmNlRHVyYXRpb25WYWx1ZTtcbiAgICB9XG4gICAgaWYgKF9kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2R1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldER1cmF0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuICBjb25zdCBnZXRJdGVyYXRpb25zID0gKCkgPT4ge1xuICAgIGlmIChfaXRlcmF0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2l0ZXJhdGlvbnM7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0SXRlcmF0aW9ucygpO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgY29uc3QgZ2V0RGVsYXkgPSAoKSA9PiB7XG4gICAgaWYgKGZvcmNlRGVsYXlWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm9yY2VEZWxheVZhbHVlO1xuICAgIH1cbiAgICBpZiAoX2RlbGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZGVsYXk7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RGVsYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IGdldEtleWZyYW1lcyA9ICgpID0+IHtcbiAgICByZXR1cm4gX2tleWZyYW1lcztcbiAgfTtcbiAgY29uc3QgZGlyZWN0aW9uID0gYW5pbWF0aW9uRGlyZWN0aW9uID0+IHtcbiAgICBfZGlyZWN0aW9uID0gYW5pbWF0aW9uRGlyZWN0aW9uO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBmaWxsID0gYW5pbWF0aW9uRmlsbCA9PiB7XG4gICAgX2ZpbGwgPSBhbmltYXRpb25GaWxsO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBkZWxheSA9IGFuaW1hdGlvbkRlbGF5ID0+IHtcbiAgICBfZGVsYXkgPSBhbmltYXRpb25EZWxheTtcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZWFzaW5nID0gYW5pbWF0aW9uRWFzaW5nID0+IHtcbiAgICBfZWFzaW5nID0gYW5pbWF0aW9uRWFzaW5nO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBkdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uID0+IHtcbiAgICAvKipcbiAgICAgKiBDU1MgQW5pbWF0aW9uIER1cmF0aW9ucyBvZiAwbXMgd29yayBmaW5lIG9uIENocm9tZVxuICAgICAqIGJ1dCBkbyBub3QgcnVuIG9uIFNhZmFyaSwgc28gZm9yY2UgaXQgdG8gMW1zIHRvXG4gICAgICogZ2V0IGl0IHRvIHJ1biBvbiBib3RoIHBsYXRmb3Jtcy5cbiAgICAgKi9cbiAgICBpZiAoIXN1cHBvcnRzV2ViQW5pbWF0aW9ucyAmJiBhbmltYXRpb25EdXJhdGlvbiA9PT0gMCkge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSAxO1xuICAgIH1cbiAgICBfZHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbjtcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgaXRlcmF0aW9ucyA9IGFuaW1hdGlvbkl0ZXJhdGlvbnMgPT4ge1xuICAgIF9pdGVyYXRpb25zID0gYW5pbWF0aW9uSXRlcmF0aW9ucztcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcGFyZW50ID0gYW5pbWF0aW9uID0+IHtcbiAgICBwYXJlbnRBbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWRkRWxlbWVudCA9IGVsID0+IHtcbiAgICBpZiAoZWwgIT0gbnVsbCkge1xuICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgfSBlbHNlIGlmIChlbC5sZW5ndGggPj0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZWxlbWVudHMucHVzaChlbFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgYWRkRWxlbWVudCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZGRBbmltYXRpb24gPSBhbmltYXRpb25Ub0FkZCA9PiB7XG4gICAgaWYgKGFuaW1hdGlvblRvQWRkICE9IG51bGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFuaW1hdGlvblRvQWRkKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25Ub0FkZCkge1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQoYW5pKTtcbiAgICAgICAgICBjaGlsZEFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25Ub0FkZC5wYXJlbnQoYW5pKTtcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLnB1c2goYW5pbWF0aW9uVG9BZGQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBrZXlmcmFtZXMgPSBrZXlmcmFtZVZhbHVlcyA9PiB7XG4gICAgY29uc3QgZGlmZmVyZW50ID0gX2tleWZyYW1lcyAhPT0ga2V5ZnJhbWVWYWx1ZXM7XG4gICAgX2tleWZyYW1lcyA9IGtleWZyYW1lVmFsdWVzO1xuICAgIGlmIChkaWZmZXJlbnQpIHtcbiAgICAgIHVwZGF0ZUtleWZyYW1lcyhfa2V5ZnJhbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlS2V5ZnJhbWVzID0ga2V5ZnJhbWVWYWx1ZXMgPT4ge1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIGdldFdlYkFuaW1hdGlvbnMoKS5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbmltYXRpb24uZWZmZWN0J3MgdHlwZSBpcyBBbmltYXRpb25FZmZlY3QuXG4gICAgICAgICAqIEhvd2V2ZXIsIGluIHRoaXMgY2FzZSB3ZSBoYXZlIGEgbW9yZSBzcGVjaWZpY1xuICAgICAgICAgKiB0eXBlIG9mIEFuaW1hdGlvbkVmZmVjdCBjYWxsZWQgS2V5ZnJhbWVFZmZlY3Qgd2hpY2hcbiAgICAgICAgICogaW5oZXJpdHMgZnJvbSBBbmltYXRpb25FZmZlY3QuIEFzIGEgcmVzdWx0LFxuICAgICAgICAgKiB3ZSBjYXN0IGFuaW1hdGlvbi5lZmZlY3QgdG8gS2V5ZnJhbWVFZmZlY3QuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBrZXlmcmFtZUVmZmVjdCA9IGFuaW1hdGlvbi5lZmZlY3Q7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXRLZXlmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlclxuICAgICAgICAgKiB2ZXJzaW9ucyB0aGF0IElvbmljIHN1cHBvcnRzLCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgICAqIGNoZWNrIGZvciBzdXBwb3J0IGJlZm9yZSB1c2luZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICAgICAgaWYgKGtleWZyYW1lRWZmZWN0LnNldEtleWZyYW1lcykge1xuICAgICAgICAgIGtleWZyYW1lRWZmZWN0LnNldEtleWZyYW1lcyhrZXlmcmFtZVZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3RWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KGtleWZyYW1lRWZmZWN0LnRhcmdldCwga2V5ZnJhbWVWYWx1ZXMsIGtleWZyYW1lRWZmZWN0LmdldFRpbWluZygpKTtcbiAgICAgICAgICBhbmltYXRpb24uZWZmZWN0ID0gbmV3RWZmZWN0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSdW4gYWxsIFwiYmVmb3JlXCIgYW5pbWF0aW9uIGhvb2tzLlxuICAgKi9cbiAgY29uc3QgYmVmb3JlQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJ1bnMgYWxsIGJlZm9yZSByZWFkIGNhbGxiYWNrc1xuICAgIF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gUnVucyBhbGwgYmVmb3JlIHdyaXRlIGNhbGxiYWNrc1xuICAgIF9iZWZvcmVBZGRXcml0ZUZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICAgIC8vIFVwZGF0ZXMgc3R5bGVzIGFuZCBjbGFzc2VzIGJlZm9yZSBhbmltYXRpb24gcnVuc1xuICAgIGNvbnN0IGFkZENsYXNzZXMgPSBiZWZvcmVBZGRDbGFzc2VzO1xuICAgIGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBiZWZvcmVSZW1vdmVDbGFzc2VzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGJlZm9yZVN0eWxlc1ZhbHVlO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGFkZENsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIHJlbW92ZUNsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKGMpKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wZXJ0eSwgc3R5bGVzW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIFJ1biBhbGwgXCJhZnRlclwiIGFuaW1hdGlvbiBob29rcy5cbiAgICovXG4gIGNvbnN0IGFmdGVyQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJ1bnMgYWxsIGFmdGVyIHJlYWQgY2FsbGJhY2tzXG4gICAgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICAgIC8vIFJ1bnMgYWxsIGFmdGVyIHdyaXRlIGNhbGxiYWNrc1xuICAgIF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gVXBkYXRlcyBzdHlsZXMgYW5kIGNsYXNzZXMgYmVmb3JlIGFuaW1hdGlvbiBlbmRzXG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB3aWxsQ29tcGxldGUgPyAxIDogMDtcbiAgICBjb25zdCBhZGRDbGFzc2VzID0gYWZ0ZXJBZGRDbGFzc2VzO1xuICAgIGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBhZnRlclJlbW92ZUNsYXNzZXM7XG4gICAgY29uc3Qgc3R5bGVzID0gYWZ0ZXJTdHlsZXNWYWx1ZTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRDbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBhZGRDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICByZW1vdmVDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHN0eWxlcykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcGVydHksIHN0eWxlc1twcm9wZXJ0eV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgYW55IHZhbHVlIGNvZXJjaW9uIGJlZm9yZVxuICAgICAqIHRoZSB1c2VyIGNhbGxiYWNrcyBmaXJlIG90aGVyd2lzZVxuICAgICAqIHRoZXkgbWF5IGdldCBzdGFsZSB2YWx1ZXMuIEZvciBleGFtcGxlLFxuICAgICAqIGlmIHNvbWVvbmUgY2FsbHMgcHJvZ3Jlc3NTdGFydCgwKSB0aGVcbiAgICAgKiBhbmltYXRpb24gbWF5IHN0aWxsIGJlIHJldmVyc2VkLlxuICAgICAqL1xuICAgIGZvcmNlRHVyYXRpb25WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZURpcmVjdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBvbkZpbmlzaENhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xuICAgICAgcmV0dXJuIG9uRmluaXNoQ2FsbGJhY2suYyhjdXJyZW50U3RlcCwgYW5pKTtcbiAgICB9KTtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MuZm9yRWFjaChvbkZpbmlzaENhbGxiYWNrID0+IHtcbiAgICAgIHJldHVybiBvbkZpbmlzaENhbGxiYWNrLmMoY3VycmVudFN0ZXAsIGFuaSk7XG4gICAgfSk7XG4gICAgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XG4gICAgaWYgKHdpbGxDb21wbGV0ZSkge1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICB9O1xuICBjb25zdCBhbmltYXRpb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgaWYgKG51bUFuaW1hdGlvbnNSdW5uaW5nID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nLS07XG4gICAgaWYgKG51bUFuaW1hdGlvbnNSdW5uaW5nID09PSAwKSB7XG4gICAgICBhZnRlckFuaW1hdGlvbigpO1xuICAgICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgICBwYXJlbnRBbmltYXRpb24uYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBpbml0aWFsaXplV2ViQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoX2tleWZyYW1lcywge1xuICAgICAgICBpZCxcbiAgICAgICAgZGVsYXk6IGdldERlbGF5KCksXG4gICAgICAgIGR1cmF0aW9uOiBnZXREdXJhdGlvbigpLFxuICAgICAgICBlYXNpbmc6IGdldEVhc2luZygpLFxuICAgICAgICBpdGVyYXRpb25zOiBnZXRJdGVyYXRpb25zKCksXG4gICAgICAgIGZpbGw6IGdldEZpbGwoKSxcbiAgICAgICAgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oKVxuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICAgIHdlYkFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH0pO1xuICAgIGlmICh3ZWJBbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHdlYkFuaW1hdGlvbnNbMF0ub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXRpYWxpemVBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgYmVmb3JlQW5pbWF0aW9uKCk7XG4gICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICBpbml0aWFsaXplV2ViQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0QW5pbWF0aW9uU3RlcCA9IHN0ZXAgPT4ge1xuICAgIHN0ZXAgPSBNYXRoLm1pbihNYXRoLm1heChzdGVwLCAwKSwgMC45OTk5KTtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgLy8gV2hlbiBjcmVhdGluZyB0aGUgYW5pbWF0aW9uIHRoZSBkZWxheSBpcyBndWFyYW50ZWVkIHRvIGJlIHNldCB0byBhIG51bWJlci5cbiAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gYW5pbWF0aW9uLmVmZmVjdC5nZXRDb21wdXRlZFRpbWluZygpLmRlbGF5ICsgZ2V0RHVyYXRpb24oKSAqIHN0ZXA7XG4gICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB1cGRhdGVXZWJBbmltYXRpb24gPSBzdGVwID0+IHtcbiAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5lZmZlY3QudXBkYXRlVGltaW5nKHtcbiAgICAgICAgZGVsYXk6IGdldERlbGF5KCksXG4gICAgICAgIGR1cmF0aW9uOiBnZXREdXJhdGlvbigpLFxuICAgICAgICBlYXNpbmc6IGdldEVhc2luZygpLFxuICAgICAgICBpdGVyYXRpb25zOiBnZXRJdGVyYXRpb25zKCksXG4gICAgICAgIGZpbGw6IGdldEZpbGwoKSxcbiAgICAgICAgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHN0ZXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZSA9IChkZWVwID0gZmFsc2UsIHRvZ2dsZUFuaW1hdGlvbk5hbWUgPSB0cnVlLCBzdGVwKSA9PiB7XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi51cGRhdGUoZGVlcCwgdG9nZ2xlQW5pbWF0aW9uTmFtZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgdXBkYXRlV2ViQW5pbWF0aW9uKHN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc1N0YXJ0ID0gKGZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2UsIHN0ZXApID0+IHtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzU3RhcnQoZm9yY2VMaW5lYXJFYXNpbmcsIHN0ZXApO1xuICAgIH0pO1xuICAgIHBhdXNlQW5pbWF0aW9uKCk7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmb3JjZUxpbmVhckVhc2luZztcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICBpbml0aWFsaXplQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIHVwZGF0ZShmYWxzZSwgdHJ1ZSwgc3RlcCk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwID0gc3RlcCA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAoc3RlcCk7XG4gICAgfSk7XG4gICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc0VuZCA9IChwbGF5VG8sIHN0ZXAsIGR1cikgPT4ge1xuICAgIHNob3VsZEZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2U7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc0VuZChwbGF5VG8sIHN0ZXAsIGR1cik7XG4gICAgfSk7XG4gICAgaWYgKGR1ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3JjZUR1cmF0aW9uVmFsdWUgPSBkdXI7XG4gICAgfVxuICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgd2lsbENvbXBsZXRlID0gdHJ1ZTtcbiAgICBpZiAocGxheVRvID09PSAwKSB7XG4gICAgICBmb3JjZURpcmVjdGlvblZhbHVlID0gZ2V0RGlyZWN0aW9uKCkgPT09ICdyZXZlcnNlJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgICAgaWYgKGZvcmNlRGlyZWN0aW9uVmFsdWUgPT09ICdyZXZlcnNlJykge1xuICAgICAgICB3aWxsQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEFuaW1hdGlvblN0ZXAoMSAtIHN0ZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yY2VEZWxheVZhbHVlID0gKDEgLSBzdGVwKSAqIGdldER1cmF0aW9uKCkgKiAtMTtcbiAgICAgICAgdXBkYXRlKGZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwbGF5VG8gPT09IDEpIHtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEFuaW1hdGlvblN0ZXAoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZURlbGF5VmFsdWUgPSBzdGVwICogZ2V0RHVyYXRpb24oKSAqIC0xO1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXlUbyAhPT0gdW5kZWZpbmVkICYmICFwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHBsYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcGF1c2VBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLCAncGF1c2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICB9KTtcbiAgICBwYXVzZUFuaW1hdGlvbigpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHBsYXlDU1NBbmltYXRpb25zID0gKCkgPT4ge1xuICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xuICB9O1xuICBjb25zdCBwbGF5V2ViQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgfSk7XG4gICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID09PSAwIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICBzZXRBbmltYXRpb25TdGVwKDApO1xuICAgICAgdXBkYXRlV2ViQW5pbWF0aW9uKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwbGF5ID0gb3B0cyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5zeW5jKSB7XG4gICAgICAgIHNob3VsZEZvcmNlU3luY1BsYXliYWNrID0gdHJ1ZTtcbiAgICAgICAgb25GaW5pc2goKCkgPT4gc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZSwge1xuICAgICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucykge1xuICAgICAgICBudW1BbmltYXRpb25zUnVubmluZyA9IGNoaWxkQW5pbWF0aW9ucy5sZW5ndGggKyAxO1xuICAgICAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gb25lIG9mIHRoZXNlIGNhbGxiYWNrcyBmaXJlcyB3ZVxuICAgICAgICogbmVlZCB0byBjbGVhciB0aGUgb3RoZXIncyBjYWxsYmFjayBvdGhlcndpc2VcbiAgICAgICAqIHlvdSBjYW4gcG90ZW50aWFsbHkgZ2V0IHRoZXNlIGNhbGxiYWNrc1xuICAgICAgICogZmlyaW5nIG11bHRpcGxlIHRpbWVzIGlmIHRoZSBwbGF5IG1ldGhvZFxuICAgICAgICogaXMgc3Vic2VxdWVudGx5IGNhbGxlZC5cbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKiBhbmltYXRpb24ucGxheSgpIChvblN0b3AgYW5kIG9uRmluaXNoIGNhbGxiYWNrcyBhcmUgcmVnaXN0ZXJlZClcbiAgICAgICAqIGFuaW1hdGlvbi5zdG9wKCkgKG9uU3RvcCBjYWxsYmFjayBpcyBmaXJlZCwgb25GaW5pc2ggaXMgbm90KVxuICAgICAgICogYW5pbWF0aW9uLnBsYXkoKSAob25TdG9wIGFuZCBvbkZpbmlzaCBjYWxsYmFja3MgYXJlIHJlZ2lzdGVyZWQpXG4gICAgICAgKiBUb3RhbCBvblN0b3AgY2FsbGJhY2tzOiAxXG4gICAgICAgKiBUb3RhbCBvbkZpbmlzaCBjYWxsYmFja3M6IDJcbiAgICAgICAqL1xuICAgICAgY29uc3Qgb25TdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2sob25GaW5pc2hDYWxsYmFjaywgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2sob25TdG9wQ2FsbGJhY2ssIG9uU3RvcE9uZVRpbWVDYWxsYmFja3MpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgcGxheSBtZXRob2QgcmVzb2x2ZXMgd2hlbiBhbiBhbmltYXRpb25cbiAgICAgICAqIHJ1biBlaXRoZXIgZmluaXNoZXMgb3IgaXMgY2FuY2VsbGVkLlxuICAgICAgICovXG4gICAgICBvbkZpbmlzaChvbkZpbmlzaENhbGxiYWNrLCB7XG4gICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBvblN0b3Aob25TdG9wQ2FsbGJhY2ssIHtcbiAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgcGxheVdlYkFuaW1hdGlvbnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXlDU1NBbmltYXRpb25zKCk7XG4gICAgICB9XG4gICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0b3BzIGFuIGFuaW1hdGlvbiBhbmQgcmVzZXRzIGl0IHN0YXRlIHRvIHRoZVxuICAgKiBiZWdpbm5pbmcuIFRoaXMgZG9lcyBub3QgZmlyZSBhbnkgb25GaW5pc2hcbiAgICogY2FsbGJhY2tzIGJlY2F1c2UgdGhlIGFuaW1hdGlvbiBkaWQgbm90IGZpbmlzaC5cbiAgICogSG93ZXZlciwgc2luY2UgdGhlIGFuaW1hdGlvbiB3YXMgbm90IGRlc3Ryb3llZFxuICAgKiAoaS5lLiB0aGUgYW5pbWF0aW9uIGNvdWxkIHJ1biBhZ2Fpbikgd2UgZG8gbm90XG4gICAqIGNsZWFyIHRoZSBvbkZpbmlzaCBjYWxsYmFja3MuXG4gICAqL1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH0pO1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgY2xlYW5VcEVsZW1lbnRzKCk7XG4gICAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldEZsYWdzKCk7XG4gICAgb25TdG9wT25lVGltZUNhbGxiYWNrcy5mb3JFYWNoKG9uU3RvcENhbGxiYWNrID0+IG9uU3RvcENhbGxiYWNrLmMoMCwgYW5pKSk7XG4gICAgb25TdG9wT25lVGltZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICB9O1xuICBjb25zdCBmcm9tID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBfa2V5ZnJhbWVzWzBdO1xuICAgIGlmIChmaXJzdEZyYW1lICE9PSB1bmRlZmluZWQgJiYgKGZpcnN0RnJhbWUub2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgZmlyc3RGcmFtZS5vZmZzZXQgPT09IDApKSB7XG4gICAgICBmaXJzdEZyYW1lW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ZnJhbWVzID0gW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBbcHJvcGVydHldOiB2YWx1ZVxuICAgICAgfSwgLi4uX2tleWZyYW1lc107XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHRvID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxhc3RGcmFtZSA9IF9rZXlmcmFtZXNbX2tleWZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdEZyYW1lICE9PSB1bmRlZmluZWQgJiYgKGxhc3RGcmFtZS5vZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBsYXN0RnJhbWUub2Zmc2V0ID09PSAxKSkge1xuICAgICAgbGFzdEZyYW1lW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ZnJhbWVzID0gWy4uLl9rZXlmcmFtZXMsIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBbcHJvcGVydHldOiB2YWx1ZVxuICAgICAgfV07XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGZyb21UbyA9IChwcm9wZXJ0eSwgZnJvbVZhbHVlLCB0b1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGZyb20ocHJvcGVydHksIGZyb21WYWx1ZSkudG8ocHJvcGVydHksIHRvVmFsdWUpO1xuICB9O1xuICByZXR1cm4gYW5pID0ge1xuICAgIHBhcmVudEFuaW1hdGlvbixcbiAgICBlbGVtZW50cyxcbiAgICBjaGlsZEFuaW1hdGlvbnMsXG4gICAgaWQsXG4gICAgYW5pbWF0aW9uRmluaXNoLFxuICAgIGZyb20sXG4gICAgdG8sXG4gICAgZnJvbVRvLFxuICAgIHBhcmVudCxcbiAgICBwbGF5LFxuICAgIHBhdXNlLFxuICAgIHN0b3AsXG4gICAgZGVzdHJveSxcbiAgICBrZXlmcmFtZXMsXG4gICAgYWRkQW5pbWF0aW9uLFxuICAgIGFkZEVsZW1lbnQsXG4gICAgdXBkYXRlLFxuICAgIGZpbGwsXG4gICAgZGlyZWN0aW9uLFxuICAgIGl0ZXJhdGlvbnMsXG4gICAgZHVyYXRpb24sXG4gICAgZWFzaW5nLFxuICAgIGRlbGF5LFxuICAgIGdldFdlYkFuaW1hdGlvbnMsXG4gICAgZ2V0S2V5ZnJhbWVzLFxuICAgIGdldEZpbGwsXG4gICAgZ2V0RGlyZWN0aW9uLFxuICAgIGdldERlbGF5LFxuICAgIGdldEl0ZXJhdGlvbnMsXG4gICAgZ2V0RWFzaW5nLFxuICAgIGdldER1cmF0aW9uLFxuICAgIGFmdGVyQWRkUmVhZCxcbiAgICBhZnRlckFkZFdyaXRlLFxuICAgIGFmdGVyQ2xlYXJTdHlsZXMsXG4gICAgYWZ0ZXJTdHlsZXMsXG4gICAgYWZ0ZXJSZW1vdmVDbGFzcyxcbiAgICBhZnRlckFkZENsYXNzLFxuICAgIGJlZm9yZUFkZFJlYWQsXG4gICAgYmVmb3JlQWRkV3JpdGUsXG4gICAgYmVmb3JlQ2xlYXJTdHlsZXMsXG4gICAgYmVmb3JlU3R5bGVzLFxuICAgIGJlZm9yZVJlbW92ZUNsYXNzLFxuICAgIGJlZm9yZUFkZENsYXNzLFxuICAgIG9uRmluaXNoLFxuICAgIGlzUnVubmluZyxcbiAgICBwcm9ncmVzc1N0YXJ0LFxuICAgIHByb2dyZXNzU3RlcCxcbiAgICBwcm9ncmVzc0VuZFxuICB9O1xufTtcbmV4cG9ydCB7IGNyZWF0ZUFuaW1hdGlvbiBhcyBjIH07IiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHNldE1vZGUsIGdldE1vZGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCc7XG5cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jbGFzcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm0gPSBuZXcgTWFwKCk7XG4gIH1cbiAgcmVzZXQoY29uZmlnT2JqKSB7XG4gICAgdGhpcy5tID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhjb25maWdPYmopKTtcbiAgfVxuICBnZXQoa2V5LCBmYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5tLmdldChrZXkpO1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBmYWxsYmFjaztcbiAgfVxuICBnZXRCb29sZWFuKGtleSwgZmFsbGJhY2sgPSBmYWxzZSkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMubS5nZXQoa2V5KTtcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSc7XG4gICAgfVxuICAgIHJldHVybiAhIXZhbDtcbiAgfVxuICBnZXROdW1iZXIoa2V5LCBmYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQodGhpcy5tLmdldChrZXkpKTtcbiAgICByZXR1cm4gaXNOYU4odmFsKSA/IGZhbGxiYWNrICE9PSB1bmRlZmluZWQgPyBmYWxsYmFjayA6IE5hTiA6IHZhbDtcbiAgfVxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMubS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbmNvbnN0IGNvbmZpZyA9IC8qQF9fUFVSRV9fKi9uZXcgQ29uZmlnKCk7XG5jb25zdCBjb25maWdGcm9tU2Vzc2lvbiA9IHdpbiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnU3RyID0gd2luLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oSU9OSUNfU0VTU0lPTl9LRVkpO1xuICAgIHJldHVybiBjb25maWdTdHIgIT09IG51bGwgPyBKU09OLnBhcnNlKGNvbmZpZ1N0cikgOiB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcbmNvbnN0IHNhdmVDb25maWcgPSAod2luLCBjKSA9PiB7XG4gIHRyeSB7XG4gICAgd2luLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oSU9OSUNfU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KGMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybjtcbiAgfVxufTtcbmNvbnN0IGNvbmZpZ0Zyb21VUkwgPSB3aW4gPT4ge1xuICBjb25zdCBjb25maWdPYmogPSB7fTtcbiAgd2luLmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChlbnRyeSA9PiBlbnRyeS5zcGxpdCgnPScpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gW2RlY29kZVVSSUNvbXBvbmVudChrZXkpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gWycnLCAnJ107XG4gICAgfVxuICB9KS5maWx0ZXIoKFtrZXldKSA9PiBzdGFydHNXaXRoKGtleSwgSU9OSUNfUFJFRklYKSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXkuc2xpY2UoSU9OSUNfUFJFRklYLmxlbmd0aCksIHZhbHVlXSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uZmlnT2JqW2tleV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBjb25maWdPYmo7XG59O1xuY29uc3Qgc3RhcnRzV2l0aCA9IChpbnB1dCwgc2VhcmNoKSA9PiB7XG4gIHJldHVybiBpbnB1dC5zdWJzdHIoMCwgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbn07XG5jb25zdCBJT05JQ19QUkVGSVggPSAnaW9uaWM6JztcbmNvbnN0IElPTklDX1NFU1NJT05fS0VZID0gJ2lvbmljLXBlcnNpc3QtY29uZmlnJztcbmNvbnN0IGdldFBsYXRmb3JtcyA9IHdpbiA9PiBzZXR1cFBsYXRmb3Jtcyh3aW4pO1xuY29uc3QgaXNQbGF0Zm9ybSA9ICh3aW5PclBsYXRmb3JtLCBwbGF0Zm9ybSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbk9yUGxhdGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGxhdGZvcm0gPSB3aW5PclBsYXRmb3JtO1xuICAgIHdpbk9yUGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldFBsYXRmb3Jtcyh3aW5PclBsYXRmb3JtKS5pbmNsdWRlcyhwbGF0Zm9ybSk7XG59O1xuY29uc3Qgc2V0dXBQbGF0Zm9ybXMgPSAod2luID0gd2luZG93KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB3aW4uSW9uaWMgPSB3aW4uSW9uaWMgfHwge307XG4gIGxldCBwbGF0Zm9ybXMgPSB3aW4uSW9uaWMucGxhdGZvcm1zO1xuICBpZiAocGxhdGZvcm1zID09IG51bGwpIHtcbiAgICBwbGF0Zm9ybXMgPSB3aW4uSW9uaWMucGxhdGZvcm1zID0gZGV0ZWN0UGxhdGZvcm1zKHdpbik7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHBsdC0ke3B9YCkpO1xuICB9XG4gIHJldHVybiBwbGF0Zm9ybXM7XG59O1xuY29uc3QgZGV0ZWN0UGxhdGZvcm1zID0gd2luID0+IHtcbiAgY29uc3QgY3VzdG9tUGxhdGZvcm1NZXRob2RzID0gY29uZmlnLmdldCgncGxhdGZvcm0nKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKFBMQVRGT1JNU19NQVApLmZpbHRlcihwID0+IHtcbiAgICBjb25zdCBjdXN0b21NZXRob2QgPSBjdXN0b21QbGF0Zm9ybU1ldGhvZHMgPT09IG51bGwgfHwgY3VzdG9tUGxhdGZvcm1NZXRob2RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXN0b21QbGF0Zm9ybU1ldGhvZHNbcF07XG4gICAgcmV0dXJuIHR5cGVvZiBjdXN0b21NZXRob2QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXRob2Qod2luKSA6IFBMQVRGT1JNU19NQVBbcF0od2luKTtcbiAgfSk7XG59O1xuY29uc3QgaXNNb2JpbGVXZWIgPSB3aW4gPT4gaXNNb2JpbGUod2luKSAmJiAhaXNIeWJyaWQod2luKTtcbmNvbnN0IGlzSXBhZCA9IHdpbiA9PiB7XG4gIC8vIGlPUyAxMiBhbmQgYmVsb3dcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvaVBhZC9pKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIGlPUyAxMytcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvTWFjaW50b3NoL2kpICYmIGlzTW9iaWxlKHdpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgaXNJcGhvbmUgPSB3aW4gPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmUvaSk7XG5jb25zdCBpc0lPUyA9IHdpbiA9PiB0ZXN0VXNlckFnZW50KHdpbiwgL2lQaG9uZXxpUG9kL2kpIHx8IGlzSXBhZCh3aW4pO1xuY29uc3QgaXNBbmRyb2lkID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvYW5kcm9pZHxzaW5rL2kpO1xuY29uc3QgaXNBbmRyb2lkVGFibGV0ID0gd2luID0+IHtcbiAgcmV0dXJuIGlzQW5kcm9pZCh3aW4pICYmICF0ZXN0VXNlckFnZW50KHdpbiwgL21vYmlsZS9pKTtcbn07XG5jb25zdCBpc1BoYWJsZXQgPSB3aW4gPT4ge1xuICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHNtYWxsZXN0ID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHNtYWxsZXN0ID4gMzkwICYmIHNtYWxsZXN0IDwgNTIwICYmIGxhcmdlc3QgPiA2MjAgJiYgbGFyZ2VzdCA8IDgwMDtcbn07XG5jb25zdCBpc1RhYmxldCA9IHdpbiA9PiB7XG4gIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgY29uc3Qgc21hbGxlc3QgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgbGFyZ2VzdCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaXNJcGFkKHdpbikgfHwgaXNBbmRyb2lkVGFibGV0KHdpbikgfHwgc21hbGxlc3QgPiA0NjAgJiYgc21hbGxlc3QgPCA4MjAgJiYgbGFyZ2VzdCA+IDc4MCAmJiBsYXJnZXN0IDwgMTQwMDtcbn07XG5jb25zdCBpc01vYmlsZSA9IHdpbiA9PiBtYXRjaE1lZGlhKHdpbiwgJyhhbnktcG9pbnRlcjpjb2Fyc2UpJyk7XG5jb25zdCBpc0Rlc2t0b3AgPSB3aW4gPT4gIWlzTW9iaWxlKHdpbik7XG5jb25zdCBpc0h5YnJpZCA9IHdpbiA9PiBpc0NvcmRvdmEod2luKSB8fCBpc0NhcGFjaXRvck5hdGl2ZSh3aW4pO1xuY29uc3QgaXNDb3Jkb3ZhID0gd2luID0+ICEhKHdpblsnY29yZG92YSddIHx8IHdpblsncGhvbmVnYXAnXSB8fCB3aW5bJ1Bob25lR2FwJ10pO1xuY29uc3QgaXNDYXBhY2l0b3JOYXRpdmUgPSB3aW4gPT4ge1xuICBjb25zdCBjYXBhY2l0b3IgPSB3aW5bJ0NhcGFjaXRvciddO1xuICAvLyBUT0RPKFJPVS0xMTY5Myk6IFJlbW92ZSB3aGVuIHdlIG5vIGxvbmdlciBzdXBwb3J0IENhcGFjaXRvciAyLCB3aGljaCBkb2VzIG5vdCBoYXZlIGlzTmF0aXZlUGxhdGZvcm1cbiAgcmV0dXJuICEhKChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNOYXRpdmUpIHx8IChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSkgJiYgISFjYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcbn07XG5jb25zdCBpc0VsZWN0cm9uID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvZWxlY3Ryb24vaSk7XG5jb25zdCBpc1BXQSA9IHdpbiA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuICEhKCgoX2EgPSB3aW4ubWF0Y2hNZWRpYSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwod2luLCAnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzKSB8fCB3aW4ubmF2aWdhdG9yLnN0YW5kYWxvbmUpO1xufTtcbmNvbnN0IHRlc3RVc2VyQWdlbnQgPSAod2luLCBleHByKSA9PiBleHByLnRlc3Qod2luLm5hdmlnYXRvci51c2VyQWdlbnQpO1xuY29uc3QgbWF0Y2hNZWRpYSA9ICh3aW4sIHF1ZXJ5KSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IHdpbi5tYXRjaE1lZGlhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh3aW4sIHF1ZXJ5KS5tYXRjaGVzO1xufTtcbmNvbnN0IFBMQVRGT1JNU19NQVAgPSB7XG4gIGlwYWQ6IGlzSXBhZCxcbiAgaXBob25lOiBpc0lwaG9uZSxcbiAgaW9zOiBpc0lPUyxcbiAgYW5kcm9pZDogaXNBbmRyb2lkLFxuICBwaGFibGV0OiBpc1BoYWJsZXQsXG4gIHRhYmxldDogaXNUYWJsZXQsXG4gIGNvcmRvdmE6IGlzQ29yZG92YSxcbiAgY2FwYWNpdG9yOiBpc0NhcGFjaXRvck5hdGl2ZSxcbiAgZWxlY3Ryb246IGlzRWxlY3Ryb24sXG4gIHB3YTogaXNQV0EsXG4gIG1vYmlsZTogaXNNb2JpbGUsXG4gIG1vYmlsZXdlYjogaXNNb2JpbGVXZWIsXG4gIGRlc2t0b3A6IGlzRGVza3RvcCxcbiAgaHlicmlkOiBpc0h5YnJpZFxufTtcblxuLy8gVE9ETyhGVy0yODMyKTogdHlwZXNcbmxldCBkZWZhdWx0TW9kZTtcbmNvbnN0IGdldElvbk1vZGUgPSByZWYgPT4ge1xuICByZXR1cm4gcmVmICYmIGdldE1vZGUocmVmKSB8fCBkZWZhdWx0TW9kZTtcbn07XG5jb25zdCBpbml0aWFsaXplID0gKHVzZXJDb25maWcgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIGNvbnN0IElvbmljID0gd2luLklvbmljID0gd2luLklvbmljIHx8IHt9O1xuICAvLyBjcmVhdGUgdGhlIElvbmljLmNvbmZpZyBmcm9tIHJhdyBjb25maWcgb2JqZWN0IChpZiBpdCBleGlzdHMpXG4gIC8vIGFuZCBjb252ZXJ0IElvbmljLmNvbmZpZyBpbnRvIGEgQ29uZmlnQXBpIHRoYXQgaGFzIGEgZ2V0KCkgZm5cbiAgY29uc3QgY29uZmlnT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWdGcm9tU2Vzc2lvbih3aW4pKSwge1xuICAgIHBlcnNpc3RDb25maWc6IGZhbHNlXG4gIH0pLCBJb25pYy5jb25maWcpLCBjb25maWdGcm9tVVJMKHdpbikpLCB1c2VyQ29uZmlnKTtcbiAgY29uZmlnLnJlc2V0KGNvbmZpZ09iaik7XG4gIGlmIChjb25maWcuZ2V0Qm9vbGVhbigncGVyc2lzdENvbmZpZycpKSB7XG4gICAgc2F2ZUNvbmZpZyh3aW4sIGNvbmZpZ09iaik7XG4gIH1cbiAgLy8gU2V0dXAgcGxhdGZvcm1zXG4gIHNldHVwUGxhdGZvcm1zKHdpbik7XG4gIC8vIGZpcnN0IHNlZSBpZiB0aGUgbW9kZSB3YXMgc2V0IGFzIGFuIGF0dHJpYnV0ZSBvbiA8aHRtbD5cbiAgLy8gd2hpY2ggY291bGQgaGF2ZSBiZWVuIHNldCBieSB0aGUgdXNlciwgb3IgYnkgcHJlLXJlbmRlcmluZ1xuICAvLyBvdGhlcndpc2UgZ2V0IHRoZSBtb2RlIHZpYSBjb25maWcgc2V0dGluZ3MsIGFuZCBmYWxsYmFjayB0byBtZFxuICBJb25pYy5jb25maWcgPSBjb25maWc7XG4gIElvbmljLm1vZGUgPSBkZWZhdWx0TW9kZSA9IGNvbmZpZy5nZXQoJ21vZGUnLCBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbW9kZScpIHx8IChpc1BsYXRmb3JtKHdpbiwgJ2lvcycpID8gJ2lvcycgOiAnbWQnKSk7XG4gIGNvbmZpZy5zZXQoJ21vZGUnLCBkZWZhdWx0TW9kZSk7XG4gIGRvYy5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdtb2RlJywgZGVmYXVsdE1vZGUpO1xuICBkb2MuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGVmYXVsdE1vZGUpO1xuICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ190ZXN0aW5nJykpIHtcbiAgICBjb25maWcuc2V0KCdhbmltYXRlZCcsIGZhbHNlKTtcbiAgfVxuICBjb25zdCBpc0lvbmljRWxlbWVudCA9IGVsbSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBlbG0udGFnTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ0lPTi0nKTtcbiAgfTtcbiAgY29uc3QgaXNBbGxvd2VkSW9uaWNNb2RlVmFsdWUgPSBlbG1Nb2RlID0+IFsnaW9zJywgJ21kJ10uaW5jbHVkZXMoZWxtTW9kZSk7XG4gIHNldE1vZGUoZWxtID0+IHtcbiAgICB3aGlsZSAoZWxtKSB7XG4gICAgICBjb25zdCBlbG1Nb2RlID0gZWxtLm1vZGUgfHwgZWxtLmdldEF0dHJpYnV0ZSgnbW9kZScpO1xuICAgICAgaWYgKGVsbU1vZGUpIHtcbiAgICAgICAgaWYgKGlzQWxsb3dlZElvbmljTW9kZVZhbHVlKGVsbU1vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsbU1vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJb25pY0VsZW1lbnQoZWxtKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBpb25pYyBtb2RlOiBcIicgKyBlbG1Nb2RlICsgJ1wiLCBleHBlY3RlZDogXCJpb3NcIiBvciBcIm1kXCInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxtID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0TW9kZTtcbiAgfSk7XG59O1xuZXhwb3J0IHsgaXNQbGF0Zm9ybSBhcyBhLCBnZXRJb25Nb2RlIGFzIGIsIGNvbmZpZyBhcyBjLCBnZXRQbGF0Zm9ybXMgYXMgZywgaW5pdGlhbGl6ZSBhcyBpIH07IiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29uZmlnIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwuanMnO1xuXG4vKipcbiAqIExvZ3MgYSB3YXJuaW5nIHRvIHRoZSBjb25zb2xlIHdpdGggYW4gSW9uaWMgcHJlZml4XG4gKiB0byBpbmRpY2F0ZSB0aGUgbGlicmFyeSB0aGF0IGlzIHdhcm5pbmcgdGhlIGRldmVsb3Blci5cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBzdHJpbmcgbWVzc2FnZSB0byBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmNvbnN0IHByaW50SW9uV2FybmluZyA9IChtZXNzYWdlLCAuLi5wYXJhbXMpID0+IHtcbiAgY29uc3QgbG9nTGV2ZWwgPSBjb25maWcuZ2V0KCdsb2dMZXZlbCcsIFwiV0FSTlwiIC8qIExvZ0xldmVsLldBUk4gKi8pO1xuICBpZiAoW1wiV0FSTlwiIC8qIExvZ0xldmVsLldBUk4gKi9dLmluY2x1ZGVzKGxvZ0xldmVsKSkge1xuICAgIHJldHVybiBjb25zb2xlLndhcm4oYFtJb25pYyBXYXJuaW5nXTogJHttZXNzYWdlfWAsIC4uLnBhcmFtcyk7XG4gIH1cbn07XG4vKipcbiAqIExvZ3MgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGUgd2l0aCBhbiBJb25pYyBwcmVmaXhcbiAqIHRvIGluZGljYXRlIHRoZSBsaWJyYXJ5IHRoYXQgaXMgd2FybmluZyB0aGUgZGV2ZWxvcGVyLlxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIHN0cmluZyBtZXNzYWdlIHRvIGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSBwYXJhbXMgLSBBZGRpdGlvbmFsIGFyZ3VtZW50cyB0byBzdXBwbHkgdG8gdGhlIGNvbnNvbGUuZXJyb3IuXG4gKi9cbmNvbnN0IHByaW50SW9uRXJyb3IgPSAobWVzc2FnZSwgLi4ucGFyYW1zKSA9PiB7XG4gIGNvbnN0IGxvZ0xldmVsID0gY29uZmlnLmdldCgnbG9nTGV2ZWwnLCBcIkVSUk9SXCIgLyogTG9nTGV2ZWwuRVJST1IgKi8pO1xuICBpZiAoW1wiRVJST1JcIiAvKiBMb2dMZXZlbC5FUlJPUiAqLywgXCJXQVJOXCIgLyogTG9nTGV2ZWwuV0FSTiAqL10uaW5jbHVkZXMobG9nTGV2ZWwpKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYFtJb25pYyBFcnJvcl06ICR7bWVzc2FnZX1gLCAuLi5wYXJhbXMpO1xuICB9XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBhIHNwZWNpZmljIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSBlbCBUaGUgd2ViIGNvbXBvbmVudCBlbGVtZW50IHRoaXMgaXMgcmVxdWlyaW5nIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHRhcmdldFNlbGVjdG9ycyBUaGUgc2VsZWN0b3Igb3Igc2VsZWN0b3JzIHRoYXQgd2VyZSBub3QgZm91bmQuXG4gKi9cbmNvbnN0IHByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IgPSAoZWwsIC4uLnRhcmdldFNlbGVjdG9ycykgPT4ge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihgPCR7ZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT4gbXVzdCBiZSB1c2VkIGluc2lkZSAke3RhcmdldFNlbGVjdG9ycy5qb2luKCcgb3IgJyl9LmApO1xufTtcbmV4cG9ydCB7IHByaW50SW9uRXJyb3IgYXMgYSwgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciBhcyBiLCBwcmludElvbldhcm5pbmcgYXMgcCB9OyIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCB0cmFuc2l0aW9uRW5kQXN5bmMgPSAoZWwsIGV4cGVjdGVkRHVyYXRpb24gPSAwKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB0cmFuc2l0aW9uRW5kKGVsLCBleHBlY3RlZER1cmF0aW9uLCByZXNvbHZlKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBbGxvd3MgZGV2ZWxvcGVyIHRvIHdhaXQgZm9yIGEgdHJhbnNpdGlvblxuICogdG8gZmluaXNoIGFuZCBmYWxsYmFjayB0byBhIHRpbWVyIGlmIHRoZVxuICogdHJhbnNpdGlvbiBpcyBjYW5jZWxsZWQgb3Igb3RoZXJ3aXNlXG4gKiBuZXZlciBmaW5pc2hlcy4gQWxzbyBzZWUgdHJhbnNpdGlvbkVuZEFzeW5jXG4gKiB3aGljaCBpcyBhbiBhd2FpdC1hYmxlIHZlcnNpb24gb2YgdGhpcy5cbiAqL1xuY29uc3QgdHJhbnNpdGlvbkVuZCA9IChlbCwgZXhwZWN0ZWREdXJhdGlvbiA9IDAsIGNhbGxiYWNrKSA9PiB7XG4gIGxldCB1blJlZ1RyYW5zO1xuICBsZXQgYW5pbWF0aW9uVGltZW91dDtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG4gIGNvbnN0IEFOSU1BVElPTl9GQUxMQkFDS19USU1FT1VUID0gNTAwO1xuICBjb25zdCB1bnJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGlmICh1blJlZ1RyYW5zKSB7XG4gICAgICB1blJlZ1RyYW5zKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSBldiA9PiB7XG4gICAgaWYgKGV2ID09PSB1bmRlZmluZWQgfHwgZWwgPT09IGV2LnRhcmdldCkge1xuICAgICAgdW5yZWdpc3RlcigpO1xuICAgICAgY2FsbGJhY2soZXYpO1xuICAgIH1cbiAgfTtcbiAgaWYgKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XG4gICAgYW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQob25UcmFuc2l0aW9uRW5kLCBleHBlY3RlZER1cmF0aW9uICsgQU5JTUFUSU9OX0ZBTExCQUNLX1RJTUVPVVQpO1xuICAgIHVuUmVnVHJhbnMgPSAoKSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uVGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgYW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBvblRyYW5zaXRpb25FbmQsIG9wdHMpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5yZWdpc3Rlcjtcbn07XG4vKipcbiAqIFdhaXRzIGZvciBhIGNvbXBvbmVudCB0byBiZSByZWFkeSBmb3JcbiAqIGJvdGggY3VzdG9tIGVsZW1lbnQgYW5kIG5vbi1jdXN0b20gZWxlbWVudCBidWlsZHMuXG4gKiBJZiBub24tY3VzdG9tIGVsZW1lbnQgYnVpbGQsIGVsLmNvbXBvbmVudE9uUmVhZHlcbiAqIHdpbGwgYmUgdXNlZC5cbiAqIEZvciBjdXN0b20gZWxlbWVudCBidWlsZHMsIHdlIHdhaXQgYSBmcmFtZVxuICogc28gdGhhdCB0aGUgaW5uZXIgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudFxuICogaGF2ZSBhIGNoYW5jZSB0byByZW5kZXIuXG4gKlxuICogVXNlIHRoaXMgdXRpbGl0eSByYXRoZXIgdGhhbiBjYWxsaW5nXG4gKiBlbC5jb21wb25lbnRPblJlYWR5IHlvdXJzZWxmLlxuICovXG5jb25zdCBjb21wb25lbnRPblJlYWR5ID0gKGVsLCBjYWxsYmFjaykgPT4ge1xuICBpZiAoZWwuY29tcG9uZW50T25SZWFkeSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tY29tcG9uZW50LW9uLXJlYWR5LW1ldGhvZFxuICAgIGVsLmNvbXBvbmVudE9uUmVhZHkoKS50aGVuKHJlc29sdmVkRWwgPT4gY2FsbGJhY2socmVzb2x2ZWRFbCkpO1xuICB9IGVsc2Uge1xuICAgIHJhZigoKSA9PiBjYWxsYmFjayhlbCkpO1xuICB9XG59O1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBjaGVja3MgaWYgYSBTdGVuY2lsIGNvbXBvbmVudCBpcyB1c2luZ1xuICogdGhlIGxhenkgbG9hZGVkIGJ1aWxkIG9mIFN0ZW5jaWwuIFJldHVybnMgYHRydWVgIGlmXG4gKiB0aGUgY29tcG9uZW50IGlzIGxhenkgbG9hZGVkLiBSZXR1cm5zIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5jb25zdCBoYXNMYXp5QnVpbGQgPSBzdGVuY2lsRWwgPT4ge1xuICByZXR1cm4gc3RlbmNpbEVsLmNvbXBvbmVudE9uUmVhZHkgIT09IHVuZGVmaW5lZDtcbn07XG4vKipcbiAqIEVsZW1lbnRzIGluc2lkZSBvZiB3ZWIgY29tcG9uZW50cyBzb21ldGltZXMgbmVlZCB0byBpbmhlcml0IGdsb2JhbCBhdHRyaWJ1dGVzXG4gKiBzZXQgb24gdGhlIGhvc3QuIEZvciBleGFtcGxlLCB0aGUgaW5uZXIgaW5wdXQgaW4gYGlvbi1pbnB1dGAgc2hvdWxkIGluaGVyaXRcbiAqIHRoZSBgdGl0bGVgIGF0dHJpYnV0ZSB0aGF0IGRldmVsb3BlcnMgc2V0IGRpcmVjdGx5IG9uIGBpb24taW5wdXRgLiBUaGlzXG4gKiBoZWxwZXIgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBpbiBjb21wb25lbnRXaWxsTG9hZCBhbmQgYXNzaWduZWQgdG8gYSB2YXJpYWJsZVxuICogdGhhdCBpcyBsYXRlciB1c2VkIGluIHRoZSByZW5kZXIgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlYWN0aXZlIGFzIGNoYW5naW5nIGF0dHJpYnV0ZXMgb24gdGhlIGhvc3QgZWxlbWVudFxuICogZG9lcyBub3QgdHJpZ2dlciBhIHJlLXJlbmRlci5cbiAqL1xuY29uc3QgaW5oZXJpdEF0dHJpYnV0ZXMgPSAoZWwsIGF0dHJpYnV0ZXMgPSBbXSkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVPYmplY3QgPSB7fTtcbiAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdFthdHRyXSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXR0cmlidXRlT2JqZWN0O1xufTtcbi8qKlxuICogTGlzdCBvZiBhdmFpbGFibGUgQVJJQSBhdHRyaWJ1dGVzICsgYHJvbGVgLlxuICogUmVtb3ZlZCBkZXByZWNhdGVkIGF0dHJpYnV0ZXMuXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvQXR0cmlidXRlc1xuICovXG5jb25zdCBhcmlhQXR0cmlidXRlcyA9IFsncm9sZScsICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCAnYXJpYS1hdG9taWMnLCAnYXJpYS1hdXRvY29tcGxldGUnLCAnYXJpYS1icmFpbGxlbGFiZWwnLCAnYXJpYS1icmFpbGxlcm9sZWRlc2NyaXB0aW9uJywgJ2FyaWEtYnVzeScsICdhcmlhLWNoZWNrZWQnLCAnYXJpYS1jb2xjb3VudCcsICdhcmlhLWNvbGluZGV4JywgJ2FyaWEtY29saW5kZXh0ZXh0JywgJ2FyaWEtY29sc3BhbicsICdhcmlhLWNvbnRyb2xzJywgJ2FyaWEtY3VycmVudCcsICdhcmlhLWRlc2NyaWJlZGJ5JywgJ2FyaWEtZGVzY3JpcHRpb24nLCAnYXJpYS1kZXRhaWxzJywgJ2FyaWEtZGlzYWJsZWQnLCAnYXJpYS1lcnJvcm1lc3NhZ2UnLCAnYXJpYS1leHBhbmRlZCcsICdhcmlhLWZsb3d0bycsICdhcmlhLWhhc3BvcHVwJywgJ2FyaWEtaGlkZGVuJywgJ2FyaWEtaW52YWxpZCcsICdhcmlhLWtleXNob3J0Y3V0cycsICdhcmlhLWxhYmVsJywgJ2FyaWEtbGFiZWxsZWRieScsICdhcmlhLWxldmVsJywgJ2FyaWEtbGl2ZScsICdhcmlhLW11bHRpbGluZScsICdhcmlhLW11bHRpc2VsZWN0YWJsZScsICdhcmlhLW9yaWVudGF0aW9uJywgJ2FyaWEtb3ducycsICdhcmlhLXBsYWNlaG9sZGVyJywgJ2FyaWEtcG9zaW5zZXQnLCAnYXJpYS1wcmVzc2VkJywgJ2FyaWEtcmVhZG9ubHknLCAnYXJpYS1yZWxldmFudCcsICdhcmlhLXJlcXVpcmVkJywgJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJywgJ2FyaWEtcm93Y291bnQnLCAnYXJpYS1yb3dpbmRleCcsICdhcmlhLXJvd2luZGV4dGV4dCcsICdhcmlhLXJvd3NwYW4nLCAnYXJpYS1zZWxlY3RlZCcsICdhcmlhLXNldHNpemUnLCAnYXJpYS1zb3J0JywgJ2FyaWEtdmFsdWVtYXgnLCAnYXJpYS12YWx1ZW1pbicsICdhcmlhLXZhbHVlbm93JywgJ2FyaWEtdmFsdWV0ZXh0J107XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgYXJpYSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGNvcGllZCBmcm9tXG4gKiB0aGUgc2hhZG93IGhvc3QgZWxlbWVudCB0byBhIHRhcmdldCB3aXRoaW4gdGhlIGxpZ2h0IERPTS5cbiAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudCB0aGF0IHRoZSBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb3BpZWQgZnJvbS5cbiAqIEBwYXJhbSBpZ25vcmVMaXN0IFRoZSBsaXN0IG9mIGFyaWEtYXR0cmlidXRlcyB0byBpZ25vcmUgcmVmbGVjdGluZyBhbmQgcmVtb3ZpbmcgZnJvbSB0aGUgaG9zdC5cbiAqIFVzZSB0aGlzIGluIGluc3RhbmNlcyB3aGVyZSB3ZSBtYW51YWxseSBzcGVjaWZ5IGFyaWEgYXR0cmlidXRlcyBvbiB0aGUgYDxIb3N0PmAgZWxlbWVudC5cbiAqL1xuY29uc3QgaW5oZXJpdEFyaWFBdHRyaWJ1dGVzID0gKGVsLCBpZ25vcmVMaXN0KSA9PiB7XG4gIGxldCBhdHRyaWJ1dGVzVG9Jbmhlcml0ID0gYXJpYUF0dHJpYnV0ZXM7XG4gIGlmIChpZ25vcmVMaXN0ICYmIGlnbm9yZUxpc3QubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNUb0luaGVyaXQgPSBhdHRyaWJ1dGVzVG9Jbmhlcml0LmZpbHRlcihhdHRyID0+ICFpZ25vcmVMaXN0LmluY2x1ZGVzKGF0dHIpKTtcbiAgfVxuICByZXR1cm4gaW5oZXJpdEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXNUb0luaGVyaXQpO1xufTtcbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSAoZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdHMpID0+IHtcbiAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0cyk7XG59O1xuY29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IChlbCwgZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0cykgPT4ge1xuICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRzKTtcbn07XG4vKipcbiAqIEdldHMgdGhlIHJvb3QgY29udGV4dCBvZiBhIHNoYWRvdyBkb20gZWxlbWVudFxuICogT24gbmV3ZXIgYnJvd3NlcnMgdGhpcyB3aWxsIGJlIHRoZSBzaGFkb3dSb290LFxuICogYnV0IGZvciBvbGRlciBicm93c2VyIHRoaXMgbWF5IGp1c3QgYmUgdGhlXG4gKiBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBVc2VmdWwgZm9yIHdoZW5ldmVyIHlvdSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAqIGRvIFwibXlFbGVtZW50LnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoLi4uKVwiLlxuICovXG5jb25zdCBnZXRFbGVtZW50Um9vdCA9IChlbCwgZmFsbGJhY2sgPSBlbCkgPT4ge1xuICByZXR1cm4gZWwuc2hhZG93Um9vdCB8fCBmYWxsYmFjaztcbn07XG4vKipcbiAqIFBhdGNoZWQgdmVyc2lvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhhdCBhdm9pZHMgbmd6b25lXG4gKiBVc2Ugb25seSB3aGVuIHlvdSBrbm93IG5nem9uZSBzaG91bGQgbm90IHJ1blxuICovXG5jb25zdCByYWYgPSBoID0+IHtcbiAgaWYgKHR5cGVvZiBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpO1xuICB9XG4gIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgfVxuICByZXR1cm4gc2V0VGltZW91dChoKTtcbn07XG5jb25zdCBoYXNTaGFkb3dEb20gPSBlbCA9PiB7XG4gIHJldHVybiAhIWVsLnNoYWRvd1Jvb3QgJiYgISFlbC5hdHRhY2hTaGFkb3c7XG59O1xuY29uc3QgZm9jdXNWaXNpYmxlRWxlbWVudCA9IGVsID0+IHtcbiAgZWwuZm9jdXMoKTtcbiAgLyoqXG4gICAqIFdoZW4gcHJvZ3JhbW1hdGljYWxseSBmb2N1c2luZyBhbiBlbGVtZW50LFxuICAgKiB0aGUgZm9jdXMtdmlzaWJsZSB1dGlsaXR5IHdpbGwgbm90IHJ1biBiZWNhdXNlXG4gICAqIGl0IGlzIGV4cGVjdGluZyBhIGtleWJvYXJkIGV2ZW50IHRvIGhhdmUgdHJpZ2dlcmVkIHRoaXM7XG4gICAqIGhvd2V2ZXIsIHRoZXJlIGFyZSB0aW1lcyB3aGVuIHdlIG5lZWQgdG8gbWFudWFsbHkgY29udHJvbFxuICAgKiB0aGlzIGJlaGF2aW9yIHNvIHdlIGNhbGwgdGhlIGBzZXRGb2N1c2AgbWV0aG9kIG9uIGlvbi1hcHBcbiAgICogd2hpY2ggd2lsbCBsZXQgdXMgZXhwbGljaXRseSBzZXQgdGhlIGVsZW1lbnRzIHRvIGZvY3VzLlxuICAgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWZvY3VzYWJsZScpKSB7XG4gICAgY29uc3QgYXBwID0gZWwuY2xvc2VzdCgnaW9uLWFwcCcpO1xuICAgIGlmIChhcHApIHtcbiAgICAgIGFwcC5zZXRGb2N1cyhbZWxdKTtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gYWRkIGEgaGlkZGVuIGlucHV0IHRvIGEgaG9zdCBlbGVtZW50IHRoYXQgY29udGFpbnNcbiAqIGEgU2hhZG93IERPTS4gSXQgZG9lcyBub3QgYWRkIHRoZSBpbnB1dCBpbnNpZGUgb2YgdGhlIFNoYWRvdyByb290IHdoaWNoXG4gKiBhbGxvd3MgaXQgdG8gYmUgcGlja2VkIHVwIGluc2lkZSBvZiBmb3Jtcy4gSXQgc2hvdWxkIGNvbnRhaW4gdGhlIHNhbWVcbiAqIHZhbHVlcyBhcyB0aGUgaG9zdCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBhbHdheXMgQWRkIGEgaGlkZGVuIGlucHV0IGV2ZW4gaWYgdGhlIGNvbnRhaW5lciBkb2VzIG5vdCB1c2UgU2hhZG93XG4gKiBAcGFyYW0gY29udGFpbmVyIFRoZSBlbGVtZW50IHdoZXJlIHRoZSBpbnB1dCB3aWxsIGJlIGFkZGVkXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaW5wdXRcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGlucHV0XG4gKiBAcGFyYW0gZGlzYWJsZWQgSWYgdHJ1ZSwgdGhlIGlucHV0IGlzIGRpc2FibGVkXG4gKi9cbmNvbnN0IHJlbmRlckhpZGRlbklucHV0ID0gKGFsd2F5cywgY29udGFpbmVyLCBuYW1lLCB2YWx1ZSwgZGlzYWJsZWQpID0+IHtcbiAgaWYgKGFsd2F5cyB8fCBoYXNTaGFkb3dEb20oY29udGFpbmVyKSkge1xuICAgIGxldCBpbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dC5hdXgtaW5wdXQnKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICBpbnB1dCA9IGNvbnRhaW5lci5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhdXgtaW5wdXQnKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxuICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgfVxufTtcbmNvbnN0IGNsYW1wID0gKG1pbiwgbiwgbWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG4sIG1heCkpO1xufTtcbmNvbnN0IGFzc2VydCA9IChhY3R1YWwsIHJlYXNvbikgPT4ge1xuICBpZiAoIWFjdHVhbCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnQVNTRVJUOiAnICsgcmVhc29uO1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgZGVidWdnZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn07XG5jb25zdCBwb2ludGVyQ29vcmQgPSBldiA9PiB7XG4gIC8vIGdldCBYIGNvb3JkaW5hdGVzIGZvciBlaXRoZXIgYSBtb3VzZSBjbGlja1xuICAvLyBvciBhIHRvdWNoIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gZXZlbnRcbiAgaWYgKGV2KSB7XG4gICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldi5jaGFuZ2VkVG91Y2hlcztcbiAgICBpZiAoY2hhbmdlZFRvdWNoZXMgJiYgY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG91Y2ggPSBjaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgIHk6IHRvdWNoLmNsaWVudFlcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChldi5wYWdlWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBldi5wYWdlWCxcbiAgICAgICAgeTogZXYucGFnZVlcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuLyoqXG4gKiBAaGlkZGVuXG4gKiBHaXZlbiBhIHNpZGUsIHJldHVybiBpZiBpdCBzaG91bGQgYmUgb24gdGhlIGVuZFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGRpclxuICogQHBhcmFtIHNpZGUgdGhlIHNpZGVcbiAqIEBwYXJhbSBpc1JUTCB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBkaXIgaXMgcnRsXG4gKi9cbmNvbnN0IGlzRW5kU2lkZSA9IHNpZGUgPT4ge1xuICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIHJldHVybiBpc1JUTDtcbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuICFpc1JUTDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7c2lkZX1cIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgW3NpZGVdLiBVc2UgXCJzdGFydFwiIG9yIFwiZW5kXCIgaW5zdGVhZC5gKTtcbiAgfVxufTtcbmNvbnN0IGRlYm91bmNlRXZlbnQgPSAoZXZlbnQsIHdhaXQpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWwgPSBldmVudC5fb3JpZ2luYWwgfHwgZXZlbnQ7XG4gIHJldHVybiB7XG4gICAgX29yaWdpbmFsOiBldmVudCxcbiAgICBlbWl0OiBkZWJvdW5jZShvcmlnaW5hbC5lbWl0LmJpbmQob3JpZ2luYWwpLCB3YWl0KVxuICB9O1xufTtcbmNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAwKSA9PiB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgd2FpdCwgLi4uYXJncyk7XG4gIH07XG59O1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSB0d28gc3RyaW5nIG1hcHMgYXJlIHNoYWxsb3cgZXF1YWwuXG4gKlxuICogdW5kZWZpbmVkIGlzIHRyZWF0ZWQgYXMgYW4gZW1wdHkgbWFwLlxuICpcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGtleXMgYXJlIHRoZSBzYW1lIGFuZCB0aGUgdmFsdWVzIGFyZSBzaGFsbG93IGVxdWFsLlxuICovXG5jb25zdCBzaGFsbG93RXF1YWxTdHJpbmdNYXAgPSAobWFwMSwgbWFwMikgPT4ge1xuICBtYXAxICE9PSBudWxsICYmIG1hcDEgIT09IHZvaWQgMCA/IG1hcDEgOiBtYXAxID0ge307XG4gIG1hcDIgIT09IG51bGwgJiYgbWFwMiAhPT0gdm9pZCAwID8gbWFwMiA6IG1hcDIgPSB7fTtcbiAgaWYgKG1hcDEgPT09IG1hcDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG1hcDEpO1xuICBpZiAoa2V5czEubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhtYXAyKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChjb25zdCBrMSBvZiBrZXlzMSkge1xuICAgIGlmICghKGsxIGluIG1hcDIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtYXAxW2sxXSAhPT0gbWFwMltrMV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBDaGVja3MgaW5wdXQgZm9yIHVzYWJsZSBudW1iZXIuIE5vdCBOYU4gYW5kIG5vdCBJbmZpbml0ZS5cbiAqL1xuY29uc3QgaXNTYWZlTnVtYmVyID0gaW5wdXQgPT4ge1xuICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oaW5wdXQpICYmIGlzRmluaXRlKGlucHV0KTtcbn07XG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyIGFzIGEsIHJlbW92ZUV2ZW50TGlzdGVuZXIgYXMgYiwgY29tcG9uZW50T25SZWFkeSBhcyBjLCBpbmhlcml0QXR0cmlidXRlcyBhcyBkLCByZW5kZXJIaWRkZW5JbnB1dCBhcyBlLCBmb2N1c1Zpc2libGVFbGVtZW50IGFzIGYsIGdldEVsZW1lbnRSb290IGFzIGcsIGhhc1NoYWRvd0RvbSBhcyBoLCBpbmhlcml0QXJpYUF0dHJpYnV0ZXMgYXMgaSwgaGFzTGF6eUJ1aWxkIGFzIGosIGNsYW1wIGFzIGssIGRlYm91bmNlRXZlbnQgYXMgbCwgaXNFbmRTaWRlIGFzIG0sIGFzc2VydCBhcyBuLCBpc1NhZmVOdW1iZXIgYXMgbywgZGVib3VuY2UgYXMgcCwgcG9pbnRlckNvb3JkIGFzIHEsIHJhZiBhcyByLCBzaGFsbG93RXF1YWxTdHJpbmdNYXAgYXMgcywgdHJhbnNpdGlvbkVuZEFzeW5jIGFzIHQgfTsiLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb25maWcgfSBmcm9tICcuL2lvbmljLWdsb2JhbC5qcyc7XG5pbXBvcnQgeyB3cml0ZVRhc2ssIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQnO1xuaW1wb3J0IHsgcCBhcyBwcmludElvbldhcm5pbmcgfSBmcm9tICcuL2luZGV4Ni5qcyc7XG5pbXBvcnQgeyByIGFzIHJhZiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5jb25zdCBMSUZFQ1lDTEVfV0lMTF9FTlRFUiA9ICdpb25WaWV3V2lsbEVudGVyJztcbmNvbnN0IExJRkVDWUNMRV9ESURfRU5URVIgPSAnaW9uVmlld0RpZEVudGVyJztcbmNvbnN0IExJRkVDWUNMRV9XSUxMX0xFQVZFID0gJ2lvblZpZXdXaWxsTGVhdmUnO1xuY29uc3QgTElGRUNZQ0xFX0RJRF9MRUFWRSA9ICdpb25WaWV3RGlkTGVhdmUnO1xuY29uc3QgTElGRUNZQ0xFX1dJTExfVU5MT0FEID0gJ2lvblZpZXdXaWxsVW5sb2FkJztcblxuLyoqXG4gKiBNb3ZlcyBmb2N1cyB0byBhIHNwZWNpZmllZCBlbGVtZW50LiBOb3RlIHRoYXQgd2UgZG8gbm90IHJlbW92ZSB0aGUgdGFiaW5kZXhcbiAqIGJlY2F1c2UgdGhhdCBjYW4gcmVzdWx0IGluIGFuIHVuaW50ZW50aW9uYWwgYmx1ci4gTm9uLWZvY3VzYWJsZXMgY2FuJ3QgYmVcbiAqIGZvY3VzZWQsIHNvIHRoZSBib2R5IHdpbGwgZ2V0IGZvY3VzZWQgYWdhaW4uXG4gKi9cbmNvbnN0IG1vdmVGb2N1cyA9IGVsID0+IHtcbiAgZWwudGFiSW5kZXggPSAtMTtcbiAgZWwuZm9jdXMoKTtcbn07XG4vKipcbiAqIEVsZW1lbnRzIHRoYXQgYXJlIGhpZGRlbiB1c2luZyBgZGlzcGxheTogbm9uZWAgc2hvdWxkIG5vdCBiZSBmb2N1c2VkIGV2ZW4gaWZcbiAqIHRoZXkgYXJlIHByZXNlbnQgaW4gdGhlIERPTS5cbiAqL1xuY29uc3QgaXNWaXNpYmxlID0gZWwgPT4ge1xuICByZXR1cm4gZWwub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xufTtcbi8qKlxuICogVGhlIGZvY3VzIGNvbnRyb2xsZXIgYWxsb3dzIHVzIHRvIG1hbmFnZSBmb2N1cyB3aXRoaW4gYSB2aWV3IHNvIGFzc2lzdGl2ZVxuICogdGVjaG5vbG9naWVzIGNhbiBpbmZvcm0gdXNlcnMgb2YgY2hhbmdlcyB0byB0aGUgbmF2aWdhdGlvbiBzdGF0ZS4gVHJhZGl0aW9uYWxcbiAqIG5hdGl2ZSBhcHBzIGhhdmUgYSB3YXkgb2YgaW5mb3JtaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2d5IGFib3V0IGEgbmF2aWdhdGlvblxuICogc3RhdGUgY2hhbmdlLiBNb2JpbGUgYnJvd3NlcnMgaGF2ZSB0aGlzIHRvbywgYnV0IG9ubHkgd2hlbiBkb2luZyBhIGZ1bGwgcGFnZVxuICogbG9hZC4gSW4gYSBzaW5nbGUgcGFnZSBhcHAgd2UgZG8gbm90IGRvIHRoYXQsIHNvIHdlIG5lZWQgdG8gYnVpbGQgdGhpc1xuICogaW50ZWdyYXRpb24gb3Vyc2VsdmVzLlxuICovXG5jb25zdCBjcmVhdGVGb2N1c0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmVWaWV3Rm9jdXMgPSByZWZlcmVuY2VFbCA9PiB7XG4gICAgY29uc3QgZm9jdXNNYW5hZ2VyRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2ZvY3VzTWFuYWdlclByaW9yaXR5JywgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZ29pbmcgYmFjayB0byBhIHByZXZpb3VzbHkgdmlzaXRlZCBwYWdlIGZvY3VzIHNob3VsZCB0eXBpY2FsbHkgYmUgbW92ZWRcbiAgICAgKiBiYWNrIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGxhc3QgZm9jdXNlZCB3aGVuIHRoZSB1c2VyIHdhcyBvbiB0aGlzIHZpZXcuXG4gICAgICovXG4gICAgaWYgKGZvY3VzTWFuYWdlckVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChhY3RpdmVFbCAhPT0gbnVsbCAmJiAocmVmZXJlbmNlRWwgPT09IG51bGwgfHwgcmVmZXJlbmNlRWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmVyZW5jZUVsLmNvbnRhaW5zKGFjdGl2ZUVsKSkpIHtcbiAgICAgICAgYWN0aXZlRWwuc2V0QXR0cmlidXRlKExBU1RfRk9DVVMsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRWaWV3Rm9jdXMgPSByZWZlcmVuY2VFbCA9PiB7XG4gICAgY29uc3QgZm9jdXNNYW5hZ2VyUHJpb3JpdGllcyA9IGNvbmZpZy5nZXQoJ2ZvY3VzTWFuYWdlclByaW9yaXR5JywgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBkZXNjZW5kYW50IG9mIHRoZSByZWZlcmVuY2VFbCB0aGVuIGl0J3MgcG9zc2libGVcbiAgICAgKiB0aGF0IHRoZSBhcHAgZGV2ZWxvcGVyIG1hbnVhbGx5IG1vdmVkIGZvY3VzLCBzbyB3ZSBkbyBub3Qgd2FudCB0byBvdmVycmlkZSB0aGF0LlxuICAgICAqIFRoaXMgY2FuIGhhcHBlbiB3aXRoIGlucHV0cyB0aGUgYXJlIGZvY3VzZWQgd2hlbiBhIHZpZXcgdHJhbnNpdGlvbnMgaW4uXG4gICAgICovXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9jdXNNYW5hZ2VyUHJpb3JpdGllcykgJiYgIXJlZmVyZW5jZUVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gZ29pbmcgYmFjayB0byBhIHByZXZpb3VzbHkgdmlzaXRlZCB2aWV3IGZvY3VzIHNob3VsZCBhbHdheXMgYmUgbW92ZWQgYmFja1xuICAgICAgICogdG8gdGhlIGVsZW1lbnQgdGhhdCB0aGUgdXNlciB3YXMgbGFzdCBmb2N1c2VkIG9uIHdoZW4gdGhleSB3ZXJlIG9uIHRoaXMgdmlldy5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbGFzdEZvY3VzID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcihgWyR7TEFTVF9GT0NVU31dYCk7XG4gICAgICBpZiAobGFzdEZvY3VzICYmIGlzVmlzaWJsZShsYXN0Rm9jdXMpKSB7XG4gICAgICAgIG1vdmVGb2N1cyhsYXN0Rm9jdXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIGZvY3VzTWFuYWdlclByaW9yaXRpZXMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciBlYWNoIHJlY29nbml6ZWQgY2FzZSAoZXhjbHVkaW5nIHRoZSBkZWZhdWx0IGNhc2UpIG1ha2Ugc3VyZSB0byByZXR1cm5cbiAgICAgICAgICogc28gdGhhdCB0aGUgZmFsbGJhY2sgZm9jdXMgYmVoYXZpb3IgZG9lcyBub3QgcnVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXZSBpbnRlbnRpb25hbGx5IHF1ZXJ5IGZvciBzcGVjaWZpYyByb2xlcy9zZW1hbnRpYyBlbGVtZW50cyBzbyB0aGF0IHRoZVxuICAgICAgICAgKiB0cmFuc2l0aW9uIG1hbmFnZXIgY2FuIHdvcmsgd2l0aCBib3RoIElvbmljIGFuZCBub24tSW9uaWMgVUkgY29tcG9uZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgbmV3IHNlbGVjdG9ycyBhcmUgYWRkZWQsIGJlIHN1cmUgdG8gcmVtb3ZlIHRoZSBvdXRsaW5lIHJpbmcgYnkgYWRkaW5nXG4gICAgICAgICAqIG5ldyBzZWxlY3RvcnMgdG8gcnVsZSBpbiBjb3JlLnNjc3MuXG4gICAgICAgICAqL1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignbWFpbiwgW3JvbGU9XCJtYWluXCJdJyk7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBpc1Zpc2libGUoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgbW92ZUZvY3VzKGNvbnRlbnQpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdPbmUgPSByZWZlcmVuY2VFbC5xdWVyeVNlbGVjdG9yKCdoMSwgW3JvbGU9XCJoZWFkaW5nXCJdW2FyaWEtbGV2ZWw9XCIxXCJdJyk7XG4gICAgICAgICAgICBpZiAoaGVhZGluZ09uZSAmJiBpc1Zpc2libGUoaGVhZGluZ09uZSkpIHtcbiAgICAgICAgICAgICAgbW92ZUZvY3VzKGhlYWRpbmdPbmUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiYW5uZXInOlxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignaGVhZGVyLCBbcm9sZT1cImJhbm5lclwiXScpO1xuICAgICAgICAgICAgaWYgKGhlYWRlciAmJiBpc1Zpc2libGUoaGVhZGVyKSkge1xuICAgICAgICAgICAgICBtb3ZlRm9jdXMoaGVhZGVyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByaW50SW9uV2FybmluZyhgVW5yZWNvZ25pemVkIGZvY3VzIG1hbmFnZXIgcHJpb3JpdHkgdmFsdWUgJHtwcmlvcml0eX1gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIGlzIG5vdGhpbmcgdG8gZm9jdXMgdGhlbiBmb2N1cyB0aGUgcGFnZSBzbyBmb2N1cyBhdCBsZWFzdCBtb3ZlcyB0b1xuICAgICAgICogdGhlIGNvcnJlY3Qgdmlldy4gVGhlIGJyb3dzZXIgd2lsbCB0aGVuIGRldGVybWluZSB3aGVyZSB3aXRoaW4gdGhlIHBhZ2UgdG9cbiAgICAgICAqIG1vdmUgZm9jdXMgdG8uXG4gICAgICAgKi9cbiAgICAgIG1vdmVGb2N1cyhyZWZlcmVuY2VFbCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHNhdmVWaWV3Rm9jdXMsXG4gICAgc2V0Vmlld0ZvY3VzXG4gIH07XG59O1xuY29uc3QgTEFTVF9GT0NVUyA9ICdpb24tbGFzdC1mb2N1cyc7XG5jb25zdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL2lvcy50cmFuc2l0aW9uLmpzJyk7XG5jb25zdCBtZFRyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vbWQudHJhbnNpdGlvbi5qcycpO1xuY29uc3QgZm9jdXNDb250cm9sbGVyID0gY3JlYXRlRm9jdXNDb250cm9sbGVyKCk7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY29uc3QgdHJhbnNpdGlvbiA9IG9wdHMgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICBiZWZvcmVUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgcnVuVHJhbnNpdGlvbihvcHRzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgcmVzdWx0LmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBiZWZvcmVUcmFuc2l0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBmb2N1c0NvbnRyb2xsZXIuc2F2ZVZpZXdGb2N1cyhsZWF2aW5nRWwpO1xuICBzZXRaSW5kZXgoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzLmRpcmVjdGlvbik7XG4gIGlmIChvcHRzLnNob3dHb0JhY2spIHtcbiAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2Nhbi1nby1iYWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xuICB9XG4gIHNldFBhZ2VIaWRkZW4oZW50ZXJpbmdFbCwgZmFsc2UpO1xuICAvKipcbiAgICogV2hlbiB0cmFuc2l0aW9uaW5nLCB0aGUgcGFnZSBzaG91bGQgbm90XG4gICAqIHJlc3BvbmQgdG8gY2xpY2sgZXZlbnRzLiBUaGlzIHJlc29sdmVzIHNtYWxsXG4gICAqIGlzc3VlcyBsaWtlIHVzZXJzIGRvdWJsZSB0YXBwaW5nIHRoZSBpb24tYmFjay1idXR0b24uXG4gICAqIFRoZXNlIHBvaW50ZXIgZXZlbnRzIGFyZSByZW1vdmVkIGluIGBhZnRlclRyYW5zaXRpb25gLlxuICAgKi9cbiAgZW50ZXJpbmdFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICBpZiAobGVhdmluZ0VsKSB7XG4gICAgc2V0UGFnZUhpZGRlbihsZWF2aW5nRWwsIGZhbHNlKTtcbiAgICBsZWF2aW5nRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgfVxufTtcbmNvbnN0IHJ1blRyYW5zaXRpb24gPSBhc3luYyBvcHRzID0+IHtcbiAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IGF3YWl0IGdldEFuaW1hdGlvbkJ1aWxkZXIob3B0cyk7XG4gIGNvbnN0IGFuaSA9IGFuaW1hdGlvbkJ1aWxkZXIgJiYgQnVpbGQuaXNCcm93c2VyID8gYW5pbWF0aW9uKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpIDogbm9BbmltYXRpb24ob3B0cyk7IC8vIGZhc3QgcGF0aCBmb3Igbm8gYW5pbWF0aW9uXG4gIHJldHVybiBhbmk7XG59O1xuY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICBlbnRlcmluZ0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZWF2aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gICAgbGVhdmluZ0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuICB9XG4gIGZvY3VzQ29udHJvbGxlci5zZXRWaWV3Rm9jdXMoZW50ZXJpbmdFbCk7XG59O1xuY29uc3QgZ2V0QW5pbWF0aW9uQnVpbGRlciA9IGFzeW5jIG9wdHMgPT4ge1xuICBpZiAoIW9wdHMubGVhdmluZ0VsIHx8ICFvcHRzLmFuaW1hdGVkIHx8IG9wdHMuZHVyYXRpb24gPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChvcHRzLmFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICByZXR1cm4gb3B0cy5hbmltYXRpb25CdWlsZGVyO1xuICB9XG4gIGNvbnN0IGdldEFuaW1hdGlvbiA9IG9wdHMubW9kZSA9PT0gJ2lvcycgPyAoYXdhaXQgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5pb3NUcmFuc2l0aW9uQW5pbWF0aW9uIDogKGF3YWl0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XG4gIHJldHVybiBnZXRBbmltYXRpb247XG59O1xuY29uc3QgYW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpID0+IHtcbiAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIHRydWUpO1xuICBjb25zdCB0cmFucyA9IGFuaW1hdGlvbkJ1aWxkZXIob3B0cy5iYXNlRWwsIG9wdHMpO1xuICBmaXJlV2lsbEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcbiAgY29uc3QgZGlkQ29tcGxldGUgPSBhd2FpdCBwbGF5VHJhbnNpdGlvbih0cmFucywgb3B0cyk7XG4gIGlmIChvcHRzLnByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICBvcHRzLnByb2dyZXNzQ2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgfVxuICBpZiAoZGlkQ29tcGxldGUpIHtcbiAgICBmaXJlRGlkRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGFzQ29tcGxldGVkOiBkaWRDb21wbGV0ZSxcbiAgICBhbmltYXRpb246IHRyYW5zXG4gIH07XG59O1xuY29uc3Qgbm9BbmltYXRpb24gPSBhc3luYyBvcHRzID0+IHtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGZvY3VzTWFuYWdlckVuYWJsZWQgPSBjb25maWcuZ2V0KCdmb2N1c01hbmFnZXJQcmlvcml0eScsIGZhbHNlKTtcbiAgLyoqXG4gICAqIElmIHRoZSBmb2N1cyBtYW5hZ2VyIGlzIGVuYWJsZWQgdGhlbiB3ZSBuZWVkIHRvIHdhaXQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gYmVcbiAgICogcmVuZGVyZWQgb3RoZXJ3aXNlIHRoZSBjb21wb25lbnQgdG8gZm9jdXMgbWF5IG5vdCBiZSBmb2N1c2VkIGJlY2F1c2UgaXQgaXMgaGlkZGVuLlxuICAgKi9cbiAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIGZvY3VzTWFuYWdlckVuYWJsZWQpO1xuICBmaXJlV2lsbEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xuICBmaXJlRGlkRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XG4gIHJldHVybiB7XG4gICAgaGFzQ29tcGxldGVkOiB0cnVlXG4gIH07XG59O1xuY29uc3Qgd2FpdEZvclJlYWR5ID0gYXN5bmMgKG9wdHMsIGRlZmF1bHREZWVwKSA9PiB7XG4gIGNvbnN0IGRlZXAgPSBvcHRzLmRlZXBXYWl0ICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZXBXYWl0IDogZGVmYXVsdERlZXA7XG4gIGlmIChkZWVwKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW2RlZXBSZWFkeShvcHRzLmVudGVyaW5nRWwpLCBkZWVwUmVhZHkob3B0cy5sZWF2aW5nRWwpXSk7XG4gIH1cbiAgYXdhaXQgbm90aWZ5Vmlld1JlYWR5KG9wdHMudmlld0lzUmVhZHksIG9wdHMuZW50ZXJpbmdFbCk7XG59O1xuY29uc3Qgbm90aWZ5Vmlld1JlYWR5ID0gYXN5bmMgKHZpZXdJc1JlYWR5LCBlbnRlcmluZ0VsKSA9PiB7XG4gIGlmICh2aWV3SXNSZWFkeSkge1xuICAgIGF3YWl0IHZpZXdJc1JlYWR5KGVudGVyaW5nRWwpO1xuICB9XG59O1xuY29uc3QgcGxheVRyYW5zaXRpb24gPSAodHJhbnMsIG9wdHMpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IG9wdHMucHJvZ3Jlc3NDYWxsYmFjaztcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHRyYW5zLm9uRmluaXNoKGN1cnJlbnRTdGVwID0+IHJlc29sdmUoY3VycmVudFN0ZXAgPT09IDEpKTtcbiAgfSk7XG4gIC8vIGNvb2wsIGxldCdzIGRvIHRoaXMsIHN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgLy8gdGhpcyBpcyBhIHN3aXBlIHRvIGdvIGJhY2ssIGp1c3QgZ2V0IHRoZSB0cmFuc2l0aW9uIHByb2dyZXNzIHJlYWR5XG4gICAgLy8ga2ljayBvZmYgdGhlIHN3aXBlIGFuaW1hdGlvbiBzdGFydFxuICAgIHRyYW5zLnByb2dyZXNzU3RhcnQodHJ1ZSk7XG4gICAgcHJvZ3Jlc3NDYWxsYmFjayh0cmFucyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb25seSB0aGUgdG9wIGxldmVsIHRyYW5zaXRpb24gc2hvdWxkIGFjdHVhbGx5IHN0YXJ0IFwicGxheVwiXG4gICAgLy8ga2ljayBpdCBvZmYgYW5kIGxldCBpdCBwbGF5IHRocm91Z2hcbiAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgIHRyYW5zLnBsYXkoKTtcbiAgfVxuICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmVcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3QgZmlyZVdpbGxFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XG4gIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcbiAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9XSUxMX0VOVEVSKTtcbn07XG5jb25zdCBmaXJlRGlkRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xuICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XG4gIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9ESURfTEVBVkUpO1xufTtcbmNvbnN0IGxpZmVjeWNsZSA9IChlbCwgZXZlbnROYW1lKSA9PiB7XG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXYpO1xuICB9XG59O1xuLyoqXG4gKiBXYWl0IHR3byByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBsb29wcy5cbiAqIFRoaXMgYWxsb3dzIHRoZSBmcmFtZXdvcmsgaW1wbGVtZW50YXRpb25zIGVub3VnaCB0aW1lIHRvIG1vdW50XG4gKiB0aGUgdXNlci1kZWZpbmVkIGNvbnRlbnRzLiBUaGlzIGlzIG9mdGVuIG5lZWRlZCB3aGVuIHVzaW5nIGlubGluZVxuICogbW9kYWxzIGFuZCBwb3BvdmVycyB0aGF0IGFjY2VwdCB1c2VyIGNvbXBvbmVudHMuIEZvciBwb3BvdmVyLFxuICogdGhlIGNvbnRlbnRzIG11c3QgYmUgbW91bnRlZCBmb3IgdGhlIHBvcG92ZXIgdG8gYmUgc2l6ZWQgY29ycmVjdGx5LlxuICogRm9yIG1vZGFscywgdGhlIGNvbnRlbnRzIG11c3QgYmUgbW91bnRlZCBmb3IgaU9TIHRvIHJ1biB0aGVcbiAqIHRyYW5zaXRpb24gY29ycmVjdGx5LlxuICpcbiAqIE9uIEFuZ3VsYXIgYW5kIFJlYWN0LCBhIHNpbmdsZSByYWYgaXMgZW5vdWdoIHRpbWUsIGJ1dCBmb3IgVnVlXG4gKiB3ZSBuZWVkIHRvIHdhaXQgdHdvIHJhZnMuIEFzIGEgcmVzdWx0IHdlIGFyZSB1c2luZyB0d28gcmFmcyBmb3JcbiAqIGFsbCBmcmFtZXdvcmtzIHRvIGVuc3VyZSBjb250ZW50cyBhcmUgbW91bnRlZC5cbiAqL1xuY29uc3Qgd2FpdEZvck1vdW50ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByYWYoKCkgPT4gcmFmKCgpID0+IHJlc29sdmUoKSkpKTtcbn07XG5jb25zdCBkZWVwUmVhZHkgPSBhc3luYyBlbCA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jb21wb25lbnRPblJlYWR5ICE9IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tY29tcG9uZW50LW9uLXJlYWR5LW1ldGhvZFxuICAgICAgY29uc3Qgc3RlbmNpbEVsID0gYXdhaXQgZWxlbWVudC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICBpZiAoc3RlbmNpbEVsICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBDdXN0b20gZWxlbWVudHMgaW4gU3RlbmNpbCB3aWxsIGhhdmUgX19yZWdpc3Rlckhvc3QuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuX19yZWdpc3Rlckhvc3QgIT0gbnVsbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBOb24tbGF6eSBsb2FkZWQgY3VzdG9tIGVsZW1lbnRzIG5lZWQgdG8gd2FpdFxuICAgICAgICogb25lIGZyYW1lIGZvciBjb21wb25lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICovXG4gICAgICBjb25zdCB3YWl0Rm9yQ3VzdG9tRWxlbWVudCA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmFmKHJlc29sdmUpKTtcbiAgICAgIGF3YWl0IHdhaXRGb3JDdXN0b21FbGVtZW50O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChkZWVwUmVhZHkpKTtcbiAgfVxufTtcbmNvbnN0IHNldFBhZ2VIaWRkZW4gPSAoZWwsIGhpZGRlbikgPT4ge1xuICBpZiAoaGlkZGVuKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWhpZGRlbicpO1xuICB9XG59O1xuY29uc3Qgc2V0WkluZGV4ID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgZGlyZWN0aW9uKSA9PiB7XG4gIGlmIChlbnRlcmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbnRlcmluZ0VsLnN0eWxlLnpJbmRleCA9IGRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJzk5JyA6ICcxMDEnO1xuICB9XG4gIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGxlYXZpbmdFbC5zdHlsZS56SW5kZXggPSAnMTAwJztcbiAgfVxufTtcbmNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIGNvbnN0IGlvblBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgaWYgKGlvblBhZ2UpIHtcbiAgICByZXR1cm4gaW9uUGFnZTtcbiAgfVxuICAvLyBpZGssIHJldHVybiB0aGUgb3JpZ2luYWwgZWxlbWVudCBzbyBhdCBsZWFzdCBzb21ldGhpbmcgYW5pbWF0ZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBudWxsIHBvaW50ZXJcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IHsgTElGRUNZQ0xFX1dJTExfRU5URVIgYXMgTCwgTElGRUNZQ0xFX0RJRF9FTlRFUiBhcyBhLCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSBhcyBiLCBMSUZFQ1lDTEVfRElEX0xFQVZFIGFzIGMsIExJRkVDWUNMRV9XSUxMX1VOTE9BRCBhcyBkLCBkZWVwUmVhZHkgYXMgZSwgZ2V0SW9uUGFnZUVsZW1lbnQgYXMgZywgbGlmZWN5Y2xlIGFzIGwsIHNldFBhZ2VIaWRkZW4gYXMgcywgdHJhbnNpdGlvbiBhcyB0LCB3YWl0Rm9yTW91bnQgYXMgdyB9OyJdLCJtYXBwaW5ncyI6IjtBQUdBLElBQU0sTUFBTSxPQUFPLFdBQVcsY0FBYyxTQUFTOzs7QUNDckQsSUFBSTtBQUNKLElBQU0scUJBQXFCLFFBQU07QUFDL0IsTUFBSSxvQkFB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R0FBRztBQUMvQix3QkFBVSxNQUFNO0FBQ2hCO0FBQUEsWUFDRjtBQUNBO0FBQUEsVUFDRjtBQUNFLDRCQUFnQiw2Q0FBNkMsUUFBUSxFQUFFO0FBQ3ZFO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFNQSxnQkFBVSxXQUFXO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxhQUFhO0FBR25CLElBQU0sa0JBQWtCLHNCQUFzQjtBQThNOUMsSUFBTSxvQkFBb0IsYUFBVztBQUNuQyxNQUFJLFFBQVEsVUFBVSxTQUFTLFVBQVUsR0FBRztBQUMxQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sVUFBVSxRQUFRLGNBQWMseURBQXlEO0FBQy9GLE1BQUksU0FBUztBQUNYLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTztBQUNUOyIsIm5hbWVzIjpbIndpbiJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDVdfQ==
