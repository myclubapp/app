import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js
var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var IonBackdropIosStyle0 = backdropIosCss;
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var IonBackdropMdStyle0 = backdropMdCss;
var Backdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "7abaf2c310aa399607451b14063265e8a5846938",
      "aria-hidden": "true",
      class: {
        [mode]: true,
        "backdrop-hide": !this.visible,
        "backdrop-no-tappable": !this.tappable
      }
    });
  }
};
Backdrop.style = {
  ios: IonBackdropIosStyle0,
  md: IonBackdropMdStyle0
};
export {
  Backdrop as ion_backdrop
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-backdrop.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYmFja2Ryb3AuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZSBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5jb25zdCBiYWNrZHJvcElvc0NzcyA9IFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbnRhaW46c3RyaWN0O2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC4wMTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7ei1pbmRleDoyfTpob3N0KC5iYWNrZHJvcC1oaWRlKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5iYWNrZHJvcC1uby10YXBwYWJsZSl7Y3Vyc29yOmF1dG99Omhvc3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2Ryb3AtY29sb3IsICMwMDApfVwiO1xuY29uc3QgSW9uQmFja2Ryb3BJb3NTdHlsZTAgPSBiYWNrZHJvcElvc0NzcztcbmNvbnN0IGJhY2tkcm9wTWRDc3MgPSBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtjb250YWluOnN0cmljdDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuMDE7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lO3otaW5kZXg6Mn06aG9zdCguYmFja2Ryb3AtaGlkZSl7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYmFja2Ryb3Atbm8tdGFwcGFibGUpe2N1cnNvcjphdXRvfTpob3N0e2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWJhY2tkcm9wLWNvbG9yLCAjMDAwKX1cIjtcbmNvbnN0IElvbkJhY2tkcm9wTWRTdHlsZTAgPSBiYWNrZHJvcE1kQ3NzO1xuY29uc3QgQmFja2Ryb3AgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQmFja2Ryb3BUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJhY2tkcm9wVGFwXCIsIDcpO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy50YXBwYWJsZSA9IHRydWU7XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICB9XG4gIG9uTW91c2VEb3duKGV2KSB7XG4gICAgdGhpcy5lbWl0VGFwKGV2KTtcbiAgfVxuICBlbWl0VGFwKGV2KSB7XG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcHBhYmxlKSB7XG4gICAgICB0aGlzLmlvbkJhY2tkcm9wVGFwLmVtaXQoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzdhYmFmMmMzMTBhYTM5OTYwNzQ1MWIxNDA2MzI2NWU4YTU4NDY5MzgnLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2JhY2tkcm9wLWhpZGUnOiAhdGhpcy52aXNpYmxlLFxuICAgICAgICAnYmFja2Ryb3Atbm8tdGFwcGFibGUnOiAhdGhpcy50YXBwYWJsZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuQmFja2Ryb3Auc3R5bGUgPSB7XG4gIGlvczogSW9uQmFja2Ryb3BJb3NTdHlsZTAsXG4gIG1kOiBJb25CYWNrZHJvcE1kU3R5bGUwXG59O1xuZXhwb3J0IHsgQmFja2Ryb3AgYXMgaW9uX2JhY2tkcm9wIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHVCQUF1QjtBQUM3QixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLHNCQUFzQjtBQUM1QixJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssaUJBQWlCLFlBQVksTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxTQUFLLFVBQVU7QUFDZixTQUFLLFdBQVc7QUFDaEIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsWUFBWSxJQUFJO0FBQ2QsU0FBSyxRQUFRLEVBQUU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsUUFBUSxJQUFJO0FBQ1YsUUFBSSxLQUFLLGlCQUFpQjtBQUN4QixTQUFHLGVBQWU7QUFDbEIsU0FBRyxnQkFBZ0I7QUFBQSxJQUNyQjtBQUNBLFFBQUksS0FBSyxVQUFVO0FBQ2pCLFdBQUssZUFBZSxLQUFLO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLFFBQ0wsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLGlCQUFpQixDQUFDLEtBQUs7QUFBQSxRQUN2Qix3QkFBd0IsQ0FBQyxLQUFLO0FBQUEsTUFDaEM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFDQSxTQUFTLFFBQVE7QUFBQSxFQUNmLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
