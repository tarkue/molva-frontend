import { SortOrderCircle } from '@/shared/ui/sort-order';
import { useOrderParam } from './use-order-param';

const OrderParam = () => {
  const [order, setOrder] = useOrderParam();
  return <SortOrderCircle onOrderChange={setOrder} value={order} />;
};

export { OrderParam, useOrderParam };
