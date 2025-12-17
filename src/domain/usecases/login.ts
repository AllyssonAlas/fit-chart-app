import type { HttpClient } from '@/domain/contracts/gateways';

type Input = {
  email: string;
  password: string;
};

export type Login = (input: Input) => Promise<void>;
type Setup = (url: string, httpClient: HttpClient) => Login;

export const setupLogin: Setup = (url, httpClient) => {
  return async (input) => {
    await httpClient.request({ url, method: 'post', body: input });
  };
};
