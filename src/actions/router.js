export const CALL_HISTORY_METHOD = 'CALL_HISTORY_METHOD';

function wrap (method) {
  return (...args) => ({
    type: CALL_HISTORY_METHOD,
    payload: { method, args }
  });
}

export const go = wrap('go');
export const push = wrap('push');
export const goBack = wrap('goBack');
export const replace = wrap('replace');
export const goForward = wrap('goForward');
export const change = payload => ({
  type: 'router/change',
  payload
});
