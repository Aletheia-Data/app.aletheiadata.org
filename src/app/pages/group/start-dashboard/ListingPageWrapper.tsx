/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  IThemeConfig,
  useTheme,
  PageTitle,
  PageDataContainer,
  getConfig,
} from "../../../../_start/layout/core";
import { ListingPage } from "./ListingPage";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Sidebar } from "../../../../_start/layout/components/Sidebar";

const defaultPageConfig = getConfig();
const listingPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: true,
  },
};

const getQuery = (type: string, id: string, entity: string) => {
  // console.log(`getting query for ${entity} - ${type} - ${id}`);

  const SRC_QUERY = gql`
    query Sources {
      sources(limit: 10, sort: "updatedAt:desc") {
        id
        name
        url
        updatedAt
        alexandrias {
          cid
          type
        }
      }
      alexandriasConnection(limit: 0) {
        groupBy {
          source {
            key
            __typename
            connection {
              aggregate {
                count
                totalCount
              }
            }
          }
        }
      }
      sourcesConnection(where: {}) {
        groupBy {
          id {
            key
            __typename
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

  const DEP_QUERY = gql`
    query Departments {
      departments(limit: 10, sort: "updatedAt:desc") {
        id
        name
        website
        updatedAt
        alexandrias {
          cid
          type
        }
      }
      alexandriasConnection(limit: 1) {
        groupBy {
          department {
            key
            __typename
            connection {
              aggregate {
                count
                totalCount
              }
            }
          }
        }
      }
      departmentsConnection(limit: 1) {
        groupBy {
          id {
            key
            __typename
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

  const CAT_QUERY = gql`
    query Categories {
      categories(limit: 10, sort: "updatedAt:desc") {
        id
        title
        description
        updatedAt
        alexandrias {
          cid
          type
        }
      }
      alexandriasConnection(limit: 1) {
        groupBy {
          id {
            key
          }
        }
      }
      categoriesConnection(limit: 1) {
        groupBy {
          id {
            key
            __typename
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

  switch (entity) {
    case "src":
      return SRC_QUERY;
    case "dep":
      return DEP_QUERY;
    case "cat":
      return CAT_QUERY;
  }
};

function Collection(type: string, query: any, entity: string) {
  const { data, loading, error } = useQuery(query, {
    variables: {},
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{`There's an Error, please refresh this page ...`}</p>;

  if (data) {
    data.type = type;
    data.entity = entity;
  }

  return result(data);
}

const result = (data: any) => {
  return <ListingPage data={data} />;
};

export function ListingPageWrapper(): JSX.Element {
  const params: any = useParams();
  const { entity, id } = params;
  // if Id = 0 means that its a collection not a single item
  // console.log(id);
  let title;
  const type = "collection";
  const query = getQuery(type, id, entity);
  const component = Collection(type, query, entity);

  switch (entity) {
    case "src":
      title = "Fuentes";
      break;
    case "dep":
      title = "Ministerios o instituciónes";
      break;
    case "cat":
      title = "Categorias";
      break;
  }

  if (component?.props?.data) {
    console.log(component?.props?.data);

    component.props.data.sidebar = "default";
  }

  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(listingPageConfig);

    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  const pageBreadcrumbs = [
    {
      title: "Home",
      path: "/",
      isActive: false,
    },
  ];

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <PageDataContainer breadcrumbs={pageBreadcrumbs} />
      {component}
      <Sidebar props={component.props.data} />
    </>
  );
}
