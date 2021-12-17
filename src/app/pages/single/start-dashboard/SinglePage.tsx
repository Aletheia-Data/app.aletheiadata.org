/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  EngageWidget6,
  TablesWidget1,
  TablesWidget6,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const SinglePage = (data: any) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget6
            data={data}
            color="white"
            className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <TablesWidget6 type={'alexandrias'} data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <TablesWidget6 type={'aletheias'} data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
