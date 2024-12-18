import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {MainPage} from '../../pages/main-page.tsx';
import {LoginPage} from '../../pages/login-page.tsx';
import {OfferPage} from '../../pages/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRouteEnum} from '../../internal/enums/app-route-enum.tsx';
import {Authorization} from '../authorization.tsx';
import {FavoritesPage} from '../../pages/favorites-page.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {Spinner} from '../spinner/spinner.tsx';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history/browser-history.ts';

export function App(): React.JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const isFetchOffers = useAppSelector((state) => state.isFetchOffers);

  if (isFetchOffers) {
    return <Spinner/>;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRouteEnum.MainPage} element={<MainPage />} />
          <Route path={AppRouteEnum.LoginPage} element={<LoginPage />} />
          <Route path={AppRouteEnum.FavoritesPage}
            element={
              <Authorization authStatus={authStatus}>
                <FavoritesPage/>
              </Authorization>
            }
          />
          <Route path={AppRouteEnum.OfferPage} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
