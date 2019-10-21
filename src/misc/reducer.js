export default function (hash, init) {
  return function (state = init, action) {
    if (action.type && hash[action.type]) {
      return hash[action.type](state, action);
    }

    return state;
  };
};
