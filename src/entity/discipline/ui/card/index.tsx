import { Link } from 'react-router';
import { Discipline } from '../../models/discipline';
import { CardStatistics } from './statistics';

interface DisciplineCardProps {
  discipline: Discipline;
}

const DisciplineCard = ({ discipline }: DisciplineCardProps) => {
  return (
    <Link
      className="bg-base-03 flex justify-between items-center text-contrast pl-6 pr-6 pt-4 pb-4 rounded-3xl"
      to={`/discipline/${discipline.id}`}
    >
      <div>
        <span className="text-subhead">{discipline.name}</span>
        <p className="text-caption text-gray">
          {discipline.module_name}
        </p>
      </div>
      <CardStatistics
        rating={discipline.rating}
        likes_count={discipline.likes_count}
        reviews_count={discipline.reviews_count}
      />
    </Link>
  );
};

export { DisciplineCard };
