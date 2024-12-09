import {CityName} from '../internal/enums/city-name-enum.tsx';

type CityProps = {
  name: CityName;
  cityChangeName: (city: CityName) => void;
};

export const City = ({name, cityChangeName}: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => cityChangeName(name)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{name}</span>
    </a>
  </li>
);
