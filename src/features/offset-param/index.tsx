import Pagination from '@/shared/ui/pagination';
import { useOffsetParam } from './offset-param';

const OffsetParam = ({ total }: { total: number }) => {
  const [offset, setOffset] = useOffsetParam();

  const offsetClickHandler = (el: number) => {
    setOffset(el);
    window.scrollTo(0, 0);
  };
  return (
    <Pagination
      total={total}
      selected={offset}
      onSelect={offsetClickHandler}
    />
  );
};

export { OffsetParam, useOffsetParam };
