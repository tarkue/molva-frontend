import { getFullName } from '@/entity/user';
import { api } from '@/shared/api';

export const TeachersLoad =
  (discipline_id: string) => async (name: string) =>
    (
      await api.teacher.getByDiscipline(discipline_id, {
        name_search: name,
      })
    ).data.map((user) => ({
      value: user.id,
      label: getFullName(user),
    }));
