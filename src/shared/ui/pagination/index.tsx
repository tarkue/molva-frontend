import { useState } from 'react';
import Arrow from './ui/arrow';
import Dots from './ui/dots';
import NumberList from './ui/number-list';

interface NumberListProps {
  total: number;
  selected?: number;
  onSelect?: (el: number) => void;
}

const Pagination = ({
  total,
  onSelect,
  selected = 1,
}: NumberListProps) => {
  const [selectedNumber, setSelectedNumber] =
    useState<number>(selected);

  const onClick = (el: number) => {
    if (onSelect) {
      onSelect(el);
    }
    setSelectedNumber(el);
  };

  if (total <= 1) return <></>;

  return (
    <div className="flex gap-3 justify-center items-center w-full">
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
