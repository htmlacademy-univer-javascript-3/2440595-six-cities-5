import React from 'react';
import { FavoritesList } from '../components/favorites-list.tsx';
import {Header} from '../components/header.tsx';
import {useAppSelector} from '../store/hooks.ts';
import {Footer} from '../components/footer.tsx';

export function FavoritesPage(): React.JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  if (!favoriteOffers.length) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">
                Favorites (empty)
              </h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">
                  Nothing yet saved.
                </b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList favorites={favoriteOffers}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
