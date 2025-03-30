import { Link } from '../../models/link';
import ListItem from './item';

interface LinkListProps {
  links: Link[];
}

export default function LinkList({ links }: LinkListProps) {
  const list = links.map((props, i) => (
    <li key={i}>
      <ListItem {...props} />
    </li>
  ));
  return <ul className="flex gap-3">{list}</ul>;
}
