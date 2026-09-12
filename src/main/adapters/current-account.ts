import type { AuthedUser } from '@/domain/entities/types';
import { makeStorageGateway } from '@/main/factories/infra/gateways';

export const setCurrentAccountAdapter = async (account: AuthedUser) => {
  await makeStorageGateway().set({ key: 'account', value: account });
};

export const getCurrentAccountAdapter = async (): Promise<AuthedUser | null> => {
  const authedUser = await makeStorageGateway().get({ key: 'account' });
  return authedUser;
};
