import { type MockProxy, mock } from 'jest-mock-extended';
import type { GetStorage } from '@/domain/contracts/gateways';
import { AuthorizeHttpClient } from '@/infra/decorators';

describe('AuthorizeHttpClient', () => {
  let sut: AuthorizeHttpClient;
  let storage: MockProxy<GetStorage>;

  beforeAll(() => {
    storage = mock();
  });

  beforeEach(() => {
    sut = new AuthorizeHttpClient(storage);
  });

  it('Should call GetStorage with correct input', async () => {
    await sut.request();

    expect(storage.get).toHaveBeenCalledWith({ key: 'account' });
    expect(storage.get).toHaveBeenCalledTimes(1);
  });

  it('Should call GetStorage with correct input', async () => {
    const error = new Error('storage_error');
    storage.get.mockRejectedValueOnce(error);

    const promise = sut.request();

    await expect(promise).rejects.toThrow(error);
  });
});
