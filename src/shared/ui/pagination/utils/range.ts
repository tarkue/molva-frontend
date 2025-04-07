const paginationSlice = (total: number, selectedNumber: number) => [
  total > 2
    ? total - selectedNumber > 1
      ? selectedNumber > 1
        ? selectedNumber - 2
        : selectedNumber - 1
      : total - 3
    : 0,
  total - selectedNumber > 1
    ? selectedNumber > 1
      ? selectedNumber + 1
      : selectedNumber + 2
    : total,
];

const paginationRange = (total: number, selectedNumber: number) => {
  const elements = paginationSlice(total, selectedNumber);
  const size = elements[1] - elements[0] + 1;

  return [...Array(size).keys()]
    .slice(1)
    .map((el) => elements[0] + el);
};

export { paginationRange };
