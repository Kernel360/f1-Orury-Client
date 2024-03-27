export type TResponse<T> = {
  data: T;
  message: string;
  status: number;
};

export interface Pageable {
  page_number: number;
  page_size: number;
  sort: [];
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Pagination {
  pageable: Pageable;
  total_pages: number;
  total_elements: number;
  last: boolean;
  size: number;
  number: number;
  sort: [];
  number_of_elements: number;
  first: boolean;
  empty: boolean;
}
