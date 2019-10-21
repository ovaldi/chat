import saga from '@/sagas';
import history from '@/misc/history';
import createReducers from '@/reducers';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import routerMiddleware from '@/middlewares/router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore (initialState) {
  let sagaTask = null;
  let asyncSagas = {};
  let asyncReducers = {};

  const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
      console.log(error);
      const nextSaga = require('@/sagas').default;

      if (sagaTask) {
        sagaTask.cancel();
      }

      sagaTask = sagaMiddleware.run(nextSaga);
    }
  });

  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    createReducers(),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history), createLogger())
    )
  );

  sagaTask = sagaMiddleware.run(saga);
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('@/reducers', () => {
      const nextRootReducer = require('@/reducers').default;
      store.replaceReducer(nextRootReducer());
    });

    module.hot.accept('@/sagas', () => {
      const nextSaga = require('@/sagas').default;
      sagaTask.cancel();
      sagaTask = sagaMiddleware.run(nextSaga);
    });
  }

  store.injectReducer = (key, val) => {
    if (!asyncReducers[key]) {
      asyncReducers[key] = val;
      store.replaceReducer(createReducers(asyncReducers));
    }
  };

  store.injectSaga = (key, val) => {
    if (!asyncSagas[key]) {
      asyncSagas[key] = sagaMiddleware.run(val);
    }
  };

  return store;
}
