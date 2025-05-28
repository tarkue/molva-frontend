import { useBodyWidth, useWidth } from '@/shared/lib/width';
import { Pair } from '@/shared/ui/select/pair';
import { PADDING } from '../models/padding';

export const useIsContainerWiderThanBody = (
  container: React.RefObject<HTMLElement | null>,
) => {
  const containerWidth = useWidth(container);
  const bodyWidth = useBodyWidth();
  return (
    containerWidth &&
    bodyWidth &&
    containerWidth > bodyWidth - PADDING
  );
};

export const scrollToCurrentTab = (
  scrollable: React.RefObject<HTMLDivElement | null>,
  panels: Pair<string, string>[],
  state: [string, (value: string) => void],
) => {
  if (!scrollable.current) return;

  const index = panels.findIndex((el) => el.value == state[0]);
  if (index < panels.length / 2) {
    scrollable.current.scrollTo({
      left: -scrollable.current.scrollWidth,
    });
  } else {
    scrollable.current.scrollTo({
      left: scrollable.current.scrollWidth,
    });
  }
};
