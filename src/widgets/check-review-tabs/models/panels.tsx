import { enumToPair } from '@/shared/lib/enum-utils';
import { createPanelList } from '@/shared/lib/panel';
import ComplaintList from '@/widgets/complaint-list';
import ReviewOnCheckList from '@/widgets/review-on-check-list';

export enum CheckReviewPanel {
  all = 'Все отзывы',
  verify = 'Жалобы',
}

export const CheckReviewPanelList = createPanelList(
  CheckReviewPanel,
  [<ReviewOnCheckList />, <ComplaintList />],
);

export const CheckReviewPanelPair = enumToPair(CheckReviewPanel);
