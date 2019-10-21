import React from 'react';
import lazyload from '@/hoc/lazyload';
import authorize from '@/hoc/authorize';
import { Route, Redirect, Switch } from 'react-router-dom';

export default store => {
  return (
    <Switch>
      <Route
        exact
        path='/list'
        component={
          authorize(
            lazyload({
              store,
              loader: () => import('@/pages/list')
            })
          )
        }
      />
      <Route
        exact
        path='/chat/:id'
        component={
          authorize(
            lazyload({
              store,
              loader: () => import('@/pages/chat')
            })
          )
        }
      />
      <Route
        exact
        path='/login'
        component={
          lazyload({
            store,
            loader: () => import('@/pages/login')
          })
        }
      />
      <Route
        exact
        path='/me'
        component={
          authorize(
            lazyload({
              store,
              loader: () => import('@/pages/me')
            })
          )
        }
      />
      <Redirect to='/list'/>
    </Switch>
  );
};
