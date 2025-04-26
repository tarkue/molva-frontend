import { User } from '@/shared/api';

export const getName = (user: User) => {
  return `${user.first_name} ${user.surname} ${user.patronymic}`;
};
