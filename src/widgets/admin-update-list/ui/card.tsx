import { UserUpdateCard } from '@/entity/user';
import { DeleteAdmin } from '@/features/delete-admin';
import { User } from '@/shared/api';

export const AdminUpdateCard = ({ admin }: { admin: User }) => {
  return (
    <UserUpdateCard
      user={admin}
      actions={<DeleteAdmin admin={admin} />}
    />
  );
};
