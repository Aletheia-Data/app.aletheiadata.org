/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  EngageWidget3,
  TablesWidget1,
  Pagination1,
  TablesWidget5
} from "../../../../_start/partials/widgets";

import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const CollectionPage = (data: any) => {
  const [show, setShow] = useState(false);
  const [entityCount, setEntityCount] = useState(0);

  const handlePagination = (page: number) => {
    console.log(page);
  }

  useEffect(() => {
    data = data.data;
    const entity = data.entity;
    const type = data.type;

    let records: any;
    let connection: any;
    let totalConn: any;

    switch (entity) {
      case 'src':
        connection = data.alexandriasConnection.groupBy.source;
        records = data.source.alexandrias;
        totalConn = connection.filter((item: any) => item.key === data.source.id);
        console.log(totalConn);
        break;
      case 'dep':
        connection = data.alexandriasConnection.groupBy.department;
        records = data.department.alexandrias;
        totalConn = connection.filter((item: any) => item.key === data.department.id);
        break;
      case 'cat':
        connection = data.alexandriasConnection.groupBy.department;
        records = data.category.alexandrias;
        totalConn = connection[0];
        break;
    }

    setEntityCount(connection.length > 0 ? connection[0].connection.aggregate.totalCount : 0);
  }, [])

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
          <TablesWidget5 data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <Pagination1 handleClick={handlePagination} totalItems={entityCount} />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
