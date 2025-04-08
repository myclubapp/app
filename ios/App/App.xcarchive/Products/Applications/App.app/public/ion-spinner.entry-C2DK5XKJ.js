import {
  SPINNERS
} from "./chunk-OFQNJW2D.js";
import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  config,
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-spinner.entry.js
var spinnerCss = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";
var IonSpinnerStyle0 = spinnerCss;
var Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
    this.duration = void 0;
    this.name = void 0;
    this.paused = false;
  }
  getName() {
    const spinnerName = this.name || config.get("spinner");
    const mode = getIonMode(this);
    if (spinnerName) {
      return spinnerName;
    }
    return mode === "ios" ? "lines" : "circular";
  }
  render() {
    var _a;
    const self = this;
    const mode = getIonMode(self);
    const spinnerName = self.getName();
    const spinner = (_a = SPINNERS[spinnerName]) !== null && _a !== void 0 ? _a : SPINNERS["lines"];
    const duration = typeof self.duration === "number" && self.duration > 10 ? self.duration : spinner.dur;
    const svgs = [];
    if (spinner.circles !== void 0) {
      for (let i = 0; i < spinner.circles; i++) {
        svgs.push(buildCircle(spinner, duration, i, spinner.circles));
      }
    } else if (spinner.lines !== void 0) {
      for (let i = 0; i < spinner.lines; i++) {
        svgs.push(buildLine(spinner, duration, i, spinner.lines));
      }
    }
    return h(Host, {
      key: "e0dfa8a3ee2a0469eb31323f506750bd77d65797",
      class: createColorClasses(self.color, {
        [mode]: true,
        [`spinner-${spinnerName}`]: true,
        "spinner-paused": self.paused || config.getBoolean("_testing")
      }),
      role: "progressbar",
      style: spinner.elmDuration ? {
        animationDuration: duration + "ms"
      } : {}
    }, svgs);
  }
};
var buildCircle = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style["animation-duration"] = duration + "ms";
  return h("svg", {
    viewBox: data.viewBox || "0 0 64 64",
    style: data.style
  }, h("circle", {
    transform: data.transform || "translate(32,32)",
    cx: data.cx,
    cy: data.cy,
    r: data.r,
    style: spinner.elmDuration ? {
      animationDuration: duration + "ms"
    } : {}
  }));
};
var buildLine = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style["animation-duration"] = duration + "ms";
  return h("svg", {
    viewBox: data.viewBox || "0 0 64 64",
    style: data.style
  }, h("line", {
    transform: "translate(32,32)",
    y1: data.y1,
    y2: data.y2
  }));
};
Spinner.style = IonSpinnerStyle0;
export {
  Spinner as ion_spinner
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-spinner.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc3Bpbm5lci5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBlIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbmZpZywgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0IHsgUyBhcyBTUElOTkVSUyB9IGZyb20gJy4vc3Bpbm5lci1jb25maWdzLTk2NGY3Y2YzLmpzJztcbmNvbnN0IHNwaW5uZXJDc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Y29sb3I6dmFyKC0tY29sb3IpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9c3Zney13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgc3Zney13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX1bZGlyPXJ0bF0gc3Zney13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXtzdmc6ZGlyKHJ0bCl7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfX06aG9zdCguc3Bpbm5lci1saW5lcykgbGluZSw6aG9zdCguc3Bpbm5lci1saW5lcy1zbWFsbCkgbGluZXtzdHJva2Utd2lkdGg6N3B4fTpob3N0KC5zcGlubmVyLWxpbmVzLXNoYXJwKSBsaW5lLDpob3N0KC5zcGlubmVyLWxpbmVzLXNoYXJwLXNtYWxsKSBsaW5le3N0cm9rZS13aWR0aDo0cHh9Omhvc3QoLnNwaW5uZXItbGluZXMpIGxpbmUsOmhvc3QoLnNwaW5uZXItbGluZXMtc21hbGwpIGxpbmUsOmhvc3QoLnNwaW5uZXItbGluZXMtc2hhcnApIGxpbmUsOmhvc3QoLnNwaW5uZXItbGluZXMtc2hhcnAtc21hbGwpIGxpbmV7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1saW5lcykgc3ZnLDpob3N0KC5zcGlubmVyLWxpbmVzLXNtYWxsKSBzdmcsOmhvc3QoLnNwaW5uZXItbGluZXMtc2hhcnApIHN2Zyw6aG9zdCguc3Bpbm5lci1saW5lcy1zaGFycC1zbWFsbCkgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItZmFkZS1vdXQgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWZhZGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZX06aG9zdCguc3Bpbm5lci1idWJibGVzKSBzdmd7LXdlYmtpdC1hbmltYXRpb246c3Bpbm5lci1zY2FsZS1vdXQgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLXNjYWxlLW91dCAxcyBsaW5lYXIgaW5maW5pdGU7ZmlsbDpjdXJyZW50Q29sb3J9Omhvc3QoLnNwaW5uZXItY2lyY2xlcykgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItZmFkZS1vdXQgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWZhZGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZTtmaWxsOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1jcmVzY2VudCkgY2lyY2xle2ZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtZGFzaGFycmF5OjEyOHB4O3N0cm9rZS1kYXNob2Zmc2V0OjgycHg7c3Ryb2tlOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1jcmVzY2VudCkgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1yb3RhdGUgMXMgbGluZWFyIGluZmluaXRlfTpob3N0KC5zcGlubmVyLWRvdHMpIGNpcmNsZXtzdHJva2Utd2lkdGg6MDtmaWxsOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1kb3RzKSBzdmd7LXdlYmtpdC1hbmltYXRpb246c3Bpbm5lci1kb3RzIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1kb3RzIDFzIGxpbmVhciBpbmZpbml0ZX06aG9zdCguc3Bpbm5lci1jaXJjdWxhcikgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXIgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWNpcmN1bGFyIGxpbmVhciBpbmZpbml0ZX06aG9zdCguc3Bpbm5lci1jaXJjdWxhcikgY2lyY2xley13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXItaW5uZXIgZWFzZS1pbi1vdXQgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXItaW5uZXIgZWFzZS1pbi1vdXQgaW5maW5pdGU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtZGFzaGFycmF5OjgwcHgsIDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0OjBweDtzdHJva2Utd2lkdGg6NS42O2ZpbGw6bm9uZX06aG9zdCguc3Bpbm5lci1wYXVzZWQpLDpob3N0KC5zcGlubmVyLXBhdXNlZCkgc3ZnLDpob3N0KC5zcGlubmVyLXBhdXNlZCkgY2lyY2xley13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH1ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1mYWRlLW91dHswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3Bpbm5lci1mYWRlLW91dHswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLXNjYWxlLW91dHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLCAxKTt0cmFuc2Zvcm06c2NhbGUoMSwgMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLCAwKTt0cmFuc2Zvcm06c2NhbGUoMCwgMCl9fUBrZXlmcmFtZXMgc3Bpbm5lci1zY2FsZS1vdXR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwgMSk7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCwgMCk7dHJhbnNmb3JtOnNjYWxlKDAsIDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLWRvdHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwgMSk7dHJhbnNmb3JtOnNjYWxlKDEsIDEpO29wYWNpdHk6MC45fTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjQsIDAuNCk7dHJhbnNmb3JtOnNjYWxlKDAuNCwgMC40KTtvcGFjaXR5OjAuM30xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsIDEpO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTtvcGFjaXR5OjAuOX19QGtleWZyYW1lcyBzcGlubmVyLWRvdHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwgMSk7dHJhbnNmb3JtOnNjYWxlKDEsIDEpO29wYWNpdHk6MC45fTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjQsIDAuNCk7dHJhbnNmb3JtOnNjYWxlKDAuNCwgMC40KTtvcGFjaXR5OjAuM30xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsIDEpO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTtvcGFjaXR5OjAuOX19QC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItY2lyY3VsYXJ7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3Bpbm5lci1jaXJjdWxhcnsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItY2lyY3VsYXItaW5uZXJ7MCV7c3Ryb2tlLWRhc2hhcnJheToxcHgsIDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0OjBweH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMDBweCwgMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6LTE1cHh9MTAwJXtzdHJva2UtZGFzaGFycmF5OjEwMHB4LCAyMDBweDtzdHJva2UtZGFzaG9mZnNldDotMTI1cHh9fUBrZXlmcmFtZXMgc3Bpbm5lci1jaXJjdWxhci1pbm5lcnswJXtzdHJva2UtZGFzaGFycmF5OjFweCwgMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MHB4fTUwJXtzdHJva2UtZGFzaGFycmF5OjEwMHB4LCAyMDBweDtzdHJva2UtZGFzaG9mZnNldDotMTVweH0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTAwcHgsIDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjVweH19XCI7XG5jb25zdCBJb25TcGlubmVyU3R5bGUwID0gc3Bpbm5lckNzcztcbmNvbnN0IFNwaW5uZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IHNwaW5uZXJOYW1lID0gdGhpcy5uYW1lIHx8IGNvbmZpZy5nZXQoJ3NwaW5uZXInKTtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBpZiAoc3Bpbm5lck5hbWUpIHtcbiAgICAgIHJldHVybiBzcGlubmVyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGUgPT09ICdpb3MnID8gJ2xpbmVzJyA6ICdjaXJjdWxhcic7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZShzZWxmKTtcbiAgICBjb25zdCBzcGlubmVyTmFtZSA9IHNlbGYuZ2V0TmFtZSgpO1xuICAgIGNvbnN0IHNwaW5uZXIgPSAoX2EgPSBTUElOTkVSU1tzcGlubmVyTmFtZV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFNQSU5ORVJTWydsaW5lcyddO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdHlwZW9mIHNlbGYuZHVyYXRpb24gPT09ICdudW1iZXInICYmIHNlbGYuZHVyYXRpb24gPiAxMCA/IHNlbGYuZHVyYXRpb24gOiBzcGlubmVyLmR1cjtcbiAgICBjb25zdCBzdmdzID0gW107XG4gICAgaWYgKHNwaW5uZXIuY2lyY2xlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5uZXIuY2lyY2xlczsgaSsrKSB7XG4gICAgICAgIHN2Z3MucHVzaChidWlsZENpcmNsZShzcGlubmVyLCBkdXJhdGlvbiwgaSwgc3Bpbm5lci5jaXJjbGVzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzcGlubmVyLmxpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bpbm5lci5saW5lczsgaSsrKSB7XG4gICAgICAgIHN2Z3MucHVzaChidWlsZExpbmUoc3Bpbm5lciwgZHVyYXRpb24sIGksIHNwaW5uZXIubGluZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZTBkZmE4YTNlZTJhMDQ2OWViMzEzMjNmNTA2NzUwYmQ3N2Q2NTc5NycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHNlbGYuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbYHNwaW5uZXItJHtzcGlubmVyTmFtZX1gXTogdHJ1ZSxcbiAgICAgICAgJ3NwaW5uZXItcGF1c2VkJzogc2VsZi5wYXVzZWQgfHwgY29uZmlnLmdldEJvb2xlYW4oJ190ZXN0aW5nJylcbiAgICAgIH0pLFxuICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgICAgc3R5bGU6IHNwaW5uZXIuZWxtRHVyYXRpb24gPyB7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBkdXJhdGlvbiArICdtcydcbiAgICAgIH0gOiB7fVxuICAgIH0sIHN2Z3MpO1xuICB9XG59O1xuY29uc3QgYnVpbGRDaXJjbGUgPSAoc3Bpbm5lciwgZHVyYXRpb24sIGluZGV4LCB0b3RhbCkgPT4ge1xuICBjb25zdCBkYXRhID0gc3Bpbm5lci5mbihkdXJhdGlvbiwgaW5kZXgsIHRvdGFsKTtcbiAgZGF0YS5zdHlsZVsnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSBkdXJhdGlvbiArICdtcyc7XG4gIHJldHVybiBoKFwic3ZnXCIsIHtcbiAgICB2aWV3Qm94OiBkYXRhLnZpZXdCb3ggfHwgJzAgMCA2NCA2NCcsXG4gICAgc3R5bGU6IGRhdGEuc3R5bGVcbiAgfSwgaChcImNpcmNsZVwiLCB7XG4gICAgdHJhbnNmb3JtOiBkYXRhLnRyYW5zZm9ybSB8fCAndHJhbnNsYXRlKDMyLDMyKScsXG4gICAgY3g6IGRhdGEuY3gsXG4gICAgY3k6IGRhdGEuY3ksXG4gICAgcjogZGF0YS5yLFxuICAgIHN0eWxlOiBzcGlubmVyLmVsbUR1cmF0aW9uID8ge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJ1xuICAgIH0gOiB7fVxuICB9KSk7XG59O1xuY29uc3QgYnVpbGRMaW5lID0gKHNwaW5uZXIsIGR1cmF0aW9uLCBpbmRleCwgdG90YWwpID0+IHtcbiAgY29uc3QgZGF0YSA9IHNwaW5uZXIuZm4oZHVyYXRpb24sIGluZGV4LCB0b3RhbCk7XG4gIGRhdGEuc3R5bGVbJ2FuaW1hdGlvbi1kdXJhdGlvbiddID0gZHVyYXRpb24gKyAnbXMnO1xuICByZXR1cm4gaChcInN2Z1wiLCB7XG4gICAgdmlld0JveDogZGF0YS52aWV3Qm94IHx8ICcwIDAgNjQgNjQnLFxuICAgIHN0eWxlOiBkYXRhLnN0eWxlXG4gIH0sIGgoXCJsaW5lXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDMyLDMyKVwiLFxuICAgIHkxOiBkYXRhLnkxLFxuICAgIHkyOiBkYXRhLnkyXG4gIH0pKTtcbn07XG5TcGlubmVyLnN0eWxlID0gSW9uU3Bpbm5lclN0eWxlMDtcbmV4cG9ydCB7IFNwaW5uZXIgYXMgaW9uX3NwaW5uZXIgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU0sYUFBYTtBQUNuQixJQUFNLG1CQUFtQjtBQUN6QixJQUFNLFVBQVUsTUFBTTtBQUFBLEVBQ3BCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssUUFBUTtBQUNiLFNBQUssV0FBVztBQUNoQixTQUFLLE9BQU87QUFDWixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsVUFBVTtBQUNSLFVBQU0sY0FBYyxLQUFLLFFBQVEsT0FBTyxJQUFJLFNBQVM7QUFDckQsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixRQUFJLGFBQWE7QUFDZixhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sU0FBUyxRQUFRLFVBQVU7QUFBQSxFQUNwQztBQUFBLEVBQ0EsU0FBUztBQUNQLFFBQUk7QUFDSixVQUFNLE9BQU87QUFDYixVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFVBQU0sY0FBYyxLQUFLLFFBQVE7QUFDakMsVUFBTSxXQUFXLEtBQUssU0FBUyxXQUFXLE9BQU8sUUFBUSxPQUFPLFNBQVMsS0FBSyxTQUFTLE9BQU87QUFDOUYsVUFBTSxXQUFXLE9BQU8sS0FBSyxhQUFhLFlBQVksS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFFBQVE7QUFDbkcsVUFBTSxPQUFPLENBQUM7QUFDZCxRQUFJLFFBQVEsWUFBWSxRQUFXO0FBQ2pDLGVBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxTQUFTLEtBQUs7QUFDeEMsYUFBSyxLQUFLLFlBQVksU0FBUyxVQUFVLEdBQUcsUUFBUSxPQUFPLENBQUM7QUFBQSxNQUM5RDtBQUFBLElBQ0YsV0FBVyxRQUFRLFVBQVUsUUFBVztBQUN0QyxlQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsT0FBTyxLQUFLO0FBQ3RDLGFBQUssS0FBSyxVQUFVLFNBQVMsVUFBVSxHQUFHLFFBQVEsS0FBSyxDQUFDO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQ0EsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU8sbUJBQW1CLEtBQUssT0FBTztBQUFBLFFBQ3BDLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixDQUFDLFdBQVcsV0FBVyxFQUFFLEdBQUc7QUFBQSxRQUM1QixrQkFBa0IsS0FBSyxVQUFVLE9BQU8sV0FBVyxVQUFVO0FBQUEsTUFDL0QsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLE1BQ04sT0FBTyxRQUFRLGNBQWM7QUFBQSxRQUMzQixtQkFBbUIsV0FBVztBQUFBLE1BQ2hDLElBQUksQ0FBQztBQUFBLElBQ1AsR0FBRyxJQUFJO0FBQUEsRUFDVDtBQUNGO0FBQ0EsSUFBTSxjQUFjLENBQUMsU0FBUyxVQUFVLE9BQU8sVUFBVTtBQUN2RCxRQUFNLE9BQU8sUUFBUSxHQUFHLFVBQVUsT0FBTyxLQUFLO0FBQzlDLE9BQUssTUFBTSxvQkFBb0IsSUFBSSxXQUFXO0FBQzlDLFNBQU8sRUFBRSxPQUFPO0FBQUEsSUFDZCxTQUFTLEtBQUssV0FBVztBQUFBLElBQ3pCLE9BQU8sS0FBSztBQUFBLEVBQ2QsR0FBRyxFQUFFLFVBQVU7QUFBQSxJQUNiLFdBQVcsS0FBSyxhQUFhO0FBQUEsSUFDN0IsSUFBSSxLQUFLO0FBQUEsSUFDVCxJQUFJLEtBQUs7QUFBQSxJQUNULEdBQUcsS0FBSztBQUFBLElBQ1IsT0FBTyxRQUFRLGNBQWM7QUFBQSxNQUMzQixtQkFBbUIsV0FBVztBQUFBLElBQ2hDLElBQUksQ0FBQztBQUFBLEVBQ1AsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxJQUFNLFlBQVksQ0FBQyxTQUFTLFVBQVUsT0FBTyxVQUFVO0FBQ3JELFFBQU0sT0FBTyxRQUFRLEdBQUcsVUFBVSxPQUFPLEtBQUs7QUFDOUMsT0FBSyxNQUFNLG9CQUFvQixJQUFJLFdBQVc7QUFDOUMsU0FBTyxFQUFFLE9BQU87QUFBQSxJQUNkLFNBQVMsS0FBSyxXQUFXO0FBQUEsSUFDekIsT0FBTyxLQUFLO0FBQUEsRUFDZCxHQUFHLEVBQUUsUUFBUTtBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsSUFBSSxLQUFLO0FBQUEsSUFDVCxJQUFJLEtBQUs7QUFBQSxFQUNYLENBQUMsQ0FBQztBQUNKO0FBQ0EsUUFBUSxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
