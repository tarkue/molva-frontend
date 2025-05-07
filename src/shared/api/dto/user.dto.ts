import { OnlyId } from './shared.dto';

export type Role = 'USER' | 'ADMIN' | 'SUPER-ADMIN';

export interface User extends OnlyId {
  first_name: string;
  surname: string;
  patronymic?: string;
  password: string;
  email: string;
  role: Role;
}

export type SafeUser = Omit<User, 'password'>;
export type SignInDTO = Pick<User, 'email' | 'password'>;
export type RegisterDTO = Omit<User, 'id' | 'role'>;
export type UserUpdateDTO = Omit<Partial<User>, 'role' | 'password'>;
export type UserUpdatePasswordDTO = OnlyId & {
  old_password: string;
  new_password: string;
};
