import { type MockProxy, mock } from 'jest-mock-extended';

import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { InvalidCredentialsError } from '@/domain/errors';
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
    httpClient.request.mockResolvedValue({
      statusCode: HttpStatusCode.ok,
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        accessToken: 'any_token',
      },
    });
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

  it('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    httpClient.request.mockResolvedValueOnce({
      statusCode: HttpStatusCode.unauthorized,
    });

    const promise = sut(input);

    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
