import { FieldValues } from 'react-hook-form';
import { DefaultFormModalProps } from './form-modal-props';

export interface Modal<T extends FieldValues> {
  id: number;
  form: DefaultFormModalProps<T>;
  isOpen: boolean;
}
