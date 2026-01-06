import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { UnexpectedError } from '@/domain/errors';
import { Home } from '@/presentation/screens/Home';

const makeSut = (
  useCaseOutput: any = {
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
  },
) => {
  const loadUserCurrentFitChartUsecase = jest
    .fn()
    .mockResolvedValue(useCaseOutput);
  render(<Home loadUserCurrentFitChart={loadUserCurrentFitChartUsecase} />);
  waitFor(() => {
    screen.getByTestId('loading-indicator');
  });
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
    makeSut(Promise.reject(new UnexpectedError()));

    const noContentMessage = await screen.findByTestId('no-content-message');
    const noContentButton = await screen.findByTestId('no-content-button');

    expect(noContentMessage).toHaveTextContent(
      'Erro ao carregar ficha de treino.',
    );
    expect(noContentButton).toBeTruthy();
  });

  it('Should present retry LoadUserCurrentFitChart on error button press', async () => {
    const { loadUserCurrentFitChartUsecase } = makeSut(
      Promise.reject(new UnexpectedError()),
    );

    const noContentButton = await screen.findByTestId('no-content-button');

    fireEvent.press(noContentButton);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
    expect(loadUserCurrentFitChartUsecase).toHaveBeenCalledTimes(2);
  });

  it('Should present a message text if LoadUserCurrentFitChart returns null', async () => {
    makeSut(null);

    const messageText = await screen.findByTestId('no-content-message');

    expect(messageText).toHaveTextContent(
      'Você ainda não possui uma ficha de treino.',
    );
  });
});
