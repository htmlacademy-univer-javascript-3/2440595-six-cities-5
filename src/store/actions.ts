import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../internal/types/offer-type.tsx';
import {CityName} from '../internal/enums/city-name-enum.tsx';

export const fillCityOffersList = createAction<Offer[]>('FillCityOfferList');
export const changeCity = createAction<CityName>('ChangeCity');
