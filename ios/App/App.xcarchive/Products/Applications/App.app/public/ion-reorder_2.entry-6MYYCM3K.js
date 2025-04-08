import {
  findClosestIonContent,
  getScrollElement
} from "./chunk-7QVPRCLC.js";
import {
  reorderThreeOutline,
  reorderTwoSharp
} from "./chunk-Y2OY2WAF.js";
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-3XAIP4YB.js";
import "./chunk-UPH3BB7G.js";
import "./chunk-5HIO5JVM.js";
import {
  raf
} from "./chunk-RRWPYKYY.js";
import "./chunk-JYOJD2RE.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
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

// node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js
var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}";
var IonReorderIosStyle0 = reorderIosCss;
var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}";
var IonReorderMdStyle0 = reorderMdCss;
var Reorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest("ion-reorder-group");
    ev.preventDefault();
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === "ios" ? reorderThreeOutline : reorderTwoSharp;
    return h(Host, {
      key: "17adf3165f4e09283d5d6434d7cd47bd23519048",
      class: mode
    }, h("slot", {
      key: "d00d1cd97c689fc5c7b7175a2051cf697fe22871"
    }, h("ion-icon", {
      key: "eec219aebde6083de98358be3e75965c5a5dc3d0",
      icon: reorderIcon,
      lazy: false,
      class: "reorder-icon",
      part: "icon",
      "aria-hidden": "true"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Reorder.style = {
  ios: IonReorderIosStyle0,
  md: IonReorderMdStyle0
};
var reorderGroupCss = ".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
var IonReorderGroupStyle0 = reorderGroupCss;
var ReorderGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionItemReorder = createEvent(this, "ionItemReorder", 7);
    this.lastToIndex = -1;
    this.cachedHeights = [];
    this.scrollElTop = 0;
    this.scrollElBottom = 0;
    this.scrollElInitial = 0;
    this.containerTop = 0;
    this.containerBottom = 0;
    this.state = 0;
    this.disabled = true;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const contentEl = findClosestIonContent(this.el);
      if (contentEl) {
        this.scrollEl = yield getScrollElement(contentEl);
      }
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el: this.el,
        gestureName: "reorder",
        gesturePriority: 110,
        threshold: 0,
        direction: "y",
        passive: false,
        canStart: (detail) => this.canStart(detail),
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: () => this.onEnd()
      });
      this.disabledChanged();
    });
  }
  disconnectedCallback() {
    this.onEnd();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /**
   * Completes the reorder operation. Must be called by the `ionItemReorder` event.
   *
   * If a list of items is passed, the list will be reordered and returned in the
   * proper order.
   *
   * If no parameters are passed or if `true` is passed in, the reorder will complete
   * and the item will remain in the position it was dragged to. If `false` is passed,
   * the reorder will complete and the item will bounce back to its original position.
   *
   * @param listOrReorder A list of items to be sorted and returned in the new order or a
   * boolean of whether or not the reorder should reposition the item.
   */
  complete(listOrReorder) {
    return Promise.resolve(this.completeReorder(listOrReorder));
  }
  canStart(ev) {
    if (this.selectedItemEl || this.state !== 0) {
      return false;
    }
    const target = ev.event.target;
    const reorderEl = target.closest("ion-reorder");
    if (!reorderEl) {
      return false;
    }
    const item = findReorderItem(reorderEl, this.el);
    if (!item) {
      return false;
    }
    ev.data = item;
    return true;
  }
  onStart(ev) {
    ev.event.preventDefault();
    const item = this.selectedItemEl = ev.data;
    const heights = this.cachedHeights;
    heights.length = 0;
    const el = this.el;
    const children = el.children;
    if (!children || children.length === 0) {
      return;
    }
    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      sum += child.offsetHeight;
      heights.push(sum);
      child.$ionIndex = i;
    }
    const box = el.getBoundingClientRect();
    this.containerTop = box.top;
    this.containerBottom = box.bottom;
    if (this.scrollEl) {
      const scrollBox = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop;
      this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
      this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
    } else {
      this.scrollElInitial = 0;
      this.scrollElTop = 0;
      this.scrollElBottom = 0;
    }
    this.lastToIndex = indexForItem(item);
    this.selectedItemHeight = item.offsetHeight;
    this.state = 1;
    item.classList.add(ITEM_REORDER_SELECTED);
    hapticSelectionStart();
  }
  onMove(ev) {
    const selectedItem = this.selectedItemEl;
    if (!selectedItem) {
      return;
    }
    const scroll = this.autoscroll(ev.currentY);
    const top = this.containerTop - scroll;
    const bottom = this.containerBottom - scroll;
    const currentY = Math.max(top, Math.min(ev.currentY, bottom));
    const deltaY = scroll + currentY - ev.startY;
    const normalizedY = currentY - top;
    const toIndex = this.itemIndexForTop(normalizedY);
    if (toIndex !== this.lastToIndex) {
      const fromIndex = indexForItem(selectedItem);
      this.lastToIndex = toIndex;
      hapticSelectionChanged();
      this.reorderMove(fromIndex, toIndex);
    }
    selectedItem.style.transform = `translateY(${deltaY}px)`;
  }
  onEnd() {
    const selectedItemEl = this.selectedItemEl;
    this.state = 2;
    if (!selectedItemEl) {
      this.state = 0;
      return;
    }
    const toIndex = this.lastToIndex;
    const fromIndex = indexForItem(selectedItemEl);
    if (toIndex === fromIndex) {
      this.completeReorder();
    } else {
      this.ionItemReorder.emit({
        from: fromIndex,
        to: toIndex,
        complete: this.completeReorder.bind(this)
      });
    }
    hapticSelectionEnd();
  }
  completeReorder(listOrReorder) {
    const selectedItemEl = this.selectedItemEl;
    if (selectedItemEl && this.state === 2) {
      const children = this.el.children;
      const len = children.length;
      const toIndex = this.lastToIndex;
      const fromIndex = indexForItem(selectedItemEl);
      raf(() => {
        if (toIndex !== fromIndex && (listOrReorder === void 0 || listOrReorder === true)) {
          const ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
          this.el.insertBefore(selectedItemEl, ref);
        }
        for (let i = 0; i < len; i++) {
          children[i].style["transform"] = "";
        }
      });
      if (Array.isArray(listOrReorder)) {
        listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
      }
      selectedItemEl.style.transition = "";
      selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
      this.selectedItemEl = void 0;
      this.state = 0;
    }
    return listOrReorder;
  }
  itemIndexForTop(deltaY) {
    const heights = this.cachedHeights;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] > deltaY) {
        return i;
      }
    }
    return heights.length - 1;
  }
  /********* DOM WRITE ********* */
  reorderMove(fromIndex, toIndex) {
    const itemHeight = this.selectedItemHeight;
    const children = this.el.children;
    for (let i = 0; i < children.length; i++) {
      const style = children[i].style;
      let value = "";
      if (i > fromIndex && i <= toIndex) {
        value = `translateY(${-itemHeight}px)`;
      } else if (i < fromIndex && i >= toIndex) {
        value = `translateY(${itemHeight}px)`;
      }
      style["transform"] = value;
    }
  }
  autoscroll(posY) {
    if (!this.scrollEl) {
      return 0;
    }
    let amount = 0;
    if (posY < this.scrollElTop) {
      amount = -SCROLL_JUMP;
    } else if (posY > this.scrollElBottom) {
      amount = SCROLL_JUMP;
    }
    if (amount !== 0) {
      this.scrollEl.scrollBy(0, amount);
    }
    return this.scrollEl.scrollTop - this.scrollElInitial;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "6ca009dd65302a914d459aec638e62977440db20",
      class: {
        [mode]: true,
        "reorder-enabled": !this.disabled,
        "reorder-list-active": this.state !== 0
        /* ReorderGroupState.Idle */
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
var indexForItem = (element) => {
  return element["$ionIndex"];
};
var findReorderItem = (node, container) => {
  let parent;
  while (node) {
    parent = node.parentElement;
    if (parent === container) {
      return node;
    }
    node = parent;
  }
  return void 0;
};
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = "reorder-selected";
var reorderArray = (array, from, to) => {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};
ReorderGroup.style = IonReorderGroupStyle0;
export {
  Reorder as ion_reorder,
  ReorderGroup as ion_reorder_group
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-reorder_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmVvcmRlcl8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGUgYXMgSG9zdCwgZiBhcyBnZXRFbGVtZW50LCBjIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9pbmRleC01MjdiOWUzNC5qcyc7XG5pbXBvcnQgeyBqIGFzIHJlb3JkZXJUaHJlZU91dGxpbmUsIGsgYXMgcmVvcmRlclR3b1NoYXJwIH0gZnJvbSAnLi9pbmRleC1lMmNmMmNlYi5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1jYTg2Y2YzMi5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgZyBhcyBnZXRTY3JvbGxFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1lOTE5ZTM1My5qcyc7XG5pbXBvcnQgeyByIGFzIHJhZiB9IGZyb20gJy4vaGVscGVycy03OGVmZWVjMy5qcyc7XG5pbXBvcnQgeyBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGggYXMgaGFwdGljU2VsZWN0aW9uRW5kIH0gZnJvbSAnLi9oYXB0aWMtYWMxNjRlNGMuanMnO1xuaW1wb3J0ICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmltcG9ydCAnLi9jYXBhY2l0b3ItNTkzOTVjYmQuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmNvbnN0IHJlb3JkZXJJb3NDc3MgPSBcIjpob3N0KFtzbG90XSl7ZGlzcGxheTpub25lO2xpbmUtaGVpZ2h0OjA7ei1pbmRleDoxMDB9LnJlb3JkZXItaWNvbntkaXNwbGF5OmJsb2NrfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOmR5bmFtaWMtZm9udCgxNnB4KX0ucmVvcmRlci1pY29ue2ZvbnQtc2l6ZToyLjEyNXJlbTtvcGFjaXR5OjAuNH1cIjtcbmNvbnN0IElvblJlb3JkZXJJb3NTdHlsZTAgPSByZW9yZGVySW9zQ3NzO1xuY29uc3QgcmVvcmRlck1kQ3NzID0gXCI6aG9zdChbc2xvdF0pe2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDowO3otaW5kZXg6MTAwfS5yZW9yZGVyLWljb257ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZTpkeW5hbWljLWZvbnQoMTZweCl9LnJlb3JkZXItaWNvbntmb250LXNpemU6MS45Mzc1cmVtO29wYWNpdHk6MC4zfVwiO1xuY29uc3QgSW9uUmVvcmRlck1kU3R5bGUwID0gcmVvcmRlck1kQ3NzO1xuY29uc3QgUmVvcmRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgb25DbGljayhldikge1xuICAgIGNvbnN0IHJlb3JkZXJHcm91cCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXJlb3JkZXItZ3JvdXAnKTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIE9ubHkgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBpZiB0aGUgcmVvcmRlciBpcyBpbnNpZGUgb2YgYW4gZW5hYmxlZFxuICAgIC8vIHJlb3JkZXIgZ3JvdXAuIFRoaXMgYWxsb3dzIGludGVyYWN0aW9uIHdpdGggY2xpY2thYmxlIGNoaWxkcmVuIGNvbXBvbmVudHMuXG4gICAgaWYgKCFyZW9yZGVyR3JvdXAgfHwgIXJlb3JkZXJHcm91cC5kaXNhYmxlZCkge1xuICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCByZW9yZGVySWNvbiA9IG1vZGUgPT09ICdpb3MnID8gcmVvcmRlclRocmVlT3V0bGluZSA6IHJlb3JkZXJUd29TaGFycDtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcxN2FkZjMxNjVmNGUwOTI4M2Q1ZDY0MzRkN2NkNDdiZDIzNTE5MDQ4JyxcbiAgICAgIGNsYXNzOiBtb2RlXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZDAwZDFjZDk3YzY4OWZjNWM3YjcxNzVhMjA1MWNmNjk3ZmUyMjg3MSdcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnZWVjMjE5YWViZGU2MDgzZGU5ODM1OGJlM2U3NTk2NWM1YTVkYzNkMCcsXG4gICAgICBpY29uOiByZW9yZGVySWNvbixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgY2xhc3M6IFwicmVvcmRlci1pY29uXCIsXG4gICAgICBwYXJ0OiBcImljb25cIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcblJlb3JkZXIuc3R5bGUgPSB7XG4gIGlvczogSW9uUmVvcmRlcklvc1N0eWxlMCxcbiAgbWQ6IElvblJlb3JkZXJNZFN0eWxlMFxufTtcbmNvbnN0IHJlb3JkZXJHcm91cENzcyA9IFwiLnJlb3JkZXItbGlzdC1hY3RpdmU+KntkaXNwbGF5OmJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAzMDBtczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDMwMG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDMwMG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDMwMG1zLCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnJlb3JkZXItZW5hYmxlZHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnJlb3JkZXItZW5hYmxlZCBpb24tcmVvcmRlcntkaXNwbGF5OmJsb2NrO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7cG9pbnRlci1ldmVudHM6YWxsOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZX0ucmVvcmRlci1zZWxlY3RlZCwucmVvcmRlci1zZWxlY3RlZCBpb24tcmVvcmRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJlb3JkZXItc2VsZWN0ZWR7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO29wYWNpdHk6MC44O3otaW5kZXg6MTAwfS5yZW9yZGVyLXZpc2libGUgaW9uLXJlb3JkZXIgLnJlb3JkZXItaWNvbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApfVwiO1xuY29uc3QgSW9uUmVvcmRlckdyb3VwU3R5bGUwID0gcmVvcmRlckdyb3VwQ3NzO1xuY29uc3QgUmVvcmRlckdyb3VwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JdGVtUmVvcmRlclwiLCA3KTtcbiAgICB0aGlzLmxhc3RUb0luZGV4ID0gLTE7XG4gICAgdGhpcy5jYWNoZWRIZWlnaHRzID0gW107XG4gICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IDA7XG4gICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSAwO1xuICAgIHRoaXMuY29udGFpbmVyVG9wID0gMDtcbiAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLztcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSghdGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudCh0aGlzLmVsKTtcbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgIH1cbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTM5NzgyNjQyLmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICBnZXN0dXJlTmFtZTogJ3Jlb3JkZXInLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMTAsXG4gICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FuU3RhcnQ6IGRldGFpbCA9PiB0aGlzLmNhblN0YXJ0KGRldGFpbCksXG4gICAgICBvblN0YXJ0OiBldiA9PiB0aGlzLm9uU3RhcnQoZXYpLFxuICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICBvbkVuZDogKCkgPT4gdGhpcy5vbkVuZCgpXG4gICAgfSk7XG4gICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm9uRW5kKCk7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbXBsZXRlcyB0aGUgcmVvcmRlciBvcGVyYXRpb24uIE11c3QgYmUgY2FsbGVkIGJ5IHRoZSBgaW9uSXRlbVJlb3JkZXJgIGV2ZW50LlxuICAgKlxuICAgKiBJZiBhIGxpc3Qgb2YgaXRlbXMgaXMgcGFzc2VkLCB0aGUgbGlzdCB3aWxsIGJlIHJlb3JkZXJlZCBhbmQgcmV0dXJuZWQgaW4gdGhlXG4gICAqIHByb3BlciBvcmRlci5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkIG9yIGlmIGB0cnVlYCBpcyBwYXNzZWQgaW4sIHRoZSByZW9yZGVyIHdpbGwgY29tcGxldGVcbiAgICogYW5kIHRoZSBpdGVtIHdpbGwgcmVtYWluIGluIHRoZSBwb3NpdGlvbiBpdCB3YXMgZHJhZ2dlZCB0by4gSWYgYGZhbHNlYCBpcyBwYXNzZWQsXG4gICAqIHRoZSByZW9yZGVyIHdpbGwgY29tcGxldGUgYW5kIHRoZSBpdGVtIHdpbGwgYm91bmNlIGJhY2sgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gbGlzdE9yUmVvcmRlciBBIGxpc3Qgb2YgaXRlbXMgdG8gYmUgc29ydGVkIGFuZCByZXR1cm5lZCBpbiB0aGUgbmV3IG9yZGVyIG9yIGFcbiAgICogYm9vbGVhbiBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcmVvcmRlciBzaG91bGQgcmVwb3NpdGlvbiB0aGUgaXRlbS5cbiAgICovXG4gIGNvbXBsZXRlKGxpc3RPclJlb3JkZXIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcGxldGVSZW9yZGVyKGxpc3RPclJlb3JkZXIpKTtcbiAgfVxuICBjYW5TdGFydChldikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbUVsIHx8IHRoaXMuc3RhdGUgIT09IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi5ldmVudC50YXJnZXQ7XG4gICAgY29uc3QgcmVvcmRlckVsID0gdGFyZ2V0LmNsb3Nlc3QoJ2lvbi1yZW9yZGVyJyk7XG4gICAgaWYgKCFyZW9yZGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IGZpbmRSZW9yZGVySXRlbShyZW9yZGVyRWwsIHRoaXMuZWwpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldi5kYXRhID0gaXRlbTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvblN0YXJ0KGV2KSB7XG4gICAgZXYuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1FbCA9IGV2LmRhdGE7XG4gICAgY29uc3QgaGVpZ2h0cyA9IHRoaXMuY2FjaGVkSGVpZ2h0cztcbiAgICBoZWlnaHRzLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIHN1bSArPSBjaGlsZC5vZmZzZXRIZWlnaHQ7XG4gICAgICBoZWlnaHRzLnB1c2goc3VtKTtcbiAgICAgIGNoaWxkLiRpb25JbmRleCA9IGk7XG4gICAgfVxuICAgIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuY29udGFpbmVyVG9wID0gYm94LnRvcDtcbiAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IGJveC5ib3R0b207XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbEJveCA9IHRoaXMuc2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IHNjcm9sbEJveC50b3AgKyBBVVRPX1NDUk9MTF9NQVJHSU47XG4gICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gc2Nyb2xsQm94LmJvdHRvbSAtIEFVVE9fU0NST0xMX01BUkdJTjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSAwO1xuICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gMDtcbiAgICB9XG4gICAgdGhpcy5sYXN0VG9JbmRleCA9IGluZGV4Rm9ySXRlbShpdGVtKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSAxIC8qIFJlb3JkZXJHcm91cFN0YXRlLkFjdGl2ZSAqLztcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoSVRFTV9SRU9SREVSX1NFTEVDVEVEKTtcbiAgICBoYXB0aWNTZWxlY3Rpb25TdGFydCgpO1xuICB9XG4gIG9uTW92ZShldikge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2Nyb2xsIGlmIHdlIHJlYWNoIHRoZSBzY3JvbGwgbWFyZ2luc1xuICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMuYXV0b3Njcm9sbChldi5jdXJyZW50WSk7XG4gICAgLy8gLy8gR2V0IGNvb3JkaW5hdGVcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNvbnRhaW5lclRvcCAtIHNjcm9sbDtcbiAgICBjb25zdCBib3R0b20gPSB0aGlzLmNvbnRhaW5lckJvdHRvbSAtIHNjcm9sbDtcbiAgICBjb25zdCBjdXJyZW50WSA9IE1hdGgubWF4KHRvcCwgTWF0aC5taW4oZXYuY3VycmVudFksIGJvdHRvbSkpO1xuICAgIGNvbnN0IGRlbHRhWSA9IHNjcm9sbCArIGN1cnJlbnRZIC0gZXYuc3RhcnRZO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRZID0gY3VycmVudFkgLSB0b3A7XG4gICAgY29uc3QgdG9JbmRleCA9IHRoaXMuaXRlbUluZGV4Rm9yVG9wKG5vcm1hbGl6ZWRZKTtcbiAgICBpZiAodG9JbmRleCAhPT0gdGhpcy5sYXN0VG9JbmRleCkge1xuICAgICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICB0aGlzLmxhc3RUb0luZGV4ID0gdG9JbmRleDtcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIHRoaXMucmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIGl0ZW0gcG9zaXRpb25cbiAgICBzZWxlY3RlZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkZWx0YVl9cHgpYDtcbiAgfVxuICBvbkVuZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbCA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgdGhpcy5zdGF0ZSA9IDIgLyogUmVvcmRlckdyb3VwU3RhdGUuQ29tcGxldGUgKi87XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1FbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbUVsKTtcbiAgICBpZiAodG9JbmRleCA9PT0gZnJvbUluZGV4KSB7XG4gICAgICB0aGlzLmNvbXBsZXRlUmVvcmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyLmVtaXQoe1xuICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgIHRvOiB0b0luZGV4LFxuICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZVJlb3JkZXIuYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICB9XG4gIGNvbXBsZXRlUmVvcmRlcihsaXN0T3JSZW9yZGVyKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtRWwgPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgIGlmIChzZWxlY3RlZEl0ZW1FbCAmJiB0aGlzLnN0YXRlID09PSAyIC8qIFJlb3JkZXJHcm91cFN0YXRlLkNvbXBsZXRlICovKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgICBjb25zdCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy5sYXN0VG9JbmRleDtcbiAgICAgIGNvbnN0IGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW1FbCk7XG4gICAgICAvKipcbiAgICAgICAqIGluc2VydEJlZm9yZSBhbmQgc2V0dGluZyB0aGUgdHJhbnNmb3JtXG4gICAgICAgKiBuZWVkcyB0byBoYXBwZW4gaW4gdGhlIHNhbWUgZnJhbWUgb3RoZXJ3aXNlXG4gICAgICAgKiB0aGVyZSB3aWxsIGJlIGEgZHVwbGljYXRlIHRyYW5zaXRpb24uIFRoaXMgcHJpbWFyaWx5XG4gICAgICAgKiBpbXBhY3RzIEZpcmVmb3ggd2hlcmUgaW5zZXJ0QmVmb3JlIGFuZCB0cmFuc2Zvcm0gb3BlcmF0aW9uc1xuICAgICAgICogYXJlIGhhcHBlbmluZyBpbiB0d28gc2VwYXJhdGUgZnJhbWVzLlxuICAgICAgICovXG4gICAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAodG9JbmRleCAhPT0gZnJvbUluZGV4ICYmIChsaXN0T3JSZW9yZGVyID09PSB1bmRlZmluZWQgfHwgbGlzdE9yUmVvcmRlciA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICBjb25zdCByZWYgPSBmcm9tSW5kZXggPCB0b0luZGV4ID8gY2hpbGRyZW5bdG9JbmRleCArIDFdIDogY2hpbGRyZW5bdG9JbmRleF07XG4gICAgICAgICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRJdGVtRWwsIHJlZik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkcmVuW2ldLnN0eWxlWyd0cmFuc2Zvcm0nXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RPclJlb3JkZXIpKSB7XG4gICAgICAgIGxpc3RPclJlb3JkZXIgPSByZW9yZGVyQXJyYXkobGlzdE9yUmVvcmRlciwgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkSXRlbUVsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgIHNlbGVjdGVkSXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoSVRFTV9SRU9SREVSX1NFTEVDVEVEKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtRWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnN0YXRlID0gMCAvKiBSZW9yZGVyR3JvdXBTdGF0ZS5JZGxlICovO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdE9yUmVvcmRlcjtcbiAgfVxuICBpdGVtSW5kZXhGb3JUb3AoZGVsdGFZKSB7XG4gICAgY29uc3QgaGVpZ2h0cyA9IHRoaXMuY2FjaGVkSGVpZ2h0cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChoZWlnaHRzW2ldID4gZGVsdGFZKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0cy5sZW5ndGggLSAxO1xuICB9XG4gIC8qKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKiAqL1xuICByZW9yZGVyTW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5zZWxlY3RlZEl0ZW1IZWlnaHQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gY2hpbGRyZW5baV0uc3R5bGU7XG4gICAgICBsZXQgdmFsdWUgPSAnJztcbiAgICAgIGlmIChpID4gZnJvbUluZGV4ICYmIGkgPD0gdG9JbmRleCkge1xuICAgICAgICB2YWx1ZSA9IGB0cmFuc2xhdGVZKCR7LWl0ZW1IZWlnaHR9cHgpYDtcbiAgICAgIH0gZWxzZSBpZiAoaSA8IGZyb21JbmRleCAmJiBpID49IHRvSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBgdHJhbnNsYXRlWSgke2l0ZW1IZWlnaHR9cHgpYDtcbiAgICAgIH1cbiAgICAgIHN0eWxlWyd0cmFuc2Zvcm0nXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBhdXRvc2Nyb2xsKHBvc1kpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgYW1vdW50ID0gMDtcbiAgICBpZiAocG9zWSA8IHRoaXMuc2Nyb2xsRWxUb3ApIHtcbiAgICAgIGFtb3VudCA9IC1TQ1JPTExfSlVNUDtcbiAgICB9IGVsc2UgaWYgKHBvc1kgPiB0aGlzLnNjcm9sbEVsQm90dG9tKSB7XG4gICAgICBhbW91bnQgPSBTQ1JPTExfSlVNUDtcbiAgICB9XG4gICAgaWYgKGFtb3VudCAhPT0gMCkge1xuICAgICAgdGhpcy5zY3JvbGxFbC5zY3JvbGxCeSgwLCBhbW91bnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgLSB0aGlzLnNjcm9sbEVsSW5pdGlhbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNmNhMDA5ZGQ2NTMwMmE5MTRkNDU5YWVjNjM4ZTYyOTc3NDQwZGIyMCcsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdyZW9yZGVyLWVuYWJsZWQnOiAhdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3Jlb3JkZXItbGlzdC1hY3RpdmUnOiB0aGlzLnN0YXRlICE9PSAwIC8qIFJlb3JkZXJHcm91cFN0YXRlLklkbGUgKi9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgaW5kZXhGb3JJdGVtID0gZWxlbWVudCA9PiB7XG4gIHJldHVybiBlbGVtZW50WyckaW9uSW5kZXgnXTtcbn07XG5jb25zdCBmaW5kUmVvcmRlckl0ZW0gPSAobm9kZSwgY29udGFpbmVyKSA9PiB7XG4gIGxldCBwYXJlbnQ7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgcGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgPT09IGNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIG5vZGUgPSBwYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCBBVVRPX1NDUk9MTF9NQVJHSU4gPSA2MDtcbmNvbnN0IFNDUk9MTF9KVU1QID0gMTA7XG5jb25zdCBJVEVNX1JFT1JERVJfU0VMRUNURUQgPSAncmVvcmRlci1zZWxlY3RlZCc7XG5jb25zdCByZW9yZGVyQXJyYXkgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtmcm9tXTtcbiAgYXJyYXkuc3BsaWNlKGZyb20sIDEpO1xuICBhcnJheS5zcGxpY2UodG8sIDAsIGVsZW1lbnQpO1xuICByZXR1cm4gYXJyYXkuc2xpY2UoKTtcbn07XG5SZW9yZGVyR3JvdXAuc3R5bGUgPSBJb25SZW9yZGVyR3JvdXBTdHlsZTA7XG5leHBvcnQgeyBSZW9yZGVyIGFzIGlvbl9yZW9yZGVyLCBSZW9yZGVyR3JvdXAgYXMgaW9uX3Jlb3JkZXJfZ3JvdXAgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNLGdCQUFnQjtBQUN0QixJQUFNLHNCQUFzQjtBQUM1QixJQUFNLGVBQWU7QUFDckIsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxVQUFVLE1BQU07QUFBQSxFQUNwQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUFBLEVBQ2hDO0FBQUEsRUFDQSxRQUFRLElBQUk7QUFDVixVQUFNLGVBQWUsS0FBSyxHQUFHLFFBQVEsbUJBQW1CO0FBQ3hELE9BQUcsZUFBZTtBQUdsQixRQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxVQUFVO0FBQzNDLFNBQUcseUJBQXlCO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixVQUFNLGNBQWMsU0FBUyxRQUFRLHNCQUFzQjtBQUMzRCxXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1B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
