import { Tabs } from '@/shared/ui/tabs';
import { getPanels } from '../api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { usePanelParam } from '../lib/panel-param';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const panelParam = usePanelParam(panels);

  if (panels.length == 0) {
    return <Spinner />;
  }

  return (
    <section>
      <Tabs panels={panels} state={panelParam} />
    </section>
  );
};
