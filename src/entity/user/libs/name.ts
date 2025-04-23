import { User } from '../models/user';

export const getName = (user: User) => {
  return `${user.name} ${user.surname} ${user.patronymic}`;
};
