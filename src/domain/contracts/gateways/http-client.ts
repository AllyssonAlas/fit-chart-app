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
    statusCode: number;
    body: any;
  };
}
