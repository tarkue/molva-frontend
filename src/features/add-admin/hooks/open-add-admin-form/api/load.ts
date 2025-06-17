import { getFullName } from '@/entity/user';
import { api } from '@/shared/api';
import { Pair } from '@/shared/ui/select/pair';

export const loadUsers = async (
  search: string = '',
): Promise<Pair<string, string>[]> => {
  const { data } = await api.user.getAll(search, 1);
  return data.map((user) => ({
    value: user.id,
    label: getFullName(user),
  }));
};
