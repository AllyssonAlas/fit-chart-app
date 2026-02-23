import axios, { AxiosError, AxiosHeaders } from 'axios';

import { HttpStatusCode } from '@/domain/contracts/gateways';
import { AxiosHttpClient } from '@/infra/gateways';

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
    const headers = new AxiosHeaders();
    const config = { url: 'any_url', headers };
    const error = new AxiosError('error_message', HttpStatusCode.forbidden.toString(), config, null);
    error.response = {
      status: 403,
      data: 'any_data',
      statusText: 'forbidden',
      headers,
      config,
    };
    fakeAxios.request.mockRejectedValueOnce(error);

    const output = await sut.request(input);

    expect(output).toEqual({ body: 'any_data', statusCode: 403 });
  });

  it('Should rethrow error if axios throw', async () => {
    const error = new Error('axios_client_error');
    fakeAxios.request.mockRejectedValueOnce(error);

    const promise = sut.request(input);

    await expect(promise).rejects.toThrow(error);
  });
});
