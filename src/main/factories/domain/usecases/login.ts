import { type Login, setupLogin } from '@/domain/usecases';
import { makeApiUrl, makeHttpClientGateway } from '@/main/factories/infra/gateways';

export const makeLoginUsecase = (): Login => {
  return setupLogin(makeApiUrl('/login'), makeHttpClientGateway());
};
