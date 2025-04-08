import {
  isOptionSelected
} from "./chunk-SMKEODLY.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QQMTNXUN.js";
import {
  addEventListener,
  removeEventListener,
  renderHiddenInput
} from "./chunk-RRWPYKYY.js";
import {
  getIonMode
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

// node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js
var radioIosCss = ':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}';
var IonRadioIosStyle0 = radioIosCss;
var radioMdCss = ':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}';
var IonRadioMdStyle0 = radioMdCss;
var Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    this.radioGroup = null;
    this.updateState = () => {
      if (this.radioGroup) {
        const {
          compareWith,
          value: radioGroupValue
        } = this.radioGroup;
        this.checked = isOptionSelected(radioGroupValue, this.value, compareWith);
      }
    };
    this.onClick = () => {
      const {
        radioGroup,
        checked,
        disabled
      } = this;
      if (disabled) {
        return;
      }
      if (checked && (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowEmptySelection)) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.checked = false;
    this.buttonTabindex = -1;
    this.color = void 0;
    this.name = this.inputId;
    this.disabled = false;
    this.value = void 0;
    this.labelPlacement = "start";
    this.justify = void 0;
    this.alignment = void 0;
  }
  valueChanged() {
    this.updateState();
  }
  componentDidLoad() {
    this.updateState();
  }
  /** @internal */
  setFocus(ev) {
    return __async(this, null, function* () {
      if (ev !== void 0) {
        ev.stopPropagation();
        ev.preventDefault();
      }
      this.el.focus();
    });
  }
  /** @internal */
  setButtonTabindex(value) {
    return __async(this, null, function* () {
      this.buttonTabindex = value;
    });
  }
  connectedCallback() {
    if (this.value === void 0) {
      this.value = this.inputId;
    }
    const radioGroup = this.radioGroup = this.el.closest("ion-radio-group");
    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, "ionValueChange", this.updateState);
    }
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      removeEventListener(radioGroup, "ionValueChange", this.updateState);
      this.radioGroup = null;
    }
  }
  get hasLabel() {
    return this.el.textContent !== "";
  }
  renderRadioControl() {
    return h("div", {
      class: "radio-icon",
      part: "container"
    }, h("div", {
      class: "radio-inner",
      part: "mark"
    }), h("div", {
      class: "radio-ripple"
    }));
  }
  render() {
    const {
      checked,
      disabled,
      color,
      el,
      justify,
      labelPlacement,
      hasLabel,
      buttonTabindex,
      alignment
    } = this;
    const mode = getIonMode(this);
    const inItem = hostContext("ion-item", el);
    return h(Host, {
      key: "8badd4aec277addc0793e14df21f73bb345e99b7",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      class: createColorClasses(color, {
        [mode]: true,
        "in-item": inItem,
        "radio-checked": checked,
        "radio-disabled": disabled,
        [`radio-justify-${justify}`]: justify !== void 0,
        [`radio-alignment-${alignment}`]: alignment !== void 0,
        [`radio-label-placement-${labelPlacement}`]: true,
        // Focus and active styling should not apply when the radio is in an item
        "ion-activatable": !inItem,
        "ion-focusable": !inItem
      }),
      role: "radio",
      "aria-checked": checked ? "true" : "false",
      "aria-disabled": disabled ? "true" : null,
      tabindex: buttonTabindex
    }, h("label", {
      key: "8765b847edc93a1b5a16506e155ed03da807bb10",
      class: "radio-wrapper"
    }, h("div", {
      key: "3d568a0192a32d4f0b8a920019c79ff02639b5c9",
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !hasLabel
      },
      part: "label"
    }, h("slot", {
      key: "331f3dc2ce5f6ed8f124fc4560f92e0f7c668a85"
    })), h("div", {
      key: "473bd4aaf448753e385f2dda3fddc9f56379aa19",
      class: "native-wrapper"
    }, this.renderRadioControl())));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
var radioButtonIds = 0;
Radio.style = {
  ios: IonRadioIosStyle0,
  md: IonRadioMdStyle0
};
var radioGroupIosCss = "ion-radio-group{vertical-align:top}.radio-group-wrapper{display:inline}.radio-group-top{line-height:1.5}.radio-group-top .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.radio-group-top .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid .radio-group-top .error-text{display:block}.ion-touched.ion-invalid .radio-group-top .helper-text{display:none}ion-list .radio-group-top{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}";
var IonRadioGroupIosStyle0 = radioGroupIosCss;
var radioGroupMdCss = "ion-radio-group{vertical-align:top}.radio-group-wrapper{display:inline}.radio-group-top{line-height:1.5}.radio-group-top .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.radio-group-top .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid .radio-group-top .error-text{display:block}.ion-touched.ion-invalid .radio-group-top .helper-text{display:none}ion-list .radio-group-top{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}";
var IonRadioGroupMdStyle0 = radioGroupMdCss;
var RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    this.labelId = `${this.inputId}-lbl`;
    this.setRadioTabindex = (value) => {
      const radios = this.getRadios();
      const first = radios.find((radio) => !radio.disabled);
      const checked = radios.find((radio) => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = (ev) => {
      ev.preventDefault();
      const selectedRadio = ev.target && ev.target.closest("ion-radio");
      if (selectedRadio && !selectedRadio.disabled) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
          this.emitValueChange(ev);
        } else if (this.allowEmptySelection) {
          this.value = void 0;
          this.emitValueChange(ev);
        }
      }
    };
    this.allowEmptySelection = false;
    this.compareWith = void 0;
    this.name = this.inputId;
    this.value = void 0;
    this.helperText = void 0;
    this.errorText = void 0;
  }
  valueChanged(value) {
    this.setRadioTabindex(value);
    this.ionValueChange.emit({
      value
    });
  }
  componentDidLoad() {
    this.valueChanged(this.value);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const header = this.el.querySelector("ion-list-header") || this.el.querySelector("ion-item-divider");
      if (header) {
        const label = this.label = header.querySelector("ion-label");
        if (label) {
          this.labelId = label.id = this.name + "-lbl";
        }
      }
    });
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll("ion-radio"));
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
    this.ionChange.emit({
      value,
      event
    });
  }
  onKeydown(ev) {
    const inSelectInterface = !!this.el.closest("ion-select-popover") || !!this.el.closest("ion-select-modal");
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    const radios = this.getRadios().filter((radio) => !radio.disabled);
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);
      const current = radios[index];
      let next;
      if (["ArrowDown", "ArrowRight"].includes(ev.key)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      if (["ArrowUp", "ArrowLeft"].includes(ev.key)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        if (!inSelectInterface) {
          this.value = next.value;
          this.emitValueChange(ev);
        }
      }
      if ([" "].includes(ev.key)) {
        const previousValue = this.value;
        this.value = this.allowEmptySelection && this.value !== void 0 ? void 0 : current.value;
        if (previousValue !== this.value || this.allowEmptySelection) {
          this.emitValueChange(ev);
        }
        ev.preventDefault();
      }
    }
  }
  /** @internal */
  setFocus() {
    return __async(this, null, function* () {
      const radioToFocus = this.getRadios().find((r) => r.tabIndex !== -1);
      radioToFocus === null || radioToFocus === void 0 ? void 0 : radioToFocus.setFocus();
    });
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const {
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    const hasHintText = !!helperText || !!errorText;
    if (!hasHintText) {
      return;
    }
    return h("div", {
      class: "radio-group-top"
    }, h("div", {
      id: helperTextId,
      class: "helper-text"
    }, helperText), h("div", {
      id: errorTextId,
      class: "error-text"
    }, errorText));
  }
  getHintTextID() {
    const {
      el,
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    if (el.classList.contains("ion-touched") && el.classList.contains("ion-invalid") && errorText) {
      return errorTextId;
    }
    if (helperText) {
      return helperTextId;
    }
    return void 0;
  }
  render() {
    const {
      label,
      labelId,
      el,
      name,
      value
    } = this;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, name, value, false);
    return h(Host, {
      key: "cac92777297029d7fd1b6af264d92850e35dfbba",
      role: "radiogroup",
      "aria-labelledby": label ? labelId : null,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId,
      onClick: this.onClick,
      class: mode
    }, this.renderHintText(), h("div", {
      key: "6b5c634dba30d54eedc031b077863f3d6a9d9e9b",
      class: "radio-group-wrapper"
    }, h("slot", {
      key: "443edb3ff6f4c59d4c4324c8a19f2d6def47a322"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
var radioGroupIds = 0;
RadioGroup.style = {
  ios: IonRadioGroupIosStyle0,
  md: IonRadioGroupMdStyle0
};
export {
  Radio as ion_radio,
  RadioGroup as ion_radio_group
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-radio_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFkaW9fMi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgYSBhcyBhZGRFdmVudExpc3RlbmVyLCBiIGFzIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGQgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgaSBhcyBpc09wdGlvblNlbGVjdGVkIH0gZnJvbSAnLi9jb21wYXJlLXdpdGgtdXRpbHMtYTk2ZmYyZWEuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IHJhZGlvSW9zQ3NzID0gXCI6aG9zdHstLWlubmVyLWJvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCgucmFkaW8tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhZGlvLWljb257ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX0ucmFkaW8taWNvbiwucmFkaW8taW5uZXJ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZX06aG9zdCguaW4taXRlbSl7LW1zLWZsZXg6MSAxIDBweDtmbGV4OjEgMSAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbDt3aWR0aDphdXRvfS5yYWRpby13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0O2N1cnNvcjppbmhlcml0fS5sYWJlbC10ZXh0LXdyYXBwZXJ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5pbi1pdGVtKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHh9Omhvc3QoLmluLWl0ZW0ucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTZweH06aG9zdCguaW4taXRlbS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1ib3R0b206MTBweH0ubGFiZWwtdGV4dC13cmFwcGVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbikgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5yYWRpby1qdXN0aWZ5LXN0YXJ0KSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpzdGFydH06aG9zdCgucmFkaW8tanVzdGlmeS1lbmQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDplbmR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6c3RhcnR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbiksOmhvc3QoLnJhZGlvLWp1c3RpZnktc3RhcnQpLDpob3N0KC5yYWRpby1qdXN0aWZ5LWVuZCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpe2Rpc3BsYXk6YmxvY2t9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtZW5kKSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNzUpO3RyYW5zZm9ybTpzY2FsZSgwLjc1KTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206MTZweDttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LXN0YXJ0KSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQ6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXI6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9fTpob3N0ey0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmlvbi1jb2xvci5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaXRlbS1yYWRpby5pdGVtLWlvcyBpb24tbGFiZWx7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjB9LnJhZGlvLWlubmVye3dpZHRoOjMzJTtoZWlnaHQ6NTAlfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItd2lkdGg6MC4xMjVyZW07Ym9yZGVyLXRvcC13aWR0aDowO2JvcmRlci1sZWZ0LXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jb2xvci1jaGVja2VkKX06aG9zdCgucmFkaW8tZGlzYWJsZWQpe29wYWNpdHk6MC4zfTpob3N0KC5pb24tZm9jdXNlZCkgLnJhZGlvLWljb246OmFmdGVye2JvcmRlci1yYWRpdXM6dmFyKC0taW5uZXItYm9yZGVyLXJhZGl1cyk7dG9wOi04cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozNnB4O2hlaWdodDozNnB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzFhNjVlYik7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjAuMn06aG9zdCguaW9uLWZvY3VzZWQpIC5yYWRpby1pY29uOjphZnRlcntpbnNldC1pbmxpbmUtc3RhcnQ6LTlweH0ubmF0aXZlLXdyYXBwZXIgLnJhZGlvLWljb257d2lkdGg6MC45Mzc1cmVtO2hlaWdodDoxLjVyZW19XCI7XG5jb25zdCBJb25SYWRpb0lvc1N0eWxlMCA9IHJhZGlvSW9zQ3NzO1xuY29uc3QgcmFkaW9NZENzcyA9IFwiOmhvc3R7LS1pbm5lci1ib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mjstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoLnJhZGlvLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfS5yYWRpby1pY29ue2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9LnJhZGlvLWljb24sLnJhZGlvLWlubmVyey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1pbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtvdXRsaW5lOjA7Y2xpcDpyZWN0KDAgMCAwIDApO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9Omhvc3QoOmZvY3VzKXtvdXRsaW5lOm5vbmV9Omhvc3QoLmluLWl0ZW0pey1tcy1mbGV4OjEgMSAwcHg7ZmxleDoxIDEgMDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfTpob3N0KFtzbG90PXN0YXJ0XSksOmhvc3QoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXg6aW5pdGlhbDtmbGV4OmluaXRpYWw7d2lkdGg6YXV0b30ucmFkaW8td3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2hlaWdodDppbmhlcml0O21pbi1oZWlnaHQ6aW5oZXJpdDtjdXJzb3I6aW5oZXJpdH0ubGFiZWwtdGV4dC13cmFwcGVye3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn06aG9zdCguaW4taXRlbSkgLmxhYmVsLXRleHQtd3JhcHBlcnttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4fTpob3N0KC5pbi1pdGVtLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjE2cHh9Omhvc3QoLmluLWl0ZW0ucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5uYXRpdmUtd3JhcHBlcnttYXJnaW4tYm90dG9tOjEwcHh9LmxhYmVsLXRleHQtd3JhcHBlci1oaWRkZW57ZGlzcGxheTpub25lfS5uYXRpdmUtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0KC5yYWRpby1qdXN0aWZ5LXNwYWNlLWJldHdlZW4pIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdCgucmFkaW8tanVzdGlmeS1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnR9Omhvc3QoLnJhZGlvLWp1c3RpZnktZW5kKSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kfTpob3N0KC5yYWRpby1hbGlnbm1lbnQtc3RhcnQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOnN0YXJ0fTpob3N0KC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0KC5yYWRpby1qdXN0aWZ5LXNwYWNlLWJldHdlZW4pLDpob3N0KC5yYWRpby1qdXN0aWZ5LXN0YXJ0KSw6aG9zdCgucmFkaW8tanVzdGlmeS1lbmQpLDpob3N0KC5yYWRpby1hbGlnbm1lbnQtc3RhcnQpLDpob3N0KC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweH06aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LWVuZCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtZW5kKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtZml4ZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LW1zLWZsZXg6MCAwIDEwMHB4O2ZsZXg6MCAwIDEwMHB4O3dpZHRoOjEwMHB4O21pbi13aWR0aDoxMDBweH06aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjc1KTt0cmFuc2Zvcm06c2NhbGUoMC43NSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOjE2cHg7bWF4LXdpZHRoOmNhbGMoMTAwJSAvIDAuNzUpfTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LXN0YXJ0IC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LXN0YXJ0OmRpcihydGwpKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LWNlbnRlcikgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LWNlbnRlciAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyOmRpcihydGwpKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wfX06aG9zdHstLWNvbG9yOnJnYih2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjYpOy0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1ib3JkZXItd2lkdGg6MC4xMjVyZW07LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3JkZXItcmFkaXVzOjUwJX06aG9zdCguaW9uLWNvbG9yKSAucmFkaW8taW5uZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmlvbi1jb2xvci5yYWRpby1jaGVja2VkKSAucmFkaW8taWNvbntib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5yYWRpby1pY29ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1jb2xvcil9LnJhZGlvLWlubmVye2JvcmRlci1yYWRpdXM6dmFyKC0taW5uZXItYm9yZGVyLXJhZGl1cyk7d2lkdGg6Y2FsYyg1MCUgKyB2YXIoLS1ib3JkZXItd2lkdGgpKTtoZWlnaHQ6Y2FsYyg1MCUgKyB2YXIoLS1ib3JkZXItd2lkdGgpKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsIDAsIDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsIDAsIDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1jaGVja2VkKX06aG9zdCgucmFkaW8tY2hlY2tlZCkgLnJhZGlvLWljb257Ym9yZGVyLWNvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKX06aG9zdCgucmFkaW8tZGlzYWJsZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7b3BhY2l0eTowLjM4fTpob3N0KC5yYWRpby1kaXNhYmxlZCkgLm5hdGl2ZS13cmFwcGVye29wYWNpdHk6MC42M306aG9zdCguaW9uLWZvY3VzZWQpIC5yYWRpby1pY29uOjphZnRlcntib3JkZXItcmFkaXVzOnZhcigtLWlubmVyLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzZweDtoZWlnaHQ6MzZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICMxYTY1ZWIpO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowLjJ9Lm5hdGl2ZS13cmFwcGVyIC5yYWRpby1pY29ue3dpZHRoOjEuMjVyZW07aGVpZ2h0OjEuMjVyZW19XCI7XG5jb25zdCBJb25SYWRpb01kU3R5bGUwID0gcmFkaW9NZENzcztcbmNvbnN0IFJhZGlvID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1yYi0ke3JhZGlvQnV0dG9uSWRzKyt9YDtcbiAgICB0aGlzLnJhZGlvR3JvdXAgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb21wYXJlV2l0aCxcbiAgICAgICAgICB2YWx1ZTogcmFkaW9Hcm91cFZhbHVlXG4gICAgICAgIH0gPSB0aGlzLnJhZGlvR3JvdXA7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGlzT3B0aW9uU2VsZWN0ZWQocmFkaW9Hcm91cFZhbHVlLCB0aGlzLnZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJhZGlvR3JvdXAsXG4gICAgICAgIGNoZWNrZWQsXG4gICAgICAgIGRpc2FibGVkXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtb2Rlcm4gY29udHJvbCBkb2VzIG5vdCB1c2UgYSBuYXRpdmUgaW5wdXRcbiAgICAgICAqIGluc2lkZSBvZiB0aGUgcmFkaW8gaG9zdCwgc28gd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gICAgICAgKiBldi5wcmV2ZW50RGVmYXVsdCgpIGJlaGF2aW9yIGFib3ZlLiBJZiB0aGUgcmFkaW9cbiAgICAgICAqIGlzIGNoZWNrZWQgYW5kIHRoZSBwYXJlbnQgcmFkaW8gZ3JvdXAgYWxsb3dzIGZvciBlbXB0eVxuICAgICAgICogc2VsZWN0aW9uLCB0aGVuIHdlIGNhbiBzZXQgdGhlIGNoZWNrZWQgc3RhdGUgdG8gZmFsc2UuXG4gICAgICAgKiBPdGhlcndpc2UsIHRoZSBjaGVja2VkIHN0YXRlIHNob3VsZCBhbHdheXMgYmUgc2V0XG4gICAgICAgKiB0byB0cnVlIGJlY2F1c2UgdGhlIGNoZWNrZWQgc3RhdGUgY2Fubm90IGJlIHRvZ2dsZWQuXG4gICAgICAgKi9cbiAgICAgIGlmIChjaGVja2VkICYmIChyYWRpb0dyb3VwID09PSBudWxsIHx8IHJhZGlvR3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJhZGlvR3JvdXAuYWxsb3dFbXB0eVNlbGVjdGlvbikpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1dHRvblRhYmluZGV4ID0gLTE7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgdGhpcy5qdXN0aWZ5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWxpZ25tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmV3IHZhbHVlIG9mIHRoZSByYWRpbyBtYXlcbiAgICAgKiBtYXRjaCB0aGUgcmFkaW8gZ3JvdXAncyB2YWx1ZSxcbiAgICAgKiBzbyB3ZSBzZWUgaWYgaXQgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAgICovXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG1heSBiZSBgdW5kZWZpbmVkYCBpZiBpdFxuICAgICAqIGdldHMgc2V0IGJlZm9yZSB0aGUgcmFkaW8gaXNcbiAgICAgKiByZW5kZXJlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJhZGlvXG4gICAgICogaXMgY2hlY2tlZCBpZiB0aGUgdmFsdWUgbWF0Y2hlcy4gVGhpc1xuICAgICAqIGhhcHBlbnMgbW9zdCBvZnRlbiB3aGVuIEFuZ3VsYXIgaXNcbiAgICAgKiByZW5kZXJpbmcgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIHNldEZvY3VzKGV2KSB7XG4gICAgaWYgKGV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgc2V0QnV0dG9uVGFiaW5kZXgodmFsdWUpIHtcbiAgICB0aGlzLmJ1dHRvblRhYmluZGV4ID0gdmFsdWU7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXRJZDtcbiAgICB9XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMucmFkaW9Hcm91cCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXJhZGlvLWdyb3VwJyk7XG4gICAgaWYgKHJhZGlvR3JvdXApIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIocmFkaW9Hcm91cCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLnJhZGlvR3JvdXA7XG4gICAgaWYgKHJhZGlvR3JvdXApIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIocmFkaW9Hcm91cCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwudGV4dENvbnRlbnQgIT09ICcnO1xuICB9XG4gIHJlbmRlclJhZGlvQ29udHJvbCgpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1pY29uXCIsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1pbm5lclwiLFxuICAgICAgcGFydDogXCJtYXJrXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1yaXBwbGVcIlxuICAgIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY29sb3IsXG4gICAgICBlbCxcbiAgICAgIGp1c3RpZnksXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIGhhc0xhYmVsLFxuICAgICAgYnV0dG9uVGFiaW5kZXgsXG4gICAgICBhbGlnbm1lbnRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBpbkl0ZW0gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnOGJhZGQ0YWVjMjc3YWRkYzA3OTNlMTRkZjIxZjczYmIzNDVlOTliNycsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpbi1pdGVtJzogaW5JdGVtLFxuICAgICAgICAncmFkaW8tY2hlY2tlZCc6IGNoZWNrZWQsXG4gICAgICAgICdyYWRpby1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICBbYHJhZGlvLWp1c3RpZnktJHtqdXN0aWZ5fWBdOiBqdXN0aWZ5ICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgcmFkaW8tYWxpZ25tZW50LSR7YWxpZ25tZW50fWBdOiBhbGlnbm1lbnQgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2ByYWRpby1sYWJlbC1wbGFjZW1lbnQtJHtsYWJlbFBsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgICAgLy8gRm9jdXMgYW5kIGFjdGl2ZSBzdHlsaW5nIHNob3VsZCBub3QgYXBwbHkgd2hlbiB0aGUgcmFkaW8gaXMgaW4gYW4gaXRlbVxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogIWluSXRlbSxcbiAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiAhaW5JdGVtXG4gICAgICB9KSxcbiAgICAgIHJvbGU6IFwicmFkaW9cIixcbiAgICAgIFwiYXJpYS1jaGVja2VkXCI6IGNoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIHRhYmluZGV4OiBidXR0b25UYWJpbmRleFxuICAgIH0sIGgoXCJsYWJlbFwiLCB7XG4gICAgICBrZXk6ICc4NzY1Yjg0N2VkYzkzYTFiNWExNjUwNmUxNTVlZDAzZGE4MDdiYjEwJyxcbiAgICAgIGNsYXNzOiBcInJhZGlvLXdyYXBwZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnM2Q1NjhhMDE5MmEzMmQ0ZjBiOGE5MjAwMTljNzlmZjAyNjM5YjVjOScsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnbGFiZWwtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4nOiAhaGFzTGFiZWxcbiAgICAgIH0sXG4gICAgICBwYXJ0OiBcImxhYmVsXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICczMzFmM2RjMmNlNWY2ZWQ4ZjEyNGZjNDU2MGY5MmUwZjdjNjY4YTg1J1xuICAgIH0pKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc0NzNiZDRhYWY0NDg3NTNlMzg1ZjJkZGEzZmRkYzlmNTYzNzlhYTE5JyxcbiAgICAgIGNsYXNzOiBcIm5hdGl2ZS13cmFwcGVyXCJcbiAgICB9LCB0aGlzLnJlbmRlclJhZGlvQ29udHJvbCgpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgcmFkaW9CdXR0b25JZHMgPSAwO1xuUmFkaW8uc3R5bGUgPSB7XG4gIGlvczogSW9uUmFkaW9Jb3NTdHlsZTAsXG4gIG1kOiBJb25SYWRpb01kU3R5bGUwXG59O1xuY29uc3QgcmFkaW9Hcm91cElvc0NzcyA9IFwiaW9uLXJhZGlvLWdyb3Vwe3ZlcnRpY2FsLWFsaWduOnRvcH0ucmFkaW8tZ3JvdXAtd3JhcHBlcntkaXNwbGF5OmlubGluZX0ucmFkaW8tZ3JvdXAtdG9we2xpbmUtaGVpZ2h0OjEuNX0ucmFkaW8tZ3JvdXAtdG9wIC5lcnJvci10ZXh0e2Rpc3BsYXk6bm9uZTtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjYzUwMDBmKX0ucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTcwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zMDAsICM0ZDRkNGQpKX0uaW9uLXRvdWNoZWQuaW9uLWludmFsaWQgLnJhZGlvLWdyb3VwLXRvcCAuZXJyb3ItdGV4dHtkaXNwbGF5OmJsb2NrfS5pb24tdG91Y2hlZC5pb24taW52YWxpZCAucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5Om5vbmV9aW9uLWxpc3QgLnJhZGlvLWdyb3VwLXRvcHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH1cIjtcbmNvbnN0IElvblJhZGlvR3JvdXBJb3NTdHlsZTAgPSByYWRpb0dyb3VwSW9zQ3NzO1xuY29uc3QgcmFkaW9Hcm91cE1kQ3NzID0gXCJpb24tcmFkaW8tZ3JvdXB7dmVydGljYWwtYWxpZ246dG9wfS5yYWRpby1ncm91cC13cmFwcGVye2Rpc3BsYXk6aW5saW5lfS5yYWRpby1ncm91cC10b3B7bGluZS1oZWlnaHQ6MS41fS5yYWRpby1ncm91cC10b3AgLmVycm9yLXRleHR7ZGlzcGxheTpub25lO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNjNTAwMGYpfS5yYWRpby1ncm91cC10b3AgLmhlbHBlci10ZXh0e2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTMwMCwgIzRkNGQ0ZCkpfS5pb24tdG91Y2hlZC5pb24taW52YWxpZCAucmFkaW8tZ3JvdXAtdG9wIC5lcnJvci10ZXh0e2Rpc3BsYXk6YmxvY2t9Lmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkIC5yYWRpby1ncm91cC10b3AgLmhlbHBlci10ZXh0e2Rpc3BsYXk6bm9uZX1pb24tbGlzdCAucmFkaW8tZ3JvdXAtdG9wey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4fVwiO1xuY29uc3QgSW9uUmFkaW9Hcm91cE1kU3R5bGUwID0gcmFkaW9Hcm91cE1kQ3NzO1xuY29uc3QgUmFkaW9Hcm91cCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlvblZhbHVlQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25WYWx1ZUNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlucHV0SWQgPSBgaW9uLXJnLSR7cmFkaW9Hcm91cElkcysrfWA7XG4gICAgdGhpcy5oZWxwZXJUZXh0SWQgPSBgJHt0aGlzLmlucHV0SWR9LWhlbHBlci10ZXh0YDtcbiAgICB0aGlzLmVycm9yVGV4dElkID0gYCR7dGhpcy5pbnB1dElkfS1lcnJvci10ZXh0YDtcbiAgICB0aGlzLmxhYmVsSWQgPSBgJHt0aGlzLmlucHV0SWR9LWxibGA7XG4gICAgdGhpcy5zZXRSYWRpb1RhYmluZGV4ID0gdmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmFkaW9zID0gdGhpcy5nZXRSYWRpb3MoKTtcbiAgICAgIC8vIEdldCB0aGUgZmlyc3QgcmFkaW8gdGhhdCBpcyBub3QgZGlzYWJsZWQgYW5kIHRoZSBjaGVja2VkIG9uZVxuICAgICAgY29uc3QgZmlyc3QgPSByYWRpb3MuZmluZChyYWRpbyA9PiAhcmFkaW8uZGlzYWJsZWQpO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJhZGlvcy5maW5kKHJhZGlvID0+IHJhZGlvLnZhbHVlID09PSB2YWx1ZSAmJiAhcmFkaW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKCFmaXJzdCAmJiAhY2hlY2tlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBJZiBhbiBlbmFibGVkIGNoZWNrZWQgcmFkaW8gZXhpc3RzLCBzZXQgaXQgdG8gYmUgdGhlIGZvY3VzYWJsZSByYWRpb1xuICAgICAgLy8gb3RoZXJ3aXNlIHdlIGRlZmF1bHQgdG8gZm9jdXMgdGhlIGZpcnN0IHJhZGlvXG4gICAgICBjb25zdCBmb2N1c2FibGUgPSBjaGVja2VkIHx8IGZpcnN0O1xuICAgICAgZm9yIChjb25zdCByYWRpbyBvZiByYWRpb3MpIHtcbiAgICAgICAgY29uc3QgdGFiaW5kZXggPSByYWRpbyA9PT0gZm9jdXNhYmxlID8gMCA6IC0xO1xuICAgICAgICByYWRpby5zZXRCdXR0b25UYWJpbmRleCh0YWJpbmRleCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBldiA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgUmFkaW8gR3JvdXAgY29tcG9uZW50IG1hbmRhdGVzIHRoYXQgb25seSBvbmUgcmFkaW8gYnV0dG9uXG4gICAgICAgKiB3aXRoaW4gdGhlIGdyb3VwIGNhbiBiZSBzZWxlY3RlZCBhdCBhbnkgZ2l2ZW4gdGltZS4gU2luY2UgYGlvbi1yYWRpb2BcbiAgICAgICAqIGlzIGEgc2hhZG93IERPTSBjb21wb25lbnQsIGl0IGNhbm5vdCBuYXRpdmVseSBwZXJmb3JtIHRoaXMgYmVoYXZpb3JcbiAgICAgICAqIHVzaW5nIHRoZSBgbmFtZWAgYXR0cmlidXRlLlxuICAgICAgICovXG4gICAgICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZXYudGFyZ2V0ICYmIGV2LnRhcmdldC5jbG9zZXN0KCdpb24tcmFkaW8nKTtcbiAgICAgIC8qKlxuICAgICAgICogT3VyIGN1cnJlbnQgZGlzYWJsZWQgcHJvcCBkZWZpbml0aW9uIGNhdXNlcyBTdGVuY2lsIHRvIG1hcmsgaXRcbiAgICAgICAqIGFzIG9wdGlvbmFsLiBXaGlsZSB0aGlzIGlzIG5vdCBkZXNpcmVkLCBmaXhpbmcgdGhpcyBiZWhhdmlvclxuICAgICAgICogaW4gU3RlbmNpbCBpcyBhIHNpZ25pZmljYW50IGJyZWFraW5nIGNoYW5nZSwgc28gdGhpcyBlZmZvcnQgaXNcbiAgICAgICAqIGJlaW5nIGRlLXJpc2tlZCBpbiBTVEVOQ0lMLTkxNy4gVW50aWwgdGhlbiwgd2UgY29tcHJvbWlzZVxuICAgICAgICogaGVyZSBieSBjaGVja2luZyBmb3IgZmFsc3kgYGRpc2FibGVkYCB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpY3RseVxuICAgICAgICogY2hlY2tpbmcgYGRpc2FibGVkID09PSBmYWxzZWAuXG4gICAgICAgKi9cbiAgICAgIGlmIChzZWxlY3RlZFJhZGlvICYmICFzZWxlY3RlZFJhZGlvLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc2VsZWN0ZWRSYWRpby52YWx1ZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWxsb3dFbXB0eVNlbGVjdGlvbikge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmNvbXBhcmVXaXRoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVscGVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVycm9yVGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVGFiaW5kZXgodmFsdWUpO1xuICAgIHRoaXMuaW9uVmFsdWVDaGFuZ2UuZW1pdCh7XG4gICAgICB2YWx1ZVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogVGhlcmUncyBhbiBpc3N1ZSB3aGVuIGFzc2lnbmluZyBhIHZhbHVlIHRvIHRoZSByYWRpbyBncm91cFxuICAgICAqIHdpdGhpbiB0aGUgQW5ndWxhciBwcmltYXJ5IGNvbnRlbnQgKHJlbmRlcmluZyB3aXRoaW4gdGhlXG4gICAgICogYXBwIGNvbXBvbmVudCB0ZW1wbGF0ZSkuIFdoZW4gdGhlIHRlbXBsYXRlIGlzIGlzb2xhdGVkIHRvIGEgcm91dGUsXG4gICAgICogdGhlIHZhbHVlIGlzIGFzc2lnbmVkIGNvcnJlY3RseS5cbiAgICAgKiBUbyBhZGRyZXNzIHRoaXMgaXNzdWUsIHdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIHdhdGNoZXIgaXNcbiAgICAgKiBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZmluaXNoZWQgbG9hZGluZyxcbiAgICAgKiBhbGxvd2luZyB0aGUgZW1pdCB0byBiZSBkaXNwYXRjaGVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBHZXQgdGhlIGxpc3QgaGVhZGVyIGlmIGl0IGV4aXN0cyBhbmQgc2V0IHRoZSBpZFxuICAgIC8vIHRoaXMgaXMgdXNlZCB0byBzZXQgYXJpYS1sYWJlbGxlZGJ5XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGlzdC1oZWFkZXInKSB8fCB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYWJlbElkID0gbGFiZWwuaWQgPSB0aGlzLm5hbWUgKyAnLWxibCc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldFJhZGlvcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1yYWRpbycpKTtcbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqXG4gICAqIFRoaXMgQVBJIHNob3VsZCBiZSBjYWxsZWQgZm9yIHVzZXIgY29tbWl0dGVkIGNoYW5nZXMuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIGVtaXRWYWx1ZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cbiAgb25LZXlkb3duKGV2KSB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0aGUgdmFsdWUgdG8gYXV0b21hdGljYWxseSBjaGFuZ2UvZW1pdCB3aGVuIHRoZSByYWRpbyBncm91cCBpcyBwYXJ0IG9mIGEgc2VsZWN0IGludGVyZmFjZVxuICAgIC8vIGFzIHRoaXMgd2lsbCBjYXVzZSB0aGUgaW50ZXJmYWNlIHRvIGNsb3NlIHdoZW4gbmF2aWdhdGluZyB0aHJvdWdoIHRoZSByYWRpbyBncm91cCBvcHRpb25zXG4gICAgY29uc3QgaW5TZWxlY3RJbnRlcmZhY2UgPSAhIXRoaXMuZWwuY2xvc2VzdCgnaW9uLXNlbGVjdC1wb3BvdmVyJykgfHwgISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1zZWxlY3QtbW9kYWwnKTtcbiAgICBpZiAoZXYudGFyZ2V0ICYmICF0aGlzLmVsLmNvbnRhaW5zKGV2LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IGFsbCByYWRpb3MgaW5zaWRlIG9mIHRoZSByYWRpbyBncm91cCBhbmQgdGhlblxuICAgIC8vIGZpbHRlciBvdXQgZGlzYWJsZWQgcmFkaW9zIHNpbmNlIHdlIG5lZWQgdG8gc2tpcCB0aG9zZVxuICAgIGNvbnN0IHJhZGlvcyA9IHRoaXMuZ2V0UmFkaW9zKCkuZmlsdGVyKHJhZGlvID0+ICFyYWRpby5kaXNhYmxlZCk7XG4gICAgLy8gT25seSBtb3ZlIHRoZSByYWRpbyBpZiB0aGUgY3VycmVudCBmb2N1cyBpcyBpbiB0aGUgcmFkaW8gZ3JvdXBcbiAgICBpZiAoZXYudGFyZ2V0ICYmIHJhZGlvcy5pbmNsdWRlcyhldi50YXJnZXQpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHJhZGlvcy5maW5kSW5kZXgocmFkaW8gPT4gcmFkaW8gPT09IGV2LnRhcmdldCk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gcmFkaW9zW2luZGV4XTtcbiAgICAgIGxldCBuZXh0O1xuICAgICAgLy8gSWYgaGl0dGluZyBhcnJvdyBkb3duIG9yIGFycm93IHJpZ2h0LCBtb3ZlIHRvIHRoZSBuZXh0IHJhZGlvXG4gICAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgbGFzdCByYWRpbywgbW92ZSB0byB0aGUgZmlyc3QgcmFkaW9cbiAgICAgIGlmIChbJ0Fycm93RG93bicsICdBcnJvd1JpZ2h0J10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgICBuZXh0ID0gaW5kZXggPT09IHJhZGlvcy5sZW5ndGggLSAxID8gcmFkaW9zWzBdIDogcmFkaW9zW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICAvLyBJZiBoaXR0aW5nIGFycm93IHVwIG9yIGFycm93IGxlZnQsIG1vdmUgdG8gdGhlIHByZXZpb3VzIHJhZGlvXG4gICAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgZmlyc3QgcmFkaW8sIG1vdmUgdG8gdGhlIGxhc3QgcmFkaW9cbiAgICAgIGlmIChbJ0Fycm93VXAnLCAnQXJyb3dMZWZ0J10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgICBuZXh0ID0gaW5kZXggPT09IDAgPyByYWRpb3NbcmFkaW9zLmxlbmd0aCAtIDFdIDogcmFkaW9zW2luZGV4IC0gMV07XG4gICAgICB9XG4gICAgICBpZiAobmV4dCAmJiByYWRpb3MuaW5jbHVkZXMobmV4dCkpIHtcbiAgICAgICAgbmV4dC5zZXRGb2N1cyhldik7XG4gICAgICAgIGlmICghaW5TZWxlY3RJbnRlcmZhY2UpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShldik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcmFkaW8gZ3JvdXAgdmFsdWUgd2hlbiBhIHVzZXIgcHJlc3NlcyB0aGVcbiAgICAgIC8vIHNwYWNlIGJhciBvbiB0b3Agb2YgYSBzZWxlY3RlZCByYWRpb1xuICAgICAgaWYgKFsnICddLmluY2x1ZGVzKGV2LmtleSkpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogY3VycmVudC52YWx1ZTtcbiAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUgIT09IHRoaXMudmFsdWUgfHwgdGhpcy5hbGxvd0VtcHR5U2VsZWN0aW9uKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVmFsdWUgY2hhbmdlIHNob3VsZCBvbmx5IGJlIGVtaXR0ZWQgaWYgdGhlIHZhbHVlIGlzIGRpZmZlcmVudCxcbiAgICAgICAgICAgKiBzdWNoIGFzIHNlbGVjdGluZyBhIG5ldyByYWRpbyB3aXRoIHRoZSBzcGFjZSBiYXIgb3IgaWZcbiAgICAgICAgICAgKiB0aGUgcmFkaW8gZ3JvdXAgYWxsb3dzIGZvciBlbXB0eSBzZWxlY3Rpb24gYW5kIHRoZSB1c2VyXG4gICAgICAgICAgICogaXMgZGVzZWxlY3RpbmcgYSBjaGVja2VkIHJhZGlvLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGV2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20ganVtcGluZ1xuICAgICAgICAvLyB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBjb25zdCByYWRpb1RvRm9jdXMgPSB0aGlzLmdldFJhZGlvcygpLmZpbmQociA9PiByLnRhYkluZGV4ICE9PSAtMSk7XG4gICAgcmFkaW9Ub0ZvY3VzID09PSBudWxsIHx8IHJhZGlvVG9Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmFkaW9Ub0ZvY3VzLnNldEZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGhlbHBlciB0ZXh0IG9yIGVycm9yIHRleHQgdmFsdWVzXG4gICAqL1xuICByZW5kZXJIaW50VGV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWxwZXJUZXh0LFxuICAgICAgZXJyb3JUZXh0LFxuICAgICAgaGVscGVyVGV4dElkLFxuICAgICAgZXJyb3JUZXh0SWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNIaW50VGV4dCA9ICEhaGVscGVyVGV4dCB8fCAhIWVycm9yVGV4dDtcbiAgICBpZiAoIWhhc0hpbnRUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJhZGlvLWdyb3VwLXRvcFwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBpZDogaGVscGVyVGV4dElkLFxuICAgICAgY2xhc3M6IFwiaGVscGVyLXRleHRcIlxuICAgIH0sIGhlbHBlclRleHQpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBlcnJvclRleHRJZCxcbiAgICAgIGNsYXNzOiBcImVycm9yLXRleHRcIlxuICAgIH0sIGVycm9yVGV4dCkpO1xuICB9XG4gIGdldEhpbnRUZXh0SUQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBoZWxwZXJUZXh0LFxuICAgICAgZXJyb3JUZXh0LFxuICAgICAgaGVscGVyVGV4dElkLFxuICAgICAgZXJyb3JUZXh0SWRcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tdG91Y2hlZCcpICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWludmFsaWQnKSAmJiBlcnJvclRleHQpIHtcbiAgICAgIHJldHVybiBlcnJvclRleHRJZDtcbiAgICB9XG4gICAgaWYgKGhlbHBlclRleHQpIHtcbiAgICAgIHJldHVybiBoZWxwZXJUZXh0SWQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxJZCxcbiAgICAgIGVsLFxuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIG5hbWUsIHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnY2FjOTI3NzcyOTcwMjlkN2ZkMWI2YWYyNjRkOTI4NTBlMzVkZmJiYScsXG4gICAgICByb2xlOiBcInJhZGlvZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsID8gbGFiZWxJZCA6IG51bGwsXG4gICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogdGhpcy5nZXRIaW50VGV4dElEKCksXG4gICAgICBcImFyaWEtaW52YWxpZFwiOiB0aGlzLmdldEhpbnRUZXh0SUQoKSA9PT0gdGhpcy5lcnJvclRleHRJZCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzOiBtb2RlXG4gICAgfSwgdGhpcy5yZW5kZXJIaW50VGV4dCgpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzZiNWM2MzRkYmEzMGQ1NGVlZGMwMzFiMDc3ODYzZjNkNmE5ZDllOWInLFxuICAgICAgY2xhc3M6IFwicmFkaW8tZ3JvdXAtd3JhcHBlclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNDQzZWRiM2ZmNmY0YzU5ZDRjNDMyNGM4YTE5ZjJkNmRlZjQ3YTMyMidcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgcmFkaW9Hcm91cElkcyA9IDA7XG5SYWRpb0dyb3VwLnN0eWxlID0ge1xuICBpb3M6IElvblJhZGlvR3JvdXBJb3NTdHlsZTAsXG4gIG1kOiBJb25SYWRpb0dyb3VwTWRTdHlsZTBcbn07XG5leHBvcnQgeyBSYWRpbyBhcyBpb25fcmFkaW8sIFJhZGlvR3JvdXAgYXMgaW9uX3JhZGlvX2dyb3VwIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLGNBQWM7QUFDcEIsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSxhQUFhO0FBQ25CLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sUUFBUSxNQUFNO0FBQUEsRUFDbEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxVQUFVLFVBQVUsZ0JBQWdCO0FBQ3pDLFNBQUssYUFBYTtBQUNsQixTQUFLLGNBQWMsTUFBTTtBQUN2QixVQUFJLEtBQUssWUFBWTtBQUNuQixjQUFNO0FBQUEsVUFDSjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1QsSUFBSSxLQUFLO0FBQ1QsYUFBSyxVQUFVLGlCQUFpQixpQkFBaUIsS0FBSyxPQUFPLFdBQVc7QUFB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QUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxpQkFBaUI7QUFDZixVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFVBQU0sY0FBYyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsUUFBSSxDQUFDLGFBQWE7QUFDaEI7QUFBQSxJQUNGO0FBQ0EsV0FBTyxFQUFFLE9BQU87QUFBQSxNQUNkLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxPQUFPO0FBQUEsTUFDVixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsSUFDVCxHQUFHLFVBQVUsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUN2QixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsSUFDVCxHQUFHLFNBQVMsQ0FBQztBQUFBLEVBQ2Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNkLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFFBQUksR0FBRyxVQUFVLFNBQVMsYUFBYSxLQUFLLEdBQUcsVUFBVSxTQUFTLGFBQWEsS0FBSyxXQUFXO0FBQzdGLGFBQU87QUFBQSxJQUNUO0FBQ0EsUUFBSSxZQUFZO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsc0JBQWtCLE1BQU0sSUFBSSxNQUFNLE9BQU8sS0FBSztBQUM5QyxXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sbUJBQW1CLFFBQVEsVUFBVTtBQUFBLE1BQ3JDLG9CQUFvQixLQUFLLGNBQWM7QUFBQSxNQUN2QyxnQkFBZ0IsS0FBSyxjQUFjLE1BQU0sS0FBSztBQUFBLE1BQzlDLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTztBQUFBLElBQ1QsR0FBRyxLQUFLLGVBQWUsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNqQyxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDVCxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxXQUFXLFdBQVc7QUFDcEIsV0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLGNBQWM7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksZ0JBQWdCO0FBQ3BCLFdBQVcsUUFBUTtBQUFBLEVBQ2pCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
