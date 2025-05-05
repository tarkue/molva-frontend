import { Attention } from '@/entity/user';

export const OurReviewListContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div className="flex flex-col gap-6 w-full">
    <Attention />
    {children}
  </div>
);
