/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";

export function HeaderNotificationsMenu() {
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-bold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px"
      data-kt-menu="true"
    >
      <div className="menu-item mx-3">
        <div className="menu-content fs-6 text-dark fw-bolder py-6">
          4 New Notifications
        </div>
      </div>

      <div className="separator mb-3"></div>

      <div className="menu-item mx-3">
        <a href="#" className="menu-link px-4 py-3">
          <div className="symbol symbol-35px">
            <span className="symbol-label bg-light-info">
              <KTSVG
                className="svg-icon-3 svg-icon-info"
                path="/media/icons/duotone/Home/Library.svg"
              />
            </span>
          </div>

          <div className="ps-4">
            <span className="menu-title fw-bold mb-1">
              New Uer Library Added
            </span>
            <span className="text-muted fw-bold d-block fs-7">3 Hours ago</span>
          </div>
        </a>
      </div>

      <div className="menu-item mx-3">
        <a href="#" className="menu-link px-4 py-3">
          <div className="symbol symbol-35px">
            <span className="symbol-label bg-light-warning">
              <KTSVG
                className="svg-icon-3 svg-icon-warning"
                path="/media/icons/duotone/Devices/Mic.svg"
              />
            </span>
          </div>
          <div className="ps-4">
            <span className="menu-title fw-bold mb-1">Clean Microphone</span>
            <span className="text-muted fw-bold d-block fs-7">5 Hours ago</span>
          </div>
        </a>
      </div>

      <div className="menu-item mx-3">
        <a href="#" className="menu-link px-4 py-3">
          <div className="symbol symbol-35px">
            <span className="symbol-label bg-light-primary">
              <KTSVG
                className="svg-icon-3 svg-icon-primary"
                path="/media/icons/duotone/Communication/Group-chat.svg"
              />
            </span>
          </div>

          <div className="ps-4">
            <span className="menu-title fw-bold mb-1">Quick Chat Created</span>
            <span className="text-muted fw-bold d-block fs-7">A Day ago</span>
          </div>
        </a>
      </div>

      <div className="menu-item mx-3">
        <a href="#" className="menu-link px-4 py-3">
          <div className="symbol symbol-35px">
            <span className="symbol-label bg-light-danger">
              <KTSVG
                className="svg-icon-3 svg-icon-danger"
                path="/media/icons/duotone/General/Attachment2.svg"
              />
            </span>
          </div>

          <div className="ps-4">
            <span className="menu-title fw-bold mb-1">32 New Attachements</span>
            <span className="text-muted fw-bold d-block fs-7">2 Day ago</span>
          </div>
        </a>
      </div>

      <div className="separator mt-3"></div>

      <div className="menu-item mx-2">
        <div className="menu-content py-5">
          <a href="#" className="btn btn-primary fw-bolder me-2 px-5">
            Report
          </a>
          <a href="#" className="btn btn-light fw-bolder px-5">
            Reset
          </a>
        </div>
      </div>
    </div>
  );
}
