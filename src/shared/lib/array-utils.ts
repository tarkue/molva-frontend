export function zip<K, T>(a: Array<K>, b: Array<T>): Array<[K, T]> {
  return a.map((k, i) => [k, b[i]]);
}
