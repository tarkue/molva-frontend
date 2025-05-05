import { OnlyId } from './shared.dto';

export type Role = 'USER' | 'ADMIN' | 'SUPER-ADMIN';

export interface User extends OnlyId {
  first_name: string;
  surname: string;
  patronymic?: string;
  password: string;
  email: string;
  roles: [Role];
}

export type SafeUser = Omit<User, 'password'>;
export type SignInDTO = Pick<User, 'email' | 'password'>;
export type RegisterDTO = Omit<User, 'id' | 'roles'>;
export type UserUpdateDTO = Partial<User>;
export type UserUpdatePasswordDTO = Pick<User, 'id' | 'password'> & {
  old_password: string;
};
