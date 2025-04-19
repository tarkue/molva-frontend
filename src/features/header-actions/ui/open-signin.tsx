import { useOpenSignIn } from '@/features/sign-in-form';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';

const OpenSignIn = () => {
  const openSignIn = useOpenSignIn();
  return (
    <Button variant="icon" onClick={openSignIn}>
      <Icon glyph="account" />
    </Button>
  );
};

export default OpenSignIn;
