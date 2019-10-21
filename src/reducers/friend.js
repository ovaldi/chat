import reducer from '@/misc/reducer';
import { combineReducers } from 'redux';

const byid = reducer({
  'friend/byid/update': (state, { payload }) => {
    const next = {};
    payload.friends.forEach(it => {
      next[it.id] = it;
    });
    return next;
  },
  'friend/byid/append': (state, { payload }) => ({
    ...state,
    [payload.friend.id]: payload.friend
  })
}, {
  'raoh': {
    id: 'raoh',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLBp3KwcLnS4SSYTlwwdw1LDHeDrkz5sQUPn72HHjgtjHZiaJ1BrtMYJT39Vud1e1n4XZYnBy4tNuyOiaJ3vPzotUf5nLFq92FYu8/132',
    nickname: '滕泽秀行'
  }
  /*
  Id1: <Friend1>,
  Id2: <Friend2>,
  ... ...
  */
});

const entities = reducer({
  'friend/entities/update': (state, { payload }) => {
    return payload.friends.map(it => it.id);
  }
}, [
  /**
  raoh, mia, lili...
  **/
]);

export default combineReducers({
  byid,
  entities
});
