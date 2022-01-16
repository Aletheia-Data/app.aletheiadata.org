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
import { SinglePage } from "./SinglePage";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Sidebar } from "../../../../_start/layout/components/Sidebar";

const getBreadcrumbs = () => {

  return [
    {
      title: "Home",
      path: "/",
      isActive: false,
    },
    {
      title: 'Back',
      path: '/',
      isBack: true,
      isActive: false,
    }
  ]
}

let profileBreadCrumbs: Array<PageLink> = getBreadcrumbs();

const defaultPageConfig = getConfig();
const listingPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: true,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: true,
  },
};

const getQuery = (type: string, cid: string, entity: string) => {
  console.log(`getting query for ${entity} - ${type} - ${cid}`);

  let CID_QUERY = gql`
  query Alexandria{
    alexandrias(
      where: {
        cid: "${cid}"
      }
    ) {
      id,
      title,
      description,
      file{
        id,
        url
      },
      api_endpoint,
      proof{
        id,
        url
      },
      category{
        id,
        title
      },
      department{
        id,
        name, 
        desciption,
        website,
      },
      source_url,
      source{
        url,
        id,
        name
      },
      status,
      wallet_address,
      cid,
      type,
      aletheias{
        id,
        proof {
          id,
          url
        }
      }
      updatedAt
    }
  }
  `;

  return CID_QUERY;
}

function Single(type: string, query: any, entity: string) {

  var { data, loading, error } = useQuery(query, {
    variables: {}
  });

  if (loading) return <p>Loading ...</p>;

  data.type = type;
  data.entity = entity;
  return result(data);
}

const result = (data: any) => {
  return <SinglePage data={data} />
}

export function SinglePageWrapper() {
  let params: any = useParams();
  const { entity, cid } = params;
  // if Id = 0 means that its a Single not a single item
  // console.log(id);
  let title;
  let component;
  let type = 'single';
  title = 'Loading';
  let query = getQuery(type, cid, entity);
  component = Single(type, query, entity);

  if (component?.props?.data) {
    title = component.props.data.alexandrias[0].title;
    component.props.data.title = title;
    component.props.data.sidebar = 'single';
    console.log(component.props.data);

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
    <Sidebar props={component.props.data} />
  </>
}

