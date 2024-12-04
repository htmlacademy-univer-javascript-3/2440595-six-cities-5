import React from 'react';
import { MainPageProps } from '../props/main-page-props.tsx';
import { OffersList } from '../components/offers-list.tsx';
import { Map } from '../components/map.tsx';
import { Logo } from '../components/logo.tsx';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { Offer } from '../internal/types/offer-type.tsx';
import { CityList } from '../components/city-list.tsx';
import { Cities } from '../const.ts';
import { SortOption } from '../internal/enums/sort-option-enum.tsx';
import { SortOptions } from '../components/sort-options.tsx';
import { setSortOption } from '../store/actions.ts';

export function MainPage({favorites}: MainPageProps): React.JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(0);
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);
  const sortOption = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    switch (sortOption) {
      case SortOption.PriceLowToHigh:
        filteredOffers.sort((first, second) => first.price - second.price);
        break;
      case SortOption.PriceHighToLow:
        filteredOffers.sort((first, second) => second.price - first.price);
        break;
      case SortOption.TopRatedFirst:
        filteredOffers.sort((first, second) => second.rating - first.rating);
        break;
      default:
        break;
    }
    setCurrentCityOffers(filteredOffers);
  }, [city, offers, sortOption]);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${currentCityOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={Cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city.name}`}</b>
              <SortOptions
                onSortChange={(option: SortOption) => {
                  dispatch(setSortOption(option));
                }}
              />
              <OffersList offers={currentCityOffers} listType={'default'} setActiveOfferId={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={currentCityOffers} activeOfferId={activeOfferId} isMainPage/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
