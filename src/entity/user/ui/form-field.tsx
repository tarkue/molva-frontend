import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';

enum FieldLabel {
  Email = 'Почта',
  Password = 'Пароль',
  OldPassword = 'Старый пароль',
  NewPassword = 'Новый пароль',
  ConfirmPassword = 'Подтверждение пароля',
  Name = 'Имя',
  Surname = 'Фамилия',
  Patronymic = 'Отчество',
}

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

const Email = ({ form, withPlaceholder }: DefaultFormFieldProps) => (
  <DefaultFormField
    required
    name="email"
    label={withPlaceholder ? undefined : FieldLabel.Email}
    placeholder={withPlaceholder ? FieldLabel.Email : undefined}
    type="email"
    form={form}
  />
);

const Surname = ({
  form,
  withPlaceholder,
}: DefaultFormFieldProps) => (
  <DefaultFormField
    required
    name="surname"
    label={withPlaceholder ? undefined : FieldLabel.Surname}
    placeholder={withPlaceholder ? FieldLabel.Surname : undefined}
    type="text"
    form={form}
  />
);

const Name = ({ form, withPlaceholder }: DefaultFormFieldProps) => (
  <DefaultFormField
    required
    name="name"
    label={withPlaceholder ? undefined : 'Ваша почта'}
    placeholder={withPlaceholder ? 'Ваша почта' : undefined}
    type="text"
    form={form}
  />
);

const Patronymic = ({
  form,
  withPlaceholder,
}: DefaultFormFieldProps) => (
  <DefaultFormField
    name="patronymic"
    label={withPlaceholder ? undefined : FieldLabel.Patronymic}
    placeholder={withPlaceholder ? FieldLabel.Patronymic : undefined}
    type="text"
    form={form}
  />
);

const Password = (props: DefaultFormFieldProps) => (
  <BasePassword {...props} />
);

const OldPassword = (props: DefaultFormFieldProps) => (
  <BasePassword
    label={FieldLabel.OldPassword}
    fieldName="oldPassword"
    {...props}
  />
);

const NewPassword = (props: DefaultFormFieldProps) => (
  <BasePassword
    label={FieldLabel.NewPassword}
    fieldName="newPassword"
    {...props}
  />
);

const ConfirmPassword = (props: DefaultFormFieldProps) => (
  <BasePassword
    label={FieldLabel.ConfirmPassword}
    fieldName="confirmPassword"
    {...props}
  />
);

export {
  Email,
  Password,
  OldPassword,
  NewPassword,
  ConfirmPassword,
  Name,
  Surname,
  Patronymic,
};
