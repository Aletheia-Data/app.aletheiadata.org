/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../helpers";
import moment from 'moment';


type Props = {
  className: string;
  imagePath?: string;
  data: any;
  innerPadding?: string;
  color?: string;
};

const EngageWidget3: React.FC<Props> = ({
  className,
  imagePath = "",
  data,
  innerPadding = "",
  color = "primary",
}) => {

  console.log(data);

  /* TODO: remove after fixing issues with data */
  if (data.data) {
    data = data.data
  }

  const entity = data.entity;
  const type = data.type;

  let countTotal;
  let countSrc;
  let title;
  let desc;
  let entityCount;
  let records;
  let lastRecord;
  let url;
  let connection;

  title = '';

  switch (entity) {
    case 'src':
      title = type === 'single' ? 'Fuentes' : 'Fuentes';
      desc = type === 'single' ? data.source.description : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data?.alexandriasConnection?.groupBy?.id || data?.alexandriasConnection?.groupBy?.source;
      let srcConn = data.sourcesConnection.groupBy.id;
      // console.log(data);
      if (connection.length > 0) {
        countTotal = connection.length;
        countSrc = type === 'single' ? srcConn[0].connection.aggregate.count : srcConn[0].connection.aggregate.totalCount;
        // console.log(countTotal);
        entityCount = connection.length;
      } else {
        countTotal = 0;
        entityCount = 0;
        countSrc = srcConn[0].connection.aggregate.totalCount;
      }
      records = type === 'single' ? data.source : data.sources;
      lastRecord = type === 'single' ? records : records[0];
      url = type === 'single' ? records.url || records.website : '';
      break;
    case 'dep':
      title = type === 'single' ? 'Ministerios o instituciónes' : 'Ministerios o instituciónes';
      desc = type === 'single' ? data.department.desciption : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data?.alexandriasConnection?.groupBy?.id || data?.alexandriasConnection?.groupBy?.department;
      let depConn = data.departmentsConnection.groupBy.id;
      // console.log(depConn);
      if (connection.length > 0) {
        countTotal = connection.length;
        countSrc = type === 'single' ? depConn[0].connection.aggregate.count : depConn[0].connection.aggregate.totalCount;
        entityCount = connection.length;
      } else {
        countTotal = 0;
        entityCount = 0;
        countSrc = depConn[0].connection.aggregate.totalCount;
      }
      records = type === 'single' ? data.department : data.departments;
      lastRecord = type === 'single' ? records : records[0];
      url = type === 'single' ? records.url || records.website : '';
      break;
    case 'cat':
      title = type === 'single' ? 'Categorias' : 'Categorias';
      desc = type === 'single' ? data.category.description : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data?.alexandriasConnection?.groupBy?.id || data?.alexandriasConnection?.groupBy?.department;
      let catConn = data.categoriesConnection.groupBy.id;
      console.log(data);
      if (connection.length > 0) {
        countTotal = connection.length;
        countSrc = type === 'single' ? catConn[0].connection.aggregate.count : catConn[0].connection.aggregate.totalCount;

        entityCount = connection.length;
      } else {
        countTotal = 0;
        entityCount = 0;
        countSrc = type === 'single' ? catConn[0].connection.aggregate.count : catConn[0].connection.aggregate.totalCount;
      }
      records = type === 'single' ? data.category : data.categories;
      lastRecord = type === 'single' ? records : records[0];
      url = type === 'single' ? records.url || records.website : '';
      break;
  }

  return (
    <div className={`card card-custom ${className}`} style={{ overflow: 'hidden' }}>
      {/* begin::Card Body */}
      <div
        className={`justify-content-end card-body d-flex p-12 flex-column flex-md-row flex-lg-column flex-xxl-row bg-${color}`}
      >
        {/*begin::Image*/}
        <div
          className="bgi-no-repeat bgi-position-left bgi-size-cover h-300px h-md-auto h-lg-400px mw-100 w-650px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl("/media/products/12.png")}'`,
            position: 'absolute',
            left: 0,
            bottom: 0
          }}
        ></div>
        {/*end::Image*/}

        {/*begin::Card*/}
        <div className="card shadow-none w-auto w-md-400px w-lg-auto w-xxl-400px ml-auto" style={{ overflow: 'hidden' }}>
          {/*begin::Card Body*/}
          <div className="card-body bg-light px-12 py-10 card card-custom">
            <div className="card-header">
              <h3 className="fw-bolder fs-1 card-toolbar">
                <div className="text-muted fw-bold fs-6 d-flex align-items-center">
                  <span className="badge-container">
                    <span className="badge badge-circle background-xls"></span>
                  </span>
                  {'Online'}
                </div>
              </h3>
              <div className="card-toolbar">
                {/**
                 * <button type="button" className="btn btn-sm btn-light">
                  Action
                </button>
                 */}
              </div>
            </div>
            <div className="card-body card-scroll h-200px">
              {desc}
            </div>
            <div className="card-footer">
              {/*begin::Info*/}
              <table className="table table-borderless align-middle fw-bold">
                {
                  type === 'collection' &&
                  <tbody>
                    <tr>
                      <td className="text-gray-600 ps-0">Archivos</td>
                      <td className="text-dark pe-0">{countTotal}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">{title}</td>
                      <td className="text-dark pe-0">{countSrc}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 ps-0">Ultimo Archivo</td>
                      <td className="text-dark pe-0">{moment(lastRecord.updatedAt).format('DD/MM/YYYY')}</td>
                    </tr>
                  </tbody>
                }

                {
                  type === 'single' &&
                  <tbody>
                    <tr>
                      <td className="text-gray-600 ps-0">Archivos</td>
                      <td className="text-dark pe-0">{countTotal}</td>
                    </tr>
                    {
                      entity !== 'cat' &&
                      <tr>
                        <td className="text-gray-600 ps-0">URL</td>
                        <td className="text-dark pe-0">
                          <a href={url} target={'_blank'}>
                            {url}
                          </a>
                        </td>
                      </tr>
                    }
                    <tr>
                      <td className="text-gray-600 ps-0">Ultimo Archivo</td>
                      <td className="text-dark pe-0">{moment(lastRecord.updatedAt).format('DD/MM/YYYY')}</td>
                    </tr>
                  </tbody>
                }
              </table>
              {/*end::Info*/}
            </div>
          </div>
          {/*end::Card Body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Card Body*/}
    </div>
  );
};

export { EngageWidget3 };
