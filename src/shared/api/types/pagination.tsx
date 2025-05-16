import { PageOffsetOptions } from './page';

export interface Pagination extends PageOffsetOptions {
  total: number;
  total_pages: number;
}
