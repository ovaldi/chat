import { createSelector } from 'reselect';

export const uri = createSelector(
  state => state.router.location,
  location => location.pathname + location.search
);

export const search = createSelector(
  state => state.router.location,
  location => location.search
);

export const method = createSelector(
  state => state.router,
  router => router.method
);
