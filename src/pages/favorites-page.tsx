import React from 'react';
import { FavoritesList } from '../components/favorites-list.tsx';
import {Header} from '../components/header.tsx';
import {useAppSelector} from '../store/hooks.ts';
import {Footer} from '../components/footer.tsx';

export function FavoritesPage(): React.JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList favorites={favoriteOffers} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
