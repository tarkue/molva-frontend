import { AdminPanel } from '../admin';

export enum extendedPanels {
  admins = 'Администраторы',
}

export const SuperAdminPanel = {
  ...AdminPanel,
  ...extendedPanels,
} as const;
