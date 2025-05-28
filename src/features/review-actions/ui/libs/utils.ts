export const isDislikeDisabled = (
  vote: ['like' | 'dislike' | undefined, unknown],
  isAuthorized: boolean,
) => {
  return vote[0] === 'dislike' || !isAuthorized;
};

export const isLikeDisabled = (
  vote: ['like' | 'dislike' | undefined, unknown],
  isAuthorized: boolean,
) => {
  return vote[0] === 'like' || !isAuthorized;
};
