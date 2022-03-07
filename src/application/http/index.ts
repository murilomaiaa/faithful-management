export type HttpRequest<T> = {
  body: T;
};

export type HttpResponse<T = any> = {
  body: T;
  status: number;
};
