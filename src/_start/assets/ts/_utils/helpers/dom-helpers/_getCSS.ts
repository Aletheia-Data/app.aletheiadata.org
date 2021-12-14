export function getCSS(el: HTMLElement, styleProp: string) {
  const defaultView = (el.ownerDocument || document).defaultView;
  
  if (!defaultView) {
    return "";
  }

  // sanitize property name to css notation
  // (hyphen separated words eg. font-Size)
  styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
  
  return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
}
