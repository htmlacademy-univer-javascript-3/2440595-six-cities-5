import {CityName} from '../internal/enums/city-name-enum.tsx';

export type CityListProps = {
  cities: { name: CityName; location: { lon: number; lat: number; zoom: number } }[];
};
