export interface ILoaderConfig {
  display?: boolean;
  type: "default" | "spinner-message" | "spinner-logo";
}

export interface IScrollTopConfig {
  display: boolean;
}

export interface IHeaderConfig {
  display: boolean;
  width: "fixed" | "fluid";
  fixed: {
    desktop: boolean;
    tabletAndMobile: boolean;
  };
}

export interface IMegaMenuConfig {
  display: boolean;
}

export interface IAsideConfig {
  display: boolean;
  fixed: boolean;
  menu: "main" | "documentation";
  primaryDisplay: boolean;
  secondaryDisplay: boolean;
  toggle: boolean;
  content?: "menu" | "docs";
  minimized: boolean;
}

export interface IContentConfig {
  width: "fixed" | "fluid";
  layout: "default" | "docs";
}

export interface IFooterConfig {
  width: "fixed" | "fluid";
}

export interface ISidebarConfig {
  display: boolean;
  toggle: boolean;
  shown: boolean;
  content: "general" | "user" | "shop";
  bgColor: 'bg-white' | 'bg-info';
  displayFooter: boolean;
  displayFooterButton: boolean;
}

export interface IToolbarConfig {
  display: boolean;
  width: 'fixed' | 'fluid';
  breadcrumb: boolean;
}

export interface IMainConfig {
  body?: {
    backgroundImage?: string;
    class: string;
  };
  type: 'blank' | 'theme' 
}

export interface IThemeConfig {
  loader: ILoaderConfig;
  scrolltop: IScrollTopConfig;
  header: IHeaderConfig;
  megaMenu: IMegaMenuConfig;
  aside: IAsideConfig;
  content: IContentConfig;
  toolbar: IToolbarConfig;
  footer: IFooterConfig;
  sidebar: ISidebarConfig;
  main?: IMainConfig;
}

export interface IThemeCSSClasses {
  header: Array<string>;
  headerContainer: Array<string>;
  headerMobile: Array<string>;
  headerMenu: Array<string>;
  aside: Array<string>;
  asideMenu: Array<string>;
  asideToggle: Array<string>;
  sidebar: Array<string>;
  toolbar: Array<string>;
  toolbarContainer: Array<string>;
  content: Array<string>;
  contentContainer: Array<string>;
  footerContainer: Array<string>;
}

export interface IThemeHTMLAttributes {
  asideMenu: Map<string, string | number | boolean>;
  headerMobile: Map<string, string | number | boolean>;
  headerMenu: Map<string, string | number | boolean>;
  headerContainer: Map<string, string | number | boolean>;
}
