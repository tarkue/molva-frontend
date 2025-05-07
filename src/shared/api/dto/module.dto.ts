import { OnlyId } from './shared.dto';

export interface Module extends OnlyId {
  name: string;
  created_at: string;
}
