import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootState } from "../setup";
import { ThemeProvider } from "../_start/layout/core";
import { MasterLayout } from "../_start/layout/MasterLayout";
import { Logout } from "./modules/auth/Logout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { PublicRoutes } from "./routing/PublicRoutes";

type Props = {
  basename: string;
};

const App: React.FC<Props> = ({ basename }) => {
  const isAuthorized = useSelector<RootState>(
    ({ auth }) => auth.user,
    shallowEqual
  );

  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <Switch>
          <Route path="/logout" component={Logout} />
          {!isAuthorized ? (
            <Route>
              <PublicRoutes />
            </Route>
          ) : (
            <>
              <MasterLayout>
                <PrivateRoutes />
              </MasterLayout>
            </>
          )}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
