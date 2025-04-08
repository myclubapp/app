import {
  createAnimation,
  getIonPageElement
} from "./chunk-HIKKWWV7.js";

// node_modules/@ionic/core/components/md.transition.js
var mdTransitionAnimation = (_, opts) => {
  var _a, _b, _c;
  const OFF_BOTTOM = "40px";
  const CENTER = "0px";
  const backDirection = opts.direction === "back";
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = getIonPageElement(enteringEl);
  const enteringToolbarEle = ionPageElement.querySelector("ion-toolbar");
  const rootTransition = createAnimation();
  rootTransition.addElement(ionPageElement).fill("both").beforeRemoveClass("ion-page-invisible");
  if (backDirection) {
    rootTransition.duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
  } else {
    rootTransition.duration(((_b = opts.duration) !== null && _b !== void 0 ? _b : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`).fromTo("opacity", 0.01, 1);
  }
  if (enteringToolbarEle) {
    const enteringToolBar = createAnimation();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.addAnimation(enteringToolBar);
  }
  if (leavingEl && backDirection) {
    rootTransition.duration(((_c = opts.duration) !== null && _c !== void 0 ? _c : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const leavingPage = createAnimation();
    leavingPage.addElement(getIonPageElement(leavingEl)).onFinish((currentStep) => {
      if (currentStep === 1 && leavingPage.elements.length > 0) {
        leavingPage.elements[0].style.setProperty("display", "none");
      }
    }).fromTo("transform", `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`).fromTo("opacity", 1, 0);
    rootTransition.addAnimation(leavingPage);
  }
  return rootTransition;
};

export {
  mdTransitionAnimation
};
/*! Bundled license information:

@ionic/core/components/md.transition.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL21kLnRyYW5zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24uanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJb25QYWdlRWxlbWVudCB9IGZyb20gJy4vaW5kZXgyLmpzJztcbmNvbnN0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiA9IChfLCBvcHRzKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICBjb25zdCBPRkZfQk9UVE9NID0gJzQwcHgnO1xuICBjb25zdCBDRU5URVIgPSAnMHB4JztcbiAgY29uc3QgYmFja0RpcmVjdGlvbiA9IG9wdHMuZGlyZWN0aW9uID09PSAnYmFjayc7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5maWxsKCdib3RoJykuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICAvLyBhbmltYXRlIHRoZSBjb21wb25lbnQgaXRzZWxmXG4gIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24oKChfYSA9IG9wdHMuZHVyYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDApIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICB9IGVsc2Uge1xuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKCgoX2IgPSBvcHRzLmR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwKSB8fCAyODApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJykuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke09GRl9CT1RUT019KWAsIGB0cmFuc2xhdGVZKCR7Q0VOVEVSfSlgKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgfVxuICAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7XG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgZW50ZXJpbmdUb29sQmFyLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sYmFyRWxlKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGRBbmltYXRpb24oZW50ZXJpbmdUb29sQmFyKTtcbiAgfVxuICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcbiAgaWYgKGxlYXZpbmdFbCAmJiBiYWNrRGlyZWN0aW9uKSB7XG4gICAgLy8gbGVhdmluZyBjb250ZW50XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24oKChfYyA9IG9wdHMuZHVyYXRpb24pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDApIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5vbkZpbmlzaChjdXJyZW50U3RlcCA9PiB7XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEgJiYgbGVhdmluZ1BhZ2UuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZWF2aW5nUGFnZS5lbGVtZW50c1swXS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke0NFTlRFUn0pYCwgYHRyYW5zbGF0ZVkoJHtPRkZfQk9UVE9NfSlgKS5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGRBbmltYXRpb24obGVhdmluZ1BhZ2UpO1xuICB9XG4gIHJldHVybiByb290VHJhbnNpdGlvbjtcbn07XG5leHBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLElBQU0sd0JBQXdCLENBQUMsR0FBRyxTQUFTO0FBQ3pDLE1BQUksSUFBSSxJQUFJO0FBQ1osUUFBTSxhQUFhO0FBQ25CLFFBQU0sU0FBUztBQUNmLFFBQU0sZ0JBQWdCLEtBQUssY0FBYztBQUN6QyxRQUFNLGFBQWEsS0FBSztBQUN4QixRQUFNLFlBQVksS0FBSztBQUN2QixRQUFNLGlCQUFpQixrQkFBa0IsVUFBVTtBQUNuRCxRQUFNLHFCQUFxQixlQUFlLGNBQWMsYUFBYTtBQUNyRSxRQUFNLGlCQUFpQixnQkFBZ0I7QUFDdkMsaUJBQWUsV0FBVyxjQUFjLEVBQUUsS0FBSyxNQUFNLEVBQUUsa0JBQWtCLG9CQUFvQjtBQUU3RixNQUFJLGVBQWU7QUFDakIsbUJBQWUsV0FBVyxLQUFLLEtBQUssY0FBYyxRQUFRLE9BQU8sU0FBUyxLQUFLLE1BQU0sR0FBRyxFQUFFLE9BQU8sa0NBQWtDO0FBQUEsRUFDckksT0FBTztBQUNMLG1CQUFlLFdBQVcsS0FBSyxLQUFLLGNBQWMsUUFBUSxPQUFPLFNBQVMsS0FBSyxNQUFNLEdBQUcsRUFBRSxPQUFPLGdDQUFnQyxFQUFFLE9BQU8sYUFBYSxjQUFjLFVBQVUsS0FBSyxjQUFjLE1BQU0sR0FBRyxFQUFFLE9BQU8sV0FBVyxNQUFNLENBQUM7QUFBQSxFQUN4TztBQUVBLE1BQUksb0JBQW9CO0FBQ3RCLFVBQU0sa0JBQWtCLGdCQUFnQjtBQUN4QyxvQkFBZ0IsV0FBVyxrQkFBa0I7QUFDN0MsbUJBQWUsYUFBYSxlQUFlO0FBQUEsRUFDN0M7QUFFQSxNQUFJLGFBQWEsZUFBZTtBQUU5QixtQkFBZSxXQUFXLEtBQUssS0FBSyxjQUFjLFFBQVEsT0FBTyxTQUFTLEtBQUssTUFBTSxHQUFHLEVBQUUsT0FBTyxrQ0FBa0M7QUFDbkksVUFBTSxjQUFjLGdCQUFnQjtBQUNwQyxnQkFBWSxXQUFXLGtCQUFrQixTQUFTLENBQUMsRUFBRSxTQUFTLGlCQUFlO0FBQzNFLFVBQUksZ0JBQWdCLEtBQUssWUFBWSxTQUFTLFNBQVMsR0FBRztBQUN4RCxvQkFBWSxTQUFTLENBQUMsRUFBRSxNQUFNLFlBQVksV0FBVyxNQUFNO0FBQUEsTUFDN0Q7QUFBQSxJQUNGLENBQUMsRUFBRSxPQUFPLGFBQWEsY0FBYyxNQUFNLEtBQUssY0FBYyxVQUFVLEdBQUcsRUFBRSxPQUFPLFdBQVcsR0FBRyxDQUFDO0FBQ25HLG1CQUFlLGFBQWEsV0FBVztBQUFBLEVBQ3pDO0FBQ0EsU0FBTztBQUNUOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
