import {
  raf
} from "./chunk-RRWPYKYY.js";
import {
  win
} from "./chunk-JYOJD2RE.js";

// node_modules/@ionic/core/dist/esm/notch-controller-00d92e89.js
var createNotchController = (el, getNotchSpacerEl, getLabelSlot) => {
  let notchVisibilityIO;
  const needsExplicitNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (
      /**
       * If the notch is not being used
       * then we do not need to set the notch width.
       */
      notchSpacerEl === void 0 || /**
       * If either the label property is being
       * used or the label slot is not defined,
       * then we do not need to estimate the notch width.
       */
      el.label !== void 0 || getLabelSlot() === null
    ) {
      return false;
    }
    return true;
  };
  const calculateNotchWidth = () => {
    if (needsExplicitNotchWidth()) {
      raf(() => {
        setNotchWidth();
      });
    }
  };
  const setNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (notchSpacerEl === void 0) {
      return;
    }
    if (!needsExplicitNotchWidth()) {
      notchSpacerEl.style.removeProperty("width");
      return;
    }
    const width = getLabelSlot().scrollWidth;
    if (
      /**
       * If the computed width of the label is 0
       * and notchSpacerEl's offsetParent is null
       * then that means the element is hidden.
       * As a result, we need to wait for the element
       * to become visible before setting the notch width.
       *
       * We do not check el.offsetParent because
       * that can be null if the host element has
       * position: fixed applied to it.
       * notchSpacerEl does not have position: fixed.
       */
      width === 0 && notchSpacerEl.offsetParent === null && win !== void 0 && "IntersectionObserver" in win
    ) {
      if (notchVisibilityIO !== void 0) {
        return;
      }
      const io = notchVisibilityIO = new IntersectionObserver(
        (ev) => {
          if (ev[0].intersectionRatio === 1) {
            setNotchWidth();
            io.disconnect();
            notchVisibilityIO = void 0;
          }
        },
        /**
         * Set the root to be the host element
         * This causes the IO callback
         * to be fired in WebKit as soon as the element
         * is visible. If we used the default root value
         * then WebKit would only fire the IO callback
         * after any animations (such as a modal transition)
         * finished, and there would potentially be a flicker.
         */
        {
          threshold: 0.01,
          root: el
        }
      );
      io.observe(notchSpacerEl);
      return;
    }
    notchSpacerEl.style.setProperty("width", `${width * 0.75}px`);
  };
  const destroy = () => {
    if (notchVisibilityIO) {
      notchVisibilityIO.disconnect();
      notchVisibilityIO = void 0;
    }
  };
  return {
    calculateNotchWidth,
    destroy
  };
};

export {
  createNotchController
};
/*! Bundled license information:

@ionic/core/dist/esm/notch-controller-00d92e89.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9ub3RjaC1jb250cm9sbGVyLTAwZDkyZTg5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuaW1wb3J0IHsgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSB0byBjYWxjdWxhdGUgdGhlIHNpemUgb2YgYW4gb3V0bGluZSBub3RjaFxuICogd2lkdGggcmVsYXRpdmUgdG8gdGhlIGNvbnRlbnQgcGFzc2VkLiBUaGlzIGlzIHVzZWQgaW5cbiAqIGNvbXBvbmVudHMgc3VjaCBhcyBgaW9uLXNlbGVjdGAgd2l0aCBgZmlsbD1cIm91dGxpbmVcImBcbiAqIHdoZXJlIHdlIG5lZWQgdG8gcGFzcyBzbG90dGVkIEhUTUwgY29udGVudC4gVGhpcyBpcyBub3RcbiAqIG5lZWRlZCB3aGVuIHJlbmRlcmluZyBwbGFpbnRleHQgY29udGVudCBiZWNhdXNlIHdlIGNhblxuICogcmVuZGVyIHRoZSBwbGFpbnRleHQgYWdhaW4gaGlkZGVuIHdpdGggYG9wYWNpdHk6IDBgIGluc2lkZVxuICogb2YgdGhlIG5vdGNoLiBBcyBhIHJlc3VsdCB3ZSBjYW4gcmVseSBvbiB0aGUgaW50cmluc2ljIHNpemVcbiAqIG9mIHRoZSBlbGVtZW50IHRvIGNvcnJlY3RseSBjb21wdXRlIHRoZSBub3RjaCB3aWR0aC4gV2VcbiAqIGNhbm5vdCBkbyB0aGlzIHdpdGggc2xvdHRlZCBjb250ZW50IGJlY2F1c2Ugd2UgY2Fubm90IHByb2plY3RcbiAqIGl0IGludG8gMiBwbGFjZXMgYXQgb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSBlbDogVGhlIGhvc3QgZWxlbWVudFxuICogQHBhcmFtIGdldE5vdGNoU3BhY2VyRWw6IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBub3RjaCBzcGFjZXIgZWxlbWVudCBpbnNpZGUgb2YgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSBnZXRMYWJlbFNsb3Q6IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzbG90dGVkIGNvbnRlbnQuXG4gKi9cbmNvbnN0IGNyZWF0ZU5vdGNoQ29udHJvbGxlciA9IChlbCwgZ2V0Tm90Y2hTcGFjZXJFbCwgZ2V0TGFiZWxTbG90KSA9PiB7XG4gIGxldCBub3RjaFZpc2liaWxpdHlJTztcbiAgY29uc3QgbmVlZHNFeHBsaWNpdE5vdGNoV2lkdGggPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90Y2hTcGFjZXJFbCA9IGdldE5vdGNoU3BhY2VyRWwoKTtcbiAgICBpZiAoXG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5vdGNoIGlzIG5vdCBiZWluZyB1c2VkXG4gICAgICogdGhlbiB3ZSBkbyBub3QgbmVlZCB0byBzZXQgdGhlIG5vdGNoIHdpZHRoLlxuICAgICAqL1xuICAgIG5vdGNoU3BhY2VyRWwgPT09IHVuZGVmaW5lZCB8fFxuICAgIC8qKlxuICAgICAqIElmIGVpdGhlciB0aGUgbGFiZWwgcHJvcGVydHkgaXMgYmVpbmdcbiAgICAgKiB1c2VkIG9yIHRoZSBsYWJlbCBzbG90IGlzIG5vdCBkZWZpbmVkLFxuICAgICAqIHRoZW4gd2UgZG8gbm90IG5lZWQgdG8gZXN0aW1hdGUgdGhlIG5vdGNoIHdpZHRoLlxuICAgICAqL1xuICAgIGVsLmxhYmVsICE9PSB1bmRlZmluZWQgfHwgZ2V0TGFiZWxTbG90KCkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNhbGN1bGF0ZU5vdGNoV2lkdGggPSAoKSA9PiB7XG4gICAgaWYgKG5lZWRzRXhwbGljaXROb3RjaFdpZHRoKCkpIHtcbiAgICAgIC8qKlxuICAgICAgICogUnVuIHRoaXMgdGhlIGZyYW1lIGFmdGVyXG4gICAgICAgKiB0aGUgYnJvd3NlciBoYXMgcmUtcGFpbnRlZCB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAgICogT3RoZXJ3aXNlLCB0aGUgbGFiZWwgZWxlbWVudCBtYXkgaGF2ZSBhIHdpZHRoXG4gICAgICAgKiBvZiAwIGFuZCB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgd2lsbCBiZSB1c2VkLlxuICAgICAgICovXG4gICAgICByYWYoKCkgPT4ge1xuICAgICAgICBzZXROb3RjaFdpZHRoKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBXaGVuIHVzaW5nIGEgbGFiZWwgcHJvcCB3ZSBjYW4gcmVuZGVyXG4gICAqIHRoZSBsYWJlbCB2YWx1ZSBpbnNpZGUgb2YgdGhlIG5vdGNoIGFuZFxuICAgKiBsZXQgdGhlIGJyb3dzZXIgY2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBub3RjaC5cbiAgICogSG93ZXZlciwgd2UgY2Fubm90IHJlbmRlciB0aGUgbGFiZWwgc2xvdCBpbiBtdWx0aXBsZVxuICAgKiBwbGFjZXMgc28gd2UgbmVlZCB0byBtYW51YWxseSBjYWxjdWxhdGUgdGhlIG5vdGNoIGRpbWVuc2lvblxuICAgKiBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgc2xvdHRlZCBjb250ZW50LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gc2V0IHRoZSBub3RjaCB3aWR0aFxuICAgKiBvbiBzbG90dGVkIGxhYmVsIGNvbnRlbnQuIFRoZSBub3RjaCB3aWR0aCBmb3IgbGFiZWwgcHJvcFxuICAgKiBjb250ZW50IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGVcbiAgICogaW50cmluc2ljIHNpemUgb2YgdGhlIGxhYmVsIHRleHQuXG4gICAqL1xuICBjb25zdCBzZXROb3RjaFdpZHRoID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdGNoU3BhY2VyRWwgPSBnZXROb3RjaFNwYWNlckVsKCk7XG4gICAgaWYgKG5vdGNoU3BhY2VyRWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5lZWRzRXhwbGljaXROb3RjaFdpZHRoKCkpIHtcbiAgICAgIG5vdGNoU3BhY2VyRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdpZHRoID0gZ2V0TGFiZWxTbG90KCkuc2Nyb2xsV2lkdGg7XG4gICAgaWYgKFxuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb21wdXRlZCB3aWR0aCBvZiB0aGUgbGFiZWwgaXMgMFxuICAgICAqIGFuZCBub3RjaFNwYWNlckVsJ3Mgb2Zmc2V0UGFyZW50IGlzIG51bGxcbiAgICAgKiB0aGVuIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLlxuICAgICAqIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBlbGVtZW50XG4gICAgICogdG8gYmVjb21lIHZpc2libGUgYmVmb3JlIHNldHRpbmcgdGhlIG5vdGNoIHdpZHRoLlxuICAgICAqXG4gICAgICogV2UgZG8gbm90IGNoZWNrIGVsLm9mZnNldFBhcmVudCBiZWNhdXNlXG4gICAgICogdGhhdCBjYW4gYmUgbnVsbCBpZiB0aGUgaG9zdCBlbGVtZW50IGhhc1xuICAgICAqIHBvc2l0aW9uOiBmaXhlZCBhcHBsaWVkIHRvIGl0LlxuICAgICAqIG5vdGNoU3BhY2VyRWwgZG9lcyBub3QgaGF2ZSBwb3NpdGlvbjogZml4ZWQuXG4gICAgICovXG4gICAgd2lkdGggPT09IDAgJiYgbm90Y2hTcGFjZXJFbC5vZmZzZXRQYXJlbnQgPT09IG51bGwgJiYgd2luICE9PSB1bmRlZmluZWQgJiYgJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW4pIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlcmUgaXMgYW4gSU8gYWxyZWFkeSBhdHRhY2hlZFxuICAgICAgICogdGhlbiB0aGF0IHdpbGwgdXBkYXRlIHRoZSBub3RjaFxuICAgICAgICogb25jZSB0aGUgZWxlbWVudCBiZWNvbWVzIHZpc2libGUuXG4gICAgICAgKiBBcyBhIHJlc3VsdCwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGVcbiAgICAgICAqIGFub3RoZXIgb25lLlxuICAgICAgICovXG4gICAgICBpZiAobm90Y2hWaXNpYmlsaXR5SU8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbyA9IG5vdGNoVmlzaWJpbGl0eUlPID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGV2ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGUgdGhlbiB3ZVxuICAgICAgICAgKiBjYW4gdHJ5IHNldHRpbmcgdGhlIG5vdGNoIHdpZHRoIGFnYWluLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2WzBdLmludGVyc2VjdGlvblJhdGlvID09PSAxKSB7XG4gICAgICAgICAgc2V0Tm90Y2hXaWR0aCgpO1xuICAgICAgICAgIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub3RjaFZpc2liaWxpdHlJTyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSByb290IHRvIGJlIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAqIFRoaXMgY2F1c2VzIHRoZSBJTyBjYWxsYmFja1xuICAgICAgICogdG8gYmUgZmlyZWQgaW4gV2ViS2l0IGFzIHNvb24gYXMgdGhlIGVsZW1lbnRcbiAgICAgICAqIGlzIHZpc2libGUuIElmIHdlIHVzZWQgdGhlIGRlZmF1bHQgcm9vdCB2YWx1ZVxuICAgICAgICogdGhlbiBXZWJLaXQgd291bGQgb25seSBmaXJlIHRoZSBJTyBjYWxsYmFja1xuICAgICAgICogYWZ0ZXIgYW55IGFuaW1hdGlvbnMgKHN1Y2ggYXMgYSBtb2RhbCB0cmFuc2l0aW9uKVxuICAgICAgICogZmluaXNoZWQsIGFuZCB0aGVyZSB3b3VsZCBwb3RlbnRpYWxseSBiZSBhIGZsaWNrZXIuXG4gICAgICAgKi9cbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiAwLjAxLFxuICAgICAgICByb290OiBlbFxuICAgICAgfSk7XG4gICAgICBpby5vYnNlcnZlKG5vdGNoU3BhY2VyRWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIHRoZW4gd2UgY2FuIHNldCB0aGUgbm90Y2ggd2lkdGguXG4gICAgICogVGhlIG5vdGNoIGlzIG9ubHkgdmlzaWJsZSB3aGVuIHRoZSBsYWJlbCBpcyBzY2FsZWQsXG4gICAgICogd2hpY2ggaXMgd2h5IHdlIG11bHRpcGx5IHRoZSB3aWR0aCBieSAwLjc1IGFzIHRoaXMgaXNcbiAgICAgKiB0aGUgc2FtZSBhbW91bnQgdGhlIGxhYmVsIGVsZW1lbnQgaXMgc2NhbGVkIGJ5IGluIHRoZSBob3N0IENTUy5cbiAgICAgKiAoU2VlICRmb3JtLWNvbnRyb2wtbGFiZWwtc3RhY2tlZC1zY2FsZSBpbiBpb25pYy5nbG9iYWxzLnNjc3MpLlxuICAgICAqL1xuICAgIG5vdGNoU3BhY2VyRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7d2lkdGggKiAwLjc1fXB4YCk7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKG5vdGNoVmlzaWJpbGl0eUlPKSB7XG4gICAgICBub3RjaFZpc2liaWxpdHlJTy5kaXNjb25uZWN0KCk7XG4gICAgICBub3RjaFZpc2liaWxpdHlJTyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2FsY3VsYXRlTm90Y2hXaWR0aCxcbiAgICBkZXN0cm95XG4gIH07XG59O1xuZXhwb3J0IHsgY3JlYXRlTm90Y2hDb250cm9sbGVyIGFzIGMgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBdUJBLElBQU0sd0JBQXdCLENBQUMsSUFBSSxrQkFBa0IsaUJBQWlCO0FBQ3BFLE1BQUk7QUFDSixRQUFNLDBCQUEwQixNQUFNO0FBQ3BDLFVBQU0sZ0JBQWdCLGlCQUFpQjtBQUN2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTWxCLEdBQUcsVUFBVSxVQUFhLGFBQWEsTUFBTTtBQUFBLE1BQU07QUFDakQsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sc0JBQXNCLE1BQU07QUFDaEMsUUFBSSx3QkFBd0IsR0FBRztBQU83QixVQUFJLE1BQU07QUFDUixzQkFBYztBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQWNBLFFBQU0sZ0JBQWdCLE1BQU07QUFDMUIsVUFBTSxnQkFBZ0IsaUJBQWlCO0FBQ3ZDLFFBQUksa0JBQWtCLFFBQVc7QUFDL0I7QUFBQSxJQUNGO0FBQ0EsUUFBSSxDQUFDLHdCQUF3QixHQUFHO0FBQzlCLG9CQUFjLE1BQU0sZUFBZSxPQUFPO0FBQzFDO0FBQUEsSUFDRjtBQUNBLFVBQU0sUUFBUSxhQUFhLEVBQUU7QUFDN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWFBLFVBQVUsS0FBSyxjQUFjLGlCQUFpQixRQUFRLFFBQVEsVUFBYSwwQkFBMEI7QUFBQSxNQUFLO0FBUXhHLFVBQUksc0JBQXNCLFFBQVc7QUFDbkM7QUFBQSxNQUNGO0FBQ0EsWUFBTSxLQUFLLG9CQUFvQixJQUFJO0FBQUEsUUFBcUIsUUFBTTtBQUs1RCxjQUFJLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixHQUFHO0FBQ2pDLDBCQUFjO0FBQ2QsZUFBRyxXQUFXO0FBQ2QsZ0NBQW9CO0FBQUEsVUFDdEI7QUFBQSxRQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFVQTtBQUFBLFVBQ0UsV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUFDO0FBQ0QsU0FBRyxRQUFRLGFBQWE7QUFDeEI7QUFBQSxJQUNGO0FBUUEsa0JBQWMsTUFBTSxZQUFZLFNBQVMsR0FBRyxRQUFRLElBQUksSUFBSTtBQUFBLEVBQzlEO0FBQ0EsUUFBTSxVQUFVLE1BQU07QUFDcEIsUUFBSSxtQkFBbUI7QUFDckIsd0JBQWtCLFdBQVc7QUFDN0IsMEJBQW9CO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
