/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import moment from "moment";
import { Ktsvg } from "_start/helpers";
import { Record } from "common/types/types";
import { Link } from "react-router-dom";
import CountBadge from "common/components/CountBadge";
import StatusBadge from "common/components/StatusBadge";

export const getListingPageColumns = (
  data: any,
  entity: string,
  type: string
) => {
  if (entity === "cat") {
    return [
      {
        title: "Nombre",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="text-gray-800 fw-bolder text-hover-primary fs-6"
            to="#"
          >
            {recordItem.title || recordItem.name}
          </Link>
        )),
      },
      {
        title: "Ultimo Cambio",
        cells: data?.map((recordItem: Record) => (
          <span
            key={`record-alexandria-${recordItem.cid}`}
            className="text-primary fw-bolder d-block fs-6"
          >
            {moment(recordItem?.updatedAt).format("DD/MM/YYYY")}
          </span>
        )),
      },
      {
        title: "Archivos",
        cells: data?.map((recordItem: Record) => {
          const files =
            type === "collection"
              ? recordItem.alexandrias
              : recordItem.aletheias;

          return (
            <CountBadge
              key={`record-alexandria-${recordItem.cid}`}
              countNumber={files.length}
            />
          );
        }),
      },
      {
        title: "Action",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
            to={`/${recordItem.cid}`}
          >
            <Ktsvg
              className="svg-icon-4"
              path="/media/icons/duotone/General/Sad.svg"
            />
          </Link>
        )),
      },
    ];
  } else {
    return [
      {
        title: "Nombre",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="text-gray-800 fw-bolder text-hover-primary fs-6"
            to="#"
          >
            {recordItem.title || recordItem.name}
          </Link>
        )),
      },
      {
        title: type === "single" ? "Pruebas" : "Archivos",
        cells: data?.map((recordItem: Record) => (
          <div key={`record-alexandria-${recordItem.cid}`}>
            {type === "single" && <StatusBadge status={recordItem.status} />}
            {type === "collection" && (
              <a
                href={recordItem.website || recordItem.url}
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-gray-800 fw-bolder d-block fs-6">
                  {recordItem.website || recordItem.url}
                </span>
              </a>
            )}
          </div>
        )),
      },
      {
        title: "Ultimo Cambio",
        cells: data?.map((recordItem: Record) => (
          <span
            key={`record-alexandria-${recordItem.cid}`}
            className="text-primary fw-bolder d-block fs-6"
          >
            {moment(recordItem?.updatedAt).format("DD/MM/YYYY")}
          </span>
        )),
      },
      {
        title: "Archivos",
        cells: data?.map((recordItem: Record) => {
          const files =
            type === "collection"
              ? recordItem.alexandrias
              : recordItem.aletheias;

          return (
            <CountBadge
              key={`record-alexandria-${recordItem.cid}`}
              countNumber={files.length}
            />
          );
        }),
      },
      {
        title: "Action",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
            to={`/${recordItem.cid}`}
          >
            <Ktsvg
              className="svg-icon-4"
              path="/media/icons/duotone/General/Sad.svg"
            />
          </Link>
        )),
      },
    ];
  }
};
