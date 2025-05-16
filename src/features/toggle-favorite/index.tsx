import { Discipline } from '@/shared/api';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { useToggleFavorite } from './api/submit';

export const AddToFavorites = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const { inFavorite, onSubmit } = useToggleFavorite(discipline);
  return (
    <Button variant="icon" onClick={onSubmit}>
      <Icon glyph="heart" stroke={inFavorite ? 'red' : 'gray'} />
    </Button>
  );
};
