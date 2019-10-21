import reducer from '@/misc/reducer';
import { combineReducers } from 'redux';

const hasmore = reducer({
  'pages/chat/hasmore/update': (state, { payload }) => payload.hasmore
}, true);

const message = reducer({
  'pages/chat/message/update': (state, { payload }) => ({
    ...state,
    [payload.id]: payload.messages
  }),
  'pages/chat/message/append': (state, { payload }) => {
    const old = state[payload.id] || [];

    return {
      ...state,
      [payload.id]: [...old, ...payload.messages]
    };
  }
}, {});

export default combineReducers({
  hasmore,
  message
});
