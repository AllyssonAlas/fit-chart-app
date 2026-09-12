import type { HttpClient } from '@/domain/contracts/gateways';
import { AuthorizeHttpClient } from '@/infra/decorators';
import { makeHttpClientGateway, makeStorageGateway } from '@/main/factories/infra/gateways';

export const makeAuthorizeHttpClient = (): HttpClient => {
  return new AuthorizeHttpClient(makeStorageGateway(), makeHttpClientGateway());
};
