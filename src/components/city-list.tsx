import {useAppDispatch} from '../store/hooks.ts';
import {changeCity} from '../store/actions.ts';
import {CityName} from '../internal/enums/city-name-enum.tsx';
import {City} from './city.tsx';

type CityListProps = {
  cities: { name: CityName; location: { longitude: number; latitude: number; zoom: number } }[];
};

export function CityList({cities}: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          cityChangeName={handleCityChange}
        />
      ))}
    </ul>
  );
}
