import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FAQPage } from "./pages/FAQPage";
import { PricingPage } from "./pages/PricingPage";
import { InvoicePage } from "./pages/InvoicePage";
import { PageTitle } from "../../../_start/layout/core";

export function GeneralPage() {
  return (
    <Switch>
      <Route path="/general/faq">
        <>
          <PageTitle>FAQ</PageTitle>
          <FAQPage />
        </>
      </Route>
      <Route path="/general/pricing">
        <>
          <PageTitle>Pricing</PageTitle>
          <PricingPage />
        </>
      </Route>
      <Route path="/general/invoice">
        <>
          <PageTitle>Invoice</PageTitle>
          <InvoicePage />
        </>
      </Route>
      <Redirect from="/general" exact={true} to="/general/faq" />
      <Redirect to="/general/faq" />
    </Switch>
  );
}
