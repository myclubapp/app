import {
  inheritAttributes
} from "./chunk-RRWPYKYY.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-img.entry.js
var imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
var IonImgStyle0 = imgCss;
var Img = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
    this.ionError = createEvent(this, "ionError", 7);
    this.inheritedAttributes = {};
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
    this.loadSrc = void 0;
    this.loadError = void 0;
    this.alt = void 0;
    this.src = void 0;
  }
  srcChanged() {
    this.addIO();
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["draggable"]);
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === void 0) {
      return;
    }
    if (typeof window !== "undefined" && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver((data) => {
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    } else {
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  render() {
    const {
      loadSrc,
      alt,
      onLoad,
      loadError,
      inheritedAttributes
    } = this;
    const {
      draggable
    } = inheritedAttributes;
    return h(Host, {
      key: "da600442894427dee1974a28e545613afac69fca",
      class: getIonMode(this)
    }, h("img", {
      key: "16df0c7069af86c0fa7ce5af598bc0f63b4eb71a",
      decoding: "async",
      src: loadSrc,
      alt,
      onLoad,
      onError: loadError,
      part: "image",
      draggable: isDraggable(draggable)
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "src": ["srcChanged"]
    };
  }
};
var isDraggable = (draggable) => {
  switch (draggable) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return void 0;
  }
};
Img.style = IonImgStyle0;
export {
  Img as ion_img
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-img.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW1nLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBoIGFzIGluaGVyaXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IGltZ0NzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9jazstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufWltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDppbmhlcml0O29iamVjdC1maXQ6aW5oZXJpdDstby1vYmplY3QtcG9zaXRpb246aW5oZXJpdDtvYmplY3QtcG9zaXRpb246aW5oZXJpdH1cIjtcbmNvbnN0IElvbkltZ1N0eWxlMCA9IGltZ0NzcztcbmNvbnN0IEltZyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25JbWdXaWxsTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW1nV2lsbExvYWRcIiwgNyk7XG4gICAgdGhpcy5pb25JbWdEaWRMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbWdEaWRMb2FkXCIsIDcpO1xuICAgIHRoaXMuaW9uRXJyb3IgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkVycm9yXCIsIDcpO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMub25Mb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25JbWdEaWRMb2FkLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25FcnJvciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW9uRXJyb3IuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5sb2FkU3JjID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZEVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWx0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3JjID0gdW5kZWZpbmVkO1xuICB9XG4gIHNyY0NoYW5nZWQoKSB7XG4gICAgdGhpcy5hZGRJTygpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnZHJhZ2dhYmxlJ10pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5hZGRJTygpO1xuICB9XG4gIGFkZElPKCkge1xuICAgIGlmICh0aGlzLnNyYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJiAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeScgaW4gd2luZG93ICYmICdpc0ludGVyc2VjdGluZycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSB7XG4gICAgICB0aGlzLnJlbW92ZUlPKCk7XG4gICAgICB0aGlzLmlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGRhdGEgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogT24gc2xvd2VyIGRldmljZXMsIGl0IGlzIHBvc3NpYmxlIGZvciBhbiBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgZW50cnkgdG8gY29udGFpbiBtdWx0aXBsZVxuICAgICAgICAgKiBvYmplY3RzIGluIHRoZSBhcnJheS4gVGhpcyBoYXBwZW5zIHdoZW4gcXVpY2tseSBzY3JvbGxpbmcgYW4gaW1hZ2UgaW50byB2aWV3IGFuZCB0aGVuIG91dCBvZlxuICAgICAgICAgKiB2aWV3LiBJbiB0aGlzIGNhc2UsIHRoZSBsYXN0IG9iamVjdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJTygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW8ub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmFsbCBiYWNrIHRvIHNldFRpbWVvdXQgZm9yIFNhZmFyaSBhbmQgSUVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkKCksIDIwMCk7XG4gICAgfVxuICB9XG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkRXJyb3IgPSB0aGlzLm9uRXJyb3I7XG4gICAgdGhpcy5sb2FkU3JjID0gdGhpcy5zcmM7XG4gICAgdGhpcy5pb25JbWdXaWxsTG9hZC5lbWl0KCk7XG4gIH1cbiAgcmVtb3ZlSU8oKSB7XG4gICAgaWYgKHRoaXMuaW8pIHtcbiAgICAgIHRoaXMuaW8uZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvYWRTcmMsXG4gICAgICBhbHQsXG4gICAgICBvbkxvYWQsXG4gICAgICBsb2FkRXJyb3IsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgZHJhZ2dhYmxlXG4gICAgfSA9IGluaGVyaXRlZEF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZGE2MDA0NDI4OTQ0MjdkZWUxOTc0YTI4ZTU0NTYxM2FmYWM2OWZjYScsXG4gICAgICBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKVxuICAgIH0sIGgoXCJpbWdcIiwge1xuICAgICAga2V5OiAnMTZkZjBjNzA2OWFmODZjMGZhN2NlNWFmNTk4YmMwZjYzYjRlYjcxYScsXG4gICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgc3JjOiBsb2FkU3JjLFxuICAgICAgYWx0OiBhbHQsXG4gICAgICBvbkxvYWQ6IG9uTG9hZCxcbiAgICAgIG9uRXJyb3I6IGxvYWRFcnJvcixcbiAgICAgIHBhcnQ6IFwiaW1hZ2VcIixcbiAgICAgIGRyYWdnYWJsZTogaXNEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJzcmNcIjogW1wic3JjQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG4vKipcbiAqIEVudW1lcmF0ZWQgc3RyaW5ncyBtdXN0IGJlIHNldCBhcyBib29sZWFuc1xuICogYXMgU3RlbmNpbCB3aWxsIG5vdCByZW5kZXIgJ2ZhbHNlJyBpbiB0aGUgRE9NLlxuICogVGhlIG5lZWQgdG8gZXhwbGljaXRseSByZW5kZXIgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gKiBhcyBvbmx5IGNlcnRhaW4gZWxlbWVudHMgYXJlIGRyYWdnYWJsZSBieSBkZWZhdWx0LlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy9kcmFnZ2FibGUuXG4gKi9cbmNvbnN0IGlzRHJhZ2dhYmxlID0gZHJhZ2dhYmxlID0+IHtcbiAgc3dpdGNoIChkcmFnZ2FibGUpIHtcbiAgICBjYXNlICd0cnVlJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcbkltZy5zdHlsZSA9IElvbkltZ1N0eWxlMDtcbmV4cG9ydCB7IEltZyBhcyBpb25faW1nIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxTQUFTO0FBQ2YsSUFBTSxlQUFlO0FBQ3JCLElBQU0sTUFBTSxNQUFNO0FBQUEsRUFDaEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxpQkFBaUIsWUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELFNBQUssZ0JBQWdCLFlBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUMvQyxTQUFLLHNCQUFzQixDQUFDO0FBQzVCLFNBQUssU0FBUyxNQUFNO0FBQ2xCLFdBQUssY0FBYyxLQUFLO0FBQUEsSUFDMUI7QUFDQSxTQUFLLFVBQVUsTUFBTTtBQUNuQixXQUFLLFNBQVMsS0FBSztBQUFBLElBQ3JCO0FBQ0EsU0FBSyxVQUFVO0FBQ2YsU0FBSyxZQUFZO0FBQ2pCLFNBQUssTUFBTTtBQUNYLFNBQUssTUFBTTtBQUFBLEVBQ2I7QUFBQSxFQUNBLGFBQWE7QUFDWCxTQUFLLE1BQU07QUFBQSxFQUNiO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsU0FBSyxzQkFBc0Isa0JBQWtCLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUFBLEVBQ3JFO0FBQUEsRUFDQSxtQkFBbUI7QUFDakIsU0FBSyxNQUFNO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFFBQUksS0FBSyxRQUFRLFFBQVc7QUFDMUI7QUFBQSxJQUNGO0FBQ0EsUUFBSSxPQUFPLFdBQVcsZUFBZSwwQkFBMEIsVUFBVSwrQkFBK0IsVUFBVSxvQkFBb0IsT0FBTywwQkFBMEIsV0FBVztBQUNoTCxXQUFLLFNBQVM7QUFDZCxXQUFLLEtBQUssSUFBSSxxQkFBcUIsVUFBUTtBQU16QyxZQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsRUFBRSxnQkFBZ0I7QUFDeEMsZUFBSyxLQUFLO0FBQ1YsZUFBSyxTQUFTO0FBQUEsUUFDaEI7QUFBQSxNQUNGLENBQUM7QUFDRCxXQUFLLEdBQUcsUUFBUSxLQUFLLEVBQUU7QUFBQSxJQUN6QixPQUFPO0FBRUwsaUJBQVcsTUFBTSxLQUFLLEtBQUssR0FBRyxHQUFHO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQ0wsU0FBSyxZQUFZLEtBQUs7QUFDdEIsU0FBSyxVQUFVLEtBQUs7QUFDcEIsU0FBSyxlQUFlLEtBQUs7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsV0FBVztBQUNULFFBQUksS0FBSyxJQUFJO0FBQ1gsV0FBSyxHQUFHLFdBQVc7QUFDbkIsV0FBSyxLQUFLO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0YsSUFBSTtBQUNKLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLFdBQVcsSUFBSTtBQUFBLElBQ3hCLEdBQUcsRUFBRSxPQUFPO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFdBQVcsWUFBWSxTQUFTO0FBQUEsSUFDbEMsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLE9BQU8sQ0FBQyxZQUFZO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQ0Y7QUFRQSxJQUFNLGNBQWMsZUFBYTtBQUMvQixVQUFRLFdBQVc7QUFBQSxJQUNqQixLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1QsS0FBSztBQUNILGFBQU87QUFBQSxJQUNUO0FBQ0UsYUFBTztBQUFBLEVBQ1g7QUFDRjtBQUNBLElBQUksUUFBUTsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
