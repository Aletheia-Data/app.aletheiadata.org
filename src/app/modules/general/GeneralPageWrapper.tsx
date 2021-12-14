/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  getConfig,
  IThemeConfig,
  PageDataContainer,
  PageLink,
  useTheme,
} from "../../../_start/layout/core";
import { GeneralPage } from "./GeneralPage";
import { generalSubmenu } from "./GeneralPageData";

const generalBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/",
    isActive: false,
  },
  {
    title: "General",
    path: "",
    isActive: false,
  },
];

const defaultPageConfig = getConfig();
const generalPageConfig: Partial<IThemeConfig> = {
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: true,
    content: "user",
    bgColor: "bg-info",
  },
};

const GeneralPageWrapper: React.FC = () => {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(generalPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <PageDataContainer
        breadcrumbs={generalBreadCrumbs}
        submenu={generalSubmenu}
      />
      <GeneralPage />
    </>
  );
};

export default GeneralPageWrapper;
