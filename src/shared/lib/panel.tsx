import { zip } from './array-utils';

type Panel = {
  name: string;
  element: () => React.ReactNode;
};
export const usePanelSwitcher = (
  activePanelName: string,
  panels: Panel[],
  defaultPanel: Panel = { name: '', element: () => <></> },
) => {
  const panel = panels.find((e) => e.name == activePanelName);

  if (!panel) {
    return defaultPanel.element();
  }

  return panel.element();
};

export const createPanelList = (
  en: object,
  nodes: React.ReactNode[],
) =>
  zip(Object.keys(en), nodes).map((e) => ({
    name: e[0],
    element: () => e[1],
  }));
