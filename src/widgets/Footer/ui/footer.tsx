import Icon from '@/shared/ui/Icon';
import LinkList from './link-list';
import { Links } from '../models/links';

export default function Footer() {
  return (
    <footer>
      <Icon glyph="logo" size="logo" />
      <LinkList links={Links} />
    </footer>
  );
}
