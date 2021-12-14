/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const ListsWidget5: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body pt-2 ${innerPadding}`}>
        {/* begin::Item */}
        <div className="d-flex mb-6">
          {/* begin::Icon */}
          <div className="me-1">
            <KTSVG
              className="svg-icon-sm svg-icon-primary"
              path="/media/icons/duotone/Navigation/Angle-right.svg"
            />
          </div>
          {/* end::Icon */}

          {/* begin::Content */}
          <div className="d-flex flex-column">
            <a
              href="#"
              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
            >
              How to Create Your First Project with Start Admin Theme
            </a>
            <div className="fw-bold text-muted">
              But nothing can prepare you for the real thing
            </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className="d-flex mb-6">
          {/* begin::Icon */}
          <div className="me-1">
            <KTSVG
              className="svg-icon-sm svg-icon-primary"
              path="/media/icons/duotone/Navigation/Angle-right.svg"
            />
          </div>
          {/* end::Icon */}

          {/* begin::Content */}
          <div className="d-flex flex-column">
            <a
              href="#"
              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
            >
              Start Admin Theme Getting Started & Installation
            </a>
            <div className="fw-bold text-muted">
              Long before you sit down to put digital pen
            </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className="d-flex mb-6">
          {/* begin::Icon */}
          <div className="me-1">
            <KTSVG
              className="svg-icon-sm svg-icon-primary"
              path="/media/icons/duotone/Navigation/Angle-right.svg"
            />{" "}
          </div>
          {/* end::Icon */}

          {/* begin::Content */}
          <div className="d-flex flex-column">
            <a
              href="#"
              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
            >
              Craft a headline that is both informative and will capture
            </a>
            <div className="fw-bold text-muted">
              But nothing can prepare you for the real thing
            </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className="d-flex mb-6">
          {/* begin::Icon */}
          <div className="me-1">
            <KTSVG
              className="svg-icon-sm svg-icon-primary"
              path="/media/icons/duotone/Navigation/Angle-right.svg"
            />{" "}
          </div>
          {/* end::Icon */}

          {/* begin::Content */}
          <div className="d-flex flex-column">
            <a
              href="#"
              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
            >
              Write your post, either writing a draft in a single
            </a>
            <div className="fw-bold text-muted">
              Long before you sit down to put pen
            </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className="d-flex mb-6">
          {/* begin::Icon */}
          <div className="me-1">
            <KTSVG
              className="svg-icon-sm svg-icon-primary"
              path="/media/icons/duotone/Navigation/Angle-right.svg"
            />{" "}
          </div>
          {/* end::Icon */}

          {/* begin::Content */}
          <div className="d-flex flex-column">
            <a
              href="#"
              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
            >
              Use images to enhance your post, improve its flow
            </a>
            <div className="fw-bold text-muted">
              Long before you sit down to put digital pen
            </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget5 };
