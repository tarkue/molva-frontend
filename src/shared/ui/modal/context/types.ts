import { FieldValues } from 'react-hook-form';
import { Modal } from '../models/modal';
import { DefaultFormModalProps } from '../models/form-modal-props';

export interface ModalContextType {
  modals: Modal<FieldValues>[];
  addModal: <T extends FieldValues>(
    form: DefaultFormModalProps<T>,
  ) => number;
  removeModal: (id: number) => void;
  clear: () => void;
}
