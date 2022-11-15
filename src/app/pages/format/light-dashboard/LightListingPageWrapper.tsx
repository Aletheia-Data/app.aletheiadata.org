/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
  PageTitle,
} from "../../../../_start/layout/core";
import { LightListingPage } from "./LightListingPage";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  aside: {
    ...defaultPageConfig.aside,
    display: true,
    primaryDisplay: false,
    secondaryDisplay: true,
    toggle: false,
    content: "menu",
  },
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: false,
  },
};

export function LightListingPageWrapper(): JSX.Element {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);

    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <LightListingPage />
      <PageTitle>Light Dashboard</PageTitle>
    </>
  );
}
