/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  getConfig,
  IThemeConfig,
  PageDataContainer,
  PageLink,
  useTheme,
} from "../../../_start/layout/core";
import { profileSubmenu } from "./ProfileData";
import { ProfilePage } from "./ProfilePage";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/",
    isActive: false,
  },
  {
    title: "Profile",
    path: "",
    isActive: false,
  },
];

const defaultPageConfig = getConfig();
const profilePageConfig: Partial<IThemeConfig> = {
  sidebar: {
    ...defaultPageConfig.sidebar,
    content: "user",
    bgColor: "bg-info",
  },
};

const ProfilePageWrapper: React.FC = () => {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(profilePageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <PageDataContainer
        breadcrumbs={profileBreadCrumbs}
        submenu={profileSubmenu}
      />
      <ProfilePage />
    </>
  );
};

export default ProfilePageWrapper;
