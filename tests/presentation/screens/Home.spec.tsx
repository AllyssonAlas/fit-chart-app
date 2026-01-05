import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Home } from '@/presentation/screens/Home';

describe('Home', () => {
  let loadUserCurrentFitChartUsecase: jest.Mock;

  beforeEach(() => {
    loadUserCurrentFitChartUsecase = jest.fn();
    render(<Home loadUserCurrentFitChart={loadUserCurrentFitChartUsecase} />);
  });

  it('Should start with correct initial state', () => {
    const loadingIndicator = screen.getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  it('Should LoadUserCurrentFitChart usecase on start', () => {
    expect(loadUserCurrentFitChartUsecase).toHaveBeenCalledTimes(1);
  });
});
