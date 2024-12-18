import { PlaceCard } from './place-card.tsx';
import {Offer} from '../internal/types/offer-type.tsx';

type FavoritesListProps = {
  favorites: Offer[];
};

export function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {favorites.map((favorite) => (
        <PlaceCard key={favorite.id} offer={favorite} type={'default'} />
      ))}
    </div>
  );
}
