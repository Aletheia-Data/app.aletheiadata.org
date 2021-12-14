/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { CodeBlock } from "../../../../../_start/partials";

export function CreatePage() {
  const { REACT_APP_VERSION, REACT_APP_THEME_NAME } = process.env;

  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-2" id="how-to">
          <a href="#how-to"></a>How to create a custom page
        </h1>
        <div className="py-5">
          <span>
            Here is the example on how to create your own page and add it to the
            left side menu and breadcrumbs.
          </span>
          <ol className="pt-5">
            <li>
              <span>
                Create page component <code>src/app/pages/MyPage.tsx</code>.
              </span>
              <CodeBlock code={codeComponent} language="tsx" />
            </li>
            <li>
              <span>
                Update <code>Update src/app/routing/PrivateRoutes.tsx</code>.
              </span>
              <CodeBlock code={routingCode} language="tsx" />
            </li>
            <li>
              <span>
                Add menu item to <b>Header Menu</b>{" "}
                <code>
                  src/_{REACT_APP_VERSION?.toLocaleLowerCase()}
                  /layout/components/header/MenuInner.tsx
                </code>
                .
              </span>
              <CodeBlock code={headerMenu} language="tsx" />
            </li>
            <li>
              <span>
                Add menu item to <b>Aside Menu</b>{" "}
                <code>
                  src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}
                  /layout/components/aside/AsideMenuMain.tsx
                </code>
                .
              </span>
              <CodeBlock code={asideMenu} language="tsx" />
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

const codeComponent = `import React from "react";
                  
export function MyPage() {
    return <h1>Hello!</h1>
}`;

const routingCode = `import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "../../_start/partials";
import { ExtendedDashboardWrapper } from "../pages/dashboards/extended-dashboard/ExtendedDashboardWrapper";
import { LightDashboardWrapper } from "../pages/dashboards/light-dashboard/LightDashboardWrapper";
import { CompactDashboardWrapper } from "../pages/dashboards/compact-dashboard/CompactDashboardWrapper";
import { StartDashboardPage } from "../pages/dashboards/start-dashboard/StartDashboardPage";
import { MenuTestPage } from "../pages/MenuTestPage";
+ import {MyPage} from "../pages/MyPage";

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(
    () => import("../pages/layout-builder/BuilderPageWrapper")
  );
  const ProfilePageWrapper = lazy(
    () => import("../modules/profile/ProfilePageWrapper")
  );
  const ChagePage = lazy(() => import("../modules/apps/chat/ChatPageWrapper"));
  const ShopPageWrapper = lazy(
    () => import("../modules/apps/shop/ShopPageWrapper")
  );
  const GeneralPageWrapper = lazy(
    () => import("../modules/general/GeneralPageWrapper")
  );
  const DocsPageWrapper = lazy(() => import("../modules/docs/DocsPageWrapper"));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={StartDashboardPage} />
        <Route path="/extended" component={ExtendedDashboardWrapper} />
        <Route path="/light" component={LightDashboardWrapper} />
        <Route path="/compact" component={CompactDashboardWrapper} />
        <Route path="/builder" component={BuilderPageWrapper} />
        <Route path="/general" component={GeneralPageWrapper} />
        <Route path="/chat" component={ChagePage} />
        <Route path="/shop" component={ShopPageWrapper} />
        <Route path="/profile" component={ProfilePageWrapper} />
        <Route path="/menu-test" component={MenuTestPage} />
        <Route path="/docs" component={DocsPageWrapper} />
        +<Route path="/my-page" component={MyPage} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}`;

const headerMenu = `+<li className="menu-item">
+<MenuItem to="/my-page" title="My Page" />    
+</li>`;

const asideMenu = `+<AsideMenuItem to="/my-page" title="My Page" />`;
