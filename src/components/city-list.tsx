import {useAppDispatch} from '../store/hooks.ts';
import {changeCity} from '../store/actions.ts';
import {CityName} from '../internal/enums/city-name-enum.tsx';
import {CityListProps} from '../props/city-list-props.tsx';
import {City} from './city.tsx';

export function CityList({cities}: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.id}
          name={city.name}
          cityChangeName={handleCityChange}
        />
      ))}
    </ul>
  );
}
