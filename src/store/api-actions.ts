import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {fetchOffers, redirectToRoute, setAuthStatus, setError} from './actions.ts';
import {APIRoute} from '../internal/enums/api-route-enum.tsx';
import {setIsFetchOffers} from './actions.ts';
import {Offer} from '../internal/types/offer-type.tsx';
import {store} from './index.ts';
import {AuthStatus} from '../internal/enums/auth-status-enum.tsx';
import {AuthInfo} from '../internal/types/auth-info.tsx';
import {UserAuthInfo} from '../internal/types/user-auth-info.tsx';
import {removeToken, setToken} from '../api/token.ts';
import {AppRouteEnum} from '../internal/enums/app-route-enum.tsx';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'getOffers',
  async (_, { dispatch, extra: api }) => {
    dispatch(setIsFetchOffers(true));
    try {
      const response = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(fetchOffers(response.data));
    } finally {
      dispatch(setIsFetchOffers(false));
    }
  }
);

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(setAuthStatus(AuthStatus.Auth));
  } catch {
    dispatch(setAuthStatus(AuthStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthInfo,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (payload, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserAuthInfo>(APIRoute.Login, payload);
  setToken(token);
  dispatch(setAuthStatus(AuthStatus.Auth));
  dispatch(redirectToRoute(AppRouteEnum.MainPage));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  removeToken();
  dispatch(setAuthStatus(AuthStatus.NoAuth));
  dispatch(redirectToRoute(AppRouteEnum.MainPage));
});

export const deleteError = createAsyncThunk(
  'deleteError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), 2000);
  }
);
