import { type MockProxy, mock } from 'jest-mock-extended';

import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { UnexpectedError } from '@/domain/errors';

import {
  type LoadUserCurrentFitChart,
  setupLoadUserCurrentFitChart,
} from '@/domain/usecases';

describe('LoadUserCurrentFitChart', () => {
  const url = 'any_url';

  let sut: MockProxy<LoadUserCurrentFitChart>;
  let httpClient: MockProxy<HttpClient>;

  beforeAll(() => {
    httpClient = mock();
    httpClient.request.mockResolvedValue({
      statusCode: HttpStatusCode.ok,
    });
  });

  beforeEach(() => {
    sut = setupLoadUserCurrentFitChart(url, httpClient);
  });

  it('Should call HttpClient with correct input', async () => {
    await sut();

    expect(httpClient.request).toHaveBeenCalledWith({
      url,
      method: 'get',
    });
    expect(httpClient.request).toHaveBeenCalledTimes(1);
  });

  it('Should throw UnexpectedError if HttpClient returns 500', async () => {
    httpClient.request.mockResolvedValueOnce({
      statusCode: HttpStatusCode.serverError,
    });

    const promise = sut();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
