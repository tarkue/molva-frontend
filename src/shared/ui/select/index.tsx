import { cn } from '@/shared/lib/utils';
import { default as ReactSelect, Props } from 'react-select';

const Select = (props: Props) => (
  <ReactSelect
    unstyled
    styles={{
      input: (base) => ({
        ...base,
        'input:focus': {
          boxShadow: 'none',
        },
      }),
    }}
    classNames={{
      control: ({ isFocused }) =>
        cn(
          'transition-colors duration-300 flex w-full rounded-2xl border placeholder-gray border-base-08 bg-base-03 px-6 py-3 hover:border-base-07',
          isFocused ? 'border-base-07 outline-none' : '',
        ),
      option: () =>
        'flex px-[14px] py-[6px] text-body rounded-xl hover:bg-base-06',
      menu: () =>
        'flex flex-col w-full rounded-2xl bg-base-03 p-[10px] mt-1',
      singleValue: () => 'text-body',
      input: () => 'text-body text-contrast',
      placeholder: () => 'text-body text-gray',
      dropdownIndicator: () => 'text-gray',
    }}
    {...props}
  />
);

export default Select;
