import { Tabs } from '@/shared/ui/tabs';
import { getPanels } from '../api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { usePanelParam } from '../lib/panel-param';
import { usePanelSwitcher } from '@/shared/lib/panel';
import { allPanels } from '../models/panels';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const panelParam = usePanelParam(panels);

  const element = usePanelSwitcher(panelParam[0], allPanels);

  if (panels.length == 0) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col gap-6 w-full">
      <Tabs panels={panels} state={panelParam} />
      <article className="flex flex-col w-full gap-6">
        {element}
      </article>
    </section>
  );
};
