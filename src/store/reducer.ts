import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {changeCity, fillCityOffersList, setSortOption} from './actions.ts';
import {CityName} from '../internal/enums/city-name-enum.tsx';
import {CityOfferListType} from '../internal/types/city-offer-list-type.tsx';
import {SortOption} from '../internal/enums/sort-option-enum.tsx';
import {Cities} from '../const.ts';

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
  sortOption: SortOption.Popular
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
    });
});
