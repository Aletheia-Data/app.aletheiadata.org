import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { FallbackView } from "../../_start/partials";
import { LightDashboardWrapper } from "../pages/dashboards/light-dashboard/LightDashboardWrapper";
import { StartDashboardWrapper } from "../pages/dashboards/start-dashboard/StartDashboardWrapper";
import { ListingPageWrapper } from "../pages/group/start-dashboard/ListingPageWrapper";
import { CollectionPageWrapper } from "../pages/collection/start-dashboard/CollectionPageWrapper";
import { SinglePageWrapper } from "../pages/single/start-dashboard/SinglePageWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";

export function PrivateRoutes() {
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
        <Route path="/dashboard" component={StartDashboardWrapper} />
        <Route path="/group/:entity" component={ListingPageWrapper} />
        <Route path="/collection/:entity/:id" component={CollectionPageWrapper} />
        <Route path="/single/:entity/:cid" component={SinglePageWrapper} />
        <Route path="/light" component={LightDashboardWrapper} />
        <Route path="/general" component={GeneralPageWrapper} />
        <Route path="/profile" component={ProfilePageWrapper} />
        <Route path="/menu-test" component={MenuTestPage} />
        <Route path="/docs" component={DocsPageWrapper} />
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