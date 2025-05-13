import { useOpenSignIn } from '@/features/open-sign-in-form';
import Button from '@/shared/ui/button';

export const RegisterFormButtons = () => {
  const openSignIn = useOpenSignIn();
  return (
    <div className="flex w-full gap-3 justify-between flex-row">
      <Button type="submit" variant="primary" size="medium">
        Регистрация
      </Button>
      <span className="text-caption text-contrast w-[135px] text-center">
        Уже есть аккаунт?
        <a className="text-dark-blue" onClick={openSignIn}>
          Войти
        </a>
      </span>
    </div>
  );
};
