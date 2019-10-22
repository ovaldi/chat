import me from '@/api/me';
import api from '@/api/auth';
import auth from '@/utils/auth';
import * as location from '@/actions/router';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* init (action) {
  try {
    if (auth.isAuthenticated()) {
      yield put(location.replace(decodeURIComponent(action.payload.next)));
    }
  } catch (error) {
    yield put({
      type: 'toast/failure',
      payload: error.message
    });
  }
};

export function* post (action) {
  try {
    yield put({
      type: 'global/loading',
      payload: true
    });

    const { next = '/me' } = action.payload;
    const { token, expires_in } = yield call(api.login);
    auth.setToken(token, expires_in / 86400);

    const payload = yield call(me.profile);
    yield put({
      type: 'profile/update',
      payload
    });

    yield put(location.replace(next));
  } catch (error) {
    yield put({
      type: 'toast/failure',
      payload: error.message
    });
  } finally {
    yield put({
      type: 'global/loading',
      payload: false
    });
  }
};

export default function* watch () {
  yield takeLatest('pages/login/init', init);
  yield takeLatest('pages/login/post', post);
};
