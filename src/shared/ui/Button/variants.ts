import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm ring-offset-background duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'p-body px-6 py-3 bg-primary text-gray-0 hover:bg-primary-lighten',
        secondary:
          'p-body px-6 py-3 bg-secondary text-gray-800 hover:bg-secondary-darken',
        ghost:
          'p-body px-6 py-3 bg-transparent text-primary hover:bg-secondary hover:text-primary-lighten',
        icon: 'p-body px-2 py-2 bg-transparent text-transparent',
        accent:
          'title-h2-bold px-6 py-6 bg-primary text-gray-0 shadow-glow rounded-md hover:bg-primary-lighten',
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
