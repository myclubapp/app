import {
  chevronDown
} from "./chunk-Y2OY2WAF.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  addEventListener,
  getElementRoot,
  raf,
  removeEventListener,
  transitionEndAsync
} from "./chunk-RRWPYKYY.js";
import {
  config,
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

// node_modules/@ionic/core/dist/esm/ion-accordion_2.entry.js
var accordionIosCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";
var IonAccordionIosStyle0 = accordionIosCss;
var accordionMdCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";
var IonAccordionMdStyle0 = accordionMdCss;
var Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateListener = () => this.updateState(false);
    this.setItemDefaults = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      ionItem.button = true;
      ionItem.detail = false;
      if (ionItem.lines === void 0) {
        ionItem.lines = "full";
      }
    };
    this.getSlottedHeaderIonItem = () => {
      const {
        headerEl
      } = this;
      if (!headerEl) {
        return;
      }
      const slot = headerEl.querySelector("slot");
      if (!slot) {
        return;
      }
      if (slot.assignedElements === void 0) return;
      return slot.assignedElements().find((el) => el.tagName === "ION-ITEM");
    };
    this.setAria = (expanded = false) => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const root = getElementRoot(ionItem);
      const button = root.querySelector("button");
      if (!button) {
        return;
      }
      button.setAttribute("aria-expanded", `${expanded}`);
    };
    this.slotToggleIcon = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const {
        toggleIconSlot,
        toggleIcon
      } = this;
      const existingToggleIcon = ionItem.querySelector(".ion-accordion-toggle-icon");
      if (existingToggleIcon) {
        return;
      }
      const iconEl = document.createElement("ion-icon");
      iconEl.slot = toggleIconSlot;
      iconEl.lazy = false;
      iconEl.classList.add("ion-accordion-toggle-icon");
      iconEl.icon = toggleIcon;
      iconEl.setAttribute("aria-hidden", "true");
      ionItem.appendChild(iconEl);
    };
    this.expandAccordion = (initialUpdate = false) => {
      const {
        contentEl,
        contentElWrapper
      } = this;
      if (initialUpdate || contentEl === void 0 || contentElWrapper === void 0) {
        this.state = 4;
        return;
      }
      if (this.state === 4) {
        return;
      }
      if (this.currentRaf !== void 0) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.state = 8;
          this.currentRaf = raf(() => __async(this, null, function* () {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 2e3);
            contentEl.style.setProperty("max-height", `${contentHeight}px`);
            yield waitForTransition;
            this.state = 4;
            contentEl.style.removeProperty("max-height");
          }));
        });
      } else {
        this.state = 4;
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      const {
        contentEl
      } = this;
      if (initialUpdate || contentEl === void 0) {
        this.state = 1;
        return;
      }
      if (this.state === 1) {
        return;
      }
      if (this.currentRaf !== void 0) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(() => __async(this, null, function* () {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty("max-height", `${contentHeight}px`);
          raf(() => __async(this, null, function* () {
            const waitForTransition = transitionEndAsync(contentEl, 2e3);
            this.state = 2;
            yield waitForTransition;
            this.state = 1;
            contentEl.style.removeProperty("max-height");
          }));
        }));
      } else {
        this.state = 1;
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === "undefined") {
        return false;
      }
      const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        return false;
      }
      const animated = config.get("animated", true);
      if (!animated) {
        return false;
      }
      if (this.accordionGroupEl && !this.accordionGroupEl.animated) {
        return false;
      }
      return true;
    };
    this.updateState = (initialUpdate = false) => __async(this, null, function* () {
      const accordionGroup = this.accordionGroupEl;
      const accordionValue = this.value;
      if (!accordionGroup) {
        return;
      }
      const value = accordionGroup.value;
      const shouldExpand = Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue;
      if (shouldExpand) {
        this.expandAccordion(initialUpdate);
        this.isNext = this.isPrevious = false;
      } else {
        this.collapseAccordion(initialUpdate);
        const nextAccordion = this.getNextSibling();
        const nextAccordionValue = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.value;
        if (nextAccordionValue !== void 0) {
          this.isPrevious = Array.isArray(value) ? value.includes(nextAccordionValue) : value === nextAccordionValue;
        }
        const previousAccordion = this.getPreviousSibling();
        const previousAccordionValue = previousAccordion === null || previousAccordion === void 0 ? void 0 : previousAccordion.value;
        if (previousAccordionValue !== void 0) {
          this.isNext = Array.isArray(value) ? value.includes(previousAccordionValue) : value === previousAccordionValue;
        }
      }
    });
    this.getNextSibling = () => {
      if (!this.el) {
        return;
      }
      const nextSibling = this.el.nextElementSibling;
      if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) !== "ION-ACCORDION") {
        return;
      }
      return nextSibling;
    };
    this.getPreviousSibling = () => {
      if (!this.el) {
        return;
      }
      const previousSibling = this.el.previousElementSibling;
      if ((previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.tagName) !== "ION-ACCORDION") {
        return;
      }
      return previousSibling;
    };
    this.state = 1;
    this.isNext = false;
    this.isPrevious = false;
    this.value = `ion-accordion-${accordionIds++}`;
    this.disabled = false;
    this.readonly = false;
    this.toggleIcon = chevronDown;
    this.toggleIconSlot = "end";
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    var _a;
    const accordionGroupEl = this.accordionGroupEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.closest("ion-accordion-group");
    if (accordionGroupEl) {
      this.updateState(true);
      addEventListener(accordionGroupEl, "ionValueChange", this.updateListener);
    }
  }
  disconnectedCallback() {
    const accordionGroupEl = this.accordionGroupEl;
    if (accordionGroupEl) {
      removeEventListener(accordionGroupEl, "ionValueChange", this.updateListener);
    }
  }
  componentDidLoad() {
    this.setItemDefaults();
    this.slotToggleIcon();
    raf(() => {
      const expanded = this.state === 4 || this.state === 8;
      this.setAria(expanded);
    });
  }
  toggleExpanded() {
    const {
      accordionGroupEl,
      disabled,
      readonly,
      value,
      state
    } = this;
    if (disabled || readonly) return;
    if (accordionGroupEl) {
      const expand = state === 1 || state === 2;
      accordionGroupEl.requestAccordionToggle(value, expand);
    }
  }
  render() {
    const {
      disabled,
      readonly
    } = this;
    const mode = getIonMode(this);
    const expanded = this.state === 4 || this.state === 8;
    const headerPart = expanded ? "header expanded" : "header";
    const contentPart = expanded ? "content expanded" : "content";
    this.setAria(expanded);
    return h(Host, {
      key: "073e1d02c18dcbc20c68648426e87c14750c031d",
      class: {
        [mode]: true,
        "accordion-expanding": this.state === 8,
        "accordion-expanded": this.state === 4,
        "accordion-collapsing": this.state === 2,
        "accordion-collapsed": this.state === 1,
        "accordion-next": this.isNext,
        "accordion-previous": this.isPrevious,
        "accordion-disabled": disabled,
        "accordion-readonly": readonly,
        "accordion-animated": this.shouldAnimate()
      }
    }, h("div", {
      key: "9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",
      onClick: () => this.toggleExpanded(),
      id: "header",
      part: headerPart,
      "aria-controls": "content",
      ref: (headerEl) => this.headerEl = headerEl
    }, h("slot", {
      key: "464c32a37f64655eacf4218284214f5f30b14a1e",
      name: "header"
    })), h("div", {
      key: "8bb52e6a62d7de0106b253201a89a32e79d9a594",
      id: "content",
      part: contentPart,
      role: "region",
      "aria-labelledby": "header",
      ref: (contentEl) => this.contentEl = contentEl
    }, h("div", {
      key: "1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",
      id: "content-wrapper",
      ref: (contentElWrapper) => this.contentElWrapper = contentElWrapper
    }, h("slot", {
      key: "970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",
      name: "content"
    }))));
  }
  static get delegatesFocus() {
    return true;
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
var accordionIds = 0;
Accordion.style = {
  ios: IonAccordionIosStyle0,
  md: IonAccordionMdStyle0
};
var accordionGroupIosCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";
var IonAccordionGroupIosStyle0 = accordionGroupIosCss;
var accordionGroupMdCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
var IonAccordionGroupMdStyle0 = accordionGroupMdCss;
var AccordionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.animated = true;
    this.multiple = void 0;
    this.value = void 0;
    this.disabled = false;
    this.readonly = false;
    this.expand = "compact";
  }
  valueChanged() {
    const {
      value,
      multiple
    } = this;
    if (!multiple && Array.isArray(value)) {
      printIonWarning(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
    }
    this.ionValueChange.emit({
      value: this.value
    });
  }
  disabledChanged() {
    return __async(this, null, function* () {
      const {
        disabled
      } = this;
      const accordions = yield this.getAccordions();
      for (const accordion of accordions) {
        accordion.disabled = disabled;
      }
    });
  }
  readonlyChanged() {
    return __async(this, null, function* () {
      const {
        readonly
      } = this;
      const accordions = yield this.getAccordions();
      for (const accordion of accordions) {
        accordion.readonly = readonly;
      }
    });
  }
  onKeydown(ev) {
    return __async(this, null, function* () {
      const activeElement = document.activeElement;
      if (!activeElement) {
        return;
      }
      const activeAccordionHeader = activeElement.closest('ion-accordion [slot="header"]');
      if (!activeAccordionHeader) {
        return;
      }
      const accordionEl = activeElement.tagName === "ION-ACCORDION" ? activeElement : activeElement.closest("ion-accordion");
      if (!accordionEl) {
        return;
      }
      const closestGroup = accordionEl.closest("ion-accordion-group");
      if (closestGroup !== this.el) {
        return;
      }
      const accordions = yield this.getAccordions();
      const startingIndex = accordions.findIndex((a) => a === accordionEl);
      if (startingIndex === -1) {
        return;
      }
      let accordion;
      if (ev.key === "ArrowDown") {
        accordion = this.findNextAccordion(accordions, startingIndex);
      } else if (ev.key === "ArrowUp") {
        accordion = this.findPreviousAccordion(accordions, startingIndex);
      } else if (ev.key === "Home") {
        accordion = accordions[0];
      } else if (ev.key === "End") {
        accordion = accordions[accordions.length - 1];
      }
      if (accordion !== void 0 && accordion !== activeElement) {
        accordion.focus();
      }
    });
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      if (this.disabled) {
        this.disabledChanged();
      }
      if (this.readonly) {
        this.readonlyChanged();
      }
      this.valueChanged();
    });
  }
  /**
   * Sets the value property and emits ionChange.
   * This should only be called when the user interacts
   * with the accordion and not for any update
   * to the value property. The exception is when
   * the app sets the value of a single-select
   * accordion group to an array.
   */
  setValue(accordionValue) {
    const value = this.value = accordionValue;
    this.ionChange.emit({
      value
    });
  }
  /**
   * This method is used to ensure that the value
   * of ion-accordion-group is being set in a valid
   * way. This method should only be called in
   * response to a user generated action.
   * @internal
   */
  requestAccordionToggle(accordionValue, accordionExpand) {
    return __async(this, null, function* () {
      const {
        multiple,
        value,
        readonly,
        disabled
      } = this;
      if (readonly || disabled) {
        return;
      }
      if (accordionExpand) {
        if (multiple) {
          const groupValue = value !== null && value !== void 0 ? value : [];
          const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
          const valueExists = processedValue.find((v) => v === accordionValue);
          if (valueExists === void 0 && accordionValue !== void 0) {
            this.setValue([...processedValue, accordionValue]);
          }
        } else {
          this.setValue(accordionValue);
        }
      } else {
        if (multiple) {
          const groupValue = value !== null && value !== void 0 ? value : [];
          const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
          this.setValue(processedValue.filter((v) => v !== accordionValue));
        } else {
          this.setValue(void 0);
        }
      }
    });
  }
  findNextAccordion(accordions, startingIndex) {
    const nextAccordion = accordions[startingIndex + 1];
    if (nextAccordion === void 0) {
      return accordions[0];
    }
    return nextAccordion;
  }
  findPreviousAccordion(accordions, startingIndex) {
    const prevAccordion = accordions[startingIndex - 1];
    if (prevAccordion === void 0) {
      return accordions[accordions.length - 1];
    }
    return prevAccordion;
  }
  /**
   * @internal
   */
  getAccordions() {
    return __async(this, null, function* () {
      return Array.from(this.el.querySelectorAll(":scope > ion-accordion"));
    });
  }
  render() {
    const {
      disabled,
      readonly,
      expand
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "82f3e77066fabb4736638ee4c487ad56efd39c63",
      class: {
        [mode]: true,
        "accordion-group-disabled": disabled,
        "accordion-group-readonly": readonly,
        [`accordion-group-expand-${expand}`]: true
      },
      role: "presentation"
    }, h("slot", {
      key: "a3c791ea887fc640b512f81d429be465ae902b3d"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"],
      "disabled": ["disabledChanged"],
      "readonly": ["readonlyChanged"]
    };
  }
};
AccordionGroup.style = {
  ios: IonAccordionGroupIosStyle0,
  md: IonAccordionGroupMdStyle0
};
export {
  Accordion as ion_accordion,
  AccordionGroup as ion_accordion_group
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-accordion_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWNjb3JkaW9uXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQsIGMgYXMgY3JlYXRlRXZlbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCB0IGFzIHRyYW5zaXRpb25FbmRBc3luYywgYSBhcyBhZGRFdmVudExpc3RlbmVyLCBiIGFzIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGcgYXMgZ2V0RWxlbWVudFJvb3QgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgbCBhcyBjaGV2cm9uRG93biB9IGZyb20gJy4vaW5kZXgtZTJjZjJjZWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25maWcsIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IHAgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5jb25zdCBhY2NvcmRpb25Jb3NDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfTpob3N0KC5hY2NvcmRpb24tZXhwYW5kaW5nKSA6OnNsb3R0ZWQoaW9uLWl0ZW1bc2xvdD1oZWFkZXJdKSw6aG9zdCguYWNjb3JkaW9uLWV4cGFuZGVkKSA6OnNsb3R0ZWQoaW9uLWl0ZW1bc2xvdD1oZWFkZXJdKXstLWJvcmRlci13aWR0aDowcHh9Omhvc3QoLmFjY29yZGlvbi1hbmltYXRlZCl7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO3RyYW5zaXRpb246YWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSl9Omhvc3QoLmFjY29yZGlvbi1hbmltYXRlZCkgI2NvbnRlbnR7LXdlYmtpdC10cmFuc2l0aW9uOm1heC1oZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKTt0cmFuc2l0aW9uOm1heC1oZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKX0jY29udGVudHtvdmVyZmxvdzpoaWRkZW47d2lsbC1jaGFuZ2U6bWF4LWhlaWdodH06aG9zdCguYWNjb3JkaW9uLWNvbGxhcHNpbmcpICNjb250ZW50e21heC1oZWlnaHQ6MCAhaW1wb3J0YW50fTpob3N0KC5hY2NvcmRpb24tY29sbGFwc2VkKSAjY29udGVudHtkaXNwbGF5Om5vbmV9Omhvc3QoLmFjY29yZGlvbi1leHBhbmRpbmcpICNjb250ZW50e21heC1oZWlnaHQ6MH06aG9zdCguYWNjb3JkaW9uLWV4cGFuZGluZykgI2NvbnRlbnQtd3JhcHBlcntvdmVyZmxvdzphdXRvfTpob3N0KC5hY2NvcmRpb24tZGlzYWJsZWQpICNoZWFkZXIsOmhvc3QoLmFjY29yZGlvbi1yZWFkb25seSkgI2hlYWRlciw6aG9zdCguYWNjb3JkaW9uLWRpc2FibGVkKSAjY29udGVudCw6aG9zdCguYWNjb3JkaW9uLXJlYWRvbmx5KSAjY29udGVudHtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5hY2NvcmRpb24tZGlzYWJsZWQpICNoZWFkZXIsOmhvc3QoLmFjY29yZGlvbi1kaXNhYmxlZCkgI2NvbnRlbnR7b3BhY2l0eTowLjR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpob3N0LCNjb250ZW50ey13ZWJraXQtdHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9fTpob3N0KC5hY2NvcmRpb24tbmV4dCkgOjpzbG90dGVkKGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSl7LS1ib3JkZXItd2lkdGg6MC41NXB4IDBweCAwLjU1cHggMHB4fVwiO1xuY29uc3QgSW9uQWNjb3JkaW9uSW9zU3R5bGUwID0gYWNjb3JkaW9uSW9zQ3NzO1xuY29uc3QgYWNjb3JkaW9uTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfTpob3N0KC5hY2NvcmRpb24tZXhwYW5kaW5nKSA6OnNsb3R0ZWQoaW9uLWl0ZW1bc2xvdD1oZWFkZXJdKSw6aG9zdCguYWNjb3JkaW9uLWV4cGFuZGVkKSA6OnNsb3R0ZWQoaW9uLWl0ZW1bc2xvdD1oZWFkZXJdKXstLWJvcmRlci13aWR0aDowcHh9Omhvc3QoLmFjY29yZGlvbi1hbmltYXRlZCl7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO3RyYW5zaXRpb246YWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSl9Omhvc3QoLmFjY29yZGlvbi1hbmltYXRlZCkgI2NvbnRlbnR7LXdlYmtpdC10cmFuc2l0aW9uOm1heC1oZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKTt0cmFuc2l0aW9uOm1heC1oZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKX0jY29udGVudHtvdmVyZmxvdzpoaWRkZW47d2lsbC1jaGFuZ2U6bWF4LWhlaWdodH06aG9zdCguYWNjb3JkaW9uLWNvbGxhcHNpbmcpICNjb250ZW50e21heC1oZWlnaHQ6MCAhaW1wb3J0YW50fTpob3N0KC5hY2NvcmRpb24tY29sbGFwc2VkKSAjY29udGVudHtkaXNwbGF5Om5vbmV9Omhvc3QoLmFjY29yZGlvbi1leHBhbmRpbmcpICNjb250ZW50e21heC1oZWlnaHQ6MH06aG9zdCguYWNjb3JkaW9uLWV4cGFuZGluZykgI2NvbnRlbnQtd3JhcHBlcntvdmVyZmxvdzphdXRvfTpob3N0KC5hY2NvcmRpb24tZGlzYWJsZWQpICNoZWFkZXIsOmhvc3QoLmFjY29yZGlvbi1yZWFkb25seSkgI2hlYWRlciw6aG9zdCguYWNjb3JkaW9uLWRpc2FibGVkKSAjY29udGVudCw6aG9zdCguYWNjb3JkaW9uLXJlYWRvbmx5KSAjY29udGVudHtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5hY2NvcmRpb24tZGlzYWJsZWQpICNoZWFkZXIsOmhvc3QoLmFjY29yZGlvbi1kaXNhYmxlZCkgI2NvbnRlbnR7b3BhY2l0eTowLjR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpob3N0LCNjb250ZW50ey13ZWJraXQtdHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9fVwiO1xuY29uc3QgSW9uQWNjb3JkaW9uTWRTdHlsZTAgPSBhY2NvcmRpb25NZENzcztcbmNvbnN0IEFjY29yZGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lciA9ICgpID0+IHRoaXMudXBkYXRlU3RhdGUoZmFsc2UpO1xuICAgIHRoaXMuc2V0SXRlbURlZmF1bHRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW9uSXRlbSA9IHRoaXMuZ2V0U2xvdHRlZEhlYWRlcklvbkl0ZW0oKTtcbiAgICAgIGlmICghaW9uSXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEZvciBhMTF5IHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgICAgKiB0aGUgaW9uLWl0ZW0gYSBidXR0b24gc28gdXNlcnNcbiAgICAgICAqIGNhbiB0YWIgdG8gaXQgYW5kIHVzZSBrZXlib2FyZFxuICAgICAgICogbmF2aWdhdGlvbiB0byBnZXQgYXJvdW5kLlxuICAgICAgICovXG4gICAgICBpb25JdGVtLmJ1dHRvbiA9IHRydWU7XG4gICAgICBpb25JdGVtLmRldGFpbCA9IGZhbHNlO1xuICAgICAgLyoqXG4gICAgICAgKiBCeSBkZWZhdWx0LCB0aGUgbGluZXMgaW4gYW5cbiAgICAgICAqIGl0ZW0gc2hvdWxkIGJlIGZ1bGwgaGVyZSwgYnV0XG4gICAgICAgKiBvbmx5IGRvIHRoYXQgaWYgYSB1c2VyIGhhc1xuICAgICAgICogbm90IGV4cGxpY2l0bHkgb3ZlcnJpZGRlbiB0aGVtXG4gICAgICAgKi9cbiAgICAgIGlmIChpb25JdGVtLmxpbmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW9uSXRlbS5saW5lcyA9ICdmdWxsJztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0U2xvdHRlZEhlYWRlcklvbkl0ZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGhlYWRlckVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghaGVhZGVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIGZpcnN0IGlvbi1pdGVtXG4gICAgICAgKiBzbG90dGVkIGluIHRoZSBoZWFkZXIgc2xvdFxuICAgICAgICovXG4gICAgICBjb25zdCBzbG90ID0gaGVhZGVyRWwucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgaWYgKCFzbG90KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFRoaXMgaXMgbm90IGRlZmluZWQgaW4gdW5pdCB0ZXN0c1xuICAgICAgaWYgKHNsb3QuYXNzaWduZWRFbGVtZW50cyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2xvdC5hc3NpZ25lZEVsZW1lbnRzKCkuZmluZChlbCA9PiBlbC50YWdOYW1lID09PSAnSU9OLUlURU0nKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QXJpYSA9IChleHBhbmRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBpb25JdGVtID0gdGhpcy5nZXRTbG90dGVkSGVhZGVySW9uSXRlbSgpO1xuICAgICAgaWYgKCFpb25JdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBuYXRpdmUgPGJ1dHRvbj4gZWxlbWVudCBpbnNpZGUgb2ZcbiAgICAgICAqIGlvbi1pdGVtIGJlY2F1c2UgdGhhdCBpcyB3aGF0IHdpbGwgYmUgZm9jdXNlZFxuICAgICAgICovXG4gICAgICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoaW9uSXRlbSk7XG4gICAgICBjb25zdCBidXR0b24gPSByb290LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGAke2V4cGFuZGVkfWApO1xuICAgIH07XG4gICAgdGhpcy5zbG90VG9nZ2xlSWNvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlvbkl0ZW0gPSB0aGlzLmdldFNsb3R0ZWRIZWFkZXJJb25JdGVtKCk7XG4gICAgICBpZiAoIWlvbkl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICB0b2dnbGVJY29uU2xvdCxcbiAgICAgICAgdG9nZ2xlSWNvblxuICAgICAgfSA9IHRoaXM7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFscmVhZHkgaXMgYSB0b2dnbGUgaWNvbi5cbiAgICAgICAqIElmIHNvLCBkbyBub3QgYWRkIGFub3RoZXIgb25lLlxuICAgICAgICovXG4gICAgICBjb25zdCBleGlzdGluZ1RvZ2dsZUljb24gPSBpb25JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uJyk7XG4gICAgICBpZiAoZXhpc3RpbmdUb2dnbGVJY29uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgICBpY29uRWwuc2xvdCA9IHRvZ2dsZUljb25TbG90O1xuICAgICAgaWNvbkVsLmxhenkgPSBmYWxzZTtcbiAgICAgIGljb25FbC5jbGFzc0xpc3QuYWRkKCdpb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uJyk7XG4gICAgICBpY29uRWwuaWNvbiA9IHRvZ2dsZUljb247XG4gICAgICBpY29uRWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBpb25JdGVtLmFwcGVuZENoaWxkKGljb25FbCk7XG4gICAgfTtcbiAgICB0aGlzLmV4cGFuZEFjY29yZGlvbiA9IChpbml0aWFsVXBkYXRlID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGVudEVsLFxuICAgICAgICBjb250ZW50RWxXcmFwcGVyXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChpbml0aWFsVXBkYXRlIHx8IGNvbnRlbnRFbCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnRFbFdyYXBwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gNCAvKiBBY2NvcmRpb25TdGF0ZS5FeHBhbmRlZCAqLztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IDQgLyogQWNjb3JkaW9uU3RhdGUuRXhwYW5kZWQgKi8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFJhZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY3VycmVudFJhZik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlKCkpIHtcbiAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gOCAvKiBBY2NvcmRpb25TdGF0ZS5FeHBhbmRpbmcgKi87XG4gICAgICAgICAgdGhpcy5jdXJyZW50UmFmID0gcmFmKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50RWxXcmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRGb3JUcmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZEFzeW5jKGNvbnRlbnRFbCwgMjAwMCk7XG4gICAgICAgICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ21heC1oZWlnaHQnLCBgJHtjb250ZW50SGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICBhd2FpdCB3YWl0Rm9yVHJhbnNpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSA0IC8qIEFjY29yZGlvblN0YXRlLkV4cGFuZGVkICovO1xuICAgICAgICAgICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXgtaGVpZ2h0Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDQgLyogQWNjb3JkaW9uU3RhdGUuRXhwYW5kZWQgKi87XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNvbGxhcHNlQWNjb3JkaW9uID0gKGluaXRpYWxVcGRhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250ZW50RWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGluaXRpYWxVcGRhdGUgfHwgY29udGVudEVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogQWNjb3JkaW9uU3RhdGUuQ29sbGFwc2VkICovO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMSAvKiBBY2NvcmRpb25TdGF0ZS5Db2xsYXBzZWQgKi8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFJhZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY3VycmVudFJhZik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlKCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFmID0gcmFmKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ21heC1oZWlnaHQnLCBgJHtjb250ZW50SGVpZ2h0fXB4YCk7XG4gICAgICAgICAgcmFmKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRGb3JUcmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZEFzeW5jKGNvbnRlbnRFbCwgMjAwMCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBBY2NvcmRpb25TdGF0ZS5Db2xsYXBzaW5nICovO1xuICAgICAgICAgICAgYXdhaXQgd2FpdEZvclRyYW5zaXRpb247XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBBY2NvcmRpb25TdGF0ZS5Db2xsYXBzZWQgKi87XG4gICAgICAgICAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21heC1oZWlnaHQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBBY2NvcmRpb25TdGF0ZS5Db2xsYXBzZWQgKi87XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmXG4gICAgICogc29tZXRoaW5nIHNob3VsZCBhbmltYXRlLlxuICAgICAqIElmIHByZWZlcnMtcmVkdWNlZC1tb3Rpb24gaXMgc2V0XG4gICAgICogdGhlbiB3ZSBzaG91bGQgbm90IGFuaW1hdGUsIHJlZ2FyZGxlc3NcbiAgICAgKiBvZiB3aGF0IGlzIHNldCBpbiB0aGUgY29uZmlnLlxuICAgICAqL1xuICAgIHRoaXMuc2hvdWxkQW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgICAgIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBhbmltYXRlZCA9IGNvbmZpZy5nZXQoJ2FuaW1hdGVkJywgdHJ1ZSk7XG4gICAgICBpZiAoIWFuaW1hdGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjY29yZGlvbkdyb3VwRWwgJiYgIXRoaXMuYWNjb3JkaW9uR3JvdXBFbC5hbmltYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlU3RhdGUgPSBhc3luYyAoaW5pdGlhbFVwZGF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBhY2NvcmRpb25Hcm91cCA9IHRoaXMuYWNjb3JkaW9uR3JvdXBFbDtcbiAgICAgIGNvbnN0IGFjY29yZGlvblZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIGlmICghYWNjb3JkaW9uR3JvdXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSBhY2NvcmRpb25Hcm91cC52YWx1ZTtcbiAgICAgIGNvbnN0IHNob3VsZEV4cGFuZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuaW5jbHVkZXMoYWNjb3JkaW9uVmFsdWUpIDogdmFsdWUgPT09IGFjY29yZGlvblZhbHVlO1xuICAgICAgaWYgKHNob3VsZEV4cGFuZCkge1xuICAgICAgICB0aGlzLmV4cGFuZEFjY29yZGlvbihpbml0aWFsVXBkYXRlKTtcbiAgICAgICAgdGhpcy5pc05leHQgPSB0aGlzLmlzUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VBY2NvcmRpb24oaW5pdGlhbFVwZGF0ZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIHBvcG91dCBvciBpbnNldCxcbiAgICAgICAgICogdGhlIGNvbGxhcHNlZCBhY2NvcmRpb24gaXRlbXNcbiAgICAgICAgICogbWF5IG5lZWQgYWRkaXRpb25hbCBib3JkZXIgcmFkaXVzXG4gICAgICAgICAqIGFwcGxpZWQuIENoZWNrIHRvIHNlZSBpZiB0aGVcbiAgICAgICAgICogbmV4dCBvciBwcmV2aW91cyBhY2NvcmRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBuZXh0QWNjb3JkaW9uID0gdGhpcy5nZXROZXh0U2libGluZygpO1xuICAgICAgICBjb25zdCBuZXh0QWNjb3JkaW9uVmFsdWUgPSBuZXh0QWNjb3JkaW9uID09PSBudWxsIHx8IG5leHRBY2NvcmRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRBY2NvcmRpb24udmFsdWU7XG4gICAgICAgIGlmIChuZXh0QWNjb3JkaW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaXNQcmV2aW91cyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuaW5jbHVkZXMobmV4dEFjY29yZGlvblZhbHVlKSA6IHZhbHVlID09PSBuZXh0QWNjb3JkaW9uVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldmlvdXNBY2NvcmRpb24gPSB0aGlzLmdldFByZXZpb3VzU2libGluZygpO1xuICAgICAgICBjb25zdCBwcmV2aW91c0FjY29yZGlvblZhbHVlID0gcHJldmlvdXNBY2NvcmRpb24gPT09IG51bGwgfHwgcHJldmlvdXNBY2NvcmRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXZpb3VzQWNjb3JkaW9uLnZhbHVlO1xuICAgICAgICBpZiAocHJldmlvdXNBY2NvcmRpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pc05leHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmluY2x1ZGVzKHByZXZpb3VzQWNjb3JkaW9uVmFsdWUpIDogdmFsdWUgPT09IHByZXZpb3VzQWNjb3JkaW9uVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0TmV4dFNpYmxpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmICgobmV4dFNpYmxpbmcgPT09IG51bGwgfHwgbmV4dFNpYmxpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRTaWJsaW5nLnRhZ05hbWUpICE9PSAnSU9OLUFDQ09SRElPTicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHRTaWJsaW5nO1xuICAgIH07XG4gICAgdGhpcy5nZXRQcmV2aW91c1NpYmxpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gdGhpcy5lbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKChwcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgcHJldmlvdXNTaWJsaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmV2aW91c1NpYmxpbmcudGFnTmFtZSkgIT09ICdJT04tQUNDT1JESU9OJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nO1xuICAgIH07XG4gICAgdGhpcy5zdGF0ZSA9IDEgLyogQWNjb3JkaW9uU3RhdGUuQ29sbGFwc2VkICovO1xuICAgIHRoaXMuaXNOZXh0ID0gZmFsc2U7XG4gICAgdGhpcy5pc1ByZXZpb3VzID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IGBpb24tYWNjb3JkaW9uLSR7YWNjb3JkaW9uSWRzKyt9YDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgIHRoaXMudG9nZ2xlSWNvbiA9IGNoZXZyb25Eb3duO1xuICAgIHRoaXMudG9nZ2xlSWNvblNsb3QgPSAnZW5kJztcbiAgfVxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBhY2NvcmRpb25Hcm91cEVsID0gdGhpcy5hY2NvcmRpb25Hcm91cEVsID0gKF9hID0gdGhpcy5lbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsb3Nlc3QoJ2lvbi1hY2NvcmRpb24tZ3JvdXAnKTtcbiAgICBpZiAoYWNjb3JkaW9uR3JvdXBFbCkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh0cnVlKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoYWNjb3JkaW9uR3JvdXBFbCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVMaXN0ZW5lcik7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IGFjY29yZGlvbkdyb3VwRWwgPSB0aGlzLmFjY29yZGlvbkdyb3VwRWw7XG4gICAgaWYgKGFjY29yZGlvbkdyb3VwRWwpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoYWNjb3JkaW9uR3JvdXBFbCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVMaXN0ZW5lcik7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5zZXRJdGVtRGVmYXVsdHMoKTtcbiAgICB0aGlzLnNsb3RUb2dnbGVJY29uKCk7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byB3YWl0IGEgdGljayBiZWNhdXNlIHdlXG4gICAgICoganVzdCBzZXQgaW9uSXRlbS5idXR0b24gPSB0cnVlIGFuZFxuICAgICAqIHRoZSBidXR0b24gaGFzIG5vdCBoYXZlIGJlZW4gcmVuZGVyZWQgeWV0LlxuICAgICAqL1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFNldCBhcmlhIGxhYmVsIG9uIGJ1dHRvbiBpbnNpZGUgb2YgaW9uLWl0ZW1cbiAgICAgICAqIG9uY2UgdGhlIGlubmVyIGNvbnRlbnQgaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5zdGF0ZSA9PT0gNCAvKiBBY2NvcmRpb25TdGF0ZS5FeHBhbmRlZCAqLyB8fCB0aGlzLnN0YXRlID09PSA4IC8qIEFjY29yZGlvblN0YXRlLkV4cGFuZGluZyAqLztcbiAgICAgIHRoaXMuc2V0QXJpYShleHBhbmRlZCk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjb3JkaW9uR3JvdXBFbCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVhZG9ubHksXG4gICAgICB2YWx1ZSxcbiAgICAgIHN0YXRlXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlYWRvbmx5KSByZXR1cm47XG4gICAgaWYgKGFjY29yZGlvbkdyb3VwRWwpIHtcbiAgICAgIC8qKlxuICAgICAgICogQmVjYXVzZSB0aGUgYWNjb3JkaW9uIGdyb3VwIG1heSBvciBtYXlcbiAgICAgICAqIG5vdCBhbGxvdyBtdWx0aXBsZSBhY2NvcmRpb25zIG9wZW4sIHdlXG4gICAgICAgKiBuZWVkIHRvIHJlcXVlc3QgdGhlIHRvZ2dsaW5nIG9mIHRoaXNcbiAgICAgICAqIGFjY29yZGlvbiBhbmQgdGhlIGFjY29yZGlvbiBncm91cCB3aWxsXG4gICAgICAgKiBtYWtlIHRoZSBkZWNpc2lvbiBvbiB3aGV0aGVyIG9yIG5vdFxuICAgICAgICogdG8gYWxsb3cgaXQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGV4cGFuZCA9IHN0YXRlID09PSAxIC8qIEFjY29yZGlvblN0YXRlLkNvbGxhcHNlZCAqLyB8fCBzdGF0ZSA9PT0gMiAvKiBBY2NvcmRpb25TdGF0ZS5Db2xsYXBzaW5nICovO1xuICAgICAgYWNjb3JkaW9uR3JvdXBFbC5yZXF1ZXN0QWNjb3JkaW9uVG9nZ2xlKHZhbHVlLCBleHBhbmQpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICByZWFkb25seVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5zdGF0ZSA9PT0gNCAvKiBBY2NvcmRpb25TdGF0ZS5FeHBhbmRlZCAqLyB8fCB0aGlzLnN0YXRlID09PSA4IC8qIEFjY29yZGlvblN0YXRlLkV4cGFuZGluZyAqLztcbiAgICBjb25zdCBoZWFkZXJQYXJ0ID0gZXhwYW5kZWQgPyAnaGVhZGVyIGV4cGFuZGVkJyA6ICdoZWFkZXInO1xuICAgIGNvbnN0IGNvbnRlbnRQYXJ0ID0gZXhwYW5kZWQgPyAnY29udGVudCBleHBhbmRlZCcgOiAnY29udGVudCc7XG4gICAgdGhpcy5zZXRBcmlhKGV4cGFuZGVkKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcwNzNlMWQwMmMxOGRjYmMyMGM2ODY0ODQyNmU4N2MxNDc1MGMwMzFkJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2FjY29yZGlvbi1leHBhbmRpbmcnOiB0aGlzLnN0YXRlID09PSA4IC8qIEFjY29yZGlvblN0YXRlLkV4cGFuZGluZyAqLyxcbiAgICAgICAgJ2FjY29yZGlvbi1leHBhbmRlZCc6IHRoaXMuc3RhdGUgPT09IDQgLyogQWNjb3JkaW9uU3RhdGUuRXhwYW5kZWQgKi8sXG4gICAgICAgICdhY2NvcmRpb24tY29sbGFwc2luZyc6IHRoaXMuc3RhdGUgPT09IDIgLyogQWNjb3JkaW9uU3RhdGUuQ29sbGFwc2luZyAqLyxcbiAgICAgICAgJ2FjY29yZGlvbi1jb2xsYXBzZWQnOiB0aGlzLnN0YXRlID09PSAxIC8qIEFjY29yZGlvblN0YXRlLkNvbGxhcHNlZCAqLyxcbiAgICAgICAgJ2FjY29yZGlvbi1uZXh0JzogdGhpcy5pc05leHQsXG4gICAgICAgICdhY2NvcmRpb24tcHJldmlvdXMnOiB0aGlzLmlzUHJldmlvdXMsXG4gICAgICAgICdhY2NvcmRpb24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2FjY29yZGlvbi1yZWFkb25seSc6IHJlYWRvbmx5LFxuICAgICAgICAnYWNjb3JkaW9uLWFuaW1hdGVkJzogdGhpcy5zaG91bGRBbmltYXRlKClcbiAgICAgIH1cbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzliNGNmMzI2ZGU4YmI2YjQwMzM5OTI5MDNjMGMxYmZkN2VlYTliY2MnLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy50b2dnbGVFeHBhbmRlZCgpLFxuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBwYXJ0OiBoZWFkZXJQYXJ0LFxuICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiY29udGVudFwiLFxuICAgICAgcmVmOiBoZWFkZXJFbCA9PiB0aGlzLmhlYWRlckVsID0gaGVhZGVyRWxcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc0NjRjMzJhMzdmNjQ2NTVlYWNmNDIxODI4NDIxNGY1ZjMwYjE0YTFlJyxcbiAgICAgIG5hbWU6IFwiaGVhZGVyXCJcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnOGJiNTJlNmE2MmQ3ZGUwMTA2YjI1MzIwMWE4OWEzMmU3OWQ5YTU5NCcsXG4gICAgICBpZDogXCJjb250ZW50XCIsXG4gICAgICBwYXJ0OiBjb250ZW50UGFydCxcbiAgICAgIHJvbGU6IFwicmVnaW9uXCIsXG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImhlYWRlclwiLFxuICAgICAgcmVmOiBjb250ZW50RWwgPT4gdGhpcy5jb250ZW50RWwgPSBjb250ZW50RWxcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzFkOWRmZDk1MmFkNDkzNzU0YWFlZWE3YThmNjI1YjMzYzJkZDkwYTAnLFxuICAgICAgaWQ6IFwiY29udGVudC13cmFwcGVyXCIsXG4gICAgICByZWY6IGNvbnRlbnRFbFdyYXBwZXIgPT4gdGhpcy5jb250ZW50RWxXcmFwcGVyID0gY29udGVudEVsV3JhcHBlclxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzk3MGRmYmM1NWE2MTJkNzM5ZDBjYTNiN2IxYTA4ZTVjOTZkMGM0NzknLFxuICAgICAgbmFtZTogXCJjb250ZW50XCJcbiAgICB9KSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgYWNjb3JkaW9uSWRzID0gMDtcbkFjY29yZGlvbi5zdHlsZSA9IHtcbiAgaW9zOiBJb25BY2NvcmRpb25Jb3NTdHlsZTAsXG4gIG1kOiBJb25BY2NvcmRpb25NZFN0eWxlMFxufTtcbmNvbnN0IGFjY29yZGlvbkdyb3VwSW9zQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0KXstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9Omhvc3QoLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQpIDo6c2xvdHRlZChpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcpLDpob3N0KC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0KSA6OnNsb3R0ZWQoaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQpe2JvcmRlci1ib3R0b206bm9uZX1cIjtcbmNvbnN0IElvbkFjY29yZGlvbkdyb3VwSW9zU3R5bGUwID0gYWNjb3JkaW9uR3JvdXBJb3NDc3M7XG5jb25zdCBhY2NvcmRpb25Hcm91cE1kQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0KXstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9Omhvc3QoLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQpIDo6c2xvdHRlZChpb24tYWNjb3JkaW9uKXstd2Via2l0LWJveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Omhvc3QoLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQpIDo6c2xvdHRlZChpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcpLDpob3N0KC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0KSA6OnNsb3R0ZWQoaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoxNnB4O21hcmdpbi1ib3R0b206MTZweDtib3JkZXItcmFkaXVzOjZweH06aG9zdCguYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCkgOjpzbG90dGVkKGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLXByZXZpb3VzKXtib3JkZXItZW5kLWVuZC1yYWRpdXM6NnB4O2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjZweH06aG9zdCguYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCkgOjpzbG90dGVkKGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLW5leHQpe2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6NnB4O2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjZweH06aG9zdCguYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCkgOjpzbG90dGVkKGlvbi1hY2NvcmRpb24pOmZpcnN0LW9mLXR5cGV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVwiO1xuY29uc3QgSW9uQWNjb3JkaW9uR3JvdXBNZFN0eWxlMCA9IGFjY29yZGlvbkdyb3VwTWRDc3M7XG5jb25zdCBBY2NvcmRpb25Hcm91cCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlvblZhbHVlQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25WYWx1ZUNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm11bHRpcGxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLmV4cGFuZCA9ICdjb21wYWN0JztcbiAgfVxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBtdWx0aXBsZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmICghbXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIC8qKlxuICAgICAgICogV2UgZG8gc29tZSBwcm9jZXNzaW5nIG9uIHRoZSBgdmFsdWVgIGFycmF5IHNvXG4gICAgICAgKiB0aGF0IGl0IGxvb2tzIG1vcmUgbGlrZSBhbiBhcnJheSB3aGVuIGxvZ2dlZCB0b1xuICAgICAgICogdGhlIGNvbnNvbGUuXG4gICAgICAgKiBFeGFtcGxlIGdpdmVuIFsnYScsICdiJ11cbiAgICAgICAqIERlZmF1bHQgdG9TdHJpbmcoKSBiZWhhdmlvcjogYSxiXG4gICAgICAgKiBDdXN0b20gYmVoYXZpb3I6IFsnYScsICdiJ11cbiAgICAgICAqL1xuICAgICAgcHJpbnRJb25XYXJuaW5nKGBpb24tYWNjb3JkaW9uLWdyb3VwIHdhcyBwYXNzZWQgYW4gYXJyYXkgb2YgdmFsdWVzLCBidXQgbXVsdGlwbGU9XCJmYWxzZVwiLiBUaGlzIGlzIGluY29ycmVjdCB1c2FnZSBhbmQgbWF5IHJlc3VsdCBpbiB1bmV4cGVjdGVkIGJlaGF2aW9ycy4gVG8gZGlzbWlzcyB0aGlzIHdhcm5pbmcsIHBhc3MgYSBzdHJpbmcgdG8gdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSB3aGVuIG11bHRpcGxlPVwiZmFsc2VcIi5cblxuICBWYWx1ZSBQYXNzZWQ6IFske3ZhbHVlLm1hcCh2ID0+IGAnJHt2fSdgKS5qb2luKCcsICcpfV1cbmAsIHRoaXMuZWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEbyBub3QgdXNlIGB2YWx1ZWAgaGVyZSBhcyB0aGF0IHdpbGwgYmVcbiAgICAgKiBub3QgYWNjb3VudCBmb3IgdGhlIGFkanVzdG1lbnQgd2UgbWFrZSBhYm92ZS5cbiAgICAgKi9cbiAgICB0aGlzLmlvblZhbHVlQ2hhbmdlLmVtaXQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KTtcbiAgfVxuICBhc3luYyBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhY2NvcmRpb25zID0gYXdhaXQgdGhpcy5nZXRBY2NvcmRpb25zKCk7XG4gICAgZm9yIChjb25zdCBhY2NvcmRpb24gb2YgYWNjb3JkaW9ucykge1xuICAgICAgYWNjb3JkaW9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9XG4gIGFzeW5jIHJlYWRvbmx5Q2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWFkb25seVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBhd2FpdCB0aGlzLmdldEFjY29yZGlvbnMoKTtcbiAgICBmb3IgKGNvbnN0IGFjY29yZGlvbiBvZiBhY2NvcmRpb25zKSB7XG4gICAgICBhY2NvcmRpb24ucmVhZG9ubHkgPSByZWFkb25seTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25LZXlkb3duKGV2KSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFhY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBmb2N1cyBpcyBpbiB0aGUgaGVhZGVyLCBub3QgdGhlIGJvZHksIG9mIHRoZSBhY2NvcmRpb24uIFRoaXMgZW5zdXJlc1xuICAgICAqIHRoYXQgaWYgdGhlcmUgYXJlIGFueSBpbnRlcmFjdGFibGUgZWxlbWVudHMgaW4gdGhlIGJvZHksIHRoZWlyIGtleWJvYXJkXG4gICAgICogaW50ZXJhY3Rpb24gZG9lc24ndCBnZXQgc3RvbGVuIGJ5IHRoZSBhY2NvcmRpb24uIEV4YW1wbGU6IHVzaW5nIHVwL2Rvd24ga2V5c1xuICAgICAqIGluIGlvbi10ZXh0YXJlYS5cbiAgICAgKi9cbiAgICBjb25zdCBhY3RpdmVBY2NvcmRpb25IZWFkZXIgPSBhY3RpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1hY2NvcmRpb24gW3Nsb3Q9XCJoZWFkZXJcIl0nKTtcbiAgICBpZiAoIWFjdGl2ZUFjY29yZGlvbkhlYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhY2NvcmRpb25FbCA9IGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lPTi1BQ0NPUkRJT04nID8gYWN0aXZlRWxlbWVudCA6IGFjdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWFjY29yZGlvbicpO1xuICAgIGlmICghYWNjb3JkaW9uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xvc2VzdEdyb3VwID0gYWNjb3JkaW9uRWwuY2xvc2VzdCgnaW9uLWFjY29yZGlvbi1ncm91cCcpO1xuICAgIGlmIChjbG9zZXN0R3JvdXAgIT09IHRoaXMuZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGFjdGl2ZSBhY2NvcmRpb24gaXMgbm90IGluIHRoZSBjdXJyZW50IGFycmF5IG9mIGFjY29yZGlvbnMsIGRvIG5vdCBkbyBhbnl0aGluZ1xuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBhd2FpdCB0aGlzLmdldEFjY29yZGlvbnMoKTtcbiAgICBjb25zdCBzdGFydGluZ0luZGV4ID0gYWNjb3JkaW9ucy5maW5kSW5kZXgoYSA9PiBhID09PSBhY2NvcmRpb25FbCk7XG4gICAgaWYgKHN0YXJ0aW5nSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhY2NvcmRpb247XG4gICAgaWYgKGV2LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGFjY29yZGlvbiA9IHRoaXMuZmluZE5leHRBY2NvcmRpb24oYWNjb3JkaW9ucywgc3RhcnRpbmdJbmRleCk7XG4gICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgYWNjb3JkaW9uID0gdGhpcy5maW5kUHJldmlvdXNBY2NvcmRpb24oYWNjb3JkaW9ucywgc3RhcnRpbmdJbmRleCk7XG4gICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdIb21lJykge1xuICAgICAgYWNjb3JkaW9uID0gYWNjb3JkaW9uc1swXTtcbiAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0VuZCcpIHtcbiAgICAgIGFjY29yZGlvbiA9IGFjY29yZGlvbnNbYWNjb3JkaW9ucy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgaWYgKGFjY29yZGlvbiAhPT0gdW5kZWZpbmVkICYmIGFjY29yZGlvbiAhPT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgYWNjb3JkaW9uLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLnJlYWRvbmx5Q2hhbmdlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIGJpbmRpbmcgdmFsdWVzIGluIGZyYW1ld29ya3Mgc3VjaCBhcyBBbmd1bGFyXG4gICAgICogaXQgaXMgcG9zc2libGUgZm9yIHRoZSB2YWx1ZSB0byBiZSBzZXQgYWZ0ZXIgdGhlIFdlYiBDb21wb25lbnRcbiAgICAgKiBpbml0aWFsaXplcyBidXQgYmVmb3JlIHRoZSB2YWx1ZSB3YXRjaGVyIGlzIHNldCB1cCBpbiBTdGVuY2lsLlxuICAgICAqIEFzIGEgcmVzdWx0LCB0aGUgd2F0Y2hlciBjYWxsYmFjayBtYXkgbm90IGJlIGZpcmVkLlxuICAgICAqIFdlIHdvcmsgYXJvdW5kIHRoaXMgYnkgbWFudWFsbHkgY2FsbGluZyB0aGUgd2F0Y2hlclxuICAgICAqIGNhbGxiYWNrIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkIGFuZCB0aGUgd2F0Y2hlclxuICAgICAqIGlzIGNvbmZpZ3VyZWQuXG4gICAgICovXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgcHJvcGVydHkgYW5kIGVtaXRzIGlvbkNoYW5nZS5cbiAgICogVGhpcyBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHNcbiAgICogd2l0aCB0aGUgYWNjb3JkaW9uIGFuZCBub3QgZm9yIGFueSB1cGRhdGVcbiAgICogdG8gdGhlIHZhbHVlIHByb3BlcnR5LiBUaGUgZXhjZXB0aW9uIGlzIHdoZW5cbiAgICogdGhlIGFwcCBzZXRzIHRoZSB2YWx1ZSBvZiBhIHNpbmdsZS1zZWxlY3RcbiAgICogYWNjb3JkaW9uIGdyb3VwIHRvIGFuIGFycmF5LlxuICAgKi9cbiAgc2V0VmFsdWUoYWNjb3JkaW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUgPSBhY2NvcmRpb25WYWx1ZTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgdGhlIHZhbHVlXG4gICAqIG9mIGlvbi1hY2NvcmRpb24tZ3JvdXAgaXMgYmVpbmcgc2V0IGluIGEgdmFsaWRcbiAgICogd2F5LiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgaW5cbiAgICogcmVzcG9uc2UgdG8gYSB1c2VyIGdlbmVyYXRlZCBhY3Rpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcmVxdWVzdEFjY29yZGlvblRvZ2dsZShhY2NvcmRpb25WYWx1ZSwgYWNjb3JkaW9uRXhwYW5kKSB7XG4gICAgY29uc3Qge1xuICAgICAgbXVsdGlwbGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIHJlYWRvbmx5LFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcztcbiAgICBpZiAocmVhZG9ubHkgfHwgZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjY29yZGlvbkV4cGFuZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBncm91cCBhY2NlcHRzIG11bHRpcGxlIHZhbHVlc1xuICAgICAgICogY2hlY2sgdG8gc2VlIGlmIHZhbHVlIGlzIGFscmVhZHkgaW5cbiAgICAgICAqIGluIHZhbHVlcyBhcnJheS4gSWYgbm90LCBhZGQgaXRcbiAgICAgICAqIHRvIHRoZSBhcnJheS5cbiAgICAgICAqL1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBbXTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkVmFsdWUgPSBBcnJheS5pc0FycmF5KGdyb3VwVmFsdWUpID8gZ3JvdXBWYWx1ZSA6IFtncm91cFZhbHVlXTtcbiAgICAgICAgY29uc3QgdmFsdWVFeGlzdHMgPSBwcm9jZXNzZWRWYWx1ZS5maW5kKHYgPT4gdiA9PT0gYWNjb3JkaW9uVmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVFeGlzdHMgPT09IHVuZGVmaW5lZCAmJiBhY2NvcmRpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZShbLi4ucHJvY2Vzc2VkVmFsdWUsIGFjY29yZGlvblZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoYWNjb3JkaW9uVmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIGNvbGxhcHNpbmcgYWNjb3JkaW9uLCBlaXRoZXIgZmlsdGVyIHRoZSB2YWx1ZVxuICAgICAgICogb3V0IG9mIHRoZSB2YWx1ZXMgYXJyYXkgb3IgdW5zZXQgdGhlIHZhbHVlLlxuICAgICAgICovXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IFtdO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkoZ3JvdXBWYWx1ZSkgPyBncm91cFZhbHVlIDogW2dyb3VwVmFsdWVdO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHByb2Nlc3NlZFZhbHVlLmZpbHRlcih2ID0+IHYgIT09IGFjY29yZGlvblZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZpbmROZXh0QWNjb3JkaW9uKGFjY29yZGlvbnMsIHN0YXJ0aW5nSW5kZXgpIHtcbiAgICBjb25zdCBuZXh0QWNjb3JkaW9uID0gYWNjb3JkaW9uc1tzdGFydGluZ0luZGV4ICsgMV07XG4gICAgaWYgKG5leHRBY2NvcmRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFjY29yZGlvbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBuZXh0QWNjb3JkaW9uO1xuICB9XG4gIGZpbmRQcmV2aW91c0FjY29yZGlvbihhY2NvcmRpb25zLCBzdGFydGluZ0luZGV4KSB7XG4gICAgY29uc3QgcHJldkFjY29yZGlvbiA9IGFjY29yZGlvbnNbc3RhcnRpbmdJbmRleCAtIDFdO1xuICAgIGlmIChwcmV2QWNjb3JkaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhY2NvcmRpb25zW2FjY29yZGlvbnMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBwcmV2QWNjb3JkaW9uO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGdldEFjY29yZGlvbnMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24tYWNjb3JkaW9uJykpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlYWRvbmx5LFxuICAgICAgZXhwYW5kXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnODJmM2U3NzA2NmZhYmI0NzM2NjM4ZWU0YzQ4N2FkNTZlZmQzOWM2MycsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdhY2NvcmRpb24tZ3JvdXAtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2FjY29yZGlvbi1ncm91cC1yZWFkb25seSc6IHJlYWRvbmx5LFxuICAgICAgICBbYGFjY29yZGlvbi1ncm91cC1leHBhbmQtJHtleHBhbmR9YF06IHRydWVcbiAgICAgIH0sXG4gICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnYTNjNzkxZWE4ODdmYzY0MGI1MTJmODFkNDI5YmU0NjVhZTkwMmIzZCdcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdLFxuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICBcInJlYWRvbmx5XCI6IFtcInJlYWRvbmx5Q2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5BY2NvcmRpb25Hcm91cC5zdHlsZSA9IHtcbiAgaW9zOiBJb25BY2NvcmRpb25Hcm91cElvc1N0eWxlMCxcbiAgbWQ6IElvbkFjY29yZGlvbkdyb3VwTWRTdHlsZTBcbn07XG5leHBvcnQgeyBBY2NvcmRpb24gYXMgaW9uX2FjY29yZGlvbiwgQWNjb3JkaW9uR3JvdXAgYXMgaW9uX2FjY29yZGlvbl9ncm91cCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLGtCQUFrQjtBQUN4QixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHVCQUF1QjtBQUM3QixJQUFNLFlBQVksTUFBTTtBQUFBLEVBQ3RCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssaUJBQWlCLE1BQU0sS0FBSyxZQUFZLEtBQUs7QUFDbEQsU0FBSyxrQkFBa0IsTUFBTTtBQUMzQixZQUFNLFVBQVUsS0FBSyx3QkFBd0I7QUFDN0MsVUFBSSxDQUFDLFNBQVM7QUFDWjtBQUFBLE1BQ0Y7QUFPQSxjQUFRLFNBQVM7QUFDakIsY0FBUSxTQUFTO0FBT2pCLFVBQUksUUFBUSxVQUFVLFFBQVc7QUFDL0IsZ0JBQVEsUUFBUTtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUNBLFNBQUssMEJBQTBCLE1BQU07QUFDbkMsWUFBTTtBQUFBLFFBQ0o7QUFBQSxNQUNGLElBQUk7QUFDSixVQUFJLENB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
