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
import { title } from "process";

const profileBreadCrumbs: Array<PageLink> = [
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

function Dep(id: string, entity: string, title: string) {
  let SOURCES_QUERY = gql`
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

  var { data, loading, error } = useQuery(SOURCES_QUERY, {
    variables: {}
  });

  if (loading) return <p>Loading ...</p>;

  data.type = id || id !== '0' ? 'collection' : 'single';
  data.entity = entity;
  data.title = title;
  return result(data);
}

function Src(id: string, entity: string, title: string) {
  let SOURCES_QUERY = gql`
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
    limit: 1
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

  var { data, loading, error } = useQuery(SOURCES_QUERY, {
    variables: {}
  });

  if (loading) return <p>Loading ...</p>;

  data.type = id || id !== '0' ? 'collection' : 'single';
  data.entity = entity;
  data.title = title;
  return result(data);
}

function Cat(id: string, entity: string, title: string) {
  let SOURCES_QUERY = gql`
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

  var { data, loading, error } = useQuery(SOURCES_QUERY, {
    variables: {}
  });

  if (loading) return <p>Loading ...</p>;

  data.type = id || id !== '0' ? 'collection' : 'single';
  data.entity = entity;
  data.title = title;
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
  switch (params.entity) {
    case 'src':
      title = 'Fuentes';
      component = Src(id, entity, title);
      break;
    case 'dep':
      title = 'Ministerios o instituciónes';
      component = Dep(id, entity, title);
      break;
    case 'cat':
      title = 'Categorias';
      component = Cat(id, entity, title);
      break;
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

