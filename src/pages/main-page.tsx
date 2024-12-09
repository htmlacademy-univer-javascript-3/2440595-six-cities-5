import React from 'react';
import { OffersList } from '../components/offers-list.tsx';
import { Map } from '../components/map.tsx';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { Offer } from '../internal/types/offer-type.tsx';
import { CityList } from '../components/city-list.tsx';
import { Cities } from '../const.ts';
import { SortOption } from '../internal/enums/sort-option-enum.tsx';
import { SortOptions } from '../components/sort-options.tsx';
import { setSortOption } from '../store/actions.ts';
import {Header} from '../components/header.tsx';

export function MainPage(): React.JSX.Element {
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
      <Header/>
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
