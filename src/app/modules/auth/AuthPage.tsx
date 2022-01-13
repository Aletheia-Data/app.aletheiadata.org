import React, { useEffect } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { toAbsoluteUrl } from "../../../_start/helpers";

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid"
        id="kt_login"
      >
        {/* Aside */}
        <div className="d-flex flex-column flex-lg-row-auto bg-light-grey w-lg-600px pt-15 pt-lg-0" style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${toAbsoluteUrl(
            "/media/backgrounds/login.png"
          )})`,
        }}>
          {/* Top */}
          <div className="flex-lg-row-fluid d-flex flex-column justify-content-center py-20 px-10 p-lg-7 mx-auto mw-450px w-100">

            {/* begin::Aside Subtitle */}
            <h3 className="fw-bolder fs-2x text-primary lh-lg">
              "Aletheia (Verdad), que eres el principio de una gran virtud, evita que mi buena fe tropiece con una falsedad".
              <br />
              - Pindar, 5th B.C.
            </h3>
            {/* end::Aside Subtitle */}
          </div>

          {/* Bottom */}
          <div
            className="d-flex flex-row-fluid bgi-size-contain bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-350px"
          ></div>
        </div>

        {/* Content */}
        <div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-20 px-10 p-lg-7 mx-auto mw-450px w-100">
          <div className="d-flex flex-column-fluid flex-center py-10">
            <Switch>
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/forgot-password" component={ForgotPassword} />
              <Redirect from="/auth" exact={true} to="/auth/login" />
              <Redirect to="/auth/login" />
            </Switch>
          </div>
          <div className="d-flex justify-content-lg-start justify-content-center align-items-center py-7 py-lg-0">

            <span className="text-primary fw-bolder fs-4 cursor-pointer">
              <a href="https://github.com/Aletheia-Data/" target="_blank" className="menu-link ps-0 pe-2">
                Github
              </a>
            </span>
            <span className="text-primary ms-10 fw-bolder fs-4">
              <a href="https://aletheiadata.statuspage.io/" target="_blank" className="menu-link pe-0 pe-2">
                Status
              </a>
            </span>
            <span className="text-primary ms-10 fw-bolder fs-4">
              <a href="https://docs.aletheiadata.org/" target="_blank" className="menu-link pe-0">
                Documentation
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
