import { default as ReactSelect, Props } from 'react-select';
import {
  default as ReactSelectAsync,
  AsyncProps,
} from 'react-select/async';
import { defaultProps } from './default-props';
import { Pair } from './pair';

export const Select = (props: Props<Pair, false>) => (
  <ReactSelect unstyled {...defaultProps} {...props} />
);

export const AsyncSelect = (props: AsyncProps<Pair, false, any>) => (
  <ReactSelectAsync unstyled {...defaultProps} {...props} />
);
