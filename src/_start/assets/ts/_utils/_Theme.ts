export default class Theme {
  public static config: ThemeConfig;

  public static init = (config?: ThemeConfig) => {
    Theme.config = config || defaultThemeConfig;
  };

  public static getBreakpoint(key: string): number {
    const map = new Map(Object.entries(Theme.config.breakpoints));
    return map.get(key);
  }
}

export interface BreakpointsConfig {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export interface ColorsConfig {
  theme?: {
    base?: {
      white?: string;
      primary?: string;
      secondary?: string;
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
      light?: string;
      dark?: string;
    };
    light?: {
      white?: string;
      primary?: string;
      secondary?: string;
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
      light?: string;
      dark?: string;
    };
    inverse?: {
      white?: string;
      primary?: string;
      secondary?: string;
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
      light?: string;
      dark?: string;
    };
  };
  gray: {
    "gray-100"?: string;
    "gray-200"?: string;
    "gray-300"?: string;
    "gray-400"?: string;
    "gray-500"?: string;
    "gray-600"?: string;
    "gray-700"?: string;
    "gray-800"?: string;
    "gray-900"?: string;
  };
}

export interface ThemeConfig {
  breakpoints: BreakpointsConfig;
  colors?: ColorsConfig;
  "font-family"?: string;
}

export const defaultThemeConfig: ThemeConfig = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};
