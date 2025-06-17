import type { HttpClient } from '@/domain/contracts/gateways';

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
    await httpClient.request({ url, method: 'post', params: input });
  };
};
