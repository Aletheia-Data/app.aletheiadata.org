// import { DataUtil } from "../_utils/_DataUtil";
// // Utils
// import { ElementAnimateUtil } from "../_utils/ElementAnimateUtil";
// import { EventHandlerUtil } from "../_utils/EventHandlerUtil";
// // Helpers
import { getScrollTop } from "../_utils/helpers/dom-helpers/_getScrollTop";
// import { getUniqueIdWithPrefix } from "../_utils/helpers/types-helpers/_getUniqueIdWithPrefix";
import { getObjectPropertyValueByKey } from "../_utils/helpers/types-helpers/_getObjectPropertyValueByKey";
import { stringSnakeToCamel } from "../_utils/helpers/types-helpers/_stringSnakeToCamel";
import { getAttributeValueByBreakpoint } from "../_utils/helpers/getAttributeValueByBreakpoint";
import { throttle } from "../_utils/helpers/dom-helpers/_throttle";

import { getUniqueIdWithPrefix } from "../_utils/helpers/types-helpers/_getUniqueIdWithPrefix";
import { DataUtil } from "../_utils/_DataUtil";
import { ElementAnimateUtil } from "../_utils/ElementAnimateUtil";

export interface ScrollTopOptions {
  offset: number;
  speed: number;
}

const defaultScrollTopOptions: ScrollTopOptions = {
  offset: 200,
  speed: 600,
};

class ScrollTopComponent {
  element: HTMLElement;
  options: ScrollTopOptions;
  instanceUid: string;

  constructor(_element: HTMLElement, options: ScrollTopOptions) {
    this.element = _element;
    this.options = Object.assign(defaultScrollTopOptions, options);
    this.instanceUid = getUniqueIdWithPrefix("scrolltop");

    // Event Handlers
    this._handlers();

    // Bind Instance
    DataUtil.set(this.element, "scrolltop", this);
  }

  private _handlers = () => {
    let timer: number;
    window.addEventListener("scroll", () => {
      throttle(timer, () => {
        this._scroll();
      });
    });

    this.element.addEventListener("click", (e: Event) => {
      e.preventDefault();
      this._go();
    });
  };

  private _scroll = () => {
    const offset = parseInt(this._getOption("offset") as string);
    const pos = getScrollTop(); // current vertical position
    if (pos > offset) {
      if (!document.body.hasAttribute("data-kt-scrolltop")) {
        document.body.setAttribute("data-kt-scrolltop", "on");
      }
    } else {
      if (document.body.hasAttribute("data-kt-scrolltop")) {
        document.body.removeAttribute("data-kt-scrolltop");
      }
    }
  };

  private _go = () => {
    const speed = parseInt(this._getOption("speed") as string);
    ElementAnimateUtil.scrollTop(0, speed);
  };

  private _getOption = (name: string) => {
    const attr = this.element.getAttribute(`data-kt-scrolltop-${name}`);
    if (attr) {
      const value = getAttributeValueByBreakpoint(attr);
      return value !== null && String(value) === "true";
    }

    const optionName = stringSnakeToCamel(name);
    const option = getObjectPropertyValueByKey(this.options, optionName);
    if (option) {
      return getAttributeValueByBreakpoint(option);
    }

    return null;
  };

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////

  // Plugin API
  public go = () => {
    return this._go();
  };

  public getElement = () => {
    return this.element;
  };

  // Static methods
  public static getInstance = (el: HTMLElement) => {
    const scrollTop = DataUtil.get(el, "scrolltop");
    if (scrollTop) {
      return scrollTop;
    }

    return null;
  };

  public static createInstances = (selector: string) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
      const item = el as HTMLElement;
      let scrollTop = ScrollTopComponent.getInstance(item);
      if (!scrollTop) {
        scrollTop = new ScrollTopComponent(item, defaultScrollTopOptions);
      }
    });
  };

  public static createInsance = (
    selector: string,
    options: ScrollTopOptions = defaultScrollTopOptions
  ): ScrollTopComponent | undefined => {
    const element = document.body.querySelector(selector);
    if (!element) {
      return;
    }
    const item = element as HTMLElement;
    let scrollTop = ScrollTopComponent.getInstance(item);
    if (!scrollTop) {
      scrollTop = new ScrollTopComponent(item, options);
    }
    return scrollTop;
  };

  public static bootstrap = () => {
    ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
  };

  public static reinitialization = () => {
    ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
  }

  public static goTop = () => {
    ElementAnimateUtil.scrollTop(0, defaultScrollTopOptions.speed);
  }
}
export { ScrollTopComponent, defaultScrollTopOptions };
