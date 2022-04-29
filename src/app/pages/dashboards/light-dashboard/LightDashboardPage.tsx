import React, { useState } from "react";
import { Ktsvg } from "../../../../_start/helpers";
import {
  StatsWidget3,
  StatsWidget4,
  StatsWidget5,
  StatsWidget6,
  StatsWidget7,
  StatsWidget8,
  StatsWidget9,
} from "../../../../_start/partials/widgets";
import { Achievements } from "_start/partials/components";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const LightDashboardPage: React.FC = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget3 className="card-stretch mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-4">
          <StatsWidget4 className="card-stretch mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-4">
          <StatsWidget5 className="card-stretch mb-5  mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xxl-4">
          <StatsWidget6 className="card-stretch mb-5  mb-xxl-8">
            <a
              className="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6"
              onClick={() => setShowCreateAppModal(true)}
            >
              Boost{" "}
              <Ktsvg
                className="svg-icon-3 me-0"
                path="/media/icons/duotone/Navigation/Up-right.svg"
              />
            </a>
          </StatsWidget6>
        </div>

        <div className="col-xxl-8 gy-0 gy-xxl-8">
          <StatsWidget7 className="card-stretch mb-5  mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget8 className="card-stretch-50 mb-5 mb-xxl-8" />
          <StatsWidget9 className="card-stretch-50 mb-5 mb-xxl-8">
            <span className="text-muted fs-6 fw-bold pe-2">
              256 R St. Manhattan NY..
            </span>

            <a
              className="btn btn-sm btn-primary fw-bolder px-6 cursor-pointer"
              href="#"
            >
              Map
            </a>
          </StatsWidget9>
        </div>

        <div className="col-xl-8">
          <Achievements className="card-stretch" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal
        handleClose={() => setShowCreateAppModal(false)}
        show={showCreateAppModal}
      />
      {/* end::Modals */}
    </>
  );
};
