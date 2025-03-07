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
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all file formats data (pdf, csv, xlsx, ods, other) for both statuses: under_review and on_line
        const fileFormatCounts = await Promise.all([
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=under_review&type=pdf&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=on_line&type=pdf&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=under_review&type=csv&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=on_line&type=csv&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=under_review&type=xlsx&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=on_line&type=xlsx&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=under_review&type=ods&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=on_line&type=ods&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=under_review&type=other&count=true`),
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?status=on_line&type=other&count=true`)
        ]);

        const fileData = await Promise.all(fileFormatCounts.map((response) => response.json()));

        // Calculate totals for under_review and on_line for each format
        const formatsData = [
          { key: "pdf", count: fileData[0].body.totalCount + fileData[1].body.totalCount },
          { key: "csv", count: fileData[2].body.totalCount + fileData[3].body.totalCount },
          { key: "xlsx", count: fileData[4].body.totalCount + fileData[5].body.totalCount },
          { key: "ods", count: fileData[6].body.totalCount + fileData[7].body.totalCount },
          { key: "other", count: fileData[8].body.totalCount + fileData[9].body.totalCount }
        ];


        const grandTotal = await Promise.all([
          fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?count=true`)
        ]);
        const grandTotalRes = await Promise.all(grandTotal.map((response) => response.json()));
        // console.log('grandTotal: ', grandTotalRes);
        
        setTotal(grandTotalRes[0].body.totalCount);

        setFormats(formatsData);
        setFormatsTotals(fileData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  const getPercentage = (value: number) => {
    if (total === 0) return "0%";
    const perc = (value * 100) / total;
    return `${perc.toFixed(0)}%`;
  };

  if (loading) {
    return (
      <div className={`card ${className}`}>
        <div className={`card-header border-0 pt-5 ${innerPadding}`}>
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder text-dark fs-3">
              Archivos Depositados
            </span>
            <span className="text-muted mt-2 fw-bold fs-6">
              {"Cargando Archivos"}
            </span>
          </h3>
        </div>
        <div className="card-body pt-2 pb-0 mt-n3">
          <div className="tab-content mt-5">
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
                  {/* Loading content */}
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label" style={{ backgroundColor: colorPDF }}>
                          <img
                            src="/media/icons/aletheia/Formats/pdf.svg"
                            className="svg-icon-1 svg-icon-danger"
                            alt="pdf"
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
                          <div className="progress h-6px w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">0%</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <Ktsvg path="/media/icons/duotone/Navigation/Arrow-right.svg" className="svg-icon-4" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">Archivos Depositados</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {total} Archivos
          </span>
        </h3>
      </div>
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5">
          <div className="tab-pane fade active show" id="kt_tab_pane_1_1" role="tabpanel">
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
                              src={`/media/icons/aletheia/Formats/${f.key}.svg`}
                              className="svg-icon-1"
                              alt={f.key}
                            />
                          </span>
                        </div>
                      </th>
                      <td className="ps-0">
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">{f.key.toUpperCase()}</a>
                        <span className="text-muted fw-bold d-block mt-1">{f.count} Archivos</span>
                      </td>
                      <td>
                        <div className="d-flex flex-column w-100 me-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="text-dark me-2 fs-6 fw-bolder">
                              {getPercentage(f.count)}
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="progress h-6px w-100 bg-light-danger">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: getPercentage(f.count) }}
                              />
                            </div>
                            <span className="text-muted fs-7 fw-bold ps-3">{getPercentage(f.count)}</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <Link to={`/uploads/${f.key}`} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                          <Ktsvg path="/media/icons/duotone/Navigation/Arrow-right.svg" className="svg-icon-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {TypeStats};
