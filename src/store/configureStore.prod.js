import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import saga from '@/sagas';
import history from '@/misc/history';
import createReducers from '@/reducers';
import routerMiddleware from '@/middlewares/router';

export default function configureStore (initialState) {
  let asyncSagas = {};
  let asyncReducers = {};

  const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
      sagaMiddleware.run(saga);
      Raven.captureException(error);
    }
  });
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    createReducers(),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(saga);

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
