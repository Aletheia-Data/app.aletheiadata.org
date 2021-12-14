export function getElementParents(element: Element, selector: string) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = function (s) {
      const matches = (document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }

  // Set up a parent array
  const parents = [];

  let el: Element | null = element;

  // Push each parent element to the array
  for (
    ;
    el && el !== document.body;
    el = el.parentElement
  ) {
    if (selector) {
      if (el.matches(selector)) {
        parents.push(el);
      }
      continue;
    }
    parents.push(el);
  }

  // Return our parent array
  return parents;
}
