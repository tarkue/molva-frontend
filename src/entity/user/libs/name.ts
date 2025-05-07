import { User } from '@/shared/api';

export type OnlyUserName = Pick<
  User,
  'first_name' | 'patronymic' | 'surname'
>;

export const getFullName = (user: OnlyUserName) => {
  return `${user.first_name} ${user.surname} ${user.patronymic ? user.patronymic : ''}`;
};
