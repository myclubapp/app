import {
  createAnimation
} from "./chunk-BKPN4S4N.js";
import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  componentOnReady
} from "./chunk-RRWPYKYY.js";
import {
  MENU_BACK_BUTTON_PRIORITY
} from "./chunk-QVGABGEB.js";
import {
  doc
} from "./chunk-JYOJD2RE.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/index-f9f5d018.js
var baseAnimation = (isIos) => {
  return createAnimation().duration(isIos ? 400 : 300);
};
var menuOverlayAnimation = (menu) => {
  let closedX;
  let openedX;
  const width = menu.width + 8;
  const menuAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  if (menu.isEndSide) {
    closedX = width + "px";
    openedX = "0px";
  } else {
    closedX = -width + "px";
    openedX = "0px";
  }
  menuAnimation.addElement(menu.menuInnerEl).fromTo("transform", `translateX(${closedX})`, `translateX(${openedX})`);
  const mode = getIonMode(menu);
  const isIos = mode === "ios";
  const opacity = isIos ? 0.2 : 0.25;
  backdropAnimation.addElement(menu.backdropEl).fromTo("opacity", 0.01, opacity);
  return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
};
var menuPushAnimation = (menu) => {
  let contentOpenedX;
  let menuClosedX;
  const mode = getIonMode(menu);
  const width = menu.width;
  if (menu.isEndSide) {
    contentOpenedX = -width + "px";
    menuClosedX = width + "px";
  } else {
    contentOpenedX = width + "px";
    menuClosedX = -width + "px";
  }
  const menuAnimation = createAnimation().addElement(menu.menuInnerEl).fromTo("transform", `translateX(${menuClosedX})`, "translateX(0px)");
  const contentAnimation = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${contentOpenedX})`);
  const backdropAnimation = createAnimation().addElement(menu.backdropEl).fromTo("opacity", 0.01, 0.32);
  return baseAnimation(mode === "ios").addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
};
var menuRevealAnimation = (menu) => {
  const mode = getIonMode(menu);
  const openedX = menu.width * (menu.isEndSide ? -1 : 1) + "px";
  const contentOpen = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${openedX})`);
  return baseAnimation(mode === "ios").addAnimation(contentOpen);
};
var createMenuController = () => {
  const menuAnimations = /* @__PURE__ */ new Map();
  const menus = [];
  const open = (menu) => __async(void 0, null, function* () {
    const menuEl = yield get(menu, true);
    if (menuEl) {
      return menuEl.open();
    }
    return false;
  });
  const close = (menu) => __async(void 0, null, function* () {
    const menuEl = yield menu !== void 0 ? get(menu, true) : getOpen();
    if (menuEl !== void 0) {
      return menuEl.close();
    }
    return false;
  });
  const toggle = (menu) => __async(void 0, null, function* () {
    const menuEl = yield get(menu, true);
    if (menuEl) {
      return menuEl.toggle();
    }
    return false;
  });
  const enable = (shouldEnable, menu) => __async(void 0, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      menuEl.disabled = !shouldEnable;
    }
    return menuEl;
  });
  const swipeGesture = (shouldEnable, menu) => __async(void 0, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      menuEl.swipeGesture = shouldEnable;
    }
    return menuEl;
  });
  const isOpen = (menu) => __async(void 0, null, function* () {
    if (menu != null) {
      const menuEl = yield get(menu);
      return menuEl !== void 0 && menuEl.isOpen();
    } else {
      const menuEl = yield getOpen();
      return menuEl !== void 0;
    }
  });
  const isEnabled = (menu) => __async(void 0, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      return !menuEl.disabled;
    }
    return false;
  });
  const get = (menu, logOnMultipleSideMenus = false) => __async(void 0, null, function* () {
    yield waitUntilReady();
    if (menu === "start" || menu === "end") {
      const menuRefs = menus.filter((m) => m.side === menu && !m.disabled);
      if (menuRefs.length >= 1) {
        if (menuRefs.length > 1 && logOnMultipleSideMenus) {
          printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map((m) => m.el));
        }
        return menuRefs[0].el;
      }
      const sideMenuRefs = menus.filter((m) => m.side === menu);
      if (sideMenuRefs.length >= 1) {
        if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) {
          printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map((m) => m.el));
        }
        return sideMenuRefs[0].el;
      }
    } else if (menu != null) {
      return find((m) => m.menuId === menu);
    }
    const menuEl = find((m) => !m.disabled);
    if (menuEl) {
      return menuEl;
    }
    return menus.length > 0 ? menus[0].el : void 0;
  });
  const getOpen = () => __async(void 0, null, function* () {
    yield waitUntilReady();
    return _getOpenSync();
  });
  const getMenus = () => __async(void 0, null, function* () {
    yield waitUntilReady();
    return getMenusSync();
  });
  const isAnimating = () => __async(void 0, null, function* () {
    yield waitUntilReady();
    return isAnimatingSync();
  });
  const registerAnimation = (name, animation) => {
    menuAnimations.set(name, animation);
  };
  const _register = (menu) => {
    if (menus.indexOf(menu) < 0) {
      menus.push(menu);
    }
  };
  const _unregister = (menu) => {
    const index = menus.indexOf(menu);
    if (index > -1) {
      menus.splice(index, 1);
    }
  };
  const _setOpen = (menu, shouldOpen, animated, role) => __async(void 0, null, function* () {
    if (isAnimatingSync()) {
      return false;
    }
    if (shouldOpen) {
      const openedMenu = yield getOpen();
      if (openedMenu && menu.el !== openedMenu) {
        yield openedMenu.setOpen(false, false);
      }
    }
    return menu._setOpen(shouldOpen, animated, role);
  });
  const _createAnimation = (type, menuCmp) => {
    const animationBuilder = menuAnimations.get(type);
    if (!animationBuilder) {
      throw new Error("animation not registered");
    }
    const animation = animationBuilder(menuCmp);
    return animation;
  };
  const _getOpenSync = () => {
    return find((m) => m._isOpen);
  };
  const getMenusSync = () => {
    return menus.map((menu) => menu.el);
  };
  const isAnimatingSync = () => {
    return menus.some((menu) => menu.isAnimating);
  };
  const find = (predicate) => {
    const instance = menus.find(predicate);
    if (instance !== void 0) {
      return instance.el;
    }
    return void 0;
  };
  const waitUntilReady = () => {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu) => new Promise((resolve) => componentOnReady(menu, resolve))));
  };
  registerAnimation("reveal", menuRevealAnimation);
  registerAnimation("push", menuPushAnimation);
  registerAnimation("overlay", menuOverlayAnimation);
  doc === null || doc === void 0 ? void 0 : doc.addEventListener("ionBackButton", (ev) => {
    const openMenu = _getOpenSync();
    if (openMenu) {
      ev.detail.register(MENU_BACK_BUTTON_PRIORITY, () => {
        return openMenu.close();
      });
    }
  });
  return {
    registerAnimation,
    get,
    getMenus,
    getOpen,
    isEnabled,
    swipeGesture,
    isAnimating,
    isOpen,
    enable,
    toggle,
    close,
    open,
    _getOpenSync,
    _createAnimation,
    _register,
    _unregister,
    _setOpen
  };
};
var menuController = /* @__PURE__ */ createMenuController();

export {
  menuController
};
/*! Bundled license information:

@ionic/core/dist/esm/index-f9f5d018.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC1mOWY1ZDAxOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCB7IE1FTlVfQkFDS19CVVRUT05fUFJJT1JJVFkgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTg2NDEwMWEzLmpzJztcbmltcG9ydCB7IHAgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC03MzhkNzUwNC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudE9uUmVhZHkgfSBmcm9tICcuL2hlbHBlcnMtNzhlZmVlYzMuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtY2E4NmNmMzIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1lYWI1YTRjYS5qcyc7XG5cbi8qKlxuICogYmFzZUFuaW1hdGlvblxuICogQmFzZSBjbGFzcyB3aGljaCBpcyBleHRlbmRlZCBieSB0aGUgdmFyaW91cyB0eXBlcy4gRWFjaFxuICogdHlwZSB3aWxsIHByb3ZpZGUgdGhlaXIgb3duIGFuaW1hdGlvbnMgZm9yIG9wZW4gYW5kIGNsb3NlXG4gKiBhbmQgcmVnaXN0ZXJzIGl0c2VsZiB3aXRoIE1lbnUuXG4gKi9cbmNvbnN0IGJhc2VBbmltYXRpb24gPSBpc0lvcyA9PiB7XG4gIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vbW92ZW1lbnQuaHRtbCNtb3ZlbWVudC1tb3ZlbWVudC1pbi1vdXQtb2Ytc2NyZWVuLWJvdW5kc1xuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbiAgLyoqXG4gICAqIFwiQXBwbHkgdGhlIHNoYXJwIGN1cnZlIHRvIGl0ZW1zIHRlbXBvcmFyaWx5IGxlYXZpbmcgdGhlIHNjcmVlbiB0aGF0IG1heSByZXR1cm5cbiAgICogZnJvbSB0aGUgc2FtZSBleGl0IHBvaW50LiBXaGVuIHRoZXkgcmV0dXJuLCB1c2UgdGhlIGRlY2VsZXJhdGlvbiBjdXJ2ZS4gT24gbW9iaWxlLFxuICAgKiB0aGlzIHRyYW5zaXRpb24gdHlwaWNhbGx5IG9jY3VycyBvdmVyIDMwMG1zXCIgLS0gTUQgTW90aW9uIEd1aWRlXG4gICAqL1xuICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKCkuZHVyYXRpb24oaXNJb3MgPyA0MDAgOiAzMDApO1xufTtcblxuLyoqXG4gKiBNZW51IE92ZXJsYXkgVHlwZVxuICogVGhlIG1lbnUgc2xpZGVzIG92ZXIgdGhlIGNvbnRlbnQuIFRoZSBjb250ZW50XG4gKiBpdHNlbGYsIHdoaWNoIGlzIHVuZGVyIHRoZSBtZW51LCBkb2VzIG5vdCBtb3ZlLlxuICovXG5jb25zdCBtZW51T3ZlcmxheUFuaW1hdGlvbiA9IG1lbnUgPT4ge1xuICBsZXQgY2xvc2VkWDtcbiAgbGV0IG9wZW5lZFg7XG4gIGNvbnN0IHdpZHRoID0gbWVudS53aWR0aCArIDg7XG4gIGNvbnN0IG1lbnVBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgaWYgKG1lbnUuaXNFbmRTaWRlKSB7XG4gICAgLy8gcmlnaHQgc2lkZVxuICAgIGNsb3NlZFggPSB3aWR0aCArICdweCc7XG4gICAgb3BlbmVkWCA9ICcwcHgnO1xuICB9IGVsc2Uge1xuICAgIC8vIGxlZnQgc2lkZVxuICAgIGNsb3NlZFggPSAtd2lkdGggKyAncHgnO1xuICAgIG9wZW5lZFggPSAnMHB4JztcbiAgfVxuICBtZW51QW5pbWF0aW9uLmFkZEVsZW1lbnQobWVudS5tZW51SW5uZXJFbCkuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke2Nsb3NlZFh9KWAsIGB0cmFuc2xhdGVYKCR7b3BlbmVkWH0pYCk7XG4gIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKG1lbnUpO1xuICBjb25zdCBpc0lvcyA9IG1vZGUgPT09ICdpb3MnO1xuICBjb25zdCBvcGFjaXR5ID0gaXNJb3MgPyAwLjIgOiAwLjI1O1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KG1lbnUuYmFja2Ryb3BFbCkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgb3BhY2l0eSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uKGlzSW9zKS5hZGRBbmltYXRpb24oW21lbnVBbmltYXRpb24sIGJhY2tkcm9wQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1lbnUgUHVzaCBUeXBlXG4gKiBUaGUgY29udGVudCBzbGlkZXMgb3ZlciB0byByZXZlYWwgdGhlIG1lbnUgdW5kZXJuZWF0aC5cbiAqIFRoZSBtZW51IGl0c2VsZiBhbHNvIHNsaWRlcyBvdmVyIHRvIHJldmVhbCBpdHMgYmFkIHNlbGYuXG4gKi9cbmNvbnN0IG1lbnVQdXNoQW5pbWF0aW9uID0gbWVudSA9PiB7XG4gIGxldCBjb250ZW50T3BlbmVkWDtcbiAgbGV0IG1lbnVDbG9zZWRYO1xuICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZShtZW51KTtcbiAgY29uc3Qgd2lkdGggPSBtZW51LndpZHRoO1xuICBpZiAobWVudS5pc0VuZFNpZGUpIHtcbiAgICBjb250ZW50T3BlbmVkWCA9IC13aWR0aCArICdweCc7XG4gICAgbWVudUNsb3NlZFggPSB3aWR0aCArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudE9wZW5lZFggPSB3aWR0aCArICdweCc7XG4gICAgbWVudUNsb3NlZFggPSAtd2lkdGggKyAncHgnO1xuICB9XG4gIGNvbnN0IG1lbnVBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KG1lbnUubWVudUlubmVyRWwpLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHttZW51Q2xvc2VkWH0pYCwgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChtZW51LmNvbnRlbnRFbCkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJywgYHRyYW5zbGF0ZVgoJHtjb250ZW50T3BlbmVkWH0pYCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChtZW51LmJhY2tkcm9wRWwpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbihtb2RlID09PSAnaW9zJykuYWRkQW5pbWF0aW9uKFttZW51QW5pbWF0aW9uLCBjb250ZW50QW5pbWF0aW9uLCBiYWNrZHJvcEFuaW1hdGlvbl0pO1xufTtcblxuLyoqXG4gKiBNZW51IFJldmVhbCBUeXBlXG4gKiBUaGUgY29udGVudCBzbGlkZXMgb3ZlciB0byByZXZlYWwgdGhlIG1lbnUgdW5kZXJuZWF0aC5cbiAqIFRoZSBtZW51IGl0c2VsZiwgd2hpY2ggaXMgdW5kZXIgdGhlIGNvbnRlbnQsIGRvZXMgbm90IG1vdmUuXG4gKi9cbmNvbnN0IG1lbnVSZXZlYWxBbmltYXRpb24gPSBtZW51ID0+IHtcbiAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUobWVudSk7XG4gIGNvbnN0IG9wZW5lZFggPSBtZW51LndpZHRoICogKG1lbnUuaXNFbmRTaWRlID8gLTEgOiAxKSArICdweCc7XG4gIGNvbnN0IGNvbnRlbnRPcGVuID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChtZW51LmNvbnRlbnRFbCkgLy8gUkVWSUVXXG4gIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDBweCknLCBgdHJhbnNsYXRlWCgke29wZW5lZFh9KWApO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbihtb2RlID09PSAnaW9zJykuYWRkQW5pbWF0aW9uKGNvbnRlbnRPcGVuKTtcbn07XG5jb25zdCBjcmVhdGVNZW51Q29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgbWVudUFuaW1hdGlvbnMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lbnVzID0gW107XG4gIGNvbnN0IG9wZW4gPSBhc3luYyBtZW51ID0+IHtcbiAgICBjb25zdCBtZW51RWwgPSBhd2FpdCBnZXQobWVudSwgdHJ1ZSk7XG4gICAgaWYgKG1lbnVFbCkge1xuICAgICAgcmV0dXJuIG1lbnVFbC5vcGVuKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgY2xvc2UgPSBhc3luYyBtZW51ID0+IHtcbiAgICBjb25zdCBtZW51RWwgPSBhd2FpdCAobWVudSAhPT0gdW5kZWZpbmVkID8gZ2V0KG1lbnUsIHRydWUpIDogZ2V0T3BlbigpKTtcbiAgICBpZiAobWVudUVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBtZW51RWwuY2xvc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCB0b2dnbGUgPSBhc3luYyBtZW51ID0+IHtcbiAgICBjb25zdCBtZW51RWwgPSBhd2FpdCBnZXQobWVudSwgdHJ1ZSk7XG4gICAgaWYgKG1lbnVFbCkge1xuICAgICAgcmV0dXJuIG1lbnVFbC50b2dnbGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBlbmFibGUgPSBhc3luYyAoc2hvdWxkRW5hYmxlLCBtZW51KSA9PiB7XG4gICAgY29uc3QgbWVudUVsID0gYXdhaXQgZ2V0KG1lbnUpO1xuICAgIGlmIChtZW51RWwpIHtcbiAgICAgIG1lbnVFbC5kaXNhYmxlZCA9ICFzaG91bGRFbmFibGU7XG4gICAgfVxuICAgIHJldHVybiBtZW51RWw7XG4gIH07XG4gIGNvbnN0IHN3aXBlR2VzdHVyZSA9IGFzeW5jIChzaG91bGRFbmFibGUsIG1lbnUpID0+IHtcbiAgICBjb25zdCBtZW51RWwgPSBhd2FpdCBnZXQobWVudSk7XG4gICAgaWYgKG1lbnVFbCkge1xuICAgICAgbWVudUVsLnN3aXBlR2VzdHVyZSA9IHNob3VsZEVuYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVFbDtcbiAgfTtcbiAgY29uc3QgaXNPcGVuID0gYXN5bmMgbWVudSA9PiB7XG4gICAgaWYgKG1lbnUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgbWVudUVsID0gYXdhaXQgZ2V0KG1lbnUpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgICAgIHJldHVybiBtZW51RWwgIT09IHVuZGVmaW5lZCAmJiBtZW51RWwuaXNPcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IGdldE9wZW4oKTtcbiAgICAgIHJldHVybiBtZW51RWwgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGlzRW5hYmxlZCA9IGFzeW5jIG1lbnUgPT4ge1xuICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IGdldChtZW51KTtcbiAgICBpZiAobWVudUVsKSB7XG4gICAgICByZXR1cm4gIW1lbnVFbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgdGhlIG1lbnUgc3BlY2lmaWVkIGJ5IFwibWVudVwiIGlmIHJlZ2lzdGVyZWQuXG4gICAqIEBwYXJhbSBtZW51IC0gVGhlIHNpZGUgb3IgSUQgb2YgdGhlIGRlc2lyZWQgbWVudVxuICAgKiBAcGFyYW0gbG9nT25NdWx0aXBsZVNpZGVNZW51cyAtIElmIHRydWUsIHRoaXMgZnVuY3Rpb24gd2lsbCBsb2cgYSB3YXJuaW5nXG4gICAqIGlmIFwibWVudVwiIGlzIGEgc2lkZSBidXQgbXVsdGlwbGUgbWVudXMgb24gdGhlIHNhbWUgc2lkZSB3ZXJlIGZvdW5kLiBTaW5jZSB0aGlzIGZ1bmN0aW9uXG4gICAqIGlzIHVzZWQgaW4gbXVsdGlwbGUgcGxhY2VzLCB3ZSBkZWZhdWx0IHRoaXMgbG9nIHRvIGZhbHNlIHNvIHRoYXQgdGhlIGNhbGxpbmdcbiAgICogZnVuY3Rpb25zIGNhbiBjaG9vc2Ugd2hldGhlciBvciBub3QgaXQgaXMgYXBwcm9wcmlhdGUgdG8gbG9nIHRoaXMgd2FybmluZy5cbiAgICovXG4gIGNvbnN0IGdldCA9IGFzeW5jIChtZW51LCBsb2dPbk11bHRpcGxlU2lkZU1lbnVzID0gZmFsc2UpID0+IHtcbiAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xuICAgIGlmIChtZW51ID09PSAnc3RhcnQnIHx8IG1lbnUgPT09ICdlbmQnKSB7XG4gICAgICAvLyB0aGVyZSBjb3VsZCBiZSBtb3JlIHRoYW4gb25lIG1lbnUgb24gdGhlIHNhbWUgc2lkZVxuICAgICAgLy8gc28gZmlyc3QgdHJ5IHRvIGdldCB0aGUgZW5hYmxlZCBvbmVcbiAgICAgIGNvbnN0IG1lbnVSZWZzID0gbWVudXMuZmlsdGVyKG0gPT4gbS5zaWRlID09PSBtZW51ICYmICFtLmRpc2FibGVkKTtcbiAgICAgIGlmIChtZW51UmVmcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBpZiAobWVudVJlZnMubGVuZ3RoID4gMSAmJiBsb2dPbk11bHRpcGxlU2lkZU1lbnVzKSB7XG4gICAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBtZW51Q29udHJvbGxlciBxdWVyaWVkIGZvciBhIG1lbnUgb24gdGhlIFwiJHttZW51fVwiIHNpZGUsIGJ1dCAke21lbnVSZWZzLmxlbmd0aH0gbWVudXMgd2VyZSBmb3VuZC4gVGhlIGZpcnN0IG1lbnUgcmVmZXJlbmNlIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBub3QgdGhlIGJlaGF2aW9yIHlvdSB3YW50IHRoZW4gcGFzcyB0aGUgSUQgb2YgdGhlIG1lbnUgaW5zdGVhZCBvZiBpdHMgc2lkZS5gLCBtZW51UmVmcy5tYXAobSA9PiBtLmVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbnVSZWZzWzBdLmVsO1xuICAgICAgfVxuICAgICAgLy8gZGlkbid0IGZpbmQgYSBtZW51IHNpZGUgdGhhdCBpcyBlbmFibGVkXG4gICAgICAvLyBzbyB0cnkgdG8gZ2V0IHRoZSBmaXJzdCBtZW51IHNpZGUgZm91bmRcbiAgICAgIGNvbnN0IHNpZGVNZW51UmVmcyA9IG1lbnVzLmZpbHRlcihtID0+IG0uc2lkZSA9PT0gbWVudSk7XG4gICAgICBpZiAoc2lkZU1lbnVSZWZzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGlmIChzaWRlTWVudVJlZnMubGVuZ3RoID4gMSAmJiBsb2dPbk11bHRpcGxlU2lkZU1lbnVzKSB7XG4gICAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBtZW51Q29udHJvbGxlciBxdWVyaWVkIGZvciBhIG1lbnUgb24gdGhlIFwiJHttZW51fVwiIHNpZGUsIGJ1dCAke3NpZGVNZW51UmVmcy5sZW5ndGh9IG1lbnVzIHdlcmUgZm91bmQuIFRoZSBmaXJzdCBtZW51IHJlZmVyZW5jZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgbm90IHRoZSBiZWhhdmlvciB5b3Ugd2FudCB0aGVuIHBhc3MgdGhlIElEIG9mIHRoZSBtZW51IGluc3RlYWQgb2YgaXRzIHNpZGUuYCwgc2lkZU1lbnVSZWZzLm1hcChtID0+IG0uZWwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2lkZU1lbnVSZWZzWzBdLmVsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVudSAhPSBudWxsKSB7XG4gICAgICAvLyB0aGUgbWVudUlkIHdhcyBub3QgbGVmdCBvciByaWdodFxuICAgICAgLy8gc28gdHJ5IHRvIGdldCB0aGUgbWVudSBieSBpdHMgXCJpZFwiXG4gICAgICByZXR1cm4gZmluZChtID0+IG0ubWVudUlkID09PSBtZW51KTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBlbmFibGVkIG1lbnVcbiAgICBjb25zdCBtZW51RWwgPSBmaW5kKG0gPT4gIW0uZGlzYWJsZWQpO1xuICAgIGlmIChtZW51RWwpIHtcbiAgICAgIHJldHVybiBtZW51RWw7XG4gICAgfVxuICAgIC8vIGdldCB0aGUgZmlyc3QgbWVudSBpbiB0aGUgYXJyYXksIGlmIG9uZSBleGlzdHNcbiAgICByZXR1cm4gbWVudXMubGVuZ3RoID4gMCA/IG1lbnVzWzBdLmVsIDogdW5kZWZpbmVkO1xuICB9O1xuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgb3BlbmVkIG1lbnUuIFJldHVybnMgYG51bGxgIGlmIGEgbWVudSBpcyBub3QgZm91bmQuXG4gICAqL1xuICBjb25zdCBnZXRPcGVuID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gICAgcmV0dXJuIF9nZXRPcGVuU3luYygpO1xuICB9O1xuICAvKipcbiAgICogR2V0IGFsbCBtZW51IGluc3RhbmNlcy5cbiAgICovXG4gIGNvbnN0IGdldE1lbnVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gICAgcmV0dXJuIGdldE1lbnVzU3luYygpO1xuICB9O1xuICAvKipcbiAgICogR2V0IHdoZXRoZXIgb3Igbm90IGEgbWVudSBpcyBhbmltYXRpbmcuIFJldHVybnMgYHRydWVgIGlmIGFueVxuICAgKiBtZW51IGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAqL1xuICBjb25zdCBpc0FuaW1hdGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xuICAgIHJldHVybiBpc0FuaW1hdGluZ1N5bmMoKTtcbiAgfTtcbiAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb24gPSAobmFtZSwgYW5pbWF0aW9uKSA9PiB7XG4gICAgbWVudUFuaW1hdGlvbnMuc2V0KG5hbWUsIGFuaW1hdGlvbik7XG4gIH07XG4gIGNvbnN0IF9yZWdpc3RlciA9IG1lbnUgPT4ge1xuICAgIGlmIChtZW51cy5pbmRleE9mKG1lbnUpIDwgMCkge1xuICAgICAgbWVudXMucHVzaChtZW51KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IF91bnJlZ2lzdGVyID0gbWVudSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBtZW51cy5pbmRleE9mKG1lbnUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBtZW51cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX3NldE9wZW4gPSBhc3luYyAobWVudSwgc2hvdWxkT3BlbiwgYW5pbWF0ZWQsIHJvbGUpID0+IHtcbiAgICBpZiAoaXNBbmltYXRpbmdTeW5jKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNob3VsZE9wZW4pIHtcbiAgICAgIGNvbnN0IG9wZW5lZE1lbnUgPSBhd2FpdCBnZXRPcGVuKCk7XG4gICAgICBpZiAob3BlbmVkTWVudSAmJiBtZW51LmVsICE9PSBvcGVuZWRNZW51KSB7XG4gICAgICAgIGF3YWl0IG9wZW5lZE1lbnUuc2V0T3BlbihmYWxzZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVudS5fc2V0T3BlbihzaG91bGRPcGVuLCBhbmltYXRlZCwgcm9sZSk7XG4gIH07XG4gIGNvbnN0IF9jcmVhdGVBbmltYXRpb24gPSAodHlwZSwgbWVudUNtcCkgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBtZW51QW5pbWF0aW9ucy5nZXQodHlwZSk7IC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICBpZiAoIWFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW5pbWF0aW9uIG5vdCByZWdpc3RlcmVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIobWVudUNtcCk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfTtcbiAgY29uc3QgX2dldE9wZW5TeW5jID0gKCkgPT4ge1xuICAgIHJldHVybiBmaW5kKG0gPT4gbS5faXNPcGVuKTtcbiAgfTtcbiAgY29uc3QgZ2V0TWVudXNTeW5jID0gKCkgPT4ge1xuICAgIHJldHVybiBtZW51cy5tYXAobWVudSA9PiBtZW51LmVsKTtcbiAgfTtcbiAgY29uc3QgaXNBbmltYXRpbmdTeW5jID0gKCkgPT4ge1xuICAgIHJldHVybiBtZW51cy5zb21lKG1lbnUgPT4gbWVudS5pc0FuaW1hdGluZyk7XG4gIH07XG4gIGNvbnN0IGZpbmQgPSBwcmVkaWNhdGUgPT4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbWVudXMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuZWw7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG4gIGNvbnN0IHdhaXRVbnRpbFJlYWR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1tZW51JykpLm1hcChtZW51ID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeShtZW51LCByZXNvbHZlKSkpKTtcbiAgfTtcbiAgcmVnaXN0ZXJBbmltYXRpb24oJ3JldmVhbCcsIG1lbnVSZXZlYWxBbmltYXRpb24pO1xuICByZWdpc3RlckFuaW1hdGlvbigncHVzaCcsIG1lbnVQdXNoQW5pbWF0aW9uKTtcbiAgcmVnaXN0ZXJBbmltYXRpb24oJ292ZXJsYXknLCBtZW51T3ZlcmxheUFuaW1hdGlvbik7XG4gIGRvYyA9PT0gbnVsbCB8fCBkb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25CYWNrQnV0dG9uJywgZXYgPT4ge1xuICAgIGNvbnN0IG9wZW5NZW51ID0gX2dldE9wZW5TeW5jKCk7XG4gICAgaWYgKG9wZW5NZW51KSB7XG4gICAgICBldi5kZXRhaWwucmVnaXN0ZXIoTUVOVV9CQUNLX0JVVFRPTl9QUklPUklUWSwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3Blbk1lbnUuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJBbmltYXRpb24sXG4gICAgZ2V0LFxuICAgIGdldE1lbnVzLFxuICAgIGdldE9wZW4sXG4gICAgaXNFbmFibGVkLFxuICAgIHN3aXBlR2VzdHVyZSxcbiAgICBpc0FuaW1hdGluZyxcbiAgICBpc09wZW4sXG4gICAgZW5hYmxlLFxuICAgIHRvZ2dsZSxcbiAgICBjbG9zZSxcbiAgICBvcGVuLFxuICAgIF9nZXRPcGVuU3luYyxcbiAgICBfY3JlYXRlQW5pbWF0aW9uLFxuICAgIF9yZWdpc3RlcixcbiAgICBfdW5yZWdpc3RlcixcbiAgICBfc2V0T3BlblxuICB9O1xufTtcbmNvbnN0IG1lbnVDb250cm9sbGVyID0gLypAX19QVVJFX18qL2NyZWF0ZU1lbnVDb250cm9sbGVyKCk7XG5leHBvcnQgeyBtZW51Q29udHJvbGxlciBhcyBtIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxJQUFNLGdCQUFnQixXQUFTO0FBUTdCLFNBQU8sZ0JBQWdCLEVBQUUsU0FBUyxRQUFRLE1BQU0sR0FBRztBQUNyRDtBQU9BLElBQU0sdUJBQXVCLFVBQVE7QUFDbkMsTUFBSTtBQUNKLE1BQUk7QUFDSixRQUFNLFFBQVEsS0FBSyxRQUFRO0FBQzNCLFFBQU0sZ0JBQWdCLGdCQUFnQjtBQUN0QyxRQUFNLG9CQUFvQixnQkFBZ0I7QUFDMUMsTUFBSSxLQUFLLFdBQVc7QUFFbEIsY0FBVSxRQUFRO0FBQ2xCLGNBQVU7QUFBQSxFQUNaLE9BQU87QUFFTCxjQUFVLENBQUMsUUFBUTtBQUNuQixjQUFVO0FBQUEsRUFDWjtBQUNBLGdCQUFjLFdBQVcsS0FBSyxXQUFXLEVBQUUsT0FBTyxhQUFhLGNBQWMsT0FBTyxLQUFLLGNBQWMsT0FBTyxHQUFHO0FBQ2pILFFBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsUUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBTSxVQUFVLFFBQVEsTUFBTTtBQUM5QixvQkFBa0IsV0FBVyxLQUFLLFVBQVUsRUFBRSxPQUFPLFdBQVcsTUFBTSxPQUFPO0FBQzdFLFNBQU8sY0FBYyxLQUFLLEVBQUUsYUFBYSxDQUFDLGVBQWUsaUJBQWlCLENBQUM7QUFDN0U7QUFPQSxJQUFNLG9CQUFvQixVQUFRO0FBQ2hDLE1BQUk7QUFDSixNQUFJO0FBQ0osUUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixRQUFNLFFBQVEsS0FBSztBQUNuQixNQUFJLEtBQUssV0FBVztBQUNsQixxQkFBaUIsQ0FBQyxRQUFRO0FBQzFCLGtCQUFjLFFBQVE7QUFBQSxFQUN4QixPQUFPO0FBQ0wscUJBQWlCLFFBQVE7QUFDekIsa0JBQWMsQ0FBQyxRQUFRO0FBQUEsRUFDekI7QUFDQSxRQUFNLGdCQUFnQixnQkFBZ0IsRUFBRSxXQUFXLEtBQUssV0FBVyxFQUFFLE9BQU8sYUFBYSxjQUFjLFdBQVcsS0FBSyxpQkFBaUI7QUFDeEksUUFBTSxtQkFBbUIsZ0JBQWdCLEVBQUUsV0FBVyxLQUFLLFNBQVMsRUFBRSxPQUFPLGFBQWEsbUJBQW1CLGNBQWMsY0FBYyxHQUFHO0FBQzVJLFFBQU0sb0JBQW9CLGdCQUFnQixFQUFFLFdBQVcsS0FBSyxVQUFVLEVBQUUsT0FBTyxXQUFXLE1BQU0sSUFBSTtBQUNwRyxTQUFPLGNBQWMsU0FBUyxLQUFLLEVBQUUsYUFBYSxDQUFDLGVBQWUsa0JBQWtCLGlCQUFpQixDQUFDO0FBQ3hHO0FBT0EsSUFBTSxzQkFBc0IsVUFBUTtBQUNsQyxRQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFFBQU0sVUFBVSxLQUFLLFNBQVMsS0FBSyxZQUFZLEtBQUssS0FBSztBQUN6RCxRQUFNLGNBQWMsZ0JBQWdCLEVBQUUsV0FBVyxLQUFLLFNBQVMsRUFDOUQsT0FBTyxhQUFhLG1CQUFtQixjQUFjLE9BQU8sR0FBRztBQUNoRSxTQUFPLGNBQWMsU0FBUyxLQUFLLEVBQUUsYUFBYSxXQUFXO0FBQy9EO0FBQ0EsSUFBTSx1QkFBdUIsTUFBTTtBQUNqQyxRQUFNLGlCQUFpQixvQkFBSSxJQUFJO0FBQy9CLFFBQU0sUUFBUSxDQUFDO0FBQ2YsUUFBTSxPQUFPLENBQU0sU0FBUTtBQUN6QixVQUFNLFNBQVMsTUFBTSxJQUFJLE1BQU0sSUFBSTtBQUNuQyxRQUFJLFFBQVE7QUFDVixhQUFPLE9BQU8sS0FBSztBQUFBLElBQ3JCO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFFBQVEsQ0FBTSxTQUFRO0FBQzFCLFVBQU0sU0FBUyxNQUFPLFNBQVMsU0FBWSxJQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDckUsUUFBSSxXQUFXLFFBQVc7QUFDeEIsYUFBTyxPQUFPLE1BQU07QUFBQSxJQUN0QjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxTQUFTLENBQU0sU0FBUTtBQUMzQixVQUFNLFNBQVMsTUFBTSxJQUFJLE1BQU0sSUFBSTtBQUNuQyxRQUFJLFFBQVE7QUFDVixhQUFPLE9BQU8sT0FBTztBQUFBLElBQ3ZCO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFNBQVMsQ0FBTyxjQUFjLFNBQVM7QUFDM0MsVUFBTSxTQUFTLE1BQU0sSUFBSSxJQUFJO0FBQzdCLFFBQUksUUFBUTtBQUNWLGFBQU8sV0FBVyxDQUFDO0FBQUEsSUFDckI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sZUFBZSxDQUFPLGNBQWMsU0FBUztBQUNqRCxVQUFNLFNBQVMsTUFBTSxJQUFJLElBQUk7QUFDN0IsUUFBSSxRQUFRO0FBQ1YsYUFBTyxlQUFlO0FBQUEsSUFDeEI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sU0FBUyxDQUFNLFNBQVE7QUFDM0IsUUFBSSxRQUFRLE1BQU07QUFDaEIsWUFBTSxTQUFTLE1BQU0sSUFBSSxJQUFJO0FBRTdCLGFBQU8sV0FBVyxVQUFhLE9BQU8sT0FBTztBQUFBLElBQy9DLE9BQU87QUFDTCxZQUFNLFNBQVMsTUFBTSxRQUFRO0FBQzdCLGFBQU8sV0FBVztBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUNBLFFBQU0sWUFBWSxDQUFNLFNBQVE7QUFDOUIsVUFBTSxTQUFTLE1BQU0sSUFBSSxJQUFJO0FBQzdCLFFBQUksUUFBUTtBQUNWLGFBQU8sQ0FBQyxPQUFPO0FBQUEsSUFDakI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQVNBLFFBQU0sTUFBTSxDQUFPLE1BQU0seUJBQXlCLFVBQVU7QUFDMUQsVUFBTSxlQUFlO0FBQ3JCLFFBQUksU0FBUyxXQUFXLFNBQVMsT0FBTztBQUd0QyxZQUFNLFdBQVcsTUFBTSxPQUFPLE9BQUssRUFBRSxTQUFTLFFBQVEsQ0FBQyxFQUFFLFFBQVE7QUFDakUsVUFBSSxTQUFTLFVBQVUsR0FBRztBQUN4QixZQUFJLFNBQVMsU0FBUyxLQUFLLHdCQUF3QjtBQUNqRCwwQkFBZ0IsNkNBQTZDLElBQUksZUFBZSxTQUFTLE1BQU0sb0pBQW9KLFNBQVMsSUFBSSxPQUFLLEVBQUUsRUFBRSxDQUFDO0FBQUEsUUFDNVE7QUFDQSxlQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQUEsTUFDckI7QUFHQSxZQUFNLGVBQWUsTUFBTSxPQUFPLE9BQUssRUFBRSxTQUFTLElBQUk7QUFDdEQsVUFBSSxhQUFhLFVBQVUsR0FBRztBQUM1QixZQUFJLGFBQWEsU0FBUyxLQUFLLHdCQUF3QjtBQUNyRCwwQkFBZ0IsNkNBQTZDLElBQUksZUFBZSxhQUFhLE1BQU0sb0pBQW9KLGFBQWEsSUFBSSxPQUFLLEVBQUUsRUFBRSxDQUFDO0FBQUEsUUFDcFI7QUFDQSxlQUFPLGFBQWEsQ0FBQyxFQUFFO0FBQUEsTUFDekI7QUFBQSxJQUNGLFdBQVcsUUFBUSxNQUFNO0FBR3ZCLGFBQU8sS0FBSyxPQUFLLEVBQUUsV0FBVyxJQUFJO0FBQUEsSUFDcEM7QUFFQSxVQUFNLFNBQVMsS0FBSyxPQUFLLENBQUMsRUFBRSxRQUFRO0FBQ3BDLFFBQUksUUFBUTtBQUNWLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLO0FBQUEsRUFDMUM7QUFJQSxRQUFNLFVBQVUsTUFBWTtBQUMxQixVQUFNLGVBQWU7QUFDckIsV0FBTyxhQUFhO0FBQUEsRUFDdEI7QUFJQSxRQUFNLFdBQVcsTUFBWTtBQUMzQixVQUFNLGVBQWU7QUFDckIsV0FBTyxhQUFhO0FBQUEsRUFDdEI7QUFLQSxRQUFNLGNBQWMsTUFBWTtBQUM5QixVQUFNLGVBQWU7QUFDckIsV0FBTyxnQkFBZ0I7QUFBQSxFQUN6QjtBQUNBLFFBQU0sb0JBQW9CLENBQUMsTUFBTSxjQUFjO0FBQzdDLG1CQUFlLElBQUksTUFBTSxTQUFTO0FBQUEsRUFDcEM7QUFDQSxRQUFNLFlBQVksVUFBUTtBQUN4QixRQUFJLE1BQU0sUUFBUSxJQUFJLElBQUksR0FBRztBQUMzQixZQUFNLEtBQUssSUFBSTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUNBLFFBQU0sY0FBYyxVQUFRO0FBQzFCLFVBQU0sUUFBUSxNQUFNLFFBQVEsSUFBSTtBQUNoQyxRQUFJLFFBQVEsSUFBSTtBQUNkLFlBQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFdBQVcsQ0FBTyxNQUFNLFlBQVksVUFBVSxTQUFTO0FBQzNELFFBQUksZ0JBQWdCLEdBQUc7QUFDckIsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLFlBQVk7QUFDZCxZQUFNLGFBQWEsTUFBTSxRQUFRO0FBQ2pDLFVBQUksY0FBYyxLQUFLLE9BQU8sWUFBWTtBQUN4QyxjQUFNLFdBQVcsUUFBUSxPQUFPLEtBQUs7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFDQSxXQUFPLEtBQUssU0FBUyxZQUFZLFVBQVUsSUFBSTtBQUFBLEVBQ2pEO0FBQ0EsUUFBTSxtQkFBbUIsQ0FBQyxNQUFNLFlBQVk7QUFDMUMsVUFBTSxtQkFBbUIsZUFBZSxJQUFJLElBQUk7QUFDaEQsUUFBSSxDQUFDLGtCQUFrQjtBQUNyQixZQUFNLElBQUksTUFBTSwwQkFBMEI7QUFBQSxJQUM1QztBQUNBLFVBQU0sWUFBWSxpQkFBaUIsT0FBTztBQUMxQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQU8sS0FBSyxPQUFLLEVBQUUsT0FBTztBQUFBLEVBQzVCO0FBQ0EsUUFBTSxlQUFlLE1BQU07QUFDekIsV0FBTyxNQUFNLElBQUksVUFBUSxLQUFLLEVBQUU7QUFBQSxFQUNsQztBQUNBLFFBQU0sa0JBQWtCLE1BQU07QUFDNUIsV0FBTyxNQUFNLEtBQUssVUFBUSxLQUFLLFdBQVc7QUFBQSxFQUM1QztBQUNBLFFBQU0sT0FBTyxlQUFhO0FBQ3hCLFVBQU0sV0FBVyxNQUFNLEtBQUssU0FBUztBQUNyQyxRQUFJLGFBQWEsUUFBVztBQUMxQixhQUFPLFNBQVM7QUFBQSxJQUNsQjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixXQUFPLFFBQVEsSUFBSSxNQUFNLEtBQUssU0FBUyxpQkFBaUIsVUFBVSxDQUFDLEVBQUUsSUFBSSxVQUFRLElBQUksUUFBUSxhQUFXLGlCQUFpQixNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzSTtBQUNBLG9CQUFrQixVQUFVLG1CQUFtQjtBQUMvQyxvQkFBa0IsUUFBUSxpQkFBaUI7QUFDM0Msb0JBQWtCLFdBQVcsb0JBQW9CO0FBQ2pELFVBQVEsUUFBUSxRQUFRLFNBQVMsU0FBUyxJQUFJLGlCQUFpQixpQkFBaUIsUUFBTTtBQUNwRixVQUFNLFdBQVcsYUFBYTtBQUM5QixRQUFJLFVBQVU7QUFDWixTQUFHLE9BQU8sU0FBUywyQkFBMkIsTUFBTTtBQUNsRCxlQUFPLFNBQVMsTUFBTTtBQUFBLE1BQ3hCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0QsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxpQkFBOEIscUNBQXFCOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
