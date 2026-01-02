import { type MockProxy, mock } from 'jest-mock-extended';

import type { HttpClient } from '@/domain/contracts/gateways';

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
});
