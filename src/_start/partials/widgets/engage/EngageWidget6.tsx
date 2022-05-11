/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../helpers";
import moment from "moment";
import { Deal } from "_start/types";
import { EXTERNAL_ROUTES } from "_start/constants/routes";

type Props = {
  className: string;
  imagePath?: string;
  data: any;
  innerPadding?: string;
  color?: string;
  fileCoinStatus: string;
  deals: Deal[];
  loading?: boolean;
};

const EngageWidget6: React.FC<Props> = ({
  className,
  imagePath = "",
  data,
  innerPadding = "",
  color = "primary",
  fileCoinStatus,
  deals,
  loading
}) => {
  data = data.data;
  const entity = data.entity;
  const type = data.type;

  let countTotal;
  let title;
  let desc;
  let entityCount;
  let records;
  let lastRecord;
  let department;
  let source;
  let proof;

  // sort by aletheias count +
  // get first record (most aletheias)
  data = data.alexandrias[0];

  title = type === "single" ? data.title : "";
  desc =
    type === "single"
      ? data.description
      : "Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.";
  source = data.source.name;
  department = data.department.name;
  proof = data.proof ? data.proof.url : null;

  switch (entity) {
    case "src":
      countTotal = 0;
      entityCount = type === "single" ? "" : 0;
      lastRecord = type === "single" ? "" : data;
      break;
    case "dep":
      countTotal =
        type === "single"
          ? ""
          : data.alexandriasConnection.groupBy.department[0].connection
              .aggregate.totalCount;
      entityCount =
        type === "single"
          ? ""
          : data.departmentsConnection.groupBy.id[0].connection.aggregate
              .totalCount;
      records = type === "single" ? "" : data.departments;
      lastRecord = type === "single" ? "" : records[0];
      break;
    case "cat":
      countTotal =
        type === "single"
          ? ""
          : data.alexandriasConnection.groupBy.category.length > 0
          ? data.alexandriasConnection.groupBy.category[0].connection.aggregate
              .totalCount
          : 0;
      entityCount =
        type === "single"
          ? ""
          : data.categoriesConnection.groupBy.id[0].connection.aggregate
              .totalCount;
      records = type === "single" ? "" : data.categories;
      lastRecord = type === "single" ? "" : records[0];
      break;
  }

  let background_status;
  let text_status;
  switch (data?.status) {
    case "under_review":
      background_status = "background-csv";
      text_status = "Under review";
      break;
    case "on_line":
      background_status = "background-xls";
      text_status = "Online";
      break;
    case "blocked":
      background_status = "background-ods";
      text_status = "Blocked";
      break;
    case "broken":
      background_status = "background-pdf";
      text_status = "Broken";
      break;
  }

  console.log(deals.length === 0);
  
  return (
    <div
      className={`card card-custom ${className}`}
      style={{ overflow: "hidden" }}
    >
      {/* begin::Card Body */}
      <div
        className={`justify-content-end card-body d-flex p-12 flex-column flex-md-row flex-lg-column flex-xxl-row bg-${color}`}
      >
        {/*begin::Image*/}
        <div
          className="bgi-no-repeat bgi-position-left bgi-size-cover h-300px h-md-auto h-lg-400px mw-100 w-650px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl("/media/products/12.png")}'`,
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        ></div>
        {/*end::Image*/}

        {/*begin::Card*/}
        <div
          className="card shadow-none w-auto w-md-400px w-lg-auto w-xxl-400px ml-auto"
          style={{ overflow: "hidden" }}
        >
          {/*begin::Card Body*/}
          <div className="card-body bg-light px-12 py-10 card card-custom">
            <div className="card-header">
              <h3 className="fw-bolder fs-1 card-toolbar">
                <div className="text-muted fw-bold fs-6 d-flex align-items-center">
                  <span className="badge-container">
                    <span
                      className={`badge badge-circle ${background_status}`}
                    ></span>
                  </span>
                  {fileCoinStatus}
                </div>
              </h3>
              <div className="card-toolbar">
                {/**
                 * <button type="button" className="btn btn-sm btn-light">
                  Action
                </button>
                 */}
              </div>
            </div>
            <div className="card-body card-scroll h-200px">{desc}</div>
            <div className="card-footer">
              {/*begin::Info*/}
              <table className="table table-borderless align-middle fw-bold">
                {type === "collection" && (
                  <tbody>
                    <tr>
                      <td className="text-gray-600 ps-0">Fuente</td>
                      {data.source.url && (
                        <td className="text-dark pe-0">
                          <a
                            target="_blank"
                            href={`${data.source.url}`}
                            rel="noreferrer"
                          >
                            {data.source.name}
                          </a>
                        </td>
                      )}
                      {!data.source.url && (
                        <td className="text-dark pe-0">{source}</td>
                      )}
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">Ministerio</td>
                      <td className="text-dark pe-0">{department}</td>
                    </tr>
                    {proof && (
                      <tr>
                        <td className="text-gray-600 ps-0">Prueba</td>
                        <td className="text-dark pe-0">
                          <a
                            href={`${proof}`}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            Ver
                          </a>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="text-gray-600 ps-0">Ultimo Archivo</td>
                      <td className="text-dark pe-0">
                        {moment(lastRecord.updatedAt).format("DD/MM/YYYY")}
                      </td>
                    </tr>
                  </tbody>
                )}

                {type === "single" && (
                  <tbody>
                    <tr>
                      <td className="text-gray-600 ps-0">Fuente</td>
                      <td className="text-dark pe-0">
                        <Link to={`/collection/src/${data.source.id}`}>
                          {data.source?.name}
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">Ministerio</td>
                      <td className="text-dark pe-0">
                        <Link to={`/collection/dep/${data.department.id}`}>
                          {data.department.name}
                        </Link>
                      </td>
                    </tr>
                    {proof && (
                      <tr>
                        <td className="text-gray-600 ps-0">Prueba</td>
                        <td className="text-dark pe-0">
                          <a href={`${proof}`} target={"_blank"}>
                            Ver
                          </a>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="text-gray-600 ps-0">Formato</td>
                      <td className="text-dark pe-0">{data.type}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">Ultimo Archivo</td>
                      <td className="text-dark pe-0">
                        {moment(lastRecord.updatedAt).format("DD/MM/YYYY")}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">Deals</td>
                      <td className="text-dark pe-0">
                        <div className="text-dark">
                          {
                            loading &&
                            <span className="indicator-progress" style={{ display: "block" }}>
                              Please wait...{" "}
                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                          }
                          {deals.map((deal, index) => (
                            <div
                              key={`${deal.dealId}-${index}`}
                              className="text-dark pe-2"
                            >
                              <a
                                target="_blank"
                                className="link-dark"
                                href={`${EXTERNAL_ROUTES.deal}/${deal.dealId}`}
                              >
                                {deal.storageProvider}
                              </a>
                              {index < deals.length - 1 ? <span>,</span> : null}
                            </div>
                          ))}
                          {
                          !loading && deals.length === 0 &&
                          <div
                            className="text-dark pe-2"
                          >
                            {"Esta información no está disponible" }
                          </div>
                          }
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
              {/*end::Info*/}
            </div>
          </div>
          {/*end::Card Body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Card Body*/}
    </div>
  );
};

export { EngageWidget6 };
