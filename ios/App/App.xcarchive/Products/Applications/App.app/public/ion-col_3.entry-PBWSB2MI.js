import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  forceUpdate,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-col_3.entry.js
var SIZE_TO_MEDIA = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};
var matchBreakpoint = (breakpoint) => {
  if (breakpoint === void 0 || breakpoint === "") {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
var colCss = ":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}";
var IonColStyle0 = colCss;
var win = typeof window !== "undefined" ? window : void 0;
var SUPPORTS_VARS = win && !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
var BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
var Col = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.offset = void 0;
    this.offsetXs = void 0;
    this.offsetSm = void 0;
    this.offsetMd = void 0;
    this.offsetLg = void 0;
    this.offsetXl = void 0;
    this.pull = void 0;
    this.pullXs = void 0;
    this.pullSm = void 0;
    this.pullMd = void 0;
    this.pullLg = void 0;
    this.pullXl = void 0;
    this.push = void 0;
    this.pushXs = void 0;
    this.pushSm = void 0;
    this.pushMd = void 0;
    this.pushLg = void 0;
    this.pushXl = void 0;
    this.size = void 0;
    this.sizeXs = void 0;
    this.sizeSm = void 0;
    this.sizeMd = void 0;
    this.sizeLg = void 0;
    this.sizeXl = void 0;
  }
  onResize() {
    forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== void 0) {
        matched = columns;
      }
    }
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns("size");
    if (!columns || columns === "") {
      return;
    }
    const colSize = columns === "auto" ? "auto" : (
      // If CSS supports variables we should use the grid columns var
      SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)` : (
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        columns / 12 * 100 + "%"
      )
    );
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    const amount = SUPPORTS_VARS ? (
      // If CSS supports variables we should use the grid columns var
      `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
    ) : (
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns > 0 && columns < 12 ? columns / 12 * 100 + "%" : "auto"
    );
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
  }
  calculatePull(isRTL) {
    return this.calculatePosition("pull", isRTL ? "left" : "right");
  }
  calculatePush(isRTL) {
    return this.calculatePosition("push", isRTL ? "right" : "left");
  }
  render() {
    const isRTL = document.dir === "rtl";
    const mode = getIonMode(this);
    return h(Host, {
      key: "32ed75d81dd09d9bc8999f6d42e5b3cb99c84d91",
      class: {
        [mode]: true
      },
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize())
    }, h("slot", {
      key: "38f8d0440c20cc6d1b1d6a654d07f16de61d8134"
    }));
  }
};
Col.style = IonColStyle0;
var gridCss = ":host{-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;display:block;-ms-flex:1;flex:1}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";
var IonGridStyle0 = gridCss;
var Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fixed = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "617127ecfabf9bf615bef1dda1be3fed5a065949",
      class: {
        [mode]: true,
        "grid-fixed": this.fixed
      }
    }, h("slot", {
      key: "c781fff853b093d8f44bdb7943bbc4f17c903803"
    }));
  }
};
Grid.style = IonGridStyle0;
var rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
var IonRowStyle0 = rowCss;
var Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "a690022e2abdce6946d24264574e4aa0886a8ea5",
      class: getIonMode(this)
    }, h("slot", {
      key: "d1a0e831dd1dbfe7877d3ad01d0a3045a5fb29e3"
    }));
  }
};
Row.style = IonRowStyle0;
export {
  Col as ion_col,
  Grid as ion_grid,
  Row as ion_row
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-col_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY29sXzMuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaSBhcyBmb3JjZVVwZGF0ZSwgaCwgZSBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5jb25zdCBTSVpFX1RPX01FRElBID0ge1xuICB4czogJyhtaW4td2lkdGg6IDBweCknLFxuICBzbTogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGc6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJyhtaW4td2lkdGg6IDEyMDBweCknXG59O1xuLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdyBtYXRjaGVzIHRoZSBtZWRpYSBxdWVyeVxuLy8gYXQgdGhlIGJyZWFrcG9pbnQgcGFzc2VkXG4vLyBlLmcuIG1hdGNoQnJlYWtwb2ludCgnc20nKSA9PiB0cnVlIGlmIHNjcmVlbiB3aWR0aCBleGNlZWRzIDU3NnB4XG5jb25zdCBtYXRjaEJyZWFrcG9pbnQgPSBicmVha3BvaW50ID0+IHtcbiAgaWYgKGJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCB8fCBicmVha3BvaW50ID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBTSVpFX1RPX01FRElBW2JyZWFrcG9pbnRdO1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KS5tYXRjaGVzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBjb2xDc3MgPSBcIjpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteHMsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjA7ZmxleC1iYXNpczowOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttaW4taGVpZ2h0OjFweH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpezpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXNtLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXNtLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1tZCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1tZCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGcsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy10b3A6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGcsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSl9fVwiO1xuY29uc3QgSW9uQ29sU3R5bGUwID0gY29sQ3NzO1xuY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuY29uc3QgU1VQUE9SVFNfVkFSUyA9IHdpbiAmJiAhISh3aW4uQ1NTICYmIHdpbi5DU1Muc3VwcG9ydHMgJiYgd2luLkNTUy5zdXBwb3J0cygnLS1hOiAwJykpO1xuY29uc3QgQlJFQUtQT0lOVFMgPSBbJycsICd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddO1xuY29uc3QgQ29sID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLm9mZnNldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldFhzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub2Zmc2V0U20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vZmZzZXRNZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldExnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub2Zmc2V0WGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wdWxsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVsbFhzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVsbFNtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVsbE1kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVsbExnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVsbFhsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHVzaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB1c2hYcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB1c2hTbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB1c2hNZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB1c2hMZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB1c2hYbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpemUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplWHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplU20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplTWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplTGcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplWGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25SZXNpemUoKSB7XG4gICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gIH1cbiAgLy8gTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgYnJlYWtwb2ludHMgdG8gc2VlIGlmIHRoZSBtZWRpYSBxdWVyeVxuICAvLyBtYXRjaGVzIGFuZCBncmFiIHRoZSBjb2x1bW4gdmFsdWUgZnJvbSB0aGUgcmVsZXZhbnQgcHJvcCBpZiBzb1xuICBnZXRDb2x1bW5zKHByb3BlcnR5KSB7XG4gICAgbGV0IG1hdGNoZWQ7XG4gICAgZm9yIChjb25zdCBicmVha3BvaW50IG9mIEJSRUFLUE9JTlRTKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gbWF0Y2hCcmVha3BvaW50KGJyZWFrcG9pbnQpO1xuICAgICAgLy8gR3JhYiB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5LCBpZiBpdCBleGlzdHMgYW5kIG91clxuICAgICAgLy8gbWVkaWEgcXVlcnkgbWF0Y2hlcyB3ZSByZXR1cm4gdGhlIHZhbHVlXG4gICAgICBjb25zdCBjb2x1bW5zID0gdGhpc1twcm9wZXJ0eSArIGJyZWFrcG9pbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBicmVha3BvaW50LnNsaWNlKDEpXTtcbiAgICAgIGlmIChtYXRjaGVzICYmIGNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXRjaGVkID0gY29sdW1ucztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBsYXN0IG1hdGNoZWQgY29sdW1ucyBzaW5jZSB0aGUgYnJlYWtwb2ludHNcbiAgICAvLyBpbmNyZWFzZSBpbiBzaXplIGFuZCB3ZSB3YW50IHRvIHJldHVybiB0aGUgbGFyZ2VzdCBtYXRjaFxuICAgIHJldHVybiBtYXRjaGVkO1xuICB9XG4gIGNhbGN1bGF0ZVNpemUoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygnc2l6ZScpO1xuICAgIC8vIElmIHNpemUgd2Fzbid0IHNldCBmb3IgYW55IGJyZWFrcG9pbnRcbiAgICAvLyBvciBpZiB0aGUgdXNlciBzZXQgdGhlIHNpemUgd2l0aG91dCBhIHZhbHVlXG4gICAgLy8gaXQgbWVhbnMgd2UgbmVlZCB0byBzdGljayB3aXRoIHRoZSBkZWZhdWx0IGFuZCByZXR1cm5cbiAgICAvLyBlLmcuIDxpb24tY29sIHNpemUtbWQ+XG4gICAgaWYgKCFjb2x1bW5zIHx8IGNvbHVtbnMgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZSBzaXplIGlzIHNldCB0byBhdXRvIHRoZW4gZG9uJ3QgY2FsY3VsYXRlIGEgc2l6ZVxuICAgIGNvbnN0IGNvbFNpemUgPSBjb2x1bW5zID09PSAnYXV0bycgPyAnYXV0bycgOlxuICAgIC8vIElmIENTUyBzdXBwb3J0cyB2YXJpYWJsZXMgd2Ugc2hvdWxkIHVzZSB0aGUgZ3JpZCBjb2x1bW5zIHZhclxuICAgIFNVUFBPUlRTX1ZBUlMgPyBgY2FsYyhjYWxjKCR7Y29sdW1uc30gLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSlgIDpcbiAgICAvLyBDb252ZXJ0IHRoZSBjb2x1bW5zIHRvIGEgcGVyY2VudGFnZSBieSBkaXZpZGluZyBieSB0aGUgdG90YWwgbnVtYmVyXG4gICAgLy8gb2YgY29sdW1ucyAoMTIpIGFuZCB0aGVuIG11bHRpcGx5aW5nIGJ5IDEwMFxuICAgIGNvbHVtbnMgLyAxMiAqIDEwMCArICclJztcbiAgICByZXR1cm4ge1xuICAgICAgZmxleDogYDAgMCAke2NvbFNpemV9YCxcbiAgICAgIHdpZHRoOiBgJHtjb2xTaXplfWAsXG4gICAgICAnbWF4LXdpZHRoJzogYCR7Y29sU2l6ZX1gXG4gICAgfTtcbiAgfVxuICAvLyBDYWxsZWQgYnkgcHVzaCwgcHVsbCwgYW5kIG9mZnNldCBzaW5jZSB0aGV5IHVzZSB0aGUgc2FtZSBjYWxjdWxhdGlvbnNcbiAgY2FsY3VsYXRlUG9zaXRpb24ocHJvcGVydHksIG1vZGlmaWVyKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucyhwcm9wZXJ0eSk7XG4gICAgaWYgKCFjb2x1bW5zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgY29sdW1ucyBwYXNzZWQgYXJlIGdyZWF0ZXIgdGhhbiAwIGFuZCBsZXNzIHRoYW5cbiAgICAvLyAxMiB3ZSBjYW4gcG9zaXRpb24gdGhlIGNvbHVtbiwgZWxzZSBkZWZhdWx0IHRvIGF1dG9cbiAgICBjb25zdCBhbW91bnQgPSBTVVBQT1JUU19WQVJTID9cbiAgICAvLyBJZiBDU1Mgc3VwcG9ydHMgdmFyaWFibGVzIHdlIHNob3VsZCB1c2UgdGhlIGdyaWQgY29sdW1ucyB2YXJcbiAgICBgY2FsYyhjYWxjKCR7Y29sdW1uc30gLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSlgIDpcbiAgICAvLyBDb252ZXJ0IHRoZSBjb2x1bW5zIHRvIGEgcGVyY2VudGFnZSBieSBkaXZpZGluZyBieSB0aGUgdG90YWwgbnVtYmVyXG4gICAgLy8gb2YgY29sdW1ucyAoMTIpIGFuZCB0aGVuIG11bHRpcGx5aW5nIGJ5IDEwMFxuICAgIGNvbHVtbnMgPiAwICYmIGNvbHVtbnMgPCAxMiA/IGNvbHVtbnMgLyAxMiAqIDEwMCArICclJyA6ICdhdXRvJztcbiAgICByZXR1cm4ge1xuICAgICAgW21vZGlmaWVyXTogYW1vdW50XG4gICAgfTtcbiAgfVxuICBjYWxjdWxhdGVPZmZzZXQoaXNSVEwpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVQb3NpdGlvbignb2Zmc2V0JywgaXNSVEwgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tbGVmdCcpO1xuICB9XG4gIGNhbGN1bGF0ZVB1bGwoaXNSVEwpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigncHVsbCcsIGlzUlRMID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gIH1cbiAgY2FsY3VsYXRlUHVzaChpc1JUTCkge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCdwdXNoJywgaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzMyZWQ3NWQ4MWRkMDlkOWJjODk5OWY2ZDQyZTViM2NiOTljODRkOTEnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY2FsY3VsYXRlT2Zmc2V0KGlzUlRMKSksIHRoaXMuY2FsY3VsYXRlUHVsbChpc1JUTCkpLCB0aGlzLmNhbGN1bGF0ZVB1c2goaXNSVEwpKSwgdGhpcy5jYWxjdWxhdGVTaXplKCkpXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMzhmOGQwNDQwYzIwY2M2ZDFiMWQ2YTY1NGQwN2YxNmRlNjFkODEzNCdcbiAgICB9KSk7XG4gIH1cbn07XG5Db2wuc3R5bGUgPSBJb25Db2xTdHlsZTA7XG5jb25zdCBncmlkQ3NzID0gXCI6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy10b3A6dmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bztkaXNwbGF5OmJsb2NrOy1tcy1mbGV4OjE7ZmxleDoxfUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpezpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy10b3A6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpezpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKX19Omhvc3QoLmdyaWQtZml4ZWQpe3dpZHRoOnZhcigtLWlvbi1ncmlkLXdpZHRoLXhzLCB2YXIoLS1pb24tZ3JpZC13aWR0aCwgMTAwJSkpO21heC13aWR0aDoxMDAlfUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7Omhvc3QoLmdyaWQtZml4ZWQpe3dpZHRoOnZhcigtLWlvbi1ncmlkLXdpZHRoLXNtLCB2YXIoLS1pb24tZ3JpZC13aWR0aCwgNTQwcHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXs6aG9zdCguZ3JpZC1maXhlZCl7d2lkdGg6dmFyKC0taW9uLWdyaWQtd2lkdGgtbWQsIHZhcigtLWlvbi1ncmlkLXdpZHRoLCA3MjBweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpezpob3N0KC5ncmlkLWZpeGVkKXt3aWR0aDp2YXIoLS1pb24tZ3JpZC13aWR0aC1sZywgdmFyKC0taW9uLWdyaWQtd2lkdGgsIDk2MHB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpezpob3N0KC5ncmlkLWZpeGVkKXt3aWR0aDp2YXIoLS1pb24tZ3JpZC13aWR0aC14bCwgdmFyKC0taW9uLWdyaWQtd2lkdGgsIDExNDBweCkpfX06aG9zdCguaW9uLW5vLXBhZGRpbmcpey0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6MDstLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzOjA7LS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbTowOy0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQ6MDstLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnOjA7LS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bDowfVwiO1xuY29uc3QgSW9uR3JpZFN0eWxlMCA9IGdyaWRDc3M7XG5jb25zdCBHcmlkID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmZpeGVkID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzYxNzEyN2VjZmFiZjliZjYxNWJlZjFkZGExYmUzZmVkNWEwNjU5NDknLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnZ3JpZC1maXhlZCc6IHRoaXMuZml4ZWRcbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdjNzgxZmZmODUzYjA5M2Q4ZjQ0YmRiNzk0M2JiYzRmMTdjOTAzODAzJ1xuICAgIH0pKTtcbiAgfVxufTtcbkdyaWQuc3R5bGUgPSBJb25HcmlkU3R5bGUwO1xuY29uc3Qgcm93Q3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9XCI7XG5jb25zdCBJb25Sb3dTdHlsZTAgPSByb3dDc3M7XG5jb25zdCBSb3cgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdhNjkwMDIyZTJhYmRjZTY5NDZkMjQyNjQ1NzRlNGFhMDg4NmE4ZWE1JyxcbiAgICAgIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZDFhMGU4MzFkZDFkYmZlNzg3N2QzYWQwMWQwYTMwNDVhNWZiMjllMydcbiAgICB9KSk7XG4gIH1cbn07XG5Sb3cuc3R5bGUgPSBJb25Sb3dTdHlsZTA7XG5leHBv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
