import DisciplineFilters from '@/features/discipline-filters';
import DisciplineList from '@/features/discipline-list';
import { useParam } from '@/shared/hooks/search-params';
import Pagination from '@/shared/ui/pagination';

const Disciplines = () => {
  const [offset, setOffset] = useParam('offset', {
    validator: (el) => Number(el),
    default: 1,
  });

  return (
    <article className="flex flex-col gap-6">
      <DisciplineFilters />
      <DisciplineList />
      <Pagination total={10} selected={offset} onSelect={setOffset} />
    </article>
  );
};

export default Disciplines;
