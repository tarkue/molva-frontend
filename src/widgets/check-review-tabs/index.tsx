import { usePanelParam } from '@/shared/lib/panel-param';

import { Tabs } from '@/shared/ui/tabs';
import {
  CheckReviewPanelList,
  CheckReviewPanelPair,
} from './models/panels';
import { usePanelSwitcher } from '@/shared/lib/panel';

export const CheckReviewTabs = () => {
  const panelParam = usePanelParam(CheckReviewPanelPair);
  const activePanel = usePanelSwitcher(
    panelParam[0],
    CheckReviewPanelList,
  );
  return (
    <>
      <Tabs panels={CheckReviewPanelPair} state={panelParam} />
      {activePanel}
    </>
  );
};
