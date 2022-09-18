import React, { useState } from "react";
import {
  Achievements,
  BigUploader,
  LibraryStats,
  Timeline,
  NFTTimeline,
} from "_start/partials/components";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import { Stats, TypeStats } from "../../../../_start/partials/components";

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const [loadingArchive] = useState(true);
  const [archiveCount] = useState({});

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <BigUploader className="card-stretch mb-5 mb-xxl-8">
            {/* begin::Action */}
            <div className="text-center pt-7">
              <a
                className="btn btn-primary fw-bolder fs-6 px-7 py-3"
                onClick={() => setShow(true)}
              >
                Subir Archivo
              </a>
            </div>
            {/* end::Action */}
          </BigUploader>
        </div>

        <div className="col-xl-8">
          <TypeStats className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <Timeline className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <Achievements className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <LibraryStats
            className="card-stretch mb-5 mb-xxl-8"
            files={archiveCount}
            loadingArchive={loadingArchive}
          />
        </div>

        <div className="col-xl-8">
          <Stats
            className="card-stretch mb-5 mb-xxl-8"
            id="src"
            title="Fuentes"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <NFTTimeline className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <Stats
            className="card-stretch mb-5 mb-xxl-8"
            id="dep"
            title="Ministerios o instituciónes"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4" />

        <div className="col-xl-8">
          <Stats
            className="card-stretch mb-5 mb-xxl-8"
            id="cat"
            title="Categorias"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal handleClose={() => setShow(false)} show={show} />
      {/* end::Modals */}
    </>
  );
};
