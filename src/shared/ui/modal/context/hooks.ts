import { useContext, useState } from 'react';
import { ModalContext } from './context';

const useModals = () => useContext(ModalContext);

const useModal = (id: number) => {
  const { modals, removeModal } = useModals();
  const modal = modals.find((modal) => modal.id === id);

  const close = () => removeModal(id);
  const isOpen = useState(modal?.isOpen || false);

  return {
    isOpen,
    close,
  };
};

export { useModals, useModal };
