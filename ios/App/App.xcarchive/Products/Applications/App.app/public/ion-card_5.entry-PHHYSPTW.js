import {
  createColorClasses,
  openURL
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

// node_modules/@ionic/core/dist/esm/ion-card_5.entry.js
var cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}";
var IonCardIosStyle0 = cardIosCss;
var cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}";
var IonCardMdStyle0 = cardMdCss;
var Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAriaAttributes = {};
    this.color = void 0;
    this.button = false;
    this.type = "button";
    this.disabled = false;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.target = void 0;
  }
  componentWillLoad() {
    this.inheritedAriaAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  renderCard(mode) {
    const clickable = this.isClickable();
    if (!clickable) {
      return [h("slot", null)];
    }
    const {
      href,
      routerAnimation,
      routerDirection,
      inheritedAriaAttributes
    } = this;
    const TagType = clickable ? href === void 0 ? "button" : "a" : "div";
    const attrs = TagType === "button" ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(TagType, Object.assign({}, attrs, inheritedAriaAttributes, {
      class: "card-native",
      part: "native",
      disabled: this.disabled,
      onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation)
    }), h("slot", null), clickable && mode === "md" && h("ion-ripple-effect", null));
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "85e9b30bd81e79a0c7ac75cb3664bdcf9e4afc4d",
      class: createColorClasses(this.color, {
        [mode]: true,
        "card-disabled": this.disabled,
        "ion-activatable": this.isClickable()
      })
    }, this.renderCard(mode));
  }
  get el() {
    return getElement(this);
  }
};
Card.style = {
  ios: IonCardIosStyle0,
  md: IonCardMdStyle0
};
var cardContentIosCss = "ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:1rem;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem}ion-card-header+.card-content-ios{padding-top:0}";
var IonCardContentIosStyle0 = cardContentIosCss;
var cardContentMdCss = "ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:0.875rem;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}";
var IonCardContentMdStyle0 = cardContentMdCss;
var CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "d98e4d1fc6ad3237549f9bc17e4c67ec5059b1b3",
      class: {
        [mode]: true,
        // Used internally for styling
        [`card-content-${mode}`]: true
      }
    });
  }
};
CardContent.style = {
  ios: IonCardContentIosStyle0,
  md: IonCardContentMdStyle0
};
var cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}";
var IonCardHeaderIosStyle0 = cardHeaderIosCss;
var cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
var IonCardHeaderMdStyle0 = cardHeaderMdCss;
var CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "64246b81931203a64d553c788cd736f41e23f37b",
      class: createColorClasses(this.color, {
        "card-header-translucent": this.translucent,
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "af2da2dfe266889afeb57fac25c6a730558dbba4"
    }));
  }
};
CardHeader.style = {
  ios: IonCardHeaderIosStyle0,
  md: IonCardHeaderMdStyle0
};
var cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
var IonCardSubtitleIosStyle0 = cardSubtitleIosCss;
var cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}";
var IonCardSubtitleMdStyle0 = cardSubtitleMdCss;
var CardSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "84d820a19d9074f9c8bc61ccba1ca40062a60b73",
      role: "heading",
      "aria-level": "3",
      class: createColorClasses(this.color, {
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "e4d07d395a1f4469a90847636083101b32b776a1"
    }));
  }
};
CardSubtitle.style = {
  ios: IonCardSubtitleIosStyle0,
  md: IonCardSubtitleMdStyle0
};
var cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.75rem;font-weight:700;line-height:1.2}";
var IonCardTitleIosStyle0 = cardTitleIosCss;
var cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;line-height:1.2}";
var IonCardTitleMdStyle0 = cardTitleMdCss;
var CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "fca001a86396e83718d5211cd71912fdf40dea2f",
      role: "heading",
      "aria-level": "2",
      class: createColorClasses(this.color, {
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "2ba416aed488b2ff462fa75fb3b70373a6dd7da6"
    }));
  }
};
CardTitle.style = {
  ios: IonCardTitleIosStyle0,
  md: IonCardTitleMdStyle0
};
export {
  Card as ion_card,
  CardContent as ion_card_content,
  CardHeader as ion_card_header,
  CardSubtitle as ion_card_subtitle,
  CardTitle as ion_card_title
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-card_5.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY2FyZF81LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBoIGFzIGluaGVyaXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTAxZjNmMjljLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IGNhcmRJb3NDc3MgPSBcIjpob3N0ey0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjb250YWluOmNvbnRlbnQ7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmNhcmQtZGlzYWJsZWQpe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC4zO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhcmQtbmF0aXZle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6aW5oZXJpdH0uY2FyZC1uYXRpdmU6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9YnV0dG9uLGF7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1kcmFnOm5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZCwgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSk7LS1jb2xvcjp2YXIoLS1pb24tY2FyZC1jb2xvciwgdmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKSkpOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDoyNHB4O21hcmdpbi1ib3R0b206MjRweDtib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzIsIDAuMjksIDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzIsIDAuMjksIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjEyLCAwLjcyLCAwLjI5LCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MiwgMC4yOSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjEyLCAwLjcyLCAwLjI5LCAxKTtmb250LXNpemU6MC44NzVyZW07LXdlYmtpdC1ib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX06aG9zdCguaW9uLWFjdGl2YXRlZCl7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLjk3LCAwLjk3LCAxKTt0cmFuc2Zvcm06c2NhbGUzZCgwLjk3LCAwLjk3LCAxKX1cIjtcbmNvbnN0IElvbkNhcmRJb3NTdHlsZTAgPSBjYXJkSW9zQ3NzO1xuY29uc3QgY2FyZE1kQ3NzID0gXCI6aG9zdHstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpjb250ZW50O292ZXJmbG93OmhpZGRlbn06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5jYXJkLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuMztwb2ludGVyLWV2ZW50czpub25lfS5jYXJkLW5hdGl2ZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpOy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOmluaGVyaXR9LmNhcmQtbmF0aXZlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWJ1dHRvbixhe2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItZHJhZzpub25lfWlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jYXJkLWJhY2tncm91bmQsIHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSkpOy0tY29sb3I6dmFyKC0taW9uLWNhcmQtY29sb3IsIHZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDUwLCAjNzM3MzczKSkpKTstd2Via2l0LW1hcmdpbi1zdGFydDoxMHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LW1hcmdpbi1lbmQ6MTBweDttYXJnaW4taW5saW5lLWVuZDoxMHB4O21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHg7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOjAuODc1cmVtOy13ZWJraXQtYm94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMil9XCI7XG5jb25zdCBJb25DYXJkTWRTdHlsZTAgPSBjYXJkTWRDc3M7XG5jb25zdCBDYXJkID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmluaGVyaXRlZEFyaWFBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRvd25sb2FkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaHJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB0aGlzLnJvdXRlckFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaGVyaXRlZEFyaWFBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXModGhpcy5lbCwgWydhcmlhLWxhYmVsJ10pO1xuICB9XG4gIGlzQ2xpY2thYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmhyZWYgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmJ1dHRvbjtcbiAgfVxuICByZW5kZXJDYXJkKG1vZGUpIHtcbiAgICBjb25zdCBjbGlja2FibGUgPSB0aGlzLmlzQ2xpY2thYmxlKCk7XG4gICAgaWYgKCFjbGlja2FibGUpIHtcbiAgICAgIHJldHVybiBbaChcInNsb3RcIiwgbnVsbCldO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBocmVmLFxuICAgICAgcm91dGVyQW5pbWF0aW9uLFxuICAgICAgcm91dGVyRGlyZWN0aW9uLFxuICAgICAgaW5oZXJpdGVkQXJpYUF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBUYWdUeXBlID0gY2xpY2thYmxlID8gaHJlZiA9PT0gdW5kZWZpbmVkID8gJ2J1dHRvbicgOiAnYScgOiAnZGl2JztcbiAgICBjb25zdCBhdHRycyA9IFRhZ1R5cGUgPT09ICdidXR0b24nID8ge1xuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfSA6IHtcbiAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgcmVsOiB0aGlzLnJlbCxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXRcbiAgICB9O1xuICAgIHJldHVybiBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCBpbmhlcml0ZWRBcmlhQXR0cmlidXRlcywge1xuICAgICAgY2xhc3M6IFwiY2FyZC1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6IGV2ID0+IG9wZW5VUkwoaHJlZiwgZXYsIHJvdXRlckRpcmVjdGlvbiwgcm91dGVyQW5pbWF0aW9uKVxuICAgIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgY2xpY2thYmxlICYmIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnODVlOWIzMGJkODFlNzlhMGM3YWM3NWNiMzY2NGJkY2Y5ZTRhZmM0ZCcsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnY2FyZC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0aGlzLmlzQ2xpY2thYmxlKClcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5yZW5kZXJDYXJkKG1vZGUpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5DYXJkLnN0eWxlID0ge1xuICBpb3M6IElvbkNhcmRJb3NTdHlsZTAsXG4gIG1kOiBJb25DYXJkTWRTdHlsZTBcbn07XG5jb25zdCBjYXJkQ29udGVudElvc0NzcyA9IFwiaW9uLWNhcmQtY29udGVudHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkLWNvbnRlbnQtaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweDtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjR9LmNhcmQtY29udGVudC1pb3MgaDF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjEuNXJlbTtmb250LXdlaWdodDpub3JtYWx9LmNhcmQtY29udGVudC1pb3MgaDJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MXJlbTtmb250LXdlaWdodDpub3JtYWx9LmNhcmQtY29udGVudC1pb3MgaDMsLmNhcmQtY29udGVudC1pb3MgaDQsLmNhcmQtY29udGVudC1pb3MgaDUsLmNhcmQtY29udGVudC1pb3MgaDZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MC44NzVyZW07Zm9udC13ZWlnaHQ6bm9ybWFsfS5jYXJkLWNvbnRlbnQtaW9zIHB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtfWlvbi1jYXJkLWhlYWRlcisuY2FyZC1jb250ZW50LWlvc3twYWRkaW5nLXRvcDowfVwiO1xuY29uc3QgSW9uQ2FyZENvbnRlbnRJb3NTdHlsZTAgPSBjYXJkQ29udGVudElvc0NzcztcbmNvbnN0IGNhcmRDb250ZW50TWRDc3MgPSBcImlvbi1jYXJkLWNvbnRlbnR7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC1jb250ZW50LW1key13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MS41fS5jYXJkLWNvbnRlbnQtbWQgaDF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjEuNXJlbTtmb250LXdlaWdodDpub3JtYWx9LmNhcmQtY29udGVudC1tZCBoMnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uY2FyZC1jb250ZW50LW1kIGgzLC5jYXJkLWNvbnRlbnQtbWQgaDQsLmNhcmQtY29udGVudC1tZCBoNSwuY2FyZC1jb250ZW50LW1kIGg2e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uY2FyZC1jb250ZW50LW1kIHB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxLjV9aW9uLWNhcmQtaGVhZGVyKy5jYXJkLWNvbnRlbnQtbWR7cGFkZGluZy10b3A6MH1cIjtcbmNvbnN0IElvbkNhcmRDb250ZW50TWRTdHlsZTAgPSBjYXJkQ29udGVudE1kQ3NzO1xuY29uc3QgQ2FyZENvbnRlbnQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkOThlNGQxZmM2YWQzMjM3NTQ5ZjliYzE3ZTRjNjdlYzUwNTliMWIzJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgY2FyZC1jb250ZW50LSR7bW9kZX1gXTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuQ2FyZENvbnRlbnQuc3R5bGUgPSB7XG4gIGlvczogSW9uQ2FyZENvbnRlbnRJb3NTdHlsZTAsXG4gIG1kOiBJb25DYXJkQ29udGVudE1kU3R5bGUwXG59O1xuY29uc3QgY2FyZEhlYWRlcklvc0NzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6aW5oZXJpdDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MTZweDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9QHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpKXs6aG9zdCguY2FyZC1oZWFkZXItdHJhbnNsdWNlbnQpe2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjkpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCl9fVwiO1xuY29uc3QgSW9uQ2FyZEhlYWRlcklvc1N0eWxlMCA9IGNhcmRIZWFkZXJJb3NDc3M7XG5jb25zdCBjYXJkSGVhZGVyTWRDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaGVyaXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDoxNnB4O3BhZGRpbmctYm90dG9tOjE2cHh9OjpzbG90dGVkKGlvbi1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpKSw6OnNsb3R0ZWQoaW9uLWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCkpe21hcmdpbi10b3A6OHB4fVwiO1xuY29uc3QgSW9uQ2FyZEhlYWRlck1kU3R5bGUwID0gY2FyZEhlYWRlck1kQ3NzO1xuY29uc3QgQ2FyZEhlYWRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzY0MjQ2YjgxOTMxMjAzYTY0ZDU1M2M3ODhjZDczNmY0MWUyM2YzN2InLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgICdjYXJkLWhlYWRlci10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgICdpb24taW5oZXJpdC1jb2xvcic6IHRydWUsXG4gICAgICAgIFttb2RlXTogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdhZjJkYTJkZmUyNjY4ODlhZmViNTdmYWMyNWM2YTczMDU1OGRiYmE0J1xuICAgIH0pKTtcbiAgfVxufTtcbkNhcmRIZWFkZXIuc3R5bGUgPSB7XG4gIGlvczogSW9uQ2FyZEhlYWRlcklvc1N0eWxlMCxcbiAgbWQ6IElvbkNhcmRIZWFkZXJNZFN0eWxlMFxufTtcbmNvbnN0IGNhcmRTdWJ0aXRsZUlvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NHB4O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjAuNzVyZW07Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAuNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cIjtcbmNvbnN0IElvbkNhcmRTdWJ0aXRsZUlvc1N0eWxlMCA9IGNhcmRTdWJ0aXRsZUlvc0NzcztcbmNvbnN0IGNhcmRTdWJ0aXRsZU1kQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDUwLCAjNzM3MzczKSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0OjUwMH1cIjtcbmNvbnN0IElvbkNhcmRTdWJ0aXRsZU1kU3R5bGUwID0gY2FyZFN1YnRpdGxlTWRDc3M7XG5jb25zdCBDYXJkU3VidGl0bGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzg0ZDgyMGExOWQ5MDc0ZjljOGJjNjFjY2JhMWNhNDAwNjJhNjBiNzMnLFxuICAgICAgcm9sZTogXCJoZWFkaW5nXCIsXG4gICAgICBcImFyaWEtbGV2ZWxcIjogXCIzXCIsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgJ2lvbi1pbmhlcml0LWNvbG9yJzogdHJ1ZSxcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2U0ZDA3ZDM5NWExZjQ0NjlhOTA4NDc2MzYwODMxMDFiMzJiNzc2YTEnXG4gICAgfSkpO1xuICB9XG59O1xuQ2FyZFN1YnRpdGxlLnN0eWxlID0ge1xuICBpb3M6IElvbkNhcmRTdWJ0aXRsZUlvc1N0eWxlMCxcbiAgbWQ6IElvbkNhcmRTdWJ0aXRsZU1kU3R5bGUwXG59O1xuY29uc3QgY2FyZFRpdGxlSW9zQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjEuNzVyZW07Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuMn1cIjtcbmNvbnN0IElvbkNhcmRUaXRsZUlvc1N0eWxlMCA9IGNhcmRUaXRsZUlvc0NzcztcbmNvbnN0IGNhcmRUaXRsZU1kQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjEuMjVyZW07Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMn1cIjtcbmNvbnN0IElvbkNhcmRUaXRsZU1kU3R5bGUwID0gY2FyZFRpdGxlTWRDc3M7XG5jb25zdCBDYXJkVGl0bGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2ZjYTAwMWE4NjM5NmU4MzcxOGQ1MjExY2Q3MTkxMmZkZjQwZGVhMmYnLFxuICAgICAgcm9sZTogXCJoZWFkaW5nXCIsXG4gICAgICBcImFyaWEtbGV2ZWxcIjogXCIyXCIsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgJ2lvbi1pbmhlcml0LWNvbG9yJzogdHJ1ZSxcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzJiYTQxNmFlZDQ4OGIyZmY0NjJmYTc1ZmIzYjcwMzczYTZkZDdkYTYnXG4gICAgfSkpO1xuICB9XG59O1xuQ2FyZFRpdGxlLnN0eWxlID0ge1xuICBpb3M6IElvbkNhcmRUaXRsZUlvc1N0eWxlMCxcbiAgbWQ6IElvbkNhcmRUaXRsZU1kU3R5bGUwXG59O1xuZXhwb3J0IHsgQ2FyZCBhcyBpb25fY2FyZCwgQ2FyZENvbnRlbnQgYXMgaW9uX2NhcmRfY29udGVudCwgQ2FyZEhlYWRlciBhcyBpb25fY2FyZF9oZWFkZXIsIENhcmRTdWJ0aXRsZSBhcyBpb25fY2FyZF9zdWJ0aXRsZSwgQ2FyZFRpdGxlIGFzIGlvbl9jYXJkX3RpdGxlIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSxhQUFhO0FBQ25CLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sWUFBWTtBQUNsQixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLE9BQU8sTUFBTTtBQUFBLEVBQ2pCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssMEJBQTBCLENBQUM7QUFDaEMsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTO0FBQ2QsU0FBSyxPQUFPO0FBQ1osU0FBSyxXQUFXO0FBQ2hCLFNBQUssV0FBVztBQUNoQixTQUFLLE9BQU87QUFDWixTQUFLLE1BQU07QUFDWCxTQUFLLGtCQUFrQjtBQUN2QixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssMEJBQTBCLGtCQUFrQixLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsY0FBYztBQUNaLFdBQU8sS0FBSyxTQUFTLFVBQWEsS0FBSztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxXQUFXLE1BQU07QUFDZixVQUFNLFlBQVksS0FBSyxZQUFZO0FBQ25DLFFBQUksQ0FBQyxXQUFXO0FBQ2QsYUFBTyxDQUFDLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFBQSxJQUN6QjtBQUNBLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osVUFBTSxVQUFVLFlBQVksU0FBUyxTQUFZLFdBQVcsTUFBTTtBQUNsRSxVQUFNLFFBQVEsWUFBWSxXQUFXO0FBQUEsTUFDbkMsTUFBTSxLQUFLO0FBQUEsSUFDYixJQUFJO0FBQUEsTUFDRixVQUFVLEtBQUs7QUFBQSxNQUNmLE1BQU0sS0FBSztBQUFBLE1BQ1gsS0FBSyxLQUFLO0FBQUEsTUFDVixRQUFRLEtBQUs7QUFBQSxJQUNmO0FBQ0EsV0FBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPLHlCQUF5QjtBQUFBLE1BQ2xFLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsS0FBSztBQUFBLE1BQ2YsU0FBUyxRQUFNLFFBQVEsTUFBTSxJQUFJLGlCQUFpQixlQUFlO0FBQUEsSUFDbkUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLEdBQUcsYUFBYSxTQUFTLFFBQVEsRUFBRSxxQkFBcUIsSUFBSSxDQUFDO0FBQUEsRUFDakY7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLG1CQUFtQixLQUFLLE9BQU87QUFBQSxRQUNwQyxDQUFDLElBQUksR0FBRztBQUFBLFFBQ1IsaUJBQWlCLEtBQUs7QUFBQSxRQUN0QixtQkFBbUIsS0FBSyxZQUFZO0FBQUEsTUFDdEMsQ0FBQztBQUFBLElBQ0gsR0FBRyxLQUFLLFdBQVcsSUFBSSxDQUFDO0FBQUEsRUFDMUI7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLEtBQUssUUFBUTtBQUFBLEVBQ1gsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOO0FBQ0EsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSwwQkFBMEI7QUFDaEMsSUFBTSxtQkFBbUI7QUFDekIsSUFBTSx5QkFBeUI7QUFDL0IsSUFBTSxjQUFjLE1BQU07QUFBQSxFQUN4QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUFBLEVBQ2hDO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsQ0FBQyxJQUFJLEdBQUc7QUFBQTtBQUFBLFFBRVIsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLEdBQUc7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUNBLFlBQVksUUFBUTtBQUFBLEVBQ2xCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjtBQUNBLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0seUJBQXlCO0FBQy9CLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sYUFBYSxNQUFNO0FBQUEsRUFDdkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxjQUFjO0FBQUEsRUFDckI7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLG1CQUFtQixLQUFLLE9BQU87QUFBQSxRQUNwQywyQkFBMkIsS0FBSztBQUFBLFFBQ2hDLHFCQUFxQjtBQUFBLFFBQ3JCLENBQUMsSUFBSSxHQUFHO0FBQUEsTUFDVixDQUFDO0FBQUEsSUFDSCxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUNGO0FBQ0EsV0FBVyxRQUFRO0FBQUEsRUFDakIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOO0FBQ0EsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSwyQkFBMkI7QUFDakMsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSwwQkFBMEI7QUFDaEMsSUFBTSxlQUFlLE1BQU07QUFBQSxFQUN6QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsT0FBTyxtQkFBbUIsS0FBSyxPQUFPO0FBQUEsUUFDcEMscUJBQXFCO0FBQUEsUUFDckIsQ0FBQyxJQUFJLEdBQUc7QUFBQSxNQUNWLENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUM7QUFBQSxFQUNKO0FBQ0Y7QUFDQSxhQUFhLFFBQVE7QUFBQSxFQUNuQixLQUFLO0FBQUEsRUFDTCxJQUFJO0FBQ047QUFDQSxJQUFNLGtCQUFrQjtBQUN4QixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHVCQUF1QjtBQUM3QixJQUFNLFlBQVksTUFBTTtBQUFBLEVBQ3RCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssUUFBUTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxPQUFPLG1CQUFtQixLQUFLLE9BQU87QUFBQSxRQUNwQyxxQkFBcUI7QUFBQSxRQUNyQixDQUFDLElBQUksR0FBRztBQUFBLE1BQ1YsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFDRjtBQUNBLFVBQVUsUUFBUTtBQUFBLEVBQ2hCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
