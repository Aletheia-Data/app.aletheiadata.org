/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export function MenuInner() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Dashboards</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/dashboard" title="Start" />
            </li>
            <li className="menu-item">
              <MenuItem to="/extended" title="Extended" free={true} />
            </li>
            <li className="menu-item">
              <MenuItem to="/light" title="Light" />
            </li>
            <li className="menu-item">
              <MenuItem to="/compact" title="Compact" free={true} />
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Apps</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/chat" title="Chat" free={true} />
            </li>
            {/* <li className="menu-item">
              <MenuItem to="/mail" title="Inbox" />
            </li> */}
            <li className="menu-item">
              <MenuItem to="/shop/shop-1" title="Shop 1" free={true} />
            </li>
            <li className="menu-item">
              <MenuItem to="/shop/shop-2" title="Shop 2" free={true} />
            </li>
            <li className="menu-item">
              <MenuItem to="/shop/product/1" title="Shop Product" free={true} />
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">General</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/general/faq" title="FAQ" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/pricing" title="Pricing" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/invoice" title="Invoice" />
            </li>
            <li className="menu-item">
              <MenuItem to="/auth/login" title="Login" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/wizard" title="Wizard" free={true} />
            </li>
            <li className="menu-item">
              <MenuItem to="/error/404" title="Error" free={true} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Profile</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/profile/overview">
                Overview
              </Link>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link ps-0 py-2" data-kt-page="pro">
                Account
                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                  Pro
                </span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link ps-0 py-2" data-kt-page="pro">
                Settings
                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                  Pro
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Resources</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/docs/getting-started">
                Documentation
              </Link>
            </li>
            <li className="menu-item">
              <a className="menu-link ps-0 py-2" href="#" data-kt-page="pro">
                Layout Builder
                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                  Pro
                </span>
              </a>
            </li>
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/docs/changelog">
                Changelog
                <span className="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">
                  v1.0.0
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
