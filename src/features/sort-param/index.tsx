import { SortBy } from '@/shared/api';
import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { useSearchParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

const SortPair = enumToPair(SortBy);

export const SortParam = () => {
  const [sort, setSort] = useSearchParam<keyof typeof SortBy>(
    'sort',
    {
      default: 'rating',
    },
  );
  return (
    <fieldset className="w-full lg:w-[235px]">
      <Select
        placeholder="Сортировать по"
        aria-label="Выбрать параметр сортировки"
        options={SortPair}
        defaultInputValue={getValue(SortBy, sort)}
        onChange={(e) => setSort(e?.value as keyof typeof SortBy)}
      />
    </fieldset>
  );
};
