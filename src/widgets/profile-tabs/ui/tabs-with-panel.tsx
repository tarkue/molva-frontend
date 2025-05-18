import { Tabs } from '@/shared/ui/tabs';
import { getPanels } from '../api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { usePanelParam } from '@/shared/lib/panel-param';
import { usePanelSwitcher } from '@/shared/lib/panel';
import { allPanels } from '../models/panels';
import { getTitle } from '../models/title';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const panelParam = usePanelParam(panels);
  const panelName = panels.find(
    (e) => e.value == panelParam[0],
  )?.label;
  if (!panels || !panelName) {
    return <Spinner />;
  }

  const title = getTitle(panelName);
  const element = usePanelSwitcher(panelParam[0], allPanels);

  return (
    <section className="flex flex-col gap-6 w-full">
      <title>{title}</title>
      <Tabs panels={panels} state={panelParam} />
      <article className="flex flex-col w-full gap-6">
        {element}
      </article>
    </section>
  );
};
