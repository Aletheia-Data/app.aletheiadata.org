/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import moment from 'moment';


type Props = {
  className: string;
  innerPadding?: string;
  data: any;
  color?: string;
};

const TablesWidget4: React.FC<Props> = ({
  className,
  data,
  innerPadding = "",
  color = "primary",
}) => {

  data = data.data;
  const entity = data.entity;
  const type = data.type;

  let countTotal;
  let title;
  let desc;
  let entityCount;
  let records;
  let lastRecord;

  switch (entity) {
    case 'src':
      title = type === 'single' ? 'Fuentes' : 'Fuentes';
      desc = type === 'single' ? '' : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      countTotal = type === 'single' ? '' : data.alexandriasConnection.groupBy.source[0].connection.aggregate.totalCount;
      entityCount = type === 'single' ? '' : data.sourcesConnection.groupBy.id[0].connection.aggregate.totalCount;
      records = type === 'single' ? '' : data.sources;
      lastRecord = type === 'single' ? '' : records[0];
      break;
    case 'dep':
      title = type === 'single' ? 'Ministerios o instituciónes' : 'Ministerios o instituciónes';
      desc = type === 'single' ? '' : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      countTotal = type === 'single' ? '' : data.alexandriasConnection.groupBy.department[0].connection.aggregate.totalCount;
      entityCount = type === 'single' ? '' : data.departmentsConnection.groupBy.id[0].connection.aggregate.totalCount;
      records = type === 'single' ? '' : data.departments;
      lastRecord = type === 'single' ? '' : records[0];
      break;
    case 'cat':
      title = type === 'single' ? 'Categorias' : 'Categorias';
      desc = type === 'single' ? '' : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      countTotal = type === 'single' ? '' : data.alexandriasConnection.groupBy.category.length > 0 ? data.alexandriasConnection.groupBy.category[0].connection.aggregate.totalCount : 0;
      entityCount = type === 'single' ? '' : data.categoriesConnection.groupBy.id[0].connection.aggregate.totalCount;
      records = type === 'single' ? '' : data.categories;
      lastRecord = type === 'single' ? '' : records[0];
      break;
  }

  console.log(data);

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
                <td className="ps-0 min-w-250px py-5">Nombre</td>
                <td className="min-w-100px py-5">Website</td>
                <td className="min-w-100px py-5">
                  <span className={`text-${color}`}>Ultimo Cambio</span>
                  <KTSVG
                    className={`svg-icon-sm svg-icon-${color}`}
                    path="/media/icons/duotone/Navigation/Down-2.svg"
                  />
                </td>
                <td className="min-w-100px py-5">Archivos</td>
                <td className="min-w-100px pe-0 text-end py-5">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                records.map((rec: any) => {
                  console.log(rec);
                  return (
                    <tr key={`item_${rec.id}`}>
                      <td className="ps-0">
                        <a
                          href="#"
                          className="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {rec.name || rec.title}
                        </a>
                      </td>
                      <td>
                        <span className="text-gray-800 fw-bolder d-block fs-6">
                          {rec.website || rec.url}
                        </span>
                      </td>
                      <td>
                        <span className={`text-${color} fw-bolder d-block fs-6`}>
                          {moment(rec.updatedAt).format('DD/MM/YYYY')}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${rec.alexandrias.length > 10 ? 'badge-light-primary' : rec.alexandrias.length < 5 ? 'badge-light-danger' : 'badge-light-warning'}`}>{rec.alexandrias.length}</span>
                      </td>
                      <td className="pe-0 text-end">
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-3"
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          />
                        </a>
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

export { TablesWidget4 };
