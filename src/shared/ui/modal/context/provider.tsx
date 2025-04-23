import { useState } from 'react';
import { Modal } from '../models/modal';
import { FieldValues } from 'react-hook-form';
import { DefaultFormModalProps } from '../models/form-modal-props';
import { ModalContext } from './context';
import { ModalContainer } from '../ui/container';
import { DefaultFormModal } from '../ui/form';

const MAX_MODALS = 2 as const;

export const ModalProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [modals, setModals] = useState<Modal<FieldValues>[]>([]);

  const genId = () => {
    const maxId = modals.reduce(
      (max, modal) => Math.max(max, modal.id),
      0,
    );

    return (maxId + 1) % MAX_MODALS;
  };

  const clear = () => setModals([]);

  const addModal = <T extends FieldValues>(
    form: DefaultFormModalProps<T>,
  ) => {
    const id = genId();
    const newModal = {
      form,
      id,
      isOpen: true,
    } as Modal<FieldValues>;
    if (modals.length == MAX_MODALS) {
      removeModal(modals[0].id);
    }
    setModals((prevModals) => [...prevModals, newModal]);
    return id;
  };

  const removeModal = (id: Number) => {
    setModals((prevModals) =>
      prevModals.filter((modal) => modal.id !== id),
    );
  };

  return (
    <ModalContext.Provider
      value={{ modals, addModal, removeModal, clear }}
    >
      {children}
      {modals.map((modal, key) => (
        <ModalContainer key={key}>
          <DefaultFormModal id={modal.id} {...modal.form} />
        </ModalContainer>
      ))}
    </ModalContext.Provider>
  );
};
