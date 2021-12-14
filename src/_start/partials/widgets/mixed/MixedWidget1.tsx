/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { toAbsoluteUrl } from "../../../helpers";
import { getCSS, getCSSVariableValue } from "../../../assets/ts/_utils";

type Props = {
  className: string;
};

const MixedWidget1: React.FC<Props> = ({ className }) => {
  const chart1Ref = useRef<HTMLDivElement | null>(null);
  const chart2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chart1Ref.current) {
      return;
    }

    const heigh1 = parseInt(getCSS(chart1Ref.current, "height"));
    const chart1 = new ApexCharts(chart1Ref.current, chart1Options(heigh1));
    if (chart1) {
      chart1.render();
    }

    return () => {
      if (chart1) {
        chart1.destroy();
      }
    };
  }, [chart1Ref]);

  useEffect(() => {
    if (!chart2Ref.current) {
      return;
    }

    const heigh2 = parseInt(getCSS(chart2Ref.current, "height"));
    const chart2 = new ApexCharts(chart2Ref.current, chart2Options(heigh2));
    if (chart2) {
      chart2.render();
    }

    return () => {
      if (chart2) {
        chart2.destroy();
      }
    };
  }, [chart2Ref]);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            My Bestsellers
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            More than 400+ new members
          </span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                Week
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                Month
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*end::Header */}

      {/*begin::Body */}
      <div className="card-body p-0 pb-13 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/*begin::Tap pane */}
          <div
            className="tab-pane fade show active"
            id="kt_tab_pane_1_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            <div className="d-flex flex-column">
              {/*begin::Chart */}
              <div className="flex-grow-1">
                <div
                  ref={chart1Ref}
                  id="kt_mixed_widget_1_chart"
                  style={{ height: "150px" }}
                ></div>
              </div>
              {/*end::Chart */}

              {/*begin::Items */}
              <div className="mt-5 px-9">
                {/*begin::Item */}
                <div className="d-flex align-items-center justify-content-between mb-6">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/plurk.svg"
                          )}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        Pipeline Theme
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +82$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Item */}

                {/*begin::Widget Item */}
                <div className="d-flex align-items-center justify-content-between mb-6">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/telegram.svg"
                          )}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        ThumbsUp HTML
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +280$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Widget Item */}

                {/*begin::Widget Item */}
                <div className="d-flex align-items-center justify-content-between">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl("/media/svg/misc/puzzle.svg")}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        Finder Admin
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +4500$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Widget Item */}
              </div>
              {/*end::Widget Items */}
            </div>
          </div>
          {/*end::Tap pane */}

          {/*begin::Tap pane */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_2"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            <div className="d-flex flex-column">
              {/*begin::Chart */}
              <div className="flex-grow-1">
                <div
                  ref={chart2Ref}
                  id="kt_mixed_widget_2_chart"
                  style={{ height: "150px" }}
                ></div>
              </div>
              {/*end::Chart */}

              {/*begin::Items */}
              <div className="mt-5 px-9">
                {/*begin::Widget Item */}
                <div className="d-flex align-items-center justify-content-between mb-6">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/telegram.svg"
                          )}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        ThumbsUp HTML
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +280$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Widget Item */}

                {/*begin::Item */}
                <div className="d-flex align-items-center justify-content-between mb-6">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/plurk.svg"
                          )}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        Pipeline Theme
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +82$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Item */}

                {/*begin::Widget Item */}
                <div className="d-flex align-items-center justify-content-between">
                  {/*begin::Section */}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol */}
                    <div className="symbol symbol-50px symbol-light me-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl("/media/svg/misc/puzzle.svg")}
                          alt=""
                          className="mw-75"
                        />
                      </span>
                    </div>
                    {/*end::Symbol */}

                    {/*begin::Title */}
                    <div>
                      <a
                        href="#"
                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                      >
                        Finder Admin
                      </a>
                      <div className="fs-7 text-muted fw-bold mt-1">
                        Most Successful Fellas
                      </div>
                    </div>
                    {/*end::Title */}
                  </div>
                  {/*end::Section */}

                  {/*begin::Label */}
                  <div className="bg-light rounded fw-bolder text-gray-600 py-2 px-3">
                    +4500$
                  </div>
                  {/*end::Label */}
                </div>
                {/*end::Widget Item */}
              </div>
              {/*end::Widget Items */}
            </div>
          </div>
          {/*end::Tap pane */}
        </div>
      </div>
    </div>
  );
};

const chart1Options = (height: string | number | undefined): ApexOptions => {
  return {
    series: [
      {
        name: "Net Profit",
        data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#20D489", ""],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#A1A5B7",
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: getCSSVariableValue("--bs-primary"),
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: "#A1A5B7",
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
        formatter: function (val) {
          return "$" + val + " thousands";
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.6,
        stops: [0, 100],
      },
      // opacity: 1
    },
    colors: [getCSSVariableValue("--bs-primary")],
    markers: {
      colors: [getCSSVariableValue("--bs-light-primary")],
      strokeColors: [getCSSVariableValue("--bs-primary")],
      strokeWidth: 3,
    },
  };
};

const chart2Options = (height: string | number | undefined): ApexOptions => {
  return {
    series: [
      {
        name: "Net Profit",
        data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    // fill: {
    //     type: 'solid',
    //     opacity: 1
    // },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [getCSSVariableValue("--bs-info")],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#A1A5B7",
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: "#E4E6EF",
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: "#A1A5B7",
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
        formatter: function (val) {
          return "$" + val + " thousands";
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    colors: [getCSSVariableValue("--bs-info")],
    markers: {
      colors: [getCSSVariableValue("--bs-light-info")],
      strokeColors: [getCSSVariableValue("--bs-info")],
      strokeWidth: 3,
    },
  };
};

export { MixedWidget1 };
