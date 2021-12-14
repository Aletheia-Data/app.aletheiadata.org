import { PageLink } from "../../../_start/layout/core";

export const generalSubmenu: Array<PageLink> = [
  {
    title: "FAQ",
    path: "/general/faq",
    isActive: true,
  },
  {
    title: "Pricing",
    path: "/general/pricing",
    isActive: false,
  },
  {
    title: "Invoice",
    path: "/general/invoice",
    isActive: false,
  },
  {
    title: "Wizard",
    path: "/general/wizard",
    isActive: false,
    isPro: true,
  },
  {
    title: "Error",
    path: "/error/404",
    isActive: false,
    isPro: true,
  },
];
