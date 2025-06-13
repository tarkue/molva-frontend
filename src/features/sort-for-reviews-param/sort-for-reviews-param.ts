import { SortForReviews } from "@/shared/api";
import { useSearchParam } from "@/shared/models/search-params";

export const useSortForReviews = () => useSearchParam<keyof typeof SortForReviews>(
    'sort',
    {
      default: 'date',
    },
  );