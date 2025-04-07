import Number from '../number';
import { DotsProps } from './props';

const Dots = ({ view, value, onClick, reverse }: DotsProps) => {
  if (!view) return <></>;

  const elements = [
    <Number value="..." key={0} />,
    <Number value={value} onClick={() => onClick(value)} key={1} />,
  ];

  if (reverse) {
    return elements.reverse();
  }
  return elements;
};

export default Dots;
