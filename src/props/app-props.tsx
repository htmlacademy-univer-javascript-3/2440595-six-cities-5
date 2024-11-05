import {Offer} from '../internal/types/offer-type.tsx';

export type AppProps = {
  placeCount: number;
  offers: Offer[];
  favorites: Offer[];
}
