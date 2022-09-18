/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap-v5";
import { Ktsvg, toAbsoluteUrl } from "../../helpers";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { rapidFetcher } from "_start/helpers/rapidFetch";
import { getUserByToken } from "app/modules/auth/redux/AuthCRUD";
import { Record } from "_start/types";

type Props = {
  show: boolean;
  handleClose: () => void;
};

type User = {
  id: number;
  account: string;
  provider: string;
};

const SearchModal: React.FC<Props> = ({ show, handleClose }) => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsDep, setResultsDep] = useState([]);
  const [lastUploads, setLastUploads] = useState<Record[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const CAT_QUERY = gql`
    query Categories {
      categories(limit: 5, sort: "alexandrias:desc") {
        id
        title
        description
        icon {
          url
        }
        alexandrias {
          cid
          type
        }
      }
    }
  `;

  var {
    data: catData,
    loading: catLoading,
    error,
  } = useQuery(CAT_QUERY, {
    variables: {},
  });

  // effects

  useEffect(() => {
    async function getUser() {
      try {
        const res = await getUserByToken();
        setUser(res.user);
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    async function getUserLastUploads() {
      const walletAddress = user?.account.toLowerCase();
      const url = `/v2/open-data/alexandrias/getAll?limit=5&wallet_address=${walletAddress}&sort=createdAt:-1`;
      try {
        const response = await rapidFetcher().url(url).get().json();
        if (response?.body) {
          const uploads = JSON.parse(response.body);
          setLastUploads(uploads);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (user?.account) {
      getUserLastUploads();
    }
  }, [user]);

  const _handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchAPI(search);
      searchDepartment(search);
    }
  };

  // methods
  const searchChange = (e: any) => {
    let value = e.target.value;
    setSearch(value);
  };

  const searchAPI = (search: string) => {
    setLoading(true);
    console.log("search on API: ", search);
    console.log(
      `${process.env.REACT_APP_ALETHEIA_API}/v2/open-data/alexandrias/getAll`
    );
    const query = `?title=${search}&limit=5`;
    const endpoint = `${process.env.REACT_APP_ALETHEIA_API}/v2/open-data/alexandrias/getAll${query}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setResults(JSON.parse(data.body));
        // console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const searchDepartment = (search: string) => {
    setLoading(true);
    console.log("search on API: ", search);
    const query = `?name=${search}&limit=5`;
    console.log(
      `${process.env.REACT_APP_ALETHEIA_API}/v2/open-data/departments/getAll${query}`
    );
    const endpoint = `${process.env.REACT_APP_ALETHEIA_API}/v2/open-data/departments/getAll${query}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setResultsDep(JSON.parse(data.body));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handlers
  const goToAsset = (cid: string, id: string) => {
    history.push(`/single/src/${cid}?assetId=${id}`);
    handleClose();
    setTimeout(() => {
      clearSearch();
    }, 1000);
  };

  const goToDep = (id: string) => {
    history.push(`/collection/dep/${id}`);
    handleClose();
    setTimeout(() => {
      clearSearch();
    }, 1000);
  };

  const handleCategory = (id: string) => {
    history.push(`/collection/cat/${id}`);
    handleClose();
    setTimeout(() => {
      clearSearch();
    }, 1000);
  };

  const clearSearch = () => {
    setResults([]);
    setResultsDep([]);
    setSearch("");
  };

  // constants
  const hasLastUploads = Boolean(lastUploads.length);

  return (
    <Modal
      className="bg-white"
      id="kt_header_search_modal"
      aria-hidden="true"
      dialogClassName="modal-fullscreen h-auto"
      show={show}
    >
      <div className="modal-content shadow-none">
        <div className="container w-lg-800px">
          <div className="modal-header d-flex justify-content-end border-0">
            {/* begin::Close */}
            <div
              className="btn btn-icon btn-sm btn-light-primary ms-2"
              onClick={handleClose}
            >
              <Ktsvg
                className="svg-icon-2"
                path="/media/icons/duotone/Navigation/Close.svg"
              />
            </div>
            {/* end::Close */}
          </div>
          <div className="modal-body">
            {/* begin::Search */}
            <form className="pb-10">
              <input
                autoFocus
                type="text"
                onChange={searchChange}
                onKeyDown={_handleKeyDown}
                className="form-control bg-transparent border-0 fs-4x text-center fw-normal"
                name="query"
                value={search}
                placeholder="Search..."
              />
            </form>
            {/* end::Search */}

            {/* begin::Shop Goods */}
            <div className="py-10">
              <h3 className="fw-bolder mb-8">Buscador</h3>

              {/* begin::Row */}
              <div className="row g-5">
                <div className="col-sm-12">
                  {loading && <p>Loading ...</p>}
                  {!loading && !search && results.length === 0 && (
                    <p>Busca un asset en el sistema Aletheia</p>
                  )}
                  {!loading && search && results.length === 0 && (
                    <p>Results not found</p>
                  )}
                  {!loading &&
                    results &&
                    results.map((item: any, i: number) => {
                      return (
                        <div className="d-flex mb-6" key={`user_asset_${i}`}>
                          {/* begin::Icon */}
                          <div className="me-1">
                            <Ktsvg
                              className="svg-icon-sm svg-icon-primary"
                              path="/media/icons/duotone/Navigation/Angle-right.svg"
                            />
                          </div>
                          {/* end::Icon */}

                          {/* begin::Content */}
                          <div className="d-flex flex-column">
                            <a
                              onClick={() =>
                                item.cid
                                  ? goToAsset(item.cid, item["_id"])
                                  : null
                              }
                              className={`${
                                !item.cid ? "disabled" : null
                              } fs-6 fw-bolder text-hover-primary text-gray-800 mb-2`}
                            >
                              {item.title}
                            </a>
                            <div className="fw-bold text-muted">
                              {item.description}
                            </div>
                          </div>
                          {/* end::Content */}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {resultsDep.length > 0 && (
              <div className="py-10">
                <h3 className="fw-bolder mb-8">Ministerios o instituciónes</h3>
                {/* begin::Row */}
                <div className="row g-5">
                  <div className="col-sm-12">
                    {resultsDep.map((item: any, i: number) => {
                      return (
                        <div className="d-flex mb-6" key={`user_asset_${i}`}>
                          {/* begin::Icon */}
                          <div className="me-1">
                            <Ktsvg
                              className="svg-icon-sm svg-icon-primary"
                              path="/media/icons/duotone/Navigation/Angle-right.svg"
                            />
                          </div>
                          {/* end::Icon */}

                          {/* begin::Content */}
                          <div className="d-flex flex-column">
                            <a
                              onClick={() => goToDep(item["_id"])}
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              {item.name}
                            </a>
                          </div>
                          {/* end::Content */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* end::Row */}
              </div>
            )}

            {/* begin::Categories */}
            <div className="py-10">
              <h3 className="fw-bolder mb-8">Categorias</h3>

              {/* begin::Row */}
              <div className="row g-5">
                <div className="col-sm-6">
                  <div className="row g-5">
                    <div className="col-sm-6">
                      {catLoading && <p>Loading ...</p>}
                      {catData &&
                        catData.categories.map((cat: any, i: number) => {
                          if (i > 1) return;

                          return (
                            <div
                              key={`cat_search_${i}`}
                              className="card card-custom overlay min-h-125px mb-5 shadow-none"
                            >
                              <div className="card-body d-flex flex-column p-0">
                                <div
                                  className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                                  style={{
                                    backgroundImage: `url('${toAbsoluteUrl(
                                      cat.icon.url
                                    )}')`,
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    onClick={() => handleCategory(cat.id)}
                                    className="btn btn-sm fw-bold btn-primary"
                                  >
                                    {cat.title}
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="col-sm-6">
                      {catData &&
                        catData.categories.map((cat: any, i: number) => {
                          if (i !== 3) return;

                          return (
                            <div
                              key={`cat_search_${i}`}
                              className="card card-custom card-stretch overlay mb-5 shadow-none min-h-250px"
                            >
                              <div className="card-body d-flex flex-column p-0">
                                <div
                                  className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                                  style={{
                                    backgroundImage: `url('${toAbsoluteUrl(
                                      cat.icon.url
                                    )}')`,
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    onClick={() => handleCategory(cat.id)}
                                    className="btn btn-sm fw-bold btn-primary"
                                  >
                                    {cat.title}
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-custom card-stretch overlay mb-5 shadow-none min-h-250px">
                    {catData &&
                      catData.categories.map((cat: any, i: number) => {
                        if (i !== 4) return;

                        return (
                          <div
                            key={`cat_search_${i}`}
                            className="card-body d-flex flex-column p-0"
                          >
                            <div
                              className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                              style={{
                                backgroundImage: `url('${toAbsoluteUrl(
                                  cat.icon.url
                                )}')`,
                              }}
                            ></div>
                            <div className="overlay-layer bg-white bg-opacity-50">
                              <a
                                onClick={() => handleCategory(cat.id)}
                                className="btn btn-sm fw-bold btn-primary"
                              >
                                {cat.title}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* end::Row */}
            </div>
            {/* end::Categories */}

            {/* begin::Last Files Uploaded */}
            <div className="pb-10" style={{ minHeight: "350px" }}>
              <h3 className="text-dark fw-bolder fs-1 mb-6">
                Últimos archivos cargados
              </h3>
              <div>
                {hasLastUploads ? (
                  lastUploads.map((item, i) => {
                    return (
                      <div className="d-flex mb-6" key={`last_upload_${i}`}>
                        {/* begin::Icon */}
                        <div className="me-1">
                          <Ktsvg
                            className="svg-icon-sm svg-icon-primary"
                            path="/media/icons/duotone/Navigation/Angle-right.svg"
                          />
                        </div>
                        {/* end::Icon */}

                        {/* begin::Content */}
                        <div className="d-flex flex-column">
                          {item.cid && (
                            <a
                              onClick={() => goToAsset(item.cid, item["_id"])}
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              {item.title}
                            </a>
                          )}
                          {!item.cid && (
                            <a
                              href="#"
                              className="disabled fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              {item.title}
                            </a>
                          )}
                        </div>
                        {/* end::Content */}
                      </div>
                    );
                  })
                ) : (
                  <span>User has no uploads</span>
                )}
              </div>
            </div>
            {/* end::Tutorials */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { SearchModal };
