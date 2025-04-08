import {
  safeCall
} from "./chunk-HYGHPGGJ.js";
import "./chunk-U6MFTC2E.js";
import {
  getClassMap
} from "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import "./chunk-RRWPYKYY.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js
var ionicSelectModalMdCss = ".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
var IonSelectModalIonicStyle0 = ionicSelectModalMdCss;
var selectModalIosCss = '.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}';
var IonSelectModalIosStyle0 = selectModalIosCss;
var selectModalMdCss = ".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
var IonSelectModalMdStyle0 = selectModalMdCss;
var SelectModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.header = void 0;
    this.multiple = void 0;
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest("ion-modal");
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : void 0;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
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
  renderRadioOptions() {
    const checked = this.options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", {
      value: checked,
      onIonChange: (ev) => this.callOptionHandler(ev)
    }, this.options.map((option) => h("ion-item", {
      lines: "none",
      class: Object.assign({
        // TODO FW-4784
        "item-radio-checked": option.value === checked
      }, getClassMap(option.cssClass))
    }, h("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      justify: "start",
      labelPlacement: "end",
      onClick: () => this.closeModal(),
      onKeyUp: (ev) => {
        if (ev.key === " ") {
          this.closeModal();
        }
      }
    }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map((option) => h("ion-item", {
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
  render() {
    return h(Host, {
      key: "885198a9f21884e3bfb9bf0af53e0ee3ae37b231",
      class: getIonMode(this)
    }, h("ion-header", {
      key: "d8b63726869747ac711e4fda78a50ce46f72970c"
    }, h("ion-toolbar", {
      key: "9ab2a4c1480dd74eeae38d7b580a2e87fb71270e"
    }, this.header !== void 0 && h("ion-title", {
      key: "87a7034385ef57f55cefdd0371dbb66a64827290"
    }, this.header), h("ion-buttons", {
      key: "0a35424ea13ca002abc9a43b6138730254f187d0",
      slot: "end"
    }, h("ion-button", {
      key: "238bf40b47128d9aa995d14d9ff9ebcae4f79492",
      onClick: () => this.closeModal()
    }, "Close")))), h("ion-content", {
      key: "4a256f3381f8cabbc7194337b8ae4aa1c3ab1066"
    }, h("ion-list", {
      key: "acd38fc52024632176467ed6a84106a454021544"
    }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return getElement(this);
  }
};
SelectModal.style = {
  ionic: IonSelectModalIonicStyle0,
  ios: IonSelectModalIosStyle0,
  md: IonSelectModalMdStyle0
};
export {
  SelectModal as ion_select_modal
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-select-modal.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VsZWN0LW1vZGFsLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGkgYXMgZm9yY2VVcGRhdGUsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy00MWE1ZDUxYi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0ICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCAnLi9mcmFtZXdvcmstZGVsZWdhdGUtMmVlYTE3NjMuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci0zMTRhNTRmNi5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuY29uc3QgaW9uaWNTZWxlY3RNb2RhbE1kQ3NzID0gXCIuc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYy1oe2hlaWdodDoxMDAlfWlvbi1saXN0LnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWMgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWM6OnBhcnQoY29udGFpbmVyKXtkaXNwbGF5Om5vbmV9aW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYyBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYzo6cGFydChsYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1pbm5lci1ib3JkZXItd2lkdGg6MH0uaXRlbS1yYWRpby1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCAwLCA4NCwgMjMzKSwgMC4wOCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6MC4yOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6MC4xMn0uaXRlbS1jaGVja2JveC1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBJb25TZWxlY3RNb2RhbElvbmljU3R5bGUwID0gaW9uaWNTZWxlY3RNb2RhbE1kQ3NzO1xuY29uc3Qgc2VsZWN0TW9kYWxJb3NDc3MgPSBcIi5zYy1pb24tc2VsZWN0LW1vZGFsLWlvcy1oe2hlaWdodDoxMDAlfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9zey0taW5uZXItcGFkZGluZy1lbmQ6MH1pb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb3M6OmFmdGVye2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmNhbGMoMTAwJSAtIDAuOTM3NXJlbSAtIDE2cHgpO2JvcmRlci13aWR0aDowcHggMHB4IDAuNTVweCAwcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0yNTAsICNjOGM3Y2MpKSkpO2NvbnRlbnQ6XFxcIlxcXCJ9aW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9zOjphZnRlcntpbnNldC1pbmxpbmUtc3RhcnQ6Y2FsYygwLjkzNzVyZW0gKyAxNnB4KX1cIjtcbmNvbnN0IElvblNlbGVjdE1vZGFsSW9zU3R5bGUwID0gc2VsZWN0TW9kYWxJb3NDc3M7XG5jb25zdCBzZWxlY3RNb2RhbE1kQ3NzID0gXCIuc2MtaW9uLXNlbGVjdC1tb2RhbC1tZC1oe2hlaWdodDoxMDAlfWlvbi1saXN0LnNjLWlvbi1zZWxlY3QtbW9kYWwtbWQgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtbW9kYWwtbWQ6OnBhcnQoY29udGFpbmVyKXtkaXNwbGF5Om5vbmV9aW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1tZCBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1tZDo6cGFydChsYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtbW9kYWwtbWR7LS1pbm5lci1ib3JkZXItd2lkdGg6MH0uaXRlbS1yYWRpby1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtbWR7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCAwLCA4NCwgMjMzKSwgMC4wOCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6MC4yOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6MC4xMn0uaXRlbS1jaGVja2JveC1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtbWR7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBJb25TZWxlY3RNb2RhbE1kU3R5bGUwID0gc2VsZWN0TW9kYWxNZENzcztcbmNvbnN0IFNlbGVjdE1vZGFsID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpcGxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1tb2RhbCcpO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxuICBmaW5kT3B0aW9uRnJvbUV2ZW50KGV2KSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9uc1xuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpO1xuICB9XG4gIGdldFZhbHVlcyhldikge1xuICAgIGNvbnN0IHtcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb3B0aW9uc1xuICAgIH0gPSB0aGlzO1xuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgLy8gdGhpcyBpcyBhIG1vZGFsIHdpdGggY2hlY2tib3hlcyAobXVsdGlwbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihvID0+IG8uY2hlY2tlZCkubWFwKG8gPT4gby52YWx1ZSk7XG4gICAgfVxuICAgIC8vIHRoaXMgaXMgYSBtb2RhbCB3aXRoIHJhZGlvIGJ1dHRvbnMgKHNpbmdsZSB2YWx1ZSBzZWxlY3QpXG4gICAgLy8gcmV0dXJuIHRoZSB2YWx1ZSB0aGF0IHdhcyBjbGlja2VkLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgY29uc3Qgb3B0aW9uID0gZXYgPyB0aGlzLmZpbmRPcHRpb25Gcm9tRXZlbnQoZXYpIDogbnVsbDtcbiAgICByZXR1cm4gb3B0aW9uID8gb3B0aW9uLnZhbHVlIDogdW5kZWZpbmVkO1xuICB9XG4gIGNhbGxPcHRpb25IYW5kbGVyKGV2KSB7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uRnJvbUV2ZW50KGV2KTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcyhldik7XG4gICAgaWYgKG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbi5oYW5kbGVyKSB7XG4gICAgICBzYWZlQ2FsbChvcHRpb24uaGFuZGxlciwgdmFsdWVzKTtcbiAgICB9XG4gIH1cbiAgc2V0Q2hlY2tlZChldikge1xuICAgIGNvbnN0IHtcbiAgICAgIG11bHRpcGxlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uRnJvbUV2ZW50KGV2KTtcbiAgICAvLyB0aGlzIGlzIGEgbW9kYWwgd2l0aCBjaGVja2JveGVzIChtdWx0aXBsZSB2YWx1ZSBzZWxlY3QpXG4gICAgLy8gd2UgbmVlZCB0byBzZXQgdGhlIGNoZWNrZWQgdmFsdWUgZm9yIHRoaXMgb3B0aW9uXG4gICAgaWYgKG11bHRpcGxlICYmIG9wdGlvbikge1xuICAgICAgb3B0aW9uLmNoZWNrZWQgPSBldi5kZXRhaWwuY2hlY2tlZDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUmFkaW9PcHRpb25zKCkge1xuICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG8gPT4gby5jaGVja2VkKS5tYXAobyA9PiBvLnZhbHVlKVswXTtcbiAgICByZXR1cm4gaChcImlvbi1yYWRpby1ncm91cFwiLCB7XG4gICAgICB2YWx1ZTogY2hlY2tlZCxcbiAgICAgIG9uSW9uQ2hhbmdlOiBldiA9PiB0aGlzLmNhbGxPcHRpb25IYW5kbGVyKGV2KVxuICAgIH0sIHRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IGgoXCJpb24taXRlbVwiLCB7XG4gICAgICBsaW5lczogXCJub25lXCIsXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIFRPRE8gRlctNDc4NFxuICAgICAgICAnaXRlbS1yYWRpby1jaGVja2VkJzogb3B0aW9uLnZhbHVlID09PSBjaGVja2VkXG4gICAgICB9LCBnZXRDbGFzc01hcChvcHRpb24uY3NzQ2xhc3MpKVxuICAgIH0sIGgoXCJpb24tcmFkaW9cIiwge1xuICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICBqdXN0aWZ5OiBcInN0YXJ0XCIsXG4gICAgICBsYWJlbFBsYWNlbWVudDogXCJlbmRcIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpLFxuICAgICAgb25LZXlVcDogZXYgPT4ge1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZWxlY3RpbmcgYSByYWRpbyBvcHRpb24gd2l0aCBrZXlib2FyZCBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAqIGVpdGhlciB0aHJvdWdoIHRoZSBFbnRlciBvciBTcGFjZSBrZXlzLCBzaG91bGRcbiAgICAgICAgICAgKiBkaXNtaXNzIHRoZSBtb2RhbC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbi50ZXh0KSkpKTtcbiAgfVxuICByZW5kZXJDaGVja2JveE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IGgoXCJpb24taXRlbVwiLCB7XG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIFRPRE8gRlctNDc4NFxuICAgICAgICAnaXRlbS1jaGVja2JveC1jaGVja2VkJzogb3B0aW9uLmNoZWNrZWRcbiAgICAgIH0sIGdldENsYXNzTWFwKG9wdGlvbi5jc3NDbGFzcykpXG4gICAgfSwgaChcImlvbi1jaGVja2JveFwiLCB7XG4gICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcbiAgICAgIGNoZWNrZWQ6IG9wdGlvbi5jaGVja2VkLFxuICAgICAganVzdGlmeTogXCJzdGFydFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwiZW5kXCIsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICB0aGlzLnNldENoZWNrZWQoZXYpO1xuICAgICAgICB0aGlzLmNhbGxPcHRpb25IYW5kbGVyKGV2KTtcbiAgICAgICAgLy8gVE9ETyBGVy00Nzg0XG4gICAgICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbi50ZXh0KSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc4ODUxOThhOWYyMTg4NGUzYmZiOWJmMGFmNTNlMGVlM2FlMzdiMjMxJyxcbiAgICAgIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpXG4gICAgfSwgaChcImlvbi1oZWFkZXJcIiwge1xuICAgICAga2V5OiAnZDhiNjM3MjY4Njk3NDdhYzcxMWU0ZmRhNzhhNTBjZTQ2ZjcyOTcwYydcbiAgICB9LCBoKFwiaW9uLXRvb2xiYXJcIiwge1xuICAgICAga2V5OiAnOWFiMmE0YzE0ODBkZDc0ZWVhZTM4ZDdiNTgwYTJlODdmYjcxMjcwZSdcbiAgICB9LCB0aGlzLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGgoXCJpb24tdGl0bGVcIiwge1xuICAgICAga2V5OiAnODdhNzAzNDM4NWVmNTdmNTVjZWZkZDAzNzFkYmI2NmE2NDgyNzI5MCdcbiAgICB9LCB0aGlzLmhlYWRlciksIGgoXCJpb24tYnV0dG9uc1wiLCB7XG4gICAgICBrZXk6ICcwYTM1NDI0ZWExM2NhMDAyYWJjOWE0M2I2MTM4NzMwMjU0ZjE4N2QwJyxcbiAgICAgIHNsb3Q6IFwiZW5kXCJcbiAgICB9LCBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBrZXk6ICcyMzhiZjQwYjQ3MTI4ZDlhYTk5NWQxNGQ5ZmY5ZWJjYWU0Zjc5NDkyJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpXG4gICAgfSwgXCJDbG9zZVwiKSkpKSwgaChcImlvbi1jb250ZW50XCIsIHtcbiAgICAgIGtleTogJzRhMjU2ZjMzODFmOGNhYmJjNzE5NDMzN2I4YWU0YWExYzNhYjEwNjYnXG4gICAgfSwgaChcImlvbi1saXN0XCIsIHtcbiAgICAgIGtleTogJ2FjZDM4ZmM1MjAyNDYzMjE3NjQ2N2VkNmE4NDEwNmE0NTQwMjE1NDQnXG4gICAgfSwgdGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHRoaXMucmVuZGVyQ2hlY2tib3hPcHRpb25zKCkgOiB0aGlzLnJlbmRlclJhZGlvT3B0aW9ucygpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcblNlbGVjdE1vZGFsLnN0eWxlID0ge1xuICBpb25pYzogSW9uU2VsZWN0TW9kYWxJb25pY1N0eWxlMCxcbiAgaW9zOiBJb25TZWxlY3RNb2RhbElvc1N0eWxlMCxcbiAgbWQ6IElvblNlbGVjdE1vZGFsTWRTdHlsZTBcbn07XG5leHBvcnQgeyBTZWxlY3RNb2RhbCBhcyBpb25fc2VsZWN0X21vZGFsIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSw0QkFBNEI7QUFDbEMsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSwwQkFBMEI7QUFDaEMsSUFBTSxtQkFBbUI7QUFDekIsSUFBTSx5QkFBeUI7QUFDL0IsSUFBTSxjQUFjLE1BQU07QUFBQSxFQUN4QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFNBQVM7QUFDZCxTQUFLLFdBQVc7QUFDaEIsU0FBSyxVQUFVLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsYUFBYTtBQUNYLFVBQU0sUUFBUSxLQUFLLEdBQUcsUUFBUSxXQUFXO0FBQ3pDLFFBQUksT0FBTztBQUNULFlBQU0sUUFBUTtBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0Esb0JBQW9CLElBQUk7QUFDdEIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixXQUFPLFFBQVEsS0FBSyxPQUFLLEVBQUUsVUFBVSxHQUFHLE9BQU8sS0FBSztBQUFBLEVBQ3REO0FBQUEsRUFDQSxVQUFVLElBQUk7QUFDWixVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFJLFVBQVU7QUFHWixhQUFPLFFBQVEsT0FBTyxPQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksT0FBSyxFQUFFLEtBQUs7QUFBQSxJQUN4RDtBQUdBLFVBQU0sU0FBUyxLQUFLLEtBQUssb0JBQW9CLEVBQUUsSUFBSTtBQUNuRCxXQUFPLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDakM7QUFBQSxFQUNBLGtCQUFrQixJQUFJO0FBQ3BCLFVBQU0sU0FBUyxLQUFLLG9CQUFvQixFQUFFO0FBQzFDLFVBQU0sU0FBUyxLQUFLLFVBQVUsRUFBRTtBQUNoQyxRQUFJLFdBQVcsUUFBUSxXQUFXLFNBQVMsU0FBUyxPQUFPLFNBQVM7QUFDbEUsZUFBUyxPQUFPLFNBQVMsTUFBTTtBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVyxJQUFJO0FBQ2IsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLFNBQVMsS0FBSyxvQkFBb0IsRUFBRTtBQUcxQyxRQUFJLFlBQVksUUFBUTtBQUN0QixhQUFPLFVBQVUsR0FBRyxPQUFPO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxxQkFBcUI7QUFDbkIsVUFBTSxVQUFVLEtBQUssUUFBUSxPQUFPLE9BQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxPQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDdkUsV0FBTyxFQUFFLG1CQUFtQjtBQUFBLE1BQzFCLE9BQU87QUFBQSxNQUNQLGFBQWEsUUFBTSxLQUFLLGtCQUFrQixFQUFFO0FBQUEsSUFDOUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxZQUFVLEVBQUUsWUFBWTtBQUFBLE1BQzFDLE9BQU87QUFBQSxNQUNQLE9BQU8sT0FBTyxPQUFPO0FBQUE7QUFBQSxRQUVuQixzQkFBc0IsT0FBTyxVQUFVO0FBQUEsTUFDekMsR0FBRyxZQUFZLE9BQU8sUUFBUSxDQUFDO0FBQUEsSUFDakMsR0FBRyxFQUFFLGFBQWE7QUFBQSxNQUNoQixPQUFPLE9BQU87QUFBQSxNQUNkLFVBQVUsT0FBTztBQUFBLE1BQ2pCLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLFNBQVMsTUFBTSxLQUFLLFdBQVc7QUFBQSxNQUMvQixTQUFTLFFBQU07QUFDYixZQUFJLEdBQUcsUUFBUSxLQUFLO0FBTWxCLGVBQUssV0FBVztBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0YsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNuQjtBQUFBLEVBQ0Esd0JBQXdCO0FBQ3RCLFdBQU8sS0FBSyxRQUFRLElBQUksWUFBVSxFQUFFLFlBQVk7QUFBQSxNQUM5QyxPQUFPLE9BQU8sT0FBTztBQUFBO0FBQUEsUUFFbkIseUJBQXlCLE9BQU87QUFBQSxNQUNsQyxHQUFHLFlBQVksT0FBTyxRQUFRLENBQUM7QUFBQSxJQUNqQyxHQUFHLEVBQUUsZ0JBQWdCO0FBQUEsTUFDbkIsT0FBTyxPQUFPO0FBQUEsTUFDZCxVQUFVLE9BQU87QUFBQSxNQUNqQixTQUFTLE9BQU87QUFBQSxNQUNoQixTQUFTO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxNQUNoQixhQUFhLFFBQU07QUFDakIsYUFBSyxXQUFXLEVBQUU7QUFDbEIsYUFBSyxrQkFBa0IsRUFBRTtBQUV6QixvQkFBWSxJQUFJO0FBQUEsTUFDbEI7QUFBQSxJQUNGLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU8sV0FBVyxJQUFJO0FBQUEsSUFDeEIsR0FBRyxFQUFFLGNBQWM7QUFBQSxNQUNqQixLQUFLO0FBQUEsSUFDUCxHQUFHLEVBQUUsZUFBZTtBQUFBLE1BQ2xCLEtBQUs7QUFBQSxJQUNQLEdBQUcsS0FBSyxXQUFXLFVBQWEsRUFBRSxhQUFhO0FBQUEsTUFDN0MsS0FBSztBQUFBLElBQ1AsR0FBRyxLQUFLLE1BQU0sR0FBRyxFQUFFLGVBQWU7QUFBQSxNQUNoQyxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUixHQUFHLEVBQUUsY0FBYztBQUFBLE1BQ2pCLEtBQUs7QUFBQSxNQUNMLFNBQVMsTUFBTSxLQUFLLFdBQVc7QUFBQSxJQUNqQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWU7QUFBQSxNQUMvQixLQUFLO0FBQUEsSUFDUCxHQUFHLEVBQUUsWUFBWTtBQUFBLE1BQ2YsS0FBSztBQUFBLElBQ1AsR0FBRyxLQUFLLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixJQUFJLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDeEY7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLFlBQVksUUFBUTtBQUFBLEVBQ2xCLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
