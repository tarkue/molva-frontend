import { UserForms } from '@/entity/user';
import { useRecoveryPasswordSubmitFirstPart } from './api/first-part';
import { useModals } from '@/shared/ui/modal';
import { ContinueButton } from './ui/buttons';
import { FirstPartFields } from './ui/fields';

export const useOpenRecoveryPasswordForm = () => {
  const form = UserForms.useRecoveryPasswordFormFirstPart();
  const onSubmit = useRecoveryPasswordSubmitFirstPart();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'w-[400px]',
      title: 'Восстановление пароля',
      onSubmit: onSubmit,
      fields: <FirstPartFields form={form} />,
      buttons: <ContinueButton />,
    });
  };
};
