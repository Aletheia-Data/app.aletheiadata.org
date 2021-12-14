import { getElementChildren } from "./getElementChildren";

export function getElementChild(
  element: HTMLElement,
  selector: string
): HTMLElement | null {
  const children = getElementChildren(element, selector);
  return children ? children[0] : null;
}
