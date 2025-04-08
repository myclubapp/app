import {
  ChampionshipDetailPage
} from "./chunk-SMELFGID.js";
import {
  ChampionshipService
} from "./chunk-NVBRLDNC.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService,
  Timestamp
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  AsyncPipe,
  ChangeDetectorRef,
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonNote,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
  MenuController,
  ModalController,
  NavController,
  NavParams,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  SelectValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PZUQX53K.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-LQ2EECYJ.js";

// node_modules/save-svg-as-png/lib/saveSvgAsPng.js
var require_saveSvgAsPng = __commonJS({
  "node_modules/save-svg-as-png/lib/saveSvgAsPng.js"(exports) {
    "use strict";
    (function() {
      var out$ = typeof exports != "undefined" && exports || typeof define != "undefined" && {} || this || window;
      if (typeof define !== "undefined") define("save-svg-as-png", [], function() {
        return out$;
      });
      out$.default = out$;
      var xmlNs = "http://www.w3.org/2000/xmlns/";
      var xhtmlNs = "http://www.w3.org/1999/xhtml";
      var svgNs = "http://www.w3.org/2000/svg";
      var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';
      var urlRegex = /url\(["']?(.+?)["']?\)/;
      var fontFormats = {
        woff2: "font/woff2",
        woff: "font/woff",
        otf: "application/x-font-opentype",
        ttf: "application/x-font-ttf",
        eot: "application/vnd.ms-fontobject",
        sfnt: "application/font-sfnt",
        svg: "image/svg+xml"
      };
      var isElement = function isElement2(obj) {
        return obj instanceof HTMLElement || obj instanceof SVGElement;
      };
      var requireDomNode = function requireDomNode2(el) {
        if (!isElement(el)) throw new Error("an HTMLElement or SVGElement is required; got " + el);
      };
      var requireDomNodePromise = function requireDomNodePromise2(el) {
        return new Promise(function(resolve, reject) {
          if (isElement(el)) resolve(el);
          else reject(new Error("an HTMLElement or SVGElement is required; got " + el));
        });
      };
      var isExternal = function isExternal2(url) {
        return url && url.lastIndexOf("http", 0) === 0 && url.lastIndexOf(window.location.host) === -1;
      };
      var getFontMimeTypeFromUrl = function getFontMimeTypeFromUrl2(fontUrl) {
        var formats = Object.keys(fontFormats).filter(function(extension) {
          return fontUrl.indexOf("." + extension) > 0;
        }).map(function(extension) {
          return fontFormats[extension];
        });
        if (formats) return formats[0];
        console.error("Unknown font format for " + fontUrl + ". Fonts may not be working correctly.");
        return "application/octet-stream";
      };
      var arrayBufferToBase64 = function arrayBufferToBase642(buffer) {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        for (var i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };
      var getDimension = function getDimension2(el, clone, dim) {
        var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
        return typeof v === "undefined" || v === null || isNaN(parseFloat(v)) ? 0 : v;
      };
      var getDimensions = function getDimensions2(el, clone, width, height) {
        if (el.tagName === "svg") return {
          width: width || getDimension(el, clone, "width"),
          height: height || getDimension(el, clone, "height")
        };
        else if (el.getBBox) {
          var _el$getBBox = el.getBBox(), x = _el$getBBox.x, y = _el$getBBox.y, _width = _el$getBBox.width, _height = _el$getBBox.height;
          return {
            width: x + _width,
            height: y + _height
          };
        }
      };
      var reEncode = function reEncode2(data) {
        return decodeURIComponent(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function(match, p1) {
          var c = String.fromCharCode("0x" + p1);
          return c === "%" ? "%25" : c;
        }));
      };
      var uriToBlob = function uriToBlob2(uri) {
        var byteString = window.atob(uri.split(",")[1]);
        var mimeString = uri.split(",")[0].split(":")[1].split(";")[0];
        var buffer = new ArrayBuffer(byteString.length);
        var intArray = new Uint8Array(buffer);
        for (var i = 0; i < byteString.length; i++) {
          intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([buffer], {
          type: mimeString
        });
      };
      var query = function query2(el, selector) {
        if (!selector) return;
        try {
          return el.querySelector(selector) || el.parentNode && el.parentNode.querySelector(selector);
        } catch (err) {
          console.warn('Invalid CSS selector "' + selector + '"', err);
        }
      };
      var detectCssFont = function detectCssFont2(rule, href) {
        var match = rule.cssText.match(urlRegex);
        var url = match && match[1] || "";
        if (!url || url.match(/^data:/) || url === "about:blank") return;
        var fullUrl = url.startsWith("../") ? href + "/../" + url : url.startsWith("./") ? href + "/." + url : url;
        return {
          text: rule.cssText,
          format: getFontMimeTypeFromUrl(fullUrl),
          url: fullUrl
        };
      };
      var inlineImages = function inlineImages2(el) {
        return Promise.all(Array.from(el.querySelectorAll("image")).map(function(image) {
          var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href") || image.getAttribute("href");
          if (!href) return Promise.resolve(null);
          if (isExternal(href)) {
            href += (href.indexOf("?") === -1 ? "?" : "&") + "t=" + (/* @__PURE__ */ new Date()).valueOf();
          }
          return new Promise(function(resolve, reject) {
            var canvas = document.createElement("canvas");
            var img = new Image();
            img.crossOrigin = "anonymous";
            img.src = href;
            img.onerror = function() {
              return reject(new Error("Could not load " + href));
            };
            img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              canvas.getContext("2d").drawImage(img, 0, 0);
              image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL("image/png"));
              resolve(true);
            };
          });
        }));
      };
      var cachedFonts = {};
      var inlineFonts = function inlineFonts2(fonts) {
        return Promise.all(fonts.map(function(font) {
          return new Promise(function(resolve, reject) {
            if (cachedFonts[font.url]) return resolve(cachedFonts[font.url]);
            var req = new XMLHttpRequest();
            req.addEventListener("load", function() {
              var fontInBase64 = arrayBufferToBase64(req.response);
              var fontUri = font.text.replace(urlRegex, 'url("data:' + font.format + ";base64," + fontInBase64 + '")') + "\n";
              cachedFonts[font.url] = fontUri;
              resolve(fontUri);
            });
            req.addEventListener("error", function(e) {
              console.warn("Failed to load font from: " + font.url, e);
              cachedFonts[font.url] = null;
              resolve(null);
            });
            req.addEventListener("abort", function(e) {
              console.warn("Aborted loading font from: " + font.url, e);
              resolve(null);
            });
            req.open("GET", font.url);
            req.responseType = "arraybuffer";
            req.send();
          });
        })).then(function(fontCss) {
          return fontCss.filter(function(x) {
            return x;
          }).join("");
        });
      };
      var cachedRules = null;
      var styleSheetRules = function styleSheetRules2() {
        if (cachedRules) return cachedRules;
        return cachedRules = Array.from(document.styleSheets).map(function(sheet) {
          try {
            return {
              rules: sheet.cssRules,
              href: sheet.href
            };
          } catch (e) {
            console.warn("Stylesheet could not be loaded: " + sheet.href, e);
            return {};
          }
        });
      };
      var inlineCss = function inlineCss2(el, options) {
        var _ref = options || {}, selectorRemap = _ref.selectorRemap, modifyStyle = _ref.modifyStyle, modifyCss = _ref.modifyCss, fonts = _ref.fonts, excludeUnusedCss = _ref.excludeUnusedCss;
        var generateCss = modifyCss || function(selector, properties) {
          var sel = selectorRemap ? selectorRemap(selector) : selector;
          var props = modifyStyle ? modifyStyle(properties) : properties;
          return sel + "{" + props + "}\n";
        };
        var css = [];
        var detectFonts = typeof fonts === "undefined";
        var fontList = fonts || [];
        styleSheetRules().forEach(function(_ref2) {
          var rules = _ref2.rules, href = _ref2.href;
          if (!rules) return;
          Array.from(rules).forEach(function(rule) {
            if (typeof rule.style != "undefined") {
              if (query(el, rule.selectorText)) css.push(generateCss(rule.selectorText, rule.style.cssText));
              else if (detectFonts && rule.cssText.match(/^@font-face/)) {
                var font = detectCssFont(rule, href);
                if (font) fontList.push(font);
              } else if (!excludeUnusedCss) {
                css.push(rule.cssText);
              }
            }
          });
        });
        return inlineFonts(fontList).then(function(fontCss) {
          return css.join("\n") + fontCss;
        });
      };
      var downloadOptions = function downloadOptions2() {
        if (!navigator.msSaveOrOpenBlob && !("download" in document.createElement("a"))) {
          return {
            popup: window.open()
          };
        }
      };
      out$.prepareSvg = function(el, options, done) {
        requireDomNode(el);
        var _ref3 = options || {}, _ref3$left = _ref3.left, left = _ref3$left === void 0 ? 0 : _ref3$left, _ref3$top = _ref3.top, top = _ref3$top === void 0 ? 0 : _ref3$top, w = _ref3.width, h = _ref3.height, _ref3$scale = _ref3.scale, scale = _ref3$scale === void 0 ? 1 : _ref3$scale, _ref3$responsive = _ref3.responsive, responsive = _ref3$responsive === void 0 ? false : _ref3$responsive, _ref3$excludeCss = _ref3.excludeCss, excludeCss = _ref3$excludeCss === void 0 ? false : _ref3$excludeCss;
        return inlineImages(el).then(function() {
          var clone = el.cloneNode(true);
          clone.style.backgroundColor = (options || {}).backgroundColor || el.style.backgroundColor;
          var _getDimensions = getDimensions(el, clone, w, h), width = _getDimensions.width, height = _getDimensions.height;
          if (el.tagName !== "svg") {
            if (el.getBBox) {
              if (clone.getAttribute("transform") != null) {
                clone.setAttribute("transform", clone.getAttribute("transform").replace(/translate\(.*?\)/, ""));
              }
              var svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              svg2.appendChild(clone);
              clone = svg2;
            } else {
              console.error("Attempted to render non-SVG element", el);
              return;
            }
          }
          clone.setAttribute("version", "1.1");
          clone.setAttribute("viewBox", [left, top, width, height].join(" "));
          if (!clone.getAttribute("xmlns")) clone.setAttributeNS(xmlNs, "xmlns", svgNs);
          if (!clone.getAttribute("xmlns:xlink")) clone.setAttributeNS(xmlNs, "xmlns:xlink", "http://www.w3.org/1999/xlink");
          if (responsive) {
            clone.removeAttribute("width");
            clone.removeAttribute("height");
            clone.setAttribute("preserveAspectRatio", "xMinYMin meet");
          } else {
            clone.setAttribute("width", width * scale);
            clone.setAttribute("height", height * scale);
          }
          Array.from(clone.querySelectorAll("foreignObject > *")).forEach(function(foreignObject) {
            foreignObject.setAttributeNS(xmlNs, "xmlns", foreignObject.tagName === "svg" ? svgNs : xhtmlNs);
          });
          if (excludeCss) {
            var outer = document.createElement("div");
            outer.appendChild(clone);
            var src = outer.innerHTML;
            if (typeof done === "function") done(src, width, height);
            else return {
              src,
              width,
              height
            };
          } else {
            return inlineCss(el, options).then(function(css) {
              var style = document.createElement("style");
              style.setAttribute("type", "text/css");
              style.innerHTML = "<![CDATA[\n" + css + "\n]]>";
              var defs = document.createElement("defs");
              defs.appendChild(style);
              clone.insertBefore(defs, clone.firstChild);
              var outer2 = document.createElement("div");
              outer2.appendChild(clone);
              var src2 = outer2.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
              if (typeof done === "function") done(src2, width, height);
              else return {
                src: src2,
                width,
                height
              };
            });
          }
        });
      };
      out$.svgAsDataUri = function(el, options, done) {
        requireDomNode(el);
        return out$.prepareSvg(el, options).then(function(_ref4) {
          var src = _ref4.src, width = _ref4.width, height = _ref4.height;
          var svgXml = "data:image/svg+xml;base64," + window.btoa(reEncode(doctype + src));
          if (typeof done === "function") {
            done(svgXml, width, height);
          }
          return svgXml;
        });
      };
      out$.svgAsPngUri = function(el, options, done) {
        requireDomNode(el);
        var _ref5 = options || {}, _ref5$encoderType = _ref5.encoderType, encoderType = _ref5$encoderType === void 0 ? "image/png" : _ref5$encoderType, _ref5$encoderOptions = _ref5.encoderOptions, encoderOptions = _ref5$encoderOptions === void 0 ? 0.8 : _ref5$encoderOptions, canvg = _ref5.canvg;
        var convertToPng = function convertToPng2(_ref6) {
          var src = _ref6.src, width = _ref6.width, height = _ref6.height;
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          var pixelRatio = window.devicePixelRatio || 1;
          canvas.width = width * pixelRatio;
          canvas.height = height * pixelRatio;
          canvas.style.width = canvas.width + "px";
          canvas.style.height = canvas.height + "px";
          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          if (canvg) canvg(canvas, src);
          else context.drawImage(src, 0, 0);
          var png = void 0;
          try {
            png = canvas.toDataURL(encoderType, encoderOptions);
          } catch (e) {
            if (typeof SecurityError !== "undefined" && e instanceof SecurityError || e.name === "SecurityError") {
              console.error("Rendered SVG images cannot be downloaded in this browser.");
              return;
            } else throw e;
          }
          if (typeof done === "function") done(png, canvas.width, canvas.height);
          return Promise.resolve(png);
        };
        if (canvg) return out$.prepareSvg(el, options).then(convertToPng);
        else return out$.svgAsDataUri(el, options).then(function(uri) {
          return new Promise(function(resolve, reject) {
            var image = new Image();
            image.onload = function() {
              return resolve(convertToPng({
                src: image,
                width: image.width,
                height: image.height
              }));
            };
            image.onerror = function() {
              reject("There was an error loading the data URI as an image on the following SVG\n" + window.atob(uri.slice(26)) + "Open the following link to see browser's diagnosis\n" + uri);
            };
            image.src = uri;
          });
        });
      };
      out$.download = function(name, uri, options) {
        if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
        else {
          var saveLink = document.createElement("a");
          if ("download" in saveLink) {
            saveLink.download = name;
            saveLink.style.display = "none";
            document.body.appendChild(saveLink);
            try {
              var blob = uriToBlob(uri);
              var url = URL.createObjectURL(blob);
              saveLink.href = url;
              saveLink.onclick = function() {
                return requestAnimationFrame(function() {
                  return URL.revokeObjectURL(url);
                });
              };
            } catch (e) {
              console.error(e);
              console.warn("Error while getting object URL. Falling back to string URL.");
              saveLink.href = uri;
            }
            saveLink.click();
            document.body.removeChild(saveLink);
          } else if (options && options.popup) {
            options.popup.document.title = name;
            options.popup.location.replace(uri);
          }
        }
      };
      out$.saveSvg = function(el, name, options) {
        var downloadOpts = downloadOptions();
        return requireDomNodePromise(el).then(function(el2) {
          return out$.svgAsDataUri(el2, options || {});
        }).then(function(uri) {
          return out$.download(name, uri, downloadOpts);
        });
      };
      out$.saveSvgAsPng = function(el, name, options) {
        var downloadOpts = downloadOptions();
        return requireDomNodePromise(el).then(function(el2) {
          return out$.svgAsPngUri(el2, options || {});
        }).then(function(uri) {
          return out$.download(name, uri, downloadOpts);
        });
      };
    })();
  }
});

// src/app/pages/championship/game-preview/game-preview.page.ts
var svg = __toESM(require_saveSvgAsPng());
function GamePreviewPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 1)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 2)(7, "ion-button", 3);
    \u0275\u0275listener("click", function GamePreviewPage_ng_container_0_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 4)(11, "ion-header", 5)(12, "ion-toolbar")(13, "ion-title", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "game-preview", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "common.details"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "common.details"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("club", game_r3.clubRef.id);
    \u0275\u0275propertyInterpolate("game", game_r3.id);
  }
}
var _GamePreviewPage = class _GamePreviewPage {
  constructor(navParams, modalCtrl) {
    this.navParams = navParams;
    this.modalCtrl = modalCtrl;
  }
  ngOnInit() {
    this.game = this.navParams.get("data");
    this.game$ = of(this.game);
  }
  saveImage(gameId) {
    svg.saveSvgAsPng(document.getElementsByTagName("svg"), "diagram.png");
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.game, "confirm");
    });
  }
};
_GamePreviewPage.\u0275fac = function GamePreviewPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GamePreviewPage)(\u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(ModalController));
};
_GamePreviewPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamePreviewPage, selectors: [["app-game-preview"]], inputs: { game: [0, "data", "game"] }, standalone: false, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [1, "ion-padding"], ["collapse", "condense"], ["size", "large"], [3, "club", "game"]], template: function GamePreviewPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GamePreviewPage_ng_container_0_Template, 17, 12, "ng-container", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.game$));
  }
}, dependencies: [NgIf, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, AsyncPipe, TranslatePipe], encapsulation: 2 });
var GamePreviewPage = _GamePreviewPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamePreviewPage, { className: "GamePreviewPage", filePath: "src/app/pages/championship/game-preview/game-preview.page.ts", lineNumber: 17 });
})();

// src/app/pages/championship/championship/championship.page.ts
function ChampionshipPage_ion_menu_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-menu-button");
  }
}
function ChampionshipPage_ion_buttons_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-buttons", 12)(1, "ion-button", 13);
    \u0275\u0275listener("click", function ChampionshipPage_ion_buttons_7_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.close"));
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 33);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_3_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const game_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggle(true, game_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 34);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_4_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const game_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggle(true, game_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 35);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_5_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const game_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggle(false, game_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275element(1, "ion-icon", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", game_r6.location, " ", game_r6.city, " ");
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275element(1, "ion-icon", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", game_r6.result, " ");
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275element(1, "ion-icon", 38);
    \u0275\u0275text(2, " Spiel gel\xF6scht ");
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 39);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_22_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const game_r6 = \u0275\u0275nextContext().$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r10, true, game_r6));
    });
    \u0275\u0275element(1, "ion-icon", 40);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 41);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_23_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const game_r6 = \u0275\u0275nextContext().$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r10, false, game_r6));
    });
    \u0275\u0275element(1, "ion-icon", 42);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ng_container_27_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 41);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ng_container_27_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const game_r6 = \u0275\u0275nextContext(2).$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteGame(item_r10, game_r6));
    });
    \u0275\u0275element(1, "ion-icon", 43);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ng_container_27_ion_item_option_1_Template, 2, 0, "ion-item-option", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r13 = ctx.ngIf;
    const game_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r13, game_r6.teamId));
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 19);
    \u0275\u0275template(3, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_3_Template, 1, 0, "ion-icon", 20)(4, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_4_Template, 1, 0, "ion-icon", 21)(5, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_icon_5_Template, 1, 0, "ion-icon", 22);
    \u0275\u0275elementStart(6, "ion-label", 13);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_Template_ion_label_click_6_listener() {
      const game_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openChampionshipDetailModal(game_r6, true));
    });
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275element(10, "ion-icon", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_12_Template, 3, 2, "h3", 4);
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275element(14, "ion-icon", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_16_Template, 3, 1, "h3", 4)(17, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_h3_17_Template, 3, 0, "h3", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-note", 25);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_Template_ion_note_click_18_listener() {
      const game_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openChampionshipDetailModal(game_r6, true));
    });
    \u0275\u0275elementStart(19, "ion-badge", 26);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "ion-item-options", 27);
    \u0275\u0275template(22, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_22_Template, 2, 0, "ion-item-option", 28)(23, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ion_item_option_23_Template, 2, 0, "ion-item-option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-item-options", 30)(25, "ion-item-option", 31);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_Template_ion_item_option_click_25_listener() {
      const game_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.shareSocialMedia(item_r10, game_r6));
    });
    \u0275\u0275element(26, "ion-icon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_ng_container_27_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const game_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", game_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.status === true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", game_r6.date, " ", game_r6.time, " Uhr ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.location);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", game_r6.liga, " ", game_r6.teamName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.result && game_r6.result != "0:0(0:0)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.gameStatus && game_r6.gameStatus == "deleted");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r6.countAttendees);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", game_r6.status === false || game_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r6.status === true || game_r6.status === null);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(28, 15, ctx_r2.teamAdminList$));
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 16)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label", 3)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-label", 17)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_ion_item_sliding_14_Template, 29, 17, "ion-item-sliding", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gameList_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "championship.upcomming__games"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", gameList_r14);
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-note");
    \u0275\u0275text(7, " Keine Spiele gefunden ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "championship.upcomming__games"));
  }
}
function ChampionshipPage_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipPage_ng_container_24_ng_container_1_ion_list_1_Template, 15, 10, "ion-list", 15)(2, ChampionshipPage_ng_container_24_ng_container_1_ion_list_2_Template, 8, 3, "ion-list", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const gameList_r14 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", gameList_r14.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", gameList_r14.length == 0);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 51);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 52);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 53);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_h3_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275element(1, "ion-icon", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", game_r16.result, " ");
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 19);
    \u0275\u0275template(3, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_3_Template, 1, 0, "ion-icon", 44)(4, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_4_Template, 1, 0, "ion-icon", 45)(5, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_ion_icon_5_Template, 1, 0, "ion-icon", 46);
    \u0275\u0275elementStart(6, "ion-label", 47);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_Template_ion_label_click_6_listener() {
      const game_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openChampionshipDetailModal(game_r16, false));
    });
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275element(12, "ion-icon", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275element(15, "ion-icon", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275element(18, "ion-icon", 50);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_h3_20_Template, 3, 1, "h3", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-note", 25);
    \u0275\u0275listener("click", function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_Template_ion_note_click_21_listener() {
      const game_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openChampionshipDetailModal(game_r16, false));
    });
    \u0275\u0275elementStart(22, "ion-badge", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const game_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", game_r16.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r16.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r16.status === true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", game_r16.teamHome, " vs.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r16.teamAway);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", game_r16.date, " ", game_r16.time, " Uhr ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(": ", game_r16.location, " ", game_r16.city, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", game_r16.liga, " ", game_r16.teamName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r16.result);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r16.countAttendees);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 16)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label", 3)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-label", 17)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_ion_item_sliding_14_Template, 24, 13, "ion-item-sliding", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gameListPast_r17 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "championship.past__games"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", gameListPast_r17);
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-note");
    \u0275\u0275text(7, " Keine Spiele gefunden ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "championship.past__games"));
  }
}
function ChampionshipPage_ng_container_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipPage_ng_container_24_ng_container_3_ion_list_1_Template, 15, 10, "ion-list", 15)(2, ChampionshipPage_ng_container_24_ng_container_3_ion_list_2_Template, 8, 3, "ion-list", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const gameListPast_r17 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", gameListPast_r17.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", gameListPast_r17.length == 0);
  }
}
function ChampionshipPage_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipPage_ng_container_24_ng_container_1_Template, 3, 2, "ng-container", 14);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ChampionshipPage_ng_container_24_ng_container_3_Template, 3, 2, "ng-container", 14);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const loading_r18 = \u0275\u0275reference(27);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 4, ctx_r2.gameList$))("ngIfElse", loading_r18);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 6, ctx_r2.gameListPast$))("ngIfElse", loading_r18);
  }
}
function ChampionshipPage_ng_container_25_ng_container_1_div_3_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 66)(1, "ion-grid")(2, "ion-row", 67)(3, "ion-col", 61)(4, "ion-badge");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-col", 62)(7, "ion-avatar");
    \u0275\u0275element(8, "img", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-col", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-col", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ranking_r19 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ranking_r19.ranking, " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", ranking_r19.name);
    \u0275\u0275propertyInterpolate("src", ranking_r19.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ranking_r19.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ranking_r19.games, "/", ranking_r19.wins, "/", ranking_r19.loss, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ranking_r19.goals, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ranking_r19.points, " ");
  }
}
function ChampionshipPage_ng_container_25_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ion-accordion", 57)(2, "ion-item", 58)(3, "ion-label", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 60)(6, "ion-list")(7, "ion-list-header")(8, "ion-label");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-item")(11, "ion-grid")(12, "ion-row")(13, "ion-col", 61);
    \u0275\u0275text(14, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-col", 62);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col", 63);
    \u0275\u0275text(19, "Sp/S/N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col", 64);
    \u0275\u0275text(21, "T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-col", 61);
    \u0275\u0275text(23, "P");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, ChampionshipPage_ng_container_25_ng_container_1_div_3_ion_item_24_Template, 16, 9, "ion-item", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", entry_r20.teamId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r20.details == null ? null : entry_r20.details.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(entry_r20 == null ? null : entry_r20.details == null ? null : entry_r20.details.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 5, "common.name"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", entry_r20.rankings);
  }
}
function ChampionshipPage_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 55)(2, "ion-accordion-group", 56);
    \u0275\u0275template(3, ChampionshipPage_ng_container_25_ng_container_1_div_3_Template, 25, 7, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamRankings_r21 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", teamRankings_r21[0].teamId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", teamRankings_r21);
  }
}
function ChampionshipPage_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipPage_ng_container_25_ng_container_1_Template, 4, 4, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 54)(4, "ion-text")(5, "p")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ul")(10, "li");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 7, ctx_r2.teamRankings$));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "championship.legend"), ": ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Sp = ", \u0275\u0275pipeBind1(12, 11, "championship.games__total"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S = ", \u0275\u0275pipeBind1(15, 13, "championship.victories"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("N = ", \u0275\u0275pipeBind1(18, 15, "championship.defeat"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("T = ", \u0275\u0275pipeBind1(21, 17, "championship.goal__record"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("P = ", \u0275\u0275pipeBind1(24, 19, "championship.points"), "");
  }
}
function ChampionshipPage_ng_template_26_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 70)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 72)(9, "ion-skeleton-text", 71)(10, "ion-skeleton-text", 72)(11, "ion-skeleton-text", 71)(12, "ion-skeleton-text", 72);
    \u0275\u0275elementEnd()()();
  }
}
function ChampionshipPage_ng_template_26_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, ChampionshipPage_ng_template_26_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.skeleton);
  }
}
function ChampionshipPage_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChampionshipPage_ng_template_26_ion_list_0_Template, 4, 1, "ion-list", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r18 = \u0275\u0275reference(27);
    \u0275\u0275property("ngIf", loading_r18);
  }
}
var _ChampionshipPage = class _ChampionshipPage {
  /*filterList: any[] = [];
  filterValue: string = "";
  */
  constructor(toastController, modalCtrl, authService, fbService, championshipService, alertCtrl, menuCtrl, cdr, navCtrl, translate) {
    this.toastController = toastController;
    this.modalCtrl = modalCtrl;
    this.authService = authService;
    this.fbService = fbService;
    this.championshipService = championshipService;
    this.alertCtrl = alertCtrl;
    this.menuCtrl = menuCtrl;
    this.cdr = cdr;
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.skeleton = new Array(12);
    this.mode = "games";
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    this.teamRankings$ = this.getTeamsWithRankingsForYear("2024");
    this.gameList$ = this.getTeamGamesUpcoming();
    this.gameListPast$ = this.getTeamGamesPast();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  ngOnDestroy() {
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  getTeamsWithRankingsForYear(year) {
    return this.authService.getUser$().pipe(
      take(1),
      // tap((user) => console.log("User:", user)),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (this.team && this.team.id) {
          teams.push({
            id: this.team.id,
            clubId: "",
            name: "",
            logo: "",
            website: "",
            portrait: "",
            liga: "",
            type: "",
            updated: Timestamp.now()
          });
        } else if (teams.length === 0) {
          return of([]);
        }
        ;
        const relevantTeams = this.team && this.team.id ? teams.filter((team) => team.id === this.team.id) : teams;
        return combineLatest(relevantTeams.map((team) => combineLatest({
          teamDetails: of(team),
          rankingsTable: this.championshipService.getTeamRankingTable(team.id, year),
          rankingDetails: this.championshipService.getTeamRanking(team.id, year)
        }).pipe(tap((data) => {
          console.log(data);
        }), map(({ teamDetails, rankingsTable, rankingDetails }) => __spreadProps(__spreadValues({}, teamDetails), {
          teamId: teamDetails.id,
          rankings: rankingsTable.sort((a, b) => {
            return a.ranking - b.ranking;
          }),
          details: rankingDetails
        })))));
      }),
      // tap((results) => console.log("Final results:", results)),
      catchError((err) => {
        console.error("Error in getTeamsWithRankingsForYear:", err);
        return of([]);
      })
    );
  }
  getTeamGamesUpcoming() {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      if (user) {
        this.user = user;
      }
    }), switchMap((user) => {
      if (!user)
        return of([]);
      return this.fbService.getUserTeamRefs(user);
    }), mergeMap((teams) => {
      if (this.team && this.team.id) {
        teams.push({
          id: this.team.id,
          clubId: "",
          name: "",
          logo: "",
          website: "",
          portrait: "",
          liga: "",
          type: "",
          updated: Timestamp.now()
        });
      } else if (teams.length === 0) {
        return of([]);
      }
      const relevantTeams = this.team && this.team.id ? teams.filter((team) => team.id === this.team.id) : teams;
      return combineLatest(relevantTeams.map((team) => this.championshipService.getTeamGamesRefs(team.id).pipe(
        catchError((err) => {
          console.error("Permission error in fetching getTeamGamesRefs:", team.id, err);
          return of([]);
        }),
        switchMap((teamGames) => {
          if (teamGames.length === 0)
            return of([]);
          return combineLatest(teamGames.map((game) => combineLatest([
            this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(catchError((err) => {
              console.error("Permission error in fetching attendees:", err);
              return of([]);
            })),
            this.fbService.getTeamRef(team.id).pipe(catchError((err) => {
              console.error("Permission error in fetching getTeamRef:", err);
              return of({});
            }))
            // Fetching team details
          ]).pipe(map(([attendees, teamDetails]) => {
            const userAttendee = attendees.find((att) => att.id === this.user.uid);
            return __spreadProps(__spreadValues({}, game), {
              team: teamDetails,
              attendees,
              status: userAttendee ? userAttendee.status : null,
              countAttendees: attendees.filter((att) => att.status === true).length,
              teamId: team.id
            });
          }), catchError(() => of(__spreadProps(__spreadValues({}, game), {
            team: null,
            attendees: [],
            status: null,
            countAttendees: 0,
            teamId: team.id
          }))))));
        }),
        map((gamesWithAttendees) => gamesWithAttendees),
        // Combine games for each team
        catchError((err) => {
          console.error("Error fetching games for team:", err);
          return of([]);
        })
      ))).pipe(
        // Flatten all games across all teams into a single array
        map((teamsGames) => teamsGames.flat()),
        // tap((allGames) => console.log("All games:", allGames)),
        // Sort games globally by their `dateTime` in ascending order (upcoming games)
        map((allGames) => allGames.sort((a, b) => a.dateTime.seconds - b.dateTime.seconds)),
        catchError((err) => {
          console.error("Error in getTeamGamesUpcoming:", err);
          return of([]);
        })
      );
    }));
  }
  getTeamGamesPast() {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
    }), switchMap((user) => {
      if (!user)
        return of([]);
      return this.fbService.getUserTeamRefs(user);
    }), mergeMap((teams) => {
      if (this.team && this.team.id) {
        teams.push({
          id: this.team.id,
          clubId: "",
          name: "",
          logo: "",
          website: "",
          portrait: "",
          liga: "",
          type: "",
          updated: Timestamp.now()
        });
      } else if (teams.length === 0) {
        return of([]);
      }
      const relevantTeams = this.team && this.team.id ? teams.filter((team) => team.id === this.team.id) : teams;
      return combineLatest(relevantTeams.map((team) => this.championshipService.getTeamGamesPastRefs(team.id).pipe(
        catchError((err) => {
          console.error("Permission error in fetching getTeamGamesRefs:", team.id, err);
          return of([]);
        }),
        switchMap((teamGames) => {
          if (teamGames.length === 0)
            return of([]);
          return combineLatest(teamGames.map((game) => combineLatest([
            this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(catchError((err) => {
              console.error("Permission error in fetching attendees:", err);
              return of([]);
            })),
            this.fbService.getTeamRef(team.id).pipe(catchError((err) => {
              console.error("Permission error in fetching getTeamRef:", err);
              return of({});
            }))
            // Fetching team details
          ]).pipe(map(([attendees, teamDetails]) => {
            const userAttendee = attendees.find((att) => att.id === this.user.uid);
            return __spreadProps(__spreadValues({}, game), {
              team: teamDetails,
              attendees,
              status: userAttendee ? userAttendee.status : null,
              countAttendees: attendees.filter((att) => att.status === true).length,
              teamId: team.id
            });
          }), catchError(() => of(__spreadProps(__spreadValues({}, game), {
            team: null,
            attendees: [],
            status: null,
            countAttendees: 0,
            teamId: team.id
          }))))));
        }),
        map((gamesWithAttendees) => gamesWithAttendees),
        // Combine games for a team
        catchError((err) => {
          console.error("Error fetching games for team:", err);
          return of([]);
        })
      ))).pipe(
        // Flatten to get all games across all teams
        map((teamsGames) => teamsGames.flat()),
        // tap((allGames) => console.log("All games:", allGames)),
        // Sort games globally by date (newest first)
        map((allGames) => allGames.sort((a, b) => b.dateTime.seconds - a.dateTime.seconds)),
        catchError((err) => {
          console.error("Error in getTeamGamesPast:", err);
          return of([]);
        })
      );
    }));
  }
  openChampionshipDetailModal(game, isFuture) {
    return __async(this, null, function* () {
      let extras = {
        queryParams: {
          data: JSON.stringify(game),
          isFuture
        }
      };
      console.log(extras);
      const modal = yield this.modalCtrl.create({
        component: ChampionshipDetailPage,
        presentingElement: yield this.modalCtrl.getTop(),
        // presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        cssClass: "transparent-modal",
        showBackdrop: true,
        componentProps: {
          data: game,
          isFuture
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  // List item
  toggle(status, game) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`);
      console.log(game);
      const newStartDate = game.dateTime.toDate();
      newStartDate.setHours(Number(game.time.substring(0, 2)));
      console.log(newStartDate);
      console.log("Grenzwert ");
      const championshipTreshold = game.team.championshipThreshold || 0;
      console.log(championshipTreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * championshipTreshold && status == false && championshipTreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.championshipService.setTeamGameAttendeeStatus(status, game.teamId, game.id);
        this.presentToast();
      }
    });
  }
  //Sliding
  toggleItem(slidingItem, status, game) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and training ${game.id}`);
      console.log(game);
      const newStartDate = game.dateTime.toDate();
      newStartDate.setHours(Number(game.time.substring(0, 2)));
      console.log(newStartDate);
      console.log("Grenzwert ");
      const championshipTreshold = game.team.championshipThreshold || 0;
      console.log(championshipTreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * championshipTreshold && status == false && championshipTreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.championshipService.setTeamGameAttendeeStatus(status, game.teamId, game.id);
        this.presentToast();
      }
    });
  }
  presentToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.changes__saved")),
        color: "primary",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  shareSocialMedia(slidingItem, game) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      const modal = yield this.modalCtrl.create({
        component: GamePreviewPage,
        // presentingElement: this.routerOutlet.nativeEl,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: game
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  deleteGame(slidingItem, game) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      yield this.championshipService.deleteTeamGame(game.teamId, game.id);
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__training_deleted")),
        color: "danger",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  tooLateToggle() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Abmelden nicht m\xF6glich",
        message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
        buttons: [{
          role: "",
          text: "OK",
          handler: (data) => {
            console.log(data);
          }
        }]
      });
      alert.present();
    });
  }
};
_ChampionshipPage.\u0275fac = function ChampionshipPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChampionshipPage)(\u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ChampionshipService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(TranslateService));
};
_ChampionshipPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChampionshipPage, selectors: [["app-championship"]], inputs: { team: "team", isModal: "isModal" }, standalone: false, decls: 28, vars: 19, consts: [["loading", ""], ["item", ""], [3, "translucent"], ["slot", "start"], [4, "ngIf"], ["slot", "primary", 4, "ngIf"], [3, "ngModelChange", "ngModel"], ["value", "games"], ["value", "ranking"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["slot", "primary"], [3, "click"], [4, "ngIf", "ngIfElse"], ["lines", "full", 4, "ngIf"], ["lines", "full"], ["slot", "end"], [4, "ngFor", "ngForOf"], ["type", "button", "detail", "true"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "calendar-outline"], ["slot", "icon-only", "name", "trophy-outline"], ["slot", "end", 3, "click"], ["color", "primary"], ["side", "start"], ["color", "success", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["side", "end"], ["color", "primary", 3, "click"], ["name", "logo-instagram", "slot", "icon-only"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click"], ["slot", "icon-only", "name", "location-outline"], ["slot", "icon-only", "name", "podium-outline"], ["slot", "icon-only", "color", "danger", "name", "close-circle-outline"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["slot", "icon-only", "name", "trash"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "icon-only", "name", "time"], ["slot", "icon-only", "name", "location"], ["slot", "icon-only", "name", "trophy"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle"], [1, "ion-padding"], [3, "inset"], [3, "multiple", "value"], [3, "value"], ["slot", "header", "color", "light"], [1, "ion-text-wrap"], ["slot", "content"], ["size", "1"], ["size", "5"], ["size", "3"], ["size", "2"], ["class", "myclubPadding", 4, "ngFor", "ngForOf"], [1, "myclubPadding"], [1, "ion-align-items-center"], [3, "alt", "src"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function ChampionshipPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3);
    \u0275\u0275template(3, ChampionshipPage_ion_menu_button_3_Template, 1, 0, "ion-menu-button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChampionshipPage_ion_buttons_7_Template, 4, 3, "ion-buttons", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-toolbar")(9, "ion-segment", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ChampionshipPage_Template_ion_segment_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "ion-segment-button", 7)(11, "ion-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-segment-button", 8)(15, "ion-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "ion-content", 9)(19, "ion-header", 10)(20, "ion-toolbar")(21, "ion-title", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ChampionshipPage_ng_container_24_Template, 5, 8, "ng-container", 4)(25, ChampionshipPage_ng_container_25_Template, 25, 21, "ng-container", 4)(26, ChampionshipPage_ng_template_26_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isModal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "common.championship"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isModal);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.mode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "championship.games"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "championship.table"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "common.championship"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.mode == "games");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.mode == "ranking");
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, IonAccordion, IonAccordionGroup, IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenuButton, IonNote, IonRow, IonSegment, IonSegmentButton, IonSkeletonText, IonText, IonTitle, IonToolbar, SelectValueAccessorDirective, AsyncPipe, TranslatePipe], styles: ["\n\n.myclubPadding[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: p;\n}\n/*# sourceMappingURL=championship.page.css.map */"] });
var ChampionshipPage = _ChampionshipPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChampionshipPage, { className: "ChampionshipPage", filePath: "src/app/pages/championship/championship/championship.page.ts", lineNumber: 42 });
})();

export {
  ChampionshipPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvbGliL3NhdmVTdmdBc1BuZy5qcyIsInNyYy9hcHAvcGFnZXMvY2hhbXBpb25zaGlwL2dhbWUtcHJldmlldy9nYW1lLXByZXZpZXcucGFnZS50cyIsInNyYy9hcHAvcGFnZXMvY2hhbXBpb25zaGlwL2dhbWUtcHJldmlldy9nYW1lLXByZXZpZXcucGFnZS5odG1sIiwic3JjL2FwcC9wYWdlcy9jaGFtcGlvbnNoaXAvY2hhbXBpb25zaGlwL2NoYW1waW9uc2hpcC5wYWdlLnRzIiwic3JjL2FwcC9wYWdlcy9jaGFtcGlvbnNoaXAvY2hhbXBpb25zaGlwL2NoYW1waW9uc2hpcC5wYWdlLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzIHx8IHdpbmRvdztcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSBkZWZpbmUoJ3NhdmUtc3ZnLWFzLXBuZycsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG91dCQ7XG4gIH0pO1xuICBvdXQkLmRlZmF1bHQgPSBvdXQkO1xuICB2YXIgeG1sTnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nO1xuICB2YXIgeGh0bWxOcyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgdmFyIHN2Z05zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcbiAgdmFyIHVybFJlZ2V4ID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgdmFyIGZvbnRGb3JtYXRzID0ge1xuICAgIHdvZmYyOiAnZm9udC93b2ZmMicsXG4gICAgd29mZjogJ2ZvbnQvd29mZicsXG4gICAgb3RmOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICB0dGY6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICBlb3Q6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgc2ZudDogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgc3ZnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgfTtcbiAgdmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfTtcbiAgdmFyIHJlcXVpcmVEb21Ob2RlID0gZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gIH07XG4gIHZhciByZXF1aXJlRG9tTm9kZVByb21pc2UgPSBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZVByb21pc2UoZWwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKGlzRWxlbWVudChlbCkpIHJlc29sdmUoZWwpO2Vsc2UgcmVqZWN0KG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCkpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgaXNFeHRlcm5hbCA9IGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLCAwKSA9PT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09PSAtMTtcbiAgfTtcbiAgdmFyIGdldEZvbnRNaW1lVHlwZUZyb21VcmwgPSBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICB2YXIgZm9ybWF0cyA9IE9iamVjdC5rZXlzKGZvbnRGb3JtYXRzKS5maWx0ZXIoZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMDtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIGZvbnRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgfSk7XG4gICAgaWYgKGZvcm1hdHMpIHJldHVybiBmb3JtYXRzWzBdO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsICsgJy4gRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseS4nKTtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gIH07XG4gIHZhciBhcnJheUJ1ZmZlclRvQmFzZTY0ID0gZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgfTtcbiAgdmFyIGdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0gfHwgY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSB8fCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8IHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSA/IDAgOiB2O1xuICB9O1xuICB2YXIgZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWwsIGNsb25lLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYgKGVsLnRhZ05hbWUgPT09ICdzdmcnKSByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpXG4gICAgfTtlbHNlIGlmIChlbC5nZXRCQm94KSB7XG4gICAgICB2YXIgX2VsJGdldEJCb3ggPSBlbC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfZWwkZ2V0QkJveC54LFxuICAgICAgICB5ID0gX2VsJGdldEJCb3gueSxcbiAgICAgICAgX3dpZHRoID0gX2VsJGdldEJCb3gud2lkdGgsXG4gICAgICAgIF9oZWlnaHQgPSBfZWwkZ2V0QkJveC5oZWlnaHQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogeCArIF93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB5ICsgX2hlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHZhciByZUVuY29kZSA9IGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudChkYXRhKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSkpO1xuICB9O1xuICB2YXIgdXJpVG9CbG9iID0gZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7XG4gICAgICB0eXBlOiBtaW1lU3RyaW5nXG4gICAgfSk7XG4gIH07XG4gIHZhciBxdWVyeSA9IGZ1bmN0aW9uIHF1ZXJ5KGVsLCBzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3IgKyAnXCInLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGRldGVjdENzc0ZvbnQgPSBmdW5jdGlvbiBkZXRlY3RDc3NGb250KHJ1bGUsIGhyZWYpIHtcbiAgICAvLyBNYXRjaCBDU1MgZm9udC1mYWNlIHJ1bGVzIHRvIGV4dGVybmFsIGxpbmtzLlxuICAgIC8vIEBmb250LWZhY2Uge1xuICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgLy8gfVxuICAgIHZhciBtYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaCh1cmxSZWdleCk7XG4gICAgdmFyIHVybCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgIGlmICghdXJsIHx8IHVybC5tYXRjaCgvXmRhdGE6LykgfHwgdXJsID09PSAnYWJvdXQ6YmxhbmsnKSByZXR1cm47XG4gICAgdmFyIGZ1bGxVcmwgPSB1cmwuc3RhcnRzV2l0aCgnLi4vJykgPyBocmVmICsgJy8uLi8nICsgdXJsIDogdXJsLnN0YXJ0c1dpdGgoJy4vJykgPyBocmVmICsgJy8uJyArIHVybCA6IHVybDtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZ1bGxVcmwpLFxuICAgICAgdXJsOiBmdWxsVXJsXG4gICAgfTtcbiAgfTtcbiAgdmFyIGlubGluZUltYWdlcyA9IGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJykpLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicpIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaWYgKCFocmVmKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZikpIHtcbiAgICAgICAgaHJlZiArPSAoaHJlZi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICd0PScgKyBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdDb3VsZCBub3QgbG9hZCAnICsgaHJlZikpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH07XG4gIHZhciBjYWNoZWRGb250cyA9IHt9O1xuICB2YXIgaW5saW5lRm9udHMgPSBmdW5jdGlvbiBpbmxpbmVGb250cyhmb250cykge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChmb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChjYWNoZWRGb250c1tmb250LnVybF0pIHJldHVybiByZXNvbHZlKGNhY2hlZEZvbnRzW2ZvbnQudXJsXSk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGFsc28gYmUgd29ydGggaXQgdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQpXG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQocmVxLnJlc3BvbnNlKTtcbiAgICAgICAgICB2YXIgZm9udFVyaSA9IGZvbnQudGV4dC5yZXBsYWNlKHVybFJlZ2V4LCAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKScpICsgJ1xcbic7XG4gICAgICAgICAgY2FjaGVkRm9udHNbZm9udC51cmxdID0gZm9udFVyaTtcbiAgICAgICAgICByZXNvbHZlKGZvbnRVcmkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsLCBlKTtcbiAgICAgICAgICBjYWNoZWRGb250c1tmb250LnVybF0gPSBudWxsO1xuICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignQWJvcnRlZCBsb2FkaW5nIGZvbnQgZnJvbTogJyArIGZvbnQudXJsLCBlKTtcbiAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICB9KTtcbiAgICB9KSkudGhlbihmdW5jdGlvbiAoZm9udENzcykge1xuICAgICAgcmV0dXJuIGZvbnRDc3MuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSkuam9pbignJyk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBjYWNoZWRSdWxlcyA9IG51bGw7XG4gIHZhciBzdHlsZVNoZWV0UnVsZXMgPSBmdW5jdGlvbiBzdHlsZVNoZWV0UnVsZXMoKSB7XG4gICAgaWYgKGNhY2hlZFJ1bGVzKSByZXR1cm4gY2FjaGVkUnVsZXM7XG4gICAgcmV0dXJuIGNhY2hlZFJ1bGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzaGVldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBydWxlczogc2hlZXQuY3NzUnVsZXMsXG4gICAgICAgICAgaHJlZjogc2hlZXQuaHJlZlxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1N0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogJyArIHNoZWV0LmhyZWYsIGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHZhciBpbmxpbmVDc3MgPSBmdW5jdGlvbiBpbmxpbmVDc3MoZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3JlZiA9IG9wdGlvbnMgfHwge30sXG4gICAgICBzZWxlY3RvclJlbWFwID0gX3JlZi5zZWxlY3RvclJlbWFwLFxuICAgICAgbW9kaWZ5U3R5bGUgPSBfcmVmLm1vZGlmeVN0eWxlLFxuICAgICAgbW9kaWZ5Q3NzID0gX3JlZi5tb2RpZnlDc3MsXG4gICAgICBmb250cyA9IF9yZWYuZm9udHMsXG4gICAgICBleGNsdWRlVW51c2VkQ3NzID0gX3JlZi5leGNsdWRlVW51c2VkQ3NzO1xuICAgIHZhciBnZW5lcmF0ZUNzcyA9IG1vZGlmeUNzcyB8fCBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBzZWwgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICAgIHZhciBwcm9wcyA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocHJvcGVydGllcykgOiBwcm9wZXJ0aWVzO1xuICAgICAgcmV0dXJuIHNlbCArICd7JyArIHByb3BzICsgJ31cXG4nO1xuICAgIH07XG4gICAgdmFyIGNzcyA9IFtdO1xuICAgIHZhciBkZXRlY3RGb250cyA9IHR5cGVvZiBmb250cyA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGZvbnRMaXN0ID0gZm9udHMgfHwgW107XG4gICAgc3R5bGVTaGVldFJ1bGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBydWxlcyA9IF9yZWYyLnJ1bGVzLFxuICAgICAgICBocmVmID0gX3JlZjIuaHJlZjtcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcbiAgICAgIEFycmF5LmZyb20ocnVsZXMpLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBydWxlLnN0eWxlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKHF1ZXJ5KGVsLCBydWxlLnNlbGVjdG9yVGV4dCkpIGNzcy5wdXNoKGdlbmVyYXRlQ3NzKHJ1bGUuc2VsZWN0b3JUZXh0LCBydWxlLnN0eWxlLmNzc1RleHQpKTtlbHNlIGlmIChkZXRlY3RGb250cyAmJiBydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgIHZhciBmb250ID0gZGV0ZWN0Q3NzRm9udChydWxlLCBocmVmKTtcbiAgICAgICAgICAgIGlmIChmb250KSBmb250TGlzdC5wdXNoKGZvbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWV4Y2x1ZGVVbnVzZWRDc3MpIHtcbiAgICAgICAgICAgIGNzcy5wdXNoKHJ1bGUuY3NzVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5saW5lRm9udHMoZm9udExpc3QpLnRoZW4oZnVuY3Rpb24gKGZvbnRDc3MpIHtcbiAgICAgIHJldHVybiBjc3Muam9pbignXFxuJykgKyBmb250Q3NzO1xuICAgIH0pO1xuICB9O1xuICB2YXIgZG93bmxvYWRPcHRpb25zID0gZnVuY3Rpb24gZG93bmxvYWRPcHRpb25zKCkge1xuICAgIGlmICghbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IgJiYgISgnZG93bmxvYWQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvcHVwOiB3aW5kb3cub3BlbigpXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zLCBkb25lKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuICAgIHZhciBfcmVmMyA9IG9wdGlvbnMgfHwge30sXG4gICAgICBfcmVmMyRsZWZ0ID0gX3JlZjMubGVmdCxcbiAgICAgIGxlZnQgPSBfcmVmMyRsZWZ0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZjMkbGVmdCxcbiAgICAgIF9yZWYzJHRvcCA9IF9yZWYzLnRvcCxcbiAgICAgIHRvcCA9IF9yZWYzJHRvcCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYzJHRvcCxcbiAgICAgIHcgPSBfcmVmMy53aWR0aCxcbiAgICAgIGggPSBfcmVmMy5oZWlnaHQsXG4gICAgICBfcmVmMyRzY2FsZSA9IF9yZWYzLnNjYWxlLFxuICAgICAgc2NhbGUgPSBfcmVmMyRzY2FsZSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYzJHNjYWxlLFxuICAgICAgX3JlZjMkcmVzcG9uc2l2ZSA9IF9yZWYzLnJlc3BvbnNpdmUsXG4gICAgICByZXNwb25zaXZlID0gX3JlZjMkcmVzcG9uc2l2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmMyRyZXNwb25zaXZlLFxuICAgICAgX3JlZjMkZXhjbHVkZUNzcyA9IF9yZWYzLmV4Y2x1ZGVDc3MsXG4gICAgICBleGNsdWRlQ3NzID0gX3JlZjMkZXhjbHVkZUNzcyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmMyRleGNsdWRlQ3NzO1xuICAgIHJldHVybiBpbmxpbmVJbWFnZXMoZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKG9wdGlvbnMgfHwge30pLmJhY2tncm91bmRDb2xvciB8fCBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB2YXIgX2dldERpbWVuc2lvbnMgPSBnZXREaW1lbnNpb25zKGVsLCBjbG9uZSwgdywgaCksXG4gICAgICAgIHdpZHRoID0gX2dldERpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9nZXREaW1lbnNpb25zLmhlaWdodDtcbiAgICAgIGlmIChlbC50YWdOYW1lICE9PSAnc3ZnJykge1xuICAgICAgICBpZiAoZWwuZ2V0QkJveCkge1xuICAgICAgICAgIGlmIChjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd2ZXJzaW9uJywgJzEuMScpO1xuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgW2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodF0uam9pbignICcpKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxOcywgJ3htbG5zJywgc3ZnTnMpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbE5zLCAneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICogc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCAqIHNjYWxlKTtcbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20oY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKSkuZm9yRWFjaChmdW5jdGlvbiAoZm9yZWlnbk9iamVjdCkge1xuICAgICAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKHhtbE5zLCAneG1sbnMnLCBmb3JlaWduT2JqZWN0LnRhZ05hbWUgPT09ICdzdmcnID8gc3ZnTnMgOiB4aHRtbE5zKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGV4Y2x1ZGVDc3MpIHtcbiAgICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgdmFyIHNyYyA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgaWYgKHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nKSBkb25lKHNyYywgd2lkdGgsIGhlaWdodCk7ZWxzZSByZXR1cm4ge1xuICAgICAgICAgIHNyYzogc3JjLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlubGluZUNzcyhlbCwgb3B0aW9ucykudGhlbihmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSAnPCFbQ0RBVEFbXFxuJyArIGNzcyArICdcXG5dXT4nO1xuICAgICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgICAgdmFyIHNyYyA9IG91dGVyLmlubmVySFRNTC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGRvbmUgPT09ICdmdW5jdGlvbicpIGRvbmUoc3JjLCB3aWR0aCwgaGVpZ2h0KTtlbHNlIHJldHVybiB7XG4gICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zLCBkb25lKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuICAgIHJldHVybiBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgc3JjID0gX3JlZjQuc3JjLFxuICAgICAgICB3aWR0aCA9IF9yZWY0LndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmNC5oZWlnaHQ7XG4gICAgICB2YXIgc3ZnWG1sID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzcmMpKTtcbiAgICAgIGlmICh0eXBlb2YgZG9uZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb25lKHN2Z1htbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3ZnWG1sO1xuICAgIH0pO1xuICB9O1xuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zLCBkb25lKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuICAgIHZhciBfcmVmNSA9IG9wdGlvbnMgfHwge30sXG4gICAgICBfcmVmNSRlbmNvZGVyVHlwZSA9IF9yZWY1LmVuY29kZXJUeXBlLFxuICAgICAgZW5jb2RlclR5cGUgPSBfcmVmNSRlbmNvZGVyVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2ltYWdlL3BuZycgOiBfcmVmNSRlbmNvZGVyVHlwZSxcbiAgICAgIF9yZWY1JGVuY29kZXJPcHRpb25zID0gX3JlZjUuZW5jb2Rlck9wdGlvbnMsXG4gICAgICBlbmNvZGVyT3B0aW9ucyA9IF9yZWY1JGVuY29kZXJPcHRpb25zID09PSB1bmRlZmluZWQgPyAwLjggOiBfcmVmNSRlbmNvZGVyT3B0aW9ucyxcbiAgICAgIGNhbnZnID0gX3JlZjUuY2Fudmc7XG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uIGNvbnZlcnRUb1BuZyhfcmVmNikge1xuICAgICAgdmFyIHNyYyA9IF9yZWY2LnNyYyxcbiAgICAgICAgd2lkdGggPSBfcmVmNi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjYuaGVpZ2h0O1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHZhciBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpbztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvO1xuICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoICsgJ3B4JztcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKHBpeGVsUmF0aW8sIDAsIDAsIHBpeGVsUmF0aW8sIDAsIDApO1xuICAgICAgaWYgKGNhbnZnKSBjYW52ZyhjYW52YXMsIHNyYyk7ZWxzZSBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgdmFyIHBuZyA9IHZvaWQgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwoZW5jb2RlclR5cGUsIGVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvciB8fCBlLm5hbWUgPT09ICdTZWN1cml0eUVycm9yJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHRocm93IGU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRvbmUgPT09ICdmdW5jdGlvbicpIGRvbmUocG5nLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwbmcpO1xuICAgIH07XG4gICAgaWYgKGNhbnZnKSByZXR1cm4gb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zKS50aGVuKGNvbnZlcnRUb1BuZyk7ZWxzZSByZXR1cm4gb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHVyaSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjb252ZXJ0VG9Qbmcoe1xuICAgICAgICAgICAgc3JjOiBpbWFnZSxcbiAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlamVjdCgnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyArIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpICsgJ09wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyXFwncyBkaWFnbm9zaXNcXG4nICsgdXJpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbiAobmFtZSwgdXJpLCBvcHRpb25zKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7ZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAoJ2Rvd25sb2FkJyBpbiBzYXZlTGluaykge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIHdoaWxlIGdldHRpbmcgb2JqZWN0IFVSTC4gRmFsbGluZyBiYWNrIHRvIHN0cmluZyBVUkwuJyk7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBvcHVwKSB7XG4gICAgICAgIG9wdGlvbnMucG9wdXAuZG9jdW1lbnQudGl0bGUgPSBuYW1lO1xuICAgICAgICBvcHRpb25zLnBvcHVwLmxvY2F0aW9uLnJlcGxhY2UodXJpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBkb3dubG9hZE9wdHMgPSBkb3dubG9hZE9wdGlvbnMoKTsgLy8gZG9uJ3QgaW5saW5lLCBjYW4ndCBiZSBhc3luY1xuICAgIHJldHVybiByZXF1aXJlRG9tTm9kZVByb21pc2UoZWwpLnRoZW4oZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMgfHwge30pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVyaSkge1xuICAgICAgcmV0dXJuIG91dCQuZG93bmxvYWQobmFtZSwgdXJpLCBkb3dubG9hZE9wdHMpO1xuICAgIH0pO1xuICB9O1xuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBkb3dubG9hZE9wdHMgPSBkb3dubG9hZE9wdGlvbnMoKTsgLy8gZG9uJ3QgaW5saW5lLCBjYW4ndCBiZSBhc3luY1xuICAgIHJldHVybiByZXF1aXJlRG9tTm9kZVByb21pc2UoZWwpLnRoZW4oZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucyB8fCB7fSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodXJpKSB7XG4gICAgICByZXR1cm4gb3V0JC5kb3dubG9hZChuYW1lLCB1cmksIGRvd25sb2FkT3B0cyk7XG4gICAgfSk7XG4gIH07XG59KSgpOyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyB0YWtlLCB0YXAsIHN3aXRjaE1hcCwgb2YsIGNhdGNoRXJyb3IsIGZvcmtKb2luLCBtYXAsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICdzcmMvYXBwL21vZGVscy9nYW1lJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENoYW1waW9uc2hpcFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2NoYW1waW9uc2hpcC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwic2F2ZS1zdmctYXMtcG5nXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZ2FtZS1wcmV2aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ2FtZS1wcmV2aWV3LnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2FtZS1wcmV2aWV3LnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVQcmV2aWV3UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgZ2FtZTogR2FtZTtcbiAgZ2FtZSQ6IE9ic2VydmFibGU8R2FtZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2FtZSA9IHRoaXMubmF2UGFyYW1zLmdldChcImRhdGFcIik7XG4gICAgdGhpcy5nYW1lJCA9IG9mKHRoaXMuZ2FtZSk7XG4gIH1cbiAgc2F2ZUltYWdlKGdhbWVJZCkge1xuXG4gICBcbiAgICBzdmcuc2F2ZVN2Z0FzUG5nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKSxcbiAgICAgIFwiZGlhZ3JhbS5wbmdcIilcbiAgIC8qIHZhciBjYW52ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2FtZUlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB2YXIgaW1hZ2UgPSBjYW52XG4gICAgICAudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpXG4gICAgICAucmVwbGFjZShcImltYWdlL3BuZ1wiLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTsgLy9Db252ZXJ0IGltYWdlIHRvICdvY3RldC1zdHJlYW0nIChKdXN0IGEgZG93bmxvYWQsIHJlYWxseSlcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGltYWdlO1xuXG4gICAgc3ZnLnNhdmVTdmdBc1BuZyhcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdhbWVJZClbMF0sXG4gICAgICBcImRpYWdyYW0ucG5nXCJcbiAgICApOyovXG5cbiAgfVxuIFxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICAgIC8vIHRoaXMubmF2Q29udHJvbGxlci5wb3AoKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5nYW1lLCBcImNvbmZpcm1cIik7XG4gICAgLyp0aGlzLm5hdkNvbnRyb2xsZXIubmF2aWdhdGVCYWNrKFwiY2hhbXBpb25zaGlwXCIsIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHJvbGU6IFwiY29uZmlybVwiLFxuICAgICAgICBkYXRhOiB0aGlzLmdhbWUsXG4gICAgICB9LFxuICAgIH0pOyovXG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJnYW1lJCB8IGFzeW5jIGFzIGdhbWVcIj5cbiAgPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG4gIDxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24uZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuICAgIDxnYW1lLXByZXZpZXcgY2x1Yj1cInt7Z2FtZS5jbHViUmVmLmlkfX1cIiBnYW1lPVwie3tnYW1lLmlkfX1cIj48L2dhbWUtcHJldmlldz5cbiAgPC9pb24tY29udGVudD4gICIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWxlcnRDb250cm9sbGVyLFxuICBJb25JdGVtU2xpZGluZyxcbiAgLy8gSW9uUm91dGVyT3V0bGV0LFxuICBNZW51Q29udHJvbGxlcixcbiAgTW9kYWxDb250cm9sbGVyLFxuICBOYXZDb250cm9sbGVyLFxuICBUb2FzdENvbnRyb2xsZXIsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAYW5ndWxhci9maXJlL2F1dGhcIjtcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIG9mLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvZ2FtZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IENoYW1waW9uc2hpcFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9jaGFtcGlvbnNoaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBDaGFtcGlvbnNoaXBEZXRhaWxQYWdlIH0gZnJvbSBcIi4uL2NoYW1waW9uc2hpcC1kZXRhaWwvY2hhbXBpb25zaGlwLWRldGFpbC5wYWdlXCI7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IEdhbWVQcmV2aWV3UGFnZSB9IGZyb20gXCIuLi9nYW1lLXByZXZpZXcvZ2FtZS1wcmV2aWV3LnBhZ2VcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtY2hhbXBpb25zaGlwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGFtcGlvbnNoaXAucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NoYW1waW9uc2hpcC5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbXBpb25zaGlwUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcInRlYW1cIilcbiAgdGVhbSE6IFRlYW07XG4gIEBJbnB1dChcImlzTW9kYWxcIilcbiAgaXNNb2RhbCE6IGJvb2xlYW47XG4gIHNrZWxldG9uID0gbmV3IEFycmF5KDEyKTtcbiAgdXNlciQhOiBPYnNlcnZhYmxlPFVzZXI+O1xuICB1c2VyITogVXNlcjtcblxuICBnYW1lTGlzdCQhOiBPYnNlcnZhYmxlPEdhbWVbXT47XG4gIGdhbWVMaXN0UGFzdCQhOiBPYnNlcnZhYmxlPEdhbWVbXT47XG4gIHRlYW1SYW5raW5ncyQhOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICAvKmdhbWVMaXN0QmFja3VwJDogT2JzZXJ2YWJsZTxHYW1lW10+O1xuICBnYW1lTGlzdFBhc3RCYWNrdXAkOiBPYnNlcnZhYmxlPEdhbWVbXT47XG4gIHRlYW1SYW5raW5nc0JhY2t1cCQ6IE9ic2VydmFibGU8YW55W10+O1xuXG5cbiAgZ2FtZUxpc3RCYWNrdXA6IFN1YnNjcmlwdGlvbjtcbiAgZ2FtZUxpc3RQYXN0QmFja3VwOiBTdWJzY3JpcHRpb247XG4gICovXG5cbiAgbW9kZSA9IFwiZ2FtZXNcIjtcblxuICB0ZWFtTGlzdCQhOiBPYnNlcnZhYmxlPFRlYW1bXT47XG5cbiAgY2x1YkFkbWluTGlzdCQhOiBPYnNlcnZhYmxlPENsdWJbXT47XG4gIHRlYW1BZG1pbkxpc3QkITogT2JzZXJ2YWJsZTxUZWFtW10+O1xuXG4gIC8qZmlsdGVyTGlzdDogYW55W10gPSBbXTtcbiAgZmlsdGVyVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICovXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuICAgIC8vIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyT3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2hhbXBpb25zaGlwU2VydmljZTogQ2hhbXBpb25zaGlwU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5tZW51Q3RybC5lbmFibGUodHJ1ZSwgXCJtZW51XCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50ZWFtUmFua2luZ3MkID0gdGhpcy5nZXRUZWFtc1dpdGhSYW5raW5nc0ZvclllYXIoXCIyMDI0XCIpO1xuICAgIHRoaXMuZ2FtZUxpc3QkID0gdGhpcy5nZXRUZWFtR2FtZXNVcGNvbWluZygpO1xuICAgIHRoaXMuZ2FtZUxpc3RQYXN0JCA9IHRoaXMuZ2V0VGVhbUdhbWVzUGFzdCgpO1xuXG4gICAgdGhpcy50ZWFtQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1BZG1pbkxpc3QoKTtcbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgfVxuICBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0OiBhbnlbXSwgY2x1YklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2x1YkFkbWluTGlzdCAmJiBjbHViQWRtaW5MaXN0LnNvbWUoY2x1YiA9PiBjbHViLmlkID09PSBjbHViSWQpO1xuICB9XG4gIGlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3Q6IGFueVtdLCB0ZWFtSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHRlYW1BZG1pbkxpc3QsIHRlYW1JZClcbiAgICByZXR1cm4gdGVhbUFkbWluTGlzdCAmJiB0ZWFtQWRtaW5MaXN0LnNvbWUodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xuICB9XG5cbiAgZ2V0VGVhbXNXaXRoUmFua2luZ3NGb3JZZWFyKHllYXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICAvLyB0YXAoKHVzZXIpID0+IGNvbnNvbGUubG9nKFwiVXNlcjpcIiwgdXNlcikpLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTsgLy8gSWYgbm8gdXNlciwgcmV0dXJuIGFuIGVtcHR5IGFycmF5XG4gICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRVc2VyVGVhbVJlZnModXNlcik7XG4gICAgICB9KSxcbiAgICAgIC8vIHRhcCgodGVhbXMpID0+IGNvbnNvbGUubG9nKFwiVGVhbXM6XCIsIHRlYW1zKSksXG4gICAgICBtZXJnZU1hcCgodGVhbXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRlYW0uaWQpIHtcbiAgICAgICAgICB0ZWFtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnRlYW0uaWQsXG4gICAgICAgICAgICBjbHViSWQ6IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgbG9nbzogXCJcIixcbiAgICAgICAgICAgIHdlYnNpdGU6IFwiXCIsXG4gICAgICAgICAgICBwb3J0cmFpdDogXCJcIixcbiAgICAgICAgICAgIGxpZ2E6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgdXBkYXRlZDogVGltZXN0YW1wLm5vdygpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGVhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZWxldmFudFRlYW1zID0gdGhpcy50ZWFtICYmIHRoaXMudGVhbS5pZCA/IHRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0uaWQgPT09IHRoaXMudGVhbS5pZCkgOiB0ZWFtcztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWxldmFudCB0ZWFtcyA6IFwiLCByZWxldmFudFRlYW1zKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgcmVsZXZhbnRUZWFtcy5tYXAoKHRlYW0pID0+XG5cblxuICAgICAgICAgICAgY29tYmluZUxhdGVzdCh7XG4gICAgICAgICAgICAgIHRlYW1EZXRhaWxzOiBvZih0ZWFtKSxcbiAgICAgICAgICAgICAgcmFua2luZ3NUYWJsZTogdGhpcy5jaGFtcGlvbnNoaXBTZXJ2aWNlLmdldFRlYW1SYW5raW5nVGFibGUoXG4gICAgICAgICAgICAgICAgdGVhbS5pZCxcbiAgICAgICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHJhbmtpbmdEZXRhaWxzOiB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZ2V0VGVhbVJhbmtpbmcoXG4gICAgICAgICAgICAgICAgdGVhbS5pZCxcbiAgICAgICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgICB0YXAoZGF0YT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtYXAoKHsgdGVhbURldGFpbHMsIHJhbmtpbmdzVGFibGUsIHJhbmtpbmdEZXRhaWxzIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGVhbURldGFpbHMsXG4gICAgICAgICAgICAgICAgdGVhbUlkOiB0ZWFtRGV0YWlscy5pZCxcbiAgICAgICAgICAgICAgICByYW5raW5nczogcmFua2luZ3NUYWJsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKChhLnJhbmtpbmcgYXMgbnVtYmVyKSAtIGIucmFua2luZykgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHJhbmtpbmdEZXRhaWxzLFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgIC8vIHRhcCgocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhcIlRlYW0gd2l0aCByYW5raW5ncyBhbmQgZGV0YWlsczpcIiwgcmVzdWx0KSlcbiAgICAgICAgICAgICksXG4gICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICAvLyB0YXAoKHJlc3VsdHMpID0+IGNvbnNvbGUubG9nKFwiRmluYWwgcmVzdWx0czpcIiwgcmVzdWx0cykpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRUZWFtc1dpdGhSYW5raW5nc0ZvclllYXI6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0VGVhbUdhbWVzVXBjb21pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldFVzZXJUZWFtUmVmcyh1c2VyKTtcbiAgICAgIH0pLFxuICAgICAgbWVyZ2VNYXAoKHRlYW1zKSA9PiB7XG4gICAgICAgIC8vIEFkZCB0aGUgc3BlY2lmaWMgdGVhbSBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRlYW0uaWQpIHtcbiAgICAgICAgICB0ZWFtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnRlYW0uaWQsXG4gICAgICAgICAgICBjbHViSWQ6IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgbG9nbzogXCJcIixcbiAgICAgICAgICAgIHdlYnNpdGU6IFwiXCIsXG4gICAgICAgICAgICBwb3J0cmFpdDogXCJcIixcbiAgICAgICAgICAgIGxpZ2E6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgdXBkYXRlZDogVGltZXN0YW1wLm5vdygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBlbXB0eSBpZiB0aGVyZSBhcmUgbm8gdGVhbXNcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gRmlsdGVyIHRvIGdldCBvbmx5IHRoZSBzcGVjaWZpYyB0ZWFtIGlmIGB0aGlzLnRlYW0uaWRgIGlzIHNldFxuICAgICAgICBjb25zdCByZWxldmFudFRlYW1zID0gdGhpcy50ZWFtICYmIHRoaXMudGVhbS5pZCA/IHRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0uaWQgPT09IHRoaXMudGVhbS5pZCkgOiB0ZWFtcztcbiAgXG4gICAgICAgIC8vIEZldGNoIGdhbWVzIGZvciBhbGwgcmVsZXZhbnQgdGVhbXNcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgcmVsZXZhbnRUZWFtcy5tYXAoKHRlYW0pID0+XG4gICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZ2V0VGVhbUdhbWVzUmVmcyh0ZWFtLmlkKS5waXBlKFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBnZXRUZWFtR2FtZXNSZWZzOlwiLCB0ZWFtLmlkLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBwZXJtaXNzaW9uIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKCh0ZWFtR2FtZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGVhbUdhbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgICB0ZWFtR2FtZXMubWFwKChnYW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZ2V0VGVhbUdhbWVBdHRlbmRlZXNSZWYodGVhbS5pZCwgZ2FtZS5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBhdHRlbmRlZXM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBwZXJtaXNzaW9uIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRUZWFtUmVmKHRlYW0uaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBlcm1pc3Npb24gZXJyb3IgaW4gZmV0Y2hpbmcgZ2V0VGVhbVJlZjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHBlcm1pc3Npb24gZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApLCAvLyBGZXRjaGluZyB0ZWFtIGRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtYXAoKFthdHRlbmRlZXMsIHRlYW1EZXRhaWxzXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckF0dGVuZGVlID0gYXR0ZW5kZWVzLmZpbmQoKGF0dCkgPT4gYXR0LmlkID09PSB0aGlzLnVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IHRlYW1EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdXNlckF0dGVuZGVlID8gdXNlckF0dGVuZGVlLnN0YXR1cyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50QXR0ZW5kZWVzOiBhdHRlbmRlZXMuZmlsdGVyKChhdHQpID0+IGF0dC5zdGF0dXMgPT09IHRydWUpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbUlkOiB0ZWFtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50QXR0ZW5kZWVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbUlkOiB0ZWFtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1hcCgoZ2FtZXNXaXRoQXR0ZW5kZWVzKSA9PiBnYW1lc1dpdGhBdHRlbmRlZXMpLCAvLyBDb21iaW5lIGdhbWVzIGZvciBlYWNoIHRlYW1cbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGdhbWVzIGZvciB0ZWFtOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgIC8vIEZsYXR0ZW4gYWxsIGdhbWVzIGFjcm9zcyBhbGwgdGVhbXMgaW50byBhIHNpbmdsZSBhcnJheVxuICAgICAgICAgIG1hcCgodGVhbXNHYW1lcykgPT4gdGVhbXNHYW1lcy5mbGF0KCkpLFxuICAgICAgICAgIC8vIHRhcCgoYWxsR2FtZXMpID0+IGNvbnNvbGUubG9nKFwiQWxsIGdhbWVzOlwiLCBhbGxHYW1lcykpLFxuICBcbiAgICAgICAgICAvLyBTb3J0IGdhbWVzIGdsb2JhbGx5IGJ5IHRoZWlyIGBkYXRlVGltZWAgaW4gYXNjZW5kaW5nIG9yZGVyICh1cGNvbWluZyBnYW1lcylcbiAgICAgICAgICBtYXAoKGFsbEdhbWVzKSA9PiBhbGxHYW1lcy5zb3J0KChhLCBiKSA9PiBhLmRhdGVUaW1lLnNlY29uZHMgLSBiLmRhdGVUaW1lLnNlY29uZHMpKSxcbiAgXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0VGVhbUdhbWVzVXBjb21pbmc6XCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cblxuXG4gIGdldFRlYW1HYW1lc1Bhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlclRlYW1SZWZzKHVzZXIpO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcCgodGVhbXMpID0+IHtcbiAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IHRlYW0gKGlmIGFueSkgdG8gdGhlIGxpc3RcbiAgICAgICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRlYW0uaWQpIHtcbiAgICAgICAgICB0ZWFtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnRlYW0uaWQsXG4gICAgICAgICAgICBjbHViSWQ6IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgbG9nbzogXCJcIixcbiAgICAgICAgICAgIHdlYnNpdGU6IFwiXCIsXG4gICAgICAgICAgICBwb3J0cmFpdDogXCJcIixcbiAgICAgICAgICAgIGxpZ2E6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgdXBkYXRlZDogVGltZXN0YW1wLm5vdygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIElmIG5vIHRlYW1zIGZvdW5kLCByZXR1cm4gYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gRmlsdGVyIHRvIGdldCBvbmx5IHRoZSBzcGVjaWZpYyB0ZWFtIGlmIGB0aGlzLnRlYW0uaWRgIGlzIHNldFxuICAgICAgICBjb25zdCByZWxldmFudFRlYW1zID0gdGhpcy50ZWFtICYmIHRoaXMudGVhbS5pZCA/IHRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0uaWQgPT09IHRoaXMudGVhbS5pZCkgOiB0ZWFtcztcbiAgXG4gICAgICAgIC8vIEZldGNoIGdhbWVzIGZvciBhbGwgcmVsZXZhbnQgdGVhbXNcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgcmVsZXZhbnRUZWFtcy5tYXAoKHRlYW0pID0+XG4gICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZ2V0VGVhbUdhbWVzUGFzdFJlZnModGVhbS5pZCkucGlwZShcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBlcm1pc3Npb24gZXJyb3IgaW4gZmV0Y2hpbmcgZ2V0VGVhbUdhbWVzUmVmczpcIiwgdGVhbS5pZCwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgcGVybWlzc2lvbiBlcnJvciBvY2N1cnNcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgodGVhbUdhbWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRlYW1HYW1lcy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgICB0ZWFtR2FtZXMubWFwKChnYW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZ2V0VGVhbUdhbWVBdHRlbmRlZXNSZWYodGVhbS5pZCwgZ2FtZS5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBhdHRlbmRlZXM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBwZXJtaXNzaW9uIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRUZWFtUmVmKHRlYW0uaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBlcm1pc3Npb24gZXJyb3IgaW4gZmV0Y2hpbmcgZ2V0VGVhbVJlZjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTsgLy8gUmV0dXJuIGFuIGVtcHR5IG9iamVjdCBpZiBwZXJtaXNzaW9uIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgKSwgLy8gRmV0Y2hpbmcgdGVhbSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKChbYXR0ZW5kZWVzLCB0ZWFtRGV0YWlsc10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJBdHRlbmRlZSA9IGF0dGVuZGVlcy5maW5kKChhdHQpID0+IGF0dC5pZCA9PT0gdGhpcy51c2VyLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiB0ZWFtRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHVzZXJBdHRlbmRlZSA/IHVzZXJBdHRlbmRlZS5zdGF0dXMgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogYXR0ZW5kZWVzLmZpbHRlcigoYXR0KSA9PiBhdHQuc3RhdHVzID09PSB0cnVlKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1JZDogdGVhbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5nYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1JZDogdGVhbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtYXAoKGdhbWVzV2l0aEF0dGVuZGVlcykgPT4gZ2FtZXNXaXRoQXR0ZW5kZWVzKSwgLy8gQ29tYmluZSBnYW1lcyBmb3IgYSB0ZWFtXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBnYW1lcyBmb3IgdGVhbTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgLy8gRmxhdHRlbiB0byBnZXQgYWxsIGdhbWVzIGFjcm9zcyBhbGwgdGVhbXNcbiAgICAgICAgICBtYXAoKHRlYW1zR2FtZXMpID0+IHRlYW1zR2FtZXMuZmxhdCgpKSxcbiAgICAgICAgICAvLyB0YXAoKGFsbEdhbWVzKSA9PiBjb25zb2xlLmxvZyhcIkFsbCBnYW1lczpcIiwgYWxsR2FtZXMpKSxcbiAgICAgICAgICAvLyBTb3J0IGdhbWVzIGdsb2JhbGx5IGJ5IGRhdGUgKG5ld2VzdCBmaXJzdClcbiAgICAgICAgICBtYXAoKGFsbEdhbWVzKSA9PiBhbGxHYW1lcy5zb3J0KChhLCBiKSA9PiBiLmRhdGVUaW1lLnNlY29uZHMgLSBhLmRhdGVUaW1lLnNlY29uZHMpKSxcbiAgXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0VGVhbUdhbWVzUGFzdDpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvcGVuQ2hhbXBpb25zaGlwRGV0YWlsTW9kYWwoZ2FtZTogR2FtZSwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgICBsZXQgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZ2FtZSksXG4gICAgICAgIGlzRnV0dXJlOiBpc0Z1dHVyZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhleHRyYXMpO1xuICAgIC8qdGhpcy5uYXZDdHJsXG4gICAgICAubmF2aWdhdGVGb3J3YXJkKFtcImNoYW1waW9uc2hpcC1kZXRhaWxzXCJdLCBleHRyYXMpXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTsqL1xuICAgIFxuXG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDaGFtcGlvbnNoaXBEZXRhaWxQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgLy8gcHJlc2VudGluZ0VsZW1lbnQ6IHRoaXMucm91dGVyT3V0bGV0Lm5hdGl2ZUVsLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIGNzc0NsYXNzOiAndHJhbnNwYXJlbnQtbW9kYWwnLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogZ2FtZSxcbiAgICAgICAgaXNGdXR1cmU6IGlzRnV0dXJlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIC8vIExpc3QgaXRlbVxuICBhc3luYyB0b2dnbGUoc3RhdHVzOiBib29sZWFuLCBnYW1lOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCB0ZWFtICR7Z2FtZS50ZWFtSWR9IGFuZCBnYW1lICR7Z2FtZS5pZH1gXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhnYW1lKVxuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IGdhbWUuZGF0ZVRpbWUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcihnYW1lLnRpbWUuc3Vic3RyaW5nKDAsIDIpKSk7XG4gICAgY29uc29sZS5sb2cobmV3U3RhcnREYXRlKTtcblxuICAgIC8vIEdldCB0ZWFtIHRocmVzaG9sZCB2aWEgdHJhaW5pbmcudGVhbUlkXG4gICAgY29uc29sZS5sb2coXCJHcmVuendlcnQgXCIpXG4gICAgY29uc3QgY2hhbXBpb25zaGlwVHJlc2hvbGQgPSBnYW1lLnRlYW0uY2hhbXBpb25zaGlwVGhyZXNob2xkIHx8IDA7XG4gICAgY29uc29sZS5sb2coY2hhbXBpb25zaGlwVHJlc2hvbGQpO1xuICAgIC8vIFZlcnDDpHRldGUgQWJtZWxkdW5nP1xuICAgIGlmICgoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgPCAoMTAwMCAqIDYwICogNjAgKiBjaGFtcGlvbnNoaXBUcmVzaG9sZCkpICYmIHN0YXR1cyA9PSBmYWxzZSAmJiBjaGFtcGlvbnNoaXBUcmVzaG9sZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0b28gbGF0ZVwiKTtcbiAgICAgIGF3YWl0IHRoaXMudG9vTGF0ZVRvZ2dsZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9LXG4gICAgICBhd2FpdCB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2Uuc2V0VGVhbUdhbWVBdHRlbmRlZVN0YXR1cyhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBnYW1lLnRlYW1JZCxcbiAgICAgICAgZ2FtZS5pZFxuICAgICAgKTtcbiAgICAgIHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgfVxuXG4gIH1cblxuICAvL1NsaWRpbmdcbiAgYXN5bmMgdG9nZ2xlSXRlbShcbiAgICBzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc3RhdHVzOiBib29sZWFuLFxuICAgIGdhbWU6IGFueVxuICApIHtcbiAgICBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgU2V0IFN0YXR1cyAke3N0YXR1c30gZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgdGVhbSAke2dhbWUudGVhbUlkfSBhbmQgdHJhaW5pbmcgJHtnYW1lLmlkfWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGdhbWUpXG4gICAgY29uc3QgbmV3U3RhcnREYXRlID0gZ2FtZS5kYXRlVGltZS50b0RhdGUoKTtcbiAgICBuZXdTdGFydERhdGUuc2V0SG91cnMoTnVtYmVyKGdhbWUudGltZS5zdWJzdHJpbmcoMCwgMikpKTtcbiAgICBjb25zb2xlLmxvZyhuZXdTdGFydERhdGUpO1xuXG4gICAgLy8gR2V0IHRlYW0gdGhyZXNob2xkIHZpYSB0cmFpbmluZy50ZWFtSWRcbiAgICBjb25zb2xlLmxvZyhcIkdyZW56d2VydCBcIilcbiAgICBjb25zdCBjaGFtcGlvbnNoaXBUcmVzaG9sZCA9IGdhbWUudGVhbS5jaGFtcGlvbnNoaXBUaHJlc2hvbGQgfHwgMDtcbiAgICBjb25zb2xlLmxvZyhjaGFtcGlvbnNoaXBUcmVzaG9sZCk7XG4gICAgLy8gVmVycMOkdGV0ZSBBYm1lbGR1bmc/XG4gICAgaWYgKCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA8ICgxMDAwICogNjAgKiA2MCAqIGNoYW1waW9uc2hpcFRyZXNob2xkKSkgJiYgc3RhdHVzID09IGZhbHNlICYmIGNoYW1waW9uc2hpcFRyZXNob2xkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRvbyBsYXRlXCIpO1xuICAgICAgYXdhaXQgdGhpcy50b29MYXRlVG9nZ2xlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT0tcbiAgICAgIGF3YWl0IHRoaXMuY2hhbXBpb25zaGlwU2VydmljZS5zZXRUZWFtR2FtZUF0dGVuZGVlU3RhdHVzKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGdhbWUudGVhbUlkLFxuICAgICAgICBnYW1lLmlkXG4gICAgICApO1xuICAgICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmNoYW5nZXNfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgc2hhcmVTb2NpYWxNZWRpYShzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGdhbWUpIHtcbiAgICBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBHYW1lUHJldmlld1BhZ2UsXG4gICAgICAvLyBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogZ2FtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG5cblxuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICB9XG5cblxuXG4gIGFzeW5jIGRlbGV0ZUdhbWUoc2xpZGluZ0l0ZW06IElvbkl0ZW1TbGlkaW5nLCBnYW1lKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICBhd2FpdCB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2UuZGVsZXRlVGVhbUdhbWUoZ2FtZS50ZWFtSWQsIGdhbWUuaWQpO1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3RyYWluaW5nX2RlbGV0ZWRcIikpLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pO1xuICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvb0xhdGVUb2dnbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIkFibWVsZGVuIG5pY2h0IG3DtmdsaWNoXCIsXG4gICAgICBtZXNzYWdlOiBcIkJpdHRlIG1lbGRlIGRpY2ggZGlyZWt0IGJlaW0gVHJhaW5lcnRlYW0gdW0gZGljaCBhYnp1bWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG4gIC8qICBhc3luYyBvcGVuRmlsdGVyKGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgYWxlcnRJbnB1dHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWx0ZXJMaXN0KSB7XG4gICAgICBhbGVydElucHV0cy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGl0ZW0ubmFtZSxcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgY2hlY2tlZDogaXRlbS5pZCA9PSB0aGlzLmZpbHRlclZhbHVlLFxuICAgICAgICB2YWx1ZTogaXRlbS5pZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6ICdOZXdzIGZpbHRlcm4nLFxuICAgICAgbWVzc2FnZTogJ05hY2ggVmVyZWluIG9kZXIgVGVhbXMgZmlsdGVybi4nLFxuICAgICAgLy8gc3ViSGVhZGVyOiAnTmFjaCBWZXJlaW4gb2RlciBUZWFtcyBmaWx0ZXJuLicsXG4gICAgICBpbnB1dHM6IGFsZXJ0SW5wdXRzLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPS1wiLFxuICAgICAgICAgIHJvbGU6IFwiY29uZmlybVwiLFxuICAgICAgICAgIGhhbmRsZXI6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxpc3QkID0gdGhpcy5nYW1lTGlzdEJhY2t1cCQucGlwZShcbiAgICAgICAgICAgICAgbWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnRlYW1JZCA9PSB2YWx1ZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkgIFxuICAgICAgICAgICAgdGhpcy5nYW1lTGlzdFBhc3QkID0gdGhpcy5nYW1lTGlzdFBhc3RCYWNrdXAkLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC50ZWFtSWQgPT0gdmFsdWUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50ZWFtUmFua2luZ3MkID0gdGhpcy50ZWFtUmFua2luZ3NCYWNrdXAkLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC50ZWFtSWQgPT0gdmFsdWUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApICAgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJhYmJyZWNoZW5cIixcbiAgICAgICAgICByb2xlOiBcImNhbmNlbFwiLFxuICAgICAgICAgIGhhbmRsZXI6YXN5bmMgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBhd2FpdCBQcmVmZXJlbmNlcy5zZXQoe1xuICAgICAgICAgICAgICBrZXk6ICd0ZWFtRmlsdGVyJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxpc3QkID0gdGhpcy5nYW1lTGlzdEJhY2t1cCQ7XG4gICAgICAgICAgICB0aGlzLmdhbWVMaXN0UGFzdCQgPSB0aGlzLmdhbWVMaXN0UGFzdEJhY2t1cCQ7XG4gICAgICAgICAgICB0aGlzLnRlYW1SYW5raW5ncyQgPSB0aGlzLnRlYW1SYW5raW5nc0JhY2t1cCQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZXM6IHsgJ2FyaWEtbGFiZWwnOiAnYWxlcnQgZGlhbG9nJyB9LFxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgfSovXG59XG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbiAqbmdJZj1cIiFpc01vZGFsXCI+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uY2hhbXBpb25zaGlwXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyAqbmdJZj1cImlzTW9kYWxcIiBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDwhLS08aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gaWQ9XCJjaGFtcGlvbnNoaXBNb3JlQnV0dG9uXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImVsbGlwc2lzLWhvcml6b250YWwtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLXBvcG92ZXIgdHJpZ2dlcj1cImNoYW1waW9uc2hpcE1vcmVCdXR0b25cIiBzaXplPVwiYXV0b1wiPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aW9uLW5vdGU+XG4gICAgICAgICAgICAgICAgICBBbGxlIFNwaWVsZVxuICAgICAgICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gdHlwZT1cImJ1dHRvblwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiBjb2xvcj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICB6dXNhZ2VuXG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+PC9pb24taXRlbT5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIiBjb2xvcj1cImRhbmdlclwiPlxuICAgICAgICAgICAgICAgIDwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIGFic2FnZW5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgPC9pb24tY29udGVudD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvaW9uLXBvcG92ZXI+XG4gICAgPC9pb24tYnV0dG9ucz4tLT5cbiAgPC9pb24tdG9vbGJhcj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tc2VnbWVudCBbKG5nTW9kZWwpXT1cIm1vZGVcIj5cbiAgICAgIDxpb24tc2VnbWVudC1idXR0b24gdmFsdWU9XCJnYW1lc1wiPlxuICAgICAgICA8aW9uLWxhYmVsPnt7XCJjaGFtcGlvbnNoaXAuZ2FtZXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1zZWdtZW50LWJ1dHRvbj5cbiAgICAgIDxpb24tc2VnbWVudC1idXR0b24gdmFsdWU9XCJyYW5raW5nXCI+XG4gICAgICAgIDxpb24tbGFiZWw+e3tcImNoYW1waW9uc2hpcC50YWJsZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLXNlZ21lbnQtYnV0dG9uPlxuXG4gICAgPC9pb24tc2VnbWVudD5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi5jaGFtcGlvbnNoaXBcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZT09J2dhbWVzJ1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnYW1lTGlzdCQgfCBhc3luYyBhcyBnYW1lTGlzdDsgZWxzZSBsb2FkaW5nXCI+XG4gICAgICA8aW9uLWxpc3QgKm5nSWY9XCJnYW1lTGlzdC5sZW5ndGggPiAwXCIgbGluZXM9XCJmdWxsXCI+XG4gICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgPGlvbi1sYWJlbD57e1wiY2hhbXBpb25zaGlwLnVwY29tbWluZ19fZ2FtZXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgPHA+e3tcImNvbW1vbi5zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tbGFiZWwgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgPHA+e3tcImNvbW1vbi5wYXJ0aWNpcGFudFwiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IGdhbWUgb2YgZ2FtZUxpc3RcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gdHlwZT1cImJ1dHRvblwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cImdhbWUuc3RhdHVzID09PSBudWxsXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwid2FybmluZ1wiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUodHJ1ZSwgZ2FtZSlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiZ2FtZS5zdGF0dXMgPT09IGZhbHNlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNsb3NlLWNpcmNsZVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoIHRydWUsIGdhbWUpXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cImdhbWUuc3RhdHVzID09PSB0cnVlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwic3VjY2Vzc1wiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShmYWxzZSwgZ2FtZSlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3BlbkNoYW1waW9uc2hpcERldGFpbE1vZGFsKGdhbWUsIHRydWUpXCI+XG4gICAgICAgICAgICAgIDxoMj57e2dhbWUubmFtZX19PC9oMj5cbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNhbGVuZGFyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIHt7Z2FtZS5kYXRlfX0ge3tnYW1lLnRpbWV9fSBVaHJcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGgzICpuZ0lmPVwiZ2FtZS5sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIHt7Z2FtZS5sb2NhdGlvbn19IHt7Z2FtZS5jaXR5fX1cbiAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIHt7Z2FtZS5saWdhfX0ge3tnYW1lLnRlYW1OYW1lfX1cbiAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICA8aDMgKm5nSWY9XCJnYW1lLnJlc3VsdCAmJiBnYW1lLnJlc3VsdCAhPSAnMDowKDA6MCknXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwicG9kaXVtLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIHt7Z2FtZS5yZXN1bHR9fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDMgKm5nSWY9XCJnYW1lLmdhbWVTdGF0dXMgJiYgZ2FtZS5nYW1lU3RhdHVzPT0nZGVsZXRlZCdcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgbmFtZT1cImNsb3NlLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICBTcGllbCBnZWzDtnNjaHRcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIiAoY2xpY2spPVwib3BlbkNoYW1waW9uc2hpcERldGFpbE1vZGFsKGdhbWUsIHRydWUpXCI+XG4gICAgICAgICAgICAgIDxpb24tYmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+e3tnYW1lLmNvdW50QXR0ZW5kZWVzfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cImdhbWUuc3RhdHVzID09PSBmYWxzZSB8fCBnYW1lLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIGdhbWUpXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKm5nSWY9XCJnYW1lLnN0YXR1cyA9PT0gdHJ1ZSB8fCBnYW1lLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIGZhbHNlLCBnYW1lKVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNoYXJlU29jaWFsTWVkaWEoaXRlbSwgZ2FtZSlcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWluc3RhZ3JhbVwiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgZ2FtZS50ZWFtSWQpXCIgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVHYW1lKGl0ZW0sIGdhbWUpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidHJhc2hcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuXG4gICAgICAgICAgPCEtLTxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJlbmRcIiAqbmdJZj1cInVzZXIgJiYgdXNlci5cIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiZWxsaXBzaXMtaG9yaXpvbnRhbC1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPi0tPlxuICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgPGlvbi1saXN0ICpuZ0lmPVwiZ2FtZUxpc3QubGVuZ3RoPT0wXCI+XG4gICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgPGlvbi1sYWJlbD57e1wiY2hhbXBpb25zaGlwLnVwY29tbWluZ19fZ2FtZXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1ub3RlPiBLZWluZSBTcGllbGUgZ2VmdW5kZW4gPC9pb24tbm90ZT5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2FtZUxpc3RQYXN0JCB8IGFzeW5jIGFzIGdhbWVMaXN0UGFzdDsgZWxzZSBsb2FkaW5nXCI+XG4gICAgICA8aW9uLWxpc3QgKm5nSWY9XCJnYW1lTGlzdFBhc3QubGVuZ3RoID4gMFwiIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNoYW1waW9uc2hpcC5wYXN0X19nYW1lc1wiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgPHA+e3tcImNvbW1vbi5zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tbGFiZWwgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgPHA+e3tcImNvbW1vbi5wYXJ0aWNpcGFudFwiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IGdhbWUgb2YgZ2FtZUxpc3RQYXN0XCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJnYW1lLnN0YXR1cyA9PT0gbnVsbFwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICBuYW1lPVwiaGVscC1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiZ2FtZS5zdGF0dXMgPT09IGZhbHNlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNsb3NlLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJnYW1lLnN0YXR1cyA9PT0gdHJ1ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiIChjbGljayk9XCJvcGVuQ2hhbXBpb25zaGlwRGV0YWlsTW9kYWwoZ2FtZSwgZmFsc2UpXCI+XG4gICAgICAgICAgICAgIDxoMj57e2dhbWUudGVhbUhvbWV9fSB2cy48L2gyPlxuICAgICAgICAgICAgICA8aDI+e3tnYW1lLnRlYW1Bd2F5fX08L2gyPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidGltZVwiPjwvaW9uLWljb24+IHt7Z2FtZS5kYXRlfX1cbiAgICAgICAgICAgICAgICB7e2dhbWUudGltZX19IFVoclxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwibG9jYXRpb25cIj48L2lvbi1pY29uPjpcbiAgICAgICAgICAgICAgICB7e2dhbWUubG9jYXRpb259fSB7e2dhbWUuY2l0eX19XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cm9waHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIHt7Z2FtZS5saWdhfX0ge3tnYW1lLnRlYW1OYW1lfX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGgzICpuZ0lmPVwiZ2FtZS5yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJwb2RpdW0tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAge3tnYW1lLnJlc3VsdH19XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCIgKGNsaWNrKT1cIm9wZW5DaGFtcGlvbnNoaXBEZXRhaWxNb2RhbChnYW1lLCBmYWxzZSlcIj5cbiAgICAgICAgICAgICAgPGlvbi1iYWRnZSBjb2xvcj1cInByaW1hcnlcIj57e2dhbWUuY291bnRBdHRlbmRlZXN9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgPC9pb24tbm90ZT5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgPCEtLTxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cImdhbWUuc3RhdHVzID09PSBmYWxzZSB8fCBnYW1lLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIGdhbWUpXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKm5nSWY9XCJnYW1lLnN0YXR1cyA9PT0gdHJ1ZSB8fCBnYW1lLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIGZhbHNlLCBnYW1lKVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPi0tPlxuICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgPGlvbi1saXN0ICpuZ0lmPVwiZ2FtZUxpc3RQYXN0Lmxlbmd0aD09MFwiPlxuICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNoYW1waW9uc2hpcC5wYXN0X19nYW1lc1wiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLW5vdGU+IEtlaW5lIFNwaWVsZSBnZWZ1bmRlbiA8L2lvbi1ub3RlPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBSQU5LSU5HIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZT09J3JhbmtpbmcnXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1SYW5raW5ncyQgfCBhc3luYyBhcyB0ZWFtUmFua2luZ3NcIj5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCBbbXVsdGlwbGVdPVwidHJ1ZVwiIFt2YWx1ZV09XCJ0ZWFtUmFua2luZ3NbMF0udGVhbUlkXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZW50cnkgb2YgdGVhbVJhbmtpbmdzXCI+XG4gICAgICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInt7ZW50cnkudGVhbUlkfX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e2VudHJ5LmRldGFpbHM/LnRpdGxlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3tlbnRyeT8uZGV0YWlscz8udGl0bGV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxpb24tZ3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCIxXCI+IzwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI1XCI+e3tcImNvbW1vbi5uYW1lXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCIzXCI+U3AvUy9OPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjJcIj5UPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjFcIj5QPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24tZ3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbSBjbGFzcz1cIm15Y2x1YlBhZGRpbmdcIiAqbmdGb3I9XCJsZXQgcmFua2luZyBvZiBlbnRyeS5yYW5raW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlPiB7e3JhbmtpbmcucmFua2luZ319IDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJ7e3JhbmtpbmcubmFtZX19XCIgc3JjPVwie3tyYW5raW5nLmltYWdlfX1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmFua2luZy5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmFua2luZy5nYW1lc319L3t7cmFua2luZy53aW5zfX0ve3tyYW5raW5nLmxvc3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjJcIj4ge3tyYW5raW5nLmdvYWxzfX0gPC9pb24tY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjFcIj4ge3tyYW5raW5nLnBvaW50c319IDwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWdyaWQ+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgICA8L2lvbi1saXN0PlxuXG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgICA8aW9uLXRleHQ+XG4gICAgICAgIDxwPjxiPiB7e1wiY2hhbXBpb25zaGlwLmxlZ2VuZFwiIHwgdHJhbnNsYXRlfX06IDwvYj48L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+U3AgPSB7e1wiY2hhbXBpb25zaGlwLmdhbWVzX190b3RhbFwiIHwgdHJhbnNsYXRlfX08L2xpPlxuICAgICAgICAgIDxsaT5TID0ge3tcImNoYW1waW9uc2hpcC52aWN0b3JpZXNcIiB8IHRyYW5zbGF0ZX19PC9saT5cbiAgICAgICAgICA8bGk+TiA9IHt7XCJjaGFtcGlvbnNoaXAuZGVmZWF0XCIgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgICAgICAgPGxpPlQgPSB7e1wiY2hhbXBpb25zaGlwLmdvYWxfX3JlY29yZFwiIHwgdHJhbnNsYXRlfX08L2xpPlxuICAgICAgICAgIDxsaT5QID0ge3tcImNoYW1waW9uc2hpcC5wb2ludHNcIiB8IHRyYW5zbGF0ZX19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvaW9uLXRleHQ+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICA8aW9uLWxpc3QgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgICA8aW9uLWdyaWQ+XG4gICAgICAgIDxpb24tcm93PlxuICAgICAgICAgIDxpb24tY29sIHNpemUtbGc9XCI0XCIgc2l6ZS1tZD1cIjZcIiBzaXplLXNtPVwiNlwiIHNpemU9XCIxMlwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNrZWxldG9uXCI+XG4gICAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgIDwvaW9uLWdyaWQ+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvaW9uLWNvbnRlbnQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLEtBQUMsV0FBWTtBQUNYLFVBQUksT0FBTyxPQUFPLFdBQVcsZUFBZSxXQUFXLE9BQU8sVUFBVSxlQUFlLENBQUMsS0FBSyxRQUFRO0FBQ3JHLFVBQUksT0FBTyxXQUFXLFlBQWEsUUFBTyxtQkFBbUIsQ0FBQyxHQUFHLFdBQVk7QUFDM0UsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUNELFdBQUssVUFBVTtBQUNmLFVBQUksUUFBUTtBQUNaLFVBQUksVUFBVTtBQUNkLFVBQUksUUFBUTtBQUNaLFVBQUksVUFBVTtBQUNkLFVBQUksV0FBVztBQUNmLFVBQUksY0FBYztBQUFBLFFBQ2hCLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQ0EsVUFBSSxZQUFZLFNBQVNBLFdBQVUsS0FBSztBQUN0QyxlQUFPLGVBQWUsZUFBZSxlQUFlO0FBQUEsTUFDdEQ7QUFDQSxVQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxJQUFJO0FBQy9DLFlBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRyxPQUFNLElBQUksTUFBTSxtREFBbUQsRUFBRTtBQUFBLE1BQzNGO0FBQ0EsVUFBSSx3QkFBd0IsU0FBU0MsdUJBQXNCLElBQUk7QUFDN0QsZUFBTyxJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFDNUMsY0FBSSxVQUFVLEVB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QSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGtCQUFBLFFBQUEsV0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxlQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsb0JBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsZ0JBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxzQkFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsZUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLG9CQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLFVBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLFFBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsYUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxVQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsUUFBQSxHQUFBLEdBQUEsQ0FBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsU0FBQSxpQkFBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLHdCQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLENBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxXQUFBLEtBQUEsUUFBQSxNQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxRQUFBLElBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsMEJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7O0FDekM3QixJQUFBLHlCQUFBLEdBQUEsY0FBQSxDQUFBLEVBQWlDLEdBQUEsYUFBQSxFQUNsQixHQUFBLGVBQUEsQ0FBQTtBQUVULElBQUEscUJBQUEsR0FBQSw2Q0FBQSxHQUFBLEdBQUEsbUJBQUEsQ0FBQTtBQUNGLElBQUEsdUJBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBcUMsSUFBQSx1QkFBQTtBQUNoRCxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLGVBQUEsQ0FBQTtBQWtDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLGFBQUEsRUFBYSxHQUFBLGVBQUEsQ0FBQTtBQUNFLElBQUEsMkJBQUEsaUJBQUEsU0FBQSwrREFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsTUFBQSw2QkFBQSxJQUFBLE1BQUEsTUFBQSxNQUFBLElBQUEsT0FBQTtBQUFBLGFBQUEsc0JBQUEsTUFBQTtJQUFBLENBQUE7QUFDWCxJQUFBLHlCQUFBLElBQUEsc0JBQUEsQ0FBQSxFQUFrQyxJQUFBLFdBQUE7QUFDckIsSUFBQSxpQkFBQSxFQUFBOztBQUFvQyxJQUFBLHVCQUFBLEVBQVk7QUFFN0QsSUFBQSx5QkFBQSxJQUFBLHNCQUFBLENBQUEsRUFBb0MsSUFBQSxXQUFBO0FBQ3ZCLElBQUEsaUJBQUEsRUFBQTs7QUFBb0MsSUFBQSx1QkFBQSxFQUFZLEVBQ3hDLEVBRVQsRUFDRjtBQUdoQixJQUFBLHlCQUFBLElBQUEsZUFBQSxDQUFBLEVBQWlDLElBQUEsY0FBQSxFQUFBLEVBQ0MsSUFBQSxhQUFBLEVBQ2pCLElBQUEsYUFBQSxFQUFBO0FBQ2EsSUFBQSxpQkFBQSxFQUFBOztBQUFxQyxJQUFBLHVCQUFBLEVBQVksRUFDN0Q7QUFFaEIsSUFBQSxxQkFBQSxJQUFBLDJDQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBLEVBQW9DLElBQUEsMkNBQUEsSUFBQSxJQUFBLGdCQUFBLENBQUEsRUEwS0UsSUFBQSwwQ0FBQSxHQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZ0NBQUE7QUFnR3hDLElBQUEsdUJBQUE7OztBQXRVWSxJQUFBLHFCQUFBLGVBQUEsSUFBQTtBQUdZLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxDQUFBLElBQUEsT0FBQTtBQUVULElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxJQUFBLHFCQUFBLENBQUE7QUFDRyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxPQUFBO0FBb0NELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsMkJBQUEsV0FBQSxJQUFBLElBQUE7QUFFRSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxvQkFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsb0JBQUEsQ0FBQTtBQU9OLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsY0FBQSxJQUFBO0FBR2lCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxJQUFBLHFCQUFBLENBQUE7QUFHYixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxRQUFBLE9BQUE7QUEwS0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxJQUFBLFFBQUEsU0FBQTs7O0FEN0xYLElBQU8sbUJBQVA7OzZFQUFPLGtCQUFnQixFQUFBLFdBQUEsb0JBQUEsVUFBQSxnRUFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwibmFtZXMiOlsiaXNFbGVtZW50IiwicmVxdWlyZURvbU5vZGUiLCJyZXF1aXJlRG9tTm9kZVByb21pc2UiLCJpc0V4dGVybmFsIiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsImFycmF5QnVmZmVyVG9CYXNlNjQiLCJnZXREaW1lbnNpb24iLCJnZXREaW1lbnNpb25zIiwicmVFbmNvZGUiLCJ1cmlUb0Jsb2IiLCJxdWVyeSIsImRldGVjdENzc0ZvbnQiLCJpbmxpbmVJbWFnZXMiLCJpbmxpbmVGb250cyIsInN0eWxlU2hlZXRSdWxlcyIsImlubGluZUNzcyIsImRvd25sb2FkT3B0aW9ucyIsInN2ZyIsIm91dGVyIiwic3JjIiwiY29udmVydFRvUG5nIiwiZWwiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
