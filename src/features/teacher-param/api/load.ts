import { getFullName } from '@/entity/user';
import { api } from '@/shared/api';
import { DEFAULT_VALUE } from '../models/default';

const CONCATED = [DEFAULT_VALUE];

const TeachersLoadList =
  (discipline_id: string) => async (name: string) =>
    (
      await api.teacher.getByDiscipline(discipline_id, {
        name_search: name,
      })
    ).data.map((user) => ({
      value: user.id,
      label: getFullName(user),
    }));

export const TeachersLoad =
  (discipline_id: string) => async (name: string) => {
    const data = await TeachersLoadList(discipline_id)(name);
    return name ? data : CONCATED.concat(data);
  };
