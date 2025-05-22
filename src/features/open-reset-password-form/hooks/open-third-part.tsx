import { UserForms } from '@/entity/user';
import { useModals } from '@/shared/ui/modal';
import { ThirdPartFields } from '../ui/fields';
import { SaveButton } from '../ui/buttons';
import { useRecoveryPasswordSubmit } from '../api/submit';

export const useOpenRecoveryPasswordThirdPart = () => {
  const form = UserForms.useResetPasswordForm();
  const onSubmit = useRecoveryPasswordSubmit();
  const { addModal, clear } = useModals();

  return () => {
    clear();
    addModal({
      form: form,
      className: 'w-[400px]',
      title: 'Сменить пароль',
      onSubmit: onSubmit,
      fields: <ThirdPartFields form={form} />,
      buttons: <SaveButton />,
    });
  };
};
