import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { Link } from 'react-router';
import { glyphs } from '../icon/';

interface NavigateToIconProps {
  to: string;
  glyph: glyphs;
  target?: React.HTMLAttributeAnchorTarget;
  alt?: string;
  size?: '24' | 'logo';
}

const NavigateToIcon = ({
  to,
  glyph,
  target = '_self',
  alt,
  size = '24',
}: NavigateToIconProps) => (
  <Link to={to} target={target} aria-label={alt}>
    <Button variant="icon" aria-label={alt}>
      <Icon glyph={glyph} size={size} stroke="white" />
    </Button>
  </Link>
);

export default NavigateToIcon;
