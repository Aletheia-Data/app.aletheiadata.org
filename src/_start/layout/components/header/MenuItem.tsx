/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import clsx from "clsx";
import { checkIsActive } from "../../../helpers";

type Props = {
  to: string;
  title: string;
  free?: boolean;
};

const MenuItem: React.FC<Props> = ({ children, to, title, free = false }) => {
  const { pathname } = useLocation();
  return (
    <>
      {free ? (
        <a className="menu-link ps-0 py-2" data-kt-page="pro">
          {title}
          {children}
          <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
            Pro
          </span>
        </a>
      ) : (
        <Link
          className={clsx("menu-link ps-0 py-2", {
            active: checkIsActive(pathname, to),
          })}
          to={to}
        >
          {title}
          {children}
        </Link>
      )}
    </>
  );
};

export { MenuItem };
