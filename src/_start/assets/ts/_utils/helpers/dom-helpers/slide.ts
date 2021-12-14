import { isVisibleElement } from "./_isVisibleElement";
import { getElementActualHeight } from "./_getElementActual";
import { ElementStyleUtil } from "../../_ElementStyleUtil";
import { DataUtil } from "../../_DataUtil";
import { ElementAnimateUtil } from "../../ElementAnimateUtil";

export function slide(
  el: HTMLElement,
  dir: string,
  speed: number,
  callback: any
) {
  if (
    !el ||
    (dir === "up" && isVisibleElement(el) === false) ||
    (dir === "down" && isVisibleElement(el) === true)
  ) {
    return;
  }

  speed = speed ? speed : 600;
  let calcHeight = getElementActualHeight(el);
  let calcPaddingTop: number = 0;
  let calcPaddingBottom: number = 0;

  if (
    ElementStyleUtil.get(el, "padding-top") &&
    DataUtil.get(el, "slide-padding-top") !== true
  ) {
    DataUtil.set(
      el,
      "slide-padding-top",
      ElementStyleUtil.get(el, "padding-top")
    );
  }

  if (
    ElementStyleUtil.get(el, "padding-bottom") &&
    DataUtil.has(el, "slide-padding-bottom") !== true
  ) {
    DataUtil.set(
      el,
      "slide-padding-bottom",
      ElementStyleUtil.get(el, "padding-bottom")
    );
  }

  if (DataUtil.has(el, "slide-padding-top")) {
    calcPaddingTop = parseInt(DataUtil.get(el, "slide-padding-top"));
  }

  if (DataUtil.has(el, "slide-padding-bottom")) {
    calcPaddingBottom = parseInt(DataUtil.get(el, "slide-padding-bottom"));
  }

  if (dir === "up") {
    // up
    el.style.cssText = "display: block; overflow: hidden;";

    if (calcPaddingTop) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingTop,
        speed,
        function (value: number) {
          el.style.paddingTop = calcPaddingTop - value + "px";
        }
      );
    }

    if (calcPaddingBottom) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingBottom,
        speed,
        function (value: number) {
          el.style.paddingBottom = calcPaddingBottom - value + "px";
        }
      );
    }

    ElementAnimateUtil.animate(
      0,
      calcHeight || 0,
      speed,
      function (value: number) {
        el.style.height = (calcHeight || 0) - value + "px";
      },
      function () {
        el.style.height = "";
        el.style.display = "none";

        if (typeof callback === "function") {
          callback();
        }
      }
    );
  } else if (dir === "down") {
    // down
    el.style.cssText = "display: block; overflow: hidden;";

    if (calcPaddingTop) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingTop,
        speed,
        function (value: number) {
          //
          el.style.paddingTop = value + "px";
        },
        function () {
          el.style.paddingTop = "";
        }
      );
    }

    if (calcPaddingBottom) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingBottom,
        speed,
        function (value: number) {
          el.style.paddingBottom = value + "px";
        },
        function () {
          el.style.paddingBottom = "";
        }
      );
    }

    ElementAnimateUtil.animate(
      0,
      (calcHeight || 0),
      speed,
      function (value: number) {
        el.style.height = value + "px";
      },
      function () {
        el.style.height = "";
        el.style.display = "";
        el.style.overflow = "";

        if (typeof callback === "function") {
          callback();
        }
      }
    );
  }
}

export function slideUp(el: HTMLElement, speed: number, callback: any) {
  slide(el, "up", speed, callback);
}

export function slideDown(el: HTMLElement, speed: number, callback: any) {
  slide(el, "down", speed, callback);
}
