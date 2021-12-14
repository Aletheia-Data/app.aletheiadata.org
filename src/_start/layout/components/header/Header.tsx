import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { MenuModal } from "../../../partials";
import { usePageData, useTheme } from "../../core";
import { MenuInner } from "./MenuInner";
import { Topbar } from "./Topbar";

export function Header() {
  const [showMegaMenuModal, setShowMegaMenuModal] = useState(false);
  const { config, classes, attributes } = useTheme();
  const { pageTitle, moduleName } = usePageData();
  return (
    <>
      <div
        className={`${classes.headerContainer.join(
          " "
        )} d-flex align-items-stretch justify-content-between`}
        {...Object.fromEntries(Array.from(attributes.headerContainer))}
      >
        {/* begin::Left */}
        <div className="d-flex align-items-center">
          {config.aside.content && config.aside.content === "menu" && (
            <h3 className="text-dark fw-bolder my-1 fs-2">{pageTitle}</h3>
          )}
          {config.aside.content && config.aside.content === "docs" && (
            <>
              {/* begin::Mega Menu Toggler */}
              <button
                className="btn btn-icon btn-accent me-3 me-lg-6"
                id="kt_mega_menu_toggle"
                onClick={() => setShowMegaMenuModal(true)}
              >
                <KTSVG
                  className="svg-icon-1"
                  path="/media/icons/duotone/Text/Article.svg"
                />
              </button>
              {/* end::Mega Menu Toggler */}
              {/* begin::Title */}
              <h3 className="d-flex align-items-center text-dark fw-bolder my01 fs-5 fs-lg-2">
                <span className="d-none d-lg-inline">{moduleName}</span>&nbsp;
                {pageTitle && (
                  <span className="badge badge-light-danger fw-bold fs-8 shadow-sm ms-2">
                    {process.env.REACT_APP_VERSION}
                  </span>
                )}
              </h3>
              {/* end::Title */}
            </>
          )}
          {!config.aside.content && (
            <>
              {/* begin::Mega Menu Toggler
              <button
                className="btn btn-icon btn-accent me-2 me-lg-6"
                id="kt_mega_menu_toggle"
                onClick={() => setShowMegaMenuModal(true)}
              >
                <KTSVG
                  path="/media/icons/duotone/Text/Article.svg"
                  className="svg-icon-1"
                />
              </button>
              */}
              {/* end::Mega Menu Toggler */}

              {/* begin::Logo */}
              <Link to="/">
                <img
                  alt="Logo Icon"
                  src={toAbsoluteUrl("/media/logos/logo-compact.png")}
                  className="me-6 h-60px rounded icon"
                />
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/logos/logo-default.svg")}
                  className="h-20px logo"
                />
              </Link>
              {/* end::Logo */}
            </>
          )}
        </div>
        {/* end::Left */}

        {/* begin::Right */}
        <div className="d-flex align-items-center">
          <Topbar />
        </div>
        {/* end::Right */}
      </div>
      <MenuModal
        show={showMegaMenuModal}
        handleClose={() => setShowMegaMenuModal(false)}
      >
        <MenuInner />
      </MenuModal>
    </>
  );
}
