import { createContext, useContext } from 'react';

interface ModalContextValue {
  close: () => void;
}

const ModalContext = createContext({} as ModalContextValue);

export const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const close = () => {};
  return (
    <ModalContext.Provider value={{ close }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
