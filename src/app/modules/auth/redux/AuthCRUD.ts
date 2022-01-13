import axios from "axios";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

const API_URL = process.env.REACT_APP_API_ENDPOINT || "api";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;

// Server should return AuthModel
export function login(account: string, provider: string) {
  // console.log(account, provider);
  return `${btoa(`${account}-${provider}`)}`;
}

// Server should return AuthModel
export function register(
  account: string,
  provider: string
) {
  return axios.post<AuthModel>(REGISTER_URL, {
    account,
    provider,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}
