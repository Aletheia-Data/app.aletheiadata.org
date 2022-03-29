import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosStatic } from "axios";

export default function setupAxios(
  axios: AxiosStatic,
  store: EnhancedStore
): void {
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: { accessToken },
      } = store.getState();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err)
  );
}
