/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import * as dashboard from "../redux/DashboardRedux";
import { getAllDepartments, getArchive, getImports, getImportsCount, getAllSources } from "../redux/DashboardCRUD";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const [departments, setDepartment] = useState([{}]);
  const [sources, setSources] = useState([{}]);
  const [imports, setImports] = useState([{}]);
  const [importsCount, setImportsCount] = useState(0);
  const [loadingArchive, setLoadingArchive] = useState(true);
  const [archive, setArchive] = useState({});
  const [archiveCount, setArchiveCount] = useState({});

  const SOURCES_QUERY = gql`
  query SourceGroup {
    sourcesConnection{
      groupBy {
        id {
          key,
          connection{
            values{
							id,
              name,
              url,
              icon{
                id,
                name,
                url
              }
            },
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
  `;

  var { data: sourceData, loading: sourceLoading, error } = useQuery(SOURCES_QUERY, {
    variables: {}
  });

  const DEP_QUERY = gql`
  query DepartmentGroup {
    departmentsConnection{
      groupBy {
        id {
          key,
          connection{
            values{
							id,
              name,
              website,
              icon{
                id,
                name,
                url
              }
            },
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
  `;

  var { data: depData, loading: depLoading, error } = useQuery(DEP_QUERY, {
    variables: {}
  });

  const CAT_QUERY = gql`
  query CategoriesGroup {
    categoriesConnection{
      groupBy {
        id {
          key,
          connection{
            values{
							id,
              title,
              description,
              icon{
                id,
                name,
                url
              }
            },
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
  `;

  var { data: catData, loading: catLoading, error } = useQuery(CAT_QUERY, {
    variables: {}
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
          <ListsWidget1 imports={imports} loadingArchive={loadingArchive} importsCount={importsCount} className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <TablesWidget2 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget1 files={archiveCount} loadingArchive={loadingArchive} className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <StatsWidget10 id={'src'} title={'Fuentes'} loadingArchive={sourceLoading} items={sourceData} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">

        </div>

        <div className="col-xl-8">
          <StatsWidget2 id={'dep'} title={'Ministerios o instituciónes'} loadingArchive={depLoading} items={depData} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">

        </div>

        <div className="col-xl-8">
          <StatsWidget2 id={'cat'} title={'Categorias'} loadingArchive={catLoading} items={catData} className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
