import {CityName} from './internal/enums/city-name-enum.tsx';

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const API_TOKEN_KEY = 'six-cities-token';
export const API_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const API_TIMEOUT = 5000;

export const Cities = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.856663,
      longitude: 2.351556,
      zoom: 10
    }
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.930779,
      longitude: 6.938399,
      zoom: 10
    }
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846697,
      longitude: 4.352544,
      zoom: 10
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 10
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550688,
      longitude:  9.992895,
      zoom: 10
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.230569,
      longitude:  6.787428,
      zoom: 10
    }
  },
];
