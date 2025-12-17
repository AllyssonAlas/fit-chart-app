import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';

type Input = {
  email: string;
  password: string;
};
type Output = { name: string; email: string; accessToken: string };
export type Login = (input: Input) => Promise<Output>;
type Setup = (url: string, httpClient: HttpClient) => Login;

export const setupLogin: Setup = (url, httpClient) => {
  return async (input) => {
    const { statusCode, body } = await httpClient.request({
      url,
      method: 'post',
      body: input,
    });
    switch (statusCode) {
      case HttpStatusCode.ok:
        return body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  };
};
