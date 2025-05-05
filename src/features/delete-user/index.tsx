import Icon from '@/shared/ui/icon';
import { useDeleteUserSubmit } from './api/submit';
import { User } from '@/shared/api';

export const DeleteUser = ({ user }: { user: User }) => {
  const onSubmit = useDeleteUserSubmit(user);
  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};
