import { useSearchParam } from '@/shared/models/search-params';
import Pagination from '@/shared/ui/pagination';

export const OffsetParam = () => {
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
      total={10}
      selected={offset}
      onSelect={offsetClickHandler}
    />
  );
};
