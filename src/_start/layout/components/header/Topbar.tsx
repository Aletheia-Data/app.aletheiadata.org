import React, { useState, useEffect } from "react";
import { Ktsvg, truncate } from "../../../helpers";
import {
  HeaderNotificationsMenu,
  SearchModal,
  HeaderUserMenu,
  InboxCompose,
} from "../../../partials";
import { useTheme } from "../../core";
import { getUserByToken } from "../../../../app/modules/auth/redux/AuthCRUD";
import { useDispatch } from "react-redux";
import * as auth from "../../../../app/modules/auth/redux/AuthRedux";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
const magic = new Magic(`${process.env.REACT_APP_MAGIC_LINK_API_KEY}`, {
  network: "mainnet",
  locale: "en_US",
  extensions: [new ConnectExtension()],
});
const web3 = new Web3(magic.rpcProvider);

export function Topbar() {
  const { config } = useTheme();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showInboxComposeModal, setShowInboxComposeModal] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    account: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    id: "0",
    provider: "none",
  });

  useEffect(() => {
    getUserByToken()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        dispatch(auth.actions.logout());
      });
  }, []);

  const disconnect = async () => {
    await magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    setUser({
      account: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      id: "0",
      provider: "none",
    });
    dispatch(auth.actions.logout());
  };

  const showWallet = async () => {
    await magic.connect.showWallet().catch((e) => {
      console.log(e);
    });
  };

  return (
    <>
      {/* begin::Search */}
      <button
        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        onClick={() => setShowSearchModal(true)}
      >
        <Ktsvg
          path="/media/icons/duotone/General/Search.svg"
          className="svg-icon-1 svg-icon-dark"
        />
      </button>
      <SearchModal
        show={showSearchModal}
        handleClose={() => setShowSearchModal(false)}
      />
      {/* end::Search */}

      {/* begin::Message */}
      <button
        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        onClick={() => setShowInboxComposeModal(true)}
      >
        <Ktsvg
          path="/media/icons/duotone/Communication/Chat6.svg"
          className="svg-icon-1 svg-icon-dark"
        />
      </button>
      <InboxCompose
        show={showInboxComposeModal}
        handleClose={() => setShowInboxComposeModal(false)}
      />
      {/* end::Message */}

      {/* begin::User
      TODO: restore after DEMO
      <div className="ms-1 ms-lg-6">
        // begin::Toggle 
        <div
          className="btn btn-icon btn-sm btn-active-bg-accent"
          data-kt-menu-trigger="click" // TODO: open modal with selection user
          data-kt-menu-placement="bottom-end"
        >
          <Ktsvg
            path="/media/icons/duotone/General/User.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </div>
        <HeaderUserMenu /> 
        // end::Toggle
      </div>
      */}
      {/* end::User */}

      {/* begin::Notifications */}
      <div className="ms-1 ms-lg-6">
        <button
          onClick={showWallet}
          className="background-xls-backdrop text-dark btn btn-primary fw-bolder fs-7"
        >
          {truncate(user.account, 12)}
        </button>
        {/* begin::Dropdown */}
        {/**
         * <button
          className="btn btn-icon btn-sm btn-light-primary fw-bolder pulse pulse-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
          <span className="position-absolute fs-6">1</span>
          <span className="pulse-ring"></span>
        </button>
         */}
        <HeaderNotificationsMenu />
        {/* end::Dropdown */}
      </div>
      {/* end::Notifications */}

      <button
        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        id="kt_aside_toggler"
        onClick={disconnect}
      >
        <Ktsvg
          path="/media/icons/duotone/Navigation/Sign-out.svg"
          className="svg-icon-1 svg-icon-dark"
        />
      </button>

      {/* begin::Aside Toggler */}
      {config.aside.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_aside_toggler"
        >
          <Ktsvg
            path="/media/icons/duotone/Text/Menu.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </button>
      )}
      {/* end::Aside Toggler */}

      {/* begin::Sidebar Toggler */}
      {config.sidebar.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_sidebar_toggler"
        >
          <Ktsvg
            path="/media/icons/duotone/Text/Menu.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </button>
      )}
      {/* end::Sidebar Toggler */}
    </>
  );
}
