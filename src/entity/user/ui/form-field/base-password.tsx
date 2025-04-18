import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import { FieldValues } from 'react-hook-form';

const BasePassword = <T extends FieldValues>({
  form,
  withPlaceholder,
  label = FieldLabel.Password,
  fieldName = 'password',
}: DefaultFormFieldProps<T> & {
  label?: FieldLabel;
  fieldName?: string;
}) => (
  <DefaultFormField
    required
    name={fieldName}
    label={withPlaceholder ? undefined : label}
    placeholder={withPlaceholder ? label : undefined}
    type="password"
    form={form}
  />
);

export default BasePassword;
