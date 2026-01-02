import { type HttpClient, HttpStatusCode } from '@/domain/contracts/gateways';
import { UnexpectedError } from '@/domain/errors';

type Output = {
  id: string;
  userId: string;
  goals: string;
  observation?: string;
  divisions: {
    name: string;
    weekDays: number[];
  }[];
  exercises: {
    exerciseId: string;
    series: number;
    repts: number;
    weight: number;
    division: string;
  }[];
} | null;
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
    const { body, statusCode } = await httpClient.request({
      url,
      method: 'get',
    });
    switch (statusCode) {
      case HttpStatusCode.ok:
        return body;
      case HttpStatusCode.noContent:
        return null;
      default:
        throw new UnexpectedError();
    }
  };
};
