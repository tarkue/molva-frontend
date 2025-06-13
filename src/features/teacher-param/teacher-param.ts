import { useSearchParam } from '@/shared/models/search-params';

export const useTeacherParam = () =>
  useSearchParam<string | undefined>('teacher_id');
