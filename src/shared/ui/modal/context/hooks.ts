import { useContext, useState } from 'react';
import { ModalContext } from './context';

const useModals = () => useContext(ModalContext);

const useModal = (id: number) => {
  const { removeModal } = useModals();
  const close = () => removeModal(id);

  return {
    close,
  };
};

export { useModals, useModal };
