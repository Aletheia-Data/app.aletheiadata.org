import { ViewPortModel } from "../../models/ViewPortModel";

// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
export function getViewPort(): ViewPortModel {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}