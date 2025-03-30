import Icon from '@/shared/ui/Icon';
import LinkList from './link-list';
import { Links } from '../models/links';

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between bg-gray-900 p-3">
      <Icon glyph="logo" size="logo" />
      <LinkList links={Links} />
    </footer>
  );
}
