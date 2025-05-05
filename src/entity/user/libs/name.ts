import { Teacher, User } from '@/shared/api';

export const getFullName = (user: User | Teacher) => {
  return `${user.first_name} ${user.surname} ${user.patronymic}`;
};
