import type { HttpClient } from '@/domain/contracts/gateways';
import { AxiosHttpClient } from '@/infra/gateways';

export const makeHttpClientGateway = (): HttpClient => {
  return new AxiosHttpClient();
};
