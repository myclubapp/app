import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  getElement,
  h,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js
var rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
var IonRippleEffectStyle0 = rippleEffectCss;
var RippleEffect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  addRipple(x, y) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        readTask(() => {
          const rect = this.el.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          const hypotenuse = Math.sqrt(width * width + height * height);
          const maxDim = Math.max(height, width);
          const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
          const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
          const finalScale = maxRadius / initialSize;
          let posX = x - rect.left;
          let posY = y - rect.top;
          if (this.unbounded) {
            posX = width * 0.5;
            posY = height * 0.5;
          }
          const styleX = posX - initialSize * 0.5;
          const styleY = posY - initialSize * 0.5;
          const moveX = width * 0.5 - posX;
          const moveY = height * 0.5 - posY;
          writeTask(() => {
            const div = document.createElement("div");
            div.classList.add("ripple-effect");
            const style = div.style;
            style.top = styleY + "px";
            style.left = styleX + "px";
            style.width = style.height = initialSize + "px";
            style.setProperty("--final-scale", `${finalScale}`);
            style.setProperty("--translate-end", `${moveX}px, ${moveY}px`);
            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => {
              resolve(() => {
                removeRipple(div);
              });
            }, 225 + 100);
          });
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "40c7f73e7f5f67e29f83e1236a61c6e1c9943c42",
      role: "presentation",
      class: {
        [mode]: true,
        unbounded: this.unbounded
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
var removeRipple = (ripple) => {
  ripple.classList.add("fade-out");
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
var PADDING = 10;
var INITIAL_ORIGIN_SCALE = 0.5;
RippleEffect.style = IonRippleEffectStyle0;
export {
  RippleEffect as ion_ripple_effect
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-ripple-effect.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzaywgaCwgZiBhcyBnZXRFbGVtZW50LCBlIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmNvbnN0IHJpcHBsZUVmZmVjdENzcyA9IFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpzdHJpY3Q7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgudW5ib3VuZGVkKXtjb250YWluOmxheW91dCBzaXplIHN0eWxlfS5yaXBwbGUtZWZmZWN0e2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2NvbG9yOmluaGVyaXQ7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjIyNW1zIHJpcHBsZUFuaW1hdGlvbiBmb3J3YXJkcywgNzVtcyBmYWRlSW5BbmltYXRpb24gZm9yd2FyZHM7YW5pbWF0aW9uOjIyNW1zIHJpcHBsZUFuaW1hdGlvbiBmb3J3YXJkcywgNzVtcyBmYWRlSW5BbmltYXRpb24gZm9yd2FyZHM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLCBvcGFjaXR5O3BvaW50ZXItZXZlbnRzOm5vbmV9LmZhZGUtb3V0ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsIDEpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwgMSkpOy13ZWJraXQtYW5pbWF0aW9uOjE1MG1zIGZhZGVPdXRBbmltYXRpb24gZm9yd2FyZHM7YW5pbWF0aW9uOjE1MG1zIGZhZGVPdXRBbmltYXRpb24gZm9yd2FyZHN9QC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZUFuaW1hdGlvbntmcm9tey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwgMSkpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgcmlwcGxlQW5pbWF0aW9ue2Zyb217LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLCAxKSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsIDEpKX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbntmcm9tey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6MC4xNn19QGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb257ZnJvbXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OjAuMTZ9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0QW5pbWF0aW9ue2Zyb217LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjAuMTZ9dG97b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGVPdXRBbmltYXRpb257ZnJvbXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MC4xNn10b3tvcGFjaXR5OjB9fVwiO1xuY29uc3QgSW9uUmlwcGxlRWZmZWN0U3R5bGUwID0gcmlwcGxlRWZmZWN0Q3NzO1xuY29uc3QgUmlwcGxlRWZmZWN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnR5cGUgPSAnYm91bmRlZCc7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHJpcHBsZSBlZmZlY3QgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0geCBUaGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIG9mIHdoZXJlIHRoZSByaXBwbGUgc2hvdWxkIHN0YXJ0LlxuICAgKiBAcGFyYW0geSBUaGUgdmVydGljYWwgY29vcmRpbmF0ZSBvZiB3aGVyZSB0aGUgcmlwcGxlIHNob3VsZCBzdGFydC5cbiAgICovXG4gIGFzeW5jIGFkZFJpcHBsZSh4LCB5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgoaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IG1heFJhZGl1cyA9IHRoaXMudW5ib3VuZGVkID8gbWF4RGltIDogaHlwb3RlbnVzZSArIFBBRERJTkc7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTaXplID0gTWF0aC5mbG9vcihtYXhEaW0gKiBJTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIGNvbnN0IGZpbmFsU2NhbGUgPSBtYXhSYWRpdXMgLyBpbml0aWFsU2l6ZTtcbiAgICAgICAgbGV0IHBvc1ggPSB4IC0gcmVjdC5sZWZ0O1xuICAgICAgICBsZXQgcG9zWSA9IHkgLSByZWN0LnRvcDtcbiAgICAgICAgaWYgKHRoaXMudW5ib3VuZGVkKSB7XG4gICAgICAgICAgcG9zWCA9IHdpZHRoICogMC41O1xuICAgICAgICAgIHBvc1kgPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVYID0gcG9zWCAtIGluaXRpYWxTaXplICogMC41O1xuICAgICAgICBjb25zdCBzdHlsZVkgPSBwb3NZIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgIGNvbnN0IG1vdmVYID0gd2lkdGggKiAwLjUgLSBwb3NYO1xuICAgICAgICBjb25zdCBtb3ZlWSA9IGhlaWdodCAqIDAuNSAtIHBvc1k7XG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JpcHBsZS1lZmZlY3QnKTtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICAgICAgICBzdHlsZS50b3AgPSBzdHlsZVkgKyAncHgnO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBzdHlsZVggKyAncHgnO1xuICAgICAgICAgIHN0eWxlLndpZHRoID0gc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbFNpemUgKyAncHgnO1xuICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCctLWZpbmFsLXNjYWxlJywgYCR7ZmluYWxTY2FsZX1gKTtcbiAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2xhdGUtZW5kJywgYCR7bW92ZVh9cHgsICR7bW92ZVl9cHhgKTtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLnNoYWRvd1Jvb3QgfHwgdGhpcy5lbDtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKCkgPT4ge1xuICAgICAgICAgICAgICByZW1vdmVSaXBwbGUoZGl2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIyNSArIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAndW5ib3VuZGVkJztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNDBjN2Y3M2U3ZjVmNjdlMjlmODNlMTIzNmE2MWM2ZTFjOTk0M2M0MicsXG4gICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICB1bmJvdW5kZWQ6IHRoaXMudW5ib3VuZGVkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuY29uc3QgcmVtb3ZlUmlwcGxlID0gcmlwcGxlID0+IHtcbiAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJpcHBsZS5yZW1vdmUoKTtcbiAgfSwgMjAwKTtcbn07XG5jb25zdCBQQURESU5HID0gMTA7XG5jb25zdCBJTklUSUFMX09SSUdJTl9TQ0FMRSA9IDAuNTtcblJpcHBsZUVmZmVjdC5zdHlsZSA9IElvblJpcHBsZUVmZmVjdFN0eWxlMDtcbmV4cG9ydCB7IFJpcHBsZUVmZmVjdCBhcyBpb25fcmlwcGxlX2VmZmVjdCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sZUFBZSxNQUFNO0FBQUEsRUFDekIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxPQUFPO0FBQUEsRUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sVUFBVSxHQUFHLEdBQUc7QUFBQTtBQUNwQixhQUFPLElBQUksUUFBUSxhQUFXO0FBQzVCLGlCQUFTLE1BQU07QUFDYixnQkFBTSxPQUFPLEtBQUssR0FBRyxzQkFBc0I7QUFDM0MsZ0JBQU0sUUFBUSxLQUFLO0FBQ25CLGdCQUFNLFNBQVMsS0FBSztBQUNwQixnQkFBTSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsU0FBUyxNQUFNO0FBQzVELGdCQUFNLFNBQVMsS0FBSyxJQUFJLFFBQVEsS0FBSztBQUNyQyxnQkFBTSxZQUFZLEtBQUssWUFBWSxTQUFTLGFBQWE7QUFDekQsZ0JBQU0sY0FBYyxLQUFLLE1BQU0sU0FBUyxvQkFBb0I7QUFDNUQsZ0JBQU0sYUFBYSxZQUFZO0FBQy9CLGNBQUksT0FBTyxJQUFJLEtBQUs7QUFDcEIsY0FBSSxPQUFPLElBQUksS0FBSztBQUNwQixjQUFJLEtBQUssV0FBVztBQUNsQixtQkFBTyxRQUFRO0FBQ2YsbUJBQU8sU0FBUztBQUFBLFVBQ2xCO0FBQ0EsZ0JBQU0sU0FBUyxPQUFPLGNBQWM7QUFDcEMsZ0JBQU0sU0FBUyxPQUFPLGNBQWM7QUFDcEMsZ0JBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsZ0JBQU0sUUFBUSxTQUFTLE1BQU07QUFDN0Isb0JBQVUsTUFBTTtBQUNkLGtCQUFNLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFDeEMsZ0JBQUksVUFBVSxJQUFJLGVBQWU7QUFDakMsa0JBQU0sUUFBUSxJQUFJO0FBQ2xCLGtCQUFNLE1BQU0sU0FBUztBQUNyQixrQkFBTSxPQUFPLFNBQVM7QUFDdEIsa0JBQU0sUUFBUSxNQUFNLFNBQVMsY0FBYztBQUMzQyxrQkFBTSxZQUFZLGlCQUFpQixHQUFHLFVBQVUsRUFBRTtBQUNsRCxrQkFBTSxZQUFZLG1CQUFtQixHQUFHLEtBQUssT0FBTyxLQUFLLElBQUk7QUFDN0Qsa0JBQU0sWUFBWSxLQUFLLEdBQUcsY0FBYyxLQUFLO0FBQzdDLHNCQUFVLFlBQVksR0FBRztBQUN6Qix1QkFBVyxNQUFNO0FBQ2Ysc0JBQVEsTUFBTTtBQUNaLDZCQUFhLEdBQUc7QUFBQSxjQUNsQixDQUFDO0FBQUEsWUFDSCxHQUFHLE1BQU0sR0FBRztBQUFBLFVBQ2QsQ0FBQztBQUFBLFFBQ0gsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLEVBQ0EsSUFBSSxZQUFZO0FBQ2QsV0FBTyxLQUFLLFNBQVM7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixXQUFXLEtBQUs7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLElBQU0sZUFBZSxZQUFVO0FBQzdCLFNBQU8sVUFBVSxJQUFJLFVBQVU7QUFDL0IsYUFBVyxNQUFNO0FBQ2YsV0FBTyxPQUFPO0FBQUEsRUFDaEIsR0FBRyxHQUFHO0FBQ1I7QUFDQSxJQUFNLFVBQVU7QUFDaEIsSUFBTSx1QkFBdUI7QUFDN0IsYUFBYSxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
