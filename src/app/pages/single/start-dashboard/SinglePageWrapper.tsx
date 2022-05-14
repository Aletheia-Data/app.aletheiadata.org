/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      title: "Back",
      path: "/",
      isBack: true,
      isActive: false,
    },
  ];
};

const profileBreadCrumbs: Array<PageLink> = getBreadcrumbs();

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

const getQuery = (
  type: string,
  cid: string,
  entity?: string,
  searchById?: boolean
) => {
  console.log(searchById);

  console.log(`getting query for ${entity} - ${type} - ${cid}`);

  const CID_QUERY = gql`
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

  const ID_QUERY = gql`
  query Alexandria{
    alexandrias(
      where: {
        id: "${cid}"
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

  return searchById ? ID_QUERY : CID_QUERY;
};

function Single(type: string, query: any, entity: string) {
  const { data, loading, error } = useQuery(query);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{`There's an Error, please refresh this page ...`}</p>;

  data.type = type;
  data.entity = entity;

  return result(data);
}

const result = (data: any) => {
  return <SinglePage data={data} />;
};

export function SinglePageWrapper(): JSX.Element {
  const params: any = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const assetId = queryParams.get("assetId");
  console.log(assetId);

  const [minisearchActive, setMinisearchActive] = useState(false);
  const { entity, cid } = params;
  // if Id = 0 means that its a Single not a single item
  // console.log(id);
  const type = "single";
  console.log(params);

  const query = getQuery(
    type,
    assetId ? assetId : cid,
    entity,
    assetId ? true : false
  );
  const component = Single(type, query, entity);

  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(listingPageConfig);

    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  const toogleMinisearch = () => {
    setMinisearchActive(!minisearchActive);
  };

  if (component?.props?.data) {
    const [data] = component.props.data.alexandrias;
    const { title } = data;
    component.props.data.title = title;
    component.props.data.sidebar = "single";
    component.props.data.minisearchActive = minisearchActive;
    component.props.data.toogleMinisearch = toogleMinisearch;
  } else {
    return component;
  }

  return (
    <>
      <PageTitle>{component.props.data.title}</PageTitle>
      <PageDataContainer breadcrumbs={profileBreadCrumbs} />
      {component}
      <Sidebar
        props={component.props.data}
        toogleMinisearch={toogleMinisearch}
      />
    </>
  );
}
