import {
  getHourCycle,
  getLocalizedDateTime,
  getLocalizedTime,
  getToday,
  parseDate
} from "./chunk-OJLWFEJB.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  printIonError
} from "./chunk-5HIO5JVM.js";
import {
  addEventListener,
  componentOnReady
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
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-datetime-button.entry.js
var datetimeButtonIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var IonDatetimeButtonIosStyle0 = datetimeButtonIosCss;
var datetimeButtonMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}";
var IonDatetimeButtonMdStyle0 = datetimeButtonMdCss;
var DatetimeButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.datetimeEl = null;
    this.overlayEl = null;
    this.getParsedDateValues = (value) => {
      if (value === void 0 || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    this.setDateTimeText = () => {
      var _a, _b, _c, _d, _e;
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      const {
        value,
        locale,
        formatOptions,
        hourCycle,
        preferWheel,
        multiple,
        titleSelectedDatesFormatter
      } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      const parsedDatetimes = parseDate(parsedValues.length > 0 ? parsedValues : [getToday()]);
      if (!parsedDatetimes) {
        return;
      }
      const firstParsedDatetime = parsedDatetimes[0];
      const computedHourCycle = getHourCycle(locale, hourCycle);
      this.dateText = this.timeText = void 0;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
            month: "short",
            day: "numeric",
            year: "numeric"
          });
          const timeText = getLocalizedTime(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          } else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case "date":
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`;
            if (titleSelectedDatesFormatter !== void 0) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              } catch (e) {
                printIonError("Exception in provided `titleSelectedDatesFormatter`: ", e);
              }
            }
            this.dateText = headerText;
          } else {
            this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _b !== void 0 ? _b : {
              month: "short",
              day: "numeric",
              year: "numeric"
            });
          }
          break;
        case "time":
          this.timeText = getLocalizedTime(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          break;
        case "month-year":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _c !== void 0 ? _c : {
            month: "long",
            year: "numeric"
          });
          break;
        case "month":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _d !== void 0 ? _d : {
            month: "long"
          });
          break;
        case "year":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_e = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _e !== void 0 ? _e : {
            year: "numeric"
          });
          break;
      }
    };
    this.waitForDatetimeChanges = () => __async(this, null, function* () {
      const {
        datetimeEl
      } = this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        addEventListener(datetimeEl, "ionRender", resolve, {
          once: true
        });
      });
    });
    this.handleDateClick = (ev) => __async(this, null, function* () {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const needsChange = datetimeEl.presentation !== "date";
          if (!datetimeEl.preferWheel && needsChange) {
            datetimeEl.presentation = "date";
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = "date";
      this.presentOverlay(ev, needsPresentationChange, this.dateTargetEl);
    });
    this.handleTimeClick = (ev) => {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const needsChange = datetimeEl.presentation !== "time";
          if (needsChange) {
            datetimeEl.presentation = "time";
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = "time";
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    this.presentOverlay = (ev, needsPresentationChange, triggerEl) => __async(this, null, function* () {
      const {
        overlayEl
      } = this;
      if (!overlayEl) {
        return;
      }
      if (overlayEl.tagName === "ION-POPOVER") {
        if (needsPresentationChange) {
          yield this.waitForDatetimeChanges();
        }
        overlayEl.present(Object.assign(Object.assign({}, ev), {
          detail: {
            ionShadowTarget: triggerEl
          }
        }));
      } else {
        overlayEl.present();
      }
    });
    this.datetimePresentation = "date-time";
    this.dateText = void 0;
    this.timeText = void 0;
    this.datetimeActive = false;
    this.selectedButton = void 0;
    this.color = "primary";
    this.disabled = false;
    this.datetime = void 0;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      const {
        datetime
      } = this;
      if (!datetime) {
        printIonError("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.", this.el);
        return;
      }
      const datetimeEl = this.datetimeEl = document.getElementById(datetime);
      if (!datetimeEl) {
        printIonError(`No ion-datetime instance found for ID '${datetime}'.`, this.el);
        return;
      }
      if (datetimeEl.tagName !== "ION-DATETIME") {
        printIonError(`Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`, datetimeEl);
        return;
      }
      const io = new IntersectionObserver((entries) => {
        const ev = entries[0];
        this.datetimeActive = ev.isIntersecting;
      }, {
        threshold: 0.01
      });
      io.observe(datetimeEl);
      const overlayEl = this.overlayEl = datetimeEl.closest("ion-modal, ion-popover");
      if (overlayEl) {
        overlayEl.classList.add("ion-datetime-button-overlay");
      }
      componentOnReady(datetimeEl, () => {
        const datetimePresentation = this.datetimePresentation = datetimeEl.presentation || "date-time";
        this.setDateTimeText();
        addEventListener(datetimeEl, "ionValueChange", this.setDateTimeText);
        switch (datetimePresentation) {
          case "date-time":
          case "date":
          case "month-year":
          case "month":
          case "year":
            this.selectedButton = "date";
            break;
          case "time-date":
          case "time":
            this.selectedButton = "time";
            break;
        }
      });
    });
  }
  render() {
    const {
      color,
      dateText,
      timeText,
      selectedButton,
      datetimeActive,
      disabled
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "26e606af6f067a5774db37ed41387ffebb941777",
      class: createColorClasses(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ["datetime-button-disabled"]: disabled
      })
    }, dateText && h("button", {
      key: "6b7aa66a15b4a6d89d411e40586de28a2ac9f343",
      class: "ion-activatable",
      id: "date-button",
      "aria-expanded": datetimeActive ? "true" : "false",
      onClick: this.handleDateClick,
      disabled,
      part: "native",
      ref: (el) => this.dateTargetEl = el
    }, h("slot", {
      key: "d42f34fd167be34386319e7ea788c2ab03c90b87",
      name: "date-target"
    }, dateText), mode === "md" && h("ion-ripple-effect", {
      key: "47dd34f3c2799064cac7a5fe25440ecc043950f0"
    })), timeText && h("button", {
      key: "d77424a20fae320654774c7bfc8a8e2369d3afe3",
      class: "ion-activatable",
      id: "time-button",
      "aria-expanded": datetimeActive ? "true" : "false",
      onClick: this.handleTimeClick,
      disabled,
      part: "native",
      ref: (el) => this.timeTargetEl = el
    }, h("slot", {
      key: "ac088a78141bb53f2efd48dd7745f8954c92378b",
      name: "time-target"
    }, timeText), mode === "md" && h("ion-ripple-effect", {
      key: "b3a58ddfd28b9396e2518ffd62a045ec13d8b9d0"
    })));
  }
  get el() {
    return getElement(this);
  }
};
DatetimeButton.style = {
  ios: IonDatetimeButtonIosStyle0,
  md: IonDatetimeButtonMdStyle0
};
export {
  DatetimeButton as ion_datetime_button
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-datetime-button.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBhIGFzIGFkZEV2ZW50TGlzdGVuZXIsIGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBhIGFzIHByaW50SW9uRXJyb3IgfSBmcm9tICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgeyBzIGFzIHBhcnNlRGF0ZSwgeCBhcyBnZXRUb2RheSwgTCBhcyBnZXRIb3VyQ3ljbGUsIE4gYXMgZ2V0TG9jYWxpemVkRGF0ZVRpbWUsIE0gYXMgZ2V0TG9jYWxpemVkVGltZSB9IGZyb20gJy4vZGF0YS0xNzRhZDVlMC5qcyc7XG5jb25zdCBkYXRldGltZUJ1dHRvbklvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCBidXR0b257Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoycHg7bWFyZ2luLWlubGluZS1lbmQ6MnB4O21hcmdpbi10b3A6MHB4O21hcmdpbi1ib3R0b206MHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjoxNTBtcyBjb2xvciBlYXNlLWluLW91dDt0cmFuc2l0aW9uOjE1MG1zIGNvbG9yIGVhc2UtaW4tb3V0O2JvcmRlcjpub25lO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTMwMCwgI2VkZWVmMCkpO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9Omhvc3QoLnRpbWUtYWN0aXZlKSAjdGltZS1idXR0b24sOmhvc3QoLmRhdGUtYWN0aXZlKSAjZGF0ZS1idXR0b257Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5kYXRldGltZS1idXR0b24tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLWJ1dHRvbi1kaXNhYmxlZCkgYnV0dG9ue29wYWNpdHk6MC40fTpob3N0IGJ1dHRvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweDtwYWRkaW5nLXRvcDo3cHg7cGFkZGluZy1ib3R0b206N3B4fTpob3N0IGJ1dHRvbi5pb24tYWN0aXZhdGVke2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKX1cIjtcbmNvbnN0IElvbkRhdGV0aW1lQnV0dG9uSW9zU3R5bGUwID0gZGF0ZXRpbWVCdXR0b25Jb3NDc3M7XG5jb25zdCBkYXRldGltZUJ1dHRvbk1kQ3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0IGJ1dHRvbntib3JkZXItcmFkaXVzOjhweDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHg7bWFyZ2luLXRvcDowcHg7bWFyZ2luLWJvdHRvbTowcHg7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOjE1MG1zIGNvbG9yIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246MTUwbXMgY29sb3IgZWFzZS1pbi1vdXQ7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzAwLCAjZWRlZWYwKSk7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX06aG9zdCgudGltZS1hY3RpdmUpICN0aW1lLWJ1dHRvbiw6aG9zdCguZGF0ZS1hY3RpdmUpICNkYXRlLWJ1dHRvbntjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmRhdGV0aW1lLWJ1dHRvbi1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkKSBidXR0b257b3BhY2l0eTowLjR9Omhvc3QgYnV0dG9uey13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9XCI7XG5jb25zdCBJb25EYXRldGltZUJ1dHRvbk1kU3R5bGUwID0gZGF0ZXRpbWVCdXR0b25NZENzcztcbmNvbnN0IERhdGV0aW1lQnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRhdGV0aW1lRWwgPSBudWxsO1xuICAgIHRoaXMub3ZlcmxheUVsID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBBY2NlcHRzIG9uZSBvciBtb3JlIHN0cmluZyB2YWx1ZXMgYW5kIGNvbnZlcnRzXG4gICAgICogdGhlbSB0byBEYXRldGltZVBhcnRzLiBUaGlzIGlzIGRvbmUgc28gZGF0ZXRpbWUtYnV0dG9uXG4gICAgICogY2FuIHdvcmsgd2l0aCBhbiBhcnJheSBpbnRlcm5hbGx5IGFuZCBub3QgbmVlZFxuICAgICAqIHRvIGtlZXAgY2hlY2tpbmcgaWYgdGhlIGRhdGV0aW1lIHZhbHVlIGlzIGBzdHJpbmdgIG9yIGBzdHJpbmdbXWAuXG4gICAgICovXG4gICAgdGhpcy5nZXRQYXJzZWREYXRlVmFsdWVzID0gdmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIHZhbHVlIHByb3BlcnR5IG9uIHRoZSBsaW5rZWRcbiAgICAgKiBpb24tZGF0ZXRpbWUgYW5kIHRoZW4gZm9ybWF0IGl0IGFjY29yZGluZ1xuICAgICAqIHRvIHRoZSBsb2NhbGUgc3BlY2lmaWVkIG9uIGlvbi1kYXRldGltZS5cbiAgICAgKi9cbiAgICB0aGlzLnNldERhdGVUaW1lVGV4dCA9ICgpID0+IHtcbiAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGV0aW1lRWwsXG4gICAgICAgIGRhdGV0aW1lUHJlc2VudGF0aW9uXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghZGF0ZXRpbWVFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICAgIGhvdXJDeWNsZSxcbiAgICAgICAgcHJlZmVyV2hlZWwsXG4gICAgICAgIG11bHRpcGxlLFxuICAgICAgICB0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXJcbiAgICAgIH0gPSBkYXRldGltZUVsO1xuICAgICAgY29uc3QgcGFyc2VkVmFsdWVzID0gdGhpcy5nZXRQYXJzZWREYXRlVmFsdWVzKHZhbHVlKTtcbiAgICAgIC8qKlxuICAgICAgICogQm90aCBpb24tZGF0ZXRpbWUgYW5kIGlvbi1kYXRldGltZS1idXR0b24gZGVmYXVsdFxuICAgICAgICogdG8gdG9kYXkncyBkYXRlIGFuZCB0aW1lIGlmIG5vIHZhbHVlIGlzIHNldC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZXRpbWVzID0gcGFyc2VEYXRlKHBhcnNlZFZhbHVlcy5sZW5ndGggPiAwID8gcGFyc2VkVmFsdWVzIDogW2dldFRvZGF5KCldKTtcbiAgICAgIGlmICghcGFyc2VkRGF0ZXRpbWVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSWYgZGV2ZWxvcGVycyBpbmNvcnJlY3RseSB1c2UgbXVsdGlwbGU9XCJ0cnVlXCJcbiAgICAgICAqIHdpdGggbm9uIFwiZGF0ZVwiIGRhdGV0aW1lcywgdGhlbiBqdXN0IHNlbGVjdFxuICAgICAgICogdGhlIGZpcnN0IHZhbHVlIHNvIHRoZSBpbnRlcmZhY2UgZG9lc1xuICAgICAgICogbm90IGFwcGVhciBicm9rZW4uIERhdGV0aW1lIHdpbGwgcHJvdmlkZSBhXG4gICAgICAgKiB3YXJuaW5nIGluIHRoZSBjb25zb2xlLlxuICAgICAgICovXG4gICAgICBjb25zdCBmaXJzdFBhcnNlZERhdGV0aW1lID0gcGFyc2VkRGF0ZXRpbWVzWzBdO1xuICAgICAgY29uc3QgY29tcHV0ZWRIb3VyQ3ljbGUgPSBnZXRIb3VyQ3ljbGUobG9jYWxlLCBob3VyQ3ljbGUpO1xuICAgICAgdGhpcy5kYXRlVGV4dCA9IHRoaXMudGltZVRleHQgPSB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKGRhdGV0aW1lUHJlc2VudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2RhdGUtdGltZSc6XG4gICAgICAgIGNhc2UgJ3RpbWUtZGF0ZSc6XG4gICAgICAgICAgY29uc3QgZGF0ZVRleHQgPSBnZXRMb2NhbGl6ZWREYXRlVGltZShsb2NhbGUsIGZpcnN0UGFyc2VkRGF0ZXRpbWUsIChfYSA9IGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy5kYXRlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7XG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgdGltZVRleHQgPSBnZXRMb2NhbGl6ZWRUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgY29tcHV0ZWRIb3VyQ3ljbGUsIGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy50aW1lKTtcbiAgICAgICAgICBpZiAocHJlZmVyV2hlZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRleHQgPSBgJHtkYXRlVGV4dH0gJHt0aW1lVGV4dH1gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUZXh0ID0gZGF0ZVRleHQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVUZXh0ID0gdGltZVRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICBpZiAobXVsdGlwbGUgJiYgcGFyc2VkVmFsdWVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgbGV0IGhlYWRlclRleHQgPSBgJHtwYXJzZWRWYWx1ZXMubGVuZ3RofSBkYXlzYDsgLy8gZGVmYXVsdC9mYWxsYmFjayBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXG4gICAgICAgICAgICBpZiAodGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ID0gdGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyKHBhcnNlZFZhbHVlcyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBwcmludElvbkVycm9yKCdFeGNlcHRpb24gaW4gcHJvdmlkZWQgYHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlcmA6ICcsIGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGVUZXh0ID0gaGVhZGVyVGV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGdldExvY2FsaXplZERhdGVUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgKF9iID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHtcbiAgICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgdGhpcy50aW1lVGV4dCA9IGdldExvY2FsaXplZFRpbWUobG9jYWxlLCBmaXJzdFBhcnNlZERhdGV0aW1lLCBjb21wdXRlZEhvdXJDeWNsZSwgZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aC15ZWFyJzpcbiAgICAgICAgICB0aGlzLmRhdGVUZXh0ID0gZ2V0TG9jYWxpemVkRGF0ZVRpbWUobG9jYWxlLCBmaXJzdFBhcnNlZERhdGV0aW1lLCAoX2MgPSBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMuZGF0ZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDoge1xuICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGdldExvY2FsaXplZERhdGVUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgKF9kID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHtcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGdldExvY2FsaXplZERhdGVUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgKF9lID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IHtcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV2FpdHMgZm9yIHRoZSBpb24tZGF0ZXRpbWUgdG8gcmUtcmVuZGVyLlxuICAgICAqIFRoaXMgaXMgbmVlZGVkIGluIG9yZGVyIHRvIGNvcnJlY3RseSBwb3NpdGlvblxuICAgICAqIGEgcG9wb3ZlciByZWxhdGl2ZSB0byB0aGUgdHJpZ2dlciBlbGVtZW50LlxuICAgICAqL1xuICAgIHRoaXMud2FpdEZvckRhdGV0aW1lQ2hhbmdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0ZXRpbWVFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWRhdGV0aW1lRWwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKGRhdGV0aW1lRWwsICdpb25SZW5kZXInLCByZXNvbHZlLCB7XG4gICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEYXRlQ2xpY2sgPSBhc3luYyBldiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGV0aW1lRWwsXG4gICAgICAgIGRhdGV0aW1lUHJlc2VudGF0aW9uXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghZGF0ZXRpbWVFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbmVlZHNQcmVzZW50YXRpb25DaGFuZ2UgPSBmYWxzZTtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBjbGlja2luZyB0aGUgZGF0ZSBidXR0b24sXG4gICAgICAgKiB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IG9ubHkgYSBkYXRlXG4gICAgICAgKiBwaWNrZXIgaXMgZGlzcGxheWVkLiBGb3IgcHJlc2VudGF0aW9uIHN0eWxlc1xuICAgICAgICogdGhhdCBkaXNwbGF5IGNvbnRlbnQgb3RoZXIgdGhhbiBhIGRhdGUgcGlja2VyLFxuICAgICAgICogd2UgbmVlZCB0byB1cGRhdGUgdGhlIHByZXNlbnRhdGlvbiBzdHlsZS5cbiAgICAgICAqL1xuICAgICAgc3dpdGNoIChkYXRldGltZVByZXNlbnRhdGlvbikge1xuICAgICAgICBjYXNlICdkYXRlLXRpbWUnOlxuICAgICAgICBjYXNlICd0aW1lLWRhdGUnOlxuICAgICAgICAgIGNvbnN0IG5lZWRzQ2hhbmdlID0gZGF0ZXRpbWVFbC5wcmVzZW50YXRpb24gIT09ICdkYXRlJztcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgZGF0ZSt0aW1lIHdoZWVsIHBpY2tlclxuICAgICAgICAgICAqIHNob3dzIGRhdGUgYW5kIHRpbWUgdG9nZXRoZXIsXG4gICAgICAgICAgICogc28gZG8gbm90IGFkanVzdCB0aGUgcHJlc2VudGF0aW9uXG4gICAgICAgICAgICogaW4gdGhhdCBjYXNlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghZGF0ZXRpbWVFbC5wcmVmZXJXaGVlbCAmJiBuZWVkc0NoYW5nZSkge1xuICAgICAgICAgICAgZGF0ZXRpbWVFbC5wcmVzZW50YXRpb24gPSAnZGF0ZSc7XG4gICAgICAgICAgICBuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmFjayB3aGljaCBidXR0b24gd2FzIGNsaWNrZWRcbiAgICAgICAqIHNvIHRoYXQgaXQgY2FuIGhhdmUgdGhlIGNvcnJlY3RcbiAgICAgICAqIGFjdGl2YXRlZCBzdHlsZXMgYXBwbGllZCB3aGVuXG4gICAgICAgKiB0aGUgbW9kYWwvcG9wb3ZlciBjb250YWluaW5nXG4gICAgICAgKiB0aGUgZGF0ZXRpbWUgaXMgb3BlbmVkLlxuICAgICAgICovXG4gICAgICB0aGlzLnNlbGVjdGVkQnV0dG9uID0gJ2RhdGUnO1xuICAgICAgdGhpcy5wcmVzZW50T3ZlcmxheShldiwgbmVlZHNQcmVzZW50YXRpb25DaGFuZ2UsIHRoaXMuZGF0ZVRhcmdldEVsKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVGltZUNsaWNrID0gZXYgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRldGltZUVsLFxuICAgICAgICBkYXRldGltZVByZXNlbnRhdGlvblxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWRhdGV0aW1lRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IG5lZWRzUHJlc2VudGF0aW9uQ2hhbmdlID0gZmFsc2U7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gY2xpY2tpbmcgdGhlIHRpbWUgYnV0dG9uLFxuICAgICAgICogd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCBvbmx5IGEgdGltZVxuICAgICAgICogcGlja2VyIGlzIGRpc3BsYXllZC4gRm9yIHByZXNlbnRhdGlvbiBzdHlsZXNcbiAgICAgICAqIHRoYXQgZGlzcGxheSBjb250ZW50IG90aGVyIHRoYW4gYSB0aW1lIHBpY2tlcixcbiAgICAgICAqIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBwcmVzZW50YXRpb24gc3R5bGUuXG4gICAgICAgKi9cbiAgICAgIHN3aXRjaCAoZGF0ZXRpbWVQcmVzZW50YXRpb24pIHtcbiAgICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgY2FzZSAndGltZS1kYXRlJzpcbiAgICAgICAgICBjb25zdCBuZWVkc0NoYW5nZSA9IGRhdGV0aW1lRWwucHJlc2VudGF0aW9uICE9PSAndGltZSc7XG4gICAgICAgICAgaWYgKG5lZWRzQ2hhbmdlKSB7XG4gICAgICAgICAgICBkYXRldGltZUVsLnByZXNlbnRhdGlvbiA9ICd0aW1lJztcbiAgICAgICAgICAgIG5lZWRzUHJlc2VudGF0aW9uQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyYWNrIHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZFxuICAgICAgICogc28gdGhhdCBpdCBjYW4gaGF2ZSB0aGUgY29ycmVjdFxuICAgICAgICogYWN0aXZhdGVkIHN0eWxlcyBhcHBsaWVkIHdoZW5cbiAgICAgICAqIHRoZSBtb2RhbC9wb3BvdmVyIGNvbnRhaW5pbmdcbiAgICAgICAqIHRoZSBkYXRldGltZSBpcyBvcGVuZWQuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuc2VsZWN0ZWRCdXR0b24gPSAndGltZSc7XG4gICAgICB0aGlzLnByZXNlbnRPdmVybGF5KGV2LCBuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSwgdGhpcy50aW1lVGFyZ2V0RWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGRhdGV0aW1lIGlzIHByZXNlbnRlZCBpbiBhblxuICAgICAqIG92ZXJsYXksIHRoZSBkYXRldGltZSBhbmQgb3ZlcmxheVxuICAgICAqIHNob3VsZCBiZSBhcHByb3ByaWF0ZWx5IHNpemVkLlxuICAgICAqIFRoZXNlIGNsYXNzZXMgcHJvdmlkZSBkZWZhdWx0IHNpemluZyB2YWx1ZXNcbiAgICAgKiB0aGF0IGRldmVsb3BlcnMgY2FuIGN1c3RvbWl6ZS5cbiAgICAgKiBUaGUgZ29hbCBpcyB0byBwcm92aWRlIGFuIG92ZXJsYXkgdGhhdCBpc1xuICAgICAqIHJlYXNvbmFibHkgc2l6ZWQgd2l0aCBhIGRhdGV0aW1lIHRoYXRcbiAgICAgKiBmaWxscyB0aGUgZW50aXJlIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICB0aGlzLnByZXNlbnRPdmVybGF5ID0gYXN5bmMgKGV2LCBuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSwgdHJpZ2dlckVsKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG92ZXJsYXlFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIW92ZXJsYXlFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3ZlcmxheUVsLnRhZ05hbWUgPT09ICdJT04tUE9QT1ZFUicpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdGhlIHByZXNlbnRhdGlvbiBvbiBkYXRldGltZSBjaGFuZ2VzLFxuICAgICAgICAgKiB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyXG4gICAgICAgICAqIG90aGVyd2lzZSB0aGUgY29tcHV0ZWQgd2lkdGgvaGVpZ2h0IG9mIHRoZVxuICAgICAgICAgKiBwb3BvdmVyIGNvbnRlbnQgd2lsbCBiZSB3cm9uZywgY2F1c2luZ1xuICAgICAgICAgKiB0aGUgcG9wb3ZlciB0byBub3QgYWxpZ24gd2l0aCB0aGUgdHJpZ2dlciBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG5lZWRzUHJlc2VudGF0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy53YWl0Rm9yRGF0ZXRpbWVDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHBhc3MgdGhlIHRyaWdnZXIgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICogc28gdGhhdCB0aGUgcG9wb3ZlciBhbGlnbnMgd2l0aCB0aGUgaW5kaXZpZHVhbFxuICAgICAgICAgKiBidXR0b24gdGhhdCB3YXMgY2xpY2tlZCwgbm90IHRoZSBjb21wb25lbnQgY29udGFpbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgb3ZlcmxheUVsLnByZXNlbnQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBldiksIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIGlvblNoYWRvd1RhcmdldDogdHJpZ2dlckVsXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdmVybGF5RWwucHJlc2VudCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5kYXRldGltZVByZXNlbnRhdGlvbiA9ICdkYXRlLXRpbWUnO1xuICAgIHRoaXMuZGF0ZVRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50aW1lVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGV0aW1lQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRhdGV0aW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGV0aW1lXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFkYXRldGltZSkge1xuICAgICAgcHJpbnRJb25FcnJvcignQW4gSUQgYXNzb2NpYXRlZCB3aXRoIGFuIGlvbi1kYXRldGltZSBpbnN0YW5jZSBpcyByZXF1aXJlZCBmb3IgaW9uLWRhdGV0aW1lLWJ1dHRvbiB0byBmdW5jdGlvbiBwcm9wZXJseS4nLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0ZXRpbWVFbCA9IHRoaXMuZGF0ZXRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGV0aW1lKTtcbiAgICBpZiAoIWRhdGV0aW1lRWwpIHtcbiAgICAgIHByaW50SW9uRXJyb3IoYE5vIGlvbi1kYXRldGltZSBpbnN0YW5jZSBmb3VuZCBmb3IgSUQgJyR7ZGF0ZXRpbWV9Jy5gLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgcmVmZXJlbmNlIG11c3QgYmUgYW4gaW9uLWRhdGV0aW1lLiBQcmludCBhbiBlcnJvclxuICAgICAqIGlmIGEgbm9uLWRhdGV0aW1lIGVsZW1lbnQgd2FzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGlmIChkYXRldGltZUVsLnRhZ05hbWUgIT09ICdJT04tREFURVRJTUUnKSB7XG4gICAgICBwcmludElvbkVycm9yKGBFeHBlY3RlZCBhbiBpb24tZGF0ZXRpbWUgaW5zdGFuY2UgZm9yIElEICcke2RhdGV0aW1lfScgYnV0IHJlY2VpdmVkICcke2RhdGV0aW1lRWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpfScgaW5zdGVhZC5gLCBkYXRldGltZUVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2luY2UgdGhlIGRhdGV0aW1lIGNhbiBiZSB1c2VkIGluIGFueSBjb250ZXh0IChvdmVybGF5cywgYWNjb3JkaW9uLCBldGMpXG4gICAgICogd2UgdHJhY2sgd2hlbiBpdCBpcyB2aXNpYmxlIHRvIGRldGVybWluZSB3aGVuIGl0IGlzIGFjdGl2ZS5cbiAgICAgKiBUaGlzIGluZm9ybXMgd2hpY2ggYnV0dG9uIGlzIGhpZ2hsaWdodGVkIGFzIHdlbGwgYXMgdGhlXG4gICAgICogYXJpYS1leHBhbmRlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBjb25zdCBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGV2ID0gZW50cmllc1swXTtcbiAgICAgIHRoaXMuZGF0ZXRpbWVBY3RpdmUgPSBldi5pc0ludGVyc2VjdGluZztcbiAgICB9LCB7XG4gICAgICB0aHJlc2hvbGQ6IDAuMDFcbiAgICB9KTtcbiAgICBpby5vYnNlcnZlKGRhdGV0aW1lRWwpO1xuICAgIC8qKlxuICAgICAqIEdldCBhIHJlZmVyZW5jZSB0byBhbnkgbW9kYWwvcG9wb3ZlclxuICAgICAqIHRoZSBkYXRldGltZSBpcyBiZWluZyB1c2VkIGluIHNvIHdlIGNhblxuICAgICAqIGNvcnJlY3RseSBzaXplIGl0IHdoZW4gaXQgaXMgcHJlc2VudGVkLlxuICAgICAqL1xuICAgIGNvbnN0IG92ZXJsYXlFbCA9IHRoaXMub3ZlcmxheUVsID0gZGF0ZXRpbWVFbC5jbG9zZXN0KCdpb24tbW9kYWwsIGlvbi1wb3BvdmVyJyk7XG4gICAgLyoqXG4gICAgICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAgICAgKiBzdHlsZXMgdGhhdCBhbGxvdyBhbnkgbW9kYWwvcG9wb3ZlciB0byBiZVxuICAgICAqIHNpemVkIGFjY29yZGluZyB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZGF0ZXRpbWUuXG4gICAgICogSWYgZGV2ZWxvcGVycyB3YW50IGEgc21hbGxlci9sYXJnZXIgb3ZlcmxheSBhbGwgdGhleSBuZWVkXG4gICAgICogdG8gZG8gaXMgY2hhbmdlIHRoZSB3aWR0aC9oZWlnaHQgb2YgdGhlIGRhdGV0aW1lLlxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhpcyBsZXRzIHVzIGF2b2lkIGhhdmluZyB0byBzZXRcbiAgICAgKiBleHBsaWNpdCB3aWR0aHMgb24gZWFjaCB2YXJpYW50IG9mIGRhdGV0aW1lLlxuICAgICAqL1xuICAgIGlmIChvdmVybGF5RWwpIHtcbiAgICAgIG92ZXJsYXlFbC5jbGFzc0xpc3QuYWRkKCdpb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXknKTtcbiAgICB9XG4gICAgY29tcG9uZW50T25SZWFkeShkYXRldGltZUVsLCAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRldGltZVByZXNlbnRhdGlvbiA9IHRoaXMuZGF0ZXRpbWVQcmVzZW50YXRpb24gPSBkYXRldGltZUVsLnByZXNlbnRhdGlvbiB8fCAnZGF0ZS10aW1lJztcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSBpbml0aWFsIGRpc3BsYXlcbiAgICAgICAqIGluIHRoZSByZW5kZXJlZCBidXR0b25zLlxuICAgICAgICpcbiAgICAgICAqIEZyb20gdGhlcmUsIHdlIG5lZWQgdG8gbGlzdGVuXG4gICAgICAgKiBmb3IgaW9uQ2hhbmdlIHRvIGJlIGVtaXR0ZWRcbiAgICAgICAqIGZyb20gZGF0ZXRpbWUgc28gd2Uga25vdyB3aGVuXG4gICAgICAgKiB0byByZS1yZW5kZXIgdGhlIGRpc3BsYXllZFxuICAgICAgICogdGV4dCBpbiB0aGUgYnV0dG9ucy5cbiAgICAgICAqL1xuICAgICAgdGhpcy5zZXREYXRlVGltZVRleHQoKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZGF0ZXRpbWVFbCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy5zZXREYXRlVGltZVRleHQpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb25maWd1cmUgdGhlIGluaXRpYWwgc2VsZWN0ZWQgYnV0dG9uXG4gICAgICAgKiBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGF0ZXRpbWUgaXMgZGlzcGxheWVkXG4gICAgICAgKiB3aXRob3V0IGNsaWNraW5nIG9uZSBvZiB0aGUgZGF0ZXRpbWUgYnV0dG9ucy5cbiAgICAgICAqIEZvciBleGFtcGxlLCBhIGRhdGV0aW1lIGNvdWxkIGJlIGV4cGFuZGVkXG4gICAgICAgKiBpbiBhbiBhY2NvcmRpb24uIEluIHRoaXMgY2FzZSB1c2VycyBvbmx5XG4gICAgICAgKiBuZWVkIHRvIGNsaWNrIHRoZSBhY2NvcmRpb24gaGVhZGVyIHRvIHNob3dcbiAgICAgICAqIHRoZSBkYXRldGltZS5cbiAgICAgICAqL1xuICAgICAgc3dpdGNoIChkYXRldGltZVByZXNlbnRhdGlvbikge1xuICAgICAgICBjYXNlICdkYXRlLXRpbWUnOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9ICdkYXRlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGltZS1kYXRlJzpcbiAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9ICd0aW1lJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3IsXG4gICAgICBkYXRlVGV4dCxcbiAgICAgIHRpbWVUZXh0LFxuICAgICAgc2VsZWN0ZWRCdXR0b24sXG4gICAgICBkYXRldGltZUFjdGl2ZSxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMjZlNjA2YWY2ZjA2N2E1Nzc0ZGIzN2VkNDEzODdmZmViYjk0MTc3NycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgW2Ake3NlbGVjdGVkQnV0dG9ufS1hY3RpdmVgXTogZGF0ZXRpbWVBY3RpdmUsXG4gICAgICAgIFsnZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkJ106IGRpc2FibGVkXG4gICAgICB9KVxuICAgIH0sIGRhdGVUZXh0ICYmIGgoXCJidXR0b25cIiwge1xuICAgICAga2V5OiAnNmI3YWE2NmExNWI0YTZkODlkNDExZTQwNTg2ZGUyOGEyYWM5ZjM0MycsXG4gICAgICBjbGFzczogXCJpb24tYWN0aXZhdGFibGVcIixcbiAgICAgIGlkOiBcImRhdGUtYnV0dG9uXCIsXG4gICAgICBcImFyaWEtZXhwYW5kZWRcIjogZGF0ZXRpbWVBY3RpdmUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVEYXRlQ2xpY2ssXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBwYXJ0OiBcIm5hdGl2ZVwiLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmRhdGVUYXJnZXRFbCA9IGVsXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZDQyZjM0ZmQxNjdiZTM0Mzg2MzE5ZTdlYTc4OGMyYWIwM2M5MGI4NycsXG4gICAgICBuYW1lOiBcImRhdGUtdGFyZ2V0XCJcbiAgICB9LCBkYXRlVGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHtcbiAgICAgIGtleTogJzQ3ZGQzNGYzYzI3OTkwNjRjYWM3YTVmZTI1NDQwZWNjMDQzOTUwZjAnXG4gICAgfSkpLCB0aW1lVGV4dCAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJ2Q3NzQyNGEyMGZhZTMyMDY1NDc3NGM3YmZjOGE4ZTIzNjlkM2FmZTMnLFxuICAgICAgY2xhc3M6IFwiaW9uLWFjdGl2YXRhYmxlXCIsXG4gICAgICBpZDogXCJ0aW1lLWJ1dHRvblwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IGRhdGV0aW1lQWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVGltZUNsaWNrLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgcGFydDogXCJuYXRpdmVcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy50aW1lVGFyZ2V0RWwgPSBlbFxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2FjMDg4YTc4MTQxYmI1M2YyZWZkNDhkZDc3NDVmODk1NGM5MjM3OGInLFxuICAgICAgbmFtZTogXCJ0aW1lLXRhcmdldFwiXG4gICAgfSwgdGltZVRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7XG4gICAgICBrZXk6ICdiM2E1OGRkZmQyOGI5Mzk2ZTI1MThmZmQ2MmEwNDVlYzEzZDhiOWQwJ1xuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuRGF0ZXRpbWVCdXR0b24uc3R5bGUgPSB7XG4gIGlvczogSW9uRGF0ZXRpbWVCdXR0b25Jb3NTdHlsZTAsXG4gIG1kOiBJb25EYXRldGltZUJ1dHRvbk1kU3R5bGUwXG59O1xuZXhwb3J0IHsgRGF0ZXRpbWVCdXR0b24gYXMgaW9uX2RhdGV0aW1lX2J1dHRvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU0sdUJBQXVCO0FBQzdCLElBQU0sNkJBQTZCO0FBQ25DLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sNEJBQTRCO0FBQ2xDLElBQU0saUJBQWlCLE1BQU07QUFBQSxFQUMzQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLGFBQWE7QUFDbEIsU0FBSyxZQUFZO0FBT2pCLFNBQUssc0JBQXNCLFdBQVM7QUFDbEMsVUFBSSxVQUFVLFVBQWEsVUFBVSxNQUFNO0FBQ3pDLGVBQU8sQ0FBQztBQUFBLE1BQ1Y7QUFDQSxVQUFJLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDeEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLENBQUMsS0FBSztBQUFBLElBQ2Y7QUFNQSxTQUFLLGtC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
