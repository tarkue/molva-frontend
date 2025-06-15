import Link from '@/shared/ui/link';
import { getLinks } from './models/links';
import { DisciplineContentDescriptionLinksProps } from './models/links-props';

export const DisciplineContentDescriptionLinks = (
  props: DisciplineContentDescriptionLinksProps,
) => {
  const links = getLinks(props);

  return (
    links.length > 0 && (
      <ul className="flex justify-between items-flex-start sm:items-center flex-col sm:flex-row gap-2">
        {links.map((el, key) => (
          <li key={key}>
            <Link href={el.href} target="_blank">
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};
