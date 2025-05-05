import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api, User } from '@/shared/api';

type UserContextType = {
  user: User | undefined;
  isAuthorized: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
      api.auth
        .check()
        .then((user) => {
          setUser(user);
          setIsAuthorized(true);
        })
        .catch(() => {
          setUser(undefined);
          setIsAuthorized(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ isAuthorized, isLoading, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
