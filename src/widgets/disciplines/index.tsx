import DisciplineFilters from '@/features/discipline-filters';
import DisciplineList from '@/features/discipline-list';
import Pagination from '@/shared/ui/pagination';

const Disciplines = () => {
  return (
    <article className="flex flex-col gap-6">
      <DisciplineFilters />
      <DisciplineList />
      <div>
        <Pagination total={100} />
      </div>
    </article>
  );
};

export default Disciplines;
