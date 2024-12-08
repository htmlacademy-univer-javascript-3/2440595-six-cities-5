import {City} from './city.tsx';
import {Offer} from './offer-type.tsx';
import {SortOption} from '../enums/sort-option-enum.tsx';
import {AuthStatus} from '../enums/auth-status-enum.tsx';

export type CityOfferListType = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  authStatus: AuthStatus;
  isFetchOffers: boolean;
  error: string | null;
}
