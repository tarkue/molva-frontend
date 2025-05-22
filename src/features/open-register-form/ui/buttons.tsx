import { useOpenSignIn } from '@/features/open-sign-in-form';
import Button from '@/shared/ui/button';

export const RegisterFormButtons = () => {
  const openSignIn = useOpenSignIn();
  return (
    <div className="flex gap-3 justify-between items-center flex-col sm:flex-row w-full">
      <Button
        type="submit"
        variant="primary"
        size="medium"
        className="sm:w-auto w-full"
      >
        Регистрация
      </Button>
      <span className="text-caption text-contrast text-center">
        Уже есть аккаунт?
        <a className="block text-dark-blue" onClick={openSignIn}>
          Войти
        </a>
      </span>
    </div>
  );
};
