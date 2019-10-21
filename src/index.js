import '@/polyfill';
import React from 'react';
import Root from '@/root';
import FastClick from 'fastclick';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from '@/store/configureStore';

FastClick.attach(document.body);

const store = configureStore();
const render = Comp => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Comp/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/root', () => render(require('@/root').default));
}
