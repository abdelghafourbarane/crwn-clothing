import { call, all, takeLatest, put } from "redux-saga/effects";

import userTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onUserSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onUserSignOut)]);
}
