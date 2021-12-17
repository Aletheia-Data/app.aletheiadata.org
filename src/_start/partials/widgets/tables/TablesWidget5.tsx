/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import moment from 'moment';
import { Link } from "react-router-dom";

type Props = {
  className: string;
  innerPadding?: string;
  data: any;
  color?: string;
};

const TablesWidget5: React.FC<Props> = ({
  className,
  data,
  innerPadding = "",
  color = "primary",
}) => {

  data = data.data;
  const entity = data.entity;
  const type = data.type;

  let title;
  let desc;
  let entityCount;
  let records: any;
  let connection: any;
  let url;

  switch (entity) {
    case 'src':
      title = data.source.name;
      desc = data.source.description;
      connection = data.alexandriasConnection.groupBy.source;
      records = data.source.alexandrias;
      break;
    case 'dep':
      title = data.department.name;
      desc = data.department.description;
      connection = data.alexandriasConnection.groupBy.department;
      records = data.department.alexandrias;
      break;
    case 'cat':
      title = data.category.name;
      desc = data.category.description;
      connection = data.alexandriasConnection.groupBy.category;
      records = data.category.alexandrias;
      break;
  }

  console.log(records);

  entityCount = connection.length > 0 ? connection[0].connection.aggregate.totalCount : 0;

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">{title}</span>
          <span className="text-muted mt-3 fw-bold fs-7">
            {`${entityCount} elementos registrados`}
          </span>
        </h3>
        {
          type === 'single' &&
          <div className="card-toolbar">
            <a href="#" className="disabled btn btn-primary fw-bolder fs-7">
              Subir Archivo
            </a>
          </div>
        }
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body py-0">
        {/* begin::Table*/}
        <div className="table-responsive">
          <table
            className="table align-middle border-gray-100"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                <td className="ps-0 min-w-250px py-5" width="30%">Nombre</td>
                <td className="min-w-100px py-5" width="10%">{'Formato'}</td>
                <td className="min-w-100px py-5" width="25%">
                  <span className={`text-${color}`}>Ultimo Cambio</span>
                  <KTSVG
                    className={`svg-icon-sm svg-icon-${color}`}
                    path="/media/icons/duotone/Navigation/Down-2.svg"
                  />
                </td>
                <td className="min-w-100px py-5" width="25%">{'Status'}</td>
                <td className="min-w-100px pe-0 text-end py-5" width="10%">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                records && records.map((rec: any) => {
                  let count = '0';

                  let badge;
                  console.log(rec);

                  let background_status;
                  let text_status;
                  switch (rec.status) {
                    case 'under_review':
                      background_status = 'background-csv';
                      text_status = 'under review';
                      break;
                    case 'on_line':
                      background_status = 'background-xls';
                      text_status = 'online';
                      break;
                    case 'blocked':
                      background_status = 'background-ods';
                      text_status = 'blocked';
                      break;
                    case 'broken':
                      background_status = 'background-pdf';
                      text_status = 'broken';
                      break;
                  }

                  let background_format;
                  switch (rec.type) {
                    case 'pdf':
                      background_format = 'background-pdf';
                      break;
                    case 'csv':
                      background_format = 'background-csv';
                      break;
                    case 'xls':
                    case "xlsx":
                      background_format = 'background-xls';
                      break;
                    case 'ods':
                      background_format = 'background-ods';
                      break;
                    case 'other':
                      background_format = 'background-other';
                      break;
                  }

                  const link = `/${type}/${entity}/${rec.cid}`;

                  return (
                    <tr key={`item_${rec.id}`}>
                      <td className="ps-0">
                        <Link
                          to={rec.cid ? link : '#'}
                          className="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {rec.name || rec.title}
                        </Link>
                      </td>
                      <td>
                        <span className={`badge ${background_format}`}>
                          {rec.type}
                        </span>
                      </td>
                      <td>
                        <span className={`text-${color} fw-bolder d-block fs-6`}>
                          {moment(rec.updatedAt).format('DD/MM/YYYY')}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${background_status}`}>
                          {text_status}
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/icons/duotone/General/Sad.svg"
                          />
                        </a>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end::Body*/}
    </div>
  );
};

export { TablesWidget5 };
