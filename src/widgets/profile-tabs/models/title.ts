const PREFIX = 'Профиль - ' as const;

export const getTitle = (panel: string) => {
  return `${PREFIX}${panel}`;
};
