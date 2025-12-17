import { type MockProxy, mock } from 'jest-mock-extended';

import type { HttpClient } from '@/domain/contracts/gateways';
import { type Login, setupLogin } from '@/domain/usecases';

describe('Login', () => {
  const url = 'any_url';

  const input = {
    email: 'any_email@mail.com',
    password: 'any_password',
  };

  let sut: MockProxy<Login>;
  let httpClient: MockProxy<HttpClient>;

  beforeAll(() => {
    httpClient = mock();
  });

  beforeEach(() => {
    sut = setupLogin(url, httpClient);
  });

  it('Should call HttpClient with correct input', async () => {
    await sut(input);

    expect(httpClient.request).toHaveBeenCalledWith({
      url,
      method: 'post',
      body: input,
    });
    expect(httpClient.request).toHaveBeenCalledTimes(1);
  });
});
