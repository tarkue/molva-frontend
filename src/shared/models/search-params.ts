import { useEffect } from 'react';
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
  const value = searchParams.has(key)
    ? validator(searchParams.get(key) as string)
    : options.default;

  useEffect(() => {
    if (options.default !== undefined) {
      if (!searchParams.has(key)) {
        setTimeout(() =>
          setSearchParams((prev) => {
            prev.set(key, String(options.default));
            return prev;
          }),
        );
      }
    }
  }, [options]);

  return [
    value,
    (value: T) =>
      setSearchParams((prev) => ({ ...prev, [key]: String(value) })),
  ];
}
