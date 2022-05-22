import React, { FC, useState, useEffect } from "react";
import {
  EngageWidget6,
  Pagination1,
} from "../../../../_start/partials/widgets";
import { MiniSearchService } from "_start/partials/components";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import Table from "_start/partials/components/Table";
import { getSinglePageColumns } from "../../../../_start/helpers";
import { rapidFetcher } from "_start/helpers/rapidFetch";
import { Deal, Pin } from "_start/types";

export const SinglePage: FC<any> = (data: any) => {
  const [show, setShow] = useState(false);
  const [paginationCount, setPaginationCount] = useState(0);
  const [paginationPage, setPaginationPage] = useState(1);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [pins, setPins] = useState<Pin[]>([]);
  const [fileCoinStatus, setFileCoinStatus] = useState("Loading");
  const [loading, setLoading] = useState(false);

  const handlePagination = (page: any) => {
    setPaginationPage(page.newPage);
  };

  const getPagination = (totalPages: any) => {
    setPaginationCount(totalPages * 20);
  };

  const handleExit = () => {
    data.data.toogleMinisearch();
  };

  useEffect(() => {
    const url = `/services/filecoin/${data.data.alexandrias[0].cid}`;

    async function getFilecoinStatus() {
      setLoading(true);

      try {
        const response = await rapidFetcher().url(url).get().json();
        console.log(response);

        if (response.body?.pins) {
          setPins(response.body?.pins);
        }

        if (response.body?.deals) {
          setDeals(response.body?.deals);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getFilecoinStatus();
  }, [data]);

  useEffect(() => {
    if (pins.length) {
      const hasPinned = pins.some((pin) => pin.status === "Pinned");

      if (hasPinned) {
        setFileCoinStatus("Pinned");
      } else {
        const pinsWithDates = pins.map((pin) => ({
          ...pin,
          updated: new Date(pin.updated),
        }));

        const sortedPins = pinsWithDates.sort(
          (a, b) => b.updated.valueOf() - a.updated.valueOf()
        );

        const [selectedPin] = sortedPins;
        setFileCoinStatus(selectedPin.status);
      }
    } else {
      // TODO: check if is correct default
      setFileCoinStatus("Remote");
    }
  }, [pins]);

  const alexandriasRecords = data.data.alexandrias;
  const aletheiaRecords = data.data.aletheias;

  const alexandriaColumns = getSinglePageColumns(alexandriasRecords);
  const aletheiaColumns = getSinglePageColumns(aletheiaRecords);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget6
            className="card-stretch mb-5 mb-xxl-8"
            color="white"
            data={data}
            deals={deals}
            fileCoinStatus={fileCoinStatus}
            loading={loading}
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
          <Table
            cardClassName="card-stretch mb-5 mb-xxl-8"
            columns={alexandriaColumns}
            emptyMessage="No hay registros disponibles para esta categoria"
            id="alexandria-data-list"
            title="Archivos cargados"
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
          <Table
            cardClassName="card-stretch mb-5 mb-xxl-8"
            columns={aletheiaColumns}
            emptyMessage="No hay registros disponibles para esta categoria"
            id="alexandria-data-list"
            title="Pruebas cargados"
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
            {data.data.minisearchActive && (
              <MiniSearchService
                className="card-stretch mb-5 mb-xxl-8"
                data={data}
                getPagination={getPagination}
                handleExit={handleExit}
                paginationPage={paginationPage}
                type="aletheias"
              />
            )}
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
