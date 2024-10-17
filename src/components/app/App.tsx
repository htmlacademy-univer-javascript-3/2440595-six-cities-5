import React from 'react';
import { MainPage } from '../../pages/MainPage.tsx';
import { LoginPage } from '../../pages/LoginPage.tsx';
import { OfferPage } from '../../pages/OfferPage.tsx';
import { NotFoundPage } from '../../pages/NotFoundPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageProps } from '../../props/MainPageProps.tsx';
import { AppRoutesProps } from '../../props/AppRoutesProps.tsx';
import { Authorization } from '../Authorization.tsx';
import { FavoritesPage } from '../../pages/FavoritesPage.tsx';

export function App({placeCount}: MainPageProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutesProps.MainPage} element={<MainPage placeCount={placeCount} />} />
        <Route path={AppRoutesProps.LoginPage} element={<LoginPage />} />
        <Route path={AppRoutesProps.FavoritesPage}
          element={
            <Authorization isAuthorized={false}>
              <FavoritesPage />
            </Authorization>
          }
        />
        <Route path={AppRoutesProps.OfferPage} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
