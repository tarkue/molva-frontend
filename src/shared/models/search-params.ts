import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

type SearchParam<T> = [
  value: T | undefined,
  update: (value: T | undefined) => void,
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

  const clear = () => {
    setSearchParams((prev) => {
      prev.delete(key);
      return prev;
    });
  };

  const setSearchParamWithTimeout = (value?: T) => {
    if (value === undefined || value == "") {
      clear();
      return;
    }
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
