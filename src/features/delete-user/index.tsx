import { getFullName } from '@/entity/user';
import { useDeleteUserSubmit } from './api/submit';
import { User } from '@/shared/api';
import { DeleteButton } from '@/shared/ui/delete-button';
import { useOpenConfirmRemoveForm } from '../open-confirm-remove';

export const DeleteUser = ({ user }: { user: User }) => {
  const onSubmit = useDeleteUserSubmit(user);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: `Вы уверены, что хотите удалить пользователя ${getFullName(user)}? Это действие нельзя будет отменить.`,
  });
  return <DeleteButton onClick={open} />;
};
