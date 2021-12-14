import Theme from "../../_Theme";
import { getViewPort } from "./_getViewPort";

export function isMobileDevice(): boolean {
  let test = getViewPort().width < Theme.getBreakpoint("lg") ? true : false;

  if (test === false) {
    // For use within normal web clients
    test = navigator.userAgent.match(/iPad/i) != null;
  }

  return test;
}
