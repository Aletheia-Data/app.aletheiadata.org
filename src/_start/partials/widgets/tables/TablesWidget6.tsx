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

  // sort by aletheias count +
  // get first record (most aletheias)
  let dataFile = data.alexandrias[0];

  title = dataFile.title;
  desc = dataFile.description;

  console.log(data.alexandrias);

  if (type === 'alexandrias') {
    entityCount = data.alexandrias.length > 0 ? data.alexandrias.length : 0;
    title = 'Archivos cargados';
    records = data.alexandrias;
  } else {
    entityCount = dataFile.aletheias.length > 0 ? dataFile.aletheias.length : 0;
    title = 'Pruebas cargados';
    records = dataFile.aletheias;
  }

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
          <a href="#" className="btn btn-primary fw-bolder fs-7 disabled">
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
                <td className="ps-0 min-w-250px py-5" width="30%">Usuario</td>
                <td className="min-w-100px py-5" width="25%">
                  <span className={`text-${color}`}>Ultimo Cambio</span>
                  <KTSVG
                    className={`svg-icon-sm svg-icon-${color}`}
                    path="/media/icons/duotone/Navigation/Down-2.svg"
                  />
                </td>
                <td className="min-w-100px py-5" width="10%">{'Estatus'}</td>
                <td className="min-w-100px pe-0 text-end py-5" width="10%">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                records && records.map((rec: any) => {

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

                  const link = `/${type}/${entity}/${rec.cid}`;

                  return (
                    <tr key={`item_${rec.id}`}>
                      <td className="ps-0">
                        <Link
                          to={'#'}
                          className="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {rec.wallet_address ? rec.wallet_address : process.env.REACT_APP_WALLET_OWNER}
                        </Link>
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

export { TablesWidget6 };
