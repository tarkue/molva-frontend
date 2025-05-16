import { api } from '@/shared/api';

export const loadModules = async (search: string) => {
  return (await api.admin.module.get())
    .filter((module) => module.name.includes(search))
    .map((module) => ({
      value: module.name,
      label: module.name,
    }));
};
