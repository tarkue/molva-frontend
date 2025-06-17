import { UserForms } from '@/entity/user';
import { useModals } from '@/shared/ui/modal';
import { useRegisterSubmit } from './api/submit';
import { RegisterFormButtons } from './ui/buttons';
import { RegisterFormFields } from './ui/fields';

export const useOpenRegister = () => {
  const form = UserForms.useRegisterForm();
  const onSubmit = useRegisterSubmit(form);
  const { addModal, clear } = useModals();

  return () => {
    clear();
    addModal({
      form: form,
      className: 'max-w-[360px]',
      title: 'Регистрация',
      onSubmit: onSubmit,
      fields: <RegisterFormFields form={form} />,
      buttons: <RegisterFormButtons />,
    });
  };
};
