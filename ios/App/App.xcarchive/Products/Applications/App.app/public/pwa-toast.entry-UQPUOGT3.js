import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-HFNYFWXL.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js
var toastCss = ':host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}';
var PWAToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = void 0;
    this.duration = 2e3;
    this.closing = null;
  }
  hostData() {
    const classes = {
      out: !!this.closing
    };
    if (this.closing !== null) {
      classes["in"] = !this.closing;
    }
    return {
      class: classes
    };
  }
  componentDidLoad() {
    setTimeout(() => {
      this.closing = false;
    });
    setTimeout(() => {
      this.close();
    }, this.duration);
  }
  close() {
    this.closing = true;
    setTimeout(() => {
      this.el.parentNode.removeChild(this.el);
    }, 1e3);
  }
  __stencil_render() {
    return h("div", {
      class: "wrapper"
    }, h("div", {
      class: "toast"
    }, this.message));
  }
  get el() {
    return getElement(this);
  }
  render() {
    return h(Host, this.hostData(), this.__stencil_render());
  }
};
PWAToast.style = toastCss;
export {
  PWAToast as pwa_toast
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3B3YS10b2FzdC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGcgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC0xYzVjNDdiNC5qcyc7XG5jb25zdCB0b2FzdENzcyA9IFwiOmhvc3R7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIwcHg7bGVmdDowO3JpZ2h0OjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7b3BhY2l0eTowfTpob3N0KC5pbil7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgMzAwbXM7dHJhbnNpdGlvbjpvcGFjaXR5IDMwMG1zO29wYWNpdHk6MX06aG9zdCgub3V0KXstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAxczt0cmFuc2l0aW9uOm9wYWNpdHkgMXM7b3BhY2l0eTowfS53cmFwcGVyey1tcy1mbGV4OjE7ZmxleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udG9hc3R7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjojZWVlO2NvbG9yOmJsYWNrO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MTBweCAxNXB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDstd2Via2l0LWJveC1zaGFkb3c6MHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIwKTtib3gtc2hhZG93OjBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMCl9XCI7XG5jb25zdCBQV0FUb2FzdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZHVyYXRpb24gPSAyMDAwO1xuICAgIHRoaXMuY2xvc2luZyA9IG51bGw7XG4gIH1cbiAgaG9zdERhdGEoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIG91dDogISF0aGlzLmNsb3NpbmdcbiAgICB9O1xuICAgIGlmICh0aGlzLmNsb3NpbmcgIT09IG51bGwpIHtcbiAgICAgIGNsYXNzZXNbJ2luJ10gPSAhdGhpcy5jbG9zaW5nO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIF9fc3RlbmNpbF9yZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwid3JhcHBlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJ0b2FzdFwiXG4gICAgfSwgdGhpcy5tZXNzYWdlKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB0aGlzLmhvc3REYXRhKCksIHRoaXMuX19zdGVuY2lsX3JlbmRlcigpKTtcbiAgfVxufTtcblBXQVRvYXN0LnN0eWxlID0gdG9hc3RDc3M7XG5leHBvcnQgeyBQV0FUb2FzdCBhcyBwd2FfdG9hc3QgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLElBQU0sV0FBVztBQUNqQixJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssVUFBVTtBQUNmLFNBQUssV0FBVztBQUNoQixTQUFLLFVBQVU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsV0FBVztBQUNULFVBQU0sVUFBVTtBQUFBLE1BQ2QsS0FBSyxDQUFDLENBQUMsS0FBSztBQUFBLElBQ2Q7QUFDQSxRQUFJLEtBQUssWUFBWSxNQUFNO0FBQ3pCLGNBQVEsSUFBSSxJQUFJLENBQUMsS0FBSztBQUFBLElBQ3hCO0FBQ0EsV0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxtQkFBbUI7QUFDakIsZUFBVyxNQUFNO0FBQ2YsV0FBSyxVQUFVO0FBQUEsSUFDakIsQ0FBQztBQUNELGVBQVcsTUFBTTtBQUNmLFdBQUssTUFBTTtBQUFBLElBQ2IsR0FBRyxLQUFLLFFBQVE7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFNBQUssVUFBVTtBQUNmLGVBQVcsTUFBTTtBQUNmLFdBQUssR0FBRyxXQUFXLFlBQVksS0FBSyxFQUFFO0FBQUEsSUFDeEMsR0FBRyxHQUFJO0FBQUEsRUFDVDtBQUFBLEVBQ0EsbUJBQW1CO0FBQ2pCLFdBQU8sRUFBRSxPQUFPO0FBQUEsTUFDZCxPQUFPO0FBQUEsSUFDVCxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLElBQ1QsR0FBRyxLQUFLLE9BQU8sQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE1BQU0sS0FBSyxTQUFTLEdBQUcsS0FBSyxpQkFBaUIsQ0FBQztBQUFBLEVBQ3pEO0FBQ0Y7QUFDQSxTQUFTLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
