import { api } from '@/shared/api';

export const useGetAllDisciplines = () => api.discipline.getAll();
