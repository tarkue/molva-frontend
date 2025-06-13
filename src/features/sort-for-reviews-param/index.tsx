import { SortForReviews } from '@/shared/api';
import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { Select } from '@/shared/ui/select';
import { useSortForReviews } from './sort-for-reviews-param';

const SortPair = enumToPair(SortForReviews);

const SortForReviewsParam = () => {
  const [sort, setSort] = useSortForReviews();
  return (
    <fieldset className="sm:w-[200px] w-full">
      <Select
        placeholder="Сортировать по"
        options={SortPair}
        defaultInputValue={getValue(SortForReviews, sort)}
        onChange={(e) =>
          setSort(e?.value as keyof typeof SortForReviews)
        }
      />
    </fieldset>
  );
};

export { SortForReviewsParam, useSortForReviews };
