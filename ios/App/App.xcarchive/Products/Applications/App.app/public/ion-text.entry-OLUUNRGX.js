import {
  createColorClasses
} from "./chunk-QQMTNXUN.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-T7BCX42A.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-text.entry.js
var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var IonTextStyle0 = textCss;
var Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "0c2546ea3f24b0a6bfd606199441d0a4edfa4ca1",
      class: createColorClasses(this.color, {
        [mode]: true
      })
    }, h("slot", {
      key: "b7623ccb06f9461090a1f33e9f85886c7a4d5eff"
    }));
  }
};
Text.style = IonTextStyle0;
export {
  Text as ion_text
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-text.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGV4dC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBlIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0wMWYzZjI5Yy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5jb25zdCB0ZXh0Q3NzID0gXCI6aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9XCI7XG5jb25zdCBJb25UZXh0U3R5bGUwID0gdGV4dENzcztcbmNvbnN0IFRleHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzBjMjU0NmVhM2YyNGIwYTZiZmQ2MDYxOTk0NDFkMGE0ZWRmYTRjYTEnLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdiNzYyM2NjYjA2Zjk0NjEwOTBhMWYzM2U5Zjg1ODg2YzdhNGQ1ZWZmJ1xuICAgIH0pKTtcbiAgfVxufTtcblRleHQuc3R5bGUgPSBJb25UZXh0U3R5bGUwO1xuZXhwb3J0IHsgVGV4dCBhcyBpb25fdGV4dCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLFVBQVU7QUFDaEIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxPQUFPLE1BQU07QUFBQSxFQUNqQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsT0FBTyxtQkFBbUIsS0FBSyxPQUFPO0FBQUEsUUFDcEMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxNQUNWLENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUM7QUFBQSxFQUNKO0FBQ0Y7QUFDQSxLQUFLLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
