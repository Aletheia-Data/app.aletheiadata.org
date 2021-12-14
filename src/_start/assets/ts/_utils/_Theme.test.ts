// import { screen } from '@testing-library/dom';
// any comment
import { setupDocument } from "./helpers/test-helpers/_setupDocument";
import Theme, { defaultThemeConfig, ThemeConfig } from "./_Theme";

describe("Theme", () => {
  beforeEach(() => {
    setupDocument("");
  });

  it("should have default settings", () => {
    Theme.init();
    expect(Theme.getBreakpoint("xl")).toEqual(
      defaultThemeConfig.breakpoints.xl
    );
    // screen.debug()
  });

  it("should merge default and incoming config", () => {
    const incomingConfig: ThemeConfig = {
      breakpoints: {
        xl: 1220, // 1200 in default
      },
    };
    Theme.init(incomingConfig);
    expect(Theme.getBreakpoint("xl")).toEqual(incomingConfig.breakpoints.xl);
    expect(Theme.getBreakpoint("xl")).not.toEqual(
      defaultThemeConfig.breakpoints.xl
    );
  });
});
