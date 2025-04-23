import { useOpenRegister } from '@/features/open-register-form';
import Button from '@/shared/ui/button';

export const SignInFormButtons = () => {
  const openRegister = useOpenRegister();
  return (
    <>
      <Button type="submit" variant="primary" size="medium">
        Войти
      </Button>
      <span className="text-caption text-contrast w-[135px] text-center">
        Нет аккаунта?
        <a className="text-dark-blue" onClick={openRegister}>
          Зарегестрируйтесь
        </a>
      </span>
    </>
  );
};
