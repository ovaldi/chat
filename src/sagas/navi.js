import _ from 'lodash';
import { uri } from '@/selectors/router';
import { put, select, takeLatest } from 'redux-saga/effects';
import { push, replace } from '@/actions/router';

export function* login ({ payload }) {
  let next = payload ? payload.next : '';
  let func = payload && payload.replace ? replace : push;

  if (_.isEmpty(next)) {
    next = yield select(state => encodeURIComponent(uri(state)));
  }

  yield put(func(`/login?next=${next}`));
};

export default function* watch () {
  yield takeLatest('navi/login', login);
};
