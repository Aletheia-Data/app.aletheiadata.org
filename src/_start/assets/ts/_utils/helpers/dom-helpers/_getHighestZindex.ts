export function getHighestZindex(el: HTMLElement) {
  let bufferNode: Node | null = el as Node;
  let buffer = el;
  while (bufferNode && bufferNode !== document) {
    // Ignore z-index if position is set to a value where z-index is ignored by the browser
    // This makes behavior of this function consistent across browsers
    // WebKit always returns auto if the element is positioned
    const position = buffer.style.getPropertyValue('position');
    if (position === "absolute" || position === "relative" || position === "fixed") {
      // IE returns 0 when zIndex is not specified
      // other browsers return a string
      // we ignore the case of nested elements with an explicit value of 0
      // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
      const value = parseInt(buffer.style.getPropertyValue('z-index'));
      if (!isNaN(value) && value !== 0) {
        return value;
      }
    }

    bufferNode = bufferNode.parentNode;
    buffer = bufferNode as HTMLElement;
  }
  return null;
}