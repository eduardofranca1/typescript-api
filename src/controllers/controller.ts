export interface IHttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface Controller {
  handle(request: IHttpRequest<any>): Promise<IHttpResponse<any>>;
}
