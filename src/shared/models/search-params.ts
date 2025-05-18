import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

type SearchParam<T> = [
  value: T | undefined,
  update: (value: T) => void,
];

interface useSearchParamOptions<T> {
  default?: T;
  validator?: (el?: string) => T;
}

export function useSearchParam<T>(
  key: string,
  options: useSearchParamOptions<T> = {},
): SearchParam<T> {
  const validator = options.validator
    ? options.validator
    : (el?: string) => el as T;

  const [searchParams, setSearchParams] = useSearchParams();
  const hasKeyInSearchParams = searchParams.has(key);
  const value = hasKeyInSearchParams
    ? validator(searchParams.get(key) as string)
    : options.default;

  const setSearchParamWithTimeout = (value?: T) => {
    setTimeout(() => {
      if (String(value) == '') {
        setSearchParams((prev) => {
          prev.set(key, options.default as string);
          return prev;
        });
      } else {
        setSearchParams((prev) => {
          prev.set(key, String(value));
          return prev;
        });
      }
    });
  };

  useEffect(() => {
    if (options.default !== undefined) {
      if (!hasKeyInSearchParams) {
        setSearchParamWithTimeout(options.default);
      }
    }
  }, [options]);

  return [value, setSearchParamWithTimeout];
}
