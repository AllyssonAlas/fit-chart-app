export enum HttpStatusCode {
  ok = 200,
  forbidden = 403,
}

export interface HttpClient {
  request: (input: HttpClient.Input) => Promise<HttpClient.Output>;
}

export namespace HttpClient {
  export type Input = {
    url: string;
    method: 'post';
    params: any;
  };

  export type Output = {
    statusCode: HttpStatusCode;
    body?: any;
  };
}
