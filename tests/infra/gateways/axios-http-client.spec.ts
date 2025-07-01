import axios from 'axios';

import { HttpStatusCode } from '@/domain/contracts/gateways';
import { AxiosHttpClient } from '@/infra/gateways';

jest.mock('axios');

describe('AxiosHttpClient', () => {
  const input = {
    url: 'any_url',
    method: 'post',
    body: { any: 'any' },
  };
  1;

  let sut: AxiosHttpClient;
  let fakeAxios: jest.Mocked<typeof axios>;

  beforeAll(() => {
    fakeAxios = axios as jest.Mocked<typeof axios>;
    fakeAxios.request.mockResolvedValue({
      status: HttpStatusCode.ok,
      data: { any: 'any' },
      config: null,
      headers: null,
      statusText: null,
    });
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

  it('Should return correct output on success', async () => {
    const output = await sut.request(input);

    expect(output).toEqual({
      statusCode: 200,
      body: { any: 'any' },
    });
  });

  it('Should return correct output on http error', async () => {
    fakeAxios.request.mockRejectedValueOnce({
      response: { data: 'any_data', status: HttpStatusCode.forbidden },
    });

    const output = await sut.request(input);

    expect(output).toEqual({ body: 'any_data', statusCode: 403 });
  });
});
