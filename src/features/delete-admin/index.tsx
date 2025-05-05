import Icon from '@/shared/ui/icon';
import { useDeleteAdminSubmit } from './api/submit';
import { User } from '@/shared/api';

export const DeleteAdmin = ({ admin }: { admin: User }) => {
  const onSubmit = useDeleteAdminSubmit(admin);
  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};
