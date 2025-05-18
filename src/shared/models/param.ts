import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavigateOptions,
} from 'react-router';

type Param = [string, (value: string) => void];

const NAVIGATE_OPTIONS: NavigateOptions = {
  replace: true,
  flushSync: true,
} as const;

interface useParamOptions {
  default?: string;
  validator?: (value: string | undefined) => boolean;
}

export function useParam(
  key: string,
  options: useParamOptions = {},
): Param {
  console.log(key, options);
  const validator = options.validator ?? (() => true);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const paramValue = params[key];
  const [value, setValue] = useState<string>(
    paramValue ?? options.default ?? '',
  );

  const basePath = location.pathname
    .split('/')
    .slice(0, -1)
    .join('/');

  const goTo = (newValue: string) => {
    const newPath = `${basePath}/${newValue}`;
    navigate(newPath, NAVIGATE_OPTIONS);
  };

  useEffect(() => {
    if (paramValue && validator(paramValue)) {
      setValue(paramValue);
    } else if (options.default !== undefined) {
      setValue(options.default);
      goTo(options.default);
    }
  }, [paramValue]);

  const setParam = (newValue: string) => {
    if (!validator(newValue)) return;
    setValue(newValue);
    goTo(newValue);
  };

  return [value, setParam];
}
