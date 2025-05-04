import { Role } from '@/shared/api';
import { ROLES_WITH_NOTIFICATION } from '../models/grants';

export const userHasNotificationWithRole = (role?: Role) =>
  role && ROLES_WITH_NOTIFICATION.includes(role);
