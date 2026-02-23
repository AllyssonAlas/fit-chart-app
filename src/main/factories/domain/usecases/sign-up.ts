import { type SignUp, setupSignUp } from '@/domain/usecases';
import { makeApiUrl, makeHttpClientGateway } from '@/main/factories/infra/gateways';

export const makeSignUpUsecase = (): SignUp => {
  return setupSignUp(makeApiUrl('/signup'), makeHttpClientGateway());
};
