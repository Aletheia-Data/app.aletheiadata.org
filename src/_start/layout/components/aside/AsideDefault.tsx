/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "../../core";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { AsideMenu } from "./AsideMenu";
import { Dropdown1 } from "../../../partials";

export function AsideDefault() {
  const { config, classes } = useTheme();

  return (
    <>
      {config.aside.display && (
        <div
          id="kt_aside"
          className={clsx("aside", "bg-info", classes.aside.join(" "))}
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width={
            config.aside.secondaryDisplay
              ? "{default:'200px', '300px': '250px'}"
              : "70px"
          }
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_toggler"
        >
          {config.aside.primaryDisplay && (
            <div className="aside-primary d-flex flex-column align-items-center flex-row-auto">
              <div
                className="aside-logo d-flex flex-column align-items-center flex-column-auto py-4 pt-lg-10 pb-lg-7"
                id="kt_aside_logo"
              >
                <Link to="/">
                  <img
                    alt="Logo"
                    src={toAbsoluteUrl("/media/logos/logo-compact.png")}
                    className="mh-50px"
                  />
                </Link>
              </div>

              <div
                className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-0 pb-5"
                id="kt_aside_nav"
              >
                <div
                  className="hover-scroll-y"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                  data-kt-scroll-wrappers="#kt_aside_nav"
                  data-kt-scroll-offset="10px"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item mb-1" title="Features">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_1"
                        href="#"
                        className="nav-link h-40px w-40px h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white active"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/Layout/Layout-4-blocks.svg"
                        />
                      </a>
                    </li>

                    <li className="nav-item mb-1" title="Members">
                      <a
                        href="#"
                        className="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_2"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/Communication/Group.svg"
                        />
                      </a>
                    </li>

                    <li className="nav-item mb-1" title="Latest Reports">
                      <a
                        href="#"
                        className="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_3"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/Media/Equalizer.svg"
                        />
                      </a>
                    </li>

                    <li className="nav-item mb-1" title="Project Management">
                      <a
                        href="#"
                        className="nav-link h-40px w-40px h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_2"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/General/Shield-check.svg"
                        />
                      </a>
                    </li>

                    <li className="nav-item mb-1" title="User Management">
                      <a
                        href="#"
                        className="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_3"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/Home/Library.svg"
                        />
                      </a>
                    </li>

                    <li className="nav-item mb-1" title="Finance & Accounting">
                      <a
                        href="#"
                        className="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_aside_tab_6"
                        role="tab"
                      >
                        <KTSVG
                          className="svg-icon-2 svg-icon-lg-1"
                          path="/media/icons/duotone/Files/File-plus.svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="aside-footer d-flex flex-column align-items-center flex-column-auto py-5 py-lg-7"
                id="kt_aside_footer"
              >
                {config.aside.secondaryDisplay && config.aside.toggle && (
                  <button
                    className={`btn btn-sm btn-icon btn-white btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex ${classes.asideToggle.join(
                      " "
                    )}`}
                    id="kt_aside_toggle"
                    data-kt-toggle="true"
                    data-kt-toggle-state="active"
                    data-kt-toggle-target="body"
                    data-kt-toggle-name="aside-minimize"
                    title="Toggle Aside"
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Left-2.svg"
                      className="svg-icon-2 rotate-180"
                    />
                  </button>
                )}

                <div
                  className="mb-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-trigger="hover"
                  title="Quick settings"
                >
                  <button
                    type="button"
                    className="btn btn-custom h-40px w-40px h-lg-50px w-lg-50px btn-icon btn-color-white"
                    data-kt-menu-trigger="click"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                    data-kt-menu-flip="top-end"
                  >
                    <KTSVG
                      className="svg-icon-2 svg-icon-lg-1"
                      path="/media/icons/duotone/Communication/Dial-numbers.svg"
                    />
                  </button>
                  <Dropdown1 />
                </div>
              </div>
            </div>
          )}

          {config.aside.secondaryDisplay && (
            <div className="aside-secondary d-flex flex-row-fluid bg-white">
              <div
                className="aside-workspace my-7 ps-5 pe-4 ps-lg-10 pe-lg-6"
                id="kt_aside_wordspace"
              >
                {!config.aside.primaryDisplay ? (
                  <>
                    {/* begin::Logo */}
                    <div className="aside-logo py-2 pb-7" id="kt_aside_logo">
                      <Link to="/">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl("/media/logos/logo-compact.png")}
                          className="mh-50px"
                        />
                      </Link>
                    </div>
                    {/* end::Logo */}
                    <AsideMenu
                      menuType={config.aside.menu}
                      asidePrimaryDisplay={config.aside.primaryDisplay}
                    />
                  </>
                ) : (
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="kt_aside_tab_1"
                    >
                      <AsideMenu
                        menuType={config.aside.menu}
                        asidePrimaryDisplay={config.aside.primaryDisplay}
                      />
                    </div>

                    {/* begin::Demo menu */}
                    <div className="tab-pane fade" id="kt_aside_tab_2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                    {/* end::Demo menu */}

                    {/* begin::Demo menu */}
                    <div className="tab-pane fade" id="kt_aside_tab_3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                    {/* end::Demo menu */}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
