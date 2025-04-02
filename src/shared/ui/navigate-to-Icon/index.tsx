import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { Link } from 'react-router';
import { glyphs } from '../icon/props';

interface NavigateToIconProps {
  to: string;
  glyph: glyphs;
}

const NavigateToIcon = ({ to, glyph }: NavigateToIconProps) => (
  <Link to={to} target="_self">
    <Button variant="icon">
      <Icon glyph={glyph} />
    </Button>
  </Link>
);

export default NavigateToIcon;
