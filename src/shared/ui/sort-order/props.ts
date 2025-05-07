import { SortOrder } from '@/shared/api';

export interface DescProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onOrderChange?: (order: SortOrder) => void;
  value?: SortOrder;
}
