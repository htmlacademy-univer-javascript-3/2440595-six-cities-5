import {CityName} from '../internal/enums/city-name-enum.tsx';

export type CityListProps = {
  cities: { name: CityName; location: { longitude: number; latitude: number; zoom: number } }[];
};
