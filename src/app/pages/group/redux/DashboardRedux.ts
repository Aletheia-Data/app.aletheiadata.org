import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { DepartmentModel } from "../models/DepartmentModel";
import { getAllDepartments } from "./ListingCRUD";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export const actionTypes = {
  GetDepartments: "[GetDepartments] Action",
  SetDepartments: "[SetDepartments] Action",
};

const initialState: IState = {
  departments: undefined
};

export interface IState {
  departments?: DepartmentModel;
}

export const reducer = persistReducer(
  { storage, key: "dashboard-home", whitelist: ["departments"] },
  (state: IState = initialState, action: ActionWithPayload<IState>) => {
    switch (action.type) {
      case actionTypes.GetDepartments: {
        return { ...state };
      }

      case actionTypes.SetDepartments: {
        const departments = action.payload?.departments;
        return { ...state, departments };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  getDepartments: () => ({
    type: actionTypes.GetDepartments,
    payload: {},
  }),
  setDepartments: (departments: DepartmentModel) => ({ type: actionTypes.SetDepartments, payload: { departments } })
};


export function* saga() {
  yield takeLatest(actionTypes.GetDepartments, function* getDepartmentsSaga() {
    yield put(actions.getDepartments());
  });

  yield takeLatest(actionTypes.SetDepartments, function* setDepartmentsSaga() {
    const { data: departments } = yield getAllDepartments();
    yield put(actions.setDepartments(departments));
  });
}
