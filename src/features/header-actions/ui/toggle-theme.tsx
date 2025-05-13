import { useTheme } from '@/shared/models/theme-store';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';

export const ToggleTheme = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant="icon"
      size="small"
      onClick={toggleTheme}
      aria-label="toggle theme"
    >
      <Icon glyph="theme" stroke="white" />
    </Button>
  );
};
