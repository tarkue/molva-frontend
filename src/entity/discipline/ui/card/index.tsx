import { Link } from 'react-router';
import { Discipline } from '@/shared/api';
import { CardStatistics } from './statistics';

interface DisciplineCardProps {
  discipline: Discipline;
}

const DisciplineCard = ({ discipline }: DisciplineCardProps) => {
  return (
    <Link
      className="flex justify-between items-center text-contrast elevation px-4 md:px-6 py-4 rounded-3xl bg-base-03 flex-col md:flex-row gap-3 md:gap-0"
      to={`/discipline/${discipline.id}`}
    >
      <div className="w-full">
        <p className="text-subhead w-full text-center md:text-start truncate p-0">
          {discipline.name}
        </p>
        <p className="text-caption w-full text-gray text-center md:text-start truncate">
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
