import React, { useEffect, useState } from "react";
import { toAbsoluteUrl, truncate } from "../../../helpers";
import { Ktsvg } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const Achievements: React.FC<Props> = ({ className, innerPadding = "" }) => {
  const [walletsInfo, setWalletsInfo] = useState<any[]>([]);
  const [walletsTotal, setWalletsTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?groupBy=wallet_address&sort=wallet_address:desc&limit=5`);
        const data = await response.json();
        // console.log('wallet: ', data.body.data);
        setWalletsInfo(data.body.data);
      } catch (err) {
        setError("Failed to fetch wallets.");
      } finally {
        setLoading(false);
      }
    };

    const fetchWalletsCount = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?groupBy=wallet_address&count=true`);
        const data = await response.json();
        setWalletsTotal(data.body.totalCount);
      } catch (err) {
        setError("Failed to fetch wallets.");
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
    fetchWalletsCount();
  }, []);

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

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Achievements
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {walletsTotal} Usuarios
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
                  {walletsInfo && walletsInfo.map((wallet: any) => {
                    return (
                      <tr key={wallet.wallet_address}>
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
                            {truncate(wallet.wallet_address, 25)}
                          </a>
                          <span className="text-muted fw-bold d-block mt-1">
                            {'-'}
                          </span>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="text-end">
                          <span className="text-gray-800 fw-bolder d-block fs-6">
                            {wallet.count}
                          </span>
                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                            Archivos
                          </span>
                        </td>
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
