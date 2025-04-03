import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['@/app/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: 'var(--color-yellow)',
        green: 'var(--color-green)',
        blue: 'var(--color-blue)',
        'dark-blue': 'var(--color-dark-blue)',
        red: 'var(--color-red)',
        'warn-red': 'var(--color-warn-red)',
        'base-09': 'var(--color-base-09)',
        'base-08': 'var(--color-base-08)',
        'base-07': 'var(--color-base-07)',
        'base-06': 'var(--color-base-06)',
        'base-05': 'var(--color-base-05)',
        'base-04': 'var(--color-base-04)',
        'base-03': 'var(--color-base-03)',
        'base-02': 'var(--color-base-02)',
        'base-01': 'var(--color-base-01)',
        gray: 'var(--color-gray)',
        white: 'var(--color-white)',
        black: '--color-black',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
