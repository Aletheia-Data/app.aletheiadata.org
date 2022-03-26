/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Ktsvg } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

type Props = {
  className: string;
};

const ListsWidget1: React.FC<Props> = ({ className }) => {
  const IMPORTS_QUERY = gql`
    query Imports {
      imports(limit: 5, sort: "updatedAt:desc", where: {}) {
        id
        updatedAt
        source
        documents
        wallet
        status
        alexandrias {
          cid
          type
        }
      }
    }
  `;

  var { data, loading, error } = useQuery(IMPORTS_QUERY, {
    variables: {},
  });

  const IMPORTS_QUERY_ALL = gql`
    query ImportsCount {
      importsConnection {
        groupBy {
          type {
            key
            connection {
              aggregate {
                count
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  var {
    data: dataCount,
    loading: loadingCount,
    error,
  } = useQuery(IMPORTS_QUERY_ALL, {
    variables: {},
  });

  if (loading || loadingCount) {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">Timeline</span>
            <span className="text-muted mt-2 fw-bold fs-6">Loading ...</span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown */}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <Ktsvg
                path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                className="svg-icon-1"
              />
            </button>
            <Dropdown1 />
            {/* end::Dropdown */}
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-3">
          {/* <begin::Timeline */}
          <div className="timeline-label">
            {/* begin::Item */}
            <div className="timeline-item">
              {/* begin::Label */}
              <div className="timeline-label fw-bolder text-gray-800 fs-6">
                00:00
              </div>
              {/* end::Label */}

              {/* begin::Badge */}
              <div className="timeline-badge">
                <i className="fa fa-genderless text-success fs-1"></i>
              </div>
              {/* end::Badge */}

              {/* begin::Content */}
              <div className="timeline-content d-flex">
                <span className="fw-bolder text-gray-800 ps-3">
                  Loading ...
                </span>
              </div>
              {/* end::Content */}
            </div>
            {/* end::Item */}
          </div>
          {/* <end::Timeline */}
        </div>

        {/* <end: Card Body */}
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Timeline</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {
              dataCount.importsConnection.groupBy.type[0].connection.aggregate
                .totalCount
            }{" "}
            Importaciónes
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown 
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <Ktsvg
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          */}
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-3">
        {/* <begin::Timeline */}
        <div className="timeline-label">
          {data.imports.map(function (item: any) {
            let docs = item.alexandrias.length;
            let time = new Date(item.updatedAt);
            let message;
            let badge_color;
            switch (item.status) {
              case "in_progress":
                message = `importando ${docs} documentos desde `;
                badge_color = `text-warning`;
                break;
              case "done":
                message = `${docs} documentos importados desde `;
                badge_color = `color-xls`;
                break;
              default:
                break;
            }

            return (
              <div className="timeline-item" key={`import_${item.id}}`}>
                {/* begin::Label */}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                {/* end::Label */}

                {/* begin::Badge */}
                <div className="timeline-badge">
                  <i className={`fa fa-genderless ${badge_color} fs-1`}></i>
                </div>
                {/* end::Badge */}

                {/* begin::Content */}
                <div className="timeline-content d-flex">
                  <span className="fw-bolder text-gray-800 ps-3">
                    {`${message}`}
                    <a href={`${item.source}`} target="_blank">
                      source
                    </a>
                  </span>
                </div>
                {/* end::Content */}
              </div>
            );
          })}
        </div>
        {/* <end::Timeline */}
      </div>

      {/* <end: Card Body */}
    </div>
  );
};

export { ListsWidget1 };
