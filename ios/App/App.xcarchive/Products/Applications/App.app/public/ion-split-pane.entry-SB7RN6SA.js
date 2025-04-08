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

// node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js
var splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}";
var IonSplitPaneIosStyle0 = splitPaneIosCss;
var splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}";
var IonSplitPaneMdStyle0 = splitPaneMdCss;
var SPLIT_PANE_MAIN = "split-pane-main";
var SPLIT_PANE_SIDE = "split-pane-side";
var QUERY = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  never: ""
};
var SplitPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSplitPaneVisible = createEvent(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    this.contentId = void 0;
    this.disabled = false;
    this.when = QUERY["lg"];
  }
  visibleChanged(visible) {
    this.ionSplitPaneVisible.emit({
      visible
    });
  }
  /**
   * @internal
   */
  isVisible() {
    return __async(this, null, function* () {
      return Promise.resolve(this.visible);
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (typeof customElements !== "undefined" && customElements != null) {
        yield customElements.whenDefined("ion-split-pane");
      }
      this.styleMainElement();
      this.updateState();
    });
  }
  disconnectedCallback() {
    if (this.rmL) {
      this.rmL();
      this.rmL = void 0;
    }
  }
  updateState() {
    if (this.rmL) {
      this.rmL();
      this.rmL = void 0;
    }
    if (this.disabled) {
      this.visible = false;
      return;
    }
    const query = this.when;
    if (typeof query === "boolean") {
      this.visible = query;
      return;
    }
    const mediaQuery = QUERY[query] || query;
    if (mediaQuery.length === 0) {
      this.visible = false;
      return;
    }
    const callback = (q) => {
      this.visible = q.matches;
    };
    const mediaList = window.matchMedia(mediaQuery);
    mediaList.addListener(callback);
    this.rmL = () => mediaList.removeListener(callback);
    this.visible = mediaList.matches;
  }
  /**
   * Attempt to find the main content
   * element inside of the split pane.
   * If found, set it as the main node.
   *
   * We assume that the main node
   * is available in the DOM on split
   * pane load.
   */
  styleMainElement() {
    const contentId = this.contentId;
    const children = this.el.children;
    const nu = this.el.childElementCount;
    let foundMain = false;
    for (let i = 0; i < nu; i++) {
      const child = children[i];
      const isMain = contentId !== void 0 && child.id === contentId;
      if (isMain) {
        if (foundMain) {
          console.warn("split pane cannot have more than one main node");
          return;
        } else {
          setPaneClass(child, isMain);
          foundMain = true;
        }
      }
    }
    if (!foundMain) {
      console.warn("split pane does not have a specified main node");
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "76be70d7fbebc52646a5851f47accc1006615b85",
      class: {
        [mode]: true,
        // Used internally for styling
        [`split-pane-${mode}`]: true,
        "split-pane-visible": this.visible
      }
    }, h("slot", {
      key: "9a859530f4fb18aff43255bc3940feb9aca625d7"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "visible": ["visibleChanged"],
      "disabled": ["updateState"],
      "when": ["updateState"]
    };
  }
};
var setPaneClass = (el, isMain) => {
  let toAdd;
  let toRemove;
  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  } else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }
  const classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};
SplitPane.style = {
  ios: IonSplitPaneIosStyle0,
  md: IonSplitPaneMdStyle0
};
export {
  SplitPane as ion_split_pane
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-split-pane.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc3BsaXQtcGFuZS5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBlIGFzIEhvc3QsIGYgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuY29uc3Qgc3BsaXRQYW5lSW9zQ3NzID0gXCI6aG9zdHstLXNpZGUtd2lkdGg6MTAwJTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwO2NvbnRhaW46c3RyaWN0fTpob3N0KC5zcGxpdC1wYW5lLXZpc2libGUpIDo6c2xvdHRlZCguc3BsaXQtcGFuZS1tYWluKXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH06OnNsb3R0ZWQoLnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1ib3JkZXI6MC41NXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2M4YzdjYykpKSk7LS1zaWRlLW1pbi13aWR0aDoyNzBweDstLXNpZGUtbWF4LXdpZHRoOjI4JX1cIjtcbmNvbnN0IElvblNwbGl0UGFuZUlvc1N0eWxlMCA9IHNwbGl0UGFuZUlvc0NzcztcbmNvbnN0IHNwbGl0UGFuZU1kQ3NzID0gXCI6aG9zdHstLXNpZGUtd2lkdGg6MTAwJTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwO2NvbnRhaW46c3RyaWN0fTpob3N0KC5zcGxpdC1wYW5lLXZpc2libGUpIDo6c2xvdHRlZCguc3BsaXQtcGFuZS1tYWluKXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH06OnNsb3R0ZWQoLnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7LS1zaWRlLW1pbi13aWR0aDoyNzBweDstLXNpZGUtbWF4LXdpZHRoOjI4JX1cIjtcbmNvbnN0IElvblNwbGl0UGFuZU1kU3R5bGUwID0gc3BsaXRQYW5lTWRDc3M7XG5cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jb25zdCBTUExJVF9QQU5FX01BSU4gPSAnc3BsaXQtcGFuZS1tYWluJztcbmNvbnN0IFNQTElUX1BBTkVfU0lERSA9ICdzcGxpdC1wYW5lLXNpZGUnO1xuY29uc3QgUVVFUlkgPSB7XG4gIHhzOiAnKG1pbi13aWR0aDogMHB4KScsXG4gIHNtOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgbWQ6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZzogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIG5ldmVyOiAnJ1xufTtcbmNvbnN0IFNwbGl0UGFuZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25TcGxpdFBhbmVWaXNpYmxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TcGxpdFBhbmVWaXNpYmxlXCIsIDcpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudElkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLndoZW4gPSBRVUVSWVsnbGcnXTtcbiAgfVxuICB2aXNpYmxlQ2hhbmdlZCh2aXNpYmxlKSB7XG4gICAgdGhpcy5pb25TcGxpdFBhbmVWaXNpYmxlLmVtaXQoe1xuICAgICAgdmlzaWJsZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlzaWJsZSk7XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gVE9ETzogY29ubmVjdGVkQ2FsbGJhY2sgaXMgZmlyZWQgaW4gQ0UgYnVpbGRcbiAgICAvLyBiZWZvcmUgV0MgaXMgZGVmaW5lZC4gVGhpcyBuZWVkcyB0byBiZSBmaXhlZCBpbiBTdGVuY2lsLlxuICAgIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIGN1c3RvbUVsZW1lbnRzICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdpb24tc3BsaXQtcGFuZScpO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlTWFpbkVsZW1lbnQoKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMucm1MKSB7XG4gICAgICB0aGlzLnJtTCgpO1xuICAgICAgdGhpcy5ybUwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIGlmICh0aGlzLnJtTCkge1xuICAgICAgdGhpcy5ybUwoKTtcbiAgICAgIHRoaXMucm1MID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgc3BsaXQtcGFuZSBpcyBkaXNhYmxlZFxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gV2hlbiBxdWVyeSBpcyBhIGJvb2xlYW5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMud2hlbjtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHF1ZXJ5O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBXaGVuIHF1ZXJ5IGlzIGEgc3RyaW5nLCBsZXQncyBmaW5kIGZpcnN0IGlmIGl0IGlzIGEgc2hvcnRjdXRcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gUVVFUllbcXVlcnldIHx8IHF1ZXJ5O1xuICAgIC8vIE1lZGlhIHF1ZXJ5IGlzIGVtcHR5IG9yIG51bGwsIHdlIGhpZGUgaXRcbiAgICBpZiAobWVkaWFRdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBMaXN0ZW4gb24gbWVkaWEgcXVlcnlcbiAgICBjb25zdCBjYWxsYmFjayA9IHEgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gcS5tYXRjaGVzO1xuICAgIH07XG4gICAgY29uc3QgbWVkaWFMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gICAgLy8gVE9ETyBGVy01ODY5XG4gICAgbWVkaWFMaXN0LmFkZExpc3RlbmVyKGNhbGxiYWNrKTtcbiAgICB0aGlzLnJtTCA9ICgpID0+IG1lZGlhTGlzdC5yZW1vdmVMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgdGhpcy52aXNpYmxlID0gbWVkaWFMaXN0Lm1hdGNoZXM7XG4gIH1cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbWFpbiBjb250ZW50XG4gICAqIGVsZW1lbnQgaW5zaWRlIG9mIHRoZSBzcGxpdCBwYW5lLlxuICAgKiBJZiBmb3VuZCwgc2V0IGl0IGFzIHRoZSBtYWluIG5vZGUuXG4gICAqXG4gICAqIFdlIGFzc3VtZSB0aGF0IHRoZSBtYWluIG5vZGVcbiAgICogaXMgYXZhaWxhYmxlIGluIHRoZSBET00gb24gc3BsaXRcbiAgICogcGFuZSBsb2FkLlxuICAgKi9cbiAgc3R5bGVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBjb250ZW50SWQgPSB0aGlzLmNvbnRlbnRJZDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgY29uc3QgbnUgPSB0aGlzLmVsLmNoaWxkRWxlbWVudENvdW50O1xuICAgIGxldCBmb3VuZE1haW4gPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51OyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBjb25zdCBpc01haW4gPSBjb250ZW50SWQgIT09IHVuZGVmaW5lZCAmJiBjaGlsZC5pZCA9PT0gY29udGVudElkO1xuICAgICAgaWYgKGlzTWFpbikge1xuICAgICAgICBpZiAoZm91bmRNYWluKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzcGxpdCBwYW5lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWFpbiBub2RlJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBhbmVDbGFzcyhjaGlsZCwgaXNNYWluKTtcbiAgICAgICAgICBmb3VuZE1haW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRNYWluKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3NwbGl0IHBhbmUgZG9lcyBub3QgaGF2ZSBhIHNwZWNpZmllZCBtYWluIG5vZGUnKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzc2YmU3MGQ3ZmJlYmM1MjY0NmE1ODUxZjQ3YWNjYzEwMDY2MTViODUnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgW2BzcGxpdC1wYW5lLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgJ3NwbGl0LXBhbmUtdmlzaWJsZSc6IHRoaXMudmlzaWJsZVxuICAgICAgfVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzlhODU5NTMwZjRmYjE4YWZmNDMyNTViYzM5NDBmZWI5YWNhNjI1ZDcnXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZpc2libGVcIjogW1widmlzaWJsZUNoYW5nZWRcIl0sXG4gICAgICBcImRpc2FibGVkXCI6IFtcInVwZGF0ZVN0YXRlXCJdLFxuICAgICAgXCJ3aGVuXCI6IFtcInVwZGF0ZVN0YXRlXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IHNldFBhbmVDbGFzcyA9IChlbCwgaXNNYWluKSA9PiB7XG4gIGxldCB0b0FkZDtcbiAgbGV0IHRvUmVtb3ZlO1xuICBpZiAoaXNNYWluKSB7XG4gICAgdG9BZGQgPSBTUExJVF9QQU5FX01BSU47XG4gICAgdG9SZW1vdmUgPSBTUExJVF9QQU5FX1NJREU7XG4gIH0gZWxzZSB7XG4gICAgdG9BZGQgPSBTUExJVF9QQU5FX1NJREU7XG4gICAgdG9SZW1vdmUgPSBTUExJVF9QQU5FX01BSU47XG4gIH1cbiAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICBjbGFzc0xpc3QuYWRkKHRvQWRkKTtcbiAgY2xhc3NMaXN0LnJlbW92ZSh0b1JlbW92ZSk7XG59O1xuU3BsaXRQYW5lLnN0eWxlID0ge1xuICBpb3M6IElvblNwbGl0UGFuZUlvc1N0eWxlMCxcbiAgbWQ6IElvblNwbGl0UGFuZU1kU3R5bGUwXG59O1xuZXhwb3J0IHsgU3BsaXRQYW5lIGFzIGlvbl9zcGxpdF9wYW5lIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLGtCQUFrQjtBQUN4QixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHVCQUF1QjtBQUc3QixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLFFBQVE7QUFBQSxFQUNaLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLE9BQU87QUFDVDtBQUNBLElBQU0sWUFBWSxNQUFNO0FBQUEsRUFDdEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxzQkFBc0IsWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLFNBQUssVUFBVTtBQUNmLFNBQUssWUFBWTtBQUNqQixTQUFLLFdBQVc7QUFDaEIsU0FBSyxPQUFPLE1BQU0sSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxlQUFlLFNBQVM7QUFDdEIsU0FBSyxvQkFBb0IsS0FBSztBQUFBLE1BQzVCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSU0sWUFBWTtBQUFBO0FBQ2hCLGFBQU8sUUFBUSxRQUFRLEtBQUssT0FBTztBQUFBLElBQ3JDO0FBQUE7QUFBQSxFQUNNLG9CQUFvQjtBQUFBO0FBR3hCLFVBQUksT0FBTyxtQkFBbUIsZUFBZSxrQkFBa0IsTUFBTTtBQUNuRSxjQUFNLGVBQWUsWUFBWSxnQkFBZ0I7QUFBQSxNQUNuRDtBQUNBLFdBQUssaUJBQWlCO0FBQ3RCLFdBQUssWUFBWTtBQUFBLElBQ25CO0FBQUE7QUFBQSxFQUNBLHVCQUF1QjtBQUNyQixRQUFJLEtBQUssS0FBSztBQUNaLFdBQUssSUFBSTtBQUNULFdBQUssTUFBTTtBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQ1osUUFBSSxLQUFLLEtBQUs7QUFDWixXQUFLLElBQUk7QUFDVCxXQUFLLE1BQU07QUFBQSxJQUNiO0FBRUEsUUFBSSxLQUFLLFVBQVU7QUFDakIsV0FBSyxVQUFVO0FBQ2Y7QUFBQSxJQUNGO0FBRUEsVUFBTSxRQUFRLEtBQUs7QUFDbkIsUUFBSSxPQUFPLFVBQVUsV0FBVztBQUM5QixXQUFLLFVBQVU7QUFDZjtBQUFBLElBQ0Y7QUFFQSxVQUFNLGFBQWEsTUFBTSxLQUFLLEtBQUs7QUFFbkMsUUFBSSxXQUFXLFdBQVcsR0FBRztBQUMzQixXQUFLLFVBQVU7QUFDZjtBQUFBLElBQ0Y7QUFFQSxVQUFNLFdBQVcsT0FBSztBQUNwQixXQUFLLFVBQVUsRUFBRTtBQUFBLElBQ25CO0FBQ0EsVUFBTSxZQUFZLE9BQU8sV0FBVyxVQUFVO0FBRTlDLGNBQVUsWUFBWSxRQUFRO0FBQzlCLFNBQUssTUFBTSxNQUFNLFVBQVUsZUFBZSxRQUFRO0FBQ2xELFNBQUssVUFBVSxVQUFVO0FBQUEsRUFDM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVBLG1CQUFtQjtBQUNqQixVQUFNLFlBQVksS0FBSztBQUN2QixVQUFNLFdBQVcsS0FBSyxHQUFHO0FBQ3pCLFVBQU0sS0FBSyxLQUFLLEdBQUc7QUFDbkIsUUFBSSxZQUFZO0FBQ2hCLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sUUFBUSxTQUFTLENBQUM7QUFDeEIsWUFBTSxTQUFTLGNBQWMsVUFBYSxNQUFNLE9BQU87QUFDdkQsVUFBSSxRQUFRO0FBQ1YsWUFBSSxXQUFXO0FBQ2Isa0JBQVEsS0FBSyxnREFBZ0Q7QUFDN0Q7QUFBQSxRQUNGLE9BQU87QUFDTCx1QkFBYSxPQUFPLE1BQU07QUFDMUIsc0JBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLENBQUMsV0FBVztBQUNkLGNBQVEsS0FBSyxnREFBZ0Q7QUFBQSxJQUMvRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDTCxDQUFDLElBQUksR0FBRztBQUFBO0FBQUEsUUFFUixDQUFDLGNBQWMsSUFBSSxFQUFFLEdBQUc7QUFBQSxRQUN4QixzQkFBc0IsS0FBSztBQUFBLE1BQzdCO0FBQUEsSUFDRixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxNQUM1QixZQUFZLENBQUMsYUFBYTtBQUFBLE1BQzFCLFFBQVEsQ0FBQyxhQUFhO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFNLGVBQWUsQ0FBQyxJQUFJLFdBQVc7QUFDbkMsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLFFBQVE7QUFDVixZQUFRO0FBQ1IsZUFBVztBQUFBLEVBQ2IsT0FBTztBQUNMLFlBQVE7QUFDUixlQUFXO0FBQUEsRUFDYjtBQUNBLFFBQU0sWUFBWSxHQUFHO0FBQ3JCLFlBQVUsSUFBSSxLQUFLO0FBQ25CLFlBQVUsT0FBTyxRQUFRO0FBQzNCO0FBQ0EsVUFBVSxRQUFRO0FBQUEsRUFDaEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
