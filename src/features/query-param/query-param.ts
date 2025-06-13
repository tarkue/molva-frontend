import { useSearchParam } from "@/shared/models/search-params";

export const useQueryParam = () => useSearchParam<string>('q', {
    default: '',
  });