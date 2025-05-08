import Icon from '@/shared/ui/icon';
import { useDeleteUserSubmit } from './api/submit';
import { User } from '@/shared/api';
import Button from '@/shared/ui/button';

export const DeleteUser = ({ user }: { user: User }) => {
  const onSubmit = useDeleteUserSubmit(user);
  return (
    <Button variant="icon" onClick={onSubmit}>
      <Icon glyph="trash" stroke="red" />
    </Button>
  );
};
