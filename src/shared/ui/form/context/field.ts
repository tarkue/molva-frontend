import { createContext } from 'react';
import { FormFieldContextValue } from '../models/field-value';

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export { FormFieldContext };
