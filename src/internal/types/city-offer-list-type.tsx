import {City} from './city.tsx';
import {Offer} from './offer-type.tsx';
import {SortOption} from '../enums/sort-option-enum.tsx';

export type CityOfferListType = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
}
