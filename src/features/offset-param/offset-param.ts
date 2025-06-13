import { useSearchParam } from "@/shared/models/search-params";

export const useOffsetParam = () => useSearchParam('offset', {
    validator: (el) => Number(el),
    default: 1,
  });
