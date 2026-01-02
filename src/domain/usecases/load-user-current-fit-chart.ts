import type { HttpClient } from '@/domain/contracts/gateways';

type Output = void;
export type LoadUserCurrentFitChart = () => Promise<Output>;
export type Setup = (
  url: string,
  httpClient: HttpClient,
) => LoadUserCurrentFitChart;

export const setupLoadUserCurrentFitChart: Setup = (
  url: string,
  httpClient: HttpClient,
) => {
  return async () => {
    await httpClient.request({ url, method: 'get' });
  };
};
