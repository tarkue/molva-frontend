import { api, Discipline } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { ERROR_TOAST_BODY } from '@/shared/models/toast-body';
import { toast } from '@/shared/ui/toast';
import { useEffect, useState } from 'react';

const addToFavoriteSubmit = (discipline: Discipline) => {
  return async () => {
    try {
      await api.discipline.favorite.add(discipline);
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};

const removeFromFavoriteSubmit = (discipline: Discipline) => {
  const { refresh } = useRefresh();
  return async () => {
    try {
      await api.discipline.favorite.remove(discipline);
      refresh();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};

export const useToggleFavorite = (discipline: Discipline) => {
  const { refresh } = useRefresh();
  const remove = removeFromFavoriteSubmit(discipline);
  const add = addToFavoriteSubmit(discipline);
  const [inFavorite, setInFavorite] = useState(false);

  useEffect(() => {
    api.discipline.favorite
      .get(1, discipline.name)
      .then(({ data }) => {
        if (data && data.length > 0) {
          if (
            data.filter((el) => el.id === discipline.id).length > 0
          ) {
            setInFavorite(true);
            return;
          }
        }
        setInFavorite(false);
      });
  }, []);

  const onSubmit = async () => {
    if (inFavorite) {
      await remove();
      setInFavorite(false);
    } else {
      await add();
      setInFavorite(true);
    }
    refresh();
  };

  return { inFavorite, onSubmit };
};
