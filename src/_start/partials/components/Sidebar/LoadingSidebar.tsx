import React, { FC } from "react";

import { Ktsvg, toAbsoluteUrl } from "_start/helpers";

const LoadingSidebar: FC = () => {
  return (
    <>
      <ul
        className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
        id="kt_sidebar_tabs"
        role="tablist"
        style={{ paddingLeft: "0px" }}
      >
        <li className="nav-item">
          <a onClick={() => {}} className={"nav-link"} id="kt_sidebar_tab_1">
            <img
              alt=""
              src={toAbsoluteUrl("/media/svg/logo/purple/aven.svg")}
              className="default"
            />
            <img
              alt=""
              src={toAbsoluteUrl("/media/svg/logo/colored/aven.svg")}
              className="active"
            />
          </a>
        </li>
      </ul>
      {/* end::Sidebar Nav */}

      {/* begin::Sidebar Content */}
      {/* begin::Sidebar Content */}
      <div id="kt_sidebar_content" className="py-10 px-5 px-lg-5">
        <div
          className="hover-scroll-y me-lg-n2 pe-lg-2"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="10px"
          data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
          data-kt-scroll-wrappers="#kt_sidebar_content"
        >
          <div className="tab-content">
            <div
              className={"tab-pane"}
              id="kt_sidebar_tab_pane_1"
              role="tabpanel"
            >
              {/* begin::Card */}
              <div className="card card-custom bg-transparent">
                {/* begin::Header */}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bolder fs-3">Loading ...</h3>
                  <div className="card-toolbar">
                    <button
                      type="button"
                      className="btn btn-md btn-icon btn-icon-white btn-info"
                      data-kt-menu-trigger="click"
                      data-kt-menu-overflow="true"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="top-end"
                    >
                      <Ktsvg
                        path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                        className="svg-icon-1"
                      />
                    </button>
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className="card-body px-3 py-0">
                  {/* begin::Chart */}
                  <div
                    id="kt_sidebar_tab_1_chart"
                    className="apexcharts-bar-hover-danger"
                    style={{ height: "250px" }}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}
            </div>
          </div>
          {/* begin::Card */}
          <div className="card card-custom bg-transparent">
            {/* begin::Header */}
            <div className="card-header align-items-center border-0">
              <h3 className="card-title fw-bolder fs-3">Categorias</h3>
              <div className="card-toolbar">Loading ...</div>
            </div>
            {/* end::Header */}
          </div>
          {/* end::Card */}
        </div>
      </div>
      {/* end::Sidebar Content */}
    </>
  );
};

export default LoadingSidebar;
