import LinkList from './link-list';
import { Links } from '../models/links';
import Container from '@/shared/ui/сontainer';
import NavigateToMain from '@/features/navigate-to-main';
import { SocialMediaList } from './social-media-list';

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between p-3">
      <Container
        className="flex items-center justify-between"
        withoutPadding
      >
        <NavigateToMain />
        <div className="flex gap-6 items-center">
          <LinkList links={Links} />
          <SocialMediaList />
        </div>
      </Container>
    </footer>
  );
}
