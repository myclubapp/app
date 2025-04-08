import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/browser/dist/esm/web.js
var BrowserWeb = class extends WebPlugin {
  constructor() {
    super();
    this._lastWindow = null;
  }
  open(options) {
    return __async(this, null, function* () {
      this._lastWindow = window.open(options.url, options.windowName || "_blank");
    });
  }
  close() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        if (this._lastWindow != null) {
          this._lastWindow.close();
          this._lastWindow = null;
          resolve();
        } else {
          reject("No active window to close!");
        }
      });
    });
  }
};
var Browser = new BrowserWeb();
export {
  Browser,
  BrowserWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2Jyb3dzZXIvZGlzdC9lc20vd2ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYlBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5leHBvcnQgY2xhc3MgQnJvd3NlcldlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbGFzdFdpbmRvdyA9IG51bGw7XG4gIH1cbiAgYXN5bmMgb3BlbihvcHRpb25zKSB7XG4gICAgdGhpcy5fbGFzdFdpbmRvdyA9IHdpbmRvdy5vcGVuKG9wdGlvbnMudXJsLCBvcHRpb25zLndpbmRvd05hbWUgfHwgJ19ibGFuaycpO1xuICB9XG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5fbGFzdFdpbmRvdyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2xhc3RXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5fbGFzdFdpbmRvdyA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgnTm8gYWN0aXZlIHdpbmRvdyB0byBjbG9zZSEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuY29uc3QgQnJvd3NlciA9IG5ldyBCcm93c2VyV2ViKCk7XG5leHBvcnQgeyBCcm93c2VyIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ08sSUFBTSxhQUFOLGNBQXlCLFVBQVU7QUFBQSxFQUN4QyxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssY0FBYztBQUFBLEVBQ3JCO0FBQUEsRUFDTSxLQUFLLFNBQVM7QUFBQTtBQUNsQixXQUFLLGNBQWMsT0FBTyxLQUFLLFFBQVEsS0FBSyxRQUFRLGNBQWMsUUFBUTtBQUFBLElBQzVFO0FBQUE7QUFBQSxFQUNNLFFBQVE7QUFBQTtBQUNaLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLFlBQUksS0FBSyxlQUFlLE1BQU07QUFDNUIsZUFBSyxZQUFZLE1BQU07QUFDdkIsZUFBSyxjQUFjO0FBQ25CLGtCQUFRO0FBQUEsUUFDVixPQUFPO0FBQ0wsaUJBQU8sNEJBQTRCO0FBQUEsUUFDckM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFDRjtBQUNBLElBQU0sVUFBVSxJQUFJLFdBQVc7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
