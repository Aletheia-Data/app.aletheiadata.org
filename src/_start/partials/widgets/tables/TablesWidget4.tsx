/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
  color?: string;
};

const TablesWidget4: React.FC<Props> = ({
  className,
  innerPadding = "",
  color = "primary",
}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">New Arrivals</span>
          <span className="text-muted mt-3 fw-bold fs-7">
            More than 400+ new members
          </span>
        </h3>
        <div className="card-toolbar">
          <a href="#" className="btn btn-primary fw-bolder fs-7">
            New Report
          </a>
        </div>
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body py-0">
        {/* begin::Table*/}
        <div className="table-responsive">
          <table
            className="table align-middle border-gray-100"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                <td className="ps-0 w-30px py-5">
                  <div className="form-check form-check-custom form-check-sm form-check-solid me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td className="ps-0 min-w-250px py-5">Order id</td>
                <td className="min-w-100px py-5">Country</td>
                <td className="min-w-100px py-5">
                  <span className={`text-${color}`}>Date</span>
                  <KTSVG
                    className={`svg-icon-sm svg-icon-${color}`}
                    path="/media/icons/duotone/Navigation/Down-2.svg"
                  />
                </td>
                <td className="min-w-100px py-5">Status</td>
                <td className="min-w-100px pe-0 text-end py-5">Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-0 py-6">
                  <div className="form-check form-check-custom form-check-sm form-check-solid me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6"
                  >
                    56037-XDER
                  </a>
                </td>
                <td>
                  <span className="text-gray-800 fw-bolder d-block fs-6">
                    Brasil
                  </span>
                  <span className="text-muted fw-bold">Code: BR</span>
                </td>
                <td>
                  <span className={`text-${color} fw-bolder d-block fs-6`}>
                    05/28/2020
                  </span>
                  <span className="text-muted fw-bold">Paid</span>
                </td>
                <td>
                  <span className="label label-lg label-light-primary label-inline">
                    Approved
                  </span>
                </td>
                <td className="pe-0 text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Communication/Write.svg"
                    />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/General/Trash.svg"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="ps-0 py-6">
                  <div className="form-check form-check-custom form-check-sm form-check-solid me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary fs-6"
                  >
                    05822-FXSP
                  </a>
                </td>
                <td>
                  <span className="text-gray-800 fw-bolder d-block fs-6">
                    Belarus
                  </span>
                  <span className="text-muted fw-bold">Code: BY</span>
                </td>
                <td>
                  <span className={`text-${color} fw-bolder d-block fs-6`}>
                    02/04/2020
                  </span>
                  <span className="text-muted fw-bold">Rejected</span>
                </td>
                <td>
                  <span className="label label-lg label-light-warning label-inline">
                    In Progress
                  </span>
                </td>
                <td className="pe-0 text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Communication/Write.svg"
                    />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/General/Trash.svg"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="ps-0 py-6">
                  <div className="form-check form-check-custom form-check-sm form-check-solid me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-gray-800 fw-bolder text-hover-primary ont-size-lg"
                  >
                    00347-BCLQ
                  </a>
                </td>
                <td>
                  <span className="text-gray-800 fw-bolder d-block fs-6">
                    Phillipines
                  </span>
                  <span className="text-muted fw-bold">Code: PH</span>
                </td>
                <td>
                  <span className={`text-${color} fw-bolder d-block fs-6`}>
                    23/12/2020
                  </span>
                  <span className="text-muted fw-bold">Paid</span>
                </td>
                <td>
                  <span className="label label-lg label-light-success label-inline">
                    Success
                  </span>
                </td>
                <td className="pe-0 text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Communication/Write.svg"
                    />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/General/Trash.svg"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="ps-0 py-6">
                  <div className="form-check form-check-custom form-check-sm form-check-solid me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td className="ps-0">
                  <a
                    href="#"
                    className="text-dark fw-bolder text-hover-primary fs-6"
                  >
                    4472-QREX
                  </a>
                </td>
                <td>
                  <span className="text-gray-800 fw-bolder d-block fs-6">
                    Argentina
                  </span>
                  <span className="text-muted fw-bold">Code: AR</span>
                </td>
                <td>
                  <span className={`text-${color} fw-bolder d-block fs-6`}>
                    17/09/2021
                  </span>
                  <span className="text-muted fw-bold">Pending</span>
                </td>
                <td>
                  <span className="label label-lg label-light-danger label-inline">
                    Rejected
                  </span>
                </td>
                <td className="pe-0 text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/Communication/Write.svg"
                    />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
                  >
                    <KTSVG
                      className="svg-icon-4"
                      path="/media/icons/duotone/General/Trash.svg"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end::Body*/}
    </div>
  );
};

export { TablesWidget4 };
