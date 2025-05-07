import { SortBy } from '@/shared/api';
import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { useSearchParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

const SortPair = enumToPair(SortBy);

export const SortParam = () => {
  const [sort, setSort] = useSearchParam<string>('sort', {
    default: 'rating',
    validator: (el?: string) => el as SortBy,
  });
  return (
    <fieldset className="w-[235px]">
      <Select
        placeholder="Сортировать по"
        options={SortPair}
        defaultInputValue={getValue(SortBy, sort)}
        onChange={(e) => setSort(e?.value as SortBy)}
      />
    </fieldset>
  );
};
