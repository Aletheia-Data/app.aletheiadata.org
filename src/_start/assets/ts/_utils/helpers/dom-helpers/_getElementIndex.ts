export function getElementIndex(element: HTMLElement) {
  if (element.parentNode) {
    const c = element.parentNode.children;
    for (let i = 0; i < c.length; i++) {
      if (c[i] === element) return i;
    }
  }
  return -1;
}
