import { Storage } from '@/infra/gateways';

export const makeStorageGateway = (): Storage => {
  return new Storage();
};
