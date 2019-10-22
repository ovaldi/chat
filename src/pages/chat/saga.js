import friend from '@/api/friend';
import message from '@/api/message';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* init (action) {
  try {
    const limit = 20;
    const { id } = action.payload;

    yield all([
      call(function* () {
        const data = yield call(friend.get, id);
        yield put({
          type: 'friend/byid/append',
          payload: {
            friend: data
          }
        });
      }),
      call(function* () {
        const messages = yield call(message.list, { limit });
        yield put({
          type: 'pages/chat/message/update',
          payload: {
            id, messages
          }
        });
        yield put({
          type: 'pages/chat/hasmore/update',
          payload: {
            hasmore: messages.length >= limit
          }
        });
      })
    ]);
  } catch (error) {
    yield put({
      type: 'toast/failure',
      payload: error.message
    });
  }
};

export function* more (action) {
  // TODO: here to load more message
};

export default function* watch () {
  yield takeLatest('pages/chat/init', init);
  yield takeLatest('pages/chat/more', more);
};
