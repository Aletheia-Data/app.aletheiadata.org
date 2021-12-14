// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
export function getElementMatches(element: HTMLElement, selector: string) {
  const p = Element.prototype;
  const f =
    p.matches ||
    p.webkitMatchesSelector;

  if (element && element.tagName) {
    return f.call(element, selector);
  } else {
    return false;
  }
}
