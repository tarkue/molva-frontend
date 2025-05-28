import { useOpenRegister } from '@/features/open-register-form';
import Button from '@/shared/ui/button';
import { ForgotPassword } from './forgot-passoword';
export const SignInFormButtons = () => {
  const openRegister = useOpenRegister();

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-4 justify-center items-center w-full">
        <Button type="submit" variant="primary" size="medium">
          Войти
        </Button>
        <span className="text-caption text-contrast w-[135px] text-center">
          Нет аккаунта?
          <a className="text-dark-blue" onClick={openRegister}>
            Зарегистрируйтесь
          </a>
        </span>
      </div>
      <ForgotPassword />
    </div>
  );
};
