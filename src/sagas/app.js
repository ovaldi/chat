import me from '@/api/me';
import auth from '@/utils/auth';
import request from '@/utils/request';
import { put, call, takeLatest } from 'redux-saga/effects';

export function* init () {
  try {
    if (auth.isAuthenticated()) {
      const payload = yield call(me.profile);
      yield put({
        type: 'profile/update',
        payload
      });
    }
  } catch (error) {
    // DO NOTHING
  }
};

export default function* watch () {
  yield takeLatest('app/init', init);
};
