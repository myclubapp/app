import {
  createEvent,
  h,
  registerInstance
} from "./chunk-HFNYFWXL.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js
var cameraModalCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}";
var PWACameraModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onPhoto = createEvent(this, "onPhoto", 7);
    this.noDeviceError = createEvent(this, "noDeviceError", 7);
    this.facingMode = "user";
    this.hidePicker = false;
  }
  present() {
    return __async(this, null, function* () {
      const camera = document.createElement("pwa-camera-modal-instance");
      camera.facingMode = this.facingMode;
      camera.hidePicker = this.hidePicker;
      camera.addEventListener("onPhoto", (e) => __async(this, null, function* () {
        if (!this._modal) {
          return;
        }
        const photo = e.detail;
        this.onPhoto.emit(photo);
      }));
      camera.addEventListener("noDeviceError", (e) => __async(this, null, function* () {
        this.noDeviceError.emit(e);
      }));
      document.body.append(camera);
      this._modal = camera;
    });
  }
  dismiss() {
    return __async(this, null, function* () {
      if (!this._modal) {
        return;
      }
      this._modal && this._modal.parentNode.removeChild(this._modal);
      this._modal = null;
    });
  }
  render() {
    return h("div", null);
  }
};
PWACameraModal.style = cameraModalCss;
export {
  PWACameraModal as pwa_camera_modal
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3B3YS1jYW1lcmEtbW9kYWwuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnLi9pbmRleC0xYzVjNDdiNC5qcyc7XG5jb25zdCBjYW1lcmFNb2RhbENzcyA9IFwiOmhvc3R7ei1pbmRleDoxMDAwO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2NvbnRhaW46c3RyaWN0fS53cmFwcGVyey1tcy1mbGV4OjE7ZmxleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4xNSl9LmNvbnRlbnR7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtib3gtc2hhZG93OjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTt3aWR0aDo2MDBweDtoZWlnaHQ6NjAwcHh9XCI7XG5jb25zdCBQV0FDYW1lcmFNb2RhbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5vblBob3RvID0gY3JlYXRlRXZlbnQodGhpcywgXCJvblBob3RvXCIsIDcpO1xuICAgIHRoaXMubm9EZXZpY2VFcnJvciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwibm9EZXZpY2VFcnJvclwiLCA3KTtcbiAgICB0aGlzLmZhY2luZ01vZGUgPSAndXNlcic7XG4gICAgdGhpcy5oaWRlUGlja2VyID0gZmFsc2U7XG4gIH1cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCBjYW1lcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwd2EtY2FtZXJhLW1vZGFsLWluc3RhbmNlJyk7XG4gICAgY2FtZXJhLmZhY2luZ01vZGUgPSB0aGlzLmZhY2luZ01vZGU7XG4gICAgY2FtZXJhLmhpZGVQaWNrZXIgPSB0aGlzLmhpZGVQaWNrZXI7XG4gICAgY2FtZXJhLmFkZEV2ZW50TGlzdGVuZXIoJ29uUGhvdG8nLCBhc3luYyBlID0+IHtcbiAgICAgIGlmICghdGhpcy5fbW9kYWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcGhvdG8gPSBlLmRldGFpbDtcbiAgICAgIHRoaXMub25QaG90by5lbWl0KHBob3RvKTtcbiAgICB9KTtcbiAgICBjYW1lcmEuYWRkRXZlbnRMaXN0ZW5lcignbm9EZXZpY2VFcnJvcicsIGFzeW5jIGUgPT4ge1xuICAgICAgdGhpcy5ub0RldmljZUVycm9yLmVtaXQoZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FtZXJhKTtcbiAgICB0aGlzLl9tb2RhbCA9IGNhbWVyYTtcbiAgfVxuICBhc3luYyBkaXNtaXNzKCkge1xuICAgIGlmICghdGhpcy5fbW9kYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbW9kYWwgJiYgdGhpcy5fbW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9tb2RhbCk7XG4gICAgdGhpcy5fbW9kYWwgPSBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCBudWxsKTtcbiAgfVxufTtcblBXQUNhbWVyYU1vZGFsLnN0eWxlID0gY2FtZXJhTW9kYWxDc3M7XG5leHBvcnQgeyBQV0FDYW1lcmFNb2RhbCBhcyBwd2FfY2FtZXJhX21vZGFsIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxpQkFBaUIsTUFBTTtBQUFBLEVBQzNCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssVUFBVSxZQUFZLE1BQU0sV0FBVyxDQUFDO0FBQzdDLFNBQUssZ0JBQWdCLFlBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxTQUFLLGFBQWE7QUFDbEIsU0FBSyxhQUFhO0FBQUEsRUFDcEI7QUFBQSxFQUNNLFVBQVU7QUFBQTtBQUNkLFlBQU0sU0FBUyxTQUFTLGNBQWMsMkJBQTJCO0FBQ2pFLGFBQU8sYUFBYSxLQUFLO0FBQ3pCLGFBQU8sYUFBYSxLQUFLO0FBQ3pCLGFBQU8saUJBQWlCLFdBQVcsQ0FBTSxNQUFLO0FBQzVDLFlBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEI7QUFBQSxRQUNGO0FBQ0EsY0FBTSxRQUFRLEVBQUU7QUFDaEIsYUFBSyxRQUFRLEtBQUssS0FBSztBQUFBLE1BQ3pCLEVBQUM7QUFDRCxhQUFPLGlCQUFpQixpQkFBaUIsQ0FBTSxNQUFLO0FBQ2xELGFBQUssY0FBYyxLQUFLLENBQUM7QUFBQSxNQUMzQixFQUFDO0FBQ0QsZUFBUyxLQUFLLE9BQU8sTUFBTTtBQUMzQixXQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUFBO0FBQUEsRUFDTSxVQUFVO0FBQUE7QUFDZCxVQUFJLENBQUMsS0FBSyxRQUFRO0FBQ2hCO0FBQUEsTUFDRjtBQUNBLFdBQUssVUFBVSxLQUFLLE9BQU8sV0FBVyxZQUFZLEtBQUssTUFBTTtBQUM3RCxXQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUFBO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE9BQU8sSUFBSTtBQUFBLEVBQ3RCO0FBQ0Y7QUFDQSxlQUFlLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
