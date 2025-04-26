import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { useParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

enum Sort {
  newerGrade = 'По свежести оценок',
  reviewCount = 'По количеству отзывов',
  rating = 'По рейтингу',
}

const SortPair = enumToPair(Sort);

export const SortParam = () => {
  const [sort, setSort] = useParam<string>('sort', {
    default: 'rating',
    validator: (el?: string) => el as Sort,
  });
  return (
    <fieldset className="w-[235px]">
      <Select
        placeholder="Сортировать по"
        options={SortPair}
        defaultInputValue={getValue(Sort, sort)}
        onChange={(e) => setSort(e?.value as Sort)}
      />
    </fieldset>
  );
};
