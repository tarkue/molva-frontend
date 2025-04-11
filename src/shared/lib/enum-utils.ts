import { Pair } from '../ui/select/pair';
import { zip } from './array-utils';

export function enumToPair<T extends object>(obj: T): Pair[] {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return zip(keys, values).map((el) => ({
    value: el[0],
    label: el[1],
  }));
}

export function getValue<T extends object>(
  obj: T,
  value: string | undefined,
): T[keyof T] | undefined {
  if (value === undefined) return undefined;
  return obj[value as keyof T];
}
