import React, { useEffect, useState } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { toAbsoluteUrl } from "../../../helpers";
import axios from "axios";

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
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/alexandrias/getAll`); // Replace with your REST API endpoint
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const element = document.getElementById(
        "kt_stats_widget_1_chart"
      ) as HTMLCanvasElement;
      if (!element) {
        return;
      }

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
        <div className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}>
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">Biblioteca</span>
            <span className="text-muted mt-2 fw-bold fs-6">Cargando Archivos</span>
          </h3>
        </div>
        <div className="card-body pt-12">
          <div
            className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
            style={{
              backgroundImage: `url('${toAbsoluteUrl("/media/svg/illustrations/bg-1.svg")}')`,
            }}
          >
            <div className="fw-bolder fs-1 text-gray-800 position-absolute">{"Loading ..."}</div>
            <canvas id="kt_stats_widget_1_chart"></canvas>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="card">{error}</div>;
  }

  let formats = data.alexandriasConnection.groupBy.type;
  let total = data.alexandriasConnection.groupBy.type[0].connection.aggregate.totalCount;

  let count_pdf = formats.filter((c: any) => c.key === "pdf")[0].connection.aggregate.count;
  let count_csv = formats.filter((c: any) => c.key === "csv")[0].connection.aggregate.count;
  let count_xls = formats.filter((c: any) => c.key === "xlsx")[0].connection.aggregate.count;
  let count_ods = formats.filter((c: any) => c.key === "ods").length > 0
    ? formats.filter((c: any) => c.key === "ods")[0].connection.aggregate.count
    : 0;
  let count_others = formats.filter((c: any) => c.key === "other")[0].connection.aggregate.count;
  let count_undefined = total - (count_pdf + count_csv + count_xls + count_ods + count_others);

  return (
    <div className={`card ${className}`}>
      <div className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Biblioteca</span>
          <span className="text-muted mt-2 fw-bold fs-6">{total} Archivos</span>
        </h3>
      </div>
      <div className="card-body pt-12">
        <div
          className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl("/media/svg/illustrations/bg-1.svg")}')`,
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
        <div className="d-flex flex-wrap justify-content-around pt-18">
          {formats.map((format: any) => {
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
      </div>
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

  let count_pdf = counter.filter((c: any) => c.key === "pdf")[0].connection.aggregate.count;
  let count_csv = counter.filter((c: any) => c.key === "csv")[0].connection.aggregate.count;
  let count_xls = counter.filter((c: any) => c.key === "xlsx")[0].connection.aggregate.count;
  let count_ods =
    counter.filter((c: any) => c.key === "ods").length > 0
      ? counter.filter((c: any) => c.key === "ods")[0].connection.aggregate.count
      : 0;
  let count_others = counter.filter((c: any) => c.key === "other")[0].connection.aggregate.count;

  const chartData = {
    datasets: [
      {
        data: [count_pdf, count_csv, count_xls, count_ods, count_others],
        backgroundColor: [colorPDF, colorCSV, colorXLS, colorODS, colorOTHER],
      },
    ],
    labels: ["PDF", "CSV", "XLS", "ODS", "Others"],
  };

  return {
    type: "doughnut",
    data: chartData,
    options: {
      responsive: true,
      cutout: "75%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: tooltipBgColor,
          titleColor: tooltipColor,
          bodyColor: tooltipColor,
        },
      },
      maintainAspectRatio: false,
    },
  };
}
