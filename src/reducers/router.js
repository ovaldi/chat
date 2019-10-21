import reducer from '@/misc/reducer';
import history from '@/misc/history';

const initialState = {
  method: 'INIT',
  location: history.location
};

export default reducer({
  'router/change': (state, action) => action.payload
}, initialState);
