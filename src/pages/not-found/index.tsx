import Container from '@/shared/ui/сontainer';

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <h1 className="text-hero">404</h1>
      <p className="text-headline opacity-50">Page not found</p>
    </Container>
  );
};

export default NotFoundPage;
