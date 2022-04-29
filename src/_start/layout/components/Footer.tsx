/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../core";

export function Footer() {
  const { classes } = useTheme();
  return (
    <div className={`footer py-4 d-flex flex-lg-column`} id="kt_footer">
      {/* begin::Container */}
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        {/* begin::Copyright */}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-bold me-2">
            {new Date().getFullYear()} &copy;
          </span>
          <a href="#" className="text-gray-800 text-hover-primary">
            Aletheia Data
          </a>
        </div>
        {/* end::Copyright */}

        {/* begin::Nav */}
        <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li className="menu-item">
            <a href="https://github.com/Aletheia-Data/" target="_blank" className="menu-link ps-0 pe-2">
              Github
            </a>
          </li>
          <li className="menu-item">
            <a href="https://aletheiadata.statuspage.io/" target="_blank" className="menu-link pe-0 pe-2">
              Status
            </a>
          </li>
          <li className="menu-item">
            <a href="https://docs.aletheiadata.org/" target="_blank" className="menu-link pe-0">
              Docs
            </a>
          </li>
          <li className="menu-item">
            <Link
              className="menu-link pe-0"
              to={'/general/faq'}
            >
            FAQ
            </Link>
          </li>
        </ul>
        {/* end::Nav */}
      </div>
      {/* end::Container */}
    </div>
  );
}
