const getColorClassByLikes = (likes_count: number) =>
  likes_count == 0
    ? 'text-gray'
    : likes_count > 0
      ? 'text-green'
      : 'text-red';

export { getColorClassByLikes };
