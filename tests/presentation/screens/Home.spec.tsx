import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Home } from '@/presentation/screens/Home';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('Should start with correct initial state', () => {
    const loadingIndicator = screen.getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });
});
