export function getElementActualCss(
  el: HTMLElement,
  prop: any,
  cache: boolean
) {
  let css = "";

  if (!el.getAttribute("kt-hidden-" + prop) || cache === false) {
    let value;

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    css = el.style.cssText;
    el.style.cssText =
      "position: absolute; visibility: hidden; display: block;";

    if (prop === "width") {
      value = el.offsetWidth;
    } else if (prop === "height") {
      value = el.offsetHeight;
    }

    el.style.cssText = css;

    // store it in cache
    if (value !== undefined) {
      el.setAttribute("kt-hidden-" + prop, value.toString());
      return parseFloat(value.toString());
    }
    return 0;

  } else {
    // store it in cache
    const attributeValue = el.getAttribute("kt-hidden-" + prop);
    if (attributeValue || attributeValue === '0') {
      return parseFloat(attributeValue);
    }
  }
}

export function getElementActualHeight(el: HTMLElement) {
  return getElementActualCss(el, "height", false);
}

export function getElementActualWidth(el: HTMLElement, cache?: boolean) {
  return getElementActualCss(el, "width", false);
}
