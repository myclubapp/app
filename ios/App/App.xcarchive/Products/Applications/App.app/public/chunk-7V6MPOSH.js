// node_modules/@ionic/core/dist/esm/focus-visible-dd40d69f.js
var ION_FOCUSED = "ion-focused";
var ION_FOCUSABLE = "ion-focusable";
var FOCUS_KEYS = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "Home", "End"];
var startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach((el) => el.classList.remove(ION_FOCUSED));
    elements.forEach((el) => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath !== void 0) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener("keydown", onKeydown);
  ref.addEventListener("focusin", onFocusin);
  ref.addEventListener("focusout", onFocusout);
  ref.addEventListener("touchstart", pointerDown, {
    passive: true
  });
  ref.addEventListener("mousedown", pointerDown);
  const destroy = () => {
    ref.removeEventListener("keydown", onKeydown);
    ref.removeEventListener("focusin", onFocusin);
    ref.removeEventListener("focusout", onFocusout);
    ref.removeEventListener("touchstart", pointerDown);
    ref.removeEventListener("mousedown", pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};

export {
  startFocusVisible
};
/*! Bundled license information:

@ionic/core/dist/esm/focus-visible-dd40d69f.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9mb2N1cy12aXNpYmxlLWRkNDBkNjlmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBJT05fRk9DVVNFRCA9ICdpb24tZm9jdXNlZCc7XG5jb25zdCBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xuY29uc3QgRk9DVVNfS0VZUyA9IFsnVGFiJywgJ0Fycm93RG93bicsICdTcGFjZScsICdFc2NhcGUnLCAnICcsICdTaGlmdCcsICdFbnRlcicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0hvbWUnLCAnRW5kJ107XG5jb25zdCBzdGFydEZvY3VzVmlzaWJsZSA9IHJvb3RFbCA9PiB7XG4gIGxldCBjdXJyZW50Rm9jdXMgPSBbXTtcbiAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XG4gIGNvbnN0IHJlZiA9IHJvb3RFbCA/IHJvb3RFbC5zaGFkb3dSb290IDogZG9jdW1lbnQ7XG4gIGNvbnN0IHJvb3QgPSByb290RWwgPyByb290RWwgOiBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBzZXRGb2N1cyA9IGVsZW1lbnRzID0+IHtcbiAgICBjdXJyZW50Rm9jdXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKElPTl9GT0NVU0VEKSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKElPTl9GT0NVU0VEKSk7XG4gICAgY3VycmVudEZvY3VzID0gZWxlbWVudHM7XG4gIH07XG4gIGNvbnN0IHBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xuICAgIHNldEZvY3VzKFtdKTtcbiAgfTtcbiAgY29uc3Qgb25LZXlkb3duID0gZXYgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IEZPQ1VTX0tFWVMuaW5jbHVkZXMoZXYua2V5KTtcbiAgICBpZiAoIWtleWJvYXJkTW9kZSkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25Gb2N1c2luID0gZXYgPT4ge1xuICAgIGlmIChrZXlib2FyZE1vZGUgJiYgZXYuY29tcG9zZWRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHRvRm9jdXMgPSBldi5jb21wb3NlZFBhdGgoKS5maWx0ZXIoZWwgPT4ge1xuICAgICAgICAvLyBUT0RPKEZXLTI4MzIpOiB0eXBlXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZGVzdHJveSxcbiAgICBzZXRGb2N1c1xuICB9O1xufTtcbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07Il0sIm1hcHBpbmdzIjoiO0FBR0EsSUFBTSxjQUFjO0FBQ3BCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sYUFBYSxDQUFDLE9BQU8sYUFBYSxTQUFTLFVBQVUsS0FBSyxTQUFTLFNBQVMsYUFBYSxjQUFjLFdBQVcsUUFBUSxLQUFLO0FBQ3JJLElBQU0sb0JBQW9CLFlBQVU7QUFDbEMsTUFBSSxlQUFlLENBQUM7QUFDcEIsTUFBSSxlQUFlO0FBQ25CLFFBQU0sTUFBTSxTQUFTLE9BQU8sYUFBYTtBQUN6QyxRQUFNLE9BQU8sU0FBUyxTQUFTLFNBQVM7QUFDeEMsUUFBTSxXQUFXLGNBQVk7QUFDM0IsaUJBQWEsUUFBUSxRQUFNLEdBQUcsVUFBVSxPQUFPLFdBQVcsQ0FBQztBQUMzRCxhQUFTLFFBQVEsUUFBTSxHQUFHLFVBQVUsSUFBSSxXQUFXLENBQUM7QUFDcEQsbUJBQWU7QUFBQSxFQUNqQjtBQUNBLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLG1CQUFlO0FBQ2YsYUFBUyxDQUFDLENBQUM7QUFBQSxFQUNiO0FBQ0EsUUFBTSxZQUFZLFFBQU07QUFDdEIsbUJBQWUsV0FBVyxTQUFTLEdBQUcsR0FBRztBQUN6QyxRQUFJLENBQUMsY0FBYztBQUNqQixlQUFTLENBQUMsQ0FBQztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0EsUUFBTSxZQUFZLFFBQU07QUFDdEIsUUFBSSxnQkFBZ0IsR0FBRyxpQkFBaUIsUUFBVztBQUNqRCxZQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsT0FBTyxRQUFNO0FBRTdDLFlBQUksR0FBRyxXQUFXO0FBQ2hCLGlCQUFPLEdBQUcsVUFBVSxTQUFTLGFBQWE7QUFBQSxRQUM1QztBQUNBLGVBQU87QUFBQSxNQUNULENBQUM7QUFDRCxlQUFTLE9BQU87QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLGFBQWEsTUFBTTtBQUN2QixRQUFJLElBQUksa0JBQWtCLE1BQU07QUFDOUIsZUFBUyxDQUFDLENBQUM7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNBLE1BQUksaUJBQWlCLFdBQVcsU0FBUztBQUN6QyxNQUFJLGlCQUFpQixXQUFXLFNBQVM7QUFDekMsTUFBSSxpQkFBaUIsWUFBWSxVQUFVO0FBQzNDLE1BQUksaUJBQWlCLGNBQWMsYUFBYTtBQUFBLElBQzlDLFNBQVM7QUFBQSxFQUNYLENBQUM7QUFDRCxNQUFJLGlCQUFpQixhQUFhLFdBQVc7QUFDN0MsUUFBTSxVQUFVLE1BQU07QUFDcEIsUUFBSSxvQkFBb0IsV0FBVyxTQUFTO0FBQzVDLFFBQUksb0JBQW9CLFdBQVcsU0FBUztBQUM1QyxRQUFJLG9CQUFvQixZQUFZLFVBQVU7QUFDOUMsUUFBSSxvQkFBb0IsY0FBYyxXQUFXO0FBQ2pELFFBQUksb0JBQW9CLGFBQWEsV0FBVztBQUFBLEVBQ2xEO0FBQ0EsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
