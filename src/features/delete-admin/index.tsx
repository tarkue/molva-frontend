import Icon from '@/shared/ui/icon';
import { useDeleteAdminSubmit } from './api/submit';
import { User } from '@/shared/api';
import Button from '@/shared/ui/button';

export const DeleteAdmin = ({ admin }: { admin: User }) => {
  const onSubmit = useDeleteAdminSubmit(admin);
  return (
    <Button variant="icon" onClick={onSubmit}>
      <Icon glyph="trash" stroke="red" />
    </Button>
  );
};
