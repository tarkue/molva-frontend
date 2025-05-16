import { default as ReactSelect, Props } from 'react-select';
import {
  default as ReactSelectAsync,
  AsyncProps,
} from 'react-select/async';
import { defaultProps } from './default-props';
import { Pair } from './pair';

type SelectPropsType = Props<Pair<string, string>, false> & {
  invalid?: boolean;
};

type AsyncSelectPropsType<T extends boolean> = AsyncProps<
  Pair<string, string>,
  T,
  any
> & {
  invalid?: boolean;
};

export const Select = (props: SelectPropsType) => (
  <ReactSelect unstyled {...defaultProps} {...props} />
);

export const AsyncSelect = (props: AsyncSelectPropsType<false>) => (
  <ReactSelectAsync unstyled {...defaultProps} {...props} />
);

export const AsyncMultiSelect = (
  props: AsyncSelectPropsType<true>,
) => <ReactSelectAsync unstyled {...defaultProps} {...props} />;
