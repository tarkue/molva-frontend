import {
  FC,
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import React from 'react';

interface AuthContextType {
  isAuthorized: boolean;
  toggleAuth: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const toggleAuth = () => setIsAuthorized((prevAuth) => !prevAuth);

  return (
    <AuthContext.Provider value={{ isAuthorized, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
