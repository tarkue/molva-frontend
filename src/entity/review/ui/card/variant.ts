import { cva } from 'class-variance-authority';

export const reviewCardVariants = cva(
  'flex flex-col gap-2.5 p-6 rounded-3xl w-full bg-base-03 shadow',
  {
    variants: {
      type: {
        published: '',
        pending: 'border-yellow',
        rejected: 'bg-warn-red',
      },
    },
    defaultVariants: {
      type: 'published',
    },
  },
);
