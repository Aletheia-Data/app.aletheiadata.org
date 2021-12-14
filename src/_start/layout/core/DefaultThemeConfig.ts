import { IThemeConfig } from "./ThemeModels";

export const DefaultThemeConfig: IThemeConfig = {
  loader: {
    display: true,
    type: "default", // Set default|spinner-message|spinner-logo to hide or show page loader
  },
  scrolltop: {
    display: true,
  },
  header: {
    display: true, // Set true|false to show or hide Header
    width: "fixed", // Set fixed|fluid to change width type
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
  },
  megaMenu: {
    display: true, // Set true|false to show or hide Mega Menu
  },
  aside: {
    display: false, // Set true|false to show or hide Aside
    fixed: true, // Set true|false to enabled or disable Fixed Aside mode
    menu: "main", // Set main|documentation menu for Aside
    primaryDisplay: true, // Set true|false to show or hide aside primary panel
    secondaryDisplay: true, // Set true|false to show or hide Aside Secondary
    toggle: true, // Set true|false to enabl Aside toggle
    minimized: false, // Minimize aside by default
  },
  content: {
    width: "fixed", // Set fixed|fluid to change width 
    layout: "default",
  },
  toolbar: {
    display: true, // Set true|false to show or hide Subheader
    width: "fixed", // Set fixed|fluid to change width type,
    breadcrumb: true, // Set true|false to show or hide Breadcrumb
  },
  footer: {
    width: "fixed", // Set fixed|fluid to change width type
  },
  sidebar: {
    display: true, // Set true|false to add or remove  Sidebar
    toggle: false, // Set true|false to enable Sidebar show and hide toggle
    shown: true, // Set true|false to by default show or hide Sidebar
    content: "general", // Set general|user|shop content for Sidebar
    bgColor: "bg-info", // Set background class for Sidebar,
    displayFooter: true, // Set true|false to display Sidebar Footer
    displayFooterButton: true, // Set true|false to display Sidebar Footer Button
  },
};
