import React from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { AuthPage } from "../modules/auth";

export function PublicRoutes() {
  return (
    <Switch>
      <HashRouter>
        <AuthPage />
      </HashRouter>
      <Redirect to="/auth" />
    </Switch>
  );
}
