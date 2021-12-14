/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Toggle } from "./Toggle";
import { Free } from "./Free";
import { FreeRelatedProducts } from "./FreeRelatedProducts";
import { KTSVG } from "../../../helpers";

export function ExploreMain() {
  return (
    <>
      {/* begin::Exolore drawer */}
      <div
        id="kt_explore"
        className="explore bg-white"
        data-kt-drawer="true"
        data-kt-drawer-name="explore"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_explore_toggle"
        data-kt-drawer-close="#kt_explore_close"
      >
        {/* begin::Card  */}
        <div className="card shadow-none w-100">
          {/* begin::Header */}
          <div className="card-header" id="kt_explore_header">
            <h5 className="card-title fw-bold text-gray-600">Upgrade to Pro</h5>

            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                id="kt_explore_close"
              >
                <KTSVG
                  path="/media/icons/duotone/Navigation/Close.svg"
                  className="svg-icon-2"
                />
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className="card-body" id="kt_explore_body">
            {/* begin::Content */}
            <div
              id="kt_explore_scroll"
              className="scroll-y me-n5 pe-5"
              data-kt-scroll="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-wrappers="#kt_explore_body"
              data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
              data-kt-scroll-offset="5px"
            >
              <Free />
              <FreeRelatedProducts />
            </div>
            {/* end::Content */}
          </div>
          {/* end::Body */}
          {/* begin::Footer */}
          <div className="card-footer py-5 text-center" id="kt_explore_footer">
            <a
              href="https://keenthemes.com/products/start-react-free"
              className="btn btn-lg explore-btn-secondary w-100"
            >
              Download
              <span className="fw-bolder ms-1">Start React Free</span>
            </a>
          </div>
          {/* end::Footer */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::Exolore drawer */}
    </>
  );
}
