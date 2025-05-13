import Container from '@/shared/ui/сontainer';
import { CheckReviewTabs } from '@/widgets/check-review-tabs';
import CheckReviewPageMeta from './meta';

export const CheckReviewPage = () => {
  return (
    <>
      <CheckReviewPageMeta />
      <Container className="flex flex-col gap-6 py-6">
        <h1 className="text-headline text-center">
          Отзывы к проверке
        </h1>
        <CheckReviewTabs />
      </Container>
    </>
  );
};
