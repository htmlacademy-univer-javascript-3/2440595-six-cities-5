import {Offer} from '../internal/types/offer-type.tsx';
import {City} from '../internal/types/city.tsx';

export type MapProps = {
  city: City;
  points: Offer[];
  activeOfferId: number;
  isMainPage: boolean;
};
