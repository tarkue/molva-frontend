import { useFormatParam } from '@/features/format-param';
import { useModuleParam } from '@/features/module-param';
import { useOffsetParam } from '@/features/offset-param';
import { useOrderParam } from '@/features/order-param';
import { useQueryParam } from '@/features/query-param';
import { useSortParam } from '@/features/sort-param/sort-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetDisciplines = () => {
  const [sortOrder] = useOrderParam();
  const [format] = useFormatParam();
  const [module] = useModuleParam();
  const [offset] = useOffsetParam();
  const [query] = useQueryParam();
  const [sort] = useSortParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      'disciplines',
      sortOrder,
      format,
      module,
      offset,
      query,
      sort,
      refreshState,
    ],
    queryFn: () =>
      api.discipline.search({
        name_search: query,
        module_search: module,
        format_filter: format,
        sort_by: sort,
        sort_order: sortOrder,
      }),
  });

  return { data, isLoading, isError };
};
