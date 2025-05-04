import { Tabs } from '@/shared/ui/tabs';
import { useState } from 'react';
import { getPanels } from './api/get-panels';
import { Spinner } from '@/shared/ui/spinner';
import { useParams } from 'react-router';

export const ProfileTabsWithPanel = () => {
  const panels = getPanels();
  const params = useParams();
  const panelState = useState<string>(
    params.panel ? params.panel : panels[0],
  );

  if (panels.length == 0) {
    return <Spinner />;
  }

  return (
    <section>
      <Tabs panels={panels} state={panelState} />
    </section>
  );
};
