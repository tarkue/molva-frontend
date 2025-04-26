import { UserForms } from '@/entity/user';
import { useModals } from '@/shared/ui/modal';
import { SecondPartFields } from '../ui/fields';
import { ContinueButton } from '../ui/buttons';
import { useRecoveryPasswordSubmitSecondPart } from '../api/second-part';

export const useOpenRecoveryPasswordSecondPart = () => {
  const form = UserForms.useRecoveryPasswordFormSecondPart();
  const onSubmit = useRecoveryPasswordSubmitSecondPart();
  const { addModal, clear } = useModals();

  return () => {
    clear();
    addModal({
      form: form,
      className: 'w-[400px]',
      title: 'Восстановление пароля',
      onSubmit: onSubmit,
      fields: <SecondPartFields form={form} />,
      buttons: <ContinueButton />,
    });
  };
};
