import {
  getElementRoot
} from "./chunk-RRWPYKYY.js";
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

// node_modules/@ionic/core/dist/esm/ion-picker.entry.js
var pickerIosCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}";
var IonPickerIosStyle0 = pickerIosCss;
var pickerMdCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}";
var IonPickerMdStyle0 = pickerMdCss;
var Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInputModeChange = createEvent(this, "ionInputModeChange", 7);
    this.useInputMode = false;
    this.isInHighlightBounds = (ev) => {
      const {
        highlightEl
      } = this;
      if (!highlightEl) {
        return false;
      }
      const bbox = highlightEl.getBoundingClientRect();
      const outsideX = ev.clientX < bbox.left || ev.clientX > bbox.right;
      const outsideY = ev.clientY < bbox.top || ev.clientY > bbox.bottom;
      if (outsideX || outsideY) {
        return false;
      }
      return true;
    };
    this.onFocusOut = (ev) => {
      const {
        relatedTarget
      } = ev;
      if (!relatedTarget || relatedTarget.tagName !== "ION-PICKER-COLUMN" && relatedTarget !== this.inputEl) {
        this.exitInputMode();
      }
    };
    this.onFocusIn = (ev) => {
      const {
        target
      } = ev;
      if (target.tagName !== "ION-PICKER-COLUMN") {
        return;
      }
      if (!this.actionOnClick) {
        const columnEl = target;
        const allowInput = columnEl.numericInput;
        if (allowInput) {
          this.enterInputMode(columnEl, false);
        } else {
          this.exitInputMode();
        }
      }
    };
    this.onClick = () => {
      const {
        actionOnClick
      } = this;
      if (actionOnClick) {
        actionOnClick();
        this.actionOnClick = void 0;
      }
    };
    this.onPointerDown = (ev) => {
      const {
        useInputMode,
        inputModeColumn,
        el
      } = this;
      if (this.isInHighlightBounds(ev)) {
        if (useInputMode) {
          if (ev.target.tagName === "ION-PICKER-COLUMN") {
            if (inputModeColumn && inputModeColumn === ev.target) {
              this.actionOnClick = () => {
                this.enterInputMode();
              };
            } else {
              this.actionOnClick = () => {
                this.enterInputMode(ev.target);
              };
            }
          } else {
            this.actionOnClick = () => {
              this.exitInputMode();
            };
          }
        } else {
          const columns = el.querySelectorAll("ion-picker-column.picker-column-numeric-input");
          const columnEl = columns.length === 1 ? ev.target : void 0;
          this.actionOnClick = () => {
            this.enterInputMode(columnEl);
          };
        }
        return;
      }
      this.actionOnClick = () => {
        this.exitInputMode();
      };
    };
    this.enterInputMode = (columnEl, focusInput = true) => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      const hasInputColumn = el.querySelector("ion-picker-column.picker-column-numeric-input");
      if (!hasInputColumn) {
        return;
      }
      this.useInputMode = true;
      this.inputModeColumn = columnEl;
      if (focusInput) {
        if (this.destroyKeypressListener) {
          this.destroyKeypressListener();
          this.destroyKeypressListener = void 0;
        }
        inputEl.focus();
      } else {
        el.addEventListener("keypress", this.onKeyPress);
        this.destroyKeypressListener = () => {
          el.removeEventListener("keypress", this.onKeyPress);
        };
      }
      this.emitInputModeChange();
    };
    this.onKeyPress = (ev) => {
      const {
        inputEl
      } = this;
      if (!inputEl) {
        return;
      }
      const parsedValue = parseInt(ev.key, 10);
      if (!Number.isNaN(parsedValue)) {
        inputEl.value += ev.key;
        this.onInputChange();
      }
    };
    this.selectSingleColumn = () => {
      const {
        inputEl,
        inputModeColumn,
        singleColumnSearchTimeout
      } = this;
      if (!inputEl || !inputModeColumn) {
        return;
      }
      const options = Array.from(inputModeColumn.querySelectorAll("ion-picker-column-option")).filter((el) => el.disabled !== true);
      if (singleColumnSearchTimeout) {
        clearTimeout(singleColumnSearchTimeout);
      }
      this.singleColumnSearchTimeout = setTimeout(() => {
        inputEl.value = "";
        this.singleColumnSearchTimeout = void 0;
      }, 1e3);
      if (inputEl.value.length >= 3) {
        const startIndex = inputEl.value.length - 2;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        this.selectSingleColumn();
        return;
      }
      const findItemFromCompleteValue = options.find(({
        textContent
      }) => {
        const parsedText = textContent.replace(/^0+(?=[1-9])|0+(?=0$)/, "");
        return parsedText === inputEl.value;
      });
      if (findItemFromCompleteValue) {
        inputModeColumn.setValue(findItemFromCompleteValue.value);
        return;
      }
      if (inputEl.value.length === 2) {
        const changedCharacter = inputEl.value.substring(inputEl.value.length - 1);
        inputEl.value = changedCharacter;
        this.selectSingleColumn();
      }
    };
    this.searchColumn = (colEl, value, zeroBehavior = "start") => {
      if (!value) {
        return false;
      }
      const behavior = zeroBehavior === "start" ? /^0+/ : /0$/;
      value = value.replace(behavior, "");
      const option = Array.from(colEl.querySelectorAll("ion-picker-column-option")).find((el) => {
        return el.disabled !== true && el.textContent.replace(behavior, "") === value;
      });
      if (option) {
        colEl.setValue(option.value);
      }
      return !!option;
    };
    this.multiColumnSearch = (firstColumn, secondColumn, input) => {
      if (input.length === 0) {
        return;
      }
      const inputArray = input.split("");
      const hourValue = inputArray.slice(0, 2).join("");
      const foundHour = this.searchColumn(firstColumn, hourValue);
      if (inputArray.length > 2 && foundHour) {
        const minuteValue = inputArray.slice(2, 4).join("");
        this.searchColumn(secondColumn, minuteValue);
      } else if (!foundHour && inputArray.length >= 1) {
        let singleDigitHour = inputArray[0];
        let singleDigitFound = this.searchColumn(firstColumn, singleDigitHour);
        if (!singleDigitFound) {
          inputArray.shift();
          singleDigitHour = inputArray[0];
          singleDigitFound = this.searchColumn(firstColumn, singleDigitHour);
        }
        if (singleDigitFound && inputArray.length > 1) {
          const remainingDigits = inputArray.slice(1, 3).join("");
          this.searchColumn(secondColumn, remainingDigits);
        }
      }
    };
    this.selectMultiColumn = () => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      const numericPickers = Array.from(el.querySelectorAll("ion-picker-column")).filter((col) => col.numericInput);
      const firstColumn = numericPickers[0];
      const lastColumn = numericPickers[1];
      let value = inputEl.value;
      if (value.length > 4) {
        const startIndex = inputEl.value.length - 4;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        value = newString;
      }
      this.multiColumnSearch(firstColumn, lastColumn, value);
    };
    this.onInputChange = () => {
      const {
        useInputMode,
        inputEl,
        inputModeColumn
      } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      if (inputModeColumn) {
        this.selectSingleColumn();
      } else {
        this.selectMultiColumn();
      }
    };
    this.emitInputModeChange = () => {
      const {
        useInputMode,
        inputModeColumn
      } = this;
      this.ionInputModeChange.emit({
        useInputMode,
        inputModeColumn
      });
    };
  }
  /**
   * When the picker is interacted with
   * we need to prevent touchstart so other
   * gestures do not fire. For example,
   * scrolling on the wheel picker
   * in ion-datetime should not cause
   * a card modal to swipe to close.
   */
  preventTouchStartPropagation(ev) {
    ev.stopPropagation();
  }
  componentWillLoad() {
    getElementRoot(this.el).addEventListener("focusin", this.onFocusIn);
    getElementRoot(this.el).addEventListener("focusout", this.onFocusOut);
  }
  /**
   * @internal
   * Exits text entry mode for the picker
   * This method blurs the hidden input
   * and cause the keyboard to dismiss.
   */
  exitInputMode() {
    return __async(this, null, function* () {
      const {
        inputEl,
        useInputMode
      } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      this.useInputMode = false;
      this.inputModeColumn = void 0;
      inputEl.blur();
      inputEl.value = "";
      if (this.destroyKeypressListener) {
        this.destroyKeypressListener();
        this.destroyKeypressListener = void 0;
      }
      this.emitInputModeChange();
    });
  }
  render() {
    return h(Host, {
      key: "28f81e4ed44a633178561757c5199c2c98f94b74",
      onPointerDown: (ev) => this.onPointerDown(ev),
      onClick: () => this.onClick()
    }, h("input", {
      key: "abb3d1ad25ef63856af7804111175a4d50008bc0",
      "aria-hidden": "true",
      tabindex: -1,
      inputmode: "numeric",
      type: "number",
      onKeyDown: (ev) => {
        var _a;
        if (ev.key === "Enter") {
          (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.blur();
        }
      },
      ref: (el) => this.inputEl = el,
      onInput: () => this.onInputChange(),
      onBlur: () => this.exitInputMode()
    }), h("div", {
      key: "334a5abdc02e6b127c57177f626d7e4ff5526183",
      class: "picker-before"
    }), h("div", {
      key: "ffd6271931129e88fc7c820e919d684899e420c5",
      class: "picker-after"
    }), h("div", {
      key: "78d1d95fd09e04f154ea59f24a1cece72c47ed7b",
      class: "picker-highlight",
      ref: (el) => this.highlightEl = el
    }), h("slot", {
      key: "0bd5b9f875d3c71f6cbbde2054baeb1b0a2e8cd5"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Picker.style = {
  ios: IonPickerIosStyle0,
  md: IonPickerMdStyle0
};
export {
  Picker as ion_picker
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEVsZW1lbnRSb290IH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmNvbnN0IHBpY2tlcklvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjIwMHB4O2RpcmVjdGlvbjpsdHI7ei1pbmRleDowfTpob3N0IC5waWNrZXItYmVmb3JlLDpob3N0IC5waWNrZXItYWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3otaW5kZXg6MTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0IC5waWNrZXItYmVmb3Jle3RvcDowO2hlaWdodDo4M3B4fTpob3N0IC5waWNrZXItYmVmb3Jle2luc2V0LWlubGluZS1zdGFydDowfTpob3N0IC5waWNrZXItYWZ0ZXJ7dG9wOjExNnB4O2hlaWdodDo4NHB4fTpob3N0IC5waWNrZXItYWZ0ZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QgLnBpY2tlci1oaWdobGlnaHR7Ym9yZGVyLXJhZGl1czp2YXIoLS1oaWdobGlnaHQtYm9yZGVyLXJhZGl1cywgOHB4KTtsZWZ0OjA7cmlnaHQ6MDt0b3A6NTAlO2JvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtoZWlnaHQ6MzRweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2JhY2tncm91bmQ6dmFyKC0taGlnaGxpZ2h0LWJhY2tncm91bmQpO3otaW5kZXg6LTF9Omhvc3QgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7b3V0bGluZTowO2NsaXA6cmVjdCgwIDAgMCAwKTtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpmaXJzdC1vZi10eXBlKXt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpsYXN0LW9mLXR5cGUpe3RleHQtYWxpZ246ZW5kfTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpvbmx5LWNoaWxkKXt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdCAucGlja2VyLWJlZm9yZXtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMjAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpKSwgdG8ocmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwLjgpIDEwMCUpfTpob3N0IC5waWNrZXItYWZ0ZXJ7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIHRvKHJnYmEodmFyKC0tZmFkZS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpKSwgMC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSAyMCUsIHJnYmEodmFyKC0tZmFkZS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpKSwgMC44KSAxMDAlKX06aG9zdCAucGlja2VyLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOnZhcigtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZWVlZWVmKSkpfVwiO1xuY29uc3QgSW9uUGlja2VySW9zU3R5bGUwID0gcGlja2VySW9zQ3NzO1xuY29uc3QgcGlja2VyTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtkaXJlY3Rpb246bHRyO3otaW5kZXg6MH06aG9zdCAucGlja2VyLWJlZm9yZSw6aG9zdCAucGlja2VyLWFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCAucGlja2VyLWJlZm9yZXt0b3A6MDtoZWlnaHQ6ODNweH06aG9zdCAucGlja2VyLWJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdCAucGlja2VyLWFmdGVye3RvcDoxMTZweDtoZWlnaHQ6ODRweH06aG9zdCAucGlja2VyLWFmdGVye2luc2V0LWlubGluZS1zdGFydDowfTpob3N0IC5waWNrZXItaGlnaGxpZ2h0e2JvcmRlci1yYWRpdXM6dmFyKC0taGlnaGxpZ2h0LWJvcmRlci1yYWRpdXMsIDhweCk7bGVmdDowO3JpZ2h0OjA7dG9wOjUwJTtib3R0b206MDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6Y2FsYygxMDAlIC0gMTZweCk7aGVpZ2h0OjM0cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtiYWNrZ3JvdW5kOnZhcigtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kKTt6LWluZGV4Oi0xfTpob3N0IGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46Zmlyc3Qtb2YtdHlwZSl7dGV4dC1hbGlnbjpzdGFydH06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46bGFzdC1vZi10eXBlKXt0ZXh0LWFsaWduOmVuZH06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46b25seS1jaGlsZCl7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QgLnBpY2tlci1iZWZvcmV7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIGNvbG9yLXN0b3AoOTAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDApKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwKSA5MCUpfTpob3N0IC5waWNrZXItYWZ0ZXJ7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDMwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIGNvbG9yLXN0b3AoOTAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDApKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDMwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwKSA5MCUpfVwiO1xuY29uc3QgSW9uUGlja2VyTWRTdHlsZTAgPSBwaWNrZXJNZENzcztcbmNvbnN0IFBpY2tlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25JbnB1dE1vZGVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0TW9kZUNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLnVzZUlucHV0TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbkhpZ2hsaWdodEJvdW5kcyA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaGlnaGxpZ2h0RWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFoaWdobGlnaHRFbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBiYm94ID0gaGlnaGxpZ2h0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBjbGlja2VkXG4gICAgICAgKiBvdXRzaWRlIHRoZSBib3VuZHMgb2YgdGhlIGhpZ2hsaWdodC5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgb3V0c2lkZVggPSBldi5jbGllbnRYIDwgYmJveC5sZWZ0IHx8IGV2LmNsaWVudFggPiBiYm94LnJpZ2h0O1xuICAgICAgY29uc3Qgb3V0c2lkZVkgPSBldi5jbGllbnRZIDwgYmJveC50b3AgfHwgZXYuY2xpZW50WSA+IGJib3guYm90dG9tO1xuICAgICAgaWYgKG91dHNpZGVYIHx8IG91dHNpZGVZKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIG5vIGxvbmdlciBmb2N1c2VkXG4gICAgICogb24gYSBwaWNrZXIgY29sdW1uLCB0aGVuIHdlIHNob3VsZFxuICAgICAqIGV4aXQgaW5wdXQgbW9kZS4gQW4gZXhjZXB0aW9uIGlzIG1hZGVcbiAgICAgKiBmb3IgdGhlIGlucHV0IGluIHRoZSBwaWNrZXIgc2luY2UgaGF2aW5nXG4gICAgICogdGhhdCBmb2N1c2VkIG1lYW5zIHdlIGFyZSBzdGlsbCBpbiBpbnB1dCBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMub25Gb2N1c091dCA9IGV2ID0+IHtcbiAgICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSA9IGV2O1xuICAgICAgaWYgKCFyZWxhdGVkVGFyZ2V0IHx8IHJlbGF0ZWRUYXJnZXQudGFnTmFtZSAhPT0gJ0lPTi1QSUNLRVItQ09MVU1OJyAmJiByZWxhdGVkVGFyZ2V0ICE9PSB0aGlzLmlucHV0RWwpIHtcbiAgICAgICAgdGhpcy5leGl0SW5wdXRNb2RlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHBpY2tlciBjb2x1bW5zIHJlY2VpdmUgZm9jdXNcbiAgICAgKiB0aGUgcGFyZW50IHBpY2tlciBuZWVkcyB0byBkZXRlcm1pbmVcbiAgICAgKiB3aGV0aGVyIHRvIGVudGVyL2V4aXQgaW5wdXQgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLm9uRm9jdXNJbiA9IGV2ID0+IHtcbiAgICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0XG4gICAgICB9ID0gZXY7XG4gICAgICAvKipcbiAgICAgICAqIER1ZSB0byBicm93c2VyIGRpZmZlcmVuY2VzIGluIGhvdy93aGVuIGZvY3VzXG4gICAgICAgKiBpcyBkaXNwYXRjaGVkIG9uIGNlcnRhaW4gZWxlbWVudHMsIHdlIG5lZWQgdG9cbiAgICAgICAqIG1ha2Ugc3VyZSB0aGF0IHRoaXMgZnVuY3Rpb24gb25seSBldmVyIHJ1bnMgd2hlblxuICAgICAgICogZm9jdXNpbmcgYSBwaWNrZXIgY29sdW1uLlxuICAgICAgICovXG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdJT04tUElDS0VSLUNPTFVNTicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB3ZSBoYXZlIGFjdGlvbk9uQ2xpY2tcbiAgICAgICAqIHRoZW4gdGhpcyBtZWFucyB0aGUgdXNlciBmb2N1c2VkXG4gICAgICAgKiBhIHBpY2tlciBjb2x1bW4gdmlhIG1vdXNlIG9yXG4gICAgICAgKiB0b3VjaCAoaS5lLiBhIFBvaW50ZXJFdmVudCkuIEFzIGEgcmVzdWx0LFxuICAgICAgICogd2Ugc2hvdWxkIG5vdCBlbnRlci9leGl0IGlucHV0IG1vZGVcbiAgICAgICAqIHVudGlsIHRoZSBjbGljayBldmVudCBoYXMgZmlyZWQsIHdoaWNoIGhhcHBlbnNcbiAgICAgICAqIGFmdGVyIHRoZSBgZm9jdXNpbmAgZXZlbnQuXG4gICAgICAgKlxuICAgICAgICogT3RoZXJ3aXNlLCB0aGUgdXNlciBsaWtlbHkgZm9jdXNlZFxuICAgICAgICogdGhlIGNvbHVtbiB1c2luZyB0aGVpciBrZXlib2FyZCBhbmRcbiAgICAgICAqIHdlIHNob3VsZCBlbnRlci9leGl0IGlucHV0IG1vZGUgYXV0b21hdGljYWxseS5cbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmFjdGlvbk9uQ2xpY2spIHtcbiAgICAgICAgY29uc3QgY29sdW1uRWwgPSB0YXJnZXQ7XG4gICAgICAgIGNvbnN0IGFsbG93SW5wdXQgPSBjb2x1bW5FbC5udW1lcmljSW5wdXQ7XG4gICAgICAgIGlmIChhbGxvd0lucHV0KSB7XG4gICAgICAgICAgdGhpcy5lbnRlcklucHV0TW9kZShjb2x1bW5FbCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZXhpdElucHV0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPbiBjbGljayB3ZSBuZWVkIHRvIHJ1biBhbiBhY3Rpb25PbkNsaWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCBoYXMgYmVlbiBzZXQgaW4gb25Qb2ludGVyRG93blxuICAgICAqIHNvIHRoYXQgd2UgZW50ZXIvZXhpdCBpbnB1dCBtb2RlIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGlvbk9uQ2xpY2tcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGFjdGlvbk9uQ2xpY2spIHtcbiAgICAgICAgYWN0aW9uT25DbGljaygpO1xuICAgICAgICB0aGlzLmFjdGlvbk9uQ2xpY2sgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGlja2luZyBhIGNvbHVtbiBhbHNvIGZvY3VzZXMgdGhlIGNvbHVtbiBvblxuICAgICAqIGNlcnRhaW4gYnJvd3NlcnMsIHNvIHdlIHVzZSBvblBvaW50ZXJEb3duXG4gICAgICogdG8gdGVsbCB0aGUgb25Gb2N1c0luIGZ1bmN0aW9uIHRoYXQgdXNlcnNcbiAgICAgKiBhcmUgdHJ5aW5nIHRvIGNsaWNrIHRoZSBjb2x1bW4gcmF0aGVyIHRoYW5cbiAgICAgKiBmb2N1cyB0aGUgY29sdW1uIHVzaW5nIHRoZSBrZXlib2FyZC4gV2hlbiB0aGVcbiAgICAgKiB1c2VyIGNvbXBsZXRlcyB0aGUgY2xpY2ssIHRoZSBvbkNsaWNrIGZ1bmN0aW9uXG4gICAgICogcnVucyBhbmQgcnVucyB0aGUgYWN0aW9uT25DbGljayBjYWxsYmFjay5cbiAgICAgKi9cbiAgICB0aGlzLm9uUG9pbnRlckRvd24gPSBldiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHVzZUlucHV0TW9kZSxcbiAgICAgICAgaW5wdXRNb2RlQ29sdW1uLFxuICAgICAgICBlbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5pc0luSGlnaGxpZ2h0Qm91bmRzKGV2KSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2Ugd2VyZSBhbHJlYWR5IGluXG4gICAgICAgICAqIGlucHV0IG1vZGUsIHRoZW4gd2Ugc2hvdWxkIGRldGVybWluZVxuICAgICAgICAgKiBpZiB3ZSB0YXBwZWQgYSBwYXJ0aWN1bGFyIGNvbHVtbiBhbmRcbiAgICAgICAgICogc2hvdWxkIHN3aXRjaCB0byBpbnB1dCBtb2RlIGZvclxuICAgICAgICAgKiB0aGF0IHNwZWNpZmljIGNvbHVtbi5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh1c2VJbnB1dE1vZGUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSB0YXBwZWQgYSBwaWNrZXIgY29sdW1uXG4gICAgICAgICAgICogdGhlbiB3ZSBzaG91bGQgZWl0aGVyIHN3aXRjaCB0byBpbnB1dFxuICAgICAgICAgICAqIG1vZGUgZm9yIHRoYXQgY29sdW1uIG9yIGFsbCBjb2x1bW5zLlxuICAgICAgICAgICAqIE90aGVyd2lzZSB3ZSBzaG91bGQgZXhpdCBpbnB1dCBtb2RlXG4gICAgICAgICAgICogc2luY2Ugd2UganVzdCB0YXBwZWQgdGhlIGhpZ2hsaWdodCBhbmRcbiAgICAgICAgICAgKiBub3QgYSBjb2x1bW4uXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnSU9OLVBJQ0tFUi1DT0xVTU4nKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHVzZXIgdGFwcyAyIGRpZmZlcmVudCBjb2x1bW5zXG4gICAgICAgICAgICAgKiB0aGVuIHdlIHNob3VsZCBqdXN0IHN3aXRjaCB0byBpbnB1dCBtb2RlXG4gICAgICAgICAgICAgKiBmb3IgdGhlIG5ldyBjb2x1bW4gcmF0aGVyIHRoYW4gc3dpdGNoaW5nIHRvXG4gICAgICAgICAgICAgKiBpbnB1dCBtb2RlIGZvciBhbGwgY29sdW1ucy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKGlucHV0TW9kZUNvbHVtbiAmJiBpbnB1dE1vZGVDb2x1bW4gPT09IGV2LnRhcmdldCkge1xuICAgICAgICAgICAgICB0aGlzLmFjdGlvbk9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcklucHV0TW9kZSgpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5hY3Rpb25PbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJJbnB1dE1vZGUoZXYudGFyZ2V0KTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25PbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmV4aXRJbnB1dE1vZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlIHdlcmUgbm90IGFscmVhZHkgaW5cbiAgICAgICAgICAgKiBpbnB1dCBtb2RlLCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAqIGVudGVyIGlucHV0IG1vZGUgZm9yIGFsbCBjb2x1bW5zLlxuICAgICAgICAgICAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZXJlIGlzIG9ubHkgMSBudW1lcmljIGlucHV0IGNvbHVtblxuICAgICAgICAgICAqIHRoZW4gd2Ugc2hvdWxkIHNraXAgbXVsdGkgY29sdW1uIGlucHV0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbi5waWNrZXItY29sdW1uLW51bWVyaWMtaW5wdXQnKTtcbiAgICAgICAgICBjb25zdCBjb2x1bW5FbCA9IGNvbHVtbnMubGVuZ3RoID09PSAxID8gZXYudGFyZ2V0IDogdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuYWN0aW9uT25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJJbnB1dE1vZGUoY29sdW1uRWwpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3Rpb25PbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmV4aXRJbnB1dE1vZGUoKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbnRlcnMgaW5wdXQgbW9kZSB0byBhbGxvd1xuICAgICAqIGZvciB0ZXh0IGVudHJ5IG9mIG51bWVyaWMgdmFsdWVzLlxuICAgICAqIElmIG9uIG1vYmlsZSwgd2UgZm9jdXMgYSBoaWRkZW4gaW5wdXRcbiAgICAgKiBmaWVsZCBzbyB0aGF0IHRoZSBvbiBzY3JlZW4ga2V5Ym9hcmRcbiAgICAgKiBpcyBicm91Z2h0IHVwLiBXaGVuIHRhYmJpbmcgdXNpbmcgYVxuICAgICAqIGtleWJvYXJkLCBwaWNrZXIgY29sdW1ucyByZWNlaXZlIGFuIG91dGxpbmVcbiAgICAgKiB0byBpbmRpY2F0ZSB0aGV5IGFyZSBmb2N1c2VkLiBBcyBhIHJlc3VsdCxcbiAgICAgKiB3ZSBzaG91bGQgbm90IGZvY3VzIHRoZSBoaWRkZW4gaW5wdXQgYXMgaXRcbiAgICAgKiB3b3VsZCBjYXVzZSB0aGUgb3V0bGluZSB0byBnbyBhd2F5LCBwcmV2ZW50aW5nXG4gICAgICogdXNlcnMgZnJvbSBoYXZpbmcgYW55IHZpc3VhbCBpbmRpY2F0aW9uIG9mIHdoaWNoXG4gICAgICogY29sdW1uIGlzIGZvY3VzZWQuXG4gICAgICovXG4gICAgdGhpcy5lbnRlcklucHV0TW9kZSA9IChjb2x1bW5FbCwgZm9jdXNJbnB1dCA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbCxcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogT25seSBhY3RpdmUgaW5wdXQgbW9kZSBpZiB0aGVyZSBpcyBhdFxuICAgICAgICogbGVhc3Qgb25lIGNvbHVtbiB0aGF0IGFjY2VwdHMgbnVtZXJpYyBpbnB1dC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaGFzSW5wdXRDb2x1bW4gPSBlbC5xdWVyeVNlbGVjdG9yKCdpb24tcGlja2VyLWNvbHVtbi5waWNrZXItY29sdW1uLW51bWVyaWMtaW5wdXQnKTtcbiAgICAgIGlmICghaGFzSW5wdXRDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiBjb2x1bW5FbCBpcyB1bmRlZmluZWQgdGhlblxuICAgICAgICogaXQgaXMgYXNzdW1lZCB0aGF0IGFsbCBudW1lcmljIHBpY2tlcnNcbiAgICAgICAqIGFyZSBlbGlnaWJsZSBmb3IgdGV4dCBlbnRyeS5cbiAgICAgICAqIChpLmUuIGhvdXIgYW5kIG1pbnV0ZSBjb2x1bW5zKVxuICAgICAgICovXG4gICAgICB0aGlzLnVzZUlucHV0TW9kZSA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0TW9kZUNvbHVtbiA9IGNvbHVtbkVsO1xuICAgICAgLyoqXG4gICAgICAgKiBVc2VycyB3aXRoIGEga2V5Ym9hcmQgYW5kIG1vdXNlIGNhblxuICAgICAgICogYWN0aXZhdGUgaW5wdXQgbW9kZSB3aGVyZSB0aGUgaW5wdXQgaXNcbiAgICAgICAqIGZvY3VzZWQgYXMgd2VsbCBhcyB3aGVuIGl0IGlzIG5vdCBmb2N1c2VkLFxuICAgICAgICogc28gd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgY2xlYW4gdXAgYW55XG4gICAgICAgKiBvbGQgbGlzdGVuZXJzLlxuICAgICAgICovXG4gICAgICBpZiAoZm9jdXNJbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMuZGVzdHJveUtleXByZXNzTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lLZXlwcmVzc0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8gRlctNTkwMCBVc2Uga2V5ZG93biBpbnN0ZWFkXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgdGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXRJbnB1dE1vZGVDaGFuZ2UoKTtcbiAgICB9O1xuICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSBwYXJzZUludChldi5rZXksIDEwKTtcbiAgICAgIC8qKlxuICAgICAgICogT25seSBudW1iZXJzIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgICAgKi9cbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICBpbnB1dEVsLnZhbHVlICs9IGV2LmtleTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdFNpbmdsZUNvbHVtbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbCxcbiAgICAgICAgaW5wdXRNb2RlQ29sdW1uLFxuICAgICAgICBzaW5nbGVDb2x1bW5TZWFyY2hUaW1lb3V0XG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghaW5wdXRFbCB8fCAhaW5wdXRNb2RlQ29sdW1uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGlucHV0TW9kZUNvbHVtbi5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbi1vcHRpb24nKSkuZmlsdGVyKGVsID0+IGVsLmRpc2FibGVkICE9PSB0cnVlKTtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdXNlcnMgcGF1c2UgZm9yIGEgYml0LCB0aGUgc2VhcmNoXG4gICAgICAgKiB2YWx1ZSBzaG91bGQgYmUgcmVzZXQgc2ltaWxhciB0byBob3cgYVxuICAgICAgICogPHNlbGVjdD4gYmVoYXZlcy4gU28gdHlwaW5nIFwiMzRcIiwgd2FpdGluZyxcbiAgICAgICAqIHRoZW4gdHlwaW5nIFwiNVwiIHNob3VsZCBzZWxlY3QgXCIwNVwiLlxuICAgICAgICovXG4gICAgICBpZiAoc2luZ2xlQ29sdW1uU2VhcmNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2luZ2xlQ29sdW1uU2VhcmNoVGltZW91dCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNpbmdsZUNvbHVtblNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5wdXRFbC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnNpbmdsZUNvbHVtblNlYXJjaFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIC8qKlxuICAgICAgICogRm9yIHZhbHVlcyB0aGF0IGFyZSBsb25nZXIgdGhhbiAyIGRpZ2l0cyBsb25nXG4gICAgICAgKiB3ZSBzaG91bGQgc2hpZnQgdGhlIHZhbHVlIG92ZXIgMSBjaGFyYWN0ZXJcbiAgICAgICAqIHRvIHRoZSBsZWZ0LiBTbyB0eXBpbmcgXCI0NTZcIiB3b3VsZCByZXN1bHQgaW4gXCI1NlwiLlxuICAgICAgICogVE9ETzogSWYgd2Ugd2FudCB0byBzdXBwb3J0IG1vcmUgdGhhbiBqdXN0XG4gICAgICAgKiB0aW1lIGVudHJ5LCB3ZSBzaG91bGQgdXBkYXRlIHRoaXMgdmFsdWUgdG8gYmVcbiAgICAgICAqIHRoZSBtYXggbGVuZ3RoIG9mIGFsbCBvZiB0aGUgcGlja2VyIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBpZiAoaW5wdXRFbC52YWx1ZS5sZW5ndGggPj0gMykge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5wdXRFbC52YWx1ZS5sZW5ndGggLSAyO1xuICAgICAgICBjb25zdCBuZXdTdHJpbmcgPSBpbnB1dEVsLnZhbHVlLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgICAgICAgaW5wdXRFbC52YWx1ZSA9IG5ld1N0cmluZztcbiAgICAgICAgdGhpcy5zZWxlY3RTaW5nbGVDb2x1bW4oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBDaGVja2luZyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGdldHMgcHJpb3JpdHlcbiAgICAgICAqIGZpcnN0LiBGb3IgZXhhbXBsZSwgaWYgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dFxuICAgICAgICogaXMgXCIxXCIgYW5kIHdlIGVudGVyZWQgXCIyXCIsIHRoZW4gdGhlIGNvbXBsZXRlIHZhbHVlXG4gICAgICAgKiBpcyBcIjEyXCIgYW5kIHdlIHNob3VsZCBzZWxlY3QgaG91ciAxMi5cbiAgICAgICAqXG4gICAgICAgKiBSZWdleCByZW1vdmVzIGFueSBsZWFkaW5nIHplcm9zIGZyb20gdmFsdWVzIGxpa2UgXCIwMlwiLFxuICAgICAgICogYnV0IGl0IGtlZXBzIGEgc2luZ2xlIHplcm8gaWYgdGhlcmUgYXJlIG9ubHkgemVyb3MgaW4gdGhlIHN0cmluZy5cbiAgICAgICAqIDArKD89WzEtOV0pIC0tPiBNYXRjaCAxIG9yIG1vcmUgemVyb3MgdGhhdCBhcmUgZm9sbG93ZWQgYnkgMS05XG4gICAgICAgKiAwKyg/PTAkKSAtLT4gTWF0Y2ggMSBvciBtb3JlIHplcm9zIHRoYXQgbXVzdCBiZSBmb2xsb3dlZCBieSBvbmUgMCBhbmQgZW5kLlxuICAgICAgICovXG4gICAgICBjb25zdCBmaW5kSXRlbUZyb21Db21wbGV0ZVZhbHVlID0gb3B0aW9ucy5maW5kKCh7XG4gICAgICAgIHRleHRDb250ZW50XG4gICAgICB9KSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBLZXlib2FyZCBlbnRyeSBpcyBjdXJyZW50bHkgb25seSB1c2VkIGluc2lkZSBvZiBEYXRldGltZVxuICAgICAgICAgKiB3aGVyZSB3ZSBndWFyYW50ZWUgdGV4dENvbnRlbnQgaXMgc2V0LlxuICAgICAgICAgKiBJZiB3ZSBlbmQgdXAgZXhwb3NpbmcgdGhpcyBmZWF0dXJlIHB1YmxpY2x5IHdlIHNob3VsZCByZXZpc2l0IHRoaXMgYXNzdW1wdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlZFRleHQgPSB0ZXh0Q29udGVudC5yZXBsYWNlKC9eMCsoPz1bMS05XSl8MCsoPz0wJCkvLCAnJyk7XG4gICAgICAgIHJldHVybiBwYXJzZWRUZXh0ID09PSBpbnB1dEVsLnZhbHVlO1xuICAgICAgfSk7XG4gICAgICBpZiAoZmluZEl0ZW1Gcm9tQ29tcGxldGVWYWx1ZSkge1xuICAgICAgICBpbnB1dE1vZGVDb2x1bW4uc2V0VmFsdWUoZmluZEl0ZW1Gcm9tQ29tcGxldGVWYWx1ZS52YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSWYgd2UgdHlwZWQgXCI1NlwiIHRvIGdldCBtaW51dGUgNTYsIHRoZW4gdHlwZWQgXCI3XCIsXG4gICAgICAgKiB3ZSBzaG91bGQgc2VsZWN0IFwiMDdcIiBhcyBcIjU2N1wiIGlzIG5vdCBhIHZhbGlkIG1pbnV0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKGlucHV0RWwudmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRDaGFyYWN0ZXIgPSBpbnB1dEVsLnZhbHVlLnN1YnN0cmluZyhpbnB1dEVsLnZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgICBpbnB1dEVsLnZhbHVlID0gY2hhbmdlZENoYXJhY3RlcjtcbiAgICAgICAgdGhpcy5zZWxlY3RTaW5nbGVDb2x1bW4oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIGEgbGlzdCBvZiBjb2x1bW4gaXRlbXMgZm9yIGEgcGFydGljdWxhclxuICAgICAqIHZhbHVlLiBUaGlzIGlzIGN1cnJlbnRseSB1c2VkIGZvciBudW1lcmljIHZhbHVlcy5cbiAgICAgKiBUaGUgemVyb0JlaGF2aW9yIGNhbiBiZSBzZXQgdG8gYWNjb3VudCBmb3IgbGVhZGluZ1xuICAgICAqIG9yIHRyYWlsaW5nIHplcm9zIHdoZW4gbG9va2luZyBhdCB0aGUgaXRlbSB0ZXh0LlxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoQ29sdW1uID0gKGNvbEVsLCB2YWx1ZSwgemVyb0JlaGF2aW9yID0gJ3N0YXJ0JykgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBiZWhhdmlvciA9IHplcm9CZWhhdmlvciA9PT0gJ3N0YXJ0JyA/IC9eMCsvIDogLzAkLztcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShiZWhhdmlvciwgJycpO1xuICAgICAgY29uc3Qgb3B0aW9uID0gQXJyYXkuZnJvbShjb2xFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbi1vcHRpb24nKSkuZmluZChlbCA9PiB7XG4gICAgICAgIHJldHVybiBlbC5kaXNhYmxlZCAhPT0gdHJ1ZSAmJiBlbC50ZXh0Q29udGVudC5yZXBsYWNlKGJlaGF2aW9yLCAnJykgPT09IHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgIGNvbEVsLnNldFZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gISFvcHRpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBpbnRlbGxpZ2VudGx5IHNlYXJjaCB0aGUgZmlyc3QgYW5kIHNlY29uZFxuICAgICAqIGNvbHVtbiBhcyBpZiB0aGV5J3JlIG51bWJlciBjb2x1bW5zIGZvciB0aGUgcHJvdmlkZWQgbnVtYmVyc1xuICAgICAqIHdoZXJlIHRoZSBmaXJzdCB0d28gbnVtYmVycyBhcmUgdGhlIGZpcnN0IGNvbHVtblxuICAgICAqIGFuZCB0aGUgbGFzdCAyIGFyZSB0aGUgbGFzdCBjb2x1bW4uIFRyaWVzIHRvIGFsbG93IGZvciB0aGUgZmlyc3RcbiAgICAgKiBudW1iZXIgdG8gYmUgaWdub3JlZCBmb3Igc2l0dWF0aW9ucyB3aGVyZSB0eXBvcyBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoID0gKGZpcnN0Q29sdW1uLCBzZWNvbmRDb2x1bW4sIGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpbnB1dC5zcGxpdCgnJyk7XG4gICAgICBjb25zdCBob3VyVmFsdWUgPSBpbnB1dEFycmF5LnNsaWNlKDAsIDIpLmpvaW4oJycpO1xuICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBtYXRjaCBmb3IgdGhlIGZpcnN0IHR3byBkaWdpdHMgaW4gdGhlIGZpcnN0IGNvbHVtblxuICAgICAgY29uc3QgZm91bmRIb3VyID0gdGhpcy5zZWFyY2hDb2x1bW4oZmlyc3RDb2x1bW4sIGhvdXJWYWx1ZSk7XG4gICAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdGhhbiAyIGRpZ2l0cyBhbmQgZm91bmQgYSBtYXRjaCBmb3IgaG91cnMsXG4gICAgICAvLyB1c2UgdGhlIHJlbWFpbmluZyBkaWdpdHMgZm9yIHRoZSBzZWNvbmQgY29sdW1uIChtaW51dGVzKVxuICAgICAgaWYgKGlucHV0QXJyYXkubGVuZ3RoID4gMiAmJiBmb3VuZEhvdXIpIHtcbiAgICAgICAgY29uc3QgbWludXRlVmFsdWUgPSBpbnB1dEFycmF5LnNsaWNlKDIsIDQpLmpvaW4oJycpO1xuICAgICAgICB0aGlzLnNlYXJjaENvbHVtbihzZWNvbmRDb2x1bW4sIG1pbnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IGZpbmQgYSBtYXRjaCBmb3IgdGhlIHR3by1kaWdpdCBob3VyLCB0cnkgc2luZ2xlIGRpZ2l0IGFwcHJvYWNoZXNcbiAgICAgIGVsc2UgaWYgKCFmb3VuZEhvdXIgJiYgaW5wdXRBcnJheS5sZW5ndGggPj0gMSkge1xuICAgICAgICAvLyBGaXJzdCB0cnkgdGhlIGZpcnN0IGRpZ2l0IGFzIGEgc2luZ2xlLWRpZ2l0IGhvdXJcbiAgICAgICAgbGV0IHNpbmdsZURpZ2l0SG91ciA9IGlucHV0QXJyYXlbMF07XG4gICAgICAgIGxldCBzaW5nbGVEaWdpdEZvdW5kID0gdGhpcy5zZWFyY2hDb2x1bW4oZmlyc3RDb2x1bW4sIHNpbmdsZURpZ2l0SG91cik7XG4gICAgICAgIC8vIElmIHRoYXQgZGlkbid0IHdvcmssIHRyeSB0aGUgc2Vjb25kIGRpZ2l0IGFzIGEgc2luZ2xlLWRpZ2l0IGhvdXJcbiAgICAgICAgLy8gKGhhbmRsZXMgY2FzZSB3aGVyZSB1c2VyIG1hZGUgYSB0eXBvIGluIHRoZSBmaXJzdCBkaWdpdCwgb3IgdGhleSB0eXBlZCBvdmVyIHRoZW1zZWx2ZXMpXG4gICAgICAgIGlmICghc2luZ2xlRGlnaXRGb3VuZCkge1xuICAgICAgICAgIGlucHV0QXJyYXkuc2hpZnQoKTtcbiAgICAgICAgICBzaW5nbGVEaWdpdEhvdXIgPSBpbnB1dEFycmF5WzBdO1xuICAgICAgICAgIHNpbmdsZURpZ2l0Rm91bmQgPSB0aGlzLnNlYXJjaENvbHVtbihmaXJzdENvbHVtbiwgc2luZ2xlRGlnaXRIb3VyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBmb3VuZCBhIHNpbmdsZS1kaWdpdCBob3VyIGFuZCBoYXZlIHJlbWFpbmluZyBkaWdpdHMsXG4gICAgICAgIC8vIHVzZSB1cCB0byAyIG9mIHRoZSByZW1haW5pbmcgZGlnaXRzIGZvciB0aGUgc2Vjb25kIGNvbHVtblxuICAgICAgICBpZiAoc2luZ2xlRGlnaXRGb3VuZCAmJiBpbnB1dEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdEaWdpdHMgPSBpbnB1dEFycmF5LnNsaWNlKDEsIDMpLmpvaW4oJycpO1xuICAgICAgICAgIHRoaXMuc2VhcmNoQ29sdW1uKHNlY29uZENvbHVtbiwgcmVtYWluaW5nRGlnaXRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZWxlY3RNdWx0aUNvbHVtbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbCxcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG51bWVyaWNQaWNrZXJzID0gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbicpKS5maWx0ZXIoY29sID0+IGNvbC5udW1lcmljSW5wdXQpO1xuICAgICAgY29uc3QgZmlyc3RDb2x1bW4gPSBudW1lcmljUGlja2Vyc1swXTtcbiAgICAgIGNvbnN0IGxhc3RDb2x1bW4gPSBudW1lcmljUGlja2Vyc1sxXTtcbiAgICAgIGxldCB2YWx1ZSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5wdXRFbC52YWx1ZS5sZW5ndGggLSA0O1xuICAgICAgICBjb25zdCBuZXdTdHJpbmcgPSBpbnB1dEVsLnZhbHVlLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgICAgICAgaW5wdXRFbC52YWx1ZSA9IG5ld1N0cmluZztcbiAgICAgICAgdmFsdWUgPSBuZXdTdHJpbmc7XG4gICAgICB9XG4gICAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoKGZpcnN0Q29sdW1uLCBsYXN0Q29sdW1uLCB2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyB0aGUgdmFsdWUgb2YgdGhlIGFjdGl2ZSBjb2x1bW5cbiAgICAgKiB0byBkZXRlcm1pbmUgd2hpY2ggdmFsdWUgdXNlcnMgYXJlIHRyeWluZ1xuICAgICAqIHRvIHNlbGVjdFxuICAgICAqL1xuICAgIHRoaXMub25JbnB1dENoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlSW5wdXRNb2RlLFxuICAgICAgICBpbnB1dEVsLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW5cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCF1c2VJbnB1dE1vZGUgfHwgIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0TW9kZUNvbHVtbikge1xuICAgICAgICB0aGlzLnNlbGVjdFNpbmdsZUNvbHVtbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RNdWx0aUNvbHVtbigpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW1pdCBpb25JbnB1dE1vZGVDaGFuZ2UuIFBpY2tlciBjb2x1bW5zXG4gICAgICogbGlzdGVuIGZvciB0aGlzIGV2ZW50IHRvIGRldGVybWluZSB3aGV0aGVyXG4gICAgICogb3Igbm90IHRoZWlyIGNvbHVtbiBpcyBcImFjdGl2ZVwiIGZvciB0ZXh0IGlucHV0LlxuICAgICAqL1xuICAgIHRoaXMuZW1pdElucHV0TW9kZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlSW5wdXRNb2RlLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW5cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgdGhpcy5pb25JbnB1dE1vZGVDaGFuZ2UuZW1pdCh7XG4gICAgICAgIHVzZUlucHV0TW9kZSxcbiAgICAgICAgaW5wdXRNb2RlQ29sdW1uXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwaWNrZXIgaXMgaW50ZXJhY3RlZCB3aXRoXG4gICAqIHdlIG5lZWQgdG8gcHJldmVudCB0b3VjaHN0YXJ0IHNvIG90aGVyXG4gICAqIGdlc3R1cmVzIGRvIG5vdCBmaXJlLiBGb3IgZXhhbXBsZSxcbiAgICogc2Nyb2xsaW5nIG9uIHRoZSB3aGVlbCBwaWNrZXJcbiAgICogaW4gaW9uLWRhdGV0aW1lIHNob3VsZCBub3QgY2F1c2VcbiAgICogYSBjYXJkIG1vZGFsIHRvIHN3aXBlIHRvIGNsb3NlLlxuICAgKi9cbiAgcHJldmVudFRvdWNoU3RhcnRQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGdldEVsZW1lbnRSb290KHRoaXMuZWwpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNJbik7XG4gICAgZ2V0RWxlbWVudFJvb3QodGhpcy5lbCkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uRm9jdXNPdXQpO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogRXhpdHMgdGV4dCBlbnRyeSBtb2RlIGZvciB0aGUgcGlja2VyXG4gICAqIFRoaXMgbWV0aG9kIGJsdXJzIHRoZSBoaWRkZW4gaW5wdXRcbiAgICogYW5kIGNhdXNlIHRoZSBrZXlib2FyZCB0byBkaXNtaXNzLlxuICAgKi9cbiAgYXN5bmMgZXhpdElucHV0TW9kZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dEVsLFxuICAgICAgdXNlSW5wdXRNb2RlXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCF1c2VJbnB1dE1vZGUgfHwgIWlucHV0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51c2VJbnB1dE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0TW9kZUNvbHVtbiA9IHVuZGVmaW5lZDtcbiAgICBpbnB1dEVsLmJsdXIoKTtcbiAgICBpbnB1dEVsLnZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMuZGVzdHJveUtleXByZXNzTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveUtleXByZXNzTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuZGVzdHJveUtleXByZXNzTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuZW1pdElucHV0TW9kZUNoYW5nZSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcyOGY4MWU0ZWQ0NGE2MzMxNzg1NjE3NTdjNTE5OWMyYzk4Zjk0Yjc0JyxcbiAgICAgIG9uUG9pbnRlckRvd246IGV2ID0+IHRoaXMub25Qb2ludGVyRG93bihldiksXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLm9uQ2xpY2soKVxuICAgIH0sIGgoXCJpbnB1dFwiLCB7XG4gICAgICBrZXk6ICdhYmIzZDFhZDI1ZWY2Mzg1NmFmNzgwNDExMTE3NWE0ZDUwMDA4YmMwJyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB0YWJpbmRleDogLTEsXG4gICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG9uS2V5RG93bjogZXYgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgXCJFbnRlclwiIGtleSByZXByZXNlbnRzXG4gICAgICAgICAqIHRoZSB1c2VyIHN1Ym1pdHRpbmcgdGhlaXIgdGltZVxuICAgICAgICAgKiBzZWxlY3Rpb24sIHNvIHdlIHNob3VsZCBibHVyIHRoZVxuICAgICAgICAgKiBpbnB1dCAoYW5kIHRoZXJlZm9yZSBjbG9zZSB0aGUga2V5Ym9hcmQpXG4gICAgICAgICAqXG4gICAgICAgICAqIFVwZGF0aW5nIHRoZSBwaWNrZXIncyBzdGF0ZSB0byBubyBsb25nZXJcbiAgICAgICAgICogYmUgaW4gaW5wdXQgbW9kZSBpcyBoYW5kbGVkIGluIHRoZSBvbkJsdXJcbiAgICAgICAgICogY2FsbGJhY2sgYmVsb3cuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgKF9hID0gdGhpcy5pbnB1dEVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmlucHV0RWwgPSBlbCxcbiAgICAgIG9uSW5wdXQ6ICgpID0+IHRoaXMub25JbnB1dENoYW5nZSgpLFxuICAgICAgb25CbHVyOiAoKSA9PiB0aGlzLmV4aXRJbnB1dE1vZGUoKVxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzMzNGE1YWJkYzAyZTZiMTI3YzU3MTc3ZjYyNmQ3ZTRmZjU1MjYxODMnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWJlZm9yZVwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZmZkNjI3MTkzMTEyOWU4OGZjN2M4MjBlOTE5ZDY4NDg5OWU0MjBjNScsXG4gICAgICBjbGFzczogXCJwaWNrZXItYWZ0ZXJcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzc4ZDFkOTVmZDA5ZTA0ZjE1NGVhNTlmMjRhMWNlY2U3MmM0N2VkN2InLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWhpZ2hsaWdodFwiLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmhpZ2hsaWdodEVsID0gZWxcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMGJkNWI5Zjg3NWQzYzcxZjZjYmJkZTIwNTRiYWViMWIwYTJlOGNkNSdcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuUGlja2VyLnN0eWxlID0ge1xuICBpb3M6IElvblBpY2tlcklvc1N0eWxlMCxcbiAgbWQ6IElvblBpY2tlck1kU3R5bGUwXG59O1xuZXhwb3J0IHsgUGlja2VyIGFzIGlvbl9waWNrZXIgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sZUFBZTtBQUNyQixJQUFNLHFCQUFxQjtBQUMzQixJQUFNLGNBQWM7QUFDcEIsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSxTQUFTLE1BQU07QUFBQSxFQUNuQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLHFCQUFxQixZQUFZLE1BQU0sc0JBQXNCLENBQUM7QUFDbkUsU0FBSyxlQUFlO0FBQ3BCLFNBQUssc0JBQXNCLFFBQU07QUFDL0IsWUFBTTtBQUFBLFFBQ0o7QUFBQSxNQUNGLElBQUk7QUFDSixVQUFJLENBQUMsYUFBYTtBQUNoQixlQUFPO0FBQUEsTUFDVDtBQUNBLFlBQU0sT0FBTyxZQUFZLHNCQUFzQjtBQUsvQyxZQUFNLFdBQVcsR0FBRyxVQUFVLEtBQUssUUFBUSxHQUFHLFVBQVUsS0FBSztBQUM3RCxZQUFNLFdBQVcsR0FBRyxVQUFVLEtBQUssT0FBTyxHQUFHLFVBQVUsS0FBSztBQUM1RCxVQUFJLFlBQVksVUFBVTtBQUN4QixlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBUUEsU0FBSyxhQUFhLFFBQU07QUFFdEIsWUFBTTtBQUFBLFFBQ0o7QUFBQSxNQUNGLElBQUk7QUFDSixVQUFJLENBQUMsaUJBQWlCLGNBQWMsWUFBWSx1QkFBdUIsa0JBQWtCLEtBQUssU0FBUztBQUNyRyxhQUFLLGNBQWM7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7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QVcsS0FBSyxTQUFTO0FBQ2xFLG1CQUFlLEtBQUssRUFBRSxFQUFFLGlCQUFpQixZQUFZLEtBQUssVUFBVTtBQUFBLEVBQ3RFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxnQkFBZ0I7QUFBQTtBQUNwQixZQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxNQUNGLElBQUk7QUFDSixVQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUztBQUM3QjtBQUFBLE1BQ0Y7QUFDQSxXQUFLLGVBQWU7QUFDcEIsV0FBSyxrQkFBa0I7QUFDdkIsY0FBUSxLQUFLO0FBQ2IsY0FBUSxRQUFRO0FBQ2hCLFVBQUksS0FBSyx5QkFBeUI7QUFDaEMsYUFBSyx3QkFBd0I7QUFDN0IsYUFBSywwQkFBMEI7QUFBQSxNQUNqQztBQUNBLFdBQUssb0JBQW9CO0FBQUEsSUFDM0I7QUFBQTtBQUFBLEVBQ0EsU0FBUztBQUNQLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxlQUFlLFFBQU0sS0FBSyxjQUFjLEVBQUU7QUFBQSxNQUMxQyxTQUFTLE1BQU0sS0FBSyxRQUFRO0FBQUEsSUFDOUIsR0FBRyxFQUFFLFNBQVM7QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFdBQVcsUUFBTTtBQUNmLFlBQUk7QUFXSixZQUFJLEdBQUcsUUFBUSxTQUFTO0FBQ3RCLFdBQUMsS0FBSyxLQUFLLGFBQWEsUUFBUSxPQUFPLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFBQSxRQUNuRTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUssUUFBTSxLQUFLLFVBQVU7QUFBQSxNQUMxQixTQUFTLE1BQU0sS0FBSyxjQUFjO0FBQUEsTUFDbEMsUUFBUSxNQUFNLEtBQUssY0FBYztBQUFBLElBQ25DLENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLEtBQUssUUFBTSxLQUFLLGNBQWM7QUFBQSxJQUNoQyxDQUFDLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWixLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUM7QUFBQSxFQUNKO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQ0Y7QUFDQSxPQUFPLFFBQVE7QUFBQSxFQUNiLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
