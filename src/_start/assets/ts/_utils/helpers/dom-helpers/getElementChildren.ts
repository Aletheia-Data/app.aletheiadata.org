import { getElementMatches } from "./_getElementMatches";

export function getElementChildren(
  element: HTMLElement,
  selector: string
): Array<HTMLElement> | null {
  if (!element || !element.childNodes) {
    return null;
  }

  const result: Array<HTMLElement> = [];
  for (let i = 0; i < element.childNodes.length; i++) {
    const child = element.childNodes[i];
    // child.nodeType == 1 => Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
    if (
      child.nodeType === 1 &&
      getElementMatches(child as HTMLElement, selector)
    ) {
      result.push(child as HTMLElement);
    }
  }

  return result;
}
