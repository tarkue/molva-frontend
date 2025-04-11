import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'flex transition-colors duration-300 cursor-pointer text-body disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'px-6 py-2 rounded-xl bg-blue text-white dark:text-black hover:bg-dark-blue active:bg-base-02 active:text-blue',
        circle:
          'px-3 py-3 bg-base-03 border border-base-08 hover:bg-base-05 rounded-full',
        icon: 'p-0.75',
      },
      size: {
        large: 'w-full',
        small: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
  },
);

export { buttonVariants };
