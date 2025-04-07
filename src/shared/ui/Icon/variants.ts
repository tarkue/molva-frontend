import { cva } from 'class-variance-authority';

const IconVariants = cva('inline-block bg-no-repeat', {
  variants: {
    size: {
      '16': 'w-4 h-4',
      '20': 'w-5 h-5',
      '24': 'w-6 h-6',
      logo: 'w-[90px] h-[35px]',
    },
    stroke: {
      'blue-dark': 'bg-blue-dark',
      gray: 'bg-gray',
      white: 'bg-white',
      default: 'background-contrast',
    },
  },
  defaultVariants: {
    size: '24',
    stroke: 'default',
  },
});

export { IconVariants };
