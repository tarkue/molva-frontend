import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const recoveryPasswordFormSchemaFirstPart = z.object({
  email: scheme.user.email,
});

const recoveryPasswordFormSchemaSecondPart = z.object({
  code: scheme.user.code,
});

const recoveryPasswordFormSchemaThirdPart = z.object({
  newPasswpord: scheme.user.newPasswpord,
  confirmPassword: scheme.user.confirmPassword,
});

const useRecoveryPasswordFormFirstPart = () =>
  useForm<z.infer<typeof recoveryPasswordFormSchemaFirstPart>>({
    resolver: zodResolver(recoveryPasswordFormSchemaFirstPart),
    defaultValues: {
      email: '',
    },
  });

const useRecoveryPasswordFormSecondPart = () =>
  useForm<z.infer<typeof recoveryPasswordFormSchemaSecondPart>>({
    resolver: zodResolver(recoveryPasswordFormSchemaSecondPart),
    defaultValues: {
      code: '',
    },
  });

const useRecoveryPasswordFormThirdPart = () =>
  useForm<z.infer<typeof recoveryPasswordFormSchemaThirdPart>>({
    resolver: zodResolver(recoveryPasswordFormSchemaThirdPart),
    defaultValues: {
      newPasswpord: '',
      confirmPassword: '',
    },
  });

export {
  useRecoveryPasswordFormFirstPart,
  useRecoveryPasswordFormSecondPart,
  useRecoveryPasswordFormThirdPart,
  recoveryPasswordFormSchemaFirstPart,
  recoveryPasswordFormSchemaSecondPart,
  recoveryPasswordFormSchemaThirdPart,
};
