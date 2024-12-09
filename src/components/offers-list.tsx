import {PlaceCard} from './place-card.tsx';
import {Offer} from '../internal/types/offer-type.tsx';

type OffersListProps = {
  offers: Offer[];
  listType: 'default' | 'near';
  setActiveOfferId(id:number): void;
}

export function OffersList({ offers, listType, setActiveOfferId }: OffersListProps) {
  const baseClass = 'places__list';
  const additionalClass = listType === 'default' ? 'cities__places-list tabs__content' : 'near-places__list';
  return (
    <div className={`${additionalClass} ${baseClass}`}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} type={listType} setActiveOfferId={setActiveOfferId}/>
      ))}
    </div>
  );
}
