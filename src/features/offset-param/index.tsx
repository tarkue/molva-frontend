import { useParam } from '@/shared/models/search-params';
import Pagination from '@/shared/ui/pagination';

export const OffsetParam = () => {
  const [offset, setOffset] = useParam('offset', {
    validator: (el) => Number(el),
    default: 1,
  });
  return (
    <Pagination total={10} selected={offset} onSelect={setOffset} />
  );
};
