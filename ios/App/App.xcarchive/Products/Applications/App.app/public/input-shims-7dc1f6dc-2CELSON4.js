import {
  findClosestIonContent,
  getScrollElement,
  scrollByPoint
} from "./chunk-7QVPRCLC.js";
import {
  Keyboard,
  KeyboardResize
} from "./chunk-XCF7ZGBQ.js";
import "./chunk-UPH3BB7G.js";
import "./chunk-5HIO5JVM.js";
import {
  addEventListener,
  componentOnReady,
  raf,
  removeEventListener
} from "./chunk-RRWPYKYY.js";
import {
  doc,
  win
} from "./chunk-JYOJD2RE.js";
import "./chunk-5IJ3YEPD.js";
import "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/input-shims-7dc1f6dc.js
var cloneMap = /* @__PURE__ */ new WeakMap();
var relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0, disabledClonedInput = false) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
  } else {
    removeClone(componentEl, inputEl);
  }
};
var isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
var addClone = (componentEl, inputEl, inputRelativeY, disabledClonedInput = false) => {
  const parentEl = inputEl.parentNode;
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add("cloned-input");
  clonedEl.tabIndex = -1;
  if (disabledClonedInput) {
    clonedEl.disabled = true;
  }
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc2 = componentEl.ownerDocument;
  const tx = doc2.dir === "rtl" ? 9999 : -9999;
  componentEl.style.pointerEvents = "none";
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
var removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = "";
  inputEl.style.transform = "";
};
var SCROLL_AMOUNT_PADDING = 50;
var enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => {
      return;
    };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  addEventListener(scrollEl, "ionScrollStart", hideCaret);
  addEventListener(scrollEl, "ionScrollEnd", showCaret);
  inputEl.addEventListener("blur", onBlur);
  return () => {
    removeEventListener(scrollEl, "ionScrollStart", hideCaret);
    removeEventListener(scrollEl, "ionScrollEnd", showCaret);
    inputEl.removeEventListener("blur", onBlur);
  };
};
var SKIP_SELECTOR = "input, textarea, [no-blur], [contenteditable]";
var enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc2 = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc2.activeElement;
    if (!active) {
      return;
    }
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  addEventListener(doc2, "ionScrollStart", onScroll);
  doc2.addEventListener("focusin", onFocusin, true);
  doc2.addEventListener("touchend", onTouchend, false);
  return () => {
    removeEventListener(doc2, "ionScrollStart", onScroll, true);
    doc2.removeEventListener("focusin", onFocusin, true);
    doc2.removeEventListener("touchend", onTouchend, false);
  };
};
var SCROLL_ASSIST_SPEED = 0.3;
var getScrollData = (componentEl, contentEl, keyboardHeight, platformHeight) => {
  var _a;
  const itemEl = (_a = componentEl.closest("ion-item,[ion-item]")) !== null && _a !== void 0 ? _a : componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, platformHeight);
};
var calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom - SCROLL_AMOUNT_PADDING;
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  const desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};
var PADDING_TIMER_KEY = "$ionPaddingTimer";
var setScrollPadding = (contentEl, paddingAmount, clearCallback) => {
  const timer = contentEl[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (paddingAmount > 0) {
    contentEl.style.setProperty("--keyboard-offset", `${paddingAmount}px`);
  } else {
    contentEl[PADDING_TIMER_KEY] = setTimeout(() => {
      contentEl.style.setProperty("--keyboard-offset", "0px");
      if (clearCallback) {
        clearCallback();
      }
    }, 120);
  }
};
var setClearScrollPaddingListener = (inputEl, contentEl, doneCallback) => {
  const clearScrollPadding = () => {
    if (contentEl) {
      setScrollPadding(contentEl, 0, doneCallback);
    }
  };
  inputEl.addEventListener("focusout", clearScrollPadding, {
    once: true
  });
};
var currentPadding = 0;
var SKIP_SCROLL_ASSIST = "data-ionic-skip-scroll-assist";
var enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, keyboardResize, disableClonedInput = false) => {
  const addScrollPadding = enableScrollPadding && (keyboardResize === void 0 || keyboardResize.mode === KeyboardResize.None);
  let hasKeyboardBeenPresentedForTextField = false;
  const platformHeight = win !== void 0 ? win.innerHeight : 0;
  const keyboardShow = (ev) => {
    if (hasKeyboardBeenPresentedForTextField === false) {
      hasKeyboardBeenPresentedForTextField = true;
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, ev.detail.keyboardHeight, addScrollPadding, disableClonedInput, platformHeight, false);
  };
  const focusOut = () => {
    hasKeyboardBeenPresentedForTextField = false;
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
  const focusIn = () => __async(void 0, null, function* () {
    if (inputEl.hasAttribute(SKIP_SCROLL_ASSIST)) {
      inputEl.removeAttribute(SKIP_SCROLL_ASSIST);
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, addScrollPadding, disableClonedInput, platformHeight);
    win === null || win === void 0 ? void 0 : win.addEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.addEventListener("focusout", focusOut);
  });
  componentEl.addEventListener("focusin", focusIn);
  return () => {
    componentEl.removeEventListener("focusin", focusIn);
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
};
var setManualFocus = (el) => {
  if (document.activeElement === el) {
    return;
  }
  el.setAttribute(SKIP_SCROLL_ASSIST, "true");
  el.focus();
};
var jsSetFocus = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, disableClonedInput = false, platformHeight = 0, waitForResize = true) => __async(void 0, null, function* () {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight, platformHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    setManualFocus(inputEl);
    if (enableScrollPadding && contentEl !== null) {
      setScrollPadding(contentEl, currentPadding);
      setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
    }
    return;
  }
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
  setManualFocus(inputEl);
  raf(() => componentEl.click());
  if (enableScrollPadding && contentEl) {
    currentPadding = scrollData.scrollPadding;
    setScrollPadding(contentEl, currentPadding);
  }
  if (typeof window !== "undefined") {
    let scrollContentTimeout;
    const scrollContent = () => __async(void 0, null, function* () {
      if (scrollContentTimeout !== void 0) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.removeEventListener("ionKeyboardDidShow", scrollContent);
      if (contentEl) {
        yield scrollByPoint(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      setManualFocus(inputEl);
      if (enableScrollPadding) {
        setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
      }
    });
    const doubleKeyboardEventListener = () => {
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.addEventListener("ionKeyboardDidShow", scrollContent);
    };
    if (contentEl) {
      const scrollEl = yield getScrollElement(contentEl);
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (waitForResize && scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop) {
        if (inputEl.type === "password") {
          scrollData.scrollAmount += SCROLL_AMOUNT_PADDING;
          window.addEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
        } else {
          window.addEventListener("ionKeyboardDidShow", scrollContent);
        }
        scrollContentTimeout = setTimeout(scrollContent, 1e3);
        return;
      }
    }
    scrollContent();
  }
});
var INPUT_BLURRING = true;
var startInputShims = (config, platform) => __async(void 0, null, function* () {
  if (doc === void 0) {
    return;
  }
  const isIOS = platform === "ios";
  const isAndroid = platform === "android";
  const keyboardHeight = config.getNumber("keyboardHeight", 290);
  const scrollAssist = config.getBoolean("scrollAssist", true);
  const hideCaret = config.getBoolean("hideCaretOnScroll", isIOS);
  const inputBlurring = config.getBoolean("inputBlurring", false);
  const scrollPadding = config.getBoolean("scrollPadding", true);
  const inputs = Array.from(doc.querySelectorAll("ion-input, ion-textarea"));
  const hideCaretMap = /* @__PURE__ */ new WeakMap();
  const scrollAssistMap = /* @__PURE__ */ new WeakMap();
  const keyboardResizeMode = yield Keyboard.getResizeMode();
  const registerInput = (componentEl) => __async(void 0, null, function* () {
    yield new Promise((resolve) => componentOnReady(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector("input") || inputRoot.querySelector("textarea");
    const scrollEl = findClosestIonContent(componentEl);
    const footerEl = !scrollEl ? componentEl.closest("ion-footer") : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    const isDateInput = inputEl.type === "date" || inputEl.type === "datetime-local";
    if (!isDateInput && (!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, scrollPadding, keyboardResizeMode, isAndroid);
      scrollAssistMap.set(componentEl, rmFn);
    }
  });
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  for (const input of inputs) {
    registerInput(input);
  }
  doc.addEventListener("ionInputDidLoad", (ev) => {
    registerInput(ev.detail);
  });
  doc.addEventListener("ionInputDidUnload", (ev) => {
    unregisterInput(ev.detail);
  });
});
export {
  startInputShims
};
/*! Bundled license information:

@ionic/core/dist/esm/input-shims-7dc1f6dc.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbnB1dC1zaGltcy03ZGMxZjZkYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4sIGQgYXMgZG9jIH0gZnJvbSAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNjcm9sbEVsZW1lbnQsIGMgYXMgc2Nyb2xsQnlQb2ludCwgZiBhcyBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgfSBmcm9tICcuL2luZGV4LWU5MTllMzUzLmpzJztcbmltcG9ydCB7IGEgYXMgYWRkRXZlbnRMaXN0ZW5lciwgYiBhcyByZW1vdmVFdmVudExpc3RlbmVyLCByIGFzIHJhZiwgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGEgYXMgS2V5Ym9hcmRSZXNpemUsIEsgYXMgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkLTczMTc1ZTI0LmpzJztcbmltcG9ydCAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcbmNvbnN0IGNsb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlbG9jYXRlSW5wdXQgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZFJlbG9jYXRlLCBpbnB1dFJlbGF0aXZlWSA9IDAsIGRpc2FibGVkQ2xvbmVkSW5wdXQgPSBmYWxzZSkgPT4ge1xuICBpZiAoY2xvbmVNYXAuaGFzKGNvbXBvbmVudEVsKSA9PT0gc2hvdWxkUmVsb2NhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNob3VsZFJlbG9jYXRlKSB7XG4gICAgYWRkQ2xvbmUoY29tcG9uZW50RWwsIGlucHV0RWwsIGlucHV0UmVsYXRpdmVZLCBkaXNhYmxlZENsb25lZElucHV0KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbG9uZShjb21wb25lbnRFbCwgaW5wdXRFbCk7XG4gIH1cbn07XG5jb25zdCBpc0ZvY3VzZWQgPSBpbnB1dCA9PiB7XG4gIC8qKlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9nZXRSb290Tm9kZVxuICAgKiBDYWxsaW5nIGdldFJvb3ROb2RlIG9uIGFuIGVsZW1lbnQgaW4gc3RhbmRhcmQgd2ViIHBhZ2Ugd2lsbCByZXR1cm4gSFRNTERvY3VtZW50LlxuICAgKiBDYWxsaW5nIGdldFJvb3ROb2RlIG9uIGFuIGVsZW1lbnQgaW5zaWRlIG9mIHRoZSBTaGFkb3cgRE9NIHdpbGwgcmV0dXJuIHRoZSBhc3NvY2lhdGVkIFNoYWRvd1Jvb3QuXG4gICAqIENhbGxpbmcgZ2V0Um9vdE5vZGUgb24gYW4gZWxlbWVudCB0aGF0IGlzIG5vdCBhdHRhY2hlZCB0byBhIGRvY3VtZW50L3NoYWRvdyB0cmVlIHdpbGwgcmV0dXJuXG4gICAqIHRoZSByb290IG9mIHRoZSBET00gdHJlZSBpdCBiZWxvbmdzIHRvLlxuICAgKiBpc0ZvY3VzZWQgaXMgdXNlZCBmb3IgdGhlIGhpZGUtY2FyZXQgdXRpbGl0eSB3aGljaCBvbmx5IGNvbnNpZGVycyBpbnB1dC90ZXh0YXJlYSBlbGVtZW50c1xuICAgKiB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBET00sIHNvIHdlIGRvbid0IHNldCB0eXBlcyBmb3IgdGhhdCBmaW5hbCBjYXNlIHNpbmNlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgKi9cbiAgcmV0dXJuIGlucHV0ID09PSBpbnB1dC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQ7XG59O1xuY29uc3QgYWRkQ2xvbmUgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGlucHV0UmVsYXRpdmVZLCBkaXNhYmxlZENsb25lZElucHV0ID0gZmFsc2UpID0+IHtcbiAgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSBhY3R1YWwgaW5wdXQgdG8gcmVjZWl2ZSB0aGUgZm9jdXMgZnJvbVxuICAvLyB0aGUgdXNlcidzIHRvdWNoIGV2ZW50LCBidXQgYmVmb3JlIGl0IHJlY2VpdmVzIGZvY3VzLCBpdFxuICAvLyBtb3ZlcyB0aGUgYWN0dWFsIGlucHV0IHRvIGEgbG9jYXRpb24gdGhhdCB3aWxsIG5vdCBzY3Jld1xuICAvLyB1cCB0aGUgYXBwJ3MgbGF5b3V0LCBhbmQgZG9lcyBub3QgYWxsb3cgdGhlIG5hdGl2ZSBicm93c2VyXG4gIC8vIHRvIGF0dGVtcHQgdG8gc2Nyb2xsIHRoZSBpbnB1dCBpbnRvIHBsYWNlIChtZXNzaW5nIHVwIGhlYWRlcnMvZm9vdGVycylcbiAgLy8gdGhlIGNsb25lZCBpbnB1dCBmaWxscyB0aGUgYXJlYSBvZiB3aGVyZSBuYXRpdmUgaW5wdXQgc2hvdWxkIGJlXG4gIC8vIHdoaWxlIHRoZSBuYXRpdmUgaW5wdXQgZmFrZXMgb3V0IHRoZSBicm93c2VyIGJ5IHJlbG9jYXRpbmcgaXRzZWxmXG4gIC8vIGJlZm9yZSBpdCByZWNlaXZlcyB0aGUgYWN0dWFsIGZvY3VzIGV2ZW50XG4gIC8vIFdlIGhpZGUgdGhlIGZvY3VzZWQgaW5wdXQgKHdpdGggdGhlIHZpc2libGUgY2FyZXQpIGludmlzaWJsZSBieSBtYWtpbmcgaXQgc2NhbGUoMCksXG4gIGNvbnN0IHBhcmVudEVsID0gaW5wdXRFbC5wYXJlbnROb2RlO1xuICAvLyBET00gV1JJVEVTXG4gIGNvbnN0IGNsb25lZEVsID0gaW5wdXRFbC5jbG9uZU5vZGUoZmFsc2UpO1xuICBjbG9uZWRFbC5jbGFzc0xpc3QuYWRkKCdjbG9uZWQtaW5wdXQnKTtcbiAgY2xvbmVkRWwudGFiSW5kZXggPSAtMTtcbiAgLyoqXG4gICAqIE1ha2luZyB0aGUgY2xvbmVkIGlucHV0IGRpc2FibGVkIHByZXZlbnRzXG4gICAqIENocm9tZSBmb3IgQW5kcm9pZCBmcm9tIHN0aWxsIHNjcm9sbGluZ1xuICAgKiB0aGUgZW50aXJlIHBhZ2Ugc2luY2UgdGhpcyBjbG9uZWQgaW5wdXRcbiAgICogd2lsbCBicmllZmx5IGJlIGhpZGRlbiBieSB0aGUga2V5Ym9hcmRcbiAgICogZXZlbiB0aG91Z2ggaXQgaXMgbm90IGZvY3VzZWQuXG4gICAqXG4gICAqIFRoaXMgaXMgbm90IG5lZWRlZCBvbiBpT1MuIFdoaWxlIHRoaXNcbiAgICogZG9lcyBub3QgY2F1c2UgZnVuY3Rpb25hbCBpc3N1ZXMgb24gaU9TLFxuICAgKiB0aGUgaW5wdXQgc3RpbGwgYXBwZWFycyBzbGlnaHRseSBkaW1tZWQgZXZlblxuICAgKiBpZiB3ZSBzZXQgb3BhY2l0eTogMS5cbiAgICovXG4gIGlmIChkaXNhYmxlZENsb25lZElucHV0KSB7XG4gICAgY2xvbmVkRWwuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKGNsb25lZEVsKTtcbiAgY2xvbmVNYXAuc2V0KGNvbXBvbmVudEVsLCBjbG9uZWRFbCk7XG4gIGNvbnN0IGRvYyA9IGNvbXBvbmVudEVsLm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IHR4ID0gZG9jLmRpciA9PT0gJ3J0bCcgPyA5OTk5IDogLTk5OTk7XG4gIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGlucHV0RWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHh9cHgsJHtpbnB1dFJlbGF0aXZlWX1weCwwKSBzY2FsZSgwKWA7XG59O1xuY29uc3QgcmVtb3ZlQ2xvbmUgPSAoY29tcG9uZW50RWwsIGlucHV0RWwpID0+IHtcbiAgY29uc3QgY2xvbmUgPSBjbG9uZU1hcC5nZXQoY29tcG9uZW50RWwpO1xuICBpZiAoY2xvbmUpIHtcbiAgICBjbG9uZU1hcC5kZWxldGUoY29tcG9uZW50RWwpO1xuICAgIGNsb25lLnJlbW92ZSgpO1xuICB9XG4gIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgaW5wdXRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbn07XG4vKipcbiAqIEZhY3RvcmluZyBpbiA1MHB4IGdpdmVzIHVzIHNvbWUgcm9vbVxuICogaW4gY2FzZSB0aGUga2V5Ym9hcmQgc2hvd3MgcGFzc3dvcmQvYXV0b2ZpbGwgYmFyc1xuICogYXN5bmNocm9ub3VzbHkuXG4gKi9cbmNvbnN0IFNDUk9MTF9BTU9VTlRfUEFERElORyA9IDUwO1xuY29uc3QgZW5hYmxlSGlkZUNhcmV0T25TY3JvbGwgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsKSA9PiB7XG4gIGlmICghc2Nyb2xsRWwgfHwgIWlucHV0RWwpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbiAgY29uc3Qgc2Nyb2xsSGlkZUNhcmV0ID0gc2hvdWxkSGlkZUNhcmV0ID0+IHtcbiAgICBpZiAoaXNGb2N1c2VkKGlucHV0RWwpKSB7XG4gICAgICByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzaG91bGRIaWRlQ2FyZXQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4gcmVsb2NhdGVJbnB1dChjb21wb25lbnRFbCwgaW5wdXRFbCwgZmFsc2UpO1xuICBjb25zdCBoaWRlQ2FyZXQgPSAoKSA9PiBzY3JvbGxIaWRlQ2FyZXQodHJ1ZSk7XG4gIGNvbnN0IHNob3dDYXJldCA9ICgpID0+IHNjcm9sbEhpZGVDYXJldChmYWxzZSk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxFbmQnLCBzaG93Q2FyZXQpO1xuICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihzY3JvbGxFbCwgJ2lvblNjcm9sbEVuZCcsIHNob3dDYXJldCk7XG4gICAgaW5wdXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcbiAgfTtcbn07XG5jb25zdCBTS0lQX1NFTEVDVE9SID0gJ2lucHV0LCB0ZXh0YXJlYSwgW25vLWJsdXJdLCBbY29udGVudGVkaXRhYmxlXSc7XG5jb25zdCBlbmFibGVJbnB1dEJsdXJyaW5nID0gKCkgPT4ge1xuICBsZXQgZm9jdXNlZCA9IHRydWU7XG4gIGxldCBkaWRTY3JvbGwgPSBmYWxzZTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgIGRpZFNjcm9sbCA9IHRydWU7XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNpbiA9ICgpID0+IHtcbiAgICBmb2N1c2VkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgb25Ub3VjaGVuZCA9IGV2ID0+IHtcbiAgICAvLyBpZiBhcHAgZGlkIHNjcm9sbCByZXR1cm4gZWFybHlcbiAgICBpZiAoZGlkU2Nyb2xsKSB7XG4gICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb25seSBibHVyIGlmIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBhIHRleHQtaW5wdXQgb3IgYSB0ZXh0YXJlYVxuICAgIGlmIChhY3RpdmUubWF0Y2hlcyhTS0lQX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgdGFyZ2V0IGlzIHRoZSBhY3RpdmUgZWxlbWVudCwgZG8gbm90IGJsdXJcbiAgICBjb25zdCB0YXBwZWQgPSBldi50YXJnZXQ7XG4gICAgaWYgKHRhcHBlZCA9PT0gYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXBwZWQubWF0Y2hlcyhTS0lQX1NFTEVDVE9SKSB8fCB0YXBwZWQuY2xvc2VzdChTS0lQX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb2N1c2VkID0gZmFsc2U7XG4gICAgLy8gVE9ETyBGVy0yNzk2OiBmaW5kIGEgYmV0dGVyIHdheSwgd2h5IDUwbXM/XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH07XG4gIGFkZEV2ZW50TGlzdGVuZXIoZG9jLCAnaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaGVuZCwgZmFsc2UpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jLCAnaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQsIGZhbHNlKTtcbiAgfTtcbn07XG5jb25zdCBTQ1JPTExfQVNTSVNUX1NQRUVEID0gMC4zO1xuY29uc3QgZ2V0U2Nyb2xsRGF0YSA9IChjb21wb25lbnRFbCwgY29udGVudEVsLCBrZXlib2FyZEhlaWdodCwgcGxhdGZvcm1IZWlnaHQpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBpdGVtRWwgPSAoX2EgPSBjb21wb25lbnRFbC5jbG9zZXN0KCdpb24taXRlbSxbaW9uLWl0ZW1dJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbXBvbmVudEVsO1xuICByZXR1cm4gY2FsY1Njcm9sbERhdGEoaXRlbUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGtleWJvYXJkSGVpZ2h0LCBwbGF0Zm9ybUhlaWdodCk7XG59O1xuY29uc3QgY2FsY1Njcm9sbERhdGEgPSAoaW5wdXRSZWN0LCBjb250ZW50UmVjdCwga2V5Ym9hcmRIZWlnaHQsIHBsYXRmb3JtSGVpZ2h0KSA9PiB7XG4gIC8vIGNvbXB1dGUgaW5wdXQncyBZIHZhbHVlcyByZWxhdGl2ZSB0byB0aGUgYm9keVxuICBjb25zdCBpbnB1dFRvcCA9IGlucHV0UmVjdC50b3A7XG4gIGNvbnN0IGlucHV0Qm90dG9tID0gaW5wdXRSZWN0LmJvdHRvbTtcbiAgLy8gY29tcHV0ZSB2aXNpYmxlIGFyZWFcbiAgY29uc3QgdmlzaWJsZUFyZWFUb3AgPSBjb250ZW50UmVjdC50b3A7XG4gIGNvbnN0IHZpc2libGVBcmVhQm90dG9tID0gTWF0aC5taW4oY29udGVudFJlY3QuYm90dG9tLCBwbGF0Zm9ybUhlaWdodCAtIGtleWJvYXJkSGVpZ2h0KTtcbiAgLy8gY29tcHV0ZSBzYWZlIGFyZWFcbiAgY29uc3Qgc2FmZUFyZWFUb3AgPSB2aXNpYmxlQXJlYVRvcCArIDE1O1xuICBjb25zdCBzYWZlQXJlYUJvdHRvbSA9IHZpc2libGVBcmVhQm90dG9tIC0gU0NST0xMX0FNT1VOVF9QQURESU5HO1xuICAvLyBmaWd1cmUgb3V0IGlmIGVhY2ggZWRnZSBvZiB0aGUgaW5wdXQgaXMgd2l0aGluIHRoZSBzYWZlIGFyZWFcbiAgY29uc3QgZGlzdGFuY2VUb0JvdHRvbSA9IHNhZmVBcmVhQm90dG9tIC0gaW5wdXRCb3R0b207XG4gIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSBzYWZlQXJlYVRvcCAtIGlucHV0VG9wO1xuICAvLyBkZXNpcmVkU2Nyb2xsQW1vdW50IGlzIHRoZSBuZWdhdGVkIGRpc3RhbmNlIHRvIHRoZSBzYWZlIGFyZWEgYWNjb3JkaW5nIHRvIG91ciBjYWxjdWxhdGlvbnMuXG4gIGNvbnN0IGRlc2lyZWRTY3JvbGxBbW91bnQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlVG9Cb3R0b20gPCAwID8gLWRpc3RhbmNlVG9Cb3R0b20gOiBkaXN0YW5jZVRvVG9wID4gMCA/IC1kaXN0YW5jZVRvVG9wIDogMCk7XG4gIC8vIG91ciBjYWxjdWxhdGlvbnMgbWFrZSBzb21lIGFzc3VtcHRpb25zIHRoYXQgYXJlbid0IGFsd2F5cyB0cnVlLCBsaWtlIHRoZSBrZXlib2FyZCBiZWluZyBjbG9zZWQgd2hlbiBhbiBpbnB1dFxuICAvLyBnZXRzIGZvY3VzLCBzbyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2Nyb2xsIHRoZSBpbnB1dCBhYm92ZSB0aGUgdmlzaWJsZSBhcmVhXG4gIGNvbnN0IHNjcm9sbEFtb3VudCA9IE1hdGgubWluKGRlc2lyZWRTY3JvbGxBbW91bnQsIGlucHV0VG9wIC0gdmlzaWJsZUFyZWFUb3ApO1xuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKHNjcm9sbEFtb3VudCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyBTQ1JPTExfQVNTSVNUX1NQRUVEO1xuICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IE1hdGgubWluKDQwMCwgTWF0aC5tYXgoMTUwLCBkdXJhdGlvbikpO1xuICByZXR1cm4ge1xuICAgIHNjcm9sbEFtb3VudCxcbiAgICBzY3JvbGxEdXJhdGlvbixcbiAgICBzY3JvbGxQYWRkaW5nOiBrZXlib2FyZEhlaWdodCxcbiAgICBpbnB1dFNhZmVZOiAtKGlucHV0VG9wIC0gc2FmZUFyZWFUb3ApICsgNFxuICB9O1xufTtcbmNvbnN0IFBBRERJTkdfVElNRVJfS0VZID0gJyRpb25QYWRkaW5nVGltZXInO1xuLyoqXG4gKiBTY3JvbGwgcGFkZGluZyBhZGRzIGFkZGl0aW9uYWwgcGFkZGluZyB0byB0aGUgYm90dG9tXG4gKiBvZiBpb24tY29udGVudCBzbyB0aGF0IHRoZXJlIGlzIGVub3VnaCBzY3JvbGwgc3BhY2VcbiAqIGZvciBhbiBpbnB1dCB0byBiZSBzY3JvbGxlZCBhYm92ZSB0aGUga2V5Ym9hcmQuIFRoaXNcbiAqIGlzIG5lZWRlZCBpbiBlbnZpcm9ubWVudHMgd2hlcmUgdGhlIHdlYnZpZXcgZG9lcyBub3RcbiAqIHJlc2l6ZSB3aGVuIHRoZSBrZXlib2FyZCBvcGVucy5cbiAqXG4gKiBFeGFtcGxlOiBJZiBhbiBpbnB1dCBhdCB0aGUgYm90dG9tIG9mIGlvbi1jb250ZW50IGlzXG4gKiBmb2N1c2VkLCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIHNjcm9sbGluZyBzcGFjZSBiZWxvd1xuICogaXQsIHNvIHRoZSBpbnB1dCBjYW5ub3QgYmUgc2Nyb2xsZWQgYWJvdmUgdGhlIGtleWJvYXJkLlxuICogU2Nyb2xsIHBhZGRpbmcgZml4ZXMgdGhpcyBieSBhZGRpbmcgcGFkZGluZyBlcXVhbCB0byB0aGVcbiAqIGhlaWdodCBvZiB0aGUga2V5Ym9hcmQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudC5cbiAqXG4gKiBDb21tb24gZW52aXJvbm1lbnRzIHdoZXJlIHRoaXMgaXMgbmVlZGVkOlxuICogLSBNb2JpbGUgU2FmYXJpOiBUaGUga2V5Ym9hcmQgb3ZlcmxheXMgdGhlIGNvbnRlbnRcbiAqIC0gQ2FwYWNpdG9yL0NvcmRvdmEgb24gaU9TOiBUaGUga2V5Ym9hcmQgb3ZlcmxheXMgdGhlIGNvbnRlbnRcbiAqIHdoZW4gdGhlIEtleWJvYXJkUmVzaXplIG1vZGUgaXMgc2V0IHRvICdub25lJy5cbiAqL1xuY29uc3Qgc2V0U2Nyb2xsUGFkZGluZyA9IChjb250ZW50RWwsIHBhZGRpbmdBbW91bnQsIGNsZWFyQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgdGltZXIgPSBjb250ZW50RWxbUEFERElOR19USU1FUl9LRVldO1xuICBpZiAodGltZXIpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG4gIGlmIChwYWRkaW5nQW1vdW50ID4gMCkge1xuICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1rZXlib2FyZC1vZmZzZXQnLCBgJHtwYWRkaW5nQW1vdW50fXB4YCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudEVsW1BBRERJTkdfVElNRVJfS0VZXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLWtleWJvYXJkLW9mZnNldCcsICcwcHgnKTtcbiAgICAgIGlmIChjbGVhckNhbGxiYWNrKSB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCAxMjApO1xuICB9XG59O1xuLyoqXG4gKiBXaGVuIGFuIGlucHV0IGlzIGFib3V0IHRvIGJlIGZvY3VzZWQsXG4gKiBzZXQgYSB0aW1lb3V0IHRvIGNsZWFyIGFueSBzY3JvbGwgcGFkZGluZ1xuICogb24gdGhlIGNvbnRlbnQuIE5vdGU6IFRoZSBjbGVhcmluZ1xuICogaXMgZG9uZSBvbiBhIHRpbWVvdXQgc28gdGhhdCBpZiB1c2Vyc1xuICogYXJlIG1vdmluZyBmb2N1cyBmcm9tIG9uZSBpbnB1dCB0byB0aGUgbmV4dFxuICogdGhlbiByZS1hZGRpbmcgc2Nyb2xsIHBhZGRpbmcgdG8gdGhlIG5ld1xuICogaW5wdXQgd2l0aCBjYW5jZWwgdGhlIHRpbWVvdXQgdG8gY2xlYXIgdGhlXG4gKiBzY3JvbGwgcGFkZGluZy5cbiAqL1xuY29uc3Qgc2V0Q2xlYXJTY3JvbGxQYWRkaW5nTGlzdGVuZXIgPSAoaW5wdXRFbCwgY29udGVudEVsLCBkb25lQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgY2xlYXJTY3JvbGxQYWRkaW5nID0gKCkgPT4ge1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHNldFNjcm9sbFBhZGRpbmcoY29udGVudEVsLCAwLCBkb25lQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbiAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNsZWFyU2Nyb2xsUGFkZGluZywge1xuICAgIG9uY2U6IHRydWVcbiAgfSk7XG59O1xubGV0IGN1cnJlbnRQYWRkaW5nID0gMDtcbmNvbnN0IFNLSVBfU0NST0xMX0FTU0lTVCA9ICdkYXRhLWlvbmljLXNraXAtc2Nyb2xsLWFzc2lzdCc7XG5jb25zdCBlbmFibGVTY3JvbGxBc3Npc3QgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBlbmFibGVTY3JvbGxQYWRkaW5nLCBrZXlib2FyZFJlc2l6ZSwgZGlzYWJsZUNsb25lZElucHV0ID0gZmFsc2UpID0+IHtcbiAgLyoqXG4gICAqIFNjcm9sbCBwYWRkaW5nIHNob3VsZCBvbmx5IGJlIGFkZGVkIGlmOlxuICAgKiAxLiBUaGUgZ2xvYmFsIHNjcm9sbFBhZGRpbmcgY29uZmlnIG9wdGlvblxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogMi4gVGhlIG5hdGl2ZSBrZXlib2FyZCByZXNpemUgbW9kZSBpcyBlaXRoZXIgXCJub25lXCJcbiAgICogKGtleWJvYXJkIG92ZXJsYXlzIHdlYnZpZXcpIG9yIHVuZGVmaW5lZCAocmVzaXplXG4gICAqIGluZm9ybWF0aW9uIHVuYXZhaWxhYmxlKVxuICAgKiBSZXNpemUgaW5mbyBpcyBhdmFpbGFibGUgb24gQ2FwYWNpdG9yIDQrXG4gICAqL1xuICBjb25zdCBhZGRTY3JvbGxQYWRkaW5nID0gZW5hYmxlU2Nyb2xsUGFkZGluZyAmJiAoa2V5Ym9hcmRSZXNpemUgPT09IHVuZGVmaW5lZCB8fCBrZXlib2FyZFJlc2l6ZS5tb2RlID09PSBLZXlib2FyZFJlc2l6ZS5Ob25lKTtcbiAgLyoqXG4gICAqIFRoaXMgdHJhY2tzIHdoZXRoZXIgb3Igbm90IHRoZSBrZXlib2FyZCBoYXMgYmVlblxuICAgKiBwcmVzZW50ZWQgZm9yIGEgc2luZ2xlIGZvY3VzZWQgdGV4dCBmaWVsZC4gTm90ZVxuICAgKiB0aGF0IGl0IGRvZXMgbm90IHRyYWNrIGlmIHRoZSBrZXlib2FyZCBpcyBvcGVuXG4gICAqIGluIGdlbmVyYWwgc3VjaCBhcyBpZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiBmb3JcbiAgICogYSBkaWZmZXJlbnQgZm9jdXNlZCB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgbGV0IGhhc0tleWJvYXJkQmVlblByZXNlbnRlZEZvclRleHRGaWVsZCA9IGZhbHNlO1xuICAvKipcbiAgICogV2hlbiBhZGRpbmcgc2Nyb2xsIHBhZGRpbmcgd2UgbmVlZCB0byBrbm93XG4gICAqIGhvdyBtdWNoIG9mIHRoZSB2aWV3cG9ydCB0aGUga2V5Ym9hcmQgb2JzY3VyZXMuXG4gICAqIFdlIGRvIHRoaXMgYnkgc3VidHJhY3RpbmcgdGhlIGtleWJvYXJkIGhlaWdodFxuICAgKiBmcm9tIHRoZSBwbGF0Zm9ybSBoZWlnaHQuXG4gICAqXG4gICAqIElmIHdlIGNvbXB1dGUgdGhpcyB2YWx1ZSB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuXG4gICAqIGlucHV0cyB0aGVuIHRoZSB3ZWJ2aWV3IG1heSBhbHJlYWR5IGJlIHJlc2l6ZWQuXG4gICAqIEF0IHRoaXMgcG9pbnQsIGB3aW4uaW5uZXJIZWlnaHRgIGhhcyBhbHJlYWR5IGFjY291bnRlZFxuICAgKiBmb3IgdGhlIGtleWJvYXJkIG1lYW5pbmcgd2Ugd291bGQgdGhlbiBzdWJ0cmFjdFxuICAgKiB0aGUga2V5Ym9hcmQgaGVpZ2h0IGFnYWluLiBUaGlzIHdpbGwgcmVzdWx0IGluIHRoZSBpbnB1dFxuICAgKiBiZWluZyBzY3JvbGxlZCBtb3JlIHRoYW4gaXQgbmVlZHMgdG8uXG4gICAqL1xuICBjb25zdCBwbGF0Zm9ybUhlaWdodCA9IHdpbiAhPT0gdW5kZWZpbmVkID8gd2luLmlubmVySGVpZ2h0IDogMDtcbiAgLyoqXG4gICAqIFNjcm9sbCBhc3Npc3QgaXMgcnVuIHdoZW4gYSB0ZXh0IGZpZWxkXG4gICAqIGlzIGZvY3VzZWQuIEhvd2V2ZXIsIGl0IG1heSBuZWVkIHRvXG4gICAqIHJlLXJ1biB3aGVuIHRoZSBrZXlib2FyZCBzaXplIGNoYW5nZXNcbiAgICogc3VjaCB0aGF0IHRoZSB0ZXh0IGZpZWxkIGlzIG5vdyBoaWRkZW5cbiAgICogdW5kZXJuZWF0aCB0aGUga2V5Ym9hcmQuXG4gICAqIFRoaXMgZnVuY3Rpb24gcmUtcnVucyBzY3JvbGwgYXNzaXN0XG4gICAqIHdoZW4gdGhhdCBoYXBwZW5zLlxuICAgKlxuICAgKiBPbmUgbGltaXRhdGlvbiBvZiB0aGlzIGlzIG9uIGEgd2ViIGJyb3dzZXJcbiAgICogd2hlcmUgbmF0aXZlIGtleWJvYXJkIEFQSXMgZG8gbm90IGhhdmUgY3Jvc3MtYnJvd3NlclxuICAgKiBzdXBwb3J0LiBgaW9uS2V5Ym9hcmREaWRTaG93YCByZWxpZXMgb24gdGhlIFZpc3VhbCBWaWV3cG9ydCBBUEkuXG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUga2V5Ym9hcmQgY2hhbmdlcyBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIGdlb21ldHJ5LCB0aGVuIHNjcm9sbCBhc3Npc3Qgd2lsbCBub3QgcmUtcnVuIGV2ZW4gaWZcbiAgICogdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRoZSB0ZXh0IGZpZWxkIHVuZGVyIHRoZSBrZXlib2FyZC5cbiAgICogVGhpcyBpcyBub3QgYSBwcm9ibGVtIHdoZW4gcnVubmluZyBpbiBDb3Jkb3ZhL0NhcGFjaXRvclxuICAgKiBiZWNhdXNlIGBpb25LZXlib2FyZERpZFNob3dgIHVzZXMgdGhlIG5hdGl2ZSBldmVudHNcbiAgICogd2hpY2ggZmlyZSBldmVyeSB0aW1lIHRoZSBrZXlib2FyZCBjaGFuZ2VzLlxuICAgKi9cbiAgY29uc3Qga2V5Ym9hcmRTaG93ID0gZXYgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBrZXlib2FyZCBoYXMgbm90IHlldCBiZWVuIHByZXNlbnRlZFxuICAgICAqIGZvciB0aGlzIHRleHQgZmllbGQgdGhlbiB0aGUgdGV4dCBmaWVsZCBoYXMganVzdFxuICAgICAqIHJlY2VpdmVkIGZvY3VzLiBJbiB0aGF0IGNhc2UsIHRoZSBmb2N1c2luIGxpc3RlbmVyXG4gICAgICogd2lsbCBydW4gc2Nyb2xsIGFzc2lzdC5cbiAgICAgKi9cbiAgICBpZiAoaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID09PSBmYWxzZSkge1xuICAgICAgaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3RoZXJ3aXNlLCB0aGUga2V5Ym9hcmQgaGFzIGFscmVhZHkgYmVlbiBwcmVzZW50ZWRcbiAgICAgKiBmb3IgdGhlIGZvY3VzZWQgdGV4dCBmaWVsZC5cbiAgICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGtleWJvYXJkIGxpa2VseSBjaGFuZ2VkXG4gICAgICogZ2VvbWV0cnksIGFuZCB3ZSBuZWVkIHRvIHJlLXJ1biBzY3JvbGwgYXNzaXN0LlxuICAgICAqIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIHJvdGF0ZXMgdGhlaXIgZGV2aWNlXG4gICAgICogb3Igd2hlbiB0aGV5IHN3aXRjaCBrZXlib2FyZHMuXG4gICAgICpcbiAgICAgKiBNYWtlIHN1cmUgd2UgcGFzcyBpbiB0aGUgY29tcHV0ZWQga2V5Ym9hcmQgaGVpZ2h0XG4gICAgICogcmF0aGVyIHRoYW4gdGhlIGVzdGltYXRlZCBrZXlib2FyZCBoZWlnaHQuXG4gICAgICpcbiAgICAgKiBTaW5jZSB0aGUga2V5Ym9hcmQgaXMgYWxyZWFkeSBvcGVuIHRoZW4gd2UgZG8gbm90XG4gICAgICogbmVlZCB0byB3YWl0IGZvciB0aGUgd2VidmlldyB0byByZXNpemUsIHNvIHdlIHBhc3NcbiAgICAgKiBcIndhaXRGb3JSZXNpemU6IGZhbHNlXCIuXG4gICAgICovXG4gICAganNTZXRGb2N1cyhjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBmb290ZXJFbCwgZXYuZGV0YWlsLmtleWJvYXJkSGVpZ2h0LCBhZGRTY3JvbGxQYWRkaW5nLCBkaXNhYmxlQ2xvbmVkSW5wdXQsIHBsYXRmb3JtSGVpZ2h0LCBmYWxzZSk7XG4gIH07XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW50ZXJuYWwgc3RhdGUgd2hlbiB0aGUgdGV4dCBmaWVsZCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGNvbnN0IGZvY3VzT3V0ID0gKCkgPT4ge1xuICAgIGhhc0tleWJvYXJkQmVlblByZXNlbnRlZEZvclRleHRGaWVsZCA9IGZhbHNlO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBrZXlib2FyZFNob3cpO1xuICAgIGNvbXBvbmVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZm9jdXNPdXQpO1xuICB9O1xuICAvKipcbiAgICogV2hlbiB0aGUgaW5wdXQgaXMgYWJvdXQgdG8gcmVjZWl2ZVxuICAgKiBmb2N1cywgd2UgbmVlZCB0byBtb3ZlIGl0IHRvIHByZXZlbnRcbiAgICogbW9iaWxlIFNhZmFyaSBmcm9tIGFkanVzdGluZyB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBjb25zdCBmb2N1c0luID0gYXN5bmMgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBhc3Npc3Qgc2hvdWxkIG5vdCBydW4gYWdhaW5cbiAgICAgKiBvbiBpbnB1dHMgdGhhdCBoYXZlIGJlZW4gbWFudWFsbHlcbiAgICAgKiBmb2N1c2VkIGluc2lkZSBvZiB0aGUgc2Nyb2xsIGFzc2lzdFxuICAgICAqIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIGlmIChpbnB1dEVsLmhhc0F0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QpKSB7XG4gICAgICBpbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBqc1NldEZvY3VzKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGZvb3RlckVsLCBrZXlib2FyZEhlaWdodCwgYWRkU2Nyb2xsUGFkZGluZywgZGlzYWJsZUNsb25lZElucHV0LCBwbGF0Zm9ybUhlaWdodCk7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGtleWJvYXJkU2hvdyk7XG4gICAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dCk7XG4gIH07XG4gIGNvbXBvbmVudEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmb2N1c0luKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb21wb25lbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZm9jdXNJbik7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGtleWJvYXJkU2hvdyk7XG4gICAgY29tcG9uZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dCk7XG4gIH07XG59O1xuLyoqXG4gKiBVc2UgdGhpcyBmdW5jdGlvbiB3aGVuIHlvdSB3YW50IHRvIG1hbnVhbGx5XG4gKiBmb2N1cyBhbiBpbnB1dCBidXQgbm90IGhhdmUgc2Nyb2xsIGFzc2lzdCBydW4gYWdhaW4uXG4gKi9cbmNvbnN0IHNldE1hbnVhbEZvY3VzID0gZWwgPT4ge1xuICAvKipcbiAgICogSWYgZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQgdGhlblxuICAgKiBhIG5ldyBmb2N1c2luIGV2ZW50IHdpbGwgbm90IGJlIGRpc3BhdGNoZWRcbiAgICogdG8gcmVtb3ZlIHRoZSBTS0lMX1NDUk9MTF9BU1NJU1QgYXR0cmlidXRlLlxuICAgKi9cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsLnNldEF0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QsICd0cnVlJyk7XG4gIGVsLmZvY3VzKCk7XG59O1xuY29uc3QganNTZXRGb2N1cyA9IGFzeW5jIChjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBmb290ZXJFbCwga2V5Ym9hcmRIZWlnaHQsIGVuYWJsZVNjcm9sbFBhZGRpbmcsIGRpc2FibGVDbG9uZWRJbnB1dCA9IGZhbHNlLCBwbGF0Zm9ybUhlaWdodCA9IDAsIHdhaXRGb3JSZXNpemUgPSB0cnVlKSA9PiB7XG4gIGlmICghY29udGVudEVsICYmICFmb290ZXJFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzY3JvbGxEYXRhID0gZ2V0U2Nyb2xsRGF0YShjb21wb25lbnRFbCwgY29udGVudEVsIHx8IGZvb3RlckVsLCBrZXlib2FyZEhlaWdodCwgcGxhdGZvcm1IZWlnaHQpO1xuICBpZiAoY29udGVudEVsICYmIE1hdGguYWJzKHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50KSA8IDQpIHtcbiAgICAvLyB0aGUgdGV4dCBpbnB1dCBpcyBpbiBhIHNhZmUgcG9zaXRpb24gdGhhdCBkb2Vzbid0XG4gICAgLy8gcmVxdWlyZSBpdCB0byBiZSBzY3JvbGxlZCBpbnRvIHZpZXcsIGp1c3Qgc2V0IGZvY3VzIG5vd1xuICAgIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAgIC8qKlxuICAgICAqIEV2ZW4gdGhvdWdoIHRoZSBpbnB1dCBkb2VzIG5vdCBuZWVkXG4gICAgICogc2Nyb2xsIGFzc2lzdCwgd2Ugc2hvdWxkIHByZXNlcnZlIHRoZVxuICAgICAqIHRoZSBzY3JvbGwgcGFkZGluZyBhcyB1c2VycyBjb3VsZCBiZSBtb3ZpbmdcbiAgICAgKiBmb2N1cyBmcm9tIGFuIGlucHV0IHRoYXQgbmVlZHMgc2Nyb2xsIHBhZGRpbmdcbiAgICAgKiB0byBhbiBpbnB1dCB0aGF0IGRvZXMgbm90IG5lZWQgc2Nyb2xsIHBhZGRpbmcuXG4gICAgICogSWYgd2UgcmVtb3ZlIHRoZSBzY3JvbGwgcGFkZGluZyBub3csIHVzZXJzIHdpbGxcbiAgICAgKiBzZWUgdGhlIHBhZ2UganVtcC5cbiAgICAgKi9cbiAgICBpZiAoZW5hYmxlU2Nyb2xsUGFkZGluZyAmJiBjb250ZW50RWwgIT09IG51bGwpIHtcbiAgICAgIHNldFNjcm9sbFBhZGRpbmcoY29udGVudEVsLCBjdXJyZW50UGFkZGluZyk7XG4gICAgICBzZXRDbGVhclNjcm9sbFBhZGRpbmdMaXN0ZW5lcihpbnB1dEVsLCBjb250ZW50RWwsICgpID0+IGN1cnJlbnRQYWRkaW5nID0gMCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICAvLyB0ZW1wb3JhcmlseSBtb3ZlIHRoZSBmb2N1cyB0byB0aGUgZm9jdXMgaG9sZGVyIHNvIHRoZSBicm93c2VyXG4gIC8vIGRvZXNuJ3QgZnJlYWsgb3V0IHdoaWxlIGl0J3MgdHJ5aW5nIHRvIGdldCB0aGUgaW5wdXQgaW4gcGxhY2VcbiAgLy8gYXQgdGhpcyBwb2ludCB0aGUgbmF0aXZlIHRleHQgaW5wdXQgc3RpbGwgZG9lcyBub3QgaGF2ZSBmb2N1c1xuICByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCB0cnVlLCBzY3JvbGxEYXRhLmlucHV0U2FmZVksIGRpc2FibGVDbG9uZWRJbnB1dCk7XG4gIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAvKipcbiAgICogUmVsb2NhdGluZy9Gb2N1c2luZyBpbnB1dCBjYXVzZXMgdGhlXG4gICAqIGNsaWNrIGV2ZW50IHRvIGJlIGNhbmNlbGxlZCwgc29cbiAgICogbWFudWFsbHkgZmlyZSBvbmUgaGVyZS5cbiAgICovXG4gIHJhZigoKSA9PiBjb21wb25lbnRFbC5jbGljaygpKTtcbiAgLyoqXG4gICAqIElmIGVuYWJsZWQsIHdlIGNhbiBhZGQgc2Nyb2xsIHBhZGRpbmcgdG9cbiAgICogdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudCBzbyB0aGF0IHNjcm9sbCBhc3Npc3RcbiAgICogaGFzIGVub3VnaCByb29tIHRvIHNjcm9sbCB0aGUgaW5wdXQgYWJvdmVcbiAgICogdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgaWYgKGVuYWJsZVNjcm9sbFBhZGRpbmcgJiYgY29udGVudEVsKSB7XG4gICAgY3VycmVudFBhZGRpbmcgPSBzY3JvbGxEYXRhLnNjcm9sbFBhZGRpbmc7XG4gICAgc2V0U2Nyb2xsUGFkZGluZyhjb250ZW50RWwsIGN1cnJlbnRQYWRkaW5nKTtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgc2Nyb2xsQ29udGVudFRpbWVvdXQ7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGNsZWFuIHVwIGxpc3RlbmVycyBhbmQgdGltZW91dHNcbiAgICAgIGlmIChzY3JvbGxDb250ZW50VGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxDb250ZW50VGltZW91dCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93JywgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBzY3JvbGxDb250ZW50KTtcbiAgICAgIC8vIHNjcm9sbCB0aGUgaW5wdXQgaW50byBwbGFjZVxuICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICBhd2FpdCBzY3JvbGxCeVBvaW50KGNvbnRlbnRFbCwgMCwgc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQsIHNjcm9sbERhdGEuc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHNjcm9sbCB2aWV3IGlzIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIG5vd1xuICAgICAgLy8gZ2l2ZSB0aGUgbmF0aXZlIHRleHQgaW5wdXQgZm9jdXNcbiAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIGZhbHNlLCBzY3JvbGxEYXRhLmlucHV0U2FmZVkpO1xuICAgICAgLy8gZW5zdXJlIHRoaXMgaXMgdGhlIGZvY3VzZWQgaW5wdXRcbiAgICAgIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSBpbnB1dCBpcyBhYm91dCB0byBiZSBibHVycmVkXG4gICAgICAgKiB3ZSBzaG91bGQgc2V0IGEgdGltZW91dCB0byByZW1vdmVcbiAgICAgICAqIGFueSBzY3JvbGwgcGFkZGluZy5cbiAgICAgICAqL1xuICAgICAgaWYgKGVuYWJsZVNjcm9sbFBhZGRpbmcpIHtcbiAgICAgICAgc2V0Q2xlYXJTY3JvbGxQYWRkaW5nTGlzdGVuZXIoaW5wdXRFbCwgY29udGVudEVsLCAoKSA9PiBjdXJyZW50UGFkZGluZyA9IDApO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGRvdWJsZUtleWJvYXJkRXZlbnRMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93Jywgc2Nyb2xsQ29udGVudCk7XG4gICAgfTtcbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY29udGVudEVsKTtcbiAgICAgIC8qKlxuICAgICAgICogc2Nyb2xsRGF0YSB3aWxsIG9ubHkgY29uc2lkZXIgdGhlIGFtb3VudCB3ZSBuZWVkXG4gICAgICAgKiB0byBzY3JvbGwgaW4gb3JkZXIgdG8gcHJvcGVybHkgYnJpbmcgdGhlIGlucHV0XG4gICAgICAgKiBpbnRvIHZpZXcuIEl0IHdpbGwgbm90IGNvbnNpZGVyIHRoZSBhbW91bnRcbiAgICAgICAqIHdlIGNhbiBzY3JvbGwgaW4gdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCBzY3JvbGxEYXRhIG1heSByZXF1ZXN0IGEgZ3JlYXRlclxuICAgICAgICogc2Nyb2xsIHBvc2l0aW9uIHRoYW4gaXMgY3VycmVudGx5IGF2YWlsYWJsZVxuICAgICAgICogaW4gdGhlIERPTS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgd2UgbmVlZCB0b1xuICAgICAgICogd2FpdCBmb3IgdGhlIHdlYnZpZXcgdG8gcmVzaXplL3RoZSBrZXlib2FyZFxuICAgICAgICogdG8gc2hvdyBpbiBvcmRlciBmb3IgYWRkaXRpb25hbCBzY3JvbGxcbiAgICAgICAqIGJhbmR3aWR0aCB0byBiZWNvbWUgYXZhaWxhYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCB0b3RhbFNjcm9sbEFtb3VudCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgIGlmICh3YWl0Rm9yUmVzaXplICYmIHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50ID4gdG90YWxTY3JvbGxBbW91bnQgLSBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIGlPUyBkZXZpY2VzLCB0aGUgc3lzdGVtIHdpbGwgc2hvdyBhIFwiUGFzc3dvcmRzXCIgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICAgICAgKiBhZnRlciB0aGUgaW5pdGlhbCBrZXlib2FyZCBpcyBzaG93bi4gVGhpcyBwcmV2ZW50cyB0aGUgd2VidmlldyBmcm9tIHJlc2l6aW5nXG4gICAgICAgICAqIHVudGlsIHRoZSBcIlBhc3N3b3Jkc1wiIGJhciBpcyBzaG93biwgc28gd2UgbmVlZCB0byB3YWl0IGZvciB0aGF0IHRvIGhhcHBlbiBmaXJzdC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbnB1dEVsLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAvLyBBZGQgNTBweCB0byBhY2NvdW50IGZvciB0aGUgXCJQYXNzd29yZHNcIiBiYXJcbiAgICAgICAgICBzY3JvbGxEYXRhLnNjcm9sbEFtb3VudCArPSBTQ1JPTExfQU1PVU5UX1BBRERJTkc7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGRvdWJsZUtleWJvYXJkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIHNjcm9sbENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHNob3VsZCBvbmx5IGZpcmUgaW4gMiBpbnN0YW5jZXM6XG4gICAgICAgICAqIDEuIFRoZSBhcHAgaXMgdmVyeSBzbG93LlxuICAgICAgICAgKiAyLiBUaGUgYXBwIGlzIHJ1bm5pbmcgaW4gYSBicm93c2VyIG9uIGFuIG9sZCBPU1xuICAgICAgICAgKiB0aGF0IGRvZXMgbm90IHN1cHBvcnQgSW9uaWMgS2V5Ym9hcmQgRXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxDb250ZW50VGltZW91dCA9IHNldFRpbWVvdXQoc2Nyb2xsQ29udGVudCwgMTAwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsQ29udGVudCgpO1xuICB9XG59O1xuY29uc3QgSU5QVVRfQkxVUlJJTkcgPSB0cnVlO1xuY29uc3Qgc3RhcnRJbnB1dFNoaW1zID0gYXN5bmMgKGNvbmZpZywgcGxhdGZvcm0pID0+IHtcbiAgLyoqXG4gICAqIElmIGRvYyBpcyB1bmRlZmluZWQgdGhlbiB3ZSBhcmUgaW4gYW4gU1NSIGVudmlyb25tZW50XG4gICAqIHdoZXJlIGlucHV0IHNoaW1zIGRvIG5vdCBhcHBseS5cbiAgICovXG4gIGlmIChkb2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcbiAgY29uc3QgaXNBbmRyb2lkID0gcGxhdGZvcm0gPT09ICdhbmRyb2lkJztcbiAgLyoqXG4gICAqIEhpZGUgQ2FyZXQgYW5kIElucHV0IEJsdXJyaW5nIGFyZSBuZWVkZWQgb24gaU9TLlxuICAgKiBTY3JvbGwgQXNzaXN0IGFuZCBTY3JvbGwgUGFkZGluZyBhcmUgbmVlZGVkIG9uIGlPUyBhbmQgQW5kcm9pZFxuICAgKiB3aXRoIENocm9tZSB3ZWIgYnJvd3NlciAobm90IENocm9tZSB3ZWJ2aWV3KS5cbiAgICovXG4gIGNvbnN0IGtleWJvYXJkSGVpZ2h0ID0gY29uZmlnLmdldE51bWJlcigna2V5Ym9hcmRIZWlnaHQnLCAyOTApO1xuICBjb25zdCBzY3JvbGxBc3Npc3QgPSBjb25maWcuZ2V0Qm9vbGVhbignc2Nyb2xsQXNzaXN0JywgdHJ1ZSk7XG4gIGNvbnN0IGhpZGVDYXJldCA9IGNvbmZpZy5nZXRCb29sZWFuKCdoaWRlQ2FyZXRPblNjcm9sbCcsIGlzSU9TKTtcbiAgLyoqXG4gICAqIFRoZSB0ZWFtIGlzIGV2YWx1YXRpbmcgaWYgaW5wdXRCbHVycmluZyBpcyBzdGlsbCBuZWVkZWQuIEFzIGEgcmVzdWx0XG4gICAqIHRoaXMgZmVhdHVyZSBpcyBkaXNhYmxlZCBieSBkZWZhdWx0IGFzIG9mIElvbmljIDguMC4gRGV2ZWxvcGVycyBhcmVcbiAgICogYWJsZSB0byByZS1lbmFibGUgaXQgdGVtcG9yYXJpbHkuIFRoZSB0ZWFtIG1heSByZW1vdmUgdGhpcyB1dGlsaXR5XG4gICAqIGlmIGl0IGlzIGRldGVybWluZWQgdGhhdCBkb2luZyBzbyB3b3VsZCBub3QgYnJpbmcgYW55IGFkdmVyc2Ugc2lkZSBlZmZlY3RzLlxuICAgKiBUT0RPIEZXLTYwMTQgcmVtb3ZlIGlucHV0IGJsdXJyaW5nIHV0aWxpdHkgKGluY2x1ZGluZyBpbXBsZW1lbnRhdGlvbilcbiAgICovXG4gIGNvbnN0IGlucHV0Qmx1cnJpbmcgPSBjb25maWcuZ2V0Qm9vbGVhbignaW5wdXRCbHVycmluZycsIGZhbHNlKTtcbiAgY29uc3Qgc2Nyb2xsUGFkZGluZyA9IGNvbmZpZy5nZXRCb29sZWFuKCdzY3JvbGxQYWRkaW5nJywgdHJ1ZSk7XG4gIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pbnB1dCwgaW9uLXRleHRhcmVhJykpO1xuICBjb25zdCBoaWRlQ2FyZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBjb25zdCBzY3JvbGxBc3Npc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAvKipcbiAgICogR3JhYiB0aGUgbmF0aXZlIGtleWJvYXJkIHJlc2l6ZSBjb25maWd1cmF0aW9uXG4gICAqIGFuZCBwYXNzIGl0IHRvIHNjcm9sbCBhc3Npc3QuIFNjcm9sbCBhc3Npc3QgcmVxdWlyZXNcbiAgICogdGhhdCB3ZSBhZGp1c3QgdGhlIGlucHV0IHJpZ2h0IGJlZm9yZSB0aGUgaW5wdXRcbiAgICogaXMgYWJvdXQgdG8gYmUgZm9jdXNlZC4gSWYgd2UgY2FsbGVkIGBLZXlib2FyZC5nZXRSZXNpemVNb2RlYFxuICAgKiBvbiBmb2N1c2luIGluIHNjcm9sbCBhc3Npc3QsIHdlIGNvdWxkIHBvdGVudGlhbGx5IGFkanVzdCB0aGVcbiAgICogaW5wdXQgdG9vIGxhdGUgc2luY2UgdGhpcyBjYWxsIGlzIGFzeW5jLlxuICAgKi9cbiAgY29uc3Qga2V5Ym9hcmRSZXNpemVNb2RlID0gYXdhaXQgS2V5Ym9hcmQuZ2V0UmVzaXplTW9kZSgpO1xuICBjb25zdCByZWdpc3RlcklucHV0ID0gYXN5bmMgY29tcG9uZW50RWwgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeShjb21wb25lbnRFbCwgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IGlucHV0Um9vdCA9IGNvbXBvbmVudEVsLnNoYWRvd1Jvb3QgfHwgY29tcG9uZW50RWw7XG4gICAgY29uc3QgaW5wdXRFbCA9IGlucHV0Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIHx8IGlucHV0Um9vdC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHNjcm9sbEVsID0gZmluZENsb3Nlc3RJb25Db250ZW50KGNvbXBvbmVudEVsKTtcbiAgICBjb25zdCBmb290ZXJFbCA9ICFzY3JvbGxFbCA/IGNvbXBvbmVudEVsLmNsb3Nlc3QoJ2lvbi1mb290ZXInKSA6IG51bGw7XG4gICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghIXNjcm9sbEVsICYmIGhpZGVDYXJldCAmJiAhaGlkZUNhcmV0TWFwLmhhcyhjb21wb25lbnRFbCkpIHtcbiAgICAgIGNvbnN0IHJtRm4gPSBlbmFibGVIaWRlQ2FyZXRPblNjcm9sbChjb21wb25lbnRFbCwgaW5wdXRFbCwgc2Nyb2xsRWwpO1xuICAgICAgaGlkZUNhcmV0TWFwLnNldChjb21wb25lbnRFbCwgcm1Gbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGRhdGUvZGF0ZXRpbWUtbG9jYWxlIGlucHV0cyBvbiBtb2JpbGUgZGV2aWNlcyBzaG93IGRhdGUgcGlja2VyXG4gICAgICogb3ZlcmxheXMgaW5zdGVhZCBvZiBrZXlib2FyZHMuIEFzIGEgcmVzdWx0LCBzY3JvbGwgYXNzaXN0IGlzXG4gICAgICogbm90IG5lZWRlZC4gVGhpcyBhbHNvIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBpT1MgPDE2IHdoZXJlXG4gICAgICogc2Nyb2xsIGFzc2lzdCBjYXVzZXMgdGhlIGJyb3dzZXIgdG8gbG9jayB1cC4gU2VlIEZXLTE5OTcuXG4gICAgICovXG4gICAgY29uc3QgaXNEYXRlSW5wdXQgPSBpbnB1dEVsLnR5cGUgPT09ICdkYXRlJyB8fCBpbnB1dEVsLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCc7XG4gICAgaWYgKCFpc0RhdGVJbnB1dCAmJiAoISFzY3JvbGxFbCB8fCAhIWZvb3RlckVsKSAmJiBzY3JvbGxBc3Npc3QgJiYgIXNjcm9sbEFzc2lzdE1hcC5oYXMoY29tcG9uZW50RWwpKSB7XG4gICAgICBjb25zdCBybUZuID0gZW5hYmxlU2Nyb2xsQXNzaXN0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzY3JvbGxFbCwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBzY3JvbGxQYWRkaW5nLCBrZXlib2FyZFJlc2l6ZU1vZGUsIGlzQW5kcm9pZCk7XG4gICAgICBzY3JvbGxBc3Npc3RNYXAuc2V0KGNvbXBvbmVudEVsLCBybUZuKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVucmVnaXN0ZXJJbnB1dCA9IGNvbXBvbmVudEVsID0+IHtcbiAgICBpZiAoaGlkZUNhcmV0KSB7XG4gICAgICBjb25zdCBmbiA9IGhpZGVDYXJldE1hcC5nZXQoY29tcG9uZW50RWwpO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgICBoaWRlQ2FyZXRNYXAuZGVsZXRlKGNvbXBvbmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbEFzc2lzdCkge1xuICAgICAgY29uc3QgZm4gPSBzY3JvbGxBc3Npc3RNYXAuZ2V0KGNvbXBvbmVudEVsKTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgICAgc2Nyb2xsQXNzaXN0TWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgfVxuICB9O1xuICBpZiAoaW5wdXRCbHVycmluZyAmJiBJTlBVVF9CTFVSUklORykge1xuICAgIGVuYWJsZUlucHV0Qmx1cnJpbmcoKTtcbiAgfVxuICAvLyBJbnB1dCBtaWdodCBiZSBhbHJlYWR5IGxvYWRlZCBpbiB0aGUgRE9NIGJlZm9yZSBpb24tZGV2aWNlLWhhY2tzIGRpZC5cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBuZWVkIHRvIGxvb2sgZm9yIGFsbCBvZiB0aGUgaW5wdXRzIG5vdCByZWdpc3RlcmVkIHlldFxuICAvLyBhbmQgcmVnaXN0ZXIgdGhlbS5cbiAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dHMpIHtcbiAgICByZWdpc3RlcklucHV0KGlucHV0KTtcbiAgfVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXREaWRMb2FkJywgZXYgPT4ge1xuICAgIHJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcbiAgfSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25JbnB1dERpZFVubG9hZCcsIGV2ID0+IHtcbiAgICB1bnJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcbiAgfSk7XG59O1xuZXhwb3J0IHsgc3RhcnRJbnB1dFNoaW1zIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsSUFBTSxXQUFXLG9CQUFJLFFBQVE7QUFDN0IsSUFBTSxnQkFBZ0IsQ0FBQyxhQUFhLFNBQVMsZ0JBQWdCLGlCQUFpQixHQUFHLHNCQUFzQixVQUFVO0FBQy9HLE1BQUksU0FBUyxJQUFJLFdBQVcsTUFBTSxnQkFBZ0I7QUFDaEQ7QUFBQSxFQUNGO0FBQ0EsTUFBSSxnQkFBZ0I7QUFDbEIsYUFBUyxhQUFhLFNBQVMsZ0JBQWdCLG1CQUFtQjtBQUFBLEVBQ3BFLE9BQU87QUFDTCxnQkFBWSxhQUFhLE9BQU87QUFBQSxFQUNsQztBQUNGO0FBQ0EsSUFBTSxZQUFZLFdBQVM7QUFVekIsU0FBTyxVQUFVLE1BQU0sWUFBWSxFQUFFO0FBQ3ZDO0FBQ0EsSUFBTSxXQUFXLENBQUMsYUFBYSxTQUFTLGdCQUFnQixzQkFBc0IsVUFBVTtBQVV0RixRQUFNLFdBQVcsUUFBUTtBQUV6QixRQUFNLFdBQVcsUUFBUSxVQUFVLEtBQUs7QUFDeEMsV0FBUyxVQUFVLElBQUksY0FBYztBQUNyQyxXQUFTLFdBQVc7QUFhcEIsTUFBSSxxQkFBcUI7QUFDdkIsYUFBUyxXQUFXO0FBQUEsRUFDdEI7QUFDQSxXQUFTLFlBQVksUUFBUTtBQUM3QixXQUFTLElBQUksYUFBYSxRQUFRO0FBQ2xDLFFBQU1BLE9BQU0sWUFBWTtBQUN4QixRQUFNLEtBQUtBLEtBQUksUUFBUSxRQUFRLE9BQU87QUFDdEMsY0FBWSxNQUFNLGdCQUFnQjtBQUNsQyxVQUFRLE1BQU0sWUFBWSxlQUFlLEVB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
