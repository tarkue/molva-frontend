import { UserForms } from '@/entity/user';
import { useModals } from '@/shared/ui/modal';
import { SaveButton } from './ui/buttons';
import { ResetPasswordFields } from './ui/fields';
import { useResetPasswordSubmit } from './api/submit';

export const useOpenResetPasswordForm = () => {
  const form = UserForms.useResetPasswordForm();
  const onSubmit = useResetPasswordSubmit();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[400px]',
      title: 'Восстановление пароля',
      onSubmit: onSubmit,
      fields: <ResetPasswordFields form={form} />,
      buttons: <SaveButton />,
    });
  };
};
