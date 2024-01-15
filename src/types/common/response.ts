export type TResponse<T> = {
  data: T;
  message: string;
  status: number;
};
