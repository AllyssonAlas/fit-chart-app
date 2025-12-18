import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Button } from '@/presentation/components/Button';

describe('Button', () => {
  beforeEach(() => {
    render(<Button title="any_title" />);
  });

  it('Should render button not disabled or with loading state', () => {
    const button = screen.getByTestId('submit-button');
    const buttonLoadingIndicator = screen.queryByTestId(
      'button-loading-indicator',
    );

    expect(button).not.toBeDisabled();
    expect(buttonLoadingIndicator).toBeNull();
  });
});
