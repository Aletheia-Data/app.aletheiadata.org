import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "../modules/auth";

export function PublicRoutes(): JSX.Element {
  return (
    <Switch>
      <Route component={AuthPage} path="/auth" />
      <Redirect to="/auth" />
    </Switch>
  );
}
