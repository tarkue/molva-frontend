import { api, Format } from '@/shared/api';
import { useParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetDisciplines = () => {
  const [desc] = useParam<0 | 1>('desc');
  const [format] = useParam<Format>('format');
  const [module] = useParam<string>('module');
  const [offset] = useParam<string>('offset');
  const [search] = useParam<string>('search');
  const [sort] = useParam<string>('sort');

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
