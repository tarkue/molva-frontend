import Button from '@/shared/ui/Button';
import Icon from '@/shared/ui/Icon';
import { Link } from 'react-router';
import { glyphs } from '../ui/Icon/props';

const generateNavigateTo = (to: string, glyph: glyphs) => () => (
  <Link to={to} target="_self">
    <Button variant="icon">
      <Icon glyph={glyph} />
    </Button>
  </Link>
);

export { generateNavigateTo };
