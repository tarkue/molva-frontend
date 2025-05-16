import { useDeleteAdminSubmit } from './api/submit';
import { User } from '@/shared/api';
import { useOpenConfirmRemoveForm } from '../open-confirm-remove';
import { getFullName } from '@/entity/user';
import { DeleteButton } from '@/shared/ui/delete-button';

export const DeleteAdmin = ({ admin }: { admin: User }) => {
  const onSubmit = useDeleteAdminSubmit(admin);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: `Вы уверены, что хотите удалить из администраторов ${getFullName(admin)}?`,
  });

  return <DeleteButton onClick={open} />;
};
