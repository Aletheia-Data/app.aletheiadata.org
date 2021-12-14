export function isElementHasClasses(
  element: HTMLElement,
  classesStr: string
): boolean {
  const classes = classesStr.split(" ");
  for (let i = 0; i < classes.length; i++) {
    if (!element.classList.contains(classes[i])) {
      return false;
    }
  }

  return true;
}
