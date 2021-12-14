export function isVisibleElement(element: HTMLElement): boolean {
  return !(element.offsetWidth === 0 && element.offsetHeight === 0);
}
