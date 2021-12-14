export function insertAfterElement(el: HTMLElement, referenceNode: HTMLElement) {
  return referenceNode.parentNode?.insertBefore(el, referenceNode.nextSibling);
}
