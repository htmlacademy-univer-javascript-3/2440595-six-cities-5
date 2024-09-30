import {PlaceType} from '../internal/enums/PlaceTypeEnum.tsx';

export type PlaceCardProps = {
  image: string;
  price: number;
  description: string;
  rating: string;
  type: PlaceType;
  isPremium?: boolean;
  isInBookmarks?: boolean;
}
