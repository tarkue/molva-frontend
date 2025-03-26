import { Link } from './link';

const Links: Link[] = [
  {
    href: '/about',
    text: 'О нас',
  },
  {
    href: '/contact',
    text: 'Контакты',
  },
] as const;

export { Links };
