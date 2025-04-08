import {
  CoreDelegate
} from "./chunk-U6MFTC2E.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  addEventListener,
  componentOnReady,
  focusVisibleElement,
  getElementRoot,
  removeEventListener
} from "./chunk-RRWPYKYY.js";
import {
  BACKDROP_NO_SCROLL
} from "./chunk-F4BDZKIT.js";
import {
  OVERLAY_BACK_BUTTON_PRIORITY,
  shouldUseCloseWatcher
} from "./chunk-QVGABGEB.js";
import {
  doc
} from "./chunk-JYOJD2RE.js";
import {
  config,
  getIonMode,
  isPlatform
} from "./chunk-5IJ3YEPD.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/overlays-41a5d51b.js
var focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
var focusFirstDescendant = (ref, fallbackElement) => {
  const firstInput = ref.querySelector(focusableQueryString);
  focusElementInContext(firstInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
var focusLastDescendant = (ref, fallbackElement) => {
  const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  focusElementInContext(lastInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
var focusElementInContext = (hostToFocus, fallbackElement) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    const radioGroup = elementToFocus.closest("ion-radio-group");
    if (radioGroup) {
      radioGroup.setFocus();
    } else {
      focusVisibleElement(elementToFocus);
    }
  } else {
    fallbackElement.focus();
  }
};
var lastOverlayIndex = 0;
var lastId = 0;
var activeAnimations = /* @__PURE__ */ new WeakMap();
var createController = (tagName) => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    getTop() {
      return __async(this, null, function* () {
        return getPresentedOverlay(document, tagName);
      });
    }
  };
};
var alertController = /* @__PURE__ */ createController("ion-alert");
var actionSheetController = /* @__PURE__ */ createController("ion-action-sheet");
var loadingController = /* @__PURE__ */ createController("ion-loading");
var modalController = /* @__PURE__ */ createController("ion-modal");
var pickerController = /* @__PURE__ */ createController("ion-picker-legacy");
var popoverController = /* @__PURE__ */ createController("ion-popover");
var toastController = /* @__PURE__ */ createController("ion-toast");
var prepareOverlay = (el) => {
  if (typeof document !== "undefined") {
    connectListeners(document);
  }
  const overlayIndex = lastOverlayIndex++;
  el.overlayIndex = overlayIndex;
};
var setOverlayId = (el) => {
  if (!el.hasAttribute("id")) {
    el.id = `ion-overlay-${++lastId}`;
  }
  return el.id;
};
var createOverlay = (tagName, opts) => {
  if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
    return window.customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add("overlay-hidden");
      Object.assign(element, Object.assign(Object.assign({}, opts), {
        hasController: true
      }));
      getAppRoot(document).appendChild(element);
      return new Promise((resolve) => componentOnReady(element, resolve));
    });
  }
  return Promise.resolve();
};
var isOverlayHidden = (overlay) => overlay.classList.contains("overlay-hidden");
var focusElementInOverlay = (hostToFocus, overlay) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    focusVisibleElement(elementToFocus);
  } else {
    overlay.focus();
  }
};
var trapKeyboardFocus = (ev, doc2) => {
  const lastOverlay = getPresentedOverlay(doc2, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover");
  const target = ev.target;
  if (!lastOverlay || !target) {
    return;
  }
  if (lastOverlay.classList.contains(FOCUS_TRAP_DISABLE_CLASS)) {
    return;
  }
  const trapScopedFocus = () => {
    if (lastOverlay === target) {
      lastOverlay.lastFocus = void 0;
    } else if (target.tagName === "ION-TOAST") {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      const overlayRoot = getElementRoot(lastOverlay);
      if (!overlayRoot.contains(target)) {
        return;
      }
      const overlayWrapper = overlayRoot.querySelector(".ion-overlay-wrapper");
      if (!overlayWrapper) {
        return;
      }
      if (overlayWrapper.contains(target) || target === overlayRoot.querySelector("ion-backdrop")) {
        lastOverlay.lastFocus = target;
      } else {
        const lastFocus = lastOverlay.lastFocus;
        focusFirstDescendant(overlayWrapper, lastOverlay);
        if (lastFocus === doc2.activeElement) {
          focusLastDescendant(overlayWrapper, lastOverlay);
        }
        lastOverlay.lastFocus = doc2.activeElement;
      }
    }
  };
  const trapShadowFocus = () => {
    if (lastOverlay.contains(target)) {
      lastOverlay.lastFocus = target;
    } else if (target.tagName === "ION-TOAST") {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      const lastFocus = lastOverlay.lastFocus;
      focusFirstDescendant(lastOverlay);
      if (lastFocus === doc2.activeElement) {
        focusLastDescendant(lastOverlay);
      }
      lastOverlay.lastFocus = doc2.activeElement;
    }
  };
  if (lastOverlay.shadowRoot) {
    trapShadowFocus();
  } else {
    trapScopedFocus();
  }
};
var connectListeners = (doc2) => {
  if (lastOverlayIndex === 0) {
    lastOverlayIndex = 1;
    doc2.addEventListener("focus", (ev) => {
      trapKeyboardFocus(ev, doc2);
    }, true);
    doc2.addEventListener("ionBackButton", (ev) => {
      const lastOverlay = getPresentedOverlay(doc2);
      if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
        ev.detail.register(OVERLAY_BACK_BUTTON_PRIORITY, () => {
          lastOverlay.dismiss(void 0, BACKDROP);
        });
      }
    });
    if (!shouldUseCloseWatcher()) {
      doc2.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") {
          const lastOverlay = getPresentedOverlay(doc2);
          if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
            lastOverlay.dismiss(void 0, BACKDROP);
          }
        }
      });
    }
  }
};
var dismissOverlay = (doc2, data, role, overlayTag, id) => {
  const overlay = getPresentedOverlay(doc2, overlayTag, id);
  if (!overlay) {
    return Promise.reject("overlay does not exist");
  }
  return overlay.dismiss(data, role);
};
var getOverlays = (doc2, selector) => {
  if (selector === void 0) {
    selector = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast";
  }
  return Array.from(doc2.querySelectorAll(selector)).filter((c) => c.overlayIndex > 0);
};
var getPresentedOverlays = (doc2, overlayTag) => {
  return getOverlays(doc2, overlayTag).filter((o) => !isOverlayHidden(o));
};
var getPresentedOverlay = (doc2, overlayTag, id) => {
  const overlays = getPresentedOverlays(doc2, overlayTag);
  return id === void 0 ? overlays[overlays.length - 1] : overlays.find((o) => o.id === id);
};
var setRootAriaHidden = (hidden = false) => {
  const root = getAppRoot(document);
  const viewContainer = root.querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");
  if (!viewContainer) {
    return;
  }
  if (hidden) {
    viewContainer.setAttribute("aria-hidden", "true");
  } else {
    viewContainer.removeAttribute("aria-hidden");
  }
};
var present = (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => __async(void 0, null, function* () {
  var _a, _b;
  if (overlay.presented) {
    return;
  }
  if (overlay.el.tagName !== "ION-TOAST") {
    setRootAriaHidden(true);
    document.body.classList.add(BACKDROP_NO_SCROLL);
  }
  hideUnderlyingOverlaysFromScreenReaders(overlay.el);
  hideAnimatingOverlayFromScreenReaders(overlay.el);
  overlay.presented = true;
  overlay.willPresent.emit();
  (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
  const mode = getIonMode(overlay);
  const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : config.get(name, mode === "ios" ? iosEnterAnimation : mdEnterAnimation);
  const completed = yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
  if (completed) {
    overlay.didPresent.emit();
    (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
  }
  if (overlay.el.tagName !== "ION-TOAST") {
    restoreElementFocus(overlay.el);
  }
  if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
    overlay.el.focus();
  }
  overlay.el.removeAttribute("aria-hidden");
});
var restoreElementFocus = (overlayEl) => __async(void 0, null, function* () {
  let previousElement = document.activeElement;
  if (!previousElement) {
    return;
  }
  const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
  if (shadowRoot) {
    previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
  }
  yield overlayEl.onDidDismiss();
  if (document.activeElement === null || document.activeElement === document.body) {
    previousElement.focus();
  }
});
var dismiss = (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => __async(void 0, null, function* () {
  var _a, _b;
  if (!overlay.presented) {
    return false;
  }
  const presentedOverlays = doc !== void 0 ? getPresentedOverlays(doc) : [];
  const overlaysNotToast = presentedOverlays.filter((o) => o.tagName !== "ION-TOAST");
  const lastOverlayNotToast = overlaysNotToast.length === 1 && overlaysNotToast[0].id === overlay.el.id;
  if (lastOverlayNotToast) {
    setRootAriaHidden(false);
    document.body.classList.remove(BACKDROP_NO_SCROLL);
  }
  overlay.presented = false;
  try {
    hideAnimatingOverlayFromScreenReaders(overlay.el);
    overlay.el.style.setProperty("pointer-events", "none");
    overlay.willDismiss.emit({
      data,
      role
    });
    (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({
      data,
      role
    });
    const mode = getIonMode(overlay);
    const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : config.get(name, mode === "ios" ? iosLeaveAnimation : mdLeaveAnimation);
    if (role !== GESTURE) {
      yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    }
    overlay.didDismiss.emit({
      data,
      role
    });
    (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({
      data,
      role
    });
    const animations = activeAnimations.get(overlay) || [];
    animations.forEach((ani) => ani.destroy());
    activeAnimations.delete(overlay);
    overlay.el.classList.add("overlay-hidden");
    overlay.el.style.removeProperty("pointer-events");
    if (overlay.el.lastFocus !== void 0) {
      overlay.el.lastFocus = void 0;
    }
  } catch (err) {
    console.error(err);
  }
  overlay.el.remove();
  revealOverlaysToScreenReaders();
  return true;
});
var getAppRoot = (doc2) => {
  return doc2.querySelector("ion-app") || doc2.body;
};
var overlayAnimation = (overlay, animationBuilder, baseEl, opts) => __async(void 0, null, function* () {
  baseEl.classList.remove("overlay-hidden");
  const aniRoot = overlay.el;
  const animation = animationBuilder(aniRoot, opts);
  if (!overlay.animated || !config.getBoolean("animated", true)) {
    animation.duration(0);
  }
  if (overlay.keyboardClose) {
    animation.beforeAddWrite(() => {
      const activeElement = baseEl.ownerDocument.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches("input,ion-input, ion-textarea")) {
        activeElement.blur();
      }
    });
  }
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation]);
  yield animation.play();
  return true;
});
var eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise((r) => resolve = r);
  onceEvent(element, eventName, (event) => {
    resolve(event.detail);
  });
  return promise;
};
var onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    removeEventListener(element, eventName, handler);
    callback(ev);
  };
  addEventListener(element, eventName, handler);
};
var isCancel = (role) => {
  return role === "cancel" || role === BACKDROP;
};
var defaultGate = (h) => h();
var safeCall = (handler, arg) => {
  if (typeof handler === "function") {
    const jmp = config.get("_zoneGate", defaultGate);
    return jmp(() => {
      try {
        return handler(arg);
      } catch (e) {
        throw e;
      }
    });
  }
  return void 0;
};
var BACKDROP = "backdrop";
var GESTURE = "gesture";
var OVERLAY_GESTURE_PRIORITY = 39;
var createDelegateController = (ref) => {
  let inline = false;
  let workingDelegate;
  const coreDelegate = CoreDelegate();
  const getDelegate = (force = false) => {
    if (workingDelegate && !force) {
      return {
        delegate: workingDelegate,
        inline
      };
    }
    const {
      el,
      hasController,
      delegate
    } = ref;
    const parentEl = el.parentNode;
    inline = parentEl !== null && !hasController;
    workingDelegate = inline ? delegate || coreDelegate : delegate;
    return {
      inline,
      delegate: workingDelegate
    };
  };
  const attachViewToDom = (component) => __async(void 0, null, function* () {
    const {
      delegate
    } = getDelegate(true);
    if (delegate) {
      return yield delegate.attachViewToDom(ref.el, component);
    }
    const {
      hasController
    } = ref;
    if (hasController && component !== void 0) {
      throw new Error("framework delegate is missing");
    }
    return null;
  });
  const removeViewFromDom = () => {
    const {
      delegate
    } = getDelegate();
    if (delegate && ref.el !== void 0) {
      delegate.removeViewFromDom(ref.el.parentElement, ref.el);
    }
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};
var createTriggerController = () => {
  let destroyTriggerInteraction;
  const removeClickListener = () => {
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
      destroyTriggerInteraction = void 0;
    }
  };
  const addClickListener = (el, trigger) => {
    removeClickListener();
    const triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      printIonWarning(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
      return;
    }
    const configureTriggerInteraction = (targetEl, overlayEl) => {
      const openOverlay = () => {
        overlayEl.present();
      };
      targetEl.addEventListener("click", openOverlay);
      return () => {
        targetEl.removeEventListener("click", openOverlay);
      };
    };
    destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };
  return {
    addClickListener,
    removeClickListener
  };
};
var hideAnimatingOverlayFromScreenReaders = (overlay) => {
  if (doc === void 0) return;
  if (isPlatform("android")) {
    overlay.setAttribute("aria-hidden", "true");
  }
};
var hideUnderlyingOverlaysFromScreenReaders = (newTopMostOverlay) => {
  var _a;
  if (doc === void 0) return;
  const overlays = getPresentedOverlays(doc);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const presentedOverlay = overlays[i];
    const nextPresentedOverlay = (_a = overlays[i + 1]) !== null && _a !== void 0 ? _a : newTopMostOverlay;
    if (nextPresentedOverlay.hasAttribute("aria-hidden") || nextPresentedOverlay.tagName !== "ION-TOAST") {
      presentedOverlay.setAttribute("aria-hidden", "true");
    }
  }
};
var revealOverlaysToScreenReaders = () => {
  if (doc === void 0) return;
  const overlays = getPresentedOverlays(doc);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const currentOverlay = overlays[i];
    currentOverlay.removeAttribute("aria-hidden");
    if (currentOverlay.tagName !== "ION-TOAST") {
      break;
    }
  }
};
var FOCUS_TRAP_DISABLE_CLASS = "ion-disable-focus-trap";

export {
  focusFirstDescendant,
  focusLastDescendant,
  alertController,
  actionSheetController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController,
  prepareOverlay,
  setOverlayId,
  getPresentedOverlay,
  present,
  dismiss,
  eventMethod,
  isCancel,
  safeCall,
  BACKDROP,
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createDelegateController,
  createTriggerController,
  FOCUS_TRAP_DISABLE_CLASS
};
/*! Bundled license information:

@ionic/core/dist/esm/overlays-41a5d51b.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9vdmVybGF5cy00MWE1ZDUxYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCB7IGYgYXMgZm9jdXNWaXNpYmxlRWxlbWVudCwgYyBhcyBjb21wb25lbnRPblJlYWR5LCBhIGFzIGFkZEV2ZW50TGlzdGVuZXIsIGIgYXMgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgZyBhcyBnZXRFbGVtZW50Um9vdCB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBzaG91bGRVc2VDbG9zZVdhdGNoZXIgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjb25maWcsIGEgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IEMgYXMgQ29yZURlbGVnYXRlIH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtMmVlYTE3NjMuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUF9OT19TQ1JPTEwgfSBmcm9tICcuL2dlc3R1cmUtY29udHJvbGxlci0zMTRhNTRmNi5qcyc7XG5pbXBvcnQgeyBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuXG4vKipcbiAqIFRoaXMgcXVlcnkgc3RyaW5nIHNlbGVjdHMgZWxlbWVudHMgdGhhdFxuICogYXJlIGVsaWdpYmxlIHRvIHJlY2VpdmUgZm9jdXMuIFdlIHNlbGVjdFxuICogaW50ZXJhY3RpdmUgZWxlbWVudHMgdGhhdCBtZWV0IHRoZSBmb2xsb3dpbmdcbiAqIGNyaXRlcmlhOlxuICogMS4gRWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgbmVnYXRpdmUgdGFiaW5kZXhcbiAqIDIuIEVsZW1lbnQgZG9lcyBub3QgaGF2ZSBgaGlkZGVuYFxuICogMy4gRWxlbWVudCBkb2VzIG5vdCBoYXZlIGBkaXNhYmxlZGAgZm9yIG5vbi1Jb25pYyBjb21wb25lbnRzLlxuICogNC4gRWxlbWVudCBkb2VzIG5vdCBoYXZlIGBkaXNhYmxlZGAgb3IgYGRpc2FibGVkPVwidHJ1ZVwiYCBmb3IgSW9uaWMgY29tcG9uZW50cy5cbiAqIE5vdGU6IFdlIG5lZWQgdGhpcyBkaXN0aW5jdGlvbiBiZWNhdXNlIGBkaXNhYmxlZD1cImZhbHNlXCJgIGlzXG4gKiB2YWxpZCB1c2FnZSBmb3IgdGhlIGRpc2FibGVkIHByb3BlcnR5IG9uIGlvbi1idXR0b24uXG4gKi9cbmNvbnN0IGZvY3VzYWJsZVF1ZXJ5U3RyaW5nID0gJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKSwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKSwgaW9uLWNoZWNrYm94Om5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIGlvbi1yYWRpbzpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pLCAuaW9uLWZvY3VzYWJsZTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pLCAuaW9uLWZvY3VzYWJsZVtkaXNhYmxlZD1cImZhbHNlXCJdOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKSc7XG4vKipcbiAqIEZvY3VzZXMgdGhlIGZpcnN0IGRlc2NlbmRhbnQgaW4gYSBjb250ZXh0XG4gKiB0aGF0IGNhbiByZWNlaXZlIGZvY3VzLiBJZiBub25lIGV4aXN0cyxcbiAqIGEgZmFsbGJhY2sgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQuXG4gKiBUaGlzIGZhbGxiYWNrIGlzIHR5cGljYWxseSBhbiBhbmNlc3RvclxuICogY29udGFpbmVyIHN1Y2ggYXMgYSBtZW51IG9yIG92ZXJsYXkgc28gZm9jdXMgZG9lcyBub3RcbiAqIGxlYXZlIHRoZSBjb250YWluZXIgd2UgYXJlIHRyeWluZyB0byB0cmFwIGZvY3VzIGluLlxuICpcbiAqIElmIG5vIGZhbGxiYWNrIGlzIHNwZWNpZmllZCB0aGVuIHdlIGZvY3VzIHRoZSBjb250YWluZXIgaXRzZWxmLlxuICovXG5jb25zdCBmb2N1c0ZpcnN0RGVzY2VuZGFudCA9IChyZWYsIGZhbGxiYWNrRWxlbWVudCkgPT4ge1xuICBjb25zdCBmaXJzdElucHV0ID0gcmVmLnF1ZXJ5U2VsZWN0b3IoZm9jdXNhYmxlUXVlcnlTdHJpbmcpO1xuICBmb2N1c0VsZW1lbnRJbkNvbnRleHQoZmlyc3RJbnB1dCwgZmFsbGJhY2tFbGVtZW50ICE9PSBudWxsICYmIGZhbGxiYWNrRWxlbWVudCAhPT0gdm9pZCAwID8gZmFsbGJhY2tFbGVtZW50IDogcmVmKTtcbn07XG4vKipcbiAqIEZvY3VzZXMgdGhlIGxhc3QgZGVzY2VuZGFudCBpbiBhIGNvbnRleHRcbiAqIHRoYXQgY2FuIHJlY2VpdmUgZm9jdXMuIElmIG5vbmUgZXhpc3RzLFxuICogYSBmYWxsYmFjayBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZC5cbiAqIFRoaXMgZmFsbGJhY2sgaXMgdHlwaWNhbGx5IGFuIGFuY2VzdG9yXG4gKiBjb250YWluZXIgc3VjaCBhcyBhIG1lbnUgb3Igb3ZlcmxheSBzbyBmb2N1cyBkb2VzIG5vdFxuICogbGVhdmUgdGhlIGNvbnRhaW5lciB3ZSBhcmUgdHJ5aW5nIHRvIHRyYXAgZm9jdXMgaW4uXG4gKlxuICogSWYgbm8gZmFsbGJhY2sgaXMgc3BlY2lmaWVkIHRoZW4gd2UgZm9jdXMgdGhlIGNvbnRhaW5lciBpdHNlbGYuXG4gKi9cbmNvbnN0IGZvY3VzTGFzdERlc2NlbmRhbnQgPSAocmVmLCBmYWxsYmFja0VsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShyZWYucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVRdWVyeVN0cmluZykpO1xuICBjb25zdCBsYXN0SW5wdXQgPSBpbnB1dHMubGVuZ3RoID4gMCA/IGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuICBmb2N1c0VsZW1lbnRJbkNvbnRleHQobGFzdElucHV0LCBmYWxsYmFja0VsZW1lbnQgIT09IG51bGwgJiYgZmFsbGJhY2tFbGVtZW50ICE9PSB2b2lkIDAgPyBmYWxsYmFja0VsZW1lbnQgOiByZWYpO1xufTtcbi8qKlxuICogRm9jdXNlcyBhIHBhcnRpY3VsYXIgZWxlbWVudCBpbiBhIGNvbnRleHQuIElmIHRoZSBlbGVtZW50XG4gKiBkb2Vzbid0IGhhdmUgYW55dGhpbmcgZm9jdXNhYmxlIGFzc29jaWF0ZWQgd2l0aCBpdCB0aGVuXG4gKiBhIGZhbGxiYWNrIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkLlxuICpcbiAqIFRoaXMgZmFsbGJhY2sgaXMgdHlwaWNhbGx5IGFuIGFuY2VzdG9yXG4gKiBjb250YWluZXIgc3VjaCBhcyBhIG1lbnUgb3Igb3ZlcmxheSBzbyBmb2N1cyBkb2VzIG5vdFxuICogbGVhdmUgdGhlIGNvbnRhaW5lciB3ZSBhcmUgdHJ5aW5nIHRvIHRyYXAgZm9jdXMgaW4uXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGZvY3VzKCkgbWV0aG9kXG4gKiBvbiBtb3N0IGVsZW1lbnRzIGJlY2F1c2UgdGhlIGZvY3VzYWJsZSBlbGVtZW50XG4gKiBtYXkgbm90IGJlIHRoZSBob3N0IGVsZW1lbnQuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIGFuIGlvbi1idXR0b24gc2hvdWxkIGJlIGZvY3VzZWRcbiAqIHRoZW4gd2Ugc2hvdWxkIGFjdHVhbGx5IGZvY3VzIHRoZSBuYXRpdmUgPGJ1dHRvbj5cbiAqIGVsZW1lbnQgaW5zaWRlIG9mIGlvbi1idXR0b24ncyBzaGFkb3cgcm9vdCwgbm90XG4gKiB0aGUgaG9zdCBlbGVtZW50IGl0c2VsZi5cbiAqL1xuY29uc3QgZm9jdXNFbGVtZW50SW5Db250ZXh0ID0gKGhvc3RUb0ZvY3VzLCBmYWxsYmFja0VsZW1lbnQpID0+IHtcbiAgbGV0IGVsZW1lbnRUb0ZvY3VzID0gaG9zdFRvRm9jdXM7XG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0VG9Gb2N1cyA9PT0gbnVsbCB8fCBob3N0VG9Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9zdFRvRm9jdXMuc2hhZG93Um9vdDtcbiAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaW5uZXIgZm9jdXNhYmxlIGVsZW1lbnRzLCBqdXN0IGZvY3VzIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgZWxlbWVudFRvRm9jdXMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoZm9jdXNhYmxlUXVlcnlTdHJpbmcpIHx8IGhvc3RUb0ZvY3VzO1xuICB9XG4gIGlmIChlbGVtZW50VG9Gb2N1cykge1xuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSBlbGVtZW50VG9Gb2N1cy5jbG9zZXN0KCdpb24tcmFkaW8tZ3JvdXAnKTtcbiAgICBpZiAocmFkaW9Hcm91cCkge1xuICAgICAgcmFkaW9Hcm91cC5zZXRGb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb2N1c1Zpc2libGVFbGVtZW50KGVsZW1lbnRUb0ZvY3VzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRm9jdXMgZmFsbGJhY2sgZWxlbWVudCBpbnN0ZWFkIG9mIGxldHRpbmcgZm9jdXMgZXNjYXBlXG4gICAgZmFsbGJhY2tFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn07XG5sZXQgbGFzdE92ZXJsYXlJbmRleCA9IDA7XG5sZXQgbGFzdElkID0gMDtcbmNvbnN0IGFjdGl2ZUFuaW1hdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgY3JlYXRlQ29udHJvbGxlciA9IHRhZ05hbWUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gY3JlYXRlT3ZlcmxheSh0YWdOYW1lLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGRpc21pc3MoZGF0YSwgcm9sZSwgaWQpIHtcbiAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgdGFnTmFtZSwgaWQpO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0VG9wKCkge1xuICAgICAgcmV0dXJuIGdldFByZXNlbnRlZE92ZXJsYXkoZG9jdW1lbnQsIHRhZ05hbWUpO1xuICAgIH1cbiAgfTtcbn07XG5jb25zdCBhbGVydENvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovY3JlYXRlQ29udHJvbGxlcignaW9uLWFsZXJ0Jyk7XG5jb25zdCBhY3Rpb25TaGVldENvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovY3JlYXRlQ29udHJvbGxlcignaW9uLWFjdGlvbi1zaGVldCcpO1xuY29uc3QgbG9hZGluZ0NvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovY3JlYXRlQ29udHJvbGxlcignaW9uLWxvYWRpbmcnKTtcbmNvbnN0IG1vZGFsQ29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tbW9kYWwnKTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBpbmxpbmUgaW9uLXBpY2tlciBjb21wb25lbnQgaW5zdGVhZC5cbiAqL1xuY29uc3QgcGlja2VyQ29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tcGlja2VyLWxlZ2FjeScpO1xuY29uc3QgcG9wb3ZlckNvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovY3JlYXRlQ29udHJvbGxlcignaW9uLXBvcG92ZXInKTtcbmNvbnN0IHRvYXN0Q29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tdG9hc3QnKTtcbi8qKlxuICogUHJlcGFyZXMgdGhlIG92ZXJsYXkgZWxlbWVudCB0byBiZSBwcmVzZW50ZWQuXG4gKi9cbmNvbnN0IHByZXBhcmVPdmVybGF5ID0gZWwgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgZXZlbnQgbGlzdGVuZXJzIGZvciBhcHBsaWNhdGlvbiBiZWhhdmlvcnM6XG4gICAgICpcbiAgICAgKiAtIEVzY2FwZSBLZXkgYmVoYXZpb3IgdG8gZGlzbWlzcyBhbiBvdmVybGF5XG4gICAgICogLSBUcmFwcGluZyBmb2N1cyB3aXRoaW4gYW4gb3ZlcmxheVxuICAgICAqIC0gQmFjayBidXR0b24gYmVoYXZpb3IgdG8gZGlzbWlzcyBhbiBvdmVybGF5XG4gICAgICpcbiAgICAgKiBUaGlzIG9ubHkgb2NjdXJzIHdoZW4gdGhlIGZpcnN0IG92ZXJsYXkgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjb25uZWN0TGlzdGVuZXJzKGRvY3VtZW50KTtcbiAgfVxuICBjb25zdCBvdmVybGF5SW5kZXggPSBsYXN0T3ZlcmxheUluZGV4Kys7XG4gIC8qKlxuICAgKiBvdmVybGF5SW5kZXggaXMgdXNlZCBpbiB0aGUgb3ZlcmxheSBjb21wb25lbnRzIHRvIHNldCBhIHpJbmRleC5cbiAgICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIG1vc3QgcmVjZW50bHkgcHJlc2VudGVkIG92ZXJsYXkgd2lsbCBiZVxuICAgKiBvbiB0b3AuXG4gICAqL1xuICBlbC5vdmVybGF5SW5kZXggPSBvdmVybGF5SW5kZXg7XG59O1xuLyoqXG4gKiBBc3NpZ25zIGFuIGluY3JlbWVudGluZyBpZCB0byBhbiBvdmVybGF5IGVsZW1lbnQsIHRoYXQgZG9lcyBub3RcbiAqIGFscmVhZHkgaGF2ZSBhbiBpZCBhc3NpZ25lZCB0byBpdC5cbiAqXG4gKiBVc2VkIHRvIHRyYWNrIHVuaXF1ZSBpbnN0YW5jZXMgb2YgYW4gb3ZlcmxheSBlbGVtZW50LlxuICovXG5jb25zdCBzZXRPdmVybGF5SWQgPSBlbCA9PiB7XG4gIGlmICghZWwuaGFzQXR0cmlidXRlKCdpZCcpKSB7XG4gICAgZWwuaWQgPSBgaW9uLW92ZXJsYXktJHsrK2xhc3RJZH1gO1xuICB9XG4gIHJldHVybiBlbC5pZDtcbn07XG5jb25zdCBjcmVhdGVPdmVybGF5ID0gKHRhZ05hbWUsIG9wdHMpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWdOYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWhpZGRlbicpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb252ZXJ0IHRoZSBwYXNzZWQgaW4gb3ZlcmxheSBvcHRpb25zIGludG8gcHJvcHNcbiAgICAgICAqIHRoYXQgZ2V0IHBhc3NlZCBkb3duIGludG8gdGhlIG5ldyBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0cyksIHtcbiAgICAgICAgaGFzQ29udHJvbGxlcjogdHJ1ZVxuICAgICAgfSkpO1xuICAgICAgLy8gYXBwZW5kIHRoZSBvdmVybGF5IGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICAgIGdldEFwcFJvb3QoZG9jdW1lbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeShlbGVtZW50LCByZXNvbHZlKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcbmNvbnN0IGlzT3ZlcmxheUhpZGRlbiA9IG92ZXJsYXkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXktaGlkZGVuJyk7XG4vKipcbiAqIEZvY3VzZXMgYSBwYXJ0aWN1bGFyIGVsZW1lbnQgaW4gYW4gb3ZlcmxheS4gSWYgdGhlIGVsZW1lbnRcbiAqIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyBmb2N1c2FibGUgYXNzb2NpYXRlZCB3aXRoIGl0IHRoZW5cbiAqIHRoZSBvdmVybGF5IGl0c2VsZiB3aWxsIGJlIGZvY3VzZWQuXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGZvY3VzKCkgbWV0aG9kXG4gKiBvbiBtb3N0IGVsZW1lbnRzIGJlY2F1c2UgdGhlIGZvY3VzYWJsZSBlbGVtZW50XG4gKiBtYXkgbm90IGJlIHRoZSBob3N0IGVsZW1lbnQuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIGFuIGlvbi1idXR0b24gc2hvdWxkIGJlIGZvY3VzZWRcbiAqIHRoZW4gd2Ugc2hvdWxkIGFjdHVhbGx5IGZvY3VzIHRoZSBuYXRpdmUgPGJ1dHRvbj5cbiAqIGVsZW1lbnQgaW5zaWRlIG9mIGlvbi1idXR0b24ncyBzaGFkb3cgcm9vdCwgbm90XG4gKiB0aGUgaG9zdCBlbGVtZW50IGl0c2VsZi5cbiAqL1xuY29uc3QgZm9jdXNFbGVtZW50SW5PdmVybGF5ID0gKGhvc3RUb0ZvY3VzLCBvdmVybGF5KSA9PiB7XG4gIGxldCBlbGVtZW50VG9Gb2N1cyA9IGhvc3RUb0ZvY3VzO1xuICBjb25zdCBzaGFkb3dSb290ID0gaG9zdFRvRm9jdXMgPT09IG51bGwgfHwgaG9zdFRvRm9jdXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhvc3RUb0ZvY3VzLnNoYWRvd1Jvb3Q7XG4gIGlmIChzaGFkb3dSb290KSB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGlubmVyIGZvY3VzYWJsZSBlbGVtZW50cywganVzdCBmb2N1cyB0aGUgaG9zdCBlbGVtZW50LlxuICAgIGVsZW1lbnRUb0ZvY3VzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGZvY3VzYWJsZVF1ZXJ5U3RyaW5nKSB8fCBob3N0VG9Gb2N1cztcbiAgfVxuICBpZiAoZWxlbWVudFRvRm9jdXMpIHtcbiAgICBmb2N1c1Zpc2libGVFbGVtZW50KGVsZW1lbnRUb0ZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGb2N1cyBvdmVybGF5IGluc3RlYWQgb2YgbGV0dGluZyBmb2N1cyBlc2NhcGVcbiAgICBvdmVybGF5LmZvY3VzKCk7XG4gIH1cbn07XG4vKipcbiAqIFRyYXBzIGtleWJvYXJkIGZvY3VzIGluc2lkZSBvZiBvdmVybGF5IGNvbXBvbmVudHMuXG4gKiBCYXNlZCBvbiBodHRwczovL3czYy5naXRodWIuaW8vYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvZGlhbG9nLW1vZGFsL2FsZXJ0ZGlhbG9nLmh0bWxcbiAqIFRoaXMgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOiBBY3Rpb24gU2hlZXQsIEFsZXJ0LCBMb2FkaW5nLCBNb2RhbCxcbiAqIFBpY2tlciwgYW5kIFBvcG92ZXIuXG4gKiBTaG91bGQgTk9UIGluY2x1ZGU6IFRvYXN0XG4gKi9cbmNvbnN0IHRyYXBLZXlib2FyZEZvY3VzID0gKGV2LCBkb2MpID0+IHtcbiAgY29uc3QgbGFzdE92ZXJsYXkgPSBnZXRQcmVzZW50ZWRPdmVybGF5KGRvYywgJ2lvbi1hbGVydCxpb24tYWN0aW9uLXNoZWV0LGlvbi1sb2FkaW5nLGlvbi1tb2RhbCxpb24tcGlja2VyLWxlZ2FjeSxpb24tcG9wb3ZlcicpO1xuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gIC8qKlxuICAgKiBJZiBubyBhY3RpdmUgb3ZlcmxheSwgaWdub3JlIHRoaXMgZXZlbnQuXG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHVzZXMgdGhlIHNoYWRvdyBkb20sXG4gICAqIHRoaXMgZ2xvYmFsIGxpc3RlbmVyIGlzIHBvaW50bGVzc1xuICAgKiBzaW5jZSBpdCB3aWxsIG5vdCBjYXRjaCB0aGUgZm9jdXNcbiAgICogdHJhcHMgYXMgdGhleSBhcmUgaW5zaWRlIHRoZSBzaGFkb3cgcm9vdC5cbiAgICogV2UgbmVlZCB0byBhZGQgYSBsaXN0ZW5lciB0byB0aGUgc2hhZG93IHJvb3RcbiAgICogaXRzZWxmIHRvIGVuc3VyZSB0aGUgZm9jdXMgdHJhcCB3b3Jrcy5cbiAgICovXG4gIGlmICghbGFzdE92ZXJsYXkgfHwgIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogSWYgdGhlIGlvbi1kaXNhYmxlLWZvY3VzLXRyYXAgY2xhc3NcbiAgICogaXMgcHJlc2VudCBvbiBhbiBvdmVybGF5LCB0aGVuIHRoaXMgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIGhhcyBvcHRlZCBvdXQgb2YgZm9jdXMgdHJhcHBpbmcuXG4gICAqIEFuIGV4YW1wbGUgb2YgdGhpcyBpcyB3aGVuIHRoZSBzaGVldCBtb2RhbFxuICAgKiBoYXMgYSBiYWNrZHJvcCB0aGF0IGlzIGRpc2FibGVkLiBUaGUgY29udGVudFxuICAgKiBiZWhpbmQgdGhlIHNoZWV0IHNob3VsZCBiZSBmb2N1c2FibGUgdW50aWxcbiAgICogdGhlIGJhY2tkcm9wIGlzIGVuYWJsZWQuXG4gICAqL1xuICBpZiAobGFzdE92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdHJhcFNjb3BlZEZvY3VzID0gKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBmb2N1c2luZyB0aGUgb3ZlcmxheSwgY2xlYXJcbiAgICAgKiB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgc28gdGhhdCBoaXR0aW5nXG4gICAgICogdGFiIGFjdGl2YXRlcyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgKiBpbiB0aGUgb3ZlcmxheSB3cmFwcGVyLlxuICAgICAqL1xuICAgIGlmIChsYXN0T3ZlcmxheSA9PT0gdGFyZ2V0KSB7XG4gICAgICBsYXN0T3ZlcmxheS5sYXN0Rm9jdXMgPSB1bmRlZmluZWQ7XG4gICAgICAvKipcbiAgICAgICAqIFRvYXN0cyBjYW4gYmUgcHJlc2VudGVkIGZyb20gYW4gb3ZlcmxheS5cbiAgICAgICAqIEhvd2V2ZXIsIGZvY3VzIHNob3VsZCBzdGlsbCBiZSByZXR1cm5lZCB0b1xuICAgICAgICogdGhlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBhIHRvYXN0LiBOb3JtYWxseSxcbiAgICAgICAqIGZvY3VzIHdvdWxkIGJlIHJldHVybmVkIHRvIHRoZSBsYXN0IGZvY3VzYWJsZVxuICAgICAgICogZGVzY2VuZGFudCBpbiB0aGUgb3ZlcmxheSB3aGljaCBtYXkgbm90IGFsd2F5cyBiZVxuICAgICAgICogdGhlIGJ1dHRvbiB0aGF0IHRoZSB0b2FzdCB3YXMgcHJlc2VudGVkIGZyb20uIEluIHRoaXMgY2FzZSxcbiAgICAgICAqIHRoZSBmb2N1cyBtYXkgYmUgcmV0dXJuZWQgdG8gYW4gdW5leHBlY3RlZCBlbGVtZW50LlxuICAgICAgICogVG8gYWNjb3VudCBmb3IgdGhpcywgd2UgbWFrZSBzdXJlIHRvIHJldHVybiBmb2N1cyB0byB0aGVcbiAgICAgICAqIGxhc3QgZm9jdXNlZCBlbGVtZW50IGluIHRoZSBvdmVybGF5IGlmIGZvY3VzIGlzXG4gICAgICAgKiBtb3ZlZCB0byB0aGUgdG9hc3QuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU9OLVRPQVNUJykge1xuICAgICAgZm9jdXNFbGVtZW50SW5PdmVybGF5KGxhc3RPdmVybGF5Lmxhc3RGb2N1cywgbGFzdE92ZXJsYXkpO1xuICAgICAgLyoqXG4gICAgICAgKiBPdGhlcndpc2UsIHdlIG11c3QgYmUgZm9jdXNpbmcgYW4gZWxlbWVudFxuICAgICAgICogaW5zaWRlIG9mIHRoZSBvdmVybGF5LiBUaGUgdHdvIHBvc3NpYmxlIG9wdGlvbnNcbiAgICAgICAqIGhlcmUgYXJlIGFuIGlucHV0L2J1dHRvbi9ldGMgb3IgdGhlIGlvbi1mb2N1cy10cmFwXG4gICAgICAgKiBlbGVtZW50LiBUaGUgZm9jdXMgdHJhcCBlbGVtZW50IGlzIHVzZWQgdG8gcHJldmVudFxuICAgICAgICogdGhlIGtleWJvYXJkIGZvY3VzIGZyb20gbGVhdmluZyB0aGUgb3ZlcmxheSB3aGVuXG4gICAgICAgKiB1c2luZyBUYWIgb3Igc2NyZWVuIGFzc2lzdGFudHMuXG4gICAgICAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBkbyBub3Qgd2FudCB0byBmb2N1cyB0aGUgdHJhcHMsIHNvIGdldCB0aGUgb3ZlcmxheVxuICAgICAgICogd3JhcHBlciBlbGVtZW50IGFzIHRoZSB0cmFwcyBsaXZlIG91dHNpZGUgb2YgdGhlIHdyYXBwZXIuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG92ZXJsYXlSb290ID0gZ2V0RWxlbWVudFJvb3QobGFzdE92ZXJsYXkpO1xuICAgICAgaWYgKCFvdmVybGF5Um9vdC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG92ZXJsYXlXcmFwcGVyID0gb3ZlcmxheVJvb3QucXVlcnlTZWxlY3RvcignLmlvbi1vdmVybGF5LXdyYXBwZXInKTtcbiAgICAgIGlmICghb3ZlcmxheVdyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgdGFyZ2V0IGlzIGluc2lkZSB0aGUgd3JhcHBlciwgbGV0IHRoZSBicm93c2VyXG4gICAgICAgKiBmb2N1cyBhcyBub3JtYWwgYW5kIGtlZXAgYSBsb2cgb2YgdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50LlxuICAgICAgICogQWRkaXRpb25hbGx5LCBpZiB0aGUgYmFja2Ryb3Agd2FzIHRhcHBlZCB3ZSBzaG91bGQgbm90XG4gICAgICAgKiBtb3ZlIGZvY3VzIGJhY2sgaW5zaWRlIHRoZSB3cmFwcGVyIGFzIHRoYXQgY291bGQgY2F1c2VcbiAgICAgICAqIGFuIGludGVyYWN0aXZlIGVsZW1lbnRzIGZvY3VzIHN0YXRlIHRvIGFjdGl2YXRlLlxuICAgICAgICovXG4gICAgICBpZiAob3ZlcmxheVdyYXBwZXIuY29udGFpbnModGFyZ2V0KSB8fCB0YXJnZXQgPT09IG92ZXJsYXlSb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKSB7XG4gICAgICAgIGxhc3RPdmVybGF5Lmxhc3RGb2N1cyA9IHRhcmdldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdGhlcndpc2UsIHdlIG11c3QgaGF2ZSBmb2N1c2VkIG9uZSBvZiB0aGUgZm9jdXMgdHJhcHMuXG4gICAgICAgICAqIFdlIG5lZWQgdG8gd3JhcCB0aGUgZm9jdXMgdG8gZWl0aGVyIHRoZSBmaXJzdCBlbGVtZW50XG4gICAgICAgICAqIG9yIHRoZSBsYXN0IGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogT25jZSB3ZSBjYWxsIGBmb2N1c0ZpcnN0RGVzY2VuZGFudGAgYW5kIGZvY3VzIHRoZSBmaXJzdFxuICAgICAgICAgKiBkZXNjZW5kYW50LCBhbm90aGVyIGZvY3VzIGV2ZW50IHdpbGwgZmlyZSB3aGljaCB3aWxsXG4gICAgICAgICAqIGNhdXNlIGBsYXN0T3ZlcmxheS5sYXN0Rm9jdXNgIHRvIGJlIHVwZGF0ZWQgYmVmb3JlXG4gICAgICAgICAqIHdlIGNhbiBydW4gdGhlIGNvZGUgYWZ0ZXIgdGhhdC4gV2Ugd2lsbCBjYWNoZSB0aGUgdmFsdWVcbiAgICAgICAgICogaGVyZSB0byBhdm9pZCB0aGF0LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbGFzdEZvY3VzID0gbGFzdE92ZXJsYXkubGFzdEZvY3VzO1xuICAgICAgICAvLyBGb2N1cyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgb3ZlcmxheSB3cmFwcGVyXG4gICAgICAgIGZvY3VzRmlyc3REZXNjZW5kYW50KG92ZXJsYXlXcmFwcGVyLCBsYXN0T3ZlcmxheSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgY2FjaGVkIGxhc3QgZm9jdXNlZCBlbGVtZW50IGlzIHRoZVxuICAgICAgICAgKiBzYW1lIGFzIHRoZSBhY3RpdmUgZWxlbWVudCwgdGhlbiB3ZSBuZWVkXG4gICAgICAgICAqIHRvIHdyYXAgZm9jdXMgdG8gdGhlIGxhc3QgZGVzY2VuZGFudC4gVGhpcyBoYXBwZW5zXG4gICAgICAgICAqIHdoZW4gdGhlIGZpcnN0IGRlc2NlbmRhbnQgaXMgZm9jdXNlZCwgYW5kIHRoZSB1c2VyXG4gICAgICAgICAqIHByZXNzZXMgU2hpZnQgKyBUYWIuIFRoZSBwcmV2aW91cyBsaW5lIHdpbGwgZm9jdXNcbiAgICAgICAgICogdGhlIHNhbWUgZGVzY2VuZGFudCBhZ2FpbiAodGhlIGZpcnN0IG9uZSksIGNhdXNpbmdcbiAgICAgICAgICogbGFzdCBmb2N1cyB0byBlcXVhbCB0aGUgYWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAobGFzdEZvY3VzID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGZvY3VzTGFzdERlc2NlbmRhbnQob3ZlcmxheVdyYXBwZXIsIGxhc3RPdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0T3ZlcmxheS5sYXN0Rm9jdXMgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHRyYXBTaGFkb3dGb2N1cyA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdGFyZ2V0IGlzIGluc2lkZSB0aGUgd3JhcHBlciwgbGV0IHRoZSBicm93c2VyXG4gICAgICogZm9jdXMgYXMgbm9ybWFsIGFuZCBrZWVwIGEgbG9nIG9mIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZiAobGFzdE92ZXJsYXkuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgbGFzdE92ZXJsYXkubGFzdEZvY3VzID0gdGFyZ2V0O1xuICAgICAgLyoqXG4gICAgICAgKiBUb2FzdHMgY2FuIGJlIHByZXNlbnRlZCBmcm9tIGFuIG92ZXJsYXkuXG4gICAgICAgKiBIb3dldmVyLCBmb2N1cyBzaG91bGQgc3RpbGwgYmUgcmV0dXJuZWQgdG9cbiAgICAgICAqIHRoZSBvdmVybGF5IHdoZW4gY2xpY2tpbmcgYSB0b2FzdC4gTm9ybWFsbHksXG4gICAgICAgKiBmb2N1cyB3b3VsZCBiZSByZXR1cm5lZCB0byB0aGUgbGFzdCBmb2N1c2FibGVcbiAgICAgICAqIGRlc2NlbmRhbnQgaW4gdGhlIG92ZXJsYXkgd2hpY2ggbWF5IG5vdCBhbHdheXMgYmVcbiAgICAgICAqIHRoZSBidXR0b24gdGhhdCB0aGUgdG9hc3Qgd2FzIHByZXNlbnRlZCBmcm9tLiBJbiB0aGlzIGNhc2UsXG4gICAgICAgKiB0aGUgZm9jdXMgbWF5IGJlIHJldHVybmVkIHRvIGFuIHVuZXhwZWN0ZWQgZWxlbWVudC5cbiAgICAgICAqIFRvIGFjY291bnQgZm9yIHRoaXMsIHdlIG1ha2Ugc3VyZSB0byByZXR1cm4gZm9jdXMgdG8gdGhlXG4gICAgICAgKiBsYXN0IGZvY3VzZWQgZWxlbWVudCBpbiB0aGUgb3ZlcmxheSBpZiBmb2N1cyBpc1xuICAgICAgICogbW92ZWQgdG8gdGhlIHRvYXN0LlxuICAgICAgICovXG4gICAgfSBlbHNlIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lPTi1UT0FTVCcpIHtcbiAgICAgIGZvY3VzRWxlbWVudEluT3ZlcmxheShsYXN0T3ZlcmxheS5sYXN0Rm9jdXMsIGxhc3RPdmVybGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBPdGhlcndpc2UsIHdlIGFyZSBhYm91dCB0byBoYXZlIGZvY3VzXG4gICAgICAgKiBnbyBvdXQgb2YgdGhlIG92ZXJsYXkuIFdlIG5lZWQgdG8gd3JhcFxuICAgICAgICogdGhlIGZvY3VzIHRvIGVpdGhlciB0aGUgZmlyc3QgZWxlbWVudFxuICAgICAgICogb3IgdGhlIGxhc3QgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiBPbmNlIHdlIGNhbGwgYGZvY3VzRmlyc3REZXNjZW5kYW50YCBhbmQgZm9jdXMgdGhlIGZpcnN0XG4gICAgICAgKiBkZXNjZW5kYW50LCBhbm90aGVyIGZvY3VzIGV2ZW50IHdpbGwgZmlyZSB3aGljaCB3aWxsXG4gICAgICAgKiBjYXVzZSBgbGFzdE92ZXJsYXkubGFzdEZvY3VzYCB0byBiZSB1cGRhdGVkIGJlZm9yZVxuICAgICAgICogd2UgY2FuIHJ1biB0aGUgY29kZSBhZnRlciB0aGF0LiBXZSB3aWxsIGNhY2hlIHRoZSB2YWx1ZVxuICAgICAgICogaGVyZSB0byBhdm9pZCB0aGF0LlxuICAgICAgICovXG4gICAgICBjb25zdCBsYXN0Rm9jdXMgPSBsYXN0T3ZlcmxheS5sYXN0Rm9jdXM7XG4gICAgICAvLyBGb2N1cyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgb3ZlcmxheSB3cmFwcGVyXG4gICAgICBmb2N1c0ZpcnN0RGVzY2VuZGFudChsYXN0T3ZlcmxheSk7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjYWNoZWQgbGFzdCBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlXG4gICAgICAgKiBzYW1lIGFzIHRoZSBhY3RpdmUgZWxlbWVudCwgdGhlbiB3ZSBuZWVkXG4gICAgICAgKiB0byB3cmFwIGZvY3VzIHRvIHRoZSBsYXN0IGRlc2NlbmRhbnQuIFRoaXMgaGFwcGVuc1xuICAgICAgICogd2hlbiB0aGUgZmlyc3QgZGVzY2VuZGFudCBpcyBmb2N1c2VkLCBhbmQgdGhlIHVzZXJcbiAgICAgICAqIHByZXNzZXMgU2hpZnQgKyBUYWIuIFRoZSBwcmV2aW91cyBsaW5lIHdpbGwgZm9jdXNcbiAgICAgICAqIHRoZSBzYW1lIGRlc2NlbmRhbnQgYWdhaW4gKHRoZSBmaXJzdCBvbmUpLCBjYXVzaW5nXG4gICAgICAgKiBsYXN0IGZvY3VzIHRvIGVxdWFsIHRoZSBhY3RpdmUgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgaWYgKGxhc3RGb2N1cyA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZm9jdXNMYXN0RGVzY2VuZGFudChsYXN0T3ZlcmxheSk7XG4gICAgICB9XG4gICAgICBsYXN0T3ZlcmxheS5sYXN0Rm9jdXMgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gIH07XG4gIGlmIChsYXN0T3ZlcmxheS5zaGFkb3dSb290KSB7XG4gICAgdHJhcFNoYWRvd0ZvY3VzKCk7XG4gIH0gZWxzZSB7XG4gICAgdHJhcFNjb3BlZEZvY3VzKCk7XG4gIH1cbn07XG5jb25zdCBjb25uZWN0TGlzdGVuZXJzID0gZG9jID0+IHtcbiAgaWYgKGxhc3RPdmVybGF5SW5kZXggPT09IDApIHtcbiAgICBsYXN0T3ZlcmxheUluZGV4ID0gMTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBldiA9PiB7XG4gICAgICB0cmFwS2V5Ym9hcmRGb2N1cyhldiwgZG9jKTtcbiAgICB9LCB0cnVlKTtcbiAgICAvLyBoYW5kbGUgYmFjay1idXR0b24gY2xpY2tcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uQmFja0J1dHRvbicsIGV2ID0+IHtcbiAgICAgIGNvbnN0IGxhc3RPdmVybGF5ID0gZ2V0UHJlc2VudGVkT3ZlcmxheShkb2MpO1xuICAgICAgaWYgKGxhc3RPdmVybGF5ID09PSBudWxsIHx8IGxhc3RPdmVybGF5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0T3ZlcmxheS5iYWNrZHJvcERpc21pc3MpIHtcbiAgICAgICAgZXYuZGV0YWlsLnJlZ2lzdGVyKE9WRVJMQVlfQkFDS19CVVRUT05fUFJJT1JJVFksICgpID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBEbyBub3QgcmV0dXJuIHRoaXMgcHJvbWlzZSBvdGhlcndpc2VcbiAgICAgICAgICAgKiB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdXRpbGl0eSB3aWxsXG4gICAgICAgICAgICogYmUgYmxvY2tlZCB1bnRpbCB0aGUgb3ZlcmxheSBkaXNtaXNzZXMuXG4gICAgICAgICAgICogVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGEgbW9kYWwgd2l0aCBjYW5EaXNtaXNzLlxuICAgICAgICAgICAqIElmIHRoZSBhcHBsaWNhdGlvbiBwcmVzZW50cyBhIGNvbmZpcm1hdGlvbiBhbGVydFxuICAgICAgICAgICAqIGluIHRoZSBcImNhbkRpc21pc3NcIiBjYWxsYmFjaywgdGhlbiBpdCB3aWxsIGJlIGltcG9zc2libGVcbiAgICAgICAgICAgKiB0byB1c2UgdGhlIGhhcmR3YXJlIGJhY2sgYnV0dG9uIHRvIGRpc21pc3MgdGhlIGFsZXJ0XG4gICAgICAgICAgICogZGlhbG9nIGJlY2F1c2UgdGhlIGhhcmR3YXJlIGJhY2sgYnV0dG9uIHV0aWxpdHlcbiAgICAgICAgICAgKiBpcyBibG9ja2VkIG9uIHdhaXRpbmcgZm9yIHRoZSBtb2RhbCB0byBkaXNtaXNzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxhc3RPdmVybGF5LmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSBFU0MgdG8gY2xvc2Ugb3ZlcmxheS5cbiAgICAgKiBDbG9zZVdhdGNoZXIgYWxzbyBoYW5kbGVzIHByZXNzaW5nIHRoZSBFc2NcbiAgICAgKiBrZXksIHNvIGlmIGEgYnJvd3NlciBzdXBwb3J0cyBDbG9zZVdhdGNoZXIgdGhlblxuICAgICAqIHRoaXMgYmVoYXZpb3Igd2lsbCBiZSBoYW5kbGVkIHZpYSB0aGUgaW9uQmFja0J1dHRvblxuICAgICAqIGV2ZW50LlxuICAgICAqL1xuICAgIGlmICghc2hvdWxkVXNlQ2xvc2VXYXRjaGVyKCkpIHtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIGNvbnN0IGxhc3RPdmVybGF5ID0gZ2V0UHJlc2VudGVkT3ZlcmxheShkb2MpO1xuICAgICAgICAgIGlmIChsYXN0T3ZlcmxheSA9PT0gbnVsbCB8fCBsYXN0T3ZlcmxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdE92ZXJsYXkuYmFja2Ryb3BEaXNtaXNzKSB7XG4gICAgICAgICAgICBsYXN0T3ZlcmxheS5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgZGlzbWlzc092ZXJsYXkgPSAoZG9jLCBkYXRhLCByb2xlLCBvdmVybGF5VGFnLCBpZCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZ2V0UHJlc2VudGVkT3ZlcmxheShkb2MsIG92ZXJsYXlUYWcsIGlkKTtcbiAgaWYgKCFvdmVybGF5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdvdmVybGF5IGRvZXMgbm90IGV4aXN0Jyk7XG4gIH1cbiAgcmV0dXJuIG92ZXJsYXkuZGlzbWlzcyhkYXRhLCByb2xlKTtcbn07XG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCBvdmVybGF5cyBpbiB0aGUgRE9NIGV2ZW4gaWYgdGhleSBhcmUgbm90IHByZXNlbnRlZC5cbiAqL1xuY29uc3QgZ2V0T3ZlcmxheXMgPSAoZG9jLCBzZWxlY3RvcikgPT4ge1xuICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHNlbGVjdG9yID0gJ2lvbi1hbGVydCxpb24tYWN0aW9uLXNoZWV0LGlvbi1sb2FkaW5nLGlvbi1tb2RhbCxpb24tcGlja2VyLWxlZ2FjeSxpb24tcG9wb3Zlcixpb24tdG9hc3QnO1xuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKGMgPT4gYy5vdmVybGF5SW5kZXggPiAwKTtcbn07XG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCBwcmVzZW50ZWQgb3ZlcmxheXMuXG4gKiBJbmxpbmUgb3ZlcmxheXMgY2FuIGV4aXN0IGluIHRoZSBET00gYnV0IG5vdCBiZSBwcmVzZW50ZWQsXG4gKiBzbyB0aGVyZSBhcmUgdGltZXMgd2hlbiB3ZSB3YW50IHRvIGV4Y2x1ZGUgdGhvc2UuXG4gKiBAcGFyYW0gZG9jIFRoZSBkb2N1bWVudCB0byBmaW5kIHRoZSBlbGVtZW50IHdpdGhpbi5cbiAqIEBwYXJhbSBvdmVybGF5VGFnIFRoZSBzZWxlY3RvciBmb3IgdGhlIG92ZXJsYXksIGRlZmF1bHRzIHRvIElvbmljIG92ZXJsYXkgY29tcG9uZW50cy5cbiAqL1xuY29uc3QgZ2V0UHJlc2VudGVkT3ZlcmxheXMgPSAoZG9jLCBvdmVybGF5VGFnKSA9PiB7XG4gIHJldHVybiBnZXRPdmVybGF5cyhkb2MsIG92ZXJsYXlUYWcpLmZpbHRlcihvID0+ICFpc092ZXJsYXlIaWRkZW4obykpO1xufTtcbi8qKlxuICogUmV0dXJucyBhIHByZXNlbnRlZCBvdmVybGF5IGVsZW1lbnQuXG4gKiBAcGFyYW0gZG9jIFRoZSBkb2N1bWVudCB0byBmaW5kIHRoZSBlbGVtZW50IHdpdGhpbi5cbiAqIEBwYXJhbSBvdmVybGF5VGFnIFRoZSBzZWxlY3RvciBmb3IgdGhlIG92ZXJsYXksIGRlZmF1bHRzIHRvIElvbmljIG92ZXJsYXkgY29tcG9uZW50cy5cbiAqIEBwYXJhbSBpZCBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBvdmVybGF5IGluc3RhbmNlLlxuICogQHJldHVybnMgVGhlIG92ZXJsYXkgZWxlbWVudCBvciBgdW5kZWZpbmVkYCBpZiBubyBvdmVybGF5IGVsZW1lbnQgaXMgZm91bmQuXG4gKi9cbmNvbnN0IGdldFByZXNlbnRlZE92ZXJsYXkgPSAoZG9jLCBvdmVybGF5VGFnLCBpZCkgPT4ge1xuICBjb25zdCBvdmVybGF5cyA9IGdldFByZXNlbnRlZE92ZXJsYXlzKGRvYywgb3ZlcmxheVRhZyk7XG4gIHJldHVybiBpZCA9PT0gdW5kZWZpbmVkID8gb3ZlcmxheXNbb3ZlcmxheXMubGVuZ3RoIC0gMV0gOiBvdmVybGF5cy5maW5kKG8gPT4gby5pZCA9PT0gaWQpO1xufTtcbi8qKlxuICogV2hlbiBhbiBvdmVybGF5IGlzIHByZXNlbnRlZCwgdGhlIG1haW5cbiAqIGZvY3VzIGlzIHRoZSBvdmVybGF5IG5vdCB0aGUgcGFnZSBjb250ZW50LlxuICogV2UgbmVlZCB0byByZW1vdmUgdGhlIHBhZ2UgY29udGVudCBmcm9tIHRoZVxuICogYWNjZXNzaWJpbGl0eSB0cmVlIG90aGVyd2lzZSB3aGVuXG4gKiB1c2VycyB1c2UgXCJyZWFkIHNjcmVlbiBmcm9tIHRvcFwiIGdlc3R1cmVzIHdpdGhcbiAqIFRhbGtCYWNrIGFuZCBWb2ljZU92ZXIsIHRoZSBzY3JlZW4gcmVhZGVyIHdpbGwgYmVnaW5cbiAqIHRvIHJlYWQgdGhlIGNvbnRlbnQgdW5kZXJuZWF0aCB0aGUgb3ZlcmxheS5cbiAqXG4gKiBXZSBuZWVkIGEgY29udGFpbmVyIHdoZXJlIGFsbCBwYWdlIGNvbXBvbmVudHNcbiAqIGV4aXN0IHRoYXQgaXMgc2VwYXJhdGUgZnJvbSB3aGVyZSB0aGUgb3ZlcmxheXNcbiAqIGFyZSBhZGRlZCBpbiB0aGUgRE9NLiBGb3IgbW9zdCBhcHBzLCB0aGlzIGVsZW1lbnRcbiAqIGlzIHRoZSB0b3AgbW9zdCBpb24tcm91dGVyLW91dGxldC4gSW4gdGhlIGV2ZW50XG4gKiB0aGF0IGRldnMgYXJlIG5vdCB1c2luZyBhIHJvdXRlcixcbiAqIHRoZXkgd2lsbCBuZWVkIHRvIGFkZCB0aGUgXCJpb24tdmlldy1jb250YWluZXItcm9vdFwiXG4gKiBpZCB0byB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGVpciB2aWV3cy5cbiAqXG4gKiBUT0RPOiBJZiBGcmFtZXdvcmsgc3VwcG9ydHMgaGF2aW5nIG11bHRpcGxlIHRvcFxuICogbGV2ZWwgcm91dGVyIG91dGxldHMgd2Ugd291bGQgbmVlZCB0byB1cGRhdGUgdGhpcy5cbiAqIEV4YW1wbGU6IE9uZSBvdXRsZXQgZm9yIHNpZGUgbWVudSBhbmQgb25lIG91dGxldFxuICogZm9yIG1haW4gY29udGVudC5cbiAqL1xuY29uc3Qgc2V0Um9vdEFyaWFIaWRkZW4gPSAoaGlkZGVuID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGdldEFwcFJvb3QoZG9jdW1lbnQpO1xuICBjb25zdCB2aWV3Q29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyLW91dGxldCwgaW9uLW5hdiwgI2lvbi12aWV3LWNvbnRhaW5lci1yb290Jyk7XG4gIGlmICghdmlld0NvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaGlkZGVuKSB7XG4gICAgdmlld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICB2aWV3Q29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgfVxufTtcbmNvbnN0IHByZXNlbnQgPSBhc3luYyAob3ZlcmxheSwgbmFtZSwgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIG9wdHMpID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgaWYgKG92ZXJsYXkucHJlc2VudGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBEdWUgdG8gYWNjZXNzaWJpbGl0eSBndWlkZWxpbmVzLCB0b2FzdHMgZG8gbm90IGhhdmVcbiAgICogZm9jdXMgdHJhcHMuXG4gICAqXG4gICAqIEFsbCBvdGhlciBvdmVybGF5cyBzaG91bGQgaGF2ZSBmb2N1cyB0cmFwcyB0byBwcmV2ZW50XG4gICAqIHRoZSBrZXlib2FyZCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBpZiAob3ZlcmxheS5lbC50YWdOYW1lICE9PSAnSU9OLVRPQVNUJykge1xuICAgIHNldFJvb3RBcmlhSGlkZGVuKHRydWUpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICB9XG4gIGhpZGVVbmRlcmx5aW5nT3ZlcmxheXNGcm9tU2NyZWVuUmVhZGVycyhvdmVybGF5LmVsKTtcbiAgaGlkZUFuaW1hdGluZ092ZXJsYXlGcm9tU2NyZWVuUmVhZGVycyhvdmVybGF5LmVsKTtcbiAgb3ZlcmxheS5wcmVzZW50ZWQgPSB0cnVlO1xuICBvdmVybGF5LndpbGxQcmVzZW50LmVtaXQoKTtcbiAgKF9hID0gb3ZlcmxheS53aWxsUHJlc2VudFNob3J0aGFuZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVtaXQoKTtcbiAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUob3ZlcmxheSk7XG4gIC8vIGdldCB0aGUgdXNlcidzIGFuaW1hdGlvbiBmbiBpZiBvbmUgd2FzIHByb3ZpZGVkXG4gIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBvdmVybGF5LmVudGVyQW5pbWF0aW9uID8gb3ZlcmxheS5lbnRlckFuaW1hdGlvbiA6IGNvbmZpZy5nZXQobmFtZSwgbW9kZSA9PT0gJ2lvcycgPyBpb3NFbnRlckFuaW1hdGlvbiA6IG1kRW50ZXJBbmltYXRpb24pO1xuICBjb25zdCBjb21wbGV0ZWQgPSBhd2FpdCBvdmVybGF5QW5pbWF0aW9uKG92ZXJsYXksIGFuaW1hdGlvbkJ1aWxkZXIsIG92ZXJsYXkuZWwsIG9wdHMpO1xuICBpZiAoY29tcGxldGVkKSB7XG4gICAgb3ZlcmxheS5kaWRQcmVzZW50LmVtaXQoKTtcbiAgICAoX2IgPSBvdmVybGF5LmRpZFByZXNlbnRTaG9ydGhhbmQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5lbWl0KCk7XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gYW4gb3ZlcmxheSB0aGF0IHN0ZWFscyBmb2N1c1xuICAgKiBpcyBkaXNtaXNzZWQsIGZvY3VzIHNob3VsZCBiZSByZXR1cm5lZFxuICAgKiB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkXG4gICAqIHByaW9yIHRvIHRoZSBvdmVybGF5IG9wZW5pbmcuIFRvYXN0XG4gICAqIGRvZXMgbm90IHN0ZWFsIGZvY3VzIGFuZCBpcyBleGNsdWRlZFxuICAgKiBmcm9tIHJldHVybmluZyBmb2N1cyBhcyBhIHJlc3VsdC5cbiAgICovXG4gIGlmIChvdmVybGF5LmVsLnRhZ05hbWUgIT09ICdJT04tVE9BU1QnKSB7XG4gICAgcmVzdG9yZUVsZW1lbnRGb2N1cyhvdmVybGF5LmVsKTtcbiAgfVxuICAvKipcbiAgICogSWYgdGhlIGZvY3VzZWQgZWxlbWVudCBpcyBhbHJlYWR5XG4gICAqIGluc2lkZSB0aGUgb3ZlcmxheSBjb21wb25lbnQgdGhlblxuICAgKiBmb2N1cyBzaG91bGQgbm90IGJlIG1vdmVkIGZyb20gdGhhdFxuICAgKiB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAqL1xuICBpZiAob3ZlcmxheS5rZXlib2FyZENsb3NlICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBudWxsIHx8ICFvdmVybGF5LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSkge1xuICAgIG92ZXJsYXkuZWwuZm9jdXMoKTtcbiAgfVxuICAvKipcbiAgICogSWYgdGhpcyBvdmVybGF5IHdhcyBwcmV2aW91c2x5IGRpc21pc3NlZCB3aXRob3V0IGJlaW5nXG4gICAqIHRoZSB0b3Btb3N0IG9uZSAoc3VjaCBhcyBieSBtYW51YWxseSBjYWxsaW5nIGRpc21pc3MoKSksXG4gICAqIGl0IHdvdWxkIHN0aWxsIGhhdmUgYXJpYS1oaWRkZW4gb24gYmVpbmcgcHJlc2VudGVkIGFnYWluLlxuICAgKiBSZW1vdmluZyBpdCBoZXJlIGVuc3VyZXMgdGhlIG92ZXJsYXkgaXMgdmlzaWJsZSB0byBzY3JlZW5cbiAgICogcmVhZGVycy5cbiAgICpcbiAgICogSWYgdGhpcyBvdmVybGF5IHdhcyBiZWluZyBwcmVzZW50ZWQsIHRoZW4gaXQgd2FzIGhpZGRlblxuICAgKiBmcm9tIHNjcmVlbiByZWFkZXJzIGR1cmluZyB0aGUgYW5pbWF0aW9uLiBOb3cgdGhhdCB0aGVcbiAgICogYW5pbWF0aW9uIGlzIGNvbXBsZXRlLCB3ZSBjYW4gcmV2ZWFsIHRoZSBvdmVybGF5IHRvXG4gICAqIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgb3ZlcmxheS5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59O1xuLyoqXG4gKiBXaGVuIGFuIG92ZXJsYXkgY29tcG9uZW50IGlzIGRpc21pc3NlZCxcbiAqIGZvY3VzIHNob3VsZCBiZSByZXR1cm5lZCB0byB0aGUgZWxlbWVudFxuICogdGhhdCBwcmVzZW50ZWQgdGhlIG92ZXJsYXkuIE90aGVyd2lzZVxuICogZm9jdXMgd2lsbCBiZSBzZXQgb24gdGhlIGJvZHkgd2hpY2hcbiAqIG1lYW5zIHRoYXQgcGVvcGxlIHVzaW5nIHNjcmVlbiByZWFkZXJzXG4gKiBvciB0YWJiaW5nIHdpbGwgbmVlZCB0byByZS1uYXZpZ2F0ZVxuICogdG8gd2hlcmUgdGhleSB3ZXJlIGJlZm9yZSB0aGV5XG4gKiBvcGVuZWQgdGhlIG92ZXJsYXkuXG4gKi9cbmNvbnN0IHJlc3RvcmVFbGVtZW50Rm9jdXMgPSBhc3luYyBvdmVybGF5RWwgPT4ge1xuICBsZXQgcHJldmlvdXNFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgaWYgKCFwcmV2aW91c0VsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2hhZG93Um9vdCA9IHByZXZpb3VzRWxlbWVudCA9PT0gbnVsbCB8fCBwcmV2aW91c0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXZpb3VzRWxlbWVudC5zaGFkb3dSb290O1xuICBpZiAoc2hhZG93Um9vdCkge1xuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpbm5lciBmb2N1c2FibGUgZWxlbWVudHMsIGp1c3QgZm9jdXMgdGhlIGhvc3QgZWxlbWVudC5cbiAgICBwcmV2aW91c0VsZW1lbnQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoZm9jdXNhYmxlUXVlcnlTdHJpbmcpIHx8IHByZXZpb3VzRWxlbWVudDtcbiAgfVxuICBhd2FpdCBvdmVybGF5RWwub25EaWREaXNtaXNzKCk7XG4gIC8qKlxuICAgKiBBZnRlciBvbkRpZERpc21pc3MsIHRoZSBvdmVybGF5IGxvc2VzIGZvY3VzXG4gICAqIGJlY2F1c2UgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAgKlxuICAgKiA+IEFuIGVsZW1lbnQgd2lsbCBhbHNvIGxvc2UgZm9jdXMgWy4uLl1cbiAgICogPiBpZiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50KVxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9ibHVyX2V2ZW50XG4gICAqXG4gICAqIEFkZGl0aW9uYWxseSwgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIHJldHVybnM6XG4gICAqXG4gICAqID4gVGhlIEVsZW1lbnQgd2hpY2ggY3VycmVudGx5IGhhcyBmb2N1cyxcbiAgICogPiBgPGJvZHk+YCBvciBudWxsIGlmIHRoZXJlIGlzXG4gICAqID4gbm8gZm9jdXNlZCBlbGVtZW50LlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudCN2YWx1ZVxuICAgKlxuICAgKiBIb3dldmVyLCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBmb2N1c2VkXG4gICAqIGFuIGVsZW1lbnQgc29tZXRpbWUgYmV0d2VlbiBvbldpbGxEaXNtaXNzXG4gICAqIGFuZCBvbkRpZERpc21pc3MgKGZvciBleGFtcGxlLCBmb2N1c2luZyBhXG4gICAqIHRleHQgYm94IGFmdGVyIHRhcHBpbmcgYSBidXR0b24gaW4gYW5cbiAgICogYWN0aW9uIHNoZWV0KSB0aGVuIGRvbid0IHJlc3RvcmUgZm9jdXMgdG9cbiAgICogcHJldmlvdXMgZWxlbWVudFxuICAgKi9cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgIHByZXZpb3VzRWxlbWVudC5mb2N1cygpO1xuICB9XG59O1xuY29uc3QgZGlzbWlzcyA9IGFzeW5jIChvdmVybGF5LCBkYXRhLCByb2xlLCBuYW1lLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbiwgb3B0cykgPT4ge1xuICB2YXIgX2EsIF9iO1xuICBpZiAoIW92ZXJsYXkucHJlc2VudGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHByZXNlbnRlZE92ZXJsYXlzID0gZG9jICE9PSB1bmRlZmluZWQgPyBnZXRQcmVzZW50ZWRPdmVybGF5cyhkb2MpIDogW107XG4gIC8qKlxuICAgKiBGb3IgYWNjZXNzaWJpbGl0eSwgdG9hc3RzIGxhY2sgZm9jdXMgdHJhcHMgYW5kIGRvbuKAmXQgcmVjZWl2ZVxuICAgKiBgYXJpYS1oaWRkZW5gIG9uIHRoZSByb290IGVsZW1lbnQgd2hlbiBwcmVzZW50ZWQuXG4gICAqXG4gICAqIEFsbCBvdGhlciBvdmVybGF5cyB1c2UgZm9jdXMgdHJhcHMgdG8ga2VlcCBrZXlib2FyZCBmb2N1c1xuICAgKiB3aXRoaW4gdGhlIG92ZXJsYXksIHNldHRpbmcgYGFyaWEtaGlkZGVuYCBvbiB0aGUgcm9vdCBlbGVtZW50XG4gICAqIHRvIGVuaGFuY2UgYWNjZXNzaWJpbGl0eS5cbiAgICpcbiAgICogVGhlcmVmb3JlLCB3ZSBtdXN0IHJlbW92ZSBgYXJpYS1oaWRkZW5gIGZyb20gdGhlIHJvb3QgZWxlbWVudFxuICAgKiB3aGVuIHRoZSBsYXN0IG5vbi10b2FzdCBvdmVybGF5IGlzIGRpc21pc3NlZC5cbiAgICovXG4gIGNvbnN0IG92ZXJsYXlzTm90VG9hc3QgPSBwcmVzZW50ZWRPdmVybGF5cy5maWx0ZXIobyA9PiBvLnRhZ05hbWUgIT09ICdJT04tVE9BU1QnKTtcbiAgY29uc3QgbGFzdE92ZXJsYXlOb3RUb2FzdCA9IG92ZXJsYXlzTm90VG9hc3QubGVuZ3RoID09PSAxICYmIG92ZXJsYXlzTm90VG9hc3RbMF0uaWQgPT09IG92ZXJsYXkuZWwuaWQ7XG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIHRoZSBsYXN0IHZpc2libGUgb3ZlcmxheSB0aGF0IGlzIG5vdCBhIHRvYXN0XG4gICAqIHRoZW4gd2Ugd2FudCB0byByZS1hZGQgdGhlIHJvb3QgdG8gdGhlIGFjY2Vzc2liaWxpdHkgdHJlZS5cbiAgICovXG4gIGlmIChsYXN0T3ZlcmxheU5vdFRvYXN0KSB7XG4gICAgc2V0Um9vdEFyaWFIaWRkZW4oZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICB9XG4gIG92ZXJsYXkucHJlc2VudGVkID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgLyoqXG4gICAgICogVGhlcmUgaXMgbm8gbmVlZCB0byBzaG93IHRoZSBvdmVybGF5IHRvIHNjcmVlbiByZWFkZXJzIGR1cmluZ1xuICAgICAqIHRoZSBkaXNtaXNzIGFuaW1hdGlvbi4gVGhpcyBpcyBiZWNhdXNlIHRoZSBvdmVybGF5IHdpbGwgYmUgcmVtb3ZlZFxuICAgICAqIGZyb20gdGhlIERPTSBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIGhpZGVBbmltYXRpbmdPdmVybGF5RnJvbVNjcmVlblJlYWRlcnMob3ZlcmxheS5lbCk7XG4gICAgLy8gT3ZlcmxheSBjb250ZW50cyBzaG91bGQgbm90IGJlIGNsaWNrYWJsZSBkdXJpbmcgZGlzbWlzc1xuICAgIG92ZXJsYXkuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICBvdmVybGF5LndpbGxEaXNtaXNzLmVtaXQoe1xuICAgICAgZGF0YSxcbiAgICAgIHJvbGVcbiAgICB9KTtcbiAgICAoX2EgPSBvdmVybGF5LndpbGxEaXNtaXNzU2hvcnRoYW5kKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW1pdCh7XG4gICAgICBkYXRhLFxuICAgICAgcm9sZVxuICAgIH0pO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKG92ZXJsYXkpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBvdmVybGF5LmxlYXZlQW5pbWF0aW9uID8gb3ZlcmxheS5sZWF2ZUFuaW1hdGlvbiA6IGNvbmZpZy5nZXQobmFtZSwgbW9kZSA9PT0gJ2lvcycgPyBpb3NMZWF2ZUFuaW1hdGlvbiA6IG1kTGVhdmVBbmltYXRpb24pO1xuICAgIC8vIElmIGRpc21pc3NlZCB2aWEgZ2VzdHVyZSwgbm8gbmVlZCB0byBwbGF5IGxlYXZpbmcgYW5pbWF0aW9uIGFnYWluXG4gICAgaWYgKHJvbGUgIT09IEdFU1RVUkUpIHtcbiAgICAgIGF3YWl0IG92ZXJsYXlBbmltYXRpb24ob3ZlcmxheSwgYW5pbWF0aW9uQnVpbGRlciwgb3ZlcmxheS5lbCwgb3B0cyk7XG4gICAgfVxuICAgIG92ZXJsYXkuZGlkRGlzbWlzcy5lbWl0KHtcbiAgICAgIGRhdGEsXG4gICAgICByb2xlXG4gICAgfSk7XG4gICAgKF9iID0gb3ZlcmxheS5kaWREaXNtaXNzU2hvcnRoYW5kKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZW1pdCh7XG4gICAgICBkYXRhLFxuICAgICAgcm9sZVxuICAgIH0pO1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhbGwgYW5pbWF0aW9ucyBjdXJyZW50bHkgYXNzaWduZWQgdG8gdGhpcyBvdmVybGF5XG4gICAgLy8gVGhlbiB0ZWFyIHRoZW0gZG93biB0byByZXR1cm4gdGhlIG92ZXJsYXkgdG8gaXRzIGluaXRpYWwgdmlzdWFsIHN0YXRlXG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IGFjdGl2ZUFuaW1hdGlvbnMuZ2V0KG92ZXJsYXkpIHx8IFtdO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChhbmkgPT4gYW5pLmRlc3Ryb3koKSk7XG4gICAgYWN0aXZlQW5pbWF0aW9ucy5kZWxldGUob3ZlcmxheSk7XG4gICAgLyoqXG4gICAgICogTWFrZSBvdmVybGF5IGhpZGRlbiBhZ2FpbiBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZC5cbiAgICAgKiBXZSBjYW4gc2FmZWx5IHJlbW92ZSBwb2ludGVyLWV2ZW50czogbm9uZSBhc1xuICAgICAqIG92ZXJsYXktaGlkZGVuIHdpbGwgc2V0IGRpc3BsYXk6IG5vbmUuXG4gICAgICovXG4gICAgb3ZlcmxheS5lbC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWhpZGRlbicpO1xuICAgIG92ZXJsYXkuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYW55IGZvY3VzIHRyYXBwaW5nIHJlZmVyZW5jZXNcbiAgICAgKiB3aGVuIHRoZSBvdmVybGF5IGlzIGRpc21pc3NlZC5cbiAgICAgKi9cbiAgICBpZiAob3ZlcmxheS5lbC5sYXN0Rm9jdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3ZlcmxheS5lbC5sYXN0Rm9jdXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbiAgb3ZlcmxheS5lbC5yZW1vdmUoKTtcbiAgcmV2ZWFsT3ZlcmxheXNUb1NjcmVlblJlYWRlcnMoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgZ2V0QXBwUm9vdCA9IGRvYyA9PiB7XG4gIHJldHVybiBkb2MucXVlcnlTZWxlY3RvcignaW9uLWFwcCcpIHx8IGRvYy5ib2R5O1xufTtcbmNvbnN0IG92ZXJsYXlBbmltYXRpb24gPSBhc3luYyAob3ZlcmxheSwgYW5pbWF0aW9uQnVpbGRlciwgYmFzZUVsLCBvcHRzKSA9PiB7XG4gIC8vIE1ha2Ugb3ZlcmxheSB2aXNpYmxlIGluIGNhc2UgaXQncyBoaWRkZW5cbiAgYmFzZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktaGlkZGVuJyk7XG4gIGNvbnN0IGFuaVJvb3QgPSBvdmVybGF5LmVsO1xuICBjb25zdCBhbmltYXRpb24gPSBhbmltYXRpb25CdWlsZGVyKGFuaVJvb3QsIG9wdHMpO1xuICBpZiAoIW92ZXJsYXkuYW5pbWF0ZWQgfHwgIWNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpKSB7XG4gICAgYW5pbWF0aW9uLmR1cmF0aW9uKDApO1xuICB9XG4gIGlmIChvdmVybGF5LmtleWJvYXJkQ2xvc2UpIHtcbiAgICBhbmltYXRpb24uYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGJhc2VFbC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gbnVsbCB8fCBhY3RpdmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVFbGVtZW50Lm1hdGNoZXMoJ2lucHV0LGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhJykpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgYWN0aXZlQW5pID0gYWN0aXZlQW5pbWF0aW9ucy5nZXQob3ZlcmxheSkgfHwgW107XG4gIGFjdGl2ZUFuaW1hdGlvbnMuc2V0KG92ZXJsYXksIFsuLi5hY3RpdmVBbmksIGFuaW1hdGlvbl0pO1xuICBhd2FpdCBhbmltYXRpb24ucGxheSgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBldmVudE1ldGhvZCA9IChlbGVtZW50LCBldmVudE5hbWUpID0+IHtcbiAgbGV0IHJlc29sdmU7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyID0+IHJlc29sdmUgPSByKTtcbiAgb25jZUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgIHJlc29sdmUoZXZlbnQuZGV0YWlsKTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufTtcbmNvbnN0IG9uY2VFdmVudCA9IChlbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGhhbmRsZXIgPSBldiA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIGNhbGxiYWNrKGV2KTtcbiAgfTtcbiAgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xufTtcbmNvbnN0IGlzQ2FuY2VsID0gcm9sZSA9PiB7XG4gIHJldHVybiByb2xlID09PSAnY2FuY2VsJyB8fCByb2xlID09PSBCQUNLRFJPUDtcbn07XG5jb25zdCBkZWZhdWx0R2F0ZSA9IGggPT4gaCgpO1xuLyoqXG4gKiBDYWxscyBhIGRldmVsb3BlciBwcm92aWRlZCBtZXRob2Qgd2hpbGUgYXZvaWRpbmdcbiAqIEFuZ3VsYXIgWm9uZXMuIFNpbmNlIHRoZSBoYW5kbGVyIGlzIHByb3ZpZGVkIGJ5XG4gKiB0aGUgZGV2ZWxvcGVyLCB3ZSBzaG91bGQgdGhyb3cgYW55IGVycm9yc1xuICogcmVjZWl2ZWQgc28gdGhhdCBkZXZlbG9wZXItcHJvdmlkZWQgYnVnXG4gKiB0cmFja2luZyBzb2Z0d2FyZSBjYW4gbG9nIGl0LlxuICovXG5jb25zdCBzYWZlQ2FsbCA9IChoYW5kbGVyLCBhcmcpID0+IHtcbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgam1wID0gY29uZmlnLmdldCgnX3pvbmVHYXRlJywgZGVmYXVsdEdhdGUpO1xuICAgIHJldHVybiBqbXAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIoYXJnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IEJBQ0tEUk9QID0gJ2JhY2tkcm9wJztcbmNvbnN0IEdFU1RVUkUgPSAnZ2VzdHVyZSc7XG5jb25zdCBPVkVSTEFZX0dFU1RVUkVfUFJJT1JJVFkgPSAzOTtcbi8qKlxuICogQ3JlYXRlcyBhIGRlbGVnYXRlIGNvbnRyb2xsZXIuXG4gKlxuICogUmVxdWlyZXMgdGhhdCB0aGUgY29tcG9uZW50IGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIGBlbDogSFRNTEVsZW1lbnRgXG4gKiAtIGBoYXNDb250cm9sbGVyOiBib29sZWFuYFxuICogLSBgZGVsZWdhdGU/OiBGcmFtZXdvcmtEZWxlZ2F0ZWBcbiAqXG4gKiBAcGFyYW0gcmVmIFRoZSBjb21wb25lbnQgY2xhc3MgaW5zdGFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlciA9IHJlZiA9PiB7XG4gIGxldCBpbmxpbmUgPSBmYWxzZTtcbiAgbGV0IHdvcmtpbmdEZWxlZ2F0ZTtcbiAgY29uc3QgY29yZURlbGVnYXRlID0gQ29yZURlbGVnYXRlKCk7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGFuIG92ZXJsYXkgaXMgYmVpbmcgdXNlZFxuICAgKiBpbmxpbmUgb3IgdmlhIGEgY29udHJvbGxlci9KUyBhbmQgcmV0dXJucyB0aGUgY29ycmVjdCBkZWxlZ2F0ZS5cbiAgICogQnkgZGVmYXVsdCwgc3Vic2VxdWVudCBjYWxscyB0byBnZXREZWxlZ2F0ZSB3aWxsIHVzZVxuICAgKiBhIGNhY2hlZCB2ZXJzaW9uIG9mIHRoZSBkZWxlZ2F0ZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGNhbGxpbmcgZGlzbWlzcyBhZnRlciBwcmVzZW50LFxuICAgKiBzbyB0aGF0IHRoZSBjb3JyZWN0IGRlbGVnYXRlIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gZm9yY2UgYHRydWVgIHRvIGZvcmNlIHRoZSBub24tY2FjaGVkIHZlcnNpb24gb2YgdGhlIGRlbGVnYXRlLlxuICAgKiBAcmV0dXJucyBUaGUgZGVsZWdhdGUgdG8gdXNlIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgb3ZlcmxheSBpcyBpbmxpbmUuXG4gICAqL1xuICBjb25zdCBnZXREZWxlZ2F0ZSA9IChmb3JjZSA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHdvcmtpbmdEZWxlZ2F0ZSAmJiAhZm9yY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlbGVnYXRlOiB3b3JraW5nRGVsZWdhdGUsXG4gICAgICAgIGlubGluZVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBoYXNDb250cm9sbGVyLFxuICAgICAgZGVsZWdhdGVcbiAgICB9ID0gcmVmO1xuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIG92ZXJsYXkgaW5saW5lXG4gICAgICogd2UgcG90ZW50aWFsbHkgbmVlZCB0byB1c2UgdGhlIGNvcmVEZWxlZ2F0ZVxuICAgICAqIHNvIHRoYXQgdGhpcyB3b3JrcyBpbiB2YW5pbGxhIEpTIGFwcHMuXG4gICAgICogSWYgYSBkZXZlbG9wZXIgaGFzIHByZXNlbnRlZCB0aGlzIGNvbXBvbmVudFxuICAgICAqIHZpYSBhIGNvbnRyb2xsZXIsIHRoZW4gd2UgY2FuIGFzc3VtZVxuICAgICAqIHRoZSBjb21wb25lbnQgaXMgYWxyZWFkeSBpbiB0aGVcbiAgICAgKiBjb3JyZWN0IHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgICBpbmxpbmUgPSBwYXJlbnRFbCAhPT0gbnVsbCAmJiAhaGFzQ29udHJvbGxlcjtcbiAgICB3b3JraW5nRGVsZWdhdGUgPSBpbmxpbmUgPyBkZWxlZ2F0ZSB8fCBjb3JlRGVsZWdhdGUgOiBkZWxlZ2F0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5saW5lLFxuICAgICAgZGVsZWdhdGU6IHdvcmtpbmdEZWxlZ2F0ZVxuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBBdHRhY2hlcyBhIGNvbXBvbmVudCBpbiB0aGUgRE9NLiBUZWxlcG9ydHMgdGhlIGNvbXBvbmVudFxuICAgKiB0byB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gb3B0aW9uYWxseSBjb25zdHJ1Y3QgYW5kIGFwcGVuZCB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGF0dGFjaFZpZXdUb0RvbSA9IGFzeW5jIGNvbXBvbmVudCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGVsZWdhdGVcbiAgICB9ID0gZ2V0RGVsZWdhdGUodHJ1ZSk7XG4gICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgZGVsZWdhdGUuYXR0YWNoVmlld1RvRG9tKHJlZi5lbCwgY29tcG9uZW50KTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgaGFzQ29udHJvbGxlclxuICAgIH0gPSByZWY7XG4gICAgaWYgKGhhc0NvbnRyb2xsZXIgJiYgY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIC8qKlxuICAgKiBNb3ZlcyBhIGNvbXBvbmVudCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiBpbiB0aGUgRE9NLlxuICAgKi9cbiAgY29uc3QgcmVtb3ZlVmlld0Zyb21Eb20gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGVsZWdhdGVcbiAgICB9ID0gZ2V0RGVsZWdhdGUoKTtcbiAgICBpZiAoZGVsZWdhdGUgJiYgcmVmLmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKHJlZi5lbC5wYXJlbnRFbGVtZW50LCByZWYuZWwpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhdHRhY2hWaWV3VG9Eb20sXG4gICAgcmVtb3ZlVmlld0Zyb21Eb21cbiAgfTtcbn07XG4vKipcbiAqIENvbnN0cnVjdHMgYSB0cmlnZ2VyIGludGVyYWN0aW9uIGZvciBhbiBvdmVybGF5LlxuICogUHJlc2VudHMgYW4gb3ZlcmxheSB3aGVuIHRoZSB0cmlnZ2VyIGlzIGNsaWNrZWQuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGB0c1xuICogdHJpZ2dlckNvbnRyb2xsZXIgPSBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlcigpO1xuICogdHJpZ2dlckNvbnRyb2xsZXIuYWRkQ2xpY2tMaXN0ZW5lcihlbCwgdHJpZ2dlcik7XG4gKiBgYGBcbiAqL1xuY29uc3QgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGxldCBkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uO1xuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgdHJpZ2dlciBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgcmVtb3ZlQ2xpY2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBpZiAoZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbikge1xuICAgICAgZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbigpO1xuICAgICAgZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIHRyaWdnZXIgZWxlbWVudC5cbiAgICogUHJlc2VudHMgdGhlIG92ZXJsYXkgd2hlbiB0aGUgdHJpZ2dlciBpcyBjbGlja2VkLlxuICAgKiBAcGFyYW0gZWwgVGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICogQHBhcmFtIHRyaWdnZXIgVGhlIElEIG9mIHRoZSBlbGVtZW50IHRvIGFkZCBhIGNsaWNrIGxpc3RlbmVyIHRvLlxuICAgKi9cbiAgY29uc3QgYWRkQ2xpY2tMaXN0ZW5lciA9IChlbCwgdHJpZ2dlcikgPT4ge1xuICAgIHJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcbiAgICBjb25zdCB0cmlnZ2VyRWwgPSB0cmlnZ2VyICE9PSB1bmRlZmluZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0cmlnZ2VyKSA6IG51bGw7XG4gICAgaWYgKCF0cmlnZ2VyRWwpIHtcbiAgICAgIHByaW50SW9uV2FybmluZyhgQSB0cmlnZ2VyIGVsZW1lbnQgd2l0aCB0aGUgSUQgXCIke3RyaWdnZXJ9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLiBUaGUgdHJpZ2dlciBlbGVtZW50IG11c3QgYmUgaW4gdGhlIERPTSB3aGVuIHRoZSBcInRyaWdnZXJcIiBwcm9wZXJ0eSBpcyBzZXQgb24gYW4gb3ZlcmxheSBjb21wb25lbnQuYCwgZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25maWd1cmVUcmlnZ2VySW50ZXJhY3Rpb24gPSAodGFyZ2V0RWwsIG92ZXJsYXlFbCkgPT4ge1xuICAgICAgY29uc3Qgb3Blbk92ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIG92ZXJsYXlFbC5wcmVzZW50KCk7XG4gICAgICB9O1xuICAgICAgdGFyZ2V0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuT3ZlcmxheSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0YXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5KTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uID0gY29uZmlndXJlVHJpZ2dlckludGVyYWN0aW9uKHRyaWdnZXJFbCwgZWwpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGFkZENsaWNrTGlzdGVuZXIsXG4gICAgcmVtb3ZlQ2xpY2tMaXN0ZW5lclxuICB9O1xufTtcbi8qKlxuICogVGhlIG92ZXJsYXkgdGhhdCBpcyBiZWluZyBhbmltYXRlZCBhbHNvIG5lZWRzIHRvIGhpZGUgZnJvbSBzY3JlZW5cbiAqIHJlYWRlcnMgZHVyaW5nIGl0cyBhbmltYXRpb24uIFRoaXMgZW5zdXJlcyB0aGF0IGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXNcbiAqIGxpa2UgVGFsa0JhY2sgZG8gbm90IGFubm91bmNlIG9yIGludGVyYWN0IHdpdGggdGhlIGNvbnRlbnQgdW50aWwgdGhlXG4gKiBhbmltYXRpb24gaXMgY29tcGxldGUsIGF2b2lkaW5nIGNvbmZ1c2lvbiBmb3IgdXNlcnMuXG4gKlxuICogV2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQgb24gYW4gQW5kcm9pZCBkZXZpY2UsIFRhbGtCYWNrJ3MgZm9jdXMgcmluZ3NcbiAqIG1heSBhcHBlYXIgaW4gdGhlIHdyb25nIHBvc2l0aW9uIGR1ZSB0byB0aGUgdHJhbnNpdGlvbiAoc3BlY2lmaWNhbGx5XG4gKiBgdHJhbnNmb3JtYCBzdHlsZXMpLiBUaGlzIG9jY3VycyBiZWNhdXNlIHRoZSBmb2N1cyByaW5ncyBhcmUgaW5pdGlhbGx5XG4gKiBkaXNwbGF5ZWQgYXQgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBiZWZvcmUgdGhlIHRyYW5zaXRpb25cbiAqIGJlZ2lucy4gVGhpcyB3b3JrYXJvdW5kIGVuc3VyZXMgdGhlIGZvY3VzIHJpbmdzIGRvIG5vdCBhcHBlYXIgaW4gdGhlXG4gKiBpbmNvcnJlY3QgbG9jYXRpb24uXG4gKlxuICogSWYgdGhpcyBzb2x1dGlvbiBpcyBhcHBsaWVkIHRvIGlPUyBkZXZpY2VzLCB0aGVuIGl0IGxlYWRzIHRvIGEgYnVnIHdoZXJlXG4gKiB0aGUgb3ZlcmxheXMgY2Fubm90IGJlIGFjY2Vzc2VkIGJ5IHNjcmVlbiByZWFkZXJzLiBUaGlzIGlzIGR1ZSB0b1xuICogVm9pY2VPdmVyIG5vdCBiZWluZyBhYmxlIHRvIHVwZGF0ZSB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlIHdoZW4gdGhlXG4gKiBgYXJpYS1oaWRkZW5gIGlzIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIG92ZXJsYXkgLSBUaGUgb3ZlcmxheSB0aGF0IGlzIGJlaW5nIGFuaW1hdGVkLlxuICovXG5jb25zdCBoaWRlQW5pbWF0aW5nT3ZlcmxheUZyb21TY3JlZW5SZWFkZXJzID0gb3ZlcmxheSA9PiB7XG4gIGlmIChkb2MgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBpZiAoaXNQbGF0Zm9ybSgnYW5kcm9pZCcpKSB7XG4gICAgLyoqXG4gICAgICogT25jZSB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLCB0aGlzIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICogVGhpcyBpcyBkb25lIGF0IHRoZSBlbmQgb2YgdGhlIGBwcmVzZW50YCBtZXRob2QuXG4gICAgICovXG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfVxufTtcbi8qKlxuICogRW5zdXJlIHRoYXQgdW5kZXJseWluZyBvdmVybGF5cyBoYXZlIGFyaWEtaGlkZGVuIGlmIG5lY2Vzc2FyeSBzbyB0aGF0IHNjcmVlbiByZWFkZXJzXG4gKiBjYW5ub3QgbW92ZSBmb2N1cyB0byB0aGVzZSBlbGVtZW50cy4gTm90ZSB0aGF0IHdlIGNhbm5vdCByZWx5IG9uIGZvY3VzL2ZvY3VzaW4vZm9jdXNvdXRcbiAqIGV2ZW50cyBoZXJlIGJlY2F1c2UgdGhvc2UgZXZlbnRzIGRvIG5vdCBmaXJlIHdoZW4gdGhlIHNjcmVlbiByZWFkZXJzIG1vdmVzIHRvIGEgbm9uLWZvY3VzYWJsZVxuICogZWxlbWVudCBzdWNoIGFzIHRleHQuXG4gKiBXaXRob3V0IHRoaXMgbG9naWMgc2NyZWVuIHJlYWRlcnMgd291bGQgYmUgYWJsZSB0byBtb3ZlIGZvY3VzIG91dHNpZGUgb2YgdGhlIHRvcCBmb2N1cy10cmFwcGVkIG92ZXJsYXkuXG4gKlxuICogQHBhcmFtIG5ld1RvcE1vc3RPdmVybGF5IC0gVGhlIG92ZXJsYXkgdGhhdCBpcyBiZWluZyBwcmVzZW50ZWQuIFNpbmNlIHRoZSBvdmVybGF5IGhhcyBub3QgYmVlblxuICogZnVsbHkgcHJlc2VudGVkIHlldCBhdCB0aGUgdGltZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpdCB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgZ2V0UHJlc2VudGVkT3ZlcmxheXMgcmVzdWx0LlxuICovXG5jb25zdCBoaWRlVW5kZXJseWluZ092ZXJsYXlzRnJvbVNjcmVlblJlYWRlcnMgPSBuZXdUb3BNb3N0T3ZlcmxheSA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKGRvYyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGNvbnN0IG92ZXJsYXlzID0gZ2V0UHJlc2VudGVkT3ZlcmxheXMoZG9jKTtcbiAgZm9yIChsZXQgaSA9IG92ZXJsYXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgcHJlc2VudGVkT3ZlcmxheSA9IG92ZXJsYXlzW2ldO1xuICAgIGNvbnN0IG5leHRQcmVzZW50ZWRPdmVybGF5ID0gKF9hID0gb3ZlcmxheXNbaSArIDFdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBuZXdUb3BNb3N0T3ZlcmxheTtcbiAgICAvKipcbiAgICAgKiBJZiBuZXh0IG92ZXJsYXkgaGFzIGFyaWEtaGlkZGVuIHRoZW4gYWxsIHJlbWFpbmluZyBvdmVybGF5cyB3aWxsIGhhdmUgaXQgdG9vLlxuICAgICAqIE9yLCBpZiB0aGUgbmV4dCBvdmVybGF5IGlzIGEgVG9hc3QgdGhhdCBkb2VzIG5vdCBoYXZlIGFyaWEtaGlkZGVuIHRoZW4gY3VycmVudCBvdmVybGF5XG4gICAgICogc2hvdWxkIG5vdCBoYXZlIGFyaWEtaGlkZGVuIGVpdGhlciBzbyBmb2N1cyBjYW4gcmVtYWluIGluIHRoZSBjdXJyZW50IG92ZXJsYXkuXG4gICAgICovXG4gICAgaWYgKG5leHRQcmVzZW50ZWRPdmVybGF5Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSB8fCBuZXh0UHJlc2VudGVkT3ZlcmxheS50YWdOYW1lICE9PSAnSU9OLVRPQVNUJykge1xuICAgICAgcHJlc2VudGVkT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFdoZW4gZGlzbWlzc2luZyBhbiBvdmVybGF5IHdlIG5lZWQgdG8gcmV2ZWFsIHRoZSBuZXcgdG9wLW1vc3Qgb3ZlcmxheSB0byBzY3JlZW4gcmVhZGVycy5cbiAqIElmIHRoZSB0b3AtbW9zdCBvdmVybGF5IGlzIGEgVG9hc3Qgd2UgcG90ZW50aWFsbHkgbmVlZCB0byByZXZlYWwgbW9yZSBvdmVybGF5cyBzaW5jZVxuICogZm9jdXMgaXMgbmV2ZXIgYXV0b21hdGljYWxseSBtb3ZlZCB0byB0aGUgVG9hc3QuXG4gKi9cbmNvbnN0IHJldmVhbE92ZXJsYXlzVG9TY3JlZW5SZWFkZXJzID0gKCkgPT4ge1xuICBpZiAoZG9jID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgY29uc3Qgb3ZlcmxheXMgPSBnZXRQcmVzZW50ZWRPdmVybGF5cyhkb2MpO1xuICBmb3IgKGxldCBpID0gb3ZlcmxheXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBjdXJyZW50T3ZlcmxheSA9IG92ZXJsYXlzW2ldO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBjdXJyZW50IHdlIGFyZSBsb29raW5nIGF0IGlzIGEgVG9hc3QgdGhlbiB3ZSBjYW4gcmVtb3ZlIGFyaWEtaGlkZGVuLlxuICAgICAqIEhvd2V2ZXIsIHdlIHBvdGVudGlhbGx5IG5lZWQgdG8ga2VlcCBsb29raW5nIGF0IHRoZSBvdmVybGF5IHN0YWNrIGJlY2F1c2UgdGhlcmVcbiAgICAgKiBjb3VsZCBiZSBtb3JlIFRvYXN0cyB1bmRlcm5lYXRoLiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gdW5oaWRlIHRoZSBjbG9zZXN0IG5vbi1Ub2FzdFxuICAgICAqIG92ZXJsYXkgdG9vIHNvIGZvY3VzIGNhbiBtb3ZlIHRoZXJlIHNpbmNlIGZvY3VzIGlzIG5ldmVyIGF1dG9tYXRpY2FsbHkgbW92ZWQgdG8gdGhlIFRvYXN0LlxuICAgICAqL1xuICAgIGN1cnJlbnRPdmVybGF5LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBmb3VuZCBhIG5vbi1Ub2FzdCBlbGVtZW50IHRoZW4gd2UgY2FuIGp1c3QgcmVtb3ZlIGFyaWEtaGlkZGVuIGFuZCBzdG9wIHNlYXJjaGluZyBlbnRpcmVseVxuICAgICAqIHNpbmNlIHRoaXMgb3ZlcmxheSBzaG91bGQgYWx3YXlzIHJlY2VpdmUgZm9jdXMuIEFzIGEgcmVzdWx0LCBhbGwgdW5kZXJseWluZyBvdmVybGF5cyBzaG91bGQgc3RpbGxcbiAgICAgKiBiZSBoaWRkZW4gZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBpZiAoY3VycmVudE92ZXJsYXkudGFnTmFtZSAhPT0gJ0lPTi1UT0FTVCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUyA9ICdpb24tZGlzYWJsZS1mb2N1cy10cmFwJztcbmV4cG9ydCB7IEJBQ0tEUk9QIGFzIEIsIEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUyBhcyBGLCBHRVNUVVJFIGFzIEcsIE9WRVJMQVlfR0VTVFVSRV9QUklPUklUWSBhcyBPLCBhbGVydENvbnRyb2xsZXIgYXMgYSwgYWN0aW9uU2hlZXRDb250cm9sbGVyIGFzIGIsIHBvcG92ZXJDb250cm9sbGVyIGFzIGMsIGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlciBhcyBkLCBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlciBhcyBlLCBwcmVzZW50IGFzIGYsIGRpc21pc3MgYXMgZywgZXZlbnRNZXRob2QgYXMgaCwgaXNDYW5jZWwgYXMgaSwgcHJlcGFyZU92ZXJsYXkgYXMgaiwgc2V0T3ZlcmxheUlkIGFzIGssIGxvYWRpbmdDb250cm9sbGVyIGFzIGwsIG1vZGFsQ29udHJvbGxlciBhcyBtLCBmb2N1c0ZpcnN0RGVzY2VuZGFudCBhcyBuLCBnZXRQcmVzZW50ZWRPdmVybGF5IGFzIG8sIHBpY2tlckNvbnRyb2xsZXIgYXMgcCwgZm9jdXNMYXN0RGVzY2VuZGFudCBhcyBxLCBzYWZlQ2FsbCBhcyBzLCB0b2FzdENvbnRyb2xsZXIgYXMgdCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLElBQU0sdUJBQXVCO0FBVzdCLElBQU0sdUJBQXVCLENBQUMsS0FBSyxvQkFBb0I7QUFDckQsUUFBTSxhQUFhLElBQUksY0FBYyxvQkFBb0I7QUFDekQsd0JBQXNCLFlBQVksb0JBQW9CLFFBQVEsb0JBQW9CLFNBQVMsa0JBQWtCLEdBQUc7QUFDbEg7QUFXQSxJQUFNLHNCQUFzQixDQUFDLEtBQUssb0JBQW9CO0FBQ3BELFFBQU0sU0FBUyxNQUFNLEtBQUssSUFBSSxpQkFBaUIsb0JBQW9CLENBQUM7QUFDcEUsUUFBTSxZQUFZLE9BQU8sU0FBUyxJQUFJLE9BQU8sT0FBTyxTQUFTLENBQUMsSUFBSTtBQUNsRSx3QkFBc0IsV0FBVyxvQkFBb0IsUUFBUSxvQkFBb0IsU0FBUyxrQkFBa0IsR0FBRztBQUNqSDtBQWtCQSxJQUFNLHdCQUF3QixDQUFDLGFBQWEsb0JBQW9CO0FBQzlELE1BQUksaUJBQWlCO0FBQ3JCLFFBQU0sYUFBYSxnQkFBZ0IsUUFBUSxnQkFBZ0IsU0FBUyxTQUFTLFlBQVk7QUFDekYsTUFBSSxZQUFZO0FBRWQscUJBQWlCLFdBQVcsY0FBYyxvQkFBb0IsS0FBSztBQUFBLEVBQ3JFO0FBQ0EsTUFBSSxnQkFBZ0I7QUFDbEIsVUFBTSxhQUFhLGVBQWUsUUFBUSxpQkFBaUI7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
