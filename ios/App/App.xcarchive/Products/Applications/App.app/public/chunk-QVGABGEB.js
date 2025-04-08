import {
  win
} from "./chunk-JYOJD2RE.js";
import {
  config
} from "./chunk-5IJ3YEPD.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/hardware-back-button-864101a3.js
var shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
var blockHardwareBackButton = () => {
  document.addEventListener("backbutton", () => {
  });
};
var startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  const backButtonCallback = () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent("ionBackButton", {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({
            priority,
            handler,
            id: index++
          });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = (handlerRegister) => __async(void 0, null, function* () {
      try {
        if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
          const result = handlerRegister.handler(processHandlers);
          if (result != null) {
            yield result;
          }
        }
      } catch (e) {
        console.error(e);
      }
    });
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => void 0,
          id: -1
        };
        handlers.forEach((handler) => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  };
  if (shouldUseCloseWatcher()) {
    let watcher;
    const configureWatcher = () => {
      watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
      watcher = new win.CloseWatcher();
      watcher.onclose = () => {
        backButtonCallback();
        configureWatcher();
      };
    };
    configureWatcher();
  } else {
    doc.addEventListener("backbutton", backButtonCallback);
  }
};
var OVERLAY_BACK_BUTTON_PRIORITY = 100;
var MENU_BACK_BUTTON_PRIORITY = 99;

export {
  shouldUseCloseWatcher,
  blockHardwareBackButton,
  startHardwareBackButton,
  OVERLAY_BACK_BUTTON_PRIORITY,
  MENU_BACK_BUTTON_PRIORITY
};
/*! Bundled license information:

@ionic/core/dist/esm/hardware-back-button-864101a3.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCB7IGMgYXMgY29uZmlnIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0ICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcblxuLyoqXG4gKiBDbG9zZVdhdGNoZXIgaXMgYSBuZXdlciBBUEkgdGhhdCBsZXRzXG4gKiB1c2UgZGV0ZWN0IHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiBldmVudFxuICogaW4gYSB3ZWIgYnJvd3NlcjogaHR0cHM6Ly9jYW5pdXNlLmNvbS8/c2VhcmNoPWNsb3Nld2F0Y2hlclxuICogSG93ZXZlciwgbm90IGV2ZXJ5IGJyb3dzZXIgc3VwcG9ydHMgaXQgeWV0LlxuICpcbiAqIFRoaXMgbmVlZHMgdG8gYmUgYSBmdW5jdGlvbiBzbyB0aGF0IHdlIGNhblxuICogY2hlY2sgdGhlIGNvbmZpZyBvbmNlIGl0IGhhcyBiZWVuIHNldC5cbiAqIE90aGVyd2lzZSwgdGhpcyBjb2RlIHdvdWxkIGJlIGV2YWx1YXRlZCB0aGVcbiAqIG1vbWVudCB0aGlzIGZpbGUgaXMgZXZhbHVhdGVkIHdoaWNoIGNvdWxkIGJlXG4gKiBiZWZvcmUgdGhlIGNvbmZpZyBpcyBzZXQuXG4gKi9cbmNvbnN0IHNob3VsZFVzZUNsb3NlV2F0Y2hlciA9ICgpID0+IGNvbmZpZy5nZXQoJ2V4cGVyaW1lbnRhbENsb3NlV2F0Y2hlcicsIGZhbHNlKSAmJiB3aW4gIT09IHVuZGVmaW5lZCAmJiAnQ2xvc2VXYXRjaGVyJyBpbiB3aW47XG4vKipcbiAqIFdoZW4gaGFyZHdhcmVCYWNrQnV0dG9uOiBmYWxzZSBpbiBjb25maWcsXG4gKiB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhbHNvIGJsb2NrIHRoZSBkZWZhdWx0XG4gKiB3ZWJ2aWV3IGJlaGF2aW9yLiBJZiB3ZSBkb24ndCB0aGVuIGl0IHdpbGwgYmVcbiAqIHBvc3NpYmxlIGZvciB1c2VycyB0byBuYXZpZ2F0ZSBiYWNrd2FyZCB3aGlsZVxuICogYW4gb3ZlcmxheSBpcyBzdGlsbCBvcGVuLiBBZGRpdGlvbmFsbHksIGl0IHdpbGxcbiAqIGdpdmUgdGhlIGFwcGVhcmFuY2UgdGhhdCB0aGUgaGFyZHdhcmVCYWNrQnV0dG9uXG4gKiBjb25maWcgaXMgbm90IHdvcmtpbmcgYXMgdGhlIHBhZ2UgdHJhbnNpdGlvblxuICogd2lsbCBzdGlsbCBoYXBwZW4uXG4gKi9cbmNvbnN0IGJsb2NrSGFyZHdhcmVCYWNrQnV0dG9uID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdiYWNrYnV0dG9uJywgKCkgPT4ge30pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuY29uc3Qgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuICBsZXQgYnVzeSA9IGZhbHNlO1xuICBjb25zdCBiYWNrQnV0dG9uQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKGJ1c3kpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgaGFuZGxlcnMgPSBbXTtcbiAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudCgnaW9uQmFja0J1dHRvbicsIHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHJlZ2lzdGVyKHByaW9yaXR5LCBoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBpZDogaW5kZXgrK1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSBhc3luYyBoYW5kbGVyUmVnaXN0ZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXJSZWdpc3RlciA9PT0gbnVsbCB8fCBoYW5kbGVyUmVnaXN0ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbmRsZXJSZWdpc3Rlci5oYW5kbGVyKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlclJlZ2lzdGVyLmhhbmRsZXIocHJvY2Vzc0hhbmRsZXJzKTtcbiAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHByb2Nlc3NIYW5kbGVycyA9ICgpID0+IHtcbiAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEhhbmRsZXIgPSB7XG4gICAgICAgICAgcHJpb3JpdHk6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgICBpZDogLTFcbiAgICAgICAgfTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5wcmlvcml0eSA+PSBzZWxlY3RlZEhhbmRsZXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnVzeSA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzID0gaGFuZGxlcnMuZmlsdGVyKGhhbmRsZXIgPT4gaGFuZGxlci5pZCAhPT0gc2VsZWN0ZWRIYW5kbGVyLmlkKTtcbiAgICAgICAgZXhlY3V0ZUFjdGlvbihzZWxlY3RlZEhhbmRsZXIpLnRoZW4oKCkgPT4gYnVzeSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHByb2Nlc3NIYW5kbGVycygpO1xuICB9O1xuICAvKipcbiAgICogSWYgdGhlIENsb3NlV2F0Y2hlciBpcyBkZWZpbmVkIHRoZW5cbiAgICogd2UgZG9uJ3Qgd2FudCB0byBhbHNvIGxpc3RlbiBmb3IgdGhlIG5hdGl2ZVxuICAgKiBiYWNrYnV0dG9uIGV2ZW50IG90aGVyd2lzZSB3ZSBtYXkgZ2V0IGR1cGxpY2F0ZVxuICAgKiBldmVudHMgZmlyaW5nLlxuICAgKi9cbiAgaWYgKHNob3VsZFVzZUNsb3NlV2F0Y2hlcigpKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgY29uc3QgY29uZmlndXJlV2F0Y2hlciA9ICgpID0+IHtcbiAgICAgIHdhdGNoZXIgPT09IG51bGwgfHwgd2F0Y2hlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICB3YXRjaGVyID0gbmV3IHdpbi5DbG9zZVdhdGNoZXIoKTtcbiAgICAgIC8qKlxuICAgICAgICogT25jZSBhIGNsb3NlIHJlcXVlc3QgaGFwcGVuc1xuICAgICAgICogdGhlIHdhdGNoZXIgZ2V0cyBkZXN0cm95ZWQuXG4gICAgICAgKiBBcyBhIHJlc3VsdCwgd2UgbmVlZCB0byByZS1jb25maWd1cmVcbiAgICAgICAqIHRoZSB3YXRjaGVyIHNvIHdlIGNhbiByZXNwb25kIHRvIG90aGVyXG4gICAgICAgKiBjbG9zZSByZXF1ZXN0cy5cbiAgICAgICAqL1xuICAgICAgd2F0Y2hlci5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICBiYWNrQnV0dG9uQ2FsbGJhY2soKTtcbiAgICAgICAgY29uZmlndXJlV2F0Y2hlcigpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbmZpZ3VyZVdhdGNoZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsIGJhY2tCdXR0b25DYWxsYmFjayk7XG4gIH1cbn07XG5jb25zdCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZID0gMTAwO1xuY29uc3QgTUVOVV9CQUNLX0JVVFRPTl9QUklPUklUWSA9IDk5OyAvLyAxIGxlc3MgdGhhbiBvdmVybGF5IHByaW9yaXR5IHNpbmNlIG1lbnUgaXMgZGlzcGxheWVkIGJlaGluZCBvdmVybGF5c1xuXG5leHBvcnQgeyBNRU5VX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBibG9ja0hhcmR3YXJlQmFja0J1dHRvbiwgc2hvdWxkVXNlQ2xvc2VXYXRjaGVyLCBzdGFydEhhcmR3YXJlQmFja0J1dHRvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFtQkEsSUFBTSx3QkFBd0IsTUFBTSxPQUFPLElBQUksNEJBQTRCLEtBQUssS0FBSyxRQUFRLFVBQWEsa0JBQWtCO0FBVzVILElBQU0sMEJBQTBCLE1BQU07QUFDcEMsV0FBUyxpQkFBaUIsY0FBYyxNQUFNO0FBQUEsRUFBQyxDQUFDO0FBQ2xEO0FBQ0EsSUFBTSwwQkFBMEIsTUFBTTtBQUNwQyxRQUFNLE1BQU07QUFDWixNQUFJLE9BQU87QUFDWCxRQUFNLHFCQUFxQixNQUFNO0FBQy9CLFFBQUksTUFBTTtBQUNSO0FBQUEsSUFDRjtBQUNBLFFBQUksUUFBUTtBQUNaLFFBQUksV0FBVyxDQUFDO0FBQ2hCLFVBQU0sS0FBSyxJQUFJLFlBQVksaUJBQWlCO0FBQUEsTUFDMUMsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ04sU0FBUyxVQUFVLFNBQVM7QUFDMUIsbUJBQVMsS0FBSztBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsWUFDQSxJQUFJO0FBQUEsVUFDTixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFDRCxRQUFJLGNBQWMsRUFBRTtBQUNwQixVQUFNLGdCQUFnQixDQUFNLG9CQUFtQjtBQUM3QyxVQUFJO0FBQ0YsWUFBSSxvQkFBb0IsUUFBUSxvQkFBb0IsU0FBUyxTQUFTLGdCQUFnQixTQUFTO0FBQzdGLGdCQUFNLFNBQVMsZ0JBQWdCLFFBQVEsZUFBZTtBQUN0RCxjQUFJLFVBQVUsTUFBTTtBQUNsQixrQkFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRixTQUFTLEdBQUc7QUFDVixnQkFBUSxNQUFNLENBQUM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFDQSxVQUFNLGtCQUFrQixNQUFNO0FBQzVCLFVBQUksU0FBUyxTQUFTLEdBQUc7QUFDdkIsWUFBSSxrQkFBa0I7QUFBQSxVQUNwQixVQUFVLE9BQU87QUFBQSxVQUNqQixTQUFTLE1BQU07QUFBQSxVQUNmLElBQUk7QUFBQSxRQUNOO0FBQ0EsaUJBQVMsUUFBUSxhQUFXO0FBQzFCLGNBQUksUUFBUSxZQUFZLGdCQUFnQixVQUFVO0FBQ2hELDhCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQ0QsZUFBTztBQUNQLG1CQUFXLFNBQVMsT0FBTyxhQUFXLFFBQVEsT0FBTyxnQkFBZ0IsRUFBRTtBQUN2RSxzQkFBYyxlQUFlLEVBQUUsS0FBSyxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQ3hEO0FBQUEsSUFDRjtBQUNBLG9CQUFnQjtBQUFBLEVBQ2xCO0FBT0EsTUFBSSxzQkFBc0IsR0FBRztBQUMzQixRQUFJO0FBQ0osVUFBTSxtQkFBbUIsTUFBTTtBQUM3QixrQkFBWSxRQUFRLFlBQVksU0FBUyxTQUFTLFFBQVEsUUFBUTtBQUNsRSxnQkFBVSxJQUFJLElBQUksYUFBYTtBQVEvQixjQUFRLFVBQVUsTUFBTTtBQUN0QiwyQkFBbUI7QUFDbkIseUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQ0EscUJBQWlCO0FBQUEsRUFDbkIsT0FBTztBQUNMLFFBQUksaUJBQWlCLGNBQWMsa0JBQWtCO0FBQUEsRUFDdkQ7QUFDRjtBQUNBLElBQU0sK0JBQStCO0FBQ3JDLElBQU0sNEJBQTRCOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
