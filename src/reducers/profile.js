import reducer from '@/misc/reducer';

export default reducer({
  'profile/update': (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  }
}, null);
