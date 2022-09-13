/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { Ktsvg, toAbsoluteUrl } from "../../../helpers";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  className: string;
  innerPadding?: string;
};

// TODO: move to global
const colorPDF = "#F1416C";
const colorCSV = "#FFC700";
const colorXLS = "#20D489";
const colorODS = "#A2A7F7";
const colorOTHER = "#00A3FF";

const Stats: React.FC<Props> = ({
  id,
  title,
  className,
  innerPadding = "",
}) => {
  const [activeTab, setActiveTab] = useState(`#${id}_tab1`);
  const [activeTabTotal, setActiveTabTotal] = useState("");
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  const [items, setItems] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTab(items, 1);
    }, 0);

    return function cleanUp() {
      if (activeChart) {
        activeChart.destroy();
      }
    };
  }, [items]);

  useEffect(() => {
    let entity;
    switch (id) {
      case "src":
        entity = "sources";
        break;
      case "dep":
        entity = "departments";
        break;
      case "cat":
        entity = "categories";
        break;
      default:
        return;
    }

    fetch(
      `${process.env.REACT_APP_ALETHEIA_API}/v1/api/${entity}/getAll?limit=5`,
      {
        method: "get",
        headers: {
          "Access-Control-Request-Headers": "*",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((newData) => {
        const body = JSON.parse(newData.body);
        setItems(body);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

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
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const setTab = (items: any, tab_n: number) => {
    setActiveTabTotal("");

    if (activeChart) {
      activeChart.destroy();
    }

    setActiveTab(`#${id}_tab${tab_n}`);

    const element = document.querySelector(
      `#${id}_tab${tab_n}_chart`
    ) as HTMLElement;

    if (element) {
      element.innerHTML = "";
    }

    if (!element) return;

    let item: any = items[tab_n - 1];

    getFilesType(id, item._id)
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

  if (loading) {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">{title}</span>
            <span
              className="indicator-progress text-muted mt-2 fw-bold fs-6"
              style={{ display: "block" }}
            >
              Please wait...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown 
            <Link
              className="menu-link px-3"
              to={`/group/${id}`}
            >
              <span className="menu-icon">
                <Ktsvg
                  className="svg-icon-1"
                  path="/media/icons/duotone/General/Binocular.svg"
                />
              </span>
            </Link>
            */}
            {/* end::Dropdown */}
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-0">
          <div className="d-flex flex-wrap flex-xxl-nowrap justify-content-center pt-4">
            <span className="indicator-progress" style={{ display: "block" }}>
              <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
          </div>
        </div>
        {/* end: Card Body */}
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">{title}</span>
          {/** <span className="text-muted mt-2 fw-bold fs-6">{TabsTotal} {title} registradas</span> */}
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
            <KTSVG
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
              {items.length > 0 &&
                items.map((item: any, i: number) => {
                  // increase index by 1
                  // let img = '/media/svg/logo/gray/aven.svg';
                  i++;

                  return (
                    <li className="nav-item mb-3" key={`tabs_${item._id}`}>
                      <a
                        onClick={() => setTab(items, i)}
                        className={`nav-link w-225px h-70px ${
                          activeTab === `#${id}_tab${i}`
                            ? "active btn-active-light"
                            : ""
                        } fw-bolder me-2`}
                        id={`${id}_tab${i}`}
                      >
                        {/**
                         * <div className="nav-icon me-3">
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
                         */}
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
            {items.length > 0 &&
              items.map((item: any, i: number) => {
                // console.log(item);
                let type = id;
                let entity;
                switch (type) {
                  case "src":
                    entity = item.name;
                    break;
                  case "dep":
                    entity = item.name;
                    break;
                  case "cat":
                    entity = item.title;
                    break;
                  default:
                    break;
                }
                // increase index by 1
                i++;
                const getChart = (index: number) => {
                  return (
                    <div
                      id={`${id}_tab${index}_chart`}
                      style={{ height: "250px" }}
                    />
                  );
                };
                console.log(activeTabTotal);

                return (
                  <div
                    className={`tab-pane fade ${
                      activeTab === `#${id}_tab${i}` ? "show active" : ""
                    }`}
                    style={{}}
                    id={`${id}_tab${i}_content`}
                    key={`content_${item._id}`}
                  >
                    {/* begin::Content */}
                    <div className="d-flex justify-content-end mb-10">
                      {/* begin::Item */}
                      <div className="px-10 text-end">
                        <span className="text-muted fw-bold fs-7">
                          Archivos
                        </span>
                        <span className="text-gray-800 fw-bolder fs-3 d-block">
                          {activeTabTotal === "" && (
                            <span
                              className="indicator-progress"
                              style={{ display: "block" }}
                            >
                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                          )}
                          {activeTabTotal}
                        </span>
                      </div>
                      {/* end::Item */}
                    </div>
                    {/* end::Content  */}

                    {getChart(i)}

                    <Link
                      className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                      to={`/collection/${id}/${item._id}`}
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

export { Stats };

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
