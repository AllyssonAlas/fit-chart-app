import { type MockProxy, mock } from 'jest-mock-extended';

import { type GetStorage, type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { AuthorizeHttpClient } from '@/infra/decorators';

import { mockAuthedUser } from '@/tests/mocks/domain/entitites';

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
    storage.get.mockResolvedValue(mockAuthedUser());
    httpClient = mock();
    httpClient.request.mockResolvedValue({
      statusCode: HttpStatusCode.ok,
      body: { any: 'any' },
    });
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

  it('Should add authToken header to input to call HttpClient', async () => {
    await sut.request(input);

    expect(httpClient.request).toHaveBeenCalledWith({
      ...input,
      headers: { ...input.headers, authToken: 'any_token' },
    });
    expect(httpClient.request).toHaveBeenCalledTimes(1);
  });

  it('Should add authToken header to input to call HttpClient', async () => {
    const output = await sut.request(input);

    expect(output).toEqual({
      statusCode: HttpStatusCode.ok,
      body: { any: 'any' },
    });
  });
});
