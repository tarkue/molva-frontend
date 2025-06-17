import { useOpenForgotPasswordForm } from '../hooks/open-forgot-password-form';
import { useModals } from '@/shared/ui/modal';

export const ForgotPassword = () => {
  const openForgotPasswordForm = useOpenForgotPasswordForm();
  const { clear } = useModals();

  const openForgotPassword = () => {
    clear();
    openForgotPasswordForm();
  };

  return (
    <a
      className="absolute -bottom-14 left-0 right-0 m-auto text-caption text-dark-blue max-w-[343px] w-full text-center p-2 py-3 hover:underline transition-colors cursor-pointer rounded-xl"
      onClick={openForgotPassword}
    >
      Забыли пароль?
    </a>
  );
};
