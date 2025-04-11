import { enumToPair } from '@/shared/lib/enum-utils';

export enum Format {
  offline = 'Оффлайн',
  online = 'Онлайн',
  mixed = 'Смешанный',
}

const FormatPair = enumToPair(Format);

export { FormatPair };
