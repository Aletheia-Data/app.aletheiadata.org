import Theme from "../_Theme";
import { getViewPort } from "./dom-helpers/_getViewPort";
import { getObjectPropertyValueByKey } from "./types-helpers/_getObjectPropertyValueByKey";
import { toJSON } from "./types-helpers/_toJSON";

export function getAttributeValueByBreakpoint(incomingAttr: string): string | JSON {
  let value = toJSON(incomingAttr);
  if (typeof value !== 'object') {
    return incomingAttr;
  }

  const width = getViewPort().width;
  let resultKey;
  let resultBreakpoint = -1;
  let breakpoint;

  for (let key in value) {
    if (key === 'default') {
      breakpoint = 0;
    } else {
      breakpoint = Theme.getBreakpoint(key) ? Theme.getBreakpoint(key) : parseInt(key);
    }

    if (breakpoint <= width && breakpoint > resultBreakpoint) {
      resultKey = key;
      resultBreakpoint = breakpoint;
    }
  }

  return resultKey ? getObjectPropertyValueByKey(value, resultKey) : value;
}
