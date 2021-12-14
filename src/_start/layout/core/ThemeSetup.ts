import {
  IAsideConfig,
  IContentConfig,
  IFooterConfig,
  IHeaderConfig,
  ISidebarConfig,
  IToolbarConfig,
  IThemeConfig,
  IThemeCSSClasses,
  IThemeHTMLAttributes,
} from "./ThemeModels";
import { DefaultThemeConfig } from "./DefaultThemeConfig";

const THEME_CONFIG_KEY =
  process.env.REACT_APP_BASE_THEME_CONFIG_KEY || "BaseThemeConfig";

export function getConfig(): IThemeConfig {
  const ls = localStorage.getItem(THEME_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls) as IThemeConfig;
    } catch (er) {
      console.error(er);
    }
  }
  return DefaultThemeConfig;
}

function setThemeConfig(config: IThemeConfig): void {
  try {
    localStorage.setItem(THEME_CONFIG_KEY, JSON.stringify(config));
  } catch (er) {
    console.error(er);
  }
}

export function getEmptyCssClasses() {
  return {
    header: [],
    headerContainer: [],
    headerMobile: [],
    headerMenu: [],
    aside: [],
    asideMenu: [],
    asideToggle: [],
    toolbar: [],
    toolbarContainer: [],
    content: [],
    contentContainer: [],
    footerContainer: [],
    sidebar: [],
  };
}

export function getEmptyHTMLAttributes() {
  return {
    asideMenu: new Map(),
    headerMobile: new Map(),
    headerMenu: new Map(),
    headerContainer: new Map(),
  };
}

export class ThemeSetup {
  public static isLoaded: boolean = false;
  public static config: IThemeConfig = getConfig();
  public static classes: IThemeCSSClasses = getEmptyCssClasses();
  public static attributes: IThemeHTMLAttributes = getEmptyHTMLAttributes();

  private static initCSSClasses(): void {
    ThemeSetup.classes = getEmptyCssClasses();
  }

  private static initHTMLAttributes(): void {
    ThemeSetup.attributes = Object.assign({}, getEmptyHTMLAttributes());
  }

  private static initTheme(config: IThemeConfig): void {
    Array.from(document.body.attributes).forEach((attr) => {
      document.body.removeAttribute(attr.name);
    });
    document.body.setAttribute("id", "kt_body");
    if (config.main?.body?.backgroundImage) {
      document.body.style.backgroundImage = `url('${config.main.body.backgroundImage}')`;
    }

    if (config.main?.body?.class) {
      document.body.classList.add(config.main.body.class);
    }

    if (config.loader.display) {
      document.body.classList.remove("page-loading");
    }
  }

  private static initHeader(headerConfig: IHeaderConfig): void {
    ThemeSetup.classes.headerContainer.push(
      headerConfig.width === "fluid" ? "container-fluid" : "container"
    );
    if (headerConfig.fixed.desktop) {
      document.body.classList.add("header-fixed");
    }

    if (headerConfig.fixed.tabletAndMobile) {
      document.body.classList.add("header-tablet-and-mobile-fixed");
    }
  }

  private static initToolbar(toolbarConfig: IToolbarConfig): void {
    if (!toolbarConfig.display) {
      return;
    }

    document.body.classList.add("toolbar-enabled");
    ThemeSetup.classes.toolbarContainer.push(
      toolbarConfig.width === "fluid" ? "container-fluid" : "container"
    );
  }

  private static initContent(contentConfig: IContentConfig): void {
    ThemeSetup.classes.contentContainer.push(
      contentConfig.width === "fluid" ? "container-fluid" : "container"
    );
  }

  private static initAside(asideConfig: IAsideConfig): void {
    if (!asideConfig.display) {
      return;
    }

    // Enable Aside
    document.body.classList.add("aside-enabled");

    // Fixed Aside
    if (asideConfig.fixed) {
      document.body.classList.add("aside-fixed");
    }

    // Minimized
    if (asideConfig.toggle && asideConfig.minimized) {
      document.body.setAttribute("data-kt-aside-minimize", "on");
      ThemeSetup.classes.asideToggle.push("active");
    }

    // Aside primary
    if (asideConfig.primaryDisplay) {
      document.body.classList.add("aside-primary-enabled");
    } else {
      document.body.classList.add("aside-primary-disabled");
    }

    // Aside Secondary
    document.body.classList.add(
      `aside-secondary-${asideConfig.secondaryDisplay ? "enabled" : "disabled"}`
    );
  }

  private static initSidebar(sidebarConfig: ISidebarConfig): void {
    // / Set Sidebar enabled class
    if (sidebarConfig.display) {
      document.body.classList.add("sidebar-enabled");
    } else {
      return;
    }

    // Set Sidebar shown status
    if (sidebarConfig.shown) {
      document.body.setAttribute("data-sidebar", "on");
    }

    // Set Sidebar background color class
    ThemeSetup.classes.sidebar.push(sidebarConfig.bgColor);
  }

  private static initFooter(footerConfig: IFooterConfig): void {
    ThemeSetup.classes.footerContainer.push(
      `container${footerConfig.width === "fluid" ? "-fluid" : ""}`
    );
  }

  private static initConfig(config: IThemeConfig): void {
    ThemeSetup.initTheme(config);
    ThemeSetup.initHeader(config.header);
    ThemeSetup.initToolbar(config.toolbar);
    ThemeSetup.initContent(config.content);
    ThemeSetup.initAside(config.aside);
    ThemeSetup.initSidebar(config.sidebar);
    ThemeSetup.initFooter(config.footer);
  }

  public static updatePartialConfig(
    fieldsToUpdate: Partial<IThemeConfig>
  ): IThemeConfig {
    const config = ThemeSetup.config;
    const updatedConfig = { ...config, ...fieldsToUpdate };
    ThemeSetup.initCSSClasses();
    ThemeSetup.initHTMLAttributes();
    ThemeSetup.isLoaded = false;
    ThemeSetup.config = updatedConfig;
    ThemeSetup.initConfig(Object.assign({}, updatedConfig));
    ThemeSetup.isLoaded = true; // remove loading there
    return updatedConfig;
  }

  public static setConfig(config: IThemeConfig): void {
    setThemeConfig(config);
  }

  public static bootstrap = (() => {
    ThemeSetup.updatePartialConfig(ThemeSetup.config);
  })();
}
