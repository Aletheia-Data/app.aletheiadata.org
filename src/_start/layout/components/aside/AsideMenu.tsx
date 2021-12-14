import React, { useRef, useEffect } from "react";
import { AsideMenuDocs } from "./AsideMenuDocs";
import { AsideMenuMain } from "./AsideMenuMain";

type Props = {
  menuType: "main" | "documentation";
  asidePrimaryDisplay: boolean;
};

const AsideMenu: React.FC<Props> = ({ menuType, asidePrimaryDisplay }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    if (!asidePrimaryDisplay){
      scrollRef.current.setAttribute('data-kt-scroll-dependencies', '#kt_aside_logo')
    } else {
      scrollRef.current.removeAttribute('data-kt-scroll-dependencies');
    }

  }, [asidePrimaryDisplay]);
  return (
    <div
      className="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
      data-kt-menu="true"
    >
      <div
        ref={scrollRef}
        className="hover-scroll-y pe-4 pe-lg-5"
        id="kt_aside_menu_scroll"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"        
        data-kt-scroll-wrappers="#kt_aside_wordspace"
        data-kt-scroll-offset="10px"
      >
        <div className="menu-wrapper menu-column menu-fit">
          {menuType === "main" && <AsideMenuMain />}
          {menuType === "documentation" && <AsideMenuDocs />}
        </div>
      </div>
    </div>
  );
};

export { AsideMenu };
