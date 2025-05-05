import { UserUpdateCard } from '@/entity/user';
import { DeleteUser } from '@/features/delete-user';
import { User } from '@/shared/api';

export const UserCard = ({ user }: { user: User }) => (
  <UserUpdateCard user={user} actions={<DeleteUser user={user} />} />
);
