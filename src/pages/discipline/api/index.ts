import { getDisciplines } from '@/widgets/discipline-list/api/disciplines';

const getDiscipline = (id: string | undefined) => {
  if (id === undefined) return undefined;
  const disciplines = getDisciplines();
  return disciplines.find((el) => el.discipline_id === id);
};

export default getDiscipline;
