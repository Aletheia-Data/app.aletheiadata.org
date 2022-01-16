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
import { CollectionPage } from "./CollectionPage";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
    query Source {
      source(
        id: "${id}"
      ) {
        id,
        name, 
        description,
        url,
        updatedAt,
        alexandrias(limit: 10){
          id, 
          title,
          description,
          status,
          cid,
          type,
          aletheias{
            id,
            proof {
              id,
              url
            }
          }
        }
    },
    alexandriasConnection(
      where: {
        source: "${id}"
      }
    ){
        groupBy {
          id{
            key
          }
        }
      },
    sourcesConnection{
      groupBy {
          id{
            key,
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
      department(
        id: "${id}"
      ) {
        id,
        name, 
        desciption,
        website,
        updatedAt,
        alexandrias(limit: 10){
          id, 
          title,
          description,
          status,
          cid,
          type,
          aletheias{
            id,
            proof {
              id,
              url
            }
          }
        }
    },
    alexandriasConnection(
      where: {
        department: "${id}"
      }
    ){
        groupBy {
          id{
            key
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
    query Category {
      category(
        id: "${id}"
      ) {
        id,
        title,
        description,
        updatedAt,
        alexandrias(limit: 10){
          id, 
          title,
          description,
          status,
          cid,
          type,
          aletheias{
            id,
            proof {
              id,
              url
            }
          }
        }
    },
    alexandriasConnection(
      where: {
        category: "${id}"
      }
    ){
        groupBy {
          id{
            key
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
  return <CollectionPage data={data} />
}

export function CollectionPageWrapper() {
  let params: any = useParams();
  const { entity, id } = params;
  // if Id = 0 means that its a collection not a single item
  // console.log(id);
  let title;
  let component;
  let type = 'single';

  title = 'Loading';
  let query = getQuery(type, id, entity);
  let prevRoute = 'Loading';
  console.log(`calling query: `, query);
  component = Collection(type, query, entity);

  if (component?.props?.data) {
    console.log(`got data: `, component.props.data);
    switch (params.entity) {
      case 'src':
        title = component.props.data.source.name;
        prevRoute = type === 'single' ? 'Fuentes' : 'Fuentes';
        break;
      case 'dep':
        title = component.props.data.department.name;
        prevRoute = type === 'single' ? 'Ministerios o instituciónes' : 'Ministerios o instituciónes';
        break;
      case 'cat':
        title = component.props.data.category.title;
        prevRoute = type === 'single' ? 'Categorias' : 'Categorias';
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

  const getBreadcrumbs = (prevRoute: any) => {
    console.log(prevRoute);

    return [
      {
        title: "Home",
        path: "/",
        isActive: false,
      },
      {
        title: prevRoute,
        path: `/group/${entity}`,
        isActive: false,
      }
    ]
  }

  let profileBreadCrumbs: Array<PageLink> = getBreadcrumbs(prevRoute);

  return <>
    <PageTitle>{title}</PageTitle>
    <PageDataContainer
      breadcrumbs={profileBreadCrumbs}
    />
    {component}
  </>
}

