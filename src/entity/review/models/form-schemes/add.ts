import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const teacherZType = z.optional(
  z.string().uuid({ message: 'Преподаватель не найден' }),
);

export const addReviewFormSchema = z.object({
  grade: z
    .number()
    .min(1, { message: 'Оценка должна быть больше 0' })
    .max(5, { message: 'Оценка не может быть больше 5' }),
  comment: z.string().max(2000),
  is_anonymous: z.boolean(),
  lector_id: teacherZType,
  practic_id: teacherZType,
});

export const useAddReviewForm = () => {
  return useForm<z.infer<typeof addReviewFormSchema>>({
    resolver: zodResolver(addReviewFormSchema),
    defaultValues: {
      grade: 0,
      comment: '',
      is_anonymous: false,
      lector_id: '',
      practic_id: '',
    },
  });
};
