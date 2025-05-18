import { SortForDiscipline } from '@/shared/api';
import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { useSearchParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

const SortPair = enumToPair(SortForDiscipline);

export const SortForDisciplineParam = () => {
  const [sort, setSort] = useSearchParam<
    keyof typeof SortForDiscipline
  >('sort', {
    default: 'date',
  });
  return (
    <fieldset className="sm:w-[200px] w-full">
      <Select
        placeholder="Сортировать по"
        options={SortPair}
        defaultInputValue={getValue(SortForDiscipline, sort)}
        onChange={(e) =>
          setSort(e?.value as keyof typeof SortForDiscipline)
        }
      />
    </fieldset>
  );
};
