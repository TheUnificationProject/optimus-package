export type PaginationMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  nextRequest?: string;
  previousRequest?: string;
};

export type PaginatedResult<T, K extends string = 'data'> = Record<K, T[]> & {
  pagination: PaginationMeta;
};
