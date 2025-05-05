type Panel = {
  name: string;
  element: React.ReactNode;
};
export const usePanelSwitcher = (
  activePanelName: string,
  panels: Panel[],
  defaultPanel: Panel = { name: '', element: <></> },
) => {
  const panel = panels.find((e) => e.name == activePanelName);

  if (!panel) {
    return defaultPanel.element;
  }

  return panel.element;
};
