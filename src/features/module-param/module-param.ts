import { useSearchParam } from '@/shared/models/search-params';

export const useModuleParam = () =>
  useSearchParam<string | undefined>('module', {
    default: undefined,
  });
