/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
  ModuleName,
} from "../../../_start/layout/core";
import { DocsPage } from "./DocsPage";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  aside: {
    ...defaultPageConfig.aside,
    display: true,
    primaryDisplay: false,
    secondaryDisplay: true,
    menu: "documentation",
    toggle: false,
    content: "docs",
  },
  toolbar: {
    ...defaultPageConfig.toolbar,
    breadcrumb: false,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: false,
  },
};

const DocsPageWrapper: React.FC = () => {
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
      <ModuleName>Documentation</ModuleName>
      <DocsPage />
    </>
  );
};

export default DocsPageWrapper;
