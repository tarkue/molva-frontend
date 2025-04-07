import { paginationRange } from '../utils/range';
import Number from './number';

interface NumberListProps {
  total: number;
  selectedNumber: number;
  onClick: (n: number) => void;
}

const NumberList = ({
  total,
  selectedNumber,
  onClick,
}: NumberListProps) =>
  paginationRange(total, selectedNumber).map((el) => (
    <Number
      value={el}
      key={el}
      active={el == selectedNumber}
      onClick={() => onClick(el)}
    />
  ));

export default NumberList;
