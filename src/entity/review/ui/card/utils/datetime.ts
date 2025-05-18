export const getDateTime = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};
