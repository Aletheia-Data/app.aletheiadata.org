import React, { useState } from "react";
import {
  EngageWidget5,
  ListsWidget1,
  StatsWidget1,
  StatsWidget2,
  StatsWidget10,
  TablesWidget1,
  TablesWidget2,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const [imports] = useState([{}]);
  const [importsCount] = useState(0);
  const [loadingArchive] = useState(true);
  const [archiveCount] = useState({});

  const SOURCES_QUERY = gql`
    query SourceGroup {
      sourcesConnection(limit: 5) {
        groupBy {
          id {
            key
            connection {
              values {
                id
                name
                url
                icon {
                  id
                  name
                  url
                }
              }
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

  const { data: sourceData, loading: sourceLoading } = useQuery(SOURCES_QUERY, {
    variables: {},
  });

  const DEP_QUERY = gql`
    query DepartmentGroup {
      departmentsConnection {
        groupBy {
          id {
            key
            connection {
              values {
                id
                name
                website
                icon {
                  id
                  name
                  url
                }
              }
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

  const { data: depData, loading: depLoading } = useQuery(DEP_QUERY, {
    variables: {},
  });

  const CAT_QUERY = gql`
    query CategoriesGroup {
      categoriesConnection {
        groupBy {
          id {
            key
            connection {
              values {
                id
                title
                description
                icon {
                  id
                  name
                  url
                }
              }
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

  const { data: catData, loading: catLoading } = useQuery(CAT_QUERY, {
    variables: {},
  });

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <EngageWidget5 className="card-stretch mb-5 mb-xxl-8">
            {/* begin::Action */}
            <div className="text-center pt-7">
              <a
                className="disabled btn btn-primary fw-bolder fs-6 px-7 py-3"
                onClick={() => setShow(true)}
              >
                Subir Archivo
              </a>
            </div>
            {/* end::Action */}
          </EngageWidget5>
        </div>

        <div className="col-xl-8">
          <TablesWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <ListsWidget1
            className="card-stretch mb-5 mb-xxl-8"
            imports={imports}
            importsCount={importsCount}
            loadingArchive={loadingArchive}
          />
        </div>

        <div className="col-xl-8">
          <TablesWidget2 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget1
            className="card-stretch mb-5 mb-xxl-8"
            files={archiveCount}
            loadingArchive={loadingArchive}
          />
        </div>

        <div className="col-xl-8">
          <StatsWidget10
            className="card-stretch mb-5 mb-xxl-8"
            id="src"
            items={sourceData}
            loadingArchive={sourceLoading}
            title="Fuentes"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4" />

        <div className="col-xl-8">
          <StatsWidget2
            className="card-stretch mb-5 mb-xxl-8"
            id="dep"
            items={depData}
            loadingArchive={depLoading}
            title="Ministerios o instituciónes"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4" />

        <div className="col-xl-8">
          <StatsWidget2
            className="card-stretch mb-5 mb-xxl-8"
            id="cat"
            items={catData}
            loadingArchive={catLoading}
            title="Categorias"
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal handleClose={() => setShow(false)} show={show} />
      {/* end::Modals */}
    </>
  );
};
