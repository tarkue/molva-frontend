import { createContext, useContext, useState } from 'react';
import { User } from '@/shared/api';

type UserContextType = {
  user: User | undefined;
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

  /* useEffect(() => {
   * if (!user) {
   *   api.auth
   *     .check()
   *     .then(setUser)
   *     .catch(() => setUser(undefined));
   * }
   * }, []);
   */

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
