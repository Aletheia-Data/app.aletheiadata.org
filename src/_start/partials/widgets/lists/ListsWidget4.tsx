/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const ListsWidget4: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body pt-2 ${innerPadding}`}>
        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <tbody>
              {/* begin::Item */}
              <tr>
                <td className="ps-0 w-55px">
                  {/* begin::Symbol */}
                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                    <span className="symbol-label bg-light-primary">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                        className="h-75 align-self-end"
                        alt="Brad Simmons"
                      />
                    </span>
                  </div>
                  {/* end::Symbol */}
                </td>
                <td className="ps-0 flex-column min-w-300px">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                  >
                    Brad Simmons
                  </a>
                  <div className="text-muted fw-bold">
                    Uses: HTML/CSS/JS, Python
                  </div>
                  {/* end::Title */}
                </td>
                <td>
                  {/* begin::Label */}
                  <div className="me-4 me-md-19 text-md-right">
                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                      $2,000,000
                    </div>
                    <span className="text-muted fw-bold">Paid</span>
                  </div>
                  {/* end::Label */}
                </td>
                <td className="text-end pe-0">
                  {/* begin::Btn */}
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </a>
                  {/* end::Btn */}
                </td>
              </tr>
              {/* end::Item */}

              {/* begin::Item */}
              <tr>
                <td className="ps-0">
                  {/* begin::Symbol */}
                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                    <span className="symbol-label bg-light-danger">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/006-girl-3.svg")}
                        className="h-75 align-self-end"
                        alt="Jessie Clarcson"
                      />
                    </span>
                  </div>
                  {/* end::Symbol */}
                </td>
                <td className="ps-0 flex-column min-w-300px">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                  >
                    Jessie Clarcson
                  </a>
                  <div className="text-muted fw-bold">
                    Uses: HTML, ReactJS, ASP.NET
                  </div>
                  {/* end::Title */}
                </td>
                <td>
                  {/* end::Label */}
                  <div className="me-4 me-md-19 text-md-right">
                    <div className="text-gray-800 fw-bolder  fs-6 mb-1">
                      $1,200,000
                    </div>
                    <span className="text-muted fw-bold">Paid</span>
                  </div>
                  {/* end::Label */}
                </td>
                <td className="text-end pe-0">
                  {/* begin::Btn */}
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </a>
                  {/* end::Btn */}
                </td>
              </tr>
              {/* end::Item */}

              {/* begin::Item */}
              <tr>
                <td className="ps-0">
                  {/* begin::Symbol */}
                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                    <span className="symbol-label bg-light-success">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/011-boy-5.svg")}
                        className="h-75 align-self-end"
                        alt="Lebron Wayde"
                      />
                    </span>
                  </div>
                  {/* end::Symbol */}
                </td>
                <td className="ps-0 flex-column min-w-300px">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                  >
                    Lebron Wayde
                  </a>
                  <div className="text-muted fw-bold">
                    Uses: HTML. Laravel Framework
                  </div>
                  {/* end::Title */}
                </td>
                <td>
                  {/* end::Label */}
                  <div className="me-4 me-md-19 text-md-right">
                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                      $3,400,000
                    </div>
                    <span className="text-muted fw-bold">Paid</span>
                  </div>
                  {/* end::Label */}
                </td>
                <td className="text-end pe-0">
                  {/* begin::Btn */}
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </a>
                  {/* end::Btn */}
                </td>
              </tr>
              {/* end::Item */}

              {/* begin::Item */}
              <tr>
                <td className="ps-0">
                  {/* begin::Symbol */}
                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                    <span className="symbol-label bg-light-warning">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/015-boy-6.svg")}
                        className="h-75 align-self-end"
                        alt="Kevin Leonard"
                      />
                    </span>
                  </div>
                  {/* end::Symbol */}
                </td>
                <td className="ps-0 flex-column min-w-300px">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                  >
                    Kevin Leonard
                  </a>
                  <div className="text-muted fw-bold">
                    Uses: VueJS, Laravel Framework
                  </div>
                  {/* end::Title */}
                </td>
                <td>
                  {/* end::Label */}
                  <div className="me-4 me-md-19 text-md-right">
                    <div className="text-gray-800 fw-bolder  fs-6 mb-1">
                      $35,600,000
                    </div>
                    <span className="text-muted fw-bold">Paid</span>
                  </div>
                  {/* end::Label */}
                </td>
                <td className="text-end pe-0">
                  {/* begin::Btn */}
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </a>
                  {/* end::Btn */}
                </td>
              </tr>
              {/* end::Item */}
            </tbody>
          </table>
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget4 };
