import { Logout } from '@/features/logout';
import { ChangePassword } from './change-password';

export const UserActions = () => (
  <div className="flex gap-3">
    <ChangePassword />
    <Logout />
  </div>
);
