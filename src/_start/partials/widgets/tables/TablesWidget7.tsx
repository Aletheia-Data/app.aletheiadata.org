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

const TablesWidget7: React.FC<Props> = ({
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
      title = type === 'single' ? data.source.name : '';
      desc = type === 'single' ? data.source.description : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.source;
      records = type === 'single' ? data.source.alexandrias : data.sources;
      break;
    case 'dep':
      title = type === 'single' ? 'Ministerios o instituciónes' : 'Ministerios o instituciónes';
      desc = type === 'single' ? '' : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.department;
      records = type === 'single' ? data.department : data.departments;
      break;
    case 'cat':
      title = type === 'single' ? data.source.name : '';
      desc = type === 'single' ? '' : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.category;
      records = type === 'single' ? data.category : data.categories;
      break;
  }

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
                  let count = '0';

                  let files = type === 'collection' ? rec.alexandrias : rec.aletheias;
                  let badge;

                  if (files.length > 0) {
                    if (files.length >= 100) {
                      count = `+100`;
                      badge = 'badge-light-primary';
                    } else {
                      count = `${files.length}`;
                      badge = files.length < 5 ? 'badge-light-danger' : files.length >= 5 && files.length <= 10 ? 'badge-light-warning' : 'badge-light-primary';
                    }
                  } else {
                    badge = 'badge-light-danger';
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

                  const link = `/${type}/${entity}/${rec.id}`;

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
                          <a href={rec.website || rec.url} target="_blank">
                            <span className="text-gray-800 fw-bolder d-block fs-6">
                              {rec.website || rec.url}
                            </span>
                          </a>
                        }
                      </td>
                      <td>
                        <span className={`text-${color} fw-bolder d-block fs-6`}>
                          {moment(rec.updatedAt).format('DD/MM/YYYY')}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${badge}`}>{count}</span>
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

export { TablesWidget7 };
