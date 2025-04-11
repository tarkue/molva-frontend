import { getDisciplines } from '@/features/discipline-list/api';

const getDiscipline = (id: string | undefined) => {
  if (id === undefined) return undefined;
  const disciplines = getDisciplines();
  return disciplines.find((el) => el.id === id);
};

export default getDiscipline;
