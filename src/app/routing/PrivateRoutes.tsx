import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "../../_start/partials";
import { LightDashboardWrapper } from "../pages/dashboards/light-dashboard/LightDashboardWrapper";
import { StartDashboardWrapper } from "../pages/dashboards/start-dashboard/StartDashboardWrapper";
import { ListingPageWrapper } from "../pages/group/start-dashboard/ListingPageWrapper";
import { CollectionPageWrapper } from "../pages/collection/start-dashboard/CollectionPageWrapper";
import { SinglePageWrapper } from "../pages/single/start-dashboard/SinglePageWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";

export function PrivateRoutes(): JSX.Element {
  const ProfilePageWrapper = lazy(
    () => import("../modules/profile/ProfilePageWrapper")
  );
  const GeneralPageWrapper = lazy(
    () => import("../modules/general/GeneralPageWrapper")
  );
  const DocsPageWrapper = lazy(() => import("../modules/docs/DocsPageWrapper"));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route component={StartDashboardWrapper} path="/dashboard" />
        <Route component={ListingPageWrapper} path="/group/:entity" />
        <Route
          component={CollectionPageWrapper}
          path="/collection/:entity/:id"
        />
        <Route component={SinglePageWrapper} path="/single/:entity/:cid" />
        <Route component={LightDashboardWrapper} path="/light" />
        <Route component={GeneralPageWrapper} path="/general" />
        <Route component={ProfilePageWrapper} path="/profile" />
        <Route component={MenuTestPage} path="/menu-test" />
        <Route component={DocsPageWrapper} path="/docs" />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="dashboard" />
      </Switch>
    </Suspense>
  );
}

/*
/group/:entity
/collection/:entity
/single/:entity/:id
*/
