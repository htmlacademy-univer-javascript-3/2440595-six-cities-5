import {OffersListProps} from '../props/offers-list-props.tsx';
import {PlaceCard} from './place-card.tsx';

export function OffersList({ offers }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
