import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/network/dist/esm/web.js
function translatedConnection() {
  const connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
  let result = "unknown";
  const type = connection ? connection.type || connection.effectiveType : null;
  if (type && typeof type === "string") {
    switch (type) {
      // possible type values
      case "bluetooth":
      case "cellular":
        result = "cellular";
        break;
      case "none":
        result = "none";
        break;
      case "ethernet":
      case "wifi":
      case "wimax":
        result = "wifi";
        break;
      case "other":
      case "unknown":
        result = "unknown";
        break;
      // possible effectiveType values
      case "slow-2g":
      case "2g":
      case "3g":
        result = "cellular";
        break;
      case "4g":
        result = "wifi";
        break;
      default:
        break;
    }
  }
  return result;
}
var NetworkWeb = class extends WebPlugin {
  constructor() {
    super();
    this.handleOnline = () => {
      const connectionType = translatedConnection();
      const status = {
        connected: true,
        connectionType
      };
      this.notifyListeners("networkStatusChange", status);
    };
    this.handleOffline = () => {
      const status = {
        connected: false,
        connectionType: "none"
      };
      this.notifyListeners("networkStatusChange", status);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("online", this.handleOnline);
      window.addEventListener("offline", this.handleOffline);
    }
  }
  getStatus() {
    return __async(this, null, function* () {
      if (!window.navigator) {
        throw this.unavailable("Browser does not support the Network Information API");
      }
      const connected = window.navigator.onLine;
      const connectionType = translatedConnection();
      const status = {
        connected,
        connectionType: connected ? connectionType : "none"
      };
      return status;
    });
  }
};
var Network = new NetworkWeb();
export {
  Network,
  NetworkWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL25ldHdvcmsvZGlzdC9lc20vd2ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYlBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5mdW5jdGlvbiB0cmFuc2xhdGVkQ29ubmVjdGlvbigpIHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbiB8fCB3aW5kb3cubmF2aWdhdG9yLm1vekNvbm5lY3Rpb24gfHwgd2luZG93Lm5hdmlnYXRvci53ZWJraXRDb25uZWN0aW9uO1xuICBsZXQgcmVzdWx0ID0gJ3Vua25vd24nO1xuICBjb25zdCB0eXBlID0gY29ubmVjdGlvbiA/IGNvbm5lY3Rpb24udHlwZSB8fCBjb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGUgOiBudWxsO1xuICBpZiAodHlwZSAmJiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIC8vIHBvc3NpYmxlIHR5cGUgdmFsdWVzXG4gICAgICBjYXNlICdibHVldG9vdGgnOlxuICAgICAgY2FzZSAnY2VsbHVsYXInOlxuICAgICAgICByZXN1bHQgPSAnY2VsbHVsYXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICByZXN1bHQgPSAnbm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXRoZXJuZXQnOlxuICAgICAgY2FzZSAnd2lmaSc6XG4gICAgICBjYXNlICd3aW1heCc6XG4gICAgICAgIHJlc3VsdCA9ICd3aWZpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvdGhlcic6XG4gICAgICBjYXNlICd1bmtub3duJzpcbiAgICAgICAgcmVzdWx0ID0gJ3Vua25vd24nO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHBvc3NpYmxlIGVmZmVjdGl2ZVR5cGUgdmFsdWVzXG4gICAgICBjYXNlICdzbG93LTJnJzpcbiAgICAgIGNhc2UgJzJnJzpcbiAgICAgIGNhc2UgJzNnJzpcbiAgICAgICAgcmVzdWx0ID0gJ2NlbGx1bGFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc0Zyc6XG4gICAgICAgIHJlc3VsdCA9ICd3aWZpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBjbGFzcyBOZXR3b3JrV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZU9ubGluZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gdHJhbnNsYXRlZENvbm5lY3Rpb24oKTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHtcbiAgICAgICAgY29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBjb25uZWN0aW9uVHlwZTogY29ubmVjdGlvblR5cGVcbiAgICAgIH07XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnbmV0d29ya1N0YXR1c0NoYW5nZScsIHN0YXR1cyk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU9mZmxpbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSB7XG4gICAgICAgIGNvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgIGNvbm5lY3Rpb25UeXBlOiAnbm9uZSdcbiAgICAgIH07XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnbmV0d29ya1N0YXR1c0NoYW5nZScsIHN0YXR1cyk7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCB0aGlzLmhhbmRsZU9ubGluZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIHRoaXMuaGFuZGxlT2ZmbGluZSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGdldFN0YXR1cygpIHtcbiAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgTmV0d29yayBJbmZvcm1hdGlvbiBBUEknKTtcbiAgICB9XG4gICAgY29uc3QgY29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XG4gICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSB0cmFuc2xhdGVkQ29ubmVjdGlvbigpO1xuICAgIGNvbnN0IHN0YXR1cyA9IHtcbiAgICAgIGNvbm5lY3RlZCxcbiAgICAgIGNvbm5lY3Rpb25UeXBlOiBjb25uZWN0ZWQgPyBjb25uZWN0aW9uVHlwZSA6ICdub25lJ1xuICAgIH07XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxufVxuY29uc3QgTmV0d29yayA9IG5ldyBOZXR3b3JrV2ViKCk7XG5leHBvcnQgeyBOZXR3b3JrIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsU0FBUyx1QkFBdUI7QUFDOUIsUUFBTSxhQUFhLE9BQU8sVUFBVSxjQUFjLE9BQU8sVUFBVSxpQkFBaUIsT0FBTyxVQUFVO0FBQ3JHLE1BQUksU0FBUztBQUNiLFFBQU0sT0FBTyxhQUFhLFdBQVcsUUFBUSxXQUFXLGdCQUFnQjtBQUN4RSxNQUFJLFFBQVEsT0FBTyxTQUFTLFVBQVU7QUFDcEMsWUFBUSxNQUFNO0FBQUE7QUFBQSxNQUVaLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDSCxpQkFBUztBQUNUO0FBQUEsTUFDRixLQUFLO0FBQ0gsaUJBQVM7QUFDVDtBQUFBLE1BQ0YsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUNILGlCQUFTO0FBQ1Q7QUFBQSxNQUNGLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDSCxpQkFBUztBQUNUO0FBQUE7QUFBQSxNQUVGLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDSCxpQkFBUztBQUNUO0FBQUEsTUFDRixLQUFLO0FBQ0gsaUJBQVM7QUFDVDtBQUFBLE1BQ0Y7QUFDRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ08sSUFBTSxhQUFOLGNBQXlCLFVBQVU7QUFBQSxFQUN4QyxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssZUFBZSxNQUFNO0FBQ3hCLFlBQU0saUJBQWlCLHFCQUFxQjtBQUM1QyxZQUFNLFNBQVM7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUNBLFdBQUssZ0JBQWdCLHVCQUF1QixNQUFNO0FBQUEsSUFDcEQ7QUFDQSxTQUFLLGdCQUFnQixNQUFNO0FBQ3pCLFlBQU0sU0FBUztBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsZ0JBQWdCO0FBQUEsTUFDbEI7QUFDQSxXQUFLLGdCQUFnQix1QkFBdUIsTUFBTTtBQUFBLElBQ3BEO0FBQ0EsUUFBSSxPQUFPLFdBQVcsYUFBYTtBQUNqQyxhQUFPLGlCQUFpQixVQUFVLEtBQUssWUFBWTtBQUNuRCxhQUFPLGlCQUFpQixXQUFXLEtBQUssYUFBYTtBQUFBLElBQ3ZEO0FBQUEsRUFDRjtBQUFBLEVBQ00sWUFBWTtBQUFBO0FBQ2hCLFVBQUksQ0FBQyxPQUFPLFdBQVc7QUFDckIsY0FBTSxLQUFLLFlBQVksc0RBQXNEO0FBQUEsTUFDL0U7QUFDQSxZQUFNLFlBQVksT0FBTyxVQUFVO0FBQ25DLFlBQU0saUJBQWlCLHFCQUFxQjtBQUM1QyxZQUFNLFNBQVM7QUFBQSxRQUNiO0FBQUEsUUFDQSxnQkFBZ0IsWUFBWSxpQkFBaUI7QUFBQSxNQUMvQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFDRjtBQUNBLElBQU0sVUFBVSxJQUFJLFdBQVc7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
