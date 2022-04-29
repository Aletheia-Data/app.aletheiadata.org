import React, { FC } from "react";

import { StatusType } from "_start/types";

interface Props {
  status: StatusType;
}

const StatusBadge: FC<Props> = ({ status }) => {
  let backgroundStatus;
  let textStatus;
  switch (status) {
    case StatusType.under_review:
      backgroundStatus = "background-csv";
      textStatus = "under review";
      break;
    case StatusType.on_line:
      backgroundStatus = "background-xls";
      textStatus = "online";
      break;
    case StatusType.blocked:
      backgroundStatus = "background-ods";
      textStatus = "blocked";
      break;
    case StatusType.broken:
      backgroundStatus = "background-pdf";
      textStatus = "broken";
      break;
  }

  return <span className={`badge ${backgroundStatus}`}>{textStatus}</span>;
};

export default StatusBadge;
