import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/theme-01f3f29c.js
var hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
var createColorClasses = (color, cssClassMap) => {
  return typeof color === "string" && color.length > 0 ? Object.assign({
    "ion-color": true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
var getClassList = (classes) => {
  if (classes !== void 0) {
    const array = Array.isArray(classes) ? classes : classes.split(" ");
    return array.filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
  }
  return [];
};
var getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach((c) => map[c] = true);
  return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = (url, ev, direction, animation) => __async(void 0, null, function* () {
  if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
    const router = document.querySelector("ion-router");
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
});

export {
  hostContext,
  createColorClasses,
  getClassMap,
  openURL
};
/*! Bundled license information:

@ionic/core/dist/esm/theme-01f3f29c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0wMWYzZjI5Yy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XG4gIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yLCBjc3NDbGFzc01hcCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwID8gT2JqZWN0LmFzc2lnbih7XG4gICAgJ2lvbi1jb2xvcic6IHRydWUsXG4gICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxuICB9LCBjc3NDbGFzc01hcCkgOiBjc3NDbGFzc01hcDtcbn07XG5jb25zdCBnZXRDbGFzc0xpc3QgPSBjbGFzc2VzID0+IHtcbiAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihjID0+IGMgIT0gbnVsbCkubWFwKGMgPT4gYy50cmltKCkpLmZpbHRlcihjID0+IGMgIT09ICcnKTtcbiAgfVxuICByZXR1cm4gW107XG59O1xuY29uc3QgZ2V0Q2xhc3NNYXAgPSBjbGFzc2VzID0+IHtcbiAgY29uc3QgbWFwID0ge307XG4gIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XG4gIHJldHVybiBtYXA7XG59O1xuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbiwgYW5pbWF0aW9uKSA9PiB7XG4gIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICBpZiAocm91dGVyKSB7XG4gICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uLCBhbmltYXRpb24pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxJQUFNLGNBQWMsQ0FBQyxVQUFVLE9BQU87QUFDcEMsU0FBTyxHQUFHLFFBQVEsUUFBUSxNQUFNO0FBQ2xDO0FBSUEsSUFBTSxxQkFBcUIsQ0FBQyxPQUFPLGdCQUFnQjtBQUNqRCxTQUFPLE9BQU8sVUFBVSxZQUFZLE1BQU0sU0FBUyxJQUFJLE9BQU8sT0FBTztBQUFBLElBQ25FLGFBQWE7QUFBQSxJQUNiLENBQUMsYUFBYSxLQUFLLEVBQUUsR0FBRztBQUFBLEVBQzFCLEdBQUcsV0FBVyxJQUFJO0FBQ3BCO0FBQ0EsSUFBTSxlQUFlLGFBQVc7QUFDOUIsTUFBSSxZQUFZLFFBQVc7QUFDekIsVUFBTSxRQUFRLE1BQU0sUUFBUSxPQUFPLElBQUksVUFBVSxRQUFRLE1BQU0sR0FBRztBQUNsRSxXQUFPLE1BQU0sT0FBTyxPQUFLLEtBQUssSUFBSSxFQUFFLElBQUksT0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sT0FBSyxNQUFNLEVBQUU7QUFBQSxFQUM3RTtBQUNBLFNBQU8sQ0FBQztBQUNWO0FBQ0EsSUFBTSxjQUFjLGFBQVc7QUFDN0IsUUFBTSxNQUFNLENBQUM7QUFDYixlQUFhLE9BQU8sRUFBRSxRQUFRLE9BQUssSUFBSSxDQUFDLElBQUksSUFBSTtBQUNoRCxTQUFPO0FBQ1Q7QUFDQSxJQUFNLFNBQVM7QUFDZixJQUFNLFVBQVUsQ0FBTyxLQUFLLElBQUksV0FBVyxjQUFjO0FBQ3ZELE1BQUksT0FBTyxRQUFRLElBQUksQ0FBQyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEtBQUssR0FBRyxHQUFHO0FBQ3RELFVBQU0sU0FBUyxTQUFTLGNBQWMsWUFBWTtBQUNsRCxRQUFJLFFBQVE7QUFDVixVQUFJLE1BQU0sTUFBTTtBQUNkLFdBQUcsZUFBZTtBQUFBLE1BQ3BCO0FBQ0EsYUFBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFNBQVM7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
