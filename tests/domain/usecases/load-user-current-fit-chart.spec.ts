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
      body: {
        id: 'any_fit_chart_id',
        userId: 'any_user_id',
        goals: 'any_goal',
        observation: 'any_observation',
        divisions: [
          { name: 'any_division_1', weekDays: [0, 1] },
          { name: 'any_division_2', weekDays: [2, 3] },
        ],
        exercises: [
          {
            exerciseId: 'any_exercise_id_1',
            name: 'any_exercise_name_1',
            equipment: 'any_equipment_1',
            series: 4,
            repts: 10,
            weight: 20,
            division: 'any_division_1',
            category: 'any_category_1',
          },
          {
            exerciseId: 'any_exercise_id_2',
            name: 'any_exercise_name_2',
            series: 3,
            repts: 12,
            weight: 24,
            division: 'any_division_1',
            category: 'any_category_1',
          },
        ],
      },
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

  it('Should return null if HttpClient returns 204', async () => {
    httpClient.request.mockResolvedValueOnce({
      statusCode: HttpStatusCode.noContent,
    });

    const result = await sut();

    expect(result).toBeNull();
  });

  it('Should return correct output on success', async () => {
    const result = await sut();

    expect(result).toEqual({
      id: 'any_fit_chart_id',
      userId: 'any_user_id',
      goals: 'any_goal',
      observation: 'any_observation',
      divisions: [
        { name: 'any_division_1', weekDays: [0, 1] },
        { name: 'any_division_2', weekDays: [2, 3] },
      ],
      exercises: [
        {
          exerciseId: 'any_exercise_id_1',
          name: 'any_exercise_name_1',
          equipment: 'any_equipment_1',
          series: 4,
          repts: 10,
          weight: 20,
          division: 'any_division_1',
          category: 'any_category_1',
        },
        {
          exerciseId: 'any_exercise_id_2',
          name: 'any_exercise_name_2',
          series: 3,
          repts: 12,
          weight: 24,
          division: 'any_division_1',
          category: 'any_category_1',
        },
      ],
    });
  });
});
