import React from "react";
import Svg from "react-inlinesvg";
import { toAbsoluteUrl } from "../AssetHelpers";
type Props = {
  className?: string;
  path: string;
  svgClassName?: string;
};

const Ktsvg: React.FC<Props> = ({
  className = "",
  path,
  svgClassName = "mh-50px",
}) => {
  return (
    <span className={`svg-icon ${className}`}>
      <Svg src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  );
};

export { Ktsvg };
