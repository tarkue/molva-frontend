import { UserForms } from '@/entity/user';
import { useChangePasswordSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { ChangePasswordFormButtons } from './ui/buttons';
import { ChangePasswordFormFields } from './ui/fields';

export const useOpenChangePassword = () => {
  const form = UserForms.useChangePasswordForm();
  const onSubmit = useChangePasswordSubmit();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[343px]',
      title: 'Сменить пароль',
      onSubmit: onSubmit,
      fields: <ChangePasswordFormFields form={form} />,
      buttons: <ChangePasswordFormButtons />,
    });
  };
};
