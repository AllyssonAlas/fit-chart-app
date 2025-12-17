import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { InvalidCredentialsError } from '@/domain/errors';

type Input = {
  email: string;
  password: string;
};

export type Login = (input: Input) => Promise<void>;
type Setup = (url: string, httpClient: HttpClient) => Login;

export const setupLogin: Setup = (url, httpClient) => {
  return async (input) => {
    const { statusCode } = await httpClient.request({
      url,
      method: 'post',
      body: input,
    });
    if (statusCode === HttpStatusCode.unauthorized) {
      throw new InvalidCredentialsError();
    }
  };
};
