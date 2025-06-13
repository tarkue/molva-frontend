import { Format } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';

export const useFormatParam = () =>
  useSearchParam<Format | undefined>('format', {
    default: undefined,
  });
