import {
  watchForOptions
} from "./chunk-P5NIN3Q4.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-7QVPRCLC.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import {
  isEndSide
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

// node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js
var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
var IonItemOptionIosStyle0 = itemOptionIosCss;
var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}";
var IonItemOptionMdStyle0 = itemOptionMdCss;
var ItemOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      const el = ev.target.closest("ion-item-option");
      if (el) {
        ev.preventDefault();
      }
    };
    this.color = void 0;
    this.disabled = false;
    this.download = void 0;
    this.expandable = false;
    this.href = void 0;
    this.rel = void 0;
    this.target = void 0;
    this.type = "button";
  }
  render() {
    const {
      disabled,
      expandable,
      href
    } = this;
    const TagType = href === void 0 ? "button" : "a";
    const mode = getIonMode(this);
    const attrs = TagType === "button" ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      target: this.target
    };
    return h(Host, {
      key: "1b7708dd178dc2c9280652ca3da38c84ba7b767f",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "item-option-disabled": disabled,
        "item-option-expandable": expandable,
        "ion-activatable": true
      })
    }, h(TagType, Object.assign({
      key: "d9f899f5425ad6b97071494485aa3ca90bc89d30"
    }, attrs, {
      class: "button-native",
      part: "native",
      disabled
    }), h("span", {
      key: "adc2cf72b4363be9b9eeb3584723e2bfc862af20",
      class: "button-inner"
    }, h("slot", {
      key: "e668fe8e655a74e6a35e979e0cd488506b962dbf",
      name: "top"
    }), h("div", {
      key: "2ddcdb92b6b19c3cc549a7aee2400d1a6eeb51f1",
      class: "horizontal-wrapper"
    }, h("slot", {
      key: "441f13df18b72e5ed6bb51b157722e065b5847d2",
      name: "start"
    }), h("slot", {
      key: "425d815874b49e1628880160d7175ed3ca36ca39",
      name: "icon-only"
    }), h("slot", {
      key: "27437d3fa3365b12bc030704e18481fdfb14aebb"
    }), h("slot", {
      key: "bd39330771c7f85c6df10f7f9050335ee7f14ff0",
      name: "end"
    })), h("slot", {
      key: "440cb6dc7743d50b261d4bf61d2c24e24b89e58c",
      name: "bottom"
    })), mode === "md" && h("ion-ripple-effect", {
      key: "29632941464bbb34551cf64961187643f62bf755"
    })));
  }
  get el() {
    return getElement(this);
  }
};
ItemOption.style = {
  ios: IonItemOptionIosStyle0,
  md: IonItemOptionMdStyle0
};
var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
var IonItemOptionsIosStyle0 = itemOptionsIosCss;
var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
var IonItemOptionsMdStyle0 = itemOptionsMdCss;
var ItemOptions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSwipe = createEvent(this, "ionSwipe", 7);
    this.side = "end";
  }
  /** @internal */
  fireSwipeEvent() {
    return __async(this, null, function* () {
      this.ionSwipe.emit({
        side: this.side
      });
    });
  }
  render() {
    const mode = getIonMode(this);
    const isEnd = isEndSide(this.side);
    return h(Host, {
      key: "7df4b71547524bf359c48e1b40ccbc44e850f632",
      class: {
        [mode]: true,
        // Used internally for styling
        [`item-options-${mode}`]: true,
        /**
         * Note: The "start" and "end" terms refer to the
         * direction ion-item-option instances within ion-item-options flow.
         * They do not refer to how ion-item-options flows within ion-item-sliding.
         * As a result, "item-options-start" means the ion-item-options container
         * always appears on the left, and "item-options-end" means the ion-item-options
         * container always appears on the right.
         */
        "item-options-start": !isEnd,
        "item-options-end": isEnd
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
ItemOptions.style = {
  ios: IonItemOptionsIosStyle0,
  md: IonItemOptionsMdStyle0
};
var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}";
var IonItemSlidingStyle0 = itemSlidingCss;
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;
var ItemSliding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionDrag = createEvent(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0;
    this.optsDirty = true;
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.state = 2;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const {
        el
      } = this;
      this.item = el.querySelector("ion-item");
      this.contentEl = findClosestIonContent(el);
      this.mutationObserver = watchForOptions(el, "ion-item-option", () => __async(this, null, function* () {
        yield this.updateOptions();
      }));
      yield this.updateOptions();
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el,
        gestureName: "item-swipe",
        gesturePriority: 100,
        threshold: 5,
        canStart: (ev) => this.canStart(ev),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.disabledChanged();
    });
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.item = null;
    this.leftOptions = this.rightOptions = void 0;
    if (openSlidingItem === this.el) {
      openSlidingItem = void 0;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = void 0;
    }
  }
  /**
   * Get the amount the item is open in pixels.
   */
  getOpenAmount() {
    return Promise.resolve(this.openAmount);
  }
  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  getSlidingRatio() {
    return Promise.resolve(this.getSlidingRatioSync());
  }
  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  open(side) {
    return __async(this, null, function* () {
      var _a;
      const item = this.item = (_a = this.item) !== null && _a !== void 0 ? _a : this.el.querySelector("ion-item");
      if (item === null) {
        return;
      }
      const optionsToOpen = this.getOptions(side);
      if (!optionsToOpen) {
        return;
      }
      if (side === void 0) {
        side = optionsToOpen === this.leftOptions ? "start" : "end";
      }
      side = isEndSide(side) ? "end" : "start";
      const isStartOpen = this.openAmount < 0;
      const isEndOpen = this.openAmount > 0;
      if (isStartOpen && optionsToOpen === this.leftOptions) {
        return;
      }
      if (isEndOpen && optionsToOpen === this.rightOptions) {
        return;
      }
      this.closeOpened();
      this.state = 4;
      requestAnimationFrame(() => {
        this.calculateOptsWidth();
        const width = side === "end" ? this.optsWidthRightSide : -this.optsWidthLeftSide;
        openSlidingItem = this.el;
        this.setOpenAmount(width, false);
        this.state = side === "end" ? 8 : 16;
      });
    });
  }
  /**
   * Close the sliding item. Items can also be closed from the [List](./list).
   */
  close() {
    return __async(this, null, function* () {
      this.setOpenAmount(0, true);
    });
  }
  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
   */
  closeOpened() {
    return __async(this, null, function* () {
      if (openSlidingItem !== void 0) {
        openSlidingItem.close();
        openSlidingItem = void 0;
        return true;
      }
      return false;
    });
  }
  /**
   * Given an optional side, return the ion-item-options element.
   *
   * @param side This side of the options to get. If a side is not provided it will
   * return the first one available.
   */
  getOptions(side) {
    if (side === void 0) {
      return this.leftOptions || this.rightOptions;
    } else if (side === "start") {
      return this.leftOptions;
    } else {
      return this.rightOptions;
    }
  }
  updateOptions() {
    return __async(this, null, function* () {
      const options = this.el.querySelectorAll("ion-item-options");
      let sides = 0;
      this.leftOptions = this.rightOptions = void 0;
      for (let i = 0; i < options.length; i++) {
        const item = options.item(i);
        const option = item.componentOnReady !== void 0 ? yield item.componentOnReady() : item;
        const side = isEndSide(option.side) ? "end" : "start";
        if (side === "start") {
          this.leftOptions = option;
          sides |= 1;
        } else {
          this.rightOptions = option;
          sides |= 2;
        }
      }
      this.optsDirty = true;
      this.sides = sides;
    });
  }
  canStart(gesture) {
    const rtl = document.dir === "rtl";
    const atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }
    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
    }
    return !!(this.rightOptions || this.leftOptions);
  }
  onStart() {
    this.item = this.el.querySelector("ion-item");
    const {
      contentEl
    } = this;
    if (contentEl) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    openSlidingItem = this.el;
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = 4;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = "none";
    }
  }
  onMove(gesture) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;
    switch (this.sides) {
      case 2:
        openAmount = Math.max(0, openAmount);
        break;
      case 1:
        openAmount = Math.min(0, openAmount);
        break;
      case 3:
        break;
      case 0:
        return;
      default:
        console.warn("invalid ItemSideFlags value", this.sides);
        break;
    }
    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    } else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    this.setOpenAmount(openAmount, false);
  }
  onEnd(gesture) {
    const {
      contentEl,
      initialContentScrollY
    } = this;
    if (contentEl) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    const velocity = gesture.velocityX;
    let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide;
    const isResetDirection = this.openAmount > 0 === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }
    const state = this.state;
    this.setOpenAmount(restingPoint, true);
    if ((state & 32) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    } else if ((state & 64) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }
  calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = "flex";
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = "";
    }
    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = "flex";
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = "";
    }
    this.optsDirty = false;
  }
  setOpenAmount(openAmount, isFinal) {
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (!this.item) {
      return;
    }
    const {
      el
    } = this;
    const style = this.item.style;
    this.openAmount = openAmount;
    if (isFinal) {
      style.transition = "";
    }
    if (openAmount > 0) {
      this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8 | 32 : 8;
    } else if (openAmount < 0) {
      this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16 | 64 : 16;
    } else {
      el.classList.add("item-sliding-closing");
      if (this.gesture) {
        this.gesture.enable(false);
      }
      this.tmr = setTimeout(() => {
        this.state = 2;
        this.tmr = void 0;
        if (this.gesture) {
          this.gesture.enable(!this.disabled);
        }
        el.classList.remove("item-sliding-closing");
      }, 600);
      openSlidingItem = void 0;
      style.transform = "";
      return;
    }
    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }
  getSlidingRatioSync() {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    } else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    } else {
      return 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "22f83febcbc1bc27e4ddbd7fcbe590de60a10e89",
      class: {
        [mode]: true,
        "item-sliding-active-slide": this.state !== 2,
        "item-sliding-active-options-end": (this.state & 8) !== 0,
        "item-sliding-active-options-start": (this.state & 16) !== 0,
        "item-sliding-active-swipe-end": (this.state & 32) !== 0,
        "item-sliding-active-swipe-start": (this.state & 64) !== 0
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
var swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
  return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
};
ItemSliding.style = IonItemSlidingStyle0;
export {
  ItemOption as ion_item_option,
  ItemOptions as ion_item_options,
  ItemSliding as ion_item_sliding
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-item-option_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taXRlbS1vcHRpb25fMy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IG8gYXMgaXNFbmRTaWRlIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZENsb3Nlc3RJb25Db250ZW50LCBkIGFzIGRpc2FibGVDb250ZW50U2Nyb2xsWSwgciBhcyByZXNldENvbnRlbnRTY3JvbGxZIH0gZnJvbSAnLi9pbmRleC1lOTE5ZTM1My5qcyc7XG5pbXBvcnQgeyB3IGFzIHdhdGNoRm9yT3B0aW9ucyB9IGZyb20gJy4vd2F0Y2gtb3B0aW9ucy1jMjkxMWFjZS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuY29uc3QgaXRlbU9wdGlvbklvc0NzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpfTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LmJ1dHRvbi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MC43ZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC43ZW07LXdlYmtpdC1wYWRkaW5nLWVuZDowLjdlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC43ZW07cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYnV0dG9uLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lmhvcml6b250YWwtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlfTo6c2xvdHRlZCgqKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjVweDttYXJnaW4taW5saW5lLWVuZDo1cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6NXB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NXB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoW3Nsb3Q9aWNvbi1vbmx5XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstd2Via2l0LW1hcmdpbi1zdGFydDoxMHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LW1hcmdpbi1lbmQ6MTBweDttYXJnaW4taW5saW5lLWVuZDoxMHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bWluLXdpZHRoOjAuOWVtO2ZvbnQtc2l6ZToxLjhlbX06aG9zdCguaXRlbS1vcHRpb24tZXhwYW5kYWJsZSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowO3RyYW5zaXRpb24tZHVyYXRpb246MDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6bm9uZTt0cmFuc2l0aW9uLXByb3BlcnR5Om5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpfTpob3N0KC5pdGVtLW9wdGlvbi1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaXRlbS1vcHRpb24tZGlzYWJsZWQpIC5idXR0b24tbmF0aXZle2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC41O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7Zm9udC1zaXplOmNsYW1wKDE2cHgsIDFyZW0sIDM1LjJweCl9Omhvc3QoLmlvbi1hY3RpdmF0ZWQpe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMwMDRhY2QpfTpob3N0KC5pb24tY29sb3IuaW9uLWFjdGl2YXRlZCl7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfVwiO1xuY29uc3QgSW9uSXRlbU9wdGlvbklvc1N0eWxlMCA9IGl0ZW1PcHRpb25Jb3NDc3M7XG5jb25zdCBpdGVtT3B0aW9uTWRDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5idXR0b24tbmF0aXZle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjAuN2VtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuN2VtOy13ZWJraXQtcGFkZGluZy1lbmQ6MC43ZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuN2VtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbiBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5ob3Jpem9udGFsLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJX06OnNsb3R0ZWQoKil7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDo1cHg7bWFyZ2luLWlubGluZS1lbmQ6NXB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9OjpzbG90dGVkKFtzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjVweDttYXJnaW4taW5saW5lLXN0YXJ0OjVweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9OjpzbG90dGVkKFtzbG90PWljb24tb25seV0pe3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTBweDttYXJnaW4taW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1tYXJnaW4tZW5kOjEwcHg7bWFyZ2luLWlubGluZS1lbmQ6MTBweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21pbi13aWR0aDowLjllbTtmb250LXNpemU6MS44ZW19Omhvc3QoLml0ZW0tb3B0aW9uLWV4cGFuZGFibGUpey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MDt0cmFuc2l0aW9uLWR1cmF0aW9uOjA7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om5vbmU7dHJhbnNpdGlvbi1wcm9wZXJ0eTpub25lOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKX06aG9zdCguaXRlbS1vcHRpb24tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLml0ZW0tb3B0aW9uLWRpc2FibGVkKSAuYnV0dG9uLW5hdGl2ZXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2ZvbnQtc2l6ZTowLjg3NXJlbTtmb250LXdlaWdodDo1MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfVwiO1xuY29uc3QgSW9uSXRlbU9wdGlvbk1kU3R5bGUwID0gaXRlbU9wdGlvbk1kQ3NzO1xuY29uc3QgSXRlbU9wdGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5vbkNsaWNrID0gZXYgPT4ge1xuICAgICAgY29uc3QgZWwgPSBldi50YXJnZXQuY2xvc2VzdCgnaW9uLWl0ZW0tb3B0aW9uJyk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5leHBhbmRhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGV4cGFuZGFibGUsXG4gICAgICBocmVmXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgVGFnVHlwZSA9IGhyZWYgPT09IHVuZGVmaW5lZCA/ICdidXR0b24nIDogJ2EnO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGF0dHJzID0gVGFnVHlwZSA9PT0gJ2J1dHRvbicgPyB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICB9IDoge1xuICAgICAgZG93bmxvYWQ6IHRoaXMuZG93bmxvYWQsXG4gICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgfTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcxYjc3MDhkZDE3OGRjMmM5MjgwNjUyY2EzZGEzOGM4NGJhN2I3NjdmJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpdGVtLW9wdGlvbi1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAnaXRlbS1vcHRpb24tZXhwYW5kYWJsZSc6IGV4cGFuZGFibGUsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoVGFnVHlwZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICdkOWY4OTlmNTQyNWFkNmI5NzA3MTQ5NDQ4NWFhM2NhOTBiYzg5ZDMwJ1xuICAgIH0sIGF0dHJzLCB7XG4gICAgICBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsXG4gICAgICBwYXJ0OiBcIm5hdGl2ZVwiLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfSksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJ2FkYzJjZjcyYjQzNjNiZTliOWVlYjM1ODQ3MjNlMmJmYzg2MmFmMjAnLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdlNjY4ZmU4ZTY1NWE3NGU2YTM1ZTk3OWUwY2Q0ODg1MDZiOTYyZGJmJyxcbiAgICAgIG5hbWU6IFwidG9wXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICcyZGRjZGI5MmI2YjE5YzNjYzU0OWE3YWVlMjQwMGQxYTZlZWI1MWYxJyxcbiAgICAgIGNsYXNzOiBcImhvcml6b250YWwtd3JhcHBlclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNDQxZjEzZGYxOGI3MmU1ZWQ2YmI1MWIxNTc3MjJlMDY1YjU4NDdkMicsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNDI1ZDgxNTg3NGI0OWUxNjI4ODgwMTYwZDcxNzVlZDNjYTM2Y2EzOScsXG4gICAgICBuYW1lOiBcImljb24tb25seVwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzI3NDM3ZDNmYTMzNjViMTJiYzAzMDcwNGUxODQ4MWZkZmIxNGFlYmInXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2JkMzkzMzA3NzFjN2Y4NWM2ZGYxMGY3ZjkwNTAzMzVlZTdmMTRmZjAnLFxuICAgICAgbmFtZTogXCJlbmRcIlxuICAgIH0pKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNDQwY2I2ZGM3NzQzZDUwYjI2MWQ0YmY2MWQyYzI0ZTI0Yjg5ZTU4YycsXG4gICAgICBuYW1lOiBcImJvdHRvbVwiXG4gICAgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7XG4gICAgICBrZXk6ICcyOTYzMjk0MTQ2NGJiYjM0NTUxY2Y2NDk2MTE4NzY0M2Y2MmJmNzU1J1xuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuSXRlbU9wdGlvbi5zdHlsZSA9IHtcbiAgaW9zOiBJb25JdGVtT3B0aW9uSW9zU3R5bGUwLFxuICBtZDogSW9uSXRlbU9wdGlvbk1kU3R5bGUwXG59O1xuY29uc3QgaXRlbU9wdGlvbnNJb3NDc3MgPSBcImlvbi1pdGVtLW9wdGlvbnN7dG9wOjA7cmlnaHQ6MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjF9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnN7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1bZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uc3stbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fVtkaXI9cnRsXSBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7cmlnaHQ6YXV0bztsZWZ0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpe2lvbi1pdGVtLW9wdGlvbnM6ZGlyKHJ0bCl7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1pb24taXRlbS1vcHRpb25zOmRpcihydGwpOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7cmlnaHQ6YXV0bztsZWZ0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfX0uaXRlbS1vcHRpb25zLXN0YXJ0e3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLW9wdGlvbnMtc3RhcnR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVtkaXI9cnRsXSAuaXRlbS1vcHRpb25zLXN0YXJ0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuaXRlbS1vcHRpb25zLXN0YXJ0OmRpcihydGwpey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH19W2Rpcj1sdHJdIC5pdGVtLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uOmZpcnN0LWNoaWxkLFtkaXI9cnRsXSAuaXRlbS1vcHRpb25zLXN0YXJ0IGlvbi1pdGVtLW9wdGlvbjpsYXN0LWNoaWxke3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpfVtkaXI9bHRyXSAuaXRlbS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb246bGFzdC1jaGlsZCxbZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1lbmQgaW9uLWl0ZW0tb3B0aW9uOmZpcnN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlLml0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7d2lkdGg6MTAwJTt2aXNpYmlsaXR5OnZpc2libGV9W2Rpcj1ydGxdIC5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlLml0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7d2lkdGg6MTAwJTt2aXNpYmlsaXR5OnZpc2libGV9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGU6ZGlyKHJ0bCkuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0IGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKXt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX19Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUgaW9uLWl0ZW0tb3B0aW9uc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt2aXNpYmlsaXR5OmhpZGRlbn0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydCwuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtc3RhcnQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfS5pdGVtLW9wdGlvbnMtaW9ze2JvcmRlci1ib3R0b20td2lkdGg6MDtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20tY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYzhjN2NjKSkpKX0uaXRlbS1vcHRpb25zLWlvcy5pdGVtLW9wdGlvbnMtZW5ke2JvcmRlci1ib3R0b20td2lkdGg6MC41NXB4fS5saXN0LWlvcy1saW5lcy1ub25lIC5pdGVtLW9wdGlvbnMtaW9ze2JvcmRlci1ib3R0b20td2lkdGg6MH0ubGlzdC1pb3MtbGluZXMtZnVsbCAuaXRlbS1vcHRpb25zLWlvcywubGlzdC1pb3MtbGluZXMtaW5zZXQgLml0ZW0tb3B0aW9ucy1pb3MuaXRlbS1vcHRpb25zLWVuZHtib3JkZXItYm90dG9tLXdpZHRoOjAuNTVweH1cIjtcbmNvbnN0IElvbkl0ZW1PcHRpb25zSW9zU3R5bGUwID0gaXRlbU9wdGlvbnNJb3NDc3M7XG5jb25zdCBpdGVtT3B0aW9uc01kQ3NzID0gXCJpb24taXRlbS1vcHRpb25ze3RvcDowO3JpZ2h0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS1vcHRpb25zey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKXtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9W2Rpcj1ydGxdIGlvbi1pdGVtLW9wdGlvbnN7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1bZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXtpb24taXRlbS1vcHRpb25zOmRpcihydGwpey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9aW9uLWl0ZW0tb3B0aW9uczpkaXIocnRsKTpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH19Lml0ZW0tb3B0aW9ucy1zdGFydHtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1vcHRpb25zLXN0YXJ0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1bZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Lml0ZW0tb3B0aW9ucy1zdGFydDpkaXIocnRsKXstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9fVtkaXI9bHRyXSAuaXRlbS1vcHRpb25zLXN0YXJ0IGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZCxbZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb246bGFzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KX1bZGlyPWx0cl0gLml0ZW0tb3B0aW9ucy1lbmQgaW9uLWl0ZW0tb3B0aW9uOmxhc3QtY2hpbGQsW2Rpcj1ydGxdIC5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZHtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfVtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlOmRpcihydGwpLml0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7d2lkdGg6MTAwJTt2aXNpYmlsaXR5OnZpc2libGV9fS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIGlvbi1pdGVtLW9wdGlvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW59Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQsLml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLXN0YXJ0KXt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX0uaXRlbS1vcHRpb25zLW1ke2JvcmRlci1ib3R0b20td2lkdGg6MDtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20tY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMTMpKSkpKX0ubGlzdC1tZC1saW5lcy1ub25lIC5pdGVtLW9wdGlvbnMtbWR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5saXN0LW1kLWxpbmVzLWZ1bGwgLml0ZW0tb3B0aW9ucy1tZCwubGlzdC1tZC1saW5lcy1pbnNldCAuaXRlbS1vcHRpb25zLW1kLml0ZW0tb3B0aW9ucy1lbmR7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9XCI7XG5jb25zdCBJb25JdGVtT3B0aW9uc01kU3R5bGUwID0gaXRlbU9wdGlvbnNNZENzcztcbmNvbnN0IEl0ZW1PcHRpb25zID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblN3aXBlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Td2lwZVwiLCA3KTtcbiAgICB0aGlzLnNpZGUgPSAnZW5kJztcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGZpcmVTd2lwZUV2ZW50KCkge1xuICAgIHRoaXMuaW9uU3dpcGUuZW1pdCh7XG4gICAgICBzaWRlOiB0aGlzLnNpZGVcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaXNFbmQgPSBpc0VuZFNpZGUodGhpcy5zaWRlKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc3ZGY0YjcxNTQ3NTI0YmYzNTljNDhlMWI0MGNjYmM0NGU4NTBmNjMyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgaXRlbS1vcHRpb25zLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vdGU6IFRoZSBcInN0YXJ0XCIgYW5kIFwiZW5kXCIgdGVybXMgcmVmZXIgdG8gdGhlXG4gICAgICAgICAqIGRpcmVjdGlvbiBpb24taXRlbS1vcHRpb24gaW5zdGFuY2VzIHdpdGhpbiBpb24taXRlbS1vcHRpb25zIGZsb3cuXG4gICAgICAgICAqIFRoZXkgZG8gbm90IHJlZmVyIHRvIGhvdyBpb24taXRlbS1vcHRpb25zIGZsb3dzIHdpdGhpbiBpb24taXRlbS1zbGlkaW5nLlxuICAgICAgICAgKiBBcyBhIHJlc3VsdCwgXCJpdGVtLW9wdGlvbnMtc3RhcnRcIiBtZWFucyB0aGUgaW9uLWl0ZW0tb3B0aW9ucyBjb250YWluZXJcbiAgICAgICAgICogYWx3YXlzIGFwcGVhcnMgb24gdGhlIGxlZnQsIGFuZCBcIml0ZW0tb3B0aW9ucy1lbmRcIiBtZWFucyB0aGUgaW9uLWl0ZW0tb3B0aW9uc1xuICAgICAgICAgKiBjb250YWluZXIgYWx3YXlzIGFwcGVhcnMgb24gdGhlIHJpZ2h0LlxuICAgICAgICAgKi9cbiAgICAgICAgJ2l0ZW0tb3B0aW9ucy1zdGFydCc6ICFpc0VuZCxcbiAgICAgICAgJ2l0ZW0tb3B0aW9ucy1lbmQnOiBpc0VuZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkl0ZW1PcHRpb25zLnN0eWxlID0ge1xuICBpb3M6IElvbkl0ZW1PcHRpb25zSW9zU3R5bGUwLFxuICBtZDogSW9uSXRlbU9wdGlvbnNNZFN0eWxlMFxufTtcbmNvbnN0IGl0ZW1TbGlkaW5nQ3NzID0gXCJpb24taXRlbS1zbGlkaW5ne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWlvbi1pdGVtLXNsaWRpbmcgLml0ZW17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIC5pdGVte3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMC42NiwgMC4wNCwgMSk7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMC42NiwgMC4wNCwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjM2LCAwLjY2LCAwLjA0LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpO29wYWNpdHk6MTt6LWluZGV4OjI7cG9pbnRlci1ldmVudHM6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lml0ZW0tc2xpZGluZy1jbG9zaW5nIGlvbi1pdGVtLW9wdGlvbnN7cG9pbnRlci1ldmVudHM6bm9uZX0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7cGFkZGluZy1sZWZ0OjEwMCU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO3RyYW5zaXRpb24tZHVyYXRpb246MC42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0O3RyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9W2Rpcj1ydGxdIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCAuaXRlbS1vcHRpb25zLWVuZCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGU6ZGlyKHJ0bCl7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9fS5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7cGFkZGluZy1yaWdodDoxMDAlOy1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO3RyYW5zaXRpb24tZHVyYXRpb246MC42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1yaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnBhZGRpbmctcmlnaHR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfVtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1zdGFydCAuaXRlbS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbi1leHBhbmRhYmxley1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1zdGFydCAuaXRlbS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbi1leHBhbmRhYmxlOmRpcihydGwpey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX19XCI7XG5jb25zdCBJb25JdGVtU2xpZGluZ1N0eWxlMCA9IGl0ZW1TbGlkaW5nQ3NzO1xuY29uc3QgU1dJUEVfTUFSR0lOID0gMzA7XG5jb25zdCBFTEFTVElDX0ZBQ1RPUiA9IDAuNTU7XG5sZXQgb3BlblNsaWRpbmdJdGVtO1xuY29uc3QgSXRlbVNsaWRpbmcgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uRHJhZyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRHJhZ1wiLCA3KTtcbiAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgIHRoaXMub3BlbkFtb3VudCA9IDA7XG4gICAgdGhpcy5pbml0aWFsT3BlbkFtb3VudCA9IDA7XG4gICAgdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgPSAwO1xuICAgIHRoaXMub3B0c1dpZHRoTGVmdFNpZGUgPSAwO1xuICAgIHRoaXMuc2lkZXMgPSAwIC8qIEl0ZW1TaWRlLk5vbmUgKi87XG4gICAgdGhpcy5vcHRzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuY29udGVudEVsID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxDb250ZW50U2Nyb2xsWSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IDIgLyogU2xpZGluZ1N0YXRlLkRpc2FibGVkICovO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSghdGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5pdGVtID0gZWwucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0nKTtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudChlbCk7XG4gICAgLyoqXG4gICAgICogVGhlIE11dGF0aW9uT2JzZXJ2ZXIgbmVlZHMgdG8gYmUgYWRkZWQgYmVmb3JlIHdlXG4gICAgICogY2FsbCB1cGRhdGVPcHRpb25zIGJlbG93IG90aGVyd2lzZSB3ZSBtYXkgbWlzc1xuICAgICAqIGlvbi1pdGVtLW9wdGlvbiBlbGVtZW50cyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgRE9NXG4gICAgICogd2hpbGUgdXBkYXRlT3B0aW9ucyBpcyBydW5uaW5nIGFuZCBiZWZvcmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgKiBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgKi9cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB3YXRjaEZvck9wdGlvbnMoZWwsICdpb24taXRlbS1vcHRpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTM5NzgyNjQyLmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgZWwsXG4gICAgICBnZXN0dXJlTmFtZTogJ2l0ZW0tc3dpcGUnLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICB0aHJlc2hvbGQ6IDUsXG4gICAgICBjYW5TdGFydDogZXYgPT4gdGhpcy5jYW5TdGFydChldiksXG4gICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgb25FbmQ6IGV2ID0+IHRoaXMub25FbmQoZXYpXG4gICAgfSk7XG4gICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgIHRoaXMubGVmdE9wdGlvbnMgPSB0aGlzLnJpZ2h0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICBpZiAob3BlblNsaWRpbmdJdGVtID09PSB0aGlzLmVsKSB7XG4gICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGFtb3VudCB0aGUgaXRlbSBpcyBvcGVuIGluIHBpeGVscy5cbiAgICovXG4gIGdldE9wZW5BbW91bnQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9wZW5BbW91bnQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHJhdGlvIG9mIHRoZSBvcGVuIGFtb3VudCBvZiB0aGUgaXRlbSBjb21wYXJlZCB0byB0aGUgd2lkdGggb2YgdGhlIG9wdGlvbnMuXG4gICAqIElmIHRoZSBudW1iZXIgcmV0dXJuZWQgaXMgcG9zaXRpdmUsIHRoZW4gdGhlIG9wdGlvbnMgb24gdGhlIHJpZ2h0IHNpZGUgYXJlIG9wZW4uXG4gICAqIElmIHRoZSBudW1iZXIgcmV0dXJuZWQgaXMgbmVnYXRpdmUsIHRoZW4gdGhlIG9wdGlvbnMgb24gdGhlIGxlZnQgc2lkZSBhcmUgb3Blbi5cbiAgICogSWYgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEsIHRoZSBpdGVtIGlzIG9wZW4gbW9yZSB0aGFuXG4gICAqIHRoZSB3aWR0aCBvZiB0aGUgb3B0aW9ucy5cbiAgICovXG4gIGdldFNsaWRpbmdSYXRpbygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U2xpZGluZ1JhdGlvU3luYygpKTtcbiAgfVxuICAvKipcbiAgICogT3BlbiB0aGUgc2xpZGluZyBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gc2lkZSBUaGUgc2lkZSBvZiB0aGUgb3B0aW9ucyB0byBvcGVuLiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkLCBpdCB3aWxsIG9wZW4gdGhlIGZpcnN0IHNldCBvZiBvcHRpb25zIGl0IGZpbmRzIHdpdGhpbiB0aGUgaXRlbS5cbiAgICovXG4gIGFzeW5jIG9wZW4oc2lkZSkge1xuICAgIHZhciBfYTtcbiAgICAvKipcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIGl0ZW0gdG8gYmUgYWRkZWQgdG8gdGhlIERPTVxuICAgICAqIGFmdGVyIHRoZSBpdGVtLXNsaWRpbmcgY29tcG9uZW50IHdhcyBjcmVhdGVkLiBBcyBhIHJlc3VsdCxcbiAgICAgKiBpZiB0aGlzLml0ZW0gaXMgbnVsbCwgdGhlbiB3ZSBzaG91bGQgYXR0ZW1wdCB0b1xuICAgICAqIHF1ZXJ5IGZvciB0aGUgaW9uLWl0ZW0gYWdhaW4uXG4gICAgICogSG93ZXZlciwgaWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBkZWZpbmVkIHRoZW5cbiAgICAgKiB3ZSBkbyBub3QgcXVlcnkgZm9yIGl0IGFnYWluLlxuICAgICAqL1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW0gPSAoX2EgPSB0aGlzLml0ZW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0nKTtcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zVG9PcGVuID0gdGhpcy5nZXRPcHRpb25zKHNpZGUpO1xuICAgIGlmICghb3B0aW9uc1RvT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBzaWRlIGlzIG5vdCBzZXQsIHdlIG5lZWQgdG8gaW5mZXIgdGhlIHNpZGVcbiAgICAgKiBzbyB3ZSBrbm93IHdoaWNoIGRpcmVjdGlvbiB0byBtb3ZlIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgaWYgKHNpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lkZSA9IG9wdGlvbnNUb09wZW4gPT09IHRoaXMubGVmdE9wdGlvbnMgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgfVxuICAgIC8vIEluIFJUTCB3ZSB3YW50IHRvIHN3aXRjaCB0aGUgc2lkZXNcbiAgICBzaWRlID0gaXNFbmRTaWRlKHNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgIGNvbnN0IGlzU3RhcnRPcGVuID0gdGhpcy5vcGVuQW1vdW50IDwgMDtcbiAgICBjb25zdCBpc0VuZE9wZW4gPSB0aGlzLm9wZW5BbW91bnQgPiAwO1xuICAgIC8qKlxuICAgICAqIElmIGEgc2lkZSBpcyBvcGVuIGFuZCBhIHVzZXIgdHJpZXMgdG9cbiAgICAgKiByZS1vcGVuIHRoZSBzYW1lIHNpZGUsIHdlIHNob3VsZCBub3QgZG8gYW55dGhpbmdcbiAgICAgKi9cbiAgICBpZiAoaXNTdGFydE9wZW4gJiYgb3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNFbmRPcGVuICYmIG9wdGlvbnNUb09wZW4gPT09IHRoaXMucmlnaHRPcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICB0aGlzLnN0YXRlID0gNCAvKiBTbGlkaW5nU3RhdGUuRW5hYmxlZCAqLztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjdWxhdGVPcHRzV2lkdGgoKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gc2lkZSA9PT0gJ2VuZCcgPyB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA6IC10aGlzLm9wdHNXaWR0aExlZnRTaWRlO1xuICAgICAgb3BlblNsaWRpbmdJdGVtID0gdGhpcy5lbDtcbiAgICAgIHRoaXMuc2V0T3BlbkFtb3VudCh3aWR0aCwgZmFsc2UpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHNpZGUgPT09ICdlbmQnID8gOCAvKiBTbGlkaW5nU3RhdGUuRW5kICovIDogMTYgLyogU2xpZGluZ1N0YXRlLlN0YXJ0ICovO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgc2xpZGluZyBpdGVtLiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4vbGlzdCkuXG4gICAqL1xuICBhc3luYyBjbG9zZSgpIHtcbiAgICB0aGlzLnNldE9wZW5BbW91bnQoMCwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENsb3NlIGFsbCBvZiB0aGUgc2xpZGluZyBpdGVtcyBpbiB0aGUgbGlzdC4gSXRlbXMgY2FuIGFsc28gYmUgY2xvc2VkIGZyb20gdGhlIFtMaXN0XSguL2xpc3QpLlxuICAgKi9cbiAgYXN5bmMgY2xvc2VPcGVuZWQoKSB7XG4gICAgaWYgKG9wZW5TbGlkaW5nSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGVuU2xpZGluZ0l0ZW0uY2xvc2UoKTtcbiAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGFuIG9wdGlvbmFsIHNpZGUsIHJldHVybiB0aGUgaW9uLWl0ZW0tb3B0aW9ucyBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gc2lkZSBUaGlzIHNpZGUgb2YgdGhlIG9wdGlvbnMgdG8gZ2V0LiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkIGl0IHdpbGxcbiAgICogcmV0dXJuIHRoZSBmaXJzdCBvbmUgYXZhaWxhYmxlLlxuICAgKi9cbiAgZ2V0T3B0aW9ucyhzaWRlKSB7XG4gICAgaWYgKHNpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMubGVmdE9wdGlvbnMgfHwgdGhpcy5yaWdodE9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChzaWRlID09PSAnc3RhcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWZ0T3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmlnaHRPcHRpb25zO1xuICAgIH1cbiAgfVxuICBhc3luYyB1cGRhdGVPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pdGVtLW9wdGlvbnMnKTtcbiAgICBsZXQgc2lkZXMgPSAwO1xuICAgIC8vIFJlc2V0IGxlZnQgYW5kIHJpZ2h0IG9wdGlvbnMgaW4gY2FzZSB0aGV5IHdlcmUgcmVtb3ZlZFxuICAgIHRoaXMubGVmdE9wdGlvbnMgPSB0aGlzLnJpZ2h0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAvKipcbiAgICAgICAqIFdlIGNhbm5vdCB1c2UgdGhlIGNvbXBvbmVudE9uUmVhZHkgaGVscGVyXG4gICAgICAgKiB1dGlsIGhlcmUgc2luY2Ugd2UgbmVlZCB0byB3YWl0IGZvciBhbGwgb2YgdGhlc2UgaXRlbXNcbiAgICAgICAqIHRvIGJlIHJlYWR5IGJlZm9yZSB3ZSBzZXQgYHRoaXMuc2lkZXNgIGFuZCBgdGhpcy5vcHRzRGlydHlgLlxuICAgICAgICovXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLWNvbXBvbmVudC1vbi1yZWFkeS1tZXRob2RcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGl0ZW0uY29tcG9uZW50T25SZWFkeSAhPT0gdW5kZWZpbmVkID8gYXdhaXQgaXRlbS5jb21wb25lbnRPblJlYWR5KCkgOiBpdGVtO1xuICAgICAgY29uc3Qgc2lkZSA9IGlzRW5kU2lkZShvcHRpb24uc2lkZSkgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgICBpZiAoc2lkZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gb3B0aW9uO1xuICAgICAgICBzaWRlcyB8PSAxIC8qIEl0ZW1TaWRlLlN0YXJ0ICovO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yaWdodE9wdGlvbnMgPSBvcHRpb247XG4gICAgICAgIHNpZGVzIHw9IDIgLyogSXRlbVNpZGUuRW5kICovO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5zaWRlcyA9IHNpZGVzO1xuICB9XG4gIGNhblN0YXJ0KGdlc3R1cmUpIHtcbiAgICAvKipcbiAgICAgKiBJZiB2ZXJ5IGNsb3NlIHRvIHN0YXJ0IG9mIHRoZSBzY3JlZW5cbiAgICAgKiBkbyBub3Qgb3BlbiBsZWZ0IHNpZGUgc28gc3dpcGUgdG8gZ29cbiAgICAgKiBiYWNrIHdpbGwgc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBjb25zdCBydGwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgIGNvbnN0IGF0RWRnZSA9IHJ0bCA/IHdpbmRvdy5pbm5lcldpZHRoIC0gZ2VzdHVyZS5zdGFydFggPCAxNSA6IGdlc3R1cmUuc3RhcnRYIDwgMTU7XG4gICAgaWYgKGF0RWRnZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZCA9IG9wZW5TbGlkaW5nSXRlbTtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgIT09IHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuICEhKHRoaXMucmlnaHRPcHRpb25zIHx8IHRoaXMubGVmdE9wdGlvbnMpO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBxdWVyeSBmb3IgdGhlIGlvbi1pdGVtXG4gICAgICogZXZlcnkgdGltZSB0aGUgZ2VzdHVyZSBzdGFydHMuIERldmVsb3BlcnNcbiAgICAgKiBtYXkgdG9nZ2xlIGlvbi1pdGVtIGVsZW1lbnRzIHZpYSAqbmdJZi5cbiAgICAgKi9cbiAgICB0aGlzLml0ZW0gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtJyk7XG4gICAgY29uc3Qge1xuICAgICAgY29udGVudEVsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgdGhpcy5pbml0aWFsQ29udGVudFNjcm9sbFkgPSBkaXNhYmxlQ29udGVudFNjcm9sbFkoY29udGVudEVsKTtcbiAgICB9XG4gICAgb3BlblNsaWRpbmdJdGVtID0gdGhpcy5lbDtcbiAgICBpZiAodGhpcy50bXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1yKTtcbiAgICAgIHRoaXMudG1yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuQW1vdW50ID09PSAwKSB7XG4gICAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlID0gNCAvKiBTbGlkaW5nU3RhdGUuRW5hYmxlZCAqLztcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsT3BlbkFtb3VudCA9IHRoaXMub3BlbkFtb3VudDtcbiAgICBpZiAodGhpcy5pdGVtKSB7XG4gICAgICB0aGlzLml0ZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG4gIH1cbiAgb25Nb3ZlKGdlc3R1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRzRGlydHkpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3B0c1dpZHRoKCk7XG4gICAgfVxuICAgIGxldCBvcGVuQW1vdW50ID0gdGhpcy5pbml0aWFsT3BlbkFtb3VudCAtIGdlc3R1cmUuZGVsdGFYO1xuICAgIHN3aXRjaCAodGhpcy5zaWRlcykge1xuICAgICAgY2FzZSAyIC8qIEl0ZW1TaWRlLkVuZCAqLzpcbiAgICAgICAgb3BlbkFtb3VudCA9IE1hdGgubWF4KDAsIG9wZW5BbW91bnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMSAvKiBJdGVtU2lkZS5TdGFydCAqLzpcbiAgICAgICAgb3BlbkFtb3VudCA9IE1hdGgubWluKDAsIG9wZW5BbW91bnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMyAvKiBJdGVtU2lkZS5Cb3RoICovOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMCAvKiBJdGVtU2lkZS5Ob25lICovOlxuICAgICAgICByZXR1cm47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oJ2ludmFsaWQgSXRlbVNpZGVGbGFncyB2YWx1ZScsIHRoaXMuc2lkZXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IG9wdHNXaWR0aDtcbiAgICBpZiAob3BlbkFtb3VudCA+IHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlKSB7XG4gICAgICBvcHRzV2lkdGggPSB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZTtcbiAgICAgIG9wZW5BbW91bnQgPSBvcHRzV2lkdGggKyAob3BlbkFtb3VudCAtIG9wdHNXaWR0aCkgKiBFTEFTVElDX0ZBQ1RPUjtcbiAgICB9IGVsc2UgaWYgKG9wZW5BbW91bnQgPCAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSkge1xuICAgICAgb3B0c1dpZHRoID0gLXRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICBvcGVuQW1vdW50ID0gb3B0c1dpZHRoICsgKG9wZW5BbW91bnQgLSBvcHRzV2lkdGgpICogRUxBU1RJQ19GQUNUT1I7XG4gICAgfVxuICAgIHRoaXMuc2V0T3BlbkFtb3VudChvcGVuQW1vdW50LCBmYWxzZSk7XG4gIH1cbiAgb25FbmQoZ2VzdHVyZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnRFbCxcbiAgICAgIGluaXRpYWxDb250ZW50U2Nyb2xsWVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHJlc2V0Q29udGVudFNjcm9sbFkoY29udGVudEVsLCBpbml0aWFsQ29udGVudFNjcm9sbFkpO1xuICAgIH1cbiAgICBjb25zdCB2ZWxvY2l0eSA9IGdlc3R1cmUudmVsb2NpdHlYO1xuICAgIGxldCByZXN0aW5nUG9pbnQgPSB0aGlzLm9wZW5BbW91bnQgPiAwID8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgOiAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICAvLyBDaGVjayBpZiB0aGUgZHJhZyBkaWRuJ3QgY2xlYXIgdGhlIGJ1dHRvbnMgbWlkLXBvaW50XG4gICAgLy8gYW5kIHdlIGFyZW4ndCBtb3ZpbmcgZmFzdCBlbm91Z2ggdG8gc3dpcGUgb3BlblxuICAgIGNvbnN0IGlzUmVzZXREaXJlY3Rpb24gPSB0aGlzLm9wZW5BbW91bnQgPiAwID09PSAhKHZlbG9jaXR5IDwgMCk7XG4gICAgY29uc3QgaXNNb3ZpbmdGYXN0ID0gTWF0aC5hYnModmVsb2NpdHkpID4gMC4zO1xuICAgIGNvbnN0IGlzT25DbG9zZVpvbmUgPSBNYXRoLmFicyh0aGlzLm9wZW5BbW91bnQpIDwgTWF0aC5hYnMocmVzdGluZ1BvaW50IC8gMik7XG4gICAgaWYgKHN3aXBlU2hvdWxkUmVzZXQoaXNSZXNldERpcmVjdGlvbiwgaXNNb3ZpbmdGYXN0LCBpc09uQ2xvc2Vab25lKSkge1xuICAgICAgcmVzdGluZ1BvaW50ID0gMDtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0T3BlbkFtb3VudChyZXN0aW5nUG9pbnQsIHRydWUpO1xuICAgIGlmICgoc3RhdGUgJiAzMiAvKiBTbGlkaW5nU3RhdGUuU3dpcGVFbmQgKi8pICE9PSAwICYmIHRoaXMucmlnaHRPcHRpb25zKSB7XG4gICAgICB0aGlzLnJpZ2h0T3B0aW9ucy5maXJlU3dpcGVFdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoKHN0YXRlICYgNjQgLyogU2xpZGluZ1N0YXRlLlN3aXBlU3RhcnQgKi8pICE9PSAwICYmIHRoaXMubGVmdE9wdGlvbnMpIHtcbiAgICAgIHRoaXMubGVmdE9wdGlvbnMuZmlyZVN3aXBlRXZlbnQoKTtcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlT3B0c1dpZHRoKCkge1xuICAgIHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlID0gMDtcbiAgICBpZiAodGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmlnaHRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA9IHRoaXMucmlnaHRPcHRpb25zLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5yaWdodE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLm9wdHNXaWR0aExlZnRTaWRlID0gMDtcbiAgICBpZiAodGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgdGhpcy5sZWZ0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IHRoaXMubGVmdE9wdGlvbnMub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLmxlZnRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG4gICAgdGhpcy5vcHRzRGlydHkgPSBmYWxzZTtcbiAgfVxuICBzZXRPcGVuQW1vdW50KG9wZW5BbW91bnQsIGlzRmluYWwpIHtcbiAgICBpZiAodGhpcy50bXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1yKTtcbiAgICAgIHRoaXMudG1yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pdGVtLnN0eWxlO1xuICAgIHRoaXMub3BlbkFtb3VudCA9IG9wZW5BbW91bnQ7XG4gICAgaWYgKGlzRmluYWwpIHtcbiAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9XG4gICAgaWYgKG9wZW5BbW91bnQgPiAwKSB7XG4gICAgICB0aGlzLnN0YXRlID0gb3BlbkFtb3VudCA+PSB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSArIFNXSVBFX01BUkdJTiA/IDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLyB8IDMyIC8qIFNsaWRpbmdTdGF0ZS5Td2lwZUVuZCAqLyA6IDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLztcbiAgICB9IGVsc2UgaWYgKG9wZW5BbW91bnQgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRlID0gb3BlbkFtb3VudCA8PSAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSAtIFNXSVBFX01BUkdJTiA/IDE2IC8qIFNsaWRpbmdTdGF0ZS5TdGFydCAqLyB8IDY0IC8qIFNsaWRpbmdTdGF0ZS5Td2lwZVN0YXJ0ICovIDogMTYgLyogU2xpZGluZ1N0YXRlLlN0YXJ0ICovO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBzbGlkaW5nIG9wdGlvbnMgc2hvdWxkIG5vdCBiZVxuICAgICAgICogY2xpY2thYmxlIHdoaWxlIHRoZSBpdGVtIGlzIGNsb3NpbmcuXG4gICAgICAgKi9cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc2xpZGluZy1jbG9zaW5nJyk7XG4gICAgICAvKipcbiAgICAgICAqIEl0ZW0gc2xpZGluZyBjYW5ub3QgYmUgaW50ZXJydXB0ZWRcbiAgICAgICAqIHdoaWxlIGNsb3NpbmcgdGhlIGl0ZW0uIElmIGl0IGRpZCxcbiAgICAgICAqIGl0IHdvdWxkIGFsbG93IHRoZSBpdGVtIHRvIGdldCBpbnRvIGFuXG4gICAgICAgKiBpbmNvbnNpc3RlbnQgc3RhdGUgd2hlcmUgbXVsdGlwbGVcbiAgICAgICAqIGl0ZW1zIGFyZSB0aGVuIG9wZW4gYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudG1yID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFNsaWRpbmdTdGF0ZS5EaXNhYmxlZCAqLztcbiAgICAgICAgdGhpcy50bXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXNsaWRpbmctY2xvc2luZycpO1xuICAgICAgfSwgNjAwKTtcbiAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstb3BlbkFtb3VudH1weCwwLDApYDtcbiAgICB0aGlzLmlvbkRyYWcuZW1pdCh7XG4gICAgICBhbW91bnQ6IG9wZW5BbW91bnQsXG4gICAgICByYXRpbzogdGhpcy5nZXRTbGlkaW5nUmF0aW9TeW5jKClcbiAgICB9KTtcbiAgfVxuICBnZXRTbGlkaW5nUmF0aW9TeW5jKCkge1xuICAgIGlmICh0aGlzLm9wZW5BbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuQW1vdW50IC8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wZW5BbW91bnQgPCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuQW1vdW50IC8gdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcyMmY4M2ZlYmNiYzFiYzI3ZTRkZGJkN2ZjYmU1OTBkZTYwYTEwZTg5JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUnOiB0aGlzLnN0YXRlICE9PSAyIC8qIFNsaWRpbmdTdGF0ZS5EaXNhYmxlZCAqLyxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1lbmQnOiAodGhpcy5zdGF0ZSAmIDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLykgIT09IDAsXG4gICAgICAgICdpdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQnOiAodGhpcy5zdGF0ZSAmIDE2IC8qIFNsaWRpbmdTdGF0ZS5TdGFydCAqLykgIT09IDAsXG4gICAgICAgICdpdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCc6ICh0aGlzLnN0YXRlICYgMzIgLyogU2xpZGluZ1N0YXRlLlN3aXBlRW5kICovKSAhPT0gMCxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQnOiAodGhpcy5zdGF0ZSAmIDY0IC8qIFNsaWRpbmdTdGF0ZS5Td2lwZVN0YXJ0ICovKSAhPT0gMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBzd2lwZVNob3VsZFJlc2V0ID0gKGlzUmVzZXREaXJlY3Rpb24sIGlzTW92aW5nRmFzdCwgaXNPblJlc2V0Wm9uZSkgPT4ge1xuICAvLyBUaGUgbG9naWMgcmVxdWlyZWQgdG8ga25vdyB3aGVuIHRoZSBzbGlkaW5nIGl0ZW0gc2hvdWxkIGNsb3NlIChvcGVuQW1vdW50PTApXG4gIC8vIGRlcGVuZHMgb24gdGhyZWUgYm9vbGVhbnMgKGlzUmVzZXREaXJlY3Rpb24sIGlzTW92aW5nRmFzdCwgaXNPblJlc2V0Wm9uZSlcbiAgLy8gYW5kIGl0IGVuZGVkIHVwIGJlaW5nIHRvbyBjb21wbGljYXRlZCB0byBiZSB3cml0dGVuIG1hbnVhbGx5IHdpdGhvdXQgZXJyb3JzXG4gIC8vIHNvIHRoZSB0cnV0aCB0YWJsZSBpcyBhdHRhY2hlZCBiZWxvdzogKDA9ZmFsc2UsIDE9dHJ1ZSlcbiAgLy8gaXNSZXNldERpcmVjdGlvbiB8IGlzTW92aW5nRmFzdCB8IGlzT25SZXNldFpvbmUgfHwgc2hvdWxkQ2xvc2VcbiAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDAgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMFxuICAvLyAgICAgICAgIDAgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gIC8vICAgICAgICAgMCAgICAgICAgfCAgICAgICAxICAgICAgfCAgICAgICAwICAgICAgIHx8ICAgIDBcbiAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDEgICAgICAgfHwgICAgMFxuICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMCAgICAgICB8fCAgICAwXG4gIC8vICAgICAgICAgMSAgICAgICAgfCAgICAgICAwICAgICAgfCAgICAgICAxICAgICAgIHx8ICAgIDFcbiAgLy8gICAgICAgICAxICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMVxuICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMSAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gIC8vIFRoZSByZXN1bHRpbmcgZXhwcmVzc2lvbiB3YXMgZ2VuZXJhdGVkIGJ5IHJlc29sdmluZyB0aGUgSy1tYXAgKEthcm5hdWdoIG1hcCk6XG4gIHJldHVybiAhaXNNb3ZpbmdGYXN0ICYmIGlzT25SZXNldFpvbmUgfHwgaXNSZXNldERpcmVjdGlvbiAmJiBpc01vdmluZ0Zhc3Q7XG59O1xuSXRlbVNsaWRpbmcuc3R5bGUgPSBJb25JdGVtU2xpZGluZ1N0eWxlMDtcbmV4cG9ydCB7IEl0ZW1PcHRpb24gYXMgaW9uX2l0ZW1fb3B0aW9uLCBJdGVtT3B0aW9ucyBhcyBpb25faXRlbV9vcHRpb25zLCBJdGVtU2xpZGluZyBhcyBpb25faXRlbV9zbGlkaW5nIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLHlCQUF5QjtBQUMvQixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGFBQWEsTUFBTTtBQUFBLEVBQ3ZCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssVUFBVSxRQUFNO0FBQ25CLFlBQU0sS0FBSyxHQUFHLE9BQU8sUUFBUSxpQkFBaUI7QUFDOUMsVUFBSSxJQUFJO0FBQ04sV0FBRyxlQUFlO0FBQUEsTUFDcEI7QUFBQSxJQUNGO0FBQ0EsU0FBSyxRQUFRO0FBQ2IsU0FBSyxXQUFXO0FBQ2hCLFNBQUssV0FBVztBQUNoQixTQUFLLGFBQWE7QUFDbEIsU0FBSyxPQUFPO0FBQ1osU0FBSyxNQUFNO0FBQ1gsU0FBSyxTQUFTO0FBQ2QsU0FBSyxPQUFPO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLFVBQVUsU0FBUyxTQUFZLFdBQVc7QUFDaEQsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixVQUFNLFFBQVEsWUFBWSxXQUFXO0FBQUEsTUFDbkMsTUFBTSxLQUFLO0FB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VUFBVSxJQUFJLHNCQUFzQjtBQVF2QyxVQUFJLEtBQUssU0FBUztBQUNoQixhQUFLLFFBQVEsT0FBTyxLQUFLO0FBQUEsTUFDM0I7QUFDQSxXQUFLLE1BQU0sV0FBVyxNQUFNO0FBQzFCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLFlBQUksS0FBSyxTQUFTO0FBQ2hCLGVBQUssUUFBUSxPQUFPLENBQUMsS0FBSyxRQUFRO0FBQUEsUUFDcEM7QUFDQSxXQUFHLFVBQVUsT0FBTyxzQkFBc0I7QUFBQSxNQUM1QyxHQUFHLEdBQUc7QUFDTix3QkFBa0I7QUFDbEIsWUFBTSxZQUFZO0FBQ2xCO0FBQUEsSUFDRjtBQUNBLFVBQU0sWUFBWSxlQUFlLENBQUMsVUFBVTtBQUM1QyxTQUFLLFFBQVEsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxNQUNSLE9BQU8sS0FBSyxvQkFBb0I7QUFBQSxJQUNsQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0Esc0JBQXNCO0FBQ3BCLFFBQUksS0FBSyxhQUFhLEdBQUc7QUFDdkIsYUFBTyxLQUFLLGFBQWEsS0FBSztBQUFBLElBQ2hDLFdBQVcsS0FBSyxhQUFhLEdBQUc7QUFDOUIsYUFBTyxLQUFLLGFBQWEsS0FBSztBQUFBLElBQ2hDLE9BQU87QUFDTCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDTCxDQUFDLElBQUksR0FBRztBQUFBLFFBQ1IsNkJBQTZCLEtBQUssVUFBVTtBQUFBLFFBQzVDLG9DQUFvQyxLQUFLLFFBQVEsT0FBOEI7QUFBQSxRQUMvRSxzQ0FBc0MsS0FBSyxRQUFRLFFBQWlDO0FBQUEsUUFDcEYsa0NBQWtDLEtBQUssUUFBUSxRQUFvQztBQUFBLFFBQ25GLG9DQUFvQyxLQUFLLFFBQVEsUUFBc0M7QUFBQSxNQUN6RjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxZQUFZLENBQUMsaUJBQWlCO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFNLG1CQUFtQixDQUFDLGtCQUFrQixjQUFjLGtCQUFrQjtBQWUxRSxTQUFPLENBQUMsZ0JBQWdCLGlCQUFpQixvQkFBb0I7QUFDL0Q7QUFDQSxZQUFZLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
