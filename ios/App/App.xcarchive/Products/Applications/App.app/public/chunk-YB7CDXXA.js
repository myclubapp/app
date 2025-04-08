import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/core/dist/index.js
var ExceptionCode;
(function(ExceptionCode2) {
  ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
  ExceptionCode2["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var CapacitorException = class extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
};
var getPlatformId = (win) => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return "android";
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return "ios";
  } else {
    return "web";
  }
};
var createCapacitor = (win) => {
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  const getPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const isNativePlatform = () => getPlatform() !== "web";
  const isPluginAvailable = (pluginName) => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      return true;
    }
    if (getPluginHeader(pluginName)) {
      return true;
    }
    return false;
  };
  const getPluginHeader = (pluginName) => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
  };
  const handleError = (err) => win.console.error(err);
  const registeredPlugins = /* @__PURE__ */ new Map();
  const registerPlugin2 = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = () => __async(void 0, null, function* () {
      if (!jsImplementation && platform in jsImplementations) {
        jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
      } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
        jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = yield jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
      }
      return jsImplementation;
    });
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === "promise") {
            return (options) => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = (prop) => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then((impl) => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p2 = fn(...args);
            remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
            return p2;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === "addListener") {
          p.remove = () => __async(void 0, null, function* () {
            return remove();
          });
        }
        return p;
      };
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, "name", {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper("addListener");
    const removeListener = createPluginMethodWrapper("removeListener");
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = () => __async(void 0, null, function* () {
        const callbackId = yield call;
        removeListener({
          eventName,
          callbackId
        }, callback);
      });
      const p = new Promise((resolve) => call.then(() => resolve({
        remove
      })));
      p.remove = () => __async(void 0, null, function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case "$$typeof":
            return void 0;
          case "toJSON":
            return () => ({});
          case "addListener":
            return pluginHeader ? addListenerNative : addListener;
          case "removeListener":
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
    });
    return proxy;
  };
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = (filePath) => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.registerPlugin = registerPlugin2;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  return cap;
};
var initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
var Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var registerPlugin = Capacitor.registerPlugin;
var WebPlugin = class {
  constructor() {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
  }
  addListener(eventName, listenerFunc) {
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = () => __async(this, null, function* () {
      return this.removeListener(eventName, listenerFunc);
    });
    const p = Promise.resolve({
      remove
    });
    return p;
  }
  removeAllListeners() {
    return __async(this, null, function* () {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    });
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach((listener) => listener(data));
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: (event) => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = "not implemented") {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = "not available") {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    return __async(this, null, function* () {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    });
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach((arg) => {
      this.notifyListeners(eventName, arg);
    });
  }
};
var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
var CapacitorCookiesPluginWeb = class extends WebPlugin {
  getCookies() {
    return __async(this, null, function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(";").forEach((cookie) => {
        if (cookie.length <= 0) return;
        let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    });
  }
  setCookie(options) {
    return __async(this, null, function* () {
      try {
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        const expires = `; expires=${(options.expires || "").replace("expires=", "")}`;
        const path = (options.path || "/").replace("path=", "");
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
        document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  deleteCookie(options) {
    return __async(this, null, function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearCookies() {
    return __async(this, null, function* () {
      try {
        const cookies = document.cookie.split(";") || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearAllCookies() {
    return __async(this, null, function* () {
      try {
        yield this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
};
var CapacitorCookies = registerPlugin("CapacitorCookies", {
  web: () => new CapacitorCookiesPluginWeb()
});
var readBlobAsBase64 = (blob) => __async(void 0, null, function* () {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
});
var normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
var buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = "";
      value.forEach((str) => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, "");
  return output.substr(1);
};
var buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || "GET",
    headers: options.headers
  }, extra);
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers["content-type"] || "";
  if (typeof options.data === "string") {
    output.body = options.data;
  } else if (type.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers2 = new Headers(output.headers);
    headers2.delete("content-type");
    output.headers = headers2;
  } else if (type.includes("application/json") || typeof options.data === "object") {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
var CapacitorHttpPluginWeb = class extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return __async(this, null, function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get("content-type") || "";
      let {
        responseType = "text"
      } = response.ok ? options : {};
      if (contentType.includes("application/json")) {
        responseType = "json";
      }
      let data;
      let blob;
      switch (responseType) {
        case "arraybuffer":
        case "blob":
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case "json":
          data = yield response.json();
          break;
        case "document":
        case "text":
        default:
          data = yield response.text();
      }
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    });
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "GET"
      }));
    });
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "POST"
      }));
    });
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "PUT"
      }));
    });
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "PATCH"
      }));
    });
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "DELETE"
      }));
    });
  }
};
var CapacitorHttp = registerPlugin("CapacitorHttp", {
  web: () => new CapacitorHttpPluginWeb()
});

export {
  CapacitorException,
  Capacitor,
  registerPlugin,
  WebPlugin
};
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NvcmUvZGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQ2FwYWNpdG9yOiBodHRwczovL2NhcGFjaXRvcmpzLmNvbS8gLSBNSVQgTGljZW5zZSAqL1xudmFyIEV4Y2VwdGlvbkNvZGU7XG4oZnVuY3Rpb24gKEV4Y2VwdGlvbkNvZGUpIHtcbiAgLyoqXG4gICAqIEFQSSBpcyBub3QgaW1wbGVtZW50ZWQuXG4gICAqXG4gICAqIFRoaXMgdXN1YWxseSBtZWFucyB0aGUgQVBJIGNhbid0IGJlIHVzZWQgYmVjYXVzZSBpdCBpcyBub3QgaW1wbGVtZW50ZWQgZm9yXG4gICAqIHRoZSBjdXJyZW50IHBsYXRmb3JtLlxuICAgKi9cbiAgRXhjZXB0aW9uQ29kZVtcIlVuaW1wbGVtZW50ZWRcIl0gPSBcIlVOSU1QTEVNRU5URURcIjtcbiAgLyoqXG4gICAqIEFQSSBpcyBub3QgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBUaGlzIG1lYW5zIHRoZSBBUEkgY2FuJ3QgYmUgdXNlZCByaWdodCBub3cgYmVjYXVzZTpcbiAgICogICAtIGl0IGlzIGN1cnJlbnRseSBtaXNzaW5nIGEgcHJlcmVxdWlzaXRlLCBzdWNoIGFzIG5ldHdvcmsgY29ubmVjdGl2aXR5XG4gICAqICAgLSBpdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIgcGxhdGZvcm0gb3IgYnJvd3NlciB2ZXJzaW9uXG4gICAqL1xuICBFeGNlcHRpb25Db2RlW1wiVW5hdmFpbGFibGVcIl0gPSBcIlVOQVZBSUxBQkxFXCI7XG59KShFeGNlcHRpb25Db2RlIHx8IChFeGNlcHRpb25Db2RlID0ge30pKTtcbmNsYXNzIENhcGFjaXRvckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgY29kZSwgZGF0YSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5jb25zdCBnZXRQbGF0Zm9ybUlkID0gd2luID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgaWYgKHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hbmRyb2lkQnJpZGdlKSB7XG4gICAgcmV0dXJuICdhbmRyb2lkJztcbiAgfSBlbHNlIGlmICgoX2IgPSAoX2EgPSB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ud2Via2l0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZUhhbmRsZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYnJpZGdlKSB7XG4gICAgcmV0dXJuICdpb3MnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnd2ViJztcbiAgfVxufTtcbmNvbnN0IGNyZWF0ZUNhcGFjaXRvciA9IHdpbiA9PiB7XG4gIGNvbnN0IGNhcEN1c3RvbVBsYXRmb3JtID0gd2luLkNhcGFjaXRvckN1c3RvbVBsYXRmb3JtIHx8IG51bGw7XG4gIGNvbnN0IGNhcCA9IHdpbi5DYXBhY2l0b3IgfHwge307XG4gIGNvbnN0IFBsdWdpbnMgPSBjYXAuUGx1Z2lucyA9IGNhcC5QbHVnaW5zIHx8IHt9O1xuICBjb25zdCBnZXRQbGF0Zm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2FwQ3VzdG9tUGxhdGZvcm0gIT09IG51bGwgPyBjYXBDdXN0b21QbGF0Zm9ybS5uYW1lIDogZ2V0UGxhdGZvcm1JZCh3aW4pO1xuICB9O1xuICBjb25zdCBpc05hdGl2ZVBsYXRmb3JtID0gKCkgPT4gZ2V0UGxhdGZvcm0oKSAhPT0gJ3dlYic7XG4gIGNvbnN0IGlzUGx1Z2luQXZhaWxhYmxlID0gcGx1Z2luTmFtZSA9PiB7XG4gICAgY29uc3QgcGx1Z2luID0gcmVnaXN0ZXJlZFBsdWdpbnMuZ2V0KHBsdWdpbk5hbWUpO1xuICAgIGlmIChwbHVnaW4gPT09IG51bGwgfHwgcGx1Z2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwbHVnaW4ucGxhdGZvcm1zLmhhcyhnZXRQbGF0Zm9ybSgpKSkge1xuICAgICAgLy8gSlMgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBwbGF0Zm9ybS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0UGx1Z2luSGVhZGVyKHBsdWdpbk5hbWUpKSB7XG4gICAgICAvLyBOYXRpdmUgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgZ2V0UGx1Z2luSGVhZGVyID0gcGx1Z2luTmFtZSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBjYXAuUGx1Z2luSGVhZGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbmQoaCA9PiBoLm5hbWUgPT09IHBsdWdpbk5hbWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVFcnJvciA9IGVyciA9PiB3aW4uY29uc29sZS5lcnJvcihlcnIpO1xuICBjb25zdCByZWdpc3RlcmVkUGx1Z2lucyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgcmVnaXN0ZXJQbHVnaW4gPSAocGx1Z2luTmFtZSwganNJbXBsZW1lbnRhdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRQbHVnaW4gPSByZWdpc3RlcmVkUGx1Z2lucy5nZXQocGx1Z2luTmFtZSk7XG4gICAgaWYgKHJlZ2lzdGVyZWRQbHVnaW4pIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ2FwYWNpdG9yIHBsdWdpbiBcIiR7cGx1Z2luTmFtZX1cIiBhbHJlYWR5IHJlZ2lzdGVyZWQuIENhbm5vdCByZWdpc3RlciBwbHVnaW5zIHR3aWNlLmApO1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRQbHVnaW4ucHJveHk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKTtcbiAgICBjb25zdCBwbHVnaW5IZWFkZXIgPSBnZXRQbHVnaW5IZWFkZXIocGx1Z2luTmFtZSk7XG4gICAgbGV0IGpzSW1wbGVtZW50YXRpb247XG4gICAgY29uc3QgbG9hZFBsdWdpbkltcGxlbWVudGF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFqc0ltcGxlbWVudGF0aW9uICYmIHBsYXRmb3JtIGluIGpzSW1wbGVtZW50YXRpb25zKSB7XG4gICAgICAgIGpzSW1wbGVtZW50YXRpb24gPSB0eXBlb2YganNJbXBsZW1lbnRhdGlvbnNbcGxhdGZvcm1dID09PSAnZnVuY3Rpb24nID8ganNJbXBsZW1lbnRhdGlvbiA9IGF3YWl0IGpzSW1wbGVtZW50YXRpb25zW3BsYXRmb3JtXSgpIDoganNJbXBsZW1lbnRhdGlvbiA9IGpzSW1wbGVtZW50YXRpb25zW3BsYXRmb3JtXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FwQ3VzdG9tUGxhdGZvcm0gIT09IG51bGwgJiYgIWpzSW1wbGVtZW50YXRpb24gJiYgJ3dlYicgaW4ganNJbXBsZW1lbnRhdGlvbnMpIHtcbiAgICAgICAganNJbXBsZW1lbnRhdGlvbiA9IHR5cGVvZiBqc0ltcGxlbWVudGF0aW9uc1snd2ViJ10gPT09ICdmdW5jdGlvbicgPyBqc0ltcGxlbWVudGF0aW9uID0gYXdhaXQganNJbXBsZW1lbnRhdGlvbnNbJ3dlYiddKCkgOiBqc0ltcGxlbWVudGF0aW9uID0ganNJbXBsZW1lbnRhdGlvbnNbJ3dlYiddO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGpzSW1wbGVtZW50YXRpb247XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVQbHVnaW5NZXRob2QgPSAoaW1wbCwgcHJvcCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGlmIChwbHVnaW5IZWFkZXIpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kSGVhZGVyID0gcGx1Z2luSGVhZGVyID09PSBudWxsIHx8IHBsdWdpbkhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGx1Z2luSGVhZGVyLm1ldGhvZHMuZmluZChtID0+IHByb3AgPT09IG0ubmFtZSk7XG4gICAgICAgIGlmIChtZXRob2RIZWFkZXIpIHtcbiAgICAgICAgICBpZiAobWV0aG9kSGVhZGVyLnJ0eXBlID09PSAncHJvbWlzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zID0+IGNhcC5uYXRpdmVQcm9taXNlKHBsdWdpbk5hbWUsIHByb3AudG9TdHJpbmcoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAob3B0aW9ucywgY2FsbGJhY2spID0+IGNhcC5uYXRpdmVDYWxsYmFjayhwbHVnaW5OYW1lLCBwcm9wLnRvU3RyaW5nKCksIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wbCkge1xuICAgICAgICAgIHJldHVybiAoX2EgPSBpbXBsW3Byb3BdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmluZChpbXBsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbXBsKSB7XG4gICAgICAgIHJldHVybiAoX2IgPSBpbXBsW3Byb3BdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYmluZChpbXBsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oYFwiJHtwbHVnaW5OYW1lfVwiIHBsdWdpbiBpcyBub3QgaW1wbGVtZW50ZWQgb24gJHtwbGF0Zm9ybX1gLCBFeGNlcHRpb25Db2RlLlVuaW1wbGVtZW50ZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUGx1Z2luTWV0aG9kV3JhcHBlciA9IHByb3AgPT4ge1xuICAgICAgbGV0IHJlbW92ZTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBwID0gbG9hZFBsdWdpbkltcGxlbWVudGF0aW9uKCkudGhlbihpbXBsID0+IHtcbiAgICAgICAgICBjb25zdCBmbiA9IGNyZWF0ZVBsdWdpbk1ldGhvZChpbXBsLCBwcm9wKTtcbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlbW92ZSA9IHAgPT09IG51bGwgfHwgcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcC5yZW1vdmU7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENhcGFjaXRvckV4Y2VwdGlvbihgXCIke3BsdWdpbk5hbWV9LiR7cHJvcH0oKVwiIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiAke3BsYXRmb3JtfWAsIEV4Y2VwdGlvbkNvZGUuVW5pbXBsZW1lbnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhZGRMaXN0ZW5lcicpIHtcbiAgICAgICAgICBwLnJlbW92ZSA9IGFzeW5jICgpID0+IHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfTtcbiAgICAgIC8vIFNvbWUgZmxhaXIg4pyoXG4gICAgICB3cmFwcGVyLnRvU3RyaW5nID0gKCkgPT4gYCR7cHJvcC50b1N0cmluZygpfSgpIHsgW2NhcGFjaXRvciBjb2RlXSB9YDtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3cmFwcGVyLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHByb3AsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9O1xuICAgIGNvbnN0IGFkZExpc3RlbmVyID0gY3JlYXRlUGx1Z2luTWV0aG9kV3JhcHBlcignYWRkTGlzdGVuZXInKTtcbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGNyZWF0ZVBsdWdpbk1ldGhvZFdyYXBwZXIoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgY29uc3QgYWRkTGlzdGVuZXJOYXRpdmUgPSAoZXZlbnROYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgY2FsbCA9IGFkZExpc3RlbmVyKHtcbiAgICAgICAgZXZlbnROYW1lXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgICBjb25zdCByZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrSWQgPSBhd2FpdCBjYWxsO1xuICAgICAgICByZW1vdmVMaXN0ZW5lcih7XG4gICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgIGNhbGxiYWNrSWRcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGNhbGwudGhlbigoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgcmVtb3ZlXG4gICAgICB9KSkpO1xuICAgICAgcC5yZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgVXNpbmcgYWRkTGlzdGVuZXIoKSB3aXRob3V0ICdhd2FpdCcgaXMgZGVwcmVjYXRlZC5gKTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlKCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgZ2V0KF8sIHByb3ApIHtcbiAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDAzMFxuICAgICAgICAgIGNhc2UgJyQkdHlwZW9mJzpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FzZSAndG9KU09OJzpcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgICAgICAgIGNhc2UgJ2FkZExpc3RlbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5IZWFkZXIgPyBhZGRMaXN0ZW5lck5hdGl2ZSA6IGFkZExpc3RlbmVyO1xuICAgICAgICAgIGNhc2UgJ3JlbW92ZUxpc3RlbmVyJzpcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBsdWdpbk1ldGhvZFdyYXBwZXIocHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBQbHVnaW5zW3BsdWdpbk5hbWVdID0gcHJveHk7XG4gICAgcmVnaXN0ZXJlZFBsdWdpbnMuc2V0KHBsdWdpbk5hbWUsIHtcbiAgICAgIG5hbWU6IHBsdWdpbk5hbWUsXG4gICAgICBwcm94eSxcbiAgICAgIHBsYXRmb3JtczogbmV3IFNldChbLi4uT2JqZWN0LmtleXMoanNJbXBsZW1lbnRhdGlvbnMpLCAuLi4ocGx1Z2luSGVhZGVyID8gW3BsYXRmb3JtXSA6IFtdKV0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuICAvLyBBZGQgaW4gY29udmVydEZpbGVTcmMgZm9yIHdlYiwgaXQgd2lsbCBhbHJlYWR5IGJlIGF2YWlsYWJsZSBpbiBuYXRpdmUgY29udGV4dFxuICBpZiAoIWNhcC5jb252ZXJ0RmlsZVNyYykge1xuICAgIGNhcC5jb252ZXJ0RmlsZVNyYyA9IGZpbGVQYXRoID0+IGZpbGVQYXRoO1xuICB9XG4gIGNhcC5nZXRQbGF0Zm9ybSA9IGdldFBsYXRmb3JtO1xuICBjYXAuaGFuZGxlRXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPSBpc05hdGl2ZVBsYXRmb3JtO1xuICBjYXAuaXNQbHVnaW5BdmFpbGFibGUgPSBpc1BsdWdpbkF2YWlsYWJsZTtcbiAgY2FwLnJlZ2lzdGVyUGx1Z2luID0gcmVnaXN0ZXJQbHVnaW47XG4gIGNhcC5FeGNlcHRpb24gPSBDYXBhY2l0b3JFeGNlcHRpb247XG4gIGNhcC5ERUJVRyA9ICEhY2FwLkRFQlVHO1xuICBjYXAuaXNMb2dnaW5nRW5hYmxlZCA9ICEhY2FwLmlzTG9nZ2luZ0VuYWJsZWQ7XG4gIHJldHVybiBjYXA7XG59O1xuY29uc3QgaW5pdENhcGFjaXRvckdsb2JhbCA9IHdpbiA9PiB3aW4uQ2FwYWNpdG9yID0gY3JlYXRlQ2FwYWNpdG9yKHdpbik7XG5jb25zdCBDYXBhY2l0b3IgPSAvKiNfX1BVUkVfXyovaW5pdENhcGFjaXRvckdsb2JhbCh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fSk7XG5jb25zdCByZWdpc3RlclBsdWdpbiA9IENhcGFjaXRvci5yZWdpc3RlclBsdWdpbjtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIHdlYiBwbHVnaW5zIHNob3VsZCBleHRlbmQuXG4gKi9cbmNsYXNzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXRhaW5lZEV2ZW50QXJndW1lbnRzID0ge307XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuICBhZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyRnVuYykge1xuICAgIGxldCBmaXJzdExpc3RlbmVyID0gZmFsc2U7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXTtcbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgZmlyc3RMaXN0ZW5lciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckZ1bmMpO1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgYWRkZWQgYSB3aW5kb3cgbGlzdGVuZXIgZm9yIHRoaXMgZXZlbnQgYW5kIGl0IHJlcXVpcmVzIG9uZSxcbiAgICAvLyBnbyBhaGVhZCBhbmQgYWRkIGl0XG4gICAgY29uc3Qgd2luZG93TGlzdGVuZXIgPSB0aGlzLndpbmRvd0xpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgIGlmICh3aW5kb3dMaXN0ZW5lciAmJiAhd2luZG93TGlzdGVuZXIucmVnaXN0ZXJlZCkge1xuICAgICAgdGhpcy5hZGRXaW5kb3dMaXN0ZW5lcih3aW5kb3dMaXN0ZW5lcik7XG4gICAgfVxuICAgIGlmIChmaXJzdExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNlbmRSZXRhaW5lZEFyZ3VtZW50c0ZvckV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZSA9IGFzeW5jICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lckZ1bmMpO1xuICAgIGNvbnN0IHAgPSBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgcmVtb3ZlXG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgYXN5bmMgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBpbiB0aGlzLndpbmRvd0xpc3RlbmVycykge1xuICAgICAgdGhpcy5yZW1vdmVXaW5kb3dMaXN0ZW5lcih0aGlzLndpbmRvd0xpc3RlbmVyc1tsaXN0ZW5lcl0pO1xuICAgIH1cbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycyA9IHt9O1xuICB9XG4gIG5vdGlmeUxpc3RlbmVycyhldmVudE5hbWUsIGRhdGEsIHJldGFpblVudGlsQ29uc3VtZWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICBpZiAocmV0YWluVW50aWxDb25zdW1lZCkge1xuICAgICAgICBsZXQgYXJncyA9IHRoaXMucmV0YWluZWRFdmVudEFyZ3VtZW50c1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICBhcmdzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLnJldGFpbmVkRXZlbnRBcmd1bWVudHNbZXZlbnROYW1lXSA9IGFyZ3M7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKGRhdGEpKTtcbiAgfVxuICBoYXNMaXN0ZW5lcnMoZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuICEhdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7XG4gIH1cbiAgcmVnaXN0ZXJXaW5kb3dMaXN0ZW5lcih3aW5kb3dFdmVudE5hbWUsIHBsdWdpbkV2ZW50TmFtZSkge1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzW3BsdWdpbkV2ZW50TmFtZV0gPSB7XG4gICAgICByZWdpc3RlcmVkOiBmYWxzZSxcbiAgICAgIHdpbmRvd0V2ZW50TmFtZSxcbiAgICAgIHBsdWdpbkV2ZW50TmFtZSxcbiAgICAgIGhhbmRsZXI6IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMocGx1Z2luRXZlbnROYW1lLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB1bmltcGxlbWVudGVkKG1zZyA9ICdub3QgaW1wbGVtZW50ZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBDYXBhY2l0b3IuRXhjZXB0aW9uKG1zZywgRXhjZXB0aW9uQ29kZS5VbmltcGxlbWVudGVkKTtcbiAgfVxuICB1bmF2YWlsYWJsZShtc2cgPSAnbm90IGF2YWlsYWJsZScpIHtcbiAgICByZXR1cm4gbmV3IENhcGFjaXRvci5FeGNlcHRpb24obXNnLCBFeGNlcHRpb25Db2RlLlVuYXZhaWxhYmxlKTtcbiAgfVxuICBhc3luYyByZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyRnVuYykge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV07XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lckZ1bmMpO1xuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSBsaXN0ZW5lcnMgZm9yIHRoaXMgdHlwZSBvZiBldmVudCxcbiAgICAvLyByZW1vdmUgdGhlIHdpbmRvdyBsaXN0ZW5lclxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlV2luZG93TGlzdGVuZXIodGhpcy53aW5kb3dMaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG4gICAgfVxuICB9XG4gIGFkZFdpbmRvd0xpc3RlbmVyKGhhbmRsZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGhhbmRsZS53aW5kb3dFdmVudE5hbWUsIGhhbmRsZS5oYW5kbGVyKTtcbiAgICBoYW5kbGUucmVnaXN0ZXJlZCA9IHRydWU7XG4gIH1cbiAgcmVtb3ZlV2luZG93TGlzdGVuZXIoaGFuZGxlKSB7XG4gICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlLndpbmRvd0V2ZW50TmFtZSwgaGFuZGxlLmhhbmRsZXIpO1xuICAgIGhhbmRsZS5yZWdpc3RlcmVkID0gZmFsc2U7XG4gIH1cbiAgc2VuZFJldGFpbmVkQXJndW1lbnRzRm9yRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgY29uc3QgYXJncyA9IHRoaXMucmV0YWluZWRFdmVudEFyZ3VtZW50c1tldmVudE5hbWVdO1xuICAgIGlmICghYXJncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5yZXRhaW5lZEV2ZW50QXJndW1lbnRzW2V2ZW50TmFtZV07XG4gICAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudE5hbWUsIGFyZyk7XG4gICAgfSk7XG4gIH1cbn1cbmNvbnN0IFdlYlZpZXcgPSAvKiNfX1BVUkVfXyovcmVnaXN0ZXJQbHVnaW4oJ1dlYlZpZXcnKTtcbi8qKioqKioqKiBFTkQgV0VCIFZJRVcgUExVR0lOICoqKioqKioqL1xuLyoqKioqKioqIENPT0tJRVMgUExVR0lOICoqKioqKioqL1xuLyoqXG4gKiBTYWZlbHkgd2ViIGVuY29kZSBhIHN0cmluZyB2YWx1ZSAoaW5zcGlyZWQgYnkganMtY29va2llKVxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHZhbHVlIHRvIGVuY29kZVxuICovXG5jb25zdCBlbmNvZGUgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpLnJlcGxhY2UoL1soKV0vZywgZXNjYXBlKTtcbi8qKlxuICogU2FmZWx5IHdlYiBkZWNvZGUgYSBzdHJpbmcgdmFsdWUgKGluc3BpcmVkIGJ5IGpzLWNvb2tpZSlcbiAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB2YWx1ZSB0byBkZWNvZGVcbiAqL1xuY29uc3QgZGVjb2RlID0gc3RyID0+IHN0ci5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksIGRlY29kZVVSSUNvbXBvbmVudCk7XG5jbGFzcyBDYXBhY2l0b3JDb29raWVzUGx1Z2luV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgYXN5bmMgZ2V0Q29va2llcygpIHtcbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llO1xuICAgIGNvbnN0IGNvb2tpZU1hcCA9IHt9O1xuICAgIGNvb2tpZXMuc3BsaXQoJzsnKS5mb3JFYWNoKGNvb2tpZSA9PiB7XG4gICAgICBpZiAoY29va2llLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgICAvLyBSZXBsYWNlIGZpcnN0IFwiPVwiIHdpdGggQ0FQX0NPT0tJRSB0byBwcmV2ZW50IHNwbGl0dGluZyBvbiBhZGRpdGlvbmFsIFwiPVwiXG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gY29va2llLnJlcGxhY2UoLz0vLCAnQ0FQX0NPT0tJRScpLnNwbGl0KCdDQVBfQ09PS0lFJyk7XG4gICAgICBrZXkgPSBkZWNvZGUoa2V5KS50cmltKCk7XG4gICAgICB2YWx1ZSA9IGRlY29kZSh2YWx1ZSkudHJpbSgpO1xuICAgICAgY29va2llTWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29va2llTWFwO1xuICB9XG4gIGFzeW5jIHNldENvb2tpZShvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFNhZmVseSBFbmNvZGVkIEtleS9WYWx1ZVxuICAgICAgY29uc3QgZW5jb2RlZEtleSA9IGVuY29kZShvcHRpb25zLmtleSk7XG4gICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSBlbmNvZGUob3B0aW9ucy52YWx1ZSk7XG4gICAgICAvLyBDbGVhbiAmIHNhbml0aXplIG9wdGlvbnNcbiAgICAgIGNvbnN0IGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7KG9wdGlvbnMuZXhwaXJlcyB8fCAnJykucmVwbGFjZSgnZXhwaXJlcz0nLCAnJyl9YDsgLy8gRGVmYXVsdCBpcyBcIjsgZXhwaXJlcz1cIlxuICAgICAgY29uc3QgcGF0aCA9IChvcHRpb25zLnBhdGggfHwgJy8nKS5yZXBsYWNlKCdwYXRoPScsICcnKTsgLy8gRGVmYXVsdCBpcyBcInBhdGg9L1wiXG4gICAgICBjb25zdCBkb21haW4gPSBvcHRpb25zLnVybCAhPSBudWxsICYmIG9wdGlvbnMudXJsLmxlbmd0aCA+IDAgPyBgZG9tYWluPSR7b3B0aW9ucy51cmx9YCA6ICcnO1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7ZW5jb2RlZEtleX09JHtlbmNvZGVkVmFsdWUgfHwgJyd9JHtleHBpcmVzfTsgcGF0aD0ke3BhdGh9OyAke2RvbWFpbn07YDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZGVsZXRlQ29va2llKG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7b3B0aW9ucy5rZXl9PTsgTWF4LUFnZT0wYDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY2xlYXJDb29raWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykgfHwgW107XG4gICAgICBmb3IgKGNvbnN0IGNvb2tpZSBvZiBjb29raWVzKSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5yZXBsYWNlKC9eICsvLCAnJykucmVwbGFjZSgvPS4qLywgYD07ZXhwaXJlcz0ke25ldyBEYXRlKCkudG9VVENTdHJpbmcoKX07cGF0aD0vYCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNsZWFyQWxsQ29va2llcygpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5jbGVhckNvb2tpZXMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbmNvbnN0IENhcGFjaXRvckNvb2tpZXMgPSByZWdpc3RlclBsdWdpbignQ2FwYWNpdG9yQ29va2llcycsIHtcbiAgd2ViOiAoKSA9PiBuZXcgQ2FwYWNpdG9yQ29va2llc1BsdWdpbldlYigpXG59KTtcbi8vIFVUSUxJVFkgRlVOQ1RJT05TXG4vKipcbiAqIFJlYWQgaW4gYSBCbG9iIHZhbHVlIGFuZCByZXR1cm4gaXQgYXMgYSBiYXNlNjQgc3RyaW5nXG4gKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgYmFzZTY0IHN0cmluZ1xuICovXG5jb25zdCByZWFkQmxvYkFzQmFzZTY0ID0gYXN5bmMgYmxvYiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gcmVhZGVyLnJlc3VsdDtcbiAgICAvLyByZW1vdmUgcHJlZml4IFwiZGF0YTphcHBsaWNhdGlvbi9wZGY7YmFzZTY0LFwiXG4gICAgcmVzb2x2ZShiYXNlNjRTdHJpbmcuaW5kZXhPZignLCcpID49IDAgPyBiYXNlNjRTdHJpbmcuc3BsaXQoJywnKVsxXSA6IGJhc2U2NFN0cmluZyk7XG4gIH07XG4gIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG59KTtcbi8qKlxuICogTm9ybWFsaXplIGFuIEh0dHBIZWFkZXJzIG1hcCBieSBsb3dlcmNhc2luZyBhbGwgb2YgdGhlIHZhbHVlc1xuICogQHBhcmFtIGhlYWRlcnMgVGhlIEh0dHBIZWFkZXJzIG9iamVjdCB0byBub3JtYWxpemVcbiAqL1xuY29uc3Qgbm9ybWFsaXplSHR0cEhlYWRlcnMgPSAoaGVhZGVycyA9IHt9KSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpO1xuICBjb25zdCBsb3dlcmVkS2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpLm1hcChrID0+IGsudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBsb3dlcmVkS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpbmRleCkgPT4ge1xuICAgIGFjY1trZXldID0gaGVhZGVyc1tvcmlnaW5hbEtleXNbaW5kZXhdXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBub3JtYWxpemVkO1xufTtcbi8qKlxuICogQnVpbGRzIGEgc3RyaW5nIG9mIHVybCBwYXJhbWV0ZXJzIHRoYXRcbiAqIEBwYXJhbSBwYXJhbXMgQSBtYXAgb2YgdXJsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBzaG91bGRFbmNvZGUgdHJ1ZSBpZiB5b3Ugc2hvdWxkIGVuY29kZVVSSUNvbXBvbmVudCgpIHRoZSB2YWx1ZXMgKHRydWUgYnkgZGVmYXVsdClcbiAqL1xuY29uc3QgYnVpbGRVcmxQYXJhbXMgPSAocGFyYW1zLCBzaG91bGRFbmNvZGUgPSB0cnVlKSA9PiB7XG4gIGlmICghcGFyYW1zKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmVudHJpZXMocGFyYW1zKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBlbnRyeSkgPT4ge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgIGxldCBlbmNvZGVkVmFsdWU7XG4gICAgbGV0IGl0ZW07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpdGVtID0gJyc7XG4gICAgICB2YWx1ZS5mb3JFYWNoKHN0ciA9PiB7XG4gICAgICAgIGVuY29kZWRWYWx1ZSA9IHNob3VsZEVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChzdHIpIDogc3RyO1xuICAgICAgICBpdGVtICs9IGAke2tleX09JHtlbmNvZGVkVmFsdWV9JmA7XG4gICAgICB9KTtcbiAgICAgIC8vIGxhc3QgY2hhcmFjdGVyIHdpbGwgYWx3YXlzIGJlIFwiJlwiIHNvIHNsaWNlIGl0IG9mZlxuICAgICAgaXRlbS5zbGljZSgwLCAtMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kZWRWYWx1ZSA9IHNob3VsZEVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgIGl0ZW0gPSBgJHtrZXl9PSR7ZW5jb2RlZFZhbHVlfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHthY2N1bXVsYXRvcn0mJHtpdGVtfWA7XG4gIH0sICcnKTtcbiAgLy8gUmVtb3ZlIGluaXRpYWwgXCImXCIgZnJvbSB0aGUgcmVkdWNlXG4gIHJldHVybiBvdXRwdXQuc3Vic3RyKDEpO1xufTtcbi8qKlxuICogQnVpbGQgdGhlIFJlcXVlc3RJbml0IG9iamVjdCBiYXNlZCBvbiB0aGUgb3B0aW9ucyBwYXNzZWQgaW50byB0aGUgaW5pdGlhbCByZXF1ZXN0XG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgSHR0cCBwbHVnaW4gb3B0aW9uc1xuICogQHBhcmFtIGV4dHJhIEFueSBleHRyYSBSZXF1ZXN0SW5pdCB2YWx1ZXNcbiAqL1xuY29uc3QgYnVpbGRSZXF1ZXN0SW5pdCA9IChvcHRpb25zLCBleHRyYSA9IHt9KSA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzXG4gIH0sIGV4dHJhKTtcbiAgLy8gR2V0IHRoZSBjb250ZW50LXR5cGVcbiAgY29uc3QgaGVhZGVycyA9IG5vcm1hbGl6ZUh0dHBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gIGNvbnN0IHR5cGUgPSBoZWFkZXJzWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgLy8gSWYgYm9keSBpcyBhbHJlYWR5IGEgc3RyaW5nLCB0aGVuIHBhc3MgaXQgdGhyb3VnaCBhcy1pcy5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgb3V0cHV0LmJvZHkgPSBvcHRpb25zLmRhdGE7XG4gIH1cbiAgLy8gQnVpbGQgcmVxdWVzdCBpbml0aWFsaXplcnMgYmFzZWQgb2ZmIG9mIGNvbnRlbnQtdHlwZVxuICBlbHNlIGlmICh0eXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLmRhdGEgfHwge30pKSB7XG4gICAgICBwYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBvdXRwdXQuYm9keSA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2UgaWYgKHR5cGUuaW5jbHVkZXMoJ211bHRpcGFydC9mb3JtLWRhdGEnKSB8fCBvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoa2V5LCBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dHB1dC5ib2R5ID0gZm9ybTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMob3V0cHV0LmhlYWRlcnMpO1xuICAgIGhlYWRlcnMuZGVsZXRlKCdjb250ZW50LXR5cGUnKTsgLy8gY29udGVudC10eXBlIHdpbGwgYmUgc2V0IGJ5IGB3aW5kb3cuZmV0Y2hgIHRvIGluY2x1ZHkgYm91bmRhcnlcbiAgICBvdXRwdXQuaGVhZGVycyA9IGhlYWRlcnM7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpIHx8IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgb3V0cHV0LmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmRhdGEpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuLy8gV0VCIElNUExFTUVOVEFUSU9OXG5jbGFzcyBDYXBhY2l0b3JIdHRwUGx1Z2luV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBlcmZvcm0gYW4gSHR0cCByZXF1ZXN0IGdpdmVuIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBidWlsZCB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXF1ZXN0SW5pdCA9IGJ1aWxkUmVxdWVzdEluaXQob3B0aW9ucywgb3B0aW9ucy53ZWJGZXRjaEV4dHJhKTtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBidWlsZFVybFBhcmFtcyhvcHRpb25zLnBhcmFtcywgb3B0aW9ucy5zaG91bGRFbmNvZGVVcmxQYXJhbXMpO1xuICAgIGNvbnN0IHVybCA9IHVybFBhcmFtcyA/IGAke29wdGlvbnMudXJsfT8ke3VybFBhcmFtc31gIDogb3B0aW9ucy51cmw7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHJlcXVlc3RJbml0KTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJztcbiAgICAvLyBEZWZhdWx0IHRvICd0ZXh0JyByZXNwb25zZVR5cGUgc28gbm8gcGFyc2luZyBoYXBwZW5zXG4gICAgbGV0IHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICAgIH0gPSByZXNwb25zZS5vayA/IG9wdGlvbnMgOiB7fTtcbiAgICAvLyBJZiB0aGUgcmVzcG9uc2UgY29udGVudC10eXBlIGlzIGpzb24sIGZvcmNlIHRoZSByZXNwb25zZSB0byBiZSBqc29uXG4gICAgaWYgKGNvbnRlbnRUeXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICB9XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGJsb2I7XG4gICAgc3dpdGNoIChyZXNwb25zZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5YnVmZmVyJzpcbiAgICAgIGNhc2UgJ2Jsb2InOlxuICAgICAgICBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVhZEJsb2JBc0Jhc2U2NChibG9iKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2N1bWVudCc6XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgfVxuICAgIC8vIENvbnZlcnQgZmV0Y2ggaGVhZGVycyB0byBDYXBhY2l0b3IgSHR0cEhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBoZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHVybDogcmVzcG9uc2UudXJsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIEdFVCByZXF1ZXN0IGdpdmVuIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBidWlsZCB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyBnZXQob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIFBPU1QgcmVxdWVzdCBnaXZlbiBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gYnVpbGQgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgYXN5bmMgcG9zdChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIFBVVCByZXF1ZXN0IGdpdmVuIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBidWlsZCB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyBwdXQob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgbWV0aG9kOiAnUFVUJ1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIFBBVENIIHJlcXVlc3QgZ2l2ZW4gYSBzZXQgb2Ygb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGJ1aWxkIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIHBhdGNoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJ1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIERFTEVURSByZXF1ZXN0IGdpdmVuIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBidWlsZCB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyBkZWxldGUob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pKTtcbiAgfVxufVxuY29uc3QgQ2FwYWNpdG9ySHR0cCA9IHJlZ2lzdGVyUGx1Z2luKCdDYXBhY2l0b3JIdHRwJywge1xuICB3ZWI6ICgpID0+IG5ldyBDYXBhY2l0b3JIdHRwUGx1Z2luV2ViKClcbn0pO1xuLyoqKioqKioqIEVORCBIVFRQIFBMVUdJTiAqKioqKioqKi9cblxuZXhwb3J0IHsgQ2FwYWNpdG9yLCBDYXBhY2l0b3JDb29raWVzLCBDYXBhY2l0b3JFeGNlcHRpb24sIENhcGFjaXRvckh0dHAsIEV4Y2VwdGlvbkNvZGUsIFdlYlBsdWdpbiwgV2ViVmlldywgYnVpbGRSZXF1ZXN0SW5pdCwgcmVnaXN0ZXJQbHVnaW4gfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxJQUFJO0FBQUEsQ0FDSCxTQUFVQSxnQkFBZTtBQU94QixFQUFBQSxlQUFjLGVBQWUsSUFBSTtBQVFqQyxFQUFBQSxlQUFjLGFBQWEsSUFBSTtBQUNqQyxHQUFHLGtCQUFrQixnQkFBZ0IsQ0FBQyxFQUFFO0FBQ3hDLElBQU0scUJBQU4sY0FBaUMsTUFBTTtBQUFBLEVBQ3JDLFlBQVksU0FBUyxNQUFNLE1BQU07QUFDL0IsVUFBTSxPQUFPO0FBQ2IsU0FBSyxVQUFVO0FBQ2YsU0FBSyxPQUFPO0FBQ1osU0FBSyxPQUFPO0FBQUEsRUFDZDtBQUNGO0FBQ0EsSUFB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QUFJLFNBQVM7QUFBQTtBQUNqQixhQUFPLEtBQUssUUFBUSxPQUFPLE9BQU8sT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUc7QUFBQSxRQUM1RCxRQUFRO0FBQUEsTUFDVixDQUFDLENBQUM7QUFBQSxJQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS00sTUFBTSxTQUFTO0FBQUE7QUFDbkIsYUFBTyxLQUFLLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHO0FBQUEsUUFDNUQsUUFBUTtBQUFBLE1BQ1YsQ0FBQyxDQUFDO0FBQUEsSUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtNLE9BQU8sU0FBUztBQUFBO0FBQ3BCLGFBQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxPQUFPLE9BQU8sQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUFBLFFBQzVELFFBQVE7QUFBQSxNQUNWLENBQUMsQ0FBQztBQUFBLElBQ0o7QUFBQTtBQUNGO0FBQ0EsSUFBTSxnQkFBZ0IsZUFBZSxpQkFBaUI7QUFBQSxFQUNwRCxLQUFLLE1BQU0sSUFBSSx1QkFBdUI7QUFDeEMsQ0FBQzsiLCJuYW1lcyI6WyJFeGNlcHRpb25Db2RlIiwicmVnaXN0ZXJQbHVnaW4iLCJwIiwiaGVhZGVycyJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
