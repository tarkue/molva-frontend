import { ReviewForms } from '@/entity/review';
import { api, Discipline } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import {
  ERROR_TOAST_BODY,
  SUCCESS_ADD_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddReviewSubmit = (discipline: Discipline) => {
  const refresh = useRefresh();
  const { clear } = useModals();

  return async (
    data: z.infer<typeof ReviewForms.addReviewFormSchema>,
  ) => {
    try {
      await api.review.add({ ...data, discipline_id: discipline.id });
      refresh();
      toast(SUCCESS_ADD_TOAST_BODY.REVIEW);
      clear();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
