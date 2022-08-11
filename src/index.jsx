import React from "react";
import ReactDOM from "react-dom";
// Redux
// https://github.com/rt2zz/redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as _redux from "./setup";
import store, { persistor } from "./setup/redux/Store";
// Axios
import axios from "axios";
// Apps
import { App } from "./app/App";
import "./_start/assets/sass/style.scss";
// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./setup/apollo/SetupApollo";
import { version } from "../package.json";
import * as dotenv from "dotenv";
dotenv.config();

console.log(`
*******************************
******* Aletheia Data *********
**** version: ${version} ******
*******************************
**** ALETHEIA SYSTEM **********
**** Aletheia Admin: ${process.env.REACT_APP_BACKEND_URL} ******
**** Aletheia API: ${process.env.REACT_APP_ALETHEIA_API} ******
*******************************
**** STORAGE ******************
**** Active: ${
  process.env.REACT_APP_WEB3_STORAGE_API_KEY ||
  process.env.REACT_APP_NFT_STORAGE_API_KEY
    ? "true"
    : "false"
}
**** Provider: ${
  process.env.REACT_APP_WEB3_STORAGE_API_KEY
    ? "web3.storage"
    : process.env.REACT_APP_NFT_STORAGE_API_KEY
    ? "nft.storage"
    : null
} ******
*******************************
**** Web3 INTERFACE ***********
**** Active: ${process.env.REACT_APP_MORALIS_APP_ID ? true : false} ******
**** Endpoint: ${process.env.REACT_APP_API_ENDPOINT} ******
*******************************
**** Magic Connect ****************
**** Active: ${process.env.REACT_APP_MAGIC_LINK_API_KEY ? true : false} ******
******************************************************************************
**** RAPID API ****************
**** Active: ${process.env.REACT_APP_RAPID_API_ENDPOINT ? true : false} ******
**** Endpoint: ${process.env.REACT_APP_RAPID_API_ENDPOINT} ******
***********************************************
**** WEB3 FORMS API ****************
**** Active: ${process.env.REACT_APP_WEB3_FORMS_API_KEY ? true : false} ******
***********************************************
`);

if (window.location.hostname === "app.aletheiadata.org") {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.log = function () {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.debug = function () {};
}

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Start mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */

/* const mock = */ _redux.mockAxios(axios);
/**
 * Inject Start interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App basename={PUBLIC_URL} />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
