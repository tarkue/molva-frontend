import { cva } from 'class-variance-authority';

const IconVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm ring-offset-background duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        '16': 'w-4 h-4',
        '24': 'w-6 h-6',
        logo: 'w-4 h-',
      },
      'glyph-color': {
        'blue-dark': 'bg-blue-dark',
        'gray-dark': 'bg-gray-dark',
        white: 'bg-white',
      },
    },
    defaultVariants: {
      size: '24',
      'glyph-color': 'blue-dark',
    },
  },
);

export { IconVariants };
