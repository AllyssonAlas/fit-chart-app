import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { EmailInUseError, UnexpectedError } from '@/domain/errors';

type Input = {
  name: string;
  email: string;
  password: string;
  role: string;
  contact: string;
  address?: {
    number: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    complement?: string;
  };
};
type Output = { name: string; email: string; authToken: string };
export type SignUp = (input: Input) => Promise<Output>;
type Setup = (url: string, httpClient: HttpClient) => SignUp;

export const setupSignUp: Setup = (url, httpClient) => {
  return async (input) => {
    const { statusCode, body } = await httpClient.request({
      url,
      method: 'post',
      body: input,
    });
    switch (statusCode) {
      case HttpStatusCode.ok:
        return body;
      case HttpStatusCode.forbidden:
        throw new EmailInUseError();
      default:
        throw new UnexpectedError();
    }
  };
};
