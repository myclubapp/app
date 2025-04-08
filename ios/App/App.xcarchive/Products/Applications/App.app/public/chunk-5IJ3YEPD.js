import {
  getMode,
  setMode
} from "./chunk-T7BCX42A.js";

// node_modules/@ionic/core/dist/esm/ionic-global-ca86cf32.js
var Config = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== void 0 ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === void 0) {
      return fallback;
    }
    if (typeof val === "string") {
      return val === "true";
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
};
var config = /* @__PURE__ */ new Config();
var configFromSession = (win) => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};
var saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};
var configFromURL = (win) => {
  const configObj = {};
  win.location.search.slice(1).split("&").map((entry) => entry.split("=")).map(([key, value]) => {
    try {
      return [decodeURIComponent(key), decodeURIComponent(value)];
    } catch (e) {
      return ["", ""];
    }
  }).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
var startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var getPlatforms = (win) => setupPlatforms(win);
var isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = (win = window) => {
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
var detectPlatforms = (win) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
var isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
var isIpad = (win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
var isIphone = (win) => testUserAgent(win, /iPhone/i);
var isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
var isAndroid = (win) => testUserAgent(win, /android|sink/i);
var isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
var isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
var isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
var isDesktop = (win) => !isMobile(win);
var isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
var isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
var isCapacitorNative = (win) => {
  const capacitor = win["Capacitor"];
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
};
var isElectron = (win) => testUserAgent(win, /electron/i);
var isPWA = (win) => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
};
var testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
var matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
var defaultMode;
var getIonMode = (ref) => {
  return ref && getMode(ref) || defaultMode;
};
var initialize = (userConfig = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), {
    persistConfig: false
  }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean("persistConfig")) {
    saveConfig(win, configObj);
  }
  setupPlatforms(win);
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get("mode", doc.documentElement.getAttribute("mode") || (isPlatform(win, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  doc.documentElement.setAttribute("mode", defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  const isIonicElement = (elm) => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith("ION-");
  };
  const isAllowedIonicModeValue = (elmMode) => ["ios", "md"].includes(elmMode);
  setMode((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute("mode");
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};

export {
  config,
  isPlatform,
  getIonMode,
  initialize
};
/*! Bundled license information:

@ionic/core/dist/esm/ionic-global-ca86cf32.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0TW9kZSwgYSBhcyBzZXRNb2RlIH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jbGFzcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm0gPSBuZXcgTWFwKCk7XG4gIH1cbiAgcmVzZXQoY29uZmlnT2JqKSB7XG4gICAgdGhpcy5tID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhjb25maWdPYmopKTtcbiAgfVxuICBnZXQoa2V5LCBmYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5tLmdldChrZXkpO1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBmYWxsYmFjaztcbiAgfVxuICBnZXRCb29sZWFuKGtleSwgZmFsbGJhY2sgPSBmYWxzZSkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMubS5nZXQoa2V5KTtcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSc7XG4gICAgfVxuICAgIHJldHVybiAhIXZhbDtcbiAgfVxuICBnZXROdW1iZXIoa2V5LCBmYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQodGhpcy5tLmdldChrZXkpKTtcbiAgICByZXR1cm4gaXNOYU4odmFsKSA/IGZhbGxiYWNrICE9PSB1bmRlZmluZWQgPyBmYWxsYmFjayA6IE5hTiA6IHZhbDtcbiAgfVxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMubS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbmNvbnN0IGNvbmZpZyA9IC8qQF9fUFVSRV9fKi9uZXcgQ29uZmlnKCk7XG5jb25zdCBjb25maWdGcm9tU2Vzc2lvbiA9IHdpbiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnU3RyID0gd2luLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oSU9OSUNfU0VTU0lPTl9LRVkpO1xuICAgIHJldHVybiBjb25maWdTdHIgIT09IG51bGwgPyBKU09OLnBhcnNlKGNvbmZpZ1N0cikgOiB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcbmNvbnN0IHNhdmVDb25maWcgPSAod2luLCBjKSA9PiB7XG4gIHRyeSB7XG4gICAgd2luLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oSU9OSUNfU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KGMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybjtcbiAgfVxufTtcbmNvbnN0IGNvbmZpZ0Zyb21VUkwgPSB3aW4gPT4ge1xuICBjb25zdCBjb25maWdPYmogPSB7fTtcbiAgd2luLmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChlbnRyeSA9PiBlbnRyeS5zcGxpdCgnPScpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gW2RlY29kZVVSSUNvbXBvbmVudChrZXkpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gWycnLCAnJ107XG4gICAgfVxuICB9KS5maWx0ZXIoKFtrZXldKSA9PiBzdGFydHNXaXRoKGtleSwgSU9OSUNfUFJFRklYKSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXkuc2xpY2UoSU9OSUNfUFJFRklYLmxlbmd0aCksIHZhbHVlXSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uZmlnT2JqW2tleV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBjb25maWdPYmo7XG59O1xuY29uc3Qgc3RhcnRzV2l0aCA9IChpbnB1dCwgc2VhcmNoKSA9PiB7XG4gIHJldHVybiBpbnB1dC5zdWJzdHIoMCwgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbn07XG5jb25zdCBJT05JQ19QUkVGSVggPSAnaW9uaWM6JztcbmNvbnN0IElPTklDX1NFU1NJT05fS0VZID0gJ2lvbmljLXBlcnNpc3QtY29uZmlnJztcbmNvbnN0IGdldFBsYXRmb3JtcyA9IHdpbiA9PiBzZXR1cFBsYXRmb3Jtcyh3aW4pO1xuY29uc3QgaXNQbGF0Zm9ybSA9ICh3aW5PclBsYXRmb3JtLCBwbGF0Zm9ybSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbk9yUGxhdGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGxhdGZvcm0gPSB3aW5PclBsYXRmb3JtO1xuICAgIHdpbk9yUGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldFBsYXRmb3Jtcyh3aW5PclBsYXRmb3JtKS5pbmNsdWRlcyhwbGF0Zm9ybSk7XG59O1xuY29uc3Qgc2V0dXBQbGF0Zm9ybXMgPSAod2luID0gd2luZG93KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB3aW4uSW9uaWMgPSB3aW4uSW9uaWMgfHwge307XG4gIGxldCBwbGF0Zm9ybXMgPSB3aW4uSW9uaWMucGxhdGZvcm1zO1xuICBpZiAocGxhdGZvcm1zID09IG51bGwpIHtcbiAgICBwbGF0Zm9ybXMgPSB3aW4uSW9uaWMucGxhdGZvcm1zID0gZGV0ZWN0UGxhdGZvcm1zKHdpbik7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHBsdC0ke3B9YCkpO1xuICB9XG4gIHJldHVybiBwbGF0Zm9ybXM7XG59O1xuY29uc3QgZGV0ZWN0UGxhdGZvcm1zID0gd2luID0+IHtcbiAgY29uc3QgY3VzdG9tUGxhdGZvcm1NZXRob2RzID0gY29uZmlnLmdldCgncGxhdGZvcm0nKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKFBMQVRGT1JNU19NQVApLmZpbHRlcihwID0+IHtcbiAgICBjb25zdCBjdXN0b21NZXRob2QgPSBjdXN0b21QbGF0Zm9ybU1ldGhvZHMgPT09IG51bGwgfHwgY3VzdG9tUGxhdGZvcm1NZXRob2RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXN0b21QbGF0Zm9ybU1ldGhvZHNbcF07XG4gICAgcmV0dXJuIHR5cGVvZiBjdXN0b21NZXRob2QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXRob2Qod2luKSA6IFBMQVRGT1JNU19NQVBbcF0od2luKTtcbiAgfSk7XG59O1xuY29uc3QgaXNNb2JpbGVXZWIgPSB3aW4gPT4gaXNNb2JpbGUod2luKSAmJiAhaXNIeWJyaWQod2luKTtcbmNvbnN0IGlzSXBhZCA9IHdpbiA9PiB7XG4gIC8vIGlPUyAxMiBhbmQgYmVsb3dcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvaVBhZC9pKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIGlPUyAxMytcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvTWFjaW50b3NoL2kpICYmIGlzTW9iaWxlKHdpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgaXNJcGhvbmUgPSB3aW4gPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmUvaSk7XG5jb25zdCBpc0lPUyA9IHdpbiA9PiB0ZXN0VXNlckFnZW50KHdpbiwgL2lQaG9uZXxpUG9kL2kpIHx8IGlzSXBhZCh3aW4pO1xuY29uc3QgaXNBbmRyb2lkID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvYW5kcm9pZHxzaW5rL2kpO1xuY29uc3QgaXNBbmRyb2lkVGFibGV0ID0gd2luID0+IHtcbiAgcmV0dXJuIGlzQW5kcm9pZCh3aW4pICYmICF0ZXN0VXNlckFnZW50KHdpbiwgL21vYmlsZS9pKTtcbn07XG5jb25zdCBpc1BoYWJsZXQgPSB3aW4gPT4ge1xuICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHNtYWxsZXN0ID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHNtYWxsZXN0ID4gMzkwICYmIHNtYWxsZXN0IDwgNTIwICYmIGxhcmdlc3QgPiA2MjAgJiYgbGFyZ2VzdCA8IDgwMDtcbn07XG5jb25zdCBpc1RhYmxldCA9IHdpbiA9PiB7XG4gIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgY29uc3Qgc21hbGxlc3QgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgbGFyZ2VzdCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaXNJcGFkKHdpbikgfHwgaXNBbmRyb2lkVGFibGV0KHdpbikgfHwgc21hbGxlc3QgPiA0NjAgJiYgc21hbGxlc3QgPCA4MjAgJiYgbGFyZ2VzdCA+IDc4MCAmJiBsYXJnZXN0IDwgMTQwMDtcbn07XG5jb25zdCBpc01vYmlsZSA9IHdpbiA9PiBtYXRjaE1lZGlhKHdpbiwgJyhhbnktcG9pbnRlcjpjb2Fyc2UpJyk7XG5jb25zdCBpc0Rlc2t0b3AgPSB3aW4gPT4gIWlzTW9iaWxlKHdpbik7XG5jb25zdCBpc0h5YnJpZCA9IHdpbiA9PiBpc0NvcmRvdmEod2luKSB8fCBpc0NhcGFjaXRvck5hdGl2ZSh3aW4pO1xuY29uc3QgaXNDb3Jkb3ZhID0gd2luID0+ICEhKHdpblsnY29yZG92YSddIHx8IHdpblsncGhvbmVnYXAnXSB8fCB3aW5bJ1Bob25lR2FwJ10pO1xuY29uc3QgaXNDYXBhY2l0b3JOYXRpdmUgPSB3aW4gPT4ge1xuICBjb25zdCBjYXBhY2l0b3IgPSB3aW5bJ0NhcGFjaXRvciddO1xuICAvLyBUT0RPKFJPVS0xMTY5Myk6IFJlbW92ZSB3aGVuIHdlIG5vIGxvbmdlciBzdXBwb3J0IENhcGFjaXRvciAyLCB3aGljaCBkb2VzIG5vdCBoYXZlIGlzTmF0aXZlUGxhdGZvcm1cbiAgcmV0dXJuICEhKChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNOYXRpdmUpIHx8IChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSkgJiYgISFjYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcbn07XG5jb25zdCBpc0VsZWN0cm9uID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvZWxlY3Ryb24vaSk7XG5jb25zdCBpc1BXQSA9IHdpbiA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuICEhKCgoX2EgPSB3aW4ubWF0Y2hNZWRpYSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwod2luLCAnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzKSB8fCB3aW4ubmF2aWdhdG9yLnN0YW5kYWxvbmUpO1xufTtcbmNvbnN0IHRlc3RVc2VyQWdlbnQgPSAod2luLCBleHByKSA9PiBleHByLnRlc3Qod2luLm5hdmlnYXRvci51c2VyQWdlbnQpO1xuY29uc3QgbWF0Y2hNZWRpYSA9ICh3aW4sIHF1ZXJ5KSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IHdpbi5tYXRjaE1lZGlhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh3aW4sIHF1ZXJ5KS5tYXRjaGVzO1xufTtcbmNvbnN0IFBMQVRGT1JNU19NQVAgPSB7XG4gIGlwYWQ6IGlzSXBhZCxcbiAgaXBob25lOiBpc0lwaG9uZSxcbiAgaW9zOiBpc0lPUyxcbiAgYW5kcm9pZDogaXNBbmRyb2lkLFxuICBwaGFibGV0OiBpc1BoYWJsZXQsXG4gIHRhYmxldDogaXNUYWJsZXQsXG4gIGNvcmRvdmE6IGlzQ29yZG92YSxcbiAgY2FwYWNpdG9yOiBpc0NhcGFjaXRvck5hdGl2ZSxcbiAgZWxlY3Ryb246IGlzRWxlY3Ryb24sXG4gIHB3YTogaXNQV0EsXG4gIG1vYmlsZTogaXNNb2JpbGUsXG4gIG1vYmlsZXdlYjogaXNNb2JpbGVXZWIsXG4gIGRlc2t0b3A6IGlzRGVza3RvcCxcbiAgaHlicmlkOiBpc0h5YnJpZFxufTtcblxuLy8gVE9ETyhGVy0yODMyKTogdHlwZXNcbmxldCBkZWZhdWx0TW9kZTtcbmNvbnN0IGdldElvbk1vZGUgPSByZWYgPT4ge1xuICByZXR1cm4gcmVmICYmIGdldE1vZGUocmVmKSB8fCBkZWZhdWx0TW9kZTtcbn07XG5jb25zdCBpbml0aWFsaXplID0gKHVzZXJDb25maWcgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIGNvbnN0IElvbmljID0gd2luLklvbmljID0gd2luLklvbmljIHx8IHt9O1xuICAvLyBjcmVhdGUgdGhlIElvbmljLmNvbmZpZyBmcm9tIHJhdyBjb25maWcgb2JqZWN0IChpZiBpdCBleGlzdHMpXG4gIC8vIGFuZCBjb252ZXJ0IElvbmljLmNvbmZpZyBpbnRvIGEgQ29uZmlnQXBpIHRoYXQgaGFzIGEgZ2V0KCkgZm5cbiAgY29uc3QgY29uZmlnT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWdGcm9tU2Vzc2lvbih3aW4pKSwge1xuICAgIHBlcnNpc3RDb25maWc6IGZhbHNlXG4gIH0pLCBJb25pYy5jb25maWcpLCBjb25maWdGcm9tVVJMKHdpbikpLCB1c2VyQ29uZmlnKTtcbiAgY29uZmlnLnJlc2V0KGNvbmZpZ09iaik7XG4gIGlmIChjb25maWcuZ2V0Qm9vbGVhbigncGVyc2lzdENvbmZpZycpKSB7XG4gICAgc2F2ZUNvbmZpZyh3aW4sIGNvbmZpZ09iaik7XG4gIH1cbiAgLy8gU2V0dXAgcGxhdGZvcm1zXG4gIHNldHVwUGxhdGZvcm1zKHdpbik7XG4gIC8vIGZpcnN0IHNlZSBpZiB0aGUgbW9kZSB3YXMgc2V0IGFzIGFuIGF0dHJpYnV0ZSBvbiA8aHRtbD5cbiAgLy8gd2hpY2ggY291bGQgaGF2ZSBiZWVuIHNldCBieSB0aGUgdXNlciwgb3IgYnkgcHJlLXJlbmRlcmluZ1xuICAvLyBvdGhlcndpc2UgZ2V0IHRoZSBtb2RlIHZpYSBjb25maWcgc2V0dGluZ3MsIGFuZCBmYWxsYmFjayB0byBtZFxuICBJb25pYy5jb25maWcgPSBjb25maWc7XG4gIElvbmljLm1vZGUgPSBkZWZhdWx0TW9kZSA9IGNvbmZpZy5nZXQoJ21vZGUnLCBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbW9kZScpIHx8IChpc1BsYXRmb3JtKHdpbiwgJ2lvcycpID8gJ2lvcycgOiAnbWQnKSk7XG4gIGNvbmZpZy5zZXQoJ21vZGUnLCBkZWZhdWx0TW9kZSk7XG4gIGRvYy5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdtb2RlJywgZGVmYXVsdE1vZGUpO1xuICBkb2MuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGVmYXVsdE1vZGUpO1xuICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ190ZXN0aW5nJykpIHtcbiAgICBjb25maWcuc2V0KCdhbmltYXRlZCcsIGZhbHNlKTtcbiAgfVxuICBjb25zdCBpc0lvbmljRWxlbWVudCA9IGVsbSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBlbG0udGFnTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ0lPTi0nKTtcbiAgfTtcbiAgY29uc3QgaXNBbGxvd2VkSW9uaWNNb2RlVmFsdWUgPSBlbG1Nb2RlID0+IFsnaW9zJywgJ21kJ10uaW5jbHVkZXMoZWxtTW9kZSk7XG4gIHNldE1vZGUoZWxtID0+IHtcbiAgICB3aGlsZSAoZWxtKSB7XG4gICAgICBjb25zdCBlbG1Nb2RlID0gZWxtLm1vZGUgfHwgZWxtLmdldEF0dHJpYnV0ZSgnbW9kZScpO1xuICAgICAgaWYgKGVsbU1vZGUpIHtcbiAgICAgICAgaWYgKGlzQWxsb3dlZElvbmljTW9kZVZhbHVlKGVsbU1vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsbU1vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJb25pY0VsZW1lbnQoZWxtKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBpb25pYyBtb2RlOiBcIicgKyBlbG1Nb2RlICsgJ1wiLCBleHBlY3RlZDogXCJpb3NcIiBvciBcIm1kXCInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxtID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0TW9kZTtcbiAgfSk7XG59O1xuZXhwb3J0IHsgaXNQbGF0Zm9ybSBhcyBhLCBnZXRJb25Nb2RlIGFzIGIsIGNvbmZpZyBhcyBjLCBnZXRQbGF0Zm9ybXMgYXMgZywgaW5pdGlhbGl6ZSBhcyBpIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQSxJQUFNLFNBQU4sTUFBYTtBQUFBLEVBQ1gsY0FBYztBQUNaLFNBQUssSUFBSSxvQkFBSSxJQUFJO0FBQUEsRUFDbkI7QUFBQSxFQUNBLE1BQU0sV0FBVztBQUNmLFNBQUssSUFBSSxJQUFJLElBQUksT0FBTyxRQUFRLFNBQVMsQ0FBQztBQUFBLEVBQzVDO0FBQUEsRUFDQSxJQUFJLEtBQUssVUFBVTtBQUNqQixVQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksR0FBRztBQUM1QixXQUFPLFVBQVUs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
