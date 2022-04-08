import React, { FC, useState } from "react";
import {
  EngageWidget6,
  Pagination1,
  TablesWidget6,
} from "../../../../_start/partials/widgets";
import { MiniSearchService } from "_start/partials/components";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const SinglePage: FC<any> = (data: any) => {
  const [show, setShow] = useState(false);
  const [paginationCount, setPaginationCount] = useState(0);
  const [paginationPage, setPaginationPage] = useState(1);

  const handlePagination = (page: any) => {
    setPaginationPage(page.newPage);
  };

  const getPagination = (totalPages: any) => {
    setPaginationCount(totalPages * 20);
  };

  const handleExit = () => {
    data.data.toogleMinisearch();
  };

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget6
            className="card-stretch mb-5 mb-xxl-8"
            color="white"
            data={data}
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div
        className={`row g-0 g-xl-5 g-xxl-12 ${
          data.minisearchActive
            ? "hide"
            : data.data.minisearchActive
            ? "hide"
            : ""
        }`}
      >
        <div className="col-xl-12">
          <TablesWidget6
            className="card-stretch mb-5 mb-xxl-8"
            data={data}
            type="alexandrias"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div
        className={`row g-0 g-xl-5 g-xxl-12 ${
          data.minisearchActive
            ? "hide"
            : data.data.minisearchActive
            ? "hide"
            : ""
        }`}
      >
        <div className="col-xl-12">
          <TablesWidget6
            className="card-stretch mb-5 mb-xxl-8"
            data={data}
            type="aletheias"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Minisearch */}
      {data.data.alexandrias[0].type === "csv" && (
        <div
          className={`row g-0 g-xl-5 g-xxl-12 ${
            data.minisearchActive
              ? ""
              : data.data.minisearchActive
              ? ""
              : "hide"
          }`}
        >
          <div className="col-xl-12">
            <MiniSearchService
              className="card-stretch mb-5 mb-xxl-8"
              data={data}
              getPagination={getPagination}
              handleExit={handleExit}
              paginationPage={paginationPage}
              type="aletheias"
            />
          </div>
        </div>
      )}
      {/* end::Row */}

      {/* begin::Row - Minisearch Pagination */}
      <div
        className={`row g-0 g-xl-5 g-xxl-12 ${
          data.minisearchActive ? "" : data.data.minisearchActive ? "" : "hide"
        }`}
      >
        <div className="col-xl-12">
          <Pagination1
            handleClick={handlePagination}
            perPageItems={20}
            totalItems={paginationCount}
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
