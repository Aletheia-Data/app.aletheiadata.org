/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  IThemeConfig,
  useTheme,
  PageTitle,
  PageDataContainer,
  PageLink,
  getConfig,
} from "../../../../_start/layout/core";
import { FormatPage } from "./FormatPage";
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

const getQuery = (entity: string) => {
  // console.log(`getting query for ${entity} - ${type} - ${id}`);
  const FORMAT_QUERY = gql`
    query Alexandria {
      alexandrias(
        start: 0,
        limit: 10,
        where:{
          type: "${entity}"
        }
      ) {
        id, 
        title,
        description,
        status,
        cid,
        type,
        department {
          id,
          name
        },
        aletheias{
          id,
          proof {
            id,
            url
          }
        }
      },
    alexandriasConnection(
      start: 0,
      limit: 100,
      where: {
        type: "${entity}"
      }
    ){
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
      },
    }
  `;

  return FORMAT_QUERY;
};

function Collection(type: string, query: any, entity: string) {
  const { data, loading, error } = useQuery(query, {
    variables: {},
  });

  console.log(data);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{`There's an Error, please refresh this page ...`}</p>;

  data.type = type;
  data.entity = entity;

  return result(data);
}

const result = (data: any) => {
  return <FormatPage data={data} />;
};

export function FormatPageWrapper(): JSX.Element {
  const params: any = useParams();
  const { entity } = params;
  // console.log(id);
  let title;
  const type = "single";

  title = "Loading";
  const query = getQuery(entity);
  let prevRoute = "Loading";
  const component = Collection(type, query, entity);

  if (component?.props?.data) {
    // console.log(`got data: `, component.props.data);
    component.props.data.sidebar = "default";
    title = entity.toUpperCase();
    prevRoute = "Formats";
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
    // console.log(prevRoute);

    return [
      {
        title: "Home",
        path: "/",
        isActive: false,
      },
      {
        title: prevRoute,
        path: `/format`,
        isActive: false,
      },
    ];
  };

  const profileBreadCrumbs: Array<PageLink> = getBreadcrumbs(prevRoute);

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <PageDataContainer breadcrumbs={profileBreadCrumbs} />
      {component}
      <Sidebar props={component.props.data} />
    </>
  );
}
