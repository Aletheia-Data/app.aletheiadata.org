/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
} from "../../../../_start/layout/core";
import { StartDashboardPage } from "./StartDashboardPage";
import { Sidebar } from "../../../../_start/layout/components/Sidebar";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
};

export function StartDashboardWrapper() {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return <>
    <StartDashboardPage />;
    <Sidebar props={null} />
  </>
}
