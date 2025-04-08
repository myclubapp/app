import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/device/dist/esm/web.js
var DeviceWeb = class extends WebPlugin {
  getId() {
    return __async(this, null, function* () {
      return {
        identifier: this.getUid()
      };
    });
  }
  getInfo() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.userAgent) {
        throw this.unavailable("Device API not available in this browser");
      }
      const ua = navigator.userAgent;
      const uaFields = this.parseUa(ua);
      return {
        model: uaFields.model,
        platform: "web",
        operatingSystem: uaFields.operatingSystem,
        osVersion: uaFields.osVersion,
        manufacturer: navigator.vendor,
        isVirtual: false,
        webViewVersion: uaFields.browserVersion
      };
    });
  }
  getBatteryInfo() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.getBattery) {
        throw this.unavailable("Device API not available in this browser");
      }
      let battery = {};
      try {
        battery = yield navigator.getBattery();
      } catch (e) {
      }
      return {
        batteryLevel: battery.level,
        isCharging: battery.charging
      };
    });
  }
  getLanguageCode() {
    return __async(this, null, function* () {
      return {
        value: navigator.language.split("-")[0].toLowerCase()
      };
    });
  }
  getLanguageTag() {
    return __async(this, null, function* () {
      return {
        value: navigator.language
      };
    });
  }
  parseUa(ua) {
    const uaFields = {};
    const start = ua.indexOf("(") + 1;
    let end = ua.indexOf(") AppleWebKit");
    if (ua.indexOf(") Gecko") !== -1) {
      end = ua.indexOf(") Gecko");
    }
    const fields = ua.substring(start, end);
    if (ua.indexOf("Android") !== -1) {
      const tmpFields = fields.replace("; wv", "").split("; ").pop();
      if (tmpFields) {
        uaFields.model = tmpFields.split(" Build")[0];
      }
      uaFields.osVersion = fields.split("; ")[1];
    } else {
      uaFields.model = fields.split("; ")[0];
      if (typeof navigator !== "undefined" && navigator.oscpu) {
        uaFields.osVersion = navigator.oscpu;
      } else {
        if (ua.indexOf("Windows") !== -1) {
          uaFields.osVersion = fields;
        } else {
          const tmpFields = fields.split("; ").pop();
          if (tmpFields) {
            const lastParts = tmpFields.replace(" like Mac OS X", "").split(" ");
            uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, ".");
          }
        }
      }
    }
    if (/android/i.test(ua)) {
      uaFields.operatingSystem = "android";
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      uaFields.operatingSystem = "ios";
    } else if (/Win/.test(ua)) {
      uaFields.operatingSystem = "windows";
    } else if (/Mac/i.test(ua)) {
      uaFields.operatingSystem = "mac";
    } else {
      uaFields.operatingSystem = "unknown";
    }
    const isSafari = !!window.ApplePaySession;
    const isChrome = !!window.chrome;
    const isFirefox = /Firefox/.test(ua);
    const isEdge = /Edg/.test(ua);
    const isFirefoxIOS = /FxiOS/.test(ua);
    const isChromeIOS = /CriOS/.test(ua);
    const isEdgeIOS = /EdgiOS/.test(ua);
    if (isSafari || isChrome && !isEdge || isFirefoxIOS || isChromeIOS || isEdgeIOS) {
      let searchWord;
      if (isFirefoxIOS) {
        searchWord = "FxiOS";
      } else if (isChromeIOS) {
        searchWord = "CriOS";
      } else if (isEdgeIOS) {
        searchWord = "EdgiOS";
      } else if (isSafari) {
        searchWord = "Version";
      } else {
        searchWord = "Chrome";
      }
      const words = ua.split(" ");
      for (const word of words) {
        if (word.includes(searchWord)) {
          const version = word.split("/")[1];
          uaFields.browserVersion = version;
        }
      }
    } else if (isFirefox || isEdge) {
      const reverseUA = ua.split("").reverse().join("");
      const reverseVersion = reverseUA.split("/")[0];
      const version = reverseVersion.split("").reverse().join("");
      uaFields.browserVersion = version;
    }
    return uaFields;
  }
  getUid() {
    if (typeof window !== "undefined" && window.localStorage) {
      let uid = window.localStorage.getItem("_capuid");
      if (uid) {
        return uid;
      }
      uid = this.uuid4();
      window.localStorage.setItem("_capuid", uid);
      return uid;
    }
    return this.uuid4();
  }
  uuid4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
};
export {
  DeviceWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2RldmljZS9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBEZXZpY2VXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBnZXRJZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRlbnRpZmllcjogdGhpcy5nZXRVaWQoKVxuICAgIH07XG4gIH1cbiAgYXN5bmMgZ2V0SW5mbygpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ0RldmljZSBBUEkgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGNvbnN0IHVhRmllbGRzID0gdGhpcy5wYXJzZVVhKHVhKTtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWw6IHVhRmllbGRzLm1vZGVsLFxuICAgICAgcGxhdGZvcm06ICd3ZWInLFxuICAgICAgb3BlcmF0aW5nU3lzdGVtOiB1YUZpZWxkcy5vcGVyYXRpbmdTeXN0ZW0sXG4gICAgICBvc1ZlcnNpb246IHVhRmllbGRzLm9zVmVyc2lvbixcbiAgICAgIG1hbnVmYWN0dXJlcjogbmF2aWdhdG9yLnZlbmRvcixcbiAgICAgIGlzVmlydHVhbDogZmFsc2UsXG4gICAgICB3ZWJWaWV3VmVyc2lvbjogdWFGaWVsZHMuYnJvd3NlclZlcnNpb25cbiAgICB9O1xuICB9XG4gIGFzeW5jIGdldEJhdHRlcnlJbmZvKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmdldEJhdHRlcnkpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ0RldmljZSBBUEkgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gICAgbGV0IGJhdHRlcnkgPSB7fTtcbiAgICB0cnkge1xuICAgICAgYmF0dGVyeSA9IGF3YWl0IG5hdmlnYXRvci5nZXRCYXR0ZXJ5KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTGV0IGl0IGZhaWwsIHdlIGRvbid0IGNhcmVcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdHRlcnlMZXZlbDogYmF0dGVyeS5sZXZlbCxcbiAgICAgIGlzQ2hhcmdpbmc6IGJhdHRlcnkuY2hhcmdpbmdcbiAgICB9O1xuICB9XG4gIGFzeW5jIGdldExhbmd1YWdlQ29kZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdLnRvTG93ZXJDYXNlKClcbiAgICB9O1xuICB9XG4gIGFzeW5jIGdldExhbmd1YWdlVGFnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgfTtcbiAgfVxuICBwYXJzZVVhKHVhKSB7XG4gICAgY29uc3QgdWFGaWVsZHMgPSB7fTtcbiAgICBjb25zdCBzdGFydCA9IHVhLmluZGV4T2YoJygnKSArIDE7XG4gICAgbGV0IGVuZCA9IHVhLmluZGV4T2YoJykgQXBwbGVXZWJLaXQnKTtcbiAgICBpZiAodWEuaW5kZXhPZignKSBHZWNrbycpICE9PSAtMSkge1xuICAgICAgZW5kID0gdWEuaW5kZXhPZignKSBHZWNrbycpO1xuICAgIH1cbiAgICBjb25zdCBmaWVsZHMgPSB1YS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgaWYgKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHRtcEZpZWxkcyA9IGZpZWxkcy5yZXBsYWNlKCc7IHd2JywgJycpLnNwbGl0KCc7ICcpLnBvcCgpO1xuICAgICAgaWYgKHRtcEZpZWxkcykge1xuICAgICAgICB1YUZpZWxkcy5tb2RlbCA9IHRtcEZpZWxkcy5zcGxpdCgnIEJ1aWxkJylbMF07XG4gICAgICB9XG4gICAgICB1YUZpZWxkcy5vc1ZlcnNpb24gPSBmaWVsZHMuc3BsaXQoJzsgJylbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHVhRmllbGRzLm1vZGVsID0gZmllbGRzLnNwbGl0KCc7ICcpWzBdO1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5vc2NwdSkge1xuICAgICAgICB1YUZpZWxkcy5vc1ZlcnNpb24gPSBuYXZpZ2F0b3Iub3NjcHU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodWEuaW5kZXhPZignV2luZG93cycpICE9PSAtMSkge1xuICAgICAgICAgIHVhRmllbGRzLm9zVmVyc2lvbiA9IGZpZWxkcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZHMgPSBmaWVsZHMuc3BsaXQoJzsgJykucG9wKCk7XG4gICAgICAgICAgaWYgKHRtcEZpZWxkcykge1xuICAgICAgICAgICAgY29uc3QgbGFzdFBhcnRzID0gdG1wRmllbGRzLnJlcGxhY2UoJyBsaWtlIE1hYyBPUyBYJywgJycpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB1YUZpZWxkcy5vc1ZlcnNpb24gPSBsYXN0UGFydHNbbGFzdFBhcnRzLmxlbmd0aCAtIDFdLnJlcGxhY2UoL18vZywgJy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1YSkpIHtcbiAgICAgIHVhRmllbGRzLm9wZXJhdGluZ1N5c3RlbSA9ICdhbmRyb2lkJztcbiAgICB9IGVsc2UgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVhKSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICB1YUZpZWxkcy5vcGVyYXRpbmdTeXN0ZW0gPSAnaW9zJztcbiAgICB9IGVsc2UgaWYgKC9XaW4vLnRlc3QodWEpKSB7XG4gICAgICB1YUZpZWxkcy5vcGVyYXRpbmdTeXN0ZW0gPSAnd2luZG93cyc7XG4gICAgfSBlbHNlIGlmICgvTWFjL2kudGVzdCh1YSkpIHtcbiAgICAgIHVhRmllbGRzLm9wZXJhdGluZ1N5c3RlbSA9ICdtYWMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1YUZpZWxkcy5vcGVyYXRpbmdTeXN0ZW0gPSAndW5rbm93bic7XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBicm93c2VycyBiYXNlZCBvbiBub24tc3RhbmRhcmQgamF2YXNjcmlwdCBhcGlzLCBvbmx5IG5vdCB1c2VyIGFnZW50XG4gICAgY29uc3QgaXNTYWZhcmkgPSAhIXdpbmRvdy5BcHBsZVBheVNlc3Npb247XG4gICAgY29uc3QgaXNDaHJvbWUgPSAhIXdpbmRvdy5jaHJvbWU7XG4gICAgY29uc3QgaXNGaXJlZm94ID0gL0ZpcmVmb3gvLnRlc3QodWEpO1xuICAgIGNvbnN0IGlzRWRnZSA9IC9FZGcvLnRlc3QodWEpO1xuICAgIGNvbnN0IGlzRmlyZWZveElPUyA9IC9GeGlPUy8udGVzdCh1YSk7XG4gICAgY29uc3QgaXNDaHJvbWVJT1MgPSAvQ3JpT1MvLnRlc3QodWEpO1xuICAgIGNvbnN0IGlzRWRnZUlPUyA9IC9FZGdpT1MvLnRlc3QodWEpO1xuICAgIC8vIEZGIGFuZCBFZGdlIFVzZXIgQWdlbnRzIGJvdGggZW5kIHdpdGggXCIvTUFKT1IuTUlOT1JcIlxuICAgIGlmIChpc1NhZmFyaSB8fCBpc0Nocm9tZSAmJiAhaXNFZGdlIHx8IGlzRmlyZWZveElPUyB8fCBpc0Nocm9tZUlPUyB8fCBpc0VkZ2VJT1MpIHtcbiAgICAgIC8vIFNhZmFyaSB2ZXJzaW9uIGNvbWVzIGFzICAgICBcIi4uLiBWZXJzaW9uL01BSk9SLk1JTk9SIC4uLlwiXG4gICAgICAvLyBDaHJvbWUgdmVyc2lvbiBjb21lcyBhcyAgICAgXCIuLi4gQ2hyb21lL01BSk9SLk1JTk9SIC4uLlwiXG4gICAgICAvLyBGaXJlZm94SU9TIHZlcnNpb24gY29tZXMgYXMgXCIuLi4gRnhpT1MvTUFKT1IuTUlOT1IgLi4uXCJcbiAgICAgIC8vIENocm9tZUlPUyB2ZXJzaW9uIGNvbWVzIGFzICBcIi4uLiBDcmlPUy9NQUpPUi5NSU5PUiAuLi5cIlxuICAgICAgbGV0IHNlYXJjaFdvcmQ7XG4gICAgICBpZiAoaXNGaXJlZm94SU9TKSB7XG4gICAgICAgIHNlYXJjaFdvcmQgPSAnRnhpT1MnO1xuICAgICAgfSBlbHNlIGlmIChpc0Nocm9tZUlPUykge1xuICAgICAgICBzZWFyY2hXb3JkID0gJ0NyaU9TJztcbiAgICAgIH0gZWxzZSBpZiAoaXNFZGdlSU9TKSB7XG4gICAgICAgIHNlYXJjaFdvcmQgPSAnRWRnaU9TJztcbiAgICAgIH0gZWxzZSBpZiAoaXNTYWZhcmkpIHtcbiAgICAgICAgc2VhcmNoV29yZCA9ICdWZXJzaW9uJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFdvcmQgPSAnQ2hyb21lJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdvcmRzID0gdWEuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICBpZiAod29yZC5pbmNsdWRlcyhzZWFyY2hXb3JkKSkge1xuICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSB3b3JkLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgdWFGaWVsZHMuYnJvd3NlclZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0ZpcmVmb3ggfHwgaXNFZGdlKSB7XG4gICAgICBjb25zdCByZXZlcnNlVUEgPSB1YS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgY29uc3QgcmV2ZXJzZVZlcnNpb24gPSByZXZlcnNlVUEuc3BsaXQoJy8nKVswXTtcbiAgICAgIGNvbnN0IHZlcnNpb24gPSByZXZlcnNlVmVyc2lvbi5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgdWFGaWVsZHMuYnJvd3NlclZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gdWFGaWVsZHM7XG4gIH1cbiAgZ2V0VWlkKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICBsZXQgdWlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfY2FwdWlkJyk7XG4gICAgICBpZiAodWlkKSB7XG4gICAgICAgIHJldHVybiB1aWQ7XG4gICAgICB9XG4gICAgICB1aWQgPSB0aGlzLnV1aWQ0KCk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19jYXB1aWQnLCB1aWQpO1xuICAgICAgcmV0dXJuIHVpZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXVpZDQoKTtcbiAgfVxuICB1dWlkNCgpIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsXG4gICAgICAgIHYgPSBjID09PSAneCcgPyByIDogciAmIDB4MyB8IDB4ODtcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNPLElBQU0sWUFBTixjQUF3QixVQUFVO0FBQUEsRUFDakMsUUFBUTtBQUFBO0FBQ1osYUFBTztBQUFBLFFBQ0wsWUFBWSxLQUFLLE9BQU87QUFBQSxNQUMxQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ00sVUFBVTtBQUFBO0FBQ2QsVUFBSSxPQUFPLGNBQWMsZUFBZSxDQUFDLFVBQVUsV0FBVztBQUM1RCxjQUFNLEtBQUssWUFBWSwwQ0FBMEM7QUFBQSxNQUNuRTtBQUNBLFlBQU0sS0FBSyxVQUFVO0FBQ3JCLFlBQU0sV0FBVyxLQUFLLFFBQVEs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MUIsVUFBTSxZQUFZLFVBQVUsS0FBSyxFQUFFO0FBQ25DLFVBQU0sU0FBUyxNQUFNLEtBQUssRUFBRTtBQUM1QixVQUFNLGVBQWUsUUFBUSxLQUFLLEVBQUU7QUFDcEMsVUFBTSxjQUFjLFFBQVEsS0FBSyxFQUFFO0FBQ25DLFVBQU0sWUFBWSxTQUFTLEtBQUssRUFBRTtBQUVsQyxRQUFJLFlBQVksWUFBWSxDQUFDLFVBQVUsZ0JBQWdCLGVBQWUsV0FBVztBQUsvRSxVQUFJO0FBQ0osVUFBSSxjQUFjO0FBQ2hCLHFCQUFhO0FBQUEsTUFDZixXQUFXLGFBQWE7QUFDdEIscUJBQWE7QUFBQSxNQUNmLFdBQVcsV0FBVztBQUNwQixxQkFBYTtBQUFBLE1BQ2YsV0FBVyxVQUFVO0FBQ25CLHFCQUFhO0FBQUEsTUFDZixPQUFPO0FBQ0wscUJBQWE7QUFBQSxNQUNmO0FBQ0EsWUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHO0FBQzFCLGlCQUFXLFFBQVEsT0FBTztBQUN4QixZQUFJLEtBQUssU0FBUyxVQUFVLEdBQUc7QUFDN0IsZ0JBQU0sVUFBVSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakMsbUJBQVMsaUJBQWlCO0FBQUEsUUFDNUI7QUFBQSxNQUNGO0FBQUEsSUFDRixXQUFXLGFBQWEsUUFBUTtBQUM5QixZQUFNLFlBQVksR0FBRyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ2hELFlBQU0saUJBQWlCLFVBQVUsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUM3QyxZQUFNLFVBQVUsZUFBZSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQzFELGVBQVMsaUJBQWlCO0FBQUEsSUFDNUI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUNQLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxjQUFjO0FBQ3hELFVBQUksTUFBTSxPQUFPLGFBQWEsUUFBUSxTQUFTO0FBQy9DLFVBQUksS0FBSztBQUNQLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxLQUFLLE1BQU07QUFDakIsYUFBTyxhQUFhLFFBQVEsV0FBVyxHQUFHO0FBQzFDLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxLQUFLLE1BQU07QUFBQSxFQUNwQjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFdBQU8sdUNBQXVDLFFBQVEsU0FBUyxTQUFVLEdBQUc7QUFDMUUsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssR0FDN0IsSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLElBQU07QUFDaEMsYUFBTyxFQUFFLFNBQVMsRUFBRTtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
