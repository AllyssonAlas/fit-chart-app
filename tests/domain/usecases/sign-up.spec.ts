import { type MockProxy, mock } from 'jest-mock-extended';
import type { HttpClient } from '@/domain/contracts/gateways';
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
  });

  beforeEach(() => {
    sut = setupSignUp(url, httpClient);
  });

  it('Should call HttpClient with correct input', async () => {
    await sut(input);

    expect(httpClient.request).toHaveBeenCalledWith({
      url,
      method: 'post',
      params: input,
    });
    expect(httpClient.request).toHaveBeenCalledTimes(1);
  });
});
