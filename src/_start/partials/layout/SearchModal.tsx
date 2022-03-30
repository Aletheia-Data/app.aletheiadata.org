/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from "react-bootstrap-v5";
import { Ktsvg, toAbsoluteUrl } from "../../helpers";
import { ListsWidget4, ListsWidget5, TablesWidget2 } from "../widgets";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const SearchModal: React.FC<Props> = ({ show, handleClose }) => {
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
                className="form-control bg-transparent border-0 fs-4x text-center fw-normal"
                name="query"
                placeholder="Search..."
              />
            </form>
            {/* end::Search */}

            {/* begin::Shop Goods */}
            <div className="py-10">
              <h3 className="fw-bolder mb-8">Ministerios o instituciónes</h3>

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
                                      "/media/stock/600x400/img-17.jpg"
                                    )}')`,
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    href="#"
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
                                      "/media/stock/600x400/img-23.jpg"
                                    )}')`,
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    href="#"
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
                                  "/media/stock/600x400/img-11.jpg"
                                )}')`,
                              }}
                            ></div>
                            <div className="overlay-layer bg-white bg-opacity-50">
                              <a
                                href="#"
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
            {/* end::Shop Goods */}

            {/* begin::Framework Users */}
            <div className="pb-10">
              <TablesWidget2 className="mb-5 mb-xxl-8" />
            </div>
            {/* end::Framework Users */}

            {/* begin::Tutorials */}
            <div className="pb-10" style={{ minHeight: "350px" }}>
              <h3 className="text-dark fw-bolder fs-1 mb-6">Tutorials</h3>
              {/**
               * <ListsWidget5 className="mb-5 shadow-none" innerPadding="px-0" />
               */}
            </div>
            {/* end::Tutorials */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { SearchModal };
