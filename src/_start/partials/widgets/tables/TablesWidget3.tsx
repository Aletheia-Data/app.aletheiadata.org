/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
// import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
};

const TablesWidget3: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header*/}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">My Agents</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            More than 400+ new members
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown*/}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="hover"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          {/* end::Dropdown*/}
        </div>
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body pt-0">
        {/* begin::Table*/}
        <div className="table-responsive">
          <table className="table table-borderless align-middle mb-0">
            <thead>
              <tr>
                <th className="p-0 w-50px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-70px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-0">
                  <div className="symbol symbol-55px me-2 mt-1">
                    <span className="symbol-label align-items-end">
                      <img
                        alt="icon"
                        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                        className="mh-40px"
                      />
                    </span>
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-dark fw-bolder text-hover-primary fs-6"
                  >
                    Brad Simmons
                  </a>
                  <span className="text-muted fw-bold d-block mt-1">
                    Movie Creator
                  </span>
                </td>
                <td className="text-end pe-0">
                  <a href="#" className="btn btn-icon btn-twitter btn-sm me-3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-icon btn-facebook btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </td>
                <td className="text-end pe-0">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                      className="svg-icon-4"
                    />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="ps-0">
                  <div className="symbol symbol-55px me-2 mt-1">
                    <span className="symbol-label align-items-end">
                      <img
                        alt="icon"
                        src={toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg")}
                        className="mh-40px"
                      />
                    </span>
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-dark fw-bolder text-hover-primary fs-6"
                  >
                    Jessie Clarcson
                  </a>
                  <span className="text-muted fw-bold d-block mt-1">
                    HTML, CSS Coding
                  </span>
                </td>
                <td className="text-end pe-0">
                  <a href="#" className="btn btn-icon btn-twitter btn-sm me-3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-icon btn-facebook btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </td>
                <td className="text-end pe-0">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                      className="svg-icon-4"
                    />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="ps-0">
                  <div className="symbol symbol-55px me-2 mt-1">
                    <span className="symbol-label align-items-end">
                      <img
                        alt="icon"
                        src={toAbsoluteUrl(
                          "/media/svg/avatars/047-girl-25.svg"
                        )}
                        className="mh-40px"
                      />
                    </span>
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-dark fw-bolder text-hover-primary fs-6"
                  >
                    Lebron Wayde
                  </a>
                  <span className="text-muted fw-bold d-block mt-1">
                    ReactJS Developer
                  </span>
                </td>
                <td className="text-end pe-0">
                  <a href="#" className="btn btn-icon btn-twitter btn-sm me-3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-icon btn-facebook btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </td>
                <td className="text-end pe-0">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                      className="svg-icon-4"
                    />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="ps-0">
                  <div className="symbol symbol-55px me-2 mt-1">
                    <span className="symbol-label align-items-end">
                      <img
                        alt="icon"
                        src={toAbsoluteUrl("/media/svg/avatars/043-boy-18.svg")}
                        className="mh-40px"
                      />
                    </span>
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-dark fw-bolder text-hover-primary fs-6"
                  >
                    Kevin Leonard
                  </a>
                  <span className="text-muted fw-bold d-block mt-1">
                    Amazing Templates
                  </span>
                </td>
                <td className="text-end pe-0">
                  <a href="#" className="btn btn-icon btn-twitter btn-sm me-3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-icon btn-facebook btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </td>
                <td className="text-end pe-0">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Arrow-right.svg"
                      className="svg-icon-4"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end: Card Body*/}
    </div>
  );
};

export { TablesWidget3 };
