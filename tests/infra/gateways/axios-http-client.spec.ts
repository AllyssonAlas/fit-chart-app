import axios from 'axios';

import { AxiosHttpClient } from '@/infra/gateways/';

jest.mock('axios');

describe('AxiosHttpClient', () => {
  const input = {
    url: 'any_url',
    method: 'post',
    body: { any: 'any' },
  };

  let sut: AxiosHttpClient;
  let fakeAxios: jest.Mocked<typeof axios>;

  beforeAll(() => {
    fakeAxios = axios as jest.Mocked<typeof axios>;
  });

  beforeEach(() => {
    sut = new AxiosHttpClient();
  });

  it('Should call request with correct input', async () => {
    await sut.request(input);

    expect(fakeAxios.request).toHaveBeenCalledWith({
      url: 'any_url',
      method: 'post',
      body: { any: 'any' },
    });
    expect(fakeAxios.request).toHaveBeenCalledTimes(1);
  });
});
