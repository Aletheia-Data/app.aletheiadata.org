import React from "react";
import { Ktsvg } from "../../../../../_start/helpers";

export function Changelog(): JSX.Element {
  const { REACT_APP_THEME_NAME, REACT_APP_VERSION } = process.env;

  return (
    <>
      <div
        className="accordion accordion-flush accordion-icon-toggle"
        id="kt_accordion"
      >
        <div className="accordion-item mb-5">
          <div
            aria-expanded="true"
            className="accordion-header py-3 d-flex"
            data-bs-target="#kt_accordion_body_v1_0_0"
            data-bs-toggle="collapse"
          >
            <span className="accordion-icon">
              <Ktsvg
                className="svg-icon svg-icon-3"
                path="/media/icons/duotone/Navigation/Right-2.svg"
              />
            </span>
            <h3 className="fs-3 text-gray-800 fw-bolder mb-0 ms-4">
              {REACT_APP_THEME_NAME} {REACT_APP_VERSION} - June 11, 2021
            </h3>
          </div>
          <div
            className="fs-6 my-1 py-0 ps-10 collapse show"
            data-bs-parent="#kt_accordion"
            id="kt_accordion_body_v1_0_0"
          >
            <div className="accordion-body ps-0 pt-0">
              <ul className="my-0 py-0">
                <li className="py-2">Initial release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
