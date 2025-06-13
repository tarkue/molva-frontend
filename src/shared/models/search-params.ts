import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';

type SearchParam<T> = [
  value: T,
  update: (value: T | undefined) => void,
];

interface useSearchParamOptions<T> {
  default: T;
  validator?: (el?: string) => T;
}

export function useSearchParam<T>(
  key: string,
  options: useSearchParamOptions<T> = {
    default: '' as T,
  },
): SearchParam<T> {
  const validator = options.validator
    ? options.validator
    : (el?: string) => el as T;

  const [searchParams, setSearchParams] = useSearchParams();
  const hasKeyInSearchParams = searchParams.has(key);
  const value = hasKeyInSearchParams
    ? validator(searchParams.get(key) as string)
    : options.default;

  const setSearchParamWithClear = useCallback(
    (value?: T) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (value === undefined || value === null) {
          newParams.delete(key);
        } else {
          newParams.set(key, String(value));
        }
        return newParams;
      });
    },
    [key, setSearchParams],
  );

  useEffect(() => {
    if (options.default !== undefined && !hasKeyInSearchParams) {
      setSearchParamWithClear(options.default);
    }
  }, [
    options.default,
    hasKeyInSearchParams,
    setSearchParamWithClear,
  ]);

  return [value, setSearchParamWithClear];
}
