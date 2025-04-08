import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-HFNYFWXL.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js
var cameraModalInstanceCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}";
var PWACameraModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onPhoto = createEvent(this, "onPhoto", 7);
    this.noDeviceError = createEvent(this, "noDeviceError", 7);
    this.handlePhoto = (photo) => __async(this, null, function* () {
      this.onPhoto.emit(photo);
    });
    this.handleNoDeviceError = (photo) => __async(this, null, function* () {
      this.noDeviceError.emit(photo);
    });
    this.facingMode = "user";
    this.hidePicker = false;
    this.noDevicesText = "No camera found";
    this.noDevicesButtonText = "Choose image";
  }
  handleBackdropClick(e) {
    if (e.target !== this.el) {
      this.onPhoto.emit(null);
    }
  }
  handleComponentClick(e) {
    e.stopPropagation();
  }
  handleBackdropKeyUp(e) {
    if (e.key === "Escape") {
      this.onPhoto.emit(null);
    }
  }
  render() {
    return h("div", {
      class: "wrapper",
      onClick: (e) => this.handleBackdropClick(e)
    }, h("div", {
      class: "content"
    }, h("pwa-camera", {
      onClick: (e) => this.handleComponentClick(e),
      facingMode: this.facingMode,
      hidePicker: this.hidePicker,
      handlePhoto: this.handlePhoto,
      handleNoDeviceError: this.handleNoDeviceError,
      noDevicesButtonText: this.noDevicesButtonText,
      noDevicesText: this.noDevicesText
    })));
  }
  get el() {
    return getElement(this);
  }
};
PWACameraModal.style = cameraModalInstanceCss;
export {
  PWACameraModal as pwa_camera_modal_instance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3B3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2UuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTFjNWM0N2I0LmpzJztcbmNvbnN0IGNhbWVyYU1vZGFsSW5zdGFuY2VDc3MgPSBcIjpob3N0e3otaW5kZXg6MTAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtjb250YWluOnN0cmljdDstLWluc2V0LXdpZHRoOjYwMHB4Oy0taW5zZXQtaGVpZ2h0OjYwMHB4fS53cmFwcGVyey1tcy1mbGV4OjE7ZmxleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4xNSl9LmNvbnRlbnR7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtib3gtc2hhZG93OjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTt3aWR0aDp2YXIoLS1pbnNldC13aWR0aCk7aGVpZ2h0OnZhcigtLWluc2V0LWhlaWdodCk7bWF4LWhlaWdodDoxMDAlfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpey5jb250ZW50e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9fVwiO1xuY29uc3QgUFdBQ2FtZXJhTW9kYWwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMub25QaG90byA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwib25QaG90b1wiLCA3KTtcbiAgICB0aGlzLm5vRGV2aWNlRXJyb3IgPSBjcmVhdGVFdmVudCh0aGlzLCBcIm5vRGV2aWNlRXJyb3JcIiwgNyk7XG4gICAgdGhpcy5oYW5kbGVQaG90byA9IGFzeW5jIHBob3RvID0+IHtcbiAgICAgIHRoaXMub25QaG90by5lbWl0KHBob3RvKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTm9EZXZpY2VFcnJvciA9IGFzeW5jIHBob3RvID0+IHtcbiAgICAgIHRoaXMubm9EZXZpY2VFcnJvci5lbWl0KHBob3RvKTtcbiAgICB9O1xuICAgIHRoaXMuZmFjaW5nTW9kZSA9ICd1c2VyJztcbiAgICB0aGlzLmhpZGVQaWNrZXIgPSBmYWxzZTtcbiAgICB0aGlzLm5vRGV2aWNlc1RleHQgPSAnTm8gY2FtZXJhIGZvdW5kJztcbiAgICB0aGlzLm5vRGV2aWNlc0J1dHRvblRleHQgPSAnQ2hvb3NlIGltYWdlJztcbiAgfVxuICBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuZWwpIHtcbiAgICAgIHRoaXMub25QaG90by5lbWl0KG51bGwpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDb21wb25lbnRDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBoYW5kbGVCYWNrZHJvcEtleVVwKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMub25QaG90by5lbWl0KG51bGwpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwid3JhcHBlclwiLFxuICAgICAgb25DbGljazogZSA9PiB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2soZSlcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImNvbnRlbnRcIlxuICAgIH0sIGgoXCJwd2EtY2FtZXJhXCIsIHtcbiAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5oYW5kbGVDb21wb25lbnRDbGljayhlKSxcbiAgICAgIGZhY2luZ01vZGU6IHRoaXMuZmFjaW5nTW9kZSxcbiAgICAgIGhpZGVQaWNrZXI6IHRoaXMuaGlkZVBpY2tlcixcbiAgICAgIGhhbmRsZVBob3RvOiB0aGlzLmhhbmRsZVBob3RvLFxuICAgICAgaGFuZGxlTm9EZXZpY2VFcnJvcjogdGhpcy5oYW5kbGVOb0RldmljZUVycm9yLFxuICAgICAgbm9EZXZpY2VzQnV0dG9uVGV4dDogdGhpcy5ub0RldmljZXNCdXR0b25UZXh0LFxuICAgICAgbm9EZXZpY2VzVGV4dDogdGhpcy5ub0RldmljZXNUZXh0XG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5QV0FDYW1lcmFNb2RhbC5zdHlsZSA9IGNhbWVyYU1vZGFsSW5zdGFuY2VDc3M7XG5leHBvcnQgeyBQV0FDYW1lcmFNb2RhbCBhcyBwd2FfY2FtZXJhX21vZGFsX2luc3RhbmNlIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLElBQU0seUJBQXlCO0FBQy9CLElBQU0saUJBQWlCLE1BQU07QUFBQSxFQUMzQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFVBQVUsWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxTQUFLLGdCQUFnQixZQUFZLE1BQU0saUJBQWlCLENBQUM7QUFDekQsU0FBSyxjQUFjLENBQU0sVUFBUztBQUNoQyxXQUFLLFFBQVEsS0FBSyxLQUFLO0FBQUEsSUFDekI7QUFDQSxTQUFLLHNCQUFzQixDQUFNLFVBQVM7QUFDeEMsV0FBSyxjQUFjLEtBQUssS0FBSztBQUFBLElBQy9CO0FBQ0EsU0FBSyxhQUFhO0FBQ2xCLFNBQUssYUFBYTtBQUNsQixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLHNCQUFzQjtBQUFBLEVBQzdCO0FBQUEsRUFDQSxvQkFBb0IsR0FBRztBQUNyQixRQUFJLEVBQUUsV0FBVyxLQUFLLElBQUk7QUFDeEIsV0FBSyxRQUFRLEtBQUssSUFBSTtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EscUJBQXFCLEdBQUc7QUFDdEIsTUFBRSxnQkFBZ0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0Esb0JBQW9CLEdBQUc7QUFDckIsUUFBSSxFQUFFLFFBQVEsVUFBVTtBQUN0QixXQUFLLFFBQVEsS0FBSyxJQUFJO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE9BQU87QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFNBQVMsT0FBSyxLQUFLLG9CQUFvQixDQUFDO0FBQUEsSUFDMUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxjQUFjO0FBQUEsTUFDakIsU0FBUyxPQUFLLEtBQUsscUJBQXFCLENBQUM7QUFBQSxNQUN6QyxZQUFZLEtBQUs7QUFBQSxNQUNqQixZQUFZLEtBQUs7QUFBQSxNQUNqQixhQUFhLEtBQUs7QUFBQSxNQUNsQixxQkFBcUIsS0FBSztBQUFBLE1BQzFCLHFCQUFxQixLQUFLO0FBQUEsTUFDMUIsZUFBZSxLQUFLO0FBQUEsSUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQ0Y7QUFDQSxlQUFlLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
