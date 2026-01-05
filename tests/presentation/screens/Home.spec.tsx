import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { UnexpectedError } from '@/domain/errors';
import { Home } from '@/presentation/screens/Home';

const makeSut = (
  loadUserCurrentFitChartUsecase = jest.fn().mockResolvedValue({
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
        series: 4,
        repts: 12,
        weight: 20,
        division: 'any_division_1',
      },
      {
        exerciseId: 'any_exercise_id_2',
        series: 3,
        repts: 10,
        weight: 30,
        division: 'any_division_2',
      },
    ],
  }),
) => {
  render(<Home loadUserCurrentFitChart={loadUserCurrentFitChartUsecase} />);
  return { loadUserCurrentFitChartUsecase };
};

describe('Home', () => {
  it('Should start with correct initial state', () => {
    makeSut();

    const loadingIndicator = screen.getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  it('Should LoadUserCurrentFitChart usecase on start', () => {
    const { loadUserCurrentFitChartUsecase } = makeSut();

    expect(loadUserCurrentFitChartUsecase).toHaveBeenCalledTimes(1);
  });

  it('Should present error message if LoadUserCurrentFitChart throws UnexpectedError', async () => {
    const loadUserCurrentFitChartUsecase = jest
      .fn()
      .mockRejectedValueOnce(new UnexpectedError());
    makeSut(loadUserCurrentFitChartUsecase);

    const errorText = await screen.findByTestId('error-message');
    const errorButton = await screen.findByTestId('error-button');

    expect(errorText).toHaveTextContent('Erro ao carregar ficha de treino.');
    expect(errorButton).toBeTruthy();
  });
});
