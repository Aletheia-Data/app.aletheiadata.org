/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import moment from "moment";
import { Ktsvg } from "_start/helpers";
import { Record } from "_start/types";
import { Link } from "react-router-dom";
import CountBadge from "../partials/components/CountBadge";
import StatusBadge from "../partials/components/StatusBadge";

export const getListingPageColumns = (
  data: any,
  entity: string,
  type: string
) => {
  console.log(data, entity, type);
  if (entity === "cat") {
    return [
      {
        title: "Nombre",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="text-gray-800 fw-bolder text-hover-primary fs-6"
            to={`/${type}/${entity}/${recordItem.id}`}
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
            to={`/${recordItem.cid}?assetId=${recordItem.id}`}
          >
            <Ktsvg
              className="svg-icon-4"
              path="/media/icons/duotone/General/Attachment1.svg"
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
            to={`/${type}/${entity}/${recordItem.id}?assetId=${recordItem.id}`}
          >
            {recordItem.title || recordItem.name}
          </Link>
        )),
      },
      {
        title: type === "single" ? "Pruebas" : "URL",
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
            to={`/${type}/${entity}/${recordItem.id}`}
          >
            <Ktsvg
              className="svg-icon-4"
              path="/media/icons/duotone/General/Attachment1.svg"
            />
          </Link>
        )),
      },
    ];
  }
};
