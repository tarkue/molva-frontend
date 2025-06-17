import { api } from '@/shared/api';

export const loadDisciplines = async (search: string) => {
  const { data } = await api.discipline.search({
    name_search: search,
  });

  return data.map((discipline) => ({
    value: discipline.id,
    label: discipline.name,
  }));
};
