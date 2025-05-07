import Container from '@/shared/ui/сontainer';
import { CheckReviewTabs } from '@/widgets/check-review-tabs';

export const CheckReviewPage = () => {
  return (
    <Container className="flex flex-col gap-6 py-6">
      <h1 className="text-headline text-center">Отзывы к проверке</h1>
      <CheckReviewTabs />
    </Container>
  );
};
