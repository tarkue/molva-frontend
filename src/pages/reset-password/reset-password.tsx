import { useOpenResetPasswordForm } from '@/features/open-reset-password-form';
import { useSearchParam } from '@/shared/models/search-params';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

export default function ResetPasswordPage() {
  const [token] = useSearchParam<string>('token');
  const open = useOpenResetPasswordForm();

  useEffect(() => {
    if (token && token !== '') {
      open();
    }
  }, [token]);

  return <Outlet />;
}
