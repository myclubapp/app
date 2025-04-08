import {
  findClosestIonContent,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-7QVPRCLC.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-HHPBBMWP.js";
import "./chunk-5HIO5JVM.js";
import "./chunk-RRWPYKYY.js";
import {
  config,
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js
var infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
var IonInfiniteScrollStyle0 = infiniteScrollCss;
var InfiniteScroll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInfinite = createEvent(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === "bottom" ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      }
      return 4;
    };
    this.isLoading = false;
    this.threshold = "15%";
    this.disabled = false;
    this.position = "bottom";
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf("%") > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    } else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const contentEl = findClosestIonContent(this.el);
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      this.scrollEl = yield getScrollElement(contentEl);
      this.thresholdChanged();
      this.disabledChanged();
      if (this.position === "top") {
        writeTask(() => {
          if (this.scrollEl) {
            this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
          }
        });
      }
    });
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = void 0;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  complete() {
    return __async(this, null, function* () {
      const scrollEl = this.scrollEl;
      if (!this.isLoading || !scrollEl) {
        return;
      }
      this.isLoading = false;
      if (this.position === "top") {
        this.isBusy = true;
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
        requestAnimationFrame(() => {
          readTask(() => {
            const scrollHeight = scrollEl.scrollHeight;
            const newScrollTop = scrollHeight - prev;
            requestAnimationFrame(() => {
              writeTask(() => {
                scrollEl.scrollTop = newScrollTop;
                this.isBusy = false;
                this.didFire = false;
              });
            });
          });
        });
      } else {
        this.didFire = false;
      }
    });
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener("scroll", this.onScroll);
      } else {
        this.scrollEl.removeEventListener("scroll", this.onScroll);
      }
    }
  }
  render() {
    const mode = getIonMode(this);
    const disabled = this.disabled;
    return h(Host, {
      key: "e844956795f69be33396ce4480aa7a54ad01b28c",
      class: {
        [mode]: true,
        "infinite-scroll-loading": this.isLoading,
        "infinite-scroll-enabled": !disabled
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "threshold": ["thresholdChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
InfiniteScroll.style = IonInfiniteScrollStyle0;
var infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var IonInfiniteScrollContentIosStyle0 = infiniteScrollContentIosCss;
var infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var IonInfiniteScrollContentMdStyle0 = infiniteScrollContentMdCss;
var InfiniteScrollContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.loadingSpinner = void 0;
    this.loadingText = void 0;
  }
  componentDidLoad() {
    if (this.loadingSpinner === void 0) {
      const mode = getIonMode(this);
      this.loadingSpinner = config.get("infiniteLoadingSpinner", config.get("spinner", mode === "ios" ? "lines" : "crescent"));
    }
  }
  renderLoadingText() {
    const {
      customHTMLEnabled,
      loadingText
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "infinite-loading-text",
        innerHTML: sanitizeDOMString(loadingText)
      });
    }
    return h("div", {
      class: "infinite-loading-text"
    }, this.loadingText);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "7c16060dcfe2a0b0fb3e2f8f4c449589a76f1baa",
      class: {
        [mode]: true,
        // Used internally for styling
        [`infinite-scroll-content-${mode}`]: true
      }
    }, h("div", {
      key: "a94f4d8746e053dc718f97520bd7e48cb316443a",
      class: "infinite-loading"
    }, this.loadingSpinner && h("div", {
      key: "10143d5d2a50a2a2bc5de1cee8e7ab51263bcf23",
      class: "infinite-loading-spinner"
    }, h("ion-spinner", {
      key: "8846e88191690d9c61a0b462889ed56fbfed8b0d",
      name: this.loadingSpinner
    })), this.loadingText !== void 0 && this.renderLoadingText()));
  }
};
InfiniteScrollContent.style = {
  ios: IonInfiniteScrollContentIosStyle0,
  md: IonInfiniteScrollContentMdStyle0
};
export {
  InfiniteScroll as ion_infinite_scroll,
  InfiniteScrollContent as ion_infinite_scroll_content
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW5maW5pdGUtc2Nyb2xsXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgdyBhcyB3cml0ZVRhc2ssIGQgYXMgcmVhZFRhc2ssIGgsIGYgYXMgZ2V0RWxlbWVudCwgZSBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgcCBhcyBwcmludElvbkNvbnRlbnRFcnJvck1zZywgZyBhcyBnZXRTY3JvbGxFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1lOTE5ZTM1My5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUsIGMgYXMgY29uZmlnIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0IHsgRSBhcyBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQsIGEgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2NvbmZpZy00OWM4ODIxNS5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuY29uc3QgaW5maW5pdGVTY3JvbGxDc3MgPSBcImlvbi1pbmZpbml0ZS1zY3JvbGx7ZGlzcGxheTpub25lO3dpZHRoOjEwMCV9LmluZmluaXRlLXNjcm9sbC1lbmFibGVke2Rpc3BsYXk6YmxvY2t9XCI7XG5jb25zdCBJb25JbmZpbml0ZVNjcm9sbFN0eWxlMCA9IGluZmluaXRlU2Nyb2xsQ3NzO1xuY29uc3QgSW5maW5pdGVTY3JvbGwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uSW5maW5pdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkluZmluaXRlXCIsIDcpO1xuICAgIHRoaXMudGhyUHggPSAwO1xuICAgIHRoaXMudGhyUGMgPSAwO1xuICAgIC8qKlxuICAgICAqIGRpZEZpcmUgZXhpc3RzIHNvIHRoYXQgaW9uSW5maW5pdGVcbiAgICAgKiBkb2VzIG5vdCBmaXJlIG11bHRpcGxlIHRpbWVzIGlmXG4gICAgICogdXNlcnMgY29udGludWUgdG8gc2Nyb2xsIGFmdGVyXG4gICAgICogc2Nyb2xsaW5nIGludG8gdGhlIGluZmluaXRlXG4gICAgICogc2Nyb2xsIHRocmVzaG9sZC5cbiAgICAgKi9cbiAgICB0aGlzLmRpZEZpcmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgIHRoaXMub25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgICBpZiAoIXNjcm9sbEVsIHx8ICF0aGlzLmNhblN0YXJ0KCkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBpbmZpbml0ZUhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKGluZmluaXRlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGhlaWdodCBvZiB0aGlzIGVsZW1lbnQgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgIHJldHVybiAyO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy50aHJQYyAhPT0gMCA/IGhlaWdodCAqIHRoaXMudGhyUGMgOiB0aGlzLnRoclB4O1xuICAgICAgY29uc3QgZGlzdGFuY2VGcm9tSW5maW5pdGUgPSB0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJyA/IHNjcm9sbEhlaWdodCAtIGluZmluaXRlSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gdGhyZXNob2xkIC0gaGVpZ2h0IDogc2Nyb2xsVG9wIC0gaW5maW5pdGVIZWlnaHQgLSB0aHJlc2hvbGQ7XG4gICAgICBpZiAoZGlzdGFuY2VGcm9tSW5maW5pdGUgPCAwKSB7XG4gICAgICAgIGlmICghdGhpcy5kaWRGaXJlKSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZGlkRmlyZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5pb25JbmZpbml0ZS5lbWl0KCk7XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiA0O1xuICAgIH07XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRocmVzaG9sZCA9ICcxNSUnO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gIH1cbiAgdGhyZXNob2xkQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnRocmVzaG9sZDtcbiAgICBpZiAodmFsLmxhc3RJbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgdGhpcy50aHJQeCA9IDA7XG4gICAgICB0aGlzLnRoclBjID0gcGFyc2VGbG9hdCh2YWwpIC8gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRoclB4ID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgdGhpcy50aHJQYyA9IDA7XG4gICAgfVxuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVTY3JvbGxFdmVudHMoIWRpc2FibGVkKTtcbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQodGhpcy5lbCk7XG4gICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgIHByaW50SW9uQ29udGVudEVycm9yTXNnKHRoaXMuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgIHRoaXMudGhyZXNob2xkQ2hhbmdlZCgpO1xuICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB0aGlzLnNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZW5hYmxlU2Nyb2xsRXZlbnRzKGZhbHNlKTtcbiAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aXRoaW4gdGhlIGBpb25JbmZpbml0ZWAgb3V0cHV0IGV2ZW50IGhhbmRsZXIgd2hlblxuICAgKiB5b3VyIGFzeW5jIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLiBGb3IgZXhhbXBsZSwgdGhlIGBsb2FkaW5nYFxuICAgKiBzdGF0ZSBpcyB3aGlsZSB0aGUgYXBwIGlzIHBlcmZvcm1pbmcgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbixcbiAgICogc3VjaCBhcyByZWNlaXZpbmcgbW9yZSBkYXRhIGZyb20gYW4gQUpBWCByZXF1ZXN0IHRvIGFkZCBtb3JlIGl0ZW1zXG4gICAqIHRvIGEgZGF0YSBsaXN0LiBPbmNlIHRoZSBkYXRhIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBVSSB1cGRhdGVkLCB5b3VcbiAgICogdGhlbiBjYWxsIHRoaXMgbWV0aG9kIHRvIHNpZ25pZnkgdGhhdCB0aGUgbG9hZGluZyBoYXMgY29tcGxldGVkLlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNoYW5nZSB0aGUgaW5maW5pdGUgc2Nyb2xsJ3Mgc3RhdGUgZnJvbSBgbG9hZGluZ2BcbiAgICogdG8gYGVuYWJsZWRgLlxuICAgKi9cbiAgYXN5bmMgY29tcGxldGUoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgIGlmICghdGhpcy5pc0xvYWRpbmcgfHwgIXNjcm9sbEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAvKipcbiAgICAgICAqIE5ldyBjb250ZW50IGlzIGJlaW5nIGFkZGVkIGF0IHRoZSB0b3AsIGJ1dCB0aGUgc2Nyb2xsVG9wIHBvc2l0aW9uIHN0YXlzIHRoZSBzYW1lLFxuICAgICAgICogd2hpY2ggY2F1c2VzIGEgc2Nyb2xsIGp1bXAgdmlzdWFsbHkuIFRoaXMgYWxnb3JpdGhtIG1ha2VzIHN1cmUgdG8gcHJldmVudCB0aGlzLlxuICAgICAgICogKEZyYW1lIDEpXG4gICAgICAgKiAgICAtIGNvbXBsZXRlKCkgaXMgY2FsbGVkLCBidXQgdGhlIFVJIGhhc24ndCBoYWQgdGltZSB0byB1cGRhdGUgeWV0LlxuICAgICAgICogICAgLSBTYXZlIHRoZSBjdXJyZW50IGNvbnRlbnQgZGltZW5zaW9ucy5cbiAgICAgICAqICAgIC0gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUgdXNpbmcgX2RvbS5yZWFkLCBzbyB0aGUgVUkgd2lsbCBiZSB1cGRhdGVkLlxuICAgICAgICogKEZyYW1lIDIpXG4gICAgICAgKiAgICAtIFJlYWQgdGhlIG5ldyBjb250ZW50IGRpbWVuc2lvbnMuXG4gICAgICAgKiAgICAtIENhbGN1bGF0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2UgYW5kIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICogICAgLSBEZWxheSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGNoYW5nZSB1bnRpbCBvdGhlciBwb3NzaWJsZSBkb20gcmVhZHMgYXJlIGRvbmUgdXNpbmcgX2RvbS53cml0ZSB0byBiZSBwZXJmb3JtYW50LlxuICAgICAgICogKFN0aWxsIGZyYW1lIDIsIGlmIEknbSBjb3JyZWN0KVxuICAgICAgICogICAgLSBDaGFuZ2UgdGhlIHNjcm9sbCBwb3NpdGlvbiAoPSB2aXN1YWxseSBtYWludGFpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uKS5cbiAgICAgICAqICAgIC0gQ2hhbmdlIHRoZSBzdGF0ZSB0byByZS1lbmFibGUgdGhlIEluZmluaXRlU2Nyb2xsLlxuICAgICAgICogICAgLSBUaGlzIHNob3VsZCBiZSBhZnRlciBjaGFuZ2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uLCBvciBpdCBjb3VsZFxuICAgICAgICogICAgY2F1c2UgdGhlIEluZmluaXRlU2Nyb2xsIHRvIGJlIHRyaWdnZXJlZCBhZ2FpbiBpbW1lZGlhdGVseS5cbiAgICAgICAqIChGcmFtZSAzKVxuICAgICAgICogICAgRG9uZS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xuICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBjb250ZW50IGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBVSSB1cGRhdGVzXG4gICAgICBjb25zdCBwcmV2ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICAgIC8vIFVJIGhhcyB1cGRhdGVkLCBzYXZlIHRoZSBuZXcgY29udGVudCBkaW1lbnNpb25zXG4gICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgIC8vIE5ldyBjb250ZW50IHdhcyBhZGRlZCBvbiB0b3AsIHNvIHRoZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGJlIGNoYW5nZWQgaW1tZWRpYXRlbHkgdG8gcHJldmVudCBpdCBmcm9tIGp1bXBpbmcgYXJvdW5kXG4gICAgICAgICAgY29uc3QgbmV3U2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gcHJldjtcbiAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlkRmlyZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBjYW5TdGFydCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNCdXN5ICYmICEhdGhpcy5zY3JvbGxFbCAmJiAhdGhpcy5pc0xvYWRpbmc7XG4gIH1cbiAgZW5hYmxlU2Nyb2xsRXZlbnRzKHNob3VsZExpc3Rlbikge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICBpZiAoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2U4NDQ5NTY3OTVmNjliZTMzMzk2Y2U0NDgwYWE3YTU0YWQwMWIyOGMnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW5maW5pdGUtc2Nyb2xsLWxvYWRpbmcnOiB0aGlzLmlzTG9hZGluZyxcbiAgICAgICAgJ2luZmluaXRlLXNjcm9sbC1lbmFibGVkJzogIWRpc2FibGVkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwidGhyZXNob2xkXCI6IFtcInRocmVzaG9sZENoYW5nZWRcIl0sXG4gICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5JbmZpbml0ZVNjcm9sbC5zdHlsZSA9IElvbkluZmluaXRlU2Nyb2xsU3R5bGUwO1xuY29uc3QgaW5maW5pdGVTY3JvbGxDb250ZW50SW9zQ3NzID0gXCJpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taGVpZ2h0Ojg0cHg7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pbmZpbml0ZS1sb2FkaW5ne21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MzJweDtkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0uaW5maW5pdGUtbG9hZGluZy10ZXh0ey13ZWJraXQtbWFyZ2luLXN0YXJ0OjMycHg7bWFyZ2luLWlubGluZS1zdGFydDozMnB4Oy13ZWJraXQtbWFyZ2luLWVuZDozMnB4O21hcmdpbi1pbmxpbmUtZW5kOjMycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTowfS5pbmZpbml0ZS1zY3JvbGwtbG9hZGluZyBpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+LmluZmluaXRlLWxvYWRpbmd7ZGlzcGxheTpibG9ja30uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1saW5lcy1pb3MgbGluZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItbGluZXMtc21hbGwtaW9zIGxpbmUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZXtzdHJva2U6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1idWJibGVzIGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWRvdHMgY2lyY2xle2ZpbGw6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpfVwiO1xuY29uc3QgSW9uSW5maW5pdGVTY3JvbGxDb250ZW50SW9zU3R5bGUwID0gaW5maW5pdGVTY3JvbGxDb250ZW50SW9zQ3NzO1xuY29uc3QgaW5maW5pdGVTY3JvbGxDb250ZW50TWRDc3MgPSBcImlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi1oZWlnaHQ6ODRweDt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmluZmluaXRlLWxvYWRpbmd7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTozMnB4O2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5pbmZpbml0ZS1sb2FkaW5nLXRleHR7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MzJweDttYXJnaW4taW5saW5lLXN0YXJ0OjMycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjMycHg7bWFyZ2luLWlubGluZS1lbmQ6MzJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjB9LmluZmluaXRlLXNjcm9sbC1sb2FkaW5nIGlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD4uaW5maW5pdGUtbG9hZGluZ3tkaXNwbGF5OmJsb2NrfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy10ZXh0e2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKX0uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1saW5lcy1tZCBsaW5lLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWxpbmVzLXNtYWxsLW1kIGxpbmUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xle3N0cm9rZTp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSl9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItYnViYmxlcyBjaXJjbGUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItZG90cyBjaXJjbGV7ZmlsbDp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSl9XCI7XG5jb25zdCBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnRNZFN0eWxlMCA9IGluZmluaXRlU2Nyb2xsQ29udGVudE1kQ3NzO1xuY29uc3QgSW5maW5pdGVTY3JvbGxDb250ZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmN1c3RvbUhUTUxFbmFibGVkID0gY29uZmlnLmdldCgnaW5uZXJIVE1MVGVtcGxhdGVzRW5hYmxlZCcsIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCk7XG4gICAgdGhpcy5sb2FkaW5nU3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdW5kZWZpbmVkO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICB0aGlzLmxvYWRpbmdTcGlubmVyID0gY29uZmlnLmdldCgnaW5maW5pdGVMb2FkaW5nU3Bpbm5lcicsIGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBtb2RlID09PSAnaW9zJyA/ICdsaW5lcycgOiAnY3Jlc2NlbnQnKSk7XG4gICAgfVxuICB9XG4gIHJlbmRlckxvYWRpbmdUZXh0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1c3RvbUhUTUxFbmFibGVkLFxuICAgICAgbG9hZGluZ1RleHRcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoY3VzdG9tSFRNTEVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy10ZXh0XCIsXG4gICAgICAgIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcobG9hZGluZ1RleHQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy10ZXh0XCJcbiAgICB9LCB0aGlzLmxvYWRpbmdUZXh0KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnN2MxNjA2MGRjZmUyYTBiMGZiM2UyZjhmNGM0NDk1ODlhNzZmMWJhYScsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICBbYGluZmluaXRlLXNjcm9sbC1jb250ZW50LSR7bW9kZX1gXTogdHJ1ZVxuICAgICAgfVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnYTk0ZjRkODc0NmUwNTNkYzcxOGY5NzUyMGJkN2U0OGNiMzE2NDQzYScsXG4gICAgICBjbGFzczogXCJpbmZpbml0ZS1sb2FkaW5nXCJcbiAgICB9LCB0aGlzLmxvYWRpbmdTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMTAxNDNkNWQyYTUwYTJhMmJjNWRlMWNlZThlN2FiNTEyNjNiY2YyMycsXG4gICAgICBjbGFzczogXCJpbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXJcIlxuICAgIH0sIGgoXCJpb24tc3Bpbm5lclwiLCB7XG4gICAgICBrZXk6ICc4ODQ2ZTg4MTkxNjkwZDljNjFhMGI0NjI4ODllZDU2ZmJmZWQ4YjBkJyxcbiAgICAgIG5hbWU6IHRoaXMubG9hZGluZ1NwaW5uZXJcbiAgICB9KSksIHRoaXMubG9hZGluZ1RleHQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlbmRlckxvYWRpbmdUZXh0KCkpKTtcbiAgfVxufTtcbkluZmluaXRlU2Nyb2xsQ29udGVudC5zdHlsZSA9IHtcbiAgaW9zOiBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnRJb3NTdHlsZTAsXG4gIG1kOiBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnRNZFN0eWxlMFxufTtcbmV4cG9ydCB7IEluZmluaXRlU2Nyb2xsIGFzIGlvbl9pbmZpbml0ZV9zY3JvbGwsIEluZmluaXRlU2Nyb2xsQ29udGVudCBhcyBpb25faW5maW5pdGVfc2Nyb2xsX2NvbnRlbnQgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSwwQkFBMEI7QUFDaEMsSUFBTSxpQkFBaUIsTUFBTTtBQUFBLEVBQzNCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssY0FBYyxZQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELFNBQUssUUFBUTtBQUNiLFNBQUssUUFBUTtBQVFiLFNBQUssVUFBVTtBQUNmLFNBQUssU0FBUztBQUNkLFNBQUssV0FBVyxNQUFNO0FBQ3BCLFlBQU0sV0FBVyxLQUFLO0FBQ3RCLFVBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFTLEdBQUc7QUFDakMsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLGlCQUFpQixLQUFLLEdBQUc7QUFDL0IsVUFBSSxtQkFBbUIsR0FBRztBQUV4QixlQUFPO0FBQUEsTUFDVDtBQUNBLFlBQU0sWUFBWSxTQUFTO0FBQzNCLFlBQU0sZUFBZSxTQUFTO0FBQzlCLFlBQU0sU0FBUyxTQUFTO0FBQ3hCLFlBQU0sWUFBWSxLQUFLLFVBQVUsSUFBSSxTQUFTLEtBQUssUUFBUSxLQUFLO0FBQ2hFLFlBQU0sdUJBQXVCLEtBQUssYUFBYSxXQUFXLGVBQWUsaUJBQWlCLFlBQVksWUFBWSxTQUFTLFlBQVksaUJBQWlCO0FBQ3hKLFVBQUksdUJBQXVCLEdBQUc7QUFDNUIsWUFBSSxDQUFDLEtBQUssU0FBUztBQUNqQixlQUFLLFlBQVk7QUFDakIsZUFBSyxVQUFVO0FBQ2Ys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
