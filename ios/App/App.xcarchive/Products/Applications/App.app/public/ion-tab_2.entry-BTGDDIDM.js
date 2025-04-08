import {
  attachComponent
} from "./chunk-U6MFTC2E.js";
import "./chunk-RRWPYKYY.js";
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

// node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js
var tabCss = ":host(.tab-hidden){display:none !important}";
var IonTabStyle0 = tabCss;
var Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = false;
    this.active = false;
    this.delegate = void 0;
    this.tab = void 0;
    this.component = void 0;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (this.active) {
        yield this.setActive();
      }
    });
  }
  /** Set the active component for the tab */
  setActive() {
    return __async(this, null, function* () {
      yield this.prepareLazyLoaded();
      this.active = true;
    });
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ["ion-page"]);
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(void 0);
  }
  render() {
    const {
      tab,
      active,
      component
    } = this;
    return h(Host, {
      key: "2107ece2f1ebdf748bac8adb78a9ad67e7fc9057",
      role: "tabpanel",
      "aria-hidden": !active ? "true" : null,
      "aria-labelledby": `tab-button-${tab}`,
      class: {
        "ion-page": component === void 0,
        "tab-hidden": !active
      }
    }, h("slot", {
      key: "b4a1bc1aa79f6b82b8f77b544bcb74e65229b541"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "active": ["changeActive"]
    };
  }
};
Tab.style = IonTabStyle0;
var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
var IonTabsStyle0 = tabsCss;
var Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = createEvent(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = createEvent(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    this.onTabClicked = (ev) => {
      const {
        href,
        tab
      } = ev.detail;
      if (this.useRouter && href !== void 0) {
        const router = document.querySelector("ion-router");
        if (router) {
          router.push(href);
        }
      } else {
        this.select(tab);
      }
    };
    this.selectedTab = void 0;
    this.useRouter = false;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (!this.useRouter) {
        this.useRouter = (!!this.el.querySelector("ion-router-outlet") || !!document.querySelector("ion-router")) && !this.el.closest("[no-router]");
      }
      if (!this.useRouter) {
        const tabs = this.tabs;
        if (tabs.length > 0) {
          yield this.select(tabs[0]);
        }
      }
      this.ionNavWillLoad.emit();
    });
  }
  componentWillRender() {
    const tabBar = this.el.querySelector("ion-tab-bar");
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : void 0;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  select(tab) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, tab);
      if (!this.shouldSwitch(selectedTab)) {
        return false;
      }
      yield this.setActive(selectedTab);
      yield this.notifyRouter();
      this.tabSwitch();
      return true;
    });
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  getTab(tab) {
    return __async(this, null, function* () {
      return getTab(this.tabs, tab);
    });
  }
  /**
   * Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : void 0);
  }
  /** @internal */
  setRouteId(id) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, id);
      if (!this.shouldSwitch(selectedTab)) {
        return {
          changed: false,
          element: this.selectedTab
        };
      }
      yield this.setActive(selectedTab);
      return {
        changed: true,
        element: this.selectedTab,
        markVisible: () => this.tabSwitch()
      };
    });
  }
  /** @internal */
  getRouteId() {
    return __async(this, null, function* () {
      var _a;
      const tabId = (_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.tab;
      return tabId !== void 0 ? {
        id: tabId,
        element: this.selectedTab
      } : void 0;
    });
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject("transitioning already happening");
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab: selectedTab.tab
    });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = void 0;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        return router.navChanged("forward");
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== void 0 && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("ion-tab"));
  }
  render() {
    return h(Host, {
      key: "d357c4607cfc89fb88404fe12ea7ef5b397fe6bf",
      onIonTabButtonClick: this.onTabClicked
    }, h("slot", {
      key: "18661896589a4ab3c74164f448b928abec9b4db0",
      name: "top"
    }), h("div", {
      key: "3bf30ea2540a196e868a78a861824b4b5d933afd",
      class: "tabs-inner"
    }, h("slot", {
      key: "7cfc154d4d6c1642188ab6508a6be72c8234585e"
    })), h("slot", {
      key: "8057679c959195cbdfae156b8ae0cbfd978c5037",
      name: "bottom"
    }));
  }
  get el() {
    return getElement(this);
  }
};
var getTab = (tabs, tab) => {
  const tabEl = typeof tab === "string" ? tabs.find((t) => t.tab === tab) : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = IonTabsStyle0;
export {
  Tab as ion_tab,
  Tabs as ion_tabs
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-tab_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGFiXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQsIGMgYXMgY3JlYXRlRXZlbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtMmVlYTE3NjMuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuY29uc3QgdGFiQ3NzID0gXCI6aG9zdCgudGFiLWhpZGRlbil7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9XCI7XG5jb25zdCBJb25UYWJTdHlsZTAgPSB0YWJDc3M7XG5jb25zdCBUYWIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmRlbGVnYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRBY3RpdmUoKTtcbiAgICB9XG4gIH1cbiAgLyoqIFNldCB0aGUgYWN0aXZlIGNvbXBvbmVudCBmb3IgdGhlIHRhYiAqL1xuICBhc3luYyBzZXRBY3RpdmUoKSB7XG4gICAgYXdhaXQgdGhpcy5wcmVwYXJlTGF6eUxvYWRlZCgpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBjaGFuZ2VBY3RpdmUoaXNBY3RpdmUpIHtcbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucHJlcGFyZUxhenlMb2FkZWQoKTtcbiAgICB9XG4gIH1cbiAgcHJlcGFyZUxhenlMb2FkZWQoKSB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZCAmJiB0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIHRoaXMuY29tcG9uZW50LCBbJ2lvbi1wYWdlJ10pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhYixcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNvbXBvbmVudFxuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzIxMDdlY2UyZjFlYmRmNzQ4YmFjOGFkYjc4YTlhZDY3ZTdmYzkwNTcnLFxuICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiAhYWN0aXZlID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGB0YWItYnV0dG9uLSR7dGFifWAsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnaW9uLXBhZ2UnOiBjb21wb25lbnQgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ3RhYi1oaWRkZW4nOiAhYWN0aXZlXG4gICAgICB9XG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnYjRhMWJjMWFhNzlmNmI4MmI4Zjc3YjU0NGJjYjc0ZTY1MjI5YjU0MSdcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiYWN0aXZlXCI6IFtcImNoYW5nZUFjdGl2ZVwiXVxuICAgIH07XG4gIH1cbn07XG5UYWIuc3R5bGUgPSBJb25UYWJTdHlsZTA7XG5jb25zdCB0YWJzQ3NzID0gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfS50YWJzLWlubmVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9XCI7XG5jb25zdCBJb25UYWJzU3R5bGUwID0gdGFic0NzcztcbmNvbnN0IFRhYnMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uTmF2V2lsbExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxMb2FkXCIsIDcpO1xuICAgIHRoaXMuaW9uVGFic1dpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYnNXaWxsQ2hhbmdlXCIsIDMpO1xuICAgIHRoaXMuaW9uVGFic0RpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFic0RpZENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9uVGFiQ2xpY2tlZCA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaHJlZixcbiAgICAgICAgdGFiXG4gICAgICB9ID0gZXYuZGV0YWlsO1xuICAgICAgaWYgKHRoaXMudXNlUm91dGVyICYmIGhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGFiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VSb3V0ZXIgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBpZiAoIXRoaXMudXNlUm91dGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIEphdmFTY3JpcHQgYW5kIFN0ZW5jaWxKUyB1c2UgYGlvbi1yb3V0ZXJgLCB3aGlsZVxuICAgICAgICogdGhlIG90aGVyIGZyYW1ld29ya3MgdXNlIGBpb24tcm91dGVyLW91dGxldGAuXG4gICAgICAgKlxuICAgICAgICogSWYgZWl0aGVyIGNvbXBvbmVudCBpcyBwcmVzZW50IHRoZW4gdGFicyB3aWxsIG5vdCB1c2VcbiAgICAgICAqIGEgYmFzaWMgdGFiLWJhc2VkIG5hdmlnYXRpb24uIEl0IHdpbGwgdXNlIHRoZSBoaXN0b3J5XG4gICAgICAgKiBzdGFjayBvciBVUkwgdXBkYXRlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlci5cbiAgICAgICAqL1xuICAgICAgdGhpcy51c2VSb3V0ZXIgPSAoISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXItb3V0bGV0JykgfHwgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJykpICYmICF0aGlzLmVsLmNsb3Nlc3QoJ1tuby1yb3V0ZXJdJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgICBpZiAodGFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0KHRhYnNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYkJhciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXRhYi1iYXInKTtcbiAgICBpZiAodGFiQmFyKSB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnNlbGVjdGVkVGFiID8gdGhpcy5zZWxlY3RlZFRhYi50YWIgOiB1bmRlZmluZWQ7XG4gICAgICB0YWJCYXIuc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZWxlY3QgYSB0YWIgYnkgdGhlIHZhbHVlIG9mIGl0cyBgdGFiYCBwcm9wZXJ0eSBvciBhbiBlbGVtZW50IHJlZmVyZW5jZS4gVGhpcyBtZXRob2QgaXMgb25seSBhdmFpbGFibGUgZm9yIHZhbmlsbGEgSmF2YVNjcmlwdCBwcm9qZWN0cy4gVGhlIEFuZ3VsYXIsIFJlYWN0LCBhbmQgVnVlIGltcGxlbWVudGF0aW9ucyBvZiB0YWJzIGFyZSBjb3VwbGVkIHRvIGVhY2ggZnJhbWV3b3JrJ3Mgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0gdGFiIFRoZSB0YWIgaW5zdGFuY2UgdG8gc2VsZWN0LiBJZiBwYXNzZWQgYSBzdHJpbmcsIGl0IHNob3VsZCBiZSB0aGUgdmFsdWUgb2YgdGhlIHRhYidzIGB0YWJgIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgc2VsZWN0KHRhYikge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZ2V0VGFiKHRoaXMudGFicywgdGFiKTtcbiAgICBpZiAoIXRoaXMuc2hvdWxkU3dpdGNoKHNlbGVjdGVkVGFiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNldEFjdGl2ZShzZWxlY3RlZFRhYik7XG4gICAgYXdhaXQgdGhpcy5ub3RpZnlSb3V0ZXIoKTtcbiAgICB0aGlzLnRhYlN3aXRjaCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBzcGVjaWZpYyB0YWIgYnkgdGhlIHZhbHVlIG9mIGl0cyBgdGFiYCBwcm9wZXJ0eSBvciBhbiBlbGVtZW50IHJlZmVyZW5jZS4gVGhpcyBtZXRob2QgaXMgb25seSBhdmFpbGFibGUgZm9yIHZhbmlsbGEgSmF2YVNjcmlwdCBwcm9qZWN0cy4gVGhlIEFuZ3VsYXIsIFJlYWN0LCBhbmQgVnVlIGltcGxlbWVudGF0aW9ucyBvZiB0YWJzIGFyZSBjb3VwbGVkIHRvIGVhY2ggZnJhbWV3b3JrJ3Mgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0gdGFiIFRoZSB0YWIgaW5zdGFuY2UgdG8gc2VsZWN0LiBJZiBwYXNzZWQgYSBzdHJpbmcsIGl0IHNob3VsZCBiZSB0aGUgdmFsdWUgb2YgdGhlIHRhYidzIGB0YWJgIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiKHRhYikge1xuICAgIHJldHVybiBnZXRUYWIodGhpcy50YWJzLCB0YWIpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWIuIFRoaXMgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciB2YW5pbGxhIEphdmFTY3JpcHQgcHJvamVjdHMuIFRoZSBBbmd1bGFyLCBSZWFjdCwgYW5kIFZ1ZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGFicyBhcmUgY291cGxlZCB0byBlYWNoIGZyYW1ld29yaydzIHJvdXRlci5cbiAgICovXG4gIGdldFNlbGVjdGVkKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZWxlY3RlZFRhYiA/IHRoaXMuc2VsZWN0ZWRUYWIudGFiIDogdW5kZWZpbmVkKTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIHNldFJvdXRlSWQoaWQpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGdldFRhYih0aGlzLnRhYnMsIGlkKTtcbiAgICBpZiAoIXRoaXMuc2hvdWxkU3dpdGNoKHNlbGVjdGVkVGFiKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlZDogZmFsc2UsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuc2VsZWN0ZWRUYWJcbiAgICAgIH07XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2V0QWN0aXZlKHNlbGVjdGVkVGFiKTtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbmdlZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICBtYXJrVmlzaWJsZTogKCkgPT4gdGhpcy50YWJTd2l0Y2goKVxuICAgIH07XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBnZXRSb3V0ZUlkKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB0YWJJZCA9IChfYSA9IHRoaXMuc2VsZWN0ZWRUYWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50YWI7XG4gICAgcmV0dXJuIHRhYklkICE9PSB1bmRlZmluZWQgPyB7XG4gICAgICBpZDogdGFiSWQsXG4gICAgICBlbGVtZW50OiB0aGlzLnNlbGVjdGVkVGFiXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgfVxuICBzZXRBY3RpdmUoc2VsZWN0ZWRUYWIpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3RyYW5zaXRpb25pbmcgYWxyZWFkeSBoYXBwZW5pbmcnKTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxlYXZpbmdUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBzZWxlY3RlZFRhYjtcbiAgICB0aGlzLmlvblRhYnNXaWxsQ2hhbmdlLmVtaXQoe1xuICAgICAgdGFiOiBzZWxlY3RlZFRhYi50YWJcbiAgICB9KTtcbiAgICBzZWxlY3RlZFRhYi5hY3RpdmUgPSB0cnVlO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICB0YWJTd2l0Y2goKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIGNvbnN0IGxlYXZpbmdUYWIgPSB0aGlzLmxlYXZpbmdUYWI7XG4gICAgdGhpcy5sZWF2aW5nVGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgIGlmICghc2VsZWN0ZWRUYWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxlYXZpbmdUYWIgIT09IHNlbGVjdGVkVGFiKSB7XG4gICAgICBpZiAobGVhdmluZ1RhYikge1xuICAgICAgICBsZWF2aW5nVGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5pb25UYWJzRGlkQ2hhbmdlLmVtaXQoe1xuICAgICAgICB0YWI6IHNlbGVjdGVkVGFiLnRhYlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5vdGlmeVJvdXRlcigpIHtcbiAgICBpZiAodGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5uYXZDaGFuZ2VkKCdmb3J3YXJkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICB9XG4gIHNob3VsZFN3aXRjaChzZWxlY3RlZFRhYikge1xuICAgIGNvbnN0IGxlYXZpbmdUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIHJldHVybiBzZWxlY3RlZFRhYiAhPT0gdW5kZWZpbmVkICYmIHNlbGVjdGVkVGFiICE9PSBsZWF2aW5nVGFiICYmICF0aGlzLnRyYW5zaXRpb25pbmc7XG4gIH1cbiAgZ2V0IHRhYnMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tdGFiJykpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkMzU3YzQ2MDdjZmM4OWZiODg0MDRmZTEyZWE3ZWY1YjM5N2ZlNmJmJyxcbiAgICAgIG9uSW9uVGFiQnV0dG9uQ2xpY2s6IHRoaXMub25UYWJDbGlja2VkXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMTg2NjE4OTY1ODlhNGFiM2M3NDE2NGY0NDhiOTI4YWJlYzliNGRiMCcsXG4gICAgICBuYW1lOiBcInRvcFwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnM2JmMzBlYTI1NDBhMTk2ZTg2OGE3OGE4NjE4MjRiNGI1ZDkzM2FmZCcsXG4gICAgICBjbGFzczogXCJ0YWJzLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc3Y2ZjMTU0ZDRkNmMxNjQyMTg4YWI2NTA4YTZiZTcyYzgyMzQ1ODVlJ1xuICAgIH0pKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnODA1NzY3OWM5NTkxOTVjYmRmYWUxNTZiOGFlMGNiZmQ5NzhjNTAzNycsXG4gICAgICBuYW1lOiBcImJvdHRvbVwiXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IGdldFRhYiA9ICh0YWJzLCB0YWIpID0+IHtcbiAgY29uc3QgdGFiRWwgPSB0eXBlb2YgdGFiID09PSAnc3RyaW5nJyA/IHRhYnMuZmluZCh0ID0+IHQudGFiID09PSB0YWIpIDogdGFiO1xuICBpZiAoIXRhYkVsKSB7XG4gICAgY29uc29sZS5lcnJvcihgdGFiIHdpdGggaWQ6IFwiJHt0YWJFbH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICB9XG4gIHJldHVybiB0YWJFbDtcbn07XG5UYWJzLnN0eWxlID0gSW9uVGFic1N0eWxlMDtcbmV4cG9ydCB7IFRhYiBhcyBpb25fdGFiLCBUYWJzIGFzIGlvbl90YWJzIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxTQUFTO0FBQ2YsSUFBTSxlQUFlO0FBQ3JCLElBQU0sTUFBTSxNQUFNO0FBQUEsRUFDaEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxTQUFTO0FBQ2QsU0FBSyxXQUFXO0FBQ2hCLFNBQUssTUFBTTtBQUNYLFNBQUssWUFBWTtBQUFBLEVBQ25CO0FBQUEsRUFDTSxvQkFBb0I7QUFBQTtBQUN4QixVQUFJLEtBQUssUUFBUTtBQUNmLGNBQU0sS0FBSyxVQUFVO0FBQUEsTUFDdkI7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBLEVBRU0sWUFBWTtBQUFBO0FBQ2hCLFlBQU0sS0FBSyxrQkFBa0I7QUFDN0IsV0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFBQTtBQUFBLEVBQ0EsYUFBYSxVQUFVO0FBQ3JCLFFBQUksVUFBVTtBQUNaLFdBQUssa0JBQWtCO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsUUFBSSxDQUFDLEtBQUssVUFBVSxLQUFLLGFBQWEsTUFBTTtBQUMxQyxXQUFLLFNBQVM7QUFDZCxVQUFJO0FBQ0YsZUFBTyxnQkFBZ0IsS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUM7QUFBQSxNQUM3RSxTQUFTLEdBQUc7QUFDVixnQkFBUSxNQUFNLENBQUM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFDQSxXQUFPLFFBQVEsUUFBUSxNQUFTO0FBQUEsRUFDbEM7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0os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
