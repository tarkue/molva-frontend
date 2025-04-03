import HeaderActions from '@/features/header-actions';
import NavigateToMain from '@/features/navigate-to-main';
import Container from '@/shared/ui/Container';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center p-3">
      <Container className="flex items-center justify-between">
        <NavigateToMain />
        <HeaderActions />
      </Container>
    </header>
  );
}
