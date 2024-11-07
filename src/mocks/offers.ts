import { Offer } from '../internal/types/offer-type.tsx';
import { PlaceType } from '../internal/enums/place-type-enum.tsx';

export const offers: Offer[] = [
  {
    id: 111111,
    title: 'Title 1',
    rating: 5,
    type: PlaceType.Room,
    price: 5000,
    imageUrl: 'img/apartment-01.jpg',
    isPremium: true,
    isBookmarked: true,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3909553943508,
        lon: 4.85309666406198,
        zoom: 100
      },
    },
  },
  {
    id: 222222,
    title: 'Title 2',
    rating: 4,
    type: PlaceType.Apartment,
    price: 5000,
    imageUrl: 'img/apartment-02.jpg',
    isPremium: true,
    isBookmarked: true,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3609553943508,
        lon: 4.85309666406198,
        zoom: 100
      },
    },
  },
  {
    id: 333333,
    title: 'Title 3',
    rating: 3,
    type: PlaceType.Hotel,
    price: 5000,
    imageUrl: 'img/apartment-03.jpg',
    isPremium: true,
    isBookmarked: true,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3909553943508,
        lon: 4.929309666406198,
        zoom: 100
      },
    },
  },
  {
    id: 444444,
    title: 'Title 4',
    rating: 5,
    type: PlaceType.House,
    price: 5000,
    imageUrl: 'img/apartment-01.jpg',
    isPremium: true,
    isBookmarked: true,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3809553943508,
        lon: 4.939309666406198,
        zoom: 100
      },
    },
  },
];
