import { Storage } from '@/infra/gateways';
import { setCurrentAccountAdapter } from '@/main/adapters';

import { mockAuthedUser } from '@/tests/mocks/domain/entitites';

describe('CurrentAccountAdapter', () => {
  it('Should call Storage.set with correct input', async () => {
    const setSpy = jest.spyOn(Storage.prototype, 'set');

    await setCurrentAccountAdapter(mockAuthedUser());

    expect(setSpy).toHaveBeenCalledWith({ key: 'account', value: mockAuthedUser() });
    expect(setSpy).toHaveBeenCalledTimes(1);
  });
});
