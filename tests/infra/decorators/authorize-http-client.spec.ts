import { type MockProxy, mock } from 'jest-mock-extended';
import type { GetStorage, HttpClient } from '@/domain/contracts/gateways';
import { AuthorizeHttpClient } from '@/infra/decorators';

describe('AuthorizeHttpClient', () => {
  const input = {
    url: 'any_url',
    method: 'post',
    body: { any: 'any' },
    headers: { any: 'any' },
  };

  let sut: AuthorizeHttpClient;
  let storage: MockProxy<GetStorage>;
  let httpClient: MockProxy<HttpClient>;

  beforeAll(() => {
    storage = mock();
    httpClient = mock();
  });

  beforeEach(() => {
    sut = new AuthorizeHttpClient(storage, httpClient);
  });

  it('Should call GetStorage with correct input', async () => {
    await sut.request(input);

    expect(storage.get).toHaveBeenCalledWith({ key: 'account' });
    expect(storage.get).toHaveBeenCalledTimes(1);
  });

  it('Should call GetStorage with correct input', async () => {
    const error = new Error('storage_error');
    storage.get.mockRejectedValueOnce(error);

    const promise = sut.request(input);

    await expect(promise).rejects.toThrow(error);
  });

  it('Should call HttpClient with correct input without modifying the original input if GetStorage returns null', async () => {
    storage.get.mockResolvedValueOnce(null);

    await sut.request(input);

    expect(httpClient.request).toHaveBeenCalledWith(input);
    expect(httpClient.request).toHaveBeenCalledTimes(1);
  });
});
