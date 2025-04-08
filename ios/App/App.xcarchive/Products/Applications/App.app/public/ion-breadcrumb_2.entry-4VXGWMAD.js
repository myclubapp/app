import {
  chevronForwardOutline,
  ellipsisHorizontal
} from "./chunk-Y2OY2WAF.js";
import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-QQMTNXUN.js";
import {
  inheritAriaAttributes
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
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-breadcrumb_2.entry.js
var breadcrumbIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #2d4665));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, rgba(233, 237, 243, 0.7)));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, var(--ion-text-color-step-250, #445b78))}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-400, var(--ion-text-color-step-600, #92a0b3));font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #242d39))}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e9edf3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9e0ea))}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}";
var IonBreadcrumbIosStyle0 = breadcrumbIosCss;
var breadcrumbMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #677483));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, var(--ion-text-color-step-200, #35404e));--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, #fff))}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-550, var(--ion-text-color-step-450, #7d8894));font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #222d3a))}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #eef1f3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #dfe5e8))}";
var IonBreadcrumbMdStyle0 = breadcrumbMdCss;
var Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.collapsedClick = createEvent(this, "collapsedClick", 7);
    this.inheritedAttributes = {};
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.collapsedIndicatorClick = () => {
      this.collapsedClick.emit({
        ionShadowTarget: this.collapsedRef
      });
    };
    this.collapsed = false;
    this.last = void 0;
    this.showCollapsedIndicator = void 0;
    this.color = void 0;
    this.active = false;
    this.disabled = false;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.separator = void 0;
    this.target = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  isClickable() {
    return this.href !== void 0;
  }
  render() {
    const {
      color,
      active,
      collapsed,
      disabled,
      download,
      el,
      inheritedAttributes,
      last,
      routerAnimation,
      routerDirection,
      separator,
      showCollapsedIndicator,
      target
    } = this;
    const clickable = this.isClickable();
    const TagType = this.href === void 0 ? "span" : "a";
    const href = disabled ? void 0 : this.href;
    const mode = getIonMode(this);
    const attrs = TagType === "span" ? {} : {
      download,
      href,
      target
    };
    const showSeparator = last ? false : collapsed ? showCollapsedIndicator && !last ? true : false : separator;
    return h(Host, {
      key: "32ca61c83721dff52b5e97171ed449dce3584a55",
      onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation),
      "aria-disabled": disabled ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        "breadcrumb-active": active,
        "breadcrumb-collapsed": collapsed,
        "breadcrumb-disabled": disabled,
        "in-breadcrumbs-color": hostContext("ion-breadcrumbs[color]", el),
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "ion-activatable": clickable,
        "ion-focusable": clickable
      })
    }, h(TagType, Object.assign({
      key: "479feb845f4a6d8009d5422b33eb423730b9722b"
    }, attrs, {
      class: "breadcrumb-native",
      part: "native",
      disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, inheritedAttributes), h("slot", {
      key: "3c5dcaeb0d258235d1b7707868026ff1d1404099",
      name: "start"
    }), h("slot", {
      key: "f1cfb934443cd97dc220882c5e3596ea879d66cf"
    }), h("slot", {
      key: "539710121b5b1f3ee8d4c24a9651b67c2ae08add",
      name: "end"
    })), showCollapsedIndicator && h("button", {
      key: "ed53a95ccd89022c8b7bee0658a221ec62a5c73b",
      part: "collapsed-indicator",
      "aria-label": "Show more breadcrumbs",
      onClick: () => this.collapsedIndicatorClick(),
      ref: (collapsedEl) => this.collapsedRef = collapsedEl,
      class: {
        "breadcrumbs-collapsed-indicator": true
      }
    }, h("ion-icon", {
      key: "a849e1142a86f06f207cf11662fa2a560ab7fc6a",
      "aria-hidden": "true",
      icon: ellipsisHorizontal,
      lazy: false
    })), showSeparator && /**
     * Separators should not be announced by narrators.
     * We add aria-hidden on the span so that this applies
     * to any custom separators too.
     */
    h("span", {
      key: "fc3c741cb01fafef8b26046c7ee5b190efc69a7c",
      class: "breadcrumb-separator",
      part: "separator",
      "aria-hidden": "true"
    }, h("slot", {
      key: "4871932ae1dae520767e0713e7cee2d11b0bba6d",
      name: "separator"
    }, mode === "ios" ? h("ion-icon", {
      icon: chevronForwardOutline,
      lazy: false,
      "flip-rtl": true
    }) : h("span", null, "/"))));
  }
  get el() {
    return getElement(this);
  }
};
Breadcrumb.style = {
  ios: IonBreadcrumbIosStyle0,
  md: IonBreadcrumbMdStyle0
};
var breadcrumbsIosCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}";
var IonBreadcrumbsIosStyle0 = breadcrumbsIosCss;
var breadcrumbsMdCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}";
var IonBreadcrumbsMdStyle0 = breadcrumbsMdCss;
var Breadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCollapsedClick = createEvent(this, "ionCollapsedClick", 7);
    this.breadcrumbsInit = () => {
      this.setBreadcrumbSeparator();
      this.setMaxItems();
    };
    this.resetActiveBreadcrumb = () => {
      const breadcrumbs = this.getBreadcrumbs();
      const activeBreadcrumb = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      if (activeBreadcrumb && this.activeChanged) {
        activeBreadcrumb.active = false;
      }
    };
    this.setMaxItems = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      for (const breadcrumb of breadcrumbs) {
        breadcrumb.showCollapsedIndicator = false;
        breadcrumb.collapsed = false;
      }
      const shouldCollapse = maxItems !== void 0 && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
      if (shouldCollapse) {
        breadcrumbs.forEach((breadcrumb, index) => {
          if (index === itemsBeforeCollapse) {
            breadcrumb.showCollapsedIndicator = true;
          }
          if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
            breadcrumb.collapsed = true;
          }
        });
      }
    };
    this.setBreadcrumbSeparator = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      const active = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      for (const breadcrumb of breadcrumbs) {
        const last = maxItems !== void 0 && itemsAfterCollapse === 0 ? breadcrumb === breadcrumbs[itemsBeforeCollapse] : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
        breadcrumb.last = last;
        const separator = breadcrumb.separator !== void 0 ? breadcrumb.separator : last ? void 0 : true;
        breadcrumb.separator = separator;
        if (!active && last) {
          breadcrumb.active = true;
          this.activeChanged = true;
        }
      }
    };
    this.getBreadcrumbs = () => {
      return Array.from(this.el.querySelectorAll("ion-breadcrumb"));
    };
    this.slotChanged = () => {
      this.resetActiveBreadcrumb();
      this.breadcrumbsInit();
    };
    this.collapsed = void 0;
    this.activeChanged = void 0;
    this.color = void 0;
    this.maxItems = void 0;
    this.itemsBeforeCollapse = 1;
    this.itemsAfterCollapse = 1;
  }
  onCollapsedClick(ev) {
    const breadcrumbs = this.getBreadcrumbs();
    const collapsedBreadcrumbs = breadcrumbs.filter((breadcrumb) => breadcrumb.collapsed);
    this.ionCollapsedClick.emit(Object.assign(Object.assign({}, ev.detail), {
      collapsedBreadcrumbs
    }));
  }
  maxItemsChanged() {
    this.resetActiveBreadcrumb();
    this.breadcrumbsInit();
  }
  componentWillLoad() {
    this.breadcrumbsInit();
  }
  render() {
    const {
      color,
      collapsed
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "fe64e9cdf597ede2db140bf5fa05a0359d82db57",
      class: createColorClasses(color, {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "breadcrumbs-collapsed": collapsed
      })
    }, h("slot", {
      key: "a2c99b579e339055c50a613d5c6b61032f5ddffe",
      onSlotchange: this.slotChanged
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "maxItems": ["maxItemsChanged"],
      "itemsBeforeCollapse": ["maxItemsChanged"],
      "itemsAfterCollapse": ["maxItemsChanged"]
    };
  }
};
Breadcrumbs.style = {
  ios: IonBreadcrumbsIosStyle0,
  md: IonBreadcrumbsMdStyle0
};
export {
  Breadcrumb as ion_breadcrumb,
  Breadcrumbs as ion_breadcrumbs
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-breadcrumb_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYnJlYWRjcnVtYl8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcyB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBtIGFzIGNoZXZyb25Gb3J3YXJkT3V0bGluZSwgbiBhcyBlbGxpcHNpc0hvcml6b250YWwgfSBmcm9tICcuL2luZGV4LWUyY2YyY2ViLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IGJyZWFkY3J1bWJJb3NDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjAgMCBhdXRvO2ZsZXg6MCAwIGF1dG87LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX0uYnJlYWRjcnVtYi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6aW5oZXJpdH06aG9zdCguYnJlYWRjcnVtYi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpe2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2ZSl9Omhvc3QoLmlvbi1mb2N1c2VkKXtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWZvY3VzZWQpIC5icmVhZGNydW1iLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguaW9uLWFjdGl2YXRhYmxlOmhvdmVyKXtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pbi1icmVhZGNydW1icy1jb2xvcjpob3ZlciksOmhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pb24tY29sb3I6aG92ZXIpe2NvbG9yOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9fS5icmVhZGNydW1iLXNlcGFyYXRvcntkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KC5icmVhZGNydW1iLWNvbGxhcHNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2Rpc3BsYXk6bm9uZX06aG9zdCguaW4tYnJlYWRjcnVtYnMtY29sb3IpLDpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvcikgLmJyZWFkY3J1bWItc2VwYXJhdG9ye2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpLDpob3N0KC5pbi10b29sYmFyLWNvbG9yKSAuYnJlYWRjcnVtYi1zZXBhcmF0b3J7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC44KX06aG9zdCguaW4tdG9vbGJhci1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcntwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE0cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNHB4O21hcmdpbi1pbmxpbmUtZW5kOjE0cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDEgMTAwJTtmbGV4OjEgMSAxMDAlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMnB4O2hlaWdodDoxOHB4O2JvcmRlcjowO291dGxpbmU6bm9uZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257bWFyZ2luLXRvcDoxcHg7Zm9udC1zaXplOjEuMzc1cmVtfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzJkNDY2NSkpOy0tY29sb3ItYWN0aXZlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWhvdmVyOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3ItYWN0aXZlKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgcmdiYSgyMzMsIDIzNywgMjQzLCAwLjcpKSk7Zm9udC1zaXplOmNsYW1wKDE2cHgsIDFyZW0sIDIycHgpfTpob3N0KC5icmVhZGNydW1iLWFjdGl2ZSl7Zm9udC13ZWlnaHQ6NjAwfS5icmVhZGNydW1iLW5hdGl2ZXtib3JkZXItcmFkaXVzOjRweDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTJweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTJweDtwYWRkaW5nLWlubGluZS1lbmQ6MTJweDtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnJlYWRjcnVtYi1uYXRpdmV7Ym9yZGVyLXJhZGl1czo4cHh9Omhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnJlYWRjcnVtYi1uYXRpdmUsOmhvc3QoLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWZvY3VzZWQpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yLmlvbi1mb2N1c2VkKSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIDo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTI1MCwgIzQ0NWI3OCkpfS5icmVhZGNydW1iLXNlcGFyYXRvcntjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDUwLCAjNzM4NDlhKSl9OjpzbG90dGVkKGlvbi1pY29uKXtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTJhMGIzKSk7Zm9udC1zaXplOm1pbigxLjEyNXJlbSwgMjEuNnB4KX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweH06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpIDo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI0MmQzOSkpfS5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U5ZWRmMykpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3Mzg0OWEpKX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcjpob3ZlcntvcGFjaXR5OjAuNDV9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3I6Zm9jdXN7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZDllMGVhKSl9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257Zm9udC1zaXplOm1pbigxLjM3NXJlbSwgMjJweCl9XCI7XG5jb25zdCBJb25CcmVhZGNydW1iSW9zU3R5bGUwID0gYnJlYWRjcnVtYklvc0NzcztcbmNvbnN0IGJyZWFkY3J1bWJNZENzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MCAwIGF1dG87ZmxleDowIDAgYXV0bzstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6MXJlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41fS5icmVhZGNydW1iLW5hdGl2ZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDppbmhlcml0fTpob3N0KC5icmVhZGNydW1iLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0tY29sb3ItYWN0aXZlKX06aG9zdCguaW9uLWZvY3VzZWQpe2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5pb24tYWN0aXZhdGFibGU6aG92ZXIpe2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX06aG9zdCguaW9uLWFjdGl2YXRhYmxlLmluLWJyZWFkY3J1bWJzLWNvbG9yOmhvdmVyKSw6aG9zdCguaW9uLWFjdGl2YXRhYmxlLmlvbi1jb2xvcjpob3Zlcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXNoYWRlKX19LmJyZWFkY3J1bWItc2VwYXJhdG9ye2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QoLmJyZWFkY3J1bWItY29sbGFwc2VkKSAuYnJlYWRjcnVtYi1uYXRpdmV7ZGlzcGxheTpub25lfTpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvciksOmhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yLmJyZWFkY3J1bWItYWN0aXZlKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yKSAuYnJlYWRjcnVtYi1zZXBhcmF0b3J7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4tdG9vbGJhci1jb2xvciksOmhvc3QoLmluLXRvb2xiYXItY29sb3IpIC5icmVhZGNydW1iLXNlcGFyYXRvcntjb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjgpfTpob3N0KC5pbi10b29sYmFyLWNvbG9yLmJyZWFkY3J1bWItYWN0aXZlKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTRweDttYXJnaW4taW5saW5lLXN0YXJ0OjE0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjE0cHg7bWFyZ2luLWlubGluZS1lbmQ6MTRweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjEgMSAxMDAlO2ZsZXg6MSAxIDEwMCU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjMycHg7aGVpZ2h0OjE4cHg7Ym9yZGVyOjA7b3V0bGluZTpub25lO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvciBpb24taWNvbnttYXJnaW4tdG9wOjFweDtmb250LXNpemU6MS4zNzVyZW19Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjc3NDgzKSk7LS1jb2xvci1hY3RpdmU6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMzA2MGIpOy0tY29sb3ItaG92ZXI6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMzA2MGIpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3Itc3RlcC04MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMjAwLCAjMzU0MDRlKSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtNTAsICNmZmYpKX06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpe2ZvbnQtd2VpZ2h0OjUwMH0uYnJlYWRjcnVtYi1uYXRpdmV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0uYnJlYWRjcnVtYi1zZXBhcmF0b3J7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTBweDttYXJnaW4taW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1tYXJnaW4tZW5kOjEwcHg7bWFyZ2luLWlubGluZS1lbmQ6MTBweDttYXJnaW4tdG9wOi0xcHh9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnJlYWRjcnVtYi1uYXRpdmV7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtib3gtc2hhZG93OjBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0uYnJlYWRjcnVtYi1zZXBhcmF0b3J7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQ1MCwgIzczODQ5YSkpfTo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQ1MCwgIzdkODg5NCkpO2ZvbnQtc2l6ZToxLjEyNXJlbX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweH06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpIDo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzIyMmQzYSkpfS5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2VlZjFmMykpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3Mzg0OWEpKX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcjpob3ZlcntvcGFjaXR5OjAuN30uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcjpmb2N1c3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsICNkZmU1ZTgpKX1cIjtcbmNvbnN0IElvbkJyZWFkY3J1bWJNZFN0eWxlMCA9IGJyZWFkY3J1bWJNZENzcztcbmNvbnN0IEJyZWFkY3J1bWIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmNvbGxhcHNlZENsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjb2xsYXBzZWRDbGlja1wiLCA3KTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2VkSW5kaWNhdG9yQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZENsaWNrLmVtaXQoe1xuICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IHRoaXMuY29sbGFwc2VkUmVmXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0NvbGxhcHNlZEluZGljYXRvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VwYXJhdG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgIHRoaXMucm91dGVyQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgfVxuICBpc0NsaWNrYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ocmVmICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgYWN0aXZlLFxuICAgICAgY29sbGFwc2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkb3dubG9hZCxcbiAgICAgIGVsLFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgIGxhc3QsXG4gICAgICByb3V0ZXJBbmltYXRpb24sXG4gICAgICByb3V0ZXJEaXJlY3Rpb24sXG4gICAgICBzZXBhcmF0b3IsXG4gICAgICBzaG93Q29sbGFwc2VkSW5kaWNhdG9yLFxuICAgICAgdGFyZ2V0XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY2xpY2thYmxlID0gdGhpcy5pc0NsaWNrYWJsZSgpO1xuICAgIGNvbnN0IFRhZ1R5cGUgPSB0aGlzLmhyZWYgPT09IHVuZGVmaW5lZCA/ICdzcGFuJyA6ICdhJztcbiAgICAvLyBMaW5rcyBjYW4gc3RpbGwgYmUgdGFiYmVkIHRvIHdoZW4gc2V0IHRvIGRpc2FibGVkIGlmIHRoZXkgaGF2ZSBhbiBocmVmXG4gICAgLy8gaW4gb3JkZXIgdG8gdHJ1bHkgZGlzYWJsZSB0aGVtIHdlIGNhbiBrZWVwIGl0IGFzIGFuIGFuY2hvciBidXQgcmVtb3ZlIHRoZSBocmVmXG4gICAgY29uc3QgaHJlZiA9IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5ocmVmO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGF0dHJzID0gVGFnVHlwZSA9PT0gJ3NwYW4nID8ge30gOiB7XG4gICAgICBkb3dubG9hZCxcbiAgICAgIGhyZWYsXG4gICAgICB0YXJnZXRcbiAgICB9O1xuICAgIC8vIElmIHRoZSBicmVhZGNydW1iIGlzIGNvbGxhcHNlZCwgY2hlY2sgaWYgaXQgY29udGFpbnMgdGhlIGNvbGxhcHNlZCBpbmRpY2F0b3JcbiAgICAvLyB0byBzaG93IHRoZSBzZXBhcmF0b3IgYXMgbG9uZyBhcyBpdCBpc24ndCBhbHNvIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAvLyBvdGhlcndpc2UgaWYgbm90IGNvbGxhcHNlZCB1c2UgdGhlIHZhbHVlIGluIHNlcGFyYXRvclxuICAgIGNvbnN0IHNob3dTZXBhcmF0b3IgPSBsYXN0ID8gZmFsc2UgOiBjb2xsYXBzZWQgPyBzaG93Q29sbGFwc2VkSW5kaWNhdG9yICYmICFsYXN0ID8gdHJ1ZSA6IGZhbHNlIDogc2VwYXJhdG9yO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzMyY2E2MWM4MzcyMWRmZjUyYjVlOTcxNzFlZDQ0OWRjZTM1ODRhNTUnLFxuICAgICAgb25DbGljazogZXYgPT4gb3BlblVSTChocmVmLCBldiwgcm91dGVyRGlyZWN0aW9uLCByb3V0ZXJBbmltYXRpb24pLFxuICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnYnJlYWRjcnVtYi1hY3RpdmUnOiBhY3RpdmUsXG4gICAgICAgICdicmVhZGNydW1iLWNvbGxhcHNlZCc6IGNvbGxhcHNlZCxcbiAgICAgICAgJ2JyZWFkY3J1bWItZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2luLWJyZWFkY3J1bWJzLWNvbG9yJzogaG9zdENvbnRleHQoJ2lvbi1icmVhZGNydW1ic1tjb2xvcl0nLCBlbCksXG4gICAgICAgICdpbi10b29sYmFyJzogaG9zdENvbnRleHQoJ2lvbi10b29sYmFyJywgdGhpcy5lbCksXG4gICAgICAgICdpbi10b29sYmFyLWNvbG9yJzogaG9zdENvbnRleHQoJ2lvbi10b29sYmFyW2NvbG9yXScsIHRoaXMuZWwpLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogY2xpY2thYmxlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IGNsaWNrYWJsZVxuICAgICAgfSlcbiAgICB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnNDc5ZmViODQ1ZjRhNmQ4MDA5ZDU0MjJiMzNlYjQyMzczMGI5NzIyYidcbiAgICB9LCBhdHRycywge1xuICAgICAgY2xhc3M6IFwiYnJlYWRjcnVtYi1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyXG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzNjNWRjYWViMGQyNTgyMzVkMWI3NzA3ODY4MDI2ZmYxZDE0MDQwOTknLFxuICAgICAgbmFtZTogXCJzdGFydFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2YxY2ZiOTM0NDQzY2Q5N2RjMjIwODgyYzVlMzU5NmVhODc5ZDY2Y2YnXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzUzOTcxMDEyMWI1YjFmM2VlOGQ0YzI0YTk2NTFiNjdjMmFlMDhhZGQnLFxuICAgICAgbmFtZTogXCJlbmRcIlxuICAgIH0pKSwgc2hvd0NvbGxhcHNlZEluZGljYXRvciAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJ2VkNTNhOTVjY2Q4OTAyMmM4YjdiZWUwNjU4YTIyMWVjNjJhNWM3M2InLFxuICAgICAgcGFydDogXCJjb2xsYXBzZWQtaW5kaWNhdG9yXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTaG93IG1vcmUgYnJlYWRjcnVtYnNcIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY29sbGFwc2VkSW5kaWNhdG9yQ2xpY2soKSxcbiAgICAgIHJlZjogY29sbGFwc2VkRWwgPT4gdGhpcy5jb2xsYXBzZWRSZWYgPSBjb2xsYXBzZWRFbCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdicmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9yJzogdHJ1ZVxuICAgICAgfVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdhODQ5ZTExNDJhODZmMDZmMjA3Y2YxMTY2MmZhMmE1NjBhYjdmYzZhJyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBpY29uOiBlbGxpcHNpc0hvcml6b250YWwsXG4gICAgICBsYXp5OiBmYWxzZVxuICAgIH0pKSwgc2hvd1NlcGFyYXRvciAmJiAoXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9ycyBzaG91bGQgbm90IGJlIGFubm91bmNlZCBieSBuYXJyYXRvcnMuXG4gICAgICogV2UgYWRkIGFyaWEtaGlkZGVuIG9uIHRoZSBzcGFuIHNvIHRoYXQgdGhpcyBhcHBsaWVzXG4gICAgICogdG8gYW55IGN1c3RvbSBzZXBhcmF0b3JzIHRvby5cbiAgICAgKi9cbiAgICBoKFwic3BhblwiLCB7XG4gICAgICBrZXk6ICdmYzNjNzQxY2IwMWZhZmVmOGIyNjA0NmM3ZWU1YjE5MGVmYzY5YTdjJyxcbiAgICAgIGNsYXNzOiBcImJyZWFkY3J1bWItc2VwYXJhdG9yXCIsXG4gICAgICBwYXJ0OiBcInNlcGFyYXRvclwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzQ4NzE5MzJhZTFkYWU1MjA3NjdlMDcxM2U3Y2VlMmQxMWIwYmJhNmQnLFxuICAgICAgbmFtZTogXCJzZXBhcmF0b3JcIlxuICAgIH0sIG1vZGUgPT09ICdpb3MnID8gaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGljb246IGNoZXZyb25Gb3J3YXJkT3V0bGluZSxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgXCJmbGlwLXJ0bFwiOiB0cnVlXG4gICAgfSkgOiBoKFwic3BhblwiLCBudWxsLCBcIi9cIikpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkJyZWFkY3J1bWIuc3R5bGUgPSB7XG4gIGlvczogSW9uQnJlYWRjcnVtYklvc1N0eWxlMCxcbiAgbWQ6IElvbkJyZWFkY3J1bWJNZFN0eWxlMFxufTtcbmNvbnN0IGJyZWFkY3J1bWJzSW9zQ3NzID0gXCI6aG9zdHstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCguaW4tdG9vbGJhci1jb2xvciksOmhvc3QoLmluLXRvb2xiYXItY29sb3IpIC5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9yIGlvbi1pY29ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpIC5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xMSl9Omhvc3QoLmluLXRvb2xiYXIpey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfVwiO1xuY29uc3QgSW9uQnJlYWRjcnVtYnNJb3NTdHlsZTAgPSBicmVhZGNydW1ic0lvc0NzcztcbmNvbnN0IGJyZWFkY3J1bWJzTWRDc3MgPSBcIjpob3N0ey1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0KC5pbi10b29sYmFyLWNvbG9yKSw6aG9zdCguaW4tdG9vbGJhci1jb2xvcikgLmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW4tdG9vbGJhci1jb2xvcikgLmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3J7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjExKX06aG9zdCguaW4tdG9vbGJhcil7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9XCI7XG5jb25zdCBJb25CcmVhZGNydW1ic01kU3R5bGUwID0gYnJlYWRjcnVtYnNNZENzcztcbmNvbnN0IEJyZWFkY3J1bWJzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkNvbGxhcHNlZENsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Db2xsYXBzZWRDbGlja1wiLCA3KTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzSW5pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0QnJlYWRjcnVtYlNlcGFyYXRvcigpO1xuICAgICAgdGhpcy5zZXRNYXhJdGVtcygpO1xuICAgIH07XG4gICAgdGhpcy5yZXNldEFjdGl2ZUJyZWFkY3J1bWIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoKTtcbiAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIGFjdGl2ZSBicmVhZGNydW1iIGlmIHdlIHdlcmUgdGhlIG9uZXMgdG8gY2hhbmdlIGl0XG4gICAgICAvLyBvdGhlcndpc2UgdXNlIHRoZSBvbmUgc2V0IG9uIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IGFjdGl2ZUJyZWFkY3J1bWIgPSBicmVhZGNydW1icy5maW5kKGJyZWFkY3J1bWIgPT4gYnJlYWRjcnVtYi5hY3RpdmUpO1xuICAgICAgaWYgKGFjdGl2ZUJyZWFkY3J1bWIgJiYgdGhpcy5hY3RpdmVDaGFuZ2VkKSB7XG4gICAgICAgIGFjdGl2ZUJyZWFkY3J1bWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldE1heEl0ZW1zID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpdGVtc0FmdGVyQ29sbGFwc2UsXG4gICAgICAgIGl0ZW1zQmVmb3JlQ29sbGFwc2UsXG4gICAgICAgIG1heEl0ZW1zXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icygpO1xuICAgICAgZm9yIChjb25zdCBicmVhZGNydW1iIG9mIGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGJyZWFkY3J1bWIuc2hvd0NvbGxhcHNlZEluZGljYXRvciA9IGZhbHNlO1xuICAgICAgICBicmVhZGNydW1iLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIG51bWJlciBvZiBicmVhZGNydW1icyBleGNlZWRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtc1xuICAgICAgLy8gdGhhdCBzaG91bGQgc2hvdyBhbmQgdGhlIGl0ZW1zIGJlZm9yZSAvIGFmdGVyIGNvbGxhcHNlIGRvIG5vdFxuICAgICAgLy8gZXhjZWVkIHRoZSBtYXhpbXVtIGl0ZW1zIHRoZW4gd2UgbmVlZCB0byBjb2xsYXBzZSB0aGUgYnJlYWRjcnVtYnNcbiAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gbWF4SXRlbXMgIT09IHVuZGVmaW5lZCAmJiBicmVhZGNydW1icy5sZW5ndGggPiBtYXhJdGVtcyAmJiBpdGVtc0JlZm9yZUNvbGxhcHNlICsgaXRlbXNBZnRlckNvbGxhcHNlIDw9IG1heEl0ZW1zO1xuICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgIC8vIFNob3cgdGhlIGNvbGxhcHNlZCBpbmRpY2F0b3IgaW4gdGhlIGZpcnN0IGJyZWFkY3J1bWIgdGhhdCBjb2xsYXBzZXNcbiAgICAgICAgYnJlYWRjcnVtYnMuZm9yRWFjaCgoYnJlYWRjcnVtYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IGl0ZW1zQmVmb3JlQ29sbGFwc2UpIHtcbiAgICAgICAgICAgIGJyZWFkY3J1bWIuc2hvd0NvbGxhcHNlZEluZGljYXRvciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENvbGxhcHNlIGFsbCBicmVhZGNydW1icyB0aGF0IGhhdmUgYW4gaW5kZXggZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAgICAgICAgLy8gdGhlIG51bWJlciBiZWZvcmUgY29sbGFwc2UgYW5kIGFuIGluZGV4IGxlc3MgdGhhbiB0aGUgdG90YWwgbnVtYmVyXG4gICAgICAgICAgLy8gb2YgYnJlYWRjcnVtYnMgbWludXMgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIHNob3cgYWZ0ZXIgdGhlIGNvbGxhcHNlXG4gICAgICAgICAgaWYgKGluZGV4ID49IGl0ZW1zQmVmb3JlQ29sbGFwc2UgJiYgaW5kZXggPCBicmVhZGNydW1icy5sZW5ndGggLSBpdGVtc0FmdGVyQ29sbGFwc2UpIHtcbiAgICAgICAgICAgIGJyZWFkY3J1bWIuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRCcmVhZGNydW1iU2VwYXJhdG9yID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpdGVtc0FmdGVyQ29sbGFwc2UsXG4gICAgICAgIGl0ZW1zQmVmb3JlQ29sbGFwc2UsXG4gICAgICAgIG1heEl0ZW1zXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icygpO1xuICAgICAgLy8gQ2hlY2sgaWYgYW4gYWN0aXZlIGJyZWFkY3J1bWIgZXhpc3RzIGFscmVhZHlcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGJyZWFkY3J1bWJzLmZpbmQoYnJlYWRjcnVtYiA9PiBicmVhZGNydW1iLmFjdGl2ZSk7XG4gICAgICAvLyBTZXQgdGhlIHNlcGFyYXRvciBvbiBhbGwgYnV0IHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIGZvciAoY29uc3QgYnJlYWRjcnVtYiBvZiBicmVhZGNydW1icykge1xuICAgICAgICAvLyBUaGUgb25seSB0aW1lIHRoZSBsYXN0IGJyZWFkY3J1bWIgY2hhbmdlcyBpcyB3aGVuXG4gICAgICAgIC8vIGl0ZW1zQWZ0ZXJDb2xsYXBzZSBpcyBzZXQgdG8gMCwgaW4gdGhpcyBjYXNlIHRoZVxuICAgICAgICAvLyBsYXN0IGJyZWFkY3J1bWIgd2lsbCBiZSB0aGUgY29sbGFwc2VkIGluZGljYXRvclxuICAgICAgICBjb25zdCBsYXN0ID0gbWF4SXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtc0FmdGVyQ29sbGFwc2UgPT09IDAgPyBicmVhZGNydW1iID09PSBicmVhZGNydW1ic1tpdGVtc0JlZm9yZUNvbGxhcHNlXSA6IGJyZWFkY3J1bWIgPT09IGJyZWFkY3J1bWJzW2JyZWFkY3J1bWJzLmxlbmd0aCAtIDFdO1xuICAgICAgICBicmVhZGNydW1iLmxhc3QgPSBsYXN0O1xuICAgICAgICAvLyBJZiB0aGUgYnJlYWRjcnVtYiBoYXMgZGVmaW5lZCB3aGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZVxuICAgICAgICAvLyBzZXBhcmF0b3IgdGhlbiB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGNoZWNrIGlmIGl0J3MgdGhlXG4gICAgICAgIC8vIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBicmVhZGNydW1iLnNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gYnJlYWRjcnVtYi5zZXBhcmF0b3IgOiBsYXN0ID8gdW5kZWZpbmVkIDogdHJ1ZTtcbiAgICAgICAgYnJlYWRjcnVtYi5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vdCBhbiBhY3RpdmUgYnJlYWRjcnVtYiBhbHJlYWR5XG4gICAgICAgIC8vIHNldCB0aGUgbGFzdCBvbmUgdG8gYWN0aXZlXG4gICAgICAgIGlmICghYWN0aXZlICYmIGxhc3QpIHtcbiAgICAgICAgICBicmVhZGNydW1iLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5nZXRCcmVhZGNydW1icyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJyZWFkY3J1bWInKSk7XG4gICAgfTtcbiAgICB0aGlzLnNsb3RDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEFjdGl2ZUJyZWFkY3J1bWIoKTtcbiAgICAgIHRoaXMuYnJlYWRjcnVtYnNJbml0KCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZUNoYW5nZWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heEl0ZW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXRlbXNCZWZvcmVDb2xsYXBzZSA9IDE7XG4gICAgdGhpcy5pdGVtc0FmdGVyQ29sbGFwc2UgPSAxO1xuICB9XG4gIG9uQ29sbGFwc2VkQ2xpY2soZXYpIHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoKTtcbiAgICBjb25zdCBjb2xsYXBzZWRCcmVhZGNydW1icyA9IGJyZWFkY3J1bWJzLmZpbHRlcihicmVhZGNydW1iID0+IGJyZWFkY3J1bWIuY29sbGFwc2VkKTtcbiAgICB0aGlzLmlvbkNvbGxhcHNlZENsaWNrLmVtaXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBldi5kZXRhaWwpLCB7XG4gICAgICBjb2xsYXBzZWRCcmVhZGNydW1ic1xuICAgIH0pKTtcbiAgfVxuICBtYXhJdGVtc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5yZXNldEFjdGl2ZUJyZWFkY3J1bWIoKTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzSW5pdCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuYnJlYWRjcnVtYnNJbml0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgY29sbGFwc2VkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZmU2NGU5Y2RmNTk3ZWRlMmRiMTQwYmY1ZmEwNWEwMzU5ZDgyZGI1NycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXRvb2xiYXItY29sb3InOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXJbY29sb3JdJywgdGhpcy5lbCksXG4gICAgICAgICdicmVhZGNydW1icy1jb2xsYXBzZWQnOiBjb2xsYXBzZWRcbiAgICAgIH0pXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnYTJjOTliNTc5ZTMzOTA1NWM1MGE2MTNkNWM2YjYxMDMyZjVkZGZmZScsXG4gICAgICBvblNsb3RjaGFuZ2U6IHRoaXMuc2xvdENoYW5nZWRcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwibWF4SXRlbXNcIjogW1wibWF4SXRlbXNDaGFuZ2VkXCJdLFxuICAgICAgXCJpdGVtc0JlZm9yZUNvbGxhcHNlXCI6IFtcIm1heEl0ZW1zQ2hhbmdlZFwiXSxcbiAgICAgIFwiaXRlbXNBZnRlckNvbGxhcHNlXCI6IFtcIm1heEl0ZW1zQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5CcmVhZGNydW1icy5zdHlsZSA9IHtcbiAgaW9zOiBJb25CcmVhZGNydW1ic0lvc1N0eWxlMCxcbiAgbWQ6IElvbkJyZWFkY3J1bWJzTWRTdHlsZTBcbn07XG5leHBvcnQgeyBCcmVhZGNydW1iIGFzIGlvbl9icmVhZGNydW1iLCBCcmVhZGNydW1icyBhcyBpb25fYnJlYWRjcnVtYnMgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLHlCQUF5QjtBQUMvQixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGFBQWEsTUFBTTtBQUFBLEVBQ3ZCLFlBQVksU0FBUztBQUNuQixxQkFB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
