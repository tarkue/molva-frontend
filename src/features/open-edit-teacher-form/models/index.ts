import { Teacher } from '@/shared/api';
import { Pair } from '@/shared/ui/select/pair';

export const getDefaultDisciplines = (
  teacher: Teacher,
): Pair<string, string>[] =>
  teacher.disciplines.map((el) => ({
    label: el.name,
    value: el.id,
  }));
