import { Discipline } from '@/shared/api';
import DisciplineContentDescription from './description';
import DisciplineContentHeader from './header';
import DisciplineContentStatistics from './statistics';

interface DisciplineContentProps {
  discipline: Discipline;
  headerTopRightAction?: React.ReactNode;
  headerMainAction?: React.ReactNode;
}

const DisciplineContent = ({
  discipline,
  headerMainAction,
  headerTopRightAction,
}: DisciplineContentProps) => {
  return (
    <section className="flex flex-col gap-3 w-full">
      <DisciplineContentHeader
        name={discipline.name}
        module={discipline.module}
        topRightAction={headerTopRightAction}
        mainAction={headerMainAction}
      />
      <DisciplineContentStatistics
        rating={discipline.avg_rating}
        likes_count={discipline.favorites_count}
        reviews_count={discipline.review_count}
      />
      <DisciplineContentDescription
        description={discipline.description}
        presentation_link={discipline.presentation_link}
        modeus_link={discipline.modeus_link}
        format={discipline.format}
      />
    </section>
  );
};

export { DisciplineContent };
