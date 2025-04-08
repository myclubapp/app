import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  clamp
} from "./chunk-RRWPYKYY.js";
import {
  createGesture
} from "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/swipe-back-07df2095.js
var createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = isRTL(el);
  const isAtEdge = (detail) => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = (detail) => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = (detail) => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = (detail) => {
    rtl = isRTL(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = (detail) => {
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = (detail) => {
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
  };
  return createGesture({
    el,
    gestureName: "goback-swipe",
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};
export {
  createSwipeBackGesture
};
/*! Bundled license information:

@ionic/core/dist/esm/swipe-back-07df2095.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zd2lwZS1iYWNrLTA3ZGYyMDk1LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBqIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1iYWJlYWJlYi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zOTc4MjY0Mi5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTMxNGE1NGY2LmpzJztcbmNvbnN0IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgPSAoZWwsIGNhblN0YXJ0SGFuZGxlciwgb25TdGFydEhhbmRsZXIsIG9uTW92ZUhhbmRsZXIsIG9uRW5kSGFuZGxlcikgPT4ge1xuICBjb25zdCB3aW4gPSBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBsZXQgcnRsID0gaXNSVEwoZWwpO1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGEgZ2VzdHVyZSBpcyBuZWFyIHRoZSBlZGdlXG4gICAqIG9mIHRoZSBzY3JlZW4uIElmIHRydWUsIHRoZW4gdGhlIHN3aXBlXG4gICAqIHRvIGdvIGJhY2sgZ2VzdHVyZSBzaG91bGQgcHJvY2VlZC5cbiAgICovXG4gIGNvbnN0IGlzQXRFZGdlID0gZGV0YWlsID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydFhcbiAgICB9ID0gZGV0YWlsO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFggPD0gdGhyZXNob2xkO1xuICB9O1xuICBjb25zdCBnZXREZWx0YVggPSBkZXRhaWwgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLmRlbHRhWCA6IGRldGFpbC5kZWx0YVg7XG4gIH07XG4gIGNvbnN0IGdldFZlbG9jaXR5WCA9IGRldGFpbCA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwudmVsb2NpdHlYIDogZGV0YWlsLnZlbG9jaXR5WDtcbiAgfTtcbiAgY29uc3QgY2FuU3RhcnQgPSBkZXRhaWwgPT4ge1xuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyJ3MgbG9jYWxlIGNhbiBjaGFuZ2UgbWlkLXNlc3Npb24sXG4gICAgICogc28gd2UgbmVlZCB0byBjaGVjayB0ZXh0IGRpcmVjdGlvbiBhdFxuICAgICAqIHRoZSBiZWdpbm5pbmcgb2YgZXZlcnkgZ2VzdHVyZS5cbiAgICAgKi9cbiAgICBydGwgPSBpc1JUTChlbCk7XG4gICAgcmV0dXJuIGlzQXRFZGdlKGRldGFpbCkgJiYgY2FuU3RhcnRIYW5kbGVyKCk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZSA9IGRldGFpbCA9PiB7XG4gICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xuICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSBkZXRhaWwgPT4ge1xuICAgIC8vIHRoZSBzd2lwZSBiYWNrIGdlc3R1cmUgaGFzIGVuZGVkXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBnZXRWZWxvY2l0eVgoZGV0YWlsKTtcbiAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZWx0YSA+IHopO1xuICAgIGNvbnN0IG1pc3NpbmcgPSBzaG91bGRDb21wbGV0ZSA/IDEgLSBzdGVwVmFsdWUgOiBzdGVwVmFsdWU7XG4gICAgY29uc3QgbWlzc2luZ0Rpc3RhbmNlID0gbWlzc2luZyAqIHdpZHRoO1xuICAgIGxldCByZWFsRHVyID0gMDtcbiAgICBpZiAobWlzc2luZ0Rpc3RhbmNlID4gNSkge1xuICAgICAgY29uc3QgZHVyID0gbWlzc2luZ0Rpc3RhbmNlIC8gTWF0aC5hYnModmVsb2NpdHkpO1xuICAgICAgcmVhbER1ciA9IE1hdGgubWluKGR1ciwgNTQwKTtcbiAgICB9XG4gICAgb25FbmRIYW5kbGVyKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUgPD0gMCA/IDAuMDEgOiBjbGFtcCgwLCBzdGVwVmFsdWUsIDAuOTk5OSksIHJlYWxEdXIpO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdnb2JhY2stc3dpcGUnLFxuICAgIC8qKlxuICAgICAqIFN3aXBlIHRvIGdvIGJhY2sgc2hvdWxkIGhhdmUgcHJpb3JpdHkgb3ZlciBvdGhlciBob3Jpem9udGFsIHN3aXBlXG4gICAgICogZ2VzdHVyZXMuIFRoZXNlIGdlc3R1cmVzIGhhdmUgYSBwcmlvcml0eSBvZiAxMDAgd2hpY2ggaXMgd2h5IDEwMSB3YXMgY2hvc2VuIGhlcmUuXG4gICAgICovXG4gICAgZ2VzdHVyZVByaW9yaXR5OiAxMDEsXG4gICAgdGhyZXNob2xkOiAxMCxcbiAgICBjYW5TdGFydCxcbiAgICBvblN0YXJ0OiBvblN0YXJ0SGFuZGxlcixcbiAgICBvbk1vdmUsXG4gICAgb25FbmRcbiAgfSk7XG59O1xuZXhwb3J0IHsgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLElBQU0seUJBQXlCLENBQUMsSUFBSSxpQkFBaUIsZ0JBQWdCLGVBQWUsaUJBQWlCO0FBQ25HLFFBQU0sTUFBTSxHQUFHLGNBQWM7QUFDN0IsTUFBSSxNQUFNLE1BQU0sRUFBRTtBQU1sQixRQUFNLFdBQVcsWUFBVTtBQUN6QixVQUFNLFlBQVk7QUFDbEIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFJLEtBQUs7QUFDUCxhQUFPLFVBQVUsSUFBSSxhQUFhO0FBQUEsSUFDcEM7QUFDQSxXQUFPLFVBQVU7QUFBQSxFQUNuQjtBQUNBLFFBQU0sWUFBWSxZQUFVO0FBQzFCLFdBQU8sTUFBTSxDQUFDLE9BQU8sU0FBUyxPQUFPO0FBQUEsRUFDdkM7QUFDQSxRQUFNLGVBQWUsWUFBVTtBQUM3QixXQUFPLE1BQU0sQ0FBQyxPQUFPLFlBQVksT0FBTztBQUFBLEVBQzFDO0FBQ0EsUUFBTSxXQUFXLFlBQVU7QUFNekIsVUFBTSxNQUFNLEVBQUU7QUFDZCxXQUFPLFNBQVMsTUFBTSxLQUFLLGdCQUFnQjtBQUFBLEVBQzdDO0FBQ0EsUUFBTSxTQUFTLFlBQVU7QUFFdkIsVUFBTSxRQUFRLFVBQVUsTUFBTTtBQUM5QixVQUFNLFlBQVksUUFBUSxJQUFJO0FBQzlCLGtCQUFjLFNBQVM7QUFBQSxFQUN6QjtBQUNBLFFBQU0sUUFBUSxZQUFVO0FBRXRCLFVBQU0sUUFBUSxVQUFVLE1BQU07QUFDOUIsVUFBTSxRQUFRLElBQUk7QUFDbEIsVUFBTSxZQUFZLFFBQVE7QUFDMUIsVUFBTSxXQUFXLGFBQWEsTUFBTTtBQUNwQyxVQUFNLElBQUksUUFBUTtBQUNsQixVQUFNLGlCQUFpQixZQUFZLE1BQU0sV0FBVyxPQUFPLFFBQVE7QUFDbkUsVUFBTSxVQUFVLGlCQUFpQixJQUFJLFlBQVk7QUFDakQsVUFBTSxrQkFBa0IsVUFBVTtBQUNsQyxRQUFJLFVBQVU7QUFDZCxRQUFJLGtCQUFrQixHQUFHO0FBQ3ZCLFlBQU0sTUFBTSxrQkFBa0IsS0FBSyxJQUFJLFFBQVE7QUFDL0MsZ0JBQVUsS0FBSyxJQUFJLEtBQUssR0FBRztBQUFBLElBQzdCO0FBQ0EsaUJBQWEsZ0JBQWdCLGFBQWEsSUFBSSxPQUFPLE1BQU0sR0FBRyxXQUFXLE1BQU0sR0FBRyxPQUFPO0FBQUEsRUFDM0Y7QUFDQSxTQUFPLGNBQWM7QUFBQSxJQUNuQjtBQUFBLElBQ0EsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLYixpQkFBaUI7QUFBQSxJQUNqQixXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
