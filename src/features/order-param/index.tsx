import { SortOrder } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { SortOrderCircle } from '@/shared/ui/sort-order';

export const OrderParam = () => {
  const [order, setOrder] = useSearchParam<SortOrder>('order', {
    default: 'desc',
  });
  return <SortOrderCircle onOrderChange={setOrder} value={order} />;
};
