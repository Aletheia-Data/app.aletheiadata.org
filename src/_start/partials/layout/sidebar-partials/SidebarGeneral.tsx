/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";
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
  const [activeTab, setActiveTab] = useState(2);
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  const setTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  const activateChart = (tabId: number) => {
    const chartData = chartsData[tabId];
    if (!chartData) {
      return;
    }

    setTimeout(() => {
      const element = document.querySelector(chartData.selector);
      if (!element) {
        return;
      }

      if (activeChart) {
        activeChart.destroy();
      }

      const height = parseInt(getCss(element as HTMLElement, "height"));

      const options = {
        series: [
          {
            name: "Profit",
            data: chartData.values,
          },
        ],
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
            columnWidth: ["30%"],
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
          y: {
            formatter: (val: string) => {
              return "$" + val + "k";
            },
          },
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

      const chart = new ApexCharts(element, options);
      chart.render();
      setActiveChart(chart);
    }, 0);
  };

  useEffect(() => {
    setTab(2);
    activateChart(2);

    return function cleanup() {
      if (activeChart) {
        activeChart.destroy();
      }
    };
  }, []);

  const CAT_QUERY = gql`
  query Categories {
    categories(
      limit: 5, 
      sort: "alexandrias:desc"
    ) {
      id,
      title,
      description,
      icon{
        url
      },
      alexandrias{
        cid,
        type
      }
    }
  }
  `;

  var { data: catData, loading: catLoading, error } = useQuery(CAT_QUERY, {
    variables: {}
  });

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
              className={clsx("nav-link", { active: activeTab === 1 })}
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
                className={clsx("tab-pane", { active: activeTab === 1 })}
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

  return (
    <>
      {/* begin::Sidebar Nav */}
      <ul
        className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
        id="kt_sidebar_tabs"
        role="tablist"
      >

        {
          catData.categories.map((cat: any, i: number) => {
            let img = cat.icon ? cat.icon.url : '/media/svg/logo/gray/aven.svg';

            return (
              <li className="nav-item" key={`cat_sidebar_${i}`}>
                <a
                  onClick={() => {
                    setTab(i);
                    activateChart(i);
                  }}
                  className={clsx("nav-link", { active: activeTab === i })}
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
              catData.categories.map((cat: any, i: number) => {
                // increase index by 1
                const getChart = (index: number) => {
                  return (
                    <div id={`tab${index}_chart`} style={{ height: "250px" }} />
                  )
                }

                return (
                  <div
                    className={clsx("tab-pane", { active: activeTab === i })}
                    id="kt_sidebar_tab_pane_1"
                    role="tabpanel"
                    key={`cat_panel_${i}`}
                  >
                    {/* begin::Card */}
                    <div className="card card-custom bg-transparent">
                      {/* begin::Header */}
                      <div className="card-header align-items-center border-0">
                        <h3 className="card-title fw-bolder fs-3">
                          {cat.title}
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
            <div className="card-header align-items-center border-0">
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
            {/* end::Header */}

            {/* begin::Body */}
            <div className="card-body pt-0">
              {/* begin::Item */}
              <div className="d-flex align-items-center mb-7">
                {/* begin::Symbol */}
                <span className="symbol symbol-60px me-4" style={{ backgroundColor: colorPDF }}>
                  <img
                    src="/media/icons/aletheia/Formats/pdf.svg"
                    className="svg-icon-1 svg-icon-success"
                    alt={`pdf`}
                  />
                </span>
                {/* end::Symbol */}

                {/* begin::Title */}
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
                {/* end::Title */}
              </div>
              {/* end::Item */}

            </div>
            {/* end: Card Body */}
          </div>
          {/* end::Card */}
        </div>
      </div>
      {/* end::Sidebar Content */}

      {/* begin::Sidebar footer */}
      <div id="kt_sidebar_footer" className="py-2 px-5 pb-md-6 text-center" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <a
          href="#"
          className="disabled btn btn-primary fw-bolder fs-6 px-7 py-3 w-100"
        >
          Exportar PDF
        </a>
      </div>
      {/* end::Sidebar footer */}
    </>
  );
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
