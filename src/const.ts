import {CityName} from './internal/enums/city-name-enum.tsx';

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const Cities = [
  {
    name: CityName.Paris,
    location: {
      lat: 48.856663,
      lon: 2.351556,
      zoom: 10
    }
  },
  {
    name: CityName.Cologne,
    location: {
      lat: 50.930779,
      lon: 6.938399,
      zoom: 10
    }
  },
  {
    name: CityName.Brussels,
    location: {
      lat: 50.846697,
      lon: 4.352544,
      zoom: 10
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      lat: 52.374,
      lon: 4.88969,
      zoom: 10
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      lat: 53.550688,
      lon:  9.992895,
      zoom: 10
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      lat: 51.230569,
      lon:  6.787428,
      zoom: 10
    }
  },
];
