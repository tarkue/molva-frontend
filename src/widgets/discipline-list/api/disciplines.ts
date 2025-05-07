import { api, Format, SortBy, SortOrder } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetDisciplines = () => {
  const [sortOrder] = useSearchParam<SortOrder>('order');
  const [format] = useSearchParam<Format>('format');
  const [module] = useSearchParam<string>('module');
  const [offset] = useSearchParam<string>('offset');
  const [search] = useSearchParam<string>('search');
  const [sort] = useSearchParam<keyof typeof SortBy>('sort');

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      'disciplines',
      sortOrder,
      format,
      module,
      offset,
      search,
      sort,
    ],
    queryFn: () =>
      api.discipline.search({
        name_search: search,
        module_search: module,
        format_filter: format,
        sort_by: sort,
        sort_order: sortOrder,
      }),
  });

  return { data, isLoading, isError };
};
