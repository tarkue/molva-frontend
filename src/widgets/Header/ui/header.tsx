import { Button } from '@/shared/ui/Button';
import Icon from '@/shared/ui/Icon';

export default function Header() {
  return (
    <header>
      <Icon glyph="logo" size="logo" />
      <Button variant="icon">
        <Icon glyph="account" />
      </Button>
    </header>
  );
}
