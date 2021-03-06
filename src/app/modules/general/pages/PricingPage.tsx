import React from "react";
import { Ktsvg } from "../../../../_start/helpers";

export function PricingPage(): JSX.Element {
  return (
    <div className="card">
      <div className="card-body p-12">
        <div className="row mb-12">
          <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3 d-flex flex-center">
            {/*begin::Tabs*/}
            <div
              className="nav bg-light rounded p-3"
              id="nav-tab"
              role="tablist"
            >
              <a
                aria-controls="kt_nav_monthly"
                aria-selected="true"
                className="nav-link rounded active btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5 me-2"
                data-bs-toggle="tab"
                href="#kt_nav_monthly_content"
                id="kt_nav_monthly"
                role="tab"
              >
                Monthly
              </a>
              <a
                aria-controls="kt_nav_annually"
                aria-selected="false"
                className="nav-link rounded btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5"
                data-bs-toggle="tab"
                href="#kt_nav_annually_content"
                id="kt_nav_annually"
                role="tab"
              >
                Annually
              </a>
            </div>
            {/*end::Tabs*/}
          </div>
          <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
            {/*begin::Tab content*/}
            <div className="tab-content" id="nav-tabContent">
              {/*begin::Monthly Prices*/}
              <div
                aria-labelledby="kt_nav_monthly"
                className="tab-pane fade show active"
                id="kt_nav_monthly_content"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center">
                      <div className="text-primary fs-3 fw-bolder mb-7">
                        Free
                      </div>
                      <div className="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="align-self-start fs-2 mt-3">$</span>0
                      </div>
                      <div className="text-muted fw-bolder mb-7">Monthly</div>
                      <a
                        className="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center bg-primary rounded">
                      <div className="text-white fs-3 fw-bolder mb-7">Pro</div>
                      <div className="fs-5x text-white fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="fs-2 mt-3">$</span>49
                      </div>
                      <div className="text-white fw-bolder mb-7">Monthly</div>
                      <a
                        className="btn bg-white bg-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center">
                      <div className="text-primary fs-3 fw-bolder mb-7">
                        Lifetime
                      </div>
                      <div className="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="fs-2 mt-3">$</span>199
                      </div>
                      <div className="text-muted fw-bolder mb-7">Monthly</div>
                      <a
                        className="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end::Monthly Prices*/}

              {/*begin::Annually Prices*/}
              <div
                aria-labelledby="kt_nav_annually"
                className="tab-pane fade"
                id="kt_nav_annually_content"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center">
                      <div className="text-primary fs-3 fw-bolder mb-7">
                        Free
                      </div>
                      <div className="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="fs-2 mt-3">$</span>0
                      </div>
                      <div className="text-muted fw-bolder mb-7">Annually</div>
                      <a
                        className="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center bg-primary rounded">
                      <div className="text-white fs-3 fw-bolder mb-7">Pro</div>
                      <div className="fs-5x text-white fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="fs-2 mt-3">$</span>499
                      </div>
                      <div className="text-white fw-bolder mb-7">Annually</div>
                      <a
                        className="btn bg-white bg-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-12 col-xl-4">
                    <div className="d-flex flex-column text-center px-9 py-12 justify-content-center">
                      <div className="text-primary fs-3 fw-bolder mb-7">
                        Lifetime
                      </div>
                      <div className="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm">
                        <span className="fs-2 mt-3">$</span>2,299
                      </div>
                      <div className="text-muted fw-bolder mb-7">Annually</div>
                      <a
                        className="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                        href="#"
                      >
                        Start
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end::Annually Prices*/}
            </div>
            {/*begin::Tab content*/}
          </div>
        </div>

        {/*begin::Table*/}
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td className="border-0 p-0">
                  <div className="d-flex bg-light   rounded flex-nowrap">
                    <div className="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px">
                      Sublicense Visuals
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-white rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-white rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-white rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-0 p-0">
                  <div className="d-flex flex-nowrap">
                    <div className="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px">
                      Free Updates
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-light rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-light rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-light rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-0 p-0">
                  <div className="d-flex bg-light   rounded flex-nowrap">
                    <div className="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px">
                      Theme Support
                    </div>
                    <div className="py-8 px-9 flex-root" />
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-white rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                    <div className="py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-white rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-0 p-0">
                  <div className="d-flex flex-nowrap">
                    <div className="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px">
                      Unlimited Websites
                    </div>
                    <div className="py-8 px-9 flex-root" />
                    <div className="py-8 px-9 flex-root" />
                    <div className="fw-bolder fs-3 py-8 px-9 flex-root d-flex justify-content-center">
                      <span className="bg-light rounded h-40px w-40px d-flex flex-center">
                        <Ktsvg
                          className="svg-icon-1 svg-icon-primary"
                          path="/media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*end::Table*/}
      </div>
    </div>
  );
}
