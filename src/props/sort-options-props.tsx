import { SortOption } from '../internal/enums/sort-option-enum.tsx';

export type SortOptionsProps = {
  onSortChange: (option: SortOption) => void;
}
