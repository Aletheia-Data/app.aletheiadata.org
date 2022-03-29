import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../../app/modules/auth";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([auth.saga()]);
}
