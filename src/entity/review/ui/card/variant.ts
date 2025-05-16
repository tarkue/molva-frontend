import { cva } from 'class-variance-authority';

export const reviewCardVariants = cva(
  'flex flex-col gap-2.5 p-6 rounded-3xl w-full',
  {
    variants: {
      type: {
        default: 'bg-base-03',
        inspect: 'border-yellow',
        failure: 'bg-warn-red',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);
