/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { Ktsvg, toAbsoluteUrl } from "../../../helpers";
import { Dropdown2 } from "../../content/dropdown/Dropdown2";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";

// Axios
import axios from "axios";

type Props = {
  id: string;
  title: string;
  items: any;
  loadingArchive: boolean;
  className: string;
  innerPadding?: string;
};

// TODO: move to global
const colorPDF = "#F1416C";
const colorCSV = "#FFC700";
const colorXLS = "#20D489";
const colorODS = "#A2A7F7";
const colorOTHER = "#00A3FF";

const StatsWidget2: React.FC<Props> = ({
  id,
  title,
  loadingArchive,
  items,
  className,
  innerPadding = "",
}) => {
  const [activeTab, setActiveTab] = useState(`#${id}tab1`);
  const [activeTabTotal, setActiveTabTotal] = useState("Loading");
  const [TabsTotal, setActiveTabsTotal] = useState(0);
  const [elementTab, setElementTab] = useState(false);
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  // before rendering, order by n aletheias
  /*
  if (items) {
    items.sort((a, b) => (a.alexandrias.length > b.alexandrias.length ? -1 : 1));
  }
  */

  const getFilesType = (item: string, id: string) => {
    return new Promise((resolve, reject) => {
      let query;
      switch (item) {
        case "cat":
          query = `
            query TypeGroupBy {
              alexandriasConnection(where: {
                category: "${id}",
              }) {
                groupBy {
                  type{
                    key,
                    connection{
                      aggregate{
                        count,
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          `;
          break;
        case "dep":
          query = `
            query TypeGroupBy {
              alexandriasConnection(where: {
                department: "${id}",
              }) {
                groupBy {
                  type{
                    key,
                    connection{
                      aggregate{
                        count,
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          `;
          break;
        case "src":
          query = `
            query TypeGroupBy {
              alexandriasConnection(where: {
                source: "${id}",
              }) {
                groupBy {
                  type{
                    key,
                    connection{
                      aggregate{
                        count,
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          `;
          break;
      }
      const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/graphql`;
      // console.log('fetching data: ', endpoint)
      fetch(endpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

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
      element.innerHTML = "";
    }
    // console.log('element: ', element);

    if (!element) return;

    console.log("getting: ", id, items[tab_n - 1]);

    setActiveTabTotal("Loading");

    let item = items[tab_n - 1].connection.values[0];

    getFilesType(id, item.id)
      .then((res: any) => {
        const types = res.data.alexandriasConnection.groupBy.type;

        const pdf = types.filter((type: any) => type.key === "pdf");
        const csv = types.filter((type: any) => type.key === "csv");
        const xls = types.filter(
          (type: any) => type.key === "xls" || type.key === "xlsx"
        );
        const other = types.filter((type: any) => type.key === "other");

        const pdfFile = pdf.length > 0 ? pdf[0].connection.aggregate.count : 0;
        const csvFile = csv.length > 0 ? csv[0].connection.aggregate.count : 0;
        const xlsFile = xls.length > 0 ? xls[0].connection.aggregate.count : 0;
        const otherFile =
          other.length > 0 ? other[0].connection.aggregate.count : 0;

        setActiveTabTotal(pdfFile + csvFile + xlsFile + otherFile);

        const dataCharts = {
          pdfFile,
          csvFile,
          xlsFile,
          otherFile,
        };

        const height = parseInt(getCss(element, "height"));
        if (height) {
          const chart = new ApexCharts(
            element,
            getChartOptions(tab_n, height, dataCharts)
          );
          chart.render();
          setActiveChart(chart);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            <span className="text-muted mt-2 fw-bold fs-6">Loading ...</span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown */}
            <Link className="menu-link px-3" to={`/group/${id}`}>
              <span className="menu-icon">
                <Ktsvg
                  className="svg-icon-1"
                  path="/media/icons/duotone/General/Binocular.svg"
                />
              </span>
            </Link>
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
                    onClick={() => ""}
                    className={`nav-link w-225px h-70px ${
                      activeTab === `#${id}tab1`
                        ? "active btn-active-light"
                        : ""
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
            <div
              className="tab-content flex-grow-1" // style={{ paddingLeft: "0.23rem !important" }}
            >
              {/* begin::Tab Pane */}
              <div
                className={`tab-pane fade ${
                  activeTab === `#${id}tab1` ? "show active" : ""
                }`}
                style={{}}
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
    );
  }

  if (items) {
    let itemsData =
      items?.departmentsConnection?.groupBy?.id ||
      items?.categoriesConnection?.groupBy?.id;
    items = itemsData.slice(0, 5);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">{title}</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {TabsTotal} {title} registradas
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown */}
          <Link className="menu-link px-3" to={`/group/${id}`}>
            <span className="menu-icon">
              <Ktsvg
                className="svg-icon-1"
                path="/media/icons/duotone/General/Binocular.svg"
              />
            </span>
          </Link>

          {/** 
           * 
           * <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <Ktsvg
              className="svg-icon-1"
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            />
          </button>
           * <Dropdown2 params={id} />  */}

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
              {items &&
                items.map((item: any, i: number) => {
                  // increase index by 1
                  let current_item = item.connection.values[0];
                  let img = current_item.icon
                    ? current_item.icon.url
                    : "/media/svg/logo/gray/aven.svg";
                  i++;
                  return (
                    <li
                      className="nav-item mb-3"
                      key={`tabs_${current_item.id}`}
                    >
                      <a
                        onClick={() => setTab(i)}
                        className={`nav-link w-225px h-70px ${
                          activeTab === `#${id}tab${i}`
                            ? "active btn-active-light"
                            : ""
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
                            {current_item.name || current_item.title}
                          </span>
                          <span className="text-muted fw-bold d-block pt-1">
                            {current_item.website ||
                              current_item.url ||
                              current_item.description}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          {/* end::Nav */}

          {/* begin::Tab Content */}
          <div
            className="tab-content flex-grow-1" // style={{ paddingLeft: "0.23rem !important" }}
          >
            {/* begin::Tab Pane */}
            {items &&
              items.map((item: any, i: number) => {
                let current_item = item.connection.values[0];
                let current_count = item.connection.aggregate.count;
                let current_total = item.connection.aggregate.totalCount;

                if (!TabsTotal) {
                  setActiveTabsTotal(current_total);
                }
                // console.log(item);
                let type = id;
                let entity;
                switch (type) {
                  case "src":
                    entity = current_item.name;
                    break;
                  case "dep":
                    entity = current_item.name;
                    break;
                  case "cat":
                    entity = current_item.title;
                    break;
                  default:
                    break;
                }
                // increase index by 1
                i++;
                const getChart = (index: number) => {
                  return (
                    <div
                      id={`${id}tab${index}_chart`}
                      style={{ height: "250px" }}
                    />
                  );
                };
                return (
                  <div
                    className={`tab-pane fade ${
                      activeTab === `#${id}tab${i}` ? "show active" : ""
                    }`}
                    style={{}}
                    id={`${id}tab${i}_content`}
                    key={`content_${current_item.id}`}
                  >
                    {/* begin::Content */}
                    <div className="d-flex justify-content-end mb-10">
                      {/* begin::Item */}
                      <div className="px-10 text-end">
                        <span className="text-muted fw-bold fs-7">
                          Archivos
                        </span>
                        <span className="text-gray-800 fw-bolder fs-3 d-block">
                          {activeTabTotal}
                        </span>
                      </div>
                      {/* end::Item */}
                    </div>
                    {/* end::Content  */}

                    {getChart(i)}

                    <Link
                      className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                      to={`/collection/${id}/${current_item.id}`}
                    >
                      {`Ver ${entity}`}
                    </Link>
                  </div>
                );
              })}
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
  let series = [
    {
      name: "PDF",
      data: [data.pdfFile],
    },
    {
      name: "CSV",
      data: [data.csvFile],
    },
    {
      name: "XLS",
      data: [data.xlsFile],
    },
    {
      name: "Others",
      data: [data.otherFile],
    },
  ];

  return {
    series: series,
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: height,
      toolbar: {
        show: false,
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
      x: {
        show: false,
      },
      y: {
        formatter: function (val: number) {
          return `${val} archivos`;
        },
      },
    },
    colors: [colorPDF, colorCSV, colorXLS, colorOTHER],
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
