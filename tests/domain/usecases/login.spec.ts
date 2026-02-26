import { type MockProxy, mock } from 'jest-mock-extended';

import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { type Login, setupLogin } from '@/domain/usecases';

import { mockAuthedUser } from '@/tests/mocks/domain/entitites';

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
      body: mockAuthedUser(),
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

  it('Should throw UnexpectedError if HttpClient returns 500', async () => {
    httpClient.request.mockResolvedValueOnce({
      statusCode: HttpStatusCode.serverError,
    });

    const promise = sut(input);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('Should return correct output on success', async () => {
    const result = await sut(input);

    expect(result).toEqual(mockAuthedUser());
  });
});
