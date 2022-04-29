import React, { FC } from "react";

import { FormatType } from "_start/types";

interface Props {
  type: FormatType;
}
const FormatBadge: FC<Props> = ({ type }) => {
  let backgroundFormat;
  switch (type) {
    case FormatType.pdf:
      backgroundFormat = "background-pdf";
      break;
    case FormatType.csv:
      backgroundFormat = "background-csv";
      break;
    case FormatType.xls:
    case FormatType.xlsx:
      backgroundFormat = "background-xls";
      break;
    case FormatType.ods:
      backgroundFormat = "background-ods";
      break;
    case FormatType.other:
      backgroundFormat = "background-other";
      break;
  }

  return <span className={`badge ${backgroundFormat}`}>{type}</span>;
};

export default FormatBadge;
