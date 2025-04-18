import Button from '@/shared/ui/button';
import { UserFormField, UserForms } from '@/entity/user';
import { Form } from '@/shared/ui/form';
import { useSignInSubmit } from './api/submit';
import Icon from '@/shared/ui/icon';

const SignInForm = () => {
  const form = UserForms.useSignInForm();
  const onSubmit = useSignInSubmit();

  return (
    <Form
      title="Войти"
      onSubmit={form.handleSubmit(onSubmit)}
      {...form}
    >
      <UserFormField.Email withPlaceholder form={form.control} />
      <UserFormField.Password withPlaceholder form={form.control} />
      <div className="flex justify-center items-center gap-6">
        <Button type="submit" size="medium">
          Войти
        </Button>
      </div>
    </Form>
  );
};

export { SignInForm };
