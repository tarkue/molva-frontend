import { OnlyId } from './shared.dto';

export interface User extends OnlyId {
  first_name: string;
  surname: string;
  patronymic?: string;
  password: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'SUPERUSER';
}

export type SafeUser = Omit<User, 'password'>;
export type SignInDTO = Pick<User, 'email' | 'password'>;
export type RegisterDTO = Omit<User, 'id'>;
export type UserUpdateDTO = Partial<User>;
export type UserUpdatePasswordDTO = Pick<User, 'id' | 'password'> & {
  old_password: string;
};
