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
const { version } = require('../package.json');

console.log(`
***********************************************
***** Aletheia Data ***
**** version: ${version} ******
**** web3: ${process.env.REACT_WEB3_STORAGE_API_KEY ? true : false} ******
**** nft: ${process.env.REACT_WEB3_STORAGE_API_KEY ? true : false} ******
**** endpoint: ${process.env.REACT_APP_API_ENDPOINT} ******
**** backend: ${process.env.REACT_APP_BACKEND_URL} ******
***********************************************
`);

if (window.location.hostname === 'app.aletheiadata.org') {
  console.log = function () { }
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
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <App basename={PUBLIC_URL} />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
