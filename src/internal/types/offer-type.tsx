import { PlaceType } from '../enums/place-type-enum.tsx';
import { CityName } from '../enums/city-name-enum.tsx';

export type Offer = {
  id: number;
  title: string;
  rating: number;
  type: PlaceType;
  price: number;
  imageUrl: string;
  isPremium: boolean;
  isBookmarked: boolean;
  isFavorite: boolean;
  city: {
    name: CityName;
    location: {
      lat: number;
      lon: number;
      zoom: number;
    };
  };
};
