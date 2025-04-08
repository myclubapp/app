import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-7QVPRCLC.js";
import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  clamp,
  debounceEvent,
  inheritAriaAttributes,
  isSafeNumber,
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

// node_modules/@ionic/core/dist/esm/ion-range.entry.js
function getDecimalPlaces(n) {
  if (!isSafeNumber(n)) return 0;
  if (n % 1 === 0) return 0;
  return n.toString().split(".")[1].length;
}
function roundToMaxDecimalPlaces(n, ...references) {
  if (!isSafeNumber(n)) return 0;
  const maxPlaces = Math.max(...references.map((r) => getDecimalPlaces(r)));
  return Number(n.toFixed(maxPlaces));
}
var rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}";
var IonRangeIosStyle0 = rangeIosCss;
var rangeMdCss = ':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}';
var IonRangeMdStyle0 = rangeMdCss;
var Range = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionKnobMoveStart = createEvent(this, "ionKnobMoveStart", 7);
    this.ionKnobMoveEnd = createEvent(this, "ionKnobMoveEnd", 7);
    this.rangeId = `ion-r-${rangeIds++}`;
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.inheritedAttributes = {};
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.compareValues = (newVal, oldVal) => {
      if (typeof newVal === "object" && typeof oldVal === "object") {
        return newVal.lower !== oldVal.lower || newVal.upper !== oldVal.upper;
      }
      return newVal !== oldVal;
    };
    this.clampBounds = (value) => {
      return clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper)
        };
      } else {
        return this.clampBounds(value);
      }
    };
    this.setupGesture = () => __async(this, null, function* () {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
          el: rangeSlider,
          gestureName: "range",
          gesturePriority: 100,
          /**
           * Provide a threshold since the drag movement
           * might be a user scrolling the view.
           * If this is true, then the range
           * should not move.
           */
          threshold: 10,
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev)
        });
        this.gesture.enable(!this.disabled);
      }
    });
    this.handleKeyboard = (knob, isIncrease) => {
      const {
        ensureValueInBounds
      } = this;
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === "A") {
        this.ratioA = clamp(0, this.ratioA + step, 1);
      } else {
        this.ratioB = clamp(0, this.ratioB + step, 1);
      }
      this.ionKnobMoveStart.emit({
        value: ensureValueInBounds(this.value)
      });
      this.updateValue();
      this.emitValueChange();
      this.ionKnobMoveEnd.emit({
        value: ensureValueInBounds(this.value)
      });
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
      }
    };
    this.ratioA = 0;
    this.ratioB = 0;
    this.pressedKnob = void 0;
    this.color = void 0;
    this.debounce = void 0;
    this.name = this.rangeId;
    this.label = void 0;
    this.dualKnobs = false;
    this.min = 0;
    this.max = 100;
    this.pin = false;
    this.pinFormatter = (value) => Math.round(value);
    this.snaps = false;
    this.step = 1;
    this.ticks = true;
    this.activeBarStart = void 0;
    this.disabled = false;
    this.value = 0;
    this.labelPlacement = "start";
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    this.ionInput = debounce === void 0 ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  minChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.min = 0;
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.max = 100;
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  stepChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.step = 1;
    }
  }
  activeBarStartChanged() {
    const {
      activeBarStart
    } = this;
    if (activeBarStart !== void 0) {
      if (activeBarStart > this.max) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.max;
      } else if (activeBarStart < this.min) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.min;
      }
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  valueChanged(newValue, oldValue) {
    const valuesChanged = this.compareValues(newValue, oldValue);
    if (valuesChanged) {
      this.ionInput.emit({
        value: this.value
      });
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  componentWillLoad() {
    if (this.el.hasAttribute("id")) {
      this.rangeId = this.el.getAttribute("id");
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.min = isSafeNumber(this.min) ? this.min : 0;
    this.max = isSafeNumber(this.max) ? this.max : 100;
    this.step = isSafeNumber(this.step) ? this.step : 1;
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.setupGesture();
    this.updateRatio();
    this.didLoad = true;
  }
  connectedCallback() {
    var _a;
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    this.activeBarStartChanged();
    if (this.didLoad) {
      this.setupGesture();
    }
    const ionContent = findClosestIonContent(this.el);
    this.contentEl = (_a = ionContent === null || ionContent === void 0 ? void 0 : ionContent.querySelector(".ion-content-scroll-host")) !== null && _a !== void 0 ? _a : ionContent;
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  getValue() {
    var _a;
    const value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    if (this.dualKnobs) {
      if (typeof value === "object") {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    } else {
      if (typeof value === "object") {
        return value.upper;
      }
      return value;
    }
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    this.value = this.ensureValueInBounds(this.value);
    this.ionChange.emit({
      value: this.value
    });
  }
  /**
   * The value should be updated on touch end or
   * when the component is being dragged.
   * This follows the native behavior of mobile devices.
   *
   * For example: When the user lifts their finger from the
   * screen after tapping the bar or dragging the bar or knob.
   */
  onStart() {
    this.ionKnobMoveStart.emit({
      value: this.ensureValueInBounds(this.value)
    });
  }
  /**
   * The value should be updated while dragging the
   * bar or knob.
   *
   * While the user is dragging, the view
   * should not scroll. This is to prevent the user from
   * feeling disoriented while dragging.
   *
   * The user can scroll on the view if the knob or
   * bar is not being dragged.
   *
   * @param detail The details of the gesture event.
   */
  onMove(detail) {
    const {
      contentEl,
      pressedKnob
    } = this;
    const currentX = detail.currentX;
    if (contentEl && this.pressedKnob === void 0) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    if (pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    this.update(currentX);
  }
  /**
   * The value should be updated on touch end:
   * - When the user lifts their finger from the screen after
   * tapping the bar.
   *
   * @param detail The details of the gesture or mouse event.
   */
  onEnd(detail) {
    var _a;
    const {
      contentEl,
      initialContentScrollY
    } = this;
    const currentX = (_a = detail.currentX) !== null && _a !== void 0 ? _a : detail.clientX;
    if (this.pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    if (contentEl && this.pressedKnob !== void 0) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    this.update(currentX);
    this.pressedKnob = void 0;
    this.emitValueChange();
    this.ionKnobMoveEnd.emit({
      value: this.ensureValueInBounds(this.value)
    });
  }
  update(currentX) {
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    if (this.pressedKnob === "A") {
      this.ratioA = ratio;
    } else {
      this.ratioB = ratio;
    }
    this.updateValue();
  }
  setPressedKnob(currentX) {
    const rect = this.rect = this.rangeSlider.getBoundingClientRect();
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? "A" : "B";
    this.setFocus(this.pressedKnob);
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    const {
      activeBarStart
    } = this;
    if (activeBarStart == null) {
      return 0;
    }
    return valueToRatio(activeBarStart, this.min, this.max);
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const {
      min,
      max
    } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    } else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const {
      valA,
      valB
    } = this;
    this.value = !this.dualKnobs ? valA : {
      lower: Math.min(valA, valB),
      upper: Math.max(valA, valB)
    };
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === "A" ? ".range-knob-a" : ".range-knob-b");
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  /**
   * Returns true if content was passed to the "start" slot
   */
  get hasStartSlotContent() {
    return this.el.querySelector('[slot="start"]') !== null;
  }
  /**
   * Returns true if content was passed to the "end" slot
   */
  get hasEndSlotContent() {
    return this.el.querySelector('[slot="end"]') !== null;
  }
  get hasLabel() {
    return this.label !== void 0 || this.el.querySelector('[slot="label"]') !== null;
  }
  renderRangeSlider() {
    var _a;
    const {
      min,
      max,
      step,
      handleKeyboard,
      pressedKnob,
      disabled,
      pin,
      ratioLower,
      ratioUpper,
      pinFormatter,
      inheritedAttributes
    } = this;
    let barStart = `${ratioLower * 100}%`;
    let barEnd = `${100 - ratioUpper * 100}%`;
    const rtl = isRTL(this.el);
    const start = rtl ? "right" : "left";
    const end = rtl ? "left" : "right";
    const tickStyle = (tick) => {
      return {
        [start]: tick[start]
      };
    };
    if (this.dualKnobs === false) {
      if (this.valA < ((_a = this.activeBarStart) !== null && _a !== void 0 ? _a : this.min)) {
        barStart = `${ratioUpper * 100}%`;
        barEnd = `${100 - ratioLower * 100}%`;
      } else {
        barStart = `${ratioLower * 100}%`;
        barEnd = `${100 - ratioUpper * 100}%`;
      }
    }
    const barStyle = {
      [start]: barStart,
      [end]: barEnd
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const ratioMin = Math.min(ratioLower, ratioUpper);
        const ratioMax = Math.max(ratioLower, ratioUpper);
        const tick = {
          ratio,
          /**
           * Sets the tick mark as active when the tick is between the min bounds and the knob.
           * When using activeBarStart, the tick mark will be active between the knob and activeBarStart.
           */
          active: ratio >= ratioMin && ratio <= ratioMax
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    return h("div", {
      class: "range-slider",
      ref: (rangeEl) => this.rangeSlider = rangeEl,
      /**
       * Since the gesture has a threshold, the value
       * won't change until the user has dragged past
       * the threshold. This is to prevent the range
       * from moving when the user is scrolling.
       *
       * This results in the value not being updated
       * and the event emitters not being triggered
       * if the user taps on the range. This is why
       * we need to listen for the "pointerUp" event.
       */
      onPointerUp: (ev) => {
        if (this.pressedKnob === void 0) {
          this.onStart();
          this.onEnd(ev);
        }
      }
    }, ticks.map((tick) => h("div", {
      style: tickStyle(tick),
      role: "presentation",
      class: {
        "range-tick": true,
        "range-tick-active": tick.active
      },
      part: tick.active ? "tick-active" : "tick"
    })), h("div", {
      class: "range-bar-container"
    }, h("div", {
      class: "range-bar",
      role: "presentation",
      part: "bar"
    }), h("div", {
      class: {
        "range-bar": true,
        "range-bar-active": true,
        "has-ticks": ticks.length > 0
      },
      role: "presentation",
      style: barStyle,
      part: "bar-active"
    })), renderKnob(rtl, {
      knob: "A",
      pressed: pressedKnob === "A",
      value: this.valA,
      ratio: this.ratioA,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes
    }), this.dualKnobs && renderKnob(rtl, {
      knob: "B",
      pressed: pressedKnob === "B",
      value: this.valB,
      ratio: this.ratioB,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes
    }));
  }
  render() {
    const {
      disabled,
      el,
      hasLabel,
      rangeId,
      pin,
      pressedKnob,
      labelPlacement,
      label
    } = this;
    const inItem = hostContext("ion-item", el);
    const hasStartContent = hasLabel && (labelPlacement === "start" || labelPlacement === "fixed") || this.hasStartSlotContent;
    const needsStartAdjustment = inItem && !hasStartContent;
    const hasEndContent = hasLabel && labelPlacement === "end" || this.hasEndSlotContent;
    const needsEndAdjustment = inItem && !hasEndContent;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return h(Host, {
      key: "e97cb7eab877eb1624429b4a79107130c6809cf5",
      onFocusin: this.onFocus,
      onFocusout: this.onBlur,
      id: rangeId,
      class: createColorClasses(this.color, {
        [mode]: true,
        "in-item": inItem,
        "range-disabled": disabled,
        "range-pressed": pressedKnob !== void 0,
        "range-has-pin": pin,
        [`range-label-placement-${labelPlacement}`]: true,
        "range-item-start-adjustment": needsStartAdjustment,
        "range-item-end-adjustment": needsEndAdjustment
      })
    }, h("label", {
      key: "a43e9859f74f83460439efefccb5fbb9f387c9ee",
      class: "range-wrapper",
      id: "range-label"
    }, h("div", {
      key: "75352a30f30dbd0228c6138eb4324a5c021dbb48",
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !hasLabel
      },
      part: "label"
    }, label !== void 0 ? h("div", {
      class: "label-text"
    }, label) : h("slot", {
      name: "label"
    })), h("div", {
      key: "6a3e147c3e5d938bb2b50522a290f6fdfcf40f05",
      class: "native-wrapper"
    }, h("slot", {
      key: "6627236eac9f711fa9c27879a017dd994e65811e",
      name: "start"
    }), this.renderRangeSlider(), h("slot", {
      key: "6af3bbadacd036bc7cd30732227f76d7c64117fb",
      name: "end"
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "step": ["stepChanged"],
      "activeBarStart": ["activeBarStartChanged"],
      "disabled": ["disabledChanged"],
      "value": ["valueChanged"]
    };
  }
};
var renderKnob = (rtl, {
  knob,
  value,
  ratio,
  min,
  max,
  disabled,
  pressed,
  pin,
  handleKeyboard,
  pinFormatter,
  inheritedAttributes
}) => {
  const start = rtl ? "right" : "left";
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  const ariaLabel = inheritedAttributes["aria-label"];
  return h("div", {
    onKeyDown: (ev) => {
      const key = ev.key;
      if (key === "ArrowLeft" || key === "ArrowDown") {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      } else if (key === "ArrowRight" || key === "ArrowUp") {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
    class: {
      "range-knob-handle": true,
      "range-knob-a": knob === "A",
      "range-knob-b": knob === "B",
      "range-knob-pressed": pressed,
      "range-knob-min": value === min,
      "range-knob-max": value === max,
      "ion-activatable": true,
      "ion-focusable": true
    },
    style: knobStyle(),
    role: "slider",
    tabindex: disabled ? -1 : 0,
    "aria-label": ariaLabel !== void 0 ? ariaLabel : null,
    "aria-labelledby": ariaLabel === void 0 ? "range-label" : null,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-disabled": disabled ? "true" : null,
    "aria-valuenow": value
  }, pin && h("div", {
    class: "range-pin",
    role: "presentation",
    part: "pin"
  }, pinFormatter(value)), h("div", {
    class: "range-knob",
    role: "presentation",
    part: "knob"
  }));
};
var ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  const clampedValue = clamp(min, value, max);
  return roundToMaxDecimalPlaces(clampedValue, min, max, step);
};
var valueToRatio = (value, min, max) => {
  return clamp(0, (value - min) / (max - min), 1);
};
var rangeIds = 0;
Range.style = {
  ios: IonRangeIosStyle0,
  md: IonRangeMdStyle0
};
export {
  Range as ion_range
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-range.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFuZ2UuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGYgYXMgZmluZENsb3Nlc3RJb25Db250ZW50LCBkIGFzIGRpc2FibGVDb250ZW50U2Nyb2xsWSwgciBhcyByZXNldENvbnRlbnRTY3JvbGxZIH0gZnJvbSAnLi9pbmRleC1lOTE5ZTM1My5qcyc7XG5pbXBvcnQgeyBsIGFzIGlzU2FmZU51bWJlciwgaiBhcyBjbGFtcCwgZSBhcyBkZWJvdW5jZUV2ZW50LCBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcywgZCBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLWJhYmVhYmViLmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5mdW5jdGlvbiBnZXREZWNpbWFsUGxhY2VzKG4pIHtcbiAgaWYgKCFpc1NhZmVOdW1iZXIobikpIHJldHVybiAwO1xuICBpZiAobiAlIDEgPT09IDApIHJldHVybiAwO1xuICByZXR1cm4gbi50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xufVxuLyoqXG4gKiBGaXhlcyBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaW4gYSByZXN1bHQgYnkgcm91bmRpbmdcbiAqIHRvIHRoZSBzYW1lIHNwZWNpZmljaXR5LCBvciBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKCpub3QqXG4gKiBzaWduaWZpY2FudCBmaWd1cmVzKSBhcyBwcm92aWRlZCByZWZlcmVuY2UgbnVtYmVycy4gSWYgbXVsdGlwbGVcbiAqIHJlZmVyZW5jZXMgYXJlIHByb3ZpZGVkLCB0aGUgaGlnaGVzdCBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXNcbiAqIGJldHdlZW4gdGhlbSB3aWxsIGJlIHVzZWQuXG4gKlxuICogVGhlIG1haW4gdXNlIGNhc2UgaXMgd2hlbiBudW1iZXJzIHggYW5kIHkgYXJlIGFkZGVkIHRvIHByb2R1Y2UgbixcbiAqIGJ1dCB4IGFuZCB5IGFyZSBmbG9hdHMsIHNvIG4gbWF5IGhhdmUgcm91bmRpbmcgZXJyb3JzIChzdWNoIGFzXG4gKiAzLjEwMDAwMDAwMDQgaW5zdGVhZCBvZiAzLjEpLiBBcyBsb25nIGFzIG9ubHkgYWRkaXRpb24vc3VidHJhY3Rpb25cbiAqIG9jY3VycyBiZXR3ZWVuIHggYW5kIHksIHRoZSBzcGVjaWZpY2l0eSBvZiB0aGUgcmVzdWx0IHdpbGwgbmV2ZXJcbiAqIGluY3JlYXNlLCBzbyB4IGFuZCB5IHNob3VsZCBiZSBwYXNzZWQgaW4gYXMgdGhlIHJlZmVyZW5jZXMuXG4gKlxuICogSWYgbXVsdGlwbGljYXRpb24sIGRpdmlzaW9uLCBvciBvdGhlciBvcGVyYXRpb25zIHdlcmUgdXNlZCB0b1xuICogY2FsY3VsYXRlIG4sIHRoZSByb3VuZGVkIHJlc3VsdCBtYXkgaGF2ZSBsZXNzIHNwZWNpZmljaXR5IHRoYW5cbiAqIGRlc2lyZWQuIEZvciBleGFtcGxlLCAxIC8gMyA9IDAuMzMzMzMoLi4uKSwgYnV0XG4gKiByb3VuZFRvTWF4RGVjaW1hbFBsYWNlcygoMSAvIDMpLCAxLCAzKSB3aWxsIHJldHVybiAwLCBzaW5jZSBib3RoXG4gKiAxIGFuZCAzIGFyZSB3aG9sZSBudW1iZXJzLlxuICpcbiAqIE5vdGUgdGhhdCBleHRyZW1lbHkgcHJlY2lzZSByZWZlcmVuY2UgbnVtYmVycyBtYXkgbGVhZCB0byByb3VuZGluZ1xuICogZXJyb3JzIG5vdCBiZWluZyB0cmltbWVkLCBkdWUgdG8gdGhlIGVycm9yIHJlc3VsdCBoYXZpbmcgdGhlIHNhbWUgb3JcbiAqIGZld2VyIGRlY2ltYWwgcGxhY2VzIGFzIHRoZSByZWZlcmVuY2UocykuIFRoaXMgaXMgYWNjZXB0YWJsZSBhcyB3ZVxuICogd291bGQgbm90IGJlIGFibGUgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm91bmRpbmcgZXJyb3JcbiAqIGFuZCBjb3JyZWN0IHZhbHVlIGluIHRoaXMgY2FzZSwgYnV0IGl0IGRvZXMgbWVhbiB0aGVyZSBpcyBhbiBpbXBsaWNpdFxuICogcHJlY2lzaW9uIGxpbWl0LiBJZiBwcmVjaXNpb24gdGhhdCBoaWdoIGlzIG5lZWRlZCwgaXQgaXMgcmVjb21tZW5kZWRcbiAqIHRvIHVzZSBhIHRoaXJkIHBhcnR5IGRhdGEgdHlwZSBkZXNpZ25lZCB0byBoYW5kbGUgZmxvYXRpbmcgcG9pbnRcbiAqIGVycm9ycyBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSBuIFRoZSBudW1iZXIgdG8gcm91bmQuXG4gKiBAcGFyYW0gcmVmZXJlbmNlcyBOdW1iZXIocykgdXNlZCB0byBjYWxjdWxhdGUgbiwgb3IgdGhhdCBzaG91bGQgb3RoZXJ3aXNlXG4gKiBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIGZvciB0aGUgZGVzaXJlZCBzcGVjaWZpY2l0eS5cbiAqL1xuZnVuY3Rpb24gcm91bmRUb01heERlY2ltYWxQbGFjZXMobiwgLi4ucmVmZXJlbmNlcykge1xuICBpZiAoIWlzU2FmZU51bWJlcihuKSkgcmV0dXJuIDA7XG4gIGNvbnN0IG1heFBsYWNlcyA9IE1hdGgubWF4KC4uLnJlZmVyZW5jZXMubWFwKHIgPT4gZ2V0RGVjaW1hbFBsYWNlcyhyKSkpO1xuICByZXR1cm4gTnVtYmVyKG4udG9GaXhlZChtYXhQbGFjZXMpKTtcbn1cbmNvbnN0IHJhbmdlSW9zQ3NzID0gXCI6aG9zdHstLWtub2ItaGFuZGxlLXNpemU6Y2FsYyh2YXIoLS1rbm9iLXNpemUpICogMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MztmbGV4OjM7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLnJhbmdlLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24tbGFiZWwpey1tcy1mbGV4OmluaXRpYWw7ZmxleDppbml0aWFsfTo6c2xvdHRlZChpb24taWNvbltzbG90XSl7Zm9udC1zaXplOjI0cHh9LnJhbmdlLXNsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1oZWlnaHQpO2NvbnRhaW46c2l6ZSBsYXlvdXQgc3R5bGU7Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6Z3JhYjstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teX06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLXNsaWRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJhbmdlLXBpbntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucmFuZ2Uta25vYi1oYW5kbGV7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSkgLyAyKTstd2Via2l0LW1hcmdpbi1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDp2YXIoLS1rbm9iLWhhbmRsZS1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7dGV4dC1hbGlnbjpjZW50ZXJ9LnJhbmdlLWtub2ItaGFuZGxle2luc2V0LWlubGluZS1zdGFydDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDp1bnNldH1bZGlyPXJ0bF0gLnJhbmdlLWtub2ItaGFuZGxle2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLWtub2ItaGFuZGxlOmRpcihydGwpe2xlZnQ6dW5zZXR9fS5yYW5nZS1rbm9iLWhhbmRsZTphY3RpdmUsLnJhbmdlLWtub2ItaGFuZGxlOmZvY3Vze291dGxpbmU6bm9uZX0ucmFuZ2UtYmFyLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOnZhcigtLWJhci1ib3JkZXItcmFkaXVzKTt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWJhci1oZWlnaHQpKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpfS5yYW5nZS1iYXItY29udGFpbmVye2luc2V0LWlubGluZS1zdGFydDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtYmFyLWNvbnRhaW5lcntsZWZ0OnVuc2V0fVtkaXI9cnRsXSAucmFuZ2UtYmFyLWNvbnRhaW5lcntsZWZ0OnVuc2V0fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5yYW5nZS1iYXItY29udGFpbmVyOmRpcihydGwpe2xlZnQ6dW5zZXR9fS5yYW5nZS1iYXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1iYXItYm9yZGVyLXJhZGl1cyk7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0tYmFyLWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZCk7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2Uta25vYntib3JkZXItcmFkaXVzOnZhcigtLWtub2ItYm9yZGVyLXJhZGl1cyk7dG9wOmNhbGMoNTAlIC0gdmFyKC0ta25vYi1zaXplKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWtub2Itc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2Itc2l6ZSk7YmFja2dyb3VuZDp2YXIoLS1rbm9iLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0ta25vYi1ib3gtc2hhZG93KTt6LWluZGV4OjI7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2Uta25vYntpbnNldC1pbmxpbmUtc3RhcnQ6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMil9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9ie2xlZnQ6dW5zZXR9W2Rpcj1ydGxdIC5yYW5nZS1rbm9ie2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLWtub2I6ZGlyKHJ0bCl7bGVmdDp1bnNldH19Omhvc3QoLnJhbmdlLXByZXNzZWQpIC5yYW5nZS1iYXItYWN0aXZle3dpbGwtY2hhbmdlOmxlZnQsIHJpZ2h0fTpob3N0KC5pbi1pdGVtKXt3aWR0aDoxMDAlfTpob3N0KFtzbG90PXN0YXJ0XSksOmhvc3QoW3Nsb3Q9ZW5kXSl7d2lkdGg6YXV0b306aG9zdCguaW4taXRlbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9LnJhbmdlLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDppbmhlcml0fTo6c2xvdHRlZChbc2xvdD1sYWJlbF0pe21heC13aWR0aDoyMDBweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59LmxhYmVsLXRleHQtd3JhcHBlci1oaWRkZW57ZGlzcGxheTpub25lfS5uYXRpdmUtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnJhbmdlLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5yYW5nZS13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LWVuZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4O21heC13aWR0aDoyMDBweH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5yYW5nZS13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC43NSk7dHJhbnNmb3JtOnNjYWxlKDAuNzUpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbToxNnB4O21heC13aWR0aDpjYWxjKDEwMCUgLyAwLjc1KX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQ6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19Omhvc3QoLmluLWl0ZW0ucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTZweH06aG9zdCguaW4taXRlbS5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1ib3R0b206MHB4fTpob3N0ey0ta25vYi1ib3JkZXItcmFkaXVzOjUwJTstLWtub2ItYmFja2dyb3VuZDojZmZmZmZmOy0ta25vYi1ib3gtc2hhZG93OjBweCAwLjVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDZweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7LS1rbm9iLXNpemU6MjZweDstLWJhci1oZWlnaHQ6NHB4Oy0tYmFyLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTkwMCwgI2U2ZTZlNikpOy0tYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhci1ib3JkZXItcmFkaXVzOjJweDstLWhlaWdodDo0MnB4fTpob3N0KC5yYW5nZS1pdGVtLXN0YXJ0LWFkanVzdG1lbnQpey13ZWJraXQtcGFkZGluZy1zdGFydDoyNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI0cHh9Omhvc3QoLnJhbmdlLWl0ZW0tZW5kLWFkanVzdG1lbnQpey13ZWJraXQtcGFkZGluZy1lbmQ6MjRweDtwYWRkaW5nLWlubGluZS1lbmQ6MjRweH06aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtYmFyLWFjdGl2ZSw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWhhcy1waW46bm90KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkpe3BhZGRpbmctdG9wOmNhbGMoOHB4ICsgMC43NXJlbSl9Omhvc3QoLnJhbmdlLWhhcy1waW4ucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLWJvdHRvbTpjYWxjKDhweCArIDAuNzVyZW0pfS5yYW5nZS1iYXItYWN0aXZle2JvdHRvbTowO3dpZHRoOmF1dG87YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1iYXItYWN0aXZlLmhhcy10aWNrc3tib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTJweDttYXJnaW4taW5saW5lLXN0YXJ0Oi0ycHg7LXdlYmtpdC1tYXJnaW4tZW5kOi0ycHg7bWFyZ2luLWlubGluZS1lbmQ6LTJweH0ucmFuZ2UtdGlja3std2Via2l0LW1hcmdpbi1zdGFydDotMnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTJweDtib3JkZXItcmFkaXVzOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE3cHg7d2lkdGg6NHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtOTAwLCAjZTZlNmU2KSk7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKSBzY2FsZSgwLjAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKSBzY2FsZSgwLjAxKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7bWluLXdpZHRoOjI4cHg7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxMjBtcyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMTIwbXMgZWFzZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6MC43NXJlbTt0ZXh0LWFsaWduOmNlbnRlcn0ucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1waW4sLnJhbmdlLWtub2ItaGFuZGxlLmlvbi1mb2N1c2VkIC5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMTAwJSArIDExcHgpLCAwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMTAwJSArIDExcHgpLCAwKSBzY2FsZSgxKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe29wYWNpdHk6MC4zfVwiO1xuY29uc3QgSW9uUmFuZ2VJb3NTdHlsZTAgPSByYW5nZUlvc0NzcztcbmNvbnN0IHJhbmdlTWRDc3MgPSBcIjpob3N0ey0ta25vYi1oYW5kbGUtc2l6ZTpjYWxjKHZhcigtLWtub2Itc2l6ZSkgKiAyKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDozO2ZsZXg6MzstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXg6aW5pdGlhbDtmbGV4OmluaXRpYWx9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3RdKXtmb250LXNpemU6MjRweH0ucmFuZ2Utc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWhlaWdodCk7Y29udGFpbjpzaXplIGxheW91dCBzdHlsZTtjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiOy1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2Utc2xpZGVye2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ucmFuZ2UtcGlue3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5yYW5nZS1rbm9iLWhhbmRsZXt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpKSAvIDIpOy13ZWJraXQtbWFyZ2luLXN0YXJ0OmNhbGMoMHB4IC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkgLyAyKTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGMoMHB4IC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkgLyAyKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOnZhcigtLWtub2ItaGFuZGxlLXNpemUpO2hlaWdodDp2YXIoLS1rbm9iLWhhbmRsZS1zaXplKTt0ZXh0LWFsaWduOmNlbnRlcn0ucmFuZ2Uta25vYi1oYW5kbGV7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9iLWhhbmRsZXtsZWZ0OnVuc2V0fVtkaXI9cnRsXSAucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDp1bnNldH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsucmFuZ2Uta25vYi1oYW5kbGU6ZGlyKHJ0bCl7bGVmdDp1bnNldH19LnJhbmdlLWtub2ItaGFuZGxlOmFjdGl2ZSwucmFuZ2Uta25vYi1oYW5kbGU6Zm9jdXN7b3V0bGluZTpub25lfS5yYW5nZS1iYXItY29udGFpbmVye2JvcmRlci1yYWRpdXM6dmFyKC0tYmFyLWJvcmRlci1yYWRpdXMpO3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0tYmFyLWhlaWdodCkpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0tYmFyLWhlaWdodCl9LnJhbmdlLWJhci1jb250YWluZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1iYXItY29udGFpbmVye2xlZnQ6dW5zZXR9W2Rpcj1ydGxdIC5yYW5nZS1iYXItY29udGFpbmVye2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLWJhci1jb250YWluZXI6ZGlyKHJ0bCl7bGVmdDp1bnNldH19LnJhbmdlLWJhcntib3JkZXItcmFkaXVzOnZhcigtLWJhci1ib3JkZXItcmFkaXVzKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1iYXItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kKTtwb2ludGVyLWV2ZW50czpub25lfS5yYW5nZS1rbm9ie2JvcmRlci1yYWRpdXM6dmFyKC0ta25vYi1ib3JkZXItcmFkaXVzKTt0b3A6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1zaXplKTtiYWNrZ3JvdW5kOnZhcigtLWtub2ItYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWtub2ItYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO3otaW5kZXg6Mjtwb2ludGVyLWV2ZW50czpub25lfS5yYW5nZS1rbm9ie2luc2V0LWlubGluZS1zdGFydDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWtub2J7bGVmdDp1bnNldH1bZGlyPXJ0bF0gLnJhbmdlLWtub2J7bGVmdDp1bnNldH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsucmFuZ2Uta25vYjpkaXIocnRsKXtsZWZ0OnVuc2V0fX06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLWJhci1hY3RpdmV7d2lsbC1jaGFuZ2U6bGVmdCwgcmlnaHR9Omhvc3QoLmluLWl0ZW0pe3dpZHRoOjEwMCV9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXt3aWR0aDphdXRvfTpob3N0KC5pbi1pdGVtKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn0ucmFuZ2Utd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OmluaGVyaXR9OjpzbG90dGVkKFtzbG90PWxhYmVsXSl7bWF4LXdpZHRoOjIwMHB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn0ubGFiZWwtdGV4dC13cmFwcGVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YXJ0KSAucmFuZ2Utd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YXJ0KSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LWVuZCkgLnJhbmdlLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtZW5kKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey1tcy1mbGV4OjAgMCAxMDBweDtmbGV4OjAgMCAxMDBweDt3aWR0aDoxMDBweDttaW4td2lkdGg6MTAwcHg7bWF4LXdpZHRoOjIwMHB4fTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnJhbmdlLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjc1KTt0cmFuc2Zvcm06c2NhbGUoMC43NSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOjE2cHg7bWF4LXdpZHRoOmNhbGMoMTAwJSAvIDAuNzUpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZDpkaXIocnRsKSkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfX06aG9zdCguaW4taXRlbS5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxNnB4fTpob3N0KC5pbi1pdGVtLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubmF0aXZlLXdyYXBwZXJ7bWFyZ2luLWJvdHRvbTowcHh9Omhvc3R7LS1rbm9iLWJvcmRlci1yYWRpdXM6NTAlOy0ta25vYi1iYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSk7LS1rbm9iLWJveC1zaGFkb3c6bm9uZTstLWtub2Itc2l6ZToxOHB4Oy0tYmFyLWhlaWdodDoycHg7LS1iYXItYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgMCwgODQsIDIzMyksIDAuMjYpOy0tYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhci1ib3JkZXItcmFkaXVzOjA7LS1oZWlnaHQ6NDJweDstLXBpbi1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLXBpbi1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZil9OjpzbG90dGVkKDpub3QoaW9uLWljb24pW3Nsb3Q9c3RhcnRdKSw6OnNsb3R0ZWQoOm5vdChpb24taWNvbilbc2xvdD1lbmRdKSwubmF0aXZlLXdyYXBwZXJ7Zm9udC1zaXplOjAuNzVyZW19Omhvc3QoLnJhbmdlLWl0ZW0tc3RhcnQtYWRqdXN0bWVudCl7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MThweH06aG9zdCgucmFuZ2UtaXRlbS1lbmQtYWRqdXN0bWVudCl7LXdlYmtpdC1wYWRkaW5nLWVuZDoxOHB4O3BhZGRpbmctaW5saW5lLWVuZDoxOHB4fTpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1iYXJ7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMjYpfTpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1iYXItYWN0aXZlLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1rbm9iLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1rbm9iOjpiZWZvcmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXBpbiw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtcGluOjpiZWZvcmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXRpY2t7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTRweDttYXJnaW4taW5saW5lLWVuZDoxNHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9OjpzbG90dGVkKFtzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE0cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCgucmFuZ2UtaGFzLXBpbjpub3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSl7cGFkZGluZy10b3A6MS43NXJlbX06aG9zdCgucmFuZ2UtaGFzLXBpbi5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnttYXJnaW4tYm90dG9tOjEuNzVyZW19LnJhbmdlLWJhci1hY3RpdmV7Ym90dG9tOjA7d2lkdGg6YXV0bztiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSl9LnJhbmdlLWtub2J7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC42Nyk7dHJhbnNmb3JtOnNjYWxlKDAuNjcpOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjoxMjBtczt0cmFuc2l0aW9uLWR1cmF0aW9uOjEyMG1zOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXIsIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLCAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXIsIC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO3otaW5kZXg6Mn0ucmFuZ2Uta25vYjo6YmVmb3Jle2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWtub2Itc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2Itc2l6ZSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNpdGlvbjowLjI2N3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpO3RyYW5zaXRpb246MC4yNjdzIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTtiYWNrZ3JvdW5kOnZhcigtLWtub2ItYmFja2dyb3VuZCk7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjAuMTM7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2Uta25vYjo6YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDowfS5yYW5nZS10aWNre3Bvc2l0aW9uOmFic29sdXRlO3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0tYmFyLWhlaWdodCkpIC8gMik7d2lkdGg6dmFyKC0tYmFyLWhlaWdodCk7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ucmFuZ2UtcGlue3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCkgc2NhbGUoMC4wMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCkgc2NhbGUoMC4wMSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuNzVyZW07aGVpZ2h0OjEuNzVyZW07LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgMTIwbXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMTIwbXMgZWFzZTt0cmFuc2l0aW9uOmJhY2tncm91bmQgMTIwbXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMTIwbXMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgYmFja2dyb3VuZCAxMjBtcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxMjBtcyBlYXNlO2JhY2tncm91bmQ6dmFyKC0tcGluLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLXBpbi1jb2xvcil9LnJhbmdlLXBpbjo6YmVmb3Jle2JvdHRvbTotMXB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0xM3B4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTEzcHg7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDUwJSAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI2cHg7aGVpZ2h0OjI2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDEyMG1zIGVhc2U7YmFja2dyb3VuZDp2YXIoLS1waW4tYmFja2dyb3VuZCk7Y29udGVudDpcXFwiXFxcIjt6LWluZGV4Oi0xfS5yYW5nZS1waW46OmJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtcGluOjpiZWZvcmV7bGVmdDp1bnNldH1bZGlyPXJ0bF0gLnJhbmdlLXBpbjo6YmVmb3Jle2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLXBpbjo6YmVmb3JlOmRpcihydGwpe2xlZnQ6dW5zZXR9fS5yYW5nZS1rbm9iLXByZXNzZWQgLnJhbmdlLXBpbiwucmFuZ2Uta25vYi1oYW5kbGUuaW9uLWZvY3VzZWQgLnJhbmdlLXBpbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCBjYWxjKC0xMDAlICsgNHB4KSwgMCkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIGNhbGMoLTEwMCUgKyA0cHgpLCAwKSBzY2FsZSgxKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey5yYW5nZS1rbm9iLWhhbmRsZTpob3ZlciAucmFuZ2Uta25vYjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMik7dHJhbnNmb3JtOnNjYWxlKDIpO29wYWNpdHk6MC4xM319LnJhbmdlLWtub2ItaGFuZGxlLmlvbi1hY3RpdmF0ZWQgLnJhbmdlLWtub2I6YmVmb3JlLC5yYW5nZS1rbm9iLWhhbmRsZS5pb24tZm9jdXNlZCAucmFuZ2Uta25vYjpiZWZvcmUsLnJhbmdlLWtub2ItaGFuZGxlLnJhbmdlLWtub2ItcHJlc3NlZCAucmFuZ2Uta25vYjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMik7dHJhbnNmb3JtOnNjYWxlKDIpfS5yYW5nZS1rbm9iLWhhbmRsZS5pb24tZm9jdXNlZCAucmFuZ2Uta25vYjo6YmVmb3Jle29wYWNpdHk6MC4xM30ucmFuZ2Uta25vYi1oYW5kbGUuaW9uLWFjdGl2YXRlZCAucmFuZ2Uta25vYjo6YmVmb3JlLC5yYW5nZS1rbm9iLWhhbmRsZS5yYW5nZS1rbm9iLXByZXNzZWQgLnJhbmdlLWtub2I6OmJlZm9yZXtvcGFjaXR5OjAuMjV9Omhvc3QoOm5vdCgucmFuZ2UtaGFzLXBpbikpIC5yYW5nZS1rbm9iLXByZXNzZWQgLnJhbmdlLWtub2IsOmhvc3QoOm5vdCgucmFuZ2UtaGFzLXBpbikpIC5yYW5nZS1rbm9iLWhhbmRsZS5pb24tZm9jdXNlZCAucmFuZ2Uta25vYnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9Omhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2UtYmFyLWFjdGl2ZSw6aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS1iYXIsOmhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2UtdGlja3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0yNTAsICNiZmJmYmYpKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS1rbm9iey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNTUpO3RyYW5zZm9ybTpzY2FsZSgwLjU1KTtvdXRsaW5lOjVweCBzb2xpZCAjZmZmO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2JmYmZiZikpfTpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCgucmFuZ2UtZGlzYWJsZWQpIDo6c2xvdHRlZChbc2xvdD1zdGFydF0pLDpob3N0KC5yYW5nZS1kaXNhYmxlZCkgOjpzbG90dGVkKFtzbG90PWVuZF0pe29wYWNpdHk6MC4zOH1cIjtcbmNvbnN0IElvblJhbmdlTWRTdHlsZTAgPSByYW5nZU1kQ3NzO1xuY29uc3QgUmFuZ2UgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIHRoaXMuaW9uS25vYk1vdmVTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uS25vYk1vdmVTdGFydFwiLCA3KTtcbiAgICB0aGlzLmlvbktub2JNb3ZlRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Lbm9iTW92ZUVuZFwiLCA3KTtcbiAgICB0aGlzLnJhbmdlSWQgPSBgaW9uLXItJHtyYW5nZUlkcysrfWA7XG4gICAgdGhpcy5kaWRMb2FkID0gZmFsc2U7XG4gICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ29udGVudFNjcm9sbFkgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHR3byBSYW5nZVZhbHVlIGlucHV0cyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZGlmZmVyZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIG5ld1ZhbCAtIFRoZSBuZXcgdmFsdWUuXG4gICAgICogQHBhcmFtIG9sZFZhbCAtIFRoZSBvbGQgdmFsdWUuXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgdGhpcy5jb21wYXJlVmFsdWVzID0gKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG5ld1ZhbCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9sZFZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ld1ZhbC5sb3dlciAhPT0gb2xkVmFsLmxvd2VyIHx8IG5ld1ZhbC51cHBlciAhPT0gb2xkVmFsLnVwcGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1ZhbCAhPT0gb2xkVmFsO1xuICAgIH07XG4gICAgdGhpcy5jbGFtcEJvdW5kcyA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiBjbGFtcCh0aGlzLm1pbiwgdmFsdWUsIHRoaXMubWF4KTtcbiAgICB9O1xuICAgIHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyA9IHZhbHVlID0+IHtcbiAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxvd2VyOiB0aGlzLmNsYW1wQm91bmRzKHZhbHVlLmxvd2VyKSxcbiAgICAgICAgICB1cHBlcjogdGhpcy5jbGFtcEJvdW5kcyh2YWx1ZS51cHBlcilcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYW1wQm91bmRzKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0dXBHZXN0dXJlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZ2VTbGlkZXIgPSB0aGlzLnJhbmdlU2xpZGVyO1xuICAgICAgaWYgKHJhbmdlU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtMzk3ODI2NDIuanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgZWw6IHJhbmdlU2xpZGVyLFxuICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmFuZ2UnLFxuICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByb3ZpZGUgYSB0aHJlc2hvbGQgc2luY2UgdGhlIGRyYWcgbW92ZW1lbnRcbiAgICAgICAgICAgKiBtaWdodCBiZSBhIHVzZXIgc2Nyb2xsaW5nIHRoZSB2aWV3LlxuICAgICAgICAgICAqIElmIHRoaXMgaXMgdHJ1ZSwgdGhlbiB0aGUgcmFuZ2VcbiAgICAgICAgICAgKiBzaG91bGQgbm90IG1vdmUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgICAgICBvbkVuZDogZXYgPT4gdGhpcy5vbkVuZChldilcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoIXRoaXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVLZXlib2FyZCA9IChrbm9iLCBpc0luY3JlYXNlKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVuc3VyZVZhbHVlSW5Cb3VuZHNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0ZXA7XG4gICAgICBzdGVwID0gc3RlcCA+IDAgPyBzdGVwIDogMTtcbiAgICAgIHN0ZXAgPSBzdGVwIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgICAgaWYgKCFpc0luY3JlYXNlKSB7XG4gICAgICAgIHN0ZXAgKj0gLTE7XG4gICAgICB9XG4gICAgICBpZiAoa25vYiA9PT0gJ0EnKSB7XG4gICAgICAgIHRoaXMucmF0aW9BID0gY2xhbXAoMCwgdGhpcy5yYXRpb0EgKyBzdGVwLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmF0aW9CID0gY2xhbXAoMCwgdGhpcy5yYXRpb0IgKyBzdGVwLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW9uS25vYk1vdmVTdGFydC5lbWl0KHtcbiAgICAgICAgdmFsdWU6IGVuc3VyZVZhbHVlSW5Cb3VuZHModGhpcy52YWx1ZSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICAgIHRoaXMuaW9uS25vYk1vdmVFbmQuZW1pdCh7XG4gICAgICAgIHZhbHVlOiBlbnN1cmVWYWx1ZUluQm91bmRzKHRoaXMudmFsdWUpXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmF0aW9BID0gMDtcbiAgICB0aGlzLnJhdGlvQiA9IDA7XG4gICAgdGhpcy5wcmVzc2VkS25vYiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVib3VuY2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5yYW5nZUlkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kdWFsS25vYnMgPSBmYWxzZTtcbiAgICB0aGlzLm1pbiA9IDA7XG4gICAgdGhpcy5tYXggPSAxMDA7XG4gICAgdGhpcy5waW4gPSBmYWxzZTtcbiAgICB0aGlzLnBpbkZvcm1hdHRlciA9IHZhbHVlID0+IE1hdGgucm91bmQodmFsdWUpO1xuICAgIHRoaXMuc25hcHMgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIHRoaXMudGlja3MgPSB0cnVlO1xuICAgIHRoaXMuYWN0aXZlQmFyU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMubGFiZWxQbGFjZW1lbnQgPSAnc3RhcnQnO1xuICB9XG4gIGRlYm91bmNlQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpb25JbnB1dCxcbiAgICAgIGRlYm91bmNlLFxuICAgICAgb3JpZ2luYWxJb25JbnB1dFxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIGRlYm91bmNlIGlzIHVuZGVmaW5lZCwgd2UgaGF2ZSB0byBtYW51YWxseSByZXZlcnQgdGhlIGlvbklucHV0IGVtaXR0ZXIgaW4gY2FzZVxuICAgICAqIGRlYm91bmNlIHVzZWQgdG8gYmUgc2V0IHRvIGEgbnVtYmVyLiBPdGhlcndpc2UsIHRoZSBldmVudCB3b3VsZCBzdGF5IGRlYm91bmNlZC5cbiAgICAgKi9cbiAgICB0aGlzLmlvbklucHV0ID0gZGVib3VuY2UgPT09IHVuZGVmaW5lZCA/IG9yaWdpbmFsSW9uSW5wdXQgIT09IG51bGwgJiYgb3JpZ2luYWxJb25JbnB1dCAhPT0gdm9pZCAwID8gb3JpZ2luYWxJb25JbnB1dCA6IGlvbklucHV0IDogZGVib3VuY2VFdmVudChpb25JbnB1dCwgZGVib3VuY2UpO1xuICB9XG4gIG1pbkNoYW5nZWQobmV3VmFsdWUpIHtcbiAgICBpZiAoIWlzU2FmZU51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMubWluID0gMDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgfVxuICB9XG4gIG1heENoYW5nZWQobmV3VmFsdWUpIHtcbiAgICBpZiAoIWlzU2FmZU51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMubWF4ID0gMTAwO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICB9XG4gIH1cbiAgc3RlcENoYW5nZWQobmV3VmFsdWUpIHtcbiAgICBpZiAoIWlzU2FmZU51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgfVxuICB9XG4gIGFjdGl2ZUJhclN0YXJ0Q2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVCYXJTdGFydFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYWN0aXZlQmFyU3RhcnQgPiB0aGlzLm1heCkge1xuICAgICAgICBwcmludElvbldhcm5pbmcoYFJhbmdlOiBUaGUgdmFsdWUgb2YgYWN0aXZlQmFyU3RhcnQgKCR7YWN0aXZlQmFyU3RhcnR9KSBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCAoJHt0aGlzLm1heH0pLiBWYWxpZCB2YWx1ZXMgYXJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIHZhbHVlIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1heCB2YWx1ZS5gLCB0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXJTdGFydCA9IHRoaXMubWF4O1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmVCYXJTdGFydCA8IHRoaXMubWluKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgUmFuZ2U6IFRoZSB2YWx1ZSBvZiBhY3RpdmVCYXJTdGFydCAoJHthY3RpdmVCYXJTdGFydH0pIGlzIGxlc3MgdGhhbiB0aGUgbWluICgke3RoaXMubWlufSkuIFZhbGlkIHZhbHVlcyBhcmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtaW4gdmFsdWUgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF4IHZhbHVlLmAsIHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhclN0YXJ0ID0gdGhpcy5taW47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlc0NoYW5nZWQgPSB0aGlzLmNvbXBhcmVWYWx1ZXMobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICBpZiAodmFsdWVzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pb25JbnB1dC5lbWl0KHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgdXNlciBoYXMgY3VzdG9tIElEIHNldCB0aGVuIHdlIHNob3VsZFxuICAgICAqIG5vdCBhc3NpZ24gdGhlIGRlZmF1bHQgaW5jcmVtZW50aW5nIElELlxuICAgICAqL1xuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaWQnKSkge1xuICAgICAgdGhpcy5yYW5nZUlkID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgfVxuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgICAvLyBJZiBtaW4sIG1heCwgb3Igc3RlcCBhcmUgbm90IHNhZmUsIHNldCB0aGVtIHRvIDAsIDEwMCwgYW5kIDEsIHJlc3BlY3RpdmVseS5cbiAgICAvLyBFYWNoIHdhdGNoIGRvZXMgdGhpcywgYnV0IG5vdCBiZWZvcmUgdGhlIGluaXRpYWwgbG9hZC5cbiAgICB0aGlzLm1pbiA9IGlzU2FmZU51bWJlcih0aGlzLm1pbikgPyB0aGlzLm1pbiA6IDA7XG4gICAgdGhpcy5tYXggPSBpc1NhZmVOdW1iZXIodGhpcy5tYXgpID8gdGhpcy5tYXggOiAxMDA7XG4gICAgdGhpcy5zdGVwID0gaXNTYWZlTnVtYmVyKHRoaXMuc3RlcCkgPyB0aGlzLnN0ZXAgOiAxO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5vcmlnaW5hbElvbklucHV0ID0gdGhpcy5pb25JbnB1dDtcbiAgICB0aGlzLnNldHVwR2VzdHVyZSgpO1xuICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICB0aGlzLmRpZExvYWQgPSB0cnVlO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHZhciBfYTtcbiAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgIHRoaXMuYWN0aXZlQmFyU3RhcnRDaGFuZ2VkKCk7XG4gICAgLyoqXG4gICAgICogSWYgd2UgaGF2ZSBub3QgeWV0IHJlbmRlcmVkXG4gICAgICogaW9uLXJhbmdlLCB0aGVuIHJhbmdlU2xpZGVyIGlzIG5vdCBkZWZpbmVkLlxuICAgICAqIEJ1dCBpZiB3ZSBhcmUgbW92aW5nIGlvbi1yYW5nZSB2aWEgYXBwZW5kQ2hpbGQsXG4gICAgICogdGhlbiByYW5nZVNsaWRlciB3aWxsIGJlIGRlZmluZWQuXG4gICAgICovXG4gICAgaWYgKHRoaXMuZGlkTG9hZCkge1xuICAgICAgdGhpcy5zZXR1cEdlc3R1cmUoKTtcbiAgICB9XG4gICAgY29uc3QgaW9uQ29udGVudCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudCh0aGlzLmVsKTtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IChfYSA9IGlvbkNvbnRlbnQgPT09IG51bGwgfHwgaW9uQ29udGVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW9uQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3QnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogaW9uQ29udGVudDtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgdmFsdWUgPSAoX2EgPSB0aGlzLnZhbHVlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG93ZXI6IDAsXG4gICAgICAgIHVwcGVyOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnVwcGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqXG4gICAqIFRoaXMgQVBJIHNob3VsZCBiZSBjYWxsZWQgZm9yIHVzZXIgY29tbWl0dGVkIGNoYW5nZXMuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIGVtaXRWYWx1ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5lbnN1cmVWYWx1ZUluQm91bmRzKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVGhlIHZhbHVlIHNob3VsZCBiZSB1cGRhdGVkIG9uIHRvdWNoIGVuZCBvclxuICAgKiB3aGVuIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICogVGhpcyBmb2xsb3dzIHRoZSBuYXRpdmUgYmVoYXZpb3Igb2YgbW9iaWxlIGRldmljZXMuXG4gICAqXG4gICAqIEZvciBleGFtcGxlOiBXaGVuIHRoZSB1c2VyIGxpZnRzIHRoZWlyIGZpbmdlciBmcm9tIHRoZVxuICAgKiBzY3JlZW4gYWZ0ZXIgdGFwcGluZyB0aGUgYmFyIG9yIGRyYWdnaW5nIHRoZSBiYXIgb3Iga25vYi5cbiAgICovXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5pb25Lbm9iTW92ZVN0YXJ0LmVtaXQoe1xuICAgICAgdmFsdWU6IHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyh0aGlzLnZhbHVlKVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgc2hvdWxkIGJlIHVwZGF0ZWQgd2hpbGUgZHJhZ2dpbmcgdGhlXG4gICAqIGJhciBvciBrbm9iLlxuICAgKlxuICAgKiBXaGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZywgdGhlIHZpZXdcbiAgICogc2hvdWxkIG5vdCBzY3JvbGwuIFRoaXMgaXMgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tXG4gICAqIGZlZWxpbmcgZGlzb3JpZW50ZWQgd2hpbGUgZHJhZ2dpbmcuXG4gICAqXG4gICAqIFRoZSB1c2VyIGNhbiBzY3JvbGwgb24gdGhlIHZpZXcgaWYgdGhlIGtub2Igb3JcbiAgICogYmFyIGlzIG5vdCBiZWluZyBkcmFnZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0gZGV0YWlsIFRoZSBkZXRhaWxzIG9mIHRoZSBnZXN0dXJlIGV2ZW50LlxuICAgKi9cbiAgb25Nb3ZlKGRldGFpbCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnRFbCxcbiAgICAgIHByZXNzZWRLbm9iXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudFggPSBkZXRhaWwuY3VycmVudFg7XG4gICAgLyoqXG4gICAgICogU2luY2UgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb24gdGhlIGJhciBvciBrbm9iLCB0aGUgdmlldyBzaG91bGQgbm90IHNjcm9sbC5cbiAgICAgKlxuICAgICAqIFRoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIG9uY2UuXG4gICAgICovXG4gICAgaWYgKGNvbnRlbnRFbCAmJiB0aGlzLnByZXNzZWRLbm9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvbnRlbnRTY3JvbGxZID0gZGlzYWJsZUNvbnRlbnRTY3JvbGxZKGNvbnRlbnRFbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBgcHJlc3NlZEtub2JgIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIHVzZXIganVzdFxuICAgICAqIHN0YXJ0ZWQgZHJhZ2dpbmcgdGhlIGtub2IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBkZXRlcm1pbmUgd2hpY2gga25vYiB0aGUgdXNlciBpcyBkcmFnZ2luZyxcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gaXQncyBhIGR1YWwga25vYi5cbiAgICAgKiBQbHVzLCBpdCBkZXRlcm1pbmVzIHdoZW4gdG8gYXBwbHkgY2VydGFpbiBzdHlsZXMuXG4gICAgICpcbiAgICAgKiBUaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBvbmNlIHNpbmNlIHRoZSBrbm9iIHdvbid0IGNoYW5nZVxuICAgICAqIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgICAqL1xuICAgIGlmIChwcmVzc2VkS25vYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFByZXNzZWRLbm9iKGN1cnJlbnRYKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoY3VycmVudFgpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdG91Y2ggZW5kOlxuICAgKiAtIFdoZW4gdGhlIHVzZXIgbGlmdHMgdGhlaXIgZmluZ2VyIGZyb20gdGhlIHNjcmVlbiBhZnRlclxuICAgKiB0YXBwaW5nIHRoZSBiYXIuXG4gICAqXG4gICAqIEBwYXJhbSBkZXRhaWwgVGhlIGRldGFpbHMgb2YgdGhlIGdlc3R1cmUgb3IgbW91c2UgZXZlbnQuXG4gICAqL1xuICBvbkVuZChkZXRhaWwpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qge1xuICAgICAgY29udGVudEVsLFxuICAgICAgaW5pdGlhbENvbnRlbnRTY3JvbGxZXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudFggPSAoX2EgPSBkZXRhaWwuY3VycmVudFgpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGRldGFpbC5jbGllbnRYO1xuICAgIC8qKlxuICAgICAqIFRoZSBgcHJlc3NlZEtub2JgIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIHVzZXIgbmV2ZXJcbiAgICAgKiBkcmFnZ2VkIHRoZSBrbm9iLiBUaGV5IGp1c3QgdGFwcGVkIG9uIHRoZSBiYXIuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBkZXRlcm1pbmUgd2hpY2gga25vYiB0aGUgdXNlciBpcyBjaGFuZ2luZyxcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gaXQncyBhIGR1YWwga25vYi5cbiAgICAgKiBQbHVzLCBpdCBkZXRlcm1pbmVzIHdoZW4gdG8gYXBwbHkgY2VydGFpbiBzdHlsZXMuXG4gICAgICovXG4gICAgaWYgKHRoaXMucHJlc3NlZEtub2IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRQcmVzc2VkS25vYihjdXJyZW50WCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGlzIG5vIGxvbmdlciBkcmFnZ2luZyB0aGUgYmFyIG9yXG4gICAgICoga25vYiAoaWYgdGhleSB3ZXJlIGRyYWdnaW5nIGl0KS5cbiAgICAgKlxuICAgICAqIFRoZSB1c2VyIGNhbiBub3cgc2Nyb2xsIG9uIHRoZSB2aWV3IGluIHRoZSBuZXh0IGdlc3R1cmUgZXZlbnQuXG4gICAgICovXG4gICAgaWYgKGNvbnRlbnRFbCAmJiB0aGlzLnByZXNzZWRLbm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc2V0Q29udGVudFNjcm9sbFkoY29udGVudEVsLCBpbml0aWFsQ29udGVudFNjcm9sbFkpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgdGhlIGFjdGl2ZSBrbm9iJ3MgcG9zaXRpb25cbiAgICB0aGlzLnVwZGF0ZShjdXJyZW50WCk7XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHByZXNzZWQga25vYiB0byB1bmRlZmluZWQgc2luY2UgdGhlIHVzZXJcbiAgICAgKiBtYXkgc3RhcnQgZHJhZ2dpbmcgYSBkaWZmZXJlbnQga25vYiBpbiB0aGUgbmV4dCBnZXN0dXJlIGV2ZW50LlxuICAgICAqL1xuICAgIHRoaXMucHJlc3NlZEtub2IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICB0aGlzLmlvbktub2JNb3ZlRW5kLmVtaXQoe1xuICAgICAgdmFsdWU6IHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyh0aGlzLnZhbHVlKVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShjdXJyZW50WCkge1xuICAgIC8vIGZpZ3VyZSBvdXQgd2hlcmUgdGhlIHBvaW50ZXIgaXMgY3VycmVudGx5IGF0XG4gICAgLy8gdXBkYXRlIHRoZSBrbm9iIGJlaW5nIGludGVyYWN0ZWQgd2l0aFxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3Q7XG4gICAgbGV0IHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgIGlmIChpc1JUTCh0aGlzLmVsKSkge1xuICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgfVxuICAgIGlmICh0aGlzLnNuYXBzKSB7XG4gICAgICAvLyBzbmFwcyB0aGUgcmF0aW8gdG8gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIHJhdGlvID0gdmFsdWVUb1JhdGlvKHJhdGlvVG9WYWx1ZShyYXRpbywgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLnN0ZXApLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgd2hpY2gga25vYiBpcyBwcmVzc2VkXG4gICAgaWYgKHRoaXMucHJlc3NlZEtub2IgPT09ICdBJykge1xuICAgICAgdGhpcy5yYXRpb0EgPSByYXRpbztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yYXRpb0IgPSByYXRpbztcbiAgICB9XG4gICAgLy8gVXBkYXRlIGlucHV0IHZhbHVlXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG4gIHNldFByZXNzZWRLbm9iKGN1cnJlbnRYKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdCA9IHRoaXMucmFuZ2VTbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gZmlndXJlIG91dCB3aGljaCBrbm9iIHRoZXkgc3RhcnRlZCBjbG9zZXIgdG9cbiAgICBsZXQgcmF0aW8gPSBjbGFtcCgwLCAoY3VycmVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMSk7XG4gICAgaWYgKGlzUlRMKHRoaXMuZWwpKSB7XG4gICAgICByYXRpbyA9IDEgLSByYXRpbztcbiAgICB9XG4gICAgdGhpcy5wcmVzc2VkS25vYiA9ICF0aGlzLmR1YWxLbm9icyB8fCBNYXRoLmFicyh0aGlzLnJhdGlvQSAtIHJhdGlvKSA8IE1hdGguYWJzKHRoaXMucmF0aW9CIC0gcmF0aW8pID8gJ0EnIDogJ0InO1xuICAgIHRoaXMuc2V0Rm9jdXModGhpcy5wcmVzc2VkS25vYik7XG4gIH1cbiAgZ2V0IHZhbEEoKSB7XG4gICAgcmV0dXJuIHJhdGlvVG9WYWx1ZSh0aGlzLnJhdGlvQSwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLnN0ZXApO1xuICB9XG4gIGdldCB2YWxCKCkge1xuICAgIHJldHVybiByYXRpb1RvVmFsdWUodGhpcy5yYXRpb0IsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKTtcbiAgfVxuICBnZXQgcmF0aW9Mb3dlcigpIHtcbiAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnJhdGlvQSwgdGhpcy5yYXRpb0IpO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVCYXJTdGFydFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJTdGFydCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlVG9SYXRpbyhhY3RpdmVCYXJTdGFydCwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgfVxuICBnZXQgcmF0aW9VcHBlcigpIHtcbiAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnJhdGlvQSwgdGhpcy5yYXRpb0IpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yYXRpb0E7XG4gIH1cbiAgdXBkYXRlUmF0aW8oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qge1xuICAgICAgbWluLFxuICAgICAgbWF4XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICB0aGlzLnJhdGlvQSA9IHZhbHVlVG9SYXRpbyh2YWx1ZS5sb3dlciwgbWluLCBtYXgpO1xuICAgICAgdGhpcy5yYXRpb0IgPSB2YWx1ZVRvUmF0aW8odmFsdWUudXBwZXIsIG1pbiwgbWF4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yYXRpb0EgPSB2YWx1ZVRvUmF0aW8odmFsdWUsIG1pbiwgbWF4KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5ub1VwZGF0ZSA9IHRydWU7XG4gICAgY29uc3Qge1xuICAgICAgdmFsQSxcbiAgICAgIHZhbEJcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLnZhbHVlID0gIXRoaXMuZHVhbEtub2JzID8gdmFsQSA6IHtcbiAgICAgIGxvd2VyOiBNYXRoLm1pbih2YWxBLCB2YWxCKSxcbiAgICAgIHVwcGVyOiBNYXRoLm1heCh2YWxBLCB2YWxCKVxuICAgIH07XG4gICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICB9XG4gIHNldEZvY3VzKGtub2IpIHtcbiAgICBpZiAodGhpcy5lbC5zaGFkb3dSb290KSB7XG4gICAgICBjb25zdCBrbm9iRWwgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcihrbm9iID09PSAnQScgPyAnLnJhbmdlLWtub2ItYScgOiAnLnJhbmdlLWtub2ItYicpO1xuICAgICAgaWYgKGtub2JFbCkge1xuICAgICAgICBrbm9iRWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBjb250ZW50IHdhcyBwYXNzZWQgdG8gdGhlIFwic3RhcnRcIiBzbG90XG4gICAqL1xuICBnZXQgaGFzU3RhcnRTbG90Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cInN0YXJ0XCJdJykgIT09IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBjb250ZW50IHdhcyBwYXNzZWQgdG8gdGhlIFwiZW5kXCIgc2xvdFxuICAgKi9cbiAgZ2V0IGhhc0VuZFNsb3RDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwiZW5kXCJdJykgIT09IG51bGw7XG4gIH1cbiAgZ2V0IGhhc0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsICE9PSB1bmRlZmluZWQgfHwgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImxhYmVsXCJdJykgIT09IG51bGw7XG4gIH1cbiAgcmVuZGVyUmFuZ2VTbGlkZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIHN0ZXAsXG4gICAgICBoYW5kbGVLZXlib2FyZCxcbiAgICAgIHByZXNzZWRLbm9iLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBwaW4sXG4gICAgICByYXRpb0xvd2VyLFxuICAgICAgcmF0aW9VcHBlcixcbiAgICAgIHBpbkZvcm1hdHRlcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBsZXQgYmFyU3RhcnQgPSBgJHtyYXRpb0xvd2VyICogMTAwfSVgO1xuICAgIGxldCBiYXJFbmQgPSBgJHsxMDAgLSByYXRpb1VwcGVyICogMTAwfSVgO1xuICAgIGNvbnN0IHJ0bCA9IGlzUlRMKHRoaXMuZWwpO1xuICAgIGNvbnN0IHN0YXJ0ID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBlbmQgPSBydGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIGNvbnN0IHRpY2tTdHlsZSA9IHRpY2sgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW3N0YXJ0XTogdGlja1tzdGFydF1cbiAgICAgIH07XG4gICAgfTtcbiAgICBpZiAodGhpcy5kdWFsS25vYnMgPT09IGZhbHNlKSB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiB0aGUgYWN0aXZlQmFyU3RhcnQgb3IgdGhlIG1pbiB2YWx1ZSxcbiAgICAgICAqIHRoZSBrbm9iIHdpbGwgZGlzcGxheSBhdCB0aGUgc3RhcnQgb2YgdGhlIGFjdGl2ZSBiYXIuXG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLnZhbEEgPCAoKF9hID0gdGhpcy5hY3RpdmVCYXJTdGFydCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5taW4pKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBiYXIgcG9zaXRpb25zIHJlbGF0aXZlIHRvIHRoZSB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAgICAgKiBDb252ZXJ0cyB0aGUgcmF0aW8gdmFsdWVzIGludG8gcGVyY2VudGFnZXMsIHVzZWQgYXMgb2Zmc2V0cyBmb3IgbGVmdC9yaWdodCBzdHlsZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSByYXRpb1VwcGVyIHJlZmVycyB0byB0aGUga25vYiBwb3NpdGlvbiBvbiB0aGUgYmFyLlxuICAgICAgICAgKiBUaGUgcmF0aW9Mb3dlciByZWZlcnMgdG8gdGhlIGVuZCBwb3NpdGlvbiBvZiB0aGUgYWN0aXZlIGJhciAodGhlIHZhbHVlKS5cbiAgICAgICAgICovXG4gICAgICAgIGJhclN0YXJ0ID0gYCR7cmF0aW9VcHBlciAqIDEwMH0lYDtcbiAgICAgICAgYmFyRW5kID0gYCR7MTAwIC0gcmF0aW9Mb3dlciAqIDEwMH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdGhlcndpc2UsIHRoZSBrbm9iIHdpbGwgZGlzcGxheSBhdCB0aGUgZW5kIG9mIHRoZSBhY3RpdmUgYmFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgcmF0aW9Mb3dlciByZWZlcnMgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBhY3RpdmUgYmFyICh0aGUgdmFsdWUpLlxuICAgICAgICAgKiBUaGUgcmF0aW9VcHBlciByZWZlcnMgdG8gdGhlIGtub2IgcG9zaXRpb24gb24gdGhlIGJhci5cbiAgICAgICAgICovXG4gICAgICAgIGJhclN0YXJ0ID0gYCR7cmF0aW9Mb3dlciAqIDEwMH0lYDtcbiAgICAgICAgYmFyRW5kID0gYCR7MTAwIC0gcmF0aW9VcHBlciAqIDEwMH0lYDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYmFyU3R5bGUgPSB7XG4gICAgICBbc3RhcnRdOiBiYXJTdGFydCxcbiAgICAgIFtlbmRdOiBiYXJFbmRcbiAgICB9O1xuICAgIGNvbnN0IHRpY2tzID0gW107XG4gICAgaWYgKHRoaXMuc25hcHMgJiYgdGhpcy50aWNrcykge1xuICAgICAgZm9yIChsZXQgdmFsdWUgPSBtaW47IHZhbHVlIDw9IG1heDsgdmFsdWUgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCByYXRpbyA9IHZhbHVlVG9SYXRpbyh2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICBjb25zdCByYXRpb01pbiA9IE1hdGgubWluKHJhdGlvTG93ZXIsIHJhdGlvVXBwZXIpO1xuICAgICAgICBjb25zdCByYXRpb01heCA9IE1hdGgubWF4KHJhdGlvTG93ZXIsIHJhdGlvVXBwZXIpO1xuICAgICAgICBjb25zdCB0aWNrID0ge1xuICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNldHMgdGhlIHRpY2sgbWFyayBhcyBhY3RpdmUgd2hlbiB0aGUgdGljayBpcyBiZXR3ZWVuIHRoZSBtaW4gYm91bmRzIGFuZCB0aGUga25vYi5cbiAgICAgICAgICAgKiBXaGVuIHVzaW5nIGFjdGl2ZUJhclN0YXJ0LCB0aGUgdGljayBtYXJrIHdpbGwgYmUgYWN0aXZlIGJldHdlZW4gdGhlIGtub2IgYW5kIGFjdGl2ZUJhclN0YXJ0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGFjdGl2ZTogcmF0aW8gPj0gcmF0aW9NaW4gJiYgcmF0aW8gPD0gcmF0aW9NYXhcbiAgICAgICAgfTtcbiAgICAgICAgdGlja1tzdGFydF0gPSBgJHtyYXRpbyAqIDEwMH0lYDtcbiAgICAgICAgdGlja3MucHVzaCh0aWNrKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwicmFuZ2Utc2xpZGVyXCIsXG4gICAgICByZWY6IHJhbmdlRWwgPT4gdGhpcy5yYW5nZVNsaWRlciA9IHJhbmdlRWwsXG4gICAgICAvKipcbiAgICAgICAqIFNpbmNlIHRoZSBnZXN0dXJlIGhhcyBhIHRocmVzaG9sZCwgdGhlIHZhbHVlXG4gICAgICAgKiB3b24ndCBjaGFuZ2UgdW50aWwgdGhlIHVzZXIgaGFzIGRyYWdnZWQgcGFzdFxuICAgICAgICogdGhlIHRocmVzaG9sZC4gVGhpcyBpcyB0byBwcmV2ZW50IHRoZSByYW5nZVxuICAgICAgICogZnJvbSBtb3Zpbmcgd2hlbiB0aGUgdXNlciBpcyBzY3JvbGxpbmcuXG4gICAgICAgKlxuICAgICAgICogVGhpcyByZXN1bHRzIGluIHRoZSB2YWx1ZSBub3QgYmVpbmcgdXBkYXRlZFxuICAgICAgICogYW5kIHRoZSBldmVudCBlbWl0dGVycyBub3QgYmVpbmcgdHJpZ2dlcmVkXG4gICAgICAgKiBpZiB0aGUgdXNlciB0YXBzIG9uIHRoZSByYW5nZS4gVGhpcyBpcyB3aHlcbiAgICAgICAqIHdlIG5lZWQgdG8gbGlzdGVuIGZvciB0aGUgXCJwb2ludGVyVXBcIiBldmVudC5cbiAgICAgICAqL1xuICAgICAgb25Qb2ludGVyVXA6IGV2ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSB1c2VyIGRyYWdzIHRoZSBrbm9iIG9uIHRoZSB3ZWJcbiAgICAgICAgICogdmVyc2lvbiAoZG9lcyBub3Qgb2NjdXIgb24gbW9iaWxlKSxcbiAgICAgICAgICogdGhlIFwicG9pbnRlclVwXCIgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWRcbiAgICAgICAgICogYWxvbmcgd2l0aCB0aGUgZ2VzdHVyZSdzIGV2ZW50cy5cbiAgICAgICAgICogVGhpcyBsZWFkcyB0byBkdXBsaWNhdGUgZXZlbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBjaGVja2luZyBpZiB0aGUgcHJlc3NlZEtub2IgaXMgdW5kZWZpbmVkLFxuICAgICAgICAgKiB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBcInBvaW50ZXJVcFwiIGV2ZW50IHdhc1xuICAgICAgICAgKiB0cmlnZ2VyZWQgYnkgYSB0YXAgb3IgYSBkcmFnLiBJZiBpdCB3YXNcbiAgICAgICAgICogZHJhZ2dlZCwgdGhlIHByZXNzZWRLbm9iIHdpbGwgYmUgZGVmaW5lZC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRLbm9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICB0aGlzLm9uRW5kKGV2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRpY2tzLm1hcCh0aWNrID0+IGgoXCJkaXZcIiwge1xuICAgICAgc3R5bGU6IHRpY2tTdHlsZSh0aWNrKSxcbiAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICAncmFuZ2UtdGljayc6IHRydWUsXG4gICAgICAgICdyYW5nZS10aWNrLWFjdGl2ZSc6IHRpY2suYWN0aXZlXG4gICAgICB9LFxuICAgICAgcGFydDogdGljay5hY3RpdmUgPyAndGljay1hY3RpdmUnIDogJ3RpY2snXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJhbmdlLWJhci1jb250YWluZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwicmFuZ2UtYmFyXCIsXG4gICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgcGFydDogXCJiYXJcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdyYW5nZS1iYXInOiB0cnVlLFxuICAgICAgICAncmFuZ2UtYmFyLWFjdGl2ZSc6IHRydWUsXG4gICAgICAgICdoYXMtdGlja3MnOiB0aWNrcy5sZW5ndGggPiAwXG4gICAgICB9LFxuICAgICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICAgIHN0eWxlOiBiYXJTdHlsZSxcbiAgICAgIHBhcnQ6IFwiYmFyLWFjdGl2ZVwiXG4gICAgfSkpLCByZW5kZXJLbm9iKHJ0bCwge1xuICAgICAga25vYjogJ0EnLFxuICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdBJyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbEEsXG4gICAgICByYXRpbzogdGhpcy5yYXRpb0EsXG4gICAgICBwaW4sXG4gICAgICBwaW5Gb3JtYXR0ZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhhbmRsZUtleWJvYXJkLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlc1xuICAgIH0pLCB0aGlzLmR1YWxLbm9icyAmJiByZW5kZXJLbm9iKHJ0bCwge1xuICAgICAga25vYjogJ0InLFxuICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdCJyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbEIsXG4gICAgICByYXRpbzogdGhpcy5yYXRpb0IsXG4gICAgICBwaW4sXG4gICAgICBwaW5Gb3JtYXR0ZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhhbmRsZUtleWJvYXJkLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlc1xuICAgIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIGhhc0xhYmVsLFxuICAgICAgcmFuZ2VJZCxcbiAgICAgIHBpbixcbiAgICAgIHByZXNzZWRLbm9iLFxuICAgICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgICBsYWJlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGluSXRlbSA9IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBubyBzdGFydCBjb250ZW50IHRoZW4gdGhlIGtub2IgYXRcbiAgICAgKiB0aGUgbWluIHZhbHVlIHdpbGwgYmUgY3V0IG9mZiBieSB0aGUgaXRlbSBtYXJnaW4uXG4gICAgICovXG4gICAgY29uc3QgaGFzU3RhcnRDb250ZW50ID0gaGFzTGFiZWwgJiYgKGxhYmVsUGxhY2VtZW50ID09PSAnc3RhcnQnIHx8IGxhYmVsUGxhY2VtZW50ID09PSAnZml4ZWQnKSB8fCB0aGlzLmhhc1N0YXJ0U2xvdENvbnRlbnQ7XG4gICAgY29uc3QgbmVlZHNTdGFydEFkanVzdG1lbnQgPSBpbkl0ZW0gJiYgIWhhc1N0YXJ0Q29udGVudDtcbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBubyBlbmQgY29udGVudCB0aGVuIHRoZSBrbm9iIGF0XG4gICAgICogdGhlIG1heCB2YWx1ZSB3aWxsIGJlIGN1dCBvZmYgYnkgdGhlIGl0ZW0gbWFyZ2luLlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0VuZENvbnRlbnQgPSBoYXNMYWJlbCAmJiBsYWJlbFBsYWNlbWVudCA9PT0gJ2VuZCcgfHwgdGhpcy5oYXNFbmRTbG90Q29udGVudDtcbiAgICBjb25zdCBuZWVkc0VuZEFkanVzdG1lbnQgPSBpbkl0ZW0gJiYgIWhhc0VuZENvbnRlbnQ7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKSwgZGlzYWJsZWQpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2U5N2NiN2VhYjg3N2ViMTYyNDQyOWI0YTc5MTA3MTMwYzY4MDljZjUnLFxuICAgICAgb25Gb2N1c2luOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkZvY3Vzb3V0OiB0aGlzLm9uQmx1cixcbiAgICAgIGlkOiByYW5nZUlkLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2luLWl0ZW0nOiBpbkl0ZW0sXG4gICAgICAgICdyYW5nZS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAncmFuZ2UtcHJlc3NlZCc6IHByZXNzZWRLbm9iICE9PSB1bmRlZmluZWQsXG4gICAgICAgICdyYW5nZS1oYXMtcGluJzogcGluLFxuICAgICAgICBbYHJhbmdlLWxhYmVsLXBsYWNlbWVudC0ke2xhYmVsUGxhY2VtZW50fWBdOiB0cnVlLFxuICAgICAgICAncmFuZ2UtaXRlbS1zdGFydC1hZGp1c3RtZW50JzogbmVlZHNTdGFydEFkanVzdG1lbnQsXG4gICAgICAgICdyYW5nZS1pdGVtLWVuZC1hZGp1c3RtZW50JzogbmVlZHNFbmRBZGp1c3RtZW50XG4gICAgICB9KVxuICAgIH0sIGgoXCJsYWJlbFwiLCB7XG4gICAgICBrZXk6ICdhNDNlOTg1OWY3NGY4MzQ2MDQzOWVmZWZjY2I1ZmJiOWYzODdjOWVlJyxcbiAgICAgIGNsYXNzOiBcInJhbmdlLXdyYXBwZXJcIixcbiAgICAgIGlkOiBcInJhbmdlLWxhYmVsXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzc1MzUyYTMwZjMwZGJkMDIyOGM2MTM4ZWI0MzI0YTVjMDIxZGJiNDgnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICdsYWJlbC10ZXh0LXdyYXBwZXItaGlkZGVuJzogIWhhc0xhYmVsXG4gICAgICB9LFxuICAgICAgcGFydDogXCJsYWJlbFwiXG4gICAgfSwgbGFiZWwgIT09IHVuZGVmaW5lZCA/IGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibGFiZWwtdGV4dFwiXG4gICAgfSwgbGFiZWwpIDogaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJsYWJlbFwiXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzZhM2UxNDdjM2U1ZDkzOGJiMmI1MDUyMmEyOTBmNmZkZmNmNDBmMDUnLFxuICAgICAgY2xhc3M6IFwibmF0aXZlLXdyYXBwZXJcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzY2MjcyMzZlYWM5ZjcxMWZhOWMyNzg3OWEwMTdkZDk5NGU2NTgxMWUnLFxuICAgICAgbmFtZTogXCJzdGFydFwiXG4gICAgfSksIHRoaXMucmVuZGVyUmFuZ2VTbGlkZXIoKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNmFmM2JiYWRhY2QwMzZiYzdjZDMwNzMyMjI3Zjc2ZDdjNjQxMTdmYicsXG4gICAgICBuYW1lOiBcImVuZFwiXG4gICAgfSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVib3VuY2VcIjogW1wiZGVib3VuY2VDaGFuZ2VkXCJdLFxuICAgICAgXCJtaW5cIjogW1wibWluQ2hhbmdlZFwiXSxcbiAgICAgIFwibWF4XCI6IFtcIm1heENoYW5nZWRcIl0sXG4gICAgICBcInN0ZXBcIjogW1wic3RlcENoYW5nZWRcIl0sXG4gICAgICBcImFjdGl2ZUJhclN0YXJ0XCI6IFtcImFjdGl2ZUJhclN0YXJ0Q2hhbmdlZFwiXSxcbiAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgcmVuZGVyS25vYiA9IChydGwsIHtcbiAga25vYixcbiAgdmFsdWUsXG4gIHJhdGlvLFxuICBtaW4sXG4gIG1heCxcbiAgZGlzYWJsZWQsXG4gIHByZXNzZWQsXG4gIHBpbixcbiAgaGFuZGxlS2V5Ym9hcmQsXG4gIHBpbkZvcm1hdHRlcixcbiAgaW5oZXJpdGVkQXR0cmlidXRlc1xufSkgPT4ge1xuICBjb25zdCBzdGFydCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIGNvbnN0IGtub2JTdHlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgIHN0eWxlW3N0YXJ0XSA9IGAke3JhdGlvICogMTAwfSVgO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcbiAgLy8gVGhlIGFyaWEgbGFiZWwgc2hvdWxkIGJlIHByZWZlcnJlZCBvdmVyIHZpc2libGUgdGV4dCBpZiBib3RoIGFyZSBzcGVjaWZpZWRcbiAgY29uc3QgYXJpYUxhYmVsID0gaW5oZXJpdGVkQXR0cmlidXRlc1snYXJpYS1sYWJlbCddO1xuICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgb25LZXlEb3duOiBldiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBldi5rZXk7XG4gICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIGZhbHNlKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIHRydWUpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzOiB7XG4gICAgICAncmFuZ2Uta25vYi1oYW5kbGUnOiB0cnVlLFxuICAgICAgJ3JhbmdlLWtub2ItYSc6IGtub2IgPT09ICdBJyxcbiAgICAgICdyYW5nZS1rbm9iLWInOiBrbm9iID09PSAnQicsXG4gICAgICAncmFuZ2Uta25vYi1wcmVzc2VkJzogcHJlc3NlZCxcbiAgICAgICdyYW5nZS1rbm9iLW1pbic6IHZhbHVlID09PSBtaW4sXG4gICAgICAncmFuZ2Uta25vYi1tYXgnOiB2YWx1ZSA9PT0gbWF4LFxuICAgICAgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsXG4gICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICB9LFxuICAgIHN0eWxlOiBrbm9iU3R5bGUoKSxcbiAgICByb2xlOiBcInNsaWRlclwiLFxuICAgIHRhYmluZGV4OiBkaXNhYmxlZCA/IC0xIDogMCxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsICE9PSB1bmRlZmluZWQgPyBhcmlhTGFiZWwgOiBudWxsLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbCA9PT0gdW5kZWZpbmVkID8gJ3JhbmdlLWxhYmVsJyA6IG51bGwsXG4gICAgXCJhcmlhLXZhbHVlbWluXCI6IG1pbixcbiAgICBcImFyaWEtdmFsdWVtYXhcIjogbWF4LFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsXG4gICAgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlXG4gIH0sIHBpbiAmJiBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJyYW5nZS1waW5cIixcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIHBhcnQ6IFwicGluXCJcbiAgfSwgcGluRm9ybWF0dGVyKHZhbHVlKSksIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcInJhbmdlLWtub2JcIixcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIHBhcnQ6IFwia25vYlwiXG4gIH0pKTtcbn07XG5jb25zdCByYXRpb1RvVmFsdWUgPSAocmF0aW8sIG1pbiwgbWF4LCBzdGVwKSA9PiB7XG4gIGxldCB2YWx1ZSA9IChtYXggLSBtaW4pICogcmF0aW87XG4gIGlmIChzdGVwID4gMCkge1xuICAgIC8vIHJvdW5kIHRvIG5lYXJlc3QgbXVsdGlwbGUgb2Ygc3RlcCwgdGhlbiBhZGQgbWluXG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwICsgbWluO1xuICB9XG4gIGNvbnN0IGNsYW1wZWRWYWx1ZSA9IGNsYW1wKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiByb3VuZFRvTWF4RGVjaW1hbFBsYWNlcyhjbGFtcGVkVmFsdWUsIG1pbiwgbWF4LCBzdGVwKTtcbn07XG5jb25zdCB2YWx1ZVRvUmF0aW8gPSAodmFsdWUsIG1pbiwgbWF4KSA9PiB7XG4gIHJldHVybiBjbGFtcCgwLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbiksIDEpO1xufTtcbmxldCByYW5nZUlkcyA9IDA7XG5SYW5nZS5zdHlsZSA9IHtcbiAgaW9zOiBJb25SYW5nZUlvc1N0eWxlMCxcbiAgbWQ6IElvblJhbmdlTWRTdHlsZTBcbn07XG5leHBvcnQgeyBSYW5nZSBhcyBpb25fcmFuZ2UgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLGlCQUFpQixHQUFHO0FBQzNCLE1BQUksQ0FBQyxhQUFhLENBQUMsRUFBRyxRQUFP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
