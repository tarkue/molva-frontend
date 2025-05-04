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

  useEffect(() => {
    if (!user) {
      api.auth
        .check()
        .then((user) => {
          setUser(user);
          setIsAuthorized(true);
        })
        .catch(() => {
          setUser(undefined);
          setIsAuthorized(false);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ isAuthorized, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
