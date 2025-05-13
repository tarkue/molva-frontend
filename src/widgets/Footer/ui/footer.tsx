import LinkList from './link-list';
import { Links } from '../models/links';
import Container from '@/shared/ui/сontainer';
import NavigateToMain from '@/features/navigate-to-main';

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between px-3 py-4 lg:py-3">
      <Container
        className="flex items-center justify-between"
        withoutPadding
      >
        <NavigateToMain />
        <LinkList links={Links} />
      </Container>
    </footer>
  );
}
