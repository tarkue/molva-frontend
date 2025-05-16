import { useSearchParam } from '@/shared/models/search-params';
import Pagination from '@/shared/ui/pagination';

export const OffsetParam = ({ total }: { total: number }) => {
  const [offset, setOffset] = useSearchParam('offset', {
    validator: (el) => Number(el),
    default: 1,
  });

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
