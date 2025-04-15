import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';

const BasePassword = ({
  form,
  withPlaceholder,
  label = FieldLabel.Password,
  fieldName = 'password',
}: DefaultFormFieldProps & {
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
