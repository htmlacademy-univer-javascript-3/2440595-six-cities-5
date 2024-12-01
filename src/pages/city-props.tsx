import {CityName} from '../internal/enums/city-name-enum.tsx';

export type CityProps = {
  name: CityName;
  cityChangeName: (city: CityName) => void;
};
