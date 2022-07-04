/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IThemeCSSClasses, useTheme } from "../../core";
import { Header } from "./Header";
import HeaderBanner from "./HeaderBanner";

type Props = {
  classes: IThemeCSSClasses;
};

const HeaderDesktopFixedTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="false"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <Header></Header>
    </div>
  );
};

const HeaderDesktopFixedTabletFluid: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="false"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{lg: '300px'}"
    >
      <Header></Header>
    </div>
  );
};

const HeaderDesktopFluidTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="false"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: false}"
    >
      <Header></Header>
    </div>
  );
};

export function HeaderWrapper() {
  const { config, classes } = useTheme();
  const { header } = config;
  return (
    <>
      <HeaderBanner>
        <h3>
          Please note that this is a beta version of our system. Don't forget to
          support our effort on{" "}
          <a
            href="https://opencollective.com/aletheia-data"
            target="_blank"
            rel="noreferrer"
          >
            Open Collective
          </a>
        </h3>
      </HeaderBanner>
      {header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFixed classes={classes} />
      )}

      {header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFluid classes={classes} />
      )}

      {!header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFluidTabletFixed classes={classes} />
      )}

      {!header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <div id="kt_header" className={`header ${classes.header}`}>
          <Header></Header>
        </div>
      )}
    </>
  );
}
