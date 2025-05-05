import { api, Format } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetDisciplines = () => {
  const [desc] = useSearchParam<0 | 1>('desc');
  const [format] = useSearchParam<Format>('format');
  const [module] = useSearchParam<string>('module');
  const [offset] = useSearchParam<string>('offset');
  const [search] = useSearchParam<string>('search');
  const [sort] = useSearchParam<string>('sort');

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      'disciplines',
      desc,
      format,
      module,
      offset,
      search,
      sort,
    ],
    queryFn: () => api.discipline.getAll(),
  });

  return { data, isLoading, isError };
};
