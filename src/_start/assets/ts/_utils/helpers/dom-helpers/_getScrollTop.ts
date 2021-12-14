export function getScrollTop(): number {
  return (document.scrollingElement || document.documentElement).scrollTop;
}
