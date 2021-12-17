/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import {
  IThemeConfig,
  useTheme,
  PageTitle,
  PageDataContainer,
  PageLink,
  getConfig,
} from "../../../../_start/layout/core";
import { ListingPage } from "./ListingPage";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

let profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/",
    isActive: false,
  }
];

const defaultPageConfig = getConfig();
const listingPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: true,
  },
};

const getQuery = (type: string, id: string, entity: string) => {
  console.log(`getting query for ${entity} - ${type} - ${id}`);

  let SRC_QUERY = gql`
  query Sources {
    sources(
      limit: 10, 
      sort: "updatedAt:desc"
    ) {
      id,
      name, 
      url,
      updatedAt,
      alexandrias{
        cid,
        type
      }
  },
  alexandriasConnection(
    limit: 0
  ){
      groupBy {
        source{
          key,
          __typename,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
  },
    sourcesConnection(
    where: {
      
    }){
      groupBy {
        id{
          key,
          __typename,
          connection{
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

  let DEP_QUERY = gql`
  query Departments {
    departments(
      limit: 10, 
      sort: "updatedAt:desc"
    ) {
      id,
      name, 
      website,
      updatedAt,
      alexandrias{
        cid,
        type
      }
  },
  alexandriasConnection(
    limit: 1
  ){
      groupBy {
        department{
          key,
          __typename,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    },
  departmentsConnection(
    limit: 1
  ){
      groupBy {
        id{
          key,
          __typename,
          connection{
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

  let CAT_QUERY = gql`
  query Categories {
    categories(
      limit: 5, 
      sort: "updatedAt:desc"
    ) {
      id,
    	title,
    	description,
    	updatedAt,
      alexandrias{
        cid,
        type
      }
  },
  alexandriasConnection(
    limit: 1
  ){
      groupBy {
        category{
          key,
          __typename,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
  },
    categoriesConnection(
    where: {
      
    }){
      groupBy {
        id{
          key,
          __typename,
          connection{
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

  switch (entity) {
    case 'src':
      return SRC_QUERY;
    case 'dep':
      return DEP_QUERY;
    case 'cat':
      return CAT_QUERY;
  }
}

function Collection(type: string, query: any, entity: string) {

  var { data, loading, error } = useQuery(query, {
    variables: {}
  });

  if (loading) return <p>Loading ...</p>;

  data.type = type;
  data.entity = entity;
  return result(data);
}

const result = (data: any) => {
  return <ListingPage data={data} />
}

export function ListingPageWrapper() {
  let params: any = useParams();
  const { entity, id } = params;
  // if Id = 0 means that its a collection not a single item
  // console.log(id);
  let title;
  let component;
  let type = 'collection';
  title = 'Loading';
  let query = getQuery(type, id, entity);
  component = Collection(type, query, entity);

  if (component?.props?.data) {
    switch (entity) {
      case 'src':
        title = 'Fuentes';
        break;
      case 'dep':
        title = 'Ministerios o instituciónes';
        break;
      case 'cat':
        title = 'Categorias';
        break;
    }
  }

  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(listingPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return <>
    <PageTitle>{title}</PageTitle>
    <PageDataContainer
      breadcrumbs={profileBreadCrumbs}
    />
    {component}
  </>
}

