import { Tabs } from '@/shared/ui/tabs';
import { getPanels } from '../api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { usePanelParam } from '../lib/panel-param';
import { usePanelSwitcher } from '@/shared/lib/panel';
import { FavoriteList } from '@/widgets/favorite-list';
import { OurReviewList } from '@/widgets/our-review-list';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const panelParam = usePanelParam(panels);

  const element = usePanelSwitcher(panelParam[0], [
    {
      name: 'favorites',
      element: <FavoriteList />,
    },
    {
      name: 'reviews',
      element: <OurReviewList />,
    },
  ]);

  if (panels.length == 0) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col gap-6 w-full">
      <Tabs panels={panels} state={panelParam} />
      <article>{element}</article>
    </section>
  );
};
