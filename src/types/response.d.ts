interface Response<T> {
  status: number;
  message: string;
  cursor?: number;
  data: T;
}
