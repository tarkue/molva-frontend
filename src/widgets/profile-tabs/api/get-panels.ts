import { AdminPanel } from '@/entity/admin';
import { SuperUserPanel } from '@/entity/super-user';
import { UserPanel, useUser } from '@/entity/user';
import { useMemo } from 'react';

export const getPanels = () => {
  const { user } = useUser();

  const panels = useMemo(() => {
    switch (user?.role) {
      case 'ADMIN':
        return AdminPanel;
      case 'SUPERUSER':
        return SuperUserPanel;
      case 'USER':
        return UserPanel;
      default:
        return undefined;
    }
  }, [user?.role]);

  if (panels) {
    return Object.values(panels);
  } else {
    return [];
  }
};
