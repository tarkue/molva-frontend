import { api, Review } from '@/shared/api';

const DEFAULT_STEP = 1 as const;
const EXTENDED_STEP = 2 as const;

type VoteType = [
  'like' | 'dislike' | undefined,
  React.Dispatch<
    React.SetStateAction<'like' | 'dislike' | undefined>
  >,
];

type SetTotalRatingType = React.Dispatch<
  React.SetStateAction<number>
>;

export const likeSubmit =
  (
    review: Review,
    vote: VoteType,
    setTotalRating: SetTotalRatingType,
  ) =>
  async () => {
    const step = vote[0] == 'dislike' ? EXTENDED_STEP : DEFAULT_STEP;
    await api.review.vote({ id: review.id, vote: 'like' });
    vote[1]('like');
    setTotalRating((prev) => prev + step);
  };

export const dislikeSubmit =
  (
    review: Review,
    vote: VoteType,
    setTotalRating: SetTotalRatingType,
  ) =>
  async () => {
    const step = vote[0] == 'like' ? EXTENDED_STEP : DEFAULT_STEP;
    await api.review.vote({ id: review.id, vote: 'dislike' });
    vote[1]('dislike');
    setTotalRating((prev) => prev - step);
  };
