import { useEffect, useState } from 'react';
import { Modal } from '../models/modal';
import { FieldValues } from 'react-hook-form';
import { DefaultFormModalProps } from '../models/form-modal-props';
import { ModalContext } from './context';
import { ModalContainer } from '../ui/container';
import { DefaultFormModal } from '../ui/form';
import { cn } from '@/shared/lib/utils';

const MAX_MODALS = 2 as const;

export const ModalProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [modals, setModals] = useState<Modal<FieldValues>[]>([]);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
    }
  }, [modals]);

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
        <ModalContainer key={key} id={modal.id}>
          <DefaultFormModal
            id={modal.id}
            {...modal.form}
            className={cn('w-full', modal.form.className)}
          />
        </ModalContainer>
      ))}
    </ModalContext.Provider>
  );
};
