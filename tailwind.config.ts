import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['@/app/*.tsx'],
  theme: {},
  plugins: [require('tailwindcss-animate')],
};

export default config;
