/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown2 } from "../../content/dropdown/Dropdown2";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { boolean } from "yup/lib/locale";

type Props = {
  id: string;
  title: string;
  items: any[];
  loadingArchive: boolean;
  className: string;
  innerPadding?: string;
};

// TODO: move to global
const colorPDF = '#F1416C';
const colorCSV = '#FFC700';
const colorXLS = '#20D489';
const colorODS = '#A2A7F7';
const colorOTHER = '#00A3FF';

const StatsWidget2: React.FC<Props> = ({ id, title, loadingArchive, items, className, innerPadding = "" }) => {
  const [activeTab, setActiveTab] = useState(`#${id}tab1`);
  const [elementTab, setElementTab] = useState(false);
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  const setTab = (tab_n: number) => {

    if (activeChart) {
      activeChart.destroy();
    }

    setActiveTab(`#${id}tab${tab_n}`);

    const element = document.querySelector(
      `#${id}tab${tab_n}_chart`
    ) as HTMLElement;
    setElementTab(true);

    if (element) {
      element.innerHTML = '';
    }
    // console.log('element: ', element);

    if (!element) return;

    let pdfData: any = [];
    let csvData: any = [];
    let xlsData: any = [];
    let otherData: any = [];

    items.map(item => {

      const docs = item.alexandrias;
      if (docs.length > 0) {

        const pdf = docs.filter((doc: { type: string; }) => doc.type === 'pdf').length;
        const csv = docs.filter((doc: { type: string; }) => doc.type === 'csv').length;
        const xls = docs.filter((doc: { type: string; }) => doc.type === 'xls' || doc.type === 'xlsx').length;
        const other = docs.filter((doc: { type: string; }) => (doc.type === '' || !doc.type) || (doc.type !== 'pdf' && doc.type !== 'csv' && doc.type !== 'xls')).length;


        pdfData.push([pdf]);
        csvData.push([csv]);
        xlsData.push([xls]);
        otherData.push([other]);

      }

    })

    if (!pdfData) {
      return;
    }

    const dataCharts = {
      pdfData,
      csvData,
      xlsData,
      otherData
    }

    // console.log(dataCharts);

    const height = parseInt(getCss(element, "height"));
    const chart = new ApexCharts(element, getChartOptions(tab_n, height, dataCharts));

    chart.render();
    setActiveChart(chart);
  };


  useEffect(() => {

    setTab(1);

    return function cleanUp() {
      if (activeChart) {
        activeChart.destroy();
      }
    };

  }, [loadingArchive]);

  if (loadingArchive) {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">{title}</span>
            <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown */}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <KTSVG
                className="svg-icon-1"
                path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              />
            </button>
            <Dropdown2 />
            {/* end::Dropdown */}
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-0">
          <div className="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4">
            {/* begin::Nav */}
            <div className="me-sm-10 me-0">
              <ul className="nav flex-column nav-pills nav-pills-custom">
                <li className="nav-item mb-3" key={`tabs_1`}>
                  <a
                    onClick={() => ''}
                    className={`nav-link w-225px h-70px ${activeTab === `#${id}tab1` ? "active btn-active-light" : ""
                      } fw-bolder me-2`}
                    id={`${id}tab1`}
                  >
                    <div className="nav-icon me-3">
                      <img
                        alt=""
                        src={toAbsoluteUrl("/media/svg/logo/gray/aven.svg")}
                        className="default"
                      />

                      <img
                        alt=""
                        src={toAbsoluteUrl("/media/svg/logo/colored/aven.svg")}
                        className="active"
                      />
                    </div>
                    <div className="ps-1">
                      <span className="nav-text text-gray-600 fw-bolder fs-6">
                        Loading ...
                      </span>
                      <span className="text-muted fw-bold d-block pt-1">
                        Loading ...
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* end::Nav */}

            {/* begin::Tab Content */}
            <div className="tab-content flex-grow-1" // style={{ paddingLeft: "0.23rem !important" }}
            >
              {/* begin::Tab Pane */}
              <div
                className={`tab-pane fade ${activeTab === `#${id}tab1` ? "show active" : ""
                  }`}
                style={{

                }}
                id={`${id}tab1_content`}
                key={`content_1`}
              >
                {/* begin::Content */}
                <div className="d-flex justify-content-center mb-10">
                  {/* begin::Item */}
                  <div className="px-10">
                    <span className="text-muted fw-bold fs-7">Archivos</span>
                    <span className="text-gray-800 fw-bolder fs-3 d-block">
                      Loading ...
                    </span>
                  </div>
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className="px-10">
                    <span className="text-muted fw-bold fs-7">Commission</span>
                    <span className="text-gray-800 fw-bolder fs-3 d-block">
                      Loading ...
                    </span>
                  </div>
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className="px-10">
                    <span className="text-muted fw-bold fs-7">Refers</span>
                    <span className="text-gray-800 fw-bolder fs-3 d-block">
                      Loading ...
                    </span>
                  </div>
                  {/* end::Item */}
                </div>
                {/* end::Content  */}
              </div>
              {/* end::Tab Pane */}

            </div>
            {/* end::Tab Content */}
          </div>
        </div>
        {/* end: Card Body */}
      </div>
    )
  }

  if (items.length > 5) {
    items = items.slice(0, 5);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">{title}</span>
          <span className="text-muted mt-2 fw-bold fs-6">{items.length} {title} registradas</span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              className="svg-icon-1"
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            />
          </button>
          <Dropdown2 />
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-0">
        <div className="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4">
          {/* begin::Nav */}
          <div className="me-sm-10 me-0">
            <ul className="nav flex-column nav-pills nav-pills-custom">
              {
                items && items.map((item, i) => {
                  // increase index by 1
                  let img = item.icon ? item.icon.url : '/media/svg/logo/gray/aven.svg';
                  i++;
                  return (
                    <li className="nav-item mb-3" key={`tabs_${item.id}`}>
                      <a
                        onClick={() => setTab(i)}
                        className={`nav-link w-225px h-70px ${activeTab === `#${id}tab${i}` ? "active btn-active-light" : ""
                          } fw-bolder me-2`}
                        id={`${id}tab${i}`}
                      >
                        <div className="nav-icon me-3">
                          <img
                            alt=""
                            src={toAbsoluteUrl(img)}
                            className="default"
                          />

                          <img
                            alt=""
                            src={toAbsoluteUrl(img)}
                            className="active"
                          />
                        </div>
                        <div className="ps-1 text-truncate">
                          <span className="nav-text text-gray-600 fw-bolder fs-6">
                            {item.name || item.title}
                          </span>
                          <span className="text-muted fw-bold d-block pt-1">
                            {item.website || item.url || item.description}
                          </span>
                        </div>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* end::Nav */}

          {/* begin::Tab Content */}
          <div className="tab-content flex-grow-1" // style={{ paddingLeft: "0.23rem !important" }}
          >
            {/* begin::Tab Pane */}
            {
              items && items.map((item, i) => {
                // console.log(item);

                // increase index by 1
                i++;
                const getChart = (index: number) => {
                  return (
                    <div id={`${id}tab${index}_chart`} style={{ height: "250px" }} />
                  )
                }
                return (
                  <div
                    className={`tab-pane fade ${activeTab === `#${id}tab${i}` ? "show active" : ""
                      }`}
                    style={{

                    }}
                    id={`${id}tab${i}_content`}
                    key={`content_${item.id}`}
                  >
                    {/* begin::Content */}
                    <div className="d-flex justify-content-end mb-10">
                      {/* begin::Item */}
                      <div className="px-10 text-end">
                        <span className="text-muted fw-bold fs-7">Archivos</span>
                        <span className="text-gray-800 fw-bolder fs-3 d-block">
                          {item.alexandrias?.length}
                        </span>
                      </div>
                      {/* end::Item */}

                    </div>
                    {/* end::Content  */}

                    {
                      getChart(i)
                    }
                  </div>
                )
              })
            }
            {/* end::Tab Pane */}

          </div>
          {/* end::Tab Content */}
        </div>
      </div>
      {/* end: Card Body */}
    </div>
  );
};

export { StatsWidget2 };

function getChartOptions(
  tabNumber: number,
  height: string | number | undefined,
  data: any
): ApexOptions {
  return {
    series: [
      {
        name: "PDF",
        data: data.pdfData[tabNumber - 1],
      },
      {
        name: "CSV",
        data: data.csvData[tabNumber - 1],
      },
      {
        name: "XLS",
        data: data.xlsData[tabNumber - 1],
      },
      {
        name: "Others",
        data: data.otherData[tabNumber - 1],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: height,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        endingShape: "rounded",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["PDF", "CSV", "XLS", "Others"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: getCSSVariableValue("--bs-gray-700"),
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: getCSSVariableValue("--bs-gray-700"),
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: number) {
          return `${val} archivos`;
        },
      }
    },
    colors: [
      colorPDF,
      colorCSV,
      colorXLS,
      colorOTHER
    ],
    grid: {
      borderColor: getCSSVariableValue("--bs-gray-200"),
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}

function getCss(el: HTMLElement, styleProp: string) {
  const defaultView = (el.ownerDocument || document).defaultView;
  if (!defaultView) {
    return "";
  }

  // sanitize property name to css notation
  // (hyphen separated words eg. font-Size)
  styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
  return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
}
