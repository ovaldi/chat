import 'normalize.css';
import '@/less/index.module.less';
import App from '@/app';
import React from 'react';
import PropTypes from 'prop-types';
import history from '@/misc/history';
import createRoutes from '@/routes';
import { ReactReduxContext } from 'react-redux';
import Boundary from '@/components/boundary';
import ConnectedRouter from '@/components/connected-router';

const Root = () => {
  return (
    <Boundary>
      <ReactReduxContext.Consumer>
        {
          ({ store }) => {
            return (
              <ConnectedRouter store={ store } history={ history }>
                <App>
                {
                  createRoutes(store)
                }
                </App>
              </ConnectedRouter>
            );
          }
        }
      </ReactReduxContext.Consumer>
    </Boundary>
  );
};

export default Root;
