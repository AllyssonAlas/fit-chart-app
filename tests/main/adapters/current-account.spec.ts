import { Storage } from '@/infra/gateways';

import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters';

import { mockAuthedUser } from '@/tests/mocks/domain/entitites';

describe('CurrentAccountAdapter', () => {
  describe('setCurrentAccountAdapter', () => {
    it('Should call Storage.set with correct input', async () => {
      const setSpy = jest.spyOn(Storage.prototype, 'set');

      await setCurrentAccountAdapter(mockAuthedUser());

      expect(setSpy).toHaveBeenCalledWith({ key: 'account', value: mockAuthedUser() });
      expect(setSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCurrentAccountAdapter', () => {
    it('Should call Storage.get with correct input', async () => {
      const getSpy = jest.spyOn(Storage.prototype, 'get');

      await getCurrentAccountAdapter();

      expect(getSpy).toHaveBeenCalledWith({ key: 'account' });
      expect(getSpy).toHaveBeenCalledTimes(1);
    });
  });
});
