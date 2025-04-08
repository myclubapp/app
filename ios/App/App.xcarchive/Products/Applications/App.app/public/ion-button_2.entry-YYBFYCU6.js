import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-QQMTNXUN.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  hasShadowDom,
  inheritAriaAttributes
} from "./chunk-RRWPYKYY.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getAssetPath,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-button_2.entry.js
var CACHED_MAP;
var getIconMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      const win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url, i);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
var getNamedUrl = (iconName, iconEl) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  try {
    return getAssetPath(`svg/${iconName}.svg`);
  } catch (e) {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
  }
};
var getName = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower(ios);
  } else if (md && mode === "md") {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
var getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
var isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
var isStr = (val) => typeof val === "string";
var toLower = (val) => val.toLowerCase();
var inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
var buttonIosCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}';
var IonButtonIosStyle0 = buttonIosCss;
var buttonMdCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}';
var IonButtonMdStyle0 = buttonMdCss;
var Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.formButtonEl = null;
    this.formEl = null;
    this.inheritedAttributes = {};
    this.handleClick = (ev) => {
      const {
        el
      } = this;
      if (this.type === "button") {
        openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      } else if (hasShadowDom(el)) {
        this.submitForm(ev);
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.slotChanged = () => {
      this.isCircle = this.hasIconOnly;
    };
    this.isCircle = false;
    this.color = void 0;
    this.buttonType = "button";
    this.disabled = false;
    this.expand = void 0;
    this.fill = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.strong = false;
    this.target = void 0;
    this.type = "button";
    this.form = void 0;
  }
  disabledChanged() {
    const {
      disabled
    } = this;
    if (this.formButtonEl) {
      this.formButtonEl.disabled = disabled;
    }
  }
  /**
   * This is responsible for rendering a hidden native
   * button element inside the associated form. This allows
   * users to submit a form by pressing "Enter" when a text
   * field inside of the form is focused. The native button
   * rendered inside of `ion-button` is in the Shadow DOM
   * and therefore does not participate in form submission
   * which is why the following code is necessary.
   */
  renderHiddenButton() {
    const formEl = this.formEl = this.findForm();
    if (formEl) {
      const {
        formButtonEl
      } = this;
      if (formButtonEl !== null && formEl.contains(formButtonEl)) {
        return;
      }
      const newFormButtonEl = this.formButtonEl = document.createElement("button");
      newFormButtonEl.type = this.type;
      newFormButtonEl.style.display = "none";
      newFormButtonEl.disabled = this.disabled;
      formEl.appendChild(newFormButtonEl);
    }
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons");
    this.inListHeader = !!this.el.closest("ion-list-header");
    this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider");
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === void 0 || this.fill === "clear";
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return "unbounded";
    }
    return "bounded";
  }
  /**
   * Finds the form element based on the provided `form` selector
   * or element reference provided.
   */
  findForm() {
    const {
      form
    } = this;
    if (form instanceof HTMLFormElement) {
      return form;
    }
    if (typeof form === "string") {
      const el = document.getElementById(form);
      if (el) {
        if (el instanceof HTMLFormElement) {
          return el;
        } else {
          printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is attached to a <form> element.`, this.el);
          return null;
        }
      } else {
        printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, this.el);
        return null;
      }
    }
    if (form !== void 0) {
      printIonWarning(`The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.`, this.el);
      return null;
    }
    return this.el.closest("form");
  }
  submitForm(ev) {
    if (this.formEl && this.formButtonEl) {
      ev.preventDefault();
      this.formButtonEl.click();
    }
  }
  render() {
    const mode = getIonMode(this);
    const {
      buttonType,
      type,
      disabled,
      rel,
      target,
      size,
      href,
      color,
      expand,
      hasIconOnly,
      shape,
      strong,
      inheritedAttributes
    } = this;
    const finalSize = size === void 0 && this.inItem ? "small" : size;
    const TagType = href === void 0 ? "button" : "a";
    const attrs = TagType === "button" ? {
      type
    } : {
      download: this.download,
      href,
      rel,
      target
    };
    let fill = this.fill;
    if (fill == null) {
      fill = this.inToolbar || this.inListHeader ? "clear" : "solid";
    }
    {
      type !== "button" && this.renderHiddenButton();
    }
    return h(Host, {
      key: "340a809d85698741bb36e796355cae89a970655f",
      onClick: this.handleClick,
      "aria-disabled": disabled ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== void 0,
        [`${buttonType}-${finalSize}`]: finalSize !== void 0,
        [`${buttonType}-${shape}`]: shape !== void 0,
        [`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "in-buttons": hostContext("ion-buttons", this.el),
        "button-has-icon-only": hasIconOnly,
        "button-disabled": disabled,
        "ion-activatable": true,
        "ion-focusable": true
      })
    }, h(TagType, Object.assign({
      key: "03ae1b94a0d606aa65aa6f82c2fc76abcf3f1300"
    }, attrs, {
      class: "button-native",
      part: "native",
      disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, inheritedAttributes), h("span", {
      key: "90bf53d4ffcab88ee596ece7113d5b6409e61143",
      class: "button-inner"
    }, h("slot", {
      key: "a7876695f0d8702e8bcb471ae4c0984f27d77458",
      name: "icon-only",
      onSlotchange: this.slotChanged
    }), h("slot", {
      key: "2c8551586f8726884d7797a6d3fee2d4b3aab35f",
      name: "start"
    }), h("slot", {
      key: "9ab07accdb22b08d0a463a7c821c9793507d1f7d"
    }), h("slot", {
      key: "8984afe177e6ba021435875a3798e2a64f3bdf2c",
      name: "end"
    })), mode === "md" && h("ion-ripple-effect", {
      key: "3e9f01e7a1198b6b7109502293a971da7072a4f3",
      type: this.rippleType
    })));
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
Button.style = {
  ios: IonButtonIosStyle0,
  md: IonButtonMdStyle0
};
var validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
var isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
var isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
var ioniconContent = /* @__PURE__ */ new Map();
var requests = /* @__PURE__ */ new Map();
var parser;
var getSvgContent = (url, sanitize) => {
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && typeof document !== "undefined") {
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          parser = new DOMParser();
        }
        const doc = parser.parseFromString(url, "text/html");
        const svg = doc.querySelector("svg");
        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        req = fetch(url).then((rsp) => {
          if (rsp.ok) {
            return rsp.text().then((svgContent) => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }
              ioniconContent.set(url, svgContent || "");
            });
          }
          ioniconContent.set(url, "");
        });
        requests.set(url, req);
      }
    } else {
      ioniconContent.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var IonIconStyle0 = iconCss;
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.svgContent = void 0;
    this.isVisible = false;
    this.mode = getIonMode2();
    this.color = void 0;
    this.ios = void 0;
    this.md = void 0;
    this.flipRtl = void 0;
    this.name = void 0;
    this.src = void 0;
    this.icon = void 0;
    this.size = void 0;
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  componentDidLoad() {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && typeof window !== "undefined" && window.IntersectionObserver) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = void 0;
          cb();
        }
      }, {
        rootMargin
      });
      io.observe(el);
    } else {
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const {
      flipRtl,
      iconName,
      inheritedAttributes,
      el
    } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({
      role: "img",
      class: Object.assign(Object.assign({
        [mode]: true
      }, createColorClasses2(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        "flip-rtl": shouldBeFlippable,
        "icon-rtl": shouldBeFlippable && isRTL(el)
      })
    }, inheritedAttributes), this.svgContent ? h("div", {
      class: "icon-inner",
      innerHTML: this.svgContent
    }) : h("div", {
      class: "icon-inner"
    }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
};
var getIonMode2 = () => typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
var createColorClasses2 = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
Icon.style = IonIconStyle0;
export {
  Button as ion_button,
  Icon as ion_icon
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-button_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYnV0dG9uXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGogYXMgZ2V0QXNzZXRQYXRoLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBtIGFzIGhhc1NoYWRvd0RvbSwgaSBhcyBpbmhlcml0QXJpYUF0dHJpYnV0ZXMgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgcCBhcyBwcmludElvbldhcm5pbmcgfSBmcm9tICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMkMSwgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMDFmM2YyOWMuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlJDEgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5sZXQgQ0FDSEVEX01BUDtcbmNvbnN0IGdldEljb25NYXAgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgTWFwKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFDQUNIRURfTUFQKSB7XG4gICAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgICB3aW4uSW9uaWNvbnMgPSB3aW4uSW9uaWNvbnMgfHwge307XG4gICAgICBDQUNIRURfTUFQID0gd2luLklvbmljb25zLm1hcCA9IHdpbi5Jb25pY29ucy5tYXAgfHwgbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZXR1cm4gQ0FDSEVEX01BUDtcbiAgfVxufTtcbmNvbnN0IGdldFVybCA9IGkgPT4ge1xuICBsZXQgdXJsID0gZ2V0U3JjKGkuc3JjKTtcbiAgaWYgKHVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gZ2V0TmFtZShpLm5hbWUsIGkuaWNvbiwgaS5tb2RlLCBpLmlvcywgaS5tZCk7XG4gIGlmICh1cmwpIHtcbiAgICByZXR1cm4gZ2V0TmFtZWRVcmwodXJsLCBpKTtcbiAgfVxuICBpZiAoaS5pY29uKSB7XG4gICAgdXJsID0gZ2V0U3JjKGkuaWNvbik7XG4gICAgaWYgKHVybCkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgdXJsID0gZ2V0U3JjKGkuaWNvbltpLm1vZGVdKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXROYW1lZFVybCA9IChpY29uTmFtZSwgaWNvbkVsKSA9PiB7XG4gIGNvbnN0IHVybCA9IGdldEljb25NYXAoKS5nZXQoaWNvbk5hbWUpO1xuICBpZiAodXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBnZXRBc3NldFBhdGgoYHN2Zy8ke2ljb25OYW1lfS5zdmdgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qKlxuICAgICAqIEluIHRoZSBjdXN0b20gZWxlbWVudHMgYnVpbGQgdmVyc2lvbiBvZiBpb25pY29ucywgcmVmZXJlbmNpbmcgYW4gaWNvblxuICAgICAqIGJ5IG5hbWUgd2lsbCB0aHJvdyBhbiBpbnZhbGlkIFVSTCBlcnJvciBiZWNhdXNlIHRoZSBhc3NldCBwYXRoIGlzIG5vdCBkZWZpbmVkLlxuICAgICAqIFRoaXMgY2F0Y2hlcyB0aGF0IGVycm9yIGFuZCBsb2dzIHNvbWV0aGluZyB0aGF0IGlzIG1vcmUgZGV2ZWxvcGVyLWZyaWVuZGx5LlxuICAgICAqIFdlIGFsc28gaW5jbHVkZSBhIHJlZmVyZW5jZSB0byB0aGUgaW9uLWljb24gZWxlbWVudCBzbyBkZXZlbG9wZXJzIGNhblxuICAgICAqIGZpZ3VyZSBvdXQgd2hpY2ggaW5zdGFuY2Ugb2YgaW9uLWljb24gbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICAgKi9cbiAgICBjb25zb2xlLndhcm4oYFtJb25pY29ucyBXYXJuaW5nXTogQ291bGQgbm90IGxvYWQgaWNvbiB3aXRoIG5hbWUgXCIke2ljb25OYW1lfVwiLiBFbnN1cmUgdGhhdCB0aGUgaWNvbiBpcyByZWdpc3RlcmVkIHVzaW5nIGFkZEljb25zIG9yIHRoYXQgdGhlIGljb24gU1ZHIGRhdGEgaXMgcGFzc2VkIGRpcmVjdGx5IHRvIHRoZSBpY29uIGNvbXBvbmVudC5gLCBpY29uRWwpO1xuICB9XG59O1xuY29uc3QgZ2V0TmFtZSA9IChpY29uTmFtZSwgaWNvbiwgbW9kZSwgaW9zLCBtZCkgPT4ge1xuICAvLyBkZWZhdWx0IHRvIFwibWRcIiBpZiBzb21laG93IHRoZSBtb2RlIHdhc24ndCBzZXRcbiAgbW9kZSA9IChtb2RlICYmIHRvTG93ZXIobW9kZSkpID09PSAnaW9zJyA/ICdpb3MnIDogJ21kJztcbiAgLy8gaWYgYW4gaWNvbiB3YXMgcGFzc2VkIGluIHVzaW5nIHRoZSBpb3Mgb3IgbWQgYXR0cmlidXRlc1xuICAvLyBzZXQgdGhlIGljb25OYW1lIHRvIHdoYXRldmVyIHdhcyBwYXNzZWQgaW5cbiAgaWYgKGlvcyAmJiBtb2RlID09PSAnaW9zJykge1xuICAgIGljb25OYW1lID0gdG9Mb3dlcihpb3MpO1xuICB9IGVsc2UgaWYgKG1kICYmIG1vZGUgPT09ICdtZCcpIHtcbiAgICBpY29uTmFtZSA9IHRvTG93ZXIobWQpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaWNvbk5hbWUgJiYgaWNvbiAmJiAhaXNTcmMoaWNvbikpIHtcbiAgICAgIGljb25OYW1lID0gaWNvbjtcbiAgICB9XG4gICAgaWYgKGlzU3RyKGljb25OYW1lKSkge1xuICAgICAgaWNvbk5hbWUgPSB0b0xvd2VyKGljb25OYW1lKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1N0cihpY29uTmFtZSkgfHwgaWNvbk5hbWUudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIG9ubHkgYWxsb3cgYWxwaGEgY2hhcmFjdGVycyBhbmQgZGFzaFxuICBjb25zdCBpbnZhbGlkQ2hhcnMgPSBpY29uTmFtZS5yZXBsYWNlKC9bYS16XXwtfFxcZC9naSwgJycpO1xuICBpZiAoaW52YWxpZENoYXJzICE9PSAnJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBpY29uTmFtZTtcbn07XG5jb25zdCBnZXRTcmMgPSBzcmMgPT4ge1xuICBpZiAoaXNTdHIoc3JjKSkge1xuICAgIHNyYyA9IHNyYy50cmltKCk7XG4gICAgaWYgKGlzU3JjKHNyYykpIHtcbiAgICAgIHJldHVybiBzcmM7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGlzU3JjID0gc3RyID0+IHN0ci5sZW5ndGggPiAwICYmIC8oXFwvfFxcLikvLnRlc3Qoc3RyKTtcbmNvbnN0IGlzU3RyID0gdmFsID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xuY29uc3QgdG9Mb3dlciA9IHZhbCA9PiB2YWwudG9Mb3dlckNhc2UoKTtcbi8qKlxuICogRWxlbWVudHMgaW5zaWRlIG9mIHdlYiBjb21wb25lbnRzIHNvbWV0aW1lcyBuZWVkIHRvIGluaGVyaXQgZ2xvYmFsIGF0dHJpYnV0ZXNcbiAqIHNldCBvbiB0aGUgaG9zdC4gRm9yIGV4YW1wbGUsIHRoZSBpbm5lciBpbnB1dCBpbiBgaW9uLWlucHV0YCBzaG91bGQgaW5oZXJpdFxuICogdGhlIGB0aXRsZWAgYXR0cmlidXRlIHRoYXQgZGV2ZWxvcGVycyBzZXQgZGlyZWN0bHkgb24gYGlvbi1pbnB1dGAuIFRoaXNcbiAqIGhlbHBlciBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGluIGNvbXBvbmVudFdpbGxMb2FkIGFuZCBhc3NpZ25lZCB0byBhIHZhcmlhYmxlXG4gKiB0aGF0IGlzIGxhdGVyIHVzZWQgaW4gdGhlIHJlbmRlciBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGRvZXMgbm90IG5lZWQgdG8gYmUgcmVhY3RpdmUgYXMgY2hhbmdpbmcgYXR0cmlidXRlcyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gKiBkb2VzIG5vdCB0cmlnZ2VyIGEgcmUtcmVuZGVyLlxuICovXG5jb25zdCBpbmhlcml0QXR0cmlidXRlcyA9IChlbCwgYXR0cmlidXRlcyA9IFtdKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU9iamVjdCA9IHt9O1xuICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0W2F0dHJdID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhdHRyaWJ1dGVPYmplY3Q7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gaG9zdEVsID0+IHtcbiAgaWYgKGhvc3RFbCkge1xuICAgIGlmIChob3N0RWwuZGlyICE9PSAnJykge1xuICAgICAgcmV0dXJuIGhvc3RFbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCc7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LmRpci50b0xvd2VyQ2FzZSgpKSA9PT0gJ3J0bCc7XG59O1xuY29uc3QgYnV0dG9uSW9zQ3NzID0gXCI6aG9zdHstLW92ZXJmbG93OmhpZGRlbjstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS1ib3JkZXItd2lkdGg6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1jb2xvcik7LS1jb2xvci1ob3Zlcjp2YXIoLS1jb2xvcik7LS1ib3gtc2hhZG93Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3ZlcnRpY2FsLWFsaWduOnRvcDt2ZXJ0aWNhbC1hbGlnbjotd2Via2l0LWJhc2VsaW5lLW1pZGRsZTstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC41O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKX06aG9zdCguYnV0dG9uLW91dGxpbmUpey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmJ1dHRvbi1jbGVhcil7LS1ib3JkZXItd2lkdGg6MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmJ1dHRvbi1ibG9jayl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO3dpZHRoOjEwMCU7Y2xlYXI6Ym90aDtjb250YWluOmNvbnRlbnR9Omhvc3QoLmJ1dHRvbi1ibG9jaykgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2NsZWFyOmJvdGh9Omhvc3QoLmJ1dHRvbi1mdWxsKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tZnVsbCkgLmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDt3aWR0aDoxMDAlO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWZ1bGw6bm90KC5idXR0b24tcm91bmQpKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MH0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbnRhaW46bGF5b3V0IHN0eWxlO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5idXR0b24tbmF0aXZlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjF9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSksOjpzbG90dGVkKFtzbG90PWVuZF0pey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH06OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxLjM1ZW07cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0wLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi0wLjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6MC4zZW07bWFyZ2luLWlubGluZS1lbmQ6MC4zZW07bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDowLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuM2VtOy13ZWJraXQtbWFyZ2luLWVuZDotMC4yZW07bWFyZ2luLWlubGluZS1lbmQ6LTAuMmVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX0uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjB9Omhvc3QoLmlvbi1mb2N1c2VkKXtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eSl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCg6aG92ZXIpe2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX06aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5KX19Omhvc3QoLmlvbi1hY3RpdmF0ZWQpe2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2YXRlZCl9Omhvc3QoLmlvbi1hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHkpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tY29sb3IpKX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1jb2xvciwgdmFyKC0tYm9yZGVyLWNvbG9yKSkpfTpob3N0KC5idXR0b24tc29saWQuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tYmFja2dyb3VuZCkpO2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWNvbG9yKSl9Omhvc3R7LS1ib3JkZXItcmFkaXVzOjE0cHg7LS1wYWRkaW5nLXRvcDoxM3B4Oy0tcGFkZGluZy1ib3R0b206MTNweDstLXBhZGRpbmctc3RhcnQ6MWVtOy0tcGFkZGluZy1lbmQ6MWVtOy0tdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5IDEwMG1zIGxpbmVhcjstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTo0cHg7bWluLWhlaWdodDozLjFlbTtmb250LXNpemU6bWluKDFyZW0sIDQ4cHgpO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzowfTpob3N0KC5idXR0b24tc29saWQpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMwMDRhY2QpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMDA0YWNkKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzFhNjVlYik7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjE7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eToxOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OjF9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1yYWRpdXM6MTRweDstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKX06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTowOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtaG92ZXI6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTtmb250LXNpemU6bWluKDEuMDYyNXJlbSwgNTFweCk7Zm9udC13ZWlnaHQ6bm9ybWFsfTpob3N0KC5pbi1idXR0b25zKXtmb250LXNpemU6Y2xhbXAoMTdweCwgMS4wNjI1cmVtLCAyMS4wOHB4KTtmb250LXdlaWdodDo0MDB9Omhvc3QoLmJ1dHRvbi1sYXJnZSl7LS1ib3JkZXItcmFkaXVzOjE2cHg7LS1wYWRkaW5nLXRvcDoxN3B4Oy0tcGFkZGluZy1zdGFydDoxZW07LS1wYWRkaW5nLWVuZDoxZW07LS1wYWRkaW5nLWJvdHRvbToxN3B4O21pbi1oZWlnaHQ6My4xZW07Zm9udC1zaXplOm1pbigxLjI1cmVtLCA2MHB4KX06aG9zdCguYnV0dG9uLXNtYWxsKXstLWJvcmRlci1yYWRpdXM6NnB4Oy0tcGFkZGluZy10b3A6NHB4Oy0tcGFkZGluZy1zdGFydDowLjllbTstLXBhZGRpbmctZW5kOjAuOWVtOy0tcGFkZGluZy1ib3R0b206NHB4O21pbi1oZWlnaHQ6Mi4xZW07Zm9udC1zaXplOm1pbigwLjgxMjVyZW0sIDM5cHgpfTpob3N0KC5idXR0b24tcm91bmQpey0tYm9yZGVyLXJhZGl1czo5OTlweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjI2cHg7LS1wYWRkaW5nLWVuZDoyNnB4Oy0tcGFkZGluZy1ib3R0b206MH06aG9zdCguYnV0dG9uLXN0cm9uZyl7Zm9udC13ZWlnaHQ6NjAwfTpob3N0KC5idXR0b24taGFzLWljb24tb25seSl7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy10b3ApOy0tcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy10b3ApOy0tcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLWVuZCk7bWluLXdpZHRoOmNsYW1wKDMwcHgsIDIuMTI1ZW0sIDYwcHgpO21pbi1oZWlnaHQ6Y2xhbXAoMzBweCwgMi4xMjVlbSwgNjBweCl9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7Zm9udC1zaXplOmNsYW1wKDE1LjEycHgsIDEuMTI1ZW0sIDQzLjAycHgpfTpob3N0KC5idXR0b24tc21hbGwuYnV0dG9uLWhhcy1pY29uLW9ubHkpe21pbi13aWR0aDpjbGFtcCgyM3B4LCAyLjE2ZW0sIDU0cHgpO21pbi1oZWlnaHQ6Y2xhbXAoMjNweCwgMi4xNmVtLCA1NHB4KX06aG9zdCguYnV0dG9uLXNtYWxsKSA6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6Y2xhbXAoMTIuMTM5NHB4LCAxLjMwODEyNWVtLCA0MC4xODU2cHgpfTpob3N0KC5idXR0b24tbGFyZ2UuYnV0dG9uLWhhcy1pY29uLW9ubHkpe21pbi13aWR0aDpjbGFtcCg0NnB4LCAyLjVlbSwgNzhweCk7bWluLWhlaWdodDpjbGFtcCg0NnB4LCAyLjVlbSwgNzhweCl9Omhvc3QoLmJ1dHRvbi1sYXJnZSkgOjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7Zm9udC1zaXplOmNsYW1wKDE1LjEycHgsIDAuOWVtLCA0My4wNTZweCl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmUsOmhvc3QoLmJ1dHRvbi1jbGVhci5pb24tZm9jdXNlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIsOmhvc3QoLmJ1dHRvbi1jbGVhci5pb24tZm9jdXNlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5idXR0b24tY2xlYXI6bm90KC5pb24tYWN0aXZhdGVkKTpob3ZlciksOmhvc3QoLmJ1dHRvbi1vdXRsaW5lOm5vdCguaW9uLWFjdGl2YXRlZCk6aG92ZXIpe29wYWNpdHk6MC42fTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZSw6aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlciw6aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXRpbnQpfTpob3N0KDpob3Zlci5idXR0b24tc29saWQuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKTpub3QoLmlvbi1hY3RpdmF0ZWQpKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDojZmZmO29wYWNpdHk6MC4xfX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1hY3RpdmF0ZWQpe29wYWNpdHk6MC40fTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWFjdGl2YXRlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvci5pb24tYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tYWN0aXZhdGVkLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpOm5vdCguaW4tdG9vbGJhci1jb2xvcikpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWNvbG9yKSk7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCwgdmFyKC0tYmFja2dyb3VuZCksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSl9XCI7XG5jb25zdCBJb25CdXR0b25Jb3NTdHlsZTAgPSBidXR0b25Jb3NDc3M7XG5jb25zdCBidXR0b25NZENzcyA9IFwiOmhvc3R7LS1vdmVyZmxvdzpoaWRkZW47LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy0tYm9yZGVyLXdpZHRoOmluaXRpYWw7LS1ib3JkZXItY29sb3I6aW5pdGlhbDstLWJvcmRlci1zdHlsZTppbml0aWFsOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWNvbG9yKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItaG92ZXI6dmFyKC0tY29sb3IpOy0tYm94LXNoYWRvdzpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2hpdGUtc3BhY2U6bm9ybWFsOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7dmVydGljYWwtYWxpZ246LXdlYmtpdC1iYXNlbGluZS1taWRkbGU7LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX06aG9zdCguYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5idXR0b24tc29saWQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfTpob3N0KC5idXR0b24tY2xlYXIpey0tYm9yZGVyLXdpZHRoOjA7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfTpob3N0KC5idXR0b24tYmxvY2spe2Rpc3BsYXk6YmxvY2t9Omhvc3QoLmJ1dHRvbi1ibG9jaykgLmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDt3aWR0aDoxMDAlO2NsZWFyOmJvdGg7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZlOjphZnRlcntjbGVhcjpib3RofTpob3N0KC5idXR0b24tZnVsbCl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWZ1bGwpIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7d2lkdGg6MTAwJTtjb250YWluOmNvbnRlbnR9Omhvc3QoLmJ1dHRvbi1mdWxsOm5vdCguYnV0dG9uLXJvdW5kKSkgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czowO2JvcmRlci1yaWdodC13aWR0aDowO2JvcmRlci1sZWZ0LXdpZHRoOjB9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtjb250YWluOmxheW91dCBzdHlsZTtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OnZhcigtLW9wYWNpdHkpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uYnV0dG9uLW5hdGl2ZTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uYnV0dG9uLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pLDo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKGlvbi1pY29uKXtmb250LXNpemU6MS4zNWVtO3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXstd2Via2l0LW1hcmdpbi1zdGFydDotMC4zZW07bWFyZ2luLWlubGluZS1zdGFydDotMC4zZW07LXdlYmtpdC1tYXJnaW4tZW5kOjAuM2VtO21hcmdpbi1pbmxpbmUtZW5kOjAuM2VtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9ZW5kXSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MC4zZW07bWFyZ2luLWlubGluZS1zdGFydDowLjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6LTAuMmVtO21hcmdpbi1pbmxpbmUtZW5kOi0wLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9LmJ1dHRvbi1uYXRpdmU6OmFmdGVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowfTpob3N0KC5pb24tZm9jdXNlZCl7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoOmhvdmVyKXtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSl9fTpob3N0KC5pb24tYWN0aXZhdGVkKXtjb2xvcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfTpob3N0KC5pb24tYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5KX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWNvbG9yKSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpOm5vdCguaW4tdG9vbGJhci1jb2xvcikpIC5idXR0b24tbmF0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tY29sb3IsIHZhcigtLWJvcmRlci1jb2xvcikpKX06aG9zdCguYnV0dG9uLXNvbGlkLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpOm5vdCguaW4tdG9vbGJhci1jb2xvcikpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWJhY2tncm91bmQpKTtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLCB2YXIoLS1jb2xvcikpfTpob3N0ey0tYm9yZGVyLXJhZGl1czo0cHg7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7LS1wYWRkaW5nLXN0YXJ0OjEuMWVtOy0tcGFkZGluZy1lbmQ6MS4xZW07LS10cmFuc2l0aW9uOmJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsXFxuICAgICAgICAgICAgICAgIGNvbG9yIDE1bXMgbGluZWFyOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjRweDttaW4taGVpZ2h0OjM2cHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzowLjA2ZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0KC5idXR0b24tc29saWQpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZik7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMjQ7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6LjA4Oy0tYm94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMil9Omhvc3QoLmJ1dHRvbi1zb2xpZC5pb24tYWN0aXZhdGVkKXstLWJveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfTpob3N0KC5idXR0b24tb3V0bGluZSl7LS1ib3JkZXItd2lkdGg6MnB4Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm94LXNoYWRvdzpub25lOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6LjA0fTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTowOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6LjEyOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5Oi4wNH06aG9zdCguYnV0dG9uLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6OTk5cHg7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1zdGFydDoyNnB4Oy0tcGFkZGluZy1lbmQ6MjZweDstLXBhZGRpbmctYm90dG9tOjB9Omhvc3QoLmJ1dHRvbi1sYXJnZSl7LS1wYWRkaW5nLXRvcDoxNHB4Oy0tcGFkZGluZy1zdGFydDoxZW07LS1wYWRkaW5nLWVuZDoxZW07LS1wYWRkaW5nLWJvdHRvbToxNHB4O21pbi1oZWlnaHQ6Mi44ZW07Zm9udC1zaXplOjEuMjVyZW19Omhvc3QoLmJ1dHRvbi1zbWFsbCl7LS1wYWRkaW5nLXRvcDo0cHg7LS1wYWRkaW5nLXN0YXJ0OjAuOWVtOy0tcGFkZGluZy1lbmQ6MC45ZW07LS1wYWRkaW5nLWJvdHRvbTo0cHg7bWluLWhlaWdodDoyLjFlbTtmb250LXNpemU6MC44MTI1cmVtfTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDpib2xkfTpob3N0KC5idXR0b24taGFzLWljb24tb25seSl7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy10b3ApOy0tcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy10b3ApOy0tcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLWVuZCk7bWluLXdpZHRoOmNsYW1wKDMwcHgsIDIuODZlbSwgNjBweCk7bWluLWhlaWdodDpjbGFtcCgzMHB4LCAyLjg2ZW0sIDYwcHgpfTo6c2xvdHRlZChpb24taWNvbltzbG90PWljb24tb25seV0pe2ZvbnQtc2l6ZTpjbGFtcCgxNS4xMDRweCwgMS42ZW0sIDQzLjAwOHB4KX06aG9zdCguYnV0dG9uLXNtYWxsLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXttaW4td2lkdGg6Y2xhbXAoMjNweCwgMi4xNmVtLCA1NHB4KTttaW4taGVpZ2h0OmNsYW1wKDIzcHgsIDIuMTZlbSwgNTRweCl9Omhvc3QoLmJ1dHRvbi1zbWFsbCkgOjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7Zm9udC1zaXplOmNsYW1wKDEzLjAwMnB4LCAxLjIzMTI1ZW0sIDQwLjM4NXB4KX06aG9zdCguYnV0dG9uLWxhcmdlLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXttaW4td2lkdGg6Y2xhbXAoNDZweCwgMi41ZW0sIDc4cHgpO21pbi1oZWlnaHQ6Y2xhbXAoNDZweCwgMi41ZW0sIDc4cHgpfTpob3N0KC5idXR0b24tbGFyZ2UpIDo6c2xvdHRlZChpb24taWNvbltzbG90PWljb24tb25seV0pe2ZvbnQtc2l6ZTpjbGFtcCgxNS4wMDhweCwgMS40ZW0sIDQzLjAwOHB4KX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVyLDpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIsOmhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWFjdGl2YXRlZC5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWNvbG9yKSk7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWJhY2tncm91bmQpLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikpfVwiO1xuY29uc3QgSW9uQnV0dG9uTWRTdHlsZTAgPSBidXR0b25NZENzcztcbmNvbnN0IEJ1dHRvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIHRoaXMuaW5JdGVtID0gZmFsc2U7XG4gICAgdGhpcy5pbkxpc3RIZWFkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmluVG9vbGJhciA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybUJ1dHRvbkVsID0gbnVsbDtcbiAgICB0aGlzLmZvcm1FbCA9IG51bGw7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgb3BlblVSTCh0aGlzLmhyZWYsIGV2LCB0aGlzLnJvdXRlckRpcmVjdGlvbiwgdGhpcy5yb3V0ZXJBbmltYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChoYXNTaGFkb3dEb20oZWwpKSB7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybShldik7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2xvdENoYW5nZWQgPSAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEVuc3VyZXMgdGhhdCB0aGUgJ2hhcy1pY29uLW9ubHknIGNsYXNzIGlzIHByb3Blcmx5IGFkZGVkXG4gICAgICAgKiBvciByZW1vdmVkIGZyb20gYGlvbi1idXR0b25gIHdoZW4gbWFuaXB1bGF0aW5nIHRoZVxuICAgICAgICogYGljb24tb25seWAgc2xvdC5cbiAgICAgICAqXG4gICAgICAgKiBXaXRob3V0IHRoaXMsIHRoZSAnaGFzLWljb24tb25seScgY2xhc3MgaXMgb25seSBjaGVja2VkXG4gICAgICAgKiBvciBhZGRlZCB3aGVuIGBpb24tYnV0dG9uYCBjb21wb25lbnQgZmlyc3QgcmVuZGVycy5cbiAgICAgICAqL1xuICAgICAgdGhpcy5pc0NpcmNsZSA9IHRoaXMuaGFzSWNvbk9ubHk7XG4gICAgfTtcbiAgICB0aGlzLmlzQ2lyY2xlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvblR5cGUgPSAnYnV0dG9uJztcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgIHRoaXMucm91dGVyQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZG93bmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3Ryb25nID0gZmFsc2U7XG4gICAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmZvcm1CdXR0b25FbCkge1xuICAgICAgdGhpcy5mb3JtQnV0dG9uRWwuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgaXMgcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyBhIGhpZGRlbiBuYXRpdmVcbiAgICogYnV0dG9uIGVsZW1lbnQgaW5zaWRlIHRoZSBhc3NvY2lhdGVkIGZvcm0uIFRoaXMgYWxsb3dzXG4gICAqIHVzZXJzIHRvIHN1Ym1pdCBhIGZvcm0gYnkgcHJlc3NpbmcgXCJFbnRlclwiIHdoZW4gYSB0ZXh0XG4gICAqIGZpZWxkIGluc2lkZSBvZiB0aGUgZm9ybSBpcyBmb2N1c2VkLiBUaGUgbmF0aXZlIGJ1dHRvblxuICAgKiByZW5kZXJlZCBpbnNpZGUgb2YgYGlvbi1idXR0b25gIGlzIGluIHRoZSBTaGFkb3cgRE9NXG4gICAqIGFuZCB0aGVyZWZvcmUgZG9lcyBub3QgcGFydGljaXBhdGUgaW4gZm9ybSBzdWJtaXNzaW9uXG4gICAqIHdoaWNoIGlzIHdoeSB0aGUgZm9sbG93aW5nIGNvZGUgaXMgbmVjZXNzYXJ5LlxuICAgKi9cbiAgcmVuZGVySGlkZGVuQnV0dG9uKCkge1xuICAgIGNvbnN0IGZvcm1FbCA9IHRoaXMuZm9ybUVsID0gdGhpcy5maW5kRm9ybSgpO1xuICAgIGlmIChmb3JtRWwpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZm9ybUJ1dHRvbkVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGZvcm0gYWxyZWFkeSBoYXMgYSByZW5kZXJlZCBmb3JtIGJ1dHRvblxuICAgICAgICogdGhlbiBkbyBub3QgYXBwZW5kIGEgbmV3IG9uZSBhZ2Fpbi5cbiAgICAgICAqL1xuICAgICAgaWYgKGZvcm1CdXR0b25FbCAhPT0gbnVsbCAmJiBmb3JtRWwuY29udGFpbnMoZm9ybUJ1dHRvbkVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGUgYSBoaWRkZW4gbmF0aXZlIGJ1dHRvbiBpbnNpZGUgb2YgdGhlIGZvcm1cbiAgICAgIGNvbnN0IG5ld0Zvcm1CdXR0b25FbCA9IHRoaXMuZm9ybUJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBuZXdGb3JtQnV0dG9uRWwudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIG5ld0Zvcm1CdXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgLy8gT25seSBzdWJtaXQgaWYgdGhlIGJ1dHRvbiBpcyBub3QgZGlzYWJsZWQuXG4gICAgICBuZXdGb3JtQnV0dG9uRWwuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgZm9ybUVsLmFwcGVuZENoaWxkKG5ld0Zvcm1CdXR0b25FbCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5Ub29sYmFyID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1idXR0b25zJyk7XG4gICAgdGhpcy5pbkxpc3RIZWFkZXIgPSAhIXRoaXMuZWwuY2xvc2VzdCgnaW9uLWxpc3QtaGVhZGVyJyk7XG4gICAgdGhpcy5pbkl0ZW0gPSAhIXRoaXMuZWwuY2xvc2VzdCgnaW9uLWl0ZW0nKSB8fCAhIXRoaXMuZWwuY2xvc2VzdCgnaW9uLWl0ZW0tZGl2aWRlcicpO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgfVxuICBnZXQgaGFzSWNvbk9ubHkoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImljb24tb25seVwiXScpO1xuICB9XG4gIGdldCByaXBwbGVUeXBlKCkge1xuICAgIGNvbnN0IGhhc0NsZWFyRmlsbCA9IHRoaXMuZmlsbCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbCA9PT0gJ2NsZWFyJztcbiAgICAvLyBJZiB0aGUgYnV0dG9uIGlzIGluIGEgdG9vbGJhciwgaGFzIGEgY2xlYXIgZmlsbCAod2hpY2ggaXMgdGhlIGRlZmF1bHQpXG4gICAgLy8gYW5kIG9ubHkgaGFzIGFuIGljb24gd2UgdXNlIHRoZSB1bmJvdW5kZWQgXCJjaXJjdWxhclwiIHJpcHBsZSBlZmZlY3RcbiAgICBpZiAoaGFzQ2xlYXJGaWxsICYmIHRoaXMuaGFzSWNvbk9ubHkgJiYgdGhpcy5pblRvb2xiYXIpIHtcbiAgICAgIHJldHVybiAndW5ib3VuZGVkJztcbiAgICB9XG4gICAgcmV0dXJuICdib3VuZGVkJztcbiAgfVxuICAvKipcbiAgICogRmluZHMgdGhlIGZvcm0gZWxlbWVudCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGZvcm1gIHNlbGVjdG9yXG4gICAqIG9yIGVsZW1lbnQgcmVmZXJlbmNlIHByb3ZpZGVkLlxuICAgKi9cbiAgZmluZEZvcm0oKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChmb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBwcm92aWRlZCBpcyBhIGZvcm0gaWQuXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm0pO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgZGV2ZWxvcGVyIHNwZWNpZmllZCBhIHN0cmluZyBmb3IgdGhlIGZvcm0gYXR0cmlidXRlLCBidXQgdGhlXG4gICAgICAgICAgICogZWxlbWVudCB3aXRoIHRoYXQgaWQgaXMgbm90IGEgZm9ybSBlbGVtZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHByaW50SW9uV2FybmluZyhgRm9ybSB3aXRoIHNlbGVjdG9yOiBcIiMke2Zvcm19XCIgY291bGQgbm90IGJlIGZvdW5kLiBWZXJpZnkgdGhhdCB0aGUgaWQgaXMgYXR0YWNoZWQgdG8gYSA8Zm9ybT4gZWxlbWVudC5gLCB0aGlzLmVsKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZXZlbG9wZXIgc3BlY2lmaWVkIGEgc3RyaW5nIGZvciB0aGUgZm9ybSBhdHRyaWJ1dGUsIGJ1dCB0aGVcbiAgICAgICAgICogZWxlbWVudCB3aXRoIHRoYXQgaWQgY291bGQgbm90IGJlIGZvdW5kIGluIHRoZSBET00uXG4gICAgICAgICAqL1xuICAgICAgICBwcmludElvbldhcm5pbmcoYEZvcm0gd2l0aCBzZWxlY3RvcjogXCIjJHtmb3JtfVwiIGNvdWxkIG5vdCBiZSBmb3VuZC4gVmVyaWZ5IHRoYXQgdGhlIGlkIGlzIGNvcnJlY3QgYW5kIHRoZSBmb3JtIGlzIHJlbmRlcmVkIGluIHRoZSBET00uYCwgdGhpcy5lbCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZXZlbG9wZXIgc3BlY2lmaWVkIGEgSFRNTEVsZW1lbnQgZm9yIHRoZSBmb3JtIGF0dHJpYnV0ZSxcbiAgICAgICAqIGJ1dCB0aGUgZWxlbWVudCBpcyBub3QgYSBIVE1MRm9ybUVsZW1lbnQuXG4gICAgICAgKiBUaGlzIHdpbGwgYWxzbyBjYXRjaCBpZiB0aGUgZGV2ZWxvcGVyIHRyaWVzIHRvIHBhc3MgaW4gbnVsbFxuICAgICAgICogYXMgdGhlIGZvcm0gYXR0cmlidXRlLlxuICAgICAgICovXG4gICAgICBwcmludElvbldhcm5pbmcoYFRoZSBwcm92aWRlZCBcImZvcm1cIiBlbGVtZW50IGlzIGludmFsaWQuIFZlcmlmeSB0aGF0IHRoZSBmb3JtIGlzIGEgSFRNTEZvcm1FbGVtZW50IGFuZCByZW5kZXJlZCBpbiB0aGUgRE9NLmAsIHRoaXMuZWwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSBmb3JtIGVsZW1lbnQgaXMgbm90IHNldCwgdGhlIGJ1dHRvbiBtYXkgYmUgaW5zaWRlXG4gICAgICogb2YgYSBmb3JtIGVsZW1lbnQuIFF1ZXJ5IHRoZSBjbG9zZXN0IGZvcm0gZWxlbWVudCB0byB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmVsLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgfVxuICBzdWJtaXRGb3JtKGV2KSB7XG4gICAgLy8gdGhpcyBidXR0b24gd2FudHMgdG8gc3BlY2lmaWNhbGx5IHN1Ym1pdCBhIGZvcm1cbiAgICAvLyBjbGltYiB1cCB0aGUgZG9tIHRvIHNlZSBpZiB3ZSdyZSBpbiBhIDxmb3JtPlxuICAgIC8vIGFuZCBpZiBzbywgdGhlbiB1c2UgSlMgdG8gc3VibWl0IGl0XG4gICAgaWYgKHRoaXMuZm9ybUVsICYmIHRoaXMuZm9ybUJ1dHRvbkVsKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5mb3JtQnV0dG9uRWwuY2xpY2soKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlJDEodGhpcyk7XG4gICAgY29uc3Qge1xuICAgICAgYnV0dG9uVHlwZSxcbiAgICAgIHR5cGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlbCxcbiAgICAgIHRhcmdldCxcbiAgICAgIHNpemUsXG4gICAgICBocmVmLFxuICAgICAgY29sb3IsXG4gICAgICBleHBhbmQsXG4gICAgICBoYXNJY29uT25seSxcbiAgICAgIHNoYXBlLFxuICAgICAgc3Ryb25nLFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZpbmFsU2l6ZSA9IHNpemUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmluSXRlbSA/ICdzbWFsbCcgOiBzaXplO1xuICAgIGNvbnN0IFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICBjb25zdCBhdHRycyA9IFRhZ1R5cGUgPT09ICdidXR0b24nID8ge1xuICAgICAgdHlwZVxuICAgIH0gOiB7XG4gICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgIGhyZWYsXG4gICAgICByZWwsXG4gICAgICB0YXJnZXRcbiAgICB9O1xuICAgIGxldCBmaWxsID0gdGhpcy5maWxsO1xuICAgIC8qKlxuICAgICAqIFdlIGNoZWNrIGJvdGggdW5kZWZpbmVkIGFuZCBudWxsIHRvXG4gICAgICogd29yayBhcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vc3RlbmNpbC9pc3N1ZXMvMzU4Ni5cbiAgICAgKi9cbiAgICBpZiAoZmlsbCA9PSBudWxsKSB7XG4gICAgICBmaWxsID0gdGhpcy5pblRvb2xiYXIgfHwgdGhpcy5pbkxpc3RIZWFkZXIgPyAnY2xlYXInIDogJ3NvbGlkJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2UgY2FsbCByZW5kZXJIaWRkZW5CdXR0b24gaW4gdGhlIHJlbmRlciBmdW5jdGlvbiB0byBhY2NvdW50XG4gICAgICogZm9yIGFueSBwcm9wZXJ0aWVzIGJlaW5nIHNldCBhc3luYy4gRm9yIGV4YW1wbGUsIGNoYW5naW5nIHRoZVxuICAgICAqIFwidHlwZVwiIHByb3AgZnJvbSBcImJ1dHRvblwiIHRvIFwic3VibWl0XCIgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgKiBsb2FkZWQgd291bGQgd2FycmFudCB0aGUgaGlkZGVuIGJ1dHRvbiBiZWluZyBhZGRlZCB0byB0aGVcbiAgICAgKiBhc3NvY2lhdGVkIGZvcm0uXG4gICAgICovXG4gICAge1xuICAgICAgdHlwZSAhPT0gJ2J1dHRvbicgJiYgdGhpcy5yZW5kZXJIaWRkZW5CdXR0b24oKTtcbiAgICB9XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMzQwYTgwOWQ4NTY5ODc0MWJiMzZlNzk2MzU1Y2FlODlhOTcwNjU1ZicsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMkMShjb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIFtidXR0b25UeXBlXTogdHJ1ZSxcbiAgICAgICAgW2Ake2J1dHRvblR5cGV9LSR7ZXhwYW5kfWBdOiBleHBhbmQgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2Ake2J1dHRvblR5cGV9LSR7ZmluYWxTaXplfWBdOiBmaW5hbFNpemUgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2Ake2J1dHRvblR5cGV9LSR7c2hhcGV9YF06IHNoYXBlICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgJHtidXR0b25UeXBlfS0ke2ZpbGx9YF06IHRydWUsXG4gICAgICAgIFtgJHtidXR0b25UeXBlfS1zdHJvbmdgXTogc3Ryb25nLFxuICAgICAgICAnaW4tdG9vbGJhcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcicsIHRoaXMuZWwpLFxuICAgICAgICAnaW4tdG9vbGJhci1jb2xvcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcltjb2xvcl0nLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLWJ1dHRvbnMnOiBob3N0Q29udGV4dCgnaW9uLWJ1dHRvbnMnLCB0aGlzLmVsKSxcbiAgICAgICAgJ2J1dHRvbi1oYXMtaWNvbi1vbmx5JzogaGFzSWNvbk9ubHksXG4gICAgICAgICdidXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsXG4gICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnMDNhZTFiOTRhMGQ2MDZhYTY1YWE2ZjgyYzJmYzc2YWJjZjNmMTMwMCdcbiAgICB9LCBhdHRycywge1xuICAgICAgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLFxuICAgICAgcGFydDogXCJuYXRpdmVcIixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICB9LCBpbmhlcml0ZWRBdHRyaWJ1dGVzKSwgaChcInNwYW5cIiwge1xuICAgICAga2V5OiAnOTBiZjUzZDRmZmNhYjg4ZWU1OTZlY2U3MTEzZDViNjQwOWU2MTE0MycsXG4gICAgICBjbGFzczogXCJidXR0b24taW5uZXJcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2E3ODc2Njk1ZjBkODcwMmU4YmNiNDcxYWU0YzA5ODRmMjdkNzc0NTgnLFxuICAgICAgbmFtZTogXCJpY29uLW9ubHlcIixcbiAgICAgIG9uU2xvdGNoYW5nZTogdGhpcy5zbG90Q2hhbmdlZFxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcyYzg1NTE1ODZmODcyNjg4NGQ3Nzk3YTZkM2ZlZTJkNGIzYWFiMzVmJyxcbiAgICAgIG5hbWU6IFwic3RhcnRcIlxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc5YWIwN2FjY2RiMjJiMDhkMGE0NjNhN2M4MjFjOTc5MzUwN2QxZjdkJ1xuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc4OTg0YWZlMTc3ZTZiYTAyMTQzNTg3NWEzNzk4ZTJhNjRmM2JkZjJjJyxcbiAgICAgIG5hbWU6IFwiZW5kXCJcbiAgICB9KSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHtcbiAgICAgIGtleTogJzNlOWYwMWU3YTExOThiNmI3MTA5NTAyMjkzYTk3MWRhNzA3MmE0ZjMnLFxuICAgICAgdHlwZTogdGhpcy5yaXBwbGVUeXBlXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuQnV0dG9uLnN0eWxlID0ge1xuICBpb3M6IElvbkJ1dHRvbklvc1N0eWxlMCxcbiAgbWQ6IElvbkJ1dHRvbk1kU3R5bGUwXG59O1xuY29uc3QgdmFsaWRhdGVDb250ZW50ID0gc3ZnQ29udGVudCA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcbiAgLy8gc2V0dXAgdGhpcyB3YXkgdG8gZW5zdXJlIGl0IHdvcmtzIG9uIG91ciBidWRkeSBJRVxuICBmb3IgKGxldCBpID0gZGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoZGl2LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycpIHtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuY2hpbGROb2Rlc1tpXSk7XG4gICAgfVxuICB9XG4gIC8vIG11c3Qgb25seSBoYXZlIDEgcm9vdCBlbGVtZW50XG4gIGNvbnN0IHN2Z0VsbSA9IGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgaWYgKHN2Z0VsbSAmJiBzdmdFbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICBjb25zdCBzdmdDbGFzcyA9IHN2Z0VsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoc3ZnQ2xhc3MgKyAnIHMtaW9uLWljb24nKS50cmltKCkpO1xuICAgIC8vIHJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIHN2Z1xuICAgIC8vIGxldHMgZG91YmxlIGNoZWNrIHdlJ3ZlIGdvdCB2YWxpZCBlbGVtZW50c1xuICAgIC8vIGRvIG5vdCBhbGxvdyBzY3JpcHRzXG4gICAgaWYgKGlzVmFsaWQoc3ZnRWxtKSkge1xuICAgICAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn07XG5jb25zdCBpc1ZhbGlkID0gZWxtID0+IHtcbiAgaWYgKGVsbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbG0uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IGVsbS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG4gICAgICBpZiAoaXNTdHIobmFtZSkgJiYgbmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29uJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzVmFsaWQoZWxtLmNoaWxkTm9kZXNbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgaXNTdmdEYXRhVXJsID0gdXJsID0+IHVybC5zdGFydHNXaXRoKCdkYXRhOmltYWdlL3N2Zyt4bWwnKTtcbmNvbnN0IGlzRW5jb2RlZERhdGFVcmwgPSB1cmwgPT4gdXJsLmluZGV4T2YoJzt1dGY4LCcpICE9PSAtMTtcbmNvbnN0IGlvbmljb25Db250ZW50ID0gbmV3IE1hcCgpO1xuY29uc3QgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XG5sZXQgcGFyc2VyO1xuY29uc3QgZ2V0U3ZnQ29udGVudCA9ICh1cmwsIHNhbml0aXplKSA9PiB7XG4gIC8vIHNlZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXF1ZXN0IGZvciB0aGlzIHVybFxuICBsZXQgcmVxID0gcmVxdWVzdHMuZ2V0KHVybCk7XG4gIGlmICghcmVxKSB7XG4gICAgaWYgKHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgdXJsIGlzIGEgZGF0YSB1cmwgb2YgYW4gc3ZnLCB0aGVuIHRyeSB0byBwYXJzZSBpdFxuICAgICAgICogd2l0aCB0aGUgRE9NUGFyc2VyLiBUaGlzIHdvcmtzIHdpdGggY29udGVudCBzZWN1cml0eSBwb2xpY2llcyBlbmFibGVkLlxuICAgICAgICovXG4gICAgICBpZiAoaXNTdmdEYXRhVXJsKHVybCkgJiYgaXNFbmNvZGVkRGF0YVVybCh1cmwpKSB7XG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBET00gcGFyc2VyLiBUaGlzIGNyZWF0ZXMgYSBzaW5nbGVcbiAgICAgICAgICAgKiBwYXJzZXIgaW5zdGFuY2UgZm9yIHRoZSBlbnRpcmUgYXBwLCB3aGljaCBpcyBtb3JlIGVmZmljaWVudC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1cmwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgaW9uaWNvbkNvbnRlbnQuc2V0KHVybCwgc3ZnLm91dGVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdFxuICAgICAgICByZXEgPSBmZXRjaCh1cmwpLnRoZW4ocnNwID0+IHtcbiAgICAgICAgICBpZiAocnNwLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcnNwLnRleHQoKS50aGVuKHN2Z0NvbnRlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3ZnQ29udGVudCAmJiBzYW5pdGl6ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzdmdDb250ZW50ID0gdmFsaWRhdGVDb250ZW50KHN2Z0NvbnRlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlvbmljb25Db250ZW50LnNldCh1cmwsIHN2Z0NvbnRlbnQgfHwgJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbmljb25Db250ZW50LnNldCh1cmwsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNhY2hlIGZvciB0aGUgc2FtZSByZXF1ZXN0c1xuICAgICAgICByZXF1ZXN0cy5zZXQodXJsLCByZXEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgdG8gZW1wdHkgZm9yIHNzciBzY2VuYXJpb3MgYW5kIHJlc29sdmUgcHJvbWlzZVxuICAgICAgaW9uaWNvbkNvbnRlbnQuc2V0KHVybCwgJycpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVxO1xufTtcbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjFlbTtoZWlnaHQ6MWVtO2NvbnRhaW46c3RyaWN0O2ZpbGw6Y3VycmVudENvbG9yOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudH06aG9zdCAuaW9uaWNvbntzdHJva2U6Y3VycmVudENvbG9yfS5pb25pY29uLWZpbGwtbm9uZXtmaWxsOm5vbmV9Lmlvbmljb24tc3Ryb2tlLXdpZHRoe3N0cm9rZS13aWR0aDozMnB4O3N0cm9rZS13aWR0aDp2YXIoLS1pb25pY29uLXN0cm9rZS13aWR0aCwgMzJweCl9Lmljb24taW5uZXIsLmlvbmljb24sc3Zne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1Ac3VwcG9ydHMgKGJhY2tncm91bmQ6IC13ZWJraXQtbmFtZWQtaW1hZ2UoaSkpezpob3N0KC5pY29uLXJ0bCkgLmljb24taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX19QHN1cHBvcnRzIG5vdCBzZWxlY3Rvcig6ZGlyKHJ0bCkpIGFuZCBzZWxlY3Rvcig6aG9zdC1jb250ZXh0KFtkaXI9J3J0bCddKSl7Omhvc3QoLmljb24tcnRsKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfX06aG9zdCguZmxpcC1ydGwpOmhvc3QtY29udGV4dChbZGlyPSdydGwnXSkgLmljb24taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCguZmxpcC1ydGw6ZGlyKHJ0bCkpIC5pY29uLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7dHJhbnNmb3JtOnNjYWxlWCgtMSl9Omhvc3QoLmZsaXAtcnRsOmRpcihsdHIpKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19Omhvc3QoLmljb24tc21hbGwpe2ZvbnQtc2l6ZToxLjEyNXJlbSAhaW1wb3J0YW50fTpob3N0KC5pY29uLWxhcmdlKXtmb250LXNpemU6MnJlbSAhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKSAhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3ItcHJpbWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZil9Omhvc3QoLmlvbi1jb2xvci1zZWNvbmRhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCl9Omhvc3QoLmlvbi1jb2xvci10ZXJ0aWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICNmNGE5NDIpfTpob3N0KC5pb24tY29sb3Itc3VjY2Vzcyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzEwZGM2MCl9Omhvc3QoLmlvbi1jb2xvci13YXJuaW5nKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKX06aG9zdCguaW9uLWNvbG9yLWRhbmdlcil7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0MTQxKX06aG9zdCguaW9uLWNvbG9yLWxpZ2h0KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCl9Omhvc3QoLmlvbi1jb2xvci1tZWRpdW0pey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzk4OWFhMil9Omhvc3QoLmlvbi1jb2xvci1kYXJrKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KX1cIjtcbmNvbnN0IElvbkljb25TdHlsZTAgPSBpY29uQ3NzO1xuY29uc3QgSWNvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pY29uTmFtZSA9IG51bGw7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5kaWRMb2FkSWNvbiA9IGZhbHNlO1xuICAgIHRoaXMuc3ZnQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUoKTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW9zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNyYyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF6eSA9IGZhbHNlO1xuICAgIHRoaXMuc2FuaXRpemUgPSB0cnVlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnYXJpYS1sYWJlbCddKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBwdXJwb3NlbHkgZG8gbm90IHJldHVybiB0aGUgcHJvbWlzZSBoZXJlIGJlY2F1c2UgbG9hZGluZ1xuICAgIC8vIHRoZSBzdmcgZmlsZSBzaG91bGQgbm90IGhvbGQgdXAgbG9hZGluZyB0aGUgYXBwXG4gICAgLy8gb25seSBsb2FkIHRoZSBzdmcgaWYgaXQncyB2aXNpYmxlXG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKHRoaXMuZWwsICc1MHB4JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvbigpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogQWRkcmVzc2VzIGFuIEFuZ3VsYXIgaXNzdWUgd2hlcmUgcHJvcGVydHkgdmFsdWVzIGFyZSBhc3NpZ25lZCBhZnRlciB0aGUgJ2Nvbm5lY3RlZENhbGxiYWNrJyBidXQgcHJpb3IgdG8gdGhlIHJlZ2lzdHJhdGlvbiBvZiB3YXRjaGVycy5cbiAgICAgKiBUaGlzIGVuaGFuY2VtZW50IGVuc3VyZXMgdGhlIGxvYWRpbmcgb2YgYW4gaWNvbiB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGhlIGljb24gaGFzIHlldCB0byBhcHBseSB0aGUgU1ZHIGRhdGEuXG4gICAgICogVGhpcyBtb2RpZmljYXRpb24gcGVydGFpbnMgdG8gdGhlIHVzYWdlIG9mIEFuZ3VsYXIncyBiaW5kaW5nIHN5bnRheDpcbiAgICAgKiBgPGlvbi1pY29uIFtuYW1lXT1cIm15SWNvbk5hbWVcIj48L2lvbi1pY29uPmBcbiAgICAgKi9cbiAgICBpZiAoIXRoaXMuZGlkTG9hZEljb24pIHtcbiAgICAgIHRoaXMubG9hZEljb24oKTtcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaW8pIHtcbiAgICAgIHRoaXMuaW8uZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgd2FpdFVudGlsVmlzaWJsZShlbCwgcm9vdE1hcmdpbiwgY2IpIHtcbiAgICBpZiAodGhpcy5sYXp5ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY29uc3QgaW8gPSB0aGlzLmlvID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGFbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBpby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJvb3RNYXJnaW5cbiAgICAgIH0pO1xuICAgICAgaW8ub2JzZXJ2ZShlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICAvLyBzbyBqdXN0IGZhbGxiYWNrIHRvIGFsd2F5cyBzaG93IGl0XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuICBsb2FkSWNvbigpIHtcbiAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IGdldFVybCh0aGlzKTtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgaWYgKGlvbmljb25Db250ZW50Lmhhcyh1cmwpKSB7XG4gICAgICAgICAgLy8gc3luYyBpZiBpdCdzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgdGhpcy5zdmdDb250ZW50ID0gaW9uaWNvbkNvbnRlbnQuZ2V0KHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYXN5bmMgaWYgaXQgaGFzbid0IGJlZW4gbG9hZGVkXG4gICAgICAgICAgZ2V0U3ZnQ29udGVudCh1cmwsIHRoaXMuc2FuaXRpemUpLnRoZW4oKCkgPT4gdGhpcy5zdmdDb250ZW50ID0gaW9uaWNvbkNvbnRlbnQuZ2V0KHVybCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlkTG9hZEljb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmljb25OYW1lID0gZ2V0TmFtZSh0aGlzLm5hbWUsIHRoaXMuaWNvbiwgdGhpcy5tb2RlLCB0aGlzLmlvcywgdGhpcy5tZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZsaXBSdGwsXG4gICAgICBpY29uTmFtZSxcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLm1vZGUgfHwgJ21kJztcbiAgICAvLyB3ZSBoYXZlIGRlc2lnbmF0ZWQgdGhhdCBhcnJvd3MgJiBjaGV2cm9ucyBzaG91bGQgYXV0b21hdGljYWxseSBmbGlwICh1bmxlc3MgZmxpcC1ydGwgaXMgc2V0IHRvIGZhbHNlKSBiZWNhdXNlIFwiYmFja1wiIGlzIGxlZnQgaW4gbHRyIGFuZCByaWdodCBpbiBydGwsIGFuZCBcImZvcndhcmRcIiBpcyB0aGUgb3Bwb3NpdGVcbiAgICBjb25zdCBzaG91bGRBdXRvRmxpcCA9IGljb25OYW1lID8gKGljb25OYW1lLmluY2x1ZGVzKCdhcnJvdycpIHx8IGljb25OYW1lLmluY2x1ZGVzKCdjaGV2cm9uJykpICYmIGZsaXBSdGwgIT09IGZhbHNlIDogZmFsc2U7XG4gICAgLy8gaWYgc2hvdWxkQmVGbGlwcGFibGUgaXMgdHJ1ZSwgdGhlIGljb24gc2hvdWxkIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBgZGlyYCBjaGFuZ2VzXG4gICAgY29uc3Qgc2hvdWxkQmVGbGlwcGFibGUgPSBmbGlwUnRsIHx8IHNob3VsZEF1dG9GbGlwO1xuICAgIHJldHVybiBoKEhvc3QsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHtcbiAgICAgICAgW2BpY29uLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgICAgJ2ZsaXAtcnRsJzogc2hvdWxkQmVGbGlwcGFibGUsXG4gICAgICAgICdpY29uLXJ0bCc6IHNob3VsZEJlRmxpcHBhYmxlICYmIGlzUlRMKGVsKVxuICAgICAgfSlcbiAgICB9LCBpbmhlcml0ZWRBdHRyaWJ1dGVzKSwgdGhpcy5zdmdDb250ZW50ID8gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJpY29uLWlubmVyXCIsXG4gICAgICBpbm5lckhUTUw6IHRoaXMuc3ZnQ29udGVudFxuICAgIH0pIDogaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJpY29uLWlubmVyXCJcbiAgICB9KSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkge1xuICAgIHJldHVybiBbXCJzdmdcIl07XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwibmFtZVwiOiBbXCJsb2FkSWNvblwiXSxcbiAgICAgIFwic3JjXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgXCJpY29uXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgXCJpb3NcIjogW1wibG9hZEljb25cIl0sXG4gICAgICBcIm1kXCI6IFtcImxvYWRJY29uXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IGdldElvbk1vZGUgPSAoKSA9PiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21vZGUnKSB8fCAnbWQnO1xuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gY29sb3IgPT4ge1xuICByZXR1cm4gY29sb3IgPyB7XG4gICAgJ2lvbi1jb2xvcic6IHRydWUsXG4gICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxuICB9IDogbnVsbDtcbn07XG5JY29uLnN0eWxlID0gSW9uSWNvblN0eWxlMDtcbmV4cG9ydCB7IEJ1dHRvbiBhcyBpb25fYnV0dG9uLCBJY29uIGFzIGlvbl9pY29uIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQUk7QUFDSixJQUFNLGFBQWEsTUFBTTtBQUN2QixNQUFJLE9BQU8sV0FBVyxhQUFhO0FBQ2pDLFdBQU8sb0JBQUksSUFBSTtBQUFBLEVBQ2pCLE9BQU87QUFDTCxRQUFJLENBQUMsWUFBWTtBQUNmLFlBQU0sTUFBTTtBQUNaLFVBQUksV0FBVyxJQUFJLFlBQVksQ0FBQztBQUNoQyxtQkFBYSxJQUFJLFNBQVMsTUFBTSxJQUFJLFNBQVMsT0FBTyxvQkFBSSxJQUFJO0FBQUEsSUFDOUQ7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBQ0EsSUFBTSxTQUFTLE9BQUs7QUFDbEIsTUFBSSxNQUFNLE9BQU8sRUFBRSxHQUFHO0FBQ3RCLE1BQUksS0FBSztBQUNQLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDakQsTUFBSSxLQUFLO0FBQ1AsV0FBTyxZQUFZLEtBQUssQ0FBQztBQUFBLEVBQzNCO0FBQ0EsTUFBSSxFQUFFLE1BQU07QUFDVixVQUFNLE9BQU8sRUFBRSxJQUFJO0FBQ25CLFFBQUksS0FBSztBQUNQLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztBQUMzQixRQUFJLEtBQUs7QUFDUCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLGNBQWMsQ0FBQyxVQUFVLFdBQVc7QUFDeEMsUUFBTSxNQUFNLFdBQVcsRUFBRSxJQUFJLFFBQVE7QUFDckMsTUFBSSxLQUFLO0FBQ1AsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJO0FBQ0YsV0FBTyxhQUFhLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFDM0MsU0FBUyxHQUFHO0FBUVYsWUFBUSxLQUFLLHNEQUFzRCxRQUFRLDRIQUE0SCxNQUFNO0FBQUEsRUFDL007QUFDRjtBQUNBLElBQU0sVUFBVSxDQUFDLFVBQVUsTUFBTSxNQUFNLEtBQUssT0FBTztBQUVqRCxVQUFRLFFBQVEsUUFBUSxJQUFJLE9BQU8sUUFBUSxRQUFRO0FBR25ELE1BQUksT0FBTyxTQUFTLE9BQU87QUFDekIsZUFBVyxRQUFRLEdBQUc7QUFBQSxFQUN4QixXQUFXLE1BQU0sU0FBUyxNQUFNO0FBQzlCLGVBQVcsUUFBUSxFQUFFO0FBQUEsRUFDdkIsT0FBTztBQUNMLFFBQUksQ0FBQyxZQUFZLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRztBQUNyQyxpQkFBVztBQUFBLElBQ2I7QUFDQSxRQUFJLE1BQU0sUUFBUSxHQUFHO0FBQ25CLGlCQUFXLFFBQVEsUUFBUTtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUNBLE1BQUksQ0FBQyxNQUFNLFFBQVEsS0FBSyxTQUFTLEtBQUssTUFBTSxJQUFJO0FBQzlDLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxlQUFlLFNBQVMsUUFBUSxnQkFBZ0IsRUFBRTtBQUN4RCxNQUFJLGlCQUFpQixJQUFJO0FBQ3ZCLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxTQUFTLFNBQU87QUFDcEIsTUFBSSxNQUFNLEdBQUcsR0FBRztBQUNkLFVBQU0sSUFBSSxLQUFLO0FBQ2YsUUFBSSxNQUFNLEdBQUcsR0FBRztBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUNBLElBQU0sUUFBUSxTQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsS0FBSyxHQUFHO0FBQ3pELElBQU0sUUFBUSxTQUFPLE9BQU8sUUFBUTtBQUNwQyxJQUFNLFVBQVUsU0FBTyxJQUFJLFlBQVk7QUFXdkMsSUFBTSxvQkFBb0IsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNO0FBQ2pELFFBQU0sa0JBQWtCLENBQUM7QUFDekIsYUFBVyxRQUFRLFVBQVE7QUFDekIsUUFBSSxHQUFHLGFBQWEsSUFBSSxHQUFHO0FBQ3pCLFlBQU0sUUFBUSxHQUFHLGFBQWEsSUFBSTtBQUNsQyxVQUFJLFVBQVUsTUFBTTtBQUNsQix3QkFBZ0IsSUFBSSxJQUFJLEdBQUcsYUFBYSxJQUFJO0FBQUEsTUFDOUM7QUFDQSxTQUFHLGdCQUFnQixJQUFJO0FBQUEsSUFDekI7QUFBQSxFQUNGLENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFNQSxJQUFNLFFBQVEsWUFBVTtBQUN0QixNQUFJLFFBQVE7QUFDVixRQUFJLE9BQU8sUUFBUSxJQUFJO0FBQ3JCLGFBQU8sT0FBTyxJQUFJLFlBQVksTUFBTTtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNBLFVBQVEsYUFBYSxRQUFRLGFBQWEsU0FBUyxTQUFTLFNBQVMsSUFBSSxZQUFZLE9BQU87QUFDOUY7QUFDQSxJQUFNLGVBQWU7QUFDckIsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxjQUFjO0FBQ3BCLElBQU0sb0JBQW9CO0FBQzFCLElBQU0sU0FBUyxNQUFNO0FBQUEsRUFDbkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxTQUFTO0FBQ2QsU0FBSyxlQUFlO0FBQ3BCLFNBQUssWUFBWTtBQUNqQixTQUFLLGVBQWU7QUFDcEIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxzQkFBc0IsQ0FBQztBQUM1QixTQUFLLGNBQWMsUUFBTTtBQUN2QixZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksS0FBSyxTQUFTLFVBQVU7QUFDMUIsZ0JBQVEsS0FBSyxNQUFNLElBQUksS0FBSyxpQkFBaUIsS0FBSyxlQUFlO0FBQUEsTUFDbkUsV0FBVyxhQUFhLEVBQUUsR0FBRztBQUMzQixhQUFLLFdBQVcsRUFBRTtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUNBLFNBQUssVUFBVSxNQUFNO0FBQ25CLFdBQUssU0FBUyxLQUFLO0FBQUEsSUFDckI7QUFDQSxTQUFLLFNBQVMsTUFBTTtBQUNsQixXQUFLLFFBQVEsS0FBSztBQUFBLElBQ3BCO0FBQ0EsU0FBSyxjQUFjLE1BQU07QUFTdkIsV0FBSyxXQUFXLEtBQUs7QUFBQSxJQUN2QjtBQUNBLFNBQUssV0FBVztBQUNoQixTQUFLLFFBQVE7QUFDYixTQUFLLGFBQWE7QUFDbEIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssU0FBUztBQUNkLFNBQUssT0FBTztBQUNaLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssV0FBVztBQUNoQixTQUFLLE9BQU87QUFDWixTQUFLLE1BQU07QUFDWCxTQUFLLFFBQVE7QUFDYixTQUFLLE9BQU87QUFDWixTQUFLLFNBQVM7QUFDZCxTQUFLLFNBQVM7QUFDZCxTQUFLLE9BQU87QUFDWixTQUFLLE9BQU87QUFBQSxFQUNkO0FBQUEsRUFDQSxrQkFBa0I7QUFDaEIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFJLEtBQUssY0FBYztBQUNyQixXQUFLLGFBQWEsV0FBVztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEscUJBQXFCO0FBQ25CLFVBQU0sU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTO0FBQzNDLFFBQUksUUFBUTtBQUNWLFlBQU07QUFBQSxRQUNKO0FBQUEsTUFDRixJQUFJO0FBS0osVUFBSSxpQkFBaUIsUUFBUSxPQUFPLFNBQVMsWUFBWSxHQUFHO0FBQzFEO0FBQUEsTUFDRjtBQUVBLFlBQU0sa0JBQWtCLEtBQUssZUFBZSxTQUFTLGNBQWMsUUFBUTtBQUMzRSxzQkFBZ0IsT0FBTyxLQUFLO0FBQzVCLHNCQUFnQixNQUFNLFVBQVU7QUFFaEMsc0JBQWdCLFdBQVcsS0FBSztBQUNoQyxhQUFPLFlBQVksZUFBZTtBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssWUFBWSxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsYUFBYTtBQUNoRCxTQUFLLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLGlCQUFpQjtBQUN2RCxTQUFLLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLFVBQVUsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsa0JBQWtCO0FBQ25GLFNBQUssc0JBQXNCLHNCQUFzQixLQUFLLEVBQUU7QUFBQSxFQUMxRDtBQUFBLEVBQ0EsSUFBSSxjQUFjO0FBQ2hCLFdBQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxjQUFjLG9CQUFvQjtBQUFBLEVBQ3JEO0FBQUEsRUFDQSxJQUFJLGFBQWE7QUFDZixVQUFNLGVBQWUsS0FBSyxTQUFTLFVBQWEsS0FBSyxTQUFTO0FBRzlELFFBQUksZ0JBQWdCLEtBQUssZUFBZSxLQUFLLFdBQVc7QUFDdEQsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxXQUFXO0FBQ1QsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFJLGdCQUFnQixpQkFBaUI7QUFDbkMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLE9BQU8sU0FBUyxVQUFVO0FBRTVCLFlBQU0sS0FBSyxTQUFTLGVBQWUsSUFBSTtBQUN2QyxVQUFJLElBQUk7QUFDTixZQUFJLGNBQWMsaUJBQWlCO0FBQ2pDLGlCQUFPO0FBQUEsUUFDVCxPQUFPO0FBS0wsMEJBQWdCLHlCQUF5QixJQUFJLDZFQUE2RSxLQUFLLEVBQUU7QUFDakksaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRixPQUFPO0FBS0wsd0JBQWdCLHlCQUF5QixJQUFJLDRGQUE0RixLQUFLLEVBQUU7QUFDaEosZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQ0EsUUFBSSxTQUFTLFFBQVc7QUFPdEIsc0JBQWdCLDhHQUE4RyxLQUFLLEVBQUU7QUFDckksYUFBTztBQUFBLElBQ1Q7QUFLQSxXQUFPLEtBQUssR0FBRyxRQUFRLE1BQU07QUFBQSxFQUMvQjtBQUFBLEVBQ0EsV0FBVyxJQUFJO0FBSWIsUUFBSSxLQUFLLFVBQVUsS0FBSyxjQUFjO0FBQ3BDLFNBQUcsZUFBZTtBQUNsQixXQUFLLGFBQWEsTUFBTTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU0sT0FBTyxXQUFhLElBQUk7QUFDOUIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLFlBQVksU0FBUyxVQUFhLEtBQUssU0FBUyxVQUFVO0FBQ2hFLFVBQU0sVUFBVSxTQUFTLFNBQVksV0FBVztBQUNoRCxVQUFNLFFBQVEsWUFBWSxXQUFXO0FBQUEsTUFDbkM7QUFBQSxJQUNGLElBQUk7QUFBQSxNQUNGLFVBQVUsS0FBSztBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFDQSxRQUFJLE9BQU8sS0FBSztBQUtoQixRQUFJLFFBQVEsTUFBTTtBQUNoQixhQUFPLEtBQUssYUFBYSxLQUFLLGVBQWUsVUFBVTtBQUFBLElBQ3pEO0FBUUE7QUFDRSxlQUFTLFlBQVksS0FBSyxtQkFBbUI7QUFBQSxJQUMvQztBQUNBLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxTQUFTLEtBQUs7QUFBQSxNQUNkLGlCQUFpQixXQUFXLFNBQVM7QUFBQSxNQUNyQyxPQUFPLG1CQUFxQixPQUFPO0FBQUEsUUFDakMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLENBQUMsVUFBVSxHQUFHO0FBQUEsUUFDZCxDQUFDLEdBQUcsVUFBVSxJQUFJLE1BQU0sRUFBRSxHQUFHLFdBQVc7QUFBQSxRQUN4QyxDQUFDLEdBQUcsVUFBVSxJQUFJLFNBQVMsRUFBRSxHQUFHLGNBQWM7QUFBQSxRQUM5QyxDQUFDLEdBQUcsVUFBVSxJQUFJLEtBQUssRUFBRSxHQUFHLFVBQVU7QUFBQSxRQUN0QyxDQUFDLEdBQUcsVUFBVSxJQUFJLElBQUksRUFBRSxHQUFHO0FBQUEsUUFDM0IsQ0FBQyxHQUFHLFVBQVUsU0FBUyxHQUFHO0FBQUEsUUFDMUIsY0FBYyxZQUFZLGVBQWUsS0FBSyxFQUFFO0FBQUEsUUFDaEQsb0JBQW9CLFlBQVksc0JBQXNCLEtBQUssRUFBRTtBQUFBLFFBQzdELGNBQWMsWUFBWSxlQUFlLEtBQUssRUFBRTtBQUFBLFFBQ2hELHdCQUF3QjtBQUFBLFFBQ3hCLG1CQUFtQjtBQUFBLFFBQ25CLG1CQUFtQjtBQUFBLFFBQ25CLGlCQUFpQjtBQUFBLE1BQ25CLENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxTQUFTLE9BQU8sT0FBTztBQUFBLE1BQzFCLEtBQUs7QUFBQSxJQUNQLEdBQUcsT0FBTztBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ047QUFBQSxNQUNBLFNBQVMsS0FBSztBQUFBLE1BQ2QsUUFBUSxLQUFLO0FBQUEsSUFDZixHQUFHLG1CQUFtQixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ2pDLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixjQUFjLEtBQUs7QUFBQSxJQUNyQixDQUFDLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUixDQUFDLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWixLQUFLO0FBQUEsSUFDUCxDQUFDLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUixDQUFDLENBQUMsR0FBRyxTQUFTLFFBQVEsRUFBRSxxQkFBcUI7QUFBQSxNQUMzQyxLQUFLO0FBQUEsTUFDTCxNQUFNLEtBQUs7QUFBQSxJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFlBQVksQ0FBQyxpQkFBaUI7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjtBQUNBLE9BQU8sUUFBUTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOO0FBQ0EsSUFBTSxrQkFBa0IsZ0JBQWM7QUFDcEMsUUFBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLE1BQUksWUFBWTtBQUVoQixXQUFTLElBQUksSUFBSSxXQUFXLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSztBQUNuRCxRQUFJLElBQUksV0FBVyxDQUFDLEVBQUUsU0FBUyxZQUFZLE1BQU0sT0FBTztBQUN0RCxVQUFJLFlBQVksSUFBSSxXQUFXLENBQUMsQ0FBQztBQUFBLElBQ25DO0FBQUEsRUFDRjtBQUVBLFFBQU0sU0FBUyxJQUFJO0FBQ25CLE1BQUksVUFBVSxPQUFPLFNBQVMsWUFBWSxNQUFNLE9BQU87QUFDckQsVUFBTSxXQUFXLE9BQU8sYUFBYSxPQUFPLEtBQUs7QUFDakQsV0FBTyxhQUFhLFVBQVUsV0FBVyxlQUFlLEtBQUssQ0FBQztBQUk5RCxRQUFJLFFBQVEsTUFBTSxHQUFHO0FBQ25CLGFBQU8sSUFBSTtBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxVQUFVLFNBQU87QUFDckIsTUFBSSxJQUFJLGFBQWEsR0FBRztBQUN0QixRQUFJLElBQUksU0FBUyxZQUFZLE1BQU0sVUFBVTtBQUMzQyxhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxXQUFXLFFBQVEsS0FBSztBQUM5QyxZQUFNLE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRTtBQUMvQixVQUFJLE1BQU0sSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFLFFBQVEsSUFBSSxNQUFNLEdBQUc7QUFDekQsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQ0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFdBQVcsUUFBUSxLQUFLO0FBQzlDLFVBQUksQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLENBQUMsR0FBRztBQUMvQixlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxlQUFlLFNBQU8sSUFBSSxXQUFXLG9CQUFvQjtBQUMvRCxJQUFNLG1CQUFtQixTQUFPLElBQUksUUFBUSxRQUFRLE1BQU07QUFDMUQsSUFBTSxpQkFBaUIsb0JBQUksSUFBSTtBQUMvQixJQUFNLFdBQVcsb0JBQUksSUFBSTtBQUN6QixJQUFJO0FBQ0osSUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLGFBQWE7QUFFdkMsTUFBSSxNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQzFCLE1BQUksQ0FBQyxLQUFLO0FBQ1IsUUFBSSxPQUFPLFVBQVUsZUFBZSxPQUFPLGFBQWEsYUFBYTtBQUtuRSxVQUFJLGFBQWEsR0FBRyxLQUFLLGlCQUFpQixHQUFHLEdBQUc7QUFDOUMsWUFBSSxDQUFDLFFBQVE7QUFLWCxtQkFBUyxJQUFJLFVBQVU7QUFBQSxRQUN6QjtBQUNBLGNBQU0sTUFBTSxPQUFPLGdCQUFnQixLQUFLLFdBQVc7QUFDbkQsY0FBTSxNQUFNLElBQUksY0FBYyxLQUFLO0FBQ25DLFlBQUksS0FBSztBQUNQLHlCQUFlLElBQUksS0FBSyxJQUFJLFNBQVM7QUFBQSxRQUN2QztBQUNBLGVBQU8sUUFBUSxRQUFRO0FBQUEsTUFDekIsT0FBTztBQUVMLGNBQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxTQUFPO0FBQzNCLGNBQUksSUFBSSxJQUFJO0FBQ1YsbUJBQU8sSUFBSSxLQUFLLEVBQUUsS0FBSyxnQkFBYztBQUNuQyxrQkFBSSxjQUFjLGFBQWEsT0FBTztBQUNwQyw2QkFBYSxnQkFBZ0IsVUFBVTtBQUFBLGNBQ3pDO0FBQ0EsNkJBQWUsSUFBSSxLQUFLLGNBQWMsRUFBRTtBQUFBLFlBQzFDLENBQUM7QUFBQSxVQUNIO0FBQ0EseUJBQWUsSUFBSSxLQUFLLEVBQUU7QUFBQSxRQUM1QixDQUFDO0FBRUQsaUJBQVMsSUFBSSxLQUFLLEdBQUc7QUFBQSxNQUN2QjtBQUFBLElBQ0YsT0FBTztBQUVMLHFCQUFlLElBQUksS0FBSyxFQUFFO0FBQzFCLGFBQU8sUUFBUSxRQUFRO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxVQUFVO0FBQ2hCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sT0FBTyxNQUFNO0FBQUEsRUFDakIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssc0JBQXNCLENBQUM7QUFDNUIsU0FBSyxjQUFjO0FBQ25CLFNBQUssYUFBYTtBQUNsQixTQUFLLFlBQVk7QUFDakIsU0FBSyxPQUFPQSxZQUFXO0FBQ3ZCLFNBQUssUUFBUTtBQUNiLFNBQUssTUFBTTtBQUNYLFNBQUssS0FBSztBQUNWLFNBQUssVUFBVTtBQUNmLFNBQUssT0FBTztBQUNaLFNBQUssTUFBTTtBQUNYLFNBQUssT0FBTztBQUNaLFNBQUssT0FBTztBQUNaLFNBQUssT0FBTztBQUNaLFNBQUssV0FBVztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsU0FBSyxzQkFBc0Isa0JBQWtCLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztBQUFBLEVBQ3RFO0FBQUEsRUFDQSxvQkFBb0I7QUFJbEIsU0FBSyxpQkFBaUIsS0FBSyxJQUFJLFFBQVEsTUFBTTtBQUMzQyxXQUFLLFlBQVk7QUFDakIsV0FBSyxTQUFTO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLG1CQUFtQjtBQU9qQixRQUFJLENBQUMsS0FBSyxhQUFhO0FBQ3JCLFdBQUssU0FBUztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsdUJBQXVCO0FBQ3JCLFFBQUksS0FBSyxJQUFJO0FBQ1gsV0FBSyxHQUFHLFdBQVc7QUFDbkIsV0FBSyxLQUFLO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGlCQUFpQixJQUFJLFlBQVksSUFBSTtBQUNuQyxRQUFJLEtBQUssUUFBUSxPQUFPLFdBQVcsZUFBZSxPQUFPLHNCQUFzQjtBQUM3RSxZQUFNLEtBQUssS0FBSyxLQUFLLElBQUksT0FBTyxxQkFBcUIsVUFBUTtBQUMzRCxZQUFJLEtBQUssQ0FBQyxFQUFFLGdCQUFnQjtBQUMxQixhQUFHLFdBQVc7QUFDZCxlQUFLLEtBQUs7QUFDVixhQUFHO0FBQUEsUUFDTDtBQUFBLE1BQ0YsR0FBRztBQUFBLFFBQ0Q7QUFBQSxNQUNGLENBQUM7QUFDRCxTQUFHLFFBQVEsRUFBRTtBQUFBLElBQ2YsT0FBTztBQUdMLFNBQUc7QUFBQSxJQUNMO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUNULFFBQUksS0FBSyxXQUFXO0FBQ2xCLFlBQU0sTUFBTSxPQUFPLElBQUk7QUFDdkIsVUFBSSxLQUFLO0FBQ1AsWUFBSSxlQUFlLElBQUksR0FBRyxHQUFHO0FBRTNCLGVBQUssYUFBYSxlQUFlLElBQUksR0FBRztBQUFBLFFBQzFDLE9BQU87QUFFTCx3QkFBYyxLQUFLLEtBQUssUUFBUSxFQUFFLEtBQUssTUFBTSxLQUFLLGFBQWEsZUFBZSxJQUFJLEdBQUcsQ0FBQztBQUFBLFFBQ3hGO0FBQ0EsYUFBSyxjQUFjO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQ0EsU0FBSyxXQUFXLFFBQVEsS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssRUFBRTtBQUFBLEVBQzVFO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLE9BQU8sS0FBSyxRQUFRO0FBRTFCLFVBQU0saUJBQWlCLFlBQVksU0FBUyxTQUFTLE9BQU8sS0FBSyxTQUFTLFNBQVMsU0FBUyxNQUFNLFlBQVksUUFBUTtBQUV0SCxVQUFNLG9CQUFvQixXQUFXO0FBQ3JDLFdBQU8sRUFBRSxNQUFNLE9BQU8sT0FBTztBQUFBLE1BQzNCLE1BQU07QUFBQSxNQUNOLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQ2pDLENBQUMsSUFBSSxHQUFHO0FBQUEsTUFDVixHQUFHQyxvQkFBbUIsS0FBSyxLQUFLLENBQUMsR0FBRztBQUFBLFFBQ2xDLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLO0FBQUEsUUFDOUIsWUFBWTtBQUFBLFFBQ1osWUFBWSxxQkFBcUIsTUFBTSxFQUFFO0FBQUEsTUFDM0MsQ0FBQztBQUFBLElBQ0gsR0FBRyxtQkFBbUIsR0FBRyxLQUFLLGFBQWEsRUFBRSxPQUFPO0FBQUEsTUFDbEQsT0FBTztBQUFBLE1BQ1AsV0FBVyxLQUFLO0FBQUEsSUFDbEIsQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1QsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVyxhQUFhO0FBQ3RCLFdBQU8sQ0FBQyxLQUFLO0FBQUEsRUFDZjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFFBQVEsQ0FBQyxVQUFVO0FBQUEsTUFDbkIsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNsQixRQUFRLENBQUMsVUFBVTtBQUFBLE1BQ25CLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsTUFBTSxDQUFDLFVBQVU7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU1ELGNBQWEsTUFBTSxPQUFPLGFBQWEsZUFBZSxTQUFTLGdCQUFnQixhQUFhLE1BQU0sS0FBSztBQUM3RyxJQUFNQyxzQkFBcUIsV0FBUztBQUNsQyxTQUFPLFFBQVE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLENBQUMsYUFBYSxLQUFLLEVBQUUsR0FBRztBQUFBLEVBQzFCLElBQUk7QUFDTjtBQUNBLEtBQUssUUFBUTsiLCJuYW1lcyI6WyJnZXRJb25Nb2RlIiwiY3JlYXRlQ29sb3JDbGFzc2VzIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
