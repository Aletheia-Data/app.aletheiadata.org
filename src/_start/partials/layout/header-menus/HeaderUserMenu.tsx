import React from "react";
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";

export function HeaderUserMenu() {
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px"
      data-kt-menu="true"
    >
      <div
        className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media//misc/dropdown-header-bg.jpg"
          )}')`,
        }}
      >
        <div className="symbol symbol-45px mx-5 py-5">
          <span className="symbol-label bg-primary align-items-end">
            <img
              alt="Logo"
              src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              className="mh-35px"
            />
          </span>
        </div>
        <div className="">
          <span className="text-white fw-bolder fs-4">Hello, User</span>
          <span className="text-white fw-bold fs-7 d-block">
            Lorem Ipsum
          </span>
        </div>
      </div>

      {/* begin::Row */}
      <div className="row row-cols-2 g-0">
        <Link
          to="/profile"
          className="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0"
          data-kt-menu-dismiss="true"
        >
          <KTSVG
            className="svg-icon-3x me-n1"
            path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
          />
          <span className="  fw-bolder fs-6 d-block pt-3">My Profile</span>
        </Link>

        <Link
          to="/profile/settings"
          className="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0"
          data-kt-menu-dismiss="true"
        >
          <KTSVG
            className="svg-icon-3x me-n1"
            path="/media/icons/duotone/General/Settings-1.svg"
          />
          <span className="fw-bolder fs-6 d-block pt-3">Settings</span>
        </Link>

        <Link
          to="/profile/account"
          className="col text-center border-end py-10 btn btn-active-color-primary rounded-0"
          data-kt-menu-dismiss="true"
        >
          <KTSVG
            className="svg-icon-3x me-n1"
            path="/media/icons/duotone/Shopping/Euro.svg"
          />
          <span className="fw-bolder fs-6 d-block pt-3">Subscriptions</span>
        </Link>

        <Link
          to="/logout"
          className="col text-center py-10 btn btn-active-color-primary rounded-0"
          data-kt-menu-dismiss="true"
        >
          <KTSVG
            className="svg-icon-3x me-n1"
            path="/media/icons/duotone/Navigation/Sign-out.svg"
          />
          <span className="fw-bolder fs-6 d-block pt-3">Sign Out</span>
        </Link>
      </div>
      {/* end::Row */}
    </div>
  );
}
