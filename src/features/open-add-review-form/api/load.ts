import { getFullName } from '@/entity/user';
import { api } from '@/shared/api';

export const loadTeachers = async (search: string) => {
  const { data } = await api.teacher.getAll(search, 1);

  return data.map((user) => ({
    value: user.id,
    label: getFullName(user),
  }));
};
