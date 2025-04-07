import DisciplineFilters from '@/features/discipline-filters';
import DisciplineList from '@/features/discipline-list';
import Pagination from '@/shared/ui/pagination';

const Disciplines = () => {
  return (
    <article className="flex flex-col gap-6">
      <DisciplineFilters />
      <DisciplineList />
      <Pagination total={100} />
    </article>
  );
};

export default Disciplines;
