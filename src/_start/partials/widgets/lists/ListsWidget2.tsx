/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const ListsWidget2: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">My Competitors</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            More than 400+ new members
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-4">
        {/* begin::Item */}
        <div className="d-flex mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-60px symbol-2by3 me-4">
            <img
              src={toAbsoluteUrl("/media/stock/600x400/img-17.jpg")}
              alt=""
              className="mw-100"
            />
          </div>
          {/* end::Symbol */}

          {/* begin::Section */}
          <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
              <a
                href="#"
                className="text-gray-800 fw-bolder text-hover-primary fs-6"
              >
                Cup & Green
              </a>
              <span className="text-muted fw-bold fs-7 my-1">
                Study the highway types
              </span>
              <span className="text-muted fw-bold fs-7">
                Created by: <span className="text-info fw-bold">CoreTeam</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="text-end py-lg-0 py-2">
              <span className="text-gray-800 fw-bolder fs-3">24,900</span>
              <span className="text-muted fs-7 fw-bolder d-block">votes</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}

        {/* begin: Item */}
        <div className="d-flex mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-60px symbol-2by3 me-4">
            <img
              src={toAbsoluteUrl("/media/stock/600x400/img-10.jpg")}
              alt=""
              className="mw-100"
            />
          </div>
          {/* end::Symbol */}

          {/* begin::Section */}
          <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
              <a
                href="#"
                className="text-gray-800 fw-bolder text-hover-primary fs-6"
              >
                Yellow Background
              </a>
              <span className="text-muted fw-bold fs-7 my-1">
                Study the highway types
              </span>
              <span className="text-muted fw-bold fs-7">
                Created by:{" "}
                <span className="text-info fw-bold">KeenThemes</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="text-end py-lg-0 py-2">
              <span className="text-gray-800 fw-bolder fs-3">70,380</span>
              <span className="text-muted fs-7 fw-bolder d-block">votes</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end: Item */}

        {/* begin::Item */}
        <div className="d-flex mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-60px symbol-2by3 me-4">
            <img
              src={toAbsoluteUrl("/media/stock/600x400/img-1.jpg")}
              alt=""
              className="mw-100"
            />
          </div>
          {/* end::Symbol */}

          {/* begin::Section */}
          <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
              <a
                href="#"
                className="text-gray-800 fw-bolder text-hover-primary fs-6"
              >
                Nike & Blue
              </a>
              <span className="text-muted fw-bold fs-7 my-1">
                Study the highway types
              </span>
              <span className="text-muted fw-bold fs-7">
                Created by:{" "}
                <span className="text-info fw-bold">Invision Inc.</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="text-end py-lg-0 py-2">
              <span className="text-gray-800 fw-bolder fs-3">24,200</span>
              <span className="text-muted fs-7 fw-bolder d-block">votes</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className="d-flex">
          {/* begin::Symbol */}
          <div className="symbol symbol-60px symbol-2by3 me-4">
            <img
              src={toAbsoluteUrl("/media/stock/600x400/img-9.jpg")}
              alt=""
              className="mw-100"
            />
          </div>
          {/* end::Symbol */}

          {/* begin::Section */}
          <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
              <a
                href="#"
                className="text-gray-800 fw-bolder text-hover-primary fs-6"
              >
                Desserts platter
              </a>
              <span className="text-muted fw-bold fs-7 my-1">
                Study the highway types
              </span>
              <span className="text-muted fw-bold fs-7">
                Created by:{" "}
                <span className="text-info fw-bold">Figma Studio</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="text-end py-lg-0 py-2">
              <span className="text-gray-800 fw-bolder fs-3">36,450</span>
              <span className="text-muted fs-7 fw-bolder d-block">votes</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget2 };
