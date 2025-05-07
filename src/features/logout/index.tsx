import Button from '@/shared/ui/button';
import { useLogoutSubmit } from './api/logout';

export const Logout = () => {
  const onSubmit = useLogoutSubmit();
  return (
    <Button size="medium" onClick={onSubmit}>
      Выйти
    </Button>
  );
};
