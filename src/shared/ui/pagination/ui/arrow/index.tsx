import Button from '../../../button';
import Icon from '../../../icon';
import { ArrowProps } from './props';

const Arrow = ({ onClick, disabled, variant }: ArrowProps) => (
  <Button variant="icon" disabled={disabled} onClick={onClick}>
    <Icon glyph={`arrow-${variant}`} color="" />
  </Button>
);

export default Arrow;
