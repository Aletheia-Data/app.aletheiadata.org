/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { toAbsoluteUrl, Ktsvg } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Clipboard from "react-clipboard.js";

import LoadingSidebar from "_start/partials/components/Sidebar/LoadingSidebar";
import { CAT_QUERY } from "_start/helpers/sideBarQueries";
import { getFilesType } from "_start/helpers/getFilesType";

// TODO: move to global
const colorPDF = "#FFE6E2";
const colorCSV = "#FFF8DD";
const colorXLS = "#E4FFF4";
const colorODS = "#F7F0FF";
const colorOTHER = "#00A3FF";

type Props = {
  props: any;
  toogleMinisearch?: any;
};

export const SidebarGeneral: React.FC<Props> = ({
  props,
  toogleMinisearch,
}) => {
  const id = "cat";
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(`#sidebar_${id}_tab1`);
  const [activeTabTotal, setActiveTabTotal] = useState("Loading");
  const [elementTab, setElementTab] = useState(false);
  const [copied, setCopy] = useState(false);
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>();

  if (!props) {
    props = {
      alexandrias: [],
    };
  }

  var {
    data: catData,
    loading: catLoading,
    error,
  } = useQuery(CAT_QUERY, {
    variables: {},
  });

  const setTab = async (tab_n: number) => {
    if (activeChart) {
      activeChart.destroy();
    }

    setActiveTab(`#sidebar_${id}_tab${tab_n}`);

    const element = document.querySelector(
      `#sidebar_${id}_tab${tab_n}_chart`
    ) as HTMLElement;
    setElementTab(true);

    if (element) {
      element.innerHTML = "";
    }
    // console.log('element: ', id, tab_n, element);

    if (!element) return;

    // console.log('getting: ', id, items);

    setActiveTabTotal("Loading");
    setIsLoading(true);

    // console.log(items, tab_n);

    let item = items[tab_n - 1].connection.values[0];
    try {
      const res = await getFilesType(id, item.id);
      const types = res?.data.alexandriasConnection.groupBy.type;

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

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTab(1);

    return function cleanup() {
      if (activeChart) {
        activeChart.destroy();
      }
    };
  }, [catLoading]);

  // useEffect(() => {
  //   if (activeChart) {
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(true);
  //   }
  // }, [activeChart]);

  if (catLoading) {
    return <LoadingSidebar />;
  }

  let items: any;
  let itemsData = catData.categoriesConnection.groupBy.id;
  items = itemsData;

  const checkStatus = (cid: string) => {
    // https://filfox.info/en/deal/${deailID}
  };

  const onCopy = () => {
    // console.log("copied!");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const getChartWrapper = (index: number) => {
    return <div id={`${id}_tab${index}_chart`} style={{ height: "250px" }} />;
  };

  return (
    <>
      {/* begin::Sidebar Nav */}
      <ul
        className="sidebar-nav nav nav-tabs pt-15 pb-15"
        id="kt_sidebar_tabs"
        role="tablist"
        style={{ paddingLeft: "350px", paddingRight: "30px" }}
      >
        {items.map((cat: any, i: number) => {
          let current_item = cat.connection.values[0];
          let img = current_item.icon
            ? current_item.icon.url
            : "/media/svg/logo/gray/aven.svg";
          i++;
          return (
            <li className="nav-item" key={`cat_sidebar_${current_item.id}`}>
              <a
                onClick={() => {
                  setTab(i);
                }}
                className={clsx("nav-link", {
                  active: activeTab === `#sidebar_${id}_tab${i}`,
                })}
                id="kt_sidebar_tab_1"
              >
                <img alt="" src={toAbsoluteUrl(img)} className="default" />
                <img alt="" src={toAbsoluteUrl(img)} className="active" />
              </a>
            </li>
          );
        })}
      </ul>
      {/* end::Sidebar Nav */}

      {/* begin::Sidebar Content */}
      {/* begin::Sidebar Content */}
      <div id="kt_sidebar_content" className="py-5 px-5 px-lg-5">
        <div
          className="hover-scroll-y me-lg-n2 pe-lg-2"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="10px"
          data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
          data-kt-scroll-wrappers="#kt_sidebar_content"
        >
          <div className="tab-content">
            {items.map((cat: any, i: number) => {
              let current_item = cat.connection.values[0];
              i++;
              // increase index by 1
              const getChartWrapper = (index: number) => {
                return (
                  <div
                    id={`sidebar_${id}_tab${index}_chart`}
                    style={{ height: "250px" }}
                  />
                );
              };

              return (
                <div
                  className={`tab-pane fade ${
                    activeTab === `#sidebar_${id}_tab${i}` ? "show active" : ""
                  }`}
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
                        {/**
                         * <button
                          type="button"
                          className="btn btn-md btn-icon btn-icon-white btn-info"
                          data-kt-menu-trigger="click"
                          data-kt-menu-overflow="true"
                          data-kt-menu-placement="bottom-end"
                          data-kt-menu-flip="top-end"
                        >
                          <Ktsvg
                            path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                            className="svg-icon-1"
                          />
                        </button>
                         */}
                        <Dropdown1 />
                      </div>
                    </div>
                    {/* end::Header */}

                    {/* begin::Body */}
                    <div className="d-flex card-body px-3 py-0 justify-content-center">
                      {isLoading ? (
                        <div className="d-flex align-self-center align-items-center mb-7">
                          <span className="spinner-border spinner-border-lg align-middle ms-2"></span>
                        </div>
                      ) : (
                        <div />
                      )}
                      {getChartWrapper(i)}
                    </div>
                    {/* end: Card Body */}
                  </div>
                  {/* end::Card */}
                </div>
              );
            })}
          </div>
          {/* begin::Card */}
          <div className="card card-custom bg-transparent">
            {/* begin::Header */}
            <div className="card-header align-items-center border-0">
              <h3 className="card-title fw-bolder fs-3">
                {props.sidebar && props.sidebar === "single" ? "Connect" : ""}{" "}
                {/** TODO: restore 'Mis Archivos' gatting them from db */}
              </h3>
              {/**
                 * <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <Ktsvg
                    path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    className="svg-icon-1"
                  />
                </button>
                <Dropdown1 />
              </div>
                 */}
            </div>

            {props.sidebar && props.sidebar === "single" && (
              <div className="card-body pt-0">
                <Clipboard
                  data-clipboard-text={
                    props.alexandrias[0]
                      ? props.alexandrias[0].cid
                      : `not available`
                  }
                  onSuccess={onCopy}
                  className="clipboard fw-bolder text-hover-primary fs-6"
                >
                  <div className="d-flex align-items-center mb-7">
                    <span
                      className="symbol symbol-60px me-4"
                      style={{ backgroundColor: colorPDF }}
                    >
                      <img
                        src="/media/icons/aletheia/Formats/ipfs.svg"
                        className="svg-icon-1 svg-icon-success"
                        alt={`ipfs`}
                      />
                    </span>

                    <div
                      className={`d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3 ${
                        copied ? "hide" : ""
                      }`}
                    >
                      IPFS
                      <span className=" opacity-25 fw-bold fs-7 my-1">
                        File System Decentralizado
                      </span>
                    </div>

                    <div
                      className={`d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3 ${
                        copied ? "" : "hide"
                      }`}
                    >
                      COPIED
                      <span className=" opacity-25 fw-bold fs-7 my-1"></span>
                    </div>
                  </div>
                </Clipboard>

                <a
                  href={props.alexandrias[0].source_url}
                  target={"_blank"}
                  className=" fw-bolder text-hover-primary fs-6"
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center mb-7">
                    <span
                      className="symbol symbol-60px me-4"
                      style={{ backgroundColor: colorPDF }}
                    >
                      <img
                        src="/media/icons/aletheia/Formats/source.svg"
                        className="svg-icon-1 svg-icon-success"
                        alt={`source`}
                      />
                    </span>

                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      Fuente
                      <span className=" opacity-25 fw-bold fs-7 my-1">
                        {props.alexandrias[0].source.name}
                      </span>
                    </div>
                  </div>
                </a>

                {props.alexandrias[0].type === "csv" && (
                  <a
                    onClick={toogleMinisearch}
                    className=" fw-bolder text-hover-primary fs-6"
                    rel="noreferrer"
                  >
                    <div className="d-flex align-items-center mb-7">
                      <span
                        className="symbol symbol-60px me-4"
                        style={{ backgroundColor: colorPDF }}
                      >
                        <img
                          src="/media/icons/aletheia/Formats/search.svg"
                          className="svg-icon-1 svg-icon-success"
                          alt={`search`}
                        />
                      </span>

                      <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                        Mini Search
                        <span className=" opacity-25 fw-bold fs-7 my-1">
                          Busqueda simple
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                {props.alexandrias[0].type === "xlsx" && (
                  <a
                    href={`http://view.officeapps.live.com/op/view.aspx?src=${
                      props.alexandrias[0].file.length > 0
                        ? props.alexandrias[0].file[0].url
                        : `https://${props.alexandrias[0]?.cid}.ipfs.dweb.link/`
                    }`}
                    target={"_blank"}
                    className=" fw-bolder text-hover-primary fs-6"
                    rel="noreferrer"
                  >
                    <div className="d-flex align-items-center mb-7">
                      <span
                        className="symbol symbol-60px me-4"
                        style={{ backgroundColor: colorPDF }}
                      >
                        <img
                          src="/media/icons/aletheia/Formats/xls.svg"
                          className="svg-icon-1 svg-icon-success"
                          alt={`open xls`}
                        />
                      </span>

                      <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                        Excel Online
                        <span className=" opacity-25 fw-bold fs-7 my-1">
                          Abrir Documento
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                {props.alexandrias[0].type === "pdf" && (
                  <a
                    href={`${
                      props.alexandrias[0].file.length > 0
                        ? props.alexandrias[0].file[0].url
                        : `https://${props.alexandrias[0]?.cid}.ipfs.dweb.link/`
                    }`}
                    target={"_blank"}
                    className=" fw-bolder text-hover-primary fs-6"
                    rel="noreferrer"
                  >
                    <div className="d-flex align-items-center mb-7">
                      <span
                        className="symbol symbol-60px me-4"
                        style={{ backgroundColor: colorPDF }}
                      >
                        <img
                          src="/media/icons/aletheia/Formats/pdf.svg"
                          className="svg-icon-1 svg-icon-success"
                          alt={`open xls`}
                        />
                      </span>

                      <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                        PDF Online
                        <span className=" opacity-25 fw-bold fs-7 my-1">
                          Abrir Documento
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                <a
                  href={
                    props.alexandrias[0].file.length > 0
                      ? props.alexandrias[0].file[0].url
                      : `https://${props.alexandrias[0]?.cid}.ipfs.dweb.link/`
                  }
                  target={"_blank"}
                  rel="noreferrer"
                  className=" fw-bolder text-hover-primary fs-6"
                >
                  <div className="d-flex align-items-center mb-7">
                    <span
                      className="symbol symbol-60px me-4"
                      style={{ backgroundColor: colorPDF }}
                    >
                      <img
                        src="/media/icons/aletheia/Formats/download.svg"
                        className="svg-icon-1 svg-icon-success"
                        alt={`download`}
                      />
                    </span>

                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      Descarga
                      <span className=" opacity-25 fw-bold fs-7 my-1">
                        Descarga archivo
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href={
                    props.alexandrias[0].api_endpoint > 0
                      ? props.alexandrias[0].api_endpoint
                      : `https://rapidapi.com/aletheia-data-aletheia-data-default/api/aletheia2/`
                  }
                  target={"_blank"}
                  rel="noreferrer"
                  className=" fw-bolder text-hover-primary fs-6"
                >
                  <div className="d-flex align-items-center mb-7">
                    <span
                      className="symbol symbol-60px me-4"
                      style={{ backgroundColor: colorPDF }}
                    >
                      <img
                        src="/media/icons/aletheia/Formats/rapid.svg"
                        className="svg-icon-1 svg-icon-success"
                        alt={`rapid`}
                      />
                    </span>

                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      Rapid API
                      <span className=" opacity-25 fw-bold fs-7 my-1">
                        Usa nuestro API
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {props?.sidebar === "hide" && (
              <div className="card-body pt-0">
                <div className="d-flex align-items-center mb-7">
                  <span
                    className="symbol symbol-60px me-4"
                    style={{ backgroundColor: colorPDF }}
                  >
                    <img
                      src="/media/icons/aletheia/Formats/pdf.svg"
                      className="svg-icon-1 svg-icon-success"
                      alt={`pdf`}
                    />
                  </span>

                  <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                    <a href="#" className=" fw-bolder text-hover-primary fs-6">
                      Estadísticas de Estudiantes Matriculas...
                    </a>
                    <span className=" opacity-25 fw-bold fs-7 my-1">
                      Este conjunto de datos...
                    </span>
                  </div>
                </div>
              </div>
            )}

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
};

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
        show: false,
      },
      y: {
        formatter: function (val: number) {
          return `${val} archivos`;
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
