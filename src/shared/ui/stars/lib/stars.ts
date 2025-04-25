export const getStars = (x: number) =>
  Math.ceil((x / 142) * 5) as 1 | 2 | 3 | 4 | 5;
