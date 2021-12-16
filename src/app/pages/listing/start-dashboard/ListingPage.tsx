/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  EngageWidget1,
  EngageWidget2,
  EngageWidget3,
  EngageWidget5,
  StatsWidget9,
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const ListingPage = (data: any) => {
  const [show, setShow] = useState(false);

  console.log(data);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget3
            data={data}
            color="white"
            className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <TablesWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <TablesWidget4 data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
