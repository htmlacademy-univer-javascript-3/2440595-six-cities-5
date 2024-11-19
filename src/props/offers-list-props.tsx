import {Offer} from '../internal/types/offer-type.tsx';

export type OffersListProps = {
  offers: Offer[];
  listType: 'default' | 'near';
  setActiveOfferId(id:number): void;
}
