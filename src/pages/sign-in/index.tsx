import { SignInForm } from '@/features/sign-in-form';
import Modal from '@/shared/ui/modal';
import Container from '@/shared/ui/сontainer';

const SignInPage = () => {
  return (
    <Container className="pt-6">
      <SignInForm />
      <Modal />
    </Container>
  );
};

export { SignInPage };
