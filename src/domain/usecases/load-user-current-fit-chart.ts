import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { UnexpectedError } from '@/domain/errors';

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
    const { statusCode } = await httpClient.request({ url, method: 'get' });
    if (statusCode === HttpStatusCode.serverError) throw new UnexpectedError();
  };
};
