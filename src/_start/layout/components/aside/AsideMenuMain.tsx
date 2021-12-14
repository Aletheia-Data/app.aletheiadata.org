import React from "react";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  return (
    <>
      {" "}
      <>
        <>
          <div className="menu-item">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Dashboards
            </h4>
          </div>
          <AsideMenuItem to="/dashboard" title="Start" />
          <AsideMenuItem to="/extended" title="Extended" free={true} />
          <AsideMenuItem to="/light" title="Light" />
          <AsideMenuItem to="/compact" title="Compact" free={true} />
        </>

        <>
          <div className="menu-item mt-10">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Apps
            </h4>
          </div>
          <AsideMenuItem to="/chat" title="Chat" free={true} />
          {/* <AsideMenuItem to="/mail" title="Inbox" /> */}
          <AsideMenuItem to="/shop/shop-1" title="Shop 1" free={true} />
          <AsideMenuItem to="/shop/shop-2" title="Shop 2" free={true} />
          <AsideMenuItem
            to="/shop/product/1"
            title="Shop Product"
            free={true}
          />
        </>

        <>
          <div className="menu-item mt-10">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              General
            </h4>
          </div>
          <AsideMenuItem to="/general/faq" title="FAQ" />
          <AsideMenuItem to="/general/pricing" title="Pricing" />
          <AsideMenuItem to="/general/invoice" title="Inovice" />
          <AsideMenuItem to="/auth/login" title="Login" />
          <AsideMenuItem to="/general/wizard" title="Wizard" free={true} />
          <AsideMenuItem to="/error/404" title="Error" free={true} />
        </>

        <>
          <div className="menu-item mt-10">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Profile
            </h4>
          </div>
          <AsideMenuItem to="/profile/overview" title="Overview" />
          <AsideMenuItem to="/profile/account" title="Account" free={true} />
          <AsideMenuItem to="/profile/settings" title="Settings" free={true} />
        </>

        <>
          <div className="menu-item mt-10">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Resources
            </h4>
          </div>
          <AsideMenuItem to="/docs" title="Documentation" />
          <AsideMenuItem to="/builder" title="Layout Builder" free={true} />
          <AsideMenuItem to="/docs/change-log" title="Change Log" />
        </>
      </>
    </>
  );
}
