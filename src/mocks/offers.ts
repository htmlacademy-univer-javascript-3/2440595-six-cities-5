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
  },
];
