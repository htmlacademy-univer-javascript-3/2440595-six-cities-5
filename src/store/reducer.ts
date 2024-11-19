import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {changeCity, fillCityOffersList} from './actions.ts';
import {CityName} from '../internal/enums/city-name-enum.tsx';
import {CityOfferListType} from '../internal/types/city-offer-list-type.tsx';

export const InitialCityState: CityOfferListType = {
  city: {
    name: CityName.Paris,
    location: {
      lat: 48.8566,
      lon: 2.3522,
      zoom: 10
    }
  },
  offers: offers,
};

export const reducer = createReducer(InitialCityState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload;
    })
    .addCase(fillCityOffersList, (state, action) => {
      state.offers = action.payload;
    });
});
