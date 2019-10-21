// The global reducer

import { combineReducers } from 'redux';

export default function createReducers (asyncReducers) {
  return combineReducers({
    global: require('./global').default,
    friend: require('./friend').default,
    router: require('./router').default,
    profile: require('./profile').default,
    ...asyncReducers
  });
};
