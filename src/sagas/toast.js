import { Toast } from 'antd-mobile';
import { takeLatest } from 'redux-saga/effects';

const forever = 0;
const timeout = 1.5;

export function* info ({ payload }) {
  Toast.info(payload, timeout, null, false);
};

export function* loading ({ payload }) {
  Toast.loading(payload, forever);
};

export function* success ({ payload }) {
  Toast.success(payload, timeout);
};

export function* failure ({ payload }) {
  Toast.fail(payload || 'Failed to load data', timeout);
};

export function* destroy () {
  Toast.hide();
};

export default function* watch () {
  yield takeLatest('toast/info', info);
  yield takeLatest('toast/loading', loading);
  yield takeLatest('toast/success', success);
  yield takeLatest('toast/failure', failure);
  yield takeLatest('toast/destroy', destroy);
};
