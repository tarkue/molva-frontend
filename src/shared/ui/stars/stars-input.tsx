import { useState } from 'react';
import { Stars } from './stars';
import { getStars } from './lib/stars';

export const StarsInput = () => {
  const [value, setValue] = useState<1 | 2 | 3 | 4 | 5>(1);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = getStars(e.nativeEvent.offsetX);
    setValue(value > 0 ? value : 1);
  };

  return (
    <Stars
      value={value}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};
