import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {MainPage} from '../../pages/main-page.tsx';
import {LoginPage} from '../../pages/login-page.tsx';
import {OfferPage} from '../../pages/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutesProps} from '../../props/app-routes-props.tsx';
import {Authorization} from '../authorization.tsx';
import {FavoritesPage} from '../../pages/favorites-page.tsx';
import {AppProps} from '../../props/app-props.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {Spinner} from '../spinner/spinner.tsx';

export function App({reviews}: AppProps): React.JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const authStatus = useAppSelector((state) => state.authStatus);
  const isFetchOffers = useAppSelector((state) => state.isFetchOffers);

  if (isFetchOffers) {
    return <Spinner/>;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutesProps.MainPage} element={<MainPage favorites={offers} />} />
          <Route path={AppRoutesProps.LoginPage} element={<LoginPage />} />
          <Route path={AppRoutesProps.FavoritesPage}
            element={
              <Authorization authStatus={authStatus}>
                <FavoritesPage favorites={offers}/>
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
