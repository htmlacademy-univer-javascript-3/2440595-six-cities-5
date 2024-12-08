import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {fetchOffers, setError} from './actions.ts';
import {APIRoute} from '../internal/enums/api-route-enum.tsx';
import {setIsFetchOffers} from './actions.ts';
import {Offer} from '../internal/types/offer-type.tsx';
import {store} from './index.ts';

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

export const deleteError = createAsyncThunk(
  'deleteError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), 2000);
  }
);
