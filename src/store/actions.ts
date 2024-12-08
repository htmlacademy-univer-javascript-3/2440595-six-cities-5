import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../internal/types/offer-type.tsx';
import { CityName } from '../internal/enums/city-name-enum.tsx';
import { SortOption } from '../internal/enums/sort-option-enum.tsx';
import { AuthStatus } from '../internal/enums/auth-status-enum.tsx';

export const fillCityOffersList = createAction<Offer[]>('FillCityOfferList');
export const changeCity = createAction<CityName>('ChangeCity');
export const setSortOption = createAction<SortOption>('SetSortOption');
export const setAuthStatus = createAction<AuthStatus>('SetAuthStatus');
export const setError = createAction<string | null>('SetError');
export const fetchOffers = createAction<Offer[]>('FetchOffers');
export const setIsFetchOffers = createAction<boolean>('SetIsFetchOffers');
