import { Link } from 'react-router';
import { Discipline } from '@/shared/api';
import { CardStatistics } from './statistics';

interface DisciplineCardProps {
  discipline: Discipline;
}

const DisciplineCard = ({ discipline }: DisciplineCardProps) => {
  return (
    <Link
      className="flex justify-between items-center text-contrast px-6 py-4 rounded-3xl bg-base-03 md:flex-col md:gap-3"
      to={`/discipline/${discipline.id}`}
    >
      <div>
        <span className="text-subhead md:text-center">
          {discipline.name}
        </span>
        <p className="text-caption text-gray md:text-center">
          {discipline.module.name}
        </p>
      </div>
      <CardStatistics
        rating={discipline.avg_rating}
        likes_count={discipline.favorites_count}
        reviews_count={discipline.review_count}
      />
    </Link>
  );
};

export { DisciplineCard };
