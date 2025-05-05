import { Tabs } from '@/shared/ui/tabs';
import { getPanels } from '../api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { usePanelParam } from '../lib/panel-param';
import { FavoritesList } from '@/widgets/favorites-list';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const panelParam = usePanelParam(panels);

  if (panels.length == 0) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col gap-6 w-full">
      <Tabs panels={panels} state={panelParam} />
      <article>
        <FavoritesList />
      </article>
    </section>
  );
};
