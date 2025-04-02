import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { Link } from 'react-router';
import { glyphs } from '../icon/props';

interface NavigateToIconProps {
  to: string;
  glyph: glyphs;
  size?: '24' | 'logo';
}

const NavigateToIcon = ({
  to,
  glyph,
  size = '24',
}: NavigateToIconProps) => (
  <Link to={to} target="_self">
    <Button variant="icon">
      <Icon glyph={glyph} size={size} />
    </Button>
  </Link>
);

export default NavigateToIcon;
