import { type MockProxy, mock } from 'jest-mock-extended';

import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { EmailInUseError, UnexpectedError } from '@/domain/errors';
import { type SignUp, setupSignUp } from '@/domain/usecases';

describe('SignUp', () => {
  const url = 'any_url';

  const input = {
    id: 'any_user_id',
    name: 'any_user_name',
    email: 'any_email@mail.com',
    password: 'any_password',
    contact: 'any_contact',
    role: 'any_role',
    address: {
      city: 'any_city',
      neighborhood: 'any_neighborhood',
      number: 'any_number',
      postalCode: 'any_postal_code',
      state: 'any_state',
      street: 'any_street',
      complement: 'any_complement',
    },
  };

  let sut: MockProxy<SignUp>;
  let httpClient: MockProxy<HttpClient>;

  beforeAll(() => {
    httpClient = mock();
    httpClient.request.mockResolvedValue({
      statusCode: HttpStatusCode.ok,
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        authToken: 'any_token',
      },
    });
  });

  beforeEach(() => {
    sut = setupSignUp(url, httpClient);
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

  it('Should throw EmailInUseError if HttpClient returns 401', async () => {
    httpClient.request.mockResolvedValueOnce({
      statusCode: HttpStatusCode.forbidden,
    });

    const promise = sut(input);

    await expect(promise).rejects.toThrow(new EmailInUseError());
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

    expect(result).toEqual({
      name: 'any_name',
      email: 'any_email@mail.com',
      authToken: 'any_token',
    });
  });
});
