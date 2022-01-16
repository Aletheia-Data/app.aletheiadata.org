import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { getUserByToken } from "../../../../app/modules/auth/redux/AuthCRUD";

export function HeaderUserMenu() {
  const [user, setUser] = useState({
    account: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    id: "0",
    provider: "none"
  });

  useEffect(() => {
    getUserByToken()
      .then(res => {
        // console.log(res.user);
        setUser(res.user);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const truncate = (fullStr: string, strLen: number, separator?: string) => {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
      separator +
      fullStr.substr(fullStr.length - backChars);
  }

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
            {truncate(user.account, 12)}
          </span>
        </div>
      </div>

      {/* begin::Row */}
      <div className="row row-cols-2 g-0">
        <Link
          to="#"
          className="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0"
          data-kt-menu-dismiss="true"
        >
          <KTSVG
            className="svg-icon-3x me-n1"
            path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
          />
          <span className=" fw-bolder fs-6 d-block pt-3">My Profile</span>
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
