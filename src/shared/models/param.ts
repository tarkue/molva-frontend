import { useEffect, useState } from 'react';
import {
  NavigateOptions,
  useNavigate,
  useParams,
} from 'react-router';

type Param = [string, (value: string) => void];

const NAVIGATE_OPTIONS: NavigateOptions = {
  relative: 'path',
  preventScrollReset: true,
  replace: true,
} as const;

const RELATIVE_PATH = './' as const;

interface useParamOptions {
  default?: string;
  validator?: (value: string) => boolean;
}

export function useParam(
  key: string,
  options: useParamOptions = {},
): Param {
  const validator = options.validator
    ? options.validator
    : (_: string) => true;
  const params = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');

  const setWithValidation = (value: string) => {
    if (validator(value)) {
      setValue(value);
    }
  };

  useEffect(() => {
    if (params[key]) {
      setWithValidation(params[key]);
    }
  }, [key]);

  useEffect(() => {
    if (
      (!params[key] && params[key] != '') ||
      !validator(params[key])
    ) {
      if (options.default || options.default == '') {
        navigate(RELATIVE_PATH + options.default, NAVIGATE_OPTIONS);
        setValue(options.default);
      }
    }
  }, [options.default]);

  return [
    value,
    (value: string) => {
      setWithValidation(value);
      navigate(RELATIVE_PATH + value, NAVIGATE_OPTIONS);
    },
  ];
}
