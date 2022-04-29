/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { toAbsoluteUrl } from "../../../helpers";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

type Props = {
  files: any;
  className: string;
  loadingArchive: boolean;
  innerPadding?: string;
};

const colorPDF = "#F1416C";
const colorCSV = "#FFC700";
const colorXLS = "#20D489";
const colorODS = "#A2A7F7";
const colorOTHER = "#00A3FF";
const colorUNDEFINED = "#dbdbdb";

const LibraryStats: React.FC<Props> = ({ className, innerPadding = "" }) => {
  const TYPE_QUERY = gql`
    query AlexandriasGroupByType {
      alexandriasConnection(where: {}) {
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

  useEffect(() => {
    if (data) {
      const element = document.getElementById(
        "kt_stats_widget_1_chart"
      ) as HTMLCanvasElement;
      if (!element) {
        return;
      }

      // setTotal(files.count_total);
      const options = getChartOptions(data);
      const ctx = element.getContext("2d");
      let myDoughnut: Chart | null;
      if (ctx) {
        myDoughnut = new Chart(ctx, options);
      }
      return function cleanUp() {
        if (myDoughnut) {
          myDoughnut.destroy();
        }
      };
    }
  }, [data]);

  if (loading) {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div 
          className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}
        >
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">Biblioteca</span>
            <span className="text-muted mt-2 fw-bold fs-6">
              {"Cargando Archivos"}
            </span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown 
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <Ktsvg
                path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                className="svg-icon-1"
              />
            </button>
            <Dropdown1 />
            */}
            {/* end::Dropdown */}
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-12">
          {/* begin::Chart */}
          <div
            className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                "/media/svg/illustrations/bg-1.svg"
              )}')`,
            }}
          >
            <div className="fw-bolder fs-1 text-gray-800 position-absolute">
              {"Loading ..."}
            </div>
            <canvas id="kt_stats_widget_1_chart"></canvas>
          </div>
          {/* end::Chart */}

          {/* begin::Items */}
          <div className="d-flex justify-content-around pt-18">
            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorPDF }}
              ></span>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorCSV }}
              ></span>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorXLS }}
              ></span>
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}

          {/* begin::Items */}
          <div className="d-flex justify-content-around pt-18">
            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorODS }}
              ></span>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorOTHER }}
              ></span>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="">
              <span className="fw-bolder text-gray-800">{"Loading ..."}</span>
              <span
                className="w-25px h-5px d-block rounded mt-1"
                style={{ backgroundColor: colorUNDEFINED }}
              ></span>
            </div>
            {/* end::Item */}

            {/* begin::Item
            <div className="">
              <span className="fw-bolder text-gray-800">32% SAP</span>
              <span className="bg-warning w-25px h-5px d-block rounded mt-1"></span>
            </div>
            */}
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end: Card Body */}
      </div>
    );
  }

  let formats = data.alexandriasConnection.groupBy.type;
  let total =
    data.alexandriasConnection.groupBy.type[0].connection.aggregate.totalCount;

  let count_pdf = formats.filter((c: any) => c.key === "pdf")[0].connection
    .aggregate.count;
  let count_csv = formats.filter((c: any) => c.key === "csv")[0].connection
    .aggregate.count;
  let count_xls = formats.filter((c: any) => c.key === "xlsx")[0].connection
    .aggregate.count;
  let count_ods =
    formats.filter((c: any) => c.key === "ods").length > 0
      ? formats.filter((c: any) => c.key === "ods")[0].connection.aggregate
          .count
      : 0;
  let count_others = formats.filter((c: any) => c.key === "other")[0].connection
    .aggregate.count;

  let count_undefined =
    total - (count_pdf + count_csv + count_xls + count_ods + count_others);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Biblioteca</span>
          <span className="text-muted mt-2 fw-bold fs-6">{total} Archivos</span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown 
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <Ktsvg
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          */}
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-12">
        {/* begin::Chart */}
        <div
          className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl(
              "/media/svg/illustrations/bg-1.svg"
            )}')`,
          }}
        >
          <div
            className="fw-bolder fs-1 text-gray-800 position-absolute"
            style={{ zIndex: "0" }}
          >
            {total}
          </div>
          <canvas id="kt_stats_widget_1_chart"></canvas>
        </div>
        {/* end::Chart */}

        {/* begin::Items */}
        <div className="d-flex flex-wrap justify-content-around pt-18">
          {
            formats.map((format: any) => {
              const totalFormat = format.connection.aggregate.count;
              let label;
              let backColor;

              switch (format.key) {
                case 'pdf':
                  label = 'PDF';
                  backColor = colorPDF;
                  break;
                case 'csv':
                  label = 'CSV';
                  backColor = colorCSV;
                  break;
                case 'xlsx':
                  label = 'XLS';
                  backColor = colorXLS;
                  break;
                case 'ods':
                  label = 'ODS';
                  backColor = colorODS;
                  break;
                case 'other':
                case '':
                  label = 'Others';
                  backColor = colorOTHER;
                  break;
              }

            return (
              <div
                className=""
                key={`formats_${label}`}
                style={{
                  width: "50%",
                  alignItems: "center",
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <span
                  className="fw-bolder text-gray-800"
                  style={{ marginRight: "15px" }}
                >
                  {((totalFormat / total) * 100).toFixed(2)}% {label}
                </span>
                <span
                  className="w-25px h-5px d-block rounded mt-1"
                  style={{ backgroundColor: backColor }}
                ></span>
              </div>
            );
          })}

          <div
            className=""
            key={`formats_undefined`}
            style={{
              width: "50%",
              alignItems: "center",
              display: "flex",
              marginBottom: "10px",
            }}
          >
            <span
              className="fw-bolder text-gray-800"
              style={{ marginRight: "15px" }}
            >
              {((count_undefined / total) * 100).toFixed(2)}% {"N/A"}
            </span>
            <span
              className="w-25px h-5px d-block rounded mt-1"
              style={{ backgroundColor: colorUNDEFINED }}
            ></span>
          </div>
        </div>
        {/* end::Items */}
      </div>
      {/* end: Card Body */}
    </div>
  );
};

export { LibraryStats };

function getChartOptions(data: any) {
  const tooltipBgColor = getCSSVariableValue("--bs-gray-200");
  const tooltipColor = getCSSVariableValue("--bs-gray-800");

  let counter: any = [];
  data.alexandriasConnection.groupBy.type.map((t: any) => {
    counter.push(t);
  });

  let count_pdf = counter.filter((c: any) => c.key === "pdf")[0].connection
    .aggregate.count;
  let count_csv = counter.filter((c: any) => c.key === "csv")[0].connection
    .aggregate.count;
  let count_xls = counter.filter((c: any) => c.key === "xlsx")[0].connection
    .aggregate.count;
  let count_ods =
    counter.filter((c: any) => c.key === "ods").length > 0
      ? counter.filter((c: any) => c.key === "ods")[0].connection.aggregate
          .count
      : 0;
  let count_others = counter.filter((c: any) => c.key === "other")[0].connection
    .aggregate.count;
  let count_total = counter.filter((c: any) => c.key === "other")[0].connection
    .aggregate.totalCount;

  let count_undefined =
    count_total -
    (count_pdf + count_csv + count_xls + count_ods + count_others);

  const options: ChartConfiguration = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [
            count_pdf,
            count_csv,
            count_xls,
            count_ods,
            count_others,
            count_undefined,
          ],
          backgroundColor: [
            colorPDF,
            colorCSV,
            colorXLS,
            colorODS,
            colorOTHER,
            colorUNDEFINED,
          ],
        },
      ],
      labels: ["PDF", "CSV", "XLS", "ODS", "Others", "N/A"],
    },
    options: {
      cutoutPercentage: 75,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Technology",
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      tooltips: {
        enabled: true,
        intersect: false,
        mode: "nearest",
        bodySpacing: 5,
        yPadding: 10,
        xPadding: 10,
        caretPadding: 0,
        displayColors: false,
        backgroundColor: tooltipBgColor,
        bodyFontColor: tooltipColor,
        cornerRadius: 4,
        footerSpacing: 0,
        titleSpacing: 0,
      },
    },
  };
  return options;
}