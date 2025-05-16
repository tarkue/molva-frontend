import { getFullName } from '@/entity/user';
import { api, Discipline } from '@/shared/api';

export const loadTeachers =
  (discipline: Discipline) => async (search: string) => {
    const { data } = await api.teacher.getByDiscipline(
      discipline.id,
      { search },
    );

    return data.map((user) => ({
      value: user.id,
      label: getFullName(user),
    }));
  };
