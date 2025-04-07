import { useState } from 'react';
import Number from './ui/number';
import { paginationRange } from './utils/range';
import Arrow from './ui/arrow';
import Dots from './ui/dots';
import NumberList from './ui/number-list';

interface NumberListProps {
  total: number;
  onSelect?: (el: number) => void;
}

const Pagination = ({ total, onSelect }: NumberListProps) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const onClick = (el: number) => {
    if (onSelect) {
      onSelect(el);
    }
    setSelectedNumber(el);
  };

  if (total <= 1) return <></>;

  return (
    <div className="flex gap-3 items-center">
      <Arrow
        variant="left"
        onClick={() => onClick(selectedNumber - 1)}
        disabled={selectedNumber < 2}
      />
      <Dots
        reverse
        view={total > 4 && total - selectedNumber < 3}
        value={1}
        onClick={onClick}
      />
      <NumberList
        total={total}
        selectedNumber={selectedNumber}
        onClick={onClick}
      />
      <Dots
        view={total > 4 && total - selectedNumber > 23}
        value={total}
        onClick={onClick}
      />
      <Arrow
        variant="right"
        onClick={() => onClick(selectedNumber + 1)}
        disabled={total == selectedNumber}
      />
    </div>
  );
};

export default Pagination;
