import { useState } from 'react';
import { useSearchParams } from 'react-router';

type Param<T> = [value: T | undefined, update: (value: T) => void];

interface useParamOptions<T> {
  validator?: (el?: string) => T;
}

export function useParam<T>(
  key: string,
  options: useParamOptions<T>,
): Param<T> {
  const validator = options.validator
    ? options.validator
    : (el?: string) => el as T;

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<T | undefined>(
    searchParams.has(key)
      ? validator(searchParams.get(key) as string)
      : undefined,
  );

  return [
    value,
    (value: T) => {
      setSearchParams(
        { [key]: (value as object).toString() },
        {
          preventScrollReset: false,
        },
      );
      setValue(value);
    },
  ];
}
