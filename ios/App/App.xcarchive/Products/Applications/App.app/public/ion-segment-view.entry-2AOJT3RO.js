import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-segment-view.entry.js
var segmentViewIosCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
var IonSegmentViewIosStyle0 = segmentViewIosCss;
var segmentViewMdCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
var IonSegmentViewMdStyle0 = segmentViewMdCss;
var SegmentView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSegmentViewScroll = createEvent(this, "ionSegmentViewScroll", 7);
    this.scrollEndTimeout = null;
    this.isTouching = false;
    this.disabled = false;
    this.isManualScroll = void 0;
  }
  handleScroll(ev) {
    var _a;
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = ev.target;
    const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
    this.ionSegmentViewScroll.emit({
      scrollRatio,
      isManualScroll: (_a = this.isManualScroll) !== null && _a !== void 0 ? _a : true
    });
    this.resetScrollEndTimeout();
  }
  /**
   * Handle touch start event to know when the user is actively dragging the segment view.
   */
  handleScrollStart() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.isTouching = true;
  }
  /**
   * Handle touch end event to know when the user is no longer dragging the segment view.
   */
  handleTouchEnd() {
    this.isTouching = false;
  }
  /**
   * Reset the scroll end detection timer. This is called on every scroll event.
   */
  resetScrollEndTimeout() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.scrollEndTimeout = setTimeout(
      () => {
        this.checkForScrollEnd();
      },
      // Setting this to a lower value may result in inconsistencies in behavior
      // across browsers (particularly Firefox).
      // Ideally, all of this logic is removed once the scroll end event is
      // supported on all browsers (https://caniuse.com/?search=scrollend)
      100
    );
  }
  /**
   * Check if the scroll has ended and the user is not actively touching.
   * If the conditions are met (active content is enabled and no active touch),
   * reset the scroll position and emit the scroll end event.
   */
  checkForScrollEnd() {
    if (!this.isTouching) {
      this.isManualScroll = void 0;
    }
  }
  /**
   * @internal
   *
   * This method is used to programmatically set the displayed segment content
   * in the segment view. Calling this method will update the `value` of the
   * corresponding segment button.
   *
   * @param id: The id of the segment content to display.
   * @param smoothScroll: Whether to animate the scroll transition.
   */
  setContent(id, smoothScroll = true) {
    return __async(this, null, function* () {
      const contents = this.getSegmentContents();
      const index = contents.findIndex((content) => content.id === id);
      if (index === -1) return;
      this.isManualScroll = false;
      this.resetScrollEndTimeout();
      const contentWidth = this.el.offsetWidth;
      this.el.scrollTo({
        top: 0,
        left: index * contentWidth,
        behavior: smoothScroll ? "smooth" : "instant"
      });
    });
  }
  getSegmentContents() {
    return Array.from(this.el.querySelectorAll("ion-segment-content"));
  }
  render() {
    const {
      disabled,
      isManualScroll
    } = this;
    return h(Host, {
      key: "fa528d2d9ae0f00fc3067defe2a047dce77c814a",
      class: {
        "segment-view-disabled": disabled,
        "segment-view-scroll-disabled": isManualScroll === false
      }
    }, h("slot", {
      key: "74dc8b4d073caeff1bab272d11b9ea3e1a215954"
    }));
  }
  get el() {
    return getElement(this);
  }
};
SegmentView.style = {
  ios: IonSegmentViewIosStyle0,
  md: IonSegmentViewMdStyle0
};
export {
  SegmentView as ion_segment_view
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-segment-view.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VnbWVudC12aWV3LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5jb25zdCBzZWdtZW50Vmlld0lvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteDpzY3JvbGw7LXdlYmtpdC1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5Oy1tcy1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9Omhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX06aG9zdCguc2VnbWVudC12aWV3LWRpc2FibGVkKXstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7b3ZlcmZsb3cteDpoaWRkZW59Omhvc3QoLnNlZ21lbnQtdmlldy1zY3JvbGwtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlZ21lbnQtdmlldy1kaXNhYmxlZCl7b3BhY2l0eTowLjN9XCI7XG5jb25zdCBJb25TZWdtZW50Vmlld0lvc1N0eWxlMCA9IHNlZ21lbnRWaWV3SW9zQ3NzO1xuY29uc3Qgc2VnbWVudFZpZXdNZENzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteDpzY3JvbGw7LXdlYmtpdC1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5Oy1tcy1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9Omhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX06aG9zdCguc2VnbWVudC12aWV3LWRpc2FibGVkKXstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7b3ZlcmZsb3cteDpoaWRkZW59Omhvc3QoLnNlZ21lbnQtdmlldy1zY3JvbGwtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlZ21lbnQtdmlldy1kaXNhYmxlZCl7b3BhY2l0eTowLjN9XCI7XG5jb25zdCBJb25TZWdtZW50Vmlld01kU3R5bGUwID0gc2VnbWVudFZpZXdNZENzcztcbmNvbnN0IFNlZ21lbnRWaWV3ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblNlZ21lbnRWaWV3U2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TZWdtZW50Vmlld1Njcm9sbFwiLCA3KTtcbiAgICB0aGlzLnNjcm9sbEVuZFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzTWFudWFsU2Nyb2xsID0gdW5kZWZpbmVkO1xuICB9XG4gIGhhbmRsZVNjcm9sbChldikge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsV2lkdGgsXG4gICAgICBjbGllbnRXaWR0aFxuICAgIH0gPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgc2Nyb2xsUmF0aW8gPSBzY3JvbGxMZWZ0IC8gKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgIHRoaXMuaW9uU2VnbWVudFZpZXdTY3JvbGwuZW1pdCh7XG4gICAgICBzY3JvbGxSYXRpbyxcbiAgICAgIGlzTWFudWFsU2Nyb2xsOiAoX2EgPSB0aGlzLmlzTWFudWFsU2Nyb2xsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cnVlXG4gICAgfSk7XG4gICAgLy8gUmVzZXQgdGhlIHRpbWVvdXQgdG8gY2hlY2sgZm9yIHNjcm9sbCBlbmRcbiAgICB0aGlzLnJlc2V0U2Nyb2xsRW5kVGltZW91dCgpO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGUgdG91Y2ggc3RhcnQgZXZlbnQgdG8ga25vdyB3aGVuIHRoZSB1c2VyIGlzIGFjdGl2ZWx5IGRyYWdnaW5nIHRoZSBzZWdtZW50IHZpZXcuXG4gICAqL1xuICBoYW5kbGVTY3JvbGxTdGFydCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbmRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxFbmRUaW1lb3V0KTtcbiAgICAgIHRoaXMuc2Nyb2xsRW5kVGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuaXNUb3VjaGluZyA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEhhbmRsZSB0b3VjaCBlbmQgZXZlbnQgdG8ga25vdyB3aGVuIHRoZSB1c2VyIGlzIG5vIGxvbmdlciBkcmFnZ2luZyB0aGUgc2VnbWVudCB2aWV3LlxuICAgKi9cbiAgaGFuZGxlVG91Y2hFbmQoKSB7XG4gICAgdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzY3JvbGwgZW5kIGRldGVjdGlvbiB0aW1lci4gVGhpcyBpcyBjYWxsZWQgb24gZXZlcnkgc2Nyb2xsIGV2ZW50LlxuICAgKi9cbiAgcmVzZXRTY3JvbGxFbmRUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVuZFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbEVuZFRpbWVvdXQpO1xuICAgICAgdGhpcy5zY3JvbGxFbmRUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxFbmRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrRm9yU2Nyb2xsRW5kKCk7XG4gICAgfSxcbiAgICAvLyBTZXR0aW5nIHRoaXMgdG8gYSBsb3dlciB2YWx1ZSBtYXkgcmVzdWx0IGluIGluY29uc2lzdGVuY2llcyBpbiBiZWhhdmlvclxuICAgIC8vIGFjcm9zcyBicm93c2VycyAocGFydGljdWxhcmx5IEZpcmVmb3gpLlxuICAgIC8vIElkZWFsbHksIGFsbCBvZiB0aGlzIGxvZ2ljIGlzIHJlbW92ZWQgb25jZSB0aGUgc2Nyb2xsIGVuZCBldmVudCBpc1xuICAgIC8vIHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMgKGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1zY3JvbGxlbmQpXG4gICAgMTAwKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNjcm9sbCBoYXMgZW5kZWQgYW5kIHRoZSB1c2VyIGlzIG5vdCBhY3RpdmVseSB0b3VjaGluZy5cbiAgICogSWYgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldCAoYWN0aXZlIGNvbnRlbnQgaXMgZW5hYmxlZCBhbmQgbm8gYWN0aXZlIHRvdWNoKSxcbiAgICogcmVzZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhbmQgZW1pdCB0aGUgc2Nyb2xsIGVuZCBldmVudC5cbiAgICovXG4gIGNoZWNrRm9yU2Nyb2xsRW5kKCkge1xuICAgIC8vIE9ubHkgZW1pdCBzY3JvbGwgZW5kIGV2ZW50IGlmIHRoZSBhY3RpdmUgY29udGVudCBpcyBub3QgZGlzYWJsZWQgYW5kXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IHRvdWNoaW5nIHRoZSBzZWdtZW50IHZpZXdcbiAgICBpZiAoIXRoaXMuaXNUb3VjaGluZykge1xuICAgICAgdGhpcy5pc01hbnVhbFNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHByb2dyYW1tYXRpY2FsbHkgc2V0IHRoZSBkaXNwbGF5ZWQgc2VnbWVudCBjb250ZW50XG4gICAqIGluIHRoZSBzZWdtZW50IHZpZXcuIENhbGxpbmcgdGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIGB2YWx1ZWAgb2YgdGhlXG4gICAqIGNvcnJlc3BvbmRpbmcgc2VnbWVudCBidXR0b24uXG4gICAqXG4gICAqIEBwYXJhbSBpZDogVGhlIGlkIG9mIHRoZSBzZWdtZW50IGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICogQHBhcmFtIHNtb290aFNjcm9sbDogV2hldGhlciB0byBhbmltYXRlIHRoZSBzY3JvbGwgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFzeW5jIHNldENvbnRlbnQoaWQsIHNtb290aFNjcm9sbCA9IHRydWUpIHtcbiAgICBjb25zdCBjb250ZW50cyA9IHRoaXMuZ2V0U2VnbWVudENvbnRlbnRzKCk7XG4gICAgY29uc3QgaW5kZXggPSBjb250ZW50cy5maW5kSW5kZXgoY29udGVudCA9PiBjb250ZW50LmlkID09PSBpZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuaXNNYW51YWxTY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0U2Nyb2xsRW5kVGltZW91dCgpO1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5lbC5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBpbmRleCAqIGNvbnRlbnRXaWR0aCxcbiAgICAgIGJlaGF2aW9yOiBzbW9vdGhTY3JvbGwgPyAnc21vb3RoJyA6ICdpbnN0YW50J1xuICAgIH0pO1xuICB9XG4gIGdldFNlZ21lbnRDb250ZW50cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWdtZW50LWNvbnRlbnQnKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNNYW51YWxTY3JvbGxcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdmYTUyOGQyZDlhZTBmMDBmYzMwNjdkZWZlMmEwNDdkY2U3N2M4MTRhJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdzZWdtZW50LXZpZXctZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ3NlZ21lbnQtdmlldy1zY3JvbGwtZGlzYWJsZWQnOiBpc01hbnVhbFNjcm9sbCA9PT0gZmFsc2VcbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc3NGRjOGI0ZDA3M2NhZWZmMWJhYjI3MmQxMWI5ZWEzZTFhMjE1OTU0J1xuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5TZWdtZW50Vmlldy5zdHlsZSA9IHtcbiAgaW9zOiBJb25TZWdtZW50Vmlld0lvc1N0eWxlMCxcbiAgbWQ6IElvblNlZ21lbnRWaWV3TWRTdHlsZTBcbn07XG5leHBvcnQgeyBTZWdtZW50VmlldyBhcyBpb25fc2VnbWVudF92aWV3IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLG9CQUFvQjtBQUMxQixJQUFNLDBCQUEwQjtBQUNoQyxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLHlCQUF5QjtBQUMvQixJQUFNLGNBQWMsTUFBTTtBQUFBLEVBQ3hCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssdUJBQXVCLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxTQUFLLG1CQUFtQjtBQUN4QixTQUFLLGFBQWE7QUFDbEIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssaUJBQWlCO0FBQUEsRUFDeEI7QUFBQSxFQUNBLGFBQWEsSUFBSTtBQUNmLFFBQUk7QUFDSixVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJLEdBQUc7QUFDUCxVQUFNLGNBQWMsY0FBYyxjQUFjO0FBQ2hELFNBQUsscUJBQXFCLEtBQUs7QUFBQSxNQUM3QjtBQUFBLE1BQ0EsaUJBQWlCLEtBQUssS0FBSyxvQkFBb0IsUUFBUSxPQUFPLFNBQVMsS0FBSztBQUFBLElBQzlFLENBQUM7QUFFRCxTQUFLLHNCQUFzQjtBQUFBLEVBQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxvQkFBb0I7QUFDbEIsUUFBSSxLQUFLLGtCQUFrQjtBQUN6QixtQkFBYSxLQUFLLGdCQUFnQjtBQUNsQyxXQUFLLG1CQUFtQjtBQUFBLElBQzFCO0FBQ0EsU0FBSyxhQUFhO0FBQUEsRUFDcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGlCQUFpQjtBQUNmLFNBQUssYUFBYTtBQUFBLEVBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSx3QkFBd0I7QUFDdEIsUUFBSSxLQUFLLGtCQUFrQjtBQUN6QixtQkFBYSxLQUFLLGdCQUFnQjtBQUNsQyxXQUFLLG1CQUFtQjtBQUFBLElBQzFCO0FBQ0EsU0FBSyxtQkFBbUI7QUFBQSxNQUFXLE1BQU07QUFDdkMsYUFBSyxrQkFBa0I7QUFBQSxNQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQTtBQUFBLElBQUc7QUFBQSxFQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsb0JBQW9CO0FBR2xCLFFBQUksQ0FBQyxLQUFLLFlBQVk7QUFDcEIsV0FBSyxpQkFBaUI7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV00sV0FBVyxJQUFJLGVBQWUsTUFBTTtBQUFBO0FBQ3hDLFlBQU0sV0FBVyxLQUFLLG1CQUFtQjtBQUN6QyxZQUFNLFFBQVEsU0FBUyxVQUFVLGFBQVcsUUFBUSxPQUFPLEVBQUU7QUFDN0QsVUFBSSxVQUFVLEdBQUk7QUFDbEIsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxzQkFBc0I7QUFDM0IsWUFBTSxlQUFlLEtBQUssR0FBRztBQUM3QixXQUFLLEdBQUcsU0FBUztBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsTUFBTSxRQUFRO0FBQUEsUUFDZCxVQUFVLGVBQWUsV0FBVztBQUFBLE1BQ3RDLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQSxFQUNBLHFCQUFxQjtBQUNuQixXQUFPLE1BQU0sS0FBSyxLQUFLLEdBQUcsaUJBQWlCLHFCQUFxQixDQUFDO0FBQUEsRUFDbkU7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wseUJBQXlCO0FBQUEsUUFDekIsZ0NBQWdDLG1CQUFtQjtBQUFBLE1BQ3JEO0FBQUEsSUFDRixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUNGO0FBQ0EsWUFBWSxRQUFRO0FBQUEsRUFDbEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
