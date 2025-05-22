import { UserForms } from '@/entity/user';
import { useForgotPasswordSubmitFirstPart } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { ContinueButton } from './ui/buttons';
import { ForgotPasswordFields } from './ui/fields';

export const useOpenForgotPasswordForm = () => {
  const form = UserForms.useForgotPasswordFormFirstPart();
  const onSubmit = useForgotPasswordSubmitFirstPart();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[400px]',
      title: 'Восстановление пароля',
      onSubmit: onSubmit,
      fields: <ForgotPasswordFields form={form} />,
      buttons: <ContinueButton />,
    });
  };
};
