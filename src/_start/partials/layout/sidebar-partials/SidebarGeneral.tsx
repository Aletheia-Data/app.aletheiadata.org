/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { toAbsoluteUrl, KTSVG } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

// TODO: move to global
const colorPDF = '#FFE6E2';
const colorCSV = '#FFF8DD';
const colorXLS = '#E4FFF4';
const colorODS = '#F7F0FF';
const colorOTHER = '#00A3FF';

const chartsData: Array<{
  tabId: number;
  selector: string;
  values: Array<number>;
}> = [
    {
      tabId: 0,
      selector: "#kt_sidebar_tab_1_chart",
      values: [40, 30, 25, 40, 50, 30],
    },
    {
      tabId: 1,
      selector: "#kt_sidebar_tab_2_chart",
      values: [30, 30, 25, 45, 30, 40],
    },
    {
      tabId: 2,
      selector: "#kt_sidebar_tab_3_chart",
      values: [25, 30, 40, 30, 35, 30],
    },
    {
      tabId: 3,
      selector: "#kt_sidebar_tab_4_chart",
      values: [25, 30, 35, 40, 50, 30],
    },
    {
      tabId: 4,
      selector: "#kt_sidebar_tab_5_chart",
      values: [40, 20, 50, 50, 55, 45],
    },
  ];

export function SidebarGeneral() {
  const id = 'cat';
  const [activeTab, setActiveTab] = useState(`#${id}_tab1`);
  const [activeTabTotal, setActiveTabTotal] = useState('Loading');
  const [TabsTotal, setActiveTabsTotal] = useState(0);
  const [elementTab, setElementTab] = useState(false);
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  const CAT_QUERY = gql`
  query CategoriesGroup {
    categoriesConnection{
      groupBy {
        id {
          key,
          connection{
            values{
							id,
              title,
              description,
              icon{
                id,
                name,
                url
              }
            },
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

  var { data: catData, loading: catLoading, error } = useQuery(CAT_QUERY, {
    variables: {}
  });

  const getFilesType = (item: string, id: string) => {
    return new Promise((resolve, reject) => {

      let query;
      switch (item) {
        case 'cat':
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
        case 'dep':
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
        case 'src':
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
      console.log('fetching data: ', endpoint)
      fetch(endpoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          resolve(data);
        })
        .catch(err => {
          console.log(err)
          reject(err);
        });

    });
  }

  const setTab = (tab_n: number) => {

    if (activeChart) {
      activeChart.destroy();
    }

    setActiveTab(`#${id}_tab${tab_n}`);

    const element = document.querySelector(
      `#${id}_tab${tab_n}_chart`
    ) as HTMLElement;
    setElementTab(true);

    if (element) {
      element.innerHTML = '';
    }
    console.log('element: ', id, tab_n, element);

    if (!element) return;

    console.log('getting: ', id, items);

    setActiveTabTotal('Loading');

    console.log(items, tab_n);


    let item = items[tab_n - 1].connection.values[0];

    getFilesType(id, item.id)
      .then((res: any) => {
        const types = res.data.alexandriasConnection.groupBy.type;

        const pdf = types.filter((type: any) => type.key === 'pdf');
        const csv = types.filter((type: any) => type.key === 'csv');
        const xls = types.filter((type: any) => type.key === 'xls' || type.key === "xlsx");
        const other = types.filter((type: any) => type.key === 'other');

        const pdfFile = pdf.length > 0 ? pdf[0].connection.aggregate.count : 0;
        const csvFile = csv.length > 0 ? csv[0].connection.aggregate.count : 0;
        const xlsFile = xls.length > 0 ? xls[0].connection.aggregate.count : 0;
        const otherFile = other.length > 0 ? other[0].connection.aggregate.count : 0;

        setActiveTabTotal(
          pdfFile + csvFile + xlsFile + otherFile
        )

        const dataCharts = {
          pdfFile,
          csvFile,
          xlsFile,
          otherFile
        };

        const height = parseInt(getCss(element, "height"));
        if (height) {
          const chart = new ApexCharts(element, getChartOptions(tab_n, height, dataCharts));
          chart.render();
          setActiveChart(chart);
        }

      })
      .catch(err => {
        console.log(err);
      })

  };

  useEffect(() => {
    setTab(1);

    return function cleanup() {
      if (activeChart) {
        activeChart.destroy();
      }
    };
  }, [catLoading]);

  if (catLoading) {
    return (
      <>
        {/* begin::Sidebar Nav */}
        <ul
          className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
          id="kt_sidebar_tabs"
          role="tablist"
        >

          <li className="nav-item">
            <a
              onClick={() => { }}
              className={"nav-link"}
              id="kt_sidebar_tab_1"
            >
              <img
                alt=""
                src={toAbsoluteUrl("/media/svg/logo/purple/aven.svg")}
                className="default"
              />
              <img
                alt=""
                src={toAbsoluteUrl("/media/svg/logo/colored/aven.svg")}
                className="active"
              />
            </a>
          </li>

        </ul>
        {/* end::Sidebar Nav */}

        {/* begin::Sidebar Content */}
        {/* begin::Sidebar Content */}
        <div id="kt_sidebar_content" className="py-10 px-5 px-lg-5">
          <div
            className="hover-scroll-y me-lg-n2 pe-lg-2"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-offset="10px"
            data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
            data-kt-scroll-wrappers="#kt_sidebar_content"
          >
            <div className="tab-content">
              <div
                className={"tab-pane"}
                id="kt_sidebar_tab_pane_1"
                role="tabpanel"
              >
                {/* begin::Card */}
                <div className="card card-custom bg-transparent">
                  {/* begin::Header */}
                  <div className="card-header align-items-center border-0">
                    <h3 className="card-title fw-bolder fs-3">
                      Loading ...
                    </h3>
                    <div className="card-toolbar">
                      <button
                        type="button"
                        className="btn btn-md btn-icon btn-icon-white btn-info"
                        data-kt-menu-trigger="click"
                        data-kt-menu-overflow="true"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-flip="top-end"
                      >
                        <KTSVG
                          path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                          className="svg-icon-1"
                        />
                      </button>
                      <Dropdown1 />
                    </div>
                  </div>
                  {/* end::Header */}

                  {/* begin::Body */}
                  <div className="card-body px-3 py-0">
                    {/* begin::Chart */}
                    <div
                      id="kt_sidebar_tab_1_chart"
                      className="apexcharts-bar-hover-danger"
                      style={{ height: "250px" }}
                    ></div>
                    {/* end::Chart */}
                  </div>
                  {/* end: Card Body */}
                </div>
                {/* end::Card */}
              </div>
            </div>
            {/* begin::Card */}
            <div className="card card-custom bg-transparent">
              {/* begin::Header */}
              <div className="card-header align-items-center border-0">
                <h3 className="card-title fw-bolder fs-3">
                  Categorias
                </h3>
                <div className="card-toolbar">

                  Loading ...
                </div>
              </div>
              {/* end::Header */}
            </div>
            {/* end::Card */}
          </div>
        </div>
        {/* end::Sidebar Content */}
      </>
    )
  }

  console.log(catData);
  let items: any;
  let itemsData = catData.categoriesConnection.groupBy.id;
  items = itemsData;

  return (
    <>
      {/* begin::Sidebar Nav */}
      <ul
        className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
        id="kt_sidebar_tabs"
        role="tablist"
      >

        {
          items.map((cat: any, i: number) => {
            let current_item = cat.connection.values[0];
            let img = current_item.icon ? current_item.icon.url : '/media/svg/logo/gray/aven.svg';
            i++;
            return (
              <li className="nav-item" key={`cat_sidebar_${current_item.id}`}>
                <a
                  onClick={() => {
                    setTab(i);
                  }}
                  className={clsx("nav-link", { active: activeTab === `#${id}_tab${i}` })}
                  id="kt_sidebar_tab_1"
                >
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
                </a>
              </li>
            )
          })
        }

      </ul>
      {/* end::Sidebar Nav */}

      {/* begin::Sidebar Content */}
      {/* begin::Sidebar Content */}
      <div id="kt_sidebar_content" className="py-10 px-5 px-lg-5">
        <div
          className="hover-scroll-y me-lg-n2 pe-lg-2"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="10px"
          data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
          data-kt-scroll-wrappers="#kt_sidebar_content"
        >
          <div className="tab-content">
            {
              items.map((cat: any, i: number) => {
                let current_item = cat.connection.values[0];
                i++;
                // increase index by 1
                const getChart = (index: number) => {
                  return (
                    <div id={`${id}_tab${index}_chart`} style={{ height: "250px" }} />
                  )
                }

                return (
                  <div
                    className={`tab-pane fade ${activeTab === `#${id}_tab${i}` ? "show active" : ""}`}
                    id="kt_sidebar_tab_pane_1"
                    role="tabpanel"
                    key={`cat_panel_${i}`}
                  >
                    {/* begin::Card */}
                    <div className="card card-custom bg-transparent">
                      {/* begin::Header */}
                      <div className="card-header align-items-center border-0">
                        <h3 className="card-title fw-bolder fs-3">
                          {current_item.title}
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-md btn-icon btn-icon-white btn-info"
                            data-kt-menu-trigger="click"
                            data-kt-menu-overflow="true"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-flip="top-end"
                          >
                            <KTSVG
                              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                              className="svg-icon-1"
                            />
                          </button>
                          <Dropdown1 />
                        </div>
                      </div>
                      {/* end::Header */}

                      {/* begin::Body */}
                      <div className="card-body px-3 py-0">
                        {
                          getChart(i)
                        }
                      </div>
                      {/* end: Card Body */}
                    </div>
                    {/* end::Card */}
                  </div>
                )
              })
            }
          </div>
          {/* begin::Card */}
          <div className="card card-custom bg-transparent">
            {/* begin::Header */}
            {/**
             * <div className="card-header align-items-center border-0">
              <h3 className="card-title fw-bolder fs-3">
                Mis Archivos
              </h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <KTSVG
                    path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    className="svg-icon-1"
                  />
                </button>
                <Dropdown1 />
              </div>
            </div>
             
            <div className="card-body pt-0">
              <div className="d-flex align-items-center mb-7">
                <span className="symbol symbol-60px me-4" style={{ backgroundColor: colorPDF }}>
                  <img
                    src="/media/icons/aletheia/Formats/pdf.svg"
                    className="svg-icon-1 svg-icon-success"
                    alt={`pdf`}
                  />
                </span>
                
                <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    className=" fw-bolder text-hover-primary fs-6"
                  >
                    Estadísticas de Estudiantes Matriculas...
                  </a>
                  <span className=" opacity-25 fw-bold fs-7 my-1">
                    Este conjunto de datos...
                  </span>
                </div>
              </div>

            </div>
            */}
            {/* end: Card Body */}
          </div>
          {/* end::Card */}
        </div>
      </div>
      {/* end::Sidebar Content */}

      {/* begin::Sidebar footer 
      <div id="kt_sidebar_footer" className="py-2 px-5 pb-md-6 text-center" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <a
          href="#"
          className="disabled btn btn-primary fw-bolder fs-6 px-7 py-3 w-100"
        >
          Exportar PDF
        </a>
      </div>
      */}
      {/* end::Sidebar footer */}
    </>
  );
}

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
    }
  ]
  // console.log(series);

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
        columnWidth: "30%",
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
      crosshairs: {
        show: false,
      },
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      crosshairs: {
        show: false,
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "12px",
        },
      },
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
    fill: {
      opacity: 1,
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      x: {
        show: false
      },
      y: {
        formatter: function (val: number) {
          return `${val} archivos`;
        },
      }
    },
    colors: ["#C7C7C7"],
    grid: {
      borderColor: "#C7C7C7",
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
