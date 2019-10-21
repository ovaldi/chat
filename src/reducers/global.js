import store from '@/utils/store';
import reducer from '@/misc/reducer';
import { combineReducers } from 'redux';

const sms = reducer({
  'global/sms': (state, action) => {
    store.set('sms.timestamp', action.payload);
    return action.payload;
  }
}, parseInt(store.get('sms.timestamp') || 0));

const loading = reducer({
  'global/loading': (state, action) => action.payload
}, false);

const gender = reducer({
  'global/gender': (state, action) => {
    store.set('global.gender', action.payload);
    return action.payload;
  }
}, store.get('global.gender') || '');

export default combineReducers({
  sms,
  gender,
  loading
});
