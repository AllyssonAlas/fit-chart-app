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
});
