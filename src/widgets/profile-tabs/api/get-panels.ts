import { AdminPanel } from '@/entity/admin';
import { SuperAdminPanel } from '@/entity/super-admin';
import { UserPanel, useUser } from '@/entity/user';
import { enumToPair } from '@/shared/lib/enum-utils';
import { useMemo } from 'react';

export const getPanels = () => {
  const { user } = useUser();

  const panels = useMemo(() => {
    switch (user?.roles[0]) {
      case 'ADMIN':
        return AdminPanel;
      case 'SUPER-ADMIN':
        return SuperAdminPanel;
      case 'USER':
        return UserPanel;
      default:
        return undefined;
    }
  }, [user?.roles[0]]);

  if (panels) {
    return enumToPair(panels);
  } else {
    return [];
  }
};
