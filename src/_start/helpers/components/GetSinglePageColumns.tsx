import React from "react";
import StatusBadge from "../../partials/components/StatusBadge";
import moment from "moment";
import { Ktsvg } from "_start/helpers";
import { Record } from "_start/types";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getSinglePageColumns = (data: any) => {
  return [
    {
      title: "Titulo",
      cells: data?.map((recordItem: Record) => (
        <Link
          key={`record-alexandria-${recordItem.cid}`}
          className="text-gray-800 fw-bolder text-hover-primary fs-6"
          to={`/single/cat/${recordItem.cid}?assetId=${recordItem.id}`}
        >
          {recordItem.title}
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
          to={`/single/cat/${recordItem.cid}?assetId=${recordItem.id}`}
        >
          <Ktsvg
            className="svg-icon-4"
            path="/media/icons/duotone/General/Sad.svg"
          />
        </Link>
      )),
    },
  ];
};
