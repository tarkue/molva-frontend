import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const teacherZType = z.optional(
  z.string().uuid({ message: 'Преподаватель не найден' }),
);

export const addReviewFormSchema = z.object({
  discipline_id: z
    .string()
    .uuid({ message: 'Дисциплина не найдена' }),
  grade: z
    .number()
    .min(0, { message: 'Оценка должна быть больше 0' })
    .max(5, { message: 'Оценка не может быть больше 5' }),
  comment: z.string().max(5000),
  is_anonymous: z.boolean(),
  lector_id: teacherZType,
  practic_id: teacherZType,
});

export const useAddReviewForm = () => {
  return useForm<z.infer<typeof addReviewFormSchema>>({
    resolver: zodResolver(addReviewFormSchema),
    defaultValues: {
      discipline_id: '',
      grade: undefined,
      comment: '',
      is_anonymous: false,
      lector_id: '',
      practic_id: '',
    },
  });
};
