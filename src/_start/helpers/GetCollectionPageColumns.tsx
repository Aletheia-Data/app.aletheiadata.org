import React from "react";
import moment from "moment";
import { Ktsvg } from "_start/helpers";
import { Record } from "_start/types";
import { Link } from "react-router-dom";

import StatusBadge from "_start/partials/components/StatusBadge";
import FormatBadge from "_start/partials/components/FormatBadge";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCollectionPageColumns = (
  data: any,
  entity: string,
  type: string
) => {
  if (entity !== "dep") {
    return [
      {
        title: "Nombre",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className={`text-gray-800 fw-bolder text-hover-primary fs-6 ${
              recordItem.cid ? "" : "disabled"
            }`}
            to={recordItem.cid ? `/${type}/${entity}/${recordItem.cid}` : "#"}
          >
            {recordItem.name || recordItem.title}
          </Link>
        )),
      },
      {
        title: "Departamento",
        cells: data?.map((recordItem: Record) => {
          return (
            <Link
              key={`record-alexandria-${recordItem.cid}`}
              className={`text-gray-800 fw-bolder text-hover-primary fs-6 ${
                recordItem.cid ? "" : "disabled"
              }`}
              to={
                recordItem.cid
                  ? `/collection/dep/${recordItem.department.id}`
                  : "#"
              }
            >
              <span
                key={`record-alexandria-${recordItem.cid}`}
                className="text-primary fw-bolder d-block fs-6"
              >
                {recordItem.department.name}
              </span>
            </Link>
          );
        }),
      },
      {
        title: "Formato",
        cells: data?.map((recordItem: Record) => {
          return (
            <FormatBadge
              key={`record-alexandria-${recordItem.cid}`}
              type={recordItem.type}
            />
          );
        }),
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
        title: "Estatus",
        cells: data?.map((recordItem: Record) => (
          <StatusBadge
            key={`record-alexandria-${recordItem.cid}`}
            status={recordItem.status}
          />
        )),
      },
      {
        title: "Action",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
            to={`/${type}/${entity}/${recordItem.cid}`}
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
            className={`text-gray-800 fw-bolder text-hover-primary fs-6 ${
              recordItem.cid ? "" : "disabled"
            }`}
            to={recordItem.cid ? `/${type}/${entity}/${recordItem.cid}` : "#"}
          >
            {recordItem.name || recordItem.title}
          </Link>
        )),
      },
      {
        title: "Formato",
        cells: data?.map((recordItem: Record) => {
          return (
            <FormatBadge
              key={`record-alexandria-${recordItem.cid}`}
              type={recordItem.type}
            />
          );
        }),
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
        title: "Estatus",
        cells: data?.map((recordItem: Record) => (
          <StatusBadge
            key={`record-alexandria-${recordItem.cid}`}
            status={recordItem.status}
          />
        )),
      },
      {
        title: "Action",
        cells: data?.map((recordItem: Record) => (
          <Link
            key={`record-alexandria-${recordItem.cid}`}
            className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
            to={`/${type}/${entity}/${recordItem.cid}`}
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
