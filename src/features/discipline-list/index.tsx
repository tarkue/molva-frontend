import { getDisciplines } from './api';
import { DisciplineCard } from '@/entity/discipline';

const DisciplineList = () => {
  const disciplines = getDisciplines();

  return (
    <ul className="flex flex-col gap-3">
      {disciplines.map((el, key) => (
        <li key={key}>
          <DisciplineCard discipline={el} />
        </li>
      ))}
    </ul>
  );
};

export default DisciplineList;
