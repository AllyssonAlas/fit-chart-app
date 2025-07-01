export enum HttpStatusCode {
  ok = 200,
  forbidden = 403,
  serverError = 500,
}

export interface HttpClient {
  request: (input: HttpClient.Input) => Promise<HttpClient.Output>;
}

export namespace HttpClient {
  export type Input = {
    url: string;
    method: string;
    body: any;
  };

  export type Output = {
    statusCode: HttpStatusCode;
    body?: any;
  };
}
