import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer.ts';
import { createAPI } from '../api/api.ts';
import {redirectMiddleware} from './middlewares/redirect.ts';

export const api = createAPI();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
