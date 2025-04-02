import { cva } from 'class-variance-authority';

const IconVariants = cva('inline-block bg-no-repeat', {
  variants: {
    size: {
      '16': 'w-4 h-4',
      '24': 'w-6 h-6',
      logo: 'w-[90px] h-[35px]',
    },
    color: {
      'blue-dark': 'bg-blue-dark',
      'gray-dark': 'bg-gray-dark',
      white: 'bg-white',
    },
  },
  defaultVariants: {
    size: '24',
    color: 'white',
  },
});

export { IconVariants };
