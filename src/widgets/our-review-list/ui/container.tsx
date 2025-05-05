import { Attention } from '@/entity/user';

export const OurReviewListContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <>
    <Attention />
    {children}
  </>
);
