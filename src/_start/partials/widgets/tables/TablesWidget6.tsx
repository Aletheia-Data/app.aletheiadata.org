/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import moment from 'moment';
import { Link } from "react-router-dom";

type Props = {
  className: string;
  type: string;
  innerPadding?: string;
  data: any;
  color?: string;
};

const TablesWidget6: React.FC<Props> = ({
  className,
  data,
  type,
  innerPadding = "",
  color = "primary",
}) => {

  data = data.data;
  const entity = data.entity;

  let title;
  let desc;
  let entityCount;
  let records: any;
  let connection: any;
  let url;

  // sort by aletheias count +
  // get first record (most aletheias)
  data = data.alexandrias[0];

  switch (entity) {
    case 'src':
      title = data.title;
      desc = data.description;
      records = data.aletheias;
      break;
    case 'dep':
      title = data.title;
      desc = data.description;
      records = data.aletheias;
      break;
    case 'cat':
      title = data.title;
      desc = data.description;
      records = data.aletheias;
      break;
  }

  entityCount = data.aletheias.length > 0 ? data.aletheias.length : 0;
  title = type === 'alexandrias' ? 'Archivos cargados' : 'Pruebas cargados'

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
        <div className="card-toolbar">
          <a href="#" className="btn btn-primary fw-bolder fs-7">
            Subir Archivo
          </a>
        </div>
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
                <td className="min-w-100px py-5" width="25%">{type === 'single' ? 'Status' : 'Website'}</td>
                <td className="min-w-100px py-5" width="25%">
                  <span className={`text-${color}`}>Ultimo Cambio</span>
                  <KTSVG
                    className={`svg-icon-sm svg-icon-${color}`}
                    path="/media/icons/duotone/Navigation/Down-2.svg"
                  />
                </td>
                <td className="min-w-100px py-5" width="10%">{type === 'single' ? 'Pruebas' : 'Archivos'}</td>
                <td className="min-w-100px pe-0 text-end py-5" width="10%">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                records && records.map((rec: any) => {
                  let count = 0;
                  let docs;

                  if (connection.length > 0) {
                    docs = connection.filter((item: any) => item.key === rec.id);
                    if (docs.length > 0) {
                      count = docs[0].connection.aggregate.count;
                    } else {
                      count = 0
                    }
                  }

                  let background_status;
                  let text_status;
                  if (type === 'single') {
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
                  }

                  const link = `/${type}/${entity}/${rec.cid}`;

                  return (
                    <tr key={`item_${rec.id}`}>
                      <td className="ps-0">
                        <Link
                          to={link}
                          className="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {rec.name || rec.title}
                        </Link>
                      </td>
                      <td>
                        {
                          type === 'single' &&
                          <div className="text-muted mt-2 fw-bold fs-6 d-flex align-items-center mb-5">
                            <span className="badge-container">
                              <span className={`badge badge-circle ${background_status}`}></span>
                            </span>
                            {text_status}
                          </div>
                        }
                        {
                          type === 'collection' &&
                          <span className="text-gray-800 fw-bolder d-block fs-6">
                            {rec.website || rec.url}
                          </span>
                        }
                      </td>
                      <td>
                        <span className={`text-${color} fw-bolder d-block fs-6`}>
                          {moment(rec.updatedAt).format('DD/MM/YYYY')}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${count > 10 ? 'badge-light-primary' : count < 5 ? 'badge-light-danger' : 'badge-light-warning'}`}>{count}</span>
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

export { TablesWidget6 };
