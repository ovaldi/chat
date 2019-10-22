import api from '@/api/friend';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* init () {
  try {
    const friends = yield call(api.list);
    yield put({
      type: 'friend/byid/update',
      payload: {
        friends
      }
    });
    yield put({
      type: 'friend/entities/update',
      payload: {
        friends
      }
    });
  } catch (error) {
    yield put({
      type: 'toast/failure',
      payload: error.message
    });
  }
};

export default function* watch () {
  yield takeLatest('pages/list/init', init);
};
