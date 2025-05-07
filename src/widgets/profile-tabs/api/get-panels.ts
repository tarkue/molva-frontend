import { AdminPanel } from '@/entity/admin';
import { SuperAdminPanel } from '@/entity/super-admin';
import { UserPanel, useUser } from '@/entity/user';
import { enumToPair } from '@/shared/lib/enum-utils';
import { useMemo } from 'react';

export const getPanels = () => {
  const { user } = useUser();

  const panels = useMemo(() => {
    switch (user?.role) {
      case 'ADMIN':
        return AdminPanel;
      case 'SUPER-ADMIN':
        return SuperAdminPanel;
      case 'USER':
        return UserPanel;
      default:
        return undefined;
    }
  }, [user?.role]);

  if (panels) {
    return enumToPair(panels);
  } else {
    return [];
  }
};
