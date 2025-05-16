import { User } from '@/shared/api';

export type OnlyUserName = Pick<
  User,
  'first_name' | 'patronymic' | 'surname'
>;

export const getFullName = (user: OnlyUserName) => {
  return [
    user.surname,
    user.first_name,
    user.patronymic ? user.patronymic : '',
  ].join(' ');
};
