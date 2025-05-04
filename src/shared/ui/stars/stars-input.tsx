import { Stars } from './stars';
import { getStars } from './lib/stars';

export const StarsInput = ({
  state,
}: {
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = getStars(e.nativeEvent.offsetX);
    state[1](value > 0 ? value : 1);
  };

  return (
    <Stars
      value={state[0]}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};
