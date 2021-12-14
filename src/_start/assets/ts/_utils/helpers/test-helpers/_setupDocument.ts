export function setupDocument(htmlStr: string) {
  document.head.innerHTML = "";
  document.body.innerHTML = htmlStr;
}

export function withHTMLDocument(element: HTMLElement) {
  document.head.appendChild(document.createElement("script"));
  document.body.appendChild(element);
}
