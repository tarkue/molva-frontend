import { useOpenChangePassword } from '@/features/open-change-password-form';
import Button from '@/shared/ui/button';

export const ChangePassword = () => {
  const open = useOpenChangePassword();

  return (
    <Button variant="primary" size="medium" onClick={open}>
      Сменить пароль
    </Button>
  );
};
