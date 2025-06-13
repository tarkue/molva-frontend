import { SortOrder } from "@/shared/api";
import { useSearchParam } from "@/shared/models/search-params";

export const useOrderParam = () => useSearchParam<SortOrder>('order', {
    default: 'desc',
  });