import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ForkEffect, put, takeLatest } from "redux-saga/effects";
import { UserModel } from "../models/UserModel";
import { getUserByToken } from "./AuthCRUD";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
};

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
};

export interface IAuthState {
  user?: UserModel;
  accessToken?: string;
}

export const reducer = persistReducer(
  { storage, key: "v100-auth", whitelist: ["user", "accessToken"] },
  (
    state: IAuthState = initialAuthState,
    action: ActionWithPayload<IAuthState>
  ) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken;
        const userInfo = `${atob(`${action.payload?.accessToken}`)}`;
        const words = userInfo.split("-");
        const userData = {
          id: action.payload?.accessToken,
          account: words[0],
          provider: words[1],
        };

        return { accessToken, user: userData };
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken;

        return { accessToken, user: undefined };
      }

      case actionTypes.Logout: {
        return initialAuthState;
      }

      case actionTypes.UserRequested: {
        return { ...state, user: undefined };
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user;

        return { ...state, user };
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user;

        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

interface AccessTokenResponse {
  type: string;
  payload: {
    accessToken: string;
  };
}

interface TypeResponse {
  type: string;
}

interface UserModelResponse {
  type: string;
  payload: {
    user: UserModel;
  };
}
export const actions = {
  login: (accessToken: string): AccessTokenResponse => ({
    type: actionTypes.Login,
    payload: { accessToken },
  }),
  register: (accessToken: string): AccessTokenResponse => ({
    type: actionTypes.Register,
    payload: { accessToken },
  }),
  logout: (): TypeResponse => ({ type: actionTypes.Logout }),
  requestUser: (): TypeResponse => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel): UserModelResponse => ({
    type: actionTypes.UserLoaded,
    payload: { user },
  }),
  setUser: (user: UserModel): UserModelResponse => ({
    type: actionTypes.SetUser,
    payload: { user },
  }),
};

export function* saga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const userInfo = yield getUserByToken();
    yield put(actions.fulfillUser(userInfo.user));
  });
}
