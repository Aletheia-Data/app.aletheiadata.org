import { PageLink } from "../../../_start/layout/core";

export const profileSubmenu: Array<PageLink> = [
  {
    title: "Overview",
    path: "/profile/overview",
    isActive: true,
  },
  {
    title: "Account",
    path: "/profile/account",
    isActive: false,
    isPro: true,
  },
  {
    title: "Settings",
    path: "/profile/settings",
    isActive: false,
    isPro: true,
  },
];
