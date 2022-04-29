import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FAQPage } from "./pages/FAQPage";
import { PageTitle } from "../../../_start/layout/core";

export function GeneralPage(): JSX.Element {
  return (
    <Switch>
      <Route path="/general/faq">
        <>
          <PageTitle>FAQ</PageTitle>
          <FAQPage />
        </>
      </Route>
      <Redirect exact from="/general" to="/general/faq" />
      <Redirect to="/general/faq" />
    </Switch>
  );
}
