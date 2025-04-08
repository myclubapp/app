import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-SINPMRGM.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/web-social-share/dist/esm/web-social-share.entry.js
var copy = (attrs) => __async(void 0, null, function* () {
  var _a;
  try {
    yield navigator.clipboard.writeText((_a = attrs.socialShareUrl) !== null && _a !== void 0 ? _a : window.location.href);
  } catch (err) {
    console.error("Well it seems that copy is not supported by this browser");
  }
});
var isMobile = () => {
  const isTouchScreen = window.matchMedia("(any-pointer:coarse)").matches;
  const isMouseScreen = window.matchMedia("(any-pointer:fine)").matches;
  return isTouchScreen && !isMouseScreen;
};
var openNewWindow = ({
  urlString,
  target = "_blank"
}) => window.open(urlString, target);
var shareEncodedUrl = (socialShareUrl) => encodeURIComponent(socialShareUrl !== null && socialShareUrl !== void 0 ? socialShareUrl : window.location.href);
var dscvr = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareText,
  socialShareTitle,
  socialSharePortal,
  openWindowTarget: target
}) {
  let urlString = `https://dscvr.one/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  if (socialShareTitle) {
    urlString += "&title=" + encodeURIComponent(socialShareTitle);
  }
  if (socialSharePortal) {
    urlString += "&portal=" + encodeURIComponent(socialSharePortal);
  }
  openNewWindow({
    urlString,
    target
  });
});
var email = (_0) => __async(void 0, [_0], function* ({
  socialShareTo,
  socialShareBody,
  socialShareSubject,
  socialShareCc,
  socialShareBcc
}) {
  let urlString = "mailto:";
  if (socialShareTo) {
    urlString += encodeURIComponent(socialShareTo);
  }
  urlString += "?";
  if (socialShareBody) {
    urlString += "body=" + encodeURIComponent(socialShareBody);
  }
  if (socialShareSubject) {
    urlString += "&subject=" + encodeURIComponent(socialShareSubject);
  }
  if (socialShareCc) {
    urlString += "&cc=" + encodeURIComponent(socialShareCc);
  }
  if (socialShareBcc) {
    urlString += "&bcc=" + encodeURIComponent(socialShareBcc);
  }
  if (window.self !== window.top) {
    window.open(urlString, "_blank");
  } else {
    window.open(urlString, "_self");
  }
});
var shareFacebook = (_0) => __async(void 0, [_0], function* ({
  socialShareType,
  socialShareVia,
  socialShareRedirectUri,
  socialShareUrl,
  socialShareTo,
  socialShareDisplay,
  socialShareRef,
  socialShareFrom,
  socialShareSource,
  socialShareQuote,
  socialShareMobileiframe,
  socialShareHashtags,
  openWindowTarget: target
}) {
  let urlString;
  if (socialShareType === "feed") {
    urlString = "https://www.facebook.com/dialog/feed?";
    if (socialShareVia) {
      urlString += "&app_id=" + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += "&redirect_uri=" + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += "&link=" + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareTo) {
      urlString += "&to=" + encodeURIComponent(socialShareTo);
    }
    if (socialShareDisplay) {
      urlString += "&display=" + encodeURIComponent(socialShareDisplay);
    }
    if (socialShareRef) {
      urlString += "&ref=" + encodeURIComponent(socialShareRef);
    }
    if (socialShareFrom) {
      urlString += "&from=" + encodeURIComponent(socialShareFrom);
    }
    if (socialShareSource) {
      urlString += "&source=" + encodeURIComponent(socialShareSource);
    }
    openNewWindow({
      urlString,
      target
    });
    return;
  }
  if (socialShareType === "share") {
    urlString = "https://www.facebook.com/dialog/share?";
    if (socialShareVia) {
      urlString += "&app_id=" + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += "&redirect_uri=" + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += "&href=" + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareQuote) {
      urlString += "&quote=" + encodeURIComponent(socialShareQuote);
    }
    if (socialShareDisplay) {
      urlString += "&display=" + encodeURIComponent(socialShareDisplay);
    }
    if (socialShareMobileiframe) {
      urlString += "&mobile_iframe=" + encodeURIComponent(socialShareMobileiframe);
    }
    if (socialShareHashtags) {
      urlString += "&hashtag=" + encodeURIComponent(socialShareHashtags);
    }
    openNewWindow({
      urlString,
      target
    });
    return;
  }
  if (socialShareType === "send") {
    urlString = "https://www.facebook.com/dialog/send?";
    if (socialShareVia) {
      urlString += "&app_id=" + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += "&redirect_uri=" + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += "&link=" + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareTo) {
      urlString += "&to=" + encodeURIComponent(socialShareTo);
    }
    if (socialShareDisplay) {
      urlString += "&display=" + encodeURIComponent(socialShareDisplay);
    }
    openNewWindow({
      urlString,
      target
    });
    return;
  }
  openNewWindow({
    urlString: `https://www.facebook.com/sharer/sharer.php?u=${shareEncodedUrl(socialShareUrl)}`,
    target
  });
});
var hackernews = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}) {
  let urlString = "https://news.ycombinator.com/submitlink?u=";
  urlString += shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += "&t=" + encodeURIComponent(socialShareText);
  }
  openNewWindow({
    urlString,
    target
  });
});
var linkedin = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareText,
  socialShareDescription,
  socialShareSource,
  openWindowTarget: target
}) {
  let urlString = "https://www.linkedin.com/shareArticle?mini=true";
  urlString += "&url=" + shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += "&title=" + encodeURIComponent(socialShareText);
  }
  if (socialShareDescription) {
    urlString += "&summary=" + encodeURIComponent(socialShareDescription);
  }
  if (socialShareSource) {
    urlString += "&source=" + encodeURIComponent(socialShareSource);
  }
  openNewWindow({
    urlString,
    target
  });
});
var openchat = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}) {
  let urlString = `https://oc.app/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  urlString += `#/share`;
  openNewWindow({
    urlString,
    target
  });
});
var pinterest = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareMedia,
  socialShareText,
  openWindowTarget: target
}) {
  let urlString = `https://www.pinterest.com/pin/create/button/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareMedia) {
    urlString += `&media=${encodeURIComponent(socialShareMedia)}`;
  }
  if (socialShareText) {
    urlString += `&description=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({
    urlString,
    target
  });
});
var reddit = (_0) => __async(void 0, [_0], function* ({
  socialShareSubreddit,
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}) {
  let urlString = "https://www.reddit.com/";
  if (socialShareSubreddit) {
    urlString += "r/" + socialShareSubreddit + "/submit?url=";
  } else {
    urlString += "submit?url=";
  }
  urlString += shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += `&title=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({
    urlString,
    target
  });
});
var telegram = (_0) => __async(void 0, [_0], function* ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}) {
  let urlString = `https://t.me/share/url?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({
    urlString,
    target
  });
});
var shareTwitter = (_0) => __async(void 0, [_0], function* ({
  socialShareText,
  socialShareVia,
  socialShareHashtags,
  socialShareUrl,
  openWindowTarget: target
}) {
  let urlString = "https://www.twitter.com/intent/tweet?";
  if (socialShareText) {
    urlString += "text=" + encodeURIComponent(socialShareText);
  }
  if (socialShareVia) {
    urlString += "&via=" + encodeURIComponent(socialShareVia);
  }
  if (socialShareHashtags) {
    urlString += "&hashtags=" + encodeURIComponent(socialShareHashtags);
  }
  urlString += "&url=" + shareEncodedUrl(socialShareUrl);
  openNewWindow({
    urlString,
    target
  });
});
var whatsapp = (_0) => __async(void 0, [_0], function* ({
  socialShareText,
  socialShareUrl,
  openWindowTarget: target
}) {
  const mobile = isMobile();
  let urlString = mobile ? "https://api.whatsapp.com/send?text=" : "https://web.whatsapp.com/send?text=";
  if (socialShareText) {
    urlString += encodeURIComponent(socialShareText) + "%0A";
  }
  urlString += shareEncodedUrl(socialShareUrl);
  openNewWindow({
    urlString,
    target
  });
});
var webSocialShareCss = "div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);transform:translate3d(0, 0, 10px);--background:var(--web-social-share-action-sheet-group-background, #fafafa);background:var(--background);display:flex;justify-content:center;flex-wrap:wrap;height:0;transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:flex;flex-direction:column;align-items:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;overflow:hidden;background-position:center;background-color:var(--background);transition:background 0.8s;border-radius:var(--web-social-share-button-border-radius, 8px);cursor:pointer;border:0;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target button:hover{background:var(--background) radial-gradient(circle, transparent 1%, var(--background) 1%) center/15000%}div.web-social-share div.web-social-share-target button:active{background-color:var(--web-social-share-button-ripple-effect-color, #cecece);background-size:100%;transition:background 0s}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}";
var WebSocialShare = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closed = createEvent(this, "closed", 7);
  }
  hide() {
    if (this.refContainer) {
      this.refContainer.classList.add("web-social-share-transition-close");
      setTimeout(() => {
        this.show = false;
        this.refContainer.classList.remove("web-social-share-transition-close");
        this.closed.emit();
      }, 200);
    } else {
      this.show = false;
      this.closed.emit();
    }
  }
  handleShare($event, attributes, action) {
    return __async(this, null, function* () {
      $event.stopPropagation();
      yield action(attributes);
      setTimeout(() => this.hide(), 250);
    });
  }
  render() {
    return h("div", {
      class: this.show ? "web-social-share web-social-share-open" : "web-social-share web-social-share-close",
      ref: (el) => this.refContainer = el
    }, h("div", {
      class: "web-social-share-backdrop",
      onClick: () => this.hide()
    }), h("div", {
      class: "web-social-share-action-sheet",
      onClick: () => this.hide()
    }, h("div", {
      class: "web-social-share-action-sheet-container"
    }, h("div", {
      class: "web-social-share-action-sheet-group"
    }, this.renderTargets()))));
  }
  renderTargets() {
    var _a;
    if (!((_a = this.share) === null || _a === void 0 ? void 0 : _a.config)) {
      return void 0;
    }
    return this.share.config.map((config) => h("div", {
      class: "web-social-share-target"
    }, this.renderButtons(config)));
  }
  renderButtons(share) {
    if (share.facebook) {
      return this.renderButton(share.facebook, "facebook", shareFacebook, "Facebook");
    } else if (share.twitter) {
      return this.renderButton(share.twitter, "twitter", shareTwitter, "Twitter");
    } else if (share.email) {
      return this.renderButton(share.email, "email", email, "Email");
    } else if (share.linkedin) {
      return this.renderButton(share.linkedin, "linkedin", linkedin, "Linkedin");
    } else if (share.pinterest) {
      return this.renderButton(share.pinterest, "pinterest", pinterest, "Pinterest");
    } else if (share.reddit) {
      return this.renderButton(share.reddit, "reddit", reddit, "Reddit");
    } else if (share.whatsapp) {
      return this.renderButton(share.whatsapp, "whatsapp", whatsapp, "WhatsApp");
    } else if (share.copy) {
      return this.renderButton(share.copy, "copy", copy, "Copy");
    } else if (share.hackernews) {
      return this.renderButton(share.hackernews, "hackernews", hackernews, "Hacker News");
    } else if (share.telegram) {
      return this.renderButton(share.telegram, "telegram", telegram, "Telegram");
    } else if (share.openchat) {
      return this.renderButton(share.openchat, "openchat", openchat, "OpenChat");
    } else if (share.dscvr) {
      return this.renderButton(share.dscvr, "dscvr", dscvr, "DSCVR");
    }
    return void 0;
  }
  renderButton(attributes, slotName, action, defaultBrandName) {
    return h("button", {
      onClick: ($event) => this.handleShare($event, attributes, action),
      class: "web-social-share-button"
    }, h("div", {
      class: "web-social-share-button-icon"
    }, h("slot", {
      name: slotName
    })), this.renderName(attributes, defaultBrandName));
  }
  renderName(displayAttributes, defaultBrandName) {
    if (this.share.displayNames) {
      return h("p", null, displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== "" ? displayAttributes.brandName : defaultBrandName);
    }
    return void 0;
  }
  get el() {
    return getElement(this);
  }
};
WebSocialShare.style = webSocialShareCss;
export {
  WebSocialShare as web_social_share
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93ZWItc29jaWFsLXNoYXJlL2Rpc3QvZXNtL3dlYi1zb2NpYWwtc2hhcmUuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWY5MzdlZjE4LmpzJztcbmNvbnN0IGNvcHkgPSBhc3luYyBhdHRycyA9PiB7XG4gIHZhciBfYTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgoX2EgPSBhdHRycy5zb2NpYWxTaGFyZVVybCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZWxsIGl0IHNlZW1zIHRoYXQgY29weSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlcicpO1xuICB9XG59O1xuXG4vLyBTYW1lIGltcGxlbWVudGF0aW9uIGFzIGluIGNsYXNzIEBkZWNrZGVja2dvL3V0aWxzXG5jb25zdCBpc01vYmlsZSA9ICgpID0+IHtcbiAgY29uc3QgaXNUb3VjaFNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LXBvaW50ZXI6Y29hcnNlKScpLm1hdGNoZXM7XG4gIGNvbnN0IGlzTW91c2VTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKGFueS1wb2ludGVyOmZpbmUpJykubWF0Y2hlcztcbiAgcmV0dXJuIGlzVG91Y2hTY3JlZW4gJiYgIWlzTW91c2VTY3JlZW47XG59O1xuY29uc3Qgb3Blbk5ld1dpbmRvdyA9ICh7XG4gIHVybFN0cmluZyxcbiAgdGFyZ2V0ID0gJ19ibGFuaydcbn0pID0+IHdpbmRvdy5vcGVuKHVybFN0cmluZywgdGFyZ2V0KTtcbmNvbnN0IHNoYXJlRW5jb2RlZFVybCA9IHNvY2lhbFNoYXJlVXJsID0+IGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVVybCAhPT0gbnVsbCAmJiBzb2NpYWxTaGFyZVVybCAhPT0gdm9pZCAwID8gc29jaWFsU2hhcmVVcmwgOiB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5jb25zdCBkc2N2ciA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVXJsLFxuICBzb2NpYWxTaGFyZVRleHQsXG4gIHNvY2lhbFNoYXJlVGl0bGUsXG4gIHNvY2lhbFNoYXJlUG9ydGFsLFxuICBvcGVuV2luZG93VGFyZ2V0OiB0YXJnZXRcbn0pID0+IHtcbiAgbGV0IHVybFN0cmluZyA9IGBodHRwczovL2RzY3ZyLm9uZS8/dXJsPSR7c2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKX1gO1xuICBpZiAoc29jaWFsU2hhcmVUZXh0KSB7XG4gICAgdXJsU3RyaW5nICs9IGAmdGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRleHQpfWA7XG4gIH1cbiAgaWYgKHNvY2lhbFNoYXJlVGl0bGUpIHtcbiAgICB1cmxTdHJpbmcgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlVGl0bGUpO1xuICB9XG4gIGlmIChzb2NpYWxTaGFyZVBvcnRhbCkge1xuICAgIHVybFN0cmluZyArPSAnJnBvcnRhbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlUG9ydGFsKTtcbiAgfVxuICBvcGVuTmV3V2luZG93KHtcbiAgICB1cmxTdHJpbmcsXG4gICAgdGFyZ2V0XG4gIH0pO1xufTtcbmNvbnN0IGVtYWlsID0gYXN5bmMgKHtcbiAgc29jaWFsU2hhcmVUbyxcbiAgc29jaWFsU2hhcmVCb2R5LFxuICBzb2NpYWxTaGFyZVN1YmplY3QsXG4gIHNvY2lhbFNoYXJlQ2MsXG4gIHNvY2lhbFNoYXJlQmNjXG59KSA9PiB7XG4gIGxldCB1cmxTdHJpbmcgPSAnbWFpbHRvOic7XG4gIGlmIChzb2NpYWxTaGFyZVRvKSB7XG4gICAgdXJsU3RyaW5nICs9IGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRvKTtcbiAgfVxuICB1cmxTdHJpbmcgKz0gJz8nO1xuICBpZiAoc29jaWFsU2hhcmVCb2R5KSB7XG4gICAgdXJsU3RyaW5nICs9ICdib2R5PScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVCb2R5KTtcbiAgfVxuICBpZiAoc29jaWFsU2hhcmVTdWJqZWN0KSB7XG4gICAgdXJsU3RyaW5nICs9ICcmc3ViamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlU3ViamVjdCk7XG4gIH1cbiAgaWYgKHNvY2lhbFNoYXJlQ2MpIHtcbiAgICB1cmxTdHJpbmcgKz0gJyZjYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlQ2MpO1xuICB9XG4gIGlmIChzb2NpYWxTaGFyZUJjYykge1xuICAgIHVybFN0cmluZyArPSAnJmJjYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlQmNjKTtcbiAgfVxuICBpZiAod2luZG93LnNlbGYgIT09IHdpbmRvdy50b3ApIHtcbiAgICB3aW5kb3cub3Blbih1cmxTdHJpbmcsICdfYmxhbmsnKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cub3Blbih1cmxTdHJpbmcsICdfc2VsZicpO1xuICB9XG59O1xuXG4vKipcbiAqIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tLzcyMGtiL2FuZ3VsYXItc29jaWFsc2hhcmUvYmxvYi9tYXN0ZXIvZGlzdC9hbmd1bGFyLXNvY2lhbHNoYXJlLmpzXG4gKi9cbmNvbnN0IHNoYXJlRmFjZWJvb2sgPSBhc3luYyAoe1xuICBzb2NpYWxTaGFyZVR5cGUsXG4gIHNvY2lhbFNoYXJlVmlhLFxuICBzb2NpYWxTaGFyZVJlZGlyZWN0VXJpLFxuICBzb2NpYWxTaGFyZVVybCxcbiAgc29jaWFsU2hhcmVUbyxcbiAgc29jaWFsU2hhcmVEaXNwbGF5LFxuICBzb2NpYWxTaGFyZVJlZixcbiAgc29jaWFsU2hhcmVGcm9tLFxuICBzb2NpYWxTaGFyZVNvdXJjZSxcbiAgc29jaWFsU2hhcmVRdW90ZSxcbiAgc29jaWFsU2hhcmVNb2JpbGVpZnJhbWUsXG4gIHNvY2lhbFNoYXJlSGFzaHRhZ3MsXG4gIG9wZW5XaW5kb3dUYXJnZXQ6IHRhcmdldFxufSkgPT4ge1xuICBsZXQgdXJsU3RyaW5nO1xuICBpZiAoc29jaWFsU2hhcmVUeXBlID09PSAnZmVlZCcpIHtcbiAgICAvLyBpZiB1c2VyIHNwZWNpZmllcyB0aGF0IHRoZXkgd2FudCB0byB1c2UgdGhlIEZhY2Vib29rIGZlZWQgZGlhbG9nXG4gICAgLy8oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3NoYXJpbmcvcmVmZXJlbmNlL2ZlZWQtZGlhbG9nL3YyLjQpXG4gICAgdXJsU3RyaW5nID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvZmVlZD8nO1xuICAgIGlmIChzb2NpYWxTaGFyZVZpYSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmYXBwX2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVWaWEpO1xuICAgIH1cbiAgICBpZiAoc29jaWFsU2hhcmVSZWRpcmVjdFVyaSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVSZWRpcmVjdFVyaSk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZVVybCkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmbGluaz0nICsgc2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlVG8pIHtcbiAgICAgIHVybFN0cmluZyArPSAnJnRvPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVUbyk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZURpc3BsYXkpIHtcbiAgICAgIHVybFN0cmluZyArPSAnJmRpc3BsYXk9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZURpc3BsYXkpO1xuICAgIH1cbiAgICBpZiAoc29jaWFsU2hhcmVSZWYpIHtcbiAgICAgIHVybFN0cmluZyArPSAnJnJlZj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlUmVmKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlRnJvbSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmZnJvbT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlRnJvbSk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZVNvdXJjZSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVTb3VyY2UpO1xuICAgIH1cbiAgICBvcGVuTmV3V2luZG93KHtcbiAgICAgIHVybFN0cmluZyxcbiAgICAgIHRhcmdldFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc29jaWFsU2hhcmVUeXBlID09PSAnc2hhcmUnKSB7XG4gICAgLy8gaWYgdXNlciBzcGVjaWZpZXMgdGhhdCB0aGV5IHdhbnQgdG8gdXNlIHRoZSBGYWNlYm9vayBzaGFyZSBkaWFsb2dcbiAgICAvLyhodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3Mvc2hhcmluZy9yZWZlcmVuY2Uvc2hhcmUtZGlhbG9nKVxuICAgIHVybFN0cmluZyA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlhbG9nL3NoYXJlPyc7XG4gICAgaWYgKHNvY2lhbFNoYXJlVmlhKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZhcHBfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVZpYSk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZVJlZGlyZWN0VXJpKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVJlZGlyZWN0VXJpKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlVXJsKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZocmVmPScgKyBzaGFyZUVuY29kZWRVcmwoc29jaWFsU2hhcmVVcmwpO1xuICAgIH1cbiAgICBpZiAoc29jaWFsU2hhcmVRdW90ZSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmcXVvdGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVF1b3RlKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlRGlzcGxheSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmZGlzcGxheT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlRGlzcGxheSk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZU1vYmlsZWlmcmFtZSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmbW9iaWxlX2lmcmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlTW9iaWxlaWZyYW1lKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlSGFzaHRhZ3MpIHtcbiAgICAgIHVybFN0cmluZyArPSAnJmhhc2h0YWc9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZUhhc2h0YWdzKTtcbiAgICB9XG4gICAgb3Blbk5ld1dpbmRvdyh7XG4gICAgICB1cmxTdHJpbmcsXG4gICAgICB0YXJnZXRcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNvY2lhbFNoYXJlVHlwZSA9PT0gJ3NlbmQnKSB7XG4gICAgLy8gaWYgdXNlciBzcGVjaWZpZXMgdGhhdCB0aGV5IHdhbnQgdG8gdXNlIHRoZSBGYWNlYm9vayBzZW5kIGRpYWxvZ1xuICAgIC8vKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9zaGFyaW5nL3JlZmVyZW5jZS9zZW5kLWRpYWxvZylcbiAgICB1cmxTdHJpbmcgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9zZW5kPyc7XG4gICAgaWYgKHNvY2lhbFNoYXJlVmlhKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZhcHBfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVZpYSk7XG4gICAgfVxuICAgIGlmIChzb2NpYWxTaGFyZVJlZGlyZWN0VXJpKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVJlZGlyZWN0VXJpKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlVXJsKSB7XG4gICAgICB1cmxTdHJpbmcgKz0gJyZsaW5rPScgKyBzaGFyZUVuY29kZWRVcmwoc29jaWFsU2hhcmVVcmwpO1xuICAgIH1cbiAgICBpZiAoc29jaWFsU2hhcmVUbykge1xuICAgICAgdXJsU3RyaW5nICs9ICcmdG89JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRvKTtcbiAgICB9XG4gICAgaWYgKHNvY2lhbFNoYXJlRGlzcGxheSkge1xuICAgICAgdXJsU3RyaW5nICs9ICcmZGlzcGxheT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlRGlzcGxheSk7XG4gICAgfVxuICAgIG9wZW5OZXdXaW5kb3coe1xuICAgICAgdXJsU3RyaW5nLFxuICAgICAgdGFyZ2V0XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9wZW5OZXdXaW5kb3coe1xuICAgIHVybFN0cmluZzogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7c2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKX1gLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCBoYWNrZXJuZXdzID0gYXN5bmMgKHtcbiAgc29jaWFsU2hhcmVVcmwsXG4gIHNvY2lhbFNoYXJlVGV4dCxcbiAgb3BlbldpbmRvd1RhcmdldDogdGFyZ2V0XG59KSA9PiB7XG4gIGxldCB1cmxTdHJpbmcgPSAnaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9zdWJtaXRsaW5rP3U9JztcbiAgLy9kZWZhdWx0IHRvIHRoZSBjdXJyZW50IHBhZ2UgaWYgYSBVUkwgaXNuJ3Qgc3BlY2lmaWVkXG4gIHVybFN0cmluZyArPSBzaGFyZUVuY29kZWRVcmwoc29jaWFsU2hhcmVVcmwpO1xuICBpZiAoc29jaWFsU2hhcmVUZXh0KSB7XG4gICAgdXJsU3RyaW5nICs9ICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlVGV4dCk7XG4gIH1cbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCBsaW5rZWRpbiA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVXJsLFxuICBzb2NpYWxTaGFyZVRleHQsXG4gIHNvY2lhbFNoYXJlRGVzY3JpcHRpb24sXG4gIHNvY2lhbFNoYXJlU291cmNlLFxuICBvcGVuV2luZG93VGFyZ2V0OiB0YXJnZXRcbn0pID0+IHtcbiAgbGV0IHVybFN0cmluZyA9ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSc7XG4gIHVybFN0cmluZyArPSAnJnVybD0nICsgc2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKTtcbiAgaWYgKHNvY2lhbFNoYXJlVGV4dCkge1xuICAgIHVybFN0cmluZyArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVUZXh0KTtcbiAgfVxuICBpZiAoc29jaWFsU2hhcmVEZXNjcmlwdGlvbikge1xuICAgIHVybFN0cmluZyArPSAnJnN1bW1hcnk9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZURlc2NyaXB0aW9uKTtcbiAgfVxuICBpZiAoc29jaWFsU2hhcmVTb3VyY2UpIHtcbiAgICB1cmxTdHJpbmcgKz0gJyZzb3VyY2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVNvdXJjZSk7XG4gIH1cbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCBvcGVuY2hhdCA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVXJsLFxuICBzb2NpYWxTaGFyZVRleHQsXG4gIG9wZW5XaW5kb3dUYXJnZXQ6IHRhcmdldFxufSkgPT4ge1xuICBsZXQgdXJsU3RyaW5nID0gYGh0dHBzOi8vb2MuYXBwLz91cmw9JHtzaGFyZUVuY29kZWRVcmwoc29jaWFsU2hhcmVVcmwpfWA7XG4gIGlmIChzb2NpYWxTaGFyZVRleHQpIHtcbiAgICB1cmxTdHJpbmcgKz0gYCZ0ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlVGV4dCl9YDtcbiAgfVxuICAvLyBvcGVuY2hhdCByZXF1aXJlcyBhIHN1ZmZpeCBgIy9zaGFyZWAgdG8gdW5kZXJzdGFuZCBpdCBpcyBhIHNoYXJlIGFjdGlvblxuICB1cmxTdHJpbmcgKz0gYCMvc2hhcmVgO1xuICBvcGVuTmV3V2luZG93KHtcbiAgICB1cmxTdHJpbmcsXG4gICAgdGFyZ2V0XG4gIH0pO1xufTtcbmNvbnN0IHBpbnRlcmVzdCA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVXJsLFxuICBzb2NpYWxTaGFyZU1lZGlhLFxuICBzb2NpYWxTaGFyZVRleHQsXG4gIG9wZW5XaW5kb3dUYXJnZXQ6IHRhcmdldFxufSkgPT4ge1xuICBsZXQgdXJsU3RyaW5nID0gYGh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD0ke3NoYXJlRW5jb2RlZFVybChzb2NpYWxTaGFyZVVybCl9YDtcbiAgaWYgKHNvY2lhbFNoYXJlTWVkaWEpIHtcbiAgICB1cmxTdHJpbmcgKz0gYCZtZWRpYT0ke2VuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZU1lZGlhKX1gO1xuICB9XG4gIGlmIChzb2NpYWxTaGFyZVRleHQpIHtcbiAgICB1cmxTdHJpbmcgKz0gYCZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRleHQpfWA7XG4gIH1cbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCByZWRkaXQgPSBhc3luYyAoe1xuICBzb2NpYWxTaGFyZVN1YnJlZGRpdCxcbiAgc29jaWFsU2hhcmVVcmwsXG4gIHNvY2lhbFNoYXJlVGV4dCxcbiAgb3BlbldpbmRvd1RhcmdldDogdGFyZ2V0XG59KSA9PiB7XG4gIGxldCB1cmxTdHJpbmcgPSAnaHR0cHM6Ly93d3cucmVkZGl0LmNvbS8nO1xuICBpZiAoc29jaWFsU2hhcmVTdWJyZWRkaXQpIHtcbiAgICB1cmxTdHJpbmcgKz0gJ3IvJyArIHNvY2lhbFNoYXJlU3VicmVkZGl0ICsgJy9zdWJtaXQ/dXJsPSc7XG4gIH0gZWxzZSB7XG4gICAgdXJsU3RyaW5nICs9ICdzdWJtaXQ/dXJsPSc7XG4gIH1cbiAgdXJsU3RyaW5nICs9IHNoYXJlRW5jb2RlZFVybChzb2NpYWxTaGFyZVVybCk7XG4gIGlmIChzb2NpYWxTaGFyZVRleHQpIHtcbiAgICB1cmxTdHJpbmcgKz0gYCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRleHQpfWA7XG4gIH1cbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCB0ZWxlZ3JhbSA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVXJsLFxuICBzb2NpYWxTaGFyZVRleHQsXG4gIG9wZW5XaW5kb3dUYXJnZXQ6IHRhcmdldFxufSkgPT4ge1xuICBsZXQgdXJsU3RyaW5nID0gYGh0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPSR7c2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKX1gO1xuICBpZiAoc29jaWFsU2hhcmVUZXh0KSB7XG4gICAgdXJsU3RyaW5nICs9IGAmdGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRleHQpfWA7XG4gIH1cbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCBzaGFyZVR3aXR0ZXIgPSBhc3luYyAoe1xuICBzb2NpYWxTaGFyZVRleHQsXG4gIHNvY2lhbFNoYXJlVmlhLFxuICBzb2NpYWxTaGFyZUhhc2h0YWdzLFxuICBzb2NpYWxTaGFyZVVybCxcbiAgb3BlbldpbmRvd1RhcmdldDogdGFyZ2V0XG59KSA9PiB7XG4gIGxldCB1cmxTdHJpbmcgPSAnaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaW50ZW50L3R3ZWV0Pyc7XG4gIGlmIChzb2NpYWxTaGFyZVRleHQpIHtcbiAgICB1cmxTdHJpbmcgKz0gJ3RleHQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChzb2NpYWxTaGFyZVRleHQpO1xuICB9XG4gIGlmIChzb2NpYWxTaGFyZVZpYSkge1xuICAgIHVybFN0cmluZyArPSAnJnZpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlVmlhKTtcbiAgfVxuICBpZiAoc29jaWFsU2hhcmVIYXNodGFncykge1xuICAgIHVybFN0cmluZyArPSAnJmhhc2h0YWdzPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29jaWFsU2hhcmVIYXNodGFncyk7XG4gIH1cbiAgLy9kZWZhdWx0IHRvIHRoZSBjdXJyZW50IHBhZ2UgaWYgYSBVUkwgaXNuJ3Qgc3BlY2lmaWVkXG4gIHVybFN0cmluZyArPSAnJnVybD0nICsgc2hhcmVFbmNvZGVkVXJsKHNvY2lhbFNoYXJlVXJsKTtcbiAgb3Blbk5ld1dpbmRvdyh7XG4gICAgdXJsU3RyaW5nLFxuICAgIHRhcmdldFxuICB9KTtcbn07XG5jb25zdCB3aGF0c2FwcCA9IGFzeW5jICh7XG4gIHNvY2lhbFNoYXJlVGV4dCxcbiAgc29jaWFsU2hhcmVVcmwsXG4gIG9wZW5XaW5kb3dUYXJnZXQ6IHRhcmdldFxufSkgPT4ge1xuICBjb25zdCBtb2JpbGUgPSBpc01vYmlsZSgpO1xuICBsZXQgdXJsU3RyaW5nID0gbW9iaWxlID8gJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JyA6ICdodHRwczovL3dlYi53aGF0c2FwcC5jb20vc2VuZD90ZXh0PSc7XG4gIGlmIChzb2NpYWxTaGFyZVRleHQpIHtcbiAgICB1cmxTdHJpbmcgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHNvY2lhbFNoYXJlVGV4dCkgKyAnJTBBJztcbiAgfVxuICAvL2RlZmF1bHQgdG8gdGhlIGN1cnJlbnQgcGFnZSBpZiBhIFVSTCBpc24ndCBzcGVjaWZpZWRcbiAgdXJsU3RyaW5nICs9IHNoYXJlRW5jb2RlZFVybChzb2NpYWxTaGFyZVVybCk7XG4gIG9wZW5OZXdXaW5kb3coe1xuICAgIHVybFN0cmluZyxcbiAgICB0YXJnZXRcbiAgfSk7XG59O1xuY29uc3Qgd2ViU29jaWFsU2hhcmVDc3MgPSBcImRpdi53ZWItc29jaWFsLXNoYXJle3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9ufWRpdi53ZWItc29jaWFsLXNoYXJlLndlYi1zb2NpYWwtc2hhcmUtb3Blbnt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfWRpdi53ZWItc29jaWFsLXNoYXJlLndlYi1zb2NpYWwtc2hhcmUtb3BlbiBkaXYud2ViLXNvY2lhbC1zaGFyZS1iYWNrZHJvcHtvcGFjaXR5OnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtYmFja2Ryb3Atb3BhY2l0eSwgMC4yNSl9ZGl2LndlYi1zb2NpYWwtc2hhcmUud2ViLXNvY2lhbC1zaGFyZS1vcGVuIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldHtvcGFjaXR5OjF9ZGl2LndlYi1zb2NpYWwtc2hhcmUud2ViLXNvY2lhbC1zaGFyZS1vcGVuIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldCBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtY29udGFpbmVyIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1ncm91cHtoZWlnaHQ6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1oZWlnaHQsIDgwcHgpfUBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCl7ZGl2LndlYi1zb2NpYWwtc2hhcmUud2ViLXNvY2lhbC1zaGFyZS1vcGVuIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldCBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtY29udGFpbmVyIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1ncm91cHtoZWlnaHQ6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1oZWlnaHQtc21hbGwtZGV2aWNlLCAxNDBweCl9fWRpdi53ZWItc29jaWFsLXNoYXJlLndlYi1zb2NpYWwtc2hhcmUtb3Blbi53ZWItc29jaWFsLXNoYXJlLXRyYW5zaXRpb24tY2xvc2UgZGl2LndlYi1zb2NpYWwtc2hhcmUtYmFja2Ryb3B7b3BhY2l0eTowfWRpdi53ZWItc29jaWFsLXNoYXJlLndlYi1zb2NpYWwtc2hhcmUtb3Blbi53ZWItc29jaWFsLXNoYXJlLXRyYW5zaXRpb24tY2xvc2UgZGl2LndlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0IGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1jb250YWluZXIgZGl2LndlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0LWdyb3Vwe2hlaWdodDowfWRpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLWJhY2tkcm9we29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgMC4xcyBsaW5lYXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13ZWItc29jaWFsLXNoYXJlLWJhY2tkcm9wLWJhY2tncm91bmQsIGJsYWNrKTt6LWluZGV4OnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtemluZGV4LCAxMDAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMnB4KTtsZWZ0OjA7dG9wOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1kaXYud2ViLXNvY2lhbC1zaGFyZSBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXR7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87cG9zaXRpb246Zml4ZWQ7ei1pbmRleDpjYWxjKHZhcigtLXdlYi1zb2NpYWwtc2hhcmUtemluZGV4LCAxMDAwKSArIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAzcHgpO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjU0MHB4fUBtZWRpYSAobWluLXdpZHRoOiA1NDBweCl7ZGl2LndlYi1zb2NpYWwtc2hhcmUgZGl2LndlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0IGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1jb250YWluZXIgZGl2LndlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0LWdyb3Vwe2JvcmRlci1yYWRpdXM6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtZ3JvdXAtYm9yZGVyLXJhZGl1cywgOHB4IDhweCAwIDApfX1kaXYud2ViLXNvY2lhbC1zaGFyZSBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQgZGl2LndlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDoxMDAlfWRpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldCBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtY29udGFpbmVyIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1ncm91cHtib3gtc2hhZG93OnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0LWdyb3VwLWJveC1zaGFkb3csIDAgMCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7ei1pbmRleDpjYWxjKHZhcigtLXdlYi1zb2NpYWwtc2hhcmUtemluZGV4LCAxMDAwKSArIDEwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMTBweCk7LS1iYWNrZ3JvdW5kOnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtYWN0aW9uLXNoZWV0LWdyb3VwLWJhY2tncm91bmQsICNmYWZhZmEpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7aGVpZ2h0OjA7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpO3RyYW5zaXRpb246aGVpZ2h0IDAuMnMgZWFzZS1pbn1AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpe2Rpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldCBkaXYud2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtY29udGFpbmVyIGRpdi53ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1ncm91cHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH19ZGl2LndlYi1zb2NpYWwtc2hhcmUgZGl2LndlYi1zb2NpYWwtc2hhcmUtdGFyZ2V0e21hcmdpbjphdXRvO3dpZHRoOnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtdGFyZ2V0LXdpZHRoLCA0cmVtKTtoZWlnaHQ6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS10YXJnZXQtaGVpZ2h0LCAzcmVtKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWRpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLXRhcmdldCBidXR0b257cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZCk7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuOHM7Ym9yZGVyLXJhZGl1czp2YXIoLS13ZWItc29jaWFsLXNoYXJlLWJ1dHRvbi1ib3JkZXItcmFkaXVzLCA4cHgpO2N1cnNvcjpwb2ludGVyO2JvcmRlcjowO3dpZHRoOnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtYnV0dG9uLXdpZHRoLCAxMDAlKTtoZWlnaHQ6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1idXR0b24taGVpZ2h0LCAxMDAlKTtmb250LXNpemU6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1idXR0b24tZm9udC1zaXplKX1kaXYud2ViLXNvY2lhbC1zaGFyZSBkaXYud2ViLXNvY2lhbC1zaGFyZS10YXJnZXQgYnV0dG9uOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCkgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsIHZhcigtLWJhY2tncm91bmQpIDElKSBjZW50ZXIvMTUwMDAlfWRpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLXRhcmdldCBidXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0td2ViLXNvY2lhbC1zaGFyZS1idXR0b24tcmlwcGxlLWVmZmVjdC1jb2xvciwgI2NlY2VjZSk7YmFja2dyb3VuZC1zaXplOjEwMCU7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDBzfWRpdi53ZWItc29jaWFsLXNoYXJlIGRpdi53ZWItc29jaWFsLXNoYXJlLXRhcmdldCBwe21hcmdpbjp2YXIoLS13ZWItc29jaWFsLXNoYXJlLWJyYW5kLW1hcmdpbiwgMnB4IDApO2NvbG9yOnZhcigtLXdlYi1zb2NpYWwtc2hhcmUtYnJhbmQtY29sb3IsIGluaGVyaXQpO2ZvbnQtc2l6ZTp2YXIoLS13ZWItc29jaWFsLXNoYXJlLWJyYW5kLWZvbnQtc2l6ZSwgMC42cmVtKX1kaXYud2ViLXNvY2lhbC1zaGFyZSBkaXYud2ViLXNvY2lhbC1zaGFyZS10YXJnZXQgZGl2LndlYi1zb2NpYWwtc2hhcmUtYnV0dG9uLWljb257bWFyZ2luOjA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06OnNsb3R0ZWQoW3Nsb3Q9ZmFjZWJvb2tdKSw6OnNsb3R0ZWQoW3Nsb3Q9dHdpdHRlcl0pLDo6c2xvdHRlZChbc2xvdD1lbWFpbF0pLDo6c2xvdHRlZChbc2xvdD1saW5rZWRpbl0pLDo6c2xvdHRlZChbc2xvdD1waW50ZXJlc3RdKSw6OnNsb3R0ZWQoW3Nsb3Q9cmVkZGl0XSksOjpzbG90dGVkKFtzbG90PXdoYXRzYXBwXSksOjpzbG90dGVkKFtzbG90PWNvcHldKSw6OnNsb3R0ZWQoW3Nsb3Q9aGFja2VybmV3c10pe2Rpc3BsYXk6bm9uZX1cIjtcbmNvbnN0IFdlYlNvY2lhbFNoYXJlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNsb3NlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2xvc2VkXCIsIDcpO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMucmVmQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlZkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWItc29jaWFsLXNoYXJlLXRyYW5zaXRpb24tY2xvc2UnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSZWZsZWN0IGNzcyBhbmltYXRpb24gc3BlZWQgNDAwbXMsIHNlZSBjc3NcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dlYi1zb2NpYWwtc2hhcmUtdHJhbnNpdGlvbi1jbG9zZScpO1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZWxsIHdlIGRvbid0IGZpbmQgdGhlIGFjdGlvbiBzaGVldCwgd2UgY291bGQgbWFyayBpdCBhcyBub3QgZGlzcGxheWVkXG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgaGFuZGxlU2hhcmUoJGV2ZW50LCBhdHRyaWJ1dGVzLCBhY3Rpb24pIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXdhaXQgYWN0aW9uKGF0dHJpYnV0ZXMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIDI1MCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiB0aGlzLnNob3cgPyAnd2ViLXNvY2lhbC1zaGFyZSB3ZWItc29jaWFsLXNoYXJlLW9wZW4nIDogJ3dlYi1zb2NpYWwtc2hhcmUgd2ViLXNvY2lhbC1zaGFyZS1jbG9zZScsXG4gICAgICByZWY6IGVsID0+IHRoaXMucmVmQ29udGFpbmVyID0gZWxcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcIndlYi1zb2NpYWwtc2hhcmUtYmFja2Ryb3BcIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuaGlkZSgpXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwid2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXRcIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuaGlkZSgpXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJ3ZWItc29jaWFsLXNoYXJlLWFjdGlvbi1zaGVldC1jb250YWluZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwid2ViLXNvY2lhbC1zaGFyZS1hY3Rpb24tc2hlZXQtZ3JvdXBcIlxuICAgIH0sIHRoaXMucmVuZGVyVGFyZ2V0cygpKSkpKTtcbiAgfVxuICByZW5kZXJUYXJnZXRzKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoISgoX2EgPSB0aGlzLnNoYXJlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uZmlnKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2hhcmUuY29uZmlnLm1hcChjb25maWcgPT4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJ3ZWItc29jaWFsLXNoYXJlLXRhcmdldFwiXG4gICAgfSwgdGhpcy5yZW5kZXJCdXR0b25zKGNvbmZpZykpKTtcbiAgfVxuICByZW5kZXJCdXR0b25zKHNoYXJlKSB7XG4gICAgaWYgKHNoYXJlLmZhY2Vib29rKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUuZmFjZWJvb2ssICdmYWNlYm9vaycsIHNoYXJlRmFjZWJvb2ssICdGYWNlYm9vaycpO1xuICAgIH0gZWxzZSBpZiAoc2hhcmUudHdpdHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQnV0dG9uKHNoYXJlLnR3aXR0ZXIsICd0d2l0dGVyJywgc2hhcmVUd2l0dGVyLCAnVHdpdHRlcicpO1xuICAgIH0gZWxzZSBpZiAoc2hhcmUuZW1haWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvbihzaGFyZS5lbWFpbCwgJ2VtYWlsJywgZW1haWwsICdFbWFpbCcpO1xuICAgIH0gZWxzZSBpZiAoc2hhcmUubGlua2VkaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvbihzaGFyZS5saW5rZWRpbiwgJ2xpbmtlZGluJywgbGlua2VkaW4sICdMaW5rZWRpbicpO1xuICAgIH0gZWxzZSBpZiAoc2hhcmUucGludGVyZXN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUucGludGVyZXN0LCAncGludGVyZXN0JywgcGludGVyZXN0LCAnUGludGVyZXN0Jyk7XG4gICAgfSBlbHNlIGlmIChzaGFyZS5yZWRkaXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvbihzaGFyZS5yZWRkaXQsICdyZWRkaXQnLCByZWRkaXQsICdSZWRkaXQnKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlLndoYXRzYXBwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUud2hhdHNhcHAsICd3aGF0c2FwcCcsIHdoYXRzYXBwLCAnV2hhdHNBcHAnKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlLmNvcHkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvbihzaGFyZS5jb3B5LCAnY29weScsIGNvcHksICdDb3B5Jyk7XG4gICAgfSBlbHNlIGlmIChzaGFyZS5oYWNrZXJuZXdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUuaGFja2VybmV3cywgJ2hhY2tlcm5ld3MnLCBoYWNrZXJuZXdzLCAnSGFja2VyIE5ld3MnKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlLnRlbGVncmFtKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUudGVsZWdyYW0sICd0ZWxlZ3JhbScsIHRlbGVncmFtLCAnVGVsZWdyYW0nKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlLm9wZW5jaGF0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUub3BlbmNoYXQsICdvcGVuY2hhdCcsIG9wZW5jaGF0LCAnT3BlbkNoYXQnKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlLmRzY3ZyKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oc2hhcmUuZHNjdnIsICdkc2N2cicsIGRzY3ZyLCAnRFNDVlInKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZW5kZXJCdXR0b24oYXR0cmlidXRlcywgc2xvdE5hbWUsIGFjdGlvbiwgZGVmYXVsdEJyYW5kTmFtZSkge1xuICAgIHJldHVybiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiB0aGlzLmhhbmRsZVNoYXJlKCRldmVudCwgYXR0cmlidXRlcywgYWN0aW9uKSxcbiAgICAgIGNsYXNzOiBcIndlYi1zb2NpYWwtc2hhcmUtYnV0dG9uXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcIndlYi1zb2NpYWwtc2hhcmUtYnV0dG9uLWljb25cIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIG5hbWU6IHNsb3ROYW1lXG4gICAgfSkpLCB0aGlzLnJlbmRlck5hbWUoYXR0cmlidXRlcywgZGVmYXVsdEJyYW5kTmFtZSkpO1xuICB9XG4gIHJlbmRlck5hbWUoZGlzcGxheUF0dHJpYnV0ZXMsIGRlZmF1bHRCcmFuZE5hbWUpIHtcbiAgICBpZiAodGhpcy5zaGFyZS5kaXNwbGF5TmFtZXMpIHtcbiAgICAgIHJldHVybiBoKFwicFwiLCBudWxsLCBkaXNwbGF5QXR0cmlidXRlcyAmJiBkaXNwbGF5QXR0cmlidXRlcy5icmFuZE5hbWUgJiYgZGlzcGxheUF0dHJpYnV0ZXMuYnJhbmROYW1lICE9PSAnJyA/IGRpc3BsYXlBdHRyaWJ1dGVzLmJyYW5kTmFtZSA6IGRlZmF1bHRCcmFuZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbldlYlNvY2lhbFNoYXJlLnN0eWxlID0gd2ViU29jaWFsU2hhcmVDc3M7XG5leHBvcnQgeyBXZWJTb2NpYWxTaGFyZSBhcyB3ZWJfc29jaWFsX3NoYXJlIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLElBQU0sT0FBTyxDQUFNLFVBQVM7QUFDMUIsTUFBSTtBQUNKLE1BQUk7QUFDRixVQUFNLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxvQkFBb0IsUUFBUSxPQUFPLFNBQVMsS0FBSyxPQUFPLFNBQVMsSUFBSTtBQUFBLEVBQ3ZILFNBQVMsS0FBSztBQUNaLFlBQVEsTUFBTSwwREFBMEQ7QUFBQSxFQUMxRTtBQUNGO0FB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
