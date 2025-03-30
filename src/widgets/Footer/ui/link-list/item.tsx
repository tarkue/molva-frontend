import { Link as RouterLink } from 'react-router';
import { Link } from '../../models/link';

export default function ListItem({ href, text }: Link) {
  return (
    <RouterLink to={href} target="_self" className="text-body">
      {text}
    </RouterLink>
  );
}
