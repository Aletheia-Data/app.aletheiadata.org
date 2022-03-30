import React from "react";
import { Ktsvg } from "../../../../_start/helpers";

export function FAQPage(): JSX.Element {
  return (
    <div className="d-flex flex-column flex-md-row">
      {/*begin::Aside */}
      <div className="flex-column flex-md-row-auto w-100 w-md-250px w-xxl-350px">
        {/*begin::List Widget 2*/}
        <div className="card card-custom mb-10 mb-md-0">
          {/*begin::Body*/}
          <div className="card-body py-10 px-6">
            {/*begin::Search Input*/}
            <div className="d-flex flex-column mb-10 px-3">
              {/*begin::Form*/}
              <form>
                <div
                  className="input-group input-group-solid"
                  id="kt_chat_aside_search"
                >
                  <span className="input-group-text" id="basic-addon1">
                    <Ktsvg
                      className="svg-icon-1 svg-icon-dark"
                      path="/media/icons/duotone/General/Search.svg"
                    />
                  </span>
                  <input
                    className="form-control ps-0 py-4 h-auto"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Search Input*/}

            {/*begin::Authors List*/}
            <ul className="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10">
              <li className="menu-content fw-bold pb-2 px-3">
                <span className="fs-3 fw-bolder">Premium Authors</span>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3" href="#">
                  Getting Started
                </a>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3 active" href="#">
                  Popular Articles
                </a>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3" href="#">
                  Uploading Theme
                </a>
              </li>
              <li className="menu-item px-3">
                <a className="menu-link fs-6 px-3" href="#">
                  Licensing
                </a>
              </li>
            </ul>
            {/*end::Authors List*/}

            {/*begin::Theme List*/}
            <ul className="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold">
              <li className="menu-content fw-bold pb-2 px-3">
                <span className="fs-3 fw-bolder">Theme Customers</span>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3" href="#">
                  User Profile
                </a>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3" href="#">
                  Timeline
                </a>
              </li>
              <li className="menu-item px-3 pb-1">
                <a className="menu-link fs-6 px-3" href="#">
                  Pricing Tables
                </a>
              </li>
              <li className="menu-item px-3">
                <a className="menu-link fs-6 px-3" href="#">
                  Wizard Options
                </a>
              </li>
            </ul>
            {/*end::Theme List*/}
          </div>
          {/*end::Body*/}
        </div>
        {/*end::List Widget 2*/}
      </div>
      {/*end::Aside*/}

      {/*begin::Layout*/}
      <div className="flex-md-row-fluid ms-md-12">
        {/*begin::Card*/}
        <div className="card card-custom">
          <div className="card-body py-10">
            <h2 className="text-dark fw-bolder fs-1 mb-5">Popular Articles</h2>

            {/*begin::Accordion*/}
            <div
              className="accordion accordion-icon-toggle"
              id="kt_accordion_1"
            >
              {/*begin::Item*/}
              <div className="mb-5">
                {/*begin::Header*/}
                <div
                  className="accordion-header py-3 d-flex"
                  data-bs-target="#kt_accordion_1_item_1"
                  data-bs-toggle="collapse"
                >
                  <span className="accordion-icon">
                    <Ktsvg
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                  <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                    The best way to quick start business
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div
                  className="fs-6 collapse show ps-10"
                  data-bs-parent="#kt_accordion_1"
                  id="kt_accordion_1_item_1"
                >
                  <div className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </div>

                  <div>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </div>
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Item*/}

              {/*begin::Item*/}
              <div className="mb-5">
                {/*begin::Header*/}
                <div
                  className="accordion-header py-3 d-flex collapsed"
                  data-bs-target="#kt_accordion_1_item_2"
                  data-bs-toggle="collapse"
                >
                  <span className="accordion-icon">
                    <Ktsvg
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                  <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                    How To Create Channel ?
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div
                  className="collapse fs-6 ps-10"
                  data-bs-parent="#kt_accordion_1"
                  id="kt_accordion_1_item_2"
                >
                  <div className="mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even slightly believable.
                  </div>

                  <div className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </div>

                  <div>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </div>
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Item*/}

              {/*begin::Item*/}
              <div className="mb-5">
                {/*begin::Header*/}
                <div
                  className="accordion-header py-3 d-flex collapsed"
                  data-bs-target="#kt_accordion_1_item_3"
                  data-bs-toggle="collapse"
                >
                  <span className="accordion-icon">
                    <Ktsvg
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                  <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                    What are the support terms & conditions ?
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div
                  className="collapse fs-6 ps-10"
                  data-bs-parent="#kt_accordion_1"
                  id="kt_accordion_1_item_3"
                >
                  Some plugins may ask for a purchase code for
                  registration/activation once installed, however, you can
                  simply ignore these messages as bundled plugins do not require
                  activation or registration.
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Item*/}

              {/*begin::Item*/}
              <div className="mb-5">
                {/*begin::Header*/}
                <div
                  className="accordion-header py-3 d-flex collapsed"
                  data-bs-target="#kt_accordion_1_item_4"
                  data-bs-toggle="collapse"
                >
                  <span className="accordion-icon">
                    <Ktsvg
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                  <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                    What is the 6 Months support extention ?
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div
                  className="collapse fs-6 ps-10"
                  data-bs-parent="#kt_accordion_1"
                  id="kt_accordion_1_item_4"
                >
                  Some plugins may ask for a purchase code for
                  registration/activation once installed, however, you can
                  simply ignore these messages as bundled plugins do not require
                  activation or registration. The plugin will still work as
                  intended with the theme once the theme has been
                  activated/registered. When a plugin is updated, the theme
                  author will include the latest version of the bundled plugin
                  with their next theme update.
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Item*/}

              {/*begin::Item*/}
              <div className="mb-5">
                {/*begin::Header*/}
                <div
                  className="accordion-header py-3 d-flex collapsed"
                  data-bs-target="#kt_accordion_1_item_5"
                  data-bs-toggle="collapse"
                >
                  <span className="accordion-icon">
                    <Ktsvg
                      className="svg-icon-4"
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                  <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                    How can I keep up to date my item ?
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div
                  className="collapse fs-6 ps-10"
                  data-bs-parent="#kt_accordion_1"
                  id="kt_accordion_1_item_5"
                >
                  Some plugins may ask for a purchase code for
                  registration/activation once installed, however, you can
                  simply ignore these messages as bundled plugins do not require
                  activation or registration. The plugin will still work as
                  intended with the theme once the theme has been
                  activated/registered.
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Accordion*/}
          </div>
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Layout*/}
    </div>
  );
}
