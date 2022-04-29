import React, { FC } from "react";

interface Props {
  countNumber: number;
}
const CountBadge: FC<Props> = ({ countNumber }) => {
  let badgeClass;
  let count = "0";

  if (countNumber > 0) {
    if (countNumber >= 100) {
      count = `+100`;
      badgeClass = "badge-light-primary";
    } else {
      count = `${countNumber}`;
      badgeClass =
        countNumber < 5
          ? "badge-light-danger"
          : countNumber >= 5 && countNumber <= 10
          ? "badge-light-warning"
          : "badge-light-primary";
    }
  } else {
    badgeClass = "badge-light-danger";
  }

  return <span className={`badge ${badgeClass}`}>{count}</span>;
};

export default CountBadge;
