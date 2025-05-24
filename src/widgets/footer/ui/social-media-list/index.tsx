import NavigateToIcon from '@/shared/ui/navigate-to-Icon';
import { SocialMedia } from '../../models/icons';

export const SocialMediaList = () => (
  <ul className="flex gap-2 list-none">
    {SocialMedia.map((el, key) => (
      <li key={key}>
        <NavigateToIcon
          glyph={el.icon}
          to={el.href}
          target="_blank"
          alt={el.icon}
        />
      </li>
    ))}
  </ul>
);
