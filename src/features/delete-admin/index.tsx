import Icon from '@/shared/ui/icon';
import { useDeleteAdminSubmit } from './api/submit';
import { User } from '@/shared/api';
import Button from '@/shared/ui/button';
import { useOpenConfirmRemoveForm } from '../open-confirm-remove';
import { getFullName } from '@/entity/user';

export const DeleteAdmin = ({ admin }: { admin: User }) => {
  const onSubmit = useDeleteAdminSubmit(admin);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: `Вы уверены, что хотите удалить из администраторов ${getFullName(admin)}?`,
  });
  return (
    <Button variant="icon" onClick={open}>
      <Icon glyph="trash" stroke="red" />
    </Button>
  );
};
