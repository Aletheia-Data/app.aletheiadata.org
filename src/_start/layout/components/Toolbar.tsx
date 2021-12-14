import React from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { usePageData, useTheme } from "../core";

export function Toolbar() {
  const { pageTitle, pageDescription, pageBreadcrumbs, pageSubmenu } =
    usePageData();
  const { config, classes } = useTheme();

  return (
    <>
      {config.toolbar.display && (
        <div className="toolbar" id="kt_toolbar">
          <div
            className={`${classes.toolbarContainer.join(
              " "
            )} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
          >
            {/* begin::Info */}
            <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
              {/* begin::Title */}
              {pageTitle && (
                <h3 className="text-dark fw-bolder my-1">
                  {pageTitle}&nbsp;
                  {pageDescription && (
                    <span className="text-muted fs-7 fw-bold ms-1">
                      {pageDescription}
                    </span>
                  )}
                </h3>
              )}
              {/* end::Title */}
              {config.toolbar.breadcrumb &&
                pageBreadcrumbs &&
                pageBreadcrumbs.length > 0 && (
                  <>
                    {/* begin::Breadcrumbs */}
                    <ul className="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                      {Array.from(pageBreadcrumbs).map((item, index) => (
                        <li
                          className={clsx("breadcrumb-item", {
                            "text-dark": item.isActive,
                          })}
                          key={`${item.path}${index}`}
                        >
                          <Link
                            className="text-muted text-hover-primary"
                            to={item.path}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      <li className="breadcrumb-item text-dark">{pageTitle}</li>
                    </ul>
                    {/* end::Breadcrumbs */}
                  </>
                )}
            </div>
            {/* end::Info */}

            {pageSubmenu && pageSubmenu.length > 0 && (
              <div className="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1">
                {Array.from(pageSubmenu).map((item, index) => (
                  <NavLink
                    className="btn btn-active-accent fw-bolder ms-3"
                    to={item.isPro ? "#" : item.path}
                    activeClassName={item.isPro ? "" : "active"}
                    key={`${item.path}${index}`}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
