import { enumToPair } from '@/shared/lib/enum-utils';
import { createPanelList } from '@/shared/lib/panel';
import AllReviewList from '@/widgets/all-review-list';
import ComplaintList from '@/widgets/complaint-list';
import ReviewOnCheckList from '@/widgets/review-on-check-list';

export enum CheckReviewPanel {
  all = 'Все отзывы',
  pending = 'На проверке',
  verify = 'Жалобы',
}

export const CheckReviewPanelList = createPanelList(
  CheckReviewPanel,
  [<AllReviewList />, <ReviewOnCheckList />, <ComplaintList />],
);

export const CheckReviewPanelPair = enumToPair(CheckReviewPanel);
