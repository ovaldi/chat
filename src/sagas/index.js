// The global saga

import { all, call } from 'redux-saga/effects';

export default function* root () {
  yield all([
    call(require('./app').default),
    call(require('./navi').default),
    call(require('./toast').default)
  ]);
};
