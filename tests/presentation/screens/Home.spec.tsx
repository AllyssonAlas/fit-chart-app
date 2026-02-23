import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import type { FitChart } from '@/domain/entities/types';
import { UnexpectedError } from '@/domain/errors';
import { Home } from '@/presentation/screens/Home';

import { mockFitChart } from '@/tests/mocks/domain/entitites';

const makeSut = (useCaseOutput: FitChart | Promise<never> | null = mockFitChart()) => {
  const loadUserCurrentFitChartUsecase = jest.fn().mockResolvedValue(useCaseOutput);
  render(<Home loadUserCurrentFitChart={loadUserCurrentFitChartUsecase} />);
  waitFor(() => {
    screen.getByTestId('loading-indicator');
  });
  return { loadUserCurrentFitChartUsecase };
};

describe('Home', () => {
  const mockDate = new Date('2026-02-23T10:00:00.000Z');

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

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

    expect(noContentMessage).toHaveTextContent('Erro ao carregar ficha de treino.');
    expect(noContentButton).toBeTruthy();
  });

  it('Should present retry LoadUserCurrentFitChart on error button press', async () => {
    const { loadUserCurrentFitChartUsecase } = makeSut(Promise.reject(new UnexpectedError()));

    const noContentButton = await screen.findByTestId('no-content-button');

    fireEvent.press(noContentButton);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
    expect(loadUserCurrentFitChartUsecase).toHaveBeenCalledTimes(2);
  });

  it('Should present a message text if LoadUserCurrentFitChart returns null', async () => {
    makeSut(null);

    const messageText = await screen.findByTestId('no-content-message');

    expect(messageText).toHaveTextContent('Você ainda não possui uma ficha de treino.');
  });

  it('Should present a message text if LoadUserCurrentFitChart returns a FitChart but there are no exercises for the current day', async () => {
    makeSut({ ...mockFitChart(), divisions: [{ name: 'any_division', weekDays: [3] }] });

    const messageText = await screen.findByTestId('no-content-message');

    expect(messageText).toHaveTextContent('Você não possui exercicios para hoje.');
  });

  it('Should present a message text if LoadUserCurrentFitChart returns a FitChart without exercises', async () => {
    makeSut({ ...mockFitChart(), exercises: [] });

    const messageText = await screen.findByTestId('no-content-message');

    expect(messageText).toHaveTextContent('Você não possui exercicios para hoje.');
  });

  it('Should present fit chart on success', async () => {
    makeSut();

    await waitForElementToBeRemoved(() => screen.getByTestId('loading-indicator'));

    const messageText = screen.getByTestId('date-text');
    const goalText = screen.getByTestId('goals-text');
    const exercisesList = screen.getByTestId('exercises-list');
    const categoryOne = screen.getByTestId('exercises-category-1');
    const categoryOneExerciseOneName = screen.getByTestId('category-1-exercise-1-name');
    const categoryOneExerciseOneEquipment = screen.getByTestId('category-1-exercise-1-equipment');
    const categoryOneExerciseOneSeries = screen.getByTestId('category-1-exercise-1-series');
    const categoryOneExerciseOneRepts = screen.getByTestId('category-1-exercise-1-repts');
    const categoryOneExerciseOneWeight = screen.getByTestId('category-1-exercise-1-weight');
    const categoryOneExerciseTwoName = screen.getByTestId('category-1-exercise-2-name');
    const categoryOneExerciseTwoEquipment = screen.getByTestId('category-1-exercise-2-equipment');
    const categoryOneExerciseTwoSeries = screen.getByTestId('category-1-exercise-2-series');
    const categoryOneExerciseTwoRepts = screen.getByTestId('category-1-exercise-2-repts');
    const categoryOneExerciseTwoWeight = screen.getByTestId('category-1-exercise-2-weight');
    const categoryOneExerciseThreeName = screen.getByTestId('category-1-exercise-3-name');
    const categoryOneExerciseThreeEquipment = screen.getByTestId('category-1-exercise-3-equipment');
    const categoryOneExerciseThreeSeries = screen.getByTestId('category-1-exercise-3-series');
    const categoryOneExerciseThreeRepts = screen.getByTestId('category-1-exercise-3-repts');
    const categoryOneExerciseThreeWeight = screen.getByTestId('category-1-exercise-3-weight');
    const categoryTwo = screen.getByTestId('exercises-category-2');
    const categoryTwoExerciseOneName = screen.getByTestId('category-2-exercise-1-name');
    const categoryTwoExerciseOneEquipment = screen.getByTestId('category-2-exercise-1-equipment');
    const categoryTwoExerciseOneSeries = screen.getByTestId('category-2-exercise-1-series');
    const categoryTwoExerciseOneRepts = screen.getByTestId('category-2-exercise-1-repts');
    const categoryTwoExerciseOneWeight = screen.getByTestId('category-2-exercise-1-weight');
    const categoryTwoExerciseTwoName = screen.getByTestId('category-2-exercise-2-name');
    const categoryTwoExerciseTwoEquipment = screen.getByTestId('category-2-exercise-2-equipment');
    const categoryTwoExerciseTwoSeries = screen.getByTestId('category-2-exercise-2-series');
    const categoryTwoExerciseTwoRepts = screen.getByTestId('category-2-exercise-2-repts');
    const categoryTwoExerciseTwoWeight = screen.getByTestId('category-2-exercise-2-weight');

    expect(messageText).toHaveTextContent('Segunda-feira, 23');
    expect(goalText).toHaveTextContent('any_goal');
    expect(exercisesList.children).toHaveLength(2);
    expect(categoryOne).toHaveTextContent('any_category_1');
    expect(categoryOneExerciseOneName).toHaveTextContent('any_exercise_name_1');
    expect(categoryOneExerciseOneEquipment).toHaveTextContent('any_equipment_1');
    expect(categoryOneExerciseOneSeries).toHaveTextContent('4\nséries');
    expect(categoryOneExerciseOneRepts).toHaveTextContent('10');
    expect(categoryOneExerciseOneWeight).toHaveTextContent('20');
    expect(categoryOneExerciseTwoName).toHaveTextContent('any_exercise_name_2');
    expect(categoryOneExerciseTwoEquipment).toHaveTextContent('');
    expect(categoryOneExerciseTwoSeries).toHaveTextContent('3\nséries');
    expect(categoryOneExerciseTwoRepts).toHaveTextContent('12');
    expect(categoryOneExerciseTwoWeight).toHaveTextContent('24');
    expect(categoryOneExerciseThreeName).toHaveTextContent('any_exercise_name_3');
    expect(categoryOneExerciseThreeEquipment).toHaveTextContent('any_equipment_3');
    expect(categoryOneExerciseThreeSeries).toHaveTextContent('3\nséries');
    expect(categoryOneExerciseThreeRepts).toHaveTextContent('10');
    expect(categoryOneExerciseThreeWeight).toHaveTextContent('30');
    expect(categoryTwo).toHaveTextContent('any_category_2');
    expect(categoryTwoExerciseOneName).toHaveTextContent('any_exercise_name_4');
    expect(categoryTwoExerciseOneEquipment).toHaveTextContent('any_equipment_4');
    expect(categoryTwoExerciseOneSeries).toHaveTextContent('5\nséries');
    expect(categoryTwoExerciseOneRepts).toHaveTextContent('10');
    expect(categoryTwoExerciseOneWeight).toHaveTextContent('18');
    expect(categoryTwoExerciseTwoName).toHaveTextContent('any_exercise_name_5');
    expect(categoryTwoExerciseTwoEquipment).toHaveTextContent('any_equipment_5');
    expect(categoryTwoExerciseTwoSeries).toHaveTextContent('4\nséries');
    expect(categoryTwoExerciseTwoRepts).toHaveTextContent('8');
    expect(categoryTwoExerciseTwoWeight).toHaveTextContent('26');
  });
});
