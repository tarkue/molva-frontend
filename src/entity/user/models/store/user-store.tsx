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
  signIn: (user: User) => void;
  logout: () => void;
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

  const signIn = (user: User) => {
    setUser(user);
    setIsAuthorized(true);
  };

  const logout = () => {
    setUser(undefined);
    setIsAuthorized(false);
  };

  return (
    <UserContext.Provider
      value={{ isAuthorized, isLoading, user, signIn, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
