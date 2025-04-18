import { createPortal } from 'react-dom';
import { Fragment } from 'react/jsx-runtime';
import { ModalProvider } from './context/modal';
import { DefaultFormModal, DefaultFormModalProps } from './ui/form';
import { FieldValues } from 'react-hook-form';

const Modal = <T extends FieldValues>(
  props: DefaultFormModalProps<T>,
) => {
  return createPortal(
    <Fragment>
      <ModalProvider>
        <DefaultFormModal {...props} />
      </ModalProvider>
    </Fragment>,
    document.body,
  );
};

export default Modal;
