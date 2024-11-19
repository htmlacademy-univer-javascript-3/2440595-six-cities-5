import {CityProps} from '../pages/city-props.tsx';

export const City = ({name, cityChangeName}: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => cityChangeName(name)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{name}</span>
    </a>
  </li>
);
