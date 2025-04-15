import { createContext } from 'react';
import { FormItemContextValue } from '../models/item-value';

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export { FormItemContext };
