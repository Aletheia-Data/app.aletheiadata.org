import { DataUtil } from "../_utils/_DataUtil";
// Helpers
import { getUniqueIdWithPrefix } from "../_utils/helpers/types-helpers/_getUniqueIdWithPrefix";
import { getAttributeValueByBreakpoint } from "../_utils/helpers/getAttributeValueByBreakpoint";
import { stringSnakeToCamel } from "../_utils/helpers/types-helpers/_stringSnakeToCamel";
import { getObjectPropertyValueByKey } from "../_utils/helpers/types-helpers/_getObjectPropertyValueByKey";
import { defaultMenuOptions, MenuComponent } from "./MenuComponent";

const dNone = 'd-none';

export interface SearchOptions {
  minLength: number;
  keypress: boolean;
  enter: boolean;
  mode: string;
  remember: boolean;
  inputFocus: boolean;
  process?: Function;
}

const defaultSearchOptions: SearchOptions = {
 minLength: 3,
 keypress: true,
 enter: true,
 mode: 'inline',
 remember: true,
 inputFocus: true
};

class SearchComponent {
  element: HTMLElement;
  options: SearchOptions;
  instanceUid: string;
  processing: boolean = false;
  mode: any;
  triggerElement: HTMLElement | null = null;
  inputElement: HTMLInputElement | null = null;
  spinnerElement: HTMLElement | null = null;
  clearElement: HTMLElement | null = null;
  resultsElement: HTMLElement | null = null;
  suggestionsElement: HTMLElement | null = null;
  emptyElement: HTMLElement | null = null;
  menu: HTMLElement | null = null;
  menuObject: MenuComponent | null = null;

  constructor(_element: HTMLElement, options: SearchOptions) {
    this.element = _element;
    this.options = Object.assign(defaultSearchOptions, options);
    this.instanceUid = getUniqueIdWithPrefix("search");
    this.processing = false;

    // Elements
    this.mode = this._getOption('mode');
    this.triggerElement = document.querySelector(this._getSelector('trigger'));
    this.inputElement = document.querySelector(this._getSelector('input'));
    this.spinnerElement = document.querySelector(this._getSelector('spinner'));
    this.clearElement = document.querySelector(this._getSelector('clear'));
    this.resultsElement = document.querySelector(this._getSelector('results'));
    this.suggestionsElement = document.querySelector(this._getSelector('suggestions'));
    this.emptyElement = document.querySelector(this._getSelector('empty'));
    if (this.mode === 'menu') {
      const attr = this.element.getAttribute('data-kt-menu-target');
      if (attr) {
        this.menu = document.querySelector(attr);
        if (this.menu) {
          this.menuObject = new MenuComponent(this.menu, defaultMenuOptions);
        }
      }
    } else if (this.mode === 'inline') {
      this.menu = this.element.closest('[data-kt-menu]');
      if (this.menu) {
        this.menuObject = MenuComponent.getInstance(this.menu);
        if (this.menuObject && this._getOption('input-focue') === true) {
          this.menuObject.on('kt.menu.dropdown.shown', () => {
            this.inputElement?.focus();
          });
        }
      }
    }

    // Event Handlers
    this._handlers();

    // Bind Instance
    DataUtil.set(this.element, "search", this);
  }

  private _clear = () => {
    if (this.inputElement) {
      this.inputElement.value = '';
      this.inputElement.focus();
    }

    this.clearElement?.classList.add(dNone);
    if (this.emptyElement) {
      this.emptyElement.innerHTML = '';
      this.emptyElement.classList.add(dNone);
    }

    if (this.resultsElement) {
      this.resultsElement.innerHTML = '';
      this.resultsElement.classList.add(dNone);
    }

    if (this.suggestionsElement) {
      this.suggestionsElement.classList.remove(dNone);
    } else {
      if (this.mode === 'menu') {
        this.menuObject?.show(this.element);
      }
    }
  }

  private _getSelector = (name: string): string => {
    const emptySelector = '#empty-selector';
    const trigger = this._getOption('trigger');
    return typeof trigger === 'string' ? trigger : emptySelector;
  }

  private _handlers = () => {
    // Focus
    this.inputElement?.addEventListener('focus', this._focus);
    // Blur
    this.inputElement?.addEventListener('blur', this._blur);
    // Trigger
    this.triggerElement?.addEventListener('click', this._search);
    // Keypress
    if (this._getOption('keypress') === true) {
      this.inputElement?.addEventListener('keyup', this._keypress);
    }
    // Enter
    if (this._getOption('enter') === true) {
      this.inputElement?.addEventListener('keypress', (e: KeyboardEvent) => {
        const key = e.code || '';
        if (key === 'Enter') {
          e.preventDefault();
          this._search();
        }

      });
    }
    // Clear
    this.clearElement?.addEventListener('click', this._clear);
  }

  private _search = () => {
    if (!this.processing && this.options.process) {
      this._start();
      this.processing = true;
      this.options.process.call(this);
    }
  }

  private _focus = () => {
    this.element.classList.add('focus');
    if (this.mode === 'menu') {
      if (this.suggestionsElement || (this.resultsElement && !this.resultsElement.classList.contains(dNone))) {
        this.menuObject?.show(this.element);
      }
    }
  }

  private _blur = () => {
    this.element.classList.remove('focus');
  }

  private _keypress = () => {
    const option = this._getOption('min-length');
    if (!option) {
      return;
    }

    const minLength = parseInt(typeof option === 'boolean' ? (+option).toString() : option.toString());    if (this.inputElement && this.inputElement.value.length >= minLength) {
      this._search();
    } else {
      if (this.inputElement && this.inputElement.value.length === 0) {
        this._clear();
      }
    }
  }

  private _start = () => {
    this.spinnerElement?.classList.remove(dNone);
    this.clearElement?.classList.add(dNone);
  }

  private _complete = () => {
    this.spinnerElement?.classList.add(dNone);
    this.clearElement?.classList.add(dNone);
    if (this.mode === 'menu') {
      this.menuObject?.show(this.element);
    }

    if (this.inputElement && this.inputElement.value.length === 0) {
      this._clear();
    }

    this.processing = false;
  }

  private _showResults = (content: string) => {
    this.suggestionsElement?.classList.add(dNone);
    this.emptyElement?.classList.add(dNone);
    this.resultsElement?.classList.add(dNone);
    if (this.resultsElement) {
      this.resultsElement.innerHTML = content;
    }
  } 

  private _showSuggestions = () => {
      this.resultsElement?.classList.add(dNone);
      this.emptyElement?.classList.add(dNone);
      this.suggestionsElement?.classList.remove(dNone);
  }

  private _showEmpty = () => {
      this.resultsElement?.classList.add(dNone);
      this.suggestionsElement?.classList.add(dNone);
      this.emptyElement?.classList.remove(dNone);
  }

  private _getOption = (name: string) => {
    const attr = this.element.getAttribute('data-kt-search-' + name);
    if (attr) {
      const value = getAttributeValueByBreakpoint(attr);
      if (value != null && String(value) === 'true') {
        return true;
      } else if (value !== null && String(value) === 'false') {
        return false;
      }

      return value;
    }

    const optionName = stringSnakeToCamel(name);
    const option = getObjectPropertyValueByKey(this.element, optionName);
    if (option) {
      return getAttributeValueByBreakpoint(option);
    }

    return null;
  }
    
  ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
  public search = () => {
      return this._search();
  }

  public showResults = (content: string) => {
      return this._showResults(content);
  }  

  public showSuggestions = () => {
      return this._showSuggestions();
  }

  public showEmpty = () => {
      return this._showEmpty();
  }

  public complete = () => {
      return this._complete();
  }

  public clear = () => {
      return this._clear();
  }

  public isProcessing = () => {
      return this.processing;
  }

  public getQuery = () => {
      return this.inputElement?.value || '';
  }

  public goElement = () => {
      return this.element;
  }

  // Create Instances
  public static createInstances(selector: string) {
    throw new Error("not implemented");
  }

  // Static methods
  public static hasInstace(element: HTMLElement) {
    throw new Error("not implemented");
  }

  public static getInstance(element: HTMLElement) {
    const search = DataUtil.get(element, 'search');
    if (search) {
      return search;
    }

    return null;
  }

  public static bootstrap(attr: string = "[data-Feedback]") {
    throw new Error("not implemented");
  }
}

export { SearchComponent, defaultSearchOptions };
