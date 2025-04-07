import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'flex transition-colors duration-300 cursor-pointer text-body',
  {
    variants: {
      variant: {
        primary:
          'px-6 py-2 rounded-xl bg-blue text-white dark:text-black hover:bg-base-02 hover:text-blue active:bg-dark-blue active:text-white',
        circle:
          'px-3 py-3 bg-base-03 border-base-08 hover:bg-base-05 rounded-full',
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
