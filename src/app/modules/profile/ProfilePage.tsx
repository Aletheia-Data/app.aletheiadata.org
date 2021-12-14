import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PageTitle } from "../../../_start/layout/core";
import { Overview } from "./components/Overview";

const ProfilePage: React.FC = () => {
  return (
    <Switch>
      <Route path="/profile/overview">
        <PageTitle>Overview</PageTitle>
        <Overview />
      </Route>
      =
      <Redirect from="/profile" exact={true} to="/profile/overview" />
      <Redirect to="/profile/overview" />
    </Switch>
  );
};

export { ProfilePage };
