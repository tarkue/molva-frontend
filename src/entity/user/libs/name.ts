import { User } from '@/shared/api';

export const getName = (user: User) => {
  return `${user.name} ${user.surname} ${user.patronymic}`;
};
