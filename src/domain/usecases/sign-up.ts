import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { EmailInUseError } from '@/domain/errors';

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
type Output = void;
export type SignUp = (input: Input) => Promise<Output>;
type Setup = (url: string, httpClient: HttpClient) => SignUp;

export const setupSignUp: Setup = (url, httpClient) => {
  return async (input) => {
    const { statusCode } = await httpClient.request({
      url,
      method: 'post',
      params: input,
    });

    switch (statusCode) {
      case HttpStatusCode.forbidden:
        throw new EmailInUseError();
      default:
        return null;
    }
  };
};
