import DisciplineFilters from '@/features/discipline-filters';
import DisciplineList from '@/features/discipline-list';

const Disciplines = () => {
  return (
    <article className="flex flex-col gap-6">
      <DisciplineFilters />
      <DisciplineList />
    </article>
  );
};

export default Disciplines;
