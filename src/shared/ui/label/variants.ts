import { cva } from 'class-variance-authority';

const labelVariants = cva('text-body text-gray text-wrap', {
  variants: {
    padding: {
      none: 'p-0',
      small: 'px-3',
    },
  },
  defaultVariants: {
    padding: 'small',
  },
});

export { labelVariants };
