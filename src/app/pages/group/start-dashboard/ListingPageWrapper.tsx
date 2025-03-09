/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IThemeConfig,
  useTheme,
  PageTitle,
  PageDataContainer,
  getConfig,
} from "../../../../_start/layout/core";
import { ListingPage } from "./ListingPage";
import { Sidebar } from "../../../../_start/layout/components/Sidebar";

const defaultPageConfig = getConfig();
const listingPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: true,
  },
};

const getEndpoint = (entity: string) => {
  switch (entity) {
    case "src":
      return `sources/getAll?start=0&fields=sources.id&join=alexandrias:sources._id:source&sum=alexandrias.id.alexandrias_count&groupBy=sources.id&limit=10&sort=alexandrias_count:desc`;
    case "dep":
      return `departments/getAll?start=0&fields=departments.id&join=alexandrias:departments._id:department&sum=alexandrias.id.alexandrias_count&groupBy=departments.id&limit=10&sort=alexandrias_count:desc`;
    case "cat":
      return `categories/getAll?start=0&fields=categories.id&join=alexandrias:categories._id:category&sum=alexandrias.id.alexandrias_count&groupBy=categories.id&limit=10&sort=alexandrias_count:desc`;
    default:
      return "";
  }
};

const getEndpointCount = (entity: string) => {
  switch (entity) {
    case "src":
      return `sources/getAll?count=true`;
    case "dep":
      return `departments/getAll?count=true`;
    case "cat":
      return `categories/getAll?count=true`;
    default:
      return "";
  }
};

function Collection({ entity }: any) {
  const [data, setData] = useState<any>(null);
  const [dataCount, setDataCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(
          "getch: ",
          `${process.env.REACT_APP_API_ENDPOINT}v2/api/${getEndpoint(entity)}`
        );
        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}v2/api/${getEndpoint(entity)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData({
          entity: entity,
          type: "collection",
          data: result.body.data,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataCount = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}v2/api/${getEndpointCount(
            entity
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log("result: ", result);

        setDataCount(result.body.totalCount);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
    fetchDataCount();
  }, [entity]);

  console.log("hola:", data);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{`There's an Error, please refresh this page ...`}</p>;

  return <ListingPage data={data} dataCount={dataCount} />;
}

export function ListingPageWrapper(): JSX.Element {
  const params: any = useParams();
  const { entity } = params;
  let title;

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
    default:
      title = "Listado";
  }

  const { setTheme } = useTheme();
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
      <Collection entity={entity} />
      <Sidebar props={{ entity }} />
    </>
  );
}
