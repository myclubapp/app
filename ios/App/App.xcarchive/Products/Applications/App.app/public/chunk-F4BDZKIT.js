// node_modules/@ionic/core/dist/esm/gesture-controller-314a54f6.js
var GestureController = class {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = /* @__PURE__ */ new Map();
    this.disabledGestures = /* @__PURE__ */ new Map();
    this.disabledScroll = /* @__PURE__ */ new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config) {
    var _a;
    return new GestureDelegate(this, this.newID(), config.name, (_a = config.priority) !== null && _a !== void 0 ? _a : 0, !!config.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -1e4;
    requestedStart.forEach((value) => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent("ionGestureCaptured", {
        detail: {
          gestureName
        }
      });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = void 0;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === void 0) {
      set = /* @__PURE__ */ new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== void 0) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== void 0) {
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== void 0;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
};
var GestureDelegate = class {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1e6 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = void 0;
  }
};
var BlockerDelegate = class {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = void 0;
  }
};
var BACKDROP_NO_SCROLL = "backdrop-no-scroll";
var GESTURE_CONTROLLER = new GestureController();

export {
  BACKDROP_NO_SCROLL,
  GESTURE_CONTROLLER
};
/*! Bundled license information:

@ionic/core/dist/esm/gesture-controller-314a54f6.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNsYXNzIEdlc3R1cmVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXN0dXJlSWQgPSAwO1xuICAgIHRoaXMucmVxdWVzdGVkU3RhcnQgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kaXNhYmxlZEdlc3R1cmVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGlzYWJsZWRTY3JvbGwgPSBuZXcgU2V0KCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnZXN0dXJlIGRlbGVnYXRlIGJhc2VkIG9uIHRoZSBHZXN0dXJlQ29uZmlnIHBhc3NlZFxuICAgKi9cbiAgY3JlYXRlR2VzdHVyZShjb25maWcpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBHZXN0dXJlRGVsZWdhdGUodGhpcywgdGhpcy5uZXdJRCgpLCBjb25maWcubmFtZSwgKF9hID0gY29uZmlnLnByaW9yaXR5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwLCAhIWNvbmZpZy5kaXNhYmxlU2Nyb2xsKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIGJsb2NrZXIgdGhhdCB3aWxsIGJsb2NrIGFueSBvdGhlciBnZXN0dXJlIGV2ZW50cyBmcm9tIGZpcmluZy4gU2V0IGluIHRoZSBpb24tZ2VzdHVyZSBjb21wb25lbnQuXG4gICAqL1xuICBjcmVhdGVCbG9ja2VyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgQmxvY2tlckRlbGVnYXRlKHRoaXMsIHRoaXMubmV3SUQoKSwgb3B0cy5kaXNhYmxlLCAhIW9wdHMuZGlzYWJsZVNjcm9sbCk7XG4gIH1cbiAgc3RhcnQoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkge1xuICAgIGlmICghdGhpcy5jYW5TdGFydChnZXN0dXJlTmFtZSkpIHtcbiAgICAgIHRoaXMucmVxdWVzdGVkU3RhcnQuZGVsZXRlKGlkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0ZWRTdGFydC5zZXQoaWQsIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjYXB0dXJlKGdlc3R1cmVOYW1lLCBpZCwgcHJpb3JpdHkpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdGVkU3RhcnQgPSB0aGlzLnJlcXVlc3RlZFN0YXJ0O1xuICAgIGxldCBtYXhQcmlvcml0eSA9IC0xMDAwMDtcbiAgICByZXF1ZXN0ZWRTdGFydC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG1heFByaW9yaXR5ID0gTWF0aC5tYXgobWF4UHJpb3JpdHksIHZhbHVlKTtcbiAgICB9KTtcbiAgICBpZiAobWF4UHJpb3JpdHkgPT09IHByaW9yaXR5KSB7XG4gICAgICB0aGlzLmNhcHR1cmVkSWQgPSBpZDtcbiAgICAgIHJlcXVlc3RlZFN0YXJ0LmNsZWFyKCk7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnaW9uR2VzdHVyZUNhcHR1cmVkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBnZXN0dXJlTmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbGVhc2UoaWQpIHtcbiAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XG4gICAgaWYgKHRoaXMuY2FwdHVyZWRJZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuY2FwdHVyZWRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZUdlc3R1cmUoZ2VzdHVyZU5hbWUsIGlkKSB7XG4gICAgbGV0IHNldCA9IHRoaXMuZGlzYWJsZWRHZXN0dXJlcy5nZXQoZ2VzdHVyZU5hbWUpO1xuICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5kaXNhYmxlZEdlc3R1cmVzLnNldChnZXN0dXJlTmFtZSwgc2V0KTtcbiAgICB9XG4gICAgc2V0LmFkZChpZCk7XG4gIH1cbiAgZW5hYmxlR2VzdHVyZShnZXN0dXJlTmFtZSwgaWQpIHtcbiAgICBjb25zdCBzZXQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcbiAgICBpZiAoc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuICBkaXNhYmxlU2Nyb2xsKGlkKSB7XG4gICAgdGhpcy5kaXNhYmxlZFNjcm9sbC5hZGQoaWQpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkU2Nyb2xsLnNpemUgPT09IDEpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICAgIH1cbiAgfVxuICBlbmFibGVTY3JvbGwoaWQpIHtcbiAgICB0aGlzLmRpc2FibGVkU2Nyb2xsLmRlbGV0ZShpZCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRTY3JvbGwuc2l6ZSA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJBQ0tEUk9QX05PX1NDUk9MTCk7XG4gICAgfVxuICB9XG4gIGNhblN0YXJ0KGdlc3R1cmVOYW1lKSB7XG4gICAgaWYgKHRoaXMuY2FwdHVyZWRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBhIGdlc3R1cmUgYWxyZWFkeSBjYXB0dXJlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGdlc3R1cmVOYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc0NhcHR1cmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNhcHR1cmVkSWQgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBpc1Njcm9sbERpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkU2Nyb2xsLnNpemUgPiAwO1xuICB9XG4gIGlzRGlzYWJsZWQoZ2VzdHVyZU5hbWUpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRHZXN0dXJlcy5nZXQoZ2VzdHVyZU5hbWUpO1xuICAgIGlmIChkaXNhYmxlZCAmJiBkaXNhYmxlZC5zaXplID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBuZXdJRCgpIHtcbiAgICB0aGlzLmdlc3R1cmVJZCsrO1xuICAgIHJldHVybiB0aGlzLmdlc3R1cmVJZDtcbiAgfVxufVxuY2xhc3MgR2VzdHVyZURlbGVnYXRlIHtcbiAgY29uc3RydWN0b3IoY3RybCwgaWQsIG5hbWUsIHByaW9yaXR5LCBkaXNhYmxlU2Nyb2xsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsID0gZGlzYWJsZVNjcm9sbDtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkgKiAxMDAwMDAwICsgaWQ7XG4gICAgdGhpcy5jdHJsID0gY3RybDtcbiAgfVxuICBjYW5TdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuY3RybCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHJsLmNhblN0YXJ0KHRoaXMubmFtZSk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3RybC5zdGFydCh0aGlzLm5hbWUsIHRoaXMuaWQsIHRoaXMucHJpb3JpdHkpO1xuICB9XG4gIGNhcHR1cmUoKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2FwdHVyZWQgPSB0aGlzLmN0cmwuY2FwdHVyZSh0aGlzLm5hbWUsIHRoaXMuaWQsIHRoaXMucHJpb3JpdHkpO1xuICAgIGlmIChjYXB0dXJlZCAmJiB0aGlzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgIHRoaXMuY3RybC5kaXNhYmxlU2Nyb2xsKHRoaXMuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZWQ7XG4gIH1cbiAgcmVsZWFzZSgpIHtcbiAgICBpZiAodGhpcy5jdHJsKSB7XG4gICAgICB0aGlzLmN0cmwucmVsZWFzZSh0aGlzLmlkKTtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5jdHJsLmVuYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB0aGlzLmN0cmwgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbmNsYXNzIEJsb2NrZXJEZWxlZ2F0ZSB7XG4gIGNvbnN0cnVjdG9yKGN0cmwsIGlkLCBkaXNhYmxlLCBkaXNhYmxlU2Nyb2xsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZGlzYWJsZSA9IGRpc2FibGU7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsID0gZGlzYWJsZVNjcm9sbDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICB9XG4gIGJsb2NrKCkge1xuICAgIGlmICghdGhpcy5jdHJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGUpIHtcbiAgICAgIGZvciAoY29uc3QgZ2VzdHVyZSBvZiB0aGlzLmRpc2FibGUpIHtcbiAgICAgICAgdGhpcy5jdHJsLmRpc2FibGVHZXN0dXJlKGdlc3R1cmUsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICB0aGlzLmN0cmwuZGlzYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cbiAgdW5ibG9jaygpIHtcbiAgICBpZiAoIXRoaXMuY3RybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGdlc3R1cmUgb2YgdGhpcy5kaXNhYmxlKSB7XG4gICAgICAgIHRoaXMuY3RybC5lbmFibGVHZXN0dXJlKGdlc3R1cmUsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICB0aGlzLmN0cmwuZW5hYmxlU2Nyb2xsKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudW5ibG9jaygpO1xuICAgIHRoaXMuY3RybCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuY29uc3QgQkFDS0RST1BfTk9fU0NST0xMID0gJ2JhY2tkcm9wLW5vLXNjcm9sbCc7XG5jb25zdCBHRVNUVVJFX0NPTlRST0xMRVIgPSBuZXcgR2VzdHVyZUNvbnRyb2xsZXIoKTtcbmV4cG9ydCB7IEJBQ0tEUk9QX05PX1NDUk9MTCBhcyBCLCBHRVNUVVJFX0NPTlRST0xMRVIgYXMgRyB9OyJdLCJtYXBwaW5ncyI6IjtBQUdBLElBQU0sb0JBQU4sTUFBd0I7QUFBQSxFQUN0QixjQUFjO0FBQ1osU0FBSyxZQUFZO0FBQ2pCLFNBQUssaUJBQWlCLG9CQUFJLElBQUk7QUFDOUIsU0FBSyxtQkFBbUIsb0JBQUksSUFBSTtBQUNoQyxTQUFLLGlCQUFpQixvQkFBSSxJQUFJO0FBQUEsRUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGNBQWMsUUFBUTtBQUNwQixRQUFJO0FBQ0osV0FBTyxJQUFJLGdCQUFnQixNQUFNLEtBQUssTUFBTSxHQUFHLE9BQU8sT0FBTyxLQUFLLE9BQU8sY0FBYyxRQUFRLE9BQU8sU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sYUFBYTtBQUFBLEVBQy9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxjQUFjLE9BQU8sQ0FBQyxHQUFHO0FBQ3ZCLFdBQU8sSUFBSSxnQkFBZ0IsTUFBTSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLEtBQUssYUFBYTtBQUFBLEVBQ25GO0FBQUEsRUFDQSxNQUFNLGFBQWEsSUFBSSxVQUFVO0FBQy9CLFFBQUksQ0FBQyxLQUFLLFNBQVMsV0FBVyxHQUFHO0FBQy9CLFdBQUssZUFBZSxPQUFPLEVBQUU7QUFDN0IsYUFBTztBQUFBLElBQ1Q7QUFDQSxTQUFLLGVBQWUsSUFBSSxJQUFJLFFBQVE7QUFDcEMsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVEsYUFBYSxJQUFJLFVBQVU7QUFDakMsUUFBSSxDQUFDLEtBQUssTUFBTSxhQUFhLElBQUksUUFBUSxHQUFHO0FBQzFDLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxpQkFBaUIsS0FBSztBQUM1QixRQUFJLGNBQWM7QUFDbEIsbUJBQWUsUUFBUSxXQUFTO0FBQzlCLG9CQUFjLEtBQUssSUFBSSxhQUFhLEtBQUs7QUFBQSxJQUMzQyxDQUFDO0FBQ0QsUUFBSSxnQkFBZ0IsVUFBVTtBQUM1QixXQUFLLGFBQWE7QUFDbEIscUJBQWUsTUFBTTtBQUNyQixZQUFNLFFBQVEsSUFBSSxZQUFZLHNCQUFzQjtBQUFBLFFBQ2xELFFBQVE7QUFBQSxVQUNOO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUNELGVBQVMsY0FBYyxLQUFLO0FBQzVCLGFBQU87QUFBQSxJQUNUO0FBQ0EsbUJBQWUsT0FBTyxFQUFFO0FBQ3hCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxRQUFRLElBQUk7QUFDVixTQUFLLGVBQWUsT0FBTyxFQUFFO0FBQzdCLFFBQUksS0FBSyxlQUFlLElBQUk7QUFDMUIsV0FBSyxhQUFhO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlLGFBQWEsSUFBSTtBQUM5QixRQUFJLE1BQU0sS0FBSyxpQkFBaUIsSUFBSSxXQUFXO0FBQy9DLFFBQUksUUFBUSxRQUFXO0FBQ3JCLFlBQU0sb0JBQUksSUFBSTtBQUNkLFdBQUssaUJBQWlCLElBQUksYUFBYSxHQUFHO0FBQUEsSUFDNUM7QUFDQSxRQUFJLElBQUksRUFBRTtBQUFBLEVBQ1o7QUFBQSxFQUNBLGNBQWMsYUFBYSxJQUFJO0FBQzdCLFVBQU0sTUFBTSxLQUFLLGlCQUFpQixJQUFJLFdBQVc7QUFDakQsUUFBSSxRQUFRLFFBQVc7QUFDckIsVUFBSSxPQUFPLEVBQUU7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYyxJQUFJO0FBQ2hCLFNBQUssZUFBZSxJQUFJLEVBQUU7QUFDMUIsUUFBSSxLQUFLLGVBQWUsU0FBUyxHQUFHO0FBQ2xDLGVBQVMsS0FBSyxVQUFVLElBQUksa0JBQWtCO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhLElBQUk7QUFDZixTQUFLLGVBQWUsT0FBTyxFQUFFO0FBQzdCLFFBQUksS0FBSyxlQUFlLFNBQVMsR0FBRztBQUNsQyxlQUFTLEtBQUssVUFBVSxPQUFPLGtCQUFrQjtBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxhQUFhO0FBQ3BCLFFBQUksS0FBSyxlQUFlLFFBQVc7QUFFakMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLEtBQUssV0FBVyxXQUFXLEdBQUc7QUFDaEMsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsYUFBYTtBQUNYLFdBQU8sS0FBSyxlQUFlO0FBQUEsRUFDN0I7QUFBQSxFQUNBLG1CQUFtQjtBQUNqQixXQUFPLEtBQUssZUFBZSxPQUFPO0FBQUEsRUFDcEM7QUFBQSxFQUNBLFdBQVcsYUFBYTtBQUN0QixVQUFNLFdBQVcsS0FBSyxpQkFBaUIsSUFBSSxXQUFXO0FBQ3RELFFBQUksWUFBWSxTQUFTLE9BQU8sR0FBRztBQUNqQyxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxRQUFRO0FBQ04sU0FBSztBQUNMLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFDRjtBQUNBLElBQU0sa0JBQU4sTUFBc0I7QUFBQSxFQUNwQixZQUFZLE1BQU0sSUFBSSxNQUFNLFVBQVUsZUFBZTtBQUNuRCxTQUFLLEtBQUs7QUFDVixTQUFLLE9BQU87QUFDWixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLFdBQVcsV0FBVyxNQUFVO0FBQ3JDLFNBQUssT0FBTztBQUFBLEVBQ2Q7QUFBQSxFQUNBLFdBQVc7QUFDVCxRQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPLEtBQUssS0FBSyxTQUFTLEtBQUssSUFBSTtBQUFBLEVBQ3JDO0FBQUEsRUFDQSxRQUFRO0FBQ04sUUFBSSxDQUFDLEtBQUssTUFBTTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssUUFBUTtBQUFBLEVBQzFEO0FBQUEsRUFDQSxVQUFVO0FBQ1IsUUFBSSxDQUFDLEtBQUssTUFBTTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxXQUFXLEtBQUssS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxRQUFRO0FBQ3BFLFFBQUksWUFBWSxLQUFLLGVBQWU7QUFDbEMsV0FBSyxLQUFLLGNBQWMsS0FBSyxFQUFFO0FBQUEsSUFDakM7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsVUFBVTtBQUNSLFFBQUksS0FBSyxNQUFNO0FBQ2IsV0FBSyxLQUFLLFFBQVEsS0FBSyxFQUFFO0FBQ3pCLFVBQUksS0FBSyxlQUFlO0FBQ3RCLGFBQUssS0FBSyxhQUFhLEtBQUssRUFBRTtBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFDUixTQUFLLFFBQVE7QUFDYixTQUFLLE9BQU87QUFBQSxFQUNkO0FBQ0Y7QUFDQSxJQUFNLGtCQUFOLE1BQXNCO0FBQUEsRUFDcEIsWUFBWSxNQUFNLElBQUksU0FBUyxlQUFlO0FBQzVDLFNBQUssS0FBSztBQUNWLFNBQUssVUFBVTtBQUNmLFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssT0FBTztBQUFBLEVBQ2Q7QUFBQSxFQUNBLFFBQVE7QUFDTixRQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2Q7QUFBQSxJQUNGO0FBQ0EsUUFBSSxLQUFLLFNBQVM7QUFDaEIsaUJBQVcsV0FBVyxLQUFLLFNBQVM7QUFDbEMsYUFBSyxLQUFLLGVBQWUsU0FBUyxLQUFLLEVBQUU7QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFDQSxRQUFJLEtBQUssZUFBZTtBQUN0QixXQUFLLEtBQUssY0FBYyxLQUFLLEVBQUU7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFDUixRQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2Q7QUFBQSxJQUNGO0FBQ0EsUUFBSSxLQUFLLFNBQVM7QUFDaEIsaUJBQVcsV0FBVyxLQUFLLFNBQVM7QUFDbEMsYUFBSyxLQUFLLGNBQWMsU0FBUyxLQUFLLEVBQUU7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFDQSxRQUFJLEtBQUssZUFBZTtBQUN0QixXQUFLLEtBQUssYUFBYSxLQUFLLEVBQUU7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFDUixTQUFLLFFBQVE7QUFDYixTQUFLLE9BQU87QUFBQSxFQUNkO0FBQ0Y7QUFDQSxJQUFNLHFCQUFxQjtBQUMzQixJQUFNLHFCQUFxQixJQUFJLGtCQUFrQjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
