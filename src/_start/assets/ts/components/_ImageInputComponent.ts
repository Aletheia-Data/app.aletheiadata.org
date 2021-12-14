import { DataUtil } from "../_utils/_DataUtil";
// Utils
import { EventHandlerUtil } from "../_utils/EventHandlerUtil";
// Helpers
import { getUniqueIdWithPrefix } from "../_utils/helpers/types-helpers/_getUniqueIdWithPrefix";
import { ElementStyleUtil } from "../_utils/_ElementStyleUtil";

export interface ImageInputOptions {
  editable: boolean;
}

const defaultImageInputOptions: ImageInputOptions = {
  editable: false,
};

class ImageInputComponent {
  element: HTMLElement;
  inputElement: HTMLInputElement;
  wrapperElement: HTMLElement;
  cancelElement: HTMLElement;
  removeElement: HTMLElement;
  hiddenElement: HTMLInputElement;
  src: string;
  options: ImageInputOptions;
  instanceUid: string;

  constructor(_element: HTMLElement, options: ImageInputOptions) {
    this.element = _element;
    this.options = Object.assign(defaultImageInputOptions, options);
    this.instanceUid = getUniqueIdWithPrefix("imageinput");
    this.element = _element;
    this.inputElement = _element.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    this.wrapperElement = _element.querySelector(
      ".image-input-wrapper"
    ) as HTMLElement;
    this.cancelElement = _element.querySelector(
      '[data-kt-imageinput-action="cancel"]'
    ) as HTMLElement;
    this.removeElement = _element.querySelector(
      '[data-kt-imageinput-action="remove"]'
    ) as HTMLElement;
    this.hiddenElement = _element.querySelector(
      'input[type="hidden"]'
    ) as HTMLInputElement;
    this.src = ElementStyleUtil.get(this.wrapperElement, "backgroundImage");

    // Event Handlers
    this._handlers();

    // Bind Instance
    DataUtil.set(this.element, "imageinput", this);
  }

  private _handlers = () => {
    this.inputElement.addEventListener("change", this.change);
    this.cancelElement.addEventListener("click", this.cancel);
    this.removeElement.addEventListener("click", this.remove);
  };

  // Event Handlers
  private change = (e: Event) => {
    e.preventDefault();

    if (
      this.inputElement !== null &&
      this.inputElement.files &&
      this.inputElement.files[0]
    ) {
      // Fire change event
      if (
        EventHandlerUtil.trigger(this.element, "kt.imageinput.change", e) ===
        false
      ) {
        return;
      }
      var reader = new FileReader();

      reader.onload = (_e) => {
        ElementStyleUtil.set(
          this.wrapperElement,
          "background-image",
          "url(" + _e.target?.result + ")"
        );
      };

      reader.readAsDataURL(this.inputElement.files[0]);

      this.element.classList.add("image-input-changed");
      this.element.classList.remove("image-input-empty");

      // Fire change event
      EventHandlerUtil.trigger(this.element, "kt.imageinput.changed", e);
    }
  };

  private cancel = (e: Event) => {
    e.preventDefault();
    

    // Fire cancel event
    if (EventHandlerUtil.trigger(this.element, "kt.imageinput.cancel", e) === false) {
      return;
    };

    this.element.classList.remove("image-input-changed");
    this.element.classList.remove("image-input-empty");
    ElementStyleUtil.set(this.wrapperElement, "background-image", this.src);
    this.inputElement.value = "";
    if (this.hiddenElement) {
      this.hiddenElement.value = "0";
    }

    EventHandlerUtil.trigger(this.element, "kt.imageinput.canceled", e)
  };

  private remove = (e: Event) => {
    e.preventDefault();

    // Fire cancel event
    if (EventHandlerUtil.trigger(this.element, "kt.imageinput.remove", e) === false) {
      return;
    };

    this.element.classList.remove("image-input-changed");
    this.element.classList.add("image-input-empty");
    ElementStyleUtil.set(this.wrapperElement, "background-image", "none");
    this.inputElement.value = "";

    if (this.hiddenElement) {
      this.hiddenElement.value = "1";
    }

    EventHandlerUtil.trigger(this.element, "kt.imageinput.removed", e)

  };

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public getInputElement = () => {
    return this.inputElement;
  };

  public goElement = () => {
    return this.element;
  };

  // Event API
  public on = (name: string, handler: Function) => {
    return EventHandlerUtil.on(this.element, name, handler);
  };

  public one = (name: string, handler: Function) => {
    return EventHandlerUtil.one(this.element, name, handler);
  };

  public off = (name: string) => {
    return EventHandlerUtil.off(this.element, name);
  };

  public trigger = (name: string, event: Event) => {
    return EventHandlerUtil.trigger(this.element, name, event);
  };

  // Static methods
  public static hasInstace(element: HTMLElement): boolean {
    return DataUtil.has(element, "imageinput");
  }

  public static getInstance(
    element: HTMLElement
  ): ImageInputComponent | undefined {
    if (element !== null && ImageInputComponent.hasInstace(element)) {
      return DataUtil.get(element, "imageinput");
    }
  }

  // Create Instances
  public static createInstances(selector: string): void {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach(element => {
      const item = element as HTMLElement;
      let imageInput = ImageInputComponent.getInstance(item);
      if (!imageInput) {
        imageInput = new ImageInputComponent(item, defaultImageInputOptions);
      }
    });
  }

  public static bootstrap(attr: string = "[data-imageinput]") {
    ImageInputComponent.createInstances(attr);
  }
}

export { ImageInputComponent, defaultImageInputOptions };
