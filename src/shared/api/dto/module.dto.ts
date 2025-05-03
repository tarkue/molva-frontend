import { OnlyId } from './shared.dto';

export interface Module extends OnlyId {
  name: string;
}

export interface UpdateModuleDTO extends OnlyId {
  new_name: string;
}
