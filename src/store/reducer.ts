import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  fetchOffers,
  fillCityOffersList, getOfferInfo, sendReview,
  setAuthStatus, setError,
  setIsFetchOffers,
  setSortOption
} from './actions.ts';
import {CityName} from '../internal/enums/city-name-enum.tsx';
import {CityOfferListType} from '../internal/types/city-offer-list-type.tsx';
import {SortOption} from '../internal/enums/sort-option-enum.tsx';
import {Cities} from '../const.ts';
import {AuthStatus} from '../internal/enums/auth-status-enum.tsx';

export const InitialCityState: CityOfferListType = {
  city: {
    name: CityName.Paris,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    }
  },
  offers: [],
  favoriteOffers: [],
  sortOption: SortOption.Popular,
  authStatus: AuthStatus.Unknown,
  isFetchOffers: false,
  error: null,
  currentOffer: {
    offerInfo: null,
    nearestOffers: [],
    reviews: [],
  },
};

export const reducer = createReducer(InitialCityState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload;
      const location = Cities.find((elem) => elem.name === state.city.name)?.location;
      if (location) {
        state.city.location = location;
      }
    })
    .addCase(fillCityOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, { payload }) => {
      state.sortOption = payload;
    })
    .addCase(fetchOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(getOfferInfo, (state, { payload }) => {
      state.currentOffer = { ...payload };
    })
    .addCase(sendReview, (state, { payload }) => {
      state.currentOffer.reviews = [...state.currentOffer.reviews, payload];
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setIsFetchOffers, (state, action) => {
      state.isFetchOffers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
