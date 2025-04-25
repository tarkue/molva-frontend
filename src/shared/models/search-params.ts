import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

type Param<T> = [value: T | undefined, update: (value: T) => void];

interface useParamOptions<T> {
  default?: T;
  validator?: (el?: string) => T;
}

export function useParam<T>(
  key: string,
  options: useParamOptions<T> = {},
): Param<T> {
  const validator = options.validator
    ? options.validator
    : (el?: string) => el as T;

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<T | undefined>(
    searchParams.has(key)
      ? validator(searchParams.get(key) as string)
      : options.default,
  );

  useEffect(() => {
    if (value !== undefined) {
      setSearchParams((prev) => {
        const t = (value as object).toString();
        if (prev.has(key)) {
          prev.set(key, t);
        } else {
          prev.append(key, t);
        }
        prev.forEach((value, key) => {
          console.log(key, value);
        });
        console.log('----');
        return prev;
      });
    }
  }, [value]);

  return [value, setValue];
}
