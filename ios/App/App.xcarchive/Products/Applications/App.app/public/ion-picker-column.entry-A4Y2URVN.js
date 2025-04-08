import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-3XAIP4YB.js";
import "./chunk-UPH3BB7G.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  getElementRoot,
  raf
} from "./chunk-RRWPYKYY.js";
import {
  doc
} from "./chunk-JYOJD2RE.js";
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

// node_modules/@ionic/core/dist/esm/ion-picker-column.entry.js
var pickerColumnCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.assistive-focusable{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1;pointer-events:none}.assistive-focusable:focus{outline:none}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:end;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:start;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";
var IonPickerColumnStyle0 = pickerColumnCss;
var PickerColumn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.isScrolling = false;
    this.isColumnVisible = false;
    this.canExitInputMode = true;
    this.updateValueTextOnScroll = false;
    this.centerPickerItemInView = (target, smooth = true, canExitInputMode = true) => {
      const {
        isColumnVisible,
        scrollEl
      } = this;
      if (isColumnVisible && scrollEl) {
        const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;
        if (scrollEl.scrollTop !== top) {
          this.canExitInputMode = canExitInputMode;
          this.updateValueTextOnScroll = false;
          scrollEl.scroll({
            top,
            left: 0,
            behavior: smooth ? "smooth" : void 0
          });
        }
      }
    };
    this.setPickerItemActiveState = (item, isActive) => {
      if (isActive) {
        item.classList.add(PICKER_ITEM_ACTIVE_CLASS);
      } else {
        item.classList.remove(PICKER_ITEM_ACTIVE_CLASS);
      }
    };
    this.inputModeChange = (ev) => {
      if (!this.numericInput) {
        return;
      }
      const {
        useInputMode,
        inputModeColumn
      } = ev.detail;
      const isColumnActive = inputModeColumn === void 0 || inputModeColumn === this.el;
      if (!useInputMode || !isColumnActive) {
        this.setInputModeActive(false);
        return;
      }
      this.setInputModeActive(true);
    };
    this.setInputModeActive = (state) => {
      if (this.isScrolling) {
        this.scrollEndCallback = () => {
          this.isActive = state;
        };
        return;
      }
      this.isActive = state;
    };
    this.initializeScrollListener = () => {
      const enableHaptics = isPlatform("ios");
      const {
        el,
        scrollEl
      } = this;
      let timeout;
      let activeEl = this.activeItem;
      const scrollCallback = () => {
        raf(() => {
          var _a;
          if (!scrollEl) return;
          if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
          }
          if (!this.isScrolling) {
            enableHaptics && hapticSelectionStart();
            this.isScrolling = true;
          }
          const bbox = scrollEl.getBoundingClientRect();
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
          const rootNode = el.getRootNode();
          const hasParentShadow = rootNode instanceof ShadowRoot;
          const referenceNode = hasParentShadow ? rootNode : doc;
          if (referenceNode === void 0) {
            return;
          }
          const elementsAtPoint = referenceNode.elementsFromPoint(centerX, centerY);
          const newActiveElement = elementsAtPoint.find((el2) => el2.tagName === "ION-PICKER-COLUMN-OPTION");
          if (activeEl !== void 0) {
            this.setPickerItemActiveState(activeEl, false);
          }
          if (newActiveElement === void 0 || newActiveElement.disabled) {
            return;
          }
          if (newActiveElement !== activeEl) {
            enableHaptics && hapticSelectionChanged();
            if (this.canExitInputMode) {
              this.exitInputMode();
            }
          }
          activeEl = newActiveElement;
          this.setPickerItemActiveState(newActiveElement, true);
          if (this.updateValueTextOnScroll) {
            (_a = this.assistiveFocusable) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-valuetext", this.getOptionValueText(newActiveElement));
          }
          timeout = setTimeout(() => {
            this.isScrolling = false;
            this.updateValueTextOnScroll = true;
            enableHaptics && hapticSelectionEnd();
            const {
              scrollEndCallback
            } = this;
            if (scrollEndCallback) {
              scrollEndCallback();
              this.scrollEndCallback = void 0;
            }
            this.canExitInputMode = true;
            this.setValue(newActiveElement.value);
          }, 250);
        });
      };
      raf(() => {
        if (!scrollEl) return;
        scrollEl.addEventListener("scroll", scrollCallback);
        this.destroyScrollListener = () => {
          scrollEl.removeEventListener("scroll", scrollCallback);
        };
      });
    };
    this.exitInputMode = () => {
      const {
        parentEl
      } = this;
      if (parentEl == null) return;
      parentEl.exitInputMode();
      this.el.classList.remove("picker-column-active");
    };
    this.findNextOption = (stride = 1) => {
      const {
        activeItem
      } = this;
      if (!activeItem) return null;
      let prevNode = activeItem;
      let node = activeItem.nextElementSibling;
      while (node != null) {
        if (stride > 0) {
          stride--;
        }
        if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
          return node;
        }
        prevNode = node;
        node = node.nextElementSibling;
      }
      return prevNode;
    };
    this.findPreviousOption = (stride = 1) => {
      const {
        activeItem
      } = this;
      if (!activeItem) return null;
      let nextNode = activeItem;
      let node = activeItem.previousElementSibling;
      while (node != null) {
        if (stride > 0) {
          stride--;
        }
        if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
          return node;
        }
        nextNode = node;
        node = node.previousElementSibling;
      }
      return nextNode;
    };
    this.onKeyDown = (ev) => {
      const mobile = isPlatform("mobile");
      let newOption = null;
      switch (ev.key) {
        case "ArrowDown":
          newOption = mobile ? this.findPreviousOption() : this.findNextOption();
          break;
        case "ArrowUp":
          newOption = mobile ? this.findNextOption() : this.findPreviousOption();
          break;
        case "PageUp":
          newOption = mobile ? this.findNextOption(5) : this.findPreviousOption(5);
          break;
        case "PageDown":
          newOption = mobile ? this.findPreviousOption(5) : this.findNextOption(5);
          break;
        case "Home":
          newOption = this.el.querySelector("ion-picker-column-option:first-of-type");
          break;
        case "End":
          newOption = this.el.querySelector("ion-picker-column-option:last-of-type");
          break;
      }
      if (newOption !== null) {
        this.setValue(newOption.value);
        ev.preventDefault();
      }
    };
    this.getOptionValueText = (el) => {
      var _a;
      return el ? (_a = el.getAttribute("aria-label")) !== null && _a !== void 0 ? _a : el.innerText : "";
    };
    this.renderAssistiveFocusable = () => {
      const {
        activeItem
      } = this;
      const valueText = this.getOptionValueText(activeItem);
      return h("div", {
        ref: (el) => this.assistiveFocusable = el,
        class: "assistive-focusable",
        role: "slider",
        tabindex: this.disabled ? void 0 : 0,
        "aria-label": this.ariaLabel,
        "aria-valuemin": 0,
        "aria-valuemax": 0,
        "aria-valuenow": 0,
        "aria-valuetext": valueText,
        "aria-orientation": "vertical",
        onKeyDown: (ev) => this.onKeyDown(ev)
      });
    };
    this.ariaLabel = null;
    this.isActive = false;
    this.disabled = false;
    this.value = void 0;
    this.color = "primary";
    this.numericInput = false;
  }
  ariaLabelChanged(newValue) {
    this.ariaLabel = newValue;
  }
  valueChange() {
    if (this.isColumnVisible) {
      this.scrollActiveItemIntoView(true);
    }
  }
  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */
  componentWillLoad() {
    const parentEl = this.parentEl = this.el.closest("ion-picker");
    const visibleCallback = (entries) => {
      const ev = entries[entries.length - 1];
      if (ev.isIntersecting) {
        const {
          activeItem,
          el
        } = this;
        this.isColumnVisible = true;
        const oldActive = getElementRoot(el).querySelector(`.${PICKER_ITEM_ACTIVE_CLASS}`);
        if (oldActive) {
          this.setPickerItemActiveState(oldActive, false);
        }
        this.scrollActiveItemIntoView();
        if (activeItem) {
          this.setPickerItemActiveState(activeItem, true);
        }
        this.initializeScrollListener();
      } else {
        this.isColumnVisible = false;
        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = void 0;
        }
      }
    };
    new IntersectionObserver(visibleCallback, {
      threshold: 1e-3,
      root: this.parentEl
    }).observe(this.el);
    if (parentEl !== null) {
      parentEl.addEventListener("ionInputModeChange", (ev) => this.inputModeChange(ev));
    }
  }
  componentDidRender() {
    const {
      el,
      activeItem,
      isColumnVisible,
      value
    } = this;
    if (isColumnVisible && !activeItem) {
      const firstOption = el.querySelector("ion-picker-column-option");
      if (firstOption !== null && firstOption.value !== value) {
        this.setValue(firstOption.value);
      }
    }
  }
  /** @internal  */
  scrollActiveItemIntoView(smooth = false) {
    return __async(this, null, function* () {
      const activeEl = this.activeItem;
      if (activeEl) {
        this.centerPickerItemInView(activeEl, smooth, false);
      }
    });
  }
  /**
   * Sets the value prop and fires the ionChange event.
   * This is used when we need to fire ionChange from
   * user-generated events that cannot be caught with normal
   * input/change event listeners.
   * @internal
   */
  setValue(value) {
    return __async(this, null, function* () {
      if (this.disabled === true || this.value === value) {
        return;
      }
      this.value = value;
      this.ionChange.emit({
        value
      });
    });
  }
  /**
   * Sets focus on the scrollable container within the picker column.
   * Use this method instead of the global `pickerColumn.focus()`.
   */
  setFocus() {
    return __async(this, null, function* () {
      if (this.assistiveFocusable) {
        this.assistiveFocusable.focus();
      }
    });
  }
  connectedCallback() {
    var _a;
    this.ariaLabel = (_a = this.el.getAttribute("aria-label")) !== null && _a !== void 0 ? _a : "Select a value";
  }
  get activeItem() {
    const {
      value
    } = this;
    const options = Array.from(this.el.querySelectorAll("ion-picker-column-option"));
    return options.find((option) => {
      if (!this.disabled && option.disabled) {
        return false;
      }
      return option.value === value;
    });
  }
  render() {
    const {
      color,
      disabled,
      isActive,
      numericInput
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "a221dc10f1eb7c41637a16d2c7167c16939822fd",
      class: createColorClasses(color, {
        [mode]: true,
        ["picker-column-active"]: isActive,
        ["picker-column-numeric-input"]: numericInput,
        ["picker-column-disabled"]: disabled
      })
    }, this.renderAssistiveFocusable(), h("slot", {
      key: "81b0656f606856f3dc0a657bf167d81a5011405e",
      name: "prefix"
    }), h("div", {
      key: "71b9de67c04150255dd66592601c9d926db0c31c",
      "aria-hidden": "true",
      class: "picker-opts",
      ref: (el) => {
        this.scrollEl = el;
      },
      /**
       * When an element has an overlay scroll style and
       * a fixed height, Firefox will focus the scrollable
       * container if the content exceeds the container's
       * dimensions.
       *
       * This causes keyboard navigation to focus to this
       * element instead of going to the next element in
       * the tab order.
       *
       * The desired behavior is for the user to be able to
       * focus the assistive focusable element and tab to
       * the next element in the tab order. Instead of tabbing
       * to this element.
       *
       * To prevent this, we set the tabIndex to -1. This
       * will match the behavior of the other browsers.
       */
      tabIndex: -1
    }, h("div", {
      key: "ebdc2f08c83db0cf17b4be29f28fcb00f529601e",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "04ab56fcb8e6a7d6af00204c4560feb99ff34a56",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "6cf8f538903faf0fe1e4130f3eaf7b4e2e17cb52",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("slot", {
      key: "1cc392307b70c576be5b81b5226ceba735957f0f"
    }), h("div", {
      key: "23e3f28e2a99b9aa8b7c8f68ad9583e3ca63e9e2",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "8a0563f09780c3116af0caebe4f40587ec1f041f",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "13207e248fc0009f37e0c90a3ee2bac2f130b856",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0")), h("slot", {
      key: "55ecf2ab5f214f936c2468cbdb7952daf89416b8",
      name: "suffix"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "aria-label": ["ariaLabelChanged"],
      "value": ["valueChange"]
    };
  }
};
var PICKER_ITEM_ACTIVE_CLASS = "option-active";
PickerColumn.style = IonPickerColumnStyle0;
export {
  PickerColumn as ion_picker_column
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker-column.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLWNvbHVtbi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCBnIGFzIGdldEVsZW1lbnRSb290IH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGEgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGIgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCwgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQgfSBmcm9tICcuL2hhcHRpYy1hYzE2NGU0Yy5qcyc7XG5pbXBvcnQgeyBhIGFzIGlzUGxhdGZvcm0sIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcbmNvbnN0IHBpY2tlckNvbHVtbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21heC13aWR0aDoxMDAlO2hlaWdodDoyMDBweDtmb250LXNpemU6MjJweDt0ZXh0LWFsaWduOmNlbnRlcn0uYXNzaXN0aXZlLWZvY3VzYWJsZXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX0uYXNzaXN0aXZlLWZvY3VzYWJsZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlci1vcHRzey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbTowcHg7bWluLXdpZHRoOjI2cHg7bWF4LWhlaWdodDoyMDBweDtvdXRsaW5lOm5vbmU7dGV4dC1hbGlnbjppbmhlcml0Oy13ZWJraXQtc2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeTstbXMtc2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeTtzY3JvbGwtc25hcC10eXBlOnkgbWFuZGF0b3J5O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6c2Nyb2xsO3Njcm9sbGJhci13aWR0aDpub25lfS5waWNrZXItaXRlbS1lbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjM0cHg7Ym9yZGVyOjBweDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzRweDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5waWNrZXItb3B0czo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfTo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbi1vcHRpb24pe2Rpc3BsYXk6YmxvY2s7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyfS5waWNrZXItaXRlbS1lbXB0eSw6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uLm9wdGlvbi1kaXNhYmxlZCl7c2Nyb2xsLXNuYXAtYWxpZ246bm9uZX06OnNsb3R0ZWQoW3Nsb3Q9cHJlZml4XSksOjpzbG90dGVkKFtzbG90PXN1ZmZpeF0pe21heC13aWR0aDoyMDBweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59OjpzbG90dGVkKFtzbG90PXByZWZpeF0pey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kfTo6c2xvdHRlZChbc2xvdD1zdWZmaXhdKXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnR9Omhvc3QoLnBpY2tlci1jb2x1bW4tZGlzYWJsZWQpIC5waWNrZXItb3B0c3tvdmVyZmxvdy15OmhpZGRlbn06aG9zdCgucGlja2VyLWNvbHVtbi1kaXNhYmxlZCkgOjpzbG90dGVkKGlvbi1waWNrZXItY29sdW1uLW9wdGlvbil7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjQ7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpmb2N1cykgLnBpY2tlci1vcHRze291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKX19XCI7XG5jb25zdCBJb25QaWNrZXJDb2x1bW5TdHlsZTAgPSBwaWNrZXJDb2x1bW5Dc3M7XG5jb25zdCBQaWNrZXJDb2x1bW4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2x1bW5WaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jYW5FeGl0SW5wdXRNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlVGV4dE9uU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5jZW50ZXJQaWNrZXJJdGVtSW5WaWV3ID0gKHRhcmdldCwgc21vb3RoID0gdHJ1ZSwgY2FuRXhpdElucHV0TW9kZSA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNDb2x1bW5WaXNpYmxlLFxuICAgICAgICBzY3JvbGxFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoaXNDb2x1bW5WaXNpYmxlICYmIHNjcm9sbEVsKSB7XG4gICAgICAgIC8vIChWZXJ0aWNhbCBvZmZzZXQgZnJvbSBwYXJlbnQpIC0gKHRocmVlIGVtcHR5IHBpY2tlciByb3dzKSArIChoYWxmIHRoZSBoZWlnaHQgb2YgdGhlIHRhcmdldCB0byBlbnN1cmUgdGhlIHNjcm9sbCB0cmlnZ2VycylcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lm9mZnNldFRvcCAtIDMgKiB0YXJnZXQuY2xpZW50SGVpZ2h0ICsgdGFyZ2V0LmNsaWVudEhlaWdodCAvIDI7XG4gICAgICAgIGlmIChzY3JvbGxFbC5zY3JvbGxUb3AgIT09IHRvcCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNldHRpbmcgdGhpcyBmbGFnIHByZXZlbnRzIGlucHV0XG4gICAgICAgICAgICogbW9kZSBmcm9tIGV4aXRpbmcgaW4gdGhlIHBpY2tlciBjb2x1bW4nc1xuICAgICAgICAgICAqIHNjcm9sbCBjYWxsYmFjay4gVGhpcyBpcyB1c2VmdWwgd2hlbiB0aGUgdXNlciBtYW51YWxseVxuICAgICAgICAgICAqIHRhcHMgYW4gaXRlbSBvciB0eXBlcyBvbiB0aGUga2V5Ym9hcmQgYXMgYm90aFxuICAgICAgICAgICAqIG9mIHRoZXNlIGNhbiBjYXVzZSBhIHNjcm9sbCB0byBvY2N1ci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmNhbkV4aXRJbnB1dE1vZGUgPSBjYW5FeGl0SW5wdXRNb2RlO1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVUZXh0T25TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICBzY3JvbGxFbC5zY3JvbGwoe1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBzbW9vdGggPyAnc21vb3RoJyA6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFBpY2tlckl0ZW1BY3RpdmVTdGF0ZSA9IChpdGVtLCBpc0FjdGl2ZSkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChQSUNLRVJfSVRFTV9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFBJQ0tFUl9JVEVNX0FDVElWRV9DTEFTUyk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXaGVuIGlvbklucHV0TW9kZUNoYW5nZSBpcyBlbWl0dGVkLCBlYWNoIGNvbHVtblxuICAgICAqIG5lZWRzIHRvIGNoZWNrIGlmIGl0IGlzIHRoZSBvbmUgYmVpbmcgbWFkZSBhdmFpbGFibGVcbiAgICAgKiBmb3IgdGV4dCBlbnRyeS5cbiAgICAgKi9cbiAgICB0aGlzLmlucHV0TW9kZUNoYW5nZSA9IGV2ID0+IHtcbiAgICAgIGlmICghdGhpcy5udW1lcmljSW5wdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VJbnB1dE1vZGUsXG4gICAgICAgIGlucHV0TW9kZUNvbHVtblxuICAgICAgfSA9IGV2LmRldGFpbDtcbiAgICAgIC8qKlxuICAgICAgICogSWYgaW5wdXRNb2RlQ29sdW1uIGlzIHVuZGVmaW5lZCB0aGVuIHRoaXMgbWVhbnNcbiAgICAgICAqIGFsbCBudW1lcmljSW5wdXQgY29sdW1ucyBhcmUgYmVpbmcgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzQ29sdW1uQWN0aXZlID0gaW5wdXRNb2RlQ29sdW1uID09PSB1bmRlZmluZWQgfHwgaW5wdXRNb2RlQ29sdW1uID09PSB0aGlzLmVsO1xuICAgICAgaWYgKCF1c2VJbnB1dE1vZGUgfHwgIWlzQ29sdW1uQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRNb2RlQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRJbnB1dE1vZGVBY3RpdmUodHJ1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0aW5nIGlzQWN0aXZlIHdpbGwgY2F1c2UgYSByZS1yZW5kZXIuXG4gICAgICogQXMgYSByZXN1bHQsIHdlIGRvIG5vdCB3YW50IHRvIGNhdXNlIHRoZVxuICAgICAqIHJlLXJlbmRlciBtaWQgc2Nyb2xsIGFzIHRoaXMgd2lsbCBjYXVzZVxuICAgICAqIHRoZSBwaWNrZXIgY29sdW1uIHRvIGp1bXAgYmFjayB0b1xuICAgICAqIHdoYXRldmVyIHZhbHVlIHdhcyBzZWxlY3RlZCBhdCB0aGVcbiAgICAgKiBzdGFydCBvZiB0aGUgc2Nyb2xsIGludGVyYWN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuc2V0SW5wdXRNb2RlQWN0aXZlID0gc3RhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxFbmRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gc3RhdGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBzdGF0ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNvbHVtbiBzY3JvbGxzLCB0aGUgY29tcG9uZW50XG4gICAgICogbmVlZHMgdG8gZGV0ZXJtaW5lIHdoaWNoIGl0ZW0gaXMgY2VudGVyZWRcbiAgICAgKiBpbiB0aGUgdmlldyBhbmQgd2lsbCBlbWl0IGFuIGlvbkNoYW5nZSB3aXRoXG4gICAgICogdGhlIGl0ZW0gb2JqZWN0LlxuICAgICAqL1xuICAgIHRoaXMuaW5pdGlhbGl6ZVNjcm9sbExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgaGFwdGljcyBmb3IgdGhlIHdoZWVsIHBpY2tlciBhcmVcbiAgICAgICAqIGFuIGlPUy1vbmx5IGZlYXR1cmUuIEFzIGEgcmVzdWx0LCB0aGV5IHNob3VsZFxuICAgICAgICogYmUgZGlzYWJsZWQgb24gQW5kcm9pZC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZW5hYmxlSGFwdGljcyA9IGlzUGxhdGZvcm0oJ2lvcycpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbCxcbiAgICAgICAgc2Nyb2xsRWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICBsZXQgYWN0aXZlRWwgPSB0aGlzLmFjdGl2ZUl0ZW07XG4gICAgICBjb25zdCBzY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgaWYgKCFzY3JvbGxFbCkgcmV0dXJuO1xuICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIGVuYWJsZUhhcHRpY3MgJiYgaGFwdGljU2VsZWN0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZWxlY3QgaXRlbSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICAgKiB3aGljaCBpcyB0aGUgbW9udGgveWVhciB0aGF0IHdlIHdhbnQgdG8gc2VsZWN0XG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgYmJveCA9IHNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbnRlclggPSBiYm94LnggKyBiYm94LndpZHRoIC8gMjtcbiAgICAgICAgICBjb25zdCBjZW50ZXJZID0gYmJveC55ICsgYmJveC5oZWlnaHQgLyAyO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIGVsZW1lbnRGcm9tUG9pbnQgcmV0dXJucyB0aGUgdG9wLW1vc3QgZWxlbWVudC5cbiAgICAgICAgICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgYW4gaW9uLWJhY2tkcm9wIGlzIG92ZXJsYXlpbmcgdGhlXG4gICAgICAgICAgICogcGlja2VyIHRoZW4gdGhlIGFwcHJvcHJpYXRlIHBpY2tlciBjb2x1bW4gb3B0aW9uIHdpbGxcbiAgICAgICAgICAgKiBub3QgYmUgc2VsZWN0ZWQuIFRvIGFjY291bnQgZm9yIHRoaXMsIHdlIHVzZSBlbGVtZW50c0Zyb21Qb2ludFxuICAgICAgICAgICAqIGFuZCB1c2UgYW4gQXJyYXkuZmluZCB0byBmaW5kIHRoZSBhcHByb3ByaWF0ZSBjb2x1bW4gb3B0aW9uXG4gICAgICAgICAgICogYXQgdGhhdCBwb2ludC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIHBpY2tlciBjb2x1bW4gY291bGQgYmUgdXNlZCBpbiB0aGVcbiAgICAgICAgICAgKiBTaGFkb3cgRE9NIChpLmUuIGluIGlvbi1kYXRldGltZSkgc28gd2UgbmVlZCB0byBtYWtlXG4gICAgICAgICAgICogc3VyZSB3ZSBhcmUgY2hvb3NpbmcgdGhlIGNvcnJlY3QgaG9zdCBvdGhlcndpc2VcbiAgICAgICAgICAgKiB0aGUgZWxlbWVudHMgcmV0dXJucyBieSBlbGVtZW50c0Zyb21Qb2ludCB3aWxsIGJlXG4gICAgICAgICAgICogcmV0YXJnZXRlZC4gVG8gYWNjb3VudCBmb3IgdGhpcywgd2UgY2hlY2sgdG8gc2VlXG4gICAgICAgICAgICogaWYgdGhlIHBpY2tlciBjb2x1bW4gaGFzIGEgcGFyZW50IHNoYWRvdyByb290LiBJZlxuICAgICAgICAgICAqIHNvLCB3ZSB1c2UgdGhhdCBzaGFkb3cgcm9vdCB3aGVuIGRvaW5nIGVsZW1lbnRzRnJvbVBvaW50LlxuICAgICAgICAgICAqIE90aGVyd2lzZSwgd2UganVzdCB1c2UgdGhlIGRvY3VtZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gZWwuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgICBjb25zdCBoYXNQYXJlbnRTaGFkb3cgPSByb290Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IGhhc1BhcmVudFNoYWRvdyA/IHJvb3ROb2RlIDogZG9jO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZSByZWZlcmVuY2Ugbm9kZSBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgKiB0aGVuIGl0J3MgbGlrZWx5IHRoYXQgZG9jIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAqIGR1ZSB0byBiZWluZyBpbiBhbiBTU1IgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZU5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBlbGVtZW50c0F0UG9pbnQgPSByZWZlcmVuY2VOb2RlLmVsZW1lbnRzRnJvbVBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIGVsZW1lbnRzRnJvbVBvaW50IGNhbiByZXR1cm5zIG11bHRpcGxlIGVsZW1lbnRzXG4gICAgICAgICAgICogc28gZmluZCB0aGUgcmVsZXZhbnQgcGlja2VyIGNvbHVtbiBvcHRpb24gaWYgb25lIGV4aXN0cy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBuZXdBY3RpdmVFbGVtZW50ID0gZWxlbWVudHNBdFBvaW50LmZpbmQoZWwgPT4gZWwudGFnTmFtZSA9PT0gJ0lPTi1QSUNLRVItQ09MVU1OLU9QVElPTicpO1xuICAgICAgICAgIGlmIChhY3RpdmVFbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBpY2tlckl0ZW1BY3RpdmVTdGF0ZShhY3RpdmVFbCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobmV3QWN0aXZlRWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IG5ld0FjdGl2ZUVsZW1lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgd2UgYXJlIHNlbGVjdGluZyBhIG5ldyB2YWx1ZSxcbiAgICAgICAgICAgKiB3ZSBuZWVkIHRvIHJ1biBoYXB0aWNzIGFnYWluLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChuZXdBY3RpdmVFbGVtZW50ICE9PSBhY3RpdmVFbCkge1xuICAgICAgICAgICAgZW5hYmxlSGFwdGljcyAmJiBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5FeGl0SW5wdXRNb2RlKSB7XG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiBUaGUgbmF0aXZlIGlPUyB3aGVlbCBwaWNrZXJcbiAgICAgICAgICAgICAgICogb25seSBkaXNtaXNzZXMgdGhlIGtleWJvYXJkXG4gICAgICAgICAgICAgICAqIG9uY2UgdGhlIHNlbGVjdGVkIGl0ZW0gaGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICogYXMgYSByZXN1bHQgb2YgYSBzd2lwZVxuICAgICAgICAgICAgICAgKiBmcm9tIHRoZSB1c2VyLiBJZiBgY2FuRXhpdElucHV0TW9kZWAgaXNcbiAgICAgICAgICAgICAgICogYGZhbHNlYCB0aGVuIHRoaXMgbWVhbnMgdGhhdCB0aGVcbiAgICAgICAgICAgICAgICogc2Nyb2xsIGlzIGhhcHBlbmluZyBhcyBhIHJlc3VsdCBvZlxuICAgICAgICAgICAgICAgKiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBwcm9ncmFtbWF0aWNhbGx5IGNoYW5naW5nXG4gICAgICAgICAgICAgICAqIGVpdGhlciBieSBhbiBhcHBsaWNhdGlvbiBvciBieSB0aGUgdXNlciB2aWEgdGhlIGtleWJvYXJkLlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgdGhpcy5leGl0SW5wdXRNb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGl2ZUVsID0gbmV3QWN0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLnNldFBpY2tlckl0ZW1BY3RpdmVTdGF0ZShuZXdBY3RpdmVFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXQgdGhlIGFyaWEtdmFsdWV0ZXh0IGV2ZW4gdGhvdWdoIHRoZSB2YWx1ZSBwcm9wIGhhcyBub3QgYmVlbiB1cGRhdGVkIHlldC5cbiAgICAgICAgICAgKiBUaGlzIGVuYWJsZXMgc29tZSBzY3JlZW4gcmVhZGVycyB0byBhbm5vdW5jZSB0aGUgdmFsdWUgYXMgdGhlIHVzZXJzIGRyYWdcbiAgICAgICAgICAgKiBhcyBvcHBvc2VkIHRvIHdoZW4gdGhlaXIgcmVsZWFzZSB0aGVpciBwb2ludGVyIGZyb20gdGhlIHNjcmVlbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFdoZW4gdGhlIHZhbHVlIGlzIHByb2dyYW1tYXRpY2FsbHkgdXBkYXRlZCwgd2Ugd2lsbCBzbW9vdGhseSBzY3JvbGxcbiAgICAgICAgICAgKiB0byB0aGUgbmV3IG9wdGlvbi4gSG93ZXZlciwgd2UgZG8gbm90IHdhbnQgdG8gdXBkYXRlIGFyaWEtdmFsdWV0ZXh0IG1pZC1zY3JvbGxcbiAgICAgICAgICAgKiBhcyB0aGF0IGNhbiBjYXVzZSB0aGUgb2xkIHZhbHVlIHRvIGJlIGJyaWVmbHkgc2V0IGJlZm9yZSBiZWluZyBzZXQgdG8gdGhlXG4gICAgICAgICAgICogY29ycmVjdCBvcHRpb24uIFRoaXMgd2lsbCBjYXVzZSBzb21lIHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIHRoZSBvbGQgdmFsdWVcbiAgICAgICAgICAgKiBhZ2FpbiBiZWZvcmUgYW5ub3VuY2luZyB0aGUgbmV3IHZhbHVlLiBUaGUgY29ycmVjdCB2YWx1ZXRleHQgd2lsbCBiZSBzZXQgb24gcmVuZGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVZhbHVlVGV4dE9uU2Nyb2xsKSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmFzc2lzdGl2ZUZvY3VzYWJsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCB0aGlzLmdldE9wdGlvblZhbHVlVGV4dChuZXdBY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVUZXh0T25TY3JvbGwgPSB0cnVlO1xuICAgICAgICAgICAgZW5hYmxlSGFwdGljcyAmJiBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2VydGFpbiB0YXNrcyAoc3VjaCBhcyB0aG9zZSB0aGF0XG4gICAgICAgICAgICAgKiBjYXVzZSByZS1yZW5kZXJzKSBzaG91bGQgb25seSBiZSBkb25lXG4gICAgICAgICAgICAgKiBvbmNlIHNjcm9sbGluZyBoYXMgZmluaXNoZWQsIG90aGVyd2lzZVxuICAgICAgICAgICAgICogZmxpY2tlcmluZyBtYXkgb2NjdXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgc2Nyb2xsRW5kQ2FsbGJhY2tcbiAgICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHNjcm9sbEVuZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHNjcm9sbEVuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRW5kQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlc2V0IHRoaXMgZmxhZyBhcyB0aGVcbiAgICAgICAgICAgICAqIG5leHQgc2Nyb2xsIGludGVyYWN0aW9uIGNvdWxkXG4gICAgICAgICAgICAgKiBiZSBhIHNjcm9sbCBmcm9tIHRoZSB1c2VyLiBJbiB0aGlzXG4gICAgICAgICAgICAgKiBjYXNlLCB3ZSBzaG91bGQgZXhpdCBpbnB1dCBtb2RlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNhbkV4aXRJbnB1dE1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXdBY3RpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXAgdGhpcyBpbiBhbiByYWYgc28gdGhhdCB0aGUgc2Nyb2xsIGNhbGxiYWNrXG4gICAgICAgKiBkb2VzIG5vdCBmaXJlIHdoZW4gY29tcG9uZW50IGlzIGluaXRpYWxseSBzaG93bi5cbiAgICAgICAqL1xuICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKCFzY3JvbGxFbCkgcmV0dXJuO1xuICAgICAgICBzY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVsbHMgdGhlIHBhcmVudCBwaWNrZXIgdG9cbiAgICAgKiBleGl0IHRleHQgZW50cnkgbW9kZS4gVGhpcyBpcyBvbmx5IGNhbGxlZFxuICAgICAqIHdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcyBkdXJpbmcgc2Nyb2xsLCBzb1xuICAgICAqIHdlIGtub3cgdGhhdCB0aGUgdXNlciBsaWtlbHkgd2FudHMgdG8gc2Nyb2xsXG4gICAgICogaW5zdGVhZCBvZiB0eXBlLlxuICAgICAqL1xuICAgIHRoaXMuZXhpdElucHV0TW9kZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGFyZW50RWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKHBhcmVudEVsID09IG51bGwpIHJldHVybjtcbiAgICAgIHBhcmVudEVsLmV4aXRJbnB1dE1vZGUoKTtcbiAgICAgIC8qKlxuICAgICAgICogc2V0SW5wdXRNb2RlQWN0aXZlIG9ubHkgdGFrZXNcbiAgICAgICAqIGVmZmVjdCBvbmNlIHNjcm9sbGluZyBzdG9wcyB0byBhdm9pZFxuICAgICAgICogYSBjb21wb25lbnQgcmUtcmVuZGVyIHdoaWxlIHNjcm9sbGluZy5cbiAgICAgICAqIEhvd2V2ZXIsIHdlIHdhbnQgdGhlIHZpc3VhbCBhY3RpdmVcbiAgICAgICAqIGluZGljYXRvciB0byBnbyBhd2F5IGltbWVkaWF0ZWx5LCBzb1xuICAgICAgICogd2UgY2FsbCBjbGFzc0xpc3QucmVtb3ZlIGhlcmUuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgncGlja2VyLWNvbHVtbi1hY3RpdmUnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIG5leHQgZW5hYmxlZCBvcHRpb24gYWZ0ZXIgdGhlIGFjdGl2ZSBvcHRpb24uXG4gICAgICogQHBhcmFtIHN0cmlkZSAtIEhvdyBtYW55IG9wdGlvbnMgdG8gXCJqdW1wXCIgb3ZlciBpbiBvcmRlciB0byBzZWxlY3QgdGhlIG5leHQgb3B0aW9uLlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IFBhZ2VVcC9QYWdlRG93biBiZWhhdmlvcnMgd2hlcmUgcHJlc3NpbmcgdGhlc2Uga2V5c1xuICAgICAqIHNjcm9sbHMgdGhlIHBpY2tlciBieSBtb3JlIHRoYW4gMSBvcHRpb24uIEZvciBleGFtcGxlLCBhIHN0cmlkZSBvZiA1IG1lYW5zIHNlbGVjdFxuICAgICAqIHRoZSBlbmFibGVkIG9wdGlvbiA1IG9wdGlvbnMgYWZ0ZXIgdGhlIGFjdGl2ZSBvbmUuIE5vdGUgdGhhdCB0aGUgYWN0dWFsIG9wdGlvbiBzZWxlY3RlZFxuICAgICAqIG1heSBiZSBwYXN0IHRoZSBzdHJpZGUgaWYgdGhlIG9wdGlvbiBhdCB0aGUgc3RyaWRlIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHRoaXMuZmluZE5leHRPcHRpb24gPSAoc3RyaWRlID0gMSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhY3RpdmVJdGVtXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghYWN0aXZlSXRlbSkgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgcHJldk5vZGUgPSBhY3RpdmVJdGVtO1xuICAgICAgbGV0IG5vZGUgPSBhY3RpdmVJdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmlkZSA+IDApIHtcbiAgICAgICAgICBzdHJpZGUtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU9OLVBJQ0tFUi1DT0xVTU4tT1BUSU9OJyAmJiAhbm9kZS5kaXNhYmxlZCAmJiBzdHJpZGUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgICAgIC8vIFVzZSBuZXh0RWxlbWVudFNpYmxpbmcgaW5zdGVhZCBvZiBuZXh0U2libGluZyB0byBhdm9pZCB0ZXh0L2NvbW1lbnQgbm9kZXNcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZOb2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgbmV4dCBlbmFibGVkIG9wdGlvbiBhZnRlciB0aGUgYWN0aXZlIG9wdGlvbi5cbiAgICAgKiBAcGFyYW0gc3RyaWRlIC0gSG93IG1hbnkgb3B0aW9ucyB0byBcImp1bXBcIiBvdmVyIGluIG9yZGVyIHRvIHNlbGVjdCB0aGUgbmV4dCBvcHRpb24uXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgUGFnZVVwL1BhZ2VEb3duIGJlaGF2aW9ycyB3aGVyZSBwcmVzc2luZyB0aGVzZSBrZXlzXG4gICAgICogc2Nyb2xscyB0aGUgcGlja2VyIGJ5IG1vcmUgdGhhbiAxIG9wdGlvbi4gRm9yIGV4YW1wbGUsIGEgc3RyaWRlIG9mIDUgbWVhbnMgc2VsZWN0XG4gICAgICogdGhlIGVuYWJsZWQgb3B0aW9uIDUgb3B0aW9ucyBiZWZvcmUgdGhlIGFjdGl2ZSBvbmUuIE5vdGUgdGhhdCB0aGUgYWN0dWFsIG9wdGlvbiBzZWxlY3RlZFxuICAgICAqICBtYXkgYmUgcGFzdCB0aGUgc3RyaWRlIGlmIHRoZSBvcHRpb24gYXQgdGhlIHN0cmlkZSBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICB0aGlzLmZpbmRQcmV2aW91c09wdGlvbiA9IChzdHJpZGUgPSAxKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2ZUl0ZW1cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IGFjdGl2ZUl0ZW07XG4gICAgICBsZXQgbm9kZSA9IGFjdGl2ZUl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmlkZSA+IDApIHtcbiAgICAgICAgICBzdHJpZGUtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU9OLVBJQ0tFUi1DT0xVTU4tT1BUSU9OJyAmJiAhbm9kZS5kaXNhYmxlZCAmJiBzdHJpZGUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0Tm9kZSA9IG5vZGU7XG4gICAgICAgIC8vIFVzZSBwcmV2aW91c0VsZW1lbnRTaWJsaW5nIGluc3RlYWQgb2YgcHJldmlvdXNTaWJsaW5nIHRvIGF2b2lkIHRleHQvY29tbWVudCBub2Rlc1xuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH07XG4gICAgdGhpcy5vbktleURvd24gPSBldiA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBiZWxvdyBvcGVyYXRpb25zIHNob3VsZCBiZSBpbnZlcnRlZCB3aGVuIHJ1bm5pbmcgb24gYSBtb2JpbGUgZGV2aWNlLlxuICAgICAgICogRm9yIGV4YW1wbGUsIHN3aXBpbmcgdXAgd2lsbCBkaXNwYXRjaCBhbiBcIkFycm93VXBcIiBldmVudC4gT24gZGVza3RvcCxcbiAgICAgICAqIHRoaXMgc2hvdWxkIGNhdXNlIHRoZSBwcmV2aW91cyBvcHRpb24gdG8gYmUgc2VsZWN0ZWQuIE9uIG1vYmlsZSwgc3dpcGluZ1xuICAgICAgICogdXAgY2F1c2VzIGEgdmlldyB0byBzY3JvbGwgZG93bi4gQXMgYSByZXN1bHQsIHN3aXBpbmcgdXAgb24gbW9iaWxlIHNob3VsZFxuICAgICAgICogY2F1c2UgdGhlIG5leHQgb3B0aW9uIHRvIGJlIHNlbGVjdGVkLiBUaGUgSG9tZS9FbmQgb3BlcmF0aW9ucyByZW1haW5cbiAgICAgICAqIHVuY2hhbmdlZCBiZWNhdXNlIHRob3NlIGFsd2F5cyByZXByZXNlbnQgdGhlIGZpcnN0L2xhc3Qgb3B0aW9ucywgcmVzcGVjdGl2ZWx5LlxuICAgICAgICovXG4gICAgICBjb25zdCBtb2JpbGUgPSBpc1BsYXRmb3JtKCdtb2JpbGUnKTtcbiAgICAgIGxldCBuZXdPcHRpb24gPSBudWxsO1xuICAgICAgc3dpdGNoIChldi5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBuZXdPcHRpb24gPSBtb2JpbGUgPyB0aGlzLmZpbmRQcmV2aW91c09wdGlvbigpIDogdGhpcy5maW5kTmV4dE9wdGlvbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBuZXdPcHRpb24gPSBtb2JpbGUgPyB0aGlzLmZpbmROZXh0T3B0aW9uKCkgOiB0aGlzLmZpbmRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgIG5ld09wdGlvbiA9IG1vYmlsZSA/IHRoaXMuZmluZE5leHRPcHRpb24oNSkgOiB0aGlzLmZpbmRQcmV2aW91c09wdGlvbig1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgIG5ld09wdGlvbiA9IG1vYmlsZSA/IHRoaXMuZmluZFByZXZpb3VzT3B0aW9uKDUpIDogdGhpcy5maW5kTmV4dE9wdGlvbig1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgYW4gaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uLFxuICAgICAgICAgICAqIHNvIHdlIGRvIG5vdCB1c2UgZmlyc3RFbGVtZW50Q2hpbGQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbmV3T3B0aW9uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tcGlja2VyLWNvbHVtbi1vcHRpb246Zmlyc3Qtb2YtdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgYW4gaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uLFxuICAgICAgICAgICAqIHNvIHdlIGRvIG5vdCB1c2UgbGFzdEVsZW1lbnRDaGlsZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBuZXdPcHRpb24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbjpsYXN0LW9mLXR5cGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChuZXdPcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXdPcHRpb24udmFsdWUpO1xuICAgICAgICAvLyBUaGlzIHN0b3BzIGFueSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igc3VjaCBhcyBzY3JvbGxpbmdcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgdGV4dCBmb3IgYXJpYS12YWx1ZXRleHQuXG4gICAgICovXG4gICAgdGhpcy5nZXRPcHRpb25WYWx1ZVRleHQgPSBlbCA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gZWwgPyAoX2EgPSBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZWwuaW5uZXJUZXh0IDogJyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYW4gZWxlbWVudCB0aGF0IG92ZXJsYXlzIHRoZSBjb2x1bW4uIFRoaXMgZWxlbWVudCBpcyBmb3IgYXNzaXN0aXZlXG4gICAgICogdGVjaCB0byBhbGxvdyB1c2VycyB0byBuYXZpZ2F0ZSB0aGUgY29sdW1uIHVwL2Rvd24uIFRoaXMgZWxlbWVudCBzaG91bGQgcmVjZWl2ZVxuICAgICAqIGZvY3VzIGFzIGl0IGxpc3RlbnMgZm9yIHN5bnRoZXNpemVkIGtleWJvYXJkIGV2ZW50cyBhcyByZXF1aXJlZCBieSB0aGVcbiAgICAgKiBzbGlkZXIgcm9sZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL1JvbGVzL3NsaWRlcl9yb2xlXG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJBc3Npc3RpdmVGb2N1c2FibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2ZUl0ZW1cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgY29uc3QgdmFsdWVUZXh0ID0gdGhpcy5nZXRPcHRpb25WYWx1ZVRleHQoYWN0aXZlSXRlbSk7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdXNpbmcgdGhlIHBpY2tlciwgdGhlIHZhbHVldGV4dCBwcm92aWRlcyBpbXBvcnRhbnQgY29udGV4dCB0aGF0IHZhbHVlbm93XG4gICAgICAgKiBkb2VzIG5vdC4gQWRkaXRpb25hbGx5LCB1c2luZyBub24temVybyB2YWx1ZW1pbi92YWx1ZW1heCB2YWx1ZXMgY2FuIGNhdXNlXG4gICAgICAgKiBXZWJLaXQgdG8gaW5jb3JyZWN0bHkgYW5ub3VuY2UgbnVtZXJpYyB2YWx1ZXRleHQgdmFsdWVzIChzdWNoIGFzIGEgeWVhclxuICAgICAgICogbGlrZSBcIjIwMjRcIikgYXMgcGVyY2VudGFnZXM6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNzMxMjZcbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICByZWY6IGVsID0+IHRoaXMuYXNzaXN0aXZlRm9jdXNhYmxlID0gZWwsXG4gICAgICAgIGNsYXNzOiBcImFzc2lzdGl2ZS1mb2N1c2FibGVcIixcbiAgICAgICAgcm9sZTogXCJzbGlkZXJcIixcbiAgICAgICAgdGFiaW5kZXg6IHRoaXMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiAwLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5hcmlhTGFiZWwsXG4gICAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgICBcImFyaWEtdmFsdWVtYXhcIjogMCxcbiAgICAgICAgXCJhcmlhLXZhbHVlbm93XCI6IDAsXG4gICAgICAgIFwiYXJpYS12YWx1ZXRleHRcIjogdmFsdWVUZXh0LFxuICAgICAgICBcImFyaWEtb3JpZW50YXRpb25cIjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBvbktleURvd246IGV2ID0+IHRoaXMub25LZXlEb3duKGV2KVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IG51bGw7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sb3IgPSAncHJpbWFyeSc7XG4gICAgdGhpcy5udW1lcmljSW5wdXQgPSBmYWxzZTtcbiAgfVxuICBhcmlhTGFiZWxDaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSBuZXdWYWx1ZTtcbiAgfVxuICB2YWx1ZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5pc0NvbHVtblZpc2libGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogT25seSBzY3JvbGwgdGhlIGFjdGl2ZSBpdGVtIGludG8gdmlldyB3aGVuIHRoZSBwaWNrZXIgY29sdW1uXG4gICAgICAgKiBpcyBhY3RpdmVseSB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgICAgICovXG4gICAgICB0aGlzLnNjcm9sbEFjdGl2ZUl0ZW1JbnRvVmlldyh0cnVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE9ubHkgc2V0dXAgc2Nyb2xsIGxpc3RlbmVyc1xuICAgKiB3aGVuIHRoZSBwaWNrZXIgaXMgdmlzaWJsZSwgb3RoZXJ3aXNlXG4gICAqIHRoZSBjb250YWluZXIgd2lsbCBoYXZlIGEgc2Nyb2xsXG4gICAqIGhlaWdodCBvZiAwcHguXG4gICAqL1xuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAvKipcbiAgICAgKiBXZSBjYWNoZSBwYXJlbnRFbCBpbiBhIGxvY2FsIHZhcmlhYmxlXG4gICAgICogc28gd2UgZG9uJ3QgbmVlZCB0byBrZWVwIGFjY2Vzc2luZ1xuICAgICAqIHRoZSBjbGFzcyB2YXJpYWJsZSAod2hpY2ggY29tZXMgd2l0aFxuICAgICAqIGEgc21hbGwgcGVyZm9ybWFuY2UgaGl0KVxuICAgICAqL1xuICAgIGNvbnN0IHBhcmVudEVsID0gdGhpcy5wYXJlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXBpY2tlcicpO1xuICAgIGNvbnN0IHZpc2libGVDYWxsYmFjayA9IGVudHJpZXMgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBCcm93c2VycyB3aWxsIHNvbWV0aW1lcyBncm91cCBtdWx0aXBsZSBJTyBldmVudHMgaW50byBhIHNpbmdsZSBjYWxsYmFjay5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCB3ZSB3YW50IHRvIGdyYWIgdGhlIGxhc3QvbW9zdCByZWNlbnQgZXZlbnQgaW4gY2FzZSB0aGVyZSBhcmUgbXVsdGlwbGUgZXZlbnRzLlxuICAgICAgICovXG4gICAgICBjb25zdCBldiA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChldi5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYWN0aXZlSXRlbSxcbiAgICAgICAgICBlbFxuICAgICAgICB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0NvbHVtblZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmVjYXVzZSB0aGlzIGluaXRpYWwgY2FsbCB0byBzY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcgaGFzIHRvIGZpcmUgYmVmb3JlXG4gICAgICAgICAqIHRoZSBzY3JvbGwgbGlzdGVuZXIgaXMgc2V0IHVwLCB3ZSBuZWVkIHRvIG1hbmFnZSB0aGUgYWN0aXZlIGNsYXNzIG1hbnVhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgb2xkQWN0aXZlID0gZ2V0RWxlbWVudFJvb3QoZWwpLnF1ZXJ5U2VsZWN0b3IoYC4ke1BJQ0tFUl9JVEVNX0FDVElWRV9DTEFTU31gKTtcbiAgICAgICAgaWYgKG9sZEFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UGlja2VySXRlbUFjdGl2ZVN0YXRlKG9sZEFjdGl2ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlSXRlbUludG9WaWV3KCk7XG4gICAgICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgdGhpcy5zZXRQaWNrZXJJdGVtQWN0aXZlU3RhdGUoYWN0aXZlSXRlbSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNDb2x1bW5WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3lTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcm9vdCB0byBiZSB0aGUgcGFyZW50IHBpY2tlciBlbGVtZW50XG4gICAgICogVGhpcyBjYXVzZXMgdGhlIElPIGNhbGxiYWNrXG4gICAgICogdG8gYmUgZmlyZWQgaW4gV2ViS2l0IGFzIHNvb24gYXMgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyB2aXNpYmxlLiBJZiB3ZSB1c2VkIHRoZSBkZWZhdWx0IHJvb3QgdmFsdWVcbiAgICAgKiB0aGVuIFdlYktpdCB3b3VsZCBvbmx5IGZpcmUgdGhlIElPIGNhbGxiYWNrXG4gICAgICogYWZ0ZXIgYW55IGFuaW1hdGlvbnMgKHN1Y2ggYXMgYSBtb2RhbCB0cmFuc2l0aW9uKVxuICAgICAqIGZpbmlzaGVkLCBhbmQgdGhlcmUgd291bGQgcG90ZW50aWFsbHkgYmUgYSBmbGlja2VyLlxuICAgICAqL1xuICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih2aXNpYmxlQ2FsbGJhY2ssIHtcbiAgICAgIHRocmVzaG9sZDogMC4wMDEsXG4gICAgICByb290OiB0aGlzLnBhcmVudEVsXG4gICAgfSkub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgICBpZiAocGFyZW50RWwgIT09IG51bGwpIHtcbiAgICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICAgIHBhcmVudEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lvbklucHV0TW9kZUNoYW5nZScsIGV2ID0+IHRoaXMuaW5wdXRNb2RlQ2hhbmdlKGV2KSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGFjdGl2ZUl0ZW0sXG4gICAgICBpc0NvbHVtblZpc2libGUsXG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChpc0NvbHVtblZpc2libGUgJiYgIWFjdGl2ZUl0ZW0pIHtcbiAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gZWwucXVlcnlTZWxlY3RvcignaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uJyk7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBwaWNrZXIgY29sdW1uIGRvZXMgbm90IGhhdmUgYW4gYWN0aXZlIGl0ZW0gYW5kIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgcGlja2VyIGNvbHVtbiwgdGhhdCBtZWFuc1xuICAgICAgICogdGhlIHZhbHVlIGlzIG91dCBvZiBib3VuZHMuIEluIHRoaXMgY2FzZSwgd2UgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGVcbiAgICAgICAqIGZpcnN0IGl0ZW0gdG8gbWF0Y2ggdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29sdW1uLlxuICAgICAgICpcbiAgICAgICAqL1xuICAgICAgaWYgKGZpcnN0T3B0aW9uICE9PSBudWxsICYmIGZpcnN0T3B0aW9uLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgYXN5bmMgc2Nyb2xsQWN0aXZlSXRlbUludG9WaWV3KHNtb290aCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYWN0aXZlRWwgPSB0aGlzLmFjdGl2ZUl0ZW07XG4gICAgaWYgKGFjdGl2ZUVsKSB7XG4gICAgICB0aGlzLmNlbnRlclBpY2tlckl0ZW1JblZpZXcoYWN0aXZlRWwsIHNtb290aCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgcHJvcCBhbmQgZmlyZXMgdGhlIGlvbkNoYW5nZSBldmVudC5cbiAgICogVGhpcyBpcyB1c2VkIHdoZW4gd2UgbmVlZCB0byBmaXJlIGlvbkNoYW5nZSBmcm9tXG4gICAqIHVzZXItZ2VuZXJhdGVkIGV2ZW50cyB0aGF0IGNhbm5vdCBiZSBjYXVnaHQgd2l0aCBub3JtYWxcbiAgICogaW5wdXQvY2hhbmdlIGV2ZW50IGxpc3RlbmVycy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkID09PSB0cnVlIHx8IHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIHNjcm9sbGFibGUgY29udGFpbmVyIHdpdGhpbiB0aGUgcGlja2VyIGNvbHVtbi5cbiAgICogVXNlIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGdsb2JhbCBgcGlja2VyQ29sdW1uLmZvY3VzKClgLlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuYXNzaXN0aXZlRm9jdXNhYmxlKSB7XG4gICAgICB0aGlzLmFzc2lzdGl2ZUZvY3VzYWJsZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB2YXIgX2E7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSAoX2EgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnU2VsZWN0IGEgdmFsdWUnO1xuICB9XG4gIGdldCBhY3RpdmVJdGVtKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbi1vcHRpb24nKSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmluZChvcHRpb24gPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgd2hvbGUgcGlja2VyIGNvbHVtbiBpcyBkaXNhYmxlZCwgdGhlIGN1cnJlbnQgdmFsdWUgc2hvdWxkIGFwcGVhciBhY3RpdmVcbiAgICAgICAqIElmIHRoZSBjdXJyZW50IHZhbHVlIGl0ZW0gaXMgc3BlY2lmaWNhbGx5IGRpc2FibGVkLCBpdCBzaG91bGQgbm90IGFwcGVhciBhY3RpdmVcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzQWN0aXZlLFxuICAgICAgbnVtZXJpY0lucHV0XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnYTIyMWRjMTBmMWViN2M0MTYzN2ExNmQyYzcxNjdjMTY5Mzk4MjJmZCcsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgWydwaWNrZXItY29sdW1uLWFjdGl2ZSddOiBpc0FjdGl2ZSxcbiAgICAgICAgWydwaWNrZXItY29sdW1uLW51bWVyaWMtaW5wdXQnXTogbnVtZXJpY0lucHV0LFxuICAgICAgICBbJ3BpY2tlci1jb2x1bW4tZGlzYWJsZWQnXTogZGlzYWJsZWRcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5yZW5kZXJBc3Npc3RpdmVGb2N1c2FibGUoKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnODFiMDY1NmY2MDY4NTZmM2RjMGE2NTdiZjE2N2Q4MWE1MDExNDA1ZScsXG4gICAgICBuYW1lOiBcInByZWZpeFwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNzFiOWRlNjdjMDQxNTAyNTVkZDY2NTkyNjAxYzlkOTI2ZGIwYzMxYycsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgY2xhc3M6IFwicGlja2VyLW9wdHNcIixcbiAgICAgIHJlZjogZWwgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbEVsID0gZWw7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGFuIGVsZW1lbnQgaGFzIGFuIG92ZXJsYXkgc2Nyb2xsIHN0eWxlIGFuZFxuICAgICAgICogYSBmaXhlZCBoZWlnaHQsIEZpcmVmb3ggd2lsbCBmb2N1cyB0aGUgc2Nyb2xsYWJsZVxuICAgICAgICogY29udGFpbmVyIGlmIHRoZSBjb250ZW50IGV4Y2VlZHMgdGhlIGNvbnRhaW5lcidzXG4gICAgICAgKiBkaW1lbnNpb25zLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgY2F1c2VzIGtleWJvYXJkIG5hdmlnYXRpb24gdG8gZm9jdXMgdG8gdGhpc1xuICAgICAgICogZWxlbWVudCBpbnN0ZWFkIG9mIGdvaW5nIHRvIHRoZSBuZXh0IGVsZW1lbnQgaW5cbiAgICAgICAqIHRoZSB0YWIgb3JkZXIuXG4gICAgICAgKlxuICAgICAgICogVGhlIGRlc2lyZWQgYmVoYXZpb3IgaXMgZm9yIHRoZSB1c2VyIHRvIGJlIGFibGUgdG9cbiAgICAgICAqIGZvY3VzIHRoZSBhc3Npc3RpdmUgZm9jdXNhYmxlIGVsZW1lbnQgYW5kIHRhYiB0b1xuICAgICAgICogdGhlIG5leHQgZWxlbWVudCBpbiB0aGUgdGFiIG9yZGVyLiBJbnN0ZWFkIG9mIHRhYmJpbmdcbiAgICAgICAqIHRvIHRoaXMgZWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBUbyBwcmV2ZW50IHRoaXMsIHdlIHNldCB0aGUgdGFiSW5kZXggdG8gLTEuIFRoaXNcbiAgICAgICAqIHdpbGwgbWF0Y2ggdGhlIGJlaGF2aW9yIG9mIHRoZSBvdGhlciBicm93c2Vycy5cbiAgICAgICAqL1xuICAgICAgdGFiSW5kZXg6IC0xXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdlYmRjMmYwOGM4M2RiMGNmMTdiNGJlMjlmMjhmY2IwMGY1Mjk2MDFlJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1pdGVtLWVtcHR5XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgXCJcXHUwMEEwXCIpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzA0YWI1NmZjYjhlNmE3ZDZhZjAwMjA0YzQ1NjBmZWI5OWZmMzRhNTYnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWl0ZW0tZW1wdHlcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBcIlxcdTAwQTBcIiksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNmNmOGY1Mzg5MDNmYWYwZmUxZTQxMzBmM2VhZjdiNGUyZTE3Y2I1MicsXG4gICAgICBjbGFzczogXCJwaWNrZXItaXRlbS1lbXB0eVwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIFwiXFx1MDBBMFwiKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMWNjMzkyMzA3YjcwYzU3NmJlNWI4MWI1MjI2Y2ViYTczNTk1N2YwZidcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICcyM2UzZjI4ZTJhOTliOWFhOGI3YzhmNjhhZDk1ODNlM2NhNjNlOWUyJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1pdGVtLWVtcHR5XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgXCJcXHUwMEEwXCIpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzhhMDU2M2YwOTc4MGMzMTE2YWYwY2FlYmU0ZjQwNTg3ZWMxZjA0MWYnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWl0ZW0tZW1wdHlcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBcIlxcdTAwQTBcIiksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMTMyMDdlMjQ4ZmMwMDA5ZjM3ZTBjOTBhM2VlMmJhYzJmMTMwYjg1NicsXG4gICAgICBjbGFzczogXCJwaWNrZXItaXRlbS1lbXB0eVwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIFwiXFx1MDBBMFwiKSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzU1ZWNmMmFiNWYyMTRmOTM2YzI0NjhjYmRiNzk1MmRhZjg5NDE2YjgnLFxuICAgICAgbmFtZTogXCJzdWZmaXhcIlxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFtcImFyaWFMYWJlbENoYW5nZWRcIl0sXG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IFBJQ0tFUl9JVEVNX0FDVElWRV9DTEFTUyA9ICdvcHRpb24tYWN0aXZlJztcblBpY2tlckNvbHVtbi5zdHlsZSA9IElvblBpY2tlckNvbHVtblN0eWxlMDtcbmV4cG9ydCB7IFBpY2tl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
