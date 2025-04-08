import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/app/dist/esm/web.js
var AppWeb = class extends WebPlugin {
  constructor() {
    super();
    this.handleVisibilityChange = () => {
      const data = {
        isActive: document.hidden !== true
      };
      this.notifyListeners("appStateChange", data);
      if (document.hidden) {
        this.notifyListeners("pause", null);
      } else {
        this.notifyListeners("resume", null);
      }
    };
    document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  getInfo() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  getLaunchUrl() {
    return __async(this, null, function* () {
      return {
        url: ""
      };
    });
  }
  getState() {
    return __async(this, null, function* () {
      return {
        isActive: document.hidden !== true
      };
    });
  }
  minimizeApp() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
};
export {
  AppWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2FwcC9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBBcHBXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBkb2N1bWVudC5oaWRkZW4gIT09IHRydWVcbiAgICAgIH07XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnYXBwU3RhdGVDaGFuZ2UnLCBkYXRhKTtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ3BhdXNlJywgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygncmVzdW1lJywgbnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gIH1cbiAgZXhpdEFwcCgpIHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZ2V0SW5mbygpIHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZ2V0TGF1bmNoVXJsKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICcnXG4gICAgfTtcbiAgfVxuICBhc3luYyBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IGRvY3VtZW50LmhpZGRlbiAhPT0gdHJ1ZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgbWluaW1pemVBcHAoKSB7XG4gICAgdGhyb3cgdGhpcy51bmltcGxlbWVudGVkKCdOb3QgaW1wbGVtZW50ZWQgb24gd2ViLicpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ08sSUFBTSxTQUFOLGNBQXFCLFVBQVU7QUFBQSxFQUNwQyxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUsseUJBQXlCLE1BQU07QUFDbEMsWUFBTSxPQUFPO0FBQUEsUUFDWCxVQUFVLFNBQVMsV0FBVztBQUFBLE1BQ2hDO0FBQ0EsV0FBSyxnQkFBZ0Isa0JBQWtCLElBQUk7QUFDM0MsVUFBSSxTQUFTLFFBQVE7QUFDbkIsYUFBSyxnQkFBZ0IsU0FBUyxJQUFJO0FBQUEsTUFDcEMsT0FBTztBQUNMLGFBQUssZ0JBQWdCLFVBQVUsSUFBSTtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUNBLGFBQVMsaUJBQWlCLG9CQUFvQixLQUFLLHdCQUF3QixLQUFLO0FBQUEsRUFDbEY7QUFBQSxFQUNBLFVBQVU7QUFDUixVQUFNLEtBQUssY0FBYyx5QkFBeUI7QUFBQSxFQUNwRDtBQUFBLEVBQ00sVUFBVTtBQUFBO0FBQ2QsWUFBTSxLQUFLLGNBQWMseUJBQXlCO0FBQUEsSUFDcEQ7QUFBQTtBQUFBLEVBQ00sZUFBZTtBQUFBO0FBQ25CLGFBQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxXQUFXO0FBQUE7QUFDZixhQUFPO0FBQUEsUUFDTCxVQUFVLFNBQVMsV0FBVztBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxjQUFjO0FBQUE7QUFDbEIsWUFBTSxLQUFLLGNBQWMseUJBQXlCO0FBQUEsSUFDcEQ7QUFBQTtBQUNGOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
