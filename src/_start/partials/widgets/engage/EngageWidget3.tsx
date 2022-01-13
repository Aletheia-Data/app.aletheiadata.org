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

  data = data.data;
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
      desc = type === 'single' ? data.source.description : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.source;
      // console.log(data);
      if (connection.length > 0) {
        let totalConn = type === 'single' ? connection.filter((item: any) => item.key === data.source.id) : connection;
        countTotal = totalConn[0].connection.aggregate.totalCount;
        // console.log(countTotal);
        entityCount = totalConn[0].connection.aggregate.count;
      } else {
        countTotal = 0;
        entityCount = 0;
      }
      records = type === 'single' ? data.source : data.sources;
      lastRecord = type === 'single' ? records : records[0];
      url = type === 'single' ? records.url || records.website : '';
      break;
    case 'dep':
      desc = type === 'single' ? data.department.desciption : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.department;
      let depConn = data.departmentsConnection.groupBy.id;
      // console.log(depConn);
      if (connection.length > 0) {
        countTotal = connection[0].connection.aggregate.totalCount;
        countSrc = depConn[0].connection.aggregate.totalCount;
        entityCount = type === 'single' ? '' : connection[0].connection.aggregate.totalCount;
      } else {
        countTotal = 0;
        entityCount = 0;
      }
      records = type === 'single' ? data.department : data.departments;
      lastRecord = type === 'single' ? records : records[0];
      url = type === 'single' ? records.url || records.website : '';
      break;
    case 'cat':
      desc = type === 'single' ? data.category.desciption : 'Aenean dignissim mi vitae mi sodales posuere. Curabitur sagittis lacus eget lacinia pretium. Vestibulum semper tristique mauris sit amet pretium. Maecenas volutpat malesuada metus. Donec feugiat tincidunt blandit. Sed maximus feugiat lectus.';
      connection = data.alexandriasConnection.groupBy.category;
      if (connection.length > 0) {
        countTotal = connection[0].connection.aggregate.totalCount;
        entityCount = type === 'single' ? '' : connection[0].connection.aggregate.totalCount;
      } else {
        countTotal = 0;
        entityCount = 0;
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
          <div className="card-body bg-light px-12 py-10">
            <h3 className="fw-bolder fs-1 mb-1">
              <div className="text-muted mt-2 fw-bold fs-6 d-flex align-items-center mb-5">
                <span className="badge-container">
                  <span className="badge badge-circle background-xls"></span>
                </span>
                {'Online'}
              </div>
              <a href="#" className="text-gray-800">
                {title}
              </a>
            </h3>
            <div className="fs-7 mb-8">
              {desc}
            </div>
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
                    <td className="text-gray-600 ps-0">Fuentes</td>
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
                    <td className="text-dark pe-0">{entityCount}</td>
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
          {/*end::Card Body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Card Body*/}
    </div>
  );
};

export { EngageWidget3 };
