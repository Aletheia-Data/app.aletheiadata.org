/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  EngageWidget5,
  ListsWidget1,
  StatsWidget1,
  TablesWidget1,
  TablesWidget2,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import {Stats} from '../../../../_start/partials/components'

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const [imports, setImports] = useState([{}]);
  const [importsCount, setImportsCount] = useState(0);
  const [loadingArchive, setLoadingArchive] = useState(true);
  const [archiveCount, setArchiveCount] = useState({});

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <EngageWidget5 className="card-stretch mb-5 mb-xxl-8">
            {/* begin::Action */}
            <div className="text-center pt-7">
              <a
                className="disabled btn btn-primary fw-bolder fs-6 px-7 py-3"
                onClick={() => setShow(true)}
              >
                Subir Archivo
              </a>
            </div>
            {/* end::Action */}
          </EngageWidget5>
        </div>

        <div className="col-xl-8">
          <TablesWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <ListsWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <TablesWidget2 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget1 files={archiveCount} loadingArchive={loadingArchive} className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <Stats id={'src'} title={'Fuentes'} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">

        </div>

        <div className="col-xl-8">
          <Stats id={'dep'} title={'Ministerios o instituciónes'} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">

        </div>

        <div className="col-xl-8">
          <Stats id={'cat'} title={'Categorias'} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
