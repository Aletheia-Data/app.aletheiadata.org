/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown2 } from "../../content/dropdown/Dropdown2";

type Props = {
  className: string;
};

const FeedsWidget3: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body*/}
      <div className="card-body pb-0">
        {/* begin::Top*/}
        <div className="d-flex align-items-center">
          {/* begin::Symbol*/}
          <div className="symbol symbol-45px me-5">
            <span className="symbol-label bg-light align-items-end">
              <img
                alt="Logo"
                src={toAbsoluteUrl("/media/svg/avatars/047-girl-25.svg")}
                className="mh-40px"
              />
            </span>
          </div>
          {/* end::Symbol*/}

          {/* begin::Info*/}
          <div className="d-flex flex-column flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder"
            >
              Ruby Liam
            </a>
            <span className="text-muted fw-bold">Yestarday at 5:06 PM</span>
          </div>
          {/* end::Info*/}

          {/* begin::Dropdown Menu*/}
          <div className="dropdown dropdown-inline">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-bs-toggle="dropdown"
            >
              <KTSVG
                path="/media/icons/duotone/Text/Dots.svg"
                className="svg-icon-4"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end w-md-325px p-0 m-0">
              <Dropdown2 />
            </div>
          </div>
          {/* end::Dropdown Menu*/}
        </div>
        {/* end::Top*/}

        {/* begin::Bottom*/}
        <div className="pt-4">
          {/* begin::Image*/}
          <div
            className="bgi-no-repeat bgi-size-cover rounded min-h-250px"
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                "/media/stock/900x600/3.jpg"
              )}')`,
            }}
          ></div>
          {/* end::Image*/}

          {/* begin::Text*/}
          <p className="text-gray-800 fs-6 fw-normal pt-5 mb-2">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </p>
          {/* end::Text*/}

          {/* begin::Action*/}
          <div className="d-flex align-items-center">
            <a
              href="#"
              className="btn btn-sm btn-color-muted btn-active-light-primary fw-bolder"
            >
              <KTSVG
                className="svg-icon-4"
                path="/media/icons/duotone/Communication/Group-chat.svg"
              />
              24
            </a>

            <a
              href="#"
              className="btn btn-sm btn-color-muted btn-active-light-danger fw-bolder"
            >
              <KTSVG
                className="svg-icon-3 pe-1"
                path="/media/icons/duotone/General/Heart.svg"
              />
              75
            </a>
          </div>
          {/* end::Action*/}
        </div>
        {/* end::Bottom*/}

        {/* begin::Separator*/}
        <div className="separator mt-2"></div>
        {/* end::Separator*/}

        {/* begin::Editor*/}
        <form className="position-relative py-4 d-flex align-items-center pb-5">
          <textarea
            id="kt_forms_widget_3_input"
            className="form-control min-h-auto border-0 p-0 pe-10 resize-none"
            rows={1}
            placeholder="Reply..."
          ></textarea>

          <div className="position-absolute top-0 end-0 mt-2 me-n3">
            <span className="btn btn-icon btn-sm btn-active-color-primary">
              <i className="fas fa-paperclip fs-6"></i>
            </span>
            <span className="btn btn-icon btn-sm btn-active-color-primary">
              <i className="fas fa-map-marker-alt fs-6"></i>
            </span>
          </div>
        </form>
        {/* edit::Editor*/}
      </div>
      {/* end::Body*/}
    </div>
  );
};

export { FeedsWidget3 };
