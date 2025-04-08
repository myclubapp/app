import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  arrowBackSharp,
  closeCircle,
  closeSharp,
  searchOutline,
  searchSharp
} from "./chunk-Y2OY2WAF.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  componentOnReady,
  debounceEvent,
  inheritAttributes,
  raf
} from "./chunk-RRWPYKYY.js";
import {
  config,
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js
var searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #0054e9);--clear-button-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;min-height:60px;contain:content}.searchbar-input-container.sc-ion-searchbar-ios{min-height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:1.375rem;height:100%;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:6px;padding-bottom:6px;height:100%;font-size:1.0625rem;font-weight:400;contain:strict}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem;-webkit-padding-end:1.75rem;padding-inline-end:1.75rem}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:1.875rem;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:1.125rem;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:17px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.875rem;padding-inline-start:1.875rem}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;min-height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
var IonSearchbarIosStyle0 = searchbarIosCss;
var searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, var(--ion-text-color-step-100, #1a1a1a));--clear-button-color:initial;--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:1.3125rem;height:1.3125rem}.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.5em}.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:9px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:3.4375rem;padding-inline-start:3.4375rem;-webkit-padding-end:3.4375rem;padding-inline-end:3.4375rem;padding-top:0.375rem;padding-bottom:0.375rem;background-position:left 8px center;height:auto;font-size:1rem;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:1.375rem;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";
var IonSearchbarMdStyle0 = searchbarMdCss;
var Searchbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionClear = createEvent(this, "ionClear", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    this.inputId = `ion-searchbar-${searchbarIds++}`;
    this.inheritedAttributes = {};
    this.onClearInput = (shouldFocus) => __async(this, null, function* () {
      this.ionClear.emit();
      return new Promise((resolve) => {
        setTimeout(() => {
          const value = this.getValue();
          if (value !== "") {
            this.value = "";
            this.emitInputChange();
            if (shouldFocus && !this.focused) {
              this.setFocus();
              this.focusedValue = value;
            }
          }
          resolve();
        }, 16 * 4);
      });
    });
    this.onCancelSearchbar = (ev) => __async(this, null, function* () {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.ionCancel.emit();
      const value = this.getValue();
      const focused = this.focused;
      yield this.onClearInput();
      if (value && !focused) {
        this.emitValueChange(ev);
      }
      if (this.nativeInput) {
        this.nativeInput.blur();
      }
    });
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.emitInputChange(ev);
    };
    this.onChange = (ev) => {
      this.emitValueChange(ev);
    };
    this.onBlur = (ev) => {
      this.focused = false;
      this.ionBlur.emit();
      this.positionElements();
      if (this.focusedValue !== this.value) {
        this.emitValueChange(ev);
      }
      this.focusedValue = void 0;
    };
    this.onFocus = () => {
      this.focused = true;
      this.focusedValue = this.value;
      this.ionFocus.emit();
      this.positionElements();
    };
    this.focused = false;
    this.noAnimate = true;
    this.color = void 0;
    this.animated = false;
    this.autocapitalize = "off";
    this.autocomplete = "off";
    this.autocorrect = "off";
    this.cancelButtonIcon = config.get("backButtonIcon", arrowBackSharp);
    this.cancelButtonText = "Cancel";
    this.clearIcon = void 0;
    this.debounce = void 0;
    this.disabled = false;
    this.inputmode = void 0;
    this.enterkeyhint = void 0;
    this.maxlength = void 0;
    this.minlength = void 0;
    this.name = this.inputId;
    this.placeholder = "Search";
    this.searchIcon = void 0;
    this.showCancelButton = "never";
    this.showClearButton = "always";
    this.spellcheck = false;
    this.type = "search";
    this.value = "";
  }
  /**
   * lang and dir are globally enumerated attributes.
   * As a result, creating these as properties
   * can have unintended side effects. Instead, we
   * listen for attribute changes and inherit them
   * to the inner `<input>` element.
   */
  onLangChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      lang: newValue
    });
    forceUpdate(this);
  }
  onDirChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      dir: newValue
    });
    forceUpdate(this);
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    this.ionInput = debounce === void 0 ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes(this.el, ["lang", "dir"]));
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }
  emitStyle() {
    this.ionStyle.emit({
      searchbar: true
    });
  }
  /**
   * Sets focus on the native `input` in `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   *
   * See [managing focus](/docs/developing/managing-focus) for more information.
   */
  setFocus() {
    return __async(this, null, function* () {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    });
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return __async(this, null, function* () {
      if (!this.nativeInput) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.nativeInput);
    });
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    const newValue = value == null ? value : value.toString();
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    this.ionInput.emit({
      value,
      event
    });
  }
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = getIonMode(this);
    const shouldAlignLeft = !this.animated || value.trim() !== "" || !!this.focused;
    this.shouldAlignLeft = shouldAlignLeft;
    if (mode !== "ios") {
      return;
    }
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
    if (this.animated) {
      this.positionCancelButton();
    }
  }
  /**
   * Positions the input placeholder
   */
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const rtl = isRTL(this.el);
    const iconEl = (this.el.shadowRoot || this.el).querySelector(".searchbar-search-icon");
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute("style");
      iconEl.removeAttribute("style");
    } else {
      const doc = document;
      const tempSpan = doc.createElement("span");
      tempSpan.innerText = this.placeholder || "";
      doc.body.appendChild(tempSpan);
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        const inputLeft = "calc(50% - " + textWidth / 2 + "px)";
        const iconLeft = "calc(50% - " + (textWidth / 2 + iconEl.clientWidth + 8) + "px)";
        if (rtl) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  positionCancelButton() {
    const rtl = isRTL(this.el);
    const cancelButton = (this.el.shadowRoot || this.el).querySelector(".searchbar-cancel-button");
    const shouldShowCancel = this.shouldShowCancelButton();
    if (cancelButton !== null && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (rtl) {
          cancelStyle.marginLeft = "0";
        } else {
          cancelStyle.marginRight = "0";
        }
      } else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (rtl) {
            cancelStyle.marginLeft = -offset + "px";
          } else {
            cancelStyle.marginRight = -offset + "px";
          }
        }
      }
    }
  }
  getValue() {
    return this.value || "";
  }
  hasValue() {
    return this.getValue() !== "";
  }
  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowCancelButton() {
    if (this.showCancelButton === "never" || this.showCancelButton === "focus" && !this.focused) {
      return false;
    }
    return true;
  }
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowClearButton() {
    if (this.showClearButton === "never" || this.showClearButton === "focus" && !this.focused) {
      return false;
    }
    return true;
  }
  render() {
    const {
      cancelButtonText,
      autocapitalize
    } = this;
    const animated = this.animated && config.getBoolean("animated", true);
    const mode = getIonMode(this);
    const clearIcon = this.clearIcon || (mode === "ios" ? closeCircle : closeSharp);
    const searchIcon = this.searchIcon || (mode === "ios" ? searchOutline : searchSharp);
    const shouldShowCancelButton = this.shouldShowCancelButton();
    const cancelButton = this.showCancelButton !== "never" && h("button", {
      key: "989f3e84c472ada6e66dd9b249d0d268bf17ce26",
      "aria-label": cancelButtonText,
      "aria-hidden": shouldShowCancelButton ? void 0 : "true",
      type: "button",
      tabIndex: mode === "ios" && !shouldShowCancelButton ? -1 : void 0,
      onMouseDown: this.onCancelSearchbar,
      onTouchStart: this.onCancelSearchbar,
      class: "searchbar-cancel-button"
    }, h("div", {
      key: "7d335d4fde33822dc79d26b748ba2e98db7494bb",
      "aria-hidden": "true"
    }, mode === "md" ? h("ion-icon", {
      "aria-hidden": "true",
      mode,
      icon: this.cancelButtonIcon,
      lazy: false
    }) : cancelButtonText));
    return h(Host, {
      key: "d1a1972725e949fb102c91487aaa7b9d10c2d718",
      role: "search",
      "aria-disabled": this.disabled ? "true" : null,
      class: createColorClasses(this.color, {
        [mode]: true,
        "searchbar-animated": animated,
        "searchbar-disabled": this.disabled,
        "searchbar-no-animate": animated && this.noAnimate,
        "searchbar-has-value": this.hasValue(),
        "searchbar-left-aligned": this.shouldAlignLeft,
        "searchbar-has-focus": this.focused,
        "searchbar-should-show-clear": this.shouldShowClearButton(),
        "searchbar-should-show-cancel": this.shouldShowCancelButton()
      })
    }, h("div", {
      key: "add53640b2994cb6b2bf02792dafe51aba6b1684",
      class: "searchbar-input-container"
    }, h("input", Object.assign({
      key: "160cc36459a4a652e7f41ccd14dcdc782278779e",
      "aria-label": "search text",
      disabled: this.disabled,
      ref: (el) => this.nativeInput = el,
      class: "searchbar-input",
      inputMode: this.inputmode,
      enterKeyHint: this.enterkeyhint,
      name: this.name,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      minLength: this.minlength,
      maxLength: this.maxlength,
      placeholder: this.placeholder,
      type: this.type,
      value: this.getValue(),
      autoCapitalize: autocapitalize === "default" ? void 0 : autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      spellcheck: this.spellcheck
    }, this.inheritedAttributes)), mode === "md" && cancelButton, h("ion-icon", {
      key: "8825fd13af0d2dea451ccc0e00ae7b5021dc01c4",
      "aria-hidden": "true",
      mode,
      icon: searchIcon,
      lazy: false,
      class: "searchbar-search-icon"
    }), h("button", {
      key: "8a7b56da278b9ca5c4f5a4ee9c01924fd5ae29d8",
      "aria-label": "reset",
      type: "button",
      "no-blur": true,
      class: "searchbar-clear-button",
      onPointerDown: (ev) => {
        ev.preventDefault();
      },
      onClick: () => this.onClearInput(true)
    }, h("ion-icon", {
      key: "24c55274516ab012d8c25f03525c6cdb9409e52f",
      "aria-hidden": "true",
      mode,
      icon: clearIcon,
      lazy: false,
      class: "searchbar-clear-icon"
    }))), mode === "ios" && cancelButton);
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "lang": ["onLangChanged"],
      "dir": ["onDirChanged"],
      "debounce": ["debounceChanged"],
      "value": ["valueChanged"],
      "showCancelButton": ["showCancelButtonChanged"]
    };
  }
};
var searchbarIds = 0;
Searchbar.style = {
  ios: IonSearchbarIosStyle0,
  md: IonSearchbarMdStyle0
};
export {
  Searchbar as ion_searchbar
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-searchbar.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VhcmNoYmFyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGkgYXMgZm9yY2VVcGRhdGUsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBlIGFzIGRlYm91bmNlRXZlbnQsIGggYXMgaW5oZXJpdEF0dHJpYnV0ZXMsIGMgYXMgY29tcG9uZW50T25SZWFkeSwgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLWJhYmVhYmViLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBhIGFzIGFycm93QmFja1NoYXJwLCBiIGFzIGNsb3NlQ2lyY2xlLCBkIGFzIGNsb3NlU2hhcnAsIHMgYXMgc2VhcmNoT3V0bGluZSwgZSBhcyBzZWFyY2hTaGFycCB9IGZyb20gJy4vaW5kZXgtZTJjZjJjZWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25maWcsIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IHNlYXJjaGJhcklvc0NzcyA9IFwiLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6dmFyKC0taW9uLXBsYWNlaG9sZGVyLW9wYWNpdHksIDAuNik7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjppbmhlcml0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvc3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt3aWR0aDoxMDAlfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Zm9udC1mYW1pbHk6aW5oZXJpdDstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcz5kaXYuc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTpub25lO21pbi1oZWlnaHQ6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2xlYXItYnV0dG9uLWNvbG9yKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3M6Zm9jdXN7b3BhY2l0eTowLjV9LnNlYXJjaGJhci1oYXMtdmFsdWUuc2VhcmNoYmFyLXNob3VsZC1zaG93LWNsZWFyLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWRpc2FibGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjQ7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXNlYXJjaGJhci1pb3MtaHstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjA3KTstLWJvcmRlci1yYWRpdXM6MTBweDstLWJveC1zaGFkb3c6bm9uZTstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY2xlYXItYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKTstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTstLWljb24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpOy13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDttaW4taGVpZ2h0OjYwcHg7Y29udGFpbjpjb250ZW50fS5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyLnNjLWlvbi1zZWFyY2hiYXItaW9ze21pbi1oZWlnaHQ6MzZweH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtbWFyZ2luLXN0YXJ0OmNhbGMoNTAlIC0gNjBweCk7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDUwJSAtIDYwcHgpO3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuMzc1cmVtO2hlaWdodDoxMDAlO2NvbnRhaW46c3RyaWN0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjVweH0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDowcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MHB4O3BhZGRpbmctaW5saW5lLWVuZDowcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtoZWlnaHQ6MTAwJTtmb250LXNpemU6MS4wNjI1cmVtO2ZvbnQtd2VpZ2h0OjQwMDtjb250YWluOnN0cmljdH0uc2VhcmNoYmFyLWhhcy12YWx1ZS5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2xlYXIuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDoxLjc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNzVyZW07LXdlYmtpdC1wYWRkaW5nLWVuZDoxLjc1cmVtO3BhZGRpbmctaW5saW5lLWVuZDoxLjc1cmVtfS5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3RvcDowO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuODc1cmVtO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7aW5zZXQtaW5saW5lLWVuZDowfS5zZWFyY2hiYXItY2xlYXItaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3t3aWR0aDoxLjEyNXJlbTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjA7cGFkZGluZy1pbmxpbmUtZW5kOjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZToxN3B4fS5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MH0uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEuODc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuODc1cmVtfS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb246YWxsIDMwMG1zIGVhc2U7dHJhbnNpdGlvbjphbGwgMzAwbXMgZWFzZX0uc2VhcmNoYmFyLWFuaW1hdGVkLnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsLnNlYXJjaGJhci1hbmltYXRlZC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1tYXJnaW4tZW5kOi0xMDAlO21hcmdpbi1pbmxpbmUtZW5kOi0xMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlO3RyYW5zaXRpb246YWxsIDMwMG1zIGVhc2U7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlYXJjaGJhci1uby1hbmltYXRlLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuc2VhcmNoYmFyLW5vLWFuaW1hdGUuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItbm8tYW5pbWF0ZS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MG1zO3RyYW5zaXRpb24tZHVyYXRpb246MG1zfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvczpob3Zlcntjb2xvcjp2YXIoLS1pb24tY29sb3ItdGludCl9fWlvbi10b29sYmFyLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgsaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7cGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjE1cHg7bWluLWhlaWdodDo1MnB4fWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3Ipe2NvbG9yOmluaGVyaXR9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3J9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTowLjV9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsaW9uLXRvb2xiYXIuaW9uLWNvbG9yIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4wNyk7Y29sb3I6Y3VycmVudENvbG9yfWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5OjAuNX1cIjtcbmNvbnN0IElvblNlYXJjaGJhcklvc1N0eWxlMCA9IHNlYXJjaGJhcklvc0NzcztcbmNvbnN0IHNlYXJjaGJhck1kQ3NzID0gXCIuc2MtaW9uLXNlYXJjaGJhci1tZC1oey0tcGxhY2Vob2xkZXItY29sb3I6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OmluaXRpYWw7LS1wbGFjZWhvbGRlci1vcGFjaXR5OnZhcigtLWlvbi1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjYpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWh7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6aW5oZXJpdH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxO3dpZHRoOjEwMCV9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWluLWhlaWdodDppbmhlcml0O2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpub25lO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQ+ZGl2LnNjLWlvbi1zZWFyY2hiYXItbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Om5vbmU7bWluLWhlaWdodDowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jbGVhci1idXR0b24tY29sb3IpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kOmZvY3Vze29wYWNpdHk6MC41fS5zZWFyY2hiYXItaGFzLXZhbHVlLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jbGVhci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItZGlzYWJsZWQuc2MtaW9uLXNlYXJjaGJhci1tZC1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC40O3BvaW50ZXItZXZlbnRzOm5vbmV9LnNjLWlvbi1zZWFyY2hiYXItbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOy0tYm9yZGVyLXJhZGl1czoycHg7LS1ib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTEwMCwgIzFhMWExYSkpOy0tY2xlYXItYnV0dG9uLWNvbG9yOmluaXRpYWw7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7LS1pY29uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7YmFja2dyb3VuZDppbmhlcml0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHt0b3A6MTFweDt3aWR0aDoxLjMxMjVyZW07aGVpZ2h0OjEuMzEyNXJlbX0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjE2cHh9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7dG9wOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6MS41ZW19LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjlweH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7cG9zaXRpb246YWJzb2x1dGV9LnNlYXJjaGJhci1zZWFyY2gtaWNvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6My40Mzc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNDM3NXJlbTstd2Via2l0LXBhZGRpbmctZW5kOjMuNDM3NXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6My40Mzc1cmVtO3BhZGRpbmctdG9wOjAuMzc1cmVtO3BhZGRpbmctYm90dG9tOjAuMzc1cmVtO2JhY2tncm91bmQtcG9zaXRpb246bGVmdCA4cHggY2VudGVyO2hlaWdodDphdXRvO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDozMHB4fVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kLFtkaXI9cnRsXSAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IDhweCBjZW50ZXJ9W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgOHB4IGNlbnRlcn1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6ZGlyKHJ0bCl7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCA4cHggY2VudGVyfX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke3RvcDowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2luc2V0LWlubGluZS1lbmQ6MTNweH0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1zZWFyY2hiYXItbWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uc2VhcmNoYmFyLWNsZWFyLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHt3aWR0aDoxLjM3NXJlbTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2t9LnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCsuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kKy5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5Om5vbmV9aW9uLXRvb2xiYXIuc2MtaW9uLXNlYXJjaGJhci1tZC1oLGlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLW1kLWh7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjdweDtwYWRkaW5nLWlubGluZS1zdGFydDo3cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo3cHg7cGFkZGluZy1pbmxpbmUtZW5kOjdweDtwYWRkaW5nLXRvcDozcHg7cGFkZGluZy1ib3R0b206M3B4fVwiO1xuY29uc3QgSW9uU2VhcmNoYmFyTWRTdHlsZTAgPSBzZWFyY2hiYXJNZENzcztcbmNvbnN0IFNlYXJjaGJhciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgIHRoaXMuaW9uQ2xlYXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNsZWFyXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB0aGlzLmlzQ2FuY2VsVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvdWxkQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0SWQgPSBgaW9uLXNlYXJjaGJhci0ke3NlYXJjaGJhcklkcysrfWA7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdHJpZ2dlcnMgdGhlIGNvbnRyb2wgY2hhbmdlLlxuICAgICAqL1xuICAgIHRoaXMub25DbGVhcklucHV0ID0gYXN5bmMgc2hvdWxkRm9jdXMgPT4ge1xuICAgICAgdGhpcy5pb25DbGVhci5lbWl0KCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKSBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvaXNzdWVzLzc1MjdcbiAgICAgICAgLy8gd2FpdCBmb3IgNCBmcmFtZXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5lbWl0SW5wdXRDaGFuZ2UoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hlbiB0YXBwaW5nIGNsZWFyIGJ1dHRvblxuICAgICAgICAgICAgICogZW5zdXJlIGlucHV0IGlzIGZvY3VzZWQgYWZ0ZXJcbiAgICAgICAgICAgICAqIGNsZWFyaW5nIGlucHV0IHNvIHVzZXJzXG4gICAgICAgICAgICAgKiBjYW4gcXVpY2tseSBzdGFydCB0eXBpbmcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChzaG91bGRGb2N1cyAmJiAhdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIFRoZSBzZXRGb2N1cyBjYWxsIGFib3ZlIHdpbGwgY2xlYXIgZm9jdXNlZFZhbHVlLFxuICAgICAgICAgICAgICAgKiBidXQgaW9uQ2hhbmdlIHdpbGwgbmV2ZXIgaGF2ZSBnb3R0ZW4gYSBjaGFuY2UgdG9cbiAgICAgICAgICAgICAgICogZmlyZS4gTWFudWFsbHkgcmV2ZXJ0IGZvY3VzZWRWYWx1ZSBzbyBvbkJsdXIgY2FuXG4gICAgICAgICAgICAgICAqIGNvbXBhcmUgYWdhaW5zdCB3aGF0IHdhcyBpbiB0aGUgYm94IGJlZm9yZSB0aGUgY2xlYXIuXG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDE2ICogNCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgaW5wdXQgZmllbGQgYW5kIHRlbGxzIHRoZSBpbnB1dCB0byBibHVyIHNpbmNlXG4gICAgICogdGhlIGNsZWFySW5wdXQgZnVuY3Rpb24gZG9lc24ndCB3YW50IHRoZSBpbnB1dCB0byBibHVyXG4gICAgICogdGhlbiBjYWxscyB0aGUgY3VzdG9tIGNhbmNlbCBmdW5jdGlvbiBpZiB0aGUgdXNlciBwYXNzZWQgb25lIGluLlxuICAgICAqL1xuICAgIHRoaXMub25DYW5jZWxTZWFyY2hiYXIgPSBhc3luYyBldiA9PiB7XG4gICAgICBpZiAoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAvLyBnZXQgY2FjaGVkIHZhbHVlcyBiZWZvcmUgY2xlYXJpbmcgdGhlIGlucHV0XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLmZvY3VzZWQ7XG4gICAgICBhd2FpdCB0aGlzLm9uQ2xlYXJJbnB1dCgpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGVyZSB1c2VkIHRvIGJlIHNvbWV0aGluZyBpbiB0aGUgYm94LCBhbmQgd2Ugd2VyZW4ndCBmb2N1c2VkXG4gICAgICAgKiBiZWZvcmVoYW5kIChtZWFuaW5nIG5vIGJsdXIgZmlyZWQgdGhhdCB3b3VsZCBhbHJlYWR5IGhhbmRsZSB0aGlzKSxcbiAgICAgICAqIG1hbnVhbGx5IGZpcmUgaW9uQ2hhbmdlLlxuICAgICAgICovXG4gICAgICBpZiAodmFsdWUgJiYgIWZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVJbnB1dC5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIFNlYXJjaGJhciBpbnB1dCB2YWx1ZSB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAgICovXG4gICAgdGhpcy5vbklucHV0ID0gZXYgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0SW5wdXRDaGFuZ2UoZXYpO1xuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZSA9IGV2ID0+IHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGV2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIFNlYXJjaGJhciB0byBub3QgZm9jdXNlZCBhbmQgY2hlY2tzIGlmIGl0IHNob3VsZCBhbGlnbiBsZWZ0XG4gICAgICogYmFzZWQgb24gd2hldGhlciB0aGVyZSBpcyBhIHZhbHVlIGluIHRoZSBzZWFyY2hiYXIgb3Igbm90LlxuICAgICAqL1xuICAgIHRoaXMub25CbHVyID0gZXYgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBTZWFyY2hiYXIgdG8gZm9jdXNlZCBhbmQgYWN0aXZlIG9uIGlucHV0IGZvY3VzLlxuICAgICAqL1xuICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLmZvY3VzZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgIH07XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b2NhcGl0YWxpemUgPSAnb2ZmJztcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgIHRoaXMuYXV0b2NvcnJlY3QgPSAnb2ZmJztcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkljb24gPSBjb25maWcuZ2V0KCdiYWNrQnV0dG9uSWNvbicsIGFycm93QmFja1NoYXJwKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvblRleHQgPSAnQ2FuY2VsJztcbiAgICB0aGlzLmNsZWFySWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlYm91bmNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0bW9kZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVudGVya2V5aGludCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heGxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbmxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuICAgIHRoaXMuc2VhcmNoSWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSAnbmV2ZXInO1xuICAgIHRoaXMuc2hvd0NsZWFyQnV0dG9uID0gJ2Fsd2F5cyc7XG4gICAgdGhpcy5zcGVsbGNoZWNrID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gJ3NlYXJjaCc7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG4gIC8qKlxuICAgKiBsYW5nIGFuZCBkaXIgYXJlIGdsb2JhbGx5IGVudW1lcmF0ZWQgYXR0cmlidXRlcy5cbiAgICogQXMgYSByZXN1bHQsIGNyZWF0aW5nIHRoZXNlIGFzIHByb3BlcnRpZXNcbiAgICogY2FuIGhhdmUgdW5pbnRlbmRlZCBzaWRlIGVmZmVjdHMuIEluc3RlYWQsIHdlXG4gICAqIGxpc3RlbiBmb3IgYXR0cmlidXRlIGNoYW5nZXMgYW5kIGluaGVyaXQgdGhlbVxuICAgKiB0byB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuXG4gICAqL1xuICBvbkxhbmdDaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMpLCB7XG4gICAgICBsYW5nOiBuZXdWYWx1ZVxuICAgIH0pO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICB9XG4gIG9uRGlyQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzKSwge1xuICAgICAgZGlyOiBuZXdWYWx1ZVxuICAgIH0pO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICB9XG4gIGRlYm91bmNlQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpb25JbnB1dCxcbiAgICAgIGRlYm91bmNlLFxuICAgICAgb3JpZ2luYWxJb25JbnB1dFxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIGRlYm91bmNlIGlzIHVuZGVmaW5lZCwgd2UgaGF2ZSB0byBtYW51YWxseSByZXZlcnQgdGhlIGlvbklucHV0IGVtaXR0ZXIgaW4gY2FzZVxuICAgICAqIGRlYm91bmNlIHVzZWQgdG8gYmUgc2V0IHRvIGEgbnVtYmVyLiBPdGhlcndpc2UsIHRoZSBldmVudCB3b3VsZCBzdGF5IGRlYm91bmNlZC5cbiAgICAgKi9cbiAgICB0aGlzLmlvbklucHV0ID0gZGVib3VuY2UgPT09IHVuZGVmaW5lZCA/IG9yaWdpbmFsSW9uSW5wdXQgIT09IG51bGwgJiYgb3JpZ2luYWxJb25JbnB1dCAhPT0gdm9pZCAwID8gb3JpZ2luYWxJb25JbnB1dCA6IGlvbklucHV0IDogZGVib3VuY2VFdmVudChpb25JbnB1dCwgZGVib3VuY2UpO1xuICB9XG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5uYXRpdmVJbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBpZiAoaW5wdXRFbCAmJiBpbnB1dEVsLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaW5wdXRFbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBzaG93Q2FuY2VsQnV0dG9uQ2hhbmdlZCgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICB9KTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnbGFuZycsICdkaXInXSkpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5vcmlnaW5hbElvbklucHV0ID0gdGhpcy5pb25JbnB1dDtcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ub0FuaW1hdGUgPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9XG4gIGVtaXRTdHlsZSgpIHtcbiAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgc2VhcmNoYmFyOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIG5hdGl2ZSBgaW5wdXRgIGluIGBpb24tc2VhcmNoYmFyYC4gVXNlIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGdsb2JhbFxuICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAqXG4gICAqIERldmVsb3BlcnMgd2hvIHdpc2ggdG8gZm9jdXMgYW4gaW5wdXQgd2hlbiBhIHBhZ2UgZW50ZXJzXG4gICAqIHNob3VsZCBjYWxsIGBzZXRGb2N1cygpYCBpbiB0aGUgYGlvblZpZXdEaWRFbnRlcigpYCBsaWZlY3ljbGUgbWV0aG9kLlxuICAgKlxuICAgKiBEZXZlbG9wZXJzIHdobyB3aXNoIHRvIGZvY3VzIGFuIGlucHV0IHdoZW4gYW4gb3ZlcmxheSBpcyBwcmVzZW50ZWRcbiAgICogc2hvdWxkIGNhbGwgYHNldEZvY3VzYCBhZnRlciBgZGlkUHJlc2VudGAgaGFzIHJlc29sdmVkLlxuICAgKlxuICAgKiBTZWUgW21hbmFnaW5nIGZvY3VzXSgvZG9jcy9kZXZlbG9waW5nL21hbmFnaW5nLWZvY3VzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICovXG4gIGFzeW5jIGdldElucHV0RWxlbWVudCgpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGdldHMgY2FsbGVkIGluIGNlcnRhaW4gZWFybHkgbGlmZWN5Y2xlIGhvb2tzIChleDogVnVlIG9uTW91bnRlZCksXG4gICAgICogbmF0aXZlSW5wdXQgd29uJ3QgYmUgZGVmaW5lZCB5ZXQgd2l0aCB0aGUgY3VzdG9tIGVsZW1lbnRzIGJ1aWxkLCBzbyB3YWl0IGZvciBpdCB0byBsb2FkIGluLlxuICAgICAqL1xuICAgIGlmICghdGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KHRoaXMuZWwsIHJlc29sdmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5hdGl2ZUlucHV0KTtcbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqXG4gICAqIFRoaXMgQVBJIHNob3VsZCBiZSBjYWxsZWQgZm9yIHVzZXIgY29tbWl0dGVkIGNoYW5nZXMuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIGVtaXRWYWx1ZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgLy8gQ2hlY2tzIGZvciBib3RoIG51bGwgYW5kIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgLy8gRW1pdHRpbmcgYSB2YWx1ZSBjaGFuZ2Ugc2hvdWxkIHVwZGF0ZSB0aGUgaW50ZXJuYWwgc3RhdGUgZm9yIHRyYWNraW5nIHRoZSBmb2N1c2VkIHZhbHVlXG4gICAgdGhpcy5mb2N1c2VkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGBpb25JbnB1dGAgZXZlbnQuXG4gICAqL1xuICBlbWl0SW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIHRoaXMuaW9uSW5wdXQuZW1pdCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgaW5wdXQgc2VhcmNoIGljb24sIHBsYWNlaG9sZGVyLCBhbmQgdGhlIGNhbmNlbCBidXR0b25cbiAgICogYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZCBpZiBpdCBpcyBmb2N1c2VkLiAoaW9zIG9ubHkpXG4gICAqL1xuICBwb3NpdGlvbkVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IHByZXZBbGlnbkxlZnQgPSB0aGlzLnNob3VsZEFsaWduTGVmdDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaG91bGRBbGlnbkxlZnQgPSAhdGhpcy5hbmltYXRlZCB8fCB2YWx1ZS50cmltKCkgIT09ICcnIHx8ICEhdGhpcy5mb2N1c2VkO1xuICAgIHRoaXMuc2hvdWxkQWxpZ25MZWZ0ID0gc2hvdWxkQWxpZ25MZWZ0O1xuICAgIGlmIChtb2RlICE9PSAnaW9zJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJldkFsaWduTGVmdCAhPT0gc2hvdWxkQWxpZ25MZWZ0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uUGxhY2Vob2xkZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucG9zaXRpb25DYW5jZWxCdXR0b24oKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgaW5wdXQgcGxhY2Vob2xkZXJcbiAgICovXG4gIHBvc2l0aW9uUGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJ0bCA9IGlzUlRMKHRoaXMuZWwpO1xuICAgIGNvbnN0IGljb25FbCA9ICh0aGlzLmVsLnNoYWRvd1Jvb3QgfHwgdGhpcy5lbCkucXVlcnlTZWxlY3RvcignLnNlYXJjaGJhci1zZWFyY2gtaWNvbicpO1xuICAgIGlmICh0aGlzLnNob3VsZEFsaWduTGVmdCkge1xuICAgICAgaW5wdXRFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICBpY29uRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgYSBkdW1teSBzcGFuIHRvIGdldCB0aGUgcGxhY2Vob2xkZXIgd2lkdGhcbiAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuICAgICAgY29uc3QgdGVtcFNwYW4gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGVtcFNwYW4uaW5uZXJUZXh0ID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHRlbXBTcGFuKTtcbiAgICAgIC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIHNwYW4gdGhlbiByZW1vdmUgaXRcbiAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IHRlbXBTcGFuLm9mZnNldFdpZHRoO1xuICAgICAgICB0ZW1wU3Bhbi5yZW1vdmUoKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBpbnB1dCBwYWRkaW5nXG4gICAgICAgIGNvbnN0IGlucHV0TGVmdCA9ICdjYWxjKDUwJSAtICcgKyB0ZXh0V2lkdGggLyAyICsgJ3B4KSc7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaWNvbiBtYXJnaW5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHRha2UgdGhlIGljb24gd2lkdGggdG8gYWNjb3VudFxuICAgICAgICAgKiBmb3IgYW55IHRleHQgc2NhbGVzIGFwcGxpZWQgdG8gdGhlIGljb25cbiAgICAgICAgICogc3VjaCBhcyBEeW5hbWljIFR5cGUgb24gaU9TIGFzIHdlbGwgYXMgOHB4XG4gICAgICAgICAqIG9mIHBhZGRpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBpY29uTGVmdCA9ICdjYWxjKDUwJSAtICcgKyAodGV4dFdpZHRoIC8gMiArIGljb25FbC5jbGllbnRXaWR0aCArIDgpICsgJ3B4KSc7XG4gICAgICAgIC8vIFNldCB0aGUgaW5wdXQgcGFkZGluZyBzdGFydCBhbmQgaWNvbiBtYXJnaW4gc3RhcnRcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIGlucHV0RWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW5wdXRMZWZ0O1xuICAgICAgICAgIGljb25FbC5zdHlsZS5tYXJnaW5SaWdodCA9IGljb25MZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0RWwuc3R5bGUucGFkZGluZ0xlZnQgPSBpbnB1dExlZnQ7XG4gICAgICAgICAgaWNvbkVsLnN0eWxlLm1hcmdpbkxlZnQgPSBpY29uTGVmdDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTaG93IHRoZSBpT1MgQ2FuY2VsIGJ1dHRvbiBvbiBmb2N1cywgaGlkZSBpdCBvZmZzY3JlZW4gb3RoZXJ3aXNlXG4gICAqL1xuICBwb3NpdGlvbkNhbmNlbEJ1dHRvbigpIHtcbiAgICBjb25zdCBydGwgPSBpc1JUTCh0aGlzLmVsKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSAodGhpcy5lbC5zaGFkb3dSb290IHx8IHRoaXMuZWwpLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNob3VsZFNob3dDYW5jZWwgPSB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKTtcbiAgICBpZiAoY2FuY2VsQnV0dG9uICE9PSBudWxsICYmIHNob3VsZFNob3dDYW5jZWwgIT09IHRoaXMuaXNDYW5jZWxWaXNpYmxlKSB7XG4gICAgICBjb25zdCBjYW5jZWxTdHlsZSA9IGNhbmNlbEJ1dHRvbi5zdHlsZTtcbiAgICAgIHRoaXMuaXNDYW5jZWxWaXNpYmxlID0gc2hvdWxkU2hvd0NhbmNlbDtcbiAgICAgIGlmIChzaG91bGRTaG93Q2FuY2VsKSB7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpblJpZ2h0ID0gJzAnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjYW5jZWxCdXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luTGVmdCA9IC1vZmZzZXQgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5SaWdodCA9IC1vZmZzZXQgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCAnJztcbiAgfVxuICBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpICE9PSAnJztcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgY2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgdmlzaWJsZSBvbnNjcmVlbi5cbiAgICogQ2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgc2hvd24gaWYgb25lIG9mIHR3byBjb25kaXRpb25zIGFwcGxpZXM6XG4gICAqIDEuIGBzaG93Q2FuY2VsQnV0dG9uYCBpcyBzZXQgdG8gYGFsd2F5c2AuXG4gICAqIDIuIGBzaG93Q2FuY2VsQnV0dG9uYCBpcyBzZXQgdG8gYGZvY3VzYCwgYW5kIHRoZSBzZWFyY2hiYXIgaGFzIGJlZW4gZm9jdXNlZC5cbiAgICovXG4gIHNob3VsZFNob3dDYW5jZWxCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ25ldmVyJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICdmb2N1cycgJiYgIXRoaXMuZm9jdXNlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgY2xlYXIgYnV0dG9uIHNob3VsZCBiZSB2aXNpYmxlIG9uc2NyZWVuLlxuICAgKiBDbGVhciBidXR0b24gc2hvdWxkIGJlIHNob3duIGlmIG9uZSBvZiB0d28gY29uZGl0aW9ucyBhcHBsaWVzOlxuICAgKiAxLiBgc2hvd0NsZWFyQnV0dG9uYCBpcyBzZXQgdG8gYGFsd2F5c2AuXG4gICAqIDIuIGBzaG93Q2xlYXJCdXR0b25gIGlzIHNldCB0byBgZm9jdXNgLCBhbmQgdGhlIHNlYXJjaGJhciBoYXMgYmVlbiBmb2N1c2VkLlxuICAgKi9cbiAgc2hvdWxkU2hvd0NsZWFyQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLnNob3dDbGVhckJ1dHRvbiA9PT0gJ25ldmVyJyB8fCB0aGlzLnNob3dDbGVhckJ1dHRvbiA9PT0gJ2ZvY3VzJyAmJiAhdGhpcy5mb2N1c2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW5jZWxCdXR0b25UZXh0LFxuICAgICAgYXV0b2NhcGl0YWxpemVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhbmltYXRlZCA9IHRoaXMuYW5pbWF0ZWQgJiYgY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSk7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgY2xlYXJJY29uID0gdGhpcy5jbGVhckljb24gfHwgKG1vZGUgPT09ICdpb3MnID8gY2xvc2VDaXJjbGUgOiBjbG9zZVNoYXJwKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gdGhpcy5zZWFyY2hJY29uIHx8IChtb2RlID09PSAnaW9zJyA/IHNlYXJjaE91dGxpbmUgOiBzZWFyY2hTaGFycCk7XG4gICAgY29uc3Qgc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbiA9IHRoaXMuc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbigpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiAhPT0gJ25ldmVyJyAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJzk4OWYzZTg0YzQ3MmFkYTZlNjZkZDliMjQ5ZDBkMjY4YmYxN2NlMjYnLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhbmNlbEJ1dHRvblRleHQsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IHNob3VsZFNob3dDYW5jZWxCdXR0b24gPyB1bmRlZmluZWQgOiAndHJ1ZScsXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgdGFiSW5kZXg6IG1vZGUgPT09ICdpb3MnICYmICFzaG91bGRTaG93Q2FuY2VsQnV0dG9uID8gLTEgOiB1bmRlZmluZWQsXG4gICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNhbmNlbFNlYXJjaGJhcixcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vbkNhbmNlbFNlYXJjaGJhcixcbiAgICAgIGNsYXNzOiBcInNlYXJjaGJhci1jYW5jZWwtYnV0dG9uXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzdkMzM1ZDRmZGUzMzgyMmRjNzlkMjZiNzQ4YmEyZTk4ZGI3NDk0YmInLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIG1vZGUgPT09ICdtZCcgPyBoKFwiaW9uLWljb25cIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBpY29uOiB0aGlzLmNhbmNlbEJ1dHRvbkljb24sXG4gICAgICBsYXp5OiBmYWxzZVxuICAgIH0pIDogY2FuY2VsQnV0dG9uVGV4dCkpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2QxYTE5NzI3MjVlOTQ5ZmIxMDJjOTE0ODdhYWE3YjlkMTBjMmQ3MTgnLFxuICAgICAgcm9sZTogXCJzZWFyY2hcIixcbiAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdzZWFyY2hiYXItYW5pbWF0ZWQnOiBhbmltYXRlZCxcbiAgICAgICAgJ3NlYXJjaGJhci1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICdzZWFyY2hiYXItbm8tYW5pbWF0ZSc6IGFuaW1hdGVkICYmIHRoaXMubm9BbmltYXRlLFxuICAgICAgICAnc2VhcmNoYmFyLWhhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgJ3NlYXJjaGJhci1sZWZ0LWFsaWduZWQnOiB0aGlzLnNob3VsZEFsaWduTGVmdCxcbiAgICAgICAgJ3NlYXJjaGJhci1oYXMtZm9jdXMnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAgICdzZWFyY2hiYXItc2hvdWxkLXNob3ctY2xlYXInOiB0aGlzLnNob3VsZFNob3dDbGVhckJ1dHRvbigpLFxuICAgICAgICAnc2VhcmNoYmFyLXNob3VsZC1zaG93LWNhbmNlbCc6IHRoaXMuc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbigpXG4gICAgICB9KVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnYWRkNTM2NDBiMjk5NGNiNmIyYmYwMjc5MmRhZmU1MWFiYTZiMTY4NCcsXG4gICAgICBjbGFzczogXCJzZWFyY2hiYXItaW5wdXQtY29udGFpbmVyXCJcbiAgICB9LCBoKFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICcxNjBjYzM2NDU5YTRhNjUyZTdmNDFjY2QxNGRjZGM3ODIyNzg3NzllJyxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaCB0ZXh0XCIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5uYXRpdmVJbnB1dCA9IGVsLFxuICAgICAgY2xhc3M6IFwic2VhcmNoYmFyLWlucHV0XCIsXG4gICAgICBpbnB1dE1vZGU6IHRoaXMuaW5wdXRtb2RlLFxuICAgICAgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVya2V5aGludCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG9uSW5wdXQ6IHRoaXMub25JbnB1dCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgIG1pbkxlbmd0aDogdGhpcy5taW5sZW5ndGgsXG4gICAgICBtYXhMZW5ndGg6IHRoaXMubWF4bGVuZ3RoLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgYXV0b0NhcGl0YWxpemU6IGF1dG9jYXBpdGFsaXplID09PSAnZGVmYXVsdCcgPyB1bmRlZmluZWQgOiBhdXRvY2FwaXRhbGl6ZSxcbiAgICAgIGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsXG4gICAgICBhdXRvQ29ycmVjdDogdGhpcy5hdXRvY29ycmVjdCxcbiAgICAgIHNwZWxsY2hlY2s6IHRoaXMuc3BlbGxjaGVja1xuICAgIH0sIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcykpLCBtb2RlID09PSAnbWQnICYmIGNhbmNlbEJ1dHRvbiwgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGtleTogJzg4MjVmZDEzYWYwZDJkZWE0NTFjY2MwZTAwYWU3YjUwMjFkYzAxYzQnLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBpY29uOiBzZWFyY2hJY29uLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBjbGFzczogXCJzZWFyY2hiYXItc2VhcmNoLWljb25cIlxuICAgIH0pLCBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJzhhN2I1NmRhMjc4YjljYTVjNGY1YTRlZTljMDE5MjRmZDVhZTI5ZDgnLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwicmVzZXRcIixcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBcIm5vLWJsdXJcIjogdHJ1ZSxcbiAgICAgIGNsYXNzOiBcInNlYXJjaGJhci1jbGVhci1idXR0b25cIixcbiAgICAgIG9uUG9pbnRlckRvd246IGV2ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgcHJldmVudHMgbW9iaWxlIGJyb3dzZXJzIGZyb21cbiAgICAgICAgICogYmx1cnJpbmcgdGhlIGlucHV0IHdoZW4gdGhlIGNsZWFyXG4gICAgICAgICAqIGJ1dHRvbiBpcyBhY3RpdmF0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMub25DbGVhcklucHV0KHRydWUpXG4gICAgfSwgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGtleTogJzI0YzU1Mjc0NTE2YWIwMTJkOGMyNWYwMzUyNWM2Y2RiOTQwOWU1MmYnLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBpY29uOiBjbGVhckljb24sXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGNsYXNzOiBcInNlYXJjaGJhci1jbGVhci1pY29uXCJcbiAgICB9KSkpLCBtb2RlID09PSAnaW9zJyAmJiBjYW5jZWxCdXR0b24pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImxhbmdcIjogW1wib25MYW5nQ2hhbmdlZFwiXSxcbiAgICAgIFwiZGlyXCI6IFtcIm9uRGlyQ2hhbmdlZFwiXSxcbiAgICAgIFwiZGVib3VuY2VcIjogW1wiZGVib3VuY2VDaGFuZ2VkXCJdLFxuICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl0sXG4gICAgICBcInNob3dDYW5jZWxCdXR0b25cIjogW1wic2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xubGV0IHNlYXJjaGJhcklkcyA9IDA7XG5TZWFyY2hiYXIuc3R5bGUgPSB7XG4gIGlvczogSW9uU2VhcmNoYmFySW9zU3R5bGUwLFxuICBtZDogSW9uU2VhcmNoYmFyTWRTdHlsZTBcbn07XG5leHBvcnQgeyBTZWFyY2hiYXIgYXMgaW9uX3NlYXJjaGJhciB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSx1QkFBdUI7QUFDN0IsSUFBTSxZQUFZLE1BQU07QUFBQSxFQUN0QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUMvQyxTQUFLLFlBQVksWUFBWSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxTQUFLLFlBQVksWUFBWSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUMvQyxTQUFLLFVBQVUsWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVks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QUFlO0FBQUEsTUFDZjtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1QsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLFNBQVMsWUFBWTtBQUFBLEVBQ3RDO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxXQUFXLFdBQVc7QUFDcEIsV0FBTztBQUFBLE1BQ0wsUUFBUSxDQUFDLGVBQWU7QUFBQSxNQUN4QixPQUFPLENBQUMsY0FBYztBQUFBLE1BQ3RCLFlBQVksQ0FBQyxpQkFBaUI7QUFBQSxNQUM5QixTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLG9CQUFvQixDQUFDLHlCQUF5QjtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBSSxlQUFlO0FBQ25CLFVBQVUsUUFBUTtBQUFBLEVBQ2hCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
