declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production";
    REACT_APP_API_ENDPOINT: string;
    REACT_APP_API_VERSION: string;
    REACT_APP_BACKEND_URL: string;
    REACT_APP_MORALIS_APP_ID: string;
    REACT_APP_MORALIS_SERVER_URL: string;
    REACT_APP_SERVICES_VERSION: string;
    REACT_APP_WALLET_OWNER: string;
    REACT_APP_WEB3_STORAGE_API_KEY: string;
    REACT_APP_ACCESS_TOKEN: string;
    REACT_APP_REFRESH_TOKEN: string;
    REACT_APP_RAPID_API_KEY: string;
    REACT_APP_RAPID_API: string;
  }
}

window.ethereum = window.ethereum || {};
