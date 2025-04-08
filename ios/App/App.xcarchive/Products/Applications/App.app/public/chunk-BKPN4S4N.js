import {
  win
} from "./chunk-JYOJD2RE.js";

// node_modules/@ionic/core/dist/esm/animation-eab5a4ca.js
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

export {
  createAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm/animation-eab5a4ca.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9hbmltYXRpb24tZWFiNWE0Y2EuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd2luIH0gZnJvbSAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5sZXQgYW5pbWF0aW9uUHJlZml4O1xuY29uc3QgZ2V0QW5pbWF0aW9uUHJlZml4ID0gZWwgPT4ge1xuICBpZiAoYW5pbWF0aW9uUHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzdXBwb3J0c1VucHJlZml4ZWQgPSBlbC5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3VwcG9ydHNXZWJraXRQcmVmaXggPSBlbC5zdHlsZS53ZWJraXRBbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQ7XG4gICAgYW5pbWF0aW9uUHJlZml4ID0gIXN1cHBvcnRzVW5wcmVmaXhlZCAmJiBzdXBwb3J0c1dlYmtpdFByZWZpeCA/ICctd2Via2l0LScgOiAnJztcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uUHJlZml4O1xufTtcbmNvbnN0IHNldFN0eWxlUHJvcGVydHkgPSAoZWxlbWVudCwgcHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBwcmVmaXggPSBwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnYW5pbWF0aW9uJykgPyBnZXRBbmltYXRpb25QcmVmaXgoZWxlbWVudCkgOiAnJztcbiAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcmVmaXggKyBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbn07XG5jb25zdCBhZGRDbGFzc1RvQXJyYXkgPSAoY2xhc3NlcyA9IFtdLCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lVG9BcHBlbmQgPSBBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkgPyBjbGFzc05hbWUgOiBbY2xhc3NOYW1lXTtcbiAgICByZXR1cm4gWy4uLmNsYXNzZXMsIC4uLmNsYXNzTmFtZVRvQXBwZW5kXTtcbiAgfVxuICByZXR1cm4gY2xhc3Nlcztcbn07XG5jb25zdCBjcmVhdGVBbmltYXRpb24gPSBhbmltYXRpb25JZCA9PiB7XG4gIGxldCBfZGVsYXk7XG4gIGxldCBfZHVyYXRpb247XG4gIGxldCBfZWFzaW5nO1xuICBsZXQgX2l0ZXJhdGlvbnM7XG4gIGxldCBfZmlsbDtcbiAgbGV0IF9kaXJlY3Rpb247XG4gIGxldCBfa2V5ZnJhbWVzID0gW107XG4gIGxldCBiZWZvcmVBZGRDbGFzc2VzID0gW107XG4gIGxldCBiZWZvcmVSZW1vdmVDbGFzc2VzID0gW107XG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBsZXQgcGFyZW50QW5pbWF0aW9uO1xuICBsZXQgYmVmb3JlU3R5bGVzVmFsdWUgPSB7fTtcbiAgbGV0IGFmdGVyQWRkQ2xhc3NlcyA9IFtdO1xuICBsZXQgYWZ0ZXJSZW1vdmVDbGFzc2VzID0gW107XG4gIGxldCBhZnRlclN0eWxlc1ZhbHVlID0ge307XG4gIGxldCBudW1BbmltYXRpb25zUnVubmluZyA9IDA7XG4gIGxldCBzaG91bGRGb3JjZUxpbmVhckVhc2luZyA9IGZhbHNlO1xuICBsZXQgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZTtcbiAgbGV0IGZvcmNlRGlyZWN0aW9uVmFsdWU7XG4gIGxldCBmb3JjZUR1cmF0aW9uVmFsdWU7XG4gIGxldCBmb3JjZURlbGF5VmFsdWU7XG4gIGxldCB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgbGV0IHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xuICBsZXQgYW5pO1xuICBsZXQgcGF1c2VkID0gZmFsc2U7XG4gIGNvbnN0IGlkID0gYW5pbWF0aW9uSWQ7XG4gIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IG9uRmluaXNoT25lVGltZUNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IGNoaWxkQW5pbWF0aW9ucyA9IFtdO1xuICBjb25zdCBzdHlsZXNoZWV0cyA9IFtdO1xuICBjb25zdCBfYmVmb3JlQWRkUmVhZEZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCBfYmVmb3JlQWRkV3JpdGVGdW5jdGlvbnMgPSBbXTtcbiAgY29uc3QgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCBfYWZ0ZXJBZGRXcml0ZUZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCB3ZWJBbmltYXRpb25zID0gW107XG4gIGNvbnN0IHN1cHBvcnRzQW5pbWF0aW9uRWZmZWN0ID0gdHlwZW9mIEFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJyB8fCB3aW4gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luLkFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJztcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBmZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViIEFuaW1hdGlvbnMuXG4gICAqXG4gICAqIENlcnRhaW4gZW52aXJvbm1lbnRzIHN1Y2ggYXMgZW11bGF0ZWQgYnJvd3NlciBlbnZpcm9ubWVudHMgZm9yIHRlc3RpbmcsXG4gICAqIGRvIG5vdCBzdXBwb3J0IFdlYiBBbmltYXRpb25zLiBBcyBhIHJlc3VsdCwgd2UgbmVlZCB0byBjaGVjayBmb3Igc3VwcG9ydFxuICAgKiBhbmQgcHJvdmlkZSBhIGZhbGxiYWNrIHRvIHRlc3QgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gV2ViIEFuaW1hdGlvbnMuXG4gICAqL1xuICBjb25zdCBzdXBwb3J0c1dlYkFuaW1hdGlvbnMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzdXBwb3J0c0FuaW1hdGlvbkVmZmVjdDtcbiAgY29uc3QgZ2V0V2ViQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gd2ViQW5pbWF0aW9ucztcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9IGNsZWFyU3R5bGVTaGVldHMgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGNoaWxkQW5pbWF0aW9uID0+IHtcbiAgICAgIGNoaWxkQW5pbWF0aW9uLmRlc3Ryb3koY2xlYXJTdHlsZVNoZWV0cyk7XG4gICAgfSk7XG4gICAgY2xlYW5VcChjbGVhclN0eWxlU2hlZXRzKTtcbiAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgIGNoaWxkQW5pbWF0aW9ucy5sZW5ndGggPSAwO1xuICAgIF9rZXlmcmFtZXMubGVuZ3RoID0gMDtcbiAgICBjbGVhck9uRmluaXNoKCk7XG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogQ2FuY2VscyBhbnkgV2ViIEFuaW1hdGlvbnMsIHJlbW92ZXNcbiAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXG4gICAqIGFuaW1hdGlvbidzIGVsZW1lbnRzLCBhbmQgcmVtb3ZlcyB0aGVcbiAgICogYW5pbWF0aW9uJ3Mgc3R5bGVzaGVldHMgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgY29uc3QgY2xlYW5VcCA9IGNsZWFyU3R5bGVTaGVldHMgPT4ge1xuICAgIGNsZWFuVXBFbGVtZW50cygpO1xuICAgIGlmIChjbGVhclN0eWxlU2hlZXRzKSB7XG4gICAgICBjbGVhblVwU3R5bGVTaGVldHMoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0RmxhZ3MgPSAoKSA9PiB7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcbiAgICBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlO1xuICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xuICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2VEdXJhdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBudW1BbmltYXRpb25zUnVubmluZyA9IDA7XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICB9O1xuICBjb25zdCBpc1J1bm5pbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bUFuaW1hdGlvbnNSdW5uaW5nICE9PSAwICYmICFwYXVzZWQ7XG4gIH07XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSBhIGNob3NlbiBjYWxsYmFjayBhcnJheVxuICAgKiBAcGFyYW0gY2FsbGJhY2tUb1JlbW92ZTogQSByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICogQHBhcmFtIGNhbGxiYWNrT2JqZWN0czogQW4gYXJyYXkgb2YgY2FsbGJhY2tzIHRoYXQgY2FsbGJhY2tUb1JlbW92ZSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tLlxuICAgKi9cbiAgY29uc3QgY2xlYXJDYWxsYmFjayA9IChjYWxsYmFja1RvUmVtb3ZlLCBjYWxsYmFja09iamVjdHMpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrT2JqZWN0cy5maW5kSW5kZXgoY2FsbGJhY2tPYmplY3QgPT4gY2FsbGJhY2tPYmplY3QuYyA9PT0gY2FsbGJhY2tUb1JlbW92ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNhbGxiYWNrT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBBZGQgYSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIGFuIGFuaW1hdGlvbiBpcyBzdG9wcGVkL2NhbmNlbGxlZC5cbiAgICogQHBhcmFtIGNhbGxiYWNrOiBBIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgZmlyZWRcbiAgICogQHBhcmFtIG9wdHM6IEFueSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBhcnRpY3VsYXIgY2FsbGJhY2tcbiAgICovXG4gIGNvbnN0IG9uU3RvcCA9IChjYWxsYmFjaywgb3B0cykgPT4ge1xuICAgIG9uU3RvcE9uZVRpbWVDYWxsYmFja3MucHVzaCh7XG4gICAgICBjOiBjYWxsYmFjayxcbiAgICAgIG86IG9wdHNcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBvbkZpbmlzaCA9IChjYWxsYmFjaywgb3B0cykgPT4ge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IChvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMub25lVGltZUNhbGxiYWNrKSA/IG9uRmluaXNoT25lVGltZUNhbGxiYWNrcyA6IG9uRmluaXNoQ2FsbGJhY2tzO1xuICAgIGNhbGxiYWNrcy5wdXNoKHtcbiAgICAgIGM6IGNhbGxiYWNrLFxuICAgICAgbzogb3B0c1xuICAgIH0pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGNsZWFyT25GaW5pc2ggPSAoKSA9PiB7XG4gICAgb25GaW5pc2hDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogQ2FuY2VscyBhbnkgV2ViIEFuaW1hdGlvbnMgYW5kIHJlbW92ZXNcbiAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXG4gICAqIHRoZSBhbmltYXRpb24ncyBlbGVtZW50cy5cbiAgICovXG4gIGNvbnN0IGNsZWFuVXBFbGVtZW50cyA9ICgpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgICB3ZWJBbmltYXRpb25zLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgYW5pbWF0aW9uJ3Mgc3R5bGVzaGVldHNcbiAgICogZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgY29uc3QgY2xlYW5VcFN0eWxlU2hlZXRzID0gKCkgPT4ge1xuICAgIHN0eWxlc2hlZXRzLmZvckVhY2goc3R5bGVzaGVldCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gc2hhcmluZyBzdHlsZXNoZWV0cywgaXQncyBwb3NzaWJsZVxuICAgICAgICogZm9yIGFub3RoZXIgYW5pbWF0aW9uIHRvIGhhdmUgYWxyZWFkeVxuICAgICAgICogY2xlYW5lZCB1cCBhIHBhcnRpY3VsYXIgc3R5bGVzaGVldFxuICAgICAgICovXG4gICAgICBpZiAoc3R5bGVzaGVldCA9PT0gbnVsbCB8fCBzdHlsZXNoZWV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZXNoZWV0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxlc2hlZXRzLmxlbmd0aCA9IDA7XG4gIH07XG4gIGNvbnN0IGJlZm9yZUFkZFJlYWQgPSByZWFkRm4gPT4ge1xuICAgIF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zLnB1c2gocmVhZEZuKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBiZWZvcmVBZGRXcml0ZSA9IHdyaXRlRm4gPT4ge1xuICAgIF9iZWZvcmVBZGRXcml0ZUZ1bmN0aW9ucy5wdXNoKHdyaXRlRm4pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQWRkUmVhZCA9IHJlYWRGbiA9PiB7XG4gICAgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucy5wdXNoKHJlYWRGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJBZGRXcml0ZSA9IHdyaXRlRm4gPT4ge1xuICAgIF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zLnB1c2god3JpdGVGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYmVmb3JlQWRkQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGJlZm9yZUFkZENsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYmVmb3JlQWRkQ2xhc3NlcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBiZWZvcmVSZW1vdmVDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShiZWZvcmVSZW1vdmVDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBTZXQgQ1NTIGlubGluZSBzdHlsZXMgdG8gdGhlIGFuaW1hdGlvbidzXG4gICAqIGVsZW1lbnRzIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cbiAgICovXG4gIGNvbnN0IGJlZm9yZVN0eWxlcyA9IChzdHlsZXMgPSB7fSkgPT4ge1xuICAgIGJlZm9yZVN0eWxlc1ZhbHVlID0gc3R5bGVzO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBDbGVhciBDU1MgaW5saW5lIHN0eWxlcyBmcm9tIHRoZSBhbmltYXRpb24nc1xuICAgKiBlbGVtZW50cyBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXG4gICAqL1xuICBjb25zdCBiZWZvcmVDbGVhclN0eWxlcyA9IChwcm9wZXJ0eU5hbWVzID0gW10pID0+IHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnR5TmFtZXMpIHtcbiAgICAgIGJlZm9yZVN0eWxlc1ZhbHVlW3Byb3BlcnR5XSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlckFkZENsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICBhZnRlckFkZENsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYWZ0ZXJBZGRDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyUmVtb3ZlQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShhZnRlclJlbW92ZUNsYXNzZXMsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJTdHlsZXMgPSAoc3R5bGVzID0ge30pID0+IHtcbiAgICBhZnRlclN0eWxlc1ZhbHVlID0gc3R5bGVzO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQ2xlYXJTdHlsZXMgPSAocHJvcGVydHlOYW1lcyA9IFtdKSA9PiB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0eU5hbWVzKSB7XG4gICAgICBhZnRlclN0eWxlc1ZhbHVlW3Byb3BlcnR5XSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBnZXRGaWxsID0gKCkgPT4ge1xuICAgIGlmIChfZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2ZpbGw7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RmlsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gJ2JvdGgnO1xuICB9O1xuICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYgKGZvcmNlRGlyZWN0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZvcmNlRGlyZWN0aW9uVmFsdWU7XG4gICAgfVxuICAgIGlmIChfZGlyZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldERpcmVjdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gJ25vcm1hbCc7XG4gIH07XG4gIGNvbnN0IGdldEVhc2luZyA9ICgpID0+IHtcbiAgICBpZiAoc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcpIHtcbiAgICAgIHJldHVybiAnbGluZWFyJztcbiAgICB9XG4gICAgaWYgKF9lYXNpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9lYXNpbmc7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RWFzaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiAnbGluZWFyJztcbiAgfTtcbiAgY29uc3QgZ2V0RHVyYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKHNob3VsZEZvcmNlU3luY1BsYXliYWNrKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGZvcmNlRHVyYXRpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm9yY2VEdXJhdGlvblZhbHVlO1xuICAgIH1cbiAgICBpZiAoX2R1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZHVyYXRpb247XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RHVyYXRpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IGdldEl0ZXJhdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKF9pdGVyYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfaXRlcmF0aW9ucztcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXRJdGVyYXRpb25zKCk7XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9O1xuICBjb25zdCBnZXREZWxheSA9ICgpID0+IHtcbiAgICBpZiAoZm9yY2VEZWxheVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmb3JjZURlbGF5VmFsdWU7XG4gICAgfVxuICAgIGlmIChfZGVsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9kZWxheTtcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXREZWxheSgpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgZ2V0S2V5ZnJhbWVzID0gKCkgPT4ge1xuICAgIHJldHVybiBfa2V5ZnJhbWVzO1xuICB9O1xuICBjb25zdCBkaXJlY3Rpb24gPSBhbmltYXRpb25EaXJlY3Rpb24gPT4ge1xuICAgIF9kaXJlY3Rpb24gPSBhbmltYXRpb25EaXJlY3Rpb247XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGZpbGwgPSBhbmltYXRpb25GaWxsID0+IHtcbiAgICBfZmlsbCA9IGFuaW1hdGlvbkZpbGw7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGRlbGF5ID0gYW5pbWF0aW9uRGVsYXkgPT4ge1xuICAgIF9kZWxheSA9IGFuaW1hdGlvbkRlbGF5O1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBlYXNpbmcgPSBhbmltYXRpb25FYXNpbmcgPT4ge1xuICAgIF9lYXNpbmcgPSBhbmltYXRpb25FYXNpbmc7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb24gPT4ge1xuICAgIC8qKlxuICAgICAqIENTUyBBbmltYXRpb24gRHVyYXRpb25zIG9mIDBtcyB3b3JrIGZpbmUgb24gQ2hyb21lXG4gICAgICogYnV0IGRvIG5vdCBydW4gb24gU2FmYXJpLCBzbyBmb3JjZSBpdCB0byAxbXMgdG9cbiAgICAgKiBnZXQgaXQgdG8gcnVuIG9uIGJvdGggcGxhdGZvcm1zLlxuICAgICAqL1xuICAgIGlmICghc3VwcG9ydHNXZWJBbmltYXRpb25zICYmIGFuaW1hdGlvbkR1cmF0aW9uID09PSAwKSB7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbiA9IDE7XG4gICAgfVxuICAgIF9kdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBpdGVyYXRpb25zID0gYW5pbWF0aW9uSXRlcmF0aW9ucyA9PiB7XG4gICAgX2l0ZXJhdGlvbnMgPSBhbmltYXRpb25JdGVyYXRpb25zO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwYXJlbnQgPSBhbmltYXRpb24gPT4ge1xuICAgIHBhcmVudEFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZGRFbGVtZW50ID0gZWwgPT4ge1xuICAgIGlmIChlbCAhPSBudWxsKSB7XG4gICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbCk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBhZGRFbGVtZW50IHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFkZEFuaW1hdGlvbiA9IGFuaW1hdGlvblRvQWRkID0+IHtcbiAgICBpZiAoYW5pbWF0aW9uVG9BZGQgIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYW5pbWF0aW9uVG9BZGQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvblRvQWRkKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnBhcmVudChhbmkpO1xuICAgICAgICAgIGNoaWxkQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvblRvQWRkLnBhcmVudChhbmkpO1xuICAgICAgICBjaGlsZEFuaW1hdGlvbnMucHVzaChhbmltYXRpb25Ub0FkZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGtleWZyYW1lcyA9IGtleWZyYW1lVmFsdWVzID0+IHtcbiAgICBjb25zdCBkaWZmZXJlbnQgPSBfa2V5ZnJhbWVzICE9PSBrZXlmcmFtZVZhbHVlcztcbiAgICBfa2V5ZnJhbWVzID0ga2V5ZnJhbWVWYWx1ZXM7XG4gICAgaWYgKGRpZmZlcmVudCkge1xuICAgICAgdXBkYXRlS2V5ZnJhbWVzKF9rZXlmcmFtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCB1cGRhdGVLZXlmcmFtZXMgPSBrZXlmcmFtZVZhbHVlcyA9PiB7XG4gICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgZ2V0V2ViQW5pbWF0aW9ucygpLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFuaW1hdGlvbi5lZmZlY3QncyB0eXBlIGlzIEFuaW1hdGlvbkVmZmVjdC5cbiAgICAgICAgICogSG93ZXZlciwgaW4gdGhpcyBjYXNlIHdlIGhhdmUgYSBtb3JlIHNwZWNpZmljXG4gICAgICAgICAqIHR5cGUgb2YgQW5pbWF0aW9uRWZmZWN0IGNhbGxlZCBLZXlmcmFtZUVmZmVjdCB3aGljaFxuICAgICAgICAgKiBpbmhlcml0cyBmcm9tIEFuaW1hdGlvbkVmZmVjdC4gQXMgYSByZXN1bHQsXG4gICAgICAgICAqIHdlIGNhc3QgYW5pbWF0aW9uLmVmZmVjdCB0byBLZXlmcmFtZUVmZmVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGtleWZyYW1lRWZmZWN0ID0gYW5pbWF0aW9uLmVmZmVjdDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldEtleWZyYW1lcyBpcyBub3Qgc3VwcG9ydGVkIGluIGFsbCBicm93c2VyXG4gICAgICAgICAqIHZlcnNpb25zIHRoYXQgSW9uaWMgc3VwcG9ydHMsIHNvIHdlIG5lZWQgdG9cbiAgICAgICAgICogY2hlY2sgZm9yIHN1cHBvcnQgYmVmb3JlIHVzaW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9zdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgICAgICBpZiAoa2V5ZnJhbWVFZmZlY3Quc2V0S2V5ZnJhbWVzKSB7XG4gICAgICAgICAga2V5ZnJhbWVFZmZlY3Quc2V0S2V5ZnJhbWVzKGtleWZyYW1lVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXdFZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3Qoa2V5ZnJhbWVFZmZlY3QudGFyZ2V0LCBrZXlmcmFtZVZhbHVlcywga2V5ZnJhbWVFZmZlY3QuZ2V0VGltaW5nKCkpO1xuICAgICAgICAgIGFuaW1hdGlvbi5lZmZlY3QgPSBuZXdFZmZlY3Q7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFJ1biBhbGwgXCJiZWZvcmVcIiBhbmltYXRpb24gaG9va3MuXG4gICAqL1xuICBjb25zdCBiZWZvcmVBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgLy8gUnVucyBhbGwgYmVmb3JlIHJlYWQgY2FsbGJhY2tzXG4gICAgX2JlZm9yZUFkZFJlYWRGdW5jdGlvbnMuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgICAvLyBSdW5zIGFsbCBiZWZvcmUgd3JpdGUgY2FsbGJhY2tzXG4gICAgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gVXBkYXRlcyBzdHlsZXMgYW5kIGNsYXNzZXMgYmVmb3JlIGFuaW1hdGlvbiBydW5zXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IGJlZm9yZUFkZENsYXNzZXM7XG4gICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IGJlZm9yZVJlbW92ZUNsYXNzZXM7XG4gICAgY29uc3Qgc3R5bGVzID0gYmVmb3JlU3R5bGVzVmFsdWU7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50Q2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgYWRkQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgcmVtb3ZlQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3BlcnR5LCBzdHlsZXNbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogUnVuIGFsbCBcImFmdGVyXCIgYW5pbWF0aW9uIGhvb2tzLlxuICAgKi9cbiAgY29uc3QgYWZ0ZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgLy8gUnVucyBhbGwgYWZ0ZXIgcmVhZCBjYWxsYmFja3NcbiAgICBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gUnVucyBhbGwgYWZ0ZXIgd3JpdGUgY2FsbGJhY2tzXG4gICAgX2FmdGVyQWRkV3JpdGVGdW5jdGlvbnMuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgICAvLyBVcGRhdGVzIHN0eWxlcyBhbmQgY2xhc3NlcyBiZWZvcmUgYW5pbWF0aW9uIGVuZHNcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHdpbGxDb21wbGV0ZSA/IDEgOiAwO1xuICAgIGNvbnN0IGFkZENsYXNzZXMgPSBhZnRlckFkZENsYXNzZXM7XG4gICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IGFmdGVyUmVtb3ZlQ2xhc3NlcztcbiAgICBjb25zdCBzdHlsZXMgPSBhZnRlclN0eWxlc1ZhbHVlO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGFkZENsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIHJlbW92ZUNsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKGMpKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wZXJ0eSwgc3R5bGVzW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCBhbnkgdmFsdWUgY29lcmNpb24gYmVmb3JlXG4gICAgICogdGhlIHVzZXIgY2FsbGJhY2tzIGZpcmUgb3RoZXJ3aXNlXG4gICAgICogdGhleSBtYXkgZ2V0IHN0YWxlIHZhbHVlcy4gRm9yIGV4YW1wbGUsXG4gICAgICogaWYgc29tZW9uZSBjYWxscyBwcm9ncmVzc1N0YXJ0KDApIHRoZVxuICAgICAqIGFuaW1hdGlvbiBtYXkgc3RpbGwgYmUgcmV2ZXJzZWQuXG4gICAgICovXG4gICAgZm9yY2VEdXJhdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2VEZWxheVZhbHVlID0gdW5kZWZpbmVkO1xuICAgIG9uRmluaXNoQ2FsbGJhY2tzLmZvckVhY2gob25GaW5pc2hDYWxsYmFjayA9PiB7XG4gICAgICByZXR1cm4gb25GaW5pc2hDYWxsYmFjay5jKGN1cnJlbnRTdGVwLCBhbmkpO1xuICAgIH0pO1xuICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xuICAgICAgcmV0dXJuIG9uRmluaXNoQ2FsbGJhY2suYyhjdXJyZW50U3RlcCwgYW5pKTtcbiAgICB9KTtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgICBpZiAod2lsbENvbXBsZXRlKSB7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuICAgIHdpbGxDb21wbGV0ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGFuaW1hdGlvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBpZiAobnVtQW5pbWF0aW9uc1J1bm5pbmcgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbnVtQW5pbWF0aW9uc1J1bm5pbmctLTtcbiAgICBpZiAobnVtQW5pbWF0aW9uc1J1bm5pbmcgPT09IDApIHtcbiAgICAgIGFmdGVyQW5pbWF0aW9uKCk7XG4gICAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICAgIHBhcmVudEFuaW1hdGlvbi5hbmltYXRpb25GaW5pc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXRpYWxpemVXZWJBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZShfa2V5ZnJhbWVzLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBkZWxheTogZ2V0RGVsYXkoKSxcbiAgICAgICAgZHVyYXRpb246IGdldER1cmF0aW9uKCksXG4gICAgICAgIGVhc2luZzogZ2V0RWFzaW5nKCksXG4gICAgICAgIGl0ZXJhdGlvbnM6IGdldEl0ZXJhdGlvbnMoKSxcbiAgICAgICAgZmlsbDogZ2V0RmlsbCgpLFxuICAgICAgICBkaXJlY3Rpb246IGdldERpcmVjdGlvbigpXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgd2ViQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gICAgaWYgKHdlYkFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgd2ViQW5pbWF0aW9uc1swXS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaW5pdGlhbGl6ZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBiZWZvcmVBbmltYXRpb24oKTtcbiAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICAgIGluaXRpYWxpemVXZWJBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9O1xuICBjb25zdCBzZXRBbmltYXRpb25TdGVwID0gc3RlcCA9PiB7XG4gICAgc3RlcCA9IE1hdGgubWluKE1hdGgubWF4KHN0ZXAsIDApLCAwLjk5OTkpO1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAvLyBXaGVuIGNyZWF0aW5nIHRoZSBhbmltYXRpb24gdGhlIGRlbGF5IGlzIGd1YXJhbnRlZWQgdG8gYmUgc2V0IHRvIGEgbnVtYmVyLlxuICAgICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBhbmltYXRpb24uZWZmZWN0LmdldENvbXB1dGVkVGltaW5nKCkuZGVsYXkgKyBnZXREdXJhdGlvbigpICogc3RlcDtcbiAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVdlYkFuaW1hdGlvbiA9IHN0ZXAgPT4ge1xuICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLmVmZmVjdC51cGRhdGVUaW1pbmcoe1xuICAgICAgICBkZWxheTogZ2V0RGVsYXkoKSxcbiAgICAgICAgZHVyYXRpb246IGdldER1cmF0aW9uKCksXG4gICAgICAgIGVhc2luZzogZ2V0RWFzaW5nKCksXG4gICAgICAgIGl0ZXJhdGlvbnM6IGdldEl0ZXJhdGlvbnMoKSxcbiAgICAgICAgZmlsbDogZ2V0RmlsbCgpLFxuICAgICAgICBkaXJlY3Rpb246IGdldERpcmVjdGlvbigpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoc3RlcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRBbmltYXRpb25TdGVwKHN0ZXApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdXBkYXRlID0gKGRlZXAgPSBmYWxzZSwgdG9nZ2xlQW5pbWF0aW9uTmFtZSA9IHRydWUsIHN0ZXApID0+IHtcbiAgICBpZiAoZGVlcCkge1xuICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnVwZGF0ZShkZWVwLCB0b2dnbGVBbmltYXRpb25OYW1lLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB1cGRhdGVXZWJBbmltYXRpb24oc3RlcCk7XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHByb2dyZXNzU3RhcnQgPSAoZm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZSwgc3RlcCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydChmb3JjZUxpbmVhckVhc2luZywgc3RlcCk7XG4gICAgfSk7XG4gICAgcGF1c2VBbmltYXRpb24oKTtcbiAgICBzaG91bGRGb3JjZUxpbmVhckVhc2luZyA9IGZvcmNlTGluZWFyRWFzaW5nO1xuICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGluaXRpYWxpemVBbmltYXRpb24oKTtcbiAgICB9XG4gICAgdXBkYXRlKGZhbHNlLCB0cnVlLCBzdGVwKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc1N0ZXAgPSBzdGVwID0+IHtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzU3RlcChzdGVwKTtcbiAgICB9KTtcbiAgICBzZXRBbmltYXRpb25TdGVwKHN0ZXApO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHByb2dyZXNzRW5kID0gKHBsYXlUbywgc3RlcCwgZHVyKSA9PiB7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzRW5kKHBsYXlUbywgc3RlcCwgZHVyKTtcbiAgICB9KTtcbiAgICBpZiAoZHVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvcmNlRHVyYXRpb25WYWx1ZSA9IGR1cjtcbiAgICB9XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICAgIGlmIChwbGF5VG8gPT09IDApIHtcbiAgICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb24oKSA9PT0gJ3JldmVyc2UnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XG4gICAgICBpZiAoZm9yY2VEaXJlY3Rpb25WYWx1ZSA9PT0gJ3JldmVyc2UnKSB7XG4gICAgICAgIHdpbGxDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QW5pbWF0aW9uU3RlcCgxIC0gc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZURlbGF5VmFsdWUgPSAoMSAtIHN0ZXApICogZ2V0RHVyYXRpb24oKSAqIC0xO1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXlUbyA9PT0gMSkge1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHN0ZXAgKiBnZXREdXJhdGlvbigpICogLTE7XG4gICAgICAgIHVwZGF0ZShmYWxzZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGxheVRvICE9PSB1bmRlZmluZWQgJiYgIXBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcGxheSgpO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwYXVzZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgd2ViQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tcGxheS1zdGF0ZScsICdwYXVzZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIH0pO1xuICAgIHBhdXNlQW5pbWF0aW9uKCk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcGxheUNTU0FuaW1hdGlvbnMgPSAoKSA9PiB7XG4gICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gIH07XG4gIGNvbnN0IHBsYXlXZWJBbmltYXRpb25zID0gKCkgPT4ge1xuICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICB9KTtcbiAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPT09IDAgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbmltYXRpb25GaW5pc2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIHNldEFuaW1hdGlvblN0ZXAoMCk7XG4gICAgICB1cGRhdGVXZWJBbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYXkgPSBvcHRzID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLnN5bmMpIHtcbiAgICAgICAgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSB0cnVlO1xuICAgICAgICBvbkZpbmlzaCgoKSA9PiBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlLCB7XG4gICAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICBpbml0aWFsaXplQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmVzZXRBbmltYXRpb24oKTtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zKSB7XG4gICAgICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nID0gY2hpbGRBbmltYXRpb25zLmxlbmd0aCArIDE7XG4gICAgICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBvbmUgb2YgdGhlc2UgY2FsbGJhY2tzIGZpcmVzIHdlXG4gICAgICAgKiBuZWVkIHRvIGNsZWFyIHRoZSBvdGhlcidzIGNhbGxiYWNrIG90aGVyd2lzZVxuICAgICAgICogeW91IGNhbiBwb3RlbnRpYWxseSBnZXQgdGhlc2UgY2FsbGJhY2tzXG4gICAgICAgKiBmaXJpbmcgbXVsdGlwbGUgdGltZXMgaWYgdGhlIHBsYXkgbWV0aG9kXG4gICAgICAgKiBpcyBzdWJzZXF1ZW50bHkgY2FsbGVkLlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqIGFuaW1hdGlvbi5wbGF5KCkgKG9uU3RvcCBhbmQgb25GaW5pc2ggY2FsbGJhY2tzIGFyZSByZWdpc3RlcmVkKVxuICAgICAgICogYW5pbWF0aW9uLnN0b3AoKSAob25TdG9wIGNhbGxiYWNrIGlzIGZpcmVkLCBvbkZpbmlzaCBpcyBub3QpXG4gICAgICAgKiBhbmltYXRpb24ucGxheSgpIChvblN0b3AgYW5kIG9uRmluaXNoIGNhbGxiYWNrcyBhcmUgcmVnaXN0ZXJlZClcbiAgICAgICAqIFRvdGFsIG9uU3RvcCBjYWxsYmFja3M6IDFcbiAgICAgICAqIFRvdGFsIG9uRmluaXNoIGNhbGxiYWNrczogMlxuICAgICAgICovXG4gICAgICBjb25zdCBvblN0b3BDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDYWxsYmFjayhvbkZpbmlzaENhbGxiYWNrLCBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb25GaW5pc2hDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDYWxsYmFjayhvblN0b3BDYWxsYmFjaywgb25TdG9wT25lVGltZUNhbGxiYWNrcyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBwbGF5IG1ldGhvZCByZXNvbHZlcyB3aGVuIGFuIGFuaW1hdGlvblxuICAgICAgICogcnVuIGVpdGhlciBmaW5pc2hlcyBvciBpcyBjYW5jZWxsZWQuXG4gICAgICAgKi9cbiAgICAgIG9uRmluaXNoKG9uRmluaXNoQ2FsbGJhY2ssIHtcbiAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG9uU3RvcChvblN0b3BDYWxsYmFjaywge1xuICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICBwbGF5V2ViQW5pbWF0aW9ucygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheUNTU0FuaW1hdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogU3RvcHMgYW4gYW5pbWF0aW9uIGFuZCByZXNldHMgaXQgc3RhdGUgdG8gdGhlXG4gICAqIGJlZ2lubmluZy4gVGhpcyBkb2VzIG5vdCBmaXJlIGFueSBvbkZpbmlzaFxuICAgKiBjYWxsYmFja3MgYmVjYXVzZSB0aGUgYW5pbWF0aW9uIGRpZCBub3QgZmluaXNoLlxuICAgKiBIb3dldmVyLCBzaW5jZSB0aGUgYW5pbWF0aW9uIHdhcyBub3QgZGVzdHJveWVkXG4gICAqIChpLmUuIHRoZSBhbmltYXRpb24gY291bGQgcnVuIGFnYWluKSB3ZSBkbyBub3RcbiAgICogY2xlYXIgdGhlIG9uRmluaXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfSk7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICBjbGVhblVwRWxlbWVudHMoKTtcbiAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0RmxhZ3MoKTtcbiAgICBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzLmZvckVhY2gob25TdG9wQ2FsbGJhY2sgPT4gb25TdG9wQ2FsbGJhY2suYygwLCBhbmkpKTtcbiAgICBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIH07XG4gIGNvbnN0IGZyb20gPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmlyc3RGcmFtZSA9IF9rZXlmcmFtZXNbMF07XG4gICAgaWYgKGZpcnN0RnJhbWUgIT09IHVuZGVmaW5lZCAmJiAoZmlyc3RGcmFtZS5vZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBmaXJzdEZyYW1lLm9mZnNldCA9PT0gMCkpIHtcbiAgICAgIGZpcnN0RnJhbWVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXlmcmFtZXMgPSBbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXG4gICAgICB9LCAuLi5fa2V5ZnJhbWVzXTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgdG8gPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbGFzdEZyYW1lID0gX2tleWZyYW1lc1tfa2V5ZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0RnJhbWUgIT09IHVuZGVmaW5lZCAmJiAobGFzdEZyYW1lLm9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IGxhc3RGcmFtZS5vZmZzZXQgPT09IDEpKSB7XG4gICAgICBsYXN0RnJhbWVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXlmcmFtZXMgPSBbLi4uX2tleWZyYW1lcywge1xuICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXG4gICAgICB9XTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZnJvbVRvID0gKHByb3BlcnR5LCBmcm9tVmFsdWUsIHRvVmFsdWUpID0+IHtcbiAgICByZXR1cm4gZnJvbShwcm9wZXJ0eSwgZnJvbVZhbHVlKS50byhwcm9wZXJ0eSwgdG9WYWx1ZSk7XG4gIH07XG4gIHJldHVybiBhbmkgPSB7XG4gICAgcGFyZW50QW5pbWF0aW9uLFxuICAgIGVsZW1lbnRzLFxuICAgIGNoaWxkQW5pbWF0aW9ucyxcbiAgICBpZCxcbiAgICBhbmltYXRpb25GaW5pc2gsXG4gICAgZnJvbSxcbiAgICB0byxcbiAgICBmcm9tVG8sXG4gICAgcGFyZW50LFxuICAgIHBsYXksXG4gICAgcGF1c2UsXG4gICAgc3RvcCxcbiAgICBkZXN0cm95LFxuICAgIGtleWZyYW1lcyxcbiAgICBhZGRBbmltYXRpb24sXG4gICAgYWRkRWxlbWVudCxcbiAgICB1cGRhdGUsXG4gICAgZmlsbCxcbiAgICBkaXJlY3Rpb24sXG4gICAgaXRlcmF0aW9ucyxcbiAgICBkdXJhdGlvbixcbiAgICBlYXNpbmcsXG4gICAgZGVsYXksXG4gICAgZ2V0V2ViQW5pbWF0aW9ucyxcbiAgICBnZXRLZXlmcmFtZXMsXG4gICAgZ2V0RmlsbCxcbiAgICBnZXREaXJlY3Rpb24sXG4gICAgZ2V0RGVsYXksXG4gICAgZ2V0SXRlcmF0aW9ucyxcbiAgICBnZXRFYXNpbmcsXG4gICAgZ2V0RHVyYXRpb24sXG4gICAgYWZ0ZXJBZGRSZWFkLFxuICAgIGFmdGVyQWRkV3JpdGUsXG4gICAgYWZ0ZXJDbGVhclN0eWxlcyxcbiAgICBhZnRlclN0eWxlcyxcbiAgICBhZnRlclJlbW92ZUNsYXNzLFxuICAgIGFmdGVyQWRkQ2xhc3MsXG4gICAgYmVmb3JlQWRkUmVhZCxcbiAgICBiZWZvcmVBZGRXcml0ZSxcbiAgICBiZWZvcmVDbGVhclN0eWxlcyxcbiAgICBiZWZvcmVTdHlsZXMsXG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3MsXG4gICAgYmVmb3JlQWRkQ2xhc3MsXG4gICAgb25GaW5pc2gsXG4gICAgaXNSdW5uaW5nLFxuICAgIHByb2dyZXNzU3RhcnQsXG4gICAgcHJvZ3Jlc3NTdGVwLFxuICAgIHByb2dyZXNzRW5kXG4gIH07XG59O1xuZXhwb3J0IHsgY3JlYXRlQW5pbWF0aW9uIGFzIGMgfTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsSUFBSTtBQUNKLElBQU0scUJBQXFCLFFB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
