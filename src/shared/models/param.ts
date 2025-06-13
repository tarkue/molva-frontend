import { useCallback, useEffect } from 'react';
import {
  NavigateOptions,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router';

type Param = [string, (value: string) => void];

const NAVIGATE_OPTIONS: NavigateOptions = {
  replace: true,
} as const;

interface useParamOptions {
  default?: string;
  validator?: (value: string | undefined) => boolean;
}

export function useParam(
  key: string,
  options: useParamOptions = {},
): Param {
  const validator = options.validator ?? (() => true);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const paramValue = params[key];

  const value =
    paramValue && validator(paramValue)
      ? paramValue
      : (options.default ?? '');

  const basePath = location.pathname
    .split('/')
    .slice(0, -1)
    .join('/');

  const goTo = useCallback(
    (newValue: string) => {
      const newPath = `${basePath}/${newValue}`;
      navigate(newPath, NAVIGATE_OPTIONS);
    },
    [basePath, navigate],
  );

  useEffect(() => {
    if (options.default !== undefined && !paramValue) {
      goTo(options.default);
    }
  }, [options.default, paramValue, goTo]);

  const setParam = useCallback(
    (newValue: string) => {
      if (validator(newValue)) {
        goTo(newValue);
      }
    },
    [validator, goTo],
  );

  return [value, setParam];
}
