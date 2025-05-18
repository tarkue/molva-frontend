import { useParam } from '@/shared/models/param';
import { Pair } from '@/shared/ui/select/pair';
import { useMemo } from 'react';

export const usePanelParam = (panels: Pair<string, string>[]) => {
  const panelKeys = useMemo(
    () => panels.map((e) => e.value),
    [panels],
  );

  return useParam('panel', {
    default: panels[0].value,
    validator: (value?: string) => panelKeys.includes(value ?? ''),
  });
};
