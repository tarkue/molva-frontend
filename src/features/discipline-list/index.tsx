import { getDisciplines } from './api';
import { DisciplineCard } from '@/entity/discipline';

const DisciplineList = () => {
  const disciplines = getDisciplines();

  if (disciplines.length === 0) {
    return (
      <p className="w-full p-6 text-center text-subhead text-gray">
        Дисциплины не найдены
      </p>
    );
  }

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
