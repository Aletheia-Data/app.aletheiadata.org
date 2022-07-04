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
        <h3 style={{ color: "white" }}>
          Support our Aletheia on{" "}
          <a
            href="https://gitcoin.co/grants/explorer/?page=1&limit=12&me=true&sort_option=weighted_shuffle&collection_id=false&network=mainnet&state=all&profile=false&round_num=0&customer_name=false&sub_round_slug=false&collections_page=1&grant_regions=&grant_types=&grant_tags=&tenants=&idle=true&featured=true&round_type=false&hidden=true&tab=grants"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#6F3FF5" }}
          >
            GitCoin Grants
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
