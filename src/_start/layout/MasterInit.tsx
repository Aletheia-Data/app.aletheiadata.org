import React, { useEffect, useRef } from "react";
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
  ScrollTopComponent,
  StickyComponent,
  ToggleComponent,
} from "../assets/ts/components";

import Theme from "../assets/ts/_utils/_Theme";
import { useTheme } from "./core";

export function MasterInit() {
  const { config } = useTheme();
  const isFirstRun = useRef(true);
  const pluginsInitialization = () => {
    Theme.init();
    isFirstRun.current = false;
    setTimeout(() => {
      ToggleComponent.bootstrap();
      ScrollTopComponent.bootstrap();
      DrawerComponent.bootstrap();
      StickyComponent.bootstrap();
      MenuComponent.bootstrap();
      ScrollComponent.bootstrap();
    }, 100);
  };
  const pluginsReinitialization = () => {
    // setTimeout(() => {
    //   ScrollTopComponent.reinitialization();
    //   ScrollComponent.reinitialization();
    //   MenuComponent.reinitialization();
    //   DrawerComponent.bootstrap();
    //   ToggleComponent.reinitialization();
    // }, 0);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      pluginsInitialization();
    } else {
      pluginsReinitialization();
    }
  }, [config]);
  return <></>;
}
