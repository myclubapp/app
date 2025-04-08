import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  inheritAttributes
} from "./chunk-RRWPYKYY.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-picker-column-option.entry.js
var pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
var IonPickerColumnOptionIosStyle0 = pickerColumnOptionIosCss;
var pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
var IonPickerColumnOptionMdStyle0 = pickerColumnOptionMdCss;
var PickerColumnOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pickerColumn = null;
    this.ariaLabel = null;
    this.disabled = false;
    this.value = void 0;
    this.color = "primary";
  }
  /**
   * The aria-label of the option has changed after the
   * first render and needs to be updated within the component.
   *
   * @param ariaLbl The new aria-label value.
   */
  onAriaLabelChange(ariaLbl) {
    this.ariaLabel = ariaLbl;
  }
  componentWillLoad() {
    const inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
    this.ariaLabel = inheritedAttributes["aria-label"] || null;
  }
  connectedCallback() {
    this.pickerColumn = this.el.closest("ion-picker-column");
  }
  disconnectedCallback() {
    this.pickerColumn = null;
  }
  /**
   * The column options can load at any time
   * so the options needs to tell the
   * parent picker column when it is loaded
   * so the picker column can ensure it is
   * centered in the view.
   *
   * We intentionally run this for every
   * option. If we only ran this from
   * the selected option then if the newly
   * loaded options were not selected then
   * scrollActiveItemIntoView would not be called.
   */
  componentDidLoad() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.scrollActiveItemIntoView();
    }
  }
  /**
   * When an option is clicked, update the
   * parent picker column value. This
   * component will handle centering the option
   * in the column view.
   */
  onClick() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.setValue(this.value);
    }
  }
  render() {
    const {
      color,
      disabled,
      ariaLabel
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "c1353e99c2aa19c0e3ddbe433557ed18e72e1c66",
      class: createColorClasses(color, {
        [mode]: true,
        ["option-disabled"]: disabled
      })
    }, h("button", {
      key: "b4ee62ecf7458a07a56e8aa494485766a87a3fcb",
      tabindex: "-1",
      "aria-label": ariaLabel,
      disabled,
      onClick: () => this.onClick()
    }, h("slot", {
      key: "9ab1e4700c27103b676670a4b3521c183c6ab83d"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "aria-label": ["onAriaLabelChange"]
    };
  }
};
PickerColumnOption.style = {
  ios: IonPickerColumnOptionIosStyle0,
  md: IonPickerColumnOptionMdStyle0
};
export {
  PickerColumnOption as ion_picker_column_option
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker-column-option.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLWNvbHVtbi1vcHRpb24uZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGggYXMgaW5oZXJpdEF0dHJpYnV0ZXMgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IHBpY2tlckNvbHVtbk9wdGlvbklvc0NzcyA9IFwiYnV0dG9ue3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjM0cHg7Ym9yZGVyOjBweDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzRweDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5vcHRpb24tZGlzYWJsZWQpe29wYWNpdHk6MC40fTpob3N0KC5vcHRpb24tZGlzYWJsZWQpIGJ1dHRvbntjdXJzb3I6ZGVmYXVsdH1cIjtcbmNvbnN0IElvblBpY2tlckNvbHVtbk9wdGlvbklvc1N0eWxlMCA9IHBpY2tlckNvbHVtbk9wdGlvbklvc0NzcztcbmNvbnN0IHBpY2tlckNvbHVtbk9wdGlvbk1kQ3NzID0gXCJidXR0b257cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MzRweDtib3JkZXI6MHB4O291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDozNHB4O3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLm9wdGlvbi1kaXNhYmxlZCl7b3BhY2l0eTowLjR9Omhvc3QoLm9wdGlvbi1kaXNhYmxlZCkgYnV0dG9ue2N1cnNvcjpkZWZhdWx0fTpob3N0KC5vcHRpb24tYWN0aXZlKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9XCI7XG5jb25zdCBJb25QaWNrZXJDb2x1bW5PcHRpb25NZFN0eWxlMCA9IHBpY2tlckNvbHVtbk9wdGlvbk1kQ3NzO1xuY29uc3QgUGlja2VyQ29sdW1uT3B0aW9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvKipcbiAgICAgKiBXZSBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnQgcGlja2VyIGNvbHVtblxuICAgICAqIHNvIHdlIGNhbiB1cGRhdGUgdGhlIHZhbHVlIG9mIGl0IHdoZW5cbiAgICAgKiBjbGlja2luZyBhbiBlbmFibGUgb3B0aW9uLlxuICAgICAqL1xuICAgIHRoaXMucGlja2VyQ29sdW1uID0gbnVsbDtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IG51bGw7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xvciA9ICdwcmltYXJ5JztcbiAgfVxuICAvKipcbiAgICogVGhlIGFyaWEtbGFiZWwgb2YgdGhlIG9wdGlvbiBoYXMgY2hhbmdlZCBhZnRlciB0aGVcbiAgICogZmlyc3QgcmVuZGVyIGFuZCBuZWVkcyB0byBiZSB1cGRhdGVkIHdpdGhpbiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gYXJpYUxibCBUaGUgbmV3IGFyaWEtbGFiZWwgdmFsdWUuXG4gICAqL1xuICBvbkFyaWFMYWJlbENoYW5nZShhcmlhTGJsKSB7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSBhcmlhTGJsO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IGluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXR0cmlidXRlcyh0aGlzLmVsLCBbJ2FyaWEtbGFiZWwnXSk7XG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIG5lZWRzIHRvIGJlIHNldCBmb3JcbiAgICAgKiB0aGUgZmlyc3QgcmVuZGVyLlxuICAgICAgICAgICovXG4gICAgdGhpcy5hcmlhTGFiZWwgPSBpbmhlcml0ZWRBdHRyaWJ1dGVzWydhcmlhLWxhYmVsJ10gfHwgbnVsbDtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBpY2tlckNvbHVtbiA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXBpY2tlci1jb2x1bW4nKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBpY2tlckNvbHVtbiA9IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBjb2x1bW4gb3B0aW9ucyBjYW4gbG9hZCBhdCBhbnkgdGltZVxuICAgKiBzbyB0aGUgb3B0aW9ucyBuZWVkcyB0byB0ZWxsIHRoZVxuICAgKiBwYXJlbnQgcGlja2VyIGNvbHVtbiB3aGVuIGl0IGlzIGxvYWRlZFxuICAgKiBzbyB0aGUgcGlja2VyIGNvbHVtbiBjYW4gZW5zdXJlIGl0IGlzXG4gICAqIGNlbnRlcmVkIGluIHRoZSB2aWV3LlxuICAgKlxuICAgKiBXZSBpbnRlbnRpb25hbGx5IHJ1biB0aGlzIGZvciBldmVyeVxuICAgKiBvcHRpb24uIElmIHdlIG9ubHkgcmFuIHRoaXMgZnJvbVxuICAgKiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRoZW4gaWYgdGhlIG5ld2x5XG4gICAqIGxvYWRlZCBvcHRpb25zIHdlcmUgbm90IHNlbGVjdGVkIHRoZW5cbiAgICogc2Nyb2xsQWN0aXZlSXRlbUludG9WaWV3IHdvdWxkIG5vdCBiZSBjYWxsZWQuXG4gICAqL1xuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBpY2tlckNvbHVtblxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChwaWNrZXJDb2x1bW4gIT09IG51bGwpIHtcbiAgICAgIHBpY2tlckNvbHVtbi5zY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gYW4gb3B0aW9uIGlzIGNsaWNrZWQsIHVwZGF0ZSB0aGVcbiAgICogcGFyZW50IHBpY2tlciBjb2x1bW4gdmFsdWUuIFRoaXNcbiAgICogY29tcG9uZW50IHdpbGwgaGFuZGxlIGNlbnRlcmluZyB0aGUgb3B0aW9uXG4gICAqIGluIHRoZSBjb2x1bW4gdmlldy5cbiAgICovXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGlja2VyQ29sdW1uXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHBpY2tlckNvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgcGlja2VyQ29sdW1uLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGFyaWFMYWJlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2MxMzUzZTk5YzJhYTE5YzBlM2RkYmU0MzM1NTdlZDE4ZTcyZTFjNjYnLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIFsnb3B0aW9uLWRpc2FibGVkJ106IGRpc2FibGVkXG4gICAgICB9KVxuICAgIH0sIGgoXCJidXR0b25cIiwge1xuICAgICAga2V5OiAnYjRlZTYyZWNmNzQ1OGEwN2E1NmU4YWE0OTQ0ODU3NjZhODdhM2ZjYicsXG4gICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMub25DbGljaygpXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnOWFiMWU0NzAwYzI3MTAzYjY3NjY3MGE0YjM1MjFjMTgzYzZhYjgzZCdcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogW1wib25BcmlhTGFiZWxDaGFuZ2VcIl1cbiAgICB9O1xuICB9XG59O1xuUGlja2VyQ29sdW1uT3B0aW9uLnN0eWxlID0ge1xuICBpb3M6IElvblBpY2tlckNvbHVtbk9wdGlvbklvc1N0eWxlMCxcbiAgbWQ6IElvblBpY2tlckNvbHVtbk9wdGlvbk1kU3R5bGUwXG59O1xuZXhwb3J0IHsgUGlja2VyQ29sdW1uT3B0aW9uIGFzIGlvbl9waWNrZXJfY29sdW1uX29wdGlvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSwyQkFBMkI7QUFDakMsSUFBTSxpQ0FBaUM7QUFDdkMsSUFBTSwwQkFBMEI7QUFDaEMsSUFBTSxnQ0FBZ0M7QUFDdEMsSUFBTSxxQkFBcUIsTUFBTTtBQUFBLEVBQy9CLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBTTlCLFNBQUssZUFBZTtBQUNwQixTQUFLLFlBQVk7QUFDakIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssUUFBUTtBQUNiLFNBQUssUUFBUTtBQUFBLEVBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGtCQUFrQixTQUFTO0FBQ3pCLFNBQUssWUFBWTtBQUFBLEVBQ25CO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsVUFBTSxzQkFBc0Isa0JBQWtCLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztBQUtyRSxTQUFLLFlBQVksb0JBQW9CLFlBQVksS0FBSztBQUFBLEVBQ3hEO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsU0FBSyxlQUFlLEtBQUssR0FBRyxRQUFRLG1CQUFtQjtBQUFBLEVBQ3pEO0FBQUEsRUFDQSx1QkFBdUI7QUFDckIsU0FBSyxlQUFlO0FBQUEsRUFDdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY0EsbUJBQW1CO0FBQ2pCLFVBQU07QUFBQSxNQUNKO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBSSxpQkFBaUIsTUFBTTtBQUN6QixtQkFBYSx5QkFBeUI7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFVBQVU7QUFDUixVQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0YsSUFBSTtBQUNKLFFBQUksaUJBQWlCLE1BQU07QUFDekIsbUJBQWEsU0FBUyxLQUFLLEtBQUs7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsT0FBTyxtQkFBbUIsT0FBTztBQUFBLFFBQy9CLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixDQUFDLGlCQUFpQixHQUFHO0FBQUEsTUFDdkIsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLFVBQVU7QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTLE1BQU0sS0FBSyxRQUFRO0FBQUEsSUFDOUIsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLGNBQWMsQ0FBQyxtQkFBbUI7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDRjtBQUNBLG1CQUFtQixRQUFRO0FBQUEsRUFDekIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
