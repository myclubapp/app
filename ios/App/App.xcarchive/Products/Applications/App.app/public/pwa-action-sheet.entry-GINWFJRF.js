import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-HFNYFWXL.js";
import "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js
var actionSheetCss = ':host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0);-webkit-transition:400ms background-color cubic-bezier(.36,.66,.04,1);transition:400ms background-color cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0, 0, 0, 0.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1), 400ms -webkit-transform cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0%);transform:translateY(0%)}@media only screen and (max-width: 568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:rgb(38, 38, 38);font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0px}.action-sheet-button:hover{background-color:#F6F6F6}';
var PWAActionSheet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSelection = createEvent(this, "onSelection", 7);
    this.header = void 0;
    this.cancelable = true;
    this.options = [];
    this.open = false;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      this.open = true;
    });
  }
  dismiss() {
    if (this.cancelable) {
      this.close();
    }
  }
  close() {
    this.open = false;
    setTimeout(() => {
      this.el.parentNode.removeChild(this.el);
    }, 500);
  }
  handleOptionClick(e, i) {
    e.stopPropagation();
    this.onSelection.emit(i);
    this.close();
  }
  render() {
    return h("div", {
      class: `wrapper${this.open ? " open" : ""}`,
      onClick: () => this.dismiss()
    }, h("div", {
      class: "content"
    }, h("div", {
      class: "title"
    }, this.header), this.options.map((option, i) => h("div", {
      class: "action-sheet-option",
      onClick: (e) => this.handleOptionClick(e, i)
    }, h("div", {
      class: "action-sheet-button"
    }, option.title)))));
  }
  get el() {
    return getElement(this);
  }
};
PWAActionSheet.style = actionSheetCss;
export {
  PWAActionSheet as pwa_action_sheet
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3B3YS1hY3Rpb24tc2hlZXQuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTFjNWM0N2I0LmpzJztcbmNvbnN0IGFjdGlvblNoZWV0Q3NzID0gXCI6aG9zdHt6LWluZGV4OjEwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWZ9LndyYXBwZXJ7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTstd2Via2l0LXRyYW5zaXRpb246NDAwbXMgYmFja2dyb3VuZC1jb2xvciBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7dHJhbnNpdGlvbjo0MDBtcyBiYWNrZ3JvdW5kLWNvbG9yIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKX0ud3JhcHBlci5vcGVue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjMyKX0udGl0bGV7Y29sb3I6Izk5OTtoZWlnaHQ6MjNweDtsaW5lLWhlaWdodDoyM3B4O3BhZGRpbmctYm90dG9tOjE3cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjIwcHh9LmNvbnRlbnR7d2lkdGg6NTY4cHg7LW1zLWZsZXgtaXRlbS1hbGlnbjplbmQ7YWxpZ24tc2VsZjpmbGV4LWVuZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7LXdlYmtpdC10cmFuc2l0aW9uOjQwMG1zIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOjQwMG1zIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOjQwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7dHJhbnNpdGlvbjo0MDBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpLCA0MDBtcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ud3JhcHBlci5vcGVuIC5jb250ZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDAlKX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KXsuY29udGVudHt3aWR0aDoxMDAlfX0uYWN0aW9uLXNoZWV0LW9wdGlvbntjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6NTJweDtsaW5lLWhlaWdodDo1MnB4fS5hY3Rpb24tc2hlZXQtYnV0dG9ue2NvbG9yOnJnYigzOCwgMzgsIDM4KTtmb250LXNpemU6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MHB4fS5hY3Rpb24tc2hlZXQtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I0Y2RjZGNn1cIjtcbmNvbnN0IFBXQUFjdGlvblNoZWV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLm9uU2VsZWN0aW9uID0gY3JlYXRlRXZlbnQodGhpcywgXCJvblNlbGVjdGlvblwiLCA3KTtcbiAgICB0aGlzLmhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbmNlbGFibGUgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgZGlzbWlzcygpIHtcbiAgICBpZiAodGhpcy5jYW5jZWxhYmxlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIH0sIDUwMCk7XG4gIH1cbiAgaGFuZGxlT3B0aW9uQ2xpY2soZSwgaSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KGkpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IGB3cmFwcGVyJHt0aGlzLm9wZW4gPyAnIG9wZW4nIDogJyd9YCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZGlzbWlzcygpXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjb250ZW50XCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRpdGxlXCJcbiAgICB9LCB0aGlzLmhlYWRlciksIHRoaXMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhY3Rpb24tc2hlZXQtb3B0aW9uXCIsXG4gICAgICBvbkNsaWNrOiBlID0+IHRoaXMuaGFuZGxlT3B0aW9uQ2xpY2soZSwgaSlcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFjdGlvbi1zaGVldC1idXR0b25cIlxuICAgIH0sIG9wdGlvbi50aXRsZSkpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcblBXQUFjdGlvblNoZWV0LnN0eWxlID0gYWN0aW9uU2hlZXRDc3M7XG5leHBvcnQgeyBQV0FBY3Rpb25TaGVldCBhcyBwd2FfYWN0aW9uX3NoZWV0IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxJQUFNLGlCQUFpQjtBQUN2QixJQUFNLGlCQUFpQixNQUFNO0FBQUEsRUFDM0IsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxjQUFjLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsU0FBSyxTQUFTO0FBQ2QsU0FBSyxhQUFhO0FBQ2xCLFNBQUssVUFBVSxDQUFDO0FBQ2hCLFNBQUssT0FBTztBQUFBLEVBQ2Q7QUFBQSxFQUNBLG1CQUFtQjtBQUNqQiwwQkFBc0IsTUFBTTtBQUMxQixXQUFLLE9BQU87QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxVQUFVO0FBQ1IsUUFBSSxLQUFLLFlBQVk7QUFDbkIsV0FBSyxNQUFNO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFDTixTQUFLLE9BQU87QUFDWixlQUFXLE1BQU07QUFDZixXQUFLLEdBQUcsV0FBVyxZQUFZLEtBQUssRUFBRTtBQUFBLElBQ3hDLEdBQUcsR0FBRztBQUFBLEVBQ1I7QUFBQSxFQUNBLGtCQUFrQixHQUFHLEdBQUc7QUFDdEIsTUFBRSxnQkFBZ0I7QUFDbEIsU0FBSyxZQUFZLEtBQUssQ0FBQztBQUN2QixTQUFLLE1BQU07QUFBQSxFQUNiO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE9BQU87QUFBQSxNQUNkLE9BQU8sVUFBVSxLQUFLLE9BQU8sVUFBVSxFQUFFO0FBQUEsTUFDekMsU0FBUyxNQUFNLEtBQUssUUFBUTtBQUFBLElBQzlCLEdBQUcsRUFBRSxPQUFPO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVCxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLElBQ1QsR0FBRyxLQUFLLE1BQU0sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsTUFBTSxFQUFFLE9BQU87QUFBQSxNQUN4RCxPQUFPO0FBQUEsTUFDUCxTQUFTLE9BQUssS0FBSyxrQkFBa0IsR0FBRyxDQUFDO0FBQUEsSUFDM0MsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNULEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUNGO0FBQ0EsZUFBZSxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
