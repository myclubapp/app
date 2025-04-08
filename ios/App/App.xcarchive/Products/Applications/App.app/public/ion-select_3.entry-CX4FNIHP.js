import {
  compareOptions,
  isOptionSelected
} from "./chunk-SMKEODLY.js";
import {
  watchForOptions
} from "./chunk-P5NIN3Q4.js";
import {
  createNotchController
} from "./chunk-2JWSFOKZ.js";
import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  caretDownSharp,
  chevronExpand
} from "./chunk-Y2OY2WAF.js";
import {
  actionSheetController,
  alertController,
  modalController,
  popoverController,
  safeCall
} from "./chunk-HYGHPGGJ.js";
import "./chunk-U6MFTC2E.js";
import {
  createColorClasses,
  getClassMap,
  hostContext
} from "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import {
  focusVisibleElement,
  inheritAttributes,
  renderHiddenInput
} from "./chunk-RRWPYKYY.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
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

// node_modules/@ionic/core/dist/esm/ion-select_3.entry.js
var selectIosCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.select-bottom{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}:host(.has-focus.ion-valid),:host(.ion-touched.ion-invalid){--border-color:var(--highlight-color)}.select-bottom .error-text{display:none;color:var(--highlight-color-invalid)}.select-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .select-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .select-bottom .helper-text{display:none}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
var IonSelectIosStyle0 = selectIosCss;
var selectMdCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.select-bottom{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}:host(.has-focus.ion-valid),:host(.ion-touched.ion-invalid){--border-color:var(--highlight-color)}.select-bottom .error-text{display:none;color:var(--highlight-color-invalid)}.select-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .select-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .select-bottom .helper-text{display:none}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{-ms-flex-positive:1;flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}.select-icon{width:0.8125rem;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{-webkit-transform:scale(1);transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
var IonSelectMdStyle0 = selectMdCss;
var Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionDismiss = createEvent(this, "ionDismiss", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-sel-${selectIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    this.inheritedAttributes = {};
    this.onClick = (ev) => {
      const target = ev.target;
      const closestSlot = target.closest('[slot="start"], [slot="end"]');
      if (target === this.el || closestSlot === null) {
        this.setFocus();
        this.open(ev);
      } else {
        ev.preventDefault();
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.isExpanded = false;
    this.cancelText = "Cancel";
    this.color = void 0;
    this.compareWith = void 0;
    this.disabled = false;
    this.fill = void 0;
    this.errorText = void 0;
    this.helperText = void 0;
    this.interface = "alert";
    this.interfaceOptions = {};
    this.justify = void 0;
    this.label = void 0;
    this.labelPlacement = "start";
    this.multiple = false;
    this.name = this.inputId;
    this.okText = "OK";
    this.placeholder = void 0;
    this.selectedText = void 0;
    this.toggleIcon = void 0;
    this.expandedIcon = void 0;
    this.shape = void 0;
    this.value = void 0;
    this.required = false;
  }
  styleChanged() {
    this.emitStyle();
  }
  setValue(value) {
    this.value = value;
    this.ionChange.emit({
      value
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const {
        el
      } = this;
      this.notchController = createNotchController(el, () => this.notchSpacerEl, () => this.labelSlot);
      this.updateOverlayOptions();
      this.emitStyle();
      this.mutationO = watchForOptions(this.el, "ion-select-option", () => __async(this, null, function* () {
        this.updateOverlayOptions();
        forceUpdate(this);
      }));
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  componentDidLoad() {
    this.emitStyle();
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = void 0;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = void 0;
    }
  }
  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  open(event) {
    return __async(this, null, function* () {
      if (this.disabled || this.isExpanded) {
        return void 0;
      }
      this.isExpanded = true;
      const overlay = this.overlay = yield this.createOverlay(event);
      const scrollSelectedIntoView = () => {
        const indexOfSelected = this.childOpts.findIndex((o) => o.value === this.value);
        if (indexOfSelected > -1) {
          const selectedItem = overlay.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
          if (selectedItem) {
            const interactiveEl = selectedItem.querySelector("ion-radio, ion-checkbox");
            if (interactiveEl) {
              selectedItem.scrollIntoView({
                block: "nearest"
              });
              interactiveEl.setFocus();
            }
            focusVisibleElement(selectedItem);
          }
        } else {
          const firstEnabledOption = overlay.querySelector("ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)");
          if (firstEnabledOption) {
            firstEnabledOption.setFocus();
            focusVisibleElement(firstEnabledOption.closest("ion-item"));
          }
        }
      };
      if (this.interface === "modal") {
        overlay.addEventListener("ionModalWillPresent", scrollSelectedIntoView, {
          once: true
        });
      } else if (this.interface === "popover") {
        overlay.addEventListener("ionPopoverWillPresent", scrollSelectedIntoView, {
          once: true
        });
      } else {
        const scrollAfterRender = () => {
          requestAnimationFrame(() => {
            scrollSelectedIntoView();
          });
        };
        if (this.interface === "alert") {
          overlay.addEventListener("ionAlertWillPresent", scrollAfterRender, {
            once: true
          });
        } else if (this.interface === "action-sheet") {
          overlay.addEventListener("ionActionSheetWillPresent", scrollAfterRender, {
            once: true
          });
        }
      }
      overlay.onDidDismiss().then(() => {
        this.overlay = void 0;
        this.isExpanded = false;
        this.ionDismiss.emit();
        this.setFocus();
      });
      yield overlay.present();
      return overlay;
    });
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (selectInterface === "action-sheet" && this.multiple) {
      console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = "alert";
    }
    if (selectInterface === "popover" && !ev) {
      console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = "alert";
    }
    if (selectInterface === "action-sheet") {
      return this.openActionSheet();
    }
    if (selectInterface === "popover") {
      return this.openPopover(ev);
    }
    if (selectInterface === "modal") {
      return this.openModal();
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case "action-sheet":
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case "popover":
        const popover = overlay.querySelector("ion-select-popover");
        if (popover) {
          popover.options = this.createOverlaySelectOptions(childOpts, value);
        }
        break;
      case "modal":
        const modal = overlay.querySelector("ion-select-modal");
        if (modal) {
          modal.options = this.createOverlaySelectOptions(childOpts, value);
        }
        break;
      case "alert":
        const inputType = this.multiple ? "checkbox" : "radio";
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }
  createActionSheetButtons(data, selectValue) {
    const actionSheetButtons = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        role: isOptionSelected(selectValue, value, this.compareWith) ? "selected" : "",
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.setValue(value);
        }
      };
    });
    actionSheetButtons.push({
      text: this.cancelText,
      role: "cancel",
      handler: () => {
        this.ionCancel.emit();
      }
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType, selectValue) {
    const alertInputs = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || "",
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled
      };
    });
    return alertInputs;
  }
  createOverlaySelectOptions(data, selectValue) {
    const popoverOptions = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || "",
        cssClass: optClass,
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
        handler: (selected) => {
          this.setValue(selected);
          if (!this.multiple) {
            this.close();
          }
        }
      };
    });
    return popoverOptions;
  }
  openPopover(ev) {
    return __async(this, null, function* () {
      const {
        fill,
        labelPlacement
      } = this;
      const interfaceOptions = this.interfaceOptions;
      const mode = getIonMode(this);
      const showBackdrop = mode === "md" ? false : true;
      const multiple = this.multiple;
      const value = this.value;
      let event = ev;
      let size = "auto";
      const hasFloatingOrStackedLabel = labelPlacement === "floating" || labelPlacement === "stacked";
      if (hasFloatingOrStackedLabel || mode === "md" && fill !== void 0) {
        size = "cover";
      } else {
        event = Object.assign(Object.assign({}, ev), {
          detail: {
            ionShadowTarget: this.nativeWrapperEl
          }
        });
      }
      const popoverOpts = Object.assign(Object.assign({
        mode,
        event,
        alignment: "center",
        size,
        showBackdrop
      }, interfaceOptions), {
        component: "ion-select-popover",
        cssClass: ["select-popover", interfaceOptions.cssClass],
        componentProps: {
          header: interfaceOptions.header,
          subHeader: interfaceOptions.subHeader,
          message: interfaceOptions.message,
          multiple,
          value,
          options: this.createOverlaySelectOptions(this.childOpts, value)
        }
      });
      return popoverController.create(popoverOpts);
    });
  }
  openActionSheet() {
    return __async(this, null, function* () {
      const mode = getIonMode(this);
      const interfaceOptions = this.interfaceOptions;
      const actionSheetOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        buttons: this.createActionSheetButtons(this.childOpts, this.value),
        cssClass: ["select-action-sheet", interfaceOptions.cssClass]
      });
      return actionSheetController.create(actionSheetOpts);
    });
  }
  openAlert() {
    return __async(this, null, function* () {
      const interfaceOptions = this.interfaceOptions;
      const inputType = this.multiple ? "checkbox" : "radio";
      const mode = getIonMode(this);
      const alertOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        header: interfaceOptions.header ? interfaceOptions.header : this.labelText,
        inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
        buttons: [{
          text: this.cancelText,
          role: "cancel",
          handler: () => {
            this.ionCancel.emit();
          }
        }, {
          text: this.okText,
          handler: (selectedValues) => {
            this.setValue(selectedValues);
          }
        }],
        cssClass: ["select-alert", interfaceOptions.cssClass, this.multiple ? "multiple-select-alert" : "single-select-alert"]
      });
      return alertController.create(alertOpts);
    });
  }
  openModal() {
    const {
      multiple,
      value,
      interfaceOptions
    } = this;
    const mode = getIonMode(this);
    const modalOpts = Object.assign(Object.assign({}, interfaceOptions), {
      mode,
      cssClass: ["select-modal", interfaceOptions.cssClass],
      component: "ion-select-modal",
      componentProps: {
        header: interfaceOptions.header,
        multiple,
        value,
        options: this.createOverlaySelectOptions(this.childOpts, value)
      }
    });
    return modalController.create(modalOpts);
  }
  /**
   * Close the select interface.
   */
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  hasValue() {
    return this.getText() !== "";
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll("ion-select-option"));
  }
  /**
   * Returns any plaintext associated with
   * the label (either prop or slot).
   * Note: This will not return any custom
   * HTML. Use the `hasLabel` getter if you
   * want to know if any slotted label content
   * was passed.
   */
  get labelText() {
    const {
      label
    } = this;
    if (label !== void 0) {
      return label;
    }
    const {
      labelSlot
    } = this;
    if (labelSlot !== null) {
      return labelSlot.textContent;
    }
    return;
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== "") {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    const {
      disabled
    } = this;
    const style = {
      "interactive-disabled": disabled
    };
    this.ionStyle.emit(style);
  }
  renderLabel() {
    const {
      label
    } = this;
    return h("div", {
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !this.hasLabel
      },
      part: "label"
    }, label === void 0 ? h("slot", {
      name: "label"
    }) : h("div", {
      class: "label-text"
    }, label));
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== void 0 || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = getIonMode(this);
    const hasOutlineFill = mode === "md" && this.fill === "outline";
    if (hasOutlineFill) {
      return [h("div", {
        class: "select-outline-container"
      }, h("div", {
        class: "select-outline-start"
      }), h("div", {
        class: {
          "select-outline-notch": true,
          "select-outline-notch-hidden": !this.hasLabel
        }
      }, h("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: (el) => this.notchSpacerEl = el
      }, this.label)), h("div", {
        class: "select-outline-end"
      })), this.renderLabel()];
    }
    return this.renderLabel();
  }
  /**
   * Renders either the placeholder
   * or the selected values based on
   * the state of the select.
   */
  renderSelectText() {
    const {
      placeholder
    } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === "" && placeholder !== void 0) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      "select-text": true,
      "select-placeholder": addPlaceholderClass
    };
    const textPart = addPlaceholderClass ? "placeholder" : "text";
    return h("div", {
      "aria-hidden": "true",
      class: selectTextClasses,
      part: textPart
    }, selectText);
  }
  /**
   * Renders the chevron icon
   * next to the select text.
   */
  renderSelectIcon() {
    const mode = getIonMode(this);
    const {
      isExpanded,
      toggleIcon,
      expandedIcon
    } = this;
    let icon;
    if (isExpanded && expandedIcon !== void 0) {
      icon = expandedIcon;
    } else {
      const defaultIcon = mode === "ios" ? chevronExpand : caretDownSharp;
      icon = toggleIcon !== null && toggleIcon !== void 0 ? toggleIcon : defaultIcon;
    }
    return h("ion-icon", {
      class: "select-icon",
      part: "icon",
      "aria-hidden": "true",
      icon
    });
  }
  get ariaLabel() {
    var _a;
    const {
      placeholder,
      inheritedAttributes
    } = this;
    const displayValue = this.getText();
    const definedLabel = (_a = inheritedAttributes["aria-label"]) !== null && _a !== void 0 ? _a : this.labelText;
    let renderedLabel = displayValue;
    if (renderedLabel === "" && placeholder !== void 0) {
      renderedLabel = placeholder;
    }
    if (definedLabel !== void 0) {
      renderedLabel = renderedLabel === "" ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
  }
  renderListbox() {
    const {
      disabled,
      inputId,
      isExpanded,
      required
    } = this;
    return h("button", {
      disabled,
      id: inputId,
      "aria-label": this.ariaLabel,
      "aria-haspopup": "dialog",
      "aria-expanded": `${isExpanded}`,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId,
      "aria-required": `${required}`,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      ref: (focusEl) => this.focusEl = focusEl
    });
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
    return [h("div", {
      id: helperTextId,
      class: "helper-text",
      part: "supporting-text helper-text"
    }, helperText), h("div", {
      id: errorTextId,
      class: "error-text",
      part: "supporting-text error-text"
    }, errorText)];
  }
  /**
   * Responsible for rendering helper text, and error text. This element
   * should only be rendered if hint text is set.
   */
  renderBottomContent() {
    const {
      helperText,
      errorText
    } = this;
    const hasHintText = !!helperText || !!errorText;
    if (!hasHintText) {
      return;
    }
    return h("div", {
      class: "select-bottom"
    }, this.renderHintText());
  }
  render() {
    const {
      disabled,
      el,
      isExpanded,
      expandedIcon,
      labelPlacement,
      justify,
      placeholder,
      fill,
      shape,
      name,
      value
    } = this;
    const mode = getIonMode(this);
    const hasFloatingOrStackedLabel = labelPlacement === "floating" || labelPlacement === "stacked";
    const justifyEnabled = !hasFloatingOrStackedLabel && justify !== void 0;
    const rtl = isRTL(el) ? "rtl" : "ltr";
    const inItem = hostContext("ion-item", this.el);
    const shouldRenderHighlight = mode === "md" && fill !== "outline" && !inItem;
    const hasValue = this.hasValue();
    const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
    renderHiddenInput(true, el, name, parseValue(value), disabled);
    const labelShouldFloat = labelPlacement === "stacked" || labelPlacement === "floating" && (hasValue || isExpanded || hasStartEndSlots);
    return h(Host, {
      key: "aa7bd7fbb6479c7805486990650a406e5470fd13",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "in-item": inItem,
        "in-item-color": hostContext("ion-item.ion-color", el),
        "select-disabled": disabled,
        "select-expanded": isExpanded,
        "has-expanded-icon": expandedIcon !== void 0,
        "has-value": hasValue,
        "label-floating": labelShouldFloat,
        "has-placeholder": placeholder !== void 0,
        "ion-focusable": true,
        [`select-${rtl}`]: true,
        [`select-fill-${fill}`]: fill !== void 0,
        [`select-justify-${justify}`]: justifyEnabled,
        [`select-shape-${shape}`]: shape !== void 0,
        [`select-label-placement-${labelPlacement}`]: true
      })
    }, h("label", {
      key: "fde3cdfd0ef7d1a20263e35ff4358ee7f61a789f",
      class: "select-wrapper",
      id: "select-label"
    }, this.renderLabelContainer(), h("div", {
      key: "6fb8deedc827b6be2f19f9e57a62efefaaba200f",
      class: "select-wrapper-inner"
    }, h("slot", {
      key: "a57a204ea1cbd9c4bac338f14e196e780dab0a10",
      name: "start"
    }), h("div", {
      key: "78b83e1484a446537e038527d539d997e330cd69",
      class: "native-wrapper",
      ref: (el2) => this.nativeWrapperEl = el2,
      part: "container"
    }, this.renderSelectText(), this.renderListbox()), h("slot", {
      key: "9fc660134e5247c4e5243c7d9d71ac6cec08705d",
      name: "end"
    }), !hasFloatingOrStackedLabel && this.renderSelectIcon()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && h("div", {
      key: "7f143285efa7fd7756dfdc5517ca33e84c8a027e",
      class: "select-highlight"
    })), this.renderBottomContent());
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["styleChanged"],
      "isExpanded": ["styleChanged"],
      "placeholder": ["styleChanged"],
      "value": ["styleChanged"]
    };
  }
};
var getOptionValue = (el) => {
  const value = el.value;
  return value === void 0 ? el.textContent || "" : value;
};
var parseValue = (value) => {
  if (value == null) {
    return void 0;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};
var generateText = (opts, value, compareWith) => {
  if (value === void 0) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.map((v) => textForValue(opts, v, compareWith)).filter((opt) => opt !== null).join(", ");
  } else {
    return textForValue(opts, value, compareWith) || "";
  }
};
var textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find((opt) => {
    return compareOptions(value, getOptionValue(opt), compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
var selectIds = 0;
var OPTION_CLASS = "select-interface-option";
Select.style = {
  ios: IonSelectIosStyle0,
  md: IonSelectMdStyle0
};
var selectOptionCss = ":host{display:none}";
var IonSelectOptionStyle0 = selectOptionCss;
var SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    this.disabled = false;
    this.value = void 0;
  }
  render() {
    return h(Host, {
      key: "8c96c199ce3a3065de3fe446500f567236e0610a",
      role: "option",
      id: this.inputId,
      class: getIonMode(this)
    });
  }
  get el() {
    return getElement(this);
  }
};
var selectOptionIds = 0;
SelectOption.style = IonSelectOptionStyle0;
var selectPopoverIosCss = ".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-ios-h{overflow-y:auto}";
var IonSelectPopoverIosStyle0 = selectPopoverIosCss;
var selectPopoverMdCss = ".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-md-h{overflow-y:auto}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(container){display:none}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
var IonSelectPopoverMdStyle0 = selectPopoverMdCss;
var SelectPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.header = void 0;
    this.subHeader = void 0;
    this.message = void 0;
    this.multiple = void 0;
    this.options = [];
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  /**
   * When an option is selected we need to get the value(s)
   * of the selected option(s) and return it in the option
   * handler
   */
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
    }
  }
  /**
   * Dismisses the host popover that the `ion-select-popover`
   * is rendered within.
   */
  dismissParentPopover() {
    const popover = this.el.closest("ion-popover");
    if (popover) {
      popover.dismiss();
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = this.findOptionFromEvent(ev);
    return option ? option.value : void 0;
  }
  renderOptions(options) {
    const {
      multiple
    } = this;
    switch (multiple) {
      case true:
        return this.renderCheckboxOptions(options);
      default:
        return this.renderRadioOptions(options);
    }
  }
  renderCheckboxOptions(options) {
    return options.map((option) => h("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        "item-checkbox-checked": option.checked
      }, getClassMap(option.cssClass))
    }, h("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: (ev) => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        forceUpdate(this);
      }
    }, option.text)));
  }
  renderRadioOptions(options) {
    const checked = options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", {
      value: checked,
      onIonChange: (ev) => this.callOptionHandler(ev)
    }, options.map((option) => h("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        "item-radio-checked": option.value === checked
      }, getClassMap(option.cssClass))
    }, h("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      onClick: () => this.dismissParentPopover(),
      onKeyUp: (ev) => {
        if (ev.key === " ") {
          this.dismissParentPopover();
        }
      }
    }, option.text))));
  }
  render() {
    const {
      header,
      message,
      options,
      subHeader
    } = this;
    const hasSubHeaderOrMessage = subHeader !== void 0 || message !== void 0;
    return h(Host, {
      key: "542367ab8fb72bfebf7e65630b91017d68827fd6",
      class: getIonMode(this)
    }, h("ion-list", {
      key: "f2f0f37e1365cd7780b02de1a1698700d0df48a7"
    }, header !== void 0 && h("ion-list-header", {
      key: "4b8800a68e800f19277a44b7074ca24b70218daf"
    }, header), hasSubHeaderOrMessage && h("ion-item", {
      key: "932b7903daf97d5a57d289b7ee49e868bb9b0cf5"
    }, h("ion-label", {
      key: "fc3f1b69aa2a0bc6125d35692dcad3a8a99fd160",
      class: "ion-text-wrap"
    }, subHeader !== void 0 && h("h3", {
      key: "eceab2f47afa95f04b138342b0bdbfa1f50919a8"
    }, subHeader), message !== void 0 && h("p", {
      key: "70f4e27ad1316318efd0c17efce31e5e45c8fa02"
    }, message))), this.renderOptions(options)));
  }
  get el() {
    return getElement(this);
  }
};
SelectPopover.style = {
  ios: IonSelectPopoverIosStyle0,
  md: IonSelectPopoverMdStyle0
};
export {
  Select as ion_select,
  SelectOption as ion_select_option,
  SelectPopover as ion_select_popover
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-select_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VsZWN0XzMuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQsIGkgYXMgZm9yY2VVcGRhdGUgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlTm90Y2hDb250cm9sbGVyIH0gZnJvbSAnLi9ub3RjaC1jb250cm9sbGVyLTAwZDkyZTg5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNPcHRpb25TZWxlY3RlZCwgYyBhcyBjb21wYXJlT3B0aW9ucyB9IGZyb20gJy4vY29tcGFyZS13aXRoLXV0aWxzLWE5NmZmMmVhLmpzJztcbmltcG9ydCB7IGggYXMgaW5oZXJpdEF0dHJpYnV0ZXMsIGQgYXMgcmVuZGVySGlkZGVuSW5wdXQsIGYgYXMgZm9jdXNWaXNpYmxlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBjIGFzIHBvcG92ZXJDb250cm9sbGVyLCBiIGFzIGFjdGlvblNoZWV0Q29udHJvbGxlciwgYSBhcyBhbGVydENvbnRyb2xsZXIsIG0gYXMgbW9kYWxDb250cm9sbGVyLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy00MWE1ZDUxYi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzUlRMIH0gZnJvbSAnLi9kaXItYmFiZWFiZWIuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMsIGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IHcgYXMgd2F0Y2hGb3JPcHRpb25zIH0gZnJvbSAnLi93YXRjaC1vcHRpb25zLWMyOTExYWNlLmpzJztcbmltcG9ydCB7IHcgYXMgY2hldnJvbkV4cGFuZCwgcSBhcyBjYXJldERvd25TaGFycCB9IGZyb20gJy4vaW5kZXgtZTJjZjJjZWIuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMnO1xuaW1wb3J0ICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmNvbnN0IHNlbGVjdElvc0NzcyA9IFwiOmhvc3R7LS1wYWRkaW5nLXRvcDowcHg7LS1wYWRkaW5nLWVuZDowcHg7LS1wYWRkaW5nLWJvdHRvbTowcHg7LS1wYWRkaW5nLXN0YXJ0OjBweDstLXBsYWNlaG9sZGVyLWNvbG9yOmN1cnJlbnRDb2xvcjstLXBsYWNlaG9sZGVyLW9wYWNpdHk6dmFyKC0taW9uLXBsYWNlaG9sZGVyLW9wYWNpdHksIDAuNik7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkNTViKTstLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNjNTAwMGYpOy0taGlnaGxpZ2h0LWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0NHB4O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZyksOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCl7bWluLWhlaWdodDo1NnB4fTpob3N0KC5pb24tY29sb3Ipey0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1pdGVtKXstbXMtZmxleDoxIDEgMHB4O2ZsZXg6MSAxIDB9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaW9uLWZvY3VzZWQpIGJ1dHRvbntib3JkZXI6MnB4IHNvbGlkICM1ZTllZDZ9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbDt3aWR0aDphdXRvfS5zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9YnV0dG9ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uc2VsZWN0LWljb257LXdlYmtpdC1tYXJnaW4tc3RhcnQ6NHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9Omhvc3QoLmluLWl0ZW0tY29sb3IpIC5zZWxlY3QtaWNvbntjb2xvcjppbmhlcml0fTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3QtaWNvbiw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlfTpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC1pY29uLDpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3QtaWNvbntyaWdodDp2YXIoLS1wYWRkaW5nLWVuZCwgMCl9Omhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LWljb24sOmhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC1pY29ue2xlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCwgMCl9LnNlbGVjdC10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxO21pbi13aWR0aDoxNnB4O2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6aW5oZXJpdDtvdmVyZmxvdzpoaWRkZW59LnNlbGVjdC13cmFwcGVyey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2hlaWdodDppbmhlcml0O21pbi1oZWlnaHQ6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDpub3JtYWw7Y3Vyc29yOmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVyey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LnNlbGVjdC13cmFwcGVyLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3Qtd3JhcHBlci1pbm5lciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC13cmFwcGVyLWlubmVyey1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9Omhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKXstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZCl9Omhvc3QoLmlvbi12YWxpZCl7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkKX0uc2VsZWN0LWJvdHRvbXstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLXRvcDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTtmb250LXNpemU6MC43NXJlbTt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3QoLmhhcy1mb2N1cy5pb24tdmFsaWQpLDpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCl7LS1ib3JkZXItY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX0uc2VsZWN0LWJvdHRvbSAuZXJyb3ItdGV4dHtkaXNwbGF5Om5vbmU7Y29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQpfS5zZWxlY3QtYm90dG9tIC5oZWxwZXItdGV4dHtkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTcwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zMDAsICM0ZDRkNGQpKX06aG9zdCguaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpIC5zZWxlY3QtYm90dG9tIC5lcnJvci10ZXh0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKSAuc2VsZWN0LWJvdHRvbSAuaGVscGVyLXRleHR7ZGlzcGxheTpub25lfS5sYWJlbC10ZXh0LXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXgtd2lkdGg6MjAwcHg7LXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpjb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246Y29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpjb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtwb2ludGVyLWV2ZW50czpub25lfS5sYWJlbC10ZXh0LDo6c2xvdHRlZChbc2xvdD1sYWJlbF0pe3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn0ubGFiZWwtdGV4dC13cmFwcGVyLWhpZGRlbiwuc2VsZWN0LW91dGxpbmUtbm90Y2gtaGlkZGVue2Rpc3BsYXk6bm9uZX0ubmF0aXZlLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO292ZXJmbG93OmhpZGRlbn06aG9zdCguc2VsZWN0LWp1c3RpZnktc3BhY2UtYmV0d2VlbikgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdCguc2VsZWN0LWp1c3RpZnktc3RhcnQpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpzdGFydH06aG9zdCguc2VsZWN0LWp1c3RpZnktZW5kKSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmVuZH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YXJ0KSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1lbmQpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZW5kKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZml4ZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LW1zLWZsZXg6MCAwIDEwMHB4O2ZsZXg6MCAwIDEwMHB4O3dpZHRoOjEwMHB4O21pbi13aWR0aDoxMDBweDttYXgtd2lkdGg6MjAwcHh9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6c3RhcnR9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnttYXgtd2lkdGg6MTAwJX06aG9zdCguc2VsZWN0LWx0ci5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH06aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5uYXRpdmUtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoxcHg7bWFyZ2luLWJvdHRvbTowOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7d2lkdGg6MTAwJX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDEpfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nOm5vdCgubGFiZWwtZmxvYXRpbmcpKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlcntvcGFjaXR5OjB9Omhvc3QoLnNlbGVjdC1leHBhbmRlZC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlciw6aG9zdCguaW9uLWZvY3VzZWQuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLm5hdGl2ZS13cmFwcGVyIC5zZWxlY3QtcGxhY2Vob2xkZXIsOmhvc3QoLmhhcy12YWx1ZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlcntvcGFjaXR5OjF9Omhvc3QoLmxhYmVsLWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgwLjc1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuNzUpO21heC13aWR0aDpjYWxjKDEwMCUgLyAwLjc1KX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKSw6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTo6c2xvdHRlZChbc2xvdD1zdGFydF06bGFzdC1vZi10eXBlKXstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowfTo6c2xvdHRlZChbc2xvdD1lbmRdOmZpcnN0LW9mLXR5cGUpey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9Omhvc3R7LS1ib3JkZXItd2lkdGg6MC41NXB4Oy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2M4YzdjYykpKSk7LS1oaWdobGlnaHQtaGVpZ2h0OjBweH0uc2VsZWN0LWljb257d2lkdGg6MS4xMjVyZW07aGVpZ2h0OjEuMTI1cmVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXItaW5uZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlci1pbm5lcnt3aWR0aDpjYWxjKDEwMCUgLSAxLjEyNXJlbSAtIDRweCl9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7b3BhY2l0eTowLjN9OjpzbG90dGVkKGlvbi1idXR0b25bc2xvdD1zdGFydF0uYnV0dG9uLWhhcy1pY29uLW9ubHkpLDo6c2xvdHRlZChpb24tYnV0dG9uW3Nsb3Q9ZW5kXS5idXR0b24taGFzLWljb24tb25seSl7LS1ib3JkZXItcmFkaXVzOjUwJTstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDthc3BlY3QtcmF0aW86MX1cIjtcbmNvbnN0IElvblNlbGVjdElvc1N0eWxlMCA9IHNlbGVjdElvc0NzcztcbmNvbnN0IHNlbGVjdE1kQ3NzID0gXCI6aG9zdHstLXBhZGRpbmctdG9wOjBweDstLXBhZGRpbmctZW5kOjBweDstLXBhZGRpbmctYm90dG9tOjBweDstLXBhZGRpbmctc3RhcnQ6MHB4Oy0tcGxhY2Vob2xkZXItY29sb3I6Y3VycmVudENvbG9yOy0tcGxhY2Vob2xkZXItb3BhY2l0eTp2YXIoLS1pb24tcGxhY2Vob2xkZXItb3BhY2l0eSwgMC42KTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQ1NWIpOy0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZik7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ0cHg7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoyfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKXttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLmlvbi1jb2xvcil7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLWl0ZW0pey1tcy1mbGV4OjEgMSAwcHg7ZmxleDoxIDEgMH06aG9zdCguc2VsZWN0LWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgYnV0dG9ue2JvcmRlcjoycHggc29saWQgIzVlOWVkNn06aG9zdChbc2xvdD1zdGFydF0pLDpob3N0KFtzbG90PWVuZF0pey1tcy1mbGV4OmluaXRpYWw7ZmxleDppbml0aWFsO3dpZHRoOmF1dG99LnNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX1idXR0b257cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7b3V0bGluZTowO2NsaXA6cmVjdCgwIDAgMCAwKTtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfS5zZWxlY3QtaWNvbnstd2Via2l0LW1hcmdpbi1zdGFydDo0cHg7bWFyZ2luLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH06aG9zdCguaW4taXRlbS1jb2xvcikgLnNlbGVjdC1pY29ue2NvbG9yOmluaGVyaXR9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC1pY29uLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAuc2VsZWN0LWljb257cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCV9Omhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LWljb24sOmhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC1pY29ue3JpZ2h0OnZhcigtLXBhZGRpbmctZW5kLCAwKX06aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3QtaWNvbiw6aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAuc2VsZWN0LWljb257bGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0LCAwKX0uc2VsZWN0LXRleHR7LW1zLWZsZXg6MTtmbGV4OjE7bWluLXdpZHRoOjE2cHg7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTppbmhlcml0O292ZXJmbG93OmhpZGRlbn0uc2VsZWN0LXdyYXBwZXJ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0Om5vcm1hbDtjdXJzb3I6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNlbGVjdC13cmFwcGVyIC5zZWxlY3QtcGxhY2Vob2xkZXJ7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX0uc2VsZWN0LXdyYXBwZXItaW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC13cmFwcGVyLWlubmVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAuc2VsZWN0LXdyYXBwZXItaW5uZXJ7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MX06aG9zdCguaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpey0taGlnaGxpZ2h0LWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkKX06aG9zdCguaW9uLXZhbGlkKXstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItdmFsaWQpfS5zZWxlY3QtYm90dG9tey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWJvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3JkZXItdG9wOnZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXN0eWxlKSB2YXIoLS1ib3JkZXItY29sb3IpO2ZvbnQtc2l6ZTowLjc1cmVtO3doaXRlLXNwYWNlOm5vcm1hbH06aG9zdCguaGFzLWZvY3VzLmlvbi12YWxpZCksOmhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKXstLWJvcmRlci1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtYm90dG9tIC5lcnJvci10ZXh0e2Rpc3BsYXk6bm9uZTtjb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZCl9LnNlbGVjdC1ib3R0b20gLmhlbHBlci10ZXh0e2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTMwMCwgIzRkNGQ0ZCkpfTpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLnNlbGVjdC1ib3R0b20gLmVycm9yLXRleHR7ZGlzcGxheTpibG9ja306aG9zdCguaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpIC5zZWxlY3QtYm90dG9tIC5oZWxwZXItdGV4dHtkaXNwbGF5Om5vbmV9LmxhYmVsLXRleHQtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21heC13aWR0aDoyMDBweDstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpjb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3BvaW50ZXItZXZlbnRzOm5vbmV9LmxhYmVsLXRleHQsOjpzbG90dGVkKFtzbG90PWxhYmVsXSl7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5sYWJlbC10ZXh0LXdyYXBwZXItaGlkZGVuLC5zZWxlY3Qtb3V0bGluZS1ub3RjaC1oaWRkZW57ZGlzcGxheTpub25lfS5uYXRpdmUtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5zZWxlY3QtanVzdGlmeS1zcGFjZS1iZXR3ZWVuKSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5zZWxlY3QtanVzdGlmeS1zdGFydCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OnN0YXJ0fTpob3N0KC5zZWxlY3QtanVzdGlmeS1lbmQpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YXJ0KSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWVuZCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4O21heC13aWR0aDoyMDBweH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpzdGFydH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVye21heC13aWR0aDoxMDAlfTpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWx0ci5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfTpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjFweDttYXJnaW4tYm90dG9tOjA7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTt3aWR0aDoxMDAlfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMSl9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmc6bm90KC5sYWJlbC1mbG9hdGluZykpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVye29wYWNpdHk6MH06aG9zdCguc2VsZWN0LWV4cGFuZGVkLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVyLDpob3N0KC5pb24tZm9jdXNlZC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlciw6aG9zdCguaGFzLXZhbHVlLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVye29wYWNpdHk6MX06aG9zdCgubGFiZWwtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuNzUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMC43NSk7bWF4LXdpZHRoOmNhbGMoMTAwJSAvIDAuNzUpfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pLDo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKFtzbG90PXN0YXJ0XTpsYXN0LW9mLXR5cGUpey13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjB9OjpzbG90dGVkKFtzbG90PWVuZF06Zmlyc3Qtb2YtdHlwZSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdCguc2VsZWN0LWZpbGwtc29saWQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MDAsIGdyYXkpKTstLWJvcmRlci1yYWRpdXM6NHB4Oy0tcGFkZGluZy1zdGFydDoxNnB4Oy0tcGFkZGluZy1lbmQ6MTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLnNlbGVjdC1maWxsLXNvbGlkKSAuc2VsZWN0LXdyYXBwZXJ7Ym9yZGVyLWJvdHRvbTp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKX06aG9zdCguaGFzLWZvY3VzLnNlbGVjdC1maWxsLXNvbGlkLmlvbi12YWxpZCksOmhvc3QoLnNlbGVjdC1maWxsLXNvbGlkLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKXstLWJvcmRlci1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfTpob3N0KC5zZWxlY3QtZmlsbC1zb2xpZCkgLnNlbGVjdC1ib3R0b217Ym9yZGVyLXRvcDpub25lfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoLnNlbGVjdC1maWxsLXNvbGlkOmhvdmVyKXstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTc1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC03NTAsICM0MDQwNDApKX19Omhvc3QoLnNlbGVjdC1maWxsLXNvbGlkLnNlbGVjdC1leHBhbmRlZCksOmhvc3QoLnNlbGVjdC1maWxsLXNvbGlkLmlvbi1mb2N1c2VkKXstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgI2Q5ZDlkOSkpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTc1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC03NTAsICM0MDQwNDApKX06aG9zdCguc2VsZWN0LWZpbGwtc29saWQpIC5zZWxlY3Qtd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1lbmQtZW5kLXJhZGl1czowcHg7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MHB4fTpob3N0KC5sYWJlbC1mbG9hdGluZy5zZWxlY3QtZmlsbC1zb2xpZCkgLmxhYmVsLXRleHQtd3JhcHBlcnttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNiM2IzYjMpKTstLWJvcmRlci1yYWRpdXM6NHB4Oy0tcGFkZGluZy1zdGFydDoxNnB4Oy0tcGFkZGluZy1lbmQ6MTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LXNoYXBlLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6MjhweDstLXBhZGRpbmctc3RhcnQ6MzJweDstLXBhZGRpbmctZW5kOjMycHh9Omhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtZmlsbC1vdXRsaW5lLmlvbi12YWxpZCksOmhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpey0tYm9yZGVyLWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTc1MCwgIzQwNDA0MCkpfX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtZXhwYW5kZWQpLDpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lLmlvbi1mb2N1c2VkKXstLWJvcmRlci13aWR0aDp2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KTstLWJvcmRlci1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LWJvdHRvbXtib3JkZXItdG9wOm5vbmV9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtd3JhcHBlcntib3JkZXItYm90dG9tOm5vbmV9Omhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfTpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO21heC13aWR0aDpjYWxjKDEwMCUgLSB2YXIoLS1wYWRkaW5nLXN0YXJ0KSAtIHZhcigtLXBhZGRpbmctZW5kKSl9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfTpob3N0KC5sYWJlbC1mbG9hdGluZy5zZWxlY3QtZmlsbC1vdXRsaW5lKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTMyJSkgc2NhbGUoMC43NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTMyJSkgc2NhbGUoMC43NSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21heC13aWR0aDpjYWxjKCgxMDAlIC0gdmFyKC0tcGFkZGluZy1zdGFydCkgLSB2YXIoLS1wYWRkaW5nLWVuZCkgLSA4cHgpIC8gMC43NSl9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSBzZWxlY3QsOmhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgc2VsZWN0e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo2cHg7bWFyZ2luLWJvdHRvbTo2cHh9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1jb250YWluZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLXN0YXJ0LDpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtZW5ke3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1zdGFydCw6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLW5vdGNoLDpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtZW5ke2JvcmRlci10b3A6dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWJvdHRvbTp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1ub3RjaHttYXgtd2lkdGg6Y2FsYygxMDAlIC0gdmFyKC0tcGFkZGluZy1zdGFydCkgLSB2YXIoLS1wYWRkaW5nLWVuZCkpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAubm90Y2gtc3BhY2Vyey13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7Zm9udC1zaXplOmNhbGMoMWVtICogMC43NSk7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1zdGFydHstd2Via2l0LWJvcmRlci1zdGFydDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItaW5saW5lLXN0YXJ0OnZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXN0eWxlKSB2YXIoLS1ib3JkZXItY29sb3IpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtc3RhcnR7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItc3RhcnQtZW5kLXJhZGl1czowcHg7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjBweDtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLXN0YXJ0e3dpZHRoOmNhbGModmFyKC0tcGFkZGluZy1zdGFydCkgLSA0cHgpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtZW5key13ZWJraXQtYm9yZGVyLWVuZDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItaW5saW5lLWVuZDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLWVuZHtib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjBweDtib3JkZXItc3RhcnQtZW5kLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItZW5kLWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MHB4fTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtZW5key1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9Omhvc3QoLmxhYmVsLWZsb2F0aW5nLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1ub3RjaHtib3JkZXItdG9wOm5vbmV9Omhvc3R7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7LS1oaWdobGlnaHQtaGVpZ2h0OjJweH0uc2VsZWN0LWljb257d2lkdGg6MC44MTI1cmVtOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTUwMCwgZ3JheSkpfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nLnNlbGVjdC1leHBhbmRlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZy5pb24tZm9jdXNlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnNlbGVjdC1leHBhbmRlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLmlvbi1mb2N1c2VkKSAubGFiZWwtdGV4dC13cmFwcGVye2NvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9Omhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nLmlvbi12YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZy5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguaGFzLWZvY3VzLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5pb24tdmFsaWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlcntjb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtaGlnaGxpZ2h0e2JvdHRvbTotMXB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWhpZ2hsaWdodC1oZWlnaHQpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjAwbXM7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyMDBtczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcywgLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXM7YmFja2dyb3VuZDp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtaGlnaGxpZ2h0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC5zZWxlY3QtZXhwYW5kZWQpIC5zZWxlY3QtaGlnaGxpZ2h0LDpob3N0KC5pb24tZm9jdXNlZCkgLnNlbGVjdC1oaWdobGlnaHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTpob3N0KC5pbi1pdGVtKSAuc2VsZWN0LWhpZ2hsaWdodHtib3R0b206MH06aG9zdCguaW4taXRlbSkgLnNlbGVjdC1oaWdobGlnaHR7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QoLnNlbGVjdC1leHBhbmRlZDpub3QoLmhhcy1leHBhbmRlZC1pY29uKSkgLnNlbGVjdC1pY29uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX06aG9zdCguc2VsZWN0LWV4cGFuZGVkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5oYXMtZm9jdXMuaW9uLXZhbGlkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QtaWNvbiw6aG9zdCguaW9uLWZvY3VzZWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb257Y29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX06aG9zdCguc2VsZWN0LXNoYXBlLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6MTZweH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXItaW5uZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlci1pbm5lcnt3aWR0aDpjYWxjKDEwMCUgLSAwLjgxMjVyZW0gLSA0cHgpfTpob3N0KC5zZWxlY3QtZGlzYWJsZWQpe29wYWNpdHk6MC4zOH06OnNsb3R0ZWQoaW9uLWJ1dHRvbltzbG90PXN0YXJ0XS5idXR0b24taGFzLWljb24tb25seSksOjpzbG90dGVkKGlvbi1idXR0b25bc2xvdD1lbmRdLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXstLWJvcmRlci1yYWRpdXM6NTAlOy0tcGFkZGluZy1zdGFydDo4cHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7YXNwZWN0LXJhdGlvOjE7bWluLWhlaWdodDo0MHB4fVwiO1xuY29uc3QgSW9uU2VsZWN0TWRTdHlsZTAgPSBzZWxlY3RNZENzcztcbmNvbnN0IFNlbGVjdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgIHRoaXMuaW9uRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWwtJHtzZWxlY3RJZHMrK31gO1xuICAgIHRoaXMuaGVscGVyVGV4dElkID0gYCR7dGhpcy5pbnB1dElkfS1oZWxwZXItdGV4dGA7XG4gICAgdGhpcy5lcnJvclRleHRJZCA9IGAke3RoaXMuaW5wdXRJZH0tZXJyb3ItdGV4dGA7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5vbkNsaWNrID0gZXYgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgY29uc3QgY2xvc2VzdFNsb3QgPSB0YXJnZXQuY2xvc2VzdCgnW3Nsb3Q9XCJzdGFydFwiXSwgW3Nsb3Q9XCJlbmRcIl0nKTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWwgfHwgY2xvc2VzdFNsb3QgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICB0aGlzLm9wZW4oZXYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZlbnQgY2xpY2tzIHRvIHRoZSBzdGFydC9lbmQgc2xvdHMgZnJvbSBvcGVuaW5nIHRoZSBzZWxlY3QuXG4gICAgICAgICAqIFdlIGVuc3VyZSB0aGUgdGFyZ2V0IGlzbid0IHRoaXMgZWxlbWVudCBpbiBjYXNlIHRoZSBzZWxlY3QgaXMgc2xvdHRlZFxuICAgICAgICAgKiBpbiwgZm9yIGV4YW1wbGUsIGFuIGl0ZW0uIFRoaXMgd291bGQgcHJldmVudCB0aGUgc2VsZWN0IGZyb20gZXZlclxuICAgICAgICAgKiBiZWluZyBvcGVuZWQgc2luY2UgdGhlIGVsZW1lbnQgaXRzZWxmIGhhcyBzbG90PVwic3RhcnRcIi9cImVuZFwiLlxuICAgICAgICAgKlxuICAgICAgICAgKiBDbGlja2luZyBhIHNsb3R0ZWQgZWxlbWVudCBhbHNvIGNhdXNlcyBhIGNsaWNrXG4gICAgICAgICAqIG9uIHRoZSA8bGFiZWw+IGVsZW1lbnQgKHNpbmNlIGl0IHdyYXBzIHRoZSBzbG90cykuXG4gICAgICAgICAqIENsaWNraW5nIDxsYWJlbD4gZGlzcGF0Y2hlcyBhbm90aGVyIGNsaWNrIGV2ZW50IG9uXG4gICAgICAgICAqIHRoZSBuYXRpdmUgZm9ybSBjb250cm9sIHRoYXQgdGhlbiBidWJibGVzIHVwIHRvIHRoaXNcbiAgICAgICAgICogbGlzdGVuZXIuIFRoaXMgYWRkaXRpb25hbCBldmVudCB0YXJnZXRzIHRoZSBob3N0XG4gICAgICAgICAqIGVsZW1lbnQsIHNvIHRoZSBzZWxlY3Qgb3ZlcmxheSBpcyBvcGVuZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gdGhlIHNsb3R0ZWQgZWxlbWVudHMgYXJlIGNsaWNrZWQgKGFuZCB0aGVyZWZvcmVcbiAgICAgICAgICogdGhlIGFuY2VzdG9yIDxsYWJlbD4gZWxlbWVudCkgd2Ugd2FudCB0byBwcmV2ZW50IHRoZSBsYWJlbFxuICAgICAgICAgKiBmcm9tIGRpc3BhdGNoaW5nIGFub3RoZXIgY2xpY2sgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIERvIG5vdCBjYWxsIHN0b3BQcm9wYWdhdGlvbigpIGJlY2F1c2UgdGhpcyB3aWxsIGNhdXNlXG4gICAgICAgICAqIGNsaWNrIGhhbmRsZXJzIG9uIHRoZSBzbG90dGVkIGVsZW1lbnRzIHRvIG5ldmVyIGZpcmUgaW4gUmVhY3QuXG4gICAgICAgICAqIFdoZW4gZGV2ZWxvcGVycyBkbyBvbkNsaWNrIGluIFJlYWN0IGEgbmF0aXZlIFwiY2xpY2tcIiBsaXN0ZW5lclxuICAgICAgICAgKiBpcyBhZGRlZCBvbiB0aGUgcm9vdCBlbGVtZW50LCBub3QgdGhlIHNsb3R0ZWQgZWxlbWVudC4gV2hlbiB0aGF0XG4gICAgICAgICAqIG5hdGl2ZSBjbGljayBsaXN0ZW5lciBmaXJlcywgUmVhY3QgdGhlbiBkaXNwYXRjaGVzIHRoZSBzeW50aGV0aWNcbiAgICAgICAgICogY2xpY2sgZXZlbnQgb24gdGhlIHNsb3R0ZWQgZWxlbWVudC4gSG93ZXZlciwgaWYgc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgICAqIGlzIGNhbGxlZCB0aGVuIHRoZSBuYXRpdmUgY2xpY2sgZXZlbnQgd2lsbCBuZXZlciBidWJibGUgdXBcbiAgICAgICAgICogdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdDYW5jZWwnO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb21wYXJlV2l0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWxsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXJyb3JUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVscGVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmludGVyZmFjZSA9ICdhbGVydCc7XG4gICAgdGhpcy5pbnRlcmZhY2VPcHRpb25zID0ge307XG4gICAgdGhpcy5qdXN0aWZ5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICB0aGlzLm9rVGV4dCA9ICdPSyc7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvZ2dsZUljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5leHBhbmRlZEljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFwZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgfVxuICBzdHlsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLm5vdGNoQ29udHJvbGxlciA9IGNyZWF0ZU5vdGNoQ29udHJvbGxlcihlbCwgKCkgPT4gdGhpcy5ub3RjaFNwYWNlckVsLCAoKSA9PiB0aGlzLmxhYmVsU2xvdCk7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgdGhpcy5tdXRhdGlvbk8gPSB3YXRjaEZvck9wdGlvbnModGhpcy5lbCwgJ2lvbi1zZWxlY3Qtb3B0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIHJlLXJlbmRlciB0aGUgY29tcG9uZW50XG4gICAgICAgKiBiZWNhdXNlIG9uZSBvZiB0aGUgbmV3IGlvbi1zZWxlY3Qtb3B0aW9uXG4gICAgICAgKiBlbGVtZW50cyBtYXkgbWF0Y2ggdGhlIHZhbHVlLiBJbiB0aGlzIGNhc2UsXG4gICAgICAgKiB0aGUgcmVuZGVyZWQgc2VsZWN0ZWQgdGV4dCBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICAgICAqL1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXModGhpcy5lbCwgWydhcmlhLWxhYmVsJ10pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgYW55IG9mIHRoZSBjb25kaXRpb25zIHRoYXQgdHJpZ2dlciB0aGUgc3R5bGVDaGFuZ2VkIGNhbGxiYWNrXG4gICAgICogYXJlIG1ldCBvbiBjb21wb25lbnQgbG9hZCwgaXQgaXMgcG9zc2libGUgdGhlIGV2ZW50IGVtaXR0ZWRcbiAgICAgKiBwcmlvciB0byBhIHBhcmVudCB3ZWIgY29tcG9uZW50IHJlZ2lzdGVyaW5nIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogVG8gZW5zdXJlIHRoZSBwYXJlbnQgd2ViIGNvbXBvbmVudCByZWNlaXZlcyB0aGUgZXZlbnQsIHdlXG4gICAgICogZW1pdCB0aGUgc3R5bGUgZXZlbnQgYWdhaW4gYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBvZnRlbiBzZWVuIGluIEFuZ3VsYXIgd2l0aCB0aGUgYGRpc3RgIG91dHB1dCB0YXJnZXQuXG4gICAgICovXG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5tdXRhdGlvbk8pIHtcbiAgICAgIHRoaXMubXV0YXRpb25PLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMubXV0YXRpb25PID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub3RjaENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMubm90Y2hDb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubm90Y2hDb250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogT3BlbiB0aGUgc2VsZWN0IG92ZXJsYXkuIFRoZSBvdmVybGF5IGlzIGVpdGhlciBhbiBhbGVydCwgYWN0aW9uIHNoZWV0LCBvciBwb3BvdmVyLFxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGBpbnRlcmZhY2VgIHByb3BlcnR5IG9uIHRoZSBgaW9uLXNlbGVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgdXNlciBpbnRlcmZhY2UgZXZlbnQgdGhhdCBjYWxsZWQgdGhlIG9wZW4uXG4gICAqL1xuICBhc3luYyBvcGVuKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXkgPSBhd2FpdCB0aGlzLmNyZWF0ZU92ZXJsYXkoZXZlbnQpO1xuICAgIC8vIEFkZCBsb2dpYyB0byBzY3JvbGwgc2VsZWN0ZWQgaXRlbSBpbnRvIHZpZXcgYmVmb3JlIHByZXNlbnRpbmdcbiAgICBjb25zdCBzY3JvbGxTZWxlY3RlZEludG9WaWV3ID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZlNlbGVjdGVkID0gdGhpcy5jaGlsZE9wdHMuZmluZEluZGV4KG8gPT4gby52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXhPZlNlbGVjdGVkID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0LWludGVyZmFjZS1vcHRpb246bnRoLWNoaWxkKCR7aW5kZXhPZlNlbGVjdGVkICsgMX0pYCk7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBCcm93c2VycyBzdWNoIGFzIEZpcmVmb3ggZG8gbm90XG4gICAgICAgICAgICogY29ycmVjdGx5IGRlbGVnYXRlIGZvY3VzIHdoZW4gbWFudWFsbHlcbiAgICAgICAgICAgKiBmb2N1c2luZyBhbiBlbGVtZW50IHdpdGggZGVsZWdhdGVzRm9jdXMuXG4gICAgICAgICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBmb2N1c2luZ1xuICAgICAgICAgICAqIHRoZSBpbnRlcmFjdGl2ZSBlbGVtZW50LlxuICAgICAgICAgICAqIGlvbi1yYWRpbyBhbmQgaW9uLWNoZWNrYm94IGFyZSB0aGUgb25seVxuICAgICAgICAgICAqIGVsZW1lbnRzIHRoYXQgaW9uLXNlbGVjdC1wb3BvdmVyIHVzZXMsIHNvXG4gICAgICAgICAgICogd2Ugb25seSBuZWVkIHRvIHdvcnJ5IGFib3V0IHRob3NlIHR3byBjb21wb25lbnRzXG4gICAgICAgICAgICogd2hlbiBmb2N1c2luZy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBpbnRlcmFjdGl2ZUVsID0gc2VsZWN0ZWRJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yYWRpbywgaW9uLWNoZWNrYm94Jyk7XG4gICAgICAgICAgaWYgKGludGVyYWN0aXZlRWwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZSBgZm9jdXNWaXNpYmxlRWxlbWVudGAgdG8gcHJldmVudCBpc3N1ZSB3aXRoIGZvY3VzIGV2ZW50IGJ1YmJsaW5nXG4gICAgICAgICAgICAvLyBhbmQgcmVtb3ZpbmcgYGlvbi1mb2N1c2VkYCBzdHlsZVxuICAgICAgICAgICAgaW50ZXJhY3RpdmVFbC5zZXRGb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb2N1c1Zpc2libGVFbGVtZW50KHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBubyB2YWx1ZSBpcyBzZXQgdGhlbiBmb2N1cyB0aGUgZmlyc3QgZW5hYmxlZCBvcHRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBmaXJzdEVuYWJsZWRPcHRpb24gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yYWRpbzpub3QoLnJhZGlvLWRpc2FibGVkKSwgaW9uLWNoZWNrYm94Om5vdCguY2hlY2tib3gtZGlzYWJsZWQpJyk7XG4gICAgICAgIGlmIChmaXJzdEVuYWJsZWRPcHRpb24pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGb2N1cyB0aGUgb3B0aW9uIGZvciB0aGUgc2FtZSByZWFzb24gYXMgd2UgZG8gYWJvdmUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBOZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlIGBmb2N1c1Zpc2libGVFbGVtZW50YCB0byBwcmV2ZW50IGlzc3VlIHdpdGggZm9jdXMgZXZlbnQgYnViYmxpbmdcbiAgICAgICAgICAgKiBhbmQgcmVtb3ZpbmcgYGlvbi1mb2N1c2VkYCBzdHlsZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGZpcnN0RW5hYmxlZE9wdGlvbi5zZXRGb2N1cygpO1xuICAgICAgICAgIGZvY3VzVmlzaWJsZUVsZW1lbnQoZmlyc3RFbmFibGVkT3B0aW9uLmNsb3Nlc3QoJ2lvbi1pdGVtJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBGb3IgbW9kYWxzIGFuZCBwb3BvdmVycywgd2UgY2FuIHNjcm9sbCBiZWZvcmUgdGhleSdyZSB2aXNpYmxlXG4gICAgaWYgKHRoaXMuaW50ZXJmYWNlID09PSAnbW9kYWwnKSB7XG4gICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbk1vZGFsV2lsbFByZXNlbnQnLCBzY3JvbGxTZWxlY3RlZEludG9WaWV3LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbnRlcmZhY2UgPT09ICdwb3BvdmVyJykge1xuICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdpb25Qb3BvdmVyV2lsbFByZXNlbnQnLCBzY3JvbGxTZWxlY3RlZEludG9WaWV3LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBhbGVydHMgYW5kIGFjdGlvbiBzaGVldHMsIHdlIG5lZWQgdG8gd2FpdCBhIGZyYW1lIGFmdGVyIHdpbGxQcmVzZW50XG4gICAgICAgKiBiZWNhdXNlIHRoZXNlIG92ZXJsYXlzIGRvbid0IGhhdmUgdGhlaXIgY29udGVudCBpbiB0aGUgRE9NIGltbWVkaWF0ZWx5XG4gICAgICAgKiB3aGVuIHdpbGxQcmVzZW50IGZpcmVzLiBCeSB3YWl0aW5nIGEgZnJhbWUsIHdlIGVuc3VyZSB0aGUgY29udGVudCBpc1xuICAgICAgICogcmVuZGVyZWQgYW5kIGNhbiBiZSBwcm9wZXJseSBzY3JvbGxlZCBpbnRvIHZpZXcuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHNjcm9sbEFmdGVyUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuaW50ZXJmYWNlID09PSAnYWxlcnQnKSB7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW9uQWxlcnRXaWxsUHJlc2VudCcsIHNjcm9sbEFmdGVyUmVuZGVyLCB7XG4gICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnRlcmZhY2UgPT09ICdhY3Rpb24tc2hlZXQnKSB7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW9uQWN0aW9uU2hlZXRXaWxsUHJlc2VudCcsIHNjcm9sbEFmdGVyUmVuZGVyLCB7XG4gICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3ZlcmxheS5vbkRpZERpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pb25EaXNtaXNzLmVtaXQoKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9KTtcbiAgICBhd2FpdCBvdmVybGF5LnByZXNlbnQoKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuICBjcmVhdGVPdmVybGF5KGV2KSB7XG4gICAgbGV0IHNlbGVjdEludGVyZmFjZSA9IHRoaXMuaW50ZXJmYWNlO1xuICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdhY3Rpb24tc2hlZXQnICYmIHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgU2VsZWN0IGludGVyZmFjZSBjYW5ub3QgYmUgXCIke3NlbGVjdEludGVyZmFjZX1cIiB3aXRoIGEgbXVsdGktdmFsdWUgc2VsZWN0LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLmApO1xuICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICB9XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ3BvcG92ZXInICYmICFldikge1xuICAgICAgY29uc29sZS53YXJuKGBTZWxlY3QgaW50ZXJmYWNlIGNhbm5vdCBiZSBhIFwiJHtzZWxlY3RJbnRlcmZhY2V9XCIgd2l0aG91dCBwYXNzaW5nIGFuIGV2ZW50LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLmApO1xuICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICB9XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5BY3Rpb25TaGVldCgpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5Qb3BvdmVyKGV2KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ21vZGFsJykge1xuICAgICAgcmV0dXJuIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wZW5BbGVydCgpO1xuICB9XG4gIHVwZGF0ZU92ZXJsYXlPcHRpb25zKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHRoaXMuY2hpbGRPcHRzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBzd2l0Y2ggKHRoaXMuaW50ZXJmYWNlKSB7XG4gICAgICBjYXNlICdhY3Rpb24tc2hlZXQnOlxuICAgICAgICBvdmVybGF5LmJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyhjaGlsZE9wdHMsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwb3BvdmVyJzpcbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignaW9uLXNlbGVjdC1wb3BvdmVyJyk7XG4gICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgcG9wb3Zlci5vcHRpb25zID0gdGhpcy5jcmVhdGVPdmVybGF5U2VsZWN0T3B0aW9ucyhjaGlsZE9wdHMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vZGFsJzpcbiAgICAgICAgY29uc3QgbW9kYWwgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1zZWxlY3QtbW9kYWwnKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWwub3B0aW9ucyA9IHRoaXMuY3JlYXRlT3ZlcmxheVNlbGVjdE9wdGlvbnMoY2hpbGRPcHRzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICAgICAgb3ZlcmxheS5pbnB1dHMgPSB0aGlzLmNyZWF0ZUFsZXJ0SW5wdXRzKGNoaWxkT3B0cywgaW5wdXRUeXBlLCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjcmVhdGVBY3Rpb25TaGVldEJ1dHRvbnMoZGF0YSwgc2VsZWN0VmFsdWUpIHtcbiAgICBjb25zdCBhY3Rpb25TaGVldEJ1dHRvbnMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9sZTogaXNPcHRpb25TZWxlY3RlZChzZWxlY3RWYWx1ZSwgdmFsdWUsIHRoaXMuY29tcGFyZVdpdGgpID8gJ3NlbGVjdGVkJyA6ICcnLFxuICAgICAgICB0ZXh0OiBvcHRpb24udGV4dENvbnRlbnQsXG4gICAgICAgIGNzc0NsYXNzOiBvcHRDbGFzcyxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8vIEFkZCBcImNhbmNlbFwiIGJ1dHRvblxuICAgIGFjdGlvblNoZWV0QnV0dG9ucy5wdXNoKHtcbiAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGlvblNoZWV0QnV0dG9ucztcbiAgfVxuICBjcmVhdGVBbGVydElucHV0cyhkYXRhLCBpbnB1dFR5cGUsIHNlbGVjdFZhbHVlKSB7XG4gICAgY29uc3QgYWxlcnRJbnB1dHMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlLFxuICAgICAgICBjc3NDbGFzczogb3B0Q2xhc3MsXG4gICAgICAgIGxhYmVsOiBvcHRpb24udGV4dENvbnRlbnQgfHwgJycsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjaGVja2VkOiBpc09wdGlvblNlbGVjdGVkKHNlbGVjdFZhbHVlLCB2YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCksXG4gICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWRcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsZXJ0SW5wdXRzO1xuICB9XG4gIGNyZWF0ZU92ZXJsYXlTZWxlY3RPcHRpb25zKGRhdGEsIHNlbGVjdFZhbHVlKSB7XG4gICAgY29uc3QgcG9wb3Zlck9wdGlvbnMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHRDb250ZW50IHx8ICcnLFxuICAgICAgICBjc3NDbGFzczogb3B0Q2xhc3MsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjaGVja2VkOiBpc09wdGlvblNlbGVjdGVkKHNlbGVjdFZhbHVlLCB2YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCksXG4gICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICAgIGhhbmRsZXI6IHNlbGVjdGVkID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdGVkKTtcbiAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvcG92ZXJPcHRpb25zO1xuICB9XG4gIGFzeW5jIG9wZW5Qb3BvdmVyKGV2KSB7XG4gICAgY29uc3Qge1xuICAgICAgZmlsbCxcbiAgICAgIGxhYmVsUGxhY2VtZW50XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaG93QmFja2Ryb3AgPSBtb2RlID09PSAnbWQnID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5tdWx0aXBsZTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gZXY7XG4gICAgbGV0IHNpemUgPSAnYXV0byc7XG4gICAgY29uc3QgaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCA9IGxhYmVsUGxhY2VtZW50ID09PSAnZmxvYXRpbmcnIHx8IGxhYmVsUGxhY2VtZW50ID09PSAnc3RhY2tlZCc7XG4gICAgLyoqXG4gICAgICogVGhlIHBvcG92ZXIgc2hvdWxkIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGhcbiAgICAgKiB3aGVuIHVzaW5nIGEgZmlsbCBpbiBNRCBtb2RlIG9yIGlmIHRoZVxuICAgICAqIGxhYmVsIGlzIGZsb2F0aW5nL3N0YWNrZWQuXG4gICAgICovXG4gICAgaWYgKGhhc0Zsb2F0aW5nT3JTdGFja2VkTGFiZWwgfHwgbW9kZSA9PT0gJ21kJyAmJiBmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpemUgPSAnY292ZXInO1xuICAgICAgLyoqXG4gICAgICAgKiBPdGhlcndpc2UgdGhlIHBvcG92ZXJcbiAgICAgICAqIHNob3VsZCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlXG4gICAgICAgKiB0byB0aGUgbmF0aXZlIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV2KSwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IHRoaXMubmF0aXZlV3JhcHBlckVsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwb3BvdmVyT3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBtb2RlLFxuICAgICAgZXZlbnQsXG4gICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgc2l6ZSxcbiAgICAgIHNob3dCYWNrZHJvcFxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBjb21wb25lbnQ6ICdpb24tc2VsZWN0LXBvcG92ZXInLFxuICAgICAgY3NzQ2xhc3M6IFsnc2VsZWN0LXBvcG92ZXInLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzXSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIsXG4gICAgICAgIHN1YkhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5zdWJIZWFkZXIsXG4gICAgICAgIG1lc3NhZ2U6IGludGVyZmFjZU9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZU92ZXJsYXlTZWxlY3RPcHRpb25zKHRoaXMuY2hpbGRPcHRzLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHBvcG92ZXJPcHRzKTtcbiAgfVxuICBhc3luYyBvcGVuQWN0aW9uU2hlZXQoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICBjb25zdCBhY3Rpb25TaGVldE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbW9kZVxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBidXR0b25zOiB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyh0aGlzLmNoaWxkT3B0cywgdGhpcy52YWx1ZSksXG4gICAgICBjc3NDbGFzczogWydzZWxlY3QtYWN0aW9uLXNoZWV0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc11cbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aW9uU2hlZXRDb250cm9sbGVyLmNyZWF0ZShhY3Rpb25TaGVldE9wdHMpO1xuICB9XG4gIGFzeW5jIG9wZW5BbGVydCgpIHtcbiAgICBjb25zdCBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBhbGVydE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbW9kZVxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBoZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyID8gaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIgOiB0aGlzLmxhYmVsVGV4dCxcbiAgICAgIGlucHV0czogdGhpcy5jcmVhdGVBbGVydElucHV0cyh0aGlzLmNoaWxkT3B0cywgaW5wdXRUeXBlLCB0aGlzLnZhbHVlKSxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogdGhpcy5va1RleHQsXG4gICAgICAgIGhhbmRsZXI6IHNlbGVjdGVkVmFsdWVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdGVkVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBjc3NDbGFzczogWydzZWxlY3QtYWxlcnQnLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzLCB0aGlzLm11bHRpcGxlID8gJ211bHRpcGxlLXNlbGVjdC1hbGVydCcgOiAnc2luZ2xlLXNlbGVjdC1hbGVydCddXG4gICAgfSk7XG4gICAgcmV0dXJuIGFsZXJ0Q29udHJvbGxlci5jcmVhdGUoYWxlcnRPcHRzKTtcbiAgfVxuICBvcGVuTW9kYWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbXVsdGlwbGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGludGVyZmFjZU9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBtb2RhbE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBtb2RlLFxuICAgICAgY3NzQ2xhc3M6IFsnc2VsZWN0LW1vZGFsJywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10sXG4gICAgICBjb21wb25lbnQ6ICdpb24tc2VsZWN0LW1vZGFsJyxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIsXG4gICAgICAgIG11bHRpcGxlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5jcmVhdGVPdmVybGF5U2VsZWN0T3B0aW9ucyh0aGlzLmNoaWxkT3B0cywgdmFsdWUpXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRzKTtcbiAgfVxuICAvKipcbiAgICogQ2xvc2UgdGhlIHNlbGVjdCBpbnRlcmZhY2UuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuZGlzbWlzcygpO1xuICB9XG4gIGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRleHQoKSAhPT0gJyc7XG4gIH1cbiAgZ2V0IGNoaWxkT3B0cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWxlY3Qtb3B0aW9uJykpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFueSBwbGFpbnRleHQgYXNzb2NpYXRlZCB3aXRoXG4gICAqIHRoZSBsYWJlbCAoZWl0aGVyIHByb3Agb3Igc2xvdCkuXG4gICAqIE5vdGU6IFRoaXMgd2lsbCBub3QgcmV0dXJuIGFueSBjdXN0b21cbiAgICogSFRNTC4gVXNlIHRoZSBgaGFzTGFiZWxgIGdldHRlciBpZiB5b3VcbiAgICogd2FudCB0byBrbm93IGlmIGFueSBzbG90dGVkIGxhYmVsIGNvbnRlbnRcbiAgICogd2FzIHBhc3NlZC5cbiAgICovXG4gIGdldCBsYWJlbFRleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBsYWJlbFNsb3RcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobGFiZWxTbG90ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbGFiZWxTbG90LnRleHRDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRleHQgPSB0aGlzLnNlbGVjdGVkVGV4dDtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0ICE9IG51bGwgJiYgc2VsZWN0ZWRUZXh0ICE9PSAnJykge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlVGV4dCh0aGlzLmNoaWxkT3B0cywgdGhpcy52YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCk7XG4gIH1cbiAgc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNFbCkge1xuICAgICAgdGhpcy5mb2N1c0VsLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGVtaXRTdHlsZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogZGlzYWJsZWRcbiAgICB9O1xuICAgIHRoaXMuaW9uU3R5bGUuZW1pdChzdHlsZSk7XG4gIH1cbiAgcmVuZGVyTGFiZWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWxcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAnbGFiZWwtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4nOiAhdGhpcy5oYXNMYWJlbFxuICAgICAgfSxcbiAgICAgIHBhcnQ6IFwibGFiZWxcIlxuICAgIH0sIGxhYmVsID09PSB1bmRlZmluZWQgPyBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImxhYmVsXCJcbiAgICB9KSA6IGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibGFiZWwtdGV4dFwiXG4gICAgfSwgbGFiZWwpKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMubm90Y2hDb250cm9sbGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsY3VsYXRlTm90Y2hXaWR0aCgpO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIGFueSBjb250ZW50IHBhc3NlZCBpbnRvIHRoZSBgbGFiZWxgIHNsb3QsXG4gICAqIG5vdCB0aGUgPHNsb3Q+IGRlZmluaXRpb24uXG4gICAqL1xuICBnZXQgbGFiZWxTbG90KCkge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwibGFiZWxcIl0nKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgbGFiZWwgY29udGVudCBpcyBwcm92aWRlZFxuICAgKiBlaXRoZXIgYnkgYSBwcm9wIG9yIGEgY29udGVudC4gSWYgeW91IHdhbnRcbiAgICogdG8gZ2V0IHRoZSBwbGFpbnRleHQgdmFsdWUgb2YgdGhlIGxhYmVsIHVzZVxuICAgKiB0aGUgYGxhYmVsVGV4dGAgZ2V0dGVyIGluc3RlYWQuXG4gICAqL1xuICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmxhYmVsU2xvdCAhPT0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYm9yZGVyIGNvbnRhaW5lclxuICAgKiB3aGVuIGZpbGw9XCJvdXRsaW5lXCIuXG4gICAqL1xuICByZW5kZXJMYWJlbENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoYXNPdXRsaW5lRmlsbCA9IG1vZGUgPT09ICdtZCcgJiYgdGhpcy5maWxsID09PSAnb3V0bGluZSc7XG4gICAgaWYgKGhhc091dGxpbmVGaWxsKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvdXRsaW5lIGZpbGwgaGFzIGEgc3BlY2lhbCBvdXRsaW5lXG4gICAgICAgKiB0aGF0IGFwcGVhcnMgYXJvdW5kIHRoZSBzZWxlY3QgYW5kIHRoZSBsYWJlbC5cbiAgICAgICAqIENlcnRhaW4gc3RhY2tlZCBhbmQgZmxvYXRpbmcgbGFiZWwgcGxhY2VtZW50cyBjYXVzZSB0aGVcbiAgICAgICAqIGxhYmVsIHRvIHRyYW5zbGF0ZSB1cCBhbmQgY3JlYXRlIGEgXCJjdXQgb3V0XCJcbiAgICAgICAqIGluc2lkZSBvZiB0aGF0IGJvcmRlciBieSB1c2luZyB0aGUgbm90Y2gtc3BhY2VyIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBbaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInNlbGVjdC1vdXRsaW5lLWNvbnRhaW5lclwiXG4gICAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwic2VsZWN0LW91dGxpbmUtc3RhcnRcIlxuICAgICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICdzZWxlY3Qtb3V0bGluZS1ub3RjaCc6IHRydWUsXG4gICAgICAgICAgJ3NlbGVjdC1vdXRsaW5lLW5vdGNoLWhpZGRlbic6ICF0aGlzLmhhc0xhYmVsXG4gICAgICAgIH1cbiAgICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJub3RjaC1zcGFjZXJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgcmVmOiBlbCA9PiB0aGlzLm5vdGNoU3BhY2VyRWwgPSBlbFxuICAgICAgfSwgdGhpcy5sYWJlbCkpLCBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwic2VsZWN0LW91dGxpbmUtZW5kXCJcbiAgICAgIH0pKSwgdGhpcy5yZW5kZXJMYWJlbCgpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgbm90IHVzaW5nIHRoZSBvdXRsaW5lIHN0eWxlLFxuICAgICAqIHdlIGNhbiByZW5kZXIganVzdCB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGFiZWwoKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyBlaXRoZXIgdGhlIHBsYWNlaG9sZGVyXG4gICAqIG9yIHRoZSBzZWxlY3RlZCB2YWx1ZXMgYmFzZWQgb25cbiAgICogdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3QuXG4gICAqL1xuICByZW5kZXJTZWxlY3RUZXh0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBsYWNlaG9sZGVyXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgbGV0IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSBmYWxzZTtcbiAgICBsZXQgc2VsZWN0VGV4dCA9IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoc2VsZWN0VGV4dCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0VGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdFRleHRDbGFzc2VzID0ge1xuICAgICAgJ3NlbGVjdC10ZXh0JzogdHJ1ZSxcbiAgICAgICdzZWxlY3QtcGxhY2Vob2xkZXInOiBhZGRQbGFjZWhvbGRlckNsYXNzXG4gICAgfTtcbiAgICBjb25zdCB0ZXh0UGFydCA9IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPyAncGxhY2Vob2xkZXInIDogJ3RleHQnO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBjbGFzczogc2VsZWN0VGV4dENsYXNzZXMsXG4gICAgICBwYXJ0OiB0ZXh0UGFydFxuICAgIH0sIHNlbGVjdFRleHQpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjaGV2cm9uIGljb25cbiAgICogbmV4dCB0byB0aGUgc2VsZWN0IHRleHQuXG4gICAqL1xuICByZW5kZXJTZWxlY3RJY29uKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGlzRXhwYW5kZWQsXG4gICAgICB0b2dnbGVJY29uLFxuICAgICAgZXhwYW5kZWRJY29uXG4gICAgfSA9IHRoaXM7XG4gICAgbGV0IGljb247XG4gICAgaWYgKGlzRXhwYW5kZWQgJiYgZXhwYW5kZWRJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGljb24gPSBleHBhbmRlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRJY29uID0gbW9kZSA9PT0gJ2lvcycgPyBjaGV2cm9uRXhwYW5kIDogY2FyZXREb3duU2hhcnA7XG4gICAgICBpY29uID0gdG9nZ2xlSWNvbiAhPT0gbnVsbCAmJiB0b2dnbGVJY29uICE9PSB2b2lkIDAgPyB0b2dnbGVJY29uIDogZGVmYXVsdEljb247XG4gICAgfVxuICAgIHJldHVybiBoKFwiaW9uLWljb25cIiwge1xuICAgICAgY2xhc3M6IFwic2VsZWN0LWljb25cIixcbiAgICAgIHBhcnQ6IFwiaWNvblwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGljb246IGljb25cbiAgICB9KTtcbiAgfVxuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmdldFRleHQoKTtcbiAgICAvLyBUaGUgYXJpYSBsYWJlbCBzaG91bGQgYmUgcHJlZmVycmVkIG92ZXIgdmlzaWJsZSB0ZXh0IGlmIGJvdGggYXJlIHNwZWNpZmllZFxuICAgIGNvbnN0IGRlZmluZWRMYWJlbCA9IChfYSA9IGluaGVyaXRlZEF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWwnXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5sYWJlbFRleHQ7XG4gICAgLyoqXG4gICAgICogSWYgZGV2ZWxvcGVyIGhhcyBzcGVjaWZpZWQgYSBwbGFjZWhvbGRlclxuICAgICAqIGFuZCB0aGVyZSBpcyBub3RoaW5nIHNlbGVjdGVkLCB0aGUgc2VsZWN0VGV4dFxuICAgICAqIHNob3VsZCBoYXZlIHRoZSBwbGFjZWhvbGRlciB2YWx1ZS5cbiAgICAgKi9cbiAgICBsZXQgcmVuZGVyZWRMYWJlbCA9IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAocmVuZGVyZWRMYWJlbCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVuZGVyZWRMYWJlbCA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBhIGRldmVsb3Blci1kZWZpbmVkIGxhYmVsLFxuICAgICAqIHRoZW4gd2UgbmVlZCB0byBjb25jYXRlbmF0ZSB0aGUgZGV2ZWxvcGVyIGxhYmVsXG4gICAgICogc3RyaW5nIHdpdGggdGhlIGN1cnJlbnQgY3VycmVudCB2YWx1ZS5cbiAgICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBjb250cm9sIHNob3VsZCBiZSByZWFkXG4gICAgICogYmVmb3JlIHRoZSB2YWx1ZXMgb2YgdGhlIGNvbnRyb2wuXG4gICAgICovXG4gICAgaWYgKGRlZmluZWRMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW5kZXJlZExhYmVsID0gcmVuZGVyZWRMYWJlbCA9PT0gJycgPyBkZWZpbmVkTGFiZWwgOiBgJHtkZWZpbmVkTGFiZWx9LCAke3JlbmRlcmVkTGFiZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlcmVkTGFiZWw7XG4gIH1cbiAgcmVuZGVyTGlzdGJveCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlucHV0SWQsXG4gICAgICBpc0V4cGFuZGVkLFxuICAgICAgcmVxdWlyZWRcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gaChcImJ1dHRvblwiLCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBpZDogaW5wdXRJZCxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImRpYWxvZ1wiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IGAke2lzRXhwYW5kZWR9YCxcbiAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiB0aGlzLmdldEhpbnRUZXh0SUQoKSxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IHRoaXMuZ2V0SGludFRleHRJRCgpID09PSB0aGlzLmVycm9yVGV4dElkLFxuICAgICAgXCJhcmlhLXJlcXVpcmVkXCI6IGAke3JlcXVpcmVkfWAsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgcmVmOiBmb2N1c0VsID0+IHRoaXMuZm9jdXNFbCA9IGZvY3VzRWxcbiAgICB9KTtcbiAgfVxuICBnZXRIaW50VGV4dElEKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaGVscGVyVGV4dCxcbiAgICAgIGVycm9yVGV4dCxcbiAgICAgIGhlbHBlclRleHRJZCxcbiAgICAgIGVycm9yVGV4dElkXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLXRvdWNoZWQnKSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1pbnZhbGlkJykgJiYgZXJyb3JUZXh0KSB7XG4gICAgICByZXR1cm4gZXJyb3JUZXh0SWQ7XG4gICAgfVxuICAgIGlmIChoZWxwZXJUZXh0KSB7XG4gICAgICByZXR1cm4gaGVscGVyVGV4dElkO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBoZWxwZXIgdGV4dCBvciBlcnJvciB0ZXh0IHZhbHVlc1xuICAgKi9cbiAgcmVuZGVySGludFRleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVscGVyVGV4dCxcbiAgICAgIGVycm9yVGV4dCxcbiAgICAgIGhlbHBlclRleHRJZCxcbiAgICAgIGVycm9yVGV4dElkXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIFtoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBoZWxwZXJUZXh0SWQsXG4gICAgICBjbGFzczogXCJoZWxwZXItdGV4dFwiLFxuICAgICAgcGFydDogXCJzdXBwb3J0aW5nLXRleHQgaGVscGVyLXRleHRcIlxuICAgIH0sIGhlbHBlclRleHQpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBlcnJvclRleHRJZCxcbiAgICAgIGNsYXNzOiBcImVycm9yLXRleHRcIixcbiAgICAgIHBhcnQ6IFwic3VwcG9ydGluZy10ZXh0IGVycm9yLXRleHRcIlxuICAgIH0sIGVycm9yVGV4dCldO1xuICB9XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGhlbHBlciB0ZXh0LCBhbmQgZXJyb3IgdGV4dC4gVGhpcyBlbGVtZW50XG4gICAqIHNob3VsZCBvbmx5IGJlIHJlbmRlcmVkIGlmIGhpbnQgdGV4dCBpcyBzZXQuXG4gICAqL1xuICByZW5kZXJCb3R0b21Db250ZW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlbHBlclRleHQsXG4gICAgICBlcnJvclRleHRcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiB1bmRlZmluZWQgYW5kIGVtcHR5IHN0cmluZyB2YWx1ZXMgc2hvdWxkXG4gICAgICogYmUgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGhlbHBlci9lcnJvciB0ZXh0LlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0hpbnRUZXh0ID0gISFoZWxwZXJUZXh0IHx8ICEhZXJyb3JUZXh0O1xuICAgIGlmICghaGFzSGludFRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwic2VsZWN0LWJvdHRvbVwiXG4gICAgfSwgdGhpcy5yZW5kZXJIaW50VGV4dCgpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIGlzRXhwYW5kZWQsXG4gICAgICBleHBhbmRlZEljb24sXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIGp1c3RpZnksXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGZpbGwsXG4gICAgICBzaGFwZSxcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGhhc0Zsb2F0aW5nT3JTdGFja2VkTGFiZWwgPSBsYWJlbFBsYWNlbWVudCA9PT0gJ2Zsb2F0aW5nJyB8fCBsYWJlbFBsYWNlbWVudCA9PT0gJ3N0YWNrZWQnO1xuICAgIGNvbnN0IGp1c3RpZnlFbmFibGVkID0gIWhhc0Zsb2F0aW5nT3JTdGFja2VkTGFiZWwgJiYganVzdGlmeSAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHJ0bCA9IGlzUlRMKGVsKSA/ICdydGwnIDogJ2x0cic7XG4gICAgY29uc3QgaW5JdGVtID0gaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgdGhpcy5lbCk7XG4gICAgY29uc3Qgc2hvdWxkUmVuZGVySGlnaGxpZ2h0ID0gbW9kZSA9PT0gJ21kJyAmJiBmaWxsICE9PSAnb3V0bGluZScgJiYgIWluSXRlbTtcbiAgICBjb25zdCBoYXNWYWx1ZSA9IHRoaXMuaGFzVmFsdWUoKTtcbiAgICBjb25zdCBoYXNTdGFydEVuZFNsb3RzID0gZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJzdGFydFwiXSwgW3Nsb3Q9XCJlbmRcIl0nKSAhPT0gbnVsbDtcbiAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgbmFtZSwgcGFyc2VWYWx1ZSh2YWx1ZSksIGRpc2FibGVkKTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbGFiZWwgaXMgc3RhY2tlZCwgaXQgc2hvdWxkIGFsd2F5cyBzaXQgYWJvdmUgdGhlIHNlbGVjdC5cbiAgICAgKiBGb3IgZmxvYXRpbmcgbGFiZWxzLCB0aGUgbGFiZWwgc2hvdWxkIG1vdmUgYWJvdmUgdGhlIHNlbGVjdCBpZlxuICAgICAqIHRoZSBzZWxlY3QgaGFzIGEgdmFsdWUsIGlzIG9wZW4sIG9yIGhhcyBhbnl0aGluZyBpbiBlaXRoZXJcbiAgICAgKiB0aGUgc3RhcnQgb3IgZW5kIHNsb3QuXG4gICAgICpcbiAgICAgKiBJZiB0aGVyZSBpcyBjb250ZW50IGluIHRoZSBzdGFydCBzbG90LCB0aGUgbGFiZWwgd291bGQgb3ZlcmxhcFxuICAgICAqIGl0IGlmIG5vdCBmb3JjZWQgdG8gZmxvYXQuIFRoaXMgaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBlbmQgc2xvdFxuICAgICAqIGJlY2F1c2Ugd2l0aCB0aGUgZGVmYXVsdCBvciBzb2xpZCBmaWxscywgdGhlIHNlbGVjdCBpcyBub3RcbiAgICAgKiB2ZXJ0aWNhbGx5IGNlbnRlcmVkIGluIHRoZSBjb250YWluZXIsIGJ1dCB0aGUgbGFiZWwgaXMuIFRoaXNcbiAgICAgKiBjYXVzZXMgdGhlIHNsb3RzIGFuZCBsYWJlbCB0byBhcHBlYXIgdmVydGljYWxseSBvZmZzZXQgZnJvbSBlYWNoXG4gICAgICogb3RoZXIgd2hlbiB0aGUgbGFiZWwgaXNuJ3QgZmxvYXRpbmcgYWJvdmUgdGhlIGlucHV0LiBUaGlzIGRvZXNuJ3RcbiAgICAgKiBhcHBseSB0byB0aGUgb3V0bGluZSBmaWxsLCBidXQgdGhpcyB3YXMgbm90IGFjY291bnRlZCBmb3IgdG8ga2VlcFxuICAgICAqIHRoaW5ncyBjb25zaXN0ZW50LlxuICAgICAqXG4gICAgICogVE9ETyhGVy01NTkyKTogUmVtb3ZlIGhhc1N0YXJ0RW5kU2xvdHMgY29uZGl0aW9uXG4gICAgICovXG4gICAgY29uc3QgbGFiZWxTaG91bGRGbG9hdCA9IGxhYmVsUGxhY2VtZW50ID09PSAnc3RhY2tlZCcgfHwgbGFiZWxQbGFjZW1lbnQgPT09ICdmbG9hdGluZycgJiYgKGhhc1ZhbHVlIHx8IGlzRXhwYW5kZWQgfHwgaGFzU3RhcnRFbmRTbG90cyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnYWE3YmQ3ZmJiNjQ3OWM3ODA1NDg2OTkwNjUwYTQwNmU1NDcwZmQxMycsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW4taXRlbSc6IGluSXRlbSxcbiAgICAgICAgJ2luLWl0ZW0tY29sb3InOiBob3N0Q29udGV4dCgnaW9uLWl0ZW0uaW9uLWNvbG9yJywgZWwpLFxuICAgICAgICAnc2VsZWN0LWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdzZWxlY3QtZXhwYW5kZWQnOiBpc0V4cGFuZGVkLFxuICAgICAgICAnaGFzLWV4cGFuZGVkLWljb24nOiBleHBhbmRlZEljb24gIT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ2hhcy12YWx1ZSc6IGhhc1ZhbHVlLFxuICAgICAgICAnbGFiZWwtZmxvYXRpbmcnOiBsYWJlbFNob3VsZEZsb2F0LFxuICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICAgICBbYHNlbGVjdC0ke3J0bH1gXTogdHJ1ZSxcbiAgICAgICAgW2BzZWxlY3QtZmlsbC0ke2ZpbGx9YF06IGZpbGwgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2BzZWxlY3QtanVzdGlmeS0ke2p1c3RpZnl9YF06IGp1c3RpZnlFbmFibGVkLFxuICAgICAgICBbYHNlbGVjdC1zaGFwZS0ke3NoYXBlfWBdOiBzaGFwZSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBbYHNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtJHtsYWJlbFBsYWNlbWVudH1gXTogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFwibGFiZWxcIiwge1xuICAgICAga2V5OiAnZmRlM2NkZmQwZWY3ZDFhMjAyNjNlMzVmZjQzNThlZTdmNjFhNzg5ZicsXG4gICAgICBjbGFzczogXCJzZWxlY3Qtd3JhcHBlclwiLFxuICAgICAgaWQ6IFwic2VsZWN0LWxhYmVsXCJcbiAgICB9LCB0aGlzLnJlbmRlckxhYmVsQ29udGFpbmVyKCksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNmZiOGRlZWRjODI3YjZiZTJmMTlmOWU1N2E2MmVmZWZhYWJhMjAwZicsXG4gICAgICBjbGFzczogXCJzZWxlY3Qtd3JhcHBlci1pbm5lclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnYTU3YTIwNGVhMWNiZDljNGJhYzMzOGYxNGUxOTZlNzgwZGFiMGExMCcsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc3OGI4M2UxNDg0YTQ0NjUzN2UwMzg1MjdkNTM5ZDk5N2UzMzBjZDY5JyxcbiAgICAgIGNsYXNzOiBcIm5hdGl2ZS13cmFwcGVyXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMubmF0aXZlV3JhcHBlckVsID0gZWwsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgdGhpcy5yZW5kZXJTZWxlY3RUZXh0KCksIHRoaXMucmVuZGVyTGlzdGJveCgpKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnOWZjNjYwMTM0ZTUyNDdjNGU1MjQzYzdkOWQ3MWFjNmNlYzA4NzA1ZCcsXG4gICAgICBuYW1lOiBcImVuZFwiXG4gICAgfSksICFoYXNGbG9hdGluZ09yU3RhY2tlZExhYmVsICYmIHRoaXMucmVuZGVyU2VsZWN0SWNvbigpKSwgaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCAmJiB0aGlzLnJlbmRlclNlbGVjdEljb24oKSwgc2hvdWxkUmVuZGVySGlnaGxpZ2h0ICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnN2YxNDMyODVlZmE3ZmQ3NzU2ZGZkYzU1MTdjYTMzZTg0YzhhMDI3ZScsXG4gICAgICBjbGFzczogXCJzZWxlY3QtaGlnaGxpZ2h0XCJcbiAgICB9KSksIHRoaXMucmVuZGVyQm90dG9tQ29udGVudCgpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJzdHlsZUNoYW5nZWRcIl0sXG4gICAgICBcImlzRXhwYW5kZWRcIjogW1wic3R5bGVDaGFuZ2VkXCJdLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBbXCJzdHlsZUNoYW5nZWRcIl0sXG4gICAgICBcInZhbHVlXCI6IFtcInN0eWxlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBnZXRPcHRpb25WYWx1ZSA9IGVsID0+IHtcbiAgY29uc3QgdmFsdWUgPSBlbC52YWx1ZTtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBlbC50ZXh0Q29udGVudCB8fCAnJyA6IHZhbHVlO1xufTtcbmNvbnN0IHBhcnNlVmFsdWUgPSB2YWx1ZSA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuam9pbignLCcpO1xuICB9XG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcbmNvbnN0IGdlbmVyYXRlVGV4dCA9IChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2ID0+IHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCkpLmZpbHRlcihvcHQgPT4gb3B0ICE9PSBudWxsKS5qb2luKCcsICcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0Rm9yVmFsdWUob3B0cywgdmFsdWUsIGNvbXBhcmVXaXRoKSB8fCAnJztcbiAgfVxufTtcbmNvbnN0IHRleHRGb3JWYWx1ZSA9IChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgY29uc3Qgc2VsZWN0T3B0ID0gb3B0cy5maW5kKG9wdCA9PiB7XG4gICAgcmV0dXJuIGNvbXBhcmVPcHRpb25zKHZhbHVlLCBnZXRPcHRpb25WYWx1ZShvcHQpLCBjb21wYXJlV2l0aCk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0T3B0ID8gc2VsZWN0T3B0LnRleHRDb250ZW50IDogbnVsbDtcbn07XG5sZXQgc2VsZWN0SWRzID0gMDtcbmNvbnN0IE9QVElPTl9DTEFTUyA9ICdzZWxlY3QtaW50ZXJmYWNlLW9wdGlvbic7XG5TZWxlY3Quc3R5bGUgPSB7XG4gIGlvczogSW9uU2VsZWN0SW9zU3R5bGUwLFxuICBtZDogSW9uU2VsZWN0TWRTdHlsZTBcbn07XG5jb25zdCBzZWxlY3RPcHRpb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6bm9uZX1cIjtcbmNvbnN0IElvblNlbGVjdE9wdGlvblN0eWxlMCA9IHNlbGVjdE9wdGlvbkNzcztcbmNvbnN0IFNlbGVjdE9wdGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWxvcHQtJHtzZWxlY3RPcHRpb25JZHMrK31gO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc4Yzk2YzE5OWNlM2EzMDY1ZGUzZmU0NDY1MDBmNTY3MjM2ZTA2MTBhJyxcbiAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICBpZDogdGhpcy5pbnB1dElkLFxuICAgICAgY2xhc3M6IGdldElvbk1vZGUodGhpcylcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5sZXQgc2VsZWN0T3B0aW9uSWRzID0gMDtcblNlbGVjdE9wdGlvbi5zdHlsZSA9IElvblNlbGVjdE9wdGlvblN0eWxlMDtcbmNvbnN0IHNlbGVjdFBvcG92ZXJJb3NDc3MgPSBcIi5zYy1pb24tc2VsZWN0LXBvcG92ZXItaW9zLWggaW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9aW9uLWxpc3QtaGVhZGVyLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1pb3MsaW9uLWxhYmVsLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5zYy1pb24tc2VsZWN0LXBvcG92ZXItaW9zLWh7b3ZlcmZsb3cteTphdXRvfVwiO1xuY29uc3QgSW9uU2VsZWN0UG9wb3Zlcklvc1N0eWxlMCA9IHNlbGVjdFBvcG92ZXJJb3NDc3M7XG5jb25zdCBzZWxlY3RQb3BvdmVyTWRDc3MgPSBcIi5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQtaCBpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1saXN0LWhlYWRlci5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQsaW9uLWxhYmVsLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZC1oe292ZXJmbG93LXk6YXV0b31pb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZDo6cGFydChjb250YWluZXIpe2Rpc3BsYXk6bm9uZX1pb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZDo6cGFydChsYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZHstLWlubmVyLWJvcmRlci13aWR0aDowfS5pdGVtLXJhZGlvLWNoZWNrZWQuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLW1key0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgMCwgODQsIDIzMyksIDAuMDgpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OjAuMjstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OjAuMTJ9Lml0ZW0tY2hlY2tib3gtY2hlY2tlZC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWR7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBJb25TZWxlY3RQb3BvdmVyTWRTdHlsZTAgPSBzZWxlY3RQb3BvdmVyTWRDc3M7XG5jb25zdCBTZWxlY3RQb3BvdmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN1YkhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aXBsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgfVxuICBmaW5kT3B0aW9uRnJvbUV2ZW50KGV2KSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9uc1xuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpO1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCB3ZSBuZWVkIHRvIGdldCB0aGUgdmFsdWUocylcbiAgICogb2YgdGhlIHNlbGVjdGVkIG9wdGlvbihzKSBhbmQgcmV0dXJuIGl0IGluIHRoZSBvcHRpb25cbiAgICogaGFuZGxlclxuICAgKi9cbiAgY2FsbE9wdGlvbkhhbmRsZXIoZXYpIHtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpbmRPcHRpb25Gcm9tRXZlbnQoZXYpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKGV2KTtcbiAgICBpZiAob3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9uLmhhbmRsZXIpIHtcbiAgICAgIHNhZmVDYWxsKG9wdGlvbi5oYW5kbGVyLCB2YWx1ZXMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGlzbWlzc2VzIHRoZSBob3N0IHBvcG92ZXIgdGhhdCB0aGUgYGlvbi1zZWxlY3QtcG9wb3ZlcmBcbiAgICogaXMgcmVuZGVyZWQgd2l0aGluLlxuICAgKi9cbiAgZGlzbWlzc1BhcmVudFBvcG92ZXIoKSB7XG4gICAgY29uc3QgcG9wb3ZlciA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXBvcG92ZXInKTtcbiAgICBpZiAocG9wb3Zlcikge1xuICAgICAgcG9wb3Zlci5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG4gIHNldENoZWNrZWQoZXYpIHtcbiAgICBjb25zdCB7XG4gICAgICBtdWx0aXBsZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbkZyb21FdmVudChldik7XG4gICAgLy8gdGhpcyBpcyBhIHBvcG92ZXIgd2l0aCBjaGVja2JveGVzIChtdWx0aXBsZSB2YWx1ZSBzZWxlY3QpXG4gICAgLy8gd2UgbmVlZCB0byBzZXQgdGhlIGNoZWNrZWQgdmFsdWUgZm9yIHRoaXMgb3B0aW9uXG4gICAgaWYgKG11bHRpcGxlICYmIG9wdGlvbikge1xuICAgICAgb3B0aW9uLmNoZWNrZWQgPSBldi5kZXRhaWwuY2hlY2tlZDtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWVzKGV2KSB7XG4gICAgY29uc3Qge1xuICAgICAgbXVsdGlwbGUsXG4gICAgICBvcHRpb25zXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAvLyB0aGlzIGlzIGEgcG9wb3ZlciB3aXRoIGNoZWNrYm94ZXMgKG11bHRpcGxlIHZhbHVlIHNlbGVjdClcbiAgICAgIC8vIHJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIobyA9PiBvLmNoZWNrZWQpLm1hcChvID0+IG8udmFsdWUpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgcG9wb3ZlciB3aXRoIHJhZGlvIGJ1dHRvbnMgKHNpbmdsZSB2YWx1ZSBzZWxlY3QpXG4gICAgLy8gcmV0dXJuIHRoZSB2YWx1ZSB0aGF0IHdhcyBjbGlja2VkLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uRnJvbUV2ZW50KGV2KTtcbiAgICByZXR1cm4gb3B0aW9uID8gb3B0aW9uLnZhbHVlIDogdW5kZWZpbmVkO1xuICB9XG4gIHJlbmRlck9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIG11bHRpcGxlXG4gICAgfSA9IHRoaXM7XG4gICAgc3dpdGNoIChtdWx0aXBsZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGVja2JveE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSYWRpb09wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHJlbmRlckNoZWNrYm94T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubWFwKG9wdGlvbiA9PiBoKFwiaW9uLWl0ZW1cIiwge1xuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAvLyBUT0RPIEZXLTQ3ODRcbiAgICAgICAgJ2l0ZW0tY2hlY2tib3gtY2hlY2tlZCc6IG9wdGlvbi5jaGVja2VkXG4gICAgICB9LCBnZXRDbGFzc01hcChvcHRpb24uY3NzQ2xhc3MpKVxuICAgIH0sIGgoXCJpb24tY2hlY2tib3hcIiwge1xuICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICBjaGVja2VkOiBvcHRpb24uY2hlY2tlZCxcbiAgICAgIGp1c3RpZnk6IFwic3RhcnRcIixcbiAgICAgIGxhYmVsUGxhY2VtZW50OiBcImVuZFwiLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKGV2KTtcbiAgICAgICAgdGhpcy5jYWxsT3B0aW9uSGFuZGxlcihldik7XG4gICAgICAgIC8vIFRPRE8gRlctNDc4NFxuICAgICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb24udGV4dCkpKTtcbiAgfVxuICByZW5kZXJSYWRpb09wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBvcHRpb25zLmZpbHRlcihvID0+IG8uY2hlY2tlZCkubWFwKG8gPT4gby52YWx1ZSlbMF07XG4gICAgcmV0dXJuIGgoXCJpb24tcmFkaW8tZ3JvdXBcIiwge1xuICAgICAgdmFsdWU6IGNoZWNrZWQsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4gdGhpcy5jYWxsT3B0aW9uSGFuZGxlcihldilcbiAgICB9LCBvcHRpb25zLm1hcChvcHRpb24gPT4gaChcImlvbi1pdGVtXCIsIHtcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgLy8gVE9ETyBGVy00Nzg0XG4gICAgICAgICdpdGVtLXJhZGlvLWNoZWNrZWQnOiBvcHRpb24udmFsdWUgPT09IGNoZWNrZWRcbiAgICAgIH0sIGdldENsYXNzTWFwKG9wdGlvbi5jc3NDbGFzcykpXG4gICAgfSwgaChcImlvbi1yYWRpb1wiLCB7XG4gICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZGlzbWlzc1BhcmVudFBvcG92ZXIoKSxcbiAgICAgIG9uS2V5VXA6IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2VsZWN0aW5nIGEgcmFkaW8gb3B0aW9uIHdpdGgga2V5Ym9hcmQgbmF2aWdhdGlvbixcbiAgICAgICAgICAgKiBlaXRoZXIgdGhyb3VnaCB0aGUgRW50ZXIgb3IgU3BhY2Uga2V5cywgc2hvdWxkXG4gICAgICAgICAgICogZGlzbWlzcyB0aGUgcG9wb3Zlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmRpc21pc3NQYXJlbnRQb3BvdmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb24udGV4dCkpKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlYWRlcixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBvcHRpb25zLFxuICAgICAgc3ViSGVhZGVyXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzU3ViSGVhZGVyT3JNZXNzYWdlID0gc3ViSGVhZGVyICE9PSB1bmRlZmluZWQgfHwgbWVzc2FnZSAhPT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzU0MjM2N2FiOGZiNzJiZmViZjdlNjU2MzBiOTEwMTdkNjg4MjdmZDYnLFxuICAgICAgY2xhc3M6IGdldElvbk1vZGUodGhpcylcbiAgICB9LCBoKFwiaW9uLWxpc3RcIiwge1xuICAgICAga2V5OiAnZjJmMGYzN2UxMzY1Y2Q3NzgwYjAyZGUxYTE2OTg3MDBkMGRmNDhhNydcbiAgICB9LCBoZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBoKFwiaW9uLWxpc3QtaGVhZGVyXCIsIHtcbiAgICAgIGtleTogJzRiODgwMGE2OGU4MDBmMTkyNzdhNDRiNzA3NGNhMjRiNzAyMThkYWYnXG4gICAgfSwgaGVhZGVyKSwgaGFzU3ViSGVhZGVyT3JNZXNzYWdlICYmIGgoXCJpb24taXRlbVwiLCB7XG4gICAgICBrZXk6ICc5MzJiNzkwM2RhZjk3ZDVhNTdkMjg5YjdlZTQ5ZTg2OGJiOWIwY2Y1J1xuICAgIH0sIGgoXCJpb24tbGFiZWxcIiwge1xuICAgICAga2V5OiAnZmMzZjFiNjlhYTJhMGJjNjEyNWQzNTY5MmRjYWQzYThhOTlmZDE2MCcsXG4gICAgICBjbGFzczogXCJpb24tdGV4dC13cmFwXCJcbiAgICB9LCBzdWJIZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBoKFwiaDNcIiwge1xuICAgICAga2V5OiAnZWNlYWIyZjQ3YWZhOTVmMDRiMTM4MzQyYjBiZGJmYTFmNTA5MTlhOCdcbiAgICB9LCBzdWJIZWFkZXIpLCBtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgaChcInBcIiwge1xuICAgICAga2V5OiAnNzBmNGUyN2FkMTMxNjMxOGVmZDBjMTdlZmNlMzFlNWU0NWM4ZmEwMidcbiAgICB9LCBtZXNzYWdlKSkpLCB0aGlzLnJlbmRlck9wdGlvbnMob3B0aW9ucykpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5TZWxlY3RQb3BvdmVyLnN0eWxlID0ge1xuICBpb3M6IElvblNlbGVjdFBvcG92ZXJJb3NTdHlsZTAsXG4gIG1kOiBJb25TZWxlY3RQb3BvdmVyTWRTdHlsZTBcbn07XG5leHBvcnQgeyBTZWxlY3QgYXMgaW9uX3NlbGVjdCwgU2VsZWN0T3B0aW9uIGFzIGlvbl9zZWxlY3Rfb3B0aW9uLCBTZWxlY3RQb3BvdmVyIGFzIGlvbl9zZWxlY3RfcG9wb3ZlciB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFNLGVBQWU7QUFDckIsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxjQUFjO0FBQ3BCLElBQU0sb0JBQW9CO0FBQzFCLElBQU0sU0FBUyxNQUFNO0FBQUEsRUFDbkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxZQUFZLFlBQVksTUFBTSxhQUFhLENBQUM7QUFDakQsU0FBSyxZQUFZLFlBQVksTUFBTSxhQUFhLENBQUM7QUFDakQsU0FBSyxhQUFhLFlBQVksTUFBTSxjQUFjLENBQUM7QUFDbkQsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFdBQVcsV0FBVztBQUNyQyxTQUFLLGVBQWUsR0FBRyxLQUFLLE9BQU87QUFDbkMsU0FBSyxjQUFjLEdBQUcsS0FBSyxPQUFPO0FBQ2xDLFNBQUssc0JBQXNCLENBQUM7QUFDNUIsU0FBSyxVQUFVLFFBQU07QUFDbkIsWUFBTSxTQUFTLEdBQUc7QUFDbEIsWUFBTSxjQUFjLE9BQU8sUUFBUSw4QkFBOEI7QUFDakUsVUFBSSxXQUFXLEtBQUssTUFBTSxnQkFBZ0IsTUFBTTtBQUM5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
