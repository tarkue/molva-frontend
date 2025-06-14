import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface RefreshStore {
  refreshState: number;
  refresh: () => void;
}

const RefreshContext = createContext<RefreshStore>(
  {} as RefreshStore,
);

export const RefreshProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [refreshState, setRefreshState] = useState<number>(0);

  const refresh = () => {
    setRefreshState((prev) => prev + 1);
  };

  return (
    <RefreshContext.Provider value={{ refreshState, refresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);
