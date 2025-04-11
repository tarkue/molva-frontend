import { Discipline } from '../../models/discipline';
import DisciplineContentDescription from './description';
import DisciplineContentHeader from './header';
import DisciplineContentStatistics from './statistics';

interface DisciplineContentProps {
  discipline: Discipline;
}

const DisciplineContent = ({
  discipline,
}: DisciplineContentProps) => {
  return (
    <section className="flex flex-col gap-3 w-full">
      <DisciplineContentHeader
        name={discipline.name}
        module_name={discipline.module_name}
      />
      <DisciplineContentStatistics
        rating={discipline.rating}
        likes_count={discipline.likes_count}
        reviews_count={discipline.reviews_count}
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
