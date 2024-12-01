import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from '../../pages/main-page.tsx';
import { LoginPage } from '../../pages/login-page.tsx';
import { OfferPage } from '../../pages/offer-page.tsx';
import { NotFoundPage } from '../../pages/not-found-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutesProps } from '../../props/app-routes-props.tsx';
import { Authorization } from '../authorization.tsx';
import { FavoritesPage } from '../../pages/favorites-page.tsx';
import { offers } from '../../mocks/offers.ts';
import { AppProps } from '../../props/app-props.tsx';

export function App({reviews}: AppProps): React.JSX.Element {
  const favorites = offers.filter((offer) => offer.isFavorite);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutesProps.MainPage} element={<MainPage favorites={favorites} />} />
          <Route path={AppRoutesProps.LoginPage} element={<LoginPage />} />
          <Route path={AppRoutesProps.FavoritesPage}
            element={
              <Authorization isAuthorized={false}>
                <FavoritesPage favorites={favorites}/>
              </Authorization>
            }
          />
          <Route path={AppRoutesProps.OfferPage} element={<OfferPage reviews={reviews}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
