import { PlaceCard } from './place-card.tsx';
import {Offer} from '../internal/types/offer-type.tsx';
import {Cities} from '../const.ts';
import {AppRouteEnum} from '../internal/enums/app-route-enum.tsx';

type FavoritesListProps = {
  favorites: Offer[];
};

export function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <section className="favorites">
      <ul className="favorites__list">
        {Cities.map((city) => {
          const filteredByCurrentCity = favorites.filter((offer) => offer.city.name === city.name);
          if (filteredByCurrentCity.length !== 0) {
            return (
              <li className="favorites__locations-items" key={city.name}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href={AppRouteEnum.MainPage}>
                      <span>{city.name}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {filteredByCurrentCity.map((favorite) => (
                    <PlaceCard key={favorite.id} offer={favorite} type={'default'} />
                  ))}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
