/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Ktsvg } from "../../../helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap-v5";
import axios from "axios";
import { Link } from "react-router-dom";

type Props = {
  className: string;
  innerPadding?: string;
};

// TODO: move to global
const colorPDF = "#FFE6E2";
const colorCSV = "#FFF8DD";
const colorXLS = "#E4FFF4";
const colorODS = "#F7F0FF";
const colorOTHER = "#E7F6FF";

const TypeStats: React.FC<Props> = ({ className, innerPadding = "" }) => {
  const [formats, setFormats] = useState<any[]>([]);
  const [formatsTotals, setFormatsTotals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/categories/getAll?status=under_review&sort=createdat:DESC&limit=5&start=0`); // Replace with your RESTful API endpoint
        const response2 = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/categories/getAll`); // Replace with your RESTful API endpoint

        setFormats(response1.data.groupBy.type);
        setFormatsTotals(response2.data.groupBy.type);
      } catch (err) {
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPercentage = (value: number, total: number) => {
    const percOnRev = (value * 100) / total;
    const perc = 100 - percOnRev;
    return `${perc.toFixed(0)}%`;
  };

  const checkFormats = [false, false, false, false, false];
  const availableFormats = ["pdf", "csv", "xlsx", "ods", "other"];

  formats.map((f: any) => {
    switch (f.key) {
      case "pdf":
        f.id = 1;
        checkFormats[0] = true;
        break;
      case "csv":
        f.id = 2;
        checkFormats[1] = true;
        break;
      case "xlsx":
        f.id = 3;
        checkFormats[2] = true;
        break;
      case "ods":
        f.id = 4;
        checkFormats[3] = true;
        break;
      case "other":
        f.id = 5;
        checkFormats[4] = true;
        break;
    }
  });

  checkFormats.map((bool, index) => {
    if (!bool) {
      formats.push({
        connection: {
          aggregate: {
            count: 0,
            totalCount: 10784,
          },
        },
        id: index,
        key: availableFormats[index],
      });
    }
  });

  formats.sort((a: any, b: any) => a.id - b.id);

  if (loading) {
    return (
      <div className={`card ${className}`}>
        {/* <!--begin::Header--> */}
        <div className={`card-header border-0 pt-5 ${innerPadding}`}>
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder text-dark fs-3">
              Archivos Depositados
            </span>
            <span className="text-muted mt-2 fw-bold fs-6">
              {"Cargando Archivos"}
            </span>
          </h3>
          <div className="card-toolbar">
            <ul className="nav nav-pills nav-pills-sm nav-light">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_1"
                >
                  Day
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--end::Header--> */}

        {/* <!--begin::Body--> */}
        <div className="card-body pt-2 pb-0 mt-n3">
          <div className="tab-content mt-5" id="myTabTables1">
            {/* <!--begin::Tap pane--> */}
            <div
              className="tab-pane fade active show"
              id="kt_tab_pane_1_1"
              role="tabpanel"
              aria-labelledby="kt_tab_pane_1_1"
            >
              {/* <!--begin::Table--> */}
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th className="p-0 w-50px"></th>
                      <th className="p-0 min-w-200px"></th>
                      <th className="p-0 min-w-100px"></th>
                      <th className="p-0 min-w-40px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="px-0 py-3">
                        <div className="symbol symbol-65px me-5">
                          <span
                            className="symbol-label"
                            style={{ backgroundColor: colorPDF }}
                          >
                            <img
                              src="/media/icons/aletheia/Formats/pdf.svg"
                              className="svg-icon-1 svg-icon-danger"
                              alt={`pdf`}
                            />
                          </span>
                        </div>
                      </th>
                      <td className="ps-0">
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Loading ...
                        </a>
                        <span className="text-muted fw-bold d-block mt-1">
                          Loading ...
                        </span>
                      </td>
                      <td>
                        <div className="d-flex flex-column w-100 me-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="text-dark me-2 fs-6 fw-bolder">
                              Loading ...
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="progress h-6px  w-100 bg-light-danger">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "0%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span className="text-muted fs-7 fw-bold ps-3">
                              0%
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                          <Ktsvg
                            path="/media/icons/duotone/Navigation/Arrow-right.svg"
                            className="svg-icon-4"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--end::Table--> */}
            </div>
            {/* <!--end::Tap pane--> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      {/* <!--begin::Header--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Archivos Depositados
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {formats[0].connection.aggregate.totalCount} Archivos
          </span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            {/* Add tabs if necessary */}
          </ul>
        </div>
      </div>
      {/* <!--end::Header--> */}

      {/* <!--begin::Body--> */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  {formats.map((f, idx) => (
                    <tr key={idx}>
                      <th className="px-0 py-3">
                        <div className="symbol symbol-65px me-5">
                          <span
                            className="symbol-label"
                            style={{
                              backgroundColor:
                                f.key === "pdf"
                                  ? colorPDF
                                  : f.key === "csv"
                                  ? colorCSV
                                  : f.key === "xlsx"
                                  ? colorXLS
                                  : f.key === "ods"
                                  ? colorODS
                                  : colorOTHER,
                            }}
                          >
                            <img
                              src={`/media/icons/aletheia/Formats/${
                                f.key
                              }.svg`}
                              className="svg-icon-1"
                              alt={f.key}
                            />
                          </span>
                        </div>
                      </th>
                      <td className="ps-0">
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          {f.key.toUpperCase()}
                        </a>
                        <span className="text-muted fw-bold d-block mt-1">
                          {f.connection.aggregate.count} Archivos
                        </span>
                      </td>
                      <td>
                        <div className="d-flex flex-column w-100 me-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="text-dark me-2 fs-6 fw-bolder">
                              {getPercentage(
                                f.connection.aggregate.count,
                                f.connection.aggregate.totalCount
                              )}
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="progress h-6px w-100 bg-light-danger">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{
                                  width: `${getPercentage(
                                    f.connection.aggregate.count,
                                    f.connection.aggregate.totalCount
                                  )}`,
                                }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span className="text-muted fs-7 fw-bold ps-3">
                              {getPercentage(
                                f.connection.aggregate.count,
                                f.connection.aggregate.totalCount
                              )}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <Link
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          to={`#`}
                        >
                          <Ktsvg
                            path="/media/icons/duotone/Navigation/Arrow-right.svg"
                            className="svg-icon-4"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}
        </div>
      </div>
    </div>
  );
};

export { TypeStats };
