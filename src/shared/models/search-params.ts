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
  const value = searchParams.has(key)
    ? validator(searchParams.get(key) as string)
    : options.default;

  return [
    value,
    (value: T) =>
      setSearchParams((prev) => {
        prev.set(key, String(value));
        return prev;
      }),
  ];
}
