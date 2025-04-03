import LinkList from './link-list';
import { Links } from '../models/links';
import Container from '@/shared/ui/Container';
import NavigateToMain from '@/features/navigate-to-main';

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between p-3">
      <Container className="flex items-center justify-between">
        <NavigateToMain />
        <LinkList links={Links} />
      </Container>
    </footer>
  );
}
