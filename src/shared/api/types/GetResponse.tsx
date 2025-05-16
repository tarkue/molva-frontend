import { Pagination } from './pagination';

export interface GetResponse<T> {
  data: T;
  pagination: Pagination;
}
