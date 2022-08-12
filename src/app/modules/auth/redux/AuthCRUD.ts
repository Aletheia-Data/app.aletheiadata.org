import axios from "axios";
import Web3 from 'web3';
import { AuthModel } from "../models/AuthModel";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";

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

declare let window: any;

const magic = new Magic(`${process.env.REACT_APP_MAGIC_LINK_API_KEY}`, {
  network: "rinkeby",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});

export function getUserByToken() {
  const web3 = new Web3(magic.rpcProvider);

  return new Promise<any>(async (resolve, reject) => {
    // Authorization head should be fulfilled in interceptor.
    // Check common redux folder => setupAxios
    // await window.ethereum.enable();

    const netId: any = await web3.eth.net.getId()
    const accounts: any = await web3.eth.getAccounts();

    console.log(web3, accounts);

    //load balance
    if (accounts[0] && typeof accounts[0] !== 'undefined') {

      const getId = login(accounts[0], 'metamask');

      // console.log('get id: ', getId);

      resolve({
        user: {
          id: getId,
          account: accounts[0],
          provider: 'metamask'
        }
      })

    } else {
      reject({
        error: {
          code: '500',
          message: 'connection not valid'
        }
      });
    }
  })
}
