import { UserForms } from '@/entity/user';
import { useSignInSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { SignInFormButtons } from './ui/buttons';
import { SignInFormFields } from './ui/fields';

export const useOpenSignIn = () => {
  const form = UserForms.useSignInForm();
  const onSubmit = useSignInSubmit();
  const { addModal, clear } = useModals();

  return () => {
    clear();
    addModal({
      form: form,
      className: 'max-w-[343px]',
      title: 'Вход',
      onSubmit: onSubmit,
      fields: <SignInFormFields form={form} />,
      buttons: <SignInFormButtons />,
    });
  };
};
