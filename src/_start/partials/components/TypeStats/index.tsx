/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Ktsvg } from "../../../helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap-v5";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
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
  const TYPE_QUERY = gql`
    query AlexandriasGroupByType {
      alexandriasConnection(sort: "desc", where: { status: "under_review" }) {
        groupBy {
          type {
            key
            connection {
              aggregate {
                count
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  var { data, loading, error } = useQuery(TYPE_QUERY, {
    variables: {},
  });

  let formats;
  if (data) {
    formats = data.alexandriasConnection.groupBy.type;
  }

  const TYPE_QUERY_ALL = gql`
    query AlexandriasGroupByType {
      alexandriasConnection {
        groupBy {
          type {
            key
            connection {
              aggregate {
                count
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  var {
    data: DataAll,
    loading: LoadingAll,
    error,
  } = useQuery(TYPE_QUERY_ALL, {
    variables: {},
  });

  let formats_totals: any;
  if (DataAll) {
    formats_totals = DataAll.alexandriasConnection.groupBy.type;
  }

  if (loading || LoadingAll) {
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

  const getPercentage = (value: number, total: number) => {
    // under_review : x = total : 100
    // under_review * 100 / total
    const percOnRev = (value * 100) / total;
    const perc = 100 - percOnRev;
    return `${perc.toFixed(0)}%`;
  };

  const checkFormats = [false, false, false, false, false];
  const availableFormats = ["pdf", "csv", "xlsx", "ods", "other"];
  // order by
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
      // check if there's any format that's been process fully (100% doesn't show up on query)
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
            {/**
             * TODO: restore when having at least 7 types
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                All
              </a>
            </li>
             <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                Week
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_3"
              >
                Month
              </a>
            </li>
             */}
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
                  {formats.map((format: any) => {
                    // format check
                    let color;
                    let icon;
                    let barColor;
                    let barBack;
                    let total = formats_totals.filter(
                      (filter: any) => filter.key === format.key
                    )[0];

                    if (!total) return;

                    switch (format.key) {
                      case "pdf":
                        color = colorPDF;
                        icon = "/media/icons/aletheia/Formats/pdf.svg";
                        barColor = "background-pdf";
                        barBack = "background-pdf-backdrop";
                        break;
                      case "csv":
                        color = colorCSV;
                        icon = "/media/icons/aletheia/Formats/csv.svg";
                        barColor = "background-csv";
                        barBack = "background-csv-backdrop";
                        break;
                      case "xlsx":
                        color = colorXLS;
                        icon = "/media/icons/aletheia/Formats/xls.svg";
                        barColor = "background-xls";
                        barBack = "background-xls-backdrop";
                        break;
                      case "ods":
                        color = colorODS;
                        icon = "/media/icons/aletheia/Formats/ods.svg";
                        barColor = "background-ods";
                        barBack = "background-ods-backdrop";
                        break;
                      default:
                        color = colorOTHER;
                        icon = "/media/icons/aletheia/Formats/other.svg";
                        barColor = "background-other";
                        barBack = "background-other-backdrop";
                        break;
                    }
                    const info = format.connection.aggregate;

                    return (
                      <tr key={`format_${format.key}`}>
                        <th className="px-0 py-3">
                          <div className="symbol symbol-65px me-5">
                            <span
                              className="symbol-label"
                              style={{ backgroundColor: color }}
                            >
                              <img
                                src={icon}
                                className="svg-icon-1"
                                alt={`format ${format.key}`}
                              />
                            </span>
                          </div>
                        </th>
                        <td className="ps-0">
                          <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                            {format.key.toUpperCase()}
                          </a>
                          <span className="text-muted fw-bold d-block mt-1">
                            Archivos en formato {format.key}
                          </span>
                        </td>
                        <td>
                          <OverlayTrigger
                            key="tooltip"
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-pdf">
                                {total.connection.aggregate.count - info.count}{" "}
                                de {total.connection.aggregate.count}
                              </Tooltip>
                            }
                          >
                            <div className="d-flex flex-column w-100 me-3">
                              <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="text-dark me-2 fs-6 fw-bolder">
                                  Procesados
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div
                                  className={`progress h-6px  w-100 ${barBack}`}
                                >
                                  <div
                                    className={`progress-bar ${barColor}`}
                                    role="progressbar"
                                    style={{
                                      width: getPercentage(
                                        info.count,
                                        total.connection.aggregate.count
                                      ),
                                    }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="text-muted fs-7 fw-bold ps-3">
                                  {getPercentage(
                                    info.count,
                                    total.connection.aggregate.count
                                  )}
                                </span>
                              </div>
                            </div>
                          </OverlayTrigger>
                        </td>
                        <td className="text-end pe-0">
                          <Link
                            to={`#`}
                            className="disabled btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          >
                            <Ktsvg
                              path="/media/icons/duotone/Navigation/Arrow-right.svg"
                              className="svg-icon-4"
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
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
