import { Format } from '../dto/discipline.dto';
import { SortOrder } from './order';
import { SortBy } from './sort';

export interface DisciplineSearchOptions {
  name_search?: string;
  module_search?: string;
  format_filter?: Format;
  sort_by?: keyof typeof SortBy;
  sort_order?: SortOrder;
}
