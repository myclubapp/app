import {
  eye,
  eyeOff
} from "./chunk-Y2OY2WAF.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
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

// node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js
var iosInputPasswordToggleCss = "";
var IonInputPasswordToggleIosStyle0 = iosInputPasswordToggleCss;
var mdInputPasswordToggleCss = "";
var IonInputPasswordToggleMdStyle0 = mdInputPasswordToggleCss;
var InputPasswordToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.togglePasswordVisibility = () => {
      const {
        inputElRef
      } = this;
      if (!inputElRef) {
        return;
      }
      inputElRef.type = inputElRef.type === "text" ? "password" : "text";
    };
    this.color = void 0;
    this.showIcon = void 0;
    this.hideIcon = void 0;
    this.type = "password";
  }
  /**
   * Whenever the input type changes we need to re-run validation to ensure the password
   * toggle is being used with the correct input type. If the application changes the type
   * outside of this component we also need to re-render so the correct icon is shown.
   */
  onTypeChange(newValue) {
    if (newValue !== "text" && newValue !== "password") {
      printIonWarning(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${newValue}" is not compatible.`, this.el);
      return;
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    const inputElRef = this.inputElRef = el.closest("ion-input");
    if (!inputElRef) {
      printIonWarning("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.", el);
      return;
    }
    this.type = inputElRef.type;
  }
  disconnectedCallback() {
    this.inputElRef = null;
  }
  render() {
    var _a, _b;
    const {
      color,
      type
    } = this;
    const mode = getIonMode(this);
    const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : eye;
    const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : eyeOff;
    const isPasswordVisible = type === "text";
    return h(Host, {
      key: "d9811e25bfeb2aa197352bb9be852e9e420739d5",
      class: createColorClasses(color, {
        [mode]: true
      })
    }, h("ion-button", {
      key: "1eaea1442b248fb2b8d61538b27274e647a07804",
      mode,
      color,
      fill: "clear",
      shape: "round",
      "aria-checked": isPasswordVisible ? "true" : "false",
      "aria-label": "show password",
      role: "switch",
      type: "button",
      onPointerDown: (ev) => {
        ev.preventDefault();
      },
      onClick: this.togglePasswordVisibility
    }, h("ion-icon", {
      key: "9c88de8f4631d9bde222ce2edf6950d639e04773",
      slot: "icon-only",
      "aria-hidden": "true",
      icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "type": ["onTypeChange"]
    };
  }
};
InputPasswordToggle.style = {
  ios: IonInputPasswordToggleIosStyle0,
  md: IonInputPasswordToggleMdStyle0
};
export {
  InputPasswordToggle as ion_input_password_toggle
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-input-password-toggle.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IHggYXMgZXllLCB5IGFzIGV5ZU9mZiB9IGZyb20gJy4vaW5kZXgtZTJjZjJjZWIuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuY29uc3QgaW9zSW5wdXRQYXNzd29yZFRvZ2dsZUNzcyA9IFwiXCI7XG5jb25zdCBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlSW9zU3R5bGUwID0gaW9zSW5wdXRQYXNzd29yZFRvZ2dsZUNzcztcbmNvbnN0IG1kSW5wdXRQYXNzd29yZFRvZ2dsZUNzcyA9IFwiXCI7XG5jb25zdCBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlTWRTdHlsZTAgPSBtZElucHV0UGFzc3dvcmRUb2dnbGVDc3M7XG5jb25zdCBJbnB1dFBhc3N3b3JkVG9nZ2xlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbFJlZlxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWlucHV0RWxSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5wdXRFbFJlZi50eXBlID0gaW5wdXRFbFJlZi50eXBlID09PSAndGV4dCcgPyAncGFzc3dvcmQnIDogJ3RleHQnO1xuICAgIH07XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dJY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlkZUljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50eXBlID0gJ3Bhc3N3b3JkJztcbiAgfVxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlIGlucHV0IHR5cGUgY2hhbmdlcyB3ZSBuZWVkIHRvIHJlLXJ1biB2YWxpZGF0aW9uIHRvIGVuc3VyZSB0aGUgcGFzc3dvcmRcbiAgICogdG9nZ2xlIGlzIGJlaW5nIHVzZWQgd2l0aCB0aGUgY29ycmVjdCBpbnB1dCB0eXBlLiBJZiB0aGUgYXBwbGljYXRpb24gY2hhbmdlcyB0aGUgdHlwZVxuICAgKiBvdXRzaWRlIG9mIHRoaXMgY29tcG9uZW50IHdlIGFsc28gbmVlZCB0byByZS1yZW5kZXIgc28gdGhlIGNvcnJlY3QgaWNvbiBpcyBzaG93bi5cbiAgICovXG4gIG9uVHlwZUNoYW5nZShuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gJ3RleHQnICYmIG5ld1ZhbHVlICE9PSAncGFzc3dvcmQnKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoYGlvbi1pbnB1dC1wYXNzd29yZC10b2dnbGUgb25seSBzdXBwb3J0cyBpbnB1dHMgb2YgdHlwZSBcInRleHRcIiBvciBcInBhc3N3b3JkXCIuIElucHV0IG9mIHR5cGUgXCIke25ld1ZhbHVlfVwiIGlzIG5vdCBjb21wYXRpYmxlLmAsIHRoaXMuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlucHV0RWxSZWYgPSB0aGlzLmlucHV0RWxSZWYgPSBlbC5jbG9zZXN0KCdpb24taW5wdXQnKTtcbiAgICBpZiAoIWlucHV0RWxSZWYpIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnTm8gYW5jZXN0b3IgaW9uLWlucHV0IGZvdW5kIGZvciBpb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlLiBUaGlzIGNvbXBvbmVudCBtdXN0IGJlIHNsb3R0ZWQgaW5zaWRlIG9mIGFuIGlvbi1pbnB1dC4nLCBlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcG9ydGFudDogU2V0IHRoZSB0eXBlIGluIGNvbm5lY3RlZENhbGxiYWNrIGJlY2F1c2UgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgKiBvZiB0aGlzLnR5cGUgbWF5IG5vdCBhbHdheXMgYmUgYWNjdXJhdGUuIFVzdWFsbHkgaW5wdXRzIGhhdmUgdGhlIFwicGFzc3dvcmRcIiB0eXBlXG4gICAgICogYnV0IGl0IGlzIHBvc3NpYmxlIHRvIGhhdmUgdGhlIGlucHV0IHRvIGluaXRpYWxseSBoYXZlIHRoZSBcInRleHRcIiB0eXBlLiBJbiB0aGF0IHNjZW5hcmlvXG4gICAgICogdGhlIHdyb25nIGljb24gd2lsbCBzaG93IGJyaWVmbHkgYmVmb3JlIHN3aXRjaGluZyB0byB0aGUgY29ycmVjdCBpY29uLiBTZXR0aW5nIHRoZVxuICAgICAqIHR5cGUgaGVyZSBhbGxvd3MgdXMgdG8gYXZvaWQgdGhhdCBmbGlja2VyLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IGlucHV0RWxSZWYudHlwZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmlucHV0RWxSZWYgPSBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgdHlwZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IHNob3dQYXNzd29yZEljb24gPSAoX2EgPSB0aGlzLnNob3dJY29uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBleWU7XG4gICAgY29uc3QgaGlkZVBhc3N3b3JkSWNvbiA9IChfYiA9IHRoaXMuaGlkZUljb24pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGV5ZU9mZjtcbiAgICBjb25zdCBpc1Bhc3N3b3JkVmlzaWJsZSA9IHR5cGUgPT09ICd0ZXh0JztcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkOTgxMWUyNWJmZWIyYWExOTczNTJiYjliZTg1MmU5ZTQyMDczOWQ1JyxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJpb24tYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJzFlYWVhMTQ0MmIyNDhmYjJiOGQ2MTUzOGIyNzI3NGU2NDdhMDc4MDQnLFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGZpbGw6IFwiY2xlYXJcIixcbiAgICAgIHNoYXBlOiBcInJvdW5kXCIsXG4gICAgICBcImFyaWEtY2hlY2tlZFwiOiBpc1Bhc3N3b3JkVmlzaWJsZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJzaG93IHBhc3N3b3JkXCIsXG4gICAgICByb2xlOiBcInN3aXRjaFwiLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uUG9pbnRlckRvd246IGV2ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgcHJldmVudHMgbW9iaWxlIGJyb3dzZXJzIGZyb21cbiAgICAgICAgICogYmx1cnJpbmcgdGhlIGlucHV0IHdoZW4gdGhlIHBhc3N3b3JkIHRvZ2dsZVxuICAgICAgICAgKiBidXR0b24gaXMgYWN0aXZhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICc5Yzg4ZGU4ZjQ2MzFkOWJkZTIyMmNlMmVkZjY5NTBkNjM5ZTA0NzczJyxcbiAgICAgIHNsb3Q6IFwiaWNvbi1vbmx5XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgaWNvbjogaXNQYXNzd29yZFZpc2libGUgPyBoaWRlUGFzc3dvcmRJY29uIDogc2hvd1Bhc3N3b3JkSWNvblxuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwidHlwZVwiOiBbXCJvblR5cGVDaGFuZ2VcIl1cbiAgICB9O1xuICB9XG59O1xuSW5wdXRQYXNzd29yZFRvZ2dsZS5zdHlsZSA9IHtcbiAgaW9zOiBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlSW9zU3R5bGUwLFxuICBtZDogSW9uSW5wdXRQYXNzd29yZFRvZ2dsZU1kU3R5bGUwXG59O1xuZXhwb3J0IHsgSW5wdXRQYXNzd29yZFRvZ2dsZSBhcyBpb25faW5wdXRfcGFzc3dvcmRfdG9nZ2xlIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTSw0QkFBNEI7QUFDbEMsSUFBTSxrQ0FBa0M7QUFDeEMsSUFBTSwyQkFBMkI7QUFDakMsSUFBTSxpQ0FBaUM7QUFDdkMsSUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQ2hDLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssMkJBQTJCLE1BQU07QUFDcEMsWUFBTTtBQUFBLFFBQ0o7QUFBQSxNQUNGLElBQUk7QUFDSixVQUFJLENBQUMsWUFBWTtBQUNmO0FBQUEsTUFDRjtBQUNBLGlCQUFXLE9BQU8sV0FBVyxTQUFTLFNBQVMsYUFBYTtBQUFBLElBQzlEO0FBQ0EsU0FBSyxRQUFRO0FBQ2IsU0FBSyxXQUFXO0FBQ2hCLFNBQUssV0FBVztBQUNoQixTQUFLLE9BQU87QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsYUFBYSxVQUFVO0FBQ3JCLFFBQUksYUFBYSxVQUFVLGFBQWEsWUFBWTtBQUNsRCxzQkFBZ0IsK0ZBQStGLFFBQVEsd0JBQXdCLEtBQUssRUFBRTtBQUN0SjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLGFBQWEsS0FBSyxhQUFhLEdBQUcsUUFBUSxXQUFXO0FBQzNELFFBQUksQ0FBQyxZQUFZO0FBQ2Ysc0JBQWdCLHFIQUFxSCxFQUFFO0FBQ3ZJO0FBQUEsSUFDRjtBQVFBLFNBQUssT0FBTyxXQUFXO0FBQUEsRUFDekI7QUFBQSxFQUNBLHVCQUF1QjtBQUNyQixTQUFLLGFBQWE7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsU0FBUztBQUNQLFFBQUksSUFBSTtBQUNSLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsVUFBTSxvQkFBb0IsS0FBSyxLQUFLLGNBQWMsUUFBUSxPQUFPLFNBQVMsS0FBSztBQUMvRSxVQUFNLG9CQUFvQixLQUFLLEtBQUssY0FBYyxRQUFRLE9BQU8sU0FBUyxLQUFLO0FBQy9FLFVBQU0sb0JBQW9CLFNBQVM7QUFDbkMsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU8sbUJBQW1CLE9BQU87QUFBQSxRQUMvQixDQUFDLElBQUksR0FBRztBQUFBLE1BQ1YsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLGNBQWM7QUFBQSxNQUNqQixLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGdCQUFnQixvQkFBb0IsU0FBUztBQUFBLE1BQzdDLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGVBQWUsUUFBTTtBQU1uQixXQUFHLGVBQWU7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUyxLQUFLO0FBQUEsSUFDaEIsR0FBRyxFQUFFLFlBQVk7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLE1BQU0sb0JBQW9CLG1CQUFtQjtBQUFBLElBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFFBQVEsQ0FBQyxjQUFjO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxvQkFBb0IsUUFBUTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
