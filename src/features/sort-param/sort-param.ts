import { SortBy } from "@/shared/api";
import { useSearchParam } from "@/shared/models/search-params";

export const useSortParam = () => useSearchParam<keyof typeof SortBy>(
    'sort',
    {
      default: 'rating',
    },
  );