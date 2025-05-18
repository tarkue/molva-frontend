import { api, Review } from '@/shared/api';

type SetVoteType = React.Dispatch<
  React.SetStateAction<'like' | 'dislike' | undefined>
>;

type SetTotalRatingType = React.Dispatch<
  React.SetStateAction<number>
>;

export const likeSubmit =
  (
    review: Review,
    setVote: SetVoteType,
    setTotalRating: SetTotalRatingType,
  ) =>
  async () => {
    await api.review.vote({ id: review.id, vote: 'like' });
    setVote('like');
    setTotalRating((prev) => (prev > 0 ? prev + 1 : 1));
  };

export const dislikeSubmit =
  (
    review: Review,
    setVote: SetVoteType,
    setTotalRating: SetTotalRatingType,
  ) =>
  async () => {
    await api.review.vote({ id: review.id, vote: 'dislike' });
    setVote('dislike');
    setTotalRating((prev) => (prev < 0 ? prev - 1 : -1));
  };
