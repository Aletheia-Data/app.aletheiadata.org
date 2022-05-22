/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { toAbsoluteUrl } from "../../../helpers";
import { Ktsvg } from "../../../helpers";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

type Props = {
  className: string;
  innerPadding?: string;
};

const Achievements: React.FC<Props> = ({ className, innerPadding = "" }) => {

  const WALLETS_QUERY = gql`
    query AlexandriasGroupBy {
      alexandriasConnection {
        groupBy {
          wallet_address {
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

  const { data, loading, error } = useQuery(WALLETS_QUERY, {
    variables: { slug: "" },
  });

  if (loading)
    return ( 
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className={`card-header border-0 pt-5 ${innerPadding}`}>
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder text-dark fs-3">
              Achievements
            </span>
            <span className="text-muted mt-2 fw-bold fs-6">Loading ...</span>
          </h3>
          <div className="card-toolbar">
            <ul className="nav nav-pills nav-pills-sm nav-light">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2_1"
                >
                  All
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-3 pb-0 mt-n3">
          <div className="tab-content mt-4" id="myTabTables2">
            {/* begin::Tap pane */}
            <div
              id="kt_tab_pane_2_1"
              role="tabpanel"
              aria-labelledby="kt_tab_pane_2_1"
              className="tab-pane fade active show"
            >
              {/* begin::Table */}
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th className="p-0 w-50px"></th>
                      <th className="p-0 min-w-150px"></th>
                      <th className="p-0 min-w-120px"></th>
                      <th className="p-0 min-w-70px"></th>
                      <th className="p-0 min-w-70px"></th>
                      <th className="p-0 min-w-50px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-0 py-3">
                        <div className="symbol symbol-55px mt-1 me-5">
                          <span className="symbol-label bg-light-primary align-items-end">
                            <img
                              alt="Logo"
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/001-boy.svg"
                              )}
                              className="mh-40px"
                            />
                          </span>
                        </div>
                      </td>
                      <td className="px-0">
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Loading ...
                        </a>
                        <span className="text-muted fw-bold d-block mt-1">
                          Loading ...
                        </span>
                      </td>
                      <td></td>
                      <td className="text-end">
                        <span className="text-gray-800 fw-bolder d-block fs-6">
                          0
                        </span>
                        <span className="text-muted fw-bold d-block mt-1 fs-7">
                          Archivos
                        </span>
                      </td>
                      <td className="text-end">
                        <span className="fw-bolder text-primary">+0%</span>
                      </td>
                      <td className="text-end pe-0">
                        <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                          <Ktsvg
                            className="svg-icon-4"
                            path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane */}
          </div>
        </div>
        {/* end::Body */}
      </div>
    );

  const walletsInfo = data.alexandriasConnection.groupBy.wallet_address;

  // before rendering, order by n aletheias
  if (walletsInfo) {
    walletsInfo.sort((a: any, b: any) =>
      a.connection.aggregate.count > b.connection.aggregate.count ? -1 : 1
    );
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Achievements
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {walletsInfo.length} Usuarios
          </span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            {/**
             * TODO: enabled when we have enough participants
             * <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_1"
              >
                All
              </a>
            </li>
             */}
          </ul>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-3 pb-0 mt-n3">
        <div className="tab-content mt-4" id="myTabTables2">
          {/* begin::Tap pane */}
          <div
            id="kt_tab_pane_2_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_2_1"
            className="tab-pane fade active show"
          >
            {/* begin::Table */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-120px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  {walletsInfo.map((wallet: any) => {
                    const count = wallet.connection.aggregate.count;
                    return (
                      <tr key={wallet.key}>
                        <td className="px-0 py-3">
                          <div className="symbol symbol-55px mt-1 me-5">
                            <span className="symbol-label bg-light-primary align-items-end">
                              <img
                                alt="Logo"
                                src={toAbsoluteUrl(
                                  "/media/svg/avatars/001-boy.svg"
                                )}
                                className="mh-40px"
                              />
                            </span>
                          </div>
                        </td>
                        <td className="px-0">
                          <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                            {wallet.key}
                          </a>
                          <span className="text-muted fw-bold d-block mt-1">
                            -
                          </span>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="text-end">
                          <span className="text-gray-800 fw-bolder d-block fs-6">
                            {count}
                          </span>
                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                            Archivos
                          </span>
                        </td>
                        {/**
                         * 
                        <td className="text-end">
                          <span className="fw-bolder text-primary">+0%</span>
                        </td>
                        <td className="text-end pe-0">
                          <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            <Ktsvg
                              className="svg-icon-4"
                              path="/media/icons/duotone/Navigation/Arrow-right.svg"
                            />
                          </a>
                        </td>
                         */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { Achievements };
