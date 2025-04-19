import { useOpenSignIn } from '@/features/sign-in-form';
import Button from '@/shared/ui/button';

export const RegisterFormButtons = () => {
  const openSignIn = useOpenSignIn();
  return (
    <>
      <Button type="submit" variant="primary" size="medium">
        Регистрация
      </Button>
      <span className="text-caption text-contrast w-[135px] text-center">
        Уже есть аккаунт?
        <a className="text-dark-blue" onClick={openSignIn}>
          Войти
        </a>
      </span>
    </>
  );
};
