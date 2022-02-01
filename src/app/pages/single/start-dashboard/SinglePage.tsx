/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  EngageWidget6,
  Pagination1,
  TablesWidget8,
  TablesWidget6,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const SinglePage = (data: any) => {
  const [show, setShow] = useState(false);
  const [paginationCount, setPaginationCount] = useState(0);
  const [paginationPage, setPaginationPage] = useState(1);
  
  const handlePagination = (page:any) =>{
    // console.log(page);
    setPaginationPage(page.newPage);
  }

  const getPagination = (totalPages:any) =>{
    // console.log(totalPages);
    setPaginationCount(totalPages * 20);
  }

  const handleExit = () => {
    data.data.toogleMinisearch()
    // console.log(data.data);
  }

  console.log(data.data.alexandrias[0].type);

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
      <div className={`row g-0 g-xl-5 g-xxl-12 ${ data.minisearchActive ? 'hide' : data.data.minisearchActive ? 'hide' : '' }`}>
        <div className="col-xl-12">
          <TablesWidget6 type={'alexandrias'} data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className={`row g-0 g-xl-5 g-xxl-12 ${ data.minisearchActive ? 'hide' : data.data.minisearchActive ? 'hide' : '' }`}>
        <div className="col-xl-12">
          <TablesWidget6 type={'aletheias'} data={data} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Minisearch */}
      {
        data.data.alexandrias[0].type === 'csv' &&
        <div className={`row g-0 g-xl-5 g-xxl-12 ${ data.minisearchActive ? '' : data.data.minisearchActive ? '' : 'hide' }`}>
          <div className="col-xl-12">
            <TablesWidget8 type={'aletheias'} data={data} className="card-stretch mb-5 mb-xxl-8" getPagination={getPagination} paginationPage={paginationPage} handleExit={handleExit} />
          </div>
        </div>
      }
      {/* end::Row */}

      {/* begin::Row - Minisearch Pagination */}
      <div className={`row g-0 g-xl-5 g-xxl-12 ${ data.minisearchActive ? '' : data.data.minisearchActive ? '' : 'hide' }`}>
        <div className="col-xl-12">
          <Pagination1 handleClick={handlePagination} totalItems={paginationCount} perPageItems={20} />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
