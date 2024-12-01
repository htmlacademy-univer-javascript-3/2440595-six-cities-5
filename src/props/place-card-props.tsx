import {Offer} from '../internal/types/offer-type.tsx';

export type PlaceCardProps = {
  offer: Offer;
  type: 'default' | 'near';
  setActiveOfferId: (id: number) => void;
}
