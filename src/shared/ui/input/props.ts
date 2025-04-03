import { ControllerFieldState } from 'react-hook-form';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldState?: ControllerFieldState;
}
